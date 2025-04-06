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
    "5aN58YxeqvbSLa8Q4dKknYSCFazFgkH4ktqiX6MtKfoR6P6ZNhXqVDgf3saVjrVHfuF7zBueSAsJrPMMTxhzEz5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QWaksE4qNe7CDAXF7A77A6WKJTQkckXGpwAPG4aDLUjd2R8E5GChFBnq69GN2jKkEcCAZBQN8Zh2xamzRefVdvA",
  "key1": "2frMx2DfHFN4wGsmMrdybhDDMdkBBDmfuWKDixNsRMLoGwSgCdCQFyZ68fYCmZzLaMKgEY7J2MUnRAYUQGaFxmbw",
  "key2": "LhtSgZ89wnB6ot4iQBLxNitC9zSKXLZAH4292JU8CgS3cNyyF9frTUNY9n945qFEa5vr5M5jTgQrjca4h2GJDMC",
  "key3": "5iGPwX3kFbyNM2YTyoy16DLCqei6xXEnYgazRh22HyVazbvHqKVrWt1XTKY9wQmUCayHPk7e11pNhDnBJ7mHZVre",
  "key4": "2GkA9Xowf8n5497njyrS6fzkQwHeVTcxqRhei62ibZGwX1ZtjkWfdQ18idCcxw6JCRGxXdpYQZYNi9JeEZX92feB",
  "key5": "wcNHecGgRsULfJHHwHA6UW2n7V9f8MvfUy3u8cc5n7gsoEb3Y9pQHsafjgDrja8ixTiHxHjnJTa4ukSwZuktZUo",
  "key6": "5wchA5Z25pENmm59BfbVsXPh3N82JDLDiRaG9qckZN9zdG4SuZVub3Kh4qd49jKGwPb61WSbNpfqrkVCuaKn28Xu",
  "key7": "5TkUnxpWXLGJn5WMTiGwhbMX7Jwu6zpxvPxPS2xYeLHHbecgFjFmXeEv9tvwRcKYUqbcRgmVm7cjt2RBA4aoa5wK",
  "key8": "2fWjuczZejibvrtdjg4mThuG42iv5cmrSXDA8hNfe9V8RpBYd2dztzcSbuo9wg4NLqXqHXdh8PJqAbXc24JvJ1h8",
  "key9": "MUawsweGc641UomJgbRyxRkTvKSFMao6rCy1Ja9m2RyussNDHY7xuHVyYJw3NNUjc4ezsWCCxaGKya1reM4H72o",
  "key10": "3zM8Bdk7VYYQe8946tEt6CP556vGdBcAPBrHzY7hMqRfTTU52oQaX3HojhMbj2zgBk9fJ9kdepimFvysnWwoSyi3",
  "key11": "5SpxRAm49XwkvjFs9BivU2X8pzfVuvhj4SEhw9XqjRtEFxB5WVX1NXR8BG43Pd6JqjKfTSCVPVWpTrNNtv5FSmcV",
  "key12": "4btm23Tv8dzDQXP7UDF2LCy3T3fSPqXCnE9upq66utatLstZaWRbWpAzh9KFL35WqLdtjbZfEkXd9R38Aq1JcMs6",
  "key13": "4Gwi9ZjAkQr5fxahrYwpyTLMZ3X8SkZ42XM4DVGcpjNVnKMTwBXeyZdYob4NT8nctcP7P1KbPVzhJdSdoFKVD7cM",
  "key14": "4DkYnPNaudVUkxXAHmhcJQSXXTp9XsNWd8MZgNcCzMjQPP2zeEzzBk8kPKwq3imbaoJ1jamrFNcP8fPNNpWpkqgy",
  "key15": "5rm4eTLam4aSTgrheu44haNZurvcJycurua5t6wB1BY7gRRnp594id1wXCq7J3A8u4mg4kVorQqvheQesp767Uzu",
  "key16": "c9snKmpEQ4wLNetftN2qNV2VPA4MtBn5GEAA9Tv1c9rE6nTw8kiDV9y221BAA1gygqX6wXCTqxVYjX8n8KrnaoF",
  "key17": "2UJx2rxzb1REqTMQSh6GpcvmGmEuCxKktFv2sgCXbLQpQHYcbFq5bXsfUr51nMjU2VAJwTkxE8k1J5S5Yd42G4CF",
  "key18": "3saqMHCJXpjyJdCQxdBSCtXxpe63CqPvni11XRwPVc4s5hAmoRf1zB1VBWWecPFDihsxKScoM4wzKpp5FCGwMkw6",
  "key19": "5L9fmh5w3QNojRkfy2Sdb5VhgpdcCPoG8xaonErwayYXCJpq4phPJdjinFzH33wgRgRgJYrZn1RTzMoa74Mc2exb",
  "key20": "4sZe3pofeMoK6oZ5pTs9kdNw27RkJUMbFqcS8iQD7vx8Yha2Gyf1bqs8KLRAWXYRnZwhtKaKQ8tq2W5ZQLjKZUbb",
  "key21": "4kgs4vYQ3s544g1BhWj2Asr1K22L763xHZa4b5z67ogkFuZtGHVGzLCGCsKQapTrRXr826KJ7472UqjnuYgirrTu",
  "key22": "SPdiR8A8qtqZnSwGyKY8NHTKVM63N8TAA65asxqQuXytCg6oQwZrJwrupuLJQTb7mYEpU8tb27ghyRviQpNVAVF",
  "key23": "4Kz9Aru5BQmf2aqHrsk1EqThB6BuzT9LsuRUqMXkVa2s4F6kSKPZvzB98j1fh3SUL27x3tdTHMGwT41j6EeTKaVL",
  "key24": "2irj5C9MBBMzfd5hLJ3gGKN8dURrjvaQ87i6j6Xfe7NahvNf2zneDUMHddP7hGi63gJc6HtQA3xLpNU6ztKvXGn",
  "key25": "kGbf4rESjkde94bgpiL44kHvvBS7ph8GTsrDQSH2frsARFBZsYA2pLffPJxVEf8ovoDy17uzpF1xPDGMjcQydXp",
  "key26": "2XAvg7PUF8UCJFgtW7581z11rnHog9oau7dnvVk2DnztyLCgn4fjtDZ3Z4ihhprnLLcEpUBrQJUHjLdJPoiRs16T",
  "key27": "2xQJnp1JP93E3Kz7tQYxWEbHAXxFKywyXQha1sBjF5Q3FSAFqm81G9c8gVSVjBuTeU9Zq6QAkQypwWE1VpVXqi9s",
  "key28": "3vPjshQQXcHJ5RSfcrLhFenBcF4ZMPmwFcDnxqH6VDpob2Ame8ZW6ST5U7WrtyQoDBZJvg6rZ2REgqEhb3CiUEDi",
  "key29": "28umHkoutXTnTzACyg1DbhJt7faBdVPUYDHa1RzCjDv4SmVQavsLM4tHPjBKqnyJWiWq9zLYreD9AnR5bnXj7qFf",
  "key30": "JigakxCtgPkLDcFEHSJCirP8Nhy9293F1RQXNGuU7jorto8giDHzttkESwGLXj9cKvabx4ftPQNcEkAWQETWrj5",
  "key31": "3N7MzRiA4AkhsU5Toqmm6aGePEmFEtZWvrXNqt2cd11dFZeFaJmErHpXHf3uJFsJAAzCBvk6qBkqeiUvBNB2WSPN",
  "key32": "5B1WRPiquTFbXazhLVPMV3UHfRmCu6EZMP5zimcVax1APepKQ5ZAPAy8rakcLxYuETbRBcQhhFLCQTTvPxW8HzHy",
  "key33": "41KWeHS73FPX7p3e2skhYnD11sM29vVUvCiw2Db7927GW5d4LGM5nNib54GNMBGrKCZh2TaE4U6vNdn5WipZFnP7",
  "key34": "ofChdV7WRrY6DCVh6Ac7fqzDmrpC75RmjnRgx3Vfc4PYGZYfqXyTwT9DM92vz2wD9r1hFNPJ5B2NzfkoR3rX1J2",
  "key35": "2XoNvwmmiobPeAZAEist576AGErkQKb1rRKn9WtTxky6tazcVi9UYiGAkFuqXbzR3w1FybQdooYhQnVkXPHN1ZXJ",
  "key36": "35FqBR1RB7cssNxxYYX7MEQojGTxwex6pTcMSQTp7nJ9KSkrSEjt4rb4dtbTeLQkRupruzPNEZqsqKptJUHYLL2v",
  "key37": "w3nNWXzcVPip9hJFP5oQ5YKboJTnSHcRvcKd8prNZa6Di6vvCVkZytFDrxS85zYQmx4QNVi9UEhpSRFVA7fNYNL",
  "key38": "58j58baubdad1k21RGVGr7eKM4aR1RyoVrw87gB1yQFHuFGVNBAe18CL5VEBQpTH51FLvcxi64o9aB7kusvKd1Va",
  "key39": "45zH6ggEBhAz87nSeL7AGb1rSiYUPetUvF1Skfs4S8doyvJGy6okN1GGfyKMDyRWdPqSKVF7jQiQk2qLhtJSJJxq",
  "key40": "3gCJD3u2xjC71XPgDsqssvkoDoYzHACzq3CSoamPKrTe4pALckgvGzqJ8bnEXXof3MYb7UdFkxZvv8qxCmZ1KggW",
  "key41": "3CswVnLLw3vKm4rHWDmm4EddPtreKfqaSswSNX3Zn7wvMBR7T8bu8BEUms6nPkoegGRnrhRrFBk5kC4a59KSurMs",
  "key42": "DoB9MJLK7LMZLMpYXKVVy7U9jC1aMHF8qv2EWTatVxGw9mg1RnQr82D7egWer2uyYigbFSco811yaJPunKoncYR",
  "key43": "5RZdi9Zhh2Di341gUGBYE6VBp72P7CE27xaQNaMsXQbEmq3XMapSF3i1ggwCXTSYHE5cS8GMd5PJowQqzhRe3J3V",
  "key44": "3wJWK5PD2p777Dm8z2VZX8Pw66PFtSJ6S4QrjpQ4QZszNbpWcYYjjEvH7bzZ53WCRTQp7gnEBXD3y2ZYREx1FfXj"
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
