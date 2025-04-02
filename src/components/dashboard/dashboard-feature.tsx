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
    "BhqZHJFNWEK3sERCxSfkC6kLoiRMevPfT1w1XcsbvSusN7NmJo7K6S2Femt1bGGHSaJVSif4wDxWtgdeLQRqDit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gRvRp4tVxciWMUsXgFtK1iZdzSL6rzHH4FNZXW73xspQUtW9XWc5dtLUZqhr9qFLgg7KCxoRHxnRmgWbiTgMAP",
  "key1": "3dp1NSTmY2yQLQhQ1B8fHBzTEXFRs4DrAuMSgJzjie1HyrqHfVhZvEotPBAuMw2BY1AwCxoPBfJyiqYMBz8G5cW",
  "key2": "5wQikt1aUcpsDtZ81peBY4djsDDx4BZQHBARTg3pjwacGQkRwULBzVE4T3C23FX29eotYyjstszXkL91mXSczpMX",
  "key3": "3nYCv19vbSE3znfv8i9zxxcKCegVCkv4gtQikrzRpUc3e18vxiVMVDUD8xEXJhoNgz1hUPq8g2kQtif4zbE1Xasz",
  "key4": "559LNfwSTPDMizmtbmTjRSfiCnE7c7vvPs4KTUMWfE2QojMg6WnHBEQPDMFCzaWsiPvekGziFx2eB4FLpALEygaP",
  "key5": "5k2QogPK4fmGXx9KuCh1h3Y8KA7VGvF6g2XodqnBkjXDz374VMDbS6Cu7qjqv7DrMpy8aajk26wN1EDTkndgXveB",
  "key6": "5DAJcuEzPn9q5mzCTDkqMWUqa15UgYpoifQjEHv47nVzVUozbFsz5ecUrvmmebNc8ehMyRZeiPKaCDTejMcAnx3d",
  "key7": "5eCdWqY2KBfWT1Nfp92wPFC1n3LNqpDWaTza7F681a2F5UhwRsf9cdX9bgNSyvAGJKJucYzj1WFRNpvX2ASwLFcA",
  "key8": "4oDog3YueQ7sV6H7jccx7PPaqUZkyPCnyYoeE8f6DdKgHs4sBdo5ZSK2viTeqTBHV8Y1NqWNNGEfrdnuZNzuSeKd",
  "key9": "31bmZyDQ8T5YKDJfxvsWEPkroWwtKNPe5P6xoNB7uq9x2ngTZ5VyLXhJmSSSAkvfzWSpivtLJPVjvKvjE5311fgi",
  "key10": "4y9TzbpY6qLiy8eZd7qBq6Q9My5pAMrJuQ6RjER2gHGCE8irdvJRo4EeGUa1ETaVdqwV4J9qpqfwa29TJsXdfPhw",
  "key11": "3cpZYAzT59NWnDYPBsKpxtABxa5oZBSP8dELxkPbAHeKGwABEfdK3Kv3MTW4FMvV698zUFqvnzB2odx4NmJf18sF",
  "key12": "4jzbCBBPQ78RnNvwUSrPjs1V3A5kjFCCAAAVa2EPbakekJJQDy87U25qZ8F1i3hQb1xiJkZKJyifvA2hpkpGyTKx",
  "key13": "3eJkHz4Au8hwnDDrCQPDXACJNUJgRRsQGCQEmMJzHGAJ1HaXieMcQS1wuSxdyDxmBeuoLC7wgzEJncau5zsp78Mm",
  "key14": "5fmmL5BQngkMV3G6TWdBxpSRugtNKjRFVpouUec4J3xpZA8WQpAV6wj26cKftUd82yWxuTmf5JuZ2y9kkFqX5Lb",
  "key15": "3rNGrH9oudPXv9RZoAcLSA87BwcvmKszfkBoBEE779QxDTAG5cgWbTzCtsborKsUWqrZjtsedkLc3ftrn9iDQSdt",
  "key16": "EirfpKnYZnGwTf59rnE4znozdwfMtAJQuHdj5o5fb7vUP1oqcreuLmNinXX7dvdWQ3pMUhrtE5A6598sS8VbAS4",
  "key17": "QnWUz6s2sDdzsnSYKgnJimNMY29NsuuqGcd2HQv8u4q7L2dBSDaYS4ZjJVyXjF6LTAhNABVaSHBBzp52kGwRb5d",
  "key18": "4g5QKaWYhKhqVyijfk1EvyPPotoxYGsquzwgdMFag7QNYk859XBEeWuNLJ3rgQatedDuE2CNVC3CbYLMi6RnuxML",
  "key19": "57AqxzBMpNgm2vAdsZgHnDf8hr5Tk9mdUGdd4JCBoDutfsDZWikwvkEk89yK9nJ5duTDbm14djC33v7Te3dVq3sN",
  "key20": "mbV9bHppvRb9Y2pwjgdZRfxB86Zk4cmg2XmUuX23XxqscywdRofv3odeofka5K35sbDpzSX92i3iLEu4LUVznwg",
  "key21": "ME4rEQ4LqypM4ve3urfqRSeXJNVkM71Th5zNonthequcXXkNCQsyg7roABaEGUsGXGWSS5jqvWveeGmWTP2N1Ra",
  "key22": "skuvHK5FoJpnEq76RSWUXv1R5gZGvLqDKdvoMioofKnQUKQmfoGjAKeWKXYbdj9mWJ9zFNaZGFnicKRnfgyfHxP",
  "key23": "3mVS6RtSVuhcH8drJUoU6cyt38P1VVwCPhaJF1ibZGshkNMdtHE16dd9dhTtPFT1x4t2hM8n42q12dVu5X62hXJ4",
  "key24": "ahREWznoq1cHHzfzBHrzkn8tQgTWKkXkB9EvU61RZmvKtCdAhENothryi1zGx4KCF8jESf3DVjimU9Aa5ij4FNm",
  "key25": "3YMSkL14PEwnsJ7ptvreXtetKYyNSYDhi8BxoVxCBdi3T1aZQ2Mtj5Bbwt7JChYj8RDQ1kQXA2cbqU21KBjqUVMS",
  "key26": "fZHb6HpXRSCTynmjkcLfSEkc3t1PRp66VRcXrUFRXvRdJthXaJ4e8s6mvgeqN7SauavUzGkiB2MXWkYt56uuyTX",
  "key27": "5Tj4N3MxiHHVkRvG7pT8xSo69GPbDKNRBzkFrfQNsDL458NRBo2ASgNAEQZ3vZ7SkDRCRQ4K2Jeejcsdh9STSpjp",
  "key28": "3JfGZmWTWzh6hBeEwtAjCo1D9f6wxt781xijuCY46jM9VJRJzU4ST3ax98y9hz7tPd45VQ6EBo8zVGHbe73VncYP",
  "key29": "2yFyzyeTLtUfcD6WDJfzEmKTMjcy1gMzEskTGYLbqhx5nnANEr7zNHXZ2EV9zAL8jYBskgg1xyEJdoieydzkwFbd",
  "key30": "4eAdLCWAH51oJtxRxETAwee9tHbdNZxv26n7tASWGEbHCpadLaR95ECPJsFmGtTHZ2pndf77Nbrpey3pW3Kvrh7E",
  "key31": "zJgE3PcwM9dmWtj7VuVBFxXGCbV2hqGYZkMd4gsWydfBrqesU7T5RTh9vTDBVfP3qLKAx9zijj8URo1qzf5wXFG",
  "key32": "5QDaerXTMYKqPxdcQLkWdJWvBjtJtJSWdfyrs5RNuu76vKJkiwfE8ssaW1tR4phDdUZW9K3fVTdtwYtWyPVSf6s8",
  "key33": "3avnDDpi7osbLsUMMkwLNWe6W5UQDt63rqZDRNZPXPTjNxcm1VJUYQvNmtYaT5pLmfDo537Ytw4hLkKwANJZNkrq",
  "key34": "4jUkZvk5FiEX2SHdQspaBujypD9KkEGaAWSDr6AKLjSL7JJMKYB6ybxZkX2JmQWDFVRWy7YjW677FLvya9ryDRV1"
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
