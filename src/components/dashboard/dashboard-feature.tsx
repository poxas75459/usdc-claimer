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
    "HNRgjca9tW7RUmkFcb9wzDkNpTbLmzhZZ66giYnEWGTqB7gwNeKRxVLw2WvkSExbQ5vG78H4uDnjArgAygUSk1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDKX5LHTqWUoHfNUipcpLSWtjLsiuBWRtZ96rJgqWEQgUN5x8QdBtaHvaKuwJpN3VwZt3tuMW3BMQcg3KDHomHC",
  "key1": "42fk77u7yygyufmN5vcZbUEdDZ1MaSZd2vpPhdW6PSfyBncY5gat9AWhSNkqgib2j7HFW1uiZRoXQpL77Fh5rYgY",
  "key2": "2NmXJUG5Bc7wYKNAixK2sBHy2qnXxPktCGxytTbrDwGfyJQcrN4qn1aej4TmVKSfABkMjH3Lo7JAh92L1oQ9xwfU",
  "key3": "2TBEUEKDnpLBY1sUVFN7BCinRZKXKEutGw11dCq1u5teqkEsisnxAe53oJ6Nspip8GD9yfpqvBJugwermMReFqxm",
  "key4": "5b3SWjyEpcPjgGZSNrT5JXQzG5nZqbbTMJp2AoZuhLs1h945TXC5rDEWNiKxLVgw9qzkerzm5eNxG5NfcXqdsx2j",
  "key5": "624nuQvsj3iNLeMxzLoYmETwgsfcokBMbKgAXW41qJmokc6u1yn18k7wchuBHcwWLUzu3JLkNyLvGXijkDzaFJ44",
  "key6": "3x5gBmARxfhVXzkMsQWoPJ5WG1axP3HLQa9FGTxse2uq6JXtexAHnaJXsv751ReSNscyDpGJ6RCXvFuJANb42c4D",
  "key7": "663VZWX3z3XPDrJXDCsrCE7uZ9WNjksR9QfzYYsmmovqNWrGCFC2jjwn9edzibJgYaNqNtgSeDqkwiQLZoPVLzGb",
  "key8": "37ZsmiMAYyes4VciGbvzaxH4K6WNfHEpSSd9hGaFd4qe2oyXCG1cShmQ8xKi1EbvhqH1yTtcqwHGqAtFGGt21oKC",
  "key9": "5RpKwYkxNSyX4LEDyiGfXfN7z7riGS6vBjCdjs32MbBYham15NL8A64tUrvkMsRG79YxafZbHdFqhg66hbKqoypj",
  "key10": "drU7Z9t7vPmnrQizquN9iSpVwB3BBTGmSW8t7ZDQAXzYsbxQPKPaT8Zo7W8TUL5LvTVHqJHgCvsjSuiNA1WUf83",
  "key11": "6TaSkRAi44koUpifrkAAQbM3TppoXQgMG9sp2FgVB9aw68HA71vvuc2rt2SX6K2okT8rpXBxPaQE7kWYYUd8HLa",
  "key12": "mLiHEZubSsBvqhUnzbMHGJyCpSjqod7hpwfGdXXBNbu3GVFpND7ghCn7LcWPmUVEcAUWSuWCzGqgWrf14wuSc3V",
  "key13": "2RJa6p3w73B36CVT7kRLNEcJJiKUig7x9CGQKyeYa7fCoy6ou6LrysJCYJmrpV66d5k3tpf3pNz9e951Cq5S7gqv",
  "key14": "5oaLZ2SMQ7cYBmYBcXRnuTiTKhEJ7KaW5vPMHn7zoJqzp2VgyxZvXjK1psoCNhRz9dK8fPcpK3JDUChixHqN44sp",
  "key15": "4bmzARtf2kUAbeNLvyPbaXd1GXtByeyqfgHHmG18VDKeyCZoT3Pv9wCggyDtVprzT1yYnofwh19QZcNaP1h2QqE6",
  "key16": "hovdJqJBibz5ruPFxMZX8rtFeUYfEwhhAzh24S7iLBgCtVvaYHbJZ4FbrmDYmXgs22SaKRPhHziMYfkV9yjfQ76",
  "key17": "cFjSjKRnKsynoQ5AKa4wyw1UeP9zhWwqxEjnKmH2kHFE143KhrtBAcPGRX7GvLeQi1LuQa5SkFz9LKpYXw7HUAp",
  "key18": "3skTAVGeho7XHXh6vDVdaigQyRv4ThGJHf8Xpe6QUeXkhGA8Ci6wwTpK8mUvZwfAURJDDc2SKjVy8n8Hw1GyZYTQ",
  "key19": "4XLyjBNw3FfWQ59sW3hdv1hKEfMG586b6tJFtbChqkLL8u65CGF71zgwWMcpxzKL6GUtwNy5rrD1uchkUJ32GBNU",
  "key20": "2HLyD9JP959WVjdwBwiYWm6XoFh4i2wkbJprBV4GaCmQW4nTSG34sVoRPRgVChVCPCeuHU4cfQtoVVe1NNzm8sgT",
  "key21": "CxJbJoJAa8AajfaKgEDKYbW76d6ERhUnHqMpAQNbZ4UWNsZV4zZeyyqw2au4bmj3UdefNFaD9sbwoi3nGAbdZwE",
  "key22": "2thmniR92TFhUN36adaFqyNNi3nP8bHdi8cCnNv9WMGcV6MiSySdePJpDXQZADuyTpDDrvCZ6DLXCFKXcZFUWdEc",
  "key23": "4GuxWf9EMjAQuiVp6b3V9b3twMPaN1LMibonHJdf9PSpUE79Ech6CWLKokBAxywXkRJJNhrxqNFKEsitdBf4mByV",
  "key24": "3SaPNiqAbrTwFPS2JeGo5Z9bt4EULu5EU9n49ipfAcw4MxvvN92Jp3VNhoF2TkiJRFsM3ckGV9fq6XRtfVk6A3HF",
  "key25": "2RtzQvCKYek8Pbe1j199w9TQySDMgB87RLVJX3MpqosHREYX36MTnhBkE7vdavq4qcKzNNTPK2cehr3Sbp6c3K2J",
  "key26": "5MRMtH3SaUbPHcMBvrrFG3AEU8EaJsHYCcfWS27JXfuU71HHv98KxfaHRYPiNSm6gZPXZy5th1HadRwYyLPAtkgS",
  "key27": "3Vc7NQDa6MioUHU9nTmdfBRqPbRC9EkwbpyrZqiALvaE8GV6wgdLFsrCWsY8YLMV7Hy1mYxNrnCHxQysxWSPSE3g",
  "key28": "65J6b7Yh5c5FW53J94hPEj7CpZKBnGSasoQsKdJ9Ta5wJTqtJbjMPqYzx4eF3ad6mjDbpi3vJLSZ1k1qDUoRhg8h",
  "key29": "34g63PzBtC6AZ27niM44QxHGH3fVUdi53P221hCb1adzcs9Fx6CtVpzMRVxrcoyhKFHj4GGMK8np5FujGBsEkH3R",
  "key30": "jYHVJwAx5UayBeGdsYxLxBfqZvagUmdDjJbmJsF33XPfRJocd5CqoXGWhFEvHtUJAk8suRPewUybfwtmA9bbZvm"
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
