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
    "2TFLxC3UNrexRbJKpV5CcjNi6XCRkCPbEXTCT3A4YqojiDu6CxpLKiA5QDZjsPkpwbzgZz5wQ2mF2xmXJGA5aeXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPBAW5GYDQSbS77nrhtdZ24SERibXhBgwyfXm7n4VVrzTiFPRNPSmoi3CNssbtNjmaoEcPTgYmhZ6qw1mgkGqSc",
  "key1": "3LvwxVxrt9b1uAajBuR7ZgNVdbPuPX6vwWNa46GpNuskLKUGqG86quDBNGT4WU7RC4ZCTyB9Yf5tjFrU8vRuVX2b",
  "key2": "2PpjhbwukFohvDC3aBq9RwNNoLGWHpTrueYtnTgcnrHs5icyjKPih8KWroAvff7B6hV5Wf1kSf8Sw5QbeSgvYd5y",
  "key3": "21TcT5vod7i1jsGNKyUZKGd1WB41X7Eoz6Z1pFDqFbm5HuuzWonvV69Vy2EFLgBmF2GpU4Gdvfcx3GxBcFxc8WUM",
  "key4": "55TX1HztHCe7vBpmJpMrvL45ACRHYV4x1mxvBqeH6gwZp8Hr2R2JqDZ8JyDXf4jhKaLApSyRZDzCP4gNbRQj2YPp",
  "key5": "4hrR6kx5hnA6KqWZ8fKNi8MeR3PACLdmvpUrCnFK4V5FnEzNhtb9yk2dpddZWFKty9Ly5qZW5iHEkpaQkEZ1aer2",
  "key6": "6755Y5uN4qZW7SdVxPQnCr6QX5dEENdY5Kcy14rteRRuJcfGNQ9nggbzGURsxNrpstFqPYDxPF2TdREYmaKF85dH",
  "key7": "2GUqSwY1wUGNLBtPDm4Dr3V6Zd5m528LDKthQvZDMBjksQhLubEgtpKnR75DwgBS3xTmXVEFPS4hNnmcMbZ3N9xU",
  "key8": "5W4aKMmW8ZiVTFoTKnmTnEqSo51SSuPqgnoMiSH9AuRLeMCXe77Tycn638VpTAsJF3b5hTiqku3oDQsBjHT4CySC",
  "key9": "5e8tUDQV1JpeUNdVobZyEANC238eeRaAqFDUCgiDPaSywwU7vk7NEhP3rgp23dGRD7gn2pNRvTJynwLHvbotEVXm",
  "key10": "4QVGj8KPeiNw164toHudAdYyjzG6kw2jYfe2a6PsSWRFsSnkKeVv9nWTdwkZ3vYFCgAozkL8yH6RT7wNCfsnivg9",
  "key11": "59tAC8fQ9CrpPxB9vuADTRfHsEUvcjiKXAohJT18782kR5tpGmmshNeeeeUHGjMbEnSXp2xvJyxiTyCZhUasvphH",
  "key12": "51pC5k2SC9nkViiEyRgR6GzCyqLUb5ajQHy64DuEnj8TmrpAN1hgQDFUUctney2CBBkj5j1EHQHornidoiNrqBG2",
  "key13": "Vyyn8SMJHJyYakC6TCzE2P8Q8z43C7AzqrDvaQeQoDLrpbg7piP95YbLdBbipcyFCZYiVBqS6wKC1C3i6ho9T1p",
  "key14": "5uMtvxohVHCpYmjSbCTh42NqeECo1TTHZiPsTJ4j6fFJxfcaNjwxshR3m4bvrvXSwtsxVk6vffBHes7r541a5jYB",
  "key15": "4smvXLiFH5u546gJz39gt7bRgzL9N2cAXxKZV3uBgAjBP2ZbNF8avbACa7xdz1PvFykJChNJ7XzBNg8ZX91XfGCt",
  "key16": "3BZRRaAuJiQNpgvKRue3Ki29vCFo5EeJbiSxQdXWR9QviRvwTdbQaSY47tjc4dKj74NNFFm4DpwSNMmHB66vaaeJ",
  "key17": "X3XR3kqRFfZnoQyiQkamPs1aahgtMVYZfzeR9w8xBjrrT1xb7PpJWKiJ44rmnuMCheWS52ry56XrkBN8rHdaRAX",
  "key18": "2Utza2AgHGpHNoH9ivn9NJQP3jpmKjdq98VSxnP2LUDSues8hVAVD8pBZxCUZwSMFfYGqQDq2Af4tcJKm9McMhJP",
  "key19": "4xSki3n9thixwNuC6o9bHQQaxQYf7jhB3KV2Ncbd5LJFXpto24cALATYCwjB9JRknRDuy7XV1nhTAXJsmm7MTCfs",
  "key20": "57JTY3eoqrL7GUR3yTqLZEtZi3CNTPjwR8cT1zsT3LbaznMjbw7QDfU9BArek46Sk8dp2EGnLnDFDjPMdq3Pn8Rj",
  "key21": "3U14qXK7GSqzc6SqfLf67uCHMa97axeMbkk1Cupv4fQZt5vz3nZDspUNqoEU19CB1v6ci8R7vDefS7pk661cBw2p",
  "key22": "4TZQTBmQg8q9Pr3UN3v1pKDsFGRj7FnAGXX8DSQJ94WzZ6fUuqqbx8qWqXtwvHb8k3PrFnxsHppRTiwbN9uY7LwT",
  "key23": "3gNaoFSt6imUS2SxhHpzdCSNG8hTjBrZu3n5iRtoFyqqT2Yd87HaYcLpNqYWVRaC2sKZwDJHLrQPo2kT6sJ1Y6aF",
  "key24": "5cRbTqXzxhRYyBLT84gzusk9ATTuz6zrCgqrPC2TE7DHzojBKTLQMBvT9FB3vzAPd4mYR51eNNKHLLJL8mijRu5w",
  "key25": "3BTf26QZZC96jM5ZEq88yjX6EtwfYmB4QyNr3GHdL2szkqee81Vpar8YmieGcLj1Lvi9CNrPKe7q46ZYd8ZUFj2z",
  "key26": "5Hq9RWtuvXEzFeUEhoyhFq7tAS9ijy9h2C9CpkbUZrdv3x2XEqh9xohetdVVkQUeE3yXx3HXdgtR5cStc4SpjtHP",
  "key27": "3A4MDZvWtBHTkfngQbUdXAxmnD88hkAodVDTFkAsb9JrEbSbSxW2HegCyXSHiRPLT2TBKPUo1vLi617jU9X97ssM",
  "key28": "WyiVM6N9hHSpcWaRU89s599E5xDFgmfA445YzwbBAB9Yc8g53ukP7dFE2N46BFNoZfBi6WFE5WxLTiet7ZCKrjr",
  "key29": "49TFvTRZEu2czAWxwZKTTgcRjat3gDoYdzPhCqtQd45LR4pMc7WoSSSnWS8bx8CNiRoC2VwWxtTgXiQGo5x54wjz",
  "key30": "EtMDyFn4bq54BZDpmwez6SARZ26nygQG1vDgsLKqNBUcd57XabLUtdNoYFADDZ4ZfhEmf7JxfnzwUR7aJw4tAJG",
  "key31": "518gVZJuEqFydicy3FUrmxWNrRbALTZWs2qHC649NeMvcV2yiSyEJpYKqb6So7Krn8zNpRdcW3HtvZGePTCuCU5X",
  "key32": "3XtEzuHQ4VTyP6JfAo1SKBc3rpkZqDdR9B923QgAu9kDNSVuz1VSMi2Ea9p89kPRpdpkVxa8eXFhxKPczS4cET1",
  "key33": "9xd7ZKeck5YWbQ14H3HghUvWnzjJsUmzZdfMdGRHVCokf9rBkLvkjzNaWQs1QMK1dy4kJYwGVANCPQ4h1Qs7Zuf",
  "key34": "4inBTEKGih4FBvcnmbwdzGyzRQojxsW37SxTV4EBx22cRu7SHHwBaGh74FvGyjmPmLKKshrYo95MJA5GxmTXi2Jt",
  "key35": "21MW8gc7E3XHZJoF3Fzj77JgJQEVvWvwED9Btp4vDpAKEPTs7zLuTLQ1kd4UR9Kt4kiX5ovDnLVT5zX43zJJuc9a",
  "key36": "5EvrwuwKjpjcFXhTZBJtWw7WvmceuiuT7fSchhzC3Rs6KXqaeSDv3AnySN6ESgZxxuXSoEouuw7gjiT29ytJXcTg",
  "key37": "2q6pCfNwxD7ZhszK71V4gAtkugtmo1gkdoi3r648wHQEAo1RSYJytXFgLCNXMwHYSLpteDUXaW8XpnV5r5oedhzP",
  "key38": "3MeZP7zoy2UPMzPQMv2WBHf6WQWKWHZf5AK9s5r1iwfnYn2HvJDcU9GN2WbtWCKb49mUrwvreyxfJZQy7sFEB3Ab",
  "key39": "4RttJdXyvhDCwqFRPQZkycVmPNVoJA3hRfQTL7wkL5EmkRexsE1e13rNTbQkntxNEWnpVKjXAE7SBQHubEBUf98C",
  "key40": "2SRo8uMNdCxGAtQ6aVR1avWMTSQUNzMxetiKQFLsGDuya5GxLkceaQTSwFrKjmR775awPzD4Sd9aotxqdxbpXEyW",
  "key41": "bzEB1etp446emN6KuZ8QnCKoNyZdUSc74NCZmTPsYAdAueR44ekq37wBq2gfSwdfXTN6ATbeLkH2cmwddQgzmCo",
  "key42": "YyhXV5aE7nqj58KFMSgHWFiFfA9UdWMpeQFDjRy9UJayhACimu5GZUJi6Duro6QE9cTJTrpFtXZcBvQM9eRt6ub",
  "key43": "3ipaSVBysrzythaefwMzswpJd43QneJtStHcwy9HEjZ9tapNE6U9asBvmD2xbYoouqhw9N5YaDEiEk7gUHQNEA6S",
  "key44": "37r1b1aoie6CUfMjQ3gSzykP2bDMX9dttWYEgNwp6rcTuKoSfL1s9cEb4QahoW3hMgs53L5LiCRC5ncYLfhBqgUq"
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
