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
    "5j5y3zVesU6xVCsXcfKFMVSVmoBp6m5MQzJJTpuNiK5T3aZRFL9ehhAusEUiekNkh9Dd4LkREk3FXMAEsSBUkv6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yp2eTShwHuhMS1eehRzKDXk5c81gtNdHp6zCMTZhsBMz4RfDDu9bzRnAYB7hByJY7LWHdEkzFB9MrQ59dQ7aYTS",
  "key1": "41QuHpJYyYbqPc8wbsJQaqn7ft9XnobDvefXs2vRZc3z9Dw556QAedgGX6ANvqAeB3xpUnXPgqnomb9gs6DdY799",
  "key2": "tqEqa9QKn1HDLur3i1GGYFk6xXfYJdoGSHiSG1TJw7XRqYKrk6ad6GmqAHzEaVx4sZGiCzkc427uidkzmK2ZXm5",
  "key3": "3SKiTjSDzDwMLLbNvfYMLKJKuNKGHahKKUy54Pe4U8eJm9xuVmB2f8m4ZwHJ45SsawmyeqXH9WKD4tzNDUpjmWdt",
  "key4": "56AiR3VT4EW8A8ARmuwXZpSByiWK4wJddbiV3NxUrtV6PdL1dGT8nYVaimdpAeUQRE55vbEcv8aCgrDu6BHVAE5o",
  "key5": "3n92SqMjLbe4eezAzbNUXwwiuVnnZHELpwFLXSenb7xVV6LCGzKtdZwGv1ckVCbhVzPp3WvmmgrKQ3CA3uoaicBr",
  "key6": "2fknURakB3Hhy3sMuezEQRS8JX1P3GW5Nrt8bjGAh7f9jq4GFxUaVZvyTtQJEgsv1ct7oUZFTpPK77JtEJN7heEV",
  "key7": "3W4JssTrC6cWhmnciqJLjHXKRpYWgVAngaR1RbQDwg8KUm3X6i2q9TDLFFifdngH525qxcWSSWWWE6x7pFtfxqe1",
  "key8": "PKdM9GY1NdH4r734WWvasH34ErLPwtt8Aqk14QkQFcsbbnKvLwRPQX4fUTv3QWCWso4GkFV5YVCYRyjsay2mWSb",
  "key9": "4SzFgKUYwPzQZMrGApAsNgWrpZD63gvZyYr16ZVRHTcJmCmBoLECp1rrVYt6xpkweWRg6nW5EGFhzwqJYEbUeDA4",
  "key10": "3BxpQmBWYCCykTmosKTgCtMq8eekDGcdcFKZSghbp9gzrNMX5f3BvABfYVXLtkvz4DNjzFtcccB7iowdadDPNvkh",
  "key11": "Mu1gN95GrZuFQFXNoNVLuSSHHqpdN3pdTAj4yW3a1YxMVVediypi1Lf8L4FFsKH56yA3HxvUPJNaCLqtg9ffYEF",
  "key12": "2hBXnxV7KtqXphbJzrxqreRojdKnn5sXbn1QPfuosaeSibKXFAzbuoScqXMgF57VU8zkAynPL1sA8c11uYXF9ugQ",
  "key13": "2CdHbJYYbYTKuWjszVLrVfpvaBF2aykjW71rA8rNizdu9XjtnQae8kSJzUyWCdwrg5uh8QW9Ldih1Cv9Q1xBVFLc",
  "key14": "5p3FBjNucJjhQEzF1RxjjUb669ir8JX5mcpwqsMj1i7mP2ginzFRBQt4b1fpfoRskhUBTWZzAteXrxFvZyw8FPjC",
  "key15": "2yfmkpA1k7VaFaP7qqMjYzdXPBaiZAqEcVcdg4m2Nh1hZigDdzu77QUDhUpj1FxQL3J1x8DYPdmsEqfpegKsn3Yc",
  "key16": "52NwBLuGDVHmicTENbigh5ktRJdF3VJDof1Xj4WyLtfkaAddsksDXAM8csAJhevSrtNSDP5cR9MK7HdiwvrTVjyg",
  "key17": "4d4RyzamMak9a1vtDpwQFTm2qkCme6YA7gVAk3Pe9YUnCpLPRFggRWfxeJCqBtVu7fLFUEBYHzP6CyxuTQz2cZGY",
  "key18": "29BzCz43PMCcti6riFch3N9knpJ2fb6u8RjFwLefLWGACDSE8vEf5PdR8puRw3G49FEwKK1gG2KQFzNFkj8oDPct",
  "key19": "4LuYnoh5vC6sDr2ghLbRmKccEavt9Zu3DTvbM9fTtX55vJS87hADRtkW8YYuAuq1nC1oiKkfD7Ssyk8GkuFbjxFp",
  "key20": "37HjZN544GLuyhq3VrZbZrCpemHYke9i6yxMUgyWhDSdd5ACJ2ztMewGv8npjtgCNHYvbqJM22zGeukgKZysYxqx",
  "key21": "Zq5eZi4t3b14dxKkQvUTb6ozNLaNPcAhwMp47sb2pQoLJkJ4UzpEdBCSsJnHxBopChHy9KsyhkVgtrMAgUZ8Koe",
  "key22": "3kQzSMDF2YKwAGtoGnVpUi1fDv4G3c2BTW5gzpdSAA4nsDAMMvXhSZLXruGZXaeceoomb9C7xg5UkRYeWkBSMZJx",
  "key23": "2UeAWu6qs2F9LVh34iJDzX1EoyNtfqYKtqCnfiFAVY42fiY42tHNGxMvx8gCwarGhXP3nyctA6DyF6SvBA2jGowm",
  "key24": "wV8MXqRjtbUdoKoaS8svrvFoibbAKFVP6M8sfzwsvYd5rKnVaVgscMVT37EN1cHC5GzMjo2Gkgey3Z5PyJtWfw2",
  "key25": "3ZBF3DDWsrPXnfe46sTkQKHVektgciEKh3q54v1x6w6CkyXbR3qbH17yYFaMF6vMcB1a99qdyfxRFerDBYqmYmkh",
  "key26": "MWBrMxJPqsKSfzCdZTkzjPJcM1KDGDCgPNgDkDGQ9mRfQVGbhUFAQJFFqTXSajdoXJn4Mb5cBSDGFN5vXPaNB3C",
  "key27": "jqvEyZp8cWFAd8L4xXBsGkQazhr26JRPeUoqYjg3wVN8aFT41Hhw5qU2qoQjzibWsnQTv4ccPaDkSE2R5oKXMJq",
  "key28": "WyKcBULVq6hWodiazna9HfRJsyX4SB7jhLRtqMtjyBcywWYdJ2PDk7NfG1LJoNJuNSR72D6NijWAPjzFtW6w4ft",
  "key29": "2tK2C8Nntp8vZTaeVn2BPGYdnQyVLiLsQHyS71NnQvEqk5LTpRwiVDr7RgYJTxgNbq3HHtvk2Zhk1SnhYcm1Rucw",
  "key30": "2D29Gm348EsaVhmU5ACDbwtoq1mK9nrvG3D2MXQDdBVemyLY5two3ySfmycBr77oDEYaohcNixN2UwXspMNdGsS",
  "key31": "4UUkSLHwmt5MBPcAsQSJzv4srSaB6HjrATeMptJADqG3SDGJDXjXNDpRcqHU2j4792vNEybXQk5mE5wY9uzngPEw",
  "key32": "5SFyvhGRjXNLHDntaFRjhfnBd6jMtvNRK7oPeMY1cnkPzqkT1NLF3r9phG3utc1inrgZ9iJcrxieVA3NvMzfMCRP",
  "key33": "3g3iUfo9JUiRrzjwC2bJ4RCpLeiVjsxc4jNFrsaZvmDzmrC5uD4KMXVuuzg5x6zKbJXfaPAjKVBNHpPmD4u3ioob",
  "key34": "31N2dN8PVd9pe5H5UY1ozBS2seLzxJbzYbhvkYJNTXxruxWvoCxZaeg4kPbd2Kie8txbmdv3ViK3A53NZYq4hhxa",
  "key35": "5Ss1bHKifLnueyuy3pUbD31sb3ikiz5bYniTkHdi1cJbyoEKo2k58bvDh8mvePjFemsMmJk5StVAcPokAKfeZdjT",
  "key36": "492pr6vWT7zRG2sWWbSsZ2mnFNVuMsk7TLLZH8QUszFfBrTA5x6GfB8Li639kGx4J7j3M5RHkv5CZMmdX9U39rCb",
  "key37": "641toE4faFQrKCj49xxMamAcC9kdwpsB92VPUzeabCp5SBmJeYBYZxypUJHNzQUAG2H3buSpuv4bZyBUgtsgAqo9",
  "key38": "4BL9yud1JKt32VBd6qmsiiUvaYqCd5EU14qw3YiiDC9mxQzdjZPh4VHELRV2K4Nt9pyPuka6SEDeEQicJ659R3jS",
  "key39": "4FuXHbCe5FbhHMPFDigcEW5UVxBVmNwnksq6kpfmTW3fikwpVE1ycPiS1k1C179FSzAGnMETta1UEC5nQY5AWsDX",
  "key40": "4mWffbAvza5biA2N2SP7MVfbDyhrgNAxEgUTmKFp3YDC8HyQGKbs5mMx45tUFCX7L8fZ9oYJYmRobbDJNya5TAhv"
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
