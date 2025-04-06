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
    "4yqwFkpRv4CVD4inVaY1fbmh2E7UvaWt37zr8ZaeyM8AxmtezRwcAbWF27bYEt9W3R3KS3P76dWc5X8aULmanqzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R61SV2Wgg1BAsBWn1nSySC5PY67Z5G1vjAg5jr5SP7VSxPP3xyrLFVfUJ5ok5SrxarS1oKYgimFjE3EifYbtiPU",
  "key1": "38d7uFV6CADxixouyrD9DDiXZa9mQRg3cKK21XjZn68sMJDmfqh5jTt8bAuKuGifsre2a9jLTMWW8GJgeDWYTNPZ",
  "key2": "2QE68z9quxyHPjWwF5rm9z7jb9s2cHA9NiuLtujSvRHZZnKqQ23p4rxpk9eWKS1nSVAgbvrVCvtKkfZJ43MAZuY9",
  "key3": "24eopmyVoDseCMhDuhtdgeiyDUe1hMT7oEBEtqY7tdLH7nuwBAipGik7498Mt6o1ABee6zpbhwwajHYjLY4vVwv5",
  "key4": "GhVSNkFJpspTR2CX3v1vmdzoUg4ryWH7KDy5cXqEnmm1y2FHKjiZaQRPUWUJkos2bdTeRdBrFESmLUUiX1AXnCz",
  "key5": "2UQqFWHnkfcTtpwn5HKPX1Nis8LdxfBTTggSosmbXrooQwMUFG9YJP1HtgjfhgeY7coKFBnzVa73MZm6yepHK3ve",
  "key6": "2TwmY8E65it71ZDTKbbAiagiUeiaZm1td6KTvxBXjvtNcUCUAwJb7mjzWE9jP9zrYT1k9AYgK2y2UcMrBqXLXvST",
  "key7": "1kbn3cSK444T5XGstRp6Qc47kgVnKoU4DgUiYW9GqyF5SFMwNqckjZpYkyk6Uq6fanh9VcipJGkSjzYuYBewp48",
  "key8": "4F1HqAf7Fi4NArQHYPMdwHo358yTAWnBroWfq651F85BD15sDnzCQx921iA97weANvkTxtB2Z5U5as4oru4HK8ih",
  "key9": "29YXsfsMNmgQdkQevLWYsRFvjH6wdJ3zbHWcZfJHuyHfaYocba1iQSB8oXauNsj6x78FhvoRrxrAs3mJf4M7nC9w",
  "key10": "2eBcbvkVoAWWSmYx2wxEiZAMMnoJtrhN1NP1ryThDBFquYu8hDRRhyUD1zSthkCuLZjL2Gn1eThGqW2cHtk1pUr2",
  "key11": "2moasgXJXtxwP8EQ6hza3vppK8YCnyoEZiVdWYhwPPn3bycn6HnP6YeHP7t8MLSAeTDRXukuaQ9EzZipZRrmk2dm",
  "key12": "2rt3TV3kqxycySBqRbux8RxPGBWBR2tXQaTQiLCiEEqxqTzkDpCM7wG7cFiPMK92QwRLVVk48u8tzw2pfj1qnr7v",
  "key13": "4d6yzHtRAEXLseimutMvXPVyoDPaXvyt8sVN2g9jEQAdRryX5hdVDKMwF7N1u9eD1GKvdiqGh1A7fahhpUtwKNsF",
  "key14": "3tXjjFD1sk9HAVDPi1Psd6833vh9D6Lj1f4ENxsDhEpXgsEUs2zWyEQFp6hfZ6a3Q7VHEobbnP1Fbqtw4fogiAGB",
  "key15": "3QJo19gHKd3kX5L83joj7iT7phnpUFBfSti5kbqB3Ce3KY3dgVBvsKPNeC7y57k39CQ7z68aF3f8BMyb2NTnQ4ph",
  "key16": "2bdKnDuiGb3urkCdfC2tLBvbNMQrUTYB1dxCBEH6Z7SPF64c2ghoc4Frq8QAfg2HMPGyPfdKnZh9DCxtbYKYabNG",
  "key17": "4Tkd4Utof6k1KFTRZzqjKeBpMXjmWqZgfE14NCnwhEKK1XNuPLeEvxs8q4YxC1ctjtoZ9Wh8ynKMBJDX4h4ffRC5",
  "key18": "2GwumF93Ycd2uKtFTTsM3CtPuypo64mRw24LUf5zavyYZZg3NDyabjUR38FZ2pwHmLrrRJWDwCZ119RfppV7xZWe",
  "key19": "3r9CvHQ2WWL2KGwzcvVpQSNEQJ2uyjEEMnSmY9v1uo9fcHG2stGP9BYZgSwMCofHpsJjsFC4q12BydVorBFJ7qYA",
  "key20": "2esHeRWJFLM2x19iW477ECTW1cpPRHsajPMBwE4zQ9bLjmSJTaoi2YvhiRu1bQ1RhsEJCwCN9YSY6QcwhvYyWDbF",
  "key21": "4hbiLLjg8oeQd3NtxvUYcqSvdzbs4irufAUxops68PRbDyWUfJ7viuHeVyEVgvVpSfwyZoKfn94HcxHanbhPL7bS",
  "key22": "3e3nzmCJiz3s2eqinMoeUJ9QG831VhyoXB1LZFGAu3uHvbcfYByF5f5ssoDcQBwQQ3vKUoWhtn2fevBVEPAt1awo",
  "key23": "5e5wbaVZochwLJcHAQNMseMwji3QCnNUP5yn4PMoRdt2UoQ3WRAohgxxrLgDQcqPrmVmrCqw7k97gE9V8Y6nwvYp",
  "key24": "3Rd6VEdaiQeskM8sDtQKK5ZxssKeGyg4Nra735maXHuuVxwYqoXFugMmzM49xWJU1wbLokcpLRGBLHQwiWCo12dc",
  "key25": "313kJbV9y6awuSkBG9YCCaeqkfEtqWU1MfBJ6ZvT71gtWUawHB9cZnx5vnSrUyoySLpBJEv1F3nFapHSkGVyYHnZ",
  "key26": "4UR6yycvjzBBd4VWvB3hEDmVtPgAHCyPTUq4xCQyosUaV4FvgVVJAVDXutVwyUsHdyUr1qofyfyUYQLduCQtCJtk",
  "key27": "2iAmtNZozftCv8LaEspJ1aVs4PdxXgQYgGuC4XaFrFJ7uLRbj5ka3XPRMGfdW7cwaeMyomZBe6RF9eDEdyiVf1E8",
  "key28": "5yDoMUy7gqq4BsXAkrciP6bRUW9NCe8tAC61ZECiSqWKArek6eTqiAWhCFFke1kiGV1zU7yEdw86kYqJ2VX2KRVU",
  "key29": "bJ9t1waXMEqGvJMpLENDECqHeYi9ERaPukHa2dZrGWhiGRZi3fdHbxmQLcmBUA6i8UxhBYDGjhRrTUu9smUPf5X",
  "key30": "5KQ9b9h6Un7SLXyomhXfpCbypvxaWpNwAbBY4ekWCGzKtysNzUgWM9JRks6kXUYzAy4AVTt1JXfr3at13kXkwNZM",
  "key31": "3C4GMVRQr9dYVrFgDjRMJvMjpgfZbs91LwRVtpqkQdqmybHPfYzbdZ1Px5WssfYVrU4Na6voouoJ9TAJ433U1PKa",
  "key32": "4tj6ZUhCpoUTWpiumewofUoLQEaADxjgzL575suPZYGLboekiC1ZbooyTQ8wxhphh1NtuWCLFqahT8XoyeBPmS6R",
  "key33": "4LHWQto9iy9x3dd5HtB85Y3QSRoGau6FjLd3m1kmrtx1uJk3Hu8k9NYauKJgn3zC25ysHepikdkfNTm6nuGhy9Zy",
  "key34": "2MgyXqAyL4jn2WiskXTBwddv4zvRnWzJWrgy5n1QAQiZsgt56Lr6CZqYhGTAix7vx4jjM4cgmcQunL1tyn37wXRQ",
  "key35": "53YaY4kRr6f6dWsZ6vwHTMA9rGqAzkKhe8QznsGEoUbMa6dfiyT1Emd5sniPH6W8CxBmiAwJEGpqWs9vRdRQ1Su9",
  "key36": "Cxe3nKHgGT4VPv5XkKheuqyqWeBrkLRTPbYM9faMQtw9GpgiGPpsZc4TE2AuvsoM1ozQapLecyGk1TNHeUTJ1mC",
  "key37": "hcFtRP9wDn7eKPuD62Emw4gyucnp6Nh1XP7deuVzTYJJ6cL5Q3xqqc26o5eNQZ3bvkZ8qa7BKSwPDhxysZHTcC1",
  "key38": "3j4wJ4DamXomm8co4C41Mcw1RBvaM5DUHo57yT395vGdeJ6TrzLf4jcLtVNnMQWzQLsCouXrDPfiiaGYEMxjPgeW",
  "key39": "2jcT28KkPbTvNhVDjXHsvajSUKemdRhsfuKfHsM7iZjfBEMCmtvCjvCFoxLKTnmrGRUqzJ6KNVKPvsv5yWT5geib",
  "key40": "5Ae2XiyCajzkXkzG8uYMjqir2kD6MGzGPPFDxhniKftDqLg68pRxdt97nQMRTWjyqer9ajBdb3E2rsa5TZFB2KZX",
  "key41": "2kSdbv5EXdwX5ycR8xezbX1cL8Cq44WMMBVMBCvCNa2VGCja6zFvFvhjJASQEiKjPYU1sFSnk85A7Y68zSEedNww",
  "key42": "2WacB2UeYf9iemsQUa5upUYEdUnEB64yNiXsFWbayKebZWXoKpfDVSew79yYR8ZV6hmjXhFUmXYxi73Wn2tyePaX",
  "key43": "2TFyAebK9UP3hiX6RVwk7LTmtBotFGG4ryhYiXXiWYaZ59CimxQuCPUdoy7v3aW5oLRBaXheArw8gpH7yzAGtTUp",
  "key44": "4yMcXBST8kfmELW241r5rStKdFo3qfg7fdujSoS4Dz6Jn4gNMqn2LyTapxsdRK9JK3HmbUrbGg49Lts46sfWxk8T",
  "key45": "2pk2dGxTcgKjp7KBrPVrua8EvtBB9Fum8Uc4BJw3h2s8aQjvqtEajhm3oc6KDLUHyeGGcBiGPJuRnDaHwbMEF3NS",
  "key46": "34hDbMqMUsi7vuJn4VwE28qLNtgvxmX2dJx4NTmYoT5PZPKzuoBUcUo53Hs1qLHkNjNBGFv6wqV8nPzaDD6sUYaU"
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
