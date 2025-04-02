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
    "AD5zWGfH4ighwdiAehNgDV3JtZiqnEsNMmpXWpJStiGURQTYbt8YpjUPS1sbxpKU5rnSXwM2dZwLj9urwqvYtui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sonb7Vj6MVfeqdaDyJar6wAL39uPz5f137WKnfYT8XB9Hp9a1rv6GpXccr6xVm8Z9isjSAiQGFrjgdE28MC9R4o",
  "key1": "2tWWLxg6D9JqN6ZxAYPBEmAEBT8xYbaXje1KrhMve8EYxJHEVY56kqHZ6q1gdcNhkjzPM9X71yKZFDBdRu4MC78G",
  "key2": "2AaBqD8vkjdrrkRHGVYhDApAyrp1u8Nj6Kzfx1ZCq67HLYU6rcpQ9Tq9LAnC1jLZtitRbQAPicmQoWByp3BV86oa",
  "key3": "47pau1CjcCTyqdCFb9FDagfiPnSJXTJ1NmXHhx9rreZvicX7Gbo1T8qfpL8krxy7WC5iV7gV9kRqauDPxncncuZ6",
  "key4": "2DopkM6spPfKv1GsdjxKVhzFqVFViyWbWKx3jAupuBGcRYaUPzpsSDhzvKXXGe5fFfW9hZ8Ca9KFmzwGJbFx5MNZ",
  "key5": "5AVgfmdsBecdcXvm5pEP435iQ7VzXY9ceapFTqWD1Jrk4zH4txNP9Jg8WGbXssebVbyqH9GZyTeUpXwMvnrAcoud",
  "key6": "4NFwYXdfir7X6CaPnbxDXM42JQUg41mXtzBAemUJTLnh9xqZgYNtAXXQBLP7qWMthz9FYYU1SRE1TU9FbyS7EXmB",
  "key7": "3Vh6Xx4KyNh72VLXuBnJewSTzAGGLDeLER4dkYCzFtJsuw8eLKkVuLD9hZfNvdmgaAGPbqKNSnqFVcsskEHSijXT",
  "key8": "5MdE1o7yzeMbxTQXgTZ2T7ky3FariGezs2rmqVuBkGiMXtw4LDRJs3p5CC8HXnPNeKpKwW58ES4YpjgTrR1x9jbo",
  "key9": "1fbagpyDVyM3JShiK9P5kAWLhfNqQnZ92vqnbcUZCuZzJmgF2YjdNURJ2GxzhWSiSEVjvQHHfW4m8CMc7Zk9hbs",
  "key10": "4ZTsKYW4jyCMQXJx2xcSDVxPDueLWhBJGifaS9kwvMPpNxFCukKqPDB8nhFz9pwHrz6YD8tFNpprURmY2FK8pxKD",
  "key11": "Kf1LXJPBbo4bwFPj2NRQVRGbMgvZtuYfaErwEYo2Z9xMFyXGQ229ja89uq8cC5ZdsX1ABCbGnBKaVMzSmBpLcCP",
  "key12": "2S6UMSJPsWguCskCKiqfTvTpXYpTAGUsqGkDXEbSEy8WHnUahpJCrDEU9regRyacXAf1KphTtHrPZvXDw2M57QEp",
  "key13": "5V6tcLBJgh3aBH4RHbJ4WnHTJxGtY41ZveY4rK3voAGpbP6KAVMUZm1YZiUyDpr7hguna8vKZYNqktgmqipur4me",
  "key14": "4ZNHtRFnJkL6WZBBdAsQL78aUBpXggeYsp4QUDpSMS8qvSEKUXY3Ruye88ynVo7XfF2PMDFiBKJcEe6hsiKkD6Lr",
  "key15": "5A7LJgorf3p1RcF4uQhz9vjCexw7UUtwW8GoahMhZEmMxgUf6ywv2SsaKLA6BuJpXZS4V9zriCVJrMe3Ry2NW8Zu",
  "key16": "5sxfQodXZHF4oN5DHwGoUgPNAjBJJ1U9Pip6Uc8Q7dSX3EFicbXLVnrpdW9PqRy8YD2YhexbXRbHAaXbC1YzX8ia",
  "key17": "2873p6S33cbQUwFh8v14NQ66zpdmEd6HnVUGk32AAGRD1Lj1xPX2FS6zfdKfU34Z9bc7gouBpGvnv5PTBviukG8Y",
  "key18": "529MG8cgpusfWExVCXthWTWVSe6pUgfRwfquisFXZfhn2ANHMneAiBPsU5z4YK2ncDZx4pd3tEdTyT2ePN1X3cmj",
  "key19": "2j7db3snqqpDDkQhzozyfwEeM7GwY7QURGu3HxE4JjLXqqZGFVLTzYhQ6stjCe8ddGvKm2yipKvETKYB7X7FXKR5",
  "key20": "4HqQD5sv4iFQEex522XVwFENpyXKsyWCChbgeUtNJJtZfmTZfLgRSJk97ryw2dkPX2XFjVqKdfK8bVakhVKwFSFM",
  "key21": "3v8FDHXSnzecZ7ckW6dpadHrQ92rTbD4rVkSjaFZMPW5XdKDnfbdFLzsHNg2mpgoeQR3XeZXNDAL9KqnTiMZdoCh",
  "key22": "FwxmTGhFctXet1Je4Lsfv18gUCWKfnFfFEQEf7wdMxenaAXvsPd3YmAnq7LQaw3qvaoLZYYqD3Ama1uJLstRR7d",
  "key23": "7JESkyppfKUTmPRkyqibz5JNkhG9LzrnU8jRwvatsdjMvFAm3x9gcMXkdoJFj5QrGDukwz737D1QcUo39C7w2zd",
  "key24": "45h88p3bS8jzEoUmbLsz1Uw2eKNBKq41p5rJuzyzAnXeZCTaTp6zgs71gDgQzurPiu6n21egzQn1VAJHRk7rKK4c",
  "key25": "4PuZoDHqM9EBUun4Pgi3ogHQoKNv1MD91WBQsjaptp78fCsxsvvTbg2xgbTH1vdRhsKGtAwiq2h4LM22eALwWvm1",
  "key26": "3JwxNFftLBGbQ8ZoF74Z4tBkW8McNjgXLKAC298AjDR28kMWcNmQAvnfqgqa4sbp2yW6GxGN9TcWh5crGcMro1ki",
  "key27": "28UTie7nkycCZi542h4eVM8cJAeR3cgh2jLffoy7BYWvpgJDyHUHq3zgbtQcnrtwkJB5swGC5BsSrQbDAKZRDDZx",
  "key28": "3vcCdA2en9eqB9gXC7Q4we9tquXx7ffpDc5QPE8wNwHH1QAx24tdcYHCZCbxgnnuf2k3FGm8AZFE7seazDMVBCkR",
  "key29": "5mFFqSaoUwqKXxMJ7efBhqQcvxVDX6L3NNjdwM9bw39UmEfpYnNnK46zdKSccS4gkSwRDmrd1Pjq7YLNNUKwiQNn",
  "key30": "3z2vRvQgKAMU4FuT5pBAVAMmZqEm9AxwY4XXtekt6sQyuyf7fDtcKYgdUEB8uEbBK1FuMiQQ9C5dMeJCC9ASASgF",
  "key31": "3vNbGQU6ETYKPTqxnUdErJFXw5fzVgT1WiJguk9GNRyuCqNrY7KaouZgUHKyKXbczt5zkezeHg1ZLFzUVHoHLeRX"
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
