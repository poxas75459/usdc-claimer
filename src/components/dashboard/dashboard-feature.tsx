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
    "2yaBvUvyc7WmFCRT9gjNfijMFg1P2fnZaADhDrbsMs4Td7FtRno8qqxYC4srT4yTqhHeGDor7FVyJNrdqyygrQTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBMYEwy3H9urQwGvPkP6w3NbmjKqooH4wv2RhRGVUNYfiCQGNGWgEztJCwKENkskxAZWNu7FUukXePQatEUrw3X",
  "key1": "2QQsiASBaTaCRzd4FFXduR5m33fCqhdYjPJQhZkbhLGyxEyhCULNiWzTaXvMrxRN6iyAqTEyuCuZZzysjJVifgND",
  "key2": "3tQPKMYNzy8XxuvgXACuyuHE9uS6KLgHTQtaC5QvGb8AsMdD7ug8a895wYqfzfh6u3YfH9yiZQRfx9yKjiexwhXW",
  "key3": "4t2P3XZAJPAvyAPpdJsVBo1B55jQvi9kBC4ipbGXUMt14EcywVQcLNJatfkiCQvMf8YMLcoXygtYKihF9NYnyWTy",
  "key4": "5p55LjFx91tPYByYRAwHyZnwgrAaVQxCzSshAMKbYSaqXP9FqvrZEb4SG1MpMyKibSTA3p7zQyRHuPSntRLJbyC9",
  "key5": "3jyjr3qgFNtG2djX7BkMrsrTYSLauxHkQDTXua9wrkdiQC67ZX6zLyPLUPHgQxdn5UAefWivv9Z6frRJcZWdWXsw",
  "key6": "2CP4zxhYRSqiXZJmw2p52Nuq7acSJXS2gQ4pNpJjdiU5zCRJbvHqjfMH2GN2x2KfPy9dA6L2jQjU1pU4v6VoyB9e",
  "key7": "3xqDNH4Y9VHrPj6d6j2cyaucD7PSa7sbq6PtAdox9d1CFno3vugfoqJnNVUvByVLUqkgycoRYpDLG59bYij4GVT1",
  "key8": "4izFf1vqQ7K1aEKb611mXmoeFcv39oWrEEDLMwyZxVVo3eEeYGyaQ4JRkp6xr18cVZgoDWkjorXx39BpfdcFH5YV",
  "key9": "5nbBHrEKEFPG3yfymxk3UrfQeQHPLcE1oc8ron5wzaGxfbs6o5EsvnpQWkHMXKCYSk7af89WZTqubdbz5r8EVBuF",
  "key10": "4x6SbUz69ZnbPG5uzoG6LR95DBrVCFBDhqj3uQydgPQ7owevdWHjpRMzPW7oVQM382VVwwv9NPb9qzqUqFAeozxj",
  "key11": "2BpbZB6JNHjoQD4djCQRNXNcwLFgd7SwGyD1cV4PNoghj9j6tFfFPXzPJLEPxLLVYRDuYpPiz9EHrXQZm7NoyrT6",
  "key12": "365oMfvseuPzzWcJfgpTibCF2aR3w19AajkDeeazvDAF8YH37WG6c8fpNzPNRpZYwJQRpez35VYu1ZLxVQRSAWL1",
  "key13": "2VBmxBC6QHuRBLyNiqkz21W6mMuQidZ5Ph6Dib8KCYuHrk4gAMUQWiBkjG6TTqgqVrgJYHJBbFaVdafoSCxc6xmB",
  "key14": "2jJTuuQd3DhCXpFHmmEAASqRFVCMmKTczYSGbDW2ZXXAo6jhQ4p2NbfDTBPgS87J7rBmWzPW6a4r82gLT8bmZMgq",
  "key15": "4LysywHxy2BexZdxA8WpeV8tkHj12LKJ8zzY7qMSwXKBUZxZbp5bGRoYvpTyne4sHnp27ry98dYxxUmEtYGDT9Cv",
  "key16": "2nkgXEGAQEzWWGnySVnkwUpxWo7zCA4MazbQ2ozyH8MHaE8pYRvewN1c6r68pjwHCMUq52Zx8tLuup3AjfxenNqc",
  "key17": "4p8unipPoyZt4RU2BecV5cakNqbdb3EH9R6RYZmdEUbD38KLFP2dtFNR7mvqE6AM86Db5bZY9CYURmrgqHZQ3rA9",
  "key18": "57e7w2UzXqJBKNL9gqwkw6oi5AKFfHimg62vYNcnnxQZQYAqBJSTCzcnKaYJFpn3WPmksTXKNZUKLnN3LYuVjyeZ",
  "key19": "3p2e8uTEp85RFWgFsgne1JfoN8eyHYp2JPNirVxrMqyE1UJeyDmUkF5eZ2zZdmdK4g1KgdemVeQdkCvJ29DoUdz",
  "key20": "5NJ9z6NktnXT9JpWkJWAL2AjrFhcLL2pSaDeTJwZa3XLGG7PMPtDJtBb3T86SBak3rYY3nDjhsaXgViUNShPVM4Y",
  "key21": "3dLLWztQjaMYpuqLuC6U4D68epx2EpzTyMmeucv6B5a522sjn4kEQegPBeViSjT3RrAt4cyZRdzQH5PKbomMHkiv",
  "key22": "5yv66MKXVsxAttruJHaBWTdKJohZCchm59tbzPGQDqHFKWLdAGEEQQf86jhbuCfoBBcEvd84JnkcwjmmA39UN3MW",
  "key23": "4eysksMmHp91NYXv42qg5Dskt4W2sj6RFq4Dfp1CnZxbCLVvcVu9sqgrgDAMRmKzYd9MsQGUaZrpacSWuHwJUAQD",
  "key24": "4xZUp2VdGYNtJnnpF7xCyjmx85vpERSnkgoTNNrPRbaK7WV7tefp46gacaUQKqmHEb98Z4YkjJ54k3mVRak5icES",
  "key25": "2ctyaSaPGSduYT53E5iJLYDrWTkKDhBdu5R6rpN6PSPRK7ziGCViGUdMMkh8Y5P7tLeNtSo5GckmDVAb7FJ8Kb48",
  "key26": "5arD3r4LUQrrTsfR3deA7Y4LiMzwzMvVRguQEc6hYfPf9xVrUNuz5yTFjmCybCsoK3P53PxaNM6bULtFMfYnjukN",
  "key27": "2Zrtt44VfvMaNLm4RHRBfQsABdZbeMmbM5X98FmwGB9cgjSUy6FeVgEx8jckSL7wvAssiYx7ZSPWSVu9cCoY2NqW",
  "key28": "5ibEy3BDYfLd4EwvWS4aDC9W61Wn9zSyMmurNpxZDGQkdEJToKBAdUz4Xoo1ZCYcVMmLm1jPvcXhuA8H8Qerg1CR",
  "key29": "5RzH8hjYNFzxGGszgHicmdoztYgxvFAmZdegyKWdGwxw7L6mJ5ZP3W9AkERhY6mRQyz9ak7uTBMQnqMmSdYchCNi",
  "key30": "4KFdx7JHufjtQSnNNNo3oreiW3ZKHZiy5wB4twh7ZswwSQhxbK8K7taf6KMKwFDtCeyvpfdoMy7GiTuCTqmhkPCc",
  "key31": "4W56LYQiB6X8kwBNARbX1bMDp9h2DVgtByKwpSnF4XPptk86QKYdvHxxyKRZeMe3d5LZgT86x87d7Tc44hpZtVgT",
  "key32": "Wzs55uACfHWJ493FcBkKoSj3DBMe3ZjDUim5tzQ8JDptDUkkQRsLFFinXVnBty1u4tajLQpXnax9Z8YcNCgFRwB",
  "key33": "2K172AmbXJp6yUh3713g6R6kKQMaVjb69Dp4YM3kESgzrsMPm7CUZrQBm6WvtAGoT4VSu6Cbva4oHDGsz7Peb9F",
  "key34": "2wMGKojV3uuqiTWmErYg6hZFboTUHpcQJKaqYo4t4hGFiCnca7TWhThngc7ackEkGL3ZYchTDaMhT7tVoUMY8YNc",
  "key35": "28sJF4xNUes1xWzZuJJpVytuCWx3wgrBdBfsBifDVsRAaQ3svKxeTLccdVojiQQfhBZJBMsSmbZt9gW5L45Co7wK",
  "key36": "3WuvBuTznYU32SLxKrQT7eyN4vKrq9V22bBAeisB4Ro4pBFtBvuvdsFRURu2xuefk8MCTKNCArRs91tZD1wG8bFb",
  "key37": "62RQ6ff7H12iUdpsgEHM1D8D6Ajf2HEGkYU77rSvoVRrmvPqz1Y2QfMD9ZL3ANxJqZck5GmiKwYdhPzL99wbftCa",
  "key38": "4ozw4YwhDKw8Y5vZN2aZgBzndBZJkmKwvnvQwUvJgkMEiBLizhtucyXtBR9fGdSCgP9a4HEXER8buvWBE8DjKWbN",
  "key39": "W2ey64ctwVpQheE8A8cdok66K7nbTFnNn998ePiuLNA6VQXX3hzVojHbGoYRfC4cCJjhBnnQQKSZhdqVCMsozDr",
  "key40": "5B4P8Mwh3UCMG5KyXrU4DgAX1Bc6iFuUT52EcJdrMLtR69Ux1aHinnRf4J8Kbu8s8u3yNTPC7nwQmxKzENiN7JPh",
  "key41": "3HJXPf7siBLiosw3aEZvXf6enamAzHyPSjpvMPETjVpyDigLSrgE9KRD84qWupeTKAqSfKHvnL9Kx4DQ5z7njd1z",
  "key42": "3JEjFCJsZ7eUS7irVLRqvFZxeYKRJ2MwbRso63pJsDWX44R4mp3EqJf3Dks6M8JfdTmPi6ophgwKaaDB1SN4m8z5",
  "key43": "3mP8sG8fXLkhEHKFaFW2CURmgo6rQzuzkca8NPxtGLTm6oFc6eK3u2ynQmwm4WFR2ReeCRiFdbSGcbwNT3MfVs8t",
  "key44": "TBZcCExs7HinYU3wKAvBi9AC1xXSg39JRTx9n3hMdKjyKahjuWtagsWLq5anSqVc38GB6wnGQX6zvRWxY7zcY8K"
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
