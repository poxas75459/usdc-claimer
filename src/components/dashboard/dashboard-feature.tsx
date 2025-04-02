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
    "oq5TVdgDXGvyonuvzJyoa2EQeMKXrFHA2ViF5rgpsovtXvmB9YvNPLfwAWHNzXZhUgEWewB8F8hi1gSKrEVfwiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HSrRjHYDmEpTCqNKmAo56LSGPrWRBt9j7WcpZ3wvjZz831XgtG3GoUgWcXQjq451P76uQKJDMGH5Vk9uydkztv",
  "key1": "2fVc8LRfoSvc2JKeeLVbsZykHi2DrfvUPqLKT8ZCaa9cbMhtbPJEWRjDVQTRoBEHaRDTVeSjKjd7JpcgQEpDvEvu",
  "key2": "4mmzQsMZ11wVkVirsGmwcSuPRYQzZRcmntCuPL3zNt2W1W3S2NYKp1239Hm3ASzDHWRg6c6dFGv4TNZ3nvYXWHYa",
  "key3": "nXUvZFyfUje8kD1jUJQbLSfDWhDWoZJyM64hKLhpDZRRxykq9x7XfX8JHMXqPxrt4kKY3vVisGEa8kYSwjHkS62",
  "key4": "tTdsVcrqrWZzCKPiCHeHYeGJ2jAarHJ8dp59CL4nFKkBaXPHfW92mcDtqQm8qvKbqChMzg2apq5da1vJ75U1CYK",
  "key5": "2Cc4gWxBj44RuW5g6Kim2xWynTEB29NoA7CacbptTJ8JYeyQMtzaC2fLcXK2cQz5MPeG9yKdpcPQbnNC8wiPvV5V",
  "key6": "4Fke2X1No9Y3QrBCuWGWPLNuLkX7HAfy8swWRGGNhByXz6azqsrWE2Bdw4t9eBQge3qRQoxyYSTsuDRRL6HVjHnE",
  "key7": "38Diu7CPRQDf1dBrEKMTK5Rar3J4oB7pEk9qQteSVMCoJPBbV5dE7oJH5KiGeNPxato4E9mEvuMQxC3r82hoDd2J",
  "key8": "3k8GdChSXWzJp2sRrcFrSoHtp4VFnhF8y5DVHQXYMTt5vTtyA8am3ktzuFfhgW92qtYmerbHZ31Xhcs5UHHn4Y54",
  "key9": "j3XjaEwqjZyeQWiyyCX4oCeCNCtRSjBnYKmvZ4e5U7oPBiQXbEdV6Vwm6P8KemtJp8Gbpyx48kDvURo71VRZVFt",
  "key10": "4tfKhTdwCPstt4qBDjZLYonH2ChxYq65e8qKjRGRDps3NkRsuRG6m399qDTdEotAnUUEobEAe2i1PD9bxdqyQLoe",
  "key11": "2fc8CY6vaH9r2vKux6WYREPy2Qqw9Sk21213hzbgqQhYTcccLDkJfnyDhtEpLkFFd2Qu9VEwjHHMJfv2jPVEPJyp",
  "key12": "4t3T3S8bBdS9zqqK9D6ihinGHnFRG7uUsHHC2gfaHcKXccFXYR7T2GtmDhu6B6fCrqPUYxafmfP3qcdbD3ofHj9o",
  "key13": "4kQmMRWNThXSP36exBrkt7EV8vX5zRAJN9kL1iUut6jXXy7QudspXijsZSyYprwma18a8LuALefN5Fwfv2EHrUAY",
  "key14": "5csq4jMzQrzVvwyb25xVfXiWwfFmdTF5QZXAAGFtkks3t9dppkMaU6D97MVxoRQ5rzkENpiHM4BrJWTBL1q1Gm9y",
  "key15": "5Bbfhw3GEj9fDm3ygwhXjc2VqXzyH42k4X3rqEUJFPP4btMQHfBbPt6ujvaaQzMd7nGa3xgEh7KmPgpT6iY24kRY",
  "key16": "32SHG5vUMZbJGHFZCnZ9syN11as5w4s3Ci6TeUKQSgb8vPji8RWxTZmJSZcw3vuXsq25kALzUjbVgyZiwwnYcVTx",
  "key17": "2ShnccpAvkp4m99ZyHZf3BG74mmvK3t9SfSDH5fGbFUwJdDDPCxUr57MoUVZwWRPK6a7kgX35rDr8ZQKbfXQGcWv",
  "key18": "sLQEYHDaDn69jU1rXeNFpp8UVWLj5xZwfWp5n3eRYCq2AfBrp8RS9XMuDBqGxTkEvS9vURdZAKv2VwSdtGWSpWL",
  "key19": "zr53NLct2dBCTi7sA3NAE8C4bPqdBUZ5PHVNV5KfmxuzyjiW3sdFH1YGBiurHuqpon5qykx8Mskq89K3p3UFj1z",
  "key20": "3rDjhPiR25YQHcLpstJJ4jner87FjBfAfQUecQRtdjsrkbgaav4LeMWW23dYcRiGrEQo7YDnhy25T51wqqirEG2D",
  "key21": "2P8zEtNhxuGuAj3mMdD6GE2XES9KKue6NKJNy4TgbtK6kNMVwuzjJb8L81GTUcN9TfHrfXgNE66m9szVT6WLnjz6",
  "key22": "2KetQxrcKBGxjg3fbKtxd2DB4867Ygxja7QUkarBKt2ipJmVZzwbc2vYVEvC4TgaMj8JVPHuEvNHZcyPSCtfM9SP",
  "key23": "2yZb4R4suTxHaK4yZzQzCFNoHZJW4TqSdGoYbUQLmKGFSjDkbaGCodLQNoHVEeviSFf3Chk4eZ47SVYvRWPHKakh",
  "key24": "63NFeDdyjCTLn4AGLC7KSkY5RGAzFBEUqnwGVw7ND3ZCNZefmudVZRy7kya1jEuNVc4vHHAixjRFEvaxwbMqPVw9",
  "key25": "4SxbpP3eJrhvhCxEHhDty1ZU3LBT32VyFwLQhc7nctukWZWLubwhzK72Egokt6YxjGruW1QbJjAipNnfabJpCUti",
  "key26": "27EsQW7iExUGo5fz6okKN7PYT7HeaPba4t1oDXPNGPKbBZ3VEfC3fSsc6W27ciZZeu36AtGS6rNeyeig4KopU1oJ",
  "key27": "5etS6ZiqoZrQwbh1qU5Jg4Dn4DTZbjHs8rEXHgDEDQJ7NQwcBubDrEsabCXLJDBRAG8bhkbjp3fauaefqeZ8bv7M",
  "key28": "2GQ6zhVQKzrRSzFpbpqWYT44ajdrmXWCL3TgfrNyTwzpr4X7LvdPiu9YeAPdZq28B7e7qJcmtiFhcpYCRUCNaJSb",
  "key29": "2C17TnDxQztWDEH6T71fjMbbh5oacmKa4mtiYhMubPbdssz6pkCm3n8yiV6PDe8PKVooXtsyKj743hKHKDcAauiJ",
  "key30": "3wUhjHsqkQBAaV6d9aGNgT3CFcJVezLmPGUdrnBy86JFhp2Uzpjy9M6mKbofUv3xAhvzbVPiG55VDhZnr6CuPiFL",
  "key31": "56fRTkBcMeRUaTNELsZ61rzZEpH9TBBGPo7oyT57pL9PgyFZo4EdGFKu6fUVbZVMw5ZQLAD26tNHoL5bqtPh9SQQ",
  "key32": "2orTPBJuaxqNDcDgT6YW7uN3PUQHzgnd5RyiNxbH77fwCiiHJXr6haDdPWzBKsnH9pD42x8fM9TrSuNkNtdkgkVp",
  "key33": "2szbx1YtQNPWCAcmP5j58rvywkfBcSPSqtDuCc1Aiyqr1FC1LVnW2zRP8QwtyU7eaB3pXha5dL6dGLGMPR3LpLT1"
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
