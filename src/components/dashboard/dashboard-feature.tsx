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
    "2ZyNtwPqzYM2Zan5v9nu1FA49pe9NySGPYDmBuKotbPZTUK1sm4qjFfmv5kYZKefxJ1PASuEszeA6o2EjieM9fK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SxFTmntCS2qbFPAE65vNHG5V7gUXZt7Nbs3pqFA4Jo6raBb6EkiAZDUZZMHU9QCVVbm5iPyztsLMu1bEJ33wfVH",
  "key1": "3jQsjV9eGEXRTH8q3dUf5RLmqHoQVTbSCDdBbCGEDLKuB71JDzEwwwPBJwqLZRcfZGCzqumFcXfRkooiz565JyxS",
  "key2": "3gzQgtLkvvcKBnLNN7WrgLWMQ25F7s6CLiJ5boK14sKMSb9F9PC9aNEBFjHiyaKkuTC8Ti7pDYHGmGAm6LvAjZun",
  "key3": "2mq2gYNHZcSXq2DZAdLZYU3d3ncxb1vzzqadg91jqEFPK1vKPUhizRNBptSsx5HqRvSDKLNRw2p6ZFJcC1ZLrsAq",
  "key4": "55cEXJQoisj1U4jjsHByYtf5F7rnncKm5Ju6bMvjiLecjtpbHoKnZLSWAvnkB6fmbTeFuHf5C95LP79A9DSMqEXZ",
  "key5": "3iaBGxjAwzXACW8ZsAMQQBinrGm5itrsR3PiARaFsSj88mqH59yQ5Zh25g1CzUbgDLscyqQwBYM6mPuquZ6nSssQ",
  "key6": "5R6veJV2j4Rsyv2HLtNXFVUtv41EvDEGym5NeZp3BkL7WsBqBpomCSKJf4ih4iB3nxczaifBxCQaVbQmku5JxjuY",
  "key7": "4J11DGgb3kMEcDJSu6RAG1H4TYBGFGVqKbEhhHhhpASLEDf9ZdpxagW9bjq4zQiWgRrPbnEBj6ExQ1JH8rDtK3P6",
  "key8": "NVSREtso6PrLk4n6ry4LKVKcKmDz7sLzvSbNmJJt4qDcbR55fk16PNEBte5fnHs1bPENa2LQQVKgFEQkexNaoN7",
  "key9": "25mXnDFgToXQ7CQhvdoNaSZtzyV2oedwNv1UBPQM6jhiUVagVeKFRrr3bVVbxzNFQpEwkhf1wqKyajsYMt5HGLAi",
  "key10": "5rZ5EpCdDK8Nk8FZgbYuuz4zTKkDrkgMgevR3MhayNJWLUKwFT1P3vFydPTTEYdXLo5Z6mCyHbYWE67vLD8EhrhQ",
  "key11": "2jRpU8F8GK2hwYsECBgLWghq5Yz7pPhiSx784XdM64wmTtXy9HFex95vRYbbwKU489dmiDmJGD17XXQKEpByHzpt",
  "key12": "5UZ5Mj2FJzg1eCmLHyHAP6HntAh4LLKL5FiDsiLJ3V3T3UA1xBoo3drJumUbgm62VydxYjtHS7tBo7NbmCAFS3w",
  "key13": "5fT1NA9ZhyfiKgkiCu31jLToNdSbXFg7cgSKpRrzNzukgTg74t8rPQDDzrTD9rhKzLrq9gYnwVez4623x7RENNjU",
  "key14": "5DSg5uZA3N9TEevac2tjHpAELHnRnxDgc8YYktdWfKZTGq3Bz7agKHCnKHYdxcPjL8Q2P6TDciDaNLTzuJrBwGF8",
  "key15": "2PZAk43bnhEqiqg11jZziUC1Jn9yTNqMPKKXYnhcoGPdi5Mp68yarxUqbyn6ybbEjgEJiU33ZjSfHHw7veMhf8GL",
  "key16": "4PteBB5oS9czarGaiEVVz7gS7p6hcGjfwyDbeuXpAM9p9sxjXZ76j4gCXqxgNYQpCJptUWwXeud9Jgn64zfis16c",
  "key17": "AB9Cbi3VG7CoKXUQcrKLGAooQKQT63dEWUAAjCMzuKJww73mgPvbhowmU2Jnp4ZNXxudoSTY3fJu65ubbWRaJvA",
  "key18": "3QeKVKkrzZHgJjY166CksyPF4QjvFEQiJGCfnCSm5BjTvhoAfYJ2gbX4SXvzuUr3aAFEnFJ3rBNP6k63CGCepFtN",
  "key19": "5AozDUFoFyicPvwimDzuDL9FZkJjwNAdsGrbRiNHfZzYLgA4crPCvodqsLyYiwWfua1oUNbu1EBWT4in5Pmwv9QD",
  "key20": "51cYDV6dnVTvS13rrriBVtfx3FY38ymU9cZWLorKNUgM5V3o7ucYwx2Kq3v1YFEW3vXtcoYd11RFokhV2zj4DvEm",
  "key21": "5e1h8pq8oywf9hoJ6na8gyGKyQx6dki4peZ56d8xhCPntaeDCmaW3uKYXrVrFSoKExJrBSE8n6p81NktzbwC315p",
  "key22": "374AChZrDdwpBUGwxJopo47N3et65iSHPSfSvaUs3wHo79TjeQfVzRs36JWhePirDfuirAvg9Bx32bunXBu6kwYy",
  "key23": "4VLXLRgJwFd3ChGuHYt2KnYG3wG5BPaS86vuWHiVcSJJ3L7ENF2GtbCgbYYQKzMvRjzhnsE91pJniLQiXWX4H7CK",
  "key24": "66edtXRCVYssrEE23AYH2wZbnvx6N8hZhjQRiaGEJYMTRnB24aJxUjpzegMf6tB5hZw3YN3HUUsoVAF7KvEZsjvD",
  "key25": "3Fppdv3CoEyFYcNDdaFnze6QjMqYhsX5Kpb3rzShB14YN49MWQHHdhvBcmFZzVe7bzsE1wT6nVz9Y2N3SBJYaTTg",
  "key26": "2CSu2JH37DfUGi8tXRhFrJSBAAbP9BEzFTZ1mfxfwftUXBBL4hTTx12JnKBm3isCU3Uu1G4nNGmQdM1FggAdyp2x",
  "key27": "4vpTLSeJ2EbJdT9FGB4fTD5RUhnqVUMFN5wtNzS7XXQ27HstdSq9uKV2mjwJAC96KNADjUWTNikNwgufdYF7LF6",
  "key28": "2orkQCZpjNDDcsvsLVJ2CaoPXokfFrFq5r8krnbx17iPK45tZrxfsXdNgWf4xddqPXvHZuZY4knURjs8vQ7x24v7",
  "key29": "Fm4QMXCJuC8mzNNf5QH7zyfNunp4SY2eQDHHFA69CennPh4JgZTuxFFmn8yaxGKsuDrV6BDmBoLDNHmH2NWqXNh",
  "key30": "4kDVuPiKMgd9JfLS1iFs5xhfp2GoQk9bPftouBukaKKiKX3eA8GML86ZB6AkJuncpXig1jjh6G4hvNvGjR58SNsN",
  "key31": "4n8dm3hm4hzVSKDKCMQzqhqXMi97Dtr2N9PLEuzQHKQZR5g71k1x8B4neFQvXwy8qDtXpiyhrpBj8qL2zFfgr6eW",
  "key32": "4mPh2wvdCcfvUm5FU9h6vTxBUnL4SCcjAGMDt4hmbiEVL2advUUVh53NGVWhjBLsg8PdzKRVGRfvy1gLrgJ92hm1",
  "key33": "5BfH2pVULGwft7oSkLNkVJCqfgXRqhtQLE3Ak6bjjjo5CDMobt8ZfaMXbJUX3eWdqg84M92w4NRs2nAQ4u6iuedf",
  "key34": "46TFhqnumtc5j5ayMRcp61B3pFSMU72aDcpEut8sbzp7nUdKrP5gTJeYS1BjTYrqg6F2kMbiU5FnCPLLHtow8j68",
  "key35": "3g1hC835qyJhfWe6H5kj8BAU6EK7kE5zj9PzsRkN2MLAMXzRboWBKGSddiFyBNo1go9bzM8Tm3XBa5MdNKnWniYw",
  "key36": "3NdPBrtwHFhSFZ3W4wemNV9ZDAz6ReLewj7SyfwguwkyBFjT3uq8kkUdbfbJbDFDFPCuTjRaEkLXBcGkmXmr2d79",
  "key37": "57DX12W1DuVagJwHQcUbvsCRzFTiZP7MDhpZUU8MsCvQ4WHCPYLxKg3KhSaaoD29YuWaEGLh8cQAxZB6dbKcgsHU",
  "key38": "c3u7ctAJLt8pAS8KpXPEREkBhv5oTzmhqSeACQb1MZiVFh6UM3ewkdKg4TXkrVtwaofnGrTmP9JAxcsi1aJ2Xb3",
  "key39": "JgF56zFQ8BnGEGcTtr2819W5PHaQRKzRQDNMSeHwyk1aTTvNEmkKJD3Td1NRdYsUmgvoKBXPdE6JQz6WH39gdXR",
  "key40": "4eqrVsPC1pfaiAys3Cwm1BieB8r9tC2St23vfj1PAgGikJCT2Uaxv8boWuNptKgLJQTisxaFnQAotce81XuH1DGb",
  "key41": "4KmKzUEuWJa4rFtqEGx2K3PTYvHyfxHGbaLRCfDzzP5QS6naGW4WEPvSRst94nvJWMmfjGCuaVuxxLF7tYAUeW1c",
  "key42": "5pNwVBxNQGLQdUkR2pHgTipZiraSscKjK4qymxHkDnvWnyH4xGwgS5ZUYweSeXmZCh1tcgKeQU9fzrcN2iP2tdD",
  "key43": "5oJSF6WeruyXoR2yomhf5RS4Gm4GViJ7BBmqXF159ArbCP58XDKsDQnNM9vQeexSHdZsjMENbbuw26qdWw2NwfaG",
  "key44": "5oBf9sN84bdCZbALevoPceM76UWpevbAwgsC88X99bHvLbgPJwyKBGdH19nFphf4xsXRe7LqWYjZdHqFU939iw9C",
  "key45": "2a5AX2b5rZiWxcqygm5rqKA23gYvTLQt89QzWqNSjvCa9U7eG9PzEBPNxmSxUjkvHdUm2uD3ZqnMkzw2WtCeWrYx",
  "key46": "2m7wUiPUmd8zcXnh77U3KcyYwCAjfJEmX4teSWqF1rj7ZB8WeC3DqJRehh2f3qDjgRAMHEnbGovxt9hpqxyCWbXj"
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
