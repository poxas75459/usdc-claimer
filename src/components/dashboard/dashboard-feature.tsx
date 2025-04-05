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
    "2afQvkR4ireNzobEPb9jSxYHq7Z2aeQNT9anCgFsQaNQ5HUxjb1u57QBmhMdbqcyjrV3Cpxgr8VAFCtYAtJdt5bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugzHATmWJ8PX3johjLzUKHHUkB7VCim49prcf7an5A965vmbUfA1eNtmsfTLKmCuxAZbrCgUWeTxNvNmsc3gcce",
  "key1": "N67uPVBxqYywUMJ9g2mQFeSx5dKmpugngRAGcuFup6Anm4EaaCpqBo7s2oEMtpE1TBMpsFX1CoExaveTZUjDexC",
  "key2": "4o9BKTiRcsJFwSRA9Jo8cqTSZEP5RncWkMcZfHMvjtESgcT6383jn8Vp8Dj48RRMEmLmX6DiohTAvzwjmnJ9XKyM",
  "key3": "3pYr6JM89mWc33WjBYAmL3W9C16XNnuCCpXqbWE7PtaEUUtnRWgHE63823p4xAfiZ6XK12WQNMKvRapyXHkPovAe",
  "key4": "5eyd59mrHMr2D3ZSYZ1X872Gofnv9nyPiR7zPHMH7CsaH6yHBmNYF4nnr53DPhgE8sAXaaM6amE23mj85hkx5UFM",
  "key5": "488UDAdr6ERUWw8YWqP3Ehm1VEWTRsWd69D6oiCjiogFrEYA4YCYvXfAzhdRzT7U3149rsoQJegjA9G7d9LpLhng",
  "key6": "3tCmgyF48a3WNgLgg6FkzhuJ2BHKubLtzQpf6qkqMwouZJ98cWwWZxVV8KrbiH5DESmKN3J1EzeLebviBN19gkTM",
  "key7": "3wzsNp3DDouS5chaUetKNrTuJ3RSb3zxuwUUrLegkcTnbjmHp6e41EcmL5ZsRsjfjfe8qenCzN84RJLrNKjCMPMJ",
  "key8": "3RLjeph5BRbPpL5TwJ8DBUPpEcvtv1LQ4NdMLnKPnY9FEw1M4UAtKy6dU4k6NLQ7Kt4FccPChJfGaCCzGK91VWtx",
  "key9": "4kVAg4h9aAy6kdLKSL9qAoi2BkAbey3tfoMjcbWfx2nJvm8b2xdkEQvWtjWCmDJN76GAu83GzsrBg9B5D36cPbnn",
  "key10": "21Js6TL4nurGjzkye5wg27XxSQspotJdbZYuCuj3bZX2ckc9FoaLeQuiYY2xxTvuVHKE2z2ER4ZLvhqE6sPLMCGf",
  "key11": "5TKhYjBTGFwyppVpCgTz2aLct4xWqkXao4mbdrbCKjFgPzWoDaZxfHjG3n6kcPq3MDjs3APbg9X4gZx1EWKsqTdm",
  "key12": "3ZMmdqUJiQf91cm5xb4jPPHVeWKDPymi2PVBimNMU6DGBfuCR5BRSqWJ7mndKmFQj21ZZAzCwGHFiV7c63LS1RvA",
  "key13": "2SLGy4F9AmknV53ZMxRyze3hFBfz3DdxBdFTXbKx7y6m4K17TUVyKpq9wM1SX3y2cRa27FSHfVdTzy3xYFgG15vk",
  "key14": "3VfTALCdRoHz8T3Ym4qx1AaKJyqDGf7VZj8NqXYPq27detLHL4wuB8FJkSmDpGU9V5gmfxCFy73oMbuSETvvmfZB",
  "key15": "3Hi3tgBDK2xVa6So2mX7hTNS8DdvG38QSnvUyNw7miHaeQYdM3dktsNZZSLznajtcUG541sgZYJJJ8NQf2freprt",
  "key16": "2CWtNRcUrkS68B3XSHbngsB71eexMr6wm4bmXkqejdxFCPf1PzPabgdkcjQY7n3LVvjXtRDMVU6zuKsyhBBdApjw",
  "key17": "5k9WAnft5tqTk7DQA8bugap1hfnY5VNYVPX3axsgFrhGoGcKc6igvgMdAhEnTrTqbbyV3Hvwgh4VgqjYpE59uYxi",
  "key18": "38siJgaAsoXCEzGh6wWMPL8GcpuFYE4YLLQaUchteHM6iVaPX8iPa5DyKXbAis1o7MBQzxmrZovrLZQvqYaga82f",
  "key19": "AYXyBMVAGVQq75kK6owqvHdcDyUhsqpMxyiGjtBoRYB5QUJjRaNSAesTLytQ9MGAtK6Q5U2G9q4n3EsjxHqvZMY",
  "key20": "grZpNm8i4fvDdd57vSWXsM8bdknNRCfW7UreSeEjx8wMMPmkHwCbxxi7A9if3QjE5DYFUtYBkp7eQ2PtdeHK8PS",
  "key21": "waFQ9Xxq1adqcPrAk2NaqfEUhZjLgpWRQJZiq1y998MryasLJy6KLiQmNWbxY8pR7PPbPbKeMigkcuUSe7X7aCw",
  "key22": "5bdk3WLVPFLK7YMQa36nwG3UHY24cW5Q9R3J3mLSgXQs96rTnSnrezyAD13kNNFsVFwSY3Rs23SThz8KrGpPFC29",
  "key23": "3NSX6SgPWdhpEhKrEFfj5tjSjemvvowNqviTHyNoonJE64sXngxhC8osZzPYABgTxrHfwZXkrksURMYcbrkSdsUM",
  "key24": "5N5fv3TVng6cuDeTX2bhtY5omydAUCRExyYssXszLEjxKE1cptSVhBGkZa3SzS5KP41pTmdSpPun8kiH4QJco7MJ",
  "key25": "5AVyUT14f6JF4gDNk9YhzwdoUMqN5UsuDik3W44M3dFSiYSsWxSdpMXQQb8bpngJVuzisgwFoUDft4znLsaUNB8a",
  "key26": "4QsW8gXRs8YMh23EdRBCDSQyMBG9V7GeKcGeDj2LBSmvjhAXGkaAQ5ujXX1YjnKAgFNXjPiz4qut244Q1SZxca75",
  "key27": "6iBfvQTgMEHwEyzx5hDpKntPPGMsnp1MoAJf4V4SK4y1ZUmiHZoCqjVbn1wvibDdPDVxA5jyuHJKoZrykQmb8Q9",
  "key28": "4ffXkdYJKFLz2PnG2KoAbuosVgTiHgLxt6uYu3WD6FdaJjXR4GX2DppEM826NpLcAvjyaHWKLTVSnrCE4FYpVot7",
  "key29": "3xUKxPd6sM3HX6J8ZDZeFjV6SmyP1nK1wdJjFTmytzCxTDMeZ2mP2aYu6zKkqAnfAAz7iPvQByh9CNB14NZZpJK5",
  "key30": "5L9zP7B1Fq9FoEfGwSMMQGdFbG4B1NtwTJdFKLmZ76HYMTGm1rccs4YfEdw95zrNR7Tn7drAWA7VksCCPWJAjggC",
  "key31": "CcHKMRQVGeWZnkEuD9jA9N6XnZGRxUGtBnFajioQCFBbPJQLmbHLj4vKw7Zac1nN2PapS1kYBCEN4USsoXBfwiC",
  "key32": "4PiKrZdSW7GpYMcW7pg82vYYEk2WeuHpacDuhdyEvpkoUWryju152dFpnaPzsu9R5fyPgNuNki4KVFPztGARZsNX",
  "key33": "4HTsfYcPhMNL2oTKLjSfrStuK3Tst4MLnCEpHzd4jtiRZiApM6YVZKtP6kDUzEimzK7bsWPK44yMihDY6fAuKDMg",
  "key34": "2Yr3gqTQi8QymbHQRXzkQQ9KyjC1VVU8DjcCQ9GBzbnJmNc52wW4hhePKFHPc7Kr9EhkAe46xyuRVKk5KuC4BocZ",
  "key35": "5CApqAFkCdKRmvK6kQDCU42RvGmxgG1q9FZCxwpXjRH8DW7zgi7suWPaQQQf3a2SeUANSTPpkBF3TpgtJadrWyro",
  "key36": "5irJrPP9QBygiYJcAU4u3aQ22f3zXRymueqho4WkaxhNwd2MuoLMPrR6L8rfvJJTx8Ve7dh91ETkwgGMEJTGb4wo",
  "key37": "PLXd9D9GJfzPquNGWUUpUdLeJ1YdGJeCubqbzHkqBhr9whiVKSdmmdFkEx9DAnFfwKFNXGb7mKhNBiHYqh5C4ww",
  "key38": "5eykVsFzcq9J5WStmMDXVesig5vsgAJLm49MMVt8X4UWz8iEiSFFC1vqA1XH46i7E2vuig1b6xcsQVcZPxwRmGTx",
  "key39": "3cZLQJ79czhjVsU7vAPQ7MdCsvoXRv5m59baUXhBdBS9HutsUfTvjFQw5uBjn76DPFUCXtmcwpF92oAhYP5ES1na",
  "key40": "5nymSThGABMo4P8DWHHPZyGCB1nCRb8NmPsLdmF2uBSoggXknJ3WwmEEpKsiQ95A17XygLUDw9u5QKq8n3bPdpnp",
  "key41": "P2NpMT8eYAduQnuyRjTrEUromM3cjptPrJPqeobTACjTChBmCboWx5m75nfeZNmePypaADwvmNXwQqf7tggqZWE",
  "key42": "4yCYsJywQTgbskSDekyyvdwsAysjHuWopeZ6GWSRtvvvSvXgt4svtwM5KqUpybsqWUWFMaN8Hc2qjVyS19GgXnhG",
  "key43": "2n8H49shaVjHmyVLZGcd5ryv1c9kbSsf2uLGSN7P67Hmbkdb31e4i15Rp2MJaYG3m3u3niooFEUcmgkC1oppkY3X",
  "key44": "4V3PscgqSQzR9LF6iELAV1ocQ3xBoZQiX9LwAkkp3ChFmCkUkMSbwaTytLqLpSQBzPTqAvzt7efctbunTSn7NXQX",
  "key45": "679djWAJDPVRzRppdchUt8iZGNxCX57prDkhaemWCVXaHd16Wr7bQeAa3o5J7UitdMYVaRMRpJ3gLhUqcx3UjVGf",
  "key46": "44FsXTbpajANzNAxgqsyQRwWDFk4ts93B3gEb96rZfwBPPinc5jXpcL6WcrvsBSpdvq8mvLPQd7cihJaDTGn2sUa",
  "key47": "4pFFXon53JhkX3YdEX2qNMVBAAoAC5Th81r2GfoFnAYLKWNmF9BaCfd19sndhRcxEewQYF3M5QipHJNCLS3MUfnZ",
  "key48": "5bmrfJPLbH2iHHZgw3oGrVXf82iTWtCbDV1PavpL1jTJsduFUYggb5rcEtgFYWJmeC63js8QUAgwvPzZRQgDxnS",
  "key49": "2pfYMGLwyPHm7QvXjavdzWZUABVz4B1keunCwAM64z3in5WH2S7Uv7Tp8hdnSCXPgML54jP9pwA9AaPTZ9AQjyTR"
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
