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
    "3yntHYFBbLoqF7DsDHq8mFG1MjX6q8czDqu1huRw7nsLqdPhwM2V1Pynk52keSQbRNopE4dEYRmH4zza9h8j6jLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJzUo17xW7BJmDLYq22nYhrj8uyqog74HAuoiWyU35r7kG11qtxsrMfzDRPZmc8ihAEbUALK5Vqw6BuHzYuixmi",
  "key1": "4h964wcPpuuyan3uHCTHMZ78aBADYo8wWLaZoCmkWc7a4a2da7N1Wqrhm3B2WWxVPH9reTpU1qz27SodiW1oq6AD",
  "key2": "3qk4N6nWGdPU71vSLFse8Ws47TUTP6YNApim1Q4ceZ7bhVAykWF5KnDX4PkRf5kdCNV1PWYA7g2rwE35MJxSdAyK",
  "key3": "4xyU58C5SxisYQqYHm6oHavvau1SpgVc65rhwmLn4LtcV1NwDjNouqB7TYAw1m22P6Bb6jsRffqffiHMSgX2JGCZ",
  "key4": "4Cx2zU3zwqaPBXMGuj1duRmWVG5LHU4SrwR7VRePFEYKmhL9oTf7FWRHRNsrBzaCGitPRExozmnoQigNCqV6pY3F",
  "key5": "4otiSeNsvrTvk1NswAiHGyxez3U6N1nGPiz1A9k3F5cidzvzKUcCKabxXneXR6stbAtVn4yLEh3hKdYBXbaYhZ8C",
  "key6": "dZmZtjH24cHFpmTGxz2EatRY6C5acFSuDKeeqGsrcXFZtMBon5VEwfDJRuGEQaLdJMvzfSM7t3Enr5ADWHH8fZu",
  "key7": "bvVh5Ks8dSLLcU9VL5C8t7XSYRk4Csi5uCaJX75JXSgD2G6onXCoTrUnUD8GvNhG3HjcNT6nALzrhW2kYw99zwk",
  "key8": "44y5wQdqebHXVcCG7nYeHx3MFd3hnb6ReHPYRiGrc2bHD5wNAPUXH63yXtkmvzUkRTeSwuUCS1tdiSq36CHTwbSy",
  "key9": "r4FzNikKGhDFRLthphCiG74qDoLyYz9pfMMpZgFyhn8hGeH28kaSi4HVR5yHrgptUFB6eCVKVQsBvY5Dae8C4mD",
  "key10": "5YiM7vELwQnm397WJqizmdCkbV2c75A2nFE8hXHX41yW3PBbVnGrRguRV4m8ogpjWvuwaofXdvNkte3isphQ9wFs",
  "key11": "3kdtmrMD8f5WUJq5rrJVDQu5E2y1x6BTR2pzQ3AnqVGaQbpuHWHTiA1HSzWHstPN9ck3R4XVdDpAUZ7hFRwWwVK",
  "key12": "3xXD89AcTUszMfrLfcynRDrqni2Ak2WnUAP1uekS5jief23MCADAM3w2e8Dfu3yC3GKYvT6JYnXoGp7x449CEAp6",
  "key13": "4oLwdd7hDy5JSCjCVQDXoUETTpkShpY753cFJMnyykCnrFo2JCAyWGGp6HspF6Lx9bAPpfXJfyVfDh7A8eX3mRxT",
  "key14": "5ydjnqNWFSJa5bczGqfdix929RGSNhgW3c9G7RZNrhoGTp8Y6FoyJuvgKL6oauEfjmdNgBGPKzcZTY8j92qQyckr",
  "key15": "4PD5xGkqrrJbMQoL28pNQMs1GxfVvKCCkaX5u28MeNDfd8srcZW3EqMdNku27SBp9bh8sZxpacZ6vtcp5e3HnGX9",
  "key16": "4HPYccLpcx2jrrsXuUxhCjhsDouyNF2zf4afAZx7bGwjuWPMgmEsmdrzNF3ym6nHJgsQdLxg2pBRfZ9tvhKhhu5P",
  "key17": "2JcLVQ8KDbzEMMPBLPtm8iJjXzRWtSXDqPxPZR31QHmn5yJgvZcr5QCrkXnbcDibtNDFCd8KxTNaaU8wWAkf729C",
  "key18": "4sH6EYAX4QFRTYpkMfgqG2bGnG46yeaD2K4yTHGamDJPdndZyEwXzzLdzREnE8ZbKSJvymgBTCMi9RfFt794ztTi",
  "key19": "5ruqWUfFNAb8yyvv2kPq8Z2e4t6NCnPeh32vqiUtBNrCgbokcPY6Ugw6xYMyzfma8S2LLeHVJnvcFynU7odVhrc9",
  "key20": "2xmpFaKBGb83j29W5EoCvgkjYqKVAXypMuQSfooG9nYyavAGELEDrVqxKKx16zPzfJGBR4sHVDVkF8WXYGTKZFxW",
  "key21": "4tEPm8zQqU2ZB9LLFtx35B6w5KRkZjV2LYtG2jpieNqWMC8eGrApVi77xpQD4EVkFG5cWcanyEyktQAxZVqcvdoT",
  "key22": "5wb2TsK8WBjd49aSR6b5oQALe381DGJ3XigRtobEMHwRhb5LEGNcH44QGDbp9ZpdNaHo7WAD9PwFQaye1KZAw2qY",
  "key23": "tazbHdjhdU27b6JhD5P2L3p6C55gGvxPkoFihxngJMQKyte9Ebaa4MFu23Jj16goGWVF3NzNsYKrZb6R4BJtsok",
  "key24": "5QjH67fRnWp9tnpwmaEBhMBkHsmyJhzduhYW1a7xoHij8RtpWeHz7axWK3PvLfErqjgTBfcqAU8s15aiTQZocPrL",
  "key25": "44y5dGuDvWniTEQ8zFmescWthjPAx2PcUccbsf3MzBk7EJXaAaw2RKNBLTt7wPpCaEZJieAySQEszDN5G7DLUZxC"
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
