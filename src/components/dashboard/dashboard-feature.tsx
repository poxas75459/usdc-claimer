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
    "61eu9mQrf9hVnKmotxonJHsvxSMAAi7he8KhuJrfkaCjQXNuo1vz5c1oUxYSC9wZjVpxTbZjyXS73oufmf53VxA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uXKrw476FnKzfbQ4Co5nbvmKurXuYrQrg2GifKJSPFDh16vvBnuyBS3SBY4ACXCNjVjEVn1y93Az7oZW8YKQcnF",
  "key1": "3etq7NUMmMXWsbi9xmK1Ti2vzJfjcgQzmpWbFRcrTMTvGqQJJ5cKefN3N5GndUJ5s5Dz7Zzy3uL6m7zUmXKR6CU",
  "key2": "3UwQrKHPEEP8qQc3THskUiBh8R2mMFgArG7f5S9oJRBrJToTbMBeaYVKAFU8vjn9q3jMpWNhrnf9SnwMhe9uuSZU",
  "key3": "2GyoJYaw3Kjg5pyepx5Gr9VxmWB5LQTV5fJFNdoGY9AqipG69nmHR7WmFhKHREqcy2XCagfJ4cE3VCe8fwcTyKvY",
  "key4": "5PNALfgZCKcm5ntoJ8Ds6XMAToFfBuUNKeBmSVPZEKELLv4epbxeqySV41A45jVhQZmb8UNf4VwbFDmMevqDFp8C",
  "key5": "RBgRoMEjebgYrPuj81esXPyiZ6yckcUoeFKop4qo5QCqjgCoqYWVmfL99PqF3uUa1bRx5b6GSqLu3jS3vkovv64",
  "key6": "2eCM4FpQLrXQtBC5M5U44zndyqxu9F4Gw9TjuSaQtURdwE8355MMk65BUJysULsjxJqoMWYbrmYANfJRruYCzzpn",
  "key7": "hpb2RQBKBXNJkWcrMVAoL2H1JpvN253UWkKm8E6nsBG2SGEAqhR5KPLv3CTFGbRJroRc4G9TmowCLQwBmbq67Mo",
  "key8": "3rRbQG47uBaVGiawyKhvjXPyurKC4maFJbXzUPqMKE56q9SdSCwzdxbWpvdLFds8uNSxLykeEEZ1vodZ94QJLk4D",
  "key9": "3mnyFideyaP15pjSfkojdszwJcyP1dLyXbzXyEckmfN2GopN2WvQwr44ZU32Fz6wsk3GN1PHsbdzzpvYDWcZ5SiP",
  "key10": "2i86Edw93XcTeatDiTBHbKoTaY1no8RmbLexAEGfxKKMegEqVpyJrEnXD4eGfREjEgD51rQbGr5gJERG3i85Hhxp",
  "key11": "4S4uXxs5mGjGdnduMRtYAc79mxMH7Vo2Y7gan9MUvH1aS4PUuzvPRGmgV7aENPKEFinkNqz2f3Ua3c5bejedqWXs",
  "key12": "4J1yHuT84yHM7hkMAveipQusVo5JMNCupZea6pf1zwFbbGxNBBxdhsACDgfNsgGYqUSmfE2aYW3aRYnpM5v5yQum",
  "key13": "CTqT3era6jFWS1Nnd9MXYbtjkVe4AqnSQ6XpvjZuBbehJibuD5Mx13PWSLqoDSAktpC2kxd2vCwXDSK5arzG7iR",
  "key14": "51vzDy7oftZkDDDnUB4AQzgYQ1NGEn25GFijMZHJneFP5bSd93LqWQY6KgKaut7fGQsGYZMMoujYf8z8RNf8buvA",
  "key15": "3TosZsVorMNkfsunE2u2YHqoapNqqSsSKjJfMbJiuXds2vKiEvcJ8c66aqbbweq7oLER3jvGGiPJbys6hAPv7E5s",
  "key16": "3Q4wXS36tLZ6PiSxDhNCJ9ZWqw3foieEXFxRYyoNpjRu7JWTp19njzwPXJYuajxGCJeiCHo7ysm8pBL65bLSmKrX",
  "key17": "3Y7bFY1w7sFmP69c4F2bbr7q6PMMa71bjqSemdgGoKCDVfKKteTqKzJwAzabTNxxdotmocWLDNkE7RYhXWEG8MPS",
  "key18": "AZFjiLB9dBf1bMT417jZA91KWiUdRk3HbU5VWruakRUoSr1bqgFZwiK74wmiZQz7bpnAQNhJNJPfrtyyZYmHrGM",
  "key19": "4RF3jYzkJZdbuRk59bMrhsMWN5VfqvNG39RWqA2XwA5SrNgrDnSTUGFQyj8YjtGTHjpYtRndkiigDy42ZYwdsBUi",
  "key20": "2Ddqg4KKHvvPtNMWCiCpacP3uNZBBW8bAXpQJCHhvuXKCr4A1A5qgbkk1Sc58P2HJyyZxLM3qKfo3u553VcCaQe",
  "key21": "5X6chbLWMdXjX8pwWR8LBnLrkNsdT1TbSmxbuSzL9nsg379V5HoJs1h1fnp3g4pEXWy8Wg4Y9GqETECF2kcRoXr7",
  "key22": "356MP7A2VPaE6htRhAd5FikXRNFc3vypbi5BV6afU3SANctqzNmK8GCuJ1do8qJq7haPEsbwqyuGs3ebXs94UVNq",
  "key23": "5cgunfnyuKJzNmEiPFavjtkcVaetdM7FJi3VW1VXb4eLoH2UqwSbEec5ne6QEzoibeNZjYcJQBvWcrVr5tabUhpv",
  "key24": "4BP98Ergf91Ee4NRRxJY2ciWDnbtT6UrtdjRrFPZCtoTV2aL344PZQnLL61MobihWSU47TNPWuh8PUqiMgozChJf",
  "key25": "5h9gwvMj9GRQJfq4NfNwyMmnUteiFoCE6UeDQiGYH8n8Fh69XxzViFp94LiYmqSLRfus8obhetkdd12y9ydg6a4W"
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
