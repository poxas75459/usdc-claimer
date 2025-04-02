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
    "wqT4hMCMhPCro3fyppe9Mmd8wPtiR6Eb9K1ATxb2mGvfMrU7LsfmobaZitUUL2HjjN1jna97uHR52J8HULA1YkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTLtfYh1skECcNBPf29XNWvyrVjBXbKgDk4LfCvFyMN3yg6T8gXmCKwB5eFVhwaDsLxFCSKYiojSaDtGjAHHZ3t",
  "key1": "Cuzv9mRKT4ZN3XR9CxSpsEFF6XMEYngRodQRoGGtx7vzBcVg6D71Aa97tohCrzJzN4hsUgTrrmjbf9QuKi2GLvk",
  "key2": "25u9bWAkVokFkL7z8ZZBnod5dbN24U9aZNncQLYXnva1eLFJbQEjSJRX4wu3b47fuYR3ScrdnoDiYrTrfY9M8nr1",
  "key3": "28jFRCHsd1sWqFQ1UkWDoFqLujidvwnRWL28JwYbM8hE7whT9vEqtYmGWsiAYuBuh4RYVzmd2s1JVrGF6mBgpyPT",
  "key4": "5SVZKnbyd8mFpvqikVhF9w5VQ3ymP4CTdX4DUMrWQa82kvG3wWNqMvm7pR6rLDf4CrbTW4WujadGBzMAsNu8bEDe",
  "key5": "4EzYxBRijnKAEF2aCkEgDWTaiZ3YGZj1TC5TUayxr1tvBoSWorK1UXUbUkjUzUVjeKc8a1W24QZF9n3sYyH1uTMd",
  "key6": "4j7rCss8XqreLGBc5vyLzV755LLcj3R4nGNnNwP4w33sm91JCrXiubWjG4UFvQKzgFPnBWo9mFFWb7NVseUemfDP",
  "key7": "tGDuc6GhrmJw4px86TFhpzbzn3fKxLnKmGGFCFXqt2MWNaQeV8QEDzuj7edMPEeEjfhALwWen7Kwqm6L19oAj2q",
  "key8": "2Zn6dhJYpD7NshUtwNwhRUBC94NEKGjPhTDrDCSgbgr59XyNxKJuT8eTMvoPZwEdEx4PvCoF63DKo9psngewUUig",
  "key9": "3kWftLSq3Pr4FQX4gFjcChNEuwPnUvQnT1zn9D7d8i9GXLUV46Qsux3rASR9V5WjYhFKE4hW49MALkASQYwzKSCx",
  "key10": "9SQxr8w3NaoyCW2yyfdkg9EBoDg1KUCgKnqEpXPuirQBiT7vJ47nfVsEgvPdNPgYCFkvCn2EP74w3BMems2rLHC",
  "key11": "AdLww2dJJnDnwKTmqPJhcCu2NfHipvD9WCaxFx9U35kNj2CsXoUNLZgrLEWvrwJLaZ2AqFJjyBEM5FP3X1T1HM4",
  "key12": "4aqg3YvBzT84cvhqYJRoxHtBjvS4XiBRGpRBqiqnuoTjkTz9nY7fxdLFhtJGV9YZiGi79iY6N8bNcZdsR561ptgT",
  "key13": "56cX3NEKXs8KhaEVtQoVDYPu56td2zVHAPZhYtiqvxsfarXiWYLbeHE2hzSfxeqKJr3PTZKzR9gTGLaoDBxbNwcL",
  "key14": "4km5qcmAW7CLdzi36yEN66JFoSNaJZzvGTzRcBqFj1GuHGBzpNxdjVRT22U4zacETybo3vdoqimhNaGgC5pLCWhc",
  "key15": "2Qo4pvzUyNjYG7DJnuGWXPAXWUpEJ14zBPS7bFJoPQ2cqBWrfDDqzDZrzU2SfTxird9ysttaDHvGxBvhfXdTaYDN",
  "key16": "4qg26YSSoAS4uJ3ZhnM7GkB5BFsEBmfUthJZoK72QWYKonzx8UDFvqCnvJNLk22DvDPvv7Ksrv4QgD9eDhxYZqoW",
  "key17": "2sknGVibx8dWfW6zXUS2DxugtNQYo1DNrpeBmxe5Vn32JJrMGToZAtFtPrcNa67deozXSDPx59bENeeroKeuTiL3",
  "key18": "2xTuqt9aUCNPaPXTMDi9pVUMecQVogGi2W4wfv9eiVcx2AvqcK9kkdE6bzM3QTgCmAf2RcShXK9YcmTh5o827cdx",
  "key19": "61hZqi73TWoNaU4gRaagakYsXwF7Pqh7Zhp6tmY1byqd9hUrNVRoRvhuY4ogzQyJZW67uWefzDM3DfZCPVTX4B9t",
  "key20": "2LDsMfiFAYTXXzMHn8LW7qBHoSBgFf8cYKrhk5mgCE6vb21W3JMvDSF5fWXDQz8v8MJ3SLr92NFDTVbqinrxwWa2",
  "key21": "2BhMGdmrVQeFm7CNnshkXZSVPeRyqkQdzbFcHewpHfZrHSYZtreydTiwshY8vzqBaNB2KAiwhPim3NWsqbXYfaPa",
  "key22": "63Zfpd7N3AKCUnQf7TtxJpFNxAEHDKRqcvq2uU6CRX9BdSAdbWPbwMibLsG5FRk9m4Lv4C1AwQLGyAeYJx3eK6p2",
  "key23": "jk8VGFrqejcequkVh1bmteR4ZZjL6Tj1CR1P75uuahAevdtHZtjigeKkB3YoB9yoYUPcQYgbhbVw48mRdG5JzZs",
  "key24": "5Uj48Dv8BKN5AYadwW4BjWFsvxbnCRxMqMqQSaTrTsMuf3njMhLPcLShKEs8eGuQfcebEoSceRrnksZBHoSbzASQ",
  "key25": "4DiipBKXtq9rFCfjn551W91tS1eJrxSzc8suy4zj57RQZ2wuNucHH4U7xcVeoaKx1BuJy6KzHjz79LBZdefeovfi",
  "key26": "3d4nFE15zHBkkN48nuUgqTtvofE7wUjWLzPNKeoj4KitPkYVWeanvA4ksKm2oVUySnCkP1vhwFo5FRLc8bHLpns4"
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
