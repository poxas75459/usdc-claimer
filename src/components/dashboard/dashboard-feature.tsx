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
    "32o9PtZf6XQF7yqYND7UrL9YZaS9BokYB9rtvdXmB6xedn9LdxNBpURo6xBBmNTiz5ZSGR5QLA2gszhi5aNFkQEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCeV8VagriBogtvvgP3JvevPHxpRMNuWmhRapZrKgPAmwfynkGjFj8zTmtKhbcpobB1vjDPASCJphKtDnEmPHFU",
  "key1": "46Zq4RvtTPmaBMEKyEp6rpW1qynANFvd6eDwJYTNmuPScRCUHsVmYmQoW25pWkT2n6CKrbB44Ff1dK32kUUtB1g2",
  "key2": "3rAciXzEM3y3HdWSdqXKfEMDm68K8o3Qm3CRsEcm4aiSKPw34ifpMHrtyXQbWoFZ2qBXcheUjT1FhxPrD5TD6wg2",
  "key3": "24d9CQRxBirfVtrfQQtBNAaN52JqukvJezHgjzbjuoRejDEau74xWWyZm6tdf3QhLGamw6scagqNNcCvSxgwoSez",
  "key4": "3zHprGS5iBaGrY6NDBzdviqHFeLe7zoQMSFhTwkUGcTFoFWuxHbnWQiVNY6jHrkiqbuCdf4hym9WQvzUfzzuhQ6q",
  "key5": "5gSw6BdkQDdgGT7MLLAgWeHsFKa1LX5isg9WZhjnU8HJiKHwbmjDeeZz4HtYKr4Qmkgs19x1eLryXejh3JJC5Mhs",
  "key6": "28sY8VkmrK2RPUKCNWCbbMDZNvbZbtubQqwnK7tDBmutXBprtFA1wtqVjs6cipQJ39t1i95yBCBAmXpE4QHGrCNA",
  "key7": "3foth9AEtHK5fEE9DqsSbkaaAebqgsSeyb6psXDtDcFkegn8sQKQsTLaDhzm1gbnER16Q25L9cJvMUGtBk5w5QD9",
  "key8": "365Y2tkfLjsMYw6FEDPVEaL5B3mGEwYX6LeznBV5WVzg7be3JhHJfEoiuaVTo94qbevsZD33USUjRhQ3TRdhztaT",
  "key9": "BeeuE3HUevLNb9jKpatvfTatii6goZ8LKAhLStKFzrLv6HyjhCNdYGzgKrQD75j9ExRXZQyrm3YT9Z3MGQv6DKu",
  "key10": "3DSC7Am1Hts1Pyrs18Sb7QVU7DZqcUPkYxs431BH5osamGCZUARgcqUoXJtcWE5cHzeNic1CEGHrtmshRhvD6gf5",
  "key11": "3Z4Wv1PVfhUQNaH3nyLVs2z9wdvDT6zuDZChxP1n2n8oHANfDHtNFBWH28U3CuQz2iSP1SVJrkDP8EVGdMR7V5zP",
  "key12": "4pPFb3AYuRoGmdt2fCg2XhumQmUYWkikv653ub3nPFfei6ByjEGrVDj7URbhJmmXpeWwLaPFvfeL6genDuznoocw",
  "key13": "4FuBBkLMUkP1ApATLy2ShJtNLseey6WNGbiCNLZrxRSHuXcPMe6Ws37HDVgkaDfxmQMsd5sDYrzF7CsdNZMcJdvN",
  "key14": "6kHKegCWk3EJXKD2FS4BFjFV2z1qeor6pcYv1ghkKtCBJYMohchSNtaB3nUT7RFMTTVPs8LU2hsanR6d32FcHtL",
  "key15": "5c78dguGMz6v7gSErnkoRCYHYbcSQKVMatviM9mFCqTswt9zp7okpnyammKJp4fBNTBWAHw4QwmxptzQaBQPirtq",
  "key16": "2k2RrdytJXka4mRz5g4eeoJAthrDV5gDBAS2JNx2JwUZYnhjGGowM9zNa9v67tjtNfruwDjasMLuAGtsWn1ZhaSC",
  "key17": "53kvS4ms2AHt3FsxvniZJkzyFJguc2GqorNJV6xqhQc2Ufjtsh7augw6rhaUZU3vVF4t9NSqaHJyrDyuwuPjWgtU",
  "key18": "b7EDwDY9GDwFNWsVwpFHk7xzi1j1nt8VRcicYWZQhjXpLhDveK7XHwWST7HF78ZBVFrL1jiRnPz71XKBJX3QiGH",
  "key19": "T1zpGXSjyRL2BrGgJs9sr3DjiwECtSnGBjgFhXZW2ty5Jts1zZg8v3y1xzFzBNBxPFFsARUQ94G9k4VbUNtoVPW",
  "key20": "3D8MvCLX5wW6eJFQhLEThAvFk4mhNxFSah9RVh35LEt4piUY7TYoCdeiAgBggyyNqJi96f5BvCQ3tpyVP6kEXpw7",
  "key21": "RQNaUdtNhXJrKs2RCzP3hRyfBNxcmmde3Dh2hoxx7fXq2eUDudCGpdJT4XrXKeTnqQDLFc42k6R1iA67wXzQMFS",
  "key22": "4T3YC1S9BGnmwcFrDjSbZ7yDsDWaSsxzHWNSEgTKSLPKEHiSSmEeKzUsUKiMnenBG6vDzJJxH6ZRNY2VmMG66wwY",
  "key23": "67QvKSSBoT1zdjDX3cT7dHZTc9iM8WPQ3YNynWPMgLHRw2oYnGDWDgKGCYdUVj3LjzQAzopBbgpgAS5F5sT8BW3m",
  "key24": "3kiQUUye95K9V1MJq7HEqVYzNNZn91DSxP4UBWyWRvQozBpbWUuJ6G7BM8eXP6Yy9N28vc9sHTeGcWp4tP7Mzxds",
  "key25": "5t87rTtUaTowcsySxXM1NW4cAHZLp7KzvwtgFwHChGaSB1MT4d147jptfjcihSYoo2WQxmMqmRYwo9qf93chjXGG",
  "key26": "3k9w65fm8P1BH36whcgjdYpgWZC9XfmbDrcTM7dEtS2hQKUwGVzv3qne4mwqH2zUt93gkaLPqoyKDuNWXVQgS4YQ",
  "key27": "644YvhVQVzR7S5tFXfr8r3F62WGsjgmNn8CDnzmBtZ1NzC6rqfSk1CZhCQAzXSJ5DEcSUF2uJYB6S4TB8Nv62LvT",
  "key28": "2qVTMxQeVZMCRCve8HdLyg9R6K6P4aSyFAHhTbDLNXoae5dvvyfrLYbDwk2SYc43XzU5rtwwPxwBtFsd2YLWpGrm",
  "key29": "38ds864b1yDaFvQPx7sdHdy8z8Kwv6hrhhXWvNmoXoP5C5KDDL7gUPeuTRdg35hCs4ViwdRdyyLeoarizjnxBcY6",
  "key30": "45cmeJg6HUB78DUEK9sAPP9mMHwfm7h5UBzYWhqiTUqygLqMjDWejBxiRhJmuwMH56PReRDbx42xtmYZCTFoXy6U",
  "key31": "44yWhym5VUzYBMXNDQKjjkLhzb5DuNemMPYJRsEk7eKq8FJyUVS37iTYuxFqav3nH8h9LCQ4B9MJBTefcf3SjRAh",
  "key32": "4FMBs7418nd7anyDmoHDuJECG7yVptAegVVf52tsC2QgbDNTd4iYSbs4pioMvF1e4PHnvcWuZSTHAFSnRrLrovGA",
  "key33": "4LxMuadCeF57F6PP8oSzjCpetnUAPe5pHkLTWHjwdXLRJ1rPyYeKY4niB193KWnVBp39DLCdGzj3pwTdqQAw8EAe",
  "key34": "4WYFhATh1JJq6fDwCaK6ixpaBSA1bDkajLBvuJnp8pJyC7FoFgVpZ33LcXdkszub1PfWfZT6PJifGw6HYHdMhPDL",
  "key35": "3Wmp789GaCE4A42K3YD3tDkzcsFFmBRqbP2fMYper3eGfxSp89rhiNTenzCWhzfuHhnbnp7Nj9XQpz1QkSnq79JP",
  "key36": "3iVeTDfVuLonU4xr77mv684S3izJvdYPZTA8Gw9W3xFwXn5ta81KvQ7yuUcWtwgC9HFqAo8qAYTUhka58XSLefMA",
  "key37": "36Njagx3eE21jU77Hzet7cyFUDMqCixRcDVTRahs7db14BDjPUzYu7TCVCEVssQFcLffAgJ2i25Az3JBr27MWjuM",
  "key38": "2PSWHUXW7XMaNFHU72gfrbGPQ7BySEa6wY71TDLWzK6eK1PC42mCneBknXt3sGnvYvsu3c5r45kkwDeXMoccqGju",
  "key39": "27eXa6o6viRrMJqBuVPqjGwSaUt4kSmx9ayezXZxP7wC5BjzWAXir9P9kCbiTdmbCU9LshujtAoppYGCzNFAng54",
  "key40": "5oi8x3BT7wK58vjRwVVmxFyHFztsXxWioL68HNsiEnx7MGU9WQ3WzMFKxwnojtub72rR7kdFjvhfQ2efv7u8HvhA",
  "key41": "PiAeRdYGFqReWoUJiuTesa6Fy3V9KSK5yqjQ1BRFsDvYXrAA4vR6bjtuRH2HdkTQWnDMRgENtW5cmVUgw5aWPwb",
  "key42": "3uy1Ptcvsn4b2F4eTU7KiLaigoGpSv7e8ub9Pu48gvyNyTe6LMQu9s8GFU2zCq7htiiqbhxzTvRd2MZWiZYsMCF1"
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
