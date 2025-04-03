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
    "2vqbHcfGQSMJP2ndn3W6uzgEHwA8JDgzmBbwrPmxkd6a4JtTDCH8y7C93sYM7J1eM4hgcujYxvkum1y8htpSmmMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXSQiTUL6vptu35SzTts4FkUWF6GFXDFsgcucEyanzqPG2DsZEAkVL8G73zVtVpWkNkVKVMkRkDQb5ucir3SdaC",
  "key1": "3mowBMGpoE937KWphvmYJX3kTQCVzRcn9LX25zk6uafkTimwvC7zeZrNgSq4ioWWmnyQULsTUmcXv5tJUg9Q4pjp",
  "key2": "39zSaehj9aXXrArMuxQpP96Wzy8uYfugbsBtvixM11dyr5nNU5TbRf2TPZthnTb4DtBwMuBU6YZw3TGyywT9rT2N",
  "key3": "5ZUwdA1Yog2Hp4VsepCMoh4yTJ3Cg4JgkSipc32y77STS8n3Awcz63ScsYD9n7YRjd6d2suoc9CvZhWcJNhFa87f",
  "key4": "49YpcpvjkcDibFrs61BXMPsXGJDN1j4D6kqpTDJusoWyTpSZJqGgkZb77RQ5G7AnU9r8Dvhv75wsc1z4TU7qLq2H",
  "key5": "3aV1zebkRY8JVNdgybf678AwCU31UMrbnCriwbkc4ACw2mc6QFwvgYCqXkiJ7hR8JqPMNBTwiGP3i4JKToNorjhv",
  "key6": "3dHbL7Ez63mk65jgFUcsXzb525Lpu4Vuh9M6YEaarNKDphztJwVytyHsWGrEhJutaqdux9AHXN8i5qeSbHkvpXVj",
  "key7": "59Q262BoRbH7D2qXY2nFiUmm9v9yae924VtFy2BM7t5GRnFZzqR6GT9k49VaMAuYbZxAHmidvvP2B445dAWmFaDZ",
  "key8": "AGkFiQEuZKgSh8nR2nfxWbcVksgk4mDbNaneoYgHHoqycVzDdxUkBTdEVyd6tctamfWf6oHgUA1dBBGQmD6cSPE",
  "key9": "3zYProkBmCvkCW8oquwHSasXMWwUyCKy7fC11sLkT2SkuzwQhLs4N27gCGRsd5HDSiduRUK35PodpiDJUbvNAage",
  "key10": "5o3UTSJUXDW4taxx1Q6FzcxdjAnJsF9TVmGDTj9iuvHMEypQ4b9D36dDdWh9X4XgwyqbuWN9tKBUm7F9HRKChD1G",
  "key11": "41usc6fCdWJRa6jg15GBnCusHmgBSJX2wN13HttewdCsM5VpjARXT9dXNfCZvBPBqrZH4VgPpeuajwRZvFyA6BC3",
  "key12": "2ZRRJMuhwzv4CdSwdxD4RwEp9zU6Hs1PKFrpt4w3PucYz4Wf9hUiLkAUqnuHghrdVLx9tqwMt7fd2wgF1yNZsyRM",
  "key13": "4J7WWQ79RsYj7TJuwptA1oCSGbEniidqVf5u4x4U1PzzcmPJ2gBKgbt25Gtr3s3aopsVp6wjjc3tUN3ptoDKXo4P",
  "key14": "4yNK4UzNMhz5TthmWGSTESEd9Lfg8Gf3cU6VSy21EYyDimCcJrjN7WscGxZ2TsNoeDWeBGCbdixydXGYYzt9NDcz",
  "key15": "i9ekKUSwNK3abMMUnES5hLieFLBHT3k9JEhBDSjgMb9sZ19KveyZnWuWW3MYQkWeGqYUHjuKDQBwDBrAnoAE1Mw",
  "key16": "4f1cutYALTfpLAJnfhVFTSuyqkYy5XDXRoASSB9nkJER9E7JXbBCZjZn98YiykUKwAqiH1x1NvA4bmCsTfEguVwe",
  "key17": "3kTnACBB7CGVoP8CrksmqyW74DU6Hho8NZErdhiPMdpj5TR5uKUjNa6AMjx7HLBo4X7DHJnWXmJfVuAJvHW6SBP2",
  "key18": "4bh2zZzmsBEjY1x9xMu1PXN85THsUU2kQZDkkShHPczH5YUfthRfJeH5RGZmpDLMvkrSuxyJEEr1CSZaCoqtUej",
  "key19": "2E7bfPNBUJhuFZCcdDvX55tTAsffQG8LKwR7bCpKrreZTeMVfEbP1AocJngd2SAeX8do7sbTaFkUkCkhPQkJxzsy",
  "key20": "4rQJJdhaV4d3BPcMgNAyUNPA9QGumuAZGzxyV56i3D9kpD3uX4eG3mXmYLjsj7TrA76Dciyx1vXiK28Nh4NUjeVb",
  "key21": "4UiEUvZMFeh15vpLv1xRMsEZC7RSh6tM6Eg5o5F5i1MFNsuCgbcrAh38TxDZ5e5tLeo5y44EHyf282ABTg8DkkBz",
  "key22": "3KAGsCmWkucj6UfeQrcBUuqfrDdBasunBvQTEHCLzdpBgs2SGtNUHydrqwvi52Z1wLW27p1SmnK6bgujFGho89hN",
  "key23": "2zCShPj5HEQbrvAax2dFTjir3FBBemRbGYbhUR8C4cQ8NWJqyf3o5bmp9JouNvzknRmXTHdo1Xn7hgfKKP2LRkLH",
  "key24": "2rpHb31TZo9y7pgMtihz8o6gd83qYeRnPwcvHJugMjwPKHyg7hGsaW5kGjc1FDbKpLz25XJSxpJUvqak8e6nKsNQ",
  "key25": "5PDmMCd4KvUbwe49z2BV6aZZeL1koxcyCPWSvr4zNZhdNsRK4Q2p1yWwzjkmUeYsvyYfFcpnmPbJ5spV6gz8CMuw",
  "key26": "4mCE7LPAZHZribWKsG3Aj1Z6KtEhRCii9bh5V6vN8vAkz3sr7Mec9tht7N9Tc9t8f2Do4Xwgk2uKvcxjnJ1AdPLu",
  "key27": "3UubBjkVL3qZJe7i3djus5UMXSRshShfWGGf2YqHs4sXXWHRpuaz3HHGLVnQh4dr14SbJEh2JQ1WJRe8ns9JqPwn",
  "key28": "3ubThUKrgz7jcB5kkhATAgdPJafrkvjGykjce6VBJviHLoJCNZ8J3Y4YXD9kNsLkPbddbcydmDZMfSWormxh2UqK",
  "key29": "4FUYioKNbG71i9h6Foh5u7wq6GJtMgg9P2MMKTrsseCaFdFuge8yWkAjuhF4yZrEjDYVy4yhM6CmjiqYai7wJhPG",
  "key30": "4cxSyXQXjyBjTZTTUfuaZaqdikRgP9xxA5oZ1X6B7bSWw9pqR6dN1ZUZE8MwTTaSRsTh2yPumeu94MrYWW6CX7XE",
  "key31": "2qntLbXnS52TXGFAcoe2Hj8t2BHw3FgRyoV7HZyXpLWAfyc2QnNaSuXpq9RE2VgS2smPeVBBsRRhsnYkqtUjh2R1",
  "key32": "3ypxViEXQmBnpJ42bUPfDQzbVuzCrXkDPv9qgw5iUNHdouid2baGsaAP2HC56Gf9iyeD9Txu1xgH1QfLryHqQaMH",
  "key33": "5dw3EvjTPuhjDJKjENpvuo1CM1rxM8xCUswCHKgDYnc5V62BFqUfXdvPYi6FELKocTSpFZAzR2rJti86d6h8RrWU",
  "key34": "5NZrHEFh8iS9spvtyTmWXguCUNKrn1QT6yrns2e4BfKMMq3eZ3m2J4n5WJdwTeYyDjqsQ7GHgDHc9LpEd3ZhJnsx",
  "key35": "eVaE4u39yUbRDW5FhCV5Y1XXQ4WzZajaQnmyvcvfk87EjNTQt3x53A1TYkP1e87wuMdCRiZmZjafjuEi1uhCzgN",
  "key36": "3FWPoo3MVVrnp45MgPx8o5SqBPodFwdqU58FroaV6mx7yvT5FHYafB2qHTdX5ZenWBYHs6V1BBtd9XqPWK2ANppk",
  "key37": "5z7ux2yjM5TbfnU7FRAxeBzrTNfFDgBbcAJAj8wdBfzLrf5s85XQsBC4FemvdvsnvzvYfzpaDUKHDogKY3GuC1fU",
  "key38": "4XJps5BL9xxv9tcUM25e96ZqLbhnhqpaB4HQrto5LJfDjxNzGc2z7Pdo5ivHNwUaGg2QzNPL2wwTBMPm7y8Q6zCD",
  "key39": "b9CUfCxMSLtY6UxqM3XQYHZYgPFYFFhpMcmq19ZxqH4xQWFYwRex8PukXy3yVW8BTwg4rm5B62EbvNmHBaSnbQP",
  "key40": "1zUTw5aSpWNCsVLVGfqLTXE5VF5jQ2sakZCksLUdFB4cbbvGEaqLSavqieeqskBxjASidQrhy8m5bAVL6VGa2Ng",
  "key41": "4oaHUDxN1evKYmRXg2nFZ8Hf6jGm9cuSSspjNTACP6in2FxSwmB6w6NA8q2DKiE4mb668i81t4hSX73DNNwvEocL",
  "key42": "2GG63LXFHgG5JwxFvqKh63rKdwkWg3nxCvGkGjGunfRg1BPsE4Fe9kiKwy7t6QeMTJ84K9WCdkPYbMJqhPWE3RXf",
  "key43": "b3HctrMVQJbKi9QwVHLjT4Efua2ousGfMas7GScHdFLNpphHxwCDvyAk73U6nbHr6hvo7dLiiixkoBBrHJHJJYP",
  "key44": "3euuf5EoT68tXwXeK5pYhoEK9ur1MHbm1ZrzizJ3onTPjHKZUVdaeRjo13mju61i7o5uFN2mTooiEeHudHkVAdhZ",
  "key45": "25knMavUCTHQyQdo5EjsXZCMFnchF2Fx3F3imRJubJduVi9x2YWDvu16tSjuqSqXUATQm7R7s8eKZqDKS8J8gwjc",
  "key46": "2BHMPBdP1jfKbnxVWLyNmYhnVtKHMD76WU9bhtnrg5VzgV5mN1c1KFRCokGMhwjc9UvzNfQpw9J7CfdS3hiqiBXD",
  "key47": "4xRQpA9c73U79vqwCJUZoNw6e5Xe3GV6Hz19UycXKV67xj9YMzPpCFgdodiyvnmvtnj6De6BwmmJ7v3h56LmKC6Y",
  "key48": "5cLf9nJnUF1jRXaeLH45p19oMGdu1hy3HZgxRKmyUHHS9n6L1nqV2CynuA4rgWZ1QRAQppT23pavEaGS4Tg1tVcQ"
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
