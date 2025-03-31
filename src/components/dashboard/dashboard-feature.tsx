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
    "4t4bTtLMAhHAgvWtEygDDSJfpXrK6FFwXjQwyVMHsm9WXeEFyBtPXUdJXC11kVpDEEEUdGiJe6QxAzqcLVSEB3xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RakHppALcSPABBk5io3VovXiDNQP9doxx95KHgUNcpj4YNzX3qc2Z9TqRk3NnMbU6fziAFLTSBHUezC4nd2Dseh",
  "key1": "3hLb1cQNy5YoaJSdkBoiJGxaGXQr8VXJc4ZfuxbZKt8CuzPsKp5xB9ksrkte33GXm8gHHSX3XJsK34NmXFnx6LEU",
  "key2": "NSHCwDLu1tW8AePmNdHvJE3fiufv4sqn6FQWb3rHgQJrChjnUHLZJmNLHeT1ZLUaSuCM8dQxvnHqugCFpCk3dt3",
  "key3": "2SatnXfbnrZoRvZ9Qwaw1Eo3zh1rA75V44xhMmuruQFDV72AmK3FE3Gp41m9QUT5L8r1aMFF4HfFjfzvCiyataQT",
  "key4": "DxcrnuWaMyVYwAV2FSZWtHmAM4vtfpoK62RdEzHTs4QUFH2XjxJj3wxP3bQsnRmXL97gcqVVeU3NZSDsRucUXni",
  "key5": "TDHSix5C9ddJHeK3zXm93VSpc6wRGw1Kh42pM5hWsg3rEWDxXtH8FQ88d7yrdbxkSnSbpSjUo1SAhbung1qoFgT",
  "key6": "64rMJrGrEWmHNnQvg9MdDGcs3yYSG5fBAYvzhvQYdUaJeD2d8VQLxH5qEvgdX96Di4sbgZvmnMkNK5Up5uJ9nnwD",
  "key7": "5ZXPzgK4UcHCGYFhSJdKSxanz7VkGfEvzjr1u3DDMT43yjuksnviEoauvxmZiwwh4qQkjJ5C5QD4ALP6eMwU7vnY",
  "key8": "65yAA3PEqukYyGeFprZNVv73bX4hzCYCDGBmXehY79PvQZqjuYyBQnrimAqpTi1aSghv1vTjFwTJcrqwhu3GmBQv",
  "key9": "5cyEV3Cwho2Gf4RhR44ym5fF65KD8RVzwT97j9a3rpkaKKZxpSqVT4UhUGjFLMovbfjxuR3ka5qfRJsrp4UG5ayr",
  "key10": "4yKjeKZ5qEybW3t11NnM3jAgsuLc6EBypPyj414TuU13JZxjaHKcZKrscspapXLxmYLxDSpTGLCYXtGNHpnW5b8K",
  "key11": "4BfP21oKSMEAqu5GJavCacVpYZyirD6LyJmWVXujZJd2gBggvU8uC898gaXV8FA2JcrDhMXufZ6kMBmToLS4cobh",
  "key12": "3uaKGh9xPmbN62aaQaF97132KywTVtnRgruh1hGQKGvLvVcq1i67J23Xcw3L9xCAzthgSLVTTsFN7P4msKhtsAyp",
  "key13": "QKcerPLHsK5R2ip4DyvxXVDX8t6YfrDhS2kTD2BPxXzGAsvNkiqMXckzPKGbAYbDpZ3CBkALrzQ6tMEe5adc14J",
  "key14": "2A6i1FxCTZcgRNZtQfpVFGYmFXKfMcZrQChujMeZfhRuk2TTFtLzCZmTgnuUgJrYZNV2nXBzh5i5UYYPgK6oWacp",
  "key15": "2z564uMhxd3RKXsMGkPqote8pKNCYpuexYaUxCZK3vxECk5SdKqKfqh36xmh4aWkS1f4ue86BrRgMAhabMcQ1cmm",
  "key16": "5z8KyzZBHMuLYV59GDKC4i8FZVxCPRuMpmHBS2HnF13fUK58SCF6KBRb9PZfQEcwufBANPm5L2fBsh5GBzfiGj2V",
  "key17": "3YztyGy6RQUPS4xH9RZFuS9Wm6vKGq5LFdiPTWe2UH5mdN6epxPJA9TAB1bXWTbjNxQXbFjmodrZuuZtppb13rR2",
  "key18": "3WYRjne2uUiVe3VNVKixHcVRQrqRw4GsiyGKBK4B7i3oAY3wCHQ64awk5XAsNn3xp88LKhfoeyFMc5pBhLJgBKSp",
  "key19": "2DWWeAQZrETGPtMM1wxodMmj4aKzq4SvePcPK6Yd2unWK1bSKEHQpkWmNWKAKaUP2QTxLibmUK7RVSfnxjgaNtqE",
  "key20": "67TEr6fqFupBiAfa2GdS5745Nyjjvc4gMHBtb6k9z9Dta8cZcVy19p5BzxZ8vkCgHLsnYNqb3WD4TBq27u8MQLbV",
  "key21": "39ZFJeXv1ko5vXuDboftBRpUepQ5H4BYhGvW1utMk975Ac6NZcMnjCDdWniRzs1kGFQCCw4rhcyhT5KTr4VSjt7v",
  "key22": "5Y8gMeaUJ34x1Udc4yZ9XC1hQFtjzaCf1pE4rJBoZZkNBpQ1p3KsAdxpwJrA6gcfKq1iWy5QaER526MchKnmiK7m",
  "key23": "J4QGpyoqE1oCSmUjuNaePrTTGHAPyWvauqdLHtuMrUCgt4W5kNfJULjXx7SyV2VLd5yvhESkD9x3CkcgchvsCwi",
  "key24": "225PcrroGqzYr5Vy2auQ44hJRW747mk457apqeUUQSzHdoye8LBDERsTih1TNmRVFa4RRxrkYqX7Jc96cPTQP3fS",
  "key25": "3mCbLUe1aiu1zc3KHZ9ok1z3bFa2n5iDPvfnGET22DHyyziAdzqAy479mqqP6YHDA2ZgDgXXC2ziyZsYbzuJM9LU",
  "key26": "2kJ2XX4cMs9WWCB7pQ4L2KfUY6ysnx6V2mBYjiPpJKnYjYvsQe5gM4Q3m2wReeTE1DejEbNfSyJd1bXWU8oFu3Zx",
  "key27": "5CA2fCqk6qM255qKrA9hquD5YEeWS5PKmLH4huoNiG1RXAfvAraSABihBuvJgWX8K24AKs525vo1bpjoPR69enTf",
  "key28": "pdgSHouDVhtPz1eGGf8Jyg2m3Q36sBejDfv3B4w1vzgeePdFGTkpuLgXk9YBhJDXWFd3oPuhiCnUUGG1tbAdrdd",
  "key29": "2yicnFtAuFMHuTuRt9b1qxmtvZb8SS59ow2Y1oZZtzZZRLvXf39HR1uPuwFxdC95Q4aKHSA74c7gx4a4Wkk6EL3A",
  "key30": "5YkknTpyu3GERAKN3rRhtCqtBwPK8Vya8rV1Sz27GMu7AFn5ccta53tZ4guyvHimdmAZMqubBEaR7pCn3m3YzUWy",
  "key31": "hmxVL8c3i71ELHnwfyVGkbGiDXzVnfybrR4r8dCNdTEdZt557GdN5cPSfSm67jnMYFwiBhxura6MPbftStVJ7Gn",
  "key32": "HqpDdWwGkACSpyGYCP2Mu69wziXtWV8KqwCXLNu11Jf48aYBpxjPgdyyGRwP1M8DkvAxdKnVD66A4xkkFrYcVE4",
  "key33": "41GsYk8H5iJ3fN31mGexcDFBnDnKRkBfxb1hQZ794zhbCA6nEKppFjtxEKYQ1nX9AUE4LFB8DoXYQxRFwP2gu5zS",
  "key34": "3SKYEkpxDDhUAqYRsroZFPnQRvfER25NeWw3Wja665hfLpsLUuAe4SQUTePUDqAeLZNVXXkZUMoNTKyo4YHZNajD",
  "key35": "5FYwFKHNJjmBhtVWiFzjTUzd7RWgZ2kvrSdKVEg28q6cZwo9rcy5uHcQuncvEWEwbckVC5yn6rFui6eUzgXuxFJS",
  "key36": "5d9yEMuyP4BH3ZpHk4kehiYQrMwDUo2i9VgnNwuvpbM3VdDmDo1LuciL3FUPFev4gXmMCT3dZhNvvFsqM9ngJJL5",
  "key37": "4xkbHiPyiusfYUVkMpPfmZzPHKUNqWXM42cGJo87bN7BvNc4MxAM2zLfQm591wr5NWXhxpYhWSpsHKgGB7z9sxts",
  "key38": "656nEWogZuS8dAevw6a7KSpK8mXUdJPjfxXXeA3ccerxGtjG6vsSogRkVMRffUBLav7NS6teEA13FxHs3oRQ9h5w",
  "key39": "5kcF9eVutsiEzAnjf2F34rbcfJC2mhMjBabWBAt7XvQqnB5JmG3fx13G4Aida9M3p7B3gqQeHhyRWchfGRvKZL3u",
  "key40": "3DehyWLDAqCVXbyv6jTf8QB9Mq19sY6nTk5VWupxoS3GqLybaZjQEByxPZkucjGykD5DzEDGPW3Q4JzjR57BcsLG",
  "key41": "4dkysYYnNpwr4kDvaDct2byJT7Nb6SbUVhWPCA58FybW3XuGF8TnVPFvGqh8DZezwou1FB5zHvmw6ngMQ86ihoQw",
  "key42": "5S4zWQd9fGmSpMpFtgKwVnsFFEM1rFnAoWdDsYCLC1tdoR9uUKdXD61aZxQiwEpw4EH5r4bqJZkX7yCMnbuWtBCh",
  "key43": "2jo611AWqGFiDZ8ChmCvvLmvbQA7xTQ1DbwAaJAYJcY6wLgacR9dc1Jkm9eURcDFbjsVco7MTVZFyXCMkwMbbjgN",
  "key44": "ZmqQqAA5sdNff3FkgFtMN5tU5ECm6dJQJB813d8csd3E918gFSw2baZXvESFwWUWY5cL5cQ3ewvyf9Bet2VMXVB",
  "key45": "4PFtzcEcW6R7GPxcuGpHNUmiX9m8AywGoH2rMhFc5hHNg5sMezf2tBs1VtQjvEqWv4Kq2khGMQCKv2DK2wKZPnm3",
  "key46": "4H9sa2KHVRE3mW1n99wq3auFcehgZbcjA7rbYe73XVzSAXZwcTWL86PhSpRQD8mHzfqL6JXdCWTHVFMyAkuMPPC7",
  "key47": "3WjgNa4gaD811xzEXJK4fFAHYcU4c1LDZCi5jVzC2t2kTXUhxA7aRWMVYYnmmWrZTqfe9EtBB82QVZUMV9akSnp2"
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
