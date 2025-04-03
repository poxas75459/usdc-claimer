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
    "pn4Fg6vipSPFK58bw9mzog65EytvANyyrck8Hc7Xzou5zRFLup295oaYoEtbKZMLBz9c7ghYg53x9jfZfToxkni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJR5kjZqYutjVz3uLwXCtDXEwWEmHX8Uky7wdkKdPhuwSVMrKK6AmNdZvj5SfG3erW2KQBuVa9syQ5eViHsXCxy",
  "key1": "21axxiRfw6omLvEc33VV8kcLiPyiLSDWVetyR7hJFHqb5VNdeikzq4VJJDofS45EvU3x89QaXdnPTDWnEPoATQZf",
  "key2": "3BS5XQJGDxqw5qfDH7URbDL382XEsBTtXXRj8WztYoBizCuQQQTd5HrG3j6Ct1QdHhGSwDJghYvdbg9R4bVbx3Zm",
  "key3": "5FfxcdTGv2Z9pD9G6BB5A2rDYjE3qoatQDfMevpnV7ppF7vZgmfous1HBZZD8aHCfR5BzSpJ43VVKFjVATg6ggc8",
  "key4": "2BmDVHc8DjTAs43NMj9uzMmTGK77B4cZ6Spdo7FezA1NmWRpkzcLsVKpmU29MrZ1Doy9sSvdfYJnsyPTKDMgtRNn",
  "key5": "3qGzUj5YYRcFXqAmoCGN8Srtn1jiGyJKuVysrpSvhvUHDcwwTLq2H85rj4B1xDKWTLpZJropAaAHxVNASaZibbXd",
  "key6": "cTbHRsE2RWShns3frMQZXdmtJxwP2Mgkt8KzyzUdVcU1oEhLg8bo1LkbYRBidM5Vw3CkpMGE9dUYXyP9sy5Du4f",
  "key7": "ToFgncGV1p4cqnEwQtmtBbtRSpD9RkabMkV6iAAxdLGdJPoufmVJiShz9a8AxXKCzpEMVxfTDV3qvJcntzQ8wdr",
  "key8": "2Ds3RtqemM1mx6DDqjhrQKo1WPwMZz1QvMF24Vk4msyXZrMYXYUajnhKk5bSMmCvA6itEzMNJRCK2tNqD7LBHEBM",
  "key9": "39EA2jJbijmKACeAgmWbxbC3moXaur2YTp6HWSLDgTNjdAdxtiQNkzTyGB5knj7SB3L9i377bDaeGQcxRpzajgT3",
  "key10": "4BKzkhYKa8X65wKeCruV2RuCJBLjY8tr4LpoYqrfhZms2J1bs9Jo4L5biLVxMRBLrDTYwqcwdL9UaCrQMiQYqsZT",
  "key11": "2DupJKmViUBm2bXi4TMZSg3hPJuCtKzqGjPWRVkkKHRTsLa3m8D1KcRE5cmoVaxbPmTccSKYvWtSw2ueR2PJagMQ",
  "key12": "4PUfwHqivP95Sikin4Z5SfiLHQ3E6DbH1rh5jj1sGdX4obQLxdRz7NmpkNXNCjhzvNYwApE1wWGV494PumcSywaU",
  "key13": "3sx9gdUQoGrmWTYpDfC8WZ4dDDJoXP1sdgHPzTjGpoKyogBfeYXUkrXR6SQQ7yheCCCHf9eqXKoase8UaGFwG3pq",
  "key14": "5g6quK81h836ZRiwmL9tpdD3jimUAdQiqubiWbVhDtKsLMy221q7JP7t9MEFVeTycspbTxjk1yc64JDVpqJ1GD5Y",
  "key15": "21sV1n5t1oTTU6BNHnJsavQvBr22BtuH9dkr66E3pKehVvgH4qS6cvJC4NCytx5qYDRcu2CdrWcrPLFvDWBE7v18",
  "key16": "5KbjUT3TXvbFq9ArdVgRz6VPkukzkCKvTsQcVftAfWd5xZp7ubieu1G2xeQQ3WzBcKpGVGKnYaPEz3vqY5uKeMa7",
  "key17": "2J9Usjv7yK5dUSyvEnFHRNbjrLunNPq5x7P76j9HMKzjvFGiYvWZLCsqqBb3yFcbnJjhD1Hd7CykNszk317T2Ect",
  "key18": "5GhMd6B7AHhy1k8dFAQS5h5JERwnVUuVeiTeWttpGfxEgcRL6nYJYEAWinq4GgJQxcUZMZkAVuSipvh8auFNBs8E",
  "key19": "BmuGCNGQGgd4tfAnbXRuK1KtM1JnVAD7PbjYnctvtrqFjyvkkw7Yt3VDQGvrRxLp5seM2PbcZo66GxD2LcZ1s8h",
  "key20": "4ia3PzJ2RvXB9SHC5kJxfrQ23nGBFGxgNfaQFtZvXbJP3ksm8GB9c6uSsfSERvJvbey953doVnuakW9BJqHpMsKL",
  "key21": "2CCaPgjZsqk1Hg5TNNMKQqxfobmMwW2zCEYiLmBM2ELMoPe6NQY3XNbcJQHsvpgPp6HwhVctfNnXT8ddeHF8jm92",
  "key22": "5a8cxutWxehRumsrAY5ZLVCQf28pxgYHYxsJgbHku6ZGqk9KZBzsVj99rXN2j3LP5h5hwPasv9beX6CRgHSSNQxS",
  "key23": "2QFdfYHeA9ZvrL6v8axkJU49wNNAn2ogxME6aYtQ47xKZR9Z6kJoUP8kjuXqGzbJAun9z4D1cXVyVZnwCemML5Ug",
  "key24": "2baFXMu4RM39vvEEyEBD34MSSAHFr45ofivjWMGMtcozReGtCMrVdfHoeD1qfhYBJbbKQEbcFMUbPvy5rAfiKjS7",
  "key25": "5GSWu7Cnznc8rcNNLDH1opBVdT4kzLK7Ni262FcSWyUC8ddWYtST9FKQrT6co4uhdNWbxNj7PrZ3ccQ73cCGDX4K",
  "key26": "57vTu9ru6UehfZM4TNrZ8v1ec9EBs647euHvWutXQSEReq3Y7Ze2psNsG2TWJiP7dXKrCuqroHxb8msLdJ7FQiQL",
  "key27": "42Nw6WFuU7DiXxdEu64BZWGCqEUJkLa91FP958RQK5dLPnNb7SBpHnyw3TrBVULJZ4PWGBBkHCZ2v6oA46e7tDyJ",
  "key28": "5WCGxe5X3kNWxjercoGu4Xnkd8Hv5x2rCbkfx37pzxFaoViQKjBKKikWuJ9i6fGdjMVVy5cVY342DxgH6gYmcjjV"
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
