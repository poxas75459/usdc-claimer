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
    "3HUM7pNXANJYA9NVgHTXhqauMBqREJk2KvXFwXnATb5GxcpAEnzRHWKtjDknTWg5vr8ZLQpECZ8VL8tZUcpomvY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29E4r5z2kDasqA2vRtpbhwLTRbyZZZNiMAitQqZpz9Rc5iGWjAnR3U6BjafRDJyVDVWsrVd3traPUGbGYaFDAJBh",
  "key1": "3M6TyYSnTrvnD9nysnKphbRDFQJKYhiTkMNor9WTgDDRsGnf4cxm4Ar31YzWoVeYv52D7RNscLV3APmYqy1fUmLR",
  "key2": "42rwtRHm8LuG2bnXdJhEPQUfzp4hrBawPgqcc5SMCSLA5Gn5j3qvtYW24sLmGqRfy2FLWfFP1w5Sekw7W6htZXLk",
  "key3": "joE69fxepGgEeBvZX1XqJ5d1po5g22thQQtpxBqfeqNFxZvequqsN31EDJ85pyRdjvyW1j8yWidErtdqSqUqxm2",
  "key4": "ZJN6zYCT8jur8dmk98Gkd7dboXW91JRpggj2oDTJ97VLvsy64EFPTzkbLrL7TKKT4EEFiGaHn8xmcjjg8Rvkvbx",
  "key5": "4Rbb6YMVtiCcuD97AUouNkuKYSiLwa5TMHVuxKnR349sHPY7LatNUnxwrnmahSnWpZZddQCDfMwQM91NvpeMw9Gb",
  "key6": "2vSUdx2zHPEQoJGDoKhzNT2i6A9ymFXz41DLGbdNcGhRfwcoLCX3WhuPWdDT8p2ZMPAcrBmFpTFCVTQVfowpAzWv",
  "key7": "64hJedyr5t5Yu6d8FjAC6kzaQtpTmXuYoF65x5xtYGsTAcJGad5T4xHizXaLiwHjhQ4nLNs5pHx9uKw859SfJBtf",
  "key8": "5wEx53dLwbXK9K3CrR5i37MY56gCBbZcEzzhAEnPQP9JTyErNiCQE9476oJ3jyTA3w2NCBwYpvbsMVYUcmc4UjNn",
  "key9": "37tjTZT2xVJo3BvMMbjEA6Qzv6ABKG5bgaWE6BeA1guzW34qBc2osrNBRsjiRbRWtpg9cg4RGAgEJ6xNgvvC8RM",
  "key10": "5TztfU63YTJCHgbeeagscng4h1NTPf6K8VpTiSRb287ZN4vUeMweJ1h656tpyiBZ9Ef8zUNtLgNLrq9EcWL3FbVp",
  "key11": "36Qd86Vbkc62JPJMkHMJXjX4cLpaBJnUVRe7kdr5qNJJAeSFe1Bx5WZEW4YphoLFUu9UWxQTcM3DU1i1MWpTNwj2",
  "key12": "4Pkq9qPSd7Wm1pe6nTKGSqEKA3JQYywPPRnGpn48a1psosqU6CgYY6YE7pfvvAygrJn4epKavevtwXUpNg9WT8fy",
  "key13": "5Bfu3hP2tLwwDwhFn4yMNN5nu788tzKjP7xJAEBvsWiWbxnQg7Tp6kZGCwsDZyL5Ra8M3Eaxdb5zfK1apLu7yzGY",
  "key14": "3arc33g2guMm2kVzJKdk3CvbKy3ydUdyAJMX75ZTkckEmLGQw4C2YThAw28fmTDXkuJtsZYDrNmyCgXiYJ4mVu8E",
  "key15": "2CAZQZ5iMRi1CecMhJTFeJudRPWBT7dUy99uFqk8m5Cxc9vqd28rC1R2g8AerxtuzXyS7ATaBQPSLx3gNrqRgFhG",
  "key16": "4nmmiJAeSew717qh3n4zXPYEySjJqsHntDGFFTYrwsvUwPDkqWoaZ24nM8jULbp1QuW1Mi8TGDcUqY6XcHBf9Lkt",
  "key17": "SpAvKJaYSZdQPqKxon9wXHftLjaUWodsVJYwRfBTqZA458KtAdVg3FAxTbtx2GFnovtLL2hRHV5rhvhoi4eDjF5",
  "key18": "3q18GfDHUCRfc7wz7Tz2iLayKUTB71JpMdUkgRoHfXSKysV3RSwVBPp27obMHCmyqppGusjZam58yDa3iCRTZ4HF",
  "key19": "3oMUnULQj2cR6gsZ81bzpo9LfFhcEDkxgTvoKiJ2x8RNfmkCa76QX14Z8GSZVm5LDFV2p3BwjXqJRDrFaGkH9dKj",
  "key20": "3Y7yiDprdVronRBqyFazzkF8ANnv5MK5Q9ZSN29Jt1yzmKJE7PcyZw7XpAYYidYAj7L2JuwFNyd9JtjTgPpQGwMY",
  "key21": "2pfRk22iGK9XKp8kWHr9vb1HMbqY6guY9FHK4DY9PYFgpdwDQUc5w5LG6xdxLQydfG1cpcAWXavpBHuE1eJzDES5",
  "key22": "53AqtiEjSrbnL44CmsosmBrWBB7rzyWe3mzihA6o4vcJ4ekbn2YL8qyNwg9ofYDq359ubBsksYqZhjNDGHM28Hq5",
  "key23": "xwua1k8a52aMsvJmibuZTkvL1JhL1YG2h7DG59ZBKSMbkCVEG58T5aLotAMEbtyfzoAPaCnGUfQYZ7mW1Wua4Gb",
  "key24": "9WGtwySvybv2AhDhuftikiYVRoXsSNhXFgNTqHAJkKLDvovzqb9A2R8uh4rkEhhU4EV2icouvSgAzUFZ8E4Jknn",
  "key25": "4da1Jokd2C3uhGuVb5GZ6Qwr5r8K73hgTmW7cxPD1UXqr2J7tpFTurUD47JRpGbepHbPnFSYWw5vN6zwmkRHBRKF",
  "key26": "47QyL2oCgCATDr4e1nG9PqjALS8PEzxBENfNHQ4P2iFkPcQM8JBeyjMf999eyWBg8uHPRch7tLUmy6U6EpEGTfC",
  "key27": "5r33HURZHwwE7oaMADUyNNtvAWfo4XXQAFv9ETiCbg2bfUB5ymUoj5eiUsGSvzfomtp7QoNXHAngJXu7aEjsVGKe",
  "key28": "4TkayUeXuPmswmJNrPVSoQKBPVaH4ZJZ4sBLDkwJPZEyj5NfYWpzV3jVzQwSwJToDPTpgp7ze9313atnJb7uc1wH",
  "key29": "DQ8FZgtGvK1AuDozxpxaufheT9AK8fV7c4bwkXQXQz2nUp8efNSfiWKnbMpPGBVkVUmg9hDvM6a4SRxXG7Ycozz"
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
