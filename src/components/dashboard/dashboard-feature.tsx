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
    "5vf71264SgY6iJz2mpzQeyFtD5kgyP33nVtzhESCa2eJg4dh75CcTPQi9rte6CQNNf6A9zMTT2BvGGXyUwvdpfjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KULY6A9viu2ndAg8URSQakSM77yCSe45Y4k97bCBWAv9pg5WETu4ixYhVyxAVkHf5dpd3DiBXyPD78v4HxLCmhB",
  "key1": "3JmLYqWrU7HywvumKWvDijVmghZu2UPQw3eM841H5inw79h1aYasJ6PSytEpu83Ccx9vPDH4vDyWZyHoDzccwsRU",
  "key2": "ymqmq72cECXqBXJJJGxtt6yDzDpeS7FygJv6ADr55zo8n74CudEXUeSt7N5BoaJDoMMZeEm57DJxgqyJBug2nVB",
  "key3": "HsM68AgG1jKKyaSAj9CSTUSyAXf1ACFVJpTqRzni8ifmAW6psS7ELG2JqgVBxQRsC4eoHQazzpcCVvRZYZNZNYx",
  "key4": "5RMEd9nzczHdYjhPZPzk1YF2XCCuxvchSpNabfRuxRyzr1nZeE5HTiEAdkK2nowm2tVDE37GHwPvSvbZDeLtNVss",
  "key5": "2D6Rc8aPaPKRq4HcRETPGdtf6USzZNk8kKZhZ96rdfQbFzq2H767p51bo8iPqQ3vfyG4wFVqmv7FMLwY9KhDruhG",
  "key6": "48UqoCh75FxevEh7SrDRRvFYc3kCp9ZJfvqTNQp3NpAF2LLmac66fBjttFSFrYCUbGuv1o87ukw2vDzmnqrJDDst",
  "key7": "2cJxWuewEPDtHHZcZbEdqJ1XLXkJJNiwWePpHB67WsDPZ8yQp5tGz95DEsBgzKJmnWjPqMycMsaRyT9NZnCHG4P",
  "key8": "sxTNsRG44Nm4ZYb23xn6cnAXj6zLghGGAVWq5T1Zc3GQm8Non8wvyDQavPk1nXnmQ61hzBSmBzNFPVqQcGXcU5z",
  "key9": "PJzx11kyztw8LszpFaod1zQfmUYtzikRTwsAD7Ft2kgaHLz5TvsGXENxJd1hNtpNEbVPPJWF8drHTPuUo9hRNV8",
  "key10": "4N85cxeHXR6HVfDoCJBWD6gS8e5idnW8aMdCMobuUNKYo25z7oxNJx4oFTSTkZXBTmUgoK9UFDVs3kqeQZoEycjA",
  "key11": "NLWvRSzn9o8HHhP95AiMZ8zhZhecrVBHvazmXC4d58aSu8ZaznGNCzVLjFkqrFncUTza9b12JktrauVQ6AXRgQV",
  "key12": "41eqX4Ht2wdwywTcp4Ef9f9osZG1BeryPEUZDTk5KbVbKtPx5Rmt1cU1mT79FeK7z4C4BNypS1uJYvpbNi86vPF7",
  "key13": "F2qgnexLv6999821d5sVysNLef23JddzEji3KrUEb9q9gnLK63kREUgLehEA8uL92oTmED1shpUTYPPjWyuwvcw",
  "key14": "jQAbBkeBh8q1pUkqrQunMbRzEC6FZ6GL2otSrEc8uDrBSzJSxEQH8ffGZDdU5gvtoAyXsBPhgn7AdiNqrnZcg8J",
  "key15": "67AVqDiKjwYsh91kxoxwvXfuZLto68o33S4qZd48SuJb4DXZGn7gmMmmWnLwZ4kKHp6hi52VKpAW7sDa9QR9gV53",
  "key16": "5yRShSusBmMDQAj7gcmNgiAZhBYX5AhKJKq5XYX35hNRfuoGCMjzFoa1jdRHR49xmYsYQ95y3KvGz1bg6gStoZUL",
  "key17": "2AkoLUaZbMAi9LqjxGhBPFeH96LcqGXoT7opYm46yHW3Ng1PxPJQfes8UM5YstAAMTF31qwVoPqngjK7m9zWdr1u",
  "key18": "2KS3fAdikKdS9V86Jk7D3qMvc2fc4bWKTTEev9kkRzGizdF1UNe1MHWBRHGRC1orZ3q1x7iaHB2hLAGw1nHbxc4a",
  "key19": "4HbJQR53XrT6qAT2GieDVDzbPeDirzHSBpSyzJ3QwRX3BYZSw8faDmiYfWi3eny9QGUVvkPx3UqPdTmFG5s7tRNQ",
  "key20": "3JTD8rxknweWfB6wmqqugEzmh7osVcpQfWdxp1h6cUwP6WCA3SGn6hM97VhDtnajaP8GsmzKW9iQZxSa3nGgKe2M",
  "key21": "dq2u8sm5hhBrvQAXY7gFKQG1EyTLK9bts9QvEVJUfoWxTLNyTTcJky4sPAKBnJzAvn2s1DZfyH5fhoEDUF6XJdR",
  "key22": "3thL4Jfov7wWZumW4y5YgsRn5uUFftUPML2czSfSScjp3Wi2xHFLNczLiVXBCNfkscEckxgEgHgdKTMXcKBGvEPV",
  "key23": "vDmUhvpP1pbKvE8CGJ6TUKi3p1wrqZHje3kwro4CGZj7RgRjSGYLzQjHNxfP79etSXGbL28TTKC2o7RDyvW3wbg",
  "key24": "4XQg4CsMzxKtDLKJmrEbuLYxR56SpfWU3RrMgu8bgAe3rfiq4TAxgpe9jMpy6Wf7wiT5EcPNvhbioPjy3jQKL8gJ",
  "key25": "4Zzvxtn1QmynBak1R2QhTb2pzwKyhdsyiDbgCkjAJJgep1PVcXPmAXoFemYhyghc2kcfC3k1cMLVRi1ByTwkr75J",
  "key26": "2kbh16ERxDEZgAcgAbyKY3SwsNnhWCwNteqjTsYwf2LUqzNhizdpDmu5YMpA92u3tiXHk99PhZiWQD8Qk57ULwPt",
  "key27": "3MkYZf1Kgc4DUzy2X5bz9Q4mwcS6D8ALuSeJMNxEFXuhCppSH89FQeUCG5d4ZQgULWu8FwWPPZzop9mTtC2qRuW1"
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
