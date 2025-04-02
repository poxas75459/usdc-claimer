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
    "2dTcGST6EFzzc4KRFZcZMHK6EQ2yTecQMd21c3mzKxwrx4yYtCJmXM8mcxE9h37LQXSddyg54no6BebNMUDgZnxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jF8nHffeRXUDGCfWWjZ8ri8kryvhfgndi5ENjFgw2p482ZXQTjDjmx4fKPsR8YpnZ1ze5xM5JVMGvDFQrhkvkd9",
  "key1": "3otJ36qwehbBczdee8cuExrx3WUkhuUh3MgxWybxsqs6DNCg28dDGAH7bEhV8VjbQBTVVHSCQ3MetMFLmndaLHVT",
  "key2": "2cy8DfaRHJ8yqrA5nBe7fYw5HCnuXZ5MXkKHSALJTfxyjXXC7ha32w1HpjbPNSunpCcC4kitwCGrWERQxxPd2dK4",
  "key3": "5j3e3UFDqnMRqJsoZ6JaW41o199TREo88JBLba4A7s6Y1baS65bmxTTjT6SP62Y1Hju5otQv7NAgFG6GQHJdBxfA",
  "key4": "52rmXxGvEvJEz4TpNGDjCxsnLtFgJPzfGvutEGxBwcxhUqVq13GqpDUDovWXVPHxwJgBfgw6aKhWQfbFouxnRQTp",
  "key5": "4FpJyqWobYQhMTnBiWSM8hTFPT37spVyWezhtTFmkJmfuigbwNXG2sYZauSpYn1Qg2w67a3vcL2fEbxt6mtcXRRS",
  "key6": "4ayq1gWhnPDZV5y6s71Hihcohg5ApvAbYtKVdigyMCEyWcZ5CRfaCHzKjYMnL233SWYxuNYLEPMaACwhvbp2Hg12",
  "key7": "4RVABdNMWZWJRmPDVXm6bJUU4EvJwScBRGgKNjUq7BFE7qwSoacNeRWB39BMFMBJP1vwXKQf3wMQFJzvUGHt8en3",
  "key8": "42fMMjfDhu4NPSHPc6NLxdQVMgoupKFV7zpkAU4kCm6bFf77CiTQMv88TDHLg5nBeZGB7eZfkjfHCk1AifFpnDoC",
  "key9": "2Hk2ARvCVi5r5b7bVq45aqFpMGqFv1e2T5f8E2abtdXZ1nng32PgcG4fb2sdT7VzsU2FJLVx9okFwzWtYjcSVs9K",
  "key10": "3Y7AEDycNnRXgNP3LLa1pB1118Jw2HoWQhaDUDQmvs9omYRZ3Rny13twV5yWQ3bkMyRg8MxX27TmqPtqxfSojYUy",
  "key11": "2mH5CmnapfV2jDcej5yCtuX8vbi8g5qeEyZW2jQr8QiUKTJiTdcvXp37qes4ExidzSXNLfjBWDwmNQjEjDLuNDsF",
  "key12": "3GFkvYXYKr64BhHJPcVMYxxXajcdWUT5xKbJckbWkHXdMRVtbmEMhpwjTwA5vWJwrMkrQo3Zytcp6hSopSGawSmb",
  "key13": "RgwufJgvHyvHFBJKHCQEjrc7kyD4KQERmWuipF727eakYVvamyoUeN6DKbcejdTn6uwJt6XLeV8BNzYZyZjBZsF",
  "key14": "ARfFbXUnPiS7Lh2KgG7NHiASVY8Yp2GLu7WJhQyrXNxqKh6PutoP5d5sExAda6wqVRCTchHaHPYvKxD8Sj8jK2M",
  "key15": "2e6GvmbTRx2TctLLmt5ksRGcy55YRLG6ENMGHxyokLPjHW8knajnCrUpsR1ZKzqPmVrss3BKNPABSH1g2nS4esfY",
  "key16": "3we7dpJQFBMmgvikB9Aej2AA9pTyUxa8WErEqszr9HkqbTtS3QgBo5zM9AJd1EqcqNyCLnV8mpssYKWhPSBrbjfo",
  "key17": "8qbUcoCZmejgJe96WuDbYnKS8NFuxP66HdJwZrkFjjo9WCHr77Gz5YNr29EmUcCHUnpsmWkPNpNJLxj4AmsbzJ6",
  "key18": "619HYEPkwRFuDstGEE32ypo4vunyL85PJhukRBWZeXMMoeyd6dWxJ4G4973cYNoKunvMMCqix2hKKEemWnpt4SdA",
  "key19": "2XsgkhWve85x5RAQw77W8gWaHxrfknNFs1o2QoVyMpfjwKfKecDfKN5Xau4xomjh8onJcP4KJD7z2pcEveyi4jxg",
  "key20": "2dbkPdhcJpPdxWTfJm21mtBbEwMDLsgULbzXNGTPr9ZqdgEapcLbxZr89s4Ki8atf7JMeqiaF4xC27mM4uzH5T8f",
  "key21": "2oRTFSGY1zAfGFBQTiboo9b5A9TaVbVm4xtjS7N6TLdRy2Q7Xc8qabiqFWbFDDLvPjNv5bJQHQQA3Akabxb5ctw5",
  "key22": "3veJ8RXFTTePDXGAU5gLkUpsVdSPEaruFnaGjsrzDNYpVexyVRTZpaeESgj5tLoasVd4929aeQ6RrDeesCrLtWy2",
  "key23": "3itpkTirfNqJhTbbXDVEQvzCpK7uLaTo2hWAPoSEt647HuWtfjBw6FgB3RErsfK9dUW9S4QvzdDcT3DsdKrizwMK",
  "key24": "4Zrm5HSj83sNjWrPuy7vKatxa1hXS1Q6kgArCaVGpkupmTjMpXygeWuoUvswvnQPsinD9XRhj7okpYYHwev4SDmv",
  "key25": "4GHT7FuXT7x7FLcuGP6NPdjUKVTpR3rUzDwVnJ2dn4BH3KfhX2m5FoMDgsgMfmRzE2es1tsoy6RWAbgCgKNgRShx",
  "key26": "2TjTRcPCMFRU3hbUck54rBHVXAbuYMnaDTep7LqALZmYcz38ApiU2vATYC9o2eRst33o2zyoVz3v4JqWYpQ28ScT",
  "key27": "5cjMLLBPNRSpf5VTpUuC46Hdi2x3TaceDA1CmTwemjKf9yrxtvkhjrScCQKXfaZfTWQftPrLpLWqyvpDzLKmmRkC",
  "key28": "66fdJpAjaLMMbN9PDwAfJe84rWXkRHGuL6bksFMND7J9XCzRvscVYLhXo12ot99o928tviUAptREoRMuenvAuC2f",
  "key29": "3im3U9UXqt2fgG3xcCRF2uJhzbjT1HEqXXM3NxcUvNvHan2sSmdCZoN1GVrB93hapfFMeqoXCXA3S9ZbhuVaZDNS",
  "key30": "64zGQamivUK9yYQdXLYPJ3MKrDFSH2o58sDxSFzyeyUt5Vdk2CN5rkaENA76Kf2AMkFFoTpYvKvXrMHVhpq52yWK",
  "key31": "5ym6r16aDRRVjcEmij83b2hwgVhX4ZkEXgmTHTU7T7hs7Sbcki5pCYmCsGRGyfF5oWLXDWGVqWtAqaAfrbL6W8wq",
  "key32": "5gdVskDTBppL9rykwUooVSE85HUPpS3FtFmtp2w1fn4F4PB6FKzfonMk9V51uGxoNG5FmAtqLK3jzfrK4CFCKPdK",
  "key33": "52W3qdiezRdf1HN7VhULLrXJYYin7pVfVgBBKo3hkN1DC5ysFAzWc9DihV21Q57yiFHuwLJW2FUB43ZVZW2RnMTn",
  "key34": "JsXTjbBFfF6V3qVRKeWXAPydc6YHYrkz36bNtkUGAJ1Wi5KWpgyv2AyWNYpRvsBf1P6pWv63qJ1GcC41V1qYDoA",
  "key35": "5ZVRnSzXqaGxgbhB7EqypcRDzsjXjGiQqBXwWHoJ1rbwcKuGS2ByheHiKeU1dyw582fDH2wCzrMuDNweEBHPRj2J",
  "key36": "Jdsa1RPNRPJcKGSRCe3g5qKfK74Upwics4HxhzjoUNqPTnm8yi9vET1A7E1rBP2JSqAwP8A8BehXfX8AfktCz2G",
  "key37": "BkG22oHYrrmNoaUN26BcwNSnDydpLwzJqJXupYLpSgB8hxhWi9TQiHepMRefZGUxKpuUNtVohaaMFyp67KauiiF"
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
