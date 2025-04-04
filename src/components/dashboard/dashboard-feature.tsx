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
    "3298wqQqGa8hy2RmScgQqGLR8U7uhZFzZDmCLpdoyFBptQRgDthhRkUT8gMxK8Ed8e49e2kBwiLAzhprtmHTkvhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfoY7MchUSc5zzxaYBBjACRvrYEGYxcejRzG6uv5VqQvQhL4FT3bNWbo4tJEFsjbGLoRE6Eq94jeh8RRnfLT6iF",
  "key1": "qkojeNoAaf6tVn3yXWEEiniq1qtZ54XJH5NV52TCQRLmw8TtScNcCvwEY7Z1aLhgVEsvxezfWFPV8ixW4WZ48xe",
  "key2": "4n4QJ8g1ervocZWMKTDijCrZ2sFvduckp5nnirxZ33DcySd6mmQxcWQpyTXBt9LpfC4fPwRzttYkdGKgyPhcksYe",
  "key3": "MXePuNwWM2QiyiD2JLF8m4M9DDXDCnLHVSJJ1byDUSVRjRpsfCCySCY3iL9J2e6yjuDYbYHj98JFxH6DBXayBg8",
  "key4": "4ACQxoBP5HcBaJN8dYNute4s6S7NFDL2j7E8qCiAEtf5qEaAiYKday5CFe767AhKhtF33XUbXsEnzM54Xcu3YxUu",
  "key5": "4mAPTE4QiXtevwVKp6dxjLuDXciUfCXPQRuMPetvr544yLaobHTxAazXT4VtUQPgy7TL3QFS1nRHWHiGpi84M4Wm",
  "key6": "jJRNJQn3tWkRucBeH3xx42t5J1D5CtZYdVjdL21woJYpP3DPr4uoEWMr6eDJedjFmERotzCG14MGk8qLZgQHt8b",
  "key7": "37CD3gepvvLTDW5SMiBQEnEf2Kx2qS2Tyg2GR6TkVQwyuS2FGHNDBiaxbygq4pSxkNZWEyg4x72TE5PrwJk5zmF3",
  "key8": "cHq8hxfgqHDZL5M81xJVmrJetti28Y1xKMRgTinsbHJ7vJsQ2PkT9VQoFRAZMubyz8uUqumATz9VCeq5vd7tLaj",
  "key9": "4WsY65iJ1wrrP8e6LkPUYfdFt3NPeKM3ZA9nWWeKaGiksmVtwfMcozHMmLMsFbFRzLFARPLtK9p2fjPZ7Hd6q6Vr",
  "key10": "3wQVLvtpHaWt319F4QHdCravSav5Nkjrw4VDMYFPLVcGpv5a2rrVAadsUoZkASCjdnoRxtTBTWaysVcKX7FHP3Xs",
  "key11": "5J5oMXez1EM5FFbHen6eA7GyFB6kRhW5xpVY6zUE6BmsfDvaixikvcLhMrj2fQAnUaTCiynZAbdzM1QmfHgAbnrJ",
  "key12": "646kQrXPAcfShGpDVwwJFvXmKhx2SMcfYnqnKaaCkDmJb5HnR3VWZsFz2LTcZX4oAtzhhDG6rUdpSeQpA4nrcL4W",
  "key13": "63d62UsW1s4zkomA2xey9W3X4VZCX4Sq27SDmVNzPABCQ2CF33AvkAWcuHNKZbXegcSs7B19p13YsvU2kV7bEp5M",
  "key14": "4VDjorHaV5jCs6rEiLxQ2i4hQGS2RJe2rzsZntweyCyAyMfBCFjdDLMzSbH7k9Pr1f1sJBcZiuvPkyZzRQGvAvkQ",
  "key15": "2TcQ3RdpceGydYEuii37r3TaZT5FJgZoB3sRz1xvX3StUi73CbEmRSKpdboeztXJG5c2g8r2C6SCJrDfqiceneaB",
  "key16": "243MmH2oiP2LKAALRXkrYZ6ZkJy2TWpJAX7RGFfAibFdFhPYAqJ4X5P9gdgqHg18uQFdTC8uW6bFKxuL7kR77c2a",
  "key17": "32f8hwjgRUe3fTKdhNUgxdGb5eLgw4dRXDh3sdMK1jCeJ1NHEeESyxjrt4FiXoNVDBbwZeNqM4ZZXbBQYex7NkJh",
  "key18": "5xmUNKjardF6hzDCL2GvhkX2a26vJ1QgVDwEvHPXvccryytHwFfRwmFg3aNfR2cJ86GpJ3MXbnGUhsydNNzGUagC",
  "key19": "34AtF8DdpJURbRS2ET2xJmayWB31eB8K3YZ3bBVe7cPDuakXnbgYZjgGXQG124b8eGFFkGMQnAK9ckmXfv9BTJTf",
  "key20": "3Aws2cXLzkVDYQmGJ1xJWReZEX9o1BSWPZnRxpdiaJveTJkC8febSAp6UnVXg7CXj6aEKyma61oVR1sgM47Rj4L",
  "key21": "2Lw2cw2bgTZ8NsJcsUNumL96BHBCkZHuMvXE1ETkY8xRd7it5QPpfMkJuh1FFacVojGNfocBwFQLddrNXVKvirEi",
  "key22": "2rjhquAYs9eAu2y671dSU7NevvbP4YLSLPqWoMewZeaszoZJQ2WkEyEfeQ1NavgJCjv6heyFxXxK6DgSA1X4AKto",
  "key23": "5poLT9weuChJMCh5LWDEm19GMPJzPrFBMo7jcQDqwjfjB4F3Nk5bafjuBi9JQjHEhZcgCgv9kfMZuC8Zycn6VFs2",
  "key24": "3g2yGzRKDK585oTF8hV4GiEc2QpiSwBvNzcC41HHFP9TC6MArC6bLPXsJqwyh6u9HLscXSVo84GSGoB6aQhi2DC7",
  "key25": "54deQxH6mmP9mNzKtCh31W6DUgUMrEgckjqqYMa2LJLkYNgdgbLJigyrnHcRnWub49jNmr7f9zGTTx4pJ7F7Wquu",
  "key26": "U68hiyFpbyo5eJUcQcwLfzWuFaxLBJ5vbedj3d2aSwyJkRZWog8P6JoVoa7nzk3fskyo65KgfvoHh3xvbA9cnKA",
  "key27": "jVNgB2fRJhqyTESkhvAnuSoJZUsoe4RaDMQ3tZJ2mZGXo977q5KnYLYhhEuXjGao8fEnhmAXfUDm3hSuGdKQjEU",
  "key28": "2h5oEJQmM4wYxLWD6mEFL51kgcenKaLaGszaBgynqWQdrk14KSmPAG6uWExucMMbTSjs8DtC6uUv9PEz7j3dj2Zu",
  "key29": "4jdE6wp5Zv6i1hEMZZnk83rC6fsXbVEZe2X8afQvozZFCjsm94MJmAzZw1EJKMTDm6YjuRymE94av3zK6seduq6p",
  "key30": "39wHoY7Whrpi6VtYHixSbxbr7aYYwTczYrkJ9FsrDj8w1jiC4QSe9CmbhtszjvUx1fS99ex9s5f9auBZHsjvSkr5",
  "key31": "5Gj2atAwzth14SaxUbqtACj9cjZVvAEA45E69hNF6BNfnEFy5XACaqWuuDBkw7MnrF3QVXAfx4fnkdYLau4hEeHT",
  "key32": "736UwGmmcDSHDbCR7bGLRbHgJg1JV8XDkaZidhY8bYwQ5b8mJUCurJdDr3JpaDLZkPNwfdGzqqvUBdbxfHL1JrL",
  "key33": "Rr78QVBx7XVRDtNt7gC27w5zfkcszwbrMVGjySznnzKJWDZRAXJr14LWzhdbax65Tgicorxi5SrC89hs4tgdQcu",
  "key34": "5ho3Usk9NPk3z4HzhtTVRmpsb3FKjCcdALh4kpBwm6AxxaFEsL7sscfNU5SwsYPiVaR1nSXwnE7ni8jYfXoCPN6Y",
  "key35": "2cAJmiqTdprRXbV2W5uCptAsWnHM86YV31E1uhsrEZiezjaaLMHoXtFsTpuSgNGK8VVReEYn9hwKp9BkjoEN2aUa",
  "key36": "4SNqeqDFA5j6mauoN3kPYddoPHiYnjvyAH6dM1Nkoux7jQCm1xbzBLAhjfRku3u7hmCuHkkJZJqzkxMWrLu7LhW9",
  "key37": "45DzkiwPdHtSRTy9JficiU47YFMXcQ3sztd6nQqzG1sqn44FtEmGk72RSxaE7pkEeY1rRkHqoYVGjiHJroMCfz4U",
  "key38": "449hopxpNCAYLEEGm8VULSZapg1srNPJzL1q8CTvELTUv9XFjF6yjarvtey4GpwzvSezmwtVBjdnQt2aFHFdLWTX",
  "key39": "zWpvuSWMEjmQyNZk9QV2xGyD9LFGtgLsE9qphBZTesgadhAa1kwLKy9ybmpYyQihVzj3xdpJQQaiqeRaCnfqT9y",
  "key40": "2Uk8jE5c1jgALubToLVt4EvnN8Y64vrz2WpKP5FqEWuYd6nibxX1NZp7CDMqdndDZ13hsAvrk1Dm8DdZzGSyqqUy"
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
