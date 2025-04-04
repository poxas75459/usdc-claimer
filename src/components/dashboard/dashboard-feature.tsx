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
    "4wKttFRAZZR7gwKAd1o5FRcoxerGxcpgEkZ1ttmpWdM3ELZgYfNgcYkw5X6N7gFJ6KQq3g2b2duJnXZrjYy7MW5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asFgvTUmxzkDwKWGQzT5n3gS48UeS1p1dACTvzVkTLX56Zun1QdYF5L9ByXNsgyy7ZzCfWNphns6AoKuFcaqwh9",
  "key1": "55ancuPL7KNyCAMnbxd1x315khj9Gpk9ADiBvKBfRRrztHU1HLa6pnbQtDQmdJJsgd9ZmcicHztLPuqGp8rnaCdJ",
  "key2": "xsDv4Qb3SJMnZ7ziDLVHGEu1vifn7DfWh29GVMGk1JL4G9etvLXvCMt5SuLLFZnUCYKWXAfBjLJbrbmz1dg9Boq",
  "key3": "2DNHwRbV2F8c98oXFjGauDjwcjMcARGWEC5mcnR1Co8ncKEVfHhahy3L3hgU64hoeMW1KpKQkkWrvVznSi6g685Q",
  "key4": "2PoRHuwqBvFBDFZMHVsCxtjFSayoMb5gd4KYJZVzYpTWRA1HQLwnR7nAvmu6sbGR8Jvfy4t7PN5e3ACEj8kevJyd",
  "key5": "3cKcU2XPxbtG47nwdVDincfViayYjfVocTtQNSHiNjdsbNRMLkQ3fsRycTH31v37yvY7YV8hCzFh5BRvbrrtaByb",
  "key6": "28xwDTZbMP26caYoo1W61T7AdVdi9EUhEhqxxBCQmuYWLetuB5GnrQWyh9N9Fzr8WKsw2j28tZiQntHaYzL31irn",
  "key7": "5VpVzMyF6fRtXqs83CZjL3iwARL2BThVtUq2SVQVq8mytjwciMMF72EbEyeaLr2t9n1RefjPYio7sw6PPxcRk1fG",
  "key8": "5aphMkT1iMdJSAVsT6vDxLAcfrQM4bnfYDcWHf55jpeHBWRcY1jB3BtrFYwbcryxUzwCaUbHfae3YGGQQ9pHYSzb",
  "key9": "5LhpSWt1R8WYYa1sDzh12Ux3jBZY2eRwcfLVjgnW7dZomeW1D6tEZGw9bVaHB4s3SK57wKnrJ9w3zUFcGxZGP2dV",
  "key10": "45auKMTEwAtTNkfPUERLLxZn4wsUXn9jxVc66AT7DoXcWnsPPMG3GUGsjG4yHPGBCPUfPNNRx7GweoX5WEDsgKru",
  "key11": "4f3xwkw3tdaRwWGtx6DknA9XGKq5x9sZnnYBnnGqz5iU3tC8wNcjJqG5mNJ2xwm58govg5UFzGkAQpSUkvyqEAML",
  "key12": "6JvNGR3VRpey8g9GmUJq3Zy3CMbP38ZkyPJoaWgPVSAr5YutQkT6ARhazshD5F66iNwwyE1fEe1MHAVRXzVn2P6",
  "key13": "44oX1XwZFvqGC73XStWF7Vv2h87mrU2d7udRWBWr7m1Jr81NYeArVoHUXgcpfut4yQLJNDsYFSvaAUuCyC5t5cRv",
  "key14": "3yJb5AxwtR1vTHRuGRbS8hDYD8Q5vh9sQXPHy3FeEjiXryHNY27WT8zPAdjAjAFTAuU8eoCxTBmafaWuVs7RpAAX",
  "key15": "4ca5VQ6qeRjPhRW3NKfrUcPSPs4jJmmNkX1pRQy4YCLtCfutGNf6AgK3oQahHMV9siZKPrRyhoQMQzyF6qq18CTC",
  "key16": "43CPLTf1SaehSaDw1HSfdMsHnwpxq3PoqxudghKnhzS29FSdoS4XFvBAs3RdZpTpFjpVfvNseB8Wbp4jtFyVPNHg",
  "key17": "RNMzRSzKQVNX3g9GuHjizjHbQLEMwmu3HhhjXf2TCVVLh4uEbuPSrVj4TTV3PqVgbjYVwyVGKXvaKNsBXV3Bppg",
  "key18": "67d1q9pkdxuKaWZ5diegNwLMdaWCnkwGmBohw52Z6CHexh3Jz8GfKsknhzZm4x4jjfkQjzjMmozxAHiJQFdWSTiE",
  "key19": "29mHQgow1HYjJ2HsVWqKby5PBu6r7W7CdtbwizdRAW85j1uucqzcbWMhx229v7g1mUdg19bAeEnE1Mt1kwkwbtg6",
  "key20": "2zfEpe13aQJiba4SgemKsDEhH6xoYpvP8jFPwewgsXnPCiJFbaSKFfFfmNpqVy3usJzRzzfos7yS7jSvdomwSUZT",
  "key21": "5hAjHA6LiQf88saa4vTRUMRmPHM8pCd6XU61N5gKSNskPCacxRuaCDscQ5kQXGU1VhbELjrvzNY76BRxMPv8Qtez",
  "key22": "HvRT9pi2J9kBVgyFfbbJAVdNHZGrcASk8zAfsVzmBvVSJ3gdvs5hPmijsykxxUCKogABemHworSHaagKBxRhvXr",
  "key23": "3W4PSx793Zz8miiRNaaHakaBVEGhesK3vSZVszTJSoyYL4NmfPWnG9MNnZjQVLAgUYJeFiujzfe55ziR1EoFB4D",
  "key24": "3PLYzKSFR3Naf66nYAq7MmBXXtJkyxBbya2dw1uGUQeTFoLpiVRu4zAnLCh638LzJa3GiGQx9R4KnkSrnLoTMU89",
  "key25": "rjsXd5JSrerRjpU2oSJMuApBKynzuWxWSndM2xsNUzQ1A3LHhm5g3qiNSCQeFhkJEscr5VTYzkgtJ5eZfxBm747",
  "key26": "4HrwFYcaZqrRVCQ1cfsKs6jFF3RMdRF5vFMaYGvBJyXZPBRFmFu9AuDKRqFRUAfg1EupnGQbPVL9tvZxvGms87Ui",
  "key27": "92pgXoWXsDEnMdLFJvEEGrLge5ufeA4QDyoVfmzaG8X7aVX8hnkdvBewPsmPDm5vGz2JW9poYwiSqGBrFaBEgwT"
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
