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
    "2joR1MSGzZevca2hYgBwYLQFF6NBXy4XnujUbs6yojBfwpwmXLEE2YsXc8u7c4wQ29nNzRrp6xYSbMXWhehYg9ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48H1Pw1XEjEDfT8LvkL8zrH7j7PqCRb7o4M9XpF994pQyFXU8xV3SLbfHNDu3je6bvnUZ4aa7N86gXF5wVrTwhpM",
  "key1": "2CnkKcVjTFfpKfJvdE34shFiVaD53gK8RDQAuTNi8k8PeLKfgAxJYL6cowdRbKiBRDk1WvGerP1AM35miU5pZRYT",
  "key2": "2PKGDLakVEaiiUGRZz48zPns2cUHe1KnrGrstuKfd72LNd8MaEKCnk4ickx8ngpv6AYcvaLj7rLnW3PNCXbPJi4Q",
  "key3": "YotcETQngG3mzmyYtotB3JGeLxy9Fd8mRPGnp8m23wUt7vFzc8dHRDpjSaJEBtQaWHp76DFzM9nn3k4Dr9W9Sag",
  "key4": "2g7acByagBGiwknZ3YQYx4y8QBxWGEz677g8eQWECNAfjRRq3u8XP4iiGrusSRoWewZteurQqEb3Yi8uvVRXWcXh",
  "key5": "2yipbh87RJNnAGGgXkkrYCmLhNn7GCNqzDBqFmAqzub9aRpin3zqmDapAWHUBpMikXom2hrHSX5Xaki4zAMWrVEy",
  "key6": "5Ch1XdpGMBLsL958aKFJ8y21GTQ1FSLCauTFWxiYmHBGosktygnJo39k7faM9Zq8t8aEJvNDLRGmaTo3SqZqyJzj",
  "key7": "3erMg4Zq9Gs6JBdRqvXhrdhv2NNx6Xm2iHrkzXNEY7mt78pfYPodrEB4U4kS3PAxqc4L8DibzxQRQHP9Wo92jd6c",
  "key8": "4TkhBHhh9jpVcuDZiz5oxUmTxkAX2W8kxtDA7LU5YFRhnffCnymJ6vCsvnw5br1ZxvhQw5tJKDZz3tvQdAMhmH6A",
  "key9": "P4Zd4QFo3b4DJkdK3jwAbPM9z1zxRBxc2YjnmF49dyswdrtitQuxMevDWPtDyFYqrNCUTMLtE9wTXiHugdniHnu",
  "key10": "38RmaGgrFNVNsMo6JUTcz7WLsethVc6n3TA9UPPxrvXzg3q4n9g4EvPVqVtJbwpxfxfA8CYVFhck2zQaotWGGj1Y",
  "key11": "24GtZggUn96VLj482WmF97qNFqKRoRvuhztZVxxKA5EjG8r8v1ry3diJiTC91gL6wRa32upXrfX6dqFQs2ErJBEa",
  "key12": "FJaxtrFJKfXyHffKgWqqVVMfTz3UdgUVxgVVLLr7w19JtQCDJX6mY99yJWHsLHMCzZDYivewhniCU2kL8ugYZFR",
  "key13": "aXopmeQ8Mhqp6RoUGMHzN9CuwG8nHypHQgTpaNUGvEz8hdd2Qnu5nohjL9XeB7TRUqmEdsAbsKDygSHwmdzZwhG",
  "key14": "4zpGLspsQckQZjro4918htRCKtopPBcUfgZWZMkNB4ybzbGuBc1szH4VtL2DJhCcdC2x6qiYQetvQUkZGByotmgo",
  "key15": "5tEJVLfjGMFfHB18qS5R99AR3H1grVvUmMYkLcdEg8QdZquJD5ASVeNDjCNxeVbQADGKXcr4fZxvBbFUYEm374es",
  "key16": "3ZVYVXQuYZAACuXSQ5uhkQvgAgaD1a4WHfhat2hPmyNy3whyMHtNS1BTVSqXyG6fWAa2ybmRdzpCFLs4smoPuw5Z",
  "key17": "5JZ1K7WdRMiVgPKEw5NVdWw5cz9UJW9F866iA78hbBEdUtThB9EwmvPiYxoBVz2GDge9Vud3w7yELUKdpc2faton",
  "key18": "5vfcB4EoVcYp6AbAUFxpFQc3uyaKETQ74hKe3E9dnfNVRPigPmXfKqqCbZWaUAWDKjpMgEQZwSVVZ2mBdCnTK5fZ",
  "key19": "2gnXE29jd5GxkpoDgxZGFad9SwoWbHFwfiH9cDQqXLXH2DpWL7yoMfpeJ3b3GXV3eY4WGqjhhC3uhmNgGGrirN8M",
  "key20": "3wQufX2Eg1j1Zt6dww1MsUFgyyT9iTuJ6ryn8L4iV66Vg8ZFoXmebecQjd3wHdy8xtcXp7caifbDj87A6fT6wTEZ",
  "key21": "5HBash2YJN1M9T3fzbQbdzf2ivH3ZsvRG6c3PqUbdQ3Mdc87AZiTU691MHPyj6opaSod36eVmNqrWeKvacx1EKLs",
  "key22": "zh36FtSp4J9ZZ8quJtUGpSo6jz8CWL5id2JWaiVtPWdq8BMUCjPpuPx611e4f8uRhyPCdPzHoovSb5iRFK8NLWn",
  "key23": "2DBg1oYN3gbGKWf2MvHZvNsqaTtJwGoTG2kWmoycZGb77XEx3UiGL3MTfgJgXNXDh5vTVjms6Fe7bKNeNHsPXqNN",
  "key24": "3HfmjQdaNWosptXagHcwcic7N5Du7vNuAx1uRsgYUaB7SojMfhWyUtvcDAT65w3Gbova1gXiuzMXyRq2CBWVBXMh",
  "key25": "swY4vAK7nHHfaEJCzZUVHB8XFFscii2grHUZVuGK8dgqRk5FdCtjr5u26usBUH7pNLhV8mT2jg39TbvXKSuqgpN",
  "key26": "5Wh1wxbapppG8b8HwxtfE9myk3eHqtNiUGdxDUcpS8U6dSw3bVGoPkvJaLEYW8KCFVetL737ec3YvfMWZqzbYqRt",
  "key27": "4E7vjHgbsmKKd6geoaaYMjDxBKHNTPRq8MJeX6vvbRfyiHconcN9Zhy3ce7K5KvZ4WcyMyHGahwVVJkqjYKycTUU",
  "key28": "4mhC7nysTCdFqGsyf8bbwV7u1waLVb4BR9wZmXgJyPgs6fXKBdeKyAMmWhdvuh7KWNM65HDczDTtJKq1YENnJpp5",
  "key29": "2psELMHmW7nKYjSNmaCigpxW2FgDm4ciNu3NpQXhrHAuf57AghvFddYWqBXrpFiCRD7RhKPk2WBDzmqViwcJYD9h",
  "key30": "9DWhLfWZxZufkCpt5KVBzfs4gpTb5SSWNEKA9U9vTasMXqYasQ97Fyvua52Nj7w9Q9X8SDCbHMhEsUZguBi295k",
  "key31": "51M6aqFoDAN6vDpoN6ftuAGT2nbeJdDpDvyaBPiiZSYModJdZ3g1zEpBJYSYxdX5JRyRob24KMTxpyHHWT53xjUY",
  "key32": "5twpydVwBe4LMdtRbnwzoVzeHi2PYFyvRLroZMsN2gdtQA6MgDPcKioo4z7XATCMsFjTy9tb3diYfyDFAydKYHY3",
  "key33": "5VddtGxHiswwVVrdnKWGCCEwSQuTwScrKjosF8nGY92jfJNupwt1t4hPwKA2EGBRtTaU29SsHmwZQRJNbeUWReMe"
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
