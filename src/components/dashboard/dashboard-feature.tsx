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
    "4DdvdVKbGX16v11UgDTuAxoTy4aGi7hNWXSWSccD9GhBKMRDayEUR7zC6jYk4WBdEECbFEHxSMuoAsq3Yqa1tGUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "drJt748ZmmTWm3YWQeoJsFcsdvCr1F8CXPxcNeibzPFF7CHhNYWL1WCkWNigsGEM6MSejndkzhbiSiHxaSTxSPv",
  "key1": "3vV1wWDvDrrUPypXJmTfDr4ZdTSb5JJtJDaUv8NcMa3ZZACxfJZdztFvpLMJvSTjCz4kJkj7tqUzxVUFwTwaSCJ2",
  "key2": "D9krKwj9BYZ1SjJUK21Xj4RPmy9iAnzLzxeZcEQk6Ng87PDGiMqTkmSyBUpR2Ak15zAY5zBKpx6rwEQWbeCZvST",
  "key3": "5xCRAjXjvKQt2HoZJurWe41NpFehDZERafvjYusCaLaDCns1DkQWqrsdFadc1aaeAEBPHJ1vz4tESk4hNjAuHcP3",
  "key4": "4wXN6RCaowgY5GZmkc88sm2s55g6M6Gv9vHdFdjn35cUHft5kSD36sCtdEXpLCeokrqsNpitpJfH1CSHAHPwaXb4",
  "key5": "CsWiWFd1RkdxMAEy7Vuw2o4tZdoiUSziMPcFh6BvPxYJUpnATfdqMHyACatDzpjzpu2bsxxU26onjeCZqWTLSM7",
  "key6": "fqXm6iACB2nueW4NsB6KTTLdsKGyXEsAEqHc5L7GRyasA8Hwkbosbvg6StiWSjoPiSGej5HqdXgevMm4N5gZvNA",
  "key7": "5C1MSNAzy4Nru52d2BSdRJXv3R6WasDRuLQM4hSTZFzNUsW38aGpcf83Yh2hhtmyzjw8syp5Y4jGzYcRkWm8DGT9",
  "key8": "2gmf7gQuvxufJUYDzTws28pjmtyS4eHnuJNDWvwTtmxjDKr6kizqdigga6SV3aPnty9raVUR96JgXtG2qbjaGyRV",
  "key9": "3EvmhUYzU3uBNNN8dA4KyqJWZqsK3itLCAVMjyqjG4EDu9KgbWCutZKxVFjRgRx1WBdRxsSFfk1AyVSMURS4KSe4",
  "key10": "2skZ1CZro7fTiTfLvCvJvCX6GmG1FpPPNtbQB54avzkW2pRsTVywmXupxnaqgU1q8SHN6S9SEbj9HmGpGHfjeLuQ",
  "key11": "354rmMJsY1fqqCosYTU6dWCX94kmgCy23GVBFRXvF258ki2aFkXDwfxqYhg11rHBXzPZGWFnEMiuSRr5mQWCQ6JP",
  "key12": "4b2n9UR9GFHbZdKtCgsC5wfaA51sqWMTHUH8m8z9vDCAZ6aiGzxGgbJRDr17FhQh41MAR3MFsjcuTjELZgGbdLVc",
  "key13": "2XwxJ5VBNHBg39FzhLwRoVeSfkWTEbT1ff5Pf89NUikQGgDc9Ws2CZe7Qv32rtXU69fmYw7Pe82k53F7KCaLpaP5",
  "key14": "4DeUx9jCENfhuj64Wn8yLY7BP358Qi1usnG2yGENxrkNfhwA344h3gFZbRDHpA8TDHoQdH7gx5rbVvqa5LDLBvhH",
  "key15": "45By3gyBXHVXQKvUmi6v3Sib8DvxBeUncr9tJq61YoN1ynPNg4vdJZ6P6h6VrrX734YPcFY7R7QtT4yFshJzJQbY",
  "key16": "2HMi7MTyfWKPfxZoNqWpJrURbAc9BGFKVRXr6tjZA2rVjD1qKXoNVMx6QBVQojALvKYgtkBvUCNpcwxL1iMQWUT7",
  "key17": "5Eq9KaiXxsfhqUPvmyMqcDVQs71kHJdyJfMesfREt1xt3NppY72XKhUEjigxd3MZdSrXqBUCvVXGMVJetDTwiNVA",
  "key18": "37YTog8omUPp9AARKvqwAwxFUhbcpAf15FVUxrgRHzxy2Jta26w9PVF8w1k6HFf9qydQCzYy6AbEu3YAfmxqHcDj",
  "key19": "2oWiKFLFyQPoRyvWFarXbrLkK5mDYeCBAgui7yvX3Lfa7bsCWpTgUmnr2eLxKjb1ShhkXg541PyuM5SFysyVqW8w",
  "key20": "3qizKtn3FGjTtaPuJ8JH3GGPDn1BwcQgtScfMTCjYLgfYF7ATUn4iiBSDX2rTV8cfmbcpqGWymftLr7TDFrTgQzD",
  "key21": "KKpk8iSAzrgQVDFFL3cZpgdd3UMvexwmcZRbxNiseWh2KVzJs4e1r6A3R2jhv7S1YXCtVQXafkDLpTEhe42LtBb",
  "key22": "RLHvJ9GSfFK8HTEcAdNz38L79MM8heEUT8UhmBNGXQkScLM7HKSXrVtjjbZSd7rqC64Jrif4BB9XppDsXJj83g9",
  "key23": "MJhQ2MApDwFuVmJK1C48aDZUXWCxgrXLzqHmH8pCV9gTdnB6P525nXXKCodS8pd8toYZWdCzrx87qyGHzgSh9H3",
  "key24": "5MFpky4a5dy8Nu8eSeTGXVcEm7WBcoXiPkT9rghZyCTK39kaLz9L2SdDNp2zhFWHRk9sDMwrYwu1vnnTeYjfbMUY",
  "key25": "3ywKk3zaC3XXpgYSxRdhzEeR5PMNo9Wz99U5ATRAK7fgyZvQQbSVfuGnepemvyqRNmGtubyhth7ryBQdZqVKK2ZS",
  "key26": "4XpdYpqhUJkv43XG8sB9tNeQeEkQkcSWJguit4SyxHrRz9wb81KCFWjRqHZhGntGWDKzEbexFSSf6MgRMKn3aFhF",
  "key27": "ZqjM1jaSkvg12LPmQB1q4vRYrAZCHKogdfwhdM3mSUJUmSawA5sCtVuRg2zafzLDfbpVRffdJ4WAT88r8p9TRC1",
  "key28": "iKmHMsodMYoxeUxhfcFfLy9CQ7sRXbY744PajXs7P3EQwzuPfbncqiLYnXV6EaYJtqbXeLqGheZVDupV3qAKRAT",
  "key29": "4PF6kmq2XGFKtr2ucESNgjpLEiuzTZ4XJfsFCtuDcKYMwSogBDbuK9QgGBJFDtrxUg2MpVZpFithv34aqyxpzEX",
  "key30": "3Po591VJVyrqnqDpFLwKm258cTYRzhiTuCFXK96AmSTyFV9pwEmhdAZ38EhfegzJcWmdoH6PPnyynmdgAzxjSC6e",
  "key31": "634jemCPgwA3JVZQgftssAgSLZUtJXRJZFmhRtqnXQwwVsYaReVpohvz4ErXwBg1Uuod7QWwc8Bp63SL8erbDYqM",
  "key32": "4MiYKpuiwrDCbpVwKdYYhbAa2BvGMQX86wQGDJQDmBxBTBcdqm6ZKbcC2akbKRAei9qdvSet5H5LkbQ5kckADAsC",
  "key33": "4yq3USFJXWFppPjgjKa6eosJMYZZLY2Va96YWxVoXabtbqzt7PfT2kfvoaen41d477UJvdhCSRUe7PDXGNUbQaS3",
  "key34": "3uLcpVvSx5xRbQubMmsAyS478aWAM4i5A8U9dFLPU3KWDrq3eYwkoQWwyexS9szFWZYBDiZCDheW3MEoAqS3vBZw",
  "key35": "41ZYeMp62yKjfcwfKLNr3BEnuyXWrC5UNVGcPkHBHrkYZjFKnmyxzT3cPmDSAT7bNsYkYjggLybJa9mb4Wp1pUE9",
  "key36": "BZZZKPYUvRtS6nDEZQ5cFbRfvKJg1PVtFVmsPz8iacgmFSVfiDxANAzcMuCeparXwtXmcKrxtWSoeKBfRV6U8ze",
  "key37": "2H9oJYotAcwKiRWDRwrqfCzYqvw4pp7yu6kj86GDRigjfcCLub97tqCaTWr8AteE2HdTf26b8HCPjdqv5HVM5bkh",
  "key38": "2HZ1qnAsCqFvAmtAfvoXApLGyWhvTMnFSJzTi72maQ6z8NuuVun5vLe8ijcEMTuRnocKezGx5j2YfjP2kqxLoS34",
  "key39": "3DZyJNHW5Qjg7incfFiduLr8WmwHaR7e6Mc8gNHPurz4XL9XHF3EqrbPep8dhoLGhe9HLTT8M52tTRomgQtwDgW9",
  "key40": "3rGqZAiEeaHWd6F54eb5bckdKsdz9PCRXh89zAjneJc2YFkM7NLVQEgsRRXR8F4UZ63JsQCygiZX7aNq2f8dY62A",
  "key41": "2YSumsYJsUAbAeCWTnLiP1PTTjD5WjquG8eWVEmRqtHecLScHHRKW6xhunxwd33ddMqkMe1D5eKaB8eoh7aKPVoC",
  "key42": "3tnkGz3q5QM2EwuPhj2AKNW1tp9VUYx2wCPpZLCRPCDohrwjLouNwDmBxTKp3WMyHASNdpEKMYMCqhdzFEoH7xUt",
  "key43": "43TMQP279XVMQfBKWbyR7kwmXaxcQsL3RLnLt6xs4GHrSpn26VS57tzGihG8kTX2iMq57LMRnHB9RgGsbE1YjnSP",
  "key44": "4uTfePUxKDrBKpeU4gBPB4Mknd3DVRqJn1C58YqfkGNpehtycpsvRVW9V3397qSfTcGasdCAhKjGqXg4kWhty47k",
  "key45": "4GCDs8CM3rrHWgjQMLWTrnGUz4LjEG4DCYtSKxxPZw4W67dakNd57ukCZyJyQRAGq7uXJYUDtn9L8sA9qxqpUSfo",
  "key46": "UAfwrEtDukeyrcNGeQq57HhZjkbLfXq1gmLXWJK4LKrhZVUZebFYqHLa9TZSy9T5e9qmYLV7FdikRbwv67pHDVD",
  "key47": "5rKYAuaBXCvJB85PqjihjKxFXPAsvine5buC4gSMbkreSkceANMwp58q8xQnyWB39yVs6vGFyeWNFCZ4FugYt1a5",
  "key48": "2W2FTqrybLEGEKmXA8A2rE3iCg1nVsMik6mp4FSugKKUYuPSowRw5gUtMcY1e7uTi7ejir5r1W7za1urB7K8RHNk",
  "key49": "2LCkEkaSHRpxynHWg6tzLFHspVrCcdca5igjRdM1jXFRtPiWmZkJ4gcwtCbFXzfxp7b4hwfvKjuxzVdwp5EqVMLm"
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
