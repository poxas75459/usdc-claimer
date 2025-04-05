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
    "62juMW7nLEnE9M3xbf3rCkAEnQaoazYLcPrHqZAaPL6hegGqbkrQPsD1WU48enm42qMSwHEufbo4JYgzhLCPYGqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E6kqRWRTfXL1ef5yoc7PoYiAeK328evuHuejMuEF6RzsXLnibJGC6QVjH1CURrYK1W4CoRcHP1snwYMaj1CDcLF",
  "key1": "2riihwwurBTFcZmck18wQmEwL3KNdAJkYJzDuEaC9Xks6RRewS8Gh7huPfxABQk3EBaCzyrVtSdPQcXyd2qwHmVP",
  "key2": "4N9eMtdjMtoCfGMMeFHC3ehqZGg83WzztCBXZu2ectGb9VE8vh1dAx5KQh9NUKb1FJ5wkN7aTxSJxbuQ8ZoNMPC7",
  "key3": "4v1KEcZJeYhpiR6EWKowmARi5RMTCfrAHHBf7Hg1YDc3PLAqX1kNvvfssSAvzoANwbe1F86nWEB3NWZc53ERCB6K",
  "key4": "4EHFZtwn1uCmsfwNYeByQGAw3jAcsSJNaDJjY9k1gndFDiXwtHn7f1qZFzcYypLZkHYckNvgPD23XZKPquGSGhvh",
  "key5": "2TVEBFygFBdK56KfoeTFXdRCpUh2EyZG5TfzC5MrPghsf5RqqJDgVMVqJaDEzgc7UAM5cQenDXGPSvKrew96CxYd",
  "key6": "3umA8TDKHQwdvC6oQsAebPmozkrpdCue47LVYc2L57KiJm4G4VFWfnRprKutVRbsb3R7E8zekweMRC9URezqwzqs",
  "key7": "YA8w7S6ceT6v5VovyH74x2jePccQTHhfdMqjR2KBapd3jFdJdc841yLrb3k3k4jPcwxauom818vzq9F8vFD6TYp",
  "key8": "5HJ4dGbozT5CoSseZ9uBapcsfHnjHUd5diiUWmSo8TiGDdSqK6BfhsBmG18WK8o76CZa1ZZzBtEKhqwr28GsSywC",
  "key9": "rSEP4eLCgrs6EEyJvsHYAGwLDQeyDaiZrFdh1s83fsQW7AxKbHYqBvkw7Ccmzfyh31KMr9HpzKCvVvGh8Zr9f37",
  "key10": "2g9SVTKbXBL3cs1pmi249EEB5REDT1mM85Pxa9mfmKxCfZ8r63KfTccVWL1zCTcebQsN6qV8NpSxQYX61GAHPJLb",
  "key11": "5yqpmrGHnbWz5Dv86txWWA4kPvhdPte6Ehj5Nb9Fr1HugUX8ZysCCx6AyvLWDc1KbDy19zhX57wRDfnthbvTGrBZ",
  "key12": "538BC6YhMvejTiT5LdHzutkYpzC3mrtsYiQGfWjWgJMtnjhBerqXpxLtteA6QKLtgaGFxfY845pY6zBNUzN3xFLU",
  "key13": "5Jv8bSAANH9nJGDHNvQgvdQmbfTQggZBTWZar7fYsBk6GfU39ox57QpM5JeadbwamcHxzpZGuPnMa2ithdatSwDm",
  "key14": "2reHG8JxpXtbNsExavdTAfN5F4vLZ7yHPG2ENaM6A9nec86zYqmZ63r1jZ2y6pknbeLTnzDyucbGDJRwDFqq3VFn",
  "key15": "5CVea3YwhpggFg4EGoWs2X8usvvcrox7eMNYjgt3rBZ7KZBXqDa6RkehXg2syBkrx42fEhP1SMfXydb3PeMigHVH",
  "key16": "WnuS8WT6nsDJAMv1XvXSAJAftvCSEMyjBJDgqnrTMdFxmtsMSXCKoBTDyyiHu2rQdfks6MiRZtNXzcSBdxhPENb",
  "key17": "4KjGWfbQCVtT5EY2ghjR8ZxYwCDmai3Pt2UtNg3oJyX9wCrS4hbr7SzRJju1go2fe1KovHnjf743Sngxs2sLhhpp",
  "key18": "HDNvE4HNcoEoxK9EV3ZJK5L7MME34FRUtZe3FgFG6DEtSncCB86HpvgV3Ut1zhxa8PMkQtDiSQ1Ma5q3GUomhda",
  "key19": "4qVgv6JoeeNwQZzQA7WKidYktaGYVArpWvMEXrJkJoxdpDTsdt7BQxGxFLd6dtcyoU1yPW9h9iDTj43PoCXSs8de",
  "key20": "5kQH93uHsn24HGZxR2xHBFhDkETVXtY7hEH66D5Q4g8he3awErcd8r6R1EqKoBgx9468sKv75SbE86ng5ym5sEmj",
  "key21": "5KjKdqA7m9ewT8kzmPQtUd3KxMphZeLevhjnsFxyWHaTRW9xNLFHELwVk1c3yi87CgJqzfZLYqXE1uJr6iFB6WHE",
  "key22": "4NsNTQVMWEZcDi6hGB7PCyYiUDMER73rG4TiHJR4mrWsvfsEKRbhDu8fA8AfBeixzus1u8nQjnydJ3vipsWg7Ujg",
  "key23": "32Y5qC9DN8f9E5hTY3GFsGRk9jdYGrf5Wi4fBGtjgWpjTxMDBT7CTqxgfgBXXkktuY52VdsSuooEbBTwvtGVnnoh",
  "key24": "4HCaDHfEhRmPvDfeKJqGJcM6oFwqnCNvoLitRgdKAs5Cg8mHHFDZBQC3Z8LwVuFARFvbB4Ev5Tq1nMdsHXQjwjR7",
  "key25": "muQvf9Fi6nLyECRUYZw32btPAXTwg5EWuX1hTgNTRRvyvmnQvmtBnfNnCqebS3kdP7L1N1HRu13LdYUyaZ4ukqX",
  "key26": "3zjDB7RRBRd3nB49knfKKjYRxCdBahu29m1HSogGWiauLDrHJy5G9BtZxZ9EvzjocBRLJaQerYbwfY3ywN4WCC5K",
  "key27": "te13wPX6VsJ62tPWYYUVucJnrVTr26FDBcsTtEWPEBJAE4C6b2nzz42hRJDFzdch8x73X6mHiUueewhgVHJhR2A",
  "key28": "2Ej3MWFEb4dm7xb7A3p7VQuhAqfkSJ7CB2rZHFuvbSEkuazwCShH8ctXmcJ9tEzYHGFFP3GQjrG1YgErsBM16MEk",
  "key29": "2U1Tk4D8neiw1PyBgqTJUJemzG8iegWuZjH8kjT9FvTUCxWzA9LgkvdDdsR6ehrZ7SHbYqKH7CzaHKkyh8j25jzP"
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
