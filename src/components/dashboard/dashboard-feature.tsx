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
    "45iRBVNhfx3o1hJgWie65PUdR3oxmTUyw9UcWTdyzJZhH47XQQhsEhVDmJkkiiyJSDvzBRmFrWido9eV81xrmNrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yd9euAH9dRrNcyW7fjS7qPoojFbrD4oUzYiG8MfWmBgRB4ahhZRUQGTkaCRbquanpUL4nuqrQsQFPtAoq3Cqxgz",
  "key1": "5K9oJXjAi2qcVUCvPNHCXPLGL578tqLhMG5cWiWaeLNL2etur6TpFpJatArdRGms6padf9rCujyXnG5tRaasNHFr",
  "key2": "2qc5CCUyaZh87JGLWP8Kw2VxY3bd1Vz4nXcRca3m3bSDVAmSptA4aeCNTBqPyYkhWMsQn1VGoBv5kN9rfEKYVGTB",
  "key3": "2p1PSG5rXpc8nc7yvbh8AKgzFR43Sp52fxT7cKnqaBpPErsVs3XRNRxJaeq6iQ28hvZf15vYWo18UcWWNUr1Kcvp",
  "key4": "4YJfAzP618KCcqqAqqNWzVaXJhrNMq6a1akgc8sU7Wj4R43zHmCsrRPpEaGWx31Y6RpUhM2whwH2FM8ot8DKrWLG",
  "key5": "2q9JxntQfh1bx9aGc4teREn9tneKoKNuQ4vXS5TQDeWEJAbGJrzcckVJPqnKPa21Thk14X9E7GZPVeZ6BQzgHqMn",
  "key6": "4PZcynwGwNqhFwTKqedCqiV5FUcu1yESjLynTb77buZBEYTRbBi8Wvx7x56bYsPKT63fz8Rpui79d2mZwjEyDKUG",
  "key7": "2VvjW8u1jS74QZsTVroPdHb1PCLmp8PnR1vviDYqdxhLAfzcfHPgW1mkgcwvjDwUkNncc2D64iuD6n5q8X9K1WTC",
  "key8": "4LSz8kKDU6WhXURsmkViuhCabQvqGwN7svVcUzdjAeg5tRhRNE3xPmmjAYds2AgbJ5MCCuquQbm2XYSsMnEufFTa",
  "key9": "MjicBqbvAHaiSVxigunWusNjqjFE3N7hAz9copGNPNass9o5mfKvhNNz7VgMJmmXAbexawu6QAsE9hCJcjcrnVq",
  "key10": "3sCje3YDSVFNLG4o1YtWDfS53sreoiKTPMPrN6r8ykmzXQwCwdH5LMRdNfAdQjWw75DH8VKV5BnFNVyxPfpq3KRA",
  "key11": "4MpUMynBZvxn1D7G52cX6ZyKpok5vuWmjCsaFZTp3GF4UQgunynM6VVY2zjxB6PRF9diLMaPUVAVb5zqmkci7N7b",
  "key12": "2MfoooRXfe7AwadgdQtrfBfzd875eLRfVvdogwbZYjnKodHeyUWcwiV41PZtF9mLFbsEUQ7NvURshFPecYBZntYU",
  "key13": "3Wwwbr7jHuRMhVzHD6kx8cy6ZWZ6e6fQfiThZ8mCSEcZn69AqouTU9gk3Hx4pTDWRbXR42Caw1dxniysPNfAwUNJ",
  "key14": "4iq2eVVNFuMnGCTe826cUeJMrzPucu2F1cgtxKHPaWrCY4tpPNhAn1weV8b7mV5wRRkqJ9C62f3YCdk43gEfCmWa",
  "key15": "2g4EdFnVWEnktMAgXvf6izwKc2FW6wthJqkQSmzHCwc3JuGwVDPnB1qJAQg6djybkaSJxjAXkpTiDv8n4GgofpER",
  "key16": "54toBNaeHTGquXtApnD8AzbnLkY2S5Ld5mXLd3yfT5VveFnifVqajUrK5CgK3oaMYMYBfjZFCeHTn1ZB8F4UxU3n",
  "key17": "4j1swUr9BnqvTh56xr6czX6dgNAqApWwapnXXM1rNE9PjRx7ECWEjwvRTcmrV3er77w9a1EDPmN7m7MUJXNb3FzP",
  "key18": "5tDPXeydZjgnGsfWyL5NBZCfie4ZzpePQqHK7KYZfwUVoXmoQhqEFDqwxDdSmWfTBG1WbrTmyCtFSYPQoBgbHHcn",
  "key19": "4HdLUEY6a2mCHpPVmjoYZztchLYxMsq1epDw53AUY2xRADgdMbyR9HAWrJshwFnPZkkaoHwsKMHUQm27EdiR7je2",
  "key20": "5oR7RWiadsp5ANyhuBqEmHKznrffHG6WUCry1uhi8exhLZWgKbvEEsRrapmikAj6CGbgorUttyAGcckVx5A5bfqb",
  "key21": "2TXnqZrARtoa43hunqDGg38U9cJPqepXRm8umDcxwtMmVXdD8Sp2Qqc1sd1jkmgQqrC6uUgNo4GDWjBenbV2mdgh",
  "key22": "g9T4dR3LKJ4xm4ee6GBE6Cc17ZbvpEP8nAwYubbdmpG2myenbTssQU3TLBrVzQf6qRQ6HDmNRBBBq5niZTEZd8Y",
  "key23": "55EQqQprZgDZ7ULEUCPHcDun9HqyEzdTvKhK8oUmwD3czcxmjRLP4tt3ZoHezNm84A8QJGYcF568fQtFeBnEygg1",
  "key24": "5MAGfjHc9iZ591xWvBY3SsDi5fvworgZTK7ALwRafhXG9TzwgYt9VUJqW2iMdqPtuFrZmyW9ovSHNgR2LK3TesBQ",
  "key25": "4vMvz6dNKfXXPQYnxqk2u5rTawiupqKQxf9XPQcWu9L3KcJEFVZjvJPNLqAZRKDVHjWjthtGuS8b31G7hqWFUQmf",
  "key26": "3epmVvbBtwA3fFisL8cFz9UADWZkeFLSocCGDmKMWbJkiZ2csRft6bo94xfc5NVbsLQ35X2EJj5KCiHAFExp3hmU",
  "key27": "2J8h8T1WktEPv1Z4z8Guz27HPxYxoR5Y2wzK7LStAZtrK6i2PnVGLTEkXuNXPPqcrvm5p4TzNmz9EAHFooXpmnb2",
  "key28": "CYpTT5cBEAHAtWAMUFmpxMRp3AAMpg42vVDkWUTsusDwVGNpVSYTThYMCiebKMnXXDTup2u2VcuetX7nksjsF1G",
  "key29": "2Cf7aiMKFVhTVsQMLLALbJ4ouJkEqrQfQzcz23Jb4ia2UJ7YuYZEtqaSeuYbLoFjzmH1WxuRtju96bdt7nF4SUTA",
  "key30": "tjXXUVKpiNSriJ6kUsLCswNvaxHCN7PEQX9Pz9tmd6yLTF32FPoshme8uNvw39DxgmoRFA4nXEY6ZbjqsaEzYNw",
  "key31": "4AjJbmxovqiSB6kwoo6FDWttHky1UN1Z6sGESnYqCFjF6TaJHsKyCxxJD1cezHpXci15Y8QEFbyDbxfuuawEjuhw",
  "key32": "4ddvK2Z933SUp4CAWWAyeeiSHtKuo8a4CiV19uM8FqrHLRUN1wmdCn6CXSQGJMFJXc7oBgtEBRzd6iu4xCnFWE72"
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
