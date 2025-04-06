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
    "5eHVbtVPe4LifBKroSBsWR689j7HhacmpYtaRFs2JAwUcFM4nuXw9Ju5ADziMRgo81bbDpVsaxeEYo6W1Abn2PBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dj9zPMeP59yyLNQYhx7w88BrZqSmp1jtLbVp5B4SMDef4pU9UCfHUjTChdWMuZBg78Fu65dsgn5vQRjKzivhMdV",
  "key1": "2rbpji9eyfwskiYw8hkt2iCmXmUKDPppeBGVD8dNXAbw6nKKXhRmEbuYKQrNihVi27RtFohLgbjbFvKNXgCecvx5",
  "key2": "2KRsLC2eXvVVtozZcdAbRmq438Vzjd51bk3fYRJjSd2Ev3MU3iA9USf5gqndNHpi2q5HVTuHKQfKfRDrDbjtPwsu",
  "key3": "3sYmVctrfr8JnL5uTqcu2hxkY2JAzj4i15UJhGnVGYNQ1Yu8cQ5WPEwEMLKxTGuFZxZjzBAEn5JmfGXs3exbsVLE",
  "key4": "2XSFnioD7dKCVerYmK3YMLy8u52xxdSi8x66FU1CK46imYQk53oK2AJNUeTiGETetSJL8hjMzkNDDe7kEifBw8EA",
  "key5": "3xZXdn8Buk5KRPZeQVwWUm8ypi4RrcaMgjAUtcJkx5a7UUt79vf9rDh97VDuEHH9TJNrTnvVYg4Z6WG9Wxh74yXd",
  "key6": "4g2KLYvsGBriPS7mYgFUDvxZAzT4woi51ocbk2JcRf5TrGczKphcVtQkrTrkfhJqHbKvoPmMwfsif6jdhgNsRgKh",
  "key7": "3tCRYu1C1RC7y2Q478yu3ehVqaqTMHWToUwb38hW2VkwLFd9CWbZjZmsqiyPMZ7g1ED7sMinVSKdCdrTjNRVbYkU",
  "key8": "3S2pGNiFk6cX9MVNjwfL8yKsznr28oMVrx7TeS2VZFxLtzd81BCTsTaNMoVnXh4WG4gsg8wymkF2sngAB8cv8XqG",
  "key9": "4gfAwSHhWdr1fDB2andYdP7keQSbidsEiNr7re8f5zRPhtPWp2XAzjY6Et9vNx4njPYYnLkqgzhYdTapkgWqyoGX",
  "key10": "3AFNjdbi6jUkGXtGQcXLdgQsFZPU5BaQi3GuTaPPjcxBgjVR5tzKRho3GHR5bMmSy6ryqd24KDKHVJaAD2uM8HAw",
  "key11": "3XVk21Fh8j2RB7vsNJPiDsQQDiR2wa9AJrfTH5B2F3tkzVQJSa3XiM8CDFGVkAGLyMgkvWGWvw65XNnVMCAcYi6y",
  "key12": "486q7iqCwPsjH3WWVXdA7dpMpu76b94eGNPUpvyhQe9BRaEzvttAUJAbprYNvaCF2N3n7SUW4KGzZ1XNfDwbJCCh",
  "key13": "5edb7yPAL3wrKWwv7js5LboWzHv592HaAF2cKBZdPLC5WbKednm5EmuBNkBaHb5RawaAepuqpBBMbsnjDUhknRHk",
  "key14": "4T3MfVgYUWS7zzKBGokJ7m2vg5rqwRrh8aaD7Aprcdvo71unvY8NA2vhbMmBLX6tdUvBGm7B4848vCC6brWf2sBR",
  "key15": "4FaJxMFtSqiu2CWnNfDLQxvFDUDn9wHPkquZD4avuDMBQC9nyXSeHf1BxC3cJVKvNaALuwWBkPfQXGfKBuibgAyY",
  "key16": "CNjMYZCA5E9HKQZUQQeb7KPFFhF4FnN1xEFqbmCRzL2V5RxWw6kq7MNY1697stJ1BG4zFxW7qKLnidCexHRJyzx",
  "key17": "3nDBoyqPqdmNnTqQWw6wYPp55ytnXNbXDNaqxQCrayJphR7pMQFgxh99xWCNB88UxEmzcV72tTQ6XMxvXoL1x7Ap",
  "key18": "4Pcb4wikvBNHeQtsPGLuS3vGQjqhNjx4qtPcDMbtmU3RVxH5mKUMrtLvX4KS7w4TT82A7JHpAvL8bNnTpf7EuGKo",
  "key19": "4BA181cyQaSyPv8kwNT3ALTGFgttYogdwimQqkgXByU3HQSitF33TGoBCQP3sf3qXAZDKLJKDJ6T4WYoVXhuctdu",
  "key20": "t5dWN3yB2AzXTjaiGyNhz4aAhA7CCNJTE1Xh8rjnJjAUbu7Tg4wXcspiKvM74E3eNe3EnocA6xfwF2qyrkpAX2d",
  "key21": "4P64z6FsvJTkj4ESjMQr3rXq4kNBJAfEYpuzJjMjHKwPz8opkAKPxUr6uKjEj2XBipTSDPgnJhh3wKfxPursuEyD",
  "key22": "3aGBRqCm3xwEZ558ZMNTtoTCCYVGEkvyNXyySEtnK3U6uPmq9sBPkRno2BWuYm1EvTkjCieCb7R68AcMfuoK6HaC",
  "key23": "2CoCUvtCczHNDV7MESZNKrqG4gU3yBQqwZ9G3UyqQwBAZWhLBRFZuoe9nk33GPtwrbTd7SXot63J2Yt47eTev4FH",
  "key24": "2nw9Sun1CXRPzfHKzhpASnE38wwboXpdwaJjT11QzAfrSvYAmNnr9rrEQH2MakJhSyWPjpjdt7Dddzx62AqRPE6U",
  "key25": "23Kxf6MTS26jRp47nnsExsWt2tnxKdCeHnvVcdcgVUAx5kPtuuKewAZkirvqPWGaTFRZDKRWY5txYjwnqHr97guy",
  "key26": "5577sYEZfiQzj7Tm4s6ZTuFXd3mt5os86CqZC4mGT55KfofnEqn1DwugrqLyksEn7ZGqY9gsxC461Qh2LE7n4yfe",
  "key27": "3inqaKH2aAQokPeMk24okqFVPd5WXHdBjAwkfsPXV4th5NbnY9z3TvjamGW2soTPXEFW6Xoi8EggbT1GgmLUSUKv",
  "key28": "k5GoGPEPgMotWBCo2BV2mjNVo3U2tiLe3VvHShGRTz7WP3Noopg3cqmojnDByXATguCBBr3wCN1tNsJmtVUPrb2",
  "key29": "RJW6CM6zGLkYF5B5n8a6v6kTvNzRjHQHUrBHQPQMRa9a15evVxqo6E24hgM6vXBscuTTidkr7L6QeyvMZoJhGZx",
  "key30": "2tELeGMooPC9BaHKvAXnQVqWFMYQ2NoFEGwFyEPbRXJLXmMmj1zsREkTzS9tNEZCchSndnezA3sxunEpL4ewZHCg",
  "key31": "3o8Jx8CbzAncypzP7WX6L8eSBEA5ttQpo5k9QZRoYoctykpTAnhdJbDhdxgXfCF291RncGsjtzAPBRStHvnAtsXC",
  "key32": "2wtnp4X1ZRv3aQZ5QmeSyeS58oUg6c4SHTNUk8GgY1cRQQLQRVL7MntLipaNuaoY8t3TAXu34JYGVLP8N6bgqrsr",
  "key33": "4fGRRSvvaqpiJQLV9YKHFsSNGrQa4GxbFZMEKWY6PQ9UPiiXwst1ctCjztqbmL6ePQzAA5TubUeu81JyySpfSVfF",
  "key34": "2FnKeccdTyuLWFT2BYPL61W5oYRuzE9RDYgrFs6TamvNVRzuzm3Jgh7Jnu34WEs2dif5313FLh4ef1p5TWu3uXBd",
  "key35": "56imjgtcBkBsLUSaLeNmbdyXzZFMcBwmAnM4UJ9nhLg2eJWSYGPy6HNZUNma1pz7aioqkbTXn4R17XQMWWYZWgyd",
  "key36": "3CKQfg4vbBfdm91B6FCki7NVK2H81Bpar5LT6xNc5VqZofcMS8pF86z1v1FnB5MpTQnsPraHoAdZwsMDy2b1c8XX",
  "key37": "5haGwXR5rqAQhwKcB2RKieknffR3zYSQFDpZDxnFND1a97tb7CJ9eaDQZhFnwByd8xbTC2AV6V5VqvS6A61NXcrK"
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
