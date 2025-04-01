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
    "ganJhXEKWJuzPbs61dcrdd9s5EQyYWzba6mGHsWcw5tz8drLnfuBovA98W4vHRHMGMzqNameLy1uD3BFPDg9j6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mvpRSHEcsCePneAX3cr4no6Zhys7jpNUCY3tD3AMx53Wzefmr6p5i34wiorv3bSC9eWsCnntuCV1rrHhLwbF89Q",
  "key1": "5wBsSJaLyyp8FKKLiZFmBnEphWxT5EDd4WWmxrWpyGjU7DRSPifD6nnAeKvSiUMExZecnmVXPAK8a7TzTg2ydbxj",
  "key2": "2VbfTQo2gkPo15FLHbXPGiN9GLh9srhmgSW1SHjxGRo4Q8cLgwDNFxABG2XYSmcUJAxxW4cUdisCFhCCR6bNr7py",
  "key3": "47tbygdvLhfCJDrgVYayKPHdXwsBzdZZsgKtQWJiRwLBUp6PoEu6JQpApBjwMgCzsDwz3b3D2YUUDRFu6uQYdBG8",
  "key4": "EHsW8Pg2yZyTc67kc48XRgfP7MZNU7kH5gNcALZMxmR83867eZmQt9b5ffECvUo3Hkom37sWCNgSwAdT3AwSSxn",
  "key5": "9bMdAwZJoJRGf3u8RwiG7CoJJJxTLtSeskZhBDk1AgN61AuseS9hhCGDVcA8wcvQvJ4QAjq8PSuHziMJkmWTH6g",
  "key6": "Pr6SFvA4eZbA2ipzLGqWZurN8RXx5xiiMHnpNVtGU1aZdv381Pqgn125aEA5XZabc6jGTnAAnBvay4gM3DTbjCx",
  "key7": "3RFg2nnME7FN6qcLVm2d3RBK6r2BKS3vkt48uYyW2AgJVPaCZu4YkWFSdRzwYDgsKqWsQEjVQi5MW8djADP2xzao",
  "key8": "nD1azqo63vt36viWeBMepVkWcBJQ6PkhGAuq1JYEWKqCfsxfkWnBbtkjf3UnihWTeAx5okXYXt8mvEG7XK2UuEm",
  "key9": "61bhCn1f43xnw3mPRtSN6w5VMHcF4Uzv9qNx79SM2yN1CLgiiYP1s7NCNtLjj4sLV5gdhaqB4rHgxF9bxidxHEFN",
  "key10": "3D7aNVKir2B5KTZAT7yvAUKeVkEnxqcyxVJn4YpqFjcC6GUh1vWE3ApPMvzf7EJckfyPRqr43Rc1qfCD2SohiNKU",
  "key11": "3Eob4z72rJjgb5pqxqNxF7ZzGwZPk7bW2d6rBsmjiux1BmdE2cJZBa7gXL1e6KF3n67RkcUHVnQKyPSwR5bQ1sdH",
  "key12": "2ZcDFGKu1SJ8RGgcUhQE4J75HFqgTRxqyheVmfcwFRstQcW9z8eYJA7MboM4AUU3wtJKpodBr91KvaGVAMnHfTh4",
  "key13": "2dqGzNMXVmikXn61WxvrN2QgQBUFbU5vduxiKMza5G1YV9NgbvdCaetCbqugniQ39PKiciqfXVgB9JWQmo4MDwE2",
  "key14": "3b1fpayUkVaUTCbamDAjC53pAjmnfiVA3Yf4VdEUzF1pYWrMBtpzTULsQwCXXvqK1nry59XcY98uWHUVHBp39hkU",
  "key15": "43GWWiDXw6xMMhEEUNiPi7MTMD2YgCtPMmiUdEqY18aHmpANeJ97mBwif8Zsjofa8bYLQmj4MMW9hppy8QUPxWDm",
  "key16": "5tWgtWzev2eejaADamof4TiojKHkiwwCqthcVk6U4ZaggxuZW5H2shKg76mfYPvS3JkDe6ohVNkAjJSGhaHaRenA",
  "key17": "mqZ3nL3agUJX82CvikN9VBpCkNRrBpSAog2YcarDNwsDpCyYhvzXPrXS3SWRdQg5GJiiiVvKYPW8QBksai2wy4M",
  "key18": "2ug2hh8ojGWue61cyhE9Re6dCJfL9vzkCD6oUqpdnGDrs7V2tmc7jWnsUwFJ1U7zZZetaA8UEdmcPpBXHU8XL4Wa",
  "key19": "yazXmusbRPYdo4pF8paFuJEFHhvKU23ajFi3Hajkcr2DFu95qn11o5nD7TmPHGxgNSuHSwTBombWLaKFnXroTGJ",
  "key20": "fVakJPp1MEcVFd2AgiRJjsKuFbSnSaS1QLjUq5416ZmSRa1dZni1fKjoToutJjBNAMjABqTYPsTukVg8R2x2Xks",
  "key21": "Xz4t6hyDTxxCGhdwjxrYxFokj2yezspHM9JHPqdp1cZNfUaZo3se4pATb8FUNJapWHcvYrrJK5YTYzqfsQ64whR",
  "key22": "K8ax1Crn69v2t8X339MgeU5ppuqWenH1Z5n9Mx8iPkMLV3VzDHUSKsBi22c4KqCCgrkJoB7vcaUc2k9yRPDaUUY",
  "key23": "4hHFXaikRS251Rm8F2o9XW8pitDsxwDdHHEvw3RPZ6JKaUM3hLay1bcYyB9BwqqJzSjRENhvWf6ihHZGHzxVE3zv",
  "key24": "vX8xZjpZQtnTwz8EzzjtY9nbeB1ijR7aGg4SzDWKie89wkAH3jLyr9ewRNGFrWjbx5YwGiJhPurrMZfJ8Q6ZuzB",
  "key25": "2TL36gxMKJEQ6BktjJC8pX8pZF9X1J9vTCBqXfHrh97UQUsmM72uWkwYL5NXbk2jMs6z27hdCbLX6ar1FaeKod4b",
  "key26": "3n5LFLF24Nt5EnCqEY4itDf9HXjV7wZvQCS8YxDVeNjKggMkkLiwwQVzw5DarCe3QdWVATDQSgxMBEXNGBU9JFoS",
  "key27": "5NVqS57aCaf6cccEZp4xcwQNqEfWaCQYPJGivCHVrVcUJ2VhxmRCJB3BLr6sNX8SBSU2pqJ4BZ6aLu2XCJ4Za2wP",
  "key28": "46WS2LfFD1xq1cH4kZCmpPav8rzThbQzk5LLbYjqSDPTACw1JNYhbPiMR2yeC5Kq8dnV8PjBGVgFouybmFhokBZd",
  "key29": "2YKmzSqnJqsjvKk4syxA7ieEH9dQyLhaZ8yfQxxjJuyiviK6En53dTYqC28DwVT5kj83pXVHXNyCFMWWfhx9rR2b",
  "key30": "3yrHmmXEyfLMHV3n16qKD1JhvMtvvEESFn8CofkDwUixNZmjwX3a36cMwf5n2YAFGfaqtwrYSrrcuoP64qne7V3o",
  "key31": "L1zPNsZJmALmv5zGYxgoycQdoRnqBsDZk457JBtFwN6PyToHXE2DN2Bv489MEeXbV3HFT9i52CP4KL8Jj49avsM"
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
