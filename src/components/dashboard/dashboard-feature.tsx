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
    "613BGhXu44D3cbdhNKHfX5LNLR9EuPr63D1Du7To7MmU1snUS3j1Fvw774Hr8eGbaTpuBcB85ergzNUfvFXUSUnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKR8J9NR473q9ERWWZtEzQsr4i1yYEmMHGx5V4ok221mWcFoZhouHoBvPJNS4zcUsfYzxHhWZXctDLrvmyPLpuA",
  "key1": "67dHwKU8DHuai1BMXPJBqUPtcSD3a1FWuvxQyNWNiZdjdBMFrLUqgckxDRQaT8nEB3dQCHjxvKWqMr24BDWqyDUY",
  "key2": "G8nTRvpa7xKMmHPeWoq2PpnNWSeEMH4sEtnvScfBYXqqceM35zCejzJm28c6xFZAT7gvSUsTmTnxk6gscFRbpWx",
  "key3": "5PTK1JiXgp544pnuGpbeLdTybgwi9x9ahxqDpgc2RSgLRaJPiAjXSjx3oj7UkWT4taSRXSxQHmqUEMK7KZFVB3VP",
  "key4": "548yZBBaYUM1S9ai3FgSV4pEVNmCi33RNFZrtc5BLAeei9iVeNGXueAdaaKHrT3FipzGSFSU7STRcdqRBJ73UiuQ",
  "key5": "3bsvyF7xiPeMxNp2TB78TYcByS9gjbhE3bxLYiWiQUdM6rcNBoG1Vt23Yni7XSiLMPy9VRYeiJ7ZZEjhU3pUSjwG",
  "key6": "e5JEtd4L3v9r5N8ff6MtzkqZqkniXvWeHcMT4ZSxsD4RJ4BD85R5yRHyYLwaiGj6ZoTcpRZkXpsYGiN6rsaPfF6",
  "key7": "2cbYzWMqdjBpa3eYD3G9LJ9YfqovMsvAtNi8TqvTPYejAJtKs8tR4WhXsNadn3epjvhL51uUAtLG1W1Dhn3A3THL",
  "key8": "y9DooA9Q9Lr3R95aduBVvt546oLERXZRC6VsmxYmSbev1xQJhNqTmxjcfvyWcuxFg5qzmFnW8xMe285PtmfhGRw",
  "key9": "5N454mrBiK7Aa79Vr3dMw8YX9bxi7YccQ5aQAKCiu8fevpChvVfxGEsatSVR22Lgeukqu2iRK6jiCrvXgu6x2Ddz",
  "key10": "3fEk3ZbyYJaiUuJsvQv1H2insPtoJfYyNNPGEiaCv9Rw35y6i8pSC7qyiUsc9y98bFSHacGNV7n4Yihr6UqKCe5F",
  "key11": "4XUJX4fCeMDoEeTR7RcBPz3J9nVD8LAr9pZJeune6CszbYHw8Af1dTpwiMcLtWAqkkV7CSLusm1WDjtEk57hG3iN",
  "key12": "HWi93GT8EJA1HX8gTVXogxfQVSgVF6RKVTiztK6Esov9koandtFVjbfsNV9o6YwLfc9dfkn5ukqN6uMG9EtKcwT",
  "key13": "LAwDY1okLDK3CH8KviKHQfX99kSCF5Fevs1iwnB2qyvU3abo87FNgr7dcmg4pBw5uw9mMiysuMemjGete7bNc5x",
  "key14": "52VkcUdxYdJo5AGHrHXdS92HE8K2S8pviuSB3BzyFLc5KN5WEWNJNfT13AP8UjdtspjB9i5aKBrfd5rHSnXsE2x1",
  "key15": "3VB3v43D1UDboHhjkKSa9KEgmmSby62rw8wc9uZFbxQ4VreJLzpsk4HSPq5qN38AaqYf3hmW5fzrBqioMmjbSeY7",
  "key16": "66ohNziM4wsZw1AofScUJtGzVVBMCbhz9EX4PbY8YpzcRYE21huyZBLBp8JYuiRz54amsCBVdAXecFs2MzjiT2YL",
  "key17": "2wjjpsQamyK2pB5u3DvMgsbBydDyxex8Cdb8skLsatgim3xmLZhga2vDn9fVhXyASFJDuNMKdexSS5b7aqNJ7s3E",
  "key18": "3ozDqQY24jrV6MRdBqYzXJ7RkLbztsHUT2MoyrX4NNrPUKysKG2JsPVUfwWiBiYico3s6oip7N3Gds3AWAweFGPf",
  "key19": "3UTsWL6cer4DLF1dv8XVzx2jzKGUBquJLemyYhpkZis1XmrQWSRAy2emtQ3TDgFKVH65gXDR4iECTq7a1Zvjqa2k",
  "key20": "3sSp7JsK1oKj73URmdnJqbuej8QrDGZrLedFUtpGWSESdYBasP4yaNFdTFtTUjdqMxUEBMcqrGkF6Yze4unQG6Yn",
  "key21": "WMHHSdwGAgQG34tUQ9YqJeY4KX5neNs2oEArc51fmWhXYgW89Lqce5DGCiFjtgNjAuK8H3uCcGCWKT6S4GbGbAU",
  "key22": "42xMiTUM11Ub3LuYAZc8szJ5z4VPF8NwaoxEfEBKBeVE3pZsFMFd61KQQ6cy4CAHdarTShBBCFSskwt5q95SuqFR",
  "key23": "3rRrLTq9wZwcTRYSpA6zwjYVpdVec3yrjpH7uQ1u5bJaFAB8FT1NbXaVt36pHUFwu9XjwCSnmxtfuNsMostMY2bg",
  "key24": "2rZSdGRchQz7asNpRNqfL7QD7iBFp1jyWc3eSzyHYSCgucvVWCo7coY4UmE5wapjuzCej1eXFRyKRzmKJxtSPX81",
  "key25": "4VPmYXwFjY4GK1Xu2JL5A9PXWY223SX3RewWdzfiqQn89dDtLhHTCQTop8J1ESY6DjpegCYVMis72XJAzyhGtWXL",
  "key26": "2HDCPjkcjqGZv4xJ8tKNa9kznHPaccqaPVQfR33fgXBav2C4rrT9hMLcKzYvypQKsYMhUn9kfHMoJkYqPsXhDLzZ",
  "key27": "29uPHokdMjHuNfuCLQYVwHfuTpv9wRoKF97wghaTUwsgpktsK4LoxHAP9QySkgePyctJBRL3hfiC48ktRKv7b3uH",
  "key28": "SgY5GaX3o5CCihTmaWVHabkhLtxoy6Y8xmsagxD7dYkpnLeWWP8Cy6ifbz95Y1xUdttga1HCXtK2bHBkNvXbmkC",
  "key29": "4thGUtekH92sFhtyydeZqWadmuTHTPPFj5ofWrQJwobPZEHcBE1gK9LHf1tAmQqYRXHQkDYt7oimJmZJe5Pepp62",
  "key30": "5j96MeRufCSsLKmjxJhtGMG9xwMoYeupW7pc1nVJ1iQaxnynSk7Y7AkFRpzJGEDHsuC3jHuRAHfMk3mrRbcjoLp5",
  "key31": "2CfMAofCentYjFEKznLrmBXgyTSWCtpPsLq8j5eGk7kMtVKPaj1dKLt81sK5c5bFbcyhkD3jF4T6MCZsNdyif4G5",
  "key32": "4kaFVk8BwExQT2uDnEEkf4MY5cJvk4NhXUz1BbuoiWdB1Aa5wzQSV9hF54WiPLwnUff1Sq3pu3xLLuePAbC7MrBL",
  "key33": "5V4TFydyTnbD893vbUsUXK4s67P22tFA43CpRj4DGua4JxBM635pgKxu7BBzezRjujuQUb7XjtfK23w227MXS17b",
  "key34": "3Vry5JaToAQtZPh6zoYzWgw7Qz26e1GQu8TFgCSd9bLMiWRpV1CK4cWcpzTyBxWpU8uopsF3T7M3Yxtr4HZbamRe",
  "key35": "4mCFrS2GoY5KZ6Mj4K9QsJrkJF8uZhh7WZpEyL95BYd5Pm3X3p123R3yFrHUoaSibHoN7zzkb2qETbpgujs3dzPL",
  "key36": "2mdBGa8iGHgWjshshTGPURX96EQuqfJJTyXhMZNLJu3ck5JkqtLjggrrkSkruGknRZNQoJWQCTwE7Z2qT1spEuhn",
  "key37": "24pkZPRryS6c3n5MXhs9h8MTH4WAm3ZHRh6AR7NsVTJeccKC9GYDCLdi4V5LreM9z27iW8H8VkXcvmxmoP2FtzNx",
  "key38": "3T3U8sd3wzwBJs7ntPKG7kKMawXT7D37srV34svDeBFisBV41cmXaj93sq1iChpdaUAv9jCKwbraJEnDG6T8bWJ9",
  "key39": "2pbavv6Unk5oXJtxfb78QRBdpexUFafuq57JTJDrtfFExgFhoNmpYgRaNpsmJsuHfuS7S4Wo7djyYJsZTF4x8CrU",
  "key40": "2i8QTDvy8o2s1gFtYzB93Z7zQ5NpY6Bq5LNdj6pXZNmdhe7taujQqYkmNBLYpoozbNgqAfhLZU2mgTF3W2Et3m6w",
  "key41": "3ZM6VBJ5euYwattyp4DdPBz98gHkMHVACK3n7btRa7MyJG6eGrpdpxqV7UBhm5MjQtAFWmEawXfSg1xv81MHhv3F",
  "key42": "4zutpGxSiWgnLpjtdDnyN58rzWAaqj871qNPEekhhvoi78Y2nxKb3P8ZmaWmz2BUwWDVJ97QZRDbyf9sv2ds3qH5",
  "key43": "31Qt6YcmXy6QTtU3RsXxaGDkuCrzAa6ek46KKnSUcrTycfGdUhuFfjt3wQhwHPb19PcaXu3NVebmjUG8EV827icn",
  "key44": "3uXEJv8sAxb79q1PLjcESEvWHz7ScSMowiyhgB9cH1ydYUPhEtT4Gtxi63gAG9mmZL5g9GyiTrSiaLccpMrxptXW",
  "key45": "9TYmUUc6UDJRnsXUj2jbVKNCQkiraLX3i8Q1MLij6Nt35a1f8SQTJfrzaj8VkyAm68tiyf8FFPTJjBjUeZjfuiK"
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
