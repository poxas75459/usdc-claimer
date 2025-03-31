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
    "2uqYps7ipWmb3MK6sZSQyYvbtqehjDznLyRf1cw5Cu8uokWRPS2vJsvsm8bsGiwagG2FXjERCvJy8HbRaGHvDcCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8XDJrcVmMBJAVa5v5pUsbXgcsnDh2Jk5UFV4F1hfLADFoa6egQfgSCcC9RAtC1pWzTS9QEbJVVQju7yj65U5M",
  "key1": "4WqC4JnCvYZUpsGJmkjYDyCkpyZWPaLeynYyYDgfYHn1vMdr2mGa2HwciG8hCUrgBRCCF83EUoKF4J7hDfFv4uju",
  "key2": "2j4AbKzH3PaZGgxbBS8cEBmV2n34Kfx4gB8RVK1RY8FDZujynhE6w7YJnbwSLmKpn9YfHUcy5L3aioWT2MJwyY7C",
  "key3": "3CNco1RaoPqa6fsKj87q3977unUgPEHqftxTbKkTdTQSGfwVidVjhLYKnrwoxVdao7kZ5DtoBpWnW42mvwKr4K81",
  "key4": "3PSMoARoGjHbHHduBX6jpist813itiWqyUhvB23o3HBbQrA5QnVsvU8vv85iqXWbGV5qkzjYcao288MwCSsbLaxH",
  "key5": "3dCJzmxiuifMzohJHnVwFwV1pCybogvjcvUipi41MFq1k5ZMzVvEyeZXq14zTQTXVpT95QHJZh2Sec7yok1nqULr",
  "key6": "5ar6qfxMjQcpka5SzLXWvh2s4YhBFVyUiUE1BeuKPzae5H7khGcP7gbLP1ybVa2MYTUQtLagxA7C9kt5hxDhmmg1",
  "key7": "57iqprqRMuh7r41NtYSuipr544zqwPdLVHJNwo2rMWFicAzbaU7oxU2STfxiNxUMoTieyU51gyeni7wQdcVwkLej",
  "key8": "cQHehZbCHYtC2SnrBV56XNfY7dESrPvmcFEd8XjxXNGaCtrfQy97DQsPRyALat1PWjED4Nrbsw6xe7SfeMxK6Q7",
  "key9": "4aNCHyfSF1uVvhGbxWqYjyD8Tq6K29F2uP9gwPptzJU36ksvJ1rhzL3UAEfPqTT8Jn2Wigf4sLz5mem2BUMPxDWr",
  "key10": "2uYg9YePNWjt9KrAiHnPyZ3fM5HdeianhjbVrW7EhB52xz6ZVX5JyNFVU7jf3Exd8bJc6FnbohfSxobcvKrvqKMG",
  "key11": "5MRHKKQLkQZZBQAvrvhcrLmUDGwXQNJG6MN1rCD85MfkocP9DP3g1kUXKoFa8yV9JoDiCNCUizxxuonipeFuSRVx",
  "key12": "2K85PyQ4YSXYa8x7vabH5fB6z5JUaezpC2YcPy9byKNbrWqBLKP2hFSge6iCsPYSFTe54ohh1GFu1QGmNYMN4ohG",
  "key13": "2hdwDJCE5uCYT8aMiAa5cSwFuM6AME7tY3sc3ELZH8gi3jbonKCyucWHMy2vEzxhh3pfn17Xj4zP8FV68BHCBmcm",
  "key14": "XT6khfu8p4po3emUcoUyJpupnxWguZ9XPNwuz9Ps1JrqJPCEqgAKw8G8pUsfa54NKujEMdoU22sTUYGiqAywBrW",
  "key15": "4BiYjJekvti2uQjNruJGGShqMnpCRzYaGihj3kN34L97ndq7yU5JLKEGvbKN7yEbyh5qTCpZ2D1fPuHFVsPJEJTQ",
  "key16": "3VsaTokANxLJf8fK9bTavWaW91AFwBktiKpxiLSJUgcfpgRXGJMdi1VdQMujv2FZtcqFvRrNMQCxDXAy8PPhtBVu",
  "key17": "3ffjqczbi1ze1gMK6PFrvWvTKZ9VqeSUk2K5H4AF2DXPAUDjd8maKQ2346r7nkCJvvTQp1EQKaNKpQnU13S4ZQ5U",
  "key18": "5PBDMzgefqnuzguUn7Uj4vRxk1uYeakezqhST4XRXyuwoZjWobBtCCqZaaCkw7U3mzqimd7uC5CsdHvK7vfQEFT7",
  "key19": "1Q1qY46VEgS7hbHcw3uNwYGYHN1QfPyCThaSREMt9K9PVHPocNBVHXyDMdw6jUBvpWv7kzxg5KSRidvbXdEouMG",
  "key20": "3boaZwtpnPVmcWK1xWBAkfstCCUsa3yV59zKUPXNkgGJT9vj31PRDKBMfJ1Jxsfgun7UdeHbMe4jiNhrMSShDvFN",
  "key21": "2kqacEL4zTsh5wjH6FdNZiGZZSrdutzgK6a9489nedbwH68LTHhA8z1QtocsnjeMABGNHrQLEFP1fLvXbjS8BghU",
  "key22": "3NX6W2pk2NYF8JKo1vZzvxQ5vL3yNpFPh4qBL3YRLFj8FzsCvBRbqrsUudgP5Vfm3S1SCRWdU4zXe1gSTX74T4eM",
  "key23": "49gokhfYkc2WvQVXauTfHrjLcaL6QaJiknP7FwvvCQpL36gjF17rRKBFJrimLLS4qXEuUTfHbmavbcg4ArDUWRGc",
  "key24": "3RQ8eWNS49zkJT1dKs6ZuysRbL4yLJKwsT5y14wgLPwsZVEsyDWyyTKVCtZJBkeY6AtDpah6UL42GdhKxvwqDbG8",
  "key25": "2t9amvNtzyy4odifQpm8t4GA3ej1ywAsJ35Syv42NmEXzLE8ewnyea45QgiYrSExLpqsZYnSQGZzgh2EZH19HywC",
  "key26": "4nLWvFap6bTyMzo8YiT7giRUukpVwLFgUQMteu2CKUARtrGC9NFRGuADq965T5ckbfLTgfXMnh1ChWJHhvgmR2uG",
  "key27": "gDaSNBs5B8ZBCsnSyy2uaQNgD3yFwdJbxseWPuQcE8XeZvB7nM6TKKYDat1zGAGJG5Pj2T6pdqbT3yws2k8AquX",
  "key28": "Z5k4M9aVDQitd8o9rdiLEoX9F7KAxKmbqdLnfzP9nmDaLSFcRc38FX9e2n5y87DYgo1u33tYZiGTQDP437CNPXh",
  "key29": "5wkK3Nag926pYgHmFss31a7Pgtsgb9WZyzdiJfswAEoTMorC7doPjYd5XEmh4ytXm2kwJviPAGH5KXMPMhBj59Bg",
  "key30": "5bBZ1UERykftDvn9Uh6BiHr8p6e37NgHrVQhrhZkJFBwgkDnzuYUVhiRTcsBqgzHXDtZT1tvAULXPw78uV5Xamft",
  "key31": "2Y3CN9EhS5bnk9u3eozyh4PZcbkUXLFPvsgMPYNT9aqDy17LKGZEmkN9miGgvFryjqwZbBCm4C3a5FGQDhaNrDUE",
  "key32": "3FbBrGzEWa3sefjyKMz9rtNnWSh2HGpxaVtUvEajrt9HvzcP1Ui2F1Y8R9ftC3HHmJpCEzdNBB9U74cEYDZhpVvp",
  "key33": "67Kjf1HwfH9gnHz37ECn4o38DzGSesJbTSBP6nQ5Nzxu58vEpywkeQUudpjC9fWdNSDyD6qXuX7qAgzAwdPFQxSs",
  "key34": "Ev18tJMJn2imfkkeJQ4wea9vbKdskCdUcaojUBAJCgCxRf2SBN95wC45a6RP2E4LoL2AkX7NPMHHsdbayhVDHyJ",
  "key35": "4iFwPSnCYQsY2BDhWPY1U5h6svWc5s52dzaX2Rt1tRF4jgFQChzyPUTK3zx869wyBVNKSWwUWq6yCpH3oMukBJdY",
  "key36": "3WAxgYMwqNVVD7Mx47b7881LKpzLT6FVHHcdNXjubL9yUC21cybiWF4LVwZ3LyivD7GzUMHJgbRAmi1UJgwBu5Xz",
  "key37": "3UEh9bvG4ar5LUqE2XLHcJoUdh7fT2dTfx6wGg7A3q5kS8qiHGH9w7B425rsyossvdvCwUvE8vigvrbWL3kotDZN",
  "key38": "5mM8pLSHvGK13sWrc4m4pa4FeSXrYfqdcRd9FmR1vDtickeboEKqMasHZNMjDiNEsgMPgZgeKT9vaiANzYSG7oQD",
  "key39": "391dxV23JwhY5z7zCovMghuycpGm5vsv5Ft6vWrsEegvJLGxhXG3jSWujyvC5qjMk8dwo4NinppYFBxKpMDMW24i",
  "key40": "5edjQLpbuaGUoE5eSpxWeZHt48Sok6stWPRGqHsmRpBCwbbqg6kfiVYiHcsXdNa4WQVUtVCNSXgh656hdUDgU1a",
  "key41": "3ChQPKaqga9CNmuVdkCjq1UZzCieuTp93PeNgMtSN3VGp5cYZJdLytwZaKPAKPeB7Rwgt63GzahJsYxf6JgyNAzE",
  "key42": "5Ja4UGDptPJa2aM429MpLrzMMh3zg5d5cLZdrbdFqWiXbCF3qcQ1NM5KguMcv493etqbpyntJCivG9ak9WtbmxEQ",
  "key43": "3ARRwE2hVhRP58WjX1PmcAmtq64vF3fjsVnSBuA7nWtEMvmcUDL4GA6C16jL6mVvQCAaEKRpNV2Vf21pA2mr89Ks",
  "key44": "A2PiyGiGAynQf7d4NEU95u7pe7NRKXFPKny8UnMQH4KmYqugt8FpLpX6ivVtg4v7riFssjD11ZNq1aw51wkdRg1",
  "key45": "3e7geXqhEeYrZARfGHjZhvuQwRfonJrKZp3dhhSxMNd9XiViZSefWqJjDfj5EiJ2B56RUC9UWPDQRpzpEM7TotCf",
  "key46": "ScA1eeqF4GaskAtTnqj5KsWGLo4qJALrkmjzLuv5ZCLKY3Fj4nbKrhWmybrW1NGmWgyRRSytet4L2gxr8ouY9s4",
  "key47": "3wC2mxfN3ef3JUeEmED79kaKHGPsTJvQopGpVvzHntf98UBt94rkkqMzGoy6dHQatzbJN8ueiw9vebn46ufvmmwb"
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
