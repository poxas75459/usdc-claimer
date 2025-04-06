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
    "22LwUb86EntJ8drbE8i1bNkvCAQUSbXzvQiHSkayDwJbADY4mXBntkJrPFHktaFs6gtBk4psa54K5F4mLueqkN8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uedsHuutsGubBEkNZS57QUnYbQfh8Fzu5quxNsw3zq7CH79eeHDYpgY8N4gRTbrQvU6EtoTF7uxSkmvMNJqxvyb",
  "key1": "4rEqRCNn4X9Fj65WcuvcTZWM9bXsaFkTuXBtNLsPdFRXoWFf9A3K7ayeqDTWHHo1a9L7ErBtxpg6ys6iU2akYdWt",
  "key2": "3LKe2e1mTCP9393c6sYDMnTCgKv2Bkdp6Aqm3UjpdyjBNmzZRkajDrFzaesM8f7sFFQcgosix1zcscix8EWfoeQH",
  "key3": "2J6MM4C9Pd4CsmPDU6n91EFP71MrdSV2NrF9ErBR3b2n7hq5D8pWp6VYL3SoXG4BUEg7QHWsWVcKQFQVtzkzTkQg",
  "key4": "hV6jZ1T5fSRRd7LWjPQo2MFw44j1GYvzdWzamduvr7XkoTwL97r5MvG2jG1STchjwoaJEGdsNKMNgkU4WQJTHRW",
  "key5": "437cMkwFgz5gcD7KNNMVXbVhMkRndFS4fpg8dSZ8DSuzMSY27578EE784cGskPs8rkFcfrgFjNqFLW4LsLSJ4TtD",
  "key6": "4UPgUQsP1VACmNuTkN2AtwJNVRPuHWjcu9NCVWmNUE7NKbCkaYNup8JFRwhgi4AZP5rMyaEbb1x2rZd4qkmGohnj",
  "key7": "5tXMRtUPhvxw8R31C1ZCMjnWqwfH5cbrhZghc7ia4dZimZJCBvNVhNfTSBtyfBEb8Sg7PpXFzY1GUaoyV8S838fL",
  "key8": "51vm62NU6GdwJMPXVsQxRqq7HAQfrb9p3HTjGsd6Qwd9jZRWGPhpvYSmpFwADVW7bSQdABVBFoUCbU7nkJFpjCWv",
  "key9": "46p3t2nmGha7Wn5eHd7z6nRsdrACLm59sc4cei1rUACQM1fYbv9oYu7wNaR3cMzfp2hGk2QPr2szhupewYMsAzDg",
  "key10": "oHeT5oTokvj1kAvvHx37HvP5aeb532pwDt2GVqvoxCnMW38LGPWXnE7s5oraco3fpgAV3njyTgA2Q7suUhjSwbo",
  "key11": "2iVf5FNdmtV4ayPAo7Bdp9SKgL2H3zGG7WVNysSm1AAttqeZs8PSVz8fwMdmdjxHyzgnPHd5BBc24WCZ3SiyiPVW",
  "key12": "PqVXmdZTHPEQoq2DzLXxdUYh36aiwud8Zqy5dw4BqswvcPzPBAeu2XwKp2Kkp5CiYxx732SqQzyRHR96qoBBzct",
  "key13": "275BdbbmFRmyb8apMAq8NpoyrTqAwg9W1M9xLZ4VVMwsgJEASvv3ywgUNfJW4eTLZKLuootL7ETLivPXGVjhMHzf",
  "key14": "2JyFoxvRDhZ3q77bEDzXkHVuX862Ne9Y13UVtsduPDuhcK24Gp7q2PUC4caztbWPsxw3TcSsxx5KJH3hfYQM5c3J",
  "key15": "61kMUJdQcwcJfrr3Pfqgmmof7RZKWWDjcd3U5wNJYeVCkCDLZDXDfkFq3Hc6cS17t9ADvhBjVPicjos8HjqsFPRb",
  "key16": "3we8v11cb39Y7bzSw24Z8qaiBrAgyNGpfUSEt43uUUaiT7PPJADfhNWR6oU7qfPgVyvRruSAFrG5Rc7YD3A9NwyW",
  "key17": "5ybjrdor36W1rLpptG4pQbDGzURMxNYRsXzYXXSKoR59JEA61MKAdTY41GmtAjvbyMsmFKqVwn1hdYv7VdV7hJ8i",
  "key18": "2Bc17sDiJ9XETGQsDTPzVMvRnqVwH8mT3QdQWFrCJtxp4Gt4SYt37z2oGeXgXhr9xcBFvibGmQBtZCQ6QL1yzScR",
  "key19": "5M5u5bSNeRDxTCQsRwLRW6qN8Qa5ySSXpn3u84ME7jwocB9WaEzz88XL1DFKWNA9wZbP22kqyLopZpCSvLXQUH5E",
  "key20": "65xGmvkykbco6WqFjYyhDcmB2U5FHiSNk7TTn1gBMmxAYc2TRh7agpA8cSv2KKunU5QuqdEmXebMEGKKxKRRz9Fi",
  "key21": "4JCoS79sAUpdcmV3EjNJsJYBGoAuu2pqRG2n4WvAU3Z4QHSLxr9zBB3PeTTsUe1aj6zzzeyGu4EXRrdYxtpbjTy4",
  "key22": "rBScusR9TvtfGjUYdmekrmqUDHqB9u2APwke3Uvo5vw7xS2KdMPcgqLz9er24KRToeTgs46A9psQbWK6p4Xxxoz",
  "key23": "34XCHR4nhqNRBFXFYZMwBJr2QDwvS84XQoAh1x7bDXUyUmESQdJfvE7E3bPcR9Lhcpvu2AkVBev5Q81qW4CUUhXY",
  "key24": "2B5mnQapicRgG8AivWV73kK85ZA1tjYV8yGEqbRaxgGVFp38fNY2kWatU5gbiqk6gTzeRbJBHAXnRP676skg1imj",
  "key25": "2fEUP8pYh7GK5unrKm6CU1Wg8M4xdigN94aGqtPh6VDJaZMqfMuVi3dnChwDfAGGTR63GiPLcuUcWKgMC52HJZ2z",
  "key26": "4QfcmHUNUVyLP77DbiN74RaKrVy69z5zEzebWv4FY4K9WEuoCcwkxhMcqQFdo1JaGDq5Sep1LJsvFDLNRqnWV7X4",
  "key27": "3jM3UjwAamewbDxFQyDAFgM4ejHt89GbjVRXiR8RPhkaWzgWGFA4MbnXn4zRdsgDu6kFsGSwRasdMB8cSKyWmkcH"
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
