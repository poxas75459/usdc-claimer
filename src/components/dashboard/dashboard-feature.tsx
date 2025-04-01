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
    "1D9tWPrqtfTiTkp1vcL3BAxDzZNSFyC2VtUKECjgixaJDedbADutWFoxnXSJ87aZoZBwRUaJhdnStPS9U2tcWx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHjLtZXmxaQV4kKfHPESa229DuoEzUCnMgF3Pb2krZi7CYFk1kn1PtqucdY4zZyLz9MtS4edEE2ENSMANdoRCe",
  "key1": "38ZQgp5CuNMTe9F1RxaPJ6hR2nw6mDHnSVivXFEgVmZzB7Jih5VgZmukLPuqW41iD8scmH4k3XF5euvP2bSzR15h",
  "key2": "uJCaj1ExKMbFzACXjwTCQwYgebYVQ3ADLqCHPsQ3ZjWzxNPeeCFHF1otyxLBScHMQ9saVWG7Aj5JYpYq57QK5cT",
  "key3": "5B7JBJ8xPnKk2fwM6Dn21tMAcbSZwsPeHn4oTxe8DYZUtuU3z9aAaZiDbWtRXVUa8xaxueiBknncX25f2KsEoKUr",
  "key4": "4wRLKYtdzdy6xgEStidAjvsXRRGiiaRBRPT6HV5tGoZk2cXWLhrGN9sVNEDnMeUnQRvJr9CuS6C9ajffC8E6qtk1",
  "key5": "2NERMo9be5NvrzZQMFqcDKkUt7mQnBLFA2MnGgcbdLCbp2ENWSrGUXEk6ENvXBi4TaPH6haD3X8e5Kb5PCtxkmzb",
  "key6": "2WPfCNQu8teTb2ATJVNSZnPB5Lxowj5fRz6Qkk4VW7t3QRd82z4WuQRyCvSJojo5QgwBBsXyuumTPBV6ZCWzPDMk",
  "key7": "3r5eXWecGwDVA1wcGZh9j8U64DPzF1U35TiRZhgofaqF5XYwTnU6i6igwcgmVmn6xAKfsXPuhSPJixURw37qdmna",
  "key8": "5mcNBXFU4gQ1BohmMWukbNf754XQNgmPhxz5RaX7Sjbt5aBGRKpcuZeypMbkyzJ5cKvgTAEj8KQGhC1XrsmyxMDz",
  "key9": "4uNyCTtFWSQ6VrwnDeHrzBTnDK8pfarU2X4DwAK4hRKnVFc3JDraSppEKP4og4seYB5paJ1BwX4PmDehn5jBkdro",
  "key10": "4PkS1c7rwLGADppph8o3WjfkG3mtjF4cTh5WSVaZKTZnSwaNAjvtaPRLangXoQftVpzzo9UstBAjKgxvE2QuX2UH",
  "key11": "4NpCNUPthwEaWYd4W2VMgYpqXB3qZ7r9VWbXZKRvBYL6b9xHNubnuqGmkS8bcY9TEmY1z27EdEsyLcxih3LKHp8q",
  "key12": "26XvbtjswJdnzSsvcZe4iHu5S9GRXQcC1v4DXrrb3DbAbkfvMHGJgRoxTYUe5z11x7Da5Qw3TLCJEJJkvtfMMAD5",
  "key13": "5wLAGeeoFr9hg2NE71wiuZzoawrB9hudKs9Vde4kUr1kdAtLEbct1btCmXNgs9D5GFf8fM7ZQKBBnXWpzSV8bRNe",
  "key14": "3TGhsJ4m82cF9GNzDooaY9uHTtQXGunMx2mrFPDRJRvNTsa6TnJpZLhtQ611rtsfP9NUjjNaAmS3KKFkUQ6h28Nr",
  "key15": "5Ub5AkptNze3Khbd5R9A9prcgwfMn8p2tMVHkyo5A6NDLqPJ8QyZAWZoBAGDcnMiP6RT7e2T2i6FP162BumA5d5Y",
  "key16": "4y77ENsxr6zW5xNxiGj74X7EtnpuMymbKBubCr1vE4KuCEzkDKsaQLse22kaYMxjR3wXtnhjT4TgpKTPdeAswgpG",
  "key17": "5KSLJZxyonxW91h3vAvTzP1qhQyUDrCupmDVX1hHSUeDr5RAASdS2NHe5KbrP2x7XMJoreBz96UGmaK66rbnY5J",
  "key18": "92fPrRLp12EnApUP1fqMDCkH6f7n8i9THxcb59ATEjEukJ6KDqQJEDrZXmBaCumkBvd5f2Umbh79CqExUEEM4Nf",
  "key19": "Bd8YQoP9Vk4vvnZYK5eyvFy9UzQWGFyJY1BZTQ7Fwu6fCyFrwY6o1nM5FXQ5YUJaDXfsTpSnMPr7GT9yq4KnFYJ",
  "key20": "CdjQxzvAZUtPg4BDGWoAMDba4wfKj1rKHFhf5PKsCyauJ7a1iYPrkjS3sMhDnY9Q2dnjjkWY1hWooFajp8oUQxa",
  "key21": "2A3yFZEBxKcNMwMUDaSMqSa3LQD7msAvpTcHx1zDsewCbZFqDhQwuWJ3LC2ZbLKnasMgFcHiob34JtCCn977BFjc",
  "key22": "4D7GmZx8pt5JkaSKEfQCzmq8KrdGcsno3NnPRw4Ju3KSBFoMpuPSV9ZhtNShxNXCeXjcZhjKsHLgyY1n9UDsC57Y",
  "key23": "3VXVCAGczagoKBXWyjqqjaN3wLjKQWqdu4ZUARGyi52VFfaiQJ3aLhUhJ9ajGXoc88BPhmBFGZCNWzo7iEAWBLnJ",
  "key24": "2cYMfN9eW2SVQfqCi4marKjGKzPnW2N9kGCU22SoEtWkgUn1HsiYJKrrkyRfWyWXMxVU8efSX3iuHks4tUAuHk3s",
  "key25": "3hM9CDvgze7GLaxxdsp4FEhW1WVfWTM4H6TGhG1zeb69Q9EocaAM3CX1dgRwSGXDkxNHd9SGoKvWZ7yjHwUiqtNm",
  "key26": "5AB1haKbKeKTVbSecVd2d51JBKDu87BkxZ7YxafWbDCUoHRDxk9QzHmhxFibyVhJB9T4Zk9wQGCDeNEUFNQSjZYP",
  "key27": "4YCJGb5RyAqyh9Jfi77Rt6uY2XUL81KXHuZjBXeP98CvJe7HNSxRqGWQZdbjiGxFMY9oFbRECXSAGj4262qWSnEv",
  "key28": "3mca7hajEC1bxAr6TWwZVmB51eAktsF3ktwTBSZSQixXQDNfdGFFKFG2YoBjF9enSKW99jBKt3FhyYLp5eBrpnor",
  "key29": "3U32JLQGNpwE4J5oPdZenPT4MkyZvfNBX4YgwhNVFXwsSGgLAuata1BbnLjDMJS4MvitvXJctVo15CvoLpEiqkcN",
  "key30": "xF2DBVd4gJBTjVoB8XhYWgo6q9G56t8hMPUTWwsbwZ15vx5uYf5PyqW1h5ASh1V2mB6fu5MekZEDZgPfowBswMy",
  "key31": "2KVV8kcZKU3mix8B4EHkb4PcRY2J1AATjYM8qBbucR24SV4WAAs9PB7x5zB8FeGFt5zWCiJxWSyjepanHjpQnnaR",
  "key32": "3cYdp83Kt8s5yEpmwAGkETyxv93XdTnpXAJVnaXF7UjUxLUDsbLiXAy61edrfVN4HM2SaHa2FksntGFBfKw8zhGS",
  "key33": "5pkVAmRs4vVxRmWSGq9gLZQANJxu5jj9bdTTCbDZGXaj9nCgYsjzMEcgBgyekmarKkYScj8qZjr8JV3Fjm6XFbwG",
  "key34": "4jPVPeRiuBjkVR3ynWrtjerNMp2XKmn5vGdJzEkbDoQrFo1PLUyYhwZo2FrsAvXX2cut6kB3XZbgh51XHhXDYAG"
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
