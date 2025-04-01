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
    "4KFuCuz1WcrWAR4NXHWDnYHHdy71WV6EjwBtLuryTeWnyCvfzPULNRJhU5ViZ9hnNWu1QzK5PcLme9CrWsZXhXwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKH9qJ92bX6NpVSmiSTJ8NrebPzpaRvVP8PbyETyngE1oakyqk5cfNTHFoxoVAXXbhzQk6bkMtAzmc7Ghz19ru4",
  "key1": "27Dc9qKsw1au2UCEJKVi9S4ZaEcrJVQVpk4hzrxg7DmE9TcvxXkVvuz9ENxCK1cCEZr7qUEG4U8K8eAtY57X468h",
  "key2": "5qXYGqvvRDhm7wwcVtNurRszQRedxncoUZpnCYqWE8yDGXh5rJUozvbyaLNKhdHRbdvJbREvPZehdC1zX94iUa4b",
  "key3": "4XzGZ94sxQ7HnEnNgsbnsvUCnnJYjdgcgvDVHH9uEgvEqyoMYAQdCJiQeGQuNcVM3qdTKJ3a3VbmBDX53SvkkZ8V",
  "key4": "aZoffsGdjJQdY5EDKc9jzeDxmMk68r3y6pXvvSthZAq55ZEGUFFTgV52EQHCgUaxrQLqH3655xRXBQepGxCxvU3",
  "key5": "3dU4e3T1RAu1bwqGyKdVPacVUXQjbwTVcVBFsSJDuhucUp7JEBefu1efXfYnGdxmwRBLUjS3knVLQRCbS2a24q8",
  "key6": "41osJMPNfCaHqPbiFnJQ18KunJGikQ8TQTkv78FideificcfD32ERUfNuvtVW8J6C1ZTy1DYd6LNUijbh8hnjkqq",
  "key7": "4SvVdEoff8ykXUfSiDMCNnVXvt95go64XkV2Ge2CA59DpS2q6v5acWpkfr9jWsJ64zMCbYRBcrTWFvCgtcc8YC2B",
  "key8": "4V58AwPoHP29zQkvVReDXDjArJjr52NNFhcdAhYQ6qioQijP3gToY8yGJg2FXz9DmY96djdULmGYHUqpzksnyx2Q",
  "key9": "dN2wbt2qJnVreynN47foyH79zJqB7WXvhtHyiqujHWLwwVxZARFHzNT4Hawx7u1rXvSz2sNMMgVxTmBa33f26dg",
  "key10": "hc9vvunnwZZ1xXrDUddXUMEPptigmYth2M1T2hPBNrT8RaQuUAHMuzw1kdqSydnCAnUcLeZPFxHiGXLrcXneG7i",
  "key11": "o6XoA7XncJEFUiS6GzE9dEySKyu6gA2pB6nH8UTteW2hnSaz6nE6fHNZUNdrBfBZoaeRcgpDE5JhmLx5vHvVfcj",
  "key12": "3JvaUEwdWHnBh82FSY1UqJte87tMvTt1exASzrhSoBEnpxtckxkMFJRYmCbBBafhAT7p5rny3VgKN5Ydkfb4aspz",
  "key13": "4zjKTEdkQPR5bLA9Mjau6vXCrQYj7N9ppSqhMVqoQaB6dhgFYnCHhcVhqtyxjmveDdRacdJocWJmwm9GsRZEL7G1",
  "key14": "3JNuumUDamDxRULfkpobGfz4o5D9MMBLP74NiietvfjVNaAfV48RQW8uajiHn15MdTv9yPPfbnvhdyb6yxRSGL61",
  "key15": "4B7AD3ZfNGCGJ67sMiEvN2nXjqoP9vMQHQL4EDzBA1Bm655u7a1c8kXrXDhfh4N88SuWTs84iyWTaHBpV9k83Lpy",
  "key16": "3srGQruWpdikyYyEDz4PWyz87osAWL2NcHXotQAhHZyHL8qG9nJFxFrd5k4ESpzC9r69qv3QeVaZQj23zEwwoRBY",
  "key17": "4smqmBZX8LEmweGC34ve2tGpznbjiZDWCBE31LzbaKTVdwJuagXWtAiQrgyXjEj8D9Lq722pH6cPmssaCL6gmQaS",
  "key18": "5h2kUy4FijZMhrR96JfPLXoxeRNs19Cr2g5CDfSTNjtVqHfLLJapvbTGJQdkKnsasWwBxuXykfPgForTyZDYfwaz",
  "key19": "41Y8Er8uZHypnR4zjFHvVycPamMD91Exu3zfhBN1QvKNumVEBDvqkwLHnhTFysYLy3YtYMfSJGaA1RRGz1uaXqd",
  "key20": "4ar8PEjqhwR47WAzcYZsDwPkwP2wEkJ6aYBsJx7jR2MtYVQt7tPUkcN19TNijarC4oSu3bFP3wpafUVhwj7EAXR4",
  "key21": "nbMn6TpB58RatNoKo156dxQktZ3tuiN2oef8SeuCmfjFJEyGnaxE84MV82waTe7U4KyXbfu3WwBMX58KHVEYf9W",
  "key22": "4h6grwThGsEZdexeNthJxkS2vRffDqkZisc5oKXzSeeB3uMmjjz84KKZSZDUZGV6fb7ZXH7TA8dcPJav4ZvP22HQ",
  "key23": "3LVJPH191x15rU5mGou5VLnm2665Dp8X8ejFjqvtn7R5kBhfGNXxJyiqn8Gywv356jsuxr3Ptb2RNhaWvwx1tC5n",
  "key24": "4bnj47jbHxkMdhTJxTDHQbsDcczdFxYPeoYtjvpLvFk7e95kAutMrU1RaYG85EqmcZDzY6c8cPNbUm8cNpZfeCmv",
  "key25": "xjDoDGnjTXFUA1AVWFvNf9Ygweva3qK6srRV56GHouYZKqwDSA9isnfj5FEVU4u6SBjHiLhzxzYbuv3XcaD4Ysc",
  "key26": "4rRoJ7KrHX5oG1Axc3tZVSXJDh7HFtdFB9gbyKYgxmuUwaSepQKm8QW9sE1M8Thr8EVFBpJDQnAZujk8rtpCv3c9",
  "key27": "y83EnemYxUhpJS1VMZNQ3GD4Gm9LPWfQvBxedt4H9zAtMp3fpfJa3gLinAw8NVYs8poP77UtemdsyQNjvbLNkQA",
  "key28": "4vCRbibFz36JJ6basi934VNaS2DFKztFhTWStufEuLQoKVpcSsMfi7gpH9YNa7ZSW6r1SVQrr1YtEekd9formVKb",
  "key29": "2QY194di8S7wxfEy2J4ECsacEykEadgq3wQke1VCKRyUY6ZomhxB3xdLQMkc3CYyt4heyrcnuU9Kkc1Jqmt4Px9j",
  "key30": "4uMkA3992NADeHPNM2hzTD5eFroun9YdrTAZZ3rbLgkKprtyp2FUbQApXs2t7x6mXP7itzUVXTWiU35ubBYRU9ZE",
  "key31": "58kDHS1sY4TNM77PshZm1nymjL8hMCvQHnwPdzUGEURbnWB6CpZvB3RzUbDPJnfzk7q5tYJ1dKrj4FVoSGVPimVQ",
  "key32": "3woRMrBSAgtxuT78hkapFQ8PxmD2J9Hj9yBCoe6AmEPooKpiXNjWLXD7Hfr4zTxUqsvGbGm4LkMpnxeBLVbMwMzq",
  "key33": "5htAj7iPNUBm1fXttc3zeRgRfLWQihXqntEsAb73EjEcfBD4KTweD7wLapc7LzNatnUKDpGh4oWjpfEdi6x2SThu",
  "key34": "2hsssdciu47t87UsUqxUyTz1Crku67q4GEuH9zjZeBEHfyNPzy6LZTuLenNXYv8atYAGVLuu8HFQ4ivBpsqSEouQ",
  "key35": "8wpA2Zrxn79hvRVkHv1tEHSJJJvw7Qfw1pdPLC19xU8yJJxefZQQYAn8fr2J9uvb8nSwRLKDcdvebTgjEdAyJ2Z",
  "key36": "fZ8RvAk76g8qWYPH7x5cWT82isnHcQ7sCSnz4qX3PN4sAc2qd3kDgb3nJELybXZWkXADgSQJcxNfVA89ZzvWpEC",
  "key37": "57rCcMAYG2wJtyyzytpF1vWaq967ETxHvLF7SBLyAjjanWWxyJEBTeHkFLZUtaj8mtCr5c3gZNHy2oetjSfya3MT",
  "key38": "J4B29FrQ3yr6BruA4T7BezRGqq1hhK8T9f7F2G2EJ4fShTJb3MPXNUGCS1yR1fZoGZRtcPr2q56Ry9Gp5qG9Abz",
  "key39": "3dV7XgqrGVEPGW8S59Y9f9eDir8jFpvD2HjHXPjokAofamtENffN7Mf4uYyJmNCQ5TqdEf6ZaSCkjKryKakxq1Yr",
  "key40": "313qrH1N2txUB9WzzAmvtLnUK6Sj9ZtpWzxdF6FojvDm7g33rda3PVW86jHHt46mgazGBipCsZ27s2kgG42aA7HR",
  "key41": "JhU3XreEFPNPTvzT5ZaeVVH9LFH93WF9LirQJyHJkdQg7i8ssrR9992wS7eqrkgxaXosdBNH32mhK8Y4eqSxY4S",
  "key42": "4m9hJQB9QvN7LJZBSQcNoEk22VBvbpzYnWoy4PYMDRQaEz4jRGaPZ1v3oiFVwYbp5nPhA43Fof1BmuyBHFr63cxP",
  "key43": "5LNSgk2PXMEA5FyKbSSXseybFAA11UKoyysSntx6tztQKdufpsgVa8qsoVasTeQAvm4F2TkV5Czp2MskmLg59oNX",
  "key44": "2daeEYNfcBZ1vLUhyGa2nhBCmcZKDt6p338swMRermfDkvD8X8jpoAVLJCUE7Ufb2a1PYnduqexCJiXEcpGwhgjY",
  "key45": "4FsG3gHvR7nTZVE2x12y8UEygmuc68etxh6JPFSqts92bxwCEAcbbYiBLjWZqT2YDyscGgtN7fJze2i67T1zq9uQ",
  "key46": "4V6ZEq3mTX3wDH73sioCyzkvxhMsktqXSsm5hYGNZq2g9RfvJKEW7YJJMVEjvwafFQRadFh7pHhGxxkxNqCnqhX2",
  "key47": "3gopSmw9RAS3bwQwehzi2fD4oQc6u6rsn66hdazVZJJgmSLzozTonrBYrHCHMa852AX7H6GaFkCgghr4ZUNZjZyL"
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
