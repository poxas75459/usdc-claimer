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
    "4zw6ob787EJLAeDxFU7Pcj79XvqbgVHojug1USCCpznm5vWYbuDAgHJ2XAf1BedRu8qncXcUFL77oUnGFmo68MjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65v2EaqpPjAyafGbarPpcSmzXJ3L1zTXKCUEr6fchoiiC7oG3G9LZwe49W3AjhBEMZS7FK5tF4aA4aupZjDCz2MQ",
  "key1": "2C31mPZReEWwuxdrs4uAFGYN7MobKvDaw7BmVm4UjVTG6UP1UZuwJRBY7JuMw41Y5LURDUsLrHUeV2nDgXZDZC4i",
  "key2": "3gCt28cgMe7iMzn8gcVNxV7HBpWJQ9mwoC41w3Uco3jYjfGoZjgf7aJ4FNV1VK5PTNZWqaFjDGk1rBZWAaiKSzGE",
  "key3": "3y2gBLU8o95Gk8Zur1j5emKyFDiXib5kMd6LtLVty1KRSxsPHZU59FxL9GsJJM26qNpp1WGrKUswK9kzRBBbZKaY",
  "key4": "m1YEr9fb7KisLY5Q48Bq16hCyd2BUzC3HrKh7N6sr82ePKh8mnfkjXJmcUp73sLBUX79GuUDoNMjoEXvK5BFh1n",
  "key5": "3crCLWwXyj8SxDN995bk3MZYB9vE9d49bdYdhTRMqoGRfpmSGnSY3ahoYTp2sXMbM9FKrP99FmYbxA8UwW9kWw45",
  "key6": "4KbHfSZ6EZh5VKbHx5WKQ2tjTiBwbava6MF7Ejg11KWeEa7vfyKZktB8mVYxc3CmDaFQBKs1uV1634Fx4Sa4gi3Y",
  "key7": "5MgihqhfdphgrzBkhBjWdLVbwcH5zbUgfVmVvqrb7X1KeMZviEL7VwVJErdE3KaRMJaytHmH7yNRD2gVtZVcTywq",
  "key8": "3RR2ionZAVcYc3qS1TntPpy2MymZNHoBQRYSPDgLvtRXyDmyNxza7F9sPxdvP9cnLoFBXdGZeGAJYkPpTcQ7Qjqz",
  "key9": "5J8r7Q92YB5vcK6wycHPmxWqgnYCKCjqu7qtWnXE2aip4fAvuoakjvNxtMj3Z5WHqCFxNNSrbYkGmfNPx2mvZJuY",
  "key10": "2inDELaGKGk96pkLfC7VP7RMdj7poaheFmjNPLPrND1yLz3rdnwCTiQqRcngXrRwZ4ZcbitwqvsTPdHwMUoHJPyg",
  "key11": "5AyyJd72ghYbq8HJMLcvdMLJSYvgDEuViHdPQYhvgPR2tfVwNUDEdDYyxbhqwXbYTeFf8jUVcV63FPMfbaNYkJFm",
  "key12": "5pd4goUheHAJR436FgAMsyxMs2FvNGrWAKYT4KuoQp4XMjDhrWL4pPtheT9UkfDuin2LaJzTWNLkUDyUW3wmc1bT",
  "key13": "2d1WccBJnYbozqFLqfkkjrrgyJrpAekRCJtAfjMR1L3i4zJH6AmCrNfnhi8zhws98HdajAdQtmzS3wt23fsCeVtx",
  "key14": "4ucaqbrUDXLCYAWJTsFeHzRqTKTC3zWXphTRekR1uFhcJdPk2nB4Dzc9VTUL7A9Bv6VoimmpUajncLfyBTg2vV7L",
  "key15": "5AoFUGPmNP1itKaBqw4wjfxrDYP1yHGUEPHkm6JzMe1o8K4BEmSuLfNdqPcdAWHxqRwukyiGQrcgKBdmydtYNytf",
  "key16": "517mcajNTEajCuzx2BNdgDHvyypCVjz5toHuYrhBUJrnMqYB8AYuVQEkcMs4UHfN4Ft4VhWzg8bmqHwE4YG7R2t6",
  "key17": "vj6BTTEWFCFLrcfgnD5Lk2avKLePfunqMkdg21j2MW9tgi7gh39WqpNFpTQrzZnyD4kEWSfk7zmYajJuvu6tczE",
  "key18": "5er3K32jAp9y5w2caMbAQ4NMdVbKs1BncasT36QWmNYuaQ765ckScdShMZatLN4AetxFfuHH1Hw4nMUr7V3j6A8w",
  "key19": "2whgqvz2YsR8qxn69gWP5YD4HN4rJch3dEgpqdGCdHXxxHkAnEkNndogPBPJGXA9agsebt5s2rKG6RTwkYWghaRe",
  "key20": "58qPeHNbq8ujw16SECkqBUzwb2xpMJibjvbXTLchFjXagbTRNduz22RbnvqVvovv9csoc6QRy6cdazDy9zeAvvN3",
  "key21": "3prVcEQ2dXAD2W7VHp2H7EfhQhGnHZU1ZaYYWC7DKMphqk4HqZNGW5KSUo29DVZo4Jxk2bxHpo4xA9NfYqTYHFhj",
  "key22": "4fBj4M6R7KV4LzhPVeGkiPTaM3zB6X78X56BawVLznWDe3P4ERJNYUk1dmryia9MPAmbvyGsBZNHzeEPxym1Fqj5",
  "key23": "36sXo4b4KbkKihsKxzvhZAkLJr2jdvP8qmhw5a3AQx1Tzpj8Dsnt2ecZ86zPXgRBSstAbLRxchpiY1pqnvR54NRS",
  "key24": "4sn3X7nQBbnDmuwR9shLJkriP3r2nqBoob95zzY39u5352xuJhN2HJrL1C5Rvn9wa7tx6WJCZFE6Aei9o1u84YBJ",
  "key25": "2YEFuoJStNCfeAYS6JQzX1Nep94Qj7EmwRBbbiANonAuumJZs1zhZcSEtrJSV3iDX5HcHQgsXozpDXfrwf9TBhvy",
  "key26": "2oNCRXeeYbvRvsWTCE4fDGrFU1Y6M76XN8f9gT7UC2NB4xfHw3Tmtsa96VJPLcv9WhPN2ZRsXv8ErFSRdGE3yK1y",
  "key27": "4Kyj82ZX2dk6nZ4C43qAeroSM6etaXGBngr4vsxabjczeXopgH4pyvgyjAb1WozNBgU3zWz4CtsG6GSSscybibzw",
  "key28": "5kDjwBvG1utGNDQ8keRL53bEXQ2pwo8TtzM4mFsXWdXyBwVgwEfGmuxydGZ3PodoCUNdqBfRYD6iQSrtqrSKnpYn",
  "key29": "2YzsLgTx6X8E2cSiqJN34HYhLZvQDDjd7hSaWB246EAm3c9UfzWpZwH44Rx7whSRjoVEY3ZfVn9nZ5DZuL2VJPAr",
  "key30": "DHqpEMrF8YUR4FT9urN9V855HD9LCrhuRu3GUi9piB8ZTFNmVwqyvDF7zs9ogiuhmCsjytQ4BtDvUACFeMkydzy",
  "key31": "744iFF47acofRv9Y9236Lf4wee5F3tzhpWZaqfMRd2YtayBnYMkFwcRtz81PTbteqNRuCQhT5PR3gCFQSpNF1RF",
  "key32": "AU38okxRanCk1BaoDXswr8bN9HMfTjW6AJbc57WERTb5PSEEr6yFkDFz7CuqBid9FXGGueVEJsqbJBujucrMRaN",
  "key33": "a3fSjSPjSfMXXoWtPecbMx2kCPJdLNgbDEAWLnZY4wP7XpuwdR3uuJGLkh5Gx8fUiM22HbvNMYk5zroYsrbEruc",
  "key34": "3HsptKvh1Lfrwdp9f11rGF2BwH1pAUFPuTdy7rA1S5CmGszdyBezKsvhxUJudb8wtpzrFWQTB1XacCCsGqA7nfQm",
  "key35": "2a9yvoMp7aDdxjJHR41VkZAjUGJ4JKL6YzchpJ4AtwDmSEWYb9vYT23YyK25jgZGKeUjfUJAUifucFhhrnj7Kz15",
  "key36": "5rC2dLbsFMtPQTyRvE7g1AvrNPAJ7vESuU1gzRJfhHnBaovxEUwCqehY65x964mCCkJAHjpGqUSRG9UZQHujTGSc",
  "key37": "gkXncp3AYgMoxatx6XMarhwzC42EpMZdCo2XAUYqjVspdqTaVawNafBVPtaS16KzTcwLZYWefsdA4jnLNzBkJ9M",
  "key38": "25rCbGPUZ4WAzXwVeiZiLJhu9GNyBQeSM4rXChNcuf9HYurmYajDrgpHbyb5XmUns5q7JKi6zCoLddpbaXGEHRZz",
  "key39": "2nvrHeRD2Hcv9pA9p7a5YBgwQu6WMuXeS9FRsdjdKrbStj86rAbYLiFpFavbc2T6ytBs7oJmJNEXL1rWeAuqr2Sb",
  "key40": "4YtVAbLD33QCJdyrny7zUSNWdFGv4S3vKHQvJE8KRPwgm3EGJeL5F33U5ggrraPfwB3zW3nnsRNSZfuMY2UKerN8",
  "key41": "5gQahvDubSavZJYKoGzJd1uYvfpiFLXAcRiVnVQWUZ1gzs7npm8gDCcACvBTdnFWx3hDMNR2EjnbyCQrMB2Dg3Js",
  "key42": "3nJQEkfTJsx2U11SyxV3STaW2P9PokWd8EMAMeXV72ko7ModWKvtBnnY4RNQqd6ZrxzS2pFYxiBV97N5TDMbd5EP",
  "key43": "3GXmcB2Qrbb19VgcbK447ev8Ekq5rNiY2KYJtYCTg5bDA6yskPBqi4SPwbbAoM6kFqFZPHjwgCyD749aJNxz6uJA",
  "key44": "5FMdoT9suw75mZAeALKhUWj4Wxz1ZxwzYB4v7pX3MtZh4hCf8onFCXdFcdYhYrpL2XM8pnQVXpLduWMmXX58TkE"
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
