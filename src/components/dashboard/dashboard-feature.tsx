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
    "M1VB95WYtjhtq4qsuTBJLFgkQvFnNrKTbHkgtZdbrKRcdZhs21cWJdPTyPT9ahcx99nYCY1ZfCAHf3KYV4pXufh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyJ6TJ4UTXafGYg6bGjt6jCxDfdLxnGF6Fkn3TnW1Y6T5pS4Gja5nqkR7bepXuHXM8tcgQndyKBKbXeHHsQy6AP",
  "key1": "3EWkxSvzshnJMM9s5rBVW1TCDnJZs1rm8dixLVYC6K198hAyhzQdb863RD4rUxoSPU3kN8ab3W3ECbsNHkx71zxP",
  "key2": "2VMrBrs3AmgKcGT5jkRtDZ2B6N8Mtck6TGVohbG443awvyFZ1rkm3yj7CjrEfdhuhTzosaNzrGY1Lujp4ghJYnHH",
  "key3": "3w7KBfTYBYePf25MSsMpvNxhjD5Wc9eeZTg5t6tUqQAT84rdsGaxkwGQaPivX8BsGR18d6RPWhzqG2oKzkeddkw9",
  "key4": "5tTwtxDCwWNSiguARmLAM5rm1okX5YameWQYP1UqZXoJBJ7HCxc57KLS7SVHQhBpgVEmDZuDhca78xTKSvS6X4fS",
  "key5": "42iBfAUTW8x8VhFKCvRqjyq38SoAJxuSw1STfpkzgyGoHhy1R76f7T3xaeUuyS3FEKuzYWjHc19VgBYNUzdGZVan",
  "key6": "4EEyT33bFN8RssQJ4L8844kVgD9BjSfci1ggioZEXGiqwknF48fLP9P2QMi7hDbVzF2KdXTusySb6Ron7ZNPmCVH",
  "key7": "49STnzafDd8rEkzKtC9RnWngpG7P5f8Tf1PWkcDqXNg6sQWcbs7EJVSe9CUMbdXoH594gyTh5Lp1BNVxkqBL9pLe",
  "key8": "3vGzY7nx5ekSA7depupYabcdRtRtXuCGa8eoZjV9WWPxnnzQwmofJXCukGUMVaYdmcadiQeEPcMoBHEVG77SGV8J",
  "key9": "4p5u1dpsMqmSTPRX7LEmdNtY1KoqgLLPy7TAKLFxnjfTXdNA3D7uL3aKREubtBkNkavkJC86UGvxZakWycDAEVgu",
  "key10": "2z1EGs9wmX94wzty3yme6Vbp1bD7AfGEqgRqz3VSgfE1yF2DPgEq6DN1NyJRZ2wxVjYnV7XDn8aKFedifzMkCF6y",
  "key11": "4d9oKX4TaR5xb712K7bzv37JH4stFSBXqTxPoPYWt1j4pKcmxSwbgaAX9XexD4LRVudimaou42srZEEkv8PqNAJe",
  "key12": "5cnC5LnoMZQhfNz5AHiGMHfR5ksHAp4qoAvdDG6eio4hPyfj398Gy4XpAYsc4g6o1Ywyh6CXEm3PqzA6Mzo5RiR9",
  "key13": "3u4E6qHniKtsJejy9RmvFJgr8uFAEPrHXNgBdscx9k6ucQWt1Njuu2LzYoRpzbKgYhRmjmuoQ44a33xcrQjxircV",
  "key14": "37yZw1kwuR92nRda6MP1uic9TtVEnANoWuNvt2yHGZX8heLpsbdte4kY3wZxSMFYJNC2k2U9tHyhELoi149JTyDp",
  "key15": "2tGfvdVZ4CrLbj2fwsTUuK2mw1jf1X989ykUcUnTY5FJddZMH3mjCqmoSCzqBH3ZXVeCkeVWCUXsDejj2zvJUsYg",
  "key16": "zvUZx6aqdYPNCxw79Ak6qg2hwVGab3qfx9YU49nSoMYoR6Lecct1mibzNZbwharDxZsXLQNm44SECvoNi4DsSkF",
  "key17": "2xjDNjnSQYuwkGR4hnvqL5zgLntUmEcTetsi1LQanxwgbd5EFrBNqSPkZXwDTXgvR7qzVcyYan2ZhuwW1f1fjs6c",
  "key18": "3sLxcembvd5EwMsaRoC7uRYK6Z4duRfkazK37Xhd4z7XpuNaAagekZwuu9sNZwM2LEj7a4kJqsmft6cYYrCeLkbk",
  "key19": "4Nh8hoQoH23SNvZ4vQoi1wVMJwowFvptSFjuPyaKo4hKZBfbaHuhjZgGfzn44DtHVV21kvuZTTm9eZZUqcso33Ad",
  "key20": "3cYNM531c65qCWFsYshcxHQrU1jxucibGRgAv9RqYQ6zymFrAs41EoEZwcXAceLEKBAMo65aAiQarkvcqbfxvZdJ",
  "key21": "5DNRCzgRrYwdYVGhdPXwx7GjNCznhherw1A77UpskNMSFLT7WwiNEonytLRYLPPpMtTdAZG3Ygv91Rqs6kJgX3a4",
  "key22": "2E9UJje8DutdXBveTVSH2ZSFxNkzzjeJ8yRXbjjDHfMJDrUFUPgNEGaTPyEkcMMpGSKkFv7TzKnUJUaZQrij2pzP",
  "key23": "4o9uoBiwR698YQ28FExi5T7EQSXhdkvieeamUnLaaccNBVPnynrbEcRAVxYM1XDTV7pG3Vyh9T9aR1Qc7XqAf6cG",
  "key24": "45MSXFZ4mqJNzikfAk3kFBwSYStywy8Q7jtbKqQgi5Ainhw4E4R8aBWq5Tx7tXzGWRsATaa6d1BF7oNevgv1s3QU",
  "key25": "4v2831ysskYVxRdmy5JejsiDQ7qCcg1VTc7shnnZB2KK5UHuoXyMGWPkDWiYByLrUcB1j4RjopuVcuMyhHsHTcwE",
  "key26": "2qMHwU6EAUwyG85yKsTfb3YdxFzZGehWo7shUfiY3xnNXjr2E3BpPtLNwUnQTTUnEaBZHokoYCAfhRqQAzNG9HpC",
  "key27": "3wA64mLSoat3Wp6ZuBGc7Y7Uk8TCbyAQusJKsVvT3xmiaEvCvzgtioyQ6FNbngk19w2e7tyjTAXHHuySNJMEu63i"
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
