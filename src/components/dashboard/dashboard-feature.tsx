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
    "4pFd7SE2ancXSko7HvoYCDcReVtNWs7vn27v1JfMcMY9HDtj1SHDU4r3RgP38p2LYpxNLgDwa3cmiAyyHshHB4mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAVTiCwtrYv2hWbz7ywjbXW8dMcYMZFNXkUxH12ZV54js5zUi9jcdWU664MF4ih9WzUxFCa329voCs7iTsTVAYV",
  "key1": "29EhKo5dxYMNeci83hbtGMPeJ93tQefwkGNApoQWTqeY67KEppxC1oteMHgeFnQxYmvSrKmjtKKxjE6koMzikmPb",
  "key2": "3ztGCT3EXNijm6fxP4JXhnf5H7zebH14ZVoiNPWs2ryr9nFkvTcCAUHyS9Z86aSLH7Ad24xbTQbRxNwBHmUEYWoL",
  "key3": "omaV3TvpbMXkMPwQXxmTSpu66Z2Eh4gHbhnGPG3SUEwQ8Dr6BbRJZuqCgZ7A3WaWZPx7ZjGP1rVY34GHSo8Upmb",
  "key4": "5TXRmFS7GGoDGEbmJayCNMrEGaeheRCpyHvpVKSXgEmbyw1iz8yGmPuuTwP4XT8PkLHmYjS1wciQi6kwrAEvvXLT",
  "key5": "2gqEi28cLBWTg5aSbqNNfMvaH8haWLCQN7qTcBkRveTqAFjiG6hcvVQmunpceQMgKpQfd8ucKRSZRTkETH985SvV",
  "key6": "5U4FNtctSh9rBncMRAFKVLJv2qqWGq5BTLEeWSy931KYzffyj6aKSgzWoyUYru7hP1E1DWWqNmbKU1jkupZZiCcZ",
  "key7": "4BMqRpPrFdU9tvR3G2fn2JDS8M2yBZKcF2njWhxCDvyxaRtgKmWuoDH1LX72VfiKN5wgYw651CkSH3cSfn1jSMvh",
  "key8": "41KEK8Sz51PemJ6pGZijv67rUTwb2ZMGjUPrqDHqobgjh95pVm6TGTTXqEAVRXYx14UzVVX1B2YCdFKi2NaYG9A5",
  "key9": "4e56UdBchB5B249hP2ruCSkhQRNZPRsxkXi25Hhqyff99dXnGxbGLkCNVthn4FdjZTt28jG8Lnw1KzZMwa1zd6UQ",
  "key10": "2sDerYg69ejMwC6e4UPJCBn8xXPJdzrua3qKgPbzJd9wKCQFNFN7B3wrfiLeveUpSjRLnTtrxuwKRyXb89hBsWCD",
  "key11": "5eHdB7iknpj3EV9V47Hz5gkyZqkmb7dE6YgndEu7hFrtvPMM3r9XPDF3ip99VqAqRSqvYSg711oLtFXLaHqQSyue",
  "key12": "4a8yMYpMAUqTVxcqh6M9ZbcbxNwF2TV75ihHZChkFk4PPpLiPQXGTNnu2RArZD28MntPa6ftLNKaZf116RYdJiti",
  "key13": "2fiQqewq2RdSTnJuzz9Rs9WeSRnXuKBNmV1JfXPVEN1haXCv18YjXaiiBCoBaHbZ84LrJQGcUTBdcP8xo6XAVSoU",
  "key14": "5DVSwpRFfyKy97s3cuqyzAo6qEteSGF69ozjJuZSw6nwkwbP2KMzCRStyWKfjBFZuVSqA9MGgUPVXApcYUdvsvWQ",
  "key15": "53v763dNQeNfRTuDYsNMQuv2kagxsugPxJvtKPKS4w8J8Zuu4rNbpNis7kfFFmhBWQyFRAp672xJXkdSyAtnhTfH",
  "key16": "2c51mUVLr4NAMnEuT5wc6aM424hZVxBbbks7MSvAHYSyoDoUVy6WzFgqbBarV8osJMvzv3o66QAQyGngq78LTyaB",
  "key17": "4pcZ1o5Lu82bZurNSG1AWgqRTPJcPFBn287Xnu9vQCo8EXScWiNDCoiLpkxoMs8Xm5N5hMoNiJHVSfDri6ogCyUU",
  "key18": "4PKwhBsTwcQDBHCTZf2QzPd8VLsWZWj2Vtbrok83SfaxRuZMWVQaimBMhWTyj7nTxTFAUDGYWuuAZDDE1AoouuT1",
  "key19": "4gbVaQ5zSnN828sUCT7zgLdN1s7QTJJbyWwcRawpzuETKn4FcXytuKznYsaKcREX6nLmW4WMLV2TQWhAqzKMUeLN",
  "key20": "3Y3XQHcrxZneBdydMX5SibbTQuCfXfPmFPQX6JK1EcMgRai69cV4DZn9PWgV6U2MM9zmmqhZqTghoFa8ZPzy1ocx",
  "key21": "2fo4xvNgSKkBhT9uncUXRcHTQ4toiV3TEymZMUhhFYTpf1yL29V6ZBF7EopgTX9sBND4wdtZSonmRzBP3NPdLqHd",
  "key22": "zZXS3fm1SKaqQvkW93LH3q2AoNFHVQf4gMA1FtTtDBJzud6p2XTNYuasSRUcHFp7CGgZXWQki9JpQ7sRVJakgxg",
  "key23": "5RmwbaaxWmuZc1z6xJxzNEgYVJrnv8zKpZ8BnvxZkTKs8VCkiErHWwpgRCFmakaW9AYXdrPdk76vdSGFYirECy3q",
  "key24": "4Unz2kqkAVacmqEFBzaG9sMTDrdAgkcF6bshPxoNoi9vgqbvU1gFpqKGkrRi5Lk2TauWFVAw7qaHau3NwfttoZW4",
  "key25": "3Hdn978me3MbREigtp4zCQL9E9wmGRswzFa2Usu5RCcXy3zVtvgwdNW7u13TdKgpRsnjvghKfbmH3LwF4GfEcbTU",
  "key26": "3vemwXCXZwFYuYNdy8LmB5qpgX5NL4f3WpJ1FTxrXYNcSFqn9p6XRXRwor5tG62E1RciiGaS7jjm5wJrRe9fQNte",
  "key27": "5KDhEn8Vp1uoBDpSa8bo9Pv9NaY1Jp6otnYmz9W2ZfTJ6S5NQXtzGBguTGv6taizMEUL85Er4oLfPLUEr2JLAUvH",
  "key28": "4kiPCrrQy6WWEFgpXu7hhx9S1bVVoJoWDrXKzxSvc6Gf2ZySCd6ADok7t6nkbybyPJoDAKESocf5J1bnMXr8HpVJ",
  "key29": "4GGwySDdYJfShwtynKyu5HT7XKx212BqvBCDaQhKPWzR4opuvrAavtq9FG4QtZuj3okNMTUvEdAcBCXma2uhcu9X",
  "key30": "3ZVGCJUKMBTTtwbADoQSN7xCan4R8bKuWW7mmAKujk19oRZPoY6ZZpyB3mVe9r2gAwtULDwZHJxv892TgwEXVWy8",
  "key31": "3ZYa2Kb3KgbaJ3YoF31sAZFQHQb4U3DdhxzXHaiBCfu9GYfJsUwKNghj45WdsXuToXPkoc2EDoTp7evSJNfU6VEg",
  "key32": "2orQf5oJbe35fwSuGhwcYvmpcoY49vZ278LsArggTbwtw4oWtbppcvRHNh36TAHmUvriLUiS1J4JG9utuf6HWMgU",
  "key33": "5CU11YnEVKKWSZYrtoEVmW1NKb1RkE9Zr1kkSAj63UUJDqPyhWiuMqNRHLV8cnWm84PZ445f3xSBbPuhWLoNDs4o"
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
