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
    "vp4bSdVujtAk5RJKPniqXt7PJziVHB8EwmXhY2HtgCxNcthqh8adzzDNMdDAhttogxh8GHwDQPJc2gmPAyBr4rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9TEECeVrd9ewrd1C8UXP2bN57ESfPJpiUHvH9E8o754A1HmLGXK4tPDHHZRWSBmWFzHbUABoDSznqLLvNUtGRF",
  "key1": "5JQai1ZWpuJQ5Dp7nMfD2D8C5XXUfi1DUwtQjywjDufbqDUTvsSfVSxTBZuScazEfpAhHjxnTKQrik3P4yYr88UJ",
  "key2": "3Ax3a5PdU1rcrAEYr9WJx9Dxchhmet8bpSkjkhD3NNSZUNCTKEVNQ8aHTm2Pmu8To27KW5po92bXBHcokJ8qodT7",
  "key3": "5uXGGj85H9jDqFAUwQ9SThYhbEDcrPuvxGw7JpjdHo8vc3MjtvwQGBJwyjKMYfSirdHatZptKUoQxG5as4vMDxSZ",
  "key4": "4RGFWsfpANPer1RbWVC6MyddWkNVR9n5LhjD5taA2ASoKjaGaokTVRtP8UecTyTuvm7urdNadaGVJa8DDGoPNbiG",
  "key5": "4yAUztnm296zPRv2oLPbGqXeFVBuf1DyvYRJfEQ687j9PWtR1Pe83PY2GfPeZoCaxZhfygrUduFZP5r6qRBhC9BP",
  "key6": "286wxwqnJdc7GKNZ8EKX3RXwysUM4gqyWiznhJyKGkLnK1PDTiEystMxe8SR5ZteXvWxPMrA9RLFvsEvxSu9L7G7",
  "key7": "3G1G1q5p3YQdxAMTjSKbj7qbrAQUDCthYbh1xsMcANGkFSR4oPUmxE9FzCWVDLRPkabitoEWZzNG9k6oZAAhtyZe",
  "key8": "46Z8W7VmszXdp1hAvtHw5xPKMWMHxLPJGHMnDe3gF5QP7DMCbL8zYGptfRjqN375x5gXLnHiQkwNQCEp8JsDoLqN",
  "key9": "4MpjCXg8814m8dCRXpDQyxthCE226PSkYT9oQyCn2rnoEa8ZCmrGX6jmwCTYPxy3zzuGRCzYiVUXZ7yimxwFMEtd",
  "key10": "3k8ZwDhazb71eKa8vpM1jcQU1JLLRsFoCkqsmTjt9z8SfTzLeT19TTdixr9CUM8rsCxuWntJM2NqcxwisLvxyhJn",
  "key11": "2ir3seQMpM3P6YFgUUjUfoVxaqQryZwrn6y2pYHLcobndpKUCpxWxFchjVdHxLisgnPPedqsJpmshg9TWiWjmRTw",
  "key12": "5rcgP1HYyce3LKiuHJpaXM11eUR1CXC8Edq4QtUWWD5o15ELjpA11cGTsVe2dcjrz4LRQ3k9KNL3J3tEbVTPAoot",
  "key13": "hmDK7nKFTmLN9oWGXUc3b9bq2sL3S3kxJBHJn5hmsGueFxrDUUHpwwYmbKTJ4bAGQXFvFZhMLhqyEYApyWTC7fQ",
  "key14": "4RDK9CRjKVPRgLWCxhiG7qisJgTKC3zWQzP1MbRJAWCmGwhnJffzn8FHN8LhhRGU2tvDJhsWgiKFMjN9GCepbRrD",
  "key15": "2sqVV6KyFJ3BfXgijgcESWTpUFsNvwzP9g54xr4PCDAU9qM1ShSYpcqvnjnRZSDKWussfsvH1Z5wuD185BJp8kSc",
  "key16": "daDDYWWdhbQv8Db6qUp4zPTNkzy7SmPAb8Vu4zJLEUvnnt2t4ub66ja75jPkf28UVki86B4EyGyrZkhe2wksUKL",
  "key17": "4L2XxEYzsuRUUgfwJFSx3qeNuvK8xn1SNF7nKfkq7s7htr4BzCeXVB6dvzkAHVzDfgShj7ZzfPGA7vVgmFJRFDbn",
  "key18": "25i1hRaMDGbQGns6sDDUoaq5nAPzwctFN8L9dEcY1NFq1FMmgrfvam7ruRkqys46pKmPxhEZKucfBX3Q2HJTz2kn",
  "key19": "4MPJrUq23aXjcVQBsRzmTtDjFthmRtGVZ2gGyhHDbXvBQYBSh1oHMBdGzMuftQPGCjQdxyqEVM8E3mHoUVYoTBUA",
  "key20": "31PSKr9GrsqSK5UQBE2gUfuZpwFE3HK4MGwXo2dqa4a8GSF7JQjeNC2wUDRUD6f3uBUTFPPHQJtKZsqQ45UbNAVe",
  "key21": "2h1yFt6YP4QP6V6wVwyQqrZFxF3wSuFrkAXKD8WaJjKfqGbDtgmZDHFZgC2m2BkRjSZMF88X8Ld6ZmuMPjxymndX",
  "key22": "FSxYf2mGgPfxZzfv3seXWKYKLvDGnNg44cZuFXpaCFz1j2SggmyrhCPvB4FJNMeQhSBZEGkDhEmEydFXjmifqFU",
  "key23": "32epWLRhGDNwBZeQBMbT8YYmkGn4EJdJncmmP94rY6ep4f6fqBs5cctWpd3LTUBVSSrfRTvbYqpPCc3gWzRusA3b",
  "key24": "3vvZj5AjfrbjxZPvjEJHSid4qoMVz9YtFBuP4VbL9QJcXcCa8K7KsF2hxjzf8VzM6vTapJZQ3YN3uSbH6MQm1X7W",
  "key25": "S7ckY3evW9WZapJpcAsZkoepHhmSQPZ7Pt3zJUw1r8sPGwuWvnzNfadXHHydSmJk5S13PufdzEhGwYJF3mDUg7P",
  "key26": "9ETqJQghQWcyxpcinoXW8UGSutYmGZbBvjTdkAXJfBpx2qe9j81fpNwoPRtZMKpGoixMfwsRZG6quHkrADJ7mvC",
  "key27": "4BpyKyXKHXMkhYteGAjsVLw5HTRE8SopDEVyVzg24yVhcc4YXd1hEkcj1NVufBmvMw9L2jNj3Hb6765CPa6gekyf",
  "key28": "TdjNb9KtFyJR1XqrxDuVrYEcHtGW8189dBEMj4wD7MCZq8E5NhWtUdHLRWy9MwYKbPHVTyaZStjJGmM6rZGoHfA",
  "key29": "2kB43k35dGiZyN83SGe51Biuip6SPw9G1Cqr6F3JSKPDcG9BJSSXQm9LERWxbWcgFbaaimCTVTjF9md66Ah5C8sg",
  "key30": "2h7sPzVbDpPFiNR3j7jNhq71BSB53vmLUZd4u1eLnKRBSB2wPoR6GsxcsTh4v3tnGeduxuYHAhf1qHy2tHmR8h9B",
  "key31": "43tAaBMAec7Fy3Xqh9g3sgviHEWdgb2wiet1ghPN5JYdTYgf9eSR3C3nTVEnDr8ta6ppgohgJp8WyftnPxB9MvZq",
  "key32": "4CvC3WjoRQjgxwDQwbAfHaicPfFopDikegjhRmmsfrUfKiTxKGxVXCjEersgUw9CXXJ4ZyihxmrwRX3s8HsjvqZX"
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
