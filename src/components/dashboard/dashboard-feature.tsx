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
    "48erZZ9TzfkcNbiiPogRkhnHJD4do8MaGknZJmLhoTmZtjEzc82FFyWEYQTcPKehHe86ZHgVivPUvLd19amg5xVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yagNwsBruk1WHshv6w3tyQrVmZUev4NpXyoTeXx1ePwdPgaRMUeKQF9jaArpCEmu3DCHVgMfzNYHhn7YKQ5uFCK",
  "key1": "5ZNwgSbKRj8mBQhfKtTZYxT1kVwoDGA1JiCxAP9Cp45JhQaqFeff3QiL5LpbbcGdRx2zWhysSs43i2LMZskJ7jWm",
  "key2": "4xwjeXuFPxsiafsErx1k1hGPj5GcfaRQwpqd1Ukwz8iPjZbEJ2PSPCFdFWkobWWwuLxiJ7A2rySA4AgwpcLuBCqK",
  "key3": "JFoLgytkkYfEz2syFW13K4n5V6r3UAV1VVLfcBCeEWDjTZkvXPHJ21BTRJMLgT9BNUmsDWDZaVFJxqLMs76xXtP",
  "key4": "62f1n5mbned6oZ5E7asgNgXj9yHTR5baGLSh7NfD8hSM8azSfRH6SujpvuKCd7bxvoa4MnwbTu8AzWiqdMf9mNrK",
  "key5": "3LGmRutX7GB8vzViwuGFj2dv5Gww3RKUD5aocGXu35Uuq3ViQtKo4QFBhF4QykY4j2w854D5Gdjf9QRHzaT5ZP2C",
  "key6": "KrmeYVPCZg89NLtPBKgjk6VkTYQP2CtjJBT62RD8cEE3ahGngaNppewSPXTcuMX9w3AmPNpBB42ndnjNtvSUU4b",
  "key7": "3HqCbejC6fh1UNNKsfD13DuH1ttFtZnVQKpnNvWDsg9hmqeqv3sPn3iPRC7GZBSt6yG4UFwHYN2u8TN6E1gvsGRV",
  "key8": "5WYENm86DG1VJTEW9Guz3xf2K3TcbbJ8HWYJ7tdWNBHa193jZUvnNFNbiLqzEdxrtN4ZN1bZiv3oZHktnpMZr2tW",
  "key9": "4uGy6ZwNoz7yofsTmahvWPMHttBdk3WNESaSodNnJQrbfyu1AoN2xWML44FfSgZDGuUAzdWfntx49zwZAXgfSUS7",
  "key10": "39zPcTkQZaDr688PrxP5PH94PcsPjZXPCNP6zAAuLpb74GBZ7sddrJSVToaQS1ty9Hi1qvAG7crv16MkeSvNAfaz",
  "key11": "Lu9sbkk2CnQvimetGNKTEtsyEh4PM9uSAWaNsxTfgJvvCHdQ97qFR3d5UQ2sbqfqtY6ztXLrtLjYLvTAM1aV9nb",
  "key12": "5EpiW2dBvpfYarGaq4wEnTHJz1FQ66kMB9ZwH8oaSoZDfgJuWxcbPF2ekyLMzSy6Mc5aKXr53o8JSeN9Uj3UmcM",
  "key13": "5h8PUdovYFdQnQ4WPX1cRwwGojGeEiFpJ4j7qKoWWL2Q4JEcWchV79sD774RJxVfaeR67TUSmBgTHUbZMiWQpyRX",
  "key14": "xJvteNQHECDzaAboCb6w9yBejzrEdd2xdHEkYSoA2BCaTeB9YUAaw62NwSXBoVUVooRjt4xuwjsd9gJN1eo2QSR",
  "key15": "5Y5RfRpEC7JU6Uqs8r5Qg7LQ9e33oZnxu9t58zzs7FpEU8R7cKhooDaF6VSJ2oAL7zd48RgFA8NNw7rHvMnL3w84",
  "key16": "2WfwR4frjM9C9811nRjvjSwVwXqSYgFwF4mYSAygLi5PRLh5jwaGhECzaLonZygD9DhqN2cQgxFxxjGHdpNLpR5w",
  "key17": "4vVTijfGTiurDYvh1hftXzeJLfUHdzLZ3GkW9iY9t5Hp3ZB23At9jm8BdsXovEMjb7zQ3nww1xSGdN4H6gU8jm7a",
  "key18": "4Zy3EKhqKabbXSu4R2rxrJJzK1E7DXMmwe4p1S2rdCw1Hxu6ZPytxF7YS1CyToLW2o6Ky7HToKuzRuYRVEatD5Di",
  "key19": "2s5r91pZgw9TsYXkFshfKJzdNvo27re6vCJ9ctfd76tKTFUG1ZNjFbdKhJUYBrKK83wt5cRobCsVFqZrWaZst7cw",
  "key20": "5U7k7ARQgs3PSAccpjW8ZwomGkZHRkK164X6bs7jhvCsbTNwMA4Whe3wwCvDKKpE94UKWm7wV7fLq61YVuCTpjSQ",
  "key21": "5pYoRrmcamqATwN9ycnWCkcNiShv5gH8yZiZUP3CWZcZ9TnswjRJ6u1Krk1oz8zyK3nL41QWpuLrVdWfQFWo7aFC",
  "key22": "4v4TvvWgjVrGTWsYfwDfnkTsxGw61rSFtW3GVM67THAhCTLCAiNVLDXj4DjX79Dg7LKFwPU71mkqmbqtBBdfZ4FH",
  "key23": "5AyT8ztzMsRBfwB9KeyBQ3BD1TMhdYmuDxFuqcNPT7cEfM1r67fzpt4jHfy87pfkBVYignj6NEAuj84S8VyasaHT",
  "key24": "4UaN8zVYWBhwdjUN3BDgjZjCybKEWo9yUtiS63KPj3dANLkMXwRYnXiq4FdH9HdEi9AcffHKzTiaB7KR1bUcRPX5",
  "key25": "97h33CpjXTwXpR2q6VCoBZ163dR1TZgwf7gBSiGfhiseNj3DcWqi8dLhXhRBLmSYrkr524BHS3yMo7dKoNhPtcz",
  "key26": "2pXnSUaZTuzuAUGRN4GuyBcx5sHsnCoGzujPZkAu1NsZ5EqLFN6HedKB7gFXLZrdZbcxfEgoQbdNF3ZMd1udZKGB",
  "key27": "5Rm2CqhCgz3oAj6g3DWJKvzicTWGVDDx5HXzVbyGnQEiiCJTiufbxCDGu3R9kn584Kv5F3dYQJgteuyJPM28HGmo",
  "key28": "53UEepG34KnuNjbjredgSpFxWAG5X6gw35Zr75pX1Fnn6wxVFV36pXkzReSxnnQXZ4MjbDN4ry6ctnWup92q7uXa",
  "key29": "5RgWmmhVTRat8AoPut1sfoBAjeQkSMP9d5fGPVNvX9ucnx14Ttta4zqT6rhisZjYwunHRirmcrQdNAGo2RwNaKDW",
  "key30": "4Wrvy32LVaZdNw1RPJE95zQBcvfbMmYCaALdwBzhaj9FJD5sAAktNVUXzZ2mjd9C4APFBQq9mgtYqf9aVeE5XkAk",
  "key31": "4dtVbhQjRHYF2CX5inXAoda1evGyFBt6KF6Jz8RqxoYxrTrn3Hsw3td7zBqsnXD1KnAmpUcmmHZdAcvDkJrNmFt1",
  "key32": "3tZgLywWnzQe19rJPUYbK2bSWEtuEe8KVJCWNscRiEDHw6p6Nw7zxxVeViCDSfYiB6creBnZ6TBFXj9QBRCs8ome",
  "key33": "aBnvVd3grpTjSHhSNjXL7uPHDEgwA8spx8SHkYGhfPzMMnPg7uCpcpbWk2UXS7sXf3ka7JxJM2UB1j5QavKqSqP",
  "key34": "4J5Lqcz6jSUffSKzNqVJCcs3UP4pYxaGAwS47ia7614pf6ryFAe96ZtgPcNxNRNkGbZHrpz4V3CrpX3E6pyVjP3o",
  "key35": "5GWXhdWkoaEs9W8C8WYad6vqixReVwkeipEqAbxfiZSgPQf19z6GJC9FYW1hjmYbGo1aUeMHH5ZZAC9kHsovc9PQ",
  "key36": "42GQExNa6EkSnSMMZLLqfTYtEdfvdDYWb3e2uEidj27mQ51uCPJzemseCd1E7hd91NasQ9SAqbEWwK4zk4mKFU1A",
  "key37": "2Cc7GTFKjsER8pFjRDH9kZ6ipdeEdvmrb8Rgt8AkBScme5g8cH2w53o1VTUqGt58KbmxtdMkHrN66aweoy5YC3ni"
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
