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
    "284NTzoc9qLh9GEx2Rwdj9JGz5VL8xCmw1XXGsA4d2wB2YUkBy4jbpCNqEWaTigLRYumEQHcP27QNeG8p8oSjGcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2acL5DSVJXzX6AG83BzpQN7rccrJeq3h6LGJFmZjndKVCXqVBkyGWtaMRneH5yFgcZi9ZWS6RdVa285hE4EjgcWj",
  "key1": "3bS9Hvm98WwxwruaooKsNZDCnzk4Vjaq7Tt2qmNmyD4Vgv3eMeoKEygB9ZQxcxpBq9uta7iKKkNb3SERABF3NkZ3",
  "key2": "5VnjSF73ATTe7LySWDVvFbZDnd1vdXUqtY5z2HzE7fi7gz53LZd1mSutYE6N9xWVkqqm1uEGeT5vuhvevDKgsPjC",
  "key3": "3a67tSsfvCBuxfiGhgAW5wQS1u61wmqkrEb9WoXhE14vTavbbvVmqJT15xSmErHzGimD5nGq9prSQCXNHFYufyCj",
  "key4": "29eKK1iTQG7e4REVAhCa5nUK1ofRWUTVuNAf4vYvNkVoZN3iN4PZhFm8RtKNdGmUUyRq2KfeCYQXjPjg55nxstvS",
  "key5": "5VzGgZoeMKikcwuQuAsppe8KKA8wPEzXgUFmjjTAgaS144TcJnLAcmwmtynDPJymurXPXun3ujbFXN89Dg8rVD3q",
  "key6": "5SmdDgZpPmvGTPAnnF3v2eRDhjD9xUCSLjgCPakacDNk8LQAhJERPp9QLQJU8nDF35eDCZMdwkKB4rWYfzbmaoR4",
  "key7": "tz9ann24ib4hMrt5EKRJmW9pSJBRq2rXzYUmnhNV4DU2XCDxsnN4p3T9k5vrtooH5gFdzXYqSB4o8JcvdJJrpQb",
  "key8": "w62fyWHZ8u1zHwHAeXSYThU4yNW7PV8aDDBfSZQ5HXSeqfxLoYUvmnUmrqaq9nuzweoxpXtFGwU4Ek575fVvbfn",
  "key9": "35AjcXQGhHE3LMCCg48cnUo3mU3oGFNytP6NoSF2tMjRgyThE3Acs1MaZrCQC1x5ssk1mpJVJED4JcJLkaHkgY8u",
  "key10": "3kLxzLbkWfV4ZXQruRS9BvZK1K6qnzK5Nwa1GutkAwGQapDMA9TpHkzvaANMFh83f8FQkGF18dfYrFtqzYxUK5Ga",
  "key11": "5wAh19fhQFa7Bedo53Vqakx2ozPvNV4N3euZS7bzEMn49J5BCi2cPiyYu239CjH1e1Yqz3Stkpyt7huTJpwh8QWW",
  "key12": "3A4fopPDu7MEX5DknvQNFvht3zn8Cvuy3rnVxRYXd4Fu3KgL58CtyLWBTGctNsFZZM2U2bojaCmubf3dBA2XZ5ke",
  "key13": "41t8WufEhLJnD8aVJzyT4d1bF34RUQphWdjWYjSigDSYQaZeVD9ky4ef2znBsLgZw1ReejmgfJSheNjiLY4mjHBU",
  "key14": "44jFesqnDTyFxQnpueAp9CeyApTy4ruaydBXHUgLg77mym5U38p2Lm7LEFRHPRfujP1GTxqwmsqdGqvmkbFJSJqz",
  "key15": "Ai51Xut97YzqPX8AwHreuC3kXqgJUKqkwbSvyXMysjEmC35R2WocYkr3xTEMgL2frBhoaDpMtHbiMw19NiAbAK5",
  "key16": "2z1N45htPnEhEkcBPNWgyiA146tDy9mZGHPiNt1fexZdhFJVEcuHA732azvYAuUQNFd18cFMuuAopUAeVayR3vJD",
  "key17": "23yQXYi9bs4nfGWewJeKaoMEXW8LAnCGhxs7suVs8dFxiDyukNRMgzJn5B9v6YvjCYeUimLKtZDfF2dtHEhyZCQg",
  "key18": "Mbsy7Ec7UUQvXY4DEtKSeKWbgYxP1q4A47Sza9rHrEKQ4Dk12ttmakECm7FgVqV9YsLZqCfmArW7w3GSq2CZqtG",
  "key19": "36m6oULYNhWq5mmK3joBsygAvJojtjhj4fe97TEPGfhWXbxzNSrxjaty3SeJGvct8ovYUfqeF75pRLE1cvkjpDYA",
  "key20": "4oTV2FfknLRh6tGEZZATbJQRziLW5d35GCA3th1rQ6Zys9S5UHmHAj6if2UTzSNqrhru9pBjZrFGLpHefaRcH4rU",
  "key21": "642XpiKY9UxNy5qXNabb6PfqMxNXv9HJe5t64VCpHC7XtjJMdw5fWDHcVSLKSA2KxQ91oVEJG2GDhxoTtoZdbRN",
  "key22": "37CuTae1GL2XouX1JAJwq4XuBvjRTrAc27XtxoRpmvaLt72rX3vG2WsbcvsPAVS86Q5LWidn6aNaRtnv9gTrvLmm",
  "key23": "444XxZvcyfX9NTm4aCwFs5qJhtytgNujAV7MaTxgWtyeAsYEQUvvjj7YgTN2YMqwHW4RAneAjjkNnpQWEeZSi4Gk",
  "key24": "5qkuws4TdYCp6Xef83yBgieuDULA81btjfP1MyuvUB955m3Fuyzvof1663Lx2cQJFB7B9N4gEg7uJt49HQhN1stq",
  "key25": "2oYdutFnLPJA8T5ekiBLAXTtHbTRmgT8dkQKepnHhWQ4csTirdEX96Kqcdg8cTHUTaYxRMr8sgHCLihD2VtAsVWb",
  "key26": "vpaSUDuZ5kjKbUrzWfEEsYMid35AsDavexew77ACWhSAoGxAv1jsVSoSY69rnHpVq7V9VB3berAE9JUxsHHe53N",
  "key27": "4ioPojUy2Pfa59CZfp5JxZm51yozovXDwQBmW65aXbR8DY3XkENCNMVkC5ZrfHcE25x2ufAjWFV4FLpeiPsnw6s2",
  "key28": "UKfVyz41a9GbutaTYmuNbYbTksYjrVCekiKhfn7fNW8sb8VJri1LagGpPddGDFMmSYXiF3Nsw148yPRGNpbYm9m",
  "key29": "3oxWYxtvBGMchXrXphpd5SrxkJVRPDhYxe4r2d56JWCzS34xAP12nhTUUvbAbi1DRwWN8huSerASwZnZof6J9iVa",
  "key30": "2kwNWJQo4TKjgvfrN5nZKUtHKaMWALMykdMezeT5kPNQpkPAyBJZ4sDcaKwBCyfxuMaq6AZN7eu1L737RmHZvrmx",
  "key31": "4eENQL8rKxb7fAcpN9MKXSsBuYAwm4DyjgDtTZ3tPta6L876orN7L2twYo22nKLEVyj3s8TNHNvHhoYuR3s96WXU",
  "key32": "5gS4d4NtrNk1PmpHKitAUbLHpsw4jRLBMFiXQPTxSh4CxhhJRYoAoWfA25fQengFQxkKfiKKzwX8dGWUdYcY2yfw"
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
