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
    "3SEZsinwZu4EkYxCq37izTwEZCG4xsKR7rPihRgbxgv4vEVFHaNd1kdkiUZ3Ys4inHpg48r6TPz3seqxSFbXLC87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9S1Jc8abXGyGMGHJMnMgzHbpvSk5GqtYXFAPn1p1ptaEPdSxvsXbXV1kg2Q4m5nTJenxU4NdxHZn9nH6ztuApZ",
  "key1": "CdqacZbq7PcW2vwCFvHYNeFzTDegFgHBGQKWX3utBCr3LgQg2LFWVB9WeidZoH6BT3cer1UWrSn1mWoMNnPrGXM",
  "key2": "4RgcXy4mXvQpZLvvFn1BAEyoFD5mMzx4CK4xWa8VEubsi1yNqqtmUgk99BacDUqPpSbDvSDmRFTzWn6PnJGx3jcZ",
  "key3": "2gYrMeV1nedJb7osao4eJX2JmAxe8zbm7Nm6KJUJ1nwKLiyLZNrDrjHjXTHNW3HjZwe2M2TpA1mrDcKj9xeGHyxE",
  "key4": "2Mbu958TsiChALLTLcQ1R8QUsgWZrCCVEpcqkuQGH7GqohttaMUsUDd6bv4i3Cwxcafct4K19pdY1Xx1ZAaYoyi",
  "key5": "5kxn9e67BzgjxsVHbQprJodenzWNPMFxuYp6j3YCptwHM1fVEA4KXQy4mS3fwZYdTyY6VMXi9UFuEUT5AHJG5iyB",
  "key6": "44zxunzMH8xGeA5E1Zt7abqoUkPW3eogiTCxq29xjMbqzd1AiYma7eV16zKUantJkrSouCen6KzUpk4HcpGWwcS2",
  "key7": "5LqdauesD3rcaBhoNnwVH8DD7WexhucFA62hCgzwt4Zp6ayoMCaYfZgyjdJ6rb82pKWAeBp8rosSfWGrXSp5qwb4",
  "key8": "61TwLhoSZJWeecq4EMNQH9qN8wtRB1oUphAp5zVLHuz67Q9C34fBSaaYvhL15N2vXmp9TUMaZSpz8f932xPViwPF",
  "key9": "2Ro1eZJSwBmHTgUT1Vwv2GSni2MZiJ96UtUnFUmg2FdkePzjJQ1f4RTT547gj7HidLTBEvuvhcSFqMapbNt9Ebec",
  "key10": "5egR6A49jktDhzxRN7E7Uf52A9jwbaj2gjL2aQcBXJqCDhEcykU849D3bLfLP9t7j1yPrPpiLht4AT8PuFm2gvNR",
  "key11": "2y38ipiEfmaRgaS9Rwm7V3mF54AdchWAWHad86Y6YKdf7fw5xpW1S2yecNqEQurY6cX3DiimKTMUJrAYw6gNQRh4",
  "key12": "mYQamUE9xN5D5AoZ2f7Y5QEWRAb39pBZJKfTQmYQVmotu4EeuQaRHT16LmT4JfjJ7r1HqRrTvtTeXLir31nnbb1",
  "key13": "5Sp7gGLaUeGNWkHpTw8R4EHfeg8wwvTaKAT2K7QZri2rucYuQAGYU6W9s9iAX3dHMNx4FJuGKmaC33qtU19Z3Eaf",
  "key14": "52ebG8RGNyRzsteaKK5Gx7s5kWGeuckW6k3ozwPeakqTxEgzPpQd9kbSBguTC7rZAfiCetjF6fssqBDL69PYQh9S",
  "key15": "fjAvzxAjYn18Nva7vR5JNmdShH9ZxzNYrMwryyggQDeKTHgg9AL2rg1ETzkVcUm3c16esresbExoTQMHRKRnQf9",
  "key16": "3YcCry8estPbHFsrVH63NDmPBEy3WqdVZNFsp751yVxCFwGZcQd5C6kSfb8aoPQjPrRMe5JRYy65mRs4Xqyt1YCE",
  "key17": "424WrNDidLvy6kp1BiHoCHUEj8faYAJszd9aNxGRFRYzeZa7GP2o5iET5xHPfDS9DEhMLbrx8qLc1PXsDeRA3tae",
  "key18": "Dm1HvCxkgeQyijU14KnDtitwPMnQDbGNeUxmA1YQLWWgb2FbAKXqEk6csNpZdTgyPW21gSMsyv3skeUXdDzqkgX",
  "key19": "5YsckperFmEpuqc8rajDUF7hGDFVYjMQDK8CDzLF6ULdYN7qCMp8i3wK7vCNcNdPqQmxddx1iZ9hBCuMJ4Ydkk27",
  "key20": "2ZRpDKyfzWLCKRUsxBNTE3P5ekg3vtJvdL5MZSJrTbDpWzqDUT2AgY946KbPSdwUeB5bcYFvsRBBLNUkEuqcq4SZ",
  "key21": "4ihcYtyEAniZYG63zr3iuiYCXSv2Y4hbaSReRs5Jt4kFvUCvJRmBjFg9oZXaqcdGRYRiE2WhrJ5erEUdtCCEE1Ty",
  "key22": "48KFUALRioza9QJN8xdyJ7A8ZyEWwUkcrTfDCwABDfSxtLiRGhWMV64BBVvDMipkRirmMmb9wccDC4BMeN5Sk9yU",
  "key23": "3d1qECZ8v6QWbsgn2k9KPV6PBJcBgSQ4rFsKL83groeTX3wSoYRfxS5Zw5ifkycd4VGHwnSCbF5kjxgoEXi5VNuY",
  "key24": "5Mwtkv4RdownT2TijepNb7oYf1yiZvyt48Hoz45q9wNksm7URQsMKbBbyTamjkfbHj5JNuYeUorY3gZ3fNAxnpYN",
  "key25": "4tL4oj5kDs7qeJuBDQuXTjGwsZBTraXJQhRek3bNsscsPYaTS8m5N8Bpz1naMxTg2E7yqdtC5NeWvV1t3ZmF1iT8",
  "key26": "22gR69ZbZ8YkvBQnxzY4F9UQPNP3cMwiLAk7KfyqsgRVdCQg8ouQwadiTWSFujwnp4Zuy9AVYTCH4rw2QWh4rPL4",
  "key27": "3Mg4FWMmdWtMDGamh5LF6jSgEktp2VeohsywjCvkYTitzoYKBAqkJFLAajQMCkQMTxJJmYrUwszjALbvFqhoK5Q3",
  "key28": "KvsXCqR4pAnjp4Ac8auDCxwLkJH6jAPZjcbTSZK3xS2Q5y2yhLBiqELwJHT6DQcPQPiWNo8R5acw6AXyb2eFj3i",
  "key29": "2c1GEewLsPAm7swDgiUHy71Yz6N2z7tmnnWiMFLKteoTmfgwifwRR4voCLGWANuZ5CnW2ZsnQGPfPcGLmjPCQvJt",
  "key30": "pkhsKWcwhCgd17NdbZy62wkNTHhiEsM2oHEVG29xG9PfM8Vgq3M4cyyEf7xxjem4JzDTs7CQg8aTFRwSBj73pcv",
  "key31": "57h6zBms3Kpe9ooxysFM1XaXkDpWmaG4zzUT6zjPnwuqWQRRxGpfmt3ACM6RHfaXyZVEeTAo2hMvBxDAmQnhctoX",
  "key32": "8VX8J2Uv5tMwZC4brvvyPeEtk1NsGM8bZ5gwE1LML3T7R8oAvNh4rGnY6Hx9mcszZSoTgzCBwxUuWUia2br41sn",
  "key33": "2vUJdMwMxe5m53AhozBR461E4Tn2sbprZfXsvpTLrorZ5VgzXbCamxTga1wgutsbPcDu6jo1tZDejptRVn26ZUgo",
  "key34": "4dYHcm4z2eNDUkegyV2trVNJs6hkdGozzbCq4SamS8exJShtorRXcWazhLzbFmiB6bF2iqS6RnbEQcrEV5vU7ykB",
  "key35": "4LsfuHhkgLpTY88JQd12BvpZ8Gsc1MeB8oPP6iSsefYpRn8R9wbt2juNVDL7ineDGMygM6jZypDWjGFpaMGUqTx3",
  "key36": "5rbmfAyLUvirVnr3XJoeV9GhZhjUaPKHTSrgsVE8faWLEXDfGbTnVgNsyHM3QcjqxxB5VBiVs3z6zFq8e75zDUPs",
  "key37": "5drBzTMpTdJKzksLxcUNuPHF8oR1sgibTDLxUbQ7FSAe1EZj51s7SresKeztpurrK9M1jj5WrSDwnRbCEwhGiRUV",
  "key38": "5BZw4zzddh8EpAxTRkP1qnCNonMN2Fb23uEztKw81K6GEMZPu8WS1VgwU3CgHem3QmgicGwqGW74ouY4DrAfZ23B",
  "key39": "3RJoUw29eHGZFNwHfnk52f7FoRsbRCrRtQafee2TUDbDV3hNKrbVkMQAZmpcMkTayXRj1fD5sjZ4njtwDHyZXUBe",
  "key40": "45ej1UxShcfc5xiVMCRxqfac1S713CVjvLDWq1xwNWb4H3LGWotskyBz1S1LzyXsCzh2okoF7HLsaSJziuSfrudw",
  "key41": "3K1A7Y9Ft165AsKysrBpkkwBv9xff7qtTtRuN1VEDX9U3RJd1Rm9ZvhBkSWDfHTXqWaowz8caj4z4sKaEXPQWCkw",
  "key42": "5p7jya93696fnjtXoJJAb6wH61thQgEFiNqe3kzHBYNDk3yJqHm7UXaNw5e4n9bJpmfGVsBzkHyZsGZTnVDyTLP5",
  "key43": "4YLToMxEX7yNLoYa6LtSptGjob9xbizoGcB6WiCbr3KbdDQKGWnyKFjAuheK8C2esgD9yo9PXdzBHN8jbD3aiFSy",
  "key44": "4Bh77UpJuaCZVK81D1vdytgkynexWg7S2WryFS9gqbeMBjpBoyYUJ4Y6g9N9bmmvn9owtroeVLvTGkirGdUd9fEJ",
  "key45": "3gpaAwoYMZKxZBVjki3Y95JimkKX9RJp83Qi1XzNr37CygBsYzHfhcNdUvHMx6rqf5RAngX99L8GDwMWpbfvSaqS",
  "key46": "57SWfJpCqwzcS2zq2riPaQDHiYgK7GeN51hbqj9DDmgDzmQC5C63rmy27WsdmZ4MkjVF5w17jXsGQPNrPZbs59iu"
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
