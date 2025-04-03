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
    "5jSReQhjgPUdoDm31TFRpxjtfT41ZjQELmXWFFRY43cMZ6XzTJoiHGRZ4LJVKzsuP2J3EjtYFHGVYxYRwMwbjg2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ex75yDVWoeANrwXp6CYEejUQ3sSthbWGp7b23uxUCeyHucQhPXnbxk5o3Des1CnQXVe2W18ugpJuZE9g4dMW57g",
  "key1": "2nY3uSah7mA333E9w6Gf7SgkMadiNYvgKGPixwzhxdQUFhW82aD82oQcY41NMAyLV65eoZRkczf2w8edUMBrFKzK",
  "key2": "5Emsm1YworHvAXFnzAMdaJxWZs9yN5qXw8PhYNC3HHUqqF4Y5CKtc8pqSLKiTVipoMcgPj7HufvPEHCWE6yj2d9u",
  "key3": "5yKvnhLduDkZeBvsuz6gm5vzvHcK7or9c8Fo7BDfZpk4J3HhYy2qmMJRhT1TATxmSomMhoyhhkZxpTEcWN3TyZSz",
  "key4": "49XkWvJDvQVNhEfdHgjBezUSoSS5s5neHfNwz9ucBEu9giC5bzSwYRJP5TtJy11RvBh3vai3VyVdVy98LLhySq9A",
  "key5": "5dQB9uLWTnsmDf451yBv4AZJWzKbXYgREvZqPiPoKfunaKLLG6hJKHR3enDKJuGdAZc4AipRTjDePVjiqVcwx1Lp",
  "key6": "2xvvDdZSoJkAK9JPGZKm9b3gvej9DiK5PauqQYgfNKsFL91toFiZbPNCWnHd6egUC2ym6ABdDNZ55d1SPX5aU72m",
  "key7": "EXjGZPzhAA7s2NqB2fVVvQPyWraQ5c7fDP3vBp6RSZmKTYSUUfWpGE9bEHyN77FSy67tA5W7bpPzWmHL49WWVzU",
  "key8": "Dc6HZMZR4MT2WvxxLM6VCTqf8ScmDjGijz3eUmmeZbWamn2qJAsLJi48XVi8ayc8LK7gZMsu7fat8FmQUEd7zSw",
  "key9": "5mUTYixj6AkL31E3zyRDp9MHZaexQHNzWr3BNnHkzvkshWXeiZyVzmStQpkkrJ2PxECos7EMuaLEs2vsouUQQNiV",
  "key10": "2gcVqfc9t813HjFwYVq2cFWVwkLCkebE5bKk2QmgsEACELD8FPhAWz98BxYKMYXGxr2Wu4NLj9MmNj2R3Au7Ud26",
  "key11": "2rgFU5paWF41kmorXFuGsXkZpf1ZXyHCTaTQ7hXTfA9UycM2UFKPcy7eAXJMGBkJzuvLA5npDgSFPj6fsxdSe8PY",
  "key12": "4KcB5fmFBy7UdEnRAegBkvjSZaEQfHD9opUk2o65r41yLm5kCu7tmJpR7risdoJ1zjTkHwhteJFNzuWJjk7Jax8j",
  "key13": "4dAoYT4rCw9m2Na8uDVBk3suczNgUdXA2DGqA4qXkn4gV2rrfbmLG9D7QmRCC2eZqwaafbRPGFP9U4CJsPvLthCf",
  "key14": "2zEaECSGDxSmi5anarWb7qV3yjPGs1dDwYL2LoEGVKGFkX5iwYK7tGJzfSXThMXsoDG8ZhEgoySc8swpXDkMHi5g",
  "key15": "3Eq6iDxyh1bU6papxfVFgyU7XrQu6UTqVdRwV4JNJvHHD82gxtpmR2Xna7UkNm342RfQutrwKtcHo4RyANSCVzVU",
  "key16": "5iB8wr9rbiWsK8ZdQRaugPtHgmj1DHp39j8cDrQqueXUQQv1p1WaGT2vCYVc34YXKqdjqp9RyqsBAk92FikRTZZK",
  "key17": "5u2hoBCfsC2trhq2ccYfq8CQzQ3XePKV8yz2m4879domgPZiqvHdJuC6HxVUootR1euGNa6CbukxFX5fPhkZY8yJ",
  "key18": "5LMPDGG3cr7JXr71daJQ3ZPoSsggGnVEvtGZS6jcot1UGnKktnEX8BjUBPnUNrM2TxdbfsPTLriux38CvfovbiuK",
  "key19": "668WFYptMD45ysvpA3ghGWDaSjggcraKJVMUYpkNsbQX14f3Vnh4EzEWNnLahzEGWQgrBbpDktETLpRWLXAqVhvt",
  "key20": "Usga4f7vuy2rzTvK8PN1NBSoh6P26iXg7FjoarGPhdYNSUMANfs1MeoAWYCnHJ8vb6Faj8PpxHqiMw3fDU7gZMX",
  "key21": "2rpGnb9QpTjhuxeU89JvXnDDgPkEsnz37ZHmgZF9gAWBeXEYfnwVVRYKmnRt43jvemACoWtt6td39TDc62npWxJz",
  "key22": "4skhpkwHxrgq6DGgidEgA6NWherSNn6pCnZkzoSLnJ38ENj9i8Z3sdf81odcAXb7veJy68Hv9Bid1XZFMY7yLWL4",
  "key23": "5sJKR2CrSJFghLYpT4rd8yeVzigRcSHZukU7mtoLB6ZR4RLzdLDbZA93a2GBDkNwnTEJqG8r1YhrZLZag5fhKm5r",
  "key24": "4QiYMJbdttphrDLAszuaeeHd3mP8RHkdukcnKJpuB2q1HmLyBwX5ME83mGsSyvQVbFgn6E9zLHNtVj9WjvjiXCj9",
  "key25": "2PVJ4FNGKm3KD9syfyoC7tnz19qL8m4MFTBcajcK2SNzS2yG9XKHzRp248RRF5wrsH2UmdRem8LvaHZnER4JD7xe",
  "key26": "4YvS2Kbp3s26wzch6snSbU8UmMuQXt45WkwvD1W6UwijLEKP6PcFbSTstWK4WbJdKq4zvSH1X1cArcUuGAcxLB2P",
  "key27": "23iuVpgik4mMKpi6DcoNGWK8BNj7Z7zb4dRycpVz53m9LfExa8zLRYRGrHd87zhgCNaah1xBcpHDcDboCXCgEjfV",
  "key28": "2gYA9vwk13b63vJ3BdLp7LjTxTL9ocRvQNSic9GRRdm133SAvoihp93nmKY5LUyCZiP6NfLA6faEQ9dYDFb6VcS8",
  "key29": "4DjdBiRf8bGZ1dSg5Li4aR3QSPz8k4NCxxRydkEXftKcjwPoRMpVnsXSKYrna2aNEHKTEPfvnLgjVgQSF76WXgEB",
  "key30": "4xxQwEHu5bjoHi4qde1EnP8c4gici75aTLKtaBxU4KcaymTkYNvcAD7zHTYQuskJXFgpnmfDFipaqSSZQ6ehXS8m",
  "key31": "2Bk6tx9EuhAm44NWF91NiNsEsy9xUHqEn9Dfi4T4aMYbiSYrcgbcBXJTCyvJhp29jenDmPYqP3JPrNDALpNGWAMm",
  "key32": "58LLqeRd7WGep4c2pW2uX34jw9Ak6fYXkZNKSBsQqvfVqMMJfMdTR3jZrRNHEH3xUPH3inejM8hUyez614EAcUYY",
  "key33": "56nDp7Xz3yKt2QkD1t558hgAGJBGsKpWa5oYhDc7yXJAPK7KZnoDs3xYi51sHQvT9fuCfTZrzgAuLgp4F39Q1QAP",
  "key34": "5UvVP8GXbtcMAydE5Nqe2Eq6QEehuafy88EPqTVngk9koc5JAywZr7PQ749kp4Z1QGqhro7DVQcL1HbTdZEM1zed",
  "key35": "2Vpg697Q7QEYbSHt3nDRNoBGUid2WhEn6R1GAnewwWMHMzL21myaBmrUjxhk1CkV9PrJq3poVPRwmBTL6XaVjGL7",
  "key36": "3qJg9vwxdQ8WzTMhUUdGrGBHypkZH4tbg7qVGWCMrPeEYa5QVXs22T6ZA5xji1fnVxVm4jCxkoiJPEWsC24mh1LS",
  "key37": "4x9FTeFjVF7MBMe2LFZoDBmT6N7huPcLXY8Wui9xY86k8o5bpb9PLSnGagvALxdZz56LcyaxrM7aFFcZWdEPtUPy",
  "key38": "3e66pV3pckDGoyNcYBBC7QjweLegboQWUrQ5ZZsVxvGeoDvE4kwLFtfcZ14aknAh7Hdv5HgrYrMq6UvdWAgDsPEw",
  "key39": "3oP2AEzicyU2WLVP3TRn5h8kDsVyfZZ2c1qcfDzvcZJESGC2WcyVtGrTa2XnAJ4mfihD55JcbnZzKBXS3kQbz1ac",
  "key40": "3tBjeQfbpZgWcXuqAUuwRL2QFhoTydBUj17Rtjg4jCASM4zbgvdzAPMyaWDHhv7QegQicYwRWizqF3dRPfBkzxqp",
  "key41": "3aTM5wauPNomedJA3qmc1B6HdBFa987SJ4iKFpKpAXy4KkHVCwaKCngT5bGfy13NNHpZ8L3gcpr8a8JBsBKBwacD",
  "key42": "BHxkoHRoReBKtpk4utCbHPpPMcpkbepZurwAw3mZ2cxrHrnsjbpgy27fx8oDepj5iH8yKXgLSBndy8gMqnSJwFu",
  "key43": "25UU7r9DSGqZvMgrxhunS6BaYYXvv5Hqnq3McotvLQPyjT8ZtgBj6qtbGd6pwSyy1hysBiRvqpAYYTtMs7nD3svG",
  "key44": "2uWDgMQSF98pdgMcPJGmX3n8KMzyM3mCPgzjEKhEZYByLj9gQCzAtFhnTpjcWG435QC1X5khaADDUj1QwumcjMRC",
  "key45": "3VYNi2bkGsHHsV2KDBuJMZL3bZzfiKaNF8dMTGJABfgUv6dJ57U2qdUGBM1ExN7c5TPeEW2bQikytS2BffCRviKQ",
  "key46": "4FxTiFM6282FLDKDK6RfMYd1c6UVzBAZVKCbiVprEsyNQ2mZE152u3crVegqtaoDf9wWZ3SCfAo2nEnsTxHGbDZA",
  "key47": "5Vqo44u6ZMLSP8wA2YWpSSC79SNqmyS7VJJAvgApmUBuaZRE73NJ4XiC9c6X4gVkw51ZUnR8LdYsDSteeqsDmFiu",
  "key48": "pFbBksWLxEcCuJao43dAQAZJFse57ySUdr152PUyEsb3XaKsWzp2A4cb7cfUmyMxaQUH3xGoMEzNFaEC4XtjbPM",
  "key49": "4gexrmuaxTP8vjSpNdvYAGkaWAxGMTb8XRMoHFQHvuAQUkxVbCzfTTYazBrtNXbLBcCPLyLmnrHvfhh411ksh1jg"
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
