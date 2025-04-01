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
    "2y2ViqPbnimcbojb2q2zEEUgFhARciuJ2sUgmixbuEUYnq48bWK1Nvrv1weEuo7f5uA1a1utgR522Ljpx4G8hcFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVFd3uKLbjPBdTArqTBvGaUtMcY5sLr23uVuuxDVFEEc7ScDJFmaWtJGXrFR5S5w4cmnYdg1NcQJRYYmhDZfysJ",
  "key1": "CspxDChCoGVCAR7kwWVs7oUia7ijHmoLw1YqHv5aCHDJeuGK8e3DKAQ7ryoEZi14yBMbJGq2VwNMYmDnABJVQtP",
  "key2": "5acziNZY8Z12h4uFZzsQHXVH2rdthgHij4To9dcAF72ZEjRk4BYjDp7AcFNx1iyzgnosXvj4Ks5V5ZPAAAVyRLMQ",
  "key3": "3HG2WqNLaHCmV688yxjTYrfFTvSACptdWDMjvfDszydVmB16hFugsP3Fg4UbgRoavGXv9JiUD9MzyouQHPkP9S2T",
  "key4": "4mqTGA547KB89jhwbojTitewnwr7StnU6YHfKaa99UToxk5ninoFANgwz8wa3SznPoC96jKsFNF9HgADPCVPbL1Z",
  "key5": "2UGxwYJQBjgDfSLvFAhdMjiu7ACou9Zg2H92qztZj8xrtxSqKjACDS1JnxUL6dMqj4ZzZFdyWsoZPqvfzbBFNxYM",
  "key6": "k82nEKqEDQ6XjeyTsKxcHgfPh8T97vLkpAzF4E928UtHiqcnmcxA1DtGBYsttYTFdVpaxfCJ3XpFSKgeMY1ubHZ",
  "key7": "QfC23Qwm1Z97gzFE1cN6tBz9v8TjbMXdLrrx1YGTcUMLrASq1CgMHzmuzgmc31KEW9479SY2KQuiXbDS9d8HHd2",
  "key8": "2Ri5KnVJK1TT1fLSkbem9r5bK8QXG2SABUBazK3j4pWCtefvDPyJ3dMWqujii5kwDGiBobbM1MDG5zxFVZi3VwRd",
  "key9": "QSA1wTbiYbgH5C8iz3NasFDiP6zq8ivDzWsEgmELRqaQXEDrmwrfq2CZqzPsShqvkbZCuL8ctim9TCCunA1onJX",
  "key10": "2w8zKsMuafpxPdRzPVHLzD8jEcb3F5xK1EiT5ucm7SrVicrNzu4gKKn8TBSgMw4xEeNvarzQxbH8MVbXBLaVcGW3",
  "key11": "52okySfwzjrRyZejNjhS81GN7E5s9A6Wswzc9qpz6yXBR8iPodqTLkwbJTrfuxriHKLeLKrVQabu9xUr8VP2bpRD",
  "key12": "4ZPyxv6zLgWR5BB5WN9AmTprVdLyJusZQtesPGmZqo3KAx71vzopQS95btY3VyvBDdD7WfkWLiCPpfWcyVPo6V13",
  "key13": "GjpQ8dYgMRVbPP4XpZgrCDY5woGVTUAGmHmNwjQzyFVo79RnGJ8BkD8T5Zo8tRfdZfTusYYUuEq4JXpTetzEunL",
  "key14": "4fy99jr8QYzyAG8dGDNCij7zGcw6KpBXwg59aos2mzBxF1WD46GwAsrBVq1isKB9RmwdptZKHYF1RjuKTqTAGN1T",
  "key15": "2dwgYdJXw3S5tDRxZE3MGeGQXBVthAbPVbxuHj8c28Y2GXXgHtezLK97Tz8m6e9T4jcEnha2Pzom735DAmu5q6ix",
  "key16": "2B8JXmG2qs2C7eUPLBTCdvYRCB2Nt3KaLkpURWxGDjxQ2cAgbWZhUVyEwpmt3vhvT5ebC6zjjb9ER6KbxHvGwtTT",
  "key17": "2SvW7WUMeR1DHkYux12tVRQ8yp2XvnJyEjebFEJ1eYYrxx6mXZ9eXWvynxgQQYQBcMuCLonJFdctDYtkMfvQqhtA",
  "key18": "29AJeWvVs6aW1vSg4BKxuJroViG4cSkYG4Qyck31TCdvub265mUtWVHz2974sjNkHv5RYsjop4nckyiHkLYPJqRG",
  "key19": "3DKqZVRN5M7WdSrCaADHvMSRK2dEx53kFHgDx3XGxNJQenjHi6VSaEJT7EKamVyh69z8213FXHfVmchNPSLzQkzV",
  "key20": "4FkxV4jAmcQsusNpWSx13MsNo2QPZL7xW75rh4mf7iS7hk6cKYHcuhHUbz6ApaEy3mj3AoMvcWE6hJYUjoneoksn",
  "key21": "3FzoRcrJuDQhaeJV1S8fgKHqt2fhaWFyUdM8Q6JC8u4gHuKB9kunPEAKkabZmPQ91AWzTcP2WEALjxS4aaUCUW2b",
  "key22": "2TAkgqxinvfs5KxPB8fWF2WRFCKcev32kXZvQ2Cve32YWwCegVAKgJ9GsLgdZJUHJLZrTYwzDFvhQ6xQ2R5iAzyM",
  "key23": "2kQazdiN7KNrhFTFGPCGTLMJbA6wWFypUNoFfQYX3Aex9qwyR5NKWZ2sCwCPyomxjkJ2wb1svmWaoucbGzSndPsc",
  "key24": "3AGPx3drXWwSffxsiCcPWw5LCcYcr2KpuKoENfq5FxQf48sVf4mzjGN2u5CkCP4ALhbxP5vuwgM5WekVHbtMK1WC",
  "key25": "253Rh8yCVFA6Mxj8uSw5W2TS6HHP9o6gJt2q7qJZrGbkEYLWye3xbWHz9HAwEaxvwjcHKRAWC2uE2HaP1bTFPASS",
  "key26": "394CDhjoFU3osNdmSjcGZHv3nsHsG9czQZ8vFK2Vne4LToRQGvxC9LiC66GL7aubnLL6prW9KTb5aANGwdK7SD5K",
  "key27": "2v6sr9W8rfGcEu7Q7GGKyxRizfMRCBQF9Sv9CAuDhen8QN46wTyCntqn6CAr1ELv8nTxfVCgUrGx9GTzP2f7MCrU",
  "key28": "4fCQorFRXF9RKvnauJghXjhp7VhpsQuk1ZaRgVE5NBEAKa9EoR7JqXAKq7Nc7N1WYAgDX7sExN1HwXF4immzFrCV",
  "key29": "2T8ibvXXZqErKFUyBGiDzgAUGdfLwwabvbrzkvrxVWsnuNFhuRhvor2Gjpi21f1ZuA6omNG7PzFNjAdrvk65GXCU"
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
