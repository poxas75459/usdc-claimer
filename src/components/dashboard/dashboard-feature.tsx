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
    "5XgsuqZsHW8YpsLJ66DHrSnaM7XRCTwK93Vgr2oajyBK9fe5LkELyTs8UF1UjJCgoEmeomchf9KXULXvcgNW98MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozRLBZB83oH6xXaG5d2QucVX1c2RZdXchYRbAM4zNbJo1eJuVFfAXzDgSSiSWuNeBHC7TeN6enToGQRDyP17Php",
  "key1": "5UKvdCTcCXCzig4AFpNCCcMQyxU1eT8Ag2uXpkYXDYDs8fen6UidqA5JiKb3Jugd89He1P1YvSqGeDuKhBVjhrZg",
  "key2": "2DwmRdikJPW5UAcegoBin6SKuMEBS89DrxU1mZP5xgZy9McBnF3DMx9VioFLvqdxyxj1A9cQYbjMX3d3AiLkooj",
  "key3": "5e99XXDyZ236hrR4Tqre2K3CrGxQugwNuFfUhPuUnLHUexNea9tnv8rqcQKfx6zkHTvgc4LHo7K4zbKTPojanSsu",
  "key4": "5AtYeFMWgHnRdFBWN2YY9DaVTjnrvsjh6wX7vKVXqUCLL7WwXv74ADADibuUdGrAiyZgeHC9bzYXg3KZEJPUy9jF",
  "key5": "3qRspqDkW33eTVQingKLZQpEGCK53yeydCcuRTKyoy24irAyc9vN5RWNvmCcWNAC1eXHzNXzEkKucEY8JJzJwY41",
  "key6": "B2UiQCanv3DG7VmaqStpkJRqGyNonPM3eHzCXvNZH3wVjzqQ26wU3xQz9EXmoAzcEEgUbd4SnvnVY5eZDvbuyG9",
  "key7": "W6s1k5C1KknZGx5wXyQhKd2trVnicKVNbtsS2dVNoR6wemHfg1stGnHrrZXnEi83wopbn3GeKGv52VyFSJCXLtT",
  "key8": "6ig73GbjXPxTTGy11Q7og5BwQzRTxJtP4V2xwJDmuEiouED4hMD4KSWkqsbUdyMww5pEi2TTbfSWfTYWfPjH3EQ",
  "key9": "5ZSc9j2GGMQuftwAYpZSBotgTRStWthJnCCSut2JUKZHZUiYT7QMyJsb15DKQFqy7nQpfL1F6ogu5LuPAbVH3hNy",
  "key10": "4E2CCQddmx1yk1gWtUamvTxYRpkK1kSMQzGxe1XAVwVVJ84jAzqf6iFRUtyyt7wzzQhY2gprxXJq1nqHnJWyeYW1",
  "key11": "4edHJRu68sMhAMXaPxVAfiEgevF7FDrYRzFZRrSmXYXQRAPJZq48hhEaPsPxSSmE9WY6kppo24XBQF99TnRLRcBz",
  "key12": "46xq8geJSUyBMMZv8kWyrwWaMfVfoRrsgxXXcxjKVt1Atj5paLCx239KVKk2LNb8HsgcxxmuDtorbDbUeGJZ8WH9",
  "key13": "3HNBktavUHL6fCgBriBxZSkh8fqrWpvinNV5eCE6aXLrkNxUzqmS3tDSFJ6bDSSZEFVW92Z5KZBiESgfAqNBsRXm",
  "key14": "46vaZyrtHBmwqcNSYAHZSx2JWK3mRASifFFafm1adshkEsVrXec4CjU75M2hjRbHPjLgUfu8qZHtQf2PC4MTwDpg",
  "key15": "4gKq6fBLYhtYhAN5NKwoh9mBkR6X1Muh2oUKt2NRr65SZTgnRpJJ1e2Y2F9eExC3QEDhpXJEqT3F31UYT3gndePA",
  "key16": "59ZcZpdxucJbvqbWuynkkQc36ZHrSPdav4MhwQiJcEgcZATnxdFABtKFp4szBaYpdoQD4zBKVVp1U4qucKXQtSUV",
  "key17": "3sUT3ndUrNj1V9C1R64Mwc47rao3xFv4kfkU8kqus8UT2RyzUH2FBCf29yio9XXV9SCaLai6qCvjXbeVbYGGREE8",
  "key18": "473NRB9JYuvQor7Mhj6ZNrHTYXDEuqmYAAvDcgwgLbe1oJ6bgrd92QtxGEbA8gmxvnQaV1vRKNityPX6S6K2XnCd",
  "key19": "4LXaXGQWiobhhE8AFNTUNbNKiHJbT9d2Ntj1MxDNbJXgxCF5L4QvUeTnQnoUKm4NcpHMtz3LfM532e7CxTArZnNC",
  "key20": "5wErrswBKrb7x5fmfEWmZoNab7cTjpBp9Dqe34uJPxaxMB2fCegZT4jBdZq2zhfK3Aq2oShyprxsMwGnnTzBHqfj",
  "key21": "Mfp1DBN2rWLhh3rMqmRCJYLuernUxVLNzmVW1oM9PspzqdQwrjaNXksFk5as6rosjdPiNoTnDzicZrUUt8qHde2",
  "key22": "9xbxWeKexyJBmT96VPvAwCoqCnRyRbrwCzZxFvycmxrvVzdwvLpTeNK5aic4uyi3AnGwL2aB4CyfUDuFdyikMZ7",
  "key23": "5otMSGKSrrgh3XpQTHpoXBMs1McZ7zhTASwsPJxd4ckBawhNi81jUJaMqvehi5kfHmxc8sBQzieMsDEkBBPerkfn",
  "key24": "3wGfyHzetW322bSoL81733x9q7Zty5RTuU45gf8eQYTEPbDejSaiH3uGubqBtiLbEWV3Z1mUahaLHiHrfHsQ5qPC",
  "key25": "2ZgJL4GEg1adav3vwPVWGp3jr9q4AWYQmi4VUjMpBqqBF85hKBVGBDqst2oF2RGRZBDc34BfC2pzBrF5B6eCartg",
  "key26": "2G8MD8FZJnP1zJ45fPLgbwVhs8iTS51ccW6XThCAN8CMiRcdSR3i8nog5Shfm2f9aufCmbTanktDPH7GtCkK9zbZ",
  "key27": "YpT5YHwbNur8VJ7kCypG3xvtbWski2WDqhGYDQi6kS5DBuS2V4a4M74VFhnDQsDAwLv1PGsvz6CSycmUjwNu2Qc",
  "key28": "3PH1CcsBqSTA56bXt9vvpnc3JjpmtD4SFgALRemSVBjtWU19cqGuFN6xCsny9NTfX3HHFrZzViGmMgBvymDqbmMq",
  "key29": "2ibh2neAKrJs3u5HXBAngdVn5Fnw3ZBwC1uFjod8FQ7QnyPRX1ncsrehMYUKjCaByRjNxTPXt2hhcJng72gxHUNb",
  "key30": "3BMZnKJJZU9WjPb67FCAJNEYdkgLXVMMZgABQoQLjpkHnmtpudvJJFBcpvFY4ZTfcq6fKepsGiVMCNGvZZAMJMne",
  "key31": "4vgijpHHMwChvE9KDtFz18YZ3JRWmaofNfFRf1sqZSUKNrzJjiymXpvuGW65o6pX5RhgqV633M3bUgaJ2AF1Vzsj",
  "key32": "3VEmmruaX2PcqUqWf462a4B9gPYVzkRJPD2F5NS4qu9HpFfgqXvfS2AefRsae9q5SjgnzScJVfy8b79TuLiktAZZ",
  "key33": "5xa96tUwccdaWfvguH2fAm9GsTxvce71RUftzFfsVA75kRjWnVDRX1vU1AsisKvp7Xyw7TVs1UCF2N9HYqkuVsVy",
  "key34": "3HRPpvcZNqTK66UVc5hB49atKG2T4xLkayWm9AYXoawAW3STkt6XPKYy8mjzm1xioPFhwibZcs2M4FHjqQpzBhG",
  "key35": "4u1rYE2bEHzqYB8p6FdTxWei3Vb8PWbiNbLNTHVvZnAk3K2Nkd53cAMnBL3j2gFBP4GwsZNeS5ysubuh6DMP5eqU",
  "key36": "4hrLTwPrnfQzdwn36aRk9pUUWRqkLB1Qy7iqsvgv2WFMa1U6PktkzhaNoousRjLML5YDKyoijUPp2ndvd6goUQQa",
  "key37": "2PgEtZkztfRsAfV7qCsxGUMKUbytwqSx35TG3pGdczDfJAXYnir7oARgExKyAmuX7rTd4GyJ8TSQ1MTwzRSj2JX",
  "key38": "5duKa9gt8BJ14Mkdh82D1SD3zjKajtKoHpXGKaCLdKnHjFsL8ZGMKyKKeNkLqPUoUvPuUBgJ5zjq1Pp54yVp4HZ9",
  "key39": "5M8McEuPJ9TEMPnGxKcXprBtbRLbzLGVEr8gH3rzhDT9yhLd5Y7suqpKTpL7PAgkpv2HbNMpMv8H8C2mgY1LEBN5",
  "key40": "5NzCwJzykW8VWrPrPzrrSZpPNEYPpAceTbf4YRnVzrQZFanybsBdFxkEFhCQRHCHuU9m5UXpTStPfU5gPEmUKp9K",
  "key41": "Cnak1CPTv2bzDkc96qeyxgSpnHAg259EzRqAhjqwj1YqjJ8hxF2Chg3ktHpGa8UBYxFfT2fyQUsrwhUtE6gqqRi",
  "key42": "r6yEbhwn4FaGWihvGofzmWeqSofGUNzm7riXbSpzMyUUz8jsXCHKkFQZEyWxxXtPrf8qw4Km1xr2RDcRp82NCyw",
  "key43": "2baU3vE26vKiQfnrpHdWnSXVUNH74qbRhUCtYf2Qra7eB6fWundcF2ZGZNZ41qbTejewF72kVs9mcpASjrQ7FeJv"
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
