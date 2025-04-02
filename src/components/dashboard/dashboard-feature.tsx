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
    "3VMPwb3JdMe7TGQGzzUH95iKb2F1XDg3UeSmwcfauuWmhxmV35ZaZfLWwVZZZSYs4TZiSeC3RVg2G5NgfAna5Eth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BS1a8dsuKrMYsGtAeH9VcqbTFruS2RPzcDzYtuUAZLE4fydgYJhfzYS2jqu2vV5XQwo7NGkFnbiS41FbDC61TRx",
  "key1": "A9AJCb1DA7EtQF3RxVYhNkiGjpX68TykwqP7RcfGAkpqS92Vx4Mf4ETheGsimAHV6pxUaRgDdtorw5yaQ2S3bNt",
  "key2": "271SEYLYWdy5ZCo9BUkb6CS3p94h38ov62KCS9j3PmdPg1VskHHBebrSwhy1GjZiwDwtnnks6vGSdWq1fYECNs61",
  "key3": "T7pQxgEEFLThdv3vjp2kK2igHg6Ev74TcKnrPJjoP648teLUNgv56G2VeJTRDFAY9T9zbk5J5B1ZnGhhmc79xgZ",
  "key4": "3gVAXTMLBup9sQyaBgwEgTrWQeaB945xdtw2Ywx8U3AcBRzWWtuS65tGrgQvB9wFDE8r24Mm5NZ9jmPBto8b3zKF",
  "key5": "3BLSR5a9wX6nctFxGWyT8XevyVqtyZpj1ZDt5vRm8QHg15RLPLgzXGtHwG2qnKWnMopizXDEotd8PMrd7Y5V6iuV",
  "key6": "uGyJ3KCmEuo6vR1HoUakoyrmSACu1Kuj4oFbnTraZSLoJo2iHKtoWFR9GCAdw4UdrVRMNwfE4XtxwxEQWfAVc9T",
  "key7": "3ssjiv9ThsDkQ4GbG56Wi5oc8VE74q7TkEYasjmUxWSjshGYvSiG6oCxG6U9UDgRiFU32Wb7pu6mZ5dVXSazDghZ",
  "key8": "4etfEWEKUwGpEQCv7qots5CWrE346QwHbXMtUCe7mAcQR3EdAX99JQr6EaYwB3qfgf8MQeigp8ZygQN59P2L6M1H",
  "key9": "35ms8zJnBy69Q3PFE63rSoCcz45WkG5iGaTXAUTjseZygNUkR7qfTyCp32mDSM89gtiniVqpueRzopLMKBbJAcLn",
  "key10": "3k5SwJqZHKEv31C1XWdACM2oVkr14P54GAX6fYB6a99UAbWUKhHyCrR7tvyYnXN9MDykZWUfU6wHuv2rCiVMdG1Y",
  "key11": "4WyUDmuCTyP3KLB7wsUggWQp5yivM4BnxMArWngGfQx6XwieLKikkmb86ReRXAwYQJnXGmBmrbaLhB34Y6CizwhN",
  "key12": "4tms941mJYkzboT2Vr8LHhEcVbbaQWXM2xNCWLVygie978udNzcaF16vDeUxPun3q3z1QBkmCZiHYV3GsU7zG6FZ",
  "key13": "474A39MKyWBHLypPmcFDgvZD8cBvpHDnigizazJwoZNskvzgJtR4sa573Jyaq8K9vNuC3EuTtDvtKWF5eYTU1dWr",
  "key14": "52Fa9tsryDzdXon4T9iQMa4tUcRsp7L2ydaSPgeYBhyHRAmfGLQotgmMnH7an52JQbH8mC6nz7LoaZZnyMaJzGpo",
  "key15": "5XdHketNQxSqy7eTTYTyWQRfXcLUV8c4rrCLq29kX2SzXTb1bgFKmbBPSGRUWJu3T4aGBWEM6UqE47wE6e5fLFaN",
  "key16": "2jXu2sM7mFBpmQ82GdrAqxXNEMngbSsqd5ocSWY8C6Ht6WHpmrtmyGa6xDhfAyCayTQMJpujYwkirvUZbqnn3yyE",
  "key17": "2rSgTiUV5JCQWXb375h1HrwAGQWKsEcpDYowUgaJEEPvuEJRmN9WQUoZsbUm6fsELk5xPyfok6nF5gPQkRyQuqYC",
  "key18": "wYCEsuZLetubjesECL9UUXReJkPsfgBd7Kf3fAdvKFwz6thrSi9wcQKeFfdk9Y7BAM16AmjtVEwG7GMy7psSyqM",
  "key19": "4j7uPQ6zkEfXkKUG8z4hQ2xD1ByM7UsSw4JESoRunUccvheDxJWYA24nR5MPvLWGBZVMpau92aPdosTBgZGuhp7Y",
  "key20": "3YBucs9gg9zTB9BdJKShdh3yKQuyDp2wsMWyNJVBAve5oKRrsJaRU7KBfHeVhHbvRr4M91uM3SZCW9NaxpijNwzw",
  "key21": "523JTXVwAAfruvLjiJyUEVoLDJ1zJe1ZhnwrXNqdiiDDp2dXfikSo173tgiFgMh4HjQiKqLBoUXVkoZbgH13bE4X",
  "key22": "3GYsRQ5jiZerLe3YcdmSiMqF9M7MzPJkYRNxBVG1ZS289RkxLfDNeYoZ3VeP9NZXzj1t2GJBt98yqy9LeKB2oxsH",
  "key23": "4A4pVtudahNphdtSA5MqWQUEXw5g5yvRqEPRU3hUe4zX6xq32hiUf1aVwcuThcrqgDLdSqitVweYsVxZMCdgXJaL",
  "key24": "3vLUFj4bSFhfsNjnMQNudRAWmPYMV4JE9sAy7HjRUih2NDkNMKuCoZAer58Hb1CEtr7UAt2o34b2GwEqCcLEFJpU",
  "key25": "5o4xgNMwcoB8tu5nFB1NpxJbiBGQznnXK2EQLk4q6XuXSsDXeWkjYbnwARoVku1NveY7KnL8i335ZZQBueUHT3QY",
  "key26": "3yk8UdMRW8XNxJmfkMmqfyQLjvoeUzBGPaPNYqbdd6C7a8eLejh1nHF8pAXEDg3f7VisWk3M3KpKNe6HLeiwg64z",
  "key27": "2nyWCWu8npDAEnkrzDpQsfBsECDHFRxv1ySpqbggPPFyi5SawYsfF7UysdNy2ZvZih6EuG3oFm63wnyGY9sVRBDZ"
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
