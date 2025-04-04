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
    "5V9XX2x3S6G9m6CJu7R4s73dSSecLzCUzFLLFCQXCBc5TSh9Q7caiGin3WwwgbY8ZLwDrpLPgr7wDpGAv4Xkz9Q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gMLAELxHTEVbaqJBfHfmVFGimzYuwjgky6UCaBgLQGbCatnuboPzJv7zkYDBiS8jBR8jAZffvPKhRBoETGTM8c",
  "key1": "3njiM2YDAbMpoTCUYapvyRGsC83MiSy1gmHezWDJUxFiLgTShHrmzwwPP3YRDw75VJznpWsMS3u6pma6Quux7Q4W",
  "key2": "3PFtDym8Egji7QsC1Wtw4V2xNGJKUVeJhmVuFTctv7c71NHErX1TbnNstbBVPPYUkuFHPMsmFF1DL19AD1YK69gz",
  "key3": "2UzQmQL9JGfDHf9k3JPjxjBtL9QK1hxjNMTiEcstruhZzppFs6GXESPQ3NuWeJmPpQ31Pa9HDr3jdJUxXtkAce1J",
  "key4": "jGGFxXbbzUEVeQaLCALvzQdeGWvpmwrmtLBuwckunf1DNTkuotDhypprbiwjnyY59tjogkPTrnf88z39DjKYCiz",
  "key5": "4zEGCeQ5TmPcGnNu6BxLXbFPszteiNtn9WeCGiTBqmMyXxcdkTTG35ZDmrZWDPGoyyeyh1rBCWWbRbtQJ4ZXppkE",
  "key6": "2b83GcyjcEbF7ngrN66B7xNCFJM9fy7WgUrFpBrtgNjyJW32x1dX1G3fup4C8pPcC9pFhw63uMWLJ9FsYLtKoaFf",
  "key7": "iQEcV3gbHJ1NmFRTAP55sniKSCeKre63Vv2fsXrXuJE8V5c8Syd6nFRVBj97qxUKMbLEX81mjf4TkXq3QpUT7KZ",
  "key8": "WLxxpmHYYs5RP7Zy366SLodvnZg9PoS8E3ByFqDfJAzuh7YbTKR728gEFgCjEmtNm82eoHCfUsqR5BCpewUfsof",
  "key9": "4GWrUH8j8JizHTo7c7Q44TK9U7wH7CSvyrTrdWy51Q7e6USwceTaKKVNY9tAWYcDcSQVxrpb1dxDWCHR9rZVCWDx",
  "key10": "2nuCXxJvKXcDtXWj2jdGo5ENncS1kAVf4dE3RWsmvNYNv5vt7LLKNDmAxWJ2f5FezHeUvPoKhkTUKeHWze6Q9bhu",
  "key11": "5xerBDaN2odTjdk4aCvzB7AyEizj6UMAAPsBfQ6SJ8jb1WNbCBXAt7nM5iHCHxyyWhnCgqdGqdc28sPpF6jWxXi6",
  "key12": "3gTKBHro2owzaUiAdpxyVM7EPHc2oGVMJTeN96eht7MeN8DF7vUCqmnXFDQt8Ktn6gXjD4B6Wfjm1bJfKVZRWfrV",
  "key13": "5491oyK3HetbatwRB9ouHdv2yQJ47D8PyP2YyqoBzEaEwQLbxtjvu6ktYKQHVLorQKbpQ3XzrBrv1gkcz73VR9As",
  "key14": "3u3JsYyuGu6v25ABGQ1JGRGDMDsYT67wndUSkjMf3eX6YZC7w1JQBCwTSf5y62K6MoqATTCbpiWMaYjNq8f4LTY",
  "key15": "3Eb5WMubDdSFs1wXx2DorkBigv6RfVHvZ7iiLmoFJ6ALBmC7AJNRtjPGFVdEeocDMm6LZxhGKhv1DNFQrheSzvYq",
  "key16": "2qquC4ucfKvMReTCzied34veWnNg7KjgL9FufUxEWKCPMpvk9UuXw4ewW6s3Z8tQ5T2p3kXhJU64vCpf65hWsLuh",
  "key17": "4XzD3pkQyJBQAa4AaGYKfrJk5ez25ejYDKLNqfGfkkWtQGQBFTEzjNoFiEHBv18JbSUypQBQnRvm4amjVhFrnjvB",
  "key18": "29cyhGB6J69Z7gXUVZ4A2N4Jnv22LzSccdSrTXucpfsXe7uJAdFTwKXPFRT3gjugHmDEXk2mCaXC1T1cJQFAthEn",
  "key19": "4YxtjQGRmiQbBEqEo6W8cSykbx44hF7nd3nbcEBCrEB5Z8ZrAdY3N4413moyMdAnGLqfQLDDYrAw7tuFPquG4rvo",
  "key20": "2ests2Xqg5EUoj477zir8N8bdDm8DrkjAgdvkNwmp3KaCP8Pk1Gbd9ED24Z7pL53kGiCH7LfR8RJwrrbitCddyqm",
  "key21": "4VyvEtJuQ8xhJKhznLDBy4oA28PXMqNS7rHQjBq5vWDLXPTAwdf63rbQswBFkVXuK3fVBYrahmLt447eRHpGxKzA",
  "key22": "2ijG3iuts8GMZ5HqTwLoY9zzT4i6csbE7jFFC2UeHwKvnbcYGF31MhcATuofNTq4YYCbcXAWF2gd1osPy5SAKpEU",
  "key23": "5J5vvzxa1TMHVCSc3kk6exiKD6m4NPWtSGfMFzeuVj7qUnBAfm8Nd3D2JquvLjMFSHw92EQCemXzmdW6gChfpmbD",
  "key24": "Tx6oEpzqgT3VSnBk8qEtZypaFgw48jheLznJx8Nnyza3QTRoXRFbeXRU5dADC8uV4MYDxRisfJuCESjU8bt5z1N",
  "key25": "214Dc9gnLNfbZqNmFXYsweHPm8LUXk1cGHUNTwGwjfPwBZTyKpv4Jf7sB6fCSzcHi1p3Cx1BgCd1e4dB3arcPFMB",
  "key26": "5vmuqGDc73LKsPdjoQgeRbrJawhi3jW5DgnvBvd3WPYRGe2PMjZQBwi7Aebufbf2HJpEsrYbre2m1G7ENxQTbTrY",
  "key27": "2QiagNMS8UmPwcwfWmaZcJH7BXBL6eARETBxXLcK47WYMpKDgUVBHKREWmtucfzPvfuu1wdB81zsXL8fCj3eTcew",
  "key28": "3qbyZwAq8o7oczpQBWN6xDfKHv1DmouLGNvFFYCYTZvS6DmDSZey14gQg2HjLHhUmgfxxghH7o2KRTKLYvKRb1Us",
  "key29": "5vJxLf4cZqxZWTRY9CsDMrPAcZbrWnUofLM3fS1SEGne993xjNq6JhB3nDDCdLrwbBJkT5cWgFJXNdPPGb32aqn8",
  "key30": "2XrU3LcMf4tjueSLqsEEYP4vRwQp6ZdkseM3GNYrYDU1QCwzS2g1dNxJbZZHBv6ShDNRV9XFj3KzarBAwBsyVxcY",
  "key31": "32XgRxpjpNfhtFNznRupqYbwK37rm6WgmEtme7HX61WE2ihZPct21qL1mtFsEpjjoMB3hg8LjQtA2bwqiJrWWSFx",
  "key32": "5bZPD8mi8srk38QuRFZP4WKTb63M3Qv9RWqEqXhfSkL42PgQsZCAjkq9LntFMw2GG4rwrohAaxGZPEjKr1NsaKrj",
  "key33": "51EF5W6ZuKYbvTnCEK7Apuo3P17feohWiGUCTgVszH6TPjwdhjNJxDCwFUMvpRvqUH81yVj6Xkd97QaHYrMr7GNj",
  "key34": "4g9eHQ1Pje7YdWBToLTPiWr2JF8xTa5mBXLNrPbQBnN2FKgbo7KpbE1e7VeyNfL2potDvWX3KXuDyWN8Zt6xF1wB",
  "key35": "5oErHrDWtmKUc8CpnEtXg1PBjPfgXU1myS852EUbcXm42FTNCeQbXyLBj25wQyp78SvESFgQTJKjLBCy9s6wj4ys",
  "key36": "2XSAXbPqFEC7iMciBgByiGvL9joHDRwZ3kD3zYBzFQQRXPCxpf5L5DbYUnhHxRYY5UZfX9XNFo9LqE53T6kzYMjC",
  "key37": "sPCuMb7JFiRNYjJzjRUeUs9WQucYWNQLuvT9GibPDSvQAYttFocY3uxjXcYRe5fy5VkiUnpza2nJY7TbC6uuVbC",
  "key38": "2Nepxc9NpSKurGpTA6T1GttyziStu9Kb1GxaVE3YaXxjQ95pRLHVWrcF66MBxvVmbbwHVNbBYYi7sqoXHKubLUVT",
  "key39": "4eSyhnbEfaBp4e4viEzWWoeGAHAtM4NTmaB3YwttksHmmXcLhPrF1jUNrV8UD32f5hrwafHbqoDHgVQco3xX5WA2"
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
