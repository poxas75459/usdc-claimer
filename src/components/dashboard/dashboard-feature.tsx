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
    "5ofQT5tSvbG7pvBwiTdMVZZbW5LSw9Ge7FTPgap5687x3tfwtec61iXWofmpcVZbUE48W6m7xr7FKGfyxm5ykQhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjG1FrX37kqvY9A4VbjBUSBtpa84VMD37RqnwT4CnaRYwtMeXboEJ6zT95iEcDsZVAqPWXXf7ZR8i24t3aXgSP1",
  "key1": "52yDmnpyB1eLCwLCV7uwA5x2RTC8Xjp38ZqR8jdwNwimo1Y9mm1nyV8Dr8oDPuzeA6pjyU8f6D3HrvkiNKxaEk71",
  "key2": "64wGXpZKazZkjzSsVqQhDtjpWN4nwGi8BkzU51qu6SrtEbgQVLUxnyttNP1nYq2PAZ74PsxMdsYGiB28kNwqMVev",
  "key3": "yCr9GyjSug9DcnATKv1HVtFo7W2U24dfPckdS6PrHGf2BR7rtkVGRSs18yUWEzFG9sWYBiarAVgVrGbEcWopzDR",
  "key4": "5pG4uiDZkGiAYQ7MQWQ9A92fzk3te2NxmqYWfPVHLZAv6zp4ajCkm7RuwxMGg6XzKJW8174stEpViCbV9ZjRVDN9",
  "key5": "5bvNHLNDr75QoJmzPNvvWiPvDPWtVBPV6PqNek5FEkiDv8r1DfzWqBMpSQyTqngD8vhgzFYNEARk67YLmHgwbfGi",
  "key6": "3dU8HbzRtcaRUQFKdtbgzKRUJ7YbDvqnNFPj11TiFEKKebFKNqFFCSeTvzjukvG4ZgC93W8ifVq1MViYUAm8vzdx",
  "key7": "SKo4thHvKCzVJsBmT3ZUbH1hiCDosqyVKgdQhkjpXrNfW3yxt23MdEcB1gAhGbfPdchAALj99ALQPvY4sDxdKvn",
  "key8": "2zoec6vFxga3krZ7m5e9DuXH6qBmnCQWvCNtEwMFVstcFezjar8LxZg4e1moCTet4zF7YLnPM3dnTgxmgfHZGc5G",
  "key9": "5TSHzGeZnVTYzXbopYkwRgXAJKPQ7vATmpSDqscxF3axsHQAaWZgZavrGiXWL9taVomPH9fWyGpJe2cHznt2edTt",
  "key10": "299W3cv3DHvRgkngmEsDWbkzkJtyCQVe8eLEKGm4ux9dXAZKVzSBCJDTVaqjdK3JYmTVC2rYGeiTEbBfKuuLzbrB",
  "key11": "G4UvMRun4vqMgXmRR7WUdbBLsanwqF2TVxh9UTkZAv31kXSbopr2x5GZunNfNtDnm9uJc57N5Y3KuBR3zc9d2tT",
  "key12": "4CHHbEyTmSgegz6KLLjdZcx8roXj3nPgCTbJobSNArWxpHy1mnutyCNcmzfQE7f1yQi6zCmsPM3A4qQ8reknWuHG",
  "key13": "3nANx8kY739EJ9kBoSVNHAHua3uBUypGE6trAMApcXhDvQgndR1xndZZLbYaA3d6QPVcU3RLY8HtwG2rwsiM2yMg",
  "key14": "Tw5uQbEB3yyK2MT3LwecATDk2uKecGPXbjWDHHAsiCpAymHkVNzATX7vShwWFiWWpH8eNqbPg7eC4hX47o3mvUi",
  "key15": "3uCwidEaQNCNmrFLzK83QuEVn8iUiSw2zkMVPm8R8NFTkYx4DjcPc9feb2a1iqSw37LrUGyLhSRmx5wXZv3JoT5a",
  "key16": "2Utdy1gAeib7WeZ5pzTXbSZMNcJtLJAWKfXt16s81ZXz1JNMHfNkwMs13PpSM3e1nKmVYMunHMzXAMgPD5ECjA4",
  "key17": "vXpnp4uYA5cEy9qWkwrPT1Q6ktD2EqaqN64uQCTGQWMbYvS9t5eeFtAXKwN3LHEC5rmhjRPHG4cWLYPXZY3Jrbb",
  "key18": "5pkXA3tFePUhU95nN5Migyo9apBoz2wk1SycyyM83hor7yMN7vGQ1DpD4tBS2JFanPS3KoMkiw9FKQPtPixUiKio",
  "key19": "5jsYRLgcH75hEFPixhRDMssa9N4nEdU7yAb93tJidDZGP6WK1cFCS2qgTi5tvYZa345aMX4x2VGHhbq1x6eb1eGn",
  "key20": "2w19pJnpXuyhAg9PVJkmutukJNM8Mqe3UxoQv38mbZt83mPMV8o35DtJjGDEdnV9iSEV2K1TpocBsArqNNaDnQgs",
  "key21": "4qgMUQcc7et2VYEBJybU1nGzy4aSvRjS6vPTYrKB7EnPDU5LCMMwWP8g3zHM4Gg9tFGQuwzReFNvygZHpCyCVfPj",
  "key22": "qsKyVDXhCGDpKYWWS9dZsSc4bePxTQViZzmMiScuw6yoBZpx8wrrwjZ8XGxcnVABfLaUsdSSzXi7TzGHvXUGBWx",
  "key23": "2ZvhJaWS7pR7aTimZkUi8ASMpvSfouinZ79KT5WWnVYgG5y4J2JVWUbnYsPMDGBqPTt7HEVe7UiAbia6zphjcu6K",
  "key24": "4EzQPnDK1U2vhupi3zzqHwo2ugTxBvQ84tCm3VXYfMtzmWG35y2GqVsSNUEij1kSHRUjoA7NLPu6Zri8Xsb9RJ9q",
  "key25": "3LciiaM4JtRbwmpiBHE3aUvHsmCyC2aRw9fu9D3KtzdfGpcSHTSNXmBby7wi7heEd4cZbCdTiWmdAbn4b1vRhpuu",
  "key26": "N8At5t6oo4EXyCvCgJWPEZF2bsDm15wmw7EDyv7CAUtYBzSzdRxf499F55FdSEMC3MQZpHr52XcdMDKWV1DSeBH",
  "key27": "3v43BcvBR48A6JaZ1fY7JDHcWwaAsv7kgycahDuv8ZhDeFsnv7T6wENcLaWAMSF2rtA2kHdxBe39pgkSQDKDjzrg",
  "key28": "3m4f1RNbYr4zLGUZ72ppBsjpkab7UoqpP5UN2u1WZREhKSK7UqM8ccX7HRhMquWMrfVRik2xF3FwiW42WRkiLn2M",
  "key29": "2HSR5ZzqmRmdXy5s9moaDqXHvRkLFz6FZZaTBrsVW4p2QULMLX7rFTNghNUhzCqCRMFVSDkKKfkFhdmS1HLkyffF",
  "key30": "2qWSThnemBxP7SDsyy5M4q9kmsHKbZo5V6FMvSyMvxXPnWUNRhLoMPcox1gDwAjA6586bA5PFBvDDKq7pp49mU1Z",
  "key31": "5DfaZRMtHHnC2rmSoHnzoheBpAYhf2vbDUkgQx6m1a8Au8RYvUt9QT5PxUpTiopFmt2VMJypyVgL5Qpd4oksSjr8",
  "key32": "5tcQ6KCtdVUrem4Yio6KoH6txMm11dcmcJwUYcQcjpj9MZRJ9HxCU93XsfmHHjLBrUSKDeX96wH7bXZp5bXbCEzh",
  "key33": "2buwCAHrZXK1EAhighwA7AwaLNiPdANwUjeknqNp64aC4cbrcaVS4jnT5z8apr5JgW2ZDwE5HmHW61o9X69DKaNa",
  "key34": "LhnrezWRoQaAaVRxPLDv3TZmV1Aibj361swqxrA6JU5nFQcmgYcJDSDg71U9gKRpvMRCi9WkfjcG6vyoiLDFU9J",
  "key35": "4Faw2RfSoRQska96swRisKY6jaChqkj4LFabcsSGpWhzzUZGtKKjQTt1MjGjdN9vTdYqzDdNp8E5YcU2frWJV9jS",
  "key36": "5CkswfVjMctBtTj8bpEN5e6SvEYCrkzMQkvNuCkMNChCMCrKgSrZjF3Je4YnQrTiFFesvYHxefYSDNCjPRVYqfy9",
  "key37": "2HCEVe99FY8Hxsd2oTC1CoFtbDLWEKpe3NHLMpkkudvgV87C335wMvDKJAJW98bW9m46qJxx4s6X9VaLdbgP1XSz",
  "key38": "6oTJiAH4vUho5QACLLk18zrgfZwbaF7CvKakhbMTbHW6ur78vP4CHYNj8XncgDBN1iG7eHnwKqqpBMjXZTn2oEr",
  "key39": "3fLB5PUEjS8f8V7wv5sxVkX5EyoJVN7voC8AmT76GWympmMyxe78c2YDmxpSzTJvsuyKD2vyTVY1iFT1uSPHhp9n",
  "key40": "2xernCBWhydkzKaxteLAsMXT5o8o14hhRqddcBKbEBLg4n827jicqnRR1SLAM1G4p3C4Etd1S5ToPbR6iXwyoJKa"
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
