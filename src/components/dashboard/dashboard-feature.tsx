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
    "4uU44aMAqC98bGrZaohSywPueyJMBZft1AL16ncax1AVuKJVi4jnWXb3aeMKmWiBbrkVQKqRqny4mQNGKTA7Jm7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2dMMK2Y4v4GSAZHmvDUcj2UUohYGXjuTXgVix2dBkq4Xec9zXBtPixLmNxk8ZTDMv1ByWmCnj3DuWPJ1cXPesQ",
  "key1": "4FN3am8QM7scEYFAQLH8kzzH1LrG36LFMRu5MdZ47mH7AzwBh7nkZjogedqmF1hAm6GFjEtKEkcaV8matz8kpwkT",
  "key2": "5MYFYqBPGCNFV5SYeW27EdGkqxxyAWDVo6fakB4d7vRqYnbQH9kHgiPuJgQVzmm3ePG2svmCE9eaTChJcxsCrYnx",
  "key3": "5pHi7LEEh5Gk7tVNJeSh1EsEfeLMPYVSHCJKpzPRbxGxaEYf8vFzSDeS6gHSir6oxeRNrnZ4AeE3MxasYk6sCcGA",
  "key4": "3Ng5msQoFiECFvpBG8oxoJRRFxAjtAG2WKsw2AKBDXtx7D8tKn8ww8MvGv2E4xEQ1MseSfS1HiPPVhR3eWebU2fm",
  "key5": "4BLw18Jr4zZFQdzy5XALpRu9Qs4aQn7bvgBTsEVefmjoxV6d74WRJhXhnGsgtTMGddhoZwvwdFRbJYwwtwimsLdm",
  "key6": "eUUcphbF5U62bdFQaJGk8cm6m6DCpgdg9Ba4sUDAQNLjYw62GohoGM7iQQzKqiRgHGogU5RR7BCLqxvNyeLUMRU",
  "key7": "3zUosSmVSnbcFrSfYtL56usngqzd97cJvpnWrwEHt7YnDig5v3SJ1Xed5XtSqZgBsoGWwEhoZEHkAfkdqtGnB3RE",
  "key8": "3hn1USAtjEKK89aZPeDK1R1ybQCLaDxYK11k6pn3NzA6BtLQCQje4xER35NHJWnDn5sQPv6qpL6JuYDzKFbDCXWS",
  "key9": "5szELxMpjFNK4uViH2T9LCgbq7cKNxwQ3U9bLS6gh26RF8Lt13VtPkCejs7DKMQeuBwER8otsqdxjqsUUbB7zjoR",
  "key10": "5hEsjGEAon8oVwVKeYw2C8VvZzqbn1kYULeuRBAxG2xiBFUFtZcYp1RtJpGD1Jf7ymhrc2Eh2xdSeY3guTMYLARi",
  "key11": "Ng3TqBsUXYY3FmzZVSaWwVFGQtb7ZzUZGeG7Z7nRNvmxtsLHSX6unsaGg86ouGBvqAPEzWPhq9KL3zvrixX18t8",
  "key12": "3MUSVVjq36TjXGz8TvUGNTkXg4GS5NL4gE73ugxJGF4DjaV3gFJJgqyXbxhWAbrJyQPqYoc8sbKeQTmh8PMPRDqC",
  "key13": "3MVqkYECnmALi7LmXx1eMu6AsfvAMbW6mex3sreHbTokwQS7vW3Cn9LHtrGAHh2d7Nvn4gMjFXQ8n3CWKpMNpgac",
  "key14": "3HtDkARdNhk4dW5dtim73Y85g8Pse4Ak2EBdAvb1ksW3NTx45YXFYHhZYapZB7Ef8NvoyC3qgdgKEpnXDQTsxV4n",
  "key15": "5oxpZPL1i1dwGPYp69bPx129T1etpK6BZnLDVF9qEEMq32ZN7s3ksKwCrcRfBrUnnwP2Wv6gNf2SDdGXJZYDtj2V",
  "key16": "RZ9mwDo9QuqG6ThC8zaj3brMV8brPV6rhR4xHKcVMcXaKZSn8v551ojeEzLxUnSv6N1TBFdCeK7ECuJjYQnTnDs",
  "key17": "34kaRk3VDQs8Fw39RfHqTFsTiXVba5ixng4hJ11XLpNJ1H5LgVy6jNTeDfS3JTSXceYtUWfFJEKSYLgMTrkuTxoz",
  "key18": "4M9vTjEhsR7iLr7499aUuE5bqY1xkeEAf4w4cmcrnbhiR9XoKeRsxvdqumthdnSdguLRu5npP2KbtPWA4jqKNygr",
  "key19": "5EwzPnCQPA4otFYhXinNVFF9gEGvQoCsVtFWmNvNgKxg5CadVXBHXH2Dxs4AVrT4hbf9yeoUtahxJWEVT38xGiCY",
  "key20": "2Tq8AKXYxrjae5fxktzu8HLdQYxXg5U7Zg7Hbb9X921MQNZgXRWFHU6iH3ccEQD3eg83CxJw6WorHVNUEi4sRJNr",
  "key21": "iciCaEuuPzqCeMDao1Hvc9DCCnV3FxQ61hHunM2wT4jFJu2JkJ3bLs9dnRjqSQGvpES39CkygtSjWfkSmVkzNpN",
  "key22": "59vCyfHSwAH226wSRBwagfnMRa1pKPtMpw8hNchu61dXpSkHsUENdE6B3WD5vPjMyAKHoM5bAEafGnghfMdTDqLt",
  "key23": "19wQjpX8vB73U4bD76tVm3Bzrs3poG1cLRTLBvKb84YpyM1tY6NprDmeE1EHXv7uw298wukDUSjV9VxiLeTtna9",
  "key24": "3uzt6Mg5n1dyN9y3CLWNRqLNjR2cX9iNDRxBKwpjkx9ChzjBkyarx2wsWyLNfk2samKUXnsAk8mEn9x9wLCDfaAy",
  "key25": "2YpqhwB1ijYzGBuqezxTPoDUxUYjnfAVqNAHEpZEZQAxNT4pjpyt1bfcfgnejxw5LSCh3sPB6sUgMuucgvoUWPPi",
  "key26": "2cVAQ1S6RdhP7zqWpkRb1igKLiG7TatCcbmyfXgvLXBYdwa7BtMkgWmfD51GNSUftFSzkhZVrPH3mf2qmCAjnfY9"
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
