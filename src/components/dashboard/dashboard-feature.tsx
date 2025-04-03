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
    "5BHWZB2eS1mpJngVpF8M5jMooRG8S4KFigcCp6G3ZdfVp1ZaT9JAGNsTnRcP7xfQaNm9pwYsZvbeU6A1146faeyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFqaKvyyZj1vpKETuKLSyF323eAEv9dAYDwsjUVQsk8dvEGfemnpjTVvZG2PKBRv5QkNs1xyVSCxGWHowMrBFez",
  "key1": "2gusowqCttu6UwY1N71VabZ52Jc6r3VcTyG7ZeqM2685BkkZuPjvF6F8KB8GDztEbie2b7uinxfNyqnWjPSBSW5x",
  "key2": "ZwuCmyQFrDyTRqSJqHPHoYkk2kVBkKLTtiG9eDVTLsE9d5iRLXeRcWLCJRYBpxPaUC29kDvwQH5W91QQzbjfX6D",
  "key3": "55Axb4BDGKQpifSrfYfrSN4Ry1nPsvFYUQiyEuNK9aV5vZ8VvEa6FvpmVNK4rkHoJRp8Lm7iWUhbpk534qaqN7oe",
  "key4": "3wcuudjuVXcYBXctzsroj3n6bBdcx3YUA8Ea3sbo8RaVJRYev4zuGZSByD8W2Xhighyd19rSem4bvaz9xcAuXgin",
  "key5": "5knuJ6L87bYHmHBHUgP8QiJWDgqvELarCDECFb668uij6YSBaGmYzrvma1zNfo59rMotGMzaffueRbwJ8fjXUCyZ",
  "key6": "jswx8TuuxRv2gt4vUh4DXM9sZ399Xynus3YRzvW5Ut5KQ2tReJkFQgpdscwQfFNTXvub6Cf7j8SDDWwGSZcD51q",
  "key7": "AwMPakMSUufv8v6Pi5rjhztuRUmuNqeRL1mqQNJuif8S4ACdbZgxDMLgW8Lt4G565tK8r6r91ztQHdL1oHYX8RV",
  "key8": "7sr3rZzLR5eVYwmBTcbBYLuvYnsY97MC44sVs9gz2Cb4kXUPLfbpgyoq8nQ9mDY5pgTQPQ8Zrd8XXy3XccSEBi3",
  "key9": "2Fe5cecM791wg7ujExSbUhWxUQegvf8KdTwhvCq5wsZvW4UKVHrz8UexKZbYRtgXSWx1P9dcvPUZvqcUdDnMsQ2M",
  "key10": "34oLdZzBM2Fq1jHtAgVWC1Nw7PVTpBwdd1eDEjbBx43quzne5mpA39mD1GoAYuXQSe9Ncmn4DvPbc5it45uFi8BK",
  "key11": "124rWxrBCEKYtvgfgVDmrhzurzCiRPTxmTwqVt7oNFiRe3Y8RekP6toJUvJYg53rH7HC9NcQg6QrmMuHmrPk9hvw",
  "key12": "2Cg4sXYGkisw5ShxyMozsDGtpvRqHCDQVkwEfuw9jWvQMZuYknEAn3HU1grXUMck3vJktHTwBg3v28d9aBfWEtmg",
  "key13": "2fV5wj5TacCCktEkCjX8R4ZPWgnCTXBMLSgiXa2F71HBeApnDnDWRFBsZhp1uExpRxaApBdY4EsQMppyCmkpLbbk",
  "key14": "3upqwZLrtLSBegTBJqNv4tJ3hMdX4p88iyW7dCKcuzAe1HPA1WjdkqmHaVZqkhET47GJL2y8ZkspgoE8vYptB1kK",
  "key15": "3o5M7uNiBvgBXBBMfv6111wf4LBXoge5y8RMqGNuH8C9qruasUN1tVQHo1QuhmrxNG93jRpew3QVUBr5YTdAJKVG",
  "key16": "5nns4aZaeMQMLUwXjZuxhcU6kXVETDRDCEQkJUNPNaUQwcuo1AeATxbmEtaBrNVNHBqCXkoqHg8WfMTqVoWoRgNS",
  "key17": "VhSJZ6tg4s3Us5N2HBRnVDiytacALYkNfdUVkNiZXn7gXSq4Gr1cJUyfL7kvPzeJJNWc64p4f8eAavdVHRVkNJr",
  "key18": "LDu3PgU46dGEnfFa4fjGHZSSp7pjAiWsrhpTzRyZVW14Cp2ifdkQ6hf7vshsj2yGgBXUA9eTAoKGsXfKQ2YMtLr",
  "key19": "3Ky5Qf4qi7L2tEnJyxBqDDRkBE6KL1Wwr732e95aoykiCbbmrERZk1mc2pEQLZSPWpHLtvpnzoHpMVR2MLNey8X5",
  "key20": "53ecQPuvRP5G4eZhiXnprhvs21Hb64WZFz7AVbuxPK4ajsVRLZH9yt2YwRQwjmv4Hq7eugiZsYEyvUGM8Yj12paq",
  "key21": "4sVB8icRU5U11LgWhdMnzG2eChMGuejuQSSPCWHn5KYgRJNwANvk2uqKFhrHz7NA7j237hJ44GHFSHHQpEJH34Vz",
  "key22": "2TG5q2umWemsnJ1WesDjdk6XXH8d5Xeyhp5EF6StruFFeCqNLgSnTNHSBMMdbrFXaa2x5eZzaqqRoNKM25z9YgpA",
  "key23": "5aem75aNruGpcnXmWp1RUGwRPUFCakoAVn6cvAz9rwr2SAo2kbQ2JvjAxmZjxbn1tyu5BYE41Whdfwt4K7g6yFuc",
  "key24": "91Gs7nA8KfTX7WcYtxSKQsJ2zCUEunorMX82heZtcMh9Z1aBdE7RfCbXpF2KERZxEjCEGB9SmuN2Hb94yQc5xKg",
  "key25": "3BFPpvuF9jGSYwQVXX9bFRDtpdxJJeRrP3BHYVE9AYQNx9pL9cgRtrRjuHk1z4VjMRNr4BqwmgcV5H3wkD6MT4hm",
  "key26": "2EY7JegXu4CWdz1YRkgnnjZ5onVFzX9JoMxGZste1KCrPMbipbgyyThP3YQqUmMDCbBBESfRcNFcr2FRubv4dQ1M",
  "key27": "fmdvcBhpUrxbA7SX1F2uNYcRddxbwhaR6kWC3nJpJQCA8pW1tzQZTnLLoxBWRuA3eVuVm7VhjPYkZqoi6fbG74x",
  "key28": "4bHCu94f4ncXERijV4tN282PENVz4qZtDSqAuCvyTrPnxtgqPXPkN7uRwbVDDqquRvYvVsJsf7BS86MZ7nQbrHTz",
  "key29": "2ghiAeGgv5uDWBFnsynKGcCoXz7Xf1m76XyxhcHCtXT97K5XxBqnv92YPhmsaVWmpz1ygqTHZfBzrUJFrHeDofBm",
  "key30": "44JguckbsAjV9CBHJL8LH8RWnJXcnnr1w1CeZ8urUWzSRnoibnBjmLPNRabLTCAtc5aezyCNUCqxeqtSv5NVFnin",
  "key31": "4Jam67Nc18YKiqPfq6HHJgEeMAYTDYLhrfAobCfpEpRu5A4cdYA4wAtRy6X23HdaSZ83dDKao7g9rWaGbfs6Z8Pt"
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
