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
    "55UPhNTCtMSAbpYV5h8LNR55aBtQFrqZSxU1A7nwoQRpTbFtSaJbAXEecvUtMKoxKMN1xe9gTyCRKqVJVwp6ov2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNJ9ZJs8sVGEAtfFVTogrg631E4wfrsWSjnULejp4hVroQggSAJsjGpTdRoZtyB5YKz8tM7kfmcPkra9UXsdUXT",
  "key1": "2qF6ProUa2iG1UUVm8PKSJ6CmVXHYkDSVTPSyepCHAry8QjeVzzZp35zZc5EP6G7p5i2QVheqUiqzHi4QQTxA3qK",
  "key2": "FRbC5hbES8prRW8Y6GwA3NFSGZNjUAgG8s9Lg31tD7yqSLXmGaZ1eYuebTr987oFJi3AhDdgxmCbTG98tYKEKAM",
  "key3": "cWFnGrpNjRnQZDYHvpNiiWaJbWVY3A6WA5ExZFKXvtPsy5yMZ9ZPAbEHPNrtc3svd5Y9hKZTdVa4uREoVgynFrK",
  "key4": "34warx71JcJqfFVJ8goraQ2HKCSgPYEZGkyeidaYqcUnEBiXfXfPoXKMFn2Aqr6KCjB7StMSeoiEbZzP6LK7gXFY",
  "key5": "65cdmpbEWgqdCeJkbrBfRLLHmmNZBWPbY167xRR64zTqaBG9PURMfDF5fQb1qD4HRXNwdVT3XdNUrLRKLUEjthxT",
  "key6": "3f8mKyVY8MLReyUKaG7C5mZdN6QNpjqKBsohofCPgbFM9iKfrsePrVU3eQQPfGCwQQjtMjhYSkdgdCbW2dqTPuS8",
  "key7": "32nN3UcqjeiGDNJ69VS8iGW185AuoMxNcMGKj5ePDpASngxgShHL6rA9LLZCL5uEjAm51nGJcYxT2zysn527QKM",
  "key8": "5N74vfMfSEUBdcLs5GLsz4b21zJvmKgcV9vmB7ftKMhmWUADhEeZxsoCYjaR6oJ9ZXMZLC5iHg4ErfJhBar1HXib",
  "key9": "4PKBYEE3oC8kDw9rdgep3wn1yxXzuZ7snhNG51KbGjnANeHDgirzzhnMEfvEEdRFmM8c5uYKWyPnDqQtmX2PdxWF",
  "key10": "2pC3b9dZ7sHf2ZrPyF1M6nbvQpwcFfYqHEDojdZCXaQKNYMBo5HRj1RrtEraKiuRZ7Fyj3pwkVks5DKFPm5TFv7X",
  "key11": "LL5Phcf5eTiGrax2XarWA9rTqH9LxTHew9i2qMd5cY6xV76XHueM1xzFwZUvX1jdhWo1nXyDyaqryETAikBNDuU",
  "key12": "HasLifUUsSZ2AqgxsXQuBtFZSXUve5vshCFyjX2hjLCbFL4TQXgoVYbXvJrDC7U9H2XSVgn8Gf6kMGPEgDuYvLW",
  "key13": "4x3akFkDNMQrRskHxi7bcnk5vrwW3zJrQNoStHnNSwAkd6b8ppMkDcSNpPh5eW5D4Ks2vcJvxtG8WHYp3ZSW8chs",
  "key14": "4e9rSjmCRKtcX5vQ3yv3zFNq4LS2vsrkyxDYrCKp6mdYgqYUSCPm3uj6uLficHA79toEQKUwcLSaet2m8JsCQaoy",
  "key15": "35WLHtxUB2ex9gpYS6S5KBSs82LhjMUWxQpzkBot6HQpGAfXzTdGwHBC3a9DjBkWWC9itkfJWnJrv7akreoJBUZs",
  "key16": "2QvgbCnVXwB4GvqTjemYQzai6GnJmhdoQ1PcZagyLKnuLSgkPGooVhEQD2BYetNCawc9G8Zr7xAu7XZ6xGiv17Ar",
  "key17": "2QNude5V9fnaUUQ7ptzXzMvGu6Mv1E8WzfvV3xv73RpeDw3X4ojUEHU49jmMYUVHhBBGZmQT7dsQATEFBHvyA8Ca",
  "key18": "2jLf3uDhfKb2sdUgN4s4GMwSW5d9c2VawxDUeCu7vjmBQfZhAPP7Dwx3T4P4ht89wJ2diqzQtnGPXtoQqCWJNX2G",
  "key19": "3QnLcEwND1Mtj6QmxYZTc6psfvPQJby1yCFqqBowWsDt8LSdHts7DtyCvh9T42UPthL8298mxnVqsFMubb8J3gcn",
  "key20": "2Sm2FZE97cbHAde1J6RZaLB8DTdqSyeyngGfk77t9fZ8zP5t9LBNeKUFMhH5nVQZyBYFG6eVji8oRp3DuuFVBtTK",
  "key21": "4AqvbvYrRQCW2em3TfqEE42UB7w9ATfunEfSK6oNHJDqrNsQV7QsmRuBCECcndzFdvuebmEb9Rx9MFGxqgZMR6d6",
  "key22": "35jMmewhS7Ucbh7H8Cw81WbvJFJC69UZa8HivGcrFp8iUBRUNUoXxWYWcLRC8yskTXDKNQUDiv9cvU9wUtoYB2wK",
  "key23": "37Z7DKJBpzLZopThaKx4AGWswsNGBdzEKb2gkyGzGEfaEJuRSVXdMxyfAS3A5Pb4ZtNJLTsLtV7rLwx3W9UJSBWS",
  "key24": "3TfabGwB5H8JsxCejc88Xz9kYiCxCExJJ1X4bphT34EEVNV61YEkofSziT4oRYzffvpjb1e1FR2wtpBnHRxLSm8J",
  "key25": "5fV2LvtAAdJEgwYDM5azQx18qgBRG8nhZ84fQyjn9eXCehGDazfoHJGDYioBejQV1vrpQe3ieY5o6H3VC6QtUXTY",
  "key26": "QmnJrwW7VBUtUQ27D1CjjoRujcz4PGsah6X7P3iUYN5bmXtoxkQGYguXovmDGFwcTTFQP3NSLzM8MBnAMcKCL1d",
  "key27": "4iKsTgYga7pXYTkhqc8UYZtbgpZvHrEvCtFxBu3s6TF17VbztQAYfw6miCgApEdn5GHBJoFs5iXfXb64F8Vsphp7",
  "key28": "3aM8F9QFAMcKt1UvbEsoB6ktVCoApzKpPZ9tnRG4xW7zbF5BLPRn8qSuBdrNTiZHdY8mbX6yPsWQc9TUgqgGNa5R",
  "key29": "3bHHikgzxb99tBEu59rZcAjV1sxjsc3YJjuyKSnXHh43aeyza5h6T1hgFSTR58CfBuG87eDkZq9oC2nfUa2n8MeQ",
  "key30": "32XCGJ6wAHK7RmEKFmZN94NYzapUzyDVVRX9BgZdgRWtSXFzPfbdMyYMZ4GVyVkQizgCYnwPEVKsdXGkAPY5SRvV"
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
