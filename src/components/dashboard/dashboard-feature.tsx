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
    "5R5qdGte3KYezV1vP2Gqq5JPAMPnn37d8SYR8CThejsrkciV2prm1umB4SnSiiUDMsfL3RqA2XFMhKrASH21v7j2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TscLz6hea7fgdd9i1f6nkDU6kFq6jZcVC7KxkC1WHj7pWUhFs4g5mBCdovkgNAc3KmcGhjF2Bqm9vKsn7d7CEEd",
  "key1": "616R1Xj784Aqp8gAoDJ2bP75JfwDGtPLUFYDfFWdwYmwBME1PfcbudPHP3x4j9hmQV9bhgKxjATUCGL2Cw1NtSxo",
  "key2": "3KiB2jZUwFv1L9Hh5bxRnHPgM5QjcZPhfTCJHV5BQhBXRDrbMeYRWUikSHrDBmAmLsq5U1NA2qQfJyiHvmyWCD8L",
  "key3": "2BkCtkzGAafkkehFDRMvyrcBptFpP3rhDipZQxTuXrTHfGVXbbFK81LKaNWosiTGSgvuTkY1P2G9xKRH2e8HLmqz",
  "key4": "43yNqzdA9LkXqsAM24NEtpZ6LyKgycDzhdFPPuUKSpTFc6LKkizMSCXBT4MuM3aqBT4bPN3zCj5mNc6A8jgsPARo",
  "key5": "5fVw259zxTrmd6A3w8yCMuxbCsgjydiiuvPFMh2hrP1bzwnvwU27rsDxkGpqHcJddXQJNW3g2j3yBYfHSD8e6Aeq",
  "key6": "aiDLXgj8WRSbFWTJDVZ6x3RAvFFTMBe8f766TDrp2JgWH6rcuNQG71c5Y54VjungEBSjMA1qUysBzf6m5AJs4Mr",
  "key7": "2zambY84PS352MgX22KC7kc29ggCot5igbsggL1fqK7Y98ewWKMYXnY2V5QX1fto8CGmyT9Bkn1GdEHVMkLGZsKU",
  "key8": "4y33YvCEYX1bUXiR4mtMdJQYdbxd1e3k998YEfFH8krv9txbSoaoGw9Vu6NNUJdqRXkMThYptfrrZfaChhT79v6t",
  "key9": "3Q3RF2hYA9xGpTrjw4PwDmnDKeo9Vy9dBgmRo6TpSX2uYdYWsgagSoKvrtCG8uvqUzcp1UN1cdq8cFxHxELy1PUT",
  "key10": "2jSzt1ruwya4x8ycsh3uoS8M1qP2QiTmUqasDZogjRRoThyhSnFAkx92c3zwGzDKu7TExhV3x5JPNrUxVMskSrrA",
  "key11": "5yqrtfsizdMLbnvn46wj4chvYd4foA2ZX2JZQxfJ8hsstUKhzHCTWF2VHGoYW4ez55M9iWpTUAuBXRCrb7v3JLeb",
  "key12": "5YQ9Z8aNchL5hZk6MHohC7F5fRdAaq6w6iWUWK6fhWFFXy9rHRsk2nRmSAuhZ5xciXTFr7ZUcqZmtuVnhS1Wx4bM",
  "key13": "3n7ti231KDorEdPpUypEMXvd4NUGcsMknwzEddxY4PmwU24Zy9hsBP6fh7Fdm3DxxeDFFxdzwCVrAPqJDqfHkTo",
  "key14": "3GGZu38u2XNnqvd7tQKcfZkToLeHuULfW1mf4YbZ5pCa8iXytuXpVRaf7h2SiwxixsEa4PUxrmrCvCLC9iA3Yb2h",
  "key15": "3rtLtcop97yFobNXj1ttMazi2AgrABPAKEorqF8CysTZ7Km4spfTiU4iwtFoh5taKTrbyuaKdSNrK2krs1U6Xk8a",
  "key16": "4MUe8Y3XssdNpjJoX5BXSqbJBvjUSAfgf55Fu5DZ1YHCk6Cdu9XGXf3CyC35oeb2ewd5Xp4DZJ3BZqVgbe5mik4S",
  "key17": "4LnXyjYwX6185vSot8Dv6QeZTsbfFAJzGRFLC8eTXsYBvwYK6zdDFHL1ms1vQ7f8PVB2NkeyaxsrCYDX3kbyADko",
  "key18": "5Gf8sqJdNb8oPF5c7VW85F47zhZJz83fXsvUeHnVmpmkXnYAjqn3PsLsL5MWvUUQRDH4qsXJjri46C4JvUzFnsZ6",
  "key19": "3wRVkQSQVWNcxKyaGJScAYXPf5ar3Y8hWjLpgpVe5rNjqKsoaoseBN2zdPkfwTYHs14gLgJWJHHzgGNBZ1i5uwxG",
  "key20": "4wboZce9HAEPXaQKPdRBAxnyzNV41UPMyN1ngtRx9GzpgPrC9NkQZKDKxuLad6WyBaaYYVqsFstGkPEKrZL4p1ko",
  "key21": "4ub7PMfX9tpLkHARzzfY2UwNWgwFEEEyJtFPLp7QA4TrgR9rXJiLs9UgC2ntwMVC9hAmbK8rDuEXrxmgoiX3qLyf",
  "key22": "2E6PEe1vkhR4fDXBHzRdQ979x2uPPuqimnJBqZ1Z3v8k3HM3sn516bi74e3LGfsuFvJ5vCoaSpA6dpTXshZTvida",
  "key23": "3mhfdVcQdNY6tUvPW7Kiq7i7mLbpZAm4r2iPaVeYspDff5kP4yQXk5RQJ8HHRVaRLv4ANnVc7ceCmZySyzFtpxuK",
  "key24": "4mpQeCBgtpF25XfGZKezVQk6vdcfEXxEZd7noAneStBSqH1eaNK5cH5PrjyiUrNPyKbSJiYRXQGfNd1vU5sSPokr",
  "key25": "Pm7GKomyrpcPvgMjbqcrpq9pbbZAU5yPLDrq2yqBRvjQ3GNHeE7eEbuLY3WQP2eGHj7HFUchSCKgXAgCnPkDTwW",
  "key26": "4hWfuzmnQWfGdWi28AnsampKfFGaoPGuVa1e2WhfD1LcNKUfZHThcTegLY9X6apNPDtgchiVYBoBBaeCdnSipdRi"
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
