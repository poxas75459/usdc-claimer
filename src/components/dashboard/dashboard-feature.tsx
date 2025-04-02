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
    "3JUQTW7v5adEgLJMmczGh4K3vfaoYdzCL6JcCqfSRstrvrEAcYqVnnX2z2zoydCwYpFck8yapXEGMsmx2J2qpZDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vGwMCqj7xNYJtbBoM8mcjCgS7r5n2hUSmxCmaFdRoPxWbUwMSyvNpCeNeJw1iKap7gRWiJAqC51c7YVcuf2hXn",
  "key1": "53aG5GxQ6a1jM4g2HbdQ1GZ3EdZSms9o9WpGGuvzRMXKdKyP7nAq6GCxxXjxKVh6xGEPK63tRy8LcDS7nkdyDL7m",
  "key2": "65KZYmfRDsUzrz7E76HdtUg7ckbMFNL3Wek3j8UhXoJxU8eW4bbwsjdTqWfe3TBAtZKLkTvNjMA4QNckRqkACvSk",
  "key3": "4mHdvJTiRrGeitKUtgvS1ZEgTdhQuWnTNPwP4W19H4Hq2VjwCQqjmUEmUgz8xUnGMXS5BbZGUvTqZYGz7EtKe4RS",
  "key4": "5DKXXS3QcxqRrwcErS3q9xoD3CGcS1ULpC4pitGNSX1VEJMbLUCPNGe4MD9KPXcrUpSNoV1buWE5aRrpC1sw548L",
  "key5": "3k3YbrwKRgALs7WKPSuiwXwjE86U3NkMPsdbjf6PYhSEj9y6TH6Ru7AtbH4pjFe3iC5SnAv35rAigc9VEo6uVp5b",
  "key6": "kHcvhJTDDmwTb3My79ko2xsvkmXRa8iwhvAZCnhMJE48hbDshEZHSJGhFNUTW96xSTzw87E5V8MUECfexRRqUo4",
  "key7": "3itbE89spzEHA2mms9XwFVbQN6L2RgZLzEBYqfyqnzA9N1Xp1495kDToxtZY9CzJqujGnBnEk99JvCyY9kgiCraq",
  "key8": "xaHgHFtTKrKk5bHDm8jLZ7a3ZGQxz9FA9xQQ6H1NFde2TjcyxnZ9z2GGRXmheHgrpMD7NBeZwwGQsK2Zk6hs2qz",
  "key9": "LN5EN8jXzSVrTDcnskmBqC7Zhvj6VdFJ1sR4pVUSHnU2ZjbVEEDhJEgtUstCnE2r5fbHNBDCdtvhrV4Bh1sHVKt",
  "key10": "22U1Maf3vLULjWsvT537exMAJ8h6fUTMBpjB6DfToNaXuJKEruX5oEjNHp8JJsUrzbz6cCFYy1dUUMMQhAtGMoZi",
  "key11": "4QvRzw8TzKyG3QFRorDnZhmLyc956S5b4Q1Cuw89WdVxJ86cyRSLChUEN7WZ7ZQJX2LKMSQ7FU4YhGF8UfpwiiNA",
  "key12": "5oWFAUhLjuoM34fQQDH563oAD4daXbQP6JCXX5CNwSwqgHj5tckbhFSjR5uEAxrHJWQS8Gvjn4C8JvHWf7DGLaqp",
  "key13": "4TUWruXVDSL8vqL9v1e97cuvBENdmbCZwvFF9SZiEuUW86RctZZSEwfULM6wBC3hAQDzeUYgsDJyfM3A3d68nRaw",
  "key14": "3aNPB9bYX8eefdZWDAXNjUypamJux958gP85XYb1SEjpyL4YEaK97Zj3p4AdHzdWZh7dTZDSQg5ZDUSCQDKaxg5L",
  "key15": "7rwCe2pnH4mTuKcdwWCoNi46CGmhccZoN64gE4dektqsJvJM2djnFHqwXk1ftW6TD5NPegG2nkMU838Wcnv1hWo",
  "key16": "52tqv4tkB3N92uybVa6FEHADmgSuq6HSAQHMSDXjoCjATcVDeM9Z3TpSzdHZyAB58prLwaH98YD9KHT5WBMUkccZ",
  "key17": "4GsAx7HKXjuH8wm47Dk4LM7QfsSaAGXjb8HVb958pqPgA1cX8cnur5noNvyEqPrLBstud3FEppGSbWFJsvyzVjgQ",
  "key18": "2hFKohBhBEqYBccAPbaEe9nKhowrtuE94PzLHDKL1xW3uex2UyEEK6Kw1kfWPKA5xrcLcjna8utGbx7W6vE6hS8S",
  "key19": "2V9QMFMtZ8x7hXw6yAFwD4HPpgBpg3aFkbBHRxD455YCTzhUSG9yryRaKpnLdUe3mTxUhFxC8Qif2yQWbkDRki9p",
  "key20": "N5SXjeHZG4pcrwR8oQwn2gfSXuMFGYAiDSYSwPD7NdZmn78v13oHTfSQRLDVCJT78XJqXBYVXKsuv3nqizP79qP",
  "key21": "3cM38wrDG6aVjK5MRcJ2drfX3SCAKjPv1sqYNeHcvQwb3bQ1VqeAEjefkajEkoFds36NJT9vUCeXhqUiENnLTrsC",
  "key22": "L5Gts3ikLzm9vgxtTn4ysctbLGrXdbGfYUfhkfvMa4Adnfpjxzec7XNoa56iv15KUMLZGRVSkMSCiewwbqh6jjG",
  "key23": "5YW87wkU5f8RTahJjMeaGPPYWYxXuf7y3Yr8iwND1oFPyNzeGPYpCjbf5neezCaVfukgJU8u1QUmyXcyk31Ebpw8",
  "key24": "3kawF4aaaxh64jXAKYD8Nt3UBfyyXT5dgxKYGRpGuzV7nd5Fg3UBqYYmvurotV2s5ry5T5L5bwcAU6Ms6L1cncxs",
  "key25": "4xkxE56F2miqgrgWmGP6DS7goX4endFvM2a33pZekh3pM2fZVgwVSzEv41vMRT64VM7NTmyYSV2pxkfwFtmqvshV",
  "key26": "3BVYDnZnbKYWrZ3TFRaaNj13EqmtE3ZV1GcSCsEsoKTC6WpaRFDMq2sfx5Poy4cCwycmbL7dHEqoS3uDvvRkbzm4",
  "key27": "3kSoMipHF42czjw9AQnGt1AfCFDFfExukUL5L6qiVa3bCYbRQfN5uFGA2Y556MPJc3r64hyxywNtW9nt6LzQkfSD",
  "key28": "5qurR7mT69teXTvLevBxjKGa3LqTCUHN3YUMBjdctjGabBnbsgwGw14dNgPFpmFzdsvNjrQVcPm5DANPqtKC9zGg",
  "key29": "4HpkFkAbKNmaXNaoHy6AAP7sBCGMVntqWQX4dQSiEzZtmWrV4ambgPDdj9TxJJcQddTH4NSb9LyAFSRBFxE3sHWy",
  "key30": "3eXXsPuEmKXNegJq6JUGjtUZUEK3KJGDJV1qZU3aqDphVUtRPXHx84MRjgy9RNvcz9ARXgfoHWcuGDmXUR6rxMgH",
  "key31": "3Sx6SU1zTpviq5omqsxfxkpPXFd9T2AUrpF1RkcArdiDDrxTBohvMnt5gEox2Sbxygj2B6LAa6U7yBHAVYgW7d3x"
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
