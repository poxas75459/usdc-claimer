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
    "2PuZkhg2vFdtnu4nSSmHB5QSoqYkHCeZ2Yyeo5VBw5158529PkFF7DDSWCMYUf4K1nYN3H95p8pvoojNV7NvoBbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sT1SiTgaNFkKH8UiP5La61eGo9945NKT7hBjmovooYvkwS2v2aXYv89dkR9YvfL3yfbJoh5PzPy7bqPE7EXCyu4",
  "key1": "wExsYyigophYLyfWt3vVWaCjeaEXa1KXMCkqAPcniwnk8UB1bGK24oo9jERDrnJjubhRXTjJmvmcYTijAmUrDbc",
  "key2": "5qgnCn12LxaFNQ6xkZ9Cb6SZNfjztheiLUTA5owMe4RHpthjbSNFhJ33uFbrcMh6Jsftzh4eBNA4tEkSf8w9quKa",
  "key3": "3wJf4dxTx9sNwPxCDrtBfSTcHK5Sh7VPbSLDdGu6b8uaLEXoVsZJhGFdCpof1J8EGa9aekUQ3UEYyZAowirEiDr5",
  "key4": "36WcTGhHy8scB1tM8piFJ4SCEVU2XWpv66ketey1tUJkgmjjpX8gCTs62mCDnXn4TMXCfrKEPBUw9jJWLMKVEitF",
  "key5": "yrd3jDkR3dH4TGCdqAL1kAWZuGdihqJy4JztdHx4edwDsiVUu1uCyxRbFtj6qeDGWtUUQVTSV5qPFuqFpcYhRmz",
  "key6": "fcfR2XM6KDzhwXpDnFZ4MrP7hSTZd18YsnBNAkJA54NDJ6L8CWnHgXFkmprBG1FHTKeqwRL4xZ61JiUfe1xdVHz",
  "key7": "2jn5QsYvbKdvRua6CaxeruzGSea7psHsED4U6byjR1tf5zMoJpeWShrJuodrmyQi1wkiD9y2hmrotpi4JYhL7fq9",
  "key8": "25BC1HGLkjsEuFKaiZJ71KZEjqEx3d7SA8DE82syQYBDTavHtaCX9Mh3QQvKmXoz2A8ScQxZZK4ZayQa5DEKX4HF",
  "key9": "4zbrpPs6e7rHWZo8TqkmjimWG2dnLWVNhoW28JYRgAiUZhGhgh418DnxEYE5s1j52NGcYoUzk7NgDt4xwHzDcPpP",
  "key10": "5bS5xbS8NdagvSLuTG9MDXuhn7R4NGZgDsDwcxB61KqWcGXUdLRpDmj7MkwfdpFE4y6zfZ6URnaGbxFfTaCcEFva",
  "key11": "255oLKCVxX8sQYtgiLvLULpHwQNRTv2dzVt6uNZuFsJ4wzYPPYq4r9ety4N1bHf3TAdU18Ydt6b3Pfr3vd2bhk2e",
  "key12": "Sdtiky7Pumt1KB3MaMQTjn1FhPECrv9zvdTyHjiyKeiaTkmNS2jkC8p8DMvwrPQ9t5HCwdN2d1ueEK8bZHdbfrp",
  "key13": "5vRFMiPYouVAoDDDrDSHYsWfCdYnSKwMdjHY9n2Y22TWyJzsf7qGGvaSkjQ5s6DvuJDbgxt1i8Hs7XgZZZMQEczm",
  "key14": "3JhYzbMvEqhBxQzptfoo663oZ2DfuYedcU5KhMFGfYZjoEPDkuTK79pBMhnDTogkLsSnyJiTr7xbdms9Vayo1U8G",
  "key15": "61uPdwXBiA2ezE7XBq5wvgWepNV2u7PHT66sCJG8WHjKKqiEPVjnjoXhbDAeLtppqzSBcrxQVwHfEC8CaGFmSC51",
  "key16": "42ZefcsjYDDtxR5CgaoyYCm4qLP5k3afLVQZRos5bi6arqfHK8Wodr5bqbcFZWgpuo92h2AneevEwUtSAwti31JY",
  "key17": "5kmrE5dWwKnCVQ7ef3x7gdPSaW9h1k2VM3zYERLpM4VKxE8wxB5HbX8Xo2EafhQiNCFzdBpvBeH4EiVcUs4P6kEQ",
  "key18": "2k6vgLNa1bFsGjX6H4m3dgubzs7BYi4i1BcnBzNtKuMKfYXZcWrBMqhddTgeTkpVNZmPmD9Bxta2J1mVuoRgtPAn",
  "key19": "Ug5CEbWQcfFPoK2FbfLgMoHZbCfNPA2NwATQT94jfiGNWeEAaixuJDonH7k9H24DLEmsqTzMv1kJW9QSPY9Ukku",
  "key20": "3MbuRzgr9LvfQjf69vvXm4P6pPDbvjwfjgXtP1YC6WrDm2WkpfujxczttNrQkoJFBjE7vouaA3LZAHdKgt6mfLC6",
  "key21": "5JjiVbTwU7k7DG4QALQkaQo5V9oHmSDPvRy3LHAiL2y8b6kqYH8VzrW8nNSdYKBtKVrjnG8LvneHuHE6qP7ipV9o",
  "key22": "31bMgZdPWTJMQszcjcKwHX18TauZYaNhnorkmv2F9rmqM2t7bXb8MnxV7vbyknmjVEDdLbEhHCyhV1d4j49bDsur",
  "key23": "298kPvhC2SiGjchhkUkM3bHoPMxTn1owY1tinP99fqEtmk6wUWnv9ch6hecTF31XRy4vwWMmw7TMCog5FecWi1Nh",
  "key24": "3s92WNWofney1CjGwk5itjkhvy5yBGWoWgJZuFs8kpw8wGeDUkhDSx4CFqt5RvwaWnWB9SkCemBcpjcVYg6WdAmA",
  "key25": "5rqW6uAFBrovUvU7tCRcaQsrkUSb2CWrhqxRmRXjGfkxz2FGftyLtDK9njDrdyfwa4nyAAF53Cwf2iFGpmSZGDh9",
  "key26": "5ZaJ1XqQk258oQug9nNAXTE11UzutFBF9ofrBJRjvSzHk8rBM5YeSvjJn9NrKAm77iPieg3cjcoPF1Cm97tXXJcv",
  "key27": "31iwJSyNQ5WVPWNNzvxLHFdu3MV4bGpkkfSDow7QTeWxtwARrY3uK4WahZSuGvhiB2iW9WHGXYPHygX2vDTLyjJt",
  "key28": "PCt2mVV3c8LQwsrQAYz1UwRfBWFwkfedSJkXLmpHXKyw6NX4BYL12cgdTsHQy88jiQJDej9iYvAdRrMmQYrmHSa",
  "key29": "2W5m3z8wSTMGiEAPB3Z4cqbEDkfkGVHKAj8hz56yy7LiMg7eY4LDyDdzpDLd6EGsU1Dzihx9pd61MPJ34aQgokHk",
  "key30": "YvUxB886iZWn64qFW27UfjccTKUVGTM7oTeh8roiN1xVfmY9ukhG64jnfDLo3VyA9ZwE568BRCADeY7NY3RXwU7",
  "key31": "53Jutvu3V7DFSEdZPMKiVirZ9rtgv7cmsArnECpnvcdRQomHgj1ju7b4k4J6fKdgm5iaMk6Pq4odvXJHGdxoyATK",
  "key32": "4fCwu71Tnaq94UtruQwD7ez1R1ZbC4Hm6fUVaXnJi2e3bd4pU76kJVjC9F5xHNA7UPagX7DZ1GAb9ycuj7pF9s2K",
  "key33": "36KD4HdaMZsy6MQUpzHCM39bKvMNZiUDuAfp3uNAo1JxrHQhVw3QZdorKC4qPxMz83jDwg8W3We46b7SYPSKqWk6",
  "key34": "5iswhtJeGcKLrEwah94THToCnqQyvQVsPitTdzRRA8jPju8T3f62GHAhxHrvCc3PREr3k8seWDkzrxKeZz7J1a4A",
  "key35": "4KZQFZAEqFfSHzoaxoBY2Y9w1nfgg7pV154peW64g9hwTUJHZ3kbTc1vMBXhVK2XqFUFNPM2BWncWjMCUNdWB97c",
  "key36": "2GSWFfK2yP2CF5yVXcePijXnQE76HhqN9LN6PDRGzUvaD8v7q78Yfpfw4zUbi3QUAjX8Vr6bNrrV3ZCjqeuvT8br"
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
