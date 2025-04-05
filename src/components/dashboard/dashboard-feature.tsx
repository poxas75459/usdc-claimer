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
    "3YLBpBAiTDRuRb3kXE4xvPQdTz1gzZawTQv7uuZicpdtVHF7zHMWySk1Nx6FDxHGVXSWHsDnCTS6UQ2Xutbw37dY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z7mzoDJuGWvQ5hP9MCQpx3oWiogiGBE8SQkE3itqVPw2CWyi1R3XSXNRQDBoEHR2dwpfjrmUochYXVkepLfoFQj",
  "key1": "44bjoV6KyP7GzDjGEawgX7ZZMRzTLAV5rWuC1A6RpjcMAZnJBisEVGt2yJivoeVseXPKQybB5Qo1GUYuNUcQxENX",
  "key2": "mZSX5SLuziKiuEsGc6bc36sdAutCRWgjiFYEhcUPJjKGXMP67L9V7sFptMDpKxCCDhyG3YNfF2Be1mcK1kT7Hp9",
  "key3": "NvdpSh1Bb214pow4ahJNhmSQNkUhmWD3mGyX6aVxn5s3hsRZzxLpbucHkN4vH7nFtTrNXJ5tyk761FKX85qSWxC",
  "key4": "4JacQouSUydCiGqbEAU5QrRU6oyyH4xNnxTbPGXQUMDYAu81BQKEfuYBw9HfNSUzYoKFHpgEuvWDxoSADyCn54MB",
  "key5": "59LS115pSfUR1jwx2PWm6Xf8nkzfu6AqU89T8hBLxhzacVzXMaCX1wg7szBvo5TGZDaTZKWu57PR9uzDr86A5R4h",
  "key6": "22Ljr8dsP8GUB3R9yTeeATY43gY4wsT5F74AXieL3omiXoLiAaiczNQ4PGAY6NqEmCR6JyQGLJt2hK2k61EEaApZ",
  "key7": "2XBZMQ1dhYRDvfToeXJNJ4VPvMi2QuovjE1zhqCDo9cYp6HepV6orcX6uEzo7mM3Sriiw6ZUdXDAAcLhdhPfDRxy",
  "key8": "5v6dnRLodLhnbvoT7Pb6CQNXeRuAEtsAstaZPJo8vGVwjzXdN6wuwWgQrxZLLKWpH1xcknQeyBn8q8Fgdg3NXdht",
  "key9": "3Yb8fvd74cykfnrBYyAGvCBMWNCJhWFPn8A9MhmHr3ExgDshq2zrWq47pWURFL6wny8vi8erQxEhbBGuJ7sf4j6L",
  "key10": "2MCSM9mpNthnrLPYGQa7j4iacBtp4JbBPHaTgLD6ZuJu8JT77zLMWKJisfQwX8Wqb4Fbq25ayHezb8HWGam3n6tt",
  "key11": "3DxBL1H6JmpKzZhXeYubgpHTRC8JAKgHf8PTUtRSoYiG4KiaCWNR6GEAm6R3k73ZxE587srr2koQZ8qgXWPUC2XF",
  "key12": "5WtEWBAYCSrN4QVEWZW1bceSJkUm12isPgfQFAAQuhLkRBeAEB1nAToEfbaMjY8wPNzWjRfWQLW1xqKd6T9vtxB6",
  "key13": "4cGBD763hLcpMpKnV3b7LL3wHKJzM1fZQpHJVjpF2QAbKkuTpQoAvbRfuwtBJfbYHcmVoZd1Rvag9ewdaopQFpiN",
  "key14": "3VfS6sSx4718i77pg9GEMWGugxH7wLeoyy9KxTKgqJ5smRgmoohGQYnC3wzaZkzikvdChqfgciL7rdVYRrZbTcj8",
  "key15": "Yxvxbfx4QjpoVtB7DjozmdmwgvwJCivRhLCHeepuHwpiqQWWC2rCES6SDvDrQobHiv42dmZB8ZAkj5zwUMZjkE9",
  "key16": "2k4aq8vm8y1AT68HAdvVyCYwmr8vwoLWsAmTLeVGWge4MKdtaLi37w9mCukGwJMomFR4uFLtX6cF2q7SRrgn9zb7",
  "key17": "28N3hpZLFE4imGEEQxgsvb27svMuYiZReejvfdi8WSfSqntVBzJH92Wp5d31zweuWfZkeJvSCiw7Y6RtYEkNsqzF",
  "key18": "2N1MLDfz36EtN2m6GPyi1ncdY88UpRMTDQGTwJpGaR2kdqGodJqC2evKHpxBWtvPmZrorLXBVtjmUuEsf8fEy66X",
  "key19": "25gj1Wq8Hwn1C1gnAzSbh93A5t1aHo6iFMveKFsHMJQZQVZVddE5xEVgYseTXPvNWMGukdhJkBQLPDJ2pAVgGxTE",
  "key20": "5bfKd3c2iCHrYEzXJQby8pUixaneypSuX2B5J3ckDKYKop14Hr7rqyUYwUismZCmGV4BX8RMqedrvtQUPgwjgLYv",
  "key21": "4cNpiXYx3AYYhoCvMDwc49VV6PfScUHTu5UBhEaJqH5ioW2Y6NaGCShHFZqwdW9n3mraeUnHcjAy2GixvTQJA6Es",
  "key22": "4cPJ4TxExe2VLREZuckn1paACveKAp5ZSabnzxhCue995YDmt6rJRbJqHciY3uNtdfnzTWon9YRd61WgruArT9bN",
  "key23": "CffcQnfyBMZtLf8wPTvW6c6SbiRwspDmrc4FVN9f9oVrrznrH51w9bfLMZFiiYKBcNGUjD7GMjo8FcE6W5kTFk3",
  "key24": "3uoWY7gSFeJN6xY7skhTkW3pckNsQgARfsnXKkyRiDSBHgLp55s3DwMpCAFKFvukpBcAJCoRAyiiqSrAv9N2Dwwf",
  "key25": "2VGBBJwd97n4YsoGdRYD6125fpWQtvLZ7q7kMmXzTL7AYft6ReRZZMmpu6LwLTsYkihwfTsRePuL3Q5mLLh1re6e",
  "key26": "Quq5YXCQqo76ZfRfPM22RtD4nwyoYKttU3yqsDpoENhsg4ngNUuvdj5i5RJDQu9LX14B39juJkNfWMwP3xwmxjr",
  "key27": "2VZuYCoLuB4r8xJLGWPCUCVEMD73n4GNypTKSHH7ancMRhvPSD1c6o6E8jQrACT5nZAkdzTXBWBFVgVkY9D4bZn4",
  "key28": "fwyakZEjzxwGmzKcTh1YNgGfT6owPRB814GYji99Jx6XmpGnmU28c26APixJpwssEU3EcEP1bM3kPZhRbHQRE8z",
  "key29": "3q6a41qL7ezpXKqrA2DkEibhBFTaz2aRwfPc3DLQDQ2giZuLgJYTc55qtx1hG5Us5MP1vpdyPNfVJL2jR3MSrZTF",
  "key30": "2xRigePVFzAuhUNqEWUaE5ymjQEpzxUo6iSHLa5YHqHfudNp4aU8tuA8qV8cgMmGRmHumRuQdqruiTF4tRFUu8wD",
  "key31": "5N62usZrZQ8a6Haeq5DVkm8pDipAHw7YHZrPfuS3hWZaH7D7VdAhSSevDtikkh8UQ7w3WqoArfNRiDBBsM2ppXs7",
  "key32": "5AS8rBvmMar9nw8KaFdoAVxZcnF7VdbnfxCqNY9sqBwMz65vTj67RBaVabA6dEQC1g8hgKYoB8kQNPhutMZZahT4"
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
