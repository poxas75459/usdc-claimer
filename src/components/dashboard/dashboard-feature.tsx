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
    "5CiwzHcuWB3NJxQ6anRmfRG68Dwp3916FYy7GmNj5m6Z3YTX3zJ7YEcMTMaYrkibLo9Er5QGFWhYC4JzFiofyTQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rkN9yAqzDPSehSSpsQd56anWWZWA9KcQKDGs11UWr4thJ87fEwxQFkAmSHSJsM8xoWKU1fTjR8yuKTPYFnMUL2",
  "key1": "3vq7fW9iETB6Dd4bfGwg9PnBk9eBNf7ZNoYFZdAeq7VfKVAjHxF9cbTfe5gkkXT96YVA2qUaNrcCbvH8KdGmnWBW",
  "key2": "24ZiurT9Js64e6JrT6r5a831JET1xtziB7SB1HgbKWSEgRpsGPK9ZQrKDV64SSmREjjCuRnUpB2DBQvosK8XM8ae",
  "key3": "3BDzdjkqT1ev6UsGy6CucEu5kF3LBBrEi3xPVBipHvW3Lj1ieBd5WEpg9eRcWFFmQvf1wWBFBHz5z8W33UC3H8wY",
  "key4": "2957jXNjaZyoDjPKdfhKHgaJGKF15zu6nmu5iv8cdvykAciZ9EsQrpQTvYSzjY4Tr9LwnQDz5KHi7MzZEVG3wZAv",
  "key5": "5xzvJageVv19ZDW6MirygAq2yea2vNSxhpVtThtXwFnan1xgC7t5KbKzDixkaHnjsPKhqHggBdqnYvQ8kt4T9yoQ",
  "key6": "3WbL7YXWdnZdxUWornk69duf2GLUCJN7J7Svzf9sxLhDbU6RLp59qFGV3YF5fPqJNVSzf8GZzqKVyLouYaz6rpnr",
  "key7": "5JNk56fxGnjVKDahfz3qJP9heBxnzWME53Qm4SiBq3pQpMCC6Me1NdqQWncdvLUEAoFjcXnb2RCRmdPPWCMSgko4",
  "key8": "5iqFf2DWE3TyoAi5m4K4GsseRTH7Q3K3emuN3tWF2Mw4aEu6289noozxUdtLf1hGTCdVGvy2XPKaJXFNSSfee2iu",
  "key9": "4MJWMZoE7vzB7dD6M1LED9tNGCML6zv2wrJDmeLb3cf8izpRQ6SGMiS3s9i1RMFiW4esCWTCVPjy8Z3KHea9QAuN",
  "key10": "3qzTdHaVCojyN34p3MXWPNK9Us1TPmcRVUgiWdzmhMnxCJPhHCX8eXVVnRzNJrMmoaQq6XNdeMnZ25uzDNsVhY69",
  "key11": "2ebdsBPm7xQyCpgtWdoofahjTk7eYvgknVAiHSuzqRJpL5P4ZCLGWMd8m8ihc3pZWY1A1Ph92RnqSRBk7UtA3LEY",
  "key12": "DniLCedbHY9tC851JGHrj1dxPMTJCQQhKnVm2aMpABj69v9v7Kot5tfgnBCsks2SAH2jrFh97RMgVnQbGDz9vc9",
  "key13": "3AcvTCfz3rvVt3e4ut6K6LLd9V3WLPk5urDR365gcYKvTjR4QWBnRxWxcbTMGhcTm5XgLhK67xJQDZDJbDvmNT3S",
  "key14": "BDCR1F5pLBLtNaxgZqrgzjixa3nr6iisjfioNoizqYcn7v68sRMEm52G5BKRdhyuiJggMziLhdfuisLzkUiUD3X",
  "key15": "Jf9Y73D14N1ZRBiR8WfyC4h91rW5prjKwVHMVNGPeQW73ayjeg3a6ddFgpSb3qgHhsYfUB4JKCQW6AvLWLwDHzD",
  "key16": "4obWoMNPa1JGV12vv3QAxr1kybqogEkprwWnGChs5divc1PhEZ3W4WBt9AKBHzJ2YSP8iBsdH77nn9uto2KyvgmY",
  "key17": "5TFChDLKqYQfDbtDS7nznxFTZgYS1dPTpEJTXQx9xXTT8RikDYW568uVDgTo5tX8yWRRG1LPYSE9SeqEUxFzNsiH",
  "key18": "4cxvNuHrRiFdKq6qVF3bCkowFX1bTEaup5iJZTmuHRS8PGXuxA8KehFgjarZ9wyGav76h7MrcVWn8oaPRLDW4UZ8",
  "key19": "iYQZ8QpYMGLbChnkRQJcSq6fxytwEK7PCxWhjr4fthQUcBUo35Q3VimXXvepFqQVHaYcrLU9hS5S9ybMuaFWsyd",
  "key20": "3mg9Yd9byc8bcpxyTM8aAC858APqrKPu87AX9mzp1AgXBnP9CwVqKhV1MJvdius7ZMjrCYPbVuRiFir7sNb6ACCC",
  "key21": "SVcYE8s1qXTG7ABASauSECRq9ycGPK8M5KREsciuREHr8MtfYvoC7tFcBojwntPJ2SRRw8dZCPUXVyMwSpqqc5v",
  "key22": "4FLsiYpSsJzqsXdsdYn6XdqFUC33ZA1vDFBinvTVLnc8ZdTGEgkxuF6X2KhpyDwRG7fP5QRCw7Zkv4AMLC7eeFvx",
  "key23": "5c65Wp2caZ4RP68WYtZJmfT5rJVtSKKjWn8MwKoFit1a7T56HoxXVpPjVb4QWaDRgxG6sf13gtN2gSqYu5vt8r6E",
  "key24": "1Yr219NN9oxvKu5u8L9jE93xQLVzNopK2MUts4Vs4rgvHQCK8TzoRAfNE9m92LirY2BYAzSTtPBJtBvZ3YFNwpX",
  "key25": "5e1YGDSzbmcHPUzWnJeqj3jvmZCnASS5pEs7XnZeKpXjsrSpFC1zmLuYu79kaknhtyUG9mmpNWC1tCCCNz1UQSfs",
  "key26": "576fPUfCdRxmJ2EkiRyu4P7GbszyTbEXo6Wn146Qbkqwhfcz5NkLVfsWRT5KKDkEMvKQg9yPt4xcP3AiKQX9VBVG",
  "key27": "4AgpfXEpt73cdyHhxgxsjzxgsPpzPR3qdkkaPyWSYYUSD4H2CE1e3oWruxtzR2D5nukLqECz2WQjqyY3kWnb3TGx",
  "key28": "Bur16vdq5mRudLMBoesf9spEt6ZxNLABR9fwzqs4fqmssmoB2ZT47XfVXZ5Yj8C1KRnrwiKM8RWzzmwsfkaFpue",
  "key29": "2Lcg5wR8rSFtFwXzozQjUtpMKJ9JFJgfJj7Zd5v3sFHXSqfaXEk2nZqN9nV5JAS2oWKWMktiApBqVKE9rghoVhUQ",
  "key30": "5DE2Pc6cjuntwWxKedrjdnwC9s7Fiip1gjeU3SVL5ZMZm9HuqmCkJvXgzrDKqbquHETp2eTSEXSHFztSZkMNb2VY",
  "key31": "5xqdM3YEyg4JBDBSMGt9qhaSMsw5jFrnrMEYhosHZLYzc7rPo75twZPGBoam5ji8hFNDyY6M6xsL4tfp6m4dC18y",
  "key32": "4j58AvRVGeS7zfqDkYL1uTDFD8ro1JKXNyfSrYEj8jij9fsCwsmxxK6jLKsmsbgqms2RvuunRmeAFdZdADH744yj",
  "key33": "3pa17h5VXbHjJK8rEGsKWmtVNNfVTgRkYnCgC3rn6QT1kvqGN8gji4wiuqXmCiQTBNfiHmRsH4LujUakehSZjwwz",
  "key34": "4BaWotSaeeNkLYdfQKuW27YdG1gv89WRJyF8dkRqcmV1PPWwV8DNGDM6REgqVmBqyKKyVkcMpptY6nAWceW6rSnF",
  "key35": "579szaFc98tTMpfLAUsseCu2LWNzbbe6PLKUiFmJb64UXhbApuGRPnZDz3E8TZfktk4cVDUcWCMkv5pxpUoc4zaq",
  "key36": "4f41MARZ9QmNuM2uFYw1iAYQE21NRKTtoWx6JfD9ZgbnjTNHetDSeWjw3xVUASQXjjJCHoYH2NMpTuvmdEuc69yH",
  "key37": "3oy1f6TXmqwJgRoccT7nsNhVQDpdeJhRgTTkT9cS8QeAGX48HGnrvvX6o7BXccBt2ffdURVdAN3986xWoyx6Kfpx",
  "key38": "2DZJee99GuicX6ZMvDXxdGWkU2FnrcbnmWGX8wxikfFgTLLKduguRfwptVJXGfT4rJEYe1eiTMhsrWkhMj3b6X2S",
  "key39": "4W5Au7YZ5CKSBeSZYNMQL25H96PsMTWTKZ6ntFu8jsjAZCHzvTuFURYge9s7HEPEhyULttsQc4xkbauhtweTMSr2",
  "key40": "3gBUyDCgiDCgJusSxAigWQzv5RZZzYBmAoAj4PrXWtuhfVjx3sj8wZQoptEVeFVXhs8fknvRmTsaUS3RwaXVVFnr",
  "key41": "TTtYANHNmRye795wEHb7BtCsji3WD5H5xEMRs6JUmn7unmyywhAbQejX4bg1nGdSxY32s1x9N7Ym6y2cCXgBdCC",
  "key42": "2TT8Uzh5Qbg9YA2JMTwXqdVrjvQSKSbU7ZJazfGAU4HQDgBza6mTqUyNzYuUMnvHujbCrqFZuDMMJKNpaqkAesri",
  "key43": "4FXY6L1qLSHcEZQqBdNWjxzaaQoQJWsUBWKL4VmTaVrpSFfqtToNhqQVwbdm6iNgdqKTorsudxv8TZFKuC1DqsCA",
  "key44": "22dF2piN8CLYUvwoUZ2m7ucTR3nd6DCeKH2Nf6Z9FUTpaQcNrT18Mcpu3R13gBNgau2Tjq4QrZxGipPTdV5My1JQ",
  "key45": "5FiCCWwTdRXGrCpChGBHZee2NofPGwBVex1nRLzErQ55DBtRo33TRwD29KAcEPT3sBa4zg7eDBzVYeJGGJJtSEuB",
  "key46": "4wS4iuMDhhrExU8oGhyiZ7GcKN5AGuZwM87ymcyeFv8sDztgBXEboCRMXbb1szdxeQfcUqDGFSzVhYuWiBwDwDW5",
  "key47": "64uy7HXBpau2cyj5EuMRwGxaTHjgP1NEBnYqVMyL3FByJC7rL7U6bm96TnQB531PGU6DbzvrQa3ELtymXSsADb8H",
  "key48": "4WkEbU3v8JntiRMBLRp3S8DV33FLSoZiCTQd5QE7qVkPnxjPnsViuWnq3XAxag6aEmTzBSxHSMCUrVUFjfTRarKr"
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
