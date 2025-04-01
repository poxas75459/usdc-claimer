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
    "5x1WFh4fGAkmEQMBTjsRehpMHyMWS1UboenpWe4ZyhTfUkFhXTMsCjCQ1epniMTBD9jouQfw8wTh9SzhsTiMCJTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvEmCfCMDp6Fgz1dMB1AYYdXKFPDTCc4uEef6h2ZiCCXxD1UYK7mo8jms9TD3xqKavioqpRBCFKLvGSD25E1U2X",
  "key1": "2e6e6TdJrDVnJgsVjPt1wfMiAqeRfvK5hvwNfkJmDh95cgyQe8BUP2WzZkVXm6zRJHqpLuAT9TKa1z81vnNNX8R7",
  "key2": "2YxXGYEcyLcu6TEQp8n5t5mqiFWFMRU8ztdVddUQjaD5Eoc5Gf7qKsxEwkmPCN5e76PyL4TS3ZtLikCHMVLia1jb",
  "key3": "4MXh3C9SNwxhSsgmaAQH2aFL3bgGtuSgonYiqLKBF4M9wmyWm3AnuYczSiH4Enni5Eg18W2nzSXrkPFzrTKPMR4f",
  "key4": "2ge7CbHUqRcHAwGPz5DRnSbjvGgWuqRsHMwNzmYiTXpTrHVFLdzgddN45JHKWhEgevPacKixmp9vXsLuFuroVXrx",
  "key5": "3VN3ZebQwCD7aP42tmgWFUiGfmNzNYWNa4ch8KnSw99ss44J9Ve19pnDNQQtuvuqkrSA4dNtXhCm3KaT32rvzaF1",
  "key6": "4LnTWCvdaasuj8bNuPPY5HLUDRS92BAXdGcCEopiDET1srqYHDKPG9vrS5qaQv88xoXBbfip4Rn6T1H3y2wkuaDH",
  "key7": "3DpC74ENxrjzD2hZjHCgxkmtsAJ4NBDNLRSywFovgYcmDnh5Txgdc4veMvLsaCuraPSQnnxsPxzo5yTnsm5XkjEL",
  "key8": "3nos6TZCq6fDCW7jeCtwfmgh6D3fZMsYFTdNZTfJ6L8hNG6S4unMqrnNLCP6nuviQS1LUi8csuC2QNBM1gWmwMjz",
  "key9": "4XM8Jgv9NUvEisnAQJSvxzYTepjEaQyKMdWcBJcfcCyrRq3aJTH1uDWPnskyZRX9ML5fd4x8Y1PuxhKMktkReYUA",
  "key10": "3eUd5vmYbKUgXY3ETjLQVsWoEiH31A9HjjHibAus4dBCn6544uFFNbddZP4RqFMvAGUuEPba7zpWnToNhi7X3Qkh",
  "key11": "5wMASdU3k9tB4tPAEiV82X4f4uMJ8HrZpmwY3FrFQ5SfAFtwTZ8YFPNquDvAqGbiy931H4ccQ5eDqLEN6HmUvHks",
  "key12": "224ShCKu5r1eG5nmCptEFnodjRLaXTMH6QfwggEpKWY7BPqMMcNomU7etRZ6VxAhwvKMvv5kDiW5R2xCM95m9w2y",
  "key13": "3waWA1PBBg7K17MY7jyjgc1Z7oADTRjyDawDwadc1gw3CMndDTsRbVEpQP4gHLNWVcj111EtN2obptEkjMMwykoB",
  "key14": "2k7C9A5tYW7tY2FMk4QqyhRxavdMzxWtZ9xQquL717LEhacmYRd918QSJqiu2goh2tjKav2DhrSHJpACutVyZ4uW",
  "key15": "5HVm4Ed3mfm9MDLfg6u1BS17yFPZqK5KZxW8tKBwipgvcKLbaM1xphRHuPWH2dqsLBpBzftBkfpFc4tR21jbthaV",
  "key16": "vkP54veEwMTcTbpDkz421sJt4PtG65PatACyKQUoQxg7EAD3gSfj8vfUXzCPcjufEct6y7CvQAAvTNnaBQFvVVF",
  "key17": "ZWXqKvTSwC2ngpJg9pq45j4aNehckx3B34zuft9Q77pi6y47evwWxZvATejuPgoHNevKkPmZrMbN1ykc1ir9Jpw",
  "key18": "5gypGgD2DpiCzFGkjfbGVo5516qmdBgVTYJ7y3dtG3kENMnVpaPoTKk7fXU2QG6n4pYarwCL3vWsBQBfGi9TmjUJ",
  "key19": "2xrrDVw3dXD9MRaeWhgxrfSqrdMcpgRxFtKsukXxz8bgiQQexbiQUrSLskiyF2a9H4oBmJa5y1LHJNXFDqRoJTfr",
  "key20": "58owefLU1X62QCkC2G2GAbi97bkaicz1fMayqFgK8FAcenyrcFPJmkinwnMbZsemHj8APW6K3Y6GwKtHN1hNYnK6",
  "key21": "5X6SwwrxDTfjHvLxpzrciDZH9QuwhmNHHkpK56iCh8qaJJDXTyhkuLSQxteJXsDJZezMiq8KdNoJnQGdSp2UmMpG",
  "key22": "i2HLMQq4fwSp1Jbpo8Md6K9sGzTvUVDbdDm6ivUZApz6a382i48BjJYZAU8NHzZhchhw3bybfrEpRKNB1PbC4ny",
  "key23": "3MbktgVNXEYfC3MWG61XgNZK36BM51MbwqVDWSriD5SNbpiULe2angvTXNcbnn7SaRRE9F8xfw7QZDUASVUX4gde",
  "key24": "5PV6irecDR1LbqiW5Wukxy5KSQjJpznUEfvxBQEwa3YW7w6UvdehSGpHd4pawdzaypYdzkPBUpUNiKBZJtDxY8kx",
  "key25": "2Z8Xi3SGJgAEMP6Vrf5pwPeQXxncCqxSeZsmazXotQYKi54G6gx2Ew3DAbtZQFixVReaPCM2GrDY1FLggHZSjKXK",
  "key26": "3tySDBxJJuHhjfjm3iokiFyKQHupMg7A9xPbbKMvTQzktiysXSQFT3GgtCC5JB9eg7jULHqX5HEtwUWYhmRFVSsL",
  "key27": "2u7ebj5h6xjgCh1rRQacC5F8UchsBAfgiEwAtpRn63TQg9di3VkiDZz5cMVEgzLCbhjMerdEgfCZCEchmG6EYc1A",
  "key28": "41rcstgodX7AxBCo9FfjE2KY1qDDvtSrCYqjZVYn9KtyFgBCsuHk3pL6Eo6EVdwbGP96XyTV79VTR4B4Lqp6iCnm",
  "key29": "icRvqnisLY1FDth6uoJgWfKGawrAQ6RcpBwmtMh5xC76Pyyn688JkLQZpVr8R1PTH1Hjp49LzJ1Hgib4QPmSo1D",
  "key30": "3b6gVvx3kUtTukQAyWJ1PwHG2DamK5NGYkNYhQ2fGZd6HP5zJYorY76CdTx2JvNaMp178ugcyUCuDYTAeMj5iDVw",
  "key31": "2HLcHJtrsQpMUKXWnDFNd2cq7wt6xJgPPJCdSMSuU7Sat89NSxF2gZxxAjyGgA92qnT7hdsup3QFtVUXdhR4scGx",
  "key32": "2M2tG9kCUSrK9pZhZ7Dfs9Fcivao9GJNSYCeESAjCf92C8wkSSH4MqdgwkmtCnVBfCQiD2gRXt62qMPD3bLiRsDr",
  "key33": "59ibM6hpqm5UZGBCQcrfevnJoBv7BKueUtktswh85k2fU2WWmBrBNpsBp7hqqVrVDHD44NruzSp8vvCUswy7tjfF",
  "key34": "NPujYNwEJNoLh2QqLcGAeCQnodfAM3p3M64XGoYKjVtzR5KTKM1gG9DpdiM3j9m8WMWr9mtXY1tosh7m8bv3Wht",
  "key35": "jfN14pmefVaWABymv7rHn1wXVpHPeX8mhSkx3RGnDJDmqpQaRrFGZSP5GztyBnXbxDfDpFsKXy2z2oja3mfJYZw",
  "key36": "dragprC66Tc4DeY7dYvL2re6qPdCx8MeXb3x97QnezKY1UzYkjpfDFKUTCKp1xMehEGTDABPXc4LARxA5bTJX8B"
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
