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
    "3SYPzumDnGV76dRppYTKZs5ZBEESSnznSE2mbXq8Apne7U4MXd63Hhjz1w9PcJwvP5nCc6MUeFLXbt3geb5sepW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jakVF9pEX9NFEsbr9zxRUaqHf7CpBzanNJ2eKMU4deWZKdTcKbvdyQYvVP2yr96yfVLKgu9uZGhY7DEfo2pkL6t",
  "key1": "5M78odrstGMrQ47cDbxRF8KJukyrFEWefyMPx6FqypUJmQUYKhRhVQG1A9humZJFgipKxULqxwUFkHP3r9xZUkYB",
  "key2": "XSMPmXJG3bNws39XnNMiyhVaaR6PeMcJ7vWGMfEiWd2qeNf5PaWTkatQoqL1vNRTJaxzd7XaDHWjB99rf2CRsGJ",
  "key3": "5DxoPR1sDzquLMCnYbFkDQJ6LpgjMweqCgfTSnaQRKnjHqkhHDNy1BAtyZWLw1Agyj9u2wtLBCaopeCQLKVLRBLF",
  "key4": "R9ca7eYcVvCLbnTCkpDF19JSbLAxnhUy34MSwzmGR2xJSdV9xtjfxNjtUrhdbVmuhPLZemWRdANg69Zzhy8FhSY",
  "key5": "5EZpgzQUbyqsoS8MXZi5XGJfyPtwUqdz4DSRQJduc52fT2jBZfKRtEn7A5TFHapCjSFBJQrRXucFN783or7n7c3J",
  "key6": "MqjxwzifRtwYvGX2Ab33qqngj6oh5ihP2ByEzqFMDwZnA54ppdQ9D6j1HJYTBoHvrSxtL1afLs8FcpTwyGQjW3J",
  "key7": "AbAREKDve5U4k2vHB7i3L5jioopdHTSGCsEgZaE39zxrWAmgGEDGgkFLua2YPbVJsyyPjNnG4d48VGW1qvBZNgh",
  "key8": "527Pf8uVWjBUJEZ9HFPj8TdFuh71TfCh6DmES2GQtqXFowqDXR5YWQW5nZ7SSDyHTYv5FcGSmx3sMF8NsnyMgPdz",
  "key9": "2nzChgof6x8BYyTBcUj1kJz3KeDyEJSwZU92n5m8k6aV8QwgX17TJnecgEyp4zczb5vDdp5ZrL2voP7XEMsp9UNW",
  "key10": "1MdJZfVUQMLVmKQ3httPpKVDxGsM2xNUUjZNnbqGb3Upsdd6xw2gCPBsBUJCP193NAr7KUauRNwYc2FEjY2LZS6",
  "key11": "2CvZ4fLEsfuuV823EGD8ad4RpqW8esuyPfhvYNh1S9LWUSS4Jifz4L9bxkWLv2rzciF3mss9DdNU6sAf2SFWYXuA",
  "key12": "3v66A7FrFBAzepEgECw6sKoUT6zHxN7XLiWSwRHhKm3WEeadULJ895btFa9v2ET7WE9BSLCeHVVQ1j3B8NCZstvs",
  "key13": "NWhrYVeYvdq6PHMrz6iN6EbpbVKd47s5yQPxn76YmVDsTnekjDksuaLRJGDRfTbeT7SNRdPtuAqznLFFoPH6MgY",
  "key14": "5j9o3FRUFXLYsfZYHjsAUFZi59jjCzCR91HmLmUqy9jUQwishGDWettEwxSbEQzjqZWk3MzrWif2Ne3LNRqSGupY",
  "key15": "3JssJLtGVwVd6yiy7JXXUAoVu7TK5d4dcv6kEnaFauWWfGeaErpFWEcMMiQCi82aEthjX2S18KwFZJ1SbDCYyEXn",
  "key16": "4j4Qk45pTXhaKb85nBKotG7krWngSakcz8FRJMrPWP56Bdf6wEpZWeUr3D4vt8csgATN38XVzok9z9x3UM7B1haP",
  "key17": "4BSumy18cJ2vytDxSQEPVqYJSiMnNQJrLgLzWgdrBFNRva2bNv1Lcf2V8VMTLmCgc2ikFDxKC9JTzpGXLbaJNJSe",
  "key18": "3xY72jmaztAfbpkfYKh3VDtdGKrnqdAEureDjRA25i8hsKx2HHcaXwMjgqGW44ZqvthrYky4KXfFTdmPthZ2zHXW",
  "key19": "34BufNAEBNB4SfZSJi8QssK3cEFkcWhCAasjSkFEBzBNZr8A3CuBbikL7P93g4Fa5hHf7aVTCAV1t7ovcoymxUij",
  "key20": "2ZxQWjbeqcbry63iiCS4nDyzvd3qiNn6XD1TtNRVXsYSZW8qyrGGU5Ax2aBSNhuqc7uSmvFW9AaLaasNDt8jih6S",
  "key21": "4k16v8RhouzgKW5RmNPpcahHZP7cTf5NggDfZhTcL4vLPuKDwaQqPSgCPPrQ1ftZK6ySf68nQRoTymGcxwvfNGRn",
  "key22": "vC3GdnfR89VFmojeRC8KomnA2U1zWkSfnKgRngv2gruqFGEDkKM7gY1K3NocAqoAyFjMhGnpNv6ysPEMJL7WkjZ",
  "key23": "48UVzvBSKA4NLAUULyBbFP1QihSsNXN85jfSRKavHecxfjpkLW8MYXscVmQM12zptq3WD9wT7S8h5iJqpVJ94rbC",
  "key24": "2NLzKSs1Y6h7QndnWc7F1V2dwAHBgzMni2jG8zR3AjTtrvhcxikf16psksAU8Z9zkNooMsCqGSmmPgBG4JN3RinH",
  "key25": "4sYjuzLGiYKmd8UvWmp73svYR6ZyMaetqfePxCFRpY3kS3ur1ZwMZdEHbZxwdXKbqxeJazhGEjkEuGKeFBZp5HBa",
  "key26": "4vXpEo99jndKRwGNEE9UdkgGToWWwL96pJdRz4q6TrQKrhMbwk4EL9HV4LekgkPYeTyMBToU9Mcii1w4JoCrovZo",
  "key27": "61CjBGBicWG46LYG5uAi56Gps91bkmEZ6NndGvvH4Fx2ssUg7iwjyHvY7LrnvZ6mK9tz36sD6ZzXT58U4srdPt2x",
  "key28": "4eePXdYqA58TkZjyGKMcy4BLLGSgXTkkiqmCuaj6MpGk28P2bbRv6yKRNQuQ2KXw2PJdmBBzmdz5H6r3kuWEnSjL",
  "key29": "2ZPaCW2SLbgz6qg6AeH5m5f8wJLVeUESem9s6d8EJvE5Ycq69doe1jEBK7u2YDi6EGnyihX9JsASdo3tp9wwwvdS",
  "key30": "2ZuLzDAEmS1vU5nf1ZbH6g287WS6qHZEnsSUrXgtdxwuwx2tthHungTqWFM9LvBYbraVMtTNqeeDqLBKguSMQTpT",
  "key31": "3Vyh3H88BtUSyP38kCduvRdknmW6shaJWXzEBzWPueSSEE7PYgzgUZsYEhrLjUV6hyRimsi82cJTqf9PFvnhemen"
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
