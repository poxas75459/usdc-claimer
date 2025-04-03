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
    "2KJMpwuMiWrwzRGD9DeppffJhuridEx2fhWEiP2ESLs9XHRQ1UmiNdcQyxYK9u5hARbo5n2YEguPmufb3TZePwg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CoU2uwkibCmDW8r1DY5SaZxfW1TwxfqyHpfjEfL6rqf3fvPVYAHZdsr5MNtq6pg6rnLTvNqHqNKTWRAvEt2tS12",
  "key1": "33gLAzqfF43h3proCRKhA3fLub6JJ87QTmSiMH8VhGpCnPosbzRPeqjmJJuejfCo51d2PzoybKju3C8JBiA64Lkx",
  "key2": "4caqdZVCPptDG3aPhPgRGJnEeVuEFDzcXEtpa1rvxCKJ6eTpiJKS9brKQRvvy7MHyNsBQuUeQVbYw2JbAqepS6fj",
  "key3": "3KDeDJxasAEKrUvQwgxcznoLitqzpnpU8awtCLNieSwcX26ALuhPBG239dGbQxkjSsUrXkWKCNbVUkkKerNhgi5w",
  "key4": "5YYn2Vrc2PofWjNbfD3M9kgitHTQnjRSU89PFWCdmRbZ1moAE5xTgEStB3U7vvqAwJehFvBgizDXGsRz7GNNR7id",
  "key5": "67eHzvvYVzSqSQWPUmX76tMWZ8xxyci4ySrRZyGEk6FDwqWEZpG2CA7y9qTnKv472oXvExb8nNNL617JXjoxfkWL",
  "key6": "2zsqmtjynx3AvuaWCVwasu7jB6QWST42vSSJgEq8vJsW1Ws8tzHJddkVjVTJN3e3dLbztZjtqUszDViEHVZNHFPF",
  "key7": "27m4VvhXjzbwJrirmMj87jM2jCX1fVDdfMr8ZfbD6VCg41QFVQuBm1bsiYS5e1ZYFZsayMM4JKreJ2CUCRqNf6bE",
  "key8": "xfMYu1v61NmrJiBN8Y7ZuzmrY79Wg49d96XnTkp9ybyvFaFW1tQvaBu9n65XaTyivyK9UBi5meA1Deyak7WRPjr",
  "key9": "Btygj6eAyx72QxNJHMwcB5wurGkFwwB6PvehpPBZk1UFin8hWFEMXtH9j5aAFawWVkAmJHvR8BzjXMXymzE1WcW",
  "key10": "5DjshyjHfS1GdvVwS5vYcRqJ7xjXX5azK7TeJwotGXztm7htzjyhe5tyDY7BUFAkaCNf1vhkaEoSwEYPzRvaTRtD",
  "key11": "AJtHgMYWaLmHE723jvaFc2JA45DZpmXAypBAwrNWsCa9awmaJ6La6phbdPo4yHNrr9mRGdGwm5dPefAuPQQR7sm",
  "key12": "B1AVW3cZGwb2bJ2miiMBiNtZbdhpzSJZKaEohspfFJW9YRMCe8oAiwVpAqVEDsSTdrpiaqUgJDDKsJaKW3YnpaX",
  "key13": "4gSf5BGF28cAGLkuUuypyomnVE93pYiC6L6LyrqTrEcKC3nD2N4ZokPSYE8B7xG3PmURmejZGoZ8MFUxqia983Pz",
  "key14": "p9GiZ1TiprorJhENzVyKq5XvKJRzoJGS9ZEH4qw2RbNpDfTobVeAVmdHoCwVVtTALvuaWtca3NPynqyaVRRLziz",
  "key15": "3cS97g4eTpiAnD42EFeVFQDSEKZwbnTu8x12BNrvmHJEKyjF132b8rKD4RiHLpPMcsdyd5GYa1JCHyxLUfyy5Htp",
  "key16": "2c8UkfbGR9PFMmWUS7XWusTTL93h5vSmEXsPBAREsJTbhRG3F9bLpvCjavvxP4ssD82jDSREm9tYe2jyRBU2WG2J",
  "key17": "3dTKt86LWc2iwuKo4CK1N6fDZ9wjTzBHmjrvMvUQfFZaRmDp1kMaKBPeTU9s6yJwvGiVGP2cK4URByoFXox4hw99",
  "key18": "2xQ4izfpb5ucdQ2PXnpMJqSK5uYnTyYWtrE2nTs1iFBmNEXCiQMKEbZToqv8bmnNG6kyQm71EgYGt1JLXp76EkSS",
  "key19": "3HqjxhfmcSKc6s6JyPBCCnqaS7D6vJJYURyYnmLxYiKVmJBLkZEeLAUScdG3MrnoRb6NDBPWpXGU5Kdmj4quqxxF",
  "key20": "GpYiayepQiqXvLuko2CJEJkmoXmkmWkToRYWZbETKXevcThu9xoTp9Yg1UFQXAF1j3NEi6BGZT7rrrRpkH8EYEo",
  "key21": "4MvK3k8fcuDnzGRDRTdtnNKh8fdibjZSWX4PMDWRp1JVV2Aj7azczUSavZJHTGvAmrXvF7UR7LSswwaztJBGGh2E",
  "key22": "2Y9K8X9SQLdom8amKhwVS8Hx2Am4uGZhFo2WmHxwteqyXNHjpVmRdBKVu5XDp54hy8vE4F6AyPjXtp2fNZkUeos3",
  "key23": "3inXD1sjXDfNap3FsUkisXpYJKC3nFatbZyKRmv33nWiq9ppYgeHPNQqA2Z4JDxgQeYa1NHzfCZmaEkdMPj3kUjc",
  "key24": "271HLc9r5U6a9dHUPcmQBbk2NTSYjusLw5TpXbcRxNran98rkZWkZtSCeWbUtDXiQbCJLSfWVv3uk415HGRVGwRb",
  "key25": "2xaj6PfSpC5aMC32ZTiRqcp5dJwjX1bpxjVi9zCJqcnf7NdU9ZekcvadfHru73mDZnM3ao4onmUzwujf66zbnLik",
  "key26": "BdecVqTAccqnp5oDcd7UwijkH934dWCDBNYQGajCvf49AnVXFtxjtZbt56g1DreKPsFGjrG9hY7qvgCmaTrQhTE",
  "key27": "54M1whQkercuY3NdxX8SJmnC7M8U5wU1sSro3W5md1T2GnbcLdDBj4bXwTM7kVo12GNRYS6M4huig6ZAwKvDAmhm",
  "key28": "3VTXVHthmADTR1aCJrmt9u3f7f1id2zoJ43yHj4192E6zXM4LAV6RXEj3jG1N1q6aMwSyf8cFwG9Xoqep4oZnXub",
  "key29": "66VZXDji3B5QUSQWSV8Fx2y58bMdWXmxx3b8KnYrjkck8hF4fE5m9LWy1citmQsS5bJsv5L1nnTWBVZh218A7dVe",
  "key30": "4Vvc97SVf7eAPTseaRZoUpVV57knX8fyWMK88cNRro3QbsbSFtvHSiYuW5vEejzAhQk3NZbfY5dJoxCKRH2RGbHV",
  "key31": "5t8hwuqryRiPiDVBqogBNn6cUfzC5f85YkWaAvBcDdhgWmgm3pz1b6rLZwmNv8MzFcXF6yGyJNm5Wt5EYzoUzq6n",
  "key32": "vaK53qCftzhFkaDEdwNiJsCXJhqns1FCBEUWaKNzYNdsxGf2vPCLtyYTET8uuNiqUuuKXZvprhCeuZyw5b51rya",
  "key33": "3t1PpDgRqp1hFRUSL8bfzaLP7Tg53hWg5DtY4YCb8dkaMrMUsiJXSnzp4RmXsZxgLEkED9jGMggf7Adnr3Zr3gzg",
  "key34": "4KK1t7wohEYsH2C36x7GvBsofNmjyDpexGcPjkm6dUh2xfz4bKtBbCTYP6FUy8iw8HbtKW8cTqv5L676JAs17yVw",
  "key35": "3vpVhcwEgid3N86DtBacXn2ikpgwNsbgvsnnoJDKh4bwL6qgn4VNc2qgWUackMEyGXnhSAQ5WmuYjkySPSPA6KDj",
  "key36": "38Q6neSTkmvX2T8yhXThcnecuKxpCE6qVNDfTEYcCV8oTW2ctTjrbpAVr826JuukjQ4JZQCi3no5CeZQ1YkmnY59"
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
