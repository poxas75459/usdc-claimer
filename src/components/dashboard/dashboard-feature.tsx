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
    "21gNXHMotibzR3vF8cN48g26hTepRbyRDLxk7s6utfm85ui5PbUTeWzQ7m9H6dgDE2czFd9STVQnsMVwvivr5D4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PcU8yLwXCWBDva4d8sHMYjJ29Z9KDcBYPUSyRdx3bYiceYWNrN4xjs3LAW2A4CrYrT9VgYhqSd9WmviPkeCxTVj",
  "key1": "3HiLaRCsiyfxxNE7msRoTep1eTyx3Xbz1HTY4TUJFpV4NaMDDyZpFZSTdxg8VyaEbr9YBPiDbw2u9QRVLomv6sQb",
  "key2": "26sbsECrv2R2S4zCBh37tWwojHq5eMCcWx5dqP6kBbPfqo1UtMeApdFCac2hkRVsA1YCwDA1cHPkfGMrW5eXDQqV",
  "key3": "23aufYqnwuGoyFY6CMqN3TWLaZiv7ysoYdYfUeby6yN92S2GSDQd7frXt8jCaxna5T9MX1bAvC23C1yrhqKbGB7w",
  "key4": "4DKzzkgFsPAtFhabJedfV5LYe9vV3T3itx2TYyo8eEdsaR5F7DWNqCUsip8yxY2QPd9MfPmDmV5jN75KpniMPwXH",
  "key5": "29RVDZ7woQmwjYZZ3VSW1eLF37315xNfAyyA5ywsPv8fYb4WZPcUkubx9Aip7XdBZnZ1sraKipUZgLZsceFTgLFx",
  "key6": "661Tczg7gHfAxUNWtGFXWBaiJxSr9cShdzFxGT26SwmBHWPJqQ38faCAbaBzZzkALZgHbsgaBKY1oQD8N9nnKewR",
  "key7": "35iRaejhtWeRgthtNHJQBxPasBZ6qim9DtqDeT2nTF7kfvtY8269g1ohDhDbHhMnY4P3xvb8eBTjiauEZNcd6aVS",
  "key8": "5CCkxu4AHN8hxbGmv1WTecAonFEvV45rtieDEjhTxYqN1oVRSuYCwKcosxFkWfdqW4JmLVXBkaERQYEQRvZbMir6",
  "key9": "49uHjPx6fiZ2tsQvbtFHj8DgKA9tZegApPGPbbdETwFFoAxp7bfbENCqA67BnaDZnzc7nb1hHMRiL6kHggFtdc5y",
  "key10": "35enQiEhTEwodK9rA9nNc3n9a6LmRz9goAQXLWkZ3iuSJstVnLHN1HwpSmjkY1jXVfZveDjQUPRcPPTZfzoo3kX4",
  "key11": "2qMq43umd846XYZECc2UqoTJfvyMPTxRNMkNGo6giAEHXS23VMZFvTzrHiqs9GwXHACC3fJ9eDpYVG8gbZoiipXC",
  "key12": "48uajE5SXuJvt3yrwL53BYr5CR9PCXzmg8hVgxDbQK8Uwqtwi35L2VPyaqo3HkaXb75yfycQu6HijoyTW43DWcis",
  "key13": "G3Dk8ckvUtmd5JfjHpK41TDb9JHkPmY3GSjMLfS4PeMwTFhNYvngcXDQqbhzq8Y6JmyKcUg7YRWtJr4aqt6hJNP",
  "key14": "41XWGbjQ2mwvC6qaYPf2Bsk8FeKAYC4QAdmXbZnrZn7HPmxCRmFSkLw5f38jDV4dJ9ZGzCVcJPySKWChnufNm51M",
  "key15": "2XiwHSQwR1CoxXGGmdRc3cKn5kq4t7BHa4pH4RbJTLA4hpSi69N9GpGnDsesmkK7DhhXto361JU7RqypyQmmrPjH",
  "key16": "3V49x2n6k9iPuAQtoM7ZV7j31jk6mtFCKe7BshBtw15UcP1RKuKcD88Yst8VErM13H3PKpVBH9WcNnQwad7rAATN",
  "key17": "4xK8bmzJjEukYgsR4SubmrT38LhMFCrbihBJ3ecEoXQSmuKsgDntSVRCTeCBEe7vh4hDHbwV9917PpFwyw1DCoVx",
  "key18": "2z8CYBWjZVfD2MoxpXuYykfRn95Ehwzy8s2goDeb26FMV2vGVDJiodeYQAVXjUo96mnZgrufFZyoH3FVNuZ6xaDB",
  "key19": "21n4qsjGfynXNG6C87JuXKkse5yQUAXo1XppNe9NoknCsF3DMt8xftoniBaRSrrtBVo714oZv5hr489F6VHBG88j",
  "key20": "2dVsn82GbZz1uj46sexDjAsQZQZWkG2Nydr9JgXtEsJUFFisVsBSaP1h2Yhb2QvJTmajQjPohGN9Qu3NMFsNXT2M",
  "key21": "5Jm84zuccf3BdLB5zakmhv2zzok2NtB4QALantAUj1er21YJ2SUKUgd2c7MYcYiB1jNXLatKK6LPv6Pg7ShXzMrQ",
  "key22": "38kNGBB67CoSfDq9Ho8xKaSwGnaLTtid1BVy5LAXaaZVDyPT5Ry6Ax8S84z3XxNB8MvkFmRhWJhwZC6eDiudDAS8",
  "key23": "3WYryuhfHA8Tv9n7ZFsGCtJJgr6jgLT9TPoYsEozYEF94moFQLwskAUP8ZLC4UjJNRLiRnxvgFrH7FYrM4TK4Zrm",
  "key24": "5KGF99nn64ZngCDV7bFoG9GYPh4pHR54Lhtnn85y6LNqWhKnms2qgvQztGEBtRvfokCyRnscE9ZdFGz9PWpgYqgF"
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
