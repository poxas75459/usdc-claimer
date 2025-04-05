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
    "5pbpNXSsZeLcpz4ZVDCtE2ozMufGZ272Mayn4n7vJyiHR17fvx7cVgT99JJwaWTbmfZozAxA2fxQe672npLPmR8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h29XXVpN2ZieC8sbRWqapf6go1XzVtypxbPfjKpV991KTf3DSd9VRVPjeydDPGim36TaTKkmkksAS1pq2YdEeys",
  "key1": "2U2HS9yacgr2KGQQVQgSAEPKkwsJdQNUr6bRdJUUKKLjJTnRgCVBbjJPvex2HdwGxxZnVTaLSJKhYpNcMkUaH13s",
  "key2": "28Ydcuud8HwxMBY4XeNACGvs25pewQMR5L3bB6drPU72G1QfvcYDJF8SNWo5mgx2BVDhnXpFdKWrRKsogq13uhEq",
  "key3": "66NyoQAfqe5tybjioTp1AvHLAAkv5y3rkLihfPBcHCGvuMZKp9T38SXasWpjeZ2aHThDwy75V3sYoPcPBf66JnJd",
  "key4": "myNyxwusJQ6dbJb9vt52cMXDMycu5uDhZxH8MQtXdPvUP8PWh8HxuvoWCzEhZaa464vysYShiHax4idfSVqj98A",
  "key5": "5PC1NZsoQdCdkyzJ3QDNNM1TkRHQD9CArijBVuRG2q7TFKZ3UYdcw2rJpJQSZZo4XeiChnfrkWqiFP6p3ujmZ9ei",
  "key6": "2bVHJhYuivTgVSuEeykMVrLNNTD4d91ppmw9HFDZuXFracQt3RbP2qRge2oC4x8HCxHV6U9ZpMeyYhQnVe6FrDcf",
  "key7": "5UZFy6AvmQftnozjTgNPp8UH31yodFoCbeutN9BmsyWWtUQTNsShXcyWtuLiHTShTRMZfQbSj8S1b94tYccThcVn",
  "key8": "3x1qpnTnsyR8cLNFXUnZQLMsiUxpjczmrY9PL6HBBaBYrpNEqXuVmg259c7BYsLc6g3cFtTHSiUEnVNow99EmsuQ",
  "key9": "UzWhvjP7PPavyqxM1gGu1dBeaafXtPLg8grSrk7qUZerRDnJZXoFrwPUPQGSwwCwY3T78Hyr9aayQWUge9ZxiJZ",
  "key10": "jhHDnuLz28oBxYErpuxKhwYfYA32QuNYXxVweQpaNNJ8C4e9CaeqA4QL7NhNaaYZsuTuT3MMhrgJ4z9gL7gwBvx",
  "key11": "3oR7WAUDiLW72eq2HQuGZxqGLx6tXkdTAnezPktBPXmPHoWpFc8SAFsfFR8tdpYZGjxUvBbdi2viwWYVA8TNCGWP",
  "key12": "368A4bSx7tyMwRp7t65p8CXj85TfdReZxngFRj4GsjCorhKVq5utL6YhrshRnncF1WLn5yqtPh7SSJkVDHyLFM9C",
  "key13": "2Ccj8VmbXSkMzDzqTiiFToKB7W3r54WMKRdxgdjo525c8xSFr3J7cCUvtaVLvCojzENoNmppBkPCnCswxEf8fVbc",
  "key14": "3Wg62NZ5t8jydYWBYr9MFAmhKphWA5tkKYgrzGJDVdQz8M5hA2QRjWzPwj3ZwZzGWLCfrYpLfXpngzGoBRcChVNE",
  "key15": "5DrvHmPZvi8BqSvZe4aKs7YNxhBptzK14JTM3kJcwBAf9zcJditCvmPjkauC26y7Pad5kHpZHUZGr1wsFQRdNF4x",
  "key16": "3V9ubQnCLLcDc1Vhdyv4hxsdZsLazkcQmXSy3349tEXEBUkaS8qZNCJSczcn3r4C6WmikFUupAJ2Y8aKpweAMZjp",
  "key17": "2kuixf3i9BvG1pFYTD5p6P7pjmGenhViF2GiZQ7CUKXPDuNg9EhMc3BF4e6Q5YLkfpGgwNVMdibC7Bh4FSVZzbez",
  "key18": "4M3VHZiQVEN4b2L3vX45r2evy2jjPfKyy1HhBwDroM8W227udBghb4ZgVvE6xEwm89LKpoUaLrrYBM4xqERMAqk5",
  "key19": "CgSHxagPDkcKKu27QhTC58Ni7ZMCP3jcS8zt2rVeSeZDt1Q83aG7YyWJkbz6pCqiKDByYd5YQssfubNQzVJdPn4",
  "key20": "3n9k2CJU6V9hYQV5s2rp3RCuMtKRMbkmeFVcE1yC3MCXaZgFQhxhhZGjwDAzhtGtfE6r1uEnEh9ACuSfRVtcqW2Q",
  "key21": "4H32CuiJjJYVWTxr9wooFJMAuBD1XGmAAGnM53dp5KSmeMMBJMk86PM8tNzqZu2YnroeAMU1WKkN2EYY91PbfA1x",
  "key22": "3uZkCTer6HGXzeoKegqGc9WsXNEc9YbuokrEt8WDV3TiyiyUUaA28S2XGFLiXMc9UFXMedJ4KC4aW8wJ2LVbLxov",
  "key23": "5sSNDzNB5UwSEFPFj6Z1qo4D1JZnLMdJehp8G5eenMdGbPgBRGFbaKMk8B14abqKptmPjJtyqE28NEcQj7JpCotd",
  "key24": "526u3CXULf6cZjUeWYMuN1x8Q7rWhAVuN27Zf44BaKQoZaJDM6ZgckVMBbEwxntxRYgsux8d1pHFcbfKVyTyZvyw",
  "key25": "2Beg18ZsCWArWXDFWVuaUuQx14bCa8bMtJuiDDSzR5NVdTSurn5xQkj2W1QBjAnQSYonBFJqqP44mdFW3LWEDpSR",
  "key26": "3RyKdKAkGqqvT4SBhshCe1fbMLuj8sHXRLXew86RCKbQnuDbnUUF46oNSeH4aJTCaM7MJVupoc9QRnpAcUUYjEbh",
  "key27": "2B4ZeS5TJ9A5yD9ghhiEnKQksaLTRTun3W4xjvDJhGwpryKSmcyXZkzBokiQr1tVjkezhCbYso6D5yPn6zX8eCkV",
  "key28": "5BAkZaTgyGQ5H8ZCGX8rV4qyxzdZh1WBhCZbCrLepeeZpNoSjSmDTNdysxYnyyEuQrRoDFiRC5bG78YMLKs6mdyC",
  "key29": "4h62ih9Tz9bc91Nqyq8P4uc2pHzHmkCWtEER4FE4RNqKwycnHLs156TmozCpV6D92e45mZHLd4UVNzokUNstVJX9",
  "key30": "5jXspdqZJdDinWoMScgWCduD7nF1r1ywYnQxgtu7fpuvb2o5C8Jdox4yMzWqnzhHUvy4Zu2sn5RdE4WBq4mvT2rM",
  "key31": "2i5vbBKhgWoXyJ9mj5yMd8SjfmA7Pq693dx4xJpbR6qgk3nfjqM8BUhe8b28uLMRSUnfkpbbUm3u3r2kjyNGQ4CG",
  "key32": "37hWQaXF8mEPQZsUXrX6USUwpLWyY9LD81crGrPySqa62CZVLpJq7r2oZcJWQJPMXzDJ45H6Ypr8igFXyE9NAPbZ",
  "key33": "3tWm92cPVGHfvJfGH7ehG3TLHyvLQtghEW8px5UueDpsdMUH6vuJYsDUgY4N7zo8HHc69uAWeBFYGP1DgFbXcnX9",
  "key34": "Y2FiHBqgdZVKyZW8eDwFXQL9aL5PhjJvTBSAC6q9Pu7qSB2HP4RkCGS19GJa8o8LcDFNomBxvjaFmPA9ErFVCfh",
  "key35": "5FS3eqFGwWNuWSkdotk5uiX3HN9VpLsn7bwdKGYTRpMccVSGWwZaD6y19PoizzMpRF1ySKCXTAzCVWdQHLQpdaiU",
  "key36": "3sjZpYcbcRjyByEaqbRnf8TeiRaXKzwVp4Csc2h1dXrECPYLPRdf6pTveL5QZZbCxiLBP2yD6Kx5XxeofEyqgJpw",
  "key37": "2mLDV4JSJhqoywBg8fHrLLF1xZUik1BNw9Db8AhBUrppWTXgCazKFofNKHXUYTKg4NciCLJXWn8wa4GQNYWQFmST",
  "key38": "3T9kGFBDiwM5nSzzXJZbMsJPUAj7SPCBhuWypwpeSj9tvXHzcpkvwg7ieZtR3jk33p2Z8vizohnTgCe5g1EVjsAV",
  "key39": "5MR1qEJ43VgLF7NB4qDcKHSRPZigeDKDyY9UVWtw6cL4RCiiCYeZnLaQh2gqUHnDbHMkMF4Ykpxcm97Yhioy6Fnm",
  "key40": "54xCZ83rPVWXccCxVNvairQxfRjhWrHgFjrAW1KWFENv3TTzcLs1eWTS27AT5x1zpUn83e95WRoPB5jDZDaxU48v"
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
