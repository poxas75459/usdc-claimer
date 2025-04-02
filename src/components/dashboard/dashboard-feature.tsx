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
    "3CPqdhGq5cmcWRPa3jk9WWSjvTvPevpEhVRa3znCcNYNi56ZaULTMDpFUNEyeTuduLSYDv1PnnJkKbNHkW3s4ZnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyZhuE39QtjbeYp1T2iDJM79WEyivRUb7VrMQcsHLpa7PDPZnuLUFxRbPQixYeBAzs1TUYGNdMwJikq3rinsAGC",
  "key1": "3AhxGwB1yYKuhfNqsbn9yuJbK8vvMjEFHCqDqoCG3dVtQZDR91LTEvtVyDpBx5VpP9Peg7nC9kvNF3QaaSXC6cRJ",
  "key2": "xdpHhoTaj1qhfHPFZRRgkLXhZTG65m2NPgyxtYnpNyd2WdFMPdqPNmEap1ASCDxZhnMpckYNAM3uoNEDadLtM81",
  "key3": "3ujdaE85VRNcaTHxGfKY9UjrgjHRhtEgfNW7tJWfcdYkAXzfqyoQGTuCXV2h3zNgGxAWhLvSYusJpmoZcrBso7Xi",
  "key4": "2HEE5oL33HAZySgJJbUwNv4Svdxa3uLQ4qYfLzGDta7uqmJVzMkxuR1Fey9rJE5KpHCKMtATjiTJHMVRs6QiePr2",
  "key5": "5tycBWqDq3RgGyqjp9nyhRMsnttnTTJ5M3otLmfQnGRNchJZG3AW3116K4tYBgann9NSbtpfATzg5Ad9T7R68ZzE",
  "key6": "62JTZM274HPg8eavKWuNkpNQZcGPXeLM1pmPEMJQvYoBNNCm9yqAahwjKN8sED7zgbyBdAQDdSz4kGAyBxk4B5Ru",
  "key7": "4Dgg8vXj4ChXG2gs31a1FR34XJwt6o8G4r2xiBD6meRWVjK6F5F7CWCVZcZmSk5CNrPDmgPnmEtW2M9aYXsAWXRC",
  "key8": "44TYM5aj1WH8X9B4LZQZof45Vc4mNtQcHmPoEHcAeo8BYoE69Qu7fzATFLgJrM2AfcQ2mwAtnDMaoWWWEu7Dc87U",
  "key9": "YSkS57k3mHXtknL336dsrPh6hejfWgrmAhFEztdqA4UFeinBFTpikuCrmZ5i1SX9Cr6MbrnpgRMYLUgoNYyxjhK",
  "key10": "YFWyjVL8MPbnZzp2WXcDBpBeYdyKMyo5TBcYGaHRmLF6iP7rMbTbgQ3GRTv4ZRsJ1Vb8UhTsh2LdbxKTEbn57Hy",
  "key11": "32XwLrF3UrZS3fEWNsN5t11aEzmoJvCnkSSMmG4ExGRiK8Fp995W2DTuCyZbwxTsA91dYigWjiyazAesyDkxeMu3",
  "key12": "4cnK8onKGFm6i9k6mq8JrGZRhoLBHVGQXmzka2BRbpmodFKmxSGYe7zkNb94zurcj4jH4dc7Uh7iqgHoVQx466H9",
  "key13": "2h8VZzw5eekcQ43otBNETs37vWtgmkM9u3PToCvgUwLrQh36zBSPUgvfxgNJk2K1dToPfGFLbpGVsGAjvfBQpanN",
  "key14": "2aBKHWpfrMovqUKNFo3xSQbFnVufhWGEyS2LwXAR161r2j1MZfKfToidqdsuKEmoLZekbGfJSPRDkzzDK5jyLTdm",
  "key15": "5zw8W6qJe1ozzvNet24QFKxfHAUJxt3LsGYcbWuWXPFkr4TavMDruQ9m8SAfDLK1PyE97HU3odoibJLiZEUrMETL",
  "key16": "5pNy18n6mriJ9XNsvDDarZ8CBwkmwysdHpY6dZjNPbavuUkbwY3ab4wsndnT34a2An1NLqWDtj1zpYhbgiT6X87A",
  "key17": "4BxRGF3AhmZ7MPFhJ7iLk9cKjLi3hK5dAzFV24qQeKBXrQm1P3RRvpQ4UT8kazjDN5zvzSXzYepW5fG5aCqXmMHM",
  "key18": "5KACD3fTwxbutiXKqAs3LhkBqMR96enybMfUpCWeWXrkbyXZdpzjs4dVcAh39N4TUsw5HorP3zZ4khM5gEfjVexy",
  "key19": "4P2nBkwrUr7TFcdLqWGaFDyDQiAA9vPLAUNXRYZzzivbtc6jEe8VXNbAMRVrRZcPEGH5z1KKHD3hCVmTYLL7tAGm",
  "key20": "jAvkrZhwYs6Y6Ne52qBQx7MmH4di3mQBuMp5N5YUb7QNBMb6iF3hLruNEYVYJFws1mhGSMeU8CMFUUKhj7zLaZY",
  "key21": "2uzgoXSGq4jhG48jXS7vcLeJzdpd2CfasCNm5ouGH7Mke1U7yiZP6FK8gE3vQY23BMNQHJMwBo566AX4Za4XbH3K",
  "key22": "5aECRfL3kWSL8MnKt7GgkXgcsfQnNPwihDLNwQU7uECmdhXQ3fX5V5dyD5PJPHvkUZAJRPFyheg6QTgb6jZGz5bD",
  "key23": "2dUtWoyjLLBLg8pEUaYhK8QG48w8ov842tvaVjhw8S8uZKJBYNn6vVwAFSZ4DgaAtcSk6wXr8Yf4xSfAc31mr8vW",
  "key24": "3Qq8ptpvmAQ1mw8MpLrfE8YB4CNWoer4UsAmTwQuW9q9f7ueWdMMJzGMr5Mbx3WaUXJNDGd14H2JxptBddkHswNr",
  "key25": "sdJ8zkxWsjKdRxept4Q7NaZP1rL9vDqW1xRrnTN3hVWcf5LMaoedKMdjc4Wq4ApgDmQBVCtPNFz25dzEK4v2QDT",
  "key26": "41izBzpzGncNrCSKvRZUPoKReg6WXdUL6sVLBV3Lnoc93Hg3rrERxXZ1oBByo9kuVP7fV9HAGB24U4zt9hbjxxZt",
  "key27": "43BEExmX6f4mR6hSw7GYCi8qCmaWw6KLrXJtG46CX3vy1yNo153XpmpSu5Q8YE2uJPwFjr2dGoc3mwUfdP8Qwpw4",
  "key28": "28XM2Z5uxXXCShthfq1Rn2tc5du2Ssu4Sb4aJGB4WDqRDeS897oT1U47YLNtiwYLVRoyH6QYG3DSvVHDSaz9xGdG",
  "key29": "5uvbH7ophxVengarh5QnqnG9Ba3DkxZTx2seuWcx1d8a9bekHe9zSRoB1FneeKH82UCVJaZ7i6AkGqREbFyW66Vv",
  "key30": "3XvCs8nWKULJLAaJ1qs8CivHLid8UsJrWavRaoJGTyF64FkGHRFHqtgDZt6g6zNw1AHSEBZPmgtsToyidkdj6f2p",
  "key31": "2HWN3z7LQZ9pfQiEodaUcbg3t7JySKVFkJoHayfdHUDeBoJB3pJ4msE3isfhCAwAZMTk4uiwqFzLctNXk4Y1T3u2",
  "key32": "4q1uN5eUmpPn35uUssjLGzy42yxVj8GoZ2E6XDcTgQBArB74ssk78XRJoFrUSevRZdFKiFUHWeQEYTpFWTmms89a",
  "key33": "5G7Di855SWHB4MTyEzSZgHGmsr1xNGLiicTffe4JsYZ4qipPAadEqvfJxU2ndVRo3GwBLdARzCAo8BX4KxYmFEpx"
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
