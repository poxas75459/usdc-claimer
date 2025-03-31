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
    "4x93cfequJRGqHDxf8u6vbnyrVpp1Vz6gFRfKsGBS2haU9B2emvbzjkHR7RDxVNXxk4MmioKi6eqgUtHhnH3mTax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCfdYSHgqTHQLTum1sRaKrJ5UZU2RuNgZbuMkE48uKbv9B9ZHEXqoW9FFLWyoC1GbPKR6RLZ3KnsVbhuDgRWK2f",
  "key1": "2WtbFtbDkQSbcYtuWzTwAD7BPAXwwUJ2GeKCzbGLZnWjaeyDvni8gACMh6CSTYWc3nWm33M32hcre2JYHbeRsEpY",
  "key2": "5zJ7Mfb25bPcXURRNmwhGEmN2RdJNkoB6Ffdj6WE3pwQLjTZADH8xoHRCqnaiHfecLxKgBLvgSx47FBFGph172dB",
  "key3": "3XrFDUYqYGPcJ14KavqgvwtwHRQNEttBod7zymcgvWCmW959VsUCdj6JgLyozka7TFvYmmyepZuJjcEpz3x1azaD",
  "key4": "5pvS3BaL8JkJxJx9o2b6KB7hSMpSDgitWwmazxGknFxVskEmpewiNERMjiKeB4upg3mS4d9B8bBSo23PE3c1JV5Q",
  "key5": "4WNkEYgAjUVz5boNtVhWogWbZcGmm11qy2scP5nqPXJ7N4vYpjecNsWyQsBwGgi8L7VTHkdiBWSJKwWivzAF49pA",
  "key6": "5NZjCC4767empLFpAj3pzGGWhDrSKmSkMaykeX8ZKhGCMejqgid5p72Q3HJpPzjwvHLooL48wmDouXkffbrRJc2u",
  "key7": "5HkdEMhkNGGwMbzVMxLSrt1VEoJ6rsmP7By3edsY97hXD4grDcZVUJ6d2yDakMZkPSoZDRTzdro1E4HixcPBT851",
  "key8": "5V7ZYFnbr3oDsGRmrv4NVnqgyux1mkxaFVAJXycdtbwTbPRUk1jUG123oqQzTF4qEaL6Bhnhky2KHsVEg6neGeBy",
  "key9": "ZpTbbLyM7w85xqc6EbHef2xA9FXRb2WPHbs25uboX5PohMG8fvdUZZKCAhXNVgBQ7uaeey5LuL28SHtEEVUbpKX",
  "key10": "4rJBu16oJ8reKPHVkiZggyp8p6PLv6GF6KanKd5D2tkp7qvz7W7ZV81viibjC83CoU2a9uoLjhUEsgQFBNjPj6qg",
  "key11": "5ZxTm9RDaaNanviHJX3GFxuLkkLNxq7JyPpVr4HjwfjNPYDJUAnpFNuxBbiyRwa5E3NjowC7gC9NNhAWy2KC1CkU",
  "key12": "vVYUMcfeMAenq94aS7Hvcssp4HHtbW35jg4cvrBsyuxqSFxynbJ44ga3RhFDWXMAEhxhtHW9X7ue4Wd3yyk6U8p",
  "key13": "4VrpLy7NaukUnYa6Toamt3arUodut9uab73teCo8S7EBHBg9KX6AisUTaiW2VYSTPExjweiquE3oYPdRBjZfLqdq",
  "key14": "ayQe8T1LGyfzHftrLguS67ASCNrfZHasCaikp2Eq55Mi1fUNjp1qFUs2ZDhsf4NabpXtB4Wcj7vSVDcEr1NHQfy",
  "key15": "66nYXVQC9EohVdsTmHx888dg5H4zbHwKfShLBmF3bowk2wxCJt18xADCNAUVCD69ARpLsZUrQc7tKXJW55QQcJWe",
  "key16": "KKzts6vT37w8JqqWxzrGG493VrS5gr7fnHG82AtN6sACgVXNidmTLcGDabp9zhfbCZ4K34wucXEUTC9nwzvNYzN",
  "key17": "2zprkFRbEc8JheHesKEU4ABMGScTPY35W9i56nfyLMif4Ad84f8wMACGpydqBdG5gnULgcZMbb19jXGJoyQdSRw",
  "key18": "3H2x1QniJ31AUoxxkHZjFwH9w7mtLDxPCb8iSFMVDDNwnNJHb15diHVQRgAwNG9jJ8JqRtQSAWiz9iT1cNpqVwjh",
  "key19": "3jS185o4ko4BhG2dEXSnb81djL5hvr3DUoNHaYH2d1uoFHvPbAvD8UJ3YuktBAVwNjNxiaKPuGybyZ7hBm6X4JdN",
  "key20": "2QbXV1DKmrSxbpKa5wE8YbBtwvvAxdVz7Vk8B5P6Z8fLK9Ftj1weTn7PGr1FP5jHHAvsYvgu6xdP38BBXFTYaB1F",
  "key21": "VP6fRH6tsxXGRWwLV1cM5QCegiP5yuCGaEYbWxZnNo68aafkhc8KDXzpvsMhcgRk95cFBqJUD51fqt9gnfeTk7X",
  "key22": "3KqETXBaXvZF9BZnNxnXA3jqD3kvGG9U96VqwBopDa95jGZdW7TkH4G2PKtgmyGBirnHboBqsPaUAKYJXduKyVJA",
  "key23": "2SYnXoSUJF1kVZVav883gbRjWf8q93ds8XAGGttfMysY8gVJmAb1bLBJioi9ePdEzSiAKe7DEyHQDWcm5d5qhm8b",
  "key24": "5fnBfwh9pQ7NpRVXk8UT9HTQzGh39Rvsbc7qpQpN4wNQbGMNv9Jr2iCK2nR4hth8AvW5YFkMQRitAq5jTiPepbqb",
  "key25": "677nuKCVBBqbb8gmePHzBHMkbRnd1URB3HJ6SefvLzQ9gLcqvHR66f4PBpSaefFwhWypXRmbTfPgFhaNvo8VCirD",
  "key26": "3n5mj1nKncop9dGSvhrYU4M8Xhw8wFVZ7imKFxG81tXS2EuC1i7aK97tfFRa598TAPFjVEoGZY9uzyzuCgLLeh8d",
  "key27": "5EAD7N7SVZcTwh7r9fyMJd3mJWqU574bp5qMFN3sTabbmbLbbJhHGaM7MjabWxjmFUUpHb1RTdU2QoeTsbodULTB",
  "key28": "2FgxtvPvUQYcnnvKq3FHKezKyFiE8zKi5rUYPqoVdMTKtqPVDF2QXfyXcMgBgwCfHrTSAnC8FL1tJ6yPWFfjXpEX",
  "key29": "5evRw3YTNE3mfSSoSNzCQMHpyqP9WBGU3bYb1DoAe1Ct91rEcaP4Vmqi58QZzgKKnQCwbJzWgwcJfMfAkZJ6xrsX",
  "key30": "4x5dzLWjCmgwTvbJVtZS6haQWA6Beu6HB5aB2hX4XS5SoYd6dRr3TZ8ja2MEUUYbfTfvkMN96nLU8bjqhq6zVTGR",
  "key31": "4VfDUSwRZitxPh9e44jDNWHgGD3sb6XJbYusNLkuQjUWkvvQGw4NcAKMK1p9zZ5VSx1aMveVhiUjtKGcCwb4UwRQ"
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
