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
    "LX1DDESo2ApgHxxwCgwTjUDn896GCJeJuoTbi4qsq913JdB1AiUEa98in43TFZn1WFDSdBMzUD42b9UQ1AqyyQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8oM2sE7pQnfPwVjKAbg8YA55qv4dYqbV9WKKGwVavf54ztuePeCCiM4a6mmzgb6U8ApQJE2ScK3GYZMqnsFHseo",
  "key1": "3VvwUeRzFSgbboyeFR5rBEHvcyF8dWrwwFz5uPXh9oREpCLbnJ6eD5vxmjoYJrNoW9u2iNRvQHQWh3EuqXraJh27",
  "key2": "5BdPzStToDKT2cQ1dYiazitJH4QTnYFcfA9mLatjU2ePUnDMjx75svhKJyVuc6G4ZehV5fMGCfk5UbFxAGmRLaVp",
  "key3": "5vsH4bdhVnvLnTBCLvCDYLk9nMtUyyoxnewSjaGhnDMstPzJGuvQtyNGjuEaFphdpJ4djsUAaq3ytUinZYtVrWX4",
  "key4": "2b7cLMBrJuCoQynxscWgw7cugjWfkyANYtzJ8rqN58GeFEDqkAWMKB2o3Af8RGdvDn4ySQE4Wbq7GbgBEjmrYw9i",
  "key5": "io8FJyf7ybbycZcXSjhWzsH5xPcYJ5Ck2mdHZuKkufaWfCQ1wdseMhZsP1KxsK6PjeTEqhDLQ7kGrQLHYNdp9bR",
  "key6": "39JAMyXY5fSgVhSh9JwRWJbd2y1pCEEMQGmXb6mQzxXKViXca59MWDv9CRUabAFdKqZo4Q3Zej77oy494Nvb53sh",
  "key7": "4GybM2wag2pWEUzrYQQWcfNwRvp6Si1dGNcKjvDDRWnjw1Zo6E31e7zTcp7ijLnhxeoZAHMMGKDVuaWe6PWcxVyc",
  "key8": "2EHPAay5pHZMmHw8P4co9HSDxXHtjEYNfiBfF22gem4zPeNiMzSicZGiQzBJY7xBhhWbicanKyLUiQ2t6rGLktJ9",
  "key9": "3GiAUBTSfmA7njHZ6jjoKLqtPRrxA4NiqUT4G3ZZAtkgEGbendCj44i4wzwRcSZ3tgEBWdsSLVJVHM5VzakahnD3",
  "key10": "3gmqteoC4v8KdXA5jjb65sJ5ZHjfJAXFaxMw6Su3eVE2k17sG5iou6A4xABGVZZLnSGLa24gTNMzzntRm9mieN91",
  "key11": "24JLfcjjMADquhJ2EfVkzoSVbRJbLrLziV4viEucsKrgkaisAnDZyPt2G49Bj5FTTSQf7KBQ3LeRp7z5ceorwKLE",
  "key12": "2Wbui3gttfFuyGFeKD2ewNm4mvRWCiJotZVihdBkapsQgi6CYPYE7JoXa5tmRmFirTrqz4p1eMqnvUzicVXYuK9s",
  "key13": "34r7bbXriUL8Fe5JbSKWvzTuqDVQYXYe34FQwvQN6GAM8tJsuXgx8GRvRZkTuSofryWFxEtVdkWEUDvycdtsoa9Q",
  "key14": "2zRXdvwixMxdQYgMrag5yKTwJWzu2JViTAU5mVMbvggkkz8jLbLJAaev84eLpZZSM5Vp63AVG8n3vaUsVCuR2oEn",
  "key15": "3ErkaGZ5kYE9CE7fMCRMc62nVtHYp5qKKiJaVMTV2ecMQFTnGu1Wh1zdZ8w5wP43SWJaszZAq7Uabw65oFHk1TXS",
  "key16": "35Ts8EpydCm9MpH8TpcHMHZWHYrnryZ3wWuA1DJsVsQQfFtqsMETZpAkhr1ft5qKCsvREsKWgMYz4dTzWauEbogT",
  "key17": "mgK6pz4Lsieq9U2czGRB4cyysqTMJGZFsg5F1USym6APJ6e5XWNm17ybhVkNSdecF2xLhfJBywdM6EdsuVNmHaT",
  "key18": "1GBRE6ZQf1Vs2Bh21KdTva5Uq56fua5vtVGttPa1Qbp37S2PSYdu6rhnpNJ2QQdAHR4TCfRCZE2ZU9ZvwfuBNBQ",
  "key19": "3o7apWseJGAG4cFVJcCBT5xHk9cHST6NRLBFuS9ctyydpqLo7PmZ1eLdZcT8hLka1oPSTtAK2J7VW1gM2tUPkQ1M",
  "key20": "3XMiG54Gk9bNjz1RuTGg6juu5oHC4AFR8C2fxiPzaA55twKo4TDQ7jvQfj7fZzXhsAyFZkdZnQog3SowKkuaQ31t",
  "key21": "34Aqj4fiC5zz6StvmnCLEUmoZH1qGBGJTNu6mvBgpQv76tv4cZmP8WKpiZc84M9NUK51XZsXAyp3acARgoV8e9sc",
  "key22": "52EHHSTgYmh6go17TMVQkgL9s5p5p2vCV7UgYsDTcVxFTigCrArDUL9eZpUKXuXyeqPXS6DqBQevLaw4mMA8xzXD",
  "key23": "43fJeWR7PEX28SQ6niKyr9ykJ5Wt3uftrToSpuWzdXhFinCexrFgGTyebcDZaEKhixK8LqVM9trbQCaBp8EutgMj",
  "key24": "4R1QcKjBsneefu6myFQwJbWTTbL3AHTC8S7hUcWeF5CptQdRgg5UfZ9wx5BNKgz8aQhD36N5grScnd19JazEqSFH",
  "key25": "3BakHWtQqkGv1wp9imcKUS2veHrW2mhqxTnexTTxL6iCXUeZmQAZBAc9zkfQMFi3qpndHpVAkyqGRK4kWJWEV6AP",
  "key26": "FKLJE9352i7V8P5QXNTi8qZRKJJqSi8gfixe3EQLh51H2auV4bfErSZhXq8TQQKCTJsVskU1ip52TE7RMzk27ET",
  "key27": "2iiq4FBgmXUzdz4wCLfT2y62AvWhCTpmNy6XjJDErRWqaxDAPwAyyU2FxvHTFTZ16FmpeEicrsu5txLp2UB2Awoh",
  "key28": "3esrd85vhbfWgPucuKnspFxoWz5SiAVLUPkM6qXwSa8k8RK6Pe18hRKw8jT71MvVoCRY4wnNWrGQ9fS4SmkfZZHh",
  "key29": "27J9es5KptjcwNuFM3uHq8tNC5y9sawHesrCYxbjPV8Ue71zBARZLc1ntST51QoKcEYBABuDVaTcqQXmDXxvbgvB",
  "key30": "3tsn7fbaZHU1BbqNESYx6WKftsLLBgqsxXgGwYCs8JDzqKGyMh5rJVYgMFuPL7NHZokJUn61REWm7XqHv7ybZdex",
  "key31": "5qQs7FoQQkPpzPu8sjQid3r6ZgJ9CXNVSPJN8YQnfsrcLqfYLgCAutwkQSyxK5YD38wN8apqrPtkN8uxXDr6NJrH",
  "key32": "YhVxGk1g4z65nD1AycxqhcMypqvBbU29EDQJws1U77gSM1H8L5rvAQmUdGFc19Jum6KKBJLHG3gpUKXRLDMe9yV",
  "key33": "3Dw6aw3KcXUkS6Lmiz6X637b9bQzU4YVNGY785orbcQuYAPRbArBonziobFfBxjzEqrKtVe2asYi4mp6ecUDvj3P",
  "key34": "4Wak9eUb3hM2xWubXDBSPTynC1NbQkGmaXFoeU1S7qABhN9uy3gubZhBtE8EpnU65MSP2pXDDPJobKU11CcHSbpq",
  "key35": "5qa2rnWvVSgVePkoESfEJtRXavEvR47kSgYHd1QdA3bRumfcqXNDYyzbSEGyoeZ3kNNePS7RHpyw57E4Lmu8iMaN",
  "key36": "7BBZpXWSbzSDEbgeNfrLgdktSmajJWVYxcWTB4fygLZWffmtD9yH762NNSt8Madzp5DhokyUMRfyH783TVcBjKC"
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
