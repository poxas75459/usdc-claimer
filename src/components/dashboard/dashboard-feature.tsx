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
    "23EGz2xpnaAWRFsqwSUbdrLYoCRscgj3sab9knuKxiXppG2NPzCrH8q2phRGsrqNPLfdSyoiMDVxRKLnUMNaRaBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEbnzST7yQSVRVMhcRPMvLe7xhb1atE8dRzMaNxKrnRzbQ7S35A7QAt3Mc6KkTGsuCq5bvyMadEpCppdAveh6U1",
  "key1": "33mV86u1C4U8WGdQ1717fBikWNJAR6vHAgMc2vbPfAaRKj7RTTchFB56NGyxYyA8wpwhSQuFD2mbsmRscWfD5mg3",
  "key2": "Tp4aM2reiK8doQyHAXpFR9FbgPuL3SC1qiXDyREMLSN3hH2HejNPQzs2fVFyDWQFyxuiHHmAUYo4nxMGryT3c1p",
  "key3": "4RDRzb5AKRvV2RHEp1T95ZnSTiFit7G8tiYdaDfCCyBEJ7imsLuGKX5E1yqLgp4emVo2wip5qhWjh1nvwqsAGNV8",
  "key4": "omNRddHxmwALRqN5ozPuW8JznuDthY1SWjiysbFBEre8ed8YUGxN3uL94RBaMMJFDeqCkzjLZ2YrXbQ68T4EjPs",
  "key5": "3C1hA2FuAb4Y2qBZzc62gR4odgTv9JKMWHbpV1qpGdrSMWcMkFNCkS4Vr4wQhZuj7tbXzAFdFMQhDoAcbXwuRk7y",
  "key6": "39Wvq7kDZJK7HZ29ea7Jcmw786cVYvvdHQ5ENRPLwx665jXWnof8KXs2okhb9p5b9HXyQcvudcHSLDeeE456FXdr",
  "key7": "2JjKUuQ7ygYnDQxfAfu9YTWq59nxHrRGtwZzm1SaV1cYzKomxFZbppFEThee2A4owMriz4eVRhTPBmFv8aiu8qvP",
  "key8": "Q7nD5kGt3mLGkU7spvdDw7d66hVaoRVaEEa4t4gZKLNUV2eZEP7DqpD5yFDXEFBDP2at4y9MVHEoiSkYdXDoEMC",
  "key9": "3iK3uygD6ec1jDZ34Cq7KsTmX8J2ZstNAVq59LgaE5LWCg5tnkwC8uvmYuDwTnTDsKPc2ST2C7guuDu52EZf6fXW",
  "key10": "2tHThAuFdMWYpMqH4xoPuAP8pMXJ9VNcucZm37xXAfbrEePYZkNACLVjkz3dJ1SQWPizSStfDoeAB2dmpjhimZTs",
  "key11": "4saJG8YAQ1jgK3d6hV1UTmrADwXSuYxmvMLAawA5avURP5AhXea95Cu9WKA1g74DcypyemQDc12Y9JXVmMxCDdxu",
  "key12": "5LKox7jnKjq1Go1rHXjL8DkeHEw4MBPko8awWcUr5AR1dbaFb5jA1dHoi4vq9ZQxZEJB6FNKrX4WmTCuBjzxeh7X",
  "key13": "24qRcyjiGnKLPLuUHna4tt5bAQssPGmfCrrQN73YMY4ioGbw6uRLwqS8dzmHD521idbMdTunMRG89Yv7Mc4NHkJp",
  "key14": "33kYK5j5mDMEkPtMRQYAikjjnARCYtQH9G9BJEfxUr3uVbCureprztLmHFXQ84hQ4M9n6cvJqMUf28z4meHbVCdS",
  "key15": "5f135D1Ct46MSDq7CHkL7Jb5VscxgiLgHP3Gq2Fni1fNkZ4FMLh9CznNei4q19JssP1Z7E7EZsJxmikXHZi58AYJ",
  "key16": "n1hWEt5m6ttZnMnmBnqTKnjZHS2oUyPX5ihtLo2GNE6dToaie7heXAUd5CyWVTJj8vK6d73Qbod937wznuwKiSU",
  "key17": "3z5a18mBfx3J96bPsWGWBLVuGaUpK1y7Q2dz1rprCk9TUShiAtcZvHD5HssRZzECsDMZzNZQbWqHwcy3Mbwe18Ti",
  "key18": "3yK2kYzLrUsJ4nhmqUJutEqUUnHYckyyH2wbKCECifB2xuDJWhXE86f9FtDi6Zm3RE6SDGrriwXYUneEudv8yHef",
  "key19": "QEyNYUjNcVx7BThQioKcphF62kEP8saMJVYkzZHTq36TTz7qnNf3sadiXRHaPCtae9hXkxtnnWqSt6rJCVuyZFs",
  "key20": "4yVYBcMG9HcE8fZX56KcmHg6TuyBmvJibegb5NaYf93ceXdApXYWpjU358PzTecf8zdV2Vfj8zTHMU5KbU7JUKsB",
  "key21": "3CuqZpz4tB2nEnpHDs8EQbqcT7mz7JG8QTTYFNxHecQWskQMsFEZbzmvmfsUGqo4MSNvgJhaw7FY9mhtuvqCRfkm",
  "key22": "3qD1CwLBANiAkr2Sb3M1icBh6WqGCx9wZLwFPUjyNHTFjx9aaSRFP1KrsaGvurthgpgothEsKRFp1ehmcW2Y1pPg",
  "key23": "4eWXqLNYtYzUvb6LYKf7j6AD7Ng6BgsjNNprDnVwQVLzhnphuf1xgrLPwbboxXE9JqKeUHS1eBxT9XAjwRR7PDYy",
  "key24": "4e1scqgDGfs9YaZ71X7PjDohCTXNKVSRedPSuEz68L2QfMBmNDVnogRePq1PWaCJCKNMYZZsWrntxvwtdf7igmdR",
  "key25": "2VSXoxMBJhF6MuTTcjohd7kpAYfmXT3TH9XF1Pfe1Wc9XCtC5AMLb2WFapnk9PKEjUGcSKuxYQpTgPGQohJiAGeU",
  "key26": "3rbLYbzxkMDj7LZDhsf9RAyA4HZZN5JKrH7EiaHHhZcer2JVg5z4pxhjGLzBr2g8quqYeAKhLBuuhk3CGUdPYEJ2",
  "key27": "4vj8JzRWNgiUppdDMsy4Gk5fieiGaorQKyzKyHgxoyw6XwVJ837btU8W1JoqcmXSQpVJDkxpYuqTsG6HU91rFCug",
  "key28": "4MTbPthu3QsDTwodXCsZcuT3ZrJF2wMWEbfT9vDU9YhzrE1YHaiNogHpuzhTJfmN74cjJAZaLaZHGLUHSxLs77ST",
  "key29": "128C6NJqWYCNwbMzs38kd2dPZbLJtb5peyPx3d4JryMwWTkzZJ2LfeS8iKPPSdZbra49eUUTBJbD4ZMhHMu58fUz",
  "key30": "444xY7yUJMN9VENSF6nER69yojrzFPJ9TibebsfzWNi6CKaDvDS5SMEZdMYE1w6JX99pJsqrAgDsUVD8FqkSRkzZ"
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
