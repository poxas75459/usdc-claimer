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
    "5TzgibjHouVqN8ZkeE6NrAqcMfPocnyCxEU2LW2W7Rf252BrNT5SSepqWiBJGQQWc9C6zpwuEdx7YfPJNprqBRCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDY5eRFBKznLdTiJeJoTMShBca5srcM2h2PmqF5vpHKKhqQTg1A8Qh1BfAQ4MTAyPgpT6kEWPU6EHxALYkyeCr3",
  "key1": "DFHbUzzEcutF9U4FtvjBbG3o4jpPbg3dDbvdwZMDmCUTRYD4WByKZP2EibrbLrTEfo5GBwxeNF6VWCWbh2bcZJh",
  "key2": "d9eKsmQKX1hrWymDUAsY1gH6XnaynfSXp6uTX7cQ3ozzVBxc1xBkpConA9epmHJWVpr4Wc23PSLuixb9N7zy6cV",
  "key3": "4gJGQG5hDU1xJ579qreTHFEV6YmZaC1jYh1SZ1BHEs75ZWBGnWXhW6i3fBN3gXr3NsBFVTXD7ZixMpDoG1oY2no",
  "key4": "2Z654DCK1o9KEmX9NNXYVn9ox7EdJv99oK4cqG7e9GzB4gKcdY3Kh1HARgUAfsfiszdZBzqETfiWwppFv5LMcWgV",
  "key5": "4fVKDCRy5z1ELRBmCKuu2mV7dt1STGGdCNvxdcf4FtMgQagayZkCPpKQYHZ1DECmSy7CGMzaXewBqsytwC23Ftpy",
  "key6": "3TM3Fmc2NgJY6tuiU5uV1uqNhAeBejaWj6rpJDK45hHfbEMiGo2fg7Y4F5zW7e9S9iuGed8X8EDpusuTZc429DLu",
  "key7": "2VFvYe5qX2h1RenqJK7jmEgMjdg9ZcudzPg24aDSPM5kLsaGu75zH1A9msD5fLRd2oC6uMZkjRbtJr46HYnwFh8j",
  "key8": "4aHHUdiVvfRDuDE7QuHbQV277XfF3EvjEUYR46WbuLMfnfkzGDdTkosStocrtWDEPFPvQWGAsGU7hiVTEcr5kDFE",
  "key9": "51PRou8Yu8qJUNcQtbKXWCCrTRPmAbdPzCR41ZDr2qeV7Aa113CN1LApuw826q8wgLzDj2wGzuJCaBbfW2tpZPYR",
  "key10": "2r9zoTXb7x3oddefaJNUnREDj6ShhaVe4wMVebpVekeemqtwo34cRs6DoPoWc5sgFbH6TGgHUEuuzhqToZtQhDcs",
  "key11": "4EgGC14YqFTuVoKhvC2cqioCwpP15XUVmCFQPN5JQEwP2P9BFX3tEPCEi7RxjVfhRpJ8qqnmUBrdmuhJdzNPD3GA",
  "key12": "4bg6j9tRfrZDyk1qMpHiJbVdmSy2tTCNvtwbvKP7F6uWSYyYW5xhkaDKFSnwwjcFardVH2nTfCwx7ZGEKih5B1RE",
  "key13": "2jtaQcaMfBYn3EnmP5qxrCz6vttz9JzHhHMzm8WsEG6aXPsB6zyCckZicEGStcqTsiQmE8vP51QJiD2FA62ZouKb",
  "key14": "3L8CxweRF19Ua6r7ADzWYCN4R3XEagXyeZ5maupx8Mg2rKWjUUCvHMC7XXNZw9FNciZnpdt42LrzsVaVhSBPNk1Q",
  "key15": "E84Sq2ZFJMbY5BZTFx7um285zwS9qZCvkGscqw9SN7pg4qoRKBwC7hUr77PzZ6TnzzmQ5hVNmWfCGeo2fHkaePm",
  "key16": "3MuYRW7uD4YpAGbcw4bNHAa7Fd47KET4PUYh8djxbx8HHikDSG8GAQHY24TPdjmF6VLvFUu8cfjhA7RUXTDjekyi",
  "key17": "461p9bh7kkHjvMFGsZQBA1HF8ZVfBidg5bPkVUzNNAJDJmRuBhQPVuTUBuhmqc2wCapJzpDaU7PM3e3dpwsHgfNK",
  "key18": "5uTXAwTJ7acxhoVee2gk2mQyLHrYkBfHEmyey6jEYCdX6R7Gz5SXaiJHnNmrfcDeaJtEi1QvNxFRaYQX4y88DdG5",
  "key19": "4vBmAxGvJt4qcsn4E4LjE73Z64iYjnY5akHZJuQn4NTTtRDkEPK2aiLiunYubCQmXiZ7noGHEAmfWx55JrF6oWf5",
  "key20": "2QoSTTVzN5bZ5mcAdsoBJYnn4LrsgEvbw7LzQXrS1mNevRyZaaJ2Jb8aEAk5U7AssW86eWk36mFs81cYhqxtKaAR",
  "key21": "4BHuatv5Lw54B1w6XQvEuLgq8yn7pzBitph1WTbCUTADF6etGBBnSDicgryAYT953Gir52LR5ksCrpHZZ5d5eYGW",
  "key22": "3jaaFgkHJhjLLNA9MXTUUbxztKgCzj785ZHRNte6RE3D2vFt6wd452zU7NDRMb9en9j2jA5sN1vQrWC9s5cyrSAh",
  "key23": "3KPEzs7XpcPxXbrD2KQRNNh3FhudQgJ9U3qB4SjFVopFGnwizit6kmEtabFf1fJsG73D5W54HXvdeRTAP9uUGKhv",
  "key24": "2Lo8KWKYzkinQ1TCz7rq3MyBY8G46QrknxDYzPVgqATgL4WEZPQzBidZ9JWG1c7RvSKusQkRQxEhG8RG6bsBYNWU",
  "key25": "4ifpzmAZiNFYbj5smD6dhamyvq6LKigUbpX73tb6U3byccgfbvrcozJx4HDw9XERCq9HGkDS3h3bTA7Qsyu8Q6Fm",
  "key26": "6b84b7B1YQKHqZkZShM1Qbtk5QPowqCH9x8BCMctGHLW2ABSPpRPhVgRZgNnq9xWHUooTDvQzHcvBVov1axPvBh",
  "key27": "55HtCprKrXGYxnHKXJmpjNigF93zHTuK9dEWpi5AuQV4ivKP4ziqMZPRqqW5spPDDo241L1ifQwnnECB8zgoQ9Y6",
  "key28": "SKDoNKem6qFeLMNngep343EBsAja6o1i9UCnwpbffqctBerXbWY756CxUEcZuM96pUoTcnZeZL1v7EgTyYg2Ngj",
  "key29": "5Qbd6vuwk5BCFb2SG3DWUqUi1Z8nb4TMFnhKTduPVoKbtior3QvtHr4R6MKaniqX2GQvi76wQo5GJFAsoJR7mCyE",
  "key30": "2BLSNQncJagaChxN2XhNud4s4rsZXUFeUHotfAYPDwsnB5DrAJy1rH6Ho1UXiLARKxXeEc2FagaUw72jFuuLEjHG",
  "key31": "5nqVK4RRjDNSL6BuWVDMSoVS7L6BqutQ576unJFEXJY6YaR7rBKoRh4e8zwF4288Te2SEdHhjZ4UbrKEZmZrfPVM",
  "key32": "4GYLUqmTGSANYBkha5kr2jkkGffkjq1doZPo8zNCWfJruXXJnHHL1bfHTcXY6KexYEQFpRUmk2NoBhS1wyeCEoFa",
  "key33": "4wArFD8ZGimJ7oyBz7U4rXe5cTibkVD897aduqz655b569JjenDSaQnfsLWwTBb8ScbdXYaqeXPuK6JHViJAYUwr",
  "key34": "5MT2UaD2yHXYdkbRzLwCyH6oVk6HmKpfo6KxFQ46Y1RVrQDVYJvuG9fH1RdYTqwmMv73RvDugE88yPv3cWaw4Fd1",
  "key35": "5JNQRtAKrS1QVKXq7ph75y1RZzrxYBju7qTQSPRKGVPPHZizeAatHJoemRCy1kvg6yGGrDCVcGQQQLnkiNPDLAoE",
  "key36": "ZyfJcWjMXtKwd9cFmTSxhikiv2DWRBXhbhVSfQhTLMFCNEntcSmAGwnYgdWvb4ATxosyBa123ssRs7poWLE6SAA",
  "key37": "4Mytzf1mp8qTVp64qkCc9HsNsBAQ8Vbo7u18Ee1Bf4e1Pg2wtJL4F97HggeGXLW6e72N6knAamQh1xTh7Jc78q27",
  "key38": "5smLMDpkg2tEjMrnxhXYa1ABoEFQgGUGNNiHR9PjgMw6avgERm1S7xZHxfUN4qnDLCi5Jm1U4q2m5hwpaNs5UsR7",
  "key39": "jLLmSsKStdMThFd95QNmGs9EtALAYJAjxDKJEDBPo1JovamjjbanPseajmGikBbcEMVcUadYAZyv8bfyMcxkFNx",
  "key40": "2b9RZ69kbwsrc1uEqZBMHg2i99JgFia1JeDovudDHGWo5Qf1EVBFaK8DWzFJpYZ7F4q711YvXaZ1GJLi7SBK5s1H"
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
