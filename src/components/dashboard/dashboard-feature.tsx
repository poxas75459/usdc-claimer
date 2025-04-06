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
    "5p4A8tbfEiLVUARHfpNQXfPDwFPsjT787M5BA72g64JDLsC6A2LGL2RXRnPyQYyWaCef7FKp7GpiUAo4GnUpZWe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5He2wNuNXZg4xCAwUn8sxULyCTo4RRwfLDdC2HMyTgUMQmWc4m1axTeEw5451K3nA17Y3x71NrNZKLmGfYT7RDJY",
  "key1": "47D7nM8TpotCxw3QvSp1mZFbhKxjVFfeUEkyW5j4kLqTz5RHkpWHs1PmGWYhEJoJQEhzPrzCP5iSXfbxps2W5Xh5",
  "key2": "5uvqb8oVifmSPCR7iBiwJorin1HRNNnVDudAKPSK6itma6WyFmr5v1bQAjPjLSFnNbxf6oDx74ZNkN2UHC5K2sCK",
  "key3": "25khHnNBmoiZT2zpHc69Az8S11kKLzLYiMsSHmP3iPF4Z5gh3cFKWqZzmoU1ts1hTiVo7JnsxjmQSqg2ayzmMV9P",
  "key4": "57Vjf1emVf5UHoZ1G5FmYQAiz6BpA8dmvgySur7raGm9YxFJmfFYohaJtGR2DCMkyA8rFWbjdhjjXqZCwm73dbzv",
  "key5": "5DB6xtTSYovhfFRU9XqMLxwfE9p9JRB6JtKtB75LQTLYBvrfravx4jR4NzzyaYwrrKvgRJAK7fEFVnpRF9peA98E",
  "key6": "4j99MNuXH8WCwdm9CoC8cLNBgQZPx8vBt5Djx6rMQUmVRbwekP1T7pbrxf8g6NqWJdfgCdsGoTcbNRAgr667UpuW",
  "key7": "cAo95kAmw6unD8AZCcfdnzQQ3FeQkJs2g9usGEoLAssLwWPSgKXBZ6F6edFSkEVisvNNjJcyWryAzfqUnUME1HZ",
  "key8": "67reSmuWwav4BfZr6gBzdBMMvxNdPcRgoQYAeZZcLf5rhpq7uipiDp4eVhJq2VDzSkD4zGXQJuum31wtKZjTroCV",
  "key9": "7pjyzBfqo6aALVGqraAvo27HTwoUq7NmS8jAr77n7UDURdxriCeoty4RtVSdudhTwP1VTeSxgBwb5Sjyxh5oEHm",
  "key10": "2EBLEqXYaY1EgSmCq3njbz8MeWTmLXaTtE1J9gsGyFJv9G6Z2bdQYchnYBrtxS9hPawy1B6Rj6Vpkdx7h7cF8shz",
  "key11": "3dxY1pDqnKWWBwrkWssxpi4oidZxdum3aGfxgjinFpXc2mMYFn5DuAHQqaJsUDoZHjqBtXRYsvWLon53yEfJ6Ccj",
  "key12": "3ouqwomEa3vfqsx9HPr13eN2ACAHjuhQSPjxwdtFwerKDvr8wY2JpgdC4KGC1JYXCYWpHjGTwzXaKPvuBqYUax4f",
  "key13": "38nHdtSn3bRTDUwvmyJBBAuiTo5sXpoudarARKMxXdALkv9cRwyS6we7p5zQs4kuFpsn4oPK1Hb9gwi4JcdrQ74N",
  "key14": "5zzYaYf7qHXXgCi9FnUKLwqVxGffQmi6DGrru1riN8WmfF7u5gwRZhC3PW1RxPNWjnJpDp8MtMjk6qiFzXAm2qLZ",
  "key15": "66W5LzvyLvA9wsTwkuwwHQAPAKDxjVY35qeGitxNNefQFVrwqsMhUrTA44KgkLo7p4AgQFbeJ1c1tn857wakpfoi",
  "key16": "2ABLzE5cw7H28P5uxkDYbW58gMd4ynkcyT7kz6RsKqP6XaitqQfsmSHrSoqEQ42LnixMoZimen8TptTnEWCLEECG",
  "key17": "4aisfN9sBdv33XMzimHfjmhqBGvhgvjzZe2WJCCXiehcdnUfADhiCjFHv3qoL8WNDjASsX36EbUgPFnArA1frAeK",
  "key18": "5UwoKsYyxaTbF1z8GKauiZVVz4RRjnvVwZKBu5T7wUVExxGDPK4cyVtjBQDEE23RBos9zcGVN4GH1o3A73ZLYUvS",
  "key19": "3YhQy4uJwVFNtjPBq7aMFzuB1YzVgKN6QP1SPpkhF23CVErbN6gYLPywaWAhxpPF9GQJpipDEKGi6n55C1uotC9Z",
  "key20": "551pRz983mNM1BiuMZ2tAnFqCSsAnCSnwNR3L6ZwEuNgT6z1xdM9ofiiTzGuXLQ65M1QpexiWXuCW4xgVPp7juR9",
  "key21": "4ttQN6QKtAi2xP7nTkqSCpooYUBzsfrP6KNXQvnQuYdzVYYcLs8yrWsTfhyXNedWsTLbo3hHRgpsaZvWUcAKejsZ",
  "key22": "cZjKn2wBdvDuaxiV32TRk6iGMv4mCMw6bpz2pL4VJHqSXddXrGvLmthXxqYGsGQD3iTvj7UQskejGF6wQ48cvT1",
  "key23": "2XUTtu6vE4Vwtoy1M8rygPaRke7hx8RhfyFABb5uXTcxf4fpvUjTfHtB3nZey15uxtLxJinJEyFrxe7Uw7UwQKN6",
  "key24": "5SmJfincsVsUcZMeCu98sPP79PMPEbNHtE4BE6gkF5owhm4pmkdbM5CHExDrYQQeoA2B9PoSduHiu3gaCm2TK7Dj",
  "key25": "5WLq5Hqx7aCpRMbUoTs2iK8hYrpiKM3Pedh1AZmtxpL5jqGzqf2ZZPX9S6LArMfyTgUjgrTdebysyv1VpXgsMP5W",
  "key26": "CCDWDeBuCpfUNQTR3C94ZhTx3nCWT3TwMDXE1VsCFrGLuNRuH3fYjDmvV1sfS4SFSA5cY7Z5PgkswAQbr4ffuxU",
  "key27": "5RxSoRqwH5wtEg8U884V2djnKVZ4s9YtwpvMZh4YmnixrsxPMvifyodwxx9vHtahrn8hweZMY7aQp8ZbiFjFGBTz"
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
