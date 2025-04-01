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
    "4UcCAXbQktzKLVK4mz1Y1iMGPJzAsXvoMmnzTeWmFWcV5fGKtJtizS33QZFxT3DyY7RokDVE4GaLoPT1ry62khML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idjKxAKJYEyNY9JksCSGfnDZDPQkfgcoR7bJvsBA8Wc3puJmUCVnVNLTke5M3YHY2AfQ538m6sGBUJsZZ5Wy41v",
  "key1": "4ui9PSZWxwAL1LrZ9fCP4rspLqyHGWV8Sn4HnHLwAFGLxahUAraWpS1NZoTpJ4dFPjLNnAjKmzn9johc2tRLtfTn",
  "key2": "L986hq4fenm9GQRy4bbzNLAMccNiFxjhVQ9R8yDrP8tfW2phUFDvYUe3E2JySTaAh2gBzang7oRxx2uUEvqmxfn",
  "key3": "2Lz4pV4qzv77ViNPYFnQFSnaj3Jur7o9nWdSZioZoEx5zFPeD4KYiCnMxkNMy7gqQxDXS14omP7WYscTUprnSbcG",
  "key4": "CQFfNP3VrwwuhtgGdw8AxKe57hmn8z2XwHb94VHUoXZECuPiAZJpzn59vPeEsp3o8Ze6Rt3o14Ph8SLUHdDPpuJ",
  "key5": "AB2mE6rNP33N5wRCvVramrtG5kuZ3JceVKwGBrBfk9X8qYeMxqkD5xm1nS54REoZxDatSiFkhC7G3CeXReD6kpu",
  "key6": "3s5HeFipcvf14LgPoLw2B1CDwRWeuadM8aYuAKggBfszbmmpuCfbzecpZtNYBGax9yUGvaHqSMFqEJ8kwS4zbr2S",
  "key7": "48yUCXZ8ws4qX7veqgNoJbUDdGAse1BALqaw65U2pjihqXMud6JVqNY1kEK3rMiV9YKJdtpRZpY7iGLuy5FP4jfn",
  "key8": "3yZ1FjssgAFjx3wyfKkQ79tHsxLAmSRFsudXLPKZz7CFdA9bEnvKw5pNBA5EYHgfNYf5fws6RJFhLt6zkJ6PrNYn",
  "key9": "2KYB1n8CGhYe9wwEErwf4zzAB2iHi6KF6J1butqa8WwHGkJBaSQiik1pSrhm3j5Kyga9tUFzEZQrAksHENG1YxYw",
  "key10": "4tmuuki5t6g6Pg5vgtVnRMXnDrEez3dWXqPn7SAJzHtwHdpyWLNzUDDEDzVCa7zuhFsiHLor53zYxJ4iK9hCLc8s",
  "key11": "4wRUAmLPzoButUfgXDjPG9XyGuSXhhWPgtdkp6qyrEsCrVfvuEGQX1Yrc8XeTEhoDUYfRfR9vWCfjeGvt6o7ypoR",
  "key12": "21XnoRv26biKCDx8Z2UR4Ti2XFAaEFwuN4ToTEMqDKoGgSPPuJgrjafXemyALaZmHozrTKq8DdLjEfCyCoowMzaT",
  "key13": "2Gz8ktPzksUnvBzHZRSJvcDoNgPv6hSWPB6VEzkQMqAgezGZduNxFsQuuA3NaFmjUcJiNCKDmVdGQArTcWuGybWa",
  "key14": "5RWFxUeziyDAdZDGvgzHGztyFGFerCS7MBcADqRVoFS8FyCLwGmu8DZLjDsf1Fx8kcVouWXKict51PcDJAoCg3Av",
  "key15": "5rw3F3objejc1f8hbgHa99ZJu21aXqdvAp1zFB5rUrv9ZXXXynxnod7hGb5y9EzMWMBH5h8QciW6rcyBLZMS4gfs",
  "key16": "2ZoGqesoGAdMQQXi8peZiDgSf2UFn3cLAFMQKpm4HxdVVFC34xZ6UYpsLKpouAuH8AZa6eS1rGQD6aAjbJiqc1K8",
  "key17": "32G1xfyYbAtySb1z2y7UP9sZEEc8NvHKxNRjcsZjEcxb7u9AAMRLZGBDAKhQLGso7fTLSAFgLm2PcpP58RoQ1aG8",
  "key18": "MvikszGweDxc4RVK9RveXAQdeLrTxsoG6poAq4ftgqnkC7zizw8y1gMdBDysaXTFV5YRN9AQyNMma6hKxLwHspr",
  "key19": "2g9AY3oy3KEGAUTUhpMHKv3re3n678MZKpe8YMaducy1JQR45cZsS8rpbPDhhZomy6js78Z5Gpvrg5B5tPV8BuC6",
  "key20": "43y4C8EqDoYX6cjqHDTNwEHDi5sEhiUDX3Jbuef2FENWAZKpq96Hq39bJu8ML2LURZfSos9QgHUcZbKq37KrTgRC",
  "key21": "3zKkUMwXA216cADVBSdSBJZR9bnxko9EZHqGoBqEoF5PA2jt63r7DZ46pQu3RxDnQLrscGTtwBnp7Dt4jzY13mFk",
  "key22": "cgpxX4mkiVVKUmJKgHPchmYjmvgFRY8g1gssDoBoFoJj8WxCpre676Bqs1tKnp7RpB8HJUWMdR469chH8rGAG3K",
  "key23": "2L4NsUEbuFmucrnt9LD2di3HwEdpWcKZmphnWz5i6udVHSfGLn5AbdFCrkzskuadK4B7n3w1HFgwPiPzymPaMZGQ",
  "key24": "TjAcbT15XmrW58j7dTx6RV2zjUAYwmjDmLWJgCXknk9G1M4wSCxcQvnyTfrn4okoztT9DEaPHp6FHxjVE7NLVq9",
  "key25": "3Bxvs5yb1hzUypPozSogjgPXLFkVET1FpgGqivPoiJ4ayn8EnXasPjKNUQ13WbkV61JSKCGwrc14YCNgEwdedtNe",
  "key26": "5yh1k41TsC1SQASRBnySoR142ifX633dsgRQtpSF3d6UF8p4buvT5NoBotMDH7XbLqSd48LNDuWjNEg3H1UqVv4t",
  "key27": "2Ykz3wRoKj8QE5Zccxrd3crURhLw1Rt1HBWaCKeMjFmir7KNQwP2apU3ZG5FEhUH23WaLq9qBKJBbKXhe4ewNqZq",
  "key28": "5uAFgdDAJjcZvch5U2XmjvVDxrge7bmGSuepvJTg4wBWkqG5kVgj6swf1HBegjrF1F77zAA8r1fvKq1y1NhCp5GQ",
  "key29": "2kDV8DF1fGwcP2p4dRLa5ueeBtm8auStn26vHHikYUU5bBNkNmDLieeWYL2ULuZZpcdEdEm6tcuowPbvv5Vah8hG",
  "key30": "2xT4Ds32rDXVqQ5Yw59uzdr9xu3KDM3YWz7TJaWKWYZeAgaP6tU6wuVthRNZ6xB9b2K6FP2JHHCa4gh4CCpZHEtV",
  "key31": "5tkPJBnf51v9vzv2yfH7SfxDVTDmGWFdvbs6wpm2bT5gVVuu9nLjh8w8sREw3TonezMM6X9SMpqD8n1wGJTP6dEx",
  "key32": "2PNUSRhiZGRTH8P5XEiNeLiNzNWYnuaJkTzNY39GhChtVb7UXqTjpMpSCYBpwEfBFn65Y7VGjU7prfMjVRxtHX1i",
  "key33": "3x3dU8UMkhZNVfzibCM2LSUCSKx4J53AYKkDk4vezvXU4kqFLjvB4gnQSzNHacgZS63M3U2iAuhVGbdqNtkfsUvU"
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
