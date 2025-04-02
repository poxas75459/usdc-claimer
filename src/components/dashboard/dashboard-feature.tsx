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
    "3S7rXGXqfsbEHv334YwSnyxJjLgLDZFWB639Vbf1zwnRo9ShPm699JT15NHTsA78TwADKDywH68yZZ4wCchBBiEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NTug2ipeEYVNuQjYnDPYyhSbpv4ExSWWeywP6xBCui265nSeWFnJofqiTZNatK45ZanPPUpfTaAmGjbnoj9Bx3",
  "key1": "4fgUh7wLgFyJuabJyuWMDgKCWgtW3xbGkDnvc1yKVqgsYrffKbA5zrTPBwdGQKXgDWLnwQX3PX4ge4wM954trQ6D",
  "key2": "7ZibuAQVYvxfN4VHKFcMsfukZLcr8cshS63PdHvbfZADEFkvTDmDjyJTzBFRgcE8MGLEp9M1FMLyvts219XzVmd",
  "key3": "2zSLLDSNRJGKsbM8HsKoPnktcn3kktgCjvSxFLWmdqaouxpd9hdYnjFb22Gsyszzj8VEH7d464wzvDFqvgoNL69e",
  "key4": "2Nz4owU2kshnFwqD1YzyyEb9rtK45vXUtsXbdCDWpxB27zqQhYXCF37xSLG7nzNNghHpvrhr474f44Ja8fxX4ihU",
  "key5": "3ircgwRv2o97WYosb2K4ULkkRjzuJJzAZDPuV3bSdoVxyGXiJBRMkNHY86GyWZxXACoquojrW6QPTT93Ux365RNZ",
  "key6": "2PWia5bfEEacfxYM2eYYVu6zuqkY66FqBN8Rv8Fw2Qwin3gC6MibAJSb9TXoeRxYbucQeZ4dP7PFvsfz9yGSDkxz",
  "key7": "4ucPYLE1HkTe9nY2Yg83KFwrmp2YZ7XpRqVJoP1VSkzaSv8pbCp7favp3xybspNPcwuoMt8vPD14AExScifXCggi",
  "key8": "5A4UYt4HThUnp2NZtpgq6AiUZ6VeXc5pXrExw7nrcEoKaK9QCckX2CZpEm1gPrgk2xKQny8x3UcQjrSq6YJnyfR7",
  "key9": "4Puuc2apCr7bGjB1bTTCwpo9LBj4f67HnCjY364hHSv16r9UEiG4T5Af4gwoh8HC2cDQQCaZ6SZqJYUKhW83k8cZ",
  "key10": "27nVw4NADeyyem8fdnLLvMmkvCqn8k8amfBk9yfUqSXaAwwBn64jBSSMGWrjmk4XCxsuThbytPQMGhcP4s5FfMgp",
  "key11": "sZnWWfzdrE8x3Hc22wuxB7EnBEo9LpGhFng1tzwkjcwqRPkq2xhztDtksqDXAJ4vQCxgC7bnyJsP8idiWnx3ULL",
  "key12": "3cMzhTUXKRHzwVJM7FW1Uc2gQFWwHy5onDjF3ewmh97jnZgP9QHCpyoUwzs7Wr28bZT6JxM3k957EKp5zRA3N9wa",
  "key13": "3eJxeAxewJFYUCLs8WvYyLdWoM3Y7fNCAR9NwnAP2J9YpkuZjBcvrEs9FqVzqSeSScureryfYPg2TR8gwRn9scRJ",
  "key14": "TzYdJ8AGcQP7XLbdwKFwxibjkP76AXz4cKKiBRycfhf7yHP7gUg2ueYHmpxtDyd4DopThDDUqXJQDZT1u3kegfQ",
  "key15": "4va9jhfXyhnW2ES7NHDyZZKN8Dw8K2tY2qi61igXuw9F8VX7Qi2C4aDu3PB4zJG32dWyBDEq2kewmSjup1YppKwb",
  "key16": "gSq8Sn6bxK1oVPpujxyygF8sjnWB816UXHN9qVgXZ4rKVEeM2FM4TmHMbyWCBbHuUhHk9Pg6JZkgkkt9b7WE7hb",
  "key17": "5rjf8dCXHL8tT8Mb4pNTWgUymJsavDhobxuozgQjjEoYRDndfgJ7LyZsRykinTuXfcuLHbmUP4HGsVyAn6JwCQ9U",
  "key18": "3xZa8x2C8ri5DSWS5p76fWtwnBBHu8RCWup1pewR9FYguxY9HoEZK4bJiSmFFPeMsRfh7zubpLNpvhL4Sqsua67W",
  "key19": "49Bo3TrUvCXAZMvqVwnkv5ddZHceCdYQg6R7PP8Zz85N9amBT5yaQHwXqpD96AgNp2znyCzQx5hCvtEouWhf8b3F",
  "key20": "rtRzCiQZaU4PEibSVgk8P1Zd3aTXSZVUgvVKDzA8UGWVBpA5d8jiJ6jT4mYcnb1qcYMrmtKMbYLTuu3ywQPajTo",
  "key21": "4vH2yWJEtUkEJ76Wt84vmhL3Gz13WY6CNFHwciUxEqX4VeTf261XcUCkYJAGD1qPg1DBi6yKzLh5f7Pt7icCgRk6",
  "key22": "2qT593yhhjJqh5eJF96zE4iAeRYSixNMTvABd2YuYFzua8YwKc3Mzfqc7rrt8M8DJR5nujjXXiDZgsne6pxGXASd",
  "key23": "4UkE8V8Ve1u9ijNqV5aUpcxRD3doEGBsMK9HWaWDCeStEUmeRchi7BBW6HCNZrPbKoxJFmmAvwMQKBs869gLLSHG",
  "key24": "5F2B3kXKgQaHCbnJvLA61CmLLWxzpHWVLNjuhwCpGnZrrihiX4PATazHu6EC58JTm1oU175EpuR6BpvN72S4QdRM",
  "key25": "4NRMFxUUZWfX8WLvRCghMuqHGeQVCKXfvG5TyHTdpd58wGT9n6vrtNjGXTunRDKnuRRk8bYVXDPwok6Zpg6bfrJp",
  "key26": "33q4mTT3xevSM5QwZgDbJrfbMpc3wuccNEXiARFGyDdfhizJCLiwiisUkYT1hSiqpnwfVMj9syJB9ceLuNwqEAmB",
  "key27": "2TMPe7Yf5dShR4ZzV6bYLWtE3AgitCxxLZAfug5RyCVTHuSbpib1aowkcFZsuVCFB7sbyBnMh18CQmWZQkcfBpBd",
  "key28": "D6YJT9pa1xdC84D4R4QC6CgWtLgNBC9MnYuf9Cg4eskvAsHmPXpoUguz8pkK8qDQX1435byk1hKVR7KR6UbBTyG",
  "key29": "2V2paBaWmXxJui8CJqrgKcV38n243T86WnzjWkNCRRp5PQ9Up43jkckTkbs8fd2RwMVavujAy5he7W4hP4V4Ah47",
  "key30": "r1B1nW7fozsno1TyCF5GqxbozGbJzjjuKDjRrQVdcWb7AGBdNMT1jAVuag8qVVVXP5r8CxKGDQCBeHYh5VqCpd8",
  "key31": "4fDUz2YiM22u7Hww4Vnu3NgyD8QatzyQw72EM9PKnHBgX2TKG1LAEmz7JP5hwbbDZ3aD5mRwF94ANNLG4ZB3bpmH",
  "key32": "3JUrovAcCdW4jMmWshXMywi9Rzexs5pYmXyyXVD99KiTcpuTMUjV5cQB8aJseNNg91Y7es9dYvA7bgFwV1hRB3pT",
  "key33": "5XC7SW7wWfTFp4pkPLFJ51huKEPTYsxrtqMPNzu3oSRQUC8iRTZGaT4tdqQGkLDow6eppSenqPp645mGiwtv2nZB",
  "key34": "KYwknwcY94iAktzEDXceJempzyV7zxDBR3dfyqVggytXxBc6JW57gUCRt2p5yRP9ArUEkdgjoJCYEMoNxEZWXvX",
  "key35": "3tFH9JcMHHMYUcQpDoRcFR2P8CMKJYVZt6VtU8mkv583SQ48S2LDpZT7y26qS93iu5Zv7ftpRp9JRasw4y95y487",
  "key36": "4SGfXJjekgjTAQEPgqxkkLjxWbh1ZvC15FYh92CH6fi3myVRgYNbzQ9Mt6cajJvN14rqx3W79TkiqjSd3KMy9DWD",
  "key37": "4TUgd3L9rmNi158uYMnMBArVovjkubBeSm3LANCHVSmHgZPRsHbDoLRPnjEC2zCMtoqRtBuFkok4ihYMW7pzUEDZ",
  "key38": "39eVDKSnSZUtcKUkHNrpo7bDeWjv2KCcjdVZspYbwm8ARPXr7ZCaD7R7wouLm2pJRXYNWfUGcmhQP13VoAC3MYbT",
  "key39": "31gjRfBUUR9qVp4H1kYVmCcnHBEbmYr95EEc7r84jkD2MwX4KtjUX7cD6a9XtsRaDaYwGbFoAZrhqvwoebUfFPni",
  "key40": "3i78MAT9ULkcbpz3NgXD7ZG297xFcDtXJADHcS6GjgY8vGMDKmngAXPpmMMYBYURxBqBqKRsSTXh8Gk2j86sKJPE",
  "key41": "3kLHJMYuTUQ4Nn5RxobpxQNBuupHFSJQzarQDYZXdnS9eQzJb42hE3d478t55LgE46STq4FPtj67E8yTE13TQd8v",
  "key42": "3aq65tiwcsZkVXUmBnzd6Vrq31riBNkmLWSuhEAkBdCxSonrSRhJDPx6xJVhvJHmXTtda12PrTzkxLxxTtap3REK",
  "key43": "2bLpZHHY1nrWHXNBZJWvwCPRezQYvyKzGyB92DWzTcw77msExGrQYvopCwTzkVSAEdCZz5Gc3jwgaTgsxDRny8ET",
  "key44": "5ZSPo9TbKWdopBB5HYfGW2kdn25YTRnu6YFBMruozhcWYgKkntAnRuw5nhH7wpt23ogixBXbmbdCF8niGJWZyFK",
  "key45": "SPhcebtSuWt1zaRQ4GRKAzUgbMxQB6758voGSgCTZYA5cNKYFdSSAJjzs4DwncqVuBUg5qhBmECsAGNtj7V9hEt",
  "key46": "5sPMcAMyxXTCEYdsg5sfKZCDbohcvTyfNVfQKtuVMozbt7BK9vudvfdrd34SqZ12PbhHZYUY5N25nWfbGZJBk8vk",
  "key47": "diY7FhURyMrN6QNKH7iVbAyYbBNkYM3cNCkR1czPAA41jzT2Cpz5qWf8fut8xuNYxNW1RqHdRqghG8dBCqcg8pY",
  "key48": "wsKUDdGqnVVAtLGaS5pKsLC27T8tAavvZ5Cmsj5biRZHcJGHLc2ZsGp9bswjCZFpdmRVLu53DhhsASYmAcs8V4t",
  "key49": "5XMBAPk88nVs2j3bdXPBZpwCXYT3tmHoEtjXKsPSVNgtGgR1xTqyjsU5n2c6jW3S7Ue5Gs2FuhVPUHbyM7mDYYEn"
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
