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
    "5dB7cnaYPaVjWQGfzvrppY1vETuinjBmLnccs1bGmWxN9iuK3m51UAooRFCPTunngKqMYV328SrqaoAFGmLAUMJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiUBFzYCeQ8uPTEexZcwT2fEALfFtNKaWTSpYhxdy4JDT4PT5AxCEu1nPZJoswG7eNdxb59pp9qaQNyzA2jPjFo",
  "key1": "5At4S7tfcgw4sV6mSfEpsFwe6nNhkC36Y9xUUjna5p27RB7X49VdH2LbbzLH1qKhukVuqru2peUfxQ8P74as4ZuZ",
  "key2": "3uGQojsmd8T9B2k1GixEtbrkFT5zzXBSj99t1psmB7WfCTyruU2yDuUfEfZfS31xhcTfrhXqVdNToRtk1jWodCQB",
  "key3": "5qswsjwfDi7AKztCTzmgmbq3NKtYpzhCeUYq3PEF1FGL3QKvf7N55PPxsGtmHtJgBLbn4zCKKdK9hYKTTwh19vwV",
  "key4": "2axp3cM86boZRBpMrrGE7uy2NY6gWAcZkmFGVSXBCPi82djvQc9ZMCXK8y4e1k2WhWsU9F716cjZrL5pf351RXXV",
  "key5": "3nBKoozpjzU7BZJKrRsqb1ByeWe9as1Em1Ctbwh96LgosqQWRMqC8XDZCrFx4w7CRz16RDGiA2CiJVTswAVFt2ks",
  "key6": "3gsjp8Ddo1c9KCnkN77ipbdrKck7kmxn7faMWkEuhU7RW81kQojbhPWXLkg1kF1FsMcSPXFqcHpZ8hS2NuKnQuv7",
  "key7": "3osxvrw88JEYp7rS4E1jeRwacuuJKXrDshSj7XaaBJa5pFahXxanWshRNVsGim9pPb8fLvCSGpS7bgxxrJzoCzdH",
  "key8": "2bRn5TBMWskrB51QoyL9N7fKDV8p7Rse3fuPBWGAJa9h8wb683ytf4XALE8ZPcWqYEQTSbbRyeNRTkcPds3RkJBc",
  "key9": "2WX86NAXn59YF3V5h9MtLvZm39ZFqXgox13UkbjGcB6Eg4WWpGcJRU8vjF1CxcXPsyXdGTY2GAUhg25oqA1ZKu3m",
  "key10": "4nX95EjhB71URAb6n7LkXHmQ97QhXBTSmy7iBE2MQhv8f5QF45oHZHxXCKHUqFbKNK4R9iojG1e2sW5KSKh6kBrq",
  "key11": "4JcYU49wd6ZU2NKMr1CkpKdAeZ5XPUHfZKMXxCKyQQK4kxNTZnEMSR95wPAvhzgSDiHW1Po4jyFSpcbfDqiozZrs",
  "key12": "22pKiXs1xs1gBp1NPyFkMJQpmXMLKqiE9WpHG1yZvMooqtf1TuTwh7JzBDzDMjatqEy7JeaMasQtA9C4FjX8PTAS",
  "key13": "GeG2QpAxsbgo6EDVwuhxMFz1Jg2oNcVeK6UZSNABLtbYP4ZSbctFhQtzfA7TRzH9T79WUhJqxrPQbhPbtxzzRNB",
  "key14": "5aUByEW9yjEJXSXS9ExbRqznkQVWP9BjsBZMMqvxxGMx2dhEtEyo9U7JjxkUabtg5XQ4gvwUmSR8udNuUEKEHJVg",
  "key15": "wv5v8Hf95g3gVYUCJEFX3snKdtZx9kXAA2SMHL6Q7GzLZ4HPVWNB57FZgwk5n295M9pHPb781Q6wXDTJbCZnGSu",
  "key16": "65XdTGbCqM3vmD1GWPqnfVhyrSg6dP2UcXKxr2S7k37WdokmMvYjX2UikhLccjjJrtkkMxaRnHX2MxZw4CHF6W23",
  "key17": "4vgTHQ8Ycb64jHNdqbhqUm1aAoyFsPjdCEMc7JecwAfRn6hVV1VepnHBqrMEpMSc3gAGhPe8g5utsPgpaqZvZRPC",
  "key18": "31Pi1FXnutzseBzzAfjeaQ2yxqkJJ2fY1ernwNwhjfRBF6zMjUiiVtEV9Yv34Qo5mK3PkArFUKkK4bmoxym84d7P",
  "key19": "55J9HajExiwqjFrryJ2ELL1ydh6Sy5itoGqCC8YGYwqYepwATFdZni16LoDztXH7psyre9CNEx4PPURY55U8hCLb",
  "key20": "K3npad6ugqWYC6rt3Pvd9Uhrd3MXmmToDGSuXSMJcPAW7WwpHhgA4JVcdKTxAcQURaDcjg7cNN4icNLG6eAEJV9",
  "key21": "31ZvaxjRdRRJaocf3hLgY8uqxnvLMp2GgrqwtbMgRQXvyikGJn8M77YryJ8zMqco5Tr4dcRe34YpwMt67MdSAFFZ",
  "key22": "4cSME1Ypff2TxXSJe8zgVfSUEb7nnGoPYSTui6ANokENmxqANG3L1WEvGpS6XQziLMYoS5NMjk7ZQYAbpFqeKDtE",
  "key23": "5phd5i5zWzGmRU7sJf188wckAMeU7TghGx6CpazpcDfgrenr8pFYYThgopzQ7rqoe56esysMYkbzBc5ZVLg5dK48",
  "key24": "2mQvu7afNC5zdEyoyk3fLY4GgPyiinvsuBwQj58KZgpbJj2JdqgWZuHAFmvJNnnQhPh3SRJkpmU5t8jD4T74D4eq",
  "key25": "DEkhagpGkunw3MEx1RxuDUVubZxRbAda9hTpqCFzGd3ChyboyB3hAQ3o2BA92UnFHRWP5d2JZtu2j8nJnD3Sxfw",
  "key26": "2QX2RWswYdKvJm6dL5fqP3xqobSfLpWDsSKgkCuz5vmLSycvPPNhedhPjYhwa6smyyiW4xbU2mFmwSfRz98jsnyL",
  "key27": "4TdvKFWL5pUrG28sKMD9THh4XiE2zLPHzrncmGFvAAhMx2PvV6NAJfEJWHEbbx5SvpbUVBKaT1Waiff4TzvATa2E",
  "key28": "3a92y9QFXTE61zmxJ6YvmfLnshj5xJrbL6McRasKJhLv1FGGBUKHYCX6J2XRReEUYfZabiPuh97t6jg8gS45pyWN",
  "key29": "5rfUaoXX6WxhPViQ8j5t6wQ3S2qiiovbF3ZcehgotCviwZctQyAfmty7ujei7ytJU915yoNjEnzMt7qeFhA9vfaV",
  "key30": "35VNrDJx1GYAara1TRqjPCA1NU56M6DKxVYDpYf2hmPwAVuJcrJHXZA11jct2ksCqxwNbegUfCHevaKMJCaJ47Df",
  "key31": "2dkE5rnKhANDzc1WRhYT4jpdHExU7NtTtCnU6w7wnwMzPRZudmYjTeWyZmcSpe4wPrUxCYmSno2Pq4mdk7LkSdbo",
  "key32": "4Gespj5fRP4mn7enkfPSzDXzJCkyhEvCqcEKNNhs4HRjAod4BHGMm6GEayUqDJKwBH6Q1d6afDVGfoKFBjr7s5Pt",
  "key33": "deRwcfvi2ALvQAUK5xJJPGA2hNL6P4ASJ7PaZ7RXtSHxEpk5W5gruA7iCfZMU37itupuoBiQx4HtuyLqH1YbP8N",
  "key34": "dDRSJHRysBJDt8ksEPAtvJd6on5RWap4KPJdV3HW36defoZoAYngsCY2pXWsp1TA74GjhwV5rMbTbBxHHsvuWaF",
  "key35": "2HdNHoiDkbkh78YQ8ebbYdEfiqECEowBAdPTKRVKNcZygZNGHAAComi92CLEXcpMGKXSct6bGW1WHKM9Qbp9zkvQ",
  "key36": "3SnSC67JVhijRu3tsSz17euqAxELBEu5rHdSBD4kmHYUXoaED7avpnvAc3y8MuydAAjLfLicb34YatW7Mm74P5H",
  "key37": "5Z4ijrqfswSbgccSrewRQ2Nb7UvDVc18yGSERPPoNjiCJJpk2NmGRRWaJv2qQsqrnAQdQWWhHW7hS3oYRpfxLLua",
  "key38": "62Tdwq9BEJvAC9vFmw1bzb6AimigAcAqpiR8pKqWojvWBxFkWKNNYN5epxRTfNWkut7iNSYuyY2zL5pwU5ZvfWCJ",
  "key39": "ggcucgG4iVx3X3tD8e1mjPkYtR6GpnDvqdFRxPsJY3Vq23PkjuJHpAA78t4MoUa17edGocwTJUF5Pcaso3h2m2H",
  "key40": "3Y8gDhcjUEVR5MY2HuSeHUTrBZLMVADyjo8fg8xWcsuzHoPUL4rGPWVF5uEhWYR2HZ4bkhe5bUHQJeJpM8MwSmYn",
  "key41": "5eG7svXu1GxG7G1vwzBFvpYDd3aNd11pSig2QWHW3hsngHgaJspacLZk7ffdYLxzgJ3A2zcK33EtCQWBNX7E6QEg",
  "key42": "2hSrYYAutCmUqYCTQYX1v5NqL4LP56uEiPb5FPoXETgf1tNzscHCihBWyW23eVgYd13XvmJxrKEnuZsg5sLX6Ztz",
  "key43": "5jRecLuiy7NsHr2Uja8Ph5jQVKPyePWngdoTxuU9jt8jE3M4DXGmPUKycXyR1CaJ31J8FYTGqazeXuWkZkvdQPo3",
  "key44": "2dwjdps8aL1TPwdHtXTN3gMEUVjMMGYSdUEunbMsMxJY5xWwMWg9EQ1WN3q4DcZ7h9tWZfRUyeog4qc24tsYZHqn",
  "key45": "4Lh6JPpbUokKbBdWsMcGTPoz8bxTQctaH5faVpAveybvfbrgaMp6biyKZBagARhij3P8drZbKjvoPuB9F8sUzVy2",
  "key46": "5ocPs8Vu3tEySja1gcXXmyX9prqfum1t4M7SKTB3EZq8mNuGEU8Tg99QV799fqBZz51TupWaTVWnB5MPZhjs92XZ",
  "key47": "4DTe3dqF8f9uLsuemEPFb9pXdNYWviWF87EnDu8SguVtL3cCHUMrxLfq9PSkMufNzwqbYuBh7Y4aJ91rJ4o25zPy"
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
