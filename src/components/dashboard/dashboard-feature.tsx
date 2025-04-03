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
    "c4JdKf2iNELLvhMfF3w3j9V7ZGcDBvVFNJrJHomAEP2yA2if3c19sJToakRXYFg9L1iwMk2p5YWZpGL8mjy5pG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61XpnGZBB56wpKZ4z6Bpn8dt78kBCPFWPitBBJ7B3GJvGgKT5xBaMjeLdz7ux35HUZTmFpRENEhh5XL4dr3dFju2",
  "key1": "3yBUGx2Lhtfm3ouhSCUa8Mu1GFyVXPEYpSACGKghsAbdkpLKs1B8VnehXbbTNTgTgykyyA4Rc4hpMwhTuYiijJf4",
  "key2": "kDTBV33qTtrBVg8NgDLUeBM6Nv7xhqpUUeFJTcLZzn6XhFGD2vkdNLnh3noP9tDARd8hhJWWY9qDShTkf1UJhYL",
  "key3": "5v8a8gU49BUymas4jSBCAkuBtJrCazTwDBMUjySD7MAwVamgb3YS364HK83yeSz6iCw57RqhzJquR6fDYuM3DLHT",
  "key4": "25Q4KEKWTEqT9qSRD6MdDAi4bPKWrvRYgCMk4fqY9Vt7ncmkk2stRxVT6RHh6rYHxiof5HrsbqRunxrV7n1VcSdC",
  "key5": "2ML3ERhLRpxZuv1nHsYkwHCauMTnR3B3YNGiBDRGVSzE5BD1xjrjvVTvgQWnHV3zp2urZMuwjAzRMzGjh8F1Z45H",
  "key6": "2AGvYJpuaf1uJVj4orGuwfAwUHKQdHbfJm2yGgtTfWFDbzftEqCcpNVt882A41Cc9e2nQNqWB64dWQmH51uvHsMK",
  "key7": "2KHEEpSC4V5LGEYMbUPHe7ym65PBKXRhBVPsB92H3aFwgHdTCATHDCrPBk46ibEDk9GcC7BapbacKb4oK7CJdRMN",
  "key8": "5aC6B8hpnhKqiRRuzbeMCU4MGn7X2Yznv7g5mqKMPgKcwAXMDZ5SuGGgMwTfqBsrAkqP37Cz1HwM1oW59BwQxf5i",
  "key9": "fUtYyPAjQWp3v6MQzzR4JDR3X9crS5i5KbDpwNNqLudsJRXSoiUsNk92MGVkdfrbwP1CCgGRcSetrZpTefuhM9c",
  "key10": "52kbCT45p6nSwzcAe3cVW6WNppg91hp84FU5h2cdPgL4ox3XwqcGh6NyThhPqARr7ZPUVPDBisyFet9H6FgiAZz3",
  "key11": "3gpYbjgStv9fyxDTBXuaDXSxek4MnAWTZcMRWLjtDdscRc6bE9tTnFRSUAK7TEg2DiZaTv7VUzKk8vMNNcftdCAT",
  "key12": "5qCP51NbkxttFyvL4yJfUs2FJLaxcn2bRohA1WtZWepYgPGrficHNpgZVCtHFEbc6q1bg66FhLjjAqyH2pcZ9V94",
  "key13": "4JrvyUabVjmTvDtEUwMD349oyU95MUrCmkgq2NoyLJp2HLtGyPf2npQXFtHKJfvRNCGnXyHvubQiqDU5uzYwMSSq",
  "key14": "L9PEXXR7dWQbdByEwQHwyxGPgRgQ24WEEWsfYwcviHBxrDRLH4t5ug5JYK5aT68CnKNG4gDe6T61AoTfZmmyMkn",
  "key15": "StjKNH62ngCxm2NAnk5z8aUoHQGjeEpex7P8mBJbz1cbCxbSEBx4e9aeTuiKjJxaytNUTLKuhZSSzJdaEMuqhgR",
  "key16": "2B8jkF65Tz3XMvorMDijUmNstZeobi77cWc8uegQJW7CXh2EF4L3H9E5hfWyvnEFKJ2QY2MAo3vUrDTF1x3v5AGq",
  "key17": "51dnDP1ThMaEQFD5yFMKRWJn5nfQEt66tGAr1sbQtPWedLnX1NiiZrqRcQeB9cqPpN6DQcmEEEm8daZyQTL8GEDq",
  "key18": "26sq8W2SmJe9RCubGtnwQj94jyaV9JkZaPaeie9JWPs7BpY3SgmzE3oy3zULsixgASNchK4B6zgMH1RXW3cPKCJ9",
  "key19": "5FL87TPxVdq4ZD8cRnRCnnQoyjcLVd5pVBjWjntr4hS8BDsTUAAEdvY8F6r4vUxt6m6q8eGcV8N7vznY3v3jkfNX",
  "key20": "2VotUiCobZFc5uMhHy29ozeAdCFPaHUDgKby5dt78d9esCH3Rh8RyPyoznZWJsCC4rm2EdJjxtoGZZADSLaPaJiv",
  "key21": "2MFyqUFW7NvU8RemmwSfk7yam8EtR1ovKFBFfKgTQRhZF6WuSjXvE3z7ubn7aKyAkRzFTFPck83qG3kFpZTrphLQ",
  "key22": "4GzjBTLjXYhpw7NWJZQGQHVG1GcLRvADyBcLTJ98JsmVH7DUHL8gvFAV8xLZp1E11o5btojav6jQvLTTVxoMWrb4",
  "key23": "2deNQshYf3PKMZtdWeZFG2JyJr5peUwW71CMyXPjoBtnUdsbyJQPehWPWUzcBHVThydqfyQhRRgMcn4cvATdvm1A",
  "key24": "xtN2ABp5h5dMAhXQXkTfzPjzTN849MCdEonMZcc2a5CEbvyUbrp3uPp11RNz3VHKKbsvLLB1B7wSoboVyLwQ7gX",
  "key25": "UEa8v58BL3JBjHacV3uoNKSR6gndpxMqLNNfBkY615VbbhiTg1BVpHvU6ow3B8fBKAaLyHjZqZ2ii8y65mudvnH",
  "key26": "5oeKHnBuwC3SsJFyVzCrT4WRYsRMHpXeuWHwdyYBXYaW3QZjjM6Y8RURweL18P1vYrzhuTNG8v88mBSKn2t99WYu",
  "key27": "4hpJ4z8sgLzsC3uMpeTrPzd2MjSF4q7n6UXp5F5p2DonZcMJQV8GkESRGMFen7NLCEckCffMBhjBz82vTpJEUEzm",
  "key28": "4xPQwmpRfX6Gra8aF9Uq4inpYqsnLMGz9dmr7MsUZ5wEwXq8Zey67CWJ98o5hFvgpg9Sg9iFTEfcbxrHg5dDWZcf",
  "key29": "2P3VLPAqnZttHq96GKAXLKLT341VUbtb8277pEq7QUfWoGPoCcPTF2yafxhmHpttv1V8DCi7vBiCAC3Q3hWxYobo",
  "key30": "37cN6JwKPYhWFx8rv6sxx4qjSgZgi6FkeTFKy4o25QmyNUWmqyUWAPLWEJeisuUnpkoUozHs7EA3RUDUacergjQg",
  "key31": "24hSxZ3vE9UTuDoNZh8Ji1VRucXoCv3Hmo5ZEHH1cbGKuvmgrkMvo836faA3AvPYPpZVi12JopRscAvNtkqUhaVM",
  "key32": "rGRMrcyRs4ifLhk3izSFk5ssBXVnaUmz12xdwEQP8CyrrnxzNn2ZXXYqmw6TGAbJ9gge5YgiTHBgQE7onzsSruL",
  "key33": "QJ2qumxLRhV3Uaf11zL22uZXzrubeYnqT2AuSRkhrD8aihVQkQQWprhFVesuY1PF2msvz88cQTuRW5NLVYwr8G5"
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
