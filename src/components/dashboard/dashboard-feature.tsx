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
    "3jZSss8CtLwLfoq9SHiA9cno4cDbEDQfu1eoDoBgCWtCtJc1ptRjsFZdicEz9LztX6qMEKcWG9rvz5rq6Goc4F69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWH53frx1a41k8X3q29zq6jxf5sBdWe8moVREBKX8ECyNutDJtjuoASTMw9ZJewiKkq85HtwoBx4Pg3yNJQRrUG",
  "key1": "2YqWbZTatFsZbQnYgUPyGkZ6S26Gjt63en7MjFbdEsSgsuiQYve2ci1RxcjYTXRB7sTip1b96QdTvsDwwhtCn6Wc",
  "key2": "PKDNcBXph86kVtwhgs6UtKRSkFshRjri7AxUswZTZE5ssSqMTjz7gjqRSMTTn1J727B8ecDWBsv23fvua8bF3R4",
  "key3": "vAeQLyJucV7mHEzdyMeBqZDCd84oHmfvV43ghvXMF8AzbohMDQeAzyMfWwG4Hvt87qRcaimKscZVLdFijvLQ3bL",
  "key4": "3h8Cx4R2M8SfKibAGyrd27Kmyy3SutgBMUNQ9599iQTvW1XvFtKBRfoNtx6ckpXYn2KZSs543x8qJwe3hrKCmXdU",
  "key5": "4oEuagbho553fA4wk5GSdpucM3AbzKnDLdduZKWLC25XFgPimTwT53Q73k8551rGoM7f456GWKAkHTnZJ5DbA9Zw",
  "key6": "43coZw33TCstMMeAJTmBASvhEU3t8n2C64391UEBkNKLpHCvxNhTWCbziZScttnp7LvgNHMSmUcWk1exQuTByear",
  "key7": "3AQuJqsEV3rRaPTvJSH8xQqA8FJJmLoaAncS92Tbizq1tw5XFTqxfNSexHBnzPVAaQsSH1CaXc4Ui8LVCkcm3V9r",
  "key8": "4eBAk7ygbC3xj1Q5w4ziNzzBsXFoRLmeX1W5ARNMQTGcior3aEzJpZL5rxrLkwZ5WQNcvUsrVx6fqKGwfLAiBixB",
  "key9": "4q6wHfjKYxFiZ6QPxVeoSox3A24ry9gzwcyevXFEo5RJ8HbfX6ZaYMw4U11CoFL4172vmSEsrSVoJwo9dpuMo8pF",
  "key10": "3fUbAzFkztPqkMCX9Cw3evw7ynMWEuVNcLy3piWv96S8NwYLE4F98JdjykrL6tJzavpR6A2CUKx1BRNPa8RXDSYL",
  "key11": "2jof5Rkb5aFP4soXVcpLkYLB3vfq6xWtWhwuFWkvLha3kkZZa9AWYom9YFX3wCuKQHENeYdbg9SmkgV9srvFeHxK",
  "key12": "Vtkr8re5JBj4EUQ1Wk78p6sGF6pbwPEqTwq9M54nYx1XGj7q7E7eMY3WV5yRXrXKA5eystZwpEaTQceGvtbfXty",
  "key13": "snHvdsxFaYJ5MLB4AadF9kqmUZAVGUVvyEaoTiZBKGvZLPgP9eEUaNCPoEFqVNjTMG6eNiyBMhfrQ3eUuUrdo6E",
  "key14": "UqZTpbzYy9LncgutvWqCmbNbCAWNmbSvyWR5xsPavGeiouXCqcGHU4SK2rYPgvofV4gCmWFg37tM75JbVJ6RGyD",
  "key15": "647GK3jzPsRskKMV7hTxmDWroMEfA7gAq5myRyDEgWqzptvBCGgoHRizgD55RE22hpxUjhvzocwnoPhzU6bTTyxU",
  "key16": "b5yFKyK9CE9bsrrxi2SoJniBJfDQXtNJm3YtJd4NwuSiSwwUbi1fe92DFZMFs1XBxx4rdHFVMMGaGnQuvcbTVnJ",
  "key17": "2kCy9AyDKvsrz2ZuouneED1f9JAzfKJPBrCsNEiofKf7KXgnVv9nb5mUz5mi7W4hAkpXxzmjHyzjjLideLZWVjSo",
  "key18": "4NwVoWwHTwH51WokmaTXv7oSAk1P2WfVEiZL5ZXVxrogE1m3P8uegnevsAfq6QHBkF7GLDE53XshAFTXXz118rvC",
  "key19": "25pXqzL2bv1W8LWHmom3XmLGMDTyt9Aqg9iZYv7Jq3fHJkrna9eCboQSf2C6H55qvPur99g9R6niJw28KvnPy5FK",
  "key20": "5ikAqK68WzBdacxndoTANX2WYq34V9pSBrDHmkQrapMdDe94b2BEDpvWbwaE9mHjJASGhtmpSXdtZJjq93SyaGjG",
  "key21": "62XBvkHMyWmKf8C7pYt3S95HgwNXTQSpfQ2YWjf3kyGuXFZe7pVqDndQm9tt3rWq8FDC3f8qBXMCYXf2wQqSApns",
  "key22": "5nJpPMN14cx5vgn4tTLUwdvEKrePAhacrNdkiMUNzDckXqo2bEKvxTwu3R6HWbWtgZfcH6Lg8etUKRGWWpUrUENr",
  "key23": "3cMhSR8CiMiFMxcEarE7EuBJbYLD6sPMPLVB5Wdje3pDPUbrqfmNNyi9f5RYH7ANtz9YwF4JAFEa2L36BVZ3B2xe",
  "key24": "5iRa5njpKhiMRyZ6Y6cQ4Ec418Hm1bv6LJuzrje9A1jfHeBdz3oggwqz94jLgc4wsVzgrKtsnRmzkRo7M2WyWMAa",
  "key25": "4YALVgHXdb574o9w6kiUoeVTSooK2A9EeRrScNfRkvVRzvqBRPbc3JP7UmNnTR9ocMAqpdnK2nWg1asPYgtx4qRd",
  "key26": "23vq9nH7cvQ6PKiyNT4qBfkjqkmtmJdezQccrtb92eidZaQ6txbEdPZ1tstn13Zg8grW53PrniRZe7rgH4yquD5B",
  "key27": "36vtcsY88hy3g7KxbfkP63BasXicuPftJsddfq1yFiBrGXLasefJH8PvVsLQi36kyhf2KSb5W4oB81qbv8CoWnGH",
  "key28": "kfkQ27aHzLmD4zTDpYckKzcmfPcpoAYJRaVjQbxBqSkNkVZpdNP97mtgfVrU9dBvig7wTMqyrbKf9ANbTCwWzAb",
  "key29": "4hW4qbSowCffjeqKizsbxUHyCUa7DHg783uf9XGHgbciM2MNf7o9dFMSfi8KUKHkwgnYqACqvc7ZJRmU2vJKegys",
  "key30": "3ArQVdwZzV766CR6BPgCnuEX8sdr9iTFtkcUL2UnHXwCae43FJhRvyxjLzAD2hAXVwaikbzp16hbZtdgpSsQLZpW",
  "key31": "4aHdsdwnNvac1qvauAwAEimtt3C7dsgZhPmk9Vk7dumPqyFHNZ2edWjtdiYw1pypU7826pL29cTPEK4jiMBjZQmV",
  "key32": "giAYFDQXShQtaizMXPJZTW7Kqn6Sax7oP5LpKgvJqHLVSNP5p5HwKrhqxKefUvw9nXrSBzjoGuRAZr8PfGmfbxK"
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
