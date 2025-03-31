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
    "2RnHSXtzMBVGBhn77gqaECmwGWLGP3EZQmqrdU3eqq3buCSm8aqPrnrkCFR4YwMmp92CRvSnd4GgNjboW42uz8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqnEcNpnPb1vFQfkPy4WX5WmiqmYHsZ8M8FDhVzezCyN2ZSuniJTt58hsuDdNHWuKwEd1itDFsxYVNeQZqMg5fE",
  "key1": "32jYanTKWWDZFaCjRsncCpDtki5MnjYfinAe8Fu7WYhoyPWB6bRoQLFVBMYqV86UrgH91kZTR6eZQKo1yndq7wQ6",
  "key2": "54Z92pGdUMFV2cEmGWUg85TedMHTdU8zkbSKryrWjzDQtnP6wx8vAiRefnxnYbDsh4MBN3nqXHnugpgLWBDW1SxZ",
  "key3": "2bm5egw2k6vnnHBYYvEBPmQBFaox7Fde7NsWrJ7UgVVR7ri7hFjSzU8yyBHamWTARCnW8LyW6J9P3jyrLePN5Zzp",
  "key4": "5ZLuauiBU5kukDFmjwdAWBF3GPPymhHHGjHNxnfr8GweHx5qS1C1H4gYruQZ7N7ViZQ9jWR1u7Wzxp9VYfPYKrMM",
  "key5": "4vU1TS5RhXcn2wDXrJE9pJ7ZtBLsdjAUdmQa97PmGCakS3piquKh1mdeccQPfhs1ioqjgh4aczEsgAFQFoZiNGdX",
  "key6": "2q29jigwjbV37FCJU4sjXrZ7spbmiuHiZA9DXgkU4oJe5HBMErciMxnFzvP7W4evWCVL56HNXiFaXstsVDZ88Rb8",
  "key7": "rnMjm4kiuZC4okjbQ1ZWsUApWpzcUeuwbhyGAnw7bJaB7pYnDWva2JK9yn6uNcAq4CVxcLuxL615h4eV7qktH1F",
  "key8": "4CEsN4iFEnnhczVCChTKnEckWaNNiEXD2QVrvDuLkQiYvJS7hEfhmL7AWF2F9QMfaVmvzgtPG5NkdSBwpF9USuZN",
  "key9": "5HkXQieLokQJXScabTq5nuvz643ie5E8boPGDsE4RivQ3CuEJh3mNjfY5JTAY4TTxm1qSYMzxhXqNvF2cuwJ2tLb",
  "key10": "3fDfkmkMmUnVCjcDQRoH91NnkGSdZ3XQ5SuyYHQ88XyCTmVBFZSoUY1Hqczv2SGvhGUFoam2AErBGyjX7ozpEFH3",
  "key11": "2UzPD5WjkovL1uKvby9XbDa5aia8EA8TbxZyNasr34SpbSWWNDuvArPJZe7CY1wRrETuoSnxSzhhyqhKS9SGTgoX",
  "key12": "xS8uF1Z1DbdiPxqwo5mQnTjtQWDPfDNGMXYppTAZUGvrVBChy22MsBPfipZCmiedqirr4nY2q5EpTQgLeDbgBaF",
  "key13": "4dyvwf5kYQMezSdt5nnk5akHVrx661NktjXuLQonKLaNTKWDWuBz2VnntdwqLHLpBGrKRXcKCmV4WUiUvVfqzmuu",
  "key14": "4yHAh1ngGr9fbVWdaiHUGb5cNKdF5dAAqTURxyzXjkN5KYUHP7qsxaPofPbheP8jFYE39gpfDxbiN3PnT69mgjW5",
  "key15": "LzqZTYkKf7jc9FxjrNaMm5rHtuYhe48s95Q2nj6Fs5kppZtEPVDNWjdyCmBVwxPqFtArLzHeqX3RriPnND7QWPv",
  "key16": "3pBWALq1BYa28KZK5vHsG6GmuntvvyKdbEaLaTPGDFBKuC4N7z7eYbWXgbb2eUSMGdBtWZEqMJBtXUQw2gpJ8q51",
  "key17": "2U3KuntavZVtsmST2hZQX9wAQAhdiQZJLgVs8QMDJnZfvUT21qf2ZRWcAizwLTz2SynR5TQrWLv3fRmQMzcazwvF",
  "key18": "4L4xH2PT4EHV65RuxRgXzqtr5Ub7Kht2qAJzUKmbsAjD59CYemEWsySgznHMRQboQyzbgodx96EVjeQwE1pQtZcm",
  "key19": "4F38KeCixgKcV6ALpejDcXtTuuPymajXVjsxbLTce4PV8guBLkPFDouEoaVykeMFKSu8r7ChqikUZDk2hQaHujT9",
  "key20": "4FMu4pRDMzNLg1sW8W3kKo4yaWc94GxBDfCLteaUYRR1sjnzToxJZepQ9w5SKXtGNhRwHHtbfE6P4Gs8FdEhMDqL",
  "key21": "58pXg7LDpnoECareF9Hbt2YRqhHcGH8jkoA8sKwwJdCjZ6vFNFLCsWr6211NqJvtDqr6QkosiZfkbhyE3x5Y2CTh",
  "key22": "VvBz5TTDmY3yhJNf746Yw6zEh7gmbMhPJnvaja7jpVsZEo1A7wJ7XpuSftRULiAGbw3Xr4dwmVaZzkyw6srDSE8",
  "key23": "3GhkMBZimcMJwhN7tPivmt43eizBHTvUFUoUxgQBpxxuwAZ57N8mqsUQXMjcz77KvUBZ5zqcMrpQw25pQM45RGNr",
  "key24": "4GzLCfRyS9R6TzBWJRi9WnyC7oNQGuYg4eWDi1xVqJFotqFehAp9SCjVQYFhfqeBbwMWqzGua1sHK8xiiaSZejAK",
  "key25": "4FPqB4atiFsSLJwbs2RSsb32vu9tX6HZeBUHFp7ErzMW9qZjUtHDddwgdYACUmDSd2qezcLVbBMNfg9vQ21uoF9e",
  "key26": "5pdXmRgzQyE6fzwDrBsw7fqLkhsb9q2wtDdhipc5ewdzwMfZcfWN4tvs463vc4XQbCzUYmngXCb3NcbLHHMXfpmn",
  "key27": "eJc9gZXRPkT72NJrtecbW1vj4Zb1MBVXzpTCycpQYgRhcoo4Dxxnu6ybci3JWRjx2xV2TaorwVRmUHr62WVfzHM",
  "key28": "nd6XVerU9g8DbiWaMZU2e6ShbHresxw1SbBeMfppVurqwM6dF3WsXY3ipYJuJScGBnJXkPZhJSgzmjtA8TFa3Nk",
  "key29": "63evZKPugX2ctKgqzCQSFyckvG945UMH3eznCfPvPVAnRMrQcYCi1iNBuTZ4pWcky1C3apSWyjS1ZHBdsZMThVu8",
  "key30": "65qPTwRXMNAgGn84iDm375D5q4tYVTF9jWYxTkvHkp1g6FJUBxtGe3NaWs4Zu18Kg5yXt2wTnoAVcfPBxYLLrrHi",
  "key31": "58ed6LtAueeGZWUwCk8FsWmUFnz3MbGNV25CyTQKpqhV2mVxqVK1E11FwcQdGqN9fehdUCnKRaK7pVWJMEchvHVd",
  "key32": "67irqgeDZnVwNkBfWSusv3aBS9xAuxEiqssYRpkVjAVe88huGqRzRbJPhTjf9DoncWKduAy6VScQ9xTwH75bZpMB",
  "key33": "64QctcGS4LcUvAiPoXXaRAQmFRSHTyCX67kWbz7WfVTyXn7oAbdoy3tkXiVzTMbfVv27zXzjwYafQGarihGytaSX",
  "key34": "4xCfpY5Ua13eD14n3Tp5Uh6EYbvjA4ymGkXQkRnnH2CMY3iV1jdjUN4gVuxA1yiiSPcETUBY5tWRHx9p9i5Hwsj1",
  "key35": "4J61tEhwp4bxw49pqaWYF312HjxhWwGpEJHF67Qg5kfBeArFUCee8w3rKxoLLx51jQssLk5h1oz8rtvyXJVNwp1Y",
  "key36": "64K5GxD5ucUn96KLsKWQGJiwLfeFYaMVtbaH47UdSn9b9HJFGAmpZ7BRPCivGAy7Jrjar5XsJpSh46PXXdsu1B4m",
  "key37": "Hja3c271HPGo35chMNABGa4Ew9eyTmdqjWkQxUNCMEmzhaGLqqcbQpxCEzXbk4ztpxSTzxnccBo7hHKaARQpCFg",
  "key38": "5nbz9GzJZ5SPa31WDndh6XuzSWFcMdDgcTMyo5sztXXXHDTUGJYZU7jqa7wcppMCaarFqFhsaF3W7UYcdy1Ldiy4",
  "key39": "3NEECnRebbiZ5iGba1CmokkWixUYv5BtSJqxMVZ1tgaUGBdqETxTtE3aYE7hSLugtjoECnw9teYGqU2Pohgd94ey",
  "key40": "rqDZo6mvYEovDU3DLsH4BXXQzhCU8ydMjwV2MZEQjGQpEdnegLiZxSC2m432YBE8LgfHceoGGpHNmzq16PN46Bo",
  "key41": "q4U4QRC3hizssyw4Chyy8iFvgqpVFyvZzNadGfXGo9BUR2vx4WwaQjShSe23u41nyAaV3ReS8qEDsyrAog3z1HH",
  "key42": "4WrFi1eokpzWTrEt4JT1pzLCKFxYNH3FsB727jchbHcgdsVS1Mdz3ka9tyHoximgyTgZJs6JqLiTnNCbJdC6CeFk",
  "key43": "8pnmbrijBq6JYxivJNLQPTmcoR7Sn4ohMBAS3nyp2o5tuka3bgqywUg5HAaPYzbypGu2fFzDqV71Rfi78CK1s8L",
  "key44": "5snncz89knoRXdirMh4FfSdHJYAbvwqsMbAqDjeow93jn69hpzv5kqQDpmpxCStjG6QeZseZW5dWj7dPy33cFh8b",
  "key45": "5UrEDj5RXYCdr14Z7feFQgxXSeXevPinkADggNWDSPZP3Lsp8WmWHLk6uzCuvzVACokDGw4nDef5eWuiHTaDVpkA"
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
