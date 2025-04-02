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
    "3Ww5CnijkWC1ByghSh2KComLtPXur9LXCN7akYBQuyMhAXGwJ45L7D9yUwPmRcWax18P4UgF7dNGTdbJwUHpCaKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43y5jXgNVp8QnL9qFeSNFwxgoD6dQ8Zx6YvH16SmXTeMpJrmUBeKCJo1ruoNfSZH4NqkaDGJXFLCRpguYKFaRqkm",
  "key1": "5ssiZ9MVuqu4r25EYY5w9UDmHBnkERSPgrKqTetMynzKzFbP7a4fF3mFRLPtw2KPVk2ubECNgBYD27toANF58fKA",
  "key2": "4ZfiLewDd8mLEAC1yZdKBpwqCPKsqxW8ozmLqKSw2pNSRufupWJ6iztiwRda2BUhNDy4wyAsYPRXUAodj35GmmoG",
  "key3": "3K36XEJz3LhMpYTA9Hx3Aw8Y9Rphn65kjS64UGhBDRuzPXoWiYYXorDgLqAipWrvevRMS9UNGTjLNqgjjARpg3Rw",
  "key4": "2vzS4EYDMZyAA32ZMCA7t6TamWBmeRKVZs43t4PbnHBPpr5X7TzLASidsQiEH6gmsjqsrMeSKcfkSecWfwtM7Vno",
  "key5": "4Ak9HCFgyHocAuoQWKw2irGQSoDDDupjq3EVJaTKuqfQdwfFqWAh76sueGqGUPDHAFRzvFM1oCPLYLqNGyWWuEGN",
  "key6": "vDQBFqHwq18CrQHK2131Req5J2W13kzpJ9F5B7JscWZYgBsASA14gyZMvZJWNkm7X4UVTr2KsULXZE9tQiRUtUx",
  "key7": "2NcsU4tJGQdtqcJ96XW8beciPu4ZKrQD2eqo72aWF4NFy43Wgsy2pTrbGGEGcX3HngiZ18n75ne4Xr1H16zZV3BS",
  "key8": "4krT8J48RdCpS8x3Ayj2wkM3jZnhhoJjuVuNesiQwENvgRinb4PNKoUUC1W3jnXsGaoPwoomFeUC7Ppmv12J6qJt",
  "key9": "5YeVvkeyhwLXhadA1c372w26rjrZh3814k3ob46zqPnk5S9cjgJ6xLsLKmMHaEFyjuzf5BXUiSirEwrrKwKSHwtE",
  "key10": "2yiXi4oDihfnkiCfun3Y9fz1h75JpYpM82YSH8LiY2HqjbMbtRGtpXL7utPSJnjv1BJrQ2LaxLdC3caUqRXAk1RH",
  "key11": "4qhSXEH3aohSriwhNabkPNUsSKFVjeEUMJVE2hLHghMWUNNgRjCFRbasxKDz9WdNFmkdELpVqg5o83LFSWr8rqvm",
  "key12": "3DAVYkKFf97faVVGPfcq8Q2MdVbB4FQ93jjz23hDhGpZRGyjtCLq3xQUXMhkAYb3odvnEq6YJnXMjcjyWiLsDoH2",
  "key13": "gFmjMTStWJJ7qDfp4HqfioCV1p64yMkE8C8zuHSc5C2JTXEZKGr2RCCugCHSP3MmEzL5SV2rXgXDUYrBAKPJ1iR",
  "key14": "2zUGbK8Z3Kkq6XNm9C1KiBmCXxX7KWTMFmxPUbJRPARPBg7tj6YUSdXBcBW5ZFGwK2PfRe6kvrfpY5WguRAvjx44",
  "key15": "2MfPiyiyahevXHDpbdRQq4Zzin3bL4CsCvPJy3GQnyCNZj74VfNmv3jTkBek78DkSkQwGRNeS9jq7o3GFVBVdneT",
  "key16": "5mStmWN7zp7g7DoNWyC4uS94iiysZdzSmpaE9J1NS4SSqCT8zwPR24B8iP5b9RK6W5CpHzePbXiw7sbZfimTeuf3",
  "key17": "2YoJAmh5K7X6XhS5uy9QWHKb6M17qQUiQ42Mur2mxKjxdZPHWAoycfBoPkYHzg1kS2E6HFp1TaNgtgF4tadfseHP",
  "key18": "2EuaTZNcxhr4SNN4cbRkCYWCxUeeC8fibBLnq4gTkm3WshnLYC2KXCsUCZqxD4edAYahXgWsUScCogfx5L36ncrM",
  "key19": "3XLgFoxHbZNQCPpMUN1f8DULHYmwYSG7zSY2AC3nGZmFieG8AXZHbzz9XSVPy9DtuGn4KFTayv2Ra5yYpyJvF9wn",
  "key20": "5hfc2Li96DoWYGhJjKsn6yaGvoSwMopDWgn69uD9bZqp6xDdxVQBf76T5YaxnELmh1ioR13PCXr1uxvFcnSzX52D",
  "key21": "62LFSstVv48WRu1jCyNKQs3CZ5ivzpASgeHDciu63SxJY7TmcVt8j4KcEz9SajunqiH1nwyxpiKfQ8Hv9PEczBZi",
  "key22": "2kUi4ThLX8xwd1HkfKRdEeibLrB7Ajof7rMPeJRWq73r8WaqQi8b3WW9NmNmoPcPo6e6XmCpAhSjgFb8En5ZrAig",
  "key23": "2HZMjaGKCXjw3CH1HSWU5kgBKxzegWsBCiUCENH4AaQesQqMcyi3V3ro2k9SXZ2HEydZtWHp9UvHUi1Q9fpokQJp",
  "key24": "377pS2zDwRENJWugganrcTb3G81DWcWawCGvTgPP1iM9xQCbycoZphwDBDvwdrLH74mhgVyUZWfr7QhQZ2NNGtvQ",
  "key25": "5bCQmbHKDQ9wE2LX25ztpcYVSRFYbaPFx5vQwwTqkumVrC9qm8jx9yzKNFRYjcm46H2eL6cUZp2yeb7omB6fxA3a",
  "key26": "3wFzTX6QGbYbnmpD4FTC27n4KZZgNpptxBiErjQNYJppu74n5H2Rh4niaAL8GEHEdB6otFYVwzWbtznZy87DQ4Kb",
  "key27": "5xmrMoVoF79WBeJRdQsXp1DsqvJ1f8VgZu2FQEfvL1pBn6fZjhzbCcCFciRWckhzd8RGXKpECQq6f9YVB7NLW2k1",
  "key28": "2Rti6tKg3JYZ58KzvVdHuwjBPBac6m7VdDxVpc8ukHe42FxrMvEMSFF5wfE3mviJExy2Vm661C8uuz3izHUq4A7q",
  "key29": "3DN9dUJkh1dxTLM5QgQCgcGj6KZmT5JxUYPWFqjTMpZTtkMbYKPj3Kn3mr6AP5QSiZHZXzShGzdJm3WjUfYBDww8",
  "key30": "2s9sAvMgh5cEXCAoNrP8rZUxeCVRp7sFkvsikCZUrCSQefDDrkurNC73zcnf7SJwnSydLkNRg63nLkTBB5ELfm72",
  "key31": "5vXmwKyXWxf24LPndDRdUtNirgPjYxhwrCxLvLJsWR7dn1oSaEeqa7psQ12o8WkEEpn4xN2ZvCM65gKVyXeupHM7",
  "key32": "3C7wiie3KFXbShv4ay6MWQYyborxwS3GkVkzEfWL8g64gV5PrnsNkALXdXZNdkuqLUhkHnNnJfjB4XA47MhZpFbe",
  "key33": "3yDeBoDLhvTgfn3XVHUTYjAXjQCSAdTRPvH8PD1peXXFTnKGXbtCAnSaD2ymBg2Jj5CELq7tsXDSvgzfMhrMUE8v"
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
