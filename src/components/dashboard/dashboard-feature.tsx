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
    "2TTY3ue5Sk1RGJ4K1EJrayn9byHe5o3nVEctjGRsnsnQSp4RwMQd6QQdnn5vELnfkroR2TqRNrH7goePZpz7AE8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMtfeoDU5dt733pm9DbY74mDhtuzHk1gMo11GfZF4hSHDDuAsQVS9B6PcD3QC3dYpTc56BKicUjjmFwzqdjVfmY",
  "key1": "3aSge6yxnEN2CAju4UpnhrZ83xetupkuXsm6dh6xWum3xjuFZhehnSEfzZx7DyZuMgGU2ubYuM4ues7a9WFmWsRe",
  "key2": "3oWnRxAwzYWEVFM6i8trV5rAfT18bDBp4LpfovN5kFBD4bSMhyRiNb2noDx2uMpbvsCoKFbrzzYPP1PY6krkYu1K",
  "key3": "5KGpVU2qww9BQbDnq6w2QpymNnGzeUXW1htKj5ak12iAyoFoi8azoXBForykj5nEgdb178MZHLNA3TUfAchexfRN",
  "key4": "4dvUhAqCs7aYU7EkoQ2nWA2HR2Y9i8teJZ2uVVfsHNLT6E5wuTD1etwbjUxgWJiLi77EkiNicinG3pyHEVe8wenF",
  "key5": "3JUXSdyDw4FTdYB3kWP1qX4iG3PzqGgPjfLGf51EMiWFf7r2MV7ePXWTSbJmuSk1Uv6mBs49RXTwFGcXTtNhMSqM",
  "key6": "sZXsddPSCk8UeG8MYsL8voSPZba6yL178T9W59BsR8i5MH8oXfe8SD5Wnb4WEtaHTkWFMTmicCuguDbe2QLcKEH",
  "key7": "3znq15sB6uYrhjUMjQYDDm6biCqxrqtDiGuFT11JTj1LoFBXMTYyijpqyZNUbNzTZs8v2NPbSoyjj6zEYza7DxEh",
  "key8": "3YPBnhW9ZwWR42vefaiFLCMP9gd8GzNEkaj7DePnaLo6ZwboVd5aSJJFiKKUgymhSmTeR3WijWZSvMTAqX3W9ySt",
  "key9": "5cGXAma68v5Hgj8VvK8X4RRK1U5CVA3WhazEpzFDdZMwsztkmaFqZtD2yoJdzvm4wdsuRGba6CvMJnU1AZsnvDLQ",
  "key10": "3n2yGDRxvi6GxPtJuzJqPmpmbmfVgWkYL3VLzXTM28tNuvzceRdLWKVccA3AH1AKXhrAcQuVx3f7RsXXNVMaWdci",
  "key11": "3L49oYs5WrcJbxEFEktWN7n1DSE8XWp7dQqKwh1tXxVrWcwnUNMaMPeedP1wDBrr8zxGmLQV4qQQmtcY32tLR68g",
  "key12": "i59siDyC5A3SRAJyUahXnBBsREXhnmpyCFrdo3NLPpNSnessHm5dWuvJspjeHNcYwr5uuLKwzKs9gHj86nVP7TR",
  "key13": "4d4w5CNKBxzd9x5H4NdpTmYz97ZsEiMKBwGJXXQNMCxS45dizi29wS7KYFCZZyYmCbQ3DErcmBzsiL1xf6i187kN",
  "key14": "3Ahs3f1dWdYwijQzoxcspeq3gt31tsadDSpWQojd1y1PF8AzriHtYFS6nsrZfZFXPmHkR14V2ASoxjvFn72WVH1A",
  "key15": "5uRbyCAK6kWvwhLdtUZ1LubpTaysoeh45b2y7vK3VVkgCN9xdMpzZgasYXhrtjddLV4bQnShSAcp8pkoe5uavpLM",
  "key16": "3BwmiqumR6U4sVp4vdWwet1FPjU41GWaZJikmcJYMLDAY6QPQrURgC6XXH2oWV3Dg75UueVdeyxT5mCQ2JKN4tZV",
  "key17": "2xQRn5Ri6ga87x885o4ApUJDcGssZ982oCLnrzK1XBS3s1b5aB9xEF6DXnQczaj35jjqZi1Bzq2KURPznENdC9vJ",
  "key18": "2XQ7dgMkVqANk99yAbsUZpknuwV9pa4QdRjZDMpgTYaYimUu5b1yU9hwgEYK6j9am8ya9aLyb1ZsxCbqL6CB3qiz",
  "key19": "4MtErBUqD57QEJquHuharJoSdpTLWZe21QTk1PCbuYaMjTuwA5BuC6yaUDeJt1v7nXJaKVX2ShX95R9EQRH7sUNA",
  "key20": "46UQjypTABdkHCHaQoosyCBCGmFrJJ5FzTBo4paqrJrUcvq7qq6wUJLyqqP6vP3AhxAgT11z9LasncdHyUPmnGbK",
  "key21": "aBu6b2at7BLjWKZmewVvDhUeuKEJ7gJ28KAbxFJGGsVeA1JxSj3zUvdUXLc7VgVKEdpJZ2URbMyfEL1Phpz7WWE",
  "key22": "mM6ekGaLX2Xjzzc9PhbWNGF9ENyYn5tNUiSfuhn9C52uLYjiJQATDSyGa19PgHda7oRTAkoPyNhaoGwc2TtqoJa",
  "key23": "5Gz5kAit6WSXLUwuwpmoSyNHjQXGCVfB9NFkZxeFdVWw2inyyyaLeXnHzzLvqyxCt7M9kmSDfgRgwkCxMAvLWJRv",
  "key24": "3q923ixPfnyW9sLNCTDsgSyQXvtXfhUssdTMZXChoDwC4GJwH1J2qYeY8yybv2TUhtxPLwL88h2cjtDvGM5hbdPu",
  "key25": "3pZ1rjP9fkXo7VeiFQPtodWFoXKTSNLCkvY8RvW9ciN6MrhzNunBUyf4u9shABLfs3bwuMZtqS6HkxAwNgG17ct6"
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
