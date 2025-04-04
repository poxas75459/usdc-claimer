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
    "3EYa4EpFDA3z1QLs22cyoZpvq1SdjFMQELWfYGUn7xnhyxhc8sdWNfFpSL5YV3mMqERNTx5aWKjm1HeaHQbRxtEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N79sgAjLWs1GRYAyamtaLjpR16oDiaEVHnB9N7FGoXXUiNeRCRuzDqwi25NDZGciWFPEjHPo4gkLYBERjj3TozR",
  "key1": "zHsdgMxcz5Ripw8JBr4ryooaag8fDHUwix2Stfgm9mVdXxtYexXYK1moBvD1qCadnLGooHHpusPeRr5dHS755tQ",
  "key2": "gxAWSETr6FKcQjKd8CP7JpkFEdhoKQXupdhvvHYBmUgErmLRMZ9MMfndH3JaL4RFnemiLn9TLGBjKQQV8EdJJJS",
  "key3": "41do1LQZG2WWn5ZgFtZ2UGHmGjFFK1PZL3ZTw8JVRUqxdittKyNVCWzBbG2f6NsKPCvbw4tSwHMvWNam2e5EQSxu",
  "key4": "Bj57sP2K7s5mTjKbczz4t9NhMehaLttY87eMDLHoHBDww8GVFLNPQMZPNw6YfTtxXdFLy1iWdBhQYXBSVoxyDnq",
  "key5": "5pHMDkMAvQADWD7C1NkNkR8Hwvruz8Ld7u1nTifmF55qHbGAEcwAV8B5ZVcWVSBLrJEZccQyheNmknUYgj4bBDfT",
  "key6": "3xArgXBdtabDSC6yZ7ufWjsydnQ6PtKW19xJuWuALSe9KrrZYcZwZwDycBtnZhxwZpqsSpHKFkNnBm7yD9EtS7gW",
  "key7": "4pvDLPYpPy5eMM1fUkJhRAz5bX2z9gdkDkSwShbACngc54RLPt3nf38kBeZUjYV69jB4vN3YfkPqDfZzqoYi5ZgZ",
  "key8": "2mv6vfJJJFddR25ncSB6NXmRtzVK9SEaXwbqsMZCYzQsVufa1A3g222yosb42TNKuFtLt3nvc3ZbqrdpYVyW483p",
  "key9": "4k536oDmcB139wmbQJc3m2bdBxqByan4qXfYuwxiD41npf9gqRd9DPt9iJigpjNEyWb18XDj3NQbAGiWzQnJ4QTN",
  "key10": "3gUKuS2vMKfQVa5N1qdFXiiVbM3wQP93yh4X782G2iCGqwA3PWTQQVmCqhn7xAigEEZYwcKBvYkkPQZuj68R5nqP",
  "key11": "43UQx1hQQYFeqmWkLERgrSoL2C3TgfMTAfhW4QuAdWptYHvpeaE4YVZhHqCDDbzoubaYAU8uoeNHN3jwQmPDLMiA",
  "key12": "4kmmATRwPHoB53CPGPfXnCXpwvKw9LKHwDEtdq3FuhBWsaeTeMjFHHcKuJd68xsCfdaeFvvg6cqEaXk4GDPAuaeM",
  "key13": "28f2Wet9q2vAXC3jmPyg6uLosMNG3N3b8RBcZdCTe57sXYBGLxWfaHvxSYk87g5JHUWACyW2pRomrw5bxCQjte23",
  "key14": "4eEE5h5MYkW3WJpEu3atLpsNHwyQhrZBqZiAaLEsxNFcwoUsTgMVx2mBtaGquRFxu3ym17eJf5mBbGJcEjywuHa",
  "key15": "5aQ9ig6aWwPPnShJcEi77pSKGVGCrQkscpPTx42mgnZ144PGMBHgGYA38WtQEfqcaaEaiHhtRouWc8vc6ZeTENWR",
  "key16": "WCZexi4978X7FUTCfz51B6mG3KpWYnoXToLjjYSUDeoVfZG4fF6AqLwLQT4PacLREFwgPmrQzszeXPjcCn7SVMp",
  "key17": "4TEvZ1N98mYL57W4qtwuEo56HdsTfet7G3bq57AbbgknFVxihNCMH7CBNGRzDswppHhfZDTKohxZpKFwAt6LKU7n",
  "key18": "4mxQ9dkzebZuQKzJFReTTTmA4DMXycw5RE2voVLzT1iKGEMuV6c3xbgmsZYLG7pkkSR9PoVxxgbHL1D4hfbSseY5",
  "key19": "5w5GAEkHaZTDq37QccXdqX68bnYgQqAm99KJuGorz2SNNAM2VBYYpgqXaKXraE61FwStWuR1y7XWLxpKf6jcyr9y",
  "key20": "5MKDR4BCXv1b2nmNoJ3EqSMgm71aomaCVw9g6djwNTsHpEqd4fsfMr1KpF2Viap4gHyugSbiG4iRWhfEMDC4r7yx",
  "key21": "51Lrs3Ztu5fqzvaKnSjmdozmTDKSdcJEeuaBqoLkLym69WVvAGPaguKyrbRET3JkkPQfbnt6W14BTLQXFr5W26ZF",
  "key22": "mVMadT44CcXGdRsBmNiUMQpYEPHbCSmwznMrULXUKtvfrUPoEam2V8XfB1ucvY44vgtYg9fJMyp44W2vQAutvzR",
  "key23": "DdK6vYAn8vbVM3RAqEs17GyT4tyo7Hw86w27N8in22LyVCMr86XwsgAcAQkU4qbfbCZaHUip1YukR3e3eZ2Lb6R",
  "key24": "2zsm6RbusEYJCsk4PUmKa6fUp4ZCT44AbL4MV21dznPi29iin7AhiVnd4t7cHsFUXrUSCmphacazQB5AieABU57D",
  "key25": "3LhgWVQJkA72tvJxdaDLnJWoboSTVptpEz9ZwgW3z4py8WqM2KcCjz5iL1VHtSoEm85EQVa28HYss3GXUYENRiXg",
  "key26": "2y4QrtFzyBPPHg9JCG7eQ8Fa3RBWXrE5YFyi3xcu3ygEBnqPoXg3z2A6Cppz9q23LzuDh7bM5s3otbHvRWb5AcQw",
  "key27": "4VVxp9dnMstrBsvxYkYLaP17GATyKdETB3rx22pZ1yHRYqM8SZ4QTaBRvwbTM8e8bc2f9DZC5jkYxcZ7Q1xpME3w",
  "key28": "2mMmCe4C2eo2YyGMiZrURdBbxGA3nk572NDynb7Nf7CjqU6hR1N1L8zDX6nhRA7kiRfjoD2tE75Xt3mFuV139NGW",
  "key29": "4hjzpJsRzvUUZbweKE9Nuha88UGs7yoyTvT4PPBHuPJw5Jz9eaUztu5kLBt1kFTSQZAxSkzWcFwZNVVesXqXKboi",
  "key30": "7Noggz2spXAZvP1VUgaCsm2uJJHPbvkKAFwsuTkjFUt24pH1erUTnhotb74pqRZPkCxyi2W7fPvsTJABLQ2qzmk",
  "key31": "YZwZBdnun9CdsW2cGpCfuv8ok6ifXcFr4eCA6RdtDbFdrM7PenYv1bBbhoF3mJLZoLmdLL4BCMMkkyYUKEmngyV",
  "key32": "4dgsYP4zm2VkRoEBDmo9ydwbLybBSXskFEZ1dk9Brk6mMeJit1TTx1PAMQVcV7Q7FyU6MqtLtxDnafQ9kMAMy3An",
  "key33": "2Zudaek4V3ycyA5agCYZsTPJkHB4ZdPgEGsoDYp3LJ2Be8CbeuDtPFCZMD6VNzFMT5SrtEZifTEy5kMEgDQNvsvw",
  "key34": "5kjK4ELuuop7TVEVw7AEZCnMxANBsf17quQgQE1v79d13kwgz6nH48XP6a39evYsTp9xxbcEpPvzU3hBwDtyWZ6S",
  "key35": "4SgvKUPR8ef1C6TMWZzcPwNsaeq18B4rZzFtY6XwFrFBumBGqq4LzfDqEL3AE96i1kH1a3VFAvDzt33ttcke9Ns3",
  "key36": "2V4oyUBdcLcwZyBr5M16Wkvnn4cXAUHeK8fp4e1MyQcZRjSBXbaNt8x6hZyd53PKtStj2GULCRxao73C4QfVidq9"
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
