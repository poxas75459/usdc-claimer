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
    "3EuK9SPgC35n31VQXLy4CHtmz9bCqohxoBCoDKYcQtxBWVrJYJNZkouDeGAd36PiFoMhwHB6FKcVYYv1BDkrkwUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Er3MxjMpGXtWD2XpZP8WTSWCwEUSYQjkr1JGVfxs1E5qNNzmjVYpDW7cYwHskwhDyhFAV2zkih6oSznzM5ZzYd9",
  "key1": "4pp8Y3MwMG7ST8GN7YPyCS11byGv8oDkztmiD2skRXSb31aeoXyWnx66C1a7qYT5f6yH93eA3BTDH4vVoedQgF9j",
  "key2": "5VZ88oUKsaaFi8ktFD1Nyd6rABq4WKDEm28A4zy3ie5ycPmtx7aGtfis36XqzQNjQ6xKm2J58NGX8AWZUKQ1Gd6y",
  "key3": "RhB24vKKUzdKde69qKaEHbeApwxhq4zcXsTn6uVbZTnxCdSMPFBzguTn12hBtjJpkjZzGage6VpHUDBthGub5BQ",
  "key4": "4ABvs83N86BumQBzFzsM7cDFUmL2bcY6LGz2zUyHwBB9iFdDp6zZmewLmMMJxkXRtB55MSvP6R5UzYHQV1Ry1S7J",
  "key5": "3woCHa1dVQLyd2Th8x8KZeCdujjL9Jc6PcpZ9t6VBCdKYueCe8pEnAKuVwjdocFZNFMsyR6N6cy4mDyZVboiJ835",
  "key6": "2akHAjJKZvVZu5FsrkLyszjzEKqZXeiMU3A7apvko6ddYV9UU6bZfYhiDkH2gfT9TKQx5YPDBEYqvXZrWCEqne7Y",
  "key7": "4UfpjW32mEBWxxByDf8NZB53C6m17z7vqS1SRY4LbGxr26QcBW59ozHmm3T16HWx9mUtNLweNGwdWANzKvh8zMQg",
  "key8": "5krQKjoYVNQKNH9xpDSLcg9FaKS7G7d1WjZszCE1cn9cGXj5gmoVtmimJfjAvKKv2uoqx9cE1tu46hKv3F9J6Qv2",
  "key9": "3SEc79nYkZoWcWj4AW49tFgVsSEYWzGGh74tZv9jx95qKe7b8VGZHGSK5gPdh6qGo7bCyRSvt8rWxifppZp5xyqo",
  "key10": "vaN2Wiki6nBn6Bvi1XzzhR1EemvPAHBtwHXksBWvZFZbyfZ37DDxkDbN25XFjsh1Rh8nFLLLjCv3cE5SpEVtLhA",
  "key11": "3LZKbw7UK7wTp9asbf942drUGfxMFrqHaEVnZrpyWhh7oGgM6TVvbTH3uauNvsDA21jLKzhK2yXvAbzUWt8qV4Xf",
  "key12": "3qpEDnF7BrUgxMDJP7k7u6gzVYiYqbp2G6VCGNYMvtDrVxKqhqqXwSWe8CMPJ8KKgMQ83EZ9YMM9mc5gbpcRkjTp",
  "key13": "672r47cxeHFPMPcWS7Tv98F51peeiZEm63Vqn8DtRXHdsYKBjuSB55xDRJ4AzfVFF9nQ129T41sVU1TPA9EcNDwt",
  "key14": "jPENeg2uPtS7SPPDFP8P6xa6qdNiBuZDsc51EAhHU3CfgTfaruMVpnbMBXZQhHRNNk9kjVyKGhLsCZKg8UPXbvZ",
  "key15": "32kf3LbLwUaMTZVCUKmw9KG7Q99hJHnXQUZUNrScJCw9UuCeT5SSiNLNVdCCYnMSLnvXNLJecyPCBCPb1AhxrzJG",
  "key16": "5e1bjr87s9BCe3fCm3wnA13KHmBeBqqX4TnG1s7FUifjx4C6XDGBWzpgbaQyQz1QdBvbi43aqqAaTksdxnYgQkP6",
  "key17": "5Jo3vZWVpW4RDbA4RcvNg3kT32aRiwJPfmsohtrx8XxLMzVmP3YVe39Wa3rNBh7qn5eqfSZfhmeX84mQNqfMYDA6",
  "key18": "3bH7X42syZj3Cre5GZh3RWPxpSGDw1RMqZFmFaJg1kC1am9ytx59sT2VcXubhqL44h7mJKtE7tj1L4Djv3nPVCeF",
  "key19": "2Ky2J5KnPbV3RHs1U5dExUQVSLyKqU38sv4FbALgRd98WMqmanT1q2xgf8QtCRVNNj2bGpSPasAb4wUWYkVJcNnx",
  "key20": "2qHeNdosjvT6VeuopaGsqBDsveMFdHznDBJCaQFKhCBNNKM6UgrMswX5ZZmRTt2mH8UcjxqQXnHyz5EcpmCrgqC8",
  "key21": "SPBF52YAet3UuXsdqEfpGpSxwKUXwqPyGiDSUBA13GCiSSLRrxhKWeGtEK6xkgaT3zMksNty2EkW9iabUyx9Sj1",
  "key22": "eGgwUE8bU27YmBrnvKBDt3cHsVaAHfvv2rSWDaSncCjjBbgtJm1awzs1uQ39PgL3QhcGN2vPJtWr8dSwwfcUkXx",
  "key23": "3paBWL4HHMhSaB38eYsScw7hJb89DT7eseuwbt8F3Za4jcCXepRPvVVooAUgs3yLDwjQMDDEH1dhNnjrjjnEAxYf",
  "key24": "4EuPbiTSP2fenuPHfXyALVkW2KeWr7wAA1jsZyWcupJ6ddQALfg6Yd7816vBHswx5vbLvyLxyCg96eMiBehUUtR1",
  "key25": "4hLkgDFF2zzSk3HTFwh8n1Gmhv9N4Ck269nhrL7AX1tYd7FuRkEGiA4ycp32UBudaqbLt4BHgMZ55fnL2FhfjfFk",
  "key26": "4Xc3op6JensXCphMkFZMdYeNw9hWtoUHe6KAE8zuoX47RJEHgriEVAZg4MCrhBEuhLPsVwAcsdw8xWAiwan8rcMg",
  "key27": "4oMd8Suz4NiVqgwB5UeYfaAdJyiiaRRvtov5GTv4CJNxB6rmgEBBf8Y7THHQbwHyVbUT3AUVvg3oD2q6GPnQ1nEo",
  "key28": "55L3qGttTSX9CSzecdcQi7cS5SEkz6drp9vcvGgSjWrBHAPEZ68yTTd1pnMfMe4pcbXEW1QPua1mmpsJkfrW9eBU",
  "key29": "UAhBtFzjkAQgxGr3Winm2kbDTnCa553m5ra1idRDrfQVrPdUaB6hTxjUfHwAsuoFuFE53muCARVeWPm3VJ9ACdC",
  "key30": "5mts7rayz81XNvDKPgnBz17jygzEchwp3nYV1knfo6f9zUMDqnNmkJaQD8WEW8HcRdAkxKsS8epugcQQYiRLa3Bd",
  "key31": "3nU4ewrFK8VXWS8avd8GMSEYpbeT7b5pWZapQdNTXyeuNsXbCYUeELdphYK9gCLfrsd5WjpPMHYEwdPPUUxhfP4j",
  "key32": "4mjNpYTUhN6Cvvf32grRQUTXcP1E4uAHY8E4AsDmDFa8STSR5wV3XFiwPgLTM8CpozMWK9ZtEV7zyixkbvwje1LH"
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
