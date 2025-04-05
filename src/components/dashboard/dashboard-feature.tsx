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
    "63Z4ZFrQUSJaJCus7GYud17UqWXrQxZANo8ijthHzBQ9EjzbmEbu9YLm8upFGe35r1hfW43zR5oEsMQ4FG2JTzHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMnLqHmMGnLeJdv6qhhao1yAVNvCq69xRVC7RxqWSKAUo3KnsW1yCEZTEAJMrcTfNxy362zz9wAfazfsujfWGFZ",
  "key1": "5u26VF4d3ARbKmWGMeVXppn7d1VuTjDSiwNtTSQ7hG4hDskieLwQwnQbEiKZVBRNMtSWd3nU5p9idKiQ6nNoB5hT",
  "key2": "5W9jaAD8U2im1sKF8cA9FYpDLz7fMjfHEiiNLHfwR9YjinPH3QgNMMV4R8BmS7hqNGJLNUj3aaSNS9rdmrdm7jxa",
  "key3": "3tYGzx2K3H44Hor5oam26DLAKYmMY5G8pY3ALYNE62sBRPFZSYuKbgTwtCEvL21p4TNtoxFECeKe9SCEGmecgqqK",
  "key4": "otXK75qGATqJ8Aj9pxzGSpdR83M9nJDLiNLmDWuzBtyCNuCTxgFozNUTJ7rSnXGpz5Gt4do7M6iJpqJYGMzuzE5",
  "key5": "4WwdhRc66wJkfqxJwFpw6y4EvP88LpUSkStgu6hjTLghKhTho1wCKpyWKKA6u9D5wG4rzzjwVLiatJLgjPJyjLAs",
  "key6": "nPnu9vbAfmN3ARnDDqiA9r7i82P84td9ALoMSpezrVKMGYjMCEERhGskC6PkoexXAK1JACyo7RNrtWZFnRkD7jB",
  "key7": "5e3j9hfVuvXALrerZUUj5tM2GNRHLXFZNajvX8fdp8D9G3HGkDahRbhGjTAWHmCzyksUSQrgNDs8wKtqh3NZwezk",
  "key8": "5oymadFoPRQkramdo93uf4mHA2oz5759TGUAaLix7hURgaoRctsePGiVMyggHjVxBcJHmfU7vUyhseWPe6VScbsn",
  "key9": "2DhdmeqdDofFoykBo39wHnzKQJtWwQJSm1oZA2mTYzKA68MDnHktWZYiT9ZSwS19RMF4Vm5GAu9NDT7p7RnWc4rV",
  "key10": "6mA73zhFqSW1tDs6ZN51Y4g7E4tFQebbEQw3CwnU8HS2ocZRtTRANfxen8gPHDvo5m6poUuG1RVJrch1VzWyENt",
  "key11": "32c4mcwBAVSvPND7cf52szvdTgC3TtfR4dPVeUjUXbdGjBpQAgRQe2pqtobmiBJQy4yv9SBrHQLf1Zrfsz7hMpqg",
  "key12": "4NtDUX9pPi7JFDAXj5AdXEh5hV1tZnFTmcGUKKrWZ5WPzqo3SSX7SQKw14upaeQFPdbseTSZUvSchck8BwFLbEDF",
  "key13": "2DsGTGExPc9sj38yWBzERyqAE5nNWp3ypjCa9scfK1aCbb2HFXmdpbVad9iDqRFTU5aCjN1jfMN6NXM3cFf1DhHR",
  "key14": "2ARaLU7Xwr5TKRA92j8zLmvmZGfybvmX5wSbEgXeqDVyTXNzYPppCJ6Xa4R41k5MBEugxJ2gW8M2QxF8J1BqtHae",
  "key15": "4egNUGcifZ61AH1gfidt9wMfR3cYw8DrTqxPULwTLj4tmGYAFBZj93fs5DkShva7Gk4XYjtJvzuxGPpUe98EJKnB",
  "key16": "5BkwwXcmP69WAWmnJ6YUjCHqi8JNaRx4ujLmzjbEB6RLjRyayJAo1zPjoKQ2syA3dGFsCecKgp58ATQwnt4GyHyN",
  "key17": "5Ux5gwLYseXQK38z6anF1eBr6JaFCZMP1Zmj89DPtdgZbcGj57y34t7e7PPTkrarhoxFdGYP6FiS2yBUAEFUiv18",
  "key18": "T5vcvSDKgXmEM5pGfcr454jLaprzxjpnCvB3GnrybKeGCVZTLYdAfrq7RPzgRWWRsGyCVGFeawyYMAkyD9RRSXE",
  "key19": "8cxVxefwXaDJ2vApNAA1pdRAaJeUxP2djZtYh2f5mzqZG5HrXodoE8irFLFNg6pYjg11dKy5PNgGkw9kmGVghFz",
  "key20": "2Kk4EapxRZFJoTFE8uyT8FupTwTvSKm8dmckfYBmNY5Lf6j5PBHyC5EFdeAX5MtzUDmu93MiKq4qZjNtAdVnqrz3",
  "key21": "4ZXjqKm8WbVicN9Zdb5WmSwyFSPQNsarJm2z4aubFYPvcNJj8cbLB5QENCAX143VcvnfMTc8uU26GSA5NhFgVrBJ",
  "key22": "4nmbonHXej9HAF1FbCZuNNNWr2tmpbYcuvWjLfZikn3uKoYvTiHyoJBTdAKH5UazqotKEbRStTPgaC2xjnJ6iDdy",
  "key23": "4huKKvg6EwNBEybEGfoNqrtjm2eNQt6tkw1sHFWAzakqAjMnDcurvKgdigM8AyNNNcj3ETJCeNgXBKtQZCipG7rN",
  "key24": "21GDNnLmGAUU3KqZHsmeeuSJs48UCok8w9Uug3KjYxscEa1iAPveCDeMXrXr3nk2o749Pm5Z4pKLWpWT5gt5Kr2X",
  "key25": "4FGtM7jTYaXK3xkmQ5LAup1Zyi8fh5egV9sM1aPcrmSHqYfFXvgigbNd8KnQ6PVpygQN6ZTMmvdLStWyaEX55ygh",
  "key26": "2639nyBXv2TuLFVfu39ebkSoCjfuPDC3UVUvAZ7rUhjMTtyNMzJkBXYZRsR2p7xidfa1YQSRvZDtAJXD2czaahTB"
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
