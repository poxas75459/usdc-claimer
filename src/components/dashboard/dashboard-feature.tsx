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
    "4PgJKkXg6yz9yYWkt1KQ1x99cSe3qDz3XuUZVB2RK8478EA4yBYzpm8WDaHTijAAsFCzGV9YseCThThgeH889LBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVp6eBDezVS3qTKRFHmdidF2myiFRCFpf6JZSKwz5vgfDeveBaEnU8SFabCW8tvXth5Z9H6TJGxaH83TaJogScM",
  "key1": "4jEcN8bEskF3bFkQhQ7q2zjpGacrv1XiAK2dZoVrEhhFzEReCVmUuDmifFNdWattnh7R9jwqypFuCzugFvtRVNNL",
  "key2": "3Nfp9AJjKCWpHz4hj7vNQfNUzmkuPWGCrgqjaNEDsswyry2UxUwGTfYUt21mXfA66g3ZVRixogKugnhgC4J1xY7Q",
  "key3": "2TAjjXjegzEFnekWCTpmeX2C1KKDudxkrSR4nSu9hCtQUV1GojLDtkt8Rkv9NyPLa2whPrggXnrV8AndmKvbZa44",
  "key4": "2FZk8ggFdbVQVYz85aCry2hUANUSu3v81Y6CR5cXmMsdXtSiGH4WxQcX3sNErqnLpaw4jGn6BordsQceWKNA8VjW",
  "key5": "4TPX4i6BHrQma5vceqBosMN6FqjEjJGL1aLxqayYeLJmVvj4TYbLLZocDrU2mi98xDuHrSDT4pJzqancGJosBgn2",
  "key6": "5HrfJ1i17Saf39o1tiJTxiDJj127vfg3XgWX5Trot4GxiW8DVzCe8La5wvv617YGnC1bMJsArCNPbqmA7Bkj7bsR",
  "key7": "V8y1kkV452AZ2Zxoum1pa1D2be8UBwhRkq2awX9JEmANeLmqW2CDqLjFYwRadGaVZXmEoGaPpse77HcQEPDpZSN",
  "key8": "3Ga87a93BNpdQ1UwuChSbJQNQ9mWpjYyaQg2kM3vTqofqqFXD2HF44qYu5i5DCcZb8HjxYyHfZ8pQnS3yCyy3oeQ",
  "key9": "63AsZaN5dkA2K7NNSr7QqMybGbhwDKfX1pppAr1mQqgrjD7owv6TRc6AiHeQuCrJMeVDUaEgp6kvfPGAfe7tsJub",
  "key10": "5qN4r5RaTXqGvPNRMQnuobjTW5dtkT1FtC8ReqaAxowAAHh3DfLaaUqYNHFWowJRef2CF56baZ8XVmT1XaZaix1u",
  "key11": "4BkPg3vDX3A8ypnih6UY57hF1C4EBR5YDCWz9cWc9vvnQiTdLZWMYYxoYeeDeNVCHsrTFsoqHzJNiMHrSFe9C3yY",
  "key12": "euE4mjc9r1rPtG6fG5u4i7hwpwNz4v5xWPNYdbgDAXWx6P4XSYMjS2KY3MnbmafQwiXXRYmXjBc2q2ySz2iPS2x",
  "key13": "4WcEWCco6sC3MgwH71n1nYpotvnDhcngsrFNeecHjP6ou9ePrtnibGR6XivwGGyxuia1SzbHNAbbpJPyV5bcmnWj",
  "key14": "3N4PXVz6LcjDBQzMeourdRDHvbYwrT7jPT8w8jkV3chTKFa95Mfsb7KNDcxGSp6zwSnCeYamdCbyz3pyddRa1P2A",
  "key15": "5AG8LrVA31UhMiodwfGPGr8epXK1yhqXockBKDR2qYEMynPxn1kT6xFEkav55BLP7yGgJgAoQaWRgWnJBAjtDoa8",
  "key16": "35FcRqEsbi6EqBmGN3HwKkV3Ei3bxhaGAHZNmtovXAmSa3oygwVcU4NCAZbJdYkiBsnyCrp1CRQz8w7wRFscRmGB",
  "key17": "44v2rpnDp5W9hRVAMBSso6aH98R9HDWPweuD3Qsk3HaruU49Jk8UFQzL4swNs3NDnQYKhHYjVruAujhZTm4uk7Q3",
  "key18": "MCovvK7HDutastkbrvghRP4vCYhRwSmePF7mhvx6ca5C5bQnHRdWVTHuDkjPERQ3HKaM6Uwnf1ZiZ37J98DS5Aa",
  "key19": "5xpXQZP7PnvRSoDmV6stLDwVkuygBbmi91SV3sQjYKsfYJdRgZ3tYhu4e1789fCa4gQCXXhPJ7r3GFER539Rcrwk",
  "key20": "DwDH7gohoGSx8SHdugToBnwtHwPwTfDax7RGoXm8GKWDVh5sP4wDcd6TfiuxcMPwcf1z3RwEWbieeurqKuqNrY7",
  "key21": "NEk19ZEtr7hhySrmbrcM3i4KKvWynAs2webMNpJTZzVBzMRMyKE4ydjsDM2B1BkA26ZRAMkECE1ALe34ModTRF7",
  "key22": "5jSVVLmSZQvHtk6PnrLTkfNXwyZGXT1gSmXdTor9kXQSBKstm73jivdUFYfgoQf6gzP7SHA7mWm5LgvxaxxiRVYL",
  "key23": "2bDWTPdGv3uk1WY2RfMqfVvvgM5RWtn1cTcbAWTTSvaoHK34Pj58C7XhnYXxuTnaupB2eA1YVMQiwkSoPmVVfCY5",
  "key24": "3g2kPyM6c8XJq1TrgKeEe9EdbQobnpQSoJy3QW1ZWDzKYLo5pxgavbQy2juf8PKWTMGXdGKQA9aDUSRtUz2ehsHA",
  "key25": "fvMEAeoN6yB1PKRfeYUSUWswXvJRYtrPufZFUyJjaqAvyhDEWA87XgBC6RCzAiQPDzk3VEyvYSV4XKp2UhkSFjd"
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
