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
    "35iUkjKdC3prJ2vPUwdP3wbWhM5WVQMyT5FFh3YYnG9bDz8fZYvd2Bm5iMTanUtD75wo9WqTpjBCKCEf4FxyV2CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25P5iRChQyuaLgb7ajRMngfkMyaMUHxAdJvfNrFGm8pX4aeLUAz4hDdWoaCT6kyLDvKRAUjdEyq1d9Gzv1gCSw7T",
  "key1": "2fx7NnD88aRC33AQafbRLjpUo4EqsLMiMM7Ahz2ViRnVzwqhpp7DPSa9PkfFjha1zxKA1XrQnf3erdGuATXWi6cS",
  "key2": "4PaKQ3dHHzAqYnpX61vbp1MjzzGfhNyjhMvpGQQSYB7X3AuU58bS97v2pm7J9VCjULVexVLE5Y5FMq5HgUdEaroY",
  "key3": "2siRapRKrg8XeRWTH2xsa9PeHC3LtPoWWV81WyN741FiULb3xZZyScrffUcpsorG5YFoAaftDEYzTmaoBqYR72Do",
  "key4": "2MaqNBeoKVtKrJH4CEeXSkzxanLobjpTkRotmaQ7g96ASCHgd5zjXnFg8z88YjVHqq7EUjahbNGymhqyZiuBuDHw",
  "key5": "4YYCZZKf3c8yQZ57AGBjUCPfsGLRrJACD7suAYsdAeqBir4BXgqm5XuwRq4a2HHshoCNpeVoEP8CgocEX6oHgFo",
  "key6": "2rgvorYATJoAZXbGsXcanoyV9gBvrZmFFqutR6KmqbL85NUcHZDQsJniEzmzttnuFiPy9UZXmsyuR3g8GhMkuR63",
  "key7": "2BM4gfp5pcJ5XpS3J49h2ZrvbMayFQWWFB6tyJn8PMMigwcttpfgn7GheffTda6DR2UFno4AKfWMAngFgzXT5QfP",
  "key8": "5vq1vnjER4ckxg2sgUmecZPFEiHnMQwEsQLJLCqqWtAHwnN38fsEKjYWxTADKMXKRCsLq5uLjYoK5RWvdDUx2dqq",
  "key9": "4zdBPenDNR4tJpFXMjvq8wuEFbLZE5o7x3VpeNCuUNKHaKR4xy51zg7Rm1wrbKce5JcvJt1iA4qEA3Vp9ek5sJ2s",
  "key10": "2hxStZp7iszhbxKop5wsXYx95hRwt8r5N4vu7AU3MCiPca2nTxXYyDnBcCto1B2j4TLTrSHSjPhDJBfdtNAVPsm4",
  "key11": "4sTHJMKGTuhabcxkBGmBJ3AgT72RSWbevoXD1931R3ayjk1jGSf5xUX7Z6DPFBzK1Xz2GoUzwSD44R43WkPNajxM",
  "key12": "2F8BUr7diG1rFfBMkz4vBM7RWS7RjPbrjK7TSXSFpr6AW4MUzc2RV47SJCPUmMLxpFJSUjEvtB6GeSQUyAgVGc7w",
  "key13": "21gQvF3JEruJBTunZar5xsGqYvaBGBHAvoNfPTZipKMQGTPPewYHhmsjBWBhVj4eeTy9j8AswAcPT9cCF6vPsygU",
  "key14": "2c6GXBPjUuihQvDhy21xPTSsr9sAstk8HksuxYGomCcZis8J4uUQ6AtprToArH6KZ6yGtE8TvQp3MVwVthu9YUtT",
  "key15": "3wxzbZDXJuVNAkZ1FXnS87RP7fUm7VnoigXPjUx6yL72QfT6YyhGS53ugVT6nAzcWm9SVnpNoF1easKBu4DuWh1Y",
  "key16": "fdmUQhXPNrbXwJ2WQbf17xcQmzN2YiatSc5razHqnQq3dexFeP3bXk5XhMNXB6Sgw2i9nTfzz3cgGPwaBxxUJQ6",
  "key17": "4zoX6AqxFigq2Rpv8sfwvYNFXqaaZYNkBGSYE1cjXqGW2uqvXLWu6NuoCj7Tk96yVVKB3LitEaBG9C1Z3pDyW3Rt",
  "key18": "qb8D52DTt4gjEQcctDDkwJrH7oJUQfKBkTQsgcRbdCWJXN8FuHfabS6srPBQBSuKNhyNyF76ne42YhsVu9r2XMv",
  "key19": "KZgq4JDsA2TcpKSnXW9rp1hK1KuH1Tna9Q18tkeJUYUe5uKvbf4KBHusPDPNsxVdVerAbMdYzLtJHCeeqEB81J7",
  "key20": "4A1SymHKo4MGKpTVCjERNknPPmZ8KBBQnDffPaeFLsRTYMf8nWpQVNMxcoxEs5XiZboQZmWLEPF65ZZeAACC7iA6",
  "key21": "4dHuKDkTbmBCiEjvrkwzxdNbRFsPD8UVz3rwasuvxUgz6wcR9wwR3nizETaafagDRtovYDg3hps4f19SjFkoBTNj",
  "key22": "5axxa56dTGM6ejgJiRHsGKivb61FKbWHaj6cUhSxLv6pQZsJSBzvi5GmzYJgoNNoyShoiQxwH7kcjaZcXcxpknyB",
  "key23": "5z2dGjLAejfVCp8ndBD3h9EWv6NG6cTzqHbEvBSZNpZ6iu3AmDj2uzUhDoDVVQrqpWq6HddbxCUFjsTzRbidbRbL",
  "key24": "37HaDZYfPeZhe6xZpFEhWi7tQt4ux5iw4hCbiKBMW6oYHnU7Za8PxPW5ndXFkJdrvU4v95L4a1HHXEu3gWFGbzoB",
  "key25": "5SEjY1erN9zy5keRaKvhhZYW8645hrCUrQAyqXLqGgG4JbhtMQkk317TDysfyomvnxWNpSGWy8d26u1tZjERrZo7",
  "key26": "e6jLDx65DaCsVvrb4KjEPBm2eu4NMS2uXEzWBnKz8pxcyct9tdDRw2atsUu7kBrfBwXhKj8BJgC7FuZL8yeqih4",
  "key27": "4u6B1BcrhNeBqVGoiGshwceUUtKMbj97JCZSacmXMkA8JEskmjfTZNRcSeQjqPvyjEa5YccwgSb7WXpwaCf1eyxg",
  "key28": "4sagNHyJGbvGTcNtsAFg8tHLT9T2R9xoReK57F15pF4a93WLwZzwj3SFa61Dq1Vidgwg9vfPQ71XMCTdjRLptG3h",
  "key29": "3GenYgefcBmmZ5KenTLM7fxMp8BmdiMxseEhermLJu41e7zEHksFQxLU1Yzm3yeLJSTRWew1zQ24V78TdSpKqa5u",
  "key30": "3yL4tuazimaCe6Vxku4B2x19xcdqnGH39U8rbYPKaXH6FpvxbrKtBB827XeRsv2RjN4K2AbharuW4xSRCBSUkFLH",
  "key31": "3ELxas5vNCWZfGsX7rskmsvov3DHwNpHRUDudW8vYMXotybXDVcnrgfpHrF5VmsejVpq386CkzunioFyCqug6S5M",
  "key32": "4e5hXtz6CV9cGE4EjGG5u69pT3wHMWHWvvJKpPzTzEYW6tuuCMZ8GPo3AdTpAACzY97XZqeY6HNLdbNuornmg7J6",
  "key33": "48o1uUHREd7LL918rsLqUPbxGyWwqfh5BZPN7A4CGrMkRPhU8nc4qq4knagg97SbEsNg5CfcB4w6hUSB13Kmqkmr",
  "key34": "5LQACi6FvfxBvFm5FRW7RHHCexTKsEsBbqjdPc4bbAniCWJ9RnEyrenwLZKMGe917kmZi8Rtjvv3LDRy7Whoyupn",
  "key35": "3B5USj9DvWkQ3TSqCV87rUqnn3S8hXrf84tjydF9NEjxhga4w1iLxbcqsrggQcFZLphMpD7DuxKU43DQdC3nPDop",
  "key36": "521svEHv7nNs8S9twmpSUDgd1zP2XeswLa3VRuTMDCdm6tLbPHQyjs8nvA1SLxzyBMMZotaePMitJBckqAZxd9p1"
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
