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
    "3yrQk3FmV4JVwXRVhyRbvyrzhECEjGeUpaTkhj51SiekWkTjyArx4nHiDYFVvAYjJateNmvt6xKKWyuXFdYZ5bso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CosA99L1XybiHtnxdJ446tauLcZoNAMNf9shG7BDWq1LJkM8ytzQtDynDsCvCKP4hrmMqWXk1QnN4NHR34CJk7m",
  "key1": "4i4pGED145fLtp8GaJaZr98QczEj9MSpu1bmpKN5Vb2Qkq4TLgR7rjA4KVvT3ZNRWY4sAEU5noUkyWoqAVhm1rvL",
  "key2": "3em7d8kt8Qyh2kCJKeghX1Rf9U5CGo1cYxUQDX4pds1QP7hziXzfh4rhM9PnZmWdCoLsPKc7S1HcawaFRGvMVx4U",
  "key3": "4ZHibQQPEzm889HkfhkQjx3pp1Vu6EkQMD3P9ERBZxVAycBx83sQKR8Uv8PPWqZcY47giNZAoBRR5bcfF5s7p5FU",
  "key4": "58iswUtV7GaSm23HEGeD8ac3AxhWmGNMhXcM3FPVFqzziFBsWnBUccKrae3REEVFMH6338u5CEdDZWnxKHq24kr9",
  "key5": "43y768WMeqPGH36h68SX7D4uS9LfnV1fg23E4keVhP4PEj7hPuab5VjUBAKCdYhGqASCg4a8ZiwhYvDgV1ZEA4oX",
  "key6": "5RdVrutT2uRynJvPNavTdRDbhTMiuE6ybK7vc91uohD1HCDBx6k3aq7B4i4yBvMn4pReBpJ9K2hAKPoq5vzQ1pyJ",
  "key7": "qj76Smc8wRLngYF1Rn9t6VNLPeP9cR5KohSA8vsmJHGTcVZeekdpx7Qtf1pECFNtpyyVfs5BR4qeSxmZ9vP5Xbs",
  "key8": "3Zhvdm3zKouvazDaGbrMiTHWvnWyMMKNA6CaKDqu6pPvHh4BGnaeMRs2UekAfVJqjJHcmxFHTFdYEdMna1NeV4VM",
  "key9": "dau5SNt2NizbKeYaw4S9sRJzCiwkRT2jdU2GmeaT6hLeWQ9wSzc72m6H48brbqsJwUn8TAxBptj1ueKqboGfvcm",
  "key10": "5rHU3hvshCRKZxbTfshR9nGL2V9GiZwTkj6MdGz85cp9fMYsjbbW8raAKujc91L2ybRufqxaA8wSTAaZz949yt9w",
  "key11": "4bSgg8CiVPZW752vchmj9xZ87j5uHRrc4Bd181pYtRR4ASawHXTWU8xNM4jeC6pKp2YFen8mVabRKSDPPTZ8fk1i",
  "key12": "eC8kTHpNMrJrFJ9kWdfh6GicJLNC4h1MES58isqMVAHM8jq6sfSDZgYyxq3mQeaSzxfzdmL6rcMirz5fsaJSLW6",
  "key13": "5W4KzMzRQffec4p8ENeaBv5A6EZgVf3GdmYAKxGwmdgqks5FD4DpuPLFWydLFjK8PEBneFUrbMkNF6HhPPSBXNpM",
  "key14": "MyYJ4LcCgLBUc6eABmcbCM1vsg8hvNyEvxc6DgqmHV1YFYbSmeJNLisJWK41FqYXTCVbVrcW62KaxpkEUnUkt4D",
  "key15": "3SkigeECMkMAkvwN8t8X1MsBg9J7LLh3pn7966yYnGdqd3Dm8rXPddpQpvLnFha64DcfuVAmkTGh76M1BB52X4z7",
  "key16": "4eHBbqmmg8ympfPvVPCoHDTEo3598g5KDz3CJicfcVtMK9HCoYKth3gtVSDXH1K7UhAmeHTgFe9XFp4Mvci5X9jC",
  "key17": "Ra73d9PTbHHtyY4iVbhRLbEyK21zoTqP2E7oRRZs5sVsG7reS4fdbNEYjpyEZ5X51AvuA9U3iXHQL4DX4TJfKET",
  "key18": "5DzjyEt1pQofrkkDEHrS6xvXe7HuLy5FKK6F7P81SjZNQqANszj987jEdUeN7YrjqLWm8drrtsHVB1M3XpMgu4mS",
  "key19": "56L5rgHmTrRFGPH8yR4sPqjm94m8GSpmyp1hqATbG4EyBNfvu3r4uvypcK2i4aTQnRZRH9zsNUhsPmDfkNLu3Q1Z",
  "key20": "rXuEo7ZgtevzXi3Rczkh1m2ZQB15hxxVn7edfZwp6DYxH3qD9SK3Pi6o6jj6bvtCzJ3zVdwv1G4nt3Ba8SJpqLt",
  "key21": "5NpqSYhzhc8gh88CtVR8NNdyH5Jji9g3orehgQrmne1Kz2H8hHyMc8cpi1y4Mn6DMtATM5k8UGHx8cVFVdPhQFHh",
  "key22": "64FZByfycQJaf9pbvHyhvPCt1eYveKW1mnhctfA5DuiPN7XAsDxUcqmJxSL7Dj7QCMAZPY1CLyQRtTR2iK5sXPwQ",
  "key23": "xSDJHtxwyq7xq2icdBGt2eG6TznP2DbP87GdgQ7kxTidV4sFGCNUyRHF6c4aYxp1oo6zy8o1VPFDVbNBHTM5fg6",
  "key24": "4PfM1bNgrZTU35ZircsQ6x7L64oC5dm4PapEaRTmMf46DRosHiD94zhvD9dePh3UbSw4zZUqBg7LV7zppBF6N1Pf",
  "key25": "4cNXBbXQtDgvNTaAvEw6UrunBMFNdbrHkRJBYz3kmTmsVD4UmqX8Sov7TY4DshAHikC5aqMvhEbT6d6zNanTmTjC",
  "key26": "3cnJkGeWChLajj5urijZqdNqevUhLpEnqoS1he53MEDeUx2TXX6nx9PKLr3bWRDuLNYpU7Z4kexGNMhbATXxBGHF",
  "key27": "5SJ3tDmfePt4GUhPgNmTBA2a9arEg2omZDWjpMJYBD7BSSfCHzduy83ZEadrh272Z7cbrYWr2BJhviotGUSXyDDx",
  "key28": "4jhir6Ngp4qXmw3hQFBRg2LBami6p2UxQsEVQBfs7n2uyVF3ur6ToCs1udsKtJUE9Uj2ywfkrdhyyTMAHGdwTb9G",
  "key29": "4P2bVCkBj2B5878axUC31KBHFbdCJCynx9vDr3HG5Tqm8WcWffb8Jb8wZJhCD7spZFeLvmJgHTHvLZZe9EESCb2K",
  "key30": "3gKtWdmQu6Mbo91Fibbs2gt9725G7iQKeB4DECyzgT7LbSYNT74Fz9DMJAgaRtzvZv7bETqLdBdqnGdm1tbBqaQ6",
  "key31": "5KQ3QBSjH2i4giYauzmKQf4DPjyuTLFEXoMSrdcaUB1MZZNxt5hcWm5ZYmQkdNvB1sAEYPWFsNoYz3HwhGADQ6k7",
  "key32": "5pMco9i3GFzrv5cR4u5MnVmjp1z6bU8uCjsoPm3cSiyhfnMm6QWdgwDPrWqyTu6zESdRM789Xcw6qdPLtcm2bfH6",
  "key33": "3DxmqhBw7mHd7uX3F8y6gX8TUtQYt4uw1XenfZPnRuZ93XNe9Cw9MSdZZFQBsFp5j7p8EZmTVoPYaVTc5sN3wAbi"
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
