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
    "61vWgY24Q2nGkgGbptGHqLc7Xy5b7PHEbttMyDCAV8mTg6QR8kDPconDfSFfyhXcaVE5bwhcMz8dvZZoK1mnsFGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfGyjzh5GwGEXcYsZZUNCguDTsvzXeSNbVndkwtKkXGNGcLVKecMN2xSTNweYwKkgMvMeYHnrfPYWoJ4WtzFgRv",
  "key1": "4jxtQgycshG5xKteevANochamkTb7r5LqBtF12bsbUgd9hzWB1YKwjVNWow9Tw2iAwU73U8FphJyrVmrUWXW4Rf5",
  "key2": "5DUJuKjKK1BzqYLDFVP5taMTpnFXPGf2US1k6m5qJrKe2g2qhsHnJDZKL8LbdHvGPdr8YvCCXBuoKJPkkPdA2cwQ",
  "key3": "3DAGcZXxonbwr96nJe29bVA2sBSbkugMTjo7Zkm1GmpNmkPQrYgaknqvD5Yctitj88gMGrm5EmZajpurmZsEhano",
  "key4": "3pZHcEnGxPHsZ1dDVyKcX9wzhtGXSJt4e8sFj3wCmRt9Nhvxka9dAAsjP51myLnzeR6u9MzizUEtB9RXekMiBXYB",
  "key5": "2N7h2frGubaQoTS9xgLogHwECptKitaa8AZf2sR9mmYx3TPPPtLdcZ7yNbSYhkXDSAkZyUau6PUhafLLXaZhFZKW",
  "key6": "3hnWiCkygLnYJ52kekTtrZvHYYrsSn3Pkm1NxEqsNehqcVtBPMpmiMBx4kzhjYX6xXET7NSYtgcpLT7crSmmyhkE",
  "key7": "5PYprobtv9ies7MUGQVMYMRshSbqxssqi2VKFcV1hpnSJXshyH3PPquCSbiz7y4iErDPZm1fATqCdKhUVaRfdh3D",
  "key8": "5mDByoRFsDcVFveo1afR9YyJGNcYbGUxm5atr9KDHRXFL9i3EZis8kQBFqQJGQYAyXLYwYKadNQ6zDgcP557oNXq",
  "key9": "zw9EM6pemzEuDDRVuandym7rxfcAuZhiKBaPqMCXgcjCwKiqa5JAt2JCR5NeSAZQZCM2dEScrFVHdbbLkopUMK5",
  "key10": "3D1EE8dGpmxeR3v4Jh9NUzcu7YWHVd495B9CfQPJ397Qpv6fbChFNM1wRXBWYtbzhZyNM5Un7BALN1x3omV8sHzf",
  "key11": "7RZoAFK1ZqJBJ9ssT99vY6KMkEJCgHqKCKrk9KVqDRkyNkqZ8eT4Br1oXToBbCDLYSQVJ7udYMjFmACcmfDeCKe",
  "key12": "5xH61NmcAiJSTtbcD9wUaeYavfib5fcL9fymn7GQGT3o7srQW2vrMs2zNU3sbDkiwcSZhYTEKndzQcSD7y3Es617",
  "key13": "2oXP6DcffAoXM9ATcHvuysWhBhufAFgrRtag9T8joBwmfuLxf6Kfa7K4ZWWC5gBozG1U3HBnebwQPEJivDPRMkmn",
  "key14": "5qEmGB2T9bKhBEF7bh32jJ7vLwip3yYEdicTZeRjiSaNi5VfZEJnCKPKEeaAMhJWDFYydJvLvoBdKCkqWWasQeCq",
  "key15": "2p2m2X8VFfkuSHSoXw5NMhz1gkn7cGWpj5AyzKFSq2GNqLyKXYKAp35Xisy1whyHvKAa9obxWxfBR9KcX4eMrVsw",
  "key16": "VeNek39tm2ZNsChLSaA8yCi5kQa4vG3j9FwaVvWQKi9EaUo9PCFsa8SzCtfWg9rmDvfqaJ6CF4LDMmFsThNfUZR",
  "key17": "5QZSwND5jMwq88vUgNWU5kYavqiNfgQk2XDqV6KcsS7RRVNdKTQjwvD49BBDFvPDnjqqPPmTrPg6vTh45Se7VMS8",
  "key18": "3xcgB7kSKnZpU1CjoBKHauupLV7nR1aYoZ8L99AJAZZJMx6pQj7EeHTrvAx6YV3qRNBRFvjFxgfNcCZzrupxVup",
  "key19": "xzqDn8f8n1BozLEFBU85KtCp6ne5ppGdfgM8j9PsRzNd63pdpUmygPmQMiS3oxFXBBefPK2BS5GfBDkMe5krWBu",
  "key20": "sNuyjB5WjWYrgjDoaDCSXevKuwXHGepyr4PSH6JQ1Lj3D3o8J2Joy88QuH1etUajPMNHqVCEAjxXqQ6NQtupRby",
  "key21": "1vEoJMMRHDDBTGjNNcjJSe6HYYSDRqQapUg8BnhiVFZNEVQRocMMRCqewogSF3Lf33c8xowz9jx7dkaviRgekSU",
  "key22": "3ZjQkRrTXxNcWbYhPEKkvjm3T549e1EhpRn8HWJZD1uDXnHWXnFfHJanVUV3uadafPXdveZ8C57eEpALCiw1Z5cN",
  "key23": "3oKg2GfkSVQFgJnw2hCjcNdpuN3xgbdLDF4zgNbKBVfzYLKi5GZF1y9AEaG8W8J6b6LF3fNBW2F9GfDhK9XkwT4M",
  "key24": "5E2GdU3C4qBHtUhHngzodbDRiTQ86ngGmdvs2YRUM5oqxFsPWfzUED6DJfL7SSqojmdxprPRjvyKJujhCk6Tg9BB",
  "key25": "3Z1Eix4eN3qUTowNoovyftKCFwGWE4SXs7TF9fQbKhz2hz4pg9zLNfVkMQDn5FRPcgF8S2qzhRKRAWBz46uqhpEy",
  "key26": "2WiYJhACbGBnL3oo5kB9gEbuLyHqFnwtjHhccMdg7WvVaHxVAMuLxye8bdA9ByDhJ7L24pC8tSRsKbY9UdFdSgSC",
  "key27": "5Sq32AgQ6VFLAHTrKSTgBWuckH91gVdHmZVLkuXCkCKWK9XAB2iwmnvhJACvTXaDMKt2JoMswbvp4muFXn7oVzmz",
  "key28": "2oa6c3UiuLm5tEFHD3MrreTSgaBwEkhRobWpegpnUiBv72JfSZW9LcFLb56ZhNN7DrUf67tYHuG5uRihGna45Gnc"
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
