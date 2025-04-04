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
    "3ariFFyHzoxd4gwPFyaZqk1ZTrGK4VmGTZkpQXMhTLL7J8zkmJWSZHF11YTGQKGaKhFi1kNpgiRJ2KqbXApYY4Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7bM7ouExttKFyX65YoxXXJYPxfdbLF4kmxydR6Z3fQ7Wk57xZxAG2cFc4AMtLHBtqmwVM8wTxu3bLVww411vHD",
  "key1": "3fhxwXDbinjSJA5svzi2Bjk8Rm3m4dH9oJkphA6ZSkoCBiGbW2kz6rtKWCe8EgJ889CvA7cAPhB83zsnYCRxjDne",
  "key2": "5eewUiLLqM8jugQWSRZ8vSTG43mvffahRDkwaumScnaVRA2defTkG2YggamFFpZjFzSjGNsbtLBGybsyC4Xfr48y",
  "key3": "4BktwhBmdRo6vqdXhcBZxiQwLT2nRysAEq4iLpnB9JN5VgnV8SJ9mCDdes84wDUhrzYvxRQwQrKrjj9aVxKnTnnK",
  "key4": "4jq8NgxXhCKppTiykUiPYmfxTemYxMK35Tp1Xjvodhf4i3kHWiBF6Hwy7wK4qiAZvwbjnaLdDBRJzKXuvPxTyb7c",
  "key5": "5xSYUBsh7G4JVjHg9hcv5R7Fxon22T6SDVMmiUjP7gvDmAZB3mZvSMHqo6VX8rWSczc4zbR8C1zkG6VGFtiGAT2w",
  "key6": "3JSmYQNHTBcSYPcrBryG5ckZWTJ96mwNa5pYDEPW7662tM5REmQpxPX5z7JR9QoPjRbtFXZs4U7CVvsMZw4kQctW",
  "key7": "bZrBPTjC3pXz4ZiD7HL6c8q2Xq523TWMyweZPeuyzA53wUUiVQKx5v2qm3bGTdN53f8RLkSkmt4VdGEN9BVVg8G",
  "key8": "2e2ABGrngwZ3XcaLVUSor8UvMVKjSZeixq9h195NSmLfegRMp6vU2ajuCjzhtwVP6pauF9t4w3CsvxkbsrZnApcL",
  "key9": "5tmmuQ4AkniiCZeEVcZiKj2YcK1zjQf7kLYz14xTQpwjdoj8VwJrzz2mk78ZJKs6ERAKVLgP3YxacdEcBCDdDyJw",
  "key10": "pen12MuiaQqRDF1mTLQW6aYfj8n5c7cKW9eWARHqBj3aeaWhzYhhVbyCriq5jV7rWtSzYtGVYBgSNpVBubuzesv",
  "key11": "2vdxrRRziSgp1ZFCsqMHAmFV4HrcNeSYs9uc9p53JwpneEB8HpngFhZnpzugUkaFt9a9957NrcctJZaDK1nqgFLT",
  "key12": "5KJBSq194btwukPV1aoHoWtgu5XWxUeJb1VutDHG1KSmRDkSNYzT5UYg6ciQdCUifyzsRLU7ML1BreKUpP1DQRws",
  "key13": "5HPLNRexxYhTGDmyfAFEPXrsD2GQVHFwrZ4K7xiZWdFo7DwXz1P6ETs2wSAGwMTr3pRNCkrw6E8BnT6SHTKPG6zY",
  "key14": "2LNkNTwZcdHN3H6eDdKBzwmZduddZQMontMUpa65twze3thGFZhMN6jdJ9jYyknk85qUbfAqbtQKJfGkJ7TUXJrv",
  "key15": "3nucYDi7nxWQpSJ6DTci7YD3XAywq2LzZK5E34B4eWeNqQHyK8KrvnPUEiZkM6xKxxS3ZYFxM4kvm8LPQqGgYBvR",
  "key16": "5cTssk13tCcXjYeNHSf4XoF8qYnB7yWEF4Jbh7EJFY6YN6qwSLmEXuVWuMp7yYgUBN1nyzXbLA2WJMhkJHLSh5hJ",
  "key17": "2RRgWNLSPnvEpZeShXAR73Y4wbQPZmSCkityczvRuEvFLW7ip51qnzLkiB4WYeHCmCKBrHw3vc9mqBpSxyDBBHUN",
  "key18": "2Djxx5i3Aev4Zx4n5vLbc1BuDy3pU7cKjm7Ln3ScbCXdRAQq8nfX5YdupvuVwB6NLBvBCiFJz5rdZYieqcuYW6H4",
  "key19": "UuzGLfZAdYysWLhrEzD9K75U4cBUYHpETK91r6NbBtUyaMXdvZ6Mnmwd2PHPscEGC9eYMVrUwtLLcqWRfapiNwG",
  "key20": "F3aSyS9hvU3Q1yr443ADhnPn6ykNxHxetPiuwo8fZa5oQaeAqCYxPWb9XmEkxQrn174ss45ckJxnejZ6xvSzH15",
  "key21": "4nvropLLj24R7XRko1hjyuER6BVoSQBWHdQRWb8o1b8ZmxaNndQ3kXqc7KDcSE2C1UMuZgCMHw5NEvKJDyGKiK8T",
  "key22": "jiGUxGsdsYrWXfERMuEUSCt1oGz92DAxuhT3vEeTjFwrnH2s61QdzU1eoHCyuddbTaNPzvztmj8uXB1UCKTkpVM",
  "key23": "3CieVYMgWcJqdY2Ker13Wbws1Xt3YcuDZoX1YFXjRcQopHktyioEWxPLPspts4ZgmksdYMmFNRdpYbgQxVUPXGxr",
  "key24": "DvKkiLetDMK4jppw65iBWhrVbKdSxRvvpXWdBv1tUpJgpTFD4Rv99C132cABxX5gJNFYfEi77no39Y9E6fsgGqu",
  "key25": "4dHwUGK4rQogFHP6ohdd3wvPbBNdN8RmcY8cTaxcWTo515bmYE2XaGhGQjH19RPT1XRbSkCfDAWEJeqygV7n7x2Q",
  "key26": "3qqekM9Wx82KPxWW4GHnNMehYfEVyKAug72n31SsGUqRC5nFqzPzPrTmog9WJchYCASgv85fAE2Zy8L45P4bMDJZ",
  "key27": "4ovdn3MqKAw27zipSwAtF7uKwjHPdYQy3dWgFNxay8Pya9yatom5Qtu11veKh9vjzLFrRP8mauCHRGmYM42xd1qf",
  "key28": "4N2JLNi8p3vf7Fyxc4WGD2dUHkd56h7yCrriPFS227sPER6BajEvh7VbHC8CG9r53qLeCLCo3xEiVX41KQPjyBFn",
  "key29": "53CEGYq4UBwwXjvkAQs7M1SF1zSaYS5pj1au51Vwc8vv3mNC5ptU8XbVubWxg5jo4JW1K72f9tn76QAUGEyakYso",
  "key30": "SfnatDeKU92C6RBJ4hMTq5WEJRJU4Z3XFUD5HFK3qh334yDBfSSSJy66ExbiC2R2fc3EfcEx7CjGbh1JHVr3XJH",
  "key31": "4Zu2XPNY68tuGmspsYGJi5cvQrRj2JaeakdMC39ssYffyfQzL8D7uqsBWDnkCm2tqmQQUNZE65t8vs1aYQGRuthv",
  "key32": "3YS9EpbYGQ3CjiVkN6JAq2QdJgr4E7yQUajgY7P1VkmKuDq1GEMobQLvcG7z7GzmcnqJM2yyqWcPdenqGKWpdkuQ",
  "key33": "5VU9fB1j2nVkkMRqK8PNCNUTyNqYPt4i4ovtL8HCn1qGZQTHLdEacX9KKoTFCeP6pouCY54C4yG4agHFrEde2qmA",
  "key34": "4ukn63c4jXvJ5hbiYo9cuRBbgf9BipycrkCXZZ6P8oGjrSooajSXJaHsHAXaYy5DcXC3TSbbxwPjYM3XXaatYgSM",
  "key35": "8nTET27wG5Z3n8FE2FFewmwYfXwaoZJ8yee5AhDvXCFPRKKWD6xaHNYHwi3yWCBaWCnGYzaWbbacjjXHh6GnxN8",
  "key36": "2Syq6dzdy6foTTwLZP42xXh2Dgd84pG9eDwxEXHCJSkypedsd34VUKhBqWrAgYxFm6CJqsu68bm5VdeCktTiWsPc",
  "key37": "4dpupt6ERooWK75ZQ9KdiW9ZoScqoJd6Zz2TVoBPSC1gxGXVGqYtxgYFB8bCUrPSEUiuGvy6WhR5ZRX4wSHU5D9K",
  "key38": "UHQhnoWNqDUQQ4r1U38GbS1vgMe7dExqF8SNQVupAhdSZ54974KvG5sqSeQcy4RjQMvzLGbTamYcBCRmtTeLzcQ",
  "key39": "44z87rbK5Ay3SVn5m84AFLpzMysMffRpWeYarQT5kdN1AbyatKYv5Vk1z6ybMFiu5idjzk7u6iBqrifDc42uQsfm",
  "key40": "4urKCYnUHEwTrmaSfwUovF7om2VrTAFo44kfhDUDfy1FzDm6qZycMRZgeu55TKiqE2PVMQfLRBNCHAvNeJ6ZWCPr",
  "key41": "4b4Kd3ng9VMAdQwVfRwo2z8d7THdjq7xAqBuqRWSnvaoq1E6Z759QaNPEZ5LZce2Si91XHUhGkBQo6CqFhtcFTqb",
  "key42": "3KiTPfgQiWFdMXBPrE5wNSxqdrXaUo3HqWRgoDkX4iBrE2H4d8emF56mWay1bfGp9T1RByGjUeDdtuPn7gGFphdQ",
  "key43": "61ZugeotvVs5WCs9vEcJHe5sxd8fyTQR93Fke1EfyY5wBDuZpcwi8ZK4kT8GtfYWtSp74pF8CP8CnhcmSLsS8Uv5"
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
