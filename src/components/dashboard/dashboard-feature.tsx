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
    "3aiXDjhxk696aEzxvatSZ36FPV4aCqdbf5KJTMN73Tb35tzcnFMz4a1kksHnNNtiHdt5YeyQGCC8aUNYfQ9WHdYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8JGNe7zceMcohBAVVRKBW6bhngMDeQVV6iqsqA4U3i8w9MBhjkZdzWDtt49zE2EcfMyfLaA3QCikigiV4CLX6U",
  "key1": "2Afexi1i91tFPzLkjWhWYHTDDXPB8LoDMKLYgrE6EN1DBymkHfyTrL9shz52E2L5Fr8swjhL43LxsuFTYsjrpq18",
  "key2": "5cJ9dW4eW3aSF5X1ybzmVTSd5KMvoxNxzJ9rVuYuWM7zMfQCM3L9BUXTA1wyPkptebaWUFpsrQfjpojVUe4RCaa9",
  "key3": "2fhiWqh8dvZixng4c7EoeEXfPVJV4heuVnuj6zMQ8XWxCRd9g3s9gprDe3rQ2B7Y25LUAoUwWfZfaAjGS5pi9WmV",
  "key4": "5Q1G3Tt3ZF7hEqPvWNRazaBzQN1dwXXM6nBeuPuuktLY7GaLmq8THDzkNh7npVpKdfxkWTVyZ9diCeqRjvMfwXNd",
  "key5": "4ZCniHBn9H5vcdfDLjq5qKKn4bZhsGb9oaDas879cbXdgd2qY3KA5gUVPZuzAYEN9zkJWeW8Tt5uuys5Mx1mVpEz",
  "key6": "2PG4gafU7J6BGVvHes6ycFA3Qn7B2sET9NN9nNtX2SCBTxPtHN7dUR8jiqMhW8CEsLGXLv8r1WQSDrzRsDw3DEqk",
  "key7": "57SdRCmSbrwkJFHyaWBJgtbYbhhFPHyahohCiyDZTmdiCWEzC7NX3S8kKSjUzEwMJZDqiAGCPuM8Xk3EuFMPa2QV",
  "key8": "66u6yDqi3WmjKWPXVJazNxEadVotgSs8Ca2veKeHNL7PB4ngKKRMsLDGthn8yFBT1iLjNhG3RfjKAz2azvR1EkXU",
  "key9": "Fd9qUDz1gHwy77CuPk6yd89wTYj6Fb3sDGnpAkERtHC2cho1V6a4Zj4M8t8rSc8YBYArKwC4DtJoytutnh5pvqP",
  "key10": "4vHtCBVhWEduLU3LV7a9rTVAygsb6kZBzFZiWhQBctDS7pVV1UywHQuUQgGTFPz5pUBrj7TdZcU1sqAirEkRxzjf",
  "key11": "2EhPmayBYVPzwhRwXaBir5CLzXjL1yg7UL3EAUpdp1Ffkpnsc7jBnwdFX1pFe5T7JK4Und85uWadXBi4tCPb3xLv",
  "key12": "44f9LdpF9kgPEz7xbJMJkpPpcv6yzAz9gkqieGkAZBD9D1dMYeuGZaaEBLtgsmn1rawxHJuZGLZn9mokfaojMhWJ",
  "key13": "xgk26sYyzUPMXUcL37Fytwwrvsteph7isv9iYxYPT4tMf32idS58ZZxTVxSMNuzSJ2S55VU5zW3uf3kKuq6QeVg",
  "key14": "5wto1AxK9dS827Thpec9vmwS3qVdRA4stoiQfvFeaU47jzo87ZuJqvgUUBfiNoFWL4LvRoofGuzhKhC7wEXETwhq",
  "key15": "5UpyJ412S83GNvPSMyfSeuAECeN2Dmf1y1WcSqHnKycVY9uUH3bd5aXH3qn7sKo46N9pgtXsfYpQSd3RURrg3qcS",
  "key16": "hKTPKwqMmUrkWsuL5wAr2DWG8WQDnXQBdRQLndBFsB8uPgWvHSXhMj2v5F4X5K4bdVZqr6b5ic2MYBbv2raSDN4",
  "key17": "3fGhkBkec1tCmErBQWUFNBnGMEFVVB2cWampLCnd1Mz7ELWkk6npMhHsfbZ7gdmcDduCQh2mj9NAruE5b1cNZnVz",
  "key18": "5EJbrAhapji1nbbNWZ66ofzdHvUSAtihGCH6jox3rptU5nYTGdsrYMT48BBF2x5bCiqb34oA1gx8AsAYjjWBcv3M",
  "key19": "4JgfmGo57NLqcdeTPfq1X9iaSqQmLRJ56XYsrhvGmkxGP1TnZLDgkshT43hu8SEKFe5SkQkGggMbtCHLNm5mE5qS",
  "key20": "5wg59hSAjWQ1gPgktCJATDbL21bRBrkjDUQCkWjGGUEJ8fNGjipid4Yx58XEqzzGDxcMZ6DScHMu7Y7HeNxxbFLP",
  "key21": "4hVSkB596uHHgTuzGYqMyexZamcEabkGPyDcaBPb1K8q28wstv4TzagZt2AdTTEjipkfXyCFHzxBExdkcyrhhK9H",
  "key22": "4mNjWw2gffgkbmY6HYy628RsBhZtj7UDv41qqJixZRY4dzeAJ9zbKLKpdknaJpDCAZM87Ym2mhUudqYPQve9tpst",
  "key23": "Pq8hsa4ZST9xx2ZyfMPpuCtyNttoNzD9uv28KbVc3jEBptsTuc1WAZLkfSPiUMJL4NkyxshE2CQwEAvVRyEdS3t",
  "key24": "1WoFy9q21EUXZBQY1FzH1cnBGFjpqV3aGTn3YVXYKrUfCevYiweJBVCU3pfc1tPhWPPqJQExuuvnYvdpRGimxnX",
  "key25": "3EP2TB4LuAggdaZgkA68gEvnoR9YsPR4p9TpZfduiAoEWWAXcKLcShGmo7bvaaWUzLfy69UioFqAX1C85cHAxeSh",
  "key26": "3oUQkDe8CWtrhQ8EvZ4gnpwNzKE9DQcUjxYw3MHardL3GAyhReE9AptBYE9zTB1eWrdQcndYfJZ2kgn4zbKjYT9x",
  "key27": "yL4J582JceXJqqThZ6GXjZfiZx88QTK4BzJTK7vfSVZ8if1f6tHnDmX8ywxdugSxTVu7pJwabQDZW2pbsNeAaJX",
  "key28": "3yFdwHb9saHAoLdUqU2pRgC3bezxpxbPHuEEo8sY7Ktu4RyMMQyqCuYwhTrynG28VmL9vPRE6C5V6RvSyFV28iwQ",
  "key29": "3w7LUiHHDE4kVa8827zvCVwME3tMDRxcdeKScwrD6Xbdwfe6gbHePQxJyGQ6mvWAR45mZQrSwxLdWcCsm7HgQsGQ",
  "key30": "4orEbTj2mc86fLcscDSe3t3v2XT9A4V1xbDt1XWrEU9SKd3XuSk5QW2HW5dcysh7vYR8WViNBzDd8bZTrvcVVnok",
  "key31": "67YaV2nHeP1JpucwmcKaKWghtQkubRnfTXR7n4Y39ttW5iEMfkNLtRve37QhhAyZmTwY3w86QxzuPSkCVuCCojRK",
  "key32": "4rwjecuhk4FdoXMf8dwsZ8uZvsxvBwAB4nWfZPegAJLraXh1gbSrMKC7JjKimLAE5oS1jNv3FKAeGonQMoESZ4yV",
  "key33": "36tFmS3UgYtTbr4sAshpL8cjJaTNaqWh5RvFDy5qU31TjoMQZbbPeS1bBKoXo3NQWeKw4jjiUzzbBiD8xoCo2YoM",
  "key34": "ty81jioY93w5FK8Dr3nqbL18JUWWysRQ9f7yaYSZv2eNoJHLwxM2A9BeEr6PsQYFGHDi98tabXvYukgGRvErkw6"
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
