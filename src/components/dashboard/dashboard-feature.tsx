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
    "HYYMbopfKCRou5xHLacRu4iRKTUeUTKYgC9QBgeZyYEdRDB513DpfBh9gyhufHnP4mFafpeh6XNVEcGXgKw7HWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atuqkBhYmY3TskKibrYPiWTWTFkP7WhW2u8V8uwvmS1fHnax4hcCxbG4WArakmTypcyGGHnnWGkBb6XCekP6tKa",
  "key1": "3zafsd3Hfi6jrFpwqVzsH62ijCmFqjVmNxeTtQTBdGs6rT6tPN5aDRuEHmEEcuUCcZnxmeRfavG2R72pyGxMzJ6d",
  "key2": "j6oZTTFXyTrkB16ebAFbbTiQJeervmX8z1dTbtiJttz2yBwK1NYt6QQ7t9wifxu3hjuf87bpXZBwug9TqYHiPTa",
  "key3": "zQHLCoLSNQcykSJXtzAfM7QXh6DrN4meJA7sh9QAS9pKWXwDdGYrkYtcx8TY599iSDrKLtRaEUy4Z4iVZDfLYLD",
  "key4": "a4pzwPocchwwGdh68TbA2E1WLqbHwzwFhxqGTVXAupYZdjWBWST6MLMFikoJ1j8cvasDBAk3vNbzuWyMv8eJ3zA",
  "key5": "9ywDjvrSBi5vi25PWBQdukHZsaLdYMtJg1rTLXk6FCeMiRK9WM6R1JtLi1yk2zx6ALwqh4CAPndrxP8HVUfcK3c",
  "key6": "4u5xhvep9vzNCQo81vtPXUXWHrT3VUMpBHXKqCuKyQv22Ed4aUMoVvPkxBdvn482APHjm88uoWK6gKC9smQqt7GE",
  "key7": "rx3MRv1EfeMumeLUaok9wSPBk8RNskw23gLndwM7wzZ4zCqndJjrbDpHvbh7p3v7t3v7J3jWJGpoTwLDUFpKbMk",
  "key8": "5KYoWKsn6K6UEzc1hoPhsVvAFQfb1x1B3mztAQwz2ehAFS547G7cwzmB5AgaLXgbWiL4yxUDDZ8RTq9cQuA4hq26",
  "key9": "3W31KkyxiPP8T67kUDu4BHyANcrB6ofugoHurUUj6ArgWfeN2x73JMP7FxyN4DWqmjY1yRHDJKmcBne2NiR1zr8",
  "key10": "5roeSQUBMWTWi1KkH4oEjytTBKby4iTyKEYUfegQ4XdDEKUBzqZHGET5JWrHuzZD7TsiuqVDERrvgxbbr2nhrZL3",
  "key11": "48MypW6X4mYty2esJfHtYCYdnVbWEuCfPtJ53RsMnTUueowyAhiCraz27kMd4EeFz91JfDXqCMTCh54C9YYpyvy3",
  "key12": "3XdSZ47Pjvr16UTx8YBhJuXjjS4azXKP2Jg1epcZsMw1ictNnkH8PSdJ9uWRQ2JRmgpkJucJQxYg3GRQ1qNXH1de",
  "key13": "3TfSezyaGWKsbDpe1uJpChsnDTyy56EsjoVhEcgdr2LndCe3TzaitXFAnqVMDQcw3fzEWXjmT2GccE2kVVAcvrLB",
  "key14": "4KM9WUEKzCRGv1LFhYrRGqSkkSr44NEuP5S8u1vaPwNH24WNDamHu6KBr98nTE4Fmywgj21juTtvDQN2iBLN1yT",
  "key15": "2839dRctCzacTMFJSxPpktSau2jLLDuwCvdmTBrjrDCiqtUK3z5XABM15GpquizaPHsK7Yh62XRgPcVYdwvdWroT",
  "key16": "3aQTydWS87VRHETntQctxYhc2vqiYML9XBTdaBKqzY26x1rR2rDp47nE5eRDANa7pvPM7uUj5n9dciEQCaBMZLTA",
  "key17": "5bP6hJ48qhokG591FHGtQYjerKcVW69k7jduNxbPJiDQ33rKKpQf9RrJrn6B1R5eufTZnrrNqMooETWP4CCeozY1",
  "key18": "38FxBCSgfNH9D7FvXrCLDKH6p1SD89TRE6JHGy5CnpuRADktqNvyRXJu9zG6rKZedDyE955XVffuVMh3dE6ySwfL",
  "key19": "61Dv3XdbY5mnehS45seJeNrET4brUYV1UtqtW9bgdoHerGFFT3uXkdGS1YvRak9vFf6AmU3GMBwpRjgEk3Bkp4M6",
  "key20": "2nHggx5ezY8Q4PL6gCj43H8Y2vhrFKvz4bntgN3eAQxryiDsuTk4U8hCjVUutGASq5mkN2NafYRjRjEP3AiShFMF",
  "key21": "FbT2Zvx2RiudjabTEfT6wxh3iCM9uvLhLDiy1GKWjzUtH85wSBzwErsdFjuDMFbSDzAZa9zE8bjG9FbPZSAB4Mv",
  "key22": "48Kbg4Dc9nKwRzTpppLsVtPnWYKgogZc3YvCV1GobrAz74X6XnTyFKDu7mc6xQ8QrVXwku4UyvuTZRLZTjyKUTar",
  "key23": "47UkB6Jnb4TZhzf2EtxeAue3UArKXVP2UV5BAW1MvHYCAr5ZCLoYcGttzwoidx55VVdDKX8Ged2Krft6EcGe7DRT",
  "key24": "bcZpuHQBG8F68NY9qshmBGbW89uZPbHFXtfvWboWyn7mu6bebMfjuxtVk3pcEiidLrrg37mL38VfnVNZD9CbVnG",
  "key25": "3Cj3QM8y1kgjmLUkhJrudP4vmEX7Jq8jLvYjAMy35skoGEd7xACdubhAGjGj9Uzca2uN1cCmnnziVRAfryzLD8TP"
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
