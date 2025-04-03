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
    "4G96L4bztEsFkVBmcUDquJVM5sbNi5b6sGAho2xeEbneXkcSdHoSBSb1P2b9Gb4w9LX54TwvKZZ2wtR5GwTQ6N8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPEATsg57cQsvRUSNrUQysuAFGW8jDnYZpr6p8aSY3qQ2w5fTb5yWjTmbu7GggUKoVKzPAmkrNCwuBmMsZkms4b",
  "key1": "4a9CetiyVGHvqoi6MUi1dWLwvF9QfNdiD5AFjcESM7aqsBLgXsA1ddZiwC5QrMPPCSL34npDTRjrHmAVknVjmXTU",
  "key2": "4eWjkqeuUVRgBaB62iXH6BaNdsAxMJiZmjpv6nU67zyH27qhTvR8WiEBwUU7fXJvwsNjaqZYV4XL3Whg56QyFTYd",
  "key3": "5mENKuWYTpCs1mSQ34qFtWraM4fouSS5VmW78vimGCrKdyRp87am1r6ZXb3wyuQtKKkAUSzRjcpvq2Du38hMhS2j",
  "key4": "5XSH4EASVkATPvsZczY2fJwt5rLGNpyDP9P6ocsNWHAxQuQRTSwH7Kx1nGnX7J9Sh7zqXUVbeRSgEWVGKsbm4WAq",
  "key5": "m89Kcu2uWDWhEwqyDRpry7TvLJiZgvsWyhBfAnKXZS6CsGsFrzzxs48r9yn64uRqYiuxzLNMro2onzkVmC2dzPR",
  "key6": "5EYBrtY68cp6RpkpyFMg81AQGsnca5MbZUo8qzEWtfjy7Qaysc7cSK1LVtNzqdGveg5h58KCgRUvsgJaCD2MMB29",
  "key7": "3qK5vaTuUqgpHNoFJgQFHkPuzgtrAnzeNLGgC6FbPMQ4WR29JVujAmPCJcaJ6nURUYBakLwkCJbteYDU1QrJhDSD",
  "key8": "28pZoki59vKWJf2UBTrmw6ioYtVvWSGnqhEzhjaPETGKBYjsFVgF7Tgxt1dB5HpkfhREJ1BDnifwxw6pBp9pSqew",
  "key9": "2RmRa9a5N34Q7TbfGGsVdSAHz1ASKcpmb86PjSNMyNN43bzAvp1hBrw3rC2TrXNikKS8bwmwLnksqECFW8YT11sd",
  "key10": "58QKcfAZG5Y7ZFpid9JPNrYxc9WWEs82dMCgfNqxXsaZSTaGKbHLHSMcL9XrbkxpA4v7d7EV67Ve5NddtkZk7dZ2",
  "key11": "4CWMBKA9Pu66Tyy6np5gCsH7wnJpur1fay7B7YWeQAPY8shUHTw4gaWimEwJWhU4yaw1S5h7UtLfEUhyQYNq6oNT",
  "key12": "5e9MzHD1HuwLEbAZiHHuFTxZDjoDPHqwrcc5xn44kZ4NXkuGXyGEL5N7CdTZ8bALuxthx4X2kStjSzJq6ZybE8zW",
  "key13": "3TspiMmFqbKavTZ4N79JCEVX2tpG3VdSmnCbqkvb5qkxLWFXLQNoPVoC7f9XoxmNJRmhCWVXfjMsAhku1ZESh2M3",
  "key14": "4c2t6cd6Qg65eUA9fRVN12MrW9fWgsVyEgJcAqR7janpL7Zbr73RfEq7qjHr47iwn4Z1aM6qzYk5ovdAGFQNDPKk",
  "key15": "vTp7oLG7vjexZfDs646KaubrZsWnKLeXcKRJHcqb5dk8LVuRPVFLSgzDNVK8Ntg74PeRN2dG9jZpboPw4o3EzMH",
  "key16": "443p1ikkswH2rRL8tgV6PnyvzmwKmwHPSBw7o8pBTEzYL95aepYo3nH3chFCQBEiqXZwq25mVRTeNttLnYA9qP46",
  "key17": "2VGLd8ruYXg7Y3w5pyUSmNhxjNvhvNQUabtSVeDCysrs5SWcRqHe9QsyEbsBdRpCGdchYrwv8TRCC3rnup3bQmZ7",
  "key18": "5LVdAHcxCE2ghVG1EQe8JR1tcYDrnbBkDSKPz9pNzGRsb7fi6yehvMFhb36SWRM5j96CEFew5LhR8gFo7GcjJwaU",
  "key19": "2MchDrbDh9kmAz1nnDmfqDbd47PrV8cighi8rcPZFg31HzRnCChb8fxjzQfWk8RsVQfdacM17khZ39K24fzFRzgL",
  "key20": "2rqmWpgWZbMUeuTXY1hrmT6qb9n8dT6VajDMo8WMTv2X56zJiaGYAbEW2bnJYzj2KXc88PLCTmM9qSfvoyHW7o9B",
  "key21": "31UJkCNEaHLzWrD7dgVVGHiWfroiWMS1b5gqnUQ7Vsgbdw7eN2miLR4zDQipMcLiAEnsfH9jY44FNzk8iZFJWSQ8",
  "key22": "3UQN4y6SGTrY7121yDb6Zn2wPRF7cSnHcoMpPnxQmDJyTiNabrFnmdJGA2jNhCccBqbkuFySgHo6ZaL6Wanb5uCc",
  "key23": "VsHF5vagYCk8Fs6Fuqa8w3ok2JH6JnLfX3ysUEwGFfCrRa67itRxKVADJwzoRcTkgwN2y9wbm2Mtd96XsNRc1LG",
  "key24": "4ZNrUagay9EDMd4gmwuuqvvwoqca4MrUVXaYj5XPbfnvLTTSnvbqpMZP5U5EGs4GHn9bhd2TouBQprt2erYU17nv",
  "key25": "4buPKsXKFjjzMqcQqbDMKYKwbbRuDV919oo4WACKaTSyeqKf55jbNhyHWYSanbt2xPwDRVrXZSVwDo8fr3hjRVLF",
  "key26": "3KXsw2Xi3FvdUL1DTqJCDJMkXdEy3jquqM6ukSSV38ZKN7pLc5T8JhLuo1VQgictSd8KmYdZHmT3mg63qaEHEFDB"
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
