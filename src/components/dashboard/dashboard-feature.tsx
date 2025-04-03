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
    "TDz1Wwh84HNAQJg7i7BG1ms696aFPCrbANjcrSWD9ptMAuGtPZGhiUJhwx8y9z4adjNw5vjnZZwnTy7ZDkFszMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62z6fZxEN4RWo2GK1mgJE24C1jWttHiqCRHj5QBTrt84oTDjL6kf279zmMzoAeEW5xhe9hHXxu4ihkztvZkcT9Gn",
  "key1": "582A1tWoJ1zvhGzBKjMMdC1VDcUwjDxWsF3unovSt6PNpoo6sDp6FwutSvz4wZvfCgKWf1K3Pudy1Ermzkit5CRL",
  "key2": "34EHxs22T6SETW8T75HM1F8v9J9FLqxpdkSkf2Pe8fuGqBTv4Hg6Pp8qUnbgsZedi4BheWAWxbW2h7yAXutvSxV5",
  "key3": "5C4o6qWyqQueH9dDQsLdBvynFdYfTcbmfKviMxMjLV677Bri8dSafryMVksoyAdWtQqsuw63SKw5ALboa9MEL7gb",
  "key4": "3gS2VFGLukp4jqQ3m7TaZzHFVtNoM5yS6DiWMZHNZjAtTQSzYkz8EDWmBk7CKAzcvb88pJbSbrK4UEfCC88z7aHw",
  "key5": "2sKjPTLhzYrt5ifaeh6LR9eH2nu8YCMKMqpBmh9RzGwrXhNwao6w5YjziMfJSkjP2FfeTHvxeUAHAzTgDBhXgJRK",
  "key6": "45a6NV8Rq4pMpzFLJ4F7D4yaK1VPwLRErveyLCkbatoLAaQK3j3ozJQcH2Rfzik12NaqjuaAjUBcUhozFj7W3swf",
  "key7": "QdZBSKNVa5gcdkzQAkDagqKGyCpmxS191t9MXyFgQtBLLyZFsC2X232UbmUfqhtkmeJ1xG4sTCbvCQV9a7fJUAo",
  "key8": "5uNrxdCPzea5DgsDM5JfuCovz8wHGkmTmooHtBZTN2N8VLSVa849QmehBexvGZMKsvHGms5ByPG86Qs68xbgujz7",
  "key9": "5ywNWmGKatEwKpvfUzYgf28tUrLXYTXYCYEErhWuuYdzDLdVWLt68Jj3VdbbtHmn8iEU7Xd8UdZTTaWumiq44KYM",
  "key10": "5oYZhytTqWkTe82DYJ6Gjuz3v1Sf48vsMBEEi69LuacRbAMRuw4RXZCi5WrBJzcyMLKVW1xoLs1ncovSXmspbW82",
  "key11": "hLKWd9CU12wTtNoR8WvJfSis8j6vqCFmjS77hELtVLLwAhKpxwFJW8qgF3ybp8rqsmwLvMU4keNnaNiHSmSG1T1",
  "key12": "61gty9heBrAzkYu4A3M8PN347gtVHuuVnUjvd8LEN2feFJQwsZAAGb6xrcuUnCBMFmb1vo7qRJqMi9XzFKBHssaA",
  "key13": "35ynx2CRw8UtUbBPMTfeNHGKcTX8bRaeBY2oxT4TMVMvy1N9fd58iQZfwbZkpSXmRp9q92BiupvEewRcpkZF6M2S",
  "key14": "3TmgSDyzM4LrzN3S88WtGXJk1gFhbyzEUvcMPn9WduyH9sJw9RVjfq4QCSg2Bt423m14VU3311KVwufDzv6QP7wi",
  "key15": "rt5yaeJUMKyrNawawWQBG8Hh7Lkzp1dCkFpx8aCdQocNdMZL8dzHC3DU5djxm1DpnfRqVhvLVsthg7wditzSpZE",
  "key16": "38VqDh8yBwh89NLWvEVxVBonuyqe67QBuHUF8WXUPZzwnykdqLq1MqS4wrdYFMvpi91g7Bj2xjESvX8hyZSzKN1n",
  "key17": "2gQNm5NnktwndMiPFVyp5qVVgnGk8crWXjkoBsep3LeRYNXBfYSCgvb8ZEv8V63XsYtbx3ACLgbnrSaQTiNLeJ9E",
  "key18": "4hVWe6aikjV9Y8mnESnEnHR6153duCbPCXuYookZ5MZi6acgyfhGDDmGMwmpDFEUTfEbbThoj5nyMmXzgGRGYRro",
  "key19": "3GUTKAowx7Bw2wwGxX2zgzTLhnNUpgEh7vYEaUkik5fgZK8ppVB4Ww643wHFNDmtpKBuBrNMTtPkFWHRMJWwssWH",
  "key20": "5htuz6Ht1aakgBSJDVejFJFFjsroSphVD7XfgFcSg5i9DCbjGmfVRqK5RYWWzmPatHMPKsVNuTNfS754E37ijwPU",
  "key21": "27dBEAV9dzXiCJCpPaq9uUt9ohX5RPR1znHTKbxx1AGBpg1VLzETBaeH8HTwXC9VjJjZJeYAxiW7SjjK5KtcAHGd",
  "key22": "28JYtQnFfqKHU8dbwtaLY6Kt17yL5bsnNxjA7jbEUCuHdR4SyNVR1z2iUKAnWPdXz3qfhvd4oXQJtZxKLRCApaZs",
  "key23": "2JSfP8zSg1ZiiUrWfRpfZRpdeHEtLe59UthpZX5aF6fFGZXR8KXG3NGYxwoBJQ2a7EAjWMp27rEsrVkChZsJGZZ2",
  "key24": "4cG7HmzrdEdFrQrfxz5Xrx5cArrS425HftJ3nLGaS9i1D3n2Bhx6oUjifYBiBpfkk4XD6MkGzHcWka1Ss9r61whx",
  "key25": "4V42dTyodZUMoxLcwqETVfbT5X8j4REbZemfscuecPw8JHxS7wHZ7B91zhgCJUujpPckuyQKU7EC1qd3EHxwAu9s",
  "key26": "gVkSsR38UyUa6Q2v9UQhjoWNL2qCXu44AfW1scrBc5BCeGuJqG6xFqdmHa6DzMhxYtsnHqzw1YZNjau6THCV3Eh",
  "key27": "2ez4K87Zw42exQkEoKgJdE5uoA7Uka4F758vY94Cr5LCusVoLAE9udPMTxrHQDCfVEs3kAXFULJ7MYiwYoee9cHu",
  "key28": "3WpecKkXYwKE2rDsdfX1RwxvphXJuQ7Dq6pWWwLW55tdFMAPyFb4Heu4jF8Q6Da5sayohespewVCz3LBUcrCX5j1",
  "key29": "2wyPkNS27JrjmzMcBGw6EmTxsMeWLuv5NvPkeJzSkUN7DVPke1Uf4FgECHKeuqX6kTFSm72totWtkosPkP74Y5GH",
  "key30": "4ENdbsjcCCphxVmR1cGruJ3PYWLTML7vjxyEx5QU2XBN5cgUQvzAdcRPXjegAGyFamUHchZZPiyWAp4tqjvaKUvR",
  "key31": "25VMHEmBYwBoYQZXLmznTdyTugC2wLMpavJFiYTXawyAUzMVv8Y2HUdhTrZk2nQiA1vh1CAqNturqKQebFS6kDxs",
  "key32": "48KGTbUyZNL2genZwm6eTzP9ZyzHo7UfaPyMMgw9bYt67MmYHG45FyCS1ZMUKoqPehopcf1ePanYHyLMvrXQpSNx",
  "key33": "mLnaWAwYh45FDHfA1MKE8mwKrjNE3KeHXrvfyUVUkwMePrPKikZr5E3WnHsH4KUKdncynezotPHLAKf8CTALcZt",
  "key34": "3FrtNHPxrUbvJpn5tSP4dThvHkeYxVfr98GCgbGBj2QSVRnUd1suQvZvBowJ7A4zsoTuJwBDS6v86WrqjPsrx2d7",
  "key35": "3Ar9h7Wx6vCbyHGjNCFmq9radgwDusPgykC3uoFSbQYMVZZzPPbkDEwF9JwUvnmSZ2ut6N3R4XmCJKyc1NeHvScg",
  "key36": "357zyXjmkbpbf8WhfZTGCBSKMyU2iq7FYRLvTrDM8sGFc5v4hv7D2PpPyZm3qKaETp8BYoJQXj8Ki7EjBmR4kbBK",
  "key37": "VxywsYXHu7VfCUeaopPEvCquzngo48tq1g2TYjW2R68FMRkReEaFzcYKzrz5wn6vXa5tEcgZKcUTJxbYGfgt4Pf",
  "key38": "66V7MnsUTfYywaDwpPf3V7ComX8LEQ1RubxCyb529o7dZkw3fB6aB1LBsT4iV4rKdNP5WdrTJ34WrVyhY86kWGLn",
  "key39": "3o2nYTC3zNquo5RTFma1c31cY461yQcrgrmWZfSnKn5HacWMdkxQjiz6X7hEGao3FRqefHjUcqHjAWtoK2qBBLE",
  "key40": "3uiBfAU3cuNAuyTaD8fVohUu2Dia2apKiB8rXU3EnpjNU6ASQbGwQoV9FKArgRwnNj7RoDFsgMBZ69mPDjW4Sjtq",
  "key41": "5ETkazUxnXMyoyBQPo67XfGPnraerpyjUKk1K8F2SGXscMuNqbdM1U8SDVGkGfKB181br5G2UugxF7xUL8DLApZo",
  "key42": "4dfaqWuRR4yk1CUUnwPjfA1bKgpYMMYarRMxWTJ3ssYkq4wo2UKM8Si7savZVy6JcnWnfBbzmmxcLC1Jmau2QQVj",
  "key43": "GDzX9hW8KaMshkptK9MukaWqJn55jiPZgBL4YNyYYLuN4L9vZBscqREzDCN4KR8HaNT91S5C1WCqDEDLqXEVX2D",
  "key44": "2cqGzqR8WGa4MBajt1PRbanGRs5hgYF6PEhkRsrDEVRS24nzJVTAfgNmWrsq6VbHrdQ775tztt1CUP6stnPfSTP5",
  "key45": "3tsx4LHXWJXwHtHMtvk9KF9qxKzNqDJ8SReJYSqzzHBU8u61UfBjqHAQZ2qCpd63skx9wRKveDNGbYvFv5rrfvxE",
  "key46": "51XZ44tV3h66JgxB9vMDaijACZZ8mKyEMLczMmJBQBL4xuojTvKbdkcg8hF7qfBnwChtZL5YxddN47cJ46HeNGTR",
  "key47": "5G68yNuCWLeYwy2qiPKcw6XX8HwrYxAnYNca3PbwHWEuaEVXzjscZvMAGKM6AmYvwx3orU6bfmCi7HbUyUVmJH2P",
  "key48": "4uktHFL7y3nNfAHTCi8Nbm85kd2DaZYRpvuPyGRoEGs8Bi912AmPmwHk8RKf4uXSVD9wwvhV5qnDrW6nJy9vTapC"
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
