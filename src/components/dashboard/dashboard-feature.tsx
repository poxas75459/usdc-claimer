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
    "3EHbMyBiQfRs7oCpivKyQbUj9C2dxRJsvDyx3fVUNburyMFAPqkUgqJni2iCVhmtrGdtHTYNk3MfdmoDvQadKmVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwjAYR5WsstUEG3tZNmewpNyKaP1GQtZKv1h11WPi9Cm7f53TsxRQQNP9qevHELhc4iqUor4uTbcXeZyiafYj4X",
  "key1": "4ptDYB3SXz5xaqpp3hgDJHccHydnthmwThwcC2aFGLHucwVjBdpcSZhy7DL3NR1KnQMGLnJaXcDJEXYRZeZpyE9V",
  "key2": "2Ge2eveDdtm9DDCKTcaYFWZJdrNQquBtHiCmQatkKejAqJyvzq7i2NYk7T681rsJEeDd7QfeDoWRMnTdCL5Hg2U5",
  "key3": "4yzgDav6HUFGyziaMrsqfncdW1mdnqgJhR8B2cY2c1yfg6efSJeJhQHssNGS7uYVtyWKqtUHyFPepzUiDWXRuS6J",
  "key4": "66nxZDNMxA8ZH95CUoFgtTH3omBxb6Huf7FS9KmsG7V1nFUfrgWpsg9RDN71DfzX4gezWivcQ83WWpmGCRNiCktd",
  "key5": "x35L5TWwFtmPjUfmbrZWufRLNq3GmTXFhW4qat7oRTQwfmkCZj6tu4UUEDgrzDog3UZxX8xMj5DVyCEN51t4qA6",
  "key6": "58BGmSmeteRFmdMfwUXGur8Bx4wefyjPRRuzWA4pqQSVTH59AhsB8LXnBF4JyUC7SgNNPBDx7jsLX5FeM4y5Linq",
  "key7": "2vh7h7ggtVKLrnBoRKNTsJMxToKaPq4fujiGpcZxR5UWEgbjDbpLQpq7bTfSbYM1nzMBHJ4MLkjzt9BbSrsBwWh4",
  "key8": "2nn7HkNSs8mxEtELqK9ej8ys5sCLUMtda9D66mEojDBdNKYg8LYHsXSXfNj8xi77gjWT99WcjGGb24rzVF86bzqG",
  "key9": "58BDitwvvkroYK6vhe2ZsPM38FmRvwnGwKSNNhsgC9EEwAKgSNR6cceXRkQyYNax97dEWtDucUJdaypATJmCDaib",
  "key10": "2ubYfzJaYB3AM2S4vAvtzFNhEe21vo9vBbVXX8akG3QB3vwwM2juxb4nxpWYw26eMUcL1mjSWkuJhW3YKuc8Kw64",
  "key11": "uoBfAj6ZhG7EEV7UosaH9wKfhMrwVrzGUbKrY7qjMcC8BooHqJ8hALvm4nAjfMVRdaudmRrAPno6SmFEvCNWBQV",
  "key12": "3ukBjzZdQ1B21XoDT23bubStx9DKTDhQbgwQvb7QQ2Nv6sgXfWubYRsZwudM3QUQ7gtYCKQzaL92rxHLMU2rYwK9",
  "key13": "31JxmYHnT43cBmMM5JWjQifsSqZr3MuDDpFvo4LZ16QueXfToRtxbjtZtCSnqgz3NtUyM5Jbk959tvvk97uaE5Uf",
  "key14": "5o9nF4fiV6EU4rnfixaWUr8qZwnsuMyNJJXcfEnh75WGXn4h6peup247skQxNSn53doPxt1qKyugcpnY7H118qJM",
  "key15": "33EAq9A4hzu9tPnNpnkqZnDLa5tgkMnXn6Nn4r6wxhP5aRgF5mFypagPehsnGETU77tNjeAhykrvN8ThBUrbbkhu",
  "key16": "3tStLUpoarVckyQEpD938GVfm9SJesxPZH5KqHBQRQbtDBwXkDRi6A7HnEGr3r19hASePc5HSiBLVCUEc5GM5sdt",
  "key17": "4DqJJZSTWvyMsZqsy5rdaP5onUB2X5pC4GnRkTMcJcz3jHFkBP85riQB298yQrfriw4CMxzVcDXxKDe9DjxAQ814",
  "key18": "33U7WtqQBCxiGEbMwKVwxyU1Sx6pSiWibgbm6Uim8piVrDWxMN9KQJYFjixJci5UtD9vUe4BxGMp8pCAB3SH9qyt",
  "key19": "4fhb67s2Nu8CT2KRt3h1PFays1f5B1G265wnXMuRAYnLArGYcN61zVDS6fufsqMCfbBHofz7UxBM4ZNzYnSqgVZD",
  "key20": "4ZBKzGDg93X8DfmYoZuum8jDSUQ9uFg8MMBmw67V1eGzV8B3xUgxMmm8Vko5pgvgRepZBtfdd6E6XpHjArQ5bUd4",
  "key21": "2vgT6oEQbJ3WmxLLNsB9neYnKKQbQHcsXpqYidQm6WsBiRv6uB3hxNcjjawK4ZwxEogmHFHk3HBVgDq6FwCwKPM5",
  "key22": "bmFzVeuPthXkwPsw5RvzevzqZCuhst3rzgmNwM95oMmqmXFjPtkLqNF9zcP8oDbaB25Apus5jLS5kUt1VXKjp6i",
  "key23": "27nhisQuAvB1ZN9xaXPY8ZdFofVve8gSyxw2UFc33xQp12AADTrf7pYK4zZz6i7BCbH6J2JMaTCTgoNxbcLF6Vff",
  "key24": "2bjXnDahCSXfL66dBGm47Agp8QFfX2PUmCTgeGwYSG7TKdpPzh94zyBGQXYEuVtgTTG6Azrj1BszcQWokUonhyU7",
  "key25": "8XtxhKjSeLBnHrUKgnUSabikAPxWw8qzYt9zjCt5eAYrmcVvSXd5iCW8C4KysYLowuDar9NahnA9XFPAQfp2qjj",
  "key26": "3zmyoNUZq8Vb2jC4g4WUD8nTQUKcz52nAFsj4n2ZzZJWRkSCQfHwTepwLb28aETf5V33d5hn7pQSVLLpo3AveXnx",
  "key27": "L7uT91PQdpftzMMxfbwhTaT88QjXSHKVAB5hAFitwRwnwd2hCALSnhxbwsn65HJhxnHAK7v2uEh2bjHmA4c8dGW",
  "key28": "4MyeipUPdfeUYn1g2An6ueTSY2WQLj4WKUv2YdYFG3rLWenAwZwDxspvwgrfHx6ycRBzbqxJmjXkyrvHhSJ35FVk",
  "key29": "2pPMXhwbyKrViCXjXMUzzvSMoVbXFEJzxFRDaqt5BqtXoLFaVLPdN3V9aB912imFf9ieP99WmE93fCtoJaGbizii",
  "key30": "5dbxLp7XpZU52VUP1RrDry6Y9XzNqFhGEfk59ptrB1MnykGcB7JZd12o5Mts8Yp4NcS4FfUAKsvbPrk5cnaaSLwV",
  "key31": "52yaE73SkCGdCEX8EaBgWALXeKEWqoafG4ZjhJ4wFG4PZVGruw8s9fSdT7ski7jTRVUmTz1opRqucrAyBiRpeTVh",
  "key32": "3pPqThMuEyhHbmKdAgSiDduUkPMLHARqs4XJq2dGn58aWXj3ZXis2ueQFa5xv9vz2KJBiGi7UsdeX6629hMtYaa9",
  "key33": "UQ7s8wuMxfKEnq9AkUvDtSo4HvPiVJp1WkB9s8SA8TRteh6TRVfbB9twHdbGfmBwKSMoG2kx5rPc4JmTWTeWG7S",
  "key34": "3fjj1VLb99ds5SULUTEgRi6ZiTMCxtBkinM9Gf7Nm4EDcfRgbsQ78ppHqMb4YxKNnrDVxGgDWKHCJeCskV3offZx",
  "key35": "63yNn8hqobJ1GGdZsfLKSbdCkX2PaNCDLnFo3rxQNFsLqgEp913LwCLHZwfVUkSWLDG3Bsnvj5wdfoMkfgsLDSZL",
  "key36": "5beKPhZKEmLbbKJkXggTwMiL3dgUggyHieRhzuZLHuuTMx27xycHQvZAGmn5ztsqdJJDubUer4Mq6KDW47QyitrY",
  "key37": "5DVq7xubdt7WL1JvcakiaJtWEX5mL36SfqJcfnqVbWqpffMx9mmUdGKA7fAQykP41kKNZ65KWw866jCVif7JxL9E",
  "key38": "4uPsL7zuMKQ3v1cdt7uraXbs513auxbieqaspsZpc5PwqMi6c644du6xtTbszaj3mbhGbC4RsNiTnrWzPJN7mSdd",
  "key39": "B9ian6xx7o5BPfZiU3UBEJWvmre8VPegrxYBuLu6VSJLMFExUcz33a2wGHKtD2fZ18CdPnf2GUNfuxyJtECyGBT",
  "key40": "2z5oy49eiVuP7PBLMucU5n4mGdRBLKrYDh2fcEcwdHe8rn81puBzKwK3xH23TxUWjdvM9cCH2CSMcvjat1Xbm1mH",
  "key41": "4tEt6VS2PmeQYnMhgFYCEBdFsKHaiADCmTC5Wx26Evio7EtwAt766fLfjK8atxfHKEvgirMyNsbpEaAokNdZ4D4B",
  "key42": "2JhiSUp574gjeKaVSyQDtpsn5G2Wm2EjqV1hzb1JcoBcpJf2PxfPz8agTLinRJLfumj91vNtQsswRdBHPQW9jiiU",
  "key43": "EPFH2v9bN7isTyxDXkxdd1vdSzVei7iMiCFCAiqfWF8wRuWgJTN3cwL9d3WLmkrxYZj4twBrAVaedkFDGZAz5Hh",
  "key44": "5fwxrvYJHVCKpE22WauPQDvXg6ZN3CzFzqXuM8ud2otW8ySHmCneAFyJ8CEndSnwcP4AqQV1f2B1FvdXLcSnSa47",
  "key45": "nXcPfxT6cSokv7XCgiaqEANeWddvhBBtmW6ckjeYh6dZzMGk3NjPgS6fyhxveSmNeDDHFX5YZavyBAeZFyUUJrC",
  "key46": "3DMLhdFiBxk7Kp6jbUJfoxsxhaAupAKARPr3yJqXmZLRhT8S3jkGBzneQ6S8ZVVtiejMZwGkz4ALezbz413bc4BT"
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
