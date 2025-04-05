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
    "2YQpMr1Lc6kGhXvtvG3z9LufmL87a5VNAHDgxFDZSuNmjxQcNDeMP29U8WqAVjvDu4KDKuyMHGyEnMX21zNQDABV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APAZougqU2zPBxChpZFWnFJZZMnVf6Uxpv1AYhPJGRycg9RMH1uupui3TXXpUoiBYG5wu7onJW9kJESfU2txfjV",
  "key1": "3QmEck299PEyUjiubeef8Sfw3UTpqjERkzfyTCjCyzg5264orKHMo3jieUqsoWwLP1sLS3Y1SX6BPVSkL6J1y1NV",
  "key2": "4DBCTKTKpa3rGncC29vE6FBqQ7B36U1Symwz5LaxfDyJiJLSusMQbRD4GEw2CYv648A8saQCdMc9DTixHp2zELUG",
  "key3": "2oYbTM8QiWKQHtD1iwEyAF7NuoeQPoyHdyjNCtP1M71Q8zjATmSFWH62KsUmWzhCWiAXwecXHFbmSgEw7coW1WxW",
  "key4": "2H4ipfYJkF6sjgdqAxLK7stLtS7U9EE4676YSvb5PZUNqryNWAXf4mNn9ha81m16ZUtes6VE1ATKPVR2yVo1cT3G",
  "key5": "nf7ktNJ5Qum64iDSHL4aY8FthVKvd7igs9JwXgFsrXZmRVyUwzdSEj1zD4LZd58at23tCj5KEEXf8XrZBYm3ZgY",
  "key6": "5tJ4nS1RXLsfSkijpEq6eFBweFt3QVHJUkmR3154vVrxAUG8ZoeBxaPXrUPPNCFRmQQxZm9Ka9euSaVzMgWMmekt",
  "key7": "3J5bvgfuQu6tpNzYWtwvjVVT12Fow7PZfzDd9gKXgy8TvcAibLnHXxMA53EgXFeg32Lpkpi3b9x51s91GY1e4ipE",
  "key8": "3rePEA8vrNFXX22o6ML1XTR9RkzikpFGMzXcd8znLbfaFDMYh5B8MpRFN4F4XPvzUn6by4qeAP48sgejP4qPUgvu",
  "key9": "2mxm9UcEUyJ8GwHGUwimGd8Tz6bbBZhd5yZcWwGfxUPa27M9WVv5SqRw899xz3fWhgceVndFWrceZyqqRK2f29wM",
  "key10": "3LX9phaUZy3VWLRQfsqWZkQv3UZjN5HxBKpbAwCgGbjornz4q882XxPZ1QUbdNCeGfbcXTA8hPrcNHMJMY3ksPfb",
  "key11": "59GLzwz3Fpw7xb8RwFY6fi6AVzrbwcx9UesvZQotxGUXnLYrDUEuQr6ZZpDy5Mdhs9xMctVAM8xnypzYFfjZmX9J",
  "key12": "5339pJYNYJ6nBwoN455hLh6qNpVjUbecEge4bmZE19GbRC5w4GSYYytUo73DVfnXMQJA1nA7CRooyeyfsagb6AXh",
  "key13": "4yvw9uVMDmcVDytRhdUPxfRYMhNYLTo3D6FSoJhDEKW7of3MMwVD8VgLPSTcw4iq4NzJpzy8zq8q63qxq2KkKJQF",
  "key14": "3GNLFAhCn3vfZhKq7MkmJFzm3pTJjD82CHSUL6mq9naMC8ExcsP3s6onp48kKAmqkrtBEBR2Ge1AH3Bjt9s5pLHM",
  "key15": "4HVu1HrqKpxjtkavY5axe7tfGbWEWdBDEdodYyF3ofzdk7yPFbp5w4gmhGHGGyJUxvk79wTbQjH2UrckKwMTnmaV",
  "key16": "2K5Zui8WVVo6qUZozMW45EP513ZFS72CV7wWSNy8ZogkgC2pSDqUXdGNDLBv5AWqFgdEDabdFeX6LtfR9gvTt7iA",
  "key17": "4sMxQvNAUvhV8M42xhqvuoBhCZUh3aEC1g97ppAFvNhMPB1QnQY9wGR6VAss2HgEgLSvD358QLiJ9xqoodaB2jZE",
  "key18": "3B2djfMK8HBQKFTqniPHbZQYi6qw4sVG7MWxR2GHA1YptxzQDvueoVCyFDYzpqRhavNpgJu8YwWBguHeC9L2kpD9",
  "key19": "4tA72K4dT2fYE6qppiknfkKijb3xVkMCJc1B7NUuPC26CH6yMP8HBU5E51gL1zBGfUPPEHER27yJMhuQkXrA7UCT",
  "key20": "3kacbZHaVqXLywzypM12bAUACLibrA2gSUp6PUAfmYc5aa7x3xfCXvjXEPaehE3iZoWLvGXT7dtZusZ3TJ3H4CaR",
  "key21": "3918yDg7nx3QiAwinqC4DNfF7JmsX4QCtmJFft4EkFWDvMxE9zr9aK63468kBpCpEYRqBVpdpdmXpDX1S9MewgDG",
  "key22": "2QbknWSTJczfUYyiYSn2MC7sXpNvuP2Yh4NKQnoYGbWhemgDrvBP7sHaJB3gjmvyQuWdYF9EsbZYSnpBp3bvKfwg",
  "key23": "2Ti5YdRL3sovrmNudDA2bceWjvyVpQTijm7HKnHq1CAzXdZEFWtFJyNwDYormrbKWYTphLHtaF9k3vWy6tX9Yaqa",
  "key24": "2CWADUwkY4Ps75q3wZR7kQYGmLDHx97ikDyrSQDLbv8YdbaLYZoD2KsunmYU5hT5snVx8fHv68UwHqqWELwQEJEz",
  "key25": "cWMcVC6j3DrFTovHYUD6LycHftmTD8TmxQazSpV8PnazgK13vBxyfJPhnKHhAB4g3xQCjaJ1D28mazpDe1hWM8D",
  "key26": "4kDpX6Pspck8HRQojqRgQFzufvSSuayrqsT7ikMW45GkpXNkRAwEegDmNj4QFqQi3hGEu6sCE6AvXfoLv72KtkYa",
  "key27": "qy1vJmUJtTJF16vGM6hmxioA6oXN4NArhMts7ggFX9hB7TkNXXKwU9ZWW64xhi3an3qvreKCJbMq2t1bp6ScyuG",
  "key28": "266CeZWK6ZEbXBaYnSojQEFWL1yme66qxcdecovdcLsTeQfEpEwDC8Uinq4qPMJWL9a88J8EwGh2iscnj3TAQXJK",
  "key29": "3bK9HhzixUxs13apHuZu4SAS21Bvn4dcjyowNzXhAkKpox69t7TupY5Ea3pfGyoELbBiQAwvdbj7c3wUsvKpbYA4",
  "key30": "4H4agM9vT7vEKKBBV3KkErnVWL2LCqF5bk6eiRT83VdV7KeoWQKnj58HKHg1YWr6pXw1TLV1NPaZwjuidDyGwAWp",
  "key31": "2jz6JtLssdmavLyXdqG7Nxq6zmCKigqeYDFPUpKh6KjWx5uCeCt19179tLAKMhBdfdxoQWfVqdEZpXresMavTyVb",
  "key32": "3buANAzVboQKokfvFGfnjBJoUPwHCAV9B9v9cBUZKd2ZsKWut69JM4wodwBusGkqihXcnDmzutGHoQhWzJchstQt",
  "key33": "3Ke4oSYgEgE9DWRG1mZC56eW8vfTPR7J3RovhskT76qsrv723g7ABnCdHzBKR9Q8NsACup1Kta6SmuuiZEDYcD48",
  "key34": "22ocqE4sK4WaUcMAUFhuhVxtAZzrV9rTfAkZHkURbtBt2tU2bcfSZwpwtjUb5bbDvyCLLrw3yHHesLd3yH6dqT2C",
  "key35": "59U79PQfh6RkBoapdVk67Tekyu54H4th8gmitqF5rabvxb87MCRMjs8ZJ6RPFkAYM8z7HFidPA4emtSG2zmGQCVb",
  "key36": "2rL5K4746C1FaiadNnavwb8sjZyRECmU7GNzjQghgvykBFv3kwjyxamTaYxasTAyisTF1sKECNacaXFma8k1kBDP"
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
