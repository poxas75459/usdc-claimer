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
    "5KysbijoouErZnMXYWV1tfNCbFbfVt2oSizYvksNcjJKibd3X85Vah6M2PTomrU5A4NoahPL1nHzrXWqaHVbbQRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3GePjeSKshrrjpwVG9FpiYbvSSb1g1SZATRaJuxEryLcWd68P6gJLwZsjmpZ6uVb5pnDyuCvr4eU1LXziPoTZW",
  "key1": "3GcyEmCCx9T67v8qhY7hoGPYUM6ajHFKR46UxUrqstY7dvaYF4X6yzgiesQ3ac9c2GUwe1Rvdks4bdYJUMGTA6WE",
  "key2": "PVGuqpULpWJvzkrJmDYucR5Kb8WpywXyKWzPrzwcxNe1LttTy9ATYyt1CqyZbiZtFhjf7bdCAhUxZq7HoUtoFho",
  "key3": "2uSFGK9nMHqLwd5EoXg3js6Lh9dnwrNSrdPFeDcLiF7c1sptpNYS7RXfRdRuDFatPhygowJGtqi3xRmdDs2weDBq",
  "key4": "5wxLHfKguY8Mf5nt2nyXNSgyvmyPhdX15iPd3tHJFy8KW6RfiKdhEk9YxS5FDM4syuT8vy7u6vRV21oMrieVZ9PF",
  "key5": "2G4mnBeMDYvPxTZfsiRt1RBEX8WRGyWL2EhopzcXCvKkc8HfkDVxHSQ2zr4RUi7EDcgaKDghg3aLS2p3QjuZQY8P",
  "key6": "5AEDFAMrJMoeFejSaihsyttZ5UMTTBKbRHa89n7vuman5KD5mBEnWBip8oiX69yDzYo9MUW6vTjy3HcsYDbAbg9g",
  "key7": "4Z8kwFrp1o9s9TAyVCDNGJDUoegkWe6NVrffsKQknaMft5EuBBxmjZUdcEp6apPqMi72u1SVVGbGp3UEATV9q2wD",
  "key8": "23jWkjvmrxpnwHn22sy1sW6pPVF8sPyPDbBRh9xkQ9W7h19DUgkWYfYVoeFjA9HQY6i9t97Em67qjPDkAqaHnp1X",
  "key9": "TG1THD3AkX9enSCUqdq6nTC4P8dHF8PB6jBVBBF6NXK8eU1jXnMUEkY2XuDG67gAB1cNhhNNdtPLqnRA3i2oAuU",
  "key10": "3Sn88CqyuQkWr6qka6UajHC274t5bwuDs23nXjhzT42bPTFrpS9ejF6M9C2JHJiNwLUb72QS1ccmF1a4c278XLVD",
  "key11": "5vxDyodzPzTTFdJNSYWiZ3J1Umwq9RPraBYsXbxDL8fsptqMhT9d9mQ7C9kcGgwshPYD7RzR725ZzmeAug38QVzS",
  "key12": "4Yt4GzmkVD3hi1Q7nidr1f5Kf5CtEiHZSFCvvqe6weMG5gdZ9zran94EwHnGpvh8bUQ8oqhwuejMCTfAkgpGbNSF",
  "key13": "2APGF3BzwYYht5S7AU4TrUS8cHttMdd7Hc5FkaY5z9aNoV4F5BZpfVV4y9JWyQXKASrjECkNh3ipywjf5ygHxeQa",
  "key14": "2NkPj4biPQhKwSBrxLZgLhy8QWy87F1DDfXckNAXdaLdvvYU4WJsrsD6BmGhsdpfqWJHGvJfqoiaETSoPkGBtU7t",
  "key15": "2uD93NRw2p4Bm28HZTVU7Qz9PDkrk87aekFgdVznf7xcGffHCn4LfYrsmDQpHhMgAL9iaqBzawRcETt65mgzVuyT",
  "key16": "3p7qiFwtTy7YxX3FZ1pnbVbuzkk4VPuMr6ug4tZpFji6daJKmztGX6SF69ib5QB4GyyStWGh1gy8nc7rCJUcp7zm",
  "key17": "3zo382V7adbA7z2M1QQMUUNjXtks8tpRWEE5wHvT2Ha9e6twSDaumLghG7aiUTMHGvpJM7BGFQr424UZst3StZyo",
  "key18": "61mQeqm3TZThHA83JbPTgExL2xpHUUw4Ewc8rLieTsCdn8uSYPLvpeEmpo1t8K9DgRkChcFpvJ6dERWUqRCkmAcQ",
  "key19": "4Ks6fQiK79QzbPygaYrJ5wN8Q8yNAaGLYduq7qVqQhUx6EWX9Ad2TJTwZF3QXTZPERi621uJyHePsMmBeGYcw9p1",
  "key20": "5gwdhAyU9pHgwmuZP2h1tBEjv3XygVtVhNbrPmC4eCNi7UPpvZaHuM5eh3BpXDBToxgNRhcn3LM4z9AaSAJhfV9J",
  "key21": "679QPQCMNFucGsagAEqStrVTuUS3T47drWD1tBxEuv9zLRCYCz4tHCRNZ9E28qZUv4CRvFrNupyxV6xhfME6siih",
  "key22": "3iSKhwgc1mJ6wULjLroiJB98MtEwzJV4koF4ameuPrm9b4DLmC8c6bxcVQj2gvg6jzATbwZoAuGGwpKCPVeM3ayk",
  "key23": "2DVfFa7QY3FWijxk1ZGC92WmrAjVBdjbSVoioj5LQPDpUCs3urjtcSbbiquo8ooV3gbYmZdB4RThdkzufrHNYA2H",
  "key24": "2poLTD9XGdPJCNBtKKUuSiRiDowdkm3AAuqBuvhNrMuDvnXFjR67zN8mnaTmCvzQZV3WjKeSfEpFbXK6CfEnCKsK",
  "key25": "2FCYKtS6riLPT6B4W5992w72iJ4gQgopWqVCm6MSqKQAvcAQYDYWgH2xxYpdVdysLF47shnW5jabpSTcc8a7HhL4",
  "key26": "4rJc3fptTxhbzXRJVaLFzVKqY6bPnuZGHQfTwap2cbyoWb52C4ngWiHUjZ7BTu94vHkRbNGPc5C1jnzRGKGKFN3Y",
  "key27": "2XzoEMBCyiD3YwsiwyAPAGEyDJwAcpGtU1hoCwT7ndpKXd7kA2wCyop9KpDcd7GhdePxPtHyavahivPDmbhTg3Xz",
  "key28": "4E6rV3zVAKcghfJrrqup7SRsSTdGtcyKJsHNTA3JX7iBTgMUUvGHbLdWoANDABuAcqsN4TUa6Q7d2zHSEa3fdkm6",
  "key29": "osMqnW69jA5jzsJCGWs5zdtcTNnTrMk9JR8DmEE3YGV4Ad3FHTJWMMF1MwbokKoT8Zf9kX3XnNFCdXcHP9r8PVE",
  "key30": "5brrw2EWksn3zBTHyZPzf1TwdRHDKekQNrZ1d5RzfQMowEhuFxQeVCb7kjew4enYAaex1sLdaxE79NGSzNg7FDoB"
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
