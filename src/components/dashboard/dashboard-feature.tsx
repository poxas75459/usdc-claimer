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
    "38cTqqmsHoB687jnTxyzurL1ivu3iT3kweUU9efTUHQtHL2bpzCGNrYKT1yHVAcvA7aDGdyC3X1DrzkdYrkHB3fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DfMQt8MPdCddqoPwFTJQ53PfSwo4sc7kKBSVVv2n9Bq8LWVvWtY7wmbv5RY4bwauaYron68zSU8QCyEnE7VxYu",
  "key1": "4HUFyrydAufeugdjVWDnoGPDj6ANNzZNVLeHTMc9pQQ3py4kjWJTScXoLudS6VhorZZuZrFFpok5B3ZgnozLDjw4",
  "key2": "3TVQ69sgxSLhMUzz7EzPbgETD6LrUh1MBw7wVmeHNQg4qThFM6jRncCzs7ouqXbqob564AMqnrXRysZkKSSeEDWV",
  "key3": "3cGha4KSvei2uzigt7dBU7WDKVJL4rPw9Z3oZFzvphjkBCqc7Ks31PG7BjxKYPtdtHMNHepGeyakXJueoTUqzKo1",
  "key4": "4wt3C8Ubq961gLVDeXWPgE8aBohxTnyGZ67FSQY8xRtdyjEXr5gdGubp7ME1KiPnafi4bTzACMv3TsBbS6MYxdBm",
  "key5": "3WRuu2FaTah7q5E87LfBGuPi3KLmiSjs3cQQZJoJ5DFQB64hucrHGckqN3jt3a11eU4SrnytWCR2FyMyhkNtT5RD",
  "key6": "2fPBpVVj1DQc7cYpwWoF24N4mZqCfAcYU3DBfcnQDwP2cy1gPvL5HFomQM24pekYvqdoxfN957RpHjX4wRLiEPTX",
  "key7": "4udnBMQNSW9fcHQJ2TNA61DNRBEdKy5KWMNpMNnT4ZT6cctGKPDRWoPy9aMpNpdyyvQVbrDpSsufMYA1RJUgmkQp",
  "key8": "2qQhrQ6DF8sF9LJLYr3WE7Amhby7T78RYk1BUzX3g9wByzEiR4YceoHxsyRnxEUXfzZjCbbTv1cusBCRK3HZKuSt",
  "key9": "3MTeA1pj7JCmYTMfSPuSiXTyaDAba4ebeMUuMBCg8VNdxzCGMad6YfJC9MtrWUgopFZxGBM4gnZzbN2rVLVWsczj",
  "key10": "4PjBj4eW7y3zjF7eGcgL23RZ8cEsnChAY3X5sBrEQVDKFv8mCGj7ADFVRnNtsYJaeFJZ25Tpre8Cg7z4wvfqV4ZG",
  "key11": "4bazH2c8cWYKst2eKRqP1qyzcbGyuT7EDCF8QsTQmr4Kgfpan1MVscvPq5LnXCi2612GuRpo96oL1CMEdzHTgbAq",
  "key12": "614g3iGcTJzXibNrFKzGnECR8i74TxQ9TVMZ8uYM486KTvQn1xSRwx1TnP1raJoVCzYfaH8RNsRx2b9dCM3CFVko",
  "key13": "4UmXqUAUb1mw8eRjPgNUcjNNxKj5tH1brxtxAnfiD3Ti9KJ7Z7M75X6y32X8CajJBX63Wtq8iyUySipypFVfips4",
  "key14": "2xUoQZGaMWN2a6MdK1jW3vg7T9HVAjLVEAXF1onH4Vqt8cT5BBRZDUZrTviZJehWPZogukqspvvH3YZDwJUFpjHc",
  "key15": "2vjsF2xVfc6AxEiP4E9g6pqEfFybZEqYt1vj2D5MvbE94iqj8BKR1GLZQ8DGaJGGJpGyuLJHxfxngDQdieGMzg8G",
  "key16": "32oG39Boe1A7U2SHRAQFDMaVpF999o3X7sY6ARVMyH78RpJ3JtvZyVqYtdE3LNurzvkRGa1kwxC2hvktR79PP5Cg",
  "key17": "mMLbhcxQ8MhwqQW1FhBr13XZSTWVs24zx1yDHDVxjfebajNLrL3WMYhJsKZGAzBoMjdpsCCDK2hgFEPrY74m2kv",
  "key18": "4vfkjcSX5wPG3EEfGJCzraB1Frhn1a8fi1QdhV4iTY2M4rHxANkBCsCaUvG7dqJ27hwUixMpFmqtW7rbCgzG64vS",
  "key19": "4YKzPYmxG5sagKgnwCBKih5Qcx2iTozbDwXBR896ABvP9fgUMHdkLgebMCzEfFq2AWk6mFsALdEUTXVBfKQTp84A",
  "key20": "5x6WydHjg38XuE5aTSod2RE6ZQF5xRgJYxWyLRoV1HkbWNdcwCmyTZKPkXsuBjqAbCG9ecAHfGkhxGY2efW5v6nx",
  "key21": "44izEqb1y18kx5QfV87RXn4DymspxyCnsAhKxb4EYN1FUo5NXYmupC9ccW1FMwCQgqMdum5oYNhBL8s7XMReqZEG",
  "key22": "665KFRtsmiMyhqhHkSsLVB7QLXw3DiugvtbGmUGPfCZdBMdUCkEmBvm8hz5NHoM87EYEmAeVpiEPVBue6NnQyj5i",
  "key23": "cfK8JtMJoBMavKEijvvGc5t1DZv7Uejc9p4Sp4C1H4cv6TvjfXKxJBqfE7fFCSeP3JavNn2RpneTkhQjbRf9zz9",
  "key24": "3S7iPJsrAccsnJK6QxAJCPELvEJ847VzkH1U899pvfUtg5rAcR4hgBoJton7VZ8BvwRnWbihKSQ3xVjJMnWsvq3V",
  "key25": "4dFGXZcggVcNehFabmtTGUpnbBLJpKKErHR6iLvDyVavki2pg58uavgkB4zuFMEkC6wX4gFrdJqQprdHR6wfwyCq",
  "key26": "2dHF3FyP5DjpPMhebYHTX2NcbGEVa4yVJsxTwYwaMTmN5xBdD8iBJ8ju7zP6VtneR5deXzfUU9SumyZS9vbey3XM",
  "key27": "3XCwANaK2fk9gDBKcjt1FVpnbqaQAr7UeFCmnQ5PH1YWdFsKpD8xVWuRea1fpq2kSHCQeJwuXguUGzjj2Qjox49g",
  "key28": "44DcYSCwXoWby5Tu4ZCVW5C2fne5K16oVZNNyDFKh9hLRAbDcikPwVK4LLZB3ZLzfz91AAEZqz4snXKBVcTiA6fS",
  "key29": "2gNmXa8amyhdrsbduqLNUt9uCBq6E4N2DNJo84fMmbgpLPR2z3mTkPFGddnezmZiKqud7he2yV3uv54Y2kfMVHsS",
  "key30": "5ZimP8aUMnfe3fjKdJwKiY3dD6jeXbnpWDPCjME57c8QaZMJBSqxTu2UQzeB6hFzytHBnoxmKSL1ZxkzazGZNTNc",
  "key31": "5CQ2VdAMc5XAitpT2nbQNxpbWPqtjUfhRREHnh1brWYSPL8LQLnJ5DskQE8By64vzH94oBse4owJsPPmhWzNGokA",
  "key32": "5njjgejzRxYQP9oMGa4niNaqZ6wMsfDnJdGG5DMw3TusarMYBT1QKv2dkzJ9hG9XuVHRZVyoQgc2G26zghraK9pF",
  "key33": "q8VRk1ABYnMf6QfBbN3b89b1nokasAEqZ7BAFNWQucqbw4yhdDo79WcfPVw3NsSX85EMBLEujnQdCgbb4jC5WYQ",
  "key34": "5R5dGaR2wL2tZfDKjjL4FsFPishD6BXKinSwd6rFCJ6prTgYVgT4DQDamkqBkKUNy3RCE72Sz4WPkH2HDDGQ7hYg",
  "key35": "5yfdBeMYWendp4p5161uhjzeqycS4nFjgbMuycCiJ4aBFnw4R7sigWUiA5HVPPuDLnzU5JbQhbQofuuuuKeiy21Z",
  "key36": "4b8y4AiHystGQLBW3imrtqGfk4eTCmZWQrh5Btg7pQ6feiZU8T6nPeJWKXRViCxXcVJDoxUKJ39u9tpULMiadeWh",
  "key37": "CHu4dQAEdLGjvBwPYPt47qXQ3jecxr3yZ5CviSXFCwjhc3z5kw3UwojbVCSe7d5y2BVcJSgNdgQ2ZxcJ3eYcWMV",
  "key38": "2HrwwdqVf9CruuNt5j6ignazxNprLdG59yVUUPEED1J3GufHdZLUrCmJrviUypZGgrvWaYEJMNXcY8DFwdu9PhCZ",
  "key39": "37skwZqJxQUUVjXhrnQyhVYFW4QEj252UVcrLs9w85XS1vH3ZxCZ62zHSc7i2AuoM6qVDLHiwLLLKr5s7thhttHM",
  "key40": "3tQGafLCV7BbSQW49WkWB1CxkmZB3Q5Nv7j4WU2W92Qivz6gECLfxM39U1fZCZKp6iFtNjNytu72Y37GGWfrCGzq",
  "key41": "3twph5YwTacfkDrsEhhEPduwJXyzpLcM7UbZMxCweHweksMa5wrFbRaWZ4YmUxzg2J9sNfkK61JU5jRcYGavgZUL",
  "key42": "2gtgiZh5cA7XQ2Y5KGHidnYcc6T4YXVDZitHukHLcCrQ1DmCxMBrDeFwhYJ2bEGfn5a1BiTmgpa3vJHFUKBQx3Jr",
  "key43": "5wA9EdrREpTpBzKUHe38xYgHB2UdVcgKWprnEqjzRa1PiUHssiEb6XT7nm3KJUq6G54GxZxWL4MXchk6HDuiG4CC",
  "key44": "3bVhjTPxFv5QyJ6YfbeMyGpNurHdCK5nEmXT5hNRmfhvd66oQ69kCSbWL23BhmqLgS8gLVQqpBxLGrrr5Ye9bxaY"
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
