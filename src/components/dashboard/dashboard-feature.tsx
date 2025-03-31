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
    "2z9bQHbrBUjrU44ZYvuh64iRjQW2Tz2gKYiJu8uQyMBvDKxcvD3uBAfkBzrUUR4EqmkPJ4mfeJAgN4dNM1uw8xhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpyqUkKz2b2Yyw5eC61oShS1AixxD1qKkDvXGNiE5xXGTHFWPTQHDzacjf8rKr3pEJJ7vFNryNhSaqPfzxVydWF",
  "key1": "3FixPMDpMryyWDfeTYV5WL4xxHea2bLcDWB8CdLxBCLTDpXfV8bmoJnx7KZDPukXpE4CnXdBhWjQo9VWu2HG8yQx",
  "key2": "5SqvG2cwd86FjUn474RnD5Jjb2KBqE9yeEqzsoj2QiaziDyGdyBmZPoXc3ozgvALWfFhZompdEas6mBEiBfzeaaH",
  "key3": "4oQsmkr7zQY4n7USiUTfD5qEULpv2Sb71MgwfRGS7TKRF1eWgKGkz6DEBRTGKXaWeSyDkV4pUEoR5hpPpSyr8VCD",
  "key4": "4i1rLBmReJUC6LvC13VcSV829B2WZg7BHkdkSSw7uTAQ1VuoHjeEVmBcfiGh9GsL23JkP2fqAQAiwY3n3Zp2MWzx",
  "key5": "2tViKFXmVEbnNAU85JCfd6qrvuEvnKu8hVp9bFTJbc1RXbAqi2XHUsogCsHCgrdbpMuxgXAwApyvXkA69s2SzPZL",
  "key6": "5rSCjyub5oY8iGAfCMt65W4FjsA85r66QA72R1dhDYoVrsYsq2KdKW6MbfiwB37AxprCevSjBcLe7bWJJvjE1Zrm",
  "key7": "t4EFwmtZzvm3qkccvumrnHisdvatGBsiwYhHgseKz53VVVxWq5GPFJxYPzuayxcQykgTneMTxUR8naNGR2MY5M8",
  "key8": "5nKCpGkqHJcwqadZsKHRrgb8S3pPa4YAmxi3FnCNTJo2q5RwKEqQN7pYuPwk7ZbeH6ZUUWsdHmCmXSBiNCn5r7hm",
  "key9": "3qTaXqk2ji8tR6s4QDqDmYNiSmMFjAD4Lj9spzNc4r4PuMjKaZXW7VVXCFTmLjkZXrVcb9DSPgogowv9dttr7RHS",
  "key10": "4U2Au43wadte1JMhCHhpFDQGyBDktX5xyEvLFimw1XfrafDece6DSnXgmejwE4L2Ee4UkHJJ7a9oTbfhGXiNrk41",
  "key11": "5GsHoS4f2JSuueRsdargpGDyzvjcGim2s3XZ21d1LbXqMTsYghz2hhAAvFWNVb6H6pvRTvidFiE5KcAa52k4S3oR",
  "key12": "2EKHR5YbHeGXrCkpn4Vcnoc5Daqbqvd9wvZCf5ajKAjvfxghoZNksz48u8TQCW4BAYHnFcyhWVHXd2QTGe819aAG",
  "key13": "2D6N6H7VWeR8Y8LjX4EHQ7Q884fsJzLgRPV6GRURTwWoHdFCfifwyq2pGCUP27tZJENwrRDc5hUQMPz3T7SxrZGn",
  "key14": "4kdQJKYYXfu16wAt6QYPB9FUFbnLuwoJYwkFG82YUKyUGM6qNdmCKtdYQgWzHdvw92KQBHcUZgZTvqiyNMdojMNa",
  "key15": "3sPyNUeycyHuxbg7XzwtkZFC5nqJ7EARDLtxQ6C2Bkf7r5Zp4XnpCkBbwsQuhfSDJwCtq2UTN9jfw69h1377yg8C",
  "key16": "5WQDLGsDdv6LqrFimhWbDaz4fU9X9f2Wbbjtbw91kt5CwVp88g3D4q7pMNGkG8JYNAz24CYuxQ77PELuHBznd2pn",
  "key17": "bn55UGZCut5btFx8dqZq2cxwqykobSBJpLZSkkRQFr5Fd682YDdMSbm3j8siDXx2hQBbbZ1qXGoRyPYPF3V6xdR",
  "key18": "5hZTssjRFKqesBud4bxtdxPNSKx9d2LdMKrCk1rZiaPNR3hYBRvDAkuCxb4GAZNdB2ijwwEK7uiWXFCgAiLuDyKF",
  "key19": "2d5jNSvyCZKGBb5YpQTeX9Uv4BgqZEXGdXs34DFAZpLQHWf5vzZBEb67UDZHtYzcesFcZQs4bJQtV3zxf5tGmk78",
  "key20": "Xr8TAKkCTfeUdQhMsCYsxKB3vi9eAepB8cBaienCtJh8TgrH3BPFAiLMc4cmHeCzLuukxmFQ5troKMLy8Kyk1pp",
  "key21": "NsFt9iErcW7vNBre53YiPQoR2zVXk531yebWPxkESaKxCyc15sXynX6cFsRwZEpZC83LgviAHKPjqSwXgd2sZRy",
  "key22": "3JYkuUKpgyyzCjYpWdFCSXkXXdDXaQVSWWT56DXaxz95hPBPmtrCbTV4iaeoLkpKaLkabVYkMa2qtyuP8MJccyNj",
  "key23": "67cSyutJAAFhrptE4TfkbuRJhJhT4VLzYGwLuj4vTeqoBQCZHhKmcrxmE5kXGU9BkgXrPNDsAFNzsBDHScyCkbzb",
  "key24": "4TkMBzV9QxjcMRLspoTQUV2YtEL8SrkGkursfyNdxavFsDBAhM92h9c1BvSaxpHT1fPDifUFHKhDvsLiGZqnsBLT",
  "key25": "toYZPpPDvWedFfxoG3Biifq6n2PD7y44iYNZWbvZz2hmKfax8XP5JASC4fQ1iTjonypDUb94b5ZYdqoacLTXKBq",
  "key26": "3xisjQf1NGYdcm9ZnLGDHKZNCJBApvsjBoqkj6udM8H33EvgzfmcAeZEmmJB1JxCmKBwFXBFvddpz3RKmQuTtwXR",
  "key27": "2nnTPXh3s7cyxPGj3rsgwoZWB1rrKDdJ2wHNaZFVDyH8JVYWHdHrEVUEU4pjRFCuqZP7Sh8jdWA2QYeb9FtW4ogN",
  "key28": "3kDc3LF7e8YX74nTNaSEaZSNezm8V7gssmHT2tUi8jqjzveNpxQVipAmWKS1xCs5mDsq1yMDPee3DUbtWcviRqVn",
  "key29": "VzknBtA8bXY6RFiaZEr6R8VDkK4RAbwHXUmzZaFSMowrrGzs1KBS4B3Ewg2HFmWa5Mii3KT8X6vKVaH6WQrFEdg",
  "key30": "4GmdnPV2RsGNSsk6ef7obirGSuypKL6ysEZuFbNmbhNZxCKvLBFbebS7XP7MUqfKoiQYHBgYA6m1eETca31uvZnf",
  "key31": "26JnjTjLXg4Zqb2kNybtUoyVcGTHsMyNQJ2RgGBtNUwspM27duRWdNSwQjfEfeYSoxBjkYKb8omp8pGh6nvPLVCk",
  "key32": "54pbeNFKzpwDaQfjqbgDo2mvc7stuCG7WrDZ3jKpjeeucRZYg8vi3eXbH7SCVCWzDrVcikHKS984KsBwqeRyduVe",
  "key33": "5Kr3hGsKiRyz2ZizLGD4XdHjcdbEPJuPjSGodcjoED6ZQHyU6dYq9j8zVUTjCujk4yy5uLsudbATG5oY8NAF6e4U"
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
