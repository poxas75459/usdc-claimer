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
    "3nviq6bCaevUrXCE6AvGpKxmNA2pCFrQu6QDi1yqrx2CWmfyF2JJDfoH7hwAxQq5ah7kV3nuJ4zbSawGYifRZhHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25nxqxMbEccVPqvY4RwTUgmG7Y2eeYqZjxE64ghN5HUwCznbF2gthtNFoAM4kgkDN7tZcH4yueBHED1CwWfV6uhn",
  "key1": "22eCgnnDChQKNg5YNP7X1YrnekxrVerLEeVammJrgDcwDDRSsax8uNrDHimxv5KzQPsyJY1w5QKCBVS5RaD6iX7N",
  "key2": "3xpp6wdQmy2CKr8gTnQwTPpwgU6SR1Q2KwCV54UtbSnF4XVq97yQaZAr33SHrrdFVCJsWRz9ZaoM8LfLnqxdKYTh",
  "key3": "3n5U2xxULCf8UBDz7PppTYRebCxjBje2Uibi6QV8PykKbx8tKvzsyp9nCS679f6h3Xs24CDXhKeXjxDsV5cX3s3W",
  "key4": "3X4FHyvALBV1EW5MdR34XKXfPnch6MSredNabE3SPWhinF4anv3tjSgDmrMsGb2R7TGYH1GFxzWTn5u7tTgEECyN",
  "key5": "3XfceLJBeWB15JtfDNitQ9LfGWK2sebMD6YikRSeasLXWMSYK9HwaAN24CX8npHFWxvyoTDfDkRHvuH6pTKBSe6C",
  "key6": "3Xs7nJn7phr4P9mr2kvrAJZ7w2gthNqW6D1qbhdVv3fXAzbvAJDGy6Phu18ScmyhzwtaNaug6CPd8BChgDnAWgj",
  "key7": "3ryNYx6BFzjWmb8LifKGPBtqDC7havgQv2nqWuuG4jApdnCmBxf1HzoSnnnGnMieRRa8PC4qkaqFP2wBDXUsmspG",
  "key8": "3bx3i7VbyByZCbrjuB9Euy4Lih4R63SYMX5EkLBKYQJqbsf9LF1BHPsuQUJ2gmnyT1QiL2VFj2WG2GY4WhmvLMzZ",
  "key9": "63cNPD3XkiHWb7hbH5PtUKxzFmn14SUAXH9yNc4ghLxsS8doGDrtJvspu8iBFpudx2dkoqb88d5yeCxoTbRoBsnS",
  "key10": "3qmA7J6ZkLPyfCXi7LGAHJk7KxUUYC6kVYVVukyWrCoNFSHpNBiJK7iHU1uDAK7sYx1QBxdeVjG1TSdxP54rrYiz",
  "key11": "2nLcoPKGdZH54iag5eXVTbPmw7MqycZPcea76p6UvcKPFHoi2wfhpQdsetqks8wny6VFn7kgNd8uoQg9UHYLbWPG",
  "key12": "3qWWXpjzrqB5CKnqXaFm33M694fKdmRbzGfeZ9iiz5SYFh1c8RgX7dPnTahbXyBzAmDXVPimC7hxUx3z32qL2Nna",
  "key13": "3FNLGiRzbRk9ucbrgbNJpptBEmjDHquKUTrR1XxhMNjoCZRkh6yHnjufcCDYuHh1sier5k2bL4kVhF9QzwpskW9R",
  "key14": "4ff5L7vj1JzqRe1vZ5SBVmNz7frV1ZCumqb54C4rk8PAgwzuXcAJa2yEtCJ2XPR2wTBRsFN7ZiqWxcbXPghQ6Kth",
  "key15": "ZbJq9SN6aevUsK6FWGkemhCHtqAoEfi7tKmTXjDh81d93XbtkFkHdXEekJ6q1qKeWYcZgXyMuMwpfVzr8Db8D6h",
  "key16": "5xZZHVcBaEgoYsdvPuAewwMaVpRrmmiNHy69ffJX3gvte31YxHzL1EuoWXzkJpjJRu35qZ2crnXEkxd1hb8sSZF5",
  "key17": "2jhysa8ep4Ue36FgMKYErmG6qb8W92vCtstcBm6QRB8vQjsyqKEGucwnecoV1HUowsBt2MKyrtRDS8QkEAERVhPB",
  "key18": "5gnx9Lxc2YmXfEW8F2c29EF2eou5UyDj8sAquiCFXgy6q4oQwMJWfDuqfrVwGW6vWWwtFXgpfqBGHjr5MTnoKbzk",
  "key19": "2JAzQzYAftEMDtNhdxZnY9BaBtSGS1e7Dh4hqpWSkWWsd5DvkPzuf5iVhmtaaf4UGQafNBrKPbxTMBe1WQThnycL",
  "key20": "3xPoAgcFjnPWvsz4dmggy1FJWEG1Nq3hxY5XwurKnXXkpF9dJR9Cfyk94NbpBCmbZJ5uAULrtrBTZr8Go8CtYrfM",
  "key21": "2SZdb7PNDKGu7f9AzvUDciSgtUBWxoorGnYRfR6R6mx5Zp6kZdCDGTvL7ifRVavk9cqEP2QzhHY8HY8GcrF5xokX",
  "key22": "L9KuwUgEkeVP7UJw32A7FNqqdcQywo9nZc9iCKrXdhixhGVVEHtasHcSmFNUkWWtSMdNroTi1HNCyp4K1iVzY5n",
  "key23": "2RxdyDfbQzKpBrfJ2ksKnxi91vWwppxWtUEsmiGyk1zYtGmBMMrs9xXkmpxhrbUe55173ATSaHiYemYzcaueJzj5",
  "key24": "4j79b1EKNVE1QpjTuaDjYWqbNkFAMFNNMnzAMckcrwtKjY6MAraj9oDRc1ZQAN5rj1k2yYjHLXzMsepru7oo1d5c",
  "key25": "A5SNEueFTu1rGvQtcf8P5TLs9ddFFhNBaaRh9MFv84RR6JrKNsiKRUZTQ66hUrgSnUEDmCCitkZvnEWfSJTB1i7",
  "key26": "ac5z4T3DbUFLs2HcXGX8tYZuETYH4oHYkfCkM7zVop2qfFKfxoWhEiXUNaUuXw5G5NZiH8wNPEY6PE2SUD6CZpc",
  "key27": "4RoT7nmHJWnphbEQCnwkkKP9My4DMzgBw482qoJ5WYam8F6z5XJMqLqvQcwfte6JC8XxMEbfwbYvCRBtzbrSxs78",
  "key28": "Hv75jkauZVEQJbjiAES1WjgRNVCKb6bU2S6vmhQURjTv7pFvWi78UBmfN7rkzUNVgqZVhkpe3ZxnExaqd61UjSR",
  "key29": "WpHmuEzCA5LcmXiKR5hpwCn3Zn6HkNSf2Pwtix2Pr2vvukEXVHNi3Cqk5omjrCfnsqbrrKqYjPBFUn2iyGs32Eb",
  "key30": "4iY5iAhHo8Zp16Wr8PneHYR19KMNJZsn3KwfXrfissZFAsm4ucvjnGkrETcgApfUaGGVvz1w71h5Yhrh1ozroFQQ",
  "key31": "2ofdY4Az6FabKzfnt1jjqPSXtLfssG4PECQdoj1dqGRZ8iSUCv8kaWqyUhyXtpZPkX8TYMEAcTU2Hp33eWpMw2bu",
  "key32": "32qzxRVPUfnYXAjS71TmFaLsi6iXLEype9xLTmiWmf4JCvLTHNvLaUVRxd7B2gGudwkxCNvbxSMvmwANesZraTik",
  "key33": "veTsoWyHdpQxRQP1QH3GJvsDiCN8JSJGNC5Q3VPptaJmC9dJvR9WcV4sEZZZ4C1AeDCnUXUEsnAru9FDiUmuTVX",
  "key34": "4i1keDmSUmiSWH9rpT9f4rK988roKqhBF7sQrCJAe6h5gjrEAhVgNnKGSbp4sLkPcav1LAbqbeYLx1NC98Dedwam",
  "key35": "2hxmV5NT3rv1cmbd3ebQ6aGxEjvqW5HmVnxi8Cs2XdEMNsvMu8XbKWzG46bHs81xBt6KQLJ6Ds52UrkiH7UTQ2e4",
  "key36": "4edsFzHyYq64tGL4okqgehxMJj3eQvN2Am21TnCYHWUC3gn77onv3kDRAjs3ABkfZDNhrF36Zncr1HVxm6pRTxmY",
  "key37": "5M7xyBCsgU7JNUds1viMETSh1qtCbnDm7dVj3CVrVYSTx73wHcC2aTDSAbniXiy8XswLYYshaWTLrdDTi4hFKWUr",
  "key38": "3LMuJ6Ct47rF7znZDcwvkXXzxdovk1GNVEDGZWWP2GvqrcPqx5bP6bNCEmFu2StqNnCvvMzTkSv8tQVmpsotfHm4",
  "key39": "Q4WwcjRC6ipVjdVuMgqRJN5F8qryX2VhDP1hA7bTG3ZkweUy4gdVG22TZatLz4LZbmBtJF1bHUDWmYcHErcFfNQ",
  "key40": "3AVcrcbmTK66FdYwHCYN3LinEccGfuc7sDdSxnzDhg6RWYB6vbLqByJRYaKTKRhRDAnfdNiVyPJ9Ex19oDZTQ6Y6",
  "key41": "hBF3p7XcjoTyEBymB9edfwB9UeafFFE2qfoZtSoshKbeNN4s5Pbqo1JWKGyevXaBCA6S7qo1tS822Sdu78NejyF",
  "key42": "4MGDausYxbQjwt7RendnMyamSBKGLWy4Xy89p11XjiwjP9JpZQWvDwoZLPk48dEyGrk4zkyKxsfPWwv2YrWJoM27",
  "key43": "5pqyMwXbk8A2D5X8t4L7QkDJGZQJztNfhGwGGLnJp1Ak1UX7XuA9FDn8kPjvL2vy26vcVbAf4o9T2MJa9rgx1nZ1"
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
