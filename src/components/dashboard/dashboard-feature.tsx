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
    "2h2VwsCnwZx5qVm2biNFHeNtRLR6ggVYEjBYLJQtybBpsn84BnwVkpgcMYNQ15gG9Chdj2bfNJXJhsgBTpAevEbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqxCuYgx8JTe96poVL5txBRrLu1n8aP9mEufCKUgFaBqK2LKnaqTGsQEXE8XjDmvYhMfjDxj9d5TTtefyZfZ9sn",
  "key1": "nwrPQhtjxnNYuFrmgssYHK7PxosgYSST97pK4RgxgTJGwPBVt3bezKxonMGDH2H1NBGosA72io5GC8DpU316Am5",
  "key2": "VwBSJ2QMwQzB3At19444RmAUgXwsYG4WMZEnccvT12qJ6aGFCc9meqGdJFXoXJVpCgGdnX3Vfhc6mLJtwaZ74Ag",
  "key3": "2fDgEqAftkesMFfot9Ri7hCkofCKtCer4KDCaHMgCWoMJvtF5d2aremynaoJi8FRXkoKrRkPPPHAgpmFpARpNKvY",
  "key4": "3BjbyTMtJ1EgvXx8Xk82k9bptu8sxMtqZhuLMSs3RKEgtZH3t78uVPENj63i4YHLi56Lk3EpzrSL3EVsukPfAKFn",
  "key5": "aNFQSr4Pc3aMm2QnnaMYR9LUXnpXLTRFMUjNZHitzBgiZEGSezzAEzd1Yuhyjs7L6A42cxQTi9Xw1VMyrD7y78L",
  "key6": "4UpVLkqNs6rSVvqULvvgu7iaq1KwWmFGte34q8udjCS42UwYGivEgtMcep6TzLW7fhWwNbRc6xrS41RGnBVuscUq",
  "key7": "3sBcBoeb5JSBkUA6xUAxVLsqBTYEVbFPJkGt8Q3WywQy8w2amWwMqsY7LvrDPW7Bpyd1WwSSrqnRhSLYSzS38rW3",
  "key8": "2s2gLRx6BDt7BwCN5bmSD4HQG41Lek4MYgQ4in5bGMBZUWAHQsdcv8394k9N5dFswYpg6hB3MbmuJMv5Bad2bYZ7",
  "key9": "3pYKvPPNEDi9zSvKvquCcmWauhbwzSbMxpN7vVuuY27BNBwbrmZsK9zhYjJTUvynzi31uX9nM6tMBXiNMbzJpEgQ",
  "key10": "2rhjZKiKdD7SKaDmCRBbH5MgZ7jqMPj2ArGtJTpamMa8nycTgm7NqcNon7bKRwWFZkTU6Wtop6RFi7cEydvicA9b",
  "key11": "4pGtfPGzchzLu5SVAJWT4a9LRDV4CX5o6yEscvJTnTuZs9DVNDVnoVTSVE3CRMXGJytBp2bkA9LMHVvvg5yNhuSo",
  "key12": "419TcvEo8bEFpabdaRnkm2xhqa9LPi3Lngn6V1bNPMU2HDUmNq9zV83Yeod9n6duJ2M3hLu4weQ5wHHbyNUmdMeR",
  "key13": "4tcXGp9b8VpEcAW7wu7GAybVMw1jZ68NJ3Ffcheap98PpSQ3Y2EFV3Bqob41AavLUccETfD2HBTGu1vPSyspRGtz",
  "key14": "3sRUqzwy1xu44GxyrkKKxy2JngHJ24enGfunkL3HZs2ke13zmy7eznyqhrDavGjjfjXctcYGzQFK7kMSKqZFnTTE",
  "key15": "2xHVhQhW6wZjeFjXktBSZcgosETz1eEJ7Ha1upCH5fzsmG5ZVM2iUbY96vRcYraQFaMtsJ1s9zDiD6oJh6Vg3wZD",
  "key16": "48xAnjPMC19JYiCE61DnH4NXZ5nRoC86MPvviuJmKRsjLjJxCe7qWkoMByVDSLZf7QfUycvr7CuKL7wy7MDXqkfH",
  "key17": "612qsPdszbumxtUkYtxNwSC8qCs5CXd4cywCTtaBhWzNpqxkQnq6T1wDjreSM97XHTmEWfQpxinQdsCbPd3QDxUN",
  "key18": "5QKYKAtanAaRbu8ZaF6PZntits9LfBESYq2QxeP8VRSY4S2rrrh5aRywY2diVR4PSZqEKj76NEqavSRGBoyHB2bY",
  "key19": "3qzCG2kDECzAsHthZYi5PXyU7KtEdvJJRDNxyHJFgTzkiptUn9cVCMSuBKcmJH5q2ts87MbGZ66M5zPY2uBn6CzM",
  "key20": "4Hg6dF68ciBqLAEPK3SxzifEsHkjemkECMtXr9LrFwwcAPb8XSsr6JH4RDQKNt63115F3t3exhhwPDw1i6sjDWJ7",
  "key21": "3t53kqaPjKZ83Ma3aJS5Hvi7XKNB3kCjqgnCRE8oVBkVQnRUi6askTSuYNknPrxx3yjKqXok5dqZKGzDV9tNv1t3",
  "key22": "4tHgUtpR4fqt4omW26meQFtEUrmGYbuxFcc9s22tf4sDQQLnfgdNfAryrQrUY7BbreXcoYityb5UTnPyfELmXx5",
  "key23": "2RUohXRRAodGPixEh1WZqBwCx36on1Zi2wr2hd1koRgcT1qjYqB3UQX3rgMNC6FY9g3BpKmLT7yc4mZRvUmwsNjK",
  "key24": "41RraHiE5H7aKiqv9HrMnqLx2CJjNwP1EUAAFrnUBsqKqPcP3Qz6vidpU5zRkZEa6z9NWyhEGd5pFHthJ9yGT4o3",
  "key25": "4k4wHyrUc5YynCPjve9Gc2cmVaunqqh6tV7k9xBNBudT3AgTVUnyw23XKLtpVFYU1RzXnaiLEp4fEaJvNKteACeo",
  "key26": "q2jjQiBp2u5CCafZzo2YpusGZZRieD1AhxbDbGJa6pRuyFj79hgdtr2bT5vwr1WUt9KM8eaNXcsZsFH7vWciVSp",
  "key27": "5WnHJUqGC55dYMhEyGesfci5witJLQzf6vnwu6ehaYyecDoTKddzrSfGRsoDuBR4wtPw5uFr4X8Rrzryb1XxSDZM",
  "key28": "4EWuZWPyzyHsXUfk6JDQKTtX53rqoW1Ejgvar8CMPM7QS2aLn5MzjxNFL3wZySYAGW8smAtLsX64P1M5rmnyFH1y",
  "key29": "4V2djzjxU3taog9xA12dPJZwoqdeiPscTPWpAafG7NkFY3YTCCEaWUMQYJYyjBCk9Kuo5VEPSLmdeTgPCfZHMNsS",
  "key30": "52NT99pUVyfqFsyHtgoB1AEYFfp5UTPCctxUkYkfvdDHLFg6GtBQ4LLFTSAAG6jDDRLUBSiuM1BMKFinzztP7AdR",
  "key31": "57SK3coc3oUq6fQ9YRSqbthnn6jfuDrf6mr6ZiPFCeZgvcahEyRGQEy2cGG3Me8TA22z52BGbN5ZSynZPwxjANuw",
  "key32": "5MFkyryuFT5PwzH83DcpnDqUpCUNGfPbDWZyPVEssACaUa1mxgvQc48Te1KqsVHU15BZoGwuxyfgDeqVwmq6HaGg",
  "key33": "4RNVuesQDJCf6Tnc4qD5Ds2LbzuMq21nDXSfhNjZijoNkAPFJVXJ4pb58NKUzP9zw6PE3pxoaN7Xxd5zdaZ6UkQ5",
  "key34": "4KwGNy9RSEApSBwzoc9MgUygWXmoDUVQsAiXbtG66pmvdnpJCV4LTtaSwsED8817f87gtfk9ikhcvtubybHHTQTz",
  "key35": "3Phb3tdAX6Fm1UUJjugywsdbodscdp7j7MEz6GBq4AVFiWVkwzQKK6vfkTGK12eybXrWzGEZ45SWij7P9mWri5eN",
  "key36": "2u6e3Ccvzw5S8LzNed1KVUG5KEbap6vm5fsBsAU68p2g8jugWj4MicTWFcFXxiPa1amFxCJ9FdKpP8SNCc8SeWcx",
  "key37": "3bMLYYRv5WtxPE9sbuf6BwJ3AjeN8cPNef2NqJVhmMqTFKXXtCFJwbi5L6CgzVzSfVxTdS59uFDL6sc3xpUimqdM",
  "key38": "2eqqcgXqiKUEpb2namcBD7W4c2ww9k13qwAFLDgAvGwsftKidCCw6L6NyNSxYsr22BJypNkS1FEUFYG8fq6dSNxJ",
  "key39": "i7Wj4PKrgDLWcRfy5Kft35YGay9xtzmFXnBN73kQ5b9LDwKkcHzAwSbMPGNqFobpf3Hh48tthskwQnD1Sfi8DrB",
  "key40": "3XrQVfd6QdM1MBmhvzVr8n8wmg9mrFp8xKmXqNYUg31dZGHQC8ACMdLEB5Z8MxMbxxDFbnum7aYjQJo2Ae3Kr77B",
  "key41": "3gnDPRGfdKYx3J7Tz8iqQrJgR67f71JBVtC36tnUGqtX75wMpBnkgtnbCxDvj2U53MoPRo6xZPFR5LZqjbbBk1P7",
  "key42": "4S7gTXd3emZEVGynLCmwo6FPfzfDeQc3YNf9Fb9ZLTKhVwqvKcNH1CSMUn4Z7wiKhUmyschjstAyDMW9Y4cLnrT",
  "key43": "vAeKqPE6RMmNfaDhZZ5pV3xYLNrXA4CERQ4e9Tu6x8WFTnF6w881MopZCQ1myL6hFuJRfV3zkn4s8rgdtzrc7AK",
  "key44": "2bGZSqf8F1pSagTY8cs2tBqQqW1hNGi9w2HMiziNSknpcGpQsm18xrRuJfKWYeq8CqsgB54ASwgMJZ8jQcZy686j",
  "key45": "4QWhk4uMMiAgGxJdhVaFdKL9R6ZWXn9mrrDywc66efG9Pv1jpBLwomwfXjAtayQT3H4NmxFTXZB1eJCyPZzaZeVn",
  "key46": "1F7syCPc3FVHqpPzQ1rhagnTqS8C5KVV2Uxz1SQCM2WHUE99fYYHPrU94hhcUVdw9FrWDZqWPAMKFZj9gG7LSHZ",
  "key47": "5fbF4M72sgwEPFKDSStwEAh3bwGwDSeQhVpZzPTCb8qSx3P3FFBb9chngCLTHZfaueWDKDeFLxvzWgBaceo5vifx",
  "key48": "4wpp38SHREzftV1v3YBpCRgjUrstrabyzMDpjKd3Z86zGjUboEq8NxzCnPkira7JTLqtc63BDEvkjrEputXeYDFK"
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
