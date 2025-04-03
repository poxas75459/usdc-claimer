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
    "4n5SkBNqDrdq2YnEJUsx1veLVex1KEEQyj2eQMUrk9ujYnDZ7ZPiq5xqVtiKhqiPsrPY2sY1gCtAsjGgCPiVxf38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1zDEWLxyGfbekbNLGTmKm3tVRHKoy5Nm6kraa4srzPfvTBXrawC4bWwBrWbbTv9aMAgiCDc7L57BdT3ea7JqQV",
  "key1": "5eYktPgDa6BQWT2Pjzstf4UWDY6CHHDdi3N3e5xX5KVwBaoVjgSaUpXwZWjbBqr6pvooQj8VkW3jzeoJkb8oUMa5",
  "key2": "CNvjuaXv5oBkJ9VoApMBKry9DpEJ3YnbDGeTyTedbL74hVxLCnFKcLXP5g1rV6gZtvN3UYKvRqspuCFWWrtb7X6",
  "key3": "3Baam1CEpVk6u931wirdRKbwX666xyEVKJtfokhZisENLfg7jmSj6X2gLZ88SwUnr6jTdm5CcXq1gxuv26ag7AEU",
  "key4": "NP6VkbiyLXtYdbcJfDFCo7NfPwNkSmtS5YyVcfBGBk2SenSLzToV72TjSSyZnAQJxYCiJkhxAYQ8Mn4g3VRtzXY",
  "key5": "3Fq3YhoytHUfzrN6Ww9PuS9XZqRGhccXwBPDCSTYVgZbixukfs55UcB4LLwLDLKp1vT6ruRXSxJQcd4KFvJ9GPGD",
  "key6": "3PV6giATXx31UPX9qQTCrqujc2YrC9WP6VDKNJsaQGKotfQLVgqaUMaH2uxMJxeHveVnRc5sn8H6Rg9ieiovzmhc",
  "key7": "3976a9m9cL4d6VeRvp6e59VV2q4ZAdkTvTfbRZM7mVmEf8Wq9AN9xb8Uu1VBhFHHLJwCiWsex4ukgwBVRVmht4qo",
  "key8": "34eCxyk54kZfgF8pgd6edPZsz6hNF7kHyJrK9wKNoCPCvFZUrFV8BWA9XPXN6C9KNQ1pBvbZ2DiFUE48KxhtviPJ",
  "key9": "4F8CpEhP7DTAt6chTmd95kLB4mPZK2L4Cje2WsfHZAWy4yyv8WWQfHXTBm9j7E8HsCYBxczn8crK2zHgv3Y4YPWg",
  "key10": "5FyCQcPsuT3XFYSUMcfcGWNbHNu8L4eL89rgmEbDFRhNmFeMwdqHCFq7Xtr617MBbNftY6DFAV37gw2voeEzh1jC",
  "key11": "3L2jNyG1mj8bP22Vi5Hz8DiSfm2bxCa1gXfeW462tVCkCzvfckPM8GtxHhjTsrcLJSuJCYUyunASLDK6YUWZ8PA7",
  "key12": "4iis4PeDEDtRiaVwqxinedtDtHW1ZEB6qzpq6NcJuEdFCBSc3GcRNq5wXRS8HcFaMG5aGQQeh5uMiRhYD77Lsf6q",
  "key13": "3NkKiyjLUuLkXMcvibVpWyaojqunZB6izRAm6MjeKYRzmvPFbYvCEAwBU1kHMKoMJUJsw8uZK6bptRTqwqHNovri",
  "key14": "4E3D1zwMd2uevKsyJkTLmBdrrqHud7vZ4QCgscSxok7PbUdcbwKKocsa4Qag26frg47CHArCXa9Q4j4S8EaucRLv",
  "key15": "SLuWHC9jXYCnQR18jgZgw3UNajEQbQ8bDvmnPAFSNAqih6JWCwsvBq2oGs84pBWjWapHYLEtdHbESkHJyyvyk57",
  "key16": "UJaX1bKzbfJDndTSKvYdRdd6QeYo87icfVRws5dyfUJU3nk2CS1pUvfTfwQk6PYYUVH2toQEULi7MUjrJrHC6bY",
  "key17": "maUz8h4ubhkHjjY6TYzXnSgTuQMCxe9H8cXJ78uxRF7Lhx67zfQKj62EUnAj2vbvEgnTEHdTEPRV5mXxQP3V5t1",
  "key18": "yFpBjwUGknY8SAnG6k8xQXudP85CRs7rfbDGfKMuaQNA3u1JmpBWJsTQ9RN9WJTQm5mfPEGVDdid47cyVQk22qd",
  "key19": "5jfeM5EiKSgGRgZ7LDduM3BF9ekUZ2Nq3dMnrqCqfMdGPU7oSMuMddgYKFsJj37n6TPJxzuReZRL128qVgSCfHFX",
  "key20": "46wtSTjmi66YNv6SPwPq1mYCkX8KfYps5fGua9PmC8Hufkdr7HJM1YKmrMVn1V21JM6por2xnzbKeucCtLDqVBjx",
  "key21": "5BzQCKkcm36c2WUuRT3LQjvLvH4P3hZYGFufnJSTy8MFWFzTopaiy28vuLuVbwkLVweNb7ExNFgJpcaD2vFLaV2r",
  "key22": "HkVxvrF2WPsZmAqr8p3CwtVH4aqfK8LtfQqH8UdZ1GDkdHPsCWJetof8bshMQ5gJyFcx1XHXj7c4rT16qR17RSW",
  "key23": "5KaNRLrcbPFW8soqreAGrRbiYU9nMQfHpX2KRtTvkPWsv498a286GgQKFtmt2LchyxQp4uuuCt1zjgQHnhgaqYUW",
  "key24": "3oNnbaxsiVgFpd7TCijmVtWuS2LvzX4SPsrPJpQbvqUFDeKbSAvgoiiKHhnGoHkd4Daj5rHB1RfBwsistNXvEf44",
  "key25": "DbUXwyxV8CGoaBu14b7CXfYvzfUbyyqtXuGsn7KnuuXfMSuiyouaEGkTW3XauWd51gWjPBLtu9XrHfb24XJyWZD",
  "key26": "4SCj5VKgzGftgHjWFWJRnAQaX8Kq6fQovTSyiAJyXPPD9RphdF88ZDDSgK9v2ghYwUH33Tr4mQRpxB5VVp77Tgph"
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
