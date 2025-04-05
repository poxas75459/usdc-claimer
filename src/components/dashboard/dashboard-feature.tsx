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
    "2GQNi6UH6EooPZFm5zK4j5QS4pkRW1ECnBFzfcuhEc2JZ8RSYVpYAXBrjCa9XtgmGvnrX75TFrzB8fxAT5kbDi7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7UxZdH4tqQcKcXqZooo7V5Sdt4T6K8YqUmataG4QLmLAfvk3F5rSDcxoVEa6U4hTxi4su5GXaqujKh4Terazbd",
  "key1": "27c1rtcMyoFYjSKSAaV1Z5Nuaj9rKDpeJjByFKFNTRKbbkaiUatp4dXPUqcuH9DZ86HKLPKtvqCwDBodMe6CHCD2",
  "key2": "4cRqUJn2NbnRFGw7EfbdExQ5m9PhBtk64rj1AguX5VBGgFYsfMwNZiYEVg45RQEXnxwcrWdyfvXfnCeHHrG8Kq8F",
  "key3": "4Hy4uWC79XucBEeAwxUmsFSNueiB1gpff6KnVtf19PoTNbeoEKgVTbBq9MG2SNqQwWBEMxVTzkPeScXRXiEv6VhB",
  "key4": "5diJvyiWD9mnRwf16bDzWz46EVACD1tX4xy6h5LySgWhJrWWk4bQ3agoKF2P5QnRDgTramuwFJDzPUrCXfmsk3TN",
  "key5": "3mfKJfeWhZthNxb2MYXHyCe7U3rLuyFqc9r8WemxXUgoVGpVkDrEPphbhTq8ZM1ya1S8RsGGc58fDLdbXLcQXM56",
  "key6": "2Vu6NCcR9x66ZkxRxhZo7ZQYh1iWrgYbTYqN6Ze7znxuwqNyZmUBDkW1CMvLkLKhK43zawJwAJd9UQUM8LtYuKjS",
  "key7": "3mCd8Joo13ns87uxMPkoz39UiB1wvm8a3wPdEFc5a4MyjWb1XSVUZ4sBb3Wew5T6puLBh2o6c6xnswsmsDCejQB9",
  "key8": "2kmHmrDM8ateYc4xUSsWiLtsMkgUZeVgwvPMfqZSFX13jcbKmzyXqPjnEWpR1LtBuZ9JQSTZCL1N7MWgmKgqsKoq",
  "key9": "4a3PWpjbuobmQ4Tc89RdBWmqZZHvVwERMrJdUszoCAga8aXcVHrKbgjVR7Xayf8m1XY27JCcEJxtbY7fPCAxk1Sm",
  "key10": "2f374miJGAEbXxFmGf9bY1pBBmuo7vYmztY3yzodXyf4wr7s1Hk1tFeqaTK18wbp5u7LdteF9aYnaF98UgeNkHqC",
  "key11": "4foNWNfYW8TfgFt4oF2EEGBcs36Th8sGUSRJZHPbQKVKDGAFwenDDgdpeLfzzs3x7YhkDn1tVHP7GHndzACXnv3z",
  "key12": "3i5THigxSjuyLHm1JvsWUoSaZjhwTR3t2K7Z4YHBFNUq56sTVdYNC87MRq6uLYKwXaiuMiHe4PKsJfFHdJCR3TZD",
  "key13": "5gVJFniAyFHxwVULcsu81wPgzgWgwHYCvjr39J3cQWXHoeVVtaQpqsoZxzjPp91UZJmydj3QhdWi3ghpZ5dMgTfr",
  "key14": "2hLcTzLzq2CgWmvWAqrVx7c5qvhP1xDH2LaauRtcQzK2YfDujW5EDB1pTEu6RSwnz58eTJUAEBDpC8ajSvFCCLBJ",
  "key15": "REntnwZ1HYj4kujj3gcMyh4WCrBUakRL2SjoUyuQZAqCHghEDXMauSJDnWpynV4rdbx2FyiQnh7dv4GViaL3NMi",
  "key16": "2d4xdDbGefN1z8FHQuQLVHzPvZSFAyJN4m73wSPqLADex1ox1iLVbtDUWYmrJMXT6VC3Ek4pWeEJxCfLBu7gtEYA",
  "key17": "g3sMVp9M9upaHeHJoomLmDV71LbSs1EUqsnB3NSmtN7bnE4nyfDT2uzt4SFfF13XV9VmQnHKADXDxpu7Ze459rW",
  "key18": "65hN9vStJbgAjfdfG9v6o2TZUHucStQMY9kLuEMFqvK3nhy7zDvNzLVFprHcBmHeCMpskkRoxm586zRpADAGZjas",
  "key19": "3XDgT3PFJLfQsRTCSTPAenttXBjrnXDqwdQTVowGES1CpBqX9X9ci5EkvD4sCf1Z16L3WsY26MHm3zLU1mZRCcad",
  "key20": "2CyKGrZPcF3RJbgM1zKzMF2wPuVhsogXY1CM96djDckpYdHSZG9fuuLCPnuke59sJ5YU9NU7HF2qcRY2Ssa9EBa2",
  "key21": "5tEBvdyr2o6uLR9gNpeRzeNkTp1vmMpUezk25h1vc2KWrk8CFT4iYSDxY6AEKPxFkq6L4HaH3NxovyDzzYAcaf9z",
  "key22": "yHJPKvCZVoQ8imsaMBsS5zihuAdcSLDae9cGfyhyUF2VhRzpXyC4pNin595ApDZQJssr7qCp4WtqZbYfDGkt8gG",
  "key23": "128MmUuDxyomxGfN2eLADuaKYWy32ytPZ1khp2bmGrS84rhDEn8BiSMvpRv6zRAmYZNn6kjRZQAUxn2kTJ8PqscF",
  "key24": "3n4wsPdW8Rsa3cT8saw4syQDd88RFhXhhT5y6StnD32BiYmpKd1kQBcVLrhaPbWq66begd7SfBVrAEb6PvoEKZNF",
  "key25": "5LLM8Zi9UWyQe2mC8U3mUvV9Kmk2At7LvXDYNGCHj7WrkLmFHXEdQJGK8QmgNQc6nYjCV13uq7tEgqaGQnQVaRrS",
  "key26": "42hFGwfKVe3tAw24BTL9P5XJn2Fn1N3VoxFkmrB3bpWz9oZWeopV9bQ7GqqVGb4sYnuH35ZYbnB7TykC6QiAqtk2",
  "key27": "i1RwTi3wCsvmJ9DnbhyKbgVuhwFaHTu3KpFmcgCD3uLaeeyTX6Ftqhyyg8UJPbwQtQ3BNMLChwecfJ6zvx1PEvj",
  "key28": "32hfze4J2qy3TAzNM99ppYU1c42EqYxAS3yLNnbcvDrwtxGQRraG3cCXMtgST8f2PepU3SPFU3vrCrZCLN4Tbd7v",
  "key29": "42Sj3vz44jBdfwQ6P49aVwzNUD3D2sxueqUqeQfRkziWJfzfA2enXJ8YcUtLW2SHnuK9zT6HRszaKFaxBpXe8LWY",
  "key30": "2gvW76HQhEPB9ARjAYRCmzvruAkwQd5ub1ZjepMFAZNyHKw7gixWkebB8LBgffXLiqyryCyjpmrMDCidugfxiZdB",
  "key31": "49CAt2KgAi1pyDFNoKvB61NgAwLHppEbrG4oiw3bMiDSodtBSfcRMHy2RbcmVKqNUX7RMrkMy5BMS7fc7HSZQAwG",
  "key32": "5gTrMfV6MDUqgwExc3Ab8VN1Qw4FGGGtPNJxAXECnEqN75hsGfAAhkpM2RMpuUGQKQZq1fDukW3PW8cyfJdreRMh",
  "key33": "5AJjs9SQ9wANFDVdWg62EHiYDFz1mpDD2TB3kb1HepqgMjTpoQNCZrk34am9NT6DjCZVzoUzyQrv7bRtD1Tf5kT5",
  "key34": "NM3BQ7CTdbMGM26MZr2tuhjH4mQqY6BWtM1tUQLm1fEK2dy2sr43c9JS7zx4x8dia3JMsGNFy1XZTKdUYe2fizs",
  "key35": "5h59TJAgmYYPmdDX53VCqQrqDVjRkCkDkPVvD518bi6TpGXqXVZoD6wq5iC5v8YPLny2T7w5VrjoAGsZFDcoS9Td",
  "key36": "5UgLnVGi7A4By6zHFYV3dfKpnjeKkQoe1PSFYrExXrNc8QG3sLT3WEiGtjfYPmgNLTgGbccdP4dLJsKGEKysWvtz",
  "key37": "3gpggAT7DiZrWBFvCBnpoVCK87XCrqVKXE4WZiRs1Eo9NSXwCanp58yTojBcPYJPe1v2CZRVoEfpXaEkbpLRFjKd",
  "key38": "4gr3GKAMPqduCoK98aQvLGVJi5kac41TsmDBH5VRu8PP77r4u2HRokXMCSUmBipajNH47kFnQ3ETgoYZdNfXcPXG",
  "key39": "43Lr61GCxJRSoJC9iobsxS2v5fLJvs8wKmVSbfRuc1M5GeH2TxvR4UPWEbJcNWknFXh5WGQg33D8VPf1xoirwSfT",
  "key40": "2Dp6zB5ofB9BZnbopmbrMNeFHprc2zr1kpqLGaD9nTrxVsFkb7APDsR9UiURBxo5QSZS4CBh6vqxYPJp3xaYZJ1b",
  "key41": "3xnAvNyGjBcS85y5yvWMnexe88s7XvStFYcBTtKsBeTuB2rWzkgB7pwogkXNAcdqe45bRasb7jiqyZbMEjk5HcyG",
  "key42": "4HDiYXYPtgtw8TJBYgTcziswfkaKaAU7ZRVqnJ8YVVyrcu9fAfxCwofB4riDy9HKRudrcxozGeCFogEXvnK5BU8D",
  "key43": "3i9pVWGiNqvmHssvm4TaCfVeh687TatSDR96Lr4aY9y8Ldg6Ji6FxGyUTtQVc6uMWr3SLvd4RHAKwtAi93WCnFXJ",
  "key44": "585reWm6iT7uTr76UY1L9Gyjj41iaivVU7ETZn2sG6xSHp7c3UJgEAABbCDjk2hUow1uu2inrmRMg2DX2sQ7oqEo",
  "key45": "pvuxjpgGXfSwvoR4CNGonaobm7vEEhqdJAyo8HLfN7afYHuf8vvwdrFe3pMB3snvqEjmbDc6KUZA7TpWUREf3Cb",
  "key46": "53fWGTDp185E3kK9ZPKrzzcQnuoyhPTQ1LHmFszMBrf3UBP6giNQ9QzGZPxo2Cd2zFe6GSM1zGG9g3VEwCBWQ7nE",
  "key47": "2EoogwxCF9vRac9NNjAGgoE5SpJ1P6FkmBqyBZgMJCErSgv1EXabKbde1tHk7PWikkAyiDRt771fRGQXqzQzU1Wz"
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
