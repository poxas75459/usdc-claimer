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
    "5Yfiq1CdxjAciPtHvkEPkT3kqiYwY8fEDq2CL97ddUhEyg58p85tokxVnKQQrEfiD2JittxaAqhpSXNkp9L5LhyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUVQBp6H4VH2v6G6tGbJB52FGRu5zQmdA3DMbh9aM7S22PvBAFZhxCHAfcXWewr4BhSChLjinKd6BLzJfQVGuVW",
  "key1": "4m9eYEYVuurzDQVxf1E5dKkJjbkB7CCnroCdzt3CNoBQhssGmjUoAsnBFMKsswGky5QTtLqQzqp5t5HFzQ1uAJyq",
  "key2": "YNznH6g51vzbGNDsQAo7tTTqLGxgy1SS5NZhShKvKpmYFVu6feaqLb4dxbZAZ7pptnQDshzkHhR7ThRZzuXsATS",
  "key3": "aC9UAZj1CUiWwwa9wYvWo47RjeF5JmyeBq31F7YJgYRvjUpquC3hZ4CnHUN5UT5a3vyu5PtxYpCCceJnnn8taFg",
  "key4": "8mytovyVFbaXetF9xW3Gxh4UAQwZ4p65UHF1faQEqVsdtC1c3S5WVHceEvzT7va9SGsEeoQgjyvhhGKyBiKi2q6",
  "key5": "2LpykSJJnugBj84oDCHo9VWfgUFdzN4RQn3bkgAbVUVUVE9Gvh2HWTgzqx7zg2gkeacdRqMxnq4RaJy3mhURmhJL",
  "key6": "65pGscWRWSMgtTfbGS2XbVJMMPUgMrQfC2G8qXnMFvQ3GpfGvRZMmb6CAsUHDQ6iezPBHKKaKYxhDiwKLeJPqvZJ",
  "key7": "2xEz8CHufwcrfn1QU5atHndF61fmb2AvsALvkg5QJ9vWzbuMJ59WpDAzpZoL3wrXFdp9sFAyXL6Q5khtQdpWtTwA",
  "key8": "KNC9qckA25t6Lp6mdQCDwSuvn8KpCTTDb8o1ibfdQRdpLzqDtQiYTW3Vm4BZFytepGJ7uJjJLeiNiJP7e8nTQ1M",
  "key9": "2h4z2QRrkJYeRVzL2dtxYDjGEPu5jHWBSY3XHpw8nWohHEmGBGeVWy2a8pVNWMSUwRuzGfWgKPCd7Qak1uAFgKmr",
  "key10": "3saGixqFmML2zrn4Hh6VtMcYdCbMwsvfLZzNMicD6ty6Tp2vFetf5zdyhkJt4qg66KFXLwbriC14gAbf5gtanFKr",
  "key11": "AvRqk6Jbytuv4ZxJmHm8PhitPRocBbZBEUa1h6E8NbbufbE7AounLgWtyXg2YXwCpeWa1hoXjWsBvart5QZfEbi",
  "key12": "2gd2zsMnR3BaGmftFr2c7Bi41iF1MTFk1dZWcBfxuFh12u2SVUnMjznA17uF85HXaryvE51HtXAxF6maDXGpyfK1",
  "key13": "3oH4ZYG39s1M8DffY9uvUgJ3B9U5f7ae8xps7Tmf6nUNMoDzntLycvat8iEmGXfjivpENKouhehoa8k2nLdyEAR4",
  "key14": "3djsqwpCx74eQmWnFuofVrXCzJZNzzNE2LWEJBAa5QNu4kDmkFcEwKgpJvFrtD6bSP3TE2Gt9DfT2oevuVZfrPKo",
  "key15": "3WAEcvbfX15UDLbgHtWKQLDKcsApLb5YDvK5KT5foFTVCazi16JFhPDUHeBoJVoYwYUWY2vwXyxD4FCR4kwqARtg",
  "key16": "5Np2PbjgG8hTAzCqTrXq8ooPwGoJmn722HnCg7EGweVhyS1q2REAogaiSEcAnGJG8NDRZvmSrDJt3KwFcTGjpiUv",
  "key17": "35T5CAYHKxxpgGsHgoyqHz2M9KnEiQuocWV5FQBK3ouMeQvzoMVHZLSdBnp3SMA8NqaBdiRBFSVQPfUgcVoVAKRN",
  "key18": "2iqiWeFXfUXhuD4aUCsGiCyKMc3w9Lgfe9tygoagviGgNN1TgmH28Z66HvwSWWiPrYGhgkycWfV56CaGBjaTJ6wi",
  "key19": "2d1ojkahYdmsbLHPsnWv88eRonZtyj4V8Bu6HrVGbfe1bsJg3dc11tahuRWGiHFpZDaAgccoE1U1aK7YMbZSunYe",
  "key20": "4crbNatRV2bbdDhuqJ7YHztrasmLPwWoRy77TZxAcLtsqv8VqquHBsMwYTMRRiuw72aKzWSZ216vLiiXCJ1QT3x3",
  "key21": "5LuPf7tpnQZeH3hChbmUcf7Jz6dC8uCbJE7XqfiLYRozyzUgkYpq2tkLY3bmFXQnDi7w4vAPBbvo3GEeuVrxz7T7",
  "key22": "wBWM1bbVkrsjnf4icb7jo9i3iKKWAbxTU2wi44tHxXDst4DXXWxZNbYWibDc5yvYRXQXo2heyVcxi1PYnKnuPzW",
  "key23": "4Xg5EaXre1uQSTXnXNF3yCx4PgQXAWJtW9dqG3VZbpB4DaFcPQMAUMTuhZkvAvK2ZF4RJx8J6AnKVbfdBreUD8o9",
  "key24": "5eAHJck9JGetwmUj1WcYjX5Ek9tq1eB6ZJkNnnKAGQCgQaxoqzrdjD7pmFck5DpzuqfNWKacaW74zkKdamL5J8Sy",
  "key25": "2V825YgKMCM5Rg6cHeFxyvfnZHv4zABwF9uGuq7cd8qJcsCmS4afYAVDR2ynDPDHQD8zUR2GhgTzmC1iuL4mwSiF",
  "key26": "3zbZwLG2CmgtL1xysHGcRDwXeY3UkKV11VpcWZy1kaeFgH9Po4bPi2gqD1uaoPgUWdVYckVRa7yikvnnHXKXxEio"
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
