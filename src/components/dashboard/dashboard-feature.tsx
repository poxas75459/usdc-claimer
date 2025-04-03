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
    "4KhzEZeczkoixBNa8cNhPhkxHChvyKBrCtc2U4f3Eh8SrhX3Eqi2MVpoYBbz36gJPPrGfGefCckH9gzzadyXZ9Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PX77DPX5ZzTwC7e9noJrjmh6CxpeC8SFVm7wW1tVWrzK58NydQUL1iVtKxNNef554CzeZgHLirweikR4T7Mbaup",
  "key1": "2Be9mNWNHLLwA2jzpc3dJqVmjcYwL4S58DXej2KDG3pNJSFSEdDD3QRFh8wXe84h7AQEMktwkgTMP7xYLSsN3Yp8",
  "key2": "4r4YZQ3ttKpKF3MVapY7xSV1TV9XLJUdnJ56zouef672JmhRi8ftrWohjq5LicFqw1ay6nZwKnsC97K5wT3C12VX",
  "key3": "5qm1mkYpGDm85gPG6aE1fGrWL9ARTNC2Eveg9YdbzG9j17TBobpmc3Yqy4Pd4zaU67yX82zhtwCRFu4UYYWSaSYh",
  "key4": "HGKrB7JGReS4MrPQrbWNW3N6imekGhArRoSHj6JHyBytKR5Lcvzkt1FbL4HpD6fH7wXWbxgEDbG6CP8RPHkaGtW",
  "key5": "46KEiDXos3W3xm28E7jdHPfXm9KdrBKA8cB2LNV6kw5tT5dsPkL1ezhu6pHL3tDW6K6kDwcnzbS5JPos5wLSEGVT",
  "key6": "ykpXSg9NoV5yZi9hL3F39uKCrKF7g3YQXckUZdjgkdFuq7RSyMuk68WqHyy21rse3x9kiMZH86CxgSZEnD8T2ry",
  "key7": "mKbygZ4azBujepCeQjBrZaCC1gaXqLRX9FZQ34AnKUh5isrnFV1bPMbhMrjPYjyiYdsDN6JRFkqe9cEH2FoasH2",
  "key8": "49mv5s7iNZPhHBLGjZzw3Mc19Hf8yHLrfYXpq8N1eTeDPX4nqTLF1ejSADh8nD4xoiYrFbjJVgZ4Li91iV9tY4T4",
  "key9": "4kgsSdzCZM8m5ieyqYLR36XChwzPdTEfaeoLVP2fSrjvJkrt5TeiuKtKjztcgM2TJS8N38Ttsy1CPjwawFYnTHiD",
  "key10": "499RqfY9PLZWyQBZf3nUgnxD8eTDgWxs8Ynku2YLeJmViVadmGn8DPH9dLnmDygubFBr4iqVMoodwLpN6BZ6K5Me",
  "key11": "5sraqu7nFyyChXvpiqwmGMXU5KmaK2BfBfmvxtxjKdaWToBp6FUKFwSvwFqU8vPB1sqcdR8Se4uHaYR3bpHeWQ8B",
  "key12": "2RbbrGDv3Dm7cQsYnu5TWY7voeC5K8Yca3VwGkDuKpqcwuEfBKfihKJpbfkySzt61zyedcMrFT6fDPUVyqYyd1uT",
  "key13": "4cGvHuWEE6ACPKzJMBHzQfvhPytBVVB6pffbdH8dHRgY6QnyRxLZ1jsJPLfLrfaeCUh2wLtvkA2mvfo2oUTWg6Af",
  "key14": "2ia8JkTBcpPHSQm25N8q4EzNHx7jESTdnfpTFv7XkQWAcu19dzEaWVBfbf2ea9ucU9J1rfgEPh9kNaLEfhiY5d2e",
  "key15": "2vzAvx8pC3LBHFGy1jJPRyJjEuLWj8Xqaatg8Fy5GFUvM9mNJsd7s7dhbyjinoCRNmvxwpfSmhiLRpWpXysMxc9",
  "key16": "621f61mesNh325iJKnK4csQvPyXoTbKYq2DkS4CmF2zqpPVWoywRuuNjfn9stCD35KFGRAv7uRCed2zEEc4L9XQh",
  "key17": "4DBKptCgtmCuYDFhVXcQkihDb9mCZZEZCs5yKYcXg3fcfi5cKZo3gLTs5GucAskTEoX262L937z313EnUxswkbSB",
  "key18": "25kEH4hvtDFMmSuJSV2LRHSxvpDt1EtDARUBnFaYdt6gCdDt2oPkTUo7qGxznXNJwSqBC8duCQMcSc3zrkMzztR6",
  "key19": "3YDb61uoFxWDWRp25JPuNMs2v49Qm2WirZP64V38v8B4bGmgoAozZtGyHd7jjUVDtmFekxaDJDheAbYfLTJD9v9g",
  "key20": "2YcYszZGmUMdpjj1UjBcu22w2gQ53m3yF6v2ZHxputdasD8bE7FDZqC316sLwPMWYypPL3Z9kjq1J3x9essQdmwN",
  "key21": "5CzwcrmZGVeXg3X8Rkx5aagGANbhiGrgG2aCTTAp928g9Tja7zxL34GLbygpDutT5GK22qGYhw3w4vRJJJ3SGPiv",
  "key22": "4xKRSqECnUTtMGtD8SSykyHLQWX8TJ3jf9ZDbohoetmCn2ydLaaUWFZtfip8STTPRyP9fRrns2uC8qQ5NdJmFjPi",
  "key23": "4J8YP2kZJicdXyky69XE9KpLkBY3aZqd6xhq28y1BEZb9qA4nKrGud667LGzmhrGUH6FW11GG47yzUCt8Yk47awg",
  "key24": "4VvgJ35cNkj6jazVqc5rMvv7XbCcWkEiyvUhK44LmnanhSW8RoTiFy3Kt5NT23bi3qUV5CUQ8ZT6s2dYws43Pip8",
  "key25": "3EuCLPiGqjJKuTrfL2nr5NAtgasjpecdzYpAmGpDVTiCS4k3gsDaEZdW1fMAqffaR3qrRP4XVoTSYoQGn8PGPzHn",
  "key26": "4UhkSFxyzcvnPtPDHggVpZ3ErPJqtBbE6WxDTzfwmKVK1G3yqUnhSAhjU7bMCtLQz7ZNHWPJgqYdPXCc41SQmejG",
  "key27": "3vaHgdGYhMUCFeskkxsjZURBEjRDRL7fb7yVs5Yzrum8pCCTZatVEdWbnJn5QD1zMdzQFAuV6iqwddpJBErdNxCG",
  "key28": "5H6nXwQNBJeov4hMKDo8qLJC978nHnhR1iXmippSboPwWo3AH6Cn4yRX3eHJWbHtTmXW9m2XCKjmxz69rFCdke6L",
  "key29": "4kGs3rghNg8ApUPKuGW4jVxLdJ8K3fjKXmJkWx17uojq3eKveVwV5ofxhjay4JqhfrGf76W995qrHbzCyZrSy413",
  "key30": "4xcFQhtKfDJ5yrSL1WY6TuXtXafgZKh98Dp2vfkffhGCUMCCv6ogmsFXmp6aqCRiw4s78UwTVjKXxunZDwoPFmoV",
  "key31": "2Uatg182MNNFfhm74tGk5VJnmXHDd8PiFwYXXPewshdEw3qgUwd5TxTr5ChieCrAa565fY6e2UrPUL5xskttS5qS",
  "key32": "4LGsSymezPEaa92qoQwvYNcAEaauLjZGZBHQttLx7X8zXZumkjVT4tTckEHfFRQ53piVJAAgMGev2Rq7WBiZwahW",
  "key33": "5sNkqEWrSXWsMqCg7b1dS7qpbir5SQCe6nprkzFAW6fYocjCghAGXUroffvz668tys6VwXrZpVMeDFEtpUrbbZ8q",
  "key34": "2tuc6vdjefzr5XBmB3ij5rGGLTBjRdA1WHh78ihmJyPZRVkJKASQrHnk3LJXZgb6pkRRXbNSmcYBAx2B8zGc6QCJ",
  "key35": "EVDMgupXh8331nofnHXmRuBu4dTbHmJJUmWLPVo2YGu3CHFbUVMgLDxhijb7a9vwa1odmjbgEdMAJVfTUiHACX7",
  "key36": "85bjKSxJHex2Ef14pzxHE6S78KKUStKq3a4kGnTruVGozpAL4ds7WoAAbuvPN3y9xPmtsewvrRN2FGDA3QYJHhH",
  "key37": "2VUCE5JKo69T6AB6w2PL98iS28gSh7tbz6sAYYVsgPAjp651KE89PyP8zcpJquNSfkC5dpyjGLWYGpq2mMv6yDxX",
  "key38": "3wJDgqV3eGFo5JfFsy5U21U2P6AyxoyERKeFzZtvurtvfmeAk37PzqGLX3Jo2D7sAcfrVQkSc4LEtM59no1dTVcb",
  "key39": "2vPvS2KKqrmBThXrPw7k6o8aKdyGHJyDjofydNpn421BCtUFaZe5F2uC67Sy1GUvFxk3AF9rj5iqr8sWJuDWk3VV",
  "key40": "2ZchbrhyLnzkYzokZtXH471G6X9d3A1uZYBTY9Rswyn91UctGAC4aw4BLKxFnNt1MRAfRUV8CzyRvkDNsNwyFLuT",
  "key41": "2LvHUDaRxV39df8447Pgv7ZoVvTKqVvahaEcCET8KSQJSzNhQiULaPtXh1JwfcaNLnsxiePg1wHLy5WG4RL91AYt"
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
