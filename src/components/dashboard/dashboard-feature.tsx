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
    "4Nn6ahz87KtATzfQRCCsCWSPhTsxcUNFVfHaJoK23YbjRdCDGGk3U4CPGDJtYBxcTsKZvdcvyHaBz4qEbNjfu1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efJFuoMtp9iNecPMrDgSgXztgq8JSqhV1JDNwLRjtnxDuXLWzTa3b7R3sYVXKxWUhGYDFa1mjVGJhey9RUPLNu5",
  "key1": "3cvBgS1oszGWuBsj7PNcq8YGrpMhqzFadmnjXWSVLJjpDhLgUkiDyqoz5CKuM9cNSfevu1uxK5kcDsmm4srDGR7e",
  "key2": "BQtRbAw88R9QiyEiWckdhYfaSr5gPpw7hAB3HpmiHZRVy9Ced1JJqUvfBgWNceKXVA2UkJdpYYdf2ymGqgQDrsC",
  "key3": "3ANVYpk3nyg58yuqpx26Smv5JtKkLZmHRnLTA8TUiAzvR1rDBkRZCdSku5oUGXi2MQ2GsBK5VSPAGBmSQTk96WDV",
  "key4": "45BaLg82Q3nQ9KtjE6q4LpNtdccbyh8HY5GNjcpY5f2uEVUZx9527Jz6En55yQBtTeZiVfs3BV3vbWbtdAMRQQ7B",
  "key5": "ZrGXLFDrXk5nkGje57FQRxdxeSvC5cK5DgaKzdVy2e9cjYnEv97jva8vUpmBGq9NCvKL9bxCtKB1nEAYP6gS3CL",
  "key6": "5HBCtKfJqUq2Qsb1hCikhxe9ByJy93z7KcMeW5cyxwNGNynKYMPqNqcWu8Zh93k63e8ktBomnRWffeeaQzjak52S",
  "key7": "5g7pzb94peEwuyziG6TaYkMNW7QFZNRhJDJoeLXENJAbSGP2dehNsQJQgs9hHbS45d8pewq9wbEpGBKqPvC4ndPD",
  "key8": "3TWpExfhDQtdNPj4DPgnEn4ptP2Wv4to9mDaH51DP8knq5gDtm7kJb1h8mJciWS6391Vsu6364iLrsPxdYJjkqo1",
  "key9": "3ymwCGTMqVV7gKjQR2TxPw33cD934sYppEvRjbmzcE9BJNVb1FTwbay6va877UQProLJoymdwtaPoDomVHFajQ16",
  "key10": "2NSBBRUcDxamWEtUfkRkFidxKeqAwuhshHpe5nRbDFSitLBjPCaYohfSEA9QQkypnc6kqAZ31TrA2v1ypFLPF92S",
  "key11": "2vrZ4teGi6jnh49NStCt6X3fL3DPRVVFgdoQVaYzuBAQ1isQtxqYcNvhfAC5y93vLSHPwUAS3WQMbdeBh7rWNFDK",
  "key12": "2z3hTATQDYE14RUpPfjBNyPdvsDHXFaid5tdBf6nCg9m5Y81vTRMi2hVMKjoRzVuwHg3ZAWgBmMaxPS5gfjPEvYJ",
  "key13": "2oNVTM4tCSTazqg9kZ6i7Ds77djuRjR1WDBFt6rGqRFoQPpCvB4tWvL3StM5CJgauJS3TBWmZEAk5S6K1AyrtW8Y",
  "key14": "cY4f9xnuYXnsEUxmYCukkTDPX1AV5aCykDvxGPbmydgJD7gACzwFoyb1843AtXTyMpt2zrNHuQhdL12wLMnSvUw",
  "key15": "ScpHPXCEzLVH4jd878ZLf9vZUmEwwxsSKCNmresRhvXa7CGyZtY4mksNhVbjp7sdA5UggZdB8xhP9JvXYpy169b",
  "key16": "ktUTqSKdKEcuVBFcJYMucdLFLt8VMmRQSvyGbLyRzaZMtCnaSPArfVLRbyHBJbNo4hsSqd6Dr8Rysgt24iAeG4F",
  "key17": "2ehAJgjNcib67a327BfNHFMtuyttiZesEG8zxwb1RTGtU95hPpbzXuuDC4L59WxztDjT1kFPhfffaVzsDBtpQYta",
  "key18": "ZxNUz3s71VvMsUMeUL6qWL8UM1wogTwpt4fRwSeh9QdVbVTvReuss2Rmgatke9e5bjKC1hqA1Q6urMKrxU1SHVr",
  "key19": "3eUZbmC5FJds9xMTZ1ZMkLj6bgMNaqESD5zyNQ9oxXa2oDU2Y7ux5PhWTRhtWeEgTk3sir4hgUB1MdrdKWjxAUUv",
  "key20": "4VBtCWxs2A9LpdkXJ5HcjXPpVwybNewLbJeBiPuJah9bo96q3vXr8zqJYGcGAJu4urh1wL9rvgFApHo5Ye4no4iG",
  "key21": "z3dC7FQ8p7XDuVBXF4MCkB741s2dCDKZSpe4G9QTrYDcxVAZkoAREYgjoG2tQXCJsWQ8bjWKhkMweEoATPCNVnL",
  "key22": "oRayZFaakLV5oaPw375d6aR4WbG2hHWRtTkjgKRsNPh6iXyQQcEC12kkMmUpEjm2YW8kzGKjVKRF8L6fjYfTW91",
  "key23": "48TKLaSWWUio1AwBJEp6Dt1VxK6rWAWhhrCSSbWmoUZ68x9Cnu1W2iRPi4cvAtqDjbsGeixCNaLsG1kXiTNXDG3g",
  "key24": "5oBWixJ1Hujj73844uZ4aWP3hGKhhBAnfXEBDLAkb1rJXecvVTLcSeLJWP8g4kMyvN3B3KQBhp8K79Q1f9cZHcoF"
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
