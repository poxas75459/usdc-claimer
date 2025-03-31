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
    "5Fc45vWmbfNmoCXpWB667pFhxNibHBKU64vEQdEaCfEVgHFXgVdNofSKgk9ACrpNoe5QjCf4aTngCNMwEvMsJVRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVTDybNAAKhYCBYfn9dysqDDuoq8W9gfqqQcGtL6zmVjcXcBjHAuT2oQLoSHmNgzhcNLBAFBdzxpBG5Ym49ktnR",
  "key1": "4vgheckDeMUDDiUxwnN64jExsJCYd9gLrK7ENVjt7Y8oL66gYq29JGr2wEHHeJcxBCPWDgmruZ14qWnc7dfqzTbg",
  "key2": "4sMuGeywytpwn55KaERb1Pa9zYEmYR88iic7dEiu1HWZcdxQeaR3gdRdZQy8eh3bdbHwKvnSspkUMVquWidaAFQt",
  "key3": "34pG5XjXxr5gskCscLTgxHezHk3a2skv5XwSfChz8Qot46fnU2fDvEYKbBgrtsZHDRP6Tzgzvs8KnQhjSmEjbo1N",
  "key4": "2vRnPWHVPYDZs7UeTUyZKgoGwotfT2zAGKo8cBM6UH95n82UxEThxeXYsHG9pv6uK58uef4P88tzZPdAQQuaJuEB",
  "key5": "66mc88dmTvmHXo6ExmHxKgqWrsGsg95244cBCy3qeB2p8NyQUBei6JTg8N2DG5E7vedcvDc57MSSiKB4FyUvPR86",
  "key6": "2maM1ZZodc2eNMszaGNN3fm8MrLrWTTANTAN49TkZqxsQc83Mp8JYH19GKbKKg1S9QBxXnTJMyEwDueTFaVMATp9",
  "key7": "3qEUL4WQp9GQTm6Lk7xsKiwoGe8NMkbb2Pb62erSFg3MzHnGc89W3r5yH8qzVnGgmezVqEbBHWv4DagZL8HBJEPD",
  "key8": "4NtTF1rz29CchpVE6c56VjydYVkjn1TVCUig2gTY7V1nBcLfw97718jDoLuhybDXw7uJXxarjHJjoHJtpZj6Nr2J",
  "key9": "3Dr77SgxNsPSrMWr7CcUMEiPuc2FtLW61FFPw4xKMQni7yQQ1MkEKgL8R4MNjjo8aJzo92BUvBGX2sfNbxTcVmda",
  "key10": "4wzX1q8SCDSkcADxGDsoLpXPnskZD4s2kdDf7hGZWQ9BNfQfdXuecwgn45WjEHy5wAViq4V2ccn8X3mx4eTiP6WS",
  "key11": "34A9rgy4in6DgkPNZdBhsP59fJtWPBWDKCW6iygkCjfMorcfcp7p9rsQWBDTTt9BF9h77jHDtf5KTpWrAkgQjbZN",
  "key12": "22pYJ445SpdVtMCseEvEUac51F4H4EYCzKMZGqgsSBEUhzW6gXp2jwcssijW9yXbex66bvUqU5EXBVGNUWDL1BEV",
  "key13": "2VRchrr83ocG5ZPWGJhUzd3EkcWeq77ujnAtRcupgM5ANGvxpZ37PVPQBxdAf1J423owGhX4AaYNo8iu2csDfsmu",
  "key14": "CJMkzUvboqSv1kAw5kg6PQRGXKsWH2WNNeweRCHsnFsCNcKiLfTRV1UWEiRu8bw14osWuCaB5Yrk114Yyz89qno",
  "key15": "4NQmN1E5CSvrPyubFDjav1dY6ijdA7fdjvsmrZLaQURtWGGbfank731VJUFQ5aeRZMPWVo8qhPcePyzrqHD6tEzT",
  "key16": "DA1bTgDXM3RrQscc8f6Y5tme2P9uHRAN2Hiaebd3gKyHGjqshGs6HVtJdNeaQLqFYhBzBXs6GD23qgbK4FowjdY",
  "key17": "3u3bSaTBtMcYvK2nY8TmNKNubJGk9EDYFkjmsb9VTe1wvWvHcVghWq8xZyxYJR1iaMudaubMnuQawCyy3ZgLamRt",
  "key18": "272hCuQ12i5uEkTu9qdmVvFtvsQLJBXHehi4Ue6XLv98LxZBGesuvMQ8PaQ36cpKRRQd8dnbWLVBviWCvHbux54X",
  "key19": "3L1J6RBoWh2LPpAudPh6pNLsVcVeXRj5ob5HQV3zM1wusSgDLNaZU9BgGAvHgiraUzghiKUYy2792v1NshDceaLC",
  "key20": "211gpWy8EEHBfmBt5ewNqeAQeBfDY3rykfXDzarfDyr31HF1Y9HKKguJ81XdU59EvEc1oDY7UtAU4QPzH95z5n9P",
  "key21": "poCoH26ZJnzqdZYq2AQ4rsFGD9w4J7TNjTsbM2nWWzLt3eVMW7MQUFFN9Nj7qbpyaJ7MF6CF2Py7gugTZPkGvd3",
  "key22": "2HQV24zQxgeWxzdHjk6SPtLVd2qUbXNmNS1JQ3xDF3Bw2JsmGSswauQzRp14bqpRPJtL1nVG1yN2niLyyKiUqe4o",
  "key23": "t5CeiuSrF4ERdH1yGunpSjBJMAqfw3cmQAqrrN7mJnH58R5xDZoT3XGXAw9BJvepqsvN4NuR88CLKtiZUmmKGBA",
  "key24": "5HWnEHE4V8q1FcTJsDxsJWdUA5CXPtRShFy7oaYT9Vi6st4GBdHCY2tgL5Yp9XPC17kMdfUss5GdbXgRnRq5VBbA",
  "key25": "5fmHvYuePJrr6MLDAMzLXLUhxxv3LGzEuRKfBCyGDerTCrFCXJMgcMBVWzMGpjSCSND5TBWEXS3hbeoxTMkk5Rus",
  "key26": "56BoNyVnkmMu74buPNDy1zX3Fbu3y4AQyJtoXXsqDdwoinDYuCCgks49hVu1zs37thCbCHdTf2DLAJvTCkjEwMko",
  "key27": "5BCg8vVbsQFqcngYxXfiXjzwvNWpQsWzSr2CzsK6sZrdMX4UV1p9MeP3u4gRea7jZBCE2RTFrrXAqfiboKBgNEED",
  "key28": "2V7iG2odRKwtFNvNdb1NuXsFmNeSVATjXugboNAQ8RaXkbvpN8g81bQWPFcktAGsCpBCJWrKSTUJzzsEh82XKhMn",
  "key29": "3jAAvaYv5q1AH3RS3ZMfmFTq85Tg9PjW6BHpv1LRBpG4xkJ6WpHmMuGjQEuTpHNBe3Lnn9HWWGKLkSmSmUDcBre",
  "key30": "2A8v8aSiZqMkfgJuoXbSQCGPyevnUVjqwxzchWFP4jtDvTZFeosHRuY6AHoWqiQeMaVnDNykr9ea4LhXaUAoKwyR",
  "key31": "2dYUWVaLYzMcNKHByXNj7qRdBaZGE9AvYnoo7ZWQa5sdG4pA8HwV2Zzzf2JfykrWKG2Zy7MgwdP3G65QT2TskFTA",
  "key32": "23s3qt3Ah31BNeQALPRKbus8B1gj4RHCko1a1fR3PmZwqPpwMojj8QHXvqVppom4jvR6zbrMXUZSVUQVqb1r2fxs",
  "key33": "49PxNoFqXrA1YgLkBkw7QWoeLwp5EvsMqpHzAJEHJkkK9DXZ8puPyRShBXBoXjxGfEgJWZtpGmtk6nMYoWoM7eh2"
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
