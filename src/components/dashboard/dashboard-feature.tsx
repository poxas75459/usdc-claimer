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
    "3PdgdLv5vvwXSAutHpzv7nruGgmo4keVw33PeWJnrZi8WQpEphFwvswaaQfSWEkNuZBYsXJYD56CDeNFEPGRdE5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htWxKMuDS55fhf2WrcbtQxxHgDryHqSnHPZ5XhEp51YoZqGsPNFPH3nvAPzdW2BpzhjZR1euezuRWH5HgG6tYk7",
  "key1": "2muYmL94GUtzwZ9kcHPzbZYLvLm1Wogo9PEMApyUzNZzdZmUd1RW9CDALjku6B4FTVBKRUHVQubjfdPpi572ZfSj",
  "key2": "xfrCUFU4acbjCdF1aFuD8nj6WvKRpCWNciNLL4Vf2ocARhf2YZaR7PzFTm8aMsKuPv6jdp7da4sx3ihV9F2yiJW",
  "key3": "5XPVdrpr6cXDyh4GfQaezXAVb98E2pCmGBBGPPovnJAXZaECCvwPAsGxsepoSiV3MG4psdeJb8XoPyNhz7vTHWP",
  "key4": "3cHCT2CF65cqj1BcumVjtddLhhKv7YBJDZqwXCCVhHznR9FM1bFHkZWwjxXc8um3ewHw1KbyEJ6e3C2m9PnZV3U5",
  "key5": "5D61bX9jYZW4DDqP8y7Fa95NqXPGj7h2EHTgcWMibAMHrDorkv45yra3EsoLGYwWNBBMkxq5F8V4p2qzne4RSm72",
  "key6": "5GH1frtbxhWyVkg9bBL8hYqAqWTvU6Gg8GC83u4nZondRqprLwSpQ81fX9cK7NpuwMpFZv9K7uKDsVV8aFYyYHAW",
  "key7": "4sY6qsNCpnqpLG36x3VuTcenbWhDvU5smaLpENRH6W2j1gv7YuKjy7iWHUxfchU9oQFUfAeFHsUxNkcakRwCbFkA",
  "key8": "42FAVGxKZgDfRdHntSNywyi37sGpKqNTYwa2tJxJ1z91SVMbMh5qbmnFmwroQiACaP7NeUKiEXyqp4c7obofVeeU",
  "key9": "3onFMVaUuKdz644Qb3aTHounY2UG424cPo1PBnFT98DrkomjEgoqUaWNL9QHTgEw2sMf92s6Lv52siGK4xahGTLx",
  "key10": "25HcMwaP6df4nC73tXBd9usXpMV3nQfX3w7Bcd9o8QsM3tvQ1LsBxnWCdA38W64eEoCCo1aiV6yBxBdLhLq397h5",
  "key11": "5KWHMuY5EfQX4hx2nS5ajQu1CSo4DydCysB9KpkWB62x5YPde1wRZnNkgQfCcWnnMZKs8iNf6SvLXfPaKHV5416",
  "key12": "4uLizm4CsdXx94J8qphMiFRnGy3ZsT2i9j4VyStR8E4zj8Zsp2gge3b3yUR4ACaq4k1J56wU95m6haZ3dNuHRoTt",
  "key13": "5pjQn1QoPeUoDCny1WojQHhkBVeJiA8bMbgbK6dDiT8BEirmLFudHdH8FMXgTxsojshM1KXC8TqhmtGcVMnSxty3",
  "key14": "5oYmDcnGBJHJriMa5naeUdD1Y9777nEMmsH6TdQfKVDz61xQ1CkPLy8E8iMGPGHzjoUTc37phh1NCsHXHiHv8EvH",
  "key15": "1jACifArBJmndQXEKNgMkrDaEFWoSMszowCk3gFvt8y9Df3y74RD4GrDcHhJiccGFZmLvFJzKYgNU9zGGiGdJRw",
  "key16": "3AaxZCFQY3GyVfhWz5ttqJcoBjXTRvYMxEA38NdCrYKz88hLFk4BetyXvGeb4fmWirHWaNFrQtGk5jeHEuiaYBBw",
  "key17": "4DvZkJJnbMYtYbZmbKnMHhd5vCdisPZwYwZDxBUteV1MTzMUipyXPr1bfpvBfFKdZUm5rgQnEbi1Eb8GWbPZLfDM",
  "key18": "1v2UMkd1cQprB74HvxJgjkR3GPXGpyUMx3To5tzi7m4XFtxPQr2JceUGWHt71c56K3zNqFpzcgmhmng1DdvUZEq",
  "key19": "AGJhChPn13fFqtaNsa8gGutHcd9B7LcmjLzTRNKuvs5SEBD1QjYwm3LpPjYBGRFq4W7h6Am3ovNksGBG3im19X9",
  "key20": "9yQ4hY1NuWFeNKxzjq6EfjGZ1iBZoKBRGYKzE6mGk2S3fGj6MEtfc8bmRWkZ7Hn87XEZPuEQ3njvfVTX2Maqc4L",
  "key21": "2bPhPXHhu6DLj73Sn6FyNNH9xnWpNrTadWxkLDnE8WSipvjAYkgkJqnMdAjDvtJ2NygXCi8DL8GZMznx49gLH1tM",
  "key22": "jhcSYEBQahGarLD5qYhuybDN8a92yXPVQb3SVZBbsU3uz1GoLijhhbwoac1RMzU5yy9E9qEPfM9ucC4CCuZutQP",
  "key23": "53xw26QfvwepgJ6QpztT23xs1gcndvirU1QjTeoUryajNLMiYwLPN9eynB6K7RPHtst7L2vM8JLiK1ivEd5XocE7",
  "key24": "48VDuVHcgsdA3g4BrDR3Qb8W4HZwSKJXaUtmydT3esjg1PkzYhAk86x8xsZn3ohWu84nbVf9qjWgJ2f3ywaD76jX"
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
