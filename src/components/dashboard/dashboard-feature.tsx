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
    "5GrCzEsgas639rECpHifaT5axCTjzStscSoZQ4SzzxZeDkB7hYgrbqL269DnaX3VTSKBeYZgGHrM6JFD4ZuZqKNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqJ7wZuWjBEA1AoV5A6cvxQxeCvdMKUzxipLbS3QKHFhFcvdcA3ZXs4hjm3GjXY8ieVkEqXC4nQmp9zX1fku839",
  "key1": "5E1XbhwpZjp96vHUQw2yvGQDJ4mnasMp333fUjdAY4Re97X376GBaP3NA16KK997bmusVqFmyuV3bCcyY7TqDkNF",
  "key2": "5ttWq3p3PvNdgqk9Ud7SsrzRzR5XnUnetyEjmjbwMaE6vtutnSSb5zhN7ByWN8D8p4eEnuwbuXqm658p8Asfe1BJ",
  "key3": "2aQXFYmXHkTS63zd9y6Sg5c396ZaQu1PK29PKw9EHpHji6iRXG2vp9wVKZf5JPvVo6nZbX1BxFnUTgSafE2mGVmS",
  "key4": "3iTt45MqqydALEiNipNE8fHQvhWFHTjTWffdFUKuTa4PNy8NEiQuar1CHpag9fszVkFAGvMeMJ6QDzARzuxVwLCZ",
  "key5": "5DuE75hE6n5xHt32ZVXkkczsfRJmy6cEVuoaRUnDuPQXVqK6KmtvPm4WMKY6f4N2CmNMmQj6H3Z8MsH2BFFPWRJR",
  "key6": "5Ym3H3LyuunuvxgxRhL8nGKJuNm7fLVeEr7vvCFuA74V3PPhALSRJw5uropGFwbqGtxVZLuq8ZquRZ9qR4RT6Ld9",
  "key7": "5QrJSYFWstA6sQUqqHjRD1YAah46S2WMSfnS7mPjPn37SiBxywNJJDwNxQJg7hAjfsmp5nZTehEiVh3VydyJp7tH",
  "key8": "4SP7a89DgKa9LthdQx1mTNDcbmLm54whqxCiMAXWaf28f9zzwLZTeJuMyaSsvwgYbw2x9CJZaVh9hv8rCU41nnKe",
  "key9": "2QtzjCWUx9FD3eqzsrwtHUnN9UJ6oZsX2hGkuc2pj8eBMBX7aCFnbLuVh5kESrKGmD1Er3K9A3qvhCdEX1BuyEb8",
  "key10": "4KBjpaGf4WUfYBzj9YPL47iD3ztA7Za1XAWW7kiMKJDe2SqPdd4X9nLdkTtgHhNh5XUhtUUfNuLDMMueS4qf7upG",
  "key11": "YyMDdP3SBH5qUvMuPPhECP8PRBDNPgKVenUVzwLaEFAjtGYaycvP5FjN8wxdEuKm2tcokAgTq7BC59oyKNdwYRW",
  "key12": "A1SY9hdjY1A2FQvNJnbhkd4PM8XXZVLQsF6xJKAKMxN5fLEuUmjcxh6evRcUf5xsS55RiBqak2M2tpWBuRNGX8H",
  "key13": "5dNUFJL4CtdXW7dPF3FZiWwyRKeuSpFhMm4c3GVL7BkUhw5PJJp3GhQaxuhRao3f91R85Gzm61inTHE4DDqYsazg",
  "key14": "5Y6rxmjg7YyUhmfuyY7gsfRpUPmoGfBB6TybZpewFHuaCYHNqk6VwaPZnQQBNYeTULxuGXanEQfmjrrNUoD5c19b",
  "key15": "3xCps1eYy25jKHAD9ZyMoRAWZeiVGoBtMKgxieFyzXjjWronKxCyLtuvTLvutuZp1LMDAke88iJrcu7syCLLVVt4",
  "key16": "2PwqE7VMN8TkB6puMmTz9rQcpNee9Yp1knwNhuZXB6GjpAUVnoiXxMkCxKVzCztHmz5URPe76qQqDMfSdHp27jcZ",
  "key17": "3x7XwnYCpCDnM4bnvyMoG2xgjTUYYukHYzEPNE4UBofXwqAeyHcrvTVvhqah4k9jt2K2WRjbhBEKMAWb7UXxzdRb",
  "key18": "4fG9m3fxmx6pJaxJD7F36dsj8ZEh2MAkrGy88RNZX6htfnTsKEfv4vTfjfwWDHx2kYm5em4bz7Amjgmw3n12qEK5",
  "key19": "e2d6poSCWkpGQRPrqDE9eHTrE7A8ZVzwQUqFuiyDzpbRzUkQgLWghd2UXbiGLje43S9tDTFGnM72fygNW4VX2Bf",
  "key20": "kXd2Kw7vu6m1aWWCjzYxJpdzV6FYsgRmdPjy171y1HuNcfYHbisu3eadScU1eERSSBZUwFooKvBe8mP83yeDpsr",
  "key21": "3BoHz5i2RGbtS7CebEM4jp4pntSyrr2MTPEsNp1NoWB3XCn4jto1HpSfWxHD4LvxZujrqcJt35ecdYKXHtRXf6B9",
  "key22": "3eN7ZzPGbvTs5FQnNHhGWUBoTLNfkwwGxRgU7HvvNCbadVGkLaPSvTyNtN6jCheoSvrCxS7Wdmdj9M1B8pWJ6pxa",
  "key23": "az6NWVF3f1zdcy331aYnisiJsMLaDym8Nn2KCfWhPGgRf5do8MmvhnsFFG3Pt6XsxzZHNh61MHBZz3NjgSXJykq",
  "key24": "5oLxCXnW7Zz86mdTZeLUiZFGmj4hiBnCwPcQpV5RzSimfsNNCmLMgpt1jESHucVVGhAw1Dj7QhS1MQnc1Q9S1QNm",
  "key25": "5rPkMT4jb8ePmLyUN2qisCyxR263oUirF4oPLWEcgi3oZbWytBs8ethiDDhpWZu3QqhqAfhS3sz6svr1PxWixRTK",
  "key26": "2kiosxnVk9UnnnkdQ5Dzm1zGVQAjp2XvFv9csmhJWoWXfNZbpVVcXMmuFP7KEdiyyEQwH7kLQtFwUYdTesit5EKY",
  "key27": "2SvLy8iETrR57nYSrgMhijpymjBYZZNe3C2eWz7cEisLusvfVoWkXuHhzWEJ5spRMbHBCVPSBjxtrhAkdqyLzmZR"
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
