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
    "5FPxyDeRoXTidRNgEjZdRpSy6mCBj6ZMzM4hVdMMH2ue1raCqVdu9DyEzUosoTrktNrAXuoH9ysQ2KrtAXhCewhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1PexwtHt5R1tnzcb7FfWTmVbK9grnvuodgKazRWn91ZsHqkyNB68BrvqY1hsWqnZz3ZxMcYgBVCcznA9tNmUk4",
  "key1": "63ZiGANJDUd8qJ5utUnhUHfrVNB7v9QABE6VeV56DRx5rynyVH3gafDWFqBNRXDbSt62yoo286g5KG9skLzgDc5S",
  "key2": "5uAc49aDkXYBMQzcPyycPgFVo9VKAT7gHGanfCn946BBqJXshst354KFeGsrqeB1bEE5yb3BwABDBLBwFymQCB6G",
  "key3": "5GDgqi6ZiHznebDeTo3tmS7NnpBpVcgncMTzk13JbnHQVMRWZcjFA5WGdtBKt56P7hGpp4bXu35qvJrhVVejCQZS",
  "key4": "3WC4DMXAc7Hyp1QVqKapkkCoCZP9mUNuoMtitmEWpPMNGvdCV5P1zG9xqYLTSLeMWv67uFNbQdc5KmZ3HyRipAYj",
  "key5": "5QgtAB1YgL2DHbojFppR5cqiUttNNE1LjeUVrtVgpH2aHTYwRtiHbn5vamTWJaA9JmxT1w6RmdWf2sYVPV6mpA8x",
  "key6": "5zEbRuvAisRgFH56mhQEmFgkkrWhAz9CVCQFvBsPbxdiWAyTMmPcP5CM4udJmL75ki31WG2jdxXLGBGM256jzjD6",
  "key7": "33d8RkNuEC521q4TCMrTN2nduuydtxaJaSiGuy4GxobXfDCcGnDYjArmSqs9gWqodMfvU6mu3omBoWYf5Zm7hv9B",
  "key8": "4Byr4HW233wvtFSty5eZYYW9kCsgFDhfCgLt5oQLrVJgUgjb5rXdLvbXZf7obtnUMwUqMVWu6ccZFSP4pr6Kb54v",
  "key9": "bUa7ifvgRGs4Ugfm914qoprNXKjXnUMjgPBfkVqRCmESDVWNqcH6mW2SNiZRgvkny94mrnPRHhhoPdSxuer337v",
  "key10": "2d9hdQAYaEtZHzYreBcuHyzQtVuj9JbQrP8UAV1aoY7VCqwhcREeLPLa4qj1u2o9Ze2sY4bhQnuuneNG3HxfU6xy",
  "key11": "2cJJVYmFdQirpCTnfJhp3AyGcApqb2cByHBhw32111PBSz6VekcnbSpuqrgEaBdruHtnYA5patUnRqvobyhibzA2",
  "key12": "2zRfvN8WwquEoGEnt7dYeNjKPuDcE5m1cdnZ6DFHbefkLXqAen875Qg9oH2vPE3SZKa8Xv7Bi8f6PGW2itQo3NsE",
  "key13": "ef1STpvKeDSHacaog8pbpUFBBuhqjdGDL6erGkyne8QE8hDj78NcU1iZgQ9ACyo42tkPmFNuACZsJkwL5Sjmyz3",
  "key14": "3jRauMU9xA9gWtD1T1hBtEV4dx68TTqVe6tibjPsQrm8ovkxAnmhbUxD84PE7RUDnRggBfb5BgeUKuiXKZTa2q8p",
  "key15": "SGrgN7gii6BgBaL8Q4mwNPnYJzx6LyaJaaYYaQFLcfcYcTzcVkkvHtdyDvcQMZEnAEpK1TyHXMawm5vd2tVmJGw",
  "key16": "JTUrcXeZmn1djVJjBVJs5JuAJEWLnP4BcYX2K67T6Pp8A5dUcyVN983PLzZg3WcL8Ce3RrmujRtTWsWytFMcNhd",
  "key17": "3WBs6CyrmNxeXMk2hw8b2fZRXH5drtB6y3y5gWiwoXmEMkDzxaSFJKoEZieSN2YbkR3JPYrFve7Q4H4VYGHvTC3q",
  "key18": "5eQeMsbAeeUBSAa4zPSwutsjEMdaLfnsectGAVH8ywyg2wKeefGQ2bfxGayuXsZzowVjrdhYxHvK1DA2ta5CxaiN",
  "key19": "3uwfZSnsxFSowqeDq51f8TtZhu3caZ23suGBDmfBCnTJwySc6WS5QqKDL2RQJkBhGjJeSJuUjtNzh8ffex2aCp3k",
  "key20": "i1XWLjfECC5z2JtNvxMQSMvF8hsU1evLpJCZ81oFUxPNywHEeVmxNg6ACfkrBapxKnCrCcu15UZtxSXCXvVxWfo",
  "key21": "27mev3TqhtTgak2ZQCDNfY874j4tAohiY4KUwq9EpymdZoLuSXvBiBtHRryGKNKVBtTw1fs6XxofiqabWf8SA1pm",
  "key22": "4zM31XGFcPzQhEYuKhZ5NKBZknx27TBBDyv8JVQPFEdvxCmwvYPF43FqNaS6TSEtxMaQof57xdBw9zYftjw8zCvf",
  "key23": "29AYoDjJjcS88eHhYGFDrZv7KnzuhfrAFWQwTB7Zvt4GEKW36i42ssXnqAUjuNukEtecSF7t7yDjFKpwiSeixFXH",
  "key24": "5cTFdRprqRqWJoWzGoSHx8TiVoQogmpetrF452oC973pKPMRGFA1iVNSNWycQ6uhUez7xwEJGATHWULc7J9NQhJa",
  "key25": "541QQjSsFVxRVYo4SG5Pd6je8ZNUywg496uzqbwKAzWBF8vEtGjzoKPwyA2B1o1UtYMKqQnCJpfUhwKVZkYoeAqx"
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
