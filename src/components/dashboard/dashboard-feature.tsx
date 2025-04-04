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
    "SJeFFe9dJnm1Z6xBAf6MDECfrn8UwWinaAxehyCL7TsjmDRFLr1YAJzTUkSu9K6y8sNcum5BBNGh5WHCC1Gkamj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkys9CqvEPk12qaXQTMTJMgB9sZe7SqvuWfYaQ8vYqUASfZyVayVHFqnDmv1jcEb3bQrqWmgKjaUN34DQQV4Mjh",
  "key1": "jxaE32Jz9fxPyekFBujT667q5mPjJ4jtr57D2uv7c5DZHXobPhUkj1AhGErSDaHLNP1fwgxVZcgb53rfn3vSfis",
  "key2": "49LyhGEarvPwyghbXZUwbqxzuyEgj28XmCQYZuiCCKVThFysbKcPqw6YGLUuoypUgXSqcLfZqoyfiPSyJ2dFyLkL",
  "key3": "5j6CCP4CXXQA4d8cq9en6D7jjkpoo2isENboQ6igX8optuS6MAhjzW8puaLTYyijEbDxatdrX6kCQsc2G6k5vguq",
  "key4": "P7KfxgUWNHEXyFRc1XUXM9cbC9ihMB66yh5mjrQQuKoQs2qJNGymau6i2R996V2Zh4W6SsPE9QJQEjZeXMqFZza",
  "key5": "kB6LrR5wYiGcnUw31GoQXEV5eu3gK74gVwwTd1V9HeJhcGv6qHofaaZz5DdGXXY3aE27W2G8HRDphaqKrM46LKt",
  "key6": "42UMEzi5vtiL3uZz9WYRCXbFPKgicxBcH83rrhHG7wXrLggfGiuigCEmd9NWyMPW35ntP81ZrwxY8fB1a2YJ52Yu",
  "key7": "RiHaVVWNASFg8CYpC4gJDzyxVQiZ5ePQrxyqSQKWixty3reEsaBjfk5nt8dRaiQnWZVNXoqPhcWyENrAFoQehX6",
  "key8": "mHru1scnJgG6H36E75HcQ8LbiQ3YaRAmBoLawVWRAAKsNxpKiU1BAUziuY3pg3WnQQ2SjPXspqeZ1taXLRDuMJm",
  "key9": "3pjxZLx5UYYpGhUUyGuvgTtocoKGeiA4CPv3LpydPBjzVw9AEB6xFSzvMvpfYPh7xrvx74modCBRmqvAVmyJ8Gf1",
  "key10": "3xC6WFhpT6CnB9myLzzy3NtdCQaxSFR2caL7uxfv8pf4cqAG2Cn1iVWaB7r3v6Lh21VWHEHYP8wLVsUf3i7Y8GYE",
  "key11": "BEeGMgAg6xWo9vBwetEB45ptGQ6cFThZ7q91f66X2otgDV13TaYxxwnW2Cg1xz4mqYKLdDpk58Na2kUAKb4zGHq",
  "key12": "2EDhsQCWiqT3iFHNGhFHP9GonGdwXUQTn4FWvncBMAZhegQ156PejXP3JeArrvheAXAHWRqBtP9s4nMPybEhNRcp",
  "key13": "5VwLLMefi3maNJ4YFHtwy5F4Mst9wNuPKrpNk6y3oBtxXbPuaLTV8dcwYNN3kPNujZRkvJbhpSueAJdUiNWA7aNj",
  "key14": "24oygongAZUSu6UV2hWAmg1W1yvbhycxwghCgYANYzXRbXY7fSZhnGwNehLrjYGjVAL9kk8vohZot7Y4zjp29MhQ",
  "key15": "4xtwhjJPX2QD7JDYvmVPPUTwm9XitNhJNBUZYAaCE39myRA2yajqi4rS1eeoiVnc6V88mZUjgSE2nvHtthnRkrPN",
  "key16": "54FZLe8brnNdcUd2kZ9QG3gX5uZpR19Y1GbVfcRkWtmN5AVQzQSmfNqRhxx6wTrPNvRRjF4mUMVKXKVke3rZ5fbD",
  "key17": "5f9EEoQ6iQw4dZpZNDTvaSf9Nu1Dt2NWiWUAW9BuQdTBwdqUAYtt6rDCN4CzNWzvChx2CmY3GA6AZhgCPuX7hNRA",
  "key18": "3TAoBy3NVBxGj1GEaXzxF7NtJiZMhJfSZN5P7BYuG9KUzv3CiFtLqX1Apnh2UTD9NrwmDranMN4dEgvmbaxzPYF",
  "key19": "3VYCujJ8BaGjgNB66Poc1UJxYq45FTpj1e6cAX38NFEQ5BgDToWAt6uZNpQmMg3rCatcKxKiNhKoEm9NJDAzoWsR",
  "key20": "32Wwgr1s2upfJQ6YNtviw5cKcAgW8fLxXLegCSWCdHPAqb3WAqCVz25T9rodGHLa9yFzvt4sANu1vSAa6YBdT9C8",
  "key21": "5J8zbQLJbBrjpjLGSH6UHBemqMdsroF9euHAyVVSNGoECMWkd3pR9SifcLRGqJCpJVHWrk7YAvSBChf2PnZt8N76",
  "key22": "Dcnw7iTFhpqmJsAjUvcFVK5f4zpZS46nYwRGxqRrUKtsqsu1AqFRWscq9RGuNexcrVVNQZ9Akr6bX258b9aiY26",
  "key23": "5nJBHWzn3AaxTtrYB7zRLKCAJgqRrXYNdUeSGYaEcEcfn5t6XeePUbbXh4zJhsBSqtY8z8Ngg9xCQjZnbgKqvDj2",
  "key24": "2G3GtC5EgmrHCDQ6vHbYDzWZ2bnd44rMVjx8kSU8CnzRwQ3ugBMBUUu7zEFkZ4zJ6HdjQqtQhVxzz3BxwQP8JdgX",
  "key25": "PBtFzbqqLB38t3eg1zRx88CiAgnKkU5AG6LY3N2VhVM6ScnCHLY9uRDYCkab52EwaHDpaRdmU6SHR3UrEXoeKLj",
  "key26": "4tJdsNb5BRR989v9YbtiNvdxejcYMFtLDdYwE4JfbVEQJW243RYJp2KQD5Xirf932aDea45uRbZaxWXRVkC2wGca",
  "key27": "67YGLA3UzfDXG5gSqjEdpRhdVQycu4qCYTo9PdcRrL7HhXy1tVfnT8WftBLy8TKSCCQ228VCQHQWKZ8VWC4s3SPw",
  "key28": "4fsUd93VWWRVgteDSa9PLL5g7jBQtCyDTJEEK317aSrDkAyXqAkuP5fDeKrpSFqETbd3euqKUsfSqxo2x3M6ExTM",
  "key29": "2JcjUBWcYa1JwU2oLFeLxCT6KiSZ7a7YRwHz4ypmEqWCyzjydxZRF2ASPCR6tyLLP73uXh5JGJG7VVAh39C1JGRu",
  "key30": "3krPqFECL7iZiEaCL3tgHP56wAxT4TsXHHya7yEHo1iWff3FAB5naNvP6FZ1MVZBfBPJQXorARBgy1d2BdihzHs3",
  "key31": "3j3oiGZpUomgJQmGWx4LV2ezb77AMpECi3NZkrZJrKexzeJXSTPW5VFQoy2Gs8WSYgLEEH5mK4uo5WaKDa8ac5hX",
  "key32": "4Nng6d7ss38mZG6ZGcrit6n7K99u4EWnsDrEST1uHmvodBwmqZTU5crdNokMv3UYCnjKRtm4f5cJ4jKiBBH5bfdT",
  "key33": "2TP1Z9nzgQxL1kTuvZvFgxXtxdT92VHRkwWWdUCaprsWtd6qRXnH1tiHr6rHPJ2B6VnY2pbdFHvffRLkN5oyhxME",
  "key34": "2DV6YK87zAWbxi2ufwybzwuEUfXkRVzEYGgtjiZzASa6zw9cqR63ribDzACqm8fAnxMuGsUkvPi4oDx7u3hb5Bgo"
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
