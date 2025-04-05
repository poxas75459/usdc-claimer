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
    "5P6RVHfdq8MRdpGiUJ9gGUy3yCpJsxFAGDrWb38T9yR7EFgJYUbZd4zQbgmNeXk6HeJbg3eREmpQBGL6mN4YiCkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhmoYFjpepR4beACAAj2ZZrQw8T6xEWs2PzJ3tBQxMeujkRae839zk1zN76pdeWZxZYiXXcTyj88bsVonRHQwZz",
  "key1": "4DCELEznHH2Mmz2oXUouMtepRhoHt3cXEZC9Mqxf186DTGpjszJ6gNDKDS1BQpmhmF75dhviHcJYSkMxbDt3jBE1",
  "key2": "5zTZf6dzjorrY6CxACUvcv4x7ZwRqXSQGKZcMicnSDtRM9nYB94H2cSnqbbYjP655f3DpdnKZpYRudxrE44ZHhcT",
  "key3": "96cr27hQbKAXwwdyNyY3ott5Qn59KfAMHBvTR1SYnEmGmgpuYC9WKsy2tdrFuoqrmk55n6DRyqv2MkobmJKN2JJ",
  "key4": "21hq1bm6oDcXjTZViG3uqe5utoDVAGKLne9HmrevtnBDNYXH1JSQfCQN5WQzUbJij2JyXf33CyiMRHHE75cQgqV2",
  "key5": "3BgzTS48MWmxPzx4EL8T7z6fn9CoeZ9dzLyVJ7z3KMSnWGYeRRetAuvxddx8q7dUoLndu4gqDtmXRHWZ9TwMacQ9",
  "key6": "2eXMrKVgWkgXYWHbSePRkrjs6HQAcFpuk1BEMWURXeHt1DB3RbVfMDCgsY5KiFZczDCKGPodprf4hoDSYDU2jVjn",
  "key7": "HbuRkCYWNbcC8KR7CAKYffRGwGX5BBWif1AiPrW9feXamNSR4iqUF1qJaVkgkwruvEKmhLLpGQLgKFH4BFnN7GB",
  "key8": "hS5rkSwxH9xyQeYYQyDGnftZfgGZvHoGMAUw7v6dwAKKSzVCVTkFvQ6LPmA6aRMTbA2SJkLKYUbZJi6djiJGfh1",
  "key9": "4tf1DC6maQXbSAepjVWra9Wkz7fTytRUL6C7cpEjcc8SwWknapzBEXBwKdJZ7m86LET4Tnpytbe6Jn2a3Jp2y2mS",
  "key10": "47M4K2b7dGauXg5976N2NS5EHMidsU5xE4NMfPk1AXrELT6CtWHz7Y1o21axDFPpXNVjHNyo3XCCdvdzCKKp5otw",
  "key11": "2Jngyuvyad5jfjETz9AtDxpzhdaGCtaDZyFDjtbuUTekiiosE49F35ShnXzyQvgFyX68Bf3X8XVYbv1VVCZdp3Wj",
  "key12": "523idzu1EHJcS3H4XafW3xsCchXAMAxX1pKr8WJqCUWVRTWnEJwmq1ULFMZ7r8Pnq7aqsNEMBzwfkgsotwAMP9ZZ",
  "key13": "FWWLVhksxuirmEjTT3RV2dqncYzcrddmBSz7eha6ViP3ANT5ET4ySwPt4qGSdScDSVMJJvi1tg6KaQeYP9d46pw",
  "key14": "4KY4pM8o5nEDFWf6rM9qC4LCcJWhMutsP6AcNuPgsud9f8Y8K3Bc2hKR4fN8bE6yjHNZ8yQ9d3vEcBtTZBCdLMnR",
  "key15": "26BiJ7H78giKWRGJqD9TLeRXFHcPGKre9C63u8eCiZfgtLSTzaqrpg4XUzE2gTm28atXRwiHUjieShfdVzKakJnX",
  "key16": "5RmXCyhkz44YfdcucYgczqiFqYEcmf4rztPmZJRFeBrZjPCi3AUrrPWpxYD3uB8wdGhR3n1Fp894C8p3UtuKfjcd",
  "key17": "4bxYxS6y11nT55qUrsjatTHLRYSC5RmgTzM8mByMeEWUg3xnfXD7axBpFbTRQp172XGJpN45WoHeB3FWx39n5r73",
  "key18": "5s6vmduVUQgRqgZXgSic4StsLQdY67oBQyBLRcnBfACsCzvZTfnHa12xrayNorD9apMAFC9Fha8xP5eT4iDwPx3p",
  "key19": "4aQxH3hwPyztJtk5tqWUD3kc6ddww9b4QPAoSvAdioHrRCwgwtxh7jbqrT1UZP7ZvCNeVVj3PdYajRWCCKFLyyk9",
  "key20": "4mbWqpDgQLkiAW9aFTSej94og3RMr8DZFHS9MvCCszzNndsCsYkdENwzP8dzBD4g9mohxocqA3JkWXZ7agUo1EbS",
  "key21": "2AbiakxEZEUDe5DhHhXkEAmVZSi4DqhRyzG6CkdKD1djCPvpYwhdhuUyiAz8FaiQZfQCA5R3jqQr9fRvA4BqStH7",
  "key22": "4C2H13TmhDqNrcWMUpiuWDr4u9CghuX9R1ZXiKZH9cujbpKMWgXjtRg9tFFLP1FkjSjQRJFJhyjucUobbtH9C7FQ",
  "key23": "28wDz24gwXmCLGMLJxqiEt8DxAqxDFHBRf9JT3dkeYSshiC8tztSaTYiZhbPrNLRTfWreCJUZ7HkCmTCiff3e1KH",
  "key24": "rr7vcnechmRQwmvrE3CyLrSMZN1nq2Uv2R32M7hdbc1889cSnwP1HJx6mKCVRE5nX62BV8NLDjUjUERNsVsn2Jq",
  "key25": "43hME2v9yiwSELd1m775s31GsUk47s54N2q5PGZYLBib2MpNuvuXVDxqvst8qwvqyYNV1vuNNr7poG16EKmWv8j5",
  "key26": "2ZgkVVq6EwJcjrhQDLXFtZCZgLWYS3wGZexKs5AUwBDus3aZ4p2KCmtTE6JTJDqTYBkuhWgpvHV9fNHQwmrkuK9C",
  "key27": "nucq96MUQZ2mm6oimPuNhRrKiWBTDACtkDYC5fZC8C7PXaHtuuJAZSLMNPjRBVhCQTbhEi7Dyiw7GSXw1HycTGr",
  "key28": "4aUo6QEcBNauozCXDbqaEEo7YqDFx8rZNNWmLjwLiKUnvKyFE8byjvoyFmLKikCGCAVgUsqJM9XUrnCMfWvqwFTB",
  "key29": "57NK4eLHB1aTLHXKgS6HYe8SFPaymMVQcXu2wdhSLYaD8mpTSpnAaXoTfAysqrqwAsa4CvaGr299BrjNzyvpYVkr",
  "key30": "zpXuAUqKAxXDPP7S2kAE3mxZv6Uzunav8NKpU9KQWGJhQfqnYCY87gPZqAv9kgD6j5ZWQVEb4fVoQDpXM9FqHV7",
  "key31": "JUuvzo7zQhKgsRse65FKkvdh6y8k6e7KGEsiXLYGkZt8DLQvJGk6ALmm6pLjfixp48iFsWx9t7SirwBamNqJKKV",
  "key32": "5EHXNXo35twXdzbr2Q2G6Z41F7ME3w8ArL6sDLbXr3vhyxKbZ2ZrqYo5dTBoBoicfoRR1nto9fuA22NRYEKKVe8o",
  "key33": "4bPWdsYScevFpHybFktFwZvgMs7j9QvS9YxKGWqVZBx4qGpbLxnjey8SB3W9a3YpQDWB4ztjQgYYVnnHGrRhypkE",
  "key34": "24YBixMFxyzG6iMsy76CTArmAYQrDWMkFMTSnkeHE7tB36xdzvg46dkyVoqeTQeBdfxbnDcWv1Bzzy7jQrnfCoVj",
  "key35": "2D3s3s2NCX7AHRRs3qYCaByepkfV3jzZwMYJFHRGMcNpn6CjjQe5rK4m1HxApWoGmn2vvse72wD58nAr2smk2zHf",
  "key36": "brJAEPkoJ4A2vUgyXuaHrNZFjKGLJ1XPKg9wzjMd2LXVVoBi5VMBvT3cCntDmnPMiqUc1q4x84YNbQ6pG2zmhFj",
  "key37": "4ZdUUo8xWeUgD3kjL72NkqaVdMAxVezzgnKiMKMmQ7vmCEWw8T1Mpmc5huewTDEMA31TQp1z4FabcBdRM4vEg7H4",
  "key38": "3pfnvM4EiUhsBDyHRJfx2vPRTwbwC58N93Rua8YmB9SJT7eoPKtAiYG2EVPPWPo6R2dHut6VzuqoS8eeifx5YnmF",
  "key39": "5vyiK3bbaQJqKqDjGHEHW2XqVs3QiQCPd4rJLdyQv2S4AUdVotY5NgWy7LJAik4KYnrxfBakL7EUJd2mcSGnW4YU",
  "key40": "5PbnPbTT5SiWjcgcQRQ1sDPstxCH4zXhP5HN7kxy8iAFXPYW2rQ7NLo8TiWg2fkjyTciMEBLdFFXCHPi7J2i7U9p",
  "key41": "3UfxM8kTDYdRGashZdRYCBCqcznTTaR64asfJdhnKaovF1ZUbJRUQ7ExyT4h2Z9j7H7RzkCf2FBFtDJmMKntNzMQ",
  "key42": "8dkC3s31xS6RNtbXAWBQzbR41Wej7fJhL8khTGN2AhQowCV5RTLNFqyA4KPTo5hYhQvkPUwTS4ikhxv1yG34kjp",
  "key43": "4aqKEkA7atX5K3gvbHboC2GwTbejrwBFbhC79sVCAfEEF7vmSiU5jV15pjHDjchGQXEhGNs9SRn9BZRXckHHjgr5",
  "key44": "nPQQoTSRm6wUvE1gdMppxmXctf82Jn9L9egTj2UcveEtzDjfgQRd7o8txqQFuYLsQbekapHJaCcopAxDtE489M8"
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
