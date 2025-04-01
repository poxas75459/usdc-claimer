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
    "wH1sPUpNoSWGDvsCs7355CDP8mVWErBJYjbbPrCKn24uokCuu7RpCDa8yQzog7eeaUepni3Vmkbq8EfiJdLub23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmPHS8coCjQtDo6sbedi8nNsURMmLduwHPbcPLqRNE8qQjURUKCLC3wyEHm4WcUQEzHQpHgDaRNBpD1mphQXPFe",
  "key1": "5HaPkoftFcv8XMrfsACLBPMi5TYhX8JQQibrN69mbkYBtDQFum2NZCkJpHepYAdxVY4qeGQj1GtZ9HLSboS3gVkR",
  "key2": "3Y2NbZB8SxpjvU2D1BQcgvKd6EfHEUkDhPtby73tqL1xrioP9utQ3Yh5yW6BzrFVRMbk6PNrsPShnXxs2Usc58QV",
  "key3": "4WnHnNZghciq2pXftS5zxzMnZUnV5EL8BMV3JPwmbzMah8kc5ZU3nFHD6Z2yWWEmFaYwwp3Gfvc6ghSBQFCjC9UQ",
  "key4": "BhUeX26q24QzKGdPhKZwAez8svb7vWiVUbmwrXkUEkRY8B2HWJtXvyXvczMoa9y5YnriWvf9ygw3S5FjB4jM5N1",
  "key5": "5CQZ6qkC7TKcDRvgTpKberVUoiHVkj4M6DZK1qCEA2d15TmmJMvi4btqKF5TRnZ1RVT1Sd8MwRvCFoSrxNsAV3Qg",
  "key6": "3P5i2Cdc3WKiBrL2Uby9n8WbMX42pL5kEdYMoLCBM7dvXQkahG3V7brUxG2WcVd3rgwws1YE3LSLUvJ7koE225ig",
  "key7": "5kUpFHqwt93yGBAUq7BnxHuf2fvQqb3hfCMReGK1pXdQMfiAjjMVthvHC2z3Nd9Ue7efwgepdpvGBRn38KQbonrq",
  "key8": "4rUb2it2wCpCWxH7M6PtwY2XdpeTYsja3FoLQ7oviFKiat6LF3omJ2SqHwkMj9GZCqH6fqNMiCgNuoEbnHaAkfR7",
  "key9": "5MpfUQvGUsMy1kFEYRRro5DaoccNeUGgieB5XHDjxPSPDdo42LNJnXe9kZP6fkv1tj6g8R9zRgQANC2kcAwGN2EW",
  "key10": "7YuFkVVJsWMRGJYySudWMw5XXxw9UNigqwdKmk8PmAAKjDE6vGyTZA3evNTRDA98LpVtW7kQFhVc3TLhZQEQVM2",
  "key11": "4QcBEQoT92krpZhtvkTz5PC1uw4gspqsnfjTcJS7WXAuuhZA4BFHGuwBF7bJYKEPNnkmBJkcyzx1yn7MfBeUmsMR",
  "key12": "2Edr2Yb7JDTZnW2sVMQ55bh3gXoUfxp1tMzpQAPqbhEfxSHDm3yqMbdFoUxgnGysyuDmsGTEMo1PZTK4qtjwPBNY",
  "key13": "2Q6dQsTkb8gC7M1c7MTDLTnNFWp7aFq2ZmDrzasncwZm7hyotRwotRRqQo7yaN1ZBvqvcVXKFW3BxeKTLV5ChxQ6",
  "key14": "3gC79JNAcRwpEseHUiKur2mLKmznotAWsmYyz2nx1qUwot6exwWxXGGyNZF5jCdiEadUoSJ9j2B1D4K7hy14vehb",
  "key15": "2pWFF94Dk8R7unPTXA5tVXhJDYfEMyKxvqdFRkg1sxxr7pXcAxM99VCTJwtQVUZKytXQLS2ZRoZmMLp63ahbHJS5",
  "key16": "5oKLyYVUbRGR4nnXoVozhysHJ5tKfqSGDTYJzxJZFZ4TC88Q5atFAyvwUxEoC8T5jsQj5rgukmBXwdoipACsBPEu",
  "key17": "AEvcCEBnZedHCJAuHd855CEzqGq17cfooJxLEtnFCoRsWeN7aXdBq8rGKNvfcetz7YCAaU4U32ngGyQQVtaYQRM",
  "key18": "3eKDoToceuxsCjvQ62sSYWCAEsL5DKRLdVJeHbj4Ka6c2oQ6e9Lcv72jd5YprhEq63DasHCmGJByDbY6iEXvEKkE",
  "key19": "4fdZ77eYDewdkkkhZvpQMhonMz18fREmShfqSF8ywr47AVWfhd5EWxURvmF4V6uuQLhGdNp1ZzWCFaeA5nZiZAPK",
  "key20": "4VQ7FLknVM55fnXmyYQXrSuSEGYFXTpNsgmTMUVx3Sa3sMen2FrMiBVxMnqujBjP15RHWmbdV59cmGKQktaCN3bK",
  "key21": "5F2HrzNXWmsRSVYyniAyYfyxyynkwSSGDWD1V8SSGcFMR2NqYmCWk3FYxGAhsfqHoh4h2YGRKdZYSid487cUNRMQ",
  "key22": "3FyLVYi8rVr7eHKafEonDBHJso4TYsFr3vDUzzcvQ2GwtcoRL53fgjv4E2dw3fX8Tz9kVrLQSuRffC9NaYLdcP22",
  "key23": "5gpirT9resHm6xGJXRTfm72yJsttiveyDNmCDxK5eJbDTZ6PJCLXcrJqm9QLA84wVrr6vznwpgtkaBbrAMqbzwhT",
  "key24": "PRArcD6bBsKE9bUdgUKR4uxKipy2MdHjon8xP3E8pnYjUuQdDxNHvZaMCSoNv9ADhZNsJU6DG5hi5QhFhCS4yzD",
  "key25": "2ug81RQYgG9KaKuBigHRygPid9sdZ7jaXfGDHgbqLJ7VGTEHwHF46bsbTfLGkhf53UkJoeYZf3qZ4SbgnbFPwRsA",
  "key26": "31349xsvtuh396arRZpHSXijeLi2nZKT3WCQCFS8raStqE29S1iwjkPCNMTGJ24vmKhsjPJNy1Jh98HJex3Cv5a6",
  "key27": "46ekJMbrX5GdVtsqAxP8Ct7birzYkM7DzxbE3z9JssbZThDXDvYRqK7cZHNJezF2FX9cxeR1JMLziWAe8KB4XN5x",
  "key28": "3v1aBkfF5Ac3wJAEE3n176QpwHpMVpixHnmSRZskuqVQrg9UPhtioqEvFAzTUkyQpnQsKJ1dQoMRXy91Tx2tWuVM",
  "key29": "2YQAeNiUQj5e2Xa9NLuYKPQnnA5tMfEYU83PfdGLp7D3smTTycjaZraszU3fZDd2dcUUfYcij7muvxLnZHmocTQZ",
  "key30": "YGbusQH2V3v79Siea3RsnLwMDcdyBnT8eFjnZFtbne3Jh9tjz2N2tL36FToMfy4DmZUhURY6fq5fW6AXhpQwoCE",
  "key31": "3Sc7S4Pv3r2HJzC6FRfSMkqCddgiCsyiZs3xQm72ZZ27baDCtVZuPsqgKYgAhdhKeMh8aD1vELTgFyc4gaNSuokk",
  "key32": "4Ke7oDe6rNfU7hNY5udPGa9CT4pUtajhv7NBL8UxJaxVDi4uF8A2AN8ur2Cj8gtrjyw1xxNn8rMF6a3XBro4pdMV",
  "key33": "5pm5nucGaLfShwh3WH3ztvu8DiZ8yECEBQiGyGUHqcMXsicw36UNUifyHezquPAV4SXFcRi6HNWScjQhwNtHRTH4",
  "key34": "2j96fb7HwJbD6YHrfWzT8PxqSn2dHk6Sa5NoUx9hDf6qoWRFVKwBWigzwxCmm5FygQnLzfxm6haz5Wkv28zA2w1r",
  "key35": "2yxD8gzKLjtkBqVzj8pLdQ264AbkCC49KD8NcNGJ6VDjBPRiPiaNmqQVxkX8ydt1zJY9g3UnT4M2bNeZ44MLGoxb",
  "key36": "2LCgo4iwyrFsEfG3YQtbZ3ufXFR7v4bVsTQhSNQWwVsAkkWWkN7Q8yqn3bWavL1zRLrwutexPpQVb6eoByqLBBki",
  "key37": "bL75ahRwQ3ukHRxsK9UzSweTWd9TmMgMgNfSFo3DhN6f2N94BM8rnQr1EyQSiVB916dWVwUy3AWwVsU7kdTCsfj",
  "key38": "3gM2fmzpmHEDCVTwbt46ZnvR5pRmRpauVYU58Agk8eXzug5KEeKYkSSJHWVXqMV2KB2XEnjENE4NGN71y6yHJyRR",
  "key39": "iUa3FYhq7s1CtHb7nX4xFjc4Bre1iWLZ9d5hRGr9XZXJnfWEL49smZgUokdcE41q8VCmUttamymi6an5AzU9RnN",
  "key40": "5edMbj8mAfVjW5DbtGg3Lnbfwz2fh2XEL9var4cPf7PXZuaHjfvN2PUHoF91qZnDVxKWpWZdz1CxAsUYsYVUf32z",
  "key41": "3YWGhVrJDunkFQgiR3SGHyXKvDpJtA3dwggMcvy42TokCFiEUu1wrEsJNr5Z9H8PTG8bUBRr3keFmAEAJTCEpydQ",
  "key42": "3NMPbRB7oyAocVVEADTfvQH3qBaUJAxAy6tSwL3tz2ynns2EBWspkwvjcz2fbgENecMSt2D5g7o7nC7Udu92W6h9"
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
