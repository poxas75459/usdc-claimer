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
    "HVFvuYDSRyhK7SGRuj3uPKva49sPUyqx5TrYe2CJ6fmsdTs2DKRLae4dHS84vzRZXMy1tyPcKFx8Yia5ChUGFz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJEmP6QZ94nRTRP31UnsQ6PgG4YpzPVSQ1KX6n6KY8xK96gzXRLKwiWPeetCrehW3i8HVhw1s4gd6Zo1Q4prLe3",
  "key1": "igDVmjE6k3jV1BfJSyQ1WFTfG6RJctewGsVZweCMhB8MCTEGtsvntsb5wzh6ZtvqDRfe5i9f39WCTJPwgj3mRUf",
  "key2": "57DN8dAVckrYbf7s7hjRbWBL1zuwcmCEYHNE9EjEcRxacWxf9QaAqy114ABe5gkA3Ant24FepNg3VPneNYVHyqAT",
  "key3": "5Bj6MURPEvqu7GFMqb9xaGnqBn9ST3egctnGcS79Mcb874zpJwwBgKy2W5HZpMFxKJMqKbP7os1RzqLRbyj5J5PF",
  "key4": "33Y3BPb5DWozF2KW7sBo856oNSFRo4axFZs3wXCiiLtdnTRsuB3ymEDp3ur7idLZKBsHEZPmJx1J2KcfRGUyjEYn",
  "key5": "4LHfkkkD9PrmJDdF4swc75CcfVaS41g1N3g9cCx9sFH7xRCNhZCLH6UdpgVjUFey61SCWLnQmsMpQbn1uc5giRhv",
  "key6": "2WujdreRxz87ePgNw51wy1aNsYdHzEqgLaBKH4WLtjUA7Up8PnTdPMMZmVrZhhn1L1WrcuDD9aRJjm5z9iYnEkGE",
  "key7": "4MFX94764Yp5NCzj5T5HBQ9CgNCwm1riTa8Vofg3UvEG6FKMUcbbko1g7EA6prQ2pdPax5bAcXNQgbm86WebfWjw",
  "key8": "4fQvaxpzwGdVcm7Q3jQkB5fW1M9oD8HivtZrmzLZkN6gPPyKp4BePDbUCTkgquvZFX7zWmduVPhYcwnmUJn8QmrQ",
  "key9": "3eycJdswHqGavmbyBuqGDH3gNMporNKQB5KeAqtk7xcfrTiEg54CsqvipK1JV3aHdPPS6kcMkhdDmuNMNK3u5wp1",
  "key10": "4gn3EjnHdPxShux2uh5Ca8UBUQVtwoK7gpDHUyKMn215zw71PDqGVwNzb9Y12iywUHjTsaTuxjz1vrHRBsossqok",
  "key11": "4L7BfX28xxQ3oduFysPWgnCwwQiFB2vViFaHQpMsmqvZeSXQff6pbbWB9xTqEo8b1BjPzyyVgP9w4AZwRZP2vjnq",
  "key12": "4CDamwNadwwq4UKnwGKyZsDPHGvoDuwnpwcFHUgb2xvBm6dwLrrN12ZDgF5QLVDwxDP1RfcVthm4Lzv4Krz8fttb",
  "key13": "4b8Xv23GBQXWCpHrDVpg5Aod55k9v9r3aKgYacRLh4yE2UXtm7eghHWYiwQ36JN82P35uuqZFmoc3GEZ2nfQdk8Q",
  "key14": "2ssD3mTj8DF7KHRahJgHqj1iLcbeUNoCu8ztfUWLzy8GcQkN8WuBFmjJZDwnu5cgLnUZNLhEh16TnLPrjpP1gVc6",
  "key15": "3kTa5G6wHGQwcUgU3F2w3GoH3DtQXyrvRMCfNmg5Wc4QaWFcVvm4AFU6x2PtUU6mPWakZbvEHkrKFYrDwtW6fbFV",
  "key16": "5pEHs4hzSuUuDkL9EzDAAzQcqP64b2X1iCX7vLEp4XTEFNGk9DuDDstuR1HorkVJXmdxE4H5mCvorUf3Cfx5bGsp",
  "key17": "4VsYUmCoNkpQFAr2UWsSP72s4niy1KrpSsNYB4wki3LUDYmS614GwowT29zkFpPatEbVzYTrBq6ei8t1FAMHaJf3",
  "key18": "2rcGbP3K8Y1HLbm2stShNyLzsWebvFGu7yQsqmze6pupqjXcBuaC3SoC5XXvrDCZkE3EMfULWBwHYAq1VD1D9LBB",
  "key19": "2zmwT7iH3r9f8FGbyGfiebkWW3PRv7UqA94Nx1M3Gq4ASSDq9bN6HfGqefmXqfiyYahbwejUL4EdhnEQ8dBYoAx9",
  "key20": "XMb5mVC7NS3YPxj8pnPjX3XXoAAJtyJsCc1SfLvrqL62FwUXX3ywAXJWR6RTpWohAwvRyLih2pgDMGeCFp7SqCY",
  "key21": "2G1oUv3ppmzZovzRe14KejE9PBUgBSwhJNFdop6msozhW5RJhtHbBEbT3LcjCvRrBFgFKqHiT4psprR26QxV6byz",
  "key22": "5VtNZYeJRJdPLdakPPeCtQagMTkQbVSRGUTu8cZ8c5A9LP3BZfqYTkrqwkWyFVPXhyamiAomB4tD1xTKTTecKv1U",
  "key23": "H2ikjhvhV124yMNUxvVe6B3Dcs6iaJVZiFfznuxC5TXzZR98nwMfYde88gAGLH77CjHgP81o3pp1Nc4cVH135Kv",
  "key24": "5dQ34m78nKt1n48T6Pof2z7UEVFwrbHjnfHw7rkHebVDXZpVYQzZaMAKzRuNfMKheShFnFNc8KGvSYfBPTktgZJE",
  "key25": "62UBrpjT2qaHLGxTS2jsgRcDR1S49WRFmCzB3tAFzGxCuJLTSRp9yj68Yowsov5iK6AG9sVaPYbJxSDrZKFAWSVc",
  "key26": "3RdX8oqgM5aQth4ZrveqUzKvPSjpYBuFiDU3L4gpm1qqoEymYPXYPwTCpQipzPuEwAe17zP5V78Xv96dom95Awvu",
  "key27": "2yGkdMVhWfW7vG1B5aqWoJ5whi4HfYgEDKH7vKSf4J6Bw4eYiReNtAiR16mo2MhJJpABtArC14kD3eZP4dVN8yAH",
  "key28": "5vHXcaX1yAqm2ViWnGCD82wPcdPmmtZgjzF367kPyQ37ecY2DdErEJG8eMXN4WNjdvKdaZ9WsQHBAjzsSBLqgqWG",
  "key29": "3WGr3Df1EdcdzDdmvJpRGDjtUq8RePt9qmrfoLTx85KXt3TfirGoSceR8Cd6tortp8VxcXLzTJbgz4g4ZJaP5Pws",
  "key30": "pR9bRJnsHE7ubHDgffid5JYixzbqaE2Z3nP6ThuDiMKaH6Z4dSY8V3arUF7WGf9mQLTayUkfUbQhTmYFyjUWvye",
  "key31": "3XPu3kUuwUMYhFMZkYcvnzWDpYkZjg4Y1XDFE2GG5KZ7wXpwLjqrpWyXVj7EupjUbPjZgC1yD2FMkh3cESN3qnxx",
  "key32": "2q442kC6pzQHHh733JfRrX8Lun77R8Q4hrHaeP8bBojV6Ycggm1wZzgreFDcafZwSb7X6poWLsDhBfL5tnYXbnmP",
  "key33": "3QiuPq4g7dop6YNXj7khpgidtQ2c4XbJX3swySWFbX8yv2Wyd6ahfxLU2H1DbycbZCxjFdpAdoh4vEuzQNKaR1fH",
  "key34": "5iCLA1pyg1reB5xXJwdQKKiZbMgWAXmvkpWYEMKfWtXNNS3HA6YFp9WvpbSiR8HdYQ7d2R7uc7HZPFbvfQu6PRL9",
  "key35": "2XV9kqbp2vPcxWsABmgHtwbuLsT45GUstB1PvkU1MRLhXBnC9pC9DdxjXuKzUwZNSNE6DZmGxpTgr3WNWK3rzvBB",
  "key36": "PvWDCacKtuJAebJ4RVq1NnhZ2iyWt4gq5WYSD8gTgyWYp2uoz31ATUz2hFERKUahgoBAqXMuPgwQTBH3svHvriv",
  "key37": "2bMiZX9nboazUZRH7fYj4Tf336Ry818rXRxmG6cRYk5Z8hcMxQhbtZPmLp4xW5HZg5mhmo8K5BbDz1BvbaEdTefq",
  "key38": "2orV95VAnQ7thShAx4eNNzM7WGzAaEJHmkhQyiChXgCB2F6vbWRao1WVzhcrXmrA31TzaFERGETcHJTHfw7JPyRu",
  "key39": "4K3LEC4oChmgoYE78njGMddFnM8M3EypzY8cE9xTVFVNX8E55RLytqNNSEY5Y2pVNQZ8nSh42q3gM1wRjKL5h7Ui",
  "key40": "WY7vhja5HL1KBzeBWMGtgEin6fgZCYWFEfmWgmsoUxZLzv2MwRCFTbF41vJsmHAk4DoTgdXk1YakEKNhSJawWAS",
  "key41": "2Nesvj6C99jyx2WDgWSPoenjEagbD8NVbJs6ScMhWmfzCf2MgfX6j4kvqw74qBzvRKKd1MjR3aHSsvqeJzBCm7ic",
  "key42": "5NATDW1LEX9bSy5XjjAAeJs5xLyqyvfBzRmdkEhm5P9i2psejPRjEyHTeFwtjN4MsXjVB3pUPT2TN3cRAXigBfmU",
  "key43": "5WP5LbJ9wraWPBfZJVZm2owqNxiLZn9UVUW7PXfYz8USmpshqvcAUh6tvYm6PvJuD3LN9rHe8uANDAfFfqR1xjxs",
  "key44": "3dtfKxabamZNvW68qn81iEGbNRBnfH5sKhvhykbfgukypYtSpcwYKYsCFyGkiniwVLgwmKcbtZKfPYNHnfLfYtMh",
  "key45": "4GyhrWhHgW34Wyo4CfgfPY6n7ix3kjaL961bRxJvYXrWeYWDBngRG39HuMoyiHUGe9gwRZEEMXYn5CaZ2fXRrCQQ"
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
