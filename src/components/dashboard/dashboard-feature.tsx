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
    "3dANU3kQbRTYqfPWqAXYhQoHVqqzDfEXcWXZtAf7CP6XdB57mM9arveLQ8N9UMDuY5iNchMkW9qHa5esPZxNMCjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qLARU6SQ8jG1uTez4oPAFvHsvWHs5qZ1fN3AVXfsgCQoRuoHiVJih9BmYCVXQARxEJth1KEMUJmkVaqghQzYZC",
  "key1": "4g8G91ig3wpJ1iRquPhU8MdBUDPzWu8fk6SAgK347fKuKbX7AxaxYsg4Ct7p1885guDSgKywNwch1d3EVhkyyPUT",
  "key2": "3n9NZHEK7C5kLHQW4FWmSH35vQzY7d4PrdjooRBx9q2kc4YvhaCmyrZ5vP9xZKrD4TgKPuMi9QaSzYsEFJET8oCH",
  "key3": "5X5Sy5g3RXNQtveK8NV76KE28nuAYd4haCjpLRN33tuZumwGP1E9xB53VNBVjNVgBYugpow99Fz5EDGo9Wurwuzt",
  "key4": "1dPEwda5eJkLsgD7KcncX1p7uswDef8x9STrpSSLxgQP13Cg59YpoddYhDiFitgjsrVHpRRTpLDv1jD7cEsmi42",
  "key5": "5Qgt1EsrXkcdnpgH41Phmiu5R7eeqPF2W8cXLXsms1f8UVbrWHS6EePxTFPNxn6fQB6VngHcNVW4Doo3d257uJox",
  "key6": "4YW9LZiifyRZfao1fDQb95wKs4sopFvA4R6GN9wgiPXbcDusVSoGHp2smwfbWWH2HP2F1YDM2MzU4pK389FJKvWe",
  "key7": "5wWfnxksSeH9RLSjymbey5av6EZkxRjHgPALgur7GsBJgx411EypiGvkLz8zK6jLJG74cUknU8rvskiYSwfGhQ2C",
  "key8": "tRWaFXqEvkjq5dANeig9BUzk2r4oinLXxdgcJjwphycFrTPGTmwbcE2vWBTH896H1kiAWKKL3kunbDa6X57Qr48",
  "key9": "4Fa61aWffc8s5wGn2Qr9uiWbaqMbGTxUAgY78mtKQSjMrJXWSoebuCBE9Nshq8Fz5o3qYvV3RbX8w2V3cgqQMxZt",
  "key10": "4veojC6265oaugFpx5hs5tgPb12JwYUJ8LHN4Tsfhth1dj9JHHS7dFoDDF69B5FEW1jt3kahmeFw6f6Kb8iqCdua",
  "key11": "2xxG5CPFmC6MTbz4o2NvuRUrBSUMVJMJGVES19oa8GuumQ8d138MgYkrVG1xrjYgWpyysPHhEE2EmHEynnanJChe",
  "key12": "3w4fHC9mGqaKZ7vk2rNEQHJwpLfV4AzphiCuPQpiFK4ogrJcAcjcPPqPxbgVxBDNKxDAM85CfmTquqxAscJpxGfY",
  "key13": "4xjZYBpvSsvLX7iFQe8ZZDEcuKYeaR5QsL7qsfKA4ZqujhTtNJ2EsfXrxKUSuCop5Vq1rV7wnszPg8jE1B8Rnn7A",
  "key14": "4T2ctFYyBnMVnjdb3UFErFAcA7mcNDs9h2vwGcEVpUunjEVRhNjFhErRcc8EEeSbu2qRFVraRDZeR3zejcJBmx7q",
  "key15": "25k3pmgnbweY4Ju6mmfDS4bPazzTbmk5swG7rJeeYxLz1uXDTJAM4hKqrUutWr7RrYhURVvWRs95v54zKPohuZjZ",
  "key16": "2Jm2rcTEZAkMLd5iodUox4tNSSZuHUfUAVTKy2jPsuTpdFLDpYAK6sxb4EWACekyccfU8aFUBeAXq9LrhFjZKXrN",
  "key17": "55KsNNfRQcjw2jQ5ew14Z2L4Euoeao21qrqNeZx7GJMBgXgQjbYvrxouAFPEBSS2HFYEoyKb8GVMfiBJzvS8eURp",
  "key18": "3zNagwwZFpric4X5vJnXqchm1LGLMCPAztD1p4GGJD5UtQPZzesmz1wza5uiRBdwCZw7JTVswE8nLwptQXJo4BMo",
  "key19": "4GvdsuvWXymXZjx8HtqvHkwDYZQwD4tZXLZjGf4E5fNwZWHh8vzR85F5j5gWHqc9nBenCAvvA372FHwWFqCCR1m5",
  "key20": "vjUGAjFeiRoarAVkE94APeG1WvxoPTEevHCfagFFea6UXXCSmA98NFCjicKL8RWRTuog17962xgDAR42GkeSj6Y",
  "key21": "3mB3jfcZ37KmCsSeMwiptG3uw1R8o5NVvYjDCt3MReDThXMwzm43xrLiF7XXinU8YHSMAi6k9dwkeo95ZnX5R8KX",
  "key22": "26Mx3sM1jLrB9QZFbK5iFC2tZjirmSFwi2wuZ2br9A4ZUpMNXBtzv8VRb9fforVEqmSPKF8tZwVc3RJuMW9Pb4ip",
  "key23": "3bUXRhq9Y6dCT5UxbM49qtuJSHqSHAmx8wGzDcJYHSiAvhNsziGv5zJkDaVcdgd9EyeihwMq58STHC1VQSP99835",
  "key24": "2nEjS79zf9vZjdUqhvoj5KdVELtF24aemYhUBhbszqWdLRrRvzrhJAXkGAg9itJZPVe6u5mzpivyrFbRoCPyjErg",
  "key25": "3p5cc78hEKL8UbkhFzaEDhVXmcHTBhUGTjUEjPLDAJiu5y8UbDVDc5BsfkE4txY9emBsbuULjaXCJo7c5WLmCz7J"
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
