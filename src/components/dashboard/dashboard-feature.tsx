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
    "3Y5jKt9rPYT8tjQmrG55DfosVEMQveofEDcJXnD7yvuMFXR7K29xAXfhdsU2BAeYRN3ogyTwcpbLfbhatszNS7BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDRyrZvd6w2zuyzyBp81Uqunyb5roUbJ91XNMg57RdyAeW178Q9Tw1wa2vkvHgjggVRXtwWsgXvVULNZkq9wkUX",
  "key1": "KWbKFNogXpC3HGPcmownyK9N21KJD1KFGd4JGQA7pzBVMNvrgX3dv24Bqs4CbY9TsDyDq91851TjHX64HowLowW",
  "key2": "4Vxru9KcuwQtMb9joHfwZDkPmwRatRYouM3oLcaajx5pbDeGrxveiUNWf7nSJBfcRwbNPGncXjkPbaYoq9ypB7t",
  "key3": "2822uG7gYXm7wUj2FpssCa9oLqrvyjyww23iHruFtKfaXMUnb3tJPdT7eseLq2szcwPCS1A5SAyuwEc3BKLpkU9N",
  "key4": "2SZmtDoKXUdgypKQWHHq8MAQfHwGmXLh2XA1cwiJsjaQZr4reqDeCB2dsBH2yygvajxu1Zg7DwckjNVgwNDxhN2s",
  "key5": "2zDScNwVHynTqvqCQL8sA9awtsvbp4LzKBDqb2UzRQWPbGNMZqTaJHe8Rtwk1TpjEt2YXAmrusZban5SrgEgEVaG",
  "key6": "3GLjB7eiG3TLuqiDJZ8NqdPhMJBcCQv4aqpsTdmdZkV2AZtTbCDtpaGy9e347Sjdd9dwNGTctPxUGTQKPk4cpKcW",
  "key7": "vGkb7pBd5fCFj6MnyZW2ZkrhQNWr8fkC5bVFoG2ToQWXXC7kKke1nErZY97gi7eLgQmjFpMSidrwLzQChXTGNd9",
  "key8": "cE9SGFU73ik7dKviZ1fgQM1m613kV8XfLgyzNN37V11yP6zdX9prj3tKRgukfL8NvAYZT3mMgve3wNAjfbXytwk",
  "key9": "4w1JgSJ2jJyasFAoLG9Gq9kCBxnJaW1KoCjKpTbaCEDr8EJye4yhj8M7cVHNzy3AHhKrTy6gn8chcvKQBp6BZ9NF",
  "key10": "59cvwgieeWkibtMjydLq7BfKU8tBgrBVFn5GkLtzcsQA7SbNjM2cnVSk3C1LMfRPqDh9Yh6u9GkCTrQ68ubS817s",
  "key11": "4ZE62adRsw5YFt14MKkKLgySLAsUqxGNuuh1DrKcBNeQ89sbTMXsqU25zaF4FEUMv4myyRyMGwafAiCJh26RFhRE",
  "key12": "5RREQNaFP3ZD8FqCYKnUzLJQDSRXAFrr5cpJqtc7igHqzDY5KyJfBaR31fvRy3hsVoGofCTiegw7HLWUSgyM2zGs",
  "key13": "2m3YXApsZyLYh6bu3iq71KKqZHcD5AtF58Nkx4rxudCnCVBwA61NHY6MwPK3Nj65HKpCb7WoZ1N1N4zb4bdSA6uZ",
  "key14": "4mPb1r8X7CiFHFvgcWzHT6GPCD9JUG9RwJBd38yognxvBtSqWMUmpwbqmZSrdKXS4LHddtViqwHqMGbyGxX3CpkV",
  "key15": "2ih4noG4URZRFQQcjrfpZPeW3TtnVpu62E3a3KznqxNtE1uUfJ9Bcw5ZD1Qd3x5KT3eySziYUFebKiJqsCvzrnmD",
  "key16": "5p23ivZWceUdUFMqPtbPF4DjCuJCg4mwfZVhnj5wFJqFBgGcnvArR2HLaGr52eJrixRsVqjJqtkKuUxSk2hsDNDJ",
  "key17": "2QuTG8jKJz4J2H798m4MgywCbF8y1cY5XPcNxZSXcX8LGCcGehNAyJmGNN7UQ32pZQHxdMe2q1n436bZsm5aQaCY",
  "key18": "2v1L8G4SHWv5W3ve5AYGGHyMRuiLhcsJYyEPgWMejBFaLZA6iBHGcHqgjvsYTrNumXS4Zg88S8tSPNv3RM9KtHuL",
  "key19": "5XZPkJgZNSftHf3xatzXvtFVELFHQfU8x6zRrEE2CCx2G4hCWqyXesnJBiW61jdnZ5cJi2Sm8F2V6crAL2cWevXw",
  "key20": "5CMkUA4CTZfE1PZMc6k3e9g6bv7UPH9j8tkGBSdgUAaM4d7gN9PFmxjd8roDMWLU2WR9LEPGdaetvXLnspV65ZNo",
  "key21": "2jLb6RFTicEyJSgaFdnTTDWsxD8jgYnG9oK3RVjHy56JYs2gjbMWS4udfiFEjiFVQ4hsunoC6go4B5zG6dQvDEBB",
  "key22": "2ksRaA1fqHpXMZCH7rc1FYk6qunbcBLKJftwan2PksJbSTB4CvyHcQookTRnmc4vG6mwzdauC8DTKtiY96Tkun2E",
  "key23": "2p7RZPkDGdszvGzuqCcg4eFaVaizqBvCkjrMc9er47bNU3gonXVNExpbMUDRHLXKqQthc9o39EfSDwvwLxfuf1Z9",
  "key24": "67Sde73KAdHjwTrXxsbvm7Dp321FFxiD9YHo4HfzULZD4mJeaxMpJVJYpd1CWCR5BKZ1AVg5ggMoZUz3tSBARMRs",
  "key25": "5dpxVoy4bFVffkbD7axP6eT9pboaDJuzEPXPgSPUKuBvYcYtyBoB99e1hundtbaPgPKenAM2cbfdEDBFvvT7B1gd",
  "key26": "2vihmWpYdSANXYo3BiajM8zDvxshZv3EvyjdmgN8JHzj5LCzs1xkRVYM6QgzBDpzRcm3J6tuXr7QtAFZG2NUgcBj",
  "key27": "2ERfXBomZ5gP1ja3fZgNU2UfnW5oFMvybWoWzPcZKy111SHwKqdWsRCxmD9NfD2RWusSPdaSvuT7oPouHq985qUU",
  "key28": "2wUqqqs2PvZTP8bhXTbMbW7KNnnSr8pZzRQAh2Skd7EjTurdhVCGy9nzDWpxfud7swF66FB1HYqgyrqpEZFduLTX",
  "key29": "4ufWfmK4KsTMw7wTvSZtwT7wQvTU1HeuncWn8w4Qaz3UftLR43X1zEUjCrLNzuHqPfZRkiqHohRiDMfWoELAU7CV",
  "key30": "4o4cYvrbnaJhN75qk24HhfmtycrMK6v3T55xsxJqJ9QfKYLCChKaEnd3y5NSUtsVYU73xtppqKF9Rmp93zETwFNi"
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
