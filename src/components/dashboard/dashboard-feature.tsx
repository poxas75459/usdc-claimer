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
    "awZpjdga4W6RgfHmd5mJCMEKr6WtPksCmEG9WoPHcPKW8mizxjRYMEX6dwPQPiLYTjiResPDH63AVADWSrRTVeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gM8JeB5cPw8krBh4wyiiHHwgKX9GdjJwMxf2HyJAe6LYxY5YMHK7fkVHo5N6oMe7ZtMWNoU3L8BcXbYxD7kXUP6",
  "key1": "4yMxBvRdShURLMfQUBYT7USfRzKeL4pWtnuQapRACr85ctWTWLnfWd3SMjd9znoUhKupHsNExRKZQaeAzpSyzscQ",
  "key2": "4sqo3o715ooavgp9EJVoV95JuU1dTjwkwnQ3R5H3QzniMhRiPw2ooaE11XdGvzf3CMXwcWQfqA7E5Wu6GDDF9B27",
  "key3": "64WX1DhfDfD3xdPGQizW6uNXUGWsPyqzQrThoprbmCvR1BNyTsKQ9o3xU1YdpXyBExRv8bNomu5yfNVejX2PC2o8",
  "key4": "2BRmeo3e25ZWFruSg6vc672z5AUVCzYWYXpCTR7M4qdqV4PjEeAcfgsfH2AeqXvJeXV1ypR4eb8qfizsyeDvhjfG",
  "key5": "5kkRPREdm9s7fNPbLD2ipuqsSeU7LeQZsiwNwC9m3YRNaXzfSY4rp5uTkk7HtFuQm1ipYp5Br4PWWzVtq17DKSpY",
  "key6": "4bY1A1crNF9t6Nfjv4vguCHEQ4cXtxNXZRdQXWYMW939FFRzzGAxvnhNtSR6FAum4i3LtqmYcLuS5RoydAXF5S2m",
  "key7": "9prM75qZSNxfSLUyi8ahw14pcgKkL3Cumy6vqq13po7Tjy885c975SGcb3h5UFRW5qF1NS8ULvrgmCdF92hSMfi",
  "key8": "5p94xnD3UP6MQgoESxTtZu9kiXy93HEf9iSHrASNQaGxrmvbX1qNe24ZcxKr4pCVKcQv8kggNJL8yegbLUgiW1dj",
  "key9": "4qr4bWqU4qEnfuAUSFBW4xZfsjaR5HfFwHhww7Up4UQjuLD79h3RWLnzbpbsPyXj8FQcn5Y6kGZA5Yz5jps8JoQ1",
  "key10": "55KwntV46ryCutnWtmGzcQbRTvRyGmFr7MsL9Xm6jcD7sUeSfTg7tuWkHq16MGqdyMBgywz65m4KDH7whjH3scLz",
  "key11": "44VEWkX6xyvABk43AkfEoV56HW3BEwGu8RQmZsCzPa4uMKHiWXpbTvbJivb31zxXGMQY4KivzopBFDixb4AFNqkS",
  "key12": "3K56vdThUTDBZgVfBbbeogUsQ78sqC3vZpJgEWsptYASV4ere2j91tzBCYWkoAoWcEKwezKrBJrVaHSV415NQuJ2",
  "key13": "2EAEoZJXMUUNQkU4tCxAgafBSQgQ5vA83LxbMj9mKqrPpzfcYF8nXTXuC3ckcc1G83qrAp2eJJTJL2sc5kqzgvoq",
  "key14": "5oAh6smi7oXbuDzg7YLSyZTBW2qm2aGnw7T39Vu36Tf6LqUi8DjUDQfNM3wfbvwAzwFGahGXdMoS2fu1SGQsVz2a",
  "key15": "3Adip8reN3PWfns2GVLMEbbY1UKb3Dph9Piq2FjgUyhVaTnvXpyrcnGHmBDLwGw52bn9g27LY8puxhgFZ4SeQXdP",
  "key16": "3kmADVHyHbWN59yyX7aqGpNjGBGpUrdNtArwHCnaFQJ7q1BiiWAjwWNZ1aSVjmyqMPjBoto6xidQRsb5y76CeYER",
  "key17": "4sDiCLrm6fgv9UpXxWadrfXtvteE54VBPw4y7TuGWW2FQRBqsMPMEvh3wqq5JSc94WA2WSafb1FzWYBUYJRSp79o",
  "key18": "2FfnxxxAJQfcJD6BjqXWTHFkE3dzNwyeaTzkeNdA7XrjwYJvGqnsuExy6MBu8CF39zKNSnAPi5svpiZ2ChXTg3Ru",
  "key19": "2TJtvmkwvtZPRfbSBicZdBRHJsRCu3Ci8XMQLaZBc5yHwcoqUb9zRTajExzVuiGwiw6iaMg4AJ91B1QPxZdBxFyn",
  "key20": "5Q4Gp3815Sc1RYCEZdu2NEzgWf1ATszhPrCrkWuJGDWvRWciW25k7eCEGM4uW1jDxeCoX9haeiMn6GE8Fx8saPfe",
  "key21": "33yJzeWagBeN3vrEsLssd1rNG6LoE3mhfXvUYFNPhcqQbUHybnpfDPpZCJYjsf3m1Yast11fqydGJtbGwFsGgnKN",
  "key22": "35ed9DUtpNDXcDF6tCdXTPWEDgTjBRoHidYUwQrp9AMKbvNzC2nr45pyCZjeV4JfgpHHHxC9pwSRFyKnb9MAZLrs",
  "key23": "53jtRJESizwRox41SDAx4psnahshbpehmFx9UL6aob5xfkeqkf6UkGa2nEHxwFUMB6bqbTeeMMCw2VB2fDRvRAV5",
  "key24": "pXh1mPfVbV9Gm6HaVc14bCv9Pd46UvsqQB3VJ31XqgDaAf7QBvYnfcc7WHcitUqEskDdyugRieAFwtb8sHwnPVC",
  "key25": "3bp9cDkMMzuJt7DbVx4AGapgwNE3rdshytbojtDW6rBTtb1ha8qELjQQS8cHFbR4rPPvftkpKHjGPiCf7xGHsuPK",
  "key26": "QW5JoBD3vxjmoyB5JEWmjdidWXrgeFwxCkhs9fxqs5oWxz5LPeukEqd7E2ebnaehgXUGoDR9vNZsmVEyVqWa4BY",
  "key27": "5R5jbANczP3NLYK9pYgwz63iD5acifKTg4cVdUGPnNZvj9bAnkm7NUHvennGkXkU4S5WiJgjPTEpxVCt55ZjYfB1"
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
