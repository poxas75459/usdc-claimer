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
    "8T3iiNF1bJrnN2WvmW6McY4WN8QFRf72ha6Ua12eVPH9TE2v2RGKZPCNCBJVb44J9wFKRBJts6UGycCESaaqpng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uLeiidRrTVq6kgu1Nd54Tk6ZSZzN9aFozLdYesagzpYQsLScb8CRAT1Ce9A9wZz8WBiMfq4w4qng2vf6gZB9TuM",
  "key1": "4j3U3FycLxcxNxciEbQGVi3hucyTUfCRz3seTLTBzUmqEzKvwEQTw2YJVDddudRnn6kmWzSWArdiUYkYKoq6cUnp",
  "key2": "2CBYqqb8NK7Taeh3pPWFSwTMHCMa1Q295YPQ9pCjh3KnqxWVuiNKSHY978VqxxyMQ1XF7U2XQpUmEBJcpb1TDYrG",
  "key3": "4KLNPq72RMkfDu9FMn7MAwxTBHrAT7ZcinJyoZt4KyQt6tQGQT2ssXXuiM3MvGU4LSuSmUs9BYNpeAjC9awwEnir",
  "key4": "oSPB7tYLCvsTQvSsD4aTTmzxTDBcvj1xvcyRSrXTAtpYjEqdkCxoVcL1pVSecMZJTQ37igrjaEYn1RyGrqxv5db",
  "key5": "4pVRCYUvvAUCT7LKgHBAAE215Qq6Zqu3FvS3HtpHkScPu11mygxSTKPzqQzUozwwHGJm6SoC3N77PGr6NorKYMHY",
  "key6": "36bx34i3GRG3qwWZskqLQxYMB5CPVUXNPp4XsDFC2ALnGvt5skapnqvXsUTKNTFLnThHVZErPTtnAPGdYzYgJi5K",
  "key7": "1wZkM6UseBomaTSHVcxzcZBi3ddkoyYpuFkmg2vX7YsnTJhRDd9f8qn6kXZSxSaSELG51mWbWfMrQtPnNwR5Dtr",
  "key8": "56TCF1Euuzwm2P2PhVJUrFcA5YnFTsXDtVoFYUgKmH2GhAAcvaWQ323utkZSiGJmRegZT7GriuefH1wSNidBdxho",
  "key9": "QKeb6E4zYJbuLbL3mBYygpaHAvSxkUgnyH2FooCdVTAMZH13AC2dJsSnjVw7bqS1DS9FsfmHR1Db3ZmFa73zEUg",
  "key10": "4bVo7iuEqMfZSu6guz7pJVpuSrMH4h5ZATyUbJSeWb4uiYHsF1QcDjTy7oPTGKadjC3SJVzQ3WVswTDwC7tabUmx",
  "key11": "4rAUfGYM5npvjQ3W4knh4K1N9dAyXhLLYorBghdxCt2AnuyQd9BUspTSqqWTLcCKwH4mMSXqYM7G6RMzWakmNCiV",
  "key12": "JBA6qs91yEts8v1PCghPs7e7pzuQ8VyYibk7fLiNEyekHsgkVpE744G2QziBjBncLGefHf1xVk8yxoTXiXCq3LE",
  "key13": "58mt2iX1t1fgDjofAQg7rn7xr6fAYM5j78b795RVMWutW1NZn2iSJNZrttduaNytRfZhqWzUHfD4Ja1RkvGSWF9G",
  "key14": "2yCbHZd655gfsZmsH9UAKfx7gaXFBLAdUwg85mRtp9DbeFVax7XRPpDjtiaQYXTQ2Kas86dL5DVDbHKJEvdvD6tx",
  "key15": "2kBtVBB1GspJDLBaV9dhxt1XtjokVSbAdF2G62v4f3VBQD4rEdWJQ2FFk4gYNbc8pzKRNH6Vtog5bYjeHWs54wgq",
  "key16": "4JJ8YdaQKt2ARQ6UywMoQVNCFKWx4QNjxTuetJF13k9XKSAszYTEApqvpWzGwGGPxi4DByvNqqrFJo1frgBAw5Rg",
  "key17": "4FhmCEs6xC2HEoqc4Pj6m5XKN3yyYytomD2iu9z9sNAPDNAB6CG8i1tk3SZ3bxiLpxtbYL5dRacuwAojVuvMLxAs",
  "key18": "J7hMXVySqYqYtdzixcuwgr1QW6dJpuvx1veqka98eubVEcw1nZ7t3AvbnnxmShxk3LxyXKUTbPWugFrv3p84iXN",
  "key19": "5EJPXxcfeSbgRZYv9K8E62FLZiCtZqsjcdSbsT3U9CSxEmySVrnmKh4ckUzeNcGdY1xetA5LfLxfpKYo7yfZo45q",
  "key20": "4XvwdTMLVKJ1NonppJMdA3yqd2wUe5JrnfrYvHceSFVNWN7HCxKmuTYceV5U9ydfznuBQhWFUxjznnkBZn4N3Q24",
  "key21": "2gEctWiupQ8V5tvbryMmQdsnoKTznCyRKevqM9L6k2nQWV1YA6etqKcJQbdY7EEioroRfTiHq8gQuMieLoPY5z1E",
  "key22": "5j54VmwRFczr8NTse8raXuKmvqigG5WNqbBALXuu8Cx2E1bCaDtg9N7G85k3Pwrp9uFeaLTjxJnRE8uRigrpWGaY",
  "key23": "463w5eZfq7ZL4dLWEBciVapt3KfbiGdcam3WJ1VQ9s3ApV71AADgWwEFyjPZx7SexHHU5skASqd9gB117vzbZv1o",
  "key24": "2gvq8dkutEzYceoqXX5x6bA9JqdirwrokpG9S1zkbW4He4jF53ZL56GgXfpmBXxox7kQmknpvEdu325wzxd5g7MW",
  "key25": "4uwQYccAcYigAgNAdfzRxZqfdauhRdLEGUcLUV1myf6ZxJdxg62yRdvWvgq64s23BQRTtKPan3N7UiztQTAq9Kuc",
  "key26": "65UGG8cSSRX1teqzTHnSTK5W2u7MJN149aMKTSwj7BMLB8gFF9MBC9iGp9fGWEshsqh1RxwR1VPmqFP727ewcaGo",
  "key27": "2zUvTm7YxSutEE2herAs5BHt34nuvnVsF6oET9rki2aVks6R83PSKz3QNaeQ5s34norcsXEf8XqkuZMn1AzPE6EN",
  "key28": "3Df35sWS4CumRvGHcbooW2cQ5iwJZ3quu7caoz8XNyhh7SUNsRXy2ahWWQMn9SkpkM39oGz32u91yU7HhjwFJx13",
  "key29": "5cSkgz8PDa8Nwj32rfHraeg8FEjLkuL9i62EqfZwmUBuGDRd7xViu7BVEifmd5yeNPVHUjCSYCgRBZcwYdct82rS",
  "key30": "24tK8sd9bnEf6Zwh3wvcV4tspr1FPzbGaDusrCRnuT6xXY3Wr7AtfkBbaVwgK6T36oQB7GGRzX3NmeRuQKYAXubK",
  "key31": "MtYZ53Jdro73qk1r2vDmZVPNkJD643GLtwHq8n6p9KNykuySy3vaJmP7M8MGkVbGvhM6xYnNGwGXKDs7tdqo9oa",
  "key32": "2MxjNjB78Tx2DWDdr5oxBs4GKy7ia6WjJKrAKkoSDR4p9GuiGPNqJHbayNUqDtikDXCzEiSKGRiTSiaH7cyqeZW4",
  "key33": "52ZDmV8KQQsWgEarv7K4kQCVnx7LviwfnuNLB4h6uFRHBcMv6dZLwMYayqMcWNNsXJ4hF9h3YxA7ibUr9PjJK8Ua",
  "key34": "4ncDTTmBNNeStgT8KWG2iriVxTgZKFAWkQPBxRde2BsjGidwLL8hLahxMDijj2mYz2WZKrm3foHNnb42GCpgnKve",
  "key35": "4VpdaKoQ25E8uRgA48qjn1cNwYiSRvxpxMRgqTDME5Ab4BqfXdgbs1yp68BZzhve2pimiAgYfMwG3yumDqqg6HQe",
  "key36": "2bZECEBp1KJgvUFxeoQTJNhS3nGCQskX6AEcoMF91JtekD25Cz8LXUzXCtTB2UHwoR9hBaCY8YrosPeFCfr1WPME",
  "key37": "4qv6tkfBW4GuyfTJ7oAbiCiuynUGkd3yNRY34qCEuENLKqSTeGkQGFrtnaPddBAfYk7ZhubQcBz9rvHJ3o93gKNG"
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
