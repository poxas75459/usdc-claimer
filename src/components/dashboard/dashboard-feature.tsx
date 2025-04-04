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
    "4okC4geUEVBxBf7z3xsSZUFgrFZc5yFnyeCHmSLVC41ThrLzqDUoUufRzqSRpHMQR7r7omF6BhQuDs8JD4ucDXS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kM3aykcAfsL4qfeVVeh67SA3crZsTF82AsdCTa7GUZAiP2wa1FMm2GaYfYqVRQ74whEwKXbdSphMThvjY7VgAma",
  "key1": "4eK6C5UZnT5dUKQnPq9qHzQrwc2y9GtPMTyfns5tSXqJY69opqFdXoNWDcebS9c8gRsYwEiw6wguFMDKiWqmYPay",
  "key2": "3kAny55aFV8TYyRSP1Tfa3ZVX8Nszv3bnSp5hyje8R7iCh7TzFCeNRqCSrpqCDnMzTnK5pdUgMjE3SHdNz7Zw78F",
  "key3": "Z4FumeffZ7LyDt5JaAsqQZUB5BE8EnvBNUW1BJxHneJ8HB9hcE1pBqff1KUAyyBx8RAD2yBzi1ZJKQYH45DnQcr",
  "key4": "4Zf381iZg41y3q1YU84tHgKCRzq4cHCRJUrgVupbmwf81PmPWZBSiCdE3L2y5VvkPHjw25nifGMWW23nUd66vVBf",
  "key5": "3ngsksUCbBdjoLky1X71q3cRJ3STwDZ3yF8nGqVW9gfjEfiXypKneAYene4hJau9sevzjMpw7cot6tFEk4EMozeW",
  "key6": "4PXTKMpJxHzJJLP123jjNWqXDJfFdzXS8JiavyDAJXx7sD7FizrafGfsTVrRVh6GF2MAh4jd6p5A6tWuSXBHBy7V",
  "key7": "2kychD32fb3Jw1PsEtWf75B6Xr7gsgjQ5MtCx7sV7diCzbUbwE7ypkxAUuRW8dWpL7u75Q9QHKB1eqVCfMH2qEci",
  "key8": "4CksmLa37g8TA9nfKPz6SoBFViMVRKGHXKNiu7qAYvMzLtmVDUMG3wwwkHGfMP1rdKYuUNWiJKxNVR7cYvBD1VMD",
  "key9": "3ev5Fw3jozM8PDSiSmKes9QsqceGxJPjceHWESVRJov19Cp6zGZ7ZoU7BZQNXuFGH9oGG4VjKfSu3KTKtBrUSS67",
  "key10": "3zpNwsCKJiDurHwSgvEcWmP2VhrXkDKsi5fCYwxGWUfw1Dew3L4qz5hYQ8xS5yXH53eNZC7K8Y8QmSHKEKpVQmQt",
  "key11": "2P1dbRC1VXumeopFuzE1fK7LfJjpAeDk7QMCHqxzNs8snxAeU3yad1BHqNuaga7afCyKQZ2F1MU3uj1ZapTdyvKu",
  "key12": "4rnTvezziWdKkbBYBY8EHjbFyLrQrPYhLyeRHMg2fVtoX1ghGYvJ9CsHzsApQdU4s27wz6SCFsPQj8dtGc1ftWz9",
  "key13": "4VBHskjMij7ESwknoCQ8z44zUDvR8tF55G39Cds438bAD8WXEpM27Apvcef2FWoj9VaiQu7iEFCyD5JrdgDie3uY",
  "key14": "4UN9R9VzFpamZDHgeJwyXySVZsTLgmgoJDLJeV6j9PNcRxdfhTEs2P14nxu2ZYTbgAMC8MknvYbLt9vMS2KLSjmJ",
  "key15": "5Ayw3JuwMpBBox1BjmGETx7PRR7JviMLUmhNNZepWUi5o9HXvsSVLcQ1W6M9sYrB8hoxb4iYtas2fstbLYvcS2Q8",
  "key16": "gn9Ej9o8wvmB6HmAbzZD6DEa4WeTuAtqxwg2LqEsxKiiS2Aa1cgtS2aJCW8Jt5XAWP4GS5PxqsiV2BHEBgg7XMB",
  "key17": "n58zc1h7MNCAuKUPLNywRCvW9AYNPoAAeWsimnzwy3whxGh3NEWMf7CsfjHNnSosNK82kLAMfM1r8d7y9KZiTo7",
  "key18": "32dNFSCUfHqbCLbDZcdMkwT5G9TkUSt1gMM2FrDkqVhCtLMDsKbNSUAPADsw3q9mBxqtSJ5RsxsUH68k9BjdR2GM",
  "key19": "rgsS6UG6XCxG1qEqc3UU56URbzqLY3qsBtC8AwhAJeJSLZyah55RhUuL3k5vFABd2XNR7xjAYkMmCEqQSDFfBLc",
  "key20": "4VhFK6BzWAcHHahtbaVB15DBYdtF7YAT2KveP8SR6QaEiej7atS1NY8pK81TUSdat8bQdJaQs22ETx9NE6gDxLNn",
  "key21": "2eckiHQxAwxwt8y5xTLe7b5uqRfnTmoKEf4aZ8SD6Honp9CHTSZVv1Q2XaFQrVrayfJ3CydWePTq5pjt3EVNwksF",
  "key22": "3ieHR8JBk1M6HNUXnWYdk7TL1DNonCG8Whb6ppk1iyC77DFfpxABAU84Rx6tboVcaP8D66fmAK652X6Z6211eUmv",
  "key23": "2uLDc7ZGuYvuDVkiVFaqQRXre1xNu4K831ZFu7DpbekYTQ9MGXoo74eMzfwhU4oU3o8Aui13siCMVHMSTvYejmGd",
  "key24": "421FGuohqsrDfAWbqTJMMJXvbB5EJiV12dCoauh8NNdm4Qd2hcTrY6tPwVEEJDsH1v14gk7PKDeWUHxfYkXAinDP",
  "key25": "2Kr3khtQ3qeUDniHjL1Q4VpG5wdLbhPd2cHgwBCEem8neD9qUDKsQmvjUY7Ptj8WLg6JPkgvs4vM2jLkxgFk9QX6",
  "key26": "WqZSSsqm9fcjuNu7E1cCn2EbLoA5v9q33VarP37CtFbBkG8zWB5XnsHvadX97tUdpZq2z1Z8rBAWoDEAu7beiU1",
  "key27": "2kQrHqz11pe1ovJ8hpum4SiDpoXfB2USvnFD6BzxzoBJXomqpqa3oaytL8DPmjCyaFEKXijAVsDhgPbg1Qb5ba85",
  "key28": "4PyeoVCEnHjPokGbyHg7HPrVocba9H2Rr5aMF1nrwMBf1EaiM9Eynfo9UQ8prVsc4ygp7kDrzNfgn4nHqBYuALXg",
  "key29": "3h8FGJXG71qKzmz6exELY8V6Cs17pxVK6a5yG4sYirkwr7e6F6qCZpyYMFiHiRq62XoFdL2f7huKYAbsnD5WvTv8",
  "key30": "54m5AecjaXNiXd5fVtLetTgtNXrtkpJT2KSWDxYcEwEAGXrzaECQGR47grVKwjdwvpReksgV1hCceEPtGMEfYi9D",
  "key31": "5XZCAtehZVNiMiQqjKS9KofYqjGyZETt9WDCb6kQvkiUyeoVNuLgy9HbaVXyJ8cfwaxAaFvHEkCEQfrRBhTDULEQ"
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
