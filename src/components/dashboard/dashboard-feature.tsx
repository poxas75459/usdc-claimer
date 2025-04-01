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
    "dQsNAzsuUrYfRyHRTB9pRNWGK4prxTppBsNENma6GQSD6WvhhrFGcMUQFV3YphBrDbtJup8tLJnQGGyyRZiCRGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLyr4ozrpKCbqgBEhonVHhytYMyqALvc1rqsLUHzDgam8jpghsXJfUqeUmm4SWWtQqLq6Ur7vUM3KaTBuiFmcYd",
  "key1": "2ct86KPCiW8WkttvU1V2W5LtCqDcaWY1dmFLocu83wAhWbw7U4HzWvE9v76BJdvH5Rtng5xTq16kLVpaGaYWuGqq",
  "key2": "nuTmnGaeDiDiwreUs2D9aaETiPcJaU2Nw1JU119ftP166HLkGZ4uDMyLcG9HGZdTQPNy7cFzHC83FT6MDnKWbnM",
  "key3": "DjX42GunSC3N1dXgEf9v6xhNPgesR8Po8Bb3WsTXqSgkuV61XSXnmCSPD8Rq8T1MEE8VMLENzEX2zBUfcqwpeRj",
  "key4": "4gfcz1AdxjBMye8xbrerLzjykL9stb9JFmwLW7SEpyyqn83yLdr8FgsGA4n87TY6oEXXiGrVvU9qN7hDJZamZxma",
  "key5": "kqxMnKkKFaAocdKHQFHK68exW1SZRLcjz6NBdUdNYzRsgSn38kuo97tXLNAQBi2znbbXtk479q6ThyZptuBSDgz",
  "key6": "3nULgD5XhT7KcAZeJs1zoyvS8QwU7zoj8f6MFUd2UPscGir2DBNNjdCRosE9XoEvUyM4iSNSKofUcKA5nytDaYjV",
  "key7": "44gnj4jPyifMEGns4uEsidQUQSezGVUCzhqGjG4BbSMzvzYGo3sRoSELem5HhdChUvqVyPzKJmuixi2zRi87TvSb",
  "key8": "EpRAs1pzah7sErPJzTqQybjMkWTWKDJSfXvj4aoiqfm3x9RuX9dRAwTQLNbpDC4Q2ZVv3KaAPCXCNh1k2Xdtg5q",
  "key9": "3eVNLBxxFbNTWpW7TXYd7g1jBsExm5rc8U2FKHWN7eSQzUP1zWA99ptNh9BnLFHUyPYqf4SJqQpzPbFNBu2J3yzj",
  "key10": "22WzxkcQuhuFkaUyUVZ9Fjb6DCvpzcKG5xLAsaiqBSUkEB2F4X61rxwTnNHdffJGMwiKq5iPUDnhyQgwgeLwkbfY",
  "key11": "XGxF4qu5uSKEW616Gg2LbP6qefMN6Y2Qj4qjQWbnDaczTeyqiy6a5YTmxnfs3tcLpNoEAFuGQVYbXiKJ1DMj19a",
  "key12": "HjaA4zggAS11ezcHyn1uZBWUQNPiQuc4zQd9YaaYNu43jtMau5c3FcwEU4DsQrC9Ui79eLqZe7989EMX4HSTZa8",
  "key13": "GnUQy5PmAJ4hu3wnWCbzbEZdxXZ2DLuCVFc26jChubQhERSCoTqk7MjuUvvrFmCSVdxhE15uJzihXv9ooANPNcs",
  "key14": "MDE3tFa86Tk1K2MN4W2WYB4uAUtZnc5JkkX1K1hmKJkpuDX2cNrX8aeRKmBTjnN6x6iyRbYvThq1MykdRaPSvdj",
  "key15": "27CWnwRzjiikfTbuiwdw1y3TcH7eWQdGfMYE8KamDDCf7aaz7xdeq919KDwjcHyTHJ72UjxNmgiaNyCCNDzRJZog",
  "key16": "3F169fnQLDnpGjBp4iAJgauSP7YyKYpcet99NkaRpLMtbajL4eqNrxUsP92hqEufBxytCvcJ7kzMGxrrGAwCk3xV",
  "key17": "49tpmJLKZaoe8hv529JnaGQHV9L5BhFyjp8pqXS8yVmeA5opZk6zQ3YP4KKnVaP7wXRTKK3nGvgA2Uh5SuNVhtHF",
  "key18": "3meM9VEyB2NH3XSqYA9AEra2Se4N6oJZ1YCTrnQP3JtJQfZAs3p2U9yYbRmMaGVEmYzYJRnGoTqaAy6kMqskYfaY",
  "key19": "99F3Rwy64okkSQZN1qrtC9u6YiufQY9mLFYbVNfTMLqQBws3Jq6AL64L2hCVAo5SSBQxnbiKQwpSm3R4Qxe5Y2t",
  "key20": "3CAkCizZukojyKNcrr3SwecPcgM44iLRuqwgbch5u9V4tPxhEYiSrP3V1MW98YWoUHNkXoHpweH5HuFPqJiWKcsw",
  "key21": "48Li6C2KRZoErym7vrjVx4yoxbBqiRJ8j65M7WpJdoofJgoEXKE2cdQXFYqGswkXSEKrC2u6JCh4Sa2jQeLVUtdA",
  "key22": "4y31DSB2GVntnHeAFKnXWSUohCJRZfecpHMAWPvkYwrq7i37fLUNLc1Mm5ox2mTAJ9LcdQQ1KYSVM43aSbCVxEpa",
  "key23": "4Yx7nqYKxDRwSMaH6phJSnvmGYZ61JCr59qqqrc3XXwaMcU2Fqy9KibucoP9LLJZAQF4B4BFbYmVemaCHdgNB8Bo",
  "key24": "FPpgFQCqauda37GHWG9W9nfemWWTkaka2LbngqVB8sp1K55q99Sy63TUKMQfv97noohf8pvDYmrn7Kw8ugEqvuG",
  "key25": "32k46ffg6aVqS7Ks9L79zzR1dCj7bmpu8bLDer1TkiiGkVohykTVxCm2q5kTqXebEeoJAmb53cgw3Rm3kEbGs394",
  "key26": "3txAPe9PLftPjXjDjMUBZA3wfcRgs44aM2zBoAd7n8Qh6ffDNm231XBC7qYz5nB7D6ouYrnGDj3ZoTFkHD3n5o33",
  "key27": "4tJzikRSmDXhsocjhwFJavGu1vQw6wvZJL5purPwzHs49vdxgWxrQ6uZeaLNTVr88pbTMeWo7iqRG4zc2kUs8vhX",
  "key28": "3p4Rgbid9X6STiqDQ3jJ1McazdQV4gX6YsiRuSXMABB78b2QmfdBqcUSzC6Xhp4tkjpPzngfG9DShZw1W4FbF6Ri",
  "key29": "5WK2buzKh85MztmKJmPCE3bWWq9bnmgr9VTPXgC5KAtDi4PLzwrj1x5gcSHGq5UngVf1Mg3UY8Sk7vbKdMLvUvas",
  "key30": "42cd9o9YuTStM9ytZTw1w6WnPAbwEtDszoz7aPyLT5xiyp6rC8yGXZZspdANv8DindgYsYjRDKnz6T6WatPH8zMX",
  "key31": "n3ywBkXyxJdDMMduKaLrxJ4CEfMsMrme49wysNoUmzwaGgDkBSQaS26TCXTZTd5zYNvzQxHJQnxJem6t4gY9sUy",
  "key32": "2UB6ze2ctRTF6eCh1ADAbGud81ANhWgZxNcbxJgih8ScjbPsxdgrPtZFdAergGh8YbzmCKZY3MrKB4pgEmdtNvE8"
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
