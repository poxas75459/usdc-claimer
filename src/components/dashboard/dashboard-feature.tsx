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
    "XHg2THgufQiW1caqzjSrCbyr1ptQAW7KJtMtZ8FnYof4yfJfMdtZZkop34TcGpbnMuNEMSfZXcRY6zNU89fXYpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeT5og4Ex5dPffaaxA1v91RCSZXkhuectritHxzeYhQc9JVELLMZ4TQNCK8o1eMjfH5ni36mS6WKy8DgyUybkLh",
  "key1": "124a9sgocf4CCU7Ypw7WJcJ2zyDUBTNCgfnTbMGKdooaza2ZWuZZjts16s74r8JKrwHnAgVis8sZi2tGYsvQZ2SS",
  "key2": "65beZBaS2ehTjoC1hC4hh2FfFrFWNQF8DnQj6AcXeFFHMd2CCyUihVCxT5CrjGpa6Sr2FzJJeZFYg6FmAt2v4hEC",
  "key3": "2Nwaxtnm8Lm8LYQJgAuh81UZpizSHzqNscxoeR8QEdtmYrRp7UDie5rWkqPEo4iVVvR8UYpBiJ98yF5MJFrCoLUd",
  "key4": "4oYVnfpr2KS4ecAVEy5JScVYGphDTn8ew9HJpF77ihMDbtEYPx8j7mpFyxrSmcBcha9JqSPwoRKmV6WMBuHjemyB",
  "key5": "52oY6fpNdoKPVfbDh4tKHiPpn1a8RtCMoxGUycgthmUw8x6tCFgwDLPX6qbYPpb9pRArAo8x48sBnwnjSdkRWT2Z",
  "key6": "QNJD1ZCMJW7vsCZC7wMgNSzCwCDgnvw9FCPUPgv2czPVFYQX4pT15SDArkZPCEXwQNZicTSiQ8E8rEe3nPek5VW",
  "key7": "3KCz5KMnDx1jNHSiVxdP84muG6DQWPreU2HMrrKpzgfpQJWngbsQZ6mieGKQRH2mrwBv1S7nEu8WrcZxngUiRu2T",
  "key8": "67A9StebcUT31reKzdevoFTD1wUzsJLG2jUA39Q1BvVcmvunH2Y34iBf9xnFASjVZjfeDknjz67o4fGcbXJdoaVL",
  "key9": "5xunxHu8v3ZmJEuYbRwZbA6Fq2s46zEFM4JyVK8BXHVAnD9Lx9kforyauKVYWTZ3QZTfBYbYWGkKi6W5iqYBZktW",
  "key10": "2Z9qQjtzdVCdrfh6DVzBcJLuMriVRzei6dtz3v8htqnjUMhrJD1YfZKYjEGZoMH2GxxHopKUDsjdquart9XiPTji",
  "key11": "3L87uUrnmnw8mU52wKtB3sZowWHwE2x2ce89bYDTeDBai4RAJTA1DK3izubnf8pnwszorXV7cA1EZYVUHWEQTcr4",
  "key12": "43kJJcGLB87upVxPNxCNmUjmaRDouYRiGFw7mdzEHz7Waz3Lcrt5ipM6aAmZa2LBucnK3j8219cSKS7jCpfrTKY9",
  "key13": "66kZ6E1EY7ko4NSFBFsBAXwyW6s8aFk52piHoCZZ48NTsC4nxmRHxGS5oCHM2o6NGPZYQMwZYthdy4PvnkaqpDMs",
  "key14": "35PeFE1FEmJ5bSS2BuSbEbnseunavPeB2ekre6941UPYZ3k9L2cqpQLNH28stjEQsHfzmKFqMRaHuKJLW1M79uA1",
  "key15": "2ZRUsB5RVAsvVa7dEBj3Lj8taPM4nE2dqR4GEigBhMaiWu3KtR5KNrKBt47X8UpZJLchjuSWPund7Z4w2adWCeKt",
  "key16": "5bQgKpaxakFos9Q7eUpB6HHrJbiCS4HEsgvFphfji4zd1hqr54VPumcJHWdQiEf9jxA41DBDn67fPwzPYQ8VKdVK",
  "key17": "329AonkreJekeuYvxFYAtb2fYotBa4MKsQxbxJ4vbQim1tstaQbCzVkx7HhmPiooWwSuMjkvBpdMqjd2rVkk8u59",
  "key18": "nwFuWwTvw69552J3VZ7brSNoy6uZrKoj7iNF7VN7deCa85HMpmiU5UAWJ7xGcTf7NmA8aw1FkrxFwW1TDSirXWV",
  "key19": "4CHDcSjec53og1UXTo6yuAStzKsZkNvTpyEzqEBEu9jLmHrNeYeTbBoj7xd7QsRjHSBC3C8u6bHrYXTxsmMNRZyC",
  "key20": "51LzLZrCP3jd7ADmMpq3UxQmNdwsJYyLd2hX1E2geEQszejPCbNV5tyFvBogCduuX54VWUzVUuiT3KCGf1pZhCRm",
  "key21": "4pkFuZggPgdorarFEEBtVpj3LgFPPp6BWjC5qU7dpccoPoMweBfKikTt37MUFARjd2YpZhu7FgunDwDJDCW5hCAu",
  "key22": "2KN74qxPKinFbd3XwVUu9uVuF3PhJm9R9RTyZ1nDehTrtgnvgqbgE1drxvoU4jKY8TpudQ6jSb6i8qZY3mqfHjGi",
  "key23": "3u7XrKyzE3QuN4tJ2ZanyWukzhxLqpLPdACndmapgQWG7A8Prz8HCCkL4VBAcn5XaphWsDL13KEJU1ovqTD1cuRu",
  "key24": "2W8MBWFRd2By9anb3b1FjD8qyWq22NjHxxY6VtRNvTEkFvfQ7HFnEYNstje1Pu4iY45xicQkox6AHfbjb9Pnw2ov",
  "key25": "2Lv2JR7aFfMLG3Av2svwMxJb4vdBo9AdV3tVUxbtCVjRGiGzbJrApWtVRiqDfzUL1j5vGFJGZ2YngqCnA7fADkRu",
  "key26": "3m34EaQxq41Fkea9Ucq8ZBuph5uEAKbGE7d82wBgw1U56vnLkBrJR3UFEaGaxJHnRyGScrifUUw2LTGRVEHQyMoR",
  "key27": "2qXCccvAHTHRDtUm7SWabMikw5eqmA3pFGdo9XtLnyueAzKP3wsQmk8Eox53swbg4h4XodL3RShjodjzWz2DNUK8",
  "key28": "24xyG3rmDtKkK2eRCm4WzUFgUAaWx5rd5RvyyhLpF6meBTJ3x14btsvh3RPBZkDuqr4afBVLzXMbvCSmeJkUwwSv",
  "key29": "2tSNhTAFMQYw3jGQbW83GrNZqHU4BAyEaRCxtHnogxUg3gTCpATSTf8vYzPZXpeYFh38fYYEMZFK7Yr3E9hmuvRP",
  "key30": "2gCQCKM1Nf6dNcxoVaKPZTj7qoJq4zVGXk5W7bDqVRSNMKoKxG53Qov9Ho4jUNMe8M5ZGZ4YqNxx7QRGWdh5mzR8",
  "key31": "5jBQ6oeyHT1qA1CwjVVe2n6V9SX4mopuJdXjQqkXXiz6q7sj1dc9qvnnqj2JwimNb4gh9yS5GuR4aMp1KFqF3pT4",
  "key32": "xR4EPKhTJ4Ut1MpFT9McbZ8yVUyGpoZRAbwCYkQSbmF62Z7L7CbqroWYtmwExxQnc8fVySnPpysDQ1vLzX42jiQ",
  "key33": "MkxmsfzLqXCPF5vMbVjqstc3tVbYwtgqtGBf6KC6s4SbKt196kRr2GWuW33nG8bjDmGuYsCg1UAndZBLFQCHKe5"
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
