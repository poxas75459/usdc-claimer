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
    "jEiBMWf3z7XYu7vxNHausahpxY9gyU1N6Ay9p9X3tR16JEUXS6Yeec7DFeGbfegtTymDcmmkRGc5v7NrUwbVMUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2ibBvo2hK86RS3ciRz8SGxzo4Lb7tHMicBFaSW4ac2Vkc8xhJ2Fg7hnuqk3Fe81GGWdsV3kdp4kA6PF5KkdTKZ",
  "key1": "4ebvVKWViL5DS7rDRPYM8M2WiPnSH49zy3ksDAic3Ncf8NDUigWE6c2tPxP7ad7wM8FrASdk52GMGbqSNrJPgWK5",
  "key2": "3RMqworDU8A7GPhCbYhpHgkwAbjQPREpdB1Muj36Ge6qCHVuYVV45Jus1AjUgymcmkaiEQhKBmSoQqdjKwXx8wsB",
  "key3": "43HQ6MLMN638Z7Mv3z6qyeySjohrvHX6DvNVbA6kdgi6VrQLDaGo1QW1iiWFMA6Xzw6LjdLkJjVnSGBkQZawNVA",
  "key4": "5q5bY2467cMDi6w4zA1eGZtaGQWrnthYyF6d2qh4XcP9bmcAB2ZHH9eAjsZmmSaFnPEGFE9GoxiLCNGEJXFPa67K",
  "key5": "5mZdmvjn36xFujqQk3Ah2fYbK9HKnwg1mWXYk8ZZPjr9HJJZ9ZQDuJmudbjsq2Dwnjs8YLe5oNeMtuohdc1ozugJ",
  "key6": "3mzcuqKGmc8dt1U12rYeQ7JddvCFBnjaR6rL1vPotj7AUs7jECXhVhm9oc6cuHwEFMHMQywpffuEaLZfNKkStiWA",
  "key7": "5ncrtfL2tkELN8yLvgm4RVzKefFiyENKLNqTnzCM9dQwLjW2ArctnMpN57oWFrUUVRf9T1m3VZagyRn1WCavj7S5",
  "key8": "5AqSaHzSXdiZ5QVAa6idm5uKxp8Rei9JKujdDKDg1whSmYXgG6Mr99icTVQbNydCuKjQQJTmn7ivaej1NnqRHVCK",
  "key9": "RWiTUTpDYfJQPsgS53ay236YDAQJNHgyWmLRgoKYrGc1vRYeK3opSZWAQQ5ndjHNAYsTSj6dK4GdL9eYwDAE2ip",
  "key10": "3oZRoRCm9YxqpqA5gEsrdaLuDSAUaJzjbtXRCKron98u8t1Z3RnjWuurTHDSfSwEpG82cTNEzsXenRVDDBDmjCHQ",
  "key11": "2jz43X3CpT11jDhCewJyS62mfyLV2DvukuKBidLmZrq42ag78s5Ete8PtBLVWrm7umfjpXcsDo3wdvFJsLVHoRZN",
  "key12": "5vFjkjqSUBKvaENqShgQybpMzj6sR1bn6wwQBLV4HvTyAMqEe1KLL3PctfZ2pFbQoMbi2V6wP6dAZ5EnbkB9kJ6d",
  "key13": "3AdRbsNxcady7HjQyhUrnBxUV7D5HPK1VCCLhKmNmWtXeNKcdVnJ6t3RJWAZ5s7okTDQ1jVQo2rQDVMo8czjCy34",
  "key14": "4JaM5k5Sog3tfFwBM1j2JuTvcrKALKnRGPrRLag1iMLsYeWx7iJF6VzmqxCtYkgoRNpgw3WW2t3mTr5zT9zDju8S",
  "key15": "4dsuWqhZoj34Q6aZk9yLhqQEbE8TymcCNW4VBac1krh1NeQBxFb9MiaheMsYbWMwCjYhyNdz8fmhs1G8AaEnvdh1",
  "key16": "4EYwsxM7S7iYYsagambpJqHWkofkow4bo1Wq9jRk8T8Rgf6WugtbtWbJBQKLYzfG5CuF8q3p88utKVBoSvfJ9QJw",
  "key17": "3uCbFFXvoLYmLEanRH7Ru4RJhhRfBzjMsup4o9rgf64WnDLsNpoPJCdqhrtLeuZhXQT7nFHCrETfUDaWAWeKwDjn",
  "key18": "3DvFFRTYnFXPXNpFrUBJycT73xaLC7TUPqtMW2WdFxdquR5nf5GXwFqEXjJVeF3dhwK6eFsZrYVdAQv1Uf16nSaa",
  "key19": "5btEaUnYqtXSgeT95mV88k2ncc8UZRT12rLb3ssPmkTYKPkL6Sgt5dyGG7jiNb6ksSsopTsdZM57uqw83YsLqAtY",
  "key20": "3kVnjfNZozzdQcq7Zhtq97pNATpGMXD93nBe5Tu6KCRBM4jE9vEgMFwPTTnrGoHV3w4qhDc8XYUXyxgUnwAZBaCg",
  "key21": "5KNJ3AQKFJvAcQ13BczVffzrJ4HkLpuWWUu6AESPm2sYo6fucJuHrwWLoBAmT2oUmXdg6MvCaBBfKCLvqmydoimu",
  "key22": "4pPhTmCLpMzC4ZPozLAzh6JePsyro8GQ1CmpYvUgev4tbPi6Rh9HdmT7zqn5JAEDyqXLRmEiChoem5dAqo38CEw1",
  "key23": "4n21Mqr6PVUKmToknz63o4iz87GJJE2W7pkhdjxGeSQaeQpicLT1wrQEAZaA9mZJyCiJ6uPRrYTpWG8jftBPkJpc",
  "key24": "56rVvaqz6Trmya7bWwan9qQ4RM2iq5XJAJQEEoP6ABipgmWfS3sBCGHTs6smvSHacfP4j67F7ob7aGsPxqStqsJQ",
  "key25": "nrk724fqpGrqvatgt5vZxCP5JzGRZFrAkvCNZBaWWy1ixhBHhgZH7s2iYTSynb9KUPWtcP25CevEs51weumSZpE"
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
