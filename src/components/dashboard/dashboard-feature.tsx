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
    "66Vs2xi1gCHBweCMtwwWjdQn3Bk5hWBz3wLtDYBhSEme6DXZ2PmbKV63pqKqnkyuNfCrqdf7EfD9rEkUUgiqnLM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xm2qfjp7RNjo2wdgAfoRymX6NuYwF7rN8PJiyqMaYXMXVYMM5TnXB7YMPDh2G7ZRKK7fJqxcCDHUtmD5uc19CTT",
  "key1": "2C4EBo7tkXSWsenoMpFk23Yh1z9oGA8cJoZAyyFWt6c7eXJQ6ynVCx2Bk1vrbhM5cjgnwJeeLCd2x2EUcxq8pjzL",
  "key2": "5GiHQANvv2FUkDN1sDVMTCuvfrR6MZHQv4RwW6a7rc4mpsPDHwuzgoy5Cg5iA4hv4KPk1HsLpwfn65tDb4K9xEMv",
  "key3": "2G1kUUHXWHKfK4SmiaZ9vsfarXmhxtj4DteCtQFCbDuTpLNWThBmtNE1Q4KNFQAUWzMnXwST7rHPaCYKQu9GcydE",
  "key4": "2XhcRqDm499Tu35oF3XC86CbW29qXikUrRMLwDuA8GEXHphjG7GZLe8EkFwnxUKrfXRLm2BDkKbjXTJaqxdBg1gg",
  "key5": "5YpaJbzfFZaZLm2t94DgbMtS7781syQWJxPSjfarwBEtXJy5neiYGJ36ZdXyic2Aj1N4Zvhc2V3EK3M1HFGvjj7r",
  "key6": "3eq344AjGuNEhfcX5DFWfC9gJNVDUMUXyx4treyVNqgNbohR1SBkra4KJetYPAinL8bu7Np4YEik7FTKW5SXYk8g",
  "key7": "4uYuZ6aE1awK1567qKLpgnhBXppPhrAoCwMGBhp3feRtiDnw4TTzgQh2qkGT4BXLpXE6BiNz7NiuZYY7rzJKJq48",
  "key8": "45tbAio2nfrumyjtZHBSD781i8G2NKeFCDSPZpMrrsFs4bkQK2dBBJbMyh71dPMRQBnkg5N1EZYnsrkj8rCaNJi9",
  "key9": "5Wkd41ji9NEDWRtLxSsRon3CMcP5x24hMLCTVSXCRZ3G1XBtLtDRNGf2R4cUUUvbhAgooHiNbkhoosGpiSd6Xjg",
  "key10": "5coR6Lnpgp75Esu3xvRWLoEKfC4oV2kjwGTsDeSbdL8qVVYDkhrE4XiJ1Mf3YAa3dcopecQdUSN6EnCHMWowFRET",
  "key11": "4dpqRkxTi5VTShxuGpccwSNrRnwvKbjDFTxbS8zEksT5vbZz42YN3u12RGT2BCcTagERjxAvqNMUQjn9Ayu1Hsad",
  "key12": "3KkzcbsnZc2D7XR2C4Bf72ceBQy7rexbM2NYjXaNTK6fuT4bHDNsXLVMr7kxea14qgMDTZemuWK8JYyMvqtZuZvn",
  "key13": "4hY9Gbd5iK6w7jfutkgFxFbnXvxAPZygREYvkaNfYYyyRRAk7gTDRBx8bMY7ndZ1DA2Sowr2zRshi3hnshSN26SZ",
  "key14": "3ny5LZhnvuT7ztYTP4FXXGNLgoBEA5ZUyQfKepg2SK2MPeK4PEambL89QDGJuW8NRhTvCajKpkxZkfVNWTvRy6vR",
  "key15": "TGp1tYyCpc3UbxduwcJReGxvDfCmkjJ1ah7y7QfL1xzLiCuEtCRfEXjy5oPgYUg6ASdeJwKEQTE5YJt9bTPbVf9",
  "key16": "3B4Ci8n2HRHn8bHX5JQdXyAMpSWmztXtbjR3WaHyrZPCkobe21cDSg8f3xqVCHo8fzFSecyGhE9dfDYGfedfEe2G",
  "key17": "JtfDFtqFnpCZVLm2CREpWE8zvEXgNZuRFR3c77DRc4CArrko8VTjcg734VXQWJs32ygqQHLm9T9PQNnEWyvnBP7",
  "key18": "36pyiH24RqfEVQpseEcvi8SbtSkuZ6tvM1vq7M9wWqdUn6jypPKpLgnajeB5MeMBWRgE5pnXTmdFRmc6dqbgSStF",
  "key19": "66vWFKo3UTV3q93nwpifjvUeYqbeHtM2m2CfFYHTQZQCaHt7ZAamaM5V9mt2f3NXSmB8ywgDHUif1xkZJdLfSMNc",
  "key20": "3FeY5ixkrPZ9RuQvQHv2ht9xGG7oRvTFLjD5vXzzj2uPejZmWYyjsHy68v5q6EnhLWQtsJHUtDLSHAPgUAkd9P8k",
  "key21": "2WbstEdEqjV7Yf32g3o39hm4SWFHMtHrFN3fByate4k8KxCeWojDRbBgRpzGPbdrS6uJaLWLHVKU7aA4fHwLGYQh",
  "key22": "5oLcmpTcehFCrMZmhBMkmkBhGqXmRvxJ8GQSSotovKdmxX5k9H2fbx9hqVC6vzbcQcYWqv5G7HQe5gZz9b7L6piZ",
  "key23": "3eNAWdK9Wcj7JMM84nKTjtRpBdn8UpQvKYSt65GyzE8ZPR7YTMyjRJFXKfCcnnBwBgwbE6YGBkkUxLxgfL7ZBaJ1",
  "key24": "gZgivn6bpZ4azgzUKvcYwEMtFZDMiqd9BumNJHAauS6uXyNEfHabLWrqpg6HtcLqRyutJMdMUBZ8KTdfB4fm6uQ",
  "key25": "D5h627ty24WPXJ2DVCtt4kM9ncqjywigHaBCYsTpLRbhnFq85hDZvaWnXqCDnCKPHwA5cHEXrk6mUgQahoiVbjr",
  "key26": "4acTxWJ7fhGjEkozVoYE2DuawhvvzevF4miZ6KN5MWL6gwBsHBfAEgsRGjX9ndBSexjAJSKDDyogsjcaTrhhz44N",
  "key27": "5xPkEXJTEFC22bLw1kDozSZ7dmsBkqpHYA1oQJHjN98MdEbm2Ar9ErKhiY24CZFtojoyAGdG4ApoMMbJC5e8yQZb",
  "key28": "2zKzJtWnMDAGQGDC8HwXG3ysCEdGExHfQCGokhUSDWr2mmQ7ZfgoNb1g3cPHniuiq5tFAL23iFnt9utmhypv3eLM",
  "key29": "3g74QyDD46CdLMWAUaSnamoXg2Rm23u9DC1RaEfFbY5yNDCDofCVXRStBmj1uNZub5giRhdqUrphC9JXehgVB5ej",
  "key30": "58atcfXEeijPPmKFGQq6JEde2D2FnR2HW8rj1gDH6jDQBKQRLCAWnqgZhUXqMtQ9mt8oyRHaESJAqUGmiDa5HYgh",
  "key31": "2NXsuL3Phr3XrUXkXHCM4RFKgnR9EmMfDe8Gd2SbHSphsamWcJbbFrTQi8iHj31MX2YCZFThd7LdMNWRtM4Mvqxz",
  "key32": "3UDwr4MnE45LZPnGaGpVNdemDwB7MgP8jgYKkDhUp3G4gADXnz2JoDu7EjB5zxp21KT4D7rPJMnjnEhdMSnBJV4b",
  "key33": "5rxwYetxPgqp9HsjubwxqpnM9ETPDVsuiqznGn26P5twxpCgvprTkvKxFey2VuBm88X5oJXBVGZRrLVmcBZ763GY",
  "key34": "5Wi2PB8YF2jvuDQSY3jDWt6NZkLXmtHUSUvscrnE6yC8Q2rqzbEB8hBn3zquXt3TjyX7JeQVee8KkNqKYN7pwPU3",
  "key35": "yLnkHQzz1FXNAZcsY99wMeLe7FEVQJ4C1bDrSdTNmQtXEFGrv5GabTfyS2WXSRuEwa27YJeiNaShPYtYtYTdXWg",
  "key36": "4smfRFuadH6fdNCJRsE2QrEPEdtiCj9TRjurQUi673zWBGwedn7JLtETzgWwQSa8Egdb6LstQXSAqR7wzkR3KLMo",
  "key37": "2mM2w7Bh5YzDhkS1Rj3F4UApKfyWErvYYmemu7VT4TPwQxwtZmpwKpHTES9Kuh4fjM6jQDKFf4n9p8s73V2Zku3k",
  "key38": "46MToEhuiPU7Wh1dTFYBH5YydjW4KVR3AhJNwTTatVYQzrnkCD8MYk3bc1yKYofngWbMEyKmPsjZfiwiCZ1SoXoy",
  "key39": "FeJVWLdsMCL7bVuVAQaNPLnkSxiPdBVwmRsXW5QuowECzAJbZmqX1oe4CvuuHeuHBDE7U5n4VNSF5aZyJDKyNHg",
  "key40": "5mZpBHMtftKieGg76i3tXsQvPGUGxg956qw2xDz28mdgZufjbnaVRyoXxVx6PuAWevBniwvHZVnGLHF9ZpFiVPKA",
  "key41": "nuYXEB29edkHSgHCR8J8hc5XTrELhJ8VqESd9Xf8XyAfaycoF6jxqivUU5fKH3dFiTNahGZEpabpPpJBrrzbG5A",
  "key42": "5JpaGfyz1Cytb2kfjGDHCVsVu59JCPR8K6irAZmVDTeN75jAzAnoVW1C4zM5m4mdhEnhtSSsb5AcCRtjjj3kzjXe",
  "key43": "1Fyz7dox5RNUhb5q2E5fZkwcGyDiompmRBf9NWUH5zTYrnqDbUcELMtbKZTphnnKZGFzHJUke6yY2CLrd7xBNaT",
  "key44": "czbmLSSqXKqi8xFUAnpLZ8gigKbDKBfaJ2hCjDuGaEKQe3UBGHhhgUrARofrWWjywLM2yGsTrCe3NLQ5sAKQHNi",
  "key45": "vqKRYNBRYGDmkPkBBQLHAVCb8kBVHjQLPdYaX2q4R3fwS3JYtKeWKmuRVBjCovxmZ9CxUThMNRHVD1PpmwNfq6j",
  "key46": "TjeV6KNMySgVfCjUub8jZhb9rsxMj7MuzebnfLTHeKDNJpMqsmyGZcHAE8UH7LgB36jXxKdCZXs83owQku24Rr6"
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
