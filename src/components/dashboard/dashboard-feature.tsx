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
    "2DWM47BYJHJVPKJEss1pbhKhrELPt4Q35Sifa9uZGxp4YJL3KA21NGqAViWVV2tw6UC9enHxpMbS5GE6FxwB57ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ad3HrLoT4kt8yh7ouuY2v7teSg2BeMU1KjD7toEEAxYdbXMNLueN94ETHc8zoc1CqP8GAAZT1fXvULihDkQDfxY",
  "key1": "5PdkbmRvSSJZNPL2MnnyCoGun9x7Z3JMZJTs1G9DjKCYcji5T78351mMU1y9JsBMwxjW9oBXRaFwxM181ATDNtsU",
  "key2": "2BCvTExDHhARr5syEFkyUKdPAXg1pRFMHZKztdwUPDqj9GyfUEds7PrBxd1cF79P5N1yDMK2WRN8tvLjaBdpdRmY",
  "key3": "63mgaTa2Pm2hAD1XRhZHpB8Jehq9nhUuxZvUk94Qev3GvyHZViNGYyZUGb5gzNLVHZLQtQ3kpKXaCzjJLJ9V2rg",
  "key4": "4XDwJgAdTkgdwQnaAPQhDJ2nA8g5ZAmE5Xtf2yBaGoKXbiUJ1WrW1XSdZje39pihMMfAnxswkReMSSGzPPfRHuZX",
  "key5": "28yhfq8ce9KKjUopTP5XzZHUAyUE8FDZgsyG1Zku3UGMhQg9zEHNrxBGQ9tvDi2RDT5T1rZWYrNVsan4XZpn1ZZV",
  "key6": "5Ab2a8uToxiddQoepRArrugHYkFr1FB9KL1E1D4JmChc1qZV4XCoh7mcGRr2F5TgcBsdUV47gZGE8vjdNhJDsSXr",
  "key7": "2QDb3V1pCv3GYDubeVRLkBvxjoZcpA42UmQLLqdFQgtHiR4emoAUuWSCkYqddoHqgjd9asmfe7GcECVrV3sELsJa",
  "key8": "5b8rNLcV1Vz71AxqdVK8KHgVsWNU6HEsL5GK4EUGvj45v3G55JmHYowuTRXddG6aenLtFSrNm1U1G1VFPVz64q2g",
  "key9": "5KMGpUQraQBBXQVx5ehVo3N4n53XjXSUy7626aXzT4jm4BC4pB3KsZLeEZV4y5qZNGGgNnNG9ZRwAXri1obbwBds",
  "key10": "2mx3LhoPA3Ce9EvppisZx5rih6zxt2uEhU5i3PKbsWYGEaog6B9L6EpbDdqj8R78g2K2w27hxJSLNAMeUztDwz9T",
  "key11": "3SG2rLaDzWBF2MCwL9fsMYzNizaAVcETLNYYHG8RboM6PD8oQknYib382CgF7DNpbB1utBZgTcFsLn2Rc3WK9fVr",
  "key12": "3krQPYFZq8ANb1bBvrfxrvykgDcpManhkaNKHs5tbEJAxtmvsgAZEjtgjJupnWWwBVcDhLsvNTbSYk2PLEeRNoLQ",
  "key13": "4YwCs2pFxbLDkY6PkkLumhSeReLV5PkWVMP9fLRrKeNZoVieG7AZAsSNLsi27iJqpkaotF2LqsTMAxBMkxipMoVd",
  "key14": "3dY2YFRzXNdfwoqsNotpYDo7JwsbQZ4A4RFeJpKecDrV5LQVXpvMuQuKs5JaN2RmVYuTpEys86Dd7em7tfh5JEmn",
  "key15": "3PDfxmaDAxfEpHc6JYipRwJoW5ULtE73chMtGjpyCSJFBT7U5viuZoof6S2dM9E8HWBb5ggxfwqbRtTZmgWsdufv",
  "key16": "5rvYts9FdMvoYMM5dx7msm4ix2EJX1kqm65yiSz2ZAuAXZJmNLsJLQf4zvjUx5jNs3yN72TCFSoPH2Qb7zdtgWU4",
  "key17": "5UBppo43rrFzia7PH8185xS951GXfhYsPoNodeKUeEC8tDjbLV1dBoby1KJqJDWvWjTFrJGh7qcru91oT6NdzD9D",
  "key18": "5utCyQr3igxRGFQAMzJtW5bHpm8kmzw7pQMRVyiGD3L3nweYwG5WmgxLzZGacBrXLLRXLZb37JqSVt3WeJhRKWg8",
  "key19": "5M1CFRCmerJykQEFYM8XwYomdGVUkADs7u8jorEQAjaTYxKiuqhntSHNa4fgcW5ZzbfD22ibBhnqwrzFDo1jGxtt",
  "key20": "3ssF6LHLzHVFnnGqUVRaReJRcGaj3CD4gLPTJLoMuZCGQTQWfYByHv5fyM26quKQhTYqtkMneqDVcWdcVoGgvb8x",
  "key21": "aMKzAURvnevNH7gM6iXSUG8LwJTsBBRKBzugonf8s8xfTP9Y1q3cA4J8xwDt6oGmrecNZ5QeVHA4F46QnojVa5j",
  "key22": "2WkdQBwWqvSSivZ6BoX8yB2xTzbq8FLByxxDGy9Z1wk7QW1JTdPoFKRvQhW1Yb44o5KE59USEk6SVT6kXaqXu4Sc",
  "key23": "yezXGWRtLiucnqoz1VQzW1c5Zazs9L4WgBN8HUXwU3ifDk1J99QgexjWcCjqx9fgZz3MesVhFyckdXFLTnTutrg",
  "key24": "49VNngnf4Lo1SAQcLAYzEjYpdXWUPWHL4fJRt6faEUcZNFfofYiHTjsP7kf5NurMTdRuHk3MUS848KAsaEBVbEjB",
  "key25": "5xa6DDKgQR6AaV7HpEBdW5sAaVL4tQsUi3rqBth7xbFsmwzxcrFiwWfuH1tHXSRnZWGBwm8irCwujS2bMfL4ajYY",
  "key26": "35YUTHWMise8ScHMDLD2PERXNJ47qNxmRVURkarMLmkV877XJHfvEvXQPRhTDcbaxxQNajhHqv1F2Kom89EsupJJ",
  "key27": "BrhunCaNT8zVokPgTYSEpnRHMVka1kE26FTgYGyfrbGzWipfF1BS5HqQSF2DR8xtgHXNB4rwMNAU3CjfRLTrSgs",
  "key28": "4MZxradj3uoMaSQLqA6dzUZC7Xa4iA5WqpQKu5zzsKCmpbMStHDvGASeDZQWnU6JpMUFf3c5iqY4cFSC5qALUvQm",
  "key29": "3VvHMUvz9Ahr2GhpCi4JpB9u1xY9WJwpUFvSWvd7mcb5PLQEzXxBfc4x71jQSwJgZESMDsA3ySbMZPRZPKJKJFJ5",
  "key30": "2hgi2kHpBYj6X4v2hwAGSxs3HZEz6SbFbY55hVaXh8qQLs8QMuPpSwTyG16WWXJ94qKEs1qfy1G1fSSvebKGobYS",
  "key31": "66idQAm4kpNuFRZfTGbLnHN76yBgp9CFgXjPNjRVGbUjKTgqUky7PbArm7BKG6LUdpE9kdFkPb3tfD18peRGcuGB",
  "key32": "21RV36vPobzLnaCgM7rCxfDrY1Wiw6FELLFLptwVtnSQE6HPkEs14UxXzgf6xaBpF7wW7wE2vDor9j7hiqS4Brzo",
  "key33": "3LgchEVGpHCmF8mVpU9nAA5YD2eg1ETJUiafup4mYbzcuccwuiuadFF6FAicW9GttFgqu6ECzs1WcUfsPwQyfGB4",
  "key34": "3jvQoz7URhiEA77sDPr6y2ewFqg9nMXVkhZhTG2qV65FbskyqtjRM69vh831AyUHWXeQzRqXXZkaYuR6oaaBdVVE",
  "key35": "5g3y6pjwZkKpPriL3CNxzeU1ejCgUtcaYGtuar877f6rhCiRD6UjoK2jueQ8Ax7mgvCvLKmZu8NHKBEXTP3BPk1b",
  "key36": "31Ecdji4MrS617L1F6aTMjgiv2eEQkVSkGz1TF6dp75TWjbG4VD6twZzCHF7EHVfrh1tjStHaqrbwqV8wUoTjmmH",
  "key37": "2xUinTBotsDFC7uHHePt7MB6N8AQQT2tiQJJjt6a3LLsT8NRgfmLWHMZwpwfJs7qEMW8VEF7awTyxFwMALY3XWRN",
  "key38": "467L7ddsmDAaZC78bXEcnb559uexpoq8ZJLjuv1mDnqGvzpvhr7CkdmJZeDc1URcQSsoa4rvmkMWdjnfuxhFa9hk"
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
