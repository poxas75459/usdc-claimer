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
    "dF4EAd72ZQAnx5MzaUtVoysmRV4EBDPEpsvkbc7ScMCtXhEz3q4VY1YHP31c43sXgtdJGd8Xzj324wy2ELphyF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awx3Gqo921njJSDrwoXaWSNk21UJ6EuqqqQmyYT4jP3cquWyynuVMzZH7Z1Hg7RpDjcaxTjsPtagb71KQu8NkeE",
  "key1": "5HZQU9nrFKj9stjpRAJoeAvaz2sGoHZLCL97VhgNt3rJrLjFaf7brdGHaavMmcNYMLeWCxSXHsajmM1hRWqSxugp",
  "key2": "4Da7TGZYZTqqQQEatj1WcRT1uN8kxgHGmW39chKQJJCRekf5HKoThxYv2rVCVt8rQJUQGFhMoTfutdEcpPRmt7hz",
  "key3": "3q2AjaQfjWGXdbfpurLa7kvd1BTmMcFFtZQxX8UzPLBnTmA1hgSRdQnDv2FbtjxqNuVxsP9L6prm3U5VGwrUvLmm",
  "key4": "4c1nQ6ocau57bcXTypP1gxg3xT9Eu645QLXgXzxmkzN12VMacHHJzxsriERaYgAn7T5jRaKJimrvo4QrREDckWGa",
  "key5": "5fTWUe6oqgtLenzi5HHDGJ1DX9zMsx9dhfwRntjS5bYyyHfJs8a8YZQUudJRNVNrrx12M3BfMwPYpj3vkzLSfThn",
  "key6": "4FiA6ejermdvchT1nVQVD1FjS9UHkh7eDG4t564oZ7gtfiYNz2WJHmY9k3jpuRSZuTB5UHwJQFYFCjHeMSDcAx6Z",
  "key7": "39Xp1tFxBMxSU3765BrcDGW48tHYzC2L7jPCBw4XJZNkknNPETW3UHg4kRG8Q5Hgo3R8JLLKx496nMn9mF8YTzwm",
  "key8": "3ESV6UX4BNoYPeuPC1ab6dztbmogSZPpSGKR6Wyu9HMvqwC9eedwJ8rskzohLd4RNhirF9eas9hPmyG48zo6kPrF",
  "key9": "dt5ijiAndg9R9LSE9678pJCZba7Qp1TiVZutW5t8193ioF2pqT4MqiUQwTvNetLvoPuZwjgXoaWUQ5jvKSFbrYm",
  "key10": "2sE8T9kJMATzimm8Gj3MeaycwaPbadmErfYUsYouqkZtCmPiAJKNMdFaC97NENH5kaZf5HfrbQ3FFgWPTXzF8Vo6",
  "key11": "XaDBX7pP8kDZw3DiP4FU5TGTR6q8d5VwwNUvLmUge4FwZMHRuxM6LSucYhRxXFkFmYhBQXCW1JY6HtgpSizNo77",
  "key12": "4j6q1KWAtJFhAajB6auxmbP4z6xEc1C1sha1A7Cep7cN1tGjwGtoTj9dekx2djRd3g3FJQcNjakcKWGVXjjMMh2N",
  "key13": "67P1T6nHWsYqyk6FNXFxmvRPWtKUWGCNPhAY2mModTqaGiNiLqTn41RLrYiLJPmFMdNW5usHLvHR1DdCfWAmQNH8",
  "key14": "2fNnKDsBEnb5fvqsTsxVyeJFE6XTeW6wvmJDYfHyskQQgu1EANCfbXtkYzycvxfgpnJkXXoxAho3Ta2rWnyjsxbP",
  "key15": "2iXvGKp3PZeJdis1HwDpPVggS3zW9y6u2yuijxdgY3F5uWrBdAvMeAbPaSoyWdmsNUekSH8taAvFy91VLj6zNLyK",
  "key16": "3k38kxkckcg4EWx78oN6gEZL8bTuRY4PTXAB4xWaPDgeViePN7v8y6svnyfHoHk81JDAYamGpHhQWNXNrwoPSYe5",
  "key17": "1FgU3BTFnUZYUte4nWVzzceUg1F9KKfMpy1r5bSgmxQD5PDyDKZ8MhS7bLvQf87p1rwt3yFQUopB8DAWRQUD9xz",
  "key18": "gJNZJaT2WWV1PM38cBcxDxF7AsgpDbGpYQ2aASbcPA1q8cXhRLF5Qjk32ry8Pxbg6dDyTL7Tq5sySP5iYtCTDpJ",
  "key19": "3VDB7GSqbX9PPwiC5cFJojPT8xYgQUN6taNx8dy8D5ygQoKmPTd5nzi8T2eefAKiRx6sPbb5n7PobBdrodiF85Ro",
  "key20": "5Usn2wffx69eHz1b2sho4oX8k7LGh3YNmhWhQXkhGhuYFu8u3jDR3vwGCgGNB2CrnU8jJXKABw8eJ4QSh7pNScHr",
  "key21": "5E9ewVwBiAyMFaJ5DSgHmKz1cpjLxer7mC7q3MiN3iWn5eUVA2biUbkGbPcZTgym7Xtr198GVVTyW7M3HiJ4eRVT",
  "key22": "3gY3548gEXpZqXGkvS3VLQQmPZa5YcNvmmk9SMjA9DNWXTKovRkCPvgPtASMcW855ab7zgTbiGK59MxHPDhHfZVA",
  "key23": "5SvZABsc8W2cRwjTiJ3bJdqFpD9yoCoq3jvipGAnE791xWU8qUyRWHT9fkENPeeUVfti9cxfUsazy9HfyD839WcZ",
  "key24": "3YkgTzDwnk47vRjgf7N2wvXeNFjbvBt7p7Wub6VT1XYBwjFUmDEMJcgt4VEaudMt2sjpq2deevBNENKC1xC8CuwM",
  "key25": "4JLnFKWcawPjsm9EUQSyjDKhGK8Xiy9FM9DipCx9su69oJeWqqa6RBec36enb3Nheam4yVG2EEgtQ489ZsovZAF2",
  "key26": "2opaE7eHSwFJPtbwFQUp8EoqdZSFHSfEY1USYZQHTuSTBNxKuxAFom1KVKKJf6fpYoV83kZREaSnkRLsBAhTbymq",
  "key27": "3BZyVxRA6fTVCdNLgd6p5MVxMjEgyUTQrYSgThgmJWEkkGPqrQWsYBLcbKNxygAbCjcUWGKvDZmAv3qLFxaMNEd5",
  "key28": "4v8c8PmKnbQdF84XvVwMiRLpu4yyvjM9qdfWFQpA6T5CF42VfHSPeSofiVVidmy3AXPH6i9ymhtxCbJuKvExaMMP",
  "key29": "45Uf6NGEgxo7BBas8Vc67j4xaYmSPNLoyvtAsjNw6mx5XB5qdLUbyZXhrmktY7QyXqvrnhRNbZQkeodVd7fLPTyW",
  "key30": "5wjpHFC62tPiWnEMpQmNBid1uThQ2sFVqpU8nCZJgSwvG9s2JVh8pD1vqQrvGht8XrsEgGQy5SzYpbPoKmsdknuv",
  "key31": "34F2eGs8E7LzBhttxfk3vjkrKapUd9dsTu9noKJXnawP9MY86sTVBUMLiSzNtBNyxhVVLVCqffZgumrELSNJNsJ3",
  "key32": "sriv9x8F6cjpzoGooxQCSyRfnhbG9PPspy8Cajgqq82n85rWfZFSVgaXsQZioHNdXQKjHmrcCqcbLSpRU9dKD7X",
  "key33": "5ssAgFHtEvU2GYe3LywDkipWL8ajSwXdhv2TKsgDvuPYcTBBoecvf8hxih2p1NZnFBNcEQ81DQ6pjPTopkwJ2mUK",
  "key34": "2ihwRNHB7Suoct6SS6GuHYgy8Kn45p5MpeG2yzsr8RUuZsYMAcy1uJwKeZ4aUEWC875gUKiTVfKtnPjHi4BUSPea",
  "key35": "VmQmKaxjdZ94ZUUnpcRDHnEMQHTXcSTegF5kfSkZNMdqLw76dtBAH6BixiLF5fh2view2fBSUCER2n86mCcPjAC",
  "key36": "5NfqcEByEfWBwNGX8NtMB2YdSTPLCGbb75LEjTRbs57ivkvVJRK8idScEB7LGoqLgrbfaxeBrkfBNZvSm6UREjjU",
  "key37": "3m4YHokasukVFRECrYtfFEpMmHNo5rH96STtPeatKfA6Xv8xBFVWkvcZMJFZRhJZSLjCKN6fSpBXxa5BwPJFWPqK",
  "key38": "3QdAdQBKhv4oP8DVVzWsFNTgiR1PTwCYdzytBmtxUpeHw1Eo8qLXE62T43cvKXEPCxLWiXERLTcnj518S42yNnuF",
  "key39": "5LmZh4jN6qjyZkmK4uReL2CgfgLqDAq6CCSKtPP1WJPfYXcvaEe6rtFMzLXMVDN885zwrdByuaC16pYrn7kfRnY1",
  "key40": "5CnyGs7GYBBA1hDP98oRYnuzGagUwP8KaxHSe3GHXQ396QeQ7WCuDNPkzc3nE48cEw68eeoAs5P1FWB2CYkWs8P9",
  "key41": "wCGimo2DQzE7kurKnFS3PgBX3xZ4UnX5mnxZAfHdHgGvrPcmbZ72c6fhTg5jRiKhzuQ4ugugswEmM3Y21R4CrKg"
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
