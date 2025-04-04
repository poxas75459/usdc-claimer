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
    "2sngRcS8SXv9Bz4sGGcGch3nXfKP8wrqcVBBXPaAtaS5B5SG7maeK9tQF3sduq1Lu8B5Ptck9x11CceaxH8LvybY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMQEoUf7Ak4A1iHmfdiXetxessB1oGEiMiWKiEF271iwEBShzBauwLkFm1UVYCh3sof9p3QERmE27djPAK4qzPd",
  "key1": "wRPJQU5i1EzcorMY4W1tsieCyhPkhhCmRYfNn9qtBmjczT31ZBfgDRsWsPWUiTa5FqiH4m4Bpy4ZFQM9DCbdxHU",
  "key2": "3cfx5MFVCV2P9Qvi7bVk2LAS11BEp1EgjP9qpgENw4XBDQyGTKWBM4ZZZeKzgsA2vVQjoohKPk8b8aapr5mcR2TF",
  "key3": "5xA6Z9D3KKNRHmu4q453bxXRaEgxpf7xQkbc1x9BuwR8fa7bgPFJ9ogYYvU3dantd4cY9JjTtvwckzXNirfwubmN",
  "key4": "2DMzDQWCDpZU35KVwUXSt8aCsvzPFsGpvFLK1UteakBNwakBxSbpofq6pF4K6PbRqP43WM6g3BKCu6WBJcbmjmtd",
  "key5": "4V928fTwV3qR5zJGK1ZXPY9WeTN3RDkagqBSh2iaCe92WJ9cPoLEddaeSZrynoSSdxx1vvmFmtBt1QehMZUgbFUW",
  "key6": "4Ufu9uB5pTueeBy533GzQTGvs3dALTeyckhhLqWvPDUVs8qeje1XQxNDgonkP8scBAKP21241bwSoERaGmtfdNNy",
  "key7": "5Up9UVWfppcpikWWNBjRPKMPXu6v6hCE2ub77rtj1tbERMxCHe6FhNDTLGco1Zfapmj26JqCk7MFofPqTMHG9Qpz",
  "key8": "1WWj2LqfBvBLiXENQ32EdyY9VmvAzfYPo3dhVddjtNa8oYjx7rwUxkqEjZTMoo66v9jx2KuwV8JwwDWnV2Whmzx",
  "key9": "4nKBjcymLwNB1f1XzaBAQXAmFQne2nJYFEUjXS6B27JjN1jQdiuebYakiQxAe7VBaeF44pmeyLda7rMqoB5szY63",
  "key10": "o7Zo6fCy9yZuRhxkySV8Sp4QQtyyhMai2naCEUXugmdnGeGWpQPTxt7j4yo8JdZGK4FGYVGm6YM2FYKVDDxfpwX",
  "key11": "4ScAeRw5CDQRJjKPgGC1oT1C7GoAc5bfGC9XFMq4NJLhvVCsNAVioAyg3K8NDYwai3pzVCmV3ienND5CR72Wojmt",
  "key12": "2z81r7c4Z4nqBhDjffmdGVBH9JMkGo7B19AcbAhUWLJfEcYgdbyK6t1oQyycQULtVAMQbs73CUA8oT858JdUzZEh",
  "key13": "2esLoJ5yLMNyZwuBa2xXzyb5APdRyX2EGUbnKbuQa8VHk2kRCMK5NA4YqAtUseLnjdEAVixCwPwnLhUpZyBXLtr8",
  "key14": "3Dg9EUoEd4rjFBETMqzoTn1fyFPJGq1jJU54ZTBbG9vTEiCqQLc6K5rpGL9iatxCEe45cARMk5cFpUcnFajQY3xx",
  "key15": "voPaS2AcLWNpwq5oFGoWpgz1cWfJjHvgyXuVJ9rBMCwBR62L62JUgJXKuHCdYosRJHV2pjf4LvMCp5YzK73di4t",
  "key16": "5S7X6NXTxUPM7CWKn7ik3eDXPwEZU49fDkXB6TvbMYkjg2XpsCtv4Xde26LKJRVZLTL2GLcuX8EcaCq2gmfWYzgu",
  "key17": "42oTRh3EnNRJG8aCfnvBdpcAsmiPZM3nqhQCQGQjmeQurQLWW1fwLLxuNqJosuZBP8uwyNjCm694KckeGa3sBp4A",
  "key18": "5xnBgYPxcJbz2FbiducECxk5JbGyn3PwMKMfAUyDAHPhh2oR5igeMuT961iDoHMAcChRqDJW3JdpCB2ifowhGuQX",
  "key19": "4zMS1d1a4eBqG2s2NYTMvn4qtw6KF4NAVhZopavXwZvzG4wRVXgxfDxSVZNk15aiG7DpQmChefEbmYq54Y1ZKG94",
  "key20": "5V9MKFVxtJCWTeSKX2etRdzpjR7boJ6er3qFBA36SzK5aZe8T9hozt4Hebwjj1ByN6FLJ8V5QEQrHwHp1uoq98nd",
  "key21": "49nYdzb4g9gcFdCZ24HQLVv1xW4Z5NWSTuVLv6q9dynXcnvW7e7gtxMMh6csJm2tvo2akeMEsTAWZNxTfYCcjnGC",
  "key22": "3N7LY39SVkYg9WRUHnDmSTZWMGgzTCNdmYJotKfoP87Rh8rdho1t6QigaMQiwpLHGADgvKcz5UST7HdGfkdy2hiS",
  "key23": "5seykYHzGfHvEvLmCiGSa37degY97DWXQ6Qv6EgnfFcmihmJpvHqh99jrxPjjThULk1SBVrMiFS8xrBcg9Bdf4S9",
  "key24": "HKQ3hxUdbi38Cje7ScbbcfvrP1yPRGwMhh4qjqBX6gjgtWTqrwRNKkh7BukLvi6uFtrHEYYKznbnujGQ8C2dKiJ",
  "key25": "5BvDV42SHaPmM6pydFqNdqSKq3Fp5Sft9XPChb7Ud7eGazgqdQLEC39tLD3abvtwhJshGcPFB9KEeuQViomVkHsF",
  "key26": "3UsfAZb2pZX5FvG7fLhLbYeYJNgvJ75oXouLQYgPgyvGPpb2WRgVo19nborGr7rR6CQnMQs84GPjvVWZG6JoxJas",
  "key27": "5wjXKbLjkGvMfAqst7WRtzVx16M3ya1j85uVP1hV8ycJKX7DR9sB2kCNwz3oS9ErurN7Z2WMLXrBenN22PHUFuX5",
  "key28": "Xrq6XHCqXaWNCXuvptfawgYcsgsix2rqBxiXBU2GutMXs35JLyjz5zFSHqaA2wG1BoqbEKstGPsR5K4KDq4yfz1",
  "key29": "57hHdts8BknDETftFH4NqRr8GMjWxFStvZjsidv1QEPihHGoN6PaMzqV3GKDzXU2AuHuM3ce6Rh4xY9GXKZpXUb1",
  "key30": "5SowC5yRaUF1A22snEotKBY8shytU1WiZhsNa36NXMNZAScKAZ9LhaZ3bstuDXZnYh6SQi8xPokLB5DSSrkcKw2z"
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
