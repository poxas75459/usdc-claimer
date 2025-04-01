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
    "3xmUmC5281fHCXfQi1hXkZggSiK7Zfn7KruzuWhW7pBXrqmFrCWkLGn1zEM1LefQvwiBQpjaDtwixn2C52C45x6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jVTpo8jivaEDfAfKLrG8SWFaq5gcxrDEc6YALguLAYrNwzP7ngMugJjp2mxV19PANfpUQFwEYmxMrHhZM9QxcKK",
  "key1": "HCNhWJtY73QPMtzXKXt553i3uDNTq9NVGnG23j811NnvXsBntHpQCWw52k1Kerfsa8Da1MiYja38MBbopeVVAtv",
  "key2": "57AJyxAhCh4mcEd4NCnLjZyjsbnRPyKBfu8oUmpB432wD98RttjovrQaAKUPBHQTaJMDy45Udjh1816AKvp8TdSi",
  "key3": "3ZpWeV38L9breYSU11h5mY4UR5Nnee5JQDSE7Mhdbf733Bts9Dmav2bJqkMRqD5Bv5SUzMLtxNksCC2jqeDSodWd",
  "key4": "3TWRsRy1cj7g6eDGS1p4vCtaYUq3U1PHueTF6mTzYj3mwp9xY992VQ2JEKe9Mo3vbVbBC1YnNvQgNxLud9LpzHdv",
  "key5": "ii2Qa3SSk6D8Y8Z8hCGq5cLsD8v2yvVugrDtEnEGAtGeLp1KG1TthWEQYDgroQoxQcUjmXcAwC8WcSJAqb1C6jM",
  "key6": "5h3gyNA1E2vCLk4GwKszwnRamAaKSgppdhD9hGuj6UMPJ3soJir8dwL8FGhgBScDaG16ZbkDfoJKZsgVkeSzJEG7",
  "key7": "Nfq9ZgYLxssDNx2h58a78SRrHrxaAfFd263iJaN77VBmBwfwFE5x2WP8XxgFHMSJaCi84kPvtj2wKhdxu4VPbC2",
  "key8": "xhrS5wkKouEwvxKkEz6Hg6a3kxaJpmV1qMQBMd19YUW91AGu15GikkqifPTMUSinK5PfFmbbq8beLFRaQxffZrh",
  "key9": "2kFkPW2Nbinu8a5iTh6g5qSHAcVVvcyDpMz4fZa2WTPfiCpXgWDrady6i8dMVDkwpT5tMJCBpVRVakL3fHhqNy2y",
  "key10": "4eXf4uPGRu8eNbFUYaP93VYj8FGizEN2Sg1WdSmrzEQztYBvSyXxLzK26Y34tBhxKFyLJ2cXw8AfJRhoBCM5Ksph",
  "key11": "2xMJuADBC6L4o9MXeU49s7zTBLrD1F7FtY3gVpqKQf2SC9saZV13gbrDGzubEkTBBhZMHcraL3UyuBE9DZm67f6V",
  "key12": "4zeFwgUW8xingFP7bx88Y3pT2sJ6FBJzWc1JCpcfHaz3H1sNoumWJEYEaKpsKeexuM6R3mfLFtjadMDhaYSzY5R7",
  "key13": "4hDwzSJeQ29qwihTw7ebwLTxphELfXhJ2NpSv2QeqiEZT4T8pMo9sg7m9JFYQqwF743KtTj2HZmkQHPjdh6VPwbm",
  "key14": "2m3kQeopj2tKhhVvCFZ9NahZ8D7QrJi2k4RsdUikdLAMsz7n9g2B6v91Y4i7UvkEuSoLN5zSpHqbCLVACBHLUJZV",
  "key15": "3gqAm9EnYze2C2zqGc8VVdQcJAabSsGjA6oZpQ1UGvrPmSMVoSvttAkYq5YKKPNxLmEjia7FCSKR6zpq5htnnS8q",
  "key16": "s195LqmgbZm4Xaopa9NbURomDh7dYu8zPaJUKhaYVcPquA2thoa9PAdTiA6sSKsMysq1PR6N6ia6piDAgF3Lb5F",
  "key17": "4wqw7RViSCMXtMdZeMLzzHPCNzAfTwKrV7KqmUEsXadjm7CA6H7YfqjwKM6Na33ifkkRmEy3gY41AAuXZJvrkswy",
  "key18": "3uVZFrY9tjQgrhVy1xTD1hzEstrHY2UYNTLo2qKnUcPFDKQb47pCUsdX2ckEhtTQjv8wyRPyZGD5iLFbkd19hnoa",
  "key19": "4A28V6ybbP7Y34GpXhjTF5rDmXXyBFYkHnYg66S3zDvjzFTVsjhp55H9RcsWtBT349siYoyR3P4eaiBZEenYmznY",
  "key20": "3ZCTyNGishfVGrpvqgwmaYjnBKrDc2i2PzXV5y5ozCtTdyZQbwpb671AmarLtEw8d4ZUpSfVdEeGEuAPU1kTyYL5",
  "key21": "KSR1RZAyjZrSFYikBjxwN4sV44D8RB3ZW9m5HBn94tE314kz7phJSEu83SmYFnCqvADF61LjAEPdJnSbQkt6NuZ",
  "key22": "J75tqSHW5shqRctnaGU26ufjVsEuNG3MXUtPXKMKWF9Nj3tcCGeg3ubXXjNkxAxcPMgexGwhBedckqV9jRPV3dW",
  "key23": "fmm96UidGryNq9JiKyWwKZwWAJNSuhTZoeeByqHwVZ9ERZFL2WqoCQYRxGQFqJ5MDz56WLjUEFcLSbLNyggZzra",
  "key24": "qiFyUpQrfQDpNSyPjuX1LsyLyPZECGvPp4Dhr82KhYKkR7cz7iaKRy11fJL8mEt3eXcoWkVSETZxKTBCtf2BMNr",
  "key25": "3UTFjD4sp4JhCC4XB8UWJ1VkYnvHH3BUXtyp76UJTHfytrSjQgXTVGo5HaFqtSbtEdoH62SzMmqTYxHu6cCdNGwv",
  "key26": "58pmSt5QN3FQaqAzVSPcJ9cTecxTXbVpGesVEXPhRbVHacaaMf7RWBrwgybxDKXxUWjP5sPXoQHt2TEsmb2uCw6m",
  "key27": "2j5NKWBsQ5MiphygVYu9oU4AeUyAoefCcWXCRJaKW2BdmiusNATAKVEKcKsLBiyTxY9EXNRaDyZJWsZ6zYZRwKC1",
  "key28": "2dsswck8f8MAyqdN1Jr6ZLsLgsQseDxcsaH12Wf3Q3k2X188QW6wYGkQG5PEJ6uJpopJxNCwW1PqLJFTvHQGiSpE",
  "key29": "3peneLpr53Ciu25uvBDPsRUFhf7kBgEztwPpk9xWs4L7kagfQcxqYZ9dUxmggxzEUDFdXuNzrDhhGCDve2xRCvKJ",
  "key30": "3TNVYspPcWmNDHzGC1DhyZm77MeFZjsBcQDFpfv1rNaYzL9bsoMwZzErEYQY2EmUxQFs6adgZX4X8r6LURt95NKc",
  "key31": "5WouKQZto8jQerK8q8bBzavyE1Fqs4SkpHSv9nqTUYnPy8NgyqZk3CW8NSiyTjMYFDygm41arpck7v7GyLZNFWQy",
  "key32": "LGxkEaC4SbrAqGCXUBiTxix65tBLixWzxCFDW15VRBdk7SEN6b9sSCTXfah8rmmiYKSjzrEYTUDiocWNPP4djzJ",
  "key33": "3LtkDXiqdnUmAoeTQ89U7bkMnFJkyVME7KowarXLE7emGzWDoQXJ1nFBYm5zTq7275FuBgaDPmBvJnVi2JpsXTch",
  "key34": "4cvd1LqCZUJUxiSsXfSDNkHgVMjy8PPTiB2WUQVtXCupKAGZ5r94MsZBrxQWhG66fQV1H8Y39SK31zjMWutTy7Mz",
  "key35": "4zw9tEbqCSzzF3kj7BhEciHxZ8aeXuLmiJHQRhW6RqoNvStNfxsp32LcGuKotEcp6vCgwTr5fGwrK5Z1eKBFoYSN",
  "key36": "5RSqekMzrF1bgxX2MTAobQJkbcMv7rMNJZGX7bVbFVdGDgHzZ3YkRfhxS2D1XxhXwBhNouVSjLtWDBRsTprnrdsb",
  "key37": "c7wcpJjoYDQNWE8HAyWmofwTj9wGchXYycuXaN153Gi3X23P2tCYKJySQvPDdpUukcXnJSYmbYVdG8GqHCcrSv1",
  "key38": "26Ho3qzxcsS6B932SvVi3PQYfFUGTnnLkC7ic2J7DBXQqH8wDAcs7MC5RRUy4JA5N1cHkJUBKnnT7wJku8gKm9sQ"
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
