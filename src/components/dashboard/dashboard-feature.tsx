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
    "43tG9QNSSCP6i8Ghz5ERcPArGChGGLwKGhVqJShYBqymriS9EjtR69UNduWczgb2JLawhQ1wxphioHGUf3NahYBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7d6c7AM5aJ1ZhKWtSWq2dMcrvsHxrEALVaQpV58hnXppVPpie76Bnt8Q8RGc2qBiA93Xy7QK1ptaQoWGVqVHgB",
  "key1": "2nUbuEXTk3PHKF8xnzkWksVnWD4ughwLMivrMwdss8cbNY9TqrSYKhYuPEUov6az1iWggeedXb1HTTL7KaXuwGPb",
  "key2": "4D8aUg3atietmh2cZPRqtEhrqMbB4bNJ44UtPtXujZy1gcXLYQbQsamUJNdEtUn5BpkKegUqxN5Q5xzphsS4sqhY",
  "key3": "2dMzvmKPPEwZeD76hoTMex9jB8nfwKj3aDrUnCReBpBaD75J58gsVap8hDBzxyhgS8nDsgnHuPn1GzLt3SJpQQMP",
  "key4": "2EnABFmMpuMdQQR1fN5gVZbE3r6gAArViKBcJaRy3tWpZ9pBPbdifD2N2g8RJGWCKN9cdwJGU5CVvni4ncEPZ8UQ",
  "key5": "2dsBdUuJxc9LbNSKb6xb3HmwtESWwm1knzA3tKTUam8oe6qstphUChDCUM1fpoKCZiuF3BJv7Tq1qzfd1fnSYWpr",
  "key6": "j23cKpjxGnpLUDBN1rw1XpU2HqWWd9N7uYCGVLno4oQ1PtkUpHaUrT5GwdoBBR6i6QSnNAKBPpCMwNn9YqyoR1B",
  "key7": "H9afhY7SEnXg4mSZUAJkbx4mSjXq9f7ZrcSoGPjqbZarSsAFGPR4xzk6Mxwk5reLjqmjRCub9eAS3hMij4LNNMe",
  "key8": "5vAnXj1qzrnvGddzzxdrQhkcVafh1q8Xh6yiyBBn4HZZxyfYh4UGB3rakPnCw3CcvXPTcGnMu18N4KqAw3P2ZGgj",
  "key9": "TJKPfnXKuYfbFJH9TqHBqb3KD7zYCorM1MLnsB3H1F9gsAnjCYGyVtAc5QVwbrg5zZao45moP7LsRiHxakt7ppo",
  "key10": "4jaNP28YkuBb4x8hrxjG64uMCQQ2vqY8MzrnKixSYmf1sDTVAqeVXWEXdRf99JNFG3Y7QUZkFVSikPwuJoRV3cnZ",
  "key11": "2zCqb3VXL5un3FPj3LzCvm6BgbZrm1QSpvU5mtLkXbwPS2RyrxxWX54vUxD9Yebf74NCq8VTEbkDM1uGNjtecVqK",
  "key12": "2bkYRFa6XaP8auRHchYgfKLUVt3HPJy7k6xcwViKxK3mD6SRUtSb1fsvZ95BimwzrRv7hibUrkoK5JcySCTSCAv1",
  "key13": "5YnW2QFquE1KPjYicrFw2a1SZj5wPgg32u2uLXcJjeNSotem5StzNwjuQob8MNZBnuG8GPrpDFQqyf7pL6ebveUU",
  "key14": "5qCDF2zvuQSa1pin9e1zfbeKeFraWjeEaxAAfDCWi1BCzMGoUd5FmDNVVYL3Tw2KPteAypV8uTqxJ4MmwMHS9Fgw",
  "key15": "4DZDnoCo1CvCzK8n33pPKj7qrgppKVrjwp7eK4wG2Y6tuTxyNWFAAVRKYndtJXofz6fytLDryfupiYZqpwepDQ3i",
  "key16": "U5aX9GaGJi3B28L2VfNASqrYPJPwgpiCCtGg2SKpwcK5snKF4bT98GWYipL57VGiPeVhYZemvXeYwhypXNYrUd4",
  "key17": "4B5YtrYvV2av7mbXFQoXrSU58WWNhXNB9jozQoJsSG8smyGTGWnw55vVCwE63FXZ4GmxFLis8owtFBTEki4gePN6",
  "key18": "3VKn86iAkhUA55QuHXutYF3BQTgPBHusksvjERRuQGVpyD6YmScsC73f7qKHfboKbBUk1jqxAbdy8DXuMSpv7kE2",
  "key19": "4rmp6JvAxREVwENAj8v2GKHH5UwrMvrusKhRy2rYEjBeT15dBmy6AWhVuDPxWWbz2aHSpmprFereN2ECKxBbw59N",
  "key20": "3Epn8vhywivPiKbKEEZ4bqNdApU4DWgU3WQhs2Q4m5FZ44xi6kpEcqY8s9LtpMRcRAFd1J8uJi2F3gSiray4DHe2",
  "key21": "3goFCwcQPP2sZg17SZnnPSBLfQHhSQW6YxU22GjXAdQbsB7EhcejnxxkLxx8DKuzFdK6N8rVBKLU7v5xEEVptXKf",
  "key22": "2po1Wum9oQVGcdvF2HkLn51hVtXAy4NEk76rVWjM9qqLGq4F7JPgmKeCpzrgrZTrYV1KJkn574S4xUZpELGAzMEK",
  "key23": "62nEFZtECTwJHuEsL83ChG8XCfEUwDo7DocCZgXc1azTQqZ8JqPa54hCSjeQckZpRYnbYTftHsDKXVeBuUUSm5xS",
  "key24": "3BhHtH1KzEVr3uc7DiQ1npBtWt2Lk356HTYRfPVTk72pbFSVnrv3GfuDnwkb6xYyTi7R3wa8CxGGxcTgh3P62bz2",
  "key25": "3baFZZHF8jBk3KCzk2PRi7FyefiL12rj2Wvuma3AbCzzpDS4Qd5Ua3BdZGcZ8mfL6ZNZUgFEUeBirrjSmmfKtuYs",
  "key26": "5nvK6xUqMjK2Bbm6shf8HLqdcehPVukomPzobXA94aZ9b5aUxmUiRNWE8TJ7A9RxAWtCcQb54webj7CiTpLEmnvC",
  "key27": "4jbM2UibUWmRrc7rNpaty5yXX5pBrG6WaNcWJfyaukupDNPSgwFQtdz1c4JkavyXqZtpsePoAaX9zdXtuStJCAZp",
  "key28": "4qy8wrLcKZxDphbKo4isYsiHsT8wCMZMcvr4CdkcPu3aM43qcGnAu1miZhwTC3SFCRghN85W6pJZ16xJJpfGoeyK",
  "key29": "4qYFjggpPCmhtoQNczNLye7xdKnBJCA3VCiLNmgkpNed9tLYWCauqAzNYxvSnHVUojEvemFXomwS6oRKQPFDky3p",
  "key30": "F8VsDMuZANQBAoRtfkEdhYuzeyr6yqTeZs7Kmf5cUbPuXWoKvHruYy51P2SNa5ghkEK5mcr2rRtjYfavfz1tMkc",
  "key31": "4NpgrSybmdnDsYkFq97WVamxnxTZT9mYxiVqPToJZjQpGtSwgDeLQFSxJZxKvjPb5vFoqW1wRxgr7P8ALqdLe1qU",
  "key32": "JeBWRYM2Sfhx1yhA9Ax1g5DVkU1FALZU4LD3tBux5SZS6ZeWRSoQ94uGbnEneNEaZKZGqf6HyaYnsmoq1FnYJh7",
  "key33": "37SoadYSCBHyxjpf745F4hJ65jdf8BC2hRfjvrkftHUPuPgiD4a61BzgC1DELmkbmFCR3Cy8KbUAapQdpsAFE2Yy",
  "key34": "3rAAaK7U4kFrVadcd2bEj5Dj4jF3ZeWNLtzpYsZ3eXUebfGeeCrVZtdfmiY2dUkjAss6thDQMPNUPCL1TDkCqnPH"
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
