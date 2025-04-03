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
    "3zKHjcYDvtP9AXuX5gT2sQxgXeQbX9f8eBKWPwvntatgjPQqtkxwzSUeJroE9ZXqY7nAu7t4yynvVVMnqaNKX44V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7UPxmUxkrhGYJ9yaXy11MS4jNFhowa7eMXmHg9sVtEq96Gv8xMCRSnZ8349e6rN5wpvbnZZa9BcgMZrx1yj698",
  "key1": "5YPc4Tr1k3BLbBsiFcCRcqgubE2Jv8Sz5fTvzXTuG1WySddLaeWDR8WrY42RJwkuyA3aFx9Frw5KruynvSuQbtd3",
  "key2": "5fxHj4HR3inxQzmn3SDA2Tjb76iPsYE5Bi4mKn1SpcFPN7t2rvzkGxF5urcfpr24vRw8KSAR6cRicoHoVrf7cnko",
  "key3": "3WQ3CSVVcWTSeeJ1yXg2UQTHUbf3CVu1NiZGr4fX9JTFcWmHseeCS32JcsjhB4d4rp1GrxTtPuhWWqrVHpSEs6zW",
  "key4": "3Wii5hU9WB7LyMiJbTuQd2fVAkBuMCj7nrgm945LwQkB7LcYhDzCgX9bveqmSXTK4qcz3HD992Jva8Rrw6upTqWZ",
  "key5": "3Ss3z8eV5EPUtWdTXJPYBhpV88FAnYC4keg8CN2jjockViTZg7yjyAtL7JvoJUUGbsWrwYCkAUkWowUxYcXKxrKe",
  "key6": "zE3FXp8mkHvTxrCSjsT6qa899X4RYS8Rca6Hfvv33WNTHE8PBUddKBvtZMqrjtP15piyMMdrsNvARFDjmV5hNzX",
  "key7": "4cnYo5eM9Lz3rhgbgdcnQrmfCaw7UpLZ5hAYgf7ykstNbwCYiXTbpfSpH967dKvkDejhaKQnjYLXbG4UCxRu48Gr",
  "key8": "2f9yS2rwaE9AgjzXRhyFvjRvYuzFf5BFRzKiUg7GnQC2g8TUhY2uqawFTmYMGxk8pPWD3yW7Hu5McgNGXuX7q4M9",
  "key9": "4iCUqP5NFzU24RSWKA1p9x1mdRWBAsD3NE3PuqfjEA4WHchh389f9sstQrd58HsVQ1zdNhCjCyD9UthckVGvDm81",
  "key10": "3KsvqHLW5dfWdwk9LnxGrtTxotF2wwUzshHq46HpLPGi8mbfp4QKkMGBNyt72sy3CPtziBxVSacbWDbzuwERNMTk",
  "key11": "3W6hb8d8sYwm1MTBxvRQkXdTqFtet7y7x75Fwzz2YVFM5m8i6Pi9dyBgncxBr5K6XisLqGqXYNAr4c6FkPWRt9fA",
  "key12": "2BCet9SpenYgMcmK7HB8nWAuDmhqidWAwhF1FtkjMiMgBZfRq49f3aMARhU5odiWEaaFyKzh9DFwt6LYRAWhLEKG",
  "key13": "5uEnAHd5Yv3sQW181toYYuawmQEMsg86gAkxkyyun8wvgUA2jMPuqToDwhJVbDcwob88d7pqso1cPFBRPf2L5Cfv",
  "key14": "kQvRA5Wzb1eAdM8ocxP7c3Dy3da3bgMmkcMZ8Rgj3mWF5oGxeAs8eXkzFEcU5dpftWcEiRFhZ3CABtxDVSaUcUH",
  "key15": "4AeC6Y2U413UknpcPLfGXSLmPu4XT4WydYTZimFmiKUudRijkCmo6iGaLvugXJ9YRZw2QUrh85S3VNUjG6Ezkqry",
  "key16": "nHxJKmRwRCXtMwUzhA3g4ckaTxYKwe5L7qY1x6m8upyVPxWMcJk18xs4Kkz6ncux1MTxMo7qJ12hi6YHAdhoTbB",
  "key17": "4oeQq6mnhskWh4N46w9kmQZnnZ5gXJESHcB1ZVvKNQnvKYBV9YcbjF8tUd8HVGWujjejfJd65qMYjFqnhu84Bokj",
  "key18": "284UGSWAoMt18UuxEbc5KDKXGSD9EqzR3AD6wwj9QkQD4RbWP32WzPLk5rxqJzATubepW17Uw3JMdx4ALCr3E4P9",
  "key19": "3tXFqLMuipoCCQPUJbc8GELj2pJr32KV95k8c1Dj47J4HVE7x5XuArCju6sG2uY3ySw9dcKdV1LhWgvnNj1VtgUB",
  "key20": "3Cdthnyip1vSzpreC377pJpzJ3AKenfgmXoBLiokQ8dVfXYehsfWFAT3HzL9mCERYHvVakPxtJnp7GyHN1pKeoZK",
  "key21": "62CtLFjctvps3uoVua7oQqXhKvzXMuPGjY3cQRhnrx9XzvH1U6TecTXQDFuQeRgk6dmLgtgmZwzG2mztp6mgRbak",
  "key22": "iXrjsDyqkgakMi5pQW2nqmqasEEaVU6aaDswnSo8d1DsktzJhDy3gkeX97vyFDfogizPZoJj7u66MeFnZzKRuFp",
  "key23": "UKwvjwTAvXMnwk4NVuAzGTk9qVmyr1v6NwZmBDNavBgs7ionG8qRmApS9CrNApfwqKFJadou81kxLuaXjvzLtV1",
  "key24": "5MDGfxoCGLHX1WhM1iaKrTYxBvzZZWoA7rAFJU46JMo8REz2LnWT9QEETbiLrGRxZSVbfcaZQt2xcQdBa7fDFTfJ"
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
