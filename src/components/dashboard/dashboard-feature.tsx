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
    "497nyUJ5QwHpQbHKdyRo3xRkX6Uj3oD135WwEdkpDr1UXChroRYbv2aESZZY9qTybcw3x8V53mWpNT7sS6aa7J8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUQpA9mMTuCKqvL4qkjigBzpUYcgGbVmHmKB5UuJqUbHGSTWXstSvywQG1uVrvxACkA8BcyLtisNvhy62movJw4",
  "key1": "2ykS5AdP2YiaFgCr8sCrwqKSqjvErfDVzZ9YQrBrguqLu4JQVwDFGo4MYo1Jjod12Cn23PRAAVtEAT8z67Qbj6P9",
  "key2": "1fXynnXnju3KASE4s53aHcaEe5EpDB12j8H6wzpc7b2DaE59kbDiHKX29V3wDdXb1Xx4KUQd4Ksozicx8LGtaeE",
  "key3": "4nrVSRo75Jn3ATzgy2URyXJAhWnpynL5AHvLspnaYNDqaLG6TpoueYWK5wRtNqQTNKtmFxUcmCuTZXrBvLgC7PUg",
  "key4": "2oKJJgtjJ1XzyFoACsWQycpkCzPAcmYDfrsAyFQt9QLz3F4TgzduafpeUzZCCLXPE4duqZGY9wHcpgY2wk2oHEuz",
  "key5": "4TYFUPz7aSeRjNkY7RDEpKKgB8N7QqFwtFUCucHaNQCv1rJXknqivzGKYPrQRpk5o9odr5q4vYL8t5BTex8yzonE",
  "key6": "faQ2VWPrGdqa6nPFLQKvsV8My21VDUVWKGQF2wTANgei3wxKn66ey4ctbH2qtBnBp475XJgZ17tUkzAdai9Juaf",
  "key7": "3x2XV11Wzmcc35s1yE33414yHjUKRGVGo1bgBM4XE8h7KcUWrcWstKUKGZanXzWua8sLjtWZbuaY4qKFUeSzYdm5",
  "key8": "4xKZzWaQQ6vqg2GeZjrxZbXMu58Wc3qQ5W5w5Twt8q2SiUdZn2JvPSCVE8Za7TgtDN548HG4mGG5RxotaT6D2kn3",
  "key9": "3za9CaK4dYKp2uDK1jWbLsGW4sUoPNGL9LvySbmiN141HWnzxTfbPDhawSTbomeX7w9S63rzeoQi3Qp2LBEVD2w7",
  "key10": "18JVHXYEYm9EzSzXMmfu9Q9CHr1MRAHcbdLokqWY2nh7vGvPGc93Xzbw6KmuFeAjN1Ufj8EhdtmdUNCkL4FT1RU",
  "key11": "67WSfnPxko3tZXmmEmkX2b1WeL5Vdp88Lxh7Zo48PSZN6Fj2mNz6Vi7Sgtk4FDrETyJKjEn6jT1nxdB4SpW4qEgM",
  "key12": "2hrHo4zJAEtHFXhkyGAgvnetCKJyvce1cJ5PQC1ddDnn1Ca7hJC6S42zapFkqg2mKHZP2DttF552HMk1g1SLMno5",
  "key13": "3ivZAAGxRgt8W8yz3JyxkFgpDbKqgTECtAeh7QNWS8vbywwWEYtQ8MWZGihbAyiuBV2shGhCsFbMEK6CV5GGNFZ5",
  "key14": "2zrjURH1cCiXRUYcRc33igase12d9Gtq3iM1LM94F7731ejMSsZfch6g4S7WMonPnEvyzKpdWzazMuPRdQubx5Wf",
  "key15": "4DKXdRmG3dw31DLHbpo4oya2J1dF6UHR9tFbjqZsgSDLU8igzMXSLe8tR1rgBhimkoygmdht7PYsavKBGwfaa9yz",
  "key16": "59W4JAQpstne7h287kJ9bAnAaDHXBy1Fu2NijhEEg41Uquo87uhxrjxtQeGGzpzkkwDNCPgkFPiZtWUy3qTQJWUf",
  "key17": "57gGGEjEobzarVM4mViCu2vJtAFL1r9uESkuypgsDcojFnAXDNEiRFwVNCmEZ95BBPKXHmgMLk9bHTe8xjBRXV1u",
  "key18": "5QykEeJknb283WQTimxgykLxWupzqykkRMiWpmC3jYr5tD5N32K91WsNEgutPG88gujaFtnYaLVuMpPq8PDVH5bD",
  "key19": "44DpYGJsHGCNA2qMA5S5w4MzMpXtjzQPD1Vzq7cLi4wSsB7uosAijUgj2FkuUy1kdnzvzKN8imGVmVXw7ga7doFD",
  "key20": "3uNq78dE4XL15qpp7NBCqjDrmyqKW7bU6A29NwxfbiQxYhVRg5w9jg3XFoDUxoCAvoyYpBkwZazQCkumefYxEqxH",
  "key21": "4P7ai6YZkALbi2yWPtP4XBgq83ogeCEegoj9VntJC9qRGivNJL3L1XwGTkvWYh7BmGYpjUSmNBgVqjUdw22ubUhe",
  "key22": "38x2yDdac6dGVBWdmfryXJGweDgiVU8DWVGZCrf8jt1M8j5LrB3Wtrt3mmKaKNSeMQiQ5HkJR7TbFcSUoDGdg8PB",
  "key23": "2bcgDTEEBUAiMJS1yYqEwU9HzU9MeJNEzwaAeLJgFSW1KeamqBLvyHPa2ZnDMjRSmXkp7yZrFRAJqerN3vfVENUS",
  "key24": "4dfhGHS8StW8fZnX38eSzMqQBT2iM6W4gJz4paBikeEUTZAZH32WLy9Zd4GkmaqHpKEDdHP8F9TgGCFrL33sbYdg",
  "key25": "2waRhXqtq8iXvay1Ro3tTzxDznsVkf1RktbF2jooRRpbZ3ua5UfXk5yx1LSHQaXk85p4A3HRhbRadhHMbAJ5ebt6",
  "key26": "5sNQ5fAWGsUvwQ11BDCb4LCYi5QpSirGtgqcRFterFdvZ8gmrFnvaAnbeCcCt7yTcjj1DnfQbB9NGzMH6MGw1yw",
  "key27": "5LmEWv62pymHzsWVSAZgx1hQ6nGS3VzpwfoFiyX7rzpmnbM5cgndd7ao9Ghtxrw8eZvKUfSaxg7mLPsRCP39NsK5",
  "key28": "5diu9y6z5K8LpP1d9qGjP5VSEZvHTezkxfa1QPAaioxsKusd29Aa2S7rfgt2rbXTLxhh8J9RzapLAJBt6bC7s1pA",
  "key29": "286aZWL15tJYa6U9CYCyJUr1tsj6VRPXsNPZc6PwiWLLW8Gf6jJV1zjyT479hon69eZFmZynqEvSywc3Bk8RrwQs",
  "key30": "4PmiQWByuZ8JHfgR4UrLUfdpa3W2LLgsNqdqew6MqVdrNkogkazx2Fwnoh5XrprCBsCNzV16FHJsp769SpfWQ8CS",
  "key31": "33jRg7XbwEsZ1ZY4VbiZr6G6Yp2trTGFM9sboK3brAYxNj1SvAa3awc37DhEB8eQTgEWUpftfQCAwGhVG9TvzFoe",
  "key32": "53ZbQc2ahYMJUdwb1rUieKoRAF75xyJdDw5uTQ9h9KWubTiFrqj4ECGP7K3HcJg2LBDNxagpJy38Zm8TDQBUKKwq",
  "key33": "QBDxHPKZTUmbHuD442sV4WMFJJazy8e1dEXqktppTsL67HYH22i2bSe7NHPk6As79m1szjFjHnogNCBnjLg6Cei",
  "key34": "5i1UWKZQzgH9LVc69HaVKEphQgGxMcj6gL7Y2jcT5QFr5okh151xxfedNd42yoqyQA2cbBYBE97gSeJZpazsPvsx",
  "key35": "35a6kE4GrFCSeoBuC8LiTVA7JANgPNR9E9oprcCy164oSeHQSANgGFmX9jYp3REMkBeF62KbsdbTkyMJ1jWa3q2i",
  "key36": "36aXkHsVNx4rQWCA33R7UFFKurwQycVpMP5xgcXTEHW22ttLym9MCgxqNNZ767MCnfV4JPZQ2mVBFNm16puFMDU7",
  "key37": "5B5xRgjh2JcmVq6KpPE4vwdJzjUSzHk2hfDN7rQtY3sEtaRYPubMpGsBv7Vb18VZ2wLnq3nXY1CAwRcfJhVbJRTr",
  "key38": "3jkAU7xiLDNX9KuufUX6mR4HJX8XrfxPbWBKRZeDDWdNFgBCG293ZaDNo5GJFGNzQmeqQAUs7YJEJgCoGByEpsuL",
  "key39": "5U4G2AsshmccawkPdauzAmGuX1nzy8fksbbbqqspP5cV1EVqqdZJbXnxH4zv8XpGgG52ryW5otCnftN87wktEcMT",
  "key40": "61yz2QSPLC7w2nTjf1BBbt8obSYUh4LRg1f89bht7x7sS5n2DruDrvNc3YFkFJpodgYW7vXr5qNY9HoPa6kTtGB4"
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
