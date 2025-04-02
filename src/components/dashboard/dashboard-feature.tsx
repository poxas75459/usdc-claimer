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
    "24u4ufmbzPxWrhYSRSZ4rMsgLykbiJm4hqzvjmHAmhA8iV9XjaEcpmqL4XaaC5ME3fSKGn1NvaY1hxy3sEBUYSnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r527fz4w3iy1bZX4cnEJsAnc9SetpAzHqQ6F3yBSSfDcpdiupPSCS65Bb2B7m2MTLykL6VKzpxwM55PCQCJK2T2",
  "key1": "2cQrR3caB7JMphnAHcdJLHSSTCTwnVqf6DuzWS4FgEDXmy2e66AgZx719Mdg5uoGaWAazxiGkLXs3C6jyLv8TJtH",
  "key2": "59SG9j7CXswyo1Gssz36WrZMQUtNtYP2suKQCnbkRLEFVt84zGaEcqb7hCXDV9chsygJXzBq8R4fen9qad1tM3Fa",
  "key3": "iwDB3ezEpHuLX64FyBAws3dfooSAjXPuhwQ7KyqG9a7KAHgDQz2N2RP2xiMunNLgRzAcvTFQpQoRU3CA7U9sazL",
  "key4": "2PpvKhWBaaHSnnKohufjH576DLpTUHSrUTc78UaruJRm2uCPZ726dWsMBnbavQ4YJWacBpBq7v4idvyupcoz9cTK",
  "key5": "5E13RBXFzq5ouLjrfKF1f9AnVHthWAt7xNABEHPguKeM21vhrQ1p4L1UqLd3SQDzwKLVBoc6RuxGUqhBFEA3T558",
  "key6": "2etHaHCiNu6hKhvijXe3RQ1ohPo8Xx44g1YTNssZH7mwuHHeeZ2gwZWntVWzhjNGeEH1UMfGtnbiSNp79CR4i2k6",
  "key7": "3VKkEJXyYWpS7viD6v5JdiaBisZ6CLU3pn7aXosJzB9yfRE7DswswVGcbRiPqjKaqUxST7f8h4KCzLbABs34WjCG",
  "key8": "4ogyMtsPsh3Xuj8iEkWM9UMLNAsLz9sMCuUKxX69vkxqv92MaG3NJWf2GQqJM5A3sYvJcHSeQ81xxSs1q2fsmzuE",
  "key9": "5p6r1kUCcRoUCuLyaLep9FqvkqhmjoS1ojzKjpssZtv1zp1CxdkEpLC9H6MS1rr87ZsZyPmLh7E8iXef5aqQdejq",
  "key10": "363u1cMVVTimvaKB5Ndd731M5JD15rVF6skG7WdZdp6SDXyLjJyaHmo3zgTExM2x94fFnz2HnakFbMapdDvre1Gi",
  "key11": "LnX6YYLRLiuWoxcnzNXt6US9vfLTh49QTYh8nmjPHVsc6YEmEqmHeff9TTWGwB1EXWCCQuYPxF3M9iKf1iY45vj",
  "key12": "322iu2ndVFx4ATNukYoADzs13CeWMU2VG3gh89eSmYotFFYwuaqE27HuiKHPgxSuUnwbKF9V9RtjCYFqmzazaeS3",
  "key13": "3vhwF75pxkFrAFUwvxpxq5xQwGHfnP4TQt61Ajhie3XbKEtYe48Fovh2oEpJMA3ZP23yQstFJtBnQ3A9e9yrmPPy",
  "key14": "yJzjXwGgZzS31fKvBmj1oF1bjtN1EcP5jDnzbfGe1pFXZsJQFnxhyK6jSnfgnffxGckfZRZoFVW8SeQbRDZtXur",
  "key15": "5as7YcAS948SfubPpAeyvsHUeqqS3oQLczSPME7pMDJAvF9WBwmjSxoCFXHFquGDmnfyyhKT1yeXqXARmSzTinNf",
  "key16": "2M6YuWzDKeka9JoearwWWdkMEkGcd6Ke5idK3TuQG1AbtNQ12KBxxVZrVXBm67pmfehKyzwnfnpSZ6aNbLWbMPGA",
  "key17": "31VHDj61RSaPPHgfn8G3yossJvnuKoetb5ZxTi4LXJhsRXppRSR5xcYSScUQV5RsVxVnFFXCuELdVEzTmuaAFghD",
  "key18": "4GsZ8o5RZ3hCq9dC4Tw23Q8LM7cfzGHNDxEevG5zknWEApgdQUBMbUi4qihcqjEjUcZXv2QyCkDkWuzYjPP1o4Xv",
  "key19": "QYVCSMiwzGN9jJvYx2iS2b1h8RUvZJ5B7QyjWxzQr715jggBaZx1Cv2dy9RSafk1hLLyrzKgMz2CxM6i6V5i3pG",
  "key20": "5M4wAoYRMRpB9XjN3JA7FYqMX4ndHMHgnf7mgtXXFWVsT7MFszCNJNbcUZpEMBkb9qSXsQCv5bLZpbDbFqSbB9bp",
  "key21": "5zFmgSBGH854iisSQAAS95WeLcNDctryvXSnK2nw8FME6pUFgUYifAPkgBPiCgzUtfkowVgWwm3LAtp8P6Ab44Pw",
  "key22": "o3HnRUxAoeUL7SvdUKWACnB34sCX8ff1vazaCH8r9oZBop3Fod3JsXTosWRPoacsE1KJCXtL9k4jCFJFr8cttD4",
  "key23": "4sDc8R39dVquPGDuZaqqwQm2yTCHLjCvH9qGzKJ7WKjDY5LxQy5P61GERJ4TX7SCMy4omQMnQhWWcUiLVgWzDPU1",
  "key24": "5RXsQXhauSwNGK4MYCj1JboSLPJUmcDbArKhanRdUpxFJJZsvqr1gkNKX17uGPohgu4Ldth6zYn7oZspgvQj4zrR"
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
