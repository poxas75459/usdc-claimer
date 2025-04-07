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
    "Xm49zmq3NFrfQomLtDNtNsYcVoAJTysG5PKQza2wqubmFnv3GdrNisrP3DVPYeEB2ZyfN37VkfNctzkH8r9j1Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrqpLsKCxTBpc1vHWCdqy57ugu4Eh23gmcLmEzCFmoRNLkkTTZr9Qib9F2pt6Euq1SEbjYDvQK2JSkqLwUwEmVJ",
  "key1": "2bkCjonicDTyA2U4QraLaFXvdzgCyX8RqtbmxKdcRShYCL5mphSfEgSju3HVaxX7KihiirbHghHrDWrsEwjJ3tJm",
  "key2": "61FGYB6Ht4PkhwPLUb2mCQ5djQ5s9k9QmNtawtrZgwJdsEZAonw7QUykbJcBoepRZbJvi5mC3BTCBkDut2Vnfu9V",
  "key3": "3YUrQ4pkP2xVhzJMLy8xPDC5cGQJtA6SH3kZmFtU4wPBv4J5y2TvsxXHNVki1roZtDVoaPvcUT7aYXzcsZXZqgMD",
  "key4": "5bXXyf1NjizRSpF2DJ29KgVpXfHFfPumjiAZFPx5ewBYnd8dFcVQsKxNxNRE7vDTuZPsHa2RVqMF7if5LGrwiiah",
  "key5": "5aDpn6GdiQFksaCtT1PmU2KbyJk5fUDK8sYo8SrnyKx43xfEK3sUfaBBoTpv2VSMamhoc8WjUevkRrXoHqiUny3P",
  "key6": "2dYRsNZvT2y1xcvxPenLA9f1EjFiQMKnq6Ss4TzXQYyWFXtRMyeFgBXm87RhVdXBq3iSm8MopomHNuVpYyocRYeC",
  "key7": "4NknHPuX3SrzZDp9KerW9HtdG4VLsoMxT7Zx5odSVd7KxWJ62dF6nUmXrtQLPJn8THKG6w2RcVACTR73To6yf5CM",
  "key8": "GER47o3Kq18tzdWoDSsi6ouJir2iA8PYB2QNwwKje8LPz8LRPrw34n9v8krrwCX94UKXv39ka5ykakiauobsgoZ",
  "key9": "2ejpKda8P2MgQCGpofC2C3cEAHXNyHQGtDjUm7xZLM87T5T5VjGsVKXW93R6D8r9yM3c8QpxJL4uLaVkSAj3xRJg",
  "key10": "p9DkWhu9pkSbXM5mvB2whw1yN3GZ3a5rkZP1oznB1yKaUnKkoYH2ocoKg2FjT8Abj2ayfjh9bcLa138YvXGWvSw",
  "key11": "2eH9BPWFQr3uC2MbAfDEX2egvQxuaHbqqw9e6JjB8jW7Q9mccMZ4AYcHK2R4fNZBNVrm9YUf6UJZ7MJDWCoUQ4Xv",
  "key12": "5hVrHJ3yuzNYyjDDZBeFJepGH8oQWQEyfBkz5Z86JYnn5e4ojxo1QSamq4SwDZvu29kEn8eK195fcViDDeWPGGGL",
  "key13": "41QFDoeox5zJHmv3MSTQXXe2XuFE1FW7MAQXGpTJrxDBYnfGf7htKGjdUj8Djr3zSNQ1rTaCWPa2xBk1ng7cChxN",
  "key14": "5SBqjbZkmrCFJ8NR7jRXm5fr8JxRtWL7gysv5x4mMobpH77jTsayuLswsGAFgpzvw5xamoc4dQhL61wKAuqbVyqs",
  "key15": "2kyjhwTf7b143np7fYVMGSuJ3AH91ufUk69iAEbwer8moGKLWfUxYTKtdxv4CYAsUdMyWxr6KKQCGwAnJcBVcDgJ",
  "key16": "48yEEprPvxJwyvuyZaUWQa3J3Yz2coYNpEzXoNGDYYAwgmpFUTzvp6vQMBwp9MWF3KiauNPwzoc3BMnKKoVXkM8K",
  "key17": "545Ps86jDGoo63L98PWGQFj1DG2hLmdeudapxyN3TbbKS7MCUUSNXE8dLBSm38EMN3WAJXC9zFrYMKpXn5Liwvci",
  "key18": "5Ntv3rpRJhkFnVVNYa57TNVZcfMBXayYAfPtoME83LQ2uBU2V6KAJh34M1uvNVX9umhj3w7c4hJxhKLQFktqoNZi",
  "key19": "4irnYKY5ae6o5fJx89tL6gxmkvcgPsCBk2GHuCNaTxhHgyZt3KygcXb7Z1HJRPSertF7EMTSyaQaaoyQHZ5UgGDP",
  "key20": "4ZiRMNzgaL76nThP3cgu8gAeB5JXMcEJSye4PMzzMJBWwd4Ftfc3WmaDXMQ2eqxi2oedxhJ6pK8wcXMLgwLenc5c",
  "key21": "36MTy8c5PZGnzqTqfL2FRjHF6oEHhcaGDLFK6MmWpieMosFW1iTU3jayp953nCtJAfp1Y4SbJYeNkVKSfEoYfFSn",
  "key22": "5p2fca3iEb5Eztfq3vaLeHPWKXEVGhCQDozu1NtcRNeP35gdaqyMngc16dDFKjS1Hgwoc6aeLhBX2N1QsJVRmMwF",
  "key23": "557YTSWtMMgTrvachv5A3dfRCqQkb1aie83FHjfxYirZ2aF6btMaFt8kH9KuEPoVwsyim7UwPr8phJVxvKzyBLo9",
  "key24": "5scVMXdEBtpLDN9QKLxZCyqPFuTEy4ReboHAZbDUQv25mawYDrgd79ER1e6kUWtRVHP4L8SZYgpiEVL4WEzgrWiv",
  "key25": "K2yiNdd9JQnhFmnKF44TAfDgECChEpu3kz3DMPwRcCdUuXfvZJTqUnveyqb9bgKhZv9vU3oiPY3b8is2NNRYjYs",
  "key26": "4NTpxFNvsHs5mQyCzmFkikwUsUVPZ1o2FaVgsgqeP1i3kuC3MyaM8h1oAoqzUxYVh3JMQemPkLZ1rn9YmuXYsDAK",
  "key27": "3Muwf63SiUAnYu6Jct4UsMEDs4KUBUGtcJjypgjyn9sAwk6y7beiVs9Mfck7sHnYWGn2WNHBnw1mjxfxjj9YE4AG",
  "key28": "3UxssKttxiGcnMermvW1FcgXofjCsYZK9uxue3vyCE9TfAsPSgTDKGmyiaqSxR4y56xr9htnyarTGHjjQi15p9ns"
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
