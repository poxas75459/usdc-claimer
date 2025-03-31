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
    "fbvhDs3k4pi13s1ajgMyA9NN9YF7NJTbY6FgvP12KqLk39DJp1BVmZy26fQVP2qpQ5LFgw8Y9WJfvTc4aBDC935"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agnLqgwuUv4KpzYM2hLaUAztXS5hGkYSLJ8FkwiDveppTu1qLrpzFgytKU7ej6nK7axuYHbb1H8qditHYvJ716m",
  "key1": "3bCVkc1YakLaVoV5sa6h2YwieecU43aj8b57EYfBg82bwucupGAGotNpjVW18cwZZoKVjo5NXBptq126GBGtg3Dc",
  "key2": "3q65WU9F4YuknZQtTcpAHpurpMso1k8spafrtzk8x5ZizApcNDA1vp4zimwQ2KtSVVUmA6Cqe9UJVC3NfgS8Vx5j",
  "key3": "5BX69iRcoWjcdumJtbJpSVSnLVeLU4qrVucRc2jYULTYNuD4afPyWLBQnS7htyCAFdGHkDsgvNF79o6tueHNjPVy",
  "key4": "2BC5ZQAxZGdbdkKSEhEger7WApQXjpmfuDtWzAYb5GTAqgvwngEqRKzAYvQJBsV6MRSa3csfgYMhod5uXRsY8FwJ",
  "key5": "4ukU9gu6dmTn4s2CEp3z3t8JuV8eJ6VjH4BmWFK5SFjaQ7ipMgjx1iczHRnCxrnSFwCQ4RL4rFtADtENq8WwhYnm",
  "key6": "AfnYX11mfRUZx5jDk93FfC9ug2hcwcsi14dKVzvdCSZPkDBE3hZ2b2aPf8WrGjYjCjXGWKXHnFGza4R4jhxj9t5",
  "key7": "2LjiyNLG1AzLsu7md1n6jMcwcLp2MCTqTZX18SURWgrS6McSShkkPfNRweHNNx42TiFsRSmg6F1fg3sDYXXYFTtB",
  "key8": "4ScmK7pii388mGg44wN3H6brwnerTE8nNoytaVFxMt3KAVfr95BtKonnNHWth4oN367ofB4uwvi2af2hGxZyi8Sk",
  "key9": "cXV9GLUcag7wC1QYux8ieDgekYiXr6hLLxUppdFZBhDdDnJJy58kBUnUFCTZdVhT52CnQW4qx4gFqSysCBChUV4",
  "key10": "3kLhYf5rA3xFxfRWtYPshNCgYkkJNQM9UCQYkncVmYvTtdh6dpKPsrsbG824Un9VCbjony3ok81LpcdkRrMiH9Ck",
  "key11": "2e6GTPS2WumFPaSxRFDeMcGG122vqqToJFuvNeWWmezGRTEZhZ5YYMJysp7GfSewHZf3qaeeC1cY6XDQ9ErB9x2h",
  "key12": "2stjC2yJFi43Nr7GUmsUcyXLSUYWWdZoFBBjfpxho2K7RuPRPSP66wsKnjnLQCZCCJHhL3nBaKNynngyjH2FDx9w",
  "key13": "ZX48SR3czJQ7GgkbCgXL3WupZrEYCeoQp8KrjjjzadCQcpjfNzJviHDrffSNerdVmiZowHLX3Eaox9SeVe7XDyQ",
  "key14": "2hhPCHAEUyL3TUd7od3uXpncCrgW5iQB1FuBCHJURAeiBhEVC1M3aRpXpxyrPcL7fipYjn29aECkicmD2Z34w4cQ",
  "key15": "67rZQi5eE75JtuTaGCnmbD2dJGTcWVVAV3d74EzK8q3tu3daCJEPJK9CvNW7Hq6JmyQcvx56wEWQSN3RGUZKwSpe",
  "key16": "3cKw167CTJMscJBoTH6YB3tfo8wryzVkRT2Yr3JQ6D3sdSyV5LiwadMBEUKwezbXdaJJqoo5SyuaUzke9FmwzP1m",
  "key17": "5v3j168DXZrx9vpprUHXFyyYXnaT7Ty3fwDev1xabcXF7PpcP8UKsMxfykmX6bXfK6KLh2fwKXKrCDN3sq3x3RQF",
  "key18": "4wBdx1ALDHc8SDUA3dFQzHhmShqoVPQ8W6W7zzcT2opwNC2bBjPsAbQ2897W6oa82yTnguB9VHhyNy7PBh8Xa5jf",
  "key19": "37SWpKaeQA7Rw2nWaDN277CcA13q8hXorTmmAa7rPJDjopAMPuzt62cmfT6QDvGbAuTeszLsiJJs36QfuHw8xG9P",
  "key20": "4wu3FZa3GtVv6cMEKC9VZDuX8RfzGEuhHme5RgFvy5kDf9sitsRSqdCf5XPVCC4sMheUE6xNyNhSb9fCZ1do13zg",
  "key21": "3pUQbMkooaq7bshYhXyNa9NaNLNcijh1RamV1mNVxsdjn5uxg3vbjecXbMQUuyQrFB7Af2LUmS8nkHnRpE3x79CU",
  "key22": "55AzqBKpxumr2npicM81ALMEVtwcGT25USy1UhpKWDABdScH7wibCc9GPwoPwgi6DNPax4nEPcQWRCiS2bRDq44Z",
  "key23": "T9tyRhk7Wx2HEmhu4pBZigiquYcA7iwbcRy68Gm5s7nm1NR3YDywJMRkwpNMqq6aGfLtKq8sow2cLo5qo2Qfj4q",
  "key24": "4yFwe2PC9XVniDUwz1scG2GLnpQbMfdHcZDTtN1ziH1jQDw9TD24YPbmcCevBGGzeDsJresu3ja49fYZdvU1hqZY",
  "key25": "5D7MyBGFwCr3jpjTqgDesEFNM3vqmS4KM5yCuJ71L9PUdagjnbEPa2rSb7kXvqah4xunuVscw33Vx8HtJpFY6j5o",
  "key26": "4KMCTkqktn5ujWAkjdVKkrPSBQhWNqMAqnVWDj4Jxqy3MzurEYBshd9CxEu9PZefJ7CbwhgmVkHXrKQH2tfcpzuC",
  "key27": "4F5DbYLXjodWTNViyabJLuQtJUQigJ8tMptYc5P6EnfuYtpifzsobw48VUVQUomZ8JWxvkidLCSGknvYnZqQpvR1",
  "key28": "c6H1Rgn6EuNyt8p4XGwLtASsG2JdUJEA5RKSeY5VSaXeRe4iD5RLHKX3urxDEnN74Zw23hFfodSXQBLhE8Fzpcx",
  "key29": "vmvYrAePwzQncUNSs9zWGtqycGoxyuPN3SVz2zztHZ8TKHqzAZtGbz51ovWF4TxZFvZjHTfyUXW465EuQDHp53c",
  "key30": "2GVDnHHsPcXZrngfVB8PF7kVZAU7bDXywSJS2VLjxHux4uSHMc5ebP22ZuG1VgAsyQBSaecffaiXyMh3cMFXDoGT",
  "key31": "5FUW2RQyP4sg1oz9kqXiXvnjDXXi1E5bNn4uz9HXxsYPafh2sU9uzgYHh7vZ6Jy2WtQR99KjmffJcUkYoizHpN5j",
  "key32": "hmne7E6TbVGAVcNFkQnw3nHkcEdvcsnRfbrfA69ix3ubbQ8wq5fi4RZW2V4EJxPz8MTvEnhEHeHoP9u4E3GMkHp",
  "key33": "36vWdRaWps7PqivxbagJWJLw1rBJwUWpEhfK4FgGJSjwJJPUgsYw7Hqdz7KuDxeYfwbQEoJuyUNj9Wo55JJfNHGR",
  "key34": "4Fis4ZD789NspKBRGnEtgMvf2sk24wivWrfC2KKzdyz4GeU5eajccDrjHaWgfwGqSvJQH9k73AbXitWFsF3wF38c",
  "key35": "47eHhqCvD6p58SJu1uFacKbYN5pX8ZLhP8sJSujE6eDmye4wEQLLnYXYkbB5TJA7gsqJUPMFCzHpQ7vVYibg65Xw",
  "key36": "5UrjGhfD5HDmtqz7NrhHme32SeyiafRmrpJ4zRSmnotCHSSVBVoeSNYfTXbyWZA5rDQ2YNLhRFEARzxvvXZ81pp7",
  "key37": "324esZtw65uEc9tgHqqSEVSi5n3W7bxSaXmpJ73x6rAvTvXbcTL1v27npccWUxvJYtMUdunCdgoorXni2bMTeb4c",
  "key38": "4gHn6H9UFBdX3cGhV8Chw1cT4kuF6JfrQH5xRdRaLYVSvoKpMqWSe1oreAhN827SusJApwtGJYYVmkpbTTMjJfpr"
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
