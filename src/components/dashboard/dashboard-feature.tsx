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
    "4B8Ln19QMq9eX7RJZbHg9Q4oqhBPHxdJ49AF72WE4X3V37rBo5ASERJpJR7D32vCC2BvLhonajEUNTcH8T9zAgr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56vkTpwu8uUZ4AkzL51txFYaHMHtT8JYBvH8d8xSKzXD2tHH3L2bWrC5i6v5Uw8HNPxYRZK528N8esoZQtVEYECm",
  "key1": "44Ax85ymrKXkDP9kyVwK2H1kW991wHvkitdzEmAky2m8PWGxPb8Qv9FNroo9eFF17ayA87asDWc6kQWGzTc1n88A",
  "key2": "3FeNDgMSK7DVHR9RLLdpf6JBshZ3ruUrC4DEJhurzqbgiegy1dUtTKZVnekmCYddWaj2E8FaSnEDHkzTSkVvqk5m",
  "key3": "2aBk638uXxomn6GSKfna4KjVVpGrXmW5YVpzpMVXFFdXA7R2bhMfPrRC9zLxs9Q1E8BWJ5NWaiCNDJBkPr7VwrB2",
  "key4": "4rqux7TaTvA29eDyPc1XstPHyYoVPRLEooqAgqKdhZoEiDjST4swZH2ZRfeFwFTuVBbEUeE3aWEQ7zg2zSc8CmL9",
  "key5": "4gs4AvXUKfQNhqiZsDYuPXZreRDUDxsKij2JWekzMnQdrpqWkQuYm79gBphbKNbwxqhgGBU1NnzqYPUffBbc1ou6",
  "key6": "4nVyVJajUySHaqNauq2tx1Jg695oi6tydJPJuegD6o6rBYhVy4c1VLXfC1NegD1uejPzvfFR9JkdZ8T3aga7JKRn",
  "key7": "opbTfB7q5BG5e4eDbz9rB4aX8PJbth8MDzmKvRehA4aXr44LugDQTg1DB7Mo2eBGVAEU199qZ592FqdgrY6ggyY",
  "key8": "3iKYvFfMFq9GcKbMYnfeoM4oBRMH7oQYCVbVKfhbwHGedTK5mijUHLreuitNG2QDz85pa9xpPkafn7Xk4Lkf6q3r",
  "key9": "4VdQDkU4pRubKYjm2P1MifSVqWkCZBdYxTsG6Qm8rgpTLmkZ6ubodDqaRetvHWfFAj7CC8TWJ93ERT1LPxJEB8ub",
  "key10": "55QnexU35NeoLzEhBsWnsgKEWGMkH51K6aqsaanbLMPtrNjRGHh6VnGepTzbPAtKD18e9nV23baxu49ggzfdNK9V",
  "key11": "3JjaFKGZv1zYkGTL5hVoG7y1tunDtGWkXHxQBKh7P9qULJxH32XRK5ZCDTdi26773gcSh9K5K5Xpy7oysmh2s46B",
  "key12": "3J3i7MTCtcHQ66rKiRpz3mrSdAuNN6iJMRaKLCH9KiqvQno6248pUMPjDTGKKJiKSN7dUqdM622n8qurEKijZ1PL",
  "key13": "323GnR2Y6Tyw4GRpha2WZhKESzh9LSqiWqGRbtJgcuj7sESkbYc75fccznCH2xA78vf46FX7ZkM8C9GpcyXs8sHJ",
  "key14": "4E9gM1tzXx8TswFFeQkj28DYnuPxY2fhQz8zkNhpPDeRxNfGt9baR7pKsZnrhFcuQoekTU1r1Thnd1bu3fCe3So7",
  "key15": "dUS26TN9YpiJGf6f2fT9Bf3VKdRgRUCJUBrQpedbDL1n1mWLxWxCoLeLEt4biVnRcs4raJZGXq9gkgi2HXRvzoJ",
  "key16": "S8QP4CpeB3onZjbs3sqLR5anB5z1c22UwYWP2Hvdy3qqqdgbehtNCmKzrCVhfURtyYz65ni8NeAx8fjQRv4YLQ7",
  "key17": "2ufQ7WRTEtUT5ZEnWXVbABgemXa3XVDF9JtXUt2MpJHatCvTqn3CzxcT9xSWvnfgFTVDbyqq1GeEXdYhjzhNSmCg",
  "key18": "4WHNsRYEJuLvz6NdwG5brEvh4Ca2HfqLBth7ZM2eBesYoeB3c8ST9Fy31PySLK7ezmhoaxZsN77RHuT6adUPiw6P",
  "key19": "2upAPLKXBVVhj5RFnSoJUPfMrpe3HeW7irdv8vfdbctnrqftx28SYoCiTERLL1zkWFpHb2jHkmTbi5wqbfVVfXS2",
  "key20": "2BQ4WS6cCxZme4FaN8pXPpod3Rjz4Xmz4RsZZfiaifEfC1YUMkVMVjU9uXzSTfC7ov96zzqFjdiXXw526s1GyJqQ",
  "key21": "3fVJGT3pAyQYW3C69UzySjz65tjRUrrVuC2A4m8ChwT411MkPpPkYZKSRcjrpV9f2mLbNQWxez3jYxVDb5Rqfsnw",
  "key22": "nBnAyaA8KhqAo3BABdRD28VQeVy86CQkWtCRbPW74UuxPJifDioTSyyCGxyqfYtFe4wYUcfnYLWGVXXFgVe1gGA",
  "key23": "4jZvwWQv9cVSHhe9gtMaYCW3thifstPkfAUA75VMm1JSenNx5imJpcvTMzd2SQ8wwYpFakYBFeousdFp7YJo1U6w",
  "key24": "4boNHArY7tk3A8MCn4rm8w9veKUtHwdewSDwhYkGKRETRjKEpQZ7VzhaqFW4TuBe1dSqWR69cWyQ7NA9joWFLbzG",
  "key25": "5HoxTus3EjBKXqLdvGJyUK6VbnZBeCrwFWnx8TacCDzVM9crMPGGySAqHhy7pmwi51ytLhxTDmnsESioVGDXq7JM",
  "key26": "4bjNUCHAC4qQzKeSyBvaL44ZYJDKqREW6qi9hvMXJFoZhADjjNnJtU2aA7zyqpAGavFJYFZru8hetdBGjS3Lv2Ec",
  "key27": "ELerTsjzBM16DmJBhkFhxehkE2FdWifcvrMKK1iKBte4oF68N2kY1M2XdekGfGFA9oQoZumx8M1d4RSejYpc9j8",
  "key28": "JxqLiTZyiZnJc7HefJsbnwHAMttRAQUiis6YfLfiBTLEVYznqvS5mrqPXPSFoDa3cnKbGBAwFAwFS3GMqszZccJ",
  "key29": "279soSGraBVjtjmTBRxLLL99EiTxDeLmZcnzFT3gCEbjxdJ3c1hbDoUz5DwUbxLeAuEEk3LgG4NCyzfR3wj7HD4D",
  "key30": "nYf5UEYcmC7Qz9WJBSiN58u8YuKaqFUeZYRYw9Q7NibUijLF2Jc5Gvad7Ko8ADajGbwfrj1vmBYzjNG2hKUrPHh",
  "key31": "2D4X6chdD9wWNHdgYcmR2BTivZNQJN5xDybVuVdsnpj7nWQ9uzLRM2wmS4wJbAS887BF2kYc1pVNnQBgmQNesU7Y",
  "key32": "c4dQkgzGTzBzUcLJHZ28D74KA4G7jbPSdtnX9LWFmHrqbeKdzvN78AbNGN9zdNHdudQXGzoyQwEqhQPHhpLLDmn",
  "key33": "26NphwJd8S599xFi8nAB1YBRVRxyqsvX5nh8NQi4eFGfm1ECzz9n5JT8qH2K36wG5K91BhMjAQxDAixrGVhvoX3s",
  "key34": "2wqsLMQtMzeJB6F3byrKxbFxQ9o95YDbFRGb8NxTDTdHW781mqpPsd8PC1brwvZU6ap2be73ZyvDJHAXo31LSJzD",
  "key35": "2Vhi45MCwtp3ouNyXYxRY1h725ganqssmhkPGxs8VzFvti3v4DZG8uwNeEZdouvpSFNduFWc8AGdjpRWXAjJg87M",
  "key36": "4a3NEeiQbJzrjb9tWxRgVAKaknjqY155Gh8jYGYgKMShK5MfiQ2AMf9wmofAG3BkztpfEi42Ba9QZFL3BLCquRfD",
  "key37": "5J87sb56LM94EyxGHk4K2gX25m6V2mfzsECcAMEN7Tg3q4j5ScpLNDDmLN9GrRC6ncYtKLWBoGPM5GZfDPmGubpW",
  "key38": "4YmifkKBPyqPaxU23mV7ZRFvYpMt6QdbUG33DpmCiexnANr6oLaucntfcvKefU9Ks7F7wxJLAB5xq1LmSoQh5SDt",
  "key39": "5q4ZBsBQStMZJmBH8YFHJtQYpiL1Yy1XB7Dq6cZxkPH714gexjiaiNCQ6PAqMRBSYZU1X8xfjVQE41ndXW8dSkzJ",
  "key40": "2oq9HFX2Dht4qFjr2moVBVRzu8NEXkhgBUPmTVmXkdxbEpPyf9WnRCXVTauxMcWviUDei6JqjdniPPit85rEdpGW"
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
