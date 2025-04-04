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
    "hqbzYrLQWkLwmQoYzKTQVptychd9ZHWnt1Fh6Codkdm2evGR4cigHYExq8SVnFkpNsSssmt5iYsSN5TDsg7QtB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rN7SHco8DR1G8CGpGxWRQUWcWjcE6nPL7GZKmNRNzCY5gjcd9cdH4sWJVuxzCb26GNws2M53C5nom8tzNS7yEy9",
  "key1": "NCAeEAu7TLfER5okjqyWVtu2eRtTnDgYULppYenKU6E1AJRTbVipN1oeqN25aMYMU2tGe7WzTQHbU8auokVUm6a",
  "key2": "2QphZrpmbWrWCKZwFjeNahVeCUPXGzWJEgstVDWv3UPYMzqBzC6VpckZP4CK7yRDC2BmJsE1xqPGGsmV4P6ZfUK4",
  "key3": "v4bckKxMBQUok7bKDk7XsuZrW77pWDpeMTtC4jprjwRSztcKF3jQetfKNzwXeGnKpN9bT9tjnvdXabJyeaLeMAC",
  "key4": "2S9skgKa6aXNpoYER59H3HS9z2Vr2KxhbuGjgCys4tBJPpQbjheEoZRG4BNe5RnaThK33XwuHWCmS7Z6BkkiHfVq",
  "key5": "3dUHWp8iar4AKkd3cTg1wKk459xXUWhTy5CSbs46A5jKakmZ8ag8B2RC1dnu5N8gHACQMtE8s68NQfQkC3sHj22B",
  "key6": "4uZBS3cNRPwY9TSd8bqjEp9Abm6E9uKb8753sRHUZ2c2ZZAWehbcHVkFoRrmFEWPLY5AKaj8fKpG2Kuks9bUmgPD",
  "key7": "CnNrEbHqZjLW42LJvDRrYdUkNyqpRbidMmGL3Kpua7oxqySDKMGpyLJtqeF8NFGhvbw3t5hy6io2icRzc2cqCxF",
  "key8": "3dkud6dsHx29FiNFCn5HdeH1HaxUn2Ct97MwjGFhsCd83Lf6m3znvSM4o8M7RPNaBR4rwHMnjZrhx4NJaa4t2m8G",
  "key9": "NGHTXj348vqEk4YGZoFQxozman9T2nA5QqaeccGj9oSqz9aFj2TrVmpPgJzrpvyfRnwF6aBMZhiuAPSZZijq59s",
  "key10": "39SvspyCaMDaaLVcPoxee4W9vWR2Jw8o6fejpM58Jptw3sJRTWVuj2nTSru3yCuCPuDz9K687ZVjwfmys4wRmZui",
  "key11": "JHszMzHo6NXxrh2GSG9MinWyuDQmhbG4ygeyYYtQzvaQQ1XAxxx16haKKukvVxsUEEcyYYdCYUNEhovyw1dSirQ",
  "key12": "W1RFpL7e6cpt3Ls1f67WtyKXEaJmThLXep6Ws7NLDaMmvkdBksxYeHKT8XkfcoQp94XxaKrWDrfSzXnNRyeRP1f",
  "key13": "2zpARRYKNoLKP44Z1jiH4TbPyXFtaR3k3JCKaJdB3HcbWAcVeAXcMbrdSgZLEvZ92uMRAbcSbaSk2eLZkU2yk38A",
  "key14": "5kUB8UgfzGY5VRpQaoeEzWExFsBXCQf2ma2yMGoriZRnFdxDyc8c92yPxuJn6p3hiD2ksRSTHpsMhukKJkkY85XP",
  "key15": "5JNUTUB6L1WZVNEe4MhVjuE2kAohAP1V4N1AxPJBFHM7epdvpzr2SZ6bV2fFYgmm6a315HoqAnyToAUMgVh5qvW5",
  "key16": "3BcxvftqUJwaUACp6BqFaMtvB3wr2EytidPUzH3Xe9cqmZJaK8M22To7goxuvq3YH1BsbzPgMYhwRBLvU9TdHCvM",
  "key17": "3ATE7FNffo12uGVC4YDhtShyjCRTfhLVr5b5WtHkfcK7GywHM2zkvUE5KsCnoQpCdLiumkeG8bDK1JnGaxDvYTA9",
  "key18": "4yZzHtdJUXXNSsFs5Eb1a3jjUGseYGXe3S5nngEKUYYJuMg5GfmJEoS4AEVpuBJuefU2JhXGync7Kx168nWwgC26",
  "key19": "2igfB8Zn23ZU6n8E1cYfn8qJhFhniQufzahK9r1ZSai8YdzvkY4PsqBrevEiewHVmLRbMJG2qAxPWQpk4L4Na99U",
  "key20": "62DsKSdoXVy1Sgz6dwDD9R1wEMJrnv2AbgAhZuoSPvnnF8osUGHFPJ5tQX79q7z67dHhdNhxfFVviWEJiGQ8JV7L",
  "key21": "5DZcCqnVmN8uhjBpjb88DmkxmVEPhQVHBbfxrFhT8MMt94fGo65A1vuH83CLz6JD4uj95W3anudgre7EdEXFAnM6",
  "key22": "2JyDudzMJu8uLPbgDFAKhtNp2wwdnkbsDMzkh4JbAQ5C7eJ7W47LVd3FpRhRnUDj5f1MmN5Tcjy3pmK1D6534yiP",
  "key23": "3djb18nKLn29bv7A8ocWZindUQS6k3JiHga5f4zB6H2c2YsKPTHrKVXcdXqjxaeFyBNh81MbBsDL5RLG4rRoRuvn",
  "key24": "63ZDQWf5rfFRwQgqf8LW443ehdnbLpv6kecMmrSeovEs4eCyGRKwFLjG7QiE9V27QAyBcbysid3onmkw9CwsKASE",
  "key25": "4v2FBezdGmG7w3TLnTro8QkaVmtewRftCyx8yAmmw5LARYikNxbjqvsvarWdnTDwLzBYuoHREqk367ESBVoVv2Pn",
  "key26": "4WfFT56VQXx3EnfkWPadNHx6VyZKzBKL4VAQyNKTrzFwv9NrBXLBCsCgjhAYekQfdQAh5y79vPx1mB4gQu2BPxNy",
  "key27": "2o8AKhneWcjLjJM4WzDqaRYxoWCABevBad3YNyhqfhbsdawPi22KGHp6zBV5hBJayUeeiptRfcqYkKWgentSbSrX",
  "key28": "4du1B56D9HHZJFSGzDzHmgwJGEBHCFhq6FxyUAYhg9LzLF6idiv4Zh5kDDQJhRbcV23KrB8C4MdHnNCV5dp2PtWE",
  "key29": "41fbd2pZGcGvFEYQb5YGN99J3LyYqJNrnCCF5AF2Zh3RwAdtoPo1cQaE1aQHJFGGT4E6myiFd1Dgo9orhAnw5iad",
  "key30": "2GcXnyy9iBYZ2R2DV4iiyKCxpxB5HcjRpFWf37EFU8AbwdwnD5K5oPt84fqgZBamFSdCBfwZcQJyNJTBFT5ETbUz",
  "key31": "ntYsKuAP8SSGgoagcQ6upDr7CUvu6qumxsnTZBft411UpJybbzumasmq71ZFHGkNfahLbqFph5WymdmyKYTpvJ1",
  "key32": "4yFroLYzbmWTxc8iZ57yEKb2PTvsEWMfUQSEhvaDtVH6AvJXvNoa2T2SPw6V3LqZnb8USXpE7sDgYx2GqcEcfMav",
  "key33": "5QVsJ3Qs2hU7qmBQLpx5Fhmt8a7tBavcAVuM6r7rH7ux56nCbVXHiEHnUdwutVBrSYCPyWr6KVG6KbmtpwHkxYJa",
  "key34": "2YywkZ3SWy6rLutWx86PZVRRiqcvRSZ5abdvBBgEkc3tGDnvxf39cTgTizXQginndkGbHSXwqiayKTJAe2nZmprj",
  "key35": "3fUmhnqZEX3EbYMqR6jkNdgWsvba9U73Dvqj4pPRoNperG4KLy5y12zGtYvZDtdAXaeg5aUaqyErs6LDH99qrmYF",
  "key36": "4iGGKfxhknaTdmPj8fEqyFeGP5hJtMfGohr9VKdBn5qPFbhWvdGH4z2NngAqjq4JgFTNNbnMfrVFyJ2mJbjvWcrK",
  "key37": "3jBLA82VvpbriW4j7Bfe4wrS8pTCY4BeKm537Cb6c4pYvCzjhbk4VTH3Fv1dDtdLqQnHWnU8PZeFZBMhjtAbMKfF",
  "key38": "3h6LybgA6GbosrCXkvHkZqJoikKTmAyrdcU625S9QzrTXgjuHbneGYRx5HbjgzTQe3zafGxBbpm9f2i1QQbhJbmy",
  "key39": "2VnTp8E6oFR85nozimQXRj95qqeqNk4YvDoNzDi7wm7ok3sEDxMrZHRVTvrGUEqBYAhB8csf7JKGZwQt5WuMTG5K"
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
