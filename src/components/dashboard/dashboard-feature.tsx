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
    "4LZAp6Wvx2kDREZ6MXmwRLHGbVZXcrtyt4oKaXwRMZpvDpLd5HLyzBWffMCGS8kbCagq9iZGDqoChtep3EE88GyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c5KtiDXS6tAjbyPbTbT488NkSE15SBBTBnesGityAowLhQjXUYhwgGsVzG3r9TCnQb4jXvsp73GbUjBiVfrZuck",
  "key1": "4FeKoxiMbgdKySmXo6Nsi9QmZN3ffh5YHBKzD8ifVCbzjMUXYNUa2NDrx9jpgYJQYg5oRruR1gYJqzhLwoVXSyWH",
  "key2": "64WyeoF7d9MJaxE6oguejVgTjvKwT9HJJToNdkB6EBzdprv6iwXf8Kj4XkTj3fixW8ZUWK7fY2hV9PoajArsGfFf",
  "key3": "3V3f4MKBdE5ZCu71fm7QiJJn1gyrqB5HkkhFUs9AabJHUG8BcC7VJmfREswoBPu6Vwg8tbTwcqAEr4BFeZNHxpSC",
  "key4": "5EFATiuiKyv2oNVieCzir1ULtBRfthFJHCyEsrNCyzzVSFv4XeYZuRattVzB6BbrtWVLRojh6nf6S9cyEJXMccDT",
  "key5": "2LQPSWqKnis5kMA61TFC2dovkcjG1yAFxsXrs1Ni2Tf7TqGwgB9BQ3oiCvDt2HAZnQUvMp1oibPpV6V5VVUkpkeg",
  "key6": "HHFqDWxtLz59wjg5RE4YaJ6tQvVLqAyrNY82uLYW2TKH9aSe4n8rNmzPJcaR9dSobSQ81Rgz3EYKPRjVJzuJN3q",
  "key7": "2JYpziBVU8XFgjfs3y5pVovvngdyVreJ9dCGbX5FeCUwdGr3Rf8JcjmnGkB2aoMuFNrYRx3PjMcYGB33cxZitTEJ",
  "key8": "2fkYzkA8opGBZb6tSb1ZpgiNi6NGmrqgFnKmmgGTBaFoA1nMrmtkoCTyaqhi8y8fk5pzU3FAeaZbhuFDRK5epxYz",
  "key9": "TRD6AEPLr6SAmCeyHERTzJF6abUpz2nfZCRoezCxsDRPTEV6qrekkC6gvk2prStrRT9cpWE3be6gfAy3SFhREgT",
  "key10": "33QyYA5F7tEUMdmaeMdMcimHTEEsKvQkVoiwequbV5LfpHcsD9UVMPQSPyuxc48oXKSZ48WNgBDsd8dAA3BjLJLS",
  "key11": "4XA5SdiLSTc97PSFN6sCzTrE4QSgWXn3vpqmVtpLzgVEMuqfkFt37cpSyuJ1hHJiYjghy8VcpYVxEvWX3vAQgX8E",
  "key12": "Xeq3yaaeD1pqpXqheToFpXZ1DLYRGyxccyjLhYu3pKETQ2bPzR7XZtakMLiKMYgFpENNXFbrHeZwejht7YAK8Va",
  "key13": "3Ja8Uf8rgi9X92i7daQwpLHzuXyBxXZ8ENRjXhd7Qds1fSpTnex2rBcUjAnRRqVFJt4HuQGvb8e5UHjLKTi7Pikb",
  "key14": "4XMtEwcNDKx9FRQD9p3ooTCw9obU2nctKGCB4MDdqAEhQwHMdzdznyjGwGmzpowy9ZesoG6U2d8EMYJjWMpmyfeC",
  "key15": "3GuDEjNYE7pc3RpHNb2vLoLabM29JHA5wUhNNkNUuMFaMrMmuBsbfNkmStChNJhEC41bP5MTFkmVtwvD3Acyse9B",
  "key16": "3gnKVEkxWtQJuJ1qoJmhXhq5R6431tBC4a97T6jwUeFei67pRd27V6eh7vBidPixjyNi4mvCwEJRoxRtFFb7Ph8d",
  "key17": "VHr5rwi4cRuFeoxWeDoRNcRBDQsKxYpGB1i2tkkjtHUn98gu1BePCR3bMCUcAAo5SzMM5vB1kiFdi2EeYDiaKuX",
  "key18": "3fPUV4btBXEomLGYtjJLeVyVL2vwaJsX4rofYXWmL9D15r9DzeT8LETfZWFi8ynpLXziiBSuc1NtcwbbkEpnrwbz",
  "key19": "417khbmHopAdPpnKT1AGasRYwynHEn1P6pCf3yyJhSjSgjkMDcq3zCAvqtmhCmCAJELLCA2PeXLAkMUMwpkSwjVz",
  "key20": "5RDQKkwTd9oXTmDAs9D2pk2u5NewT4u9j9N6TWAW2CCCSheoxSW6YUFJXuZzT44ntrYLWbMdx7ySQbdozwEvgEgz",
  "key21": "2K7xpErc6Fp5WA8pNTwpqFxUXgYunuskKNjArRsS1Y5iMkwVbmAjstXdTPKSYzK2HESgG4sZVjHCvd4ST5gfmSvK",
  "key22": "4WjFaiGaiFrjTMZR4jrfcijZv8ZArZzbDc9yfbyWe557GifjzXicuZv9zANF8faWoLvPpR3wfoJodnSrmnC9Sc9d",
  "key23": "3sX5hMeub45L5pdjiewWzcoahMpSmq9oiouKGrGFAnWsnnYMYbWvhSHUZh4G3sMDCdC9Rz1PKQxSsfFNeNqn42xo",
  "key24": "vaubs3stut71Q4QLGJok8MbNpCq8vociQPwRGtE3oZ5ZkhwvgT8xyDKzPKw5bairuvVU3pfUQ6e1aMZfekGN5we",
  "key25": "xEQYCw7T8pAV8WDrEgqWKWFae85bQfNcaoZLyn7Sc2n1kRt2eaxoJqeZ1Pb6jBANyZ1Aj6ZoYrdakPoau7oMraa",
  "key26": "ZL4GqVahgHdXHbkDh715ZdCDR6SdBunUXg7njCegioi8tBqrdcMgD3DfjEeoouR7y1m22ZyyEf6C4swywbbFrXj",
  "key27": "4dnALNWzA1qjagWjbg7F4JQrJtyioJyRZEbxERjLMgSCLruHX8x8Bur7uVnitYXt3B2kgXeS2CaZYQroMfFE6CGY",
  "key28": "628WvdgyPkAV9Dx55iYx6m7QRTHUANMv9TV7RNszYnSH17bSUPpk2fwcFh82D7qy9E2KniRgjHPabuHBg3LvHLdc",
  "key29": "2eWgsJfw3Ba5SNHwaidWkB8RvSgLoxyEYK1ru2hMtnsUw5g6a3PrXRMyFkcydXVVgfg6AXDfDiucJMU7FibEDS9R",
  "key30": "4k5bUDm14MJK6goy2akC84rxhrzCiygyU3JNMbFEUHe56RxA98WJJUTuNRYHvsZEYe1ewPyDPYrGx2mTj8KBwppC",
  "key31": "5aRHQLCms54ExghQYuMHgqZrzmHChVbxYAra4GDyeqUfpE9qbDboQe9A3uTDEafawvRbkgtXXchCcz64HehZ6FgT",
  "key32": "CndYxrW2pNHU7NK5qnibbYV7yoRwVrf4W5vCrw1ubSrKD2igjEqpcRHCGKNC65VgNF1YUjb3fzvv3Fzt7Jq8UDu",
  "key33": "5aHegiSHgxoD8myH5yE7Pw424NDjANTGRYGL8RVkJQ31XxdzkFzUmYGwbfgFa6zehbALaom4CcUsV7YQ5ScnmcqH",
  "key34": "QYCh3DK2xjFDBZPG1r9cpKDpKg2owxP86KZUQMWZj9NBsZkzPcT7g3R9mq9grbGmQ8Yppk8JYcJEsmUrBSrdUnD",
  "key35": "3hwXhRkLRNqHdxbNK71z9ESUQriFqogBFWVs3UtkrMymXftRhed1y9aG5t1oCrbHENW3jzLrbnECKrwVWnF7PKsq",
  "key36": "66UhkGU148VFs7KMrRGJ5Wt7VHxyqugyHHgvhykgLKZ4Le6eTtPB6bT1GSjoPK1ZD25bKRzF21hChTGH6TGZNhch",
  "key37": "36nVUF6xDbS12SAhLSwz1osTsBnDQB52MkuEFWWSF2C76Xuoqm6rQrusxzDvx4Tp6uH6gNzmJ5i98DMJEzkWyvrQ",
  "key38": "35aysUeqwcreFZFjUkuVXGq5YcePzaPt3vhmFKLxkd1JsWbQBGjdGpNv9Ybqw5TPRY7Wa3Xnjr3391i2dwkyp3tb",
  "key39": "5K6KFgKx5291PVqym5RNoUi4dMaSe922TAyKg13csjeHpCs4iwUDLDa82TG9jNF6jL8Q91wfjTrgnH33Z58bbPtU",
  "key40": "3tnoQnGCY78B8GjRuEqQxPUemQm1j4tkNfwBguZrarZorAAiJG5xBQuwGG4NTkTFPhKUorZFgPRqCpCA77wQDKeq",
  "key41": "3LYPJvzuwWksNy2DWyVYYWXdGnw3gSKQMqkZoUKyTYUnBqXKAfStop2sxMXFLDabtiK9Lm7C5rFp3mo8n2kdgoBH",
  "key42": "4aaKbY9PvM9PcJezHjDHmqRqCoKasDrK2u7C9GxvwABLA3sPiKxrUpnuKmPzGWxvDzE4362mt1vf9dnCPEnaBMCN"
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
