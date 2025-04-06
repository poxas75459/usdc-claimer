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
    "5uvFuAWriEmPYukptaTcb5AJe4igrajSqyKnpCKcjnMgdPoLvURepzKameQdfqhnWr72hpf6feUg12iPm5qGCZP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZGb9xWkKDcNSSGeBbLRYLmHkiJAUMtFW4aU6sRDGJyMWBQNLSTHtKYpUzzBMXevPbZeKqbrcKysCnMnLbW4HTV",
  "key1": "f5s6quR9wt6XRdAv4YTeQxE7D2SjgjmxpxxzxqNLkS778mZhWcM7uoC3cePHFz7ijU4qqHZscDKnD9NUXiwJHAC",
  "key2": "jtCKpXemSRJBpHKEZ4GwVoeX49BUYFrLk9GM48bwemXKoFxBKbarbNXtG48xHSpM5SaJcGAp8hskVb3QjaBByXa",
  "key3": "2TcFFXXUw37gzkWFTGwSyzANutG5SXRUUkiL7e1mqq698Yt57Ded6UA8SoqdmxBV8NSYESbcCTZggapcPTXHvAFg",
  "key4": "qLm4s8FDHEJE8CTZ3vNSq2113xSkLacEUAaK5915ghku6tPhEqWE31mGosauwopGbptD7zthBaorf4gc6zFFCfe",
  "key5": "5dj8skXhgVqski7xpnu2S2oTfoRtPHMixcWiGG3y7HXKuvJrX8S9wCEMo9XLqo9Xs1R6jCvzYZW5oLvaGnkmJ9sb",
  "key6": "2nvhL1AGM4BLpjAEc9bUkfPo99N29khTGoxk77LZYPWtFrF452P77WQvKkqGvenfLndyo7UcX9kZFnG75BT4Nfyv",
  "key7": "QF7o6FbuEDvKqxHTNXzVsRRu5osKUCAhhbD251ZesqUv5bWsZSNGGKcxF5NBiNcGnZ5NB15suxh2u4epg6Z2ix6",
  "key8": "2KR82s83uwUbrkgs6A5sdGaZC6eEbKnYAixL8V4rqZ4csw8G1VC5DPRe9R8TA2ybTEcr5bQjyKQC3U954MUvNxLu",
  "key9": "65NVsASzSvxJiUvjXKN8vbB5hck8Ycs2XmiojJGccCp8Hk4ER27UYB9aYQcFosW9ughb9bde6n6RcdVxqAMznTbm",
  "key10": "4iQqNFSrv6KZr2Gw9eFgce8UNyYSyqwZFZ9L4ApfA9fTcfsX33AUkFfvMWasbXGVwn3szMijsVkfMR7fEscLwU1",
  "key11": "3g57kJRDeyZ2P8s1q3mLByw8RTG4gSZ3TBDwGsxHeErAEF8ep2bUhqNBG7D9wyDcbhSPJpQ7KNgmWdPvGzzPFFT2",
  "key12": "5Y74Sp5x941ZNHDce8NaRTKqyDLGsxTzHQzyXxMx7zkwNw6Bgw5ir54Nr1F9HxQWJxjhYMyDB35wTUGcJ8FEoGJZ",
  "key13": "rCJKBhzGgMHqED7hA7rNFpuSs54hduUkAWiDbXf5YseMNRawsLkqbMj8ekKZqnwMFLtUHSW6yy2Cdyu7e2hDBBq",
  "key14": "5KFS8eugq372A9tEWtQ21Pupkf5i4A4JvVzpVJcytcLhU6tr39mPTWt5v7PEicrgavipzAw7EKk4K9qm3qXy5qbM",
  "key15": "4cEegCbYwRgEk7jik5amVHi352SPVajCJteNkzbQDhjWtTVpcr4Q3ixfxJqD8W5UVFDXfnSiQfXrF2BgSAhc8q4o",
  "key16": "42Y8fzTjXgRWscX3YseGoQorQPrZZZ41afqp1eZCTd1VdToPcxemCC2ysKDrpY37XsyA6HRsFknKJxGXZcwSqd2s",
  "key17": "4N4MkSo3oe6PBvzYfHfRERzmPTTdM1hqaLu4VBTpd7WDiVNEojkZc4XJ3mG486CPf6t8p1A578oQDQKttVEr6RUs",
  "key18": "4JbQvQeSYa3AstpHybajGKtdqfNet5BhKMMfoVkojgEUyJvJZC292KxKS2Fz2zjNL5SnC1jFwghpJMW5xYTngqBb",
  "key19": "T1oPa2nkaFBfsVv54eMBQmPBSjsV8canD2hMRn79Avs6ZYW3UUtGnVPkgEdBcV7iT56LW6kC1gdnLToLbNsjG2Q",
  "key20": "5hRFSZiAquDKeqtC21JRnv3wHP7LZFr2abjFuhEr5Du4vFUgwCBSECBQspkPwETQfE2Hj75vj2WnjcuyZzzfkMNM",
  "key21": "3cSPXw949ApVKHTnnnMJrWfEUVf5nnvYEo9xt2f67sYtVj1VVPf3ATHmdoNteLTGC1bcz2cs5fH9kPmBhQe2o4Ht",
  "key22": "28xP5WHsVChDB2tBw7ZKCw64pV8Wt5QkBJTDsNZLR57Any6vALkQ44W93w4FPitkD2oTUg9NwF3HEasDKrhuWqwT",
  "key23": "4pTaVBXgt5mGBa522cF63tTujyiETDEseKd2teZBtHZKpV3rGDHra5qapwomKcwKDjoXdBkhDkw6kqQDzgEMPFby",
  "key24": "2kR3Ni22z2jsViUoncwzWVfevLkykQyhLXraAfdtiaP4QHdUxrtjcXp1KFs6iEWeChHtnx57u5xBxAfLuWoJ2ts8",
  "key25": "26tdmovp2m31oT4kN7T7gAxpxpVdCmhE2MgJss1Xio3rmsZLbEqSCWs5a6k7pzxBkPgzMhekzLibXQ9CZKiywnZz",
  "key26": "4zon4Tx5uyZokGMrAVSTBvRS8QciqV2pgxHvBR2kFTEB2R24aKt2TN52ZLDPPB1jnuzVPnVvKi2JYBzBPBgnNLV9",
  "key27": "3s7XzWBQCSr2vgpnnN9GyGBVjibemnUFWMqHLTeV8TJmjDhud4WwbjJsoaEBZpxNSPHCms3kgJmMb3cEJQQTVeLi",
  "key28": "2Ti3LPHjuk9DZdasu96R8mVURD4fuVB5A3mRjYEaL4auP6uWjvNmgHsRE6dmFSigpffnoToj2X15zLzFjHUnjy5h",
  "key29": "3R1ChZeUqvtEPPGV96zBbsyPc4LFyNBcHs64uaq8KJaK6vo6jRxsDWhULuiBH7GoiWVmv8gquo83ox7cYvgfnMXQ",
  "key30": "2MyW17j7h7wBFYTnpN3DXJ6d4wm8TcLsMgvAr4FvsdEo9ymmtuJKTvZVjeZjJaxnJ9aznoy7LohkC4QACm4BJRyP",
  "key31": "58XimdtePgsBoqtC2ntsZWutYfRsKvg31adns9JkUwHXbpEnN1bQ9HfcscNA2Dv4sap5gxbFQMFW9kEKmjyjbUa",
  "key32": "EE9LNXwkzLtAzq1rESps6tP6UPUEQYc8LuWvuhmsLgtptXtKQzfTeLe1wdkbTtWeZXtu1UzVrf3REh3NX8USn8w",
  "key33": "5js7LrarErCRacr63h7wVjMsqVgaPma8MqGj6Xrar21oN9tX3epfzTG9jTZ4KwDZAsqbNTNX3t2D3he6hi34RFSn",
  "key34": "37vZnFjicHwREFpGW2VN2RB7sUuZ6H1SBsZmUXSdgKEtnp1gm4wf6xX45Fm8CAd7GB6ChQFCrGUQCrytF5r5qcmg",
  "key35": "5eVWfZcKAHSeh2G3akZd5WoPvfBh2iAKq9EjEpgWfFBtw36RQQFSc1p25BXv6kfWBE9CujUwBRqS36WT3riXnVKD",
  "key36": "2uuaqrJv3pGQAdTsiB6zUV726pDuAsdoyj1V8umEwq4BLTmsBvSfdbkjpqVCVJd1M9zpXSPSwKiaJg3ibXN45mcS",
  "key37": "3Sfhk3iuqspnzgvvD2NfbPfNCtYgvCc2Sc1T56GEhfB9Nc8hVdfVYk6id4NVbN7vZLp4uStJRNhQDQ3ykrjzW8Mo"
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
