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
    "4JwvBZfL233wXqWLFBzrHbZJXQAt1jZ57Ftm4XSr9aTBzbHsHj7V2tixRfoWCBBt7FwtwaACT8V9WGrKLSaUDn2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nsjZB7yjH9b1UHAoeP7ix4eUfFiV67YDuxpqfYns833sHPudgzwE5Ai36YDhCJqHr6Mth8anqLVkZK9eS7426M",
  "key1": "54ptyk5HZ4VLnmnLqUmbAySAKLwr7FFChTgPge5occM9Pao9mgjzT5dPjdG7i3MtFyZdnb8oyiAvFzn1EW49BQ2c",
  "key2": "2EsBHbs8vEs1q6FuMZrcadrNb5Tpz6UL3BLKfxUUibURuZykTqCBZi3LrGMvYCVLDippNmLjzn7D7hKTxnry46US",
  "key3": "WMixBWCRrSUK7jyzRhWqUi4k5W1FUyUs8oFEiTVAHTwZ93YKGNDGjGzXWjPXuL6JZu9TpDfpwTff2C5RN9t8BBL",
  "key4": "5WgH2uY8whzDHf8VAHBxx7sBDAcdDh7oR4kwmoStkBTf2Q1vStPfJeETzXsWKfQEg6Bw8JaxCHg6MWTZGPYAuYMS",
  "key5": "1f9EW8wB7rUVndeHob3Zz5sHs8aGu9qAKo9XzbcsLEtNigLXFcEe18XgrL8Ni2GDCNn997NJKemJbxfkonHWMbE",
  "key6": "Xrpbo3KWEB3QpANafMqQYx16iyFXrqXRjgmN8UR3UvrqUf2wY9QhRAsD8U7jAaV3CPwQ9aR5n7De5NQfJtNCdj7",
  "key7": "2gnZhPQWD5wKs1cJQKHQ8TJDDgKEge3hY4V3auL9uwjYzU2TPVtGJ1FMabj47n1TqupBY7BnfinbP9MMj1cA93st",
  "key8": "5GdZCQcACEPu5VvpHWszvahfCk16n6HK5jsWLAgnXjqnHU6dotRzSjnM7QCQUm5F79QtKWg1YhRaMwp3svioqEM1",
  "key9": "46saHcRCWxHoSPV4yG9tv2wuJNT2JSfqkwbRTxJWagXt21ygawt8SFmnsTkXNFMSAsN1BQ4LMKqUps1dxWQzbcJC",
  "key10": "22DAMSN2FoWSZv6MWoB2FrWRxyrfoJGCj24ufY9DA4RurstAvT4xoxQWztC7sU7yLEP4BkwjkEjsdFt7Sb384oZC",
  "key11": "41LECso2WhdeUgkrzbHsnpieMMugH94iN2Z25BERkLsSXCbgHCmN58NZjiDGWaVp9eqYEf8uVHWnKChZUtMffyU2",
  "key12": "5nfsFaeM1jfmg1TNGArnFYQmFietnxYwuDaWJdDYtD6z4x9bADYMD2CS4RjNAFN1rGSSfksbDGYLuY6uqbKaYrVQ",
  "key13": "uGQXHbKfQsfqnzXbPot6f4XJdwNaxTKe53SSDsS6pc5GdqG9Lv4cxbQT6T1BCNHTYSKzPe4J7QSjWRbB3F1EXrv",
  "key14": "G2D7cX2kTcJANyAM1mRhxzqQdVGLQ3cvS17ezjN2kGump2xFt666qtwVKaWjym3kAW97PjQwMKy1xLvMTGuqaMr",
  "key15": "xhDNeWeTiQ3ukbtsZs53msZMKuZzWhFu7Ex8CDvyHKvidNeUwP4dG9uParu8AkKR8fwxs4ACVB4dppHPpqoQn22",
  "key16": "NA9qfDo43b38YtyQh2HidoyGVpXXC7pzrWMgEMTPvBXrP1GqEeKuaReZ1gTkbiK1MmpmyhZTvjYdmTLn7ZttzvH",
  "key17": "3ZYKhQ6kZRgioReGCqyUckcAbygCoaLk38wbkr1r2arWvyEucUxDihudbSbhk3QpC67PrPskP9CxU2mdoagUeR6Z",
  "key18": "2a4eAsJ4qXGQ2EgJPNghW1ccg23itPDTeSkFMesezSYB51UT4uRreEtVioF4FDf5WNXZ7xRnp764xhV4vw8qkHD7",
  "key19": "5rZiPJrqRJKK2QwbD6wFgV1rbmyB4hJyzGi3ECuxZkCP5qoy3SPBus1qjzXGBb39L446KbmrhzyJ4PG3hyHuYFEV",
  "key20": "6jJqwPVqaCcwutjbnyYGEfE83pjPgzCiAsA8JtECJyqPgzPN3mMfbeS49UyfW7ipV6vt39onMC6cY4Zps4KKeZU",
  "key21": "2UrPGSzXsndM3haVBbLyPnxU32BewUZW2NK9pyYsokHwNtfjUbK3jU9HFHT74sTaJz9ncLNx1f3iCeCXH8kDEZoG",
  "key22": "3mD2cM47BfXA8u2iCFXVPhKrMQrn4yYxgrh8KMYjouxtMnRgRPyGD1CCTcvbvGCmk7GVABrzBLA6sKGjmC63QmyM",
  "key23": "cjyV449T1Z7gvGe3Q3Cn8CGPf4hAvZkVGcRKNdgi2GZeV7Co3BjNSjQaF7N4Dnwro4ejx8KM1swA3ay8FT7EYjz",
  "key24": "2xGiNa8pJWYqbxMDiqPNEn474qbTPiE4s6bgG6Tom5BHkFoDGPk8x7TLPD75gtunRc8SYPMMuQGADoNrDdDQX4Sr",
  "key25": "7wxvf9i3TBMKsN8LX4mbHepiBRB8Zz733aFxusNJ2nuZHyZLPxaxcFGPA7fQNPzGyW1i3FGyE2ZNMvsAJbGDSuj",
  "key26": "4tYpb5mmGGakxXeBG3iRoRXbvREHNCXWZehJSUfQi7sSpvafrqG5D69myru2awyiEVUnZk8Gkwit84xGYriJ5FBJ",
  "key27": "h9USkaAQVmL7H5RrnN3diU65cKFKakTBHnhQdmayUpPjwvbJnbs4V117otRLr3QvmJNeShFraPDktRLrqgheWkK",
  "key28": "2VSvxfTu3upFJBt71ofq1FAKDXpSjdCYqdipaZVW4ei8aSszKip4MwQ8tEV4UqoY4SgP7ygePYfPSAAgQT6uKiyr",
  "key29": "XMFyjuYmbJjP3XPNSuKbVzM6cuFuidKpLF3jfezKmravvhCbA4TtUQPV4DQJnmY7e17dX95qSjm9RMZLkEoHYzs",
  "key30": "38nFzYMBrqy46hz2U6WhZBvJSuQEbGoZyoemAwjv77sS2MdVQLv9Z4DZ7pahNAwePeRGb7eEfLsYA87cisy5SQXx",
  "key31": "5514eqaaSJJYZsdWu2oQb7StiZ9zJRQ7mY5ZzxEgZYqaRp5HKAn2G76FkjEU5nkBnf5KG5HUGjS9xCE9gpjwZwVD",
  "key32": "2Y8HMnPdsMSPDzQTa8LuYmzepKUNuXzMhqyeFfLmLebDpiKZLJeYcjumh9uAFv3HPy6scA4pcEdk1vNsghEVJ9xj",
  "key33": "3aBA35tn7QNeaMTdky7TxSQo5Likkmu9h8WQQz1UyDmBVueC7tGWTEvf9VZjaeRDaxHAFBEH8AUAKfhgeGViZdpu",
  "key34": "5SkH3sH9si7qtGy8Lnhpma9BqRSdiJFCdSBbBxNfrcwtxLqvqJpEigG4ogBgVTdCFCfdq9Ni1afHaqh6WW8pTejg",
  "key35": "3EPdaoHs6x8yAP5pUoZY3FJH4tq15zDsGGMSdXCK6tSbmXjjEiLo5m8kKWXQsmtF4ojap57zmv3AjWkTrFekoZci",
  "key36": "2fsYGWRgZVRUvKEwcfhzfbajhoTsGVvq8cxJWWcSR9MXo7whiMPRnAa2iQNgybHwY7j4nL9pbrytDszq2PwX7oee",
  "key37": "4H7amX7Cg4PmvxUiwEkMVyhY5Gw1Fc1iH8J8t8tH2MkW1MjAuBPsNrMtvUbzTJuvvizwtPU9CxUGq9vx42qpojdZ",
  "key38": "2iLHSLH5Qxt7qCgwrydsd3k7z2NFK99DwrcP1rVQvLPxoYL8FP3WWdHDFQGi8WcqtBfw8Atpyhc3T98uHgSeJaAN",
  "key39": "5bUW1LjJvWkpxJEwDceaYS8gsse3TNdZNNbcsSuouYTb2h5ujxRjvoh2jRPttPeCxhaRVDt5ZtzxFEd4xLjjnu7B",
  "key40": "2ifViiym1hhJqqEJDnqGYqWsEHs1bTpYFp6e1h7Lv2KyAdk3ergvdMaEvidLGnJeS9auhUUAML8gvo7qQG4FvGdR",
  "key41": "8TX4SM92Zc9y4k6JX6vgK6WT6pw1uLtAmeuacGy5zSbzniHaQtG3FbHkHs8nQ9qRXjtqkEh9svpJdZQAv7C5j3V",
  "key42": "5sTm8SBSgbt76EfbXq6cvBSGd6akxkmneLr2rduTJVHxPEmbXxj1h3D5ZdkxYLpLwaUvvYwnvxw9Mx5qHfwSUUyK",
  "key43": "67i5kx5A76PJwhJ5QUR1sFgnZPDPJBfSjvvayHmveKUZ5DUqJoSZ4wQ8egwxziPu6RN2AttC3N69UkZdVcexfVvd",
  "key44": "3wqn8SeNCmmDPXYPy47rb6hbkYtGApQfpfQeNtofUVuBpeHTGi2KaJMXNcdGdfYfnJA9Z22MsFxXBFkdbyZjm5Gs",
  "key45": "3sEZG5Yyt3k2YKunhKoUPjzkZA23xpjRiuwe9QpAbPJUzNMUiihjokBgVMpCFNHDpWZaUndXmNpgD51QTgUoNEcY"
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
