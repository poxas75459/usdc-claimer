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
    "4hQxUYZEPvpRLUtvC7UtkaBVyEJSJ8vic9PxekvNxRd1UyPCJmuRww79rJqzUbEBnrKx2Cfj366PLUxPQnNdWBEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFHxpgwhctKKytSNfTsaxPskD2zYJgDdCNLPgUpeLnvt8ZoQ3QPf85rdHfpdceXe1JtXFFuJZ2UbMo3vSPLV3Ge",
  "key1": "4t8bEmxeTegrmRiQWErbKQPUcogmfYQa9tPhzeqcRSQM74ZBeM13mFCXyMsDWT1H4QKDoy7yojVN1CYeJ1wqP8pH",
  "key2": "25w6a2v9x2PFwHR3xJzBbwtTGrSGDfTUCVTBAfnnRc74NkPPMWYtkLTYoG7BGMfzTztAfNVRbFtHuTPZL3nAZaDN",
  "key3": "3xUp9MSj97Zghtd1zRHJUurV9tLXbVkMhbamw1ayAAtFZTSQoRajPsXpEH43UnSVSUyebK3KuyV14ZuUisPCRxCD",
  "key4": "2kjj33P8SgykRa3Gri8HbutG3PjqXXENarEHMAJTjdvSejHz1JporipE6Z541p8oD3nRUbzzgeqPqA3MMkLcEtxh",
  "key5": "52FbXyFCs9cqPHs35XZKtXmqYDuqukbEW1HaL3zXshdoDd8eNqau1nfZkfkg9pn5vqN15jQfGv4cqL2Z1AcKyXAy",
  "key6": "3fDShewYJogtwVetBPNbXxDcdPrN5oCyAqK3tANhADyz9T8bdCLxdK3ZZQF19gbwuah89inT2qUgpxHzsTsyMdJR",
  "key7": "5mbvzVEASGVdN2nqpKHTRQ8tYmTxixaNzA5sX7k9Kp4SXrfJNfEjUKCfnQGMxDxenBN8m9SQ3Mo8ygQiyanEUy8t",
  "key8": "28nMG4b8s1MPG19QR9soiyPdxJFxJnfCD1fbnZttozfsTBaTzcaGJvgJEgbWytFAQ9dAAbGD8ZQpi7qRnWezL5Fg",
  "key9": "naaKuqHnoTrZhz4nV4aMbwB9Eue6DaGDtG8P6VHCigcsAeefFmBr4yA93em9YQRrF26ZWnEpiRTymTuopRJi6to",
  "key10": "5qc9bpqhWEE2RVk4ENb65LmVPbwDBZeoHqafNDEhkmzNsqTXpKWg4Zo9i96cZwAZhfKZQPNK4rU1oFFAVxcBkqxe",
  "key11": "3ZSoqj78fDws5C3dWkBXZSFyPhf5GHRavNFrhyrQbTnxiZwRfUqcwWB3VJGpjNFx6m144rxdfp79hL2KZZtosPd6",
  "key12": "RiZvvYfpAZE9xFMtvqDaZJKct3oM1dcqQCLuXB8QW1fR7SzoEgfuLzbJAPLqtydniWBgodsjNeYckpNMxwsJCsu",
  "key13": "2rXp7E7KCq2ZxNnyRP41yQfYkcdbbCeiConaX8xCkDTbBCJjsBWzqoKvNh5KWU4qDBGBVcGwBjGKhcYGKDQ4gDeF",
  "key14": "5MZswUmjz35yREiRx8TXjnE4d9ujsA4TNB8vuhXTKueFVkqJmttvzE5EHTTxF88bXEtoAcVdNNCj9QWCVtSmNtGj",
  "key15": "2EmbDb9FVz2UhFKP9quv5kSLkCdmZHYihtfqsehvFnaHrd9VTdPP4NovGv33x2tUesNNSCDGD9JAxbspszcghmvB",
  "key16": "3gmCCbvw9VNmTZoog3cLQXxUXHMVoyXFdWSAM34PJe7YVZe2scSrX6DWyG2hvw8hxc62v2dRb3mXPrrUCrth3Zbx",
  "key17": "2epBgQTaxwneP1xYVQ8gQwME6fbK4LJWKhNbpKMJHCi7VezMCao7XtD8mzBQmfztJ1zNSyCb4AZk72fRy2WXJta4",
  "key18": "bVMeAK7BLYUwKGLA4wcq22pw1pX1sYv8CJjGqxJv96PmgZ1PZFKWX51TRjrwLfBnscmAbHRcMtTt43dS9BtJnpi",
  "key19": "4WB14Vc6DemacySqzDP4btZAh5Lfn9sGJhCPUe6PNVJ144Q9cdrptsY84LKeKHHou8KvcvXNM1vVqdWdUJgmzeE9",
  "key20": "2dd37n8M2i3Ucg4KNmw2qqcPLH442gyeTEBSLrPx7kP6Y5Lmma93zSvxeZquiPLiupcQ1uTazgqNfHJLG7vwCjX9",
  "key21": "4VsBZ3fUipDXcM2cjdJerUGyFJm5UgUfp4PQmwvCDZQxEAfcGyMqHQaaoxuXDNxzjM2GR24uD7cbCCHNEQ6kRa73",
  "key22": "KwzXX9GGsq4ziikE5Y5v4hRJx4bqUxTZjUDuBrskA1e229goZgVz2mEG5oc6J75GZzTJXYbjzbUcyeWXHA4PTHP",
  "key23": "33XBVH3osfU9E8zeCrGhnTdmKjUH89czDdxAPyiJBQtWBmDnNGpag6dWkfmDmEMEB7kkfcHxeJ2XtnCCwC8DahAs",
  "key24": "43U61FQy9FNRfBMdzaeh47BnRY8yZB7NUyd5iozrMdTv1YV6FJhiCthRKZteoXfoyy1Ze5mHmhTYAFS3XiLdToy8",
  "key25": "LRbFC98NNXETTs7Y8Y9bzKNgMZsJE9jucYMFa8N3CxjkX6t8RncbEQRfJD3qZYHX6wiSZPRCqpnPwQDwvToK8di",
  "key26": "4ZrXKsdsYFFiTPX2aJgbLNeqoNKWuBVB2seNsmt8XaRS4CrfRoDJM2dWwwJNpcuNrECr3dCjg2Y5gS3UtiKpaBUN"
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
