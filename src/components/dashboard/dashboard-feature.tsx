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
    "78NXeLdD7tpCZMk5cyqGyWdQC1tLmBvd8AhG1u1FRh987y1USDaoNo3ah9A2oJqZbU8dB6HQAnkRcAvJkqsYcC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yq8yPSPDhSH2goW5meFphwrbuo5pFamLXuYhMoJK4Ky7tnvDjmHRhLvjgZuFXDkGsnKADHzG4NNuUJfHfpM7ZMj",
  "key1": "5MGrphWJyhujxo8m8F4VtX9VpW17Z2ZJ3piNDmCEjjPc7kZ5JfShRWD5qcYj1JoqenG6zzo9tPGthr2rrdETvfpa",
  "key2": "3uNGzx4kRb6hSQoA1YapFAck8AAxdBihhjATukNzNB9VeQVrwu6awoHFvEqEPvJXbLHKavLJd4XWKDPBDrha8PFZ",
  "key3": "5cewWCQfSZZ4PPJAjkCesGE1Rqis29pFyUQSCKQsVU3Wnar6vMc9gY866DS5F8d15g1RniBwQfgLHDpHxDQQ6BRf",
  "key4": "44YHdD8984qCKVxAdx3nzPPybqK2zMDPGk9uhXuTXc6CgLgugAeV251Yxrcc4kSGAkm4hF5zxLoiYvW87zoWRwEU",
  "key5": "2xawUU1QSstwzMKEh2bPRNa5QiEoi5DrLNTAiH18fjBJhcepPYshy8taXrBSu2ppcPFe9kn6J423i9ex4dSyasSn",
  "key6": "5mddFw4dFFgjzBUFbDtwTEVbfYfxMmy6MHf3ACfZc4FWW7WvABt4jvYkXEkLKkDBY537vB3EwPM9e6uMvsCsf9Nk",
  "key7": "TMNJ3FKvGpdxi889S6uitaK2sc4yjfdSYDMH6XcvRnCnuewDsffYmw5VX2vWdCQfwp1sT1Y74ydnru8CVRQY6kM",
  "key8": "5dwUNpLxt8aFLVfEHGxh3HjYhTci36syVpKUA5bEDBGSShDBvLpkQskLvfe938E548MfVwq4d8N6Cn1qytx3JuJ8",
  "key9": "UpYzcubnPmyAEiGqVB5pHjgK9VRvVqouMPcvs2zXmaRR4enD8N5HALdSGFivH5enLPdPEwm8o6T8snAhAVtX6yR",
  "key10": "43v5SA15CLZ5RsrPxUR27eq1hasiAzM4iK4t6p7TxX7zKrjayS3KkaKfcqqDXfqXCfodDq3HFporUn2hceQFDFro",
  "key11": "dwuUwr8TmXjCkPfdGZ8S7tpvDNJEmgBEdd4GdJ5MPaoYQ39fzMhHSz5o4Qqird39iQKX6Y7tNUt9r59hXABoMcR",
  "key12": "23jnCKZTMMbQJ2MZQNiVaonfWwFfV4XFpgBr1CrbzZWKZCx7n7KyytGTbmH1VaZtX9ndPBt9WyS9tKEuan5ryP89",
  "key13": "61qPwsZhpwWsDPzvKRjLDXkE1U2Xj5njaVkYXhMkaqheA5NmPrxmcW3aJz1pdACWXxAERp238TUgArcfkfUWUMcn",
  "key14": "Z615p6p4H6zp3wMPgswFCB3XCJpVBAi8NW2fCi72FQATQuJTm96BJ2NPa3vF4UfYttnbzDM4H8rFZ2j4zSP6uxN",
  "key15": "3sLGsKieRCU4MC9VtcEnmiwoKZKXg4jBrhYDd1a9ri8M6bnLBHj7j4LU7CkwBywEw358Z9pDuGRgRWz1igsxJfmr",
  "key16": "5WiyPRs79NKgH5ZR85jJzXcsuE1ejCog6YYkKfmPvjLRT4BNwSZjUm916KcAq74vocKGVnm9C6WK469Q6Zjvxzgp",
  "key17": "5g5RUqAbiRxsZ9kCvzEGRtT3RJNH6nAETfAWi9wXZuWx1hqpwfZaHKinBN9BzMqKn1UQydRipCgEujHChZ3YYN3Z",
  "key18": "sczQBukoMFmm1ZLvb5ucrfXcX6rMbbJh2k5irds9PQrRBogCMm6BG8ZRJBsiRaarTbo7PoXhbMV2rw4qRFgv5HR",
  "key19": "3kZ1hVQSuUFBjsteoLbJ9RZC4CBZWPeFFNo3yKNPW3RM7MnqnAktP8JWLzyRRvJ1FCcxPDgAbGzrVv9SiSWip8vj",
  "key20": "2VqPCYA8Yic1Rv6T91LieWMoSmPYjwfG3DyT1eG9GXhRyrVd7wxBuCrHCMpSP9tCbgdVt4SLyKGBBTZEfj3gz8TL",
  "key21": "3kfoXpmZVMSfBrxG6ndakqg9c3BdfeTh8APEibmZVW9dTHX5uDPcVUvn9cmzb7GDyBn6zWaB7JYTfXBgCyNifFEX",
  "key22": "3Uwaiba2iiCTbY7NMoPorptuEkq4DCoESoDUFTGvY9YewBFaV8vB9TnKkvxj63ebLW1nLM6fBvrhsP18XfAoJ41G",
  "key23": "3eEkbUmJ2Vk84uxUAYxKNdyofQa6o2KKA7Dwpbgd4j9yS9iEw7LpCPDvE4UapX1DTBuBwQxHsHkGmrnWC93HebDr",
  "key24": "4KMbX3egZ5WxpfFo8PCTvokovfY1nhNk5qcNpNkdNZ2Q3xCzA971MXzBfFSgHNRdHNuTctzWdTTiYDa394kNc9re",
  "key25": "zkMWYC5mTGzPgaVhJeiSKHt1HwRLyA68V4MxwsNeMigveAnyaY2dBDb9otMLiSF4mxWgKXxut14vWf6zzWRmyfQ",
  "key26": "4dSWigfoG2XzWnMskkHHAXtT9NG7adBjbmNZv7mtvHF33tUjd6m8duXpSjbKk2Gk51D4st7XLgk5TZwjjJnAq98A",
  "key27": "8iNBsSijafZK1uqVECKna5TiQr9bfawPgN28wnfPSbVv5182FYDCqH9sP2GtUT4UFKePmCXCp4oLc9Dz9pRwfZQ",
  "key28": "5kzTdZVAbhgutG6Yim6a5tLGbZ4vS9j6QbWJAUmQCCaVbZi4eKrQJcaD9vU9e1MkPHhF8Merdkrv9Xo5PrbW1Q3",
  "key29": "2L31vb6DwoQsho469KDQc8YzeGTaoLiK7vF4rSpgBdk4ojWHSxf3BRnvmXsCN8oEp5gB3tV8KjdRdexQmLktnoWe",
  "key30": "3XZkeVCR2kT4i2SFGjLe5WeMjGD6CLhoeYxwC5WuPskjAGjsypA74YrwZuDsJwexCRYRnd8AeYBifxcnUSdW7mdY"
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
