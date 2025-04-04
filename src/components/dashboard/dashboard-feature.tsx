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
    "63AUGFyAgLQD9eFkTivhGzdNgLfAP16oTHsqjTyzVZ5QV89Mwu7nm57VNGyUX9PSwF2Jo9QWgzoG6AkAqusA5ToE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRyQZgMEJpNWq77pqAdVvTcZmgPUoc12yusmC1hXisgbk6DwpKiartovALeo1nZy1bS8Rxz7hnE5Q9BEUo9HaN2",
  "key1": "3N5y4EajJ1JuVxkxZP7CY71RFS2iAPgRjJPAVKfjDhcPZNGRjKwmzm4Mw96gWk3bUf41oVn9PqDYXwsxgEy3au2r",
  "key2": "5WNEJEfSpQHmmSiuk7Y1pMeUo7AX9PLUtVMgGjCDWFr4DPHWhjapQwTzizvMLiMwFQwhBUAnAExVJQj4mNGbbxjY",
  "key3": "nnYLpszyvsuFz8And38oJFXUdhwXmuqDbrq8L83g2wSjeHqGgP9j9k8CP4cUKhwRo1kaoCTRxG8JogoeuZMP5WH",
  "key4": "3HVfvffqwEix23ZM8b28G6E4BzXqMz5tVUWkgVfmuYhJCXCzjL9t9YJqq4Wmc2CmbDnbmmjWBHYQqN8x4cwpRsj",
  "key5": "3nstN4m7fGechNtVzefShuwNFQesbpRi642vSc97Ki5AWhhjKwG9cNxB6UDeATcNdjAsnyf329D5Mmjk2RvsiDPU",
  "key6": "5rszqf3XfaymB8X2CdbMTzdUVwjps8HQDPMaHdVYvgnfrXHd3e37ASMRk7dVCyfDVqbMnz4LaN2MrJWi6w8kb65J",
  "key7": "3BMRnQSJDG7yCSovwn1kwRhcoj4s6AH4SC2fB75nGWfRZjynTcSyX1B8vkKRy5gx4HAEGLsw11QWPpQ5zqq6ECBg",
  "key8": "CQTA8fPMSY3ThGcHdHFHrJZUriSrg4S6b7wpzibboNXb1XDqimhKzQnCys2ijtbbcYg4AHgVVmbGpyqTron4pD5",
  "key9": "3Qt33be4heuW7utAoBQYndS7kq5YDN4FW5fpZ5r2qbpooMy9sKhD3XhWme4Y1qYbs2Q5VceEE6qXrfPeCoEPX2WJ",
  "key10": "4yFms5XJkgSw132ioAKbMgTyc4LMGQTAY1Y7nRqvvGsnBNKTaZcMQAiaBvFG2mXMjkKn7TKoDv56UKDSs5sbkB8s",
  "key11": "3zAthpT5J1UT5HTXV3KCZ8r1QEpsHxThLuVvdiNGL7SwoGAnskQrLv2ZHhyqCqD1bA12Ty24ASwshanGU3nJCzYp",
  "key12": "58SAJ8hWDKU378akZmBCWM2Qmej39e8m8hXtqCMhYQ4d2y6sa4pGk432DhV9PUfkuHS4ytbUmpaYXju6D5HFJXQb",
  "key13": "4ub7NeUa7nva1YoGhRRZESZBnZvvE245CvTbZaT2PmoiwganX8EUEw1fWrkAKXMe1KMnX1vx6116keubJLTcZFtH",
  "key14": "5z9e4N2toMRunw7Lrxjp6KyN8otv8CPV1JhUkm1sgvqZWo2vG7M9udzDSuGe7GNSaPpsS4i2TE1oCySaWkQ8D3S4",
  "key15": "ePEVahXLsuMKRgEH3RwSEMUrCoukAqyUG9dJojr6h6i9igTUFjXjRVR5Fvt5u5wPkGYCM5SBNnP7qkpKFncbZmJ",
  "key16": "5FvCZBwCBF8vZryJFTHcbkbGN8DM4guwJsBAYM2GZPPQe89bd11z7JqLNfTyZMkSYtsjVRLkJo2snrBR7iQa9Fvx",
  "key17": "DYGUigJLeQ5Tz4uNwYuG7RrCi4nnGSuorfjYRijTAc7AQJ3fS6L7rtLM5j6TJp9YPVnLEWuPJqFC6QwrtWjUMsg",
  "key18": "2troj3YjcTadUMXBUP3wDvB4W143pMbcCexXZYC8NvdFc6Y7cCyioTLQVrDcCfVohajBk276aP7xL2jUdDr6GvKn",
  "key19": "A1DUELYfPU5TPqNUBDakNJDwyNiPuTrN6eqRDAuTj67tdCAAqWSBaoFh6Jdqne6k17M5ducr1MuG91JrrUU68h7",
  "key20": "239DK7mXSsJzDimiNHGJ9m5SQyKgvbtehNCgnMEs7F7vySetywa8A4CMK6kQydP2zAEHEo6TnfchjAUyiPbFwq6u",
  "key21": "342rWpc3AeRmD76iu3NsRxzeqLKqWkwNbTzASEk1EEGPprJnddJwARMqZ3qdNYhotxJTkUvWizZ8rvK76nDKUyiE",
  "key22": "LAuYJD7Mu7aEp1Pu8iZAgb5SpiNebsL4jJU5WkY8j4hkAdv9XdScoXVBSDrzqymRLzGYpeJcJ1nW3xPa2w4rxmF",
  "key23": "4caZSfK9KbpfyB1dty4Rd1sF49giQU5T7TDfsucXnL2qEksK3dp64mycQvFjK74rh87nCdBDJMQ8d7ZCdGZpg3b2",
  "key24": "32NEzLCuoQWks3yGnZdogp4U4CST9HcWPWTW64drzLqYt3w6Wmyt3LXS49yEeRPjMNezjBce1hPBzHS5aW1yi8fG",
  "key25": "27PvWzGyDsmf8wzCb3n8XMxmnmZWvz3jRwfXJoWA3NmgyKiKmCmh3JnxCi6C1jQcZMHCjRkoXBspYc86zAwX5ErM",
  "key26": "3GAf5yE37PoaxLVEkdwyP3NEU6dKqdUiZhbpMdLMEQvqbNUsy4aY2CkEFzbTcwgoQhN2N32bDkfrJnStoKEqovM8",
  "key27": "4VZ7CWntUkYEv4pNWfuQWrooQBPjo7eWuzmAfgY8f2MfUTjWQxUZG8ukkFVkdQXR8t3m3qnEpL9nbAXy2QYoYXoK"
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
