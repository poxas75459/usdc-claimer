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
    "56N3yQ2wF2Lkgye1H2k5WvGBrxF7KGbxoPgpgNTxbmjUN3apKB7o29VmsBsax8LhNWjbnFJ8h5JtEZqw9yy2Ae59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbjxBDCVtBSq9hsyjFR7oXW7TY5R4TK21zyz7uo3NeoRduAnqtVbdCNQ5veGfqnk58ZsFX51JZ4ka5S8YH7kDz7",
  "key1": "3jDJWyNa1868W4MybG96yZJAYDi3kFhiKM3L6LCDNp1tg63RoaRPZT4Yiy6FtKwT49iN8owkfSEyoRZwAiVqXstg",
  "key2": "rRviPVYKz6Eb31Rynm7iKJXZMsgmiM7A7kcQozZKL8DwaZE7MHJ5ZAeU4n1nntyrUsV87QV2SASwejMoE2kSXAH",
  "key3": "2ueWp46ThnNoAymmYw2vgDqZXDHpRiRgYV55ocrQVVsbCD87hHnDohCqA5ZXCPAZnd9VrDnBL9LHk2JKsLGiqGBo",
  "key4": "rv1CQD7SKHdBBb486sgWk9aiHzMaxiR4DXjsVknumdn9wgNQAd87TY9WnGHG9YnKq5b7CJkQgv73ZL3f1GE5TDR",
  "key5": "gU1euQQo9g5skyvyfuxDBaFQP8XcyMwwSqQxjJbTHQq2Gkf5KWBpTreth9bhXxXwZGXCagtsQ7BWVSU67vaKbw7",
  "key6": "4Tuh8xc9FPrC2A9hnTEtvU54DQdULQNi3uYW92UyktfXw7fEr6VDEzaLYg6zpfGMqxzZcMuGefKRT4w9B6sE3yNQ",
  "key7": "2HJkhUVpEzFyfNmmqokQP7J4ByXzTEMLeKS9z7TEguPqUEdEnoFRMjezMXFKMwNaPdrdVy7LREEwPmJUQzMqYWGN",
  "key8": "1ZNSySbeYdKXdBiJJoaCUWFsatzy42PjEs3C9HpLvtif5TD232rTWh86AZw9kT2QQ1kZ3m5hB8MQrhiwVsSWc3m",
  "key9": "2Wj9vx9Dk3HhDBpGJGdU9Zm3c7NEj4QPBKa2gro7vbwVcx9E1nDLKhW6yWkWEsWciMBzbwk1jJScoj7Z6grHe8yG",
  "key10": "AEG8qoQNFNPst9FSyNmSRnttcJDdceugyFVdZqGDAGeyyTVoMMkezEdVQDt8fMAwySr82hopL21ANqQkLHmePu7",
  "key11": "J54Qtm5egJs5VWM9psuec1HQw4zHVwWBUNQ6FiqD3aLbwW2tzTHwcpfrtxyZYoEMcyGpf738swwgRtW1QujmdG7",
  "key12": "25cAdwpVqPb8EjEiZSkG1gBuiRPL8cjGfDoVWgsFUwZJxWq3e5AVRmbWnsK6fX4TsookPudqMPA2mXM1kyHi2goc",
  "key13": "5NJPdDChjtmLA9SSHwca1iKbQKLP21jB5an9ss4mC4ARu579cuAtYsis7BWEtbE2uiQ43TsFygLPvSVdfGNLYo2x",
  "key14": "54iujWPDeuRYmPrrPC9ChdtjxWDTNjMe3MeeeXY8PHQvnxoqxiAMgdbqq32gXHr8rCKwSN4PCY4Go9Fm5ZSXCBF9",
  "key15": "183zS9tppkC571pLCA3gK8aq6o6damZGWDbdiNTPcsfB5yVDifXCQc3d8HvebqcxkSDQS4L5apj6o34EcNCciac",
  "key16": "4RrUhfGLj5x6xQTzVJwZaMW1pVfbUMJSjLXMdxZkRexAWBwNfU4BxyTnE48LqkaQc5BGSJX3xHWD83At4owHTAm7",
  "key17": "542D851DEcztXUk3DDh6YKt81Tb4RvukwtrNvVLSfGZZU3n8ZxGEU48Dgp4Y763HjHLfFQ3bEKaj1WqaU9N8pCPi",
  "key18": "3mbV2yoAER5qVFj22TUvRWWhbwqM3bULv3i5VDndZZjJZ6k8j16yPUfEkcAoSdy4Y2NFPEhRj5g1DXzsV2yGCRTF",
  "key19": "3v4D3usnxx848rQKgzw86j6byMeBBgJNacbR5q54YmzyTTZonBYF7xEUGGrS23qzdZLUkjBqw5UBWrjfpb3HYuyg",
  "key20": "4FfNnAfQyDjhvdYtn4rMK2Vot6fjq2f9LNYZbfz1BDy36KwgAA5BUwNwcSPEG6o8ofiQHRp84HWJJWmWmfKZHZey",
  "key21": "2wCrgWpsnBd3Uc291mLifHsGts9pYxxttNBHDLvMKUW1r7qaPgxmqoytrw6Zxsd8gMUSBZzPFqbK2wQTaods64Cg",
  "key22": "FkbTYWWkiE4toU13juQh4M8mS2A6ayUVgSRva7fYbeTxXsCznnqE4LQs6vg8pzEUvhtS4YMTXXqV92oRj6FycEN",
  "key23": "3JoVdQA9HsuLWdHvUPiELY5tWpXt8SC2suKBq3GLuwVN9c5JDMeJpExd5JbSEZtAqDSH4M6ZQWhnQfmBCkeqL4sD",
  "key24": "2DNGBPoSXSvukyiTLuDpYyC3nVfTDkTphQ6QMmhvv7hhUvQgiZdPiGm7CSQ6YEv7fqDA4RvJBfiUeGy15iiYQxtf",
  "key25": "4B9uoBNvq1R1tdPZQ6zWB47uMidrFQRmn6z3Eip8qL5ERmPLtNoQa1YiNmrd1ekq3eHRjk8Gvzr68YM9rJwA1zdH",
  "key26": "46XPn988yJx5tKEe95sJj721deHSZfm9WQmKLATdEhFDXYd9UR9gV4TMJZtaUb3ogQ8jQ68jpZMvbucVVGetCPXy",
  "key27": "27j5n1ATaU5sZxeN7YVC4qeJdiGiQZmhXrveojqRrGBzvE98iNRFweRLVsSNCa12eG9X27UdruuysDpDw7bFhtJF",
  "key28": "3Mb1QXgg5AFBCaSbEdtYf6rq5kRbeLJbqsmBiGjZrW9iJ6jGKKvP65Bviu93w38MTgawfk5R1zPdbFCkKTg2n7Tg",
  "key29": "5W2FKokRuLipYgKAAiCUCHZHVCh9VhjEDf99YnJ2wSfTtHQw1ZgXWS9QnxoFUN7t8ba2YJd3RVtyQA9LzxBZ6e2g",
  "key30": "49sagi3UHTsy36MuGGrJgoUpTqMdnRdBL62CsyYr3AjAonXRN7PFVC5Zs6HqyfkUKgnb3inwjhqSof6G24REWktU",
  "key31": "5SxrZuj4pAbWwnw2XsrqoVTd8jc2NUmPufUotfvBShAK9AdTTg192mzT3Z2DcZNfWgBEyJZVdn3R3a1ymGJE9Xbv",
  "key32": "2knkkXaCVo8qy3eciNnpykx25TNEJKJBZvmBANcL4Hy6XUTq9MoKpMzVemg41j2gtDZtG66ngWJH26JKaQmnehGo",
  "key33": "34nFbNuq5T5DBtjMZFVxybrQiLPmhfrZtxoemnFDHG9tNrxkANZeDZPZFv7podD9dZWSnQyxiiza2QuNg7613TYo",
  "key34": "6FKWvcM9NFfSGMsDxWN94AuxT5KWC4dAa5pKqa7SPuqy3EEzD8BFKz5NtMF8QeG2VGQ9xmiK8ikneFQrfoEGvLj",
  "key35": "3gsj9RhgCbgoSSZUktni5h8Qhg6TJgaYrHDvMNnFKzokSnHj5882wWFAPJBWbWr5d3erJdVoq3PcDLLMeXj5HPCj",
  "key36": "31HvHPtf8BZZwRaAga6cADtcppGyryMSvZKdxJQDfqxtFGfAwMqsoLooPtkC4ZFtM2VaFU8tyzTA8epXhVgJAXH4"
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
