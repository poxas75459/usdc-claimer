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
    "W9NcHELBRWW3b8r1uq6eRv7zscMDCNGM16gA5inYfjrTFipLhx9HbWhvNC4m6vDAqPvNuRo6SJevf7g1ceXZGDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVwr1v2AogMJhHbFmpsKjDDdxji67KrBuYYuofL71EEgTaMVzJsZkEvgZxuUdNYhsxuouVcGK3rs4PPhY37qxx1",
  "key1": "KrAZd7tjVgbw5sntxgu67EDgvwZAcvsmhv8SMW49FyvnYvBV4vfHQ41XXNd5dDioicchhUCcDmSC4rDLZ8dT3vJ",
  "key2": "Wjkjx5PLrEJ2pmin74ht8dPEjyTybsinzVyfexM5R1PtK3raSripx7N927xUq49ZvcK4AKURfNJp8enweBUjMrU",
  "key3": "4CbGDy3a6rdxUsRGKLAuRMgdegCUZW8FWS7nVmu2ZtdZaf5RLRBS561Ykyp5wukJtTQKkQT2TqctZX167DZQXWw7",
  "key4": "4e2bxfryRhMacG8SxyHdw5WjkgdGUiRgmptewUzzpYmQg64f7vanb8Bzu1F2qJwtfgDAECrfmT9yQxSMU4GSo27s",
  "key5": "4kHVvG1DHTBbQo4iYJ6tXyHZXGKbYstxqKtZsr9j7ZugH9JcVPJRa3EjntcGATTRcemxLzbL7dmV8M2wWj84er3s",
  "key6": "i9rpFcYC6mH26pzvMrB6pw9BtEVKFhk89qUAiu8ZgT5eVtMP7cmjxfGsqrpDeXHn521Vbu5XFStn1gtUWvt5vea",
  "key7": "3Zp8jrTv5dewXvn64qCqs7EJYTiheWQSHoCtPqGna9joCXttUUDhxT81j27LCFRqcJCQvPfDUau6FS9H5Eu9C2Lo",
  "key8": "2m3kE79idjPJCs19kL3JG9BcQiecJtPiZQ2GDVvWhALwiK7oKWoJBCTkQKbNCCkDPkZ7dyjk8vYYHKt5aZQkaohu",
  "key9": "4e69fob1VKAXV1JrKf21abNAaxPbAY5KZv5PubYnbZhvGCSo1fpvXUbBHwj3z1fXXe1t5HeKCXRpfBYf56RRF1hX",
  "key10": "4rpgj3MnLSC9teGUiLmVyimkst7Q6RuF8oc8yC67XJvztjrUvKkYnGtpRD1wT48Zr55W36U4KCkkiGxj2U7HrWFB",
  "key11": "47eQy9esijBiFdGfB4zuD87yU8AbcReCtNEKqbxHaHdxcRxj4uEJ8GL8DCuDzg2jeuzhXrKvUtUXqipFhFuheKZ3",
  "key12": "56Aohg87gsJ9kDYDriWaHGTgmgg7ihdVhnGoZZzwmtdeBtzQVegViA3mkTaDccVWLzWVKaGtCLa6JqdDQiPoEAmf",
  "key13": "5uYNDd1G4B7XySWxSD9Cwv2LXRLoCiFauS4nvggndv4qtLRW8WJzVJBrAqYQx3WQantKxHjKMthSRHP4jifp9DkL",
  "key14": "Hf7rB7krCxcijX3uR7zEuvjUfk5eFstioAknNHgiuw86pUEWhbiNqXc9dagzkjNPBNJ7bzEPCtHc7d746DJ7z2W",
  "key15": "4QJ18Hqdwaw39F7nidgwY1A3F441PHyMW5KCLxzQK65HkYDn37zPZWR8fMX6EvnnSH2TafeJocXcn8o5TTDovKvt",
  "key16": "4UDjXqCQHhEdhwi63Uh2wz1yiCwPSg4dhadAk3cSZqChvmx8Mvf32qz5vQSRPQ13DhhsZENhu4r1PwPANPvybv4n",
  "key17": "4WyvjLoShz2iNgQGjjhDHGKAqYCMfa5M349S2wSuQChYGvwj9cD3XvGSxmj5wVoF8UAPWUufdv67SDKbKFaMwfYR",
  "key18": "4MFC6p7h4PiiEWp9xVenkgKpVGbQtxDxR8XzcqUcibciaV3k1FPpV8eghYNsK1VWqtkhVkjzjiN6Zm6F4TfxiGPc",
  "key19": "5DEJEzjmo8rKn5xL3rGUMAhG4MYRLyQQWi1xnSYaBJoB8GMxr1kKUWETGJgP4Raz1yjFBWMEink6a6PV8APJQJc",
  "key20": "yxBN3z2EuikD4n5AUr3XoojbL1XGgFgfng6wSqSk7BgStwPFbWdXtsiM71pKvPBARtgXHcu2Da3RqqPK8kCVAy8",
  "key21": "5kFukSiA6YQEs3XAGFPHGSCVjMgxWXr9H1Loi86e6tvNiGQPMHCT19v7CnVdYRcCXAyixtFwFDdd1hCcKsymA55M",
  "key22": "NRbxSwv7d6nXp9swn9UJySC2WrNdVkFYAXxF2gCFE83p4ZKXWRqNrUXy7UjJbn4xCXRoxZEBAhLKE28JJXNAX6P",
  "key23": "2LJimcgP4y4nqWgfCwZKJWioCHVMz1L6sNFcyzqjTRqn6iKQ1kBq5rYi1YWvPyUoJq7J6xzTumkQpTqkHy4zgeLU",
  "key24": "2nJekk43t9zKcdXTtLgU2L85rgVy6yo8RWqRaiRN5RMZPbkzBvgkXj3y4vFQqKvrA6PAHo9X89Qup7eiVmVQP3RW",
  "key25": "5taSpaHXYu3EzeKqJpqMMvDPdrajJBvZwyaftbCAcqsdnxcmnNBf2nUsLG7mjBUw1BJYUqskKiZDiWxqfsfwQneC",
  "key26": "3KiSUqx7jnPH1hWjoNYcxUudKA7pS5B6zob34qh6ULVjuF5Aaja7m7s1g7v2m33mHasMwySrbzayBKhbKfsJZdQA",
  "key27": "4od9Qf9gcgfW8kxPiDHDyxeD9iWPUqV2RSAhimAdwaLFnNyWvsUZeNmteQ3ppsRShYT53n7t3ughXtmArQ6qmF1S",
  "key28": "3BWq6rCZdBKntiuJTqvYMgGHEbvAyfsaGDjy4iYvfEDbigiUtYaS8hzmgp7mRfkaU97Dv5GQ8Z2vC5BMAbpD4aMW",
  "key29": "236yGp8bcAqShoLF2GwXxAfHsx4LfsSKpUvpWNqRmRTAHEQCemY68YcQbWus2962ghtPXa7nhT8bRZLqzcBVm8YJ",
  "key30": "3d4mbajq2ZDfUfXLoXayrC25oGsoKvjsoKmiJoaDVSWrT9FD9Bd9KUiQXkDHrg752yE8cNmk6e14dp3bx61W1fQk",
  "key31": "4n3srF5ftDCZtrWqpGjoSfAavku69255H88X6p8wRN7mhsuWoJdk2y9r2B4NiycxPzXDUANVwNRRhp5rnQrdrsdq",
  "key32": "2q3Pt9CaCv5LzzMSggHDmjrgjYmsA9uPHPifAif24motsyLYT9ba9NjWbEfBveP2YiAxb4aihoqdn8c1cceXedXS",
  "key33": "3XeXzNCZjNvJVveZ9RkDhSBtBqb9Gpjhwa7pUBLopgHcpipQqW7GhzKiY8mJ9akjFetUFaKCxN7aiRBBLJqDnZxy",
  "key34": "5osA4jrxxmHUr2ogHdd4hZRY5L4mSTgcEDoZvoMFSHTvFiz1aCQnZBx5pmujqGMN6oodzajTHGToFv54vo9q2mY3",
  "key35": "8nCkfYvq7Z5h8hMuTVE6pPHU9gKXx7ov4TcQ1BL373BGKr3mxBKoVVieLrGUC92rh7qmTzWiYvaQtpNUUuH9kZZ",
  "key36": "5bggC3UTgJ7dzDrW9SupHY9MUnvRKViAkrdVgveR413Z39Z5h1LTArEL1ir8HykLzvD5ABnXgRSZHg3f44BTZonS",
  "key37": "2Yn3g3RGKL1e39M93KmHZsnjcnjDzxZnxc978rYWEtf4N9W7NTB3zd7EtHQboFqbQRPXUZyYBQw2ofLNwM47r8V",
  "key38": "3LKC1eQHevfZqHZPs5FQuFLvHcHipJgqMRYw5NP7UpCVchWQWB153P5aHrCPvRmnhthWD5PB8hTmT3t6qXcXnpi",
  "key39": "3iU4JBRT59yZ1MEUbRbGGbavKWQ1nWB5hCtFmxyv9yHdEjr5JRrhEuPNP1VP8Y7hPqhwgNbsVH7PyXgvQWdDDdJf",
  "key40": "meqRdVqWcyMbbePE8iNmBLVCZ3n76GrCcB88fDQ9GRuL6FU5Psm33sdY1HKFLawoCe31VC1ALNxZmMsVAHpNZU9",
  "key41": "2fHMYMzGg7zzvxWWvGWgBUmNYsSwkwHacysp5tWPQQ5tMyy7Cdxny6DNSRcrvp2TvYYrCD1kMoQsYTbrynaPjioy",
  "key42": "4pLsmyDQWmfGeeAR8rCn1U42CrRT8GaEm2RGUWhr4g8x79f2LrtDUV7d1fSvz7YwGSZM8fwfHW9Zjqp97y4GVNEZ",
  "key43": "3HhkKBQ118zK6BFJrxXE52odr5oX9t6QU7kADss9RDFwgikWpZfwniVAtGwQT59PF6n8MsefCKtmNWrcA3R9jXBc",
  "key44": "4cZGGsiZXF2MS2k9t6qEySEyGusoz5MuEFFoR8wmZ8CedHpMhCdfhjg4dAikbBcxeqLrRqWLPZk8M5QUcjgvJor3",
  "key45": "5boC3n5TjyDBZYY3XeWqDbaQyWXzaXHK5hx4TLznfQAgKZa9WYuxdmxUacCm2NhhhaCWG1pFaGNBzMqd9mx6cif3",
  "key46": "2JZLcfJKeoiaUfiRZjW8nvqogt7bzbGYstNibgzE6gPovnvm7JkymA5Cbk2h2A5cBars737wY3u2rKGH5QT3t2zN",
  "key47": "2CXwkyZbLHsS1csuw9EhgKYfHZMo6dpPAwUkmLXCq4FTMhzh5dzJvGxqZmq96bxoB2TPAxY1swhAWhNDCq9939tN",
  "key48": "5aGkVNseCFg2vWnLEc7BJnG5ymeqRneqDKn1JQVHebrJFrwZ5gYpbrDXYc58FpUTufFo4YZgimQzmNEfmpvLWkCb"
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
