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
    "4ZsMXzVCxgYS2edpzmjPWhBsHXXg3iRCyiKnGNDwc2NbH6wtrgpkH9YFLdz3oo2ckMhe8FebJUBWhnQntgtAjfAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7En3ChYoh7DhWASmrMu6L88UzNcKKthpFy3GdrJppgiHs1fWpM2bMyrRAXPRXewpea93ZXed22zRdbLtk6yNJt",
  "key1": "pUJngLXzYv27F8Zi8rQNdCrFbwUgyVi3NahXNCxcK2RfEZi2tcrmvddimAaDXrHBEePuisotMu4oSwYMessY4d2",
  "key2": "3N6mcCjNQHxBW3bDNyrjfUKZnTKdYW7pGi4XuwGWFwB35QHmH3n395nNH7ZWjkNqpJcuxcgwqkwttQi5p7ZaA4tm",
  "key3": "jDcR1rzaJRS6twCU8ZLAwatysVwNFLrKh1ae9ieBzxASawiCg924LAEfeq4tZjM7LRVepyGw3b7cDfgW5FGAGCj",
  "key4": "4FmkNB6PsLN5jeeohYqhVwQ57y2MNuVq2TygBmgCbWtWQ2ddc8hZiKJMjounwrwcJnEsEYsmioQVZvT1Zuk4pCvo",
  "key5": "3yCDVWvmeaRTYdV8EXzRPewHHxh2nZXBgf3HY7hpfqQcaPF5GSUaFCt6DjRk4Ez2rDR7Hj3L4QuLWbXDPKtZhQf8",
  "key6": "u1VrBShsCGdUCqCmCkiHDFpj7YqD2sZSeY8eRAeS1LbiMVqwWkxmR4nEAVSqxv2TX8txLfPwD2igS1cDusagFWR",
  "key7": "qcsJjC1JrxapH8cgguFz3ee8B8dcx8u55W9msvcWcTcSxnX6bCBx9jvQXm8EW6kmzE1bV8tRnjpTHMn42DX378q",
  "key8": "4hESyVKdLPmFxixd88CaYFF4bFweQSgiWeLjqzkE7PvbphHWZxUjcvzsxyJJGxubk6Pmc3tCAct4krYt9UCkJdru",
  "key9": "URkieMYyZP7hQRY4BNhaK8ttxx6nYpBdb2HXgNPCPnQkFtQh7nKEfbMy828SoUPt41yTsXqswM7moG7Xbwzh23Y",
  "key10": "4UwXmvTpZr7PGHKP72Sgj757RYoSPdffbZcdLjSDWsQFEot1nU7EvRHLHvUEcK162hQCdtArTn7zftnrANxAYpGV",
  "key11": "3K1HS9LMcYKAQdrvnSFdEh15MrK8JTaRttuaCoNG2rZnoDe4ANhm5HCnUiMnmSQskDbgmU3XGBMfewG2RMvpqGKN",
  "key12": "5uekatTWNPMgjAb3272uvWsPQhr6Fxws4hM8Qo1VvBKW5fdAQ6jmgCdu6zx3Yzt4BnjR95sbkeMZmCnmCQwV5Jtn",
  "key13": "5XmZ6CZ6uid8LQJLTMCQ6LMdgrPoS53LgzjiBuffvnUwdgagf74kuR1RMc5zsUmFxqDPwHPusMYYXRKi9fv9T78i",
  "key14": "2tnQHazEPsxmCqHk3NgH96gsFNSsZARNNGgy6ALVo1Z5D5TYMHEnEJaVHtC1r1ZxuJUytZmS6oK7VZHBpQuNxP8y",
  "key15": "3w5DSh4zRXff2SVNUx8BX874bJnWg2MjztRe3QwzfB5vcTUX6PnDjsHuEq4VkpyCpuem4MvRzeSs5KKrT8QSQhgf",
  "key16": "3RjYT3assh7DiEs9UyaW3J18DdmcZrQSMkoThwYVfQtupLYkTBJdNBt1Ss8gaK2EWLTb82z7N217izSGHxQspcvY",
  "key17": "4hrFuktm4n4UTXb4XYehYuZHH1KbHDUPDf49VpTQs6WuJHXC54u4uDZvH9ECBCgW38QJPHySjnQPhi21qq3da61p",
  "key18": "5pgMux3hm9Y2tedv1TY4rhSgj1qNtHLifHAZaqyLPZQ9bSBSyQLXidMayVvnR1G5C8enDj58vsRB8PjATecdWC8e",
  "key19": "5UmxQC2Vc25Ep912iiPDSZ7oimXsApfPwovMoDPe5ByWH8D3B2G2KM7ZC5ZRTrwPN5gAiUc5A5sAUcPN713mBiAA",
  "key20": "24qAwfHiTeeHVMg28CyZt5UGE85AgKk5PwH5yFZJozk3ZjgmAkUjbbtxKFHM2d3nyPkUGoBMLrvYqpWxHztodVRZ",
  "key21": "2QbLyAjwhtXndanVnVbRokvuYS4h3Mvd4AkC7TB5JgFHQcJd55QmqPHh7BPkHdE9v5Kc79jZpRypYnfetDDagUbp",
  "key22": "4kQ53nXoPHQ8struK5kCd2jAh7JuCAbxDxPeP9z5ChHBpToAD7g7UupsVUKSqNKCk2Bf5o5c5Hg1aXHFHhPeaeXL",
  "key23": "6RqU4QB8xi6VFDtMNYsgvKBNn2RQXTGYef3KR1REf98F3HVMsStsQWGDQDskUpsVLtGy6W84LTaAnJ2TQceX9ts",
  "key24": "4UksvK1WWLEoUNg5G2ZtTD6UxiMG5jXm9AVXauqRJzkAeESmKamVbRmK2zQ6VqKkfjVTF1sRwptAkoznqSDrsUC",
  "key25": "2pU7uZMComdtAFyupdS9jjW1GG9Kq6k1jBQqc6p5BNxJ8xWKAzW5867BEKj1WL8H75vWxgah7JRoD2BxMCUMAmc"
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
