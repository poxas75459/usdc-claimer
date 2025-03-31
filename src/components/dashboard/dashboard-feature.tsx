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
    "2JPYNxsbgXuFRaZCMSF6v7RVxDtx9JkseQcmw227B5EbK1WAFRKHxLMFUaYc35MHmdB9baz77TJCHq2Encgq4Rex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vN6WC13PUMiRDADchtCBjjvoW9W8bP2vifXf1vxUgnBizgGqwucht8vAW1vpt7FdERDHV9uYbSHCWG55zf4k7ap",
  "key1": "3bHGBPukkKhyw3MdZQQE8VC5Vaa1NCtYGPpUipnUdYHp5wRhgjngviXrRRcNWejLiBTeCNdL5W1JJThQoNYzCFjG",
  "key2": "4vSU63mkEdTJHRGyM7Zecy19MUewXPC7QKmmpnsCDa3ChTNEbrbykY5xfjyDehuNsAtWTEZnCp77wT959rhRCkxf",
  "key3": "5vEP4xMZAzYXLKr9TXL37ndvQXfNQVWsjGjopbYRpq1gVVh43zNxNFHnkHKz6HFhkVM7cHSRtsXqtxpkmkvadu2u",
  "key4": "4gT48sYDCB8dgy4HLcq2kP8yvTUwKy8jHztprB3Chs9RoKDUC2DmCUvesCzppMgcod5Gfb9UPYNUQNoWbaE97v63",
  "key5": "29ef7gK58qAgM4M7arBnenSQJfCwAooMjREDV4MPKiapSd7fYMusogDK5aSqT6aDZnN9C4xkaZe4dPFB4wyuwzq6",
  "key6": "2eSd3puNuwMR1emjZinTnTkg7c88DsXTeQc4C2LwXnAfkwHpQ2Kki1ooJ6oYvYHCGyAaDBiCokvmUmAS9bKMiyWw",
  "key7": "5jtRBp6kaMupP3sfnJdUdQMWcJ5huz3q933GNVhpjDWqQq3TBgNcjkSA3YBttz4Snz9tdi2moNoGRvsFj3tfoH18",
  "key8": "317hrEHTic18upu8LQEBzqw8mWteBYpWgswCyet5m6PocTFaEsbPXuJQvTr7M657348zXA5G1hFoT8C5xWmNY6i8",
  "key9": "4utwYQno1qAGK2UYBSGdMdckVYaiCLuZmu4RVZRpRpYXcK4CRCnJ7ha9pZqvLGGstC9sCqdvSZWcz88WyKYdYCtU",
  "key10": "33kcACQPf96TjQCX3oMLQ87sMVu4bSNt4CSUVwY86PVA7BD25xHatBjc2ausTQ2Ks6Y6RjDYt3FCnTzTzBbw4KZv",
  "key11": "3iPHE2d3yEVReEiwjacpvicR2WLd5KhYCXTNBKj9hjo2FKSKinBxaQBPTqJLvcWXBYaKkz5gVAyLR999omQJsyeD",
  "key12": "3qZSRhM3ihWYXJF9ZE4sxQYMqd5F4S3eVhrJi4L9dnEo2dPh7DEsMzGXQHXoA1S29Jha3RrKzVA4nCew5RcxUAGo",
  "key13": "4VbK5QEd6d94tqr1BTTScinxKqYB8tJWcfVKdGrxXj8MvyiKRqCpbZNqACgPEfzuaa6jUSHAb3AJUqEcTxoyvfEU",
  "key14": "3ajb7DofVLPLKepMVf89xrAdJarjh24R5rMLAsYiQJi8dXi47hzTFvo3Yq51HR3HRVkn9mmNWw9UvMqrZokpNXkM",
  "key15": "4hUjFvMwtwWNhndu5qkC5vAJAgoiWjCcqa9XYFHKFHwTXdFcgYeU8eQMXX2Dw2rdct9Mc8jaiMFrLQq9cAGqghjG",
  "key16": "2o5TXsrfVFu38y9WN9gBYYQ7YQZrUwcj9zx7DEo9T6smW6HaZ48WdpPztnNh8QWMafundmWa21Ek6k5tKZhg7mVx",
  "key17": "2m4kDKgFxj89qnAdQnJMfXeWbkygrufZHyD33Dv3LPPCYWQtYSBQK3aMscaiwAEcbM9UCdMfLt6LhyoQ2DzGXRem",
  "key18": "359GoxnVKfHSdnt5MawCHCkyPgCn69VZCxQyGefisJ83KJF36TzVWKUoabF64iS7M3RwmNr9d9ywtnTy14wq4rir",
  "key19": "3PHBz6d1qgzX6w7DjWWA8dnVWph6ipaQdoPT18Z4N2JFn9f894mfmfQ4F6d8RoBNa4FN5UjHY4ez3cSa4kQFZcNY",
  "key20": "3ycuTs1JiXtKtPWzEtjSby5G5KTnVex7v5FVMWuxnmY9yKUsvZhvg9sWqDBNNJsn5m98QonPa7J69Pih4UiQSmj6",
  "key21": "3MfiXe9G3c71bjPmNvjnSd4p8kPTGDEnBaAkaVgsKQKU71rj79aai86X8cwajiF3AwcS6Jur6x5M9qpp4tKfBJkB",
  "key22": "2REBeQxdM8KQELsoSoXAjH35cLsRqGVuk3ZQfaaYF3ddXFXxoXJExiVnXSJwLnMGxrjsitSiZ7qogQDxi594TYyt",
  "key23": "4a6CTXZx9UvKLHvom3qL2uPZQanjDmuowqmFpS8bpQsEzYVW2zZYzkegdX8H12Jc78e7Eu3io5uLds199UDHYqGp",
  "key24": "4srAWohj1VDmb8w9eVoiv1exheTYTDEMTBBGHSsKJ2qEyaDJrQTBnDviHVpYjWuKhPBHCyAaCPZFXLjNZtmXPrkC",
  "key25": "4XjYimasXaCsU86sLvcxBWx6YoAHehsGJMCQ29pYDykFGno6ez8XRY36nGsoSbPuvVq5HErbpBga76oeuUceEb2c",
  "key26": "5XNQoLzz8Fh26dmQ7KwrwyQi8surpxGbG62tK9m34fyqXkiEjquWwYeiTM2QP7jL1JedwZwXyTfY6PxKwYWAB4pF",
  "key27": "K6w4et4rNf61ksZT43GPKJWqs9ipk2SLmG6E8vsSowSxT2uzEfo4b8iHLFnF6c1kYk7J7xFX7r8pQVMipJbPUB6",
  "key28": "3zK4CcsqFjsuzTUFmcHxHLtC2nLUykWuwYyj9SaLpksoSVZTttvXhX6SGBdpgH3iCamNFdiWhus544dd5yVRqEYj",
  "key29": "5RQnbhjddtbARw7G4tBrofLWP38UGhFamWBGDccfhuKUBLBWoJspdc2k2KWxUrQcRiBGcDCtwr6JF7jvXNiEuE3Q",
  "key30": "24wr2HvsdHFKwCKTVSmUA9vbvzb5uBJkZfYNujdXgc8xVD8DQyVdjyvNbGhVvrz53FyF75t2tB4egZ4k62H85Dto",
  "key31": "5tojSqWgQ4Ch19gB4VR4Po1K3FVojFMxaLuAwAYhcRaScnKYzEDAUe6srweT6nucDjL4WjMewLb4tmnErcb6uBfB",
  "key32": "555DKmt5CB5d1yPRzbkEEMGS63oUhxMMRAPfJzPA5kKhEnHsv2KiZTy75DvWTNgQr5EqR7XiVSapBKgWhfTm2AA7",
  "key33": "2A4hXe1zQbLhCmwo6yEpg12PjwrhCgbm7fpPCKCj7aype9eYK78nRv3JHQWH4WAhfPVkWaXhVEatvgpYeKGB2aa2",
  "key34": "2DMzfgNFn2yr4dde44h67Ezs7egR4i8So8pwra8Widu4vhtChyxEvrVGLd89JCA7j8LbyKmNHYPzkXao2yz12RZG",
  "key35": "2JFkY3hYE5qLJFh84EEwvsCZkeLmrq2QMXDoPRYvBEy18ANeRTDn28HfWxmNQJZPZWAFCAFzbYCNyury8hLsw5cF",
  "key36": "3EBAT5g2Cc2faExYa4CXwaA6uULfbRDDaQcD98ZYdHREncNTAuuE2jX9LnaTQn3rmPFCS7fX3phySn8BDGUhfQWR",
  "key37": "2QjB3z92FCeVNrMh1x3z5VXDErXWfUcNzVXTYWqejGZofqRw2cnF9jQsqheJzRe7JNmNLhYeQgNssw7qdiQSqe6c",
  "key38": "dnvtre2H8azBFJtvg8Y3kKVVGG6tnv84Sq7YPjrVoubjj13k6RExn35RuEgDdVdCL3YuSFyW1jb13hqpctRmmNy",
  "key39": "5HCL8RqR4HeMVdvhPULYTmFUrwo863bRo2Dt7EMbAk5HJ4U76fTU42qwreToiZWqNR5KVN67yk8o3vgP1nPkbNSE",
  "key40": "2AaaaHSMoRniAymC6W6drFjxRvPDErybdHu52wd9rNTB4wgb3sSqbK4fN2Kc67mUpQsS3DPEaTLGi8QHSbDvS5Yo",
  "key41": "on3Z9EdTKzBUpuLuZ2pvctb6bLEV8FSBksnCY15U87wzWcQZKvJTAukuX63Xbbt2oFC7W2skskkRRUdtyHHVjCJ",
  "key42": "Y8CENy8vKkXY2JVwUGqd7MqpeZEidW8N962SrWBWfniSjEtEmUC8CtWxPa33vBFuvHuxMi8GPLdpZvhVpL6Lgec",
  "key43": "3s2Ypt2NP3amS8jN5KxrxK4BMQDH7b24Wv8JX7aqZNZk2Zs8Ua3zvjM4NSdByzLWDbBwu6qnd9UgoUQE2VXaFSUU"
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
