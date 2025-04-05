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
    "483zsANTzf2ACi9V36SR6ii8kMrS4wCRsarVFMh3CTza3UBayJJjQsZgRdDvbAv7U5GQygFa26MTdaRvAVUuAr8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAmPBfDY4peQEwhELaxrwoUYbGHCS9biaFJ1SA2L21QpQkdEQ48iDAw27k2D4gqYrJMb4da6j8mvDrkikUqeAGv",
  "key1": "wufA3Sk4La2K2idKqd91H2KW83RHQh6NsuFMkeM3YYbxB6vCY61Y3LQ7MF9uTBV3QsvBgu18nb4jZ1e93Gq2KQ6",
  "key2": "3Pn2qRiGw3fkYmw5PidxBgSK3DjCHHd6aL8cMmQzuRRWoi5Xy9SFN3p99WNt6nubGPeiW83hSKQTJgzWWMmpWXh6",
  "key3": "5Pf71hEY6muwpVZLUSph21KZi37Yp1VL42M4CiXwtdToHkfnyShcEPuHS87A1tLace9b84WhbYU2hPZCU18WoZYY",
  "key4": "2dM9D5jJsGExbBA86PyzQqyJvbjn866kZoG6uTXef7ijQAjRFPbYdFTayVGoSGjNHsXgve83rKZhjsK3pDHTWW7T",
  "key5": "4tQfz2XG1x1TKakDQNUhWxRMNiSa2VKyVLudF4WsVoTJD3BR7khX5Xer5ZaQ5Vr7B5tqYVgT3FtsyPrtHWq9Lahq",
  "key6": "5Zr3JWTWfWnuK21Bduf61ouQeNUaASY2HXtUxjVs5GYjMnkcncBJvLePVgiLmAFadxtVU7GqohELrUyvdvLRSJmV",
  "key7": "3hECsJvTTm4rSA5BUQkTFjEtkAd5gCtYEwvoQXPJYm8jAAh1FYsWysrD4Xj2c9hJWCBxsat69zqBNGhzLyqy8e7",
  "key8": "48CCeS7S4w6AS2sPxP1QCRN9EV6xz8GzV4tZ9oDVk8zAZSqcuJp8HQHfCLZGz8dh8E9GCHCHEFJZhdwL4gh62inB",
  "key9": "5s73K7HsyxQXxzfJMp5PpUxNfSbCS86eoUBDCPrXCBK2KTiRPhPBHcGDGGyHF4UfhA6fgXV3E619pRCxFzrHeT94",
  "key10": "3gdqpRyfEJEsRhrrQg11SKakKUm8qHN7saLvLFTWbAEJPdGQkmBK8jHrBE7URiaDydm4hcpfdxwfMR7xQYrVga2v",
  "key11": "2TrjDcYe9bQmuhutbsfVEpz43GpviZU2Rsd4BEjKNbU7WymzhdKxcoM14gv3xjYATGppAxMeF35dn2mu1ALzMEie",
  "key12": "5j1SmTubnZm3heixzv7J45VyUrJ4i9yLEVfDcjPtqtP1oxNKkxFg8t9GiVcc8joH2EKbfPHDVWikyjS3qccCq5rw",
  "key13": "p4XBaVhMfgXkyt2PGFWUmQtL96Cgz719idgC1WyQm7Fv5gFm6tcH8GBce51ShBuipNFesaPxR7xWC6nigoaP3Ha",
  "key14": "2FGBpcGkqfqdvudzT4aXzGsHS5Rhcjjt7TXGfrPd8Tr769hRDpWSFcKAmTqBFXCeHopGL8NTYVqFRcxAQjnuDKvW",
  "key15": "4HEkdAv5York7pGLNHYECGGUaDDUJkCTeUWekxr3uRVyme9N5YevgDpx6B54vayg6bQGv1BdCpsEeVXUNvtCmA6o",
  "key16": "5NPEiuGXWmGSnFzCWfSVoxpQYgCpcHfwBr6XW5cMPPRrhJT9UuvoQgvZKaJMNLMaiJCyJypHxArpDJ6otRWMpGNZ",
  "key17": "28CUZERrZETxAyg7ViqFAuzFg8TsTrUwg83RXPcZaxrrCN6KSL7ak2fkYkxHnyrXSbMkmL2mmQY56P62DaCv1f8V",
  "key18": "3W92WsqhCEvxELXypbmLdtZYxF693zaAF7ydAjWh9RUgqMnzAUJPDLpUMrLjyk7Djq23ssnbYY2p7KbmqjVKp3W7",
  "key19": "3FdgHXyNHEr9GMcsVY536P5Cs6jCXdBrHZvbgUSfq2E84CmtBYjGy34uPvaQ3ipLLnfuRjUsNbVQNxH6G4tUHkcP",
  "key20": "2rJy4Vqjut6CjycJaJWoe4HN18oxeJiT2od4ofgmUgCN8V6qaCNvo4rqtMN4za5KiH1eG6zuSgdcGokoHirUsjgJ",
  "key21": "39gtjXsRaLWWnyTaSp7Absq7VtyE5NvZa7U9kwETyXUovdDZo2aBGYwDpN6bGYTaq8ZwUDxCcYkdHrMFzmmYrUbn",
  "key22": "5NsesmVxQE3qCZ8dTUvxaRTwGoDPsk4EKppqvn4Hq1T9mbaRD8pzKA7gVk9EQocVBjeAccdVv4XvCzQbhgupX3yY",
  "key23": "N9FqyjgCPHRcXo2yUMQQY6tLExFkfQNuQrha3pHpPsjcyh3ussop2Y67ftGxzjST3sCUh4s4GMvM8UGBDjoaeSz",
  "key24": "5mPm3sq3qEougDhg1Xm7mMxwjkjNk8y8kHz8pZD21ivquvbb5vzT2NSMZfCD3pkb3tw5EysL7P4CfprWdLYS6cAJ",
  "key25": "98FvLvxz7MJJ9ZdBxr1oHt6LhcMvcgEAzEVwXnyD5cgotQTMkwUBvmQdtRzHujomFwyvrtRRQoW7QszQdShcy1q",
  "key26": "U6cGBPs8LtWCKtniv9mrJ6ggeqzg8CWEgmWEbnCUqUYjS9PjcdBaCdWuBawgcB2qmKnd7tTQ6DqMJ9XkkYPfzCK"
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
