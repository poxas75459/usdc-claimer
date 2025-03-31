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
    "2Eax3QpRntLp3qtguQ73LvqjchXHidWEa89kH3eg65Ls534iFS67qrJR3egDsKjR6GFGkm4pzv6j7ddC8QbSRWR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFLsQUzTUbtkfP4wdAZ6PPhWnP4tPRjphBzCv8CzgkKMiPSXr5fnDkYhravYMcE1tDvUTBxhmpaZeVShFBMk8Hp",
  "key1": "5tupz7hMaYXijc5kbFvsUCbwqcj1sWixQkqpGUjfL6pdsaoWsaFLW1x7rQKwVcCksarUkhDmH9zvjBZB3MZLABbX",
  "key2": "5FWyCUc5TpVj7Sd2qf4gSKmQ8Vce2J3BGPHsWpFZjkeZEL1UukgRFEKo8xJ9GgdvpJVZaKXpYNXQSYGN3obZS8Eq",
  "key3": "2Etsw4Xj9evewAbNmd3ezyrTsH63z2gcUs1PLagbfocpo2HYWjWHrE3ncwvAU9umVrUUiezHBp7QrvNc3txbY9X8",
  "key4": "4qxVSRXR23Am6SFHdftkuBCXzRq1Xzzo9UsLEqGXgk4YWf972dRGseuv5TzLpE43NV7vCvo6nT2U8xp6xZXdkVMo",
  "key5": "2G9t5ms7tQDvy93inmjipsqy8Z9eTnH5s6dZMuTKWir3rQvP8XoG7VDP9mg1G91SQAx6XRuQnPT4vGY1BF87o2Vt",
  "key6": "5gehRNNh81bigUYgBEjzdRitCQPCUJqNaXg1rYgWaAnccAGqt8N6yhsGLP613hCkB4epgU7Pw42WtEnJxSDiPgeN",
  "key7": "3L7FivTRZ53yDfq3ndpiTZpozyebezFFbUrzknPmXJGAU1sJuurkqDVyxavMNhiy3VmaNmqtDGQymZMxxTJ93iHf",
  "key8": "3ircgLmT7yf6znH7jPweufRXWpEsAAv1kBoVY8WQmbisP1PZy82GEhobqJcKn9DNdDfbY71p4x71b7WRzfmxnS2e",
  "key9": "4zvHe8NhrTb6SfS6tuhg8XgbShf6EdcuAk1QP43iDPbuHpaxND2Ht4RGZ7oSKFXfX2pT8tyehKtBW9juNCTpP9jZ",
  "key10": "4W5GuSnsXxTBGTakxoa8QUp99V92sMonS7LLbofmZtY8Af3K3qkFZGAKczA8SVN6UD82K4bde2YgzN529KkLjeEm",
  "key11": "3sZcqSMDxno67eXGDEirbQsMp2duio6iC9SKgECWe12bfQYRaDHvBcZzowQEvNPbFQYC1APwAMf6v68kzd8hcEpP",
  "key12": "4Dg6wUX3G1r3mEmw24RJ6okrVLE7u4SQcppqPSgwhTNpYB5ux9Qqv1YQstE1Wir8GLoAFaYNTBJmeR5EBFWpiSK7",
  "key13": "4kvRrfRzBdiQFZiUAPZHedbGYfi43J8wCoZF4m2doN59N9mSzsDpnvWr6HKpekJrLSAFcRFenBD5dcFKymdK7oR6",
  "key14": "2tK5Gm7QxXFwRi3xHxXPfKm5GmDWrk4ZRErt691YxqNxJDZyzbvDySAeeQn3NjK7Y4yd8gcidMM899kdWQ2HPJAx",
  "key15": "2wAi1TN99tZ9FhkawY2ek23APQYzpqbpJBWk2YYVRHP3xu1bSurENSRmGvBDwjZ1Xq9JEfX73FtG5JAP28Pp64my",
  "key16": "34GxgQG6U7AMB8MQFeiMti48taCVSg1w4C9uNiJWPijgsdd9CFvPeVQht7ELbBcuHcdXawuX5utsf5rBEmznWrdD",
  "key17": "3RmHAhnHSVdCYSch6VwTL2BG4Nx2px8YMPc3xhYPfTHk9EK9DJRHuAiNVXgoHy87W1MAXxmbYwsbke6rZgC96U5",
  "key18": "NMnpYssh2UbRtKaDAqjGE4YrGjRC4BDTNn4q7BQ4Mg1P9o1vPbTHnxqpg5P5GENudnxPjRsPnpZZXhtW18PUo1m",
  "key19": "5uYNuZRtw548rcJMjKpwj5QsMDy3gjQXT5cXidTy1LXKiCeEfkSxonktk1QPCqDXcYXo5muA8gX6B7yJtYeyTnFf",
  "key20": "3vWsQd2XzwuECjnswPKU5FHYwP4BkW5diyYafmwTeVbfMTog3zdvDj5Cfsaa75gSRqCC6MZSRRn89pReW6vN2JQX",
  "key21": "4w8Ct2TWYUsFBW7vvpD5ci3BKRQzbJTEqtrGUmxLAh2HZ4deDAEotVSqiGpKigJykam6F8TLeoXAzNJCa7a4N2xb",
  "key22": "5GfXJ65Vmjwa8GTH2rYMsVPbfPHn5dCDR92fAMg6dJQiabv2MGpHYbhvXSx8sMJXYUeStUKEvwiHDrTZmMH3qeSe",
  "key23": "2yGcdDnuUeGEqMi3hU3J8JSfA2hnQySzwKkuTzy33dPz5LJgMQyMXj9XvTwSz5t7rMtsMtxWUtvUyTFEQMZUHWRS",
  "key24": "YZyuUMDJzNGH6n8XjGrpwc5LGSx14HQnr3hc4VjoLoqzhWDgGQzMK19im2ae9u25AmJeq9W3qCdZheodv1gcDy1",
  "key25": "357rztUoXFJNGaREjGnDbaEqhR1LMeL7eoe2zXyiDr96NboXXDL9qEDh9xQnW3g9i32K2ckEDWHYzBtJvjDy8LsF",
  "key26": "5vnD7R5vhAZtxyKmHEqGgCpBuxK4zRo1bmJpNqsaRheNTR84knjKBKGwwXMNwn1FsM16LUEWPVtaYMjuHtPQeLAK",
  "key27": "H77mw5H4sVv9gMpLbftZj2AGYHCZX6fy4JXkaKfhLGeUb1UM41PWG7oyk7hBKBPNxzU7jioRgRuvmX9gT95XLA3",
  "key28": "mapucCGh2T4QeA6uuM9qNKdFaA6npCMAQfE3rJ2ycvgW7A1ovLiLT46TemwDTfcKkLsugzchcrdEBghTW9r2syL",
  "key29": "4mXoDRXCy9qkSPdq7mgAqVWveNkNLG2o7TBqTWpWy55VZdg6vaWftpji9CG5dm73qvA8hieygKkaxvHjYSRdxKwH",
  "key30": "3wYdkujALcG9Bz7zzgh5Js8eRpt8cbUPAByvtjcBkm9tL1NDTnoViVT6Sp5SPZg9sKpWB6fpmL3yxTQhTd1THTYj",
  "key31": "5RoD3vwsp2KYXWBYQusv6xjJoQncqf4n7ED7C25DAgXbWPba1tfDDQJHTye4V2XNYHCDcP6vtgURZtYCYq9D4EcE",
  "key32": "3BwsVHnLHUanb8bLERS7PAmbzfHuUWFoLFk1CVBHQ3r9ov5QdLtx4suv9bUGpwXRwenSxzMrJTpMtaXnjDnX7TUP",
  "key33": "4K3BfprJrYsvjJmJrJDwpp9iVHBGRLG28R8f4Vi6BhwnbPc9xDk9FfE362ckee34JVCaWF7eSKRTEvxqJ4sfLU3j",
  "key34": "3mb4FK7kVpZjuyiXXf8t2L32grV65NjxvXgk4K8UAji1wivG6yivuXY6UDxP6hxGuMQejg8JDwvFRNQYx6R2tEtD",
  "key35": "4MrHpxxtAHXQzs2Uke3THMPTpkDWCoZcxB4CixuQYxvPGjnzL2WYzjVxSdBjrSpUBqwNQF99ijnHxccaj6G6ysFb",
  "key36": "4ucMAH1fWy4jignriAC8HxPq6oJKNhD8BEjZaicoytpq72xy3D3fGrufgmHBddHXzNGd91CMDUiZ7EX8i6RBFCB",
  "key37": "5haT3zsHKhAkPrt8e5rskRB68ttSPALcxZBh1b3EHXp5W3r5SmmSn72YKSb8Jrng4SLsFA8U1KNPz4eamdQQWL1w",
  "key38": "47gMv9gpMvcHwSjPmsqTKs2DwLfRhggdsyhUwytY3zaLVuX5TTY2Gtr5jhWHYGCYeBgs3pXfE2a37utkyLVDpXva",
  "key39": "5Nu7Q8YKMo6zuda4Z2MWwLC8L3g1NofCJD6Sdqweoe9XPU4W9Lzna2gWHQkxSG9avJdMHpQrLSQd6Fus1R4t17gj",
  "key40": "4cXwxmUg6qZNnMXpbPwZ49W5D4p3ZEqqhrxd2WpiM9dqK6c3A6GXhd8iirrhtzpR7FZaD1RhP1CW1QV9nfP46qMJ",
  "key41": "5MvruQapoVosVPhkVL1CVbztfKKXabj1UgZV9yuKh5TabrPF92EA2QcU9PCzZaNjVKgRpPwLzrR7zHzoRP8j7oEX",
  "key42": "5uGwxk25HzH3ZECTsM4FTX8GeQYiqE42Uc45xg4TQLP2WRGUaT8v917PkgoLcCAVs4eYYbgfsWQjn9LhgxdNBkVm"
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
