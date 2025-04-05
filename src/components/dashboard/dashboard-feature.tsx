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
    "3GR6s64YR4n2n89s7fodcN5XCHgbcesu9rv2sEdfpyzTcyW4k58159gMibX8REcDRWnBP5zccx4z5fNHypZ4ZD79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qi5BAFgzBvFbiDUDSdDxNZ4PQV9jUcFt3pxq8pYrFaHpgaAtcKL3GzW3NukCrhzhGZQDhGANbnLc48TYvAJ8roX",
  "key1": "6Ns5Z2YrpHWaHPbCKaahdvdoF3d9SPSjtG5tcx6UzgUMGWYL3njgFggnEyijSb2G84zwjaUhs4R8Mt6nXiTj2dT",
  "key2": "4LVEBrCapPRLqtqQWCfBxAtMwHGwEDzw8MeMroieT2wymQFSR4KJHfDA2nrQrn2T8axiL235XLCB7DWMstKXFMkB",
  "key3": "57EMjvq7x1WWKpuETYL75oCnBXvaUee5sqjfRVH8qy1GLKS8radSJMtwxzp9WEVKW4VeytfX2SGrqrRYxTRHnxNz",
  "key4": "377s8gY24wc3PNyRihGL3a5egsToVhd6DPikh5t8k6HRpctgUU9zN9fLWL2eGJxeCbJCqB4tZVPxxt3xtYVRyhAh",
  "key5": "28EogGTgUhGFQGZwUBPct9tGXN7zkcvpdA9sLejjXpR31yp76ALeRPVPfTgcxz6wwgL3bZ1EWWdg1VX1feffLjHd",
  "key6": "41UeUDu6Z2CMqUYYV9D2a8PRf8kQaGcPT1SQtPnLRSyVxhKFDVY1sbXv4564oRUWJ9YZd5hRZwJXws9Lq3zcix2c",
  "key7": "iKGxNq3YuARfZcZMieeCBowgPAUvtPBWJAkPrmJ5M2gPcHR7up1HzgyPaFeKU25cg3YsvyQbDGAtmBWxz9bd4eh",
  "key8": "2LhkyzMAVRmMrh8qpxKJsJriQN9r2Etvz9A4qAkQDtHGyMBzZhLK7PHKS79oF2dP7tKkYALEmUfN74qAADiggD9o",
  "key9": "3Q8AqxKaqZ2ALc66e7yBjL7PyWeNndcwszymKRxr3SEigAcwGFpxJNpceg1eMSzh3XycXeU2vFebL1iDnX8kiCyF",
  "key10": "3ggh3c3AJcM6JjosLNvhvTBBTFvMNHEwyrk8xFrVcc1pysc7HAEnr9NTvY2eAm5KsF2mSKhF9jRMKy1RMDiy9Z5n",
  "key11": "2AVmPLXkrGbrpMX7B2RuopM2SwJCjMA7oJYuppb4Vxjk8mkmf8YALxgBviPAs7stk1H5TQzHi3dseU2hhwrzEuLf",
  "key12": "5JSM4RkS2mwznr7W591vMD7xnNaKGebLYazFFWr6AvnzWzjsXS9Yys3sRwVaH1MbdTcXu8jsCxFQjgvNh83HSyFz",
  "key13": "JqWzxUWko2PzAcEUfWh7ntAieq22dHGu7TmnKBgdHQwKip57rbahYZY8nX9L9YFQqwBqsVEmixwMK7MFbQ1fFkL",
  "key14": "tWRgYHk5RVZ7WSn47redRtfqTmeaDbi2bfX6F4EtDUbq8ZVGxtfrsQV5V4Wrg6e1AJ9EaKf73CtqZXWNPNosH7g",
  "key15": "37aRFm117Mvzwhct5DsGeq1MDMjy8uVTmrBMkJ8a4MKs2JFVxGWFzRNZ3CYk5fZ86SDKqTaBdpSH8Jx4CricapDM",
  "key16": "51ougdLnkW1tCevHnkxMMTsPgBauuzZvD53mJD1pUCndNBFvj48emnXeXzeaCyLPBfce8r1pvpK8bQnGxBhAeQie",
  "key17": "5EepgninAsEXnUzP4X9aaFjdY8ni6dUETr7cHaPhvFacb7u8XE1T3whh1esfPDiWks2cxZuziEifyispJ4kq7S4Z",
  "key18": "3xhWES59cJsmV3CZWDj33GXVF1HZSbSivBmNueLe33hkGAoeaiXANj9DvmEjp1mHDDhdiCRE4Gb71D8CE1yVuZ6i",
  "key19": "2m4dTm5dqgZGzvbh3oyGWVa2KHWbJq23KNTNMrS9CTW3RWbv67NuvWJGXeoXSUJ6gSyQspgeZCQUKvGfUi9PHeFG",
  "key20": "3Fj69W8ECFdS9bNRVZ5v6ZiAxoP4JLbPJ46hY7Vaj9cSyze1QiL5Y3FzzmdAkviBwruvmV937FqDHoScxPNFgpc7",
  "key21": "bhrbzGy5x7GsJgAZxWzd24jZhFZQMoFTh9WpB5mbxdwPEE5qMyuJGX4nsr3HNwy8rivYNG1PfyvgpHPbBWxQPiJ",
  "key22": "4zNBFxZrTT1HREvzAHiEPHtnBecdq891s25uwcPRmDTY1g6pVQRwDtWL8QoEEM2xx8zWu13oXUYeSsLrp4J1HmRk",
  "key23": "4xix65TZ2skWkSrYy8VugonFbgw2UkAa3dhkf4L7DSBZantMLce7D4AnhhNyrQ3Gd1qzcvhJRj2R5RbcifPd4CkR",
  "key24": "5sZqbxmgCVsVmaaUC6pHaHmdhPCi3taRAZ32cfYF2mrkiEpkE1kRKsLKZ7CDhTEFVRLAeBLXJYCKsTxHe3JBfSVo",
  "key25": "4mTdvsbxU5XBussgznXKjE6w1ZG7f2jxtnCGFsvcFviWyedphCrfWTf8R48VzK32RqR8BPspZC83m6a3CaCSAmxf",
  "key26": "5ynXfJJ5pmfR5xsnGkpvZPFSQVkPnb5PsWAVsoDSyeZj25Y9BESVhGdf5WDNgXanL9PdNtNUbuu7cdjfYBoFkEfy",
  "key27": "3ZXkAhxYtXVeNAr1t6Pg1vzFSzrbRw5LZv47etW3uFFrLBSivRfkmJv52ugMYpQhxpUkebp6cw2y2KBjq1H4Zrss",
  "key28": "5CXx7ZinLCjFxP1kTU6cXr2ZCeEzhkoA6eRe2HRyy8iYpifGXvE5M1BxN9jghqTK6zMfsWkg4BzyxVmr4XKjSbFw",
  "key29": "5F68c5JkDkWkWreMTobRZhgLeGizKnwDanq21VjYKFBMCpCqFzjh9N3wkBSHZRht1WmgYUcYTzw2C4UzGjfHVkgF",
  "key30": "3QXhGGY1MTsYRWhHdF3EuzwGcVgPsvpsgE6aPryRmnDxGAeiiZFUev66CqZK7WUwGEnczLqVsACsyvefwu9XMAVW",
  "key31": "64YN77vRyAqTSK8FvgkZQu9dngj7xYVNVW9vr561x8niT9myNrW6t9Pb8XTmdoQpLu22dAfLkYDgBrPEMpn6LKJE",
  "key32": "22B4XhghSs9yfr3e6BFLQbHYQVQRH5mYTxi3qMpySsH8qVnDF5agsUgiPRqbvA9ZBwJX7w61BwR3ntrGRkkse9Hv",
  "key33": "29qsF46FgKrJfMj4jY2KBv1toc8bUBUjPGU7rGJZEDSDqY6pZJCRt5pfBeERrrgSS99RzrJ4VUJyA9mbBaBiQ823",
  "key34": "49JCcpQLMUnjPFNJHuU8mM48PHnyp9uy3PGiQZhCPi6saShD8McERXHmTk3Lgc9m1Qt6kn46UHE6BSRbUtdQi5fK",
  "key35": "452kuPcKJtYY64Xg64UqWp7rhf3RvBeMU2MV51TDaPTMoU6WLQG31z1buhwYmk2mpJyiHEcEZiRqmcgA7SbnvRyV",
  "key36": "hYdfzMBHhy5kc4aSXuT7WxRHHELC9GPTcWCXgzkyxpqsmpv5VKsLeSe4HDqMyEzmLNXG7khoukLLUDRtaEEEsVB",
  "key37": "2eFYsuRQ2mQSb58xtm6v88gwnEXNf3s2L4QYbCG9y58MnMzPTiubnu66wVQck2BWKiUeFRLDPY3cDDjHStpgd3pP",
  "key38": "2hFsrZYAQg8bEE3sLEgEi377XvtD2P2kdn2FoZpzjvzqXuVp8BGmAhtA4gpW3UUySg6XWQr8cySyWrGdp1s2UZd",
  "key39": "5JbWhzxNJwwEUnLwHoRw6k1hGY7iv4uMvE1dEuZkt8NvCmQGzJTELFajfrKw1rUyNw972adc4P56mS36kKMYvtML",
  "key40": "4zYWNonJv22zJkTDGDMiwDYzziuqrbFueAwta8XL16cSMdFjvtpDt5XrWLA5w6VEA3noqNRKdk2eo2tAABPKYioh",
  "key41": "3BgDEPEzyqz7JuVyrnhx3KnMN7kdTSXSF2be2TmYAQqwJ3wgxG1APKserUqHp83dxYDMa28mLPh21iqfeDudFcZ5",
  "key42": "535PtRSNXv9A9twZ8WEo49AD3BUJVdMBbTfQdxdfBuZdps2dsMejQxSPxrUqW3L2pMqKcoZrfgfEi9xykeZSNgTk"
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
