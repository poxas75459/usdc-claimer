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
    "464KWux2GryeAH9pN24dXq4Mbdp3gBw8jj6uSdzXAwc296gdXNJRu7uReifVPqe5AVixfcNAcjki4M8qi4jC4p8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VjQi7qC9i8xe6pdKuxeysnEWS5q5vvZdPPyhho9kShtv9DKqcbxnACL6vtjvDMCycMRgznuv84z1MK48fygQBHA",
  "key1": "4aPZTiwFZmfzyYPgwn4rVV5yBBKYprSoTNhcfdWPk5LEGsARDvSkGoCXrs5z4HbVMXzj28sJ81k5Q1WPaTSfyPQJ",
  "key2": "TZKw3FX7wBLNLwfJwG4TwHUKdzEifffbB7ZaigSmfUiJbvX3eCFDGuQvK4pKpcgAjdrioLBR3Vb8EUXV1u3aJJW",
  "key3": "5x6R92r1DShnR7WtHh1rT9WUdpZvc9mzmwaMcKK1xfb8Hpqd9UYmL2bHazfUAsRDekz4E33UrUgXEXhXDCXgjdVD",
  "key4": "5VTAYtTR8HfGE434QVJNHzmoyTjDHuHd4DpqUHtFcJSjLpzZf1Gcsi9mx8vQP71SWaCr6dVPtQaUPvr1598VeswD",
  "key5": "57SDyFnE3gKvxDozoYChc4EQNfLuqXEA9M1DvM385x5vWHPae59gjWWMdfdN3oMobBphpeGAj3jh4kHjCJ3UqRFw",
  "key6": "LoDnXNkDbsuWwV6nPUv1hwTp5jABCH5DFawnJkz3YTdNMX9PsSuZAV8KhNV6HEz81rXzU8yPpeuJNs9FQBMzuP9",
  "key7": "TFMLphoP3Mj345eg5PsU2GfBtjEGAzyc6K2shJ2YX4XN92Y1NuhgEXm5bXzfwCrxHD8MvX24N9kEQcFbGsoebAT",
  "key8": "3pSDPdNYbwWrUK66odaahNhbY5kt3DKvCzwectntUEZ8AgXK32gw43cJYsqH5TbopYZY4LAFJ5pkHQ4WJgRcWGo1",
  "key9": "4tp1bqPpQM6iDsCHAgjFJAedwiiz5uK29yssfsEnJbvuyjbvsDvYQFtcnBHG5Z7Zky35NsctZMc2t2vZUNo9P9qo",
  "key10": "9PbegfYyEWL6TvJJhfzKHzM2hqNtXNDnpFpMZ5BixdTbCTuXPqvqit9HjtDXRRErntXTgXfTbqwMDyB89AcjV5v",
  "key11": "5Dxjvt7XRoZnCR5hfN6aCuKBQXTCd3xhfXTEc6PZe6ecMvR5JZ4LqpUUykQLSwL4PdsLDhcmJ4zzSJ3JqxC3Gxfa",
  "key12": "29sqTYmD8p8xiKNhFCcaWQwxMJh5vpyXfiJ7YsPJPMX9ySvCCHo7RMS2V17EThc3Ar3KabK6UZmJtP3EcRNXBgLc",
  "key13": "4sZbgdUDgcAAJ8Y4azmrbsCAZbF1fai9UWQDKjucDoyp7B85gS9oFKBbKHQfqemJUSkMJzh8q2FTfW9ndStFjcRM",
  "key14": "3XAKrLmGWcbN4xUFNsVyWwqh8ixt6zWNret7NhB8dZUMWUA8ito5ZZW4ef5yUEftJ58jGeyyXGk3s7hbgKgTPfg5",
  "key15": "2fzEiRdv2fX3SJezrwGsr5BnCpa7GrhzUM9JeLiEFXkSetVqs21WbjxfS8o8neDQvWFFLZdo1pEN8AsJUTiZeHNR",
  "key16": "3RxVSSkV61tyTnrDUMeG9HS66ZS9vHqbr2BQnoYa5urhmMGPNC94X1d4UGectjVkwNhUd6BLYxSoaQrb1rnWd2BT",
  "key17": "51MPiXZ6L2HQcnEcEWraJGBYPpP9S865ujnXmcxHxppBgDYGZS1H5hkE2h5cpJ2Yx2BYwKJ3bVLbohmvD1RDFbLw",
  "key18": "EH9NSDj4dJ3CyKqbYsijRJTkw6Yi8QEx9htEBLUQJKUncCg4KP8QsWvs1yQh7dyxKbtz7JveoZpkDC5HwJKcAkb",
  "key19": "4szbp3c58HcWUcsMKia1ZwNNW1iswiZG3pQeVhCD1KSh5sVTEWwCv33f6VwHWh6fnASYRvn1K3hAPdZMHjqmvkk9",
  "key20": "128RYgUkfapmtYZtz4L62MfdE2GwTBUxGhbrB7a5nQjTMLUf1XUUDViaoA6Pyk3TpPsCzSTmmyHYtwu9M9g74Cy9",
  "key21": "EaT4NL41ReeXnRd5gP8XSpbCxiVapSAkRq8qb9MiUbw3SrReHmuXLhGzPaKLgsBYV2QwaVu5nfq3D5G5yfdu2Ts",
  "key22": "3KvynhK8woW57SjhDGGQfHB1mYiHGXgHuK9JZZY9DmzpbWyQkmSjbuUnioaeQKHH9GS6ZYNibNE7UkCp2zYW8cyS",
  "key23": "5Aoqrdb4ceJR8yoCQ9Zc6PdXn6ef4Rx1xiY1kKjHGkxcq8PLRbuuXMddMZnqu9FGvEXM7RsuxFGPx7gmCemEbKVB",
  "key24": "4rKqaBfSkatwb6sXbT65XZ3pXx1oZMhf36iWSA3pcSmy9YEgVuaxBdCakmE5vYydaWT32UzGHLaCCR9DVEVyPkWp",
  "key25": "3zteprNn4cZsB2wZuWjDKyKYCuPeyGqeq3UH74fz5e8oaPYX3svVaZJyuY2TaX6wZfZBzKjr5aB1jYfCfPJaSaxa",
  "key26": "2YBEMtvHHeKUWs9QRMzaCrmgJBDMFg86FX3kHhb6yMtotpHS2mdiujHx3mCoQZZWoUFLA5hSikLhxjz2etPL71Hi",
  "key27": "DekiPVXEcMLv9K1rTaLo1jQofaLVttkZwyhWQpatkHpZEjQuyymwXefNdKrj8X2jyvFeKGVtmVVe81qoBBzxdHb",
  "key28": "rixjbcyq3QJzz4F9nb7b2zysgzKNXUCen3UEd9QvppHwebwMUXFzAmXt8Fsu4KMXTM5D1wE4gCZkuHd3t8ZU2FY",
  "key29": "3UCDs2ssDwW6vReEnWYGARDerTcxSCJzszaUZjv4CcqJfZEemCvY2BVpvRj64dnasWTdaXXZhwgKLBbxsv5M1bJd",
  "key30": "3XF8BcRFHVALSJB4tqKuyW9QWVWgyCnwkd7psQ4g6NNhwnQodDamvihwomRaHCKjGLfQAVzepVmJyDNbJJHMfEyj",
  "key31": "2H1GPDQ8uvz4uGCnQBh4nYXR42h5TaEoECuRkys37as9sEBuGs2wwKwAHqiENt4kSkfb5xFk1tZ8X6qaXGGKEnMh",
  "key32": "31stU22zbS2HDDeaG4VEFDWTQTgPd6MG1Eb6zr1Qx2n9cRQBpZ5Pyn9qpd91AtqJwDd6pqbexmMyhpU9N8e8nvwN"
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
