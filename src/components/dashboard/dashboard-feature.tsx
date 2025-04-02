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
    "5RrDKXzPVy2Zs4tzeik5acq8BxwbGohpVAkHJpXbZURPgfnZkTCeCEBiY7gqVgpADPGJ9nyYqKP8RWszp92UYss5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L18L1EuGktYBdUC9tmSauJfseCfzBWawFvFnK6PC6zKkL2qrAuJS89Mw2ieLr84H7yj7YCzKcK7Hw6mVzggEg5K",
  "key1": "3crY6R4ikzmhPuC2qzavF9ED47V69JQjs2kms3fGDrwgzGejhmZDr3XWDAncNCcWLmLWAQwn2EwjcovJtSr9qC8s",
  "key2": "3ymfnrp4aVZx3U5QNKrGn47vdyNmgxz1py3zkdS7qrdWmu6XRLWC7cRBcgjSQiTvoduBPzzctxkoNDMFeQ5czPzJ",
  "key3": "49NVwKpfPFzdVTUutFpsLtn7r9YFh1aSJZ59vJq1HcUUgfmx91fPJ8NFZR6E1NZcfXeuemqe1NRkSAsiup8o88fo",
  "key4": "3v8BrRibGJ4H2bEDVEAZLDXsETxyfqHL6iAmffjWHCj5G85Snrgbnwbih9nE22TzJXuFVAtzuXrUYVUdDct6Kqqy",
  "key5": "AcWMRf2qtPHVTyAsxaAQznZe4tiwrAVEfJuaRcTPZmGcyUdsFcgC9qrxXd7bHBwN8F2KhgCWGmBUAQBWi94goEW",
  "key6": "cR1ii9J657a2A9QomtjfFa67w1DL6HoW2NUHZS8puRMaRVVnd4Q7ZkfhTdUTSwazzrSeNCpmfZagxQuzSAjGYnk",
  "key7": "4UjDxuwE4zFN82X741FQ6CW2gSgVUuLFpfVDtvQt1rJECTRL6iu8XFL5QibosoAmFDkPG719aBqoENtmDjsey7gM",
  "key8": "2DcqaHvw6LmYuqaMJRRUfiapXSEUaNjMbJ4qsNGYhete7oUg7uPArWrqzmrH8Dhe7L6crdKDYkigRaXDTAQhALv",
  "key9": "3uu66MkTZYF1okKVj9GM6P3KvMjxNuY5k5erkFemtX6Q76B91JwEav2122Ed8MDiT5pnNdnJ6RttPKW494nMAHwZ",
  "key10": "33dRFg6kVyH9ftopDyNHY4bfj6pfzmF8nLounbuA4g2Bcua8oAZST7sZC2upygmLTQesrTAxaoSQvowSgfKte7ii",
  "key11": "37fuKyebBxr8Gn7NetZEj3bRhzFjRfpHLkz52qipXg7kVMvh1pW9AuSjHz7ZPRnWDEJSYinRSJbDESavVtfw38cj",
  "key12": "7YJrtrK2ZWpa39E9vqdHQZkMJf5iM1br2NjLnaQ3bwHtpGvtgUje74wqiBwR118PXBCcv3tYkLebakwaGxk5ZLR",
  "key13": "3G1aeQ6NCS6Qb6NnmaLhzSaEgYPDMLSpkrE3Z5YoS7bbdrecBwDXovurLYaAutw4NbVrLfVAPTtvbGBDd6yB7qFP",
  "key14": "4wfLBr4fF2VP7bPst265EKFhNMotmtJfiY6imCa9p89Gu997Z2WRSoXerUNr6gYFh8UkUN4smj9s7N9nd27cWDC8",
  "key15": "5FinKw6Tf4HMeKmj5HzXF3KtCPiaY853ZLsdqf7XNofKgXAZz3KT1WkywuRVYobCzEV3KjwhwMykNv9ksFu9zSuR",
  "key16": "3E3AQ2XYZoejv5eqiGLypAyt3mBhtzWsGph4wnV98iNTKjspLDQ7Vp5XbGhbxe5D3cNPGWQ9VzYLAcpDFbbwStyf",
  "key17": "5XF3FrLf3KcsAK1Y5zcrh4FpT1cymEBxPow3aXEWS9fH1ptrwZLJssBUcJgwnA7PzNShHKXwSRUPtCWGZP5YtTtM",
  "key18": "4NSWxvVjA6ad3JQ3yLDfMd2Sn5gJC8fUQqWXhBk95eiDE5ZQpaiRHPV4vmFi1dpvQpeGvYcF5TH73oDLsbDJkkXd",
  "key19": "4C8EjaRNmJfUUvMK1dThdignhTeB8nTSFNLW5Veh3wR99iAcjC57iUVsdtoSpYvDxhkU4APUGTAyTW39Bg4TPMUr",
  "key20": "4pRj1poxk7H4iAt2n4ASf1z3ydJqjCGoYSfAQdC2A6YUL8mam8m3HhGA2UyPhPTiveEPdrvahMxEaunD2UfW86bq",
  "key21": "2Tjo7uAjNdDuo54YUhxcYiFEVeCo3dB1cvobU5qxvH5VxEdb4ASnBP7BWcwTztn4gPpNu9FttioVn3vxPsC2Ek8C",
  "key22": "4g3Sy5dHkZYtuu2M4y8BNSkwrzGdvY5ZfgsGtfx4HqPCCx6yoRaDWGLBFpww7EmE35zDLNQpMYtq3gUJ3TnnQWeW",
  "key23": "2AZvLdHkRCYjfdHB2qwGeou3eqmNsJ3gWRwyKmWLjmzYVUNEijvSiduxtfFpiHrj3avi1HDnEw2qZ2ctFD3jfTyd",
  "key24": "2HMyX9tUNF32vh1MfKoDgYYY6LGUwwA6VUYNuCY3Pvp6xwPXtJpJeJpfsbYshRA99GUUYJFQCHtyfxYV3cjHfrpy",
  "key25": "4ezQpfb9TZdX15TNwC4aj7cvsQZVJ2FNYKBcihyMt9JRZ7dKaSNe68ReELBxPD2PopNUAWFU4fo4sXoXDHXa9S4F",
  "key26": "3DMxDXYZeSTTwpjbKnk99aGd2HAxtsfEkUgEB5mRS6J6jTN6MVMeohiw3QLw5pUAyscWhrWFamrN5Gry4E6gxjLx",
  "key27": "5baJxA6saSXy8koKcbJNmQ1AJwWrSopoSxXLCKVh4EYdQTBCcXAkyCgp1GFQ73KEKLBXqPYDKvHQyUEzezvY7x2e",
  "key28": "2Ppme2hvG4gpiTN66KBhKaYAdPvH5JSZM1zVQkfKQ2jmLsK7JHfuqguFq62WSkhoRiBQjoHC8AGsZ6smDDfiUmqA",
  "key29": "u4yHrihoaTn66w4zikcbLMgd2WzPbxq6zaaqv9Yp148qP5SUGgHXD98KTE5ikd8thF2mojRAeFfby9hjKvmGZft",
  "key30": "46cTE6VKMEneCUuboP4iSPDhGRXpUmNMUGcXQy5Gbm9jhhj9Gk9BUBFJ3CSEXtnWzBVDGYskYTt7aUkwQU3CFodz",
  "key31": "q9XGmdduWe4nAn8pNQ5RAmPckj6QEYfW9FGj3kpE8uW73r9x6MGZGiibEvA6p8q6pd7TcR27bvsEUUJFCqs1kzF",
  "key32": "3f4nDjX1bqbAcTYjVJUJ9N4feMts3yinFJo3dwnv4DtVQvXWLX7BytEjP1ZifnsVBthU3x7Hzpv7936v4VDgjqHi",
  "key33": "DNQJpnzPkgVbLWDARZRnWpA61yGyuL2RZyAr3iQpGPz7ysMV4WHu542bCC7fYdVHb9ejQwW3MqhG1TuG2VZ2Vix",
  "key34": "4TVsfZik2WcXsHxrZicdakaKWNZjighMeffCxM15hkpKLgG1r9qgp5hMaZohTRJ5Pg3tdC6nGRj81ZLZh8oiGwGY",
  "key35": "5Z72JN9YCD1sQbvsntm413u1i7mM8Mmu7UewLjbJthCbtPz7K83T7Hu5vcScmLxqhJGgpGCKtkH4HMBVJ1bbxgSW",
  "key36": "oo4s3av39edpvFjdF7ps2uJrXvT4qiAthSHicdW79paPG27zxSvTSbqDj65FQfRParx3yRZ1pm8PVbcbhqkTWfS",
  "key37": "B2TFkTFHdYGtzbVTnCYMx94ymGAKjixJ8ZapKFmuNJfNPnjZqvgSmnFuSkJBA8mDLVyqUW4Xv12KLims5m6w68P",
  "key38": "5H3koGDc7xYu7FciNUkXGDbgoHEQ7wP1wjo81APehaTSFoUfETwQmRHyimvgyXuAxqF2L2vnwX6Kpo7UbxbAQmWT",
  "key39": "322oFqUiP51CaJhMroe6821Pz4YHedMbvQgCwf649AsHpz3RzTz7bv8g4rPJKFPH3ZY5vESmPCoUsvCyMaXCzpJi",
  "key40": "58pLnScg7PmJB9VvXNL4bRQqXVH4JqRG92XauAaQ8EArFwxYtP1CtWd5SoHMtWhZcRCXG1YEyXSoFUSnAznXRNRs",
  "key41": "HU745a2ECyBejuto2T6be1vqfZry3ZxKzZk3875P9TExQiBELYAynJxGShyuxAoBTgNYGZrgDjr2xcTKp5cygj2",
  "key42": "2koruo2mUFy8oueyRdRBcDNbTomvVuT1otj5i8AmUktFzHqdpVKsYtiFGZmrLSDe7vXkj1c7EoaPypxBvnwiRFEE",
  "key43": "3dkmBwTvdhSdnPDxJWZ86q6GSxVowP9XFFsKf1HydcanxrsacZAB5tu9mqjRwXnxmygwSHk8aVqyfDMUGoBkCV5B",
  "key44": "3rkP2EGoXdQwaB3s3D6sJs6y76ropiVw5HVWS2kxLPDLW5nksZuAj77mmtNWQyLH4CwfiobgmvzmyBsZ9n1Fz3Ba",
  "key45": "2k6FCGEyoc8rMGdJefqpJamiV8MfS7h5JtS5s5z12BmvhWP9XNwCEKie7swXrgqUr96GzcM9Vaoq45n41jJQLXs3"
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
