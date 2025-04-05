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
    "Qj1JLjck8tjJtX22UdpXTtiXfXtpqNWuy3GsEoA5riRanuej4GSQtQwUtD7UX1REFc13gcARAs111fxFVT7uSrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKSmtwpJsP1fvXiXCv8NqdE4bUtAfL4PkMTXwU3ftLJ4vgfpNxiHjcB8FBmRmsXv359J2zyw2jqXcAeytqT2BmS",
  "key1": "5oouSQZGrrPRXoijVUJ1DAoYHyJ4YU6bdCpWJbERMf78xLiqaKrApu2K46PYfacn7ND1ySCgcXxsnVNLGKtRh1LH",
  "key2": "3kERQAH6QoLUjW6tQsvQsxoMvUhuo4H53hhkzD5xj1arrLRsyiP3v15xQ8orCSTkyEZRpPnfmUBNNHVCru4tFoV4",
  "key3": "2RYQQfHDRaGykX4qF7K1c8sHtJaT8EJrWr82xmQLoELo6J1TctCnQjNNneJcwceRWiNDsTPGjykYsvnGeYMGSDvZ",
  "key4": "5QGK9bFCMYjUWRpoeqfzoKsSkdYEH1bNFFzxEGBbUrNFy5FkxVjBbpr6wP6Z5T6bJKVCVRoaQxUqWjjk9kthGeb4",
  "key5": "N2GfgTZKAekvWi622JXuaUQEkCzsVM3qsezfwQkJFx3phu69gxqFDbQcYMX13Cwsr36RYe7b3LMQ9xTtZnTiCg2",
  "key6": "5qN2tx34MPjuJvuThwxqJanEBB53VWw9PcEAuMJBvxTsur2Bg238w9zfLQitLXysPZwcmVU7tVRwgsX2oCDYkHXv",
  "key7": "UCRxXJg6oF1zAEEgcKTdDG5KxdZ9o66rNo6yANzpui7JbX7n7jmGuNvZmirtiYvJy6LCiLKwpvaw4awWXs7JD2F",
  "key8": "356qTfcGGaeXxeQXmpQSqcCWkMMynyH7yo4gDegfTP9L7zQEgxZnNAwUUZeAiLiHivpddjdotCTkcs58EhvQgmbn",
  "key9": "2WfNQM81yTJJcFdEv55TXpsPQtEgAErm2vFQku1AsMn6RxUFsgSpVKwhZUcjJwng4VGGC5fmMwrKGNnhrsarMH5c",
  "key10": "2STdZoprsZZfWDjGeFDzrSpkHWX5PTQAarPSUgscDjAoxm6SVPY7Xv4y1FDpHWNhdKBZ2eAXe3M7h9WoqvmAGVak",
  "key11": "ejp1KdGfS5ZxFdcdpZP3CdfXtESi67jLMVYgS7o8KjqNaizL8kjzLTNbaB5Hm7xzdfZPoNdN3nPy7ukrNhnrxYn",
  "key12": "rroL4M2SXZ9Hyy2PEWwTmpzLPse5rMGeLnW53Ydi9XuTFWprD2jr3x4Pgv61VRqBayi2pASbmFYDwvvDrEcGGRi",
  "key13": "81Dz3VHjVq2iroMdjpWqCNmqPnuni8iLDVq4H27j1T1Eq8KMvryZxcNpE6qj8EzY9eLCtj4CnTX3r8JFSZ1kBtf",
  "key14": "4jwGuRkR6S5j7CLzNiVDokNHpwFHSKzYFsx7cUrsyphECm3PMTzTzUZ2BiWkMtpKseGpLC995mnJiRgLobjMX2T9",
  "key15": "2VWuSgKmJmvfCWuiYo497gn1vKzRrf84347MM717W1ARaYszgawMB7MTJRp1otiWu6qPNgPGcPb3mT8ZTfpKjXGF",
  "key16": "3JbiqjEQyxipR8SwGGXpowVknBHKGxw9a6jcZmapkDhhvAqUqgC8auNu8Tk79BdBw2RAvpE2JQWcHqSyJvjGKozX",
  "key17": "34n1PvwTf19H1mzhfkrXAPmkRTSWxMySjUNRrGQFpLueFbsDPPPskmBFp5Lbc6fFWZxYojJgmMw1UGkARcNq3FWK",
  "key18": "3hxuBBvURJfGbGiqWRFCVouEC9KTCXkyJZP6mDiWAB8WMv5W1WFHscJLoodmEPvHAaS3dexSrwQUf68WLFHJPhJQ",
  "key19": "2JuR2RBPNKLpb5E8oncS2WvDSqf44Vq3AmGW4a5SeEsscpbtynq9wt1ewvzJKhzdyLr5dbeGSi4zE7pYC8rCciJy",
  "key20": "goXpJptNgR4i4AjWYSSx5Wu8wowjWdaGnCaG6oCUKLnsRQZJ5FjTFWwoT9exa3tWdqMaEWiuJZWTGHmT1niwvab",
  "key21": "4NFiN2DYyvTu18i76H9Jo4WEMrivV2Fg8M1bjoewKVbtTzbwGqWXrm3XzptuvDiLdc8Tv8jMo4HYtWWdhd6Tiekp",
  "key22": "3ooXCMcTyZgQE12dgtSPnKdsQGyd5L4eqzSKhFsNihpaxdhb5mQGpXmBPwz2oEomAFeHcECcv646L1GxctfPWiVH",
  "key23": "5CXDpEadcS7sP7NiJBrtF6KVxvwZHifYvPPGK7kbHghc6qNPq28cTEvETyBx85b4a1k3KD8c5jeJTM6LP5epFZoa",
  "key24": "2eKGrQwwBb6CsNhuSi7p2wXzgSSAWnfzKdj49vSqoBXQMn65sEaHsDZn4y1iduuDVV4urqWjYv2NpE1qbr8UDD1H",
  "key25": "5r5aYetRpoLKh7kwPpidXhnrZZSeHVSJGPm2MChx6kdxamsEZFkFBbNGEy52VVyL5LpvdJk3TtaoPTgTFih28z6C",
  "key26": "63viD6QaEmGqSeQWTLxFkCRjKEbV1fXdkooR2TWPL73rv98FZT2MHebpEous2mc1AMJnhVSghtTBuWYa5eSdHCuP",
  "key27": "2zdPER75ibNeegUwprjRyWcdrX3joPFjFozAbRaiyC1aErJw2FxeboKnbNfGVUBNSK3cmu2bN933ZY7LPWFMLRoX",
  "key28": "2AwCcZ9FTmzFgNn6s7MysPtYmGJcbmHtna1KRRJRDHeiW6r7M3zjy6Quz4f8kXAdG3NsVXRYafiTwgxgDsHRX9H4",
  "key29": "uKxi7pj39veFVusYF3x8Mu8jWvm7VAF76LHPMiJaV8yD5XYjGXDbe54KGubLLT1AuwkiuHG41tvPk6vyZxozjEf",
  "key30": "5xp9kiZ9tpTpbafQ2JC476RKwkSnozT6ssX1qv4jeuRzBCcWcohaEHnYbhKN6dPyYjqKET1sTKTgpuKQ944TSzWA",
  "key31": "3nxjjRCjAe1yWXhbzJ1tv4b2DRxivYegm3AvVhiZAjHqqBbWES6qKCWTjXwYtmjdQrZk9rQ2XUBgnf4ATELRTKDj",
  "key32": "F6QGjbSZhegbWuR1NpeLtLL3CWcjT1GMYW9TXazerdN8mtAYRVGhay9weZ2LyPuBnhUro7MCshm3JVU5UMaQw7q",
  "key33": "kZt6Ta7WGpo8v2sqoTHa2GtHoYK4vAzTCXVyfSiXpu2gTLDGRw2wFXmYwWFWqpgqsshxe2N4fqBWXqmj8SAyXai",
  "key34": "2Rf8DyKS7jZxcs5o2SFG7tsoezeuDPmwQEg44PcuTKRLJwj7XX1HUn4gBUrGeri38C6WJVn6H6edvCzdY6P2YvKF",
  "key35": "5YiPXUkLqwnWgvaKR5VtNPopZ8DHAdjWGB5HriENL2j5AgMfC1ZHcw9RpfpbDSMsbyGrdSNHzrXUeV5p4uKsd8W1",
  "key36": "5TyxGECgtc8bAbnWEgh6NTCLFY4khkwiWaf6Zd2sEFhfRS7HahL2rqPUreSgBWFhgZDCvqRE1Yom5GpWykEskrAn",
  "key37": "5MWubwpCoPqeyxBomBXvevY3EagUD1yhakypipHy6aSRn7Cbsw7JyfC87MgCufJJQnfSX5VurtsAGErwpnvs22Vr",
  "key38": "3sUJVjWX6ddq4HC47QSdSxr4iqGTBHB1cVbdpqkLJsrCBiA2L3NLFLHfkTNT9ung48k756YH9hjmvh5RMEFXf8mg",
  "key39": "cS2tssQLs4q6ddLLM6MG61SohTRCw93vbRz5UWLU4nsqqBJk5FBXwM7HCZYebQT7SdETcicx2navtseFzs5y5mT",
  "key40": "26v57JHQJuuPRXCXYrxehEbzRF6Jbt78CbAo7MSvjZAx9NDhhewDkd6uB9KKgrq6ggCMA6QfaPYfQjai9aBCwCsf",
  "key41": "jT7YypN7SsCoeDNJNNv46shTi6nZk1Wng5xGGkyaeX2HxbGhTpV3H1mSwKmvTNa1wmSstCyRm2WaWpHVcFa9a8r",
  "key42": "43xL1Sin762ntx9Vd5hyEryzFn1U5qWbuanDVnRRcPsCPoSdXDtcDMLCh7UtS2c83KoER6JjG2tKeva17k9h3ZDC",
  "key43": "4EwnD2NS2Cok3vWoTqJj132jXFC3i6LPV2c6H2sYm2GokodpMisBNRQdwCKkZTowmmRbWiV2qvRjTpwyYWfeQLLk"
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
