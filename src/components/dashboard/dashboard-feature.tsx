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
    "4aM5mrtxeiG3ZrMsmk6aBYPoAr73fcR6FgtGMStfWotfjSPSmf7S5noq5QWLS3QNvK7zmEjviRM65v2B8PmDiSnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmFdA1NyPcfs3Bd2NEWHjyAXRav7Qq4fvKzy5kjULjczMwAX9nmz5754ALPFn1QDAAonVKzcshgSpsfgsv7qKP1",
  "key1": "4S2EZ3mS2i7iUdtpzd1HPGbD2eDXds1mGNYRNU5hV6cU9GBw7daqjexj6A6ajCW7P63ZPYp1NZuy5BvA2c8MV6ya",
  "key2": "dYWUypaD7Xk47qgrvcQS62UJhwVkHVkw5UaYHdTg5R1fAj49CWziC3g8q6SZhQkrjNWW9Vp2ZjsEi9nhc6kRnyJ",
  "key3": "2oBLBtFpDS8YhpqSEybPBbfc8J9zPQQwZnENorqgCbptdJjfockqa7ng5ZCy6kZ6s74Ff8cja5SsjyUXcWXXWy8t",
  "key4": "3DKFbyVkPHtHXSazPdicQArqVcVxPDmo3s8CNG7orRaQXfrvAdzaxqH9Hbi6qV1ZDE7Dyz3614b68ZwxxmhfMd42",
  "key5": "3tbuBfXV6acbNbmapLCzE92shC3AmqiHr41bBaw5jwMZ1cSVuLk9CvahivjAmX2YHJV2x6RhtkVPVLFTDqN3v2PY",
  "key6": "4MSe7K4sfbfUX8mn6T9N8jbacZP85no8kEbDwXgLpX1CxsfTKq7BdzM6ncr3Uk5e63rMZQWuU4b4U5DVmxZypdBy",
  "key7": "4qYqwqhqhnrmEwezNvjVChbHhpwWoBa1k47jmk79Jug6TCZcCgMHWFSZK1Zd64ZC37dLMfkwLLDgJdu4QwpZu7h2",
  "key8": "2VYdnYunRENXWYktBweJSmj98KuSSsLW4Frdqe9e8uhkUf5pvmfZZFnHq2trkYJGEoug5JajnArncCr8bw9uZpFQ",
  "key9": "3PkR5no6nGSZBpVTdTPbsrZr6ZeRXg9qABqWWHdL4zEC2KHxoCiwBm3yyKN4YXJzrKVKWgp6hSjScWjC7vZVmPcf",
  "key10": "4vgdDKNCQi4X97oce96fiTSuGndwjedybrNNC5CXZT92kFv52x3cBtexy3WYCU7FUqQrxhj2DPavQk1PtohFS6CV",
  "key11": "2FcM94weDXjHZdXjLTm3TMzSkw9Gs9uU5YBwYkywsUDYH72APir7y2UynYLphiwhsLmrVS7Kbdm7FxW5AKjxaWa4",
  "key12": "4thUVayVcfdCY7nQGSYLM9CF4rBp8gcXz4Fkk3dAP9W2yUrGko84k13KzpL2uLcGv4iWDB1pDDuhRMy2bV4ZSEPa",
  "key13": "4K8FEaZ6dzohNshEQjjkr79rnEw6r8nLzohjRci3FVD4eZ9LrTSA8dBPxAXS3QefJgUWNED2tkXfyMgCqpRykh8u",
  "key14": "2YBdJbBwkJugsvqMiZD3qwmC4MDeFz88fBJ3ZYADhTxTQScP61bXWz5hgaAi9Rg1e3xtHx7SrNyaE1hCYAkr5uAu",
  "key15": "4FnczNqu2Av41QMg1LjibQwenUVYo4L3m5PcSQuGUWMpCouYhJd9xU8NE7spXZCw1QjrmNEnm5JQyTCA2LfQnfMk",
  "key16": "2w6CyHAjVPpRFB61YNUZ7m9dapDzTdWPuLLnwAKQEFqCA74S4vrFymTg9tZbQMDSmgGSc7NBSVzo1VzFZDX6Fg9V",
  "key17": "469gyoXaYx86mQLLRRBS6tb7pvtwbKouGGwJ2N62YRvq8gr4n1PGPeQ9PH9yhFTyJPWbaGcA136RnysThpgr4LBz",
  "key18": "3YmVKewEr2GwPu6Y28aGUt4HMoGyHckWVi4jEGCwpm6Qjg1yBg5pyTP9mGdtMAWS18TMH1KuQ7fE1HcL6Q8cD3FD",
  "key19": "61ftXUyvRqpn2p4XsTqSkRDULnnArBo5yXekk524LCfMNNwjkrz1QHo4P7bCuCJvAF8yUujNFMtRKWhiqFmqj8SZ",
  "key20": "pbfHJ1rwQiN7oL4qZ1VMWGqjHWPNPxCQtRcUWDWKpuK9XY1Y8NuCVqsrPXuKuEBpXU5RFsKi8ucj5xeg7qBYDoh",
  "key21": "2oKireaRZS3LqS4U7EwHCRdQ8vHAU7cegSUDBvM99cqYYSdfNT6mFmFBCCveu27vStLKTizArGoSjhgyxiRcMKEx",
  "key22": "5XNdywxSzpfSLs5Zt6k6X9fzkxACApL852WmtTEYexbMsFAyEfzPHPfEsUeQvQLkRFCMUE5Kwev7Ue7HYFKpjb19",
  "key23": "2zA7xjTvwFhwkEfYoWGWEqdfXMGubQy4wEY24bgWWUiRnB9UjW9KG4qmR35QLVnsyccKcoW8C6r6yoWWwoWSPPSg",
  "key24": "kSHkSdT4EwuZPxTEA8zTqT9PLySG8dNua94EgQB3QNcHm5AmoCNpJGPRjz7Zwmp23TLTYaZqSbGyBjx9hpTUS5c",
  "key25": "AcENwqbwKgFNgTbKWFHss2Tg2g2DynBo1Tea9AsBMggUDYpqHcL1wmmrH6W5BziMXJyBFgwqqtWF3e3A82wYug2",
  "key26": "4q2f4bnKgA1eTsL1EZcXXeH2er18DzccVUHcXUoAecQWhzEnTJ4zBrvLZBhfaScdk1KMJTmXPrRMAj5PePseK8sr",
  "key27": "2ZcjHZqzb6nfHpNzZ8TsDhUUGCVt39ZFASRdbKHoZTDmGRfcdzPSWNTtu3DkyTpPzZ7Pq5w6pWhtcW3HHFZN94MY",
  "key28": "27AvPvkwzGRzoKq4svR6LXvMT4cxUzLrCPWPsGJhE68DXGVsiBV8nUYZt6eAk6kuXPM9xgAicf8qjLsj69GgEJXd",
  "key29": "2ii7zPNCzExocEJYMS5pKyrkMsN7JSd3fkXfrCMyfg2KBn7yDwrCidetMZp8XXGnSo3YFcnUTm4AQ315ihXfXzFo",
  "key30": "5DVBoe7Dwv6D2WxFsKNi65dcp3gPH2TjbVW7jA9QR8UQwuoRRhU3KNbL4bZv5a4SCUDdhY6YQAmPnagMou1G9DEv",
  "key31": "3AVEHJJQoUHfp9Tztcc3J9HVgHLoHFuPWQ5G2LG6wBwVgS9CGTpx1Uo2fcBLqPAq7gNNKNa54hX6voZ9xz4NdkLg",
  "key32": "5UBJfH5VY6ykbmnPfZY8kFLHuh8C82ySsJ6WfabSkbKjrWbLLYqqgBGoC4xcyLxo1R5AWDDppoUe3WB2L6uwXTGq",
  "key33": "63nCfwgCHcjJK6WnvTtZ9HQG6YWoWyLEvwH6CsgWUZ1Tc1PxfKKUQnYRzSDhNhGtbJ2Q3D1wTRPo2xrPY1ZnA3VS"
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
