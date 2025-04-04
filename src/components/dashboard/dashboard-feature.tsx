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
    "2jV4aUgbVzdv68duQCsfFoisABYQCE1yaVG6wx2LKYoGrEqJeQTmYycbBSUncGmyLryr5JoaDUBTQP4gNCnfaSAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMTvwoeQmpgFtQcdDNLBc66qBCk9xyjT4JGSXmo9mYksmjnzpf4TBNeBwQXaZffNbjUKrspgNqKJFj6MUn65bqX",
  "key1": "Qz5UrvY8M7ZcUSQbuDje2VdZ2nepb1pgHGjTc8njtM83mfyhxmHrDznubVYdK3U3VNDBKaBS3CaZXy7PZMs6MH5",
  "key2": "DRDHoyLSaN3zgivjqFDhuADehmJq3sbjBaRaUnJ2ZHRFf5nJKtkdTMCL9YM3dWRJW1M7CDaZfTyPDjfBF7cgnBH",
  "key3": "UoKKdfdH3CKPqf71LXSh4JkCizpaPpaTSPSoJk8UmnRQyL7U1cg2aB5uHerTsgHe7ZgzkM66itHLRXtTW2oHkiZ",
  "key4": "3KuajPspdd1syV3LqweyxiAaq7DddFwpx2LYnK1x1nBne8XRtmer9C2av5QmPoBU2rsrng1xmLr8wvyo7sDKVxb3",
  "key5": "2LHFb27BT5egbEETLBdaSeiKcdb75tCbTE9TfuE4FwmfeubFp5TS5sM9TUJ8ybqehSxw4R1fypZKJwgKaww5AojE",
  "key6": "35KtAmJKBcDvf3DcaohrVNRZNxJhqZ37a7TNAsDSVA9cERcCLj1qBsvrCSqg8UcYL38zYfbjiRGXqVqt4wjATh7R",
  "key7": "zgHKiPRoSWYNnHdNuEtTAg1JwNv2d2pfG5GGUvaQwL5efZWQXFwrFoWF3FFpN7zcjKgeUBgCgPrzAuiFsbDYf3j",
  "key8": "2PKJL6PfDwL7nz8LF3fDquNTxfdXg7NnnDF1KYisaCZtWzAcSxgSFPzSEVVrZxa3NHRZZH2zcPKQZbShxBtWJ6BN",
  "key9": "4KHjWjUVuGochHHQbZud3CprknFQMmWZUGtFi4TT1kNyuk4EuP46FiHjRjp9NYGHGVDMZG1NiZ4VuknzigHw2MNF",
  "key10": "EySHNN34XUcBtT3qW2QiDoWUytbxAxxHSKeED7HupaqAfGAxSr19ttGDuDv28YEK5HJ5G8cgw4wneiUhmrq3awP",
  "key11": "SdYw4ubQcGYfBAPZRtxxR67ifNqFn7W2w9cSsLpGHLxiUg22uq8BAjxqWGhF27ny75SZWf2SYeCNgQe4GSyXKRA",
  "key12": "E5CCgdMkWohE9cxDDqXx595SH2uP6Pc8KiA5Jk1MjZQUHcjfSEb1W47qyFztbYoSLzaRXw6L2pTCGWPwDM9sFct",
  "key13": "2jBjX3LpBfKiKowfSApyVgfv9EaQnQnoNnDnABwZcvv2EaKgtrASazKXyfZZNfrAwtQ2vvvLC2eZy1UFy26Cvs26",
  "key14": "2aKAvK6QdoMAFYU9puW3mevGHEwuhqWKmMmrVgVNHcvwo3x6jFwRrFYYqBobBuGu5gP5QQ3Q2LmeJ19PCe4oqVcg",
  "key15": "5WR4HwTFqYz196fypUewGpwzTnpmhNU8YNMQisQtnmwP1J7iBQ96tujqHEC5LD9jHeXoUDiKrkbcKuE5e3kMNeSb",
  "key16": "z4mwPqjMRVaKZ41sUXjt7XwhYyM2CeAsZun1v6cc9YdYe8JkJS9Veg53moN69u3Gb52TzAc758F8f3aYNng5qdk",
  "key17": "5RNE1xMVTBis3xQYrr85qCJKpMqvv7KqZnCxgv4F5pqC33erazCsFFnWHmYqb6xsNfiaJCFgeqG37TBAWHaXs9CS",
  "key18": "3iaR9EAqMbeLzKySMCHmz98KME7YSi2U3wWNzkTRVn9CrBWiVkgH5HsMN9BBh4AsS6WdXBoZUyQ4GwbHZ21dsQtV",
  "key19": "rWszKKt3xAQ7iCg59LF6Bszqm2keoNAobVGfVDw7eRmeTHjDPbdVSCpmXjq2YAB7EhiEzu1SYevT22maDQhzwFb",
  "key20": "EzYxM4EJ7jU8pUd23UKNevk1CjZSHcdd2YpGH6FtcB144uBCmNqtpTZhPbtfHovUFmbcd8AyFz4TSLLbCkVUHyk",
  "key21": "5P6gxWSFNLS1edMgzTsmD1CDfVBHhWcY7MwFuEYK7nSmXUZovBasMrnNCYskSrJTgzg4ann2m4UeVXbNFtHgwUn9",
  "key22": "2vwHXSZwTKvrCMyfahUF1Kfg1NFzCXzj9JC44zeB4QxY5kC1Kv6TJ2aetHWvg8xjBwwbnmb8XpRGfqbcTqNwa7AS",
  "key23": "5dnLshdBxf7BFKzNh52jzGSLzEq6K43UHrA6gHC6zC6TdQF9BfDL7RYpqTCy9Jg5kb2zsXNegoE2Ntfhu2QFCST6",
  "key24": "4Wcnznfgcyyb5coUPkfHNwVTXJgS2EweZvd7rV9Yd6qVL8hHzE7aVTEUAFLpFDgjsVNuBVx89TdRHkjfLMzuwqTo",
  "key25": "5Eaitc3iPRqETvAEw2PTs9fqziDb2QiGjD8ykv918PCHUqMbnCJAs1zbCpcq5gzFUmubsQFay4fm82x7vSztsaio",
  "key26": "2Y1L7z3cESExY1i5hQQj3grTRpAEs2e5tZowUacZGnAie7x1ykA68jr3dX1MeFpz5Rn7Vr7p731gPzuMYTg5gtCH",
  "key27": "4dhGRy61YryFTuRNjUTHVXXHfPi4QEp41f9gZ4fV8sSSw9WK8tfwp4fX2SZcJaDhzckWuL5QGWCEcZbtmPKpa1TC",
  "key28": "3rNQJ9NQFcDuwekRfrcbbrNqE9yQivu1gEX2GTi2kQGFu2RDfqp2arBPTJY8dqLagHaZNKjwJrigMHEoq7xbSzsD",
  "key29": "3mvASNzzYMdhyX6A2vi8WQsxkbvshN7xnLnKGqVcLvjPAcrfXEFyZaZRgQp2LQRcGvMNvNLnDbwvAg5ffd3nKmyW",
  "key30": "p4tDVbya7WXLeNspkU7Ud18GB3pKjAaEBEuvj71Vb3EcForNwPjU554cW9wDKDG3i9DZmnTY2f6nUiJwd6x3J22",
  "key31": "3UisQhRsVCx31mapJ9FShDe9CSq3X3gzfeJGTxxcjpGRPsa13boHNX4cJUqdW75WztG99JdTdBWKsE9rx7F4XG3W",
  "key32": "3JBtqX5pjzTBNovRa8TZKuaJ5HzBzujv8pHsJgnjN8quRVr6VehdYyQJ42ELgmHFWqHjeMH87zNCfExJYDJ93HHw",
  "key33": "EgZeKpaX7rwXm6EHyatgLta97tp7WYA7mri6jNJJrgdCxzxXF3yaZn8chyys9TzvUJwuRqKHjqvGRtUphseojvw",
  "key34": "63CpVLGsct1u1gTDtoJTm4Mf8vSWFtUx32iEFPSyuFMvjTh1y4CaUpnwohgFKM9sP3XXJV71mmqE8rc2896Jzvc8",
  "key35": "5g1NRq1YEyyktooAAe4nEinbMiJp7vXcouXiGCrLu1FyXM7Fh3dxqh6LYVtUHnX9qhrBdQtcN3DeV9NfdQUwjRmb"
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
