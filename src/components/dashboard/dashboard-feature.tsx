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
    "3zurMxjvNUHq5Ddx2fa4wokfjeXFAKRan2gn5eqUg2jDv1VeYRriZc8EH5yGXnmEYcoju777S9PFzQ5gWytez1KP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikrxQruGpD516cmubzrTktXmDzBoCdBmFpTsW9FL3PWo8rix7QSYHVEKFWfsNPpXeC7v3iftnRfg7b2fm1bjw16",
  "key1": "3sYuPyij7yPjz3Z6hpmsY4DAx5zn6ni7rLWbJ64JtzGxp3dVUPARfFj8AeW77hKQhsGqrpipzbCLQKhxqyeVdWwv",
  "key2": "3Q3XUaQcANWoe5E6SnDzGipM6T78nBryz6g2pfy9togQVsNFCaxGTiP4YLchyHQdHH4WpsDxFXwc7mXohd7YuJnT",
  "key3": "pnc4qV8hz93qjnuC9UMJ8jbBRGsYxGKpDyVHyW7ZTP4CekANRAKLvxqUjBQH6ZwyXSEzU5DsaGnQuinSoVeTiEM",
  "key4": "CmPYNzhqagZJuXeVd5iCD2sQDS5tSDVScXGtjZvuvsPtbBgrwdSG4oHDN75rC39RC6tyYp26QdxVPncCeAjrX4S",
  "key5": "5LReF4jvjJzu4fH83ofHWiWBJq47GRnHDMAwzwuWMdvmHscjro1hLYoekUGHtmsbVUUT2kMqLWDtUAPWKdzpWCFW",
  "key6": "3BFGmh4RAX8t4hEumtfJtgQRacVfpqipyomykoGsgapKgbVA1yrcauz4TJEg7uJbjWyau5u4awpTaHy6enPm2m3o",
  "key7": "ebKp51smwNa5ePYrVssi5QpcTPEaHsNvncmhcxJ8gecerq4xvpzxseGyx82JQrYx6KYbAXF5X696PEYAebAN62V",
  "key8": "cczLyzr36CZbRR4vMSw4ybrNA7axTLyEqpemS4jKUeMEp7HvFtc1TsXPfez1AVe8mGQM1KF95hgnbt11CgnHeV2",
  "key9": "2p4w59twDhTrqbmpTuKYyq6Pw9mXL2Z76ru14wgUsLLADb45Gnc5UsVBHYK6zj98UPMVXTeQrsprYLME14uABbV",
  "key10": "4TtEam7BbeQzRi4r89FCguAMJ39r2UEpCrfxdp5Q32RQF9U9mZfty9CkzM74DNyBDj3dhnCFw8Yz8KC3mTrTXkVe",
  "key11": "3gcUJ8jEVYguutVwkE21NDoC6BrMNkSUvCBhtFen3cTptYME2F23oXhkaT5GvaVTmZGuHzKD2kD2jtAniYfiJsKE",
  "key12": "32UbemJUTNDPwS7rc6zb5vBjdMiEUV3GoY4BM69izkmeuewCFAxXVKfE7W7v8qCCAU5w6gPvNBy4oi5duxv8CU6A",
  "key13": "shqMMXmDkhxsupKQLnik8u7fQ6ZWcHbfyn3GEpzQwnbzEpqkJg4unMJ2XJN1xnHEW22CrHrpTUMDatRqbBauwvi",
  "key14": "3kWdZcSxsdbKekHuAKc89YBwNqPGT7STrZJ4tde6utchJGt5vnZArFwejG3SW5mLqpAjP833GpVXW6KEi7Q4dG5c",
  "key15": "4xvUUrGvnAR6s8uq799oWibvVQ497kfcNkeDLsh3L31o98BT9XtzJm6btFQncqzxSZkT9VfDbQ9L8hhhQ2Nr8HRs",
  "key16": "3BwTaLJcgn7X8p1XHavRev4Eep4XshesgPCYqjcXiLfeppjExt4ZNxouBPJ8YdHQnwee6cAoLbqpBa1FhCNFT66p",
  "key17": "5n1MCHUUtjZ8TwCXSFcjGN3D3Cv5SvnCxPW2fiGCR9wKfyTphvPskAFxfudbAVWbhR3KSvRrY4amazm1FTizGjSi",
  "key18": "63zeWUDyoYj3sWh1VLyXovAyz9xUFQf7JATx8ZERapmmifsbW42MQZgc6ZdS5vFJ8FgsnvnUh4aXrWAR1fmFushx",
  "key19": "5pdCf65hPYLE68vrwe5EW7xtRjWGnb5zUp7LTgXFw55iDSiaQZsUubciESYRPcsk44zLCbwguYLUkh38tcAjK26b",
  "key20": "b4Ak6dwmLibG9SAN84Ukiswsj8TKsM3Nsm2dSY8jXJigdHo4seKx1X8wNe9hfcaTaRg1w3cykoxowRTUGm8oaEA",
  "key21": "5unqN6gNd6XucHXyLL45nG5YoiStYWCU9XkBynA9mngAb8AwRQ1cvdbW1DUfwsY3hq9p85ngwcwx6j7jYuAdyuGq",
  "key22": "5gv7i3ue7qFPYKKghm14STV8QTMqZU2K9RzJ6G9Kk8BjLugeGbJC2tT5oTRwRRF1HeFiNHUpEYxGAfAvPYmumpmv",
  "key23": "4ssZyatPdSUMx82KAEzUPoFSQeKjgVzu2hrHtXZ7k6Bm7ohgK9tNXbeLZm75718rQr1jU66do4mP1SAw2G7fdQus",
  "key24": "HJBqDnjurwmxTr2H2KRyuUsfWYTQ74RaQXK8jnYMVsBrh47Beuz4KUQzgsKw32NvtaizRhjNJgCQLA7goLZHcCo",
  "key25": "z1j3okwQxouTH27BhUuYPRe1Qe2Cmbm15kWvMhyNopCHkSgtKDTsKdxCNpBtasDcEatXirE5j69Lx7upRCSjAU2",
  "key26": "4gTmjxDjdZZogiD2wLKVPSzhHVrChEp8MQ8s6VJ8GP95HtbYegwfgFqNvfzsRBF9UiNRLGvnjVRgwuLfVefkyKbW",
  "key27": "23GMyC7fFGzESAtqfMfT8qPHkC1DXKWk7JFJnzF4bhP77pTG5pEFoQSvKt2dmM3T4FBstWvdX1YGR231uXwHRcE5",
  "key28": "5j1Qp4a567NTc2LQ69fSPYqABuWK9tZHpsLoZSoieNt7EKdAsGj9ydmJaWqAUf4xXrER4j6UDvcxLjsjAviNgNZ3",
  "key29": "rigWiMQ7hGLtqHoFUdrudEzhW8eSmr63NrZFgwjHiqiYHrveXTwpx5bUMnWPyA7f8PHyBqHALWEDMwCqF8J9nDF",
  "key30": "rz1s5nG7NxURoeHhWHbpoNK1ztgoKKgs2XRszoPWJKp6BLeuHTuLJb1gZL2sVzoJCBWtM8kcZnpvnHc63KqJMnN",
  "key31": "5JH3r5FKS5fcsLvF8XakRzdefUJGSdT7HoKY8VtVvAKmwjdwUdBwAYMT98wUKH59vcFCbw5WFoWQ7f2ZRLSwhqkk",
  "key32": "4DugPdk4FiuWSw3geXUS4VtdQtQiYJGjYcEuma5neyTNZju6g8pMPbEnWGz6uSUd8Tc4FzdtqT2cVprgf6TVcWha",
  "key33": "29NsFE4UK1ebwGkTM4X8WzgW6UnP1YMGnk1ANsznimnjDnHk24q8dx9vULEpqDhhjt7b6ReiSxUqcZyPus335u3X",
  "key34": "2GJLALYCU6QxHz52xbm19WKzxpuCDY52M2Ft9rvL9vzFhq4efxKAzYaGpmSHBS2gGBewgiqaJ3hv9fvfZj4mvpFS"
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
