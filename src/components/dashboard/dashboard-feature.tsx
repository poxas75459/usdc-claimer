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
    "3CTN2RV64Fh7UynHQCNvsZBxF7LAheTkoXC2WUHh6LWEn34vVK8ZZo2MD25UhnnS4bdHHjcpKEaMHWSyyV4Cny7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24H6T5y7UaekUvq7tvN1nNjXYSmgFk2vzLaHGf2oegjSHZPGNkKtiXbV5V67WoJDE27Tp9CiZUpcgYeJr8xxQDNb",
  "key1": "4fWHbFXsNQQy1hdZaFuGXuNpnbnyKuUqHqTByV3csdwMYDGtvVzN4jnkxvtBcespHygaBQLhGfF9DRwSLzdkgg1H",
  "key2": "2LnVda5CVRM6Y2gTGD4LybkC44MrZJ2DEQfDMaa5mSpzDRsKDz6nrm1NsKsHpyqYUiwdNjd6zH5fpSxKB9SnEVfY",
  "key3": "3JRAr6PcKRzqwepg7xBtrrRHB65irpBMLWJXCHUjugkUSjHCve4KiYg3QtTWdm6WQcy5qb9U97kwjCYue6UhaRhY",
  "key4": "5AMfTEuVFMNEFXgQ6TkeuRUAs5L45eNuUrZ3VL7zHB6HLR73eE7PrniCL4LTR48rmkjrsHogikiDUoin3WnVQuEy",
  "key5": "V22uhjgoFyqDo9mvqpvtX2JotFvyeu9yWCdJAMqTDJ18Wb1y6vJ4yQA6rwYtVhqX8moCm2WQBce5tb8CySSoJZY",
  "key6": "3gKiZ8jvj26enxraqBmKePAagR2RRnz6e9WpgQP5ogewHnc9chyuWzNUM95tFKTyTjkX4TNQiTzZtjfC1BGqkXnQ",
  "key7": "3MvnG28caKycoegRtKZzAoj8NVWLoAzYFypm2LBXtR6XWiYGMxQFrU8oLjgUWeYi7vYQnLkBV8PsyjAiLYkHNk1U",
  "key8": "3CWnccwy9DnuK4K1hhpJf6NeXwMPGPeSRkm2PybGUpd7gHFrpZMGVFNk8efj5fSAoJkXuskb1niLFL6CHcD4W1Ci",
  "key9": "57YEpJAJaAiijDtsX9smfuZUX12gXj2ZW8btAPpLedQfKWx8wQioz1RF4KHG9JSByE5NkXoYNKCq4m5beDmkBzRd",
  "key10": "5KxKj1Rn4ZsajQXtgRy4CEskQPQ1qfcFbpbUjyiaDdcuCU7iYc8xGDjhpJDgQK5tfqXLGdsL9ZYYcsNiy6cH8TNe",
  "key11": "3S2yq1ZkwHw1jDXUYUkAotuKxj9eioRSKwP4NV4fDEt8euj3GAcyumvCKfbzGEsG1kg5xkaqzYkZUh81yVRgnEuF",
  "key12": "4rQAhkxiEH6e4K8qkWybgyxPzp5EYmSKAxxvqvLWWmwskHUzTYfuZshyQbe6sfVRRfX2NBKFfz6m7Dwbtmf4FQvM",
  "key13": "2tf8HVKnPiCs5HkGn1ZB6vVeLA6PhfPZrA7v8q7hiyk7rSkACWZVBcLi9xEVJUjvLedaEx6chbWATD4pqBxattpr",
  "key14": "4oLvqLRr8Z77eSmGbrJT9tW3NJBHphQhiqj1siB5MhHckzkjUWQfiBsTg5VoJ3f7Fyj9Sisn9477zSrGEuB8UcDY",
  "key15": "3fUM19AsTwzQQWjaTzCQgTk6aoeFuLX3bEoCXKatGS1A8H4Pe3oXg1n5fmibQwoyeDuQWeQm5u7F56Gx4mq9d5PA",
  "key16": "43q617mx9nuHqffM3EZEZzZU3zRMDdvi6Ho5HB2KxVtgGDTr3WU3TydSKfVzyDyksQVqdkgbDADju6DBaskA9487",
  "key17": "49tW35sA9YJ5hU5y4bzx83EazkqrKvXZHjbbsHVM6fasixXkngSDJuGeXaBCa2zXY3zcud2pKETUcaC8dZZXF4PC",
  "key18": "59yNY7Zb3VCQU3o4gedaK21vNATcRqA3NNXERYmK6bLUTjP9kpUPFp4BCfr12jY84LJ7wdwuRH8GunRQNNR3bfH7",
  "key19": "2VQXXP8XPPsFcnmZrv2vqSsUde3sLfQzdgMNCK9HsBdYosepWwxAJ4e8B3JwgcVVawbnNTMnXFmVq2fZDuCcdurQ",
  "key20": "21RZSA5SFiGD4QEZa3v8okGK3Pb17rgGG7u36ZazEDpaxqu285tTMb6HJqM5zFq6AKcGnCfFJoDwrGw27Nu6vrbf",
  "key21": "2YwTkuXMWgGdjMGh6PN4jbRmG6Zi1YgDcugCepP4g2eBYSdpwvSfKio5RjhuKrxXgP2s2pu1ePt1AHUygffakBc4",
  "key22": "56mjpGW5gQfzVyqf5npxhBZqBMG4qCPcxhwa4LNDHASN55SAcUqahkZnx9CmfP9Qt9kn9s8k7CMDWZxkRaE3zW2L",
  "key23": "3voGNusysSP5gmPxxjHowxdcXKgFcfNX8fMEUAvqmzENHQTFa9rYgJ8XbaX4eoy5WB6tk9NFSRSC8UR1m55XCgLX",
  "key24": "2AeCxFdEwxmsHXyFxCo4j4JtftZ4TjjyJk3BrodqvVKEK5KLAbYgULtoJiwnZ4jCiAjYTr7woTp4QvEUL7PiKw99",
  "key25": "3m3Vw3N9zEGMftfvXNEcpDKyUk5hkLX5eHvZ7TPpYN5yRWU3mDd4VY36v86oPdpKG5ujMsN8YynNzEkGEx1GqnSS",
  "key26": "3WR8jJruvzY8vTmtfnWqX61wz9KRsM1r23YnxNjZgVotauCACaKFLXrn3AS4sHsexWjKuJMg1z7eHPFLiiLPXVN2",
  "key27": "41CtTXJ9HaVvzYhCeASR5ZH3UEjXA9bzRCoTAYWGnvMkkxHxKv6Ew8rZpjP9xfMNZZz6VKsawmXPUvRhTf5DzdH9",
  "key28": "Z9pAHFWvNTMVDNU42xwC7AbGnUcbkA3rDR68cV4526V1ubArxwvzSPKxzRvFGaRTtZaRbyqrKSN8uDUnAw8bU99",
  "key29": "4WhTNjHjsEjc9rKoSGUg9YXtMtA8sq6kUecQWorT5Z2LVAkW3xN2dgXL6LoU4w5KUQZVxWu1F98QrYWs9va5ckiC",
  "key30": "3C8zmfmTKMRuLPtEDSoiCAQGbPgvQWcuA8TQBfdx8SDZPr7oZFSdhPS8mjw2ULikW3T6emRtvuLdLuNNXPWGM9it",
  "key31": "5Wu3csevGXLjhPw5wPEghQu2enkGHVvMydYawKdSnyNZ9KaeqQQAKJPEZNHpS1EFBnq9ow9zoAssWLaY3EMWxFrA",
  "key32": "2WrmNiGZPkBEGocHNfEb4cio2gw7tghvkyQSPBh6tBuCr9hodfWE7YjxELyZDRvyQzJkXzEcH5MtceovrBjmAGNL",
  "key33": "4SfT5PkNzbkWDu6fUpsF8Uad7JQqiteVn2EL5eyedcENpw6j6tWNLdtiyGifugvPqmBsWjWP3QCn2odQySxGZu5A",
  "key34": "529KiMqX3JbEbedmstNxMHU2qKbAo5MfM9Q38BHnapdsC1dnwfWJa8LWovFXWQe1qDHLo3JwrwwFcrdepzRSqsKH",
  "key35": "1HULRe3fyDnCkbU3Q2RXPoAGTgCAgKRiYfFteBxBGiZx43EEy4Eic68UmapcNzcdkxDb6HNYtigqQghcsn8gtb1",
  "key36": "c7eQVmLknxJaxerB5CA6iErbqWNfTeLkfUNfUyt44yaK27oxqVRjZ6GFozzeiKk5nFMeQ2fswVVs6BxF1AQdg7h",
  "key37": "5kHq2Mii4uZLA16kD1HV7o5gkYsxXQbkm123Jn18AGzdxVXK9iYTu66UzQ8r7kBu8cmRWYis44o8UqxCC3tGpBWE",
  "key38": "5ARKngZRXPgBN7ZHBXhXEUp5LjLYB2E9AHNArv8ViewvKfBwfqjv3opxyP4fvUnw4oKPmpE84rFTBzSCkqkqzskK",
  "key39": "3VNRvro1EmMTTENDDmnxAeeRbv95LPt2munwY2Q8DAFREaYP34DMyzq4QkwiQi1kieUWzHJFxdTsBvBpukh83Jco",
  "key40": "3MSVHGPB5cEA5TYchRWbm9uNZofR9sf42EWnqbhHGjyYtjEernuwZv5rWMNF9iGtH4wz4qrMP2Nmpa3eNbMgwdnA",
  "key41": "2ZeoFfRhjZwQWLAEF1Fd21fbirxQQpTFg1mG2yPnezszN1abDVyZpGHgZsahLhWqb63PGLfhYLxLSc4UHChjQJXv",
  "key42": "2rsGGMnqLtTCAb4fcpni7Y3rcZZyydRBuyEBU7rxbfqR4poQigSPkHEjGfQUdnbxXPGKkDB9SgPNNY38FpHftp9Y",
  "key43": "5NH542SAp2VZrj4HMtF3EjfWReE3Gw8feuD3TAbo8Yx8LmUCJABYMT249yFkpkQcLoZ5xhmbcaAqU56THJLL3CvM",
  "key44": "2LUR9qtHFgd2mcuJh8mFbzgSHeKnL6ZSZyjbHJDgsry98Yt1tLuHUvoTU9vtcY8LhEuH8iYxeDhwvKnxQ4XiCHER",
  "key45": "5RfH4gghkzNKqWm3ijZzJZtmYP6yU8AVYGDKsq2kHLBx7qpRvRwxgpnGytwhAC39xH5qSTqvJxQ6DUiS2wGDktHj",
  "key46": "2TAZL5pE3aDoDUQrKC5UZbxZMGwwttPSv6U1MqSPGHD5KkmMKi29WN1N2fB29UnnEgonYEZzZQh8ecrBLzdYvyhS",
  "key47": "4wTUG5EjaxtH8wwfuY1fnBCAx6MqYvQQzCMxqSSfnWoBsX8wcpbxcqhVKRdWuthgcwDYUHwhfP2HTgt75YhuksUV"
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
