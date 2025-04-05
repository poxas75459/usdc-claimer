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
    "56nXq6NEFZrYrFmz2Mckxrs5JqUHv5omV5NKcg5AEeMM9bAFzTSc1d6Yowhoqz7j1MFthwCuSRq4yNrv89qk6HbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAM6mDctMYaX92oDKbvhnmuzXzVaNTGpYrzU4CVNKvhn11Yn28bPs1HXqzi3x2zVJogRjLKHU4bntzBr6hKExWq",
  "key1": "3bYADnUwcmvQiSLegLBzak5GqAGSdQ3vJSuaak6mmSB2MVCdYFugGJSgSLebDnWqQgNGfPw8jesAuPUQyxTY99Zk",
  "key2": "3MM345GqiDNQ2eNB1vGP8HYxS6u35GuSLmdMctbQXMgVRovbcb6Br5LroogFZQBDjA3gzffULTqPbv82LABCMJYz",
  "key3": "eTTkgKyVHn32yNo3DdXFU86prmYkF3wh5jru3CJzTLyQPmcXZysY8mJUDmsx5vY7XmRdwCqXB23gtu2ToLusXu1",
  "key4": "3C6j7R1BtfzRkrzR6vneUPxrmtiehqoLg6pNNTQ8Rj17wsjPNSfJYEAs7gKEBmBPUfUE3D8ARZ4mrB2PQqJZHdqF",
  "key5": "ParMADqNgpjPpusssjdncy7pPy6FCDE7gGS8cWPoka4nG4HxVF2nwfmLADCbwcPdWhsFiFBpgLvATPxLRXzkXLH",
  "key6": "2VPiDBFsnDG9XxiDPdaefZFfAhXF1Sk2SH4MiS6jr9jfv2kybndLrJvxVQCZQ8gY24CUV8itgPHV1TMDcgHFuAG2",
  "key7": "Au65VT5a4Sfu1F48AjynbSrVmEJTuavngbQsHtdvac3rtrvA7LL32d5srwnxcBMXugf3aAoFyHsnMofWZaAXHSv",
  "key8": "3MfLGTG6sK2oJoNQYfFyZ9ajHNarpgb4NbGuYh2mt7d1YGsTGhUR9TdWVuUujjv2W2iC3dwc5jZGLMdhdkoQFMFk",
  "key9": "4D83Uux7ThB896pf48hh2YWyqH1T8RrPvNNn7K7bN5B9ZoCw6VoYWH5F5ZoVp1K8af6hLvN5AWRBBZUCRsyGqgy1",
  "key10": "3fU2tXMcjCWeKdm6wCzjZvr4RHpr5cyigSNQS1R3ppoQxjZFmgxh2GDkbUBg6MbP8oxkmq83sWkDHQFnMcG8pJPm",
  "key11": "23TaoHA4pT75eUFod7nxsdrhYbLqWnsSnjue6A1ivBBok6zaYK1Rh8U5yg5eU4cyFJteh583zeJN798rF1naY2cK",
  "key12": "5j7aDEjTMNjTra2tMHXuEZdUYNeYqWMVnQ9LSQpjvxPLiBDvNzuYYvvHpPENkrCBXkpCFe5feMpy4V3NsM5P1i7S",
  "key13": "4s8P4snfMdt7dM8Krtm4mCUd8EEgxU4DmXkehpcmQacBUEEQmzPYM9AYz29PzxnVsqnppCV3ukcVAdvDsFpmAMig",
  "key14": "5vfBXDsDLXrzbU7rgSngJiRznSRSKZeurdZpJqYv6J5uu7nCkFyJsYtdX3tyqzcEyQZvRe7s9GXpa8gQvvtW5E5n",
  "key15": "37va3yH33xepTRVXLQ9S838RBEwC4UWAhot36AXwd283QQx2RsLWg8BZZ71Jzzsj3WGR9MiiJKJzj5yeE84D8WiR",
  "key16": "jEkapgL8woeUyhr84bvPAsgfmNtyBoxwhxbs5RPvMEKtzTRyUBaaU8g4b9AKAiG6n1F94iASCzWUgzYKkBh8YGE",
  "key17": "5EziCBJTody1f2vLh1SFG5jNk3AVHZ6Dhd5w6LXfKzNYWm4Vfv5ACaJ6shCvT9g5X6uxWiEqg9U85hTo75kn5zmH",
  "key18": "43gNDKB6Vo9HsUGEzcSJtS42vV4CV8BdCfdmjUcyQrc3oAz6EdzBUYiVz1B4Fp4nhgGG14VojJLaRtiTx1e41Att",
  "key19": "128szxADGS1xxKcsysRCg6hgji26E1XezQyURGEi15TGXgD9Y2nWseKXYM971HfnhzvbQRNAsMWffxTKTFcBngKu",
  "key20": "w5xjf2BBokTv3enSPK2pY54Na59j1zwsQfU4mtFn76ViSoeHqogJPdHFSbUX8xijnX6EqRzxD86W2oyrLi4p9e1",
  "key21": "4KLhXyLbHkLbSavvGgfnXfsPM6msyGSW6sJqvuwfj4fKo8z3kW4mZQ6eH2CUc8j9Rn2uFtmHtoEriAbb8YVmfLtA",
  "key22": "4EK3AFq64RnchrjwFyJpNuZKHXk9PkZYBJs13J3mzJjjaZhidZnBNGu37uHih2TTA85Vp1LcSSBr6pJM53T3hHCm",
  "key23": "4iwddQ1JyUsqAMB6ZTXMEZpbiUUr4qVr7hKBVYPL5FVCPnfHNXKx6YWqvgWURPxfkoKFunzuQgD2RZfn9Gw1Dzh3",
  "key24": "3AmGySfcCdkNmKBccK5Qi75YwxWrVziBXS8sqM3J3TvSC6gM7jLtb3pzgPE3BgDkPsrMftSCApeX1Qix2ccYyPZD",
  "key25": "5ApSbYBVXxXEoEPbtLyW9yKVXDXsyY8i15ugp41d6zwJDywyFNEkE1DUb4gL9P9NJGmmCXj3kETJafEhNpbdeFcQ",
  "key26": "2NnJftVUSBtAprFiecghEUb9AySoR2PpZvV3LohDQoLTeXZcvw3wBWqWXVgo1KuCULZt7jkQ6Y77FyC1GY5zRkNR",
  "key27": "411EDcqut3hhMzNLmToyBUpCoeMeAnRZV6VC8j9TY63bfQogQqud7GzXs2uMXLiyJnLp6nbDjNxCo5uvniDpG6r9",
  "key28": "4vEt5emoUMPFyjesogeWmHZ6wUeEVmFckmo48AjdZdwSEunZnNadtQGLtZrrQ31zqETuVBxMqbs1SFJMNgWQ5hjY",
  "key29": "hpTXopxSmoyiyTAdgWyMogrDcZ3Ck151QCXB5ebyV1rWTS6PNopwiokE1Ssg12ntUmtr6yq3pKrNnJQeMC8BTGF",
  "key30": "4XDydKW2f5WaExXZXSwxTdeCVDA28h3bzDa5bW6grj7xTFRw3DShs8N4Jqti9tsPEQUMNWgqGH1CXpYjnegwi5hh",
  "key31": "4PXt2rvaFdoExjPfndpgkzYQwU3JNmqbq7mCaTuyfmSobjZ5X23sCxxCNT1qmhW3MSNHq6rbSZEcDQ7tjpgW6R9w",
  "key32": "2autqdBvYgshGqKVjgYf2JNNcJPbtWyKNwdrCL8rk7ohAV9gz1uLUCNHhau1ioJPtakU48dVLRK1xne6fLF2z48z",
  "key33": "54VRVeoA5E5x3eZhQppd9hKhrYowJsP6ypqawmumWizPyt9zTcNHCNgdbXNY1TgHJwkWXrxmq8tWVVfhusuqFEA6",
  "key34": "5uyH7mKZ65Bmr48DgqmAqPQ7uweE7CJsM58yMGGmgEFnHvPmEtB2amZMGLhUWYy1x19ri9y9H9868Ls3R61jGFqz",
  "key35": "4kgwdesUUsyYEwyrSegGJGMJyGGEj3xtnx7UEJyMK2tjGYvGx9ZLuJ9YFXUKAop8Qfdk9jsrrKQMQwYoqsZq6kPs",
  "key36": "5q7DPAxvDQHMKMqLZQVJeUp9oPRxCoerHLkhFsGmLZn3JcXz89nbvvygYXa5LikridVqFG9j7mpqdozvkeBgtmJJ",
  "key37": "2Kuy9xTACYgkcFy9T8qDpK6qGveqUwmZHF3gHyKK34xUpcEeHAL1p1UJpwf4CWQv1KbD9KqNoqCTUYQwVaFzGvpu",
  "key38": "3Kj86X2WvwwFbCJ9uzhLP22z4pbvgRjR5KxePcpFUC5bFZcpucnibTxWzzSasSUBcZpii2yTeXdB8FAS9JF7Gf7V",
  "key39": "3cnCYjpc1Y5qyGA8eTqQhnRssnm5Pi2tRMjGBV7QxkD2EU91KiHCE3RdeV7DX4cC7Dsv3qdkA2ryrq9NqQppdGJv",
  "key40": "3oKQVVLUtZhi7tLrZUkp3hAYsVvf8RUDpimCaijHEkcjLYvMzM4rBVM5SfKiiice324izPJQvRXdkXhCjFtZPRWa",
  "key41": "2E7DY6L2n8zvykzHcbsRj77BhDVmBC6ZKuz9vbJ6PAEVkgeG9BPkeqXZuJ2VmvpaAKPSLjoJJQ9kVsEyuZdT7apK",
  "key42": "2CV4ts96Gob4MbHH63rkLs6gkLpHF6rCPzKVkqf9TKkXhnBMgpfR5Q73TUTJictJypHfCejz5NSForcDL65BhKRe",
  "key43": "4jH64gARn6CPtLXLNbyudw1YYHFFu1U2GoS8aMmFnu2mJzBAbnQe6ovkcLD1XPrQuQ9frxd9yJRxKE9aoEq65ehf",
  "key44": "5m2uYrYfcj6LivQyN24qX4RQgkoDAhBHLwaD5JYvhFeRt4LFf2UGZsbeTgEXT3smbZN9QV43yRiN6pULEUNUrc2o",
  "key45": "4qeRvr85ti1czDszLKRcPHobCUYqaKZnkTXEytTo4Y4dKQc3xrvaXbYELC9zHsYTxgS3BHHUTkjauuUsoaDZ2VmT"
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
