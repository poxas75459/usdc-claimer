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
    "65ZpP5VXY1zCn96aPVys1T1xJLcruE6nSz4oexxKSCV4zohjv1Mq1RRVtLqjZW2c9DgdpF4F3UTky7gDeoVBVR4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sN52yb6grgknEgSThMk8AdQzFMht8QrVFtdNNvhph3TTm9vfUUtZ29u8QSdaSvb7jggnH8CQgenmMwCkDUUT6e",
  "key1": "4ZPPm9tYYsTPorg2FKN2LoU5ZspMMQ9xafWUztPGjBA5bFwiamcpDpiWLvtWVTKN2eh6WkgaozZxDrBfc4cUqKCs",
  "key2": "4dwyxzDnqjxqKDdGbn4MwWD8gX4oXe6pCTtuvs5q4va4jhEDeJTGTu88E9wXypeQpdFXkFyzdRJnDN7TsJPsmgFm",
  "key3": "qVzWWLJZUkFvJFKMbFTC5NHjhJNZAUwPTHPMCHxmiQ72r71ELZohuhx9k9aP2qS8wsP8cNfup8MXTMJWPY8vFoh",
  "key4": "56Wt4b3Wcskb2wzYb7dQQbH2i8Pc51B6HcLKvaJ6eKrESNGWqAuUFzuqhHr3uDbcUzfgKmEXaHBGBCymMivikJQT",
  "key5": "5fxwCx4axqQHi5fizvtPCFJjZAQZfVxNDNwyi3bCPuTymRxxhwdY4NaFa5viyF6mb9o56nyCfuB6YVWZnA1tyWW7",
  "key6": "3XCv2Kg5CSysz8yCnLRS7nxZLHSAUgfshbmFugkaB3o89XcVK4j375Jfhr5BFFdHCL68C41ceBYE3pBadm3ie6JY",
  "key7": "3B1AQK7ny1ZMzhLJhJki3yxy3UBXrnLSFaBUDXwKadrnUYw5wkZUQ7ytzmQ9ctbav73jT8d6jiy4Rf2aMLRf41vS",
  "key8": "3YSBAPb4TkB4NnpphUFoLiyFLkMmtsppnvZ1BisnVmtLHFBCDhkAYnbVyaog4SbAxyFscGPaKmmyY4NR1p6aHhyH",
  "key9": "2RyXfSAvnKVFkqK2B9eg2yvtS7V9uhnxjSnrWPEGKc8MTeoGoFtMKiTcfU92NYtFrsft2TqW5ZgJPBqozkyx6FgR",
  "key10": "5tWXBNEQuTjMdA8s48iTeP6LLS8Pyed7f9hiTvsuEGwhPhF4DmoskzwSGJqVXFkweaWeRNyutMuYYPsXZFZiuMxV",
  "key11": "aANFmVngKYSYCwQ2Z57YngXVLj7U9RVZCBoEwgFtMWg8JRDuDfzmewsChvADxBP3Wdyq3fN3vHGaS5wVPB7bnus",
  "key12": "xbTJQZPJu6WV1T9bN6vQZUXvAkixHDuDcmXoGG2i8fYA2H376EdA69aHy94U9ZiapuhNPikfrxoCgdNADoxvpv5",
  "key13": "emk5dpWVb2tfGx8kn2aL6JLWhXToTUFmYgq7PQxFVR72EePfLqRENwmwXyRgfC6XcuW6AABzUekGfsiQyoEM9mP",
  "key14": "62BNfXNaZVkp5cPD1yJ2EMU4BciMJWmdVdSkzbW38bKWa37Q3ysgG8qWE14xycktD4eimQJ6YKuw23zERi3QWgf8",
  "key15": "3SDxREprzrcgTjKJmGPJsgbYvfDErQoUbY6sM1hUY69zQeNo8jRkNddN2eWCWTuRepBsx9FM7sk13Xs158UA2zLK",
  "key16": "GpDEaj2B42MNvzzZhjgctBUUbNvHxjKLhFvnfBCv4LtBTzKduQDMtKLbuAqXDGD6v2D8thwkHnNBxeaStKcsZrR",
  "key17": "zT4bGfopaziJFNYebPZcFoCccpKka13FgJpSKn7GNE4GCQLpCjGCb84JS3kmstNiunKaVQhP2tHFmDrhengAaQd",
  "key18": "5Uqu5krEZ9B59aJtnQDYGD9sQBTYkDwQEEsJCFgYkQFTdGGa53364d55S4QcGRJzMnP4dLALQabMx3fWZjw7WXpt",
  "key19": "923PxeVCFbB9bgKNfGf8JAbSxCackie62VMxh5V6JjtmdcoQkCDX4HoYG4rLirh1SgaLD7jubzqwzrzQsU8TAj3",
  "key20": "29uuGSRWr8FTrJgZ9NPaZZRsAmdPXP6jviDGYPNgnYNom8baTUyiFFX17sSrLnjAueNVoa5kBtKACTySFHmmmxsL",
  "key21": "BxQZ4FKwowW63Rry36dzGKGyd9e49EDpN9xtMSHc56DDjDKz6T53AxzXXmPGbtfqfP3TrFadAT3No3zrxV9KLyc",
  "key22": "3DRt5Dt7mUw9NEriPQa9eKeJDfU7EtqGKDj8rkEkBUesRByf6iVQgvbyu2YUpFiDNMz1sybhnvYJwwcipAJ2xguJ",
  "key23": "3DRcS7yBCwYN2qUGMD11DqtuaXHvDkbEtW2wojPi5SqvE6YMTcMTYLs27ix1P5xgAJSnbVn3kP9duW8uYvAYduyL",
  "key24": "2Bf71WDeLJwJDvg1fqMAAHqj9n9y93oyCpo9pBvaMBXtazN3VkcEJ6y2xB4RM32zBUMjGf4nH99XikzqG4L8Totk",
  "key25": "3jUtxo8WdhjpfKsKJNvqWRFhZWXdn9bn87Rk14riwL18MtYF11TJCEcQ41WPRnYcnHTvT6o1vHL2tSYfVkZettnh",
  "key26": "ZemK8VXCDHaeW1pXayVqHPQMMUgRwdW3CWtuQebGkwf2yJmofFe6H9CmpZ2vgYnHa4ZzxVRq8b8poS6K9bKTjuJ",
  "key27": "BmHAP3rr3vQLr7GhVsEcDwTrwbTxzUAqhtweD4z1xW3aobDVGEyAXd4rYqxx9s9ToW65cmdPoHA5HL7MD5Rbozd",
  "key28": "61dv2YtZek3htYCKgtVTWTLdZN96WEu6fGyWfQXGjsJFsDuXXMqyDbAiKxuDvRhwEKM1Gq5v2k9aKeiArqeVmVZY",
  "key29": "5RqM2XFdmJn9aHN2PQVF7uXM4j3PvKY3tYNpzkXFZLw6ut74tTVemVxZac58FRHYSTeHdNnDeXb4LpMRxZHNbc8p",
  "key30": "5jss8wWNNUK3BCvsJjh7JZvEgWfscf6spqXn8wzauukJvzqwoFBcsnfr3AJwQBSuruJ7rAPMFB3kKbUfN52Uejtr",
  "key31": "5ULfkxtbEPNCN3KQK2m67SL2G17x1eeaYBgpyPk3uLncVAw15agjX1KdWJX3fwYVUFQR3kqbdYudg1GdhLGrB5NM",
  "key32": "3xNo9QrfoYbx6WrnC8NJRQ5deAWY15nUX7eRPuNqayDWTEMuiC4c5LjQwSrehtbXD61TdnhWmaMpqrSFhCJx2vXX",
  "key33": "4t9Dve5ByaSt2JuNCxJAxM6DTZrm4xR41gLPBb1rSpgFMZXSv469Cpai8LbDbVT9zsKvcDrXKvdMHsweSW2UPK9f",
  "key34": "2TZtGKGo5odCe8yWgtFuVj3LMzNxKpDmykHbGfaHDXL5FHeocL2YP4fJPyyix6qVdkiXCKJW1uzGBrZyTrCwSBy6",
  "key35": "49FRUSVoVjTFB3bSFsDYFBXDeRuK9YyCiWfCWbpXShFSPfpkCJ2MjhHyYhAAy6V3ZRSi9sd9v5rgB9n6k7dTXyWK",
  "key36": "3Csv2ivZ34aikY4eF3QQKD1fChRuBUUGAZwD56SVbQuVsHvCiFa29DAPsQiv4vj8Yk9M5Bg59u492vtr5LRDfuPG",
  "key37": "5vxf1tqyi4vj4z97EiireqREdJK6Sag1ThYz9QK4VRKuabWxL3thTzntW7xQS1FQUdiSjcPWmHr41VGWvT9qYXKm",
  "key38": "5669Bhr1bQNCTgMXbhtUZYi2wXHrYkVhFYVfxAkYK2xvfe9sWNkDbpjiLDaxriFnuz9hf8kb2GhsCjwZpCfrqEet",
  "key39": "HWrWs3PiGCzxDASgmWz6N61W9VryF7oCGKYdC8tkFeVcAW1qFjdPUpppwsshPvHfMaZpJw9RfJizMaiWXB21RP8",
  "key40": "35rT88HhdgBJ1e3s4N4vf68nKQVjMMqHp1jkWsLWb2J8t3Vie5q3tWuoJy8sBveq2svB7FgDqy2eLdYiE7ae63oh",
  "key41": "5rv9RJ9pDEGgzV7iTwmCjUuXTxTVkUr4tbAtidfVtBPo3E9dq6qPBeYUPjDMSPDK6BFPkBo52EZBGQhQdqw3pt2t",
  "key42": "5M5qi61xV3ne4yynNfbF17XkyPjnssPcdEBPEKeBcf2LJEGuM2vrUvyqDd86oJUao26Cy2tRuuUnTxGj5DCgrost",
  "key43": "5zF2ofZRYxTCSfxrdLSYjrCXRVf1nhmaPm7PmxrRYrj2XKUcxWjkJqG6hWRNp61tpryuxcA2yW556Qmp2nqUwCsw",
  "key44": "61VRXQ6n2mkRkcJzgPGz33WsjGihUrqnUuANJg2PA3tLxnLFz2Gt6xuRigDGTWZcTrPMWSrWFNCrVaLnVtW31sXG",
  "key45": "3XxWCQsPocptTkdJQ8gfG8fqPu1wsraQ9srJSUfBkPnVmQx87BS81nfB9aMVr8nStfbiCQSnuCfq7zkrHcfGoFYK",
  "key46": "vV3E3z9x2bfBWSgg3tSeoaeJgi6cBboq77bqeKTUEFCQujcYSfNCX3CA3vbSVWQh7fHYJDD4pP3TosN9sAzju6E",
  "key47": "67hGMmeWiurT7QH49KWcDVqvyABqRGD2hoj7V8PQAfwsJAFLQ9F3inHhg2ssep6Uy6u3pvFeuJzmt7MJnDnVATzK",
  "key48": "Gng6udSefyS8fo9xU7mkNBUu1NK2JvYSaBCDMPQdC5Hc8FoEdt4ZxapLEbke2z2v5Y9TNaKk2tgCdGP3k3an6Um",
  "key49": "jYAutQXjw8cWJ2rxXqQhqJxzWL2N6az8xbxnAyvSEHSAvtejUzRFwoa6Ly8YtmxiUetC7y8zeCbq7D4njJRJJoF"
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
