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
    "4ph2FGKp6AmN8PMEwJBRUvUBe9zgfYYrfrxNRLQJi1JFmTKde5frhvU9dV2fu1iz4RxAkhpCTVJeQYYkG95x8bEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mB6JLRYyfi42tKHCAtbzuxt471tSJ8WGt42Pdu6VXEtkaMieNmA9pfKTkdS6fZrn4MWGbRkeQrWaBSnNurS9Z7T",
  "key1": "EGHTGNAGfPSgcs214TyVgGWdqzS7fWtAveKXHUE17Vm32VmaxXxWqR9EcV4Dya5WiH1ZW1P69BMrDDDk1xTxqBu",
  "key2": "62iewne8dBqZ7qHvv3koyBQEZqxejTkXKPVzdCjyMuWDjsEWgdEDEErwkkxk4KqmMnzS55vNZmuXQbc1LrRbsC2T",
  "key3": "2eZQ3qnc4pPX7mosf1frGzqKP3YLRyFFVoqWfYHT6eAy7xUQfEbdEiaZoaPFgyVPY2QLaY24qSsawZV2yhFP6Pq9",
  "key4": "y4R3UMAqynoaR9JKRW1Y7hyj7BQTYoA4GfBMcJdtiZarAuYTX7TrtU8JWzZL8Nq2bHGwQWxjMf7WapgFan3dHpz",
  "key5": "4zjwh3qEcfSHvLFE4frLRggxAfYsY8DE497AmR7g6y5phMR4EWGvL7hYbELgMk2orBtoSWW7HGEqwwxRnjKRZndi",
  "key6": "2ESwe1kUSYkLaR5WifndzinDRhuFcXw3CneCGPTt4mfMTZtorsXEuj5Lp7bZrAm3vh7UMih3dizXjay3UxHCVn4V",
  "key7": "ug6m8bqwp6BvrmrNtVjvrH3aNiCsX6PC7u61YJMsqQAsLumPBYtLMWrg661s69ntFBgEZN57rmUVXHr2KK2YZJF",
  "key8": "44VddRAjd1hVev1N1eUzbsz8Z7sqxhm8j3ZPQyLp14xtRLJtZHmEZPmpR8vPjEsfqDgnEiytkoK8LeU5fQx4zQzy",
  "key9": "4JN1X5fHeh3bvNHH5N3rFJVC7gVzZx93RDzzQ8EaDmDkiimvxzLwK9849prnvxfZEZtH9BS1x74L5vRekBtisGts",
  "key10": "2i79AWELU4qv6FWd34N2J6cSGZ9eHqvDCmvnjHJ6ZP8eZuuKLq1drSTCpBKXGe9uHKRDBVK486hqH3omypqrFfcP",
  "key11": "djnq4hNAQa7fkR1X4LvT5Ct3WRgy2urMwS98fFTSjzuCz9ynLRKyfMkLgC5KoKH14Djot6GTW8A7SkGGmXwyWKs",
  "key12": "hgeqNCs4Lm4ggbYTnu8Ddmw2HofUZEG8VgsKeWpW94MaihSfhcsrgEnyXzmEEMBhiMWXbdes8ZpxkfaYNkLK9v5",
  "key13": "4XVzHE7fhNb2MHQtNyFakRP3YYhPufDYbQju6Zfzscm3tiSnKQGLmhAH3bUgbHoC2BhDthZhAK4NaRoyohD2S6ef",
  "key14": "4u8zHY7StLu8EPZtsJJxUppcre2dQBhUuuhui6UCF9Rp5mq59kxMUcsY9GFAjg4eDgaLsUi3udFtiTi9HxjtfaxG",
  "key15": "4oSRq5pfAoUSVjQGndUkFyVZumav6vptGCgWBTfvYQHLWPcHzUaosN61WsztMXMdZyJnn9KPirskS6eR2YKkFpgZ",
  "key16": "oSVzcCnDPwY1zJsULezyUBd7TvXeA92naxqGa8fejesNGuYj9FFs8LPQr2bULUrYPTHU9HNA6C4TxVvqybhfXpr",
  "key17": "3QqBjkGLD5CpJfgyTC1itoGGtMAjHwc6mowWQ91npnCuRhH81tg3kB4TFZ3XEMBAXbvPKqZyvLxokBDho7cmVuSE",
  "key18": "48QhFUYKTBKDmKYEP7L5aiCyyFtr8C2eBbviPxmfC2dmduSBtrx9qWrcGzZneP4dGa8rMBDGM5Q9vzhHYGZf2Mw4",
  "key19": "5MVMeHbSUHWuiFUkHZVjmg55yjtrsVT5s2B3uoLn4GpBmm9ZPBfTmymsEz7PFHWaSCpNEY6DGWv1StYtLje8rFxX",
  "key20": "54uY3XScJrNxUF3NvkKPaE1Z7gux5e3GTk98Cf6r6juoNoPUjVVs7oPLtnnapWXwkyosw46H1skBS5sps9R5syHb",
  "key21": "4Mg1F5eWL2SAHncXBB7ACxfG8DGRgHfh1WcxpuxRqEtru8k4VyVaq3dr4mAb2UiPwjQeMcPBqE8zpLQrX2gc9r3E",
  "key22": "iYpxru4KRpE5UCFSptKhycqPqz1sKAstNvhJ9r3HDL48CApMu5zYEKrn3C3C4jFWj77DakpoGNtahXHRe1UsAAg",
  "key23": "1rNKDjHfZmkp9T9VEBa9kBD2Qfw36h2sPpJhcW4ZNW4o1przGoqg363bzBu7Rmze15RtEpK6E4qQNNRiVY4mod5",
  "key24": "2Nkm52wQRJBUCXEukNnyTRQaNWg2dr6rduXsKoWyRdR6vAgYqqHZNzXqdaAEByeu4eYpuuBkZF5dmFJdbhqFXcWc",
  "key25": "SA5Ad1HDwn5Y7emztNbLdmRZinJBrMcYB3iz8VgHeZgG9crDX9vDUy9XteYi6dqoNtFU2CH8H51RAChN929dX34",
  "key26": "2oNkqh182uNwRkEQMKrGg44TDmHaKr5emr692BwL6prgAQP3cDw3o14Abfoz5p3gzkQEeWwJMgjAGhPe4nPYPVTp",
  "key27": "34gge3XL29AcKzaEUL8nNfTbogsffVj5Uf8M6rswgh5GjVoHZdDDg4oPhnsmB4thNcS84sVkXMaqaCU9M9GUxpZA",
  "key28": "43kv7AgdozsxydhqLTdz8d2mwaQ2dADGgvyti91CZwRFPe6PusJXX6ozDPvxpmUoJV1NLb1GQVzqWZCdswyCdjrq",
  "key29": "3KKPoeiSVMastNsbNX8wkxcxeMnCRCbJWUL9Ux3W6hbSDQb92UyaaoBdbZjogjAUjHNXZEjYDdjCcwuRunwfC9kh"
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
