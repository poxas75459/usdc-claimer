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
    "54Bz1cTMpoij7A1P8B2eb949TgqfDAFKw7mHW6qn1Yn6ZjdCpjw4KqtbfexaN6R1EgYiRAYdbWcqGFFJE9WQp6T7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cqr9SmvzWungSKhhVQScBsvmZXofEihgsdc8mCZkTBDV1r9su4shTodt56VVixoGrGH1UxEzAvh2xiGPFpgPqt6",
  "key1": "5duSNttsRuvJTmY7MPpzB4UBnsRBUG1P8Aa6WrMjLJ9i8gDuNYuoC1297qK8nbhhGKbVvBC7dmDtMtpEJNZDvYE1",
  "key2": "4PnVE6wCYgUuoEtwJoSLCuUqGUFyZdU3mEEuqqG1jHkpC2faxoEfruRrQXEySd5wPYsB4MB5wCGMtY4A4J7QaJPN",
  "key3": "2ddsVZdANkJQoqAwTZQZV7M4K9bg842T6FwSQGaVV2Hvi8Z3ZJDMTFKJwu29VLo879FCHN9WWW8zReGjeqaC9JoN",
  "key4": "3ngLwjKFTyq29ERnavG5jnsQRDWZPzrPAMktopkQgKQEgXcsJtocMBaRdpYhX8DPCPisi64tR5hzPm3LLxFebjFd",
  "key5": "59ku6UUEMzv6hkGcFRdDddVBqz5eHRJjqB8pCpbNdH4HUViGwEHzpKnZECp9PnEbXaqxLfUwMDus9PWiXPDCVDqo",
  "key6": "jGUtHEkWhoTTcK8LBTV7Hghi7kpsdedEvRUsxTWKKygUTrtxABVvt8EyK2tBuJtJZb5gSRpkCfg2RmaDuBsDN4J",
  "key7": "2MFhSMsNKQ3Z1Gze1dV6ynx5XnG98qg7yNfXkHYAr13JarnNxWTeiudxQWawmPJwzNC4zxBHwA2kge5BudtUcTct",
  "key8": "qNFyyi5A77mRz5t8rJi6UvR46Fjdyb5EgbyKoki464hAwjgc1t9c9kz8MMCFVTSHrKuHgX6YJYNK1VGwbaTnzLG",
  "key9": "24C9GjEJf6aCq637s5Pc39yPdRVv3MiBEvCdqFemj1Ggih3ZEhLPJsjh1j5FkHm4scsAUvnQNcVuLeJkCggCHYUd",
  "key10": "YXAK1p6Ud4mKGaMQGVSWUSZkwZtgRRkgbqeQWQpX8vnpw9F8MMaw6wUdwpy2sDKYGskV1dAD1zoPRbqgFYRFRUp",
  "key11": "3kAPTSaDk4wZuKiQj3iHnmsQEu5vepnurzFBeRBEcm4KWrmTWvr3z9R5kzpD2AsFJeUaajG2W1dk3f5ogxEh2oK1",
  "key12": "5aV8z76w4XUgkANLgWPYbA2NYRpBHzc2D2X4aYaD9HRLbQuAC6KEaRzzLtx3EHGcbDELUBG8XdRujm4L95s84MQj",
  "key13": "4r1c6PHVeCpAakJ2do8YAkgxqpPUfdXpizjyvZqMBNSHmaCVCk3idkztB4GdkSf5Z45Xs9dqNeDJbFFYdnoCj5PR",
  "key14": "4ALGCnHRvFzeyb9vDHiA8rzBBTFtZ1YkRdN6mm834VfaDm7oWkwCXAuT8QWUNZH73kT2eSsc4x2DKLAkK9F3nZvd",
  "key15": "4o1KuSATt3cNJvaJ6wLRMmZ8xYwAmhsE3T9ik12QiuTYVBayGnScpGi52BZR6TYQJgSPb8AG9hCdGqDtFuER776a",
  "key16": "5V62LpJU8AM9My98mae1HabtBETJ9J7kEYmDcu4bLtRR8kbW5EtURUnwPmfEuPerJrNWuHvWNvGKk7G3xt9ZVmqe",
  "key17": "4e4vYapcpWwQV1BnVASRmKAZH9bAAtLT4donGH9caTjXUBQDTHAZDYYeGUjRk38CpSJw414qt6rd7hCu4vwj56Cv",
  "key18": "5LMWmUDPKayj8yTi4ZxvxRegWnV3Nh6LS8WZef2y2wpnYBTeKayFPsCn4AXywpeene2SB5qqyzUJPXHq6avqS9HM",
  "key19": "4YgKdpqXe8SGbmtVa6BatDAtANmU1axsXYgNRqTfkNjmUbGrGbnx6nSU1fog2VJoxN9yAb2Mdo4HDJW7aJVpgAA6",
  "key20": "4kSt6RpZ5yAbrEA6LNz4dWdMRmEjBK3zfPM9RMAHtfw15BFmEErGaTKa2Qgh4DkP8UPi5ApPo5SkbT1eufmKmz43",
  "key21": "2QFSB7MVgmLZSzMF2AQnqY1oo2iDHQuQGZWSq5WZTtFhJ1RUkeNaJ2htJrcRKEJQkmWvKT573bye3Vvf3bpL8723",
  "key22": "5ScQZ647kK5mEg9xjRk6fNaZ5FA1FtuL5jtSJJ3YCioG97vUu176gJVPyR3GE9FDhCBh4WdvfsTvqc2uHNGbGJyA",
  "key23": "etfRWZb4RZFCsqz1xokYTrRK7K13cbXWbSqHJt1qHxzaaDQSg315CprgrmBWg9MTMDsD1rL8fA9LmZy75LZ4qM8",
  "key24": "PiAitkj5sBXZSJNPWf2iAPEQbdppAzWAutwyXZbADqnuczcU9c1H4EaBf2m3ztykkNZB5toyq1X51jsci2Er8Fh",
  "key25": "51UaqZgkfa8xokvmdNykvPYVbMq8J5CHCLbJsbrmboKsmsAV4ArFicpEfwmKakXQ17fX1Hpn2MN4L4m1xDtsEbRF",
  "key26": "8LWPCrT5XAKtFFJregU5j2QdLpqXMZcp8vPevdmFUmAWxivJfHz2wcGq1bPVMeU8QpDtouhPSYawSZcsDaFefzZ",
  "key27": "jnJAcXeJkhRUyYtoGBZkSnmZ2JCwYzQUupt8Ek6BxYJ8qFStuY9fCthqNobgwVcVpK6MAGgzsJ1kLG8VShwyZ1s",
  "key28": "2JWegBwbErGrqruN15T1ujrSwarQ3pux2auMmFEFYxt3JPLefet6Qhmd6YxkHqE3BUP8cjgaFe2dwE1ibtzQ9Tzr",
  "key29": "5qTZzVx37XgZJhf1i6QVoK8XZZFtHT5ot3S7VWkNWXnuxobnXjG4YKUYK2Kn6v7WzMHWRgcZYq3kVwdPCu7oV7Hv",
  "key30": "5y1uSQzUBswrnQ7si8vxc4oWfP3cL63vLQakkNKtCc7U8mYGHTdy9FRRg7wGNxBGNLbUCYfF9ffZEzYXhpvoBQU1",
  "key31": "36HNw5GheHhxqckewACCis3TtPxme2FFt14CrMJ5nc9qCjAXeWJ2cpAp4d6jfXSfTdU3DEMrUTCvGuhZDDjUAzfE",
  "key32": "a1jpSor6BDZqdZ3EMpGfDNYRxySPoKMsBQd475VDoDssPvyK7LguT9vgN7Xp4QERCJAa57BfguPgdS6a87mGmzH",
  "key33": "VTHeoMfzPY5AJCZgfej9hfXy86MKH2dpXKtWZ3DxWVTnQ2Xjt5EVpxE1BfcQteUMH2f1itsPomCrmCa3gXro3oM",
  "key34": "N2pqLbQsd8azM8ZBGuFuAB3D2weLa7Gbs9jRAb2dWAhyJX3esn23MWsH5jL1uFY5RAZwEft3wEPDDD6euKAsGqj",
  "key35": "3L1vwdLAnZ6ATYHwYqcWCFyMPpX1YyMBh7MUQeMvnzeVz47YYEzdwwngbfLQfcFVS6QKCagehCKJ1jPRScFodDFn",
  "key36": "5xheQU2pbiQigA1yTwt9PHe4Knswaxigw6fFeEtQF6XGyv4QvQYXHh3gxXxijhLNEy8BdSbwKfHdpmK81a1n9fk6"
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
