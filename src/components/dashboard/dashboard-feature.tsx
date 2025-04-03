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
    "36aDGrVyxfcaLLAvn6iVXwCFyfgqv8XQjD8tHBvNFdTWNHbwKqoKkLyfkgtQGYEkDh4HAUQcAoPSUQGJbMm3CHqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YNqz8rjmbcieXBJ9WvhutvhKzFQNbqqG14Zzw4NRYGAV3G2pfJgvwdgRW4aaWZKpxHsdKV8waySfjoXSEgMoWp",
  "key1": "5PWqrq1uaW5N9mUM8ch75vUkhHvLPEqP7G2e2eFU5uhsZmLh4rGAPTzRCpFaSHWdbA3wBpcVJxbDRJrzyGSg59T8",
  "key2": "2EsSm5RSfS4PurFdVExSXAwMnEb956SRGJhkyyMH1mQQHot3pYCUtm3tBQCj6dhHqG8MrPoToGxcxk89FAeQNTA",
  "key3": "3A7MR2sYRrubtVrg9ARRgzmX1HvE4jaPVSYGqhmdvd7ff48fLxR9zkB7352174aakWatASCA9L9fkgHiXvBowMSo",
  "key4": "4rcHcRPaEx34kjEUUHeEhTRuKevPdYyunryQCW6moikMujY8U8ALVuY7EmK5dPtceaTctnPvPrPRr4wh4DR64wr2",
  "key5": "4EWfG7bx2hfRix94bLvtHgRt5Bji3wJMX6vutMunfC3wCKoze597MCnQ8fyqAoNqtp5TfPUACxZ5eKC4kDdTx5Hm",
  "key6": "4ZBrojgTiJr2ETybARDL2QmCmsEfuqCjWdtS5GFwEDRd5YRgExhMuosvG9Gn2gHmSkfCHmoz48PdnoqMTtWcYcA6",
  "key7": "2ceTquTYM6WeDXaBYKE4JBJjHyehbr8ADRARzCsbUkWWFrPLTp4rsX7cxZu63GY4ypdeRR3mAzEhpjCHBGpPo6fz",
  "key8": "3KFDXQm5Ezqg75jwpqqbJJByaLJbdHqLkyZXxxkL3jNW7QSYKaJVsYwGBrNj3oPcDePkTsfXPXUzidg2HB5AEmVj",
  "key9": "RcxFG7YsdTkCY6Bt9vZ3xBhHTnvce4bPMmrxHaseKMUQBq6xTR43LrtmMubw5d4J4irrKYarrnRJgAocxXq8DXA",
  "key10": "3kGC8K7AKV2UMcihMyDEJb3FGL3KEkdWvyj71RgB89vQKnAAjs5TZYX41tqoswPf3Qt2rTrfjmrWyFmwKRTmNn3G",
  "key11": "3K92qGsF5VCM2VyRE1h8pBzdDnPLcZzzUGdStMzL1CqyJEggFezSHqUh2z3NDxFnkRg5JDEXK9SZjCijrifz1MtD",
  "key12": "2W9C1USjMhNECtUVCjfXG9oUiax3Dt4qz8LUaFES9MFAxKhZrGKCwT8qZgDd63iWL13qr9iAjorTVqYUBYirA56h",
  "key13": "25VR4HYXyjZLhmGFLAYYAmQkSZApJq1jTqHBguDYAiMhsYNcEWp7XQfxErGv9x777eYdiTGBLrynfkAXBT4xAgY1",
  "key14": "5uYKKtZ4kZf1ftedaC5Fsm1HVMjmctXVsc91TLtbHvrhaU3zg1yDEFjpi6XCoyysvtPrjV77ZZRaGhAdD2Mnx5hR",
  "key15": "4tCo3MzaSRXnPcabHSZEc7FjpXySiQjSEtKAovEoDjKDXPAfuZn8SVZHD714sbBTDMtUC2D63874nPCc9ErPvx2Z",
  "key16": "PMiU7KYaFBFNZ6o9PSPTsYfxfCGgaRsGEFKhtqAFJiBm5EzzdC2dSe2RJ9RjhY5VPEd8twqDjtcgncvnmwTFdNR",
  "key17": "5xwtAZXZfUpBTRMsXJZaJWd9e8RET9RmTKRFqp3VyGXMVhv5aoAsZhNFVSa1FZGWfwEqqqPvAVkNTC3wwa6kUJCf",
  "key18": "3ktmbBTbwPeN9Uv9X4RLuYHgwCNZ5JUUMKiZBmtWfZpbCbUADUoguNVxNMUkzcpeuH7LAbds1vyNYgDh26iLTVZ9",
  "key19": "2Uqr7qVPJt6WTCSdVFq1U68XLgnFy2tcSUTg2UNg4jGensv3FQYst9aNnR2yfsqERUPkVXGEtwaUg1fnT3Vvcgn6",
  "key20": "NNRDKtt4jsbHAUUaxaucLinHeh3rBzfHS4zsdEF3zg39A1B56JiGvWDE3AEfBMt6pVAsfSJMZXzvv562pdWcSqU",
  "key21": "4n3RRWeD7qGe39Xk51W8C6GEWFdrFjJDSbfoVonLRtgogJDj8x3rvBufXLYVZR7RqYPtYPwuD3SwjsKLYaNBq1Nm",
  "key22": "5CBdirm3HS3TdZCMfTBK6Efsn1KGon88xWjv7onNUDvv81JYuCJdhyDDh14N2vvgL8SSrdsyLy4LRLxDZVkfx1ZD",
  "key23": "28SfnSLYFp6Gt1z3n9bQN4Xhbf6pfqa7dQK27D78XNWfizxSZmVJjBpQtckuhLnx8XgC9YD4uuByM7Q51mLR5KX7",
  "key24": "28zcA3Dv54bDFeTRR3Wo2diHs9cpasv9kHaxHZRPNKdL8aYg3YQS87qkpYS6fJWqLVH4nFxByYnU33dYkN24mTYj",
  "key25": "5x7Jr9KXpBsZZK7xQks7KJN4Xn1NnLLizLUdnaFt361wpEnSoefJkAhMpwVNjvjmAoop2Cub2efu3yHmZukiKUqH",
  "key26": "5wrsnUH7rE93C2mS6CHRpgTLUHyKQ9KYKYgzUuy8LM48DbDLrFH7UzWLYJEx4xesUYfF6ZGpD6zfn9kFy8BWuETy",
  "key27": "3VQfqgwWG29sUNvP9UZ5VVRunFjwHfDmh8Qj2PFvadpreJJ7aaCT7L8Siu9p3nnkYtFHsLoyNy3sxM1QuRfJdPVk",
  "key28": "5K5iHMvh2eqeveWVD6UUnACjncBa1eLUTWC8sJpPduSiCQ4zGsjHVJEYEMz8zvdTSdb1U2uWfj3gdYu9LafwdBrh",
  "key29": "4wUwLwP1TgopaTxJEi3hUSKzJroBCmmQjNQhwBJ476ebQVumqQnfxrgfByRUmaC9qwjosFp8Y66qotQB7pvoPsHz",
  "key30": "4WE52nDscyzTJBBFD5ieofhzsMkNCayLNB3sq8aoDBqhc8n7w2J17UogE9ZdLrWyma4WH54R47Scp5fTtuxHoN1w",
  "key31": "5f5iG54E4yy83iaQSmG8sm7NoDsuwqyEhUYUcJbjam68osKUcXX7c2Zanzgx3ZjK9xANZETv8ACo4nA9cDF32VLd",
  "key32": "4EMLAHWx1Pb21TwhV1X9E2M26vM9B3TWG4uwznjaGVRfH92SmKXpKeDRhSu88JAtm8oZCVjipW1Wjscyvea1WcR2",
  "key33": "4h6KeCX7qmXtqSuf8DVTy2j3kteZ9gJgRre1Q8MDgBqbycD6qZM9FgtuS3D1Fhp6UBt68nqrcvfbxFGr9g18Tw1v",
  "key34": "5k1gACwfeAcjN7BFr3nWxExwvzRvMgvZjMjD4P98KhtoJwcu4GPuBJD9UezNWBmTrsbX3i79oNCbgnRpq1zcUsuX",
  "key35": "G47ZAwpvkCai7Lm8TBKrjVW3Z9JpCAN9N1T7gcm9EEXWfr2knJsGfZ2qavdqTdK9Lsi81nAUroErvqQBWtY4rEg",
  "key36": "3esMzCis4K6edneL8fsEXYg7aMr9gCPwB8BTKgee7852hviJ6vsWFRA2qSJfKTdphPsCN8Aq4Pf1sWJRR5eNfRBX"
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
