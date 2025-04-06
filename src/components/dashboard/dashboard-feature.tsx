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
    "24XQgxSvaSZQQgCXu9wWfd1JKWa6pjasrgrr8AhoVEKGzj6sLqJLXi8vqqK7VPgiF3uG8ADQpz9QhMfc1zdog2Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5z67quHZBzDq8mUAoJKNUKi3TC4n2EQ4uvEoUQsU9Tf7HwUTH7sMcy7hoWopVuwfxQCFHxEXcFUMRhYpbbb5vV",
  "key1": "5UQebZHnUgyti2QbJordj5nXxzBYA7DZR9dvxUGvhsnKEA93UYvUevN47F5c3ziLKae6SdGY3JDWntoEkk1YrSwk",
  "key2": "3RTwNCu5wHBgqy2RoQYpDkQ1s3uTUHdJx4FCb7qXw3ndUvyQLFhz2k1FH6NALWyCF4MfgBspA735JwRbo6wsV2QJ",
  "key3": "5RTvWBVs5BCBmaGNCr3dEdheBMZCv5VXnSzDGkUpY2VZkAJAxuxFapcEozNz5jLuQvb6wDFD6ruMobAYweDfVMaM",
  "key4": "54w2zUe4EGLacBjaDwgoGhK83GJC8zvEU8vN1LRh1hiHLeW8Dakmv4KPoxy4baHiZJRyrq3H4P2fa3LSAxxv9U99",
  "key5": "2J8d4HP6kGyAanTPw5X5iJr18xmrHY9uY7ikb5GQG5cJb3vM8zxEVzjcbRueCk8mPgon728THZGzRBQ4R9iw3Wnc",
  "key6": "2YTCDp9jzZbZY9hti9vCEbgU3qZu47cXbvvbpabAuMFFQD4MyFx3aKN5sENkipkf5EHUZN96ZeGPtVFtAcwhk9Bs",
  "key7": "3AoSdkAVy7Bkbv488Y3Pd26z36vV2AZPZKrFXXHFTGDTorp9nTZxhtrgSVueV3xqE3FtGtXLpCtRcQaoTCkZ3Kt",
  "key8": "36dYQBA41zWPaZvkCu5WMt4XrdjVWnfH41UtPygCLPCfE1GmWcGcdGxau2RApbGTgxeoAtkWvovTKS8GUjKYPREr",
  "key9": "48ERyQp86UXrQWvBppG34ZY2PVDuof1FnvkafD5ABiCHgeYHcD2rBDyjLBGwWspDUsx4HFvm7M1rHBFKa5rwJUTw",
  "key10": "4k1buQKiSkBiQRhku7GY1YKizwYC5bonbraMLfNuhEDqzXYiu33HkK8uPDsgqhntmHcMqhjPoRsZqzHVv4rkTtG8",
  "key11": "5XcYdHy44yjVEHdo98iThEcAxC6ioNx1YAvdsfdHsQL9geDxaSfmMp77XKoVfsK4hnoKoei6xCchR9z95EbG9QSB",
  "key12": "2pTq4LT8TeSrxUeH9JCp3T6caK1E9Cybh3BonYAwpoUASPUDJCUXQLH31ZiVBwoDarriunJmKiausK7pTh9afeWn",
  "key13": "7MHFDMjQLNKVDPZuWenX1U3BNUvCwkn5f8ec4fFYcaTxfDv5F5pTiLSyBmDKcTUjWhkXeZtHHd45Hqr2c7b1S5N",
  "key14": "3SVfsAi75DMrUyQ8TicQiwhrbkzLbceDq7nwEgSW25MCNQv3RsxQ3ZTs5ginHt6Q1AYmBSj2PoErozpGZjQWP6Ui",
  "key15": "2ThD4yvaWo1Ns83BQddfduDptWhrMCPCaJ8uevSfcTTYhmrPHpQFrzsaBdPvNNNG82P2F1oFwNiUsz1z1Xmh7Bgb",
  "key16": "2AkQfnsko8Hd3F2HrKXwyijL7HhvLvQJ2pZQfLzzYYv66NEZGhzkqCCdy8nSZFMHMdZaMdbhdiQjFXQLF8eHJTa8",
  "key17": "5GLWDX1CxJoap8uYUJEJ3W3nLnUDrmANNj931ddmQxsUgE5gF9HtUmBti1Xqn9mGK7JjyxK7GybiWjPwn2qvyJhe",
  "key18": "3xbzktGaWVb1X3hzA7tAfWJCzZkimMSGBqSFkC2JbqKiWh4kFPvdyH49uCcKPb963yQz88oDmFWeEMURppSH8MaD",
  "key19": "52wH462Gw1MCsd7436VYCNYYo56moxa2Evd82aG8ebYBdVQR83xH1KuQ18wVPybyjyP5wNmutAtCchQq3Rdq6TbE",
  "key20": "2cFpuXALN8xUPDHiFu2NJF1JXx4YW9LafXojepZGymiTB9tyLc5UVfPf7Ys7R8euJMMRUA7BRFRz5vbBSdhteSKs",
  "key21": "WvM36MY5ZsZJon9usFhhyxjSZmD72KJnPd1vpYbqizaajSaZn7EcBuG83ZjHbv2U4eqpxc7izvbekgZnSQdH2Md",
  "key22": "2YPHTSZyFSf6jwutGpHs4ukRjuYJZ9RMXtY6um1gbLeiTG9KRjcEyJ8S8mw6UxaAVd8X2RjpEACa6KDRK64U6rTe",
  "key23": "35aSP9AZWc9U9m8exDBwoYLL7hpcVpdBaXDNeopo6vcMvhehMkWoUU5H73BBSWHDrSz2BPHMda4836sePY7E91Nb",
  "key24": "31R8fSJA1brGoaYFSoNKaZAx6uuSo9FamKTr3emunkYZBZEMdAAPLwWSLqVndpUeoGxtMmCB3aHPyyFVxmAD82YP",
  "key25": "5BoNJvDsrk83Vt2xHzcnw6jwGRHCthcyLsmn16hS5cerHmA8vbRpFMGd1eMtzFrjZCciwgv8vLsH1EucXGeZNNEn",
  "key26": "5QZFk3u2BMUuMy56BvJTGvG43c9fvKdbrvf7N4EAE8fXndsvzCgAyAXrysoLjTpuH8AQNa9XZx9jbyVMHNRTwsDT",
  "key27": "5xjLjzJe5GE6Q5echWU6bcbS93LsjGSa5GVycW5poAm8APKWVdfzRDeedhUy2T3mKtrSXu49xw4ZgS2MytBact1p",
  "key28": "J7fD8Qqjsz5TUBYyK2juUb2qM86H7VhGb2Nc4RoQTyYisf7PQsjWgUqCwq9yATeH1ngY1Rtjv4LP36uj2koTaUB",
  "key29": "fvESieiivgvxHDo1pMRy4zRMmqYwUxN3pVS6iT3Da3U82fva42g2to9uX3b6R4meXsNtXcr4DwtnL9tTYB9kZJh",
  "key30": "5ZKLEhgWi32C1jBQ7DoL4jHttUR1cKJPg8oVSj15cc8aLG1ahKYXKdLZifoZXyhBgSaJphfyv98WwMaQXhETvs9U",
  "key31": "3bNH6PnrLK7i5WaRMSYDuaMewwFYQFGZKyqR4q9945dDEYhbspDxukXMQfhMyujD3sd7dita2MAy19PCCwvzyvCq",
  "key32": "39BoTdLpGg8fxuLjWX1U7FU5nzXgachPcyksCWnWfbMLaCLTVxMNbzRTmoiMHGP5biA4PgrHSsVPNm2dChXyTXXf",
  "key33": "286Qe5hX9dcBhDCNYneY1h98zuVxJshh4RHc323ChWgRmqzXZWKNhXLvXZjVe1Mi5Q7E6YTDvj9JiUdnun3i4rn1",
  "key34": "2y5LqmXpeDshbfuJWW3KPhDKrFbQkP3wK9beR119GfKUXRbt7Ks6vgpUcscEDZAYoDbu6RpNbJsuwsKEMYEi3TiT",
  "key35": "5zK43THGDbZX9tqQEnGjg69tNASZnjdXKGfpgw1Tj61txhGSgkuGQEA1aLZou9vcbqfrBkNdhiM964s2fZVQRRCs",
  "key36": "TACmZzCWWizABfwKZvpu2U359anafaBr6Cf5PSeHJtK58zW6A3josebo946zvcvKqCncZTvUAigEtiUVoX2XGEp",
  "key37": "7X9f6mmhpwuXL1ADSQ22z1enEFS4hi6L5eNxK92mNEQQuUaBYWWfjqyjPkzxqvt4KjFht1SKgSqhT4i4cAVPR1H",
  "key38": "4ewsoTpY6zYQP1fxvrvhuhEbg9WJbbd3JsSELbyW82jaQH8EPG42hXaN9oq2PyN4VWuF51yEi5JPpivhmN1Ce7p2",
  "key39": "37kTpDiehRjdbhiTdAayDkM2rW8NX7ksHZFbAVB3xAzX76raYQsPoaFuev8JNpmAviGywZcgyhXYYrnZjLwLavhn",
  "key40": "NRdVqoXzJx52deMnxthsj7c4oNebUPookFoWRrKvCotWHxiNxfv8mnNbzkJ4QespuPXi9jSD9d74A6Tzr74VZ6z"
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
