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
    "3uv4wJpToAkFCEEFd4p8SrdZAFyKoKRwH11Ah6cEdbN7L9wjDh4hC7kSLPhqLvcVQfgyhp5AAW42aM2LciRaHtKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdWNqGKc2RrKE2h2xuFEgiQsx3ipCDENsv2eMEYmm913ErtSAtZCZ7B4oGdtVCX7DDpXbFCEQPerAaG6Fbra7Xs",
  "key1": "7HJEMLyxakY88kuYhFjVfStkkTKSQF4yJawYw1FBE1oLXmEi3eQvN6Xfn3b9hgvPaxgXZ1tLNo89uCBU9Bn1iDG",
  "key2": "2byvA63QeuwPSNTEbH3mhfkrQ4hMJei1x6mQDNEopiwgexGsNH7SFEaWcSrRo6CQy2zPJBFiYL4A4Bs645qqCsGf",
  "key3": "4oBy7VM5jgfH6huQkz3iQ9Hdmtg7sZF2Bn7RGPX7d5eobi1DZDmWz2wGX7PQSvt36XcgidH4Am7jRxvozJJ5JZqZ",
  "key4": "5K49m2hoDHzQnptUkbDMwtihQsV664YUehUUG7iwGrT3ARGE3u9kpTEbyYi5MkziDQGzh5f1oSHKrp6N6LZUaWFm",
  "key5": "61BQs96eA5n6KokYCkWm4yweta89JEyGURMUujP84ZdPxLBJbJPygYzX268ZN6CgbES9F2coLA8umLMRZGXWHx1w",
  "key6": "2ZrH35mJXpLg9MHi73XANCbY7PdkhcGaoVdgjAdZPamesbUoHK92xToKtjJ5fZoBobwzrmafZkhDnGLWAPi62vKh",
  "key7": "2yd9jPYoGqPBWcYTD5kVPHVwE7h7gw7ujZBKTu2VQk1rJsEbBZQzMQSrVb4ZwbamXeXkSptZTbSnfhzKgU6oa36A",
  "key8": "6ZkNHqAoRayH7H81vMb4gZFdsWR2X4Wv2Eyuu51KZJzJoRY21XmZRVpfoonpWWSL2cuJk9dMoA4k45oykVKNHYi",
  "key9": "2LrQGrhaRAV95Ljn5XReFMMe3uuNM2GrWAFJHXbHBYCNEhY4maJvcCuuWqsyENxitj5hNAfqHqXNbir8F5CPPxCY",
  "key10": "54HtXmkHG47ExPdcj41K3mMDtmFKSarCk8Meb5SyQSATGAoPFS8xed1ES6zRVfj24Ym8UBjpwMsewvGzi3UqRrV2",
  "key11": "5AEsU4iWAStpFp3C5yfVYU5VCHeh4C9m98phEau3Fr9wZSAu3HKgzac1KVvDt98wvHdZfaAgmQkD1j9kxY7NjcjD",
  "key12": "32psB3CnMdVWU1dk2gYoPAu3SciTfWG3dbxkiTjpm4rGY3m3VcCdzwi7yBEStZxj85xmg7zgHKiduP8dt9xMPo6A",
  "key13": "8FAJV7xu5uPpvaf5Vetj34vm3c7XQgNK1cDqWJCiEjUqy3U1MyhFTHX8TLNBUWyQ729gE8DKj285t4Hn8SQtrxh",
  "key14": "U8zYWcCfmVEBXNBPPc34uRSJ5CnviEC2MbLtjhsoixxMNQ4rnTAmJx3BUZejtV6vhXQafiwvfEGDFqCCtvRnYZj",
  "key15": "439GpDyRYAU3ubhL3fLBPizPBRB1ZDZmhMWfGZg1LMq5rHiGRbZnkXQw3mimsjL7gumbJwypDujoN2p1gos3PsKX",
  "key16": "4krMDzJDfnfwuvnJcRsoCBnjK2B5NVmUVTmAUR9mZ5UwUGnugGiEVG7cX1FMUYAxLcvkmwpLrgPPjF7KEtxrhQJS",
  "key17": "63QU7kWGcteWA1fNwXZ6fn9MVtuBECERGWpBEuQ8d5Uo6TpmhkzEgNhEDAeBBAKaK4n5WKk7oSJ2MxLB9tJ7hjJV",
  "key18": "2hp8q3RPcBApoxf4ECi6bMYar2R9Zet7fq4u8EVJFE7PMtB3c3cWcN7uAht9CLtbvonfPrQqQP3BHrWUuKR1nbwx",
  "key19": "45Jtgr1t4rMVjvsfgJGy9ENR6NcSvpFVCsUGeXzRy4mZf3AzbFXPM9NXuGf7bz8Np8ZL9JiSfZLagXsq8JBnf5Rk",
  "key20": "2fogndNU2rCzuqqp42rSAg2WRDYYdVvJ93PCMNqVrCCEy3amSpni3Dp4fDAmEoqYXkQhZmpBGfocaMaKYoXtLgma",
  "key21": "4LDucp6kGfSCbcsHuxFpGNQuP9vNCC8AuLgGervdyc2b2vvU8uhmWrCJqRH9Prijx2dtRxJYZtEfY7x1bG4fcSb3",
  "key22": "ETwFhsx2rwVKt9gmGVhCwW8qpErTnZ6mg9271DitbRLduCpeEATJdEjxqEKQee8ntH8dRWGmY48A2iz3sca4pVz",
  "key23": "2MqpdUzRzAzdQiPJGqwYwU58S13UKujP9NFf4HKJKxiiTbh4XJesFRXuazZRArc3GcGdSFfCGSBNSEyo1zNvMsmc",
  "key24": "3igrFWTEhfC5Soykxtp5SyNVMy4G8MqtcUmYbEckubuqR3f1Xytrs5dsunNUEtzvKFxeaxgx8JktviSyAhDs6CWG",
  "key25": "23tGuHobhaiiYe21jWf2JqCV9pS5A3r6kuS1WRriT93sCCwPnF6mWUgHwBBCaY1u46ix4SZECuAzGCpYqdjR7J2a",
  "key26": "ywpQWKo7sNyUGLmrJepF8tqQqXEVSR5NGRHyfJkBh5jdJ7CfH2V3GBygPxBU6YRjpJw2iMdY6eKbRQF2YA7GSSM",
  "key27": "2f62ThSarJjVkGQXU5JBQftUJHPAVji5EP5ve11CMNuYQyzZxpsf7Zkim4kjARVHUSzLq7xTZYuyvt6v8hUcKmrT",
  "key28": "31cT94HbBW2xSktcNGTnPYETcLwRzonoC17x8s7UusnB2fDvTGRoj359voviG45Ryy6DSgMLfJk1hGoF9N9ErpCx",
  "key29": "TPZ2jo2YNjdQQWEAiVjVV5dLsnPwDzj7MBhLR3ZwhTjKvg8hQodEgwwrXjgQ1q1cy6qi3i1gp9Ky7P5gGWKpGhL",
  "key30": "2q5xkhA4Zfn97mutHPaNGHiBHSLdsDN94tGa4G61TmCVinMvh2b47SvSFuJVqcm9K5G8CsU21crv3qason31R8uV",
  "key31": "iQqH9c8ak4E53RfpxDUEdhkdxtbCMMrUPrZvc2GBUyEv1uJrMmyiLzKPXmkB5R3Loht8Nfp3UrJE1Hq2FTNRsA8",
  "key32": "NCuVtenoitRuaeV2TVirh1GbJavGERwP9xcA9HT2kUCHdHCyUnLnZoaT8RMTkX83swaGgoMWztpc2DPiJFJSsXF",
  "key33": "4BaGvrhVge3WmQHkdBVSZmXDVhtABTDJDn8a3kjNcRqiPZvDDRQ5pkgdhtDX7ieQXh1vzLCdGvUt7LB9nDL4TJSa",
  "key34": "5rizKSbuCxpbRxVcxB8bxKfHWLkwENFkswhGREzbptRF9eeosgkHjBocabShNVuUWAo4xbHqdy3ZvHX9GkKrjJ47"
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
