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
    "5QNsipqMJVWd8tkACoJQKMVvhZ5YYiLXeZdNSbdbyPGMhCBrJD3sSaxFaB9AhXLEBVwkVMcVdDvaVaQtgDfmtnXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38bFbQAm7scALUq612WPgRTa3VNbutfVw4rctvh7wtS6E4ukz6qioNGFZBTLFKspyjyXSF8GHFLYLbEYF3fMu8Ua",
  "key1": "2HPYQ51fVB7jzBYebqMeJQ5SaW39diVjmK2kYKywTtuhuqvFojvgJpmMrTPf654dEKBv63eCaHvbv6rnndGRTT2x",
  "key2": "pq5gUCVXVQPNrfp1BqrB9dnz7BBMKeGZu3v2FQDcrVwS7fqYiXaQ3pVAAnunUZ3mrsGwwX2STqPAafRyc7baHgq",
  "key3": "4424Ffir4wDmEMB2ZezbUBwm1994vokcE727g1Xh3RTizuTaUqJmFQcCaJUocjms4HyxKpKhQiURnpjrhgrcF5gT",
  "key4": "5uj2i62sd4ucfmmaJyMh6SfHCb99hMZxpoaZhCokBNxunGWPJmsM22cpuDcVGQA56oQwb5cWZhMVyB8m849GKcmX",
  "key5": "2PwHPiGokBGh2F8SwC6aLVnCzwdVUYsm5XY1igyKriaA6R9sobibUeB2nwiLfSFwbarxzg7CjnRdbMYmK7MPMAzp",
  "key6": "fTUkLaPg97j65CDcNsABjFeURFZndASdioJW5egh8ChT2DR3eVLEpnKgqaVpUqBrPQzMM7Bxdt1kdziNs6YkwkF",
  "key7": "39WNDpMFu4vjNqpUFu1FgjDkhdVuj3hftve1u3b8Kqm9Hf6BTYxU8vyKfM1tNQtXwdrHWXQvWkpeVkiLfsWgMH9h",
  "key8": "49TfbiGS3QriDn7hcQ5DWYsYiKaHw7S85SU8jdjxzEtvAFckcA7XAVkLdmCxKjqDAm16RkFg59Ah6fH7HoPmjDMx",
  "key9": "4EGaZKRqMrFCGYahJ6DMLE4dha8Sj5FphA5iS6zPVEYRsSwLqS8ryFT2YgnZ7o9ewTkpTNJT8wQAdhRnSBBBxZqu",
  "key10": "3sGdHPyVDYrFWPYH6ogyrAXZXNzvHho1Zp78aXJcSp8idogkY1PmXuHbuz9sAK4UeeiRo7ChuoNqoXq9ap3Aeztb",
  "key11": "3dmx6MYSFdrb8CJQt1ABZnmtW7YCY8e7iLnwGDTeqYB88aLo6zCzaEXxbWBPHNTd2ugK574pzQLy8jKNKNnM3nMo",
  "key12": "427FzTSk2oEKD6SdXkght5ntYfvjUWCAQinbc44PixtyiEtsk72peyeWwgDajdjqUfp3Ut7UVNsqugvDG7fbQwVX",
  "key13": "4ayds156mVacdkPVtxYwpWqLjRnXTd1T5MUBAtbhihkyWtQRzvv4dy8XMgs8uLe5qKz77a9neBSdGz96wN4kMf73",
  "key14": "4dP4uxjGvdg6z8iwuKjEfMuDhABn1C3uHTJ1CGmRT5JHjZjJhNhu1ewtX8Tz5iEJGHjTdLJLshmaYUVvnB6saPpQ",
  "key15": "66ogHFnEzbyxgTTWDArY8voRCKUKyMMSujwpBupJwN8JYXXVxto9JvhDZSuf4pHY4omPnkTtvrxRx9d3D4k9vSxw",
  "key16": "3L4f8gZgXavnDRHYEmEKWM6tDXfMBV3k3ysE8xJhJQHt5dFTZJi9d5Xu2y54bNZGmpXcU1ZrZCvtcgpSiTkNAizX",
  "key17": "2EEu2YH1zTFsYBRv32VTK5r9Q4pWyKgD3dPVq7RG55DksdAGordP5oQ5c4MbvT1MkSdyk3PzZrcNVs8u2VoW98gD",
  "key18": "64S63RieUBNrFnH1XBVJwg1xiLLJvMj9WtRAQWCT1tFzD53WtVKq4qWqdikNjqTtTJsF9f24C2a9PDGC9MZcKLXW",
  "key19": "2FgQdUwW6HBJ7LYLJ9tYmJax9jLUdyfRZc2G6tLzpqdn2EvCNMRinaoCRFiLbhhS22uAR8KUg8Ffm4SigAqKcdEf",
  "key20": "3ZhqhsdTaqaAYq4EeG3o6vTgpErSxoCXph9cDbQXmPH3nhgdkwgRdtALZWZNsAhEbNzc51SyuX2pMjbCXMg7v3ta",
  "key21": "pMMcriNHqFBzUuzZAhQ9ZJEmYezHi8xWLviB5eZyJJHnzQBYmb2MvhQ8oZ7BGWQwnC72L5rrRZ2AE5hhfi9yCvg",
  "key22": "5S81wMkTYw962fs2nyEeWaDFRfZUg3hXFwo3joA72wXbEyAsQdLMYZovwGiWH56wvH6cRqMVCAqKG8dZVSL7PjN6",
  "key23": "4nk1GMavXPKcXv8sSjQdLwBQYQaqApg83WN3oRpYxiqfvpCmZyGP9ax3uF8x3DWY4zHptcCrEFhiTJRL5ps6oP9g",
  "key24": "3sfHReRuKSFFq8mt8nxi1wf7ihR3Dtgiy8GPgS3wuQzhZEUi9Aoabkmvg1s3kggptg3x9JpZPDM6riNJfMFLqZhW",
  "key25": "54mpkNjnvZXATujf1SYCdsXdAwFQaS4reAoE9uBH786Yswp5FUcBiubby63Hyjo54Dv9xxhcGDki7ytJ7gDj6bCL",
  "key26": "4KpikJGgaBWpFGR2BupnFyZow5LWnGWhU7VBdF8cwfN1Qpy8DQJDfDQKKtaHP64DgygHj5nM7u2utK2FnjVvc8mE",
  "key27": "4gJsB2f93uRifrZHwgoKPsZHTB8LtapVCXAygiV3QFgCayVFsPUiToUJuxYButNUgZNRHL2zRLinjW4mEY4AW6hC",
  "key28": "2v5s6zaPBDNGs7KkBKmTVrTqcGMo4cUyoaZmzryK3Tgk7aYuoGThEoLmLj5vmq1W75abuCaancSU9AuqHEKqT3Ng",
  "key29": "S5xXAwE214EGdgrtSnyjvgvAcDfoQr16BXUBZiMphcJ4w8NnkH82ByhVoTveKpJDFkUDGZfdFa3bcEdwHNbkttb",
  "key30": "4tJoEJLRqgLJx5Pi7B9oApBxdETN2Ddz6a8S8qNj4Xb6nDBHFatmB97rGFwCDNt361hQW9UrsqZVvcghXrYbjCxy"
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
