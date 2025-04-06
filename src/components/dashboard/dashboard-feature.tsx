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
    "3QixWa5DrPJ4ZwxzkZKFKAcakCPzGdjDvTwFr1kWgKgXnY6bMnk5RUYjcLVzkNFBXeTCFvLJHmCMghF4pfK8gAkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C2Dr4mpv6KwUucLBMPsE3UrNGWyxQZbqbBxuYzFSeCkJrjbNcYVQw8FBQu1ipxcCqC9xvhrZmMa6RD14WSwKnQB",
  "key1": "5nYjsynE4Jz3D7SgvHrTnfxYtLmW2BhFy5puaTSqE9avf4fUnr7H3pGYxVnNRajLPNdKoEde9pZxCUTYhTNDpcYi",
  "key2": "5Ez1yjNQKfTobPfGuZAdcVstTLzpAfmcek16dGf6e83M38dCtp6Vu9Xu9Fm58jhXc9CoKUnrNPdxuX696UEb754e",
  "key3": "e5QRi6s4wgQMu7JwGrZtGSfhTDNi3eCtkep7RbNsNiMhFWCmME1UsTeSbdwYgkjuG1Joxbz9BjiVNk11GXKrGz3",
  "key4": "cn9V19g55tjLK1G9o79Cp1FnW4vr9QQd8Z5JoP5Xu15d6xnmHQaJmNrMnhVUCbR8AvAhUtddP8Rx74ZTpq13rCM",
  "key5": "4cGizPrjnjHVhxT54YhFq7tpp8RrFUipC7cfKGtuugwNdK1zT3rhg1jWeVEvUShxCSxUcHa5ASevp3onB3ep9dCb",
  "key6": "3wYaUgZX5YzrWLVsSCufQa2JeV8wod81N4HLaofqU3SZv3NqV6bX4riRPYp3iBDJ66sLL5jHUC4UzLoKNbrca8b9",
  "key7": "3ZTbVgj4qe1dtCmWfGTvkjfW6eSh7EXmtL5rDAmz2kbMAaYdB92sAP2jwFnJ47spntESiDSQ39DPPvrn6CJ4CN8K",
  "key8": "3zRD3hwzppW6TrTApzsrmxRgWPiwsqsFih4VPMfdrsSv8uk1EsjktVb23qKCZ7DJZReZ7A3Cssu8nfURXfevNWfP",
  "key9": "Q4bP38hc2c9r7iwnSHtWkyT5Mob82aSMkgYM1WqtDMNeykefU9aPYedjW8X5s6qzq6i4VSDkkhKo372vMatod3d",
  "key10": "4teHkoAVAVHfJq6JnmxGx6uaqfKm41HRPxqcU91hZyEv4oJTyFjFWdzEuLbLqhZDrd7314hTH1oh3kPqM3k8XSKr",
  "key11": "bvxe7UU9zPX6sLBdpZKhxJs9VSbDC2RsfdWjMoZf3p8Fkzmb7DkfVR2D96J4X1Pop9QfuUGgrrqn1Bpr4Nmix3m",
  "key12": "42ioHMjFmpGAjxGvHiztcSAvv6GTdJcp65BaSCuvTBk9WgwGaCCjTFMPgg5MmZitDfjxBT1v6t68Lk8j6cru3HPo",
  "key13": "4RQexKZ6rJSYVgxkCMphkpptN5CsaYqUHp7nv3jXB64Ks2qn55YcTMDTWRHuHr5o5U5bNbdaFsmFodqk7YybaTFN",
  "key14": "21eUk3ocST5GyKA9uE4ReZTp62MaV66khkwWNYP7JaFsoK2vDD4fno44hUnuzKUMRsLgyZXczzLyYMEM52E4tfFZ",
  "key15": "3BtJrmWNj5HmAp2Mow64D39yejYwFDF1ZiM6Np6TTjLBuumzxNxQEuoNGUaMK4TYR7QEN9HodpbMfJugCLZ67ncy",
  "key16": "5XgfmRNfQ17Ni4YEig7ExszieoW9whSk79EbXYvk7EKz84mb2dMXiQJ3dqEwvdB8qPnVEdGta8nbBtmyawpYVGVy",
  "key17": "37ebh1boRaSimc9rPyB9rq3mgNE4Zsejwcts4LmBX5dGULKdaH4TZ57bSJwC7ir6XdAQ2aoYJo7jfBNtmBEbHA6j",
  "key18": "2m3VSkPeadcnaAVjQVAEC2DL4JWrKgWu2s92pJ4nNtgYrh78a4utDWorCYXvAYvkffuk3W8zjqaSiavPmFZSSwX2",
  "key19": "2sDQperLRgj6q8MJYkpoHENsZqJmH1fao27H8nVGhYVj1A1FS9dJoJWPWhpBpFxdTufC29MRPfNZybh5MjheuSEJ",
  "key20": "2K1eaUpMrjd2vSoTRsKZwKBy7z62gMRLkspCXy9oUgTceKKqwKTriHmbvWrBCdYjKm1Kmfz1h2XcsDPpwsw1JcY2",
  "key21": "2p3G89tz48c79nBwmiPKk2Ep7pEMN9kUGpzSApmzkoZ2pWfBF9BWX8HPu7bM3aFe8CE1C4xgyq7FfS9G7BW2KtW6",
  "key22": "dhyJurpTkWSckrZURREvfKzxCFXY3kFnjkQCNh1sUopaEpCaCWMyeK2yik3Ach84XFy3U5rVfSW86iUsQ4FkTuB",
  "key23": "5hVu9E6AHtCykRdWhQdapjAhCqBEHqNZxVwkZH23mFsMvCYcfvZZqyNiPHj7TAuM6MPcSz6rr6GN22GPZVdEarkK",
  "key24": "3KuqsDusn1K79fBa5wiE7un86Ksfp3MSrdEPBjMWfeG9LFGzN8hHdWqhNp2FYcRy8d77JqBv8JfMjALkEoLBrCWX",
  "key25": "qeD6LiX15LzRgzZzeaWbbCrDkTKqQxqi23DASmR4pX1eK2hYF3EGWTSTveSLN4y237bkJKKaAXmsab1yZ2JvBHV",
  "key26": "3jUUUms7xggGYMVfexoSFDjyt8jvVQG5QdnbsoLX6NwXQ6G1MrZ4vanZsRggU2bvFcv9eBVMjXFG4sDWoVJeKgU",
  "key27": "2jrSxDUXbsEFHPgFw5gUTCds6aJy1mwiCWqW8LDD8ZkudLvoZ1f86FEAUr6Faxqv7tgu9AM2WnQdQrpP219vqzxP",
  "key28": "5GJZ6kHgy4CoiGgUsT8YvTHugyRZWZRSr7Dcb4otJW2BNKNBQnZ7bx5iGfoYSjHfSUmkW6YJuaUmpiCvZX11rR6",
  "key29": "7iPVkRkj4RPcVQb1FSq4EbEx5jgbqWCvF6CF12DovZihomTDD6WaFxUeAtWqmyjtxdNvZZoX9T6MvoT64NG7pvJ",
  "key30": "4xGKqJU2xk59abyDbebu5Npp5Ss1ZQ7JaP7wGvY41WyC2aWHML2Xzg7QjR3T5z1niXvHRyHFEJYc8YUzabUAEy98",
  "key31": "2Ge6QicJ5peRjT6wjhyuckmPqP73vk9Gg41Vdzr3dy1x5y7HKfBWqWp69NLmpUrAcm8ocMSrBLiX5n5Wz9BdJoW4",
  "key32": "5xz6rvAGkqWVJnoiMDLFDZNTzK6vkZfyEdfY2n6hZ76bH8sudB8JvKE4fSKakLcCkWsPCmyS9XBbrrdUMn6kMtEe",
  "key33": "5NyxUE25WNnn242iqauXoUTX11KRhxrkDVbUYpCYuxqCaoDTj8WcGCudZMpbTx6bgaHAk67uB8wXDad1ofp7HxZE",
  "key34": "5KmAEgznrRT4ekoRmLi77uqTua4jS12nCrNjX6Bqiq7A4UrjkqQh6A9uHbiH9eBmeW3fA9EY15i99ptDwvyx2dLv",
  "key35": "5XzDYjzdgVSafwzNaTyfHskm8CKGTWay951nGCzW3KvNfLPhxrTSyRdc3MQkxbw6u9wnmfJye4Vr98rD9c9Yk6Bv",
  "key36": "67eVCCgpULTgr4QKnGnH9MBydfTA7ds9CrHWCbimyLdz4Qesj23CH4HFwoMCjAxYvEnC2PiKUN4vdWGeqoxFeB1"
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
