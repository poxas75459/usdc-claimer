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
    "3ihmDeo1m8vsWpj9x1BkhU84h6PMJksPHiH8qevFfWwBfbZ36dKMoHdmj34UqLJ79WVGwNJp1HxQc1x7DstWGvDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HRC5ghKqEyXio8c5MpCYXEukVAYshvWWVfLnJhSocZN45oLV98V3iDZM7mP79RCRXg5H3TXf4sLrPET4j6vRKw",
  "key1": "2itTP9FBNCsanGNN3hJGCCecxQpue3fdXMdocuKDj8BpUnXVRbcPnjpYJUGbRSrsnqiWBPRnZgjhyt8ZQy7vE9XD",
  "key2": "42CqmvG59wN5x3ZZTGnS9w1T1c2NiFs3rqfemxeRP9VgJCJdSdT8s8BG928UrL3L6L4Yt23cWqPv5xAufJvT2WS2",
  "key3": "3XA44HUZ5d1mNF54zmRbWR9J273sT1SRDrcEgtZU4xjNCsC1VYxa96edaJ68nfc6MQ14F8oX7WREgV3tkehaFPw2",
  "key4": "3GA2kSCdBoJgXxaPKa2UkpaBRbUzngHy29JGjVLo2kTjxNMG4EUxQyJpizPrrpSJx9PX12ffMegsjGBbNF7TDnY",
  "key5": "2sixrBaru9rn6wQv1NaQKpJ2Q8DbUC1pW8UDmWa7xGv3sRrQS2TRDbtN8XVcyqBCMByZuitQAQ3PXe14mLpmEGN",
  "key6": "3VuvWGrEGCfJQQZnLws66swnhrzAHDY5yJaKN7EYaZKvWMemGsrfa9C4rYW7M6tQX4epYRb6VNHmwjWGNqP6AAFv",
  "key7": "4sG6Uqkymhg6XrdWVUmmsf3dXqNEqZKU1Yjz7jpXTeQ6wjVbTQHC4tNRHfsPJu7vViTsztgXbQsGC9jdgFdQGvTb",
  "key8": "3yxaNjvnAstMpjHrapZYUCk1NZZ8kjAaFtDQioEtApTperCUYv8mmP8MGnb8TxWwyeH5zktt3s2hmsR9hZ37DbuF",
  "key9": "2xedGDn35JLcMRDaQ2jXP5gC1XrjmZYw3nk84GyoDBFhdwmQqGUzUeNS6ZWCjqmHJeJdTKnx8JNUK74Q6aWFi2vC",
  "key10": "k6QyChetavz5YTifbqWWTTXA8M6sjNk8yKn9jW2cZBZxWzDdVr5G4Sjp6oHLxdAHW6cZ1ZgsEsnpM1hULMbHiw5",
  "key11": "3TKCQvtGiSTJZeZS9iebzNCHeqWErpK6WKUWSG3o6wLRBVrzMZ4NphHGkdLEYqiqwSvEUG8rBAb1mCk8d13RjVRL",
  "key12": "y5F8C4Pb6tcCmGyFqbgKy2epBAYDwUWJukkXbhUPHiEZJpEv9GxF9SrcAFPgboMstkoFEPeqhySpFuuhEcbSYnb",
  "key13": "3hNbqVrm1m6V41XQsuP1azZZwb5nEnvKGsj1VAQtETnsc8VY2ZGnYSyZBWdpuJxB9UeZ43e2j6yMShubfAKvy5WU",
  "key14": "4bDesWBCW8rVnZLPC6ELgndVyrRTSdSbW6J7RtzTnbCsi9hzYan9XmHbsFiHSh3edQxn54kbLqVtP2GfzcUjtB5g",
  "key15": "e6VJfdxdGMCAfY3p29aBGbg846B3Bfc2ypMtJscpcmWupiPGiT7Tqjro3mupfTwwmZEcq1QGrM6NKQT1tWMifAr",
  "key16": "PafBw9DFQFPaw3AaUyHizLsdSm9p1aBwJEVFEWBB5TGg5z7pdF46AD2tcBG7Znp7CrcDe9LRPaDMpTamray9fZh",
  "key17": "2ZXUfR3HUvzw7wrE3pmpQuwP5cnupusVxbiakAnVvTzFL5Ye8ysTnzY3t69JgqP6NScS33hnyGi6yZJtqz33MPc5",
  "key18": "29HKBWsTKxjxSA3X3bb4kio8A1bSJchTdT1Vf61iQJEXGqf3n8kfYZUNtcKGo4aS2d6tPx77J61WYL1XSfa7pno8",
  "key19": "LPZcwwP3KJ3w9R6qoUdAvHU638uXRQV3w7q7gyi6fXHzM8Ry8Ct6n9br4ro8nJkSk8BYKHSYEXyz33PogQgDwEF",
  "key20": "J7nVGYQaax5VPRny2ewhFHTKihZtfdfLh5DsxDd4wXBHdh2tkFo4SRFbWfj7fAFJKTbBT84xYKiEPAfz5JqZZ91",
  "key21": "5f1yX4zm5LX5QNWDS2S7acW5gpg8xeKSWgsUkWoKVLQ8Bz3d8ZanE2Myx9BXRnr6b2NFEx2vqzQxjL3jHYwQAEnH",
  "key22": "3TPnut1dZC4d34egyZhRZf1cs7CzJ9YUhMu1BoFN4firU4RddmoG8SGw5G5UXryxTeqp7dgcvfH7VTJEzBR6A51u",
  "key23": "4PHcML6NYu3kJXDVAVSDkeNsmzoQDEcWu7VLV78aZkcFx2y1s99CjKEduagaRXc13WMbTMG8mLkBAJBpyjUB63RN",
  "key24": "2Hb2SnDG6G3rTm3zxjLTah4k1EygefbiLTtMXksaKpj3fAnrsQADEtZ21vt56buCGn4nHYK6GEeQQFB4VQvDHJtW",
  "key25": "56HhSCPvxsv2RtZxrjgSRULrvKib2wwauMRXEMHu6a2wLkn23GQQEW92MQbK2Xvmy2g7ftVZKckxLyQs6HPDj9g9",
  "key26": "2XnuSoWf1ZmBE746H8J23t8ArC4hrL45yrXkXbJWhEiYYS6fb8eu6Z1W9r5ijMocnNsvQihCtJZxco7f5HCzrhed"
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
