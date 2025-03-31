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
    "4VBgahbAkMZmsC8xfkP6wTh1Lo8cM1vdYmMTciXcLsS59UDjnsNWfLZ9ZzVDTuo9Kqoxat6G9stSxMHhV4ZRXEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NkhyZFoS7NejqtLsRCJNyZEtgMZfyUE6BBxr7DbQyVHMJqvm7abtca71F5useWmmpP9bimhYDbkttEN25iqJjpG",
  "key1": "53ne6kfeAuJYQmtQHwFBBiz1jkVrrLPnhE7bbhe37QsvRaF8nLTHKhTF6kTyAqwRpEknWgZR6K5MJtrU1WCLGDA4",
  "key2": "65j7o9QdGWExM9TpJc1SiCExirVx343tj8zkrheNQ8waZX5AdxaWqayDaNEdirW8UNcPG1DLyNT7fAPNo7fKN2sT",
  "key3": "2YKtgA2FAsySfv6a9uD9yNL1yzkCpiW35W2u3h5rtQGy8hmqP2WCmaQcAY6QgniLfm7chFPB3caJ8yHm9a5gSx7j",
  "key4": "3LnDwwCGgoDvziUcoXTJunwPSkycXNv2fyGYSafEX4ScufMbHWfUvmbVfDTYp7sCnNLXNLWkJ121a9LrmMpaRHw3",
  "key5": "5s9B4YEDt54MVKaqqSdZ5ef1dZkGZudKfXVcF5x8EBNKdiaetGaWsxSEW1mg2CjhpqGYiUva9cq61GhAsP4w2kKA",
  "key6": "66c9UTAAS5gQNLcyzCvc8na86c8BddzVCP81xZev7cCkFYAohhjNmEUrR7BAsJpC1P4H7ffH9JW6gfjTwbbQ67uS",
  "key7": "5o4PgEDNBd6hnMJJnRVdSGQjBwqCVsCUzpGKBxXUJpdhpufJ2kBgqPD5RTZDQ4Gtac7ZS3e9GPD4Z1vTWBpntAaC",
  "key8": "42siDSF7hJQ5452H9WTKj6tervmjesURmoqmsosAKZNqicHwkRM9zQPrtdxGfUehd8A2MEKBC3oGufx95m8zZ4zA",
  "key9": "3TxDxLwDJrwqeb75HCPCYwnYyhzEpQJcN5oRKHRWBX3T7vadKfh1fL6gXNT5njkHL8ZkfYyjAbxq4t7GeH5DscRw",
  "key10": "2BLmmbK2wXte3JpxVRNGnJG1NahsmJ8WqpyBsqgmsB4gJ3gg7893mt5ssa3NVSm3gTwKr9j2BKXfu7j5udS5gshx",
  "key11": "4zS8sBqZmRGWVUJdnUNk4EhARxsPrmv3zWAzjEb668uprghZGk2YqKdmN29PEvT7U4JbjydbZamUM6Qc6mhtKUMN",
  "key12": "BPNv6tmV2BgPJ8Y6EScUkdbU7Qty8Zgj3vLeo48FgwasfSeNbWHQKE6Q4evGbyppLzHH5HQHkDnLg37G99WMWFT",
  "key13": "DjUEkMXZ5knnnBgWKCXSWHSqhE1BDjuScKJCnwgxGfabUGwZ3FM3MM6gxnXbms2dMdPde47WGD3xiF6eXq1DQKK",
  "key14": "5otyquKswAxS2XvejRctjhWBqaqph6Za2mhYRrFkQGhNcD9xATHwx8uSpQ8j9Kw3g9a1AhThosxch7rNuoNzUUQ8",
  "key15": "3R96kxJdmBEMXTH8MoWGQNbBzzRR7PY1iyf21DLTaPuEEkB3unMbB5VRmn2M3yc2v1bSkSnAcHUmBAzFeneBFpAD",
  "key16": "3t83PRbx2UrNxgZxVW5NMmezFAddTwyFDWWZmRPTCsLg32FvCUBLe5qci1ohsBFQ5za7d5SFxgoZaDANCjyPU7bE",
  "key17": "44964w3mmstCnKt64iHa7MBkdPukwWgwNygwkdoYHfz1paKFJ8ve3WYfGmgJ7tarBcwNEVCidvdUnDvzMUq8Sj62",
  "key18": "2VGTazptCnLt2bkd8a1nz4SSpcjQggKMVPGb3Se7QQ4d93oqhXDJ5nMqmiBkpUdaL3RbRSJNUuT4S1fKBTGkdhHV",
  "key19": "2V8JfiST3XyHQC817DsUJvesszjpxJXnDa83ZLgxWe2DHkCPsatjVEKF5trQrhjRij3KmYVY8oENtLHR31AebVXf",
  "key20": "nirKWYjpYyBDAiTEo4PPL89EmL5WYGt7b2zmoMsrcR95ybJmQ4BCeuMFudRkWimV66CZRWd8Hdt4CmBhtep2u38",
  "key21": "295JCHSJAbDur6fSro4S4QAHbjD7r1pf4WAtZyBRKWPB8DRueoYgVns4aJpZTJ9KFKzCG7AS6Y8pmVJpUwVo36ZX",
  "key22": "2pmZEva8n4EerQY5js9QNm8J12DcewYoBkEqN9AH2HGMKVpnNQp6VSt7aR9mPNqgjQAxK24bM94bxypto5FrADyA",
  "key23": "5uSgeAnLQaEUnRru4nwz5B4y1Ghe3RbJZfrh6ngco8xqk5YAxzyRtNMCea5SRcUQ1fND2seTRAq33u2Wnkbz2frY",
  "key24": "3RDgUYcjYaHrb4EHZuKEKBcDzrk5XFuKoiGoBy5Hbzxp79fEJ7bXXmC32usF8NnrGULyESfoF7LgLZBSCeXcdR38",
  "key25": "51mqjwgsW8fGBXfszJuJ1PTCepGGe9KovikdX2iLPKX5EUReqQsiLS2MnWa79dAN5UTdg32AEMJ2F6wtddkNok9W",
  "key26": "2pgBHxh1z27uS2TFeZwXg7QXWmSeNnRzhuE8SdvS5riGmTWPytA45pUEtDwJUSK25ct1nu2MEr8mvo8iXtBxdki8",
  "key27": "54DfCyxFNndyQmWwfudFBLpwWqWMa8C9kh5rDp1JZbmMaAF9SmwHHqfmL49eWuRW8nxrBgNwafu85pR2PcTnuo8g",
  "key28": "nFFMWfjeTvM1DfDosWkNXBMWvEFL5uNeXyKqU3QPuWUQwqqREj54hqPawR4q8vAbzK5iovdvpL1SiEJ3Q1ywHvt",
  "key29": "2VgZZkDwYymuqPSB4Z2neKg9EEAGqvDMjhSqYahV4iNUeMTP85RTW5K2dzFjurDfn6APkJtNc6VgMbLQP2FnKq4E",
  "key30": "3QK5tp7chWsMgRKws5Lock5KDNS52Urz1oNJjy4eJMHgcw542jcaAXs9WWuyZaUwQXos2fsp1ffiaMu7bHbeQJ3y",
  "key31": "4nP4Cff5dakvVhsMfKj8b3P48Jd2MDHTEHXk47HSPsyQ9Nsofs3eDfDN4jyqZQsKaerR8iEoCPt9m1fiHoiKvSy4"
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
