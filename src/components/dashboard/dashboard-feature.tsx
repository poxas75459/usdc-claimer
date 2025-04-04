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
    "MffHaHSH738vWz6Qc63USDTxajnBHr6taJp7vbr9gxcvepFATvFWoom7MWeiXjjtpgWRGQk5semnLeX5kdkRqF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tV5TBdMRAycCpCmsnJsu7hgCxz9ZcNCaZPso6w2cZFzsqjJitmScQAMtStJ4jtAUieENZeiLbDwrCVVxuXCQfgr",
  "key1": "2ruoTqBCiznnx9KpTjf2B5taZxL4RDzBVMyg8bmeBirjLL8xzbhdzHdqpfSJ8N5keM4CXzacovWvVy7QFUqUfGJJ",
  "key2": "4fvhgZs9eMSMBfphecVCpEdfxAzEjocpri3Rk4Ti83U9FFHRhEwdRcp4aGQi56eHRJVTVk6T2ByAmU4K2LFGWKgS",
  "key3": "4Cg8HTRxJxYZ6pNnPMNHNCEZdXCQwUpZXN1zNTGrbN3ufnM3AysMSAEXypeQFCmjZ9rKjt6JKedDMMvA5cFo6SAu",
  "key4": "4sYWdFjppdMPW6h4jvmSMZzc9u3qTYKC7nVgmWXLeN7Gnwd1yC4sYcUEZwZa7U3g1pcHgm2mb11ja1YQZA1XcsCh",
  "key5": "5fg4gXSBdFAZNMDnHJ2J2YfRRTnwYyGdhVguHwk1UzAm2sp8RwKGGCPLHsUhwusKqQ5NQgUcS9uSsFtJg1mN6zvB",
  "key6": "38pfgbeQTbx5H3VBDFXGR3567Wadur53BpXb3NjTj8aVAJ7wKuBnQniydsy5r1HVY4LckZnevnrKeCqn5pgZzdxA",
  "key7": "2UrwZpbJUMTuaPrYQJf5Xops7hDP2FLV3ef9xXMa53adWVwYmsQzGL78JpwARtbDweVkqASnW9w74xoJnkXezbai",
  "key8": "95YTUHZDvvHdP1d6rVpdHVpMy8jMThcAXFGjUVpKeSrhmAQDeuG5HYvjfszNU3av74oczae8pvjx6iCV221xAmq",
  "key9": "32PxwcgCVarGTo3ddSde2rDogyGfBs7zAoamFMz6qZBGUzRdUGwpYjXKxiFf9WXSxm4Vh84g6XHwyx2fPwWchRjA",
  "key10": "3KKreTG5ChMuxotFJthknYfP424Rphffz9ZUhCjcdQi4AFwshTcwJ8GZtX9DqgEqhMw9cszbfKMTPdkcCCxbYAF1",
  "key11": "2kWbEtjnuSE2yFr9LmqWbFGBfwWq4D7d4CrwxRV87UEkFGNnKTgxbNnbKsTqaUhSmacFyh8STDNJE69AwhwkAzMm",
  "key12": "5Qkjk34BxbaZAboT9YDLwum7Kj4bZBvbFX8sbhAFkC2y929BaTW8h6TKrErRwUWsts2TPVYCKcMXupFcxsmnyYUi",
  "key13": "4BzMpsVtgaqWxdoPQjzZEU11Hj3hXoReKdbGiciiLR3hANFAeFNfDNSvauM9qVy1gf7sRyEtYcmKR1evHyPrptba",
  "key14": "51R35TnjeEPZRGBikyAEp5mZAUtNHwXcD6ARkj3VRK6tzTqySQVmTxRxvHHuKoF2A8xbQxsMeJVjqWGUoUKg1zg7",
  "key15": "66WUV2Mxgkkbis4ez8Gdx22wgWasZh6RPk1TEoe79YxEELwSNFF4bjbT2G6cM7y8Z2F2nTweEUC3xfDCMq25TVT1",
  "key16": "4LtYA3q74fuXBchCb7nYEb5JLdeVQqgxpzuoF4YgVXufAKyz8wc2qywUgGaeSPhx6bTLQ9c5qLtQqJevdHDz1TsD",
  "key17": "4LMRCTc1HAjWfgLaNF7Em4wS2jYo1YfBkZq5NDjCN4zQQpekgnYirUakZ2ygp2ZYUFwJJjPgUYbFnUAEBXULfXww",
  "key18": "346RkB5AJyKmbq8SK7WzeXMWnzGSQpQjpW8NU6iadH5oD6ujgynbBoFR6gh1YhsXwzt4St98fFNCmWRwSbrda8bH",
  "key19": "31oaKgzw6kVn5AhCUftgwZqTZzsh12zWHz2mQtm67WuBBjfHCivqTBoyowNqJcHgVFarnCRLojS3zbCXaiutngXQ",
  "key20": "2WTAmC4FqUxSzxooQq5Pbe5wBaEHxMBcQqfxrPYmXVpApziqjTNZjtP5kEWCsZ6b254G6hcQtmS22wBWD3Zhpk2N",
  "key21": "5F796fjoWfvRCJFrxrQSLVGGV4vpVkB91BtSVbzaYTRJ1eNo1kbjBgknPdPsBPBGRuYAF2jKQtd9cRKfjEo1xYvu",
  "key22": "5ef27EGLJPoMD7RyBqjTFQvBkV33kfzGUVcGjVYarFuB5URzg7KDJSgAdWrEn1v3GaEAeGCLJMRbB4b7AZEUFS6A",
  "key23": "4GEuGAS8pJJkDiQzowuPkoqPfbixt3bSLQqPcQELfWYomsX5aNJGq5CfTZSQeZ5iZ1YL3Buu2o8cDPiHStXLk96v",
  "key24": "3AqoTcxmSquutqujdAEJfJav1ZQJyMxKwi2KhDkzB5MCcP7DSjE1nfNAmrQEQabfbYopV5afS6jPvckpevvCzYHr",
  "key25": "2risLg62SPRrtocgJtQwpLrUkSXprqrUxc3RjmUiYS5JahJ1XZ87dQVTZtk9M4mSd1QvMfcWFwL1e6A6Qfci7Seh",
  "key26": "RihwKCeDscZ4x4kQMxndLHtyf7y8askG4BVTFNYYH2toZbPTxMY39WXUxMxxy1kmSydFmGGKvMdNdgtUZwq8ryM",
  "key27": "4tmxUwhHWUCDEZjU1zExoczuNhLGz35Kd2GNT6dgzC8mEiHnZrAAXgzYzUwMNiC936eRM76RTURitr1q1jCPFjMb",
  "key28": "4mPFpwKPAKT115T3FYgPzHZ49UqeBd5DD52KcrCsfnmSd6zDdrXGiDNDAb7AYoxYPQLNyNoZFFLGbc7LKZxJ5MVA",
  "key29": "L9kLRBDD8fkiwn2rjTNg8D6K7s5anrpz8f9tHiPFpnpbLpPChrwQcrRhXJfgz2ozYnnqx8rkqqZ5MgspngmYJpi"
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
