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
    "4rYfa1RxMp6XuX2LX3vdBjVuWrPPAi9Z3YnmGhsje1p7zck6BVZpqeXmULyruFkaFKbQkERhZrm8iLbcUyhuLD2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvWWqgrz15RFzXQFVBozN7prpDBfxj5x5UqcBj6XL1C93eo96M1okahD2cXPQrE8grNj1DD8FfEcJ1bsbQSZA5E",
  "key1": "jaw9dJxyZMWNktkY4RBwxNz5f7XNAeWhmFxdMPZxJgGHTkdAKqPjUkdC627zxZkdr4VLRq5Yh6h17nt9Phuii9t",
  "key2": "2AbD3dwLETreS3newmUqcviccqT8jXdDmwwE99V2U6CWFWkLY92eMVvcWvNk7oqkSVrGdzkqVoZaef3zcbDvFQPT",
  "key3": "5o954prjDSEDzAfoFtvpAsLD4PepQTSUU2igiqPUwxWqMCUNDGiCqf4AvbYKYXkTKRzCB28vkqXvi7h39qU6aawL",
  "key4": "4k7YERGtXaaXhA4meXsXVBxgXfB61rkGcUi8pRZtdLHkbSCktjrP44WS4kkYSWGsF9YyjxWoYXX2VLue8mcew7FX",
  "key5": "zMATWL7XJrdwQW6ayzbijiwq8qHpYBpJJjEMV9SuuVNCquM1Qj2CKbvR596F6NwokE92rxi8orVJE7AXbZ4S7R7",
  "key6": "2Aq4imcQcDd3ki6ttY2kedRpdsAPyy645QE2iBMxaLuEyGKXnhgWfkgw4ZaW3QrhNFEj71nuc9wSvhpAJ7gSLGaW",
  "key7": "yE6me3y5FuNE7bxeiJB4dX9CnDQbb73JX6BQKxUGFG2cqBJRHJhr77kjhGdpDMpLV5oMjd8fGQ9HfUNuVR1rQv2",
  "key8": "3Nvh1KiJACLP3hieGXt8NopgkdHvXmscxQXMATzVKsy16ZZLwjbjkgwp2KWEGZ2T43Cf27wZh8tK3N32nEmMtVuL",
  "key9": "3MmNfB91EWhTTijTLf1UvvhvmFu4r1ykkWvcwhdLRqVM6wXTEGkc8kHAipnfDPUMD3P9L5ch15xxmj8iW5FE7bLu",
  "key10": "2TyuuqF1BEEqfr4tjeEYZLrzgdwxTw2JmmWMLCFcSrcQNe4AcPxUyn49Ff1BLrNACm9t3tN1KzbLTRuCmxKaQKZU",
  "key11": "3YBsD5b3HirDV8Jb1r5aRRMzwzWbZu59zijHHzySiZkiCPwomhhFZiJG9Enhu15H7cYr6Ydc9PRrupFw3iN31mVo",
  "key12": "4MSE9uBgXdNZTzyqWpDpSgetU8B9w335mZFpBdek3un8m45UWt5Eb3nFHUKzNT7eiaZLuWPr76SmcAoJYjPFxT78",
  "key13": "3vVTWiGHS3wrZk4ANH6T6254uKFK4Pa37wy8214MQqzyx9gvWN9Y2SkKGjiqf1rpAooLX2qciWDrEMZNUBd2twmC",
  "key14": "3UK9EokfWscTf6ZDaoVr7Bx8TUnQUjm1pShtt4LT8FtH5frxw6MX8LBcqRaDET8foU4ykwUzPSnTwkY9bBDnEobr",
  "key15": "GjQqDoeP78t8qCxSMdYnKaCzVWBojp6umZ1BonQykooHkPwujL4DeyBJQM99trtoGEJW2QW5GmorpEhjp9aUojQ",
  "key16": "47WLdDWdy3ZWRfNVAQP9iANyQByq3iZQpDrdzK7aLhzpTcvN4vJzNiYzWiXrj2pw6Ujp21BrY9U2pXaa4KZHLJmT",
  "key17": "5tYqPWr5hSsvK2MQdv2HJgXWzCozgj5iJz5xdXBmP18KhK26sdMpbMXx1d4GvpXYgzLDPZdfM2EtMgWpTK4dBwb",
  "key18": "2rJqrrkdLazxCiv7ZM29r9w6ktoDryB6H9JLqsCM16fnPwfNnjhLpMhpyEJmDmjQYjc917s3L3QUNEg7W8mQn6nx",
  "key19": "3X7jQpyYSV9AYXt53iy2ikBMrrSBHatSJF7yxBqSEydMLmRJ6LjZFTb4jWZ8sVP7gjkkX6BiqVNorYfPWocrw7nV",
  "key20": "3awDXrvSAWhRxyusLghh5m4UPgdARS1YhBicVZS6YitodZDSn6jVPSoUBhV3PvVukUn2EKmRP4MLbkMCv6N3SEzk",
  "key21": "3nycdKWgmVbvHYbeyVYYBjJbC7zPRgxnCrNyJJYtZpsrMqV7PRRuJRo3svkf7srUMcEf5RLfbufkBaUpGaUpytDD",
  "key22": "4ZmfU6xt8hQUuXWuahKkKqYhMqCckcetG5hJyBR8JpCYkS4hZmQNWtPZSzLukQBu2m8uQzVGPT9k1VdJF5FhcFVR",
  "key23": "5rwKTaFNkysMEpu9yhnVccR4G2Za66pT6N84LMi4uTS4UD4Mkr24Z9dvk5JM7A5z4yRMfUf2VXYugmrGsZvoV8Ja",
  "key24": "4bNYEH3aQHZmVmjcKrnxKoicAyP8PgcTXHhnuMYLun2mLLkVkUFxBnH7KPnS6UtrNLpwDnt4pa6C3PmE1E48vJ6i"
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
