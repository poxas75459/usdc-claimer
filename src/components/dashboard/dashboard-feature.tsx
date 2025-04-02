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
    "2xKUCgmJYpWaFh23TD1b5p1SPDbNGX4CBcyfumZyg4YgYpLziir3cGHqjs1axa1tbD4TrX7RKgih8dfqNs6evobB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfoN9TndSzpy3FwfSAxvCZ5fampQqig8xwDhBQ9eF5SsqEznqYyMu6oQgka1FrGRCWHpFyNJxqAjChMNWtxUVpi",
  "key1": "4xG8VCRUwzxqZEz8LrnbFpMsQtuFRKwsPgR6i8ZinUvjhBBUJQPjAhkHYbayjbGoVQ5gMG1anTtpc9eyj3SGQAuo",
  "key2": "2D11h2dAwnEuBUSaeF4KZqanZeTVW8PoqVJjr1hvSFAZzxfZTQUSk44UCtYTvBBrEHKLZkjZKs6F5GZZSqbY3yJJ",
  "key3": "39krN721LCdqabK73GCCcPQJQ7bDZKh2nJp7LHXhfT1RkxPy1HKoa6a3Qvom5GDDWN2fhxdGSEWbEkzXAoCDV3mM",
  "key4": "2KEpTh5aawu3WWREWN1pqzjB8Cx9i5UTpt4rf4UEcbxKaXSJA5cxGXzrztn5Yoso85Fh3MjjRuBuTqyuAE8WzaxE",
  "key5": "aV2GVA1Jv3jTDZ7nuDzT1jsJQowUKQ5rytR7fHyTrCNrsx93hGuMftnibCULbDsGQ1SXXA4EdzxA27ceQSn4RfT",
  "key6": "549Q6NjB3PW2g4ULSdGRC3UF2TqP3F97ohwxMipxFQbpno1gboctj3uyWKfGPWCQtooVXuFMtepEqzAKNFXZxmEH",
  "key7": "mDFEY1buvuVpgR6vXYc5SLhM4PhS5sYLDJM2AntxvkmaLYzbHLZPViADoMaVM48Hf6jKTa3zC6YNDr7WNiNhS63",
  "key8": "4tcirUP4Wh9gxgKYJqfyVCiMQsToLTeBr9vQfFiTNxg4eyZ6K7829gdnkJxvVkeHVginBQNRkJsZYyjFpSeSEqVD",
  "key9": "5SQyXa3sDjXruM1evvME8XfkWVVTACK98N9kBpAobjBXYNzctapsJACEaBFiWBYgFU6chja1N1hwroV1UeoV4rKd",
  "key10": "59zZi3FjACpPu1uZKpXXCHmBpCjkaFUzSA6ASfF5yuVqCqnmmyxuAZ4TEXPFxKUY4NikvZiM6w78e2crMqC7D4Yx",
  "key11": "3QCw4ivFYtUtdcX3sCW2SUhYn1Xx2QHf3RWrUd6EKZkEjFr8gFm8bShBw5aVVnFz4bg6pQcn45ceDv1wB7QhPEsz",
  "key12": "469vBhCefHEE6UbknbQwL9rSG79vo2h2wu3dNS1rgtpyA3Mhn18JaXhvf58eG9NyzLADZeqdvK56KGSK26ujjqYe",
  "key13": "63tQ8vtnLc55zK1GtEa3jkDUeHMhoULq98Q9bRrmKMjFyMW7jYE5UVuo2ryypTbUbjhbSBzyVYHhvbJUdihjsYcV",
  "key14": "5E2ywT5JPTU4wHE9hMkbWfsJKWFN1JsNHmRc9PTYWipCbDhGmrZuLmsrjuW2DaRRvWd8EcGAUcT6xXh3D9HRGLdU",
  "key15": "4kgoNf1iwwhoR2358tsyjaYQG5g5swtXvkns9ieVVUCaU1aavaiDSLJHCUTecFwXsE57RgtcrK7ow1JhpydNLfGd",
  "key16": "5ZGsRQnouE6VW7NLEgLYFCuDWzBsUos6Cf9TLgUFeHg51Gp3gEPk7rmGkX1kCzNiScHnj1U8zEqGtEV1ZDQmtfZa",
  "key17": "4Eksb2u2oXgeKuryuFxByDah5rWXKgYGTmruXV4DmjGmJb4MJL7xUjP95J9qhzEBmiDYZXa393QPi8BA6Q5DRTLK",
  "key18": "3ZangjADnSVfzyckZtZokUEHbNbY4a8jgarKa8tCSe9k5sEqBwojcsefNZjNe7rKQRstJ6K9oBC9S7NodTpya3nU",
  "key19": "2KoYbwqU8BJ171ah6KvasZqkNxhNpsjEJAHBN5atzcJcpgszveLk5Lh2pEP5f9iyJGFnMYv6pUdLynR2WY1mND1",
  "key20": "5vuhvFYx5HusLG6wzEBmUFWLwaJdgaZKwNJvd261Nbp4c4hd7WmWtqEofPBMYmmSkkzVeDZUR9TjJqhAYZykom7a",
  "key21": "4JaxDhvSHDM4L9eixiGqVMNPwKpxiry9i7GPyKWXvPNYQgScupAhA5poNdTiKB7EQS3TKn3LicKidYv4VUxmg3Tj",
  "key22": "5EwhnMGqWn37y1qJSUki1yCvYu9U3VQXQzw4cCb3HQzKM9tNRe1fgtwA26aLyz6HrtZPdztT2CQhqZXukWAQ49Hk",
  "key23": "3HcFboLVUVCU8S1b9wCUgWnKUssdaLKgLWKon8hZcRjrGgwppCPqibi2zNuRk9m5SCAabFnggm3U1aNJZefbUPrr",
  "key24": "344t1tL3ugpv6HKRXoBb6oeDEfRc9qN7QH1Csi1c89mLe57KCVwZrDn7C9wnUnHXfXPUVe2rmgnBstHrwsExUJRa",
  "key25": "HvYitVjfqdvWBHrtzYpFn7pbu6CuAidVhXfYNfXRgYZG41UFvxCEK3sa35UjdW6dmxSYbESQp5LMC35npknfUNy",
  "key26": "3c1YnQRUCUxUexi5iJuNR95DYk9EoYnCKQUyJwcm4msRGJrp16x8BYiZRcqL1UatG6h5bFn2h9vPi7RMJ6A7CyAx",
  "key27": "4DAyBnVvE6UdRoNSypG3fiJcNUGs5iLY2B7j8YqyqMJbK4AstYoA7HzQNSb8c2QgebZvjkLYL5rj7txRYy6ZU8dR",
  "key28": "5VGhEQ629fvcmrtn5JU3M41Jq4r52TKePm64SFr96YvCtkdJL2Jb9EKoHTnQjkYwTYC8hbbkHBonYPX4XfNiA9LX",
  "key29": "5LUQWe2beQYbaEBZdsaAimQEGSPUYPukUi6MB7dsMiDTWaszATe1Ue1ed7Ggv6TxhnsrWV8FRayi4yJkkQfJp1M9",
  "key30": "xARV12pq1LreefZ5cE73N3MKSaT6hvGfCmWe8SU1qJLHt5QCXfc9fJLstK9fTVLvuCsYZdggB5RjtuD8BFnch3g",
  "key31": "3hKw111AnBrQJztBkfnNgSdgQ6qeWgD3XY44rBJeJaezK1UFSzsKiqedmEKPrcRFdifQUVMcJ84foJnbww8VSLPi",
  "key32": "59qsgddgKofzZrmz71oavXTtMpPvFtNAG8rGsJNBTgpM2MwKxnzrwVtu8zY3PgChevBd5ApRTwSvyVKURkRNXC9Z",
  "key33": "39FNg5h3bqu2NxUJvG1kVbyRGUvw87oZK2giU46uah2eKLkr9bF1QSfHtg5MCeRmoaXUSe61ub3P2zeQQ6o3ZdcP",
  "key34": "9cpcqcxaxxgVxTicjPdfMkTFRnY1z6VYtaCRtdjDB7WR6Bkbt7zuxCYtT4WMJ1o2jJ2DSemim3dY4EvGsvCNfsY"
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
