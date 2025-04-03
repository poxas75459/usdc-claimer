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
    "isS8bwsZ2KDWuu4bYkbtn4yLr4iVXPjvEbhX2tgHEk4K2qauLavMa2d8htCR7exy64vAkT2Ad3ceP87BC1p8vco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZwMdUPWqsxnZjzvqBJtxKjvprBJZB17EYeC3CtPWJGUSCikh8TcKWYhjpWG8fiK9g1WnGj4cC27Bijqu8GYNiv",
  "key1": "2YoFmvZh1zdyhbbcEF2oXmwDfqB4rwtknRwizuJe2ESDJNfu3GpZTjZY7AkqLdo9wayTXo1vknB3xL5XFeFCGrz2",
  "key2": "4B17fZV1aV9AHyUKwkXDuJpjAsMZEcSTFk11QdfKf6tUP5mqe3PQrTMJmRuVNCERNcZy4ECx1hdovbscq8Pmnaij",
  "key3": "4de9VcgFTHSKbBwnvf7VJYKB42Uz3H7aWJWXejd6he1bz47LDqGvRNcRqYRh4bGeNFgbnEjZ9qNzc84UX7PoXCjS",
  "key4": "4ofub8dGd7Am5NZrZh5t8Evjx6VkL8KqQVuxDPkkdiPSTQoQ36Azz8BakNRTHvxuY92g5AM5v63yKnEMTgnHZXnQ",
  "key5": "3o8TYJUxWkYukXa3UZHMPv67RHermSUsJzpgNiNhziQRa4ZjSgN7yiY4Y4iVpR1soXZKy4b7HBLNWHQeiUDYUTzC",
  "key6": "3itPRHGQofwfKcfsnNczEVaYKwyMNM4UZG1KvyVdxJhy7gnrXTdkyHF2AgX3zciQxf5bcxe6k4XF9U4d6EBS8ZYb",
  "key7": "ZAMj2Uva8cwywY3MLcscQTK5fEQnBk4v1GVQPhtpY5NZyY2bFj2yofadK2gbY6NsMCe7fLwty67ZX5JXu8GcNYS",
  "key8": "5SC6vgTXGYjffLTs7wQfG2pEf5D6GAcxPhZb6CAammCUcD2v4ToHMUCWnueptL7zErXymEijSX9DMFPSNXNT36Xo",
  "key9": "2sGKjW8GDHQ9p9iXfr9bywSDSAqV5gtrjUhXywMGD9jaQiD9Y4hZLUXciPGQLKWq4wq1omzL8QdF2Y3Nq6Mi8qVv",
  "key10": "2DLttJtqdETKc1dFfYLdNSTmNsWDmg3D1dHiK9YZs1wjaMkdP6n9StZdhSpWe1BRY3G8TJA58LyN522focQJjPoM",
  "key11": "5HGNH4vTtbkQv7BFAihKeyDHUxtWGBoZSxUSpnExgawxEcXHS9t2T6wznr6M6gxfvzZ9F4BPr1i4C919yopSjwxf",
  "key12": "5iC1gbbMGxV8yQcKoqY5KmKvsixPjd3iTf3kSGnTiWXMtojW3fsFiGbkkbghrYdFtoxTfvSni56ASUdqnAUj1nfZ",
  "key13": "66Ju7QjsJR41wMQjfeGryB3yyupyqy56GPQJsStuNFtMaG5F2ExCZdJtKFYDubPgYkTRmrRUELQruADC1NtWWqnb",
  "key14": "CcRCadtbkVrzjz8TvfFyxeSmJvbMG2PXfbmSiNNB1J276VZx7oroAZF4EoFi8awPngrJsQBEV3Xetuz8HzZ54pe",
  "key15": "61DsYmZuAn8BpBWoedpadrYZeKe5P1Fiz5XTWcby2zX7pTVeiJJ9tHmqcwjJfVFuSHyomd4y9QxKj45Yu4HaR8WH",
  "key16": "pWnz8EYD2pDzb1VccvfYVgtvR4FaPUSfTGS2ZKgVRNFoT9tRN2iBnPA2FUh9jX7jbBLUkWhj1EJJh3itpMcEfr7",
  "key17": "3h1KqBGaKuwcv6aPHDUEaLVktjzCUQkV4JXE8twQyvmNmtDVh1SGaTNKy8LZwAdhEvTjcDFn76kcWP1ySoDZ4syt",
  "key18": "2aG75KtpfaN1ADmqmTxzyAz5d3KQPFQxFDuJWjfYPRPaxr54niM2rLsA43cAZVfG5adMBkG1txE2gAZknqBXiR5o",
  "key19": "3TdmQFu4rzXZef2Hho8TMqbuxcuyZsTPmGvX3KSEMspwjMmDrWzcc5ZLD9FPmrxNDuCPLmEcURHLVofCiF8UzWg9",
  "key20": "knytfo9Ud76FTztDcaCwpBEezJZxpHsfQGGnUc3NZGcUgKCZXzxQQrwsZ98eAspYx7m7hbLTGRWVVoeHLpwKHXe",
  "key21": "mnWsNbhBWnfjedd2YH18g2cBM5SBXsZm8g9KiftaBmu97xiX52JhVFLo9VRGkcD7GmvoU746t9Vc8JhgQWcvsXA",
  "key22": "KVckbT2p26p9T6hdxb2sEHXr4myPLzhmuZwWFS2ed9nFYLMi1QL7R6pNUXCURAydc7M9xgMTwEHdzYfZtRHKeLT",
  "key23": "4YM3Vmb2fbkf53vPqjaHH9YitRaCjCC3aVCMy6LBYm9HkuT1Avf1DirA8QrXLzemBpQgMm9znr5P7SZYrSzVukrC",
  "key24": "5XuwPYWPL3TLKibVVm7xuuZNRV6zsdgXpABV2vZ5ZgxHigCX8YYL63B3aAiVGi8jcangBpam4BxrCaHu5sTmzK8d",
  "key25": "AfKMuwFa4xHUotuZj4QAkWWpyoY1pfvggawXrQ5Nkk1Xecb8wZpemQR3p27Tj2KFi7LuhEprq8WUvf1XTTpyuHT",
  "key26": "4oiFfirq8KvV74Spyfzztnv15jy5rdht8fa5JiYLzTmpvBLYNXD9VQWgwWPo5gYPGYLv54aHR858Js6hVY8Uxhb6",
  "key27": "2ZLzVxfQ1dmdqjzsF1EjygAy3p7tJNa9EvPCTG1u1kvwKQq4wSpL3MM9J41cGNegMpGuVeKHxyT5jAXENEixHjWY",
  "key28": "2pGhfneUvjwbzQhkTkCsPk9oun6E78L3fpZjitm2v5GyjnwfygNZ3MFi1i552azsnHbQmbLJpyKoFaw2fVxQad6K",
  "key29": "51o5E54M8cSrVwEYpzah5j1AD1gAc5gQj7rrqSwCh35phxGjrQHmexxjkaKXVC73UWgYSEeAfxzXZxN7gGh3A3eM",
  "key30": "4AGqLQqKEn3ShFqc4dsLsE8WMpVdLHR6CbeZymUmbPnNPTa95zeKZ9cYDGiyNd5SbFmrHrD5qNH51XMtXQpdTroV",
  "key31": "4uxVAvYFeyLGAi2cBJWirqQ9i6yWUTsaQMXT1E9BMzxtvye7EfV1BbV3Z4BPy8aoeMkVf89wjKPGQuwQXdpz7caa",
  "key32": "5sFtTkKoM71LbLVVFAL3yjPvti7cxA9rZwZRZ6tP19aNWzbZ9G5fFsgQ6rVc8TC1utAcaEFRpkZhaN99hZPbjsqG",
  "key33": "55cotm9DBrqtP2fueQ1fTEZHhT6zNxA7E9keQkfsnrFRsvZxBTu9adFusvGbJErjYHufgLUvYn7e1HkcMH5S7sTu",
  "key34": "K6TSjcWVPNxjhvxhNG2VQqAzwrM551pV4HRjfB8dyKWQESDPs8bDSAAvnb4Bg4m7fVfYmuwXNC3QtEbmswXXzRK",
  "key35": "29XsRQnf9LPgAZHHWkhmByRU2kxuFFyAA2reNzmPbsDQC4yqME2kL43d9bAuBaF3vtfedPStAWZTtUz84GqMfx9C"
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
