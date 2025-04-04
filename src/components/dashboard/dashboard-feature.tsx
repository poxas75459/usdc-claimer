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
    "4D7kBRn39Gj7AfAC1om9QMWdYAvdzDoLuhMuw3B5gMBSY6fLa1QBcS9F93sqFk2qDRv9g8ifvwHEKZ243fi9Mjj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfMLXo4BaZZuQguvphzEPHsxR4KsdAEtojr7QgX3mvRri5t1c2gQ4P45ozFdTD5Yxx7ShBdVrdoF934SF7oGX8J",
  "key1": "4bsDpgrAWqLsod4YaEBduqooS8nPeoevCnyer3JzXfSWxzZ2v4WsSdzSLpmj7bWxzHN3Wy1cUUww9TyQeK9r53sd",
  "key2": "5sXGnS5vPS2n7ZBXimEye3MEX4F6HEb5skxW97UG3CufnmUjX2qab8L1Lgfu6R4hAmUTs7E6q3sEZkofUgeki6gu",
  "key3": "4vausknVoFa74ASnX7aUpEw5N11Ka1ECod7HFjUS9BC7QE7M29goxv4yKYjXtruhAbPdayoVbQufXJCW2JgXNWYL",
  "key4": "hyVraYDdKTRLxvmBAtWaN9oRacALbgERPvQD14sVNFiNmMrzqAjWzavagAjZu5exDP5BsCghuJCxxZxAG5n8uZP",
  "key5": "5uCWyU9q4YTtit5qN8J28E1qcvQhJJ8gWToC62fwLBng76mcvybrQLWVacn7AuU5igQw27v7Tie11Jy8PizLS7a9",
  "key6": "3v3qz1ZtcCs351riKoPKLX6dqjCQKSXysGs66WtFnzJfgw5z3N3eURZW5dJoS8gx51DgNk9QUJMho3G1F4wg7TZK",
  "key7": "3Gw39JTiykkDogQkXc9DranAwXeqTNdQLrVBfU6chKQASCxgxw2GwmZX2yf4Y3RkTehEApGp4958xM58dHcWd6gj",
  "key8": "45uHXBZXhHjrNgymFZxk1wkXxRerzdTWFbrTgWMrrhmfkH4hrwXBMwvdyHy1HvSP32ZbjNHVeK9Zrpic5shoQ45J",
  "key9": "56JW5oc5vqVPvSDqJUy2s2j2KHrVM41qYCqN3QfRTWeBUnrQfSZHwHNmBQHkXyQthJ4cTGdL34cBpdiM8CczT421",
  "key10": "4vZeqZ83jvaH3opsuEE5exwX56DYrgmiuPfJZTkivzWYvVJxnVh41MgReWuWDE8sGNgxxwUwhiGNaH2t8dmmqo3c",
  "key11": "StwfJmGJ1dQzTzzMLkJaio12bqneaFnejgFxcb4sRiRRK2bH424MkAwGVCVoJs9DRZKDWwUurF7Y2K5yKLL1ajg",
  "key12": "2waaptyPX6k9rHzJxKembKKd2dFKQRGTkq4LQpT4gZkjoShEQ9i8GCNaheiP9hhGz62YeSgSocryp87vcVgjtyd7",
  "key13": "3rkHoHfXofngy8b3XokKF6EBhMtQAcDU48VzqRvDdKJWZkqTSSstdHZXkbF1Du37dFNQ2vzPLTs2JbBjrhzHLC2S",
  "key14": "2q5p4235Gcf2TuqKXXVd9FNYLpQo3LKveXRYL9WoLB4UsXN9Dg5j1rtUCLjt1Nq29Rjpz83xgmhBsQq7Ujy73c7T",
  "key15": "2oCaU2vzxHxZYM2cn7E7kv5AhTAsV7CR2vRHQNKM2HqBr9pUCtmrLcw6kaceu7QdbR8HX8PtWZiCUseqUW7tMCxF",
  "key16": "3zTN4tDyecZXMRtKZEstDHyFpKgyhzy7sjnu6c1W19bnazibEPqnroH6ww3VfiqtxQarut9a5GUaNSvBQcZnoCBF",
  "key17": "53oyJKF9kRzRhuxBa6E6CweWMA4riUAtbZt3jEcE9X7DCzsLN97xMF7J142Xku3MMnw5Ec7sk3E8PYa4TJGJbaFG",
  "key18": "5DmHv7dPzL6YCGnPoAgyJgCqu84Bh9Y8oJrmyi5UugzfcvPF87P2wk5xREZZxdoWLEZPUPkWypfVDA8Rod9uMsnB",
  "key19": "3b5NKFQ4MoMWNBM1megetyxNxsky2v4WShXzk6bb8ymPvnVBhZfR1z9U74y2qEbQf72vgiUzJjuWavQ1KUrzgzAF",
  "key20": "3NUgMwkpWaKQeWjFn47zS7N15XoRfPw1nSi68Q7Upk7mZXx45Lzy72WxK2VCyJPLoS5AgmcRk4oiwDKWcJvRTHsH",
  "key21": "5rhhMffpMEYLiF7JtBJ8JK3hRCxoCRqyufWymUejcjjcN9xXTbFbURghmoQuYygDvruUCyshLRmPoDwoQSBgyCoN",
  "key22": "4TQzWbfmgrzAbdqScxyMpTYLNZxnacLXfYGjQqm3Z5sctKCVm94etjFTGyBbM79UYQgi5pt3Awryhy3mCjmSTGhz",
  "key23": "5ftminkFHBwsJdLCQUDTVczQE1NJAtbYm9NsEdi24acakt4FudVmSSNfEzpBZcLAXQtzJ8azaoKTKDNWtPLRtUXD",
  "key24": "q4e22svtE91YNiz34SbSd76pHe6rH3BgYQ27WEZobrkpXEUfvWWTCSUL7eUdhg5N64rH9bK6puubkLz2WyRAjx2",
  "key25": "3GzBFyssc1rCrgcXX5JefMLAnpj2ZfpXf6j6xvnXwXjhpipYJ7L8n7yDfJMEsaezs25grKuCCK8swNvAiCSM2gcr",
  "key26": "46VrMQ65K5v75FTmgNXQPJ6z8vFppAWb7eB5QCtu2KFdcpS9LAfo5VUqMk1p2ziWR7xknZxk2evwuh7qYaWwvkNZ",
  "key27": "62pMjuhpBY4XwxK378yVBQuSHSmvvod8yyGgYzJQeLrAeAtwGsmxNyWSk4B1Ld1FtFWJbq9L3dCBQ1Dgrjmo4QQs",
  "key28": "4Wn6VhYadNKShb7jT4pGRTGy1g5rUdGL27BYyZnwaNJ4tF95fe9nriVUoQcY29MftTB2mkzFRqivP1zSMg5tF4cw",
  "key29": "YL25X5GXU7zqNALmBX5Dzv8RG9HEoAH9a6RoCPYkfNUeAxWFaiXXZTiM3ebjrrbZ8RSpCGD8fEFQnW6Tpe7qr3j",
  "key30": "pkVGb9r5yRpKvCR5Q98P2wPkk9GzDb7uBaphxbAQ8YMCaUuBWneBLMJ8wb733QBs4GmNwoiSp9NutaYQXmhMg1B",
  "key31": "49oDnt3MV6mNLgsho8SM6oSPAPqcfk4ADYqqgY2XWEQ4jiaExEXgvx64oxG1c8o3i9TDi4VDPjW924rAnU8UXbR6",
  "key32": "5A9S6B2oiZ4hk3jacycnosPiRHq1zZa86eJWpCxCv5fabDtuf1C65DfrZhKEbHwFMLqdpcR4k8AecDwse6s6pwoM",
  "key33": "54RRbHtMRXULLX9X7ynLxBqZt35MV4r7CB23GFUbCnY2GG9uG7jeCzKBRg9wrnFGeFdVR81fLEFaJZFZRJ3VHZsz",
  "key34": "5EzAWosfe7e58JJ8LkUGLsq1VtQwbBUrfr6CVmW5gn2ZuHMrm5KVSk4HyqTjP1oGAm5YQKANDHED84aJzenGgdVs",
  "key35": "4bfyNq7qqKedL3oRuD8cXQ3TdZ1FqH6HrFJKuNr8XhYd4M83XNTfg8x1AEfySMUf9KaqjkjZED8eWPPmhvRZKqdP",
  "key36": "5A2pkrimfzoRAzbroentJia5ZQvQMhzraAAH82twkwb1XU555sHatRRcWUpz5cp7y58p4nHNjikfBM5qtwHGwXnq",
  "key37": "4YmsXb4dRebiPs13Dy75XmySDhe4cYZzMWJq3NPeqGnF2817GLsPpGcyaJHxp7sSdLyuPWKad2PUCApdEu2DSBH1",
  "key38": "29B1nidg1B9y1ZentZwtWk94osZBbtjTTe5N6SHr76qewVUeYvFYgrDFE12rH1sxSs85DWndqPXFQyUx8aUZWwC8",
  "key39": "2SBhe2NCk3yZG3CPrcKBAb9ZMmyvTAE1U7SM8YGmszX15PRfEodUuuJ3wSVMP7DpKuX9nZwfm4uPAAR4Xj9urEEj",
  "key40": "2KaL7PVN5mN43QxTknHA7vTXiy4LEG2foSLXJachmYoRzrdAFVvWE1Tdh87tLfUEpTn56LyNFXVUFX6oRoE1PYnd"
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
