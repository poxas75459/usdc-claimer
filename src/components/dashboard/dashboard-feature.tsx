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
    "4sjFwDfYVJaYMqotUENxBNjWyEUiofS9dC3xUgHHDqASrCcPum7bBgxFZB16t3FQ9nBDYVPWbwc8CFCyn4YwSXqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TznnofPNbE7pNHHZpaguuDyr41fxgmXzqtGTxFvb6oR3CY8p3EckvrJUpZzSxQ8F4mW4CYJWukngD5ZuwuyG3JV",
  "key1": "rUDdh3NprT6WVvtkSFTruuAmqbc6LzXEKX4JsYdsf8yhduvPRC7brQYwotJkxtwvvRRs4RadG32gCHP6ksdADam",
  "key2": "25kRgq2YjWQTGSSySzMeEJ2JsKnbgcuQYevzCQSnvKm1Vq3wvWts9Q5GkEydQ9QYhpFwEoJs4A2iRTqV5uZ52u8F",
  "key3": "3J2a5DdXYmQkeWwmT1tTuksAtgikCkYcRjEpy9ACPJtUk45aAeNSaaZ2sJrByuCBwkL2RwfiW44xfChvW9gPxZ2h",
  "key4": "aq2a8fcVV9vQukoEd5LUthrdDFC9KdLB1XN2AdaCZv2H5fwfzBC2mkCN52tFe73KwbSihfexLP5xqvneFPsHH4G",
  "key5": "5hMD8vjjKGDa1gVY1ibGqmauqHvBTe3zhcSud75mjbzR2Y3W5TSpUPRZvV9nRPm2XaMSytvz4dj5F3F1B4RmJuGf",
  "key6": "2oDKsgfVrfaA5Wgv6zHAxJRwKjngeuuk4p21r3spvS6YsD9AXJ2vS2Hgg8C8RC4nX8QGaBZy5DLko2dUNTY6Xrf7",
  "key7": "3Ph7MfeBuKvZPPj47Cy9LYVtusGpStiKGtTdagBHxuCsXQScy4s65NQTy6jdWdbeZpffHLUqEzaoNar32dZpgNUv",
  "key8": "2yjxa8VjT7WeERUHMpBvbuy4ZDorzUGsgTp8WJXbErhUhtXGCPSwy3KvDFV34Pv1qDRhGNxV5pgPgeWzFDTnUrWU",
  "key9": "4mExJXHQ4LbmiV1Q85afQrg11bqURiT7s6WDZS7NEsztPuZVGiEGxYNYCMnbHN8HS2xxZPi7bPBgxRcDoqLyudEN",
  "key10": "5XTLn1rXEk9CP6CRSRJ7Nkf2CiF11HewrZyNLuNX6MRrUBJExWZor9vAaHyJwUeLaGoC2KktJdawqGkMbxZwSkU9",
  "key11": "sdKCZFi4mZLqkQFsb59oaRHh4ayieqQFartB1kA4yoMSTgKrWhSh7yuHHhaydkhL6w2B2oAjaHGQ2z5up4hDcvC",
  "key12": "4jxiPM7tg2NKWiBACig1HbF6LD2Z4WyEBPvuTXai5ybRJwVGn9tKsZGrzq5zWCorK6W7wsFXY72doWtiN2dKjq7P",
  "key13": "rj925Kb7b84Knw7NRFiuvUY9apqazS9uDWyH5cHT3V2R7vf3hLJUKVv8uZpkMZJsnoo5524T51qjqLmJHoJ795U",
  "key14": "2qyXMZt44hiH9gUvtpL2TC951PALWZ7AST1U33QBXd5aYX8Z7PYEek2XFoqCfSrwQmS8WY4yL3owcVPqGf4MMeph",
  "key15": "2BhzA1h6fPMjYq8TSBPSwt8zs8UTTJYRzMF8bf7ZtvAXko3ajjbk3rNEjqez3NAxYdNKNcbxmHmk35R4vgSsnhha",
  "key16": "5WQkWghzngzKuAYqDPvPppwKhj66SRVRowNrMkj8rwCDpeB1Ppxk73t6JAevvQtCGDjp8u8vwbh1wunMAEyo15R4",
  "key17": "2F4yAYBjER6SVtre3pSA4DpTUATpPjJDfJu3wbU2uQsnJsQJCQABwES7DJQCzSU1ZK9QQRCdFp9xP33Vi56QL2DD",
  "key18": "5p79kZv9z6wpkrMXxy85bo1boHqrMEnrhAA1ajaUZDzEvPfCmUM1QxQgg3T5FH1oz9JCUrdutsLm5hJV5AGCBvrG",
  "key19": "5DETxX4QeJPrfM6J9T6b7ZuauywpVh3LA3UCDqsKBf8BNACFACW4byzXTmPqkqptGvrAUHGNMBMzNFx7uVjPZ6L1",
  "key20": "3A8M4oA4f56zds7P8RsuzXyALNxNspdLnrEkhgZhHzE3oU88sPYXipTDUvvdCNCDYk14vFTLrp7Fm4HEYyyrsu9X",
  "key21": "2Myv8cz136kVYgFLEQRhNYiQE5ar7ZWb7QQmdj22GSaMKMTQ1jwczDaST7UUnEtW2yGRa35rF2B5xWLYEm6Dcy2",
  "key22": "5wyfHBcvaT7qCfoBohTV7SqL1ZND4mu2jSLGhj1ZqkEo7JfnSabvoWcAxG1HhWN9wHiKfd3bsW8kQtMH8eRx2Eas",
  "key23": "HvnMUmibgp77rdLzEKhcNE2zLAEFdQTdZDwaAZ4HkUHtg6jaWXp7b1QkM6ysqsvfoSrQgENro8HUP51CDY2bDLg",
  "key24": "5xUHjG9gMSoB9DYergz5a5C7Fs3U7Ygu7qjoKUVSDU5dG3NENDss2kJ7KLKZhQEyKHdgB31HCJ9nrdUsrXDt22S1",
  "key25": "2S6TrrfiV1DCZXVHVHHUPcPzWY9bgh4xuTsQhzcsrMoKiFf1tajSYEz8jUcNwc4owrtup22Qi95PefPJMBigJag1",
  "key26": "3jPepidGy26rYHxPsvat1MH7sWmMGrT42BAS93jtTfYTsff6JXi4Yw2wsxrxh73D9icKjFDuKXEhTpw7Gm1DAQff",
  "key27": "3Uf2PfLD9oie21DF2p2jKF2cJRBDS28dguqNTceL75UzWi1LTk77EvS1j1Y2NEHRThLECRvc6aBa9AxCq9FHc3DY",
  "key28": "3WursLN6Q9V8TgdbKaG2k5kqee2RqtWxojhnTXq8TCxGGnHwzdYZ7msPEr4JjGKH7aLDuWGN9c5omK4zg5eD6rA5",
  "key29": "2YHYG9gpV6eu6wVfPBWD7mFvSa7pvfV7C6GeCF7cGezCTaKD814gqPQaBuCakJC5YigvnFd1KQ9j1mYwTW7JXEA3",
  "key30": "2zcsZZHP9XLQEx7gBE7oTELxsSFq7nYkvi3pbznVBSVtXfq289GKPZh5x4A6qyiKbUMKoP8Wt2qa5GammjLgG2sw",
  "key31": "5WWcj7VruJ6yXmAMw55A8QH6AvYbhJt1xtLehht5MnrRPBhqJHMDNASf2Rp5TWfQUPupJNvrzWnYWEoDU4zBUJpV",
  "key32": "J58rnKnwsULEn7Uj8UHzLzvoTDEUfromyQmMaVmhrFzRRLW4hg6A7sNhLLS9r6c6oxbBdRmfodZbqRBbkLSswwj",
  "key33": "dyiWpjR6DhcT8PNDMoQng1LV5uniNR5tBCTDuQH9ywQqZAsvia6pkEd5nbbpe5CAYPyEtNTwZmririHAiBTDNwV",
  "key34": "4CFrvvEwTgMU91HQUdPauQNHwRK1oq4XdHDpbWE3n34Enq7Cfdhv5NKawe1P52gHnjaYpWP2SbHvM3hQHaZtAgzp",
  "key35": "25n5zYxJdT9XPr15xBpr4AvcMp7b6qiJBRf3bcjqfyLwGKiy9yyBW1NHaGTBYiXEdu9QTJnNdQngvEFkeJkWwBnv",
  "key36": "5mNh8NpFNsNmE9kQAHwMa9RCd7NDwNDU6mcEAU7AUSF2TgNh1uGaDbvqqEKb3FG4ZYZn4X9C3gNUSyDChPNWjHwR",
  "key37": "YKnRY4dhEw4J6s4X1V9LAugK6ciorbe7wmRih3jLfoxxeTBvqaN9DnusCUYX32PVaQWeGepAruuag14E2hCGtx4",
  "key38": "24etgNpJqg8bYozT3QFe8fnMz98FF5UiCCXPpS6ptwJW4DZnYPc6dHKEqPWVndjjXXvvrEFWgKdAZCVNvSMLDko1",
  "key39": "36CbkqGctjaSzz2tpF8DaXqitzdd3SF5bjZBEb7xVhLGzgEhzzfVE2rkfXLnhmnFoUHyKRVEFoxzpcNYzFeQ5F1e"
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
