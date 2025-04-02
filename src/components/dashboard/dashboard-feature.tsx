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
    "2w567cExMCNtQgoo1zCMhq5iZrKCdWR8mA61oSSsnqdio58t72tUDAPFYgypFGHppiqGU2ULnV7ZyftWoeXx6Rjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRVv3yiyyibTHadNv1je6y4xNHrftfS6T89snterauHvy7PAd893y8Pzxir4tmoosAMDz3trWmNrUJjzSfmNTLm",
  "key1": "4i6NHuEqB4NxGAJPWr9kTXJMLpaWFWbGLBxdBXkmxLPKxJdXG16YnrzwZdN3JsBnzyTReEvJSB6VWrvptWgLgqD3",
  "key2": "4moiybvHnRy8NRQ5nhQdXYkHc94v6VFjMNWrUUL3rN2Hr5ktDtc28g8uALeThEQsoi4yFa54Q2guykHYkznRwmqp",
  "key3": "2JZygNaXQLtvDN4PCsjwWRUcwJieiRZY5vzD7QvuS6Wb1hn4wQnCc5cpk5LGFkUu2k4aLxDofJmhmFdCDUoaP41C",
  "key4": "63zaCpyNznoivNRBpwNqHeqkTZLZgcu8aMezYyHyANwakuSy9yXU32tejw1fRFjQYzea5RTjR3SfJuiddkSFe4e5",
  "key5": "3uB5QeSoudz4UUuPU7UwrDor9h2GA6KiupXGvVPDh9S1mnFgbBFtdM7cUvcyQppsCTALLM2iQV7BQxVtdpn5irC4",
  "key6": "3sQ6dNFzcgMF4LMakGbrLgVfpHcXnV4Wrd1Gacukj5RiaWKg7Z5VUiVZxbQHvVS1WLBTn7QFyvmrxhkA86EwC853",
  "key7": "3MMxqesk73cAKqoLYpCHerK44hhs42gYnasAVvZxYYFzfkUCd3wP5fEwZYDbKXGETum8Q7qHwjFyRgZYDD6KWPEP",
  "key8": "HQUaxZGuhaMfmGkP36JmJ1e6WHPScNBasjjaxUpXK5na8s9GDoajs3yf9ADZnwpiA5MDHJqSk75AJshLawHvjBg",
  "key9": "3fsGJKmbpmPi8SxadymHE3QVt34eS7T8RL2Ydt2f1yMYcxovmesDYRsJzDczHzDHryUDbFAXbztuqRrHMvoHCCaC",
  "key10": "KYZQ8g4g7Mhgt6PrsSu7wAt9sWf8ioV63ipcs9WHaEvcN3qNRJVefYbV3LJcTjKAXxXfcGz8PTjDQCgLmbpvVVF",
  "key11": "2Xaax842LkaHCFrgKT7LRELxnPXQsEeGQFw4mKdM7JSDFmM7oHw7k7hKUrtXnXxjmThzyV9gtq8AFaUB6H5qcmXT",
  "key12": "67iTy2WjE2H1BGhavR9iaNqb2E6J4esXxiuyS2SZF1JpzyETo8uSZaC4mi3v46Ug6aRoSh2V84L9ofd5hsxrXau3",
  "key13": "27us36dfzwdYL4x3W2gNLBxUksf5Uk6qM4qeujacmBytV5eCWxCcP9KNA4CGF6nRHzDhwSFbQN9Dv3VEU8zghi1c",
  "key14": "344nfXUU3dcZCq8CHwnxhmkJqqbfS2d52J2WvdYhYMMb7ifTKHsvbXkofaayAP9VFz5boAcUPhdQoiY85BGcA5c1",
  "key15": "hSt4gCqWQohdiob5ZZKrUxLSc6gxY4ycuHT1xhyZpzNizX7QFkrfwQGumo9RTr91x1KAu5THJqksvD85jp63sq4",
  "key16": "4ouoZmoBTE3yJDCZ7tpMJ6ifjMcLfJeLoGgMdnPrMebFsFoSQjXM1tZTQWqRNk5HKy8QPy2zALgJb5LHnN286Twg",
  "key17": "5YmJnYC9Mf4rHw9KrBEXeCNTKx3juev8Zt6u7b9tk239ZGSAVToiXU26nbPoRjLabXQdXvEogsEx9N24eiARcXb1",
  "key18": "2mZmrp8uv2ZmFUpT3ErCNnYsgnRez82KjFdzUxHEZ1wLWWfkNoiGeaV9nPvsfXJKtydMFETdAGM7XDP7YoidRXKj",
  "key19": "5xED2GupAgh1CkadkyDqfp3KkmKFEPE3dEMATbKDB5qSD95qBtJaPphB9rSgHi9DFnydnNfTrbFXNPasLH8JyJdP",
  "key20": "4LCzsX4HnXoWwwLjkinUk5mBDfDGaVoe1KbowcsHyiNiJrer9yM5LpL3wZ9qV3zr8dmq7a3Xh5mA5mmEhxHYtpJC",
  "key21": "tHZVXLDx5JJryaRSU5HwK99dV3DEJPQCyDRBUzvV3ab5KradKoyGV4EFH5xYDg4zFioLSKZ78GWLg9CHBJUd1tM",
  "key22": "2xXTyqg3Xo8TQLBaa4C9PVpp2zpaazTV1JVPcBy4EFnHycMdqiVrtNC8oTG6FYtToZrwTcAxrCwb44cMfyPb24FN",
  "key23": "KiBW3tuKCiAFk63PNqpruMxPhFwebx2U2ecai4q5gLxd4auWSg5d2SUVBVXG8P9o7eK8j4Cw4DuUkEAbijVUTim",
  "key24": "2zEvF6sLG9YNaW9Z55hcXVcUSmmLiDmZmwrymtzGNCWNgve2tPQ1LW9TcTAoMRre9arZXuprXz6jbspNKzyUXWrw",
  "key25": "iV2ZZbiRhW1iWwBtN7FihftkL9YguiAcSGTYFRRbve4mMDxKhFm5Jy2ocyz9LgmXr9qREet4JYoMo9fmGVk1C21",
  "key26": "2znAX4781RsT4Ya6ZkLNDXE6Hizw6USGRFZogoPbUfLGx3YQAL8roe9TD5dopX23UDMks7by1oM68LrQDJ6BDUXd",
  "key27": "5AfNnoDtTX5pCoyjsKHUUDFVm2A2ak8baV7ZXWdCCuDvmc1FFo2Dw9b6ggwN4cXdtvYh9LcgKduaevnXVaUFD6Bh",
  "key28": "61S5F4pG7PZntKf8dRddBzy5ebQC2Uw9HYNchU2RMhwA2W9vMfSfx1y5VDMXqxBJcPaRwWiV3xK3H9BH3CeZhWtk",
  "key29": "3LTtnzcJ6nKdDnViq9vLmNQyXEMH2sqBfiVE39CY7b7wNM4g1k6ichgLTuwSDECe7wgth1gySZdsPZakybV2iGeh",
  "key30": "4dkpKGUjRq8DJHuSXQTE9EXhFjFED31SiVMGSMAbaez1BwFMV5roX74z3g4sym1DdbbVkKH8LwUCqFVvtDitdoUg",
  "key31": "3rYAcDxPZ8TARgG3zPQcXt5GhUDojRg289U6dzbLWVDHNNmijNCC2Ueq8W3SmyqwB9kqSJyuteqRqWP6nKpQoiUB",
  "key32": "21DYDyxSkdGEvszkTJRXFvZRxX6tj5EEAyPkryNMccKtrpCuojuFqcmwsd8ELYi158SYEQqfnxSRihtvCnsYZiiU",
  "key33": "2k1NQmaCvpjQah5nozdCJTRygDDnxMq7XU4YoyC2bT62xU3M85sBLNjAwiGMrJNSnodrrFGr1q2ywux5f5NwQQeK",
  "key34": "4g9Y3p4TDUqcpVAUp8GKSQRht1NpYydC1BpVvYTSiH4WNqwk33SBRvkJYeyavmaLAsLSH9b8KGdMxaYqShtfqA7s",
  "key35": "3dRheEnQuFzKwq6nZxu97mgvwkv3Hc3WcouM7ooY95ncXdW7Jw9JgNEatr4rLrVaR7DntDTakoivNVeVVY7eTf1D",
  "key36": "24iArWQpZmLC2QjhKEzEvC1aqJiTeU2UEHku1r5SX2AeYC9jsSjbrAGFuo2yiphTHBfvjsBKQTsDfrWFrjzu7mpt",
  "key37": "2u8RiDZE9ZWJFrPtCKwnC94gaQxsz9fRh4oLecPnXdV6S3jjB3mbtNtrSrVNYuyocJ1h8QUcCjp6DCiidASqaWr9",
  "key38": "4Y1M4sRcbXhxq7d7C3cxr9LoeKyUEnX8XEYp4NDUDSTheudRytqdDUGY9Rkp3UQQ7nRPh6x5FxkVtstzXzXs2oXM",
  "key39": "vKygYoYEUC8vCr5NEJkiobbwhtJNMHG5rfQLkGNFo17LX6mDskASxGjMcy47Pq4FNWAbCfXobneu3Vngc93ypyQ",
  "key40": "Pmb4YUEVmMU5tymJwpRPAGcjHko84QjNCt8sZ9UUPS2YGKBba63bMdemUtbzMUio7YuMez9nArc5LghcoL7AJBK",
  "key41": "3upNoC7J7t4jesxuNj55vroa4YRt8mP7g6h9TP3sKUxh4Vrn5RyTqP1ZYRDPLUMnLqKCnrk8NZcvSqmBkmj2gQpU",
  "key42": "5ND93Qve34ycS7G4wBwPLcVCs8HoRtrhtYiCNriLUwvqvuVy9RnDqguoAUFtgFHkkCEEHULjhA3pABoQQQ2Y9485",
  "key43": "1vaEqzwvAciDWuSSu4xKFwLcfbVu3pDLnAz692XXLKx8uU5eGPhMuSTesB6CyRJezimgAsxuFy2kTgj4WCVqVb5",
  "key44": "2TKcAdf76iL7nBFB5QSmmNqbaHbJniQfC1bbbe67sbLskuBMkJquaTyiZG2czRBSmtR6jEqvAbCVuryK2bFmRmN1",
  "key45": "2NA7Gu3PDi2xzQfMGrPKaT984EA8175dqUowp5V1VSoGmrRj8zcSkTQvuiUhRPdYwRBF3JkLpobWprkfXGuLxoyC",
  "key46": "2oxCQKybPHTaYyXfWgYRv33TCjzf83HGwZFUBzGDRY7gQRPzCrBWtbh4Qi4bEM9RbrakVbpB1J3J9KYrEGv563Br",
  "key47": "5ZqcBvUnLF5Zwb4V1ufyZ6Xq2r3JBgCzGHjro8xKZ74fphVj8iGHf4i5Vd5ZyAdSBZEDmto2HPqFAXyrGKSVygrE"
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
