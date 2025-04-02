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
    "tWePnW6Tc5QboUdrbaCUij1JQgUSwaaXhP9TU3cr62ijdh5UbuARMmjaGg2SsLWXq1KR9mtnqamtearTshst4J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhyKuZP3JHy2riHpaBQZ8bQbvN1Kc6zaGa1d3JrJ8QZTStSUBHuKKYJZQDA6dbW5k8vyUqwNSbDQeonhL2xZoAp",
  "key1": "4UawXyWM7AZnQVyQjC5uVm9s3ezJ4J4Z49CKBxBY5CmmSYTW6C2M2YpbAKxonU9diQQGZRxo7EiSKj7J2YxSBu9U",
  "key2": "4owTnDnkuyJ8Z1PZkuiKPzU9QfiTyJA6zBHTbL8M3SoUK8Tg1K3teMRKakUjmK8RUWq9TWnAj8mdCXTmPq8Rwhzs",
  "key3": "3unmRsZhFGk3KFVRkF72P9dLkYxjue4R4nQMPtgoMNTvQTXVBoZ7NiFSx2PNcFsaYuEYRt5hCtye77sSKQyuR9AN",
  "key4": "28ww8sp7Uq8hVBdp1i2sRDbm6Y4qYZBdf3gQ8RexiLLiwP4cEptqLHf642u3J3mQ29pThV6UVUGRx5zAL7Xkh59r",
  "key5": "kkLoYaojR4YLXSp4eGdLgibpHhtgAnVJYNeTWwinCsTW4rmcd3aEixs9pJG6DFFZ13cUXEBR1RHNLXiwHZNi6Nr",
  "key6": "c6X2w59BeYLKYFnJHDML8Sze75fNeZ7Jjiumz6jZdWTJoMsgXFs93yowrKCdXAfShZejMrDqoEcNkubwQf2zEM6",
  "key7": "5DtEyUinVbB1eZsvvEvyi4vpeuM7CwvBeBc2R2ssjV4AZrnube3QmBL2tXwuVQSQBYHQjfvVMN75yZPmFVqEsyTw",
  "key8": "5Fqi9eJ2QEjtxLLVzovEFP9Wu7AWvVp3io6PSsjqqwaP2D1UGqWRoFimKUdnvG9jooqefw2XD8rq9uakw7LtuiBJ",
  "key9": "2XLC9vHevRJCMV1uq9G1wXSa9usyaAzLZh6tXPmfy72DHSm4fj9fTYxvrDt91saDMwBytapKrjfDPUMBLmSC1UiP",
  "key10": "2HCUsN3hprXmHShYAZUSKDbLbpeH2tTHAGc4noF2Pru9Nd55mo3wcZEWeWwxZsXDzTcuAE2doYLTK9agPngmvRn6",
  "key11": "EpYx1m82PYjX3xoXThpjfncJKHoN8BVh9EgtqEfffX5tXysMRurkK4FAUV7X5NLgHJrCMfpCnRYAntQKuWrLjPG",
  "key12": "HynEU2Z4wWezMLkbm9iDFKLmUvDUAfczNcXNEnG26kKRQ9BsY41xDvPBK56sdcrrWbmWRsnac5fhvf8j8v8FVda",
  "key13": "4noGJ7kQEdvxy64nXLMijwjkPhm69LZSwCtyxbEuNwDwPsV3B6b8gaBCk27WLbmKpsneac8ynwJ3UaatX2zeAr9q",
  "key14": "3P5GWxteg5vkyquCqWPAtmSAWoBgxsB1G2JZQp6PL1so7i8ofaLFAungjjkDxa9se1QbTqsTWUaGVPjcnyZvJXvm",
  "key15": "3XG9E4nCwbcLnYHfNTnGHu1NFit7K2BMdFbQamBS5t4mVfLmp764p3RuQNRoKwzkmegCAqj2FYetKEAXStM51o8B",
  "key16": "3LbxrNa5w5E7Dkvot3TmEh1zkANZycpwuapetaV1TwbLvKVRntdJnFFWznPUiTfp5rxV3ovpJAedBgv2D78bzMMx",
  "key17": "4JSUKrJWzFbSn67H4WCpKKGDHAFjis9wrNYnpspVaCievWNxWnGSxY6c8iemoNkX1AsEBdx4xo3S6WdJD2KwtivU",
  "key18": "4ciQtyjCNt7Aysohg8weuf3iCQ6iigtr6sdKWLt84zSTVwp9fMhfwfbu2sEisMX9o3NUXjnGq6A2qQky2LbzuX2T",
  "key19": "3FK2hPsvgu9KHcuBqcQkc9iEoW2CXw6FXyM9XWR91PuSEu92BC3dizFurmzG9d1sxB2CK1Gj1stS6XFzRPdkcoHB",
  "key20": "5Nz84NDFqKUjdNSVdG1LKey5UMVztNALTwttttvLtovLHagXhqaUGHDCTSXhnvtCsnd8g5fW3bGwnFy2zMZUjjRP",
  "key21": "2tcZTQBJQCvbey89vwZwQY4hG5kNkvxt3GNK4f2s62kgCLRUi49KgrhSATcuZ1cXniHFDCsphZR1gYCnf2KSs5VY",
  "key22": "3skwNibrzMTyZhZkxhyF1KarXaxtTkvj5N4wBJ3HMmP78vaE72ESAHPAiRW298HucSohoWoJfdYS9D3ddSv1aQvr",
  "key23": "2hRGCfh575afsUwSEDCQJn8vkhyFzS2L42zCQrbB7yhrjcRoSeXKKCmCTDHubRxPQWRHZdYcPQ36pZ3EExyJTBBi",
  "key24": "3ogdPbwNDJ6WomCuGrTb7RjQXBgHyLawg6brGc68HNw7pSJd2NoheyWsTv1nKpArQZdpW2uxKsMd21u8EUeNjQuv",
  "key25": "2dBNuW2vww3oe8ZXBZqn4quq5uKqoT8MnDftw4HGQyhb9YiHYkaenYLAoCHUv4SSzTQXsG3yv4yNbfSWxfqc4mGw",
  "key26": "4fBf26VLDRtRgRiywP8WkbKYKBNcc8YBNmcMY5NphvkkAZM2TrngfdXVXERvbGVAEnTicnf3dQbckZ4CibfoKUt9",
  "key27": "42L8SMwfYDgddhhemAjNXi8C6rQAMCg1fiGuefbMmwa3bzCnyb2U6vrs7QcWMxzwCecA1YYgErXTfsvqA2CXmk8Z",
  "key28": "4Ccvwo62brwiL22cdj4wk4kWj8YwWi9GMA2vYQKPhAs8vXjZUQ1xopnceowCTTH9iduHpFPs1AZLsH34EZTKWfHq",
  "key29": "4Ni2sh5RuYsuAp4EKyAPaZrBGctTBcdYGgB65rtEikUQananyS4xDAteap3iKQQCVBt4PhryeUaa595zfWrCGgrw",
  "key30": "63S7SBXxBRbhujJFcVg1wBZqSht6HXe83crVuXCXBEvFZTUAePgtEYauqLdCuxuATmrcptRD55AGBFN2SiTLjpzg",
  "key31": "5D2eftjYaQGP6D39rmXAjX1i7f9555cUAR4yGvzq6n1qpoXEiYuyq4jkP5SU6H5HKJC1XU9KrN9ytoMBFJsqPDVg",
  "key32": "5LfWTzbD53TiUFcMvZPPyCCC2EWPtv8aPeMurYW6GuwqjGFH7TpvnLHPnSu1sar9ym7EqiPYVNsKBGtUXhLdUVi",
  "key33": "2ddBZniKevyjpkUu1MkWD2AjnyN5ipsmkxCZ23BeMwXesJyATnoTAFR1CRRpQkYYaCSwXJsGJGfHBqhfdk3jXQPd",
  "key34": "63H7V9JHwXeko61gZuBWYEJGW7t1wRx3rZ6jdH6qbs2ovcdtzovb7QCiRxFEZTNkQryadu1w8dd9EqQAFWGGXjTP",
  "key35": "64EtpB83yfSQ97GTULWKmmPiY7f2GtS3F36CzpmbayGKmuhVFBNMRGyn53MhuzxhZ8ZSPRZy2eAnPDQp4cnCZQJU",
  "key36": "3TDdBcJq21meY2rsPJNpUCwS9FDwC9msJ9PcFeJtCY268eQy6wsiFkMZqqfP4WrHXr68x4QYphfCYvVZ7YxAxeym",
  "key37": "2sHyBDNV3LbnxVWCcPkTmz3Ta9PVSsfpZdmXwga1fw1xsoEry3BDUTWHyYuh9RUTAUZ8MeZnu4Bs49nmBQydCguN",
  "key38": "46b8ZMrwKY2Q47i7nCGNvS3AP86WrmiKydWFZDXhr7wsoQtWTCskVYFNGC6icbaqE8TtXnoPduNRjsNGGqAf1k7G",
  "key39": "5Mdgbo1LBLbKf7X8RJX5BifnWnKuZz44qH8MpxRQJsQcogx9TMgJDY8AkN7443k8tWxs8xuyPMyF6Gsd2YJfq9pF",
  "key40": "49GcLzt39R7TgK8NNxVRsTPYaA6GkXBFBxp2ZicU5eYo2YMNzAqMS9aGg18CfFiSRHnab7TESr3p4PTBSXqiHadv",
  "key41": "3PEdsJkX8hQt3TU4nFFC3dTQWT9vpUHs5CNkHG99pwtoKSZZ9YTwyxVp9BXsmEMxWd5GitWTgVFQmnY3wDzHyMBG",
  "key42": "46yC9XKBDgYHyiT8Tjy4WMxQ7GuDqDwbwYr39nVGetEBQFcUxJ17XLqLkDP8xZJoPbMMG9YWNUxUiJvoL4Yz8Nbj",
  "key43": "3iLrLm2neE8nneEksnYG3CnhS1be9vqZcBFRDRgcJFCvXtAUQtPVUboC5EzKh7xqFjcKeQKh3k6QomahjY1EbjLv",
  "key44": "3ZyffnxP3WS76GvzdUVqvHQTzFCSEc28P8iEKjZNnxmeXaWxemb1atQf4o4mDuMYX9uCndXG2zmo1cSdvyKxxymH",
  "key45": "CGPVbsL6dTQGuBYiBeZ7Yv9fdsnBgRZauycK68dfBNvyQ8yvrLteL9t9pp5NC6RthX6Ap4Pq6LszF8ad1jTLjBk",
  "key46": "3K2yy95whKLRBToBbjyryiCaA33CZNyp2yKUBwXiyYua5SsiofQ7iBEDbBbugP6QenZRCXYexo7HaL2nZiXGoEEf",
  "key47": "5njaJdUbEaQJkwgVgnavKqsh9utQBqFhUNBvF1MxjCUJvmao3YaJXCiHZmMRaAM35gLyZ8oa38eHkPLNRvf2ywfJ",
  "key48": "2FJxbHNgTspmRCsFLr9iokf8RwWgxN6Zv8TzcsHEeDY2tmQdMtecgSrXPB8j1gbz94j2T48n3UZpbNyFy1bonNFQ"
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
