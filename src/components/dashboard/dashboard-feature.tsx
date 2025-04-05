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
    "2FoGwtZSTTH5EUMwgUweHPkFkGz46wTS4eGEDtrCPzHr4kYRs9cCGJMQZYpRZDRWucuKt5bnVGe46pKaGHC12pQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9wGpbwiu76zafkJLSRGJzfbthj3kEokNat1vuSKwMR6Mzs69BWsCA8TgzDDwDtJYgaB8p4xs1hJtEoNbP2U1uk",
  "key1": "4JVuckN9BaXXf1VuD2TngQvKxaetFD9J24TLTjFgFtU1MvBs8Cb4kR14efXqtRmVCuoRT9jV2JnsrfJG653SMKJf",
  "key2": "2xuWTXh9GCzE4Cv2vojAjxjkBx3NyjEvusNvfp3cjFTq5XRHQLvkiA2bmvvEAstpd2cLhFx3wUU7ENa9SE9CJFav",
  "key3": "5KDDsbexvUgHSD27mjMP9ggRLvy8gK2Jm7u1NJPMCyiQt1Xfbz271tgFXD4ot8zpEc2qVCvRK5yiQJ9Ls6wEjceA",
  "key4": "5eHpbSEyioU1xQrqHp9PZHGyWkU9gs2kD26r6yac26PxtL7Yz9kQXuH3zWapN7tzBznweHT9awBbksKvth1NzUbB",
  "key5": "5aaFL9wohx1KJ6paExfDU7v5NipPDQQ2cr8241xGDPmwJPUnU5k4WyP3mgdBMEEfobzaRYqyYNRTTaRZ6o7ewEj4",
  "key6": "3bjQAvyfsRjzWQ7rhGyWJpaj4ExyE7cuVT1wbj1y6A9nUbcTeLj8mUcXyo85N8t9NocyvUDHTEuBwVNbEij4Tahs",
  "key7": "2t3NMWivYptNWgsSGhJRWfJ2PXmtQWCSEMu3aprPs3L27GQQPnqn4NvHqahz3NXsAZLwA5zxV4N4GDj3wsHaCEqY",
  "key8": "28SHR3ZxhUwZpcXZeEYnVzfRPu5gkdw6eoGQ6Zz2a4JYcZ5DmNkdngyyvWbGZ7ztMbddNhmycpxUQzDDsRvKqNc2",
  "key9": "4zCk1UzGgt3tGwo4xgoa4fyBJrJED6qaxsiWtWaDQyM7bFpbY7LATeF9ozwhNbjGdY7osmzD2APkLojVNmJqz18r",
  "key10": "PR8xLLWCFt5fzfwY2JLwXtHLnMKN28eT2AuZ2cyFBoXzG6zrhDj9S8opjgoLYvZ6LEEZwf7aGzfA3cB1Jn2VA2c",
  "key11": "4U99xrNdfYwMoCg43Xsb1J5jVpeJB3yB5JcwUxCzDMr2KG6HHUbrX4GtiYGUwZKvW5awsmSar3CUQ3twk8uqRCQe",
  "key12": "r41PyjinJHqq8mBU3jtCZXSpa97fxFhCS15krvmdZYA9HsWqGY6gSmFthjbV15vW5K41chFgVhJkqzs1oiUdbhj",
  "key13": "3NzX8qfy4REFXLvne3mQjbUYjjsnUhU1y1PMvZLxBQofG1dmiX4SUkhmxcbxAmziAxqMhQBBF8CsoydDFhNyGTXN",
  "key14": "5EZ1zze7VXgdHD1DVatxma1Zth4KXPfDq3nRzF1CpdCYCFAQJ4N6mG6QeZDY7qMNVBawuesnUncBvpNLHubSngHL",
  "key15": "2aJ1En1vsVkh4GD7cJvYFYqKemCY4y95bYJLe44TaAB8LmoodzNY62uPXJd6vGkMdz8gMLPzNjfGi4eZ9v6YHyus",
  "key16": "2LZZrrZFvi6eKbPkgLmz96jXiaJDaLAbv3nGP9nvcND2LZQqTpwMneBEtppH2YMMkyzMeoWb55DUeX6eazLpv28e",
  "key17": "4pyDEQPpAu3NRyLwHhNuLQd8Luc2WxvmMaXbdaziGNKZV2c9JQhyQRTVCAcG6V6xoCUGe83FnN31ieryJ9ADZDar",
  "key18": "4DAHcHbTwEMf8fnk8RZY4XctyZu1v6jGwryKrNXGRyLNoam9cgNthUpGnXXnWN9MekSDC7n6jEeDKDbKnnDS8Hw9",
  "key19": "5kX5wzv6HDBS1o3ax3Wb5b7zxXbs5cjrszsHqVy2Z9E9Y5AnM87CVNQxbXptQbzMpatpm7V6hrz1BpWQYhXr2yHK",
  "key20": "5HG9XqZh88yNkQUPxhdqpG6odyonye1TDsJRd2b5fZchFBFzR9tnohJiMsHfdrFm7zu3uS3F8SBLgD2tpYDfkJQB",
  "key21": "rdsVVTRqy9xYgjVDGbRq3cTRjZTzBakmtRjS6Dp6zvRAz8xT1DwReXTsjirBgTfEdNL1GirPE3yGKMgS4siUXtb",
  "key22": "twa1r118t5DPgGPv69ixVSUrzQ3MFKRWtUTkJQEcBZHkXo29H4FnFDTJMvbB3h5KDLptfjocFEogUcymCPzJxwW",
  "key23": "48LsbwAaVoboScA2DhXQEXx77tLUj9u94CXDCSmHBA8iknCPu6goShktiThrLExmLJW7fMp1b67y6NyQyD3csGMo",
  "key24": "2VX3kS4kAJ6mdBSvbitX5WU1DW3FWUBabztFQR4AFs3bYa7jjSBCRXaXyb9dDik7TNBHuUwKxqmmsHGo3idLmp4e",
  "key25": "Ns999hu7UKsqVbszUgwmp1FDBu38v8edK1u5upz1RWJudsBPs9Q7YpuPdNMRkctxPLFXGNP874UfUisLMnV6JbG"
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
