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
    "5RGmgYvUsAQEuAZyGfdXPjKEwyomzEUXakys6inEJKoVRAEW52ghcSy43YFYaqPQu1ps8oGM77zty1z6bMNBK4Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TcS9J4oWaKxpiGZBvQTWTBtUtKHAoZj7Rkr3whYn9i689EM1jT2AhqZTdw9o6EEsEXnnEEe2WfDCxJmgvMciZy",
  "key1": "5UWazqEk1qw1WfegTYWTxYFgCaiGkw9QkaZk7kSKBuEQmggT8BUYeizC5tZD8eFBS8zGp5gcFfyZum1iMXmvyPUK",
  "key2": "5e1CmKknjcz2zsoaDHDRVY5mBkj1FqgfFQfzEKnSdVxA8zciwL7TsmrFZmfGpyEP5sHMcLwY1Wep5UfgZSsrH321",
  "key3": "3oK19PQvicnvZeiJjPkXP18SuKN6pGFkDRu8DN1qDn5CvPabWLXVzYXgLh14ZQGnoiLKAf6HkZrUCwXbRu2Bt6Rf",
  "key4": "26ZHSfxaj5CZbGU2DuMq97trxxk4eQfHx1fHcnS6DuSJ7msBnQXLGgoKGgvEcAZZ2aNQrCbjKQPb7kQuBWp3nzfj",
  "key5": "3dpE8q11VbkYCUuMXDp4bqfyUwQTXmsEB6C8Q5qztutrvEV9pKH7ttkKSLY2CiWRULTNGET7MX4WzdyaDHhnrggs",
  "key6": "4CXXpeaGzjDSdGQnTgn92iWND4koxgJZ8738zfpSGpXWci2VE6iDzx5oYjdJw3d695WwkBV9ZGBbeybUrXKaLkH9",
  "key7": "gTpDa82U4ayQVayKZMSx9bwZR3eyRUXd5qFCjy9GkaWcKr1NHLGvYGbhL49xu3SkeURYqe6xY51wytpj35bYVww",
  "key8": "3zr5CfxhcemtL4QBa3o7prqLm85ane69Y62mFQwEuV4ALDQQLqzapyjqRfuT7wLZ2DFeazDHZ5KvAF6Y86tjvt9p",
  "key9": "2P5Qf7qPAcPsULdvdfxYT84fbSYWtRA7QidDjLebehxS7apcjA3n2h7WpFHqvtBQrKQVHtfvqWbmrUYUndbgLoTh",
  "key10": "5hzh5Lq5pCiLEwGL6KYnM4Gsq5iFHK4Z4dpS12XEY2vuwon8BSzwcjTRA2V8f4PAiA29ZkmgJikSD3e3toNX64WL",
  "key11": "2VaYuqNQsXkS7rgLBvGjvFTFrxGiQJ9Wz97M68eppN6qpYhpGQtGrp6h52AefV1K74NqhWWL1ph4pcqsPWZZALSo",
  "key12": "dp1fGPiJLWwzUubmDdvJkftwki3XsRRFMNNvPVhr7QaSEEQTmoYqiR5rQowaX4vMUCmCPdBC5kRZUVaGG6hqm82",
  "key13": "581qX41rBo5nGHiVzew1DKt5j577cN8gnAdJDUSiCCFKXjrngSLudMxRX5CrWEksGp14PEmLdQnRHotReLdDzM1j",
  "key14": "3Pjq7NHXXo8XfM2G61k9YPgBipFJJTCwzhMkUZTDn3oJ3mWJTwomediZMFsEGqgvPGjByyZS2UyerADCBUxBNF77",
  "key15": "51ivHVw6np3XpLu5EbvDc4vMTGthfkLJ4hTUU3ot9td6jzKNi3RrVSJoEKX3EBfDzfsq9zf5G9ju1y16HQ7pbDmC",
  "key16": "9fQbaDQBNKCQhZiAQUA84ZQApypGhCLTEzNuitKH2kLZBqXhNhd243vnRQ8GRHTUNiQTViUiervv6tKaDWE4Yq1",
  "key17": "3HAcUzLRRDrUMQd1ruWP9JrnT1p2kEW6qbnxYqJ8JSVQKkZ4fFfeFfYosSbkEi7oscWjgqLE9PbFUxMAXeGvNJvo",
  "key18": "37GthLYU2RmzDJgvVx1RNqnVnDKYAfYgEKSXbeQsXsxbLMpB7SXKicTH9P4R3zPy6fxCHcL7yUbAsvKz3fNPrN5N",
  "key19": "4zimsYhb7ggTLy2XpSmJVsgpe4QFwRfK6DVb9aEuF7WfnXWk8JeTzhhfP343noMBeREAtpCsV6AVPsTAyJLHn5yM",
  "key20": "3vqBTq5KKDXP5ZxVf65JgZ84XR35BpZ3QhuLPE3R3u9CZGRA5zTZNbGsrroNrgJhGr4XxraUfDHpik5rQQBUem75",
  "key21": "3HpJHTB1SRLgcHPPPdJUbvcSJZsiXCL9rFoayyzhMkZwG2Ldv81N5YhET8K5BPe5gHtSB1PJBVGQx5mwUxP5CQow",
  "key22": "66oGbntc9WQqoKrZkJ4WmqUiWLNMKRuQTtroRihiNA87Xch5AsczJYDY4RJsJEFuWdTiQrNYHAX8PDQWedy8zTLi",
  "key23": "3VUK3ZV5v5Ubce8SPoq8tBUp98NDZeqpZ5isaLj9LareiPQh4qhmybvnUUiYs9xvt4nnGFF2rTs8Do9d3D2F3WUW",
  "key24": "2hDMhkZkqsB4Ycpmd263feQM7EeZM45BWXgtigEyAoVR5RW7HVn5VYQGE7Eri2dvUZMkRmYKobzdnjwZDoMPUy5u",
  "key25": "556rn78pVpwNTTM7PBU5uCvnehDXbBTJzWHWpTiqFdMprtNeXUTJyPY6gcNbhLF1ZUkFHsHcFdoxdtgBMxjtLaSR",
  "key26": "3RxaYiZuBYaTUMKremBEXRninePmGb9D2CfZPgJUjxeNfc7Ki36MQGdMRrUmHW7LrUEV2Nfdoi23PXeJTFWDeY6K",
  "key27": "3iEAX4xPgiFQJsyBJi5QRgHGnEMzhYAGXCoDZdbQ1ZctoJSMXCkZ75uA76V8poNmUP3TP8zyN3ojhCiLcyqHcP3",
  "key28": "4fEy65mP5CTsdUw4JxG39CmH1YQnz5sGRxpXnzqo566yyDnojxHx5p9upb1VnXgtuuucf9Yf1KuPVHpqBQdLv33H",
  "key29": "oRpJd24h3du9pDaZ1NNndjEXS2EmRndSrj1aN9VaG47fNfVLSv4fVon6Uf9SoCTRB8uxaJBrN2qa6DuotzuwTrL",
  "key30": "57bJhk7o6wibjPBd2cLsa9PmYby571c8TdtaPukWrv6hjS7oxfyxyy9wMzZofGj2Uqq4xzqMVHp6GdkKKamHytkX",
  "key31": "31UzDMknPkiBAA6bxmKRUoXB2BPon1c5TzPr9Nq1SBeJsjMBpg11hjXMWTS7o9L2GkG7611zdHnSYzU6rikdjTC3",
  "key32": "wbzmsNd4Faz6ffdEYNGN4dzii6LrPTmKxTUvAqk1u4s7FdB6DVA7hUkgqeZNqDhgXiZiRfGP7KKr932nUCdazfj",
  "key33": "3GUHqJ1p7R91VD2Xi4srgYDEwvuJrqrLoAMaczYAX5RMC3rJB76C7j9JbHE5oTPs3JzWmFndUFzZospip6gEErJt",
  "key34": "2wcYNbNzqzELSa2QWNpE77jRQ7AsWM6SrccZzLhYYzXn73KT8rV22P7i3QpcZ5GmVRUmupHxHRpYkve2PwjEBT4u",
  "key35": "48XW35ks2oo7txYXXaQDUPAerTMvqFFWLVEvgg3e2ikde2oCqXLzFMRcAecmbnhdafP9hoEHypj8k6xrrDK2H3xW",
  "key36": "5SUmrMGqEuo3tMXYNQvkyDutH7mKzyGumNqXNXLhb8FagL26KkoThUe3wu3MrawW5cLA3See4qg7q486rz7bUbxc",
  "key37": "4kAdtqBMbJDM7WNxaokbcKBW82YzNhjfkpg6qooXrqM9eUGHB3VYyKhoT1jRWu9qqhAVfiuLPRgrbTD3KM7aVPT4",
  "key38": "2hKCZ7LkeYiis3wo8zD8vUAeGMyUTyk8W124tDxS5JsX8E6FZwiReDXZnnFVFDW8BvdQQB1GBkgb7UN7whP25cNa",
  "key39": "5FBW4q9CpAWcvUgtXejLYc2cVqBXYPQNfbg6NhekXF9qQ38spJ2f4g52zC67RHEifQwrJ4A6yRjZ9nrS52DebAFX",
  "key40": "3XDi7j6HX63Q3xDaHK9aX2Lkrm2vbrHvAQz7bicACuSzQHC8yHLSsgF7EV2yKRNbjsfcUSjb8M5YbYpGnu4kMuh9",
  "key41": "QmR3ovq5mdt6znDDfYGwKb3sroFSwBtRyTu7P4bygeBN3yTNh6LXGhenZxNycyDKGPYvLBcoixM76tfNRePR96F",
  "key42": "3syJvH9gWFtKqgF6MZ6XZK5MHAfvoncUNYEY53ehe3MDB4LZ6jXbVoceysPgSMkMXbFqtmBVC6eAzuFdJoS1DWX5",
  "key43": "5SB9Gaoxx7Hipp1fCrk4uaYeGvTSjd5iCf93RAue9Q85TCXwy8RjQFQLNx9nhqRCPeiRp4dXfb4NrVY3zg7MFsox"
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
