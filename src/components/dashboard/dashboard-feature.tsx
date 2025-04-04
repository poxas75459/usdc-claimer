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
    "2yX9to9n9fCoynPoLGCcZNo4asgb7Knv3cgX3JDfNTPfE6ZaPjQeoAvqs3qNFeW8iVxYLWB6wDERUkbCHwfvbzTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YUAUSoeTcGEtWgFPD9VfkuUFd1C4ZoRBYVekgryjkFvLnzKr5Cy5poDLxagpgcWTm33jAQdMPCaGvaK4zJmZJM",
  "key1": "2Jv8cXqr6E84MW1dG5qhiqnXepPd61QUBnfpnwpfWYABumAwv75Cvfuh1eziDDh6S2CjjGm9thj6tcD4JMirKFJc",
  "key2": "233F2KuMpxQSojwGKEE1ZnkUdgV9fRBmXUEYfxBrrGfWPQcHQoJBB8wY9DVJxuuWzrBeU3dCLzE1XNXhCNHQQd97",
  "key3": "49Fdvcd5Mzykg7Twj8hyyHtQjTbdWHj3JLiKLZHTCrACPP3MwZMoB34aot55GVXFrtRFMap9YRSwkuPUzXLBj7Wx",
  "key4": "4D8uK9NzwskASZqEJtDXQBcMcgVj5NX3eiuveZwVHsqitJBo2rBnkhppzwEEk5iUn5h5uzu5koFPBuzGgSuLaNjm",
  "key5": "EaZCC2c7eV1H1cW2NV7dWEwNMCQeVFPum145TxfpSAd1MkWYdfmcxJc1Wc2WbPKipyxKJo9nDQJk6Kt5DBvvT9m",
  "key6": "27Wozq1SaGtXzjDWVf6mo3fyTUrizs1m7hJX3PDRmuNga2K1qefKBR39KcrwYmW49Cv13gYW8AgYeAxAq42zuPvz",
  "key7": "49SuUWHic3hAbQiVTnYa77FoX8cjKjfCkw6ZhGUFYFmY99fVFH1sthVUV72cZagrscGQ3vV4zXM9NB8ymus1p2Dx",
  "key8": "5ZTXuRpkXEbdx8LcUnbTPyN3aCcKKyUPvxuJtQiF23Nnwdx2Bvc7ojWryAQTcQSsvrH29q2aXYWQJbw34EfvXgZc",
  "key9": "5FBj8iV6eg1ZBVUubJUEz1QmZFwp6pj6fKjyLxTf1WUTDyX8epfX9quRLChjz64227ZjR5XqVk4jLb7sYcGoiAW2",
  "key10": "26ActBN62WT4LNTqyUneqjmCxEFXGbqwgDDzUEikSjcaKNubtbZVwpQXo2sAgjTKFfB8dLr4hnpzspjYFJ3VDFG5",
  "key11": "5SdTKGfH2qwj95nA2H4zZmFot4qT2ccoqkhCj5D8rwUhZNLRXZYxLhNZKZ87eVDtfYjf5ePt2XqGjNFtPgRMJrqp",
  "key12": "3xHtJXonBq3JUcPw5Q2jot2ME5HWKRinhH4Wix8X4Ag8vBNUpHSoaDJgFo6CT6g1sZAyL4qgiKKgKJ26MG3q8tnh",
  "key13": "4bLAvAQYRWS57kukMdbCkVLvt6YgLjGTxFFRH3bZx8wWCTbwXH5oJeuD3ukgTKJThc6cdfciCkaHAwzEGB441Zgz",
  "key14": "4gFAdF2Y8FwGeTM5ibnbKpFyX2JbQ5BSBSENKN4PU8EtJ9wScQCFfM5xLxbfAcBZgkmXQkMufwGojx4Xr1tRLY3C",
  "key15": "kuxvg7QuLHA2U5zzmmBsFU7KG3nxTJXwxTzR4Ww4XjwNReFXPznweZ3ztJ4RkDs9ydAKPha3XpjWMtJLQ5VGPcX",
  "key16": "2r4akvMTPoAPmhn9Cy1CpMRN4grx1kv4oibAvLxkwuG99qsL5UUFRVhF2HKFjiypRMCDhiYM61aMvyrJoKCEZMTD",
  "key17": "5tcYrgTqXVE7F1Vf2PaeUp3mLzA1XqvznRqGuv4pwvgqYTDCeTKm4LDt8d9bmD3vhd9N5ENqNLbJRn3zTg8Pzikh",
  "key18": "5w9Nxokp61GBF421bnqssozmM6Jt4ncQf4vgxgMQs1zfEPJP8fM1kPwiV4j4H23FiJXfPX9aDeTTV5JTibqkerwJ",
  "key19": "52Eu2giuBzTcSPeSLFR7TFTZgSo94wx5V3sYbwR62dVLGnKzhnDKscqqKYA3Nim58pUq9FNdgWuBoZ9SND8wmtCS",
  "key20": "4u4RVWuzhcchsuFhr8MSRgv4GGXHqtwJ8jbQrF2REf6XQCGwQF5DaRphMGk3vw4afZUydq1zuFUXmfyZy7RpiGmQ",
  "key21": "3EY4MMLUJ5Yp9LhkwjVWyrBFaFQdckG6sw1Ut6h9YuzoL6v4MniYo4twJuwhr9M671N2L3qt6qzSLY7yc2LRGkix",
  "key22": "2McpuSt37NnYEPyhkkRL4CbXJ3Kb3YgK2M59ZazmKczFQvyKKqbz3oAqnJZXBG2NHu6ffrRDZvWTKRUoQr8DuC9c",
  "key23": "5DXm3gvnyMMqPEujPHwcasueg6czXEgiFh8xSuvyn9Uk6EaV97LRUKT8ZzDKSjjwZUmU1KNqr5nJRmAMRV3qaFX4",
  "key24": "4g96dENg47XqQhAmHW9vNhZvAkUrtkkjVFPqjbVmnthJ5QHDWqeM4YGWF8kcRGUZ3gZeBbmPEQ8JwyHSnfdKhurG",
  "key25": "ewx4iJe2aS4LZgNuD7TdWoABotVeFBATckjERmBHqQByFk7nPWdFqYBnCw5DABfbF56iUp6CyXmrkuda9HkScxi",
  "key26": "4T16hWAiEhMRcqudQmb2kjTobkuTaMxGZpnJgN9QxL9ivgHd8UzRzS7YzdiQtpc4Zpf9qfCzZkn8jHPTwHu3hL8p",
  "key27": "3SGpPJQ63Lxsx97TgmcFbVX1oV3twVfeDDWAtZVwBvBH6tuKtNsfv4F3ib6AP2UxwpxATayCPAnT4dAohpyjprmi",
  "key28": "48wZ1RPvC1MW4jSLGWMsrWVnFW3AYCKcxPHeUZhLZXS2D3Dt55MqTPHMgp31tiZJq4M94pot2UatfA6hENR9MWyK",
  "key29": "332Ee8UBoRTukXJbWDcrizCWc4yfU3CXBj9BND49unv9Pz8ajFHLAmwGcJJTP4Ww3juTKemq6oha8K35VBeEq52A",
  "key30": "3TE8SKpbtSBAWTX1H1WWEaTMsQFcGLp658q4mDXzigJFMkPy4ungytM53W6QAAcfQhUSTGMheWUGXkGwejrDvyuW",
  "key31": "2uRZvFcDHNK4cjFwSdUuga4qmmngcFQBCvNNK2XxHdLGgsKxzranHa8vycXR1MFmMTYRBzh8Vwiy32xPMZM3BgZ3",
  "key32": "LcVR6XRKpMkm4ysxfH4jf5Pr3QqpQZ6D7P2PioqAoJW5c67zRWcrCNA4SavJdScjaLeENrzyw359DE2JvzWEaVH",
  "key33": "46eyZDGqKAvbxFxnF7NJgNFuDiormjpQZJS7isZbLH8w3Eozyhv6DTWDtMWBb1BuEW5b1DrSkXsZ1464deXinezk",
  "key34": "4pGKY1PbTxMwb5GCohwJmKw6kgriUkh6YD1E13SWPHSSjx1a6PAALF8TYux2Xp7hvRZd1qGT4xELC5WutSBxSUaU",
  "key35": "4WHfNG3ZrBTBM4sBup7qZStYakDfwgzkCxr4AzvmFgGPZ1riuhQ5MAgUfgxwMexaRMiYDbRZjtP7CGp8V1UbSN2t",
  "key36": "5gxwHg4Q2NwHtAThxfiqB13WRf6Ys6wtP2FRertidw4i4m8packHdnWA3tJSSB4MVvFa7Rb8c1sp5qgAXa7s2yht",
  "key37": "8VGQnjwDBr8aibUqSZnJeFt1B7f4k1v81TrZNfKFqcYaA93kA28RysPrFcyRniDFmykK7HJvu3KjoVHoR2yyuQa",
  "key38": "YXtrMva6ckYC1Z3HYjYMPxhFqUiYJb3JVK9j9jCY8bK8DSsHD4hzseL81TCw2pXLK8nAdgDDnmEDsg4nxCZ8ufm"
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
