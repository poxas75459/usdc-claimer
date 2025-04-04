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
    "4RAitQuG6occJ8XneCozD2zohehsYL3tE3QZHs5G9wGXVcS3S8Au7i6vh1UsbKvY1LXdC6qrH8jL4WbhW7wVNsri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYW6TE2ecSjcEMiuQoCsZZi7M6e5MHbduFLYi1HPRgQM6oCm3L14heFzM31cyGAhzD4PvjycBDkc6knJxKVSvRj",
  "key1": "4HX946xAhuSr3cMQBrodSVgfdYNXoVxgJY15bmJRMbstuQVDv5iYVmKcHiN8i7w3A2pKg29kfsbEfVgg89gEzcCi",
  "key2": "acswNMSfoFccQNtxZZKEgd5QoKaqnm6XCTetCN1YoZSiFnQji5PFmEHZumV8RZBT3vvaS3Y7hkmS5VnSy1iAzAE",
  "key3": "4LEvpQrZehCFiWPXHbh1NV7hqFhfA7BLfUV9vgPxH4XbxNP2etMWojZ7pVkzs2qqKKtWpwg1vGywBQ3rwygqhRZy",
  "key4": "LxcV9sbvgYcEqCMgXRAeRCC44sPapNpCqYxBPCybB9dSecKh4CCkW6wa6PuBicU6rTtNepff8d4nMpByxob9JLE",
  "key5": "4NpZgdEXunchge716FKafj7P9cw2m4o7BKLxJoQLX6wFeYqmJv7doLyZKab56y9659rtGN77njzMUV62FwHukzte",
  "key6": "3pCcym5FCgjX6kSopEg3NQSriC8SSSafH4NiUFgAR869FojTgt2LpJZczHJqvGwYbftWZ4b4QVyqLp27Bc7xaqbc",
  "key7": "4u3jhDSnQNnQiL7z51PkgUvRcTsNyTq8voHr5q72k7WbJETKfiqafpuPw4rKYHY9evnjjrPtZr11AA8C9zN7z9go",
  "key8": "3fkCSQYDPHaNx4XTjgfA3WnuQ2XFs8UM67rTDAVto1oXWDp6FATNaRoJNe1MK1nCwF5RLBaycuTizez57zPuWxEf",
  "key9": "4uuAxj1tCaB3i6DGJAox3YooavMdcZ9qa2ih9WUm7U77UtmcDsNRn9HisCRHPHCn3pN8b3XcfiLUHuer4ECCKX7E",
  "key10": "kFKcriCD1WKCtExrsuixLhJDkLkS5dPnnMChjC2ex6AKgWYfLvxQGZd3jx7nPrhTx21ezdMCvievNXwZNtajU3r",
  "key11": "2eYjQm3djxap4xwPHhc6RLh1sgu7KSw6ANjQH3FAHCs8weXM1WoyHtJabxaG9sjPxbAD7fPE8yjAYwoypgP8tT31",
  "key12": "5dTz4YFF2YsjEgXBR9MkHWTGUX5EycwWFnBBRyngJqngnENiLK8H1APVdqGScxUZqqsXMNRLNy6J5kPD1wX45pQA",
  "key13": "78FoiA4eSWLmeKPoZNdR93KhQcB2TYJtT1StF8DuampwwnbDFJaJoCai4wWQNQRtJLZAxKoBtHJ8VYTZczZJnK7",
  "key14": "2wwEH6MStoLxxKRePhvgqNdpmc4VhEykedWnhUcYh8UZRsTVfx3U7Zp6g6jccwyrRDXgmTjMmKh9ojcB78LLh82p",
  "key15": "4b6i9dtK3eS7VyiqcbeF9zaJNxL2SSeHhag5NBSQhgp5aQTPSC5kMUeD5Qmqeb6zRagnF6Pe62eYAcqSYVZhz2LM",
  "key16": "54vgaNkSW8NgMxCnWJbpmj3z6j4zXiZhgfVMAB1mWxYsVz9yhTZExziZKmuBh4pB7gesSPUCSVNv8K1eczreoKZY",
  "key17": "CnAQwEeGrJND6ebU3CgzKhFJ4m5tUqYXAwccAhAoZ53GpzKp38yR7zyouy1APhLHQAS2nhpEsmTLW1WeJaAHS64",
  "key18": "5jC4YxztLaXohudcDMhRJ3yg5wzg5LqBzfT3VwN9fDCVWWyGj8cMCEuwQHVmcKUhffSwV42SJGAfkTsZei8R3HLt",
  "key19": "5EF2LKkLgypU1nZdkMLfUcsCutspnEFacJJvy96M2kQwzUrNFahNDyoYLmQsh9b5kZDqtnMA3QxmNMQs5AvHW8SC",
  "key20": "3dA3sWPuUTbKHkfi19XhBFGJJoYExf2nv7bXp52ysHEiEVNiKGM3UYjf5KksHGTNdXFKa1BrGSmsGk3S9c3GVjVy",
  "key21": "5f7VhyWQ7w9jzNRZkPFvb6qEf3Gqr9LUDAA9PXzjdh6jC61s1MABVVYdLCovyQVRfCuDZhcQnMc1bxsZdVwqEqfk",
  "key22": "5EwhpZfJboRcJo8as9X2cvNmPSzSemnVRTVEFUWxS7WhD7bEYgbHp4YQTSbC9Mqm8et5HRQzdNtdEcVtyKbfGMga",
  "key23": "3eZZaL3yECehYV43tJmh3USfN68UQrFskkS4ocwSnL9Fkzer5NNfTHxmXPU318ECP2SWuP8NGEDQzegYapWajqXQ",
  "key24": "E9jpKFQ6D7Xgs4St9YXNoAqyGe8KWyB3EFvC5JJULxttQPpDxxzKjQs3LG291xX71gYRv389fbMGkgJps3vR8FN",
  "key25": "ML9FpDFozRYKLzphyNPQtyWc12A4YMn3Betr69BRCvYgFR3Yh3pc2Nnuussw6njoJmFrK2fU5ix1VxEehHN6oSc"
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
