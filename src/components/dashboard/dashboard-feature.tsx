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
    "BFfLfQezaJr4bjqsgzYk1VboSMYEbueA39w7Kh7daBXPQ4jVmKQ3n2YCBPeqjq4uzX2XDKdSBVzxdVxxJTqvrFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HFmKjh8LkEsH9uoGCKLjN3cToimCgVSiW53sJysrydS4z9sMGrXviCg2wc8LzoYDmpQ8z2B1QYRaHxppbKGJ6Fc",
  "key1": "2MgBVc6LBLa9x7dRLN9HFpdhAipJMfdRuPYYxs36KRqt6XF7jNpCbsG7BpxBoisDyQxqhJ8Z7BAVbsqSnxLmE1aL",
  "key2": "38gcuvMoPgfXBbng755gaZLmkXDDyPPUnmG7KwNSG9kRQo6XE7wFydMSHijgdYTWzccFN2yJrnJUnotaCbgjkJbo",
  "key3": "23JUSHavRxj4xJCu2h3WUawN5Hsi6QTQ87RqD1xRcoJHB4i2mtM3KQLSLnEoumKiqtsCHJiVST3yVsBhi2hZN2yW",
  "key4": "4tVpa6F5KcZ5Uu7wB5Ra6YJR2MtTKUMqwPBXwouyG73MkQttsgg3yRBBykPf4f2m2oZWNgmqDN64Se3UjVGBtQ5R",
  "key5": "2d34a3opvCv5hjmiryy6nxjXya8Ln6igb95rv3WFwff3PnqBizbLbLjQR7yu7cPQi9p51FYDykeMevb8raZgNpMt",
  "key6": "3j5tWztwW5unrrRRYXZki4uVap5FCj19DYVw6HXhcCsE2z71kzxy4JB7cG9uTQR2ShKAC6QZr1yGuAczNj1TKtAt",
  "key7": "82wHexygAbLrQSrvPTSKAJUi3nkUQEVaJaBpBNdrDu2JA8KbjuqJyYYJuKmHUr7B45t55uVLZGiUzmeWCiVkvGg",
  "key8": "3aAPe8uDEBLKjGZN9r7QrRijxx2dJpXCZsQKLbZZfkDtk2T2xaRMVeRjsNbtbq1542pkcYXEH7nNTEfdEEwTFFbk",
  "key9": "4UvEkKjhwYXPiW95r7hZ5siWF6FMu1zH6vbhStZSwKw41GMRqsNubgajFByD65uiQL1VA4fVNweBGf2NWRUNEmqz",
  "key10": "5yPkkxZ52saPWVWbkteJ4PFw8N7vXjfBFqqHBhqEu6quzowMfYXFJuPRHZqetbGVkBLTCmfqeLbFRz3C3cstoDyj",
  "key11": "2h4iuHB3HQffEaPwjUAu98wJkpHco82b7JotokRHpXTC1DvgZ1oC5yh8UWVmqv7oNpe1Y8kDWgD5UDzHwFfXs8XH",
  "key12": "2phNEF22inyRjj3cEL8GWAf16t6sam19WkSktXd1F4ZezWEeohWPk7u5N8MKGgaM7K8uc9EabKyMKxe2PNpiwxCG",
  "key13": "2aA6E7vRYrCgVpZSyBzb6kEAWhYjoyiFKr1mkzSwLYhcAsiUREZvygV4M4ChTF2xUsXVHUmSZ8emVLRynyKAEFSY",
  "key14": "4TVPDNVJCF6GsfXLMk4yXRZfVPRLtVShbSK5wpn7oaX1ocfHUakKmyieEmCCf87uRUjxfB5Nd5MaCSLub1s6gDf1",
  "key15": "5xzwMA8UCKG22Qomn5BMeoiyA8AGNfenqBu2g8ENDNocNQCHDU75hBgJqfdD5Da2rhK3bUdurxHCW6N7SaLkYj32",
  "key16": "4zJ4HtW5omgCfvaFHUjUpsh2Q3efXa7i9TykQYewdKZ54whrRuJJkWiBoadJu7yCTHLnds9yY2UVokyK8AfdYFCb",
  "key17": "4j5km7YsirKyn7HXmoX9f3818BUo8ySavSdp8d3L8FurJfk4vaeKQNioCV8wfSjQ4Ff8wQDZuELqCcnp9eoHXndC",
  "key18": "4e2BbgrKWuSa2sou3z3CnoT2akTGD92YP53mRsLDVkKBYPEx4ZqWdP5ts1nyoMvU4aQvJT6s2tgkk94gEF391Nx",
  "key19": "5ZDSAAT3GU1kJEqg4eDn8PqanwPdGRLJaaLgDejX2nN6eqTs17rePzHVWvRu7djNbnyyPY1rmJzpdyuqw8QQLywZ",
  "key20": "2SycrY1r2Ma3zbXa5pPVAbgf2YhfV7qu6ZUQ4F51gpU7XH9MYDesZdpszZwDYhtzVraDPSLij6R55jVbgfVMkdcw",
  "key21": "2cS5ZQeaxF69ZHCjNZ7zGW1hyio4obaw8jbKkpgHym2Ek4yeNccU5pXrkXAyRhucFXfcxZay9t7dLz6f7zQ8CQTF",
  "key22": "3jPGhm1MMfyUkgLDGP6Fof1ERZ983LtkreehaHU4nHy6JbPpKDSzY1zvv83qMFTnKPi4VDThm1NMRgVDz2KF6Q4g",
  "key23": "3BCVGdXG63krVMtcRLpfrGh5oJomMGnr2SsgWrwyrhzwD4bzheofK8qktrtH95CYkzSfz6mYcEtysn2M5fPxS4bg",
  "key24": "3Beo1xwY8kWaNXLCpuqdfTqUwA7TyfASsqhQe91jrCmUgpjYeGnsadQtjKUN1zmKkSLToFyemMCSzh1vn2VRX2BQ",
  "key25": "5XZSucgKimUtHx6kvHRT9rfcJZ1zpXhVV26tcKtiYBEYu8pJFqFPUv6wCnvhQuKaeqCzdADm81BgPJr2qrtVfaGE",
  "key26": "3XHw1ZuyWQSiz9etdSSEVYeFTC1BJ4RRYPHPaguAnAy3TQvfHLCsFfYHbAinP1XqZZa2e85Zyyf2cKHUSr6twRaP",
  "key27": "4PDt3brbWAQJFP8ob172J1AdTExJUGT6SrsNvBcdFVDKNvxQ6p5fnhGTncgmdgAqfN6g87MvAADypbE93PE7XKQe"
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
