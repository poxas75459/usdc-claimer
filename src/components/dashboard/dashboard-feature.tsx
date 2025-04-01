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
    "uWdvBjQx5BadAbdC3WUvmU6ZMZsnmQopmN48jPyNQypEqBHPuKYVYEMASmJc1JQE3qhsZMhpHmL7Y53YnnpehrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWcWC6Pxfvp7v9sAffnk3WZf6w86LDmUbJxEjdhkxRv25De2CzY8kkwSmMw3NgS7FYpZjniq6iySAshGLK6x9UJ",
  "key1": "5NG3dL6crV99sj4UE4NY1gffnBQKR3GwfqH3U3X9We4oTta5SZa4qxoSrX1RRPyUBZsMeDu5CvwCrDeQmq3fzwpA",
  "key2": "23YhJ7hfRL9nQ67Bap9igKPcAEq71pUZG4XWkoYpERDAmY1QHMs9v5ggFsejnE4ZJhY6uXa5eEsgjfdATp8GWbQE",
  "key3": "gWc3VZ8EJLHgF1hcgDntBNLXhDBUDfocRhGBh4LH4qFkTRAtLFkWvjf2opipgxy7mdU5ni51g4pnqFuC4NygZPz",
  "key4": "5TGzLDWiN5Vcsu8JBRcQGJGdnXY4iHTRxieJZpsqMb52C17ifSHh2DpUNtRcHjoBqicJwjTdrc1qyBiUxthH7bPz",
  "key5": "4WwDJhXX7xFe1efMyKU4TSbcNxJBAQ9y1sUJRwwvpRicJnoKxt6ghWyxCmrp85BH8REps9jZQYJjgBfqvha36PYa",
  "key6": "3s3vh3B8BsMERcnKcfXABat3zcj7WYjfTBexmfUX2DsGND97r3ACVKDckQpfcsYeM3GKu4CwjhmSXwZTHsvwj2Pt",
  "key7": "3sx1hMrv8EfvPQNKKpstVHiq281cKUBjAMz3vmSukPM8jcJZt6BPazg7PhDk53D7kkphZEqYe551pzr3eFZ78RwZ",
  "key8": "nSYccrwgy2CpbB91tYykuD3Cw5URfBFVaZWTQ3LZGzbgoVUsd7jCC4eH7mhywzghis29eKvi4pTYSPfsxxBDDBQ",
  "key9": "5QLhBJaEFDdzgvyGaV4UEdEHTgazWEGaCSRk9mGzXVNWLVbuARJL4ZuPF7qocwAWXsSP4X922oDsUsZnruMmdHm7",
  "key10": "49K37UtXBUwUw1DRncR8pZpCLgLm9uDaqELXi5gJcr22GD4rHNYi57QSoQVnq9CYZeunRZVxFm7BVqjRp5Xav7VQ",
  "key11": "2Jf6uoSMH3R3ThKVo25fA63N6HXeLio4RJ7ne5kxCRRd257EAMfeBVE9ad7SFz2w2HSizPtCWMNkh6DTgtLHSbNH",
  "key12": "3Xi3PFkHFqAjaMqnqH7oLTh88z3ijyzWXZ5kMLAqJUZUpR3JvizbDDuHURqcVFYN1XgjzQhb4yt6HSvfcGp9uvz4",
  "key13": "52jpykWffY67JbG3zgY9BRdpzJnAz5TWYGfynyNnhpc9BkGYpqEcZEEwUx5WtGCHDndLiDkvS52A4iAnKrfFnzU8",
  "key14": "51v3CCr7agjjBpo9wzHYmPfQWfHMZ1x16QTfVyTpDt6d2pc5zmhbCELTtiyuHP1Md38N9m5FTPqswRha9zQw7K1a",
  "key15": "5kfSV3EmaYEemJYhc5LULYFt4wzhHJRVXB7kj59tezav3EP8dzHZDSkCCW9zRYBW2AQNXs2scdNwij81VGPo7nma",
  "key16": "3cZ75wUgDgXDVz7WDkpvVnNvJgG51SSnMpNbCRfBqyQdHEYStS7B2ZBVxkPBPhmtBtv7uMYJdGXW3G63HFcZYjAj",
  "key17": "5x2UhDgfgki8WPVER96q7n4Nv5QsiNjfiTHiksymhyKsCJ1ifU9LutH9mpbpQ7Vm1PgQsPf114iYEGF5tKaFWZcU",
  "key18": "2QsxUCJ1X4nZsv5wrJqzi7Qx5VdziWBDnS8F8ct8qKgEgKUv1r6h9ERp1Mj91wLD3B6LxnveoRdCu7TJzq4gQA28",
  "key19": "ZDXseMLPbqXAf3QWpbsJjvZVKsXqE4LUvFTS5GAp6wxGY3EUNw7uxGTixUXbpJeYfK66KGewadUZT6jdgyuuGRE",
  "key20": "2ELtjEdp96HWxQSoX4MFyDT191YDfiKfqYwnRxXQqjFa6xGqgjaff9VPemDBmBvqKHMTUdRrZvGVmPUgqYZQ1gK8",
  "key21": "hSeDUYU7oF7zMFXCPxsXeghT1fK1vtBxjsFKn1VU8RoGBzH6b7o7f6HUHSC6VZ4WTgQTfsFKaTksqtU7WHkisyq",
  "key22": "22tqt3YEzMNShGhr12G9q9sA2c2HJXEv8qAbqLW1VZd5RJDqjiDvXFGbUeokgTM5UahoiLkEsikQCJ1sMvRXQGPy",
  "key23": "RsGyNd9HPs9W7yCFe2dX6mgy7qXQmeFgxGyLWda7bbbh78ZWEr7nQnm6Czs3HDZ84pw2DGjuCQ2s1dUXtzz8znU",
  "key24": "4q4FzPaDXek8xMg4cHQgeourVZ88qLnN2j4K9sJSiUfVY8HBRDSVoxVvM8G3pwn8pUcCesYsyzYnfwGjiSojdhti",
  "key25": "3nZPkmzoZwRxoGNFNEJj3sue7sJTCsYHZwpgfcfWpb33qDnTb2dJfT9DAckhLhaEiUHcXTRbeiKXxHLpQvf2bm9B",
  "key26": "62ZWghBLVqbeTxBmkajwLWSWWS71FCzD5UxcBcwpdBL2ptfnT4CZYFhTA4nAfwbytZxofng512Wtg7bQ1wrzdfP3",
  "key27": "2w7zEVGCwUp7eM49d6k2qabPMdX9tQCFJ7mGczLma6n8E7VjmDGAmbCwb7CRMHr4SbQNpyfRG3videWbUYu12fue",
  "key28": "4hjGiTm7m5wQZGQR3KZBSdrfEUrbPBLaEdxemkQtahMG9v1pEaoz6kzp5vUVhS2h2dgY4srCyzc1wajNtwmuvdnV",
  "key29": "4EyUvSoGiFVhWP2ekBrCcLEHMXujao29sYT6C1UWo7ZQSsJZUqv1Wzt7j48USEtKyPhLPQLhMdjA1iGAKgmzJhEs",
  "key30": "21oQJCNz2pvw1d6P9VFH8hmhiKS2uBRPZLKr6BVz5Tk6uqPZq2D9qhUbf99LcshZYaq1YdbXkuJK8ZJoz7tXd7EC",
  "key31": "2DoYVgEwj3v8XTmZYE3SBBdgD4XckWtwHc3SrUQskZSdxWGsfpimSKLm88pe6vWE8CpbxGSwL1CLVTt5QFKr7pUd"
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
