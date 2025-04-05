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
    "3NRpbmgoNRYcuUEFWeB9x6w1FRHYQJnudhbxhdmDQ76pCL5dBxpD2PUi85AYgtVXeYcdxiJjBE8XcnBkinzTQhQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBBRkb2rcKKEjsnu6i73mzWtjqHM43sA9WbTJQgESkVRKSLJkxeu6p1s114uN3YsH98W2jmnJLojLxfQPZji1mm",
  "key1": "4jD2YV9dDT2mTSmrjmqAnY55LUGf3QcmuaYEDVPkhbrQKaxcmKc64ejCxHEW6ZvrXmcV2TQqVJ2x7WghL5btCC3F",
  "key2": "2Qakudyn5eHAomejGYj2iXMJAvy99mPxRQurWgdLVZ446Ta21u6uBtdyDtDNdu2zx4LQEVigwAuYzHy9yd5QCjjr",
  "key3": "4wVwnSXnYFMmNYK567NR2D72hS1tNDX62p86SzSHZkgGe71V8Vuyx1vBtnttkvGdizwubfx81qEos98J8CKq6Aj2",
  "key4": "2ckn4iaCjEB4ZRr5GhMYt9EMgkgi1F3wLeSwTGVuMyBWkjKMj7xnZ7Hhy4fJj4MfVCsQbdMLzC7GYbzGHrQ3vTVM",
  "key5": "5su77kxC9T6ogUZQtN9qWHwZvyvtwZqJn23845YMkGGBt539g5FSav8njiGMfDAB9eToBDmmvohtGkErqj6r98u4",
  "key6": "4NQnSxSLS57QCULuwstp3oN5zU4rLnRpUwKyfDogNwmGLVxiV2srmBgBEMVP44A3hVJEFm8wgYmhb9gzk5jZbALS",
  "key7": "gZHu39nu6U5wSy1tRMHEvTMmMd7LFDeqg7ooQboZjZ73jAEWtw9cbtPYxzYAyPnBKxGo914Ln1qBYLZGTB2HF1J",
  "key8": "399Ya4XRFumGCxaYXCnoDpUT4hsM394cyCFpJi873UrS8dG5JdTqDX1z4nitR3SzFFHj7pesWtSoTtVF1JhfNbJp",
  "key9": "myk6Md8USkr6qHWheZN48T2UhadeLAEJr32n3WNRAuabgSkYNU5oqbgaeTkpjw9r3YnwtVA4g7ADMGfbFSvb1Kr",
  "key10": "21FMSVArKHVEfcpjQQ7xz2d59A7oq8ZiaWMnUNC9ygD1Bhb9thT12Ety2VgXarw4AKR1e5pzG1dLrskv6YjQKpoZ",
  "key11": "aDvCgFZCxctJT4X8L4dupjpeVjxpmqUCguS8FjFWc6AvihNmbwxsYnTUoxbRVyYWSAzdja7qCRgReneMytpuGGd",
  "key12": "5od6VvF9WCFezoujfSSM5TNWSRGEB2kpv6PgZaXN96dxcUWB6iHfK2RokVv7WNNvJQ9LLK7KMKi7r37QhwsJ8XPw",
  "key13": "2ySX4wzVvteacpCZG1YhX2CeUBSo64PAwzQqhtahkPbehhAaYV7UZZgvesErog4jc1s5fbu3CyC4P6Q1PsbSF73t",
  "key14": "JAMxk7a9SXBHU8SPFbb4LTuFxx7YEmHPmttviu5vYQ3roaP8uPc8QbknPeY5HsFPunE1vpCBCtATZougWpnH2AQ",
  "key15": "2aGjL6HLwCrmrdoBJ1RuVCMfigKkJ6gib6qkQazMZbTsgtXLMThKpffwUmxHcW7JM12W6526FJuQVariN3WjSYda",
  "key16": "5XrJM4g3RuReUdEbs12uNswvK2wpXfhKe21yWsDC7mVYqiuXCvyUC4Sd52Y4154wLhhfkfsMEfyTBGnghBuvAdk9",
  "key17": "5wa9Jmbt9EavbeL918eL42w7FhLQTUn8roPoS86cFpPax4YGgMjqeUVWLFhWpopQFBuunhxnyeHk8G5RWDubN3XR",
  "key18": "3bvhkVirEqcvN1H7GojGKPdHyMDnbnrYBbUMNyKgWPpY1nWm3kFckFDdpPGymL8FKvVfj5qwT37BrCQPopdFc3e2",
  "key19": "3NVwbDzND3FXrPUSGAemiwytNr2qQc1vWKVSyEiwAFAEEVvAagjGbBzvaPu2UeARHn2uDwhojDPV4gvWCSbBgaEg",
  "key20": "RNnHYsGPXzYe5qTVw3hhCLnB283499BgHPEGk8bErSqBhKbbHVm9MvR7j1ffns2CQqM4QiSkaVuog6cxhN1o3T9",
  "key21": "3gPaEEKM5mgHKgoWS98PV5si2GJWnbSXdth2DdKKTJk9EUtZ3qT9EFUwdhMpLaVakHAm5wtBfn849am2dUztt5at",
  "key22": "2P8MWiVenAw67dWzkiuxLWijQwXUM7dsSNxTntw5XDadaLiXqghWS252HZ7nrDLkZTht3JtJ3RCtMrNQZ1whzyXG",
  "key23": "GRsk2UiHVwXVVEepjn7ovB1Ao97B7FGUWZcL1Lt43efdEGjBqiUJKfiNPKnBegsEtVszvPm72oZguYUA1Z5v53m",
  "key24": "3yhK8uDPJibvozGacS8y5L2z8KPsUK8MKJsCVHMYUV8wgQbxoChUxU5NomeMTL3wYvT2P4k1TW2yihuSXJUj5K7p",
  "key25": "64PTdZmNFHAGYNMESuiBLnkxqEi1swmG146VE5x26Gx44zUKQDJwRapVvRAUxyvpjQA3yZo3TDmh2PWkNN7eK5AP"
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
