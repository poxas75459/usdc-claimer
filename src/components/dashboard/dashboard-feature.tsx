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
    "2khySW9u1tufZQhQTACANfGWF3re9Vw5GcUEhvJY9hw4FGPatrj9ZJ5xMeQui5sBgE8UsHkQmGFzMtHrx3UTxi9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKvQrcJkAAYjfttaYMoG7PNJjPAr6MekDQTe55nrhMvRB4XTWNC7nPaprcXW2KKmssyR4avQLrhYQge4QQJbuji",
  "key1": "24s8YU6XtBqsHM2DvkDiLych8vGLE3xspjhwQFYyopwUv4W1eDLdxKLGnhbEWVQ6waDUryJFSPdykwwbxZjtojAK",
  "key2": "2i1LsfqPYuqdgGW9cuo9SaBE9Mkq525PqFMDv9Af7HM19fWeoCZKrJrCvutzrbwAw5qkGx1PDDZ3jTgM6G2x7MuQ",
  "key3": "67WcxtwFctDXijuRYazbDeyurm4rPEvG74Dux4xV6i8mqyVYQhqQtqoJaeyHf12x7KbQ1RYHQp4V11SAebD7HkXm",
  "key4": "37KoatW2P7fiP2cwnoqzzSQ72a3rr7X5wrK34m8qVrcYEGAcTVffsZV6k7WNPqG4gYarUGpak66XfyevgTQtEzJ9",
  "key5": "4pFvBdfbFzxMeKyn4x7Ga2wxwxCvwvbE3DCgiTrQJ4QaTHbz4hU2cgFv7MiCU5tjzuPX1topM8RwpdN1gRD36Fh3",
  "key6": "SgTbkBJaNjWnNBHd2Kom7JyTiiDZnGkjw5BEGWFHnm6KoKaASMGjGxv4qV3HmfUgSSgAy4C9d5CMcoeUgvTFSz6",
  "key7": "3sS9PyDTiLikXMc3ownECmi5jUx8yUiwnKrmUq9euFahq1EEHVXQskwj4xQCCmP8GNcAgNirdZT9rAybhYJ4y5jF",
  "key8": "3hyBD5SDFwCv6pTTkJUvK5bXzQRjTZR3uZntzU1aeSyne8v1cBj9Nf2xa29MaVD2b6DFhXpFFj3J1nv4F1QyPbMp",
  "key9": "2vANPkEgHy2dBgCo8pyRzu7oXqbUqo7ELAZ62WqEiA3KyHfseFqHxC6j4vGrsr9ycCibUvxee88sgeAWs67fN2NB",
  "key10": "4wXVhih33bc3eMaoqN9tyB2hAXnLBVGt6Pbtsih7XDnJYgXFfcfcagQksXh14YEUZB5GvKpBmAzhw9UBy6cPYB3F",
  "key11": "nau9TQXu6S4NEdmkcEq9A2GTFFaWcGEe11oQge5aTC1ZR4sdmtz9aJaHBdCQUYDxdPs4gCxTaB2Ngt4VEJU4GwX",
  "key12": "2BmZLsZbfXfQJ8LSuSBHzjwFgCfnEDCSprJc7mkskdyJ6G5rHBU1g6MnP3g3rozjBRTQR8833Jju9kH1xMTbac6p",
  "key13": "5Au31tXecuhcVfo63XP5H8g4SCh61pzdtXwMxWrzccif74TZ6333Pir1YyDKii9owSaoxmEDqUSHEY6zkUQvyx63",
  "key14": "59FV3P3XKeqzzvDgzgL8njSpugn6CRVGZy2mWT4Rv6SsbeRD7s8zoqaovwrhy5e9VtQm2uUGDicFETTi6i4MkmzG",
  "key15": "4mXTPZKFsjVXpXkbBvtk714qL17mGEvRjLZ8Yct9Q8YRwherfMdDiuJrAMhJxKxfzdno1eoYSRQXcQ1niXfPHtQF",
  "key16": "5QMqCpo3wvuDoUsbNd9vkfMAdiSaNhzetzMrfUBs95UGFkcYMZZzgQ2aJmEd2XhZhxS6DZn5X1tNCpX4T7UuhT9x",
  "key17": "63Vtu4Joq2npYBATGDPNtUp48aqDeFVGqME5pp6UagusFBS6KbZqabYSrXiHrzxnu7jguMJNGkDAUDmf1mXTCRh5",
  "key18": "4nQJEGTVUd12W7GSJVgHmY6DGNMNcn6rqtkS7x38QTHXp2VGm46spYgpbMYp9ypyGagwsJieAem3pwxmpmr4bQKR",
  "key19": "2oHAQiw8s9FDnBStrCRocPp3KHmAC57Bbyh4TLxDiE5VzT4EtDoLYohdnDRNhXFJZ3CWUqN7vueitPz4wa6t7nj2",
  "key20": "XrVeKRAxjvFt4zA9Jrpv5R1JsYHxnofRWsPokqMR6qRE5dXGBZgkxiPx1BAfyhBZywaXF7gJ7pz93This1XRjQu",
  "key21": "UdjvAGtGXuW9Jb1W2kHcLYJ6qkUCDsd39vMkKDVPdNDppp3FMb7CcMxAzxaL2nd46pLvQujmzbCqpqnb8ZpMLs7",
  "key22": "mVFDLSbJKRJxJViRdvmni4n1w3x1CEdDx75KW9dDaonCQGnkU4bKGr4yP8kMfFKbgHsoEQg5fY211mPkZtWq9Zu",
  "key23": "sM47kP2LEJAEoMpbDyzhqXfP8dkiah3jJCv8Doz25cshS6AGCpJmc7hkoDExfDKwFRMnwcXPk8Pse8seZpcZ33N",
  "key24": "4rV6SgaLD2FiZudU9BzeEEjrVZ9FgqaaxhizkzjbzJNiXhMsSoPspW6hto8dS6P2nLffTSHWNRiFJyvFK7hwGRH1",
  "key25": "4JQTkThrMrn7BZRhS2RiNxHAjfNKHXE4emndgBBLnGqouCNQ5Ed6eZziTZ5Lczs3szHEWPaGpY8cqviQjWomPhrx",
  "key26": "2TUtoSoQ7bMHeP1TrAdcjzSEDCvtJAY2kPBu6tZNnfx5Ge8HY5cp9EAtg9QB6Ljy9QTvbEdyfzysQaRZ85mWsxra",
  "key27": "v2nrZXC17q6FTZHjUxXGc6CZczpjo8bh7Yo2cpPw2P18ubSVUfzbKS1KAJFX9wyYva4ves4p3jnT3pYanrskXK6",
  "key28": "4aebkzexuKb6Az7Dkvpg7QYsaqjF8hShNsULAPMXq5zhr2nPaRkYY6VmcgrrAacBBydS2Yt6GkNiaPDV48XL95PZ",
  "key29": "4msVqRnUdRSw7Gb89fzg1QFovRYTiWW9xA7EJym9EX1wFoqLTfSdfq2QLmFiou8WKx7J6d9kwck8ddVX2JgpWorc",
  "key30": "2dZu9gugPmYnzBmzk34mXBXdnLR8wvdsapB5DtCXbqH7CaiY4MA9qVxFQ5SzAhcgnaQQfgdyrCYVcAV8PWmpQpCJ",
  "key31": "2xtbf93nu8DVt8rt44u1x8WmbNXxAWRUZmVENnzV7cTPSLJugBQ6poQK81D38VzMsyiKnBT6EP4Zk1ZatucQcBLY",
  "key32": "5TiCbRUqUu47zd2ARicLnkWiqCwiC4dgQRnbVSzFug6ho16Ym4CqLwZ7aYGP9aGo3rgNrRueQQf33dVhvUzgmHQZ",
  "key33": "2uhWM1j8HTGnZt17M7bLFTnZ4EMcgzYvGY99uDVLosAjiUGkq89RbPYS4tXredjyDiZwo2G5n6GyEhA5fRG3zFVc",
  "key34": "5C7mwqmCj2WV21jnnz9G6zR2VLpn1ngJvvvxyW8uSc5LrnAULk2HuFjGhMLFfeXjusj6cYEEnZzA9WUA7EgF5vYi"
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
