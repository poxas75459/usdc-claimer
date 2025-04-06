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
    "5fEMkRRAgG1nLkVPZwsYRVFsM355LW1iebHJYaPnxbbPH4okzhJfKiwqamPWsrZTceCpy53zDeu51xDscng3T3wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gZtDBX5gcJWMoMRYfvGq5NjFm47nnLhXCwNMAxDUGAvKozxyyBDEw2cbYyNc2rESxUACjt3DXWgX77oZcsMbxR",
  "key1": "5KG8Zs1cNTtRvym9JWEhgPJWCkaHkJnTQjH4C3V7ttwGz4uZbdKMWtJXYSWpLs4p4izbkPjLdrfLU7mQPvbo6NBF",
  "key2": "LXT6zrPQv5PGbkUzMgpvFJL494zt8NwQuQRiwLtq8jULfkBy9cvSS861zWUbJnop7sy2jjU6dZMWK3tjio1sG3a",
  "key3": "5L45RnWZcVmMXzW2LsLiNVeC5q3LNjgqnEuK8crYpTdCLTLfDQTbiuVJ9wctiuttZfZRKgcufXa6UhfgkFmwMxiF",
  "key4": "3FYqY1msvcqSGSh7xHUtYPJ3MAxcFB9szNbQXfFhv2MyET28iQUKgAEz8BxEm6xvrT8fpH9Sd7sp3xfPE2RVJAch",
  "key5": "3EeiT1cf8zNstSXqdQBWB58D2Wq6WytiNiko3bRJW9twxxGhMo38NuFydN5GrGBUY28dP25aPoizdLA6FuWrjuKv",
  "key6": "3rtPvwCqTR8FdTVN2AhmAoket5YQCp5Ab4RwATm9Z1sXEab8CoDvbKjYeicQAUQURE3WQQcSfWFvEnxZCRjPshLy",
  "key7": "5RPLJ85p3XjYo7XKgFBE2dLCkeLt5NgNczRCUcvpDmb1zR32iwq7uhcYai99Hr5sbtE42f4BhFagFe4oKmTXD6B7",
  "key8": "4btCv7Ujx3zaqBVhUDiseUA1S71FBgAKfT7BAdQRgiRJapQwfyDNW6cc3EbtrByV9WZuoyNL1WPRHytCoxiNvnDA",
  "key9": "2xfDhzZmKaBSdaYN9FppM9KZPfiArs7tG8ei98J29YJKPg3inxLjwbJZEFnioEkPEPrB6FBacRMkLEwS8bjBof36",
  "key10": "ddCGick6tuFQRb3hJp9dWrohi3GXFhm7BgdqxtTG42MUG8cR9cryuKMuTVMLPynxJpzUKSw1c4mw66Uxzn9egoA",
  "key11": "4iViXoKHEC5RnL46UAxPgYWjJkZt6vyZTMphpUAvj5SayHewPWMn4p99ectvAfsBAKdh4hVHf9M2wt6kw9h7xr8T",
  "key12": "43H4E6nJWVR2yCGW12ze6tBWtjDxfLwE8Kk7tgYwzqJvPKQch6zjEdEG7Pu8c7Vgbj85Qsd4Ff6jU3joDe44RkiS",
  "key13": "4rB44T5P4nwJUJmWqRmBzeqy9fiaezjq8QgmpW1b4me4LBD5rpP9XfoNKAJrhxWjkA8fEe62YBqgkN2uUUmMPKu",
  "key14": "5fVzu24sm96MQrwm9XPCXaSxVNY6k3PHdRKfXfhxxhgs7awkx3bDgy51R5y2wzgWPJ75r19bQvit94NwGtaqqrCd",
  "key15": "46RHrwNBavFDJYaKTXFhRV6Ljx4eULszQ7ao8EWYv3NEyT56RjAiUbR9R7LKyjFyLMHyeKrq1zCXQD1TXPPK6w5f",
  "key16": "49TkG9Ausrwv1Kv34YbEKneiM7bS9gj3rGjUNpi1a1gNWaxfbd5cUujeCYFQJJZWVRK7AtT37gGQVH1FQenQxLbt",
  "key17": "3Ln2wFXcpacY6HgBawzCojDJuwUJBNvHCSX5fjHWAC5TQqcMJNmd1cDGcwhFybs17VtS6pnWeFTWEXpnAczdmWcu",
  "key18": "5FWu5biJEJ4Y9SzeeE8J4NVrvJkLBcg5rpA7n5yeRzkq2Squ4PY2mUEEZ5p5jVLZncG4MjwYa3dwD9hVN95U6q2e",
  "key19": "4XLwL3TTYzMecp8EJa2bLKVDRBvsXETwvUp8Gx4vsbQujQM2qxxkRdNc15tK6qt79Pupcpk8F8M4vTvKKyKxg8HX",
  "key20": "3Ut7UAty988W132HjsudBsHUfrFeHTXS58h3S6qob4563esXH2JerpjTKNUEhu7YfxgoKKBjYjdXBP7KgfbUxQ9T",
  "key21": "5NMChdc85xu5rJzps972zC5kpt2JHbiUhTRMqNedg7xTxw2j7jWzviqU8wo3QqGG3Y5Gkr5UjKw3bpaLVozAGrMt",
  "key22": "557cqZFrU8RXc2GrZEVaUdmo2pkqbBPpJwBCbwJAxEvYsKGuBbcHtouh6QKEjwAXGPTF65fbwJdChsSALF3GPbSz",
  "key23": "39oL7HGm9a5nf6konCViy4RxjBQkV7zGPof5ot4cXvFY2v5jR8pSEEM4357eJQ4e8XphP38gw1CSiSmqFyVyPwNB",
  "key24": "4uur4u9sM8oM7gDCPBtfXwTm71DcG2LGFQi6T5ieea1gaQ8zqmoXfMoTwzuuAuRt6bUTsnAxwY8wBVoma5wZeW7a",
  "key25": "5Ra2HtZzQRGDTzTKC7q7Lp4uKg7SeyHP9cYYpbTj6Cpp2ExCcP5k9xb8YUDH7jw9WNRhVzhmkeR7GNFg6UoLuppW",
  "key26": "3wLrZTjBoXMpQHQiu9CYfuWUbzSaqHgXFcHCfQrwqkGbN2xGGddXmaiiGr7jc4XZpkAiZJot6LyWCoc8JZKXkDvj",
  "key27": "5bMDqEFmQrfuA8izkYfHmN3CZzfKmieA3C3Lkhj5qSQ5cyouzEzxeiidiKceA86MKgC43Xw5pStMFPc9T9xSTHoY",
  "key28": "3nBHUBiFVGbR9kukNKpLiuK2XLxHkkPq6YVcXZ74evf4gYw495wLNNsnTvmkE3AgkJcWEcxQjXQdfuS7NggkQ9E5",
  "key29": "3pQkUDC9o5kBbAHPQCPKoMjMy3T214ThLyTvKPmTcA5PQ9hT9NTmkBiTsJikGMtTj3kGvxNby1TD8k9fvynknKss",
  "key30": "4ATvqwreMKE5vjdebbfShzR3GFka1UpSDpgFHSypshw5L85EmezqRXTfmtuPyUkkSF8BDSmTU7sD6SDVkHsRV4Sq",
  "key31": "4B9SgH3bYiefjvDbd8M1xN6Wvms8CSDiqUN4aaKuW7h899j63Af43wAGojZaSsDxGYfyxsE3mwn74BtL6WtqMqHd",
  "key32": "GbUuKX9JLvYT7bwK5RnpqnyYAct1k8sh8jNZ4AMHvpi6fTkisw65MJTYFo7FBTLzaqp1nfhWzDweYF8ft5PjnHS",
  "key33": "24b3GTkj9jEFTcHQ7DKHHoP2KfAoiYQMURRUfy6oN2CZbsWMKxTKKuTxM4ja4fDuvpNtugdSSmKjVZ7gozd7rPU6",
  "key34": "pQZ8rnBHM47TpZhcXAq3Jk7EAE5BW5EML3W5u1Lm93QB5DqCHpJVmdjKqDTBupTLdFcpNpCmPRjpxPiThotd4vM",
  "key35": "4RFnD3shdm5hz1bfbm9VdFUpd2FE8BFJZ9W4LhNWSfXZRMRQuioc6yXDMpbQmNwrYMSB9WT4cuFa3kVxVPExWdJb",
  "key36": "3XD9Semuvra89r8W6VYFmeYEKDnronMDW6ptAxm6sXb95Beiivi29sssKyFDgEvDKeFH9fZQrTpNYtLCDs6RfhYE",
  "key37": "3JHLuKZiMUJwiq5v3QEqK1X4NDwTLeFzrhCqgoiYyUVLqshLwQJUYHqrskU9FV6BCrELP8kaZ8y7hPMRF6BufEf",
  "key38": "3ZTSkhGfm2cHRKuhezuH9CG6hTBK6Eofnq7UCqtsZ5je58CKNKnwiSo4vczrDvBXbH3pk2WQ2PBTs36oxGyWXb6L",
  "key39": "3NwCFEbhoGR4Yazrbv1n4nykGRTb4AbER9jyXWvbfXRGyYfvKUjxEwjdTH5XfAsd8aZD7nABhB73uG4yhjqSdUnF",
  "key40": "26qEHi9Rv9UPxm67bzBKERYQLxj4M8cQ3iFwVTeiUaKPNM5mP1WbqcdCJqFBQpcKaVjBQ4H2zUfiDwehiWhKgv3E",
  "key41": "5a3yGQb1WBWyDgyTUePS6YrBgJc5EBHNPXxfo6PKTQz1bcoHs4XxT4ALodFGsyvzk2U9trL9gMvwniKjeAf1JRPY"
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
