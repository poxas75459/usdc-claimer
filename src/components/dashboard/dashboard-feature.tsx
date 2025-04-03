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
    "5jkfmxvpxB93ZDVoNRK8qAANJ3XuVu72ZGPz3Le2CFRTMRSPdRa1fsDYsKEUHyT2zP4PrKtk6wXCnX6TKgYnX664"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9yCrYda9LfvmkqhmD7iJP8856FH43J7UmxQVxErBXxBGa6NdHswUsb9ecgmu4bP4SkKNm7UxRFHR5Z5uZuwkbf",
  "key1": "2n1wrw5LqU1x72yyr3QaSaSfxyaqBDHVAMh3K2wtdvUe4tahKtNFZ7cfYyr2cskWkvFjyts8cRKDs6PCg6cw9KD1",
  "key2": "kUWd1CG8w5Mi89wAeCGHxhKfD7WECBqN4wNS8eRJhowhfPMupf17m2952ttQoArdGMTSDkGsfyq8GjhnhHZBAJa",
  "key3": "2DNuJc7vc7sqqkjMGXSdVbomVcLTafEBed42TQFUEmRZ1XuWPZxdPwLXbzPXXhd6yUeMWj8xpLWMfaaE9iSqurxi",
  "key4": "62B6LMSfTjUtryBC618tRvX2uqRcF2VzDCXeosU5fWRh1Jpq3TEdNewqauybFj5cd89sKE5HLn8w1hR4gTooSzVM",
  "key5": "58Wr2LdYQq9p9Waf8ZMm9cBT4LGAKXx3c73kjWY1ubNowJia32NsH7P5eJDCrkYaVn9ytnofnhDMLRES5n1ouXf6",
  "key6": "ZVtb1Uku4mAfhFWsxQGXYw4tHjb7YW9NoSpuWaQexJA33jSyccxDG8bF2uFpkjinX9rvyDemcFmSmiN5xAcMmuK",
  "key7": "n6CcRzFCQeGVLXBbYQ2gYzshJDA7qxCXYRn6h8vDNsbWrP9hCw3jAJDTpHgnc6EyG7WSZHR6JBAVhmMWtrjYLcT",
  "key8": "4QzjEKYEStbtzdYHxTfu4AqQDGeCghpRgeGeEUEVkAaQwtBF1fJULT5josAi7yZVcs344VHMUrAfdzhS8HM4D8PF",
  "key9": "5ALVnqrLxZEvQbDW9m4YaNPSo4qKGnxJ62dkdffdgS9hyfSLZPEGeUMi4aAzVN4eHXNpZsSZkjvQFuPmBA51zPFx",
  "key10": "3tQow7vmCTcepZnVg5XAcsMfoVywQjQBUddDeCNwvARNYjNszVEGjgNbVqeLQcZjMWVMJojDQ6QMYpp1sRGcJPUj",
  "key11": "4YAe3Y6soct8npeag8dY4TaVn7oLLj4fqRynb6EUqM1v8fCauJobaZdjHRjirFXfWhcZKxTH7cYdqbEy45XbFwBy",
  "key12": "3MEsFmZRrusi82qhYN2P2bmWkGiLkWydx55vS5G5WB1yAZBZ1gQPUgNUXtrdtekCp8x4AjEzBdLSxJt6jfunigjS",
  "key13": "231mYDKMNQDmamMPrKLhcv468XwBYpqDTbPsesNJvxfy9G4qVKLot1K4LNMCNLYquUYMKhdq4du9jg7QHVrazuq2",
  "key14": "upy52thv1dW89ZBoUz9Uh3CNLWUD1bCJTVWV8xJYruMJ5gTgs3W9m1Pzas4qTtnqWiMuTW7EhNmi2XChh1uZ7NR",
  "key15": "EBhjhKQEB1mais6ahiCu7WUkYJVUet3NMW21SBDoTpyQWBBDPFP4NAMhvZEgQNBPUKj71xnMVsJcMmEWwqcZG9d",
  "key16": "Q4pUzE79WgQcSZy7sqSVPwd1NUebiix8y2AtLSKdLaVvACsbcWNPKtB2D3rzPRti2epyUT3pmzFmkMPRc3QVT1R",
  "key17": "2zaXpHwjtmzHpK3NHusTcYFjjU3s9ynQ4bsCvHCSDTQEat5c58GAw4anABDq35qCqu3zEs7tBBTZVNLAb5svUgkf",
  "key18": "SEK98wz2iYG4fCDfS87WqvvsM3TtAVDWVfgZU7KYh5ziXiBj46GaBWWfGi4z7RARsmZfb3TcijoKd8YnbuLKktz",
  "key19": "4ikf3qdoR1VuvN7fE2NzMa2HArsJyzWfkp51HeGPHgEnvvqKDFENAvWvC6ikjxX49VBkBSHbS2prVbju7QYdVSz",
  "key20": "2MPvmQub96biuomoK9yiMRYFPihVsidxujtfm1FUSHfkTBV2ny5pFAotP3uLZAfvmCwfgbHY2TqRxp5h9F37o6EV",
  "key21": "7jLYWBrvWMxX3pWPxARArAtxfKeVK2rdEn1uQ44Npigqo4yuP9Eo5UJWQLch1b9Pg4ienxBxokJ6jnukeDgTvDx",
  "key22": "4KWgmvLZWa6XddLw1pkZMmsKRB1aV1QBeJauxAfBPnhA4AafHFSgpamyAXgMf9GqZTUPU95aNnL74yzw6Fh35e6T",
  "key23": "2YqtEdhjk7TT1gmqYGtZVyMVWixE2efCd5978TJBWn84wcNSQ1NeGMZbdtnUDU99jkDWzpWA7rpFgqNYDeJXDVzK",
  "key24": "51GfgcaGQkQ8LTyTgAqpP4942qs7nGrxHYtJkEcSFf7vVobvPHVh9Mc9k6dcBnQRmSy2hCKNmEvVuk8qSNiZi2BE",
  "key25": "4ZQGsCQ3K63KMzM7jmNC8CfmyYDGWxfUZjbDtovZSy3nGGhxQjCQKkXg7hFEjcogmUeUKx4KVXuRnvT3y1NDFv6g",
  "key26": "4Mhm72wq9WpKpRSQPwkGih5aXB513B3kWuBnA8WnxRR9HZmmXgNhjrsp76h81GApqnhvZxBpiqPsUz51DJZM5rdg",
  "key27": "2rhES36bjQPhWN6CBCPnuGMwrkwPBXwRyWEdWwGFKA1zmBcHXYYzZaNDcUWJz8TdAv576X7WvrmC6MiGMYU5pk9P",
  "key28": "4BGxYbmm4kue5ub3L8nje6b5gxGUJnutoZoJGP5hM1erzV1u5NThrsQH3d2HZShj3nke7B7Vn2CWdAbGAMvTEoMs",
  "key29": "5Z1QW5Unw78D14s12Q8XR6hkukAsszKr6fuyAhgEJ7T82gDTiF9Vj3Tezd9KXsBLjZsMTZDBBHy9U2G5naPcza9X"
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
