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
    "4VC27uBxSGXJZuAja2YoR89mNUBDEjF1T29zsnWR9WzDHgJnmaF4NstCmCWg232PotofmLinswvLj5wzdhgwriwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEEbsFn2xejKKboPGrR31PiAwYBBQPYpk3hbrJEeFQVJT76vGgkRP38MD1R3qni35RE4crKEYxRJehFwbHpus4n",
  "key1": "3eMn98t1a92cqhqrpB5EXQz8GeAR5j4LDoartfKdY5JgaWF7uStVPREUcZ7yFd8PNzBt6G6EriVB1Azrb8L2uAUD",
  "key2": "5huXr3Z555fQfoJR9jVP6v6XfBk7XhCTFosDyxCTNDi36VWZKAs2DxqPcr51BQF9di3m39GrzbwHn14L62UBw8f1",
  "key3": "qR2pSop5h8S56cmVkm8RbUBTMnhMMtYjvGLVEEFSFgm5KWuXvmFh4R2RhRqnwz7FDP8WCkzd6zonFGfc8ckjP8d",
  "key4": "5ZGyBQCx8wteGa5NBAQkVvh4vx4syYaPovtVHrrLddGQ1parmhwHhbhC4A2jRcEoiprR9xaBCjgG9FWerZg9336H",
  "key5": "4iF7EMnQwwT8D61LGarzC3RW3J52nDT3HWoMBtqciqHTHj7TxenMMCL7CabzCDgL9me6Lw1dw8nxxMvaCyuHfja4",
  "key6": "xonqR8M8gXCQN2SCq1CLtKLMh4tmkYtvhL2fd1xbudb3Fk4rbbVCju5E9UMtfJ5dNqmc4fX4DgKpboqQhpf6riB",
  "key7": "2sVVTm3Uqgdt97f6WPBb5XLLxy4vB8LYK6dxFWXZys4vcBTGrRCh2XEakjVwZwB4rW5Xonb98VyPUkD9PhfMFCET",
  "key8": "3Jgd3SURMSB6P23obJck9UkfSMSVvvPgs1BSqYKo8GpXYBEF1kPQWJFiaBqtaZtRWpEsyGbMbk1FxssNnScPexEM",
  "key9": "3PCwtz1opRzsBoZ9znfvVS59QRBzZQioEhR1HhQoQcFk72Emwi7PDnBS2STi9bYrA2xCPsAMh89LDqEd18wtJKME",
  "key10": "4KyY5VLw54aVSot4gNha4WNUSE4GSb6oHpW4BnnA8tfWhedUCk8ZWpNMVyJbF9KTWAwQdaEBg3bjnKBtw9eHbume",
  "key11": "61ZF6NEGSp7m2hmQX1P5UA3kaaL6U4up7hxobbvBjobx1p1JSxjYFeMkw6hcxQx5qQKTyXfCHdC9ZP1en1PPH3zX",
  "key12": "4CvmgcU9tnPJ41XY1k9uBzTkFtnWV64XQym9cZD2e8SxfVuuCF1wiMhjLZQMH8vrJ89pPDHX7cwYAbJJmAWjBpBR",
  "key13": "4naWhZ5ibgz6U1mo9uAG18cgMQuCxd8pZnShLkHTdhPPANtPLqFRFdupqs4fEu2cxTZyFVMiVgWgNZ2FNpdxDK1v",
  "key14": "5pUkCm1eh6zi793ZX4BmMWAbhtA3HZnPhqAo4hqiii4ziSuRpn5FntX3uE8AsVPKZGBuUCtwgype7QMu2osTLnCR",
  "key15": "vtJPmK9D5bpWFd7y1MgaNDS51qJERSZwQbnT7CDmZMN6UCHtTdQr3DmvqR6MsRvbGhNrMoN9DWMndJdP5W6kWPv",
  "key16": "CbU4zwP4a6GFVdLAG1jdVcJvZTVJNkb2cKM9B4hk8FEfqaRiYA7ecsit5USW4RRgzN8SphHoBcY4588GPkzofoN",
  "key17": "4jrbuihsZbHsvqN136JLwbfyim9QrqLyz434aNdS3C5vS3hyZW1drewpw5oG4vB5wpCmxNPmaCRhvdyjxsqucnk9",
  "key18": "5gYhpY2dThkN48aQfvtTLDHK1owgLnsaQtP6W3C6mdanKCeqEjB7ZZGyuQcFhkeGVmCrM84sqYQ45eHRawQ6FSej",
  "key19": "4bSTDR3FEfpSe9KZTqaKrFPH5LrqZ4YVNyszYP628wg2bnBXt8QaNrKBhRTZoGEhxH8E6NhW1agdxRBz1yYr8Src",
  "key20": "WvY77XEFwD1xhkDAPjRVBCMu523cPXBnuJ2y9sX7qvmRmHBERkhia8w9dutzvd5KhpaJLPAWFXDnf4pPxQmgjLi",
  "key21": "WQF7AE2XTmCyp7pcfkFYMH9NDYNRXZnAaGwQEQUkDwXPgNxK2hniPcsBRyeDozwQzSgJRReZUFaYStTynXSL4f1",
  "key22": "o4WeK4yd5MRj8hvaSmDh7ZKybBH36TRSYrKv7svDkG81qcM5B8MJ6HWB6RfMaAad8R2txzBpwRjHiVkW6jWGgeu",
  "key23": "2HZFVxxQLVKE8S66CdBzEiXsvND1MEcXXYVHHfFvpa1wKXd7epd1tnkcjHPC9STrb2W5dy9kZwmHpBxnRVkKUhBF",
  "key24": "jwfpnpGxxy55k2HLSuB7QQmGhgMnKBYwK4xxxgMuWEjZYfeQrXfpXHfYWU1a9RPtkoNrtTZWza1KtZ3RH39Hwuo",
  "key25": "3aWX1QjzJAzjX5uzEevCSBnr85hxN2DasXLvP89wH1S7kbC1FyzZtze1XMoq4znCgkBrzhfYz5SypN59mZwjufNK",
  "key26": "w4nDycR78e4g3t1QTgwYRzFSEChpjeXvS3TYmSgK6iHc4TEZUoriqnQHoohK8TbCdeqVtNsm1i6H2UnZEYcMut6",
  "key27": "4tghMKYgw7jRrMojTotqBXvrptNyPh2iL7TT41saNobkyLN8LyrmydS8RKjXsY7MrYTPTx2rXuq2c1ataTTAxxrn",
  "key28": "2HGhBJncGvQjvx8G3HcNCJH1orBgSt53otye972kuYVtdyoj44ag7Sqnmz3tUiusv6Rn9L4gsaFd8ZtbHBi3vYa5",
  "key29": "3Bva7F4u6bxXg2Y6zeS2zLLetD1TvqRxjqthCixmbBxR7Zn7axKD2EJfLCHYCTVt3nKZUhXAiLCKppVfq6Pt7iGY",
  "key30": "42BowLt63dZ46AkRdPxFW5QgwpqA4YQmDVp2y7RgKZ842xF7LiQw1MYDsbu7AhVGDmimY35Wtfw4YFYzXtiMDdXJ",
  "key31": "3Pk7ZMgUohLjgTd3CCm94U2cxviXiviBdrTjr6cEz7pqRv5yvHWsqh5k9i9SoCLz7WccGqfiXSAe22LjQw6S3rMt",
  "key32": "5f1HaQbmirsd467JbZJQ2ZdSayaxQnw19iXWdEZDY5F6WzMAtat8UJdKEBkPQ64tjMddHWeWywc7m2Xz32ZwjE2U",
  "key33": "5VsyU6S5wMvmqhVzxiWRNdT7GCXeyBZhioQRfr8rZHEinXmf38Z8DqcvrH6y1BTgaNKcFAtimBR4Z64Gr4rKXavE",
  "key34": "qoQwzJzoAsCNepn19u1Y6yLV3JtKZHcjkcYn8hE8fWxFMdt7q8LmQ5Hjwu8d2ZTH12kXhkrZqpvTA2WJwqEVNT8",
  "key35": "2GPFfdzZCbqLGTgUX78cnuRd8CUZe7pMgL4LjBdETLMuEhi8mQwSso9gQQ6Fh3RFFEHDBa8YHJLwEKd36NAmfLoq",
  "key36": "47VaU8MnsTXQmwZ5pE5PbQhLeHb8f3yiNfLDX8roYt1wzxNcKSHyw45of3LHzCnkXdDgYGnMyt2p81LGP24GcTCu",
  "key37": "4v5dERT6t8mKBrff63vzgDzZYzsXWv91P9zPbfZtyA7fFWuqBL91y53qx8RQHKJvfV5jaE9JRoEjzYc56fVdBsE6",
  "key38": "5FUamLzpHUf2C123bh9Fp8UR1MVaCm3dCjs8tmedyxfEYEHJonKvfnbCLoziXKmgaMv8r3zf4f2uZ1rB5BcpyzWL",
  "key39": "4X4TDT3g74uJv2VukS2ZQ8zaLbK6jBJTASA3vFYBDpdLFWyvvP3XRkr86giwuscMpX7rdPo1HwfQ3tepM2awfQsq",
  "key40": "UfiwtsRUNWpUQ5JgfuHtzfmLb1zjDfwvaJfT15ykaWGUxZqgh8YLsJd6zDA9QrkGCr5yAP3MVJaSdmHyhXmc8pg",
  "key41": "5bEvUdfPN1YVVGBaxdFT4SvqcWD5ePhcpR27qeE2EBXkEoS6bc5AGtxjoCPcUc47GFVysY6cZ4iVHC4oMYqCSme2",
  "key42": "5doUymjJeEi4Z7VmVBX5mhhMWvBYkTGvTDSWuHhJ2qRhcPYFdF35AagDJ57XaeKTwywAWGgYf4s2PFU6VJ6mA83j",
  "key43": "EgwupwoS3f1zS5MAFsLGTJuxKzvYStnr3rjCywWwnCKjRpDf2L6sNZTKZi9YzqYUYWugcDpgGKPdSPkwRfaviKB",
  "key44": "4j4aHZsPXsk3V9JZJA9r5Ur1WT7EsVmYACwGZRazyRNx6B5MbTM7ab1VKywbStzU4G8T3XhoYHJWJjGj7U3iyxPK",
  "key45": "2njZUBXK1DbVJp4vMsjVyyXwSngSmqgNfyfN5ockfdez8dcdcLWYrGiutfpswiFboRawBEKzHcWc4JPXdCs952Xh",
  "key46": "257X93rSNemCy3wpMF9QZQ764TKEhsBByJPrGSws2cgM5TDGxEj5aMLJBiv1H44m25NZnPZc8iX4TawaAZzRVVvr"
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
