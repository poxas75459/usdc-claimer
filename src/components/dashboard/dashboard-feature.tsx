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
    "2DzYfKSYDGekR1xi1XEnojAvWf6ojckoY5b63JpW8nWtX5NBGXiCiSqurUZcBjQzc5SUgQVAhKDaG52se7D1nvrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyqFxEb4H1adiS2aTEmYzxdiAnjotoGivQ4ckY7horQPDtzq2xQgeGSQLLjWW98kHLzypwdU9FJY7BijJJED4rJ",
  "key1": "64q1mzBz7Sw6KHFofYMv1NvuM8bon1qRt2WgQyd4rVxP2L7NT9tt3bE29aodNMMU7bMunM5o1UkgmSYZp5CcpwYW",
  "key2": "5jHsdEHYwDUfa7atMM3uQjXE9HzUZTWx62Qzsammjs6o3uvRUFEG7TrhtdrYHS9k9WnCyJfUxW6mDVoMgFGb8qHo",
  "key3": "8TcZaUZ9f9g9gJV6sid3MWNaYC6ArSzUag5MPtbjtZcHLrzMPugxAbgEKx4TqtX6AXxEtdJDzPvJXsEzkVdVXEw",
  "key4": "5CZW8LstftPesG7bgLDPYJq3KMUSKQfXg8sfMhFyQoUFmbZ1Vs5JFxj7eREz88Dvncx57fSeSS28y7F94rRqeYJw",
  "key5": "1t5vkVgmAmeqJJZoG7KBKYr2T4iiR1bAQ3vrLPwmZiMdfs8panbs3AJ9KpyHmFcYpcHATKnzYJtrXumXfKmAyLM",
  "key6": "mq8LZt7dYyEcLdveeUorekP92Lgv5W8j9umVkFAe9WzKbAphtr5qkhXf8vPL2GLeFBLrEH6sEEkTSbMCWPXYR4N",
  "key7": "b3NdgBpAed7KygPUdVhknWxSuL58xyWh4dRMbaQL7YFUkRnVK8u2KWQZxCzBovvGHEUrf4TSVyDafqxCoa44YK9",
  "key8": "51EgT5Hea7oMy4tMqiXs5HHJuvfm7ydo7TPV7MiVMR7rpGa6Tbv1MT1hU2SfTLQ1b8iPDjvcsEXsiNNo6rdRFutS",
  "key9": "3GQoYbbaPGF8THUDjpHGAaW152DEPaAi2VoXKRiHMGAye4BufqwgkouHdM6ZS58TcSmdjCyTg7qpwQWqzDfsmit5",
  "key10": "3aRKeMqRHjbiHfwfwLr9FttUcZnoAQ6eYpXEskwXk4miBj37Wavh8v53gnWtvkQ3fqBoeRHqrKGuQGeXpJ6typT",
  "key11": "dB9nbkTrvqojaJJoo22Pk2U5HLuDkVVSrfk6UYvS1VLFnG86aVrpMEpar994nKgF4o26Rvv4rZQbsobdENFSorb",
  "key12": "3i5xbXE7ZxbhxQqTEnbqL31N9gqJGEQzTN4S47WJsRX56234bG5J7z35H8jjriHBaYMYPnJQRYT6TekuCzLyTs8F",
  "key13": "33JuKzn7Rr4UYEvVHH6xSapaAfoLrEDm4J1VMAFabbtUArcxJ3y21sYJx4cPrwhD61ZiPm9GfyGSgzwx5LyTnQup",
  "key14": "4q7bYFq4tW7FxxY8YLGydLDSWrPH6bp5stdz7bnLeTGgY6PupFNEU5h2wx2XrY3sBryL7deLUNVWCGzZ29hzohi5",
  "key15": "2f7C5GNntr9LFq2B4D7PohXaELxdyyVzSQMUJArTBmYxiJWJeLy5mxUuVa8yL6EndjTN4wzwAatXTvwPBkfeMyZS",
  "key16": "2dzRfpPZP5BaqS4EbzQ6cy5QytNGz6K7coEbnspvyVpSuBmPyCfxYFtPepBo3x9bRCySsjsiUKnGhkgYWowh7sdH",
  "key17": "bd1fJZELLJFMQdWga1dApgDhH2dGD3t6WAaj5Es9ZUvUyHjCeaxGuEW2NvXAMQeew2DNdeieAj67UG7paAYvtBE",
  "key18": "4weWGYWPtV5HDis1RXSWiBxUnhyFu2amTbFo3oMpLvJWq8Qhsi3i68AWGX6ELezjq1rPJwKuokrsnEPyBK8xP1QD",
  "key19": "59KfV77aXdRpuQHk8p1tpuADuVDX6xGRvmt2uFPiUtc8Sgzz5PEaUed8nfuyfuwz1cQ4sMGxHBqSayDZfvgGigq9",
  "key20": "5G74vfFFzCjy27v7HnAQYL1JduakGotZc4NdsC6JJXj1zYb7CGNPaoJCtUXC1rFtRUe9agvFZ3YeL7CBwwvzE126",
  "key21": "2h2rNBBNnQkSDVTodtexoTUDgCruHweBmDf52JL1DoQXy6zmkFJbxA29CHgtfNCtHjiDmurXttpknN9gGU7PkTEe",
  "key22": "2zi9wWRGaYAJiV1gj13hKdc8EH6szrKH9eyVnnRFZqq3Gy2utAR3riVYpink328UA1vzGv4ztrLjhpqvxSou9AhZ",
  "key23": "ZfCaA5xJ5turAZv4mi9mnD2Pb3fHqd43yLoxS8hFuSWxGrARnECdzxshTfrBwNJXGv4c96FZvNmSwigyVRVTSSV",
  "key24": "26pr7V2B3yeuT3jjVg5Jf2yFMFCApCMuydqSgbr5SXbAxpb7kLrEwTEzhWtbnNpfXDQY2ieCbJAqKnGUK4saN9t4",
  "key25": "ZX9nxPaX19t35o3EbqHpcdeqTMjnYfEfQKv12yAWCoNF5eUgQ7HcbyAgeW28bPc5TZ6DXetXHSd8qfWH4gfPgX8",
  "key26": "yrsNVF9GuvskDtGSvWSPcfdwQuSCAkhaib27rTAsLcaCJRBdcL4NZSFFMaa3V9zwxCtuacgjE9Co68ucBiyKQcz",
  "key27": "5zhYWqRYnPaUYrQFPb1i2PXh9UH4mDpcjSgT8Z2s9tYJvQbatcrvmh2CZ9BEGcZ9KrFxYbXyQeiZMZuYGC7mwBU9",
  "key28": "oMEFJHWXKRR2pLdE7qam94puPPpVj26Zxbjjxon3oXVyMJuFbk82We94Mp3ofJmomWbuTecDbwm4q8A3GAAKhbf"
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
