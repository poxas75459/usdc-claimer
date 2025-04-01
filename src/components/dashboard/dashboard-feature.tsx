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
    "5uaWL4XBxqrVXWPWnMKax3nfof4TSNq4rSu8jzXewvSmc4YKYvFBv7gQHojNWfTpJa8WVBf2EBjNg9sT1FrRcMZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Gm44sLho8qi2o62Qv5WfiGGinNSVA2rw9NEekXCzDCKFbPRCsL2SpMncTtpkBQWTLbHakUu9X4V3cV6GsQn5zn",
  "key1": "3HhqeR2mR1u1ssnHij4A5VptYMPtxa5hCCXriwVYgaBig6rENH5Xrc5qALSDSHnZ9W1BV2VaRwV63G4Akb2tf8JL",
  "key2": "zSEkTi9ig9SPgkc5mrdeadyqwCGytJMoMaBYfxeu7KWydv1696MG39dKd5NNePmA8osGvRGsfxGxw8uz4V2DxAo",
  "key3": "3rB2Uu3iRggzS4SuH3YSHtWMik6uM3DzwGhLqwCMCnN7vb8nYWkkJSCY82b4RBDiGff8HHzXhX7MRcPBrcoVpezu",
  "key4": "2gcoZsp4WwtsSHbHMWh92AkDx3TDaAAapvHLCD8ZDNHyrJb1aptypR6yNzYNRfkYsXrisDQ1hHwPJwagSQu6iwAZ",
  "key5": "3sLzPeriU1H2ogBFjLoyYd2s9SGGui42f4gQX1TPVhkCjcYfGgGvu3tobxcMEtoVM5tGQ96o4BDxn4Hojz3FpUDn",
  "key6": "5rcdSa7QYXUSthvq7wSBRQtZ8VgTdRRmNyf6a2xd6xughQ17LbdHDyzFvbgt23piSqJnQAsNCEJmucPsyptpeK4v",
  "key7": "3qG8Zb1JYDxTRJP136nUTWevfUokYdzBw86Qr3ELVGKFBVsACLrgBnaFJvUK98wsayY9mmQgk9PeUHrtGLbMTzog",
  "key8": "3SLQ4ejHazzgAPuQmMTJim9bhuFf9XDou9XWemzhruSZu2Q5EnrNHLSFvtV3iDehMNNEyH454egwdLWaHN7EuVQS",
  "key9": "2gGuDwBUb2VgAPkLqdcyWVK9PA5B97mdCxKdWjFzxhRXkeb6VEZeeSdcR6xfactBUrjma7tLm3pWb3EqJasRr4B2",
  "key10": "5vQnYTAoeZ9TA34V5G6iWUPD6abKEhrbHWe6LUJ9ixYSYpZDqeZuN3xsoJLv8XL5RzTpgGpK6jDxmj8FpJmmn9ZR",
  "key11": "5DWRyrddTjfueVAD7mz8EwvJnb7JjnbeVJ6SPqwZ6SVwFL9DYrvX3jWD2q1R1ThsMQJqVs9nzgLjVcWRNPwZrMY5",
  "key12": "62Qp4ZH5p3gG6jQqNZzk4rXhTHDsXEXPd5U4ewNDH9htEo2jQpXHp67WdyEziYqk3UtmsWkN9DZDUeXAH6N14QSF",
  "key13": "292NPSeE13PtQB4oDfmUfxK7r6QjSds83g73AHb8kH1ZMjiAhhcHeMMgwcAwbypD6XyTtPt45cuPkjxf86r2GBwv",
  "key14": "2D95iVJTQHVTdbubH87a2vYwXbZx5Mkw3bz9YVR5j17ApCpRKP6a7fjsYRXB6KpVkZwTiaZXjvdHmJBGYWvNDhJ6",
  "key15": "4gFHVqSS8gM3d9EToL4oKXrewW8HrXpv7Qpfo3jkwS3LJvD528MQPomEFEETJ5DdDBQBHFfYVeA4LEnmtk1dhu9A",
  "key16": "2MNPkd1nWNsAvWvKso9P9mg9nA6Kk5aRWU8aobCxDv5ZCJ6YacbRJgF58fzuVnbbS6YtMGVszBCg1H8TLUwUHNaJ",
  "key17": "2hn2MRws59z3WkWS5cBMUXvkfSNKjndShrHNh2dhZtJhVwU1g1kEtaMfrwHxwsKFtPf34KdpD8J6JTxv4f7dmaDc",
  "key18": "2RVCF5wymJWWDq8Jv4wpQ8kYRU2B311cz1EgjJepMBbwihyQT7PCR3WLsnwD1xbfqXdHqez2n5kBGb7j93XB92W4",
  "key19": "5LzEYfhJWhhr3mjkVetvDRR4AG6dpN715e1gsm1i1b7hEmGgyJ7jGSMxHpMqPhVBbn9UVT6LXQuUP64GBJWSpGdo",
  "key20": "3K1djqP9xDDE3EH4koWgxWVaqJcqdbaw2WBrcgaLtyLdxDiEpYdoooHzn7NG4fbcvUyDbZwoyUQixnaV3pgAAs1K",
  "key21": "5xrwuBraJsryRh9mRFegTQJhoMdqM4X5JQ7R8doab12NNsvyMjWtaqW3ANcxhUY91Z3krrCfowRsBuee74BSKpiY",
  "key22": "5gePDbYjUwF4vpcSo5tXBRS4rJw6vkV7rRm3sVKjHSZK8MeBB32rN5wtmenXVEpuEdcqbpKJXQihPPB8NjDxHm69",
  "key23": "3sVTzTbuXUMjMmdgRtTBPuyjK2SyFcemLuwm4jvbmQwKTskLtZjHELKV2LX6jq4jbpSbDLUPyMxHySFeHbGMCD9n",
  "key24": "44qSrhB5j5dqVMnfk2BJBoP9pQQvcsZ2kSLCnk3fJxvkoVyPaDPdJHo5xwAaEjnPntZwdvVSfDR2hsWxk8hLHkys",
  "key25": "1Bs9Dw3UZ4N1yonb7vfT8gLNCfK61wUvwwZtFcpDFPCgyN4G5DVjheqDyr9kRGv5LuueQ4JxcKuxLas5r6591HA",
  "key26": "rQZqCVEiKDJQgeGzxxHvyTdRipQiMtzhheGnrB9BK9ug2iChEKD5NkW5tCxDcK7dQcnV5F8vvcqM9kx54G2yT5M",
  "key27": "4EEyYbf9pWyqz8pJWpnXfmvZS1ujganGxR8aVfLucs9V4vWapMUiWRrJnzr9FyF3H6kGxkqDneJWnkq87jTtfCJE",
  "key28": "5fpXMxJenmBsdofHDiJek3tikYkyMsXjghq5xPYTFGNPEVfZR1x7zXDBrLVB6tMRfMPMs3mfwCvjVw3q95pvEog5",
  "key29": "3rfRkpPStxQu4oRMcACPptXqGJRJL8LWQtiYMaZgRTD7m23ETodh5QuXx1gATR9dhVc1295gR3fbua55HGCGJwPy",
  "key30": "3GdWWDhM8u8Bo3gGet2n7dTsWmTkSN1ErXRsqRviXRAfoAyMyiMXTHSma4AgEiNCMdCCNVh4aE7NqM1MjjMve8y1"
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
