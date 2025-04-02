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
    "63NPvfCgacJ3Ye9dfzdTJEBSzKna2kL3vC1sLCNw366jf6PM4Xz1Fd6LxEN6BpodQSbx5F3qrNkESF4K8oP1jBzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332Pezxxx2sFpyhGnGger4HwPMjyQNXw7tMiM9qL61FaiTUTysxiLxDo6B3F6pPuLmH62NQU7uTzkg36ndGNYJQy",
  "key1": "3kxTZXaPi8habGcakfobqsN3CQzB3w1ssXrNCLFk2SjET8hjQn1T8W35ZTDXzPBHqRWJC69JKutgYjz7FvwzsNqu",
  "key2": "27A9LBDPC7nPJTdzH5qVLm3B7NiJmu9FLFBjDbXpGoTZRJEQXNAayoZveVu1Q2eAbWbptVy7C7HcS2Utu55VBbS6",
  "key3": "44bJ7Cgb2VsYLaCg2Gg165xvt9UWAayeuXwk7w5UJYui34BtV64wkrdvWTP3TFzhS4JwFWn3NiCpV9bwmERkV1sq",
  "key4": "41cQnWUKLTk3JuEVufqS7ymkWerHEXpDsTbBp617NgLXoxGu6qsnU35X1qarBj7tNzNdCNia1Fnk4Lt4oa58Soa5",
  "key5": "52tJkyBUK5pTmd4cdjGcgy6e3bcxQ4i5iSC1TKyrbEDd7wQ3C3peJVzwDBXVTFnnEB3eEvrLNZNM99GyqFCxSX9G",
  "key6": "3KFkmEGTyZ27NvPTkTwCDfVbNNuo1BaFdCqPsqPQUdV5uQeXKhJhPvHR2wrQJgWdQrmk8jN8vzeMwhYtvzEJGKno",
  "key7": "4MPQoo6DSgYe6W2MbJyJZzjtqvdbKyzKgwWSV5PJhhTMd14w7ToDCAg4VTXoZ6TuRYrpFxjhtYitV3hBS7mLHaeJ",
  "key8": "38K7jzEmgNydqDLTNQ15TRN9Gmzaxt228SrvGrv5pSR3pypDcFDQo7PLwqbbXZiicu1SRv61FtVfPYkf8ufahrhZ",
  "key9": "3wopMgD9kfeXxqNQWzLr2RMUBqSCWk8iX1EhDJtVy9mxM47GTd84oWQG3gS3Zu9TFpf5djCSH2eo69wUHaokZVsj",
  "key10": "c3KFf1Z1A78hpXV5F3ZR5PkwUtxEG5JWUqMWx2PhF3emqJjKLJL2qK5ADM6NRYS8WWSZ6anxtPWw7WXTqnJRyP3",
  "key11": "5ozmqzuZkkPP7Eh4eUraohk3z3VhbtUV1rQYe77BREByuB8Nf4FeEYbYY7GyRr1CBvjM6zA2U28CuFq5U6iaKe1J",
  "key12": "5cwUVHA9DbLbgZNFVmp2U1QTN4SPLeVNR7nQn4ivvdbZqk785mKHxkCjbNWQWGmmV3xE7n5znDLjx4yERSJ7ASUE",
  "key13": "4WdbDxSWPv4HaM2qhQ19fX6y2XBrHe7g5Ea9iZ7bEw69J9CJLccK1c3AMLvyEP1YW3p64NkHQ8eva9HADqQbyp8S",
  "key14": "5PcChoVSRuDv3r6TQGcdqk2vd2TEjjyS1CEhksPTbCdT4ymqg11fvWpAN4rbqzLRUwmc8iPp5WWzHJxi95vMK1oi",
  "key15": "58dk79g826Qmg7DZbRFqqLB2mFVVKbC6AdFDNcB8qidteSGYkxgzCPG37LqHuwKyc21aTXUwScu3WHJUi2T6yrBW",
  "key16": "3STmHdRyoMsgiZqDwzFEMx94YimqM4TLeCftys5xYxbeNLjTHMRJH4L9fj6CzApGpdNWnVtB8WCEiHB6NfJjWiRm",
  "key17": "4S8fzD1AEb6ZkMkuNzjD99cekYQ6yQzNA3wKAmmZ9soxU4kPcGJnofxRyMSiH8sBegYQb91yJZYUTvf5AkeXDEoK",
  "key18": "4TjXbwPfDCfZsXBkVib8X5ni4CCZdRkwjKQEsmLQAUbhdqPjQus8JYXAHwJrEh3Bc7tmAtcUKyejnBZZ93x6zDhe",
  "key19": "DqbEYnWpy1nmwYLDU6koDK14tYV7ts85dLbepCSWYR1HSkeLA1SHSxPjorXsPACmkxm5cTeoBj3B85MHYX2BxvU",
  "key20": "52DA4pHu592dRFJf2TrwXb3xkhqYXfyt1dFur7oL3AoQqZtszZCecw9JQQem15f3gSfmwFV9w3J92tAVpfodtos6",
  "key21": "5GXw98FaojNP4uEUTbk1r3tYLMsE6uy65ZSvk7CzR2NUwbgoBRxTCxY82mxK1BoiiqoZp3zhaA3hHmaVHAW8qtFY",
  "key22": "5na2k3dRP5GyPNVmF1q2oBaEHfKnd7h7484Xywid3sTmMBDRorB8WzXfXzLAWtcDZzru3Hf3m7VpZeiW14cjaxNJ",
  "key23": "fYTRRQpHHD59N9wfciffCQJyu6uEdAUa8fRmQunqRu6gWHWwNu4zbFaRCgBV2VxP55A5hT2qYHLAxpxZ7nmivFJ",
  "key24": "2F1xk8BWDDXZxfYrHjmZHBXrVy3hv4GHzxWFywEy4NnAAXHmeyeckb8tWwuiY7p6eFMTA4E5wkwoJprYYYhpV4nd",
  "key25": "2xaFNKddZufyJmCoAuGe7QKDQZxV6hf1BrwWf68vX212XPmV7TSXB79Sf6gH6qkV68QFVh6KvDCrJ5Cv6pwjpWU3",
  "key26": "3Sa4QCYVuKPN7iMNNF7kDRg8RSFoyNyLKDQnY2ZJoLyVYAc1KR8KwyX9tuho3eVczCW9S5ZzCxj6AMs7a2UTfKbi",
  "key27": "3C4res1UDnKJewmxacbguQpaCWtaTVGYxhCrC7h8Mcx4ewUz5eUYMTdi6F55pSJkY9W2FN9tpNmixAoc4ZNjRgJi",
  "key28": "23XuuqToNGow36kk9VxSq1ujhgimPZKsSJKajz9rSvKShUyNFfsEjwWPezUsm38BWB5ReeW9CqcJexZftQ4D4qw9",
  "key29": "2iNUSF1k47HH9CjQ1cJApXyZLLnQm7S1kXiKTtCoLMLd71TkyrdXHrqj672Pp32eM9YMgzcwhgmkDLZy57yT26GW",
  "key30": "3Ysoczjq8DAHUgwyrWuHkCe4GrUkNxh6AUHMiQcrHgHQKeu5prGooaRP2NiysRwmpRzhByoNMHyKEzjR1MwRX1TE",
  "key31": "3qeNrVDsVfe6LBfJHNV7GaLzBUqgqBC9ffZ1w7FHNd12QzxrtF63xi7FY5Ji6GtKBefukAX7cjxJsVnPuC6wfrFy",
  "key32": "43W282A4EPckUmjAbGXaJHovxwhJMypv8wmrrPKMSHb965warhGe4p55tRKY9JG6dS9GhDb78h6sfyj8jfeNy2ep",
  "key33": "5Co8Uu6SShh2aZfUqYpKp1Y1xnwUMnwHEScCSiW87jdYwcnm7XwDSLneKwSjHoD7bwdsMLa5uPCQNVNTczxqhwYW",
  "key34": "2fPdkxmDoS9EN5chFGdjiFNhkjecBNL1QNS1Dd2Ak8vgrPyzmTj7Zu3ptzpmKZ4NtEkWypNyeBEC3B6HBfSn197x",
  "key35": "3J9WAVeCVCKf5bzARXQuySYxAJFMAJjWjdwG86RVgHpbqEkmyRFzk781mvpsU1A5JAFrJn2eefEWCA32ZJLYeTAg"
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
