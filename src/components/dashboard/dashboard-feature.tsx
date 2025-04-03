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
    "5cf2bRKrhTdPdSg9ceQ5xQfqWQW84UDLS7GpQet4javRrUZpQUbKkx6tPC1wCZgrzKrn3pgnixArda6jg6XgGTTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FkMP1JdKCoeMbbqDC5QDb8xDCj1Jaw5w7S18cTBkZnJkPpD2qHvxpYSdwmtrkVJ9yF9cFBepuhhMU7xeo1sppA",
  "key1": "31CmpvCs6XzVtdmxF4XDBqRUKkSnQT3hZgrnf11huXQsHCCwAmz3YAqHUZ48heyVtaDfg3o3eyWwtxFCAiXU77t3",
  "key2": "5qV9KyUbKCSPEKmKYL7C88Zp3wSaYdW6KhExnjHMKWDnKbStawfs6mioik6osnwnvNpvHrdMYdRsVQJ2DCjLoP2r",
  "key3": "5Pg9zkMV3BuWBVPePQeKEtPSYXhb1nABgRUeYuq2TWWt62zM3uns9Q9Fq8LFg9xbkpYUe6JHFEChttRU7CjyyMRr",
  "key4": "XjcGZkDPpaTgxWrVRLiVhtY5iP7DyxpRdCtLXrNxsfHbWBuBxhjH1DYgCb9LmzNwkHvFtMJWfpvuDpBAzAZB4be",
  "key5": "4riXMEQS1JRu7v6nBcNxnW8Sz3T19ZBdETZQSK8pYaKwobpADYidHv87no1WgS8nTYqtt4PkPBhfoUf3TxTd7xrc",
  "key6": "dmMRMu9BWTsuV4UU25xpC5ujuoFmjVPKy3MwuQijKDFHbpwq9q5F6Qm8R3QB2EEjDiW62xqptyYKwRWipHhuXA7",
  "key7": "5PVhXwtkhbwQbs1i1bhgGoUfaoSdJL4jBPuLegpVvoo9v66Gxzx1z3HmGtNPV4Bs65KBSnZt2pXjaPxtKbyHriM6",
  "key8": "4QtRH1wrvrkHc7aE3DpBCsPuFhaSEPiqWCpNpV1K3BC9MsnMXjVuR7HgSNo4zJp4VSpW235zmMxK1KWuQhxpBDZD",
  "key9": "5su3sk3uFav6coPSBeb98UnpMbLXXJqPKJAhmJ4A7XxMQ7RrpvGjvj4ApVJAeJ7EMbaGB3qvDtG3CmgjJpL9pbhj",
  "key10": "5zWPLLKphsCYAr6AT7bqkqmHfyiLoRdQ7qZaXGGsaWApAiZDZo2Ho9XFcdYq6RNoAvyuggAp576w6uWMRKr4xvJ7",
  "key11": "B3eYop4cYDmkE8FkERLn9yvXbK8Nd6TBPpk7WxNdAN94N93rLno986xFtAxT1ECbCX7sGQew4Z3nPTnEMuKWSEx",
  "key12": "4JhW1hCwXR1ZYdnfgbuHuBbwLwH537FaHrGYE4H8Dppc1B13uYRWJASs2SKB6JDpJF8HaBNUQ7zqRaPLxSqAjq5H",
  "key13": "5ujynjzujTCNPudKbQAYLL1uxKAER4SzZmeGWU9ySZwAJ7yd35NPfYaYXcxMfz9VdnkBQFyq7ynqKovnj5KxywyY",
  "key14": "29es6LdiqaN8DU7baHDcxfUA7emeWgQFYgWE1cVBEcHKkXQcMxgW43SiEGuSCRxpwaz1S9hnyGK5hUHrkUhKTZXM",
  "key15": "36Bw7yv9JJgcZzLqB6g5hvfXH2zzTPLPjDgAGcqTYhgn5LR2RsgqyjStMPo1DxQexfqzAYSCXPhGauQS99Ltw5Gr",
  "key16": "3J2YjubpwniMjsSd1mU8foHB6p2DZEUqctLkEYBpgN61tBo5tPv6nDXNZvS1usuUgdGV3K7EPbPEkbPtL2cuZDVM",
  "key17": "3DWpfZ77YcM1gPnyhEfpDFKRVKpR4vmxLE1qUZuB3Gp5ZnJPLNWAf2V7Leqqkyw2XDEqpiXewLrAoGM8fcYvhGhh",
  "key18": "5x5Wa7XCMgKWnb59aCeKtdBXbNwTTfcxMMFTMkFp5W14pGiShuteYDzsLztYK33zQGCorbgcgZnCDhAojwsZagvn",
  "key19": "2H1qHa3CZHS8h8B5yt2N4qeKU5HmHqXa2Lm7uanPHtkVwHTXqV2WJDhSEvZs18beJZuztVYhDv5Ho76TKxeq4WEW",
  "key20": "41R6EHrCiddSJ1EYxFS1iu1fPQCypP7e1X8odqJYv4C1hxZaTV7pMDcUJc9B65VD8DKJEpYHrKU7nsn7Aqpp4wKw",
  "key21": "3r5HEA98hcjPT2dmC6Lm97h2oJkSsuP11aDcSWAxdcrEa1iz7NPxU8dg4PuSLYpP4Mof5ZEXMqtFFT1Lz6gzpVN8",
  "key22": "52seYwQu9cSYVk6vSM14C2ZamRsqVacUMdFsdpPCZc4jRBfzRwNgtZjDmbhaRm4LvGd73eXxQRZMB6DXrJk7rRtU",
  "key23": "5wNfrrnaoHUgvZuWb6FHYSrddfboYt6fRQfjszjybQAitzDCV6u37xKDpfpYxkZeDRnj9jaeYrtQMooyPuxbgJ8N",
  "key24": "35KnQz43sWsbibUqNVEJwjmebPeh2VqjR4WJkQSC3Xs6s9Z8ynohNztugSXLuV1gyEiL251DELg7baej2KvxaneZ",
  "key25": "2W3T9wawDHTrBeY6GCaUjbKMsqaXg9QVbkJJQY6gYQrXxfFhsQSAc1djSoAs2rD1ZQiAy6icUbdNveNRhAHBhfh2",
  "key26": "4dSM9q1mJ6QUDAaHj9A331vd8NVVK8eVbVzAU4E1xPKXtntjiKLdyWF4c8PJ8XUM5qDVACWzMktGtjGHPz4xzmPx",
  "key27": "5MmHxLbtKnsUftZjyvbvQpEo2JAajrWRYkTx3qR84QV7xk9s2A1mdnipinS7fGTYkJPSi4tn95WNWAEvHAPrdKBa",
  "key28": "5htPLtCVN3VFr6FDDFGUNnVr9jsq2U7TfpDK6Mcu8p74yNHCwGuZ4RjtM2zzKNKAceXoDd9MdzSVtcEK9su2EQpz",
  "key29": "5oq7ETpLCd7y3Wi8NYvbTd1vLLoZcjJerjaVtR7WEVAom2vsVGoV73XuY3nrc2hFEqXhy5nAxAzJaoa87iTnZJF2",
  "key30": "31B91PrDH6zX6EzA1B7BKRoGA1ZWBUDeKi8F1fUeg62GxRcrGGmwkr3X137Hbu67Y2Qitm161KDfjU8kJpsKxwHJ",
  "key31": "5JPTMwwqydhxV9kpaYnSivi1MH9EvERspPiGDNXwhHdKQ4JQGYT7EFqpapWYmxLoPyzxSMmoihNTLnCUERBwh7pX",
  "key32": "RAcZWNpTLBVGJrxQM4hnvYdNFLaAkehLAiJ46NBSintLtm11JiiA7c3pGdZW5JtAcUsdmKU573etCbdgL6pg2dp",
  "key33": "25FB5ctXT1cp8DDUV5LJU5Gha432SrMn5tENYo7JTSMhnWBcU4H2s6rb7ejn7Mk8jqRYf6jrNZxs8rjzfVNhpqdv",
  "key34": "7TLr3jq6dVKa51z2uzQTAHpCoARtAfawmRgBqftbfvin2WK8ggFk7GVqQvtSTM3eqvyvsVg7MEBfy165k4FmBGq",
  "key35": "2MaUUGA3zanaGFi1Sk3N8JWW8WUXSmMSfTCwfBMDbkcoPiSwSSXdA2C9jsa9cWrPJnEnvigM9Ar1jJqWkmmZLtuS",
  "key36": "3H16XZUYgcmXBqyw19RFXfDWunf4rV321sW8Zupj9mNq36fAo1A3GEVN7XirKJ8iCEJMR1CU7T735A4jqxnWwiVo",
  "key37": "455SssxjYo4tmLE9WhvmJffjBxWim32scNkH2akYA1bRZuqvRB9RPrvBdYwn5GVGBELvGY6LqgD3hBSJbhcZmsHy",
  "key38": "2dcxfVHqx18xvfBMQeSEB3H9gQtwiZejb2MPgdHJRKpsYUq6m1AYEuyFy2swbxAZNjbfh1HZcvsBRVWK26NxRP1F",
  "key39": "3jiEkSYBNcjgKFKVb2G3gHZRx8K4cnaAxWdu5tEfavhcXcMAeMroTwa9qug8uCEi8mHLe24xWp288jLep72Acu1c",
  "key40": "4hzMyG5DZnvP9VbueZqB5ejcbQeLf1o26xpAr3ieB6RSa5nwspfMPykkQBiBhL3koEdBAiBNmmTHLTxTvWmFarWJ",
  "key41": "3j5uFYkKzdyFrkNgeGSyVw89x5N7JH7SAPcXJdc46R8jGL5uqFXkf4xhk7CBuG9p4QWCfA55n8LgBmPQ9NWitzkc",
  "key42": "4nPrDJGBsfUcsSP9g5WY39KAaxtKYtLHK9bjVNTfrPfAbdcAsPD9cdYeApaX9oYU7UspacVK66kaA94pu5yyFp7H",
  "key43": "3Q4Bz5k6iVBumNfLRX2B5nQ1mcU7HLKEPKzY99xdV7YaA9E6eUmWzAa8GhNFncRKbN7WDcdEcftnkxwY1ck5ZR2t",
  "key44": "3EeymAhu2rvGPiyF71KDzZeGbnx7JqKi95iZwVemGgju6CGysQFMoydNfozru9jsESP9J7GGLw3g9W3T941bikSD",
  "key45": "cs2XxZUMTXj8owNtLs512rYaoigCVQ6QTwXPC9ogSfNtWWPsMufZ2AStLVdfb56gCETym9je674rECPbcTm3uSK",
  "key46": "2zJu7URm9Ssyt98GTpTrpkrr6Dxdhu9aWJs81JqsM16k7HpPn6UNaJnWpfb1uhLB2CaAD259ppPQWkuRaQ3coHJq"
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
