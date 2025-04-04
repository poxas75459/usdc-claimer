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
    "2xsauScJPa42odeTs981QNHTiTJF97Jyj8sxL1xEG2TgNQJtfyujoEEv6DpsxFr853ZUX3muXs1p58baVz6roKsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtY41n7sKhaFgdUSTVdyuNsNSYmQkh2Z5D2eLr7ZV7WJQWGDt87nsDKuvpfUyPoTUByTfiwezCpigqypscMkE7z",
  "key1": "5YLUvXoNepkiuVKNnCs1AK3yeDyTR4CoMFb6FDkGpriGn6k3ms5YRGP8jc94m1J2Q7qtkYau6f4XqZFPBoRGP1mQ",
  "key2": "272anjLkQrxNDgovsjNW4v29WnU1MiSXiu3wg1MLuYk1PwMT1pUzXbP83NP8Txrar3T8aR8FaYKqhQtysoG7XNGf",
  "key3": "4uPAk1kNRCFXctVxGJCReiPeSnZJRNGwH1HCsr3vGZkxm4oK6Kjz4bczAxX9v2vAP1PbCzoFsbpjRPxeqDFm1UXJ",
  "key4": "2cjnnPkH6adyQAKDYAqdjeHZCPUGmQdifpx7AwTwcQvyrcCAdDfTNPXEHiSRyz4yHhRN6aTJAjE7AetWwZoHUN13",
  "key5": "4hhF6pqMkCfjF6pkqNTxb65j7jzRxbEHjs1nKxP9NddWtgc2fVnSea8eGaeHkQ6uUwaYEJibYwjH48vjmSnMhMa9",
  "key6": "4md8X5R6yQpgm21PELfJR6Wwjaaz7GwHyoZE6ScqERaz3SUjsGmUCTMrLoNoX3czDnNWhXQbAe87e8nCSThUioep",
  "key7": "2HLZmhzjN8jhzHRxPbx3pUKcJqc1NHmajuA1uNjLFgk9F4QW68fdDj6nwzPJxiWQGAajA7BgLk17LDGB3max4GNL",
  "key8": "5oCq6Vd4v1os2sxWqLx2eYB5ZUE9cRE5Cf61mPscF29NxDjmWnK4UaaFiuH5ovByEREid7dmygghqqpeP1Qb7taG",
  "key9": "NBcigf6Juv8oPGZc94AUucHUDhZ4Z3LQqP9URsps8nEGjPKj5rEnfD7poQKwoWwsxrHCVHHEb6e7ep3EDpFyjsn",
  "key10": "41Ftbw7mH3aQLpv9QM9Xui8jbtwdtTMfNL6xM3Wq9sKo19m8yAvbQEBi21LQdF1P6sfxGpyzdA24EMTyHAZ3rb4f",
  "key11": "2C3P2WyQhxLzELJ5JRQGBiREeHHDiFsagBaxqsFGTC8EHy9aZCbfKBi9hq9f3KW24rk5Uem7V2594qVrHdRo4NRX",
  "key12": "5QTuXQpij7h6EZ4UgsrE8HTGhBZjVXee5gSjUajaZXfEX2VXTnYuo8Ro5PjgJasfV4fCsVxrTmH715LiDAyRqSGf",
  "key13": "5YmQCUtRXbhRCeAX9ZRCqQ7vT9KZd3SbGzMhet3wnjy1LbGS2aSXXSomrDvGiKTqo6Rcoq59Q4qD5N2uzLVpnU1d",
  "key14": "3W9S1wQtC3amk3c9UJs9PSioU7muLTqw258BEZCeWg9WnSbof6Ac21rdGzTsjDgbtjMGWxKEhSAZWs2N7meQ1e1z",
  "key15": "2pD1MArksn1xoy2v74QfjfcJv72kC4GYj8CwGGdAGwkSuFL2SEEwGkKZEew7gVVyvqbHomnjJdtvU3tCKUb6jVNH",
  "key16": "3oXX6aw148ZLBkCTw55anvQTAKMeTeAPF2paPfeN4PygLGf7TkPbU55ocV17k5HmgXu7KzGH527utzcALJgXrYYb",
  "key17": "3UbpkL7UYTvU9Tmy7FFquYmeDGfhduMBagffhrN1JFBZmYk78EgnsHMRseojMxygNEPEvSb2gQavGGvCeaoMhUop",
  "key18": "5jJXHhsqreyc2ovufirZcUguzr4zd8whL7uqpw1h5qp8ZVMRA2fFVzTWeYJLyq9iVPmwXFyWEEYcA9QhU6ijvur9",
  "key19": "cZpzsha9xQEzTBh6Cz8uL4Pg9pgPuRQC6sm9bGMi7MuWqUyvBShzZCfLGgbjPHDuwyUiR3mDymEgjXmDMZxTshq",
  "key20": "3h5YEzEYJPP22RJJodsif8HngpmfQaJHx5V18iY9RqrtiPYDntRFCDCZZBH11Qi48TM7s4EeQgupZvR1aFt5quoJ",
  "key21": "5CE6dA1pQcrcBefBCyNh6GkzCMLiWrpnfyV8Ae7kJtkZuZRumrbQQCsmwrDej7pKyPQHPWPdZgyPcNJez3tu6Y7n",
  "key22": "3zeHA8ZN9H47PuEpGfCTiFT8t58M7oBDncMDGrNRmbSof9yLNX34pGqHoThHTQJ8cKumc4HkhZjw4fBH6fco2rCc",
  "key23": "4cZEBmbWJDupTKMPcJbzrKQ7Ur286DDdTR3n819XJCgJBGGsNzFSnoLrnSmdat5FrDff7UkEgSpo9abhagufo1QM",
  "key24": "5YDPSK5qFtYFGF1zYuaqDHsyECTEWXVAUQpBrmERwQjXPxCzWgdv5Lh8Cf29sGLquQWbxndbwLMFnEsgLcZUZwdo",
  "key25": "2xAwff3PUHGPh9xRHsUkVk81b7u1rWCGqdt2UBwAHSvJj414QZdK4bpm6fstUsxzxjpCgAozc1eji4a2DULSdYNW",
  "key26": "4eDcmfxRJxQnXShmmLQFa3RZhPHU78kayd1ja9gfjsLmwUAB4uF4B5fWNVv98EWhTAcd6AiGUnxSdiqkVVHEp1qX",
  "key27": "5jeE1dHvhHLepcwjh8CC8wWjx8g24of4DCjgptTJ5EharsUq9i8Lp815QrZQq5USJffPogetzevxa4AveCELaydu",
  "key28": "2nDY9FQEcg9VskMqdaaVe4VFoP1J1ZqRHUPemBVteXE1AbG9tWYPykyqEGQDo8JactSWPZB5ZsZdddHLFLMxWnj9",
  "key29": "65n2c3EQtDSW1mudn9DPuA2LSnXxtynkHgTPdKVsgg5dqCAuLsVnHce4JamQE3Nwjt3eh1NtoHm74n63BfRQJbqu",
  "key30": "3iKnvtdJxi3BCTaGjCfn9QCmAsS2y5SjA2Xn1Qxe2o89SNL9vd19M28cnb3Jm53VU42C1dGbgfwhVQRhexe6dkyn",
  "key31": "3M84V2n7FNd77g6AG3a2Pek2zZnEgU3e39Si99sX6iNhLdNgaoTwgHrEkNy6nMjyQy7KeVx5PCwbkLXnaFTtNKfz"
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
