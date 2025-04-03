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
    "5vguN4sE8NFLWM8CRkEs6j2eAC293ZTy2B3HC9fMsPvaXdSqAwqZQWm9DXrUaQk6RPCoXsgMxi8AZbpW698rcTUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2fLZrcRguKnX6MxGiDSjc2M5Fwmb61tnqUcrmUZUT1WB2n4PQDkDr1GqZi6m9QK4DSwcMhYbBWsFWE4d8gJWtN",
  "key1": "eo4FP3bdJV5CJsNYVhHYWci3pVFnPxPTQKc9Ra8F53UMFbTETLZiU7AqjKrCQRCwDqT5Cz2ve43kFCH1mezcA1p",
  "key2": "CZsZvBo5YcnFN1pRQen4Xtfy4SQnRQ2yc5SmMGQmCo4aV64RkPBRP8nq3p7576gYMHzSu9P1HwFdEK9FRtSrQQt",
  "key3": "BfDQ6FQxMW5r5AiMAhqA6JhejGyE8dXZrZ5iTpjauiTa994B3hMpoJn7cJbokxPPDNLqAzS5mScs5pKYythjdSw",
  "key4": "4sAR3VoSHSYJyLw1UncqM67fibe8edpEXsmD4E458Tjg2DYp3DimSPXvuRUbog6J4zQAKtPyhanbbwhtAcr3wU8T",
  "key5": "4G4ZrmMFp4Tdejq46vr8VRxKZkraaPcaGGHM6cMkcNpScH3UawWxVTF2uU9ZP7ok4CEFFTB7gMLQ1qZzQtnrRsy1",
  "key6": "65pbaU9etCdTA7LY32xVjw9h8BHT1rCuWuEkB9SvU894sE19aznKjhNu4PRn8LvBdXUGayGFQ88gXDgtsYuG1MV5",
  "key7": "KmcCTzMKw5qS1TUMfWZZ94FRnmP6APDqGqJfmVXKejTzk7KykdBraciGMg9jYWKjQWLyPuf24anrmBNMB3UJDea",
  "key8": "myEDSokx8bstdHaheipgp2VkFCx3QPpmnT1XPuNdGKFZ7J8B2xWqyLsinJpN6swGr5zGd3gY2ApxxviCjqHfs6f",
  "key9": "48ZFRfS6uZyEZ9gfdit88NQnoEsFYDaK2c97FuoLiXFX1ng36r2qRGqN9MEfqCy4F6XHaSureHsQpdPwyRjhXYhp",
  "key10": "56bCbX1G5fCZ5X64nsN8DU2ovoASShgCc13MkyCHZdAe6WSrT9TqcPBhL11SmJHiquDBNkJCqEjSyyZQSRUGGak3",
  "key11": "4KTJwMJ8JhzPrTpmhqFvFk7xVkj8Ei8q1nkE6HdNfNGVB5k2UTKnP1NRMN93sj4uGCrdBHtDUon5Zebnh65cuGNe",
  "key12": "3TSriJ9ata1m9anncbAd8HjcPfayVQAb8FizLdcT4ipwi3sn9pR9qDxMp2ZXT812kegrFEQjB41syVgdRV3FVrLN",
  "key13": "5vojSUeQoKKcuRL2WNzmrmLP5yTnFRYUo6hxCCVtrZBdVFgyMRXRf3PahRNZ9JgFLjLgkzDNFx7GQVPHvEwuCqTC",
  "key14": "4AqvGr9gAn56xU7j5aCFk9ibkMwV7kdH4M8AdkXcyTKETBzt1ZViZS6jgYT6Z7p8SdgPRMV5BMo4rRsS3LEx9qGn",
  "key15": "3Mz66FWJ4yC5D14ZwT2ScizTeaYdfqq5BMTmPvXvG3Evte69mNHdJZXZnCs7R9gWfo4Jxw6ALKbUJacC98rGkjsA",
  "key16": "3Ab8QuNbGC93FRVbkcL8P4oHsyiYq4Z1HoE7TyikUkHKSKTbwQYZDwWFZBFU5mj2P4unViCg3bTVeZf41xBoAfzM",
  "key17": "4EoiAKfTaA5Pm4xxiy8mvdvRfRzgMW1p4TGbDcebm482amTeQes6kS7UeUS19NmTDcqJRCxhWCa18wyyG27bnDME",
  "key18": "PEL2Y1YULTCEDMLCVZ8MahrdMoFVnwbpPJcTx7eAGkwKiRRjxxauTPjwttRFLQSoCSE6JGWWnu7zAx8QtASBpGL",
  "key19": "586yZfH1jTJvC3yk69w3efVco8binTnswhie7DdpSb9FmS8RZfM4WYRDbYNfNRcEPBS7RueqyC89MUyUnzMw4yUy",
  "key20": "5SJq99PptG37MYxcvuMxi7iYs3JBumKx83T5FCyzax1i1ssemkn3b8GiszX5WVFq5NY4nvo3rKUErJYt3VgUS6tJ",
  "key21": "3QB5EVe7feszu9Z2h9dSiU9PcXbFgpVjRsMFuEZqZ54Rb34JDrCGkTdqzYzHphmYXziNxubo4d1duuVhuJqc34JM",
  "key22": "2LQPcgSPwpmHjgq7hKDNbwkEzdiHjuYRHVRmFzMmmmuAhyuRc1cZu2znL7f69ZHf3j6PxM4xfvNjGquYkoLYwWKk",
  "key23": "3WfjMy44ZdapfUyXsb8Zp9f42d31ngNsxQbcGu5VawH4Ahb4fqAPwtm2PoUyjFFd9iPSAjjLbPmYmvVVNPrftU21",
  "key24": "3Sk5Kn3KgwpUaazfy5oFHeNoXcq2NbETmypmH5PhCs2cCR1Gbf1by6hxsCcVw53hc8JqS85XhhCGeH4RzGXgBbFQ",
  "key25": "2oatD16wEFRTj9trDTKWmMxZAjm7SS3qWGRKCYvXY1wDnmu4EEDYA8iFeb6Y43ZzWxuyDetQkixYeJ6rftPB5ijH",
  "key26": "3L3pJ1UGevVAr5eWGAwxCkm3BR9Kob5qFWhtJbSjxU6PyrtBguVDDjKXZJiC9EnCRbJZPeXyEhAi9YSYRQP82nyp",
  "key27": "4Se54EPQWTNTSkGZoZsdhGtgGsYELBL5F1SwFCoJfXreMGRaA16zdC7ATh6qR3g9rWYNJWQCKA4ZdWLFkgJvxbfV"
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
