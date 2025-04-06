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
    "3AoG2ynXcD9XP4SJ6EY1Gzc1qVyNFVgtHmdE75CWuk3qNGdPjPkvAuUtnbxtFURPyEb8yJKkR8JA4eANoLdqons6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62PdaQ398hA1DU9B3hx9C6JFDLVVcP6jZ4h6uzud2rZbTMmp3KuBv5gJdSkCwQCaVP1MJPypFEWQkJRn25NWPhVU",
  "key1": "4k2R6o212Y62kmk7RuVrs3JWwdxGCEeLHuxgfG5kuRdn4Bc1kgDU9faztbBEQKrpUbogu2oDHmv1Rb3vg2doV5Sk",
  "key2": "58Mq9i19dgSoxGBP876HXn7pug3s7zuXuD8tYXf2vdEFes46pTjk6dsqiMCJ1yVnLrVcdoEpvVAd6j6e4iNmTfhT",
  "key3": "5WzvVtBg6mCnnLJx2WPFiYYYzsFUoUJmFThubSJ66zwVkBmbRRCNGjXJvnoHNrQiSzyfAr5SNYCCi56Ej8vWw2of",
  "key4": "cE7orPKQWoNBpcyRwineRkCSSEUwEMs59VGtJH2WTDRc65AE16YSA98w9XnzSRrLGCQVfsVGizEZuYx3ZfmPvcy",
  "key5": "5DDgDNRZU7LCKAeAejwCBLYf7PTNt2or6Gbp5WiMD5F81NS21oafPLn3Ldzh8xWNzT8JAjcudxWEMPmgkgBsw91E",
  "key6": "KyPmY9PK6NRYvxjVJzDuMJV82SbEBN6YkuwQaTcDUownN8qw9nXRDp3oPv4znKKrqc92jHgvdkq2Z4tqWYX8HBs",
  "key7": "3rUaH7vYXZtUWYNvcUEbJTr8Q8NvVnGXrNr8TxGaiR2QgyUmNdxoChqGVQHw4pkDW2nU1pYTEcUqq9cRiUSDiykK",
  "key8": "52ieEAzR75ckag8PNvkMF937k1vf3P7ts4eRf6wChSSESxn5aLkmkvEh5PLwHQPmsKDsPXsjEZZ68WLk2WpMwUDU",
  "key9": "5bjP7XEses7Kp3rcH1z4NjhZurGWR48LFdWaB4iwDXb8kNVmwJhEnYKve4wSkfXwfE51qRQTrfBsi96YM9b96aUH",
  "key10": "4XgVcJsaVApWRbaASnzH7hspzi6qxsSELMWD6p9Vaoj6kXNsa9CynxKyeRmraYmEkCcqbbsihfVqVzgZSpcKUXQW",
  "key11": "eJRFX6g7yziF9hUJpMLssYewYjGdnfyr3X6Suycw5EdTyxviVSMmG1z9MHbvCPyegoSRUoiW9H4KitojktEubMF",
  "key12": "2rTxwvxjFLrujc5F52umnSeBEfuMXPZixi4cpZFu6KuvaU1ZRm1UDQV1uuxtQxhkkuQFnuMdeVRcvViFU4z3yfwM",
  "key13": "2yYb5F6EKd8pFHBFbZTr3Bh8qkf3rS8RsjGSryVsjEjmk3u1PUf2j2ZNfB5q4xkSfTz5jkvHgRTPmZncracnUdf1",
  "key14": "4QXdD61mbtuuu7zQ1tNVpvD1JcJcxT7xPH6jkfxhzJtX9qaE5G4KphCyQTkAF7PuwqipLeeJr7GzrWrMGRq2yRKK",
  "key15": "4i6DZ9YLZsNSKBSWN3MUbxxd1FWrg3Hm9Bxx1PrJyiT8U1jrLtLmn7M5jf1MnyscHqebepEZD9xmAeofwrSLzVqY",
  "key16": "24SZDJkegGPyXDTDswxP4SrBWfoYXj8mDcJXQDAcWRcB4hmrY2gKGMpmr1oVYtPR1R7FQNgpf1H1963fhnCTvvfm",
  "key17": "545KVxpa1HqoVsK5LhJW7rfdMJVqWCpSBSMc8Z4gTHQXD9kU5K7wvzHcybJ8xBLbcWamEKMivqHGAL6B92sVyHth",
  "key18": "5GDoMdiFNYwRwGfNkvhNjYH73TW2HgpqwRUxt6caxw1Xe3jNZCx3FgSzyMeUTjnhr4WQ5cbESUBbzZmJ2pUNRHDX",
  "key19": "2qavrJRq2ctfbFMaS45VRDXDViHScWYdP5DDXNtRuGiBWwUY9956441RPMvbRWNvA1UpgYq7Qo8udmN7G76Mb8Vy",
  "key20": "34RmxiNvVcgTntCcnjG5HDS1BxUZDsQyAGu9fHz8HqrmSaAK4ziBZFPNyRDDXwmSa5K1hEuehC4HXSZG4yqtDWm",
  "key21": "3x6zWn3jW1v3Pz5eVi95vpk1PVcoCSuwes9PtsmZEaDqaNSPhzx1apWRkyuT16QmX811VUPuAdL3pPwS9XN9abND",
  "key22": "67SGg89E1unoAfDkCL8UHPB3pwex1k5arcKH5JA8H7HEABNgniV9YVhRnaff4zjH7v8QoctcL4G5FjLDuYsqoPMG",
  "key23": "WSTRL54qXFG8aePM7rE7VNa3HKWZ1LyNwCzsRsGR7nM9HaekXbmwDwvi4yHbHFEec76WWpwPdCehxy2j9EYdDfu",
  "key24": "hbNN1jjsdXw31D1Vprk1pq1Wqb9uKpdK4W1kfcB8sThqHFbi6wzukyPEsPW3XNSZWNEMDyNjfoPLP1U8gnksEE3",
  "key25": "4DnT7GoriosojwNWWMK5qY6h7bSxS2vNyko6KVBdioXfEoiyrxgyn8NbUvZwBCA7PQaDNcTVPRW2YiYhLMuhBUSS",
  "key26": "2kKdgi5eMqL4Ss1cf6CFuuj7JFrkeCm3pTxDv4Z9GfktodXTxPKA3dYG2U9XBAhRk8b5RcVnSBkaAqtFoFRTFCdF",
  "key27": "2LRoyjPw6Smz8EAesQ6LGc7FWREhg8tBfsDgVjejWxt5tPTwer5NiV9ZS7rbvjBAhrEofyMigo2W2SrcTm4MQwLg",
  "key28": "5AB6FB6CxbCoKtJsGyM4PZfYzTonor9zPb5z3FaMqLjpjmn85QSj8S2rrEYS22QM24bQEjTgz4YjjXGNgXe2nWuN",
  "key29": "4rL3QEZtVdLww2YNE9hB7i3vb1t1kmwGs3Lo11G76R2Mn49LsehR5BdEWLBDLWhbGerKLM1k996fYBeci94mTqqc"
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
