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
    "zUze2GqbxePoJMQxSCFKSNiyTD3EQa5og7UHv8JzqjBPWxhBRjDbivQX6yPoT7mQJSav4BfC5u9AjeGWCQV1XBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQ3q4HcHRHEbUSDTM9ghS2ZBxSCgi93C6c2HZv99TekZ1HzfZ3iiDMAvs6cdFuHa6kg8RCz8cYo2XEGxyJMXrNF",
  "key1": "XHZLBWkqpWTei9MnMdKSJ2tsWP4FNPzraBufvNDetKquS1qtLMcqPU26mNNkhRvF4mH9iKTuLkVzup6upWNm8tY",
  "key2": "5WHWCmrSCoy2fcsmdp1FEMNFqc5ywZUJ5mVPUa31wEDiGQXZFrCgVBfn64AmX1ArUGF72nczYJQBTYSCvPqHoXGD",
  "key3": "2nNiM51fXZPgdqrk3Cm1sRzi6EFUWSqoqtPK4gkQWFZJZ1N2xizmSuM8U5gao1FCj67FxdDbNJDN4QwKDnCAoevH",
  "key4": "2314hjMiT6Z8gH9smZoMTZT39DBwvz3qid5BXPwzoZ9xLXgN4X8GWGQDxmx8RRgRbjxyQHYthc1cWaaD2GpR7qHG",
  "key5": "2BAmngNUkDvzthMbYM73eW7tXp7gavMoJRWQeEC9M1r5fFaWVQewK1tEKYbXniZgwhALJFruEzuxCidCtrvDakwo",
  "key6": "3SeydawZkmDC7L1GvGGFrbo1UwAkKjhssmPfmmLCXuU4ncpxsvfM6AJgnQTF2CzPap7V2jt3wxzaT9uCCkzrNx4g",
  "key7": "2A3fEXhvDHvuqH7vFFuwLvhVG75nTB2sJHujrwToehB5U6V7mU1eAzvLC4whgbwtW2YUaVsh9xVXyu62Yn5PABqL",
  "key8": "5Akg7JsTjPqvxyzt7biY9hGoSSNp24952G4o34QhsVcQpmPWjksjaSwkHvyjyfH7LD8yjwN4E55MREYzqxt94C52",
  "key9": "22cQqHCgyJZE7q23Sr7y2UbGpT6yUCpJG7QCfKA6NauG9o9ECZ4kGaqZqGa7Wu46mSJG85ZQ6AR8ratXddC41ZjE",
  "key10": "4PKD366Zr19rUTqW987uDzHZ1G1pEthz2aqMBDXBkLWsQcghATzSVMq9zZUTg5Tdbb1ukiZGLbmUQCh6G3ET2Yug",
  "key11": "2YZaiN58tgwhbWCKvasTVokcoiw1TffrNXL9Rag6PiZq9Nh5n7jwbyYv9XneFrTfuJgdHqnRMPdDLSTYjvKcZox2",
  "key12": "3RWrXiMkxCxuaa5do7ajZxDKjEm4HuEK9mnqY1RFgEzLmZ4AaBYZM8c6rdKybBjp1CswMAjEJz5iXC5C7eeykuHj",
  "key13": "65oToKFYnHcEtNySgRFpni4TqiAytmNQRprtnFY6zQNM1MZBGgUBRBKSMetauZGETy7ereFNa7mrVb5YjDzGZKd2",
  "key14": "2EBfDW8ZhwS5kMr25n16PTgzqmFDEuhxQUY1Qo1A42XUVe6FCKdHmRNup5kNzigT6zyFg5DCCgXJXEieQJAQDA76",
  "key15": "4dS8rQib8Ew9oJFrQoW2S7zqPRn9x2QFGzgEYguxoujZxhdQMmEtVcRQhKdNdQdLQgMU3eCBPDr1FCYQQnsQ16vg",
  "key16": "3kRQ34hWX49hJBxF3EaFSZ4FybRwCz9aDxK2AgxmpiaAVNBVyMf6y87LDmsbCEym9xFLjBmbWmZ5XiBiG4sXtW2N",
  "key17": "2XKSaMyvCcgbEEqCHf3fUrvBQgsCiCnjd5U1zbV119NTb9u4KYqyFtUkFuVz28xC78NnCxigrAjCNqoGFwjPWxwE",
  "key18": "2NWnskRJ9M7x6C5Gqg4EbJ6tECYu75aQqSrA5VSiaFHaLkqSD35Tp7waTDf7KFKmm1SuQ3yhLz3nLS6ki8EUmDWp",
  "key19": "4g3DYQMxYGizcjZB2wiEE9UAQFhpCf2gUMZ5o7iJUrSu2HmTh6xNeAkaiSTqG39GNHkmMUjtwS4ezq6hLoX35L5P",
  "key20": "3M5JDcyFqWWuDm1W3y1zoTRXsvPk6VRYfgjH9bmpBiCkfg8HkAhtw2tPdoRAawEmuXsPoTRAhCyohDL7MWyZEjA6",
  "key21": "3CoAqM6UDur3dH3DiS7yn9dd7nHntPQCT8XqZeSwX8X2xG6dTAzhHBEjhLtEmk6qDQjQo2tzLx3fcJ9bU6JUrqmh",
  "key22": "54zqLYrSQsfokRAwLmBWp2rwN5zUdzbe5doByAn6CN36LNRvUrTSZ2iZTusvXCDbxSJ5KEgWsA1sgqyWmMaFZ4bK",
  "key23": "5jDsiPkYMCpTBAX3AUGJXjjJTPGxpDg5EGrsTtgeUNZANztBk26f1r3mH4BX9v426omsD2yJK4jbA9bmSppoWs6e",
  "key24": "3ppJk9ynVrN1UJ8TcbJnbCds4eDdFChY3mmnABNZtoHd61icFmMPUpAm1XVkcsGMe1y9Va2om68AbUyZqYPty3f",
  "key25": "3VUT2x24d2GC1XcEWPS66DRmz2T6tAwAEcQhNzrKNLtTNBk7PbV17jQyfqDiQNjqSoqdDsnMyXfxUhNbg2tyXNJF",
  "key26": "3YMw3ig1goEU9C7t2ks5sLKchThuh8FyYf4a7YhLeAfnPWxWySBPWJ38WQKCKPa7KwQBVKha4FvWDfzedT6xomJ9",
  "key27": "2rJ7PTjg1fpCRvz4FtPAMbUiaqyQHFA6dD879pee9ARLrx7HAf9cw6Zd2iD6NxuKWhtbcsVrgSQURHSfULvwXchQ",
  "key28": "EDHPpgnstDajZF1hXqmDwnqi1noeHPRwtycL3LPoAmHT4v53aSv3yGjKGeBDxnaqir7Yzxr7KbismJCSA36DR24",
  "key29": "ZvcGvteY8QStH1AyKnog8MRTnwoBUJWZ3Fk6hcCMwr6iG9b1Cjy7pM71tRxjmk8g2JYJq3uDfohCE8pteaCQhzx",
  "key30": "3VjX1xwJAi2EEtwJLgxYWPo9goVsy2qTwyBXKarjDKcGrx229FoXSwufiWHnoWfkuRJzMUWTiEhQK6RSiV2zPXwZ"
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
