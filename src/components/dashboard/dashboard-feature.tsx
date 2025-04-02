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
    "5wAvarGAkghiEm4x2Y467nh5q2B5ywcfVp2QYLuARo9gfdoRPAjLgq1TGBtn7J7qCNuTm6FtapeJWTRvpJ6EzzpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnFELCnxtTUD7EvnhVJij25JWqLiBXyEW3tpamZYpTatqwruPqG76h8sfY4TjmtWr3ELNH1tbVDZoXFE2eAjG6r",
  "key1": "4PnpPWr2WGVQSJ8HaVKW7uJTYA6jsNBtvZEMbNa58uB7tK8Wm8YyW9oUEJ4aWjG6TWw3tm7MrtjDg4eVttjfSsDi",
  "key2": "4Ck74h9uQU3WXbZAQUbjmEUNFW4KLNMiCAoES3RUaudP9zLuo4daFT37SU2nvL3aoBeym82ULiUh2SpBg4jfX3bH",
  "key3": "dY9C27qFnpReQJ5jTKF25o4biPbFZ87JHsH3MmSEt1yFVCaqqeXyHo5XvbxCdyRbPWxfkBDnNXszfnfc9kGd3FY",
  "key4": "3i5RqFpDwKmp4TfryvgAbRNacunPxvRHifhYPBeB2gYs74Vo4eLxaMJ4XCLrwUEVn8biCsB85Jg9E8ncwoMy4ssP",
  "key5": "5QnJsH4W4JR8pdrXQMy36RdBKiqP4UrgVyJUfmc9anBJokLgvAyo21qDpHurdHm3PAeagsSe9gPiAHrPDAhV3uq3",
  "key6": "2xso9hnx1dZBmuG5VkcZmwM65guSbDibnrLbGbNozMYgHDfiHbS9CUoxcW4ewWFdKfmkCfLDK6cCRQq1zWN9wVQn",
  "key7": "4eraBaMjFJvhXpe1XXBPeBiUqCRVFoFkFvWmn9yPKCjdPG3ik3t8TLH7ckEQASAYFQBfsQsaKBKcEvVsUadtQFML",
  "key8": "3Fm1TNw68tN217Ho7kEuVZbqmM4yLb7Azu1gN16zA3azS6GfA1s4wW52CKBjaUJNbdKaMRNVUpVDAbx7nye3ZiJ",
  "key9": "2vHJMpgFHThr9uWQ1e8hnaXZxVE6BRprGivGhF2yTxZKvm8w9h8pukHpnkVVcuRghoGyqvZgr6X6ND2Tcg1LApxd",
  "key10": "3ywkFC5VSDz84FwqkdvDJN5peVdBKoV4gjgcHEZFWcJ8aLhQu9fURM33CHJrekxNiXQiUQvEeB8RprGbktM3GC4e",
  "key11": "47999Y1r27EdsmnAS7jTzaQ5dVwHDF2r8m3fVRFQJFTtVe8imsFFTf18wFhVPHF2ytmx5evvhU1xHXveXo68TTYN",
  "key12": "25Hx5a38zKrLndxA7W3i8YCzMN1TDiMMUK8xj7C9jxdMQs13oqLRG4SZCxEKj8QGyWvj3hXU6zr4pidfnbcAbAYV",
  "key13": "3mhihEZvoegCYPLfZo1tjvsPuoYPYJVbh8ZWJ5waciKVqXxYdwQMvZyKxL9tsFz7BMWYdZfvySjWmnV2PFoL29bF",
  "key14": "5KCuM9XjKZQqXNSPQ37mqvbLQpQXqFbHXtsQjkKp9E9op4TzuibBVWbjztDNviVjFsDvWRxqW7NWJMHprw6KFr6w",
  "key15": "3GRTP55V619zNtFoYQsx6NdV9LmQk1Zb7J1utkATK9JaNFeYy6QV29TJFnoyYE15zgwkGBBkxMLZ8dWXPzaTSvsv",
  "key16": "2TZWtBCfKtictP1FBbWhFEtXk9X1dN9gdtRwizfgjpuyCXaBKWTdUFFxdhPxmSFE1S7HGm4x4W9VFrp1PjwC6b2m",
  "key17": "EpBTByVscJFhVM4eUodisQiqKVi1DdY7PKKGaurE5JvNjyRVUXrYsnkutzXC2SQDjeEdeCznXhF5kQ17LMUZvzK",
  "key18": "xpBUxe4WrTEji5dFjvVYAU7r7NseieMpiRCH6n5DPAvgsTjeDaU3QvmfeaH1vGTHcm4TdeBDp8ZyV8ASVdtUqYP",
  "key19": "5FRQRfTi7NzYWUqA3on2nx9HTdmMacqCcRteVn8bUVcwJKHvriWZcY4UJdhHdYJj7vc4fjHdQR71LQyvVETcZdPV",
  "key20": "4sHbNZb2VxKu12QbhUpFX8SeVHP5pgqeMsPaMnavofbUj42BNVHaUganAkpsuudeCuuh8Xy7Wa8wm3Zn58e6eeZk",
  "key21": "3XEG8c7WupdbWN9vbu5s3N3u1RVez6cJbAEusYSraUEFzkmpyF1ZWvs3VNEkjnAxkCoPNVkpTDNAUjuDi3D1Gty8",
  "key22": "4NCcqXjhz6pE8DXKcgzkP9uCQfgRkpjs4ABXWELeTVni1Qo95rPdZvDqrsY5Y31xmJJmNLjov8ZEU4ESwFXcV4fK",
  "key23": "3LStb9EsXbbfnxUwxYiBdwxrgL6rvFqRmuZEFnGD3qG7QLy5DffGxNedsyxkCdJFoE3Y7eB7zseJSfMAX73d3Xvy",
  "key24": "3dBipiKsADHc8p4i1rgyHU4ZWoFdemJTXKaJLURFjTQySsktPyz3H59eTjAuXE6v9qDtLEpoNsjgcsVrHey2KuYc",
  "key25": "4vp85MQvQaSdZwqeSaZCEDDHmUBeTZya1SsviD6PRWW9FZp6KkFJJtsxNUxf9z44bpnFfAfFDfG9rzrwSQTUEfnN",
  "key26": "4SQSvxi949p7D3Yx3grNyvYvHL2Axxik4yk6BK4Cb4YYmMgXQEz6tCLnAC4BD8nF3oNLBEQ6uBQRz6wpMNLLJX2o",
  "key27": "3phFBVFffWrBojfjb1GtsaVKdemauzSmD59JgUv9Fq2ZkWrDSni637VhZ5cNrcY4vXhY9tskk4qaFfWDYXUhAT82",
  "key28": "3n3C8ETJcoq5LxM1jvp9157MB3Vw6BqP5ixWdHkyQoLFicqk3Mn69CoTfR9VPvaMmvkEYVTAenPK6XjsgpUwiPL1",
  "key29": "5KrBGGxzCUzhhhAbkiMD2jpkVPACHVTfyKCdWN8sWozSdPhvQS1q7vhKqip7HDKsqaVpKQQN1Hccwe8AS1YHW6KT",
  "key30": "5XDEzAjNjrQPdagvTMJ2vUn6y6WqX79G8bijWfoYCRhysMxKNrpksRPTYvxQHUNjyMTEkozqAeFdsEjJByc5PBpG",
  "key31": "7fogNmtZkckgmKVsdMMMwegYxMwU6ewp3H28JduSgbzvbwNoL5bZcq4wXTodve8DkAps1jacLqQ3HtcjfRoQyjS",
  "key32": "5ZyPRVoQYoSwTrZTZ45e4Hcntix1wdB98MMe2mojMtrPXQLgFgXjqdHPnRumzQ2tnmeK1b6E3AFWCtgR8hYvuRjM",
  "key33": "2kx1u5prQ3wHXBTqeQb7V8N3wJMVUsrNKGfSUzZ9VpZMqJLhbgdbLNCSRX3rDcxFDqRqG6o4KK7mS43x8UkUuuEh",
  "key34": "43XfNTnKVf8QNHQuthjQvhhJrc14wWd7uHjp2kjAaYsjUZuY2HuHSNkpiFK1SMfGNYrJN7FAfbTevzB8ttPgSVb9",
  "key35": "5HLZur8uMtXeWeRCGjPiVUPVF5A67X3K61LCGd9oPPkTAppR9zvqvtZw2VqMpKgC6kHwxQ4hjTWrynZdt2myeAYR",
  "key36": "4ta7Kzh5zS3aANhfZdBXxtrUpw1PAvftpaWy5FZ96Xcph7CdoWiQ7xvn6KiueemLDHRwsjKvnXATnffGtyxwS5Xy",
  "key37": "4JDUucQiKjNxEqDMx4qFVu6yxa1xJB5YuoEp8g4CndWJHHBii8sjF4eib7xg73CwUTK5UgHZPDPXkCvnQyJ82kC2",
  "key38": "5oXpFxw5StCUak8gcGHiCWa7f1MviEDaA1wadrjqTER628QWkPhWoV4s6pfgaEBKJHUpFzxgLLbcCF3dcBHkx7pP",
  "key39": "2bDBJCGd74TvP9MAdWtgSN9SWFQDEgGfvkN8N1fi7L4GoxJoxUAS8Yi5tdyeKQ5hZE1SikzdinQUBPJPp8t9ma6L",
  "key40": "4WV58sjfWbEUqnYTuve8yETp9ncUroXyx6eEUnW72as4T1m2KzWRvwnPKBUtKDG5NdEkamvw473cgQMNVYqqwnBJ",
  "key41": "3rhE1hxBzL5pQq7gzwUmosYk1h4obDKYWMf3Po68aUM5yhmydiG6VXg8XWzRXJ4Er3sHDhZfJZAro7WS6oTuewQc",
  "key42": "iWNjZNZrDfSGgshrWNzmiXxH7ucspeX6dG2ARivVdaFjbzpxbVs2SPBvH42D3ZJEwoP8BUUnwVK66Ds63QVMWg8",
  "key43": "4VHborSuxPTDyAwCBzKsbuaQuRXDhBpQQhva5WPSkn4beioRZoLuKemuBz7p1z2h8hmi3Z2wuRoHArCdjhuK5nfQ"
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
