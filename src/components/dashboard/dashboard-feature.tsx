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
    "b26gWCa15MZXNQFNbooW8f3ahWNZNjWtmmD8YAjdCuiYQJqU7rVrdrPrDSXfJ98Bgk9LYSBVg7LfmZkzt7NBay1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PsvvowH6pp42A5rgNVgPozcacpxsAK2H3uNeFkXFRN1cdC1KoRJfoaxGBiGvJyZ1nJJyG3LZAmvG5d1yRQfZS8",
  "key1": "5grBaaYAtR47vCa3XLMFXtmgZnGkG4ZTps3BW4VmPV1cg4TAg5xQPWczf94BMNsGHbdhqUrRX2QBtyA4scGoQ4Jp",
  "key2": "3g7pcqiZnA6Lm6wjKpg1EfkGWPBLVLL3XTrXwbGdRGnAzCSEPXaT4DEGvKgsGD9TQVzLijPt6ozNLQHFKHJeAYy4",
  "key3": "PUsGqXGHyFUETvFCQWvq4TKVTyNK6k2Q4LJTjJgrTUcA9Jsn1FvQ4E3zh75odY9fzLojfQeNF1VK81yNGXEPncs",
  "key4": "3hmF6L1gq6hvqL33y3cprZMe4TD4F7JeVZtZdyB1ycgV4Vgzw2VfVXJqN6cX5gce6tH9yNiuCw36BwFsgvnADy5e",
  "key5": "46ChTprE7RDMRN9ZvyqjyQ8MgrMUDYFXeNBfJ3UAhvjGPALsXTGse9NnaUS1f8zYNUG17hvNrHbz44kmKu4f1vdY",
  "key6": "4rchsA1bU2aSzCavycBfnKkrqzd9GjpcdkeBfSSoLtKZRLxgtTDhi2cy3t8dzeqysCLpbrw92vCNCcMxZHkFCzvM",
  "key7": "zfjj94CcosGFroX3Yq5JnNjCa1TiR1Hvg6wpaScvNZ3MRtar55mMaovqeyQdNdXv5usrA883YobjuJs5cnTLf4s",
  "key8": "45w1ewGDG2E5CbEab5AW952xP9EXsChYRD5fEVirrQuadnfSipf1UMT4kNhsGQhGRLUiy2pK5P1vFdW3wWN2Mef",
  "key9": "5QyKFnjbBh4Zc7VLRn4JondgdgkNgPwp3mpLxgQZ8jMbLUSHFfitAbkY9fSGmYfuZVnZ1iQG5115GDpriPn9egSB",
  "key10": "3xh1MocBq72iBXxWqxXejRKCPyfgHRwNboyzEbmDsxKt8Q3QktYRfzP3Gc9qusG5TUrMizgK4cuygEBpVNBTTtyv",
  "key11": "4gDkdZqF8TpxnTSxKG6VN6X1CSorbEs6LL4qUAdGU4ryYENcxDtkRimCXMRn5Rx7RwfV7SCe67HLgn87NqTnDdrD",
  "key12": "5G1LV9x7WDFCAneQ2WibfTZ1SM47JoZEEaoRZJgpeB9iaELp6iN2JfQjGSf5j4P9Gx6Tq26r8hp4zGx2cWhCFtvK",
  "key13": "4U5skv7pVk9sNPPYrk7tBYfop4oc6j7Ri9cCtMBK5tG8o7oq9r5mywucLCsGm3t4JPYpYpGMWrTAR9ubzTkVAW87",
  "key14": "eBoCG6b4V9iyHBHkqTUvaciicDrcYsB8HeX76Ya4HC9VWkFz5SEhS7WkXo7V2WoWr8ctFHgy5zgALwVDF1f4Q3a",
  "key15": "5RiAcnqa6Jux92PH9QeRCFrtxL4WUpTEofYNFDDhy5q8qxkYYdvf6i6ihGRNbhw6bxV5hZPgYCHcPeN6VHRJ1ob4",
  "key16": "5RfoLFf4XGYmCjNp7yHuYxvxqy7BawJKxfs1r6tLwj4YjWoF7nK1AZvoLW6mvqvNu1RVzkbSWmHWCXAfLzanoT6k",
  "key17": "3FgFDV8gAwZQCgvB1WpDHQxFC93jZN5i4FSprGGBd99G6eMcKg2gt12aca4Y8iiixXJNQbehvjrxbkdEvcvyN3QV",
  "key18": "d3dAMudzVWkPJb5CquwdAkP4MqWK3y617Uu8gA2y7RVKee13mjFyp3DnkdtcH7XHrjzegLurosyduweU1BnHips",
  "key19": "HbhF5xv4CqqkvKDPNt4hU5wmgreWYNJqiwWpBmpVoCEtYGksuWdxAjoX2GuVL835p5xVF8fUb78e83zgGGtBis3",
  "key20": "2hXdnN9HK8RGjcUYTSPRxFSjYjVGADAPUkviPzENcWJywt8DA9khAcqPDsxyuSaXxhCmWx4UPCi5U44XmSVbXgMM",
  "key21": "5D9mDLskYKDjV5s7FZiNP8BvZjJfDFwiuDw8epa4t9GWxZm7VX8zAxK92F5fTXoqjW8g8LGRnLLAnaM2vGncYNuP",
  "key22": "4241XWhTbkd13ZbKy8UvUmNTo9cpxntrT72auHQ5Kp2oUF5D5FhvH3PppNijtsM7m45YjnUuuAcSxkRx3QmELATy",
  "key23": "Z4WBXSEbGhK7E6LWa4tuPMPvNap9RydCy4Nzc1AwXrfa7vnT5nTkJH7T8VfuM5vQELM6UNCbinmPFKTU4RAoSEF",
  "key24": "3uToAXmzNZPx2xrajNcbknZF3aUxFAyQJzk9EtFFkmjr5n8r7UvaYWDbELmudW3PidBLC7C32zFMKXUsJHc5g8AK"
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
