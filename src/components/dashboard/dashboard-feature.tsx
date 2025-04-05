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
    "Hh5Bo1odErGdcMLFyyKZ16WhAoRHahtzfUomUwrezH9PK5T64kGVva4vwWYJT9ZC2puRbM5EtSpEySp7ssMJd9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z78fCQDaobxFTxeFy4bqbkFKYaXE6pyQFGvaVoozHVPBNrJLauVXKQnv41rKKz6mHe3rV66tcBVJ7NjDMK2n88S",
  "key1": "46vgD84sYGdXxrPPh3t46dmX7QkEYTw8CmcU2Dh4wP6zsetTsNHngARmU27AuVZyFwWu66NrYaNGzyv9j5TKAtgR",
  "key2": "4vefamUrMzvpTt3Z6mUbXyRJqWi6BHJvmkr64ysgUZCMBWK1LrMc5WpXV36Jz4b3FHQBBUUJhgchtD3CLmjiBAyd",
  "key3": "277iBFeQxMVRvnCzt9U9frq8fV7kAjeFqszXtiDehhUBSTMzHWQg6QwjxF4GkjgcRc6NQRh51cKYwDjNcMtEqLnj",
  "key4": "2KJJoqFTwiBaxWEhzvuJGF3y5Rqtrk8hrDzwydqjDrGhtCJ3tRCiizd39UKKPPnaCNR6i7GCLBDLETrFVKHoKVfy",
  "key5": "3a1GJkh6m5taHy6TxwZmKFWgYJ1oG2sVJ6SSRiqVgLrQXN2L4g7YmUbtzJmXpya2xeCUtvTw66yGvCmUWTeBSry",
  "key6": "5fpAfJsspMFws9UT5JqnzfjDJr3yvFhcNjWW6iAin3r8DxHScr3tWMFnLsR8RzX2eSn4ocR1omC5x7AjwzEtgh9T",
  "key7": "3nqEsygJ8jLRJViDXdPVTng88FtmW6eFUx4eKUHnVHMa37enzmX418jepeHtrmgL8pxGqFYQYVhGWN16XeQSUhsN",
  "key8": "3vPatb2vvv541BdTFZMRwJNXavxNUzbtQBWfP7NCbdSud15f6WNyPYWzHDDhtYhz1518tSBxAMiG9c81JPXcJit5",
  "key9": "3UbJNuEMgoD1cc4CyDcoKr5csCviXR4QafrUTqrQq41TYuex4J9DpyrgMAv6u54jq7X8qpDTtxbaqNAVU8VtqA7x",
  "key10": "6SzjUZTJQXu8X6Ua9iz9xcBNbHumwy1DeiynZxH9pLV9TbDptbTBnKXJdXvp5WJteURoTBgSpBFjNeNBUdPamCh",
  "key11": "UmpmcrpXT3Lv68rTobjsANyXzVbS51B5hhUZKd3krVzw3S86uu7yJSRsYYJCCXWmA6Gm9tDYG9evBc7Nvxwkucd",
  "key12": "uhJ3QkQpZwaF9T8nxw4ED8MhuyZkQZrPSEanWQ8F7HpVQWi1Ege87CBCqvcw2vVhC8c3aNKWoAN3jNRkacYg7vn",
  "key13": "5XKEMaMg12nbuR7oeYwYdPx7AY4QHMbUgoksnhe7Ch8aCd3wtd67CH4rHuSsM7Kf9vTG23U7VnYcVevAeKmLHMRc",
  "key14": "2nWC2hTeg1R41cWyHyfgMQ2zgFLMaTUSzy44FZ8WSr59Ff7Q1Dn2hJhkkGkHzbf6BupCJf7rNzUmqnAub6kU6XCq",
  "key15": "2u5Fo6bSFH9pf7w6tXY6BozEUAqXQWkiRSZHGXqqKXJE1MmUWPRVZKhrkBsr6HjeHvdVHwrfbYBh3HGop9zaK5Hk",
  "key16": "3aa2Ry5eE5pKZAsFVVde6LVSEwRs3yRjx9JhaFK4VouymFMGwpXyp3EkXS4YA1KrbJ4eFmKniJNdXd5dvASpDx7d",
  "key17": "58Y7P2f6ChNfjPHLdYfqYxRd9rxE3CUCSWpkFRaYkWanZAyZVPPD3Srv8qbQ9ybbggt8yr9yqLPVLJi7H77f8iVo",
  "key18": "3x3aTrGDq4XoyY1aaQoXCuVajyvcqAsu6Q1RsNBNnh1P4KrFwTU7Ywo9ky82LAcALpNcYCVB26TndpsbQAQyThAa",
  "key19": "3NPyi4EACr5U3A9RBN1koSfSvZktJifm35QmZY8hv2DQLEFWRG4okCiu3PDFuGQ2PFsjTTFKi8LCkjE2yyN9yG1i",
  "key20": "3fHN2v9rwXHmHsxbZcT9r4Y6gkwmpwtqotpgMf6fnmBxFxeXePLbT1on5uT6H2AGRG1pvHq3eg85guaU8h3S5AHz",
  "key21": "5mdxqJ91S1zWby8B3uCGKZHzLv2AaH8XtrHPaGp2DTG8vNiBht49CjxErjqhx6mMkTLvvfL2PDc64vDowZj4q29s",
  "key22": "2epu6MByka7uPWgRXTSqiZzQVzHsS2TPBrosQbv2nbgx8cGGEkCbN9mCxra6i1B39eSenCjzCFkneYz5gm2hvRjg",
  "key23": "4nRqjnAkU7sy62zojPi1RUNs8aWZAKs4oJdNbQS6uxu43JQc15EM3YrXiDdGK6J2NgaV4qqzwqyru88efUxPsPVp",
  "key24": "2pKeXyUC4CdjEt5XJAWiV6s3ZEHm5vUvLEmL1xL8yzHbajz5xm6iaT2STRsewk1c8LLfuYhf9ibpB6jM29igZB2J",
  "key25": "2jJuJts8JRWgD2RBe3aKLKxdNBkFk3J9PQ15TywD25XaMMUHBsBzg8MnvvQgtuy3PSUtv6g6XzZbYkCiwzY9MH4C",
  "key26": "3qm4gmmcUNWnybr2z8tPTRTJxrWmCj5D44ZmQP7x283Xn8vaNdesBD7RswPoY9rZBJz95iQeTW7buv6sTLikoFJG",
  "key27": "4FVvyocwfNkW46EW7nKrSHfKcrsBPLSUvQM5TSycsoWioYpLa1KMPudBtp1vAMNNNVUF5YwSYunAxtmwLQ32PjTp",
  "key28": "cDfLTDSV2dgW4qJPQN94t4ZUb3zXWXZMPRERLTrzULFVWnq92gChrWKSaezBc46YFT8rubPqECTNv4WUC1qYpcy",
  "key29": "4Cu6UVeia641AXqMxLBBg9axEbAuuvraEfTgXa5dAPo8FqRu8aAE2euH3S2eVZyqoxtDB2SoR8UcTcfwtNNaWGM",
  "key30": "53P5uL7wjtSRH7DMMFVuzCQyikYzCUAafhzXQdJU6KqNMxXZsaXxn1NritNjFGq1AWxMp6ES1NFPzwnJSxbM5kvY",
  "key31": "485ZkozzZYzv9zJaGq9HaFTdMBzMLHJGUsA6k8Yd8oVgjT3HbsutqmMhonTxTWpFoxvWB87XHXCSJtACVehwWsXy"
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
