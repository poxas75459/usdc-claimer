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
    "b8sMJe2PLRXzPfwx1Jx15rgdvd5SEcr3U8Q2qGvLuKqL7ZcjQH3sy8nxdWkDw1KiNdmsWEwGm2QmdZN8FjtvJn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J941fs3CV1LjWSyhg5E8BSC291L2aE969V4RVmeqjqTBxaZ5D9UVmBpqnGKXLzXPnXQN5JbQZvc2mQLSQrmNPz5",
  "key1": "5xeCQ89bZpXKN8c44mNvZYrNh5Ljjbk3v8j7zKSDahz9Z2i8eqs7LpWD5zdKVYE96DbAaT5BQwkMsESANEN48NSx",
  "key2": "4KsVX99p7ZEUp8E5s3dwwp4D5gXtpEjfAfLeNPbVo7Fa5mttohHhAdQNDpvbVTUS49zZssC6fTn4eGc8AmhY6cL1",
  "key3": "55AcBqYWhB299BvProbdR4cotFnPEsH8BY5uPo64zNDbTqEUMSWusYJHfTWmaPrPG8k9sZgHV3oSpFgRxjGuax8s",
  "key4": "5war5TMbjRzZ6eMAf49e7iAGSYrx2sT8oVtyEmkv6B3ggHeQMLHAbc3yWAXxfMxaRm1A9xmkUpGjLXBrvcL18EFu",
  "key5": "JjehJqJVLqTvWWLVGn8gW4HzQEhUxfunG7VmE1EFYkaYvfG5qp2Wqgtc5Cvv6hTkEg6NaqfGCksU4Cvcn1buCBa",
  "key6": "2cZ5CDuC4p3teUNxiWTj1KgeTo69mDTsHcThHb84xhHsEQRNDspSxzX2jPoMnQptj4EyfUfyJfMiXogWrJwS9KJx",
  "key7": "2W4ZzxkNyctjkwbvn31y1g7A6GLPX1uctYB7A28v2mDgJpDyHQkM9QWuHEMCUZLeT1piYZULbfZrKPJTzxUbedDJ",
  "key8": "2uxuaMVVVKr48raMCN1ANYcwDpMaYYBEuGnRWzbXvAzrJXDhUH77sHzprCmvs6brPmhenVTqeDkrH5iJE5Gvj8Aj",
  "key9": "wA3d4vq2UEs29z5ecHUPsehTdeZEU9C4tjLJxESDuSnDQE5oYMwCdHPVPcbbcGWSeiaFzZ9iKSQdPPBC7kX8Ljd",
  "key10": "2GVLNVZKS5ak6TtmHmg4BLzPuGvPoogJKcQwCLYXoN85PfYEjacxQkq5WdDRy4hNqVsqaCEoHJPiVbNNo85ERdvH",
  "key11": "5sHHjTF7nFxCP6SxJArnAvx7Axu83gJzPgJrg4D6QKNwyfAihKcthYAwy5HLXu7sDzUdJiXAnzP7wWThSHG27nTE",
  "key12": "4btTAhpnL5uhJqYLkb4tXNRPPgS1FPWJqgvwwUA7rMZGzAJ7X51FKLMTCNrMmDwswKnTNq3akbBVuXiBYPm9Gdu9",
  "key13": "49wPvY3RnYjVB3FENAc3NVsUjFLfDREF1XzjgQdXGiMXR52Y34rpCca2PuX2eZL2M3DPFqN2JaPcZFQUY6fRuppA",
  "key14": "3SeGSjGWtTsGmHxRzE1A3aFWNwAjXQfhA1RNkZLvZs5CYmYmnbGAr4gr6nmcskkFqhHhWMLqKq2JPXJwczp557Me",
  "key15": "5PAE22mxr17pG5kZT4a4ftozzT3aRRFz2URabZSRAxS4jo1b85jdjqK9QnYz2wZNyaJRvKcurqzT8uuZYppm8Eft",
  "key16": "4Ey8HVUkBxPgDREegcHa5sVUSGLMcZuXPfKFs1NtXNQ1RaPTNUAQp5F7kT8Tv5EYBFKdMQqP4GAgeNTwzNvoHsTE",
  "key17": "5Xdn8uAFPnMYsDFsfVy38a7i1BeYAkrTtjcfVF1E7zZKn2AmZkEfimLgr2ZQXUhZnnug8zj1yPfahhf7tePGW5To",
  "key18": "eyWkzZJ868NgbzHAzoCppU6HJS4oMXg83gt78T24MgLTGaCzFCzit8RS1VDkw29W5Pmz4PEbX65zSpJdqJ2HtEA",
  "key19": "5c5GpwMa6KkSm31pyJWAi6saJJ5djSzssc81XPpML14ez6Y5P3ViqG1gi6Mg9pPJq9QDBnBfZLMtGxL5Z5NRPPah",
  "key20": "637pnE4MXBJ529i3dF36SaXPwDR3J4eYaU6jtGwF2u7SPFkUfy12QMLXUeE8taKHGngsRT4bppWRwHZQbPebcadD",
  "key21": "3jrcpSpjZpHiFcrwxfWcuiRrUVmMKrUQRAa8Z7qtZo8mPeYnDW31vupJsMcvjMXxQFSn2Lu1h3LHQnHw3EUy8maY",
  "key22": "4J12wdKH8TDkXoRStynG4ztiRiyemnxjYQ1XSXn2WPiqEgsJEhrA4nyxyqG1v4wFY2caVbegLDnLbVYBcahAwWfY",
  "key23": "4HGFPZke1vYVoZ8XDQHUejTUkNTTpEEYj419mboY6e1fBCHHE2zxN6pdUcGHXrR6dvLFtnJhHrZi3E7RcoqjKY6o",
  "key24": "4JoDDKoJ9fzhHU5osmkErUe6siAC9LNdv4enE5WHQtpQJSkoWRRv9baHXRYVEUimysdSshk7Xa8x8WoTtBBurEZF",
  "key25": "M8YxPq8vWhdoBPK4fQ4yDcUFaWJKt7VD9SLvnCJdkTBo5ZjChoj76Eu1EsKCHWGyMLwrKqGsVDQFsh9D8baK29k",
  "key26": "2PARtTA9Ja4iXbNY2DkuuQTATq7AfBQhCSjDTEzddbb1Z2HNKESdLHycaW5fXJCy8QJmVGnkiYWNYAkCHSNB3CvA",
  "key27": "bUpzhyCFMsJzZ5phwTe7RE8PdWN3PZeRXZAHsFJgHVtGDxS23q7fDnqxpWAjybfmh13FwzFUP97793SpoABMp1P",
  "key28": "3yitKSFjRngCh6ye28DzNzuZaHLXZLMf5VUfNgnnf2o9J6hJ23WZ1hVuKe6b4MWrrzPXtxciefQSQwCdu85rQSj5",
  "key29": "2btun5TMwoZjUuRzVyuuKgDMz1pC1m3iCHFf6XcWVzquSzfW3mqzfkzRzLzfgffbtrZifVx971Njt8FZT83YEsPx",
  "key30": "3Pyd2QswuY1qa6zwHxqZu3zGA2bVCiT4L5Z1iaT7ECPr9EHRA94VMa6hsnsR3LCrdSJoi6xovcFtqe5yhkyRQr8L"
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
