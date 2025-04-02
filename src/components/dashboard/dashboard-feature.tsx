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
    "3pwX2ByYuYqBUdKdmEkSyMtctrR6giXo6AGmnEVK8WgaB8RN2E4dAdSVtRdRacz1UB1Uz4N9Fuc623RejcG7fhMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvtcSE9B3yuGpCYpwrfGNpfb2KyJNV9e84Azf1heUv1pPrGFaf9uv7b4DfXsuL1mX2TmEcgWHJfVoytEBaeoPBQ",
  "key1": "tLWfJjMxTz8Zhz9QNhWhtnVWekaAryjtCahnds2qZtCvMCnVoFeobCPLBHfSxcvxtcznYPiMdWMC38zt8gPB6se",
  "key2": "3HFCBQoUNaCWtMKcnYF3z1eniWBW5aebyZX8usMvcFzC9TtKPCDKwmhdaBQMK6nuquJmMDyyRfttKcAwY8WFYjCB",
  "key3": "5En1DALitcSmpBGoGAxf3hh9MWW7cXDJieTJfTJr32fBAdTBouGTaNSbXBf6cSpmMiNB41gNnatdSGdSsS4zg7nr",
  "key4": "8fd4u81vssUVGiNeDik4DPMAb6sZjHYBgBXLHqTUiaDnong2vcmwinnLgGeiXsVC6cpq7e8X57UPC7BhP2nrGMH",
  "key5": "yyrUu4dYNfyW6SDjFH31RJzqHz4FVEpT9y2WtpKMSi5wndLv6MxCmvPkTjGYFcsAY5o9T79qJkYu8LRuZgDWBf2",
  "key6": "2mStv8qkCc9LPjHAxwaJoa9iguNutmL9zech6tmQFQm2SG8qqLuhfzJViMgnBNkdXUWVAgY1yfk1DxJyKccv49mY",
  "key7": "HLGuWsWEmGwBPJGDMQJ7uDydBcfxuYVMZARNgmo3YWxYHVG3BRyMQDQZdHoZ1BWE6RePDZuPpPu4kNi48wEyXSC",
  "key8": "5xfkeWMbLfw96FsnARs4xTakvZZCxGtuCk2njC2eKfD3DTyozdkhroaWGs4R9VsTeQA9zkbeoYNmsP1ZrjdRexyz",
  "key9": "39BAuRP2nadeF3PGdTn2W6mQ5Vp1kH6ddoBojk8dss8NqN5mQrZbtZFPCpRK5JLKwKogcdfQVfkHDNaYLf7VYJVM",
  "key10": "2W6xDBLn1Wr3FH1MKq4yr4uqRgCat7RLY4hnJjLfVXANh1xtv8S8nqttx4DfnVw6NTu3eCEypfG26AYzYQS5TNbS",
  "key11": "2MfGP2L2ja4A9bvyDV93KS6HaEaa82p2nCPWUXSR8Jq98w2xDKRqKd7HrxB599xpoqDu6oTkb5zSZnusZ5SZ4XgK",
  "key12": "2g1WQgCXtwyL6ts5NbMcuq7n3ADLKUHYyUkch5EWYwd5PGfa9MaXpaQLgQGYVprzugF9nSBxZLfsisRCt35m3hai",
  "key13": "4Pi1TDTe8mGuZeBjMtrjznMGL7aA9KW5J2r3D4k6Y2CMvgYLnQx84ebGb2TksNvQmCfjAXAP3XJ767Qg7Cmk3K6p",
  "key14": "9QsQbPmWBNyW2anBA4ZaeDFHKTgy5CvQApSgDSzU7ss17yWgedTcbXBx7GmTNeDRz9F2WHiPwqrK4ohmpovGhJW",
  "key15": "2JDDSixNABfcs9RzYdnjht5Qmcsoa5717owvnE9vPQVEGwVKGnxgHY8yoWuNZBx8pFNR1u8XRZ2bfRfw5nVXda7E",
  "key16": "5V7mAU66a4ZLPXtSgU1CJNzBCo3XzEFW1cFkx3BJAV55Q3hYGAhPSjbFdUQzanwZeTRGLjEH8cFXZ14RkMx9Gr6U",
  "key17": "4F916TFdxQ2sYnsmVdD9vo3CWwVYhzfN9p5riSPsbsMGESqFE8uLMjfNZFdTBPdykeCJNThkc1hnj3AZdaXjiUmA",
  "key18": "JK7bFy4GPxKt6bjqmpAWhzkPXZgaQDR1eb2CADSQVz5PbebdtULqYpxZ1ag1a3rZ5rTFpfftGqpCZzCibnPsWnG",
  "key19": "fVDxd9p87qvgMCBoi9f2tLMgeknR1VnKHCPUfbxXEH1kxJvcDoFx98d8cjJAF5fD5Jwm3VjW7LuEUeizFYe7jWe",
  "key20": "2fsyyTccDVYFNApWgB8wYhwxWAsFJGSjZoQSgYc5sLCV1H4EtJPuAi6MtYvdskpUUs8WQ5EHN1XbVVjpDYBX9Zfq",
  "key21": "4KSo8ffr8T9cpqYiYsm2wCoC5LLJ8SmUp5zNRPqN5qeVFDBh8pYqCCzs9hq4pBuyA57Jr67E4PYgaoGLvwiikCq7",
  "key22": "56FSoKLJdmfht97N8dpCJBtW1NQ9ELG4Q5LoEGHcWrJb9rHprtGZ3JebhAj3NYY9fHBzbPjeFQuPDKAAJksWzMLk",
  "key23": "5K8LCKCx8JwHj1tLuJeTXV756yEdGqmYd2dHdUACE4UprCHXVUCXaJ5eZPvVFFLrFCMYv1yof9zFHfzZmiPZBmNj",
  "key24": "62rbonscEZRXF2ky4MGhsYzKKMt8E1bKCsbjWNm7Ld1jo1uFZD3h4cq5HfKznXRGLQUhcRmaPAqdGjojyeegBJ2T",
  "key25": "Th3X8VsKoiQszGHZUuLVeWijeEACHYYQwM6RXi8JMT9QwhvzPXt6C3FGScs5xCJPQw8zotPuJzNJzvjnANUTttT",
  "key26": "5BWwsAGgHkZgrvh4stZaqBXG356TR7cWfnoUUKyTeexvrFkLmaYkMG27xf91g6SwWVqUEGR5u1k7XrF5Qw1mtstn",
  "key27": "54fvr34zRYCsoJQzcB6Dg1ZQ2MMT3SZ3htSpYxxbLMdbUFyDjTAaAYR2oHU7X6SCRMrr4sqAZQuxfopf77ZN1jxw"
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
