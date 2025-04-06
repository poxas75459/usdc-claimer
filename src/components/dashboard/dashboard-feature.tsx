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
    "5EPcKVWvDUYAVTDYCmwF3S2p5CYojnrSTy4BWb5BH8VporsnKKiNJYUrxXZ7saqMydPfHdTMsoAvzvBMDoVZWG7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDBSXWP7NrsNGKrUaiZYKGYDnbVn9P3BAtNTUCAuHr9H8t6ZAs5WAokTc8xs6e9BUSzMi8RMMB4iLGrYgDSXfAg",
  "key1": "4FAyvuHyRR12Qz83RfxNaJMCmLD3BTSHudq9CzVgiB2PbzVqitBNNJXzEJ6p9fsv47kRgeBoCukg1Sc2AUFuykhQ",
  "key2": "2tpN7SxqDoeMSRU8VEVEBc9Zv8vLEk5SJnJVenHWA5cMQW1LgjDhCxDvTwN5YZX86ntDhkEGnim3j4J9QexFuUV6",
  "key3": "4n42Ed3hiKzRQcr4tfxNSYLbjPAqczFCKETCytLYUFq1BNJcYSzGgtGTDCVGoz25P2swwm7FYz9T9sq5QnyqbTtE",
  "key4": "2k4YNtggXEgdhEmnonqbj9KWAWtyXV3vufSxNLYpUvKmtWpta9Nw6NNcs5FR8YFL2JjghdFQuCGqfy3e2zidMFjk",
  "key5": "2nvKXGDh9oJW8ZCiSrjVAnFmXa4b9TTmR81SCY4NV72f3uFE54zFgmxKd5KPegYzjhThcZ7hduoXZsVzdYKuStJL",
  "key6": "5qL1NKJxMGRuapRaJLjuoZKZvHhLaUQJVXv9Zw4DPs9xj7yoTd3tw1gMtyAZFpYZ4LM3dGfnoRPqCCVpbdEs4Lvr",
  "key7": "3dfLLXPi8dMm8n1ER4XinTjAvZdmVmtizmotpPPbf2tXRoTwtEoggMNyv4wfVoT9sjhBmd22zBjkQwVzmWbRuxFc",
  "key8": "62rHgJqCBeyNovAVxy68KoKoWzdnY6rkdWd2ST7xZu7DhnDEfxn7rc1SACtjY3xeKU6XCDg8PVdJ7X9z9vJkiXkf",
  "key9": "3ADeqW2RTwtqYqBCQBws57171kBBGXcCPjh2GLLQftPn7nSeXZ62wQCQQtzW5tSkk2KFgCVNJyyshbsoV7FoqkN2",
  "key10": "4eu8uaRdF6SPPUDBVpv9xgBBDkqkfH1F9jhDyW4CnSN2nQgXSBwrwcLWpgMfESKgbZWd6uP3p1FhCD61UN2axyQm",
  "key11": "9b1pxKu8hG3DyrxHzP9q2LRe94yyQT3aZutEQWrT5HFV9Q4WuUhGdMruBUkCptf68cXJGJJzeif5itqVAiVxdw3",
  "key12": "225KpjuoEk9sbrZR331JDBTEn4QzTnntqZE8Pij3f7XxS5uMKMKJithfLJZ8UuzywsA1CrZiPmru4CQ7JPUw68qt",
  "key13": "5BWvHoDpuNepyHuCRfk2XdktmNtQapXoTU7wCytwmKRSAj6ogy7zA9XRXTTC16GRrkAhNxKxBh8FqAJAUVqS6fHS",
  "key14": "4rGgYw4GphyrY8BmzmwgifpyLRsbBKaffsvuFBPrJ866br8u4hW6xoNwG9UKv9y64xorCJsip8hZbKupup2vaNw6",
  "key15": "5ME8CEdWcdDegpbrR9gF5mogXKnStZQFP5eKMUskyArjEBS1rTheZbufRSirbE9gYmMGiFumN1JCPgQJMmFYKejR",
  "key16": "5Tj3Fj3JHLw6o2npEX6o1sGc9WZfQvbEVtQva8QFGF1RCNp4QrBATK8zbTYtXjhs7i81A47Ca5jA4LrVkt3pTVf9",
  "key17": "ZDLvkhofo34kWAzUnuEQdCNW7zC95bxoxgQ5P67KiYnCFaexxooxC8Lzp11WGgGbvRbmVLafU28BU7xyDTmGppu",
  "key18": "34SBBHCEy4aiRFbhAjpGnvnSq2Dz4SPShx3sYmhg7F37CfoNJ7K6RV9VoTf8KJmKtMYUng3wEhrFEAsNV5mWCG5c",
  "key19": "5n5s1GwBGvBWnoVfCoYYmMzJqN4uaCgJ2YMN3SXECH65zqiLNozT2GZeF9z6BY1JfkbnBJZQu1SJkKc5AyKsci1P",
  "key20": "4X7d1wZt3tsUzijtQXfFiBkLtWJH3sFD3UrGso2ZDyt9Dve2GXydJ9pDzBgBLmP83xtzG6pQWpgd1YPPKfmbxtUZ",
  "key21": "aJZRyRGftgZR4pybe2EU7YAMgEYmtMQ5f97NjEkThXdx6wx6bED7iFtK8kjSPEPWLX9Pi17ETohxCV96p1YqbxU",
  "key22": "RgeAyFmZCJaDSAnxADstxv3YGSBNkKgcSCaMUi8Hc9tvKHVmicCULRudHWGYu8HjjkVGXxVL3BoizN4FC71zBqw",
  "key23": "4aCcV2UiG8sdKSA9qkkG4UMZabU525LEF5ZeKMrpyXNqjeMtqB9H3Q9P1B1Eg3hKJTNUQA5LLR4NDuvEtHxFTPNa",
  "key24": "4HE3j2TKYUJ8Re4sLNGRQNksmvqQbsoQQbukUZrCxRjqVAj4AgP4dTDGuMxa5ZjbEkiSPrTQbkgrTUwNf2FBC2cv",
  "key25": "4JyYM23bNpiV5YXNVUtbta4MybdPusjxBn6adc9HmfZcJnzRzRJWc95fNsfK558iEkRZr27agotxvE39W4NY58Vu",
  "key26": "27EEQ4WgMdeUDs6Tj5u3k7LLZxdqYZNzqpg7fLfL2AEeJ6aJdMVPspxmJ4kgfFJ9Bu34YaVEziG1Z9mjy2ieeYqR",
  "key27": "58cfTzRYRjr5ST6eFPf83dvYmVsWuCiFm715Ucyy8BHQDy69oXApdgHx3BhLjAHopkwfvGqtNkLooPZHVNCPAemX",
  "key28": "5mtvewVgpvDfyXE4sDyiUhCLgodUqunQZCSMke5dKhz5ovr3DGSXBt6hTf67fsm4ms6pUGAes2XHfD48rbdS5i5F",
  "key29": "nqUdxKr3ajopCm3CoYWx7Eo49VNRvagd6ESrHSHcfeXg6JnMg8J1pV8tppKPMwKZhM6NFHrFcwTNFXBnqukdbk9",
  "key30": "3LLwdj7bLmrjwNTzWxrVQHQxUVHMeZ9gksEJ3kZeZVqStMLWfcznS1scQ6dzQTmXsUMenMN3xtpGm5Pj2qXvAUHK"
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
