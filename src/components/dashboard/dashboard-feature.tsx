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
    "23CCRBn5nJNg4zyGA9T9Rg7vzKuieeaBog6LCPmQ4SxSrajAaHnv9MBaDG4i2Qzzu1bkDqGpaP9GkFQwtG3EbFWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiK4qP9fo3HhQW9a55ppRQHjCCoovBy3XGjK79MuCxd5yRVaJt6S6e682iDtmhXvKMK34qWqBLQmFrhAUZtkGo5",
  "key1": "5HdNGdhKKxdVYrHmWTx13f2r2YPggRnYyuwWWkAsxVY3mTkRXvhJi1ZEQVQgu9EFeSqu3xetJYExVnvyds1eY5LG",
  "key2": "6Sm7s3Jr5N7p73Q7DDGkzadnr3CCdot7xwGYWxGsBxt2ZSTESLx9CETMpnqC4fmxFxJ6ucw4nFaAHNqex9htqJG",
  "key3": "BMP1wA5UaA1qdciuBbSsDRYDvhBqSc9zTPjd5KJKG1gMEqzwpiNgQujJ5rQimyTPgKPQnRGP1NXJ1A1GJ5JsKMk",
  "key4": "5ukzoYjWUgaxc6ZGTV3caZX1Vw5pRt5nFfJm2e5K3UVtd1B3KMCjsXLWseaNpZUpFCXGy17pFtwzCL6L4uvkEhuf",
  "key5": "5iV8BLSAW5rWpS6HLPxTizxra7wsqwHRBEKZ8RxCoyGhgBBiTyT7vBp7R3YP4EyyTsJmFoRJ3fF8dQocrefqxqnZ",
  "key6": "61tDsMvseNfUaRw4r4g6YCf61pFyMYiKqQyD4dEdRYWBDRcSU6DbdHfiexZB9PciHcSqhhywBUiJVmRtDry9wvjN",
  "key7": "487rS14LZrYMB94D9hNS7NfA928YU3ZhSbPwPtzPHsqYXaPX3jEZWDyoCqfp2TM1xQdp6RkHUbBxvixKFD4f9mbE",
  "key8": "5V8mYFD8X91skn2xgxxnE6hqLMu9sqzwTA2s7hFJrAzbSG6VxE6evWjE2D3YGtYkQHtb5KKjQPXwTgpc4hE4GeYx",
  "key9": "6yTGka2zt5aAJkUxCH5wMMsAT5x8YMLMmVeMJ87JXFg3fe2kyFUwWHpxGTG8HzYdQLKeChXbUFJNWz7Fir8jGi1",
  "key10": "nLVy6G2r6iZYH6mSNDCd9j4DU3ZauMd53aUewGsAKBbLhEXRADXkuqxiDznQHNsqg9bbr1av5hLzWfzKDv2CKQq",
  "key11": "4vp5EtznBpv4Ge9a8Neva8Gi46nP3SxbXy5crHMTmJH4r69LMAE2xDEv8F5VsrTrm6Dt6KsbJsRACyQvpvdsiayi",
  "key12": "3cwpQhGKAteLVghT41MEHdiRMZMBNeLEXxxsVMMePpH9W6bfZrkMpABbtJVz145KDjiApTcyUcBW2ycsdTSHHkv5",
  "key13": "cgxPQKrunQXFScFsMpRmcgESZFHAZzyMz3T9nryCPpPVhfWvrrNZ7aa3YXDz2A54Bv2fAQEiWtN7pZvKqQBtfEW",
  "key14": "5ES5VgE1w7yB8jWrJEm8pGyDi9i3tdvVE3PPp45aqm7Hb14Trf21mxDTN7DVcfsSv2zWMuTgrpPijV7zs2JeLLjA",
  "key15": "43jWCgUBTCCMpNFr68LeA9KiY2Y3ctFCfp3Z7K6whxtxJT8wHz2nThsz6WjrTUHLMEzKxk2oALRdyiVDyACxexnH",
  "key16": "4cVqnz8XSpAFEqF2nD7VWay82K4LX4p3Zp43s1fCkqkeyTdYVDEdk74WPp7bkxY2jEqxiw2kvcdW8ckuBtweHpMa",
  "key17": "2QzVAZUhvyBnHTL7ny4icBwVH2QUwSSdTDAMKk6FLKg4LoFAKwEBJE4JyrdMMwwszf8TuY7BEWrux7nCBoTBLeKL",
  "key18": "3SfHzNRoX9hPn3zinQXH2QrsNYgZMJ5bPC6XKW8QfpSYuALM25yjqw5P6UyrybWBY2aJbiSXUoJwhTx5W1QJiBTk",
  "key19": "PJAidX9NTMVajy2L3pchNtzDSKZxwzN8mvPCT7jq25bW8n53jzEjsaDomZGmv3sVAVe5WLDyufdnP5H9bunggRB",
  "key20": "eHcmHxZY12qLScedBfWAPy1wVCTVACzQsMQPBQmTtXeY3UrBnyPLAtJedhgUgjRRmw4ezViRvsfzfXFc3VNEPyJ",
  "key21": "24N3tajJCSaQb8awXHV9fZC9TQG6af8frofN9M2mHFfQkqdQwifPZ1cbuZXhRAoGfGnV5qsxU73c17Y3bvPGG1Te",
  "key22": "4n8PNayr6rYgFdRrytVD2uBDBCQ9Aa1GK1XGdx5k6daLkcJp48Hed36MUz9s9zixJvPizgKk84ronkJUkDYZFwsY",
  "key23": "3z1WCNrBethkKTE7Uw8SJ4xaGu2vFJXB1WpUnzf63oqJ1tS2p1pwX9wGrFMgJMzs4hiRZJHYgh5ohmVV8rkP9Zor",
  "key24": "4hWYgUkoKgnK3RP6wvqdMbtSv5FPz3npH7WCbAs8EvuRcddZXz9X6qAXqTQVqtGkfCAv4B5rKTA6Mt1CH2exkZmn",
  "key25": "n73mB6M84vr2RUsxeic9re7cVshZjamwgB1MwjCWLdaTtKMAZ9MKqbFq1WY8QTCi95RLgok4NcEwxL9P8rZw5sw",
  "key26": "63udJBbCyPdFRXp5KPhPTMfNw9MXHWc5U491Vwv2dLDb15RtQbfbbotCWiEnLwWd7U2HmeXhdKTMB9zoWMk3gasa",
  "key27": "2XR8zzdySMyqP1hpnarp6UFgJ7BDcYQQhGFV7nsoHdhrH8YyKTbuPh8ohawPq8qbBcaUaXqWsoLXFHomDKeBhMe1",
  "key28": "543mk7nAqL5bnDQyGL1rTbD9jYmX8myTReRYcb7dETZNn2dXYZxGMqfE4ef3pdMGqHiiZB97pWjAHeVEhTqmbHkz",
  "key29": "zgR2bro7nEGpL6UYX4WPof1WbMtnyrb65VbnqjXuUjvhTCUEZovc1qqN4tqukjvs7emjYnd5Uv1M1GYLSo7PQ2H",
  "key30": "S22o4DEbXxDegzPxgfeY2YqLj49ko2Es2dESuDyT7zv2o4KBJt4i6nUGjFrzVNE6RAsTH8YZdoBMBM3H6CoEJiT",
  "key31": "4bQpqgfAQU963A4ZoFGVtZDfY6EoVyMi9L8qq6EgVstGX3JU2ocZNDHaRTWLaBpZiQvsnTWbu3a43hoPV4D83xfg",
  "key32": "fs6H1Y7LL2UFY7BFxqwAcLhu1Ru6vySC5CiE73xL4TNNQvxnZPQvEhEPKUwDY8mHFiQUM1CmBDJ28PYHp5gfiTq",
  "key33": "3pSALtzp5ybC5EyE3HfNoaYRZEByfpFDXizReCJmPVs8Sy5bwsN6puHW36PWS3NMAD2GmE31z3RSA7tuhGU7x4RK",
  "key34": "3ti4CMjgZq2caKXGwX3xchmiWmh1Ajonrq4rGxXbmrcTJiJ4uppgsuGL8dgxTq5DfxeFq4dbZuZq3vP1tZPbkj3H",
  "key35": "pENkamZLqDxKQJwDmSSv8aywMN6FxASGgpMrAnMf3nkTyo3F1gPhRjCTMZUcAN1girzyUZXpxMRVHYqpTpCNLve",
  "key36": "2K9YdmmfmftPFxFErYoL9Svg8adghnet8uHSWVELM2P8EcHpWK2gs6JfHRES2b7RHzPKXTgcLHuAJEWka536nyZw",
  "key37": "5ryX3m7WHbJq2SRwQmvt522Uy7sviA9gYT1ctxfSJDDjkvq41JoxLMu233wWsZjUS2ED4XjvJDEgt32uPYgomYJA",
  "key38": "4VQJtocHHGYqwWUYZiu2zV7PhCWUT3DMpfxMZ3SaFfUBXWK4Jm1R1Xwze3U3w36Mm5sR64UtYUfczb2m1MzArvf4",
  "key39": "ZXHkiGEbm2NrXjxHPD8qNQuA6nZz2sdA97NHFwd1x6JBoYrLDjtAbZEJaT2FXtTnTgi8wZ6xvv4e4B83ckHziF8",
  "key40": "23tLBpknzhzZDegcVhesJk6xstU7i3irJreEju8t2sHjLbZxk6V2YUagBTpWRN6wt6g4LPEpGx29hzXUqSyCMAxH",
  "key41": "3hgJCygVqgo2qupGvYAhp3pmmNcTkmSkM4iYAjzWoeZD3rTU3HJ7nE5SWxweQjtjTfVFcv1VY9d3r7kYuNuH1fEB",
  "key42": "5DBSTFcudJ3WtQT6iPHAuNi9VRoeYZ8jdH8kdESzWtvJsFrAm4jPprZ3BihpTr8QXjFVcR4peiBQd8WanLNycMFS",
  "key43": "2HXW8cGbguiSC5sf3K4yWTMRYu4dMifw8BGztNf11UZAvabnfN2dmq2TZgvyNCjSixhX8RP7cGixkEXaARNV6X8i",
  "key44": "YgECJnufezybNuXst83vCAVmpmk9AdDJjFQuVGkmoWcxpYxfVZhpfkRxGn8Wj5xhVKYUQsjobKYtodJAgZdW4Nz",
  "key45": "3E3Npp1HNV8FZbGoAQpQhhze7b5FgNfXX8XW1PyZ2Fyq5Yh95y7PMAbynFCT9zeeWjULjJK9jkspGF1VUhn6DjZG",
  "key46": "2ysAZb6GAWeEircW7YzqhzvFJ1F5jJPuxUNrj6GvEtDBXoNehcUwVsmA5DSZX1txGABHqfeSohxSH3L5wv2zNUgZ",
  "key47": "5pc2YCsjrNDYqKL9Y9GisLRytTLP7Uq9xC4wZ6qd4ZkRz7xiaHQS8brashDe1ifDzZ6t3d3YjmKkwUuLh3tBH6Sj",
  "key48": "5sLtCoDYTYeBvvJ7vZU9ohatKbgA9kwcKpTGQ6dUfVZ7CTeWCLWj4b6QY8b86Bxam9FUfNvcg5hsa5L75MrDskGZ"
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
