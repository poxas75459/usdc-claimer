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
    "fmANQoPGzWrTYZkdJYryBZzTaUn8xUekWBucFmrZenXfni2Hbgu86mSXhnuJqbsR9aMXQHnZs68rFm9CDkHW8KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSBVV7RmCKNr3rKQbr4Eo3Jh3yuX5Fg6zvuNTtmUbMqCfECgoWLydTzmXonbQvTjFftcPN6TfDgsYhCAiamEJ96",
  "key1": "WH8adQfcZCFWJmdSW9wLiqmhPPjBRm6F79eNc1tyZMqTF9RB19YGVvR6itubha8qLZAn9V2xb3n3orrpjdC1xGb",
  "key2": "3QQbbZDfDtfgTbSc4cKjSQBTe16J6Uf7jT4b2kXpkME8JQKNXGLaokoLzG7Rn5j1AEoMWaWGEC52KJF4roTWauHK",
  "key3": "4jHJiQdke866D7rAdkJq5v9ttuU65k1rWCUUbtbP7XpXMGy36Qbjh16P8QTYXFy7vdT92WPrRjPsYiMW3XPSuYkF",
  "key4": "42gqVWzrMXvgBP1yrKgys8F6iqqUAuu7uStjvTzoPJ6pYY26XRVsPkaX2pTnnATAnZHP5cswJ86sWdFkUESbLeWM",
  "key5": "24gHN6qvKnUWK9exz7tQYWwSucPQkhnbhwKsaNxGAUyyxnZUWvNoPRMAz3xYUhPwix8NhGgQNFPmfE9REgRjesCr",
  "key6": "2NBbisJiV33xquWHz3tv4Yf4ekM71FnvMj4s9swR2yv6txPYJJxVoBtGxvxv8KkBur1cDx8zvvxp859TdU8FHyLu",
  "key7": "5RLAGaERTFhzipp8MTqoFyWaoogj9wbvA7EzitvVkwZCGBxDGaZakkqNAKBD57ihs1C52nU7Li3wvxzZo3Gkmv1c",
  "key8": "552EcQuwFyFmnFnLpmZRhpCnn7fTsVmJR4VydZnWN9VPbgMzkAn19qWrtB8sHLkQBqCRWwrPmANzni4AkLwiYCUW",
  "key9": "4nQt6FNYj2VNPN5cgN4HF8ufbbd5tpvz3xjuEhv89yQtdiDDM2MVwBYGFfsGe56AgDsnWneGYg3u9RE88wQbd5va",
  "key10": "Q7mt6vXMSHxRgCUo4dRN8uyS6RPyZdGjFfTuBKyvB5d66npu7of51LdBWbyC95nshw6qjaFX4Ab6fpomD1j4G26",
  "key11": "2XsHZjwkjmKBETYmoF88kKLVY4CzBjTZeSCStcRruK9WWKbFdVzyajVAaZan3vPXRKS3QrfZiyLmtVryVQHNuTLg",
  "key12": "66Pj7LLQeVYe1Yte7uNrYGwDuN4Ba5kkoXH5Rnu4veAHxaNEsgejidXQACTsWENCncn461qpniFqUFcBGSUhGRLY",
  "key13": "22bRn9T8Cr7Q2X723HfoRNoPwVFBpWrVv6M5PgoGiScHjjvuZEGczA1zCX8xZgKQQSKmGbt8UT8GriyKfkqJpc9X",
  "key14": "EUFrwvKvWSCqWxoEXZ6YTibUcEa1cEgnzkQDYvUB5vF4E4NtqnxTaYadEpJGobGqDWhKiS6adodkTzcrZcPAunE",
  "key15": "4euZXrtPiNLGm1J8mpTDFBu6F68yuqMbFysACRfqrrTPER6st4Nzbd6P34KyTi7aAMD9boguzFaBUFfabU3GYpJe",
  "key16": "5WtE3wepZWWu7XFNHGEhvR9n6N2rB35UpHTm18yhSrGHkmHbnxpFc4wJizPuPPGB5dWpJwZCLNjrVAdc6SHY5ofD",
  "key17": "2i85E6mEDy35UuhMtAMQ6u3Xp3HL9BzotocFkQya2ErTcze7BG5ECzpMsPJaWeFhAortBjHbpfHNkCGAV8y1uhH9",
  "key18": "4hCKbBvMtdrixeWWzBkMSKRi3Yvm27f56cB2Kc5aT2ScR3y2W3a6ZoADDrkJbcrfd88XNn8dqDjZXXh3GzrfMT67",
  "key19": "2n5xw9zNGxK9rqq2n9BcWZvgnXVp8RgQrty93s7GmtWFVw3HPPYVdUvMns84vpNvKXcTjMiUKoF1Po5JSGi4hkxU",
  "key20": "2m54xNewUddq5FwCHcYymSDAoDr8yTsEREyPYEJe6eGpPjubcfMcsuVr6QmBwa8df2AqqD3h1LrFB9uhJYikkrXy",
  "key21": "5HfTh5eUhERi8brZNHTaKUDXeYCofWLfTtYcHZbdEwVYTfKyXaPGmxfXeaxqkNqwVLsWDfjznER5zAxm7siQZiYM",
  "key22": "nXok6wcA5DHKboFG6VUPnEGvzjUakQR1it5o6WYPedke83ur3b3rgHxZBwsjEoxA6qebtSUhTeDX8HGkou7QTeo",
  "key23": "YLyv3qNhPjx5FNzJ3cBSq3WWyW3EUWBegUVN881UXtEf6sJeUrgxxP9M5u8e2L92fHP5E96j1fDGWMfuFiniHLn",
  "key24": "2F9bV7fWJHyqbXA2mHHEWFH7sbYfe3BwHrTp2f2FPsRdzgg9vci4YnRS5gPQaUVLpv16UrvMiJQYbHdyG8ft5grn",
  "key25": "2jc4br35nZLicHq4Vs2TQzwQZrHjjXTMgHrm6gyGKgqqmnD5YpQxt9cFqwVgoFyftEg66RKeB7x8tP96QZjfAXSg",
  "key26": "5e3fuXT5xcrUbDJoY4uwJdQWCibZ7hVWCdmF7nzfvpWiDExvCSZy6En2Vw5Dfry3hJcb1NxxjPFbV5sBZ79Tz9Ap",
  "key27": "52PsVtQknaqV2xA5w3rVqFouV6s5idwqxhr35hKaX3Ay1zg8gMHPoPrC1PGwgkESVpqqt18dNcrx8cEoF8ancBB7",
  "key28": "j4TDNDvxJWpvykLQMpPmSkHU1EoAVAnjLYsZYGzQJQs483VV1qtLea3oQW24tyLyAQP97oTH7cCML7C1easMQbe",
  "key29": "4FT3e5X8ymupb69VmZR9ButFCjZgXnDg2SvTpfcZe2naY8hsTY5YfiGev3YqSK3qmJisumEos4pRLRLkYRKSNomN",
  "key30": "5H6f9YE7H5xffcYgwo1H9W5ozZYBxjV1RMVT9VMao9n14ECFZ7cLtnu7RU2qkGMv6VQKKLcwXq8UFssY7VB8qnLd",
  "key31": "66gZZ8tWLjVfuxmBE8KMuFfjF2ZACWBohDHeZpApX4Lpj4k1KmTJ8E7ruxxC7Anrw8u9U8EFSoryhR92uGELbb8Z",
  "key32": "4fVSnUypg1XzkWQLYLhikERKZdPTmbJS43Q5jBvZ4HD9Xn3H8CwSx6MzMrzUGRzDbrS8t8fKu2AzLXdqFJJsDAAE",
  "key33": "61nHjiWZQcyLfCMRMPwhhofTfggg5aZcjUFx5JbEUwgcJrzURpWVMbnGgJuzvcFuk9Xq714Qy7KXWG4kuvHARV6k",
  "key34": "4RyJ88CGegG4dDA3nKuJuSCyQCZZQhUdMc2J8o8RGMT3gEkoSMjMUwDNuj1C3Mezwnvk9KoXASxFgMB3w3fcBvMK",
  "key35": "3CLaQPk52yM2Jhm4BivthU3hgxrVTRiq2U4o6ZuwsDHhicjQcSDYp2AsdFds5cPcqeEXD1Xf8J2M2p9v9vXw4afS",
  "key36": "64UfVTQ3AQyAy6c5xF27jVeXxiMG9X1ohd4b9WgLHYn2MFeFSFqSChmwq2rkRx6q2mXKfJzQ6qyabKCLqEceqjhe",
  "key37": "TNFBReSW7BSmfAt7Wdi2JoqUE17LkB2bNVqVzk7E9SrFdfZKym6ErQD8WvXsaa3k7UBmTBJgGbuUAUqB7umCqWM",
  "key38": "S8QBvLkvTxnfZCooCcsik9tAeK3GYjauUkMNY7R1WvXsqa1VkoR841B3sMxS4en8wZTThSe1Pg4aJ7eixt7bp6w"
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
