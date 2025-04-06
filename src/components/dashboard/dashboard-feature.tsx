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
    "51vDd8VB5Gn5x1tEh3Xa8qqrxTSRHBcNBNU217LJAAnoX2tD3Fgt8wf9BHoiTeLrqXo3xHafb9y7WwEPaGuaeY1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jwt2TzSFUQWvB8XDU6SLGba3pmaYbtmxGjVGrmNhrhccyughTPf9omLfNVXiLepmatPqfH558eythfjLKWsrUuw",
  "key1": "2xcTxzfMY2D6xX51Lvu3FRmCyKB1aEvrsqwRRFZf9KtuLfMZiWHLkCp6FveRMY7epKrSgCgJu7h4thJvkHijZbTB",
  "key2": "2f67FRbTR1LDpvRe2tDgaaY4KfVLtBPLQQUbdW1Jt8aKE5QwYAyP3sNziKowe9yKARfdTx18pqRuZqVnNozjxb7W",
  "key3": "DhJCaQ4b4Z7dxQHySubhLb37siJZgYGBZvsaSpAk4MgrVLsfjGL6kymLWgLeXQczTSa9hVeXA6vC9x5ChkoH5S4",
  "key4": "P3xLpe6PBWMtmocdvsajU5krwQoymx96duypQfaSkpbYA5Nd6DqC81Sjm5zNZnqPrKLgVW6Qtvt7RWPtMAjQDhe",
  "key5": "3bkaAt1uezjcHMYKDkk46WQt9QdT6d3bmtGmvEekhvJV1Vv8oD98hCAYnr3miVuJpVeRED5UZimrSWVrT8aLQUiN",
  "key6": "2X93vqKq4F4nZdLav7xYDQs2DAuL1Cjitdeg2cWHErjUu1CsNWiiGRZycj7o1o3AHyh2KqZtPyuoxcsGyHVrkvZ1",
  "key7": "3rjtiYKqK5tRaccAvV56W4o5Z5jnXDdqdd49ZtBdACJjxx7To2pSWa3evinK3oKNtv9GPAR21KoTWZHctPQMPHYg",
  "key8": "2keuVt7UedjiscAGLQmC1B2dg7hZuSmUpFTPaehq2R7jMwoVPB3wc7ASRGV9VeFgMK6aMsaNCh2iNAgPsmujitnR",
  "key9": "5t1MkCvVK5E4VChj3kn9JT2YAsNt4ZU9WidW8jy4W5w4Ad7HBiSjoomBU6HKxVVXSgXeKRbnA2eeM6D6YopCBR89",
  "key10": "3pDzrMmEpKsMf3c8uEPtRLzvyDQdmhU9E359bXWSEFLmuwFnz9MKCDBoMh4K91Pg7snZwTe9E1kC5UcJPQMejqrs",
  "key11": "43qoL34CEm9efZNLcD1ZVPQoC2X1GuQPq8KWhHkWD8wqKNmvLZPqc4vupDe3E3LAYxmVwTGugMF8e6fBrzFzgHLB",
  "key12": "3KfYc9UPDb1o66f3n51YKjhqMjWDEaZN1sSCJerpokfXTNDzhbMovAceWHc5N2VWpozGoXUCPwyc3TArS8Qvi2Hb",
  "key13": "7SYT8RkMQuhnFRRgo3Ri3SYqMsqrLBAmvkUiYs5ZiDrinQomnHiUednPM5jUxwznro8Sb4TJn5JwDcG27qdd6Mq",
  "key14": "23Ka7Mt1FfTieCpa4sJBRNw4p33KwuuLXixb5gSPCCz1zhDdamKTQVeLsERX3whVDsHV39AMLC7zWUJhhtcHCDzd",
  "key15": "faAbDcePwYcLvZhKqAp8WtptzKLVXtFxpogpx3ma1Wb11kderZeWV4iDprrWdjoYWE1RfpZqvKeA5i2eKFX9HDW",
  "key16": "4jizweTG3VSXvYHWny1Lf9AAQ6GnF5nxmACdJshUhR7BaF57mnYqbojoEwYsK22DWVvUBaYmVT7KYENyg8xB5Hd7",
  "key17": "4hh6UTUfSVJLC3Lm2iiB1omeR7zqPEBj9r6UZtC44iYCjcv7zXwEjz9ZuK6DHp1JsLALCsfUV23MUkxB5LJUpDX",
  "key18": "5mf4zhsY7ov7RtbGWgs6111AmgfSysWDhxWLxcdd8AJfLuUB3bmyXnq8ZAC5DwNZs5r9byCPiQgRU1xMKKak8nkA",
  "key19": "5gjWhMAZxZnzNpvXtLcwDc1naKnmg3SfHKdNodfvdqUinHNMPLwAM4ap5p7YWCRddrRTqyrT5755FKQh2LsvmjXT",
  "key20": "4Z9AfCXajnxL8EBUYscTyhe1BYNDmCfvrHYnQwbuuWMLqLV8FsqEtKKS7M1x5LERNXGR8EJKYLsfseCr2h73LVqq",
  "key21": "3RWYJ1GqZQMVZqSkyzFAzy8ZS2Z95NkH2kcvWnEDipmpmopSD7GZgvC74Pwajftz9ofPxdW5sn2VNV9YUybXGFP6",
  "key22": "53tv5P2KvfyStbPwtBYvM3CkSJz3HzXNQ1H3Lwru93vZoZ5uJPBrtZk5UwfekHQNCfpJ3WFYjMrEDfn4oR69R61c",
  "key23": "5GKnMcze96aQn94BGhJ8FG8TYHhcEgHXCR33NtPUS3vDdAP8ddyY4nH8G9zgEozGWNwgZTk4iV1Nt61Ckt2muCie",
  "key24": "2HUg2mj3awWxuipdHa35PD6ovzvNoxAoPY52RmuaAvo85CknfwBvt7qLF1kRjh4xqytwdDmaZhCbU7FzAFKqMoVe",
  "key25": "261Jdza1YsxN3hWnAKVJYxnxz3jbhejKULnHFkiyJcK5jqWU69L71SReqaiVcjwhaXVwz516hNnwJECAzSCpKpuA",
  "key26": "PiDJVEUqiGfvS8bC17fLu7pHuDrfJgQmEDi2TDmQbMif3kQ1avKugSXZxQcceE7m9T3k62nFV4ppTcXPseqqJ8Q"
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
