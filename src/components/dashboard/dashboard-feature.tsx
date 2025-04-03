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
    "3FymP31xDQ7hRqFtbjAND89MGeHqM4ZzgPhGKfzkPq49hoY1ZRxPmyzmnjx15U9KncuxX4wTJa8gcHdtq9EUqf9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KvAz2fsTcVfmx5vEzwc7PVePy8mdayG3UvohvHHzbsHuwsL8aTnSXt3yEGLuu9hmnHBBJZQVqJ4tgB23aMv2V63",
  "key1": "7CCgNSs74HPDLf9hBZbSWxv6HhxRtQTfbAnsFNfjV7DuWNYaVcKvkx2TN3mh4kcSXg9Jp6cKRHVSfrQnFfG6Vn9",
  "key2": "2aUvmKfvV3MJDw8fx4HrTQ1zbYbwnKPDZbUvxtcZcufoZEVkDPdDEfkZxog1sEuqo2KpzRgxMPMiybeBDBqQ7ou6",
  "key3": "VJT6SJs37m6YmiwE87nppKGShLcGMMpVuBPyR7VvEHnKoGu66fa3t3KPe9u3Ux4LdPHQTcEyNyeZSyXoToqGjL7",
  "key4": "5QPKqC73E8Tq1iCgQshCgCPowUzE4k1Gqj5jZ7DiJozGk3n4wzu6rHZWdqr6wP7xZwkAFAuCJfr2TdoQCyWmQj3a",
  "key5": "2fuKG4piyDKr9RNWY54WP4rh7WyPo9zWLtEZRLi1LpNcEU9Qbp2r4e6DLdE2i7buEGBXA3FcDjvq7dP5fjYjnHmX",
  "key6": "2qzej28kYSm2iNRgUrrQCSSiqX2hXh5oqPcoGm4NZd5C9ANRbg7Gb4QwsXDzrFpW1uNX9kq35J4HsMnwSeXp4tMk",
  "key7": "4xiXUzGWVEq3FJjbm4J8eUxvs4MMKTgzuhk9h2DVVY5XaNKsnrZBuKAM7dcznWKj3ktfX9vczD66Xg5P26i42EFr",
  "key8": "vdxoBnZnfsWQswSozgq348BN3uwxM5818v3K3B134WUmp7C1dP7ppEvuAFtRqwkGfMCDMbj2XNTy6Ndrv6V2jrm",
  "key9": "cv6BUxiY3zf97HwXw1RXP6AWzz5y2ARrXxzkBRdX5Ptaa1DE86j6Mxh5eBJs8KQ6c2Ce73QY1aoS3ci7s6w6Pv6",
  "key10": "4t9SMFryT8BSGsHRg16BBddncVc2fumtG25yvXD79QTq9tNBJjWGu4unopSsgLJ5ynBhg8xNwzxZ96VPqmsWPN6T",
  "key11": "3sUnF44DARCEQffE3hje2sCTCg6tgPY7VRtsot3UEHZ5g9qTjcodfhyLsw3sm1UYLZkUKenf9PZtYxTTM5HpnvF4",
  "key12": "tMwvgWZ6DEeUjz8TaW3oLXSK1BrqHjUKHrKybTLZYDcDXDMhKpaj8ZChzVttz5G5iR7qg3f8UnFS2WShW2g63UY",
  "key13": "5XiMSj2VTPy2DDbYGp4e9MgXxskqi9WEpom4xAw4iRQRG9b21WavhmG2sWrnHYNJQLsFzw7wf36TJmJk7fSQnPVT",
  "key14": "4BrydD2ptxjhcQwFSfec3MDCG2wr32K6cxKhzmh7Ym3Yq9N32oGfeegG7YEfCdcnybq2HtYaAaTNKiw5v7rPfGft",
  "key15": "59x1W2kx3pcQdRK5JiNM71EUYf85gVPTibVVMvnE3jx1V6Bf2XgQueawPp3WAhqMBXccv5F55hbPNvqm1VuQQYDN",
  "key16": "4xtkseba5seaaMgCSy9izzUtE7d7VbkFdduKsGYFbWYK2Vtafu39KHHESBjuKC7NT49bXRJVqEUkwHKcdVRQoXDy",
  "key17": "55ekAPkDuxUdoMFwqDNhK746EMe1vfeuuRkWhaWxuC5v5Zj46cwSfdMnxJuGW5q3Rs8WKeEohzBn477XYNyDAk5J",
  "key18": "5wbqEkQ9awTWutDp8xUfpFcgW8h8GE6dUogXrwVVARx563Neahb2EfjtLMC3rjqVg8Td4ejfZ69j7edd4hvmgG6S",
  "key19": "4nhT5nR5t7waFtsXE3hP6LRYaWBfmFTjpYVWsgsBrUVVQUz95VptE3wE7P8jmzoj5VcEUbDGBunQ5kQrxtLohqPw",
  "key20": "4EJ3nEsoY65anr3ShB78i1gu3T5jJCyxHJhpcfc61ejUqQFa4rBnwy81P7tQaT7wWw5p1HYMPLegn1m9nPpmBtut",
  "key21": "4cLYmoq855LHvyTVyoffSkcpqoZ8yJH17wVmQzaHg4S45DFksbXstiQBjLWkYw23qMfsCFGzBp8FTst9do9PBwD7",
  "key22": "5o3b3idKuJ9gLa3V3qyQ3Aszbp3xRmuyo6DzTEH6wNPAW5kc5v3kb3Sod5dqnvrw4XMFypfqVLdatbVA8AEh3DEu",
  "key23": "5moXWap7pyqEy6g44JmKeRy1uUeXHGQLAk21ph4TWuvdwgFLroWtdocDqExoX4iQiGvQZybke33YRPRSv7Tu1b7j",
  "key24": "5nYQASUP7fJ5zdgVLk6RbqDGZZ4RPSEQQQ17s317PeeeeTe5wbHDjYHk2agjfdeMpKGkBfcrCFfqdSeddbzP5iME",
  "key25": "1g3McDhyiY92YqbDy425GuZJ9Ui5pz6t8TToHvfbU28v2PPGvQjWGWTpf5d5XMWrRQMNkFhMQBZvLjonXW9KGA5",
  "key26": "4FjeqEJ6DDEd94hc34GSfn5Qxd4hb41joGkLFgRwJouYXuGc1oAVcH4gym5obcK9vrGVRRZLvNU37sxts6CSFqpu",
  "key27": "3Yem5ZbVoGNKKqV9bgM97gVaoLL8qQX57prNGYKecScF4mzRRKXKckaKqvRADtwAVt2ki2sS62Lv4VmSzEvA8Rw4",
  "key28": "5Qg5aciSF9Ph4EhopUEVGx7zPemKbgS91pyNY8vSGaCqi4Q5xAmKfCacLbHobWWdegA77u2uYePRUA3yhtyKYsZJ"
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
