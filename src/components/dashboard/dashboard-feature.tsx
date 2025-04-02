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
    "2AKXgVQSeeaiurMJHoeHfhGhBekegMfahY4u2DmC16XQcGJTe2AXxGRM5cFodsvfmn5t2BgKtkRGd5bjVnLZNP9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxK6bqVrt9ykbUtfRHccVUZXHAk9Cj2rsz7Hhr7NjhCXcc9sgMiGhgXfsSHiuX44V4WEhERjR72FkhrGwFRAuSE",
  "key1": "55U8oLF17PNXZexLAXraJrCgTXea888hG35GKB7jbzsCWZx2PnDbbhXaXzdQEqh9LmTe4NanxbwcxsDVt1YhEkMF",
  "key2": "5gnZkW3giLrQXGdx5enTeVrsRjicNENpjvhS1s4tUPwHkb5Pt2rSPJMx2tCpPsqzDFnVvVsw7EvZzLS9yAyyHxdr",
  "key3": "4HXrGUz9zNmS5YWEbxs8soMkBWTakTQqcPKzFWkcfR1LRS5HCajrDdQEm9geQaNXJ79TY8ZBcYUvYKqigfWLFwe6",
  "key4": "5F4KzoYBpSRTozmRVq8HWWaBYFRtQqxMrU11H3uxefUpYTEefZN5GXTjWH6C7gqYCxVcebdGFAFcEeeeQPh3tCSj",
  "key5": "c32xbg5BTififrCvjFrRcTGECwd1Tseadck3naGfZLjoxPSdFtMhv9RK7hdx3KH8A4pvoKuUf6nFFHHP6REY6n9",
  "key6": "WEwjskVmuiXYa5CJA8C8cVG3mqyVZ8fRuJTCvnsFAB6NNm4Z2VDT18oyYKuepL7jQLUu48C48iweifnpxypEq1M",
  "key7": "5i9xL93GtL9Xji3eLiiKXnuA2fEqHYdcQ8Yq2AREBRhBrcTBmdMPXCwspAKtE1SZRouxX43xqGoat2yMytuaJX2m",
  "key8": "5FSRtWgaim9yQ6mUKbfUwUb2AS5cojH2MfXvQhMg9UsG9ntzpBZhSV1hxGzyoMYPVbBVeDk2V9AWVHDwhbDFBFFH",
  "key9": "5ryMiuCgvKcG8dNZkNJvFQSLty99tUqfvAizMbqwLH7JneEJC1gLaJEs5hhWk1J7DyptGRHmUAToX8is1GNyt5rF",
  "key10": "5WTFwy7h5avkRv2YLgsrvraBYk21QN3gd3DdW7Ju8Q1aPsLVWR2j94RynRLvvY8QSfW2b9zdZEMq78udjHtRtE5V",
  "key11": "2z89SVUZ52ZozPgP8C5M8uByRH3yUupBPJVnLet2sckjDkJY3XtBxrgraNgT6ZdkXaaBnTmd5SthVrPdVSq8pDcD",
  "key12": "bpZr2yEv4LNTU9kWe4KS3958ZaAkCjT95giubJex6YeKh734Px4wzptSC2uAhGjHUN3ehQKMnSn884bDCNYh647",
  "key13": "5Zf1bsibG3QtQ9fFVR65jr7UVYDZuuMxrg57bCXkaoxXqp1FTJupRvJrQP4eyYkYrKgzK3PCzUKze7UvHTRE6kVe",
  "key14": "4p6SACFgJsQmBXU2t5A36QNgKrajPM1FnjDp95NtLepdHQNReEDPnf3kxE6Yhe1zu8HP6kCQ7UEBQKnn1yB35bBm",
  "key15": "3buUzGj4jYzg279AoRvkrK2e4GVzp4p2tcbrzthybxLrt5j571xaoLFcwFZfJ6c4fBohY2rvQyJcqQtk3hF3Bq47",
  "key16": "3U1aAiGEVd1kisB2maUsvGc5iEyKB6mt7DSvgURyETCDfcNfCTwo1FEg1mdCxUMD6SgjBLikrnEHELPqPMqkjpKj",
  "key17": "3bLNNjoWLPuEw6UFUybeRyYgY5isiKK1TGiCyRXmUQAm464hMjU3rn9HjgBvYxYvfyDQDNB7Yrhwp7S2Nhw1EdbU",
  "key18": "4Hp23SLc4AbrTYzAPgcWzLqEUxAAM5SbcVrtmCmmwGJtFawNig4btr97HcryYdkbqHnYbDTcoGGDLgtP19dbstv8",
  "key19": "2ETyF4i9SzrbV8Tca9MXBWW7Pji4ie1YTbLG7KdHn4zpL5J6tExzBvaCdfbSupxTpJddq6PZLZqUL4ThkuJAESP5",
  "key20": "2ewJ11fQagZLoL4TMM6QXoVeKTN6SwNuTugGc7EKwz9efSnbC55petf9MxefFjbLm8DVDtwrX2p9ESmMThkuTMQn",
  "key21": "3tXoVcJFA3Cg3XwjTwDtbDcoG3ciy2BWBJRyLaicWF9iiti5GHufcfk815TjHTuBcT5Agoa7RNxxYaGioSu8Tigr",
  "key22": "4gienXvEMPpaGWm57cptR4g9Dao65CNQ9dW7AGsL5b42VEmKdUJm83R7zqyeVRUPRZmPLmt1hPvgUMvkXGvzr3nP",
  "key23": "4E4XZHLbJH4TcPx3Qfrg8Z98iVAJtNZgXUG6ecr4jPzEBNB5vsTfyxsuejyu6M3bpQyEUpYEuUwjpsTS4qq83Ncz",
  "key24": "4AFMye2AjZT3dWQLn8kyKQdMdBpdJRMzcQi2WpH8fzYbQ2ro4Q4AzYkqigkRXAAQC8f5xQVB3txkKPHMboqdapi2",
  "key25": "2tnbV1faPy8VHLSEVswn3o9N4LPzVzNM7s6PKnJdCVTyxqNptSJ5NkmVpe3oXg6yQrrKtP7seGXQPRD3VQtyXwWy",
  "key26": "25Us17GW2H2rVPgRJN8DtStCDZc9jkGUb7NQjzWiBVFb3PwJHkoUfKyz6y5bRV5n5EjXvcTgJEZ3RaS733Ji6m5t",
  "key27": "5FeKUc2X2KQeHpyWGxJX1gHpaQrXkAdCosRyDb1nWpwRMUynXEEDH1vJ875sf3watrTYJGquPu1AkdwG4LfSn4yf",
  "key28": "2aMBTBpdjxQ8bkE9xUhQso22i6A4Jdk6yLvmWk8jrKnZT46W67irjWKtybo1msHykMdmvmK86oGWeEbHMa7RCKmg",
  "key29": "92S8MssJikATJ23RcTfoTD9oaTFBBXUZVDAXvfzjuzAYp7WQNN5jhUpoAnCtrRZa6Wq5a1PqX3fqa9YtK2QunSb",
  "key30": "2uEf49MyQWhgVDQ5PhawG4Y86qnc9YWf1BMfEB9YDWwvuZFeJCTwNqhrh4fzYyikJbBqVsAkjRaw8FXF68WpC7WW",
  "key31": "fzcLsxKoTCtLkLy9AqpZf4KfunZeDja3f3Zm4iLwf9LTUmA4Z8iKWJpXkrgiWboWcNYjBDfMR28ejb8hxDs9dCZ",
  "key32": "4vyyGZeohkkumM1UUVz86pSxpL584Xzny3C8Vuw4NfR22Tx2W8fc9oLWvgMkPBxNSnhCnM5sf2zeyLHM4RoDtiF1",
  "key33": "3hpHbeBkWksqGNhbwmUYh3RuGiFrYR86TZmVQQphCF823KA3LL9TReDJz8RkVTsxSp3n6s33ED4LRBfPaW7MCKzS",
  "key34": "2Up9RNuBBDKtnycwmfkZF2tfvpobEdrsmpq4Qro5EGBUuHBbtBpcfQ3qZtZ4mcQ6TjGNFZmWnkdMtn5mowMoumip",
  "key35": "2KnzvE2BKwGDbSvE5mMKTWmoJxJKkgvA9gjSbzUNuCPJGzarAem1LLASJwmfEVXM7yjVaxeMRco66E9qXcFjuQ22",
  "key36": "2RaCwMijCZ9s4EQntJb5U811Pco891D3pkmRJruUFdQrSkE5dwPxcFHoh7s6zNYoVr4mrQq6HWMeHziE6th1Py5S",
  "key37": "4eTDrjxcgaKNo5R4yuPkskaiQcvFDJWxFhsKueHGMgQaRg3PH3MVVJFtoWkaHjdiiDAW8GVYWokAohTL43U1ExiW",
  "key38": "3EdH4YGa318JB8nNY4ha7jyY2r4CfNFZdjDp8gUqae1M6abiKACRWDcCgG5gioFqonfSUrA2os17VuK12F7oJjZY",
  "key39": "3E4kNhhZUWhmeGWirhE8H4iTauFjC6HELqAeeyiPpjV7k6ZTk6dg8xDjZ85VcJkewbmUcu2ejgj7hEFqzSTiicpX",
  "key40": "2skiYBjgqycLkZDykh2PgFXP8e9eGuzRsGg5PHRaeVrgjeV7k51goW6DwH9uea4hticHcTKEBWTpt65uw5EVPoa3",
  "key41": "4o1thdnkGRKBS28youfnWM2nwsuFTP5CBjozz25dUJvHPqgaTSkt9kBRm3Vnn88Jkmsf1DfLuCnPqHB7eVb9MDLS",
  "key42": "27CxtkoYT5VNCcX96wgEi1iyTssELsfBqrgRxeZ9o4eA7X75QKmCMrTeTLJpmK6J6QGAiMRiHkEfGEgKbojJegwX"
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
