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
    "w5wvDkXR53u866q1puaassVgnyCgfiDxVG18dJ8y8P8LA7fBuEMQQimhcnJTTtp9yhDhFfYEWABRXKxaSAvinLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXv8d6shXVSa7bk44TynEuvJmLTdfYzX8k2tfMRCWG81dDRXKT9dnEuqVhfiXB9Buzz3JG8x2QKQ7r5VDYMUqtt",
  "key1": "5DzhnkHZ8ZkKXeSpg9vTgyHA1f4Xi4fPZtwXFeojJkB1XVEwKPZBae9ByNK2nBcx7N3zs1ZgGiij797iLThmZYGk",
  "key2": "3yrGpyFdtvQE1HFY3Bisw9y6K6L191K3qZrqNDyqTpfnHCbx9vc2n8H1SRuFudoKEjKLSvdAVP2LXa81grg9a5bv",
  "key3": "3RfAhvMxW2UsPtanCEqsCk4gzRSqXUTp5bYiKSHjT1ZDWZzMCTRPTpqzh7upnjY7pbAvCUmRCVrweff632apfErQ",
  "key4": "nzyDEmzQ2YQLVMQbN7ojeQViGmEY9Wh1SyQk2csiXQfeKt6E2VTNfoJFB6kSp3e8xqeuQJVcFDeLuAkth8m5wz8",
  "key5": "3iEDqGqnmCzzuWBpZHDiFHiMiuvQERw9mA6G5TYq8QuyJFUJA5gnVbyDW8FuNHfcJNL335DHG3WKtfF2qoiuTBRp",
  "key6": "2EGVjzrtnnBim4RDi1p89rhveMnys4VeRGAGPajL32cVY2T2U18BFteK3divigfoLFioWzn2HeTyboyBWGyJX8uz",
  "key7": "5etwT7STo998m3PdbRzsaVqg6xWfGe3KDaCRdrjmrrN5CW7mtAHS9gnxm5SrCtMnhEN3pfcZF4Ps33A4rUZcjjF9",
  "key8": "4RqhQdaR479CFbPb2zUKffuWPRnW3wprSdPdye4TmVYMe8dhB83MJwENrcDmhDi9ZTrED1SuK7ReEcFytMKA8MJo",
  "key9": "Tw3B9W1Aazig5npoznj6cSq9DLcQh9ki7c7VRnVZ4NJ2wkcb8M4HJAF8v1P2DXv9Fd8Dnnc8D5GgATm638qDS55",
  "key10": "3htgwmh6XAToQT64AJuTYw9m4fKGhEyMWVZBucgCpgd8PnubyyHj9Ztwuo3wQsR4YrJs2ahbhQoBBDHrvgUTHvtb",
  "key11": "4sfaga2Na9xquqi3jf2b8ZddnCp5uUhMiJ5FfxAEHAma7t1bc8EkEhtBCJiPrkN75RCyuYrSZLTVGN4nCmZg8e3t",
  "key12": "3uFBLVBZvqdvHbRLFo3TSGxjMrkU84BSUAtjWqKdPaacqouXGzZ54VRfnmsYvV6CGUo3wSu329vZb7u113UYt2iD",
  "key13": "58XhaqmP4qgKgsJv2Df6jjvj76F77dxQyfu6sSRW5F5Lt5HjqXCwJxzi4hQW7LDhpHdTFGCWHiTn7Cz44o1DJKQd",
  "key14": "61cdcJJUDdhhyca9viWsis9honCs9sepB9pofwgJPs79QxmAFsAB5np3K8ZgDEyuVgLDb4beoH9vwigYf8ykcPBR",
  "key15": "5zEvYzEfNbakhZe6jGMxKCfDz9vjhjbRrTVAStA2ohxSfoTs61jECC5YkyRY5Eixpn8T1VLyCZDeJQmQo9NWKv3Z",
  "key16": "oPTznwG8Z4UA9E14QnyzLk8bLxUQVjz49eL1b7aaTUphCtcv7KYBoGZQNniSjLnY7Qvu3GMyu9LuAGxWBnxRKTC",
  "key17": "2sUqGu4GLhQZ3uub9kMrw3Jpn2RD1towgKYUeL5K4Ztp1B7n6sZR5MX17ikj23VsaYn3oyHkyYdvwfkQURU3ZPUQ",
  "key18": "3J6GP4rjfsUeQeELj48Uw48C2MraZdQ7XXW9db3TwrS2QqupLoT15ZSwYBDbGE2cMcETCjwqo8rkyQ51mHTdNxbA",
  "key19": "5yZrnF33ZSeJiYbuK4r6kFUfkqjDPrpUjeAEUZVSUGPLFaQqGzcTGPRYjGGCF6U8u9aMSqMuf5NGqvWvE75eKnFN",
  "key20": "2hpqAC8ttTGqERNS7U5QCMAazMcVQcFn91sQXV7XGAJhbJVRDpo1ac5APaZjjbdVfRihqT16EnmTycVLXngi5zoE",
  "key21": "4e9RbY9BnN6ynfMtFHUym8QkMBTpFz1DUxLPNNq2xBt9cL2L4cHC2iwGWfe41q1BFtVbjV9SVhFdwQ3iBL2fRdoX",
  "key22": "5wRNEK3btMUTQJwATd3PE92t1yUJ6vTnBvyaAoWhGvpsbnQ3kcBJu7T8PV83PTuF1Jz356gPaFoaVYevtFCNsEKx",
  "key23": "3ua3e1xZFiqReibHcZS7cjzxn79STdwy9SQ8qRNwbVd7n9oXHsAb64XmVd6RrimGwy1cHNufV4HJUGhYc19hNQf2",
  "key24": "3VbhqBNAk51ZNgzFDvBKWTufbVhS8AQfsLBrpfLiGGnymap9eXCC6wBdwDjaUaD9svZT7YQ4NA6qdDmgRAeHkFBo",
  "key25": "5CUH4iRAZ37AiM65z95NxGTTrWNAvEpAYnMfq7yN5XqtmHx6zeBAaoyDgx6Ki5VCZG5JWev1nD18mnHYPGGF27Rt",
  "key26": "2hKMXN24i1ys76oxrMNaah11Cr2S9URmWB2VbVC5zhZuiZH7RcK9qB2wCUiMSTbA4VJYVttbmswMm3P7NfzdP1to",
  "key27": "4rdMVAjcVJVULYAxXKH65ukWTMyJyTpBXkqH8vyskMRPSQv1M2vpdVxL6pu8kpUMHGasmeFWtUL8CE7aYmiSngVk",
  "key28": "4dDBNCw6CRvYqwP6EyErxFeN1BjjgWHKQ95qbSHetWoEMnYV9GVaBVbDhsrJJh6Z878KZjtQ9PgV3Mt9jqN3pMRd",
  "key29": "4BVtB919G8Ek6GfKjGMygyLLEwTkvC9EFPQv5rJt15v1H7xxMTdovLzpPhQXnQovvn2HDnGH6mBzM8z52vdhaDeK",
  "key30": "63T6ZGtaHQFPvHdSWjtn7fJFNyCWpF1czjeLvpBkJNsS2xWPMHq7h8mWmGqVKvYABTMUVQHGEko4XPrM6X4CTCiA",
  "key31": "3JHTHfMJwSgvppB5BwRNqH15SSZroCkm1sQH2MX1VbroqBvnzUmNLZZp6d1GAeuyRYwwibLps2QHFEsDVpbV1S2D",
  "key32": "4DVYFW3MXdcfYE1efANidjdsZ3FhGtMrgRjMdW3hcR2MjLgyUefQj5Qk3SfN58JL6cYVFrWqnTYNi8QCD32sMMPP"
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
