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
    "2GrFiTr7G5UWKcWZgxW5kAMErSDys9tpejN31LmQbnWCzx4MhCPGTGgbKLCcpiuzY8iuvVzkL5iwuJAfxNrZS1ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYJTdjUTxJFpLp2p4bbJHWJe6iJKV6J5RVbgUty1BwpWqdgzfTKnMfYaUAMke2tfa96CvrroJKn5ywWTFQwovTh",
  "key1": "4Lz8zC87Sb6JYDsRdB18jdq1cSnwBrFUA6yddRdNmUarAG2fSoHDzzGjLRvekVDn4q29L4GDzhZj7EEB5HWcdY4z",
  "key2": "5XxWCAZVSqxSJB2rtNB57GCpGTHuwx5vxHHTpci2aBnQUK1HxeVn1V9STuj3kYWjakEssrh5FtkYQCkLxakmPmFJ",
  "key3": "46G8btNttUewQkBbckrmuxKGDpH3CGR8SckHBcZqTm6MEZaeGKuZP6thsvwRTSXD51BdL86ZRBTJ4UD9m4JwvAHm",
  "key4": "3KZuAH4uTVqpAPL8Jnd725GmHnt9JWcNbwsHQ9G8ETVtjM9j6cimRDpbkptMpKu6RYubz2XuS6UN9XGaJHJBFpay",
  "key5": "5ycb9jjmLCoqAgC1smE5wb43bAaBenhoRZaPy6hAdTUokazc3rEmgnb6VLNbzbbtTbaRpRacwz9CG89Q1y9pmU9",
  "key6": "3W2wWUQKx5ksiTxb7ndZTHd1Lr3ZF5bQ29xKG5Q3srXK983jLVHeS2z2cR3iPS1uTXPLnSPp5LyqBrH8SUzGZseq",
  "key7": "PGmaEbuZTSvoC7cS8mZ1YU98LrSgPfWEmjZkGN9sXRmHoaok8Tzpchbw4dYv6MvRkXJB5sLMV2rqEKhNzgR4YxH",
  "key8": "5KiEdfRbpFXwruRdTVKMuP9XoNDx2W3tQKNY4b7fvgaoZmVdPGfNc8GHTt3PMzSV2oHfRKueKiF7TrSfm5GU8C6g",
  "key9": "4ZJxnzwB3pcDdHg2o38FtNDYHPxqjhBMgg9LFVC5tUYaUbc2saYu1i9z8Y86rLA4NuNuC3cNumwz6FdPeZMJ26Ub",
  "key10": "2nupryoLR3ZpGPz1oa4ptUBr5SRvixoHTc5RJ6xdAazZvfxF46gnrq8ySdDxpdyvS636sMjk5ysjCBTZwcnX6AGC",
  "key11": "3yda9jswP6FXQhfc16Guf3C93bUnq165YaRrE9GcPkuKxwZa21KLeVuRFPBFHhNU9FudWwTtzuSHJ1EM8Deix6dQ",
  "key12": "4eZUj7BTasvvh93anHVKU21qbBdfWTCyF6aAAy4oDEhfqcK6Q6XDdrmvBWDGWw2225cucJyPJ8eVFCFEcmWCDEMW",
  "key13": "58nM1RsqEPBAipo8Km3wFxQ4gHVzKFN6eeFXwrcMtjtTG3wAS8nsJmWuex5HvaiZzTacXu8kx5gRrb1CQ3eNWzyk",
  "key14": "4NMXEm6MnWBgQ8oyfwk3gr97fTQufmsMpX6AeZdBUKi5brAxekavpZ4xhKuTQ85bav5jzitkuySLkz9psT8sYA3S",
  "key15": "5W7ZUV2QevoEfqM1ReUNn3xbfHiWYUvJeksccpo38AXXQqA3djYE95kyPHz3hp2zcG34ZqxduSwjDFv4DjD4SNJ4",
  "key16": "62nQyng19sBjb7ztEaYhX7jLbkx3UzWLNVe91hSrPb7kNuwCRjb8bfJeiS2ws3XQ9kj7FJZ7RAC6eoV2Gs1xYiV5",
  "key17": "5w4UXGVEHSdnXMkRC8SS2wy8co6QfYpat9GD5P6CXJAEoGzsWLLnD4SHb2MimNSMpJnnDmuq4vJ3irQaL3LZ6L3D",
  "key18": "4wBR4ct1uUDidymLEiy53XdFt3VP7U2E9cQC3hqt6Wk4jPA2BogwJyCd4rGT72b8LpfUv5Zn8nphzNfe6kmiKX6X",
  "key19": "3Xc6PTyX7MuuC2DPSpsaGo6oT2cdkMbPedY89bzMUbARrpcvARqvoGrabKhwWRMieMKkCEiqgKyUqrkDzBMjevBo",
  "key20": "VRWoayrdgGqhrBqTMXseeu7JhAELegLFYmqNfzrG2wByABTDa9k4CLf5kZEK2DPxwQrTeapE8QWtCQVK1VpHcLY",
  "key21": "5CS5jXL8g7RQSUHj8SxB7hNruA15wuPAcBSHVkGR8F9wVY55Nag26HChFwEkeB3zerBHUPu7MFGspkDbs4jP1PB1",
  "key22": "JgrYj2tKGiH9Bx2CqxwvQVeETU8HYbfTAs4Xh2iDnZP8HePkyKs7LiSfaja42LK3pVGL261SqBx4v5EC8ox8Z1A",
  "key23": "5hGuKMhqbj7T1uhrkHqszy8tJ2UqDoYVqk8oN5wtWKvZicCdnv8Aaeg57yWP4NtnHBckhqMHS91JkDoy6BFbMLMV",
  "key24": "4QHGE2wYM1M8YdzcvWe8QDH2WeYU6GYLmHR9Kcasju7hk5suatM7VQYizKuN3Rx2oN2mf1qQT5x2UDrASPaeWSWQ",
  "key25": "2nY5druVQZ6egJhBkHbX3ZfNiHjtutysYdoQUtixUfEzzxDioecWSX4NbkjMPdH4DxPeBAPSB2S9DpmQM9E3d5X7",
  "key26": "hoCjsb45kcKF9ReAFyS92s75Tk8y2iWFm6eE2Yy1EKYFma2BLsN84QUfD3eGnAKPirdbQS76g15nauCVEX7bpdd",
  "key27": "4UgcvJaPJSxLNktVYkiyANu891ujgXBgfNFQXcobaagpAaoh2fwBQ2ymjr6FpCNq8yPJ5nYtiWuT4c84pFA95Xr",
  "key28": "21QREQLpsWxRZUaMjpVxWVxc2cqWK5VJNyUePosxdrzwPS5GzMoE6mTnc42mfDyUcAvntD6GRh9FaQeGNFYzJ2xe",
  "key29": "5LQ7WVhTFtc3gtj5cEUA8CQaPbqzJ2hp9qDJNxnbqZjFGbAhPEqaKw1u5kMgGr1iRGZCPvXYKW7rHMJPmsXiRR7V",
  "key30": "4HwCCrjgRfKqTFgCBiAaCvwTWWHvuDfSZVWTS6XdV2k8X4cxe15CbDrhr5Zmz2wAscBu7cMGLVEXSoT9khnqWj5P",
  "key31": "3xs84KYjp76YFqvP4Y6m1vJYHQLxZ8ZttyJ4nMfoeuEZLoTfnTAZTDM4YNz8dXz1W8Zbifzx72rYMQ9TXrBNav7s",
  "key32": "ag153qN925pqiAn8QxxpvcUXC9CbQa9eYC2nD5rVXSuaWFWqWtzvYTd8Abi7sqxLvVH9Zkp7v7Li2FKH4qkR4mD"
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
