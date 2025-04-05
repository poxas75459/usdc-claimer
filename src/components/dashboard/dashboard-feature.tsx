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
    "5sq7DzgVAVq9xt5qVsgDWcCM6k57zjC11KCZfwhUoudAXdPbP5QP6wcp2obLtrEycaYCHCs9kvWLoifxQ2cfEkt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzwLwDvbrd8HnQaSnQPLJz9zKqHa7BzPCsNNd2FA4noomEr2Xqwe5JcZYehKYRfe8FkMZ9TeC15PKdjEuReqPbp",
  "key1": "5EPxfNnZJpCTJuanRF1A4Wo5rveUSqy4BdPo4WzKPuG56tpw8vST5PaVRi7bsPhvnvfkAUDXXYLD9TFx214Che5Y",
  "key2": "2s6FfGNvAwQSJXX5ijX9i2meMnrUjjposBRWLMAnDDgbH8726gXWeLUrkXNN1shcpKRNnhqPRxb6S9NNSHduKzm1",
  "key3": "2PUSo69S7n7GW4mPhUqkH6N3KhxLAymaedY2ZfWhRKXWdtibzDqHNTHVZJVc3vmrAPZNRexqQtMmamBVnTWFyMFV",
  "key4": "sybmcGps6kC2z5mR1F3C3qfVhXGC1sJ7cZuB43o4ysctgVYqruYg6ygLRtwLn1BsuBg27nMNaPtEE1bMjbF22pZ",
  "key5": "4CePLk9a6LMVF1RvEHB7H1ZGEWNtdUQ1R8doy1f6n2LH1kwQ1pHSJLZVya61ZUV2uEyY5yfwFPCZP1BkWwkna1Q",
  "key6": "2bjpKzo4qj4KADBnCgqd4FZY2nk3yConJwkGtQqbb9cpqkUjvKSJDXb1xT9U9E929tXxYraWwj2dCw4L7R3gHRgG",
  "key7": "27fLokzf939N23eyrC53skXPn6jhnNywapzm9oMYnGai4JkTpdsxf3mJ6K75BGVGrka1kTm9pXdftzFu5tjX2K47",
  "key8": "4Z1NE7nLN5KzUgToxBVAQ2AeedevnztXzsFkPEyNHxCutkxZN8UT5mECvat1wBYg5Yk6eSyCC9oUXwnCrqewUbE9",
  "key9": "2tFf2oqVa3jFkrd7BmpNXvEA4Auw4Kff1DtSFFDU2Mi3EkVVLSsGGXVXgtgeoGtxi1cMGwJXQJtLnwuNZTAuP3bj",
  "key10": "5WXKoWWVCgfqGrQT1cZjwnhUkDX7uY6mdpRqtEMpPxR51oeSFzxpMUArGbifuaNP91UBgSaAkbGr58SAxSja4347",
  "key11": "3rcoM3XumBYiP5ikBCuRBsX4Ut6n68FwaEWD6XCMNqnx3V7KYGXiQsZoEfxZj6oPM5JE1A9Lq2NQ8aQW7YNRrtzh",
  "key12": "3qquDhsUaih3xYWmruxk28YuqfAzDHdTT1tw3QRioySm5vKcSf3aYntnJ6v8EcBZskbvjtPxo3cCX1DZgiVrDzYt",
  "key13": "qH5f2iuS1CAR2mFNPfMkK4pfSsTJqGd84aahLLiA2KsfJ5NepVrmFPVKjmvQ5ZbVwVJFrUJCgh9ZUubPn56FGLZ",
  "key14": "38bucAM3SPwhiRrTuQVrVda9CMopSk6EkLNZ8GntNWty37h8Zx9sLpHvYgnjzBpL7AY4KbhqQ1KKxk28k4RZ98rY",
  "key15": "3JTTsJec1RVPJFKYVpGAs4nNMYxkwgEpLhDmwadk24158Bn88Whp9jtDhggBKBMiAGTAbdiNqgz2wPKjgfyqPFhQ",
  "key16": "S4NQmWDUWiUCMZ8eTg9Tzs2JCUBGkurEA8pQDAK4aEcM26Vc2AHk113kwmvYuCHvnxqzdr3KYXbZBwbyPVhjMem",
  "key17": "4s9Cq4Z1ZwUBzTkgNvMmV5HxcnLK1rQRtnntbFrzzHMJKvJJevtQvMJfAaXgYdMomzRrmMYKncWeJU3du98UFv5V",
  "key18": "3UHkRtadjHgAvorcMF1D9aQUZiB3EiGufDiS5i6aaUFSEYw8w89zsgmgA9R9gmHiJrpv6b1tJYMsVn3UV3rwU7a7",
  "key19": "5q7nPeSQnSdgJqcW8tPK1tFE7w2yxe1QLQVsyPnUU6PXiM1sPMLho6c2GHgTa7F88JB9JGCtbZeubGz983w1MBYS",
  "key20": "JPkjsk7vAjC6pDugWFZz3g67MGrbw4wM5aRaXKFf7y5kSQxXzqeL5PpSG36tL9bhsFm5kCVyFuHu69wok8tU7Ep",
  "key21": "5VUQLY93LiDQsrVKnAfefvPgNKeqbd8cbUQZ3xJqMkBEuYS3kZmFaQdkhCe2q54nreem32N678x2AjA8uHGwiN3o",
  "key22": "3on5cKaQUwSV7qo65GLKZoPi1EaRK45oE4coEKKCVX2kJh42quJjUxkSrhG628U4uC872R7RF9VCCFE9WA2dzuiz",
  "key23": "4iBidPFPbXrZVemgABnszwTTUykaZtcBwCEm7apf6B7xdaifkzZuG2UtkmnTx3Aw1QTY9RtDRXv7Nf8B6vHTGfCP",
  "key24": "4dsmitmC66pRmELVB6zvC9NZdDwUkVSTx4f7JPDZgNnQjv3qD5ZavCWU3LuctZxntbmHWhdQAJJ2WNfM26xDLjKJ",
  "key25": "KccmWi6QaGUYSk4NAoubR9XLsAY6zZVDDKEFFCT8DiPyBjkY1sAQFTZFq9GmX3W2xp2kfQdmgdUVjP5H5PcAQ8P",
  "key26": "2aLwwuyfB5s71rWbLgfADdXrFhb9z3x1Lxwmvk5RdaWsS8YyxVmsogntdRnXXfrPEazgfKh47dY5SjQRiY4nvvrQ",
  "key27": "2bRaw7YiFVN2ASfBCMzbq2ks4HqcPhRErd4FyPwiFFGKmSPvZckXizaFacGJNzPKjeERbBV8eFM55gvNLn4SUDbW",
  "key28": "goN5hrgh8jPC5zHcwHmMQ9cyDFpJsPW9MjRmS5wi7kS5QvKyZRTDiRiemRaW32AdDVCUtvahZXgNoYFePfHjnRM",
  "key29": "4DR7HXDU8YYv9YTfsESDUo1HTK4fXhp23o1Q1sq1jT6dD56ooRc977yfRoYDMRVuXH9v1Df1GcWvqQuirJgWPpsP",
  "key30": "61QhGQ8GWbJnnkAbMLMh6pQshmUsREdWrdRSwWzbc45NRzrRBbZN4LQrWB57NaFXnnMDUwGyHeFCqhEHHTM9PZdv",
  "key31": "2GH4KQC4TYkSgEkuP2WxMXLsjsjPcJDyPtKVYXXC5xLF1hysJxmRu68HTx4T2yWyseAgUbwNm3WSeDdEBct551Yp"
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
