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
    "2t2XgX5iia2X8uo6WiUze1Yu8PavSdeZu5Lac9fRE6MeDZ7WBpgZNiuxZm4owzTLBVfMmxRJbawoxWCtEoCF6hwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4Ri6q9KCooQSw4E8zHPvb2omN55urjCGDXEBFj8FsFToMMCj5xcXY6AwQAAZ2h6GWKAQgTKKj7NamWyfM69pvz",
  "key1": "fcuvqgs2y71rzdRTgaLZon4zkd3i4zP9jxHF2xP8adA7US3iiePMTYqRAto19mvPhV7LJ1W3DyJekQ8QsUesDDj",
  "key2": "3QbqSD22XvVHqXbVHp7bnP5Cn56ToUT9bJrJ7iEdXjHpajoiLLDF2iJPksEQc7Wq4nPNbzaYjeUapyVap8CBr6jY",
  "key3": "4Ftt8wHyo3gwumTMHf8KA3uFC5996jnfJtdAKm1cTizb4WTUDvCQ1UFiq8prxbqpM5qhX3kSkbx4WhNwNgBcygMP",
  "key4": "3RVxzrbqESQsnAbTyayynUcTsTrLaKjeTBpnTSeSnxtVc82caTDBRvz3ktuEqr4P4ZvegkdUvNeBYhkLv9igKD1D",
  "key5": "2QbXp7ZqhtjEDDVTmwoZLhyYRUouQ3ysXfARj1HF2N2zX7TmDLEsxNkMo27Mcg3bXau3RJcaByXNgjgZMUopLW94",
  "key6": "jmswgqxPi3aZiPiwkcpm9b17oJEcPY5F7JSeAoSbdScbnNb7KtSWFCiCdU9G6i15trwQukFtjXsTsafs21wz6xS",
  "key7": "tAeysASN3YVXnupruwNwyi13y14yaitAoE2J5oaGZcrfKiqTWKRjwKssJhFQCgKALf5DH3nH1kvdgPdVnejwiST",
  "key8": "59XN2iMdaasFfGzgy5PrkuWimnBRD7Jd1dPmC1E4sLQtWUEm9Zyn3Mc7ksAa9Ao3XhVBTTFkXPiy49YmFjBf4coV",
  "key9": "3CeaWfKUDsYBh8aymLqN7zZrBp1B6bXyrLVVearxC2AW2VCZYTekkzepCcKC5evdsRU9zvLxUmQg17QMYe7DMNXd",
  "key10": "4DGKKXhCVwFGSxHE1hnW2PEYSL26AKLfmqHKD3ZtdF1L3KUvvoikqY41ZifbGbdvx4vduuYhpmjUkphs5WCp8yV3",
  "key11": "Ysu4yMx38SNfSKiQAAdFJn8TfVpoi1rrWaCgUSEFSDwFUhqQRsf8dR5DqGufsTMBNYZ4nJFxEbDA2zoDkNfUwka",
  "key12": "39r9guaGoVfuskw8FPoFmnDUFYfm7mec4EPusD8se7wqxHRiyhcumxCYA2SgWifEkU3QDc3qtavaThzuhy4BYyuG",
  "key13": "HEt5UfRoFPgV3BtLThSXixaiq2wm4JX9CEe4Xch2hPwfKbyZAtaZ7KN8TuMXzRHwefVtfZp3rPXPfUqj5Aar5ib",
  "key14": "e2g1VBJs6YroJUXNLemRGbPNqRFJ4SB3dxBwLTFrcoNGsrUTShbEWjGi2cCt1SeMUVzvBD4DhTsVxV7piktJSwR",
  "key15": "2tNbHUEiKPY9E2WVnETq7zEuNEZzrgacoFQyzSqwJdkfgfRoHGQrRqqdsnZtdRsy6xQMxMPchbydfRDX3sYy4QVd",
  "key16": "46uzKTWnWhwzCNqTqr1Q1HfsJCwBYxCmVJ6NJRJe2KAwBq2DPyvNn1sKQvbMn2fcNDb9nzvzW5RENBmDp37BFUKB",
  "key17": "dbPsupdK999LpVoiYPZfJz4Wz6fzrGFhoUUVdVGjMXYwidMsdAM7FjPwwd9Y7K1iNugvG1hnVkBAWW88BwaSYpQ",
  "key18": "5JCa6dGggBgdJMPFVQKRanM37GRU7acV6KXPSwhR8AjfFy9bqTA4qfMseXbzDJefeLb8WPWmzTm4oKrmBdu5asQv",
  "key19": "3iAQ9zDsz7NWDpuY7FXKpHNFUz2AZ8pcrfDeQAg8vfc967mGRBVTcXYD7CJLaK3PntskNhUocMDZduP15skMUHuQ",
  "key20": "5dL9Db6tQo5xe3KjizpvcoJxyF7VAxbvu35HmRkkAhc2HT3VwXSVeV2X4tGj4DbTW4VZ66UCUjYaxPix1sirj7nD",
  "key21": "6663ziMn6vAfAJeSwNcPiKFx2RRFruNdQLY11uGmaLNSVXCidn3kjwhh8BVMDiKxvc99L2mgDeML289oP95UJU7p",
  "key22": "n4zn2VNu9KCm74sDeyNPS2y5jqrpGmnJiKFeovMECczz2P52zkjvPYRd2cnLzeamyByL9yJDg1x6Uugg5WSA89E",
  "key23": "5UDXVyrgxsbbdm2x9CG1A5tB9yMHEediM63MzUNvUCGwBhtn63Md6k2vubt1rivrib5YEqSoVWMEC98w3wcf4CMs",
  "key24": "2uwDTXhDLMkHJD86BTPGYXUr8QMzfmMG8R1S31STQzPteJLuDrcT3phWZQhsVRLwPFLftu14NSbiaGH6eoTRFcvD",
  "key25": "rAWnpLCJZ1XteXq2vywGofjkB2PMUwjyperhxsM9jsFXkBg5tUxpz5bm4nKhKAjYhQFkoAN1hKUrEYaKHtcMJTv",
  "key26": "3MpD9qgbb6C4HegsZeCRigBNYe4Lgogiy15t4TGU6xjYrHHuLcc9k8WYAizUiTU5CJAYWh5dupY49bh3vobTgNRp",
  "key27": "64uPesYAcZRWG9KnbXt2VNYB5x7S9ALSymake6EPCWUQ6HKXSZAHUXua4RxJpxihUf6A2YDavbr55dkVvRVqUTR8",
  "key28": "AW7jppTG2YdZ2PjHoyAciHT175MxFFCNeYHcntbYK9N8s2WAbeW4Ykj1oWWWvbtRCnQTKnbcuXVjBE1pAeN1Yk8",
  "key29": "5Fa52GQCwkUiL6af74jhQuS13ehJcK29FRhq6j43333JSsNYotzeFEWHeR6q6DTUerkwzUZeDyxfhMaW9n1UHH65",
  "key30": "3k9trWPdJ3uPNpgvCDFpy9hdqqwQgTDUbmJiqtkBKL5h6byfmXQBZTFTbPgj5e3feUWEymYj8Rk7F6Cc2bruwdRP",
  "key31": "3ZSAYWTbMiofRvxdMDpiVeQDrG9yd1X4ViBRZEd7rySzxfyAjN94nWDyC72Jt9JwaDx9h1pwan877Zv5Mdpt7Zg5",
  "key32": "2F2aXV6hdkGTzY4BmoAcpKSpFanMfDowkFhPeb6TLyAUiTp9gRxtw7BaoJvf2xAfEpCPv3cSU8SRGwiQ22HFukxJ",
  "key33": "5isecxZZ66hrGDQm9voBfvseRt2LCzhBxmcnFhkvbrfoMTULLH1aR2CkrDBP76kDg8p8Ep7Kni7PgBuw3XkdByAt",
  "key34": "3XeyhKvdrYeMD1Dja6MGgXqfiibqpxwN2Q92AgjCaDhxrjfLsDcHKwUKBAUUyYEh4nyzFK9x6TrfNreJVeLQY22r",
  "key35": "2zBpheBj2GS8eu9zb86KzoaigBudQgZYTpMq7HXSGvvAuagyacwe9HVQ9vPdjP3hPQiJPz2jMDrq2KSw4JVhkFr3",
  "key36": "iJKLVvUVYMudCSjQcWnLcuZw8jicycj7uRR8bPKb9ys561V35xCw3iCRJMtbgmkaimspVRj2heRuE2JSM93DXo5",
  "key37": "3nvz7VMPPiZzrs2esLjsjdVj5DVvuuXA1K4XJN3En6ifLc54MvVvB6KjgJDnxQ3DTL8DgMzRM55W2q7cXRPu37gb",
  "key38": "3duzfRnPUbL2NhWwxG5ez7vqRXw4uVAyCnppRV5Hbvqs4gRuQ7GhkgehaaFWKi5KtgJx3W51r58KqRRaLARec56M",
  "key39": "4wmXpRz6R1PogdpG3EvZSzb3Qm7DD3o9rRUyCeEwzbWPEmShq77q2yPiqKjwcNjc1e9z8MiRNeAr8t7WEHrjCuiX",
  "key40": "4fzmZnbUw3TQDP2ajv6R74LyBvQS8SnHpdgZg3U3bouoLXNVptLFmrMf3oqThkuEvYQse4855EctUMbf99D9VFcn",
  "key41": "ztWVXUqAED8q1neKP9GePbW2PopJfrtXS5PrQNP6tBPUJj4DbMHs28rdZeeDmsV469QEEAKjJkFqD92jMWYU9Wh",
  "key42": "4efjRakzzG7zcHq2VwwKReiuBu9rzKwayrHgCMUrViZAyypmJUyePSam87QRNQtQE23yTsoac92irrA226Wvvqye",
  "key43": "4p2mrkUUP56pLRN7N4G5KXmWbh5DiweNrcYaq4xKob5ujVQpq2rEmC8ChKF65fVWAmJC7SpNP87p4HPzcyQXUGrv",
  "key44": "66aQ5fcRpgW2twV7kzN9438JeZxtuokjMySTfbZqNLrRhuiLcsSNrmHofbt6fgYTqKK4dPKPNtefBQJjNf3fcpcL",
  "key45": "2NuRNhWN1fELMw3os8mNcHaBXDj2uAytgCCeBDRj6LzsaK8S7eAi8gwX57UiNF5z2EDx6t1wWrMEqGn1d5oaFvy8",
  "key46": "TmAJnwae8pwdzczR6gJe4WLvv9kp6tS4ZBXyTHWq3UmDSwCbyQP1rduNAxbMiLfhimPQBTBsLn9jfxMLgv8TVp7",
  "key47": "2DDAxeiBDidijjdzZFAe6Gy3ytUfermhfsq65sH3KJuEgPe1eMqrgJcoUmM11hD9mG9FSCLCTX2iTJtszVBhN2sL",
  "key48": "3igviUeNTDozE1yAfYoh8wPZ8UUejF7qWCFJscpi6E8a84hhWhveuucj9ZCMyovQaBiob5iDhhnz3NabcZL4prjZ",
  "key49": "3EsQe83ayWRBdMGZ1eramh3Kp9rN5zJnmK58zZrbyFkNSvS5LFsJaSGbYP7Bo7T19fgsgf9WpuXBB28Bf927SRnj"
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
