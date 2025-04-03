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
    "3mJ2zNxwfmSREteBQt7VmEQFLKvtUAv6EEteRcCa5XLRhY6UEvvVPvANXKjoetZvwR6cjm1xjWsLw3y6GyFnbpMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKRLTHV6hpL3GwdN3vfGXZn975r3cL6K2Ac9qEvfaRzPPeinn29e6DM2xZYn78rT4zbt8K86NTdJEQmCEQtqy3c",
  "key1": "NXJ3P6iLhbxAbSQcisTvTPSzRXQMD6pu8Gvjzk4cSELeja7MLQ1FxqZnfRpESsw8p3ybR3BQTytn6WZM25q9sw3",
  "key2": "3LS8WmySmJs7iPZQBX8CfxzYFyhe1UspWRDVE5RiXdSp7C2rAt8bgPHXCqrXJYbpU7Tv2rCQQ9dc78vTZg5exKow",
  "key3": "aJHVKFfCTH7DFyatkMQUBhDs6qb6Zn51C9WtpQoLZ4hJhiwUS19dWC8xbCGMJbza9Xo6RLgf5ERLPevpuLSSLNF",
  "key4": "4vyjf3q3WZAy8wMVRxik4dnnpduTeSDk9WPNoLVFdzxX2JKdias8RHfApaJUvF1UFNZbrfqKhZyxXv8cLCRW33tY",
  "key5": "2VvWdeE9fqzZjtVPK3z1FGhfH6zydK5MakDisVig8jCTxYxqS3SVfwAAuWhsTvVZaaEW1PGmo1a8zAr2yjH6AAYM",
  "key6": "4cWwSobXuUrJuNQrK5sbrRJ6BShYnbUEM5oEcU2YgMkUnn8SyDavHM3VmnDSGGuQfVACTgiQ3wpe49rWwAqBDbnK",
  "key7": "qE6dVbCt7vMQnNdxa8uKp3fzo1ZRgGJr9YijYtha9kwtsBNeqt185rhPr5njoUiMvxPkEPSBKS2E8434F7rN3cR",
  "key8": "3dLMYk1apvTQXQoirj5CxerLikHsCZ85it1QrBwf7PcMkhiyUSPssEVhVXNr3sw3WWMq71uzRC75zf4Xu1HBGeWV",
  "key9": "3wff21d7bDFti2u8AYi2afda69QneBogyaenwyD59sKgX24EajWc1Md8xUwsxMd69fRWPKghpPpDERwf9qtm8pA",
  "key10": "4xp5XunVqn8WJ93dbghniGUQTD3WRuxBD3iBUYX3ybPp2tRXU2vtfBnXt1EzvMDfJonYKSnrxb1VcuDKWnKVTWcV",
  "key11": "4q1ucVvbRF9HBvqE4T6EDzgXMZcvMeWwZ1dyz7a2xB3ADg17sM1w8zqSU776XE4DZBLhEJe77eDFwEPNmDMDwnjQ",
  "key12": "2ViUqfYaCkThkPHVCwDTBwSdGFtcDGHt4JeJUiDquYLv8qrveUmZeJqctoMMXtdxsGzpL77zuyMvsbfpdxMAhzVk",
  "key13": "32GUnyu7Piwvd61tTrj3UDLrG6raFTeuGoQHKkfBRhRScsRsxuM9VdHQRM3nBQjU7kKe1jYHnzq4ohT7HCufc6Ws",
  "key14": "3CHEca5Z4dXvgAB6Rd3juZMhxpSCpuJq4jR2jmbv8SLvEY5uuYEav8da2kiCBa53sa1k5Dz43CwES9ioJb3qRgDy",
  "key15": "5Si81nUmNS4sE2Zpokid78V5ZnDPqMeyzFSEG3AoR4uDkPDTAZME9TUSJBjurghgh4gKsPex9h2ayn1QiQmvUCCv",
  "key16": "3ukgh2ZQ63xmbfuP7UMwjTTQ3Zk2We4vKZoPBLVFUeA5JiGnT51BdFcmfm1ZvUqsM4nAqY4aQE4A7n7v7B1rjZ87",
  "key17": "5JF6hAAXkacmbKkwoRv2o4wuNtDRSkTM1R3i2sss7Stdo6uUVboGNaZJy9M4dmkLHe6pTGxWrBPfxGWpNNgNEpVC",
  "key18": "BYPToX924cbJTwGfPhMF5SncDSnKoWV4vPKDksCdMah4WAAWGueXKMKgpdEmuu6cYqd4FEjviPgMgHEEC6um65p",
  "key19": "p99AbAqPgWLm1HWYwqY8ivY2wMjbBvbiPqpJwFvukNAneY11zfs5cznf5Bp7F3mx6GNqeH5XghKphZEmmip8LJC",
  "key20": "2En7bW685egKapoNXLzQp6YDg5oL6KpWV9n35uzAEXF4qRr3HYXz24uFbxyWyhRW8D1fqL7WNrxob2FJRqWCVZok",
  "key21": "4Sv3PVJ3MejrJXPuEonPhnqyvuQ2Qji1xXFNm8FbVQFRpTqpwf59EGAM3pPDz3jovMjR31QYdo95C97t2PiLRCvD",
  "key22": "3cozofsU5pp1puayT8JyRFKXnmMNPJVCXXs3am6FNrtboTQTFXs3Y3tMarbad2paejQ1Hb9tCNNsRVE9RNEDJmnx",
  "key23": "3FTFTPCokdaiont9C1sm8H7YPMLMGoxcABw2ZmtguEyoyrVNYHcytCmGUDu5Ew7YLLH3ZyHNzn2JyuHnQ531hDdP",
  "key24": "5XzLqCgaC9gtzoBq4LCSBcd61iJyYprVZMeECnFeTYEDKgeZvRXTiPMkYdtaDy3JuagEg5ZgBZLAWtaRFSdtopFq",
  "key25": "4zxkY5FwvktzLTNa1ZQUcGK7SGTKEiA7Ls5At53aaTtz8BRpBux633mujW5ARjfY8i8wLGdFKAM66ptSgSDa4PrU",
  "key26": "4ynpBYdT5sr98wpQ3Bd9WeuWctaD5BnxjcMduPf3sJxzvNpMuUPcU3WSxqB36xe1Fm9C1mM3PAaVBBM3dPmTNqXA",
  "key27": "4acjQswjaqQDgkAd7ugqzpV1pzuFD8ydBSYm9X3xXcHaoj3bU9w3z9Yh7LwRBGjKiaG9yijsCbZAZdgqTFAfmsmK",
  "key28": "3y35VhKXeNRv9fNmpcwuDgwyW4xuX43z6yFYeKFh4uBF1dta1sUsoeBzXX2BzZTM8rsibon7hT83XThSoLvMoGM8",
  "key29": "3yUNK2Xy43JLYVwAY1zL4MUChksZowDUDELEnZqJtMW2axoGuLFub5ra9PXWzLTAb23tja8X7LFvYRrvMVtb2Zp3",
  "key30": "2kPcVzbJ9LHg6m5vrswDJqK8VHMZCUTwCE4mMobnfT9AGmbYKfvELYgNjoQ9o6bvpd92GgdKosd5d2YBxqur9ZsA",
  "key31": "5KpKXPGoLo62DPvaugXSveEwqsESQdtV11Fj4xCP395At7uz4eS7xsBDUUJL6FcEMA8iGA67gJaftTSH36khhewP"
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
