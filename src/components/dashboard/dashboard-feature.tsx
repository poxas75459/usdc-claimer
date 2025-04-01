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
    "31iQea5wwhxGKLTCCP4XKQ1ebgjeV4PzyJ8dzkRtDS1Y62cwRwdb1wfLdnEBGFxHRGe89HNQvSR5YrLQsRBoaMqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pK7SMGu34ffszAffJaEHwPNKBdnehMQSHQdwn1wFXcUKbH14W9iE3cX68ZXRqUkJZcj85TXKexcg3a6LRmkQLYt",
  "key1": "vdGYsKxnNjh33nj8UrS3jtxoQv2JKxew3K4xjZs4YsXVTViyL7gS2dVmimXY7ZTRFHFLduZRwoDybPN2e5ogYqt",
  "key2": "np5Wj7USHBGoPYGvqrYqmJyFU8CbLF597nmUvrd9gYcMH75PM1A2qY3TFVYnUENydNXnAW3FDzTziehAyn8fa1X",
  "key3": "38DEZS7mQTwR8fM9prFj1XQHsUa3QEgD9BR46ojowr1Y79M5jRSNcmaYzeESBpk12Doai3RWAg59r2GhLbfJDpv2",
  "key4": "4zmXL5D4Xw7Goy5dSqDETXS2n2apAMJz9kC335w8t74ibwwATD4tFd5aVsXsBcQXxtpkJdLrz83MpwmozTo2FcxW",
  "key5": "2ryDWrEF88m7aPkoWp3Zn2vqrQ6z7RjM5WxchaZHS3R7uFkVF5WawogwjV9MaiJ59W9AcqPW88AjBs5sr2trDXae",
  "key6": "41CGBn1C36x4R8FEK61jnvXW1RnQJWCSXsvB5zwnFXAgEUTWD2zCSPkLEiJ26zkE4wzSAZpR92H69o6YdpaAbzYg",
  "key7": "5Mau8i37cii7GVXJZ5L7SbhJxrUhjwrc64NYrFezW1MX1YEEXjMc9DdkS4WeTFsjPxLgzxofdtBnv9JpCpEPpS8h",
  "key8": "2DstkLmCQ3EbnnFSqqkrHTjL7YZYsuo78uNWiuwrxGPr5dCHn28cZwaHo7JWYNA9PWbeTEKo4CovVKG4JRCdG7cx",
  "key9": "43vZbS8XfENwbCJHLGwuQCMC1bC8vpkk7WWY4upE3Rzjmmq1F4exX5pASBPWpN8gqTsiB3U4MxbzcEtW6eSCQv2z",
  "key10": "5M338GWFzpYqBMHU1p51BEn8XYxW1bkWzyaBC5jJErcn1v2pHvnSjiY3RUi6fvmrqNpCHzphMPpQrApTLnUiQizm",
  "key11": "45awaGNRnyHc8Bv2YE6QxjywXJdWUGBaCrvgRzS8t7hURQSvSf3b3VjcL3RysskuLMyHRL4ktsv29ZBfZtZjqFAL",
  "key12": "5JqVrGxFonoio9imuzAAPWx8GGCdzK5PsqQeJvSgekk9ghFqpwpffMdf2ZysciSLVMPWa61tWGtTkXg1oyuJ7HDd",
  "key13": "4L14wyztoJ1K76jPSZjruakEFAdG5wPJozttH8iepNQLTnKcdX7oWQZA6N3uUckydpAjgizBYCD8VVgxUiV8MqVa",
  "key14": "wNJfy5TmgYkPTANU69u1RTz2s94pT2DTs7XCQ9Zr9F6fBErEZxhvj51ZDUkUZw8pBW3N9vZDW3YvBHyMwgEDBdo",
  "key15": "476wUDsNpLhcev3s8DnULfcGTritYq7i4QWmCxhsovJ8CNc6moJWyXjUGT2BMVZyafeiZeZCBhS7Atk8gintcEx9",
  "key16": "c3KQMZJLX4ZatW1NBtv8bXoVw8mdsbx2sGPKnjG6DD3HjyGEuMabNnoELRpPqbqrB6n4HHteFqkCD1YksfLFMm9",
  "key17": "aCfsn8SKWfQHjqF1rKS7LSzubMgAyqoefoAcaY7zN2hxMkvaq8DxVhVsQz4CedxgpGXbkngwh2jaFc7gzvsb9gm",
  "key18": "3E4f71iKLJDQnFyyCXryJwNYWpMeY2jwgMvB1jciamSZEzM1uVnwTKJ92Z142LKRyEgNGbEEnKShwV2ghUWx64K9",
  "key19": "3KSussQhr1trEFpjXuVnpn9kgwMT3inc4MdX2AqiFufuzDn82UaVTVV79pNmD4HKndBNHhZDcJm3hcmoTfmx4aZL",
  "key20": "7c3T2a2HoxibgVpo1B8XLyjBmRw79zHXRcXfa89zYtrHBvU2BdGgSCAycHBsc1JwHFKQyzSYLnCWb8x2qzQB6cE",
  "key21": "3NZiG3wv1RZHq1VL76oT58NfrhgDTos6PpgayYSAF3d3VXbYn6Kgy8QEwpmj2tMMz8DvtBqJQJFUciBceyfwviGT",
  "key22": "26u5LYiU4JAEcGG1vFLB5THyKoHRDesahnAPgWUEmk1vwLHht1dzTJJDGPvAzH2KeKbbkzPec9jWrMGxUZA97rFK",
  "key23": "39d16iaAm9ebJNd5snJHn83muQAxPtLRUVjBsF2WZLcLFn25jN1QiRmp91MEJjChvuXcu9SNAgqqeoBkefVuwP2N",
  "key24": "2zngGSXzqHV1SofAfPiXieVn42C18EuTCafBzJp1pHiFXbpCjHvSxqr5xkgJgJ7EamkWsJH5r8y4S4SHDEHh8zqX",
  "key25": "2tmiCc1uwthTXkPNvD7sHUGupNBNtGp6z8qmHri4YhDQvfD7U8Fp3hjwhs3U3M9J5ar5sauqtpL2xeHCoU5aYCK4",
  "key26": "5KmSCawYBMuQTLvKVobA8r4jURvjbw3AJHwAq5KKz1Ru6EVZ8r7MuokgtxhYbWzjAfHCFytxHeqEcZg1QfukjrjN",
  "key27": "5QG5sRFdFio7asZ53KD75xrTDz9vCfgbiBCTUhMSq5Z31XxgrwtAnSx35SJysRy15gZ3wbhASxkc8ZeHfRQnR1WS",
  "key28": "Awp6q5NoBHRJ1aL6T6gMCVA4b4t7MNkeSpL713K8NiSpUbe28CxhN3XiA4pExxTtEau24atQfQLSUVURHYsrfex",
  "key29": "3hAgPQJWSeqAp7rxf28GdkLoXyE2MjzYMvRguCFM6XREGX6qQooyXvKCCRMYFm5NzbtCMamqNYAbVA1U7D7ii3sQ",
  "key30": "4JMkrN6kxJgp2c7NQenqbrQHnKDYPAfT2jFozVd7qLHogwWErafSUkPEak1zHeXvRUf2V8ND1c36xV8jvTzCg1CJ",
  "key31": "zCn5tebrVEEfmcZkAmcpbMGPdZDXWP8LCf5ykdegWsBFpEFMdVV585HNk22VFBT2aD2pRY4dQNyZA2CWzXUQGg4",
  "key32": "2vZwF4ph1ySRFW4EwAst6M15sRDEGfQH2L9jfs4KtquPoxuQLhZRs1Tm2wYWERdy6wkMwYosg8bwNQJQymLCnjV",
  "key33": "2mDTTkhvT1V2ajb2qyfgFDYBb2KmhEhyb44PpyxRkJ8GZhFAzPyzhKuVzg8Q54ozivBYWsJY1nX7jcBWbGwQQGqi",
  "key34": "3kLAHt7RsZDbryAnCcRYo8pM6NdC5Z7NTWS9nKqdrWLpUDYCUhmtLYvjyPi35wzXKjsL73CnSEAzAbWCoCFU5h3C",
  "key35": "3FpymZ69vs9awZKxBvCRgnqKnDjYxSt7BW2a9nab7gRfFTnF7rcTwJGnm278hodBDVtfXGiFVBiRutVMGKeNq2DP",
  "key36": "4ASSiKjoWHSnAD6C3qeft2R1MvEvBSfr8cLoa6gQdvJ2J6PwxjTnXFsyehi4phBcMamZCahr1wbREs8ejsEf6WXq",
  "key37": "4AspfBuFUiRrFzf9vN2MoacDxhCutKP7iALi5uNLgG7yKqpXA5VVfTAcUmGtV5o5oiiW7tJXkap5rd53XcczTUgr",
  "key38": "4QAYYP7b71cKKytJ1fJXJifM8J9uLSYtCLtM1LKzWpamY5wKhpnFP5MSnoWHygr3CkX2Ys1c275Mrz1xuxeUps9U",
  "key39": "62T4489RQRNd48fBjSXKRD6MXXRrGYuZpKxWNHwvpL5X28NibUTukVugubJgG64jKjKhzgN7L1eKN1eM5C8CwSJs",
  "key40": "494kAR5ciMNWtAzKxLuMwE5LuVY75wH3hrA1uktYwr1wSvscqPPWHEGU3bnMLvc2brctjunEyL3dHZ2HGDvayjjB",
  "key41": "2Wq3rL7ZDoGdMqaN2GzYMxZMFFx1rPzUyfygfAcGTGHZGtFok6RcUskJtiZoQEYNAwroyJm4qbRSq5BgiWoBd1Ra"
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
