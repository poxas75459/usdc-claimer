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
    "4Wa2jJuVb9Ss9meUpVpEwHC6ebPQUiUtkjFe9vKt6vmcdenqQR1FYBipH9RxRSQZpYxpQqUVf8y8Te6H6KjqCmS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XjYRarLotDF4m6uhNC4mZjDtjkHQ2jnU1Z9kXskBKy6qSn7H1bK5ZNDhcAMHJ3y4ai4Wxrgn2GcnY5y8t1V6XNW",
  "key1": "5PdnUELFPypb1VvBAy35RDECVT5vDd7jBzspbRkVnRK6aPbY4GfoaLEVJoRUs98YSiHvikW6Q5AUorKiZ8rj51x6",
  "key2": "5Uvh3cMLJgdB3zZTunjTU3Cf9ybSCwvuEMfAso8fiAh58Rm7zKngk98TUwvBpHmD3Nx4EfpYWXJvM28TVEYTCsm4",
  "key3": "3y7bWiFeamXjXrK471wEzqZLTjFrGst8YEfMa7v83Yu8paDewZCt2aNtZuiAJEkJZvJiiQDAwVhfKTocN8EoAAa2",
  "key4": "9FxLcTLJAcCqZFWJX2yzkKEZLBBc8E1xeYFaHNm2Spz4HeyL2UrEsf65Nva3EUasuPw4kmkwbnM6CM8x1T3virG",
  "key5": "5wR3irZZLDuSNn39h9XtgFFHjxomEVeTRL4JhC1sYo2ZmvSpitafHY5641KDjzJ3DjPwicGbvFREEHVbs4cGbzY7",
  "key6": "3WvK3RJBrWTjqhMgSbVDGQj7mMpkoEVvGuxiqgCygQDbCD1y55ohvQrHF16QzPSdhvYXfAPFUA6so8Xj7vCpr21f",
  "key7": "64CmqUWorrXi288G91EMgipN5inm8gkhsscf8N7SL2FYbCPYLpNXsXpaV1C5TgfaGZtCuFzfyNEhMfdevBspe9n1",
  "key8": "3SDeGy97thJAUVsNY87b7NZxaUzxto3EuuGsQkyVuTYDMxLZvBuWBrh9mTZK3Zt5eBDA62LSQVisCJ6RPwMnbL1U",
  "key9": "3hJV3UMKB4vS4DMGgmZXTZeGjbTK2GuNijpnkmwMdGc5bg3rs58gkGaDpnS8axHivRyZtyADFeUeaXxrR1fWoWLq",
  "key10": "5soecjgVZ1fPUQCpnntNb3x8W6pETCh952t2g2Q9TToKiiAKsdnCMNjPCWQDv7iwU6GebfP7cnEcTbZtGo84mhbr",
  "key11": "4NEAAuFuqLdV2gR7iPDh2xSMKCmZAtWu9oUfZoa6XV7hPzyLKBfLrCAmj5cgJyqhGgKh7pCmvuJNVHiD4ozq6tww",
  "key12": "43ZQHtizx6PGKZz37powtNF4iJALonPm2AzuLB5qpz8DrVHmGwkcze4xsQhQrUHcToobWst9RFLhQiAUeEsi6p26",
  "key13": "2GYuZnoM4pDiZDDxHuZch85nYJjVxz9LoVWgfR2DSpvZVZRUvzkiUKPJoUT4fYoD2UKLMfB6Rb9P3rM15mGg112A",
  "key14": "zTAxsLihcBYzY7D5g7SM9XSQYKA1hjyGwLb75n6niB8RJfA1Dtdf58NYNW64QkUYWL4kTnG8XPKyQ6ceFShtXVb",
  "key15": "4H3hoKvCUPzeKx2e9oUZKwDhE6YUsAqax1Mo7sNGifLtFNMVmLDj94vkq5LwW1gg54aZ5eixJoFuEUwqA8MUBVnt",
  "key16": "5eVK2ofH9xZS26YinXPjTEMBtUBSjrjvAXYuEN3dELxTFWQNoF2mnrTbfZ5bL1aThZQJm3DLWa7ZeRCzcYiq3xPh",
  "key17": "y6mGgqeqDAoUehjxpnPbsZ24u78DE3c4GgwXFe54frgmkTKnbUpoLNxMJ1qjoSRGJG5BPg5x3gbpSLajwxR3pcg",
  "key18": "uiGZVip7UHrthnbvrWajpdcVoGMMc5ovJX75tt34AxnCZbstcGHg1gahCygkKU1R9nCYNU2968PWpCkoLXhcM8e",
  "key19": "2T99vstiw8jHwTAVxEScPi94aWy8AqJobrLw1UK21vqexDwHMUKdqV3RZCpwLiNxhdYy9x6cHPuMstigdzq2pyKE",
  "key20": "XaCWw1h6jWw8z3Zzp45j8x6qdAuFfnD1YNyaTjGjxLbp6j2P5mz8E2XQi4kf2q1yMU3bQg1dC9wG6rYtr7x8gQN",
  "key21": "532XXbGwrv54ZynfAS8pf5REALdQdaap6QrCTAddfBZ4PE3g8sdPhr87rLKgoFu5d4mae1EDKZUjdvFG2zXGjiQ7",
  "key22": "5PL5cCrP7oTF4L1thVG9uBTeLuoReR2kVirh2KGqN9X7qirzx39xE9ALSmGa9kWger2vczWfyCof2oQVk9uQvciG",
  "key23": "5HoBBNNokBgE3F8SW24CSWUCxjjsDqDweqRCBV7DzUNoRXuANFwSh8YSHSLhfF5TLwiaVSnaJFXKa6hRii8o2j7p",
  "key24": "5zBAzAiMi3MixehdZfEkQfLjWwYZxYDoowq15C1PEFauMpqerZUN8HMrx4oaQq6bQgZHM96NJxNAfEuPB2wmsJQa",
  "key25": "2h8sTmV9BQeoUEVoNpG8eoEtDFenC5fHJKHWQbCBPwtCHVTmRs3Q9mNY8BBhpCZtDRcV43RKmxXggZLFBU3VzBFV",
  "key26": "3vjrQj3tfv4RC7zedHPTa5fV7JZEjaMpKoAg9kX1CJEC8mec6teFsgTGzaw2vqDiaDqz99HYj7N8GR5eQ1jMZC7a",
  "key27": "2iAe2JdJNiVVFiujrvH8GHr77agCU175cAY3Y8W46W7ENU8zYDtACvHHSPNSsenpYRr5PhX1oPxrN3FHEnxKqv5E",
  "key28": "4JK4VUueYWvdVeuXUigx78wU6GqAScs4JnMfNSeyoxeAkegVzYqPeWKwp7xnt1zJ9GyvU5M8MdNewPrDnP9TpoiQ",
  "key29": "4nSZkPxRmetYpQM4vcSe43f6Pwpxpi1ZYt1XjTHR48mzaJKv7yytRMUfqBex7GjhZDLEUrcyGc7h7frUqWH2WMMd",
  "key30": "2htmrHXAsWDF7Einf9qCjZkm14fMhbMn6KmTmd587rskN7T2fnefjMnbardgtCPqhMUQKFMBSVtYB34QvbrifreR",
  "key31": "4UD8GxL8XMyweWXZQhLik3f6Bggr4wFqA4Vur26xZUsCiRPfY57fjBh2L2u1scN8Vi3AMFghwzUG7L4hw4yycGnP",
  "key32": "3avzR5vDs6EWR5BHQ5nUTnupTY4PXuxAYrBXiEvmRWa65yy96EwGDKXL1NND68gPmDhwRDFkad8MgjtrPGS5sbp3",
  "key33": "3E6ntKZjcVyxPX7AyFWTJb94FJvAkqKnTJVSTAk5cG1h916f6BsoTJp3vcq4mUP5hia5axZXmc1nYz1H3UvTHC6o",
  "key34": "39VuThKoQHWoCCL6QS2F9VxBoXMKe35VY2riy6skhSwrZiZXU6V8rgsh3cDtp4MAx6vUhRKZRAGxxdjWvXW46ZLD",
  "key35": "5kwSUy2SyqRGWmEP1EZKg7PM9qisxDevvrbYYw1UrzturqbruWBPLqCsUn9PxXFriP8VSPDL48LJpMouZMgC64Zy",
  "key36": "38zwau8nR6VE9hDvT8aVFBY2s3eDJ4kpmBwNVS42s9WyQkanzD7KGz86mUPjd3mz5zuntNy9ESbUM7SFV8fmxyxJ",
  "key37": "5aZng5v4YMTNa4qZdqtM6DJNdRvkiWxKPXc5bf4YQgQLvhhkrkrmKNiEoSERMtHj96qihU3gEidwYkmrs6YHE4bL",
  "key38": "3Cwid5CLv7iDTJWbo3hSUs5brkbDLqHtvoJZvrKBWvtTok5xd89tXgxXBWFHMNMtJ8pNCC9LLRaceR2qMon8osXL",
  "key39": "4n6bzvcZqeZQ5ipLmG1M4LpFPqLJYy8nrL1J6DevWc9ipixipKPq3obtwHoEKTZnWG66fZ4YQG8okKTQqzHbRy1",
  "key40": "5RZN81xAvesGKBPAT2j69DBk3ME5rBEmL9KeYJpCZQPSBZPu33DobFTcjt4BDQytAVE33S4USKB9g3fSrBrfDenj",
  "key41": "FDzFejDZVMvdZ5JwFWxQf4E8NqTsaLAEL9P6iUUPZAZdoQ13VHxraqJWNaP1dStZYNjStBmNhiLqd6epYccQQW3",
  "key42": "3UyYpVdaNA8Qb1fJJnpNjH9ybam6JTejtaMGB2T525NLmbwT1DymzVs5HtdG7X6nVJjqDzNj6euyNTGiXs9iN5HV",
  "key43": "2ZkRFzV9dqh2UXTJ22fr8P8JvxCkvX3pzMaZ8QupNEh3o29coX2F4JLCEV95Qc8ie6SWSMFZ8W7Sk7w3oZEoVDBE",
  "key44": "CgAnKhkZZ4BXWYKjZTw7PuMrASqro2cMGgrrLwk8vA8jLqKUVCz5pAfy8WAEoppVmP6jVKjUQRZBHvPHQHsHWqR",
  "key45": "4CZPevtfzKzLS98L3EqBnB5K3A8fQkM88c5FFthnGHnhFawpRQNLzQtSeaYfMANMvX6Cen21ihpc8KMDYPxb95jZ",
  "key46": "25sT8DH19T18y3XMJo1YJnq4ebwsaRP4FhTDtcJxXa31zkBNXJK5coL1APz3Q2P6LHCiHaKyVStkCqrezke5fkgj"
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
