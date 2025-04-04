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
    "4NsGLAbh4L8rqjLqFKR1a8RYxjcTrmgxEHZHR37nTvfBj4T8C8HgM9RQvSEuWMufn7KwHWxKwF2CuGMojzJGb3p3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsebEMJqq9Y3yQ17Q682Qyoeh2N15KNvyNeaqGGF6c1jQxnbwMYSfcdXPYWBd88EPi4T6CXZFAKKNVU1wHesPwQ",
  "key1": "63ByzrHoUaBnMC6vJCFggANMecQuNNoeb91fTu9rDeAW7VhTqCGmp44X89zcfiF2Gav3bG35PTzzqUM2sKKqDeJS",
  "key2": "4pJGXKPpdKt7tHtwdXpKcKFvpzcms9uESs5utP1eQeaukKHK7hpRpeUEoy4wAkr5x71DWwu7twuAJXvrVDEPjdkA",
  "key3": "4g9ntCmG2XSWP8RY546HvVnUPwiNGXD7XMBY6uffdfeuchujTnBpEe2Tp88qLkMU1PomakSau6WBGkZ78ReJmKdd",
  "key4": "eVQQvjuuAcoddFEaWUzth5ABj5sZnVK7dMQpLmB7JVJP2ZoHrkczpT5zUNA91KZd6QyacbmfhAa9cKCnKQkCWNf",
  "key5": "3b1pjYB291Bnp6PJqogbyLZd4RSqc9u64dpHDbagJEAXMdB4wWQwqiLeaZy1PWtsWJiDGJpb9WrVjckqyd3UeXfT",
  "key6": "5gcAcMumjVW3GnN7ab9fh6nVFtnhM2H7eXKSvh18b1p7UQf2XpRgAmaY5ptKPyGhFyUdmnVFqeSgpSzY1T8h1m8F",
  "key7": "2DD5AGD3mR92GzG4aJeZfPbEL83YQ5H7CRxFjqeMBoAh68dAsSpt4ffNX3GZaC9GTQFwWcynUsfjYiroBd9jVGUW",
  "key8": "5Zhcozkx8Tnoy7xRj113CinkAQho4BJg5pvNjk8UmiB1B4eEbVRD2hDNhkRMYPknPXGdkG6tiAWQHKjkms6Pzrdc",
  "key9": "44YhD9Dc5jW2pkPViTqDhbgkVYYjKjbB3KStBUszdguuCqArWo77ch9suLTzavKSN7HGqEMew62bwYZVgC81KJu8",
  "key10": "FTCC8XVneNEENCmTdp7GRTkNmBU6Li5UybkEaiYv27qyaKsaXMpSHXSxxW2NvAzpXDUbmps7jLoDqGsr5k2HgT2",
  "key11": "3AszUD953XVDAv6KX9NVvgUJWWaPUXoivs7tovf211hebx2wQGZ4ReF3o7LfdRtUPNYem1q95WcEp35qAkRJoKo9",
  "key12": "2P1dkzbzV25ftySjcFMdGbAeZRtfs8aQjHnL7mC5MQeYKgShoRhtaQ8BahmGvHyhdyP1WR6AE4EBSRmcPFeEhfdD",
  "key13": "UpPpyYRqyu3gr92CpHj3MwP8wLBf4cJXogUPknFUonnW2DPeV49zBr3wSw2tT7TXQTZ1UPmwnYWZR3FtqmYE2Rt",
  "key14": "555wEARoeF9n8M7JP1EY3iqRBrivsDm46iW4hD1EAUnuHgGAm2fCqyUpcf6qKpmPu9ZijLXZoS1NqswxNRxVKRy1",
  "key15": "5wHYjukEL2XQ3XcKfa67VjLGLVbGwPM1PtBaQSt2dsRSZw6dG4ZeyF2drh7udEmkJUSGw6VsrgsYo3d8AsxtiibL",
  "key16": "6ku2noCHwKz3Er42uWQkySPnvt6wwPzHLGYcW5nGevWjHsqcCEtr7QfcDNm3uczJyZ2iJLDeL32ijKdhV5VSYyT",
  "key17": "5tReKK4RAwFxwgVhxG8TkzBiUstpQeAdBSMM4xUCT41ny3yM4t2gD8Ly4QpFMpumQfd1TJJYL9bUmYhB194boqhb",
  "key18": "4kG6zzKMhR1NFNCV1ShayUcFM4kVkjf4DPd3XZ5XwCGYGiVdFHNUXS1RcVo756QTm5TAkcYAdxPnobw9qNoSTtsH",
  "key19": "3cMbZgcpCYaACZRr6ivF6ynvL1BdxFZQ9K9kpYD3uR8MhXDGEXqUqQKxsRfWAKZKtnjHrkcgmEDkx162jTDTjMqr",
  "key20": "2n6cCGhov3U461QCTZskjoxFYvykfa5FFmXngKLVKu5h6xsBMSEMJkxSy1KxFS6kYh835LZG1bW3gDwyXXtcEsZm",
  "key21": "3SvrUi9fDi7Wzv4BmUz4PgXwjjTuksmAbTwNMXb3ezf6Lb6NnyrNttSsz7Ui1u17TWhePWBk2Ber5Ltt1Uu9TExF",
  "key22": "4i8TfEihNMdgwUdbSPzaoaSJUabwAY9YCZoB9Mxkdn2rRxiEqHAMNM4vRfPfWhPjmhJDuVEHGV6HL6QC7eqCvvpP",
  "key23": "cMoreFTWBaVQkVzEPVw3Jc2SD9fJD2vXnJreX3pujnr8LqAxeR9iSBYuSWduKga9ULsorEcPhyqhNmJVLKhNSS5",
  "key24": "46iMC1j4Ji3rSCTNWnHPfmnGNkDCY5TeuZoucgXHeHczcCLAFtJgLR5Bf8jPYhNvbtxjEHfykzq6tPCJqTU2n2D4",
  "key25": "2iyEtRTbvmh93DFzZy7t5QbGREk9SD4JdFomBw3X1sEYZmqodQVZ1zwkeYNfgBYYNwFCho95BMcK7UyggWwa92bS",
  "key26": "47UGw9QPT6FSkH3AFsFRL2Cdrxhm7VxBy19zEudDYRA9NdcSe2qQkiLEzYPkhvqRPkBmfGT9xDTwQGJWDtCwoKsa",
  "key27": "uUNGtLQxazrbjjjycMbCpAPAHoJFsmtBt1tJnCBuK5EtutHxhm5Mrfm57aMbyon42dW2VwNnMp7PWeJR4R6ikya",
  "key28": "JZEXtotpvupARm538YmEU6t71eJuE6ui4yJwuzEvnbJQVbpgXHnM9q6XWcPECtSiWVviJSw8uSo1MXXCvUagWSw",
  "key29": "3UC6VVdLGC35ejb1NFPfdAbjcEb8LPy5zswHELKH1xVQdmTLQ2hYaRVQYMb7Cupo5NB129iiRnqdLCgcUe11dTD7",
  "key30": "ToWkBsfQNyNwTVAA1Pw5NN8JpACbRtKRMbyicQfNoy7P8R5nFjirpH7wZFLX9jri1VUf2bFsv9FD6Kf2f4WVgu4",
  "key31": "WbSYXhHBn6jJeaYBjyp8agAUTkZUfUyUFcv79g8NYupbPS4aP2jyVBC1eVEoMy142VjAaHyVdpsxCQUm87rv3js",
  "key32": "3QPxbF1GbaSbXxqz1aPqxjhQHecirs1QXuoCN3daCRUjHPJFFXZax95PQWRPT9JMoTeQkDhnj3BNMxgoasBvHooR",
  "key33": "5BdG4MCdxeCD6nnjjkc2oERQpgjiZ3VddfrYyQ3isS27XCp5sW54hyRVXfcHCra4Mqw21ndimYyE7H4qWmgxyMRX",
  "key34": "xxqjBjtXsAmqwkPTs6akWdjfUjNehbYGuFUvFWW4LgFfSFRCsXWXDbCyntVoD5LmgktKoWbod18RiF3TWwXKDZp",
  "key35": "2YGeqHAk9h5B8CR6AYU97djK4tjniWPJWLfzwhSgCFV6PXEvEyNPoGmrdisFPCC6d2RYtsd9v7Tr15iK2PwVVGqF",
  "key36": "2iUMQeuPcwrDBHTc1okjT4Pf8W6pJHrQyaNkjnJ77LpyXdgF3qSaYohzUyzZtiEhGi4Kgda3bL3pbcNv8PQsFq36",
  "key37": "3iwph3oEPv7BvxxPUhE3CZwQndKaNnPXh1abTgysWeG39jtz2hVjC1eQb8FEFMTZQSfrvm8dxnckwDQ1vXo6ssLZ",
  "key38": "5qYGGf99sKspb9zmMffyfpHk9jKq8qQTzaXjcTd3QCDSN7cXfumQ1NebEawJsQ541pwmGmrNhELRczUHGmxgh5yv",
  "key39": "5wLJGrv6U3kFutGdZA8KDJ625mvpHsttD9JQDEj7xznwopLSaA9gfBS1NNYHLxahbykBLmrHHRSWnieRHRxQP4Ci",
  "key40": "41x3YJrrXEUWv9kMLKk3zDiiBuzcEGcH5xbvNEmvVRr9gKiaWWJPzqL6mvHp8LA45sDd3v4EBXtT99mMRtcr5SrE",
  "key41": "48sgRvY5ZqsUCQFJiqBATyhHat9AAZPVHfSMJ9Y36PbEre8LMyDY6LMCPhMy2bP4GHKDu5PUVoF4QnUUPLFPGyNK",
  "key42": "554Xear42mezpUkZUUz9RcoPpTqJq852sPCTbaAC3njBhUjmn6nAweQS31CiQ1GSA1FHq62mGK9X2Hv4drgae5GW"
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
