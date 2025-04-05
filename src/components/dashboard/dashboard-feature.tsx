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
    "5FpaSLBT3vnTduT5rgfJ1hKyJp2dydbNB2n43b9Eii32RFmKuDXnKWVhWW5pgg38gjewLZbuyKSy5u4PRedWJ2Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "582HizASQvXNwJYLBV55SW9BNUHbPLZHoZD4G9BoKFmgz2Hk2WGAm7GFZTvnNx1ECxGHCtBpPbAPwUfhTKJrzerw",
  "key1": "3AmdWDXgsKuNn7GRRG2UsQXscPRWJgRiicZyCEPemEVKpD4SKx6ksDeAAVWXpV4ARNpqoBEVF9ZsYuv7JP9P8cPD",
  "key2": "348WLzceMh4LXRyu66xmkiBBHDrWwBjT9KxwM8eLM4vmXzAL471VXSJQbYMwR3hUBnatT1sqxFitx2BAhSrPnZgG",
  "key3": "4GQKPT6ZCvNX12PuFSfq3BYDgCFFLXzA2AWFJJDrJPRNg9zkf9xe3L9rXvauUgSHfm4dtZcPsyh16TUh2P34ZkjH",
  "key4": "5eMEJuCzz8JNU2B4sjrPziMRQfCYThfEo6XswPiLSawxEVGhHd6b1DtyD6BxvpKryqzfP2HSzmtjY9x5nV3RsW4C",
  "key5": "2jjeJDHZKUUoxreMu8xhAh38mDTfoB7bC2oEuH4MmjGcbyWK2baEiCSJvaFodJmM7YeQ7wx16P2wNDxDNo6BCnKK",
  "key6": "7Eub9fHC17hPt3hVnk1zo6miESiFqxLrXTNEc8YCxV9x8DZDkUGSvK7mftuqvwN1ETGVncMfbgGbudU475h1ZmX",
  "key7": "2DGxsqQgtQLkJ7Qsqv9KyTbqVtpK88n5tcTX3FMszZNE3vfm1zgEwFC1DpKE2uBwPcn6MdkxesKDuTyvNbAxShAm",
  "key8": "62KrPV1f5rdKtSP7NzLHJHHPztfq3DHSXCH8M6hNnrrq4SCUqFAGos4e7UqfzbLo8XiLSRwcpyvYUogLeC5AkoUs",
  "key9": "4dKLYVRgHMG5zS2wN5Y7r1mkZvFJcb25sLRwgSuEXk3z6tMQiHZ1NB7ZtmkhPzZCSEoVa13G4QrzBUqP3R8AyhzE",
  "key10": "rPfW6dQPo5TP2yzXL9gcp4aJ3S7Yc6TtRR3hmWGodosV3jo6pDwmFnJxFXqWoT4oBQpre62A3C4ipwmvgvoQFEM",
  "key11": "36AA6NpYnro9zU6TSkmH9jzXhiVeR3ycST2Bvr516tEFew3iXKfcT3cXaEw3KXqg3armTTfMh36GzHhxz3mAhJgS",
  "key12": "FZxgt6dpWhZtJwXd5Xx4sUuMdtJF8HfEXRBPUDxcq7Lrapf5iUQ7NyLBjbbpHvTLwnaaW8G2KgSkdsmHfcNJFgC",
  "key13": "41CMi47FsGG9dospvHYpNK5QcHhb36GPuz3i19Vq2qyxHQ9rkmiH8Frhbzc25zfe1v9qoeRHEUAbT6eBkPahG2xE",
  "key14": "5wMfGGxoj4e6ZBBzefGqCgQZkz1uPdVTpDXJxR2nSTSxavdAxyWSVr1nrKQk9iwgEDGgtxi8jcavWejUWUQDJzLZ",
  "key15": "5wzkEDoVYrkX42fZkvht32pMDpU9zrQsofHKR8n6xo56Dx8pBoNLKBYc37pqApwosYoRATcMLDq8ySPn9FAGjWEm",
  "key16": "qnWQ4pJFBRi8gJxAoRuf38yKZAV8bxtbofMkf1jWR7h2vadZAsH152cfoHiZMtvSjzyKb2WxCVMxbUERPrNfsVx",
  "key17": "P4K7KZkchBmuavBL4LEnpP6dFCmsVxwhqtXk96tN3d9n3id2sL35GZJWC6kshq42ZhHmDEdRB4oZPPt3kqivEU9",
  "key18": "5vKzhAecTSVRCCYJmPgvBmoU5qbtB6Syw5FNQ6gELsVXDCeAFhPhpt6HCLUufxGGYKEFzFVtaKnktuPcC4iF3bMs",
  "key19": "fDz7nUqhQW2sucsgGxUs76PbEBYr94W1kx9jDcKKpBtAn7NMnGMVfc4LkTSR1hZb46oHVWrx14sh8dPRHttzkRr",
  "key20": "Ww8SCXtnVMAwaZCLKk7mCufUKZYHmuxSXpbRckQ2FX22TJMmQG9s8j9cqh76tAtezJMCUtSi9gF6dYaK1Y6VBGq",
  "key21": "4wiRhkRTxSKPneMuHrwZmU8gHYvceTmbTW8fiiz1mujXaU2M4nYPxj7LuNno958tKfczS61qrG5x9nAnZ2vg5Nyf",
  "key22": "MavVXYMsUtMTCFWVUZzAnsydDgaPRiF59YFZ2PYvqq6qLNLoH2jAfxBstF3ka6ARMJHrz3YV9gVLwgUBBeJMX6H",
  "key23": "4CvKo1PbB377NsyyF8JqVGeFKpq4UtDZE4ohuwt2JDsvAXiZ43aFzJBVYVBA2sGhtuDg64De3S3tMsrPqwdHSC7x",
  "key24": "4iiuPYZ2Ub4wvsG8kFF7b2i1N9wJv7dPkpSKuGdpq7c8PSxuwbGpXaSPRQpnDKpxvMh8iLS1Nn9JA7rJuEhGANBY",
  "key25": "4HP7SNor1eMe9o5qdF3PBrquTY2Ub3YsmDebWZk73rVeGYM9NSaVntggAkD2U6scpahdM94dihXYrPxUkDc2nPvT"
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
