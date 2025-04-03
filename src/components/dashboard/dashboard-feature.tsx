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
    "MCnTGePBhMeFc7SvT159k4Q3K5fzL2mDz9uNo5eaAUF4Cw7GFKVeKQ1TsAEdfdyHvZxd6HukPzpBBdCBUbLegAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h47MjHTCqzyCVjbZjDGU5HowHAaWi8oGMFJBqdNDA7Z1eSAMXdmAN38AFZcwP4wKgaSm9TMcb7H9gYE4daeuUwW",
  "key1": "2vn7wQ8CQBscECU4jELp4yxxcJrDM7CSPvRXjrsTDbgnS5Ma8CZ7rZhVwnewUhgkRzt6paRzqymYD8UT6PLTUqBA",
  "key2": "4pfKESz9pwnA9o6QpBNHhN5afA4VKDbUTTkJMuYuV87SsTN4SayYKzegGis5XPKxdMQqtCqbFwfFHvNq1oFaSrVL",
  "key3": "dtiMGtiN85eWh1GNtjDtWVg6uSEs4gheQerF3zGw1h9JnWzWGx5VgjWdkveJMWZj8jDz9DcKve3jq6fMxALybnz",
  "key4": "VU3B3e77kCcJwwAVp1TL6BE32n9xxFt7wxZRNujz9jigr26QgAetyN2iKutqEnf5XxGNbtGUR1K53tLN6AqdQav",
  "key5": "5uMaEcwywyWHvNQ9pvrAdKv7sgNZEmSPFUkxLmtYD51JA2UPWYjKTgYGwHN5EmxEiLPsGE6NQYPwshkH8nJ92dzW",
  "key6": "3G24dT7ZzhAVsjvj2G3r9WaUnprR3eQJ3HW4SmZ12s5yZrEJRwFd3hG2eccJfvVWLxuJVFpJePzka5PCTzDhXHA2",
  "key7": "2FWe79n9ncZ78xDHFhLh3kmoTMiGJZuNigSrKZr11SaMZq7Hv6GDo7JeU157crYZ3bCEPWuDQNGUMqGLi1TBGcEF",
  "key8": "3K7bbAHxpiscnbyN6rtPQLkEmpENgvAAwdfgusCxn4qjVUTwRAmWYt7iuZpdXB8wrDK3GcbGSf7HNKoz7rGGAyus",
  "key9": "2ZQT3YNw4hmou5fcsdkXzFsx3MBPWxpBDcg51SmR1SQHWECGy26CbveXPfwVCiXbZEeyUHKeJEKLuRx4TwgdYmvV",
  "key10": "4F8eT1UroZjJ88jNgbfy2tZmuPNRB7a9GnVvj6k2HqzNviyrAnvH6fbxHpYmyjs1JJWeSXxLntejS1JFMRyTx1fn",
  "key11": "gFVepw7BtJqP85u5wV71GbkkiK8JGsKCG8AWVoXgcBxRHvTBDmzozkS1DUh9AGKCxYmZ7XhLwLrT333CrTQHiW5",
  "key12": "5u2ufAAZboRY6pGpoYpk6HKwuqeDpDyyMiSdevkj7Y1kEmWjrdtirSeH2hqChyZhezSKH2uLEFk2e8XWViK1Ebbv",
  "key13": "5trNBoMGSmVTrRzYDhdB9wm648ZCkDgHNE6sHMSfn6wuuWWmJXwE9ER2U8bnBxJFKS7KpwmXpRUuzW5rSqTc7icz",
  "key14": "4yFSMytENCpDm2qMhivqCJ9z89BSXRuV1iQRiHY6TKcSYeQatKduH2CcSh5Prn4RJUiuLT1wwE6c2e2FtEJ2YxKp",
  "key15": "NrmJ2wtbrneAVLJQvFuwyYLiDGEY2z46NXbF9FtxRtG4e9ucSkBFkT1WrJH6hRi5xLiTyKJZH1tLCGsXdWqV5Pm",
  "key16": "3PWQqjF9kyuUkB9nr9r7WrWV3GkZvhEYXbxPhnZyMauXRDNFFNBm3yb4fuD4vCHTryy5avBqk6UBdVfX6ni1Hn36",
  "key17": "31v1eHievwej8JiTQy2j2PjVvfdFrdwSZsbRPUxmka7jZF9b2S8ui4GHuq4e91FZb8HpuytubAXDPLezwZiVtMy",
  "key18": "WoymLTd29XptvppwBRp2fem8MWJHnsdEHqy8GTxj9hpLCG3LwJZzxheLaNC8YTJWGHsUR6EXsitcxqvkXacTBc7",
  "key19": "29DohB1cXvmmdfApDNRVBuYsABTx5SE1tVT4qLec4sCed3xoyPLrPMJb8riDXY4f8NFPCpb8A9a9HLHQWiw7ze1J",
  "key20": "YaAeZjSKaL7N8grhgP3dquuTTHmxmAhkon6oBiwUfJWAPgNX1FNRVgD3Sad4mHfYVTb5Ykj5eS2WinkdDohdvAG",
  "key21": "cohEaGj5JPNH7DtfAyLQM5A6jk7qL3PmjAmXKHgv3oHz5XmiXBoja2gwvPbijQk1Sds9UpdFUUFNcxX54bv556t",
  "key22": "XuXpN7UqobY2qoxNikocvwxF97dtdTZPZAXoso42g597TAMfoSmNsZq6EkPYae5ooU45JhRain5c7M111hALMui",
  "key23": "EoGmEAnruoqeRjKhupE6oKWuEggwAMzs9iqwLbZ5jQfdbxevpKHmzBVyJYaT5D8umVj6mYs56JYBtrBnoRGRh5y",
  "key24": "5PF2F7C9Ci7cYtcrwxiRvdWMoUHoRkUoUw1Vz2iGpnuJNZze4qDmakhmbGymHoHy4GeDJEZ8AVZfNKTTp3NnhZbA",
  "key25": "ah9KtPoGcA64Qaq4Msom7fy99No3oaRrGiJTZbTQaUEND4MiS4skq7guZN4S149XCwKqFwwy1BZMYRBQFB3cwcf",
  "key26": "3oPFSbMnntqRpyNrknfXZydUoFSozrYm18wFu3LaFNbFpNrn9B429AKjdmGpfdDWbCTkqjfLQn3rtjB8bdHECAJf",
  "key27": "L7T8pvXVFoLNceavVDK5GZMgopKzbKCFv8ttgexYG3Zxko3ygy1vx1ZbgVXpwLURtNBNTnAWw9bVpaWkrMKnf1m",
  "key28": "42CPqm1FGqQyac7ka81MacSw662XSS966aN2UNzNLYDWwSKHMUFUqV9BQsfWHJ9tZbv66ZJ2Lkzys3oX7sdrYoi6",
  "key29": "2SdYSZToW9EcxRL6aVVH6EXsNuye3eUHCjsEh2MUchrLKPakFJehWRFtdwqmP6Koz89SnBFPejyGSD4uguHWbLrA",
  "key30": "125sbW8j24t4ro6XehcpXaKLXDkT9sCYF8qASkkZX9TrLLMBa7xa89Xpwv8P1AV5wxk93dTaSLuqaqBd41qzL3nJ",
  "key31": "4VKsUrkKABR9GLLJ78MSoubED2mVEWoQqWzy7ZGnWUpHUeYj2raT5kTFC8SXL3UrkkCrQLFALgmchxqQfunTMaSk",
  "key32": "56UJh6FMiwHQ2M9WFDuJyyUkXWr5w7YVuzgP3dcTxP9shurwVhXyuFCanS3xP9Ek1T8SMwys9zoqCToVwz9Hjyq9",
  "key33": "41qCdqQPP38fgrYUo2GzRsb3DX6VRJoRUBLWpnHXiHFJaRwHDooNafDYoZ9FqLDm1LsvVt1ixQy13zzB22h1qoub",
  "key34": "3h5G8J8yNgjGL3s8oUBNTp17V2Ct3A6J2ysRE19Vk9b3arEaJ5Sqqc5865hmtVYfj4gBweKX3okFzprHobFgXziw",
  "key35": "yCiBBFzWRYre532YeCgnJ7yM5bdbR7nYhVxvU3f5iYKqmmyyLRjGYykqyez3fnq7o3aET8nFD1wh7VfpX43esZs",
  "key36": "2gTpvT5me99kwwBmi3k5BJa5KszNRv5wBa9ksWsorG8MNKBy5ZXvynVGrHCwde1qXb3qxu9yLZqbPvkjonPZPUfD",
  "key37": "pkdMceSQs839DwbBkUJtTKKRsxyfoKCQiDbECeXrnD6un3wJfo8ZAkBYfyRw4VPz72xazsg2X3aXskzJC6ekvNA",
  "key38": "5YsWaKAgV3vUZVrn4CrkT4w58614SutXLcczFcLoGjMq1h4tevjSU3QxeX4V85GtFSMfw213NFpBGTVit4QybcCV",
  "key39": "2dkMz8woZGSRod25nutM95Cv6W7yEy7Z12T4o3C5oU2WVEZtJ5GX4upeTKPQd46uVm6nMi2FJyUcd1ixazLdd9xn",
  "key40": "49Nnh2VxnmVuxN84WJWvn3HE3ccQHXqhuwQn2KWHCfYinjQSKnz7oRQN6FbyNKQ2wjDnW8wU2EEN8NxoqmfQsdzQ",
  "key41": "2TrwBk7aC5g7fZrxPMZWYJopiinXpYXqX2q34sfUVTUcN9mgH2iJNfWdKK4fMkNxZgYxpYw4rKXCphysgLdjZ9gC"
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
