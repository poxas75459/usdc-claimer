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
    "3miHTKi3R5eSENqzQ8cAeVWYCoC985EGFgxaDMpqMmdYLCy71JWJw9wLmcyRA5zEvevA6b9ArWkPAm5rKgYBt1xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGJzc4dN9ZA3ef9cgxnuE7372BQWgHAwYVqVwYWSzBG3Rx48PaFDxTZZAwGownBK5kRExXPa8i9ohPYzRkVfdbY",
  "key1": "558SriTXTRhrYED3HkBaSeDnNEDkspxp9oM2oEmw5YFBcCeYn9FTNQFVrp2sZ7EiXgfaxKK5wtPf3TpKmUyHCipk",
  "key2": "5aC3GWEC7wWL1KrNFQHNpuJaDU4syPinZcTyJRGJ95YdbsUMHBujD5yqvSGn6aBsamSyHj2F4j8J2W73HPBa5ZqK",
  "key3": "4JCENNkEar1Lv4H2WydqGfFSRd14dAJYyiKTEDfi3GLJY7VcWZV6XcCK5JAQKKoNn889a1A2LobF7zdY8KNE9VDE",
  "key4": "33BqdpdChSz8b1ZwF6msrQwK9qpa7ipKSqHPVbQPFrSij5FiFhg1eX7CGyRZAK68J6gSoFCHvvUaDVciTE88Ept9",
  "key5": "2YrvyajjiPuVEuHrzZ49osc3SFMLy8t4zkMEyocaTUS59CjvTBnWCDzcZF4nYfDejAtoXUnp1aE6bWJrrc9hXcBa",
  "key6": "nbf3nmzVKSe3CC2Kf3wt9WL9dKfvAzMuEVhEWTqhuv1UgxgdCSNcnkt34KUcRf8QBm7mtyRPQx4brzz9aYEZeuM",
  "key7": "uphgCQ6R78sYqSP7m7ML7CG8zgT2ujZC1GJ6vE2GhB1FNdXrjTtMWokYDNqXzM6HNYbADNF5k2xQH54ENRu5eZS",
  "key8": "5hX9eHjewgTg7ZpPeD1mDjr9i4D2kmVSnFBL7pVUNUX39jPSLYZAG5KH7smZpRmRoWJRfSUammbM5MVYYGNbDCAR",
  "key9": "4bCRxvm5c4ytBBBK2ZLhbdcJtkELijPu4UjHd7Na1XbjW3LFsYimAsK7tEGVNpg9qjTMgD7BCEohGGQnXCH7yvMJ",
  "key10": "3W2zg8eu6snmkY1VuPRuWXNYWVu64qQpSmhkPdnW5R1beRR9P5uTFcvekmETUcPsu8wEwDyFNPYCoLwz9whnNYaq",
  "key11": "9qhnh4SD4ggE9uMZ4FZSomhziCQc3vyWwtfvoJfxUMGT27BCm4yy1CN2Z4XyecnK2hvvP66hxiobrLb2b6fXbnA",
  "key12": "3uRQ8Ddk9C1BJEw2ceZxeoPsu81CRVihz5U2qcFJFK5NNWcpTTt4dhUuJfyNdgYd1bv5JJ7xEa7RMyzgzLiZRK9S",
  "key13": "XFwU8juiAnq2XepAQbgS57UA3PVzX72UWUA9bhGVZgc5bJ4B5xKAS7FtGAJABoELMoTQ6mM2u3n9tVVX2jvQKp3",
  "key14": "u3Cymp54kVrfhNJraHUf8gUaiMQ6zQVYuQMkgGyRJtBk5nDJjsvDcc29u9Q3zEWnCRHGX9rg6dsAwtAHHWfdrnG",
  "key15": "2MUMB4EqgCmb9sNf82VukxczoQfNBJB862R5jZvP6Pyxn6UUPiGpLQhzQz9LMvK2nMFYiz7C4mrNo8QVT4ijFVQo",
  "key16": "51PnU4t2jH5dJzA81NjBNmLz2VwsFJwh8v2TyyqfhxqACbQYtGsMi4re47tjSkFJcGoPnmZeVhE2tPsC7nxe39TQ",
  "key17": "5sHaybjbVyohNaFkam8eyk9qyEDPLvVY65JQMQek9KUypXRmbe5v9beDcmRpAamzzomfXmgV2zAcM888E3sFfiZV",
  "key18": "3YopXG3hPjjhPsBgMxo9CBeoQdGzN13JX4M9GWdMvm13GDpXVSay67k9wYFd49rFbEZj8L1SHByU4FwiAfXZgP2F",
  "key19": "3aCohSZJSK8dfoHPM74DzZPhNbeUGVSaxEtLPYHHCocHVD5ctv9gMAyj6gDGXVA8dAT7W3PVGvstpPsgzpenAsBp",
  "key20": "5AUAb5i2QvXmAWUw1BV4udUHDhsPDcsVg9iLo7FrXdLuf9DbMav37PBQBj1bJBBAFepRGfpBE6thpTkicgQ7K1Kk",
  "key21": "27vLViXkzWBpaCUc9JcPUfFfC49VcjTvswsKyChQ8GxKe2wYZaPTSbwjCm9vSgnWrebMfV2DUiG6oovtB4ap6fVm",
  "key22": "5Hhv6AMdTN6j3gTHvYSVugQyRaJxvFGTCQBEEdz6NMEAgDWK6u3iir4QST8quN6MQA1jLxARFL1Rtmv6Rz2mEx3Z",
  "key23": "3a3NciiF9v5Nc6WqGjQ5LAQSxN4uCnttVfmDVSNyqt9wec5tZw7PnzLhtyFuHJQiVwYiZxZzMwd2G9Gy8JsgMRUb",
  "key24": "gxsZdiVnaZKLwu4pvDZ18Pn4LqDw1nc2ZCoRfNT1G2YLbmsNpZ3JNZXtn1kUCv7kvasGMHZV7Fo83dz8DDeCo5p",
  "key25": "48RzNfbN6iPHqdjvWvhagBHfNz5zfZ9qDNer9QnfvWJdBaM1w4Myk95fXiQMyMnCy5wQvARm7w5sgUbqg3EbfTUh",
  "key26": "3HgWNZVTs79iCxmA29vzRj5UN144FEPReZKjARYJKWdmPf4buVUzvAxoZ7CUbveNzeWFG3Jxqwdu5JMchFMoJktt",
  "key27": "a4fsjyYQ91qGLnymhDsK7nw6N6vdEVGC9L1uH4v1VmnR7Z1KSduquEY4GJv7aQgEqayo5timeiwji4uE1TjyWvN",
  "key28": "xXKWK5Ws9J2x9fJGK9TTFENNRpi2azcZFDyJ9X2sKDp77hTRoxhDDVVhKmF1MQSofXFjpK1osjU5GhjdpLiQjj8",
  "key29": "2JW2q3nauU3m4k23EvTiME2ksHjGGEPffHmpTP9igs2V6gLbBTHUXoPwQQFzmUHmcUt9rXQd1U6RKcujc4kH1ES3",
  "key30": "5Zw5YoBeBK3UMhcgxs67HXABnTH72v3FS2YMXvKEQPQADJ4G9TYNFTSqjGuub12j5DwGKSGboCDQr7R9jm1YUWGp",
  "key31": "2sYvFTRfJ3zK1F2w8dVSJwkkZ3vRmzj6immoE4Qad2vaixW3V6awh3MAVTAg7fxzxoSWFREZpLmGJtcENXe52bW2"
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
