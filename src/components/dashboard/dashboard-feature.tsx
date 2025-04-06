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
    "4y4gr3FPzk92SgbBJ4pgvJBkZp4FosHs5AGgkXJjHctFfuwYVoxFubhNDB8ebNoF7oetqKgRiNA3pgBSoL1UUSqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqKZ2zLY6KN3uq3L2DJgYWGuWmGWchdsJ4YTonA7fAV6Ve9xfi38MFqDvHSgC4AwpSTCHHx3LZSeQYSGACzJ6FV",
  "key1": "5qh6bto5qnuaDHbQ9z7fARGKnT48wk38cnhi4NRQvfqtkG3tv4TzgC81q6QKdCC7L6AnrGhmmffKKw6T68NR7Dr5",
  "key2": "5vQj5XoiaUBCMCKxySQy5PDqMYw2i5aYRHGJ36ZMi2J9x8ijntjsYGS5TvVnZQyDNfEcvsbTr6uSWMeZSLVVhEQi",
  "key3": "3QDGEsTvbUipa7z8PCKFFTD6KG3BNnFiR1AybKn5w5JG7nLifjtCzQqByheZWaq7ATEmo1B8ieP9WakE6r8pDPT",
  "key4": "seN8ZfLQq1p4HbCqNYk8zckiuHyxQuUU93b34raPbCWMJ2Unpz5LgJzKA5uj2sHPCCJsuYt2Fa57HYQNmf9is4X",
  "key5": "3evYraf9TrrJbopzvvWyCwgWCjd5pPhrUYMfQRRrwABurN8bnUhMvuSPUoKca62BjXATzknnrrGT68DyWprLDMKR",
  "key6": "5L5yFqC1RZXxf8DRhP1prMGBQ8Cmd7DG3FQV4EoA83RWAs33QwG4zvy8QhrBDtP94FXNM38egX3oh5mHCeuUpcf8",
  "key7": "4aLz3orinQ7whpVaLwRNyLWisX7xv5bxsTJF67X27d2ivyDRt2wfwTjkvgkKq5wE1Cr8wh86EugmMFmqyULh8WYK",
  "key8": "E9F46kEXyHcdhZPBfavoYYnUuohc4iGB1wSWgGvkWZgJe7MUdNoUYvu3m2S77Qq8uLvaw6cVTvbHfzhEuDb7cZ5",
  "key9": "3adbHCCHuKxmTpUwchoYJWz5V9SbSXR1PAduVUmmdzHBcuiRzhTULK5iLZnjSicECs3969K5JxKRySRnarmUh1YN",
  "key10": "ZfL4ZbEtbGKUPDAEgnER7M4pQUw89bknQVQbWqLxsPfQwxYKmGgUMKuE9nomHNxfXFZsVHMWZHpKKvgQtJNmDZm",
  "key11": "2A8zDYokVLhRA725rZjRokwpc6ay3G7rwDB5qED7MqKUC9nbAayXHRb1NZyfwAC9zqYEAKRmRQqVdg2wWkwX6ESx",
  "key12": "KGPJE9JT3uZciiFb4Qyarf3tiZSm88WgVqBw4aBFxjz1TcW2czF9B4sLJgA1fM5CjJeCQhoeanahDmmkmjWjniz",
  "key13": "J2phKH8thUKz6Q9mgzZAxALkWi1Qzi4Mz3vyYgEcYqWTJYVBc3RckzPwLAvxcKpDCrZ7VaCofbjzq5reipNVXKq",
  "key14": "3tXHHPbgTh5i7S5RSm1vcrXeHb7p24idfUvAiqx1nNg79VfWmwzdhHwAC37dK7braz6KEQx8GkXgXqtABaJNXmb3",
  "key15": "5z4Jg9WZQPNhFnVTwL8fWNzoqVy9YjVPS2RyiFryffciiPy1nSeBPFZiY3vFihVDQiKEm86FU5aGm4HVeGzN1hHN",
  "key16": "4R1CKfcwEY1BVHqCvTAMPLU17LkCJgagqDQBP8Gc9LaAkCNaNiABGL8rE2NpVPjoCCAnoVre3hjWzW6BQrUiqr4f",
  "key17": "xD9VMozRAY7Boc58ABhLGuJSLr5qQDcPe7tamevif9qSwcPPE2yN8qTmsih1SPRWsrkHLGg99e4CAuETqkgvU2E",
  "key18": "5cjtRdPHPGyhqrc8wLrgWwDdEst5XNnWURrwuNToHfMremVC9PnnMGQ4Aaf4M14RLEEnt3Zmje6MPY6XdQXM4Mhg",
  "key19": "gxwBMpoLPYEd1gj16nJHZNedh7J9h1tnxftcawPDhKbtkL2k9X9LV8WyDxkoqq7e2K8nafC3m9KGKkBgFWggEpQ",
  "key20": "2ppdmKrqcF8naKKNdaR2T5jKkKYyfDCfBk7MYo34MbqvifD3KArChwHiM9b1g9HFbzfdRNMWCpJK7mZhS77txQ1Z",
  "key21": "5fGZQDvFwFGYiXneQwUMLMS5bLB9xF7hjUhKNFAobFqgj8FQhaptANLGm1iCuzdPMEVL6GTXUSSzwCepQV6LgWFj",
  "key22": "4Noxwse31GDWnRWjyBTGkUZjJKfJ5Lf37uZT91GtTKgZZ5sRxL8Cj9CcSepLbLCNrxm5wb49i5yTdkTDLafrimy7",
  "key23": "P9JEA9GentHCzwp8zkNSLTtvcAsJfkT5iWdj4Yv3MmvV6Ag7aftSNGrhh6TKn7bDRQj4e55ECn9DGeWAXDYKhDS",
  "key24": "4cd9ZKLZGwUkdMaSMwFTuJ8sZpbULYmANRJHuR8R8J4xayVuwDRPNT4bHpCFVVzLaL76MdUKhJsqAG4aK9FGBxHP",
  "key25": "3VRZR4CBLrNryy1DA47LZM4v4ndHpf45ye62eAVGqUQKuy32WQ7BsA6iSPYkqp999yVEkHVnzDss1PFfEDYQFYa1"
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
