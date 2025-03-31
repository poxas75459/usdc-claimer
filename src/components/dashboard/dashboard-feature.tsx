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
    "ocfEah5GbtiMYvESVkorZhEiMnndSqGi8SCdqUMxE59w1YKZfXHvY3GMeTs4mVYS6nibrC5mcBHGNBTh9E7TecE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41i43DKB5oH1TVex9pyCXbVLYoq6UsxGXpXaVPWdRcjQXv6Po5czXaS9u8Ca2CfHyXrqZXu8M3qrNvSkMLbwdMJU",
  "key1": "2hSfpWu1EywRi7UbKXUDcX1JN3TRadA4RNJkyjLdRCdtVyWwfUQed6NvvzaBD5TxH76At7UwqvXsXRuN39oxGj8h",
  "key2": "AoFjzCBgicDdcFFKqmTniZdXRv7vymzkP4RdB2aYAsfDm2shX4WcmVBcida7j21UtA4v2AtmfRYfKi6DCftXuhZ",
  "key3": "4Qh1MbqqPett4G2XmAtqCigJswozZ2Lei8Wh2sAL7GvmrkZ5hAjkcDhxBHBSYxQ6ikJG1XxrvEgCdrXHpQLutcbF",
  "key4": "4JVdXwaofEQdgTKUbFQZVGutyj8PvFEs3YVahm8Qgs2jwoYHWPBkHWe1qtkxmAqPoknRr8X2Chbyn822WktuaZED",
  "key5": "4Fej5hHLDjtQDi86xrCzuVaTCJe6Ltro9JTQpiC83H69qU42pHtwUPiomA98iLT9BqUZdXTDujheAWYKakzQeaQ5",
  "key6": "xhQ7TNV4Di7jAMB5XRwU8DzpcqXF1R9h6zNFF9tMZd8uGNz8nKmBQhmDQjxzA7Yky4mBuZn2v5p3iFrUWZZb2M4",
  "key7": "5FrqY12uJ2LuySPq7AFZb3oo1hRSLqhrDaEWT8h1WTTuCzqtPci9y4PWGUuMki6CrFH31wSnxo4AQ3g7QbVfuxRS",
  "key8": "5ApRks3mvnTavmbDozEhK56EQcCuieLfzSiaXA8gFNhTKNdnRUyumDZSH1PUyEhsJrh7f2gK1dHLf37GyswE3cT8",
  "key9": "4R93yaFW9PsKmRCcPJ3pW2nXV1nSJTZfbPkJwMjyZSH2qakdr9yhbe4oUS8WdwbBJXbtAeQLG4CBvWxFML4bVQdj",
  "key10": "5aWMEUjkkmyPiG8riBZNLrpKUJKSGhKZnoiviRPLJRJuHdyRMFHfcpRxg5EBfBVbim6a9FbmxRDRGPQLgXaeUDBU",
  "key11": "3K7bFwH8WhhwfMpBjTJ68Xeac9oLLSUX68nyeQA4279Sc1t3ypkqvFobygcoguusNmfDbeDQfPBYgSAty2bbKAk9",
  "key12": "UBtufqCrJnVL74tb6zxohYCH7nocN5VrPhmVXdZ7iE3GhkW2J3jUd1W7o8FKp3NAWGp9tA5Zb5dmta8jHfN273i",
  "key13": "5im5yAjtaS6VJiTW3K3TnxhpwLjhphW5PqPEyxMa6Fsg2AqLQAxXm7uCpqT9uLg5HxhyhCpdBLLeNCZfQshKB3Q3",
  "key14": "4ER778p1QMaF2pq2CdJo7g2cHSTn71vo9y4VzpcsJC2sgRdv4bxPdHJ8FKXLKm1jx6et9LUK3YyJhB7XaHo8YMRL",
  "key15": "562fkaGNke63JY2ZHS4B6tLh8ckRV9WAJskwPkoi4YmdJhiw4ayG3RrzRmaDUWzUBabS4zttDShuXTRXieaGukFu",
  "key16": "5ouxPddxh5b4QgR4fFUwHa3ptxzgkNk6z2ubagJBEhAFDYF6D2zJjfP3sHBsT8XEDWPGDKt613xqsHQfYdeFHAov",
  "key17": "4i22TNrt29emUdwjJvyDKPNYtvzofTEEaKwDmQeTY8WKFsc1NkwuNUX4fjJE5C2BwDrgxqScLfWRM6eye69G5XSA",
  "key18": "4jq9xajSc6Yr9LWS3XSfui4iJXrtEP2MGKXrmHmG4PJZLpoiX2bFUbTPxA9Lawmfwg9sbi1TSm3oiD83GVYXaRtq",
  "key19": "4VCrEdnZNJFdNrYtaz62jBShx349TqsrS4978vRH6jkHGUnemo4xSiX8hGyYXw9Wg9V9oCTuubcbJnuKuQZHZGHQ",
  "key20": "XL5jzqRZ3UHFbVpMewjWSNeSzUH7vWezLksipDua87dosEYjb2vHzNQJgsWvG3znwWQJe39zQnbRNwxST1kzKoa",
  "key21": "2a2CpomAE556czUDfqJ9kE1SQfpGoakhzpk7EmXzmAeCD9StAaQnmxN5i79ECcvmiuFuCKQy9SdmthS8YasCP7Yb",
  "key22": "2NxpoPcPb77BgSez3G2qXmb2kkspQuj49WCu6ELyE2B5FakMPXYnR5zMzPZsF1541xECX5KAqxWFsUYzRu3HdNan",
  "key23": "2N5qcL6LJZv7fGssYgBP9QfpA4C3guAoUVSeBSSvEDULFWjTHTJtbPyNLxzGvQvsyci3yfD7xtB3x2DbQQRxt7rp",
  "key24": "47pL3mMMauvo64MYfgNqyyzQYHCBHYThW2RbiWZ7n1HC4kizD7rcJrQUctTUhMzZBsnM59kV2t7fSW1YjCCHk7AV",
  "key25": "3ca5TUPPL8JRYYKZ1XdgPGrpYDpK3BXNcra5WTZTuK3UdiwGG5uLLbBbJbkHhEqxXEhK9K2FJmeRW2WTZJ2dA9a6",
  "key26": "3PFm83kke8BTiNvhZjWzm3b9NWzGCfc7ounSGx8na75idHEm7Po5pxkeLVfaaoDawh8d8tW48invH2XQ9mNn2sat",
  "key27": "2qfNsAvoNLyfzRs6jqYN5f5rtauzg6GeGLaQdiZKeeEn1ZbqhHE1V1XZz92FxsnmkfcUb6VaZhSk2qGEfkh9utxX",
  "key28": "4gkgKuVjFr2B6wSC2sKn91aVKS1nGWwvpDSbcEZGUnVZqreLsjKdXzU9eo6BfJSN3Fk16veBNaxyAWeXNmzeEVDp",
  "key29": "26YkXUsm25gnqLzP3EgmZYytt9MSdq6a1zJEfRctdb3fMR9utecC6WLPgPtY6bQxCnVvqyBdEaGFVUvixaSMEQkC",
  "key30": "5SXmL47qBiiDBqPwejSrY5Y5wBPcQXMH8qEmssQyN862JchwepZBG6DfYgNGDsuW2TPdovA7VjvB4D9rp3YVt7fX",
  "key31": "4PxbdULaTtBdea1ob2eDdiQG3Zt5vfpHvWhRVggV8giehAgm2PdhGtE3Dp5wHjUTzvrvycb7mZYiojwGD9JcAUwA",
  "key32": "daUSV2w2b2WeXi7FU8wQpwuY5GxMfCaHA6WLjxsTXBxkrkVjxXaVktbFp3uoFyv3P5cBraSmDL14WcAs49mXn4X",
  "key33": "4j9rqzNq2RrhdHaMFFeZVFfWgi5rUNeK9vf7bmBC3Xk1G1v7w97H8JZWageJmuc7Hb9MC3nEMFFQPJ6jtNpoyB1N",
  "key34": "24eZZA7mbijApeY742qixvsdPiUaHMKPYTBocpUZpYGaejCF5E48WzKCudt7NfcrRfhxG35Zf1SASwyimH96w52W",
  "key35": "2UYJUBwhgz58xtZ6V6xcYH3tFuujgVKUXyG1RBc2CBS1p6ctK3QtLpxbtNXhGqAXG1U9A7L3nGExF9Fb9hwHtGBH",
  "key36": "2eEYLc9svxfZzCmdPZZKHLDPvVaJKzNGLah8AptH9DNeApsRnasSWHQk65b5Pdqc1kfWStYs4whvVqE5cgYmnhJE",
  "key37": "1gJLy7Koxc9MrKKGABDcaCnqRsu6Y3Gvbn6ntBEXtaSYLnyfTtqs7tchR2K8o534CkZrY3qFixN5TqZQgx2VuNK",
  "key38": "51PDcqyXG7vwvJfL5dKytL1eQKGoiZ7qJGQ7h4kiBEtcBkHv8Zq7DezzNfMviNxuWvfj1vHpDkDFMn7ZdWJ7qSWM",
  "key39": "3HoQ9WmVAAF71s5aKL4ke6Suu7sBtizNhvbkvhKSj84ftLXpEM6jksCMhFrdVMhLVo6joSUhrXzUgYWyHcRFhkbo",
  "key40": "51JLzK1d5a3hozLfmesHESF9VPEqduMEWRYcWeA4ctUC5Y9jQrzccRohCzQM2ZWdqkVHhfMkCsdEuifnMHPsc67X",
  "key41": "3pDjLRdtVWEqTTsBUhnTwKegJnYD7FN9UgL3nkW3QfMVu4X79imBNmCWj98AEMNxDwnihaRC59a5LYK4vrQp8ShN",
  "key42": "9ovRXDoepMAvaLqhDGFKyHNSFMvUenvLFVfCEZbSCpmjqcDiCEKmaFTVuz7dNcCmPAVbpjRf2gTWPZsKd1yXXRP",
  "key43": "2P13vtv4RHjZ8AUw4oyhNFUPwLK6YQRPWYwsbecoE9BQ8QMFSE1S1B4qvfm4sGpvFZy7fy6vMHEMJ5RbfpbZW43P",
  "key44": "4fMqeKEoGy6PaX71VkKrzVw7EuSuHDqJuohEZk2av6JuRcaMw796qRGoy1EvMe3gPFTSwmB7i748zHZkhYi7H8e7",
  "key45": "qA8YQV5RPWng1oTiLc1aMN445Dmy8FE3cucQqLkUNTpfFsr2Ees2GQbHKyywUeY6NBZBzZezYt72tWvxUp9sPNf",
  "key46": "2VkWFCSF69v2hXhL3bv3caqPdMhd6A96kM4AGatfNp2sVS9Hoi7iTJrzmTXFGbTua86Qhwg3NsNQhWs3fiyi5cDt",
  "key47": "4n986VXL4TNgfWK3pyL8NBS68ycxiEawU24S3sBYD1jbaCWJJApdd9gMZDpLtT7H2ZTLThEemKEPx7G1G2wUYQPZ"
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
