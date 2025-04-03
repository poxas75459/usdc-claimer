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
    "WPPD9WCuLC1bu7ommpzBoBTRPDTZiMkcKcpQdQxzAmKhdBM3BmLWo4gJmoGWT6zvRtTwX9mmquN6rQBQsvsvLm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNzNzKAFEPPNH66caFCZuUB7YXRswsU9x6PURtFJrbtRxNBXvqKkh2G86jy6RN6G28Hce6WFDbVNQeW2cGwndM8",
  "key1": "5CrPfExS3Br87WLLCdU1Ttt4uoiZj2dA57pSTsBBjep3dV7iYdAaDde4EuN1QniYXiDfjxgncJHfRrM8Sf3WKdPB",
  "key2": "2gxa6Loc4yUKDkCtyhHJBGvuJCQwaywZdxUNP5nqz9EN1cFLSjKeLTuWErUAexfbkfSCCffvVF5YjohhJnKnGzkd",
  "key3": "k5rm1CQQ17k3YBfSdW3J7DbZsJARydKEACn7UGQN7orvasRqrpUx2SHgPrb6UjdJi1fTLHQua88c1soXCHHTzZz",
  "key4": "4km5V4726LfZFYWHVquD5TvxaegBjpau34KaiYpajoEdnbj5f8gvxCHqkxnrezQPy84ypydq8AjifoqLCR7znDYc",
  "key5": "4ahM4PiRsqJVLiBGakzVmnM3qbxw7Z54wKxGHFf4y81tpgbaRMEpi1TdFa2kyTmUzze6j1VqBq6xsuJNpcno69fr",
  "key6": "E77w6yfJV7ScZmbbd8PfTWtGcNkFYCv5Go7XngLi3egRJ95q3pCFvS9soeaWkbeERCXsBTqwDYc8pHCvLfkFQfm",
  "key7": "3bw1C3jWhQGMNQry96R7ArPR1kbC3Mj23dhobmtmokE5Smi7dNhzQMzvmoMeRVnpy84RupPDRKfHQ272CrmP4JBH",
  "key8": "7dZDMgsdmDxkGLWEJM5Asp6LXyyDrL58cQBhQ1u9cVCu6tzJLfVtdiQAEsgbJK9uuaUbgess1ZonbziUArTmV5Z",
  "key9": "5EhcGaoy9ba3FQPQZBZBTvE8hdqDEqA9b5niUoCSZ4nqTUKdmuu1E8e2RiDCXo1HmYCtC2AYhCQEvKKwZiGBLh5R",
  "key10": "5cAp8agdbLsgvGnmq82w5bFpJwZATsk52QhMsBPTyQpiVT63Hq5BvEgd3MuxwJ8uvk3eLM59a4PkTPuE5dmhGv3b",
  "key11": "4JYU61AZTRjz5hqnWo9cBf9LBfgDmTENpVo5SMas24bS7msxwJkre4HysbG3pHvwpC9LSpDYf5qMfsKHiuPYLDgM",
  "key12": "2uqsRzoxAEr8YbLvgsbKMotKp4yh5pqJVKCZnuggatGFgXdfK5JLNuWhgJ62dcJueThkFdo9XrdRqhbTfA3n52TX",
  "key13": "2CqzwUoHzKhsmU7iaEu9zNbu5hNXpie6kxrPk6rjXNqUY4J8p25kA1751WroUf7CzrzKdYD4rsyTf46uTYrjvum1",
  "key14": "5sXfoT48nPMU74QQFQzCbk9dFxGC9enbsbZeAvn7MGsV5xhFsw6ev5DiK6oemKaiZJ7E78mi9XwQybEAj2NiJqX5",
  "key15": "3f6NbWvHPo9zKLeHzYzXjJ2zLc7REJwVv9Q7TWhKk8V1cc66FzBEjSBaCK7Q9BRMkjpqdu4R8jw8waehNK6oYQZ",
  "key16": "ygwQztzFjNVt9BwPFV3QgDng2CfjbEchSxXFF86dFQNTcpnEo3Cw4ZcM63rTiYrT8abdwAnTZgVxmCfpHgULNXe",
  "key17": "NRyfFyeP9smVaiQupPM4HCaHNh5DAh5oTk1uvyP75DaqEK6K96Ez1pTDbWX76fAkFP57xgiBjThWKWKhLXzZSZy",
  "key18": "4gexvrwEaX1q35Pq83iAoS7uKCnSGbanDhCU5ySfTpCfMacxsQBL1ZYk134iQ8m5n4zFhiB2QvVmncfC39dwmQHd",
  "key19": "4oLrKexMgvViN891dRL8HEq7mBZmJm9QW3RoREmUwm7SLSh81Qg5GwzmxGvmyuNCx9qdi2GsZptBPBu2Dda9igwe",
  "key20": "3iznRBufGry5FHWWhGJkt5G52HGK4s6uKhaSPYoBWxgyAzDaEygbTcWnQyQ8AFFspfvX8mbbWFKGq1uBCsTz1vtG",
  "key21": "2922Hy3dPo9Bk8TrVoDBW1Gptvi5mXsmqjPxecFhLJLaSrMj8weQAzNcvQZBwawTsVyntwWfrg3GMfFjNxMZ5xZx",
  "key22": "4i1yaAuRXL73tTae1VA6BF1DYACD4aUcb3GC7Am2m6GKUdjVTxGoL6Wy6FGdS55UP1D2BaAqzUwxPpg9W1vupH19",
  "key23": "3MtyRzEvyR8CotD4fp5zvtrjWJ9Kz2BwqnN7evaj6ae3kh62sCsjb64Dv3SqQo9B13YiwucdawACQmkahuFiAh6K",
  "key24": "3ibxoVhAupeWv7AoqLMUaTJVTrFqJaokrmgALYQExZLiK83AfLWw1oLmSy3CcVN6BKM1WUNiWPDevWL5UuDpZNuM",
  "key25": "ecMzfabZU4NgUVeYGWsXTxTb2wdfSAnWWcDPymY9nKALrpQibr5J7mcb9nAZt7g8pinGuX3kRNN9RE9KaMtJEqD",
  "key26": "4VmWX2wUCsDzx4Jx6fSjnR78AjYB5fbVTKddBJyZUv31K8BzXkDzAbzocvf3Pdqijo1jLebhDpZxfobMimPCNwL7",
  "key27": "5kvDSQKYYsm6YEdRdhUtT6iNWiEQy5nGrXBFtyYWLpT5ziQWZheskJBZybjXFQ45ZNcGtSXdyyL9XJYtocToPM7x",
  "key28": "42HxAudbm9EXs81VotEbTwZ2cAtFeJieEkLsnfmxaMXC3tKV78gjEvpbTjWCvErVemdUmnmx4aveEAnbhFMvRUkR",
  "key29": "4mRPU46tvPwVvpaBWmNbrBintiztowvVuc5CFMgoYdw2Jt2Niph4RmQx314wWVijen3QBrqecJ87qXMBSa4vKmAX",
  "key30": "4YfVyaAnMUYPW8hr3CCYc6VHm3yXMeKBEMbHcR3bHjX7s2w7xR5hUTtwkTqRdXz8M59r15qu91YKWu2wXMfnsmCd",
  "key31": "ih7ULZ8xFScDiBbEcww89a8CfA2fHNH2q3gYZaCq8KaxBfx4XAfgtPm9iuXovSHwvvncRcKdVJRpVGr5Ad75MkU",
  "key32": "4w11TUG6Ka1CYAoPR66Giicv1JcfPJccQKNCSBxwUqfKxXHEB4dC1bb3AvxJriHxAgSZzvkw895yQikiXcxtYg1m",
  "key33": "4yM81A6rD6SpMT1HCMsD1UXofx7PhdJkMJXKoBD59bwC64QUXdG7a8PhUiLAhnp5xBoKNkXAYViL4bD76Zip3iGt",
  "key34": "5QHncyn6eaa2PzV6eFF2ubLVkNmuRmPri8N4Y19XUU53QfUNdi8r6tMtEVdR1nnVyFsGK3pYWetFaCBV8FrH7jt8",
  "key35": "5FjQSrpAgaC4r35HxvBuSgsCtm7VS2P5YtoZwgu72bj5LpPDdjoAjZy7CaiiBgzgaoRGj6qWFkhTh1AGbqzBrgaN",
  "key36": "2QQ8tRgWTVrXow6Ho1FYKvWo1BizHFQ8KLL2qczymahvCokuhLdDuTZBx4igWEJzuHBV7kkuZVrpvEEtpSGdFi79"
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
