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
    "HUGrPqL2ZHgYSaub4E5WYiGvmagybJXyqaiUsFxxSmsTzK3YWn6dFYTuQVvMGiqftYSNAdMWDNp2TBBNBJ5J8VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7Zc9iLB3LDvi6odyMc514tQXQvV5uHN9GY2kNgPTdZnn24Zues4mm5a6Tk2k4KM6mt5Ed2iTK4ApgDa4Yuw9TB",
  "key1": "42vVPp5ET97pKVxjVcQQvwuQuiS8McoaPomCK61G8wzPTF8VGrhDVTVF6KsKyVnBYmbgMSd3oDRfHkzC7vw1YpzM",
  "key2": "4zG2rQJ5AREojVLqeWJtvgrRBdq8fLFrqufg4oZQG28f2dVwqQxCPBdnbEWn1MCFuuwtRHZkUUogFRhh6bEdmxbJ",
  "key3": "5VyUNcsGDTWCpHfP7Tu1hFgPkBBG2zgcHBj7S21bbUEuqV3CGhc48xPGbPhq1GHxnvgWwDZjJViKJ35A5FmUucym",
  "key4": "biVVx3CQ3YrEcid2jUsHDE94VmAMizT9TNrjAAjFXxgGPGWPvBnhhJvNRgkUgaHtbBaADyAY7FqAC7NGf7xmpah",
  "key5": "8yNxM4bC5iHtu6GQeBW4evMiSVkJxThf9GhNJuMnzusCX4rguhQvcQU1bDe6zEALqR6nLnuSHnznMvnG8vH37yW",
  "key6": "tDB2p3zawxW1nVJMcvgr4uxPACgsuJmzkoyRj2gVAhiPLiyzm4dW8Wu9LQmRefbjEdEU4tVo7q6syWMPdukHajq",
  "key7": "5fvdaZb3Z891W5rV3AUUhc4soVXzjb2iB19BjJ3E87DwtbvjVEUNQSZvDwujtg8BeBdSgyDdFuzkKks88fPoV4E4",
  "key8": "3APi98J4erLEVdCCEpJbPHrrtizgX8wJrunubFuziLJQ3yZdX3swhGN9mvMLNmjVs32VQbNGiWxmRDPzixG7DEGy",
  "key9": "4jAZz321yZcn11z1mBb6w14Px3NwciSG1MSbedRkGPA7HNXxxtyhQH8753H1XwLPLEJu8kMssA1jhae1UKZBbdYc",
  "key10": "2kxWPKK3i1DNckK8bisSiAETuvmpckmwALvnmhmfUbpEZAkbtid3PUefjJBAXGrzZ8eJzjrtVCYPYznRoPthcTcS",
  "key11": "4DqDGT7JtKSrxNTmtb7SptJxdqBKnaN93VY66DXZSK4wEXufU45295omEXrPvLWeaomj5YTaZ3FDZzy2YcE8M5wa",
  "key12": "5xwG2rn3k8o8r4V6QHoyvJNKqX2U4LcXr6kbToD51H1zhmAXoS3pRgnNwW1RKsh2KSN7NARhoAG2ahYXiJ1nTKVb",
  "key13": "3sTMDy18U6SxdnL5fjZUCCUdGFmMXKWzK5vFErM7XgdBBdSrf6MCXwPbDSD77X9K2nH12UruXmMfTxVKwfKSYSgc",
  "key14": "4fFdx2MetF59pHqhNYYapEJwR4fPaugVG4gtDz8yXzVgyL6Ur4W857AhXyGWS27FCtiUhgr1EPeBECkwz1CxHEZ9",
  "key15": "61dtewQs9dVS4zCdRADy4cPFYsUqdcNMPr8Bnyf7U3y2Nkzufpz4tPkA2nPLw4k94miE6oxqKgtpE9ZWkEi38A79",
  "key16": "5Jfkorc7Q2LLa2aP5Ghhf2TormqJztt5eWVgue2o55DfBW4to54Rt1sZbivT12bgcszEqVBUBQL4QXUvwZL5sZsH",
  "key17": "3e7C68oj1yyEe19uaXzKsPwd3BVMtDB9KsBQpf78Zny9byLX8ad8AXFcdRrciRPNKohYnYovdzC1kyighkCsxiN5",
  "key18": "5XjbDffbAd7uJ4ag6KV9PnQPeFsDP6RU69cXt8qpBNW9tc1rABxnU2Gm3C2QZusWg9JnRpPvE3xEFMmApA1JbP37",
  "key19": "4AMXKAvrmfZEPKXEcYVvWCfXfETeN6LowNNZxaX1g9QaRccAMLJVf8rc4vnpVQSd5nswqEvhFq5cQoFmsqVzjZCP",
  "key20": "2hXxgZqwyTd9Rf4E76AU8H29BnNeVphu5NRzuoJjAUNz4tdAeLb51TdvFMC9mhMLaqHqdh25DpzB8jkaA5Ne22cX",
  "key21": "66Bx4w3kQzB4mxZMyMcAn1mopEdvggXKDu6aE5VK3snsojMU3M3PXHiYKEYFpzcHYmrHoEsi8SjQDbGvg56DiyC8",
  "key22": "4k95HiX8aUpVdWAAUmXG5g5c7eK1Sgot41zpaaFwCbhXW8FCZdjX9KnF9rBBe9zgdMuP2TXB1mhciUZNJN7zx5QZ",
  "key23": "3jhu23yfaPgXHp66oBvLUnxXN7W5aQa6g17Yud8BWZvfdvSwe94bnvLWSaWCFXGPe2Xhsms2mjbc6Xgia87ioakn",
  "key24": "S5QtfvoWwCkFFVt7qvr5odd84MRmufsFxa16J5uECrYyLCoSNp7VUrogATXueS571P3mnVCu4YmBUSmQzkHQKWr",
  "key25": "2hcmugX2wi8eGMF7GgmvjF4B9aTYNApVdQ1TBfAashNExzQP33Eprx7GkBaSgX3FW4UeYcVmc65Gojtg4CF7BtuT",
  "key26": "3meefmQLbVZ3P3sL9hSBzzuD4MMP3czKRuj6SwSAkVRK4RivUxAd2UTF9sJUEnFxcEW9g8juFoRbxaZDF9yiFbHV",
  "key27": "3SDBcPWgdycECeGPB15ynBp1iJ88Rdjx7dhLsusSj9hDi8KnQo6iXNhurN3RqGNR9oW8WEMKfVjENJfxLqkgAu8c",
  "key28": "436qe3rmz47sBG16BLVryU26koJQZ2KQsFLnTaVyHB7FLPog1xP6DUqZjWKof1oG2Dk7u7fym1aH8G4YksWA3R7C",
  "key29": "3RR6btwk6vcngJxG8dHkDMjBJyq111o1ow3csScWiUonkMGB1AA6fWEztE43rxsZumeRTBkaB2duhNEgiLKHUHbb"
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
