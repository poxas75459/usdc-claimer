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
    "3qowYDUpuUExj2thy3ikHKb1tL8wuS4hQCQrGWnZ88FcyVQxhT7KaUFutWxsZXsbKshnGALFqvN9xZcCxRdh39wM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MocvPKamrXb7LpQw4aJ29uQFtQV772HW4Q5nd3wGQBZPYv1Bnm2XQjuYVgHdrgNbtBNfgvQXtSYs3YhxgfJsEKF",
  "key1": "27aqJFDEdGSK4yfyRpHgbJbEQcQPuKxqJRWVF6gStgYgpr5XmNK7d6bmViFxGU5WazYCXFnzT9BVyuY9hTB5kEPc",
  "key2": "32SgVNZNLXEfoUR5KnBqvpQvfrMSAdTV6K7aRgnXmoTwU71RHeLDq4isq8qKA3fUtsSe7PYd1pRfuUUdjXJVB5jn",
  "key3": "21kkT6h6qnYKgVQ6RsWMFNz6RKA9EBMMVMR3vKZxXDqPSZARCW5PsXGP3pMqjeS5E2z8EkhLr5MCeDML224wovgE",
  "key4": "62ssW8K6Zhi74bjF864TM74jdnGcYs6auv7tGBMk1GV5zfx5bBqHrjLbZeWTSRogbT7Bhu7Fvb8QCX1R5J4GAGGj",
  "key5": "ZLNfuinbBqWc8wFMLc1o8zZGKKVR3RPumWpa6P3hGuDvmXqqkZm9VrezCeCYh4nHg1nB3Dz5PT44B3aC7NyeiSQ",
  "key6": "3FKj9NqGJXk5C4XDqJQag2ahe44PcZNXaWybQb9Ni6DS6XS1PyLJdv17sXzBsi8my6eUUBMwVm3KasAd3iUCaV1v",
  "key7": "3d1TWuoE5jbycmHZpvG75EbNwSMuZSDjt56VL9jo2LCvvBd4Lck2KQq36irezHkFtDWBUJTtKTYp9uu88QNSpgDh",
  "key8": "3H385Ujb4KZDa1DmfRXk8z11CcPL4eXbSp8PoTjUknuq9XVgsrnGEruqCvGmXoxRCFr4ioBrbz4N6E6BbEaasFNk",
  "key9": "aJfktFF1v1DjxBn7E7cKENwmmsFduCfssruLkh6u2V59GwiL6KySWGGwPXEEVMSxuC7qd8GmgYt3cuCCW7xRCp3",
  "key10": "2XxmbJ8cASoMatQs6yHKkoUuUKQrrunGyZkbgMGS8miRrn2tFNryV5yTu8FqgkDo3UMG1MSGz1PFJHHS2ryy8GtM",
  "key11": "4eeLoy6faaqT2xpwW6n8tTCdYxSaJW4GXNQsRxoVyqyozVbuKUy3FnMS2rf1pqm7gwbHzCju38p6XixBbidNpaoY",
  "key12": "3qYyYfB8U9TH9eeJwXcspzaaNtuHp397AdP8fsPghchYCkQpr9f3D6rEqSCVboENZTUExX6jsTfimB1g7KCxMPBJ",
  "key13": "5y1URA9HxhBYLtzQGZfTvpAnp1DDYbRH11gYrdR9jBfKwkR9tLZ3wE2JzDYytYH7Yyxi9uje3gA2L6ziTGXZoz8A",
  "key14": "5B6qugYY9X1Jo5cDbfrrqa9TPeiDZghGyRVV7QHC8ByJRFZw51UKhTcQ1hTZUC7U73RJcsYYioSiST5tDQ1zavNY",
  "key15": "3iVDqNRpTBfuws8QuejjDSGMSFhndPDQVRQrQ4p4Lmv7ybx3xGFYgMUmFcA5RNtQR51wXBPHKds8yi4KZSMuZ1ae",
  "key16": "aVPFQbVpp6kxV8kXtzgEUY65HhJgy6f4RQNgX7HfzuA9oerHzaR6KmvtEAVz9GHNQYo64cs58KMsyw7QNm7KsNL",
  "key17": "2JHaPeeFBhR1uEhYAUdczfs5kFq3s68aEcHMWycVpgy95B4RTjUFNTkD92S8KbP3BzUTLMDHKddDzutq7U3mT6ay",
  "key18": "3gM2ysJzCCfnXt7PeJmxo1iVCJ6n51KhnAP6a38ANbmxU1HT2GLaBcTv9M2uokqiWSpSZtXgSx7drmCG6zK6bsgX",
  "key19": "2bybuYXatsxmiLjT3XqUwuDjyEnYM2QNFKraDepFe5Cmcq2PbpWYioW8jzLK88L9PYpS8RP3fiTYyCDEeB8tNeHE",
  "key20": "bJ1U7xXBdkaLERcyExR4rh9k2HD1GQv8VKAGQPVdopmhUL1fTRTGG5rnQgYLDJMzsEvy9Q2CYvqL7XadyGxpCF6",
  "key21": "sMB2XKDAhnrN23FuY1gtD6FUN7MqW1PJTpRwtfRGb5XMqzjFeC5vvXPYiChjvRtNKeayufLEATnccR5AbE2HRvK",
  "key22": "41cacbrBKpiUnJkmTyzXnN5Ut8KewVD3D9Mb2ztrCVgHteH9WuWpfkKJgYQv3yNMvYtur6y2xWmLjBTyJmBjxAVv",
  "key23": "5sJrp7D6RdRe4ZSYh1CDw1DboSmqCWrHJCFoLGqjVHjYAmhNiTgsaUzJwJeoTeqEfGeRCYQymHEYDkbs9nJiFn38",
  "key24": "5RsPYnGUMCvz9kMGvncFoL4HpJJ9ioK1jpBkb96JWRtHjU5k94Bv499t2CCRK7DXWjta6kFNFspCEhv8PKz6QVqC",
  "key25": "4Pzfn89kUXrNCgRxpJqscvanMguQGgQizmgyizQRq5fSdE9DgbBRaQudyrRMAeW3WJKmcyEGqNP1NDtoErkub6NE",
  "key26": "3pCJF4Qnji4pRw7jNhQwtHRed3rzKBEHb7HcAoUrDeucM4QkULdFcoFZ7mui1VCo7Hh2RTQGcDi5hzfiUUfpHTHs",
  "key27": "4YQEEuTL7wevESvQxSAf4N1TYRzjvR95n6JMT3JxZNLAoWUP1FbhMMVjcFLbFMZBRyivw3WunxYmbSVJkf3yj6AF",
  "key28": "xfzrueLuJYBkP3rwWwiRdk1tut4BfRdGGc9iB7nC24vfQv1B2f4vD7eCfZFgYQwFStGVtvUhnHAvDHDU2ctdcnj",
  "key29": "4NVqf4wBc2DucaowjaCWPqQJZ2WFKvKHzo3yQL67NLxfAmaf4iwSaMWCZMFmiMf1GJG7r2uK3LdiS6EyK4YSDnUQ",
  "key30": "57qpGnjZTNx8kbeno731bcXdcWaRMDwY97xXH7mVFYYsFaCxGBzb9rES1cTzoEJB6wHfSP9Z2iF4yChsMyCWaK1M",
  "key31": "5akczNSNWgsLfV71Ufu1b52kcYMvx8wF1oorCYSvqHsRox3ZQdKQVbPmMLjCzUbgn9otbvUuXpvuiW9QQBZmyq1u",
  "key32": "8xd84Y5B463R1R5xZjTMdRRFhD752EJLLaWAC3t5Z99cBuVo9EnT2pAkSPeGtFNcGnfMRRuGKR1BL5mAXp3gUUV",
  "key33": "3U9WNDQfPFQEmxiNxjpcctxgz26uqrz1fQXaB6xZ3ARq2qVNLWJ11tsxtvzGnCxzW4pmUM2J3qQSc6xC2BV4xBgA",
  "key34": "5YeyGyZXQJBS8fdDkn64qb4y68U7eRpyHvhdnJZgyUEJBDn3xsHFEKspUNZyvdNxLeH24cYjjacMDVLGYDHAbJsL",
  "key35": "48X3SpR2yEKq92hb2JupUwvQ2QQeDzskebHuNSwpdR4ggAMpnz9tY4yhcba4pL6j4cbGfuty6iZLifVRobYGbt9R",
  "key36": "f8bM1inNU6Ru5cosANLmdqT4gifgFF7d9cU9FMyvQn3nEZeQb4wzCDpkt8UqRmRFUwKc1ENT6vFt4m3zWpBezPG",
  "key37": "xqCM9u7FUUQe1pgiA8FzHJRmmev1SeM2owGRF2pX9yQroeYUbwLTopuHghPQ7xx5HBK6PKdV4D6VT6QfiZvFTKa",
  "key38": "2f8ZbNHNs3xM1sHTiASpij79GiX8fdaU7ub2sF5gKp2s6rW89YJWvru6vfZDNhU9o238gf8jz9ztbiGkNjJaqejL",
  "key39": "3BSp4odk6rauCLHH7nBYU1pW6Pz21yKBGp3Dcx8z1mMoYSNGJuUKDyHNWH1Q7cZ1ACNWAcD1H2mPsxr3etVavoUM",
  "key40": "3P8GsjX78W3D7DTMCRWLn2rfvskrZ8Hy3HNogowzgHRCKaZ2K5vUKNUuLuVhG5zRLWPjCUV3vVSnuXRUm2QcR8Cv",
  "key41": "4jiEL5ZVC3F5NdhMnnBCWpDhBZ4FSaJxKCewHC7e2LNXryuEpAUN6uQnno1NzEqw4t7gbxcqvwN13AWfBNfLpRHN",
  "key42": "sn9c5eWAWxE7LCobMNPSo1aGvJYNUvKe1r2EcW9YccAeJcoLZA5K86vWmNRuEiG2FmdUumRjDHsBa6KbbkvqGNJ",
  "key43": "3kPCf2LrrtZzDnxQCpZv7zqLi8oBhRPmc2ukc74158r3yoLs16bBaVe1HhWWwVCoepPCM2AntEGzd9VNLS9YfQGd",
  "key44": "5CoQQC2psDsJgkmYbEsojmK7CmuvduTYB1j2vC2nNjTyMwmHiygYCvSdK8WxiV6cZWW4zMAvo68rk9ZhiMMj65u6",
  "key45": "5ve5mWf6BVRcK4BHcYwZc92wjuMcDZai1yMjgZC4HdKYAb1Wm1CaPNFKFVaSGNAdBDS5BtYxRRtrTPNfvSjnXt2N",
  "key46": "3NsvTCguwMzQbecD573G9chEjMidyGmrvWbjGTiKBvzRmjmbN3QBpTqco9kGrBTmgsDYCYjTrMv6qcpjRvE5MJoV",
  "key47": "sGFfrGykg7F96uQEdZPGJKUx6gs2bXe1CafbkYv4RdVcGYVigwCufFjG8mssW1oFLvRxpqGTv6h66NbbmkQV5Cs",
  "key48": "2Hci9rHAmXhHUkvZ4E8VSp5FjV5ZyxDDEC8AU5ZFyD9tGH2TTFLCwAHXsSZhPHVuKj2qb6RCtC1EAnCmVfY2nq8S",
  "key49": "SE4ZvTvPxAGG4DKfmmzp2w3T16sG8ERPiYQ1tuyPZgLniNgL4pjsq7uSgoGPnEi91Barz56itoPURoAcm2PEbai"
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
