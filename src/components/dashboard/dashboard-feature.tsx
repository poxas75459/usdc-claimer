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
    "2eghKBCpDk2UkEdCk4Q1wTB8vo2iKWNsTbgTrDN5jASxHurxAf9Q7Ccno3Q4WT63HNUuDTD1hTEwNJZdRZBSX91L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNUCYuPi6goY5XYtnao4tueqCxycaHdFoHyoPkm4Mzbt6MUuaNaChfQT4xjL7fe5PKui8KFAbfeNvLPq28wcBUn",
  "key1": "4NcvbotaESp1EKHebL9QxSbP4Nu9YtgCAcX2hzd5a3hffMS6Fr1D6F4hxLLdbbTp3Cb4gZa5mknkLA35nTsypiDt",
  "key2": "5wzNfJ7of5dPcJ34fxnE9BM1jj6MBaPrKRLdmQSvjj83XDQm3aR9wtCfWEyH8xExXMjFDHoFFvhMWQHSLM9VqdAV",
  "key3": "2FeDQBRK8P7aovfpLEDSdt5dXxfbtnELaQG1PLwCiSVXeE9TFFuRWCZAWWe88KymJwJDHorcxBRvYfoFr8LqE9fe",
  "key4": "4LkJHs8B5j6H7vGDrf5QLYmnSYChxAdF5ewZ53AHEESpL3NWzXvTUDEec4j1vGv6M9rbUDD7iuyJdxaLZDsEsVs1",
  "key5": "5MWjqKkS9bBKQSyckNj8kiDAdNJiXJAJPNxa17Xb8f2GWFG4mAYV5fB8fC3keg4JhBHKLuvZpi1aRigKckmNyEq",
  "key6": "4Xw4PEu2MrAKGKLwEfNjR9vbsxEVvvmoKdXbnVKMpKPAPJ6SqAuTRhogsRBVmqAPbubmMGFNVXLECja2YYp8E5v8",
  "key7": "5zbJtozp1YJvy2zKnoMdxRzfd1cB912ZchRBxcc4opC5i4fC143QrtJksTNMrPqALUW7UYoff28YZu9UoRCFLhJ7",
  "key8": "3t4BG82FLK4h2YdEYf7koLQzMMdRHPhCmyNrBNjgt93BUUStbLrf37v9KCiGuvWPLtMNhm3TCti1EnfxQ1oTcxNy",
  "key9": "4k7NB6uiPkkdWMgxvpXEB549FWfwEgdb9xFsF6SbhSLeMdgS6m5atPB84nfzy5icsFnLpZaAifLAR7R9y9cf5kfB",
  "key10": "2ho15EdLkxHvV7rkmcWsjtALnjS92GnF12MPWgjvsyr4vvDGZ27aGME3ZRGHNdeLkxWe9cTNdZh8gTwv8L7zv22",
  "key11": "2YkFeoPJJQQs68vdM7HwnxnXMdbkctTwkeCSrtTu9TMyTTf1CcTztDAEbAvjUvX4evGQ4ir3Rt28LVEP15CMxesU",
  "key12": "4ykf7DwfjMqVYxTvTuMLFaaSgYR16PMocAoQ8LfGyaCrqWuTPbJTSsYGdsNHPUyT8Qriw1X12CvginCoWKeosT7u",
  "key13": "2ShMQBC6LybSkqHu1cc5Q7pqxEJ4SvQfiuCwMU7uqmJ5LgteDngcBytWaR9vCXjqEw8VXJPpeDBH7zFmWnbpdBij",
  "key14": "TxxZKHQpXz6hWtehNWGiHMB74pnp85tmPfJ73BbZtG8NWQXdswhew9QyVMWXdNQ4utMiikQA3nuTLKCuHg8Atp9",
  "key15": "2JEBRtnTg9yVpWQtHkGVsCatDGQ9NvTvM8h3NWDkrEAoLsxNppfwLXTrRksiYiJaRCQjMe1tMXkj9eefgq1Huw6Z",
  "key16": "3ghu6BGJciXv5ZGueAVtzYR7yoUKBh3qvS3sH8KtzovsFoNfsRnsf7jpsJWSdwSmFjYMGZsiFfYUueQU6C5fRpRQ",
  "key17": "5U8tSM67RXtdbkhNteBeQDhy7Kru7LRvhJgAfRzj9VrZUGprFr3Q7uMjUVBNsr95WmzdTFThHrzx1R4ZQyTMXVsQ",
  "key18": "5s43Wh59yv5oEhQdCGHea1Wmw12U88ME2XQse8nLMhhoDNWPRiW6oxy8SAGJeK68e5hGbCw9RkRs14e1FwAx8v4G",
  "key19": "Jwwwe5eS9kmbiTMChhxeSWs1Nh5LFfR4c4zxpNtuEDeP4R6qS2twByAEqJw3NHwiWNA18dsji5da7r5YYjqWEJm",
  "key20": "655cMej9bk4UVoDtTUCEUKQiER8jHbHrarFir1sCXCSCes2j7FR6ANLFYfSh8idjQ5nr2H988ii75M7t9v1iGGpX",
  "key21": "54Ma2Q5iV3qC6bfatRBqdpXJcFE9JzEwaA2jU86orSXcCWugAVE2yQjPVFkfuqsqxEKwxPJyJpPrB7uzoXA3Av4a",
  "key22": "2H7QtWjTNEuxWasabn4beZZcHhN2TQmoxo43vSu9SM25Q34ugaCkrRsLdzw6DVCeDcARutzbYGezxDi5KRidarNP",
  "key23": "31pzniyYXYCrnE4iYwPH9jZ4yGuA197kqre9DBWKEstkVqh4j3BMxVKtnJkfdTQEjJSxvXQcTb8ccSRMUdQfFxJw",
  "key24": "5HBRjAnxaAh4AGJ9DWTbsH1eQnY6Qq4Z36Ymc6eD7KdPiWS38k1KMjDhj8MHPzUqWU6QDuPKSfyikw4dwX2MC4TV"
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
