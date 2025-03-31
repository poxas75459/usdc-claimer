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
    "4L6kHFoxRjkvHh2Zzig9AyhEi5ojZaT7U4zGT4toKiqVFEuzBukj2FNpBzS4CVrBtaEeS8weHSdrHA1Wy1GQNzpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZZvq4NY1T4UK8ia5i3jdpmghUwwLsurAit5RnQqpcgFWMq8T5amRjmFZCtCtsPnFxJpFDL2JnxBBaqXE5ygBmw",
  "key1": "2BzMxKMCAQkp68H8Zpie2Z1EpmoJmfDKyUrSQrM7B3AyMpGWwoVZSrHiufktLHQLzWdf9CYQRG4U4w7afp7Q3e8z",
  "key2": "5SHngLyhEpvUFYJTmfbUk4LMwQkFaypkjPrfekAZRZoXoWAc5FNYdM2vM8ToBcmt4Jhg2F7K3EU9XhooJwKCSDBh",
  "key3": "29f3cPtumKMUntAV7hgY9CXufgoygBBAXJfLQmTEhmNXo1dHYms66fNiDPsgbjyDNZmRfsJm7YCzRwCP21aYFtEf",
  "key4": "2iGLjLaEYhxpHWeCLXZfLB2G228JPSFHP6fgQhnLtAXPUELPac4nsaJfC6JAaBFVQ6Z9SYPmRZJg7q19nYF61svo",
  "key5": "675KbXTBYVj4GZBgCAe6aV4qDmnbJhm3mKFtAZ3khmQ8gUpeDtJucn7RHLY88XQQ9HkY8FWUwHVF8AJhYee4TsBe",
  "key6": "sxG92fcX5jX7PS4SLqgnz2S5CzmfvkraDSGFcwYAXKHrSF8jbF223EiWnzVYhNCyjSHWZTTrHiYbtJ499s3RpoV",
  "key7": "5BZj3BPbyEQ9vt8DP7MricJkSnByvoqPXidFnswFU686ErirNLGRr7V9dRg2r9g5zjyU42Xmf3QhNYRUcmfeiehQ",
  "key8": "9tA8f7pzJb9bC7NvwrqU5qEzo5PMRsUFyCAARvxzaLBHPLj2zVv9AhfD3zGXKRJcWe9fvNWSvaE9XvQ2ta1yX9o",
  "key9": "3A8Z5kG7ZDniD1ipP3pePFv7Euvv3pFrmvRvXvtnQX52dXa2n8L1wCYxsbocDfiLKazDjmJcVNPYV1CidscWBpM1",
  "key10": "3psDMJwsNj9TpEfxdkeenGrDxMwT8qfeQZ3Uren7v9fAwifRReHCM4rxanRPPC4Ca9xVjnBquMLGcYrUxG4Z61cH",
  "key11": "5oBsdMcKmicKSCdhT1vJN5rWgw8aT87bCu9ZucyEWfAtNz98PQTxc49CjhxPESThU59MYY9vNJEbLhVxbZ26KwW6",
  "key12": "4i9ox7uiWAF7JHoiDoNRD3KK8UXnUxWec5b4Pfx4Amf3Z35DSJCL8NBkJAMhgYGYmtUYCnPnospNg9eynmaJrj5p",
  "key13": "ghBVpVjeZrsRDmKcrXzFKuMtMi6DSZ2UYBofoK8roiBkR9onWN9nbnx1LgEwCdShrJFbcE7hwDPJepMnHsVymhd",
  "key14": "2gGdqf4Uw3LkRWjKQM8wC2dgPE8WDhvjP3n9fPsMDMGuEGb9kyeYe9hPJptn4KP8EiLXsjhVUxEuubHn4oEcGEqM",
  "key15": "7CsHn2oiJjD7JPzVPmax7RtjYnt7S5NYaGMrpFCpqnFB5Zn8ZVL1hSrmFegtdz2x4cjSYCLH5L2DN6w1su4AtJJ",
  "key16": "4msUHoQbSQ4x1F8mHM9MPDZxPxpQWutBUwW73dM2N89FT8zD1qy9G46FpmroFFoMRjFEm7DSkhyJtLnrk2jypFbX",
  "key17": "DYTzUxtHu9Rj6a4tL2cscD8WT91z41TYScQJGnLj8kkC2XBXWADzVLnQBSAnFn5ywWGkuamNA6YNqFsWng6U85D",
  "key18": "4Fj39ZgiEWSU6R3N3ciaFKwhSdRXbqiLELkMrkYY7DurKxm4uZzgQ9PxAugYfb3uM4fYtpMjM9NePx8P7gL2FGZT",
  "key19": "nHWD7YsEU6VQnuzuYtcJm8DAX7ft9N2rXfHn6bB72TyZLREN7Ct7eZwm7KMvW3bfkpUoRSDYz8GfJhVQtTRb7ZP",
  "key20": "7xG3UetH7it7aEYxahmw7XPfGSsqqtpgPL13G2pP9iop3ADZb9iMioN9oEF1tUzomfhyjPGYr5TPT1T2BcoMLTq",
  "key21": "2sZbwWz2KGeWDpoRBWKYYoF9oMmMZgikcfsybViigQXYXFk5MZGF98cCQ6mn2hqsVXe5sSvachqtw3vMeciZeejc",
  "key22": "3PoRTeCrsyPWaNWcjB7JN2umAq71P6zsH5WZ4fun4syzwgoi3A3JKpCVQegR6iuTkgnKoqwNp5ptxzwTHQbYtZRP",
  "key23": "32PwwRHcqpCh9YkxoQcsUoozLt9bDCFhizEPpgeRfL3mPziqXkqQbFzNbVkoySHqcvFXNy68zEsbJHUqDjyNuFUB",
  "key24": "5UL5qdHmqgF5D76LFjUAdafoHo8BRx9ag8muHuu4CpTc1PAj4M1hxXaJJC6RMGHdsy3HYoTCEyfCFmMDYe3wsEY8",
  "key25": "5VUXzqvvfxp5NpikSyrSxWGgy9vZgKhNip7xsNkMBFQfB42PiFjTnAnEYFoZBSeBVnNDzhA4cqNERSFVBXGZWfVa",
  "key26": "4bwD7Qzwc749DuxkLQGPNum3x2WJs3JBcLgWYn68FtSZZLxFue6f2DEzKWef2qCPKjzjHm8dA2PiYDZyLZbnn9Hs",
  "key27": "4vvnRofccets6b6AXEMNwayTft4sExdyWawDqckaWokfaRNNQkTu7vmPeM6rQsd2YmnEvjUUQCuZ7TK3anfM8Hhv"
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
