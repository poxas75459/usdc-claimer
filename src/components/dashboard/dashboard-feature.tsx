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
    "2JvVixMqpJieTBaP7wrK26cKBwxNXbHj4V9vZwfBAMz2feoQyz7VNEiYvSdt7xmS15cVvz8s8D4S7f2ziPd2871x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpyA1PiEP9dziP1vVtXxmBo6FtxrzrBoN7K9DWVf22GiJ9KMG9ZCoihLArYGyLPQd5EUo4r9oGFWEPjWhVUFaLg",
  "key1": "3qmtiZXCAkcNrnBUbSBtidPrx8uan1ki362BVeXxsR9ygWTD3eQhMRp8CiLhhaLiTcoij8uVBUZ7QVM8V9xTebrf",
  "key2": "2iTerQuJnBweLemNU8MiawQqr6b5G3rkUQoeMD7LYdmJYSUDPVxjLA5j2a7edrSHjD4V9zQMZyWHtzkEJUYqLAMw",
  "key3": "27h533bkBTtXyT3TB6szKP75AvuAFbz6SDeTV4yA43ZRcx7NAjcu1orpU5BWDMoX117H15mqXqBDwE2ukDT2hswf",
  "key4": "2AR91786MdL4fnTaTghuw5i1MDMd2Kd53tsKkPDn29ZstYStDeCdtGNrFf6Mnw36k7xv5xVAQRFYRDmeaMZ3kV6W",
  "key5": "43jrbyRBmdQVPGS4Uwd2DGzH1KJTJEKLGciQyJjnQGqRypv53X4GjxrsvZynuQiQMz6qVzbpVMtuV9RvqMkwFoeF",
  "key6": "2i8REhutRyqq2mXA5UMQZThdTm9VFtES83U3uvVAa5dE5STuw7BJcMbtp8wkhsYCz81tpXyYscJFC38UiaGSXekE",
  "key7": "XZNgMwSC3achvKVCdBygBGophsLdctDmodHKdgrjjRMktziRzaWp4E38wR9q4XY2CYTswAsHgB1NDETd3mKBwV2",
  "key8": "2eC35wuVtvdoDnqjKdcv7B8PnJynap6UxGNu5YFHKSjWoatwR7vpyPW3YRrzVCQNztWPEHqtP3HbAoEFqD2BhwhC",
  "key9": "eeVD3risNkoUp95rrys1q21NJEtqS9FernXqjBDqbgF2WV7BL4NVC3rdynexZ5icBzCVYfkSsW5UKKMVT8pAHC4",
  "key10": "Ft2nmxAVjBqH1GSLSTTuLTSKrjqoTkjYAFicRM3X3SZXRkNbhRFSXmwMHyPdj8LmnSEpuoyPmduYZvnDt5adACt",
  "key11": "5Yx6rJoxHa4xLx39Cj1vfSzWLxTF7GMfPW2p5e3ZhmKMH3G1pQJw2HH9RqC8ixCyW3aXJhcyJ2omVSBkNa3BvumG",
  "key12": "3Qykni5A5yzh4FKqAXWxGCb5WzR1QRrFVEWWvSoE1Dvyt13ucspdYVg3tumQhShic6YZY5NSPjpbH2GoAcx1dsBh",
  "key13": "4gN9ddFpaXrecHSoD9FxopbMFq7nVXV4KgRaYy7Aabr3pa9UmfCHuTHBdcKsMXuNdLYBYKvenSo5viWT8wwwcQVJ",
  "key14": "jrs1xSG3uPVJBrbp5jAFg4TGeU1UxGQRQcXAdjZumR9HZcxmfJoJZrtYHSzrC41zGFTdLNP5kMteyDMhCTwSpuz",
  "key15": "2n5QAYqP7tX38XxYgfmkooWaKc4qEYWQWk7KuYVf1Rr41cona718G5Dp2XbhSEX1XZ98HCsmF4Fefr6gyhi3evcc",
  "key16": "xCzJf4ERbA3tCc6hkFz35dSoZfDD1E7KvevCfrZjuGVzNcu2Gh6gSFBBo86vQpxz39tTRdk11kxcgBXwJGB4hnm",
  "key17": "22TxarCrYSDrM26StfwpiGPmo7mi1GpUS2yGXmXVkxFzvECBqzCzVZtphRwULBG8ohx2hgPem6KHt1LJukiq3L8f",
  "key18": "32t3SGqRoQYtsAXYKzoRMHSGKCwm82VPvndqdcCKxJMsoJ4anzATo9WVGCNnu6iBn89DfugSq5CVTwNw2dn3bjXq",
  "key19": "4QSzSaETE1fNp8AWfLeLmtWjpmutCfk3C7P9GpRKDFY91CpJ1BvjgmdUKHQ9ExKGhZRsdUFkn52tqVP4hX8yr9L8",
  "key20": "3ScywB3VdEsFBAJovjgHnykJ6nseMHZyn64sgG5FRRmd4P6q8TP79XMrsAgXay45pN8GSXSQCi5WLMxsrFPbG9JB",
  "key21": "2pqr2kjvZMcVdSfKWfreXXhSEydTDVt1qzzE6kuz4VgsnW6tZ4AsytT4j1wR1aePnSoC51BPQaxP9MChHQxpyhH4",
  "key22": "4MRXk37QZhnryZMy2aTu3Kf56dVyubraQrYqLXXB4HsY9WQPq9D8iJxK7BiXsmjZGHnxTPKRcFmKwVuZk4tMFkHS",
  "key23": "eDYwzW6Fb8UzGhEDntdGDPaTd9Hdt8hCgssBfjT2sDKLWP1gCjNgqpRHnfNUPtYRUA1Yzy3jRd4EupDjGNSJ4Fk",
  "key24": "5tuacfNiCRvbZuzef8eQf6AEFnucAWLsojNMm5bNVZ51tQbYDpXB8BBTQEn9eccBG131YUhSm1hfoGjV2XvvSxKW",
  "key25": "359kfTYRVPSEJbQ15JWk7qbVwKYCVDhgAsbPBFEqdY181yZK8SMmrGhzWdEriHPGwSyKt8DJga8ZjhmQnS9KHry9",
  "key26": "5RBWGfNPHnqUegoHrnPJ7PRWrAUwu8zWvETXpxJ56ukJ81XCuzBoe1MXBMWbHPfx4GQDMoUnoB9a9y2aAqcNHhXY",
  "key27": "4Yb7DXhLh91HaVkzmzXP38of6uZBX9XtMiMyAT78fquYkPmeSHZACrEzFgEfTLPSUGrAG7FdhfCsnqKG5rBEPTyZ",
  "key28": "3AvJ5HLRzVRQVXWA9XRAGsq32uJKJfcnBEZ6hiEhTokNDA5ovUwB1yjdo24Y6NaP42yeLawyCFQu5hM7PYEF2Mqn",
  "key29": "5tERu7rwBLH42Hq4Tzw6YNUTXvQMLMgFoEsHxGXBFaefsFcqPtMgUiYMf4B1iDFFJVDhT8WK3nmF7HgpraF6EHR1",
  "key30": "4t2Si7EzTyAbJaVcR5cV316NVHoq3QmhXUH37GnYqE3wQB16Hniy5SDC4mMaXqNfJMfBL9UGQm1CQqcj3fHsNGER",
  "key31": "4jLQ4Py9DYk1ZPmuMwgCs2whVh5ReW2L5G1JMdrjP9YYngGeR6AKTZ8Rc1jyZ7tYAiZGJ7vxjiGd6smz5p4z5dCz",
  "key32": "4wK6siPy9GwdceV5QgTu6q3RXQ2bMVBpx2hrrNy2M1XqKA2oYPzCAE6oQpEXsuMzJYGKGtcFSpXT9c2znyozShsY",
  "key33": "59tYH57oUy7uQgFxPJdw4qNmrzps3vAPESHCLopdz9JQe7355npvUdVf6FmZrg94QLzEg4hoCVyVvxhCZsucPqdw",
  "key34": "2mfDBV1H8Wc8B6Yv7oYKqLcM3MZ72sfbxWMkiHmeSbNwtQjY2pFs1LpCgVgBCRBZeK1bgGY4mSYQXfxmMHEiX52q",
  "key35": "3dWw1FQGaN86inuamvPtPj2Pp9Vp5adf44jycTVbX5zncotWyaoZwa3t3mJVHsAWYKP5Y9dG4k6xBfRcVxr2GdbM",
  "key36": "aTjskmPb44aTuFPMioaYfn95f6AyAZvFAbyrJ1PMShpZqTQEjJX98JjmSmjAsVEMT84BTHBxytvtYEr1RV9vj89",
  "key37": "EgSYTgFTDCBLUJpbG32qA6tK6C2XBMyzXo5FgvW3BzZBoAxaEY7c5RGqaAcLG7TNJQLV4RBwcbiSTiXUe8VBdtm",
  "key38": "5ejsRv4kP473ENPT63vfWsqJDk6qDe41SPYVpxhXcdz4JZW6j6fxo6XC3Awi6VLsajrCdpKKJAKcdxerX8LqLMp7"
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
