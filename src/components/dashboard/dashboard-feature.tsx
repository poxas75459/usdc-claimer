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
    "4hFpFQnEyLj4kzie13GBDurbFosnF2Vsi4jF8CDwjqRArXCST55D3YY27BPsRkGu8jsPdyrZ7qhBFJqddDzu3pS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Gy9FjKtjqN6z7yivz4QsYyBDKisrCUiw47g6So3xrnyYRQTvjsJ6fL14DMhYqgShroU39tS5dWmoPAbfU1woTp",
  "key1": "3yT3M7CX8u3vSdxr6VPqvwoP3d5o2UTKeAFXB4DzWZdQahNgnQJtfrJ3Z5as2QXSPXWa6sYKqkSrK6ERnezWeyfc",
  "key2": "2TSZANh55vrt4QDyer896bVNb8b8tadajmsKEt1uEux9dSs3gMsNa96mEiprY5LsVcjMYHo69bre8qrv4By3QPqt",
  "key3": "4DrziZoJtwSDySaTbFpAuaQUkSKsfnKsAP7mE7EVhT7SDSrXaNq97WGex9aKACT8U845kDaTpvi5EHARvyuYCse9",
  "key4": "5kbjTdEQXHcqB35GE42ZzVooRTwe5LxNm8ccABSjznD2nAnKFuEsmkA3aofdwP4W4bHynT3uBUUawXaciJ9ShrdQ",
  "key5": "4QTsrcSCnAEAr4qTYSLFvrQezgBbbBVa3T2qfokMeLGzajipSjh4miMgUvUSdpiSuQxuZ27L66Dtqy3TamkcpKxE",
  "key6": "C7WMSwjpNkfcBgSCvXDrc3fD587LWRLMJ16Nn73i5ahpNiWF1313E1otdMQJKhSAD3jbzkoBUg1f4sK9CJUZxHy",
  "key7": "3P9sZ3kHFYAogmHDSyNSKMKvMSmURTnWHD51P7Jhw7B3Nfw47bvWdXZNpasfvMpyLzUXbYHaM5woD1fftVFvxD1L",
  "key8": "TkRuZGmKG8UfSLh5emQGHvDiJ2PWTgfVb5qtsguSAyyxXCkE6pZVhFp5Gj6GfHdpCzFjRndpngDNQBK94iyE2Nu",
  "key9": "4dNbfvA1eDsXSpySfKb2Ruw3NoQNu2sEM799Ugw8MHfnEVnKXkSZB5iNA7m6o11xBo3HSho4idjgWhZxYz7hAiz3",
  "key10": "2dEXspMiyGdL663NrsLNXLnBqys1X3kVJasmpq8qU21eWBQnpd2eGgZ43bKKELM6wBX6DghYjzm8d327LFhcAXdu",
  "key11": "5SnGEW2BntU9ECwPguytczMiQpxVomoA2DnTQhBBtwpAC6HaxW6Wpw8XV4mTwvBfTpvj8KGbEDtsxWhNJmwTPjiX",
  "key12": "5ahAURWw84SS4iHxvqXbSkwFUnqx5amDukoSYSD1PVTaSwLqkHyzCzRmHvs9q7c3SJ7qz2vfsYGkTNAu5bjpV6CC",
  "key13": "33FZszNhoXbzp1bDdenkUQXQSK4g9e1H4XsUQwexnBjdPeaPc49RayeVanTLf3eg5EEwmu6Z9S29Q5FahqRE3Nig",
  "key14": "359evws7RaCufQv2i6uZHvKm3TzSBCrY3hBtwCvAmq5eTW1qWZDX8UrKCzocbmgbTN8UHWeQjr1VvNdHoaMdJR4N",
  "key15": "5ZnUs6vfYUcSeFJ8VbnmpTKKsKnNuykzLHkJsg1v7AcmJHM3WZhTTmwGa2AnQwvZcT2jgXy4ssGVLFcFYvut5EMK",
  "key16": "4bEfUMPS9gao5DJ42T14U5ZdWKyZKzoCAp9pGcxRSkesa4YTdj59q82yksczkgZskVnFzrUHpmqB8svq8YyAFcS5",
  "key17": "fWAo1iwQv26kmFsPaczNJ51f6uwuXZze5kEYN4KRNYMV5TinncmEHMx9kW823nD7SY8mGMyMcEEKZjfkbAJYYrA",
  "key18": "26siNagaRFZ5pQ3Rbt29xSJE2CVhYp6FGkgtPbCrpSVBgruhtTjnWTAbV3kef5xzAJkNzgQ1J26gBqgVfYAzEQJ8",
  "key19": "34ht4Tai5yzf5KWWSgzW92GJ8SgkTpNkYxqieErRPF33K4UgfZhbijyPYwXHayYy7xpivFwM2A35nwxzPbDsGcdy",
  "key20": "5e1iWBMXySZjUNokTu9mSGAQdpmnnxio9AGRdUfGQbsaDFqD1vuwKaaNpFDkmUsjED8jhxnWsSx18ZVjH1yS8zbF",
  "key21": "3tuv53GpVyPXKJSvwfG6hEnBygJPkxtBUFjFjpTDuh9H6VFALHmyeDmADabspDTNDiYnAqhaejx5kecvzE8LJEqR",
  "key22": "2tRtvpnsZT9usggyDVpN9CmUPav9Q2yz5jdUKAYqEQ7HUmgTSGJRp5Dr6yv41D3CMwFm7ay9e9eDT8uBrCAec5YA",
  "key23": "5Cx1Qxwcvm6RqakWHymuiHFG4a3o96v4hyCVtNnuqRqK1y2DNB6HuUyj5KUFArKm3sjfyNECWgRFT2rZw6n1ndEx",
  "key24": "2iPnu2Hz1bHf7tMu1f9UgqyZyX6vQtdTzrx9gUk61gJzZRzMS4ArKeErzsC5ZPgqEsubzo91oYyCeu2MEUdCxqwe",
  "key25": "3LVQLND7oCY3dXXYQLncgVFaaLv312ourEpDtDWuGodW7sRJP7KWrBygoLgn2YiLWBqUNxufjyVhcwm9xyorXXVT",
  "key26": "1DGZER88PeiTwFLNpsAhmQGpaEfmQm7MaDzmajXxiCN57QLFCDRQi7ZAnBsWoy1BpdaLRtmCYF2PHDDFQbCnEj5",
  "key27": "2wHmQtpz2wHUn88AhGzMy6r4ro8nuAUYyQUFDuftE9SHd9Ca7qxzHwzbGAFXR4xAqWnDRvwQdCSdDAuU1mSNQGCZ",
  "key28": "22CnQG9r4vqZxKx94tGQiiJaSVetAtocSearRayapn7BwgkE9JaUHjB4V1Z5jHqre3wQYmYGWMSjU5g8f9nUbHx7",
  "key29": "2rhCAsrz2YPdPF4ipQRRxJNg9ydCXkeHKhZtHM7XS1VTgxqbNNW9rrWnP9W7hQwqFNo8TGwqi9Uynp1LuqBgKWgt"
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
