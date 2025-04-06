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
    "4oAWdoryySqAqrtU4pDsH81bkWa6AuZT3xkNDj6YvzUkmvaRZs87H1R1aoZfWNVibNyViEug8omLyjyL4AkSkBLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2Tk1V5ER958jJNvQ6BGXAEDssPtD2Pusd1R732Mbdbi4NBKS4i9nbYjxVV4a84sq2gVVUYGNvmLdqxEDqhy9D3",
  "key1": "3Y4TuLHu4U4hhaucAvS5w2wAPFWaF5sgFUDLV27weBkn8yAdhgmGHjvLykPWcSXXRH9wSY4Zv6D4iRE9LdDhMFGF",
  "key2": "5s5VvWiL7E3R7o7cph66Lnqfzoshi8AH8eLM4RMNTx2wxanQyMfXZ8AV8RnHMFoNBrJ6v9C8PAvntVwLcAAbTjmL",
  "key3": "5PuPwQAhrAMMRBqvY1w63w9sDw7CgQoupHmqZLiJrYEcR8zs8hmcuV8EFoy8vHezjtibAfzcvoYBmeYdBLhUHQUo",
  "key4": "7ke8fec2FoCRZeFrqQouFZGZq5SLVgjgkVqwpt2veBM1k2m1D5SZ3vmRVkddb8krmnVTCQMW4W3utywhMgNKYAt",
  "key5": "3FxnFhSg1AP52cjHAsUCfQPYbBN8kC7SkHCsyTy6YX3xSgsNqmNPRbjdiDPq4RuJ8XpKb1x1rzcQiJnW5sQQLQCM",
  "key6": "2LWw4VdZsR88E7JPrEskcKUVteig2UgQ6sJ8PJ6QNNWhgBe2fZbd6yW1GdBjmCPoEgE77wnsZ7gH4U8HpRqE6Udw",
  "key7": "RD5gt6h1kLh6YU5jNCDYDdbbYwcgFHrVFrhqAxhf6Ywe7siyB8ij5ooYfU2Tr8Lhrb47dGL5T6vPumnVGK9jGsZ",
  "key8": "5x3sFVhkjfsP72Di2uqFuRw1NvHV7neMaUwn5NcfSoaBAJ2R2p7vCSTzynKvRYZHS1zFZ6Q2EykfoPZBKAXPQ8ec",
  "key9": "5YhwbvqHyQ6fvfc6UnLkLsXJnAw7ya7Wtw8caJc7Up8JpFLAZnUUPsK7JiqVNBoiAxkBrose7yN5dQj9ptGL3e87",
  "key10": "2uj6UbJW4U5GqXLWRwshJ6EmqNxyCnKDateie96ofwE4m5uKPp1x9WDaY512dtHrkxAGD4ZqRWMX6GHNRR3UFc18",
  "key11": "2rsGfje2CgFtRdPauWAgrjrGTyG6sVCKDyJWrgL3rjD9BdZ3fT5vDsP5aiC1UV223mTvA6aV8chTpw2sBbjubkFX",
  "key12": "5A5Cyv5ngaKQemLPxTT1HrfFsfkUqmL2tETDTTBtQBcmUHCQMBPARUgsXzVgV43hHvH4SttuZP4g7zGcuu6QyXZ3",
  "key13": "2ACKsVmQQq8XsVJwTe2dzpcrvAGnCVoKchsbdQn6cbCZtkUiQLDJz4GijzVU3Yn41mH6cP7NX32WF3PiF9dHiSdF",
  "key14": "bhTMLLMWXkcrgP3n8vgmQJQbzTuPwEaKXXXjUTRnFFTvmpYnRk5cbF8SsoxsJecBPQKiQhXLcAeSMtLNQumWJwc",
  "key15": "3ZfEqtugWUdMHN8Z2XWSSaxGPX2jmXoHCxJWbfqKxKWCPhbDqBWaXNhgdyCPTac5w9BrS6xdZLRoTBv9wKrxAww7",
  "key16": "3mmmg9rhwPxjESkfGCGELFMUD6AxRWxQQw2Yr9J24SA5gp8oKPrGGDurTuJ8EYyYa85cg3yD2XDqrKvAxP4wdo2Q",
  "key17": "4L3cPB6W2VjR9DcqrZ2vV8p4UNyxFfGPg7Qt63fW4eZNJS3TLWPveZVoQqvC6WqgsSag3TfaeZBW7YWzzf5rsEvJ",
  "key18": "2bx5UEFdurXeud3Vfba1t9g5YokhcU5NyJaRN8ZnCWKevsjAcsSjdjHSj4vbFvWEAaRoZD3nkQWzsKV749Qpbo6a",
  "key19": "2pCpeW4cQkLmNLUTeEGURgTmBG8omZieWbSrKgxVXW4uaKT3r6XL4mWocDu98PEeptoaLGAZfsZQhiUmmduUiqcp",
  "key20": "38HPJoLuvtBS8zp3P9adTFUrvGXf6xthAADoSZFxkhaRxPjtmfPRdGuE3cbHYLaFjmuywKovVwYCatibmzo2Djk2",
  "key21": "rbcziybSAyswzZiQX2QmPN93TRmXvm6RVmuBxB1UyZua5Ben5zH7yE32VsGPWya8Mwnbti4boRTznFw24WvZjdj",
  "key22": "xFQ1fccThEme8BMumJ31wD1szz1tnfkY8QBffYXresQBkvv9jr2ZpMUYh8pZYgEpbTkeRFDEBmXDZNDAxdS8Srb",
  "key23": "3tHp8xFxXyW7hWMWnv6kBCPjfL5MB8egqWxeoYnfArHTLfGn1Yd7JNMn4CnWLPbysQVTTqXS6DUB6WhacE8cELVQ",
  "key24": "4FXs7ossAdHauXFrwyBb4sn74MoPnZmJewVxcXXxxkd7ZSxPPo5Cnr4fiBykdnfcNHSTBAjGZDrDq5u7ubz4ECtT",
  "key25": "4ibaFfPFw6gEQiDxhr5o66W85bLH3mYWq6iC6qsLDGehPqyjGZmXYrhQHsBusf2Nps3YeojqtthR6eSCBREsWXXi",
  "key26": "YQCJE577n6x1Zwy3xm1WJeiCZh5FNnathcqMhPWPVvNvRTFfBrSSYaJDnYA9dZqJnmjJVQg1w2PidQ4jWmbLQHQ",
  "key27": "3PbGcinNmBvsRhV31swPiDPk4qATggCdXfuZW9by6iKZBnAKszh5KzKHZ6PdrhM11X6hCYdGXtvetarpBtKZsn27",
  "key28": "45dBsYQN2X3hQw7ndCbqTMrJ4JAGzgU6dDnHQCcUaR1sHwJtQT8JGk9ntbCns9X6PzY5UG8Cj8aVZGM9VGckCfRh",
  "key29": "5rceQoatGKu1MowzKdEFudMaCDJzCvUKtweh5Qb4UbLhQjGQHuN9x8UCQXvnyoG2pxbUyRBhJMGWtkBt2kbnUByc",
  "key30": "2c6mcsKdbsTKET6RjYPhrccRE5zugjNgouLyKdzcAqS8BwX8wvcwCDYYWVtR71dhNEEmpJZvfk6Uwqb3M988UYo8",
  "key31": "37s4GfjZ6Yxh7q1HPznbPFVDUtc7wqu1QG5hArf2vgtGG4Tzzny3Arn3dHrMcEjM15vgSNmZuyAmtDNwYK75gWwq",
  "key32": "32PoxHEYgoYwLydF6ojELpTqjdkPynKdmsZEYqcQRGbkeemBQRbJszHCFKUy7QuCqSVaAaxE6a2NaauqK8MwkC58",
  "key33": "4XWLdJqCiUmo7URKEo52E5otPA4U3W7t7QGRqVVLHiqi2yxgxXMgtJsYb1qW55apyjzKQBR8w1HsMBHTTammpvoL",
  "key34": "2Cw8g2Cro4FqLdB3fAGGNmLdNywvqgDL7d5duWPcJFCp21CDg8GMzM4hJnnGHXAkzwe219wKMez2b3qD11vn8MKL",
  "key35": "j5cqV4iNr9GBwUokk89u2qW5376tetKdajn1LY3sMu9A7MZXVFKajfAqB6p5YbzRaLvo2oTmGDvtnCz7cJRXXhV",
  "key36": "4KEqCn1tmtepqS38mBHN3Y9rN4wq55et1tbd9nFfztKY7597jdGGiDuN6ai4zeFQndfu5ZJV66BcAiiobmCRLFsb"
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
