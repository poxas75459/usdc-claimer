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
    "JyomyDEbMLXk9KiEeKz67sCyTBotPaKfjzxe7gHPFrFb8mGGxPx1LYo9R75TLv7CLjwzUNxuzR8h5S3sZGTuTFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rD6UggJY9Dit51dGeXogaqejqpfFeSpz7G4LBL7kA3xLUJYsXaosPM4UL3Wqt3uSBZ462Kz4R6prPKZ8yCbxvz6",
  "key1": "5f3hWvFfwMh5Ay1JJMnmKWSxkYcp7FU6G2jzM5RJSMaRyHuoebT4LKTpJfsgQddDeLBzifKaJoJMjxx29gmXFady",
  "key2": "5YEBNDmTtQNAT99uxYRRWzTvW6ibZorzs7rreKqYTWR8QJeU1qSGCMacXdZCbyPYdoGVoUon181zd9JGjEZGaCdY",
  "key3": "4Eqsh2RmMxBJeqmPMDMCnFpgezjSEC2r8Rg74wd7aSAyuJZau9GihydXSmegqiKqbeb9kLYzZnP4QHNW4zogGQZh",
  "key4": "5c2Qr5QRsv4HXEnxXnnHfWmxPc98L1fYFXsUmi9sEC7BNRXRpDy1TQwcGvUPAKXZjx9SHRqfw4VSZiuyoVPHE8fv",
  "key5": "3RYnQ2B1L28CRAeu5zrtUwwJRXjia7C9nUT6aLaHs9s8mcZXiU7h52USEY4P2TrCYNZdwYgGmzEYrrWDg1rwBfYY",
  "key6": "4BCdjuPFPZECV278sXYocbt6n3kcnsxBe6dwixcr5tcuNKJtNvrdif3yJY5stRoCxtCunnSiuYzsNSxoEmkiVgWN",
  "key7": "38zyG1qpYddN9ZGx6rkp3e6Yo3kYrpW1M8KqL3jKd6uZxbQuhcN6pNBGM8qZA6DaW8aUBrH7FcHxDuZg5JN4u5A",
  "key8": "3L8pRfPiM3cpBxZZMNgZf1ZnWyLHqi3tuTQTktYK1YFf4YSBkg9upQwyrMpS8tyEJuFWssUbb3TqquYD61stNi6S",
  "key9": "65e6qgyCJj2G6Noz76pCKVFLAZpFqtk7dikcCastsoo3pLYxbsJxY1fb2HPcPX5F4krJsttWkRFNH3dcWSAVzTd6",
  "key10": "2zakFxQMLkWtTd4hHHMePcPW84e6rUF6ZMdv9J3iKk5KBAGPY8XoGQuan3vQQUMRegCjnREcc3AV52bYSAUG9VZ",
  "key11": "33efU97Zf9axC8RPCRUFLWLnaz6DdB5bcyJJu3DqDfKfnsSaspZS1mgxeEgFBQxetRWSN53EFff142upVGoeLqtH",
  "key12": "2oq8dwvaHtdnLt1333Wqcocxc2CJxKgxAqckRCmwUVnBisVsPMRhw79TiSuRgsxTDu958r2PV94d9ncrHn3Nw3Dr",
  "key13": "2uSfhooYh5meg7WavBVXTnN982fGQ3DgAK1Vxvuv3umPZvBx2bgsYE2uZ4rbkqNiNSWTe54MUWNkErYxNvWULjZu",
  "key14": "4smg6Uc415EEM2TgRNBjtULZAtHCXDCMZ1U5DNjBLPKomvum3FopHnuUwbjvX7gbSn6PkeJdqr6DknSfW9tFyZJe",
  "key15": "2RYaFtyaKCbpdFB3Ef9kV5GVgoi1k9tCS9Qm9PCsxES5Cgna7vbkj6qSDGKFFbBovfUW8VTnG4RPbknHfHKKeG79",
  "key16": "2JdtKJxuUaoeFxHY9eMvtPgbMAE4m51bC2Pzy1NUjXkv52ayHDCqw9bu9FEPeYbBDdN6tvmDMdynYpdFmeb26hs",
  "key17": "3hQsxin3t3fPpjisceLBEUFjxvM7zyhJcpeFjEjJfru4c4wr5WnF5vHscAnhRQvPbRbrXeN8YXyjymKAXME331Q5",
  "key18": "3gE5yhSpMrvhGXFRv7Znn4Zv16zBFvVjkmA3Ts5DWav1G7MkP64HyTSQbtmZfHmqmCBYi1C665ncroHXrzBPw2vW",
  "key19": "5SyY7ZvMUsQL3xaRs5a1gZ9uaGpHxBALRphsQofk2imSNLXV9fRH9JsJKvYi2RVF2tHyyfg3WWZBiE1nKsUX6dic",
  "key20": "5mcLJTNojvgMHb3dZRe3qHQgnwkwF8XKZa24Q6E33toBDvgsCNDu2Ba1ggxEyHL8WqEtCiLGXmuTVHAVxcUQ6veU",
  "key21": "33HWjpjkPmQ1PtkebyKhVWuMLKfU2mUM57GMfrxJbVsZaQxJMaVg9YtQQPGZZZVaGNe45F7RhJ5nHgdaHy5AvkiD",
  "key22": "PTEYySdYgeBkvS5CRLEbiVtX69tE5LNVhbx4PR3nhaNpteH5R3cRnzrBrT1SCV5ykRKfZyzB4uY8hN3mH2exXiB",
  "key23": "PdVZ8UwZY4xeeiLQ6Zr4ZhheWeCy2KXJ2AigQnM2Tp8NXq89DHr7i4ZG7CCVHGwcEfykctbCq9kNqoUiUv79VQ1",
  "key24": "2F89xT4QyTUn3Fo9xtT3qc5GbmjCXmChMJWdPEsTVkoViyJKjRzo8t65vbeY2KSZG2siVt5yKFTj7LCgxFmHnxBb",
  "key25": "3bz1Qi2G8hSTx4nZnVaVoB8seRp6Dsnbfx4XhAasHDBoKZ4dnYgG5A9DLFEWa8pKjo9SWNk2bCuXs1Sr5zs5HJXX",
  "key26": "WKj3quL6FvHeF5HDkWzTwNKGyLTAmFFze1SE4qBttRdZsCuxHtN8EzZKdo7GJjHoVCWdXUhQNYMf7sWTNGRNTfe",
  "key27": "23HgYFCiM1gcughT84Dhc4uLH5Yfh6wbmRaHyv9VAYnWMnbV4J5Sup6VJqgvRuhn9phq3B13SuBSWZQ5sTFJXfM9",
  "key28": "2QM1XtHa8T6UqGpJqoPvtPwSLBuv87JG9LxFzNyP1NBazN244wUNuqP2isB78D38UCtp5BhmufY9DxVYRRkCfuv7",
  "key29": "4wm5J3jDvquznwWkZaiXHvUFn9h9PoJqN63JHTazmE7t3sRGwpFyDEwLYPCcqFEns74cwgVX9QFzRbJfTQVQ5ecm",
  "key30": "5Prdfchkb3r8UoshWdFUV1PuM8WXVZ9M9HN2cP42fVHmfApJHpp7xtq4RGVbo6BhiAiZrqcfP3vwpbgQyspt34Av",
  "key31": "NhWrhypCeMFUtdzwbXxmMWuMvfxPXWEjKo19CARJzuVGf3eEd4aJUnSBpcTKcjVwFAEm9i8eErQ2iXh378RnRJs",
  "key32": "3yJtyA1J5kjpLWpL6GUK5RBaPYUHThDAHMLheM7cFXwf9h6vrHJsFPUqfs7CkPCjEPdkr96K3dgxMcNpraCMUQKP",
  "key33": "vpW4z55pGPhhk1EcwFbPgk5RqQ7d12rNkgeRaZX6tWe52xPmMXVqhhETxKjVm37GdkcSPWtoZX2Ew6NmTXUtkBa",
  "key34": "2BHXhim8AkRqot5wuNT93CwCD47MCec4mr736ncbVRuHQ2x15AbnYRWq7fUbwuGhoihZVr2puZjpvrzysb17tthy",
  "key35": "2m5HiNvmMt8gienzs89TtkgirEftHXKGwNhFgsoNLv2ffzqbPd954kKGs2tLTeanJbCJ7U4vk2F1uqd65LhrQdk9",
  "key36": "4oQCptgkgxgAMbw3m19WYxctsyjcSi68xQWCQD74R4xj1wJoLvcMF8CecJp9diuyNccSLa74MFeLB9JYP9zCFQtC",
  "key37": "KwFQDjufHvmXU4c6DypAQu5fkScxqQXnw5hCu6UBn2pHxosJNhkj3Niiffgk5bhxpnS8aJ1F3wjBMWwdFWeFioy",
  "key38": "2usEAyxqap72ePxDCErhTjE7mZ2CF1fhWft8Vm7psvCX7iAQg69duUowSq8qkq18SiDj7i22sT7vUQWdS9iPHFpD",
  "key39": "4mz93ZCCpeFC6WwkD5n9QTgyEU463mQBB8Ff5cb6TLRMLHWZhrB7aeqyUppUXv9wQE87SDaoSdVAqCfhveER2XcJ",
  "key40": "35jr7pVNhz39QfhtzMo7fLD6cwrWh4j7um8voBArD5XRxxDhT35c488cKEdCXaqqT4jvKBJUmdNVX4D82Hi4YxgB",
  "key41": "3ZedygdcEstogGpqXmvTBdJHhgeB5ULtbgooP7mhVJL2UHfE9pYtqSkVcD32iv7AsSgCmJGKsDXCa8hgxZUM5KGX"
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
