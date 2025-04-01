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
    "4yGZrh9Bn1rD2eXxXB9tXscB2BYrQ5qphvuePU2RPTycjyciNAAgmKnMGL3m2nU4zH9GrBM5Kond3LGoSLxbD4Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXESzcZTLoMqaxoGZHx3tMKLmTAnKphbJPBZ5T2NV3GXbqt887PRRzy9etGH8g4UeoJeaRnPFMjwCwE6NiGoJ1u",
  "key1": "395dJnvrcxcUarU6aByn4RXgck2NG1MEpdzSY4eDDSryYkLhveUwetZ5rpDE1vAKYD9brWpVVw5MXTwqGjDiFEY",
  "key2": "41c5TDN1zh3Hsp8hHszWb77ss51D6feKxifoUKe96T2AmQ5aGgPSJLGPup4K7owsqkqt8xh1z7SSUnp1vYMLwtb6",
  "key3": "48wr84ttKzTHk8Dvue1SHTLhq5rePEKHwYyzumcvSomhQMeuUSUubWJHSW1e5yPjSvLDFhQEhq4jJ8mSL8DdBVR8",
  "key4": "eCswP984pHfd1Wkct6r7VJT4atniNzKttH38QD4UeSjZShHLtU7s8bY9QxNVdw8FiHU1eer9YdzUhPckUpLrxXh",
  "key5": "3qy2CdC7NnEPRXXsGQSCEM45HWMhfCqAFR4dVpcXo6MT49Tia5KkobuF2sNnbsoAMdDkhicez8VE1HajSFHHnape",
  "key6": "2FiUj1y2jrH3QVy9mwuckA3NwFAb6MhcSgVbJnhJankUrpwiNcehMcNvrAaDNqoJfdzpgQNNSGBcU781fJTiHxGN",
  "key7": "5pwR3jsBWXEwUWw3fKebSeB6rEkukQSwD6QrvStWqm9dc4MA651vuQf4fCcp4stNTpExEKpaT991jjFRse4nrd6y",
  "key8": "5JN5i73nRRGVHhEZfWvz41XWjjZsrRXaYVbvRmFouokjbv7Fc9mGNdYR3NK8djYseEdgvvMwbKBAWnwh5MiarfHd",
  "key9": "3zhSZhH6AmjgztTWH1bHmHuDZkLSNpQ8E5LdUv2ek573NKo3irGin15kouvgLrc17Je9MyvUhVactJxxACX3Darh",
  "key10": "4cXXqBRUFyg8ZKU1Pfd8t76JgSWqPLmRmogo49sxNmhpVaaypefXnvRrmkShQ8AjS1uezaMpDmKRErPScCm5o6hZ",
  "key11": "32qBmEDnLvzxV9i124xH4wCxC6WYijHwy2p49KNjXWbDyd28i7eptjhj2JfmQGKrpBBtVeTnPwpaStt5hzpdh5j2",
  "key12": "3sqBMFf6C3nioeatjNq4qGk968dvQpsofQUJ4AsATdEZ3B2YbEeZjY735Zs6AZTatRyGJ22ce2WfaiACgpKbj2fq",
  "key13": "4RFH3iQnfo42jR3m32QmqpzxEqAGAp1ayuSn4jovbXZVp3oxEMxykS1TmG5gRHMU3ohpYzrnkN4FhMmrwHinaGvC",
  "key14": "5wxMPEp4FwSs656ec1yCWgB8ouf4FJS2o7jJhhtnXqz6ZWkpFDnj6Lsp46Yy3AtYJ6THoHUY51mgp6FH9AVpCfRe",
  "key15": "2sRgKUP7M5ixuntk3e3Lpxyy6y8wdJxerPhVwWkxYNP5YMnSi1oUx6i1dET21E7SM94KEEGp8prB4d5T3vijCper",
  "key16": "3db768agEJpeSCELhjx8mEbEcSfjkAQupVZiw9ZQrHftyAN2GdcNf5VMwqUZAH3XziQHSqHNyTSiCyzdGdMEhRNJ",
  "key17": "ALP6D1Zwh8DkPSibJDXGJsC8MpRcVSw99o14VqP6N9fNbkGLAuBQBRr7jd5LvWFVWDJegfkMrssPMDN8bgGX6Tf",
  "key18": "5t6T7pVFZ8rQX8P3jnvZn7fmuYmhNUetb7VAVJMh4AbqGTypAUmofW83t7KdoJgwQtpXweMp6VNdTWCe3H7Tv3vc",
  "key19": "32c6cDDNYfmNirnQfkBxrtJXTe9YDZmjra3YaAydN2feBcXjpEap61Gh3uV52f36dtMaufhSt7rB8eNA4yviQ5iK",
  "key20": "4xT5xeAGjr7Rk9P2JRwCQkS2GUiQQJaPMXfB5Sp9EwHyFPxVrcdTKmUEp9iN83PjdHcKorEzcxWF7x54TJjRQU3H",
  "key21": "18An6uj9H7Ty1iszDsNyzpeR3KWCPoE6MwDMVE1L5xptQ3bueh4tLHVr9jQ91JFFA7ivF84UxbuFFD5pFKqSqxj",
  "key22": "2z98WUc4LjFns3odQ2fgAPDJUoiE6SzxQpU7kugobWibGpCDNA9irJmMv5UxHG3KXDrZ6X4CLFrm734Uu17GdWtd",
  "key23": "5qqPJE379XjVVrBVALd7iLXNSFoMso3Px2haQg5AfBsh6edNjHg83nhMLtrisiSi5XdYQKhFShU3z3qab4qNcDFv",
  "key24": "39MLPx6p9Cm2Ne8cguMLQd8n5B7cRuvhdycB5akpwGYr8tAmEoi8X782jESDvEAfxWztAQNjXPnDRGZxdnAHQNbC",
  "key25": "5gGXsw5Aiw8rrN3KaGsKnaRnum15Tg8w6sMdWo4A62jZmWfiZeedwWLPn1EoRLbqkYCJHRNTksaRhBTySFN5TnA3",
  "key26": "261HFMZNUyP71bXcCsb5asK9mxdr5Ppg5H4UwkgRPvqkgjbC3sCiSdJY1mwCobFhGZsfCky3HnMchCjV3wgXg8m6",
  "key27": "28R2rH8hnQSxsHijhHbi2MiTxbb5YopB9x4bRDAJen8zWFWJMHDSkbmRZZDMWoZfpQvVQM2qgcmd3aisAK7yZqKd",
  "key28": "bx5oEqRfM9JNTmavMcr7DVEvUMLoUJ8rZe1UL3MvqEe6QS23wF6gvLf2dT9damAN3nW6LYY6qv5GoQ62jzwgZWz",
  "key29": "5B6eCmtrLfhuCaRbqbbUtxmBHrk7S76EzLBS4vdWxkouEg66HzrF9QPXHdwYGALDNTa1SjKjyonKzLB8csFmfepw",
  "key30": "4WQ6BC9PKGw8PArwWFe9VAqh2XecrccrER9R7n4TVDG1T622evxK6y9Vwd9kBCfZwLv95GuJoHof5pM2DESmf88t",
  "key31": "33j5YrovzeD4sR89GpqnKbUYgV1JY9dN5g3BsjfGDDXrPasHR76BRt3nE3rMDGYkC65grgWAyjt3w79FGnvWV4Kq",
  "key32": "2ayFJWDh7drBBFw1ACEDbcVaiQVEiag6uN3ypmbuqEGZxC5Zqx7Nb4qkLzkzTYjaDpQc43QvgFXF8GX4FFPeBvDj",
  "key33": "UZ8kYJqJ3PFuYuuEpYF9uUFa3nwGQy7cSq2v4GR44UB8fcrE7oyFQK3VAERhbKPgyuYQ38NoHU8pokT4r9jrBZP",
  "key34": "2SYRB4rZ7iwzBvjsask3VDQhJ7xqdeu869FLyiob3MNeRmKEcCsJ92HJ4yE1wGU3rQ9ytk7hLKVrrXGzqUHJom2x",
  "key35": "39tkH4jfSJpDGdBqtXdBSF9RUo8NRrwb3CS7LPhXmgqB9crmr8dPij8bS4TYV18PmFmusXdgNCTiUCPdq3ZnaxeV",
  "key36": "2UFMWEuxLduJNyLt5HrHwbvmnWV6ori3KGf6gJAJyDPcMPntfzp9yCj8r1xLnUXXx5WQCHuzQP6B8Ju5PZ8HjyT2",
  "key37": "5w4CJox8jdBQ3xBKnvNLQqi6egbm3PdTbuoYCUKb5Xqoab6M6RwPyihSyJcVWWUWpcXgK67VeAEYSaeyBuLrmj91",
  "key38": "61gfmKUa2TSgXyxsyZCc3gLboFxaSoPc36m7sSdXwzGmtGbM12SRTMRDj8zAVgTRke3tzxsoZ3n5d8i2JiwQbPTx",
  "key39": "33ZnKZtUTyfGn1yeyrcvmkvXyux6C2Yut4ZQA9vNon7WLraa5if9UqgNWZTgfrJd3Lcwwxw6dY8jRSfamZ75E3Kk",
  "key40": "5hyFFBpjc7nqgj6UKVS7m4iihzvTZkbS5HTmWVb44PMFDnB9F3g8xxsMAAzKyPQFqrUyMXCjLTErn28bP5NZRzF6",
  "key41": "MYaBGJc2r2qQNqkFqV1CidnmnxcEVoQZZZWxL6GXA6HkD5cJsRijkkGFUz6nH5Z2qzZHuMKzUD76YifmZUSPkNZ"
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
