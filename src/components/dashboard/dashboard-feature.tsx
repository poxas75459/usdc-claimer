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
    "3Der8QTuwQCo3B2z5mtiYwcmjMwSTy3XprknG94L67xoAWLRVrCehzNUELEVE4XZFoNzjmofRRUx43TTzAG2Cq4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2WQYoGAuC8PSXH3RVuFPVavQHTA3HHae7D24wo8Hn8wtXQJGa5B4RZUgjFEAZMr4LSm85PpMdXu2NqyEfdwTRo",
  "key1": "5eSBFnqCc8bFNjCm6eXie3BRJu3Pq5M3GYirdxM23b313wgUGHUfdwsHNF143QcY2bxi1mnLwSqHRtv8cxccb7TH",
  "key2": "5UPxHKyDhsvYzDxqZxbBo7k84uFxHF9aMBqQ37Er1N48EUC43ZkUGNdeoEGanh8YrHufkWdxk5HnTZN7FGLifWMX",
  "key3": "5iXB49KhojsuKEEcS3JMSsCVRuQoasftSGEiFDhgqk3CN3Zx9ffG8aX57cmM9NYLvuuMzqDhuEmpKLH5LJpVcPad",
  "key4": "3VGQtE4mhthjgXqPoFfBbFmoZmmBicmVnpMb7dXFQ9JvaAH5oRsNDGxPvpe6i6BQb23HCdRMcKCwn5D4tNTUpgK6",
  "key5": "4VAN1YM2KWPNNG1T8D9GYxXPak7ZLNbU8hC31QcftnkC9m8Hp62g7cRDhqyYYWjWjh63F9MxDiHnt9CcJKfWR4Fb",
  "key6": "3rivPNGuP55pXEAqJwiRq41BRFEsfuKCQXbVfe3tezGVSUmrjjNCtKvYErqEvisrn8BATink11WReaxpe6aeAMnW",
  "key7": "4RnGLEkwS6PE2WVudfVrUeHr4QkFPDkqviCLLeqoF2sXNJiCSk1gvW9myaeTRJ1tQR6EWXo96h1xbq7YH1b6T813",
  "key8": "4saHie5DsmVEGWN9uo35TFsqVDeJX5PuNZChHJi1HkfAmZPZfVwbNbphssHLZCasg2FtY4D36jjqTJYfvH7UjGqq",
  "key9": "24DEqof6n7SwacyhrRB2hJENRymq1kzj78dtw7HFCgabMD4auQnFUDqmDGv4o1jxi9EH7ND1KjrBJPABrjAFsAD5",
  "key10": "2GX6XC6tLZNmJEnxxcsnik61dgsACa1UDGw4M86QKRotPh8ZmBu1wFW2nQaqXo1WbRmnKfVmhJaPXcg43fCaZDaq",
  "key11": "5SeS2DadPcGLN8vBc3x5rMejYYXuQXy1SGDc9t1KuDc55DFkiuzqsxABSoDUhP9tR9qt88q7Y2ZaxBaYvoBZuQuh",
  "key12": "49dMU6LFE8e7Acyg3XzWkQi7UojoisJXDLrumuGPnR7ANGfAakFqt2FTEb6qG7RdxxHh57aFXy9waNcmkyEgt6M4",
  "key13": "jmTzSocEvgwRomRrJTuLid1298CeeDvBEHeXmNSnAbfdu6KBufSHWShKggEiEsgyc1KW1AMxnfJKEEoUhmmHUpQ",
  "key14": "UMwQM1qdsfGS2aVpWDgUJq62dsy5h4JV749fnRfW3DvhrenEBoKa3pMBde12bwHerPRvLZi8UCEEAo5g6TwXt2q",
  "key15": "5JPyDgp39kBVGGdv9potrVCkovHf9yH2NS1w5aqMCFQcJdjbxbcm4LPaMV4JQQoS2nsqshVznFMCJapQ9NHiKhBS",
  "key16": "3NspKrGeHyFSuLhQHMRDMdN4znbii96JCZuzwGvUWnLZxrsJPpx4HjLMaw9E3U6fNHwbUoaQ1w2fiSBdMrMXCyRf",
  "key17": "awiLbcLhN8NFGyeXKw5Vs8DtGY1XWCAvCnFpefjytCQ8n3Wa9hApDfHnqdMzJneS9S6cb94YHfTz3sYyVrVqa9Y",
  "key18": "5aapYUmHNNFZqgUq6WPTfD2nko2NuYFefNXczTnFLAn4DNakzuHL2vTdjro3eyqrLUsYozcDgpr1N7SVzddrpbhg",
  "key19": "ygFYajJQUzeqYvDtDkgE73EZ4PyjK4AgGcjRZ1VH5qpYy1wzqAbj3hZ4c8yJHGVrYbGSQs4ZMq28xtZq3eRii5K",
  "key20": "5ppg5rkcgdgFphdRZanumX3Lh4VPoHPkz3cJBmgxRdzEzpvv8jPFgZYhWJERcPt58DDta948hPWoCzuDTQE5JyEW",
  "key21": "3oQt4tLdNVQNs5amypdJFkWbArMNM5xWTReux1viXChAB5KcFJgj5pHFdgYp3WjoppTafzq9qHbkZRd5Sbvk2Gob",
  "key22": "5gx8XteEGYJuBUdAHpKGmvkJze3GdDqmuXegNGdNmq7hxsijimAuCHdGcxBcqwRZDDNM7RpMYuD1RQPnbTAs3iAy",
  "key23": "HEvAT4deFSwFr18AJUXrXea2BrBEfoycmUb5x56jnd6yd6heBXoytxiSKwsgAtNAQEJoCop3VvBZDzic88TVLJY",
  "key24": "5SVwW66KNK6rHNFbsQsXfZoXiZo55fznT8pAEqGjeZX6mtmS3Ge27NpufiFyJ6CYA8DYaLHT2rYg4dLAmAPhTeie",
  "key25": "4rTNfFDFjZNQLexuoq5wXGsaXioiz9avMELkmD4SYu8a4i9BxcrdsnyoSRFTFSSQ8DXttBZBpvdsSXGFQUuicfCa",
  "key26": "6dbi4BA7DXDyGCXLuHLDu9zmhLHiHNUtUDW5pnYTpEbdh55auVPdbrVLHgYdzmUNcVoyjBZTnYtM8JN8zY6pUDQ",
  "key27": "4yfZnJKB9Py7o6ioYDTyf2koRHGdKWfySyYzkLFpDXwG9yhApWbGUgZrENCqpr1FCpUzd3Juuf7psT65QGXsRrGp",
  "key28": "3UGjWUtgr2yvytkbedfY8ceJsvjMNdNdVr7QyqAR2zce7Xz7FmySEt9sYxrFbjiM61dMsNKir7SXuzkTKj9zC3Vo",
  "key29": "3QVxq9ySqarNoEQwXuGaa1kw3dC2fNNdDskqKupC9QiVTDASysSebZgGiY76qEzoMRvvLj24vtBMGqj6JyFwW6sZ",
  "key30": "426sRWuF2zHXB16ZrvLnwAvu4eGH9Zg48DG1zmkMZY551cjZuGFC7Z7CVYTziQz7DPk2AFAPuEmDxP87irTUVJrY",
  "key31": "3oBU6VQuyMAWmMUkuWxPb7zQVnaVJihF5MET5EvpwHzfexAm4RE4b4MbuxABjPaoyXBw9Ftbu8wWDaxqbnu5PiuK",
  "key32": "mGpukSBKvZjWkF4zCHg7ie9hWEqGq8nmezqsMWuZUh7cQo4e7z7yg5hwe97GqMtbTPYLTmxoo1nKvdLiio2vJk7",
  "key33": "2bwANTe6jotqGXKvLevtkZTTmWYjtNPQYQcm4LsTb2MTudHHZpJa4tcFrXCduvNNKLsMyGrCR4WYvzeu12APGjug",
  "key34": "2fvkbZR4vzXLNvwoeNmYqdRS4uqQ2ofFv87cNeNy5UwhCDN1RHNkgiDZmuXftAgcVWPGdhGvGKHMRx1yosaGAtEP",
  "key35": "3FLb3PAyuuNNmZc6qxec2XsJP2L82h52AmZBbMo34mZbTmGwvd91xxfNMaYyojgvbrgHhcBdQaEfHBLBPcXKf7rn",
  "key36": "3Z8JG6aNftiw31ExAUMj1QzkJYwNJ9xibWoTPpuTmTRXMzzsFRozw6HPynpeQYbQDUZ1TmzEXyJGycS8iq5uDhQ2",
  "key37": "pyVxPtBBhYPddEJNcc7f2zbxUSnyhPUmCSAwaTcAkWpoprj2CcEtBV93c1D1Rj9W9m7xwisvwqQjorKdNwQxW5K",
  "key38": "2B8zHUDwUk1T85sFsJhi1cUA6pbbnyDoeVHRUAjfsBMzMawLYJ7f88VDz8UyNHnGYgHm66osUYCz4gkKaZVNuvhP",
  "key39": "3Gf5aS9dACYADEmJSDRiYLnYp9p1CZYvHE7mr58zLnCXik7pXR6rRSqsxwueMgQ6VPqXsbx5U5HN2reHHXFmNNCE",
  "key40": "2D1ZgMRRDYBofvM1jmzZpYURg1WHjCpNupvBakgBWDazmBWNsv3EHZVu6SF8LPU383eVp8674g7NtEvjkhLJkRJB",
  "key41": "3rMRwoEZsicAtkrMsyZDdadPQVrycEZB43Swtecam8jeaZVvWZG6jM9yUXMS2DikEGujq8JpgjfiAjDXb1b3sAm5",
  "key42": "4c2oGPRGatAEUt5q9afdzuTdvcLZeXixrjieKdKKV2WNCUNPCB98og7utHvGnzSz7Rzh3ykzRNXct7weo5Xpt9jV",
  "key43": "258ZHLYUfqJK77SktDpaHLmAZd5GH869Cyxq8AqMxR7Qywrs85yXo2Y7vf4kvmtWva9Y9X7KcSENDxLEgUe86hCq"
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
