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
    "khw4XukLcUJq81FSwcDb4f61gaxnLpHY5vVHvHv6w5oQ4RQTQBJw1Xa814g9z3sAkvegXZxzozHJeW9iAsyXbKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTTQz4DsCPf4XqGaqwPEPDk6dic6agfEVPcumXtHJR2SZE6Hv9Yy1DAUsTALgMrRCwt9EjN8U9FvTtqVM2Qq8kh",
  "key1": "3KXsvkqyQzEWseMzbSAz2k7WKAgwYjF6Rn7Dp6EeBHigZGexzXM3GfGhDGmtnA73XPrFV3HmbQjMUKe4YkoTECZc",
  "key2": "5JYM6t82opDjKXr43ysbG2CDt27X6pJeP22iYTgEyssbo3X5GMDzpeYVFkA6GWd6QmTkyV1xCmx1HqWGk1Y1sxRY",
  "key3": "3pxRvQ2N23M5qJzX9TvJzjR8WaLs64iwRdhn7C5vMv9aoKAYfGPAwPM2awEbxA1wWTToNHfFCuDhDrNkAvVzCBQX",
  "key4": "kpBSVwa79nTvkzaSWpPqPy8TKTpMbaXheVbkHtTRuKQFo7jz9vQ1tgz594cTmLU1bAZDzByf6TRkns1mAsXK57y",
  "key5": "2H58sFbwv16DkMY7fHVexcSAQwRHU1tE41yRmDNvrYhAQqxody3Vtk3yqeg1keqxcNqT4yeUbVUwx9qBuwEWkDv4",
  "key6": "3aGAVmQLiiq3g8X4bE2gwhPrkQs5fFGDe2Me1utityjHhkougS1AzAzk1mJDSe2ZwfkbmEYiCqq1sNcYpr8pqUP2",
  "key7": "jX8cNMH9knf4s9TgoqSUVzSH6Pk9b57hDdmoQdgLmz8GT67mbm5S5LhTfxLjUPMrkCFPHebwfdsmCPGucjpio5S",
  "key8": "2S3Nnv6ihfWjHn8S8zsE9NpW1qNGo1p45a2SsgsjzEs9Nz4ZW2zburEPDgBrTmopEjvFrqSHDRRk8fY3ifHuzdx",
  "key9": "4fYmc1KNpTuH6CVLH2opFrnYs3uQxMY1nhdYt3Et24NVf48fNELAAuMRQ983K9ApRkV8PZyUtgXFhDRF9WhE9P8t",
  "key10": "kFH7SYvU3y74joCpqWSLWCmokHch4NP4wmk17ocvcCpTkVMR4398qiPHzB6asz27e8bPvq4LVYGemvGhmaoGcTm",
  "key11": "5oCKRN6sD2r4fdLDvrQs3NcGK4DH9BuhppE9K7A2rMrsaHrkHjKcP8WGGrK3FZG1zwxLDozwW2nemGDmVGzhYuFt",
  "key12": "3BF8rZRS2SqV6Chsz3stHRLwdaJqDB5iTZg6p2kApLgeNGBkXhDXYbg9HwXW6rGGjpLcQWQJrpqGwSJouUB18hgh",
  "key13": "jpNfukzspgzXPw59Y2ZE3d8dvy9whabMyWDpkFfmTdfj1kLR8Pux7fxHZWjViLVpfULS1bDyErKYZGb7cbJ5UQu",
  "key14": "3ZEtSSWdZGQgGn7fgCpL5ZuyY6u7bk6CnVVKL6kW6RDhGhGKmNW7MZqTUTm2fBFisyag2FCSX7FUtTRea7bvvt1m",
  "key15": "2s6SHkkWy9RkHvRMFPwM4A8dVMPaDdQutcTaMAyJX3LPQsadXeknbPnngUT5ddPYpcUVJ2qUPf6djj8Qcw22rViZ",
  "key16": "2hEvNceFbnnrK3DQbV6YN2UirEvsAA1S5ZLmVYwcvNzfrZrxAyNJS7KJaMXhfghfBccZ95HtH77v3L8Gq7HmHP8i",
  "key17": "3Ro281vHHuucnkqJq8rvMB4fgocLewxZ2V4GQgATNdSb84mM5dgZoVrDVxR3Ja7iXrdbk2ZM7abRHktDTrvkfHWD",
  "key18": "Qc9NfodnMfWidMDYgPTbUnemVfCoAe1HHUXPLy5MUHr2RiPTVhjmFEy7qBmCHjPpHeEmJDxNSbbkqM3GtkCdb54",
  "key19": "2zMimGKkvi71tEw6MNrHf4SAMWXMSDv9M2vxoi5AjyM8umyqheGUdKmmvKUoMVZNJTyCfjGwTBNx7CBiPmV5bx5v",
  "key20": "3586dqo1d2a3HzFpQ22ikmraXTVbDNj3uqGyD56ry2E6NpkV5QirFqFPoUHFtduw8TUGxMiGLTrvxPF3rebdib5a",
  "key21": "4NKDeoumVfFVjacxCS6yZEare6x7evsDvBN5Qg844mgf7YmzQ4tvFQAD4rBCzLWYEzjgQAT74qXyGmDjfMMbK4tn",
  "key22": "4MFarKPEMPiAoq9NpBGyZnYTjYAe8EGxeG7D2MZB6eEpq1EsKfS3HS1QTPFDzumDR41rHB7JbzQv51WJvKPz2KYK",
  "key23": "3omUHjJVycqG291YCzJhaTf2crwae7WtTSLnyWLvydy9k6pKjpQUS5Gh9r2UKRNJdpHqzmXUYi7fm1aNdHbHpjDz",
  "key24": "3C3TMN7GSoDH8GVDeZrDnb8qRrPowDmj2y35B8AcGBj74u2BivuU83LdTH1HXAJLEJZBvMWMnsXCNQMHUGyExVNe",
  "key25": "3FVoLPtH4VS7jVUrHLrjcsPVcqJf456v54WmkKcW5AtdgQmmKDJGkFtuNiCv5uPeX9dUBkUCbqLp1BmgvkNcrM1F",
  "key26": "5tKk9r4nhnG9nTgbEze6w8xvd6JmStMC2L78zRhuqBNFK1danzSG781Q5vC9Nz1UBVi2p1qi3yN17Lt63U4HtrE8"
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
