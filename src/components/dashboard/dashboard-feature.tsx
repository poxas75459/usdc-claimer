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
    "T9bo8pfrdSyMkktRCbZ84VhDgh5MQA6fX1PdJE8zzDZASdNXVDVwsSyJXEry7qQ2vg36RZtCVbCskrhWVB6Ajaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gn6L3LMQUMXMuUdGUxdAgB7f7cAAfEdiKXfvb8agCxarDB7udcqd9Sxgr64CsihP7T6thq7MamUQh23TvUT2BHf",
  "key1": "cFaJi6bjayeFzFWqpTqdMsKLCTZofAWRcnTnMyz9LWCZGsWW6dLsckEJjzdLW7LuegzDLkkvJfmyvh5a6mVYevZ",
  "key2": "2hD9nzQ9L2YDtdZDvgSGg5sDuk5RE79uwT98KyxiFG5eVxUQCAb2c4EWQGnrQ6Q3N7wveTwzTYt2n5QZJsCytyhn",
  "key3": "56Z5TYbZhdEYnrbAevsVhHcjnsFYohcJA2uanR2Ly7eLeDqVSHPneiSv7sUnjU7jjhvCYWoNup1fJx4EDJTjCURj",
  "key4": "5CBkHSJyxndqcRgh3n5xYy8np2MiACRrUwtUuNEE6vwYtP3sfkkS2hYvKhSbMWNwyqEPFteRjgUZ4r9jU3HzG2KH",
  "key5": "2VQuJeRneQ6BQ4ektSHmADGt9Af1x2FcwAzfmwRSnAajXDyQ8gjSzoUeUXgEu6eGJFwsYteaYraRFFLgJmhnfJfN",
  "key6": "GpTfD9FUndXNBi2FU8a9hQntYoerA74DiLQadE53fSvHmk6JTZ5Ezu8zJRugfwoGGzCa7FaeSYNym1gy3exdksV",
  "key7": "2HNkXGdgA8H4RFq2yxfaLs4D49Dj3n6obfqCkN8ohSD8cweWv7s4u4UqpbuFx9VLbvFe2yQUnbnPmjFd4VwaH22H",
  "key8": "gqXcFWeaWG5ZFvKWaZrdDHdeVNNLwrrZnxD6ddo3naJeZnRKQhdK6AeUEyBWF4nDRocKt6BH9cuEaYfwD4yrBnZ",
  "key9": "2bY2DuFPWV7HnBfczkeZYAdQxk3rbKeAD7G5jQmf69ywoDQxwf2enAJ6TCskwELEqY7bs3oEL2yi2xz9zvNP1TS4",
  "key10": "2nimkXpEzj9G4zjAfKDBFoSk4mqLiteNXhJ9vLu1Q7Kiu5Ah7gia7RMUBRfWo5ggB8pneZmESLCkSCLW6aiwVKE9",
  "key11": "4JwPBz3urUuHFDSd8LUWWtWvbETHonpN1LiXr1bvXmrcrrxBaoqLjaVHJzcrx6LDqGPZtrgFeufJtNLZahkVoyFm",
  "key12": "5pf6pgrd844TvKpnDExwdbZnoPo9Kswx6E6ZyG33aE71wxudtY2fEMFrGVWce5pUHJyWBq8ikf2fuJBE9mtQAcUn",
  "key13": "4nKjCoLxCfFzHxBkLEsuXKybMBA5j6JHtkMHtwNDzRhbySdSBk6dqYNq11BC11zMVawSviefbAEjKrGcGurX2iPL",
  "key14": "3eUZhUt9ShtYzk3eh2HA3U3KZUzmt1PsDWiF7RVv7yqfLWsszfQQngTttf5TpnkYFzAVoYGUBHiuQyqyaEZSYmjE",
  "key15": "3XFkHi4ayUiyojEqDdLA1x9FFrSj3N8ndiS6ncpgJBTcK3WpVmw7VHKt3b6njr3FHUGFw2991g1F2vKakj8N37na",
  "key16": "58UiPz3vXajiq7xtsqDXC88KfkzQWEP79ER67Z1YNRXMP8qUZhoLFQX85mgjTnkAfVRK1Y6WwbmTmoFdXPHLJwKF",
  "key17": "23ergTiy4fBmBHjqc1PbstiUXqsmSPBrZo2BNxzm3xFi8QUFm39e6y2m6AUNoa2XNgA8W8YQAz8X375fTezxMtfg",
  "key18": "4LFWewhQ8hb2X1GT4zePdvA1mVsTnBgFYHsc4KFKMHdriirrq1w6yLkGrooKfoqmx72ETR4J7WHqL49XF4iDyFrW",
  "key19": "3TGxurpBtygVCW1zLUbhEqAdwU1aaf88gEvRftenwHXDFmVVuEqBdXpUaQg6M3PPKRXgLhm2ftKyfyE9PNoa2XCM",
  "key20": "5bEDD7d2J59PboAM1PPGT7MYTgymMCRdBJYdqMe66af2SccnA2a3dwVsbsaUuaVSXTVvWavBAS6nhb38k6am53Zm",
  "key21": "3NRYEiCSjCUrDeteWRhQQK1rC3Sms9N1ExiyJFLGqCGDDfhSSwb4bvbVw6TUooXkj6YNJA5cHrGqSxCsSz2mY5vg",
  "key22": "4v11GoApLcuAQ4tcqsTUAZyr5n85xZknJBYsoUHhWcAsD1DKqSCsD6e6e7w2ctKKhoaurpvnYFGBCUPVbtxVmpDD",
  "key23": "26ZpgbGcZ6o1v39ikF8k8sEjaH5Y7YnHDAEyJyHLe9q35pCKsKXaXFDuZEbGzrCz1eu1XNcfhbAs7jPbPEnsqMMo",
  "key24": "51Lib4z1fs1uKWz4iE3EL7FseXB3UdVYym8caXwGEy2Ti6ErzzpYmMaK4kPPsM93hfdLKBpYxT3gcKc2gEsQ5zHX",
  "key25": "m1HPyp8jrcj6ZCLys5z8gzSWzUdzCsNDQKME5G4jhKSine9PimkM5xz94ytGTMRMvXLK1pi3p9tGf1GJZTTEpMu",
  "key26": "5MxHr6f3mFZY9K3Bt7rHMnKEEVw3JTZ4n2RLKdhm1KuDeivBV38eJsk78BSD5Pfceo6Wf7mC1zYaeUqhExjNNoc4",
  "key27": "5RE1N4w5dFmDGXShxbLp6rGx3PVAdknfU3RNj9JrRyiZmRqnbytd6dM1SfwEic9FR7T6VYuZXDEWmr5Yin2faubg",
  "key28": "319EdRga6QHZCkqaKZDTJw2wXaCFFppf6UCGUccbHUCh2FXfQo2eNzTGdDquWFy923CwYf2b2gAq8XQ5hHjKWRtM",
  "key29": "XymZyQeYZfH4Ld2jwyJQuUvmH1DRsCze5n8SwDx4EXivPkWNYkLNR1pT5HcV9QKNRZj9LSMFy5tWnd9RLMn9SEi",
  "key30": "sw8dEx9AHzDhA8JvYo5VG1iDA6MmfRhcYYyfobprGtBre8fuL3JeTorA84xNKEUvp8ZBxYxsSsjMbLyCw33Ux7t",
  "key31": "3SoMJeiViHT5kNfzDKaRULtp2hnuMkB9iwLx7ML4KHARt5pJ1UtYHKVE5f3ug7gCLduEBiL9dj3F2o3KDe2tcBa7",
  "key32": "36pMaw64LdJC4UkUGH25DGL5RdpizL4pTXqMLDM1i2DjCwdpEjAkFm7dPrVYht2JMHA3ratYVMVFa3w7v8e87xrg",
  "key33": "dDKKDkT2dDixSB2AiC2JrLTsDvthTCQ1n4ZXzaWK5jwZAb2menRAiuH7hfQLu4eoAEo7VqeufBJUFT9jgARseyk",
  "key34": "qbyM62yQpq2xG1QVLkzj74mfyNRwsDPUAybHYZZTAToHshdA7ABRs9NcQgASFsEs4nuVU8HgpbyVXy1m9BL7p1U"
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
