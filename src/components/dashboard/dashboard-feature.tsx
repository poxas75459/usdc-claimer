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
    "5MkNzA2Q6AjmBwkLjAM7o8JYWqPW5N7aCuqCpzifANdSDEAqaN7hk2WcYuWmuA2k9Td2dj3dfumbR2e1UW1Vaq5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N5agJXt5y8QhpNuCc6u18BcgRqc7FjD5sAqM2aCCBbB35nLR876McCjJqvLEdUwMBVjfctecZEVijZRVFyrENnV",
  "key1": "3x32zVXAzpmSRAFbCG1ynxHdu6TCiSQwycEQkQjqgN1hkNLW9j8AtEbqsZ45BySKdQfJp9jPWLn6KhSUkR4uNj1T",
  "key2": "Lypn1u3z3KBQbxy4DP8ofkKjbUAu7mmFw6kymVmG7RpjMjkqtz2CgRqXG29b2KhbVqiCbbADTJ3a3AhRzWtm3ec",
  "key3": "4kDxEfnX1fb52ayY8sD6aQJ6cSDM3eKzWZrjSDBaJ5g9VVGkYnM1mf6sZpwpvaKVk69QEEt59c1Cjp8aseYiqEkz",
  "key4": "3RBbnf8H2QV8XhMpEJ3SWzzvrNHydXBP6Jpj4vs4hfGSvqqBa18SJY2AEUMkbmv51eYYmgHbyn1FRNhm23YjS7qL",
  "key5": "nYrHV27Qe1fQVKpxbZDHJx83KjBjWEjPDV3HDxq8ZeiM2SD1uYcZoD1gpvkfwWnDP5Khtc2Lh3Mirk7rjNDrvGb",
  "key6": "4hfgurV7rvA1WnCbMtwE4TKWLJh1qiq2MhZ4DkbE6dPSLkYeVeKQKR4X1ZenCWnrdZyzFrtRqtz1tWkPEbPZEeRc",
  "key7": "5TCke85fBbF9M8hv6dhbNDdTQnHm7HCjAdP6hBRrUaAqorwu9AzTbSozFtS1DjHrroiyasehxtx633DHZkRi5zct",
  "key8": "3U3Y2YVpRnbXYjvVmBseALkzBEvEmrG74uwtfLCMPDh2Yzn43jgx5aphpEL8iwUeSLH8JdxGm4z6SBg6inQrGxLU",
  "key9": "T3oE7nAsy6oXSLeFQncBFtEeBPWsaXat4Wo3doXWhx9uX7km79A8vvqpK19Z8wc4XcCsPCCnm7kpqu3y46EXeD3",
  "key10": "23duFQDh6JXu8Sz5oE6GonngQcaQ4kXRsCuhg6iuYpTAqATX3dProYbWBkSp1bnRacYJ25J5rdSrefmbF4oJ4k5a",
  "key11": "5NygKH9b6NB8h4zPa1zx91DuMLxrK2qp1gDv9znfq6qHVAw7wYAAWb4eLsNye9VFm2hpnQExnMXGBEkr3J96NJSd",
  "key12": "Ex2c8qDV3a818Z6Yys1mVRcekoP4jeZpRcPMZmuD3viGdAs4QRWJFxCa7aDybArfmwkFW9BJvvZD2eJCDTF3Vj2",
  "key13": "4w2W26wgY5CaTAjVUCE2NPJwheQG3N7ykJPEUATE1YhmEVHyUfJdbSPDKvNhYHPezL8TJFLZtYSxz8xPUE7sQZ46",
  "key14": "5wpcxxeMEWMYLHCYBhJ4jsDb8WFzzCrH9WKU1rfxonoKG25KijUyLY6GkpsP2VHpEcQNu6QLiXVGzvyPa1o6qKvT",
  "key15": "N6sCAr9NWRroMNyiV6qMfpNGSgcHWvwW6dQfNsxKhp9SQq3uN5AKS5NkyBC6dAnmteN3kU8nFBw6gf7zpnA5i2P",
  "key16": "4ZkBjW1L7EbY2aeutB39V8tB8STMPg2CD3UcNRbyq3iqp9MkyvtjbNCZo4SbxyhB6FGPHZb9z24ZrfPytXaUybz3",
  "key17": "UzNhyV5C8BmJLWZN3yACoXTLoWCTvBNrYjytBJZnmAFH316fEuLfVeHAijjxTqUEUa7y84Q97VPgUSXwyFMAkE5",
  "key18": "4gEbdRAcArBK2sGfSNbeKB1RDfVhrE6nMKop9gHF2ZLBymYiR937nDPAq4wDwsn1DwYGsqMmbAugBtCGgVzqLHYj",
  "key19": "2e6YKZAXiJJ6UPPjW3bzbR37CBhYdaM6MMBpSucLgJV2Sh3oVLqZEv5rLaGteKPdYS8cvDp2haBK1z75fUAQNDYi",
  "key20": "4iqhM7VzkCXKGYzE8KYoWnWbXUHfCoJDqPwW59LMRvBACC3tTtCT7RTx5wVWvivmijNcfRrXc38EWJjbh7NzGBkz",
  "key21": "VTZCdNeT9tRvkqdYFs79omSR3QRdpkQAJbbFPHU7PmeFyJgTFTG9xGMgnX2cEVBtRdRrru2rHFVH1VS5XCzRq28",
  "key22": "5g6dvJSGp2xKKNeAbw3bS4GLwAiznfT788mFWGy3Ry9GxpQMMUp7DrL7hJSDCVTRnpZQQgBnbNPXZfooW1yoAcPY",
  "key23": "4gw36ipUhEh3tiHEc7iu7yZD8k9b4huokaSPHsingk7UkV2S4Cky3Z1QNuNCFRECGwas9RckXbyaEEiENkRDxqcY",
  "key24": "GcWZz5T47Z6P6erVbNEVi76w76yLVekKXCJq2PaZrHXuZz5YDAnSfx733Py7HL3ABSmCw1LywYxLwRgvmxN1o8u",
  "key25": "2pnsuDbfyfeyEQzM1NAX7gEtoo9ohsgxCVQ88UqisCCwyPANdGoY3uXtvoX4oKgkk6jDnTLjWDNqMp6bkVywECcU",
  "key26": "631J69Du18vyW6QrS49jkGQ5q4Vz9YQ2U2CDDQGHCkYiAvoQKacXFAVJYs4WGEApBWYsEPnAUUPuPUb8QWDs2yYm",
  "key27": "2RhMa56j9JsDihwhaLQSMZ3uHfTdqfqjxhNcg8aT53WyKqTrfjPi63p3CesFoobew4HiD8GSwgZxgqLsGggn6hw9",
  "key28": "4sCrYMGyjGz8fC3cw17yJqonuhdTPvpcwqFM2e2YFMtw1VdGUtEwkdEV1Z9affKVyfJ3dZLhGAw1ytPGoo1bFYVq",
  "key29": "2zcqCYpVrVq6gChe3b2je35XwFhsK2TNm3GV65KgsEDbAPcKgeyyoZjTqtKCADm1UCVcAofygtW2CFQrHfeZKmo5",
  "key30": "4nRnsUT7tjrZfyR8vmJ5iipnn1PLi3DrawtXkBVSHbaTGKDmZjuaFoa2QQ5D35ksqoRhLp8XCb38uPakmAPBncUT",
  "key31": "5ohzBjYjJmg8UfRoQCqDK4NUNMCc4Mmy6QkKzgzPDNdxhwMf2CSs9kHHzuBstuuWYVqd1nwpcKwde79LHCNJxzxy",
  "key32": "5aPSto7JtvyzZLBzqbBXNvkJLpni9ZMHz4HqPikU56MTCRZvMfSgGSZbJNKMnZeoYeMxTeT5uJSruJLBoerYiMQ1",
  "key33": "2w4xMfrGAttyPiGUERatMfKTuxS3Nzdc6Mpw9bSD3BmKHTRxMuQ4ZE7nsQ1f4ZKk3p3T8pCGdo37AKNgW3hTaVVG",
  "key34": "4sRDHJENkycS3wgnqN7yzhvGYSD5sUjd5XmB4qefvSYhbza2twrV43XV97Kpcp9thgJfxQwsELab9PrVfTkcLHiL",
  "key35": "5EqSfnpxqkVZ7ThFpJ4QX8ryLkpRu3r7ne872zL47sBKMQMkiFjyTxEN2PPidieQBui1UWkKtgWve6iBTuUeYAkP",
  "key36": "QfPdJQ9qdfh8psSUTYK2CPxuJF72oL7Sje62Y6qJwK68JisZ1cMY6XmTWnu4iXfoNfenCCd4fbLKV4G37Xnt6ua",
  "key37": "3cvj57ayV4KqEFgmTwcvGvqFQ9AfXvEsEtmvrX5E3QgF5y21YJSA1WFFj5627sXjhRDcMiL46nHsm95RTFLhANft",
  "key38": "4NEXAuqinw8HJAeZM2GDSN1XDbDZWvcH9WtMwLCh8F6ptDegEFTaBJd37CHthoKPtWQxWxE94f68iW38fP5Xn6P5",
  "key39": "49JHDvxVh9KjuvtY4XeadQL7kHk6txAJ4SkEndJpAJNTiSCU4FDnyGG1KDacwea1fKH47ryN9rfVUc6K52Be6odC",
  "key40": "2gAQiCVxrq3KxtXja947tUTDGAhvWSbgBdJfckgdJnpEaMmaYiHUrR1FSQGPeMHuJaqWcYiCJq754BDSn8oCMfBc",
  "key41": "akjYjWB9DrFpQjLimvZEeuvoVuwhXF6eCaoQfnvqahhomihtyEsnusTvV4NSAt7a2NYjT1mcK2KyXq73EthXC6r",
  "key42": "jGSMJrKugrcB3J2XScCoiEwV2KF4Pnoz1AmEqhx7B1tRhd8rzXvciKc12T4ffPMTTQ5VJ3dt4RsD17JrBcFx3eS",
  "key43": "3qEMDBkumM4vzbibJ57gw56juNYtWygmhKm9y1k7hC3AETv4eZy8FdQyQo8ms5gVgwZRyuwywyUCWU8hjw3AfqZR",
  "key44": "4j4c8M5dqHPxATkEUp5M6HkpNVLv7WDL55S9uiUfycfsndDrHrmTqAtT5LgM4XXk7Z6PVHS8cZL6vx8143mBePpu",
  "key45": "4hUuAxYvCEz6GVQNwV4WB2mzWQ1VbEfJTriEmPEgtyCjj3mBBeCWuVdTNkhv5VxwLKLZZjvxPbARHH2Dvc1i6s5z",
  "key46": "5EkSfsJtwDoYXwzssuc7gAx9h3o83RwHmKW68MRvU1JMaJ1YFgbnEW9XsVNXMw547SMo5RCqMPYpmkVfMWaZBnCR",
  "key47": "62SPL8hF9afNZXwUiXRTYoBN53qaEHKBTvVMnDwxuyywgoy4khEHPD8csryGnfEF8keBgAAjgwpnuGNCkb6sAFKN",
  "key48": "5j1QPAcam58bsyDU9j2QUhY1GqdhyjU929JaMdDKQtwEwYL3MJeV51pXNJa3yhmoXxcfenbtdntigXa2nTg5vUb6"
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
