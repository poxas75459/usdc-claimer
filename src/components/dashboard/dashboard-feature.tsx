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
    "5n6kJ7ovmN4PPyWafgiasbzeZFjTamYmaqCT7Ly4LditUDqbJXTp4ueYbTexY4HKWevPVxPUCxoWZD4FDpnUZhMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnwdgz8XNf4MeWxSd3nPEHmDC4BUtKjUo8TqpoSciodK6Aes7eHibXBwmHKYwHt4ASKEZwsrj3vJqGRxNikQpbu",
  "key1": "3JzHgH8cAjwNEzaG15Y485QMx8GxGuPmnfQv7ghXtXG5Hp6EeynxpNTUHPtL5zYpsVVHXFJLka4kRuHexWwYKp8z",
  "key2": "46o5CuBndgs96C4i7JVeSAFbQgrzZdgqY1XZDJEnrAunqJDtHgSC9b2mb2SNieFDByXurNxrtx2QEpYAsnCZQjvw",
  "key3": "3SWhQvyEZTYjpk77cPptzHnWCfMVMte8c7hjzhYk53X14mJqDmBGVDC9Lzrv5mVvww38xQjsVZvdadtJMy3jfP55",
  "key4": "4eGkpcrUxSZHKHH5aB2vTqihzUh4jhogSF2pprpF5tmSRwKJppVLUCCurM6DYVdac5KuUJkhvw3vyMzjLQRJhnUr",
  "key5": "4Mcu3LwhjbGMEnizEXc1NBLatfu7XxN8T2sAd4XYc2o15Xu1YLc19tSCxQKJU4dVohaHCY6ZAwAmvLjcH5NYQne8",
  "key6": "44Nc5bxwBTMymPyAzYdfd3BkfM1k8BjUJg296BnNqjGgPcUnJSoBXvszpgYXqHrtkWpCbXxf8fWCH13zv4U4Dywu",
  "key7": "4nmyzAFdGUzdFARTpp1mD9yw6R9q6RTLRisizX4H9sb7xJMZMheydKUX2jKb92ywARWZC4H7tGmqrtWTJHQtaJ9L",
  "key8": "yKwcrBJyFAtDN6wxUkimq7wkBcvmpYJTBcufUN8NLuBhTE6hi3pyhZ4FeeJVQnXwsm1G5KRMXdLRmHW23tjG9vC",
  "key9": "4jew14ovyvKUcVX32PhqyXqHki6XRXYmgbgdFhzgxNiH7ygsXQC5twNzWj5BqYuTSmYPZbJ3izoCRm7sNFhmtWcQ",
  "key10": "4whPyMM6QJSkppLKH7kV9omenCpBhkXLmTCMRdYu3kNyLBtS8vou4EoEgi3P85Z62gFDXYhK6ET4dUtWbXtnseBD",
  "key11": "3LCK1rrgH9AFmKpq5BQL2QuVMqMfJPmiiDUMNPbe62JRwrS3uTDhm16tQMQni9L2ESmqjUk4e3DGo9r8QFwLBKQ6",
  "key12": "2EYgSacyqyinaatUsKGR9mBKfadmhXeVnnE1aGAyzfwEQqQSeQ4Qcviyvbx8tMJax4C111ZVER6ZXeKR2z5yCBFv",
  "key13": "5sqerwrmSQGnGJphMGUwHXbUvadFnkWSxNhiBSbBkszGe83b7vXTJuMxSFvhUpo6odVqNSnqSyQMDYE74LTsrDaV",
  "key14": "42kpPED2265zLczU9WzpyJvMBdd4P58W8KSXxgXwA9V8kgmfypXURep3Jhcjs2t1geuAuRMFD6MbYGAsiTKPrESB",
  "key15": "583TdgFS4NrAJ65xeLxeQWYcGJUgvLyo7Xv9a3uSVi8jMkf7PaYeMsZGWnYjkNXQUEf4zdY6sdxhaGhrbwh1a5NL",
  "key16": "26fzYmBW5h3QZRBhEN3YmUCdpA3tXRfBRfEfE96KQtWN163HPCkyS6GnmKQgvUcAP1odnxzd4RPBUYeYYjGkRsqG",
  "key17": "4PVtaL9CzX5hjxaurWMfSMMsbJME3nkwCtwfkvH43YgyTrJLW8dKDobKcu1S2oj6aksUzhygikuiSFwJDqn71ouQ",
  "key18": "5vFVoS3FrHyQjfXW53XGsTf1DanBKwMDLn2T6KyHYzkkqBB5fyGqaVQmuGEQzJv7nWor8uuQVeB2vokaAJJLWHyh",
  "key19": "3HtEqr2XmT5nNfkZJg3yWXokJ7TRLEmxKfrW2Vaqr8N7iXQFHZM6LdJnHddn4J94dd8Bxo84tXzpTxW4ELV6HBxn",
  "key20": "2BjrKxQfesH2pNoHFVDrj4DH6f8DYkKNrVpAP7iTMw5vRn9JkoDpwoYqpiR7ziVZmjrBZs3vvNovkCRhbT5G2aaf",
  "key21": "3iHnzZJf6HZA4CQt8yRa6qSvpHGv5Z3Sky4Y1DwzFM7Hy2fmzmbHE9GfRjWkCPDwPJ3pV55KSuKbzkJRQ68dM8SJ",
  "key22": "4NUNEDUczTLVQFqrpMsxJ66JjhHrXCeAD1vZCqjV75zpoVAcfJLjx5y4e6PezLQaV4fS9PPio5DCwYB3s987ReCC",
  "key23": "52Yt8rZ9B4TY2gYQiQafuXU3bZyXAyBviNvnJkNAvSrTRsxGbfhFtNeVHVTvAjqvjAXpL8dbDVVGDtD72jEMxBJS",
  "key24": "2dLBMqJPXobx9HmMeXMUQMrpG1Mc5HaT24Y3wSVCM8o1YfnawDRktC6NfRtXEqfKc7HZP6yj6TRKZSdwmN5rCPAi",
  "key25": "2fh1pK9syDT3qJLJcNsVjUihAC9QWfmFz5YdeHTNNh75SuWdckCHZTCcYwHMnSFu71XjxdT6nD2A9gSZgmw51sfj",
  "key26": "358k9quvMAScU2ik4qwyo4yGuK8yvCunrCGDAmqLVqYeKuH6GWXysVEvPkpD4QLiKktFvxP5ZyPCuj1BfqpE5uMW",
  "key27": "oJyXwCMecU1EwYPbXpGSewVLxQozAgRGoiiyCEBJfrkZ5fzaXUspLuBeMXwmHMscQK6cp3jR2kARdB3iAVp1jQm",
  "key28": "3m9qGZNf6qTAVMCxH96G6DWq3L2NooPijgSTCBrQMcHNwDHiqEPUicexB3DGkoSkfhVFHgpRDgvjJondzvFTFjbz"
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
