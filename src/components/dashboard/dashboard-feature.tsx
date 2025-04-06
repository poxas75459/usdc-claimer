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
    "3DPxuZxtb2WQMR1ikpfWNm98qo3Rcd7eZ7MuwYWvzzRSHzsnAvUv3QDNMyKjeA8KzvsaPpy917FcqQt426hQGNXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tD4wmnHJw49WQSGr26f13AcKGTTroGHPBGy4BXMzbQiboVqXsesENWAshntWRtyvFMkjLaXzAyJzu8HLZDuHeoE",
  "key1": "3KAUsxMamehnCHCmWxpr2SVH57tGWJYSKK5ZVej7b773H7Uc1dQuW445mvyXG4HzhAn6oBDp1GccXZJmxAymjr8Q",
  "key2": "2ceM5pnZrPtMMw6S8im4BsKR6zqaWXvusJMiUzwiT3D1RbipWHygNneGmRpRhdje6P6imVQAAxZcFbxAqcQrhrgy",
  "key3": "214LaYfqSoTK3YyAcKas76KFptTr9e77FTC6TmaHzYLuqoTch1AgLuUNAfm1kNyBcudnU5tFnKksYN5wP6xVapX1",
  "key4": "4mN9dVYDwdb9G5E6sxJxNPkLLzyYCZT7NZvG3x9QVpeVraPnpXLxy6rN54uazJQXoxj4QFoBP89cvEHqEUpvnVT7",
  "key5": "4sUiidFb7okcXCRer37pvxQKP6JnuQmqzG3PDbRBdqhrbB89EbVYB7ANLnYDCWM31tcPm4zx6nLPqxS2UXSpz9yU",
  "key6": "4XtUo9NtQnJrxcND4tJav34drDDyYgZ1eEGniEjJN1bJ3pzyWp5oPTpRxVNbn5aQXFuL4QUNdUw2Piwt8EK7x2zw",
  "key7": "5jh8fwKitbgz1etAjYvPnMNX79k5r6huJEvRSTx5a2NEsGwhoLoZSz1kktZcewuqoxrDPp4LcVdRN8HtisXMbBjm",
  "key8": "55kFzzUFgW4pmJycNcueLvDbkQQMFsT4MssefVdjWXyBbZzbrWHAhWhPs2hKd9vdH6tuNX1kcrZDwR1FDmshrPfZ",
  "key9": "5nF83EDD5Bg4UuT5EueqenAK3eRGBCnPgV1sPJW4g7kGRnEAnMBCuteHo567dS6dspNzYxdgxSdmfLREAufVuRY9",
  "key10": "4wt6SSQB6LhgYLSYhMdBwGDqMXYFKzWscS673bMYU1ri3KXy7qDrjm26dJAP9DY4bDbvYhDhkmrsbYogRsbFLDkq",
  "key11": "2S6KvSH6tHX7DTMqj5UTg3CWBMF7dCTiCemKBXbLfCtQBtEVwahDtykppmu59qTT2eNSNmcVFV26oQjVTUFFRAsL",
  "key12": "2XCCE3ad5G33SpRpVrGsaCK7XAHeBuEBGf12eobrxchwpHQMtQrutaSHoGCVK6tndkfSuzwkPUvnaSNJMGEzdPqs",
  "key13": "2f1DCheFGagADQYyxieP8PhukF3JQHbxsXaHfTrkrGiVRZHjBPUoLT5ZEj8VYiF9qxxJj8iQ9jrTN3E6cXZSUGgV",
  "key14": "5Pim9MGXF9c2Pcajy7W4cMpwrkhyPyiYNa4cLAitFn7GxjPxrM9dRLiwEnCjFbxrMFkmS9RS86h53re7cohdn7b8",
  "key15": "3XqBB4zVPjqrrrryznbEzjewzbR4pQtRwXQyPYxJNKGyzXnJvYQJPeSZuhLSxhKKZitmGh35yK5JzLuzcMX1xUbA",
  "key16": "22AeEYXxZHyPs5stzQbZpm96szdYxfSEZCBVRwWHveVojmKehwLPrxTZqkJydesdVd1A6cmeJaTLPvCJtd4kSoyq",
  "key17": "B4quRa51Uu5CEukyrwj9Pj7GQdAAN41RQxq8DhZcTpwcj2nZJL22Ly9HxegyAUFdQ25hqgtkqVHTwbJ2Z1DQion",
  "key18": "NGtsf1FQrCnJmWHxWKbi3yftqZ5BatY3F3Rv2prC17tSifomU1CcCNtPH7biHMa1L4a9FmG2Mf6xh53RtPW2Bgb",
  "key19": "2J5yusD5L4LM2rMSnY4VG95CgYgDvegT1P39FT8L96Z76kySPrkeVa4w1mmMfFNduLWUcUhzhdzt4WSpGymLru9r",
  "key20": "3ZbBciSioUKEUAP2tzemibkNWTWTkRzsv8TzeozSgHEamD2YGyMuFb9Zkvwh38pi47VUVwLfkK9hjFutnJfe1Vrg",
  "key21": "5MVd349M4fWdJfmpgarK6pYbWxE3pLxVGMD1VyBtdWmT7AUs64s5oe2w9rKSmCY5Sbn3GEJMP9dU4XCd1H63kt5e",
  "key22": "2CztyQmYho3nxYrDJnrv6ijhKUKUVkv7Zaxs3JQ5pspr24KCxp7KNBukHkgk2SxCui4eG4T15StcS4BafV3DJgEM",
  "key23": "5v33hfmJNVXvmzj3YZ5Xj4mwsAsaeeKsfT6Zz5AscY7NQQcs8b8rz3PHzNuXCdphrV8TbVLkzEEimo1isbfwzkQo",
  "key24": "NT2KxytP72DNxkWaytaiMcGbEurNmkH6gmhZDekDsv8UpwqaiVzyJZkDhGR1Qn8HRktPhQRhF612t5qc9AYTGna",
  "key25": "LzmE5zHgt7PeTnBQPgXTWMDgLR3aJa3yQVpVsFzvhftnsVc5BP1LKgzB5EjiZc2VRkip753BuAGewc7mAgfTExp",
  "key26": "3cC27xWNg4udSq2Eur2pGt51VrVrS1CGG4adcjt3CRzCjAeigXW9F2VZKBJXYYh7q9enVBFoyHGACGAiwiqPp1WW",
  "key27": "4nCPynDF4zKA2ZyFJWy7cnmntsfWKwCdtpNAUMuAGEASNC5mqmvfqGr96QMUK3hGDY1QyThX14dh37nQGhsHiNoR",
  "key28": "38vfTjefApVux9QPr9uUTv1AHRKmtS5FwXu7ckPdRiM16aMtmAP4iymKjkuDFvapk3xYPohDf9NPYWk8t7PjDriY"
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
