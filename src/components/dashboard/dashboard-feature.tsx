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
    "3qDAPXYWihP3MFvDw197JaynxZr5BU5ugiTz2Vhb3ZBAX2Rrh4Hx7A9gjL1cxBxW8MBqe1i6nadhUAW69KJ48mFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxXJYMw7onbGXTL7v7r6XhZSnmk5rVcZsb5XeW9BHsQk89PDnrkETz1rPLmkXARQXGEiDZRTkYE6iqegBtX1vrV",
  "key1": "4c4CCatEXB7Vi1mF3qsyrg9LGz96iPV86YcEgRnVuUxJi53YMZF4Ptjxw6Dr5fXLkPUesVEh7ty1jNCcGMLzpS3A",
  "key2": "4zQ5NQFUDdrZxQxr1YPmaCSM56evyM2FkwiuDrhmtxkK1sWJfHBtFcvrGJxVXD98SCZ55wYfyzswhaQ5ZJVDwg4n",
  "key3": "27G9jSPzsqLNnTHdFZSgh5pwXkT4X6wftBobogSPa89koL1A6Vr1W86wCDwV2UGBnn178aLMCWtAR8PTu9wX1eaF",
  "key4": "2aDzZF6rYH2LArPECZfhC9hsERpZoy4x5Cpjc19HLVgoszPH1prDmCh9NjB2qNh8MhBBvXR66769qWYUtUiGE8rF",
  "key5": "5kL1Nbkxt8VqqgtAtvk3wioKVToLUtqLYhWwNMLy9FQmmfiw6CNRpQbiLgWrnCXVfd1SucfnfK2Jd8UZ8mz5piQb",
  "key6": "4fB7g2PAqsF3XCKrCaneYNxzKqPGe5aoJ6UQ6UJWKnLm3XMxe48a8QcDFDUKA37wFeS3ZLJuq54DGZkVRwrUDumH",
  "key7": "4G5nUN5NkTa59eWYnRyxtwvJhKYBKRoYMAkAfWv6Ac8aeRC3twX9hv4G4NzD8YVjyyiKzXkTKKZEuAdcTtUaahfj",
  "key8": "5JJgn37W2tCKuY8PdJRaLP1EsWsDWLfNndKeZceCeajELNgg7o6RAe2Bt9CLfWp8bPnSnMsm4gdRCxY4oWivp5hf",
  "key9": "kHUJBnWGeUwctTyzFku6hiJYnaDv2qVE9jhA1PZ6hFz2Npe97pzUgG5FQM25UpZaJy2m93huqcPojreKFuBC7Nx",
  "key10": "21pyFyr1sZ94khQRapgL9wgvbkuS1NBzGisHwjfvqCBUPXJ73YoGbvKCjZfuSnqtnKxnb8BdAvEEzbN36P3Ke66V",
  "key11": "3hpA5A5ZKpRgzMbFhTENErPNXDLdQStYEuR2tR1V921Wv1pY46ZEPQUQqfvdPe2ZtZfxtRNBqhbLGV9kL6ArmJyZ",
  "key12": "4PBS3qhiPa5EchMEHrpmVv5VpYeFs9LdLFrF53bLjTRRxTrRyf3kyzAZW88yMnjtQMYbXoYAYziEAuZ8sAbEfave",
  "key13": "4uMc8R1FGExN8HfCDaba6hjtSeCoKQLqLJGirAmGS77tyFPuVtjbbmFPAt7pH3JWX62Zs1sJTzWinwpVxMuwx7j8",
  "key14": "338T36eARB5SZhVhr6Jh38RGHmYNkodrmUGNakKqe8gr6ftYKXM519G6u6StY1YuXDvQM6ErTpeTBNLGvbizCRXC",
  "key15": "4tWfvHzTinh497VMcarr57jN8TgTZfMaKGuDGtzJaVYkCDWq6ZZa8tB28dFfV6Ri9BpJwHWFWYncrkhBBhuU2xfr",
  "key16": "3wwbUDyjXLxrhpiXeCwJ9uchwKdG3nmhMy1hKdNJCdordo3qv72cb6o6WChYWaXAYCLmyci6Jb4iBjPbUmv3yRdi",
  "key17": "dcGTh42x3UxbB1m4TXUTotAqEs2sZAV7uJE9Sdu39ttT7mzfgCRDxU9wuQub3shv6TTJi9KuQotsG4ziMaAxeo5",
  "key18": "5b6eAWcQNmrDFwcTwgGd8TEuCkSXqN4TcSSUPzLTg7sKtW3yUPHxmgLGwUeN9zJW4KWjkyj66e5YWYhBMhwUwV3Q",
  "key19": "VumAf3cnjZ5hQPMRJF1ucJTorsZ2QnNgoFRoaJdD1tEiK8zGkJg6fB2yxXpZP4cAPUDFopkCxtSe8cSwuLk8z7g",
  "key20": "bB6oJX2jzas5wKx3a6FjKzNmiUnMhaju19FiNvnH8DpqanFRZq8cMp4S49U1ocoDZkvQFEZjwgWtV2aMHtpWvt8",
  "key21": "2P7PM2BoZxstvTZ9EnrGX3QmDnmpSzJ8ehgiBFSZCvJBgR3k6eUBAvhtLcmR4KmcdJXH4wbhWXEZorC2a3oxuAWY",
  "key22": "29nRSsCHNMCxurggpk7GrJUeQXu3GLXfxs6bYNfuBot8SN1hmB2PKcM9iAKxqDA1QEQH37M6ehVC7gAAtTcmEyTP",
  "key23": "4VfKD27PQuNDN5mSeKFGPQrCp5U4EMazo5CPwj23Fi1w4Q1jXGqaPsMZiPDdc8YoLpwRb21ynEeQinrcovQsUe4W",
  "key24": "kZNRrgQ1RCLvFHgKp7sYgBFpbNQGeEqHbZQnPWC4U2BCj7FKFt4o9Ce81T34cfBWcmfTZDohXzaL4Z2h3ZZtjAk",
  "key25": "2TjBNqDTvkH5x2ZeCUzJUrHxhCCm5ofnp1HwHUrCq5SC8LJqh42JeAed18NpnVv4p3Fi3oQjSG7XhUZoxmz6q8vo",
  "key26": "2R126m9kd75N5xvrhX7WHPpYNpWq8qGoqVtrEF983zgGPG6RKpFdCLk4AMgQ3YCLAkg6Cz9nbDdCfzeGpHgp4Z2X",
  "key27": "2R8CDXzcZRT7SftXptvYC2ZPPSMSc9HirxJ7qSD3mRBA7DnXDXYvFrhzXc6S7CF5h6kyYLKxmiJfVi8HvigMkYBr",
  "key28": "3Boev35kMccLPUzkpyrCMDPyvGvVMPXDNiBJxYLchcx1AFdPy73q6TTpgmqEck7GbmQp3Y4PoPSy7KDa1ZMdZNXo",
  "key29": "m9c4EmDpcCUfucVffkNRX6dVwDJEmbc5MEKKFCqhEX7miVzeNiPd2puXYkS1kjTpN4M92k3ErzFeUH55mDyPXYE",
  "key30": "xApdeaRTLHxBzf8AJZmNDm3XbBMpR9Q3EmMLAA7ypgFCY4NhdVtAaiqWYho51B766UJSbzhFSSPemHtU4AFZzQt",
  "key31": "epgHvVy4Xy1iipGH4TW6RnLaSrunQ4ms5TZ5r7kVaJBKo3yFFkd7sctMkvhGrCrDgiEuKnGRRGf6Tcqd7JpyYn9",
  "key32": "9DpaezBKZywVt5s4NoK2vaFX7LW7Phhn1L6HiaxbJNtL2JRv48jYhepNyyc8gNw1Td8jqQpcL8JppvrKQnuYBg7",
  "key33": "4Jg6YzYJo5c1WKaHpg5kqq4pu5Z65bBvAUcKTbf3ZvYkrUvGLXRMawFxywCNnsZ8q2Uh7Z9EgwyzuNDYadJqdok5",
  "key34": "4WC19cHxxur88fCXKHy3K4nhutubD88HFJnVUbd6MdmhYBKkdeFXqihgTHXcR6Mz1fmhet2rbmKV9puUkz8ZYhvj",
  "key35": "2X19TH8FQFEjCKPCeCz1Crz4VZJvcfYjJKJnVzMA9JBgXf2L7QGgzMQfwtuJeb8P6XeDp87PupGxRypv9A9vPHaB",
  "key36": "PfqR1wqWFH9WCE6MLHQar1LDxF28J2L2dFXqFriCBgWgyTfn97eM6jzdiaGZhyCFvBThfjhWDMJe1dDVb5rLQWo",
  "key37": "2DyFtTcmyoyqxyPj3AmikPfHmcWoUKaXyhg2AwLxaEBYnNG387F86ggQo3aKjhAPgFsLSRq6abp71E9h8yycg288",
  "key38": "tKPymgyFcbsmTQexxY9J5ApWUqNhhtygmY6TtHRBPGs97u54hi42gDAPjpE1xYiJGuEryAuyDacKEpEw78qS7AU",
  "key39": "f2ZT2CS35rtg7w6bQwYgeZFaWZWZBQi1yPgj1fyqZk9qrsSAyt3pweMgRbrApeXN7gwrR3YEwScHzAMyaDerJat",
  "key40": "5C7KBD6N5aiAXX78PL3UxQd7Dq1s7R4GkhQw4xxspJyg1J1FBR6oKP9C7xPa8L2ijksFLbBvzHzxbpKoxNZXNJ3Q"
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
