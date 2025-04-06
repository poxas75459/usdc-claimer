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
    "4mmywN77xPvVyhUBovnG9QqWyFUAwLPb5obnaYnFK4NrDfi5PSwSBKtihEfPdmJaPaV4NsQKdFF7ZgiAJMhcsqMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VyrPRnjj5N5FD4FF9wwPhwG628g1JfPysKWxnkVN9rXDb9ts1ZdVfXByr5z45ZVwV4gLSyce7rSpiUBCVKqV7uB",
  "key1": "37QhPneu6LTGFNZw7QLRTgy12Lupy6FdWKTLukpqPhyj5swU8HzLnmD89GundcnQixzKRa9LfBGHxnxebWMfcbyB",
  "key2": "cdVbTsQTEzRJ598Mfn5Dc9pC6fnAsNU239f13d6rQVSh4krgUjPhVMJd7tmApTETAWcUV6ejtBmGViTEvLMt9iJ",
  "key3": "3MJHYvjax6yHD1gYPb6CGbZWan9dwhXSFFgtdDMX6zz1UNaXhNL4nukjmb773iqDkqSPtQ7p2mPERaJdPzwgnRKp",
  "key4": "5ZPkZExpnAkQSFHF2pG8TpqXhpVtTUyZ5ELY1tHxs9syH5y3FXpEdWUhvZPWKpzwtsV2eMRPPdPJ9h9EEkbmvUhq",
  "key5": "Den1FnZVuX9F7WuX1BYTFRCakYWdj6ZPPBhS9NEYzZkJ2E56PpCdzx8M7mAbDoqdhP17QgsgpryNZzgfsGVW9dB",
  "key6": "2bfhcgQp1z61vKmwxAeJ2jgEDMRiLcKMJnMGDNJuGMpZ1gNY7jYkPCAtAfaevzsxBWBHqhrxny4uLXpJCnfGDD6y",
  "key7": "2D17cdpM8YxvTyP9BJPB6iKy1bps8GACYS4QaQK4fTgp7D3VEPap4aMz7wcmRzfqBt3Um8zdAuVsFLDH2LKebdZD",
  "key8": "5uSbq4pVzP2z2iqcm8YDD4SBMQ8nhxeVZaW6p3o9qstZ3iJFiAkmgdyywVp2WoQhktzsBh3wT9pbryxCJsurJ4to",
  "key9": "4b1EDCD7QjcqqhTb8kRc3UDGphR4fuhtP8a2ptaH58arRAhXV2EwVEdwuVXW8hem2pzXPvBWqpakSYDqzomAyMLo",
  "key10": "5Vac2QqhQVRCXqmVYjo9a13ut4AciUhucQXs3qmP6qmPZVQtceWM586rzQ2t1nYWxMSfba7kBaGH6qaKAmJbPKPc",
  "key11": "5PjPg3g5GtHTZ7g38eXgdK8MT9EfngY2riWiycUBrMdL3xfwX6G1PivDt3uur3kQEFTZn647AHpgiU94vPU8AGpw",
  "key12": "46Ad1raDuArzXkoyLBiEhMmCWsTuvrrSmU6nJZo8d36qKBnrSbyP9YHSnyrztTBBGFoidveJWZKPzGGUQSyjhwmV",
  "key13": "5GiDTuFNWGDFq8ixYokF7oWHZbEv9kKzHrNywnu6zMGFkjqLyo3bCeNZfDNhNXockWocQenBL6NKUFCbY1YLHsry",
  "key14": "CMuMDbWAaZRrPo8Qofig4HLbmPNafqTpmdiTmBfwZHC3EeRmVLJcNR9hTRppHpbS7iPGHDnJkJQKG95HNWKbtTg",
  "key15": "4dzcyPJ7zhyWqRhSQWBqjEkQ6pMoufqYtuRihgdrGevvMaBDh9f94otUdRGzSavvddzajDNBR2qpNNzJjmxUmft5",
  "key16": "5fqkUescnEAyxCifEdL5mPjXnoigmZCDD6cQx5QRtqSi4aEKWhViaovYy93f5ddye6VW6CiL4MwJZCtDwhxJDzuT",
  "key17": "2VuSght9sE8mz4DpecjqDkaU7RrzHdbgAfqkXMMh9EasZVSjpLhG5gxTR9vbeQxC4yvLnwbrA19sXFWst2nav2X1",
  "key18": "2fkydP5VwoA3pbR6JtZDKwhRAGAM6gobs8Y42m6uJjozsQ9B34g4WdoTfjykBCGkxP2thgwFNq3sVbmGHhXbK3Bd",
  "key19": "597Wim8yk269mJzo865HW6sCETx848ycemK2JLmggSfxUGaDKtUwi4TEh65FxfzQr7as2wYT954vvjtJjev8FJtA",
  "key20": "4pQy1n1VsAQrDow83ZUFxNWw3vVDqsDP8Sobq94Cs3nGukyt3gLHp5LT1DAzdmmFTwY6Qrf2fvJMH4jANSFPuyoA",
  "key21": "5eXzjgSYoaHVS1ngKqAjcg4o1EjxhJGcsUWArwEr4iSrsZingXkoszCzAsCNofpEBpwyvfLNdjZtpWk3YgiFyzBh",
  "key22": "4R2aSGoYUWsZXw1Ek7WFjiTwxSuUZhkf9B15T4ftAK1mHRABNHtPoxWLZKXXW3M1u3o5tukpdnUNUpggxDKUrkvD",
  "key23": "4gwueAJFXtbfcA5e82Gjef53LcNmEu1Apwk488tZDiEyMnrg29WucvS5juJHs27pgABdJCL1kDFRJZmmAF1mX1r3",
  "key24": "4sv4kGbyTPFSedRojyeyG5PGkw3Ht9VTxNanJthdgwBR1THPcDkDBXz9bykFtJeHHJ1aSGEBtSgVn7s9wQPNSH8F",
  "key25": "5TwJhxnRNxFn57h32z6ksAXYBaAugXz3i6JHnbxPdqX4XuvhA7TMt6L9rq2gQ4BhEkVze2y7sufrXohiQekyedFJ",
  "key26": "4kQi4xJATCvX3L9LV79zCGcvhYBKRMdQ1eDn74nJ4Psjo3yLcGdHeZ8Mt3S9jWHUEmM991C1gAFVj87CSaFg8Lxs"
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
