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
    "4aymGP7manh5jmmzf12tBgTsTRC3e3r9L5moKVJL2HH4uc82SAQbJrwJP8MhyCCwvQmAVa7XReqf52LdadvVVPGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDKWHoDSFugf3gnVrAJBcip1aJAJjQd9pk8gnECT9a1qQHZ5UFUw8W4AUZ64QrQEQszgdiR7GBsEVbe3EdT2wFe",
  "key1": "3ti8JSA6xtXLKsLGiJspFiFuy27zYZVB3yaArJEg9c8U8AbY5ozfcREPKbwiqsUaFW3NbkG88sQTRMS2n5AGqFzC",
  "key2": "LhDH3FnWPZ1hTxQNxCPJ2qZbjFS5bkttgLJMG7VWEgqxZmGvgTgi3uYfry8dREjDcCg7aW7W8ZF6BjXknKdZgjd",
  "key3": "3JPmcSDFx3L4xZr8pVbzrUgcyvRe3gnsFjQN4cxDnYbbrg1L4zNop5YtiMzFeoTAHYdu7Yz3Z1SSBV9sQfxKZu3L",
  "key4": "2JmSQzjhjDLinrwTk2WWi52TQ6R2VwExYNhVohKBG51xP2txTipWBnVvqi5GJuuN1UFp4DgaTxTecjBn4Hpu28aL",
  "key5": "4nGz8ZK3yPFCLWHHFpPktp12kNx84uNVH7GMGni8o8JyEyvojhbTEnChEhpasKs3EPobBVjYwNGZmFfRuEUHxFvq",
  "key6": "29b4BWskbWbzBwSLA3sCXf9XEit8vfiyCXfJmY9vv2YKAdVTerxSMJmv9AeXnnjoP1n4j5CEpuKXfL4Lk9baJr2W",
  "key7": "4J26YvtEPf9yhPHVV2AjxwN8K3NZhfYMayuU9V8AzSmposoPvcJpD39jKZJrMdLGhZmwidYWuqCeBGFb7Xh7fyyP",
  "key8": "5QuArDJTWCoyT2cpdTMXs4GZPFxeDm4Fz5mY7fANVFecuaLyAgA3JTRRjHwhsAzdjL8VQCjScqAcupJyqmWUJaCr",
  "key9": "6fjksKeJrSbvVytSTUHsSThY8VGWvUgyiF3bxo9CoLMBK8fkZuJeq15VD381fCkrcJBrYJAiqnaV3ev9Zi5oN8H",
  "key10": "3EWMmDJS8d1Jhf9Xr7KNv7u6NdXqWru4Ls6CQ7QKFUaZR3s6VNRTFcknVLWvnMwYb3wi1iNBbHgVw7BiocN1wtov",
  "key11": "546n6SBGG4gDP2U5NH2Qq9cgTtM2NizEd9Xy5b5JHRjs2N88jfxFvonjt9ZDV1SmBH3vj3EcM9ccTANdtVP2gubA",
  "key12": "4C913zKCj1qxwevMv1VherJy2h7FTTdkTYa8WQrmX95QREhcvGsC9ATZ8Hn8xxU7uwQDvK8s1UhY48Ae3LbdshzJ",
  "key13": "5ywsETfwK4zBk7ezGjwyVmisqnDwtqDv98MSpUbE77QCTY9sCJPB5YxnbsX5qffngHVD2Z2nujtyvXD7FEiZgqyb",
  "key14": "2ZauHe1mWzYk6ZAbyF23x1SxebtqrU6WQYJvFAqTBNdnzYeawmXgRrdbWYe7ggjWS5Xyf7QLpsL1zsjuQ325B1Ec",
  "key15": "45jKYBgD92GGhvhVExHL6tZjHEh3rVXxpGgMGaAF2om1Dzpzuedvp9K9MMApANFmpREiCwBEYYyBJCNK2yCt635L",
  "key16": "M4NgHjwoFtjt62CP7r77wjiJSNVkuXy5oW8E5cimby96kFf4VfFLqcwK96EHENFcPynpXnPqB98kEAd8H385u8n",
  "key17": "5qH74McVfBGdjA8BFxsdZpV29x5a1tgo9kLGhrzSUkRrtzUDN7DmxqpixsX6WpXpLdyhrXsLiYBTF6SSULRVNBiB",
  "key18": "qg3Qev4JTXbhDsDPy5Eh5EaEG2BQZfTuDSZ2CT83xtdda7NCEgPFJXm9MLyvG1piu3AqXhLnJ2TDKcFtqMPAm47",
  "key19": "5Q4CrWn3t3eJpKJfNWCQ6HPrrxap8izSB6sKNWxtbL1M8EywieXmARRL3iKzp1GSby1WDcKQT1TbZtstBYbSkx4Y",
  "key20": "3MuEvG3o4zxwYjgT1EdZCzriR2wrCUd712DUgYe7yCbXeqje9JG2xcphr4mPZkm5Xe9PLP1peUL9BXUW2ocbTngx",
  "key21": "9QcMXtboAsZZP3zCXww9wBH3EnBJh7CvLDugGmGVCDMC8gGm3wUNE9QDVRq9nt5wtuuqwRvJ2JWzEyHX4L3kLgk",
  "key22": "5nG2LJTxBf69KirENX2DigG3Vn1gVyXy7pPuKvcnze4GNNFgeqoKiDbVfzBnqXJTQ9efajiGStjYxETE5joitq1Q",
  "key23": "4YdQ8XCjp6YhenRqg5txNU3G7dQ5Cv45ZGvFdjgTKXHvPGLehjv6hvLHEYPYxwSTPgB1uyJ7ZWyoMyGvvX3nDmBK",
  "key24": "2f8xXPnZDeveXU3aNfZVtgND7JpyNNzncB1bqR3EDa61uTsVTAzni57Q5ajAbsRbVeKt9ZhabnWwCo6EPXy8pQ1j",
  "key25": "5MnmHHrgfqbL65JURMcBg5XJnygyaQFGrKS31wcWUgQDsJficN5fwVhhshf7zNNpvA7RztM6BF26PC6ExdzKKUNW",
  "key26": "3gu1EFdpTDom9MbzJ64CfvdLfKRXBvZD654pa3vKm24SXzF16SaWb1gpaULMfLQ8gnH33Vu8KW6vKrg2cP6YeGav",
  "key27": "m8mqGP1QpUYpZUtcVmwqsRh28v99RrnWamRcoTQMaJrz6eY8BuWU45EkbxCfHVPfNzvSqQVLuKvUGcsBsZxbGHA",
  "key28": "4vejRc1iKKyXuW7GtyHEReGGEBrvud7MrHQgAUgkrafdsKhigi62KmzaBbHNzx6AqHsbCooqHFyUB416afSVCXZy",
  "key29": "5SgkARmyoxJA2B7mJVwFYHjJf9ViS8u6u5yEEsGbGkFdYvZBkyz4DfHtNoY7fLqj5WQ9dc6E3kK8wr2MBr463Vyq",
  "key30": "5MVvKMkrqhH832c441dL3DD4HSreKTikShi3jh55WH83MqyERAV2KvMJYjNqSxtk9zPRgEVPwzbaFmJmLPwq3qsd",
  "key31": "qscUkbLh8U1rBgC84ashPzTQJ6wSUAHVmNVo4VBaM2i7JgUJrhBDaz2Uh64zUBRRCGjPis62YF52AQLmZE7kQy7",
  "key32": "6325s9fgVKyVBu2fv9fsJAjn9KCYCyrYgXFWss3S79JhaoUPSVHYWf6REDMtGhSY45WxKS8BCE6b2oVfAx3rxwi5",
  "key33": "2qCrLEQns8L87DABAvd6oU447YYHLfZDac42SfKPrsX6x1nF1jsMyY1rzaW2wD8KRWrpbw2QNwnKXEjWsJgxRg9b",
  "key34": "xaVhzG9FicyhGMQFvwjQJ8UQHnufNArdh7HpFnY5FkGhpszag5v8A4nJtQqomu2SFy2HKHR2k5njdMrAfrE5Gfh",
  "key35": "2Gs6bB24n9vJjM2CMQMSAUwhzEKb8d7xbV45z5br5VBhRDsJaPJo5dURNCR93MZCVwLCKtNueRStch2q7p5KwTYR"
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
