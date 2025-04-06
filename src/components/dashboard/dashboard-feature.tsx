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
    "4iYGUHcSscbNZ79N1SRE1SSRQXqPRHnYdvGCmD8bdXGX12pWEM1KGopfoZT6yVR549ZcymtTFfeSPHqqPs3FT9GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTtg2KdVrB61zdr83goTJSBhEyXz8LEX6FBJGX3ac32RHevG7Y8DftuoEeACBoHSMkwcdddhoi1oiPAVncZydhJ",
  "key1": "gL4jERgFLaTCp2raS9jpbbJdnm5ovpfW4p7PEy73m7njW6fR9at5qB3U8CrDXo3NyBd3DGaWL3KR8M6LerxDbz1",
  "key2": "4yEs27t5RjvX12PHpfCHoGVS52ucjQzP71sy1nt5jfQz4BVaLb3pVxYjh5vdUH4UbXF2TpjumVbKUpxQQYjAyLvh",
  "key3": "3t4oyQ7J8j5Mh7oSbsveswcCJQBFzsy2PRuDeEg7ySfmFmqKFBsDS6VFEYrMghCKgaeioCYx3XH8vGrvSTK77rUX",
  "key4": "5iTZKadGHW3H2UKSYfSUJEhWERaCAvuv5cyHiEwQYt7QHw2eiTvmjkQZeUiRXNnMcSuPVhPA4GzW8U4yb7Hmi9nM",
  "key5": "3fsnRmfTZCwoojbTLNibwvC2fpDmZhun5X6QfK3SRJXPcgcioecNtxo8h8bdb6CCcEkwr9sxbqVkY4xEi8saSgAh",
  "key6": "4nK3skkCEkhgtVaos9rLPnvDHJPp2FsnKzLSDe4N72S87LEgMkNwj9dxHgsyogNXVv2RWDvKebQa2Dctd1g1ufcq",
  "key7": "43mnbuEKs1AfDafvH64UM271U9keh2nBJECrhc1HwShyBem4qCqneRZBrQULjEtgbc4A5nX6hGip58AAmZVBNcpf",
  "key8": "2BSbTLnF6WZUhwhwV1JQfJUf5vuQJNBVa7SMRcWaPYDUw8QBwLKSoJJid86qp3aQpnzh5U2o3nNzc3wrSn1Shymo",
  "key9": "5LZJ6ZvH1Ngu9TfzU1V5NAvMUU6YW3SfYVXTwLcnqQm2MrqhfeayCAL7ykDyQdsnicBM1V5EbFqz35w5DCWeGa3L",
  "key10": "4bCZ44XvpoV3jzrHB3dPspcsF66f6VWUiRkpeSrjBGtK3VQJZBK41bkwsaPmU2dUWRXdbfaMFzez9RCJeSKEFCGU",
  "key11": "L3GqUYUTzZAcXRRN4rPcEzHxRSxUDeHu4NZHCceC82cudTaKBU6bjZFK9WTe3C74rxtCpvhzamAHytjGb5L9jQa",
  "key12": "2nsvZgoFbA53n8TuieggYJgfDUdRjoo2GL44qQ8YAumn1PpwZQ5hLfqCksYCF74wP75MAV9rfR7fPpChnJWdaDDb",
  "key13": "NqjxwLysjWt1rcf5GyW3dVjUfoKQKHCLYhY1fZGkCm6DUPTB55279B7qxVVoMdLNTfywXUfzR8hqtRoz4jUkthe",
  "key14": "5N8adMwLMkKM1J5rmGJ3M6e5rWQLmwm4xsPW7yC5mprk39sK4dzUfF7yWiTSRCvxUKkq4qxRnYue4LoGpK227XRw",
  "key15": "57MAqfHXhwxabcYoaXCMYm2WDJshDCFA14BDH3P4gUSG1tz2YwLugf5sbxNFeiSVhxaPn5uLW3Yox3ZUQBq15yKd",
  "key16": "2nJgpYpJij4EfftAQ2yFfDWGi7FXXXadTuKHkogSR69g1eqfB553ujvd64XBDuTReRVy3e5k9B6M6jhTm4GkByVQ",
  "key17": "5HbQLUMe5JF2HZac1Kb2zH8uFWkHxAztXhdQdeL9aHDn5UuGXH7BKTVoeT5VUbtKLi3eqCy5wU85hXjUGmrwrffP",
  "key18": "4Q8WThb7vpNa7FryGoHqfddHnwPrpXbgZjaxnPUb1WGMGG2NoE6Wspq6mWbwmyTifqpCWWqFcCEcbxDZCfx7kHRL",
  "key19": "2fYvuLyX6f3Hf9ET8jzMFpctg4YqLeAQABXBdAediYbcLKCKxFziFZmMWNLmAdT3h3cajYHFmAjXwzwTLf1PHq8M",
  "key20": "5rXsesUckY8chkT5C4vtnxYnP1omYB7hpBLarWTfDREsRy3Bx7dMMKc3V5eruhM4miDr5fgWurCwyxgehMRqrr3q",
  "key21": "5j9iS8hTLd3UJnj44NrDBNRLsUBxycUmCWVXQjVxHMGAPgzgLadZQbDwaXZfTy6TWafhSgoPfN7VFLVQ7h6BAas4",
  "key22": "eLvwfbkVjAjuikKEb8wYCgdFDJLQaLopJurUpEPFPc64xpi4ufwSTe4abrEYXLvYZoBjeBxKQz5gS4wWLoPkGvy",
  "key23": "5rXwGWnfAA5DwUhVwsnh7osAPs1ybNriduujzG8wkHTASZbvbQA6szYkrixCZi6ekzGf3td5Gs3WUNrWg8NtV6gU",
  "key24": "3FJRpfmXBUGGcoowFeU8s7ANkYFjYNu3c93G9V3R8TVGt25f2oy5e9QweXQXJUp9WxVmwf6RUY8bRbiVcHxTzZUw",
  "key25": "7jiF8S5QF5E1VtyKFHdyy3Fg3TZeizcysJmKWJKmdHK3i4nzq4DFMf9z4NyDt8zzcs53wM4nmiZHekuUqqd7ABe",
  "key26": "4tVp4MZTa8pNnEzpZAmtSgn8mfKjo3jvx6kFS7f9CEf2EFVk3ymCraZ529PmHPdVr7PQsMqDsAvdBsLEkYPqShYP",
  "key27": "STQD3vYFiX7CjKrZ9j5AkL9brN1UNLMuTX2NjZW5o2Pnter61ARLf9fv9eiDtw7oHMuytYnpEU25Q7QV1LxTPjc",
  "key28": "aBdoQqNTQ8JTjV9t8KphdGBJbdnYqDBhbhQeZmX9yZiKz2AhJKBX6jmzgg7TqSqon7ie1hfXp8FowosG3C7hQnE",
  "key29": "3RU6k9aTocLeuXUhfjfdKiGo5izbyK4HFm5GjarxkrvHe8WCntgZFrokRQQ8MeofYrPWscnW5p5aTjQpxaGvvsa2"
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
