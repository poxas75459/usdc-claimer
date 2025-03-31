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
    "GdpQVcbxMHp9ByGBEq1CjxruvSqMWPQHYW7HyxBfXhgRwASEfD6WRyQs1koKEtYisETHk8ee8xF7gKJx8hV2ioB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NwkkwYjJEB6VNCFitRjXQahKftddK88MBDZR99jDKqZWvznzyZDbnYy7ZyEz4ns93jgknMq29yQYj578gnEajo",
  "key1": "26a4NUEWN6ywkHH8TkoLuxA3c9KuK1yJT3scoGw8XFWwx89ahpCBRM6vMatWWnmWNH68yU1jmtGxVT9mGKrwCBkw",
  "key2": "4yx5S6GEBd4m7GZRHmq3gABduFQ4ai9Wsc6zoTDJRQ4CkWJ8c2wkKdD3mhuRB5s2LdqvZBLjUsBZxV7sWVMTEvWx",
  "key3": "4oaoND7Tu2V7zsbsfRXfsXpHoB2mQ2HZd3oiB41Yp4PpvYaa2mnvwbAt4AV9BNj1U6Wvni4xxSHHbTLTak8yq1Gx",
  "key4": "3r4Bsx8T4gtp7NXdAhXTN7hpBBWD8USQvLY39REAamL3oREHDGXLdjcFDpSo4kKU8FYecq7do1ywBGswTF7FfEK4",
  "key5": "2QNzSCF3ggNxe1hdVDMQvXWyprwKjafjCs9y7ELXEAqGERiKMw47hmwgXMFFEbcRMa9nvi2VZeF6XydWWmELtKE5",
  "key6": "5FmDeBfrXYE9ubC5WJRBcFd6nYarY1BxxtuzMXEYHwYYLgnZLdEEP8FdjJKVAdc51YxM5YfdrbsJT6qHupP87PqF",
  "key7": "dSKfTQZ8FHmuDFnBpN2cP6NHA2yRTqtgcxVGWoJ4JghJjtVS1gbbhPRXUGBj7AV9BkivruzdWXmwwK4e1pyuzU7",
  "key8": "ZCRgeSY9SxK3oZFzTKJnWm9zxPoif57nrNjQ4j3FQR4k7T8e6jCdrdpnm4kGDuY6HEmYqqfcHKTQ8dzFD7Je82C",
  "key9": "5mb4vPJSbtzGbsjXAuVg8gQqV29iMXEbrzwR7A6Ncy6SZ1wsjCYgxRLFErYTs1VbKqYRo4hZyY6d531Ceix74CoV",
  "key10": "37HXqV83kjY9Uc2KocqU8TY9FucgVv1Aduq1iM9Yw9YBEv3Ws1XZ4hNzkAwTH2WdQmUp5ADF1SGEXyaebu2VeDhK",
  "key11": "29izdKgsASG7dunwwX2qQ9hPWY3ojRophHrNiVvzngykZGQ7L85uKDbZiNTft35oPDL9ecdoBSuUxPetZnLWxZW5",
  "key12": "3YiSLMi6mSbJE8BDwZFTCbUEW22Eh8uJvF5Ef4CktfXhQPBehutB4sad1PBJX45TT2yJkzsMUN87evHx9g2zh2MH",
  "key13": "4HG6iy9drPo34RTnLDeWGRgUhLFfAr2MEbagrZEYy3rQhwrknURSXeCuVpG8mQLPJeYqyQTk3PJkP87UWEiw8nMQ",
  "key14": "5KbXz5cqhUTpJocuZWMZckjYcn366UyrKFjQGghqGvg4UbUDSJc96LghTjrEHN3SFCdf9KSJBTCpSJR66WoQvi3G",
  "key15": "3bRQeQ7sCV4thSLthGW8seADoHrV7fEbnqwZbPEoBjBjug9rFBLe4mPR9r8aqZ9BMrKjNsuJ32iXhySRKpP2wM5F",
  "key16": "5CCK1ixUqLpo3DeV3SzXacY5ogwDi75AmHxWwzf3hiaiv5zwaFa7R1SXwHfeyXSe6s3rZpEKaLpJgAWefRMykujK",
  "key17": "62DARCvfF6pCRnKugHQWagMuZLc9rVgGxrXSxoiSfmETHjnqkUErbtE8oUev1yc8A46A5fAtb1SSYMHzLUvvZKD1",
  "key18": "2513ogsfHzHyZKSpVqVfMm1XGu84CiKt2BwvKZqt9JwDcJQPxmLc2T9VCMV2iwvDxvSHDxLA4dP7bafCEXSLzgSw",
  "key19": "3yZfoUnNWccoyaAVg46gMAtYEhsprYQygYuy9bA7pyGGpruoNd9ZwgK2E5wpVk1YhU4E5dkpkKcPyojnmjeG5G7Z",
  "key20": "46ZqKxszVEZtYZYz5PjzMmb7k8oD5a9e517p8XmsGU8iMXdLM8iMZ1CMYu3nbjZyjUFDRCCZeVFpDkAKYYgPWaH3",
  "key21": "5G6TVBJDtS5t6j9rqqVMtBFvPEGCtERpBUjMSuZ38aBYC8AWnfzVs585VU3zMHaUZuiKzTepaan4G6GCX2zjqHa2",
  "key22": "5Tdqtwaf6a8JRM23wwbXANT3NDgyPeF6PwzUK5si4GasBnNaykfXk6nob61hCCx31cRNEQFo18MXj4YQJLYagEvK",
  "key23": "5a9PxLb18WAoLdimMbpPkiuK66tkxFzRzUczJkK3AKbJgtHU5zw4vW8RJPYf3Zo1wLQj62dU3DQinrRYK9kBTx7s",
  "key24": "R8htnUzzS5vHvmUrrDmZ7LjfdEpUV2ZN2pU5g2P8bDzUWFn1kZ2dDczqgMiZTAKVhWqf59QE5SVd9YRRq1wDQuL",
  "key25": "3ZZ6qW2tpRGWLQsvga11o4jYyJPurdWppDsWGf5rhjJXA8KWVQQYPTZ8zVfhKJyAV24Kgum6gkjzXwqs6cwVBJt1",
  "key26": "34onPkR5MKwAMeuPHsKhUHDstpL3TTav17dZ45B64QrBx9odiGRXz28zk56zdwJSpuNH5KAdvz2h73P7W8cCF8ox",
  "key27": "3D27aunri3RUKCYJCrF9VWvgrvz6d3xmLuwbmRTRr1CV7GQJ4z4AjPTGYcHqSeGgqofsEUKZ4PzQ1pUnu2uhn62c",
  "key28": "3mSQhHFgMEn5YxYqUUC8Q6VPhsPLho2Ko2MRVf7U4cNaPLF6aiNsaatYb8xGf5mR64YQeRac3YRm1zGYbYXKVAJH",
  "key29": "5teXg8wFGMcTkCGVx9fyEsbvRTGJgWrCfk221o3sDQqdck5htFLCAebxkawcWW3Mg9kDQPqokGWQttpHXrUP11cD",
  "key30": "5rQnexabvFoq9YZZrGy6r47iYHKk2jNEhAzmjVYTpsGfVCU7YHdTd7LpLqwKmgNgfXMBwgiiJM4jyqSsf1mu7rw6",
  "key31": "56qygDE3dooYku2bBt9moUe54KojABr3XDacmDS1VNLiSaEvekLXCeit8KwVATGJSgKUkgByhsEw5h4HFqAULNWa",
  "key32": "2rb66LxtGNCT3zJgkfkJhs6XEMNLqDmDXNUouxCqgGWdf4c1Z4kMAs2pzu7B8wmw7uKhmX1ZEyZ3Z565p8aNB5UF",
  "key33": "5Aa1FtmRtJ7MDunPeS7H8TGWQtfykMhzQuTi1jvmyPnxP7gbgh89e6GYdbuLSEcmCKqVg8wApTEHnVDinUfUociM",
  "key34": "2xJbZAH2T1VmjEdVcxAmhS4CfboiZxBYetCurgN2RQXujrcytUvmxETnD44i7nxUWGeFsF7dbBgc3aW7SnHYzfFH",
  "key35": "5MKcd2PHVw3QxSzSaswZ4wsCtmNFBJtUdkHKE1MNwxQpWB8cqou5v3wik65nTNeSkvZk5p1R6TsecReXvEbj15gu",
  "key36": "56ChGEWzcgkDiPRrKboVUqUL9KAv1gayqR9i32tmtXPUDeNtFCkBeiBNbdrVWvsG3iUuAKhoAgZsT2QQaxrUHMqB",
  "key37": "3SVuGQrYVnAZTspdKaeSXXVJRT8m5FVRwEpAaXWmSE3PT1h2XDzPqT3W1SKecoYQDHRpdAMfGZ2uJ2mE5Y5gbGsU"
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
