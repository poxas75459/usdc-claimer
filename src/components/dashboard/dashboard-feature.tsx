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
    "28dqjyCrTbXhnyHsjfWuTePpi2Zng8tHC5F6Z2cdEX6vKKJinywczNjM9NBy668Qw5e4vA1ba8UHS5YQqaTEHmTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VfDANnhMZrppznmVzkUwP6JmanmdyLSUyZzhmVgdNQsxVCrmhdNzzASvEAqK678nojqeAmR7b9DQ5ub8Zoid39Z",
  "key1": "MBoz8zevCCfEdRVdh6jsxGwdFDo18xboJqxcosMWmckBMWoptBVFZELwnfitfgsJEKEzezDVpy7gmHwbrAz1AHG",
  "key2": "3VDuywjDqxg4nhitmHNSZn45FfTsMcJbhPjiWGrZ5LzazHpwJF4fgtm993AxMTkb3G3mDgWAhfwgZxYdRRGJAZH2",
  "key3": "4zTkHvbciX8AdV6g3VyPWQZiH687XZRXGLXVc5DbeHhCHYu5H227t7EDcrc48bV5RqeJ7WxCNDsnKXLJh5RJ17a4",
  "key4": "5BJKKK2HfU1YyRE1Rpd1Zheoxo6YU3Rd9AyeZvwHoPYtyXcXDdZAtoYt9SvcGMXvju2sZvf8KbmyEMSuMyAAfuKY",
  "key5": "XqiPXUj8caxD9xcM3oetSgMToLPFJaSKRDbKsbkN9dU3T1aR3ThuMHjJV1iLiqj4xs4Hm9FSbFwTKHCTT3fWJpf",
  "key6": "39tVJG3Sbgu813syi14aDXFQs4pUr6F6TbsRj372ta9fw4WGyGeZKGLMg8EK9ic5W3MneYRpc5MXMfWamaNptzd9",
  "key7": "4VfWbscxfNuUvuMRyvy7VcHCDDPv2P5Qr5QhnbjgLegxtdDKvc2b6v77KYUgUjnWbtuaFauUvpJjojTmm9aHK5sx",
  "key8": "3KsSdY2NWausFMXsTRpUmM1P8RJLWaxcSvRUef6LaxNgTEK4z41WhWzAfvotadUcBKzK5vShm8GgaKUvjN3fsUMP",
  "key9": "4UCqeq6FXyUu6F8RPNHXXEBPSxdbjn5QYLQwuPTkrSdDcEn2tdmRDgVoGozEZj7X6wQzsDESfYy2KeprVYHouQmH",
  "key10": "22FYfBXonVYxA3v3Ekyu3eAeK2DeWEuRz8y7FixdzQsXfkqXHMvvXXdmz6Tb4Af8qZN52VuXfLP2JSFu42mTdbc9",
  "key11": "myHxqdp9B4woWV6c3sbk3RTXiLxBfjrqUoG71jpR5ZTnwyq9UR77PeWncnx9Gq7Gdg9hMzHjy56jBqH1jcvot2u",
  "key12": "5YQqwcpug5ihHvCV9zx2Y5FYo3pSMeYVYXQWWKph8ywe6fTCbPkshtw5vZKUYspWwtvdxjyvV3qPQiei2y2Qiwus",
  "key13": "5us1BGQfUw5wy7gaAp4g9aTS5hYSkbwX8Ty6pVsNfX3f4CW2pkqtTNMXSFGT4KryiCVKCbMsdiNjpXwGrL46UzPM",
  "key14": "4ASPYSRz6DYMNGCecwA8bZVfaGTpgmSYvdG7v6CAe42XdDMhcnbBhFYeKNuZKs7uC9D8WPC1WjXpsjxKW2TCKCB6",
  "key15": "4NZ1AVtGp4K6VQPp2z6GPwVfomh4DbhmFAqvR4o3wZokhhQA6gpuAp95Kwa3awxWufcccDTvHQaCqJp4S39wARVk",
  "key16": "58iXW5Y8i6PKEpeabTs2AQYNWZ1cuPYRjuZPYJgGXEYgjv6h1tGFcZxBvyyzt1iQtkQ6bDm7VFZs9gxzi3TAFH3x",
  "key17": "58SjT2NT72ZLvA66EaWJUEijKebwmKp1hMNm2wWeJyWorS7Qw7jnnXJXsneNZJF5VzVKJhNeoiamY8v6hUfDwZL6",
  "key18": "b4jHSDGw9YN1eDWkvF5mof36wXJAnJjEAP9Ek7b9Rmnu56HKdf6NV9x7DzWXo4btPag9trxPDLfJvXeztVMAF3N",
  "key19": "fJvco88FAyHXdDHKmjfRrDuWGVfHnEnjWNkJcwCKZvZxeZgicNVnu25HdcmuG7SeU2jKvRQeZ77tgNWage3KQk6",
  "key20": "JiomyvLWL96xQE48vHk4vLjuLAjF9NRmyc6H7JiUwKUxgfYfdnsrmn8xWEhdcYWbQgjH9aEHEJhduXRUndY1xvZ",
  "key21": "4TwPddxXL3idgKQemFtQMGocBTLMyCyvX1MHqQBa8gDR25Kk3bXQGks1eFKQxK4h9hhmXDrUMU9ktT6GFVAnc1Tf",
  "key22": "4RVXyZBaNre14b59bK41rJfPw3KcyDbah3oTjaBBSKdtaQ7ZiSGR5ratHiMRx6mZvQqvbjr6ZUCaAV3fR4ZRXWrq",
  "key23": "o6qGxxS7CRZBDDH2BXzjxJSyAbkA7SDhkHgDRHTUV6gon3usitUDEGwbDJfNtMwGys5ZDG4J1sgxkYmR8j94nUZ",
  "key24": "2XJq4rALGsmFKMRz2GoL4oetFUUzuJaeEJ2eY5LqyhLWWDYSiwjoi7RxNDwzZbUUWwrkQVcaH9nYpUPXqajze6Vt",
  "key25": "5Jh5Gu6N7F3d5EDpLyfPDr3GMxjiHxzx7KYaFHctPiujFktZ9JaqKh1wrktyKFnDZqLRTv4BeG9JZKAqS27w4izE",
  "key26": "5qLMcqvBZtJaAS8T7ufCxa1hDM3GM6ga8uhx4N96tiCu4njXeRkNiFdUu9XwAQgxCXGDc6eR3mw7MhWsiDmL6WXZ",
  "key27": "sRr5MA4KnSnJBGjEdjK64vLRvzqD1CDxRAvj7DX9aTD1YgEJ6vMoadvaU1qfKp54ttzqJU7fmsFnsYcfibZ7TNM",
  "key28": "48WrNES1PmVEZ1Lx5Tx6ZSw4Vh1eFAxLQ6je1dNhMZpe12FoUXJcQaj29anXYfjFbNdFC2eS7EJqQ1rt4LJgLwdz",
  "key29": "2fV1hPmHv19ScQ2YsS9kGW6jVmgGhfd4EwqsyrA2Q37MZ8KYCVf17MT3WvDQEk4Wh9EYegkioNGdzsMx1H13DYqX",
  "key30": "23xAxHNZC9uqCvtHStiGcndCB5qxo2jYDaSGRffJP8aBFRWT29KNzvEqms4Ty4CuDNEFbGysQkt7CqZnqv6Rc7oa"
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
