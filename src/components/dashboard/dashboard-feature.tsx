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
    "2etXxSi4iwPhZuGaiTfgtpky48vff2nGCrTuE5GKoiLP8WW1n1aDU1h2xMkgopvYeuQnxozwaKzPKvd1JpSBtyg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vyd7kfeKNjYQxerk7U4Shn7NcH3SckVHEdCxNhGom3PDi8qApuAqdxHNYAYBQsU6T64zBX4rMvFJXVGJByGSpqR",
  "key1": "3bL3yaJyWmcnCMCZheXPCfbz33qBT8MhzRywFYYmqTnvkaFmkdExbwcLB9afFYH8LCWYQdRGJvVhJxvFrHwaeMSe",
  "key2": "3cXYTXq23zpKqokpXAzF5y8NmSch4h1sAoKgWrV2H199P65wFbpByMthRqv8KwrvcxwGVU8YxdNkM5hEex5ADBKf",
  "key3": "wBPP1uvEN67ujJsXd3AUjcBG2mzyPXsFuphwE8FdpcghJaYj4cKu2srjVq1zQ36hzRhAjffyJsVLJtWpiaJr5fL",
  "key4": "67GLAofeMBMVnq9oaRZm1dHfuPmZi8FaEgjdm7MDqjsRsLV81LaUkGydYqcrcp8zsf69QXVN282Mb2tXmQNTtMu1",
  "key5": "kdRhbMZTSK14yYnhZYiTbZ8fRTHLA2JpN5bC3MSzSavYLEmdsRPfARJs59ojeryaNeb4U9QdmZd1PGNFKmdkW46",
  "key6": "5Jh2f3DpbEBa9RdamyyUUbNBStMx9XWaPRtaTBRRFCcm7jahp7oT6D8bMH1Tjb99weHAkbdmpxUsZuzJnJArKNkz",
  "key7": "3TVnBNYewvCs6dheJE5HSkDToVE4kRmbd9nQZb2TbqNVRBS3ryZ4ftJif3vdHvJ7sZ4dnc1pTJABAemkRzFozPcD",
  "key8": "2UngWeLrZaenrfQ9zGeK2DqzpjGYY2GdWt8fMyqudmuix3kdjZrrHMFubRTJfsWJqM81RR4Q8f5J5pYAnUJMfzNT",
  "key9": "54pyyrp2gLswqGFre8iZW5GbnuSDqjNmLp3aDxA7FGC1C5irSbyTR4HeYepSLZGdU4w1ZmJoNQRZVA76kjTyFqu4",
  "key10": "4GEVqv3ZERMQmr8SgjpXgXPevW98cxfbefYcJtxU1cYAUaz2AGRTf8caJcQqdrz6Putza4Dn2z7BMsYpHVr7mDnf",
  "key11": "4YCoVHXXpmkdn8SFVnpwXd2JCyjZd7afeAGsda4NNbZAnaKH2f2H5HrBSf5fwwiexayhrwh36EsR9KHEs8q7hheX",
  "key12": "3KnKSVEjkthPLnMJvnfq9Q3wfdtWkBzguCZjes46casbZb4jFsR7asPJgvtgobkLpSReWNTszF4t5Ezv99tGc8Mc",
  "key13": "3FKpPRuArQPACsQyBWoymrKkdJXdZmz3qS238p3oJjyerBvArb8BMPBknJEPf8MgzejMYAok5vgnC81enjFhZ1na",
  "key14": "4CSFFABygF3NQ5YJEPgZjqbNF14hkUY4ML9sXkNHPecp7kZW4SifSJx8Mb1oqpxqbt9STbGdnrz4DbbTcHLU9yLQ",
  "key15": "46SHyBL3oj14ojEzP6Ciz5kf62Qtgg51wCBQmwBxdS1ohTSmYdFtPvjf8zNm2W4qjzBwDigE8YRdvH38NZ6CAxai",
  "key16": "Bt9VRZ4KuJaNRcXEThZGChWmEP2izd1QUJGQvAhQK7hStWC6HEj7aobUDFaGJYdN4JS6wh8ykiRjUq7yYjzvbVF",
  "key17": "35Kw7ef9EgMHw5uXR6YQWMFCkmmU8Ufq6oeFN2gEjBLgeDChPJ5ebgYx5efzXSrV3fyu1GKkAsRymNYXZ88mawGA",
  "key18": "4SSD9T3CzS9G5xBmNf3v55xX7QXhEXNciFxvqPmEuWgLRkzqf5yfEfWLjpPwCFj6UmZciPx4RuU8Hx6mMwJsuMnR",
  "key19": "3XBsBPLFT9CixVpfFYJXssCcsqTGmNAp5SxjC7Yfyr5xsokDhgpd8Ejd58BSHBZXoXhiQE18KmQb8BABcggj8287",
  "key20": "4dYnoQ62NY9BP7oEGoha2b4JJSbfyczaBQQucgXDhwmqTCQogLtJRsPuPTyGaoSHRBU95TxBhAupoJz73LEizydb",
  "key21": "5pfbETSd7s7jg6X9k7Fa8udLR66jGL7j1MAdEP1JiJYaLH2wwdAWAJFhSoufBP94vBs7wuAv5UMHLhroXiPHwz71",
  "key22": "vnPcgAWkmADhnX9frxk52TZxssMstwpexEaSTzr58FU9o6BgTNZJHiHPaUH9XT5vfUqtbbVvyGyA5k7hQvYKHmL",
  "key23": "NiwUrjpPdsTRDcNAANhqsdxvzSGVhthVharJWAtNoTb238No1wq4GLwLxD6iMiFDuiH8gww4CVV5u72i84nxd13",
  "key24": "2H3x9reTW1V8RUuRXVKh6FV5PqEFcdz2TTe1ndix3cPBMsjQPXy3dKx8hMnmyvmHX12XLMqJv5X4na7abyKYZuYs",
  "key25": "35H1rLzCDFq4oye3kr2cRrNWeHyjpC3WBLy3nuBBGPEuq9ccLsGuZozvsAuu9ZW7PXG6i2uPu2bhFQHdSwXRgVjf",
  "key26": "3yetEqH89GomfGSTk5rCy31gsBaMHxHAEKkbbVd6VSSAJkzbT7z9CyjhxYWHxCn4nGKF2U5NwMrPdEX5gRs7HMyB",
  "key27": "5YHbWdE4qJZkk4hBVnAyxBPPbcXfiHY9pwbvhVA8vrbve7Sb1Jp8LZeuJtWdhabgbv4uAiTNHnwZxeNnLjV1qqJQ",
  "key28": "53WZcXXKbvzcqZYQN3NzikhRVEJrnvM3MSCoWEmr4VmehH8T89q1UGvaiPVaCFdpskUAywH8dZaMQk7pEaMXGdrs",
  "key29": "1mfMhbk8n8q9VF9fL51PiHFroiMdAYXwsFDYiYvuhmgDaxSoQWuWKjkmStZ8fN3bmm7ZZ1AN8nGu68oSBa1YTTQ",
  "key30": "4dqEKk111SuTgBwxURsHUyhTVQbYM2vndXvuwJFD3KmpHj4z953W4op2pzMpKUExqz4VVVW3cscLcPnNxFbnyicy",
  "key31": "5s8K9iWfWVBc9u9ovBmkSDRRpZAg1nH3SLvBhMGHNP92xSCnGfc1rWPdbi9zaPy5bq9yXL4v23EcFukwnshALsfn",
  "key32": "63HssvDH27QvUyG27UZK5aTP7CwaCnErWLwx68D87sDkowysLdWFSyTgujCQJDMCugSpYUrm1syhQZNySHn31gmh",
  "key33": "cPCgvBUv3TzdWNgYZPXTjY6jr4yXNvf9vkg8gREbDja4ZDH5Snto36eYetsTcaaMahzpwu4eMvUqaA4piRqsQZa"
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
