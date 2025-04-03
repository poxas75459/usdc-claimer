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
    "uvgaHzCQFrXDrDG3NbmNivAmmoMd1pjEM94LZ7bd5CyyNe2DeMFXX8Qxjz6YDeGnAxXsf12BjFUDu7ip9e5p1Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hCx9Q6cUrF8WHXU3fAmGzjtrupFKiZnT59cEEK2pZcwjFxsvWzim3zzx8tRCHaRP7TusxfefzNV3mnkscjQFqd",
  "key1": "5a2EH46TsurjC1tSb2GadGXMDxp23p7DumK4bW48GeU1TZveLyZEwA7a4eem9R6TNpy486NDjgHUSWNX6QX2UGPB",
  "key2": "pGpQBW5VzcM1WRC6PuTKUxs7zaVNnEgpece4S1EMeAhayX6FGWfEQ1yGSHsc7MGxySdd2LBTGMY6r99f5v4sm3y",
  "key3": "54E7huQRBwPEquoBmeqLYkD1mFk5vZNsAkR3SuNbiJg2ejaVHuvz71a3WNrmy7ayENaJ4entwmjxXzYeoqVnNXN7",
  "key4": "3pyPr5w4xqScSikDvkjdu2zyz951bipGt8t2oEL4iWbjDdMQ2ACdxayMzJbU5CndxLFWNER1jmt2wE7DtF8BxFPU",
  "key5": "36LnBJCYavJZsb31hjvrhrCJfbnq3C5T8nt7u89Dvo2VeYwMArnnBG4f2r9vayDAHSiUG429nCXrB1BH5AKYaqVR",
  "key6": "61XHbofaUmZxqNv8mQ5SRGAJ1BvxcuiswvZPYkimshUmYvRCuRPGVuNdpPECdpNrZq6EsG458RzMmheQbHLDedFS",
  "key7": "2LWrJ7oqtN3PmRL7A1v8UF8amyR6KeaZPTG11pJ2NKHXcppwaQhvrQnu7NVLAWhzZRL97wmTez2qyeRzrw936ji7",
  "key8": "5jsX3iw9vcjAGh4pQSKFMw6hTpef3zmq1zGPGB9zdmsPEW9iHhY2cnS9Ska1yFHsWrMRH69pgW4GsBcA6qJaLhTk",
  "key9": "5Njzf4QKGmDwCLEgXVSTQRvvZP61rfWevi7Rj98kCCgFE7fhhpibNSAs8aA7uPau4DqFaekuWtfJ5CyYCLVmi8C4",
  "key10": "453UGmHY6RMKD1cc5xLe3DdJfUYgWJoLJF2QGQPwWYBEVxwdCFiD53FmJNeK13E4qgCP4ib3936GqQKdq3q6WF4Y",
  "key11": "4NgYosKRVJu86S8wCVf1dMrmnnfwLTTfaYjChW9sUQZy3UHsWPBfic1eEBaQKwkFQewtYs1xWeziSKdnF26nZ7Rk",
  "key12": "53XkKT4Mt3rn1Rwff332ZM7ix5pEv2GYQUGKTg5We7kKwhN7uEknx3CDiHMUh9EjzhJp95WiiXpzcttSpSqJ6eF7",
  "key13": "3aEG35qZduHHaaJVU4m283LvJJHm58eFqRkcp8yaWudwqcJW7yGFr4AsDtfc5HffQeXZFGFoiz8eLLkmygPsq5f2",
  "key14": "5v5aWzAdgtUB9R7A9ypLmUpYzCdDZ5P9G6isxD8M4rMB2Jhn2ZwzQ3w19fz6eTvPPb5fW1zWLYyfyy5D7nkagfaw",
  "key15": "3DiGzY6r77GujyvVnzSkyMn9MqvHkfT1SMPDKY3qW6JD5LnL83wMqsL6hjgA5yApvmyc9So38RcwxqsS77nF4j3r",
  "key16": "uVf4eqv3m9c8hD9xpRTLT53abK1Luz93uB14WMoH7C4hyrV3akDmG3UzEBVDU21nxBeuqFbgf1Lty98mR4BGUEX",
  "key17": "39YYH5eft8FGnmBqvXjiDgsHGkCowq53YTWWF4XesMQhTF1eqvuXUUmih8BQk1UuAVvm5EGBDWTxbCyMQ2ZgWytb",
  "key18": "vvrUfUvKHhCTRN3CnkvPuSdv5FiGz2zmiMxiGfyJTjcpEVP2eh94UsSgtmjGGq8vKodS7TFKCzeKHsbkSnJacSH",
  "key19": "p8FuGb7KjNfE5EQyo424QZZqfHe1x8cHBrSdLg3NZgBTL6voraruAWtrA35eMpqEm6pyweToY2grGjvVRqrJ5S2",
  "key20": "2fLWCyQQ8A5MiV2PgtUyLP9MfaSFkEEwYj7pqNrPmp4cRpVCUzh8goWDwvyak8mRiL14moMxdXwJ2t1XhML5pkAe",
  "key21": "2WtHcoE4MZqfzXLzAvvPCNR5mwyD1qjKcXHBKeiZAzJrpdW5FbnPEB1wRNNhkKfnVARgEjXKSyauGCMSVFyCovz9",
  "key22": "5ddFnGSjVT76LbLrM5irW5MnMD1AtL46L2podK2Fk9ngjyPpWK7Y8MsSqfhyUJx2N59xJ5hDxYBCLD5p28om69vU",
  "key23": "5CP8VdT8wGBNTT1Ar9HfoiA5mufwngojtAPf1Th48upFpxBZ5NBe6KvRKhLkyGcHvowRXymH3HkCEVeQCJZipCgx",
  "key24": "3z7xQhoMARr1zREgHx5Qhbb3kFJzeabZEC7zD8gc7AGPDxknjfvKnrMLQo421q7og6DafX5u9Htp1qUoLDw7fNYD",
  "key25": "42D2XSJGxZNpPL8Jx4KGsN8Xigqp2avf7BPbgvkWRfXye4RpMcPgoswWFZ3v5xCaBDoVyVvzGMxKNxjfYstLpxU4"
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
