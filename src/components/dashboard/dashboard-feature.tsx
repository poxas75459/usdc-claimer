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
    "3vN7zMabG8Yx7cDtmtd4KcJXH2KAuXsiZXCMixdo71Ker8b8faqPbz6pX6HYcqrjanonW4KckAUwN5eKbPFSTC3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQvV25avNyGwZEQxuVGLPa25kjNWZpmAjYN4HmTGFsDw7ZW6VxxKcv7r6DfAnCBZxzrwDtbfcyqRw4W6RE433iP",
  "key1": "dV2MAsyVAKhb76Qb5oGpXqfJQuQDzyXAiNxA4UnAwkBiBsoMki5DpAVHaoZmap3x2w9KW5vFDW8LitPzp5r8y8s",
  "key2": "5p72LpWJiTkoeQG9Uj8YJARrfx2wjKN27gnmLqbXgfwAmwynCjW9peQgigyncQDvHbEYoeMSndQhdYL5J6Lz2eZC",
  "key3": "kJ1ysFvMzxF9PMuwWBu24Esb6kov8dzqzaYroH2tG1HRAPfB5n4FbJaPPyrFgeAv4etSRjiry7tCU3UyLTvCnkv",
  "key4": "4gk8ruFjp439cZTuBMFmDJVF7phW2TVhYa196CFc1WVbQnDc9W3voi7ruEchCB1FRWWuw8LB9gMZXwU4korxBkun",
  "key5": "4jNSsSUzacSEnV8AvcACpq52KUrFReejxRNRuQzD7A7CexeJCzemWFC3xPHyZdFJM2q2skkL8uBm4bhpUJvZZb3p",
  "key6": "2uSEjEmN6ukHGULnkfNahWa13cjo7Lzt8pyNPxi9EtEDxUGTuG3Xzsf3BoGyZYrfTCxZ2cgffc5nbwmS3wP8cXiM",
  "key7": "4UFFYu96QubBAsiYYySWuWcpfKN1isd5hf3mhdd7vdL2CEmDhT7zMNbhGsiJ82KhhgayY8GweWJQbMjiqHTC9Qy4",
  "key8": "4diyjLhxX4YNTtvffr8WQVUkBxgmj648MHqW2r1xvXxPMkymtASBDQzzbwtGTahuZy4mKbaMxgGdcVj9kavgKYT9",
  "key9": "62TSieHUDqWtqdXQ74CMx1Ea7xHGbZ4jEHYwwCBhadeDzHWV58YDC9GnR3jH8ukgGay34Y9sZtsEYZtbWkYqEuam",
  "key10": "2DM1ncm7GEStnefQ6zdhGVjH8qYdHDzYvDbtke6D6eWJUWDb1Ru5uDSMhzWkoCaM7VFzmSLiZCGJ7pEMD2aU9Etf",
  "key11": "FxSzobJb2GHo1odZD4mWTDaV16TrvwERnDNN7PwDye1zjabx2mNfVmWBRLQcoiLPRimyTgLzZLBFfnQs91ucAzU",
  "key12": "5RvYYYBGJNqWEsu5ui9BJXLQx8BKYowu5nVTv8EU3KYonv9uNbNcEd3RJiDXWKaDhM9jdwk5QkkjEZ3kdnQX6vFH",
  "key13": "4qgFU51Cry6b5g7DAKLupZtiAuucX8R45uCMYEK2vMbR7jTu78Nrx7iCenysKpnHicbotM3ZAGLRzAeFZT8R91ta",
  "key14": "64uAJgyYkcm8HqAFCMWdn5xNfJPtZuiPxTE85Rr8ZDkGW2MQR6FiadisUoQ9hFMv2qN8U4q9Y8qPWzVnkwKGNDF1",
  "key15": "4WZgCFX7zNLdrgy5M5RVs4MS4UDbGnkHDFqNQNNd1Niwd6QTppWwrduNRw6jsgqui1ov4sEb2KjzbY1bSaf5euPt",
  "key16": "2VYn5zWc9DAa4CRRCrxLXu6v17gL9pokPXwddPdkgmwHR6gSkpv7q74DfPRJpvt2ATHD4x7yaWNN2wa3i3VhzBFz",
  "key17": "37hCPExSi2N7rzrLohzhmwh5Nv8pbTwQFxLTRAgLXducn7bBpkaX9ZTVHZStRovQKBwV1EXyb2dq42oK7tdQJrmc",
  "key18": "45sv5Xf8SJZYk86FU6djsXvrX9mMziFgSTFdzxN1wjdniq3FsfqPYf4KUiXMBH8b4625kp1AmdTGjzXxAWvFbugV",
  "key19": "42TDVa4RcjjuvpKtkorAyvphj8KpTBW2kYB8knD2BcNY21gx73JtLFf2VVJmvLMFZkxCELUiQsLjCd7VmfE5Py7B",
  "key20": "2zZg5Lg3DE1ms5MqmPup4F4SVuGWj3ddWgqaNPErDrMFhPe5Q4B3Xq9aC47w9VWegmaV4jjr6qdL3gXGYkazwuac",
  "key21": "3tcQB5drBXmtcB1b9AuiV8zoRh5KCeXx6ZriaU6TEa2TTmtP76YL5NTEwefNZTpSPm1Rh9ZHqKs4xfMC6AGd23WL",
  "key22": "4zLz49ZD7N96BuHzj6ZTdb8ofEBzycxUvgfV9HShWkLcJqxFMfYfwNB7TKo9CWD3nWxTCmc2SaHPcdJvv6RMfCdm",
  "key23": "4zAfxdfg36EkDJ32iu8DL5wJVyTL4fW7xz3CbqTcecMcAQJCcNtH3EouxVYnpnDcq16cwzyBb7jvuwqWGBMPQtsF",
  "key24": "4PZRpPxktWFUaFxVoQUhvtyPdPzdqEvcEGuWqiQz8cZqaDgvnuDYyChP878xqXEU1Mt7ZHsMsTseSRzxeo9JyBXK",
  "key25": "5t7sH4q3GzEHJUyUJiiDCUSupZS1H9EmYzvsVr5T6cwAnLxuNtYgSCn3RuKGfjbQJBWYy6EQzvUySRvr81yPDwMx",
  "key26": "58Uz3oCh8Wg9p4m2MZmc8v8uQR85mA1qmYvtUfEHYFVxi7sXcZDNs26btztoYNceyCjBDAs1TX8tt56SHCywYxj7",
  "key27": "3FsXeiE8S7BhEnD3GBCew6mEkfhsVVbvSk5G1VxmEcKDhLx66hej2no4JeTqbAi4ZgFhN25uBa743V958v1kofbY",
  "key28": "5Gp4gcJme2C1zKYLKcCeYexsTEP6xs9FhhETVAKuZnEH7Qw9im5c3oXP1PSyVVLHdF2vGUE4VSgZd1EMmCCuKnYv"
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
