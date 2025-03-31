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
    "4r3PdiZidvJSSnwGKAq9Nf9to24DVJMGJdDFSShcFuNQL4Vn4qeGMFsmG9NUbXPUSUSHRh2tbHNES9AFLnQPYrFg"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4bQqiBidq89CcVVzmbzSFCuFqeXmYu6yNYhg7bWz2ypqVviAD1Xrqsyv34zQxwvCULnxk71o7LRAvkyiZytnqZgL",
  "decoyKey1": "5py2ABhCLV78iryfUcXsVbfbpUfgRmJxjkfY4s5Jm7x6cZbg8UEBUBfynoSLvzVdQfYCaUTim35uW6cNG21uxrEK",
  "decoyKey2": "28gSxDWJYa1P73neG7Hj2Tr1hAKpTKhD8Dp3AhDgErfs2AQP5uAKfbhsrnw5GeRhD4MvgFa8JpxtA1EQjkyFy3NU",
  "decoyKey3": "3AXoMo5CM7JNrBMj1U1o8koYpqZuMtqvPoZ3qpZVeuu6NCtPtLAnnujfbzowUPqjsYubzHbhAeBhLiZHu5jf6rfc",
  "decoyKey4": "3MMZHpWDDDbyA2GoRRVx5TZ1SvvoTHg7YnMom77b7WbppnBWHLJQ48TH9ohPHk9iFxut32cPTnwxq7DoZA7AhsXC",
  "decoyKey5": "2u21QM9xYa4YtUyWnFF1unmHFgw7yR5VhJUu2ec3Ad6XDXeBxjRyhdXH4KXW1NjnDCxgVHGQ4JPudp9Zs1rCAYuU",
  "decoyKey6": "4htAyPv3kZTtsUsck59AeTb7UcivEsXUoYDftFfoqLVqyT4xYr2PEUJQBq2qGvynGpoZotPAhGfjNXaLB5wsYJYR",
  "decoyKey7": "5z4bsXepaPQqgnWgtveEP24Pt3Gz55i4GMbxG95vTs96V6pQ1sRkknLUa6XDWMRTQ6zQee221ojXUgAARsXULd29",
  "decoyKey8": "3qk2aXo24DVmGkW3fWxgj7pRr8L4MgnkMFYaGRKGHqzqubvtvHGkh661XHYqTDGZJsGtMCqA5uxexEm1pTLKEPwN",
  "decoyKey9": "4Nz29FzqdKEnRha8tMHFtGM1hEEfZ14HiQa7bFg1ifgVG5KNv1dr9SknXyK4Hn9k4RpeF6XWSuEAwd15VAMJc1fU",
  "decoyKey10": "Wp4XsuRazMYTqwh7xpsYt1pocKKN11vfAjWs3AUe8mskp4BAH7Bx5PA5ZoEaAHjrxEnpiZgZCVx3MiRaWvoxqpa",
  "decoyKey11": "2Ej3aWKpp7tgjcMqaqp4BciGpqAy2zmYyjkkHobokti9q1BzSt9i94RctnNF81osbKupBguhGFHDEDtDc1Yr1313",
  "decoyKey12": "24Z58T5Y36VPaEHS3n51W5gBAUZoyzrdh3equjeS1sXKfGDTxSQPGiNAS1k769cuxoLaT2v2Eud7mCHh4HFUj5nt",
  "decoyKey13": "TTu9KkkkPM7CZpVB94NbrWgAp3xPoFmXUmbyTC4tJdN1We61y2kH7X3DCJAMUi22F2L6ttB9rzDy2kdzb8EdTbM",
  "decoyKey14": "31tLF8rGQgVJL7WhBA5r73neXoVDVcSnepmoM5EpNpYSo8Xe611gRtyrBg895VtT8xUcXCApxhdUzcqV9dDg4bTk",
  "decoyKey15": "4gT9tu3RNy9QS4yGsh4kvjDrFdNYN9m9QoYzDEMytX2wAhb4BmaG5tTiBkwKjntsE84dCPXHpdiH5jyDHM6QsVxW",
  "decoyKey16": "EgUAvCdr9NBAFFA8iRpaopYCuJFxdrQxtsASNRWc7QT83LPcA3ZC6RMsNv4xTwo3TB1TzYBQneXEQuseiqzXwmh",
  "decoyKey17": "3QAxFoZBTXxqWnKAqv4YoKN2tsvxm6aJP2dz5FFJpZZZD2Gz4KZtCQCfejeNuMPjgKCGFw2Gp2k7hABfgDdVuAFF",
  "decoyKey18": "27JUupkVpZ1HjLdoXwNL9ZbMnkhkpPdGK8GKTJzd5NQus5MyBJz1hkwDndJna3L2hkmCynrwWCuXQQVuTwEzQaKE",
  "decoyKey19": "LVSPC9GtPmWS7aJkSomzvph8q1DqiW8fXxTW55spCW1PQdjWbYztZKRSmk5YmUxPq1Na47uEk69Nf4Tzzuemw8T",
  "decoyKey20": "U4h27GAEBCywj2JhLpY36TWT8p9hpfbQfY577qhb1mtf4Xmxgri73p2se1dcNbYhizDMweXKB3HMZGSUz46cNKh",
  "decoyKey21": "27MvVwM6S7Nama1E8bMH63PdUPZZZZsZJQExeA1c8H7sSq9BGw3tjK76zp6my5rcXWtWs4HHSBr5WrZ9kvV1xnaq",
  "decoyKey22": "5boD4hPH8EDSDhfr2ohkuS6sMx3uFN6GsJaJbtPwAjsaLTwqxtBumcJb4YQWcA3FWfcRuAnUjUnNVkYF3UEJq6So",
  "decoyKey23": "39PrDkL6XHhrisV1KteoAfe6HRK8DZfiXswybVhfjdUNFP6L8jziiruUyqzKfsEi19nuZhCSUGytvSXHcMb4teb4",
  "decoyKey24": "5XpzhZJCdjLvJfSigs5ZamLibENCSd4XT3Lr3eDMpMzCsb3phJm9ZtKtvDbvSccypZmjUiJoo7kWdfB1dCfsdE5L",
  "decoyKey25": "38NwjEAXaGv7CE2P5nMm9MfUs5bJKgkudK6GAgsXMqH1UGCFKnGd9Y74hHKTDThPQk5mPMrQTorLCgQjLxxsxxcu",
  "decoyKey26": "4oWCvPKMdU1CUjuWuSmE2r1AjZE5QngUzqKZH7U9WptMFBGQR2TEqQrR78zfPmcgq12o5yi5MsteG25jVcLezR8M",
  "decoyKey27": "4yKodPAPa9e3Mzek3BXpYnjfUHURo4XuEZa67tWzKykXnb3zArGKCaBDMgL4isg4f6bMAx5SaamxpAcbPPiTxm4q",
  "decoyKey28": "28Rj6AQNfjkM1ERPdLYLjqKDGYdXBsX5WnbyUFnTV3FFpkhg31aNy9z6yPirvN8UPYkpSDqHnkgMCvwSXCemeLeP",
  "decoyKey29": "5zTocJ4S2j3noC13gKsmGAq7axP7bshwVRmhDgCreBJ6MxC8F3AHYRAjfKwEfpQMrzaTKuTALaJWDZHwMoc3TSjH",
  "decoyKey30": "65HND74uiZWPefkSMft8qLhYCZPgVQwYBXxs2X8veLykMYmtzQvd6DJ6yzh1Bbkiwc3Jprpuw22cGyo32hmmRbUh",
  "decoyKey31": "3qMBZJ6UqbBbUUA2sF9FMyMAnUZxMmkAxeijrPhzyn2nVJKtYi3u9ydKT9J4RNuNxLiDSSJZnUQhfJ7RLUEF5WgF",
  "decoyKey32": "FBn48MZFa5fuZ4gmx45dzremuR1rw91VJyogLqQo7MHjZYp2vNukYz7a4tvxrBeLnkcXNfmry4rEPNg8j7BtkwC",
  "decoyKey33": "4VnsgPkDq6Eppt84UrKY1618M8wRGQJ9XJgz87rhMGAoE5oMHKMKRfkr7yWgupHR6d726i6zw3Wb1rzoBEQvoKLV",
  "decoyKey34": "2GUAaxp17qahCkD7Dk8sBQeD7n1pSKzW2jrrGwzwUE73RoPcHWaFB3Jhd1RFpVRCH1ygcutHMkTjLNUimXmFSwRL",
  "decoyKey35": "nanoMw2ZaGht3PJrv57Mghrsdx7nNhPic7KZpAeqaoxeLw9mWPZt2Y48pQNDxGJZQr1Xmk7rMw4D9TTcEA2xyi1",
  "decoyKey36": "febDdkQcxKtkSYpR82U92yDht7qXBNo61DuM2G8C8a2KANe2zziCeehPvqpKz1HXqCnMkA6xCDAFPDPxSog2qaq",
  "decoyKey37": "JrnToMX3NWWUxswngK8cxnpG3GB3YW5DkGdWP67ysWPpdhQ9SC9ehQjdqxm7KX6uZXs5UGTSpu9q6ioU7FigE5R",
  "decoyKey38": "5YfEuhQDBusoveWgX2Si4s7aN78Uf6n4t1nge6nLopwYpR5jLbUb6UukA9EPsBWEdWJmnDCrgRJvRyAaXwnTbXvq",
  "decoyKey39": "5Vz5g7nGFxbR7NGJnjdtH7f4pZ6FHntbxKKSKWYdFiK5piwbHXd34Dv6hWJRW3ndLvAfdawnN8kp8dWifAqysuHk",
  "decoyKey40": "5EzvwVr5my3ZV3SGaeo4agrvgyWcEqWpt3yG5PiKDHhLecSbQ5rMyh5SVMCWLWDN6rc4iXPWVschNEv6ZddrWsGX",
  "decoyKey41": "2TKQvytSw4nWL5nfiy8iUSaRPBoCGww2fEg96yWvSnwMDAGF1qoveyg2fhnFVEFGhmBumKK8jySH3WSE16zB1X3E",
  "decoyKey42": "4Ty3xqKC9FpkSToY6u6eaMCVxtV23HficXLTxHN6bNYvYh8jKDrrr3RNYkUhcYu8GPkwy8z1s51aDdaG5TXCfVM8"
};
// DECOY_KEYS_END
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