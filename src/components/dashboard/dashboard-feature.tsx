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
    "4ewHKtxPJJXtvZs9m7wUTBtkQta8NvC8eB5FnQ2UBs34umgxHAZVrnmrFjfKxx9zpJYLAjxunj15jEbxU9ngqWJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6PyxFFbTxkbSW13xFKeTstpizbKZE3o8UN1thSXgXRXwJnwutxLh9cuEXXj5LGYhpE7jxi1ZiM1CrpcJ2FsvJy",
  "key1": "jwavA8LdQ7nw2nUCxaHNAaCxpYdsKZJEsevhZ7m6jU572t3SoecDDMSaaCkjZ81C1iWqvRKYEvFBSWPgPMmvrYh",
  "key2": "3cQtxgebcRXYDngzkmX2kskT1f9GNXGHWAZaKcyPWdTTw46vEycA8quzSvKxH1QzSLomEPQG1C3W4kk86PuSwEtJ",
  "key3": "3ih3pTQ8VYCqJ1HYCeKhuPYAc7vrAbx21SjHJiCf83QWWEQS16T989Biu9CUQzkHbiXKj39h3aVqKLmRGps4oNcX",
  "key4": "62y5GvX3rPiX7LyRcfY1KD1N37XRUz7XCKAsDgpdzoKFPjY5fVocgqxT2VrLYkJsxbJsR4eLQmcyCLeXNecYhdTB",
  "key5": "5GK8btmGtutEyqwCTzfiymmKFQDrWab2gr463ofxpcZefeTLRUbKMQsmmc2hm5Razw8LZCt2B8GiT51i66Z51GME",
  "key6": "3jDaBc1YskEjgwFLMaykzHaGYcdim6ZvxtTFv4pqMjjSXRw7PkhCkjiH3J54oqivDCBdzdWXL8upPf56Zz5uiDHK",
  "key7": "3R3gEc1sY8B7Q6wRG6a8mSZxe4Akhh1s9ZzgtyY5yNkgCA7wdqMb61dTfwxFbVJHSvyciZTgPion6bfmrE6sBK2E",
  "key8": "2HQrTdxee8GY4PXekzEN7QGqZTVeYBTkbZpJEHdjrh9QPw9CVsP746fW3zYV5bj64MAUoa9fbPWRinmYi1mPqydh",
  "key9": "5yhXZBQQ4c98Av4L5SfotZnkrVgZ1XxoCxxzcpLonxS26w3MTSmdtwUmEM7QKa3R8YHkxaWaUfQMcFgStsefCJTg",
  "key10": "2FEFdDttNH8753LHvVpGxQUm1foVHAgUPb4THkiYamC1pAUyJPhcMKUSZjV9JqrMCsgqW2AbzxATdomuRH8ECnc",
  "key11": "2kEcvCj1Ezs34RpSDjEuvVfxJrxahpbUwYMCGR2JadgQJhno1z9NRJSxwL6T4FDE9dbHtBzTmqzwb7oDXvMMLFbd",
  "key12": "ahkzffL5G66BeTPp7cFT1b1gmmC24HVRVwFeNmCJM591m2thGVnWxCb4PPoL3fG5YZufKNrXBF5hH2bnzyJYVKZ",
  "key13": "58hVyaax4zVeoLEMntYcohJ73A4Kd5YReD4eSa5f5976DwVPDcv7xxcMhCvimLtLzvzWVhjVfjYEQ1VSjjUYvvXW",
  "key14": "4PC8ge7YAscd4kDkujbBbngLZqAJqqVMofQr2onPL3ka2NSemSWK5gDhBY2WPNaMdXcpU9vWgzufFdRdC68SJT3o",
  "key15": "3xCK5B9HhXQQAfdwbeffkKBxv5v79VY9sj5vj52fozWYV2KopWMUf58nkpMTHaDpcUJ9EfBkpbXd7hTjto4SZNiZ",
  "key16": "XMDvh5PQaXkcYMwG3ptzQgU4nNeWt4QQYrjzczFoNj7AFjyc2DEyoRUTMtjLhVYnSz1h6ytwqZWGEE2YsqACKfD",
  "key17": "kZzTsewPAXPGENNfghZxGHAKwsH2yzAHBh8pX28dcixqud3SqD31zQxfcAarDTFptEpA3dtK9Xo1H7zQitXCjVj",
  "key18": "SCgoKQg3QaNSu1rk7acdazHfA7gD4eDya9E3tJLMiFwNDUy7RyNVWyM8QSgWBeXc2YcJVE4qpgprxzEycLkgwsc",
  "key19": "XGHQpWDpTs9wyw57N7aiRZeqUQWcKquVVVqf9v6HK5T9cJGvCBu7Du69TrPm4jjqqr7AfKQ9PPcXLwbLm3WCrv4",
  "key20": "4pzD34Sg57SDyZ7UKqQ94m7U2YxqrELpJxd11avChhvGHCYvPHZ1yYngrWeWGkeR7xgTFD2sExMeF5SAJqp2KUoJ",
  "key21": "4B1q9s6cZNHPX4k4opDYPiG9vUk4dkdPmAhhb3cfg6A9XNm7mS2xXVPULwBVKJ4DUVuy1AXkXQNsP9Rp6X3H1dUt",
  "key22": "JDTfpLkksx9qXFvuEXdjwPYUa4jvKNLnX76VsuacAJTRnyFtUNrrMLjmv2EQExhmUgCi2LUpwZbpbiiBuShZGbC",
  "key23": "4ML4ngNjBGz64z2Vp2ERteecHTJgxwd5vd7zWKm59KSPjJWqxgKSLk9VqPyeHmDgfnJexMgV8SVbdk6vegPmgQJQ",
  "key24": "bpQHwqxWR2JYad1mHGpXdWmZK1mmjhy4NzquGxR2Df2w1tWam4UZijL8YKeCtXK6RVkwEVp5WCSYRgeB2PUdD1A",
  "key25": "5nDMqvvRo3NAZAmxXqV4jaymxMDGdBFPVSSRvXT3UsrTFyyi2sorEmuB6zPMbb8NJpoGYAJVVvUy7Exnxvgk2Kbc",
  "key26": "2RXM7TC1LMYad4qWLmuwLK7A2fibebhFhNgn3dz3rQN3WEQiSheRSqpLnaBXHX4xNbTZVn46vca35p35J1uQtywN",
  "key27": "3eYmwSWVG7a2LVorU1tfVtvNQHiaLJF4uRVaSaFQ8rLubdGQg95CZ4TV7Lg9aWSLZj3TRvTy863GjfknG1uEB2cZ",
  "key28": "4ewudTXdFz1hm6Fp3rL8KjrsYeauitNxyyqUqYEU3eYHA7K4KRxfFhuG4cADYwgoNkoRdqRYig2E6so8kDqG69N1",
  "key29": "2oCgDxWmDjU3LLa2rdXJMXBe6jnyfRFPR4JSNWm85dZnDXgFCL7tBX3zHRpDkNmqdUNii53F1dQcxh8faxoDBqvD",
  "key30": "UKh6adC6u3LzMYyJQeT1yvDTgbsGM4o3fnb4o6hxxUVpXWhH2REECG3KYeJu1DEnFV6CcJqhxHnN9cK9GKimZos",
  "key31": "Kv5f7WD8eoh9j3bNHVURBfWrCn313PVndrHTncH2dYFREAs9gwNMmbaUX8DHLJf2nCRb3NkWhFLQnet7LvDEcRY",
  "key32": "QBTJUxZDrK4YMfvxeYV7zLaHq8rFfVtFQDP5zhBo59MZDez9rS7D8bQkD626UxZwwvPHNLRBJR1qJvbQAwJMt1p",
  "key33": "5uuYAQyzEypE3TZXZuwM71A6puVAi6PBM1YKsuT3s74NGkQfXauM4tqrPAbDnfju1Egts6D7tXMRdUnKDy61LVG7",
  "key34": "5rkyKPamWnB2eKsasyM9R3qposNuLEXrbRgzDWMLK2cZLobKgfwURMUVDS3pcTnJwPVdURgiAKS1gkJvUQuiHi3a",
  "key35": "5oqCTtakuZtUqzDtT1Rjm2gkqCV3PawhqCR6xmANnenYzqMURt4Zv276FwtF7emEg98KSxTN3fdfmNi3PCbLHraZ"
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
