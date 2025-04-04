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
    "3UK4cprvt2ZQynjmwR2Qhjbvg7mcVTUKRuu5LSJCMvzDHUrtHJ6JihwMEFFufsvf6H8eXzumwLksfnsmdxQz767"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Stwa1y9oXfWveg6DbShf3Y18Zv1c3oZ4JiKyZkASWAWJQUpnHeScyHVDW8wMhPnbhmMMRHa3yNwT2isnoA8NapV",
  "key1": "4YRehR9t8HDsaagiYoFqPpan4Uw38heQX4psZDt15wi2tLH783nPPAerhmsAWaVzGt8Xp1PAzQ6hqRaGPizGvaKs",
  "key2": "4uQr3VcEJTN9S4Ex8omadLZ1MfEKzSzyXwEizGcmKvo6KMxhJ2U2VvgGM89JkyDJvrF3pVuuuCDk6HBxMYrc9CBp",
  "key3": "4mhDgHPFSXSYAZooyTmzKuieXv9MRb4f1LNtrXx2EtFUhxKfi2ZqauQaXUCLowP6xogmcayQ6uMhSt45CwHwJ3fz",
  "key4": "5Xkavvfs5WbuhNx2nQL2y2jU5cjD1XTu2hBnm1PgngjD6j1NHPedY838w54X8HDgZ5HRMioZM6prnvAeAqdv9ZMT",
  "key5": "3nsBsNzxEnbZqaWeLQkTdWsxzxaJobDqzXnbkU93tUe8D7np47aSwy7oihkH3ghZsv9agniPSjLjPFCBQqdPfLg8",
  "key6": "5dPnYY3Uuo8uVLbzSubWvhcnBLTZ4a96vhBntP89hZLq4xcqZ8KcaMJUxS34LFtYCt3r1qQFipV2jYVBu7MbE95C",
  "key7": "51PbL5D4Td2wp5vcbRDMgJ4M4rgA3HbX6gSukb4qwUungiKqh9rncpG4n4iiEvbGoCMGCZDsVayMANVUpzknwegd",
  "key8": "2dtGh1dNbgS4FWwNn2t4kgqFAMDx3SqwCTgvCGWZjdGZRbH6cmoqkwFAB7Wr86rBjVYas17Q9JUkraip8UmCqvwT",
  "key9": "3JrRKAVwiEH8bdaBStGYCHFBUkL4cR2HoNehsqNJephwXLGjEhiBkmwEXBJNFj2KHrMbY8tUnPHugDNWWYmFcbYC",
  "key10": "3kzj8yfgCrEsVT3D6hmKdkoJU4wGp7mXh2NBHTa55ydDjtFikbqdQ3ZKVWh27nCD7xN8ZbJQrseD9kVWdicPw3Qf",
  "key11": "3M9HSZMAUPWQiuMERmZ1H87bsLyfyuL22VJ29MkuPnR7t8sAvJB4VqRDWTy5JbEN8L66JXpfn3KRGH4vQ3B7XZDR",
  "key12": "9iNuhQV1uSCcL6Nf9UwGoySJWShGMCdSLoa2x8Jp1MbTiBowQr1q1ap3yfuQNFhDvW9Xumj9kPs15m5PswszaFa",
  "key13": "5j4a28E4QHxWRfhjzyDoQ9E92jXVjV9ASGgVN6Z1g2xszgtNwszTT8D6VPoXkt21e85kX5pG2sxSXnWShB2Z7EeY",
  "key14": "4XYkw3MYStonm11vZpdnxeqr53CPmZGGYdcLEQ7T6ohQQQUXDAN9PdBFkKX8SpMY9ZxdBNLQY4cZgNmj2AShnu1k",
  "key15": "2ZyTSmTDqApgay6eByECxqDvdo4NSY22BSXhhxEJoW9XCJHrNKSKFBrh36V416TnfamhfVehRuUcKDCfMwC19Cdf",
  "key16": "2PnEfkCAZfUPrxRGFoD7A497szKZPtLSELquf5xXEUdqkQPtdg6W3vkiXdBo9Sc7SWNJf3DSgVwSHanzUqRGM3CL",
  "key17": "8X95EvgYM2bjSJ5g25BqUeWMAAGgnmqV1grSBPyX7GC2rv5hvX3mZPiXvxsoc91f987qnwpZE8oaXXCRGTkqD4d",
  "key18": "3jB21fWk98o65qrH9MQjzTDVrDru9Mj1ij8Cbgq78SNbWgTDeZzkVW8qd5dNTr2yGDoUUthcAuJETYXoebje55kt",
  "key19": "3H1RnLeJp8mxfdt9AmEEMx5zNhkDKW3nyw54ZpPewGw7V4i1Xbm7TVZEKGtszcUrSxnxaCX7XMj1RHiZJ821JVPx",
  "key20": "5XQvrobeMvfJkEuDJpJNik7CjoJXygNAX4htcSEsJL8h3zmkPC4EnMw6znTEp6ktyYc5TndLAAWro7utmYxjEq3A",
  "key21": "5GARSRS35ePW7qaFztgAJpe8XitNaHWze2sF5o9XWndkVoCSKUssX3tgyEWhLqRbP794E5omB6dM6erZXLmCpADh",
  "key22": "bswzS3RuWdbQvJU55u3CxQjGi1VbJNwiWdZmqNVb7tQJeewV3Lwtyz9PdtefADJZzePcyCVYwntU4cP1RAZHFER",
  "key23": "2crD4wJTD875aQWbMb8tCXMmVJGSRga3v3PPq7uMcEBykFoWix2JKrWaTy6XA51WmrHB6QjhWpcPF7Av41htyazY",
  "key24": "5j5LsscAcVpnNoAxsnzk2z5kMyqBRQG9cpEYMMav8KwZ1gaSN7Eh5vHEg7piyAFFc6he51wecvKwFQgHW7ocAUkb",
  "key25": "5PBwQmGxhc3N9n3rukJRSgsLJctb82QWFFszMmzjgvNzfXuSfzvCwvT6WTGcJRDKpBS4Y89An3nH5hxw8JFWvZXG",
  "key26": "2sx2qsFkL3b9ouE6T7DV7gAmm3N6S1aSjnVUKkkDaL1u9r2DYSdEd9bTztG5Qbh8FipnSmjXr85hBTbvcb5G7r63",
  "key27": "4NW1j2WZg3YJenDXSbZ4yvVZ6b8XriotsfoEFju9okq6f8SwVeapr2CUKSXEL2MnccoZ17U3PzwhwQ5hopu3N3R7",
  "key28": "4dzhSKDeDeSjYEc78b1utYpznU8TVxVVPgGGd4QqDyKc93wXwpK7Qbh9PT5e5KaRT89uRcGsLMUpkdCYgp5k9hLY",
  "key29": "5n95aFEDNCirP68AbHbsdtjRVPSESXCdLSxLmYxyDc2SHnoWK7Gpvcxvt71BVuzyXvzjtdmqqGTTZ9Z7CYQs11Ag",
  "key30": "3NR7jydPenKLGBjMZ4eoVkdfnEmTR4SPwtJZhDbx6DQjZtyZpJABsyZFQCu45z3o5n4QV3scEvxEWfngfibB58YL",
  "key31": "5nttaoAenxLGxPQJtmw6RhG8FZB3rn1MsibbcUfaCVPHEAne4wJeEwRnfZYcT7EM9dN1uAhPC3vAuy88GZZzM8kF",
  "key32": "4NEpPs6rUtVjKxbKqdE64iYJJBTNC9Bg912ktWkmySVLg6rRaGV7CkFtfCzCefTwEcLB4aGa43XNcWCAn5UieARo",
  "key33": "36gZ4L7XAiRy8cLVFUUigUpTeF5npnj8rqgvWyv1okNhrEKwUTHfgs4v3ywdLdnJHsqZU7j69LyPcffccxs8DpKF"
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
