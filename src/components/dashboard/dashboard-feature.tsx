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
    "3ZNdgp7W9WhJe7TqcSHgFzgLQKBcArvCiD1joDhtADEtzKcqTCJZipfemzpFvfS42jzqv8YzXKvEGue4Yub9kGWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiLgsm9TfT1CfK5SPYQNqe8XEpZHKaAWDfX8L7TZjWxCVEEWN9UfBRNEV1BnHcXHhPKVSA7DjL5NmZ5FGo6H5H3",
  "key1": "4BoGexhtdZvzZugDSkxuKSiiGNcG7QYt4xdLvoEuoj7kuwK9PFbG8dNif2TuMMQdGr6wwHFFNmZLqzzosF1rajF7",
  "key2": "55ZmErPrKNcFzx7t2BtjWFGqhcdRpdjUh1mqpPhCkqJWRaiq5JZMUMye1QztwpxyzmBy9Lfb44dPT4wz1BVKGLyA",
  "key3": "5ejKZqvYGjoMhi5LzJjRKeiRdVDs2Pm3RUVtaNV4nZEci9RLYtY9H3KnNLyvkYnyvx5tctUCZc4e7cTVuGRdaMA2",
  "key4": "4Lbs7L3mzWVh2YKmyKthxhQA7P4WvXWmuvnKTNMm4rF8nUw1VvkbbMCJHbZEEo48J6XeyCuhpx2pd8NCZPHiryNo",
  "key5": "WcJJuAAm5qV6aSDFrDYWG6U1YDXYXqHHUhvqDjF5GSBGTUA2YvgCyEGKmFc78ADoDJp62Nf782dzJX8fhZthiPV",
  "key6": "3aB6CR82vxNgyaKovBAkeZRYeXzyTu2jwLrxYpimGgDGpLqjcnSQBHawrRmTuiBbm7CuJcJtMFnGYiRByjqSJcuz",
  "key7": "2TtQuXU8qGa4hebxK1sCWsfVSSN8t8WpcZ3CRtyA7LrRjZ6TMtYdhwJma7s3SzSW94L1SPh4FwvMaW4WyGzNgU87",
  "key8": "5Aehm4eirySKJz52vnAWbicT6ZwNC5AotKCkCEi7i35mqEaEbXmLHzj3mMLLjVGM5Wb8C5N34UwjSrG5UqdBfJWD",
  "key9": "3kVft357epxYAMzB6w4Jgq4Kwr1sjgJ8Cfpyz5T1ixVxFc3Dz9LEYxM2Cuif7bopUGrmCKvFYeQ2R6t91D4zYjPJ",
  "key10": "BemYtg57GZZ4m1qn4wQjmrHkJBcyb5rewBCjwKsNNxip8tkKnCRxKPUFVKGxWokxNp3Cvz5C1j84xYp9ujsxRF4",
  "key11": "3aF64jtP4Swv9dNoZ396vKGNLzfsgVbd4gJyNe7rviPAGc96jpRPiFNtVnbxFL5tFeFBB55h6iWntxTc9X9kxweX",
  "key12": "3zfLEd9Gure1BUrgDPAjkV6dBKZ6MranaUWMaRRoSJJkRjqSuBovKDC4v3xo8uJWivfJjKgtQuQ2hvjxBig4CGP",
  "key13": "3nF4cSPyd29XKrHQEvgdMSXSoGXeeF6fDhGB1r39uJjxN7wUpVm8XQ1SP1NqdSBnEraKiDMBQ5Gx8g2PjTDQbr5p",
  "key14": "5yxWqVT8M2wjSBLiJJkcV4SR7A7jcFQqmMXWR5qyGB5Cb6QirTbC9ocBqBsa9NBpVb8xSgwz4t19G7qzJJwbRdFC",
  "key15": "TZUyfdPT5mL3SpTr64qipzs1zARsRj9SSvsNkmEzDP38xvMbNtNXKF7VhTJzcgBbjuNaLSH12tSsdTVADDYtqUr",
  "key16": "Bw8hfs65FT4poBwPovvdkrBPtS1iZbXtzkT1KGxP1af2RK9hvXiWVsT9YcZnNbXN8DqyM3BPiKfgt7huHpHscie",
  "key17": "3jCXHPRJUChC6mGHnfdRtbLtQFbyFFo1hKezW1ejtQX3AjHZxY9BTwo1ochgaaHKyVKKLMUfAktsMLyCXAY7eMwu",
  "key18": "5ThLSB7NJPy2A5Z2ZJc4TqrHCwWnbWPvudocakXqq9hXLcECQCWLY1s5qNswxiNn4VKAVkszRPuTT7fxNeQKGKms",
  "key19": "4RPTPmGT8mMH4U16Nou26jM4n2AWMfWWaUkpSvbHpNLzvFYD1rpkUp5xJkN9q8b6RTJrVkoWt7jZXCkJgF69hDks",
  "key20": "413KRVfua6jam1muJkroP382KjQTfjCYCh2Fg6hM561gDAFMobxTPBXoYUiMbPPAU15XNJTm6KFDgRgmpHo66Bmd",
  "key21": "2CJjZwezmibGLUU7URCBFrMThquv7U9CkAxhP1GcpfukQu51C56pEDQMoi73YfxvVGZKDBQfeEbKzZN954vrjrZj",
  "key22": "3gTh2CxoRLAwg3cbzFNAH7dQNT77FswPDHXKkKR7ZiyNEuB2F5CiAF2zCLvTYSqgmQVcAnUMG3FZCCNZwSGBcu76",
  "key23": "3GK7GK1YJVUAFnoc6cmQsXstwdmr8xGyzjY2oaV1S9GHSXd3DT5Mi6kLARshRLkaRCSP5bPVKv1nBCRhhLUr1HU3",
  "key24": "4UWyUKdLfzFjN75Ta56F1fH5yt9ZLoZuwDAG7jt479kZEEC14oQUHR3JJEcEcdBSLB5jTkPuMTR2CiQsDUwPuGva",
  "key25": "2mN6fCc8dZFuxBv6onfEtduoSn6cR5tKxFNtCBi5phoX6WJMcGrySWpPrDHxjFKZjHHnMMtygC3JzAGhVGDY1Ram",
  "key26": "5dWtUD5KQhVA9PpDp35WSWR6MYexh4G3of6fhsB31hYUDP3ryu48gdUbuyBruAXXqGVxKH8YYFncjtcw4K1oPGSr",
  "key27": "5cW65jf6c1L16JzX2i3qAHXzuvrdJPWivV7j4spqMa4r2C4DS6Pry7ivVBP8Mcy9ggYGzBcK79STFtto74xmHnLp",
  "key28": "34ybJ8DHd6CvAwUuah2ykmv4QUooVsMb2CU5XExKxtwWtMaGRtyp4Yq5FZSpF7YkFwYhAqZjKG5LqiRyT2DHQGgq",
  "key29": "4kdc9KhoxEdd6LhnKDmgsMdvV1kCptahvs6yeESUMNXarhJHV1UMka3dejPdFqxX1kZQQpR8DTC3iaixD2gHNx24",
  "key30": "2hgBuB8XmawMN8mww2AkW7dWf43aNW7tmPRv9oNNi3gfsYrPVLj4UkTTsfHwqh3Hn18GUac5SHqGQm6fyN4rvGAf",
  "key31": "3tjbru1xCZPWdE8emb2wiZRqonaYTNTuazAg6dBm9QygTf7J87kBxr51kAE1WK7Ku47zMbktp6j9EPMMBuJaMrfT",
  "key32": "jvZqcEhdDn7gVLYivs4bzHG8puEnhYBsBiXrnHrCuiMCRrLF2GykHoxRKCKFae6Rd9aYed42Ua6yZbERNQWaEMT",
  "key33": "4Y5BC3zmGJHqApFuEnKiFn7QCGq5egDTANYPERxzcAPkSqxCHoeRXLocvxqUAWvXa8qGsbLw1tuSSfY5kHBcVazd",
  "key34": "2XKwvKSHUhzGTALFegiJuuJWyJ4doNza5FGtBKmidPXT8kWfTCfFMqj5m2WYS1FyAsjrALT3tB3UtL4LudRpCHA9",
  "key35": "5SA4chF1nWmA5Z3pqKQh1LsE4a8dtWvSkL7SVMoSF9umJfzWwiZAiEe9H3WKK369wVT943o5qTwQT8HmxWYSEVrJ",
  "key36": "tkjdPuq8KZR8ohF1Nvm8ttPhA2TffEGL2ES5YPhAju3L4PaboZLsKojHmLYAnESxa5zGHDzjUPVDFkNBnk3Wprx",
  "key37": "Hinphn7ZvU5hgnkGpg4v1eiVLrwmGZ1E6p84boeEYYnSrqfWu7v9ZNV4jGDbNMsNBf6VQh2K3natChm4GWe3BUH",
  "key38": "4uR5jmTgBZ3iuJWqdN38EHvNGBpFLEqyikg2Po8EHgoZcsUuZGJV5bnKy4gBV8uL51km7Y5YtyUgTDcgLnQXzsog",
  "key39": "5LE9psVeBrUkPZVbCzMEW1hmRftbAejFBm3BPQdjeMLubRczGUeEdvQYWcsLGmxHPUArSdoqiUX9WjbzmpKsqXAU"
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
