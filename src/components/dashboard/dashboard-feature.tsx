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
    "5ZaPCujFq3hBNwqYZLbq4RvRJB7TKS8bXx9uw5PSeFu3ZqzcGukXESzLkyFHuSXdaPhQGpG8NG11W2ARQHY6yH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRmv5SPNDdV93KFVAAFvFnLSxNWti657iFVLjiUAZgCVojD6xBLTPj4SLSXu7ZYMyH2WxgtQfmz1sKLjdMLdSiP",
  "key1": "4J7J2ttBcB2ALCMLDndpsojyF28KsZmJtJQnFddu6Ygpgf3DYDG4nevZaJHLZMd5nGjECXFtaUeadqEyStRqgteK",
  "key2": "4Hg2ShC7Cz4nsBk9SARYQm8UbBFCCkaQjGMPedCn6ewXjtT79Btrvy5stzCt1dpouVkcN2rrMjPkTLawEtNkKgzc",
  "key3": "45R5Acn1AS4gc4zhBEG9TG5QEEPxbdoaPTo6FiyNfaf62NgCoCb5rsjZoKRp3goSrYzgR2x7g1XN3BkZVV3N9Wjz",
  "key4": "4pibeyFbPGUpndVTrfEY8tUGETk7utNbKrTcnZeyUGB1GHrsCc2mWmXMxbaSCzbRjzFW8DiZ49BQ6Tcsd7SC6Ts2",
  "key5": "46qGvLPd6zL7tbMoKvigdRfGwBerprhE8DcKajuu3LRdXgDfPiPqpBXUTnmt9m2tFMSGJe2egvUZQFAPhV5mUGdu",
  "key6": "UCvxGtA6eTr8hoeeDLmkEaNsmZKAsN1YHC34jfqkxoNFf6csVq2prZ8yBiTpSXoD7RRmHZ5spWnJi6BRvRsuVrM",
  "key7": "2cGzFZsZ98Qh81Mkqvg9wV3KAnDuEMMbP5UqfL8e5zDzJmWbzv4rSmdKwpXeG9qHB7bEm8q3Yu7TK75YT8j5FT1g",
  "key8": "59MsnGBavB5ikpYkiNpUk1jg648Z4jSX4WcBgVtj7fL9Bjj5fVQeZxoS9F6tWFkFDAvWJf6CjUn8KZwpPGo1efPq",
  "key9": "59nGumw2EzBThQpd6gW57da67B4yZ7nmw7Ra7a3L69Vu6ddwccJVKdnQJh7KZqAqJbzZfYvU1eNnzdEyxP8QGtnt",
  "key10": "3HtaYLUXDBbXrpMVZqKBDgKZQAysENTvFqCJy8BpussqBfEfaYUP5u2aqjrzFWVEDfZ4bfhfH6hiEhJSimxDqyUq",
  "key11": "5zyEDrirj6r8j4zLv6AVHRSyhReRQfGvaHckZo9bFmyjUoC9udq8oJEYkbo89L4kGc7vTsF3vPh77WwHzu2Tous2",
  "key12": "2YciCwPHdUurdSoQGtsabiA4VEUgFfY1gd8YhJ4ENwoMuzvPZWNcDQCeLksgZXiUemcXtSbXe28NQxX882vFAJbG",
  "key13": "48Qswyw4js7wgVQz9LJcscghhn24JJGCkwriJtCar7b3VKDE4XB44cbXv6dRCdsgTXWupqHBFkQnSieWhM9a2PDo",
  "key14": "CgzEwioUkYpd6VsVj5mtaEAxinLgaY73TPKCQ3NjUX3dzBkeRhvEHwHsN5xxfbrEt57aytcMBi5a4MWRMZjeUDp",
  "key15": "2evQUm748ubNCxQ2Qiye7jk9TuuDjc5CX39Ko5D4RfJThGjSVthVZJBViGWqeiBs68cozbEMnkYa9JTWP5yBaTTn",
  "key16": "56v2zuHJkfoB4yf4nJPQfHw3S2zTqFd4423o6RK6WF7mtDXxSJN6hfgEBtBEy4SkmpB33AZQEhmWWFiaoURUVEHV",
  "key17": "5KHr9pkdmkiPhcgDmZ75sGzdGrFPsxPB5BsEyUQV2UfGD6vvKQWamjvHGTwKxjWPsrT8fiwFRafd3MVBE18b6QGs",
  "key18": "3MraczNHgpLGCotQUCqV3rjQ9V5gS9KViTjuoZfEv6WgBjybhi3MJdWfEcZLsLtSYUJSDwXJvmWqNRj8iEVu3Q4Q",
  "key19": "5vBAfbDrpigqu1HHvpwcKsjB9jft9QH11e9fy8wK6dHu7BYmEAhXZJ7VbfpGRPq2Mmmu5DAkYnsXnBeNTeifNETP",
  "key20": "4WXu57KFGGvHQVJvFKqjhR1RHFUpeMuiTBu93RY2WQ2vFYPsdcLWn3Tj6Q7V76P9isaRBprHkZNHRsaCDPSkRvJ4",
  "key21": "ivMKMLd5C5uMyjtdTJo5UmbJjGPv7JKzXbSheC69jjC2c3cXkHLsvPLW2c6zenxbEPq3zkrEb1z2GTJJ23tmKYA",
  "key22": "5dnGTopPAvF5qH3HCBZjzWwBG1MDrroTcrMNwQMiVXHSRoruexLDbJrhD5Wfw7Bsi2u8ifPh9afTVLuCpztDnjXw",
  "key23": "4Ty9pLC7FJuejuqnv6ECY1JAnYdJPTDb8wy7CDsphYzuyVcKZBjepx8BhPZE97Qsrzp1HkYUWpmLXpRkRF3d7gto",
  "key24": "4J8DAUSFtSPYVJ4NeCAR8DLJYviVN4DCMAAXQgiTQc856wy5PS2oAJ57hUtZauWb6Hqa5n3PMeEst4kGjVaEqPok",
  "key25": "3PpGPmnzZ8AMa31KdijWoWUxMXd7P5CyQsuMt9KYP6BATDVuBBYLJohD89oihFSZVYP8uUfUqvWfiBhuVGz4kYyE",
  "key26": "2NxfSr1DFcj4xTuah7GB3FHKj1tCnJridiTD6AwCdZYfLohFtBNLkaDUypYYq76vNfJM8De8trirH8AdvcF4hdhh",
  "key27": "rB4FXnKdev7MMEESKfy8fLxcbC8aP9wUWeh1C8UEJ44o8CwCzG9Z1XkB9LA8q7g15ygPzJDphSuCxh2nQRZWPqM",
  "key28": "623BUVeb78wyD3tyoijo3wEtFqtr95DbKmNXJ1ose4SkeYMZY9UdsanX32aR9JnTt2TK9YUuF2Rp2q7WWNcXnytv",
  "key29": "39dCN7Ab5Wwdhuv4GfFPutfLnSu2et1gsvXkjfSThjWJhy7NtfDfkrWF2fdes9W7F6DExXHLQTr686NYZo4nwwoN",
  "key30": "5FpkAn258hqoPGbfsp4MSZaxjA3HP9Uk1pharW2Zk56AyAWnA8GaJSMMdrXkuQcVF1kGSkrHLaN4s53DSioiqP8B",
  "key31": "GbDYVJTRbdzTS74FLqCPpTMVaUnxbW7dDN6HhX51xR3p7KzAV6cdQx9Bika9GGXXS5BzunXc215M44ADb6752mg",
  "key32": "4sM2MVPUvLb4RYYHjh9QxAzs7L29Dg2DKNVUf5jiwJ649is5AkebdP5rBvMasY3A6y3jANPpLYNwEitZT9THJVRM"
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
