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
    "2FCzssSonMqQhM6SoneD6ZKbxHwzj7dy72J8NQvqFtoSt331Y6yyAr4DKbbSEXAThAJ9vnzkTGMV83bXFh8qMoLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CCepMJh8NNWecv7dXgd7fLC5BkQ3L8DjidrV6meTxr7oYg2RbLLQEbgpXnyKKkEdhEzPsucadN2FMiqRvFCmF51",
  "key1": "5fh4GXo9haX7owuH8iwsoFS5V2HnPJoVuHL1ECDJF6x4CKEfNASfewsHQJKNZC2FwZmTajxGyiPgB9QGDAxoi35g",
  "key2": "3YJNAShb33pgfC4gDwPn3DWdFiCdtybZkNyUwWUKTth1n7tmjZQG9a45qfTyqV2JyrBxBiXRbnZn95FU5yoRREd4",
  "key3": "3HLHTjXquyVCUDL4xAoouA8bq9tfBvtaSKjmZfXZ8egVisyqMPjP1ck7cCx7dGo6NT7icy7gTjeWQzkwuB6TZ7VN",
  "key4": "NTqwaLkvpCpsPZQRMjf1hKKTRD4iFuvdKL91rwEkVfkHRAtHUsFnEdyQaNBFiGaCysEuatg1RCFV1RhU6ALFgyW",
  "key5": "5t62L8v3cvguBAkMCPaQAiXZAVEhSF5tbiYysrZkGzPp6CrPWmcDnzAN6nRu3M5FymjNBTkBT9xHsdmtXSGCiTy",
  "key6": "3EXnHmQzcQt2GMk4PNJedpLGcshfFKj7xF3jXchFTZ3eagrNj8tEQy1HoppTSTcTPsyQLWCHPQf8nUTJzDKzgfep",
  "key7": "CJTYAzhW7NvDAM2AwYyUFsb5FrHNXV3GxvhpaHCnykLQnzLKVRfWhWenkkripWzizoYwmHZFq9c3XMb6e9fkZm4",
  "key8": "4YM6sHc7NDbwVb5sFRXwHkirLkGkevkGse5fJSNes6vvagTViXQYa43pJG8ECG7PnTMsGraSVSJMv1MUzXax125c",
  "key9": "2RWtSgBzvtfFhHhWUELrjQAfQpq7Mq7YtLVecNMASjxD8fuxiMX94uN5K9ZGRrEPx9wbB2WnYzfKpSRNnnmEZccs",
  "key10": "3WhhqRvASo44y2rPS9KwqwJNEFyw54aDvsDZsZTbLoA6HYFkE72Mabv54NB3ncn8f8LuwD6RUSxbnVKZ53zKnzV3",
  "key11": "29Zu19WTSmSzwiEqmg933suipvcT56DTX122uPoRcztrDFcKVs9kjHxHbKGfsgtLaTFsD4ZKPTP1giGxa3SxyhG6",
  "key12": "5ofGo1bhdqHW9dVaFdMtc1Jj27qGkpuvjxLbrRuW4WoZ3ShfP4pRLftTone84EU6aKGF9dNsZDiPAXuXy67HgNFq",
  "key13": "m6WubV7thu6Yr1Z4KPSg2Ug9BKxjJHKLU3CbyrSyFx4wDRU7FvfeDRkFL3q4QUNMYYN2PYUzbAqoEwYEWVQnvPD",
  "key14": "2wdtsVZJYbeXXXgkewhZQi7J8Wdb599zMmvz1UboWCjG42r3A4f1fh3LpuH1WimwZ9u7C3VCfrHRnWw4FJCDyQbQ",
  "key15": "3WEdXKvSp21BpiZwfwFGVrfyRmdBY6sSFG63zqCNN3YXeZN8XmwxzkBn9V1TJw4SMnhTX9s2uTc9BqpgPChow4SZ",
  "key16": "62rEAVCnw1DfSRsk4hikSYWeoV7hGrgW32BWv78h8NPB1gY7gTPWLVKkGZjXfmbkM2FViePzTnpZoMTkqB8fcth6",
  "key17": "4UQv4ntjDKAdrWuA8uZCRp93obRrDiMpn5DxLZpjJhRqS6pdxLDxAvA3osAspjLLJY3zk4YJ41FqY7m3eATr9Huk",
  "key18": "UNCkhiQngmk85q2hzxe2k39n42S73rNKt2nLw47KsMmMJ7DMrFykE4LKjRFTJ2Hy5ioo8BVwtJc4izydibABLTM",
  "key19": "4skX6KBTCgpb4C3nTvhsaYmB5YuX1ke3QeaWy97actqnAJ6n5QrMyePsYTdxb8rBNSXuMrpRQqCo8dbDAXssNzDZ",
  "key20": "sCaatkt3FCrY97L7G1bsbm4rs8ZifRojzsmRSBQK69w2FRNtjFfxW2SQLtPASxyJSVXoffg51vfY5HJhf462iE1",
  "key21": "4AixpgGKd4p78DaosvBDsynkkNnBFM17dZZCkuJk3XEL89tBxm4RiUT5swGHzBgCMq48TnmMRTGeLw59Fwqjkdfe",
  "key22": "dopGKviidSRm3KiYnZgcPoA9rmBsDuw2VESCZUyHBnDWsMgwMDmNAhgsDSJS4Hs5wvyjNRMXNAvUEZ4tayf2Fkq",
  "key23": "55x4bVw2LiXidAvif3PTTeyctuTe7P46ox2EhcmXagDXbxeY14Ssk96PuoARLEvYsyc1qxkKbZMwfuXyi6aPaYEu",
  "key24": "3GxxjRJWxjnHLTxcs9yxDc8Au4rTir3AcVR3ks39BijnmbdsbArjsvR1ixJ6RYqPczptnjNiaMu8tigeu2Zuy8Mq",
  "key25": "3Q1LfG4UhEqamLEGfzUdErVk46PbBxK9WQYqWgYFxRezU7Nk24pouJHSHcgusjZTU8fNdN6tuxxf21DsdeGzDECH",
  "key26": "3tT6qeaPns98cAUtcoKDxsLM3jrmHD91a8GNLs6FTKbiNUTVdKWtgrbJ1161vRk6g34tiWXzBWu2iHwpeQjb4Vj5",
  "key27": "637J5BFPnRRtBFuYe8cLqLbjqgcQkDqP98xLbUzuouxRbzsS4r91aFAK5drAHhHHq3t1BBzTbLwCNgR9PVZ9kDZV",
  "key28": "3NPJ5SXb21HuA98Q4cmmEsKAqiLs6KkVxz7ShqD9yGUDNbfgmjphhiR5G2mGUB8631zbaQY81RPLZsuuMttu8gx6",
  "key29": "3f8KZJQM3PAg2UvhiSjXNSxVQtMjB1XCb1k1HsTXRy1VtZGyuApK8HiumAAPTcj2QoyRUQbZ5AEvDcwgt3kRtmdB",
  "key30": "5BqRNr2RcgZrrjBZc5tov8VWL88edgceqjT2LE9Qf4P4An1BogfRSbNoGdAuYYaMwK173JxDrAWpHHvpknmR2umc",
  "key31": "2uWrUYmq4zwtWuhVExrQYzJ6RJc15BcpteRvQLEjiuAA5a4tjSox67qgSKAV1UmGBA7JLr8sbdwFvwSDJXGYf8UY",
  "key32": "49LdcZaqEZDxJWvckkDPbHZQtdNwofrcY45mZhL3YVezXUMqya2Xa4g9hk3ywJrBdqXyxir8b2zGJB7MMnfjEzuw",
  "key33": "t1JHCuNPEZpvqTyCQEVv2fQLRUCWgdrcSaHzR8r7khxinUXje7AYrnqqKdCwNAZdJ5964CrVHtnTFT3hxQEPhqW",
  "key34": "3hAcJkMw2YT7az3SegPsMA3RiY8VGGhS1tR8EBQuseBeP5wbWha6ZLsEqghiNV9rmpx2aNihjvAZkwP1F9BwRGsY",
  "key35": "1DY7yykxjFvw9GpvRt7irZ7oGRzjQN4YRD5AgMwUEjERbyBbnrJA98eEgNfWnkMQg9k6z8KLRT3ef8y4EHekNKK",
  "key36": "MnmYKXsAwpLYKXECFg2P85bAvoqRAkG2ELQ2DUaEfjBhcN2KkMetRAyDTpsytoWuJfJED9VmAxAdiPEPPin74Kr"
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
