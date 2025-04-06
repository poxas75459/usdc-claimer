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
    "35YFjD3kFk7KrUrdq7mfdpeVdihYB7YM677hRCNffUsRew9VG9iNRF6skTJGTQ3gCXZW9WCm44qMy2bxmSChdeEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FArKyJ5ZBkKKE9pKCbU5B2CE6oKgZM2cdWdzeSmHSnKQiUcdHnFRx4zSvXTsFs3d85mBfGBzVcxJ1EKKHTJhZ3k",
  "key1": "2YYDGjbyaDVhnPKakD43uYsgJuCpbxsNQvoxnZ9rQbP5Y4nowuKGGV93ra8SzBEi4q4NyrrJe9QZco5ocd2vqQJb",
  "key2": "cKCsxWuUyzqkvFetRZDy2TE62awqvvxJ1rAH4Wx4kxaYQ8xgeMVQEEEpmu1LyNY6zer58N1Cna7p7H67TKoZnPD",
  "key3": "3jFP6BcGcnTVatnhSqa85n6bUvxo2ykxXnEUMEq9YNyP7u7wVM7waw4p8r2GpF8p2on5XmLLDdAFUQwLQBgNKxjG",
  "key4": "543BkxRJKHG3J2fCXgM5Hn9L5YW26SiHPjvaBYvYUAmTZtk5gozZKZbLWBswyTNAdRMubFhPxWdmbqxgQvdCit4i",
  "key5": "4bUBagUGmpWEp9NPvnGCBTdaKVBiogDs9kzhSHaDmgguNZMA3MSYRrdAhdTGkutHprSJHQxDX7TtABKMxiBN7Sm9",
  "key6": "2uqqSBhM1bVfQb8oTyJNfjgVgppZYjNYeYayc8gWLt9ArxgPLQyD77PbGBXzdzincpyMiY9216Nm3vzHwWcJvdZM",
  "key7": "3tcsse9s8kCmfSbPkjavtKfLpnmerU1iwTUpSNqMeH9r42BUkB14BJPK6Y2Hm5fmzyXBjooFepyFe8WPYcee2Bzq",
  "key8": "3adeKJNWsRLJrA9VYhYctfboKv56vh6uRC2isiw3HerwYBG3NmDnhMQYgPBtyEaHjYmy9QcR4vDZGd1XzThbABH8",
  "key9": "vLf2b5RhE2pQwohbbuCEykMGZqVbU6RVfvADyDv2YurWsV8xrTeMNkjvYJoNxhyfKhyenGCGjtrVGoTrWaNo2UC",
  "key10": "2DBmRBLWdnFmnUsWAjt5kPHxSp9HMsbnnSQP3J8at1trNJ96s6tFto2Mz2CaSgFMQtuY54Q3dT4EisgAPA5BCX4E",
  "key11": "5AYb48kKBVTrn26dasXqDbtvzAxSPR7XpP5j75RbngD9QLdMj34s2yqNrTn3KBMnF8e8ycmMUJD4LC5RiSyFMdAv",
  "key12": "65hfuE9PZTFuGrpMmgccGLPZqRvb3nYH1qEPzd8BD5cr41pDfMsHQW74gGkfbYjxeYPmymzgLeYCrJPBvn9PjFxd",
  "key13": "zohV1PGwoxcSATVmb8XXnCYN9CypAj1VNxh1RBjLre9pj2jDVvjHCcMNjbBGjQgiynwpuTE3sjYJKpfPNwv1p5k",
  "key14": "5Ffhxq4nSPrdZjBETV9PQ2m4vNuXBMVwsH2R6dLqUG744erT2KGQAJYtyR4i7ibbfmLdsgcfSzTXYCR5KkexCjMr",
  "key15": "47nxJeABj1uie49v2c492GWhh2AjwKWHb4UiDCeP4Ud3FVYqxei9kSa6FagUGG7Rux4wJQ78NATgZHbGM4QqDjxD",
  "key16": "2e9b49rj2stLMPrzYQM3r3RAsuus5e6x3KPgJskX6TYQWYp9uo3kLg9yJ5ibAq8rQHvP3S46pxbaLCQAmqZqcJwX",
  "key17": "4uPgjpU3S582EazSRA2VhvSxgGz4jXPDD2Lax6sFCUoEt3YqLZRzKFLtKgFcYvmnbQXxB42iTmaqrkf3C4axdZdh",
  "key18": "2UjLQd33uKb7dJckJpZdKUxQp4JEnbiBpPx3L3K8cZcywAufvqmuTdEXqqRNP77WXC9VHt3HJ9vNjwPSD2VXbagS",
  "key19": "44QmexUd61PKSEq2ax8Sa5mgQLy4JfdkxS3kQ2XmXrZMdVBEryPsSXke33sAhLUvixyqLkcoBUopRW5wkZwMZPnB",
  "key20": "3WZUcojDWJD2PdgwEPCRuqE6o34FUjGrL99EDkLibBpLkYpn5z8A5E5WXvvPBubdSTaf7wUHe28poU6gg8v9qQJn",
  "key21": "4P1UkpvwgTpRonJpm4frNrbo5dqLCT6NnYyQYrVVtudVbiA5LNCQe3vsUAZtCdHvRQPM5uq3cMzGGWPk8buuMTp4",
  "key22": "36k53uskefztPG8PR4Bc6HLP5rsoA8i9NMryJe1CHJTJ22zuXrqMjtR9JdHG3CtMTH1Q78btYBR2kamA66ceDaV2",
  "key23": "3d7wui1zpJ7wTaKMEr8bDDPdxgRwPqKBo3AZFTCB9CZLSZeAG35rfsLSyc9qtNzqSW68qHp5AF27mBidY7rWELaQ",
  "key24": "3iysWW7GUPSyer7H5mqh5JWHpk7Y6BLttSz5M4gnJTkNMphwWBUSWBtrtD8PZ5iufXB1D39drUZrM26tiiUHJRZa",
  "key25": "37rKbsAUmQApPcJgUnE5vkXUUJux7kfdBzsfa8Ljb9eqRAH6de8S58cxhpvPgXYDYWfxJ63AByqAemrdkP6uTdks",
  "key26": "3VPC39uAdw1SGGdYuBe8tK86edAiZA6osmQC4sc2fJ7nQZkkHSb8VNJNo8bT59rdF1BNwKsLdPVzp1U5jJcsVm34",
  "key27": "3nLniFwEWVh9wBqUoqN44khgYSUswdZEVUhUgANG3voiMnGa24U2KgGXAKGmYzh35Dih2TzQBm4VCDTnmurvviPP",
  "key28": "2Y5AC8oS1GZhiUG3JAMvCnH6poCURH8QBZs68kDEU9j4LkYoaA8SmPtrqxHfZHHpE6KTEEcfZobCqEyKsJ2qYkLf",
  "key29": "4yccPoNPRQTuQxeugho3hzojkphgyLbJvX831mTBnvz2woL5dyFAXg2Aqhc4geoYibcX28qM7euSfGDJc4s5Rp2Q",
  "key30": "sdog4vFeMfP3GKJTKE3NYkTPLSSZXihnodWuHBrUStVQrY4G4g9ynVBdaunDYRsY68HqLszd1e6HthpKcJxVC11",
  "key31": "2z5jHiE5G7AXtHZpJMqRva6pfbMRhR1Fsv81hTTk9vsiDvoUTTvQrSgae8Adbgy3pQrhCD7nVuWZT38kjBrYSBCP"
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
