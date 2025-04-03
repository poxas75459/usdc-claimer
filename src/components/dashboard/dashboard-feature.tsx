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
    "55iCZvtRa6BeABa6jEPA65V5zP5HVtfgVR2aSHdXypAfRDveXi4RW8RfZEBP4YvvBa1TDiGqhqresi68qarTu4CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cLfLjNSrCYNkG44JBuLrBRiXo3v5cK139G9XN4JCgAFSuWCx6eM6tmN2RXqAfXeq4pS393nXgZKkJCRZJzswBpe",
  "key1": "921wKTcSLyMUh3BzDvQNE8iAGTrRMSypj1WHYw95vz6EG4Ud1HSqLZbMwzvVMLAMRoN6XQccnXwTBz8bxbqHC8Z",
  "key2": "2wF5Hd1T9adqsKzyeVNXBT91KptwgxJGipj33PUBLUCvP1ZbN5CFeowow5Kwga38SFAMYggu3EDtFZLsZpUV6xuj",
  "key3": "3xYZuMFWxYAzNQppgoPNu4rirMjWWtqRNQx1wQK6LnQAgiNYdJKYFgsVeby13433yYrYDYmnHVqanXbXcaH44z6W",
  "key4": "2h4r7WnaCQ8kccRLDHAXACvrdxQFbpaLgSTs1AeGeKf2Qs7S4g6fKY3voXhx3aTLe2ZJUzeoMZvALkTmh7m5WU95",
  "key5": "5vcrR7Xe6Bcmn165z68qQso6bA8GSsWhaFNgnryk8MwCMeneG9fztB7a7mEteApTfAjuzPatAMAA7deLXiZG4pTN",
  "key6": "3ENvVpMHoZ169wJDmDCwMRkzRHpTE3w2ay7h25HEnBqsWKE3zkggT1ADyxBVmUFtKjjUr8VeCdTd63EJJuYSFg9X",
  "key7": "3QinRxxGnZMC3T8EiwESkt9yKqm7pZWiiFpuxqa2VdxQ5SZS1vUZyhKaBahXfvV7eW32xHhp6M8p5Gv69cfeKMYV",
  "key8": "22zYfnNpsvNk4SfmHeLRtbfmZR9f9qBdC4VPWCxYosXgGNk199ydASvccQ2gaaExascggdZaTunqZ7bAcRekyRxd",
  "key9": "3BcxwBzwm2aLFbw3UPykKgBYPoUQ592ytGLpUYtQDLWBtQpj1ft3w9xQ21bd2ihVTqBRDqZSxVsXnbiw1QyZZbFp",
  "key10": "2kyzPvoG56UBvm7FaWUutsKBv1ZozmBvjXuHptaNXu6Ei7QkHFD3Xgnk9yFAoewUvtcztAxUKGShJDsr3QyAbuwK",
  "key11": "5bgRBmeqS8FrhmjJsVBZzRHiJ7pdTg25bwB9GadL6b252oJm9zH9FZvP5uGvhDAA7QFoxvj9XTD8Ps3q3bjEq2G6",
  "key12": "TxnYaHjSsusjwA5JkWdUTZWt92ZfXSSDi2aJUPMRE76iU7yNqdgzorVB2YkYimQ51294aoSiwXf9qFbT2rdPdra",
  "key13": "3Y5u5bqWx9YZ8MhsuNNjq3jCK8wsxsZh1zWhFweWewbCPq2qDESwrMDUKw7VeXJSatA6qVXARjrqf8o3o2irw4jG",
  "key14": "2xYQaQyQZ4uJNyYBSiC7aNcjjEzYEXrfQHt2C8SMBmR2ra7CFzCGBsDeddnGooh3zw9DdkUVLMf37aw41qLkwbiL",
  "key15": "5CCSnEWJNatv6CsubtzoDyN2ypvV52sjDdzXAV27jhQ4jvg2cTvdXNfGkL5MJK8Swq17dnyxxa3rMVMDKFVoKBAL",
  "key16": "3bzAmnTaLsKHuKLq8FSkvaLfgw8ace2tU4gwAauBDsHXiZmc66p55mfpJSYrttTgpoT7ds51bR3REP8ARXgQoCpS",
  "key17": "5g79RN1aJd1Nh5gvnABNSYcT9QvH81eXvHe8ack4N4VHcMm9MBprhAg59xSnepmKPMfKEyJ9Fsa64UgZLzzqhNQa",
  "key18": "4aUaz3mJQVMsEbPWTE2dGgZzx1oeEjTmeXNRrCEWfYrhPe9kAuez9Bu46HUXte3GzRw9WVgRpxL5Pan2WG5dfXEJ",
  "key19": "4AP2qwCcFr5trALWA1kZrrQFXn6MRMrPM4PjHpBHkbAfuijk4BJxjd1sH28cPQQw2Ewqjp8u1FDaAzcuGjRbnVkb",
  "key20": "5xkemNF1vvyTJgEt5yN3kZEZXkf1xQ5ngwAu51pY5AvDSH62K1a4L9e9hA8oJV7vSkMJ4mkyqP8CTJNLiwM9hUtF",
  "key21": "vtB2baaVoEYWJyFNisa8sdMJP26zfVgctNTEkC9wkYcYxoC91vNfBYUAtF2a5tQLno6Dwsf7AhW3FK5DteyS4Fw",
  "key22": "2AazvTMFs784qRzXWXunyikNatZ8VUvn36QmxTo218JseSshDm7VXaMSpZjKkT8WuHAi38xYuwGzzH1ZTAsbzTge",
  "key23": "qE2Hg8MD2zUQGVV7JNCDz7qiiae69GmmPcEuQAFCm9ogkE5XtY2yFkWvARLrsRcWAGGSiNQmCLujduuiAuTqh28",
  "key24": "2VqkWdtroC6Gh56ZBKNrUuCbAQCvHSm6Vvvm3MJt4YRFs4SPDtqLuJpG8zMd5DNWJrUqXDu8JYQgrGC2X6wgDwut",
  "key25": "2nh6Rb5N1UZ9pT5ETERiLxLSAtgZ328xLD6L2kaq2exh1iMsy4qsNW9CXGCwbpReb6vaWz7mcZuP5bweD1TUcDxA",
  "key26": "rTC5nD64eM5xnXFivRkogrNE8bhEj7fyz1ACtToqQSyPN1uzGR3Qu6GVuEq56PTDJNBusyJ1q3y2wi5oqRxnZr9",
  "key27": "3zpRDFGyJLxm6d79mR2eovJtgtxjAumMMxLbkD3bHvtieppeFvmLYSSwfTmdhDkkzQGxj2yqAS2EXwGjm7WxdBQo",
  "key28": "4zjJbwBCDEFxr4hBoU9cm3jMWhFtUZWaSK3ejdUG4mD9n8wvuNBeQ9GxCCt2pQRwJjeTCRCXuXZpauSXZY5McfNe",
  "key29": "54fb7DMmzxbjvQLAmvfnYsJTS6GXCp9upKrEyZi9yvKoW7chKkR6fdasXhKdqKqkmup8zpMWCPc8Xyyyxa8B2BvN"
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
