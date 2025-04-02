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
    "61pbAeoefcihj14JizbAxTdQHWsnbosC7Hse5C5hh5HJtM29TW8ziu1nrncQduszXRvvfpqCzwBJK4NCsLGEvEfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFCUhSQgQNAztDHemj6Szmz81yLwmjVbMAWcyEUEnoyjLiMeMEKunknntSwsSr5RnSXK5r1twfcHhCFUZWtLgEP",
  "key1": "4zsjnySrW1NBfHhFWHu8rWHqNx4FFdSyCWfS9CoXfFP7gxHqwT5cQMMMUX1hPWKLtz1BJw5SyiszKoUridAjMBDZ",
  "key2": "3NXELGgLEbDvbD5h18Y6akAgQtVEad5wrYMiWVtC1gkmKVhqQuZSFxsmrT3AntLyg6sv2yYtTUNmYyLQGPGjyvfU",
  "key3": "31ygWV6bdUyq3n7jjoLZRYZLGudJVzDAwmdyh7hSJnfrs2E6xfhvB9EfxbxP9jz43s8r6uhTZC44wAheabnBtbAZ",
  "key4": "4EajuGyDQu3qC9n5KLgN27sJQb4rtTEtsN6jvFWFhoUXWGBWHyFpoYL5XGYgrDkjwnHNdZAjKse8iGMtLhQ1KpFu",
  "key5": "5auEGC3aRMBF3s5nPimq2xAk5kMUHksuK96XiZ69rR5v3fM1EAZHdcsFBw5QAiJAzCDBDzvXdpa7QCmzHt8odSue",
  "key6": "53RGQQPUDPXXV6k6ewh6TsoaaBdVGLfW9gaAdXvcf3bzbpD5H3oQZYQdcWByY3ue31bppcMaYMg6AdDBxaRaqpz2",
  "key7": "3JGnweyYDoWvft8Zm352i1bS7bQxrWLq74xMwPLeEPgNCnc97z5YL8EiN9pLs6g9fEuwWhjdYspi3jpdA4Wyft8t",
  "key8": "2a6FsfsGJPPxqGTSo9ST2kMSCgGvSmWnqER3hg7StAeVf6tdm7881XidMRzTo3daPgmFnPhrAosrVsL929PYRrYV",
  "key9": "4H3t5ZgyDUpJEpCSKhZ1U1CYw758qqSwn5FotW9kTHSoX2gC3J2HwefXbhFnm1A7Bg7K9rC69MDg4AkQAZWhmuov",
  "key10": "2AuP1G56ZiEXWahXtdQEgFXT7spn3c7WqpcbcNV85GzsULhLyfsC9xbj914KHNVVJcVccUPoThWm9qJ7sUzKdBM6",
  "key11": "3bCrV2gq6fC2u92jR34o9ZAPePjWubAjb1etgvhccn1VPzMP3iLgUn4H6pUH3usnr5b5gqM5mCAsUdUeuvTruTqr",
  "key12": "GRA1GQXvgLoeFPKXxqYj83oNQzx1apBeqs78cN76UrAR5tVvvG97wdiHwWZXCsW7vmU5qc1v5diVjH1bEY3zqgi",
  "key13": "5dU3g6uAwexz2LZb3PycVR9rti8xrt2bmGVY4ioFCPobfL1fFkV6eUotCH3qiGY98uLDFVqpbDLwxqBfhov1BTRB",
  "key14": "5Rpk4gxcthTaUmhPxAVpQubLkET7yC1LbXfG6hBG6jsfK2hx5RN2WDs4kvzQQK641MuXVdsb1hazBxabeg6FRTvd",
  "key15": "3As45PELbvF2ksvnAA8vsyHbvYBgwWMMDGpeLzu5A4ssPVNZCSSya151C3eSvrrJu8C2SUomM9GmAWdzE3eUsqjg",
  "key16": "4h8u9HCfD8gZ5wVDi7Gou5rzp4Ev3w2enFs1G9ZYjvaany8nfoyszbFdTe2mWC2SeNC3FCG6btrWBPD1KZSEbwjc",
  "key17": "3AKBfVXBruVgFLSsEMGb5c9cjuvDAyhynWL57i73n8WLMLGNcD77QXx4tdR4fEFj15Pc4LywYWyL9he1HCq5kjZd",
  "key18": "qij3rzh9N9xvg4h7A1iFndnBAALN9d5a4VdyC8KddN8gum7icafymoPHmmjWgbjtJudKmASh6DZrXQgmEWJSbWU",
  "key19": "YUpqcwUGNrnBmuii4wEMq5yUbxU1LZQW8x2NdGjHey1Dj8jNErsimEu2YR9kQgcks3KLiNPqM8NkypPfhRZ7VDk",
  "key20": "3v2w4fw8FuwfoPndez8GrCRJkwxpvdbawsnBoFMxuAmTTfZF8uaAKH4fQxcbAFDVyomwk71Lv1m9e3gsFnagGmbe",
  "key21": "5nrNPN89Yh41Xu3VF2yyi7tcqCJVjvPEs2eP4xDp8P3yZMo3GU7qXkKCcvsu3VtnovwGY4BN64HcPHY32LEi4bxP",
  "key22": "4ScgtKpycn7KyxocVDVT7Ja9xC9euoJF4MVRvjdF6eSGgqRyU9aJLcNFJmQGbWZZwvmqJ2XYUZ4kWnshgbzTfNzc",
  "key23": "CsAoBAbVSFXkShG9eZ1Bon8gaWBoTVHLJrzohVkBM1Gu5bFYzs5b4GphoaF5LsFbTt2PYenHJt3CVuQ9LLVF6ak",
  "key24": "4GhERSMwUsg461DxUsKq8Wxu7yQiHvRJNFkFkTktSP9pfZeHcjKTBvoi6tLGdT8z8ZjwBkA6sqXDRsjnPRViWShB",
  "key25": "2a2BHkMstw6RxvfkutqovcJEux8Vry6oQkGYDkcd31jhWUns3kWgVcEMTgmoKJD8exdeVxJX5uhwhmTEsvtG3HpH",
  "key26": "HtXGgV3rCnHe5S9bFAyq7yyAZ91NtN4CgtBDux6rz8JYbxHfrsWbztKUPWYqk2Xfbm27Z4ETp5RZkEKZ7GhRmjr"
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
