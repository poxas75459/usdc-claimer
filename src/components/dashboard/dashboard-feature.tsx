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
    "5sVmUTfGNkWnYfb1pruRj9mCRGnCo7HFEWfPYYoPGsE2SNqoivsPZJqZvTfv5CL5JBx3uRYv9iGL94yeawxdmPgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qnh5bkZusSz9Y4vuYEZ2gBcUjEoNUx8fqAfvytgoMQBmvhKDrdmrdVTyHw6wZzPF3ExUQQMGh4ywVfTkA2vTJQf",
  "key1": "4sgbsDT63xAJBD7Su6z5sNgAuFw5xc28cS35rkqyYm1itJGMFqrzfnxEUs44ohXTcX2wsJanGj6zvfyVfufa8mvx",
  "key2": "5Ldta8T4mqofDuxvP7o6TKyTg63CBiCLWUNiAvWyU3itvTj4c1h8PmHY9veFsAAzVpwcf2d1BbFiqwpbmqweURNN",
  "key3": "48qun6tAVLJtZHenpUw1KzhGPnAPtRDNbjGcSphP2CbiSMQ5nPQFmzpoKkFmLRKE1RbkMBZgRU442Qiv91uAfvTh",
  "key4": "4EtoFbrdunrUeNTro5im3hFGid18zYbvjh1yue1uvxdFTGhxJrvJC8rrjAmHpuTvoMBPMSJyLtRLpz5SgNt9XDcr",
  "key5": "5oYsLXQrktSwjPe8LPfqSBDDDZqikehyJUkdWHrJtYtwvYnBUji35np5TYx7XFoM9t8NTV7PLgy2nv8mmB3kDd9f",
  "key6": "2FeJ7YhbDUiFk2TRKzbkLjKLaFtwxFVm2X6r4cAjhuNFydWb3kyA4ybHcLndvArByjH1Gux1njTQGSrTYfWhXdq9",
  "key7": "P1y7reHVF71zHmm4T3namHAXyaNwumA4kJsD3ZnjNQzwM47Q4mZPd5MqPj3svjcFiJfjFzRkzNVveiEVVLSJGdJ",
  "key8": "AzZ6PwE5YGFN3Kj4vsdBwSQnU8FB6pfjiuS4MQ2hRx1Tw4n5AFyon95kQYiK3y5ruaTdyGAf2eCbta4NMHUVDWx",
  "key9": "5ob8JDhXPG6aN5u7jA8bFCesuRRPE1kRHRvUwwNfzdyn7mVSpWtTrpdi3NpSVpcUSpDQ9et8TvFSQHivTaN9XuE2",
  "key10": "7wRS6iCp6jijbuiqZ753TbSCKBJCmPj865vEmX8tNGTjMbDkGTDZrbe3aiaB3QrPii9o41GGhsg561RLTV5eRye",
  "key11": "2HqqzRB9L3pkciLmEARyYcAXREHRQ74dThf3redBC1hw5Tcb7WJasfxrVnaecg5wEhTBX76Dkr2Nm2Si6jB5Sdcj",
  "key12": "3CX43sXaYWcQyXbgEfvrGQVemqozogitn1T9qY2imaSmB2X17m6qLjEozLB1xag58wJgj8uE5GziLzdD7qzZqJeC",
  "key13": "nEBJmcgQu2S6s11xJGFAFJ2TsUSAv5SQd4iDD636bmHSGSVcZ5Y3Qo8j6vpKJE8iftkn4xMFf6eZaRke8seUDoj",
  "key14": "8h5iJH5zwTQ9qUSAg1xwQoVkhWh7RrqLtYR1axg7K3oDZ86E5HSjrUEK5DNP1NjCcn62T2uyZo2m4Yvmx7JxZHg",
  "key15": "4kCfRtSfRE9syHPVrR4H1qCPJP4iCDt6TbbJuMT83DFHWUeTaB29neRaxCV19RiJhUtYqa6oYHdq2StjFua8WJxo",
  "key16": "66TdKewbwERGo5zgpjEy6bnQRkYZEL3WNJmi8pcXmM5Ws5Vkmm4TFTuMVtRbnHUfGtqtcsWcQoW88ge5jAcQWDG5",
  "key17": "4Pdo2yD3bzcGyHfoERYjpBaKPpyHPasLK4qF5ya6NJqnG4qbXcHs2ow6wbdUAA2pjMWkWDHrPmyrTNfiu9EADLBe",
  "key18": "4pQ1Gznv4Tvxwukfzsi55APNdLqjsofnjUQQnuRSYJ8nTvY9TnXxCHHfHRLNYHU8Bdxy8sWCHiAdqMxgvGndCd9X",
  "key19": "487wZURECyQpQndD8gokTyHuFVzUQ3CqpmsQHY9muSmCgANyBapzvc58Lw9auPNDDCKBedVeWXHPw6vZYVVnJ3ZA",
  "key20": "45iz33tY4n5S6pA9LMXnXBfxdD8fxjQKRyuPBUKemG1K8yp21m992qfhjhnNDHCDznrDYnq9vd2foRJsQ1eyPKvt",
  "key21": "64wo8Tm6XQ2S4DzYdgFYo4f9FZSFCAt3YUnGLU7mPf3ik5eA6Cg9zroy96QWvPbMB8svkjxxgDhWpCmGVAgHch16",
  "key22": "5ahcWN2cJmHUb6CrBKyWoF1me2NAobgh8pmWWfgVd5wtfi5sfYiapFPkgamp9nWwQmbbutfH5ELoxRqQtoiHy7Gu",
  "key23": "U5aAhrPknhWNHRXeyNZDzWnAZdc6hfLfczkorVFE8NpWcM9SU4yhxSBSkkTze1Uhaes5zeBRu5oCGuKmaJWsTjM",
  "key24": "4ZP4gTz8Bxf2eF8iH75MDq2wU7UEMRxNo8Xrre63s6uUU2Emr3DS9938tSyc6wyaiWAfuJdtkA46Vb6W8iCxBfuh",
  "key25": "4hDaTn7AcSWuRuPnqbF4hSVzNDityqvM37bcFgKuAkwXDmkz2bsWJBpewo9LL4UT9BQJMUHYhPG8pmp6yYY5gh4V",
  "key26": "65LuN2nnV2su6PDNjh7oW2NCUFmXorJHurK77sxgFtPdFah6ZwGs2i7SDmdqCcJM7bpanQY5jbcy6diTcrzdZWB2",
  "key27": "4rmueKg8ceAgUh4ruCxQvqZG8sjtsBKLuoB8nyQWLSfZ6pxu48HVzc1QbGP7UURT1cKHJpTS4XTsBt8vfpkWXbQ3",
  "key28": "2gTQySEUTUDCRohFtnv8WZemTttUs7fTvGjaMbzERkTx6LFsxPe61zft1bgxen14XJqRoUicQ5tLstsSqWBBnJt5",
  "key29": "3spoiGKbXFmnRf9yF2ac5hDrNitgjj2BZJ4GLqF7kjp4DiSTzNciaY24XdjULqA9EAndjAEmTy9iuZCJS3yjizJf",
  "key30": "MDNagTt8pbqFHcDWoTeKmjowDrcD3xGACJErH7rNFY2ShhiGnJPpxFJt8TdEmYCjhH1DtgaxcvyuxVqzYM3inJZ",
  "key31": "3BUERY6hwEcxahj5zMAENLFUu7i7AQrVTrJF9hqw8P5u6PEFa84TFXrSmv9cjgJfTS1hvjP6yhZBvctQAvpLkZwf",
  "key32": "4KjErVWGj2CXrXvmhhck7UQ6VUUWpPUmPSUBKN1ZHFEUzP4BAUnZbJ9zb1fhVxcqx9S3xUVzDuP8FSNx9jXmkQL7",
  "key33": "44qaxum5s87ykHp293pLY3v45mcKQo9gyaKVfULEbzGfSP59ebcFtsG8p2Ex7FrWoJ4tsHveVkZwWBiDBBsTanSA",
  "key34": "yYsjTnT1s3pSD49fdbPgk8UuBjzcCJ4hYdxnkr7fZnKbMj46FZN4KJywtoKux9WEDyudZ8DRYUpGqJLK1o5Nc6X",
  "key35": "4w9F7nRWb3taqfG2U8evAo3zXcewcSGuBoMWXdGpZDw47yH296qutRy9oaXEps2q9X4d3QRabNAQJMYRCgvbosFS",
  "key36": "2UPcYuEieFtJUxk46vWZjkrG3uGH4jdBMPnqAmYLWwAZvo9pfXGHUnGJaGps2keXkpAziSBFnD5KfKVCasFzToj7",
  "key37": "2Nb9u7khEiqWXDf3SHgmQqiUtBtJegm6TDBq2MKXakP8SieHRFgvzbs6boejPR7T7SUJV3GYrJXY9HRUAifnY3tg",
  "key38": "2UTpwyHM6w13HVQMWs7XpXWmWBrjqLx5tgvqtGsRgSM71hJ7H8TLa87HMza2rTJpiaxPYdZtmbv6jYVauqCDKAXf",
  "key39": "3aFa6z1MHogcQJvgWaAU3J35doqaDzDy6i7o8qVSbxBH7wi825iUKtAqZv7JASpgTbG2GKMMyZhxRgTnSW9p642T",
  "key40": "a28w2gVfQgH45Vh9GVYtDWarMLTZ76zwmAeaYmGL795GuUqn6T8koDRS1EVmJo7p9qU1xNhJ76DP8KqLL81wGcs",
  "key41": "3EHpuCexvSpxic8smffMKr3r4K8oWMzvXBFKotdcmpPqWULHBzhDW66yDvE4ZMan4h69jRS1CAKBzqp6weLipoqW",
  "key42": "xqKpQuXX4Fh9BUSrQF7qBNkxQiNYgvyNrn1ZoPGxYNFYbRGLUehr74motXfwzkM6HvBkDQWrrVFBPb2vWugzyKP",
  "key43": "3uL7KTqhmvpBfKJzRs2MjExvmSycGLhG47k4p2xVQ8pA7bZjh9WjnmqLTrfwmarjiDea4thLFfH5nJSc6EFrizwV",
  "key44": "VZZn3TVuVYFD2bFYHkZo4CsGUJPy1sRGKzZDa4ncvyUGUZw9yoYbfbAYge8UDQwz1NsrtqpSL8LrfwWGHin8kYC",
  "key45": "5x4aQsRYSGFd54gqF7q8vmyRbDZe9t3dDNjzi4w5qnC2Mk2nLzUeNZj1h12jMhAYLeRmWmX8dvz3AvrJwHGpHRPR"
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
