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
    "296yvvxxMfKLuVTbEat4NbGrRYft6RfysaU257hWdu4wH8usST2xPNX3sMV1vTJx2oSRXP83TjHvPovQKSUhnnrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489swQUjg6kkaYMJUF67t8ktPFtcky1iyuzR1tkMbFoKG3znNDJN3N6GnNjnPRvWnVF67HxSnX3hvcXZC5uCoTKa",
  "key1": "4wryoz1ViH2rLbnJJJjAsNa81jJ1Ps33eGBngMjKmwHnec8HxSigGSVe3gHsMv7dpF9BcmhH68e22PfN2Cz2hPCf",
  "key2": "63nPEea1yifd6Tipm8mCHecndkhPieAC3KSnSdxiP7KsiCLF7p9dCpGi1jhmXy2k7wuhxnphSsW4HcVh9W88Krat",
  "key3": "53B4qCvctzDRMw8kJ8tAYzqFewu2xMb8zMNuDef6q86rReheGHqHorzQGs5swbizUk87DRzXeS1ErQ1JT9wPLfMr",
  "key4": "56FhPsJAY67vrKEsLD2SB8LkU1rF8afxJUzWvgzk4PxapydfQcakDrkCVjGqw9Ekdn5SUmm1Swei29Pbf9NSkUwU",
  "key5": "2mFchnRmY1PXbs82Snit1fXc3Fr8MAZTq7B8th6RpzsS67XTPXc7w9NZdsBJEYhKC3jjMqXxuajiZjnLJuq1fu5o",
  "key6": "4GMMejRYv2DNgFqcBUUutiJnqLGj7SVBq2UypCRDVNN3QasspSRFX6imiZ7qyV2Ph2Nki9XnqYyfwNwEDBC93EPx",
  "key7": "3YZZFFNd3ya5bsVrq82tVJHjXDd5AbvcJobxj3JZKwBBLbCAtq6pcBFviNrRhYoS9qpwpTrftzt4arqi49fr72rD",
  "key8": "3SB1uVBQsmQEjUatCBBJzqrGVSoyPvajFmreGwaUiYYcmYhk4HrNidfxZQsiRba2fnp13PfC5QZUZdUFE1PVKbzm",
  "key9": "344va7sbbHP2jkxTz4mNdpaumDQsBRueNJSDnE6tqPsKsTkwnT3uajvWdooE2JnZCQ91mnr8TmZpsMxqYeoy5Vqo",
  "key10": "4yBeB64D33dpYFB2wiL5SZXqSxtXsQZANatqYbo1U3uCdBKh7NKUD8rDu16UJqnMv7jf83aqce6r9oaPKiu8RZh1",
  "key11": "5294stktNTAUHRRG3Cf3cWhoPFp5SxMogFKvRjxsKff8Sm8wArZKxXGTCKcqEfithvSymbvE7mx3pvZ4ujUFJmMT",
  "key12": "2JnbjNQPTR9zLqwsjSfUKmtdmBMksQqq2pdkDdpJqcPVsa5TXVcLAEuEj7nZL2zD64CQEHWD13nCdVRcNaR44Cu3",
  "key13": "4RnENtrxdrHAqyWH1BF97BYKbrhwUMLWvj3yPQaiHD8F8NLHkEhgap4sk11nK2ZTwzuqwybNsh9aFu4Ptvgb9NJr",
  "key14": "4LgUetvCtdEEEZw7zB1Ueet9fxeQQXKGsMXHaFzUt9nsH9DnQomkkPQJZPWTVDzWMwAZkgZFbYNtkt3GGbf7Pr34",
  "key15": "t4Em6wDFEmh8q95oWrEAYRiFucMPU4ZFHUTNnuFK5zMnqXph7G6T4qyniWR8NbV5EWxFzsd1YrxNRnY17GXy7Z4",
  "key16": "4KeEcBLMKfpwbYzBCSF1kwymjY1gJZBb8EBuEm2LYGu9HzTJBHa88ATmFRHNkDVCGsqcZFk3G1NUAKGeJSBUc41t",
  "key17": "5YGnvEzfkYA9DyaXw3qVXe7brpRbfusRoxsvDEdAnpghHNbX5deagMN9nCE8sw2LzsB55QoKAS1a3gG8bna4aWhc",
  "key18": "31RUTmK5aFuDSvYq6VLj6Qb22pTH8qxvFStR2ERnTYmSCX1EvXTUJUiAwyc6TouNpBkzUcfLJYhAWXB1FT4KWuwg",
  "key19": "9sPmQJgVN5miJWGf8dEpRY5DBAcRjwXn4kMz28GXqazzdoUkyHFDrjmFjmoNixGYx7zr3eKNRYpEFkC3v3yJVQs",
  "key20": "3MMQECS7APGF7xCZ8cKwAX1vqeQVbuqE6hKsckD87HL5kupSaZwo8osqg3DFUvjPwtuzGnFFGJJGweAZteno3Ye9",
  "key21": "LQpmL7qXRXQcruh5yCAGpzsENT17eREzdQ2TBM4HJ7ffERFxSmDq22p8p3pSBPMzah4G21XizognD4NmCAz8T9h",
  "key22": "2URumb6hsTnComypH3eeL3vLjtsWj4e9gAzXmgeWyFN7CoqmPDsB9hnEP4mcqCEJYQ54r5gJcBvrT5QRoGSgyEzT",
  "key23": "2VNHDnX5ireLJsw95aQtr5jBPzH4eFjbP7FpFpd45JEJFr7Q8NZqnFr2jcJ4CXYBnd9NTsv6wwvtxQzVjexfwaZn",
  "key24": "2TV4xJErvsdrWru8VFNWYESepGeU771qeAjFD4jbUVJUiw3twMzapCA59oDAWf5Aor4ncod7cUe6a8J4jyoQ1TmR",
  "key25": "55Po8f3z3MdPzrG5sDFL9EfX2niyzcSFXEEEhg1dYPdSQGVSvn7REsRuchiWAhtsRy3E5LPW4oYrNQwpo96JFzt7",
  "key26": "4vA1RWtuGEjvoqn1nSwKd8PVV83i5Nib6xaSiizybFDgeSDBb6iYbfGDCLKeKE863vj2HtFb2bSxCXQPAN5qzr2x",
  "key27": "HPgZvYoUgtvSYG42PSZmKUmzL2yEyfapuS4JvbF78DLCACE9Ks864bMmpBBniJEuw8oExG17t2X23wKwPt4m41d",
  "key28": "4RNYC4NoCKi5nwW8RQ5ezCkyd1gPTahsvdbBbDDTM7yE7RrPsqsMZXyKBUENf2axCb7925TaHkR62vS9BA5pXNuN",
  "key29": "2wqHCukhjCaA2X6rz6kwamVFqNqtEXKJr57eaQ4rKM8x9nfyEsT9yzA1vp92n2ezE3x93RbmMDVuKX1ydATvCAos",
  "key30": "64rLKAWzLkSYkLJEHbkUqaffUsE2NN13m1VWHFeLpzw7CGeiaGdN7DxokTPxxE7uekDhmYEvzFzJDmqMExqD38yp",
  "key31": "4AM77VhGUZGqWy3jhdiqjDTVdgWaTN5Vprt6sWQwfJNCzhex3zKBebFKjEMVQoQxv59oUBBXb5jjkF9WtYDPQ391",
  "key32": "2hmsKkxBNesFpKtDAqmk9MjNgKLEmdR8GApmSU3j1AmQakPWRFAcK9aF6MxyFJTDhDWs7qLSkj9XXD76gYpSBqJM",
  "key33": "5rPtCLDQi9Rn4SfBhyHNnsUJuc8x45VRQsAfQdycJtkE4QNu6TXzfQDCCD9x991j4HYGsHL8oHhVjEhaHZxm5cwQ",
  "key34": "rcZYk1y2wmsCrUQtwJnpz879CtuCBVyv5btAxSamnLvS2UzJN5r65dvcNUMXHY9HAnTZxvW4bKvJGooA1pU3rFb",
  "key35": "436iXPgjeH2usLeN1cRiRoCsiSNATvCwoKSy5VCYJTk2M9kfZUPTdsiGVU22mUio5VVobyFkfoJHt1SCTs4CYtwc",
  "key36": "4NNRwftnoDTaG4fHKZcETu9kwUWpQsGrWccAqBeSaoBsSy7W9c5WT4TcBLo2Xh3Hdm3zh2p9kfBxbVX4yuUDYdex",
  "key37": "9PoV6ZRW9rSpcY3zSmeErzPGRXLJTPCGgzwTfX8ofEXWchkuFymyAHt1KobrJhrWPD5ZwbP5rTxMcwDL4WiJLjC",
  "key38": "3eCaHettEzAzojjnRvCDz22N4qVUd3cS62kZMfhhKpQgKVL3k4YTpfdoT1gc4itvFbbPznpkvmRyWvAmti6mhBug",
  "key39": "E619KF7oXjeQzHbPRHGhJyz2Y2fJFZXLSie9HvT3pJbH1neSAvXs152SHe515Ef5fwDiARMNHqkG42Jres863cH",
  "key40": "58B6qP5RVJPKkR9QVVTDvW6JzXQ7QeQ5bajifET5i37drUVfa9veX6CDhDvkMQHN2fh97jegrQhL1nH2aZAyEfac",
  "key41": "2cyC18Bx5syqSyDiuiDB1QykueGXy5XaULb9sqSNXZK7MfRH4NrdAvsESqtbFo4U1c5hNUTnkYaCWBrvVDYyPKy2",
  "key42": "3mciEooBzeEJAG8uswQ9Bc6midtyadfrUMzVnn7ZVZPW8L2uZ9qBpC4Jt7wAh53Gz8UyTMDgmQ2aXXZ8N3iwXsTx",
  "key43": "2ihj1s7a9khPsPuQVcZdgHPY9SQqgjS5WehS557PBfzKjciiZX3syTFQ9Com6jgScUh6R1TfKW3F8myLeUvwRv42",
  "key44": "3e97KnpzsDJHJQ8e7w4gadr95Y785YKzSQ4Mc3z5J2EwpunCzvuTHvii3DfcTZHELFLqN8mRzTdNy2UHWfi922Dv",
  "key45": "gJcgo2xFGUqPnCSesUfAK5es4NKB8jnpoJjcP2iUM7a3xK2wCXJjm4QaLhyNVsUV3ZkFn5FLXprb4w2m2iVnaH1"
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
