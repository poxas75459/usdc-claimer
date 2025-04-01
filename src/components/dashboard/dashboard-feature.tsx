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
    "4mEvMBbpy61924UmwCHuZrza76tRvMuLVPsS4p2pdc6DQZNBxBqH74APswi6bjc2EdyrhKM8QyrVDEN4XMiE3cNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bXDCGakmDB8vBFaJ9eRwXYKm8sHhXpRQKCdUwLZwEU1qM4phXLNYuk19yMqnwCtMjWQrC9xGEGuuYqdBDJfGiq7",
  "key1": "2oYvM8bJtt5Qtpwn3SeMNbDcN1AVRMwgYQ6zgQGftAFEHUqKc5HycprKxua8Wb3Dzh6Q6CB1tR1xyxianncmRiXk",
  "key2": "2otXhHue56ozmSiJmVh6fDWKyJ731KHMokfEWTUm4q96NySeKZs9u69f1aVyerjrTYUFZzV24FLACCCevEjyFGAh",
  "key3": "3BjLcSnYTXn6GfXTF6DdQzmNmB2WoShiuDuWapqmNMq1Qw3ZegnEU6D45Az1aouPn3cUUybn7Zz2z1Kt1u7QsbpP",
  "key4": "44WfDkkRiA6YqAVrhe6xtz8MStomxEityd4EaZ8mqYDge9n6J6zNFTtXjKxpPNEnRZWu2zNJa775HxmLXZrTaFUL",
  "key5": "21cei1Vs72R4q12B5MrMFofEQRps5E8VgsnrkWhV2KpxC47x8yqHELVwiqcfHB3UGw5NXhUiWQ385L86C9FxXBmB",
  "key6": "36hQnr7dFi4nuMoBBDZMtTTWJQkAnFkcioDaG9eeRcizD2APSHBwc6jQRiCAtWhTq8MeWJjuiR43Lqm25NCLgUDr",
  "key7": "3Et2t2aG6zDvJk4F9Bj5uypnYQ1YpfN3A6AeFETMsaJbcdTUn8opUT1gEAzEj8JHVcVL2ZRH2uupT2mdYahgKiWj",
  "key8": "hx9KnYrtycA2EVgxmYJok9VJ4AjZmaHKvU2a88gmPxDshH9RJsn6vxs2y7mTcii6f5A9xohUmhA6FxGBPuEUiMJ",
  "key9": "3rTfrDPY9HkTPxec8yuUdjxT216dpm4ihcGHqU6h52eytwG8u2V8YsEKPwu9jgtti4idcX2m7MTrYiUqBYFdfWnu",
  "key10": "5W8h3Dx8dTadJcus5EsB25FW1wz9TWNfHUW2Dd3sMvXFHySW9WRicoagGKbUQjEnsCJehj8XgBwmbzNp2SAVCLHj",
  "key11": "3xwCGkUejGZ118wD9uDFZF8PaRd2618JTNMQMuvLfwQzDAmJ2bj31HGTo2ZL5TGQNqVDWstC1S6opCBGPeofCNR",
  "key12": "3i6GDx8sr1HJ8yBtRKBPneE7XoGrAGMgEohYj5CEXpWwRph3qxemNHXVtUkQrXppAP7W9ULrbXYwNCyNLdVBmQQS",
  "key13": "44hENx9vhACob9ou5NUkdSNtucyhYbrBe9Msyp55sixD8uvaxmJzZwoaZxry7CnKvruu1VTNFbCM59LnovHRnkd",
  "key14": "2qGia36uhnanW6FRjLKoRdLnvAw3ceGgD6LbfwX8Ncny6rwEqw4FiLzJWGhhv3dZhnjji2qGsR1EviJrUprFeokW",
  "key15": "3XKDqp9DNdZEaVP5CYTnn2yjyXemutaNk11g93fqvLcQWDofn5cZvDQEC5H6nXPe7Mbd2amUbZy9HrTvnypLrtvJ",
  "key16": "3MSFpxSkfzcRKrBGAjioFikdCbdfQdGAmAoQ7RC3ueCCGCrKw9DXazEYcVQ76YP2qzgMGgaiTEzZe1SFNr4W7VMR",
  "key17": "2n8su25HQzfKnMfPnt27XAC8JUixxDjyCECoPY5a1LRCp3QMEFdsVBmYkvbb3nq352PFKsCAGro1mm6e4qrQDyTF",
  "key18": "iLskgQu2xr629voXBbiM6puYAJTasFgXLkhsVucx1nXNF2eqwwvnKWdAYbxCbRoDx1tzmTHMqQMBhfvKt8VkDr9",
  "key19": "h8Jn63MZReAqqPMSTyETyJB1xEzL8ip8MYbUeNqX5KsyfguWXJbo3wQSi96TqEY3coZp9m2kes3dCFRzLVuTpGk",
  "key20": "3Ek2guxiFZHisu2TnHksCrXVmDfMkrKXkXMANNtAR3DkjgjXqRGSjTky7UZSTJGqzYJAXHcNB5apF1MERSeebcjj",
  "key21": "4jubLoLmCR7PYBLdNkFUS9zeyxfRVTeNVmqV1wacKGkKV288MQGFjNb79wtBQ2UtT9gv5AFFREnmrAA47G4fj2DE",
  "key22": "MPYXnJA4xpTxekwfViQC4sZkBAeJxTVBaacELdtQZDPcpZerJZJEa7hjp1gVUENhdu8wdYje48qdJoLpeFWynzz",
  "key23": "43ekZ7oBVgECeJuk2uihX5BNVkV4gjuiucuo78z6Sc3hntpzbFeSXmq3yg824SYQzhwm3YJzAYU6suFcfvY5KPtM",
  "key24": "2cFmWQMeYY9oZVZfKdMX8Mxm4BsdPf3kWtnoCxacFCNwM81f3d7EfU2JbbEr1vmMh8kMioz2VyFkJfibct98sWYA",
  "key25": "2KsZm7Vyg33yNTzU2z36bHJU7ZFZM8tgtj51v99xwzd1cMeMpo2SwuuWHwpcy3NB18pKNwMnt97JidgAcFePKaDj",
  "key26": "MRVPEQRPCyGxiFhjYjVCzCEp3Xj4DhZg2CLLzzDhbjVGwdBeB1TMk6vvdASre4dfLaZrgYZvzux7BEXotxYC2mZ",
  "key27": "Afd2Xx52pW3gsuw2twnePhchB4v5Ehxv4D8wzd6hZ58QkQgda1TiUrueyqWAnEVJSmrSGsFQUJkqZZNweKn9GCR",
  "key28": "4rT8Z7KFNwCFDWGREkgn3zYgH6U9gmSxnuuhuWgKQ8dhGx9ryJqzaerr5etQdeSk1pfCiP2zW5MLL6WfC6TPjzZv",
  "key29": "4brUSSRbGbnAhyXJkFYiT8Sy3m3S8BK3ty2ffVVFAaSioy3J4h6yP4sEfUsw4XKV2gjNFJaqwgY9ECjtTNnEfESM",
  "key30": "56smpRasJWLcfgUSgfiJ7mk3YpZDJC7jEBUVBVqwzVhLkFrabwEYLFpUfyuRXCNyZcs1aW8kw9XixJQKRkjnB3rN",
  "key31": "2eyETqdZRn73jHgfQxxRwBAc4Zfe4AJdoJcTEcDohK1kz4cob83K6pqhw1zzemq2ocmXZg2VVnayGBrAmgztKVo1",
  "key32": "5NAV2ZJ9KhoHrufDpqYLyz6ydj2kqAW1bijBBXxpRJtWauC4VPt4HjVx3pXjJdMTVNe7CVbn2p9bhWtb7UneADuA",
  "key33": "4gufeUnTfDw8XisQth2jQe5hZ5Pqr6Z24VSQyRH24L2ukPVQSkUwro6NRus9vPsLCb5yzKWTWZ91uDVUEcCu8XJw",
  "key34": "2rUvkJLBSkdQNBNzJa6rEwR2vH1C1QVLZQui75QwmjgRNWF7KKpM7z8J4QwKUqM8y1JuF5X2ZHw16zDWaNh4h8iU",
  "key35": "j7HQwFqoVbtsnWr8cTCa87CvreBs5o3uWmKkNBB6CZ4PgE4StuzwA4UEuAZhQodYMpJFAaZJNKQfLg7Snbps928",
  "key36": "5Ckt4pkNi6P713RqPexu4XPC8j3dXKpkJVXD1DPEDoUrdvA9mM1QwYjVxUNYhgqXjfzZvyJqnURVya5E3m5ZiQyH",
  "key37": "2wxd9cs2yhbYYMLJBVWSg7fdLjqZYi2VrHseEzZL8sqrfDUfkaNJKw5jTE1rP596gaHwyVoPXoTVJFvycA5caywy",
  "key38": "z5JxHA5Jeo2p8mSzDQeKkaHSUCrTPDJxkDZxg1axmWppaG6xerqosqynpmXFzLJFsFnXeYR7aW3fhcbnjHhdUfM",
  "key39": "5vVYTHZNk7UH3ERnDr8EjZb6RogNE8SV1x337sRshwmfd7f2aoP8Mpqti1CY4dyde7bemyhAcRe6Pw1Jw3JHrTU2",
  "key40": "364YqxgmVZGJzWzSGGSn959fmQLafyDCUTZ5QKqiZ2CzTaaQiaBWf5tpcistv5tdFpXUADy6BWKEC3KNJvFge52P",
  "key41": "44QmbD9mN7JzfyAD5x3qEDsSuE3XJ5GucEt9n7MESYE4449pHqPo3D3EmFQGrTn6vjHHQTHTUVJhpe79CHRvToJm",
  "key42": "2LH2FAtEd8hRiteKGLkCTF1Zj3EtJmTCFPw21ZyhqFvky8EEuVUozJgFtsJ4RSKJ5UGysUWQs4KkW7SJ3xpNPkhS",
  "key43": "4coafbrpaLVRrB36Wrz1ub3pk2xfq9GDGk2qTBPMhwJdAx7bF4dmAhuGbshYYGWBqE2rssdfE1PrA237XyXwRzCm",
  "key44": "4QmYsTFc15KyaDTTqEzghjRPXeZsH1CME7pfqFef4fsfYNAyyhh58527SxoBKAkJyVpz67tgKoJr8L7xtvj9Uph8",
  "key45": "4F7BVdAcB9c8e8S3HTDRMm28XEWeQ6RLs8hMMKtWp67JeQimLrp6K51xtvRy71SPP9NeH4rLr3JHouCHKfy3zC1a",
  "key46": "5cAKcPYqHokDJNUCYMumGxbrGVygv19bfWsBrYGTRnAcH4cpkzyLzsk6ujL9JhTLMAMGHZyG3vEoSagP6fK4NnET",
  "key47": "7MGUTxkk6ctSwDkU1TUNugfWV9oPmYpqTu26HtPvq3BK6VmR7Amve5wJQfXHeTgNNoATB7PeYf6LW93SAgTpN96"
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
