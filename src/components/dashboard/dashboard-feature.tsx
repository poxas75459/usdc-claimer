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
    "57k93mmXX7s5Vuwcp9Y4ByU54SjGWetbdFiy1mW1oBJbgghoxNAd6sZSEWcTjQskRCg4oBA4pePbTT62KfbATywG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dQ3gGKgN54MoHrbq7wNKES2ybeyfwb8UFWUwHKLNx6jsV7v22zi3ttG9194gCrVXWniueD9N6P5YJh3pdBqkddB",
  "key1": "4YsQqRMERHLBdT3HRL5k4bAN2RaAscAtzqWWD1AzgxQiRe7AneVcsWTEbPF1Lxbdz8cd1VM1scugDxseAQuYGWQA",
  "key2": "RQUw2A99zTiW4MG9eJbJnY739dGpNhqx1ZTYoZNjqHjQre8GpgmBGm871HEaLswxWQntXUBP24PaaDryTKLPo54",
  "key3": "3PZG9rYSagQ8UfhJgm1SsLSGqFGBaUdwGNgW9VR1ShtPp7bgrAG5JaGPxqgDEWGAjZLmQfz3f9UXxPF2uuAdKSsN",
  "key4": "3F4vYVhrbniGVrDN6M7wkCKRd6HsQ9cgKw36YSXDPxgzWZLDC4qgcYXDi47FcwCfUDXpsJjGwGmWcj2vXzpqi6Si",
  "key5": "4ZN1NU2ggKR7mttn1xnbuodtVBgKj9bLAFyfoENQahvRTTqywkggUcE8KLfEU7oCQCcN4kYG8Dq5mr1NDn2KRWky",
  "key6": "xpDMqXb7RTo51eEGUJHcX9mYxkbrfWHi7fj4haPobmEDdbQuxSznwrVBPfHQe6bYnn2AcAEXwq8pUbrA53BSG4J",
  "key7": "3FFKz3J1KZDEaiFa4nB3BMxxtSjbPLfavKqte5HSB5wzYrM9kLUbSzmMxe7kDYFzzAb7a1DJZEMFEKp2ei7NVmEx",
  "key8": "2fNFrWgYvC3ZsGyBf4LFhuE2e8iNpWvk5XqLgAiUfNFH114trQThGqeVpLdBGT3UeMwmBxnGV4BrMcFw9HHHzUHb",
  "key9": "QfzYMRGZVQUs3v6GuRtH84zBs5SfxvkCYReQ5vtCpVYjGK8Bemk3s51Fgcphbf9W1akmKQq7AR4pEvRVgcRdZpp",
  "key10": "ZXWrvSWezAatVrn1HjVfijnVzbhukPCGgHpLcwAN7Bmx2GbvTLGknnVAidCLEpXkL299eN4FbU62Gcd9UEFZHPj",
  "key11": "3sLRSkJYhvfhyix6CE4bsnusRLnH5ZfxqaHJEWwhJZLgySKsZW9SfZGD53jbYUYpeeMMDmpu94Me9suoa64opaw4",
  "key12": "3CydXP2AcsjEBqRw6GE4MTFV4fWLbLhm7N5nkw4TiJZZDuGHELg89W9HEnHWP9gkYsg7hd6KB4oWLr1eHMAwREL4",
  "key13": "3xSKb71zsXkCwCCDrQBbrkQ9sE5jAkagBBRoym55Bj9bwveLjEJWonwLowvkx68rUnGiPNtM9zAEYx8eh3dYyWgb",
  "key14": "3UGb5ExwHZTRVRmBjz3RrRv1i14vwBpDmR8osX5stxwAeBqzEhBRcszFiVst6ChJ1scy7iuwZofPEaPK57jmfSzp",
  "key15": "5CeyPW42h6ibyw3iGy5PCurM339TNK13s9r8wzW3mfy9X4psEapkRHdZ8H7QyzypCpqghNCvs6P9sfd13ei5YyUs",
  "key16": "2B45YQEWJ5v466rVQeCeu975LWE1VEKi1RmwDi3NndQNEVh5RsfcLKjaNHebGtEsCH4dURUfJibcFUFm9BGhmrrD",
  "key17": "3ZRpSMMvrwVq8uvUemiCviJXsF4oEXuk4boxkbPd5eY6PJtkHrfKmGZx7bGpUKwYpF75H6Wm2DtkZymadXUsoCH8",
  "key18": "swWyduqWMrYe3TYKexqV4gaG5n3zH2nBHSwJXKE6jwEjWhTTEk2zik6yEGiG1cMauRLngB7J8UHQqgSnsgBLsce",
  "key19": "67morAMvzp1MH86wMq8CHEuxSxvkSyEn6X6aE7E94UdWjnDtxn47hrAKn7Vp1ZdjTv1bK7AEz1JtgTVqbE8nawVG",
  "key20": "5JmViFZP3Hhvpgh7bRZNzC7dSye1HLkp891hyAf6h6yWS5JRczzAxkpjrpZdjakvojfsSvSYx7quScgPJMLb1FkQ",
  "key21": "2GEshCSsNUAeQtADD7piMTqmWMkCaGqbUn7QWSJZY4FmVKFnDCCN6J5LpFLoHMDVsWR3NJQbJni1dUddh45SiqRU",
  "key22": "YLNmkvh19jxLPngPQ9tDTWqeYt1AEd1LoWbmfYNDCRWoxadXtpgXZETgcCYu4ccmGd8XMPMcjTzTHLmQbca8aak",
  "key23": "3gb28MdBhveEwrGLyiAQQNYcrscxSRc7QUHWqZemyiHsGV2K9JZ71cB1VB9MyRDKvVSN9vUL5TKLcWk4dWd18kP2",
  "key24": "5CSnYoxoJ7umJr6N5YDxssMSwP1c47i2bnQjrhPWz3aWnQEAEApMFLWtRaz3xkqpmYGsfMqCApRomYwP5gKJVuu4",
  "key25": "2rNd5bQwcp3s9Rf6UeoCS4BHvhQhsyXvtePezdCZCN94uetPpboR282sJQMeUiZxd6k8GZUqBRtZjbYCogVpMx1r",
  "key26": "5k39vyoeU5bKSjeQSiejdTUDTZhFephxKR9EuK8G4F3MRcnGRJh6TR5WUgd8rzeBAeUssmPxJT9MpiuJwVHC8hzC",
  "key27": "5gMmeo5Wed8AbFQCqn7CefR816V7XGsvRyj1AGdB5vuK4ZdkaFC1V8VVB5Npvzu1Wmynar2t76hTdbR9NpGzgAdU",
  "key28": "4DX3tmTBADR6xfPDwzBjXMLpvdVRAowVPHTparPRhsJGnzeKajNgFRJwhHacBrZinHrJuY1Pquuww8CfSodUKZaM",
  "key29": "3mEv6frjmU5eZr8GgG2FAkWuuHgvPdbYzkPpmmgb3qo7mYdEVDppYbBoRhQxB9DzCgLe5q8LPhNHbWVmCkygN7gj",
  "key30": "3Knaa3VhgAAZftwuDi4B6sFpJftprNHuafUG8N2xy1n7V1u8oV5SZ9ZCKi5Brh7sbtVU89oRK2A3iwqh2ZzQyVEi"
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
