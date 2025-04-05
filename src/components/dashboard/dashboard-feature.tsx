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
    "5JF77URFbZvXxnLUremJwdB1S9fJCauYUU5j2dvntpEFW3NRmCDTWiCPNKwS1X3eozn9zEr6HL5LEuWc4qEmqjaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpDMub6frWA2iaPnL2aTVtC7xr4YaT4URheaW87iY9MDaNLbGYakKC7X1YGP1dd4fVUtNTUZZD2PbvB73jqchS1",
  "key1": "5LEXfHqXT5q2UDMvaPjFuMpKMmgphxtSwYe9rfYBPiNhirjtAx4QfnAseycimQHkySS3E2vofy9Xw3S4oQVX3mRL",
  "key2": "2G11jzB29zjuTnJ8uF5hT6ceP7UUs9M6VQG9Wzt16fkRPW3XwC48mvXAdkb79jAidBskibVLnnK1DLTLHJAQcZwt",
  "key3": "3ojUfs6e5ZN98ETntVR8cCet7zwRTNNLmy1GsrT8zViJ2HMDqyTN74bi7QqE5Vp8VCE2fy5rsbRd8aBtkH7gW8r9",
  "key4": "5wcMAfpm6SrDTHphtUuVzJgDtdZbaXExgDm98jBrMgoi98GAhMtVWUBz6ATDhPsbUAfQwVJ2uweAuPDMRje5ffUP",
  "key5": "x9tSMgobfnuCSM28wCNuty58BZF3ZyoZ9i411wHaiMW5N4RzWfkx19FMV6Gs16QbczBM8u18L8m1X5mu6MX5u1o",
  "key6": "4CDbZMTwXrwKVUgrxAqZbvxf4BCjAe2Acrp7bHK4GxnWopsZJ4erEGg1JLPvA6PXjrW6MZggeHY8LwuZ8Wd82Doi",
  "key7": "TmsxwkJ2AoX7b6vBEFmsG2FP5kQzFiS2cqXidNAKFmjoffZuvt5hcRAQtby3ouoUy355FKQyhtq6ic91raGutoh",
  "key8": "2jSktvQChWSFfdb9E4xV3kBrm54tzF7gTiSFQa6TTPV92udL6eWSAgdKS8VxLBd8qgRPgn2e1zwGpHvjtvEbdbyi",
  "key9": "45qbjXcPmBYPAQDKe4xdXwUHE4E1ut7tUYv6XYMppEAE2mJ81DcC9e9eN3DAh9c7fJ5DNLrnFc2f7RYs48TBeQua",
  "key10": "56QJsF2GzhqFGrTLLXEpy5GFW9vDbuaPLwnW5inLRtTddTfDwvWBzPBWXw5ySkrrK4nijRCPT7LJGqf5uXwhYKAP",
  "key11": "5kZoYBSpgVtcwKHfTwKiVDRHeVgw5AjH8Gj7SWCnPBqx5Td5TLjQdkTea9zfwJ3whvdvkadqpZLKS53R31Jv2gGb",
  "key12": "PAk7tSX7FRVjfs1wbZvegWvGuaVyCH84Lpb7Nhh6qVe6VoSfnmY56wZ2Txtg65DteNKmSE8a8bqxMYKCG1qotsQ",
  "key13": "2uLPBE7pD9rfQxzasE14mt7E37zL1mAK8QFtHBszW7BK9aDnKsakFBTZNmNyD1tu5zrQqG58WMiMmpWtVNyN1DkA",
  "key14": "6294CygxBHK4GULuqpo6mHQ669hoifiz85zHy3UPc88SP2MjJ5jpWq1knyAy9BYasD2nuXTHVqGU124A9G6sqqgs",
  "key15": "4ewUZLQDTgLRPGN28gz78pV1GXFFHfwRqW9MSgmDyo1FZpUpgip2eH8QuL6ZsvEYScWmM1Lwi7Tx8chM2MJTMAwC",
  "key16": "2bGzsvsPHfJtcd4SVtYABX7DdqLfyxs66uxbEWXbqfJz3XocH36ZM2BhytQtb1w1f5UBFCNWpwU5PbTALuyygccP",
  "key17": "56NSshGtDMcqZn3cYf2NBuf12KMNBKWQVTDRcaZn9qgsf1keucVxUk3FiVsmjdgKVc1YffmcAYUvDNB4GFmhqhmo",
  "key18": "4M3q63vHpWL7skBYEvkkcdbUqA1ZfhEELMn1KWaVBDJKFU7xmbBd5EoSbLBKpVndQ7vaJSBrf6rS9ZWtmddsxx63",
  "key19": "5VgbiBwtTkG92DcFyrhYMY44QNq7XUwj4LY8vZD4sssriejNktjHPXPRQkdQejBiNYC3RtPZovXzekW8pfaqV2Hu",
  "key20": "BjWfEa8rL44qJ6CZyv8oVQ6yig5Jf9hfZLdGRZ9MR6WrEFgjqwBUTKgapmCMQTz4BfwCghu2uz77qjmMuwWAvNv",
  "key21": "3xySEUom5VE8B1WrdmxnnQyhLv1EVo2M7os8wKvSKf419YuHFbsjewP4rsqcxSXVjq5H1HK5JG3iFRgiKmgrhnxc",
  "key22": "AiFzeQoZfwu5F87bh3jguHMGV11xmXBpVi9h9U9xKbWfpJ18iQ6fAJ5PnyncTehFgUrojsRu74Z5AGX3HjZh63M",
  "key23": "2rbf28nUJkfa8iu1mN1p8sYPs4wHkYuQPmp7Xg4LhwVznXnHV8yQ2vRV4AspnUNKDXm2cNsqjohz8uq3bq3aRCNF",
  "key24": "5vMGTd6VnbL4M9jvGES5WcxM9ZHuY9yZGajG8doH9K9fELcadQieEimjoG6F1WE9j45MmRtf1WCC2UQfnxbsHeU7",
  "key25": "wgMnATa3u7c6f9gvDnQEsFpUARSswX2szRRKXmwEYZyb1HkK6kc5xK8voQDBahJjDfFXAiTEkU3q1haL6U4Pgzv",
  "key26": "3W6PFXrQFmLaoCpQrsB5WAFV8Zc6YcTWC69e6aeE6sfU3wDrfD2wMVU9nhtETeCRZ3LqawwXu3w9X2ivBrXH73zM",
  "key27": "TTK7EQUxDVPHt3iSsShufc1HemtSgwBZxnpKGDTwnkZThMvozBvzEj9QBeRnPK35dJNZK9gCcRQkevhLZPBjVGV",
  "key28": "2TrcQ1PrY8fuD6VV355mgkotnrGMmKBCuxxKfze6PXyT6qeorNBg7HYPz41fDqwhe1ZsozkeigxKPtg7HTreHg95",
  "key29": "52o1dDo6naM1zTa7U7QHWF2Rmn58D1rUajVV3YavDb5rbwbN8KJGZz5Tq62pAPWhk9utaFjcfjiLpQtZ1pPGHNgU",
  "key30": "XFFzWoSkRLqP2DRW7o43Az6C75PnshUGPkd3h4ohTt3CmR9CctkmLuRY8HFg4WgXLLNUAUpvShq8th563KcBvbW",
  "key31": "46HhLKVSghzFSKaGMJrxuC9tqV55aUoCstcEuh4mC4E5JvGt9wC7wgPSbXZz8ASjKVYLnVFCGFsYxkW1wdvM1fzf"
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
