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
    "qcBvk5P9xvt8D9ATqmvfy7TTdXTCuSLn7ioWQD9DWzuTVm2RZ4Qg86Zo5zSzGU4T9zupyLY8dfuk3QtNKJwvovP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GpXJQFut7p9QFmsUoMm2fFZEEYon2bCBivNbTmws822XZxbry6YFVWvpkBc5dHhq2uHta3SQnAExByu2ML4frob",
  "key1": "5PKNRAwjmU1hVQNdGtencTGmnXDV8wETUh4Zstw8KerBTmwwM7yHBtPf3J4A4ECpTWfMgeY4Rsv5d3ypRa1fv9qV",
  "key2": "51st9SKCKKspWvZGuNqw3WadZ5pdesi7NzN4W2xvNHRFenv595zf1HkcWz5uJFX7ARmcN46d7YJ9Xi4Ww5LhdEyj",
  "key3": "59jXqS9q4xoZmuFkkZtktVjGZnk6bn2HaWkFj5PLVV1FwduHGP5z5gKoywP3oSfiM62BhXvfPGzDMJXfZ98tMprE",
  "key4": "559q2JJ4pxDpCkmWxnnTLtExnWJ5JWH5CBiigYfu2VSuphbPxK73r1U3Bh3Pqn8BbTzcdQv7N66GF3Xa9EqwwGzd",
  "key5": "2ZWnynJk2AS9MHF6Eequ29PVqwyrbZSHZL7jhSoPRnpoxBmG11xFDt1qkRpJo2DBdvyp6g8SSs7rud1XTaUDc6KU",
  "key6": "VW5wNDchRqcHhxcfZZRrjSiFzYNPU9xpEbiyuvxnC85kaoyo7ZPzJC3zxDFmZULAUpZd15fUo4pK7wcyKozYeat",
  "key7": "4NmFoiarFxJjFU6dgEsmQfcMV3Up2YRdP4sX9BorSczw6YRNB5mf3uXGaKDPTn6sWVxpzLkvXCG7xH9NA7hfsdmk",
  "key8": "2F4pd2CLtaBQ1U6ktg2b4dtM5BKrXU7Xxo2ngzrpV5t5cv1Sk1GzdCCKXpyr9D7fSgZpEa21R6BxrgTM2YZPPKZd",
  "key9": "2K82AAce4G1Dws6riGSMtnR99S75XQ6rQN6N9urKAoedkHQKcXHe98aymuJJwxxh8A3qMD9WgtyFtnRLk7zokLDc",
  "key10": "2JMXVXfgz2aiAiKjXdN4c4upHYvrERjxJWA74xqC5gJh63QhAaus1WmgV2jUkKPL37vDz6U8sbVgAUHhEBqG8mkL",
  "key11": "4RbEuifNdBFBKgckCTWFg8zzXScqybo3eSFcXfgA7UxpPLeuhgrnujbvL9i2dVoLJLx1BafkDPAnVfr2CG8MmMb3",
  "key12": "voGHJug6qhAP2WHT7UhA1KH6XYaLPQhKprGAqJ2nVWCkTH6hXzQDbQA3XyH5rx5oxM4VSpGgwXUXDr3ak4H4XHz",
  "key13": "Ni3k1r8sRnFMd3cQ3J5sjuoGZFBCBYhzuJgsy78sNcMGWLrb3aQbYRanmc2mngsgN2kTFvrASZEc7BcAvtVUTHs",
  "key14": "5VhJCYhaYRh5Rs7vSn3aH1UWLCaNd4rhyCf2v1NQ6kKuUf4HFZ3KyePk1JKv4fazGD3HZSoeyCyePsjCNVikzNiK",
  "key15": "48dFUJFu2N9PA2D38suUeZsd7NhjxH3e3DDbxXNP1bg92CLmdvUc5uYC8wHLGwLnZFFjxnCWqPhLyZNKbWKSGB5x",
  "key16": "2DhzzMnjUyvXAZZWgsnHfL9bTZ5186bZvBGVJMMzDy8Vwk46bc8ELdD1ZypSWsFH4tfh7ECUPAUEWARcySGnsCRm",
  "key17": "27PRURYqps5wR3Li5az1aPAea3R3bSU77Am6zVxNyxMETdqnc8RAZPG1wk1NgwGsS9zSDLRXE9i5aB9y1hhqz9Jj",
  "key18": "4jJnyzYxstRPJHVDTEYHTLh1Fa8mvwDSgQxjZuzGdeHPzzMaKUgKScYQahjEM5Ypm6kX2ZbNTDPoXa7PdHJ71AYQ",
  "key19": "hLfZsdSLgQfzP2DWg9QEXPbuvvs3K6MDGjMymJLZRfjEct949iPWfDq61LFbLh3CpyaNpRwixzJNNxf5DniScUC",
  "key20": "4JzgzDsW7i28afs8s1PkgmmzNJY3ptoSSXqFnczSSVMN1XkuRfK1ckavgCqAZsauLUBxEyWYRZt3Tjko8vQLopNv",
  "key21": "5xKfQepeBTA64Dvq1iNsmaX9bQL8KKuhkj7k37JM6ygfKJ89j5b3tEMBHZqHHXbJCpXpmiMhKDPcJz2SbtFboW5F",
  "key22": "54m2uoiGFt1tQFhfJ9vtLyAF69LAQsko8eoDT2ky2TAgaNTnj18QRzE3btduPbjG4yU35EvCCgG9nPs4XFrDo4rc",
  "key23": "4mwBVVACktcKi19DVsvK4LbYt4j3hGUupwbLb3hTFKCn9P3iRv3v1EuQ1H1pbf2KhTVEvx4JAxutjvrSemFnxv3T",
  "key24": "4cTuadaT6mKqZQHBqgzJ9MraSEgT4BxP5cH9JrbYLDPa61Z3tMbWY7deoy6cH8gVXkUKUAmkFLcEgM8iNhuCNkt1",
  "key25": "4e1KsXFGkW8QPpAL1ZDXLSA7uuwpVdDRQFMRqc9rydJiCNSvQkBkvABde8jfZCn8rkicjTpVRMiGUnUxAbjM3Utr",
  "key26": "D7s9EsHxpfcnjfUzBRMkaAcbhnz5EthoP4p23FCpDWHA3W5AMF3LUS39dombaEZBrmh8wCXWpfMnQGEDpffZ4rW",
  "key27": "e7FkSKCEfmpRGNpVRcGpoAfdqnSjqeaLCoaYaj3XhHXYVaUKVopnzJZTDQgJtgL7tgxLvLGwqhFCxJbjawvtGzR"
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
