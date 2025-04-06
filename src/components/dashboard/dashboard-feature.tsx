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
    "5aqb6zj7WwFzZPkLcWUzuNgE3LvQv9V8SH5dDmFogYoTV8eSxJSWABSKPMkdt77MJKRopufsMReS9gkWJaT1FzoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9BNHCGmKPNypsnBCjNL8bUb9SbwgXCcr3JD9CDkgJuSLHhRXtiJqJsHfhfnXiNWdAePf1sKNbQhK6AAyUsGjzZt",
  "key1": "5nLCzXEt9AyXbLXqAycXEPiiPWZmNgcMGvANUeoYNvRMZyxaF8UDicnTmXdi5XqT543y6rRiz9JLHcoxid2EoTRK",
  "key2": "27dhxwaLfx19kw9qR8fG1pe7BcSS5MavrsPt2QanDCYxMtwN9YdQSFkF3r9YMj599KATt4KexeEVGMTMXSpSqAPP",
  "key3": "5Ycepv1HLyTGWqTSy8JR86U4K49cB2aF5XxrKueqNPTzSKoW8aFi4FSGN3uCAucYHdYqxg5kmmzfE1ADDT5F2gMt",
  "key4": "4fb3ov9KGhQpgNHpSyxQs5BJ5gyQXXRePeFwTG89xwx9sc7pDQULk3yFeRG9pSqpmgMgFzmtfBG9njJ9uKwuw5aU",
  "key5": "x6Xa2kMpoma8mdoACpGV22R183KEmBuW7dWqjt5e192hLdndLASj6QcEEmww2dptjZC4nWWngvVXMSUSrKgzac8",
  "key6": "KcK69UsrYuyR8ABy8rqEqEgnWmcBdsYfDzRFE8onZv26nEThwrn1iEQzD68CCXP9y3NhYKpWiHpt6bUctLrpTih",
  "key7": "31UzxTcPKiZ885HDBrfofGvpef5tAt9pwGAjLusehMpQU7AZ957jqg5KVF8RwJ3Q1t4Cfw8NcfrJ67csHHzUCTwT",
  "key8": "2ddHvLNmq7eeHEfib12HmjtDvnfkn3mta5t12umTjkkHtiWAxQgiT5chx3UT4swySmHAi68MHKGvqCGZavHK3L2N",
  "key9": "3U5xMhzeQbYPSJT2bisXiwpA1JvaPcFgHRpvn2GKhEscDaizE8vHeU4szCX6o2Cf5SmV2J4pQ21YKzjAFNwf9agH",
  "key10": "dKsgLtDizFnUgwdHCMBk887uqNYqECGSWP3xwefU4e5eni189UNFhTPjV3THC3Fjcr9SZrGLHdBoDXs95pKUPLw",
  "key11": "2LSXPDxMznEARc2zWbYB62AHPPXm6BYFPtSU4XbJLDenBLwjtjHkEaGnSqwJ53vqvqW1w5ky71fscbHbCAFfPQuQ",
  "key12": "zmnKU7F6UKh1KPwDoznxfUTvVuXsg99i5gfGwu73JpsoCpUzZNhwnqLxX8oaXjMwXvSqnFvpx5r8rFwHW9P2uAs",
  "key13": "CcVmrKMHMdKgpR2uJyqjjHapo9NbrE3CGzSKre39q5DBjVh4dMGLwqcthpPuxQohyUTt93kgj1ThyurAHVZAFuy",
  "key14": "28onsP9MiGU8umqRvQPCPWFZj7NRLZRmHVYrCvEADPCFEER6ee7NpJKrAn9Qvkfxoq8US4A7fuQeViW4GMwLbH8S",
  "key15": "4YtkEacFvabwG5Br4WpQyZ31WT2P9NrCes2pbrpsh8UPsdQnEDmLRrNJLDnbzGij2Q2WB2ijEsCMSX3mMrAgkhwt",
  "key16": "YCfVdj3TRn8ZhkhyernHAYiW4oiFenZiHDuNegG7Ro2SWdsh5aG9fHTAYVmWtzyrK2EufS3Rvdz29WiHtxpfzLC",
  "key17": "fbuPpxjABekQVgiGqdWWSuW5hHiWKMg5Zj6uDeAjHswmqCKrbQWxLih1qNGkte6XPTEQ4JvwFbxBikQGGjzezfh",
  "key18": "4KxpvQ8UrvmGcd376hD7yt3SCq72WFGCJJsyTHLeREiL26LpGyuErbKwPUAj9juYSLpxyLqQFqyjf4FGgrvr1LE3",
  "key19": "xtNmdYU8bp2aMruUQBPHDERVX7y484p9HH7uB8fBQUMiaovGYREMSnm5w67Gw8d7kdddjY5ay86JxyPtjx7KJKJ",
  "key20": "2KFNpo5knucxD5v5YdQRfkg3iCM7RcygyoBHHkR1ugf2ps1gmUHgEzbPoX47SMGcpRaY1aCvswV7zfKfdMZijZZV",
  "key21": "4gjfXRuMYN1q4Eeh1mhQEt76WtjzDLXeaWZLVipfTMDi8pcSPu6RNRqKtfKEP1CL9W5o4qm1K9XhdnSdDUB8UCsT",
  "key22": "4rLtFVeJyb1HbjFbkPxSJptgLPkAf6eavfnNonCoGSTbLvob4dEvduVK7uDsyYF3myHANz3XqNosBvYpLiWEd3TB",
  "key23": "2bZ6oY3NPAGSoAmfpGk6fyHcpmpoVYzRRPBhiDgHRcQYp95K5uPgKfJeXJbFhKWR9C9QE9YedcwvF1Dpy3Qdzrvn",
  "key24": "4XnWZZ3NpCV4SnQRsz8Q8YXJY4vmi1QCKyCc1ktFE85zj8WyZEMZteEKhykx1j6vZnTZVYrsUptJeftfzzBXJX2g",
  "key25": "2iHCE6Qh6mGwg8oe53tNV2b7PZ6bEskRdq65FLC25GCA6o9HP3gwpTvhk5x38fQMR9TVPuhvehL38xV6x2XuMSzA",
  "key26": "3yTs6E5YuHZrDm8U6NK1wyi5SwwGKHzCg6K5g36kzDDpco2dKFfxmnwJj1PTsh8nwKRDUZs1bZVjiexNyCBXTrW",
  "key27": "3rTN9rpKk7Gt6dtAv49uoMpW1rvUtZxLCspE6u1Y2RgtgXK9cZYnWUSqjhW24FxaCLPMoYJgSMhwEs4EjL3HzUs2",
  "key28": "3pTnfHSzbSdgBFAQMkFrRMLu2ESLozKgg65cLErwMvRKMtp1Q7N7LmhLnYy1srMbo7BeNV5pQwYAsjuZiEu185M6",
  "key29": "3xppkYXGCwcbDDMGmeYZwKMyxjZN5xMEjQ5sGJZbdWDYYGoQ3Snj4DVdkJjvpovXvVzkofzbaC6dCjDhivSuVfBU",
  "key30": "Y7whaMeLP9wWX7R6HnB9BDEsW1AdNfMzewv6yhrp5a9VsVqBHvBy7rCJUzkaYsLiZscRLYU7ByShq6h4n7hurtK",
  "key31": "4VUd3tCV4zoc3a6PmYJfRwPt9TP1afNZjSey4ghChc1nA3jKxhQWoF44VBJqjB4xmLmC9xVghwzhLdkYh6PF36CQ",
  "key32": "4tJtMx61EyC65EjN57hVvd3eiaJ5XyJyo3dLxWoARREWSRwVkNgjD93mrk4ZLLRBFb4SwsM7P3EJ5w48dhAGGcdq",
  "key33": "3TsJrE4YF9r2jn1Ho88Hxe4aMzHxA5Zb3zRGRmNTNeciRWpUWp5aPYeo2ZfBWBcaAUve7cJuW33B8wpxzSXWY1ac",
  "key34": "2R3nG1iNkrbgQweMQWXXMrosm9NQ2swzMJAzHoiLHzTw4DAJm6q4SYjawfjf17SaZ1xm3s7daDZmdokyChCX2T1b",
  "key35": "AXuK6M7L8BXez8iQQyStEkp7BL5Eu479h4ZVGc2J2rYeoqaU9CniiYXZ8asqskGMGjEhVF47iVkMjfDmEPBVjKA",
  "key36": "3g2zQsYoYy24AJ2SdsTwtuoAJ6oNT5yYwiyAcc9KnZmSrZY6TqNmM98FuBSpzmgF1n6nz2BR5v7Prs4GdfBXfd1J",
  "key37": "3nKzsZg95p5kQ9HjgZYmghr98uT8jvY3hDRfgvrZ5KPbr4CRvwegiGA7BaxecWWBiGpbQovdHRbPBEZH7FsYEBif",
  "key38": "4BPzQ7FTZmvLFK9sdoHCAJZpRzTPtN22hh1TNVfRzsYn2CzLMwi2Q5MjoskSbpW9zy5zMpbopfpAaanBLEB8asEN",
  "key39": "4PwSPKERgED1v2Dc6FhJwj33arZtdf5dzNiTDc4sfqeYnSFxmrX9ZYwTYUnXLqvTjxiCyCc8kQK2dFoeSQLLLS7b",
  "key40": "5FtnnJJSL4kvxc7BU9uijDzdm4SAbrxPaxwR4e2WgfDQBomom5sXYUzWse6sviDVyXHpDh3ka2Fxh3Fqmn2v7FBJ"
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
