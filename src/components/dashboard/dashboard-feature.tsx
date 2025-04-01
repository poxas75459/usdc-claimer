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
    "54kYQLXqCoWivPjyL5has4Bkp1XgQmBWJukcNebQyuSeCVhcdTstdM35nGatdJC5zk1gTKLncTU564BgvQYbisx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6ac8ULPAjgrKZwoGq2uAMhyahXFeg5xtV29vNFLR6TKmo7adb8NzZDLRgpseaF2tEpHv9xuVxrq57sK8HCXivA",
  "key1": "4Q5wvJXiJFCFyzSQspyUpipSXHfuBLjhohWzKUQEVo6YHKUH3S3ZE7GQvjr8HeMA4J4AkMTLahfGmrJFsB9p23wj",
  "key2": "47iDE4YXAsFAvSSVVHXVfyjB2SdovoYT7Yyhn2FYYGqeQoiyo4wQ72KdiMdLgCqdzCRoFRxy6LZM2CHvFbDA652Z",
  "key3": "5H6JVAaqSihLHeLu1Uqhkp4oQwAYaEttY3rUD4Uh4vCaAC8UZVhb4ja9Sishs5PRPVxvjQAAwCGx2FvwsFzQ7vLV",
  "key4": "28FxR9EVXHNqRsZvazUwhmDi1bcgk9vRURbVGkqNXMAbbFiTrBwusPZ7sQBeSewfY3dEvS6fLGUaqxADt5LgukBS",
  "key5": "5WTPPkoFonGdqSXNAgsaEdAt9jkae3dtznFEHs8RWLBPdZCAoZiGXsFCUvXXqHxRFCd6nJHeRq8W9gi2BeinSoAn",
  "key6": "4gzuJ9DXpLuZL6aNbmwwJAWFkq6b6s38aiZ1m8Q3siqRENwc2SxehQsuVFCeEF268yRAEaW8oe1f74VrP29gdCLi",
  "key7": "5ye4ouLHFzcpizs3txaNjfU4mtwcWBQ1Tccx9o7r1mzFUeTEqyh7MWwKkw4eAepySVZV5PEUfouAGj5o7vR7ViUb",
  "key8": "29jV9WtszffGRBkYN8B9gKLsoMQueSMoXBDkvii1VN69JTJpUgNf1BPqYc7NgKam3anWeBM76QKX3MNvjLwbXjrf",
  "key9": "5sYfULXobwYhMXQxMSwCu3BoQ4bWnAvwqYc7h267BRqNH3BuV4JQD44g8qE1XdCgx7eY6piiKpnzSPBqiS5rLuC",
  "key10": "5waZhXbQhoiuDNrHjyoENYjL6G1xeHmEfxcPHGv5jcC2TR5VhZEXzZbq6AYxC6GM6VFeCucZsZhSgA31wJRxvmoQ",
  "key11": "4fgPQWATefd3Xm7tvHEELWKEWddUxTL2rwg8N9PnhtpQrJ2EpcDYy2kqroL6wweBuFRuAriZpG6sRr8atAgb8dHT",
  "key12": "3kEA72MqQyDv2ASUbjedgT4dmFz1pjoTkxH1zxwW19kNSnXV4PUHmDAzcSPYBZgdrYwN9ZLyRAb2qidbSnQ26HQa",
  "key13": "3DhnP2MBVF6JaWshwEui81CiatVJsBpz7C1DZ6nCyfLiSY3FYEuTfWJF2xDEDyBxVVuyqA25kq2r6Q3Q9SpKNk6w",
  "key14": "52GupyTK9TjAe9wUYeH7hVnUpq6VPMB6vBArWS3arMV4qz2Sjw42vJZZsR7P9kWYoR7itxRUiPx6MdZ5kijoWtj",
  "key15": "3DxqQ7o62BW7jv7SwLhhHa5iMD6NeAZZVKqWCeVDS9cHGDp2YyRvEHQ6B5FM5WH7Vt1KSSed5zn9Tpgo2iBy1vu8",
  "key16": "58PYRpzFrwp2rjKSgXM6uEJWEk25keF9kjXTdFdSL9rVYE132PRNYBdZyf98UnMXiJSuuRs2o2Mh9ReDHmxazCEe",
  "key17": "52YbF9dHb3aUvAv7yEUHaooAW7Uj26w2KbtiNbmfeBXynmPNr9sq2Pgszpeba1SCpH5jwRwKq4PDDHm49xsXKz55",
  "key18": "2ar1T6PWswYzoSeT5mvAa5xAcUmSMD2GbFc7BEkTQLQYrFXn3RdP8w4RcUtyJhJdz1CGDKHrcMcicXv7hDNwFMq6",
  "key19": "4vnSdrp79rE9X6g39BqagLWoRZW9ZDhZv2dfToBe7LgT9YuhJbJUYJCiAKxRxVp2VFBQt2DcCYMqEKhD3TsqFuNJ",
  "key20": "3uc4RRYh4RheHR3dV93k5kN5wUE8GUJ9eLvtKhDTTKDYga3c2UpaAC5GTWsay4XZmPRJ4ZhLaBfZQALxTYYbYZVk",
  "key21": "5eQKWKpNwVKsuc9zLfocE2pXtwaxrZimpiQS1VsBU8aLb76hP8xmz6pYmJqngdL9t3yyZAyvgh7ZiUACtsa2du9S",
  "key22": "5Dn25zabzpkf3BqSUwW2DKTgfxgexcVdzPZx79eomm2NNM2uD7FVmXCMM4hSBpPNTYsjc6Z1HXh8VYAYPPm62G54",
  "key23": "5kHJyACRpg5ahjuFKqbK6tyxG8cWLizzKwP2gC84PpQwrL5PQCztC8udJiSk6FQoFMcymbiaWrmBvgHtCzKBb2Yu",
  "key24": "5WxoTmypqAVFrTU7wLQ8ScYsXfJwfgkHFjb4dVWGWyJZ8hFiDnWF71c3A5ibVPHWmTdUHVMa6nY1RM1HmVf61AuH"
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
