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
    "5xG7thqFNZSM8pkfdp63oYavUecDYgwZBC9enQqnAgRskzqdx9ie7wJoSdHRaZUvMJeJYxcsvG9Dro7ZD4nZaBLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1yyM4ovRhwW8Ntn9XKuWHdqa9Qf6F1Ypypqt6WmNfihRyGodjLV1nkcsM4ZJu4XYGbLpTwyj6WD6YmPM63wKtx",
  "key1": "4UmRhi9E6U4ATnbuYqvLrtjFvqs8r5NE9XzVeqPwTDmZ9s58nNCNDJGUxFf8AuLitDNTkcGk8xxJ7sYbHh2z5Yo7",
  "key2": "43iZyhcWutNaC1NQK2kEpJwnhi6mRavaii4fZYY193ZQZCgxPhjiDKMG3tL7ygegTc6t6DfqU5XG65CwGrjFDd6t",
  "key3": "5rK94evLbmGGdmfLXaL44LipdzKLszutex6rVuNQXp8SQ3J3bSVkKGKz6qMreNZQh1U2ehEes51X3UobNMSd5tHq",
  "key4": "9aGkQqMigChA7NtD8X2JWAbWn6DHpAJgXydmydsAfgmqfJmcrhVyB32RZCbZiVXDQzknZWfq9aYxg7ZAzPraBiZ",
  "key5": "3JannGEhcTCiq4Py99jpH1tExKJngtgPXFWiWLbgdicwme3YH4BjTKxsV3JJUNCmPukxW8vdMKB66FUDjzvk5fWb",
  "key6": "xZJ7bBGRyDhTWC1kMJmn9RTfojAWrnKEjVBDQ5MhvHUSKqnfVTH5VxB3Udx7FfjEp2LP8GPHxjHbYtSvWYCS5qW",
  "key7": "5mh8WpuzTndPAeRk93dcauNvYvUvpwtfbAn7JRjnFWozUdJgQQVjkC566LDpboiUnZRCbNPZ9C4jteScxCCEG1x",
  "key8": "36914BpRWU6Vc7y2pV2Z3pVSj1ZR6kUsaG7wCFPytQ8Wtv8wCytqNA2LSwciGGXU2kXBpdkk8Z8cz6T3hEuTYFLJ",
  "key9": "325CMw5zXN2RPxAn5DzGDgVFrZSH66vD9uJ4jztpAneDjoZJwLCBsfUq1bufLkUKKHrBbAfyazTt74YyjuK3SwJS",
  "key10": "3KWvxybpDV2MDwJdFjMsDT9h4RK3gzBB5zW8FmD2TSqcQZ8JbbnVWQrv7M48SDPAZaZ9mxUy64QhG43T7MCNLPX3",
  "key11": "4teSMoajsz8DLN7RgNP3ZUGvc7WqWsan12pL3fnkoXDTeFQxY3D8AHWremjQcEnrK3wwZvHtCiAQdbpi8MXjfpwx",
  "key12": "3WY9DZC3nm6uc7PCLrHdZB7n1k8SGUw4CrKvZFRuC3GeZwDghy63JUbyoAxE1HiiEA4arfhMdmS1mgLS7ob9QSjR",
  "key13": "cWhobhonqJ3WQEDNm9xN7UNYAp9jbAQm7uQaUXZ8h5krMZ29j8Z83JgUW5zqHkEYHibwATAxZ9ijwRZ2aCfLuvd",
  "key14": "2CKE1dfdKRy2iLmAs6KH1fiU5ukUAmCgu9JFuhVqnao7thk8MA9pquWpUibjf6Ur74bUFtdCPTsoGuH3uhYqiXS3",
  "key15": "3oqS4XBsQZZL9rhwASxgDvZdEUP2PLXuqepsyLpwqoPetb34C41f7HCa3LESbLxcXqwpf5DQp7Z6piZ5VmzxpV2c",
  "key16": "4TQ3s4eT4SvjVkKczghCZTXWe6ychYqTkTYwVx1iEFd4mKrWHZ894EAJSqTJYPd8NvdHSG5KPENakBArVAJyrGmt",
  "key17": "3JrcnxFgkgWGS14ndCPRKEypy3SHMPLibXGjqJTwAMC6Dkz6i8ZFKzzLPKCo5Z5h8mmWSmws8etGaBbykLDst7Vo",
  "key18": "54pAz5wMmMJ1BDDocSJ6878jDDwzaFzvwerGD9xhYrGmRMRpgXF9MzhkzDiCJE8uhBdzziGrtEx48gMyUbSMxQRh",
  "key19": "2av6X1XfBcFZwvzoCfnmQmMoESHyoVcwGTiV8UkTZFtgNQeNwzYKuJJXK7fVGntu9ejzAf3wdcgJayYxfKeNFJfU",
  "key20": "36DUg59ezPaDPast9Vgit1LWhgMXFJAgYts81ysyPRQGqwthsFGuEVMooXiJ8upfoG47GhGt7xPfXePahp9nQTpe",
  "key21": "43ahRWvtmzEoEkEMjaXU4hcYHEoagvZSPHK7yNB4AvPEXP9sUqxdRbpphPEBLTodeX91PUqGdPuesSn7HNFzAybx",
  "key22": "2d2dXRazFu9rMjcEzra9HXewujQFBwXfgi9xgsboyfu2XdTVNSqA5Npb2KhYxVpzdsB1qUGSdnvbc4KDDhr4r4DR",
  "key23": "22CXVWGk1hYySp9DQQAHpMBU3tS7AKLfxbYwCBU8j7TYc3gPrkNccZ4NLqV7jrydGyxTM71qei6fbWk8TCbxidFV",
  "key24": "yht1ujvDQ64vd97kaTsDZ9iaeCmBU1DnZ5TXiYGAyZyGKYxSXzJ9638x973PkHurQxRjWRd5izni5NXFAFtUtoi",
  "key25": "3eW1xQ3GHHhfmepjf79Z41oxssPVNySbjt9V94iaEQE7ZJgftWQkFHCvRkM5b7pqpRXSGPfhYeykkWM8zsNrFAXu",
  "key26": "Hh9u6yGouDgncsRfRNcNsJh9Yy8Fz5o98uaWcpm124dDse5CtqGNUmMPmFWSaWofgazkFf6kW2koTCFJUJjM9j7",
  "key27": "2mL2VqppMzFLK2CF2FzkyutwnKAJcsSge9apYZ9h3jqixNQLi6wkNmWbTAJyLDfewsLYAgbj5m6apnfNgvm9GdUX",
  "key28": "3CfHifhab9hQgyaCfZHY6NNTHs1WakUJ9vq6kVEs6zJDFNEorEimp3ct9JKr56sKqDSEvmyJmkuCwQDdvRt9A5TN",
  "key29": "5TkhDtrxBRyeoLY381Nvftp91GhEvMdm6aUUmo5YZEmAkgkGqyfqLtLVxR29ebC2PXMLJtn98TQ5NhGRpjDsr5Ec",
  "key30": "3EwrRsG4tUfLHGyPSBrF7fkfd4t1FYcbcerk817a32QiaUxt6Ud4gN1BGLdx8qEe1UkW4mMFP71y32BDk9Wj7MXz",
  "key31": "2bPXHkAhWTMosEc6ToDhU55F3VMHN45S8Jipn1yG7cYF67XHvCZyaDaEubYos8eeLhwtB2TkBvouvvdkgi1ibGZR",
  "key32": "3KL5Zw8YLBmSf7YNurecHRNXQJhapvh4i2BSnesycBxMk6bNANHVSthH4ctWXyFzfR8grecsGJpCz4inz6EGDgNK",
  "key33": "4E6HeMTtNFyVUoxC1giXr235aG6FyLL1pHkzQBgYPYqbBczvPmiYUk8uKauzb3bqL2cS3vAj4m7chx3QjA3Rw6ut",
  "key34": "no2N9HtFT82JUFnosP9J8crSy4yRbE2JV5f4A1vgR8QpgKfyP5NKKyb1uxzw7LZfFDVddkRbgekL8w2CNZDe5CB",
  "key35": "3hYe1YUewSuD6EfJTigcT9Jwajp4xo5so9QkD7he7XXvJ4reo8DUt3PqyDntUFnSZE3vJBGfGN91uDmdEWWhdbYG",
  "key36": "5XDs2KrpYzD3fz62JsYQKKs8NmKSpZdHfQmpShhip9QN7W57abeeCxF2jdu3nG4SYNYdwi6U93uFyR5sUP7UvEzr",
  "key37": "2b5rVH1PZtL7zuGwWreNxCJmPzT7Ad1NWZnrsn6TAS3XcxdHaaq2mE4ujFMv2NGWaCZsi1dvdhsUfesbGRAjxKHj",
  "key38": "3cVWFT5RfhESvFA9GxDfRGQ9GDprBAfCNpJFtrLSaJdmod8V47U3qV3b4bKjUNxPvBH266c3ksLX5Z7VuHL5Cmv8",
  "key39": "5vQy6unbPnLkD8K6tHNxQB4cSHFsfYhkyah7z8ax5bAcA9qx6GKjtFhgvc35jFK6tPiFvTbM5SRZUaQoV2jqBjsA",
  "key40": "5MF2zqF3VytwNX7d1CrmbALtLdcg6Mb7AqLvdL5jsWodEgXhn84joPGqt4gjur5qMJgkPMhe9EsnRw6dcHVaTHnk"
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
