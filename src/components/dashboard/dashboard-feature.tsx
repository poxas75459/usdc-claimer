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
    "5QBNP889AP4P1T86AJxcdqfYA5XydZCCHN8VFCk3VTtty7czgGJwFKWDXERGrvq8o6JHnjZoh2aRWsgmF5rspdPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPnDrfhEgjWfjTU9XcugtZVVnMdJiTe47Fvf7SRbSwMYmHWwUHtmpzpG6B3BX5TLf3ao48QewrdnNL5TmC4ToDD",
  "key1": "2nwKSZhv437T3U9fYrkvG2YDzbPsz6X6My6XwZ7oR5diT84yEsGAu4Da14arH6jvkboYfkMxyQmyMNcgwr6upqsY",
  "key2": "2hTeU7Lztc38UbuahqFBnHKSdem8GxoUVc3NnuQAQrM9QaDaYqjwVarKRYZYwDa98sZuXtk2xJnSkGntaXrNHAmW",
  "key3": "dQMHxPuczc4Pw8EespPrpchTKpP8ZSRLuM1w7s82EkusNHCoGHyysiDdpbGvc7zfNC2bkPZpEnqJjUK3gmdeMxd",
  "key4": "wptz3MYw4TccoSAEV9SXx6h5JHzeA5r51xf2x19Lq4BYS8dQfFUxqx7Wwo7hyZLGkpf5kjgrr8uHFnzA8BWnrxk",
  "key5": "j5ncnsGMvBH2FnPHrnHrKFxQDwuzqTM3efuHNVj2A5w62qnsk1rXmGY6xTMcAEZTCBhrmhtZGRd8kd9LVMHxJsi",
  "key6": "3m8qd6TRCXrW2u4LPPytx3z5ZEfz8qoH2sCtyscZR3pDZhufk7UW76NmSz561txrkL4QS8dKq6aUJMajAsAGbSN4",
  "key7": "4DXpJ1WpmpTmtKQZrcNBkeeySLevZHEBMD9vYTcKYkJLTL5XWj5RgmeoQkFv8kHq4PJQscEjEZT5z4X7L96BieF5",
  "key8": "G5YNavqtmSpAsz6LGhSH9TM5uPqoea4qkCSAUsEweL5sDgYp2CJBM93tXfAczBteVjno9D3Capq4CHyP8hb6APm",
  "key9": "2aNotuw6dVZA1cDECMdxWusz8MYbRsbndaXSjyznSy4p3CSfieG4LLp3QiJDXhopAqh8QXrcCf44XLtdJXFCZ7mn",
  "key10": "fJCHGwgxRqsTb7jYgLaAQxeVt6xpBi6HvqLfSNSeUzbrv4HGfZLnpwN9BzUDKXQg8b2VUEPgBZ66dPcDELSPgnq",
  "key11": "4Zgsfrcn6ftcG9WEk7Y8q4t8i19nj9bJQvUb7t61zRCyf8CyN4Sy62BRGvAwN14tD7QZS5fw3eYucvf5xSGyX4yk",
  "key12": "3dWFEiH3AcdxLEv6b8JpJEy5a3ANnfTYjmTVzuUs1Vj8waXd53g9UW3GtQKYVk2KTGDHCv4zME8kUigqLF6Va8Rc",
  "key13": "C35haTEabNwtDZc1WsbUka87PB17v7zEqLKjkTh9oKQ888uCD4DMpVDoLGGTJJcQAMvhxEhWmizy329fUTYKCPs",
  "key14": "4NyyRfUJBmp6friXDSkBPpv1sYVYfCb6iWLiQb4LiDrjJEdVqnaDtuGGpJru7o5gt8Hp53Ho8MYVUwjQBZiDdQg2",
  "key15": "3ATG26j4YkgQe2Es7K18dqU5z9rNriFxU6ot5kBt4pa58CTioqiP5ehDq73xgu5mtmCw91MRSXMsfNkTwCwDG3Tv",
  "key16": "zTpfytK1R9F1Zukk9XyBGofXwjFQDyBPgH1HsEHSZCvqSnxvshEkv458s57F9mUwwbaRyR9MhDBK4uTV4PWSde6",
  "key17": "4h4aZUseppKfTx31xG4J2wBXVRSi6uqwJT3dQ3p9pZxgtg72s69eEwDEcT4nbYXDk8daBrPJiJr7JpWeMXocHfPj",
  "key18": "3ZGGF6jWJCrYAHcu4JCSAXPTExg6q9M4eqKfH4a29gaScPXQbYCu2PECS1W6qLP7PMY1DgTsKNyBVv83tsYoXMnr",
  "key19": "51C57FEhnYAyR9R248GyxqbRiSGCXPnAvdoUuv5hxhfuVXS2bwrGEE9LvbbZ8PMfShTm6rjNv2SpaCHdDEVx1GrC",
  "key20": "8peymKmRwTEXJtux8872kQFtBJeFp85EBBxiWKyErNZqJ2kTPGEfvtUXp9ZdPRX3i4VQHZHtg4X2FWNAJjaq8cu",
  "key21": "3uajyzCfLNCv6JWMALdg54ErWiBRWUEhUExsRrCgPkQD7WdgGTTLHHBGuowxDR75v81caYCtJ3Dd7CLdT2UeASJM",
  "key22": "Et5rRxRAzRGRdo8rEq3BdRxxXfRS3f4VtBoaRsToPNSuahRcrdAMwQ9MYn3LAcLKiQXFXwhLkv2zYEFiHwkqQqd",
  "key23": "3qzCPPfTKxAYp3LhCUb6XcypbTvxLepi2x6Cboxxao4XcESKNTshNDvNc9FRjqWtgMBPpsDwMBfdCbYxb1hoQn6P",
  "key24": "hJoaLZAG3oEtM4pMRLu9DFuSf5giHDAmzd31j3YCuP3pLMr6L43A5zMG9XSZ5VgdpHjGs5h93rQ62kvV1eQzSW2",
  "key25": "5ws7zGwJQTTZxTmXUgVBojYWjfE2MdQ4w6HCnWAchvCxGJDdQhfj2NevrU8WS62zAr514A3P5TUA5rcDvjLvZKMf",
  "key26": "3jJfTtam81dR7wLjzYvCaHcgAyYZuzeH2fyPCXeo57PEC7Yqm5236E4pDDBBpZ9kAxZ8HwThcPEwHTnm5zNeZj2n",
  "key27": "5bWjjs44oXJTEBo3e72BYhjqBKnCkLc91ww5hid8erqvJud5XiD3jVkZvSryCNQf8fgNf1CMK9DhKL1sm1egJYY",
  "key28": "3BRAPPFToUMQ3vwV4LnoxoMQe2R3tso6wmzZatCC8nTJycakgVQ2mUj8JwdX3GXpv2Su8osJTgdWJtxW2phdQXMi",
  "key29": "4pcbBAt2yZUrBwJtSSvEQrfwMTQ9fUqE9PRwcWgbbcyfo5hpTtKthXZmMrieSqeWN73BWM23wU4WZzfEmhvB3uWG",
  "key30": "5TqcuyytFPWeAWowsAwLwFBq3Ki6LxAdte5c66gHGUnKag2eu5Rk8MYtMu1FKhxta6hxP6yRbPPjCNL3wS4Q4xuJ",
  "key31": "3PPe5jsdZJs25kzJ82NrrEsC2G6A7JLqdxdinQt3bqeDLkkRg4eQMoS3UpX9qywBbUX47aiwq9voptjX93rtFpf9",
  "key32": "kfPRhA1NJ1H47AkK3Sd8rqgbdh2GYaH93RcAqZ8aZNxbVDYYwzV2Z7oK7SVHmjYdqJPPTZTZkSVjBk4NdKo1MGo",
  "key33": "4MGssHHLE5cP3NuWwLZ73qfsP3RYHxfu5DjZrguNpk7yGJfGMPvWMoZUMozL84aTC7xfbMcmPBQNf4DWr13WANSU",
  "key34": "5zaS9WspqSg71HAcdiNVPY3y2FcryAAWTypdddvFi5QiGVjRR1kmn2HXZQmRfiFM3VywopwgKznDiLYSi8fRDqQ9",
  "key35": "2SDDGQnL1xQ9To5NrkwXrU8HuhYRfaqGU4f7GYf4DHDWE8QfEXsZVQ4pxpbcHpqn9uuV8pYvbz9arWEkzPMHdNvC",
  "key36": "3xLVmMXrfSZhyK5C17kzH9KBkY8RbMSCWf7xmeLVqC1kCSp4PtNXKL8KECphczNQLP7omCVTrEe2sY314FHW1ao4",
  "key37": "2ycWotD8Xi8PRGxDQMoDzWrAYg9JDPXcMtz94rPSz6bpGZzvY1uMoS4nkUSxzdi4bVwfBKHYDWs9gtVKWGEUJ7HA"
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
