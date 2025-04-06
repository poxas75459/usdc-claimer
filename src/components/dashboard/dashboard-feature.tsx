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
    "5kGMArRpNjanEsm1FrbFPDVevMjbVWBpdHjoQoC1FaiUP2tqhf115rgPVBZuAVgPLbTNJFLqYMAWDEZCXtn4D7wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iW5gEs6zC81c8VsFGC79qtVBg6yxagwGLo7PiwB9GNXL2zcweqggA5B3VNfb6k8g7SQBwD3Txhp8vTQyihs9yeq",
  "key1": "9C2MdNDDpx4SNdFxA4wyg52jogeTPvNe9atdXH8YpiPNansiFfecpYvtHDUisRGQuXqbe23ymQq8x2wGQEfHdwu",
  "key2": "c1kp4Z4NUEa66daj9VehHvBVtGEQqmEytunkh5warbBCefr6yzE1eSqb2CaAJ1FQeGenq3QP3w5A9Z57KX4qzSx",
  "key3": "rdhMw6XU6dfnVHwBh3c5pgzVDLJcRWejwDcLxKT8u9cxJUDCg64bzKf5v6UF7vMkMU134dfBiDAL97h7JLpsTBx",
  "key4": "54LTyF7Quj3kNkG72csoop9A36XKj94pRPDqpMS6fTGsCTpM3hvxF6m7Rfd48VgYvJdByTyxHmL4ruPocrVrhAVt",
  "key5": "3PBMnH5KumtQr5kWSj8SNcvAS3c2AH3rb4WyVK5NNhEugZCdpcArTyngdfTGH2EUfSkobYvDkdrWH9wshQ3nZ9JY",
  "key6": "5YXSZuKWNrKbxY23vxZU5s8WPauQhkinsrh3gGQFooqSPxx2ddFSQhkwLFyddNYLxr9AZEkoyYF6osAS76XcFae9",
  "key7": "2xnvQrtdWv3HJAq5xiaTvmUCQJg1tWQ6gEKgRmgs1xvHRHeH9gyH6tDj5gHwhux7fhjfvubRP7GV8MuPyvZD93B5",
  "key8": "2rnorr2jYn7UAnmQMxr1vBzkLqXi3w7aGG4qd5oVSQFC2hLfuZjQQAqn5A9ou3b5iXX1z7dYFrYaUUiR83ozLDvP",
  "key9": "5UYQBRU1PdvxhY64tHJS6YDVCE3NfiE4qYHi7mWQ9jcem52xK5yqfaurkLU4pnbufudbE5UFzdxHKxuZCqbNDuGq",
  "key10": "4JVkegtSZ98CBVS2RKSebuYqd6KRzFYGdCyWxPAyrPPENEnkeYUTg4DFRWD1Xc3v3xQRCz8v7gAj9EwEGFYMwjbW",
  "key11": "3Mdji9MAuwcqJWipziA9qs3YrGvameCbbKTZXWemYYp4TY7fkEaGRaguhhZyrpiGZqMhfJQ7DBCKNHG5tweJprNP",
  "key12": "5RBQxP8ufNaSauNekNdTjnQjxzHAPkpPfeX33HmBZ4faxGCJoLE2VevkxM85yNmH6hyC4ptxXd3u4XBdLP4D4B1H",
  "key13": "4i8U63yaTHdsMj49Tx4RWCg26iSxRumEMtKBk4LKywx6eerQwfUkvE5gL926w1o2F3Drs6Ytvv2A6m5YT6tkgj14",
  "key14": "4HZYEfoY8JUMvH3ouecuXXdeSGQ8JobEa7Ld6M7nC4GRPsanJH6wxTsHJNrBPDTRTJ3hBC8sAwGQfKijPEm3MsNe",
  "key15": "5DB2PXUteTHVdEu241HqwcLhRNkMTdroDi64ueAXZymT6k4tUJMwtUXuMkKZFCWiRwzZxnMKHKMXFYimxhknJvqT",
  "key16": "QUxbdY9bNtcL82g22o95NXj1CEMqPsuhUwVPqoBUr8fiJTru1gX1swspuHhb65bazeUTAtSruoK3LtVEG8VTQ2N",
  "key17": "4JrBGZfT5VbCBR5o23CajE2JoJ9VHg1NKr1KjVU5y6FTqxGNitrxRzp5y9AHv9hQHRRnak9eeS6iheARKmp64qsH",
  "key18": "6kbwtzaVqcxRe7SJwj2avZsXKN6e7AcVL1eMJhKN6TbxrD7S5FG4VPWnQceUTSU4QVqvksGrpGkQyki5RLU5dbG",
  "key19": "44AVciBxNeiRdr4Rktyd3PE1CLMFpM6q3hYHzBd7DFSbhQ2GSmihLHG2tXTTm83KKaWEAyNoZAhxHz2KH6EX6Z1e",
  "key20": "5n6wZfkDFzz5YiThVYYXBLZB6mGfedQnkzGgAFbfEnbEgjtLf4HFT6sXnvDQtnsHt9uJ8sJjsBkiRVfZoRQM7nvx",
  "key21": "5iXmYKzVkN2aELfKommuzPMdF2fv5am1HKtcohzyFHtW3ySUmFLzMesAbSzd9bx6uQiNQWG2WD8pr6EE1JgmSqWj",
  "key22": "4jeUdrbNpb6DLQRg7RhLYgdfPTJ1npr1L1beMaxoeTTbjwg7GZXrmUukN4YgjS9FJDmQZrXJuG4Qsb1i5ieUT8if",
  "key23": "QjL2wb7bt74wXA3eXMrcQ2qMYw48MX5vCn8R739ZCN6sUzjvFkTSRwBetUfkaGSVnsPMtqEruzstQiG1FmC42GJ",
  "key24": "3vfhvUNM5NacdFxCUFwyicPnXfWMW6qqbFooYAKCjnwNoaJGqRezXQHTKWWVucJ4StQgg2xTyq5oGFtH8oywogXK",
  "key25": "3VHsMAFSeuYztpGLSeWzj7bJrz5aygeo2wMqJ46aYwve8fRN71mLhu2jUDNsQZpFukt8kSTgFLDQQfxCqtKsxkRn",
  "key26": "21PRWKm1PGfU7qZN61uqknbf8tePLkb6TwbVJfiBwE2LpA3n8HFRwKje2Hr7K8aXAxCkKEk1scqNiuE36ouuG4tX",
  "key27": "2F6FZHq9qpMoDv9RozayDGkau2CVvJaZHBzvMmfsSHPrnzjbKM6sNFd5CTS2jrykhzPMyi9C3dHNNniLADTgb2e3",
  "key28": "4MZLnX6uzV6AvgNLpsvR1Un2SWScb7fys2Sgz21Xmy5c3d7D42F5hZFPEF58o9MqJXSrdaytizdXboRxxJi89ynJ",
  "key29": "ajvwMUAMedJvT1GMV1yfwDNeq9oRZJeDJtpEW6gYJwhAUBfi2bxiS3zxBhN41XSoyUnwkAbm2uqaTNC3rCNQLBP",
  "key30": "4PNxFfXNhAJzHwK2ud8DY5XtqFQAh4xAXNaCLwQ6CZoc5Bd5Sx4BGzFmN3uRMJLL15AVbuC4PY1XdS1MevC3tFZe",
  "key31": "65nueF78CSNE1Qb59gDGgGMQDsszEEf57KKVqAgmoGdaVGh1e5jZ28Gev8hDai1tPfB1mtRVHvRvBCyJvniPQhmi",
  "key32": "5K2bccJtdtXXNRBPnDtfggucMDSfSQpGhny7gUjWea7hjsYk69xizr2AGtTpsW9527y6TnpWNrjw4WHpCtaoJzw3",
  "key33": "4hivr9gCVwzUgUE4rK6PzfsrokripgRvx3pJLUd3YcNBHjYScyvp7EV1fKqiS4b2FXSH5UpiPXk3x4ABysmSWuUk",
  "key34": "5p1eZXSpHW9neGeUT7nBxRt2SebYVC7s99kprfTeFLBB2n7oMgC8kEPYipW5tEiGenrMPh8Cesge72RAUNHU3K92",
  "key35": "4W96RBdtQmK4MMnZcdKB7Xfh9d7AuLFmQ2DEZ56QcBj4fjobhWm4EpV6wSTMjCzKNFEV38ioa3of7ioRxNTR83t7",
  "key36": "5q1bjWBbeh58GaHUnzq8Z55HYqx5wdVUGRo2mNdSmYp2bKCcBSFibqzKePK7R4S58t8tUGMXyKobKeL3LzVpUPak",
  "key37": "5TUaWNHbjgzX7fP4SdjkLjQJtRR5cjzthdHgnzTkn3HirHNkWRgRBKkzTpHyt9vmhQ7a8DB9EgSCGunGsXfV8y7e",
  "key38": "2xZM47G2ywobbZpFXRQE6PMusf7hSWu99qfHPfbaFTKm2H5z1qQHEv6Prwf8UmUWVjBsU1BKUPTpnTwXBFc2hhWE",
  "key39": "3Poj32XiN2n1MsGjzhQCbhNN936xHe3fUn9V7g9sYLGxJoXBary2JkiadHdDaGezhx4dmdZNRjSnoMRsg9wCiswA",
  "key40": "35WGD9TZGDqkYBWqvWcgbXi2jntgeL4MpPSfAExjEES89rpZLqfMJounLqCP3iosNQWojyoeAcaBeC86VpirsQmM",
  "key41": "4EERfhFEam35Nr5L35cStsagGa6aeJYJj6BYY9GqoTxTuzJZMNqNMdNNwmtdB94ag7EQFx9iMCUukDigU6pyvTpN",
  "key42": "5jWAqYtT9UCvYjcSex58W1JCfs1AGNt9To8w2MJ4UsSb8EJiWdLreXm3gEqZTMqLpYzeYCtpEpaEpGHKH5cTeNxq",
  "key43": "5b2PR94jNt8KwT9kFgHTTsjzahRsYTXtxstxqKESwREXvdH5YKCiST4XAvUsGaF2CtaW7FB3k7vQehVUVfvZCmJf",
  "key44": "5fjr6USejMZVC9SVsgdc1CUPyuDJfMdrU5HWLaMnqotir9iAuemvpaxkk2XVrxS1pHhU2Fan8QcXEmBLhEqXD8ZD",
  "key45": "3UF3ENJT2VWRfvsMV75BXbRJNvZ9Xb81WULrBZUKbJbWJ2Mo5HpzALKfTnNCnz5Y84kR7boYa4CEg1Rfg3Tu8iVw"
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
