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
    "5Cx7phieCFTiT1RQYpq9MY4xKB7CQS4z2caj7eHKAXbPJ39ZJjKPXv1RpYfcJ69u21xoDHqKbCXuwcx6hcgMyp7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJCDLynXU6FGqvN2TQboo2Rymy8pJ3iH4TDgNMMBxgpyXdz972REtHzoNAJTnLdnmj2h52nkm4XsfXj4D1EwEbX",
  "key1": "5UoWAF1vPegLThSMt68rHW2r28hkasRUayxUvZCGwq27rihLLiFiTNBGh8hZ5E7Et45w9qeFqPHPaEdRkRzWsTfi",
  "key2": "21MNhM2w7SUvjKRJf7HAcL8ServbU6XNRRFjD22mf1cWcn4Qs5kCF6QENxVmnvn6h1msYsLiXhpP8gdVKSie2XPF",
  "key3": "53qZt3kitaeqRCS6Bmi8DFR5sgTohAZaNcDdaLMw8wRGUr6akq3yxxWf5eGxQhCyWc8qx6mvqu9apnKQvZsrzzo2",
  "key4": "1neAVVXGvdxvzgHYRdvAApgfAZtJyzQEdoqUDp5Wb4kEYLLnem3aZpxs55qN3MTDx7Yd1TFbGEXNMWbGvdaoEZx",
  "key5": "U6xcSxgvdTNPTre74fS4WYCJ4QpJR6oVSBzxnnBaHCBD2aQ6mQd3McuaXTu3q8tjmWPskK3mfKodmFnSbVfAKQQ",
  "key6": "bjL1ZG7G6Q9xTYkoLxS7uDxtBj5dLg9FGAqLjrfv6HBNosxkiSW2g3j6KsHegh7hiKiPbU1bKrsxDTP5kRoCvmg",
  "key7": "2iANGNbcj1ks2SWD2Skphqd5Y8CAYaoxpTEbDB1pwxCt1E2vSLqtG1PuxoUDM9snXreZ48pdE4hSxxurbRuJfS7n",
  "key8": "4neArzpSDzGbThK1KbGK5v8zN52mjuU11SJNxPJHM6DAXJrsbL8xaYLTQq91QqE78JL849C3feKKhYFkbneZtPQZ",
  "key9": "2U4E7YbyvAp6Jk4qyxjLcy83qXcch2ikCJ3U9VGSszJin5Gh9h71LycENEFb89fVJDnoJgGYhetHr5MXmFfxuRPy",
  "key10": "3TQAdExygEzhNcmZ6m2W2xrwBYcwCFKZaLRYR5DXTarxQDywfNPgimsfautjKPXV6oDucJFCDPrDkzJuy6F4Y2cs",
  "key11": "4v3tQgvETQYHotVEvBdqhfZttNFzP48y1ufSFs3rYZipj9pXW92fQyxpF8529Ax3QoU7xwqboYbzSKQJ9MAZ294i",
  "key12": "2h1ZwGSsWyGQ5jJGFbL2muft5ShZtq9yXP1vwjQuPL3EoCEW7jg7ZCHRNWtkUGCivA5FNnVrx9Mdr52kX8RTQ3MS",
  "key13": "4Sp4Mg7r9JxKdAhMacqr3gmQDFZA2dAfmUd4vj5Gbk9xmhRuvQxDn4RqfkJREL6u4FYvxK9UaEwGD3ZEinXoTk9u",
  "key14": "2G8CuxK3f67whLEVxL5t747RLT1LSND5jKpopuL7XstvGiEkb2nnueuguRoN8jS9AgBBnq5JpLvgi9iPC628DbwL",
  "key15": "3rvA8fdRwb3bWFLVQFU8yTBfmQmX1mFczqhYFCNG9CyexDAoP569ZyfuTtr1fxHSzFpYa2pT9xbW9y5zDCtjwQ96",
  "key16": "2aMPM4eEPKviVn1APz5qXGC1koTw4BmxqG94SqkgS8536NpQKp5HPwufvBfaiyRvccTUt48UCFELRQFy22sRHwe7",
  "key17": "zMcCd6pCdUkCJ3shPaNSmg5swj7e8h6HEoRSCsHytEUCraRkhDSxyj4BRYRD81YAmHKiMLmCNR9Te8KLdyAgEeg",
  "key18": "5VTrikUsJNtn4djAVUg9tgfsXvYq9NNTKJf9iR4SzMJHDfHQaQDmcGXj6e4TzaRksLqpQ4wJmRsFjvRDmnFyHSgH",
  "key19": "3HsFmnThTZwMhBAmTRtWawZwUAFDdDgrKcH7JenCVnkP7a7wS9DCYoNS6ajEvEnAHEuk6bnXYrGKaBrR1QXKUsNF",
  "key20": "5wqpEdi1TtjU9HKJitoHneouweHRJJYYU6xSRFG4GZr9rJc3YPgkTfWJeAFyjAdwMtki6vriz7ZgraNxUoQqQwYi",
  "key21": "3gxq6cu5RYSbGif7P6AaK71nEVwUBHBenfhEunf6A8sCPH4okkUoo7GwFUZVPTQhkPBTitQ3GScWgAQgJnJVXgqb",
  "key22": "5vnX7HG42a1W2n18HMmPzqCcnm8xLAVui2xBXzpjUzVjmnDyVav9SDJQWZY1nrnd8u7jrFXwhD5Xw5bpqgevjf55",
  "key23": "2QDBsDUS6Xrqhfpm2oWTdqLbuGkjXR9XGrpDRFGq9jT4difgeScsQd6q3VidVvuU3T4dx3bMCmMckCKuLz6zD8hQ",
  "key24": "5otDTV74cvxGPjfTeupKZcHG2brCcNLf7LFC3RD6sQ7pbLQoaK8vqw9hzD5BEDq2H1AAkYu3R3QXayhqxQcUtqu1",
  "key25": "4C7p8dvm9UzaSmWHyQ3zEjq9uWGLXH6qBfHGussQAxHqTqA1nLkiMpcFMR8XA6GH3SSzCBcVQgm6CTZUcwKfSef1",
  "key26": "4eeTvULeTK7R4bJBtfCjmSXgKku5KpUmUaFZFSuimHqU1NSDRsox79e3RGqULVbHfmZ78L8vtTVFbTJAKW16fp5f"
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
