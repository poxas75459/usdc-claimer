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
    "gsm9NFDpmvQ5cE7cR6ZVcmTbvj29WsamshBUXyEJ8Wg9QZCyHhUgQzKwPuB2Qn3MJDyBqaGAH59BZQvaHLawgzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5rscVpD3T2Ch6nskwffJJ32DKrF1tSwLYqq9v3sD2ZyPPtMkQ4ViEaeouQqfgNG5H8gyztQrKwZHXK64Z7V2EY",
  "key1": "43yRi8Wot19sKWB3ZpiQGTqerCo3Wi6u9F8ymG8ZKi3VLwwLz4dsB11uQR5gkxvjVYfosYpLykSb3b63LdU5gKkP",
  "key2": "3rwM2t6Pa7r79L3g61iCHRNEY5q3TZhxAweW55aa5q57gR67Cy9Dkbuxo7GBodfBvuzqVx1k7u1nvkvWMMnDFRz1",
  "key3": "2oHCsa9XqoKwEchhibu8CccXs8BnJdhXoiV2SHsbGVEgeQcAvTCWDu8ZCX6bPV5ovrgv3foMYtbJX1ec3yFhs8uD",
  "key4": "2uW6WZVNDX4j7tu9oBNtUjdCBWMG6BEYcMrcAL6mu6Ri7Ew2MdNg74PUzaGRKYZcKWUJvpSgpEg2d2nC3XY9sHd8",
  "key5": "4coYdxxzi35dqJRZcfCvsfFLfoVNAuNEPsD5Kqb9JKpkqWd4fjQzto3aMorfpnVDnwSwN4NrfV8NUDEs74u8MeHH",
  "key6": "G8kWbhdxC9vYwZPyaNqPPNbGoMNXyDhdPE86FS3wap4XgV1Wgfp7af2GNb8c7w3gkbmbYz6PZ84ogpfZLVippZd",
  "key7": "5BTHNxWQDZV18p1zTv6eLkFz7EmS8YD3U64qvYo3bXN8RphLW9Tnd7EwJVzr9stErMUjbc3jnuUDujBugasrcjMP",
  "key8": "4jigYhhG1LuQqEWEA5gyLFMhiS4jpotcJihY8MbZqzfUmPaRWVSVe3au4Vvrj7b8fEKnoKjrZFPMJRzsBAi6g4Ex",
  "key9": "35kjEgJvSKtFt6haCYmh1bMeoUgfuhPz2bKt99PKdTBxdYi3rRLpPgW8WwFi9HqQLvzcn2iATFdPB7cK1tjFWP7B",
  "key10": "46vuCikqzFnHcrqqoDQfKK7R7DtKVswDkLKAEGmBVW89wuPMJW4rbJEocZE2yjYJjjxJ7MeiGMDVcTw9ARy8VAwL",
  "key11": "i9ywnregiZf8w8W6PUViAzREJPrfeGv6SqKtbqN2soMVWJQ6eUKDjGS9MTCoYNSpHuGgt1mEu5rQfrcj2vVpu7B",
  "key12": "4Gi88F1QWyQQd7jEPfFNLAv84Kx2o6R1eNccojPjwoDoy9kzt13fZnMyZz4TGjCZo9QV7bB8SUgjFCsdSEnhQPuS",
  "key13": "4MV1n2zdYFDghAqVreCtnSJKBm2YG64uYJBPip8vH2ZfsD8DPAqbRxYFN6WWEYG1bS4VS6pQKKM2npdrj9WKG32h",
  "key14": "4Gwim9Xn7H2QzwrUGV3dRxx5dzTAu7g6H5MtJeo9tt24GtC5VzsEoznQbsUfimrNKhhJiLG2atPwrpsD1tfKFFCA",
  "key15": "4UX1vpmCxei3a6NJ1fTuSYqTiJjZ83p8mFThQbhuCyQ7qdf7V6sfmB5mxdsNCAG5PiqijgkTdNNbH5KiqtgdqsiE",
  "key16": "4LzLSNXV21grMJhpEWUX9gowpEQGcTj2TRdY3DxAAcCwR5NVQUhJEKnsHzizd3gebDA5m2SoFV66RqXpwymiuWMb",
  "key17": "4qb5bwfTYyR5brbmNvvnAfBxb4XphG2F2966BG1QeZCZzk6Ew24ZZQrsr5fNKLN23XDUrrv9bRfz9oXyNg6NQzHf",
  "key18": "PH4opRG36kfN35nXwS6aQwmvKintCazswhG8MYgfrFNCmrgR3YX1aejBAHPMzvgVeFChuLSaHPzUFKZ2KBTMM5N",
  "key19": "5LYmAk9KYebARsBCuPDqj1NWnP1Aw2ibui1PtyRufRYL7kvitn1ZeCwDXNoebXnxjheHWjDSUyqHPe9FiMFdZNtG",
  "key20": "4SBMBVM6mbPcfkyihokb2UtKrK73owT8Yncn6841brkwEpTzFPfAhW91qNZTQo92jGC3GQviiMS8ZG4pkHXaJovw",
  "key21": "xrikT3tuGzdM3iXumkTXp4kLQTvFUeY2V5h8LMwW22XSZjnuNCq8tiCcKAuhcqb1kNEPj43pxvbfNRXTskEbEMu",
  "key22": "4XnekS5kcLuspNydwBvVnG73HNL4AYihQaivggKAJVMseQDC7tkRzRbpFAgQkRMi59fNNyfpspt5U3pGezkvn1CN",
  "key23": "pU9iUwWYdNoGpoHfdWdbMYh4R947VjSu5jZfTbZBgBwX8N9t9ECHsqsVSjV51Mn91daFLRZeSk7JqX92pM1QmWJ",
  "key24": "5TaWzbNBzgjJki4RD4v8FTzwMk9nd9hAX1xdGBQzRrzeRHLERGgMuku46GViU5JF55Tgn59ywMa2LjNp2N47RzCc",
  "key25": "3QCYxs47X9kjcxYuECnxaDw63EHqjhD5HKLi2iCrtPWVChXspcyaVThxB7CtXxFZxUEDXyRmkdXMZnnwPetRkao5",
  "key26": "38aJPNWBUJPMtEzZcKQ3hhcdhCu2pQigo6d4b7GxboybuYX2JUMqj9daX8xbcSAJnDNY7iU8s6KdDbu2wC4nDHvY",
  "key27": "AqpueeyD7PssQgNoheE41KtRAcBKaSg2Fyjo4bP1iSPcW3Sj9irBBFjSJr23LaGLsNqiWsGDbctHPi1J5tM6Q9s",
  "key28": "2jc1H7XdFaHi7janvr7axZt6FcZPLu18tSMTfssi4y5435VyP8ygFYCjvXEw8FsD9TZESVudhdJvHVfpstB5hMLz",
  "key29": "3jZK8WL1FZDuVEpF7i2rZ84AuwHpL36rXF85aSGLKyMMdMNWWPpNxAhveSRNZtEE1YzS6VpF8eZ59Wots5gySPnY",
  "key30": "3YS5HWLNq2pez59hxKrY67nvKa9p2fvB9JLEi47naxB83TbkGVQXdifbvhFySxhGmhutYFx8noDwMiybvzGpRU15",
  "key31": "2Qc5BuvaPSS4CKE6ti4G7nEzxB8hdSLnkg1fcNFQWGUSckcVNntfhrJcNN9d7zpUthc89bncy1Kr3qwSdv8VitFJ",
  "key32": "3WsqXB4cx2i3dzAPyeExc2tu6xETL6hYutdZLF64aKLgYMEFCpRFf8xonLiXof4FPJ5F4wCKMfXu2jQEm2A7A1KG",
  "key33": "58ARhwE2itgLXPkaCUDhdLFrZWE2mqpuUwpHVUWkTnqPYFMFTqRqxLwyVdEFJyux499jQtqZNuo6YoEWvzyWTmZ5",
  "key34": "3xkQsPb5GhckBZiQYC2yioGGsndTx4GyDPtbX8p7TB1sUgn9EC2HiRXWn5YLYqbMFGBNdYUBPKZLaCjGEJ5UXAip"
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
