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
    "4JnQApW7RkiwsQm85AKoA85U1LSNiXUwWdbBLqGJ9VNoNnocnHbGPq9FoeDYE4QfiRsVTT9g6i5Dg12Bornydpng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cNYHsqc2FqzLBkKWS1KuRVCD479JawkK5L9qfynAqbGDTxajW4UKTA5rrRBTq672yngN9ACA7LZTxr5rnvmQMyF",
  "key1": "2hNhaxcg7xcLT98ZQUtoUKwPqfyaj32bkgV3an8Z3s3Feh9EsPwKWB8NJrYqzKFzGHVdwh8v5A4N6tLA91spvM5h",
  "key2": "2ednJMbiw6uw5W7MZMWwZvUJVvfSmREE6tT9pxaYgCbmhBb9LAKXovLBZuqxJ7De58QwDH9dRytH5DXhGgs9bCS3",
  "key3": "BmzxmZhL8WCgTsF1f8iUcSy2DajS6K88WPmoq6RjhNcFuVUu2Jmf9NKAxPDBsbfv7WPsd6b8vG6gMczNf3nqTiU",
  "key4": "3tvvWDRnQeWKzgpBgWSHGbaWaPXwmAWP6L75vrd9YqFC6QaFYeHiGDzVgJLSKG9RMYatFeMSghjQnZxyvd9N6YV4",
  "key5": "26BGanNZ98y2GnnYL1qo4iDUZ1A3Nv3KobofrkxzucKYJopf14pDLXCynSeKiSkKsHSvbJnY2TvxZZEAsft6hU9Q",
  "key6": "4GmoBW4PMhqr2iqnaZb2yqSary9nZpggiybzT7DNYvebTFvoztw8uSoooUiNhDog3J7WvbLcQz2q7yVK6kHMpCtz",
  "key7": "BvTX76MLSpG8EptDWgKGUGU5M24q5AUrRwUP22oHh22jH8ybyLGurPo2FDRcXDvpta8cVoHm2EgnVrwHQzf69WW",
  "key8": "3asXs4j5UXfAi9T7VZ4LDJmEygnHxWqA6ez3HUbaQrDHpZrPveGAokiFk8xRGdDJtSq3kGq5VywQLw5Gj9iz9Uj3",
  "key9": "2CRM6uoeZfBgJamu67QyrgiRPqsUSMiB7SP2D4Nus5J2DiDN2hgCCgGoFzY2MLcm3NqUJbPbtekbXt1jexucVM5w",
  "key10": "yYqz7md2FLVcbrdcNEfVi1G8uCtt25YSAYxg2dXN88qHKJGcom5W2ec5rNtQajBadXN8a39K366H3aAE1M1EotU",
  "key11": "5hBAKuKCuA8fanRNZD9UMbS9CoAUgvjSwsCxZ9LZo8yGm561VqxvyX5WAxuQYZPPmbdEvq2qkwPSNdo7yWzhxPgt",
  "key12": "28BiMnrujtz3LHpW9KbfLbo2brVoF4HEVFBb6bsv4Btoif9UNeQJGA3L6sF9G1JQ1gBbCJ4Yc863q4zFFMB3JoMh",
  "key13": "3VKB3spJQTVeyavyb1Cs6m5zmbmAMTk9xDpA5GxsCmCWKas79pzU5whZneYzwy7wgTbrrbroy4S1ZLCeWg77ZGN9",
  "key14": "5JrDCHW5N7gixG9WHYuYTqG2hrTJCe3VSMcvBvJG4JbC8dPY6bbsBYkzS3KbcwWS8evS9FQr9Xpxn6E7vJudwp6s",
  "key15": "2953vtWL79qMzswpVj41fAhjfBoUCjfBc1uQR1jJ2k9gMqVBjfnCckwqxWgBXNhZ4BLeENFjCww2jFXiruQsjKpp",
  "key16": "2hCuKB3YboG6cppPN8dguPf3wWxFN9JgxRSmcDr5FNWh2w6TutXmUc6HR3nMkritnGyJfMiWBC3P4QoXN1RJLbVB",
  "key17": "4tTLiAbi7FZtBGywpZtv7LXsRmsLMoK7FwTh82XYfkDWMWWFNaVwZxSL7qtPTZsFEA1mkeoQ5ERcdRAbuJ1noT5T",
  "key18": "63fDXEV5ZvDzuPMuD4utuQJ5t1ASo4zvXsD1aGsw2cs1duyLJN9pGgx1mq4HgTE8zhgGZi1fpo4us1s5gH16J8yP",
  "key19": "3HdCSnxAnfJza57zYUhQAjL6hSRbTyCKzXo4HjWT5q72egYGYrXdohtoDnpdfjxPDGUg91u7vwGbU399UcmUZmoo",
  "key20": "3chCPxiAVTtxHgQJE1JBniNp8y2P4HVnTx7oLpAjpgM6q4ytWoyWwBcvtHF3AsWR7vUVHkm8oeVCfWoj4G6cmE7Z",
  "key21": "PgZ2me8tKYAe24RJxAENUiusSE796T4NFnnGQhMsajFnA7eCEx9hayTcYUyYD1DmpzPQAnBjL21KXBL5Nn3R5Mz",
  "key22": "A5oefSoHDMEHEgqRxhWi8hrB5xoHSrLXqegJMTFRC65RhwAtFzGQRfnWPaXpaj776iaro3rZphdhJ24VuLCYLrG",
  "key23": "3fify8eSNiWeKQ4gCjDobjUKV64guhhjeDwvTvHCo2LieygU65wssocXbKRVepPinmSFCqBxoAcWWnMCgr3yPM8a",
  "key24": "4ZNrdYvEDHbxjLR2gUKapg9hCnkV9Dtnd6YRHxKHeoijaUfsXnrifp2yMWRQreRQKd61gkFRhncRzLcpvF25Etwd",
  "key25": "5iVkU8pp5QJb2bBxxkAP8F4poGtUuyGekKSWBt5e8ZRt8s2VMNLaWZoL2mNHvVDzYE3xubGPDfukDkFFzW4PAkU",
  "key26": "297UhRZYgGSS4ySGq6ATSQp3AVadGLcP5BPMhQxNe2cTmxd5iPpf4h4RqkhfRsryYZ8p7pTgaAonhXR4ZDfv58pk",
  "key27": "483ESe4XfNQfhC6NHLWAMmAnHfGsQwjsUkPPWJA7xcGyhCy2EDtTJxUWd5PK9hjPbzH2XA5RL7cj4SSzxyMjcPo3",
  "key28": "3RPYjJJkjjYv9GPT6mv4s9MSC8kE1SxUUSiwdc9vXB3NkPLnAZzAicuPUtKqqULZLAnMLxcXSv3DpXNYJxTSScqX"
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
