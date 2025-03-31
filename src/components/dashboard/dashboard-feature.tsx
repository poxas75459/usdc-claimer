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
    "5Hty4UPvW1WR5GLubs45JGD1nvwFanxq32FsuyELv9N3rDFUGsRf7Es7jmsS5YaD3RvZBhUcNudRBHVMfU6AAnov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQ8QkeMcqDZj9Pmc8JLiHR6e5rdoPPwaTBbTeWBtRn8x1r6gMFhS234pQisATRtVrDPeaawzvhYi9xrgLN93z23",
  "key1": "5jDmNnkRZVrt7dVUT8HNtwHdREbm4jAADmYPydDKtv24jyS5y2nRqTMVTzvtC7G44TfM9tosRYSXqyvmUFAKAkWR",
  "key2": "YGZNVngfVAxxLxccrwCPqGeCVNmchiECDcxK2t3BfL99xGKeeC8svKk4YNMmCumCde7PB67ktwqjZMvEmgHtc9y",
  "key3": "2YB8CpGPNbZ6U9kCRW34etyzPBgQmBHRvQRPtkv5ACUopG2HyehZs22Qy9GS52n92Bn7sPp1ydZz3kBDBHH7ss5D",
  "key4": "2WGTKwZTgVfK1TBtZLKaLPwjNoAbtdFC9nCTrKaYGoxaDvYsd1FxW3LHwTFgbkc4DMsdou8ZtPToF4j2wzRqFUqw",
  "key5": "5pwhcptgQk38fcrot6BXy5h7EMvosZFqXrwuGuJ5vJ4ZvgUiGYYF59qBotG2trBWhP1mKM4dk4yEo6QSZRSR2cf1",
  "key6": "2R1vpZNzDz7ExdnFp1H5mbufbWinhWiyxumBDBfxd5viFRskT5qbuPv4xLWFgx9BTYCy9zwnrxZf2TWghgziBK47",
  "key7": "678TYXZFKR5FZPeBXRWmJzfGXU8FQiXNgaazXHmiHCxD4yUJc7Wrp7Pf3td1U1mv47sQmsP2GyjCrUaNxBqUQHZh",
  "key8": "37YEu4BK7qN1DsX2cAER4zVE3reoviffv9bGDSwHD5USDYJNVddyQWzee8nf4Jro7UXkpjxAiRNc741RhwHcV5dU",
  "key9": "2Vf8iSzbrHPGpQF5dKUCK8HvfA3d6UhW8w2ifeCpbrAhvNMh6ziRCSQKx9RbuhwunoqzPuKb2ZZQsa3o4yMRFPMd",
  "key10": "61Emwb6Snedjfaff8qyLVr2UDsbNiELZ3i6vCdMPevMAM9DH8mgaPimaLcdTRVjqWiqx1RpqTt4CZq8Neebzh1Fw",
  "key11": "2i5vzVFGCwwh83HygjtofUsGemgaE1QpYDvxDeJWyEWZWSS9BnGQbXVrdMTnHydUb12wuoC1G2fViVozbo5wnu3J",
  "key12": "44RMxT6X2Em9ws5XbH1qoeHvtJo714jpFfFM6w9WrvztixQhR2V4g4L8bfN61RnVr1fRHC9fejnesMR8fevi619d",
  "key13": "2o7coC98jQkptvovhffLZkKi8ifVjfSPHdJjx5XshpqdhPNwq8chbyurZtVABdSMkejmoe2w413izSiHwHvh63sC",
  "key14": "37fpyiS4Wm1F1MEKsxH7CJabSwBvVg7FKULb1ei6ZoCXKFSYVPxsq1kEfoKYtxZRQP8tBE2Ea2wYwbh7gSR2hVMs",
  "key15": "5m6hiQ1QJPtB7p1zoMoseb65aZpSJXLv4k4Zkhr4YkVAxSnUVzr8Rgr4jbEjohPRDQR6Nr7x66e2fHTfCa8rUFGB",
  "key16": "79Gwk8qsAHZc6A29AU5e4rB8FxidsQqQuuKYiFooxCnkgfYyv1gQAvNVoCt8UdKB5aBWpBtU9b9BVfCXJigvbWR",
  "key17": "2nG6TTUxd4RdiRVhUNXwVcCQsqRV7Muz4fc6K79BSZF9CCp4Da4Y1SoNaCBPbugdsUKJ1PU73QDVW24oWdm1zvyt",
  "key18": "46r9ZU4onVnCdEyXu5K3iWmVn4rdxDKXSmnAAEQou7qosgJFzyn9wcXNsd67QWViNJVcCuhuAXW9FH532xXDDhXP",
  "key19": "iYGovintEw9ZbQxRgaanPbyq2KXQ5iVZUrkY7UpLphGW7rgemMqurFKaWLzRGHQ3ztA7JRheoJrSH1KnWg45tNC",
  "key20": "3pU3UZZYS3TDJAAaoE37yQfcRR4iKixezHXtNabHjBeQBP5KcmPJmFdodUj5B8RdHv5xqnf8A55EKYxVCBr8cgWj",
  "key21": "3BTiKpjhLQohU3MLkRjJH3YDPRNKrN6q4dAJ65uB4HQYnyVw68tZvdQpj1QmksLe5ur6JLT2b6YZBp6oaoX7CWr6",
  "key22": "45bkCgBEFRui8Jz1aLFLfF6tdqAhE78XZYxCXpn5qpCoWjaV58B8G6ACg6ibkxK2ASGzNy5CvAqz27xcTgxKmL1H",
  "key23": "3nnTzqVbUAcT4smb4ibGgXL3jnD5WmLn7SFh24Dsdfu3hnuKtnfNoKFCGdY7gRnMyFFF23b8tEGpANxALJ97dnXr",
  "key24": "3TUdmcuNcTdUUU6DZf2uKgZRffcQkPrd65iKFCer8FCz8iXA3JASonzGmCexykhMUJdYP523rp5CP6zq9VyeQDsN",
  "key25": "4h3ttAPH73ta5kakYcc4nZ2aKEjPPz84VwMt85KvVx3suVerMYxB8moP5mKy6PY4sZUqqx5FXWDZL6jVADyhBh7Z",
  "key26": "3vtmkuwpBeV4yMbe1X8eGn1z3xS1GdZoSgEGzdm7onZZCEVDBR8CrnLNs7Ebmr1G3pCf6YDSNWZpXjcN5WZQM9sz",
  "key27": "Xy57epPsUVqhhFsRYbgF8ePpAUzXnZx7kNSDLEH1isxHNbio6b76R9U7MbhwfLZhvifg5DgZZRSHieh5GFuyEYf",
  "key28": "AqZwq6DowvYojqHsd82eNRKwjp1gx9ye8P2hQiH9Hg9GtzCKgMifA5nrQeUBap3nDhrqZivJK9ZP1N5Lycz8Bjh",
  "key29": "4gUs6Hc73NNS4CCx5ZfeGK8dRuu59nEFiRMfBFBm2vNiNSyPbJ3C97T3eFkbDSELsuviQiCPw7EXbeCsnGXAUiqk"
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
