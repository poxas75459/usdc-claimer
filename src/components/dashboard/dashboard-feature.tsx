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
    "2K6akM8NxbbD6y7cRSn3KhVqwe8fjNBrUu2srh9rQn1ceCknmj733R5Pvn88SsJgcW9KShPdK9xzWXMCKiHEBMHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31W2g8v66n43WE7ujAUTiMdkk5YYEbBMs9jWrAKaxeMSysosgCnvjx8avy3zS1yro8oRTwFX3PeTLbtqvMEcEsjG",
  "key1": "4KzHSeSw5VJPJegwiGB9yeJPG412mqnZP3xotMV187TH7EkWD1oqusG43PCSTi8CntXvTEt6hoayHT2mLwHsRw6v",
  "key2": "3gGkzbA7y2UR6NPpRxo3JZXbzzdZPg9fmy3VwQBhavYqw8918AecZAHbkWPZqkFy8RpPqZ2VFfvf6AdWFSepAxdv",
  "key3": "4EFGQCWQucLaZ4S3aUtUQMEn68sombqxFPtUFL9k1WcfCkfMwT2j14KNYKiX4d4vecJPFJQAYJn76YKwzaPwnaoK",
  "key4": "4cZ3SrXB1g7Vno6dqTqRpGFSm1prTGPu2sBAewBWoXriTe149P8XqcJZ8tUfVBChsECjw53R1aeVQ9xgbTHfEZRB",
  "key5": "5hHbY8nScxxaD1X8JCqgHnv6KipeHjFtj1ryJEBarn8opcQHdVAcGg811hYYRKr5FUNDmdEfWTWSoa45icuTvvpm",
  "key6": "3Aanzox7ChDsUm5RX9ub42mpehvHHhYoqZx9ET7esjnBjQ4fNxdfypd7aUfz7m6xABx9pLjSMFR3wyyo9W7zg9yy",
  "key7": "aaemoeKdo58AJXjS4fNghQSvB6HmkMToCWWgSpZkxvqMaZJQKnFVEecc4TXTsxJvQNB4EytE6kzUi63W7qSSTjn",
  "key8": "5ZTdVNXoZMHyJC5ce118nxvxnmUM7udLsvLQzHwNJUKm7Ns6Qwfcu9KBMvZEgeV6a4hNhuPwd8B7EexPNDatP9kQ",
  "key9": "V7LV54suvU6xijFkcrUJcDStWj2fSNJ7zXGGAXXhTvy9x6xBKeMQkRRhGzKuzsHCyDMfad154Mpjh2AkYuMmfsJ",
  "key10": "21AXDbvC6feQG4PW7j1gKWJN27TkDYZGtrtBfgw3wtsb59zWRHTqgkQZPjpC5W2dM56AfCVxsNosY5z2AvrnHKck",
  "key11": "2Uzs71yTPapvProLRmwZFhGcSovivxExMTEPKQa8A2nUzvGZaRhdXZ28rHTuzURUP9XnkfgKJ7VSLgfQAzZrAGdp",
  "key12": "HhsCrMwZNTEEmEvqDcAy59bTtUZ5zq5LrczJGdCtXmQrsVbsubcRBpFkgtacA1pcmaMh837VQ3xryCTbatm8DA4",
  "key13": "3v2ZdFpgEwPnasWwmwGV5vRm9dARXj6Ljct5EzYhUATNmPs1FcP8DcngqRxgDr4RCYn3a16UxG3Ujdr3JxuY3GFa",
  "key14": "3QVp5VRjc9rW7As5zEvKYYQsYV9UETyDT5JzV6b48ZcaPLLscdtdNmz9YydSAu8dHVPi1oLXeQfXUPe8XUEAckKG",
  "key15": "62qiGiNccdg9YriGDWxbanXEa8LhuAJEVFBeqG8uxwk7PiF4VqYtF7WYfTZPT4VAhGFiouMn2CTy1tBaHUJX1wnh",
  "key16": "2iFzCEiQx3fpdSfZYVubtZEPtvKFEe6mjP9tSXttSLM5kdaoqTkLt9toXkjtwcLtirjn2n9B8ZnV8UcB3jaiUnSj",
  "key17": "4UTrRMGKCt4xbWyD3tcCe8xTwnN3iziQbGp1HtjEuGqeFjpBJjcamv3EYRQmpU5TAG998vogyQ1PTZUwZiyUcFN9",
  "key18": "2tbUEotzoxhj9g7fQLmso8GeyrmYi7NLUzSDdPdQE2w1NwhNyTqgVa3fuq5AKHqwaju5c8GwPqsa3m2nN8V2A2zu",
  "key19": "5CwYmecgA33ensegTkDbG97vojTk8tPfv6NEweC5dQHnrWyvxWgNk9QX6kAPJx3wvZ5ohkxyoqsvR6Rr9hJwj1gj",
  "key20": "4Ywj8pFHpnbPffBPA47DfRLvTSQWLMkoZyRrh9vbvLdznvw9VBemuKZaAbmUfAJ2YwJkgVysTSzTDSKUmaMcAj8Z",
  "key21": "5jT6eAu9BmTXiDgpkt4uWDo9ua2WUTJEXR6wVnwKj9uQMKwTtEZTjkCtgqpUtpFCqQxWwzYuU2QBfjtALijNbSSS",
  "key22": "2TixAKXJAorCJyhopZcZqciLM9EDSZK2g1U296a4WDV6RrimzYpTCK6BWpyGyKLkWKXdv564zHXbjapKzwVMYeoW",
  "key23": "eGtSx595LcFk5k1Q3Y7H1D6M49GYYnvoui7L8NjiTSAKp74SZLnokeLPYGAQAX65zC9w45HMbKeX7aQuLKhFqe4",
  "key24": "3NRFNozMJwjwYpMoy3M4bn12MDSA1mUM69sCfg7cic3KW9JsU2D5cG3fPoZvSYAffx8qmP8iVVuHbUYiXfPtKzkw",
  "key25": "4xt4gVJyfaeYSbM1r97T4z4vDHCH7FpfgE1CsT8hphuGesUG3mA94mgWmrEFnZ5KLDFLP1YP9xR9V7Nouw6Cq2WZ",
  "key26": "2rrWETgsVKDFuV151jogzRVBLgQX16YtTC82CXNfb3QmcxjhD9B99FmsM5PCVN2hVuWdsAaYPUWQBv9qb2szwRSS",
  "key27": "4FjNiXcgASRPh2acAMGkMrp8KZ3QE8m7yThvzQ9u4T1S3KSqRypBfTeaAhDSpQcBAzm7t2JYat2gkAh46wUK6mZY",
  "key28": "4WwxovZ3JoRn9AZoGzuXPgHTbcGbbPiNmTV4rcUWbGEBfaZQKerrsBoCGYw1VqqV21QWgTzUtSEEgq5SuBayhSvs"
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
