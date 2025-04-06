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
    "61KSEp48QHsmHwSPFfW8JYEsA3uWFgLEyhubxuFNYiknddoA7NCWty798YorDL6bbpjCvpjxPa49gYZufAgF1iBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkmjAGzWYf9MsRdUPtyhFoKw4ZykYNPn19bSw3baxvjJFEt7MSnQWPXN1BgW2uZedPBKZdP49KPWFYdSVKcKJ3g",
  "key1": "35cdSgdUvbCV5onnrwLa93wyXAGgYYKL9ifp1xfgCFEQUnLUMTKgRvuW1WzthySN6dGMiFP7HegMR2KSQ1T7xU4T",
  "key2": "3cWSeSt7CbcP887vHGLZVV7XE9Yf7FspFMpTdG53JkbuDcSeDXU2ta6xytCTrMtQ6B6ECd6KBHo5TGyLLCg4av2J",
  "key3": "75grCwz6y3FabQGCeALmoYR6CoT67UBWasPVpYF52MqgYiDLzX9HWck8HjYUG78r3pJYgr9dxgTpFjaKjw1GMvP",
  "key4": "3oGrhJ6GJmKYxtymLdmPvfZUU1DnP8j7uY1Sqt7TL4Pfmgz2Rsr3N6Q9KFY3Rn5kVEZxrSQSRnR5c73rvLVqytV9",
  "key5": "JmatgWuZhDwKwSnaqNnsKu9DaMSMRNLmCjzrMMBg6nLhGsLNH4Eq9rWVMfBeLa8EXv1jBfBj1B6frLBuRhf4EU6",
  "key6": "22yfww8dCHoc3viyZFoD8oG8k6B39oph3hN8hvar7CqzaGZ5FaRTrg3S6FpWV3Wf6jACoB8jeMU8opA9diJGs9ir",
  "key7": "5cwVac1RWN8Ws6JHi6Mj2HVZCr7a1an1Qn6rrCgiCwEFCjHbEmbahvuWdQpigYAMHwfPo4BJxVwUb76ajHwAmgNB",
  "key8": "RhZTqmFiRUnTXGvcfyKvEe2o6jELZj2iDUfVqMZzZAzxtjqwbJabB8JPvHU9WanXhSssNog4nn8ToVdP3N5nqga",
  "key9": "5E2j5oGiJKY9rVrq4J2vnT6jBgGbut8vbvNQ6ET8TCwWSgGpKST5GH1Fc84SzTR5TxYKsJLF2kVDnXPtKcS9CqSf",
  "key10": "4zFCfiH5Bvm1Bovq52gWL9iKGCWoURkZpd6nX6iqP15awC5yrKjkqbrKkbKTPESVnuE3HUeyaRiqvpyLCx35BuRb",
  "key11": "47N7xENh1sHHYiZQ8ND52SGNipNL6PCGiXKWRS3bgbA1N7Z2Pp6sTTjzpSwLvt5uCSdk7tQJjSQuuHg6HQgNPLEJ",
  "key12": "53ot614xwEJfxH9gmVTYgXv2xKArt1ZX5MDAWFX5xc7bz7u35yaFEgQyF697o9fFCn8uoxT8fukcm2xMnBoRsZzB",
  "key13": "4WwCxahqW93pEnaxS5Vx4Pv9xFFXy7C3V8kQtMRBaeDMqdny46xBiYc61UCZT9UoWbV7kn5jFApU2Gpy4dgpVEab",
  "key14": "2dYCzaYzqURAemWxFP6bg2guFedrM5TbAWyQAS9qhoqdpeUXuUKzkFTwbFAEqiZoxqKf1wHbouFxPusKx6PmtJvp",
  "key15": "4tG3R89AgtFtwa14PoQ5eKgjDvgLxim7o7D6jWCDrkwdAH2MgTgM3rFmrhpEMscaeNRsXo9KnoTmk5nvBRtHGBWS",
  "key16": "4BwtXnHfXBSygVBDCDnhJXYYhtduwW6YPbbkWKH4qKNbhRnxfdQ16RHjhY3x9kbe6GEVoMapXS78oorjJeFQ2o4c",
  "key17": "DfpSWAcrmrBMZhkZm9XrPhErDYTri9m5PFhfgia7SHwtDGsRB9Yfw1Kue4TVaTgp6mUkcnHNBHugoaTwk3SFKLb",
  "key18": "hrikYYS6z2VEZUXjNVZZiQvY3zWW8XCtZQVqU8U14SE1zfCbbnpWbxZdEdth3EejMtfN5Fu8uc5fmjMTZXDhrAa",
  "key19": "3BSvTwL9kCMFM9HNknZjexqtPPVb7APBz5HA98uuCEkQ4GAGcmgWHC4Pandtwx7pi6tg5V2bLda7M6PTA5x3fMpi",
  "key20": "3kYKJsWf7LesbzRVKfog1SpxQf26uhq7ogGSqbEEKvQej5cezAgCm7VGzVrdLT5kuQXnMoRP4GmmUgh4FF1GFk4z",
  "key21": "3anb1agLKqFnbsqXc2S1VLqCJ1HQD9ogh66uXm6pXFdNtsHJMzFio7A4DPqtSP38NPdwxKihiPh8UG1ggUkDJwjM",
  "key22": "2F3QVy7q15GBzzWARBZtX9K8o75XHXTxUAA9USpxdwjetNuXe3ktv592CvTFdm5Gd7HCXjvMgfcyDVakHAcjTMKN",
  "key23": "2aRSHUUFQHeBzRQPWg8sDjc7EwisqH6kWZoojmfTEkH9JXsZVVxNHcXPbZk1G83KM93L1Ko5dhFdbNDNsrQBe84H",
  "key24": "36MQbvH7Xz6F96hvdsCHcjiKQ7vZkXfTyLyF2BFTNgwJGcLoByG1qYswYtJYccHL5zBXYKn95rf8FJtLp8B7GRBp",
  "key25": "5Lecg4cAZrgXLZKLct2Gh9yQ6WiSRkZmL4xnaRKFG3fvH9gW62AvgiYMLMXVQ3imUycfeKY8EWN5Kof2UFqB116n",
  "key26": "4b33a5x6ZPbpMbhNtkKjxqRcvB7As4tzMqYZEYi8NSyFQtQEZC248Kin95iiy64TGx5ac9LgouyaaF6NcB3rvLKw",
  "key27": "2juPJhSxqnF6sCzdzft7wHLrSj9gG9ugH8t1qrt3ZgTcBjcgAxrWYyTrqojDwHduKywsukoZGCXxxS4HSCukPggH",
  "key28": "5LThou3xkqYpdrfcygKmo8YPNjLuKCEHiaVJ6PWpGoBs7yVJi56WMtTAxnQk6jmY7NFjEP2urMu1wNtYu3Q7faab",
  "key29": "5Zzm8BdyfZtDwXTS5CUkJyabP8ocp7ve21MHUBvGhGgGqmSb4YXFcYXZxKAbMhvpX3NDgi5EU4v65Za9BsEdNnCW",
  "key30": "3ex5LdTHQvuFpXoun1BN18iUunzxiDnr21QuSeDP9SNbEssYd2zeUMutn75yhpi6mnrLKAqw7JRJvk2oZRM9GeQU",
  "key31": "3ETGZunTaniDecXtUULQgawPZBEFcCmaiogA89fFfP16uZFCXHZaEu9jQRqnhDWMiQ9uTXj1M19J6uL3RskZLgQb",
  "key32": "2aSXQUDi7mNwEEhSmZWgTpJ1mYGnvJiYYgZ9oRLT5CSB8xMvTsfTTSaRmpVPayPXcnL6F767qyzGsjSbYsknfQsa",
  "key33": "29yfv4Z2S8hxL61BXcWsgiqFA8sbXgTi7kUZad3M1uj22ZuMaGiymSrhMvnqzujvT9T3doYSkCVUHmfMFTMjxz91",
  "key34": "3RRbxjsZ3Prx3BMZbVyuPoH7f7nRp7pKipe2K4XQAviS6T3xGKZH7mdBYmdcLpRhu88vx3VBUU5FxXdznDEgnjw6",
  "key35": "5YxyUFx3GxePSkeH2gq9d74z3f1fBTQyJ4hfZQLpoevFkXa4cFRoMpo3viGkiZmmz9fYZEhPDLpse41sswi6iRSU",
  "key36": "437BEYwznuxnvLzQRdyP7Hcqgdiv47EawVV7UfFpv6rTVTzLEGSLCpkxnFqdqYaMr4e2rKACQRQxtfwdxbAY6DiK",
  "key37": "5M5KLj5NU21mi7CoiK2rCkVwwEcZCDdM5hCz3phk3mCmuYtwFZJ1yFFpWAx18nuWjNviU8AFA1ap588Tps3qaiZY",
  "key38": "qHkHNQniurFSXnbVzNSdcf41wzVDChrNfe6aSJ68DjmtzWUDRNTe3Y74jK4qt59BtRjFs28u2vtQUGPj3RcQffX",
  "key39": "4oftdhgRQfNyMVMBp45c5GHe7hVdTdKmhqVFxy9dZn9eDhhMaoA1JQehvoChKq8UzDiBJUzipZ9xug9D5EBm4tEG"
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
