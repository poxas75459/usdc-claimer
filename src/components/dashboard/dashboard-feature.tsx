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
    "2TfheEGVD2Jp398mAFm6SDTynWSYSUFb9n99jXQGk32ztCswtVSPX2q2UpBBgzzUTyMAXNP5io9pRsiRjMxMG4f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RjmBiMVSxqJGykqgDJZVWgiLAmLuxMQJXHQs6DiVVQcn2RE5C5bUM3LCynyropsXwT6KgYjiuvL2ZsWEtuNmfzb",
  "key1": "5EsQifX8q9SjRntQKba6TpGPFsReGiX94gjKx62qawDx9CJ9rSdjhPrMi2FmbZJcqrKj9b1zbgsqycdfE3LcmLJ5",
  "key2": "22GCyJAdQT64TtvhuCjLL14MMBk4CtJh957Pwc7DXZZjq25BF7gxMAZWCn1Mrsc3JFQYG8tvY8FGBNYjMpFFpqtP",
  "key3": "5ibtkg6KimxfEK9LDpM8i71rQhMBdk3ir5kFwfaTgUwb146tDqRmMHYhaZRsSnYuYU3GHJb2rSEhjiNP8hgz3mrU",
  "key4": "5JHpG2FcktgWp1SQyLEvZpktYVPfBW4Us7gGTNLog4WYyh5fXdX6mZ1K1oS53QeX9bg29YcZgm5D3kjLqD9ADkFJ",
  "key5": "4XF8P72whv2fgbnLPJNDQVyMtAJ875ejwpdFxt7rgRdJLxS1uxTS1RNW9XJPYDHcv87rUZdFFuf6LcZ6DJkzxZd9",
  "key6": "2cZRQ2fpg7eaMtwfsjbrbX3E4C6kcV36wyWeH52sJWgATwzn8YpXP6wacmKRSmFKLY7u9c5i8ojTB2QpPPR4PXKC",
  "key7": "e62jfaZeZrxG9cJeXSdWPCapLoNKiWBXidFPMAf7xhGYLQozZciKUncwsTm7f85eHsuaixvi7BJG39vfu5Hmod3",
  "key8": "3RgBNEf7QTWk9oGdUZHArazB6aokQtmKPFgoA6TUA9kgXhu1MAefnK4CWFP3YwBRtyxNbZQJEdmQgYfHvDL8cYTk",
  "key9": "2At4nLmHDvHMo9yK2W2Mi2BL7ynxcDD8oNBSQBdncxiuycCy72DKRDP5ZBZ3FNSfB1fBZrwECf3sF86MPG7JyjPR",
  "key10": "2JxSJp4c7PBE7aUbojdqnvAwWTPiH2uMYeWDuedUt45BfSymM2Zwbcxh68wSet4zHNYYx8bDuos48zye7rwa2w7S",
  "key11": "21A7kbezb7toMJUV1DErZVTHmvHyT1UGWQYqXKFgx9GK6S7YuzLzVsD9qTsmp9a2s9UzfuTGMk4Gxexh6NbbSPNu",
  "key12": "5GSYNWYTwdM6AA8UbL6yFaqbjjNyfu6W4DDA4kBDQY9b3j3b8nNWidAtFXgdGcvFPA9NP16oL1LQ3Uq3u9tvpQVd",
  "key13": "2sRVsMzknQ2DEhPC5K2395g1wXN2Fk7zz432PFELdUVnkjC1vrpP2YVinPn3nxBNKp1tp4XaombHmhT8dZy5Md2C",
  "key14": "zC8zWWC4X3pTEwkcnjb36Qt7iU25mXqCPsGeQY3wxFJ2KkRHtjjWa2NQzXpnCe8KfH6bkcTxmZbajLrc9XcJd2g",
  "key15": "3iRo6ngfbRR5b2zoFNeKLXKd7qeTHDpSEQkQWtXSuym9vfxrd3ArgynYcQ9eVXt863c87KN241deShBLTyHZNZWg",
  "key16": "5cCJr8YKoKFjJLE9jNwdRiBxxcAB6FXsUXrrnfJEkzGgbgmCeB4abNPG3bpvUaTWVXkLSyCd84xsBY2XoX3E6xNa",
  "key17": "2dmbYR4Vyq3pGRwrRXdggkZq1ZN2E9Yu9C1BxKWPUWyZsVrTvZEHggfXgztAN5KaGswqLxvG14Z6AidCnHRbAU2T",
  "key18": "4UsCuwqekmC58xyemGvttHLAnyvabtTx1Z7aTi3ximKSLiX9yXv6BJyE1NMZhwYA2wqWqrQo5CT9x5sByc4Unuht",
  "key19": "3fJNHGJgL7NZ8Tdfd5jrEXLWHHUXgvgWM38vG1P4kumc9a5f3MuqPAuf2jkqRjwYTCCt5xgSBEa3saykysjCTiG7",
  "key20": "rRanfXJjoQbpbvM7x1VCfLUBKCo68SNUpzxphTuBDEDwUsgocMFbdJJxNoH6mW296wbfVW8YEvVEPzC1AnbVp7n",
  "key21": "4rxjJFpLoZ4MAa2ewnu36nEMZ7YMkQzG9V2N752MBKRG3jP6iUtZ8e1eGyUQn8iuDm7bM2CprzJcYwnUJ4HskDUb",
  "key22": "2FXhdHyow8QMDD5ytHFmx2qeSGiLVRNDGjLxgMqstKChXw2PC9hQZJnA2cir7pp2W7Fay8YamF27iLXiJ3UokvN1",
  "key23": "5Fm4VYTN2TK1eveFzGinoRz8ebi4CjjPj9GMgrqm8mLemPmdy8CAUAXmRxxAArTsqyewQLb3WtXo99r9rVrjX69B",
  "key24": "4A8jCKpY8WCaYhoUia5ZPu2nBYtZHsdVMhoveBku8NntcmeRLXXLqzoViL3utnAzwHSZmXam8YFuLe1iC5ieRpvG",
  "key25": "32EbX6xWZsJDuSkJJPM44KsKYfUXSTuw1TENZsR2yxQioRDTbELLmysSgLw9z2vi6ohVCo4R9MYgPuqDhP2PBPic",
  "key26": "5YttqtSbrFNBn2bAG6Gt7hjBU1JW4aPCa9yEzJEVsJdKq2SawajMVR8nA3LPDAJ3UiZiL4WDg9Fg3nLA39rPV4FJ",
  "key27": "xebLtHdbpD7KymwfeJuxK3uoSX99rkjaQb4QoGWQk5nzJ7f6mKcynQBBtBXaoDYcw71AKH58CGSazueqhrVHuSJ",
  "key28": "3BdPzC8Q5cxULTeg6cCzcjsUVWJ3pyCJbu2MxtvxJGt3Y8axxgF32iNeyhMVx2C4VJWFvHkRxYgb4NbQxdxZ2LRk",
  "key29": "4dFXdmSWwX337LgKVUHVj2PLC42yg8rZZA6foFpScAP4HMyyf6fvcipbr1EDzoP4J9msoToQATJ1ehQtgaDUdjGu",
  "key30": "5fg3gRt68rzWmhH5sd3ZVZPiRiUiex8SGrLoeNCMh7so6qUe1J37xJjFGa3zf2Q7W4HpFNr6QfAvVj25FJBmoX7R",
  "key31": "5o1ZwzecDMfdQB7XjAZbrqwFtr1nEeb2NYGL88WnFBmXqmmH6fiWGctnAkr1E3PLYsHVHdQxSA7dJmr67dE7H8to",
  "key32": "4H2T62nRqyNXaYR2rTowfTmg4yqehdUjKTj7bGaoHcamguJSgFgPhzqwLr26KPNuxr5CHnukSXzF7GK366MVzfCJ",
  "key33": "3haDQy127qfLt18VxE3nZok5veww45TVRF6qMBCRBNrp7yQobmqQLUiPoX8TuRbdzsSRFTuDYSBT1vEppuh4UBYg",
  "key34": "47Bvy2ybXfU1aGFm5RtyYWzgri6n4Rdxg3xaB3oS9VGnFKLfruiZnH38TLixT2S2JwWaaPQazKJsHq3NghrXgoq6",
  "key35": "5iDJz7MJEgAQTSTpnCVFZefoU5uuM3yWt3VSYLourHVHLnfdUsEvF4RZLH4pXcySvEN5quXbWEc6xWttrnH9YGKM",
  "key36": "5vUJe4LaufKcJEfknvGEGPPoECRg5mKy95YR5Vdg6oceMjdTkFYmbRoysNtYZt2ea8AojAkyGsPuvgUgACdx6te4",
  "key37": "59PKaBwBWHXhdtuhb3aKZNyvdYvGxgpprXeyE5zCiWUqffRY6dB15fE4nKNeBw8Bsx1fVUbpsc1UCMUCGBvNmBjy",
  "key38": "3wsMs9QehoAXZ4zCA53cPnjdrp8DXrVifPqqt4w4X3E7z9CaMtMjtxkWjTnoEQDV2aQ7qxnXacbbrEHx3E9V7qKV",
  "key39": "31gLvqznEtCJPMt87Eboy1NEkMpr2WYkKKRXZs5HK2vuu9e2bo7i5THX5MNzSdUgyT4kWj7jTFvESmZhaeiwib4Y",
  "key40": "Bouutah6AQumF2vdXVkWCpfzWM6XsoYnviANn1trkAyL9z3rYyXPemCHwGeXF1Mf4yAZ1VHFyr311UUQZNT6iis",
  "key41": "3KKJdEmC9rK3UDcc7xWSpk4A9Rw3FDWbZvXcPNwUe2S72FEgJkWACgVP41MpkSCvi7ZVAgL7ptZJkKAadjC7gVgh",
  "key42": "pKiJDqbq7KM6zty1J4kB65vgfS8L7mzsKRaTPEXfntq9bvpA2Wm3xo5AJFPLi33MfWWuoUVJZBYPV9cKM87pvJo"
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
