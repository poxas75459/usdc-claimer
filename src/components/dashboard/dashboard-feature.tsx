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
    "5Xh9zttgeAUwAAqyvsjMDk7L98i2tbycW9Q29AQRi7rg3XvNHh6VXaFxTVPmZnBdS1Mji7NB7cJcZnrLpCkdvLAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ML3xCtaMK21te2JZLtgDuFmPLhSZuXeRSLuY4V8MryH7GrmJVzuj8TcLdC3Gcix4CVgB3mVKA1ZCTMWq2FN3f55",
  "key1": "3DLNx3wkH3dHaMV5JqzRfLuT8RvWruszX8jmARoUYR8FbQm5LMk6qkwbUFEXR6thYv2zVLiCkvgfRfC8bQMwi6rx",
  "key2": "2CCJ5jPywDTmeXULz1EwN1DmEiFiByZoitoRjN3gsgAwLar8UsHndRzxNL1cDr7rXmmh9r92WJL6sbUMVATFe3C4",
  "key3": "5mUa3zoEDy2qDNL3CpivLcjYUYww7ywdAfkqGUui5Be6U3XFDNW26t8nNFE81LexejE4jNQ72PcpdPK1xmsP6jLj",
  "key4": "iBtnTs7sNRR6VoABXYPHCsdR9rRmSXCLHEHgUo7UEgp9hvuZBAKGj1ZLUYfqmHw5Mic7wnKuusmbYJ2qxWDcZqa",
  "key5": "5ZqRx9BueTzyykng3LNSCuv2iJMsUuYdAvPmGAwswGxzFjsX6xwChMkCDdqscZuFXjpQMg1wXtfdCAQaEjcZmFWX",
  "key6": "59vcC5xU79MUngjuA1JKc3HZyUci9dwGesCmPSqMRG9Ey21Cw3hp1u3RaKoME3pM1i4RMGRZXfbWYyC4Gc5VaxpA",
  "key7": "EiGEMpF97KXCont2se675kPFmoVNGbr4sstq3suHf3ev7cwCu1DZzKDNJYhPp8L9uMBL6AvurwReMQTv7JNjG6y",
  "key8": "4LpRfhYocq8Yox8yQwfj3ZXs79ytyivRSUNSDYruMAeM17XKXg6PfQQQvSsmKmxeMZVtMRRgorpcf8qae3krpkjN",
  "key9": "2W2ieNxYCQra2jnqiQCMNuVPBSvGQaAuWxzANUFb3Jq8KEgr65uFWZikhiAyPPqmXfnhEexnZFb8GJ34kaANtZt3",
  "key10": "2zRziZKCxj46CULdCJDEddLdjpCSXW3Y6Pfjmphi93y4eYVZv4fqBHrKju85zgaqYHXiTWErRixFtEyfJ2XWaNLs",
  "key11": "4ytZJQhenbdEtn6qsxtk1fUzRb5Yu3ZeGRF1BUXiANopcKdqmg2dsXtQBymAWesgnRSGQGUeWupSG5tZzSEguXU8",
  "key12": "3adEWYzWwqkR5Kos9LaiykU7hVT5thLvnmoE9ntqhwtPkr7MKdM57sQpVr9sdkqm9XuMGSZe8KKrFZbLGy8AQLJG",
  "key13": "47pR6nHamFDnHDMV6Y7wTNeJViqSW5FHR9V3mpg2VFij2G8ucCVqvXyRZRRUbd1X11XL3hkoPgFXui69RVupQoR7",
  "key14": "Gr7gFykd2znasqJaDL4VmKbZqgftxcjvMb3exk7qukdTYz6EJxXE9HoLZjYyFoBEgKNrvqneQhcyCvoRVVN4Uoh",
  "key15": "3on9BzWXXdowEKHHrGD3BctRXoQDSRVRNgyZGRbVa1ubEpfxT3ekdSFfLLdctM7AUd6aSsohWSYMZBXQD8yq2C7Q",
  "key16": "3SDjctwi6cgntTLTaqnuzvr7nNSzojAb8dkjs9C1rBPAx1pMJQCuMsPb9T45D8Qjk5ouHFjFP2dXGv9LpfMFdAwA",
  "key17": "p31WBSEpt15dngwuFtuC87Tpfp9Vpsp9ZKsFE1xmifngd1ZQuaxGB7pAfPbuktWnJW1KX7oJZ5scD2Q2HSUe9ps",
  "key18": "4pV6V3qX82yMtwHh1VcepCfjXNEe6eHR8CYFBnr1KHGP2BGfN9wHmnpvVqF9KjiinZC7RAirsopTtedcnkJDopEo",
  "key19": "2xbRcfyb8iF1LUjeVLm29daDmmzoQgsHKtZJND5Xz9BPP5iBQb98ce3ypyAvJxgSyWbC8yYUB8QaDtYBDgHBHMiJ",
  "key20": "39cD2iegJhHfZRzseQRF2KKfXJkiFrEuhqKNx127YhMgo5cW51S7ZM8Ydxq7qymzip5TJdJQ8YjVubrdqbEMXSDD",
  "key21": "5UdEo59gkbJMCszMYaxyEbGpj6cas7oYWdHLNtdii2u7FUMsDAvyiYTViNzqU6TxjJnErH1x573CoKboKY24BMBy",
  "key22": "3MNsNkxwgBoVFnKxLv1nDWBvzucmFxjwXMqTWFuhukrncZgfVagkdoszYVUTH74tThdn6f9Um1zj7dtQkbxbBz6v",
  "key23": "5yBk4zAwEKGyuW2w3kizF2zRkY6mpurFhFTWhdt6jcktAYVy2fSoXfEt53wMGtvYTHpEN9bSVspiTGj6yy9sxoFJ",
  "key24": "5WhnapAVC61yCC8SxNux955A59X4R4zpGoELVoMUUMMRjY6g18Qa86kX4P5ykLj8sR82VF4Q6tggXSD1gy9CeLa4",
  "key25": "3h3JhYzRxzXi4pTRZ4XLY6kGZ3HDQGZpJnsfhdmz7defjm5DUQgV2DUFgwc1BeKVSLXbS4StpRVaqzzN2abfQMci",
  "key26": "rZCPy2A6ZjBVCsq93yw6gMiDFewFXydew5SuSHLntgsHRfDwrfrYxR9StGA2EpMGRyvJHoiDamfqFkaNuaGPQoi",
  "key27": "2nphvJKCNUihp1eJDvBDbSq5Un1hbCFK6P57coij4F99mCAR3nQuHm9k56XKe8nj2FZ6w79ovqq749Wwy9MotLLi",
  "key28": "3WquSpsjMkxBVQeWPPpUJAGcNrJpqJqz9K6fXRfWgpBpLrkGHVXyM4oJY73Lk4NPgP9vQPYy9JzkWC1YBXEqZEBB",
  "key29": "3MPZ364TzEvZ8RteyaaRqkAnkGMvBTpaE9ubdhXrdyVVZLCgfXVgHb4DeZNiK3zez8YzeETZvh8bbgHpAx3VtxG"
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
