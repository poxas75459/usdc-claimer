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
    "4VA9GKSC7eurQS7uJfLRfBbc9TMqXnqBPt4uPsYAToyt6DGckjYCePhYYL97Hb7ga4wgj3dNQaZVHgAXv8EyPE8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TsZW3Sh4YGUWzHH4sgeZYXJiEea7TZy6EJmLrhx5NPi71NamqMUDKdKkd9Tokz7CNDfcy2xsHtbg94Q7ba5qVjn",
  "key1": "A18ri9BfMEQCLXSf5s9i3v48NdPprM7SsHZQNq5Ue4YQSRTowAtU1A3tgQ4gaow6bwhNbKm13Y37jWCPEqC9W6Z",
  "key2": "22sWXfNd9vCLrBiccbAb2svzuQtzS64mWDn8BRj1pqLFNj2rysDnhpvSphyJVhW1MiTcRGfdkdDusWQxbCihfzgW",
  "key3": "5Fd5G2WjRSKR8fsNo9sCw4HKgs1aBS7TLpTZ62WBjyqGTriRZzZV9PXLpHoZm535ouaYUSAr1gxx7R29SVsqiPj1",
  "key4": "5WxfCVgqk2UnwFJLWGafwHsnzJY1hs9vQ5GjxJ4YmZGKpCU3tj7KbpYoXozwYMxxq1db7LSBZHJH6mXQTxLRosdy",
  "key5": "ZiiKpVYqDE8kD2PDjU9dMKLKyzFgxgNWRW4wwPtX13dzQiUqPeshPqp5BTNXTHgN2Hx2Q54RjcH9Ww8shERyvMX",
  "key6": "EhQm4ZXJmm7jpZz1hPqxUsnkTxQMv6UzSkEuZTw812EMt1ZsWg8hfrWLBzT3MYtS4r57gTteEuTRCfiKadxn7Vm",
  "key7": "4cRdRQNL2UFptUujuEx1ZTYGtFamaUckkLxrg1zTvupUDhftHjZpg2LTFasNXNpK9WvxYYsPg7NXwGwawmzUDKNb",
  "key8": "5A3RUGGz4bJf3ZLL8nDq6PTtqs7Bfk7JVyvui5Eh4oNZ8WZ39VBTp4kXtoPribwrnW4Edws3ERQQ6caGUpBDZHBW",
  "key9": "RhDu6fMNnMP4D2JFrmKhNZCoiMGLgBrd8QBMhvccWd3wao8qmYoSMyqxK3AKLjq5zMxEBT7cLLwSjifa2WbwHwU",
  "key10": "3rYPWe6noJcSXrhi7hAd5fb9Hfh2S8PixGr9GGqs19EiRbkVd5RTsUEYzkLtTywVsLGjFubtY9hHVJRSZECE3pjZ",
  "key11": "4CeozfUZd8ktLZBinuoaF9QWKWFJwLPFFRVoPvCp5vJgeXfZv98BmdygXbeT2mf8U1YuxCRAYciDDBYAXPrhXwNL",
  "key12": "57Mr1GN7ny8m7cCEScwAFdgKQKFzNTVgpirByoYbV3YWRVp36FchtBsBuLfcuqTfyxwMHMpeSKbpcLChf11g5vQ5",
  "key13": "34Ff5beLkLnqVfAUYABJJkGdcZT69g11scnSbtADFQ1Rr9nCQQN9Kz3aeYzbCWuXF2rtU7rddREzuWPmPZBUMYDw",
  "key14": "5LEk7YvD8S6nQQprfd3oaDtBXMWedSyxyQNxoCGSfo9HrXzHkp8ytYBojpRj31feR3w2HNWTpH3iPKSgWrrGSSbP",
  "key15": "2uYpJLFs7nuPQu9ss5jGk9uLydfmE1mSYpGDP4LETBnrsNZLQd19wcdHdMdDSpT6P3vSdEST46KfGgdBnABWXMHd",
  "key16": "51gjJHewKu7BLeCowebLHFiZeNdA2u2TuGh8YB9NqEyddnHGvjh3rHH65ffTU2fKUuTW5U9c4wB5PT6zmUsUkgqG",
  "key17": "5V5q3JYmJUKDKHrgs9YhT9zYXXVniWxHeUjCZFdrntumZ2dSJgjwZ77fUt9AtGguRQNVvnbXx5m529ZGgrUDATyQ",
  "key18": "CGugbnAkvUcuAvu5Me54KfkqUNZU8QLAR9U8BCanAQFjC1VCJm2WZib8JcjobhHThkNTAfxRQv2m7bne9cN1tDq",
  "key19": "9CjGNLTuTqwj1TKNwQjGL6MGRhn2aQUTNPzJy8YiKRmXGd9Xt3kD5a6sVJBTWGruSKbdJ2uLcjnhueuEqxdACd2",
  "key20": "pSyLrBAiJCQduaDaFjYrSwe3MAY9ro9AaJK3EDeyX4TB7VLGKqqsswmVcAVrLypAPcQRrHzcz6xwKWQToUHSLVA",
  "key21": "2AL2j6Rhpvp36kuwZ8ZoVruLgU38fyESqvG1zKowYrRwxDyUf8qzWQkSs8xaNY2kFRaC7ue8XitcDAmHQMERzu19",
  "key22": "3ZtcTVr3RAtwCeZzjRJSqcbtL66fA4m3RsfWTjVv56oyJWME7aSkDNZ3gxKRLynPLMPKjiZVW9nyJtL2W82omywv",
  "key23": "2KxQp23XgfmGhi3bKS7DHoB2EnbttnBJenfXz1Pun6BTMmaRzKUqrxLEsvwNcsho3Wm23G8N842pb1MKZabs8Yg2",
  "key24": "mXYuYNpe1zbgy5eVYqmTn3B3vLv5gMTzpzTRW33yXHPd5Qk8LWkFQBThXgRfx1K5c3GboEDC2Sgi5y34upVs1cL",
  "key25": "276WmtZPWZgAS6uGYvSvFJ6DUG4dLJ3hkPPbrv2BXZjRp2QGVnYPDiYE8MpgywFoyBXBvSpqyexv8XEiPBoDKt7y",
  "key26": "4CsJzTugHwr71Fi7cf3h75tEyjvVYQBXP1PU4ydygWjYUUgYqk9CAxGRJZZXFhvuuAWTxeceMo51wzRhCgTKzxEZ",
  "key27": "5Xk8ydVTLXujFjMen87GUFh4z7Pe3dz8f8Y9AR8GjZ67ENnDjLrCbvmXUWhrBfr736Avvre4J4VnTeK8DCxa8aJv",
  "key28": "4wwm7Zap4qaiCtnwZdeehopqpm927MDSpbdntzQJ6jUmq9a6kZ1rS624ikMvf1NL5EgTsofqZptuis9oDgGVJKKy",
  "key29": "5zY6ACrGLwWvR7qCyecXKgsnTGmbH3avoDvZZmR4B1e4X2SfR3oy4R9RnRsSFeEwiez8LqCxp1BYyHUWnygwAs27",
  "key30": "253q3PPd66bbr6HaY37QVSVJ2oiz6j2wu45TgP8ZgDSDEic82KbzBPTqvGnMdUADF27aggaLAugFVfeZbtxj4KVE",
  "key31": "2FQKTTnmRpEgjXA7GzrA9NM252GARfiPgpDo4QPXzmP9SXLCXXaXs7PXhfon4zxdzhuP4x8Fc5DXsjS43XBNYpnA",
  "key32": "ZniZYd6oUum5QAc9igDTiFjeVGhNhAcmkPN66dyAy8SmT7KQEYKceuvNhvVLz77tdMcaQsbzasLh7ScyJ1z1m2B",
  "key33": "3uqzPNYMhxmv6FZBGAi9ePAoK3LGQKA4db2XtwBWy7ojLRQc6azKtLTRmc5HcwksPgXTSeawVcGP1c9k75jYS4vw",
  "key34": "NSYEJwt99dwzuMz13ydxyRht3TaH26BHFvK8i3DiHCNdKxCuQrfcp6VmF9NMiT3ZX5hX7mrEsp1kkmFhHstyjsv",
  "key35": "494usPsRvGa6oRfvAtqHJLCAmsWVW7M9F8jCaHe2g2U7CfCZ6ttEPnB2PGHdBATBo5gj1hY8a8grVW7J7MFRRAfk",
  "key36": "3sfwUHCLGNUrSwwasu7VfmRFGaMUzDDkww5gUFMNPao2p5qFiafzdA7gN9KTshMjZZLiYqBGjgWV1XkMxSdT6tUb",
  "key37": "24q7cDUCPzdTBXqtCpZ46jnnwvNRms3MTRPW7jYcYTkTDqyzKJz9CAHcfJZoQHH6uFiXDye1jhQLEfPfYcEHpH5N",
  "key38": "4BWW3bbNQoDbZWGz9TSnpPycVX4Pus9fihbLBoiZzPKgQGgkJwDtADsm87PbjdUZSxJ4EBnVPBHbgKxKn6S1wBBi",
  "key39": "2kcLoHZ37ZfMqkrAJgecZcNYQTh6M9RiAf1yTAgNfVpPmt2iEcQ7LVZW31nbwv1BWRVm3ChYabkdrSU5h2p1U4Jd",
  "key40": "CQfWEZwmhBrgDgWKjBxYPHD4CACtAAcHzuz5xnzLfQarsQQ4ovVnuj7ks6t7S1aPsi2GmRJmBqB35URtpt1AbPV",
  "key41": "4M1RGwQdXgCFmdpzR2Q5acsicTti9jYZZ1G5mEsqbRZrntYdquwDCHmPyVkjbesCY4ZyTQ5cwVuQL1tQ33QQqkN3"
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
