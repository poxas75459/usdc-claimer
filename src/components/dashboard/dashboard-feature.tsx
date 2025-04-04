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
    "FADy5DJsGypy1qXH9ybfuH73GuTVWzwydszQhPuDFkLVwk4PLCyoC1VXSRuFYUfBN62iUFQJjTg8GgssVcHaMK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuePzU9RAegLQojSFEkvLuxu94YbhDbQzfaYtGHrhtWk4N95SA8ixDmMuRvExzHjqeCdbS3qB3xe8ss6S4H1295",
  "key1": "jk1u6VGVLSsrVKEpb4LghtpPyorUXWM6Nf6aoiojwB7tqJGYdfn4R3kWVPDoXrDUsqSLEraVQKVeVGNP3ggLZ42",
  "key2": "4XDcAdN2pRpzDndXfKe2FZ6fenSkmiRiXiAHFnV8SixFef3Jhc1eiGXwt8gSikc6gLwkwkzSkSXEu6jTAEho5Ybn",
  "key3": "r1G2JoY22tLtb8erhXw27wQgmF2kS51yF14VEpaYxHTY43RmxW9BBvyWMfmSyJqb8jZt6WVzrvTUn3nstKdQ49m",
  "key4": "2pmdK3aA7G3Dd3o22D1AqtzDsRLU9GxLMkCYoPDFLAtmJpLSByTEKuHMoYptLCib8WUncYeoqY1bSFqU3nZysK2s",
  "key5": "tSn91JrLC21R4XgthShnmypoAoo6nS5pMBRCWuaFCuEtcku3jy1QshE2XDVyrwsjb4CpzNMc4LgwavwGvBkDEK5",
  "key6": "3F5i5mpZRxvZngvkyGrZ7hLX54tRBYMfqeTq1GT8wUC4qbEQCvJauzhAg4ZrC26aL58ja7AZWuNZsSwBLiw7nFus",
  "key7": "3J52jxdisEuh5PikXD33EyZfMuxFLjnA3j26BVT1yZopxVas4HopJb2zmKugJwJoQGq9KCqfDciiAQ5i8tGpnr7u",
  "key8": "4dXDFHaXhYdgBBQQpSfb7j69wcf2ZdiZu8u5bXivXBvBKxyrLYYWCQkj47pUGiuPDtx7hKf71d8GwVNVNszbgzt6",
  "key9": "2B6F1jhLyuNY68X5mJG1NTF5az9srTQsotYpzDYucBELW3SQ6rQEZ4WAVb2cide8uukCbDM1iUpMWLSHAunmnAMK",
  "key10": "4YboBTFAaeoF53swrzARPKEUbtHJY8tCMHK6KnoC7GaHmi6jVioQKZzCEAP9JQ4b1FADbUHxHNzy1RuktdcWNtrP",
  "key11": "j88zBtEHbMD5UNK873NLEqC4XKYTH14DCoKTExiySnKTcKro11NHt5N3vDPCk3jNxV9HFPs6xfYEf4CmUGYftS4",
  "key12": "X5c1SbGeJ3F38pgTg6EuwytxUhJCuybfVnyjRALqRYqSUaVaWFA46Y6MVFhjNtiRJnGBAaLZ52eV3xm2eg4ZN4i",
  "key13": "5zaBXWvKqf7ETxTJBXoXvhhRPwAG49CZRe7fw5XNcBDAynuLiQZzRiifzgcso3YfLuQUEDgKBJQpbEVwQ1K8hurY",
  "key14": "56wqYpnDR7JwGrLNjp8DWsnVgw2iHfatABfBjRME6m5qzfbEeUwLbaby6DdiTkVkMpoMJRLxyB83tKXxJdNh9dLv",
  "key15": "2bq93N6zieQETLw54jqpJcfggQcPo6vzPQdfeivxvPGFwieERMJpnAVf3pzGMGqjrbwT899DizocH1cXHnNBVNWf",
  "key16": "3z1XBGoxRkvMcDe9LGLgBET3JmGekPb7KxihhoUYNWyrTAc8UBvrav43sxxwVhZ2GwdNP7qnsPvXwqmB2TudEMBr",
  "key17": "MK8NACMakvqV3fGL781i7hQxG4DSffGVd31ztsaZqKcghWczu7MWaoHY5CtiJ2QPvub5BeG2VtnNYGuDeubmFHV",
  "key18": "4ccs7n2TfzmdxUYaeYZJsGpUtX9uq3R3zAM8vfrP9jF2t34YusiruVYnKyhpSchM3Rfch98ehjWQLXTjDrZLKKsv",
  "key19": "38hcHM34cCJ4uwfciXUkRW3dNvyRynafnb7JwNSmh88hNwvgob6MQTPBu7ULQrpKPyDt39wwWdKfLqAmtPSiKKWY",
  "key20": "9m8jUAfv8n8mETLsHUfx7reWMNPoxCcMj6Y27srBRqDmtLGWFsXwM26aiiVrtAGSahYimPty1W5Qhc3mJf4X7LW",
  "key21": "Kaaxfq8o6dxu7BDXKLYw1uo5kytBZwbFMndjEFBGYa4xMVpdL2V6epK74QXjUBAuVCrCDtvb6u184rYfH3Y8qSd",
  "key22": "3ikJXDTb8Lbm9mq5sjjgcZJNzzWXpqU4YXuFnhG9uCU8ordWakQt3fA3Kj7YDD6X4VFsHqts9nseSdJXcDGJbwif",
  "key23": "28ki5Sbvsc4JA8fHMQJ2aTDSUdFTFF2mGTTo6VNPpDqXKMtN9ZMqQC2FWCLRb1ZCkNgdGj9WHRsyz7qDZpmizD8K",
  "key24": "4aNUohuWzozy2A7TXx6kyqUBrZXeh24uuiE5QGRoQhPa5EejSkogznW7HBMb5rbUEfFdzUhZAmYtCX6jYak49rhh",
  "key25": "3qmQ9vMFDnoqQgX5qjhTjpm3azJ5qHuaBFeCwkz3Eod35TgeRBZFUxvfBmweqeL7FK8Q9kC2aDSUnhyAwNpnoU9A",
  "key26": "gC3ikiz7FVXf6BcA3dTUNiCSvCn9GQD4XvvXRCDaG1Agcf2CtRYnnCPabrMb9Ah9wAZTCsM7DwcWnzccu71Q8mq",
  "key27": "2kKL67CttPtvBymHXd3uFPkqmfCQfbTZcX2uCxJnrwgNFCGtbPaX6f6Ao1sxVNxNWJCnVNuXr1eTh76CmHx5Ebc4",
  "key28": "58wxNE63KF1MUPu1ts4M43GwR6HVGgTNKhib6ohyxd2BCYKTrGuwK6UyCEcrfbNbDFTAzsLnz4gFBuwtTLBquFWN",
  "key29": "3nBdtCuC7ad1Z9NR1FFptTSYYUe6fufPhuib36T7YsPjoiWvLsb5dCSUVQXcWXUDVGiTS24RJCXug1zq2x4NDiBu",
  "key30": "gV1gFRSh2S63Lme75iyh6xMiWpWChNMn6dcGsTtXTSfKT2rXyjBA2thEDDrjuUdarBpr58S2VxwnUGZtmZGbXUT",
  "key31": "22y8yZEzx5PBa1hEyVx7G5hQHjzrck4TgG5PQLfrN7fTPNSJVzBmtHDkGUJaJ7XMemwJX8NUyhyDHsL5GTCgfeds",
  "key32": "58Ur8KSgqWg8yd4ukXcu91BAsXyg95BzT84ogvGf6CLJDthnMVGAWjpQDfjeEuWJupYEtcgbLuzzg9Wcecwt65Ve",
  "key33": "5yB6TmYfK8pKk5nRyutUbc7LQ4K7r9XqgFxnCWhJByj2iZZpr22quGxM86xuGFmYRycCLF82PHzP9Y4QFdWYdUER",
  "key34": "2AsvTjaBdY1CKm64c86RRPzVirR2NUggmzvrspnxw5fQq9QLh5x8JA29su2koyL32TzUKJZbwHA3Yfro3p5qrXK4",
  "key35": "57RTVBPkuwvxHbWFEhocRA5BzTYfg4sdJ3sdgWBhP4qcEyhDnWVNC3Zf54QTcqowh3X12vfJPDMSKpqNm56RfxBU",
  "key36": "3kb8djQtW1EEtzDqF8rfrV6JCNSs8ZQ7iuUoz5n1QwQcJrhidsrnLvR1kdrbWzqfDacUocZ3jeYotujHVVLaMUh3",
  "key37": "4ZKDkEycsNovdL19Z9R24zXTBznLM7NKuq3QK8JdASpyze8HZX44Au41ieqJUowEkrncbJezuCwnJPgqjxjHX8XB"
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
