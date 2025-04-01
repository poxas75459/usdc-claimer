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
    "5cZYSv6iMovcX1shhsEGJCradnwqY3SWR8Zqao1pyxvqkDbs7vap6e5PMSF7fcgrvtDz8LMarES3uyhRM3BK1vA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Gz9dSPuAKNFuqtPFq6gbMbPeLBoLVqHFRck6Auz6FMcc86tFrV4XcsEj8vSC6h4AX55wV9Hfpcr1z6i1gPfHxy",
  "key1": "5NhwtC5rTgxQtQLXE7yFVwDkm9SoEXrD96XTQ2arhKgEwVfCjUZavcqmPLtaNDMFUPQugUhuH76LDXDhVLoDdhF8",
  "key2": "sa6sdHLdQzQaqbanVD6mgMQwVptCiHTeqNTHwmG3mXRk3fwCkFVoS4FMJVUmZPa4jynVCAfV3hK5mNqxJw5YsLY",
  "key3": "3fG2vj5uyVStsZPop7gVApNjHFTsmjG7iKA5x1kA7cg29Qe49zGosE97qxiKjLEqLSoQmaMFcT3qUaV6SUksx54M",
  "key4": "42srhdf4WTU6X6mH6NFvKoJ4FXVqihzVhgviDKSEbmRX5Ctwo1JTiWMKA9orQig6Zp2eN7xQQCxwtWj6FvDHGC9H",
  "key5": "33A5m9rJj97yXRyxcZZhdFXRSCrjpG3KFjNxmgGvM3fvxEj3zMKCmGgNr8h3PGNBwaMMWso8bSrx2TyTRo8THQoz",
  "key6": "3uXPw1GVtsHvYtxZVTVYfkCEorFYSKfh4H8QJAV8GEmHfUVuKrsuYuhN4acSom9TaPSNJF5iWy3TfsoSAfZGMifJ",
  "key7": "2YfzNpXyguWcXXF4UbKNwEK74Atw5nuD7xMdqisCu9Qb4PLRR5ya337JSiNqS5q9UsBXGGJiNkhQPaE2MKXrLvFU",
  "key8": "4B6ty4T9Gkx1jEgQi4DuLVRygUfvirhiBzf6yyj1Ngza3wpzc817Uiv8xYQfmQRF74RGj6p9S5shtdFFQ5ri4YyU",
  "key9": "4XzMqqL3QYQwffrh93CDzh48T5if891diGhi5JSU21JLvsiJpEGZZiPaq7HhfLapvugMEwx4LDUi81Nkm5aEHFo7",
  "key10": "2CP2bKHdijjKtF5kJE59UjpsdpmeJSCkoMTAWJGtyqYA4J9ZCGnRjwGdQuJhRvHt5EvkeAipsagWAVzs68PTiZr7",
  "key11": "4UxCzBj87eeZwqn2mw1A7RYrCJ4ZcALuXitfVsEV9gMpqdiNJ4LgdLQomxWqiV97VHnikZoXSiJKPDRGUzhUBTXc",
  "key12": "ENRv8GkuwHZ5NYaFSXGEFFpNacPF1TeGx1dEyeAwUY66CV7wmp9c78uvQ62bK7ax9d47uEzwWy4RwcNCtSiCdo9",
  "key13": "67dNjnHKRhBngEvcxRr4JYzD2krM9Yyb5tkCAww3sU4HuCvBuj1YgHizKMGPwov1t9w6avE9VbG468gx1VAq5TxV",
  "key14": "4yud4DYM9tJMFTg6tCh2SeutnNcJDhtTuhak6wxZo1wCYs7Uf33vqSojFdKUhZHzgGUyuCxdFmKyhsLLBQyhB3K7",
  "key15": "EpCn8Zzes3ccvCB6j2EnkVo2X731J6MGHprhiAXiP7pJXdN6S65QvXtaEHccyizJkcAz4JjGNEQ4BBHXrMYQwTh",
  "key16": "5Zb2HSuCSBWXtMXyu25cZq8Lf16XducJwzmT6b1Tw3m9Zp2FVb41RG25BUaA1HPPHZ663Fu76UFL3awwT2YmzgfR",
  "key17": "2B2upxMjYTrsXeLTqBK56M84RacmX8ChdchsPfTXfMtoTJverCR4eXqtH1uHdtXdLxsmDH1bze8SpqXjvNBb7F8G",
  "key18": "5S1myPzKyjnkRvBWu49CGaxFDCe8Bv1jJdqe7fW3L4sTvDBdEdt5X8ZG4uPDFT3J7pg7n3uMqp51yxKFihMLu1Us",
  "key19": "2Y8GojE3d5Y44PZ6tyRn8tBgBqAJsYWf3jhc1eGBSeGt2qWwoJG9y3uSreZKLSaVEBhGYhiVi5xLPyAsNvbetoCy",
  "key20": "3cxHn3rhrXdSA4pQ7ic2eGsJfFSQWigDfz5Rg4iZr1MytKdFnGjAsuBWGAWLsHcDz2RSqm9sWHygDS785WysmAeB",
  "key21": "5R7fsQXcv48V5TAnG7PRBfxWpQnQ9iZRYjR343eu8mtLLXX7tg8HKGgFNJN2KkGWTnjyfr3UHf9xtriCvnD9pB5s",
  "key22": "1hcCWev6paGXpJDRFbqafsnh2GdU1if2TdaEwF3tDAYcVci239AyWt7jNpFZJt1egzF19usByZ17ckayWr5wKSM",
  "key23": "3gBpgSk1pax7qEP4Pafh8iz9GrNHfjX2soQqVe5vkPiKuga7rtiFJZsTSaHexN9iHghzZuL5Uk2zX6ZDSozz3cND",
  "key24": "zsDJk6SGBtLtvv2GDGo1MV613hiNyiytEGZbTJvFDgw7CUuPaGajuryZWFguJQ1PaB8phbngFauzSRH1L6MPfd8"
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
