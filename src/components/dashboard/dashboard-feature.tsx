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
    "4msUNfWZSYjR5d7WqSD8iJhaecMNbKAKeB9zPijkPqTzj3p84xdZdrkzWPJatPSm9zsScb4zpNhLS95S24NysAsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uo7QNfjehq55j4uP6y3HW2PePQexNF4E5Qh11CtBub2qVfo27yHroDFcwyRf8cjj35FEDtVyZ8GJ5kCEC5vamP8",
  "key1": "44yKFS3ajRrxshuHu7uXJ8RUeDmR2Js4crtDXAdUv3bA49nXUKdD5Hb6jttXVrEGfKLTxhkRt6xN1asUAaLRR9q5",
  "key2": "4eWSM8FHVMFuZAc6EtdzHfoT3B9NnLW4HvBNrQgeaJZ3qFJYrWJtnxvcdf98ffFSocNjDhEzjq1MUBmSywZXM4QE",
  "key3": "2Rg8kcWwsysc8sEeV5F5Shi4K9AA16uRxTgh6kiPvbpRnJp2urgqu2XeF9GGzaJrVKoU1pHWwa1f96jF7CqvzybD",
  "key4": "3nefqyGHhBmc254xcxagSjW6PMGXtYxMfNca6GV5AQTfq9oGw764N1qHLznYRMB4KJ33DHHhjC5yfwhDVESA57bM",
  "key5": "3Hp8HGAiRqNCfnoUSmkSaggkWrDnP3Wefwi1tHr4bQLf3nQLkV3i2aptjPkGGMQXCsNH41h4VvHoW6JTr2wwSEfW",
  "key6": "5wehDoAw3eBjU2VJrG7naF3Y2LxRdUFdpahZmLNPpxaPRJCNXXH37UwdLRjczW6BTLv5NnPaShiJ9cv3vs13zY2a",
  "key7": "37Fzh9J9aSAfp3fpj8GD1JZNEyXJQgH112S9d1jHw26VMpBSAWZnGoDud6o9bSA5vUvpUcHE3ZUDoRHdu1YSqdUm",
  "key8": "3PMKkaMWwi78GY27hhL7X3qzDyf2THvDhQLeuj1rU7cvje3Gaze6Xri5VLQTGgpFkmqEbhzgTtPVxqbMLGd4oj5h",
  "key9": "WVPFiT8U8R3WtHbBKxqfYFdAYVeaduVJUH2xNsWfk1qRX986CREoW6ExYVBh5oayEDsmDdGMNA6cCweo5hANLPV",
  "key10": "2TGPHoN3NNTtDFyBFozaivAU8DfMb6pvKSN6Z3yVCfzqbrfEn2eLtbuooFbX5T5jRWzPxrTEYYNxcmA4J8F6TFbZ",
  "key11": "62NtuPatYZ3kemsCcVbHgwRRihBr859AX4TMP8jsq9GJwrecbXkCgHqc5aGSQS9bUn1TkGRW4vUjrFf2GxrffDAz",
  "key12": "rDXCxJjsY3osEfkKZBfaLGxaxUsTnMbPNfKLyLb4YFVHF6mGZqvooRH2LAYNXb4JgJ5j8mgPPn2bFoVvGyArZsv",
  "key13": "3fCGHioGA4ETrhS3p5nJPvHG2rKH3cdnRAJFtPFqEpHzMP9AuYAQcdvDFo7uoDR95VsRCvFeN9Exq9qTwnLPDv2v",
  "key14": "4RzT6QjJaiVNU6dSuoC16oJpjzW1f3bHA6F2A7K5opVL9LHpk1kuM8ME2Ecg3nH3o4q4sGDAfHijqDfxExSUKDaE",
  "key15": "7hjQ5mbkf5xUHztcFgm4sfZtQdCJGAZDRj2Nx4mrDXqXPZ3BPsZNatAoxWxm9hjK136NDZ6tK77dQ3dA3GdH12N",
  "key16": "26gVkXUgTHrSFGgFCsu9Z4EDQFsnASLJtosNRZaJdT3bScVQi4MjvtgWQa62LisYLnoLmScDk2NFD7H6ynRsS6wt",
  "key17": "4wYriCqk2ggB9rCVffmdUZfzN3Nr28KxcdgzCwQHxuS4kuWs7Negz5C3NuNb7DjrQALzEGQdTrZCEg9DFqtx1UGi",
  "key18": "3qB8gV6neJFDHchi8z3rriNJvsvPRx6nibGyTg4ZvrMCRNtvhZ5akAvJeECdt172fGP28EFU2DvdtWJpQeY41kbV",
  "key19": "52Ajtreq5JD5mWohP7un3j5C6q98NFsxF8qkohnPkeUtCwLdcAjLnxykJnTBz4UCU5S6CCwj4nGoxtMQcgibywM4",
  "key20": "JEhezcvuw6Jhb911296DozsPBuycmKpTGCuSHumCVPiJLdadrCe36FZZGqcPdxCBvNMMEbSgmihvBtaLSnhy6x9",
  "key21": "3ou1vafmdb8QT1pBS1FC7kcvwNFHPN2p2xQhUAqTP5vk6zywkX6uer897CCs9UJEC7CzXPztF2wR7964bVd4KMLJ",
  "key22": "22mxk6Zrpno2doeqJ8NtejiVX144xmTEThLBhaS6Zd8JkXvkFq5mCS1dyuW59BdfCZX7PtLA6oUTcEL5nyACL6U8",
  "key23": "4B5B26X2DxNdmZ5hxRQUwp2JMadPFUQ7QoeEL48GJTN7PR4U6aBnUTvPCRoRFyDajdjcesa3VC2VmShKTUPyxzSt",
  "key24": "3nC8zc9C41n8HDsfCfhWbXTPtyjpDCdVqcM2CofcE9BZ43sNDaA544z75XzJtG1LFP6ASMTCgeySvMPdtoP9RmeH"
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
