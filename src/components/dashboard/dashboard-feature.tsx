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
    "62Woupsqon18LCsmxNtSEN6ZNptaxY286ccjxMzmpKmS16VEi3GqskC2cBfnCkX1DcEoiQY5gzzj2fhpaKVR7dcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ekqo2LE9z7z8PQffjVs8gmssWAqhMCdJGD6sf89fsyeMu4JZAGxXL36EjpaTcSDjagZRoZdEaWGQgpFUi5e12jv",
  "key1": "4r4cVfSNrffsABhf25ZYSxherUhxqz2BFchsvTfUyiT1v7esrGY3ic3VgcR32pXWYQMyub6LdyxTK52s4f3y5sja",
  "key2": "2DrAqwXhMSe73MBpR3a82BPD1ADkKgr3c7EVb3dvF9WXNF4CWg8cLrzBXdkr5bK6vdXHBRqPER1FKscvWAfbT3GR",
  "key3": "5NRmSJXbqxtrnX1WpH8TaYyGUJJPrgkVmjExwjNg8N21LiL47KBans5waQQCfe3XBpcTroRAbKFJCQcqhsAEFGtZ",
  "key4": "3sobdUENuwqzeTVEneYRuXTMEsvvAGbghZ3qg3ym3MKrncuYKLig5NPEdUqpAJqUAeP5vDZfd5cMM7ypNwDNHFJ",
  "key5": "4VAMCFeWkGGHroEgmLghNzrY1tbg2EcJu9G7WztEjqmhD5uFfHbhTTawmyYhMzSg5Sdu1cmypGSthSg28Lo9bQv2",
  "key6": "3UMD6awocd2eyu2JD5LuEpzAhD6TBDtm6q8CNut47MKDKTbtuNot4LQGgsR44pzwzyLsKxHu3pp1eAwdqdRwz1YR",
  "key7": "Cs5LyaxtftnNmo9hmAdJ3sCipwzoEvm3L68pJ1P5agHzWb4wcTMbuT7La1yhPQ3VfjGS6mf4YrUspCJwScDFbrD",
  "key8": "3Tpka6NJUwhf84HA33zZajs2thdRnZGJdBWsrp6SLAPRoQtSkyCXd86rfGVNmnYpNWfrxdqamNjdv6bmgj41HrrG",
  "key9": "5nSWBxVdrnpXSezNzZsJZAWNjYUmUCn85z3SiL2yWKoDQq76YmuHkfPSQE16HLevqVXRr3qDwXKVXxCLNrxH4M9U",
  "key10": "3jgHyHZMPMsBaZoZxw49vGPRmHtQSPq8wMtPC6skQ8H4G7vp9ccB7QBNpUhxBZtT8wNBd1u8GFmaKuKAvE17siy6",
  "key11": "5EkT5REZyjT8vdwEm7P7pykrnBLhB5CxDp16UoHSXLsKJFgEsad6g9wqUS2x3nDwEqKL9ubbgh8vt2JVydc9SkZi",
  "key12": "41Zosu4a61fjAqm3S9hDwmNXugVxa4Fu8Vg2mxR6bFfNzvrVwN7eLzVxYGvDbzc9mw9UBPqELjuyeC9iTzCAJtte",
  "key13": "GGM6K5u35VmjCzMnwGEzLwvnQeUnVs2ZwJPdqNkUPadyNNH2hGEqefqU99aLmTroQWEcxmoE8wjXAWC5sy7Zyna",
  "key14": "2jtfZ4z1656FVjvCfjuQWYEYb62fGznZg1dLurz17MDYeqqkwBzMChps2c7R1D5Vtbgj3iZfhcxBeYQGQQi1f2hn",
  "key15": "2BK76ff2fcf8P3frLxZbGVDdQQDuGxeZFispCJW1LbfArJwhNS4qs7WjL4Ti15rFDhFxvtwKdZXZtVjaBRvGWGzp",
  "key16": "aFs1EqmtLgMCKU2Ne2FHLwpax5zPqUPsBFe39u7Y987gGarnGPcdx2ddYyi3P5x4EUXn6KsTUF3bSahtrgkUtPL",
  "key17": "3P9Az9kRpPsnkWUr78cq4WGoHbCBBiUJJWu9PMr979dm1dRb7XR1NxBDqXR8jB24ic43b5QX6tLzq3KcTUbHpJp6",
  "key18": "53udpLNv4FVfNu1cxQX9LDhqrsb5EAo681dMra42GP48JaxE991gUFnLsrhmuVdWf9A7wPcsfGmvwZEX5wbPusob",
  "key19": "4WzeQ9di5HmiJA5nVZi5WvC5BpusDaPVHxKhDNksPMJcbHPWHpDSMXhfXQdC3oSmTDprkZ4yvm4FGys5MRzAvBHE",
  "key20": "4Uza9vwxCUmnTnhqEpgpWATM9yJsnDogTPV5GozaBYwAZPcsdcvhGyTjd3Ucdt5YXaTPjC2DWMHmwiHZUUyhfenT",
  "key21": "4QRUq75cRghECnfTbHu3Wcthj9KxZGmRC8A27TqwVohSRhxNJyTgeCT2sXzakF2W1x4xs4o75w9iKkhtduPyfNsC",
  "key22": "4CjqS8jTQMXoPKMSkw7MDnnJQgxrDViWJZxpEprenWE6GFWttsK9Nf8EcK3TkzwZUzGsiHbdpZeXkTP1ULte9dHh",
  "key23": "39EewdYWhS5LBfThgQsaKbE9FsohJ3kENQDWZpkaNPnQYWckK3RJNR84n8wnQiTRVitCCvPemxUudSxYoozf5jGZ",
  "key24": "5tHvktBjR2z9mbVAp6mTHFByYQFfUYg4YjtzmisBwxm3akEf5pB15ASAZqJpC3GPoS2fPThvrAA8RxRk51ruJ2rr",
  "key25": "2UiWmNnSCaqc78MnTUThzqoi18sTtibHCddAqPPdwtGzD5bxneAVQa6BUo4FYXBL3Wf2sMMtjcN8e3Ws2a6ioQti",
  "key26": "vv1UpmF8yL8j5fr5KqR1qJyAx7SAMfn2TF3AkZDHkJ7WNKiTjgMjP5AzZpGnngEV2CYizSneMEKsskKu9HZNdAq",
  "key27": "3Dr5s9T6rv6WkgvuiKFeniXNGMeWkV1oVVeg5JYJVabMZWwpCvL9YQaXByYjNG9dqDXnjz8jg2odvNs1cEASvJkL",
  "key28": "4KXBSbZV7rNHefxQjNzkuEHjsGgrQviK5jBEkEvFxokjuKNFXnJHdfoeXzE7zHw5mxFP2zQ2LnXt5du7X81Mv2cn",
  "key29": "5q2vns6f45xGcqzDnaVvMRP5TbaFVtcyNxXUnmouacTcobnSGLmrrYu2G2vHDwDHAzyF9rUc6iqht4oQvsDfVhoW",
  "key30": "4wpXLUWN8LDh4SBC7hUtTfanVijMggv4XhJs4SoozKppqG9kxCgNL2segZfQCAjk5HFenhk3ucQXA1WwpbLXbDUR",
  "key31": "2XnP6YSx1xTPLxBqhHWv9pAUv9QL71ZV3hCK7oYozEx7oNfr3Vk9wz1FzvzHcyf7JhTM5eV9uSrYoWShoFDpv9sg",
  "key32": "5iuDYSghzgxe1Jm1D1qSxzxMzxLLF7y4BmvvEStpmXYxWP8oeiazuJcRrQ9VpsJ2YiKRJohPB2XkG31xX74MQkjx",
  "key33": "2J3xqfD9FQZaXxVX61Z2CDzB3CPEWdnndW579b3r13jf4xxvBL64Nn3HZkJTecvYNFoKwzGrjQdn1AJPhCrdsu4k",
  "key34": "5qbBP8y7uvERcVKtU84QMuX7ufNEUsQbD9RtqyDVLBieR3buhLwhpipsjnNK9pjpRecwgWd5xfHyC3bq3XRGdEVE",
  "key35": "kRdN6NhexNb2d46aE4BxXqFwDtktVZtkJp8GsqSJmveByPuzWCCVUpgWTMJuHg2rnxbSv5dru85UdkPwygesaBF",
  "key36": "56QWiNApJkMhh3KpU4RmH6RRs1YH58jtMQEGEzgwPo2w7tnsT7JMAg61KELd87WUX9WEorx7Pq6Q8kjJHf812pKr",
  "key37": "9jxvD8v2XgdsjUxpQVz4qP2zKyAXf1FsFH4CTEPukHegv5W1JHMk8bMprCEnqCmmgqgvSBVpRBqQD59CCSrG2uL",
  "key38": "2dhXD1cSwFD1fcdxkPBQ6tko95nN9ksCTsFkM2zuZz85rPtXyGE6QvHb362pZ8SyB74NBtfT13qYnE7mKjxUpAXd",
  "key39": "48Gwq2E8hHp2FvVr4fFHEQ7Nhh5smMwnjUmrk5mxuC32usv4qzBmTt34YVZjeLittPtxD1h9VtmuKWpdoWYePcfu",
  "key40": "5CfrFqonvV5gNytBFNXih5oTBJD73YXjvXDCDQUi4omkjLqqyU4vcVEAaPnDHT8GbEhjsWapALZ4LFUdnTFoXEda",
  "key41": "4Vr7u6QbRYjWWEDWABNAgHSQnv1XC6m2nWRs4KamwCaaCNhVj2vemu9aLLD9mcvcx2xyUZvaE1K3T64en9fZrwYK",
  "key42": "fbAqVJA4hWz76NHtXxbSUKPfvXW5vp34iVRLy4ssgbFhu5vKNUUArhARyYgCyo9PX1yNyUijs4VAVTF1mWCVgvF",
  "key43": "2WEPbrxFmYRKMuj56mbDEYh9FAmpt6vBvkRF1bPqfWh8M88oEDrRVEaBppGzkBz2NtCEzZFxyqNau3cbG7R4QNz3",
  "key44": "5PzGQUZm9xRiZXSERVacZrEAPqmk6GaNkGAGRagGB9e9r7jtQ8JskzSXukLUCPJspVuExY7LUJiPimNrj8TPr7SX"
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
