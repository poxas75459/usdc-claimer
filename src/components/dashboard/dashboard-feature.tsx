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
    "AaqGrfVLEcjCKirRy9efSL6iqyLpSLhTrDe88HDFUGWADJfLVGcxF2D4CW7fdiCVb8q9WVnxxLXgbQ8FhZGZvLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dKjrUQ9Dxg4KfChUSLwEEFHmjxUWMZ7DhsJvwGUQZ8ZwWmphjEmHABCDVMie6NDyJ7WXGa6LSPaM2HoBHL2PMhR",
  "key1": "4gNj1iksrtXfJYzDs1eftzgP28xZqgrxeEtkmptaVgAumVdKdGkinuNUSsQyY94CnEBidCiYDjVZzP7z1nXRniDy",
  "key2": "61fW5uVVyqQiJSffgrrAc8XydEN7Arnba6moUjchUg84f2yBBEZ3iczFrjh6q3DDFUaNx4cuPKZ6psWzzi224hY1",
  "key3": "3VUxw9zaehJMWeYcd56g2MGsPWQwoyNbe9jpsdoMpHxvGLvt2gg28nomNDeGxhiLPcorYkSFiJsJnVAq1XhH21xH",
  "key4": "25cSQU97XWmdCCwbY7ETkL28Fuy2hHjgttGiqg5hTUuxYC5bXbyxqMrQaFGwtYym2CCsfsWs7UkZBEy4VeTZkQEN",
  "key5": "3VtfdJTjyaj1sEbCxG1koxCARVi8rZxzb2o4iJhEHSEG5AqwXfoeLMuewAqv8cRnrV6csm5Lw2gpnRbzKUxsRv4D",
  "key6": "3B9HrZ3TBvRAj2CnxNyd11rYuqt2W4EBz5kKEFBoeghddmi3WfRiLo5Xkp9qCrzv2jRmQNL3qwDvHs3XxkXZTPUv",
  "key7": "4kaxKj473RdzyZG1yx7RDtFrxcD5eUu3xSFKQfqyaRvqncUG3J7zyLMvE3yLcRYsBTNyNkRmyeG2S4FQYhCsRjt1",
  "key8": "4PMKTASQTXKbzL545mSTemgoD5KpEpRiBSPvwec43Ba2tKZa6sCUVr2FXvzM6hmDrLYnR91EkVQwZyd7oGjDNpAB",
  "key9": "2gX4y1aFQSZDK8hsHrkught9q9X9jqRb4bf2FdXY4FPab2XZbKfWYTFf2MBHa1DWaNzVgCQuPbg24yBGHuptUaft",
  "key10": "34XavLXq7Whk4Pvo1yYKJFUg9m6FRF6UjZgwV5BbhMafUF18d5N81cGFWh5YoReWu5u1kE9MYxgewAzwW6Wv4G4v",
  "key11": "5jT5y45xUDKACgyG4L8nN7TuLgSVyyFDY5CxrNaCxyGBP9PgyTnRUrvT824Pm4UFZx4RimCjSwhKC246XNbjbDa9",
  "key12": "42nuWCVN7kFUM3vRU6mLGgmcDg3bXuK8CgRchwdrnvqAVCGSVEqLimBk3sG77Sb9wqUPycfKzcFrpGw7SboJ3uBb",
  "key13": "4BR7mUzkxhvEQciU7M3Jy21orP2ZG17yfkAEgw8kVm1FdbvGTke4KHD3SLhrxzAZGDVyk6Ws2eEjtiFyyLfyUVYW",
  "key14": "4Cdtwq7aMrCLABAJX1BNZJ47Z754GLThKhpF8Sy7UuMFCf9M7JFCUN2Tc1Vksp5u29qPGFJHTwkNv1L5cg3YJ5z3",
  "key15": "4baaocfL2wLe4cD9d3jgEWeegj62iC6tCZtBe188EoAR256pTrX72iWUR2JVXPHN7JkWLRzSJqGqTMeoDf8xXUT3",
  "key16": "sgukaZYHW4v51vMgj975J3eFZFZuEfBBADQ5As6dThPS6aFdtF58ym1aBeqhD7UDcU7r9cf6bprmM3boT6m8JGb",
  "key17": "uxXoVADYQiEcdgvnqjLF6C3sM29wa6AHquyydcXVSrdJiCKyw49xHCzeZSE1CWZ2J6dAGEM3zhmehGJ4tqJV6sk",
  "key18": "qiwXsGsQ6jcjmF15Ligy53HLy6KXV18Y8no4SyWBA8FD2hhN38MBb565M7md9KgXoA6Vnzkxanit6zgLhjGLUTr",
  "key19": "3dUW6r3uGCUZBYPYPpHYarLc25oGg6bXcigTCXHBTQBbyg1AnLRd5Ya84CNAGa5mQqXs2DaKFjJzJy3rrhnyYZHc",
  "key20": "KicZosHhFxrpy2u8xrUWMheEGYE51F5B5ciCSyvosqvF4QvuniaRhfnwf2UTh21GRmY1MHQ67yJWRBCgJe4zfSD",
  "key21": "21s4ySsiyG1bAmT84WsxycmQyu7i5NkQssNi7FrZ7EiKdFbY2PBzDabrcmsJp1eQkSCC694HXGXDNEsqBd6xm3fe",
  "key22": "fNK1r6LVdKfukVchtK5PibKQ8iwAoUXWHoh2HL2UoFM1etNsWT5MqvYydYKCvQn997fGWdwy1mo2GPjpQsiCS4J",
  "key23": "3R5Ygi7QUJ2gezLP8dsgXTKJHFGYLfzzN4MaTKZmmdsJSKNe6pEWPSSXHhz6pLqzKHcSUJ6N1nrguz3iBd9DVJbU",
  "key24": "4ZyEzHUqQv5kY6pfTVDkwWCeFSsUpuoTUPnuvX6QL156NaWBjbJXJDVCF8C8pfKE2VaL9x3St95wNjvXzphazDKR",
  "key25": "2oqm7LbxZCsU9fam3y2DBkFCJC2D6qFeFz6ztfMowvuw15qYh1DnKkSF7a7FK9HKuXEiciRMru2g7uPLKAGjDnoM",
  "key26": "98LC8TJYJFucPUXjUFcjdoSkvfeiesSnCC9Mxj7qHr2f9S6dPH1SkPdfK9GuyV3T4mSJ8TW6xNLVrMm3trGrtEr",
  "key27": "5qedNZXni6iyyafC3S63ScFb3cvqEU6yC7FrRafMxbhQyEtvPyoT7VdYmQWqgySaFyrVwd2eRZkck4DH1H1MwVFx",
  "key28": "3XovmHCuSUVtfcgCzrgaZ8TzUzGi7vTUQmD4CqQV34nwvDdgdLUPb1MNSxHsTFWmucr5DbsHKoaQ3szkwzjwbsXk",
  "key29": "5nhdpAUcwqVBM2pUiYwU5cv6mHXigDUnjPHkwsxEbVeZ1qZXRZUoF5iPcjDcirBksqpLrhpmQnxqxaHiLJaM3aqv",
  "key30": "5oWUeFHXK3TCTr1xofh8P3sSKo85VkH8s8BFGFmWrjUwbKbPEeLuWVJcCnq3wMAbakveDkVEadgwsLPafTR1G1RD",
  "key31": "5BrgxMrduA7CdaiVPnrprQiNcUGTd8kDr71drWKskkkZMeWomAwV5Dc5pcpkDohsW23a7j6eJJc4d7Kv4MDx5ber",
  "key32": "mWeiRsKQ23DtTfuR13yxCBJ4nPd8H2dLCPX4vvQbnrMmQxYzwTdmbdNw5zKXuGbFNkRbdSDxSs43m5QUzNpFP5U"
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
