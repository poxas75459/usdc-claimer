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
    "5cf5rgtBMwaM4XkoQh9zwSeAiw5yc5s5pigawZyepTbyVVUmTyWD5vpFYb3ak8SegbXRhxVoDcWRC3Ku3vxjd6Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sy9TAxxzKyGHMLrSWA1Qxj3JRntqugPByRdmsSvgFtNSrB6q746JZPPwKi9XUzD4TpJCsMmF9TAkTy8N6G1Wovh",
  "key1": "2JsXkAoCAsU1jbRHincaHsynwBTwPkimr37Ndde5pcEiRD5kMgieaEuahC9pPjpTPSBzYd1a4m5u3dYiDvBhv455",
  "key2": "jU37SnJXAn2NxToazd6v3q1WYFAih6M1Z4ro2KF3TkvGT4cX9G4QH7wH7U1rwzacSrVBqd26SbfnQ6XPGBxhJQg",
  "key3": "4gwxdBznmcXHAXmHQMbaGvtWgCVbbUsjhXjr9bd3Jk4wD8dzQiP1yA3MJ8watYaDVtPpccKcjfLQdyWuWeRw93kb",
  "key4": "54YCGPjNSutYbc8Gxo6rRqfVkLQdJbSKpfZNfPgav9rugp6BdBcx5VUEKptmV98ffqvzqueGrMaQmKRULqsdv2X8",
  "key5": "5NrkmRVmGxXzB91pAoaptwsVRnh5ThwdhKHwPzTggDoQRwKdTJfR4ugWhhSjeSpfXNLmLNX1haXLRYFWkvJuwQBh",
  "key6": "2Nm54Webu1S5ftLkMRKi7uGEokiAgh9vkL4CRwSoWTtjGF2Pv3w4irm7MEChhWtiz26kpxc7ZRoSrF7fyDnZN1vY",
  "key7": "3G6SQX6NdJvZMF5peE2RZnyJctZ41st7QrWKFCVCtmKNujh2oo3yvck74h36CS8CXhCcwfQ2SDVGZqnNm9MfjAaH",
  "key8": "8vb3RdMzs2PHYkDYbdJhwAgRaMmX81LZ7piGbfjwRgocL1cfXgXsXTHEWxWaKAJ5PvL9RkR7cPhfQsMvvcxojbe",
  "key9": "LJKUsAKvvADQ4Hassrh9mK9NapRjRkoJcX8V6oWBKUC7moTJ5iEDYRLmBgPdJNk1k7wydxkQBFVNMQkvAZ9rTZh",
  "key10": "4MZEQaiS2ki8EPHaaUcvU8b29aoDFgr69UPpvw8S6RCo1gCeSPbg92LfLNaSh3e1HSpVJ8sSLjvcGCvLaw4NoU9P",
  "key11": "5xiNxxFUTdz9uWMSC6TWxvS2SuCLe41TUimk65kd7P31WhNx8WMVLsesyZMqLCAiAtoCfTHZBJof7Ywp6ZwJzGBW",
  "key12": "z68n3HAmiPcMTBtjiKCXgAdzL6adCFkrEDQY7aDe8xWzspzeekcS2fdRKM6KMN8c3tMbryN18SxNsx2NGRWRhKX",
  "key13": "tE5nb2pE1CsLMCiMKQ6kVmxoSUAjB4JggJWFN7hEtJMJ5yWeL5yY7cSZ9QFve3PpsLcP1xDEKZ3kRqRULjhBghy",
  "key14": "3GwipDC6Won6tTNquYizzxv22VUUbUK4ChhbAc3MJXKtqokQdHm8PAPY1BUVZ8skysMFGPiS38Nq5ycg5sbGRgmK",
  "key15": "2EyN7qvmoXB7tJZQE2cNyD5FQ5H54GErCj44dkdV94hMjGLF9xSKyzH9rVshRwFGkVxXMWtH99w91aS3b2wuTYCY",
  "key16": "2pLLaPbEMK3sM4bpmYx46DQgP8ndujQk73Sqnqh1aQ53NAyTxjXZzB7kUh6eVcztXcUhL8SsH7EDxEDDK6zWC6iz",
  "key17": "HyP72WAjGyW9dYWGJSFbxrJ8hPW3mFzLMwjyaEmkZhAUeyXeDroJZDHwHmUzmzKQUkKVcajPv2JgBgjw4GhAsfT",
  "key18": "62mdZmMsY6ibTdGUdodRb4B8iSC9HLANAuyqqwL2vCZXuAuyYjYzm63dPMP81nK6gBZf2mjNnkMyLpaYCUsYNw6w",
  "key19": "3DmqQADSh9RBxDehUBiA5CCU5EWDUvaDDhCfGEeNxbFR7TDaVox3o2Kibackkdx7V8vgRd9hh7sDP4P6UZo5Grv6",
  "key20": "5DEgSaaxqb9YJX3HmHQEDjGU2cfR3R6yA5gkbiSdFr9PUopTeAvK8UM45KLGdhNTUqGfiXC2XFFhtHsNbPn6KjDP",
  "key21": "38coSdCb8j9dTs9Ft1Zh5TnDq3npCmZDrfYNvTKEKqxcZgds23DQxVpWoaZDxbnNFx93Da2Hv79JxYxsfEDG7U3A",
  "key22": "3i7tBEAjTd4wvTSx5R6dx1HxoU7ApCxU8U6iG781NfPVmLHqoSPGqbKA4zePSqy1egyxrPFKXTp6bp3Dzm1fQd8y",
  "key23": "5k1AfxzebVqNjBmmtipUgJknwk4jyeMzavfnxv6Rmb2jwYyg3KWUr4wUtgfXfAKEbtNVbGMoQQxMtYF8eW9E2FHC",
  "key24": "4bPwEyoEvvng63PZcr85hA1Ho3MNeKaUdnV8zzTyWWFh1xH3fzv4KYw1sWLML2wg2mDeRjY7ic7Z3mpUCqx1LB43",
  "key25": "5RPfqH11zmxc5rkCAFKs8P8vzUPx4RwSiPGVWHnj4oCQsWz9vF7qd2YrPiyymvM1i8qFbiZe6bE4dCpU9iHVA8Zf",
  "key26": "5rBiiifcsBWmVq78pA3RiYRg2HgpVV4hP3nFx2cS2Rhc1jpRSPigJWDZxxZ3XrCHmi2VNZHKdFJePf2pk66NfAQW",
  "key27": "2caH75jvUWNYEKrcpvrKQAhjptA3Lp1S74ykhN8t4HzLVaDbtKdDeWci4DyPB1tvpRxjcEgVayrzXMd6MyenxfoV",
  "key28": "52PQuCtQxN77tkhdedRnnuVtrvpJY51XbZqFYvCz5tykvUap1RDhY4PmSiGxmV8rJxgmjnu4927tgQR3M45KAe5m",
  "key29": "32iDH3hfz1ee9rbxZRZUrRXWEFQvDabeiWX4oMey9aDyLUDkNrvLNUHtXq8cWvuNJdbRiopBfFuP73Muig7hrG7t",
  "key30": "296T5JNabDLYpGhSJDBnhsqrGzV897xGFA2qTSWajUcydnzYvQ1iWGcVHF2nArUpeeqMM8WxQan2eboyJbeoMYDs",
  "key31": "zT4jCo91ZzUsXHLapWgfEj8BpVydEaLN4aWeXex2au8KygVAEqKZTcowpFuPntxDvnkedCWmyhXj8ocfSKWHZmu",
  "key32": "5p59QGWEfcsYczp2euo4MY2kC9vZaruZ3CfR95epoGLFMEzQ9zJpDRUJtWz6RJeGeFzds9tGDNcLUs9q6apasHP2",
  "key33": "4z7SoJvtfHUUkLAAdtQAJNExj2BUgonKUX29G9Qj7GiavjvKyAa3nzXhzRSef7aUfVbxAseUEQnqqrX975KFuaK1",
  "key34": "2Z9pXerHYUWF9FWm1xZiA1JZeyKYFSXhWEZiX5aKu1VDppterbbvbdLtZCirurZEe21fwuk3DE1jiuxMK4ioyXnB",
  "key35": "4ejBMUEdknRscMyjXirHsNekGJ6nUC6XHUtduwb4VtubkMHMNJgCn6frrj5ZCBUpWMmZ2Z7W6X4QhUFPvwE6seNi",
  "key36": "4aGFE1AYdxAKzSXuujPwhsipPqz974Baq2B11uv2mS8RaMCrrz8j2SseZmq5T7JzFWH4ZdMyhAb7BSH5XNvS6eTp",
  "key37": "3852V7AZgcbiqDVAXvzYHzkkpiADsbLGrQbYZ7nvyxQtTYL5tGqBCqh6C42yMUap46xZuwC3C53V3LreNB7boJro",
  "key38": "2NfouvCGWGXNRXbuBnTqrWi7fE7fPbKUtcQXXKWpZTkinPFC5cWwrMAKP1KUn7ZxmNhMgmcdZ2vj2NQ7qDbGiMmj",
  "key39": "4BNoY9LFXe8zr5fFBvk3Qp7ZbKic5QxGvMWbDe2Z9wyW2WAwLpq1NgNh5YvN5RCm22h9yAV9sFe6xdyvWEv7KoPU",
  "key40": "3Zt4JU2fDX2Kw1j5EK2i1CM3eYYbhyTAs9bywrPoycS8LhRuqXsk24wzPJAbw7UMF6hd7ufrf4qGMXFc1brt3LGt",
  "key41": "4KVRJxLBk86tbwVi3RpCCa9hucHncfNaVqXrZarUu9SEyqQPozzq9n8tBMjgE2K5kfT6u9W7g1HjqvBm2DhLKtg1"
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
