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
    "saoZ9FPh7KDiLMzg95PZDxatEyteHm9P9eCrAunJ8X1pQST54RwhWxz8ZtE8eX2xgbzDJSyce73ryECJXJMzqdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSsQQMWVpoGinffjdFLv5jRVST78RWtQToNuMDcptqtA1tRanKpy7q3r2FAyPvhbQJMiWScLYCKwPe9cLkC4yxW",
  "key1": "5sHrKStc9K1oNVaAUnUUWrm2MiFZCcZyMreN8EAVLyPedEuq8JCwptpcoXdiMkM9UsbMf2cA8B92zQp9ucVXkA55",
  "key2": "45DjY5QeMhQBTw6D6dUcKhBw2myQoWEBLB6nU6vgbffTtqJKMyy66tNHTVc226SndUqt4YZ4FNMhmMWjRNK2uicd",
  "key3": "2hu2MCfPTDRLwS6LZMX56wMnZhLKjLYB782XuAQ3Jbcc8Jpd4jyCZMyKoW4HiMBVEo1jw1ctzjnWigCerVKHaTvV",
  "key4": "374r98Zzj5JGGEWwoTRohaxPwEF5PH78qx1mdZeS5HdT57kNAvBcLqGNLQmNXNCHurUrCnSbdhe2h6uYXczZ5LdT",
  "key5": "26T2CYkcJJ3wHYtoJc9zpGDvMjGZe8w7kRV2259zjEFYPQYX1jKtMvhPaqcYzacs1ZBnzzd57SmNNaC5oipnCbQo",
  "key6": "4wo6VrZatgCBU9kBGTz44nXH5pSf2j3Af2L1uW3dteH9kQZWgLdjvJwucSQdrmkwyED9Cg13FsXz2Jx7bkFthtfY",
  "key7": "4EAwFEtNtAz7dz3NVNKAo8MStHAAdSPQQv9i35BiB8EunZenebmUwyRCd9AXt6GitukaqrEUoBSFzXYR2Gzs7XoT",
  "key8": "3TEM4v3oaJahJjLvDVSxZxvBaCyYVc1RXNdXcSG6XVk5TvqGLAsDjZCpTDj3p9SUkwxtRwiWmUmni3J97WGnRcib",
  "key9": "4x1Q3CEYAia55TCZoNBMVeT3tfM168ZFhaUBTrFHfk7qj8Hwv7WMJPkKW67Hvia3sd15ffYchu3oPriLCXKxVjQq",
  "key10": "4vCnSF4cHYLQK2Akgr9EZqM4a87AcwFtJgnfEYxr22nL65bEW1KHvtzUB6BvdDUdxXx5a8BiAeGjUQ3swpyVhjfT",
  "key11": "H5LiJgW1wEKzCBeUZ3MZvcxzjoT9nkusHeKS3bY8QtjberR7iem2WTMV3EBq8Jv526Tp6eJ63i5te4WQ89LBz5t",
  "key12": "28Uv3BNqzkn2uvhpyvqrmU7ihNdaafBkmPVChVXAU4fSJuVJG7KxW5uLuvQXdqNtV9MxLMH1iaXphEj3R8nbmTKp",
  "key13": "4VTb8Qt4UYCD7xUBma3vRJ7tBk5NVAYXN56DVRfYi6WaD44Mw9hoymE6wQN8t1XVUEqtz1sTKfjQvwnTFFC7Krpn",
  "key14": "3JuVrQgmwaCbWAeW9f8vFYw79Aquk7jxQrSJFKViKqS9yDfExgkKJs8sXG1uyYjZAQuJbK1AiBF9obAWrCwnBrG1",
  "key15": "4HGNfuw4qZoG5SnkrL9BJwSCNR6YgJDbjgdEcqEtQrDfTWhphDagTJ8BS1HDGfcLT2ZHvcD2Apj8GaJVPEGqh5Zt",
  "key16": "6gE2d5MH8khuk1X3APrt6VksC78FGAkHCHeb5nHaDijNZi561DZ8HT59MrGsEZkJQooVsYuhYo6bSqUemHPyQir",
  "key17": "3DL4sFEXLZx4jASZqR9w3TEfdhXUxzZ3Xay4wdMCfk4eCitxQFo6tDaZUqjtUxQH6hMBfyTkLC1SZCLSGmXjqMaU",
  "key18": "5LhFPHK6MFt7BFzX2FdhkmV4WXijoFZEQfpUkpTi75Ddjq84B5eLx7jtMmE5Q9feSzatEWgp6ye4aYEskPFzdRm",
  "key19": "38kM8wjsAMYhbMCkyV1SQ7ZWYZuJiZcWJFhSvqTMRYN3Geo4e2FxpqaipubYhH3bBYtoEjCd8gNmBAPAmDpfaREp",
  "key20": "2wNEyaokgFS5B39XXAQWxvdvh3RYeYbR87HcP6M2EEsGturSzwD9cn8GdGDGFhHYHqPN1THvzjDVb8XQJkHAUhDX",
  "key21": "3igrfAYnD1VqhQUM31Ta9Eb4T1emmoCuLDrz8KS6saxMp8UvPS7UvAVZJdNGyjRQdnmphhFku6smX7NGdW8SgMSW",
  "key22": "49EbSLyKGNXSWhSQsvTGQPJu7D2SBkyK9zfwSyFuUHWNHDijrytRTqUsMynZaAb1vBVGBdfyxg5NYYxXumK3wZRC",
  "key23": "2JtLZncLQMysYftLEmGGtatewdYZ7JCCEMKGuokiati92rkYEpjbXqi39MuYiDxciKvZdXnPbmUztM4b6a2KQv7x",
  "key24": "5Zv1dMnBCKTkrpsBrQVyeHb4Bpaz4YdvMZ5cvu6fdzRtRsaZUo1J5pmWkuxYRqiXyqLmHLHY6Uezur4Ab71DQW4T",
  "key25": "3Daoh4FDn8KvkYf6M5s8219nNyCMd1cyd1drqXWBMBDqPGV7ub1EwXh1Z5RdaKNxEk4dfnApTwurMiMoHF31Lfbx",
  "key26": "2BKokbspkNfNx3uUsgfzDAygVVEQDHqWGGM6KnbxwgWky8GpiKfcJCqrN2ccwLJVrfcbgu1wZuCVwGxfP3ifJkC2",
  "key27": "4mbPqb2cYotwqcq5Ypsj1w8spQjXX7QcKdmBiJn8PBg4SFNVjsTfyiH2Dfubm6ans6V6rgaNFdsBxz7YUxaLPe1m",
  "key28": "ciEBEaVs7eTqPBVLxaiiLqvPt8LbCuc9fKWZYBMKUi7LXqR47tTnDLhK5D2Exf11Q8W2ea89Yy6mhQiiKJtyDFh",
  "key29": "2QV5hCoxa8ZhueT5K9zVENVqs5rTjhb8dsQnEyzALHoRtGnL1F9tVY2jb8ppBy4doYvhXeAFhV3CLMsm5pdruww6",
  "key30": "5p8SSqcsUzZCAyHkCeUKv82vPF2M1gpvZLQ5ETQ2iyoszSiEjADq4jo1CgaPV1zYm1Gjac25mzpZcryCsb9Ascc3",
  "key31": "2TZnWAYkzogr2Pos2MqA7pGk1yTEyARvTwPGhPWjhTr3pmWQ7Tobvg919D14zPG1xU1nTQjBvDDhoDXVGFJsZ6AT",
  "key32": "7T5fGG3qfFwVCVQUUEECDeknb7koAjHNhDnTXVqMd8uWwJBZ533b381q5qm8g7YgjwGx21c7trtvZuW6agXp6ZE",
  "key33": "242szPg1rAT8aj5RShidpcAYZiXwXwhhvpRTuE5mpqjzVycNYDDp1Nig4UrNV8powTt9uSzzWY1HXazTpi2Dj8c2",
  "key34": "5RuBa73G2RVs7xZMKPLiSTxUoQHeEFiitBwMqrodthwLSssDxptaoKbhUoAfQcYPrPN9saHnydXGS6KgySK7RSCB",
  "key35": "4S1XVutnCQ1XYAPVhDcHATBkqyBmhb7TvPPxQm2wUArW6fMPx3UocxDBtVdbY38WgNp9YEoBEwNQLPV49Tpw4wQh",
  "key36": "3MxBNCJf1wu4hMKPA4L8cyZxbymqiZkuSg7KYvUxZkvDzfDFmFd945NafnQwhKcY8FWdKMDg6YwyCTMLhv5BiMKS",
  "key37": "2aEsw7nhsg95iADyHKQMUGPsD59yxFjogTfYUTU7HxxiiVcBQaGmhDJfvLUaecqyn4LRBnze2PqCkDNs5ER94ao6",
  "key38": "2YKe1h4EYhaAXgkQSkx8P6As5Wvz63N63WkqDHHys5R3nSam424VCwdk35VKjaM5kd5qyzYPQJLZXdJ3Jsp4ATMk",
  "key39": "3WR92ooDvRRdvxCb9aQe6GJEgAFRH176MtFUQbiBXLEZbxKX4j6CuN6Vu9g7a47dnYP1u5n76A6TDbiC3GmXJzM4"
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
