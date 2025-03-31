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
    "49Cbd1VDVnGYQ43nnwALunEmKRgfXF2zQNNnatvWgJbkMkU57NFSpBiNR3JWgy8Pj2SXjE9d198v6q22MbfPNizB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vY9FvgDgQisZYhKFtNQ71bVkhsge76xmfZTTDput61Kr4SAL8Ea5D4iz1bZcLxt2gJiDXwFQiNwtSa1FyWLyTJX",
  "key1": "5DBJoRqUsAr6H8oJvgi3YvFebJbkEq6hj6y4FH8zjEqjUAFbbdnwropiC1CH3JnkNxVMYdZ4X3jzZtanKmbZwHfk",
  "key2": "65idkuenHe8fXJfj6XceUR4R9tWoJpQNJq4NLNuoNTH5RJTeJr2nbQzTjx5ip8uKvnXwetZMMWepSDrfn8b1xXpK",
  "key3": "5SrGufAEpo9NFNcA6mbdrmPhCMZHA8JHD3Bz4wkvGZmEf87cofstaqfyGa2XqPQvyGqeKkEyPHQQcetKbHnZE44y",
  "key4": "45BCgUXiB9KvUJ7ZDGssx8CqHTqXadfQ2mFDGuMGhpibCkHxoEKWVF3KoVsuj4Pyi4J66eQF9fKPDo9dbbkvtwTa",
  "key5": "5jEyFU7xR3HVNK8qqqmrbNBgsedkcAj7TdFqg9gKZRQrxNNAqwVZtRizv1LJqpkU38tKDHwwSEzPeJV6Ue59PKVz",
  "key6": "2GVUpf52UvS3dSAXdR7C1k3N8zyBkQUy13YbXYuV6Znw6shbCH12hVA5CANRFiLfHCbuRACPhBy9fcc5ecAhsZdP",
  "key7": "5ADFJtD7XGgoxCBGHNk2n8b3CfFXJZSBeBQPnpUXU4oJ9UAkqyeht3TFBxasViBLYxSsCAHpR2K6BZ61g5Sah6Kf",
  "key8": "4zQMPvmVEF7qGvCRoBbApYSn5ZWM9p3qmpb2vY6Nu8bcjwNhsKciCBvEbStQRYmLFoiEBbAbzMeC3MmuzfcFfTuL",
  "key9": "3GJfPCxqNFxrzZW8DnUiafS7nwAJ6dhQTbeHcs1eGBcsdwQgaZnzGgyAQxXWC2T6X9EYzo26HuPy485PeMtC1RgL",
  "key10": "i8T1A7qHZQKGgNhwQwbX2StczGJbLB3Mnbsp5z4Ux8r4zuScfRpWexQj4RiFveEnVq97Ladkf5b4QToEyNw7fi8",
  "key11": "4vUSNE4xytnRYYTUjegVq4bfaKtVbJ6iqsVtVrAQK24QYuUQUuy6nKETmptuoKRkWvE77VH3tBi1NJ8bQtkyngKX",
  "key12": "WVBCAxhoMGF7XAbKcztaDiMoBNdBU776pAb9rxxp46w1Jef14tqJshdSAnGvJ4uyY23851mrDcPipoLx8F58Wna",
  "key13": "5JPYw3CfdUnSWWDL29BjjpVZcUr87x2KP9s6ssqLW9zfYbbAsNpCD1YSxZnEQjUGwtSiNuaMXgLz3oxPVtgktnno",
  "key14": "5fVHuAUdBG94zJ4x48iid4uQF52a9bftJjZiZErJYT32obWQ2YvJyctFCLPa5qSMCLhsrWnvFeDjzYDcC8NV2ZFh",
  "key15": "5oDUspo6P4n43awiCnFrX5ggNkVtWPeKQSbZ3Y6s2se5sg8j5HDDDWeBLv2Z3PA8frPkeD68dXYR4R2j45ULWKss",
  "key16": "333FqAC1y8kyKdtzLbfBTE73ux78M5MMFakpfxVd1gVwnTcR2jxrMd6tnr6tpvfngdY99pdY9GRJ5NFkGmZF3NiF",
  "key17": "5zHmhfKJ73ufnTCmq4Go2RFQxRZJzm5M2CNnNCHwgPkUhTVwLpHc4uJ14vdy84xscKJ4NrzotUeFMiturCx4v18e",
  "key18": "4hdFuBN3ox4mLsk9YZMaXtQjTGVZ9NaQsoF9VQgQQDNNMctnqbp2UmFnXDg31o7NmrAmQySiCAAQcEcoi13q9xGe",
  "key19": "2B95SPWfiCdxyW1PUPKEpPwqH8zLaCufm8drUC6fV5sPdePNoUzUYgMqNggNgrYM1ZKRAv6daja3ascWWqANtKMB",
  "key20": "2a6AE94MqUhEfYeyopUMLu3UHAmPgZEytp23B3UW7NRZkq6cR7MPiGFRK1R1JZPXXwdNnydvJ2h7G76uXSi8hb94",
  "key21": "5FL3TVv9gKrSC11864oznk3rvFkBpmwB7KknTqwcx61CC7M2uDthVbzVZds2YT5xpQJzQhfheuG1ZoPJkuYySyoX",
  "key22": "2bEsD8TMuyHcvaGonbbbRwigq4t696ivor4ebppwbCNcw7pMQH92edL7FR7m8f6d9EMsdVW7JtrPNuWKSsF6JQsx",
  "key23": "wJuiefmYpvBRwKNwxSX5DmLzKPVdLqY2Nc14LuVdzQU8P29vLZkKGMVQVFjNh1MTmNpE64w2KdHC5oXntomadmY",
  "key24": "Ti5MXMgR3gXuRFPf39BPto6Zu9tiRR79zNfEJ7WNog9CBaRTsfDuhHMUknmdDQqxD7yMBjEQpnVAFRHgibRSQYK",
  "key25": "3DYrrMHrkCedWit3VYCFApnCShd41sXqcAJQhUc9miTdtboNs2o9hVzetk5ratG6SiL7XM8ypXRGBUACjfRhgDsH",
  "key26": "3CsqC4fSKkuvcp2kgrpsQksc6tjMcJkBuqruAXYe2JokcSgif4FWrL3BSAXQeoTMgoLXxCRJFYHRPdowDVAdHWdS",
  "key27": "32md58HSgiqGccXLwedfLh1qvzNTjck2R1AiNb9qLq1qkyVDtEagdQCoNtxLEH9by3JVcZhG4BEUoG6g7dyQzYTq",
  "key28": "BjES9QWscN8vRwVvwpppbkvQAa91srqg5dHNVwKfzB3TLGBmTp2x41TnWVbXUNATnUzVha3dJWeXX6ESi9k7oGM",
  "key29": "2751e5oy6VvEHLxS2pkSSDGpZjtzRQyAmJQ388cR4gTcR1GpCqcGs9wrqj8jT5nGPCVSK6c1iCajzzbkeRUxNAfL",
  "key30": "JsVwYZoUEz9tL5qdWtSmS9wsrHrsuPyBm8KHFv6hdJgSQKimZJdLGzN84mDAP58R5Q9gyLsqLAQRysnX1SPd1aU",
  "key31": "2wZd7RMLAr27EsnmrcWUFJMVLGpFUjsaMYypAD7956ieNBD2VeqdTes4tdNMTSDjQyPM3Z1HDcnkuQZh5nZLbyVU",
  "key32": "4DGLoJnsKDJKEDbjZ3jr4zCDZ6Us9E4RqHU7LQbQGMqT9YGt3uiHcsYi9cR8tt8d9ETGhBzrafM6zLvSwnT3i6tK",
  "key33": "HE6qLoroq3rVgxBdqXJYhUqLjJGXooLTuoiMbFXvZjMi6Mh4ArUPnbCgB2Ai5Wjhh217wND2zPZ5RBqeoo3Uswd",
  "key34": "WMhdofFaZmbxZXRZ2MEQJZTgF9umcmgrpSM3Bwy8ZaiPbn8xnoapHLKN5zwgtZgmwrn2dTXU9oB4fPmiuxG3jMi",
  "key35": "4ifaSbHZN5A9Tc7beXsTbXzgbVsW89RXSw1ucRhyxumFLgqp85LJBQqm8QGH1iQYJEUgdwhU8RHN4bSw5QcQDi9k",
  "key36": "5nj6FK7v5M87hcuqjWoFyPzD8JKpBdfjbedCr9Numvr9hMcChW25h1ogcPm9YdTSwpgvSsMthsL5AvXBcpPGbgc7",
  "key37": "4vppTstZUeAkN18vn94MG2KvDykdsKsC1V5JiE83Uw1vMeqSv1ewAWyg7WPjtxujx3eRM1LLYQkPQJ5xaLvyXPow",
  "key38": "2KK2omhUy3ZDNfkTTmBawuiUS54jkZaiNHr1E6g45s7A32tcA8MBotHBSyEijtfRyp5w65TG91yt9XyWzRKGELRu"
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
