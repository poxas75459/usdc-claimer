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
    "5JC7AuwRar3P1wAZgdFp5nhsr4cKZavpWzxzju4qiW1MxfgdjZkCEUhiehD5sZ7rtWSq22GHyrg7m2itjYoGM8QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cTfugSn8KcbFPr7c66WD2tVneF3tdZoHWVs3nSbJnxD5s1vjnY9PdFewYYtU34vEbm7LbCk1SvHjmdRXnQ5LGxR",
  "key1": "XKnwgfHJ4XHvsTWTa312fRQegHYmSwczzbXN4Yre4aLT1dNu4V2AcQjeQ23Yam8b6DZwsb2WBpb1rbwCrFwfVd7",
  "key2": "4XCNGS7kPknPRjCwffX6ARiV8jGvpQgah24rj3Yidzj8jmhH4HmHqFjATodP9eHtoPUVPGFz9hB34tStsCGro694",
  "key3": "5jv8kyiBqfTwHBzpKbotbvUrMp6CuvdToLCJYKFkWoZ6pAbTbW8CtMpse3YbuVo2NQ6tfvQGG1TkE64K5j7h1zeT",
  "key4": "341sJPXPWe3ts23YfqntpZZW24kCMjNBNxgGCtq4u3GsFuQkEjFDwZ3LZdNepyX8W9Xbq8XbtDnpcukMAWS8SkzW",
  "key5": "2Xqj4D6J78f4TixWci7MoRwC1omfaDuSbeKHw62qJuuAh4Kzx8iGwHRW28rPuARDvqHyjxPKiv3goZBNy6XdH6py",
  "key6": "65jx9Wb4KR8RKaxMM7Hbfw6j3uW2eyT1gyJ2S4yGSrzYKzHv4UZGjsPRjJYSTZxLndP8QSLZEPHaM9AgLKGMABq5",
  "key7": "24PUdoUuBpZH1pZ8iD3WEA1itz2S7t6JDqdm3zePT62LhLUrSPTmgfadwthqvBdf3FsauDB38pCbt18K11xX8QQe",
  "key8": "yM8XcCmH7huRpHHasm265VuqHe3TenDTwTVNBEirhodHcFHN9JzSY9gNVpWGTht6R36xK1ytUMn3hPL5UnfJy89",
  "key9": "4EQVertJGkU1s6ncQVnfvj8FcPwTFQGLKV3cTwfuxx3cSMhx4zTaFvKLJAjfNNiZC4aY2yrcuZDkbUYebat7sRdg",
  "key10": "2riH6tkp1Bpu6c5S4tm8dKq1GUQjiJuL4yZfVQj6n8ev9LYLgNBmFHJVr6VxMa5RA3NiU5aABSpfvFTa9hC77Zey",
  "key11": "Zny8WigzRqTkbXchPgp6sGTJ9UFD8jrQWv1yCfw2CT2bQo14xkv76KsveGUC3p4sBuemt1YhpYcErpDEMcoSCmg",
  "key12": "35uanGaxJcyZakUQMS6ExdvV4esU5Xss8vReDovDB5tKeubKGPCuQPyoUubRqmEi3A5APxV2inAYQJFPZ5oiTHfx",
  "key13": "3AviyhmBwC1AHf8ZvoLVE5wdV1rV7xJkRPEN1E5m1ou9yWufHbDk9GZTz7HpCBDWSbYbjTXfw7SQMdM5mDEeC15a",
  "key14": "5tv3TDj3aXmo46x7kdNcHQ33TarNUTXzYm97JARAAPoo8L3agfZ2VabiL9ThaTbcmBkagRiT2J8yHF3b2SuDoi2Q",
  "key15": "J8xrXVLZh5Yet9NkNGn9EVpm9KAJB98589G4AxH46LDaEW8jUQ3qwnXHCwpFguqxduNW8b4wQjdL9nE584GYzTs",
  "key16": "2mDwrkQVEYKqLjycmr9WoeiajhXEHRbyqXehussV4cVWAyP1hHTLrcNSJewZXNPE7no5JNY2s2X5roaAT3TFn3j5",
  "key17": "6S47nCA5qNhk6EFpFFAkPotMD2EEyPxEmLuZqT4rJCdffsFQ7cuSdzSNVr6kNg5VwYKE74kCsMKB4UBUBUSAWGx",
  "key18": "4R1zGcnUnSyRuv4dHHJQCzryH23HpR19GfYK6oyQcQF7b8jf5yU6UH5pU14WcV5F74wcXJPCRJn6q6fpWxNcDiVe",
  "key19": "3TwWQFZxG1jqcoHvsk5ywncQWzCAPXrLTuiM8CQqHsh3vnGfNhjD2dYfBXYam9cyv1QGqt49vzc1mEuh5hmCDcDL",
  "key20": "3YsjgTV9pw3uR8MdXA8s1RS9oTZjhk6RXefpBsq6v6xMzHYpV321EceB6bPqAiGkKpY3RfnxQm3bvrDGJnwswUWw",
  "key21": "4UEvx4y7fRP2fNfw8KE6UdGb5kGCawtvufaBBKMtMyZn2hCVDFavzZATdyBjymRjiYxjB65XnRWCnzmHudZPVuAn",
  "key22": "2NjEPvRcFEkgSF6NZRP1mHHy5rodF2rYYed5GDMZhWywa21jLx9CbXYqZhLu3Mwkkm9JWqc5J8PAW257RZDgJxnw",
  "key23": "5MedPdxsyCanS19fWWeSjpTPWaubYbCGdgn8Mj1uk5yyHnchPdxmQAU9fiUacBrJAckEbQTuKbymkEutY8L6wr4N",
  "key24": "4tMd87i9CWFqTa3X5Vkmit1HqFRjADpWJF1ooQJPcrNLwM2p1zn4ksiqHNTa4d6rASxMAQBjrqsQ8Y7utdVakHgz",
  "key25": "4gVSt7ro6gJMLeQNhUb5wRw841BkWd9NHufwz4LHbTZCouB8NwMams2Sced3HxWmpEs6VHd8uJYytgErRKESeziY",
  "key26": "3yzkHjikBfuuqaGQzq1HeNvJ3v7W2SBxQuv9AmYwGffhhtY32gHsgkvbG4CMPL7BwzExRbGXEACYTmqAV9xDTKqT",
  "key27": "67pGr44CC7Beih87wRC2GsQ72PCuk3Udzwa4wz6cVTpXcWWfTo8KDk5qvrneGcBXdrbtsegAk88VHkbtAwQkNCX8",
  "key28": "4epDMbecXL5xXcGWuPZCG68UmboU4Y8RFjzzkdtu6TA7iFpwiwJ5rdiAiRk6threRfahnRKW213Y3oy6jn16y7C9",
  "key29": "cV7sWPpbU875V7ark3U76jcquEBouS7emhbErdQGAMQWnz5ftYAtjVmiK8jPkkatKV1BNXqJpxY7Qntp1n74YTX",
  "key30": "27KiSaK9Jxteqn6Mz5mCQc5d6SR5UvKYu7iz9fyFkSBxRXH3BhnqeUWjXoCDA9NFL2XinB2U62fB6CywPrzpTzUp",
  "key31": "SiVsqLt8xJswYcfiAVGu1UxfzhudYF4kcG1ZdWs84TWAuvWoAuWosar9y5NUJbFB4n3qd5pGL29vsNx1b8LyJzQ",
  "key32": "24dofRgac4TXffQ8SHf1fJzqA4phHNrYuxTsehPKXmko8NyzQg6TYW53kKpAaPn8v8EPCXpXRhYiCt11XHiMxKgc",
  "key33": "5LST5EQhdUF7HAcebdZvSmNo6HsowEw61trFfZzh6i4fP6JKQbbYXKte5cTtmdw7mJHTfvYnXVjQepm6Sduefjkq",
  "key34": "5dUHXx66KxSWEDe8qzyF2cihTk6XZzRSz1yn5eCQ8zumehZUpZVJ6d1D9E5H9c2rAFHsLeji4ij1MaPbcGTWXRMs",
  "key35": "46pimJVPtGDrUNziMb4FAxUWAb85VHJrjoXFCRVp1RYbi9KYMRoTzdkfwnyvxBGemZcDfFRczexfErkChFDo9wwW",
  "key36": "26rd5JX6oohwo7iMBVWH1CKwD2WhcnGfB2ThqYABcSbTGuxqDcLpefH5egy3rQh2FzX5nUJPLZnTTt5RzeREiXqL",
  "key37": "3DAkL1RmzKgmvyRD5fshKX3nixH8MnaUdCEGXxvn6M3BQRFpM8xK9NYsSmG4kKpdgGvTZC3MGJs8FTPko9mstHLa",
  "key38": "5bnxES3eMVyxR5Rjw4UFa679ydubd3f47R31DcidCjPpWXeth1V7yds2VbyUH9oJ4VqNef5wU5ru5AUftJZLWmF9",
  "key39": "2oECj8EgGpi6FngG6sPVhcxpKyHucgU9o66fvjTw53BAXJASUvMGWSagDXkak2MiegKGyoPtYuwvmEeEEU2Q7LLk",
  "key40": "2dtXuuoHTp6EE2upisJ1MrUsB2u3hFEFVSZqSMdVJub8anhscv9xY4LJbSVDzzSJMArz3skPkEpBEPrX3BYNmGvp",
  "key41": "4ydTXqfPwp4H5xtSGK1nFP6JCRH9GEqfDkNSTPekMkfWQVWGu9ZybmU5YcQaeYMqKeDNZjubGwWhd7Kk1XGvEmbW",
  "key42": "3Q4kGBqtAUL4kLABqwDsHo9GgTJSs6cQxsFdBsXgSBYtuYmS5tcwtm5UVHNkRttaE47bEdiF8Kxcdti15kegaYDY",
  "key43": "5ZJ7dWKweHwXHpEWajcC9LyTUGaTXcSLHdfgXaiN2vQxgPGRHUioksjTjotjesQojn2aRcYd3n8GEE4RR8RXZPai",
  "key44": "4G2GDaXujz7E2X9Aiv83JErZHGK3d8kzyGtTkpRPVhWX9fnwZET1k2pyJ1abZqUBFmB4B98Z2sKG9zGv3LWFUyF5",
  "key45": "2vZ2M19WhUBG7uCBbbtr7XwuK5b113FY9thH41qXWVm53op4h7nrWr1cj59pwXMb7QsCeA5Ys7sEBgRnNiALTW1E"
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
