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
    "3ePgKmPzd9xZFbDvBLR7aVAksVFkxaUw96XURVZoH9LGNhVEYQ1hGR8u8rNu1WGxMfwwurq8LCUvrsmewJL29rqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59zs74BUcYw8EeQsLWHxhfWCVXRG224iZivjQCqgBfeGczxhHL9V5JWxRGMqy9RGsKgu7F14pnDbw3F5uwy6gPNo",
  "key1": "5Rw1HpB4wT5tT9rdzGx1jMnPpYHhcy3w13Ln2DQnuGpPRHk4X4RbuxS1UHQToweemqnsQvV8RL3pxz7ZcR29RZh7",
  "key2": "4s54ukVfGtvXv1fQTnHqRA4AoSMbvk1HBgmRo5DoK84GYa5dk4Vy6WrFiLWEzo59ex2n17tHakWeBiEi1bXNmrTh",
  "key3": "2j2Z1pA2ZeJRgXQ2SUx2YDcAzah4FBK8hDKz9J3m17XmL3KZy4JCxbMXdLaJfeo4un76gPBLAwQH8bxyFscWQaG5",
  "key4": "2oUMtnZLpYR9WeRLBXypZCgmp5hSrQ6mUKgfJFaSfZTSPgdHFauJ8BzJRx5aRdzHcNm9CYkmUPTEK1NVahPCuRTq",
  "key5": "2zQUsgV6Lxq1La4YZjJT3WzjDe2rASDCSHsLTiKLZiP3LMZQHMMZgiaB98qEnitj4miVJ8oXgABtwgxgUkuge7Kc",
  "key6": "TboeyaCn4FuLFdgiqUJfSyVFotUEk4VmQrwz5Dtnv7hQvL59KyjnG9GYEnKDfhLvPJcCZyNQFPYtYWhjt5cfFHk",
  "key7": "Y5dAf8u4YwKEaERJqPmHE7pyAdrHr7Dj2ymvRxuTkFUR2DZ9eiKLw7kU3hW2XHM8nGnkxoMT5JxrSLmywpnUBNq",
  "key8": "2hxxKqrEEzmXxBDDhq59NCZcHe55KmA2e65aAstBorhUgUxupgBiCteRALU3eNRj7GRUBuJR4Zum73fH9izXYCjd",
  "key9": "ztmLddeDs8oXAtbTaEynGE36LqqwxXo5am8vUyNVCDNEZifmu4EJNrqkNkqpCb9wQYYnxLFfhzDELzdYTvDK6nT",
  "key10": "bSmqa9SDEnH7KfMACb8PCJGFY2VsftNGddLZ9wx1ceBGwsPNxyBk5h46Us2mHujP29qkAKmpJYnDPWpyTeXseK6",
  "key11": "5VjwZGs8qhHFDTV5qKp93fsi99Xf9a9P5vZGkR1zb6AYKU2MtQtPjCMAm3NitCE6sc4hXSk8UY7bgPEnVQ74QLz8",
  "key12": "bKSFo22rB8ZNUqyU3jWTM4bZxJjbmVpx7DFQPjnyiKKv128EpHSQTtkCHZYNSG1ak9JXQYFMnYxFDUsLkiHH84n",
  "key13": "5HyTnLNV7AjBoKpjpETpgdxRMbJ2WbPqq2FuAcmzTotT4EyHhreGzx4SeL2KXdyVQV8boxjf8ohqUoRf7SzuV5uf",
  "key14": "5MHqy8PNEPvrsjgZW6D86mw9zb852NPp2ewcWShQRova2fna8ofw62fDeuRGYKUZdTLf8wEyUH7zZZAkwPDcFReT",
  "key15": "52M9T3NQ5u6JFVsXbo3YE1qkDV5tU7Q31xJTDXhyzP8Hoejvg8SfJoaRhccLfsk3UWGii1rPchMdPA2iqRBAtTct",
  "key16": "2E4KYAj81KvUmgtxeBsiexDC6tVqvtNXyiAfe7ZnsukorSPs9z1P3tdCED4ttsFexJaxHr1TJZXkCKCbQPFDUdJd",
  "key17": "5v1HAn7La6ZTTykQjYBUDtSeMzaUC11ZtB8QaaYgAbmXkx2o3C2e6NRSAarwKJWW9g6N1zNqTkGuBJrhGUK4cfNF",
  "key18": "63gqhRJmbJGhSGuk7WBqwXWocrYERdhxSbG3TxMviENzN27tWsiVC53uv92CDofaZaD6h3gsd4CTwhtwBh1ZuKQ",
  "key19": "271EqabhT6i7nC23TGV2sRE8sJvugBC8DadHw2UTz5eNLE28QQzpxQipTAsw34T2fgvuiAiTEMfpUgV789VkyeTQ",
  "key20": "4thr7eyMsdYauipa3Dtm1bUje6kyMozLYJre9kgHSSR3q2K9RYZEq1dFUdyraDcr6V2os3ZS4rvGhMEFzbdNbxYw",
  "key21": "3HCYiWSR5L4uBtHrsSkrDWhU2Kvm7ovPp4KWCvAmQ87cS3wYz9pSQPc8zr4sA5nwkiNH2UMS91b2uyi7tM9HDsDQ",
  "key22": "5fw7fMg97kxvqtBECWBaC22qktGgydPyLn7Fyxi64qAYo39R6rBTVzaySmWhPPb1V3F3HJLn84Ui7aENoqhsyAzs",
  "key23": "2kCq5d3e9YcqsoRdW5PJG6J9LHXbknxUWoBLfDhzsD8K9KMNq6PBk4GgjxXPmgJ5DSrRR9TVqB7aGbC4iPbCFVJe",
  "key24": "5PKnkdHzGArwkiCN4gyJmxS9WdqUzLU6sFTqupVxKRjP24K7kxJNxCFjCJKeEnRyGRdnAdTnHLcYzebsLgyzzRmt",
  "key25": "eEao9N1y5bFC5mzBFDux16miP4xy6dg78um3Z3FqcEnvS3EFewjYyB5yqLYv3q1EWbu1kzuaNSK33JxKCCNctyr",
  "key26": "HNVThhcYmMtdXsPEyXba9A3H7gSJcD1qMRdxiHpSHP5ojJUh9KDSvuPJmWrdopYSGHsgVzAsbVc9ntHbnJoQJ8r",
  "key27": "4xKrJ2vRezPhKBp8XuPpjEfSgRMpBoLfyRiSpmXFERv35WY37wkymHCDnaqG6GhYUBbuFtoRtMUr1hA9hSGb8dR4",
  "key28": "564FRTsbrqBMAs89Zxzx3BW6vyboMt1FyN7mo49RFWVDrP4V6m1coQg3Gw7JjTVEnLTKSizbpg7EJVv8N3ThQNr4"
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
