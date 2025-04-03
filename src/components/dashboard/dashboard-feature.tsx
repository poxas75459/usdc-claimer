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
    "2TAXeWkDFEmjtaxkxpsYntgqcCfJkMsSJqs1yEm6p2ekHc9Dw7FJKcx5yMeBbhjWT5WxZgWacLc4SwsUdoKsYEUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qGig79qiF8SDr216yxgxWQhXJXAYM2zVT86i87XSiT44q8CmHjBcxef9KXjXhL39t37YAsM43KXdNU8BbcVGW6S",
  "key1": "36Bg6PA1LbrWQHxeMKuSBVQDH5mwEZnQeLWFT2AiBJAjKFwEfoz4b7XGN4jNo618iLSZ7ur6govMiacNTXL592TE",
  "key2": "jHE8GvRJfUA1EM7KuU9snhxBKo9u3xPD2xV5YPaSDeR1Q4dcSZQKzYhX2P5iSECfMYjPKSrM5T3ufHsHt1Gsihe",
  "key3": "62qyHSCzY4of5JhaipAe2KJsoUU9PTxpRoEo4KvZ41SFxBSnwfYH8K4naGBfksYihwddrZQEy56q2HhUYrgN7Ccf",
  "key4": "3Umy1SGz734mnUnx2saTN3vEewpo6675icYPKjbueaqF2ifMM9Gf6Khv9pxZRa689cTpwiWJbP8apCDkDyAecF6F",
  "key5": "2nPrgehNAJw8zRgSJutxvWdinwTRchEwjcsSA7AkxizWQKwWtRdu5m9xWLUdAZWq9Qbq9j1JNz4NEPy1NWvh4TqM",
  "key6": "5XYb4HECK3G6X7QhdmdfnjrTBZ2KX8zm5GCkkAsSfBpunWo3BUBFcyDU9RG6nGYAZVjbrdAorgJE679aHYFRzRDR",
  "key7": "2jLPQJow91SPnnRrrv4z4UFHrCBSUAZLdTYsYbV7wyV1Gtp4fT7D9c2nNWFFByo8HmjTcFMbWymEjdWtbQJy2jhP",
  "key8": "29arxvTQ1MY9Vc3mZ9v7SRSgegGoq36aAL1GE4Ekke8g3pchmrS5LEuNqLSi3fpB6KA2BrErKxQLdywi2RHfKMa1",
  "key9": "5DHDcJbrMqZReQzeKXT56bB8cPhm61nPLTiMScDMj4qp4ChNAac4Brv6xbBuRLtVfjVvjnndCK2F3Z7HniRdeftH",
  "key10": "3Cfax4ghaiRMpbmRoSyedNtm9p6h3hjY9RXTRH24R5JRm35ANeAKDgsWpmrLj1PdhcYPeBBf83JYYvc4wK9Wxuz2",
  "key11": "4cjVGBCEwjNBwuwyvSKVrg1qM4mrcwmxpqj8vtGrWUNtUeK3jbGPhhvC2Dy2fyeXH42DaGe4WgFvAitctdNBpbHc",
  "key12": "2T6ZjeiWByUdoFXoG35G41D6Sz6Dc6UysQu3EnqJyub8ic9KDQNR1S3E3tfpWsrgbVBXu7hyBZTFeXZEdPToaNFz",
  "key13": "2ZJBnp3nwmXTWGjZSWx17UgQ5wDnkqcfhdoQ8RCvN3Zzk3GXdihQciWrNXua1NvvsnmvAmtvdKWzv9dMgmsdZNUk",
  "key14": "3K8zxepcwvg8PUW3Mnd8Hjf6yufMbjrQsZCkEzk4pburK4SfDc8DaL4qFBkhWLgGNDtyp6G2Ewsb2qe2tcmBB8La",
  "key15": "4eaj3pE6HChgQu69GJqBccgsRTkmUGYVjPKdmVJnMZsFCqHKUpY6TDr2n8FVSUqrHGw5P1Ja2xe2wpefs8gba2Nk",
  "key16": "3BSK8uNZGyz4mwJrm9cYUTknbuV7eBYr7opznz6uxPFHw65oxUC8yFi3RsaHJ5SqKmpj9HDPdXefBh4LhcEhCNhn",
  "key17": "66UbJtYUSRhw1YSxUtY8gKJoYgAPVqruqQTdH2Jue56vbyeRviQptLGqdb2qPxnbafqBfXxuisiRuvKUx6vf6GAp",
  "key18": "xGUSkrUsh4g4XzpDFeGKCb1unfE3NkJftA9T2w23Zmqr1nSBvTDf8WUYxxpuuomPzcwRy6uLkPdbBYXBG4Uzoo6",
  "key19": "35ZKsKKGJsxALx86L21f7hdGu4oVCC4XronBHsAkFKBZna5jqaKupDFbLAhtkYx4Sq4qgyddnTZQ2CGwmh2939zt",
  "key20": "2LY8qtk42UcpSUFcuwEW7LbgonJd66Nth6yrvLFCFnCwRv8Yx5kmbsAGLbSAM731fc4FNG5pNNPU3TUfnrDaGNA6",
  "key21": "SSksABZkAFHRuHHNAQbYJrtcvoTWBp4JP5D752MDTeEz13BdU8JyNnrobu5DcQAoffJK1yYB2YgMoX7XBYb27oa",
  "key22": "5dE76WWo9PnefT5hZifsMrQD36MfsUGospdW5Wc8fkxhejmebC5LBP3SobYhEToePoAFgFxwGCi2JmKfo73GvQxA",
  "key23": "2tdpWMjJhb5hN8vxBvPJTgkq6s2TypDdmijzy7fEr5UmhY3oSwYUiV1i237DJEsqKKAhqRUeu6cawQ9Y1zHusEaZ",
  "key24": "5wmD51xKFaGpPbTd7Qns6zbTMZXfhjgcQuYK8NXuYkAUCFgRMSeskgtUQVebdHxFNuCCxURPfkEvNeeNg74Duznn",
  "key25": "Sdjtwa46bubaSut1cx7L2VzwGr4USE6AEsGcqcp5bJ5iZgVk8TRpKTkG7TP7e3WFXLERf9YhPCwHjXcAKydFvwf",
  "key26": "3kuaQyd22BoGE3NUbQZdx4GvfgQqVH7vHDsZ411QYcnRpmioPW3xazwcXpQNuay68bcMKu5ZV3Gp5ev4zyrM4PDM",
  "key27": "5ymsNQR4SrFWkVqmLGafC33UG2vKVH4TobapHMnt1JHrQsmF7r7BSwgRyMfXk97WdA8RM5759cgfBqowgomu7UFE",
  "key28": "5rFLwwnhQWVJYxMHKBV6ZzVdiBr5RjfVKLy78mYL996Gim7RDbbLKjAUfcXVqPwGAd7xBnP5ibvTkHbZ5xwXNiAp",
  "key29": "K1EiHyBc6Rw918vsMLkyic1QKBT9DgHMAvjQ7FT5bhEaV2xp1GC6Dios1ohW9YqjJr5ZvFLUdd933cJ6SFJmz1T",
  "key30": "5KeFxoFPK4Yf4ci6d8dXAB35EedB81UAnDcQ2BFvUhTtv5JQraicE7utGjm93L85SAGetNjo98cTr4xWpGtXBfTV",
  "key31": "3guxkVm3YRsANf5zJysZ7JmxAB3YyiT2M9Nqm9J7hrYir7B3QS37W2dUmoDvuYRgCT9BMCRfxx2MGYQHM3fejZ2K",
  "key32": "53YXdf6qXB62cqfbYMstPqZvgNRZMTpvM85tc5s95cnSwyVsVpnZZeKMsVVxkPELa9UcHsDtC98mUfMX8md632f3",
  "key33": "29qQQPMLKXKvkHY3QdtAwLwxYoQMdrh3hpTNESaNbDbvNFVU15ToLc6BPULfejZaGcP49wUEJDxHshPo8iy2Hx5V",
  "key34": "2tYnDLELupoAvwyU9cyAtpZSbPKQDEpjtGeRMsYAM1yX2jhLigAJh2wj22DYPFPC6utZuPH8Qb7JEKUfBais7gp",
  "key35": "65ncRK3gayoZ3pAHF1s1p6MBx8WTTk1y1FTd3M1drvA8CaEiT1Nw7t9k2hvRNpoofsfRPnQDksM9sGtdpnL2JVUE",
  "key36": "2gr2aMfSbYpLmtJZ8SHRfXgmJE1oJkUpiUDabjLJUC7DqMFRWRLEEbjSZMY5UTZ5QbqdgUqhmgh2kNaLe1YudxDT",
  "key37": "qRrcr4TzAFtGR1CfCCxkypUAs24NmA2VJSpmGPQDPpqLfeYzcR3LxqqAk9KYqmzgptkjtmrLnHvvt79TUSrQhbT",
  "key38": "4VsWeF6vGvWbmDZK51Ueg5QjNRAEke7wgP53kdBgRaRjJxFfN8q8GPbQ61pDyLDw66L47hio9J4P6QFNHU5Af7Kq",
  "key39": "4zWJtve6jgF6mA6NYXoWghuiox81oei3URxW1QfmjgqDnw87PENJDrBXh1mcAemQN6SteEYhNnp3z3Whd535TzFV",
  "key40": "5egUgvtZx7qW3YP7jM4hc8QExCrKaihHVGzw3qG7uVu6naoMpTNoaWacRPUN6f41xgMXfhh7ameEqdXwcsjmCzY8",
  "key41": "63dSVPxQaWiqUW1rirjNt9TCfP1ggpqxthsAXQZfcWSVg8Xnn63uTumfKBnc3uyn4hhbS25cCcnEQ7zkCEB8nuA",
  "key42": "5xeC3bVByic5j1SzkddDPqaZyBukSKh4uBZnxx7iRLbMNtcbtjFurnkErZfJBvvGvPEUjLoW3GXapVU7yvBJUDiE",
  "key43": "54zCHan5iHTkwmEyUjmu1WSqAZJ3gJbiCpGUcHbVgcV6C5K8DbLY5MM5DHyYvKwymBh1CLf1xhVuycDqhA3NUJQQ",
  "key44": "2nfgLioZ87LwhBpMuNVjVhNttt81WnPVthyfSM7Y5u4AT2qzmNLrJaBTaxYt14sTENUPkLPS3SikLEnN6qjaooev",
  "key45": "2p9R1YPZ5cNFSfbKWWTws998UE7mALaxX88bmDwng51BJ8y7xVLq4nuPvD3d1Vgqrg2Wu8DxBm4UDgYbgyGx4vkF",
  "key46": "5GVVe7KCjRdKrTKNLawkejGuRxBKJpEgb8YfrqnKLLGXwx7ArDB4v9LbYVdpVDeEVUPri1J5PLC2ypLLNLWi3Btm",
  "key47": "2W7Gp7Tcz8FxQRuScciZwkqckNWNq7iVqZSdCnPEVcHM7bfne2QsMMYBZ3KszPcwdZnuLWqcBo9wsfoGk9MpuSpU",
  "key48": "1k37Ze3rrjTeXSz7PE5f9UXeSGnNMq3Sjo8LX4w64E4GcNM8P1qBTCVjtfuPyEw4u1jVZwHsNt3ceLfr9WjfkkT"
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
