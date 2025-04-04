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
    "66AaKsqzKG5mqKMYwk6UmsYZKPMwoUC361CQyCyycgHwYxZnHTVianVBa3tRCyTFHMdawC58sGCTyp3SN7icoh3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C234xLN32H8JE3hLtZjPqvsjiXQe7bVEmbsX9TJcwksPe5TtBkh4DEstGMBUhEhVNws5qELwuPhDYTTmUtfYNjc",
  "key1": "5T2QhoxS9F18yLwnt6AZRPYuPVJ4Jgo8VRVLZtQYjHXB4AB62gxbMy5oLVs6LiRLs6mszkbG8Q9oGGakdjHEy7X8",
  "key2": "3fN3Qk8B6suJfVRLwfm2zL5PZmjaMBwFAAN2iLTKSejYkP8ZZrkNkd7jPcMNkDbDavJtfj3QeZwrh6NG4T9RSd8E",
  "key3": "4iUosAp1BTEbzQXRXijKjhhKpvKipLiontQMUzBkHJjCcrcjwPs7JF8Ds5m6rXvju34qBttmDjNLJqFqozBzK1JW",
  "key4": "gA4Eq1w2yPDFERpt9yYeLXqFgi28zuKyHy13ADmBSqp11aD2d7V6DvJCRQfJUr7aoYnEjEbVVPdpyvfex5FJuep",
  "key5": "2LJBZaG4bEsz37WgnRo7aEfG4YSgNadCFnvHyHaBBTdv1a8Gas5bBd6snma4GTAzDCmVPg7DvGLaqpaSGMry3sFc",
  "key6": "5FVJeJVVhb25ALEwSMyYr7bfn9WA7sg3APBy4wapGNiQZkVXZVX1pX5yUVu7FAL5SPL969rLpWXYFfAcpnWtUjqU",
  "key7": "3f7xmAWm5SbeWJhwr2pmFDuZdVu9k3wJHX2bVSXzFvVL1VCdqWvq4aRqb1Ea2A3WEsy6y2NSXVW5oixJR5n45J1u",
  "key8": "NwLmfcmRGA3mDzH2grKFWnDPAAU15edrHQSHinSZKrBUDvoPSmxCPM81qz58Gxm38rBKBmNBR7A5jQt3RvsRy5H",
  "key9": "5NaCuRowJzGdgk5j85vKBJpdpt1gTmm5JfRmz8b8b5RyXSWBVio72KfAGydGjW7BphDGDRFiT7zrqb8BaMwNKBTt",
  "key10": "2PSkNHKf4WhWTuUA1nccJ8sT9foWXaSaB1TSSbDfGKzz5vR4YC4S6dbWYwmiBuZZXRgY8d5FzuABEvp5WbKN1dHG",
  "key11": "qcuHMuT2TRsG7EX28krkniZpsigFL5FgcwPSA3PxQ2m3uHQnXoHGftNQS2MCwaKSmoR8PNuveufLJ2S5siKJu7N",
  "key12": "3pXm3zCArPX5Fz3YCTubm4ZgJ94XNUmhXwkoyahTk75r7sxuPAz9LifzPa2jHnvqNh3tedsgTiH86t8B93i8UuT5",
  "key13": "1HQbqE5yvMGPpLbffn4tmNSd8Jkf9iy1XznpaZrq6nFB8AzvTpnnaajjjQxzFb6D5UMqZE6MJuCTYMMCuVpFSLM",
  "key14": "4apn2b5GnTT1QzMNGKEV79tqoAHF9KiYtEg9XSUAnyfKgHXjoBjdK7si5Km24LdwUsnN42FFXj5EYyH9xdwgStDU",
  "key15": "3AG2PJabWPzbbgfzZQqrh8V4HVwPVXdCb1yfzU6kQ4wzwdSC6eREs3nH9Eic1AFN41dU4pVxc1HJj2XiCcjsrXXq",
  "key16": "4yC5UNvUTAYtZ9ZG1gcVzh7Jtt7j7VQs2PiQNfPHC2o31vS3ZM2BaVu9qqy7zAtKDmkEr2aEXZFfkh5cxW7agneU",
  "key17": "DY6mJHnBLu1Ni8uEn6SJhddrufZbqcofdvrAc55ABY2bsXBMm3Tf6hGjZHCJMneVgim1JrTtPFcdxPbSVG9EMvw",
  "key18": "46HC9L2z47LT2EvGjA4CUMACZv4wQHpYZ6yAmKhhMLRD36zvvZ1dfDDuCrhdKwGk1QYoge3onAqZDaaWGQu8rht4",
  "key19": "3FxAgTsVpRA4sEenjsKRg4iSYnBeH327h2QMNpC45ozY8av2K3hH9sBWZ15wS5YqfDXXFeSfikRMPP1naV2wRTnz",
  "key20": "49rAQM57e6JmXA2hyg4jGDiTScqBCuE5pi5WmTUVrubVTfCgGrS56zob1EXXCmTg9QGkgvzHEcbK7NaW7DRKTpQJ",
  "key21": "5Zmd8qYPWiJCrAsJfSoMggyQjcgUP1kmazPCiZJ33UJVMLFxy5v1vezvcMZcSgqnzTJs8smUWPnuvvn37FUsw5dA",
  "key22": "2tHRzTfCMAvQQujmxW63RR1DjyJUg9SW6bywTcswK7ZjHfRa5hgn39tbWiCzH5QvGi2shmMy2GZUhDnWZbJGyLSx",
  "key23": "44HCa2T8gJ4mUU9n8QiW7TgbrXATvFQPfKVdpuhLDAnBgvVJw4dkAewFYUetBVpQJbc6ctEspPUy3zhWEGcwahtU",
  "key24": "uh5YmRmkefM9H1voThrXrqQwJtD3iXu8e8Gwb3DgowMd683xfykE5PJh6U42rXxK7kU6QG2GDhF9wC4Cyy6a9ZN",
  "key25": "2rhs2z4NhcMKyxFyxgPXuS8VXL9YQ5cuKmsAq7eFPKqLeVQzPNkRtCe3nSWuBz2KNtYLhpZ8KqKjvDYdahDuC1fN",
  "key26": "5oE5tZeeQrB5XqcjaiBJxqtXUJQARKTfCRAD5hBzvgeSTNNtdoKomnNEWsXBohfvgCXumZn8wWkgFSi9mtvdPrCG",
  "key27": "CZpSCALx8fa1zz96eCtKsa2NEPGtinA4FKhX7fAQw2dvBE9x4FNHZ9aUSwmkZkLj2eFPe4eQtL4LLUUtyNXCEFr",
  "key28": "271CB89377jK9MDMUVjow77QV4yZMAXMU1xARj4oquFpvx5xdH4ygS1VzUbFebeR9uiy5SNt6kVVDGe5EWPRZPmp"
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
