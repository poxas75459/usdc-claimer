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
    "bxKtS8y9NVCWGcCDs5ZCF7qxiVMuxaxgEFS8b8qC4NYUv4YPaAMskK6NvYfW1mk7ciWz3GuPjq7HY8dTryt2spj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UsSc8eQadanXfsKTV9FuEXCCMeoU8St5WHgoDJ4or8vyAdE3MuGmeBSQxjtzatez3CWtNPNA9G7MP6p97hHDxbh",
  "key1": "2Jo7ZpVmg3y7dWFbhabV7M5QHvmXQ5vuHo1cksTkecJK3RuCdCRFJqKFcWPbLS74eqj7iGNVvTUdGbWNsY6ALkTT",
  "key2": "RHz9RVGBxxxBxY58dgcnjHzjZTwuxaqwXDT9XYzjRBwJwRCutx8WQpJpeeAeUnkVEfz3iTzwtw2dJxjTNu3RUUq",
  "key3": "5EMrwVuU34hweX3rcdHb5dDBKDak5smWpqGRiPoTq2feWHSeEDMsyH4ov4c59HV6yf1CH1WhRXRQaf7WAwH3iUXJ",
  "key4": "26juhTbXWTDAr62bBn6NihEnKqJb9q6zdmcF6Xsz5dGcfdyxAVv1ee1Ed9sqkWcrojHduHWHmro9BkH272jrsEEt",
  "key5": "RSLuYkSeXCfcKjMQ5P7n3mQ1B73Rn2hYLw7F2fwovq3rqoGvhxPjr2ziZa3NKAvuiDuWcyV9wDvmgTmG7hi7KxE",
  "key6": "2ATYTG82uGYkY3FkyVWN4x2hxVTTtSHJviXyV1wLAw1kU64RQdgjNcVnXZiPoymyNPivNohiYTdhAUHSeiQAahoT",
  "key7": "5YSJz4bNGdQ79Vy4iduiMTwPz9YwL932T92xNbJncsz4tjA7WW8qfUufo9FCh1KqVDct5KUmBpAFxzf67rpeAfgm",
  "key8": "2boCoW3Kjid2xBV1uRLF3Wp1vTz1oXvdVnU51SfAHvV8uGbB6xo3qDrEhAfvMBMhWP3zuHZUE7ktRNLUbJHMvnKP",
  "key9": "3DhrswkoxiK2KKEWQJy5JrFDpz7HKT7okrtsKERBZQT6ZM1WN7hjNBjyBhNiAn2PJ9XuvCxPcxwYaqRetmwsAb3x",
  "key10": "2fiDVGrjeq7W1EaRtt53HziPHZHmEn7JzpmvgZKngXum1Qfbh9q7c5e8AjeRxe2w3AWZTHTH9nKgHja3tY7Yru3H",
  "key11": "3VSKheS7JudJ9x6SebhFDHohxysNcNyEyYmp9JNsWMFgsKdcPiA1bFBnxp8kK3wQsC8n3Mw66vWDMnkCwDHeLiX",
  "key12": "YkNUGm6dMuSL16JqWt4XpvUPKbGPyNV3j4RzEEXXVWpq2iDsbXw8ZZmqs3i5TcDvBXt2ws4xQkdAMDhV8wfLXre",
  "key13": "vYGHBUbfsyqWc2Coc3Ky5BLwrmFoukb3Hg6ZFzdUgprBWpvcUgSKbaVH2wUQ1UrwD4fTxzrt3RWnocnCZCAmvgH",
  "key14": "4cDLVd6YyV8QN3uBzCig9ibjAM5ndsKC6fBzcyGZQXxogNYRsZjsb25ZuCtYFqVNhjZVLtZuXU6uvbHTnecnatAc",
  "key15": "2bp39sn5PagcxywrfXGSLHjeqgR4M5XJ8zsmdMVTL3V142xpaWHBL27ZPEgVWiTvnr5VcN4YD8WMHcSWfFfw45MX",
  "key16": "4ARPNH158mUCks8kcDqCuxQgSp8QE2QwCT5izvCNqqELD6sS9R1nBPXvE8qnBYczAVWs33aFiubSAxtvYSRc4EjR",
  "key17": "2odeeeFoixHa94y59Kf8V6puPhSDmAYNFP3Sxev6cuh7vg8CSiUQErTkG1GtAoJa2TU4JA1r2GKrw9YWN9iTPZj",
  "key18": "3G9jsoLUDo9omSamiPmH4rMeBmqTHm8sBMgza8qh6sNSfeAANC9MeCUjLAS9xX2Anp7t5zYMYc5m8VoD6AdcWjv4",
  "key19": "4uxHCgBYWWA5qQTpEyrYeF52KB5UdqLFN7uxaHusb5gydFL6YJnQd6jtbbnSKCf21iMPKtoxDNi5mjESrJkcXQtp",
  "key20": "izJwUeY2YmwsGFG3hS1b9KBZQ6HxwbhvPLcGvnm6CUq6wuaoGokrCASc8NNG8efNDvFR44iZdCmPYaAap8BTKGv",
  "key21": "2uqVJjMirFHcrYi3yF3HoqWEUPNF58f3anBz3JQTBEdUdzpwvu3pNQnFwpx9xRFW8CXga2pMX9pkrjfPo518wbC8",
  "key22": "3tDzPWtHVyYTY9AemSwprh9ZdAA7i3JyMUqTd64hWs7oKxCoBHHuvDTvQkW7bQbstura8HbKFdbkjQBYq3bA68v",
  "key23": "2XgZtnmCihuqTdm1uzd2QvQKBBpaHTCBM6NRG6CqvuoPVhika4EF1JFyACjTiyzQpTPGcc38HJYDrhCMtkuGiKfL",
  "key24": "3fufDKYDnNqaBwgWpYiUpq4HWdaGRXCToW8xZbemi8MkZRD38AeLR4QP1WLzJ4ahSubpnzA3YTLyFVAbu4Yr5T7N",
  "key25": "2oTXe2AHucstmXyrYWa1K2BQp3g3bujageoXucS5kV9JJSp3KPMPjLuxDRUFeoXbnMsNMtroLX5pracZQp395WaU",
  "key26": "26SUYVSRQeVttVPrFjzmf72y7m92n8F4s5QXoYEME2VEizNi98gnrduKes3shSLQ6StptkeYC7o8wtHWhrn4RFc4",
  "key27": "3DxWRJsxZGPutkk2aA8SK3DhGNdczDJUB7iQuhsKmb4nLZXPu29MtnTnYX6UL7A2aLwukDzvR2jo4KCFjF7EFr4f",
  "key28": "5JnmMCNigAkgmTF91VMwR47f5NfAKmBcoZrvW3fUJJhLsazwRN3nxkhK8bJLFGi56hbV1fQHz3GNzAQNbKVB1Mgr",
  "key29": "232Z6F3EGE8i37sC46rQocvdffsw5YDF8TYqTxsrB9SbWJRZRDm6DcN5uwSmcF3KF1C2N88EGFSvhs5ykVMKLEdL",
  "key30": "3CR2LZWb3N3WeV9j4h7QizGLs69ySfYfYS1YtYs9dvduyNujkGg8JyCu26WXbfs2B1YNSpZqPzin85ZsVRkxgTLM",
  "key31": "5M6DXKLnwabjweZreF6vLLpK6DSBZj53ePDRD6kZV6eHJdmXEpxTnuAxXRATxwMf4S5XD5PSVmE1dK1f5VvTRqE4",
  "key32": "3aaU8C8h6hfF5rKF2WvEVSXzSoQ7uYoeUZVHKqLBtGaRGaKQ86mKA9wREXBdXSTJyQZX5A2SBGfsSSJcCos56q5E",
  "key33": "3cWF781Xjz3ZJMboPaLqGSYqgq5ixsXcME6JukYaBzXxNK2GJune68M1v1KC4gw9A2uktV7T6AYn7D9Cdi85DE1s",
  "key34": "3vSTdAS83tZN2JaaQX5EYHPaVpXA8d6AmkxuRXu6Uc5eVmWESy7icCeauDj8i1bMbsVLrtFXoKdWskL9xa6Dgv5j",
  "key35": "5CD9RqPpmP1Lrqi5KrYexQEXCYERpwrwt5jLVDVxubwBu55neNK1nkTiQF5SsgYUfMsyQoijWfEtT32LcsTxZvya",
  "key36": "5gsqbFFgoaZQHySGLT6PgEYwnubUa3XY6rKqa2bqckEa51ZQtYRgTwcLNgv9tgvjwB1BfggTJmykSthx9KUqby3m",
  "key37": "4iNPcVtBHskvkivQ31RVG1QfJSsKWguiD7PnaDVKr8dCqz2ytQLaiL3DEbvSG4xHJhs1pzKkxvRjp31FgTCXdeXc",
  "key38": "3D5ku3p2DtdUq31ugU1TzqjYPG2xYoJ9bA63h1Y4DkoUHZJTSYXY4FW6rqkt3G8J8wAqDSUMzMMDFipFxputYEsm",
  "key39": "YqMbYDUE4zsJ7wFhw2VjLeHg4Cav3Cb8c3raUEkxevd32crp3rXTDdgy9K6TwwZWWN7oSY4Sm58KK8CXNhC4HRJ",
  "key40": "4bXUNp5Nvn3aSvwead1V4dYE6ZUAipGeELUhywSFt1pVGQTofPptUrWBgs5Ztzz1arzAXidBh7YRSsbhqfiMXbdP",
  "key41": "4QRv2f1nWFZ92JHQeHatWURPgUUDsXtY9HVzeF9X9tzt8JbUiE5GeyzxEXDDmFuqfJ32EgrxYRqShGvvAq1cvVj7",
  "key42": "tvdaUs4RCQANKkcd2oD8VeETaES82c1e3o15zYrLHE2FG47CUu6Q3iVNK5tn2KqFAv1ePQABEsAjHBYZ4rDdbWo",
  "key43": "4WQw56fYsTkibBNRpBqNwqP6DPvg3HyRL4jT28FyjqjPVt7GQsVRmGt76xSBRQGfRqVeV6iZe4xwXjaSMqxFuQuQ",
  "key44": "29Ja3ihkPzSCCRQWPDG4XpUZ4LTnc85xS9ZKNpHoK5oaTm8UxnHdkcxPV1Kg5j6omFP3BJ8KJfyuCy3iEibU19Gw"
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
