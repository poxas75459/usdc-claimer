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
    "GCPP9xC6y2tV2ngUFiSxBkz2H7WPx55uEPxvkmxHs6KzchGfQRqgFeMzUn6uwfHDqeWNvSjmULDMmL5QVKUcJph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPzTjrGxVPXbwjFCo5rNzaDUFvNS5Q3LVJi7Bh3ZD7hA1Swrbf58n4J2ECeXxrt6jHHbgC7vdgo48hy5JBKMsTX",
  "key1": "45QnUwivDeawgmPYQsyvTHEoPyPDyEaZYD88LCc73n9SHYYTYQs2rUdJcaZcR5Tg6S8SokNqyfhcCiRZBRLkxiz8",
  "key2": "36YokTtFXhBPC9xfeCvAfb5432THB1S6BpnCvXeQVHvQzGKrTHXMpVhfJJmrmx3NjCtfxXLbKc5ctA7bT9ryJYCn",
  "key3": "3Tn2jtrMSFA7k8X7vQfSHhGw1eib9juUc5avxotCgYuAFXzcxVvFbm4Ewc1XHDnWpJQSrkEurfwGSuBQJhU733ex",
  "key4": "4sRmZuPDFomovfzeua85wYTJzWELPJug6gQvCYnrfh7GV11SvxWm2px53SbgwrqtZsJWSNipZWBkHyDXdAGaJLBY",
  "key5": "49iPgBmJZGTeaexDzCfZzgoLFNAeeUJ2MnPxsynsjhb1XikWayhdSmjSCrikJpGQG2wdpQUkkcA7p9zcvgnYUdCu",
  "key6": "3g1pLd8A6A4b6pTFVRCgA2JnkBZ6o3R2ANgb1M2GFWbnSi1wVtKmqELfgAK18N2tZFeFCKwHK7usoKSML9Kdw33r",
  "key7": "5Z7CoEWh2ioGeD8fPwet2uKWDtNG75mTK83EqP8e8FKq3NxHmqxmvMXHn5xqdXhxiFx3FXxag3W4CL4gxzCQ2aTW",
  "key8": "NjWE6kawyiC7CMAKRsxukuWfuMs5bUeUSmzsXPHyvVFDc1mdRWr6GjPCeJ6Typ3qqhTvaybg4etPajs1bGtREmm",
  "key9": "2ZAN7f5JZHkDo8K8ZhUEYAMSC6dPRZmcGidXYf7JwD9E9wjtCviZ1oMqMqQA1vryGBtDWLHvBzmngTeLjXT8tLfV",
  "key10": "3cPSotrev8SRActBbVEXYW3jDWJYXiUeQ8ZNhFAQN14PMHueDxHnZpXe6WTVCPhejF8Jh83gwMYMfEud1AawSGcz",
  "key11": "3JaVstYjiWRWPNxGpuDCB4BrY8qzLK7hMLP5rwkU6BU9JLqvzuZ3hbxdoJpa9qKoBnNeP1vtFmPm3SJ298vQK34B",
  "key12": "3M3C4H1Wudewt1KZoGY2FAhCKBRmwAuDPZL3mfvSRsBRaEmyWwLLcLuucrBiMqPgFC56Dfpk3Firhb4skva5cu5M",
  "key13": "2P4ZmdSk86GjLe76LUHLVq7Ue8B7NAPBUydFnpusY3eMwEmBNMhk79xSQK4XWh2uPqBntuGa2bfPRSij2G6RpW2Y",
  "key14": "5Kk6SjG4R2Sp1b3oaDMkFpso7W6ppUCJkDwCirWmFrj8zLA3t3vc2J39tEmBAXBvbSQNBT43nWNiYeBzwBsL7jLQ",
  "key15": "4gCyyxjjBLbJGQQweuzjDVgJATiQ5L2JppVF1D11hhSeKZY4LzZ8i3EQndfzpv1TH4jwEQrKbxu1pjuEZEoxbM8z",
  "key16": "4iB8gjApGPqkFhEewgcaYREMCoSux9ZYv1A2L2MdrsVTjcNorn7hM7rzi7u1JS6UkizPPZWGHtFa4mNPmx231A7q",
  "key17": "Dc8EurCQQH9vh1i1uhDD1UN39mVhPxf67BndJ17Qh9WhPHkT9t35Qxda6mxhkuZzWt4oS8bc6nLs1AG8XHqvV2w",
  "key18": "3eDAk5BzugSLPwiUaLPFuvWbQQmEMatggfLx1nxouMih42xoRT82wLtsgzYDnVjiBxmz7JzQHi9JLUc1Hpp7xmBH",
  "key19": "3dx3JAvuKPF92ZUrFmP2MDGhfVLWhrCa7A1V3WphRLgkrdeym4Kzag1KdVYpGYPuJTXu22eXw91WRZWyXRMCMr1E",
  "key20": "8eCSZ4STgfCME9suPEa55iz83J8QefKPTJcgm8ymcLgh5af3ZiTW8RftuibUrCPNqeATKCQqC39EAjxP87xwhWM",
  "key21": "4wHpKeTyF8reenSQS5Lq9gNu8ibj3xQmzosNP9kKWUu3MN4LSVqsDwvZUT4dAo9j5pnJ5wtYcemmu7USqBAAWxj2",
  "key22": "5C69USodFCQrq1ZAWSNvgfrtA6Qcspopzdw8mqgjFAf1muYFc282Jv9jiJ1b27Af1QBQdxrJ1rTX7bB7QBZePWRc",
  "key23": "byyoZx9FSaFSt4g4jPY3QP9XiuVU8o5bQG5aTtpSdSRgfry1rDiBh9UVv6no1fjCmSR5qa65UHWvet7gKN8mZzG",
  "key24": "38GymfjhzxhoxLdNsBJrtHrXUQuFTrDxwEoy2CUrH83s6NgfAGYGbh5wtZEtiiWQWzvhJs5QSmTEMEet1iGpuEDq",
  "key25": "3asXKW7g4Ukacs9z94Y1b9p7jokPXa2D5JtVc9QvrE4k9aMgdNd32Vmv3DJ9PPC19b6DkUcA3TtmgRKvojzFfVC8",
  "key26": "2FrAPWSFtpX4EhH8Y2Uvk2GcBaejXV6BtDzFTEAc91CkFZW2xffLoY4BjTBUbFGfLamWEwwm7PZSkfx1HjAaSRma",
  "key27": "5YxyXLLf9Ana5D2ALSXwtVFi2otrGnoSg1avXs24AQsuhBnowGi9MRr5ScqRA39Bh1fdye7yUymPTzJtP8sMcJTh",
  "key28": "56Y9Pnx81cJN6fbAtoJxu6wHUbDmwrVjYhcvJgQacjHVTUUVz2w25j9GsoBZ2uyLxZrgRjGviiSXN1rfRNXBySJR",
  "key29": "5MuZbCWZMd9zDo3sngDRe1xvL9vHRL6ZqyVpKV5j6HLp32c8ct34HGVxsYH2Wi4ssCvaKJGm1YMYmPZgjF7mSu2U",
  "key30": "7jhgaFRMGbpdaRc4LGf6zF9FUPnn3PHEPVux8vPLgex2Bhjst2Rq4orqg7puPCJf58325JCsACKE9tUZHhYnPre",
  "key31": "55oyQ5dPP93jQKnS2ordWSeqc4i3BKCujZ2xDGtRaURmVqYVywhrdxtd1ZX2sDLLiMBVR86PwKD9ihLeuvvdwXT5",
  "key32": "MWD9vMTXG8kbTVj4RxKPsXzJ5n5aNQvkaoxWm6eRFBnyhoE7QzQL52e4iJz57tPicADvLgPCsgQ9BqNmX1Y4T7N",
  "key33": "3bjDkYgTcb821j7Kjg2B7Ma4HdeQgTAoT1RKxBxgb5fM6guygXz1db1jAABQLWBxR5e6avxQKdHn476TNpwRqVv",
  "key34": "WNAfRBxe4AnENVjGzC1PZHrfP3BPHDmXW342HqCJwcEKENnurwiyb6sqWYjUEYjZZ9xxJWS4bMnuhjCtd7DYN1z",
  "key35": "JifzYQpxYcybVQ1STFVDPy3dzDLwstT9QgCSxmkVbbYUf12brKUbmVoB9ooF1BQmdT67UAc6KjHNvsXrLxRwXCB",
  "key36": "2pNwYS1qHPRvjPLgFjEXz4Fwj1Qyf3xR2xmD46QtxLCYGdztPE3s8wiWkg232t9hA1Vc3YLuRXZQb5JmT1VRcYAw",
  "key37": "Dpdgj9WzSCmTiRdK6ABFXT8aQaccwBW374KzDixnv8skSSDZuxr4tfXt7uVm6zTzNEDJTrNENpk8WeY9DzNGwTr",
  "key38": "4w3VdtMNzPhFEaqZLrmGEgVPqofUGCqSiijoDbj9eV7n4ezpqSH9AgGEyamYT33eZ3A6kupU2qwEUoVaJRA4eQYP"
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
