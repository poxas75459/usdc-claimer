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
    "5Uyp5EHhEZmVTyG7obYr8LNjpXK8KGfZ4NR8FX2eSLQEZXSbTDD4fzS6jvWHnR4PugXqJpiTE469kmBqXeENpy6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35A5wDFF1CznbyE9h82Nsdqj2fcnm97Fc5FVwgbnUbk1YL7ahNAuXiTKeNsfvfpb3S3jeaHyi126U3sL6Pj2PN6E",
  "key1": "3w4zqWDkNp4as4RL3TRjWgH8MWVunJnTbZuB5bJLwkTaMN6xMCdksiHeJcwD5UDGEjsEaL6PvPNxh7y18YXRDVD3",
  "key2": "4doi5aP9wcAEX8JQgeU6EXXiU4wX6CvPz8RmwNooEYY9fLko9Yri3eeWuKkcZo4DXinX9oDUbsR5W42y7yZuCjkM",
  "key3": "3kKNLyPJefSDtB8NkAKBNnuHV3offJXQrWT8wunzcngL43u9pirbHy8ZhurfwWAmBdh1HiAgNJeytXTAzqbyQm2N",
  "key4": "5RgJpngqXwesht7mnXXoitR65VDULiLALVWVsD8pjdX29NknzUMoWUXZvh28vcMwM1KRpH8JK3qU4ZEZ1QYkt8mg",
  "key5": "5zDdusJ5qWb26XPBK3JhTN2oQ52FEarbmwWsajmY8vbonbHtXyDWnczfsF25yV7kV5icR3fAY4NrtYrhBStrRNMV",
  "key6": "5ifnPTjvJAMWsDPEpQvp2Lmrbcw7pBdkcJELoUcpGo6KLh92pwoc16b3ysDnYCqggmMqMJHxa6zj3mcaNoPhsTzg",
  "key7": "3XFgtcZu98MEvzLcUdMeddCm2a5fHbDPPuZT9FtnTAizG99xgHK4HPn1fff93Qme14E5zvP8xS4MP84s1gZnynZf",
  "key8": "3fsM8X8snxSkAphDSLuwodrPKMBM8bUMJCwJuuR5oSP6r9YPvndtcg8DyMNWUy1WzbMf7JxE9LeyZst8nXHoWvXr",
  "key9": "4tEt3faDmXFs5YTKsacxhpTtvgjcUF5A6fKopV1zofMR51CQgtiyVQZQoSabrdhZGmF6hEgTDZ6mPWMDawC27p5X",
  "key10": "4NAruVQMsujRY3DfMHSAWvaUsy4kyinrsmSsrpWV3vmGcMEHgBiD8BGy28bg54PktvUi983az1sX7S2cgp49EFu",
  "key11": "2REWZrwGUxQ4FNnRNVYapZUMQEx1bhVvFiQebXSAkKCDugbyEJTtyeoc187npjqPG66tVZcuRtrhsaJJyyi7PMa5",
  "key12": "4vgk7pPsw7CK7VmKtGLJHwpvAdgWfyH1HuTMLt21Nba8bnni6kMoQC7PmfBBmFNMY6BtLPVoEDRGTvUNXbqxFGqN",
  "key13": "2Mno6ruEtMfEGErDdSfDL5GCY36EqEwURJF29fhUkgoKFQ6oeWLiD3M1dBRsSt8UF2RZWraeYBY8jqztbqBPtp6W",
  "key14": "5st1N6Xd3FdeKhn2s5wPpfkS9MRRvZGYBn6wrsjWBg4awvxV6QLfXjtuqqmtJsV4WB6ptVJyy8Jx4cx1NYkq5pCr",
  "key15": "54jjJknHqdEvRULPBfjeFmEeB7cu6xeTxXHh94rCCbtPhuP9m6mvbz6eGAxRk9YhnfibHdHYQ7nTkNwtT771qb8e",
  "key16": "3EKfcgPQApW6hWyHY7TPEkob3oQkSMsm2ThhQxL6FMLriSEgssLJYyxinYkjuaBoc4QSYvYuKPHPpR2WSrH66Yjp",
  "key17": "5bd5jwjh6RkTu4XkUPAtbw1KA6UBx4JTt84gdUsPmnpJJZojQQ8biaHUmPG9HeTrZFUTjLnx3Y23WktYoiGSPZQV",
  "key18": "3vcbtU22YB1fGkGvvWMoLVbrsDyGH3y6ZVDDgMX2J4K7FutYRdxRjrFogN8KSrTqp8Crm47uqZg5mEx3zBQJTQQk",
  "key19": "NNzsdUXuwYcEny42DyZ97GrvMA3rTAYD9magQRAschWGDrMoQ2Rqr1wqRoxod8GTsasgka3ao2ckSyF5LixHDA5",
  "key20": "3oPaf5AFvwn7aTd16kkwwdEm5Kev5So58BCN1oeqp74PHyt1mqRWtQja9tofDqzzHZSVMZvMwDSY63FVZC85aSHW",
  "key21": "3mBhy68fN4vrcYnFZrZa4QYD9x1kPCNa3Rdcayr5ffwpaoJgaRpihcpWGk4HAMfddwoYfompeQ13p56yUXnnLUYi",
  "key22": "4ZbCowA8paG54oYssA3Qa2Tp3wncbpfaqsKZXrJWjkU1Rxi4ACfFRfTSEcPreDat2v2mxbCmgf8eAX6dV6bhSy1M",
  "key23": "29SRvWtGYaWe8kKQ6nPtp4reuEn9uCG3suRuBuQWgR1x4DEbv6tBkh6f8BUiy3RpU6rTtymxgf9QpNYMHbZPfsYs",
  "key24": "3hRqarmrK2FMSfixJ27tbCA5suUQtZk1kJeBEW63Fk7nHXNvLQY8gN3qyFaoUZw5i9t8ir77t47LXXtCNApieSx9",
  "key25": "3MZQueSXA1WXx1YH6ZDLGUyMdk9PaPhbAjJV2denbk9J63sCkXwciK8KpYYghZty52bX173VeKvbafzBD8RHNcCW",
  "key26": "5x7nkkGk9w7DTCHpbnnG7czyTZCZZrofpK91qCvcwMkVKoj1GtH3JeP8G4gdSHv7jffNmYDHMTzHDhE9NkKUiPh1",
  "key27": "3k3DYqP16pAjejoTM5LqDMVpjgjCr4GbyBGooArWf9PbDcRQCarEVvdrPDytJeGwrBXweDCTorh39D7doWB41HD8",
  "key28": "2ux5EUY3Nic1kGNzQQ5yicC7xr6EhDrCnzNh5U2Gdvxh5aSBvUj6tc8n9WxLPebQkYmmRPGmX6k7UfUGG2GwzH14",
  "key29": "5dpf6SdZnc8azguS2QBXWvHxR6GTtkjhLd64EMsPmn6kBjQj8tFDNnWeAyjMMctjDhptrYqdMHdzBXJrs2q7zSsn",
  "key30": "52BmAMyWmPWhzYHirZEhxCm6khDkMTCBuo4SC5Ja2GHN2UHkStcwcTCK91AR2mSSpR9kWxmbtTMdfszVzCBgv1sB",
  "key31": "4nZvXNyp4c9GQw9Aq3WFigoS9jzcGz2SVAStqxD7VxP7sJfzLpRb4p4dMnrzMUJBrQxo4Fmz97HxGwf7i4K87SqM",
  "key32": "2kVpGXdMGqehmXNRm7kaShZsWH1vRYusavv2sYDqizC3oBserjA4nQk8caJVtPFTGsHcKfpfw2Eo1cJ4if1Pp9B6",
  "key33": "2F9rbN4ZaUSvCWFa4cHMgPX2d4DD9tSwnS8baeaE8AgtFxgeVPg5cWA56WNQB4TbzRz9RHdDbMX7RtzQ1PNLtKUc",
  "key34": "YxmvYbfYd2Lng1vs2PQbahN6JdHx8cnqiBreJF6s9s61ScsXa8R9WCJ7NWqdDfNPT3LiFYf1Rz2yfxcJELxnYxb",
  "key35": "2fxssLxpu6NseWQcDDpq4V68TX3chdhqnrwRcQssMLXg9xkAxYPSnB7DWmuYurEftZZVeQf8RZBA1omoxWy8PqdV",
  "key36": "Ro2V1tnQJyeKAbB1PaaS6enBX96MhaLXjv7nuTGVndTJes6X18a7DGNQmbNNV411S2vTNw36pEj7vpEhRoK4zHY",
  "key37": "5r3z6S1PXX8veAmbCU4uXsJqp6sSfw2VaTnvfxP5trL8drt9mN77MnZj6fWHvTmbZuEU1ZEbmtnEsg3gvMmLKoZ2",
  "key38": "38ngJ7zgnCho5NDazMi4ufdpaCwZQ8QVTKjEr4ciNC8SfWZs1r14az2bVJ9GEgpWUgyFvhhVYPqW4oyWtTRKE1Ph",
  "key39": "49sEHvwdubERGiBpWpkb1oLEYJ6mi5DHLrEhHBWevCwy8q39RN6WUoGf9nKienEqLvzxE9nXpPLZ1AeHLaM5MF3C",
  "key40": "V3VnWEd8wBrT4YLt5GRkkJY8mEmdQHBNkYeFMP2Mxnei2msCSjjCiUk2Nna5NBEagA7b4F6auSYsors1D8eVVy7",
  "key41": "4k8qfSA86SWWFcsVTzX6WbZ6UXQMohddSpeA8AEj77SkGdahgkgWGsWimLxysrYKsDJBierarZdhmHAPEGqkkkJE",
  "key42": "66MPsezURTWh5tnWCquoWUbmaFFGtdm2LcLJpcFiRgxGdvsi3QaLxfRwZkzPFSWMLsnjmSwLPvHHGxJbuKQDrafn",
  "key43": "3DGHbnaGapYdSzP8SX8YGRfm7n2em1PHnUXPcZKutbPX9JkTLSEA6XotCrdZZ4PvZP3V4XY8ExQE7zFrFQhnVwAc",
  "key44": "UH4HNCC6cumwiHtrnFqoP6bYgs6b3ESMrCGzmYkQ22ouShBaJFHzxAgM9d8v77QTw5qXeSuozkPigbZChpP4xhb",
  "key45": "HaJeXke74tCRxzBWn7zYKf17jm3MftAFFf8VBqH2heAk3e9WRDKtf7YB56eMPGUzP5o21SSq6qqReT5ika7evhY",
  "key46": "2L2hUdzCt8ENoZmBgNNynxzw9SR8UDGuzxoRW9poyJz5MzbeGqoPnoy7AdYpb2Qc5dS42Guoo9dNFhZa8gF7oexm",
  "key47": "2krj8n474gXK1qZqQvdT7fWmwp2hFEjGWFPvNKkFHx5Cd5W9dGKiBH41nxHN4ygvWCGR9XvmVfojvx2boXLT69Dm"
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
