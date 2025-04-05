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
    "4K4ENsXzyR7MWYX6UeBAJrNNufzSusCbaGTKpAZkgHjyRynzd3VZ5hEN8W2znE8pejtfLcoVCvQes8ssN7pfhzTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6FSxS69C4z4D6xbciLLRTsBe3BDNK1mdTcgCu5BpuekCu2WgMeQ9aAp85pJBjyrcBBkjN5uHXsp3kXGMvFr5JK",
  "key1": "5Po7tSKkK7cAZMAMrYdtX94BpVUa8spy9EfdK7epSoaMAmxqAT5KJq3UkAUWVi2j25FFMAn7paQxwDLems4gGKCM",
  "key2": "2CYkGWHf6EbjDUr2dMp5jAhxXfnDArJi6BvX38BKNT1rcpdMqpzJJztJNRUHbY4tYXZD4AWHko9Pi4F2p5RptrDZ",
  "key3": "4fJP4HThtnYZe19WpYmz2vRtsFRZ59xugbvDKwegwNMN7qn46eZEJGveNaWvkLbNuQVxHDmFNSYtDbMQUZteaDyQ",
  "key4": "4c72f1Ur9qs7gEtt8UCJE98xJAr6QP89VD3RRWJjyx51aCzP86pKPaEmN3Jq6y3fLPgGBthS2EfwkRTGh4PUBjKg",
  "key5": "ytwu4wkt3yW4NYp3nwRGTYnRAeS5vcXEU9FLPC7M4aooGRUn2j87qR28KZxn3rJmu8pVcfKM9zLgWVvEjjsGerF",
  "key6": "2heURZgnqdEQ7HAd266Won8FVTMHjd9mCyfH4YTHKrB4tERSfgYj54u2G3LW2WptHEfJd1fncZvMctZeUpRQLVd2",
  "key7": "5RFB8oFfQsKw9iq25JHCL8CDsxp4bba7xszGkd7buwocpm7JveNKvvW5JFijqp7uNSeVffjTAM4Z8ou9Xidsxv7Y",
  "key8": "598MKJeM5rtPG8t4kggSm8tRu4KqAYQarX6G4L1t9a9uge4P5rQUzZrfEiQtgnpdtnjcqBcfteLM3CphjjrJmgt1",
  "key9": "h2oHuQN3upcjnKtNiCApqeNu6JJWCuwJyPCtt1PtXNXbz2aKnSpJ8wN2PHre38MPwNU7aC97EaSfBx6RxLAoskb",
  "key10": "4cBKowa9Na8huXKy12YvxempBS9wtwxwtBzqsKxcegAkNdbVEmWaY7Vya7bwn5VycGWg8AAXg6c15z1twRwaEZiE",
  "key11": "2rpin41RZRvMkNthrY7LyAHjqM8txEZ4fyM2ZBfUqoaNwbfyXV3n4GEFwCuxuhv5AEh61hFGhfzPpBZ7MeZ8Wrga",
  "key12": "515ooTDHvRYav8ZkGcsqYfgcCduK8avqyLTBC4hWCktA7bgh3ZGC3qxZtMzK7rJgm1SoXSebU3J4mijWyrdMmSYr",
  "key13": "3dN6uQawPp8u6LVsjfn43h5R9F9hVhmV6YiyieiL7MtHCBWExcNxRGF5nYaAkvvSkdC7QphsyfigYFL9wYXLkchg",
  "key14": "QaxJWGPT1SEKqrT6AeTCZJ9z8fADAt6bffkUPx15cS3PScWr1ngtwQTv5qigvHaDiTiiVyqs4NzduGe273MrC2D",
  "key15": "3uMxMJvN9HU3zGuCCd7WNvRihbRUheiENzJg1BbmcZ1xJhGF6ZLNTsi4EK5Cnnaj3W6X6mQMCKgT38ALzfgSuKrH",
  "key16": "2MHxeNUw48rjqhuKkr2xtNrhWc5WzeCSCFcRbJiBNb9GPNXSkQroG1gq5giF1ftKPrrS9RnKvXRwsdQ3sshTFE4K",
  "key17": "5zCYoRoKjQ2NtBfKe6pVESBMHHEMcn6vUrKWibRr7xZpGw4K1GXuFt1Ykq7XDVeL8tF7QVUso4uM8ZkC5kksrqVS",
  "key18": "4thWyJ6it9vXNDsBBftp42FQFaFwhWBH44atKQxszSayhvZNyrJ9q23NJoCSy3ubD2dCZPihuvdPFCdBhf3mzr5s",
  "key19": "5gxJBSXkcqKthxHhdeCyssznzuvbEGCP4616R8e9QBPyqqacbEpQh29f4vXK7Jc1fN1LiLAHXPyTQBVrh4bG7iVZ",
  "key20": "2ABfkyW31SE9Y1fSi9D7VdYDyBefPWfzrkpJFExnPRi3mc8UwoDDaLd1sWuaCmpvYQQ7Gg6jGXWx9538QA9rQ4Wk",
  "key21": "657d8Pikoa6x67xSF9q87kpAVjbs6npHz15Ca2Mj6KZgboAiBx2c2tU8k2JikUe1Wwgiy8WQBFfjMRryD8HQiQcD",
  "key22": "PRCP1cZ4UBw289KZeDwuXoW1jHaiNu4FQXRt49dpj8tRhVLLkNUU2dyCeJZrqoBDjX7JZwhLpX276RpxFsEFwCD",
  "key23": "5FCTuDUVhYftiHwtsU1pnVvN5K4Df55ERhvjgTYbe8hTbW78xzZGh9tN8HZTZjv5b6EbeQeD3aqD2tuJFxj3qBJa",
  "key24": "frV9dmF685rX6W77aDDX4bAzKju1L8KqghDzxav8sRT3Jme5NhVjqX547jZxeK3fjUF9d7caPUc48RjjhAgys2n",
  "key25": "3ao7DUVMZxSufSRRM1WngbHtKLuucV6pMnTxSoXMBiXB7jDg16Z4VVbbWwFS1FxkqBKZu6kAS5JKQ9f6zX2r6pjy",
  "key26": "u45tMqosgbCnAtWCEP6ondPWoTcqA8iytk8fS67Zys3DsdL8ftYdFJtg5vYZ5ipHBTBSWJ3ZQ6exymu17Rpq1FE",
  "key27": "339Hkvt2F2EUydUpPLHPADEvjQ736QkU6qeC79TnrSAY3VEG9ZwMXHakUmHVULhnnkZfV5dVZQwfnDTCJW8msRN2",
  "key28": "jZbjdAg5ud56FvuK6bb1zV1RhYhJFkSAPYkYX8sqz2yxMkKgiQE66HUvbC8aU8yvsih25xZC17VddrK9Y2JXvc2",
  "key29": "5mWfnbFNWgTJ1sFD95WVkgPLNDMnAUewv6TrAEPq67J4bQCGdQDYYZwpEeBpbDYfcUeJbjumVp3WeZFYgYyqzoxy",
  "key30": "ScwjLhXNArUQeMw7aZqJGjBR3Z4sKiNGGdRePWvjAezoqbXjoXMT8tmG7VT2adKWyRmnqZFdeg6JCFi1sPktQq3",
  "key31": "411HamX9Q121aZT4mCVctRrwWy5Q2SqY2PTKzXDBAxrTF52Unhw7A7v6Jd2ZXZbY7q2CBUq73ZiZb8mAJRPPK1u9",
  "key32": "2DZncT1qNZEtthkYot3YpvEzonvuAZa5DjuCMGyMGCRtBfTNUePrQ8kFxPswFBZ7ufGPUi7DJEfc7iJehrzBMoH6",
  "key33": "4oJGMwhxgpgU2KmspYQaQGKLTnLFfWBtNKG2gkHrDJmSpBqf73wg3kiBbHjAFXwvr1e1n4VeL4zivZAZUECG2Ra2",
  "key34": "24kDyGFUE5Y3wxQRKpAgChfbmKAVM8qFxpdxudhgYCqxHKuRUBnG3kNL342zQVVkXXgcZmdq2wtQMD3SRmzJfRfV",
  "key35": "2MVRsFYaxmxbasHZsc7VyDyc8FFHHXJbQBeca6CqzHVs8ifxCkqXu82agQNmZEF34UBHq9VhQMQegikSwfZjrZWL",
  "key36": "55W47suj33NgtLehceehJWMuz4MgvTZVqhyNNzbAb2Aso4VtqpPEaRjAmSPRfBxee2J8AEVjGvZ7ieqeNARBYfxr",
  "key37": "363fCRrjMusqzQipSypdjqQ4ZU7ycrwEFrujyvcdFFA2bGaeSzEHhKxSJZ2RDDAj7XM3Vz13zRg1Vv5zqccTZoZB",
  "key38": "wMRPY7iH9GZRNpLVKrTzJeVasNBux5FdE1DQdVMPgTcgbZEjsAXNoAHacT4j2DLMXtGwSVSoAhVbcBFK4wxYsVQ",
  "key39": "2yM3myvupvmnaHm1wE3t1fv6mojcQWhgo4EkV5ryvNZaKBwaqM613xfSCMRyUjmYYfaUGpBaB2jJZTRBpbzjtdd9",
  "key40": "5sScpbmJdiKfpt1Lh8ddKfaDiKMSxfZ23DYQJ4uLhVs4ifQSMrZZEgadRAwQdNuDrWieeRHx2SxWr5cgweBqVv3s",
  "key41": "5dEn6G55cuQ2CM3doHdDfPci3djyiTw7jkJXNnebakKE5gng7FFwh5fpxadaox2TEw5VQMkXGzUAVWsMeKJ6c8Vq",
  "key42": "3NvJpqXV1qFi2EyNPW5wShMJgK37vALXu2KK1a77G8JRN7v32LFLLZQMkTmQbeMD3EJAVAWAWvd4P5qaJybANvsQ",
  "key43": "2oodevsqQqSbcJm6CNUYdfbi6SFAeU9MAEUYjZM1fRD6EefsNdzywn5Wzy8Dpc3JjDBLWSnE1U4SoiMiLsKuSxh",
  "key44": "3ab5USqDsNrdwvvKFSkYwmKJxDXUpWSXxKRH2pMY9cDKNjrcF2SYDYyzK5prM7aDG3djwDpNpP6LNfzpovd4qV2",
  "key45": "5uu5PBGtkSCyhw78wxbnDmPeH2ZLSWLsmBgpWJBp4DCrYBRj5MsfbBXKkFVfnGdqEWSH183yBfDfgTV7q3eb4xwJ"
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
