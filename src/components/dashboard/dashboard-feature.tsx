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
    "4ct3K9MiXTMBsWUUbubgYAY5XF8owqxmW7HEWBP68j19V32MV1ij6ohDq8YkFbQc3EPUQXD8BFPwb3vthdEbXNTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHRvx2w7UewwcaZ22APTdL3YGk1tVbXwJ6monDikFRXoxBKpWNV9ERRCyStfQQ2EZj8ejKV7BdnjEzUUF6A7uMy",
  "key1": "2NDYZBhb74Mw5rcqr16EUKBMxEPgaXwaEXJVnivfCLaCuVJ8pQevwwNjkhMogGmygmeMtporE7tTiJ4na9w7WkHt",
  "key2": "2QFxR89x1QJ1gcWrXf4GZyHaSZSWaKv13fb1MRinV1HGYF5xAzMtZ4jfxS1LuMLooZCmiiDAsXD4Phb9iVEWwhcQ",
  "key3": "5vgjmaekuPDphwiwapr1MzRur3Nec3puwhT3kBbfaFmyaveq1PKwSn7SKDQHKhAkYozHCiJCcWYKn677VDvs6jEu",
  "key4": "27LRfvvXNf8uM4RLPst4Ga6CUcmAy7MW1qTFNXcsysBr9Q1dfMpVrwTeSqot6LBDsiweLtfYqyjMHtQC6Pq3rt3a",
  "key5": "91xSurb4ECBvZMmR8L9GXVZaiwD4uhFswF2rshkpedxyUC4FeQRo2EujHfRaqkr7nxV48N7JKaxuKyDiFMVrUSA",
  "key6": "32bmPPmty2MPyonJ6u317b8M5bvA63spgqeQsTh2dXbWXcEsffyAU9T4b3ZALkCMECLawNyA3KWFejCvPsg4WNbe",
  "key7": "56XT3gCJuTSDbehenXJCTRL5hv2VS8ueJtgApfbATH8VpxbwVnZy23k2BJv811Q4TTVYdxqUeWi9K887B95MAFFw",
  "key8": "khsEN6MgEtu5XdULtBYBGpeyXZ96dCoPqNR8YEJyMzqywozfkwnwDhuCeW5hg9XXurvW6GvvjgjZupm2nF2fdte",
  "key9": "2QJefsv8FoKmfd2QisNMJ9z4R3A42VZpp6FbYPHY6Etj1zH7aoxDbxv2K3WJV9RPpF4jrs4oDzRdafz3dH8vkQwf",
  "key10": "Q8E2jRAmRxCSfd9rCj2Hwv1Y141NgvfZRdFUv4UA7knkdhsCHyNE5a634CR3y8dpBawo9ujUed63fSqM6Jwu5tC",
  "key11": "4kwwWsqDKNEW7ZHoCY57cuwT337EDaJgDdu3WjPB63dcL3mUozqZ5LHgSbAudaws4m9VSKqE4xCBk6fDodRa8DW3",
  "key12": "G5didtk3NwisW2cccn4kCk79K9bxrEGYzdFUir6Nmq9zJhVHX232miHahTtasjCNoFmH8VEwbAXGbGdwNJ7FKqi",
  "key13": "33AQZ6m67HcJLCL2zbwpYp1y8ZZhqvYGKoypni4crLq7XqYt5fmN4DRtNKbNyB7cfey9HSsTJPrLQFtpXforyu2D",
  "key14": "44o1qmvEdKwjPeHBbAR5dMLVTNms9KzJYXd1np3swoiow6d1aZH8acFNTC1AyesegQmERXwtjuwHRkjtJkSpsx18",
  "key15": "3tmFq5jPhSc6A99H8Sj9nx5FvihjujoVQWbSFr2dW9gRadBPu8qWT2EnMLVUM8ruWE76KDKosujvWbfWCXdMY67a",
  "key16": "5qNAxb89sdnXt5v7Vn7ffeBK2vDkbmMp67EZuUaTYxxQief397marPBbecX1RwxyvAjigyTSgXDxyKVfH6Nsq6wx",
  "key17": "4bJBi3Vv3WSAi7nQPw2bKADdGWjks4LnQpQ2oxpDL1onnfag7QMjN3WHRUpgEpF9EMnXhAVaprg4aSwECkzrJoSK",
  "key18": "sZdcahxSh7TrTHTNstGmf89VQ8pVAxLzYXsSswadC9r3ErXt1y2PA1ikuqXfpBg2F3p5y7vDphi9gN3PHeMhY9o",
  "key19": "2AeVbyCKCmMM2JcZUZdxNZaGeT1dn4sENJaMqjBgG1ybkhdgFtziwFpeGvRvXm1RnY8u5VjNeNuCBQqXKW2BuXwn",
  "key20": "298ccY8mYWdQKd3urNhjvVjqVdvBMVmXbbs2txnmRRsmurnjGuS92JQ4D9yYrMS72wA4LJ86GUpkbsicJzyvUigY",
  "key21": "4xUrbEmVpV2fD65hkr2185je3dS7acd2VjWcmMLfy6i7KGPFVmjeE85PKFscgucXZJiJs326U9A8JJH4s1eAKWob",
  "key22": "3g48xAGhWt56kqteeF9SiLoETB2J5aWWF5H5CrwhSvUfhjh1za7wVVieq5zqRt93hqWaYfxsa2ZBfs41XBSzNN6K",
  "key23": "3kFoW6qFRHjjijpNSzFuyD1Ti7MR6vdBSQJtDVwUqsoBjnqMpFHzBhdjLW41iMMVLtSqmrGvJAd16QK2rV7ts6PY",
  "key24": "jQgoKV9WXzqYcZro2yk38BXXMZqgheDCbypZMdM17XMqK3DyqKbvRU8JqQ2EnQ3NmnXXq4EwFFdd2ihJP6pTWAp",
  "key25": "VVdKmvdfb82sHmBwLUZ5NX1JLRD1bYtYfmCx5zmfCGVZJRuqiVTCAPZ2BtFQxPe8SkPDaQ74QV3fX5TqH3NpPak",
  "key26": "2N5ye8dWAxiKDXZe8roLBABR2Pr4Ze8BfXz9wqtQvbfG8E6hV1HUssBT4vPkedR3ygdNVRXqYfbYgC3dnVmRKirF",
  "key27": "4o1iDNiStg37RzaJV6pzLnJnhKomyyk9yE9jKWvxEBPhwP2Q6X5oUxstDCKggojShneDz9fiwQbEGZiqL29R62Zi",
  "key28": "71Ezipuq5ZZWHzPbZ2xf857AFe79CiXRJoweLULF5vTqJtmqxvcD4JQnq3H5fWKjSZKFqkzRBovN68AeBbwGyMB",
  "key29": "jtHsr5Tp6vrj7M24MPs82BeTU2UP1bfZUDPaMGf7qAvk9jLS6vm8CnkBARAnpK1Zz3uC1Lfbdd9Vzezw3iM4Sdb",
  "key30": "JUnEsGSK256SFVxdxm3yEzNGXwhMagDjsMkCxgPy144fgsCjsxUeQKDJxX77ihg3mbG4Xht2rBhyKwutCDC5Fs7",
  "key31": "3MMAsW5Xuv7Cb8Z9JPH7h1v4dXN5yBsFvb6KoVUHiFA5RUknB8gtb5CAxGbrJHpYdf8ndtzBtEZD39qRbcpS5qVy",
  "key32": "36bsUqCmgp2AmDCjctMuSw814NyTiyURnoEtNoo6gygdSJuKXHnBEmbNrumRSsz8sMwZCQkGfr3Y7pdbwH4dxd6P",
  "key33": "2aUwvwZJZb4vVD3LKSNdYXYtTSggs1LQnnFxkPT9NCa59iWxkxxKBKMoaokWa8qr2kVGWgd6JqbNFFh5u2eFw8vv",
  "key34": "3SkLUSQV5Yg2sPsihsezqA4aQS5NCxLfQyXme7v1kvbkbAPFUAu8C33HQWQXveg8L2Syhwbi8WXiHtVfk2jySeG4",
  "key35": "2kZM7Rc9o8Jk3RP6gsN4FvFayW7gyqxXSa5J8dPmERT4NmDDg1GChHicJg8aAdUTw3atmBUiw3qKwwf3ytpWMc4r",
  "key36": "3rgtCnmcJ5iEdLaTnE5VXr1DPLaubvesGWNw9RqRKu7DDxNi4v4sSGSqqN5fJRhvHbrPu6xU59XpQ4X6qrkfEaoG",
  "key37": "3zc9uUwVDbEYGtT5Ea2AHFtV4woQmnhm6eNbEihFpGj1hVC6FQTcFpFG8PdVj1VeyoJoctfDJn2vP3v2Ei4MYrUj",
  "key38": "5gtV3w8HZRp1aDSiviCfJqjaA5D19aNnE3tQf1iHnaaVcCr9d4snw5qEN43EeB2pg5a25ikqbJPqjtwLtZuGnFQ1",
  "key39": "3RDr2jLXs9r62bhe536tw7nYgyhn9RFWMDY1qtw93mL8PAzU5wAd58Dxrdnoh4PWhNd6SxALBx4bh5M4zVFuF8rZ",
  "key40": "22UhQ8aeikZVA61f3tzPF7ZYs9tTkoUSSbtQC2CxRRc5gXp9CrDZn18wkuanj64a5XLMVhbA25oer5eU4mcyC2Gq",
  "key41": "7pTB1oYzawQgUaVypwmzK1S772i8kddMU1V5okDjNEZq6fpZcyjkRqvr1dyWthkh6eRspptAbzecC7XHvhzrK2d"
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
