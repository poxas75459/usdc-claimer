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
    "2uyNTom5n5uZxnURuiqPVMoFvef6CuvrKvv5zCmEcGYwyWfXg35MBSppzw7aNtBzTneNRcHvbfYQMNbLF3SHA98a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqAgxBEJsTdeM2trgmrEZUjw9TP6iegrqQFcgGhGdHECGyAqGQ3r3K2L7bNEXp83ENo6JAGkb85o4uVf3XxmYS5",
  "key1": "3F9Z7778B9grq6eSpgs9pzh422tYniW631gJjPqW9VsUuRTk4V7FzK1HDSMWrUzRDhGBqRbkFtCygHYJ6Hk8k1M3",
  "key2": "4Focbep2NuYhJPNcG4unjqVh7xCeK1FZgdNgCUckwfkkuBD9X6BoDruni65Hr1ZzdbQzPjrxACTpp6EJAsCbFUpv",
  "key3": "5yXh48Fye8nm6i1fSprhwAX38u3Z9VP5nwKkhspngyGFDwMrnqv2oN8Jynb9pRTK8hkgsBLsjUapdm7N4KJuMWPw",
  "key4": "4WX9MAZ71SgQ4U6y1Dz91qtRMGTDstgyEmMYqrPAsWfzC9ix6U5dj1BoqfdVrminACe2SkUohFgzEpasCXDPthvZ",
  "key5": "5YXv6QfN2ABBDoK3fjhPNuMFwRz6v5xsBfmCsccZKjEUrP3oqCc9wMnhWdcUEb6MbTm9JLNQuP1EkkM6uES6ke6v",
  "key6": "5WqdE8RAB1YHPowdcDdcf6zC9A1gZF7rz2Pky33F1yYQJ4Z22vq2vDFKTzTNA1W5QuxDCXRu9H4y6g132Ntiq2zu",
  "key7": "4qwF4ceVwPiwCN6MoJp9QH9VcZU2iJK5wuWQfuACH8R8CaL1GbqkCk3EEXwdxeHDnySK99WGUz3reXofVeWwM4fY",
  "key8": "fgfT2NyxFeXu6ddAwAdHULe5YHQPjynhB4c7Yy2jxR8cFwKhZr3ejpGkWJk52frhdB9qsEMGfgxmmKjt5FKK6YH",
  "key9": "2tddBxig1XJRNkeXCwU6huJbHF4GLzXPotUGUDZFJ4RP4wyCPUYrsnMnj2dPgtZtr2BWjLmQ85ndUDvfGKrHgGag",
  "key10": "4KeWQ8sHECQAbwaGGJd8JcUb8WbT47zt6sWdQpGsPVaaYnMY691TCDCL4HmbiPTff5zfZw4ppQ9Hxz3h5jWB763q",
  "key11": "4mVQoiZSPzFXFbRX1J9dmREbHZwtyfzUFMTD2o4q5W7NcQKf3BP74arPHzMBYPvTpKACfQwFtPKUyjBF5gfdKKuT",
  "key12": "3J8yAFSsiEm2cxvkop9MW4JLBRJKwqCu7NwbDmv8cuUR1nKkPevrZULVDXUM8mB2ujYkh8nSwH8gtrp9W3dZNpKS",
  "key13": "2hKcPjmMHYBqYxEfPFsb2wJLA7QfiR6kicSK1VGJPA1YdEYbK4EVD6UAXBJDDjsquKYCJP7h7apVBZhMwjeTrXrX",
  "key14": "2Pd4KD21ab5aFr52LKpibbtXkrKR3Vy4sfkEyAUvLGNv8R2a53KQ8FKfnpr5PUd843EF1PYh6s6GLq8iDq9tFwN",
  "key15": "3VSd2LzF2cvgia5EjPpeJzhCuZkSChv3mxCWn4p6qnPEi23kPKH4YqDagJGJkMFPYsvZio3Z473APXr5NPVhscyA",
  "key16": "3JZqMRdA55kFT2iiGX6fx6Axq73sRd8Ed1X7fw55S5LAR2qdse9SYkSmwfATkB25dg4eWgnVnLZr3VujptGtqZkY",
  "key17": "3ezFLYFtapxWbk6zFkdPuVWS35cCVxC5YFUSuFNtBiaqKXfC5kCJtTy4WL2Xn2PoXBU87G8yNytdUeNerjKf8F6N",
  "key18": "2WsjYZWA6ioMMyhKjpEAzfTKo6NQ2hFYr6JTBk17hGPbM9mEGZemnsY5umiHb2rTVmbpc1TWEs41de2nD5yUN9ug",
  "key19": "2thcvfYGVDr8HCJVpgZiLUNJE4BfUAeqWn1bqws7FqJ5PTCfEMjDsA91X3A5pchW5fHPJCehWTtCyXcu4pVmRyZ8",
  "key20": "4MGEktgNAtKaXtQ3bohPVfLWAxJgjpng2VUa5zzJ3HsicAHm9gikrkJguoMWzssuMLV5TipzJXn2ENQEwB2NE1uB",
  "key21": "3Kcra3hfezxzcKxBiqWhJHHiiPwBBjZFAeA9JXTbAdNbS2tfCuxApwEEcK99i9QkpYDvmQrMzxzkcjSu8mozweut",
  "key22": "4EjYJKiEhpDawYHthTqX1UjL6dR43Av6QBtrR5Nrj1G97NazxrHCdd366JZRvxemShgPGYjL37wNkqLzKPtz4PLT",
  "key23": "3CgB1otMWLTgAp7LmawNMpwMtaR4ghePvSehfeBTNDdZkuHupmvgHL1938zssvLPvqh3yPTTat4NrXj9vxRtUxUH",
  "key24": "EJm2UwcKHSqjJX98u6uxCPVnvsfmXgowzg7Fogz5oL7fzVdX6sHZ7ZTy8gztqK2mnDDMGsKiQXqE3z4eTLNiPou",
  "key25": "4reyjLPWQbt2RJRraVDdhnQrbeN6YHh8JWs4WSZQLp7yDe777AKWcpkHA8ZwibFaToVdip81SWQsEmRXwMvz1X9S",
  "key26": "2zuzZWHqCMafKtGYRSA6JoNGREaPtgVat9qbrQaniGr2gxf8usHZTdVebt1CjTCFqiDH9SjzfRLnnE6gusM2ob7s",
  "key27": "Nod6x4si6N5Ag5tywTqecyC3irwuc9x4FLTYHdhRD6K6Bn9FCcdiWfYFTzTNvTnvE4hvbXKBDn7Cu9k1CZjhRet",
  "key28": "62EGU3zxPPuoe2EcTbMA55zjSgJwxNZVWGnyz2ZwYBV2CcHf8cPMjueXxYMQgNi52xW2qth4kATB7fdGz71dQSBq",
  "key29": "3iMniZizMWritJYrnmpqRw3eoTkMHfybkBTg5yg5bYMVozW3xWhbhK4hPK1sZ4XJsyE3KK5B1zv4vPdTpKzib8D4",
  "key30": "47SpfzU9YAZ3Z5TpuAKpg7KDtx1DkYEdhdiWzoTeBVifSnmnx5T9NAKf5aBrmKeJGyAfgNQvYgTF4TgVqtmYWGUs",
  "key31": "34rBLMJ1iZQQaASDtrE7sxhWAh7triRx2UGfEqYkQaf497QCKJ6prG5okCj3RRAuPzKoob5dF71KfTfhZRU2s8Wh",
  "key32": "5U1Q2hMXvmytSzEZMyorjHFyEoJbJhS9DbNtk9rtthCBrjyfQ4Sz47TQyzog9wLBBuofAKHHE17oFYBNSHiAH3DN",
  "key33": "42H4Yknwduyy45o4Kvnx38tcKbdxUVMUyNRPe5tLNfhrqkzp7NYp3NST6R8RxqChZsuYzXUiptmkBitH4WdcKAd5",
  "key34": "2hWiMt5Bv2GS78q9fcvvGZGbTGdXwZ1a2zbMKyJ9tQjNF6UEMVKTWGYBLEEaUL1RCR9iucwqRyBiFptHvmWPBM87",
  "key35": "41h8iCnQ6s9VLA6NS9vRkEMKSMAeZwG3mSYTDntv481zG1TQTtcq5NbLVqH2smFG97inNwRnYfG3kkbs8J1Vzoss",
  "key36": "3x3fnUzTDPxtKBdupRNGFMHMoVCPNrH9kRkyJnsoaDLB245kzoemNGjEsUrYkoafDtr6nfDoQnYvduFgeDf9RDK",
  "key37": "3FprYvXNzNQmMxWanmhkXD6pxiSsk1FXMv9qDByTvrN1PHpCVC23rB8HcwAL8FFRJM8awH7Ss5qojrVVzgpYvtoE",
  "key38": "5GAXTEFxZoLv1D9Y9n49uK2oqvfMLV8pzLnNhd5X8ZPypFi4qk7og5Uhf4UWkH97XykfdJWZnpfgxzSHhnmSEBZQ",
  "key39": "UqYKHKLuSBQd3GiNSqkGWwwgaHD5ZyNVVBJyaG5P1Ls3dTDrmRVFUTf1cFoQqU7D4rJv23XbCu7oAJgvTt4Dohc",
  "key40": "24aynvDKUnbDGkmbBFFWax6tJrgxhdaBGCutSenz5iacX258JRsHonFCe5sTxAAcLdhquxqQaGngTarEU7aqLWrp",
  "key41": "4vRiX52HscsiGNczBcwSU2v87tQ7Rjoh9xtkkXm7j8YBdiTeth5Us9oiFW65JkoWyNNWcq7nWTab2dwp7SvqvPtw",
  "key42": "2mcyP2nUzLd1X3LihmjDTcDW7Jd53xHeKrFuDxtXQxZKaAM6rowDMcYSeEm84pkc3CY5hn9ep8fwWU4eUbpNDNrV",
  "key43": "3uSPWGTeXL5Pi7MNUhVME1FHjqKJQ9C6CtSsMtn3fcoCWtFDrM7DJCbiVR7kT69DvqjmQkWwcSGxM2eKhGgK7abg",
  "key44": "fkTdEXBoYgNBZj4aPCPP1DLS2VaoHx7HnhuHBir4xohUwo5PagqH9mfNgf6gSJnopdA7FJuEQzyJgFJcR54Urcg",
  "key45": "61J6pnosVWtFhKdso52YKYweuE8gX45FbQxUcB5TeCmZrsduUn3uVWfHQEzN24XTDoz7SkJ3vgmbirEPeJ9A3X2i",
  "key46": "jTxcTJFUsBQH3S7ev7yvPb8fontijWAzfusr8rCAR62CStPwU9UPpZZQtAxRJwuSRfAZoivCgDBBPGSwrqjeNCF",
  "key47": "5e3utuXaY6z2xqM2gRrAkXuT1cJ4WuY3uG3YFFjgf9oQgt4ptDB93nGnWo1SAy4D2ntCim6Wn9Erkvme8k426jF8",
  "key48": "5aSYjQa3dCwzTWxX7b7p527mP83f4dcwabSJEKYZbUvFuToueVaabQEViK61jBZ981bak71YgyDjDQkeGHnzVtv",
  "key49": "5i3vhrkgyuxZRpiSxMB5Q3XGpxyL9KGoUBFCjbXBiCJwMjrrv7ycLSB5WVx6tFzuFFxS7N8N63HNMSGVRP9Vxpoz"
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
