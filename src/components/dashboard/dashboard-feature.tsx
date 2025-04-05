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
    "psYFVHQrmn7gT2vjQ5jkb7WmntwV92d2DiqRqbD1t5nJ9bHq23jCR4H6peJJU1NXnywFvahqbtB86Ve5XbfbNsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yamt2pXwAepFexcDL5vpYa8SpVjR3XXjesefssdzVY8EUqvt2fRueKuW5yC5TSpfY28t3M44Wuit4DxLarM68Pw",
  "key1": "4iKt8mXdxGZ2nRAwKiGmjhf98jonBXf2vpi9U7cdFF5ejL2i2rodSdJBVu2fJX8furA1ZhSXWJGdtVxgoJQZ4GkP",
  "key2": "2YXMctiNRq4AnT1vCoc4jf3jDoCHWrmUkUFRbkx6sKFMDBxMxJDqP8QRSMJF8ycdZegQdAVyrv6djB5ocVCJvQtS",
  "key3": "4VeQ2696sGa7Wds9WnwEfu2WiJf5BHL7MM2AJ65ty9Q8PkpiPxRF4y4TrYNpUP3cRfTXYbrzFY3vWRbBr5WYHEfr",
  "key4": "3vdez1JH9vu5kVqB6FvZZCLtz7PJsyDmmtjMD958qKFS3vEpFb78PDawFYafhVmhCav87HNa7fHbN28veyvXuwR6",
  "key5": "5Z66RYtvT8NBsPDYpJB7pW2GTFCxJgHDfn3u7c8xiTJASi56aWQfkqLfKbAqno4yo6BCfQpV2AD4Jvoe8KVtRpMz",
  "key6": "ZxUcvRpNnUy3t8ZfcrNGkSQvfcZAjp4tAEC9SsKiRAqEa5rF6ZCrzYPLMYeyLtdbV1KHx7NhQyZnguB81mKeweb",
  "key7": "BSJMaymvCHuShfPXx3Qdae2yvZb9Twoq6BMRqACtyfPSS14X1wuek9jtHrZSUQd24qzUEkAjouyrRHUW95kygu4",
  "key8": "jCPtSBHrTiAAL5FBiri4r2fHceoYprz6ccfMuY2ERUTBcv4A2j31aMvYDCn6rNSxEV5vLVn16V24uLMxkXzi5zB",
  "key9": "4LVeor3dGUReP973sKMXNfLdU6No2Qn4kQLVYpJuqzrAYBoK6RXKfGz1Gq2p9eU4mJhZF97fHHuAUwr7PhkRzFW2",
  "key10": "4gm8bk8g2K8zqdwPNFP7xUXygrv7nePotakeyFRVH61uiRBDHxZFWRrXF8UQ1tL3y6dCoBvAmrZfwxgaUhtfVV24",
  "key11": "3qE1MZFQN4emN4JpATGcjKoyCnzk4qotNWs59g51ayzzDL4KRGCQW9UtUc15syA5Nec61j3tUyttkyr7BrH1VsC9",
  "key12": "4Up3Dk8gjveExUgqDuHQHn8h3TZ3TTsoURtJmdoHmqs61xdQ74x7AWAo9VaJgdfaujGdF4vVEEW5pRYz3RFrRHQG",
  "key13": "5JfcCrn3errrMYvcvNuXZzXcfc6zP9G1FQZG2rd5VQDvmEYn1ThYDgrEg58P4e71DxwYi6aNUuq4xgtZbGEtKfsU",
  "key14": "xHwPja7wiRXAuhQ7VnCL1xJmpWhsuCffBphH9YLrmg4f46cXvss7SG2PWRYWSSvdYGPw9WybhbxkP2K66jon38X",
  "key15": "2UaRXVPADjHzPPrHYg2jQTaGgXBrxzrpCEKvMcgAfkjF1PRfQv5Xq1P5NxBDATuWjdTm5BBva5oVWCsnitHb2o6U",
  "key16": "2fpooTqSEr5xokfTmrsZX3U52muPNcsf5jNecT3NkPF1Z4Qp7DpCA6R3XXjLnLFUseFpKPSyxu24K3GuDKMwM7Fv",
  "key17": "3i5CEKPVLDBuDCVP1SmFk3Broneb7rUCKAzEgSSZKoHrX7MdQuBBEzFBPGRae1aiEcEK2Eff3aeCABWqcjiA6HJe",
  "key18": "5Zh94gz568psHYAfeDNq7J1ZThKZ1JjY2Pojuvx8DzAjpsGWhkpgbYXonj9aDCfgEjW2LeyvMU4bZ47pa9RgkoRD",
  "key19": "61va6YDLrX9Vxs2UXwbHUZDJzZsEPvQdBrAr4yF2LfQZJX49rQnxefWAhJ7hLP7pjZELeDStKMmjFfM4eU7AWcUB",
  "key20": "3F74MjwapYt2Uw3AR64h5pT7PXvo8577oDEFRcTYkRVGvFCAoVtfgwWWeHeHmbFDDXywwbVdupVW6b2oqMztDnNs",
  "key21": "3fUpeyBVu4buPqLLxnCoypW8ofxjwnjV32B2N1SyxEt96XgnsPWjkYU6syCgpF3LTaiGC6jucQma1kpsoudDCmAg",
  "key22": "3CD5sRA5YmJLs6aeuupnBVJ5HN6zfAbuw8JyrFrXW9gskFCvpokUygRzSgWjzjkgSk2CHfMEZMbFZVXcVGsWWwXV",
  "key23": "5YDF7TeY6N1XCKMENdm8rWAXS1H1JnxCVfb9cVd7DdBFYJYEtS711vNyS1ku6MZeh1bJf8L1dCMuVqVuvH1uau1a",
  "key24": "2ueph7P5ReCmtAtubZfTAKXfM4zyDiRhpm5yUKrniKq5JXJhbRttTByW6ySv7Jb2kTQR4JrcURNF9r7mzVvUyaKs",
  "key25": "4oTExVpwFNeLYJoL7Ngec1qsNgthRern8ti6kUGMiPZ7fKZBhzKVL5bjuSrwbzZp756WxqPgz8Cmt4y8BWuftz9p",
  "key26": "2v7ohD39UhZQ5HJ2E9pBtCoYiHBS2TYixwFuMXUiBP5ZGRpzvfZpq6Z9ssqgYrbSbMkqYvev6ecuQryaejdC8fju",
  "key27": "BrXrTHd9p9QoaYGsB5nXfhbxXqQH5x66gykxy2GweH668PH1pSrPU5TgUX3Eqovvf6wiqMzDag3wRceZBRwdnMg",
  "key28": "3gg9LRnx1CSLhUd6soU1e3KstGEZcog4W5PgwmnkKCJRNBJ2MxLXz6Y4gCPdqadECbPyXvGzwLmztyCFfpqgCit8",
  "key29": "4wMe7jGTsDosuYGoUSSkoSDj4hT6PkDtMXy8qSmiJE2j7xUz1sfcmgX1hzAkeEaJPa9GzbbZDLPTUnw1EeRGvzmD",
  "key30": "2BJ7CkSmqFXwPbCfF11ZgW9AHAUt9FNtt7qCLtw56ubpwDAhXfH7pwvTtERXJALJedfuJg4HNEFwDreHgaNE4P8A",
  "key31": "4a2CF7KWb62H3rrUw4SCFmF5AyZ3Z9NqPYH5NGMeXWsMpLKfSc5Zp3UHt39AVjDGpVsFeRGyakEtYua59KbQpeCE",
  "key32": "2qwuPoPnNq2f8pdzVTpCfBQGZfqdvmD6XGJfKBQwRqUefbNz1Gn4nhg5MBjW7R38ReR9GfXogTCXWs5aDHezZRzc",
  "key33": "3HsRrvU5ni3Qhm8qdkysUBEttwUanVvghX7zxuYLjEUugrnrtzUrLsFE2DgK3oRmTuHyL8M5mwApvxi4NFy57qoZ",
  "key34": "2fd8dh3KrH28bBMJ6BxQzu6ExNVm3KwzevQnVJx2ZPjvPhAKXktPa8jieAtVsQfV1nY97UhZ8H4uukWpZroGebVZ",
  "key35": "3UjAzeQmBpN9C2ymnEney4SJzXXPx6zXukuqQ7SNJr6LjWgcHzfxV6CcCnRLkimoFWFL2VqL9nDpt1feenaV9mjR",
  "key36": "xY6HwWEZ2Q4krZ59hFp7ZdKATKewu24WGaoU8LkqVWwXHBJFZDPNei61Rew6cfnuunknUdR5J135F8xKXuzGb7H"
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
