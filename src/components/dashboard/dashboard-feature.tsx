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
    "4nVFH4rAkX67PbJzrheWuLDBACWSfGpWmsJhR2KTp2EfGDAjHVPZvSvkeRx294JVrz87XKGQAQwY63CUrmZPfbNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59BG4tiJzKDW5udPqouePmfNYXk5BJRTcpBbkkiFvbFiUqidAbKHpioX4jaxarsNXeVwqHhnyq4MMhDJ331rY1jm",
  "key1": "4vGxdgBFfoHkre8Y6ZEcLLtFheFdeyY3caXChkMC4a7b9b6fw9AmbGqmPqXa7DZ3gTEwdkfvQkzSwDuahDitL5xN",
  "key2": "5o8ToEdehvDPvNdoZqnyqF3vJzNxAD71GgQqvJUCQFbjqcup23SPz1UPxSgSmnJb1fo4ghdufurSkbksS9oBg9Kx",
  "key3": "2DXpjsgRKogxpjCQuYbaTmCRmhrWmmrQE3Sjv1wRfTcnq828EM1w8DQGF35TiryRMuPrMAMyGLvqhS7myCBviEXV",
  "key4": "5a9QeTymPy3YoEGgHbzTDmNcMnAMgkufX9oMTWgZ7W32xPqRT2TCkgc8n4pp4R4Uv3PShc2f53Neq5Xkpp7qcisg",
  "key5": "46YJ3UBof4He4EbtUHuniAkYMk89euFXZUS46wKdmH23duTxA84zcLN9hEuiMjZVmEyEe6VS9VvpxmPHpERXW7VA",
  "key6": "2Z2TcU59rUsc7zM7cNG4jX51EFbqXu8nq6wLjyaxdjDxDw1MUUjBc9nVC62Ex8ewFzqdXmmXGzhNYKg5vSF5Z7Ke",
  "key7": "3uoyy83RcBJ1xFfzw3bzyCJJBSYTawRUsBGdmi325fVqwjZggncwwqstmdBhYJCzgD9nP493jhJEmmKE1yVazeo3",
  "key8": "2R3TrdGSGJrDH4fyrZVu23iazhiF2goEUSVg2dPV7GWNBR9R3vpNWAoCmE5VigJ5KsKqHKHNwqTruSYcKC9CAviZ",
  "key9": "2wsurP3yu6bFZHzk4U6qLH7fF59PXTHCJyCMxU29LkvfeGjXtRUWNFZ7kD5skw1MWEeuap5sQkwATffizW4CrUTh",
  "key10": "58PZKCtr6Lt3shV9SuQYTmTgXt5ze6b2oD6Fd2SFzP5PUYQDtLWUY8w3htHRe8yUY778ZdqvsKbu2BbjQJDaFmgp",
  "key11": "3DdZCpjrj37kjNX2gN16mE6PiacTRsNbpiDQhJnfCH9PQxbPhMVMh56h6uLp8tATuDb64VtiZnJkygKemhJ7k5kR",
  "key12": "64qxkPkgG22VPRvmeor84eY2gnPHcQaYcpGxDRPPHt1aXDfcFwF9tQZAi4YPwJ1NzTiLEZ4gEqZxWENALYs4fJN4",
  "key13": "5h6PQQdeJd371MbxHqXSM3i2hxNusHXfTLiUoLkXhNfKGzK9KhdmUwesDGGn4uRYHr8eSdsyzBveCqcNX7mtGXy8",
  "key14": "5F3uSaq3WeN4xcS9KCF94sUMRSV7WpEYqqZyKXiK1L2mh8vBv6ZL6Xd98ysnWrwY6TZ1osy7kGbyv8Xf1kRbn5NS",
  "key15": "1NDcMFM2FqX1GPHfwgoMMq7tonc9CsYQkxhnHw49szujbyZj8cvAm6pBrEmAB1ENhhETd9mRxGrGyQFFJS2gcLu",
  "key16": "eLmzcSLfUPMeheaFTgyW64Cr5Pv69xdoYmmo2VmfjwQMZRSQeVubUnvy4VpwpfPs9FTdATrSUbYJDXDFEwPysFH",
  "key17": "6675nJ1UzK5Vv8zNtkcnEpUDSZ9cgxPXgnbrjv1v7noTKgVCbpAbrYctzaremwaG5oJ2cDbRThV7quctnAJftuPo",
  "key18": "52MnRz72qh5dpbLkyjarhzi5gA7iGR6c6t8u32ckP5TY2KvtsrndV7xW3rMRGxabSxFwX4iimgHtwZsKcejQFwZZ",
  "key19": "4opHFD16xptzNgLvepCjUveyUuhnWfEm8omXagZLpsfec2pqb71gftEf4rH3iNf6bmrBx4Vom9ktuzyKp1dx81Lr",
  "key20": "2iFsze7pf44DhCQgi36aFb6BQNK6Zxs6B1GMQ7bTZfonzntqFPFo271P7jCAYCcH5wviMqwqbqLUAaWdKdTz7Cdd",
  "key21": "3v2mEt6pdP7LfkHwDgDgWMs6bFinAtx1hDyybqwFctYda1NGF7jtjKvfFyGpQPwtpZw9vAAkScFT66BnUJu1yfS8",
  "key22": "4FcxHqWdFbRDooHDtpSRqR21AicKBiRKDG6Tjoc9peRJVpXqjTmc5myGzjYaZVFyr8atZzRvBi4vrpz6D86D2tAR",
  "key23": "TyWDDtvBJsmkxsbAmLLMz73SCEn3vqmki1A13MiCi72fckqkKzTVQyn176QrwepmKzNLiqJCvi3gTcMZyWe2NJr",
  "key24": "8u1Ezmu9T2cdXnPQBxUDE1GeYq6PXGegK8xzCaCoDfkSwi1j9ryB38MFnGnkGVKiczPpSHr93p3WoGm633BJm1M",
  "key25": "2gsAEMsBP4aJkmrxv8jpRGBJY5uteQQWSM8UU98K7eZWRC16dRdtYAy5LVc2Mkkr7tL22KcyR1f43LHec7vcKsre",
  "key26": "2B4b9boiRubVyc9K2AKPBsUQatyTxbuGTwekVoynJM1DaPhjkxx7PyFFduJNxg7UhaELgKa4sM1C22DeyYWX4Uvo",
  "key27": "xK87GeTCCBSWnchfgtn1DzqEpunskca6mzePJdMwRY2xXoafyGtCgxjU92hhipXpnXLffMzgnbekHgWeinTuSiy",
  "key28": "2p1hKQe5TvnbpsMUC8YcqJQp56Pay4sSPBQbt1uHURKdXMZLESmzHRMiTGY15q7BozSSWsy9Yddzpm8fjqomi4Tg",
  "key29": "2MRkUeA9MkusWcFkV19vKjrQm2wEb8BCgeQbU8ZhzH3gFe7mXWgvWRSPWyUegB78Du4HgRsyQm12trDGYnFTubaM",
  "key30": "Q1pMz9SxWs2rqeVSYULEzDyNA8fdX4NnKXvJKURsNWT23z1bRgUF5EqXQTyb6vQmQJahhtvWLThv1CAgXyR15Xx",
  "key31": "4HSKuRdZBVfPaFRPejGDE1UHMtp2W3PkDswd6YjD3uznho2PX7WMC9RjTGvN9AGX9QWcjW4ywwAHrMB7oFiHrs38",
  "key32": "3M7tdv6DgtJ4c63WGp7TCE8ae4zr9XbaCNAUDb6gCVZLL4Avnxdy9NrmP6zN3kb6wTnnHkEYHCEowKMxKmD46Lz1",
  "key33": "5VFeQVwsF44jGtiSvHpYrh4MEQ3JZadsbGbQvG7AWj4E1HCxwJcYp8JBuWMhA6QvXR4siLN6Rt9WxPSfD8ZQNBiv",
  "key34": "5p5XFZNujKy6DG1AFX2VaZFuEt1FbGYSy2o3exsA6zmB1yQ4uThgAu4AK4XPaVZfnd6sKtrVeHYggDqGGoXCDnXg",
  "key35": "2Vi2ZTjuHnWzfH51gm4tcErgj85pAFbNKWznu2ZkNX3dWqTsaLELpp81jvqCc1xm4NFqou3EDH2bxYrGMsppBfbp",
  "key36": "3H3rKHwhskWdS3u3SEauM9p7LK2sZQMQV2uxm7DUTWjFCuQE63JTqeA4dYAppQ4mUXvofBz9A1SQPRdJZ1t8WEjf",
  "key37": "2STzFK3V6QGeeDY9hoU5pCTCVyhxR2oUoJcU865hfXzAyngswLYXomSG2JcPTtMVj3ceaytQwrh92SmsRBLXkg4X",
  "key38": "5jXNPCH8Tv15tjZ997XmdSNzNoG4Wg4ZarMEYaejqW3Q314sUK5m43XuWD9DPPSWCViu8zR5eRyHZBfEqe7g2hXG",
  "key39": "3Df9PQrXB8hmGpkYo4KhB8rnMnbrGEdNAeCkVLV6926WYKmjt4P3qNpNuTkLviFYcUoZt81uWAhfn7V2QJx1rh2s",
  "key40": "3oSMzjye959gXDa3MTZpwymGeoFj67QQG1TcLcEL6xkby2Vp7SoDGucwqcNTGF4iSoDBn6FDgtJ1TAvybdq8oJHC",
  "key41": "2jRVTktfDGBd18BTcFgFgcc4kYywC9Btv99byyNPbbw9GqQ7viVhDVZpJDjGwASxHUvscipUeoAeZfEBydfJibD1",
  "key42": "57yWkv6dtfbczFLrDSSvrKNsHwWoqJT9wZYRhSsZpKRPwAvbgusaJ2Z8E6Db1PawMgg17cCgUshSXLnfkBwemHR4",
  "key43": "5rEK6yHD42XZnpKFRJ4StkoRzEdzwhzLoQGHsSSjR5dESSrrgiR6CFLqhUubowH4K7xbDmmo3jWmpN6PsLLbxwno",
  "key44": "BaazNfJxpiB9T3tH7CpZC8Co2RHrRvH2ZTPxVYFzQwpjMfqzfwa349UU5GLLXp5QQ6E7z27893Z372CxNzy2x78",
  "key45": "53s49xFd1C38pyaJKg5HhGsERztNEsaK8cHLY7UrdZLJ4ss8fT9CGP2PyswrvpxeYdXNniVALBxUqurfc2LJEWdk",
  "key46": "43hAHD4o4fNh3vsSkv4vs5h23yzSPZF7J3L2TcLcPdRmtRQyQXkkMAfHEdswNisPk4yaU2ZaLGmWsnr6LYwCKH9Q"
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
