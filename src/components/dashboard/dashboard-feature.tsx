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
    "vDHvZN1C72u7bsVoQbJ7BMWxpLr5FEthfejtrXsAefws6p9i8FM1CE1ogCony5RmQKkEm5oRz4wt9Wim9VPznFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVMqQYvbiZ1kru1hrhJyh291yJBketwGtGKiNk8U4vWPXk7CQGMev2DBkGQURsksXS5g6zaEUbPMQs8Y5ZJAX9u",
  "key1": "2nAwXk8o2TYhXeVvo85WGHXvroC7jgukiQDtqERSQsxzS76E5kzHf2X97nvuVRUuNeSK4CnMNeEYbR1BcfknBfja",
  "key2": "r8KcdnKMUC9hYAgoYf7uqCD6Q8fC6XY8yRy5XoySyVX9JvZFHiGH6x2cvoBFqmKFsM3k84WZCB5V6mMq7cg5MZb",
  "key3": "cntiCuB6bCzHPsrzD8mabgZ589QdoQhba6m9kmn5nASWmxwpu3eq5BgCTz6ajrvtoN3HfN3emWgEWX2s3AZu1iR",
  "key4": "5Cm4ZwMNR8BPVgDD5ScA1W2Ptmwq1iEkK46qizzGS8nGkhq2nNJWL8TfYLBCGXU8DeiNpLAbZ8W1A5h1J5hpbtH5",
  "key5": "21ViNt3CqWmw1bxR1maQkcdfpGMJXQTDNXyC8qYAmr5QnWUur6bdWjGu6k9Ldj7K6p3FHRgaBwZGdhWSABV14Fg1",
  "key6": "Uh9W1cEeE819k5qQCz9kfPpV5nh8utGCQcmWTajbT9teLU3uztBAHa7YiVjk8AGjb652fMzvPqN1Z8tfHFEkrYD",
  "key7": "efHgmT5QodsibLyC5xuHGstEy9yNwnKWarDqPRzdWnFkgyPBaThntdmtc2MuvMA7DWxpjwDouXb3QTViCRKW7uH",
  "key8": "4ngYBSAj5TbtA6LrNdjaBAYhrHLzPKf69HzHsVWwsgxPUEVjE1bVg5C1SDMF7Xk4EvB7vAkp6d1bXuT6po9kq2cq",
  "key9": "2GJWJVghZSCaQk85XWGrL9YtxPZCQugPoyZfeNcTHkqbmnFKXhERXXu5RjWiMkYvJC9kFMuwea8mr7meVRovPY5S",
  "key10": "4RHCXDz5aMbCPJB4EvKPE5c9y4RoDU6zpiP2CcCXsRjexDsx8kar3aPoc2PBThQKAz849GbmDfo5qscwKnZcYrsf",
  "key11": "456yLF8Yj9Cq8fFCJ2EXc5PWawmdpzW49s6FrSCDDYtjLv7YfthY8LJWWzG3RnyQ7bvMWbwCScgoyNQpH8vcARxr",
  "key12": "3L1tiVkvxtznENjqcbLMZURWDYZVdSfAgN3os3ND4kypoSs4euk3myhdcb1FqCyZqXG56v9VsMZRogMY33gU9edr",
  "key13": "2TnCwXZNoSTn3hWTYAVEUKko5rHmnqgAzUpEqnqnyuRtFCtRK84zeSasxABJHgje72Xab6czNaLJSK7L7ktnkVPC",
  "key14": "3dTfMzv5EMVyuRtfkHjxqBNVPv82n9GYbT6RusEaZ3JqvrBB2qpqD3P542xWcNTbigaKk1xFbnszU98jkqtx1T5S",
  "key15": "3csBARGRhAsLQkHTCZpN2axPeCWGhVWtVketoGLFTUtbzgy9eZv2uLdzzeJNr7998U2FhFu48Tj63Zjqxhf4VHAe",
  "key16": "2eZ9AtsvZFUHm7bdRKDEJXM5Je1R7eCL8Cq2afcPQHPX5FSs6sNDeFwYky3cabXtnNCAMZXbgRLtoQkoKMRnn11m",
  "key17": "fcNy2bGyPLgsLiLLoTzf1vpGv8aCkvdMwEWCT1Mo1SQf62Urf1yhf4o4HKNspWSCXxiTRrCBoRcqNZZBSruBeeb",
  "key18": "3XWnEWFummgvW4wuVj6LuekYovgZMkr1iVr9KZhXbmQRyRV9ib1H5VJo3xuUAHZwWdz9jk7oAiNsDLY4peCqRR2R",
  "key19": "YsqpgazMGTwrm5b5EzfdRsMbJq5fgGpxRaMJ2HWoRjXQFibZxjEu2ZuJ6iB6jZCTBxBeMkzZep8mN9LUxe6FEkC",
  "key20": "2AFpdW11fLq3vJFcntAiD8f62eRprTrbSVEW2eT99p8fRTc65xpQ4kLDFbT6FNmSdj2UP5M696LAKd3BWyMCE1TA",
  "key21": "5H9AckRu1Lk5Pemcs6SYvWTJLqwkxfQNCy943Xz2EhH7hZ3uS9ifXuu9fnp1V4X8sDCXDhL8epgvxkCB1pkm9pu1",
  "key22": "4W46rumLCMtXA4g3pbQLQcenNTADZVTX8yy7zxZjMDzuF51YgW4JAqxTVhkgoBpzxLkFLN7mphdd55FL3PBSFJ4B",
  "key23": "5i4s2YKqRekjCU6wWvChd8St9RP2DugLyG5xHTNAZqYyZ1ZED7myBeFvYczZhq3dwFmTmJUJddGwtzZ4hAaeUzTE",
  "key24": "azgDV1isJ8KjtSqTxc1kF8zjmcDMVhiERwprqKsyfppdboAEBd8TDN1dkxzBEkoC2aZCwHQ2ahzsW95uYNiw21S",
  "key25": "is2SWvGScMaQs7wvCn28wgyP68q1dxeRMR99EYzarvXpxjYYp2bcFVtQkWuUm8vvbmD9zSeRHijMxbtevBkFNX7",
  "key26": "65URjzquLHH73rqLXzPSr2x2gR9XXiEFDkkbisCZDNvNWSuZEoRKTdnatC5w2uAcnsjf9nZSU4sYFd9h5QywhLQx",
  "key27": "GtJMkzf64acsdSSEgrYotRbtAMD8D184fVz3xL65LdzhswMSR3gvFmDqk1A3KcTmrmQwBoKqGEaG5s8WPDWZFBJ",
  "key28": "4ESo1FvnXQGCbfKs1BiWxRPCBX8q1GNLGY3xVLnA1kY9HLuRSqQ59dVyynKF3RwrREzifwTXgHhfesRYdMBC7U2b",
  "key29": "ovi76z4KCz9ew6rpW29WuP7wvvEMriRnNhoehHse2yi8Pt6Lc9cfioEGyZdVjDVRGVL3bBRTjon7pC6ibwEJvFQ",
  "key30": "qPWNJfNcbjwMvN5kN3Vasub9XbrnBbx1BiyUa6hWqPoShy6bzbsK1B1BHY97tC5w8umJU9DxGN41JNQuAqS22J2",
  "key31": "4ivNTm9LFdFf7NizbwbGPFdraB6kTzTEwxJwUykDTjbyK1u8UH2nx3ntjYHfH2z4PkzwTmAnCtNxUAFZZ121HbxP",
  "key32": "5yYetLGBT6U8kxdhfH2xBd5Lys6WNWndQ1SBo9N9bzKu6yhpM6NAUFTmNUjzX924AMowMkzxDDiPyXvsS8VeZYdR",
  "key33": "4J4j3oqrK8Q9E2BPbqeG2thVmR6qMbmAWgz7Yr5xuA7fxVFDg52DdNWhoC9cmZQUbiAq2tN6ieuDsKA1Zm2emzZ1",
  "key34": "5xxuntQGVtoPF3AXyHNUDVHf6cxWGAv7AE197KQJqAugmnZ1XYwYbuQ5BLSfcHvV9UaXiUzWWswnr8EL6oy4cif2",
  "key35": "YqFeGCtuQNPYUFKifTE8Mb2Y13Y68EaaerD4hkwpFYSqk2qZwpbeqquED5LadT4ouPvrod13C6n5o353Fg2Cap3",
  "key36": "2K1BM9aVyhi44fsLfnq5pUFVRCU6qgqzX118TVT3LC1hgMurqcNGVFB7ZZ8SyaRKzWz1CryonyeLwtnwhpER1F7G",
  "key37": "15hqxMnYjmeSMeLE8yhYyrimrYeFr9hToZMXs4kZUTaHnuAwGrEcznwmhGnzKuNLsoXBTejEfR9SpWZ8PGBUWEi",
  "key38": "2bNbeGkD349RGLky8k2Hh9iLw4LCiWdezP1dPi4arK74PkfXes36Z9QTxrK2c1KfrYzuzkKU9ZPqCDDCyPhxd2D2",
  "key39": "5x2XH2cpicqYTWD8auJtJCAeiH9Agie7z6VKhGcQQhDoVZ4ePHnwDUZxb2FSR7HmeQWtVATBhg1Vab46ciNToorR",
  "key40": "65ipSiKnEXi6qHJkcitiT4mkiBssK1oM4PsQ4MxDFoQzTrzfbFoL179DFNzoqMNbd4ZSueSy4RmcR5DzW3FNRBDk",
  "key41": "5FAWKvrdPVBxV1uDgqopvVWsoWZWfk6gRLc7UoX6ALgSRCBSVfKXuzhwM9seEfVbDTXVH9vmJbuMQEJ5b6XUqqwJ",
  "key42": "5ABXgPvJ94uuiCUKJRutH58zQ2WDeZre4ayVfHFoHyp2tZ9MnpEc6Hg32xMdS3t6eD8EAUmNp8aSLwtB7oQFwrWT",
  "key43": "XYsBhcSMPH2umyWbBGahhxFzu7vFF6yjQ1EH7MwuJyNtMiEuLPpwZhyEi3zPRzRLEmGrjT7Cuc2jUjdDxEsPsND",
  "key44": "u1WncY8H8K6cTJoSQqowpybn3ne4qjNe9Y2NVVrxWu2h7HZ7RGN4sgBXsG2vdTUWPxjxHqLy8NtC3Eaz7Ha53NR",
  "key45": "5SBxuSfzecaXQ6nTugsB6cHibJyvRPxxAKANiafLwoRREYuTmuZu9VYhnd92FmYR9vajMQ9PJ1JsHniKcyhtxRWE"
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
