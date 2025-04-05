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
    "5LWYhjQkUGpJUxdV9Tz5whbBXaqVJRABXdHFqjQbZ52F5CPxxRsTYkP8cz1gUVQLh9UbpSfLFkZnVx9NQZYhkFuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ANWTaGPCkECcCEn8WZE6UV7oh15xctXzSSaBQNbkVpXaHg8zQLBHgmTCpsNMA9asjPgJhXaHckhBAewBCkZRLSg",
  "key1": "2b6KCMpkmTQa5x6cNEUfvw3aewNQQYdxDeFdU4dkZsiP1hTnJ8i82E1hkgw9xqQVtd6MWuBYLP5d3DNttGkjzfRx",
  "key2": "2YXP6rY3nWxqBP6LVMoq2QxfYmVaBpo2ed1GP4SwrYkPcsfAU8koSCjPpf69Mkr84yDfZQ4QWy7iP5tuQQ6soznp",
  "key3": "Xv11pW2gL9dyrXDvcuwHhv9Gpy9rhNqHdvWthk6vUypTa8r5aUq9MrwuojocT2xDkozfPpM1PTF8vHw7cWfgDGf",
  "key4": "qEretuhVS1AufRj9qFmoc7FmCGxBF9cYQwpnxP9K7Mexi3kAKpjWjrp2AZLnCohz35tHkZtLJKk59Gmg8GJvoQf",
  "key5": "4VrNnVSr8ijaAo4w8UnFNNgphPXXUUrV1thsk2x765KeUxLNwTB5wUzXwkxhjSArRsF16d5DACmTDXVf5RB6KwS6",
  "key6": "2uMonWpwYNXjeciS9A3wWkVsdrFTHjobF3AbtGy2xbU3pJsZWZf982no7cWZApwVpi5ixjQVLnvM3uBPDnAmjR65",
  "key7": "NpDfww6vueTfH4iC5c2bjMdU1SHs3KBa7zNApqRC4KUdquf9rNSfUuV4TMXEa1VEquKhzfRiPFqVyeyWZjU82fs",
  "key8": "5jZ3QZum1zVBEMqCh3gZCyJez9r8WqT4o5viuPPPJUrNKxkMpy8aVxB2gqaQyWu6PCbo8QEVtZ2VAHhgp2yoAU1W",
  "key9": "4ExutAP8VkZ7wLUuq92PfgkCbymWqXzhvV9aj9zV434RuGr1crJknYBkEpMFqYgsgn1xKpsjWcfscoFWcSGQK8vT",
  "key10": "4w3Uis55y9unrmp5EBAHaqeqrFBbeFknHgS632UVDitUnNZKAWfTKBt9tnS1gZ7ZwfEWy2L7djNcrbwTbVdZ3cMm",
  "key11": "2S5TTFTjVrhrzm9bpe2ZGoJ5KxcBL6RTC4b6ynR5LiBaQqajFhP2iHwmKyZxYyVpLaBeK8WqqnNH3MXRbzeswr2C",
  "key12": "3b3rWGWAsDM4cxad2mnVW8R1aL7tA9ASJjAH7Rk6tdM46zhePCd5946V5CQrsYjzPxyEBUTf1BY6neebLsQsXGoB",
  "key13": "4KxuiK12aYzUEp9jkVvstmorY79tGuDx7aZRoNvP6tgsWY7LgQD1hKctBNUCiEGi4e2UWpi9UTcMRwjQLwNVP1jn",
  "key14": "2ynbtogGpxfDg6Kvb6jWXswSnPzTTspnbnQX9Pe1yJRsjpSFnuKps4zuMZKAnPnSrM15usLYW585F8d7C8gTzrbM",
  "key15": "sBo7bwcPFa5bNJGS3cwNyCxp3mubD9krmzU6j2vbBzVYrPbeE3TtPVoFsrXDxG8gvEH69v159uG17CMVCs6JRY9",
  "key16": "4Xb7GyZvBvJkg74NnTp4k7uqnYZwJgp7Vdt8jr2WCT3xJwZMPeujSKDexirnPkeuvmr7Hwtuje8PYPWZqt2oZEUF",
  "key17": "3XdunoT1Quntx6ht9Cz8c3TKsVDys4KVNbuSXyemi6465KSjjmYisrqJzgrMsGn6hFkBEpo4YwzR3C5exFrJmCDt",
  "key18": "5HNqT1QfYgmY4M8zcEGuwomppGbvRgoEdah8JUEQkn7fNnQbvMEyr5hxuhojGikMu8nnF86ekRMf4BCjYiWDQMTA",
  "key19": "2Ky6nVeU62moQkzb4pse2cvCR1JfLUcEUaCfnHdhVT35CsWXx3Zukx95KTG268TrePWTSVF9DLZFQtsMuMPYgpG9",
  "key20": "4Z5BWa3fzgjGzA5njZeFeJwESASd5MUEcmp9Bxrd49BCpYCSCaAgmFqo8jx8bYAeTYTZp2ow5xdht29zjaPFsZ9Z",
  "key21": "3EqKWYMc8t25djxuBQetZRvnJ9dR7hMdAQTF2RU7yo13NwYGEvmvMcsiBPGw1PSwvzsHvQF1w5T2vzZMtByYUA8c",
  "key22": "1XZKoDhbqnBnWnHrbBAuEzdf9yPAw4fLqQrpkrXwrU5NcPffEytbRzuUMRNbaTpT2vh6axfXbmRt3AzvDJppUEe",
  "key23": "3jgf6xdvc7svK56FTMcgskUPhcMQaNt4hzCx1Uo7svYbBV7wNvNdHXTshKpBTD8dR7MRb1Qkk5rcteLmWZdjJy1L",
  "key24": "57KYSMpbwkfxQ4TAPL5w7DbF5Cwx8qK3aAa9BoDCtWd6kc5JynFrCws15KHRHnh9RxMadjstRJakrjZMLDRwiNRF",
  "key25": "2QX8Ue2BPekRjsJfjQ6YXJeTbUbycUwz6YFUYYWJu7f4mG7pJEq9Az6aiC1gLCCK4wzASKNsDSk787zF5Q5DScBh",
  "key26": "3P122ahCpBXi9GH8KebTSbSmuvFSRuQ8qTNKM1GYT8YYSFrU6C1gwQvakcMSpiVoDf51NvSDJybmnHZASuFuLk2K",
  "key27": "3k72YdtNqAw4XWLvXxDUddg2PmjwoNaWTdHQchVgxYN5aDVg68XJ25N1nKJdvKWQ5QQ8rFwbve5GqL3A3p7E73C4",
  "key28": "3JmZp8eVHDA8K7HFdFMTEJNc48E7FEXaLBDQqgoWW6y6tqAj2y9PsHBm5i3gmzgEQXTGVWQarun2t9MkZLYyQ7Mn",
  "key29": "3HqHSKQ57csmvezth8VH9WkqZ2X9BkT2WfiZp7KmkDnwubvvsDAJqeLXhuDqjXKcBJfrunWqj33XfzjhPwpbpfDt",
  "key30": "P3MyoQFG4t8DKYWsynxGUMPXpgqje6SvhvBmw96s3UUHh7SckPGvAz7SWZY15GXL7EeWqNfnFpWtsxWk6EqrhBT",
  "key31": "35awFVatdM4AbkQPhiK5MrYvMWsh8MRGy7Z2SkiPbMWjHSRnBL5dJfvRwKmVM42AdbPe8jtXSoYytTz5nVbkr9D6",
  "key32": "5yH6bswfKbwkE1Gn55KVFAd3ax6jZk6EoQud54jMacZsdhbCJzYQ25HdFcMD1vEGtkpFn7AnCeAwCa8y3zf9sfdm",
  "key33": "3JapHE1XHfi45Y34w3niEMmLaVwiowZFTkNqrW49y1VKK5HrZE6sQ9mDrJ5ySU6q67VHwEFiV4JPioF793pcXCZ8",
  "key34": "3DMD65f3Zq7p3dQmCzB9wara13VWRsiaRjf5tXnHzkTNdMsWR2FDgyvM7od1tYCfCJEf5RFKHHQ3FShSbF5oM6eZ",
  "key35": "4inYpCMUrzpTczSd8oC5ZdPhAWPU7Y3NvHQz8Dp9RN3bsx6kQCweM4FEDWP9v5cHjpPESxb64sVe7tskM8VYjHXy",
  "key36": "2MG1DniMFtQj3mKPwiKrEHoAEM7S5N6J9XjmLLq48bCNfyxUKquBEND5XQVgS2S2oPFqhEeuXPNPTfAfs3nEZgWg",
  "key37": "2WhwCqiTsFTo32Tqn7F5g1YtedaYgQr1aNSy9TE7xx29AsbKETkQWbstUcSKyGbccFmcBNRg6yPFefb6ti1o1f6d",
  "key38": "3vD9w8DDzrLM7KDjob5sBuPy7Gdt3isksAaYsQYeSkHiRiwh1QWFW6irnddpVEAyCGaWhf7j41JLSDJMVGSYzsq",
  "key39": "RvZEtddDVyuZEz6Gd2oovhTp6X5dc89sKoy9SNoUUWwgH2HKqE2af5GwZQSHXH86YDSAS5cb6Nw3pxE5giDoQ8x",
  "key40": "4sPiNnwBAoHiqoq8ooAhcFtsox35c8ZfmMvcuFsREPi2oLubveGFdzvScJjYqxtCEGo1P3qsYo25MdKUzkVJ48gE",
  "key41": "3K8D2T7fze7fHW6D8Mqj6j6k762PZNGXA4i4uZ2hiqC6fvzysn8Cd7JCcb7otqVZwZuSiquw5PK626CCjt6PFeFg",
  "key42": "2HYjqfFGaqEGMaHtTrjzCyHYLLa29T3kQ33mDq3Z1HUNzQvAK8T62XkrXxZfQGZ4orPzy5SfMnEsimZcK9M7zhUh",
  "key43": "3mQ9Y1XKNpw9h9HcZ1skNUSKXpVrZCWsjSxLfzaNURxypK1RNQnDkmQT5BBkkp8SjqB1ubAJaQAhToKCAyA7GJdo",
  "key44": "2qbjetrKm3b4RL1WsuMscDmZSqjSuzsMHenBGGqAQdwMrqyNYWRNiFj96KLsfeVhkUMTYyLeWxNH2MTQMmWkPdk6",
  "key45": "58tHgrcjSvUYUgoXdt4KXsXWivGCSoe99wYVJjJTbMURNG7jch2RJD337pyUhgPkRHjv9cHuyuXgCpyr8NFRkv6a"
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
