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
    "5RBiamYT8P3TBbujMq9cCLDZga4cmA153fwhsq4nuWvgTGk21spJv7wRtVb2bSkC1suQ6cNU2SWAcQChfS4N8Ggi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhiCe8ng9rSmxBJBtccBwqyRyajaX5NW3uNFTRmV9PZDnB4UqsoaDzw5pxMQWiYnJBvw8xqf3YZW9BXHrUFqN6e",
  "key1": "gBAQpQAf1m5TekhEXp4jQ51oL4P4os8CCPJeZ1gPuFrEKK6CU8QQfNFymrM2yJrbhTgXkoMGhYRd4N8gfHAfkT9",
  "key2": "5XjjzDL2Z4Z7UbnEsGQ1iSsp7ASzHYMZ4qAF37J6HT1hHYB8nF2xy6Cu3WrrAJ5KFyRCm5yY8emPXABLY4Z8MfPm",
  "key3": "5teis52FnxVWjxozyzud2w9PJnGmy86uYArcHxRtkQJ1PcD2KMu5bhnihspUBzS3ybTPMDxDUc3ZCx2nXWm13PE9",
  "key4": "2wPMSX5m5K2xWEKJxx4kXu6wUscAuuNCfa1Zsr1Kje8Hkho4W3DGbteGU2Kjo4cmSnKDh42cGc3bEjrpKBmSYwNi",
  "key5": "2N5BcZgkzemwhXdDMnowk3Hs5FxXctrpVc5KXAxd2UDnNXv5u4bU55cTs1Erbu6jDMnaNbTwgJXjWEuiUvsYBPbP",
  "key6": "5T21xvr6GkkCqjCoNbUkabFsaPvLSDCYg9Si95LXcH88Xz4Lojsq8uWTTJxLC9Lmtm5MR2wYdKfHPCxdTagyDYyh",
  "key7": "4DA1AWCBbdUJzsoBqH2JR3ta7MUdmYzDpfyLt6RbioGHVU1UipGxwaycjUkCTF9GbGhUuadRG9ttqg4fSQs8ct3X",
  "key8": "2ES9ttHKDDPp7zraSr11DE7F3pW7z7v3aVoHAEGUtACTEytCq8rEedsxk35RRGcpCoxFALUGQY3dXXVPcsAPPeE",
  "key9": "3HWjZb7AVessih4bktMW5gavgXGGALHvKKAk9Ujw56WRoDpp2L3vK8H4Y6G6WVTRrrqXTYCXgsySMj14RE5rN6ds",
  "key10": "5qMteyFms4mEnJNSZv7CLGUydcfrpjwHwp4QSgtimRETvNJszrV1jQYRhtEeLV3cCGoFzcEVwTnBQ9b68Qrremhg",
  "key11": "2eEzFWPBq86sZzCxf3TGFpm47gssdxvozh4G5AKQECa37gYZ9jxm54hydPYLRDgvbK2XJAbFaz1NYCQ7iRYhRvLe",
  "key12": "2mY4ZKjbJeVPHGtLFLvEnU8XRFf4ZVNGgKRYFqsNPZchvKMGvF71Ranmp3d4LkwwUaQN79bW4Dv4iLjsBVUXs5TF",
  "key13": "5Y2JQ7GqWbiAKPYDBmShuknokY5SdqLDC49XG9e8x9o4bHEtrw89sUJsxPJFuZRpanae3WP12FSFR7TZTG7LtU7H",
  "key14": "3g8E8e7hcYyYM2aRyS7YLmKRBC53qY24iCXrGVi56oC29Xe1SEgf8n1EE6aZ5VGsp7ooUkNDGD3RUW23SK936JyP",
  "key15": "4e16ebG7AmieyRVkpeBJFLN6C4YvXA5V55sTj5NmD2VkgXeWruk1sctVmXv8adnmLsNMybbhc4S9sLxgPtVhNtYD",
  "key16": "2NPth4jNQEaxKwZBvjUkU9vZuNnFANuazHFYMPKuSumixnCKCSAvfMntXaKYinw6213zwTvnHFsMpLizKMTJqDeV",
  "key17": "3SERvnSingwJEcfVbUWYj2WXkMCZe43Sebz9EVMvwKdxeABJmMbTiW9vrZtkiJZZh2yRSeP9MrTehbUrBYv4fLL2",
  "key18": "5MU1m4E7hnV1HHuduzMnHWCeGNCrag2e9q4XXhyoowPZgmWK4Ly3PnSvEFpR2nu317RRrbPHQt9Nm5R5bb47sNV5",
  "key19": "5a5eJM44ox8GwAnSx4UaNYg5ur3LsadFRXkJmBA6ctRsH7XnTAwi9kcq1tMUyTmwFfNKBSGcETFvGb4HwpUsVivB",
  "key20": "3VfMfe6qHcVRtC2S5ikiH1NBG2wA3r3v5Bg76qcdQSeoFbLNh698hhWGDZwCBUfhVqtedew63k6d7ZdXZpFwfNdy",
  "key21": "2FagKtJRbA2d6A3Z4tXMEP1fCwCU9KifyvzvNiGxbFK9NyxvctHdECUgeZoG7U1SjicHXm6kD3fvvWXtFgxCcMaz",
  "key22": "B4UD51igsyKMr12BqFQefyrg3oNydRDBPPJbmJw3qzLJQyCJCpiSuKQAbBo8XqtbsKhTWfTSrZW7wiToCfs8Mq5",
  "key23": "5D7zBsRDgoosomB86nXq4YYn5hYXy5r3ks82f32KHUruCUrDT2kA9tGBohZBN8bQW5atsFjngkUUec2uMURf5Hm4",
  "key24": "vVVt4my9Trt9y7d1Y4r2oTsRAgRamX9jbJ8BEzSzwWGiEG7392yQvMBRktJ4Qb4U2gwnvbtQeznxNh8LroAcERF",
  "key25": "2tphiX2avJTtAVKgUgqudjTwgUh2UH7BzVxnVHTXXCdQhjGzEj2C4JD9W51EEEYgkxJA2Enz4hfTCW3LBkp36zdV",
  "key26": "5egv9ZUWQDmLMUCNeBjgskGyegoTdpWA14LyS1DiwsDLwqAGZDUfoFauEX586q8sM9P2ciFr9ZdEC2riU9vHzXDD",
  "key27": "65BUGD6xmavnebHmt8suEduNQf2ZxThRAy2ZWYp1ZzzcQgWem9hLF1KyA2FDM84sZx97UiXBCsn3FMei99JeQjB9",
  "key28": "PM3qu6oonDkzV3HETkjvinnSaHx7pipZ7tbjBJQL9QLGxswV6mHqZ57JkHYLB8YQhZoyoLy2mnmseQNBzXm2iUz",
  "key29": "5ZXhEVS9N54kEE2DTWtTutQyezZLD5rtzBaqCUbhxB3QyHH359tbgGzwv2haCLawMLwUfhrh1f9fgsjkiDC7wznq",
  "key30": "3sAL5HEuMRntySZxvNEzNk2WxwJHMSQNymiMQ8hgwDq3uKvbEd1pHzKRVBEnBtaRBmrhQ8gHaMKwsgtWELHyHA8x",
  "key31": "24CjAqH8Wky82iN2BJf8yMG5aasqcAVEpgkNyL2ffSbYAirP3SySH7bft9ZGFLWsYoRGZ3vwduWwqxxh9jBTB5HR",
  "key32": "4B67XQpbi1BYCqZEkj2THXCzMqpBTzBkJouVbPZX5rub35EwqstJVPwBEqtPvYyXHhmaffpmfA5f8RaPFxDvtSod",
  "key33": "5v3j6XXU5R74Fep5htxShCJkPEpxk5Ljqd8Vy3maaymPWXSaaDkQEYEG7kRoVAkM52KjZhj1t8mR4a9giA7g3rxM"
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
