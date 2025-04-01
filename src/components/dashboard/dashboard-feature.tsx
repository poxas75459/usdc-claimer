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
    "33GATK95FvDdwKXdTWMqvXtBCVx4NQ9tsuQxG275sFkYp2VAUcXLwZsDexMhuxbrZ83rhgc29J7sBTPNTF2cFRBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dp78XoRN5fBvcWBuHB4N1yvxcbSg6RVuAa3v8V9tSf5GmQZ1C5cuWGNof7n7mEBWkNKpYenpXoQXPGrXsANXfAv",
  "key1": "pHpT2cMqHv5qhgS52foJ5QAF3wBoTinheGhnHfRbZHndark1Q2G9ZgAvcKdCUnejCZn5EDxU8G5MZ3sojwQBi6Z",
  "key2": "3XRSREX5ePa9LtAf3fcVDvTmFLX6e8kATxxscLg2beCyxcbd9PvZmB9qTdJ5Qts8E5s1aiBEmPMCYxCCj6MtiLic",
  "key3": "3XQTxjq2srb8uM4WJk1xSyMHrMec7G1q3kinKheyhndrsVQDucDnM9sWJJGbApgb3DvXwoq57oAexgErmSVaqeBe",
  "key4": "4T3ZTgQ2r7yhhMNTbb2uE6MWmocTDGK99bbjVXN6AwUhAvuprJptLpVU245jrtcj25hmWh22aTWEhM41kDSWfLWh",
  "key5": "4F5FeAy96wmLUroPAcALG5dp1skheChbYyueabZdCaEKhLACzcbBqqCQqNouKtR8wAnxHZu9WnCyEbasB5JWUzeK",
  "key6": "5SbzgkpzmPtmDvv9RUg56J9bi95XpzaMfR8C9QLqo5MGQAS6cmoacW7Ebindv8K7Xw899MoSUGtBynTGjV6CiLCq",
  "key7": "546bjcAAJB4tP93wErVzGVSTWjKntW6uaB6S8QcaP9PBidA9CAjvmehMdyCjdqhMF6MxD3QC7tV2hhMqnZUkiEHB",
  "key8": "4uNGrMu8eLpvpfSG1ZUBGwsLK4M2R2wTX6xk6ecDyz85x6Jw77yWA2ztgQCAWzf2BzsahcAjATfmV22DmyxKgf3V",
  "key9": "54KCjkc99WfTWxMRoVLLysLQ2Ff3oW6NwCTudKRz892VJKFkD1EcZyKGGWTPQiLSVqVrpEpuuc1hLX2hrRAKsnBT",
  "key10": "4MgtUva22fKdsRoEmddJJNHsWC6JFB7mQyFyAa9E3dmCGLQzbjfyattreodW1fx7BoqUxMyNqSrnPYLGZQFG3evd",
  "key11": "2NJ2itvrmTCXfS2Z5PcJi6P3WEgvh1rGKqTutDr9y21XEL5y3SUb3uZpab2zrgrNU5wXctDXcwgwnmvovHMddyr9",
  "key12": "xjkxdvuxi6WQmAGtm9XpW3kAamHovmC6WsGncvBvUvJcKNdfmLTVdKRAZP2ntHsTYUn9G6ouNUkU152F3wXSYgs",
  "key13": "3P35jB6Xj8VRZY5o5dRYgYECosy9tvnZaoVzQJQEAqKSrbddcSX7WL7enYLW2RpoENAXxP3b5Ag9qvZV12qkcBZY",
  "key14": "5JsioZozPeh69PTn2dxMmfJgW4jCEWKENezboAveG4piFQt2fupkBS54TjNaEQxoa1ri8md5vGdEqJsw6eHLHhLJ",
  "key15": "JTgDtUFG72h8L6WwVXNrkqNvQNiNJsj2jP4PiWoincasmsM4Adf6tprZoELbprUHfBoAe2nLm5VeW5eemLmxLdT",
  "key16": "xbSrJkNYTFfgtUs37kNNETsdW6oCXNNQLDyeXrYSVY5DfdJXUY29Y6f1nupS3H1R4jS87bpqoS7AoLYhB6BbASM",
  "key17": "5ZVuWfBbrJe39ehPjZaKc5zZ6SNveLXatRbty3umrM5WF3MXxkoqzdsKzhQkC3pmVHS6vPL4JemmKLHRidiR2Cos",
  "key18": "2Mw9KxTz7S6XBseMfKA6doUiBu2oeExQke7BnyGPQCqAeRgvJtpUUhdETHZmBdwmgqQSGCSQzutWbyayZ5Dp86wS",
  "key19": "2mGtubucHn9DBVVA6gzdfZnJdiq7ekVn5nRgD3xAFDEd8ca5u4mRkMgyeUbBnWZiCAk3rXmSEBTZPWF3WtFM5y8N",
  "key20": "4ZhzhHTegSeBKGrT4KgeyhdmNV9Ay5EA9uUfhHZkdtNDSwDVL1fu1QiEXU5gdzMPUpfes3rGryUk3HoKRk9Y6bm3",
  "key21": "3nmyPi3LqYibyxStS5scrn5eR8WbJRpH4R6Ay5iS4qTaxY9sZuqPZRPCbMnfk1buMWNsPumR7ntwjq4vgjKQPX7x",
  "key22": "2y22otB8sfSes2o3rrMFVjsYhtDXhTWz3D2n6zcnjwVvrkZJ8xPuDYQoD75pPxJKgxsgEK2jtnrosS8pMx5NX1Cu",
  "key23": "3EWzXE2dgFaX1kAhCQB4C25eSzmzJrczXbfiVpJoeuvajK63378vyjSfHekH8eH2WWrDrEsmRjLJd2EFeMK6hgvQ",
  "key24": "4tGW44m8Vf8wPPw74GJwJ5rypkJLqdDWMQb5rGKDLTgm7mftpCdt6AmU16gZjWrdqM1yNmnBPtkGP4LLqYEQUAZa",
  "key25": "2URnv2Ho2nkNKwG17T71yLFc5oRGKij1oy3vVVgkLaJGTnYJWZHUQLNHGELPFMtCfNavw9KJ1soqXc3m4YE5VGL1",
  "key26": "2NX6HtfFj7z3xvX5jmYAG21TvZbnL4zLuJQYgaa12wjhBiYFMEWyhNv7L1dbL9nzbd52c1sZEMpxNZa9GH2DyjB1",
  "key27": "2241Y218mkk1etzxagWn9mNsFCe7r41uCfuy6KxcpJ4yCXCx99WNLcKW6Wqw1LLQUdmPDHzbyVeE3Jc8uoUaKNA3",
  "key28": "3oi5ChL7Ysidn3vSGPePJzEDEDm8nYbYmSjEnphbT1T5faFsQFc6prEUeQxTppadMTSRWY7TKLF3SQ62AsWxnpfo",
  "key29": "4FXpn4su2VqLT8CQoc59LQo1RXcgGwBJMqiVRPjzVuNsdjPc6Kb7Gk9Wgdwq8TnRK3CV9sP1YSVHzEDtLFqmUSRL",
  "key30": "5hxPG1XwJk1pARVFodqTSsP9EWsEbz57HJckYA6zTSFNUXZD25Av2eEL4aNWQ7wc3bBz8iFkVzeMZeG7FWe5G2Uu",
  "key31": "2D7NPdWpEFhygmEQ69Qzxwt1Fqnrejtyi8fDC9YhpgqphfnH3Bc1oAAk6Ve8WXFvxRbWDLfqwktXsmRC8YqQfbSH",
  "key32": "5MYySgdzAuVnTAtRv12HEdn6GrSjjWjgHHQFrqMrbGUtNzUsdTv5wKVsrdYgAzLVG93tDafDxm9gK2NevTYCEEHg",
  "key33": "2BBKtqAsnzjm1aLTQbZSAVdViwLb9TM5AqRU1uh1gjkpVsX8jDiXe7Dh2ZeE9LYf9oPaXSFfCgnZ8kNJ55ZNJ3Gs",
  "key34": "2H4mpTPLX3TQxbynGNEwHZmx869MzhaHX3z7A4dQNmu38yjLDCv3d6zcADByB5aNcxVTZhBnuLvLFLmuss2VaZxm",
  "key35": "2o3NXzWpcaBn7358JPhCJhKwCeSXLqQuM1uUK2k9wY4MchMfD76MrdFVKPn1oXsoRQi5osWz2gCcPhCrV1sUzUet",
  "key36": "5JeSnMZHc7GqEZrvwrAABP4uxF2FstzdboFUesBs3ogkYvLxsn2vNpms9P45Xb1V6EKsh4vYtCrzUYsASYfpksQf",
  "key37": "5BxuNUd7YLNrcwk6sNhN8ygXwMqaSPbdkTiMWcEVn6en4ptE6sxQjGz6ou72D2CXfK6rwoCsZqCJQvgsspoUUR9D",
  "key38": "61FBPMGBX9tDVwg2LAMN1xn5h3bTJ2Zo3qAvBTrYRkDXCptK5DEDme4iF4RMvr3NptLRiG42Gapoee4pSFWVp417",
  "key39": "3JDYY8kPCXNzQYWn95Wv4UMgHzZwPYEStcPwpgGhVubCG4RPBR9u9ngkds4Y3T8Qp4K9ne8LwRMmUTdww2UmpVzB"
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
