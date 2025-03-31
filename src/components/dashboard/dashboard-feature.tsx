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
    "2GsVDC8rGCA8yuaxZABJeDLa7VFknAQcmZThkmKX6sBca36cRmcUUaLCvVXBHKc8QcmDGdf6e9isuJf6NTRpLHiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ued5F5QkB3p4z24jS8SQr89W5aXALHx6CovuLk2R6xENVksfaU6o19d7FaeTBuu4uoNc4v6cnHPctdfYtuz7wv9",
  "key1": "5yBp3JBxCuRbNEstyJy2ceej2dHg3ZqeEdnKmmn5otSyacNxr8D8pVBhtqveRFWxammRt1afE6iz1gZSKmnKiXNp",
  "key2": "54zkVYPrB9dryJFLkKoWobfwNsmDRPSt5bXfqjoT1nbD67ceDuwnDCXefSPYr6mJfgqQhPrk5CiDKeSewsiQ1Vwd",
  "key3": "VeYVvTgmkTCATiTzeEMYY3Hzk5zAjfHxtPA366VRqYZ3pX9ntS7FgXDWY4FsFghA1xAdpg9zJ4QMJCzEqoZpo2B",
  "key4": "2GerT5JtTPnNNVbhMjXJftSEyNKbq5C2nvff9YmtKxEERanWUBj66D61XqhXQeJcQDtzLyRmYa1gvLugpWWeniuh",
  "key5": "28c188e7ZjbMGCzyvmchCFmy8ETeHchua5zsVj9FG2axiFt7e7PuxfevxXGN34RmTXk2qHMDhyWcXmhaQTtGAetJ",
  "key6": "2RK9pwQUAmN45xtGq2DYy7HTJhMe7r5kCLUogDVvBgReneXiWnCb42Fzorbb8jSgioMkLNBJah1R6qFssk3Pnuia",
  "key7": "4yqq1ZxcaZEChFj4yVcM5sNMUMXG2AVuUKcGAVeCsA4HVbY6skz1Mt9o5UsTk265f6xh7AKstJacjUNHgbTN7ELq",
  "key8": "3fJvMpQcp3x98dHzrQgs5iGNAMxCZDcj62gcNu32XgQbaLo5T8KGY6mTrjA97MC8WKoPvXUSzWM7medWJmSqqDCw",
  "key9": "5ydwJ4K9Djr5RQY23JzLPWskRM9EwgzhtTRs9XNMtDRbb1QASmjRybvSsZ8PZ96ACZK5tsi4BukUT6NVji43epPu",
  "key10": "5UT3qVFMiQkHv73SpgVUtFbfunYmncHvrUFC9B6zd2r91zFVHrMrJqpXvYYfvmorAQJzrnm8bqaHmdzwZEDP4oot",
  "key11": "5LdWPQ5FYV8GAJ7QfJ3pbVUVgFc9UvFRtYDCL1Tna9EWQCcpTzC7efzDJ9RmeW2d1MGUy3NvqxkzWk1V8GnuizrS",
  "key12": "oWcsh1YAw3LoJAPb8bwouMxSyCc7BfmAR1wi5JGcZ5bjnDNHZXtsVebQshpRXvGEokXZ79kX4JWgEcnc9rgBuAF",
  "key13": "5cCzq1oqFtgpAQ54cfX36Xz4sunG6rjZ99aD6JcgrMx6Zi2yn1Aq72u1CjtLFSymhhwscrWPRNa5PawG3EstGEkC",
  "key14": "38UX6garr4AmA31XPs24QtzDPDn7A9jbqRA54dECDrb29yBxdvgpymzkVJk6TPGeocuWdtxVnWAzoMLwa8cNTHVs",
  "key15": "2EbXuqTjvr8zMdLNvZp6owgJHVwvcLR8oKQ6KLAwsHr2nutyQh3g8uGz6crRd1UhAccytKY5Pep22LyaEVhji27J",
  "key16": "2dXnVYzkLoLTvqovVoRSWoaNvgVDVWgxCkLcQBndn7He9hgu7eFgoD8BQqeyoXaCqN59EcQqGtoCRbgcW7azjEhC",
  "key17": "4suHoAmam3yUkmVgwgTgiWuXmHzb1N6gyKY2ATGGgQd6BwsCnm4SZsfNBMVMC3JTudZsu32DEszLHdQzWyqZA3ZN",
  "key18": "2baQHNxmF55T9oBNa4GmaEoXtroMqkwnNya7ffR9EqC7jji7QtGbRAfTtfgtiKJPEcztkQ1KvcL1SHVrozH92AAt",
  "key19": "2ABazpnampM4FFiAdHZz7QxBLJqwFZ7PVBcoYexX5sMgFCkQ85QRWv3jb33YVXV9LWRvkifF63JM5sAuBGaa4TrB",
  "key20": "2Kh4jK44xGzohrqYn59AMbJD5yWuFmqNzvaNVZ12HDke9Yzmnx9RgDPaxCvTczgWJgqZn2iPgZnZoTuJ1EvjEJNh",
  "key21": "2AhSG3Baav7durEx2VKR35ieE3L6rjxut34ACjbkme6Eeqhpeypznvwo57hbUmdpE6L19UoAE12KRyAPDfYiK5pj",
  "key22": "4uW7HDnssoo5Ey3ToK4YtLYGFQVURttAzLUxzsYque5b3phGr6577MEjWKcmFiur7UGcCyWcJggDyZ2mzG1xX4kf",
  "key23": "3Tqk9jZkDJgPcA9PJZLs1MikMJNSWoc3Gs7MSw5QSzgwb8gqiwv9FFFKqfn8EjAzbZeto1X3Ti6bKHLwzdMett2X",
  "key24": "3xQiUmXRNbhWt4jNWCavAMwHKLS3m8CiYYRb89gcGaKzcheQ8cLabYDZHokUV5LyiewJoXbt3KBgbCZkGDDBt4Eo",
  "key25": "5GekzwPHfxQmSRT6ZFSEN4Yxw4mNCQLa69Dpz2GsJVh1KbRMbniV14HjhmZoNwM4tPcerQ9AnoTcy7arTjvVxfCK",
  "key26": "3CtHCpbTBwG357HvE1hk6tcgkBoPdXBS6sLWZcnmG9o4aSPqGKRjziGxHPvv5eK8gh4XLdTi3yt2R4wT2aETHGEt",
  "key27": "5ekM5nHuefDexe54yoYh4JNVHV251e3NYo1e9PYTyv5QZMDVPyNTqgbX4w2HGVJJyQWQJY5APs7JVsoLoC3kk2fG",
  "key28": "3razv8USSkoDH3d2ggyuCxycs9eBxtoGupdRJraQn1oeG6WF8LSMpCCQHrjn56RwBhFDp9uetVCqHTyVeLbuGQeh",
  "key29": "4nkhK8GPwy1b1gSJvM6TcdyR38rD37Q7mhSueSjoEU6WRARyBX1mLN1BJ2B2SWMSvw99xHw9WHuAYRdm3s2nW5dZ",
  "key30": "gfNzn8N7aTRchyxVaQm7AfifWfana9NFk9nPrdrfT42jekHhSikSnEv5eqUeFWcWBwRsE8CsmFBbe6hX6MGDyT9",
  "key31": "2dtTCcRKcx4KvWAdM6GZ6tALCdbVeU5CHcsiRUj2JLHQeKJHGtEkgRsmmLNkcU9xA5XT6Hng3fbeL9QiyNhfJ67k",
  "key32": "4AopuHKrq2YGvbf7akiCACnS8mDtMUtMx6CvtSBXtgTouPhS95ugrTmST59vZn3gpdJfhTsgTJGQJ7o62tYtCGfm",
  "key33": "kcs5od1WxP9VigA7oZBbqPgFYJ2NMLHQt1UheaRyBVKCjXWaYtBMHh7AEqaLx3Tw1nXxwKFSw8FVtHNSsENSHQ9",
  "key34": "3tNDoqV8dSSkgWz2BiSatyaai3wYw3nG7J1QGtSykS7Ddy2c7aQ7z4JevEzxT5uMTXhrgmSCAokLGSJLKG3R3PBh",
  "key35": "4xssDEZKkkFa1Zem4RZQgMjuqZ4dkdw5MUy9mBxGmet7teDKKYsbiWpq954iYrs2k6q7vcnorcd1CqPgNHFYYfsE",
  "key36": "3jLNWEbTDxw2MqS75WUBhu191DtQyhF2nBeSGX3HBxpwov18cW4PEuSfS5qkmHBoKBiiLy4iFMRDNYwyfWypKVAE",
  "key37": "5rVwh8jUZSyEuv4bHoKqRUs2NvJk3jaxHbuZiVwMn8NKBUHdhgyQ4VL8KKgt4fG8sB4dmVrSBaDhtV53meGze8NV",
  "key38": "46mGXz43TFjV3ecC1CZarzgW3faLNnzKNERU5941Jb2jif2QL4dTzbJVFzXhZqi2vjsp4y4iNPujxYVZhRuYaP1M",
  "key39": "oftsaD99RnX3ZzL8zcGczbjZFut4eksNhMaGPNRDzqray4jcXr28oyaKBkczneVX5dzoAPwujDjYS36Rc9SaCPu",
  "key40": "eQYFFyAbA5fUABRbfMeVLk5QuHB2s4gyVDV6o9t2UGoHWmNezyF5XsGAJ8CMgWwNsxS6hFu4LHPeXpeN53VfvPj",
  "key41": "3oWsrjUjA8fauiPhxZTncepK8uYwJzEZ4CwHXKW7cMyG2TJFHYEWiX4q7JeF6cmVPYDiFr78yZj8ynVDmXGrzKx7"
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
