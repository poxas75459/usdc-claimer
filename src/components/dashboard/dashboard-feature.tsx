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
    "2Eaq1UA3CGE6rnvRgjitFvJAS1oos8crucfWdrnESz9TchMUvZLaneA4sUvaGFcZ8Tq3gUxBnyNLgdZrSsFdJLW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQjGuAoEhnpiHwhTJGEixds5N91ho78U3NkPkrnafuJ1wPGBEpkN1FGQr6KWDdPHX6Q1s835VGnnwFUeruEE4P",
  "key1": "4don9d6ptNkiUEdumrbmovNbQYToe2hqZXFDXQLCpiMTrsW1a5qoDctEM2gbBxGzWLjB8a91JbXKgCCcRGwqkhxw",
  "key2": "3NiLtTWcvf41EPHBUU9M59iK1xrZGf5XFwXoMYJPXY8Tf3Y3mSaQeNjAidbvVg7Xcg91Sb29mKNZg8bPimqYzogC",
  "key3": "2ixFe3iAQfsVUTRmtG1ZqxSsBUwfGtPwokQwwTxhEoFhkwvZXKuJh7GEVsk1C3LnCasd2Yf93XYVCTDYYKA4p6vB",
  "key4": "2Nt8umUtrSxwhVSmXWFXfVtotWWbdGsZVFoeBXoBx62PJ2sb23GDpZLAPZUua9k2q5uNu3cprAq5BY4yfnVpMh6h",
  "key5": "5NPvPoLRh6FiB6ghv1cqjDTHCShTAZ2jzyXUQrihvzrzExqgeR5mb7vt4SFpGgTuRKEieC6q99vMgyH2R1eDn77u",
  "key6": "X3ZjzumeAWtVLpmJFuo1hmyQRyLsDUgyVg1YXnziRNr5fDRu4Mt7FqL93VY9Bf6SgwoG1sZCoeJ7DgW1ScSXNrz",
  "key7": "3tTZr33TtcrmdHMKiMj6QxZLG5P6wVXEfW8qF1R9XLD6ehFCayMZKeNPAZUPWoHce6VpxS4rXK83gbzGYH1Wfm2t",
  "key8": "5KCrAjoWSmo9GmzWdyQ7VKCx7i5C4yAiVjjqQEfTdtcWhtNeJmdCz2YQ91arJFtBTcBqUQZbh42jrbCW3xaHzrQH",
  "key9": "2rSAo2UvyqkDuCEXRFyAGQWkWaKkBVWiBvEBQJj7Sg51BE7ANkrAx2xZCfG1ow13kxdMz9uJD5Az5RhrH5P5BXas",
  "key10": "1BCBfR5VrzH9LxiyowsgvkfoaWLPVJCC63ZA5DbsWviAfJ2G9bX2vUFWMNPTK113eqbd8ZZkEqTDCTgMghxWqXL",
  "key11": "24YW2N1pSgfcpSYGeeQp5XDKxFqzjSdkLnu8myHii8Tvzf1rtDP9L3dpTYq3Pzq9yennoinJ1Wnvusk8UkmtrDiW",
  "key12": "csycSN3vc2sz3Kf6SqVEUfPcorzp7XWgzWPVuTpoWZefQoHmSWm4DzR9jViPmsfgjae8ixi3RCvNpX25LQwTnmy",
  "key13": "44hsyvyMw7by9xnU9yCkbXy5QX1UPTE2pVT6cYWjDdwg5oQgca2C8b3d2vyiJgTtHvaucnXmJG8MWEXH5YtXSBgE",
  "key14": "wcjVjBVzsUvXqQMWWfTvfp5mEPqdrwE43cFY8A5zYyXNPtZQ5sZotrUaf9UnT9Bs4xoEbJftfzVTsG5Sdji8sGZ",
  "key15": "AChLrBweue9dtvJaphDuJUYgGyEiQXhkywYC9UdPRfFmxhnGK9oH56c5qn113MfysDgcueLugp5Gd7UuWJZHSnJ",
  "key16": "4RHwLDhzSeRzDJ5TsM5xW2N4ft6eQXRzkZ2ysXN39BxMCBTCqNfjc2idvZA3SKnGLSmLrVBxFYWHaLkLHtPm4kGw",
  "key17": "553W4cfWRkdJ3LxzooeQhnrRvZWh41u3zo3Ju3wD5njknvBGUPqwTMKWW8Bt9fuHiR7huZP8yFAkUXFmPfXPYarA",
  "key18": "4kra9TMns7ozd9wGmvHLH3i3mxfAwsTJfERjb5Grw36BS2PNWYts4EUP7dCNBcsicoCtLnsmg3uuPgVzGAeLWPDb",
  "key19": "4wXnpQouyBtyXG5npAuYhgd9EjwW88GJibPHSxJrwfycGUo7xvffb4tncvL2zj11nfAJh5gft1gU8nSmmgJAwHir",
  "key20": "5rYzeLeK9wCfgeDAYe5cpx6LydncwZXT5g613GuoEcER99TPJYotA3yVLweEM1Vu7TX4oz8Xdj7bTNhXzrgq19ce",
  "key21": "3wAbPzrqoYq1D7WwyaBRWbPvMtF3SfmCMrWoDV8AGRqMqD8eyhqXX4sfXWX5m7rBTpyjrsMwqvr6S1JNSc7hpbB5",
  "key22": "keZUUxt9EAeqkwaPunAzkP5VnjyXjAszuasiEPAqW8JVzt5Y5sZM7LuqDQU2k1GzoxnxTrPajWKRvFW8U4TMj3e",
  "key23": "B2c6brYX65QXNZZYTp75u8DecwGBxFsT3hCnA6z1ZtMAfMoMP4z7jg9BUVYe7qeekRqNtsRsZzFfzEGkz4MAF5W",
  "key24": "219D7z9ZLYNaqxkVRJQZbXYm2pqZiDNwALAMzx1wGkgPswM1umrW1wSgiz8vLDZ3tcQjbXiGup7AMc975H7eZ268",
  "key25": "5yy6XQYw35Z4X1uG2YEpPAK3iDuFXZ1BKHT9UygJ16wjgCL9BNincdtsNRKtQTH5Rx9EdMmTjeXynj7iWj2w47Le",
  "key26": "4SbZ4DA7Gz8d6zeDoNmVHKi9qE8s4VLvAWggXUZTYyS9pJa5cJUXe7iBnxm11fX36afDhGUKjM84yhhhKmUZAzoD",
  "key27": "3AFgbzNQNDAfKEdSkknB51TMb2d213hhdRLibjzumVaXRQgBhL8wE819oNBxtejuQMJG8LkdKu86RtCnRQYUEA7W",
  "key28": "2aNWK1q1yvkaB8U9sZxQ42FV1ar87fxQaP1BNPnCY4yw24HvcDBRDpWNJKaR2NKDXbiqfDu9tJEv2Z8JR1UR54Ri",
  "key29": "PqfAKXP3nVaPgK26jwy5nFr6Jab26iLgczzhtbCzZDdZ3tEbfHz8FBNjo5ar4XbE14XvpC4DxKHC8KfvNGNvyhR",
  "key30": "3XwMuLwRvwAseHYmBEm3YauP9yjAVQctRKuoPssaP1twFfff6NTbWdyijJQ3bdqUsAb9RE3RpGSAAvHpEQXVzq6J",
  "key31": "32FvQAU1guqiSbAxpMcvriqdyup9cm7YoERy8zywWX62iXiyEQQys1oDyumS6mSUPt54G9bxSHecV3J2G3qKAoJQ",
  "key32": "5norcFbzPRfaunMYtLjFJc7yTsWVgq6fp67FLo1ScXPzDg57xAvQVNAH42CRJdCj4RB2okyFdxdGLf9Zsenj9LSv",
  "key33": "4srGTgWjzzd7PoALeQH52bLiuVNSQFrhxEk7y5NBeNy8Uypg8MQiNLqTFJdckf26iTqLcCuiHKa1jA7TfT759Wd5",
  "key34": "4zpTLdz8mGuUvtCsy8bDqYFcE9ubNUEvcppD1xcshCArXFb3D6nUmQd9AsCSrTkxsaWr29vgRJbcQZZs3GfFwiEo",
  "key35": "37qRND5LNW7xX388Vg52X1DdQ42UsGDPCxt3uAKbCGptNH3n7FtERkzVaY83Mepnd2EzdsqvPhHk4AuD7bkM8tYC",
  "key36": "qGRYa1h9N75WUrHLBy4EAPWesc4c31TdB8Fm89znereqvo1NNnX1TjXdiaZfdD2VNNjTKU3R4pRzVPGMdWkQ4xX",
  "key37": "2yVKQ3ZkKhhsha3tcUSUWrshxxR44haegcHHAhiKsqA2oEe5TEvj5payKUyWufPQBLLvCXkcaoBvJ9M987prNGKi",
  "key38": "1nYc82puafdqBArSdm1BeWse7rraDTy2cp2VJhx4KsSbpfFX1Q94X4koZGzvynb4eYuMWsiJBw3XDL5yaMjj25D",
  "key39": "42x4iYLC5Lg9zRuS92KRZzyRprnihTktGafbz3C7dr2zyJJ1GL1zjxTmDGKztiHhAqCKB9WK6C9bR8Y1po8FHD4h",
  "key40": "UDk682zZfLeJ9usCQVdCXStcqfS4AxcUr52SnZPXTxBVZjQCnLfpfBABZK5eNMW4ZGqEWXg4Qec3mdToXCbZaNw",
  "key41": "14oGJuyTFTz4EWBNsd27Z7PL3imBFZdnMt1emTSdVejgrnbesHA1JQGj3FNMTTjmjcbcDYFXtC9ysS761jvYdNJ",
  "key42": "6fMswbdCV9Ykf6f2MsA8rNxJnKE7EvRwVjce7PX7Wk3S1vdZS7fq9J8qwfRgaBKf2P72jVa2rxUJnUtKquWjjF2",
  "key43": "8eSKGnQUXd1qaiLL3AdzqmtKRKsbTeX89GZFhXQNMreUnjXVFNHcwtnmKhx4jHjvxFUtzf4QP7Y9spyNNbdXT5X"
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
