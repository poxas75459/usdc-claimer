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
    "3sX7jiLwifLd5nXroiEMQ5Zqoj3hajfzw7btqcKCZA6qJmHrwgWadyXY8qaanRzvoiJscJNSY2TwQUG5GhS8iiWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RdMcKrQfCyfrcyH7wRs52YSd8zd1rHW6gcoobuL5b4pHJysgYuvVxYySVcbUUrVFLRPDpoDf96Kz6ERob4mBVD1",
  "key1": "64c8999spUpGSBi3vexqdU15BsZnNpRxdtQh42iTs3PV5mqmCGjaB5GsHFCGCJUwdiYLtu9GcS8SmDUxoQkx9FqS",
  "key2": "5m3bikPs69KUatKXDwUayRxLeb6MK6roSwgwf2BcrvFLms5XpjAYTwRi8SBQWmGgWBpMs5oxiNeEb2zuGpycJqW1",
  "key3": "gYvLEQ26N1qZdfnqmjYsDKTjDYceyeu3A92tTbNY9Excr1J6pFkE2RR85Z4CsgFK6aaubHbEHgoqYRLF47KdERV",
  "key4": "2dm8U5HnCW7HSMy5GCaNkGmiLA7fyaSvJEN6SGCuCxA9Wp5qQqAiTSeAZS8FUL7DJGWuWkzMYmqwpbLBNddoJpS5",
  "key5": "q61SFAzoeczwgspro6Xzo32G9AM5BQ7B6p4BfupQGMXJWquu9g9tekQc1hDj7yEMfyBQMSWrs48VBvNy1wKoV79",
  "key6": "2ihHkZpWRcX3DmmKqpt9vy8P8NE4G6QYoi4LtNZR9H7FFUUiSW9WdJwgxUqfzrjogFaythfRxoSHQmuV7d1d4jF8",
  "key7": "2Di5YUYvpFN3jt1vNadi5AGAnfdXrf5KEVvFwJiZ5FXWELnynkxyiqB65kGXJFKVP5Dbxt1HaiXeVdmriLBKby3C",
  "key8": "3QkLBaTWsqTVRAULsJkEe6p56Hq4pFNmqctv2MuPpahEh7TkcZWbZUMsE2PQ4GaFFaYtQfWESGnqu1LwQmMTs84v",
  "key9": "5yuv6DEPa1XDGMuMfTY1BtaiHWXNkHbvgXRw1uTc6LceVKXLcbWEozM9NrEtdCQPLXvcfiSmEeinXMeGSUcHN9kf",
  "key10": "3Ptu6xeqefT7CEKeqrgwE18aYuKQoDmf7AXgbYgEeg5fAQxREbfRwzRrU4DL282VHGmMKR1Nv8EcwDsPATMsiqfQ",
  "key11": "5HQ9WV8MyNYYuifPJVjQpw2feyWysHqYE5ssByLkfs4Nr1h2x7FFDLYWmcpDQz595uMNZ1GmiSEohAhzds3LHj3L",
  "key12": "Avzr1L94wYcYhcg35TEahfx6CArLkeQwrxp5FmQa2fPhJzVtouz3MMAAe9KZUjrD2uNPzeHqhPJr6dXwhuApdKs",
  "key13": "6KUKCuS9eBGufeYKfhgkq9gkRDMeezGHXm2QHeUm2JL3CaguUhx2vWXNAx2RdbFLgPR6EUKeNRiTZ6syyCxnZL9",
  "key14": "Lnbt6inye5YBxxBWyEbEYyKp8VWY8Cqsj171tEXha9BLG6jvTWGBMTr7J4KRsX9NrhKsQwuFyg1BmuDS8yUkhrM",
  "key15": "5qohMhD2ckg69Qq6KGc6h6sQcRnFPPsFfiipq4mqmXg6WiiXrQFARorSW3z7ZvhkUMqLqnqDzvqfd3uQqRykSEgF",
  "key16": "3uYsmtTeM9LU74Mk3yPGRS2VGZ36X8LqS16gbDyUCnAhe7J2WtXuFNm3FLq8Ey6A78tAeEF3JUShFj1YAn51Atko",
  "key17": "7QADrYAExAZXz2rnftaVsBaqZvg4pyxFtCot4aCsmyFHcpsP5ZCK14JHAvu2WmppCJpGC9JESc9FGxxYGEeQCAF",
  "key18": "5YBonYEJkTsvB6QKJVXsia6WAkFmxTZvP9XNdbUzsf8Yqni4XDuP9J3TMy9LfLTqbSoKjKWMkxL6JuEDACPK55BA",
  "key19": "4LxKiBcRwacbn532WthrdyAYZZWj7JzDfAmuoS6o5QdwtLLF9CcKKSHDGvsnACXHivCVooj5xcVezShMP1Q8ihLy",
  "key20": "65kaWU4BG5mPcfKA97Tc5coKzubk5vaJKJupcfgum6r8wo9S92FDmjrX8sqewRMjgvV83YPVVhvoRurE6n57vfVf",
  "key21": "AzJ7v4tHGMhnoGhJ8oau762d7a4WsdWmfEPyS7yHdMLGJ8AS2tS43xZ81SHKuBRGe4KNdzjaycHrg6uRK9PeNUv",
  "key22": "3PX7X9zbicMXh1zyHAy8mhhY7UVdXJq36XpXUbYzxoo6bhfE2pvHaTWjnmiuMdhWHKhfEPiaamuXyNHu2Aq5qBgD",
  "key23": "3k2zdNZmg8UYGGsQ8zLjqhzABCEW4zqrxcr3JJ2vsH2Hriem7Qfh3KPQS1htKPMaFqbX3rKQcu1XBYx59AaHMCPG",
  "key24": "4HBhY5LQnGyDJCd8BYE41sNLy1ADn1r2mcZnKpY3W8ta5ADLcjhhWW1mzeZkorvTRJK7QZb8CzxPHQc56NVyHmER",
  "key25": "3NRf3HUrFGmiujqyNW6p4KzFSfc32v8u4rtWrNoQNVvryiuFYU6L15LH2T5Hcn9PCNC9AaW9c8SFRaGCbX8PtvBp",
  "key26": "5LJ8A4h1ECpaUeg5ho5HCAcyW5Ms6sLWLaDgJSd1iEAr4dqfH1jFp9ManfE8aah4phP598XA1K6pCv5Jz7c2kLUg",
  "key27": "43dgba9BpdtkxgaEWCsvvU43qFXqDiZcWkchgvTdn9V4uT3sZ8X991y9XEuWHV3jdC3rNZAFqQq34ZSLv57VqMYw",
  "key28": "JccsyoYzAdMNRbPKxXYkt8wjWr8hBihjRK5rYXywVDNQsMGKiaGaEAKzYMx8BzgQFZ3M23MG4XST2nWo74Wo1VN",
  "key29": "5iXTqDCvHSMgrnA5jG46GL65NPg7rhzS6FMA9wvPbfwRT3hh49Js6Wi8DnwKs1E9RK9NSUSoWUALEfiQjtKut5MT",
  "key30": "LEisBUMFZBNnKoUQQwxXt4o8dY4BazWPW8nAkFybGdvgUVNNY8tMZ3sq9bk95W4Z41Kn5LwyAxyXXZSBuotNdKZ",
  "key31": "5wR29YT7fcjjbjC7743hJ5xhrcDnAU3dxU7fdvs7o88335wJQVzbx4jwENM1vVq3oW5EL8J7WdoZWRAjESgSFrsK",
  "key32": "26VgycqGTWPy2q7nkjBVPEPNv8VYcvPWXZxCWsQ2r8jJ83N2yKSrA9r7AgRM41EN4Zf5utKFykTt8GqsDxmMJHjS"
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
