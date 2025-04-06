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
    "5roMF84HQF8ASEcTcJPD35BEBMhjDLUkLYxh5sagxMXtBqzbPEUTSSAc9f5WfLHQBTL4ton3J1hMs3FQWroQF5vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrmhzSdr1pvStgG4eBRqdGswRKHYHKBfWW1GaUragnDcFMa65URiYKFvmYitMNbbeiJrhD6TLAzBuu5eLgJ5xtF",
  "key1": "2TRCZz4QEFP1C9Bckx1PBeYe2GMUYo4bHs5ZdEt9wYWAJZW1wSu5ZeiFipD7UgMdXjSXGS2asy6jJNY1DwkutVk4",
  "key2": "5TMtrF8jNzKhcKAPKQ3Ha1Bq5ijPnNRvru2Puooe7p2Fyggeh3bGz1Lmp6gQbw38ZPGvL4CG1hL9gX31NYPQqaxy",
  "key3": "4FUYyz1jBfX5nciC9HWe94tP6oUcXAuk99xuVeRToMcU5KziXt2bMvwV5nBPNnx6sYcqj3J4Ve6Cf3dHhJ7njfZx",
  "key4": "FBAZX1mUnf26h4ihb22JAwyvTgfwQDdVYRrKet3iCh1dZD4GTszFz2C4cmvNzzsDCW6wKrF1F7m3z4YFFY9ffLc",
  "key5": "3KVSqaVWzBwL5sD9o9yoNthWQTQLDbj5iJVy66xnvkRKwKcesBT3mbM2ykxSXuMzBBQebZMFRy3H5c3EUuCRjvqX",
  "key6": "3oHZScKHpmcrBELBpWLLz6cQ8DFJf7naFdVFGZ7oz6iTEVng8rBGnNjWApoKX3QabcHrq6NKao158cJeaCnscC1u",
  "key7": "3QcDvvwZPHZpzmHd2XeHKJtDqCYPfS1ZPgy6zLj3fQwvT7sRZS8pruQrz6aSDpFtMAFB7gb7BqgMBWU2EbDDguuZ",
  "key8": "5DBJBqvB3kEU6cSPvnzFCqZ7qjpghUMi2rB6uDyQTgdrwrrALi1CX69MMKwVx2EBBPeqLBQvNBxDbV7uVeUVovPv",
  "key9": "3Vnf4qbupqAeeqSLEqLixNbESYE3eGRRtxaeJ5o1NxXPmm79tHbhsXatpAXzwS7EFT69mWKXUcRwRzBmwnftow1M",
  "key10": "nRjbfNwfbrHmV9RckxpnYYEJ5sepXi1ePpufbyQDtn62KXpeCRQLqfYGGgixGRKYfHEA4g2abnNPeEf7VZvgUYe",
  "key11": "3pCyQn1KdZcBii6vAwpBAZbqE7ybWiuNWZtXLTKXPexZnbF1juyQ4TUBukkQfemdaguhLcndLHJLxgdcGhrGamFN",
  "key12": "2Y3xHwTfxixum4hDi725ayZhFKFm89pfeue8qxNLz1f58BfEpWURi44wL5XZR83JAickeswZCJo5ajZfzCLdb2Pc",
  "key13": "2npXoRKHwoQr9uuTdMQQU3iADj3L8fFvDZV4cGVywoF1XaHbAaFs63b343sqsLeDwChqXkA7TeNSbnsGaCJrPZze",
  "key14": "3JpQqqZBnYfuFmzuXcFkdqNHZHJT8E9JcFunGz7rvGos8esRvmXJGvyoBv2j1eKdWZtDLPU3Rujf4Dhp8gv2Q1Ha",
  "key15": "67hqYbF62rBbB1wiPSQ86F4nq6RE8YBARG4Cu1vGstno1uLP1NZ1UqfiiJa22s5kHkjiCqR1UTRqn2LL57t6BPk1",
  "key16": "5p9jNWyWxrJJL4MxoRCHEhZZbS8DBSRcq46kXQ7fykoSfqG2Jit8KTCTH1LAMTv66MTmnMxWRekppSGPQ3WFGjuE",
  "key17": "s7RUQeRpcqYvLMDXdrNCfjeRTjgd8m9Csm8jcGMpuyNzSRKgzDo3HDqTwFGytL43ZMDLdMQGGbyioMwQL8ogmTA",
  "key18": "56AmE9Cc1QsYv25EEsc4V2wRYGyxLi2dAMFvkgK6s4C6ZgpwNQQ25TUX2oV8NEyWoynAoiDCm7jXXEQVAATfZM74",
  "key19": "4Dk2A5K6RwCthU77S5o1gzhjdQvSfAPPDnawNc4pSox2PHLDPkjTa34btpQLjyDpVWobynwkJrFunCRKBhbTUoVY",
  "key20": "2x71tBp9fPTifkvtqpesQYhpnP1uK39dVYPPno33f1YpSuXaeKFFcjLMG88hZhBhr7R6Uz27mp7GbuRkdbodjZdf",
  "key21": "5rLg3fDbXVS298nL4RyM669x3ZjdcEijcu3BD455Rh3fyjvd1HP1ku3hJNSmHNwMN1BpN7Rv1C6xifWGgrQufCkS",
  "key22": "EujJaAPpK65P56pawQ7XvHttkXj9myLveqe2oVhF2s5KBtA9FruRrsj5eboxJaLXDpwEyVZeyjY6vhi4ZbnwAGS",
  "key23": "5sBatLZoG6BLbu9ZkR9AdbyrXtphEfMb39zwTMjHR2zCWwbUCEWbUFXuymdaPmhrJwcR65bDhNJJRV5XU1mZwidk",
  "key24": "3hiSdGY9FgSgkF24o2upd5PE48HTsZoAHyzb99HKqkE6NHS4foxt5ZZkekz5vGHX2hTWmwZ9vSJ85r6bkknw1eCJ",
  "key25": "V2CMLtXciRQMoVQyXLyJsN9gZzc1ZinXhgvd7vqq27Lc5LDD3ytWfjm1UJV48vNRrTrux93a55cbN1JZT6mxQbE",
  "key26": "4hr18USuW2C5CytJYcgx4Ng1zWjEeZqyTiYwbfGGUAbNSkDKXTuYxURoRJxaLu1g5R2SHh2ivuJC9ztXSV2YQnP8",
  "key27": "4uzw2RwSQF1mLayHt5EMJG6gASmhdZgntLjATr1pvwnHbpKMG2XWdUyNhr4Qp7JBL67Si9YwJWXQiNZzzLo6Qq5K"
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
