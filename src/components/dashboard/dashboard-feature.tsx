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
    "3zjmapgysVLBpseVkmgP1RACiDusS6HMP5BRufqgQtBhjZVoeVCkMKQughhYFSMqPaAQHCt7HKrzuucR6r7L1CHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LJnWiDchmRXRtFXmorq1uBVax7VQ45U2LCGaf9PnXzcCTUcePzw1e4TuTegCZ7b4fsWENe563VMLpjDMYXjHjKx",
  "key1": "523nhB4gVYKfmkqAG5ZzLhf98d6HMeUpA6CbZEif24YhVbQneVBzsEvPbCuSETUfBJoJauMJZaSzHtjG4MAVKT8E",
  "key2": "i1n6ZVqsrqgrHTyFnLKvLYbPHPhefReyRHF9uXpEzUd7Amqm5npkV6V8nzgM46wCGdQTKZbTLjQ9tpfDBz52xSC",
  "key3": "5n4Z63gYwHAncZyQRedfY4uXXvKHRrwKo1baW6QuMGwZeVP4hLMGTzRsPJmSpV6G2DQfPPXqsmJwgWz62q57gVug",
  "key4": "2ggqAvHhwXpmLJqKd4Q1mxKAwT1LiJHLyH33ZRdaUnyHcuaPeYPtBaGZGEL58KE2HurhQMhAakZjUbH5ehiupfEk",
  "key5": "5X6JDaFcNe6o5dSU2JsPbXdadEkpmqkLZMDcnPGL3Em2kAP3LuGuHJhb2dx5DD6DjV43GbNjgCffbk6Rt41Lk1mQ",
  "key6": "2fKKrYWC6zTfRsrq9L3iPY73vQ53r7E9vXdPWV78hbQcNgBQ3FVWXApxTSaY9gSBq8iHvngyEWAoLBDoEBtsu9vY",
  "key7": "1pub5twC5CQNhFKAjC87QDoXQqJwp34fSDu3kqPGH24t7CVRcJRCKZ7a53G7ZSsFe7J5UTAENjvQumr8e8W1G1E",
  "key8": "55vYG7DANRnjT2XJyzMYyLbA9AxKDAoeDkmLipjh1eq2JLW5KVXv73vt8tvEeFTZRqw3Y731JZi6NWV7Rpwm8gmG",
  "key9": "5M8iuY4QvGvVjJsdnqrzQFw2GLMWTL3FhFt2RNigtXHBNdbPCpHjpzFvt1HgXhB3SmTdSDg1XcNMpgca114Jow4f",
  "key10": "2uaXQb16cpSKaRJtXxZt5Ai7fnFtiKbBWkBxRDjaphKC5wR12Tx84Tsi3rLkXkoAyvoxpNTGSNxgvekkURsdnzMh",
  "key11": "5YmVGqFQ3bnVKtnBFokT88edxHfMXYoSTJb7sbba2Y7FtfB6h3s9t21kgLRrPYokTzuJiJccspZc7vEVVJdwEsRX",
  "key12": "2ypxzzL4XJAjonCgBtpGURRzV31rZZAt9rLnnsfJ8uJedM7vRijc5GiEy9JKacf4BsMAWJYZYjGMeBRXq7v2avoZ",
  "key13": "4egKus8FNCeb1qX8gpSfAVXYudKLGwkkH5nSQJcKbjZ7JpLRzB9GHqNze5YLctDiomPijYUCAbN5zVaDpnmB42Mo",
  "key14": "jmkGVNqBbnoXHmpJGeX7yez3vHA24cbmsFHWHqmunYYtheHPtZZfvhAJTj8ZdXmTg3Y6rhzRkn358T9xtex5Ttn",
  "key15": "2CPsWGYQ4ZaUi6vcmADf1VHtxZ5oPyf8zf16TXXM7DPuLVeVad9LF6GW2bui7EZp3S7fCep8C28sLhKSznDQ6eqP",
  "key16": "2NSYiE5Z96SFEn6G2ijUNAnYnSTW15UnGUvdgcLwrwccvv8CNsKqJJzFCExrrciPyjSDE3xfkHQzFQ9mbPBthLoG",
  "key17": "48NNp7UDZcexkYhy3aUED2PVLXizkj2bHu7FdrNn6JR5K6DRCeMHeVExXjDGuEK3Dq8zpBnzYmQqpmB24QhdBsep",
  "key18": "5pnjFteUn9H8N2x4k5Yt7HQVfuA77sS67hbTyKNXbYubo4LpgAzhmSdtMVzhWBPKCwMcGFGXHXGPCT4KpZbA92cX",
  "key19": "65J5to7KUZqWUiVYRY2iGSmZ3w5EwMkseeq9XxhmftMRkRm1aPkRC9J5ECgEzN6Cw3o8bfzVV2tXQq2LsMXe2TBt",
  "key20": "3Bs2FG9WyqJKEQ4Ztvwz3qQ64aSaCzFK1Ys2j2Z5ZV6VYjpB9kNejy6vzzNvnsDyHEZDTS68oHC5iVbUtx4jWGot",
  "key21": "uBkscnzJPuUKenvAArG1P7pi76Jpf8dPFxtZ7cZwXnxEF72MAVC5XQg6DjsiviKcwPRKwyf9y79q6LbszViwANX",
  "key22": "4reZQtH7y65uJRZrbWNtBYGtk9Yuw58aA1uV41VVN5iaQvExMYrxAD6t1eeSiorraehF7b293DMck39QXaKZhA8r",
  "key23": "5pQhUpsyo5SyDXJcnAPW4kpLDSpkhAZPka46SZYnSXPCv17XerxcKWPBg5YPGCqyMCSeyWjUYbakvtbhWFpXgKi5",
  "key24": "5QVEDTsiQ7T3Kockz1MoF4YFnB7FnZutFVTze9spnsji1UQMHF5tdNKEX1xMLr9wrefjGxYgRMJ1efwsYfbsxxgR",
  "key25": "3PQ7q7MCJFoFQ6u9AELv9sLUPCJfQrrgwcgzaw47sd8dAzAG39rdHfgGA138HQun2wFuqX7q76ppgnhW55mbX82p"
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
