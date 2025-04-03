/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5GjQoBXP19qbx8EJ68rt1otgNpPpcxkhjJ5pdCKtYDPnNWrjw7TbNqNKuBxxViqAwRoe9p5qgBRkfqnq2GXZyohU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wh33LcQHrQFkxt55ZYNC5gP6SHUU8mfmD74da1PREfSTsfoqJDmAPAi5yqV9BFPPAvAyE1ysxnE2nWAEqdD4VkT",
  "key1": "3duvx13iEinvcsL5Mo8gwNQfbps3rtaFk2p2yz7e94dRuH47TtwcuB4US3uKzTRXSgp9K8C1KGBHTFdwGsAJzDte",
  "key2": "3SYfJFakLjfgCPttc5GCTQZbG9jVEP4keh3ZZJFMaczLVTSxp1c9EW8RLRYBcck2pazUox8pzCYFbeDy5dbFhyxX",
  "key3": "WtNJneCT6m9p8W55y4xgLDCcBtFMz5AwbqyRwfk1iehU8P67wmAt1qSkHXvoJoWLSUsxUEiHmZYYu5gFNJ1sngi",
  "key4": "32yPSnciv3V7pEYEPsNSDzYo1sxayZUihSfuPPUj3vJ4YP625gtHd1MXMR4DXScbqTKmKBT49h5C8wasUJwLSpq3",
  "key5": "3weLPs6H6gnuRm5Sj7LMbMQ9pSJ1o9D2EDHJCTaQiB4gdF1DQJwt8ZgbNSLYUiezFHzdUFApULKrYqXZNzXwNwyQ",
  "key6": "YvXtTHi3qSbATzLTTXzQMapuRCJoJ5ifHVhXRurevzoxf6PBfq3YHyixXQqKCQLHTsKLPhUtuVVsakCuCb1SBom",
  "key7": "pNGG6X8vaXshjg1T3thcpTVzLRNYo65Qmtrvb31LxdhcT2zrAaKYmpPCcbMa5afy87PubZjtAwtVhpa3LxBc2ke",
  "key8": "3rczZae2TUV2gSSEYajWsUDkZWCFqe1P8ePGBsru9CQwW5wh5dGtGNqMxmoQQegzSa6mUULY4NTFTyV3b1F4itg5",
  "key9": "CxNNt1KB3L4NasGkQP7KaVPn6bT7yxvM9HutpnN8RkGj4ZJMqRwHKLZyDXCEsmHTukoGCWYHGwcKeAJMbsHBCGj",
  "key10": "3ccqbWPhvFA53H8Nq9ArpAoh5DFVDVJJZjsRWyQJ4qMNmFDJDYVFybL9Z6pdrMqJQyrext15G8XjccysgQ1NUdFw",
  "key11": "4J8vzNYfHYztoSrLLihyp3a5yYkwzpM4Q3mpxajNMGZJgXKKtFDb6TZiQpm27P1yWVKLM1oGC4e1D7AwqpSNKxET",
  "key12": "2UMxXFRExfq5zSiT9WBuWfYVL7bfRrohWrYPTtLfgUDWPRc3VxMo9qF24aRLnixuFLtHSnJz8oLQHPDnw9c6Dd1n",
  "key13": "2TBcrFawXeyaura6FaRqz5fnC3QPpJf5KwwxsKoAxGw5K3UpPGvJfGNQkc5fswwqLNZMyb1dAzDaEAPAx6RWJtAg",
  "key14": "3UXyJJ7STgCpbXeEqzZcDe1E8d6BKG1KNcFiTjH4bWvpYrcpSnCM1QKc27Ydp5bm6Fz4guJPQcMxzVZxXetLK9Rh",
  "key15": "5sNJ1cgvhwX7qfdkKDNEKPXpexsFCM8RSEEWH1bio2rhVd6UrDtw6VnqWPQCsAjT6ETDtrr7vk4prEmGXVLZQyFk",
  "key16": "4cmmqzuGATEZjpRjTBUrkAvMJ1popJK6uaha8Dtc1qw5KGuQJk34cASW1we5KKchWkFuNzjeGrKYgjR2MmgeSk4o",
  "key17": "5gPVWKcsuSyMzSn7eSJnyn5GYWd91vkSjXBNqNMz1HXoiJTKaQMDj2FDyCU5ZCQF97kL5zXUNgGs4sgfWfZrJMrX",
  "key18": "4D2Bf5sXE3xHD1zXVTkLpjDZBaNPzio9Cnnu7w8Ckn7BLTJC5xxtKciSxHN9k6W16aYACFsgXwbr5GJrBoBbF6dp",
  "key19": "3M7Uyg7vvNpwqPvnbZhit7cciVgA2FM9T1kTyEQ7VB9vuTkHQr6Z5kHY8ottQ6YswqsotTj9NdeEBgxZmTM7SV81",
  "key20": "2R5g3RuwatzCXd8z8cuyqQ64ZDqs8Dbpn3asSDUj1i7uV3k4pnEm7gMhVPNvGZ2iaWifQC5taZ6B4cinNk2KDXwy",
  "key21": "2jog26sNNyR2d3Xi65VXBjfSeU9WYWHwoXzcq4KVogaVevC9Vd5SdmAxFTJ6M2LpbAsCeA1NkvJPXePxBTmecpvc",
  "key22": "3SzsHPeJpSV3uxnnHLktkPMKiMDYTW2zrwZNNmRKvprBfp1Jt9rwazn3jwtbDkxRREwBHM5GgCFFErjCrJkcd22S",
  "key23": "4BdNcz6WAPGRtkTKeS887rWdE2FgU5P2sx2vYDuFcE4m1DgLUtrGDWYMqDcL6pqzqKmFAi6kCTegRVoZyrj5jzTH",
  "key24": "65aWrYZzEZT68A9GrU5fJzeTb4J5Weuu2E8u7drGJvUZXLK5tPj9qLk4PfPxEXS5CQNLxVURGMV7P7QmMHfNP4N4",
  "key25": "AY1dQV8MTmqGMrmAWsX7bw8WXrJm17kXXG4BZhXzaVFPSjETJACShvc3YJZ2JMprNERibCPP1bMWRkA6MRe5grJ",
  "key26": "bXaR8e6q5NhSfxnWimVf66JcJTjqZQLMnW2NnuLyPYUxcMhbn4R6gRoKUbPwgGXZcD5rvBuhzEoswC6XBSN1nRx",
  "key27": "28LaTxpLAzEnyuSuiS5dNB2u6b3cCDNSKTWcpYLGfe6tTXLYt8vSpSmtB4euuvK6Y6gEiY7rE9zJdUtEYqU3vH3H"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
