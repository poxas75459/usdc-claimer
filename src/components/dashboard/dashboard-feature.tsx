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
    "3QTWZ49RP8jnjV9ULzS7XJ3t4Q7Bxi59TrZAxQcEzgTaegwkc98t8MPYttdXvdffvHSJWx1c6jBLr4aMTc7YbqJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsbF8S7MwWBmBrMWPDJRiPvEGtbCBAcnaeRAPXBthcravyWryuft9Wd71PuGG52oPnYhraeQwqU4zsxpWdPmqfn",
  "key1": "5SJpekcmty6ZRVqgfJuFH6LhqAWVT8EBp7rh9V5rAr547DERokMUzSSnG51x5kn9N3uovnFEgTJ9DK8SKzxaj4zf",
  "key2": "5YRmT4r82koHNLHgej2cBEz8LgV832ByjfQHEjuJJyGtwAs9bMRbrSphydW2JK5hHjmtvSnHKAgSdUKUQpMcF8Zp",
  "key3": "61aDTBrUScUQ6ziQm3wb1Bt4zSBpH6Yt2zw7amkgCUA4xC3rEVq524C3MJQGkRjGFPRVUianrDmrusTwkMVezJwr",
  "key4": "gsY8pb2r6oii2kzPgHHew7udV5iYH9GGQtp3u5G4X5ajU5SqaajWEbtPMQzU53e9oaN1amRRDUrZPW8ZAZwfJF9",
  "key5": "4eYHXR8VnxCoRvpxW9jobST39zWdY4vLXv5z9jG8sArMHJfLPVJZdYpijfRrZZCPAwvTMGifSpzUYNZfznchUKGr",
  "key6": "3WB1Qm3ja9bMryyiUEiVdwKMwmrC2U27b7fPxtwCCHcokvHPHeFcfwdRMqZBFyx3UBJ7qzD75MsyKGHT3gJKbLLX",
  "key7": "52B8ykgev4i5fvQxRVnCkADnmXEqf5VsSvuAVmHo7xViLg79zg7qN4tX3tqP7xpM1e4QGTzMFsud78UxDZvrW1NB",
  "key8": "nKwPoRKrAgkUax7ovK7JyDKi482crNUwKuRqACEnanM7rbLzgxVhqjze2SAqpX2RTCZCFohbmmy9vShgTfnkHJj",
  "key9": "4SpMfz6hgkGp84Ho31bTsPyF8qgi5wySVKwX11aZrpDhzguZNW8Z41k6FMcCxmuSQ7haE6cvdZJrswgK7u7yrvr5",
  "key10": "V3YFZ8uscgRkXDrvpMQ1o81wZh7y8q4XqjsHd4GSrsmeaKXasp5LBma4cK5rj5mtmGvM6A23n3WXh9AEq23qvAf",
  "key11": "NDKC6HaZMfozdr6tT4R7p6xnSYZUcGtPAWSm9PycoCLdS1pdVpLaVDpPQ3V2y6V4Mh7YmB67F4LdYYcnJ7Jm35L",
  "key12": "HqwrDYTA1frd6oVH4UCTiKoP6HGGaxBCrfDh2BP8LXbS1vkx65sdoiPTvZbKWXpMz6sJmi2LnZQSr6c7SnREQdn",
  "key13": "4v9JqJzrfofr1Z9bvL1p3CSPphTVfiDbUD5gp1UhpCgVWzRv4HM8zgBKxoqZngAfry4S5LXj4xcVuNXD4pz2SvkY",
  "key14": "3Eck1R4NGfStPrGbXoubwhw257sgeJKrqi6pgjEkDGrgLvwRhWfsiChhUrzR1Xo9MHmSdiDyQVuWoWHGw1kWkQxS",
  "key15": "28o2jvLz2kF9cm5Xpzfpej95ktbXSsUeuoD3hyhLX4Bvxk9PA8jzgtFPS5ANSRcDDMHvHzQCtS5sf2TYhwhuWtse",
  "key16": "ay1qRRuN9VU4LbJS8D1hkDeDJNWPf3LiBk7jVUfcAf6DVwyPkNC5xfEBvZrJqBHNdYj9SKyBPfc2knVyWdaPHG2",
  "key17": "5DAPYqmcz2THxD8TQtTJug85G8XLvmfnWVVMb7PAGeHJNGxiCRxhkjzujga62Gb2K5AKvPkFh4HGtiQMegsYD8Nf",
  "key18": "5xeo5j1DUsmNSTcWgiV2TDqakTfcntG4RuYCU3ZNLs6gdzJzFru8tkjrcGrxAtPSkGaHAg151fXGkVK2Y2uotvy9",
  "key19": "2kNbCxQo7ZpMb9Wem7cC7DRPUyDCUw9j1whAC4HTfoAvZ9AiCbTkfYwnTGTdet7Lex9J83ZdXXgN3AZMtTseMoqG",
  "key20": "26syjeNwZWe3kMXqg2JN6SqyfJkmskTB99xhNApgpm3e4nLuHuaeNnkNZdxmJ1Wod48ozsLkwBXozLhfPjRSqEMU",
  "key21": "5tF9kwaLNwuyiv7gSefxHLxT23b2NBBvpJdizA3LZbg6Mt6b5TQvVbm4GKv7ZK8fxRm1Q2W13tAynSZ3b55zst11",
  "key22": "YEdjzPGpfUsRMVB2qSbcwTDAFqH6f8vwVNoNnT7zD38DG6QqrEzTf2mVfhNkmM9xdYDSN3Bi7R5ejNaPsLQtWNp",
  "key23": "4Zr65D9cCpkQzSpCNkPdKnqYZskhT1HJ5974ARB43YJXVjAhdJGtcTLZf6xXbnSHNgQXavMkR6L2W6fxYmphQsit",
  "key24": "5vsMDnHKeqCqYGMdQmzLUcUWRS3NuvKvKLfynvSUTB87sV8v3PiB762QrKu2zeTg68TXQ7EDp2vYRuheDpcDHwiW",
  "key25": "3cRAJ1NaWmvEfdeNdJyAhXACEaaPSz77aMZ2yKXeXrMcvHLk1o5SX4veBhZR95fMNF3yAct1ErpVZxLbmMu2DhVX",
  "key26": "3ohAM2ME8C9o1BUoqsoSG1ReujTV9qgGZm6PSJDLCDTo1oWiPssoUBjkUf67noeBEZdqXNdsHKboR2LdJZAUkWXG",
  "key27": "3acZoF2j1zERSB146TWQNgstyBZ2nBgHbpdX1UzjddBycmeChcjoogSnhRHWphfWSZMgrFTvoZoQ1j44zVFPAnRp",
  "key28": "5tHepTkQAbegJzoCNeqCso5dF395kRLyFWiZvkroYFbz93BeFmHS8aQN6owgYchQTqWDRYZJPYZvLcYCiingxGhG",
  "key29": "5aeL8rRi61TnQ8ByjaYemZUJgZBAvya951SDVnruR1kjSF4ddTZbThSV7RbYo1rQ3dFFdhYujwZpmtEhpjXNDrBn",
  "key30": "JSnQNVG9pSNQW32dCfr3eemwxpY4gpYjvkHuN5EZ55iyQbxeyRyxdwiYBYqPBmuJ1Y9m75cfbLMo1z2hEZEC115",
  "key31": "3wmpcSpDDsEM4411u1mm7XG86yhAQ86sX24oK36YezdjAvADrPKryLabC5Sak1ZTPW9UuquVvN4gMaZxEaNSaqCb",
  "key32": "2LxvVEBG7F39WUo8mzFhsYhUvv74GgoUB2okeixLkuBpnUh3o1qLGNmQykFH6buBrd3hGeuHkSdkDkXe7GzB3wfD",
  "key33": "3wr9sZqHG2oWMjrHUP8TCxZ5f17uGHmn99Qk7PeYEo6PXkneDHVdW52ryngHapd5WrjKTy6SqZMfej6uFvWrXwZP"
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
