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
    "4QgZtLv1XvQPt9fAbmaEErTQe5kqhuK4Kro6CkmPJfwkpjqPshcaYXhCs9AUCSLaTQU13XMZ9oQEVcXVZkAvsK2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfbCc4WWDKZNgQiZZfYrm1UyqK99pTF1in1PdNApDfvnASXuHrvowKtyjcDx25SVvejuoVKU8phQh9cBwzMfEaU",
  "key1": "5LLWKe1v5xKiFX7YvaGYBnNMnqjNb5UAanofwQNqmxjndho6WhCUjWZKAKH3gkZ9n9YbzgpYD4naPQPyBELrX1Mh",
  "key2": "KwaG8F4P58r7kj4JfrkDXmgmrCW9ExisRFGaAMcnhNiU7nRDjQxXgSMPKec8Zk9yu3UZ78AdBCMndECggNkNu7P",
  "key3": "2U596py6zctDWqmPctK2KPRHzaNmM4DWTYGaZmN4MYRfP8MuMFxdheJu1x2SSW7XCmJp9ArCaVHMvXyHf2Vxv5ug",
  "key4": "27koE4QG6U538yLzrJ6RcqzZf6aFJhN1o2XffMgazU9JLqNyopVG9kjFjNPxmihYywAEDX8oWSoDQWdJn1f87wZg",
  "key5": "5zDcdr5STuzX5TsZ3jgTqaXSm3UfrjCK4c3QCJXMhxZtt8NkLxJFY7APMb7SFxFamb42VCqh36NTMCQfUvvMnBx6",
  "key6": "63ea3pYfF2AKYynBzegotf8sF2YVMLk6MAbzLUVvnvRWGYHyV39Ar23kAZsaBDzysCChTPAoXdkeWjVSadXkESGb",
  "key7": "5g5E8wPYruBDrbmLAhyZ8MmqdRc1tXapzR1nWzKGWBubw1SsXjqnSiC4zKEBEw5wuCeHSeo6KCAd91sSHf7s2y2h",
  "key8": "5a4VszGAXz4WLwVmVvoV1duLaKfHxhGgvHLaF3Y844Qzksw17jFy5RuHZ5FiDbjs93bxCAngD5zXquzdsrZMnXVY",
  "key9": "EN95ax33x7Pkcu3AqaCGdx3yNAZczUNhCCLZv734Y5mh2y1qkCDHouoEA68sagSTNTiHFmo5w6N19UbEbip8VBT",
  "key10": "SCuV4Am8wmRgwzsbmGZy8WfyB5nvXkBncNhV82sMStCe9txeDQVwiLbLpL4TzrfGV8SSwV3TfBjnWfSWp8tSwXe",
  "key11": "3mjEKY1DFTosirWgvcsawBbSZvKgnFuoFA38GiPKPjFsYmTwTaoHCQ1skgazAxKmiUPAtExFtMiiqbkJc9weuXFy",
  "key12": "3zKBTy3aVa7nnuSZzj1zbsD9y6p8sF6Y5ePYJTrK7P7Mi4C5Gz1nkHLmwiaGYGBgybZfSS7LX22PoShvDCw2vtJS",
  "key13": "4w1nKPfXYakQk2RfnC4job8BuFz8ob6AV434bFtdLU6qWMPPCzpP4czMzZynrU2yhGckcxFjfVFPtTcvz8PTDEwZ",
  "key14": "4uFPSx3Lred439sEVtR8As8jhb6UWYdxRz7325cY4112Mdxog99JKAKWvrbN8ygZavizqggBmhozy8tTx9gB4TFM",
  "key15": "5HxuUMJWB6HnKSn1JMqyaRufA3viAm2kM7642ieKnkLMQEhdUfp1pC1Rmy19YEREi9qKb2Wzb6XZFDURRsmsfSw9",
  "key16": "4L7sqE9EFBcQ3b5YwHRT3YTQ3zCxDBtfYZU5YLW9AnERY5z2EB4WfU2LspRwTyx8iKQDLE9U2KpVpvJphJuyTC2H",
  "key17": "4RhWcmFp1TycqBU3N7DVCwaKnXtzdPCzZmai2UhrgFd1KY6qCgTezCx51fqJB7zCMK3CZsjtGgHcr1nsMFiR537o",
  "key18": "2gso34iCHZfYMA4xspwqih9WGcK54KeA9tKmJyVwrZ5Bd3NXzpjTyFrrzd865zCWXVoAhVviN4xZFVehFaDD5cgx",
  "key19": "3NVhaGzK25cdPhaDNrTKV9eHPkTP8QxGc6reSJ9VDjLume6tbvYyhxWyKNoUvDntnyMiBnLRo1QL89AMQannceCv",
  "key20": "5y82oKLnQT8QHnqNNDdLK7uXU3Rccnv2PGS9ZCiKvy1ewgASEpcjGqyZ2ubCYUn7SN9v41bCsTkVx3e8BpWKMYtj",
  "key21": "4JYefHFRCRV2Ep61N2wg8F1DUW9PY36oV4jKjME15Y34Nk5PCDwGWeWuY9M6twwkbMerZAmQa51copdWYj43xL1N",
  "key22": "2J5eog8neUzyH6MurhX8WnKTsNq2XWGMT1yGq2PwixMasgMjgMzLTabtiV666GcRUtsXbMcC3pqRBN4gVK5RkRdM",
  "key23": "2eFmHzzTxGsVvm1PKfmG6LVBeopFdYnvtWsCESeoDT3VyrSP6vHipSgn7YWj3Bgj8WsxgNhsiu61whnVXDNXe5gi",
  "key24": "zf3UPQFoxeTHPTBNfpE81NxTJiBfA4vE1bqttncs8bHCXv6iBfpBB7YZKjBe9mYFWonDNbnCvsYcDhcVkEFQPga",
  "key25": "3uSxF1FoLwW2espNob1FRTGspsugyW2bQAVqFbh9jWuJM8TsLTmcPWZtb8HqSSKx8SCV3s33BJSxBqWioKMsuRSD",
  "key26": "2iM5BRDuC6R8GDo9pM8haRUvY1ZXNQSnL5EpffFseAwL6W7uHfM3qPLTTNZkFaq4498bM1HKswrHw8uRDV93V497",
  "key27": "3NggvfkLSDE1bhVEuHAF3L3bC2X6SoUWPZshqGeUBRmrD6uu2x5nwkXiMVCEQWzanavuWSs2yKoBkhsjnrcv7VyP",
  "key28": "27ZB2SmL9UrayudkKj7JuyyKfyPaxCvmYQj25ubn4PJfeV9AZusGvVgdWy4LrgEQgTiUxmRQc4dZcq5A62Fstdt9",
  "key29": "3cLNCufM6yVHRi5j4RLCb2dPTzBZGg23J22iEpmkDjqbymkGZiATpBofMfJEW7nJVqQxkbwyiGpnKbTymedeMhnh",
  "key30": "4f3AkdxoPncG17aJrAw3d1tJVGD9QoqJyMjw9xaw4w5J8NCJ4VPXHn2CXC5rnchTw4FnsNbLNK8njXL3vh5HH8j9",
  "key31": "2QBCjQgEncog3ZLiTRbHf5bUP7pzSCngbHK7PHaSUYbGXUPShH3j1rUb8cxf7kbw7uQ9CzmUHbqU2CbFVTLnZygx",
  "key32": "5qoom8w9XyvYq1yMX73grANT98HiXvjuDCLGzPPMTcGFKcVapdDARhmYLZ7NHxrfizFu5u8yjkW3x3kGpywt9oBK",
  "key33": "tu5C3UAkSmEbUWuT6L5dbGREuNFnBMqjFTPfTZMiPBXiyCXsEozNDyQhQ9hiLot74jgeXtgqH24qGCYmLS3jaZE",
  "key34": "5HvNT3GANhwBZrpnZ3zUb15hZPetutdSkGQJ63MsMNp75WCmE6VuEZ1kL4Eu3q7tY2SQRZgLYZiAuwRUeP2vsaph",
  "key35": "2rGhRZyVkY8WS6y9qZG4dSjYpWfp6C3JDrwzQ8VKnQ4n8hQTpfrsG7VxC6SX8bd1Bzg3tms3jDizbg5e264Mt7BQ",
  "key36": "4ngrjQfXqkWXoF3aZHnbccuriBVU4oTQvXkFcRWQvWDT1Z5kv3xSfMqEPw2Pc4CaQ5CVM1L1yJ2vfUGzG7iHj6NF",
  "key37": "2CUmHKVacLE1Z7H6aE2XhRpKw9QGHkwjJmSQ9JLkThrjVxdJSYgnPfGyB8tdeQLJNYS6QS7UHoNKpGb5q94FP2Fy"
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
