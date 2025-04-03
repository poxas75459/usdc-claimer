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
    "5fPBorjr1nrdSWqDM1JhrYeWHrrW72SnDB2iDaY6xf3BarCEwfBTxkgotegKUrYwyocUXhJLhnAW8LggWAMHgm3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Yc4nRWPJTky7ZCvorV8HAEz4MDiJUpH71HJE9zFnkH4ofzuA5LtMRU2LkYYwPbL5XnzxKmJZZXGoZGf1BCPoY4",
  "key1": "EBsGwndWUYfheqXFh5RBSqCcW5YQACHdxNcDKTFz9JAG7Hz5a2KPGdoF32J1Puz3hoZyD7XkFyf83bb3RsJhqVN",
  "key2": "2e3dnq3BC9DszPDmASDuqwfGmQkQ1dyzfWx2pYWXouH1Bk955eHstWNamDVeZERQZGJpombe3mFgxWE6nebXtaya",
  "key3": "44rcKMNSAyP8XVa15ZC1HAYoxC1UdERwRY2HfDFwbxBhqLaZBidAjB4qRA7XxgYrPjHoa9DFYCbNJYjnkC368tTw",
  "key4": "3gC5aJwtkhPdLUUGqBiRAgLqrGV4xnD76BjBPtSNmN87K67MACkr3ycHnrE2aGdVFD5CpTpKuJiQwdRfj5S8VHXT",
  "key5": "4a7AD5YaWVEDWB9Gv7K7Cum6sSQTrNsX9erCAckEUUz3VHsyRhjfKw5kU2mtPEH4vSuX9t5QgaujattejVXYFF4K",
  "key6": "5miHtbC8xxwdEbXsbThFxscPdZhxP2YcfrxfJyRfhkwyr4HHwnAx6N2VSor8VvhVLsLxHJAvt855XRpfkZR2M8Y1",
  "key7": "N1zkFr9CYcy1bHoDrKRoHXUg9VP2cbxTkH1dVMj1WGBw2JojrTZP5XYVrrK3YBoFKG7ZuGCVV3LF643FcWWhEn9",
  "key8": "3pdFo2sP1ws9gMvVgJw1c9GdnA8fQPscVBUZz1DRZxjB1JAXBv6Ck3GBtnFeEuJbAPWEEtQGzShaENrNBwymrvVc",
  "key9": "3wBCw4SQ2a3ikHt138mhTYJ9AF2fvCRbStbZZ2nAyYF2xUq8ajyvdZkZWTFTifCQdGtdYfoMiSG72hvxZyqqhGnA",
  "key10": "2nJZLHrFkn1NyvoDQBNFa68ijaE12DGmqW5Yu9sfLasurfyEdGMHb7ew9mwRaj3wQun443Fya6fbL7ZosbkwmPdk",
  "key11": "izwiswUqaUdGWwBLVJyqxrnVFDCpYRT1UP4LNsBGjKmPUAUVeDQALcdM7yrF2JUR63d7Bxr1GCErr5gcLMGKq59",
  "key12": "3KsANvE1X7xgbSo5EXB8Btm5dZwFy2wj4kCL3Ni6cFcwtxAgCpVuP4hPnKWs1WSXSDBqtqi4hXKwCUroPZotfSdr",
  "key13": "3LJ1DXx5BDmUfAeTVccBM1CTBdhmnnoKAwhvw6PuR2dAJW1V3exPFsktGhZLxtL7RVSea281ci29MQqStGfC2Qu1",
  "key14": "4BrvQbR3v7ivpABMpufLn6zK3xx8Qsdvd6KKVfvxUYiJMacbRt5qhrce39TxSX2uakSUcziBTj7BYNY4Stzmq4wA",
  "key15": "52MtbwDQkQiLkx1TXweaw6UdBBve6u3QuB8QogVyUBRSphyPLbb86Rn2X12dChZuNWvafkwd9n9GsnuEPRD1SZXf",
  "key16": "2PhoATJ7q2v2vbchSD6nqoGNYdQYMJr7PQumkhyLvmfnkwKXahyUXkhD6EFkJWEjxQzTm3YGvBsQFShHferx1BKt",
  "key17": "1EUuTDMo1F7YUGzPNH2FNfDQ7p8wKRDHDJtJCHQgGF921w5Cyvejezgdy9s9tdykwg1ybwQriQu1n7TxtKC9wnb",
  "key18": "3tBWZsJQ2AK1bSYU8L1TVLwJaPSqihjgjyuCUyy7Z7HYapcjxwS3iLtfJ7xMG11Xurc8owPkktjWgTSK4SMCRBxv",
  "key19": "3Hy4tbD97wY5WXJsJJXq7RFHB8mnRZBkbTm5dXeLxQm6Jsbs6kgTU2Nui3RX3CwFQggGRitf5kGuR9CaG2DoTYuk",
  "key20": "VpgdYzGJX193Msw2t8GvZgHMnTfBAyLNpVyRVu7ZYrgWiPeku5wBfBiMo3qUJ7mdLqZjhEU8gNM52TDGpgBSvPG",
  "key21": "32ytNHZm9pRsU4hzHUbAvRF5W8xa6nc9SqgxfnkMYch5s1hjCz2pUWCZ56VsoJ4qAiPB9mw9r6RMF1sw4pvLXfpa",
  "key22": "3ypfYaVwFy2MGzVxoCUDnNVU7T77aKoEZpmNZUVs7Ah55qunmGe8CpxMFXBayzsoHJqv45veeqF2auxniGsBXutQ",
  "key23": "4EfCX7o9PQi5WaJYNJDysLCfKhEWip3DxVjywD4sKUzLKq499SZ58XxKhDtG4nMjuXNRrQbt37RCHwLKr5BJ8SHY",
  "key24": "26PcbF5B6dRi3nfR5KZfAQejEi2ZbAH4VkMjTpKf9GvJxKjSkkuqYinPTRwHMZKWbgzPMqp98ScLHQ3RNXzo6TDx",
  "key25": "2LkLFqdjnDbjD5ze9ahTu7syfV84HnSZSZd79kkR8xSLC3fy6gJW8awFR7WJk6koRuHVjTfEhFZNB4XNupzxN8hN",
  "key26": "4gY8Lp2yyMMTK1VcaJE7QYyurKHCBi6MVgVGod3u4uZptk3coYPQ18vcX2wM6GDKroVvRNUVafugodCaw4Cizyvp",
  "key27": "2f5QWwvQ4rHQtNNEqr14tVv2VeEkUutNCeYcCM1W6TzAhEoeh9r482tJ8piFcJwPVxu5Cm4U5exrWvv1Aodfp8Dp",
  "key28": "3TeF9esEi7YZxWoexdU1ScgH56erZVHb8gaw7CDis4Ys4jiixQWD5ZT8wPjj8zm2ZDh2b1c3gU1UWMaLp4d8oJ8f",
  "key29": "72AXvf7958wTtBMKtgnN56CouivYtCZABUyorSndkhxW4AHoCDrc2DHU7mZtEAjZS4EXeETyhvQoSMEcd8q1CZr",
  "key30": "Wsw8mnF8qPHYJWzR8NyhLSzNKkVjwp4nEFMHyXi8XCPvsiHUpn1ZikQ8d2EFuF8fWWRnixEVHLdDkAVb5b3og77",
  "key31": "3jqNt58Zbjq4pW84ZELUo8KnwKMFfnqWEumWVZgGS7Jci83ENXjty5ALSKbshkVi9eD6S7Gm6tnmMvtiALXGLuB2",
  "key32": "4hv4644X5KaSXMgRUmiXmStuWqRxEqx75d7ZxSSMTDEh3thKs4fCmNLMwH3aG1z7K1LpyzNLgGVRAjQFuHqW4JoM",
  "key33": "2oN7dRpfjQXF5yrkrPBzbse7GHGGAkeke5odhgA7cZ7EbDX8PGU2tF4PT2kTTPyZSMcGA6HuuGmFwDMTgSPTdYmy",
  "key34": "d7LgP6y3JcT2kLsN4B4SBTGQSR6VzwcHaVyp7LNekPadouGtFzVnjj6iDUyXxTHcWpcXFLPjc51gwPUjXcvHFgg",
  "key35": "4ahVU3yxJsonfjEWMW6U9SqTjBJ9cjUkrheAvsTt211haHrBKLXWpqaufogxbbZLyDCn1bA8xiHWJehrBZsNgLGt",
  "key36": "3AyFhX9aoQdjBRmFi8tFKXr1terAwupmShQaBNfR5yzoqUz4ZUFm9EJSx3WtfArpTftYd333NPhovpVwVKcZ2X4G",
  "key37": "3bPS1BqDmhTV7stZKrot8b6gQg2Me3ThJTWL1HNudNX4CxwkrYptZqy9Hym4SCjB6yThQF4QKNxfMZ28NKUxYiA7",
  "key38": "4q3Z82RdczMtGd5XSxLetrGP9SKLkDex6FfaPygPCnQD6u1Ak5RkR1XJQXAjHMdDpTPoCjWnE8wWbVfA3V2TLQrV"
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
