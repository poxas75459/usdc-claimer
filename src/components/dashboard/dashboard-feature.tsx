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
    "sANWS3aWxXrmxY8FYZbJbhWasQzon5bodToLcVWckcR9qPXhkxgk7mdqFzvZfwztEzvVwzYT3XGDhLifaxCotmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UHgbzQc35tEQPJPVCS9xeBBCVXsM7C8fUFRBEvxUeRnsZXah5rnSLXnFjd8MsafrPDFz4iG7zFb4NnZk2z4sfLr",
  "key1": "5myvRaJfrKB8Tpp29rr4qPZPm3Fx9UpS5BauwohZ1daCjDRD2XAMTeBQbLVmkqZJZzfLMmjrkdURbicDuJfcx8Wg",
  "key2": "LLtYaLvKTyEsgsXtmPddqe3izf3dr8tiVqZmLsSLEshxtQerJyznVV9n9whF83PRNNXcWXprX57m2dxNbKGrudY",
  "key3": "1ETzVyjCa5BdXHQpwnoYWzaT2gk5qPnVDJstwLkgy7hdZcSHiybeHFVDNP4YBSqa89He5v86vNmuzqzYmLaRSN5",
  "key4": "dkKU8NXoiNUpCNMXoWfVK8sZ6uHY3VmNe2KZointie8baxT9xHbku6SsfscRkiWGjxpx3cJrKwzPC29Ua7UnVfE",
  "key5": "67cpmUdgu55hF6oy2JufJwRqHVEMR6wTPBoU9bQfwmzzNGDSWDb7cYEhbbQ9QSe9umVW2c721VhHTWKxPar7iLNp",
  "key6": "3wJJWAvN2oMra3cDJYne4eiTPFREQ8TYKWKfYzY2Se5H65RxV3z4coHevSmqRn74JskL6kbj4ddm1tE6uJo4YA2v",
  "key7": "RczzL9zZAHqpNgNapEKKjc9Y73Bg6Wki3bqg8GxZiDqwjDaEfHuvkoG87q4PJMPtQm2YdmBbAQrXA548R3W5hBB",
  "key8": "4jXnP5bcDmqVKa3A7NwGKP3gSCUFNQ4muC4wwHsPdishQeH1BzdBjPrDfFpmvVMPhMTgQeHT9gJVZLsyManuwffh",
  "key9": "3E8LtQUMABh1ov7Qob3kMUVskm3MxTa3Qd1s3vRyBFyt4C3eu5pRV4pwcxtiTpjqfskWKhZYFbf4psQksRK8Knd4",
  "key10": "3YNFVWfvhnDxRameXBWXY93GFF4LEAVYsGvtEDjfhzb1XmVwwaCueUJhKCLjWYJVtAGzGxpCKRs8VE4n3vyo3ZT7",
  "key11": "DpMT3bZj4Xf9VV7NxcNFnXJREkscmJtb4JBmkYuWgaZhzUrtuZn7Zwzd3692tEp4wETNe5EH1mZVfgP6JvnsHdn",
  "key12": "2oydPRT64jrVQNB8Pak2by1KBmqGXe79GGbwR6UvrCSqeqErqXqiEGkM4FojBtUXVoSpzePMaQZXL8bhtutHYQNE",
  "key13": "5WGpokiu9fnwcPUxmmwv6oowBnesxPqzukmHiUnwTRX3vtj5kPwgRvrYjGoWMnRdtChEuPdRCHFcSKAwjatunCAE",
  "key14": "4aqqgYYePi2t47ekjvpNUjSzbfnQtZ5rsbpn84U6Qu5cUHMmpmPcETmbxJsoM2X2KpspgNGUT7Dj92VNrQdAiXbU",
  "key15": "4uWsk8Qj9gSU5s84VySzyEzn3JhZceoWJHS2hR7sX2h7yzbkP3DC48oT7dEAzi7DPDJ6VV73YB7L32kfsRqtFuVj",
  "key16": "LRqgT95dvuFK6QFzrxyoXmW85vKAjA266RmQsoewabVprHnVKEJUy8LPbSkH62SbGTehvvvyXLqjx4Tew1NS5ff",
  "key17": "TZ1smAX1zZv3etrWWoWRhTw5orfm3hYREK36LnyzMC5JJyBntycmgxJeHJ97haVobqQw93j3yeebLPGgM3YnJd7",
  "key18": "2Y7TDVFoCwZTdZMPmyS6TJuPPrub4RTBFCx5CdTKSmNTRFjD2BePj2o64QpexasjKawYeN1Gg2sdxuU7BEKR8pJn",
  "key19": "473D7ELArAECHNXYAtFWLUMnkWmRnvko2j4SUkjmeLnsYMDpgPPRDpFCcoxEhKQWm9ZjzVhohUNjM1f2xzACiQ5x",
  "key20": "vQ9QCE4ov9i65swrr1Y9LoM7hHkrQetnNrVdzuXa7aSjXCtPnDfg4iAzuTGdwzbtyNgvk1iiMbtdsbK9FXoPHHA",
  "key21": "NwrumQsYGSdqiozSToUWB2tEG7hvrNDQy2cod1qXRpEAEEzZvWruPyrxLc6DXaF12iBwGXvYgfu99ydcMtDwHSs",
  "key22": "5hUAnf4bU6Zw6KnghMDGKqrXiX5o83xnj5uoHHtsUPZgxWRs1ii1ZnuJZgHNXGaXU4qpGYWgghKhVz4RxSrcUPCA",
  "key23": "5iwxA1HKgizhks3H6ErAwkDqPKauPuQVdTtfmo5jVJRZ2U2kE7HYMkwTVRHLEMnqtfosDg6Aw8Pv4QsTJT1Pvr9e",
  "key24": "2R2CQrEXKAECZKz3PcT7V64ThWKapvtTxt67T8tKvCoQWH1UHsPVLeKJ941wqxrypj2vWGL4cynaVtAYh9kLdxer",
  "key25": "5izUsRFiTqGqnquFqnYBUUrYGERUDefKkFx5Qu7cavxRMGxMXLrK1BJs6oXuDg3Ak6kivrbUgfbwxBU57owKrM5Z",
  "key26": "5LTbpFjkibSA72oeDJd6fXLSKLGrQxh3fhgrHdYSYqCR2YzgFyoTHwXtfFM2znN6rmbeSs8iSZe5Ek4VMBhajq5d",
  "key27": "G5jcbLSi5uKZCUopTcpPQ2xcW2mq9x8fnBdcDquCPzLwVYjpiNVHTtucv4aw9Wm9RrNLVSQGZomA6KZ5spVfPar",
  "key28": "5NFCgghazgWLiFT9XRANBfT43bo7D4XtGyNd8EFjE6GAm1a1cD6iAWxGAv779qdxq6V2hKopxnf7bJA4sNcajEAQ",
  "key29": "ZH8HJ3VaVw57d32QJJgH1KHPDDCLCsAUvzLmvXxwTDkNSxDtBAEidcZELHG4XxoY594m8FRzDw8erFbxUvvuoa4",
  "key30": "5PgvBarFkkHuifxPd1jLHFtrcinQjdRompQQ6rYwqydLBgK2q5xQmXcRzexx3tozB7BvVX61FKtg1F6S7A2W4BUV",
  "key31": "3uF3faWaZc1XH1ubBVnWMFytQiD1eYyaVjKcVdL5btjoqkvtwUefaibp514qCPjmMEufiBpodqzyM8e8iuH4LFLP",
  "key32": "34FFsUMtzTXcnjxCcBrBaPVJQqys73rGQfMJScUoYFKNgE7A7p75tHrD4xxHCniQoeM1XTNWPCykF8weA7ooPiTJ",
  "key33": "3MXrL3hCNcd6o7T7ssXpYrztWum8w7sxWK12MS29ztgnBAPY8nHUREwxRT996SJCL3KWqj1x3tgAtLkbynbdDkhL",
  "key34": "4bfkNeLa3LhNL4RTmk8fXBXPvP7eZRm3e3wx8tmHTUngWwFUjgMr7P7njW1x99qMvCywvs7ZSCz6jr9zMksaun9Y",
  "key35": "CgtZ8Ef2aQLNzZBSPSERbYJudXvyKHvUJAzRKyfCQ18ph4uPhi1Tnhxwvh3LSzvbZ4J81QCn8QRbeivEyqjinMw",
  "key36": "3Vonc5eUDsxJJRqE4inB1mb36DaY38yTcxtScdHW3btjqmSxZLvBsCAr8pd9rYonxs7Jn2AVD38tE2KrmpwjNVB7",
  "key37": "3UFDyJGexePZNyStsRa6pfN3JGTVKEuoA2PSZpkcZwAg9MLxvXAoD3aVDJGJ64hBgTjdEb9j4kQAHdNwVF7pmgLX",
  "key38": "pSsunH7C2CPRmNiFnyH17oiSc4ivm7YjnqJPzTYDA2MvoRoz1NYp3jsHeSfVtnZGcUUoF5YKf4ssQcUK7CswmMz",
  "key39": "5tap8aoEVzxUi6y2n6Q3CjkLPed8roK43xPSzLg1zk9oPX1HjEkKbmrF6evmi9FThiobyc6Xypvz6PkSfntQRtB5",
  "key40": "eCCbnqmi4W1XiUP8ZPDrNQ9QcKT3sXhgvfGD8vYHGLe4kP7xBoHfqjnArgu3wAqn12BQ7ri1GEFiBJ2eArRy39H"
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
