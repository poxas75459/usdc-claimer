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
    "2V9rXwoEkLvMyLqcSfwJgzyVPqNKXfodCtY1oprLyfKJJKjQU9fELBdoYTDJqtL6f3N2jXTLbZwtcnzUQe8QiHow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qyp43N1MoA4R14Sj3ekkwzX2w4F6jXwMPxHkFLSTKCATuyPSN3FxPz5Ff6m31nQKMSRXEHWeYq6fEtF867BvWxL",
  "key1": "LKfJXCrazqgJspwnpwbUZu8RXHMwfjCsTAV1dtTxcnT6k8f3J69nvkJdsURworTiGLU23JkkSd1y6wK5jyYTV4k",
  "key2": "4Up6WvPgPMpgwRAABxzmZUNn8WHFuksfmTvu6eX2xhofCR8M5jQwmCRwhuUuFayvFUCEF4NbRM8F2N6TsUzRQxAf",
  "key3": "tycQLDyHChyvg9SVi3bPp6BxNKvdUCiDXMV4M6wbrDoa2sTFWGGikTKv1zV2fvWdosfeo9LfBdz9gQK4m6Has2n",
  "key4": "oerU6gwueprQfFsQ52ZccBnGeqqisumA7xot5GzXEWmLJJNKqnro4ruNwh64kz2wQsBuvq2Sqx8hKSYjqDXoTkD",
  "key5": "49bCQ7iJgZ9EUsq6y2TBQ4GbQs83DxTrNX5YNVMRtuvR1Z3LWubcuNgzM35C2tnEQQsvCryaseaKSws86jpAU9sC",
  "key6": "2HnN1m1XfyQ4SynLZkxKZNMuTBysGvrv9sdx9M8GihzAveuigixVBgfQFH4XrcFwzzCwb8wQXHE8Nb3wezfyUk8H",
  "key7": "5JoMZUCS6o1cgR8WLgQWBzvAWWYNuzS2ZzCoH7p9mHJwqrHf2J9CXAFLwfwv75i3V8URhm1JKvjneVTwDaTfQcuJ",
  "key8": "3mixaGGCjMJjQGEfJvv3Y6vXe389JJAc5SACchoNfYK5do4EsMWkoyHHMrjqdm53TQ48S4prFsazdKw2VKrPHqPf",
  "key9": "5Xe5yvaj2UiEr2zUQ24c7Yd7S1N4gVNBFbxoAtZV3aedB3KgUGttJafUHsgHDdEXB9mowqGBJxRTfa4NuQWKnPyZ",
  "key10": "5sJQxkdcaieiTUuoy1DC3Fhz342ztdkcUN4TeMom7SJ2jZiSXDkSZD6EYcEnwopq7oEzEGsaueywFFL53Ki8E2Uv",
  "key11": "2ZPveLvPgB3AAkE568DTLEMh9Ex2xBbpMKt85CE4H2XrHHUdCTTtnUUAM4rY9F7JVdiC1jH5d6L9sD9T18igeNmN",
  "key12": "4649K5knV1mMx3wHNNRz7qWMiAaA8ZAR2uSmaYmw867S55wHnrAwC6XUdb1Ycp29S5dzYoFUnc3nc8aPzouedHPf",
  "key13": "41j6YeEeqWL4U6QDBMxNUWKNr1guvX5TwmusNKSyShawkakJghyihAcuoJE15RzXgycSQdegrDDzZv5aHYuGg4a1",
  "key14": "3VYHX2MgEdavrSf82EcHnv7UdSAzLAXYHV1QaJBxZS5dzodWSWJTdLpjU5qgEVW32dwd8HJadcGZXoyTJcbiCqxW",
  "key15": "2zr1Qao4zLJfNLczopW7yuQQfsjMdCKQyuRHaJgBVLFBiiAexmBjofN8B9GNjy9iT144MbRrmEAbwcwFUYxANeUD",
  "key16": "44PszEGb6rxoPEjBBN9TaeE2zCmd3ni9xvAE6W4pWRqSwbk7nvirfBRyusLUZergtHVgn2r4iw6CFuCjoRySwqM4",
  "key17": "3gbNXxxc2agCWfHB659vRJfYK95LGu6DKrHV7HUFzSA4ZzLa8KxY4QH2TbVvZYwZ177T7QvpMwWFD1Zg1eMaPx2v",
  "key18": "wyvkMopKsYbyQKByDYgSbKTQA6vBka77mbjQtcvwa98PTsHzSvsbo3nt8jR9oPoWbthacmKjsP53ZUfsbfVAnv9",
  "key19": "4uJjL6tEkqmWUJaGt15rBf5xMcBFFkKahZQboEiTS3Ee7eqRiVQRCXbyxxWRCmFwvf9Gn2ehYJy6Yz6x8bxFu6w3",
  "key20": "2T7xSMXPSn52kpzTcQufJUpPKrtQ4C7QeHaxoDYs51aWYkARhXaf6v62AYQpEVRAxDw4Hz66T1KLMkQ9bY4AzapV",
  "key21": "39VDtZykSLuMMUCeEg9XJAhg559Py8NzyMx18KUTAj7voFr7XNDx71a9pzhFgAUHG71ZmWftq2HeYWMhgWEYFqPk",
  "key22": "SKcawrvFpzGXapKgvdxeAzrRc2WkABL8C9Zc4ShYR3HpsAeCTTdFaueBqhfx22GcytfDxVhGMGNLnjh6QztyXFo",
  "key23": "zU7z5kDAXKxZPNNjrUPoE2vFPw81XjqkLt3KVvzfCuXjmBDabhXybs7ctwr3WAqSpyhBQj54k3qoBmEjCSM4mYP",
  "key24": "2DEmH11uyY4FUQ9WmK2reHY6VHNFht2gEnLP1nSz8LnNwaXxF5Kg74tinXem7BC5TDTLuN9gkdLooSLgJx4iK3je",
  "key25": "5SKpZUiuVrsxGh4h3tW7qG6XYfJg7Mf3TgSvWGuoDv5g2eJQVm2d7GThMXM5ers4xs1bDg2QSu3Ldxn1nYrtVakf",
  "key26": "HvpUiePSUNiZ2SLhQh3dkYEAzuKETz1eAq5bFsBgS2c5ZipcAoQxKiuYNV7rtWynZvh3zPs3E6xT95FeWTNkNy7"
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
