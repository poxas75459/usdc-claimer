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
    "5nxd68hsD1qvNUQqvvse28koVZ1fxdrXSeNTo6Dht7rYvx7frh9DjmR3QdbEJfCuGWJb3wXHgRUzpmmMU8ZWrcKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5naaHvfu6uqgJVpvSEDLuhyDjovDa5rXMXX2B9Mh5amvexRb8X5JUXNX8hH6gxEtizVeMYM19y1ycdagAy5cuBki",
  "key1": "3gca6nZJQ68CgcKiSkpn6dVeXZpf1jR8kF4PXH4ecJ21yhHoUgGk1Ztcdo7YK5Rwa95krwLYELXsLnaJTfSsKURC",
  "key2": "4BsqqgAXzUSn9sAzM8hTsJeBdjR5ZJwf5uNSs2vz5StPPrG74a6tEibjDcHQVprAQDeSECj2VMz1Yo6JYm877zPs",
  "key3": "DnrKpzND1RWCY3uYeGQCJqiY2LdrmhdKdT36d4maMbqDcTt6it74a15GRXQPtE1hwkVht18z1LFsFYwW8FMxthT",
  "key4": "5Juxpd4eUv1ZZoY3DDHqqKNXm2gPVF2n1UqdHE1rRqkrK9dA2Ku4aKCGaJ4n3Yjp4JGZMh7UAy8EJ96DYJh2mYoL",
  "key5": "2Xor5xw4quCLC24uPhJ1xnBTM77vSdZNQPNEEfAepwV1kcjJPoQ6DgFzvsJvDYQU1BJ7knkoQQmGSxJfy8bTgGBc",
  "key6": "5ZKE4yVoSws5DDp1ykk8SEXmHVfiwfEmoRqiDtKWMjKTgQnqqbRz9WfQYYzQEamCGzrE5hkTXJMRrkLwAQ6fLuNU",
  "key7": "LSYsyyHs21j5NTmooJH33CQtvvgRmTmUQH21HuhSdrPxXYnrSLHPabo9AioxY8ebPmxeW3ZCMjGWWh36yndTLPw",
  "key8": "5UfbevXozGzcRMepPpu9zfYDpF6EXbm1N1GdTUZWB8MhhmFxV1mbTmU4mhCm4qbDepSjCMHeGSUcBqgtdm7PMyhx",
  "key9": "4pEhjYjHdpHaH8dnGLms7EG8zShNJxekMPN1UUrsvduxaGx1BqQuVMXCxJaexywqRwrsLtvpppxa2n3zCVkDcns7",
  "key10": "2NDYEsbRH72Q7AcbvEqijuywtUATks2H9i9SxDHk3nYK5YRYik8ijsYyUzpvbr6f1Y5HJhw6bJjMgpezSHTYW1Qd",
  "key11": "5ZvbVpjxToequcB7bkWbLjn5Pkxv4xT3JAZF8dZ5GBavCM9AXcEkeWMDucXF84Btckx6tihRbQGmKfzxFDUNkbhK",
  "key12": "3TB1vZfD2ahsNDobJLww9pYzs5uoa3zVG4MoneXgxApmQch4CHocFb3gLLSmSFxrZJ3k3Murdpmb4uoDGK2PtTfM",
  "key13": "5wUoVrTGiUhw3tUHfKUUkC4tfG4fAFqLc3VaEe7jEYeLJMPGjRhbUxYvsg6uSzLmtMtty8AjLbXnUReor8Psz9iQ",
  "key14": "2YboFRSWA5FywbtKyNb5d3VPPhf1J8sygdAuxQ6DJxYCM5YoZGELY4tyZzV9x7cRvnTf2aVmFMjv9K1akFjdNtog",
  "key15": "Rm7wL7d1Ex5HrSRUyNhJAP3bCksyKdd15Jq9ekBNpHZnbnuxTe2SGeaLPuSMWzmQHc9yTGQzypDBiB4tjbaK3Zz",
  "key16": "cvzgaZWhwthsFDUsEVaaBdG3h5pF3WxAXMTvM7jhZC28eZfHAkadtPGtx3tEixFA4L78KJdJ5GAFBcjWhgR5FNv",
  "key17": "54XZWeLgFXWUU9baXHNiRP9AxTiP94HAF9u5xMtFEo2v9Z7XP16wPcnFkwcuppUZmjN5fq4aS2ug7MyWTzKpBjfs",
  "key18": "BbqjetQ9gi3K4SJ9ZXwpMNLBZPWkKkD1xDrzzubJxWxnfs7b5aySXZCEFK1uAtNzJBgnnSb5esCzvMoLn2ocE2g",
  "key19": "4opid2oAUWRC5ixULg3kCfXRNRyfzpBERFm1RembMGKCQ1ZAUh69AHs51GAnwLvqs96ynsxVnuCuLHbq9ttapLDs",
  "key20": "3YXXEQvzNtPPLPPy5NUeCafj4uGqUcGiPsCr9UM5NjdVQamZE6bBP5XnktyYs6rw5u9HzSBYM1j1QrA4nvkwfVCe",
  "key21": "5hZibLbgQzUMdRAJwEbcCLYFTsagykNqMoTb3iKvahYQJZjFvUtHRyBA4HuajWs1SmkzH7wkgT3rzKhL4p8Egbqw",
  "key22": "58aNdfKXB3y4HHCisF2Jrza6nBLAzaefYywKGuzevZXSidWk31FEiiCoNDRCubghD1uAnTp8Yo9gXbTWqWczAZgW",
  "key23": "VFjewBV6Fh3eNRkcd16yezMiRWBvZZBU4MY9yDKnWPNn2FbmgxTHZuS2Na96cAD5VohQtstfKmaqidqnmLa4e41",
  "key24": "4C9vCZ3coYFg99GsC9aP5qQMmr8dg3teRCUP4DUFfJMbV3k4dtDGhkJukdvcZBcXhzU5YizhHgsXBsuSU9ZtEfj7",
  "key25": "5ZdvQU8F3NjQW3RS65sUNv8jYzVMpZAacFpzPSUBpQrXMvyrMaDXCbWozaHFZjDU2v4iEQ4diQRMxxtEC3MSraLN",
  "key26": "5ridict9bWUdnqZXnrPC9j9aCybVmz1Pvydn3qf82nmeXDqmP9zoz9iTk9s5GnhjWrePMsAhChc6aSz6gaQFLwQB",
  "key27": "Yq5Z3NUBVgPEXDLwRHo7cyyMNS4pcZfuExSZeLGNdjj2SXc69AGbqSPfmcfC8wtA9RTLKLQjHETLh4GesF5U1Cb",
  "key28": "2aGEEQ1V5UJ2JGSumf4pCtFtM6V191NjjvzP9uX96Z7aipNDDq8438o6gp4dmKLgHzsHwz21HhyUvhq6iaf7t9Qm",
  "key29": "597G39Lmc9fZ74mYHKLYDVk47QAF8cBDbHRC8L7beZ5MZtqG52g5wdQUc66EQVaoAm82an1kYBYd2WZry7s9D7pF",
  "key30": "2JtayD2i7qpJ9YmZpkGC55WjLKuec3x49gBLJqDNiQhccR7pA6NzGWKvRdCFzo7e91g5FRJL9d7S9XJPmfMQoN15",
  "key31": "2K1G1kBx2XqtrRGsHfEXkYodTk4J6qqPZmpsxEWwxoT1s49LRvaSsNgNfTYatUVhXWe5JNkp4xp8Z76yL4MMhXzT",
  "key32": "63gJaBKac17RabWUNZjezpHNuPRwpaKFkJ3wvzTEBcJPD1PXM5mD83jPc6H2g7ZgqE1HVHuok2wQZspJppuMuUKM",
  "key33": "46S7o33X4pGEKoYWNLAnpnhHqDZZEZLFcVVCa7P7x2Ky5UcuKz9pwXCMQdYmV23SCvBePBvKPWPQtsEh8mxrPUi5",
  "key34": "2edyCnwiacWe3h5JGAZaAPJfFhjMb9qihjNDHdMXgeLKw3tbQZg3Ck5jrYd2fyjetAxGjVxrA9BLq1NpuGGrVNep",
  "key35": "2TUhCNNJbJspbk1AeMEChkP52dsryBL7vR36FSLiNNZZ2WDwJj1Fuchr5onq7fHvmPdbzr4SP7SmEgmg7QU6PHhD",
  "key36": "59GZHCfLpQ3m7HYCWnMbrH4wiy3oC84jcDWQSx4N1VecgwCQQ8P1e5pKZFrstbMvMsZDDM7SM6erdoVpYiyv76mc",
  "key37": "3sx1xhSzVHyyBxCHi79qA5nHLyLJiRgKzHW41jpXMi4bLEnp3ovqGVBDrzW6RMFUCmVv7BrncB39dfmr9M2Q4W3b"
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
