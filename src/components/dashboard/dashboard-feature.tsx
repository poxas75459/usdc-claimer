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
    "37Qg6noZ8ZUWr2PkcwGRap7HuLnDXSzobMfbUTVAqCQZJwrgwGqRTi5yYMKgwgbwYsDzAvzcgHS4JiJf29YdmzJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phPPeZuGetPPgHc87wsx5gXz7fZ2pERudZwyJ7qjmjbJ7SUqf5ANguiQTsXyNBkrXnHkBqyNy5wCnbWKYepyRA1",
  "key1": "5zbzLkKYAiEQEsjhNPYiZgoMiFBat4zoQnGQvykUeb2fibPmdLLLrjcYrP5J38Q7boPfr2MKuGR5qRJJ6isD5qxb",
  "key2": "5bfWsnQK6osZHu1K9U3AovwMhwMczD3GTcA7SkHqEmtzt7zGTWuEuiEiVtB8f1LkdT1ML4peQf6SQUtBUsgD7BAh",
  "key3": "2if6982wdgekTLrvZ3fpuvYPcS1hBHRitx6Hw8Nebs4EEjogYH6bHW3qcrkpkH1Yao7PsRSQeedSQqzAKUftcH3Y",
  "key4": "4ga8xiAyiNqfBo8T2DTFf1TZA6hJQVduKZcp6NTJkYTHNTvSY1dpaiz4arD4eSwG6718wUpcuuqgwA3BEEmbPr1g",
  "key5": "288SPwwQzXdxZ78k1Ekpzr52Kadi972AMFRQ3CuVWibTD1RoSAnjw3fkzdDXrDnu7bu5d2nYHfvGoiPsxee5Z8tn",
  "key6": "5Dk95kL2BPVVHDpvyHepmVfXMne6zTh73av3QbXb7RDkkRHcnxty4QKr45d5LGUZBcH5Ti4Km7svfrSoAruj2KtS",
  "key7": "vmKdLC3npA6KJrDtciL4gwuHSz9HMKm9QN2vsX6Z4HAQoi4PhgtRHD3yEftorctMb6kcKaeygVYq7cjsZpvArfv",
  "key8": "31fZB5so3DfBThRiANVNiXJo1qPoYciq1Gp1ShHfVmGrGmFZDckdpiWkHN3qqesduDMRVAMzT63tgddNojHzum8b",
  "key9": "5F6d6yNS3EfYcCNHTPaGoCSCmTZR4bnWSdmC7dWak1qYGv9LoDsRpriY3E27BJDrNDnKrAJTswZBF5cMnGGYHphA",
  "key10": "5ceCyyFQeXZq1o21QQACHYGJKXHwwQy1MZqeK8KaNvsCseQpgDgVJdU6gvrCVRa73Jm3KdTZv5jA77zAwmM9yLTL",
  "key11": "3uwurBhSzGvUBQZZugAX1jhyhtFYGNszRpEnj6sAzxobAx5n9ErRnDRuc7v3xkxBAqNyYevJgTttBMvFrLcWTi5W",
  "key12": "4HXLbMDwg4TFXDChDooizJXNnwHAhBmDYiXej3n6jKMtCUqua9TFFAoewNrbAFzrxSnNf2FrBcxURB2yJXx7zS1t",
  "key13": "e4uRz5mYrHwPrD3KK86yk8e8fiUXXcoigY77P3yjmu4CScsgAtASxfxnBtxWXkLapFVfeiQaRNNZKpNqr4JgSdm",
  "key14": "5Q2XW5AgTFdQ6k1qecLxQGJZ8YvyxtP3C5ff89mHNy1Luv9xkcBtr1qFBieXNiECkdTWFXm7YLoottb5ienTYyBb",
  "key15": "4XWqNPqhrJ47TVCVKqbLBchdSGCV6jTSWikqqvPL4JYRrou7r412ZmbQBGwFLguMBX1S29pnLpDn5NyXS22woydt",
  "key16": "41ZhsvnNKvCFg118RQRmGbdCGnVgMmPF2CjrET13YKx9HpckEGeCN34BfMeSQomMmF5Aico5Bxti4P5KARciC4rw",
  "key17": "2GPJEVNq1mx9SjLL8K4YxtWDNCzc3pDx6hPfM93K11ibmfVoZwyqnXCtWosezN2icH7AUStbr4tgarnNEaqsp8Rw",
  "key18": "pmV7Bwz3LvmuGNrpPmZZbmorj7eACQzDwBqyA21tyjeXGVX68AEbR9FH7GnNq4mJRR2mTx38mCvheZYAvZf253F",
  "key19": "2Ky6pnw4WFk2mrwKAnpgF8whzo87rLs6XN2RxYdU3DaPcGsZZrh4aYXjVq3N5kfuWFC7sDP2zhg6H4sM4tdnXz8U",
  "key20": "4Dk3wdiwo4x12osUmmWiLVarTUxWfkLaALuunb3iEqEDwhxPEmoTKYGQTXo1iMQS5zzjWSVsC6WiVPJdHNG5ZpM4",
  "key21": "suy2zgJe8TBFD4UsG5exVzXEtUGWFZFXYSQbKDPYYQ7HXpQtuVaf3iqLUjoP93KY1VJtLtdm2qWxMahLBSyofCU",
  "key22": "28g7htpL4sCPN2YAXb7DoQe24TE3Btjr36B1i5dZDd5QKaKupNwLg5dSB4tVPV5oHRQq5R6HfyD2YCVvSKn6rjAd",
  "key23": "4V1ZB9NFq7LHMnoTVyX9gdw3tBAgiHFq5SiE7us7J4Kf4HsxVzYkjUXKzXg3hGAnyhBV2zVC8FUdtES3xjQnwC8M",
  "key24": "8Qxw2wpDge89w6uaqrJwGWk4bi73Ybx69DTv6MGuKp85KqsgSKGb2xFndwigjHJdVfWK7rANSM5Us2NGJtsv5Cv",
  "key25": "34FPDRNAVE8HAg4HGT4j65wCWVzH1VcW2rFpmCfagaftdSkyu4UZTvPKaa1RR12Xh1tXP6pLJfycWXCkrTh2SrTz",
  "key26": "SBTdjiYTd3tyBL8p1kWbN4T6sdhPBJodt6UA3ZHn8nxGg9YBQhDHsHHLuEP5Byvgmok1AtWWmmm5CVFgTEtRgH2",
  "key27": "2onEEo7YR8Rdfc9zJCVSTd86rt1zEHSBu6GjZ61n5G4jMVRbpNfYQut6cRt33Ci6rV2NHzCEvkCjdJXFfn8hvKqX",
  "key28": "5KTL48CE1igMy8n2SP958PmMXY5ZjM2xQyefUt2Qbv6ZniKzU3b4KDP7FDoSF7tm5RjZFEEQqiiyCptatdaBZus5",
  "key29": "4rqUyeK1qYKopcGQFrum5nGodbUH3cWn37ynqZK3uz4Fe75WN1zV6oN9s46nVSMaTZYZ6QrgBjaQvoWLQtf6GFsc",
  "key30": "4uFZfyVyLCBPcUpa81pbJ5GDoW9QEw89CTQSrQccc58umExEyqsy9xh7Ur9jqRBw2PMqiCcXPMEFXioYHbUeC2ib",
  "key31": "4yantuvSnYKmippTz7c5a1Mx9wJnBYf9kxaQGBcfqSAeGKQd3fxxLRbMa73iTCn8TMdvyrstUuTryiT6X7P4VbRM"
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
