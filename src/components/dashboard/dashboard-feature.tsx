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
    "3SsmX9EQfG7HBGGVzobjNAZdmXKpCcJpNQSkgsjju1JXs3tNiYYAPiJz2rgA6F7DyTrjqHVHyufU3hSwyBgLGLxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7C8Fh1W6mzVKDzDXWYNCCDPETgaqZiMsiw5xC6GwtAE6eV5vNhT3xwjo7NpoS8DnLyuN7HfrtmoG7HDVeWkEVC",
  "key1": "9SgytQ9WmHoQpEResXKgtdmivcQTkH2UBRreiVf3pHExhoADk3YbxSZTEUMoq9j8jGSJ7F8qQkqhxM5a6uAv6qS",
  "key2": "3P68BfxVfDYpP3u4SKa6dRZvmWNqJ5kN7qVr4FVe7tQCRzGcnwJtnh6q1Z6ihvvuA8p14boYDXXidGCYNg75tdTg",
  "key3": "3y1zVFSmzu8yRnojVdbLvkhK5Jcbpmwj1GuL2H1n1xyfZv4vjBdCBw7Qtt1ojyyzw2oC2b16Sei8GN6iUMKsV9SS",
  "key4": "2TVakQFeSMuGWqrjxYvfZvQD165XMa4A5YX9AZmj5MK6vYZeewLj7M1U9vg2CErX9JXG5DK4dHSkv7wXqiYz4cfA",
  "key5": "2dPAkyUviKRfHkWFXYMVNAmxxYRPcbu1JWwnKNhmM682nFKs1z2wNDvfHszWD42ZDcbnuvkzV6XhQgQVKm5XEDHp",
  "key6": "3XbNgMunXQUPDCEZR8Pk3eRFzqQ1tiTBasX4HZ3FzR6NwzJox3AegSUZspks2KjJSDYXuEenhKJJh4H8QzRyaXDN",
  "key7": "21LZMPyjpuuYdCyTRbyoxZ1dVTGsWh1YfPWzqbHAMy9pioVbZBSL8oUhus6MEbjqAUnToFfaaF8775KiZCMAnFue",
  "key8": "2kr4uvxsEits59362vF8vP3BT9A7YE8vwriSfxQwYcbFDrAnUn7c77rzhtrF8GXn2Ps7h3ayouk4jbL3Q8rFZftG",
  "key9": "2tHNBhAAmhU2x1fPGiTjYPbce8KZbT2G8YcuRZTMLMktsZuRXC9W9omp3viEnHyG79XXCgffd1S36dZ6Gn29HqLt",
  "key10": "3H5a2VFY1oXo6QtLjjSfnu6YXekQr5yFmLrRe8qbCmTVrP4KUA4qCvYJgMESocv1KV7tvnwLXvJwyery1rxKQ6Vq",
  "key11": "5akVYcabwD7uELDj5vVWvtbsyj7P7q8bq9hFxYcCz8GjPzhmZgiiWbcFpHwE7s31ij4rkyexzhKc6Vvu3bheTYYQ",
  "key12": "fDH5DfWfzJDKT7AJhnnYQjGcz1qXGKpKVfMr7it8TqPvrMjAYGXPFGwPRkaq6NxuxmThUodcA4TrLneyHSPhfPK",
  "key13": "43549bwwFejU5i3zsa1ungRL5Hrk61kpDMYfrvUHnQ2zRvbKmJcoDF4Czis5AJyUgSg1nMLQuts3a6mEMGiRmL2Q",
  "key14": "Dq4aUnRteamtnaUg2H3ooYpVyf5fYrqmNMGxEeCVj1p1JvntK2o275hYzh1LpTEQjYL16m9c6NAvkLQKw2axZdF",
  "key15": "5atVAstphuAQkbdtWJCA3rjyvMEVNwWMmsSx1Cd6kscN7NuD4ULgCUSpG4VDZV193i6EWmdxCdXd7yDKAFPykojk",
  "key16": "3WD5tRqduBPD4kEwpxhrX7V2W6WW7XgUVRL2MYtrhoPQU5sbnyucmdx6La4W2neG2NUYJbApvsQuq86Ng9U3xRY4",
  "key17": "4R41vf3wTNq8xSR4mXpQooJ3GPTUd7vzJg4SJU8QDzpGtLAaYnBrQ8RtWg3SRjNij45MjxMQJocYgnzGbjPABXuF",
  "key18": "GT9Nyge9vZe4UCngF71rm6eCBAGAB6uzdgdiapU4QQANqKxaqMtg7KGNinEgYtUFk2q56R6tr81Y3P9Tk3En7sA",
  "key19": "5CGGzbTBvgtUjDsqoQPuTmeZVYwNHDjL6F9gD5rRRtUwu4WSRsybLtZXSrGUeBRNiH4CpimFzpc4L6R3fv7WB6BQ",
  "key20": "2jnm6fX7DUGBJFxsqoNaKSHWJt8Nt9rKhvG63pSBp7w2NfnVG4xtJojAWd5M7uv4MiA1HmX9iod9RKTc7gnNc67B",
  "key21": "48dHoeeao8gsYKrYCHPi63hc8Tb15TY5FYUrh9cojMvGwUimgHduGbmQEep7ZPAkrs679jb1fag5JPR453qxqrg4",
  "key22": "3ojY8q9Mtndkeeo6FQpGFurWJmoDBnWZfHRrYUgHbe8bGVA1PwwUSd7Vx3ktkQvvYit34LbM59AG25iwgSsJsPWX",
  "key23": "3uhgP9z8RShUztjSfhGYarqjqvptW8CDzPNMxaseptwitHqkC7B7BMuZ5Qd7cZQPp8Akyc8JBoda6UjTe38dtPZQ",
  "key24": "2JFkxG5VBfhcL6XMQKrb8Ue8jDiWWxBsWEzSLDTKWbhbTkXXJbXjpBinAozjBUNTugFcfotrmQJV2E3BSF3qyBsq",
  "key25": "5M8AnKr2Z9noqnmWMYsgWyBXowSyeFmUgTT71Qb6Kcbhf3pb3oLng18YBH96oZebCZwn5qq6YKQknAbq49DUaetN",
  "key26": "F6rmB4YvPvKWwPBHaQcXG684k2s6Pbq5DFhTZhn8YeEvpfcAT6RBVPgzXuz82Xuh9X1Nadt8oSSC7njGK3ur5ek"
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
