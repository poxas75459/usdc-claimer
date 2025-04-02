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
    "3z6Cnwn25cKowzwHME1U7NVzMUAj7vXe1SvMKqtaDFA1RFxib5WJNiFRJBbWgk27iRQ9RccZPJUAVUxMPQqUhAoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBmzhVn27UK3UfaZB8QHQmxdhtEhQ26C2hhj1J1FaSEDsgvzyWAAoV61dRuB87bpg9VLzv2Qj4ybRp4iqFvPm5R",
  "key1": "3p7hPdNZF2t5rQxRHUdvs3sF5BZksyqjWU5HBUA39xBYbYYh6ocThEs8ZD1qiwzDqLqEmKPfUJwnVtdiZuwQX8LS",
  "key2": "4cwpjWmzTjKqxG2P8vtPkoeQ91KoWPadJBw6EZdTHdcyHAVZ46SXRn95TAGtBNi3cUH2jtoyiKEsh46cenwHjNZH",
  "key3": "571LYgQM4xKKKKAukFLux5ZKB7QUphugm9scStyM5B2EGZTaGfZDZvrZecH1M5gqMgQbrV3o5KxwQVm88Q3sfa3C",
  "key4": "62CBCRViTNYxEQA4yqsCn8Vdybi4LJpNPt6yysQ3pHrQL9nfoUaUVG5cVt9RwiFQv47E721NhRvAFAJn2c86ATW6",
  "key5": "4A1QpHGfgKCaGFwXa21tQYseTHtN8DmSWDgG5dT2TbwUgGH4dVfPqn6HsSEVX2Twb3dnvowMBmYdWZ7BBAG2wcE1",
  "key6": "P1sHWHq7s3uCW1SHRneyfi86ypMiy4aWrbpmksqkgEXBC5hDJpHk5UGZJW49jnyeiZ65DT45DqaUjPTat23nNFE",
  "key7": "2PEuvrkDQytMxrKuvkXgBRQVHdg7EqREKgXh2QPNJE88NndZcDQSQTsoV6ABPhYht4Sz5AUBLUQGFSJkTcvjwvcM",
  "key8": "4bhYF2tPEz6DesTRo2r3kMSLcFC9wRr6g31bWdoKkpNdrQRJSWZT8ZXLtjX1jJ1b3TRJRtAnR2F2VAEKYUPdZHpH",
  "key9": "4GVHF5KAKK5BHJmNPRfD1q284ciQDFSjHdjGQZ2XjzbLu3eAxnLiVkYZRdwYt4ZRwjgAZ1uYG7LbHc1e9XSfPRtv",
  "key10": "2obY9MX6ubkZ68gsoLd73mBsmetJNzirEAa7VgY5ChPvGFXJ3Xdv3hmt5HMmKAx2JPsYu5KgugP7BsUXfPJBs1Uz",
  "key11": "5ju9JYascmSp2ZGf53HuL4HqGeD9P5ysWKCPc7LthYzXwGRW4MyshSwvSbVVCZhGWiA7qqnHy6ZT6XMPWXbWSwYx",
  "key12": "5anCqiDPAy7ZjftW2cSK2z5rT3c27mf2JcdVFJ4AksjqLhaTmPNQFxGK13eJFcaX6RsDryLpsPJtPBxypb9S8eAW",
  "key13": "GBQpmAoaKKvGUWCFXAFLm1aEwKBDA7WibdmWAq4LCeBuYp8Li6eY4vn4MaU7yKoUWnZX2N3o2k4ZRoPJ7w7XuB4",
  "key14": "59RmME7Pd9bi7kSgoNAud9tpxz5FwEhQrJiD4PrCbirdPsX9P7gUrjajZrj6M76csUxzCzrbRebqht5nzFADArXN",
  "key15": "6WKMbiUZHGFkCof59TBbZ8K8uXQREhBpKmYH6XsMkS5p9kbZh41QMTm1tGV8xfGVnAn1tvEwhcMP1HhKJx6Vwrq",
  "key16": "gpahPoh866PUvmQpZkFx17vnsA17cinghp4B8oN72mwz4NtNNDdajVMoB1DQCt6FcZ8Y3nP4PwwnFnmEvUtbh2G",
  "key17": "65H3BtS4oQCK8fGZqo9QtQjg8w7uFVD9D5fXhyC45voQLLWmThCwkmbgzcNtsSTEq8rQCBNjQDzwoZT95jZmkgut",
  "key18": "5MCU2V3scmjqERW3KnuTswcvjx3SFHP8TWMQpYj79KvcKpFrkhgsFKRY99xTwqNXbqKHmgj9yw2tWYfwB2tvhtpi",
  "key19": "dvro8KuK3PKPQmrsx8v4R2nskhcE6oBZFTd4mJAqXKrXpqNMU9apexDeg4BV4gTjfDRmfV3EoSZSrNmhL7gh36T",
  "key20": "43Rofz6SRMwS1imNMKrYv92w4ri5QQQkr3xbf4bFAen4JQFhy1m1NwiksehuDPGQ34ZK5MCD817svjsxwCw9U9tj",
  "key21": "2qisdt36wCaHJn6F3exdtpKKtFeLYRJLkvMkkAuu1pcRB82aPvGSdRJmY1GqNaFMCky1n5u5crC3igBiNKNw8yYG",
  "key22": "5qQquHUhcps312E8YmUMWMYrmtycdkxm2WembB3xkQQZTNTcKn8Rt6SZeH7SWbFMhGTGHbd11qrNYFKUPg3Ksfrt",
  "key23": "3n6QZyynme8hW52xvisFXR8aucgfkv1jv9aXaLHV3GM4Mwi8cxHQrDtJRAuMna22weqjd1sMM3cQqxQ4JtReQVQA",
  "key24": "xXabygXD7E7yMBEVhP6XroiLACeqsPYEXixBKSoEKw5mYLi6sfczuCcdM99Dwi1tsoV1yno1zP3NW4J68rsA2pe",
  "key25": "2XeLRWQsH6BT8Utbt7HQGoaBaGa5RvvCnJXsQqizkD8QgBGwnZAsLteyM3UMgtniye3k1cHKzaB4urvhFdbfvE6R",
  "key26": "3HBycnFgTQQHMKmCQShzY9gW2KXXcERW4e5WoLvLGjZ4T6rBigDdR8SMQhiYBMA86zusPmNBAWoi6ajNW9ARqTT",
  "key27": "61s5g1S2KA8YqwLcUQ5pJK2ERNCvwrNK3RnqXyCjKyDfBWhQHZU8V93xk1h7rWsTiwjZfGmWVLjSVuzY96ChypVT",
  "key28": "3tR4S2iG3qh3tGXPuTuj29w4HJ4tyThWBtDwTC55mWxK7xoo52smCEH8dWAPREgMYXpL2eir5xafWv19XKda6TGh",
  "key29": "3Jrj7LQy6Ze7eD1qEwNgHGfUeERfqDpafiarz6GCNqiHaWVWH2dXzAPNGPCWDcJit96zD4keQJtWQ5HPPQWJx2w8",
  "key30": "67NiKC6dx6Pd65wUQBwYbo5nDPJRArGd8RcCUwMMyDy7GsxBmUqakaTQA5S5b6SzoSLKgHiwCHiK3HbamxLiSBck",
  "key31": "569ZXevu2deeYhCwuWXGizSvvZrMUseemRntUeWUeXT1m9isVZXK3khg6SCPKh4qvME2sHaAyrhwBWHT9YdwYVXn",
  "key32": "3U5PiP8sBnETbNG6VProP8pZZ6co4UNsMcb6esnQsNDT9sHCWbTFHMFNr77W3gE5pMv54mL26BVgH9VC835PreB5",
  "key33": "2PeKf55cZbh9CfRE8K1ckZqj9LScooexkToLYbdarxr45nRUx8H27m6DuMoWAvwo5EhQryGYA1prc1usdtw4BEnN",
  "key34": "2SFRoNpxuL71UpzB8w8qExzduEe6Kee19d7deNgGiBsRAMSzoTEn8UYpZodaSE6z9m7wyHAXKWY8X2XgWxofTvvJ",
  "key35": "2qCceuZs6EhNyjqW17PisXaxN4rH8mjMGyisfsqWoevaXCWbcqL5f2BNT5z1r1q2W54FQjcvKnqshTBur6yQPZZ8",
  "key36": "2X7QuipQVk8AXEH4Jk8VBKTsGkujPpwB2NXdJPGjaBdtHDAZWnLViqwC3sjBafdEyJGptPgf4WEzkXryE6MYBfsr",
  "key37": "HbrNrXgKLXf8NKHHCVPhMnamqKtJVnA8So13q7iQNGgXBC8BssukWGTq7DtKVVWtP7ZS4k9yRGqRcn9bKWf7xam",
  "key38": "2AV1p2AAGt7PuLzUUmetcc1knh7xU1jPj9ynCpWddP6XvRNKW2V2WVtF6fLopKtvC4QbziZuC8kz55NeFZp7Gh62",
  "key39": "3JRHtNAtZntf3uNgP5nHzmJWanuAcBmbiupUvKumwtnPGh8872DafyXDBU3kUq6EUf6m3XbJEV5FZyZsfxByHaKu",
  "key40": "3TMMWNfBRa97bnHi2m6s5dfLB6u86Vdd8DeAGZU7R5wGGs6cgnxHWjAZhrcsvPX1AStoZ2i4Fiwfxwfoie8VUVz3",
  "key41": "4L96x99mrABSpmZoeGmasFVPECN8so4hgUzkeHAsMh3naBgngm8H49mtUgiQe5cpSdZJHGBWwTDn5TdVnhRACyH7",
  "key42": "3ny5E7jofaM5aoqjL9SXWn3GSQ2h7GhfaNxaKL4YDb4RaL1KjQekSKENnUcw21wWtmntikUNFQUFvrZ5EjprLnQQ",
  "key43": "3XPk6APPFVLszESccnsEECMSyv2K6vMNyZCVy5Nv7BiwaS5ArppFpGMzE5HNRUNYKCgf6x9bubQVdxGAbjwBJwt1"
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
