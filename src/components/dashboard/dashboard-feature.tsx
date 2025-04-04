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
    "3ovGzLkgq9VW5V3SBAtutmqKX9EeQTatNhtA1rdoPEFnfD4GQjLt9CWVzApHWkJ22brAhMxFXqPyJKpVryxjVQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLRc4ww3synSdyhRASS6rkPioNhJGbG4ntbhDjrxHhW3QwsaP6pqRNpc4QND7LqfkqtJE9WLGRqgZ7ao9t9FNLK",
  "key1": "b8Zs8YMREay6RM8Vp69A37ByVTueDBxTmRPG6LJtYNjjW1dcKZZ5VEMFwCDVNVAg7r9hRjScbLk5aTP2LXHrgxw",
  "key2": "4wVnxJeqdtCccTj44yxHggf5Fz32Ne1UNeze11gMy3KTri44DJXcpz8HEz2AsQhdWV6mYsVdTZ4WySpzMk2isYVN",
  "key3": "3JGrVrba6F7jD6iALqtURPM2L5WHnmUatVsc6TRt5cPEoyVuKZYWdc7sHiJxjeptcygYqfMyGs83R5QdRwEze7yA",
  "key4": "2fZaiFRqMtyRFhiVF68ikDwTkvmtkdphMFZ3Kxe2e3nN7UsNrybGuEcZjME7D7BjL8yg1WrroMCmW7pPhpA1ycHt",
  "key5": "5nEAjL5Pc1UxW8VGsFZJhUjdGQrXKDkQL3M2xSLHSgiB4uMcy8wsZxg8QJw1XsBUpKQRtUKpgzeaH43qPcUscK2n",
  "key6": "3r4M1prJXfbr7KQfHJd65dToMv3cdYi6MFmYV9Gzc8YXsREatNUxtEeGubBGkFUfXStGXsgTdeSmyxYZbfw1s78N",
  "key7": "w7L1gaZNr93t5M8HDyHM73hVC5SFLAkthEMNs8DWAoHt3H1eNb1TRdAQKNayrnLkaL2AkV6c99i82goVGYUW6MB",
  "key8": "2e9K86RNu9xce4mJfSA1tvHeTVvGx61Z6f8DV6eiKt1F5qTCb8bke9cb8Agw82gJLvAhFEZV86Mk1U4E95oYdh73",
  "key9": "5jYzpy16FZLAezQjCKt2z3n9Rp9esnjpLATEaGSfTuPUTaN3TGxbZtnxt5rBEtq6KuyAN6q9say86k9UqXWbEM2C",
  "key10": "3SWK4HCmCTSBBBSh378by4Q7E1uR2vpRNZjqJy8R5XBSFTpRCHjWmG3isNk59dSY7cUtaznNH9iQQ2X4yb1AnMjg",
  "key11": "3X5XyJbzLNbcuV2kegb9MsZRDGn1JHvbQJt1ZNdgpQAYwHgy12A6CSe4E7FfFMfGAL9s6VFqAqnTznFohVLqT9r7",
  "key12": "4krESkynMKCMkkhNdyEQhe5DxEdbitMh1L4Y2nNRy7kPAFL9KXwxU3Gfi2ZHrh8Eeu6koaG9SEnJGAMPjemEqGjQ",
  "key13": "2951oCps6tABKttHrGtJ5RdL2YNWEibrN2g7SDU1u2hMDv6Cdreo3KpzATpXmMFdDEsHovxPkQ7Br2UcFYq15krZ",
  "key14": "2XgzttfQaeoFfEWymhqxGw9AN7zN9yUYp3CMTwCWM6SBfSayXtWJ1iA2r3UEDja4dRtiz4YY8kFcDrHhxMrkSP6k",
  "key15": "3KAuLniUxbFxbWnc2uWa5vJkzshGBN9EZW12vKF5j8sZEJGMsGyeHP8Mz1irJNgsHuy1MoPRjdgbe9m1wwfAs16z",
  "key16": "63N5mrXykkNNAtUTYTRsrpb68MPSc3cV55emLQeRNXVQ7myxvvTjLKtBjgd1ajoGCvbp2bBEL7DScYp1aUbU2TrY",
  "key17": "56cFTWpYcG54DFUfDjhdC89nYBmg3mck9crn9fL4j746TRafhWEuS6vFpPdNwtEdiNCkBxfERrj2HHpbyWrRJvVz",
  "key18": "4jwx4ateFnwikagcmdcY4jE6jutmFmyzpBYkBKSjNZjWBm8SaceQ2rdP6p1k9dAsmy3ZrgBm8gpvcmrpW6teTqHJ",
  "key19": "5W1mMWngmw31GAZnbsRc9zVGUirBwYuTvjYSUdRJ3TDJcvwBBzjYKTvjyPL8VrvdTCHXg7HYWxgtB7kEarUtDVDL",
  "key20": "4xnngSFXKt9m8d3odE4SowNtizVE2WGoUQuG11c1BbYGCtrC7wKjkfnTYr3RDCQrer2fqPf5GH5VvCiNrjaBBQry",
  "key21": "48bKP3gvs1V4S6xYpLMfJcj3MrJ6Zg7vzVMSUgGQro5qQBpBzjNDqAa3pm2wewfTsJ83jfjWivf5ohzne5rbTJXN",
  "key22": "5eVbibUDKwUNFCxhYvUKGvFwyg2pJi1CLn3Voz1gwRBdtSSjULUx1RmpsNw7g4VH9m92fsEsiBxRifRL2gBmgp8V",
  "key23": "5fSCMDT3P6L16SJJVHJUXfAkSYodtZXBtVg7VVt2iUyF9SH118aY8XhDmHhsRitsjgjQP5auVTZu6JDS1GGjUvpT",
  "key24": "4JFv9EY8FbQv7jMAmXwcQveNeXEHXkryrWitAb5bsqKUwT8KSXUDceoBRrWTgiiEWaSzF1jwDugE9H4K3nvLoW4B",
  "key25": "3KKjTxfsFUH1jbp9c6X8eNLzbRfWJ66xHEDBnLbq5ygtpEgYuCnn5TwAKukipu9UTnEPEk93waYJztZjjx6AEJR",
  "key26": "F21Q6MmFqKhfhckVh2ZpJv6CvouDiYdCgdYnx4Ng9jtGfvQqwotTV3dwA331ipfvWKx7YbLm7Lape3Z5tEVDmVS"
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
