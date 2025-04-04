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
    "AhcdizgsXoyd2dFzpCoy78AYqzgNVWhctf9WR4TwjC1niE6hfk9wfWqmc1zmqaqkW12AhyQnB4PVCD2N5LgRFrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sf7Tfx8SFBYx7VHcHRcF3dxj4yZY6M3xR9L7M1KMnnZexthzuQGg9soeb9vHB4ZtjuSefaXPhBjo5bzhNJa8cbX",
  "key1": "36HyhMaS745YkRDLLt6fuEdBr2BCSsCRprPA9oP9G9RDNTfw4J27aPYBFWMXtjMUgCdF87VR5Q7GLgixm9C2Zbbg",
  "key2": "Ep2B489rRD89TJwGTWFtYvcDQH8HVkkuZzYRjY2r2bxFmEyuUAUWp3HwYqDsZAEPnoE5SUtR43Xivdqy4PYcL4m",
  "key3": "5W5zctTqGSiVvQc8rRKfHHUjBxHMgXs9mHFfsJL9MC2qDEmbLDNkPhXm5f2Xrn5m9bA6cpnX8xqK4SJesZbWeQ3r",
  "key4": "3M4eJA4e5Wfg7NCK5Uf382NdiLELzfGFqdSnL2HiL4axJ9B4Xar3RxNzZsFZhrsGZAY31mMatWrPS5ffsnncAVgq",
  "key5": "3hCUBidD4KTf54EeJ6LqvYNKhmMfVAZxpNTy4PJJuLdBsDpReeCEZWZ3GimzeAfFBEiJsyovLdN2MqRrM2NGYsj6",
  "key6": "3gwCFVbdVhQZN2khqABiHGM8tKrYdPh9gGBU3esbtfwSinwHuHvbK4Eq7TXQG5qmiyKjypAS96WJeQUXj4dNfAqe",
  "key7": "2MVH6hb4kh37jTr26CtWg1t1vUPBv6gpSKhE9P59invZF7zGc7CTTpR1dHHkRTacgxC2kXVi497HzsCazeXpeqwg",
  "key8": "3neUmjhzTt38pty2ebZ7QGFQ8yfNSG2HQ6tfLzp61zGazfMrr71i3FNRSTxiqx9hjjfyyJF4HesUfC8o4jiSKYSn",
  "key9": "4t4SBdPffZDoMN41nHTBjTxBjegqRpGVNebwcGdeVQ1oatLFkNJqDnNoENfjRRUcERnGPMMjrJ16ECitquygkAcf",
  "key10": "2Q9qdPFMBNxz9NYJJtM7Bjh3DGwfoBPXK6qcFGMDAKrBcCxm3JCkXpYqyFd9bZjQ7rJ2ZfW3HgACpJd88KTcsMwZ",
  "key11": "5XRtxkJVPdZfC9o5Hhi3tUjA4PtYZiGGVE4MApFHPeqzZ5Br455GLyHU4ZfjFTQ8qBVCreVQKpoQujsX7NX5uimp",
  "key12": "TH6VpLFY4TW3xpy8tEo416Ci3TNmX1tMf9auRurz9up5AmTjv3AweLjAZYpvDGaZbWamcdqdU5cry1SXPnZCdVA",
  "key13": "5WFev2fmVu3mG6o2w4cQCHEn3nAFeD8Xf5sDCCMEfCEnTTgFPyUjf1FRbbC735TNvwZo4JWc9pNGEzPHwGdNV8QB",
  "key14": "3HPGvQAnu7tWECE71pJ6sAAcgH5cTs21Mt7WaoU3opseqA2eP5bHLWq55ZGeCzpUSMpmiRhKuZx9Hctwoq6D9Wu3",
  "key15": "2soeD87gifiEdhDL441xquCBLo1iaSxvtUWRUs7gKXUBqfevNtG4M2Hz2aCPm5AxPPMasRkb7TcAZc9Bp2KNje1C",
  "key16": "3TVFjnjrFyPXFs4UAfBsGCq46FNRYoviDb2kqxGsaMrf5VgvNaQLk2xV5AX7GT2qNSbR1dV6mHt22ptahPMLAjZz",
  "key17": "374FgKNGUB4CuFwTeErHSphe5PrzVyV7xDettMCH7kFHtAB6pw6S4EEZW18PmZRPTfuiKxh6AGGeFrRZ4JGSw22k",
  "key18": "qpKXKm9ZFfEbFsoSRX2cPdsCGqTV7aduUJpUVuN3Bt9tnFwxQUmkvoC5Ja2c35X3rfehddfezfUXNDajd9rdEfk",
  "key19": "3wj4n6ykQHFyByT8cFdcFtDhRjeCjzT3awtgPPFkeYMWAH4B5WJnERuxa9hBtf8QAGp7JmUtxr1sbCUWQMRvZeR",
  "key20": "o6DApvdWbJEwcZLzpia3jm4xeVrNTsxE53jSJByE9Gax5jKCLWz8sGUyM5meMpk1hcKJJUch8X9yt55Aj3xZ4Nr",
  "key21": "3RSfAjKubGC9Goi2icmUaaAwByDySECnziNRimhrbQ6YL2hshroEzB9QaPcpns5u6SCoeGRv7M5EKFD8Fpm65rPY",
  "key22": "2PgNd4CcdUU32qF272wfETb88LbrKovL9zYxij2a6jkhpS78ubatPkFHTgXzCoLmQpLk3cG2m8wvoZn3BqNdpDAH",
  "key23": "43QztihwQyUALnNDj4b1gmnUbCvaSRJgHRX8D7pmweqmz6tFcUR8MpfwdzbFWBheKMhurYR3cuoS3RdDnqUbXxjn",
  "key24": "2gb5E3a6rv6oLXnhggLEmDeN4Ehgti9h3PLRk5eXGCAMRo959W5PBs7NXd33iZTWeCPPqTKt8C8ALYuudtQ5MQPo",
  "key25": "2AyXjLknZ3DCqeu3uHSzKQ14T14gY9GTaUufruSS6zyGavk5ezfgwnY2MqPSgGsQ3EJ2BL9YkoqRJgvjqtFF8hjJ",
  "key26": "4HpjH9fNLdEdTYst1tsU52TarY81vACruZMvNCVX4Dn6AieoZDuoraiaqMnPhAq3eijuPmcub63MNgaoKu7YFGzT",
  "key27": "Bpf7Cw9ABjMDPoS2AuzFmxhQaKQNQo9m7keDUwxaVbiPvDWgUXdboJTHLhoB5CfYg32Mqkrqg1vV5wVeDM1dExp",
  "key28": "rwpXiFnxFJfqFtocxwU39ahuPCgtfzbHL6CJFXNmm5J8Ypv62QTa4nBvGp6RBCiDav9KRJE2pzfAjqMK9E6UdeY",
  "key29": "26zZJ3EzKVxDxUEruMrNFbmEK5qgKYthuHstCJzA1jmyLaFHam262Hznm25kPKDGqBj7LpmYYHQiG1FBSNUJdPBh",
  "key30": "hwdTNSQujjep8foQ69WtvhZvuuru83Sh2fStDHa4xQuE3HrtbwakwCYLKeN67gVnrNVr3wrf8RXQTeXkqy2Jt8A",
  "key31": "2c4ngGwAgCCJG53Sfx3xSQjkcL6qGtiCJM7zvWkE4oUA3sox6gBaqr7NLi2dUjgDWzmBFCVXZcLm94dC4jV8E1bA",
  "key32": "3HmKMih3VzEV5n5GmrSpZgMeorN5tYwbS1GXCD3jShTDJxcUKK38xHeDLr3ypWk5GDppwJt843czZ7eFdY7myR4L",
  "key33": "iFkQx3jvLmKoZbTeXbtVQ9myA6JqJ6ab7MYjrBL6Bc7yvqXGSTsW5s3zVN4GA8nrnCRfpsHrnreaQB1MhCry4TL",
  "key34": "3ZxiGPDUX869SK5k5ZUmYZgmuf87LCaoaf3DqxYUwhUPGPprywJvQqcov7mkwxjjYqAo6EGcxxtf4qpqwVHwmFSo",
  "key35": "48xjwW5TYPoE6CNbGpQKjwMQCZ4XFrwdWTCzUtdam96VLNRb5fsEL39Gq8oK9u1NLn94QnCxi8DaDbqATzKwqFYN",
  "key36": "ryF3ajZSjHGNBtNTioB8oykQsFiknykvspWWheKwo1amKEQK3e3hUfg5ctid62rnMzRYmamkCEanEgNSrB4QpvU",
  "key37": "2okQt4t2J72YptqAFDAp34YCv3KhadZZzGH48AsmqXB6fzLcDbf7Sf4JWr4qVSQ9zxcNPAPFqxNjeNFVKjgCMmeW",
  "key38": "4sAFZF5NtsLtECVFsohpPhmhtbSxpjmY9oyykVTFx3jhMcDrYEWT1J1GTnmdkSxDH95xwsgzeMaKkzXXk9UbdXqE",
  "key39": "5GHuSTMFXfhdBFVy3QNxZoqwRKwvLWk9ctx9987JVLmRG4xXVC1JNbLYebGtWKZmM9TqP9ZF7T2xE344ocAFZ4GE",
  "key40": "45RJE3nFqXEuopLiG4mMx1RWJLVcVXgYMHHZXFeRi6axcKG8nsPRhgQaCNrKaE9UmHBpaPU8by8xgAkYDRmU8eGd",
  "key41": "2k1AEcBv1CfetM62ZEEdTUeKwEouUgQ9Mnq3caMRaBw1Ffer1rDVinsyjC4KjLne47gmti814QRfSDA8cmfX5MXC",
  "key42": "2LANwWMLvHPNFytxi2PHcYBQntMBXRg1iXfV9khgdoYdizQqSerKDXqYJnuZ55N3CZdrW5DuZX2mPg7d1P8Cgou2"
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
