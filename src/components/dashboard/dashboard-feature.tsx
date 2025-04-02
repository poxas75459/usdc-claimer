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
    "4RtCcE6YpLeXZ2K3jsP3acMtyFd8AnYp5vQKHHwPBxccXSAwZumbVjmqwHBMEBcJGbdVDey5MPeTYzevJA4e3uU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxvpFbwzhCTk5cNErxJiu3yc91bTz6vLyxRtgRBQLqMjuhos8zPgCzRJ1vo9qYdDVMx2cxoUqdpf3iSFXX147U7",
  "key1": "5RcpNSnzBgtvYiZD372ZCSx9zJvaMXXNYviENuexayYML8Fj3d5wF8w5Gppjspq4Z43aaaWWP3rR49nnqW181XC3",
  "key2": "5AoVgFZTbNSA41HEHggEtwPiWuFbQPUdB3jqVG4cLTXDVTXKsGxWcgSvgZc3xdYywfMPCMdqDBKVUgzitCqPL1nq",
  "key3": "4tpT1Kdcma8ZgnGiFKJJPy4VqLeANe2cRHKoqGNcu5jGrmzoXQZd5Rpncc41LeFe8QNeg6RFSfZrjMag5AscPRkw",
  "key4": "56kcXdRXdD4bUkQ3DW8GyPUAkzDA6iGNyy5Rrrcs33Z6u5WjhxUsNHmp8tNtkhR1a2vzo3RTtYLxtcaHpqxHyLrb",
  "key5": "qsrJLsokEMuecoGB2Ujx1hfFGaanHGSNwrDCu5N39XYrNHF9TmD6iAB1kVzezYEYaaC5aSUGvfTbTFe5bzSQyLx",
  "key6": "3YYBaAQcohYWcyCy5XZytrqDj7cmTdNe1EL7vvsWnGL3HwEVifbMY224r3i93RTF1aWERGvnnvddh182zr4mfujd",
  "key7": "dkikWJaHVSLthpkjY8AfwxFTD17tvZQUdAb7Yd2WbCKjDLdaLxg4ZUe36jVTt1QkRaUVq8SwSbZqpQSvGDwZ9NP",
  "key8": "tgkV2Br14jB33tfqDzx1VYtYbrsm8k71K7U9Z4i54sy6QJ3fa62QmZ3dEW17CL4N1HZgPfFSMurHM3GQNfkqA86",
  "key9": "5fWQXpeyeivetnA7HpYmEmQgX7tGTXu3FMHtAPqqo9y7TNMiGMhD74oqynEj5Akp8wED7gsaurPWjJS1LVsnWhLW",
  "key10": "2sPnGuahJuTuLfyqEeeaiJYbpR3bS3Yk9XbUTqcRbjGm3zyKQJfQPk7NLfMePgEE9D1miXrM5Qr76TN6oF2nuwrS",
  "key11": "5HAU5owZf3o2wASLB927LSqWjD75ntRHnhdrwRUBRL93UcgML3T58tF1VUmr9kjErGxVzE7kTxXivqJVmAoYbeZH",
  "key12": "NeDKnwtxHk6k6aVWAMvmmtRWez3Mo28DfWKuJJ8gwS5V5QgUFujH3nof8KGnrK47LK8KawnuWsmhsxgMewn24Ph",
  "key13": "4DRr6iAbAe6x2GNe9rbtsSfAeSyKV3wYaciJjqLPqHAqhnXQstsGzhBKrw79YBvzMb5Dbv2cHAnEzCaw6k9zoqbc",
  "key14": "pXMLG7jnt9GLABK2d5rL9JyY9JSmAksMQhnwpUMekW8aduzW377BtA9ZYH849cLMtFCRjz6XvCshYNBsswwDPbS",
  "key15": "2PyKf457dWQaX9TmX9JVK7yd7KBKeAArmFXrdwQZ6xtL89udPAPvLjwEJHcG26GwH8ueABpRBQqZ41BpTDZHirVJ",
  "key16": "2rdckVgf2KKWLVUsLmLZKPcasWaafJxvae7noDHBVWREuLu72kXSgRWAK6YX18gE9pH9tzcP7NqLceN4ApLUus61",
  "key17": "24eTkNXNCb3DLf8a2geTYpRvzE1Ff1FasUtLx4AYRzNdctuHHBUDAHNWkHdF2JCPC9zbrcqufbRjsx7C6yKpDjgo",
  "key18": "414Bn1UEcsLe5StzgEEb6jp1KCCJogP7FbJUvyBT6uep2SqhQhbFnPwA1XqgQp2tyzrfdTyT9vgRJEB3waJx7ozB",
  "key19": "2s6ym8fcWD2mbQJfXhW29VZEGTNF4M9wSSZaj3Jg9vKvNWDN3sS9kVkGzuwJ3zT6Vw7PDWfZHth4jc7UPurWreqM",
  "key20": "3djJUyp2f8vYLvx45wanLMsLJwPXB7GjVvy4hs4LN63M1j8h5atWFCdhCrAza9i8ZzkVyqseYGRa8mNTy9VJK7BF",
  "key21": "26F2NjjcxeZgNEpmffoyX9cPxVP4GwwkGiWJwW72L3CEae4hQAy4upmybhXUB3Js9TX9xvfo6hFCAcSFpJKcKZ2G",
  "key22": "5unJQNEps8XEMSTg7ZXfS2EWG7pzJBscxmLpruqHCmpvm3q5Eq4ESMtGPbZRdkFMdLm8FDgCwwnnZYiHZBXr8t2P",
  "key23": "2xqRsAX2Pfc45RquRX2BPUcY9urTktF8AMnYSQ7ACb4BtyjPeQoBUEjJoTvL4LwxfEFFbvbdP2M8pqjZyVc5rub7",
  "key24": "4bCsSWCoGJpsLpw1zWuCZhXJ6gJEMmgkkJpgSdzA92GQJt3LgrMKoFJRAiznyriJ6RU7YyW2AtYciVyJHw3A9bv3",
  "key25": "TSoLiG3LK4mZApy5WgrQNTeseQbkFWCv1bNUYvpCiCuaxd1z6FGtzbcpkyo4Qnev2ZtCSmc4vePkW1LmWitqLTj",
  "key26": "5quHUxKeBcE3pWzf81abN6U43UkomGFTriVf869Gon3yZUXyvKBocwCoxuoRkUemazLCmMHzJ53DjMecc6wgxtS1",
  "key27": "3r6aN2F2dHK7H8W9BMx17GHu8NxSHt9hcbDRDbnmECbjeLNkEd9tCyXaR6VpXwKT2EPsnHg75YFx7gY5Mxq56QxN",
  "key28": "4Gfb8cEdmMwNQLp3dzV1vmCu2vXtEQKKyhpJpWkMiWYPKUcUPuZWa34HzfbEQFF5VVuxMYrtUX92fSeJbhBmywry",
  "key29": "2UhRwQfGTrPNNTAWMoX1bLv5LhYZyHZ7wjcm9DB47VL9jpnU9cokGKzLwCHefsWjTtTVJinqwF95iquGj7Di82bA",
  "key30": "5qRjUuWAeAvwkKxuhnUv2WpDzjxyPWoP2xvwJN7vmqWmzaDrBP4HFvtxY8ST5Kc5ye9AfL5JLLiphz8yhhS72iVu",
  "key31": "3N5pEvzqAhW5wQmi5uHwz5vwFPB5AdwmAAgZc2zSfJhTEomxCFibtw52p8pPgcGBUA48s3S8xBVvTxngkwBmFSgA",
  "key32": "EVbqBwQzCW7ahKAvWS5cZih63eXUdRaYZzJZEaK6yzmesoc3CVEE18zmSLNBT8FgycDQeryykTDtdwqSACfoP1R",
  "key33": "29j2jNEtLmCywWPay1bPqg1BNhp9qj6bHyNEzgeE7zHuatHGGTTsph9ZKmmsGNZ7TksYorfPDEssGVJHNNjdwkfV",
  "key34": "4rnFFA41pBiA3RpCddLx7La6qXBK7HzFQSPSrh5iXSSTkMTHS3D5KT9fRVsTSksdqvvF7zwWscxqeDpeqD3ZEFUd",
  "key35": "4MC9ASRhY8ww3uoix9P2RQoRJ6K5pJL8Utt8FB37S2ut27bwb8b5jJmSTsSM2jARf4PLukYCAAmrspjycQiELTM6",
  "key36": "G2EDHCHEvwUU8N8QzJ4brzWkc8WUwwbLZpgbvRUHsAoXegAA467d44QzYu7v73RgBHMRny411QfRKDfa5gVVZ1d",
  "key37": "3htEtnGp16PvH4dfCRXKaFAsvs1rED4Ev5BejZjq5a9wNrpT721uvAiE1k5gZ3EFDDR88uxjTh5M63zTqmYoUfW",
  "key38": "2AesCfogcV9tnD8GXeGE55XXdMj4DgTDHoZu6ya2cDgcXzHBtju5CEMkTsiYfPktHTFnphYGkWL7Qvhxk6titeJ6",
  "key39": "4vxMLNDv5FDJn4bWqEJqoK5Lc8bKub5ReSsvmZgAxcjWkmEb2Zi6BGHF3KQpcpqLLJ6sj9TPwLjLzLRgRdmnnbcR",
  "key40": "32Cic2GH9JRSqD5B5e5vYLowM4SNpPbwmr6PY1jJuRRzJ4Bb7RPPaSbB4bYP7ahVVaBepHzedwRwrRXcWw2Dn79H",
  "key41": "i1YeW6cyvJqjeuPZKKZc9pewwPAm3BLPt7TY8WZBvkyGLtNUDJDcpnBJA1NYDVScD2jWo8WtuCYzzVLvDd5F5Ed",
  "key42": "oXFz9VdzB5sEv6hGkowK47FE7cyCbL2eYaUqxRSgGKGH2XgSS86HTmUDrcs5mF96KTuvkyBHQwqKVWfXETGcZdp",
  "key43": "3dqVNS58TxrPARAakBsWBoaGyWd9FuR7ku458sHpg7bN9e6kmf13PhU7f83YXar2vPaUrCbSW8JRhFtabTXH4p4z",
  "key44": "vcHiTpbWdBxCE61P5YyUHgEBQ2UakQUK1Q56jKZsaibxeDcMxJ4yUanofedZkqh6vFY28T8ekswUEsjCfdG2PDZ",
  "key45": "48iFHi2vi6HfAYkbz4Pcw2Wxm61Xzr1EmLAceAm2CxWN5xEkcgCJimtmiJraanXAYrDPBVU2H7CcJvE2yGpFu58q",
  "key46": "5naeWEowWv9MQojegj9pXePNr4UumtTks5pfvdE5mqgkXFWziucj3oKte9zKsuKK4yBphiM6cCkjgXaSJvnVyNLi"
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
