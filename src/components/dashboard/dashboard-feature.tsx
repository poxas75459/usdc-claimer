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
    "5gnqFBoVXBZ9ufK8voEUZtYWs2hJnxUXY6xk3QbWXvNgPhofPJgyRJyc9vpteg6q1bKv5pbWg8ZzPhn58VKaXYbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9kCfqSiftzqe3srFhtLsmfuhrnUcRJjiP3DYg1ESote9UF9XTErwN25tr3LdpqgRYNkCeMXN7bZwFe9NL8XpFF",
  "key1": "4FPYRbLrXufZpdu229omvVKRGZzQcW9BJmqndwVt7ve6V4zrRdzftaBTqbH2eJuzFtTDLoUw5A28ixDgGUBMg37S",
  "key2": "2TJKMQqwDyYuxuVVEKzjZr6dYozmQhwLGGzi3fM7z6jGTtvH7mEYNhPyYmPBr6oGF9tgF9PJD5Dtw7UYm5NJ9tUY",
  "key3": "UE4WrfHDQWEk1CWC5HHuRUyNF3D9XCECAwRfRqUNwknhr8XiN9M5d7NU3Gv5GwoMvsDbkxh8bHpb9Gk3rV1EJq7",
  "key4": "3pX1uiqt7GRXuzoPtfnLQ2ekyUDASZNEGU6px7MuDY3CYN7nbAdx9qjXQGq5G2KhB2p2ZyAme6aR19X9evTfSrnV",
  "key5": "337Et9C9Um6rt48nzj7oyxuE6PdRdLbrrjUudT53QWC8vBLp7258k6jFM8YQP7gz8FHwqAfgZA3r6mtKZw38xZit",
  "key6": "48271qyp295mcUGZF8t43dDZTiS1qF2prMwWidamCPQ8rWGFcGqGL2eKEqMcH2XcCJMuJCJHnUub14iUpzEcpKJy",
  "key7": "5a2uhvatjHYqyDaNRj3s6pZGLeDdez8gU2qt1cU4MBjQwE2Nn79ZDeJ4dFkBKDn253ASEfJJxmEG1chbNHVcibvo",
  "key8": "2fin9zgQQhPE9hmTFEuEo1bAApE3JU3NRQthM3jR5NTTCqGin79ogqtx43Qcy8AcPCG5MxnqcgA65PEiraB1Py8i",
  "key9": "3rVMjwQ2YNpkHXHM9oEJVE87jJAJjkrkgUTr5Cc6AAePy7KPCSvCZkdoJemuDtdHv3J1mvebwomZGzdkei7796Cs",
  "key10": "nFDnCTKMufFg32MuX5rsEsmHJ8gwmaAxsYhF9xQJjv5kZNrJwLxZ8gma5E2ZsVmNDYy6iiMJk3WmRK16N1fAiDJ",
  "key11": "13wvHa2mmrc1jzqPw7rKPxBX3SHsk6oggkpnZjjHpTsJ8dxEKvNomBjJNhwouSfoJJeCLy6Zq8GF4UHgEpRez7P",
  "key12": "5bd49zZsKQVNrq3r1fYHEFFHPDzwDfWYV5LqAGdS9ESM3EVGYDNK5DEPncvmvgcLmU6zNH7BFVzgUUid4ucBnKtT",
  "key13": "3AfFPbinwpLV9Mzno7cT94sLmpzse6odgue3NjJGyEcSCtnjh7y9mFjkM9JMGdE1W9oLy8aEPHWj67nfRGiRWBwN",
  "key14": "31pNbm1jkfXKkUb81AnKRmCWzV49dCFJRJYLMEbYbU1grWdREzyso64MAfDs521VpPwWWirKNcAC3PmkH7MJ5zir",
  "key15": "5RdhCaFcKUeh79Ef92sYutD7qaSFMgtaCnEmfEdViqJhhksDniyVz9soBxmauN8bGgHypp7i3iW4igUPWfCNJSdp",
  "key16": "rNpee6RQdXtfedjKwEobVHoD2SmrEQVtQ58vSE3gUMUJNjA5FcaQmXTgmGRWoLSgdGXkgToXWopV2n5GLFHP2D5",
  "key17": "5pxw8hPMmKJv8kh88f9vf6JKjyqEnh4JFoUFusUSK25Sz68YvckQG5KiKuLEM4CNwhtAv4fs9oxaX8b1R43nmCcx",
  "key18": "5JgxsY46ynsvSsMsjaimcMCJxPVQFCWKBg5byTa9Fw6VSt9nys6StFbKyedm6bdgxDgYUXtoG1Amiu1inb6s8vWJ",
  "key19": "58ZVphp6ckt2ewz33nXq79fvVAxwb2obYVDfb72jDTMiFZSz6XyEu5Axn1CZ41NTgds91tB8sSTvA2DbjAsrkruk",
  "key20": "3U5qbdfKh89HqMbT7KSTTuznHJ13NLZPtzRPLCQjyuQmcRhsGaNPtamJMz39Awjsh9Z8ay8N5GdLAWyU1BfyQte7",
  "key21": "2N5yNXvtQb8gLqQvmEcyF16KaPdxFq2FFER913rud2WuGJV6xpruskerxFw5uQSb8TBcV4u8cHw84yabopVqiYGJ",
  "key22": "66NfjY6SbgwLT9yJEYkrYxmtkdVckngFrNNgrZWZctB6gEnzwZggkKyqdvSREvo5MKcWxhUeN3PR87mRWoqrxZfe",
  "key23": "5Rno7rJc6tw4SDFq6msJbifiJYB73Q6BNjU88dkwoLboVALSq13mHeJtq24vYSYAtUdEBpLf32WtbKeCLnMJggN",
  "key24": "2WrXz6d4fvVvfi82oWsz3mqKcRyG75jao8ZwgnE7ArPJDant4aeg8jDzMEMn9W573wAXuiJaZqenUojd8PJaaBPg",
  "key25": "4GrXLp39nxDzY7wBw2joTkqoSFWzHKUG8oVq3phU69TJktKp7Bb6511RKHkkoFoPYZRVnFeGiuojH2jBuEVzwnV2",
  "key26": "2gtG2K5bX7tFXhwFYpJji4hawPF34bMwodMDm4z2JPQJaZy25hHAD8Gs288NvEeMf7Tx5MRKqxsU1ncXFYRKTDjy",
  "key27": "CcwxAa6Sgsbyk4z7u1UQTCN3YP6EXt4cxzjjFZvLfvMzu4djdjNkQEfzQo6D2zfd39hHV6o1jyp95BGuHBvrgU5",
  "key28": "3HYhHZ1K82xTMGpxUYz93WZt4NDTzGvtNo8FsfG5vjyWKPdtMnpCu5GpXsV4M6H82GNsr1Yx2MaBzhQdudnXMMbo",
  "key29": "3tsMo6pfRZDNxNUBbxuR3FkuhMPCtQcxyS74ZQ8yXQt5jn6gzXBbSqgP6h9h1Y5hRvMreB8zXd8kF7ZArk81k5ve",
  "key30": "apTyVew7HMYgcqDhP3XyiMrCi8LnnnQoGpuP4kRrwZfQjWWCx9SzJqpuQx7vCBqatgbAhioH4c1V1hFLFQ7AYk5",
  "key31": "59SG2Jx1FvDrW1qSf48MCF5s2H9yyyWD8EtptQcqrwAGBkgw8ebcoNTix8x5YiLv5m47Y346Nwng9QTBKZbVXnM1",
  "key32": "rCjHdtLcvW8cADVKfiCZfQzY5Y9RJpZd1yiE1tyCzHME8mFn7oc6Ky3LD3bwhHN5tkgCCY95sU4nMNKJmTZJ3pD",
  "key33": "oZ7uVHmPu5Jsu5EnoRUCDDT8iP3hp8M3ZfsL6f7M3BRsryLeHz3tqjnTNaS4Qkg28zmDbWwSbmwQ387D35Pjdn3",
  "key34": "bgpkWQyhoYcF8DLRsTTb6B1PAqATP6BVT3poAs9CN65rwd5ZMqpaEXbYbSxhBCo6KTKDddHKtCB6DEnyjaFpRcE",
  "key35": "2FKnNnZfc1ztk4zo5GfCfJ2SkXwC1jTmTNUUJgzMdrciowc23D3iFHVytkRGAgNTjf5yzdD7XxnaBkTQ2qxQxrdT"
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
