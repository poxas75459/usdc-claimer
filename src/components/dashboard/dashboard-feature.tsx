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
    "rgZcFBLAYv2euDKQ88dwuEN7DDmVYBao6voaeLQXzAD5C7LvHBc2kP4VVs2mbdR3yLKTfsDFBX97nBPeoWY5yzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixBDdY3ppv1UHoXzmefTdL6geqZ8ZRDGdqjwzMxsVfHLfDktMFxcrWuJ8kX4WskLaKx7ivgewTD993MzaQq8cpC",
  "key1": "aV6rq7znBQwBmAs4TDNmQx6kfCSChQCgZhiULedFJUfDTPQUWTnd3SYxbcWEx8hSaV393WHHvDneGffi1CeQPuC",
  "key2": "5DvdMaS3E4Wxf4JLAPDxgRP1dh9SbTaMu3BcNtaAqDUVQvVbWFKmv8UHGBQBYwES9Tfj6L5o28UP7ajdMmCEywHg",
  "key3": "4ybA4wsxBjHGMpUQnKrEM4yT7hFhcbmiDBh3x1cDCk4Gdokqy39ZjgSvyRyYREKduRTJhKXa1gu76Q8hKHSZyLiG",
  "key4": "3LSFFpjgeytHADREZUi4cB6DZ5K2jkXNkSscsQZVL1KDNTmrUFj3uD7REtGQ4a2dmzvfeg2uPhSsUhzpkk91Big2",
  "key5": "2KbAw3gkE3ZGmcbghoGAEmxTwSZMTYRdaBLxtepHPR7A5heuszSKFdU6C5ZroKGfsMtRriHBcTVZm2JcbP6FTFdt",
  "key6": "4nfMmfDNURHn9WjbaiW6PGuzvgf5CPMv8jN23GHGQtSGjMtrn3jqm86iAS89B5PNd8JU5r9zxRceNVAuKgjJ3KfY",
  "key7": "31yM2h3v68Vj65x2DJaZxbSugC48mSnqfn8bBA4FCjYspCPLVm9fBJDfAFq2Eq1XpAT9ZDed9qMTLfjk2jE5hmZ1",
  "key8": "3Fun2vura3SPFbzNxdVy7CaberjsbxqfYPRfZkLJa9SetTHPLtg8SuaMUcAYTygytvBCwbwcXh8oEmpF14Mj4kYk",
  "key9": "2QunWW9Dz9kHZH9NYSZMH7i3SU2c3j4PdrkUh9WzDBfHGsaqNKvANjzJw4kJakKvcj2eXXkz4sEm3KrnpEuaaxVy",
  "key10": "ksNwzbd7hPzsMyVjWzLf5ZqJJXaoeDvAzM8VxgYQ6kZmq9tXStZus4r1tiTWs1QYqkPGLbhQJU3kZFfZoPVUzuz",
  "key11": "5R53zsqDSCeyk3adS1aqgBWzaeLqgRXWpYA3oERrZfUd3Yq95EKY1zTb2cr8hCHBLSr17wn69SFEcpPP9no1WzYZ",
  "key12": "3WEFu2qD94ej1uW79SJdZLAYpRuEGEp1hrEnEz44giqikwpophJCQc5E9WBxEirFRPmeaGvLYCnLWfHQMu1MveWB",
  "key13": "3qqmwx9RSTsg94vFDCi2Kn6k5JdVbDEVyo4AKtjDUyqLiKQu3YaDFggGhrNkFSTJ4zapjHS2eT3dtGhZfVuK4jFU",
  "key14": "vxKZuevL3aiKfajuh2eSA54xKiuMrzNGq1j8FFXNUmTkpTERCFDktgK2FcJSG3p3J3DvBPnyvXLCCJrQvpLJVXq",
  "key15": "55ZFpAkMRUYoipL5JweGxCvudfbbVzvXiSg3LDSpEpXA5ZPNVJHy4z1Xs8yTyz7uKJ3oJDMXpfG5nF6z2L7pZ4qp",
  "key16": "3h9bmJN5ovEXFpbRHUfxXnYNoBNptcQZKkyACok83nKdAwqqX1wtPrR7XbMnDrRaHsBsUSnWvjdhgdypAWiGyWH1",
  "key17": "2K7yjD1ngoke5cU3aD8Rc4Bnv2P6UFXS5KYkBMGNDQwY67w9mHqRiVcLGvjfyq8btzMJBQihtw2wa44DVwCLcK86",
  "key18": "615nyB9SY8MFtV7K2eNAZxcpb9FqYEHgTeJ5LAGjq55R5GF23FV9jampCjFC2ZHBonihhW6Lh5mAFsJExZdSgt2p",
  "key19": "2dSshY9GNX2dvSha4XocSe3JFbBDszxCdccRTHK48BtNNA38P5JVTy3px2BYMqTUKax7jYQk3rCiREAbiYSn28CN",
  "key20": "5JwcPwVz9mQPYJuDAqj2vGrstN4Vh2wvKEADSSBA1UXwBL88vvvaoo8op3L8Echz9QisSM6WuDN1btgURr6G2e3Y",
  "key21": "5PX9YMNT5kNYxYghSPyYbymgDDjU8h88QvS7Sq5V6Cy8A9hnkHu5dPX3a76Eyck2J8bxMvSyV88Gk187Mpkbmztw",
  "key22": "2u6GWXvR5g7VPx6QWsdFGUugZX7amCQbNbMaTJoEo6T6FmcX8WLrZ3ikTiTDbcQQr8XDewCiApSxuP7hKLVR2MTV",
  "key23": "5zASbE8q7w6CcvaSSPUcafDCffFCA3PrNQHCfCdwFAKsuR6U51KssQ8pTSCnrnNKj9GZaxyDCL2PsEyvu7B8TdNG",
  "key24": "62ovH66FzX3NNpMMqB1ZsFg2D5hrKC6n3718WWSL1Za8u4ec2XNdt8yLn58fwxBWcNYbXo5r7M1zW8V4z744jubD"
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
