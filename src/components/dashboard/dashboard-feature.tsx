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
    "NtQ7C9cYeMdRYY7R4oxx94KMg35YaJkSNQGwxvHg1oWXEj6x4WyShN37xt4K1Yp9etzS9Ufv4i5TM3caZ4HySnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YggES6vqUYwNArBpFSrfqb4iasVQE8bWLiwfumgLmncqDhNGBG4ksYw8t8J3kHFozYVTyh1bbNVdQX9na9ZJ6SA",
  "key1": "1AxrZshJ5r16XehgfaFXFFcNzZug2at2ehCWw2SM2DeQnGpG7DsRh67pmzHvuktQ63cu9vXbDcC6dt3MHYLgpwn",
  "key2": "maXWLy5kgHkZQqiU614BX5xnQArNHbZrq3jh4sWsFT4eNrXPjtywrrpyoxHB3WKfoXrYeSwizJyroyYXLH84dVR",
  "key3": "5FbQKN9ErRTxMadqk1T3pbuHPqcw1Guw6mG52RJ7PcNn67irg9fwikg5CaEUdPKkuksheis4LziMH9QR31c9Gu4G",
  "key4": "3foVLBgnV2Vgdi89Xg4ZTxzA9z2Td35LogutGdQoQPow5cDFsAuvyn6MEshRh3HMt1TWGiuiBD2Xzz1nSXWvSHt9",
  "key5": "59zobrboChntX4WXvNStD5dpU4zReKidbSLy3q7a3ik3PwUuzKuSMUmrvHS3PvBhuRU7jRRFfYEq7dhkkA1FXH63",
  "key6": "59zvnZ4wLdLDWgrr4h4pq1xC8RtnkFujGyPb2qgPA53EpSnwmChpukpPRJRvAnTTu2RygDBMeBFBarksJU9u5gPw",
  "key7": "3Cxr9Y6eLcpbS7eVqnnasXmxuHhHCk64GZcarfhoAKCaa1DkXbE24poe76DR9DBbZpWUkezizq1RJevURWUtiyDS",
  "key8": "613ec9h8A82gXFTkp7a3G9Edv1gvmnD7NP18X8JSuXYmCag6XonjArBr14bMsoLKv2JKM4QedmEZgfu6U9z41F2v",
  "key9": "pUCabkoygVSk1P4qBBupLoT79CkuL451dbvMgkUoeYg5fE6YM59zj9K3G2NWdBJUYTDjia9y5Lzktt42PqPsbx1",
  "key10": "35xwmHTEyEuaAeCMU5xTh2fAzRCdd9nNNrsXK6RA2fyDdFQNp5grDwMVs9GF8s5YwTdmTykRiT22z3X8Tec9o3r6",
  "key11": "zDxkwrTD8jkQ2GUVkzCeT5w4gkH7GkvroGX6N8ZgWTcZXKom2QV6zbAgB5N3YcGXN3dBofxddaXDBAdCHtA7tYY",
  "key12": "b5Ra6NdnqgrBmFNYuoZr9apccZQxducoCSHXgKzUjSkbAJkNW8W2T6sy467J22vdLFP7skzRPDf1p8tSGYCREZb",
  "key13": "3uNUmoiMitJUi42EskxC1rfidpkE2vXU7jPo3zexEFWG44XnhZp3t78jam5MDrC1VgHbbQQznqsnvf7wZNV157fn",
  "key14": "4LJpisj17xpmdC4oTKYT2ySAG9sEwNxUfo88j1EeRTHjudXqjRPf4jt2MkVtZeRTmYTBZjTHBMUCTnzLwXUCVgM9",
  "key15": "5XCcEFBfkvpNwKeNHRTtvywnfg6rgQyvnFcEFRo5EwNYaXQ15AuMshjCyibosaR743LmeVjWmgdDrKXvacikQDvS",
  "key16": "4WuvUVbhqwJT7Qdwyz3fMbfNYJt8azV5tdWKs19jKXVMCeSr8fvsfdDDY9SDgJJ5ZYNgBqsuisKLqb5cqngMwS7J",
  "key17": "3pfV391u24L1tkYvTcBUn6KcvikaJvg687Kva9jyTfznVi49WaDy8xY1QJ32qF1uBo9JeKpvah7XzL5Lu2JAYg11",
  "key18": "4qXugoujn57RwnB69zriTrcg8SyXdiRwEJJakk2BxZydR1yME9WTzPLZgSTMeqNp4WU5QwNpuHDKF9bZw8krVWv7",
  "key19": "82dzYHVcAuWEFnmvTJhWo13JgNs7APWfUPZbfTEiDKBf4i5YLKgzRxN5HqLvqRL6Nd4NMViQEifbXa3wFigG7nG",
  "key20": "4wwe7hvhjMLaT4WAxvRyyUc7nrEmH8PSuRqMmmrbZkcXgnk4oZNpuyAt6kAwSfWfJZTj1JJZ1VrywZEngbrJ3vBS",
  "key21": "3qufphgYSD1Nj5iAca6s2dFHkcPsTGswqi6HZPK7MUGbkPnLQAXLewZeS6bUUW8wPu19J1SGwooNNxpgnJkP941W",
  "key22": "2gSwZv1pyiQvEzufLKQGveuTL8mKm1Hy5pDaMaj498GTHExm4hSoL1aLUsc575Zo8zzqSZDfi1HrTRSerG5Xsbw3",
  "key23": "2DToJSDpxQHmrvMPUVtvq5TsDYHyv9RRtfYFBqrwDLipqLczBGKWhpPqcvksh6dL3tPNLTHchT672Hahai6wk7v5",
  "key24": "4S2M78Mr4a4oCVHHJEgxWAVynA2UDQJ8qwFoCTZn4bisvAJSUW6QUTgL7huehkAY81b2cji3jPx6FLMihQtvUVQk"
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
