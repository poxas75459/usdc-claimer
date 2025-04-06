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
    "4eywg45nEFK29VN68XkppmEQQmr3UP9FrAZMdQTvq9sjj9hNqz49cvPM1AJQNSgfYeU1iiCyrPshFwEfUpoLAVwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqRgaRDwRrhSr5vYNeexfAd81VT3ta9RJ3E3RMyB8ctDPudBdKLMjsu2vSYSXeygTv55TwhM5k38BjY8iGPcpga",
  "key1": "58KjWPu6mWcchpSH3sxn9GFY9FzRm9dj9EgxpyAC82eEw5iuDA5tG7f4CHmZcrt1UM8YvGEknL9pChgLVfXCLz4",
  "key2": "uTyCPbH5DfzFGHinJdKsWGdL8bgQRz2oVi2GH7yaA2VDLNCq2gDVWXPw8dCDzeU817shBXE6nxa4iXwZG2X7vY4",
  "key3": "Yox5hRGvJkR8WovhDgk4NEhLavManifAZR4GLg5mizuoqBLT77jj7WtuTVHvSzhruQjUW44My7hLTLTa9C6Gq4n",
  "key4": "6XYhPTdSyxEjmtDvMLm1DeRos7fFmCA35iQg7qjrZGFk78vgPkpSzxczPRgqaTceeo3korNz377C76YJD1ESd2D",
  "key5": "4BekhWJo7de7tD3igbPMpbApgUm78ViNgDndGU53Cqw7syHviNJnP4Xk7xLZKSApaM4dTCe7ENzUNGx8eP6j4dgn",
  "key6": "2DvSNHhVCSzqzpvnssua8WaoPYia2LkD8fzGwTG7LvQ5GqmK1ytdBgke8niDpvjDTzMgBpoZyTWqdqXqTNe6rJPx",
  "key7": "2hf54oZcaSoCE8YSWRMBQYZwA1rjqfa3NyQL3TNfmu3ZmjRpa4tHWwWKLsNx5eYEQyYBDdsJXtGZ3bSoYU5TrkCP",
  "key8": "3w11Vn7oeC7KXQCvUB3rCGimJ6Daot3DUaMfPEGNfCxSZbyFygzmnZSHuUYgpD4Jw9J9x59sHitZ9daEpo6q1TAe",
  "key9": "n38QW8YQu4padkDBWzMrrmKRpwJyPVU8P77Z77GZfnyTZpo3oyAyxWvNAC2UHHDmLisVfovg5sQP4S5WGGCw8Sz",
  "key10": "2gc91h6pxZPePAEo1dVrBPYdKzXvhNQrGcHXZ2coj4P9eUgawYgkvGEjmAxYgDsZr1kEFNNLten3a67avDFWjGQm",
  "key11": "2564gvhpRt4ytnhHqZbrBiBzXPkQbbi2K9VSQKj4UWDHnwviuSdSvDXLtuQTQtFXFdt4MTNPnUVZTGXhy3WJpPiK",
  "key12": "4wAmrx4YvjTNZS71QuofL7u7AcQFRaaKGPQZog1DHzAXY2EqM2Xq5he6SgFVECGQYSGsuiMLCKFDSwCoekbUQVwJ",
  "key13": "5cFMhmQy5TD7xRFKdi3VkrE6qwExA4Tk1ygfFTxfR9JvmJqoQJeC16Soo115sggcj5HZdUgUvzhktbW8m8m1Nc3k",
  "key14": "5X58reB6iEthr9RudtFxGfLBtmxUHH39NTvdxUeLot8sFseMmng2yAB1tqFkE4iZHzqHerxKXwarAxJ5xRKZeqxa",
  "key15": "5AK371h4fDuCQiSA8K3YwmH15Cw6tFkabK5x78qporYwEhkDebUGQAzs1xd5pXnM4Zs4PjXe6FPDCfFstmxoX4Jg",
  "key16": "3JEkjXDnU9SpupSqxTKREkvfhaawk9TpktHbyh2Ug9zQfMrpHUQWhBp5iyh79yfLLowuqEWRWvcuCmCZoxfVbM61",
  "key17": "4KSd4YFiQqH3qyFgp1eoZN9iXZ8ysPba71LFVumHGT2S1KSK2ws1gSJXUZbGiBHKe7fJMKqoUMypMWABjGXsLo26",
  "key18": "5jyZtLK2q1RpiyJ7g8rTSdb15jUkmqkFeBor7AjQhBDFLvpDvPPX9EeuPdGuCuPqFDNGqiB9oaEZGHavNsPJRWiw",
  "key19": "HBUmvdELmS9En96gPfh3MB56fKbmzm4CS7rTwLNZoNNT1sJmRrmKpk9sRvUpef1iytZnURnbqCHp3RZzMNhrQzB",
  "key20": "5QvbZAKgyHAQUHcdYZeykLK2mjN8gdmg48bw4ncsFY6Pp2jGETqoQo7bzTfVWy47mP6Gs1pEAnJAE8hM3yC9HicB",
  "key21": "62o8n9EB4umhq9xj3oHaxv5tv435vTXsS4uKWGbYjxKWx3tGQo1WrgNUafmN2YV1KcqWuMCQojpbKdepzLUchtf9",
  "key22": "5pcYzcBAKzHnEGc71k9QxbY4n8DWrhrszjWkAvHERySDCaRiSUck31fBxiJEjYHYV6GcEHe89Xd9yzNqQ6JB6Wdd",
  "key23": "4Ats6G7PKqrPTU49E7bDacXKu6AMYxsoLFP32DZCKx52eDdFV79MTLJo8ifPh1Ps7qErcVEojj2FJqJ5Qx6gcXAB",
  "key24": "2U3ZXhELLadq66mrKB2NQPkTG4VuQWYhP3aKQenR6hoG4YheTgzCHPbXbNB9ZJKanUAVNrTG6JZKdYv48nK5xQoA",
  "key25": "x4DUbNA9MCsELg9YaQPFBBonomSNGymV9tKG7p7d1vi2wWC1nhP34CG2hHr5bymbsf91RvR19GF4K5bb7d2tVWh",
  "key26": "32ERKNE23YpfWKh74VezLtwe4UCUN1v3gX3EhwbgPFyTQNhnafY15x8nkmBbepsvDtmn1gg6Su1nVcP3wk1XtkRA",
  "key27": "2ntRBfMyZ4ZB5Ros5QVCCKip5iuXLyqy5jKwKirg6adgHiT483Yj31gKjScVFvUx9txNLxZtmxN4EiAUGe6pBALo",
  "key28": "y7GwyJmKn2JNpcW3Pboi2fbiNKWTtWtTFu8JEwbSyHDLWiiiCdUBEThp128gzh1uixkeU1sAo8kgS4LhyCBAhhy",
  "key29": "oYy7VuoCCsdT3LZCzNdCjAdEPFyjVzG4hTeDnxsbifbQpwoFeWZ3QWV1v5o1L89jtfctgyTi5KsUfWohGLZnybB",
  "key30": "5EpqonhGJepukHy9aa9jfSdwbWeQrEUQi6MmJphS7V3poddyrLpg8LtM3uDUjJxSVPGHt6z5f84dBYbzV7c9tqTT",
  "key31": "5eyeWTKLDJoyNF8y3EdRtnBqoxPqX22Tt7fUmGoV5emJUdvoZYJj3krmAbwcRCQaQA6HGavypy772ypudbbSeZk4",
  "key32": "64Rngwc6WLbQWzxpYwKEqgeS9EUdmuiPgJeDPQgSSC2rJXiwkUUx9EJ82S9ScmMQxRoHEj2RGTrCrYmgmfbB1sDG"
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
