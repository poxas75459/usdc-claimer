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
    "3yGABs5p529D7P1C1CJbLSjJ4jzDh9myFrCDVuozL3moyvbMHVEUcDgqX4hXPp6KMZzAMNifaFDrHWRz4b3te1cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vh1YP8qyQ6ZHzr5zhvDE8MrmdgovrCQCFMUBDzP6vGuhRaTZTivHxBL4TSDeQYh1vYbPLBPXSu91wJGEuUxRGdB",
  "key1": "2hyr5Kar6ADfBZtw9kSvJcMWxHNGYAgepuRzfLDA1a4HQZd7oLbAr1J343vad9uBbRtFNmWadoxQg7w12yefK4FY",
  "key2": "3YmAx9QuWZTrTHuqvnAHAurimfbYCqWghZwHg7HECoQctJokBvdP1Ty15f7DGBbcvG87Eywe2Fz37boqo3EVXsEa",
  "key3": "4XD7mTgMyiPYkFsRXDfVokNYhektkN66EwehirjZ7KkD4YUzmF6nefLc4pwtcbJY1moxnHkVGLTH2UhiawpN6MHR",
  "key4": "hBZBRXF4c4muYcQn179YSFcVDAHkHERoDTwpDXmUuTHdd7jbB5MUvWC6jW1sUT2CKeoVCBasLMd5LRc8T9ERCxB",
  "key5": "39VNDotPUn5nz4Ajsyn4uBLPvpGofF17JfaQM25YxZVR5S6qiFvmpmg2epd4w2FJRjBd7Rtt14pURmg34qryk9Z5",
  "key6": "hc3Xw2aq3cus1xFNtqqp8LWzTEtVK6hF2iSjSupUzcJpgakCL7Uq2ezmpBZFoNFZPRrg2aEu6vFSL4VKePmim8E",
  "key7": "2vkoui3d6sopq6696txMS3nkMa5SoWERpZRQfaNSQWfDyG8dqfa1bsJQYoxKorqyF1HBso7mQgmMctZtdZaWFqV",
  "key8": "5ZYzss471hnERWn4QR2g7TrjamuVW4rQq819rTqgd6gVR7GZiwmeMQLhT4T6EvZLmC5FAkkgHRi3uF3aZi2G45bs",
  "key9": "r5Q7wFMxmSAvz4hZ2xx2T2GH2z1D82mUq2gV36CwyX8XWxkuCFbHewCwUAEZ4ENgRe1WbreTsCqPp28NMbnY5aH",
  "key10": "WpY8gptxZW8KQz8fGjT7D4j82Yrx4wrMZgJNyhxuiNhoLybx8dSzZDxK8nVS9gE6rCbop47ipWvgMGtbjgktF26",
  "key11": "5ERW5QGRt5eXZ7mtAsid1TAVKX3rW3YdDmcBYHXGr4MVevJEMrWZ4TubokJzD5bsHLUXqkfssZHUDxbPPaxYhvZF",
  "key12": "3kExmoFE7UiMYW67y86QnLiGniBSmcPSbYh8vhn5KNGv7av3vhrC5vdCgU9n5mtUGfrhyMiXzZvLsPfy2qrL5Ey3",
  "key13": "3r4mPkn31xULapHNCVRGZz11pFKms7ZM38K1LpBrtkdMuUj443Ej8Qc9pT1bzp4QnphKnQLJAeKo62H9cEHDQ3uU",
  "key14": "3CRDpud6KqaoMD2eK4gYU9auqEzi4CBuUdpcrqAkfGXzoXeAygr9aVuHHsZKWd9azFzFLbwi6pWboXctPmAbrELY",
  "key15": "ZAe7yNUYyFeiTrKirmdfFgzqP9LQyLRtS2Dr1eSwfCEYT5ea9iHPXyoW3xqovheAfwomb9EB8EkzR26xasfHpav",
  "key16": "4p77E71vxY1cCaWB6QHcqXHfZC5bm7P6Crn4sizvWL721Qku6nYPpDbhyLV8QdnWtr4M8hMSSA8GB44Uuxn9beiT",
  "key17": "52Sb92ojg9HGtx7L9SW8GQK71e4c1xEZ8zn5HLZyAAgFL26BHZbF49oBG313EKrZwUzE7GUQeXdziTri5xEbwdRS",
  "key18": "opRg4fMyBSppdgUVroZJHRKoAzNVC2bxkckqi2Q9pJPW54Lb3DeKaULNc8XoFks4jSeCUmDnpz4CviSRXeexcid",
  "key19": "4v8jd7pcLfwXk5PzfZpKwTFQX8ERsoPAhb4C1Bq28ueFZfiXVqQy4Bo7FaSZMLxzMeodETrRRztNwa1ufatPLm3X",
  "key20": "57GLp2Za6JWJ8XLf14vGSk8KhnqEKsxC9BooSwtkQ18RgmDonbRwWSoJnbZgDMYVJFVaXJ6QyQqggTiYtYoVCwGj",
  "key21": "48pcwYAY5k3skLY7KpgXs6wxmKhYQDCY9DFDUhFwGQoQPtj7PBbZvZ2AEeiPif3r2UubU3HU7M4dcbETJ5xDHL4p",
  "key22": "2RprzTqs3fxk37mVyPcw5jzeqFMc1dDCqHcgLCPbCSyiQxMzaGgJJK3HngKjSZcaDyhboV1y9AjjeNCoGhkY5mgj",
  "key23": "3XfKUa1EfeMhiGRPeKxWoHLANYW8h7yhQZSCg1iGZAWo6jzAPyAbJNiAwRqQYHYnC2DSYh5JUd5UXJUdmA8ePCqU",
  "key24": "5S8gi4uLVxkxhukreGgBNVegHFCUFen3FPNJLukfpNDbM5hTqaP7yCx55KsF1KxHurCKhzFecAD9ouZGjX98ENQ5",
  "key25": "5fsT7UQneydBFY4znmGffQH7CKDjKw5bhoTiqWstrPRTxYtQZjTLHKyQirWwknYbRQB4FSWpaJxM7jx5NqcQyo7y",
  "key26": "36HkacuYk5eV9pdfmHvELr8agt685i2qJeoiagK6rp3Yc8U5uSDnrWCZDQRn5hYUFK1xKdyqsBNv41vj94smPo13",
  "key27": "22spEijeo9bzWLjuZp7R4UA3mT76kVbR4fCziq6H3xnxcaTdZj2XgyhWgLqUnS5p6MBpw33WKV9FtpDg6LkjSobH",
  "key28": "22nUWKuc7VhsvTV2ABTUL3AeZPqihwoPYPfSpxH2NHKRLsZ8m6r5QLJbhHSe2WYtzsrVyEAiHNrnnT3FLVUwt6wJ",
  "key29": "6F6SooReCubeLWaW9hJceTtc9ikiCsbdrcNRUc9cPBSQ3KH7FZ1jZdEn7aFxzV15Hax6iaxdDjJ3VRNwP7QAKae",
  "key30": "5idy23Cda3kSzBHZQZBeg7QRmbSNF65CXXX3TSz6ex5yozcXxcTQa8BJKmo14Bh9VBq89h98oCnWXvx5FB1yB1fv",
  "key31": "48oSykxQgEzGFJfJ6gW2Ed8E6qgWLFbnt47T44ALmC4w5JpgEwWLvarfee98e4x2CciMJd5dcZajbhq3TbfSoM4q",
  "key32": "3Xajgst4dpTLfTeKPxuBc9qxSUceLa4tSiJRxznRbyBDmnAnzgFv8ySE18uYyPjJKhDLSixqRgNAVU5VscHcYQX9",
  "key33": "45pxuwTjm4M4oEyRZ7tmFtktP1uPzwiW4NTVoWucN3Gww7tjwbHiZYp196KjuaQnjcWxVozgg5SxLTJ3RvESadRE",
  "key34": "k9NvZamaJ1nDif2eNBAH14oijqvGrpENqbQ2k8ntjajewDgukmHEWhjS47tJtqPceQxu3PgFCp88PUNBSUpW4Rc",
  "key35": "gh4H9CAFAYpcoUQTGVUt92NrskgstnrU2tQ9t48sej6UePifYpbHSwy3uXLfnW1mzsyXvb6j4ZZdGHfmG5tXfF1"
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
