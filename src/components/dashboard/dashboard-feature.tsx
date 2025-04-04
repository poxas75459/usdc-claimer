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
    "XgQysxTCANkCkJJdEo86UEhoLW2QrtqCidyB8BMs3mommXJdE85mZ3VQW7D4pwGDESxSAkYvCnqVjsqie9NNqKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xuqpBQxjhXiLKG3pasFwJRpcgmKqUt7Td7ehC38KEmcp6paAP4mRwtLsS11BZLARG93gCcdHqmMgF9ebrJxjmM",
  "key1": "5kf7WRXR8bwRuAu9cUVf5y1LR7KAB8XA8M4iYDqVMk8c2nshpKEQsYhYivdwWnpJA2eB2JBd6AdD4SPiGvpErAcE",
  "key2": "5PD2QDgaPFqnzhv5uNkQzjHX6yatJm2sTfzDWjkMtCcnDUcy2pbAbWeLSi362dfThSKsEtmeKAoPqJcRmZfejCXD",
  "key3": "3SGZ3FmYpVcy5AyoJGDjixjwpArPq2QpFAK9QkqchEi6R31MAJ6kQfZ2ZywRtsZ6XfiHot6LGEzNL8xz1wozZn1a",
  "key4": "352aVoRgi6qg7nitMDgWecjjn7mqeCZxe3nvZecdq1sMyG9U7q2BJUpVjxQsNWEeaZk3Msr8e7xEZ9q5bcGSFxfU",
  "key5": "4gTg4XdJfGbw92PYNyVx55yVgpFju5n5Jwv83Je73MHnvbfkdg2mtxwHDsUHEkmYtVrKoCt89Z2Q2f3X8JqY6Gxm",
  "key6": "4HZ2Yv6u9V8eTKYPVHFEbALNbYH1VNRadTcr9xhoVghetYQbov9BXfgaQH9LYdFNEWG5X3qDLwi2aMJaaue5x5L3",
  "key7": "2bLMDRAQ6zoSmExVAq1h7tp2xUCGdZ2M6zUy1U3wLu5r6ju3ujBJYzAG39GctYoxR2EuhnhxEpPQWhtAPyq6aeWG",
  "key8": "mzoz6izdx6w5GCVzU53WhgTHqmwRWRFM9ixzpt4QX2x2PmPiRJovU4Qb5jw6rNtzc123od8C37JdjfcBYjCes7F",
  "key9": "4vH8DYYhosCoG6GejVG892Hngo4dJK2JneGsBmCG3w3ncXYtgY929XHUKYreP6pYR673SjoA34f8QoCQAi43HCj6",
  "key10": "keP5rUUxvMBeSBerSNX1tm39R4zBxMdTp4mQnKGqrM9pPbD5nuYQ5GwZ2Q2zKF6KtcXE6ha47GJi658sqJq2Mib",
  "key11": "4ZwCXJsGdq7fD9NGgS8JUd5bA8pvjtAL9r6tdrKMhvVpK2F3a2NzuLZNU8RPbkmqS6TTXd59wvF6AJBWhbwuekwp",
  "key12": "TFGBfCeAFBFea7Sh5Ev1LGcAVmMKbRgj8ZoY5ToJvVfAkmuFr5RDNLwr1Ro6FfnCkQue9KrwphGH6LoJUor9KJh",
  "key13": "5pW2nnQxRQy3WpMyXgWArjHt12iAUTE25gSZ6W3cCnqEC1fffCrwD8bBvUjuMXUqrJZgsP6CfFisaLLBjd2j1hmQ",
  "key14": "5pVreND525AgVr8V9qCFdvqDohgFmU9pxjisLLnYH7AMKMo9KdpciP6u3aUzgbwCs2zqRdzGU9ZZeVH1F1biLwxJ",
  "key15": "3E9u2qw8ujfqdgoeRpQaDkpegjwvNfwvSrsNzgDncdTB9QwqqwFpa5vmxiZCa1uGbrN9QnfPiNNcqPTGVjqKe61V",
  "key16": "5ZjWxmQ38cdLJfCZyXUsX5xQgPjQ8dPHwnejDygFsQF1Y2TRa8rnRHnyUp1W45dHD32he1gUmuYPGSYvnYqTob25",
  "key17": "57SeWbwJxrzamdPvVmiPG5Jsu22XrJaguu4PmnH2TMpArrfv8v7eGkSYMWk1RnNSGtoe24aA5uQ7Z1nDn5Y4ff7A",
  "key18": "2Tjf9dhLCmfnTRtxXSwZtjP4E6JfkkXVJksPJtDH7o5SnmeCf3uMK8AS7qcRWEehN6vdeXNqnwcM83FaGDuD7K8p",
  "key19": "5SRTsLWehSpqg52vkuT4WGe538UXNWF5QyBYryYuAEDpPALutgu5TKzXbWrSnffMk3SR8QCQTgdX7Q6ECbpTAq4r",
  "key20": "4pAJAwr3XAziQ4cUnpWXJibvnqzDHKLf6qXE3CRT5BcqycrkEUA4984qjdfJkELKa3u1Yw6T3M2bfC3q1QqR9m9Q",
  "key21": "3s99Q25DCEcy7j3hVVNkfenGcXNJQc2kbvNrxtHRo6t8ZrmSyZvWvng28gMuoCwUAWrtXwY4vyXzLTKCfbqpmA8B",
  "key22": "5SSCZqHDbNZdJJPiDaKBFy5SuzrejXEKehNKuX5avpEMyQmYYtTfeaQa3Hfebe32GnN6cVVe83VJVHvsF2MDpukx",
  "key23": "2dbukfhYt7u5AvrtEFThnYRXNfye46fJd2H2ve56VqcoMnPSTkukDgwyPEtuq9kKRystp2AzAhx6N5BF71Y39wwt",
  "key24": "3Hfuam3XZrz75dYHJkjhdoQZipaYrusZVoeHb4tkGeuCzUhWG97mLgKfpdS4fQHTKnTZYDvLS3w8QshMMQkfHFar",
  "key25": "21Z6bYDTL6yF2vvyiLkANwJopHhCzTZjjBvRQifXscavb4yAHA2KorKTwf8UTKgu61bCr9ko51rUuZgiH1FdfC4F",
  "key26": "3Fwpi6Wnb52yZU7QmPAWq5brM4VqVLD56atiS8ccHCLQXHdsPzPkpojiVT1m6htBUKsHBButcieDaTnNncnuVVa",
  "key27": "wR5fpPzFYoM1vyPhz9ggLmGSVz5X4EK34E895BFPSUoHmvp88SrrF5X3mzFD8UuyiM3LHhe7uc9c9SHnBxReG1a",
  "key28": "5wG1idzZxT9auVuLqGLyrTWNVoAPu6VhJQa522kreRSxCdEGDto29azwSCyitHtNko38ufhoYRWwxFxJVMAmsGkP",
  "key29": "5tc3ZVyS6b1jGMKLgRvXSoaagzrLUxU3v3FbudhEf1tkXBKhdRUcWUSCmrHgELJfUfbsJDbaxcPSiyEMrms6PKb5",
  "key30": "5PeAWvgbBrA7g4Fro8xF5hw5xyCioYf42zGYbsH2VK9P8WRZyvHaZczGV2jEJNECDhTKG4Dx7Z2Qq7H39J3EMFQC",
  "key31": "5Jekw5Kx1xB9q3nqnHYsKzqbMdVVauDxLVkKcvN1fpXH8kyZc7ZkBHqGRqmzoCvVaxxSDyLkB7YmM1UU12Rbrk8M",
  "key32": "3fgpDaFWCijUrZFeenpnNBXBH7osjGsMGbXiSL5bPDX2unUxBrVHGvdQ8jU225SC7mdZJNZXQvzo9pxgtT6fwxzT",
  "key33": "5YoTtUGziiMS4syPfr1HVnw78FakW2BBq1wbhyarGi3hvnZY5RZxcQoBazaVcgtU2KS5AMKYmQx8u5CVcFSvqd8C",
  "key34": "5MbzgfJsKV7wQi4erRz2AifM1XqAP9aXkriQew8zLho5YDaimRie3KuhJ74vnvxtGe1R6xDBNrMd5dVEgzhjruHW",
  "key35": "4Ka7DrqRmwxSj3m6pi61zKSJY1WXxSsQxnvdFwHxJSeu1UEUPUTgcrPi5wybdY6E2gnuX72jwFW44MCrChkLunfN",
  "key36": "3ZMNmWqRkhyP8gbKyWnSdXxgWkvuKJAkLxoJV9iJFANYc7poig8kEfuRRXqo2p28PMyiRoUEvfrkZNDbeSrbVH8g",
  "key37": "67BpMrVuASjRyq6gdhgsd8srXv9EEdES3VDkrbBNWGXFSADR7PXXwP4grjPFsJrQmp68CMoWbBAbxXaVVBLERjvr",
  "key38": "5h6FwEsCkDzewTEWyLbmxPrNkuB7Ge8h2ZVpvJcH41oYxWnvjWGgmgivjduiwtfDfVD1bt1aNnt4Rzpnc1Pvxovu",
  "key39": "i6jLKSCJUEEMnNALBhpy7SKfwEGjNT78ewm5pU7dY1JeuPWo8LqKkWDoAMrhTsiX7nfBn4kSx2aMnbwwrELPEix",
  "key40": "3yqVVphEBrNZm2rqLGQ1vPtw7qMBo1QRgGx8QVfjT6UsQv4LgHPDMLFwUVMhdC1A8b3K6x2iUBidonwEH9DPEd9L",
  "key41": "5DosgP6CBVbGGfM9fuG3S15bmFKs7bv5XMh6tkFFUBU93WkJqPoCKZqpM6VGLUNKAUgxWoJvADTKyuDUefFxerXN",
  "key42": "2L9v8eFvMahjgJAfrUXsHU6LxRDwPi99gmTVbAXg54rPkQA1ZGzi7i1vmbfPx4dzFjG8feKQJy9Vf2DRaLG5AzEm",
  "key43": "22ALJwhxGSK5btoatNr9tEYZTDA42J3MXtGiBR49kkH3qexdTALQsYBazwGVZHz4vwGkCuuiscS561u4yQsvRURc",
  "key44": "2dN1xuYCdnWg1eiog1KpJXfQ5yAmrDezVnmY8P2RDwip8qPYx1U5QNQiL1vBKLqCZY9ywSQPGRwdw364B1UK8rZm",
  "key45": "3Trc1TBgrwTYPMt6MrdsSyUaTxxNirkrRdqFYPZrDc3tRQDN2bGz5eEnWQDkA5DZeFinhd1AUxaKPoDV3HzPpEfw",
  "key46": "4tpyKysgLCDbQS7RTzwqgX1CkGbtcp3Vxaj8jLWs4E2weNX1EB6dagYco2R1cm3H55CZJDM6qpVk4gzQcrWeavVS",
  "key47": "4QsJxRHNewyYXxxFLuxavn5JM3VgR1BGP3MWGrUC15EY9X68G9ZDDkFV5tpnejNLyLg5F2TMyAGpUZzD8tHgEU3N"
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
