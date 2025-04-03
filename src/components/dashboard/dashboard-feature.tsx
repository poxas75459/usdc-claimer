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
    "4MXgaTkhjnpG749JjgnsqbdSPLgPcEgZC8dxLhyGbgBhYEgzkBdfTJp1p7LWhRzDTYKqfcB6EKkrcRos3QNhbCMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VgiWQYJyfuycTPutMAyDXPAPzXVr5VPZZHinx8zYyoZFAAxD3FBVcoHo2u7XW8abA4xye6BYT3Vci2qQJHbmaYv",
  "key1": "3vRkn1zuUBHueXaM7HCxmyATtibQL1PcjgGn8LGcQYG2qE3F2kyh8yAVbx9adbSLhS1sSe5ZumUMi31AuPgnp1aJ",
  "key2": "9tHBB2PYQgmLsrm9HjRS33DkMb2tH4pBVV1TurjYUM5WKoMTFYEo2KUbvRdrWdYrXeBNNqUfxGkNQTP6zGFuCe5",
  "key3": "2WiYF8nKfooc1ujkqTUrFUs8RaTxTCTiFboiAXB8BNkvptnwXhHPuj1PtBJvpPTcyKrYrfiopKcS1cBoDyaQDkqz",
  "key4": "hpT8XWH3rxh2NTz8Q5fEjLiGae3MJHj4zVqUPa1H1pv39YaS3adJghqJCRd7tZpyRJzyfgoP9oCFbN12g7a3a2Q",
  "key5": "3nj8Q385zZ3eLsU1y1ShFZ83HjKHnoTxsm5MUwF2wL7eEE6eD4GMxmZejb6pT9kTwb4oGuXnPL3GbQasHy6Ut7rA",
  "key6": "3mMmNvubQhVAtqC9kaNNKdEPbdt7RCNejwBqMUrRYHzKDLwgkrneJD27ELwBYKCFfcZm97CByET2N2Hnz46NJL1J",
  "key7": "2eRMGkpqSNxjoVpPfM7yP78KtFWTXJpN9wy3sf7kJbfZacPw6aEh8am9L47AdNWfZtiT4FCH8DxQ3rWibQmchrm3",
  "key8": "2DFE7CD7B7nTtkNdS8phpfH3frxYitPUwNvWjhY44zPetcV7cgNzTPSTnbY7DgMQiwn4n1zhZ52h7aCu1VkRVh73",
  "key9": "2nxC2iViphWSnGLW2sNMei86h2gx9EGiHkGrQSx9NhX1K1VVZGbCE3D5JY7TNdbdrvZB11ztGsth9NPhe3wg5hod",
  "key10": "5TxMzkVdZQA9Ye3VkJx7NSPmMUs77uDZxRFYqaRgEmtQD5kRvZdAcj4bfHkfiJGV97iXTjmUJDcSvsVR9jHjQyEB",
  "key11": "5xWNLcsFPYMPpzgBRwzd9RPwceeUwmjnfmgyQf5vySBf5hDuqMXUafSWvKGBZo1WodyQXohJVNRSHa9CiNGbMLZ7",
  "key12": "xcLncSmz2UKKPNEcBkQVzB5sUWyn4AViby4TERtYhXjXvNfjqxZs1kN3eSJJSghxHMWnyh2DArPDxcjJpfGSgCa",
  "key13": "3H1h9niD9Fp1FEN67o5xkov1N9nhVCbKKQNPy6JhRhXzBoWfKZdsMAGDGkuWaYCaHFWtEmnocKiRLwJemVxQSisj",
  "key14": "2D1TwWoNB5QCdB2WxhLVN6rVqwvvuzSRF2Tqo7H32QRjZcDHAMHzx5AHXD41ir3cgTMY7BTCV5fWiVa4PjThJtVx",
  "key15": "dFxsZfP4EVzG61AuP2kBv9YW5j8R4AJ2vfPDX7VHs77AXJVtuRC7sDbb2jmhQ1nbpf5RxwuL5s43vVkQ9nxv2RZ",
  "key16": "3WMuSJWJxaGzbRiEBMEgrBc9wSRDdZc6vH5fZfMi6GMLoQybmtNij9kuJJihJj1AyEXx7fqbPxCYkW43fc7Uw1We",
  "key17": "61V5L69bqdd1a3ab2CFfUejTKw2KtuDPtD3UA9H4WJ39UY6ZhRuBF6D4nJuYu5vnFVois57voToViVyhF5XihUJn",
  "key18": "5wS4J3NyA2y4T4NDRLKAMn4MtHSufU5Rib7EuRpvaEWwNmPyBAV3vgN8cHGuV93fdK2EUmEpWtHxkD5r8rePKmhh",
  "key19": "3S6kQP9sVCNqJU644pQhY9Lf7fmmobF5dubcxHH5vKLpCYfRaUEy7GvtvdWAvYMb9X2ebCpmUvua8TunNcW2kvPb",
  "key20": "2tEiCrtswcCRiYSpnvYR1k5eSmoog9bvC3b9JMaXD5F44kFQJ8UR7x27EZZ7cyV8rQLqoUrZa2zvyua6ntVeh6KK",
  "key21": "3PFAtaCE4FSTpqNDTkibK1nVkQB9vEQxcdfxdZe6vVP4F7FfphmWEEshxpZss3Cod68heZmLaGAXSLEEtzfwXS4S",
  "key22": "2pEVNPTg5sbL9x1VraSBDVaW6CVWVoWQWgia1NsBauFXNUm2LdqiVt2voNe3sp78xE4s3qBxeZJbxkU9WHQzcvsE",
  "key23": "5KUsJVNiDLWqx7Py8CiVFax77964QcNs2AeowhZb6jyHxneEQcpTJ4aNR8PmErb7XyQAv1RS432JQhGjYMePJh5y",
  "key24": "4PsrCkwoCj6xi877SpCXBsfZpanxfD8N6BUawneGZA73qUc7EWvWXF9SQGW71SBvgVtUC97jYXMawVscLskfDqsw",
  "key25": "5RvtnBVBa5YC4MVLzS1RstNitCa13rxqpwRgo3XyZ1cCnAwN6TxWc8nK2yA88XRTMGB2djQsT5zEqR1GwmJmvomy",
  "key26": "jveoHToLz4Ea8usp5oog8i7qqEu2S2n2xuzx1WsUx9D4sYJxd23YksTAhikF1bnMEqdZr8U4g39svF4ai6x3tmW",
  "key27": "2ixpcYY7ea6WTFPdhjHW72gg7e5kp3iAEhHs1cdhWbuZbb2Tqf9beJqh5ByskJBiW1jLrVHrZGpRbDeWPACUpnAR",
  "key28": "3zqA97zsFr9arrj8L4qF7GF3XPwoz1eGBKTLWKGQhzLvi4v3NPAc8o6WQdG6o1VTxoLjXLrWhsJt6G8PJhWDNAxe",
  "key29": "vCxcPKE5tJhFNsh9SiX5nxQmHgzL9gxCcZhirQiNz5FuM4sAkwiuxGXETUs48Yjj88swNB5h2AFaPjw37ZotXcj"
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
