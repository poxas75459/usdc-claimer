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
    "4TtKXizjshWG2FzkRj1vSVnhKxRmCB2xgEQX9vfcwr255K5k8uFuvWgUWAzLzZfrLPX3bpNdETDBmQXo8b2Hsf8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hGJrJ16A4rkS1pd3jSpE7XE69mokzyWp9RZmpL5Ss4j7KqRegN7yyZ2fe58UBaoeFSpQQrxVqH4LpdickBFYUv",
  "key1": "3bkvyPRZTpb1rG6k9SoDW8HDtmJ5fvKpAwxoEfjonrANPoAKyVERYAFh5jtiidUKRBXRH2SYYAx8Jr37ffi7RYXh",
  "key2": "3eF2PSCL8E4JodQbeDN1iAWJd6fPgkEBF6uScruTYLjAmyMiSNDTWuw3iVdvRLFAzYgDgWmHieKrpRkbb72AzCZn",
  "key3": "3bByUDZGQNxatdgq7bb1ZubB4q16s3cjgek6uKFTBeXZnPMU5deqxtiKHCxuyrXpLrhmCeR6YjAzZSDJZA5kHvYW",
  "key4": "E3gqaABJgmtfSQbSi6yUb7qwTBaUEvbKnGSquLBJUTyFfh19vWi4DeNb9FtQFTXaJJ4Mho8CEGnYjjzJBBdEJ1t",
  "key5": "2F1xqztW6BkFPxFM9XUMPJbTKEuJhLJht3eTm4axvZysby6bgTZCjKqQTbAbJc1zYJ8hZTyLXzuaYDddEDvVGRPb",
  "key6": "4y6gVz8i7fNiRsprZpBLgXGLTPr9qDHaY8SVk99TLFkybmsQcGhg8vJHZGxsjvhe5UpQyRGcJjygHixiyUKPrKpU",
  "key7": "8PK9vKkdMDpjUJn9yiVkq2QJipCzwnFyV7aMwe6kkghQGBs4S2XLLxYDoYu46XTxswn8FNbQj2obZkaawj14MY5",
  "key8": "2jTzEHPvPBhxmJCaaPTLU4EsHyr7vEbG6UbYQhrWZtSTeqTS9ZaqmHCpXULrjVjksk9rDcEjbenUZyqfxrtx8Bt6",
  "key9": "5vmDye6LCBav4z8LZKfHw7Vv9Lap95BpwYFXwJUe445U1kYezncAc71wEEmjaVhmq4SCXSirqXN87n8FrE6JndZ7",
  "key10": "49aFkrjY57iPnsRDz7P4VuCKVxZEMG44VHDvnzjJeU5ZLJj9BWHXhsA4mdjyTg84tcY44P1HNAkwaGmgAMapRc6x",
  "key11": "2NQ2nT5nYaBYcrMCkqqPUQWrQaufcRWMNAgF7cZGWskTsr5aMKYxWCRzKe8wrPQvP1rDFPxBWAnqod3Sa8nbzkCM",
  "key12": "64A6JW5XeMsbEAhrLX3r3BNwkFzyeVRmtGkpV3Y1Hh47Psfs3hbMbBvciNgaHqJpNshmSD6Ar6JJDSGuiY1gTXR4",
  "key13": "2hz1B1pEZAXiCA5VAxhboGCGTjJARAFXxaazWv9yvHqTk9F317RFddVARXaz4srLyMYkYmpVAtwgu4BeFYArvtXA",
  "key14": "32Yb5Fq6dVbi8WLk1pyEqQ3oFxSpmWNZb8zHwtVU6EiHyh3wNfu59eKiHczQ2DhTHFPdkMAjik65maS6uofbqrVp",
  "key15": "3sHXZc8jz7mudxbJhwdNenRngG6h3jRv3Y9qtVdfVrgWq5rSEx4T3zM7qDz9qF4YcfcSpCXeAzN3ad3maNLstzsD",
  "key16": "3yo9HR3AmHAJL172uZ4Nc8mNbk8fCf1d6x1gCzdJuJwddjv9NZh49uqa4J16pZzenQbTvN6tEGfFB8VrEJT3vZpg",
  "key17": "5PMpRDjvfAvyqNGGp6sfnyuUJq7bPg5X2dzuiRs23xmZZ3XqAwB8osoeF9eNytDE3sQ2UMgy6Sz6izuRGEvRjsNg",
  "key18": "jQNtohyPswLHgAgriRp6Ci9Udy34Rd1NFmePAeQAHUWRbKSGxL4xoXKrSkj1X8XWMf4hPptGSpo8KoRnKYBw8Kn",
  "key19": "oHnm1FuikdsiSzvA32A1e8dphuWe7KsXxTsaCixQttVQS5oD7krZZ4Bg5V7njRa1nT4AhLLEnVj3DLHko7pd2u2",
  "key20": "4r8LrXG3DKLUD733xS4cD84dgfPMXU3g66X8sujXGphQUEZvQxagVZx3K7yTS7NU1PGRPfXjcZ5zFFmB6gmorABZ",
  "key21": "4ZkC5Nzxi1zx3wGBrmZqfpm9E33pivMJFHwEigDLjDBAbyzVs4daFeTbxqQ1pipoSPwdirgvvuUVmzE8URSUTvFT",
  "key22": "a7mhhuXAHYzTF7zAy7Pbz6RkXGuaCSXzDBDDyR94ALT83creyz7dUerXrKtjccZGjjz8y3ELwe2Nvte931ifdTU",
  "key23": "iTXfrQ6QSBwabj78crfXyGiMsxBexsNbZgD5ysnq7tCYd5HEn1B1Zcm4QaU92iTzvrjw7uGejYyApMDtpvoKYdd",
  "key24": "4rebpc9VJoRApPBEnCQ8gAuH1vf3zucBNjD8wiezUmQPfETb7ixwAmUXEBXnGb9wYbkf1X58kVrwHEm8aZ657xin",
  "key25": "4WuyuNiLhJpQaynwpSmwfCHN6EfoKHTTMBngHimvaoueKo5SrBAXuR2qtctkUYR1uF8mdyPESK44RE4GTQpiCJFQ"
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
