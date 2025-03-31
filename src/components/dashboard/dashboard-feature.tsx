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
    "bFzYXCmVHtYh7HefqmuLpVkf4andWj4iDAcS7Utat8hiuRW14DmyegVRAzaPB8r8cF3zHnsHL8ykyLZzoNkvGeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVfZs5MwBuP91vTdzWBo51TX7WLPWCa4gvRCc1xxdaeXKFYo5Sxx71EkkDU85vonThX56Ldq3bQx6HZ7pgtP7BD",
  "key1": "5ZcpGthRp8X1Yj6VJEKNWnTkwZNLTR6TG6fh6JyvPwx2s1VZUAD2JiDSyD4jxpV94eYxmmVTod8UgYuCt2jwHEYK",
  "key2": "4F7kgKoTdmqPj1KLe2vYkuXfHn3kdsrPB8h9cZ9RV8WrvkBCVGYFsMgF4aXnyUuaywGG4WoD99BcjG5d9irQb5bP",
  "key3": "2uPEap8WGuVHwvQzjbWoiS86piEzowYmfzXzkhGAhF1yZCJwHdRnfjF2VSmSpnkCHMX2SdD7QgYoE8mbx3mFN8p6",
  "key4": "4u3MZ378F8K1LzCJmLzsf5xGtFxgcZ5K2nPGyv5as2K5eqPVWYs8mCFeyo1jVcdP6b5sUjwUtsQdwGPqrjLQJmjo",
  "key5": "5y2aAYTW1RQjoXSPQXwZtiv6ukrT6wYzkMDx6W23QwQUZ3H9eXNLBz94mEuZQ5D3nLsf7SxTTjruTMavxZDFmYRp",
  "key6": "3k8mSzWZse6wkrXfjQDZekNDk2xaL5UAYcMFD1HjYZo72wBXJ5vzTar5MaKXFfWtPCZZfeg4zpBBF9Tq9tvb4ovN",
  "key7": "3M3LcTBxube8NdLnLzgPv7zvSviXVbof7fMNhRPPWWQXEjQq3EdQ8JC7WVDYqBZGwKsGgpiSZxw6kaY8Ag2HQdfq",
  "key8": "5RVhWNp7Vrxrxyt9Wr2XhezjaycugnRq2AbUvhSF1Y8aNBU1rXVDrXXYHAmxJQG5j9zHepj24xL5ECfyaSkaGiUt",
  "key9": "Amn4X8SqSNXfkkTcmw21E2rYnkVcenyU4y2F7hFoKxjvTf3KgGiqLMuFg3aKtZMzupueE9P6UvvgZMdm2ka6DcP",
  "key10": "BxJWcF9jrrmJzsM18VJaAwV66oh2PhCao7BkyiECP58o9BGmZjYmFiZcvsbRcT7uLXWpzHGkG7zQ4jMMsinSia2",
  "key11": "5izym3nMJ4ZzCQ9GRUP9SduoCjozbRFSdhWWxCZpXEnZN64BCasuVVffX8Jepo193gHCo9e8ed7VqBo24dh4QwwD",
  "key12": "566731sR5uQ13K4fjnaBSBMKqRYzDeXFX3TnoPxAjwSbSvkjvkAb5ninriMVoUDhWBXZqqAM8eo1pt5svoHa6V9A",
  "key13": "HBHY7iu2ULEwWH97bZphWosnzP8n5t9HzaXUNXPZ6Gmj2rfRxEN34VYbxnHvNnESeujGFTyLAWcZAAyzRK8jQuw",
  "key14": "65Gs3G2UDZZhe3KQUsmTJnLVFS8dvXsSZGKeDJpA1WdYUQp8pgyvCKeSQKL3YK2r8W4w93K7unTLCusavyz93Z3L",
  "key15": "2gLeVUNpmBv3eoZH5euyrAQP3BEmoigaEg143LWvipqtaVnEWovddkNA2C7eJ6qtZETpUnE9GZzrH7SnrJ2DYtZB",
  "key16": "zQ8mMXayrQyoDbKSDJmSATDtGvLGxc6uzrANw2iVEJrnkJqC1utXu2ec6kzSZcb2mG3TU1ShtfpGRW2taT5DyK8",
  "key17": "43vuJVLqqJXVFVrFXBfF1MogGLqUMK8HcZXDy8S7BA7bHwkYy4PBAkW7DpD4rryF3k3vMGrGCh4NzJYxnU5RV6ED",
  "key18": "5WMTwdvpMN65EVZVg2aGoDfCWGgpite2J5AVSt11b3ve6JHSvY2oHp1dSsaiMkcUM3SQeRwmaBh8dkjjtsxE4nPU",
  "key19": "2J6xHbzECDew4vZTtQZybzeAspL3x61rfZBwxwQW2HSEDXQxbe9uBr3NDjPFgRw7pfp4tJ9fWf6817JTF5w99z4e",
  "key20": "2EdPNY84tEjVh1gwtCwo9jMVvcszndBtTo9NfwFeFrus8ZyPVpuyNNPwxZ9BqVP71DfsteuPwnsMfFByg9zbz8SD",
  "key21": "wggoCuSSjo3AuuxwTDvF1L9hufiHpMkaeVWvn17jQ2vSPAXb1teoDKkjn1nMM1Pf25e7PUhywWwnsbipUN41K2f",
  "key22": "2gDyggMb5tJreCxVPAL1SX9YA9LpX7e18gJM35kRGoWbS4jZ6D4jPm3SD88HJCLrXK9U55WDdYQ2cBiktkbkJ4ub",
  "key23": "5KFSbnkPrcdbtoAFXj5eBWULfLaoeD8qxWQVfR2x37AHgtTSWyzn2ozG4cfDa93xadW5wyYr4dYum5e2qL753J9Q",
  "key24": "aCoELH9yWkzq5ghWQ4yC6YFTW7QdYnR5SB53TeHp27KnkB4BfgJ7xHbQni79fMWLFscVP8ikiNqCFX7gAqnsedR",
  "key25": "3KHyPZCrnq1uN9ypxLonNckkgz8jBa9K2SbWRSsTuqz8draMFKLynzozLmYKJQCdMTTNvX6NTxh2Qe46Dah5EFPy",
  "key26": "rwkt7jWvX1sJG7kmD2CArAmJdz5Ljy3oG8kjoUqhoQQ5GcinSS5jRhCg3TXomBtYEZJSiwTgYS5y6naeruUK1sU",
  "key27": "67CRYNR2Y5tbPuxtMpMLoiKDrKeenBD3QzjVsJC81SBHXtVf9o8TexJAVECWbwMw53S8jKzJMCUESftBxVxmPaJN",
  "key28": "3jZUtgThcQA8gvC2S8HCPyyXFWpATcjjqnzeuQyJvAscWF36dZuei19GVSK8i1PRsTDW1gXiFuyzBQRdWwqiMEBf",
  "key29": "3oG5e4GCgAimzLxHGp9KnhcnFXynjirHWvVPSDWbPwE4132ybevXXCqYUGehUn3sEQLAYX9oAjmEZEdpveCA7zaU",
  "key30": "4PqG6gjg6UKmdKZY1VcgRGjkYY5JpZo576NXz2b59oJxbKkyrjBSZxzeY2F94Az9vE7ydZ5Ca31bpAiUmJfUgqxu"
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
