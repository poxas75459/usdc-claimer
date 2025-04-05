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
    "4XgyrpqrBfLBCFzGsogXqenDhbs67tb8SdsSyrghs3aPXEgZKwojZajBUvJ3DGE8eB1MqJpzdQb78BtXT8g4pfQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLBLCNAFccJCv1xUVVVBV3izw472U5H8jHTytDT6myFXPzzvfyesrxqg5cwiyECYv9LxMCusvL4q27x83QcPmXo",
  "key1": "42heDsJKbR1PbHNnXYKnDLxtZ5kjqnriKqmB9gvUUaSwUrXnbjBfGwqsqsDNdvWRT7hUup2PuFoggtCSB9id21Er",
  "key2": "5TWUTiW9b7i8J7wVEVqfUc1Ley8UgPLVE5WfCC8yLBPMeV3eYhqDEwka8pLwdetfWsLSNBHMTmJa5czi3RXRncDG",
  "key3": "4JUuJrH8XfuWFp2DNcRLv2SujbitbU4mesUbsh4iV3DtSg4qSSXFSEfGto8NVtMUpRgKBLZFB1era9QstKDUGDAt",
  "key4": "5rnT3bESt4Rw74S1WizqpYah9GfTazxkmFyyXojEUGoWF255ExoePDGciMq11vmHA8c8ULrHtKfV6Vg3QBN7SmZH",
  "key5": "3NZsPPpAx6Fx14DWJvWtXhPiafUKNbAFzefDewUbGGWEKdU67RedXW7nkDx9YyS3z6s6ZhSfbQr4cwjxidQ9o2Kb",
  "key6": "2DjT5JMqfzvoWr2QSfsKXGBwuCtEdNRK4hXkwj7RLFD6hG36fGahAr3Hp3wsSo7HvcQo2A5E4aqX2qUiwFddqnra",
  "key7": "4shMWyPGYZCsNdaoqVuiapSrpR2b2E92WTwMkYNEuNUAFLd2cAW3ozyWhZoHfobXpFsLahG7HDRe524UWexU5YGN",
  "key8": "2LpphY6nZHBn4Gy4UTsHk1XrW7nn2oSfVCEXfEA7vgRYfeYfSXi58Fader27H4AGZMNdvyTC2AdvTSC5uvkBPy3j",
  "key9": "4oFkhXBmuJ4WHZmv9MwTUvsZUccaYpMwqsh1UGKrqZrviu4bdWZvP4LGuWT8c8PNX3rex4dAUKMVab2MeZWr8V1M",
  "key10": "5KB7wj5WePgRLc2nzUEUnXSXkDhzJt89w7uzhEWvfN9bxnRXeQgMixD4MNNL7ZMEx797vVD9RaP5htZ9kvHRbm5u",
  "key11": "3qVF5GTrGz7trAa4PBZMm3kzZsprb3Hdxq9QFRKFbjqf6TQKirsXZNpmf2JedTzN4yrkGuYSkXVfRYVxgHis8QgL",
  "key12": "3nFNUhjFuQqEio6XdSUJiKuc6HyW2V2U7jcT9MiaZVHt2y9dLXC9xncmcRRZgBJg6LLzYmLsbTbzc7oE1JFuRMHU",
  "key13": "2bvYdRUHEPooaWsaeXzLLogjYkYawX8EEtWYEL5fxvTC7QbaeHnoCCm9StRz7yjsJ8596CMdkvAmQhvvpxRmkj6v",
  "key14": "63GcWTkshCoFi1hKZLiZzjNxrDGC6EqgnSzJMQ4HMUGWSoDYUXKSEZZR41quhaarGjumV59BnVEjXdUU83VQvwBo",
  "key15": "4HcPFS5mdvFSDU3YaUsL8r6RJBu6vSxfj9cB88GYMNQtceG7L7eBbhPg26uZPrY87zqQ44iqx4fYBd3Ejk6vBZLe",
  "key16": "3yuetiS4oaDVMCmrJgM7cTSyq89CQGxc4PumtWfq5JUeoavmTGXDKYMztLVW4pefb74nhqSCZoV3647rSZ7M5gVU",
  "key17": "5iaUbSvQ7rPxdKGCbbHRividC83Nyh9xwnFd9cr93DRoKQ2G9LcZiZuURoDvso7afpyegvDCy1dKyBR313UfQQD5",
  "key18": "aw32PYmCC3wa97eP72umC9kSGifP6ymsByhhkpNdsMMM9eX2s9LR5sGYdXxaMk3Ufmb8ahkYxjfLg1HvqrZrm1N",
  "key19": "27mBWucUR47BCJit5Trzs51vhFzR7wVmS6L3eM56LL3mD68DtJw52zy9dQdbnUyKqEbVtBoLvqDXCHKrt7U84z6j",
  "key20": "s9NLVqUqBjjW2ET9wGohyk8dMB36FTRGH3oLwfYHYKGrwGb87kVxZtJVziWhA8rJhkj3RReW88UhmQZFecUqqjw",
  "key21": "5VMJHhNmq3hP4Y9293o9ZKLvma7BxSNnw42CufSHmt9Yebvm2NUd32MF7BzbLhpWEv2YWVpXxAXmdheGQJZrDp1h",
  "key22": "3xMfczBXLbRQ7pNkk33JkXE2szduZhsNfYk3iDg2ssJs8FaHJuUD346KWH1R4amFk2rYtuhpyoPMzLKu5LgsUu8A",
  "key23": "3R5kXGhdGFjkHtpm7x6bmXtTY3nVrzsHRdKmeZUwnhhAPYVDCvNvUnYo6vRNiDSBAHf8n2MhTpoumqqwvuJNJ7Gp",
  "key24": "2r1Cw1srb3Mv6rv3STBg6nkVfrX7S4vAsMih3A6RVCnhnpdyPKPnZfsMrsyvCeFszekJZJLftYhKR8Vn2pPK4HWv",
  "key25": "4jtWGG1PNp1Rs7AhubDBLVv5Wm3WtXUH3RMvB3CfsDtFs4jwXKR7MpRuitqsHH9jjFBZy6mgrzvAViU9V81XCyr3",
  "key26": "44oX5Er51kgVUDDAoh3BovCNFMMxmVf6EUiGr2NE9RsWuN2DjVp6MdSrfTFFP9YiVKxGRiGLpUyKpZgxP1wiVdRY",
  "key27": "2Y6m7NWa6vH9D8xY1xgdzmNhHeytXaeKWsJRHCmf5tX75L8KE5EgoDjBZJBPtqxTQTTY7MNcvsBaNgoQriYAm3qR",
  "key28": "4Eb5nZUkckz4GDT3gaVuAfhAH8Bz366VgYpWDrtnwTs4S2APWnUN2vU9xQCsiZxvGNeUjAfFKcbzETDXKPzifhmu",
  "key29": "2uGjg4fosxHfuNwRFQx7a2hbfFiaANDSeebxCcoYiVugX771Mos3yi1nkEmTxfDp92hP3vTRfCqnJMyshLQLmqr8",
  "key30": "3wwmpswtobvDRVMWFq3qPMPuVLKio7TNTMR8phz5efnsaUrhU9tX8GNtSMVCk1WdPpWPgybL18bBz9bjN4rYH9U6",
  "key31": "4kAkWXkKMbCiBk7uNfYj64TFVJ77cy2yDszeGU1ug76ZgLJTG8CV9EMyfrnWPZ5z4U1qFXhtU9DhKKu7xejamUJK",
  "key32": "3ejVJNNMi3uWHdTUgfJWG6Pz84QCznyoum5Ff3P7U8YqKAcG8E2NHvya2CEMi4f7qrBFNC2VAyyxpYfvBbkEZjSc",
  "key33": "Cxwx45Uzq7FFwcRquHCMGPQKr6EnxNT3hV14noVDZvHoL6hozbAvErkNmFxXHJLHBMeMcdP1V26PM7dXU6YDXzy",
  "key34": "3mH7aEDsbUZ8RggSN9oBTdnzJLF4anLmrJKfvWsZsy7GqCpRrto3VfrUuAgN6iKBEJFy1LCkkMRBWAfGLXiumX6S",
  "key35": "Ky7SAozHoVR3uEd4ABnfr7BB2VNkoJUKSKJQaBEcxCuLE3yRFBJT7FLhhrujZBSL6CQtnCrzkCNdKadyQovLV3B",
  "key36": "4SGzbpciHg8yRinJUr9PKTWf3KsV37u2M4Sotj5bb4u9bJPH4fn7rrBqmvEFUDg3LgHKNjJLf9obbjRcCA7YhUEr",
  "key37": "2pfMHPTujLz9SJg3ms9pG4GrP5tVZhrLYE86hzBWVMMzY6W697GndpPibbvbqugQK74kGWnZYn59X9jd2nhLSVow",
  "key38": "5JMF9XNaCZMPvseAZw5eACmkLUenSYzEJqoVrnE26s7piBGjewBGopp8GBauqMiSZnShQyPjNQ9zyj4ZuB5obVec",
  "key39": "4HDjzkjbM2xbgT1vVQwf54BumTeaVjNnRDjLMX5xXKREJuprA5HnpkSdNgogWFhNM3FJmLdqZ8q3bcmLycSSWtoX",
  "key40": "3CftnVHQ4CjjTg254XRqkDnUvwucYE2DwiVH17LMnoAXBrgELWsWo8XH44UQPgcoEkTDbmnkPYSmEcQzju6XB8o7",
  "key41": "UWAEnb6e5Pw4ourHH7MuoX7hBren1JWpC8Y4K7AraQs6YpgZSPWrZM83RbmtN14xeTiYYHSC6TZ6cZd227bSKD5",
  "key42": "3tCCwFkzcpuFNekMZTiotpHcapEKUNekKxZgPT6AVAQSCPqrsD7tHZTk4hU94i2KdReUEscM2e6UCe5Vgvk25Wzf"
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
