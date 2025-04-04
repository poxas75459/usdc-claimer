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
    "4RLKTqdNfU8BbUcvPLxMAq6svvBQKF8RDfYHWhzwqb5vgwHmihwCRvSjhqSLQ6uDagwUgqKXBr16PtrscWLd8Xqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gp9eAxTdFhfZcdRW3xiq3vAYep71e3uwcjTYtH7hDurWB7ihqHbGVDTmDUGHgAEvfMYJWKu4KjUkRxac8biXt5V",
  "key1": "3tmngojxfYTAbXjpc8ySRZRkm8sJfE9fCK1X6EVtJMnH2512MBhtNembAhwzVHVc3sgVw9Xvodmk6VNBiEQpmzPd",
  "key2": "3W9CeXrB91umx98uGeLHZYwnXPJVHoSBNebhxYatZFbSKVu4MYGATFFvLiQCRchEChNakwDQN8nrxd68XYYXNVaA",
  "key3": "5ffS6dpAwEZEWYkSuqnDSiPMmuCqreejjaaTjb5Gxj7mhJqbt6sb5nQKQU9WVhFQDhMsUCTNAWrBZXRazwURaDFJ",
  "key4": "37EbPc1mc7PXBgWQBYKNVEbcvigF5531h6sVtGeSk8M2YFuojj3SRuPKphisfSeD5qqLRdYYhGfpYmRWZzcRkBpQ",
  "key5": "5Wn5kvjPZGupmysL2AjD5LXgarEZpuPQD6XEt1u8f65saGag4RLwzonTCYiRtb5EiMuUCmzPpTPZQ6RQEm6psh3q",
  "key6": "7tRoyx34y5aN7WuNSanSjZ3s6Q3uyjg8JjHv8UbQL8qnDHid9fDSBMuR7sRy5wCBS3bqU5zkd4nBQ4q68scw8Rg",
  "key7": "3agMYMZKoh94WYH4fjpxzDTFQ8PuLM3r16aXfWNC2ZGjKPdkPyUSrk1A7NqPMpeaQvS8ujqszL7BR4yBV75DjQ5p",
  "key8": "3cveiponZinpUL9c1avSfXiUA2sEP5bXkAK8yxFnm7CZeHJYJExLoq9G318uPvZcWAfTEb1b5VUUF61bNMUYS6Vh",
  "key9": "5mxLUuX7SMSjPeifEJtSQvHNYMnS1VaeSovL43R2Hd5hzSEoEP4m3wAmxnD78BLiiXZeHGyw2BY2cR71xQshtNFq",
  "key10": "4husGBVMRkkDWM3eB678ocjDk17BvpoVrkJ5m5NR51Fvb1Hm7bNwkusAHi5S8PzTtPbtVCHJGHVoUA8hgo12H96d",
  "key11": "4qrW3BmARoxQRNw9pvZXMipk4LukyAEEHxVcr9XyqBAjAq3xTnSpCgkscFtDELDfWfYGudiDPXHc1pdtEu8obNcF",
  "key12": "4z1DYUrVnWwFuR19kL7LVtL9k6UJUshvbXMZ7JV5BPN8t96cb4yJbood16TMJZWc3XwxrEoiS4pTDHH2FXHymx1G",
  "key13": "5qqqGfesLk8fcWKCFLQW8iLzvMtNZJqRGdwqdziaqn7R4zux2e9Kmg3oPM9VWfBiaHr7McVdQnoKXXtviRvgLjPi",
  "key14": "oJuNZZT1Gp9hnnUwTgnCVfYMx1uYfiG2LipTqNfJLyqgmL17ffSbEhU2i9eHJPqgxXpBhWpjtAQUhRC6Aj8Cnds",
  "key15": "4T7Dzf4Nz2FV7FZYV1oyuEadw48Bca1Qkgamu5kneNnRoRNFx3KEd2r7jM7ocraPFzjNZcXYKH5a8BSS4qyR1hna",
  "key16": "4zGTeXbGApTJqANEq7yynu77DegZsC7i2owesmw4hRPQS2Y6qrGkxZqW5K5j1WScMjbFbCjqSSn6QkiLjTPuKc63",
  "key17": "5CUyopiGTiyGaLz1MiY3awRUnNXwiLKKtjKrYPQA8wTtZA1u1u5HGaTQy6qVg95ewyKAzixM5BtwyyYt6LcNpMff",
  "key18": "DbyXbbFFUVKFWposJt9EwurW1FwMUKYJ2rEGWFiD94oCkUgBpYniAnXggtDHbs33tSPp1FPWRMxLCd1PGpq8dPU",
  "key19": "58euCFx4MzfsChwhZacrZyEyzDXM6raeGwmkktdsGbHwF3CeUTnGiUpcEJWFLGtrXicE9Rmh3cGVf4C7DrMthg9r",
  "key20": "UNiY5g2KfmgUuJaWi6BqvgTcMZjfZUffaUzkgy4dckqDAr9YmYVYd9X64Piaarzdt5DrYbYkphMzDG76U8cs6ab",
  "key21": "NF9X3L9vs1kbyG6KdVgAY38ZtBtgb2TJeeNBGXpHkW4PcVrfYU6iQtZP3rHbtNdP7jv18xG8AfoSXmo3nxSMo1C",
  "key22": "FPQSMsqRFg79VPT8X8mF1ReYjKocVqZzUWEbq4Thmtsy5GvjAeUcs9twkeaThtLEp4iPspzyhWJaFk9HGoLgwVP",
  "key23": "2ByQ4zQHYzmJ1RSXW1ysQKQ1SZsdVvYrmHLrzFEVNcPYWR8WCEWhVriev2TxpwQqMXNL2oSZaHh9j238FcDpzoVp",
  "key24": "dyJQZyEYR5eF4eGgvsJcJ4tZrfA3PjGU5UGvbbn1hHXAbUirjFA33mABz13aHH57qp5um7KksCWZ9osfatoqAqt",
  "key25": "AWtxVwv7g9e96EiaP4h2mGAsUvNkwp5eAUUrFK2a7baRUCRQt22rxRWt64f4WFpchgTjmHZBkkwZE69vRFLmfup",
  "key26": "4oMuxUwFVapuTKuj3gDdJt9mMpp1QhK7Jpi1wudT5Qa6XGwRmUnBUe9y5YBuqniADVh9EUhRdAZAvu2MecVV7KSo",
  "key27": "31cTLnzJgsVQeW7pZVRmeEXUKdh41AUGnjp1wRmwv9LrxNZsRbbGyKJSzPN6YKBDtLWRC1sRVANaJterAz693Mmi",
  "key28": "5fsV7RTJamNaoDwdmo7Yxs4vLqWmCbuffyRuMxqBhaU1SQmH7XgU8mn5J7F2AiR4F2LbJyPrNMSs6cjgQeoi9vHy",
  "key29": "7wEVUbZNWVHV9Uyeqw2gJXnT4gXXVtDaR7Y7CyBhmd4VbSmE5uJrYZFKMbKdoHxpEcDj2vhYhMERef9dWwUG5FA",
  "key30": "srt13MbLcnyKEZ8WoBsz3ouPHjACzssN6gCYUWsVh1eKjgGv7iWG6SPnuAVW6mek9i3eXZYwaBvEn9eCHrZLXWq",
  "key31": "4GfLV2VtPF7q1dofmpJUP9Hj72pnfHF8YJAFN8dge4i4ApAfkcgwKpCCXUSnKraMkMB7gaWJvf8uV8qt9vkLnaqp",
  "key32": "oNBWRNEQZ4cZkWgVum72rqRB27e6GTyw3edkhijzNwAjmsXF9PjqY7wvpUo8JYxFWBLQnsHX3yr8Qbqr8hBr2JW",
  "key33": "3WHjHsfBA2nkQiBZvHncr44H4i1t3B3qD9bkhArzNiKj2U8kx1DbBAkfAwSfZmj3Ptnr7XYT2cwptvAdkkXGMZpD",
  "key34": "2XkC8nMLPjRkkgQ7wQQD1Eakf8VfBjCueGHR9xG1f5ZMKAHn8hrPzv3BVirhsL8Vg3dmLF8zwsEZJXGbjroveeuD",
  "key35": "5qSvB1iNtjn5a58uz4x5k58xxJ91k9VAtNJR3UfvMTkAaZMNXxJWAptRbtrpDWXQmAAEhDnfLaeNmyrxJN6UZwfr",
  "key36": "5Q3A3Pkcga6LwgnenB8FDX2fCRi9us8Pmjhyzm5ExjAizxdXgb6rzTXRwKUUeXwLHvpsSh5aPkMqfUC4Ny5W4rWq",
  "key37": "64NDf7aXC3QQWQXFxJnxnJEvx2BuTUSriq8fGvdWjq97c5U3g38Ru8YNkTGbhhe6X6zzox2bQKQt7EFiy12JMYzj",
  "key38": "ntbKKf8p3feJiQ2Z4MPm1P2grqVoWJY7i9XUenmxXtSetAPfBx68fSk737zYJ2zYSwPa2AtsuCZyV7BVTsBXDHQ",
  "key39": "5w34WbBUyKBY4vpCFNQYGBApFn3Ndv6xpqVBGiVmFtmAtm64V2QUhG7fDEbhqfa63kJACxd5ENBcb9L2oPmFy9An",
  "key40": "5cUMX9QLBQDKnvjCZQ4bMiHDBH54GbN91kbTXxVB4NMeubwkWbkxHCxJbMz6pTPmaAsXwPePJofT2wxfnr6CuYhw",
  "key41": "4odep7YhbVUJPpgEXqD8nrTJ4fah8ZxkwefC9nX2wouEYqBt3ABjLe4foVM4ojtz7M9qo5DAzvbNuCe5yM9EakRq",
  "key42": "74nt9fxfXwFDPeFjx7GPVQwqHRofKYcF7fUc2TtpQehXwqsAMnGxqkSvJwZstqQKTVGAypFXMzf5NLZNV7SdejL",
  "key43": "5238DGvnsyBviLAbyHY3uaestRB6LCJLRL4q1QgQ1eD6SEpCq5sUQTUYhxnVkibai6wMYQ7mgAAx7mNVdvkKqFbX",
  "key44": "33A2DLZq9EuwvFd4jSDgsNpLFahWtNCxabi3grA7tkhAugXMn1V9Sp8iNCBK2KYgeuFuKyHHGDZx6DDDmR491732",
  "key45": "53nX7grZv7aHV3PxBwNjMpEfBqKi6nDqpWVFgK4sBMJ5ymGBk3xMaX38wNfUPEerCL3Y8yuVA54447srKzwHN3AF",
  "key46": "2uwWTk417GWqLpePZB2rhLDKtCXADbVXY9dbgyAnZeAa78WWQNn7fad98z8ZPuSRrWkTJ2CV69H5aR34NmBuvPWo",
  "key47": "3eLQNDqYGQ9ksc7mAapd2fpy1QyjnBrZF5H4PjyNq3sosStN98TmCkP44QyWBAVNL1tR7VAQd4Z8cnNrgYEmY2J9"
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
