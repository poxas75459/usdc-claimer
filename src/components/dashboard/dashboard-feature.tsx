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
    "5mz4LRWxawNR2LFokKLhBnRtsyvZA5XvDEBHeXCWS8rc1xtiyg9Kb6n59fdrVJCYVMb1BwahSwqtnF5MNNUaBS91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkAwbVuzwvoVeA2mfJB4AUeTcP6xPxyX558nqSbS5u7YvzFQ1eKznR7g672y66Zq8ZhzgVReYHL7Fis59mHhEBW",
  "key1": "4srfUZZgw9AmZuPJy9vzCK8fuZQrGpFZoo6W6s6JAGYoaYDfdv1gGiEa5dNcEuvmMtVrx7pqCC2TiqSezcPvTcrx",
  "key2": "jQnuRoVXLFftkc3UsF86ASx7ZV3rwX1CkvX4WwbhqpcxgzdNautjGztWjYqmAgnrTdPNyaA4Bipik6GP1XfBVZZ",
  "key3": "2CvfxPY3or13yB5UjBZBhpGfoLtP157Qvr4FYhrqQvJvR7DhbKdgyUfMGguHAVNy94V3ySYP36uFXc2AybiMsNVE",
  "key4": "2Aw54Mq7JfyJsEMnhiwTzqhphRgkh8Z23bE4iVuaBMidrHDxwvTK7RsU6iTRd6ypFAvi4tSpYuVMcqMrro6ndWiA",
  "key5": "3BJ84bq14d1fP7NDbFkaqsxFvhcuUA6MGvPFo66fm5JRGuyTkHtzAfUM8XxjSaCNDoyZZR7GUyuFuCFTTwGFrcXG",
  "key6": "2aWe1DsdVwE6DAuzJxzZqpAH6FTDHuujZhpaef4K79M2QXHZWwkmpU11WkZXajNF29z2nBj6AASPmmPtzSKwBNtG",
  "key7": "3gXQVUEoP6h5GihMEvQSQNRzGSV3r2v6ec5DDLCoBMik3d552gP9K13kMW6w57ineMua1Adwzv8m8KNggpNiLM1c",
  "key8": "4khRpuFXHXPfgpAZbXAmPpqk3f4TgoaZjzjqtgVL4E4jufKSCGVz6jq6tRHMAYzhKMg8FjHpbMA2rCNo1PZuxRQ8",
  "key9": "2PJmoM6sAvFRwHENXB5k8FSHYjz3nm7goTR5LMytp6iEasKnt54kj2mwuTxShZTTzeUeR7mKPKkKxxqMs8moetKp",
  "key10": "2mCQQbRgEtXXwhD7Mgr1NJquZKtULJVZhhY2XG5zF1TjkexwSG8JHGspWKMbRZ6vHeZZ7t48vFphaxP7qHKbiDqE",
  "key11": "9UBayBAkFXdgDBYZhJNBDaPQ972jaX2gHW28aiq5x2eg8pUdXL7H3X2akZEdgfVARGGWTLscnGyJ6F7hcZVwUDA",
  "key12": "cFbjLB4HwMSg4hkY9A8U5rnNuBKJetcrjQ6Lg4Tg3pNDnkRnhoVnp6ZFoeAKtd3WNcEfgfc3VFz2GhfqWe13ZVb",
  "key13": "QRcXLEtW1b1eUHBTdXreewTzD6na9Jf6eMAJaj6m5cNhHGF2Sp2GzNZKJL8pvGdniH8kpVn8av4vXMjqkkyKSmp",
  "key14": "3VUMPpyxitPnuAqh8r4azNBApW84g5Zv5ttxVfhsA43NnRGAvisq86omhc3wpuWvFqka6s2V83ubhAAb7RmLQ4tx",
  "key15": "2ixGDaYtXQtGExBaPYR3hSrEcMdAsXBBnuYYeUPJauwFjUivE7wS5r87vntUH14Z3c8j6Q1Y8LwwUt9FMKzk3Xyf",
  "key16": "4fzsk1d5MnRzmnNUGGNKDsu4LE7qzCWRtfmQzCtbRunkBFzQEKjHPNgBMvYU9fvdL9S2KPErrG1tRmforFDVFjnR",
  "key17": "4EFFENQ1h6ppojFLGmkbC1K7q1Dwvss1QZeajDBX5XUsG3LLSjtpSMnjyopKLj1qR7uG1ata6FsqeTgt6S2pXyt8",
  "key18": "53nwcAbNWVLyzsS9iMkUAz5fgY2AMCtsrcU56RLTV8fvQeso8cojioCjvbLUG2EK5XSMA6qgZXLss7iZWYxNka8Y",
  "key19": "3qHEzdmF5RdRgWyhuHcgPgqGTQGedsSziRgiLRo53qJXHgHee9dceZ8xgSt8iy4t48G64v93AR2KjSj32mMdCC1j",
  "key20": "4LxejX9sQtWaLvNwcEM6k3T5etJfAQ1WvSCa6hpg85d27bHwrjmb8DSbbQL7oaENRZjGJ4uFfpcvE9MJgufghrfm",
  "key21": "2HuUgKyMxYTUm12wzectn2A5G8snaurPAunaatp6vhPd5FFNN435duvGQY6hrQsUdDU152cG2vYsQi4Jrpz2Pk5m",
  "key22": "CACUNRTT9gH2DKYUvib5QgFfwPx2UcApYy7jw3deSUep69cNmXRWfj1YZmqScgpGr51EJHh7cZFu876s6ySrLcL",
  "key23": "3d2fCJNMpf1L8YqmZUH7M1Pn2jdHQrZxjXrdGVvDKh5jvvqERFzLhdzKoiifo3XgZ6uQDH6KeiuRDcKE9BPkqBDy",
  "key24": "2rUELwNB1Qxy1BJ7ogjqwP6hpNM6Lx8V8YrAzbHfKmPxPacY1XwB8B9D1NvVWJEywvvnfPLJzYkpFU4D6hHT9bfx",
  "key25": "jiiZY9UYGHP8GH6kykwrtKC54BtLM4wpcaC9cE4EpVZV8iUmag2XftGUadAp2z2puFjWd7tfVivBhnTABBcnmM7",
  "key26": "4P2cU44A3oNH3CKJTYG9CgCW4fvxPukcxLxqs8ivJpWY1yzRj6eZeMi2C3391dNtdeev5fzqMQxkGiCuYUzFCMAZ",
  "key27": "5uPFxEvApbtirc9xnpiyb4jZapcrnQ6EtngxHmR4p2b94LnG2ovi1CN6vpmnGA91hTgxqqAhKDpoy1ZR1eCbvwNL",
  "key28": "sUsDzLedbETomxcw4QgjoEz5i2NUDC9DPAj8ZgjwtiXvQaH9ECTHo8xmpASomHZkCzQLU5PNC9gWN76yXQFb9m1",
  "key29": "2gFFPcpauMEJsEuyGiosE1pr6FhsoPNmHU4XjMLc8MgtRtbVM8aNKyThsmjqUMAGdBr3Co1A3kbiSK9YgivMdnv7",
  "key30": "REhR1Eu9vAuHDQTBzGjdeD3xReuWBYXUTbdQtZJ92CL7eyRE8Fz9ETZkHZWqaqLa3WQidEACJ5YJAidiLQ2YQJ8",
  "key31": "4n3bcESJ1SxHwqdKX2V1jgYxyAnpRvQnc1bcnT7SBHvTaxbowwTSAZzvESrMFyoACWMVQQGbamtr59pHBGEKRrzZ",
  "key32": "3pVU2waNRoyzHP3MnfELzovDkENmzYT6sTSGWG2faLPfBgoxR1P7U5sMqZuHdVQE55zx9XD1Nd3CK4ZoXNF9qyHB",
  "key33": "5vFFDwmLfzd2iXyfapRHgCkLsnzWeaj2FWmhs7GaWDqYcmJLPoEBFf6fLxxWGW7J3qUk5FmPsCpbR9UfPWHiULQF",
  "key34": "f45yqSAcQ4sZqiZW9cR3K36Nsq5Mq54YnJAgceLCgaebsCwGg4MCJjEXpDx5QyEiDofQDGZ4HoLXHpgsoYSnVPL",
  "key35": "55Hb3btfKUMp75r263Sf844HrdbsMu14LHbPQhKt42BunrQHcehhPhHYUq5YDVh5bago8h5o6oy3XeW4JDj5mNxK",
  "key36": "3gpFDWdXwxnHVuUjqScHvdmxcvN9Vc1BcfB3axV9ev5Feb7vC3NSxZ6kJEdSGFEz86KqTR4onwhDGjbTKCtca5N3",
  "key37": "2ntpo5cVkUwTt1VLAG778AWWXTyRfoBTtni9B55fUNwBqdsatxEk8HrPm8EStzfsBaEkpjQm8SJ3fBcsDMM7U45i",
  "key38": "3aTpfzx6SX9RuP1Ujmp8CP4AY4rTN7ooYEoHsiSer4LQx6BtJ6JgRic5b9TKd8ESCAYQaobRrKxsD9iZD33aHq3M",
  "key39": "37mN6mthjJNyjUhQBvbmWmWn6mALVNo6BaiwMTAZd6oYAfrsTwi2CATLhFiSmuGXXLXQRp82NAs3X3fhqyiowAXk",
  "key40": "3dMKf5RsPSmcJSzRSaLRCGT7TM8v91rcbmW2BaCKd9fmHMueZY1nxPiSJRRSjT1Eu1LmcTqWFrXepyfiVVPTSHB",
  "key41": "5V6pZC4idFdME4dgyJTFk3GVwqBZguqsSgp4wqFiECpXtMc8r4Qu8esVNDii7QknY8iduaWtz9SRR26mAYrdnPFQ",
  "key42": "41jDmsosDqzBdtQkSsd6JcxUTvT5WoGskZ2abiwyFxrRUFfk8UnT5mquo2zLmGrtFZU8PNiUzyPZfGa7ghJChqDJ",
  "key43": "4bJK41dkR3MSAKfMoSWv17zqj3trtuN3asmDYVs6rUpz6NacPRpjtyGRQUmbXSfZo786N4miZo3CYsSFKYLqjiyi",
  "key44": "5yvtS3Rbee8zLx1PgELyvocL2oaFe5cq7iXjCp7bmPTM7gcS4CGRhtZcTi46fwdSRr7V7AsN3vVkWom8ttEVZBbi",
  "key45": "4XgocjvmF2WwPJoMLgFmYi27VtgJen37KoCB3XzVHFG5R4yUm6oLdi4VMVqKRj1nYJgwnrdRmyANTLJjJzWWXmid",
  "key46": "4asQaYgMDfKJjeERd6KfCi88sL3QHe2ErpwYcGebAvXn6XLseP7JTgfwkNEG2Nh5YE8UP58BZGLAw9FBn953Zmc2"
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
