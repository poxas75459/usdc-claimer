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
    "3LyifShaGKCDtKKgXpvVzaFGaHnYNMPaZEvHuGboGv5r8g3mMa9txis9mso1uzWeaq2EZsmRNnGEiv5V4gr7EBYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9uYGt21pQVj931Vfor8osNvRDA8Dq5FFJQeTiQFPY1Y1e8bj3UHE5P2ReRGuLhbJnfbLsaQg2Ko2fLj3S33Shk",
  "key1": "4NFR4zXR1J5J29tVo5Zrb7k37Xysh3VywbYDSmT7gAstHG3Me4Fso2CHbiVuoRt86JUjtFRcSs2PrYyoXX5BeEt9",
  "key2": "52X8AyxBUJDb9pcXoXDGAwkEmAEo7nxZ1p4sBAhGRbyksvfbJGvYjRzaCynSYVYqbhG5VrkYoauvghf1wBeLiUua",
  "key3": "4nRtTVwyFL298EPTBWNhGteDAQCqfyzzjyKVk9NJ6qgmbFvMDtxexkGAwWGDVYzsrXHSPhYXo5L21erxEkwAzaca",
  "key4": "5btMFbq1SCKKhRT9MdvJJdtzSw8PestVA2mw7yQgUUKh8hNimzs2myXPY5SvZ2cSpaP5RKuj2n2x8z83Gjrg9DK6",
  "key5": "5fUdFYTuW7BdmgYSdo7YYsSqrJw8tU4eU9vDwuYa9Q43dAKw1WUetELofcdupj2ckCWvneasjz3UEf5MnyDMGkuW",
  "key6": "RyAJxNyC94ekB3YCCvZBHGaHjCsS8mpKnnrAg3nfmSotmndTfZPpotZj7itn1M3cDpEuiUhpcgFH27tok9HSs9f",
  "key7": "2yisZeu2GopvKFJupMRJFTTh25cdnUYXiX924Hkh2uVAmkGhwPK2RBASeBmbmsS8UQdanauMpFhDWeS43oZ2vfee",
  "key8": "dhBQZsdSS3Awg55yYfPgbv8eavPPepkpcE6Exe3Rm3PrRyWQfqU6dVjJEFn1KdgTz1wJjG99a92XEetGEfDV6zu",
  "key9": "5pEDTFdT1v4wVAXn79XTebYy9uuaZHmD3Px6kAvAsn2hsKbFUtT4a57m9Vu4a8AMjcbeK2VpxMZx5TyuPjRkV5qF",
  "key10": "4vRciRyfkxEsuMEQAV4DyAckdyvPqErhDjbCQ2mFV1thNYQZEx7NG9HiazX2e1vA2iRDnmK2XqhrwqreehfbTk3W",
  "key11": "3z6ge7JR9HdHRa3gc964wTLx53dEiN4hENZaAoLYwkT9zwhgqM5tipCuJw31cu2prmqYkRwhHJivcT9mFkwMMWo2",
  "key12": "GqFfhVUVuuv2RSNDGJnmvRNArS9jjdhTLTeF23BDnjzsMRnc1kRYd5qLxgwKpUpHZADj1y28VwCPmRTrKRwdhGv",
  "key13": "4CDBNbRkEmzyTqcVCvJ2Ebyq7K5ZV3vn4TraXNAszoRSEZH1AgjJkN1ycKzssZbi45w81ojqQpbxjfDUY3fSQYGY",
  "key14": "bpdZLTPRa4gnPyrweuQ5iE1rF4UPb9gDdazFPK9wPRETMQP5Z4nWrRWJeLuQ9CrPCMmhDUuDyeBFw2DrZMe1fgt",
  "key15": "jf4UEoBgd1CE52PM5N2LTXjJdcCZcj2rcjpMNk6D5fpHboCu875zogxQXcFfhobbyLsR8UsfV3W6FjJF3CSkPJm",
  "key16": "2DmLikVVBxjYqQWpMcQMjZkDuBiUrX8XPdu4N4TNKSW2EE3xTKWCoQEbxKrf6tZKg4vGkUUvEjJUtgJ3t8xXLnY1",
  "key17": "5ScjkPk6CQieYSP6RFLoKT6sr5LXeG29MTMNdKiaVkuCaznpMSLUNvgXEqyt4EBXw3s8x6UCweF37tbKdt8kjc5v",
  "key18": "2Y1dLtbCKXeRgGKPeYFdG2higZABeBQE6fwAPZkF4wjMskJ4S3Sv8jxKdH2uQxaxwiktuEZmyBe5wGyFvZSxComV",
  "key19": "5EZ9p6gvjRSnvFa94xPPxwLZC63qqMMwJzqaTWqKS43odaSsdHNbAc5bLiXWvPkvy5mrCvRCzupwZqLBaJx6aftq",
  "key20": "AP1FFDcMGDVeNuRgbotKoYNbHyb6Sbgzvok5RdNMpDRGSvzjhmbT44CBErfm8c3Yv3ePHBaoCQtN9xqegSgtKcK",
  "key21": "3QiYJhMmbKh7usccwef6rJcyRn4dkWMPzVr9nqhUqXe5TDeAFy3dYEUMuPvV1SXXnmgKWH36jZJvUhx2F2QvmTW2",
  "key22": "5XpyuGQVmoARq9GaC3jeiHFiyYuZwqPM3Ke6ogmGi7hsWuqb3wr2L3ychgrA48EYRugaKAHjw7TrsoGTbBPdBiEp",
  "key23": "2ADTuDBdJB57jz2y9fsed6jSPpNecNuWhe42QTynFBqnogBeCjZF13CKpChVAEauwqWEYRNqH2NXWDGJPGovRQhk",
  "key24": "FTd376mLr2UVjHVhagHtRCHMNojZLfyJezVGDvoeXpoAENhbwMYDUxeJ1weS2sGkMVQ6MH7FMhBJ2myWHazPwSJ",
  "key25": "MWrjnnsVeucJ45wcwoktvF9EruqzCbhvVdBtPUU1Abs5g37rQTwAFHTiAuwUYUapRx1tTCDbysv6s7gVhZZviRk",
  "key26": "4BkmqMRoQDuDMdKQaoJB7PLS56APQd4UNGGModvKaACmVp5WYZqP6eTkpxxPQnvspT7d76oxpFqCLDt3JFRH7nQt"
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
