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
    "qi5XWmkcQDffrjDTGCBKejg8RfSPzJ4Q7oQk7ovav6duWntFBjMwdmmST1YyQPWaPQkgjPXPHEQ7xiSy4ELTN6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CCvvQTxhXb1GVoLfHuZUfK6NjCYowjnFAs9d1VPrCFzDUtG35GcRTvkFpJ8cFDfvMDLbpcHjZ6jUF27yzAUncM",
  "key1": "3fX8UMsbfxrHXMRTrxtjTiyMiNYptAod3Xgs56tH62tk5SZ7QTAnWYhe5msan7wm8mu9XRoujUQsGztzKLwtfX3m",
  "key2": "4JiWDLUQE33FEEAPApWUHErQ2SYB5iXvZRvUoLKs1u7Cz6u2B2UKdmv12Lhb1CfhT13JxVC6Q47jG7jvGMtJNGMU",
  "key3": "5J9CVmC3LfwKFiFGLtQzfDstifxsZMgNuFxmSRNXSF5iCYcgp1Xoy8cQxb7UETu2XnzeCoWeMLLjoCpsuUpwGQzN",
  "key4": "3TVQMZuFXLJAq6tWj38f4M2NJjxTxYex475udesLZnL8pEYHQYmTQ5dWf16yFKMEHymA2wMjnJ4KDrxGg1Wp6q38",
  "key5": "21oAC4c6XUjr6XXCPTr8rfFzqFKiuitWyj6JoxRNXuGGrZ2gyoPCtzehUQKKhg4CK6L3uUZ8jnYhxYCy3Fo5rQZ9",
  "key6": "4zibtaTU8TPfmP665a8fpKcwUeLSUm54WuEHTiuhREoHfCKhpkkCHmquraWgWmBGFbJE2J9NxsNTw7WA33Tr65xB",
  "key7": "LDkURQG7yUERRkew5g35DAVZGiQdFYfood8iYwAY3mKfe7saz7MXyWDwqbRca3eGjo9EnqhSHgAPRXRh4P5oVAV",
  "key8": "bCNRVbLbhEkLUoN1zFp7BvtGSa1SVTXUqoa2JiFPYfwPzifs8bg6nYgYJV9vFFYFvyt9EawA6kCBDMZhib6tDJh",
  "key9": "62arww6varNQcVxfQty14AwL2wBhCsGM7eN5kLKjW4aW8F6nck4oxAqusubABzaSZjpXQKjqic3LvVNGnAV3dTVc",
  "key10": "5UAjkX5j5beV1Jr5wv9Asmfn2wGuZWY73LNNG9pGr2PhhFVA5d6jPwxoacsF6NPjUhBYJBxWj9JHiTT7VAZ8Hapj",
  "key11": "43aY4acnkPwJKSv5ptenPNuFzh9arpqdDbuoNGGj9PqEBLh7EExZCQrHe7b6EppbgTvvJWme84fDfBiXa12mCoST",
  "key12": "4gJDHBKPPoWvpjqkGdCf2eMezKiNJKkQHMqXgZmWtTEJgUGxkzBMxyASMPm77aVERHTz6htnDFSci1pe7qDUkeCQ",
  "key13": "37PALsJ9Nd3bDAr4CQxnLga1cB4kEpcftRwukyfE5Pa6JNnaFMPphYxdiavVhedP9kPEd88kw11mwhnPRrWGMp2P",
  "key14": "avbDwCwmy7iuqWKq35vE8Q5i6wECFRQ7zrUDG9QLAVUXBt8z1k8XjhPf2KE6SGq79triNNA3cjfe99PjaKnkZbE",
  "key15": "3kzPiWPSBJ2KzEB8VUXFJ4ri1mAN2gUcu8eE5uFvtsL1fV9J6sfHG4QngFjGuzchiupFkL3dgiS7fbJxsjmTKDtD",
  "key16": "4ns9b7QKFucLb4tFzQXM7wGw9prdKvHowpRJAK4z3AYtRgpUft7CP1G9mja2wXecfUZiGmsdPfJYA4w3QCicKmAN",
  "key17": "659EKUe5dDEf9k4nrU3o6tvu6sXq7CDFpUgWN5WYTG1Kaz4LXyCjYrrm7WFsq9jCg1MQNW76kNFj86iiUE8cZhov",
  "key18": "2zDYSMuL5ccpUGHFet9PEDwfzqgX13RdfhP4FpTggzSLUbpVujGxGQj9EXA1cvUqVhoWDvgrnergvaX2EXw9msgV",
  "key19": "2nsAxKivi6iN92b6tKW1WuntKKqbAZ4GxXbPuKrHiYK1M7Y2j35gbJiMR2seMaRiS9XLrDC34GcDgqtAjcXcTXED",
  "key20": "AtFsDKSoNbpox5YDA17vPqezXFeFQPWNNju8tjSEdg4bF74idXX1SrzWK2jCtEvE8WNDU5N8ouykKWKmf4hFfvX",
  "key21": "2tPaEAxHCKb5EBs8NQTb1S855opkB2vdTeiH26FLqokSQMU7MHi3gymyxV4FgFcg5DnCwHjTA2KTAyWWbuEmRSkP",
  "key22": "5S9kCWAydV6Gv51HYANJQFYiAv7CYvzRtYoxtsM4UEPq1WpcxX1wEDyU1NFSviqQUqGtVYLhxJudBP1usbnnDxj5",
  "key23": "3ar4QQp23bBsH3gDyNqCXm4y3T7TPMREm1NMxk4zwCD7yNkDpyj2bMcF8apg5pWDpJeFxSn6SNNi7e42UfZ9utch",
  "key24": "2FX5PLBiuXgqQRw2BtMWTeQgfz6CnqVmmN4hkyLaLtaBTLvfa9zURfgfZ52gyVRnY51rainoNToRoibMRb88JN4W",
  "key25": "65dvV5LDCDaaFWcgTn6Ltzy4wrLhVG8ezQKUpd8kmvZHpRjnVV3NjrnvwpA5XyBthauxiVWzn3DZktg9h2o9RWBb"
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
