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
    "3pDhxbmqkQzvJEDkPoDfRv4mjfQ3As6tEvCUJrpJSJ7pLVhbNe3StfB5GJTRyp92ATHoegjLEj5dEHf1LYoriSwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZLTd79QNmiqAPzKqnUPDSawCansnqTcczMEgxVoQRyGuqrEbmi7Nv7w3ezUCG5XVnwGCMMRjuNy9zCSuwcsbwy",
  "key1": "yj99mozy5CB4gPjAzAveRKtRFZqHg1B3dDB87jtqp5iSTbkYf7VKAaaxdMaH4hgjZFxsjs8YyR4uacWHWGQqP85",
  "key2": "4gBAMdhfHBq5EUiTiVQ67aGQxe4jQabdCK5B9AXvWC1EU9rxrhKgr1dg69kG4z1RvtSt1GKCmcWviptewAbzV8cv",
  "key3": "4x5Y3kQ9zbWL5thnwziZrAsUs3wHpxTpSfz67zsCvBZWf8D2C8i7vc35a2UTt5T1KZcPWuEwmYQWRRVvhefaUDmc",
  "key4": "4BT5XxNC6eA1DGyAE8SG2vMVp94imk8wCet9gjmxPP6Qc1ChhsogBmd8x3G9sStT3SRF3WBKCkGV6A4LrWTyXVU5",
  "key5": "AuAeHyTmLF3811mrXqf8WCFSwF1JaMyY5cJGxNvtZ5ur4CwLvkHCJtwq97r61fSrckKVQDAnjC824WfHf8EZdSz",
  "key6": "2fW4UNnYkEvhS2SUwStCEuVcRJURHYMGWFDwnY6e5FtbBuwo77QxVrq8TC1Kx91PKrxHquaoZbwBS6rbXmAnCdkM",
  "key7": "4gGTUHKJqGkcWhdoyxF8f9jA7s7s1xKXvAuSUYqt4zTB2GMzu6aUc78WXRmdtWfyd6dCDi5hGgmMm9TMSX7jowBc",
  "key8": "2H6D3xPfaq7cEYiZ1Srkmk8UBHESJwsV1rVDoP6xkyMF5FWrfYqYbr91iuA4YJE9fjS6EDVAicdmojwbaJp5JhwH",
  "key9": "5M5Dpp2HUGEgSZGTVUTNYKzFbifqyXzZdkcAuSq1YQHr7YdogQUvUawENjzTfZz9NtM8BaENPH41JqiDSL77JRhg",
  "key10": "5vQBbbbfFuCTze9PuEjuZEM8BqkFNAB3zAB8AvPuFYUDQEUrrhSERkiyxXL7zF7aksGFoe9uFwSLB9duJiDA4T9V",
  "key11": "5C79oRHbxfxfMMypXTSvhQw6Aa4yLSQM9Ub4fUDjU1jTQoeCfjsBu5sJ8Q2A3M1HnhNkDrMyGgDvURTnbYE1J4UX",
  "key12": "bGKhU71WjZXu5fbtf1gqGr3y3TsByJA8akVNP5LU6f98ZwmpB26WoruFQw6nXxtQFyCANWfgU3aDMGC42cJcGZ9",
  "key13": "5YFsVvfjiNZyoLrx7MZLxCMhZSXvgJZfpqwBJNsCVxiTTfNV9PcSd36CWTKweZAJnd5WjsFB1LEAp3xcgLgDkmcF",
  "key14": "374pGLSyCbfu8HHAeACk58k1t4GQ2Y21sB1oCEQqJvtjicSvLmrjYbWsnAtL8YYKxrjnfQFLMWMuPqBrgK6vFtMM",
  "key15": "5g7SeSk9SC1K9Gy3iG9u59LoyoMAA8SFkQbQsaKwfsVoTnBtJ849nW37tsPzJtc4NP4P16sJAgAh9GENvKxWwDXX",
  "key16": "4NERKSQFnRomKahETy3D9xerBe5LynhcMf5zgwkfS4LXjZeQKLnhBS7VF54HWTHZEqKNjFVv8M3oWdME1dzxFRQW",
  "key17": "4KfSZf4q87W8ks1RaLz2eRVLvFVgwcPGEzsukqxfDCHQ2GBVsrAVY3mS7QkCPh4athw964LeuKAZaoTSdsXnQoxC",
  "key18": "4WKpkZ8nF74S4z9n1gbkLerixR3dyiwyLXAWoSX1NhnTCdYgAkKS7pLE1BguiovZomWDgmZJvDfrThAz6KQ6zmQd",
  "key19": "3L2Evg2VG73UZJDGswtfs7JURkVzPzC7MapLLeSRbrHkp9PVapDczJ4y83bPkWqy7Aa6XJrtiFUKZF1ie7PAfyyL",
  "key20": "4EMgNiwAqE6Yy65rjQrYuDggypVmF4Q8KnDkd54aNrNjEyaEaiprZb9eZQrH7h1xmzWctVhq2eFcoy2bsdty1J61",
  "key21": "H5hjPPQyS2GRA5MPRr8xEMGqooJ2CGZuBAa46BjbRLLQD8zx1WzUP2YV9AFzUE9JxzZWnUDSFRTbTBVQDJDc7J9",
  "key22": "3Sv6RqgErHsPLnAmuUeodbYppQFFbkuGqcXREtJ39LAj8JCfZ2cAEXLgMxviVpHRXL3qUkJ51rR7qro4ar5khTRf",
  "key23": "AmG4wGacbQ6TyvYm4CKwEqTYeLHcRNtxdXPEWW3mVMZ9hrriGz5ZmWKbEvDRmeT1RVgb7PtL2ugcFPLx6oZcxSN",
  "key24": "4gQYQHCdPzU8RSf16V44mFyeFJezn57NjjS8oEn3HQdBoD5hQVoQZQU6SKn62nXMiXxWoxJtDC59YwF2WJcXdEzA",
  "key25": "1sYrMn8YkewM7a44py1r62nTbjzJMakjPBFvvTEDx6LsZJ4KZGfsJhPzFw6p1uaiTVgWTizbUqDcXFRhMCU2Z6g",
  "key26": "3ec1PgeEYJZgXFq64gorsmMtiYUo1Tj41umhdvRMCvzCRQkc8ThLMr4fDaTJyY6k2o9xiuZbjZGcvFzLVZCzTRu5",
  "key27": "5G7QEyt1epJ58nt7jNqZVcc8JGURyJThDsjPLuapZ7FKckZWrtaFWGRBuk8CBnApQhBKCqoAsCfncgoH8bHjiMad",
  "key28": "5r9hjRn6RKFWNJSmasEbM9bVe1kgFGfaef7r5ER8JgF6dGFytc9q42Fa3JKwF3hAtom2V6DckhwmsY9rHFNC9BoQ",
  "key29": "3DoyZ1nRkj6K1DTGyjUtYLEokA7oZrXra7J3or64ZLmaNhpy8FR7CiUqXuEJUSMSstFogktP9Q1L6VRyC5bK7TDU",
  "key30": "3JPj78Rx242TU5BwxGq1pzuHAUsFpxeEMvRYqT7H9S3XF5TEd7Z4yb5kRt7cfdKhYLZaADsTjzNg2AQ2UVqa5Zha",
  "key31": "3PkdPHu6PFAj8VZJMQAkztKiB1eBg8z8AT5bxu8TAfHZMRDSTJnGoNLh8XAVcUf91iDw1DdzsgRQkZP38Vxt3YGZ",
  "key32": "5v384j1fERffxjdN4VCNzZPXVu9g63Ey9jhPNHGiBcNs9ZhdGnMbSzPuayEDE5YZkLrQtm5a9D183ZHM4Vdn3YkZ",
  "key33": "SXuK7S7jwwfZkht8ktVAcAhqi1BVQux9hjy97xHRiXM2qk8pbkT5rpEYryeUye6owuDimcsUwqrAbFSoXdSKkUr",
  "key34": "2ED2937Rt6esuS3Ngm7GQHrKgZDX948sY3Myo1RbkxRUa793e6sqDaoTJHirVGCyWc2NSBiDUVZf4BMcWeUzZE83"
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
