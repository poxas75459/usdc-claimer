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
    "3spviNA4B8ywbHR7MnRs49aioKF6mDahWnrxf7RhM1nsXsiwuTQxwQUMUgbcB6FxTwJGysWeiibTiiBGhHjUEka1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2av4o1e8XQkaHMK2HcbEVe8DWwkTPNgVJgFDHBTbaht7kuCayA5XnahY4sVXUWBPf26iYk9xYYGpzobxgVisoXJ5",
  "key1": "5CRZTnz1xy4D8n1KnBdcg4SsGothfpderi8s7c5AQWtFF9Wv23LrSic3qhWnCsFsg1kzqCLSYQTFameo377ZPbS1",
  "key2": "45HLUyGfEtH31cxJHdJTY4QoM1xhuqs4aNaWbsgHcPo7SXqGGLqd3h9fMHgCKb8NtYWCd9bpVnz8WDZxAKTi4zrx",
  "key3": "3y3KsE7tKrRUz6ZqUaeaHvmgPCSqt46Y4ZtVToQmjUtwAWxjg5uxcqeDgeW27qYxCNt3wKHWaTWFg8FGkB5Wcj41",
  "key4": "2oFeQGYWaRgBFfF1qfE3LHcXBdSHjDeB4jRw9DsF8fhUC98d2HvZyTeubyz3UBm6DvoM8U6s5h95seBD9UFW5AxU",
  "key5": "5ixS63bAmdRFnkJ6d3N2RbbttTCy3R2VwQ5DfKe9JjTRNccVREvhnYQ9NpmC2z1KQbkbyFbfm1TSxRUKiYEcEgxc",
  "key6": "rzpAeCWqnJYcFzuTat9vcZm6fHF3gegfmdv24p2SrQhfhJjRw6vc177vYzwzxvahpa2t4Wci5TzarHq1CkNQaWf",
  "key7": "su8fn7HwbzdRAHorMspPnyVQLNr83mEXuzScH7uZcH9BWW26R82XVT55gAYF5DrSNq1cT7VsXgDFsckM13ECqsv",
  "key8": "3JQpkpCe2efXDDjR3g7LBx9zjP3meHwprHMDJeLuqNHSjVDeTm4we2CBXcUSydB6Dav7bZLATVi8oSHdFGh9hyoC",
  "key9": "3Mnes3DJ9cRMsTZQ8DuTmnJRtK4Q3jtVSWNimzRkFj9HLhTFKbi4ZAK7YoopNiZqTTuVSFDE7teCfuFq86NdX4NP",
  "key10": "5MPuGjWbwN2PTxnFeAWY5Qk2WTQLjJEwYS5Cxe5zB52C9ReXYUoWQSwUQLo72xQG6Bz4sfWUGBLU9F5V4NDFQf7i",
  "key11": "21v9Y89QgSsNxXokAQprcMcvF4pVx2FV6E484asGdu9PUUbQTW3oyWevcMrx4Y1hBGVYGynmGULwzRu4TZqhdLv6",
  "key12": "4h2g2PGjMJcuSVrkG5pFyriv5vCK4r2WQ4jdD9mUQy7NLbCeYSEA7koXyHz6DFLcTLgqe9WX2CwgswtkCiMZ3Vzm",
  "key13": "5ZpctLgCmjsCrUcoQDfb5zZnFdqWru33UCvWgDaimgmXXKmQU98yoKLMnWtSTewukGsDehy4QkdGU5VTMKjMFMWd",
  "key14": "55Bq5H4D2gftazcsPNWr3nyCQrvUpRAs5U9k9F2mHdKcZJ6avj5mrX9E3AtYFdFe7XeEe6dZraKom5DKtSXCTprd",
  "key15": "3v4qY3vQysjMjMLV6B7u4QdfzqkLXgHBuEXGhdhaWCQe11P2a4LnPBVtLZoMzM3Tug5VJyvAqJWtztydUSphBAPo",
  "key16": "4YruP5xwRQ6n2UMVog8HG3CKcyoKJWr4i9DiCH4WQ5pTBV5KTHMg6JczCpKzdd3oDcYPTX5LrdVGvTHPCeQrwGrN",
  "key17": "3UMEpNZjXEQme3dkTVVcQJCNX59nu2SFuWhHJEBQzAwCDBsBhPqe7ifLeSXiCoRKQyiMbqnemaNvQehbzc8CEhTA",
  "key18": "5HRz34QUzvSNPztWKpVqMV94Dvp13WS2ApjxHXnvKFeAbLNZVM2quzN84qBRzjnHUtBgTkoyDZYoR3UFBAqjytZj",
  "key19": "3SDSjkumLqZX4spjKhhPvUhdLffNAMpoSqNRZCoGRCVsx8AozAjzV9f78a7ofLMHb9x5psBXTuco95ezmF3KA43N",
  "key20": "3V5vE4KL6FGEivNi7tThBdVndDMV5gXA95azC7JspJ1oS3XpFV1zX346Lh75LtLNBFXJq28ki3grYBdZ4iEQibDV",
  "key21": "4fsXL1WzNxax5YdGjKuEXsA49xBnjARBJvfKuJH62gfH9Wt8YrQfMnUtxEXcSgnef1kKKrEYj7vAtX5vejeq2G45",
  "key22": "65mUzLvkv6P6pPFTeZto8stdSvDNBhChFd8vhEQj8gSsjXHaM6GJsGi4QDSbBRsMsM4DPG78QcAVd7WArkxqk9iK",
  "key23": "KinYFUq1qmTJ2y2RadgG59PCksKyxryhAkU8AaWGAPSLmkumNkrTVErBhFZstqJuEcEvUAWGAnufZJYA7keGWLJ",
  "key24": "53Thu5VKwSRJkthYzA3x6zEkAnybgthSUuPcuncQWwSrAhzab1tptsvr5tTWnbYzDKsr3b9z7NhfEykrRRjUf6Kr",
  "key25": "4MdqhkEMZMbff5JZX4sSfChes2GEaqigkyFWkuh8S53ASR2hftoHWpiyF9JVADushannZJ1yVFDXmcAAHiCqoE58",
  "key26": "2kkW3jJSJViy4WvtLtytrCNJWuxbxArt4LVaNnVi3Lxr2noG8jxCJZSuiQ7ApXyUbn2KuumDHy1FF7cXTPvmLfcX",
  "key27": "53sXjeAo9GaDSwtVsinqoeboYUejqPPniJp4jYDc1PPXngXMKNfCThdqKZuLNXcssQq9QKWt7QRUAr1mBgVt6p72",
  "key28": "42kDezpr2FaMhfWYgqDWS4JM1etLF1Scrp5tSTZo48rVpb6BYtSNAv8qQZf24G8A4JT5T2VWvEHzprBitDUuZCj5",
  "key29": "t7G7GpHXBspo6cK5wF8vvBJxv5sEGAZMeLFHrqr6dFJ9qNwxtPBBoHu4NLptYBBpi8sjc9VkphqJ5a3NuSx2y95",
  "key30": "2bHzvhiSxoyHMeH1wHcmcBWFSs1JDAeiFSkiBzfHwNZBAjZfGnJ5bDEiBYAXKQc5L8CpDc4ndxJkyTr1MrD6oou1",
  "key31": "58B1t7wfRSC4G2EMtUwCAjmkTp7QT8KtiKc7vEoVKggBN6LAj3XvDrAdtcHMVv24LfGc48sekDkqC5jg1rq7NWXN",
  "key32": "2vDmdtmywJVkrJWCR9th6q5cMcMnyoRu1yYck8WAQLsmug62XJxSqAYoeHpwNfVE2AEC64Nc37VVzKsT4Yh5TqHr"
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
