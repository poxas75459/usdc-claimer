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
    "9KHd5D5rHvo6KtDkQhF2dTGLwJG2FA4VXZAtR5uF3ZKmVEmVaVHAwpY86dcSRsad1aKdLY8xYYqAazUkEpScKHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmkpvXM8MJKQFU3HBErtUN2MAg8Ho1pAPPV4o9qASuA4Ucy4t1uqb6RfETxfAnqUjL8HQWD25FNpLcVrMc89Gjo",
  "key1": "5GWS93NyvDu2G8i1Ki3bjFSioFB9iQfKKCzAGJdvv67BJvifUYJBAJWx7RCoRBfmcMKawSM1iFqLvyTHydExKz6a",
  "key2": "322eFnegzGc7SxwqyZR2WNmG3TBkhnKqist6YWgU3EkBEZbwViaCtFG4yr5hHou3ZpE3f1PuNd1pudZSTBdonFxN",
  "key3": "621XbT6e8BLKGcrVe99oGDRF2XvGRTYuULx4ZCkmbu5iWffkne2ER8ntj1V2uDqSWBr4BFB5L5heQXacmu8dTvjB",
  "key4": "5JhY97ZLKyDcGSCiqUD3twin7MwCrKH7XANyiWSnRDaQNevmQxYbgdpfZCNeVkL6zyMDr1Zj7zf354WVbXVKtWEK",
  "key5": "56TLxY8pAnNuUSH4SQSQT3ScFzSuxmwMSkYz2Z6iP4ePtQochpAz77a96oQLm3ksqQuPrHAAY8BoqmnjERk9iG8X",
  "key6": "61pkNb7GWzHGzxaPfGfgQLwMqjWREwvbBEwJSwY6B8pazy9ZDDx12Jtc8uQGqVEFpSBoHyy3o93m47YmpCJkr9Zg",
  "key7": "PnYZmQfqrSfhsZuhgi5CyH5Uyq8ncRn9cAWDSMLvXBttVor5Nh6jJVFNiCZsAZFirFm6JmXCFDi3YkYrgyKCXhx",
  "key8": "5k7Ly3dCNVuQHqMihvfZmiZ65jnvYw7sFej1kcwkqZXg7eZ4oUWcyQoJVh3s88C4tAXiEBaZzpA9YgUDzvwfrYj",
  "key9": "49WW9HVQC6kFYutcv2rWt8amkbbb2bZNPwBAAeAQFsgpeSneFjEL1cQddrfVrHffG3wUaKWePfFV4PzMXr1FUkry",
  "key10": "J7oUZa5Hkpo9X2jb2g1qvyEPYgmnXMt11i3dSBhsNLpbhGR2gLjEtyEcdLvYTtYMxyeTn9YRZcpf1nXCh4715bX",
  "key11": "3TqF2Z8xE3XFBGqUpZhVUT1jQddGyHS3aDgadUfeyEGvFugoEyVYjLwpnVUVKicUiw3HhmMrLAAy2H8GVisveCHN",
  "key12": "4RvoWC9xncMsrgFFcRPRg41g11RXfL1uPwbwqUU1Vxbvvso6xKwBvdX8w1noZwS4XSDspabwmsbMdnhUahpe3tHq",
  "key13": "4a1EaYznFhzUfrWgSPVXD1RAUBi29hmXvJzVmCyAd24A79ngTgPvqDHV3MprZgUKMXH4hdEpHXybeobHiVB2Tsn6",
  "key14": "65FcuhkDEeuZVjvwWd8o55JApkjeRu3ybyUudjLq4LEqXpHcRMfM7iakj3BKEq1YgFM3JN9TZ7cMQz7cY9hGNmKq",
  "key15": "2M25ei2DmWD1kw7ffsDjB3oPY859WXp7zYZLMCdzrh6HoKLuJBiSmd482KgKFzzhtBZ8Tg47VzaWQK1Vt81MKAsM",
  "key16": "3SjDGdV8WybcyGnSiaSsmGXBtLXLEUPcafoZkmYU87FxA2ahhqt2nHM1ohbaQt1ouxeZXnmEhiYAKM1MFjzEhTTA",
  "key17": "5k4xtzNun9iTxKdMDu6eeEJJ6q61BsbtfY9Q9gTe4mS6n8u1bUfC3mFWhC5NgtSXQRkpR4MaP6yGF7HRYMsondyS",
  "key18": "4SRdV6TY7R7wPQ3sTfBT6SDa3d8jiWrpzivRGP3zaC1f5EqMfYdKK79E6Asqg68vLpVbnCi7jTDDBqBh4XXecDAQ",
  "key19": "EangjmsGMavCKQrkT1Td1vXSatie7RNHW9xBrNzijUeesaut3qxpAH2597StnTa8phT2GrNbYEZDK53Eyu82YzH",
  "key20": "56Bx7bhMEgGW5jNzbS5hk7xYF8Y32zoRLkp4BA3u2e1MmHmemdoVJq4urXPFWn64eLMnPasEBN62vcf1LAeuszt2",
  "key21": "5XYQ78bWZ2qPjbdEFZumACxX1NSVADb4azaQpepuQcoiZnSSjVTtDcdbPADXEabgnhxMACsYbxXkbh1qKWj2iSga",
  "key22": "5yyFXVJFPrUshzNcagnjKaVn9o4BDDLPJXTD14uB3ffiWvtmyz6M6utbDwXfHc1VUpR42pMREuAgKuVYDtnFJ2BB",
  "key23": "66pufEoijmbX2V7u8u5vZdXqe5qVMjimJGLCMpthHCU4p9giDPUcTdmPfXjrBZ6f78PWjYt3G4jAZWRAtvnbJawc",
  "key24": "3KRgVpFGe6eC68s38S8BPcQ5oR9wdtYtQynPYXVXWxojZkPry3ZdX5ANfjPCBaFiLn4TaWpbWRLQTgSvRYr4JXcx",
  "key25": "4w7eEGvvoFVYYPwJV4zuq22n1YsWY7retY27WwUJ8tu25bHfF2Seftwx7YZanYnFK5J7T3La1naZbMBf31Cv4YaD",
  "key26": "3fPUycwpzEiBmM5t2ttERGVyLLiwwdcHqwbfrvqPRZLC2xP3iPUKuNJQwiG21sXmdc1i1XinX41NsAXs4SpEmGdV",
  "key27": "5awKpZKCQapYNciixkwX3M4tBGKsqZGCcyxNsMSrmtjAamvqpXrs7EArxmFDotJeSiBuXQaFh34hivKnoCMfvhC6",
  "key28": "3wtjHH5TcJ4q2yR9jid5xKgbbpuH3RM5VgRwvxHHH9Q1CAnt5oQ6yK8fZ7YuqQsLtc9f6rdsMkDkLRNdebPybSfQ",
  "key29": "49KZE3xYwu2ZPD8cedGsQ7tdyhFALZdsM44mkxhzoHBQo2qGZrnY7seuaXkM9SuY521aedyhzQJKfa2gXi2SEiwE",
  "key30": "3njRB9aSazU3mVP3Z27TnU987oJeStJjyKmhhW6PkW5jTZSPxWr7L4E3qujVBh74DqqNShEM56nhAxmME9T6wM2c",
  "key31": "5P8zsZSn8qkYrkCfo8PirtuuEekUWTyp8cHYtzotJ2HCsayjJUvmsMJxjuCJwjTRVTx9LWLUR26yA75u8btywbzz",
  "key32": "5iWkmXqxA2RTSwBZjVZ6s3smXdQRt3SrMrQGLbTpshnnGja22NwtPuEpsXYYLUAjFziCrByyNyvS8iZCKtm4XxBr",
  "key33": "2KwF2tGkzehbJfEt7Q1hD8A2XJAkg2RjXMWpTZNZgTPzN2trhtCaxKVNfEwmsT7bbFKwDGNfWytVmyvfKPXANDsX",
  "key34": "ofvaQhHBaUDRXNFEtyNY7MxiikRsX2tPCJEYzu4hWUsaTeQHLNq7N9WvCYNktyAhDczjPhdH41bqttCvjFs7kMC",
  "key35": "4ALeMaiWa3BUf6oYAZzqAWbdAXCnUd23cGhrBvuS2bXsBg8cg47bZgSwM4s6J3HYGJbyweGUY78DxeGaJqhtGfZw",
  "key36": "4zMq6VsKSSnz3TujBA6tsFdDoUSQi9Zvtt7QyzsMMt1UX6dUQiR98URaDZkdSkR4MMAzbRH6PJWAF3Feh383u3KE",
  "key37": "5LV9mrEz6AqhJYPoANxXhKwcbeRKtA7rMzKC4RsrzgS1qVDzbip5T2dy2TAuEMM84wzhywRXk9A3bATcEuiA2C6L",
  "key38": "4xHjtZYtFV4JnPo9nmSH76ReFBbwGaK7Vcop6TAoQnX4XoPxE3z1fTmXuKksPt1GrMNJiPHyfCpmqD6nNumjikER",
  "key39": "HkxuLgyMzTH191hKKk5p77fQzk9RwkR6JG3QwBFdwJ7RuXVwQqJJFycJuCJzmoZWUwsiMBqUfDZ5j7Da8JZJCgL",
  "key40": "2RMMnb6nmSU2EHwVWPsYtHkV92HJyf7mxMhBRLKjL3fvQhY7uV69XnHPTRgZXjSJ5U5nGP9AsiMj6Ki4nzsyMD11",
  "key41": "5gLtSYyRzPuxSRNnhC5ZFdEuttFXkDXA6JqXYWnJ1zhYEkW1NANGExJafSnKmeeLw4tYT8FyfSrwbjKGh9kTrkQn",
  "key42": "3Vsa14aJNHfXM2SY4HdAakBYWZK74BvMdWapDEwVPhrqXkmtqhRwXQWCRb5S4ZoE2Qhhf2HD68NYoe7RNcKWzjij",
  "key43": "AjWKdosw5mzZAMLnPxxgUfJ3hjBDCfe4QfHGk9tdDfUpDU3oUL2rHLqiCXNAYqvk8VXcsNvcxrxJL9x6hq66KhD",
  "key44": "pUh5YWXtcsRXPjmNFJNTYXYx5VSTh5NuxBPi33C3YPwY7HmDPoJeVj4oQrzQPT8Fk3HFLnF11YzjxjavjsxSgEa",
  "key45": "4Z8vDNq8ChLU4BS7pKuEbihUuxbHBWEk93TS35zCgjBtLQqGj5iWVmJmw2GA2QYDEjLE7ZjbDLeXdFEfa8DJsfjz",
  "key46": "KN5mnuXfs2M7zzQ9y5hdNQPM8HWRbjLqA2mdHidbCpsaraSwZcRzGyoh3XVsiHgSeHs9WaK9gEgMtXZkbSM71Wy",
  "key47": "3xFZ7BmnVeNiGhgJszL9bEcgfJgraNzKQh7Bxq4VpsU7uMb4buubjJLTKN9eHYakibLZynhCWn5viRKysSZUu7XT",
  "key48": "FCmHgGBHn885TmsspySJtRSef7aFTvgk31rdUUGrsg42Wr92wY1dHKAW7cps7BgXdLtjiYqXNqE2WCfHHzz9e76"
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
