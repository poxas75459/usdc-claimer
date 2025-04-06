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
    "2UH8N94PcFACrMksZvgUaLLG2p5pBNyRbAtyMf9zbw4YDVAwqfHiz7pV15iGs793RxtANcH88c7tXLLVkZQiatwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjgUTQZuJZUzsBBtr24aTD8cK3TP1Vk7VVnwHENGfoM6CxnKyJJg82n958dtK2KE2riE6USU6sRvu8W52sUvnyF",
  "key1": "4nCre96b6VFPhqxVHMPPUaqXuzHnUqQdpPHMY7Mu5h75ZAWkzvGQnwqg9TyqqJm3ZSsGXMjKLLpJYnghG8D6WkUq",
  "key2": "4DQC8Qwg5K9QihT6H3LCYPpGt4YrixFfutxy2kN1w4r3qEHLGnUAYsu3wF42bBSMUYdmkPYoEEYHmHwb3ag5i4CL",
  "key3": "4YGijyp8fsVojnVi5RMqhXhp6RYiq8pW3BGot1NLGdfX74T3tXXCtg27VhJ654StCzF78qjahkiThcsxGnGdFc51",
  "key4": "3tTbGiLEteEpDG8gXdz8R9ep7Ap4j7HuZ6sxgEoJTEXHnqf3SD34krQs8pFism5FMTfFxXx5TnJDYucoz2qPB22N",
  "key5": "nwV1oc8fZb5DPNK7s5APDSnbVwE5y4qCfVUtPCGtZ83ZzVn5BGMPWBthNwYAts4EPTQZN9aA8d6q52Lxq2h1XQ9",
  "key6": "622k8QsZMxfKViqEgD8w67iERyWCCkzdGexVH8X9Z25WFEZ7VAazSGkKu5vDHm6zMxBYMYaeF3ufwZUWBH32NtCH",
  "key7": "5s87gyiZqqLAao9r3HiA3okqmwWFs5N3xJZvB3wdVkKjL2JBBfGT8XXAHfpKKrZTdm8pshzXbc6L2cQqfVDix1Fu",
  "key8": "5CJTBMeBoHGVi7VQNpSuWt87M537Rpi2Ft1TknbLHcsjqYJpgiu2A4SAyxuXfXYwmFXVmEVoPh84NdHFCjkMFGiD",
  "key9": "3nLs9gwamb3ZPdoGdvt94gZLMbyXatFteWugEdgAjHw3ge9LBjkPo31CwTyhKTpHeZsfpQ54g5SLqrn7tEN2gX2X",
  "key10": "3RH54t7fRcNgNooFxFUhZsHt7s1qELCpVL7v3cgXgaES73JBaRrmwH5TB8soptBWmDQqibb4LrfQmvNqMFJ4imaZ",
  "key11": "2fNhJEBj4xhKrtxD4qQ6owdX3oRVNmYpAiMrCWPdB8bC8bF4YU4j1A7H42VHpe9qPwNLoGCjizKP4AhKhaHx3yLj",
  "key12": "4r4DTLWd7Smp6SVfQzXGQoHnhZajtFeAJqupkJm2UDVjmkKme7ryFT1pxakEvqws9CjjrfrKXtvuSrrDU1od2EFr",
  "key13": "4f4Vuhs4gUDEdgQxKXFrdN6T1UjZqg2p5ioi35BYSQt91iDDnARZLVpWQ4B5XaRw1pQavi7GPV7gngcDaGYK23L",
  "key14": "p35YbrkAJvnSHfpEgxNyqvtyytwxLQdrKzXSjquAd8RrExXTkpaYJ4u3FS9tef8fgv5A34Zf3i4W3JR473py8DQ",
  "key15": "Anv21tovmaAXqnkQrdNkRBKQQnJVXRTse5JGWRMa6nsFrv6Wq7jhcqCToByMvYBoqo7z3jcX9g7KxLGu6DywdFT",
  "key16": "4dcghVWJPkbUBi2DzL3Hb5tviZvNawGTqtWq3Lvpd2SDLDjU1pjWowwtHsDErUARj3joNsQ4eELrwGzHrxuaLvGp",
  "key17": "59MT2bgMGFc2KtbVcLj4XHFNmTA6uPTbEc6k6Xiv5413HLG1z2gfHahjiCRub5czECmPFWKkdoMsZdoHShNJT3vt",
  "key18": "3U6xv8ZBe6UXqpgCFg9JUDTeVaLWJMPatdnG2UF9ETSf3k89sCvVQ3hSSWVkdxbi2wjTbWiw8RGgGszciGA3cLKx",
  "key19": "VmXQAbCHQyCPeniaKKpeEmmE7EheA3aHMr4XgzdsMrsAyZG9iZFQpkNevAmKHcSsSQ3fvhPSehq4To3LbhJnrXw",
  "key20": "xtCmsnF1FaH63N8RaDjHuDpvE9FGJtCBDYCPjpdbXk97m11KRDdYFV5aVKacEM2BYrAgmFheNehpKZYQ1vUJS8y",
  "key21": "pPrjbryjiV8owQgNrQNyPEyyeJr43sQMZRvVDJS8X8vTLFe9TMiigb5TNWrSqhfBcNBhNiAPLpTjgL7a69PFuZC",
  "key22": "23SUgrh9Xq4HZkAkBNyj5oVDNYBzznx3pvVBsCvB5AmtjE13hFBXMhoNETWrTjjqSzAkJoAXAvMSRhYriEZnniZE",
  "key23": "54Yt9seLknVPNtCT1D6PGnZECQp3xf2QW2gyyLF5wTDZJzG64Lh624ERACwsLB5ET7KzQw6bfW98ahDGDmhCRce9",
  "key24": "5a5cRhAHmXjmrBdtnLkyUVZPMcM5VoFpTQmJJ8fwv3jJBx9VxyZnqrG9vduNWWTRCUhdLj94s3BQGWPPjk6HSEuK",
  "key25": "2zQtZ7imqQsvbCLvHmhkKhTpGyo8Ad3wjZtmezT7SjX8C5qy2dobVJ6quTu4Z3rwTDiwhZNaBu1FPNfzzLSsH4di",
  "key26": "47nB1oqFjFJKaZkS7cFU3ue7TuDoVdEVoCwpc6yra4ZP85zuLMoR8pEMK6YgcL4FrtN7s9W3NasauiHfWtaqSJGb",
  "key27": "2bW9KgULP1s3j9mGhLbnCrCvimpLPtBHbqc5U2f9DUU1f8EnC6WSpQjTaQ5eCjGwtJFAvqZrL2LvfjzQNHHT4h6W",
  "key28": "3YByvMAXRfdqGCmQjP1NgKfXGHvDGKn3VmJrV48zbZRBrDNT7j95bVsSS4LH4e6UnSD1edErnGMFsqqoVxdt188Q",
  "key29": "4Z9YseGAwUEJpVuuTshTsZ611AEDY9fzRMW8WBEMPn1oK3brLJ4FNCx9fjqQCYywDfw3MXHp5LePckCyqEwk1xzA",
  "key30": "jZZtGEFakSWxju61wkp9mhVMN6vpF7pkSAVBNXmhB4MmXYon3pxs6DvEZ3iGKyE75aGY8GWrrNhQ8wsxEwcpYvB",
  "key31": "f1wW2vHMZ2ynqbRsvvCK9uQuvEKKXuERETczAVkotGHsYc1k6PkDbpcS2f1nvQWGsrtKyokzZtV8tBob2xXSLo6",
  "key32": "2rj7fNwaMc6TyaPvbm3eT1ukncotVG9PCqses4CHaopRUfvwmKjtmyisTAEP5ZADbT9oe4sAsgbfJHUmE3sqT5a6",
  "key33": "2F9sEzXMU8yYKy2W7SqFu9VKpPLKvwLyQYbr1daj9vb1z855egr5ufiLbxDoHvcbxSDQyEv31WL3BUrfw4mvFYa",
  "key34": "5eC2U3F89JCD9X39f7VVzrHzjQZ4KBSRDVr39qgSXJdyUmMr7poFro8HTL36npecmJkjaMangkijWLkyUPHWx4vu",
  "key35": "VEHPJyPBigWb3JDN92aUjmXsR4PW2YzErCMVGamj2eZxfX9Yc7bLvj52PB472g1HGuCpTbJnEVVMSTh7zjzends",
  "key36": "3wH7DPfrsrk3qjB4DiyQJkYzS8uUobcWYtFWNVaw2XNb42BeobtrzRZXCAEz72qJxD8QayLAxyJV2Tgg8FPMoSip",
  "key37": "58cr7zejW3yeKrw3Y4YGTMsfDga9GAtmmKJZ7kqJpiyjaFjMbmPcBQVx9ckUR994gU8L6AWyit5EkzF6BR8DMfvJ",
  "key38": "3Ev1HqY896gDp6cpiHAs8ocAbKGKSvjtUsxQR5G2RrNaYXhMgyseQ1KipE2HYbwMtxfDjJtZSCpCzFS44AXdw7FA",
  "key39": "t7Q72Zr2kGq2CrxLod4gEjW6R8JFWfduMdZUo6RXDmeJSrwkbmQDUfx55YZ8qAu4B7T2s62sqDtM9qKBLH6ZpWt",
  "key40": "4ULK26CsdCDW8TUWEVqiY2e5MX4ACodfyPhPAxNiaUiGcs3YMY3DFdST88ENJ6kzgtt84z2spM7F8ZFnwGFTCxTj",
  "key41": "5G5C1LqypmDBqwaRT6K7ssHi6fR686E2MPS856HyvZYQgDGPGHVFSDMSF6MpoY7RoDJuHESwnfZKjeRJgAxJpQ8o",
  "key42": "2Gx83MF9fVb3t9gHkZZze1fDwUDjrU7KtTNRkEoFHQUYtzHydTL49MDnASpne2na2BCFVA1G5UDUxcvCkUc7wPAm",
  "key43": "tLDWZ67h5DqfxkoX2yPNbVSJCbTdzTYVuMKjdJpAHC7boQrj9xdbutP3kv2b9WBQJ1Lo1DpYa6NSAJMiVYNGQSB",
  "key44": "37nktRWA7g7tgEMxDYGjkeq9PEzX4xFuAneeSj6WnGCGcFLU1WGKAX9qXmRJGiZmFxYDdiJRWkvodRwv89HgZxyk",
  "key45": "uj4g4CoiLM5gBxPyGectSYcJkTGxuvTZJDVE5d2dKTmTM2RJ2W4cmeU51D2cN3HZRVUKzbuDDTrL6eV43Gxv7nm",
  "key46": "25oc626hkQ5gUrGwQUWopdrDoPQZnBbtywkbTQbJzVyA5NqtzfWJ1uA6m3hFPJXHzbRjmrzuuC4MhuqJApQQtSFv",
  "key47": "2qvif1zisEHzEbNL3p4vvwr3wGPq9qNUC38PsdiLmW6v6RLjoDevBdYPFPv5HtWJ1FqvpAWS5iy5ASk6g4gK2Aw5",
  "key48": "2YYdnvwacZMxyMtBtcJ22HnJNapB2syPEWCk73BtvWpckNcxz89tmnkzAYVxv3sDGjHJMZdCssBg6M5fvbT7VguR",
  "key49": "3iNjNyUMzD95QdQVTRhGLLJ3Mhp8N794VH8pUWtwk1xoSLDoiark64Ni3ANvhVmepDKJHNgJS4XJoWFwWNdHg2NE"
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
