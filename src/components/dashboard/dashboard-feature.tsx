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
    "4Rov8SURtj99THBsu6iq6gRLERnpsP8snpmgaX8AwZ1vUz75zVnEmEHVtMFJR5FWt66e15Yue886fAFB4HMT1PZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQr9u17Z4fzyiWv8NyPqFbN1zjdEvtGGpwFRJ9qg4nRZjjCYecrBrvFr1ifcMR1bzYJoEcNvCV1WWMnfeC58pGJ",
  "key1": "3jsMnuHCvCCgUwSY6ndACr1tnLoQ6wHcg8vh1p9vdNK7XzVJJM7Qhap12AVPRAD1VUbBerqD5aZuDzrZch3BiUdV",
  "key2": "ZC9HG8Kduy9fDQmj3BYM9XYRJFyQMZY6L8tfH2DdBNfZ59TFD3yz66bnPWsLMytWUEXvqKpRJWZYALNaSKR6yyF",
  "key3": "3CCpy3XMKVi5L7e62CFZXtjWnwWiHE7TpLKNAXR4WSVVo1tXaPP7dE8dN6qecxbuJyGjXYyYisYYW6WDoVM9Gpcm",
  "key4": "5tRvGei8dpMx1j6ox7ZgxeosfEeDmXKyLs8p6A3jadmqN4bNhRpicTJCQRDXGsTEUkz3SC7nRAvZHSLQmhqMFkNR",
  "key5": "49eTnvmetMDfpRVeeqNzNYYXVvq1dqxwReCurtE5v2FfM4sR6uvhThS5Mx1w6WzJkMhxcTHHpQKEnAGpsYGVmr3k",
  "key6": "or5Cp9ZxpuBoWREytGpujksm7VnbAn1NyeDpsTDMCXm1tn5o9iAyatoASspry1zDTnSkosLmVp4S2gTq2vPDqPK",
  "key7": "o7FARPcBjtGGXe6cEmZKGSBGbMhGH2VCACCazYDbWYgX2yAqionr8R9hLZP9wzuA9Ki5MSczEaHjSEPV4EYx2bC",
  "key8": "4FqPVY9vetLTRMUaFax6KTsW1h7s7HnT9JtKjB4UHPrEkbcH5y9bUkWM63potEpGnfWLHQBZaVVYMQAg4Jh9JT4x",
  "key9": "1DxQNDrL6ZaxZntg7MH8G75VXzUgv3UrEL5N8b3CLs2rpXJWmHXghiNmJxKedixNRx4VT1XPYDzjg3C2prejGiG",
  "key10": "EdVbQi9ab8TNtdN6zeRAPBxLpfuTVUzLfbW11ACE2EMu9xq8FgujBLwGoCyi4hVjde8qoqSzyXPc54hCakBMJeL",
  "key11": "2dH2Z8hVSiMcSHtJgxbi1W6WTcmRM3FPeVh5WzS9nBNsTvePcS3TGGfw4iWohxtKvw7piVLfhppHLTzYHh3NdUW3",
  "key12": "3wV7MA9Gt6jNqnArNDmDwJYx7rHhkSvtTxnHp8Sp7fB3ivLqGHr1XBKT5Dx8uBmsPN5iKoFceDKEwMRayWpy6EyU",
  "key13": "4Ddt3yj6fkBCMAkufPNpSye1TuLf3vRGuw99ju16vKDRX7ufJMAfoLxkbGAjKnuwmkReJFEBiKR5EC1PHzdCmbEL",
  "key14": "4G9bGx22roFKdbYcpu7oiJ8TiPxKnioN7Gc7Hu4Y26Ej9T9uQTAJS7pocM591mbczeoskGSK9XhaYNbpmHkMaT4W",
  "key15": "2vUhffPYQyBZ3Nty819aYn5L4Pc54Cosmmw65QDrmM9ghW82mumNs4XGozRK9gawSuTxSYT24Lo9RSe6yiRYTk8s",
  "key16": "3q2fXwQoR6Ea32a7Agk58sXeusPrJeHQJZDwfpbGc5RHh62G9yFqyKTZPnU4k35RHJT7wJH7wzKAkXggAuHyEz9q",
  "key17": "2a1u9e7ZzVKG5Y59wEhGmjbL1wb7fHYnfLn5EE7u2MyQaVq6U8yY3jPt3buVuj4GJuqs6Y6kSHDX3JsepZ6jQbz8",
  "key18": "3AMbqvFdfN2ZSGo2Sjh51j3Hh4EMbf36SNw8jgrxcYegLbtMUjzkAwn94uCLquBSMMaqgs6VZJ5N5TvFYUVJvAaS",
  "key19": "3AhNiRGdRpPv8Eg1aM5tScRZBZAzWkMHjrXdM18hb3qKZtppG9mkgUbZwfneZtcQRTJpoAR1Gxc1RoVJBcKWCwW3",
  "key20": "54nJLg448yUwc1Be5QUcdLokMSDwnbkjnuNaVfxEegu4dtcGXi8P95dAXQe7Gj2LkX4eWB4ZpexAKVTehXyGkCFw",
  "key21": "5JNK2vUCz8yoDSRTNWrW35cEUrEPsQXFKv68yPTCRZdJNKSkLb6ByRUq3QS4cYNQ6KZtakMnndvb49T4EdjiXgMb",
  "key22": "2HgLxxytXm9cnnk43XaLyXVCfkk2qTEn1gZ5SgJFSx3QyekuYzq2nSCNPNG1zL2XTSXEZ6HkSRDDoHffM53Z5ya3",
  "key23": "3vmW1GaQ114PmDTshSNxmDisdDv82RzenxyStBqhvM8AQovjaK244ef6TYGEEeTgwKjg96PzZDoLnDkNaokJbQ4X",
  "key24": "5y91XnJga1brRHaKjkLUjnzJArKVwNSGXjiV3yqYGkGwikCLVyF8Y7YLUAJir9M6eCwUHixaqTNbfq4CsVaMc9D6",
  "key25": "3W5xbMg4XCWNQDDntvQHsxmXvYyrStUvpvkbdjvUf5JAm3uwZaLYsPSyxRhNVPPL2VYo4u7mrVvrkWGmk9BHQAqT",
  "key26": "4wUWmXdLcTcsW2cHkzAMCbxPGEnNW7SznBB7mTTkSPVNMyi1AqHM8iPAZgPyUF9rTm2CLAQbayXbZa4knRsaDaHg",
  "key27": "2Lm3cfVDbfYtkkh1ah6tqxu3bHY4hxksRNeQmdpZ4YkovztJK41RmsNxhuEFZ7K9axVHVvvg9trNPSWQgDxR1s8k",
  "key28": "9uwkkvFEe4wwxf5NT3dLdyBoRRyrwLbkaidUNGmrpJVgWR8mhtsZyfbhwjo4jZLxzL6LBxCoGhx6P3Bt3kGjR6w"
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
