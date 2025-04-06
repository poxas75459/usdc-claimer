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
    "5wxbeUskSy5MviamDX9HMdmhrUmFZHWsVHrCVzc88WMSCuWuEuumqPfcj5DPyRA9MZGKNm2AvE6ws1qDfz8gWxHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFpEtAxVaZZ9LC2vW9VWaSH6u3igpisN1KjVqFmEtBGzjk2i7MnkfrTASHgn7a2eJsQUfhc8DF6my6K9iNkK5kb",
  "key1": "4Ajb721tRvm2oEdUEXNRWQ6zHJKEsjsfFkTaqVFGZUMEZqE5hkpTHkFt6gvPCAKX6ZAm9yzofsxbhd83xS95g7Ye",
  "key2": "3y8Uf4B3rz5yFdkBwPy8FYh4xWVo2Dvq4Pie845xZXErWViJoFSDduiqinQUu5aVAzVqqD3rojPxQJzQEDqtBMMh",
  "key3": "46nNsEQTuLcm8Nv6XUuBTU4u1PzNdUSCezVp8Bezmiv16rsAtqFKn3qYPM8DjQv11H4dLKQEELvv7WV1nYQhUnxQ",
  "key4": "s5fUEHj2WveBRhuRZVUArCXAqsaSS4WXybmk2YiaySbyR1C22sTfBpvXtpoWqmmaimd8cxRrUsmu5fzxJGg5oyw",
  "key5": "boEYdoPfKHPySXrUbFVH38p2A3ix1qk5GQEp9wCD6SkDFonsj94QRxAx5PiftNxJM2PphrKFr3rXEV2xMkPcT2A",
  "key6": "4H2SknYKMd9n5Uny1Bb6pHpqnMmpYtT5UoFu2U5euR4MnjLo4YrSFThQ5h6tAuNbtEfwsPRGukChjFAmuyx4xqXU",
  "key7": "4hwt86w6PetqZKY9nvJyWb27nFsQSGDKEKrDN4UKxpuWV63uPBKnp49BggDfu6LMZTYvpRvrjjrsqxZndobHCfgV",
  "key8": "gCsJ1mNUerSinwmAuc7d3GLUgVfESSZ1WFU55NFSAgrGvtu34JNcA2hQrzpza6BsqUdK16JuX8qpSi5a5tmVimH",
  "key9": "VrfLexdr16Jdkqe7yVQwCmmJoLvQV6ECBUJKifZTwkXmhpuuG1EPCRz9oEBMA9YJ6XEG3Xwft82XdMuzuu8dBk7",
  "key10": "53Dj7ADNdFW8JP4F8CvMk6Cs7vec6E3cjriyoz7W8DvVkRDFprWn6ezHKoHLB1eRpj4sDzcLC34TtViajz9RahSR",
  "key11": "Ddfc2a9Mi6G9XMWegXwfFuJnVwCZMwarP4Zk7syiZXv2e4NXPJS7U2rWRKeJSFbBHWv7q5JQY5qi3MHab8XMsCz",
  "key12": "48KGvb9s9aGKMKuEc3Cefhviga1ds8jZZjkjJb2LPvK4CPEea9DUqtnMErztJkb1TmzBsP8jiF8sunyjjdDCTyHk",
  "key13": "saMm7eEVSirpcg8KYG24GxYS8XtY6qsRLJaXczsznpx44DpqUeXpC7K9HsLy76W5nCkErfPotDTrSqp4XT3foLf",
  "key14": "5d8r4RpCEQkHU2K4CMFTcQo36pgQQTFwztvdQ1fC3gSezNbYZej5bpfJtRyvtXNqKSg7ZcYYvYva5XrvJTy9g8UT",
  "key15": "2DcEafDyEyrLsMQXuaA57Px6AFCUgCuZ7vbBNatvQri5DUg4qMY79Tr8CdD7AauCrqGiedVvtPVTJxTEdanfhMTi",
  "key16": "uTzni4WEzfJBAY4rtGuLHr5P7egRnSaajPFKuLj8SQ65dK2YdEz5V9HEVq4bkXdJ6mtQJzzxLxkeyveCB5pN2u7",
  "key17": "3BVVHH9SZxsENBy6dp3DwU1fUT3zTM4vsUDx9bGx1hQmec9cxttNUMCG23Z7NzWsthN9BX5dsx1V4Bu5LJTsEqz4",
  "key18": "YfZheaL6ZntAjMyc8iMRBdCB9APtwxP8oRnbsjpFEYt6QSpfK8bp8Vt1WhASQkKRArXVDHs79i6jPnoqFYLmPUt",
  "key19": "37VrnWT4kQZx2RLzBPEpNrA55RZGbcm1Hb26nWmw3FaNWr6pFRcsDmDfwo2sY2yh5jzV4wWaCfzZVFaZxyuxEh4H",
  "key20": "5wcnmnvTVwigAF29P9JuUZtRfpy5G9zG1Zk5V7YNGavPtJ57wNuAqNhuHF7sNapzuobwc9LrBDZ1792Vo1yXMM6x",
  "key21": "5Ho7qWkhgZP7nwjp8bV52aSjn8QBLVBvBLxNWy2wKsTmJ2Bs7FdYjZ242ViwEdxGnEFVtkqCGojsKH3QYWVnDbDS",
  "key22": "2VbauA82ttzjLe5WJW8SENNDargGf7SfMcs6Gf8rcnTKEkeku5V2ff8g9sfPxgdyDRN6hzdPGF1XYfUh8LeMqpA4",
  "key23": "5AyXtp2W3pyd2wvhfokNkbKf3nZvnvmM6gVNAHvjVrA4tJGZVRmYc5qekaGj76gLcAdmBbgAcg9fRpcnKaXwibGG",
  "key24": "5xvqvWHzrpwkzTaYeCNskG6HFvBpmgvKgXrxkRggMrHADxqjFsyPzCAdZdGuTiCv7N5BXZnLYi6yyVj9XRXH3bNG",
  "key25": "64rPvDNqivgU964QdbnadWQs71ofz7s1DWw7yiCBEcA2b6CpjZPjhE6yvzg76S24RbejAcmgNHNDXbG2HLWXuXd4",
  "key26": "3XEYDaXj8tSbtDVxhySxNnjSZYuWSEbkgzJ687FfjxWbodHFnKFj67RUtVoG78k1pfKPj8hK7sYftZTm4CijNfgy"
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
