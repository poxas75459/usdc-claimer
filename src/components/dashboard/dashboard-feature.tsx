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
    "yj3dgG7L5mZ9SqQ4TZUSxy29BqvhnPhXZwLWthQepdGpW9Y43rhQ6wAm192Ea9VsKwqJC4UMTxxLSdYqFtpiWVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hUm72fGAxzT8u4VpdhfCtvvjkRALfV34Fr4H9vdNxKn9D56Wkjm1KwKKhWJAiRFtFqRrfz29m2AXngktWbGJZJ",
  "key1": "5a3Z9JGZNoPUENPhNiCGJT1KMhaEnigRnq3QwuiJ9Dvect8JRqvkt6hsc8BKoiPYvupFifQFbmZrSvzZ9cCCjcUi",
  "key2": "jGAmjpvuB8ctMeLa8eatD5trdNArDyMa4GbM5Lv5dQXZ9PhxYqohryQhoH46iwFRrHSK2bzNFfcqmNLiPojYrCh",
  "key3": "4f3hAAWJNGrWsGRAK9hC7F2dD3J5UV3NoZDPNuLarbecvRx2oui9Bzw1F1HkiYeKLQAo6e7qe7PPZMYAKfav161X",
  "key4": "39NhGHhbsRapAZxd3uXJDJui3ToWzNn6XWT85wA1R56H3TT6EbssEpX8yLrEhTLmG5TNtmdHeQKhodrJrDJLkY2X",
  "key5": "4DutpztKDzX5Hx6tYGh6EzDFe6gwa62ZY9gZ2FruYFfCpC5JT284TL3ThFh58MyPiXV4oLMrTmThvKQBx8QUKjF3",
  "key6": "2Sj4Wtke7fUfhKdhdL6HyHgcAvDFh7PV628jkxzAMUadzyQ6KBWKzbkFkzXAdAg1sRHWsEiBfwxom6qAorjhAboD",
  "key7": "4FBUoQ4ZCHXqGeKUNfCkXcLuYaJAdazfDQmwTMASAD76Z3bfKBVCF4fZinb6AAvidkb1UHLcKg4LN9YET5NR26Z7",
  "key8": "5KHFuTkoRsF8GiCPC6eeCGkPGEBxUdyDXkcvddRypMhNJmHxemYR1VgwQnzvEQ8GngNMiV1Ac5EUmoSNjJqW7mxj",
  "key9": "5gDRvL19m93qGeKJnvVz1KYs3T54yJsL9UsKUWfyRDqapXGUn1iuTDRu44zPRuiqHzVFEA6hno7AN2ke8t2F2XnH",
  "key10": "s4RBDTkFBjynCXy6PwJX2H3DzySH8JAj6owR6BNt9MvjhSyCqNpRRHThF6EWVeuo3BiJv2Yomfi3C2khypATLdu",
  "key11": "45SqMBfDgPTyK4rzBkY9iFAz3MRXsujj4eLA5PogxYQuHcwNWERWybRaog915RmW8TFVhFJxs4BpDCPRwFzY17i5",
  "key12": "2CKeXk2VLdPvGYkpDuxbM5Y37eKgMTcUPXF7poYrxmYPGqtDhsykDLTUuzkqS7ME77nf9vWgtpuiXbgo4HHHxHPh",
  "key13": "3YfXfEWHy3S6HSUqwVc1TiM7VUMCU8G2tdvnabeQuKCH4y8rmicwRicjNHiysGKsELoS5Wy3Z9NBZaS3LaLyFZiT",
  "key14": "5W6TEMt2XQ1WHKVH5JgjkPhxRVDktnNHDHvZsYkgirgHQfDxh9N5AMmjDjPE3Svv9Le3X8G79FoSt4HtQh55Vw5E",
  "key15": "5AezFhX1S4CP7jL2z9ErpftDz5TjBJrCWyg2NPwDMVyZgKGsFtUxYkDggUmKwsvUXr7gLdBf2f4Ckf9pELZ2cqFe",
  "key16": "28WezNsADPJtUn6u7SnMZh3vod5NzWwFuc2oJoMwN4m15n3xxMKUFd3krfsBFQePBet8iTFpYNNhkUwbF4FKXmfW",
  "key17": "cFbg6dHsWZ7JNoJQURoeU53idPiC5t9bAqt9t5fG31uQ8JAjLPCERCiR9YNRALve1FPmTxNLtJaB1EGCafnjZ1n",
  "key18": "2woo1RxN9sTXUPnhv4FiNdkNTCXxiX661UsadChwZX34tUrU8WoNN5tAHFcPM7M7ZQsy77HMCsNXMn9v9X4FNggr",
  "key19": "61W8z646xmYdnSVr1egvPm1MXKzPV69FsKLFiSbUuEPgMjaxrVuF2DfqVnZyzF9aTZY1hnL3LUw8kRMBkK6PQCxo",
  "key20": "5v2a4srwzFZuZc48u49qj2sLvKNwzt4CzqEG2JVDGmecHjaaujZWLJ7pkXDLfx3uhDnCAaoDVYTYXGTiKAQyaJPz",
  "key21": "64Wc4hFyWp64ZKkvwBMn7szBnhE4VnDJjDaMYiHC5nEyCnJmdGa5h98jU3CwTm2fA6Z1eeZsQaKN1KhRuufhwzTz",
  "key22": "zocvvEGna7Nubd1abGhCS4eeitoaTGXiaamgNFPNuvmkrsGC6wgR9NNZujgSyaf1vtCeJNVytcKEQCjsCpvQeAE",
  "key23": "43Ac84KKTkxZe3auEQEMbYpnSjW2qx1nkp4Qqeg4SfCy3KAswSiCD3rrwb7ayhcQ4TJnbRtih9BSSJtZ6JEr5P2E",
  "key24": "tTtZ6gKTsx1moG6i1vwyirxJiq9T5nkA3WmcD54Q3bG4kjvyE1jQc83R3E8U7CCKYitgeX6mbU515ZWyYN1ijrW",
  "key25": "3NMEQoUW5FJqxva7BBUfE7x19nBsT6uNiV6KNoKF7sqkAMUoAk6ZGDdbiV2BCNTmKfs6uJUazvxCMUy1esCxfuEu",
  "key26": "67AUnvn8DfKSa17bjzk1ctNp9RWmBtDzCq1XecbnESpDeQmyHKV99vkrHt4sCxnHewQKn9ppdEH9jcdHik9vUbYP",
  "key27": "WfcqirPL4N4RX4gZ2aMVge8rHhan5YhSGfH87fyDjQAJCtDkm5DwYVMssRHWuDRzS8FNxXzozjS5rsE7Qin1D3r",
  "key28": "t5s87QMJv5itdjYLWbWmYJNBaMMCMUiadJNnckM696DWn47SAG68cHgp3mNKtTHSP1poG4poThhFAD5edZShZh8",
  "key29": "61besXhhat16tQYLUmdrR6DTeCypLKnwZxMk21zLaNUPYxURJ546RHkihm1qEYHFjcw6tcnoKeeRQNcd1DtxwskX",
  "key30": "zAYhgkBtroxrJSPpRf1UnqdsxZVpEHCpu9mL6E3hnALxoeYwkh4RdMfEAD199wMtBYqNMVnz5z129bUYnWQySnm",
  "key31": "5ZeqDYwBjwuAdz26VH3MUDHjAQYyuDQnwsDm2SZ2jAWFFsYJwRbKxvqTqQCeiduRntgC3MGWSKGySToxnXpSk9Rf",
  "key32": "3YtfmPj3bmaT4yXzbG5dXT3xpLhBPDnyAzhzVWR7DEaknE53J64uSScUHbYtXZonMEsEr9ZLmpbMhjr7DUVxgJZo",
  "key33": "5s9fjJZ4fgyjZy9HrsxFsKxRKwboTtciUC8Z1kUtbhHx1JexqpY3D3JwWqDfGmUzAiQzZ5JCZbSoDAx5tUdeB1hQ",
  "key34": "2ZyTH49zCxuAHLatRFWKC92DwmFNhAQc9WE735x6wUPUXBjcAsSzQAZSe2YmrimUZXWDawaL3X54JiVtxNrsSAKG",
  "key35": "5jQBMZ9pfzeL3E5WrQ5EqGAgxj16KTWWVRj3JGDm74FaQViNKeKE28ga7pUq5fcg2GpgpENVM8wL7ByiSnFHow63",
  "key36": "2doomownjNbm2d21TcVYijdSDrV2mPconpxTJCUw4sZBmhwAExj8E11QfSyptcjxQhbFju7pNrU9gn3NTihnCGs4",
  "key37": "jVW5586iEJKntoMfaxCSZVBxRC3zA2pp14vVZ6FP5uqGgimUUmhJc7fNY5m6Ji7kdK4Yj1uLQxLS71H4mZQ4SxM",
  "key38": "ZDwtR578Pq2f8QXAKbCQeiGHnqeRHYE4XFvv6BSaPDt1xV5Wo66ZjtZfgnV7U641KbEJHU2nqsWxRJDLY16zxxJ",
  "key39": "2ZhRT8S56LakPyjgb1eZAWMB3UTwVDKK5WoKDvQad89qBWozxpSYwZjWyMPW2VBpBxhA7PdDMoCx7L8vrPCAZVWD",
  "key40": "5wGPBQDwWw9Ngcoqhf1L91B21duNnfSRF3DDZ9eKK7UHxhH6ZEyvHa3jQM8vTrS2P4gyaNyqbFfy7XUigBFiR5YH",
  "key41": "4Jg4kRD3QuNkBNeShhBjpFypzjJq1gqeukUthq4iqYnChPay2FzWZBSWAN5cm8rRaxuQWt1NtPi3HabeFwyQqdpq"
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
