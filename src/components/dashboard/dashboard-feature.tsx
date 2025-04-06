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
    "3zMqn3T8jPMddzrJU91cvHGVU8FdmYySiuXszzphuyuLYR6kZNL9a5MowAP6uTkrwE6UUTV793m4g51Kq9voRGXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5LGGvFK67grmABFiRFpCmLRMgbu7Ue4EtkzZqgUan12h9Q6QBbsQVZDPZgPBmeW9U2XYQAS2mQEgygDmgMqPPU",
  "key1": "5U5jejEeCgjGDDSBpJDaszoz3x8c1Rw34psRhRAcjztDJwMd9zGHfNnKVY9ezJmp4kSXdYXoUMkgCgey8bcSsMiJ",
  "key2": "5dppNFEANhUS1p1phXMnDDZBkq1Ru6qdEAUnRpeJQj8mQhde54FGFwu9fUtYsam8A4eW4QpiUPNvAkH88SBaxw3o",
  "key3": "2DkTz13X7xkqMe2g9uHZvvWVaxvbnnpSqRKgiRPQE1SGVMVVUuYgcwhKFRUFLhNA8jGpGrCTHUrSMAAV5SSy8N7B",
  "key4": "5HgGftW4wMXEooW6MjyMu46MuA292x4ZKdXtCNnwM41dkj6UbqbBnfK4egSW83uGZzndzSV2CwgQjjw9rfUNxULr",
  "key5": "5SHdrdPAEVmX5J2dzC9LSrNTJVSgZb5Hy6rJf9oAHyDWTTiLCbPWAhup2RWuNWW5dPzCqHRLPRLS6AE6LneX6EnY",
  "key6": "3aVYFCdKgxvBMKKoJZJXpmZqw8LzCmp634SCpuqrR4LWtMthSyWpwQZ6N666sCqvJ8vbsZPVpBcfqk1D3xkXdHt8",
  "key7": "4FBuoVmx7NdiDqQyeRtZE3Uf8B3AyEYD2V8qcL9X8BiJQgynaNDB4JbyE8KzAwWH78QS59Rrcw4LSXFrqPoWSrNU",
  "key8": "joyNMdNamEa6LRGDt8V2PZ7o5wUmD6VUJD11U6oLfqe98cen4g5QBmejLJppL8syL1uzLR4yDtojqcYt2r65vJ6",
  "key9": "3zpqGE7tJNvpg3URmkMU83fyvLRPsCT62KoQDSzaaSTMZRE6jyppBAEzhuGfHC4Yz617tUo1cGZ6uGA4rh2WsAjx",
  "key10": "5ukpEVdtRN6qQM4m1JQJgchTFaGuBSrZxv724d2wH5pTgf3f6kY7w6eRDcMdT8r13zyo3rTnjVRYvXY7qGoNpc75",
  "key11": "3f3szZedr3w1wixPSBK7A5CD5BBxdfC6tnwkVSicskrYJJPX5LG8hgRUhegyNe7nBa5HgDSpUrHMXgYCLdTmZZHo",
  "key12": "2wr6Ho56s5X4yJKzVirRppuzhm3DVuBqE25bzh2BxpNhdKT6NxfJpoEKo3GzSXEM6iFPKn7Ee3EVUtA5tRZRNBEy",
  "key13": "5kZZqUvT9qLtdBk4EbkBX2UrCTUajpvVeqGypJDMU7Avx9qj94JfjapT4HKtozuiDvow7jhnEYP41GDLmqFMu9uc",
  "key14": "MZZXDMQAUfAsdDFfM5Hpw2UYjC7qeeZdxhcxHFbwSxxzzgMW9n7h2wAsd1QLduKLoQkakuyoi31pfjccn6jYG4R",
  "key15": "xwNFCcqF4wjaaAT1qHN8MfjUVYEFCrHKDb13wzuoS2C7PUHi3AM3PyxJRKVGLU4FPqvE2FW11X22sk2igSP3eFZ",
  "key16": "39LuwYFAKWtMxoiy9DdAaXq7jwwMw9pVaVHMvYfCeL7HomqX9djNBdzG62Jrj8vKx6nUy4gSXaHBF7McefUFZEMm",
  "key17": "4iskGdb8EBqbZPJMLAC4uPNTRMrfTHta944kfHhPGcwqS4fUPBNopgDr5R17BGeXQid7W4uvAyMBfXPb981hpEKQ",
  "key18": "3ypbf5pNxCcBZAsywudWvjQaNjMcawVz5iBHA4gtSGB7g4H9szihvmAJYKX2bQjp1up9A4SCNeZTqYtZVET14hRP",
  "key19": "4aqUe6LzmDGfwLVkjMziTd3fGhdM2TeuL3e7gcnW3Vwig6CMxfhxTgqB7rd8DXdZGXPcFVfYdSEkkaGH38ioae6J",
  "key20": "5778U2eq7ugvFECpPu9kJ1J8Lj1Jai9Ysx75WuW9jh1HEsX5TsoKax9e7T52HS9AfVbUGUa3XrGcpm63HYyj8NHh",
  "key21": "4zDSzRzuL9vbwqzj212kU4Kyjh8q5GUVLKtXJp2utQLFrEbRim19PRqKbvZ6AcMuv9qt8hd833MmGZSX9xFsJFsf",
  "key22": "438mSPUVBuGPKfv8vicBDpob8tZeUhws5ZL135EVnQZJV3kGJssFQSsy4ARJo34guttysJVdKrAhg6wvEitmJ4HL",
  "key23": "54qms38hJvNactPebXFFSQk1eqqtCE92Nxh7Hhx4hAQ9m12th9645dP3c43DRoKpcHLeDfWAGHfLhTh2yJHyVggY",
  "key24": "4HQtoi1oKrRc8DmGFyeyR91GvzEovFBvAHqCxSUXZkw8U6BbeQaLXwHjCrZYYDqWqh8nswrTcNJ5YGoRQyrp2sGT",
  "key25": "4D3THWUiJsfxMuAbsLsE7LyzFxMv38ptU35BVMmEjX3dnySGj3c2kr1HwCYfgNQRheBhCMj1Yn1K7AsKaV34WsJx",
  "key26": "4JapWH2s1ZUfRLHKGjwDQ9y8Y1KK4mjSQbwP9GJwctFXwVrofCKXCNhiJ4Lmrme1fVStknkUcrWyKMQNwukM1MLD",
  "key27": "rC7xHbGNjF3MKrgUiv8seQMoqdW9oRJasfWoESUmfmHABsU4jh9WerqM1eruFdzY7Bq1FNTQsPDsUghBV66ybmj",
  "key28": "2LBt1FHbp8kDzzJq4wk4Z96Wkc56eN6JfwrUuHJc497HWQ4cLop2krwVMNYjDRwoVM8UWCVkqbXGVndcUijzBPyf",
  "key29": "57HQoBB2yhfYF6kXsCFwQwBtQkYfWsVYGddZVESniAE31VqA8qJ7S4r2EyYGfgGfy787iCRXAichHKeVfs9dKycr",
  "key30": "5oFMoikhfGxjFP769xAZEW4ek3dobBdmp5JvoJWigfKuqrqHtbZPu1Tehh8MSVH8RNAsdYjFDynsBeMWaeJjAoVV",
  "key31": "53ms1XJUSnogL1hcruh1tYKM7qLPijhQwZPGBQdNDBryb6Mq7gd7smwX4JdkDQXSRNxWw9MryXPdb1BMt9boXzMm",
  "key32": "Q3Bq141ZY5gMFteySvMVJm3fSsoFtcmwwn6MWrsGxBcfLva9eSqJfmtZqSPLEqrkSBmEyp6qZPB5HncUeRDhZXH"
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
