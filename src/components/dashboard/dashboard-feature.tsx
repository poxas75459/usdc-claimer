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
    "4LoKbcqDofeeRZAwdMphFz7xr53F1XagTPdKrLMFFUp1iZTijrtYFRiJ2yTxqyba9XL6arhqA1W9KRvHT6ZHWZXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnbF5uR4Lvd7GfJiW2cbvDyRgMmWSjc41EmHjMgse3zkr4V3gEq8cG7H1hcSq2tzekCGfzag32SDVpWWKSpnmQh",
  "key1": "5YowRXEEzoSDTJPd9GDBmxQ2o2Xm1uPFJcw28y1EaXSPt6yVCk8tg8pft2vDCQH9JTQmSGesdpYg9MCvFzWygXG8",
  "key2": "jiUepkyHYmz1PGB4gVwvHvouDZ768SwC7gkATWBoJug4Y98zxXUT6yf5iDtN6yJjJKkEJyCbWXZ2osRDkE4m2kh",
  "key3": "FmMDKiArrqtnXLbShpeM6DPJFV9XuPX429xSq5UwGNYmhL7BzDjHBe3zSddjZ3GERdXqYPqRh7vuZ2983ECPbWx",
  "key4": "4KXhJgMQV6hSFuEmY5iHLJgVDU1XrZsdhq2eZisf2PKeu91sZQrzFmptnhEuw7zZfYsnEFxwfvLEP4QSUX43ekSY",
  "key5": "3prJ1yNpQaRY42rPqtz52KfVd4Bs2nRum8hvnggBf3fkdqcs7vycoUCFfGrZnWKN5rvXrmJwySqaijZdfeK72Qf4",
  "key6": "57FXLCMwWJb3zVGTBFCfoVdnUs24gZ8ic553WLCWjPMWVfbkknHtqKC1UrAGeTK29Y8usEDqfh3PRTTDNqcGt6p5",
  "key7": "52uzVfiKz2MurX77CjrSoVtDqwt8gDV8tnjGYJJBBmvYzJDURYHaWJmL7XZTkjHHwHioBz61fRr8b4M7M9iXKkve",
  "key8": "61FUN2p4vux2xJ7XdfcRNNKopZGSn334v5EaDKoMq7sgAep22vr9iNUYYsPnVABB7XCbRM7ab6xVW3yXhC2UbCCk",
  "key9": "3TXyyprnJhewFt6g9rAPJVfqo8gbCyfhAs3nmhEch2J3JLAGK47hHwfd6KNtFuFu1RLbFHr6Tanjq9EpoJsrRYHV",
  "key10": "4Eq3TEsZyx2g1w3pHW1hLLsoQ81rWffw37u6r9CvT5NbBmTirWAutEYwv3DzWJJQ26SDfMeWn533KPLXNX6DXMkr",
  "key11": "24LhZHXeN5ZgoY2kUWfDdwRNQFTotUAuc9CPn7D9hA5Ank5PT8Jss8P4o9dsh1LAho54evSvPqyAWkkJzfzUENC5",
  "key12": "4SYQkeKyg8EQAZJWHTCeCWo4qTTFbmsAA3x7hNyGQRnGvrfhx6zhLPFomW2bFUggMnwUVYH7gfqZVW6uCXdSSaLc",
  "key13": "4jgugbdaDCt8QagjHCtDZxRg6TdKtWm1x772p2S4mRN3He5KSEC7xqaUP4HhvBT7onQCUT3FCVUYHCGS7o4x5okz",
  "key14": "41TgXsRPfhmfz92BDBSXKn61GfKFka19CfsN8b67DxiT6aADxyBLBcpQfoVfQZ6XwwVSysz4LdLqzqXt7RUBcQjZ",
  "key15": "2Zzsg4CH5W9JxA3eaLwQjx9vgqzhfHS4kuomq15Nkywv7z7PBXTwiiCCNNYCe5Mafid8DXSook25QFFYNUmahQs5",
  "key16": "32AbgsHhtvyndQLn43DGLPUNE8EXCfu73XHNezuec46XDd22fgbSHgnRbpcdCQLXjadb9Zc1f53UnYbVkpVG46Z3",
  "key17": "5vcJuJGM7LK8erRerxYMu1gveGwDSiYHvkyw47BZwM8z14qT92sF1K4FKkbDkSr42Qm1jPVmzRZcCwsjaK9EUzyw",
  "key18": "2xCK9L8Fjvo3r66SK9qfTqtgzhLsacdDmgnophKSmQC78S1kc49inwWqFtXGQRbg9YZMEqvD1Rd85YmE2UWsEP8u",
  "key19": "3vYXFkDEbKHLeDLTzxdEq9Jck93D6ZxdfEHeZ81ga89YqEe1mzstDwxqqZNyG9xZWL1u1jYrQPtr4j85P8zWDcL7",
  "key20": "2X5Bt5Sdg6n2Jg2KREopz23TPzMiS7LSM8jJ4grZdxxgF8qAvrM3XG69XsExLnguAdJ2uoKegxpWj4fWiFuPkW91",
  "key21": "663prZug3ZziQSDSPrWfTE8HMb9MdWh35ceNKER6VzfoJAQQDSaEGDAGrBhrjwnHbJriJs7smfeEKCdP4amW4ZvQ",
  "key22": "4zeB1D1chA1ntX1NnMEeV522XEWWhrTQMJvMEZuhsSuHcswP68o8j7BGzn7cdGy5vm5qS2JRzkEqULQMhUcTojzP",
  "key23": "5iEFTqLjtRMRUUh3HzrgRtZsiwRgK3bQHTgTwbFXoNQmxMNxrrQrL5ZLNTBZgZo6U7ow9AUXK4wjBKrMAzjhvFC",
  "key24": "3PCEToMbJCnaWqXyiQf4oxptGLY6CRN82tKafyvxjvqDoSHvo5jWC4rrQiEa4PKZ4gGiptKsantEDBvXQtUP34NZ",
  "key25": "5DjFLaCg2jrC79qdGCVqqY8Fj3VyGxcpuS7nwzdLbx9DGiPqoiBEoRgR3efJxVQPYaQXMgHh6h2CjC3JoXJ1dg4n",
  "key26": "5LkFiB9gMcticfhSwpSJzuPGQtCnU4XWRGc54qJNMxdXyfHrMvesQjaUNAePTn9V4yGUk9V1PH3g7xCdvebubvfA"
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
