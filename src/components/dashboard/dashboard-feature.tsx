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
    "hyp5zVcmnKdWJf7PHf9XpTAKR5YX62uDEQPdK25PxpDAgxJWxCn2SitYqZBtpG1maK56dMYvEqX9JNR3Rh1Jm83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a6B4ZUCaaqzk2EHJ6BsKa5N5CouYjoSwUbVqkq6TEfistrYU1RH52P6QEf4viXpWgmyxJibga7aW71JgpXkybpL",
  "key1": "53NavQF5CJssxXzkisMj8CdTvWiVq7ZAB1ZaQqPKYfAAhJTscbvEgUjfjCQ7V3pZfasvd8d91EvFNfSXxhmhgWUy",
  "key2": "4nGzNyyLy3r1ovu9YhwZ8NkW2sFftQqxtc4ZbnMoErBXAr5jv2kMWcFwZurXBapbHW9c46VCRRgGNhWGRjKR64cR",
  "key3": "551y4M8owgpGyvd2Y3zhv7SS3weqEMpym1t9Y55AfUACn2MMAiNjpQzzPdxXtDJdCtbw9jmysHSBp3qFbADhece",
  "key4": "4YtxcXhW8m1ADK6iuPo6crs3JkEngqqHJVANjtNKgy4oQXGoEU3J8V8dXYtQtsvVjSbTW2NWpjcvhKY93iV8a8VY",
  "key5": "2ZJVJQzaGR29Y5oswRTKvxqaJizjmMMpVqf6emU6Hqt4UpZoNYZVQTKgGJAMh6m8dTWnn4qtddq2STtbjxjcTnF1",
  "key6": "28Dr81ibTA6GBeFAAVKLuQyvpFDXDw1CvqNohNxz9NNtT81bi38TiABGQku7fBBf2AXSwHdgzM18j2eWCJq4dZWN",
  "key7": "3TT81RcC9bk4nUehDBLahZGuysPGWhkwuCujzduZZuSxPvbCzLRT37MqQPuJNV3GA7iqEApmYnp9Dete7hC5yU3J",
  "key8": "51CEwegP8wx1rwBPrbkKKFk1vozCJhBtpVApLxDJjRfEiq47mqf81dTckzWDGwAFj9wPafHpVfh7uhqTWbR22bAp",
  "key9": "2zdJvNAF6zE2TAW7Lxz8FPaNaHBp4xGVqXVNpKojm6xoBrqAUPxMaULPiVX5fnyZ4fWqzJQqnpFDLsjprbV34NCv",
  "key10": "4JLy9SKMDNdDzQNLaRCsMqG3mxfRtTv5DdRNQJ5Bo8f33yHA8TsH1qeVT4t1kvoZDeXRYvvs1wH8tVSNjae3qBHX",
  "key11": "2fdbEntNSbSD1w3G2TdzTtLLXtGey9nrHPmPiWYbQAC8Wpnbiz4UoNsNhLynMmco8oCB5LoucZ2qmi7RWmKFGnQY",
  "key12": "3eRJdPcRcyMS8gWgpgPnuJ1sLTKkXEeN42EDeRptxqn4QBGjKgZ33qFMDCKBe7byxaimaVbhrBHxWqmR46RdZ1wU",
  "key13": "4cPYjo3cPma4isp6xxTxqLXxLNG3vcxLoCCHHWnrNfZsAG1ZKSB6YwntCAfoQu37muUJwVhTg1rn3za2nMrAyvJb",
  "key14": "4xxdnB8ia9LEURVHxYHynsfw8eWxEvGQFjGM9W6ZWhWir5ddX36oxNw8LcdZXKUpwDZQuteyrMBZRwr37BdvP4mE",
  "key15": "4eFxKtPDLvomumtMdfyXvvF8MDoPfEURksH2rpKEdUHJ3WQZEQLVJZmNfWEY7ArH2pz2qfXnj1BLWXyDsgRTW5bJ",
  "key16": "3A8dogzUAiPqW45CUZcEiyhLtS4T2wJBqaCXGixZCKQp376AaoYpZtSKEK3vR7AHQsjWduY6cPNBufJVBHVP53d6",
  "key17": "29ZjKRhCyb9TDks5oSpc5fr4KjXEq8qce5skEfAbajVyVg1Lswmv2WpFPe8fq1dR6zPYkAANjA3vovpg7N4N8t4j",
  "key18": "5V8oSyYhc8NZ2pxqYFay5FTy7cVXnhjei877UoXJZKXQvd3h42vftXwG8TbqkdAfUT6sTypJ7KGJzjtyRne4LCcS",
  "key19": "5wAfBrBWcTupz8EnM7LzjQH3sznZFZ5BNdV8CZBNFHXMFiS4t83rNz6SYTkAy7TcVPHpb3URdkXAoQkFAexDzKkm",
  "key20": "5BhCjZwkQy6VPowj8UzaS3AfLgy8DyWXLjSa2ZXz4EgkNC5aAvBb24g6dp8Unjp6G4DQbmHxvEz7pdx8on4Kw43c",
  "key21": "2gZtpcQ76BdKBa4RmgNYBhHqzPhmSbRnTfonAy5RHmGFEQsnaozzDouiBTNVKn11QhdTWorEMhswbSnuUF9YtZ99",
  "key22": "3m7CKwP3A4VAM5KpQwjygidGR9PPt1w9joK1hdVFNcUKoLEUiHSuTNVGJPeTJYe6nV7fz9CzJ5bfN13thhN6dGfr",
  "key23": "3pCN33tUKS98TueGWzdqvnVtdiT5WJFox2ZU83Dz1LeruoWbCfAxzZgiddi5EW8r4TsH2ELHBfPTDM6D7DLGZvzr",
  "key24": "4VAgFcq3LSCaUucnSw5LhdtByiR8YLogFMsnRtJvk5M8Fa3JcXJq8bpQQ1NGRLkxWhcpEjWQQCMLAeLg8YaGFRjD",
  "key25": "eDfvBd2Bg878nfcRgCjfuEPysBJQF9meXehEwba8eg12rDoxmqnzoXuo5hm6t4CSN7kfKLzpyoDHPwn2s3zUNuM",
  "key26": "5ggBy4wzD4gLXcL15eHwLM3b3s1XRsmGny7YRQvrcBkNWCWGwJdsaeb5tFq1GTy8djm7fAqRjWRb97QQEBsze36k",
  "key27": "2da6Fussjb4bDK2nuXTx1Q9VMTqTTUN3LQmYAVUkFG1BqMbXYQw7ioeyoNfHK59F2xsgs5vBzP3CdC7AvKQf5NKQ",
  "key28": "EbTYq95mpY9nzpPwXdfjjqE4sm7zwd71BdAe69sTWqQY4R2KavMgmoHoQxBtQ5oL5kuzpriue9GriPo3CeFN9iy"
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
