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
    "mmcEWZYae6KwLSzXTvr7u9xDG8pmvE3h5887zkW88fxH8FtpDdmv2cDYKxjEgdrbUuy4X79UhqPq1yfbE9L1YZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pn19fqEFo9bdAjKs8A2eEMLVXEmoFPgtGJwMZcv5utEe1xbXaVo83pYoJCPh2vmrEWp9hJpk9SYjYFU82v2Xmiv",
  "key1": "2WqDrW7qx2FqScG37hZ3AtHJ4th2GQF95NSgmSCXzTLXSDbVuQoKT5M5KmRuYL1dTb8jdjgn2sHy1ej2s7NndjGb",
  "key2": "4w67eEg78kxSRpVYTSnavaZRusixQrtpBt2syDKJJXk3UYsmqupVe2XXrEaZ7AhanvAsEsp2XnHZC6TYG2r6Dppq",
  "key3": "2GZeW6ACp9rQiwJSrS2wVnerFt7uCPbU13e7qCp56Fw7rMtapv38CEb4Ba67gvTyfSWnSVkhLeGNQMyMBKFhUiqS",
  "key4": "2nMuayGjAC5fHqjajSMxmkzGyo7CCz3oKLddkxfsdSLuXrHFzKPGRJDNvyYxL98T49Z38eu4W7hCb17PVW3JUv5n",
  "key5": "2aJzErfj7AURTZL6hLtoibzDBzzPQfPt6LYPhBNgo623XY1r3wkWCU8hCmuwHuiy1MAvwhLDrWntb833HJoyifqU",
  "key6": "5Lao8Gx8aUo3dsxovFSEoy3nMBPdNXZymSdunZFBcLxasN1rVh4c8zgvUJSnkaAmQHtnCPhJKwKyrGBBQP8RB9RV",
  "key7": "3ExfJsMCbsaKoA5gLr6AkA1tM17tD71KpBi9HDFVWD8N9DYzEM8HDuntsMEdTRznDYZxo7vr3nevtgXRniKPm3sa",
  "key8": "4KBSmkLtFtr6gUiSDQSrqLM5QRTEDCf53EDegwiMQ9bDmbF5aUHECzn1CBJYx8y94JvHRABumqBpxvE2uZAv5YaJ",
  "key9": "4XBXbSub3SAY9Xa5j5mDEnySKuVGPoGGko1annSyNEG9cD6bhPwnfGSSvbihu2Y5WMgDXReQJDddkS5YNYHgcLB1",
  "key10": "4kMnSekw3a2UvLzohHhPZFMJdaw915mMxkhdqSwGos1SgTPctsbQVA4FyzUT38fG8QbFQww9QUBqi5uZQotbwQPN",
  "key11": "QCGqrAxZFhr4avJXnH7NvjXdhpuNBFjS4wjjSmcBrbxqyxJanfye6oQn5HqXnPbMc9QphpM7thsRu6AXZVR4zhb",
  "key12": "4RwXs9nt5h6rQnZXDD9i8knVzo71CaBeD866vBjc3Q8ewz2ZF5nEcaJp8VcSCiD3baot6JSPwFXchyX2pZQvJV83",
  "key13": "5tPFJieExK5ybhSnwhRbLqfJBjeKX71FoRWcgiMYPGD4EcawEirp3rh3rTu35bvtSkRTznrvGZ9hVHxrujW6xVmM",
  "key14": "24r6ckcroTWox2s5WRyjn1EJPTr79VuQJ3vHfEUDe1AD7JDkjpMsrFWgwXjj2ZhRBJytSkmwx8SHoBjXCpoHuZ7Q",
  "key15": "5UHv9CziwebWyut7jUcfjpqJpuBBrZvL2MmWtbycazmFAvRPrJaLi6nNd3o7uLZK2BfnQkrpSFf7Xgh2Z8JyGMQz",
  "key16": "45Fy9nis5GwwxJ1KMzTGWFsgJk7MoVJ7WmW7YwMJziKtcpAKbBKEQwsEhosSqxgv1aJvAFSwMQ6zn3HH2VYh3eFp",
  "key17": "2ZazzzFPVQy9F1xXx2oxqz4p59Pv2Q4xJwSJvGRj8oH6cfvxgsd9wMbjXJQ6WtQC11oFJjSnnv6APZcRkUjm2eVY",
  "key18": "5Y85nQ3w6U8PeH87kEbsdc5oS9J2bzce93T6SRwYYyHH6Q6qPBb9riygZjKCaHc2FZ9XKpr3XecxbcaiDHtiknJd",
  "key19": "3s127A65S4EDmhsvyzgnbRwW39qT2EdmFY8K1be7XBYxtUwKyGw26Hi6PATnzSNM227r51ivn31gWz1ptmiyi2Ev",
  "key20": "4pRoQPXLmohLpp6Bn5u3YJXGnEGQdbaBMntpUFP9HWGTDq9P5311pxKxHkaBxfXT74Vd4SRywV6bpA7XeBeNYd3A",
  "key21": "FdXuAmGDRs3M1vcZZy5uQyRaM12N9MgNZrNViWpoEwAourUy4RTJAKb5tyoYPohXHNZniHvmr9wyCrEkZsNGVp1",
  "key22": "uQXU2oHzVTMrEp5KxH43v9ZxH6h91c5stpREPYgaiL4vLL9zGMWihsXfEHX8nc88PskzYZE23GZ9nGfGYy81dFR",
  "key23": "5UBBKHy6SwuoDvLA9ULmnc9tqP8v1mvQzk7hDtKyo9wA9twsJ42ytJ3h1j2NWcPJse5kQiK3b5NACVyMAHuTqWRS",
  "key24": "NdEw2aBMRmHX4mbwMa4uKaTEMtQG9XwPFBUk7H5WrowG3y13Nd6fkbzerw2mC5XF9qssc3mB7zAqY4wuEMSnjJ8",
  "key25": "4YaKWkkqKy9aDyYxoiqDxWDQgttuM8ts3djK67r9uiEwEWqUpdVFdsdwzKpJ5nni4cy9uG5gmDBVNFJRptWwf7B9",
  "key26": "4Qe54ALRxrMUNbaKtgnzXXNmnkgZXpH74q7u6kjMHqMM64X1kwJYgvnqgctkjsC35Eg5c7qqsMtSiyGQwM6nZDHR",
  "key27": "2FSbNsMTJsTwzxMFAm7EChdry3w9vDBaHgDAyUVJb5A8PZ34P5kovU1kH6De7BJS1CrjssXrh4nXiiBHAKMeUDmd",
  "key28": "55JoPer2NCTinEEuhdpCqsyADnYdJbbJghNLWJWBT82jAJFbcePwpUX5G4UuiFvdwh6G1CK2R7V1fVZBLKMDzFDL",
  "key29": "3R42CcKVj51eWZnM9yvBU6JTTBzfp9DcJhqzr7zzvj8by6hSqJH5rNLnDkbBjCVVJLZ7uXeVyExMgeBb4JsWzBmT",
  "key30": "pVgoRgxN25323igqdLuZ9U4THm3pTbYGpTzKLkPWMH5hyNhwMKbKLcfZabRKNWebA85TSXNb88aVZbaL8Vn2VeB",
  "key31": "4B1qe9TYLTqwMtoddp9i9ZwVtY2N2sEsNnzLgioNW8KfbAyg27cvrszAtVxrwk8A9GwhrfksxCG179vEsvPMYEqp",
  "key32": "5quTR6x2PHJUAPRy9MrJfXmUtHkPSgYfinWNqiCtjhhnYtKVaqpt9Wm3Gfnnbxk2mKB4BuQpDdUxxmS1MmRrDLAr",
  "key33": "3sLPy5zoRdb4Rh8qeSiHXSxmRFSn11ohK7HdBuaqsA4HnNrbJSmDprknWYJ6FS3GRftHwouwokbK7VVwRXKPsb23",
  "key34": "4ebb3UrpKnDWMhTNPXz6Y8CvhoUbYwhJUzzUWRS9faUVXWhZqYXenka4Br97iAhG5r8mBAmLtLe2AnzWiD1rsx2g",
  "key35": "6kW96bBKdyasqR7opQLt4bVLxcMKoXzSS2F45wUTnxGmD3WUWccFu2z8CRcMWKz468DDqn5EuZw57X64vTGpVUh",
  "key36": "4FNSdYv7ds1SA8yrC1KpQYkYa3Z9Q6Sb4CehXvrTzEbngp9VtH9rtXCaJRpxDPCRXfYydpEmPQ6NAy9XN4G8sbnY",
  "key37": "2Z9V6ogutsQiXiNAE7cwyZoUeDa5ekYBPJ4gx8TBCBPctYjHtPRzK2cZKwV2eCQjrq8Vs5FPiPGZx2M3mR2chDLE",
  "key38": "AHYViQL9NTAf9jv2gs3MsZ2JLQtH42Nb8PJD6wg9nymvD1eqo8FeEw71wmpAHGY1B55GDgrA2oPJtiDiNred4dA",
  "key39": "zaj4z5pQ3f2pP6nDvTi97qabKWtu88rsWuYq77yn43TVXNmpuPdWDi6xB8ZQHrm9LGxBFy7g5G7UNfJWbqhGoRV",
  "key40": "5AmY5JKucN9AZuyn2wNZVNf7LtQa8ji1RGLtm2qhE3p32WbmWytzYjweJoLn2R6SK4nSht1D3FXR28Q4sLDiXHks",
  "key41": "4oTKfevCPunGgwLDfnqnKaC4Z4kujNDuv43CpRapdVrJSnZmUCeeGZd3XSNhVRcxa7J5kR8b7aqxEYfwCsXib4VX",
  "key42": "PK3XUXhNufqRMYwuVw9eADHMsdn3zzT2uJz6FvrvmuhHmiDGhmCuTVKHHmQjGckx7F6k5kzKAxaXMLU6anQ9Hx9",
  "key43": "3RaZdytnbpcBeRamxR81HZKqakGqEEVCWdkgX9aGw7HZ6DvjX9xzG1JoYbtJXYTWqUMMuEGHz1xxfN8R79FXMXEc",
  "key44": "VM9nX3L5vYTPKSbSRByeYed9EPRPZxX15LDUafGTE3ahWWC4jXEjY1tJnB63gWxXWTw2JfRnj5vuTaJPPQjgnjE",
  "key45": "58k3Fv9ZqucTyHfkVsqobw6V54Ry2oXz4ACvfB43rKQRAgHEoHCLKGB9gDDrsLWz5vP95QCMsdZiUsZFRyfKSon3",
  "key46": "nGiXQmk2WNGRQ3qo1nPt4mQ4so684Bv1r45MJFYNnCcXKjnvB8oztnCRuraDhX5tZgGRhrzU1UxQwrygkqSsvzW",
  "key47": "4QPxoY7yUc5YWjahzWeXXAJVx13fHC2zSz5HYe9ABdixCexqZ4YXcsuhEmmJBeyfN1EuuvxTxBabwJuR51JjsoAY"
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
