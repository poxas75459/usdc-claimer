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
    "4D95kADMhDShNCDfEGP1Z5txjuFVjoMgE2VUcwgU7arko9xcymEcjD3y8cAYqQSwNkyjPEkCxWGj3EW9pumGf5qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45z6YfoWiXigJGT4UGaeq3tw1VgsqmFiLvcPyipq8cZnhH6CLhYNXSSLosFVhdw7RgXNH7eQGmDUvBbLXxAFzj6M",
  "key1": "5PMf4xqAmQrBgnvXLXK7HBtUkWpAcAsziVeF4DbXvsQV6YW9vhkMX6SVSzwZVKC5Qhj5uRGyzT8W9YRYrtrY7FfK",
  "key2": "4AAPcY4paLe53nu2fjuw9v5SngtyJNakG6hPNoDxj3aEjdwaRACb9semRXnqqeJtPdVVHDB5spPN4jHXNuezWpYs",
  "key3": "2knAMtXvQoo8v8UeMMS5wX1BtmS2k51YhuTcEZg3ZJN2xeQk56NZzJ5ideU9gB9LRSFjvqJUkJ8KjuPcWQAmuU15",
  "key4": "5QKcBVF18JhKz62Uyas5acGDBfJxuayrAJtHcYWYpr4XbM3DP8KQFBPuQMuK3CtBpgke3rbuhU57ZHUDzXw4twKp",
  "key5": "3eADbtk2qPGDSfieeE7G1hqWjk934Xy4kjGGnYgBtpGgBQdzszvPWQo6m73VvBAFmotKiRYN1zFq1uDWLrJW6inw",
  "key6": "3wVZcahKhadcSfxssrTdcJzZeHCJYXcZYqUnDuDyxCsofsF9NsbPGS1zx2ybuvZmxnyzXqEhYLdPxUuNDusSAzGf",
  "key7": "dgf4pxiK5ymZQzNR6q4X8J6wFLghBTShs21CPzVWFdj4FECzXXt1zpGjQGNkVRDEoBHSHse7Ngpw9jnmRpxYWaj",
  "key8": "5NGdGERq691qqWokUatnbxiWW7fdshM49MrF7cyhCHrjJVdezTW2x7QEHsv8QQ6Dz9PZVFj9FkA4Wgy69fTR4jr1",
  "key9": "4rtVY4RJRLvGWo8CabduzB8oEG3XyBZLNeyqvpZzXBCh3Rxmh29EGyj8JTJvYCQUJq65rGjLEEd8cuo5QQsHZ6e8",
  "key10": "5ykJZrhrXtHY98UHNzRrWZ4S9pnqAjrdcJ1Kxg4tosyRQgWvpC3Ec5oCp3gU4Uz2fzdWHgSzj9hF1swVGfuLkisK",
  "key11": "3XtRrgN3ZKzqJGfT3LqHd6FwGR2dg9yHduC4gT2GK1HQ6iMdbAUDfoCT1QmL8Ki5ZWyTk7erDV16vtHEcvg7JE5K",
  "key12": "3z34pnGcCYhofSWxArSLB2w8gxCofDEmozFvBqiuQ6uvkNnDXGppWmfVmEaUX5fkwvWaCzMM3j3cFJfekNnMLkXC",
  "key13": "4EWSFWCNBWE2muNTgxUyJtffDWe5Tc13iNHcxhzAg5yWYLjG4y5ZqNeWKkvZrcSgPDRMFtizmNF6b1d4ve27p3Cf",
  "key14": "4FoSeQtXSpFuTmT3Xt6QVhSm7F9bmwuBnsHiiAjz1EKKKkyzLiyGQ9h2QwEmPvRL338wmaRfxdfbjt2TpiDurjMf",
  "key15": "2Cp9agg5T4ZGqS6TBM68MUQrUnS3iw8bQCsjnAdD11exjN1fRowfEgWTr7e6BJiEYqwnXCzap6mt6ftGWt95KMsg",
  "key16": "5RrVUhENv2KRgyUgxXQDRW8aggx6gaKMX2ytMHt1i3xmgjThi2JY4DVGjtCRZ4beoo8dsSmYAsU166VdwnSnzn6",
  "key17": "58xavqvns6Mq5pnWyhnQxPE7fb2cyHVkApUUvi6jKYPjLTgwfmR1yySriUWoK9ZzJFAxHkhVFs5ha2YqUbaURbJE",
  "key18": "21HZCg1orbwomCgAnSuvGdWeChFpAu1ZBo3c3xaBParPmpS7ZtAY6dbCZLJmmS3kgftMMX3yD3bsgtN23JwZUMq5",
  "key19": "3bvCbUjEqCJFNy6X655Ye9qA4TEe8pb7cNFhvpgaT1fcJbHtFLPnDy6rP5CwBNEp2bwnAUYdDT6oov35prWdX3kf",
  "key20": "28j4cKfu619kGFXyi1KY9nCLcRh4QfJRVTMNasRJ7Y1HE4iWhziJxf6gezj1WVYpuwWUefDi2qAB7zzMsUBUjeC3",
  "key21": "4qYJFdsJ5gTRAQaqxdhHehtoDfScwPwjw6qvq9c8hTxvioHu2CPdS1uJg7dVJFvPjpyBGagorZPHJEmjCwKKxDoH",
  "key22": "4wnfUFigFJj9sCzgwn3wGJhyka6adZJ5T6xSLFjr3gLyJ9S3GgCqapgbfucCokk2xfuCBbrcMnqXsinakHW3W7c9",
  "key23": "51XVUz7qfmNY5nMnfgQmsZsFWaoU7ZyBxByQfgwdsvXhzAQhVjYT2AiepuASHaNCeyEf29VZUJYbirrGQ2dyiDVa",
  "key24": "G3wxruxz3HRMTPsDALnbvB4fFXtZZkKvEqgyL83Ch1UAXKqE8chpRskqNUpA8gxdBecPKk3SchKE3ZBwLQUtB6E",
  "key25": "3jGTTJ8a7sNtgLusiXLN3xLo13G1ffaasRsiiLGT6byNdmx4UhgoLbemkqW8y5sBwL6r63Ahb9H2XJm8pCFngGxd",
  "key26": "5nLGrM8KDbKbZNyzYAG7d9VPJtPKgoLto3z2tb29R9E9H3HGDhnkEW1arTXU94TLdk6PHoYvV3m8FxNhH61EEcGF",
  "key27": "3zEPNmr4Mhn793zxiTuzyw3JtVXFYfMgRVDSE5CmLh4af872nYVLx3LcqWfoLGBybtDNV2jQo7cjUf5hM7WwEzvg",
  "key28": "4xv1V3svshyrjnkTt96KBBfXrM9T1mvV25agwTeE1odo1nBGapuhRnNLrwFrLyibgZuwaYHJCRmg1yavqwNf6ajA",
  "key29": "vSA7AFQj4quPTbTeLPReiL4ZD4pxuFhnsgzgGzcv1W2wj2VPPFLv2ZGPecAJaXX4s4epJibEHojbnHqrBhYvytx",
  "key30": "2GpL21XXydfknCBVK4ceKegRm6mCasR2aQacTdZtoPj87q15eW5FTCrX2utnRxp68tfj9NgBg2Uto6vJdVgQm8WV",
  "key31": "3vrFZ9KDCF3vRmkgMNPtRgxAtDJ7zpfaWNKUJbZBzhTDiu58eTTno9e5rcWqztE77hJa2uHcyiWW3rC5AYhPnfP3",
  "key32": "nGrrKtjJH49Jm8rhFfTRvWSGgkhQKcjn3e22r2BHMwitHA34GaKTmvLCohhKgREcZfRR5KFSBEeaJGpDksYcef9",
  "key33": "2Bd3JyZhiJ7nSnMhKvs2ZRSdNfHS4JdxEjZ1fLhQfMLijMTZ1BNdoxN8RcUAsgvVxzHzQBk39UGkA9St6YhErMQ9",
  "key34": "4NJUxqmoH2fcaZWntPtk3bMBPNGqseXP3VaXzWQjftiFQEJu22ESbH4JUYzkXAXnpK2bypS9MhgiHNoCK8mr3xX9"
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
