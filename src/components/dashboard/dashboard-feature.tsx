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
    "2nRm2PpUiM6cVE3L4w7VeuVtgF2wsd9VvtYMwUvd4SDDXLsWwDjKcKLyiyEEhZo93kkeguRps347oPghHJBFaR4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtTXDR9bhzyCBnkFYoTwSJqYRSijWqqQkrJvhhgzL41PHeEGxrMnS315RcBo5iZJFASVLjc1JCMhtRzSB6X3MqZ",
  "key1": "5hmpLq2bBoQUsxvLe5QEwREQ2S8iLuwrroVhStJyzT3o7cBGcUB1Kn3sdTXgfmKsWhZtRyS5WWghvy84NJxgPvAv",
  "key2": "5btDLYZ3Y5XFRuRbBeqiqnUoeaBsmfQ3iKVfGboA23wdsFx8GFYAnCS9DUm5AJS4RckrxpNLxEGCJ77DDmjsagPS",
  "key3": "5sRvj2s6yguXWVKF1pp3ghYZFnCiiTHw7HpQrk7EPjx83BEUGkBNitSeZotrZooZdfeCamPCXFDptxKTLxFCz8Gj",
  "key4": "2ur4t7zEtL7PCbhra6MUPxbygf1KyGQTzGbMp1tL2jPJKbidpGXYYSZsHYJdnVGpMB9UeqEAEaJ9psvGus33eBPY",
  "key5": "62qyywxekkbxPJYXpPCL4TdPVf3mt14eHWPwsbtzLeryKhZ1dPtusDeU4Jc2xD86EChhE6ST9xAYcreBDc2j6EDk",
  "key6": "naQs5EE8PbgXeuj5La4fWhKu2zroNR2ZZXMaGLYmAsY9LsUfBQoT8KCCyU7Ke8W3LkvNU3mA6W8RFvDVAPzyD8Y",
  "key7": "4szpGUmpDuMv8Q58HNs2edK37vXqrzBDeg48JfUF4k24UATtMVXq4uNZbBSSnpdYVMFsUPKknVsNREkd99AZRDeN",
  "key8": "5EFrpSCczeXBCoxEt2pMSg6qAmNpES89rHmtHhaf78GhPpWWtfD7UmT2Vuzcrz3wwZsT4CFth3xqqPFxWMS3TBtb",
  "key9": "4SiERTDpuuUVFrqc9SbnVSSW6i78fmQPDZnhvVcwTwDJFJ9LMeU6WunhnuUkh2vBahe8DPvVi9L3FJSiwuRkX8w5",
  "key10": "3Wn2U34guoBAXT2khcEoTG67nVKdPWQ2WbybZte6U4G8nmk8Riy51LKEYcSiDik2Yx2MoVdfDVfaEdSbFKfJH2fD",
  "key11": "4bLarxC5tkKKKDAoEbourJNJndkt2Zx2nWusHjFcVaBWNLTbbs1NfWvRKmwJn2g9ubfxpXEBaXpTNUVS5L19CdA4",
  "key12": "53cVDtXSHQiwB6R2CQbQhdHd49ehxbTMUzVEd11x1C1xKPZ5cFGc5CrShvTzoYfGBHULcirTYt8pZ6DoidCtEdnJ",
  "key13": "2VTs1R4DXqXeUdgm7PtsDcDQr2PdrJkhu8uRvZRBzj55Xce2DFfPchNv4iwih7CYWvmN4EEAJnNuAefduDeFd6rG",
  "key14": "wG5QaUY9hT2UaqGXZGjrzzeZyhCBHzTfLB176T1UaLQ1GrZfCdL5MNtTM8ww8JPj2wZnRqvwYov7abTZLvTfM24",
  "key15": "sxtar3EHtKZ7ibp89n3AfVencwWt7ugEZkFVVGxjK82BdQN6hkez23cFdfvqGmYZgqg97jjnJbLJa3JEbFTtza7",
  "key16": "2QM9kmRDUFktiJr7Coh5dMeXoAZaL82qX62zVsEpLea84WRd6ZUsrW9kMcwV8X4mXeud726dkTC48rFA7Suyr4mz",
  "key17": "4Ao6zthVETyZHMEcQkbj2Hwe41fC1oCen1ozRdTid7hSv6RXeARqMH3JtJBcLv3QHVueEQy23riDuVscen9xG9o3",
  "key18": "3PxKzWyNNn5eXhGYhuBvC4oyjVHnSoLG9UPYrQb2MctQVyA6EpdjraQ3iiKwmoPUjTFaztCx27SJAuz2YchtKKhi",
  "key19": "227vNQah89CasxctgirG5cHacd5Cb18AKNAGaR8NQsucrRJy8A8RKTmzFZSEWNx2g2P8YNGonQAF29w6PRc6VEMt",
  "key20": "4G92YJHQXV1Xx1zeehPT6Bu7QMs7iZTThCwrLNqPSm3MbGX26ChtJ97BKNFaCoUyzzVenck7a2svEafbAmGUZK6T",
  "key21": "4gTweEA5MYDukYpTQVhzhNMVGmJc9KDHsLSDuKsUVK6TiYK5wZoNRP9G34jqJqvKAgVD45ynXqEtTXfNh6hV48ye",
  "key22": "2sib8VgYBojpQFVQhiws52kbHaQFaCC7DSx5fmNgGtm7geebkQ8US1yMDf3oMh2YsoNvgwU9cQ9J74YyW7YMnU6a",
  "key23": "3tsaaPTRPKh7Y85mG8qQnapCWtcv9x7uHFdkXLyQaAXiMYhKpWyvdYWCi7sJCRVW6F4v1VXo6eBH1MEXSkkBfQrp",
  "key24": "5TdCNnvCmV62GxDSRrdRSEv2iFKKg5Scxr3X887BtX7JkJ5Y21KSjPK4nVrDqmhYz8QfHYivFV8PmZMDuGrSGZb1",
  "key25": "3DoSCjeVaQbttyotvB3QHnG8pwz4qz5j97jghsZ6wz3Mh618rqotzik5FME2LVo9XiNdD1BNLpupXFwLUiyKhcdB",
  "key26": "2Db9hkBFA5C4zaTVTBFbVCgvUQU3X97zYGerrmh1bT8YJAbDtZqz6hKGhuXCPBbtk5SthhokhypLLP1cTiU1Njnw",
  "key27": "3xSAXemEyCPAdgV2pDFRgThkoDnU92wP4pfBWK8PsZs21cLULyW4EHUu5yraoiaicH6oCUhCDRPLuRLdXL6vamU3",
  "key28": "wL91H6PmnokG6NUJ2xXJ5LmcLd8cxnyKscXwbDUX8jFYzZuJJ55jYqQzvYcgzPbTbGxccr4wyAPWjGfPbV3niin",
  "key29": "5G4drsJ7WAiUr3QW8mKNKQKha9iiUxRn328LV1JRy4M6ou6vJGU4PAt3QioyR6GmJYr9KoP6g5UMYUWZmmQTmSUg",
  "key30": "2nmHDQX8Di59Hg8yt2voBK6xivWNtpR9BuJ9ZkY7KBsD8tT43Yz1JaQM82mfsajp7AxTNDLRq9HRhYnQ9JyAPQ3N",
  "key31": "2BivqZMY88paNdke7vaSo3YcrjfBrvhFBs7qTh82WiYs9ujQGCms6mUfCufHULZUqeL1tXTfxVFyqoPy3pTmxn42",
  "key32": "AtfgEywVnEzNr6V4fZbo4y2UzhN36CXr668zTZSerY598hV5558iBJunj9JoS1Th1ZUWAjRhL1KboAUdMPx5pQh"
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
