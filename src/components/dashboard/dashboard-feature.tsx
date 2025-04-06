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
    "3WvABpf9hFAuYSrB9dRZG5sXPHufEqoVu4JduY3RcAeU3XEBgMujVpEEhFK4uaq5K58MsoLAVReRWTRCJdJgREU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCMytQzoLr3wPg8oNWwRXAMmvQcruDNbw6dTLWTfJdFY3zYxQxd7YwmYxanbusRn2K8GHfwUzPmCXUTUftd1ZnA",
  "key1": "42MsPQyDmKU8Di8uhhHVefuweCdkBCEunp75MzXG8x5EtjZ4ucvGaeHMrCnfJE5Nf74wdTf1Z9GkQHHmXu8qAJoA",
  "key2": "R9u121zLf6pDRXN5EzKG5Jr86KY2KFFfMpbDWYV6KSJYAjAQGFhQvoUoCJzJttbtJXPcrCE4ttySb7tKDGAE1rq",
  "key3": "2nNpPPvXzRUFZvJVdD4ZSXQeDrgB8zkjnvSCwRapsw7P3fo8KT8VdfYuMjH8NmHDmHoQDaRyXH96T9jbHzQnYujt",
  "key4": "32mtnco2RAFqKEf1VPguyiKpwNBhbhDzhEEEH1Kh9ESwA7VbsEU1rDTfo5kYTgtc5aFoSChsy7YLizZQiVAmFeVe",
  "key5": "2hQhziqfxMusGqfkqRw6F7MqVRfyBJnE3m1qvJPQF1T2dAvL8wSLncyjpKwZdfFWHhveD83tb7ibKRH3VxfxejSQ",
  "key6": "CYVG3zXAuwjGs2ZTujYyfLAVt36QRiBMQL8uTTDzQYvczaHzujV6yXaD9CZARtXjSE1Dq3azvriPRzbUxcDy4ny",
  "key7": "4Asa7hQHgeCRt7h2cj3X3MeJ4LKepVDdeSSMh6fsY3edAs9kdHfadtiQ3N571YLeYjRagi9yeAaTDurYHQtbccLh",
  "key8": "5tVfaUzcvPSgAvPpwCvA6euudq4R61yAQ2qWnmM2sFjSxqQJNHZ1jdkvejMFgdYb4q24pG3jgvQ5MBBmEdKCbtxP",
  "key9": "5ga6D5ciNVN7by6q4BBfRXbV92cmzRT9d5xHGK2ACJ2uZMUbRiuBhDgDmJfyZ5wtaYQioGAfBhXreVoHiVE2pZdy",
  "key10": "5XqxUiiHC5MRMoXpanVFBbcxqFgVcT7jSE3B1fCcXwGei6PtRXkAe77DwA6LiCr4eu4rPwK26p3cbitqEKSEB5Ku",
  "key11": "3ztHkpaEdAT6a29TUq9t626i11tPxreR2JRAcmPj6mnQmAXf6M1n7id628KG4E82ZSMHX5bJPN41m1SpFGr2qAZe",
  "key12": "aDpz86wMmDXoomd9J98cCEYCfiEXMuBKi85SPCS42ayo1vacaZVQZLz1nEZxPudVfB99bcu2SMTQjR8heUERT3H",
  "key13": "mTQm3xB3WmX234kxhazeg4JQ7F1B2pb2AxZQHfhrWfVZrDiD32jDtdm3p8W4VPSiQwvooqGm8biCiz23d9XDEf1",
  "key14": "5cGAv9HRGvdvV3BwQAcHK31ni3BfpPTqc7AyKYpcc1edDwNNo2AnzvH2XgtTu974Xi8z82HyQ2ZbWFUQUZnKZMfq",
  "key15": "32vruAcoGP7BM6CFHRgZn6i7yu6Jp3e9Sb7RbmUd2Joqq2LARPCLCTJjizd2sRqhRYyNBu1aTMe1oYSprfpEX2Kr",
  "key16": "4ieU2TFtgTLEh9kQrTSvxvSgYqeZu3JZeioQ7Wy9uUMLC4bqNXuedpcDyLyFsaM6GkeUWqrzMsnh84XSv6pn3aov",
  "key17": "35fne56f5qFveJd25meRw8k5FzZp5aWi9nvYjqTrAH5UDDQRAxVBsCMu2ZeDbcRzPbxRYoTBeU7dMeH21pTVh5v5",
  "key18": "5TCUCdN4S9FzZwo5VsPCESPyxUDFLyCf2bW2HWbcqqPB4UMBqqun4jTdSvmRcyLDmd6wn8NCYR5NHcSJShHFGQzj",
  "key19": "4tEeMpr9bAAYeYwRdoqanQmP8CMpG1o3139zcFFmvwsXiQLndr9kPPrdKC69S7zNgTFRs9SVkuNBXDDdrwg6xLwb",
  "key20": "5u1Qi9CKyYAxtnYNJL5tK9K7YKMdFcX9ZUMfMRpyDdtuFXAogF25L22kbdiiF4nDPiKKukEWs7qJS6xHZ4WYS8WJ",
  "key21": "3jsu6PUfEQ3eeiLFy7XdvwNULXceaeGxSRpFFvYzh2jXmgSjtLwg3btfJEdrfuVydnwXomQeXNdggSeFRuWEVjtr",
  "key22": "37PkoYbgCfcwmKNhVdz34d4YUGaUNrGPSz6uoRc9xRWchZpgYfkP4SmPvzW3dbxe366Y8GrdFgGQR95F7T9FpLiC",
  "key23": "5D3ceoQJnZiLZEdSBoXEbaC4vz5qWtzdTcMWQANivrW6hqhjaPZn7KAoX2X1dpvBPtfUFrER2Ww39U2czeUw3PHT",
  "key24": "65osU9mMQr3e1Nir7PZueBZjLo3bD2s5rgRbowphQNRCzqSJHusFDYe35mzrSR1mN6EnFim1gXGzYy5wVSgc8Zny",
  "key25": "3MKewjWt9q27r4q6EFNrvVrGqqkWWybdEbN6zGRidCkk9Lm4LRTVwHR9ozt1mmod5WNCQRPCPWYxtPGfksJPyJsV",
  "key26": "31C11i8CastM6std73HzgzJxKwi3eargpHkfmsbQSWbwoBvXKrcEyYpJNjSQHz2LXhNtmkfHFjjdTcGaburdw1De",
  "key27": "yTyfjtkbqNsfwfRtwxrz1S2DScZGrMrGTFmWMnKn2SnVxxogChPF7pcV6fvMPZKWxE4pGaL7s1924C1yLw9pGVP",
  "key28": "4cC6MkSnm65BWgZkpkbEjCtxhvwPuJUEvxq5BHeEr4fmPzozTQhWc7uwWuiqTwqJfvddver8hkDWhxF6eQYFEf4a",
  "key29": "2NE9NKSi7qMF4VGLPu6ribATZhV2Eev5AcqmbHi5BseYxaMhJwbrDein697PJZC5e3WpUQrL3N1Dpf4FvbJ74yZS",
  "key30": "2fYPcWabjHk5vzfDX1i4UTesibvy3dMvzJUoERfJxgpWkaRuzMfo3oRqNj6BEQZMPxG8m7LtR9g1oGN1jeZQryRp",
  "key31": "2re7timZ363nf2ad58pRiiR4cHJFhXjrVrzERCSdqmcY18tVyz6d4D4AE9zx9SqufaQZstqG7hpVyXvHtncRPBhm"
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
