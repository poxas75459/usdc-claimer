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
    "4uQPpM9Mfxaw4691Y79v1ASWvvjnhsZPacXGFZR8QFsUTtq93C66x4f9kdgHCwrWoosvShfiYMoA8KebTT45qEMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B7o4nmUWCe9xwM8babzdkLP8YphmWLXiBSeJqsdY8ioBMTiKMUUw6gsbbzLrnK7ytknWNASXj3ctfYcFQLtR5gm",
  "key1": "63CGo5tgVLCa862H2AiuXDDEGtU1kmVVGaaFHgVrLWruEayV1K8pXNnbBC8cyjEoggjF9jTANThiLHKV3wzfUtJp",
  "key2": "5o1HBVB5jSF8LEpUM8Y9V6gXgerxMQUkNTAegVZfgMgB4eXrMh8ik7J2sRQZTKnSLKA76RG7qWjNUYSXztpVVWHZ",
  "key3": "39CFXvqAFjKP8VxFdBQSN9gfgCn72ojjJx9XrpK3bKsY4R3WhPiJP7nQrXffnnD2EH8z4XhFMaf712tUziZjCycQ",
  "key4": "5WwN8r1SSvH8Q8KckHohHxTzvipSb8i2yqqUsxw3SVPKCrgANYBemLkPH89MncYGx2QvEgg9wGYBePd7byoFdEM9",
  "key5": "4w5VYQ1SFBBVU1HEFU82fVzJ258e3RhHPwiNGwVuiDhaETrrb5Zjnzix3sk7HGhgvZg4qkUBuGDTHrU7mt33BdoA",
  "key6": "5yRXCnn4S6B4coqUAJs6Qmz4VGgzA8hwWd5oygoH9BCkubUdB31YTic7WnRKHN8ND56qUGfP7qX3eVEApMgRgw58",
  "key7": "sHfQWR1nwZHaKEYACorLLVuL3YfQn1emAjqELTErQCcdUcQqMJCXU5fyCEUnRKCg3JBWE38N3MwbU3g2BvC4i8W",
  "key8": "2uRqvcq2xi8jTSVo9cyFyfcQAL1q2V9b9vcxwPxzshdjcEjcTJVgaRPei4g5dp67MFYsVEGw68YGf8w3egFWi2r5",
  "key9": "4twBeaqoAUYHTBoypqLNH878iN6NzDjXfUmqxo7kpdhsNzXqoEYBe58fuDUqtzVdfqSVCoaHQMEnfpYdsyPWTTUD",
  "key10": "2k7vkzbGQmo8FRW9WUiXPE7wpsfiB3a4HoQdiMTnhvU4pmsx2whcMata8sGMVv2qoBmFCieS4EZ2eKRFg8ZXYGfC",
  "key11": "35MXwwPexRBGua7BYCwtB8m9zfFoNsoH3X5HG6egTxtviTi5wGV1DqGAjwsF3umtNVnEK5BSMePL2gQyJh1mpYq4",
  "key12": "2oTQS46j9DGrjkwRNUs2PcV4hnLEAFc6mj7P45mFF6L3CKEmU3Z3yDL5yKdYUYHmiTwqFAoaAkpiMrzd9KMQzur1",
  "key13": "2vGYycafHbSx6oANhSYtNcAHPG7m36gvkcZscFrd35K6ntysyjm5sj1SRpKwFLYkwG4hkk2VfQ3Rf3GNBAxjXU4d",
  "key14": "4kDsWk4chAVfJPmpbBEEuMHCEvcfXV2wK7VvACxc4dvj3knin7CB2MhMewkechRcCQGt2XkdbhhGnXVWFnRe5RdF",
  "key15": "5aBcwaUfakSWL72bpM6cpWkTzCaJAhvRFwmxZYMHc4xRmUNAwfA9N4KdsbEZa2yHHiKwP9Ncf5fUSDjHR98rSrdz",
  "key16": "DWUmU6t9yr2enuEHX2cGMFW7uiroYQ2AMb3he7dr6pPcwYrCkgf3imK7b2vnZBbqPgLJkpASz5CoWSVkNHDE9uR",
  "key17": "4naDQGnN2mjuhE56zroBau1UrjP4KjZAmFYdjqtdkFdgU6FyzuUt8dTukVVRVy9Xp3zKMVBGGQx3ihb46gL5kEYs",
  "key18": "4FPzLYJLJEvEw6G4yFeQhzvGaonhyuUyyDVEbe6UxSjxyVWesvRsGTDDYEqTwE9RJizdyygpgMwtiUnnWzjJjuj6",
  "key19": "4oQs5tLULrTC6FyHcEmcRsWEx5nceobp3z8E8JgTHPUWaihJ8FG5p6MvP3YDBBxteAtvpUwJYG9eEtYh9EStDLK1",
  "key20": "3dVzFiMwmKbTcvbLzKg2GpG1DTdyiKRRzPgGGcVZQBJytvHXmgfh3Vu76XTQMQwxGKEBLJz3CXDETkDmyUUpAdUU",
  "key21": "5VB7cCtJMzebza8YRrFKEShxrdN2zS3yj6QFTyFtAHt1HbfQt69TsNEnZW7hK4awwW54C3DDdhmwQbTJJjpfBx7k",
  "key22": "2NCyd2y3SDJtymoWFSvEPKszvqFccTH3jmKVsN3YLnCdPYTfm1fKHjdTJJCU13Nvkt4JAe9w94ZCAsMw1xX7WuS4",
  "key23": "5rof85brQ2LwuwJfDMuoLCX1V8DfHph64wNtnFu7S2qkqcqy7qgsarNV6s6okw9QxPAFZhbL7NLTe4gbvwg9PgPz",
  "key24": "5miwZtNhTofAtEJB2MMHEcHFWbkCADk74hZDDAzPQ4fZ7DvBXjjnqAxDqQrBE24cuCjUeMPDkuigBz2K9FWkjUSy",
  "key25": "43y2ij549cJFn5rHCHEaPA6f9pJP8MJvujSZQjRT5b57K4bVWWptp5PevzT8ijkwchU7Rh24s1tukQwGSPwvAUEA",
  "key26": "5jAMNqsdbW8BFFbvwwVWu42DGZpk8obqsJh4hksX3tpQUsTkZyqbRw1ExFWXFepoTcHLRh7eaLG7rcKnXHQhwg5e",
  "key27": "3hANZUdT1rNatZCYQurvVbUxdYxEnopTsxWkRMwtaZqvaDygkCenLSx7FXv9K72i7R57HceAeytv1zR3nAE2UW4C",
  "key28": "25S2StYCtzLNA57QUNUxHK99udTykoLQLCcAeRjG6XM4cn7TqoGjt6haRVJtdMeaADcQ7zk3foeuKMFJy6ECrKpP"
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
