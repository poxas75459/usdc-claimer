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
    "31cNqHWX11Uuytvh7DwEyHoPgkng4UeSzDc6P14hcYDUEpW9B7YMaUgx7hN6pPAFT8kaVsHCSJQVpqU7bVeCy5BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCsssJeEAyxNMLpXGH2okiTrzVoQzokXEefZzs8U3zizW2sjYNQYaZstcRBXLiMADGBDdr4PzosAzWJDiCo7nwo",
  "key1": "34ZkjBQ8sq8tDdN8adxLeQzjTZG3RMykkRa12XM92PiBqyGQ6BwUXNHJ8EVVmXNEMDeLikPDu1EdumAXQT3P633F",
  "key2": "3mw1dqhVR4diCDefA2NYYc8JxFqFX6AXfGpqDisiwoUC5FdJyKykKiq1YpiGdEmnPuEJADRsuXowErmh4bYxv71G",
  "key3": "uWnLg4sTjB6obSpajxLmUd6CFD3gxn4CbGgGJsEbFekyVUh1RYAq5EjXoiMgcrPGoE4QPG6nYWVjAWrZqf61GnD",
  "key4": "ptjcNY1fnFTbAPqFEtrjr5eZ1d1J3vAe5tj3W8XEzv4REmHLAeyJdsDWG7DqyimBXYyNjxELngJCdsmcbXcRhBG",
  "key5": "5G5qttokLUnu6CbhwMjjQak9w3iKAMyhVFfdL1UpwfG4QWgdfwKUeHyPJ4RU1NVZG6BnYNP5Hu9HRPksyemyGW8X",
  "key6": "jTQppRiLMTVwuP2ohFaP8yT3zs76KNFkPJohbfpe74xBpySFxtrpfDyb2u1CFWLHnVfNuuvBD7PUQ6qekCC4Hc8",
  "key7": "2SwArBJnj8a6ZTbsBVAUDh8GQP4SJhahSXhSqo4j2nrGwdajYxmveKRh2rf4hsYPk1VHZqJBFVvKBuGwLkuJbdkX",
  "key8": "3MbhAmUyf2MD5eg5Q3LF6roSLK6BHmDg11qms4oDKQoajBwmu8dnVVPwnkBa3bi9d4LAdkLyJygJ6sQTqfFU5gUT",
  "key9": "2xSD1zdUzwYpViDSmecyA6iLUvGksz9hdELzFJNb9rAZ4SsdvS69QxGucbMSbD8CubphT3azYZehDrspWFVm2biT",
  "key10": "4ELmYFYTm5D6GgYjazm3LCiBqjHgQUDii4LtcfBztArsDfHRYBpCz45mLPwqmYJvr3tah23XCxc7EbQqLP8Lp1GN",
  "key11": "5Qc4Yo5ZwySVAWr2URGCVJPW7VD9VV6NY6z9PPnbDagH1bkYsMz3N8qDRxEideKm2ZS4t2fbPkrZmRiDGq3fRAeP",
  "key12": "42dmXKYvcjMwjbnHCNo94bu31sNcig6BQq4EpGHTvE1xycbEkA2zuK15h3bxjBogx4mNWbr7xqZ1xT89q2AZUQZz",
  "key13": "59ktLTzR9MD5UHtPDK8hbMzDi3U47FSenVoieFD8v7vkVAJNcgL9BdCWn6oL2hbJP5Vguu3ywR5rMzWdznumFK5K",
  "key14": "3FBPKKEk6X31pDsQGQzb1qSNeAWmsJCvAfrhEQ1Jc1qKy1LDo4BcUTZMdMZ1QxeBKSpzpq98R3dNu1jAJuAJmGRF",
  "key15": "43XdSAcNj1VTxNn452C68BPQ5MRYoLoV9Z8aiECbudLJjuny3Z9cmw8URhqjJrbqjpmDfKi6NPKr5LLzAzG4SFTd",
  "key16": "49A89qGqRHpN8fJUrjnH9D9ftXmoKYx69XkaGFRe64DTDsBYXUzgHUis7TCVH59JDZN5sUaUsvA4tbndRig2Xg3U",
  "key17": "3JQg5FMZLRNPMGbSTESszKc9E639u5MYxPSnMq8gPH1D7giR3jgKsjy2jbr5xWXTcfd8B9VSeAuh2LzRCRYMqRhj",
  "key18": "5HUF6fMsxcE4BfBxdo8E7CvjBXdkr15y8oyJPTAWTawmuC5tfaTRiUmbmMBP7L57hALWLSDbbBpUqif6ZhhGqqsV",
  "key19": "4zKGAfiumXc6ebcfzPCuZk3gVdNon8wXNVd8yWupEtVvxfESsGn5Fe9GMXJEYrik6mwaLgnDbgLsYeJ9KLoPZ8L7",
  "key20": "XuQUN13HUuBzNyecgL2GCDWNqapqKau1UMNvzKzsfZSf2AzQtEgnx6vfhijeuuCumMviLXkcxDQUsPLwx6Deb9P",
  "key21": "3EUnY8evoJb7zEw3xHVuib4Dfjy7i2GUX54HHT487yqERzG1Uj8yXUwxdVwz14codkehU4vbHSioX1jyizRwcqUp",
  "key22": "ZbWvaAmSWCp4QcHrmWnR7So1J7wKvQBJfRZh1RF2Rs3qcKftAtAA8e4xXGHEL1kaGfrShX4FjphNzCUYf3ztrJZ",
  "key23": "g4zKJ5aitfetH21HD7XpzN1JG4cPEFQqpvqXa1jucpxesLbs1rjKKRJ36LMEyo9Dejtkq761DfcoebTz9tmykTi",
  "key24": "4ZjRGqzF286DoSrLEt3hEJ8Xs6vpFn9cnsUSpmpxCTcjZCdWZN27PS7krbcKfFEBbCE4QkLKzS5QhSpBTVGB4ZXw"
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
