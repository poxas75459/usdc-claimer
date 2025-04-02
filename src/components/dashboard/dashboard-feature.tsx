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
    "3KFNQipcB6cAkWaRYwzvWNBuUJ34utNNVTYbWeGrv5DpqR3VKVrt5okwfeyPSkgJntDbyfRLt4hT2KnpQZSUsgP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUjeyZCJfrHNxsfSESGVB1cdQxSJGuaVgpMmnNXffKZK3XwVFBzukK1ggZzviJN3deJoV7BZrg2dUcc5r3Zz73P",
  "key1": "3CnwymutxMJ94UEQnHbuwbPKHModB8MmTeu8ZceC6RMXRiDsNsk2VE59ByDTjA46L2K2ii2NUBMeKkFSZ3jFU3wo",
  "key2": "5uZMhAjKUD9LdsGsKGhRRcuwkZEbeyVNqge9u7CqASoCNRTyLypueABJKjhCeaVaqPVg9ZKgubgp2hF68Z3WacV3",
  "key3": "3dtdgxuRwzJNhWfvFBdgkrz2a6YwRjCvRGGwGfBDv9eebw16kyxHbvNdzN7pRRZG1ocj2Jcg3eAx1xZFs6q961AR",
  "key4": "4yBU84sc2889eCMAsrHT3nT6ocdbp5mwE62Pdp7xTg9qvo69eMmDBecc6ePz7E6vphTQiQD8h5HYf2DS82TFzvRs",
  "key5": "4mFTBahnZC1Qh1apcfd5zaHZBgBxLs2TvpSv3GS3WfFKKdohdvhCz7e17YVm1Kh8VsDxWQh6S1h1dT8WHH9rH2uq",
  "key6": "meMCL4ojT8yCZmaA4HSsx6mq5CUDVsKiMzmgzJLLUtfDgSpuUoybnQXtsEc7ao94kzqaB1yAhZepNVB1XeARpBU",
  "key7": "5KFkacr5b1uLjEFk3y1KMzcJdxbzqJrv9wfo5VCaTqSBGqATDRhiKBthSqNfpJeDqtDQinMD6gzktMSyVqydfd7V",
  "key8": "2jowXwcuGFifr6JUh2pRSUxPZcZMvPWU1ZvEwudxYHecAKWw1rpXaTPfHe6XR25dxFT2qPnww2E5KgeaCMLdZrZA",
  "key9": "2t7wJ5RgqNKDNMKyH2n1QydAwREtb8hBeQSCxRrRXjPx32UcUqvts8EHHbiHFPvj3fSsJUm47oYYs9Vf7TUQmnk8",
  "key10": "5QFBiLTKL2juGBLjwfygFBLo37NGzaWnnbc8DxSCRyFETG7DzChoRGbiFoKM4TjtmLi1w1rKjgUezxMVo9BcxGDM",
  "key11": "5LwZaRW2hAaHvhY4uPTB76Wx44qfWD4mFm8wNVh5iWbFVKkNcaMPtdWwztYUyMy5PtVkvVyUeV7MY29vFss7bd7H",
  "key12": "4tBQZ5jBsTUJQaD9kd6mcah5HzrJdVkbLTZgZb1PWbt96vq8t5KuWJmRoNSyhucr6TRShKa3ud1QNws6CTeH11f9",
  "key13": "4oeAxYaBehEgJmr5Uo4DdbgYBs1mZzeF9rguU7TyVFB7NpBuKayzkFah88ppp6t1KHm2LZcM4qZnmAxYbiKSydWH",
  "key14": "jEU4U8i5pwTt2FTYM8NUWGEkz7hJapDpUyp8q9u8cagUTRVChUKmmpDkmkrhE6MzvdbbpcfFG7P9bPXc2UhEToA",
  "key15": "2b1jVWiA4DkDLznWbR5mSWpxx1xxVop9Sb4RguANQcq518FXo53myr4fQwdrDrpjb2mVq8ZLxGoriD8AMVPtEPvE",
  "key16": "2zgyTUV7njBzTuPDb7f3zUYHna1q4njtFYX19VJPMgdsAuPGhQga5QrUTbLwsGVrGZoYD9pix135QvGA1kNEWRRN",
  "key17": "5MYBCB8M7bzQyUopHTsTvgF7ZWV9gFsgyVspSrAtjcrsu8oNVVhtVteg58AY2sUsmiDrgM1LGNqbtPPqfoE88jhB",
  "key18": "3BtDzScyA6tVr29TEhmKj8igPzwpy5wxhHuhbZG12V9f5h65pmu49DP7G4GxnpG1wKk4rZzW9YcLniSFGfpuxH4d",
  "key19": "5zuqzR4yYA2qWEoMCernqZL9UHykrfs6vPSEEvkS8EgCju9LpRHteibX4AD5vf6nqAZXng2CkTGYyzmWGxcWQKPy",
  "key20": "5dJT97nkQfV9AWx1Gw1FHVV8p4BaTLuKzJzLCYX9toV9f8S7PhVEfF789MSC4SKsFtc2aJkMqtPsVtfzSL58P1Yq",
  "key21": "tK19AAFgqngbP35ucxou1Hydci4yqpxpgCt5tGtZ6KTWryLz6tA2dKstES9naq3weoAPL3cDbFAmSJ2pKNFd3YF",
  "key22": "4yFab2MZpHxDGxC2pAyJH4QApnvjdTyScCS4K8ohqpTYSyGj725rBx2GG59hNJ5qDrDWtP4JNVvuJtu4i8mKAMmv",
  "key23": "3vNPVWNL8RWpp7Qxx3vc4Kc7YTWruuxaVAtKe5LPYdVjJNF9k7miRLFQokjUkZoBVUc6B2DbbYtVnx8QPZbeHT9W",
  "key24": "56Ww2BTSva66uVLwxMBscaNXqgC1jzSHKrw7BoFKXf2Q9oivMjpAf9pvcvSfE72PiFH9MBwABf7RUThex26d6nSu"
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
