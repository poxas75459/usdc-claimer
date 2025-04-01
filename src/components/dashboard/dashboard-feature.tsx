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
    "WQ1dyxmJCSN6VhZMhBaNvM9jEyx9qZmYX5Y8mgTzXPChzELfyYmsHWDW4koBEQTkPF81Ywb6R6jovd6Y2zLTjH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdeXrnQjBX1rmo5YieHHiXxFnrY9fmVMCESFqshBMWEX88juZ4A66ebu7Pzraj66ojajmZ7sbudA6aftJEAHGjw",
  "key1": "5ecjK67My89wWYcMScbj8FbaMYccZK24QK3W8N7zWSDEESbHnaHtTRWbcyHhT2S3UnxiFHGXSUAEgcsptjS2PTNB",
  "key2": "5HMjKJ9NCJtarPBJw4BSUXHkcZifgLgPGJNr6vUXXSDPfXi5yptUPL5EzdCAeVqQomWrgxsuPekCM4m1nn9yFihB",
  "key3": "5PiCSaGhptJUw2xaKdt2Qvb358RRe4i5bczVG8gW2YFf3LZUX8dVEi7Rm88GHgdBUNnGA4oS37bc2dYuoonKjRdz",
  "key4": "XuGupDhN9t2BBF64JxeGah9kPGsc5HKFC5cjaYmahDyYxYt7Nc61wsZCUHDEo6RTi5rm91PVKEgp88rw52NEb6r",
  "key5": "3oiiYk25fMYw5BVdhGe4EPw1urhMuvtRRxjnR5qHGSEjxQm9Rm1swsG4RhhWLJ3iJwmCPPQEEqSfNkFUvehCyR19",
  "key6": "5hhh8RyJzeH7QGhdroLm7hSaNYBgGYVYkc4jpaURuigYhZpFbYgPY92yUvvL2yCoJBcWGoHZh4KW228C2GMFHRFX",
  "key7": "5UDYJPNdARdLFC6P8pofot1Ueoe6MvfFkUApxW9onS52sdfkD5vHLzzoMENTa4rmL9nHTWL1vyDuZLRdee9LmSax",
  "key8": "46PWGQMHbidJ4FVhZoZm1saq72mmnJAeizLfnnJU9DheRhpW8Y6TWHQWghzqo8zUFzrSLFXQcy1nVyGcR7BbB9zr",
  "key9": "qkNq1ZVbvAS2Wd9DBdJonnT49Q5Zy4yNzGgebwg4raQYvakxAMuhzvNh17Qc6o5CdhrkLDMLu6bh8XPUQcEMTG7",
  "key10": "4wRRi12VhEG5yuWgTH6fjstWFUZaUbVgEjAQQoUWmXz9AjBAQDDJgP3HDdGANbLhFqeHK1qoophysB3bgwJB5Kku",
  "key11": "3nfVxVaoGAywGqvuqCzSFbvXXJo99wT97EfeMdHBKkU9KvME1LEt1bWLyJv4F3WanxCP7MqQvKE3xgTVuMks9Az",
  "key12": "3bsotKXv4LSj1u9EqspBqikoCPHkaNV46p2yQB7mkLnamvjV3sebsZADbgp96xX9TUjeNziD2SudZo7BEHiuUVyS",
  "key13": "5UPBJvLpeV31TZ4my2r7tN39jmPEBmAtf9xpCMfEPeNiRAfno6wgL2Z5NP4xdviRUTfrX8YbAqmatTgsw2WykKtv",
  "key14": "57ginHdMH35h8h4jrBkMwC5sqTP4Js8msTgZmAo2ZYzd1CnSCYB9y4Jy4ynWjWVLJX2jd56nTDP5pqznwnPfuQ8G",
  "key15": "5VN4eWBV8ZxZQTPcHwJEa1ATP1LCrBC8m3wxDUNaZnLRobs6Yb6fAYzamVkPQ1JR5PQ9QZr94eHeGWg9cdRtLLSL",
  "key16": "5ZPrNPxKhqxHgFPEi42hv7Ak3TGD87vVYbbhz1EQAEHD6xHZJLuXSD2xpeaAJNsjDbAH6e4z9YhzuMTvWjkxKgqb",
  "key17": "4oZpxBVZK2rJyvoqbopVJBicoEe2fs433NTmZoc9LTitpCdtsNi2guxV4fNJW3Q3dvjomhTEFVueps812M4zuE5n",
  "key18": "2nqrhKjGFj3oKxmh54VZwgDk11aYN2svd5UPbqbpfKeMQKqBu6caNKoGyuZRsLQzSZoEgmC3v9xhDATZCdz5qDHD",
  "key19": "4t8qkzvApeLkDG6PN6hPVVHB76PVDw4WQHVv4TfhkXMxYebNwa1GZDAUhH8Ku2PfHGiVt6aHDLpgsPj85uEJkvSv",
  "key20": "33NENg1mr1Htmbj5EckekavyA3iS4xNypBN4y65RrsfWgCGMz9LaF4vyYvPMyXS7CjsxFPTuWuvHWQfurcF4hgzA",
  "key21": "5sq5eij2fFqGCGxjGJhtc5SUszwTCLv7UXKwS18B2fZmuAxzGjL3TyD69sHKk8c4dnDoSs1YB1L2Crm9RFHgiE7H",
  "key22": "Ns8fsGx4ZGFTJUTuhgFihWp219Y16T1CWqMxg4o2GB66vaMLsgPb9to9ZjfHUYBttpAtjWDj7hvt5mQC5mM9vkB",
  "key23": "5M7j7hB574MGsudh2NCX8SiM1rxCNYHaoKCyjpYAW3BZP6jL575E1xrM65okzsJFf2SF3UYqrvLFuwAffgGmeaBs",
  "key24": "5FUsCNHBj9bUv54LobhE7imUmKwzEwjNjGiL4mKYMwUspLFbqK1LM3kbTQqg2pTgvxHaCDhEiQqPtSZoUDTKN4Hp",
  "key25": "4woePbfgfzuxrw1sEVuRcDVir1J9sL1BeosboGuA6VVRF2GdmQhXhHWhV7pqsJjWPRoM4mVB2cnKLv715Gg8wcAf",
  "key26": "61vgv38uPP67sWhthzQUJyC3UWXZ281gfzRT4BnMwp6w3PepTrGjKcKF9ooBmLVXEjxymdxC4UZQPPhAi98beFtZ",
  "key27": "bqbWKyVmgqTHvav9YsY3PTsH6dfSLEp8dW6BTbstC1nLeUmg8u4aHHUp2MzDoEchSSZB3o1DuCnV2R9Gkd8FnMZ"
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
