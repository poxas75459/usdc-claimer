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
    "2e6ptRea9xsd9iCUBcKc5ESSbmGjnoPGgVVcgW2wDpMoSR6odcMmzfVm8Qx5jZZJKd4esLCiVjsTxrBZsMxvF9kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBaZUFShAzMDuPXNbmktWyBvavW7TkrKSDBkqy7YMLqkW4TCB3LseojFconEuAcN7Q9AKjciaUB4qXHQxakqHrA",
  "key1": "5zx762d2yTa3d3YbG2sgVYhFTQry7FFFMiR6em2JLPtmBSWGA5anp1ExXbUGuaif28ha2iUMiS8QPuX43GY7Gfpt",
  "key2": "2gKczj8ujicWuarTpZSgf3E5UCtdWisrxULHgTVsPkk5pdzA1i8cKbYk73qCsGe7szkD69Fao4zVGxTfdS5bvrZx",
  "key3": "5GohJFkyHJ4D55uhbevJ8GMLbwiGsfcaQDfvMyK3PuK8ph9uC7An51EeUc9z4SR5XQCNToJ3YeeqZRnUWgJnBh1M",
  "key4": "55quUmJ8Vtk3goFc3UWuRSVKUmH8t5dFSEZdwU4vEg6FK65D3ffJ4X6hTZKAyHi8HdthDc5fCNMn3TE8VAerXFZg",
  "key5": "5F3FWZQADZQNYSiWU5dK6MXqUwEm7uz5pTCo3hU2HmmLRSvK5ncpC9zTjqNzEX61AEqs3w78cG5ghJSZ7372wKkN",
  "key6": "4irpycGMm5PNuZ9niWMJkYjLMYbqJWF9dqQ8KiyKSZhJ1HGhdsZnao3UoQ3gMwZ94akidgkLkn7Pmcy7f2gVmJvg",
  "key7": "5433PVFBgKRRQvJJVYJXG4PdNEiBUwgT42qWKZabFQHaYFUdSh5NuH5L47zbVnseE3NdGu7bfzJNkN3phFaBcpe",
  "key8": "2zt4VkW7SUci21bkujaQXJPmHCAVWqEU4xZuHs7wuVYCVe9L4HGBFi5rHCNodd7k4hrQ3SXwwT8riGUriTmbxDc6",
  "key9": "2GsQz5Pj6PEWjawN38QrTExqH19WFsKcHB3pus3mTyevoTrhGoxsTKHYmM4hV5fLhWFA8cpk3E19JaSEWTjQAiFg",
  "key10": "wNrQsJZKt7A6C2chpY7XShkaYQmSmX4RRgwyyXdzBf6RjPqxSZ3SzudqntEafViGTYsNbWjG7EVJ1gZBC1Fqnqe",
  "key11": "3Yc7unhaKHEX88zZujWHpnmY6UitmJJApD94YnTf4LAuVMNGrqQF6Ezx6pnVZJnJoNcaukyZuRYQ9vECA59TDogX",
  "key12": "B16svEReYYd9k9ZguyVkTGUkuaDGhWczzArjRigRCFzL5TAqepoi6uoRKz1ufRQ3fn7SUqSwf5uyEETfHLW1YQ6",
  "key13": "3nYpTDi7WyBbBCJrGJXEkYr9bsKhCXLro7WjPEJM2EPivuqUCwhcLNsjt39pBZGZLp5FHC5roqNHkafJuGdLS8SW",
  "key14": "3wVvrgPwke81TrxwybcTR63F4tU1hk3A99JmJ8EwsxoGUmpmxgE8i4cEVDcLDeuTmXAGNhjmxpYf4E2nqxz5io8V",
  "key15": "ddvktEMgZx5PfhRCtzhr3K6Eh41Ud6DGTm6ZZgvy9d1PDcgjHqPeATp8ifzvJncTuS55J82x9EaJbw32ahDV61a",
  "key16": "3sK8mAr2Y6Bw7DpMF3sbp5uAkw5ayE29kTChU9THdhLRxkmj5mfC4iHkmd5bCSWS21JMRsJpgQdBPiutYdUdgJ66",
  "key17": "3MgMfwuknsfNBnRnKATDYhppCwxWAKivFd84PhE5hLDKwY6TKvdsFWobQUQg4eVcyG73qw3nFxJ3YHXNn4DCPZea",
  "key18": "51qoLgrSCG174Z28j7aU26c6kdu68qk7p1XXzYW4wUW47GXK9mbMpyPQuYYqE6G4BaFuSbCgcrjufB76FhwAPkeU",
  "key19": "2dFJjEcmffJYYtXxvdrZi2Jksq4y8mNQK56GPu7YjTeUaRyQmDKYLvMdCue5wrH4y86cpvWcKkjHSKTeXjbfsJSH",
  "key20": "dxZhjRh6Rh64RaUSCK6iWh6imSGMm9tganjZhyXuLvLefaDxqW3NAseJnNjeCqFN84mK61CQ9LoNKuNaeFFusgo",
  "key21": "5pgDtGnWMouYjw75a5bZJQmyULf9xXCMvwLxuvnmgzcL2afHdDsTokGQHvnopdRkgy2yYxDuWinnQhYvX23SXwMG",
  "key22": "3UPTuUkkU2TFW3RC8xm58tztk3VVkhRSSYxfFcEA5dzww86X2ZR78LYjw3GhS9TMrXH9Wv5zjJDyxT3oZQdY8Yjs",
  "key23": "2KsmZ3DP4kUEiCafQdnViAkZBmiUYY2BQUTZ5YYGu8FYo5hTuXdfBhat7BiTcFwADeWMQjX6n8fmtggR6Y5mgHvf",
  "key24": "2zrqtYi34oStoS6TRCEhhDMempWhYtCW65BKDMviugAWfnkadF9yJ27YcDt5QGNJYeFFpVAYyUVWi3BwjDL2yZwo",
  "key25": "5Jx5jg8bQyhp2sLChMs4VioNJtRPCJmD2hvGN5y2H2934Hp76poZqPYbuuUG8xCG2YsdJWTzrsfAQdyc2YNCXdPG",
  "key26": "2Yiad2ziSHrmpSh36CScWfjM6YB5vDKUwYxY5Sgr5yWRnmU2ANyTxUvB7haQvb5RwuYN269zDkGpzhSKMeVdiVi5",
  "key27": "o2Bbnmw5pSRK5higZbe9sZaog6QXZdYnCj6uuWK21vP2kCvht4kZxsnuaamefYswUkReMjyoQBCAM56611R5yNz",
  "key28": "3Dggi8A9zmEAvPb9PpxTpbpdyXFCkwcKoqkBAJ93HiKC721taKazJXZWtqgM2nNjJbFTQitpytht4J9RYbAGaknD",
  "key29": "2n7YMEoykFanjdE5mSm4kpSaZ79ES3r9XfGbdRGPiAV8uLYtmBvzfKjZjhvUN2VWQHpR9VRGiFkHcT3xG8mwoQ5q",
  "key30": "51TFxsXdwMJM8nV6rQ7Yjz6KWWauq9Q8M4wEQWaxSfQQR3kCAmUSzEro3YcjdRiwPtnLceFWq5jCZ41MNwpfbYrW",
  "key31": "4cm2r5M6neBJ2WgM1ViS3F27vdhk97JS4MWvp7QAyyaq2vnvdHrMPbZkRaG9XxwR8HokTqMe4t9Nns1LPYUdtQxu",
  "key32": "2et435pPNS2Y5NPNeTbhGUsdRGEi41XLaMRhUEwHwGetR2FmC1LMMCRYwxppJoFePhukEvvdS37C1bQqcVyXhnDr",
  "key33": "2xEvrmoxyJdcwsVDgbxWaEGFUc4SvwuYX5xDHVR7hCwijMf45xozrvH9x2cqCi1PSscPy597yE5gYM5d8NKx3ivx",
  "key34": "64kafWojetQsSxGicA7WC6a6dvKvgbyf5JgjFH8wi3B3hdFFmT89HEKcwmJpNZhJbcvwDXmrGT5Y8bNf8WiTyfFd",
  "key35": "3yN21b6PSWcUr6iViCF8r4EUhm6cATAxT8P9P9sG57akjU7T1zd8sfYYjFKm9dWsuuK1EsPwC9nfA7ggn7hJrD9p"
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
