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
    "4ZFzJV23izdY9Rg44wYY8ejNmyG7sDm4Qv2yxVz6dqE3dZ4fWn33HZmm8VV1EUDYsXMNveiekAon9sQzR5D2onVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o28KNXDRtGWHHjyuZY6gKdZzXWzEqHWKxXvofJV9bJ9hcGuSciYDjV2yp5tiUtyMPEaebMb89RHuuYYuSsbWZSf",
  "key1": "4YK5Kvtsvv1E3JNovJQoncnCke7rN56bDGrHU7Wr5tKY3ovG8TbDZbixnXEMGNBkJ7tiLRq4iYTF4HxXMyGozwUh",
  "key2": "2rtnhsruZYNzKYqhMNsEJfWwKG5ZcgRVYUH8uWmnrTe3hf1saY6qmeGGpZ8h1ngZaiAPjfCNpRV2eYMi8k4oq5gY",
  "key3": "2aokEr2nKU73A6nsAyvgqfCy8ryL9yvRiLZLVvK8dHDLsXEHSCfbN1WC64DUMB7aHYvJpHq6EX2yuUkeXW9zAhYn",
  "key4": "2mdZ955nK98znPwpUugpqG2SMCV7MFTdNvDULHYkATXgr66wEN54MLSpHh5h6cyx4B9VFEssz8RyTKYDWTrEGPJi",
  "key5": "eXsoaPfdCMf1w93jRZAPSHZaiTjqNwC1dzrkX85ztYxcsG5jk4VEd6za8V3wK9dQGMzmsP3mFKuYefE11NGafYC",
  "key6": "5QbkBsSA18GPtCiFAwq3YG8ACDk3CYwwvDcEyHno8mfvSZk6GsMGoJL22XPa98qXZXNvMEGLYmmbgVfrwiKKCeX3",
  "key7": "4SAotSoDhk2b7gqP7KVNQXfGkE4PWLYEKKpNfR5jnwcx9a72JC724gxcTqDKK99GauGJmLxTnhPYY8ev9Ltx8MKi",
  "key8": "52YaRqMVRLt6ZTEcUMn2CKBdzN2P16RyJ9vRGvq5KGx4vsCqXgaVMMMdnmnoxC1ANwtKQMr57mR24riMPYMoFD3m",
  "key9": "54FHgrGAQLxdXQedYULR4FFwY9ZTX8A6Jgy8tJHmzHiEKxauStG65XeyNrbdTbnYGGencpXfft3C5ddQ21vmvUXJ",
  "key10": "3NcfdcsDPpWgMUDhRbVnfbCU5z5rWFSm8mheiCDimKVHMAmoabAgowo4BzSXxtH4oc1WAmna9XWmTbMtujZPpokb",
  "key11": "uceDvAZLqbb71LT7RMayxMcHYFaJoDAY21zRLn7nH7HWqgP6YB83S3utENYSbUAPX14dUyeq5s4WdhAjijG6Wot",
  "key12": "5iGfL71LaWCu6AaG96C3weAWkov32Y9iWfQggTEsn68gQ6wsroRk17iHB2EBBBaZYgRuavM6eFUV1PwYGJ8CRNqi",
  "key13": "5FW24e4RaVFrEiqpCJXwX8xGTH6gBtJyCRCWjUi3JAAWZTTfZRM4F6dCbum5kVR7xB65GM2nQtCPtMi2eBKpMj34",
  "key14": "tkA5sxXTgitdQggkjJBFjiUBbEj8TPJAiG9WTNWhMQmMNXF9NyoDupK14VfUVSenJ4AYdcLUNY8YvWMGK3ETLwj",
  "key15": "8wXfEoeYUHzS3BohTuD7DWQLEUxWRHdGKQzgTbCo2KMuWFBTP6xg4SEnDi6TftPbVp7WueSc1Ak11zX16qsWy6Q",
  "key16": "2MoRCA6aXEaSDGyCp9STxtf8LYtK337ZreezkE79u53sgeMdBS6LVkSMKaSM4pNuB14rtKnXBncFmCdUjrwwkYg7",
  "key17": "2tz639ccSoQjz1JWimjqAC3RwKQk4MDsjnTZCn3Y3yxxoXvKC4TScE35qUfbJAFaDh8L53Gi7dZ6rRxC2AFKm6nr",
  "key18": "3EGA2CnWWGijKpbf6j6U9xZWcKhPb294D31eL78fQ3NYeY4kgTtzQ1gb4hffxUnxDWybvgaPoAhXgxFueGr12Nzt",
  "key19": "3kryL4vBasFE47YkGyhY3y3WfLY566NyjbjrDER7Zed3e8EwirCytWuyndZQyrWJjSaBGmnhkp7V1gF5tfJ8nzXo",
  "key20": "4qo7hdeYKMPHSS8CGQVZkyjmEiHzJqdDeJ8uMa7fpk7SpCaCkWXYcwtgX25p9qzxAaK9oHFVEcR6MZw4FVbVLxWa",
  "key21": "3Dr5FCkLQ8SUketKksosN9pRcR695Uct4ct2pQz5xomj64CXN6Xfw3pkwXc3bJsCWYzejjuCztckvEGpSfYUKScU",
  "key22": "2Wrknj1W85GmM6FTq7jJquByftuwUJ2YXCEoj58v2xRqupo1Yatc1nkiyQhCUs25ftBvvJVNr1asqn3aip9qpfSj",
  "key23": "25ZAeSpzMm6tdPru3MbAdmzH5LkCHW27g8HcVGHsA12TKbnXS8AJdhtwPh498AJ5pdY5LY9hGUeJLT7KRndHKWYC",
  "key24": "3UC8YHpz9qPuSVUR5c5TRceyPYfF7EMsfvHKrfg5X1t9UhDhGZMhDBMF9DnwzKUz3xdDLweB8jLpfSQFA1e8Jnyh",
  "key25": "3EHwnGBZAvWuLK5Yu1mKSyJ8Cuj3mMWRneejdpP7rhmwdgkGUFuF5zrWsyKKcAh1C5gjp1tGfb1CMdr1TbL9i2KX",
  "key26": "4Ze2LvACMXWn1SddBscSy2JiyvRYxDWHCcndbbQ8brPvrFGTbXFbHfvzSq9NJNM3JRMR1BkWE67UgBFX1v1p7bfK",
  "key27": "2Hi7fst6nXuzQMoGpiLG4j3af3gubTPm4Aq9fCx4C4tWh9zvJDgRcEJvqrYgZC3icbtx1etyUSK1RcDNb3Ewf4Pc",
  "key28": "4WP5DTkmSmaLRQgN1o39wx1wh9aifVQftzRMWxsMQFrP3bJyeowsiRMnDUYMR6EaC7HX6CVfPJzq63r4csFw3Uxp",
  "key29": "3fDu4JvZSgZYoURxpQDtUJDtichvbCbScsv2D6fGcagEGearwuo85VuTExjMzsGqHZb4cZERrN7tyXCu2cB3NgBL",
  "key30": "2n6qZzLzz2Vb6saskRcDkv8G7LxVssYTmWgHbK935KCpo8ZFyKTj3kYdCVfa347P6sgEX5LHpi9dhHqmc3fqJauH",
  "key31": "2YnrCyLiW2h62WWB9xyvV7YMEWKmS3pNBtGZjMvLnbb39XVgCfrPrgAxp9FjXmEGa1Y8ixFWdWujzir69uybemRV"
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
