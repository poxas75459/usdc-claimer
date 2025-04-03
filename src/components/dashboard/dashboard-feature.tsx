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
    "2eRoUgQMjk3UFyRactudc4ACtoua1sJnZGMAib26QnqVCHnPE63EpphBDELcBvZNACZgo3XQN4VWERxfCYJ5DTCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ecvdGnKPnbPZBSEegXvxiSNSyTYCtcV3dbm6ZCTTSzyMqL4jbzJ4LXbaziMQYHzeEBCJLTqrmTSZf5ZQSEp3da",
  "key1": "4GvyrqSn9MNAURuodAqEDmiBR21iNiG6PB7SG1pmSC7qzFTaQfgY5xPXfiGMbAnmz8mpzMgQK9Kie2NBMDWVUJYG",
  "key2": "54oeb9snmiL79mqv6K9TUM3gNkvzhuN7AjReEDjr1e4dHWHFUVzBAHLpqWeBRAReUwFVKbGqn2Vtc59EYcfcqYfp",
  "key3": "4arMbwPDdr4W9VrEvstAiLYLVdGdNMxXkLUDrqWNmS4fqd3suzi8wBsWQw4DdeWGcubKfnQpEQ7ojaoAT4mty6QA",
  "key4": "55BbQ3AKad5XQSiJ45iYeHAZ7kn93gb4uMYiXybiPJaFkP9Qg6aQUPN1Wzz4J1ShNxTbSJRhuTTNNLiKMcuQm1Bc",
  "key5": "3w2AsLVJb8Tf5TohPyyCrj3g4HP7LKprLHEAY3zYtSvMRSwdQM2w6uDv6aKT3oSBKPWrTzeqohNZqga3rxCWM9JQ",
  "key6": "27vnZrBr7SHsfCZ16JeGFUiy9GFJ2oAdFfymNFzAxEyhL62CtqGdDVxWRm1rnuFjM5RUddNaoE6KWzUKTjF5C1R8",
  "key7": "4mQCw4hEqtK2pPCuVDajiF9LuZEPp5Dr4gALEz7jGRzdLaQsfHuJnBw6E7cpgpFJP7VeWYPWdeZLyQWW75GFNxWk",
  "key8": "5yYF3YAkndZa3TMLSdbcVdrHP7fPvjC4jLeLqWCrsMnUP6ncZkcm2uK7GENrFRkrFfMKqJW871rKwU8YfMH9LeEp",
  "key9": "4bnXyKwZPRwHmk24RE2r4B3DPKYG1K9q3HwaXtsp6fygdSsYEzhBFaAMJkdbXFDLybrAhLTsmCPwKjkaTSGgnQtH",
  "key10": "5xCvKTopJqmhaiKdpe1Y6H5s1jp1bBzDYikZYeCESW3u1xcBassZGy24C47Rck8ACzxQt714Pjn1beHnYM1wVLdh",
  "key11": "JynwNfoLKqHQ73CP5S2TBWZDMtj11j1DzRZxHY5afEJKeUgqTSssGffSo5XSEjUAKWF8Tx7jvkzdyBycA5XEcTN",
  "key12": "5SWpg3t35HVGiS1jYyA8knhS5jQHF2LNc4ZAsTRHW1Eyk9QWzTV6HKC89eHtP6o65TAzM7c5kzknRRPSRVfutURq",
  "key13": "2ByX95UyZHwufRutwajmgu2skNSZryvwhab4LLtaRnwnH4ZZqM6LjqkomR4GiTLDiv6W3UFakRPW1LZpzUcHJnYX",
  "key14": "3tZ8GMvBJGrtfSvGCRfu8AuAvtfNQD1AmWX33iz6fbteSJ98wGoDRA1CvR3WAx6Xy4FpoytTxSJeYGyyPTMNzN96",
  "key15": "4HCUtQfUjpVx4LixP2JeNqxpGVCLxYmcF7dvouYVSSZcxdpNB895acUodfHgXPUp6KNS4dMG6AFcjE2Hh3VTwzHk",
  "key16": "65gZxTqC4bBngruU1WHXUT6GVLRXQgVZERciur31M4Kde9zC19BgVXWeGYgrdaHSqqnwRETpgm5FCjYt8hyR7YhE",
  "key17": "2oJszXQHAcyuEmeYNfXnSeBDVgRNjbV5GAqGPx9DP46jwSQYeszGHyCSZ9x143VkC6duF3h9iSFbzNxw87hhPzwV",
  "key18": "3ntmUfQ1CRcezLHwU9UYQEB5fsTFzCtMQEnX4qbdWtwPEBEfoqe9NmukpTizN5SXXKe6mRRH7MNJWsedngdn6LBz",
  "key19": "2FNCDRz3rRLUThZbaztz3F4ArJHkyooUKiAn5HCrBcShmKjh34v88gyNpk8V9GJNhf9ekSUNTex3etse9EYjm1MR",
  "key20": "gse184KhXxrDv88T4wzd7EYmRGSLiwwrNzYqJnpwGxkc7Lbw5Php9NytzEzw3mh9x8HhKkyNLgAXrU8qi1cmKFZ",
  "key21": "cyPTb93jJYhQtwY3dDcMiVY7DPanuFPb93Kw4W7hq4HFRm35uxDmXCLiyyWe9bNow7wAoesA6yZiUcRRtyDJD6X",
  "key22": "3tA13iqSa8R1MNYcztZVmj4jo7sKspXiEEf3FJYcAd26Wo7sEYu6XpXgkEZ25wYvNMmJ6Fv641pAAfNv4PdG297W",
  "key23": "4NSxNLSQbCKA4D8kTRJXNzx4xKmvMmsPmobmUakprS7hkpiNVajNER7SHvrxd5Sy4DNakKgVvdK5LZp4cpt2TUBT",
  "key24": "5qbBARFYq6zCitvdgJ6pnKVjV8TXuf1oWZCQpMayR3oZEmiMRRVWWhuuyxzpKxepfzxFS3HfNUhGFufEWnLLMmST",
  "key25": "2Wui1T2DmAsFEofWMLhXN172B3vyQ1EqGkodC6fpghUVD5JJ14mnCRX8ZxhUHR7MbXhDspJti1JhMmLmECyoLgCn",
  "key26": "2L9PvVXoB3LHqf43DbFivfCjVLiKyWenpSnAtn8HXbp3CY65N3k8NJ7K8LMfm8W7TF1y3uHMsem4L7YVzuEMUEfS",
  "key27": "3xgk7kkSCESoCE4SZ6GzGdg54CVHboXDiTg4rTgdWpPRXqH7GeM9hUBHFkxg6cdYm2zUS8taF6mAqfJGR6q9wdTt",
  "key28": "5F5DJpQkKXNEUjxdNr9xFomnNHrwNacpu2k4No7eSVA4SDz4RYRFyh42yH6DRjysQpkETnPGAwgDn6mG4ntxU4gx",
  "key29": "2UW9e5fKLkGtGVRQzwWPwKDMzy8W4v2w5eE563WmECHfHS7ukP2Sr2pgNsYNj2sgUw6DCwwcjMyLkS1274RMP51m",
  "key30": "3dMhUi8MPFFyaCp1CSkzvN37y5ebp9u1e1dndzqso1rBVbheBxEZea1e2xpx9qEHoox3EQnPHGtQr2hGj7cFWSaL",
  "key31": "4qpq9vgpWhE7KVsSRter121X5gQxn6Rwi4y6ncFVuNsJMzkbTpsVnmHY3fR4WYB5earMXiJoJqqtEN2xGfVpYSB8",
  "key32": "45kQiKFCnToVafuSnwBdv1m3KxyzjaVqWy3jjmj9gKd37hYVFqAvNwSwnBKzdGJ75H5qUhRNszEwRgDL4CPS4fzJ",
  "key33": "2vsdUFq4yKrMGuR9S6FxevQXNocdQZoXtxNqxyEDWgCbfct7eGitHBtvwcfDMe9Q16SiVTYuVBfwVw2GBav6tvho",
  "key34": "2M9T1291kimzQHTNEjsbqUaX8AFGHFVLHY967wMbDX5nKrd7Zf6Rg6K59ahRA9aGWzTXGR8kqEH2tjfpHzY59GFx",
  "key35": "2Y8fcc7H36NDgb8ozVvfU6s4GjnQPAMXsgAbweFbjJx1bmSExmQ5CB17HceDcaprdpFdsydHtF7K4Wc5YFHpJzjo",
  "key36": "5FEXtdS8cvDxKhPeTqR7RFNMenMkmmjjY7mEq1252fTQqCQxRp2dWrK7NMQqaYhtDF2wB1PmM6zGpCg7oYQfRMS2",
  "key37": "5MK8p1qcthVBjfBVTukNr6H3C6Q44gmHyVaakPXdz8UQYBpxTMHvecgP3mzgiVhguyFyeEgPTGhdm6NpyNFLmv5K",
  "key38": "3CGTkr7q5YeD4eBa8x9FHnPXSa9gfpcfm1TX7k5HcKxmuaNo5pqZhrestWonBFArGgxWb9YkJQmPEQC6cT8XquxX",
  "key39": "5Vjr43PcomD69SNnMBYUwt3WCYTPFr1kpQTRPRUaHjGujchZeAQNFhkKYVqg2PzPA2dxaRENdE25GU2YT7W9xiZn",
  "key40": "5tvoXKPMx163SMVqS4U4oopn5uaATJzydK5fNCi7UNn5kTo2k986X7NMvbBh5hFKvsrkyNqxaiSNqkqskLzQVDuq",
  "key41": "5g44iPqeewdETEfGnpmoSfASM33q26quDZ6PTTBJhvA8xNY1DjXrCqeEgPBFDj8KfAAtUQ8HVPtJSRZ7U1toAqqx",
  "key42": "2dDuFhiTKkMNZpatbgPvs8xcT4qQKzkUsZ843v4ThY9vk1PDK5r9UoA1bMehq9WKJiWn3eVj9c3wYcHU7SwbcVtU"
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
