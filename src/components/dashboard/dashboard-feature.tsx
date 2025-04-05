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
    "2WU6hG8xxNdBsqnGAUmuSToetmmu8FG2ryVqY99HZeUbsryqfVuMo84sbFuPX67noX5bM2Zrt4SX26VsWQ6AjNej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KiWb6ta2LT5Hkvc8CnZsEqa1rJw7dfFKz47rXuSwH8ribm3x5CmJHzaynHZFk45YHzvDkTmakJhB4W5qbDMBp2i",
  "key1": "5eWK3PU5Dr6sn42ZknqgZ4K6MuR8jACfsM8NxS8p4M9LpUXmvN3rtPMpjhT98pmf1VqP6iyhKQ27mS2tjcSzZisW",
  "key2": "vKVF7mgzBTYx7YvEhVTTMMDqKWvwaW4ft56o3JjqWTCDhNnCLDdQszGnSmTYqBGrGzZkDkNamBtkWdH2oh1QDrg",
  "key3": "4nviNfWCB1pDpojumtynups4JaC1NzNBuVoX1AMysHZGdoj8wcG7DdSJ4PzCzJCk8Zou59G8ZcbX1RhA78FzkSEw",
  "key4": "2i1UNMaQzHkSiCJpK6Tbu6sTY7NPkVqzk8PC5o7b7XSRsx5c4CfREnGJWSwhqv8wEdg4ApePVnEDjV2u7PLj2ab5",
  "key5": "2qyRWjWHLKPzZQ76rqcGMc3wvscf7BGFoHe8Ba4scfS584G6afFT54vcfzTbeWBgsorXuxAYE1w1pyFW6ZDMMzQX",
  "key6": "3M2wSn5g6y4knxfYD7HMv5mTVZmSdVhR5aGHhTE9D7myFVXkqHhAK58YgnsAg6RqBfWiCpVKiHkWJYSRyKTLf8nc",
  "key7": "4RvSGcKHQ6Hd2yQz2WT5RFEuXEfBPifSydwgLLY3XHw1gsPmxk9GRVFb9cVs5un7Hb1rw9DMTDW47UZeLb8J2X5w",
  "key8": "4HZQhGSs3xZL2CScH992LbPmAcMMBmjEsa5h3fJP3Wk6MXmf2EwxTPa5n1xJVqKW7PLsTRVFjTSREHctzMM6Pj7Z",
  "key9": "474MnwJenSaumYCxsGGGSzV1BsvpsUwA7VfAS6FdvqGw8kppdPvi6Ggq3UW8Z9fhs3ViJ4FgTNihfXwWiHBY4RJp",
  "key10": "5qxUrKtqsLXvAU94ozT5CNtj491CpYCRBn28YhzgYhdzibXBQYrnbj5DfiHs5uKE7Kgjj5ZxjJ5M2vT3LV1RacNZ",
  "key11": "4QDih65j5K3HLFQVe34425BzsdjSoQD7tWeSuZBQXfZLdFFY3TE6Nnr7oG2kR44QGBKVCM3cq7KuEL71qnbMTPWc",
  "key12": "2KgcwpJ5fbEhsv1qQikk41pHuFjMHVueAXvJ3jJ7UCpy1CCK9jGkS2PdXXBr1V7d3XaUkXSVA4sgQusTW37Na6Qd",
  "key13": "3pdKfFAaTNdQ5wQGVZTejame74DAGgLMfMei7PYTrJwTeBcQn4qhNvEZWEA7ZXknytgQeN7kx2bx9zSo65VbSVBU",
  "key14": "yLcHmuxtdFtpQ9jZJ3X1oiKK9C89irV9k2Gs3hG76BNVcYyEiF4WFwEQ3DHUfP8SQkCgRFJe6bc9f25ixL1nqWL",
  "key15": "3uecFqoZ5tHBsjQTsERVNWKY6SK56PprEkUhw56RMZ71Zk9x1weCpQidHzWAJKAB686GcDkJn5eKBw7vo7BRMNKC",
  "key16": "2HtTakgiHBQWgWoy1EbuAT44kSw1Mcj7ZLTBucqKGPhXYhLYpro3gr73rab76m8VMbfPZR4drx5cdxM8hyr7Eh7Z",
  "key17": "4CBK1MSybhnv3zqECt6NvWTrfa95a3d9fSRcqJd8F9cfr5JpWJxfuazV5m3qSBfc7RGRrrJnnSejGefoPmCUpoKD",
  "key18": "4yefVp5DgQqithP346cjYpqv9Yi2NZb59XdPQAZWnofVezfHD4jpXhvaAF7rbk6shd4usya997te1k37JhDDdJr1",
  "key19": "33pcuXTkt1p71bygiQg7dEKqq43UuPap89h5v6WhJtj6yZiESPPYwNLjvESixNN27YVFrPrNzj2NR9dmqbXjZVUM",
  "key20": "4BhRxuoKecQFTsHSxN9D6uFdn5wjLZHABHHNrguroNZvnjZMBpJB3YnnJuCYXTyhwAPnMjTpTsjPEDiZqGXVZEcY",
  "key21": "5FHLeSsf9cJyBMmBKKE7DtDezWSbm52BTNyJjrqAWuhWXG8qhP8J4pU2ZxhjmK7wgaewBSjmS6ZoZJWeAcxR8Q2N",
  "key22": "2RHeQokpKJPotYrMNYAPKpsEshCHseezmKCsTcGop7ggu3MT58exwyoqbt1MeciRd3c5Mmn3zL5GRfVdPUWXEYk7",
  "key23": "EpeAyPgW1e21a5vqcuSFtzTFCbMsRjZJyELWeLZ8fLtVcxz8FxquDQzFXnVGHKydxpNG4fHZ3dwgRr5pucEQx7N",
  "key24": "2q8yFp97U24Sp8X5iSRnYg621DmgEHec84hmm4JwC1vKCs7qUtVanvL3nTcEdAq1awNqR2m6fF2itqLdSoyVzbaA",
  "key25": "3rwGM3MXpgxsBEQNgwDxmePBuL49KhMEimeP3YFdKCZnr7L7Y2EzVyvHCNey7tGk8eYDDveUUX2X1bE8hSuCo4yP"
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
