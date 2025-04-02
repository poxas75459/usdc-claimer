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
    "3LnFtBDWivjPy4cDQezLLKveaocGpipi9Ch2j7YMMw8YTVSfCrrFmbr6qBPBA6jKzaKGmTbmHkWcduGKdiamWfjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAPMJgm8QLysSGmHUpDRFE9veATgzLgN661sLhwUwjmKt6pijWCovVxjeNCWP8q3J1dDz7J1vmKvisc2RTj124h",
  "key1": "2UBtX8A88kqfnb1HHufboNsqnTsB3Pz6yMu8fz8cy8E2DoEfYycqQKCKFed6LaY4knbUUcwKsJqfSN5B9rwqURC8",
  "key2": "2UB6aUeij2ZNK3z2vrV3yZb4dgFChsrEYRkovNJ2SjW5mJoMnkvfFZnUzu3JtwsKVvezhUHCi3XELYxbJxcJ4XFo",
  "key3": "3F9DLgrkRSH8wHnq6EqSBN3AE97aEYu8UBMrpGrGHG1hvbf9LfsLSLNdXqJQaWdvXUMj7Sa3oANXDL8145wzYMAR",
  "key4": "YcqpmkWhykNMsNP43ZH5vqeZnHZVYj7U2hXUYgGG9gBCPcNULpZ12MpWWra9HUCg56DrxPztawA4uiYRw7MWibR",
  "key5": "4jE1RqUHMAgYzeLKCNgkAXkyAPRihTVwxpm9dSuBHV9guhBvkBjt3t93iEjcu99Cbs8eHqberjbgBR4BuB7xgH5A",
  "key6": "5Ur5k1tJ1iUPzHZfBSmXtiV7UdAE4EUBCFDyZdErJAoy5yGVKksV1UD1rWPZojgxBxXDZZt9y98EvpmPFybXfdvi",
  "key7": "BQE1MJKZHkjkuCPH32ymsceGzPBJfaAZLmzUB4pkgLhxh7y5uWiHr85GFEPmYzmDPx4ntH97HiuRMXvP5ehtiXb",
  "key8": "3nctQ4BEd8pwMES8mLgayX1FtF9E6ghyHy7msPqKJPqhRfkuwse5SzLQ4fFPijvpRVSX4cRyg2WZge4Qf6SKN498",
  "key9": "3d5Ue3CaBKLGU6tC8HAjRjUagic4KWT1Yn5hb56FfThNHWgTvyBMtJ8emt5t95h9QTeYbGD85zc7hzZgmrCpWGKa",
  "key10": "2cma3CtUUpCkNv4dCwcyJP191bfFrHoZR6ZDB24UdVhgUgekjMMpG1FPDKBvnBjpSFKPRwiFziKNG7KeRFPcFArx",
  "key11": "3mPZgZaUCyBnK5K4dEikStj1j7UMC3kZMhCaHWaZdoDESEMrUc4fZju5A5Rfw4xVdjiKxWGur74tmZ72AFsZMogL",
  "key12": "3xMLpSJaRw29KhiuHRquh91Smte2ToQGmxg1WFwRaUKmWQZBbnL8s5iAeTNL3KnL7K7XgXuRAJXS1Z1CCSfThyiJ",
  "key13": "3vV6rjGbF6F95ZLMAbgvQNPJeC59bAgzuhbrNJvigqThL6GxKVfhytWsJL9weK9CVCMW8PFNCYzbygxk9PfhRD74",
  "key14": "5JXuSvmMZH4aYWvh56wgEQut17iiCrgPpgVYgMxDMEjz3KBsSbY779nFNn78vKu7dAAfD9j8UQyr6p1wEX8QGjDn",
  "key15": "BR5qVEXkQ4uyZukxSa4HaoGWkouWD5ubGFhPcyyRkWUMx3EtWSmLYLdWng7Dv6BLk19wygBUuCCNgoqE24DMWzd",
  "key16": "5QLrEG8uvxgVMbcMuPjGT9Seondf1KrC9UZWjVFuSNH3eRgw8EQaCSxNHrsaHEpQXc1myoMGmsRTd5NEQg3eUTg3",
  "key17": "3etGc5vn4RK1ZtizH1ebiQ2VFrLhEU31M8MFBMfrR435omNzzymgFvJRABgMKdPTzxhtbTncbBMyPHZX3WCCMAdz",
  "key18": "Fc6zwVKfpUwa7vXyiQuts4HwH1BdxPmGasVgJueoiqq19Bhk2JZaHHWcVqeVANRa7mLprNSGrsFtmEEgp7zjr2F",
  "key19": "33FiiuFobwhnY6esK5QSNLEvrhUoGiFqTgXXXGam42fCV7r7j8wYPwXnjjmbjvM1tGsZn1uv6y3MJ2d7D8kSiWaJ",
  "key20": "fmkQj8LQjT2D1v6RLFh8hKYpkKHZ1iVzhfKiZt4vqktc7zXHdWgPEptCrNdXi8cVPrRBMTVWhbHgXVggXDTVSqK",
  "key21": "3TeE1JPPTLbjCzMxe2f2eJwmFfekJDRvS7cKfyT9EBAd4Q53U5TxhtsQaGa9TCfcYTXbWNtRt56zUZZiTzK4542f",
  "key22": "3qRA4FedYFRSXXU1GF2d4E9x5E45P4M1c43QCA4ZMDh39ZF7jNAdK5YmnKnrsXyPY8TyZXSQjTU2TdYifYn5iDY8",
  "key23": "4YgLEZdnP1u6ytPi5AX17ZS9ZH6R3wJepGeeA6BZ6QeRkQEECuJgpFksmHAtSHc4B6sarqyz4fzMML1iS4j7Lm5C",
  "key24": "4fA7TjoUpQemjzELsocHRMxksknN3E3caZcyxMS5dW8N5Am2FBAnfUsFCA857KAFZ1ubnxU8q3mq8cuZPc8Pzusu",
  "key25": "2uJNYAW1fEEWfFU1RyNmsDFGZLbuMY2PY2zVDRcZg3KDmmeGX9xDEtNUJLwdo2aUbVeh3LiHNUNZM8fbKf3iTbvn",
  "key26": "49xNq7wAr2bRDAadngqhJWPtBGPtFDvehvw4mTs4WDhuEZ8JGNxmp55CpdC4YHKxJwJRdhjUif8Zr7shBrqSoFWK",
  "key27": "2pEBdMqeddxP4SLdK5RTt2L7FoSnskDZMMpzGhzSAbBZ9kThbUggd7fxqnqX6G4KwSnZgqGgsShpGyoEo3GSA6da",
  "key28": "5iheKeL7TzVor4s2USZUjaX3PnnHv1XEPEqJmh1PP5kdG9CaVzoSMov8bdmXUGZPPxhEfz7A5Y1TB9e8VSFYTVkW",
  "key29": "4D2yN9gixuUmMkGWVj9EUB35gVr3MmJGQ43zfovK632wpaciX2NkozBeqCJvXzfp7ggqffNsuR4SxBd4YaTAnyZb",
  "key30": "Wa9YgFZVSg76nMxwCu6jTWRGgPFo5wdkeqLiaVV5VqKE77TJJYevgD1Vm3nDuTQCTy6sKvUNMAS77vVRBorXTXe",
  "key31": "38auMByrY8mBtXCmatWsmrGCWaLPcsgokMYjwJT2v9cbayJvG6FY8KDwfPNWDpdLhDF7dBLafQVDisCHHHec5on3",
  "key32": "em4QjfckLUq5Jvhxa1pjL5SW7MLr3DEqkZCGxtHtTwpm6PxodRBqy7JRWQZEDBUEkyRYh2sbv8WE3dJpy6VHJAZ",
  "key33": "3roT3PdJkSoLMpvtJrjoUoXc1n2jHbn5sBAW1P8m2rYn9qdFo8hZnW2Q67mb3xRYKE2km26qSsvNvyt4gTj3Wngy",
  "key34": "3NhxPEMcPBS2UiaiGJxLTVaEh2Fw9KLVbFyycdLFZbcM8G1yNuvFjJBTUNFPEsyapjiARkSbeZ66f3XghRDcR8d1",
  "key35": "4ncB5i2yXXSmyq4FWGBFTjsWeRcs6HRDy6ctqAtcA26QgGTDWN7C9H1cqm5NbZNjaVHbqw3kW1u8gKEsyiY1dKQF",
  "key36": "2TM3gGpb8bu2VwUGkfQKnpSsfxvmcHhYd9WAyZ6E8a1vmPApSD7ZaLYXDZSeZYKzWzkB1rVKazhgkZyqNsxWUkYb",
  "key37": "4c7pzzNrrV8eX2QczBKiUGcxvMQNkupFhrQ2Jws3sN3YVNwgBm7ovXZFBGSaB1ZkMpPSovjNKB4dxXS75aA2Dm6P",
  "key38": "5J9tGJeiKUYAbL6A8iMyJVpEGH6KnSYcyvnYfjpNeuaFm6TjwL57AFGZCmNUdPXP58qKGthAnkMbiLzZ6qGkjJUo",
  "key39": "2d9nMK1cAM4FS7FzcFPsNM7JnXqX3FYSrYxjfUp2VRTRkPiBWTmXpdxVxqvyg57SVE1YAe6gjSf2auVqJtMrQB66",
  "key40": "59qhWWSAQjDtLFCcsN4XtKgWRn9FWuDNdeQbJEbBN1W5MRukYqbQCwwsRx9uMeuyfDMedwCtNo2bouvuMivYAsXk",
  "key41": "2FKT9Co3jQNLXPsTu7hA7HQxT5kEorggV93WJjd63bYunCDX7RuPAnBDWBP1AYHZyMWsALu9unPAAxQPs7vqeBfc",
  "key42": "4z4JrJmJxxDfYMs7EWGPpJnHZhqDK9SBJq7wZnUgh66LV8qfDp8jZDbfFrmdNXta91reAM67wfc4SwbjXLyiVP9p",
  "key43": "31JbC2qMZJQU5A2QrSiWQm96Qf23EF1spDkP231d2dCXq6wmZQ8SPq27pCaridHQMdtNW7WWeYcwXRKAm7CMwTwn",
  "key44": "pBn9tVeTmBhyobtfZZRcjYNs7Amjc6QFypa7x7JLf3acCL7PycShmpea52YDKqnwVSAjCa4x1MYsin3f65EL69Z"
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
