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
    "2LJMtWErhvJZ7NFr68Ja9Tmiw4ht5PpimgPFBZQkJyWos6UN85Za3rGdvsvYoXFKxw8e3KfbhUnNxCazabaNkDQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtHabnLXPzcm8hEuibV5TmpQMnxZHkpxhfCcWh9jehauSofhY4pspLJUfkJruqf4aTqcGPyv4e1ZE7c9BHvbpKR",
  "key1": "2kCXtM7VPF51CGNQuy82VwBT3cpFbhWfRbXZ27Cb4PYCJUTmW1e6Ve7DCzNQssSdZUnZ4P8yuHNUwafcAtkEDtFx",
  "key2": "4Q42dEKcS2gWEYue3NWMX9Wz9qBkzi9Vty6ZCuKtVURbAmdbmvuNV4TdBJ8augByQbVLpP4L2WkzViV43uxUAuw7",
  "key3": "4bVJ2cNxWXLBxdNRL8ieArAQSe6Wy9KaAbwfDg2MBTWqfZBPGrxZYbQQ6Lscd3y5yqJ6WxSuJQ6CmafWQ6aVrUFY",
  "key4": "4LtWTKgUnYW24Mje4gP8EixizdAQno9bZ95fayPwPoheDJWi2zHTpiMAnFTAHbZU82eUb3EQhBCiRm5sXDqZdBfM",
  "key5": "3Z9abUaX4GR5z13Wb6wquhFDReLR7PynuiJz6rP6UqMsqA4Scqmr4RB6JuNp4w659EftVxazXZwuBmdvA265Fex8",
  "key6": "wb9cDSSJmmzjzXUNtLMhMkWHPupb5o24mi6aWydrUmNWTiX8aEPB7ZnqiFsJp65p5nwWYbFEoLEHzrDHbngZau8",
  "key7": "221EC4YVFFo4F5fPt7RUw1ASM93ziNdqxWpKDGw5Pw7kwW9hZ9PKwMu8PoWJpQ6F8R6c7cq8wzMSEc5mogohRTis",
  "key8": "5DuP9eaBNrgW8WNbUTcCoiUK3kjbgzVWv3SDLNYBG32F6MLqJS1tiT1WVcugyV1kZZ2UFUDViSoBXk8g2BWjiscD",
  "key9": "4C4uVWFiwYDFqFjM4smDvdyAX76RPHtLjA8pqZwR2MiGH1vipdCfmCWrRExyPXKF3eHkpdhmMdx4gVcyWGkHHLHJ",
  "key10": "2kRVVPrNrHRTErz4vxFp1vHvt3wmEtfwz99NsaA2Twsaf5H5ojzjSSgLKUzS1fhBnkkHnFbqRgxcLrXzcXtcesTp",
  "key11": "3SG86HSwPGxkWtpizWaXxq6W1Rb3VBvKfR5GmbeRqCXYJer6uVpNckcGNbxf9htPtP9SYp1zYdmLZbsdX3zJS1E",
  "key12": "5j6NrFWEqNhb7x6mH2qpCY9dYgm83WSgdWHDPZzz3xekwY9eY24j6fnkn3jrQZEtdjdbC7yz7xJUBXaoPLhj43M5",
  "key13": "5oXobUSWY9dXaAZsFRYgkfDoNZuyrEuZv3p2nd8uSYxa2eWj8TMv1vNXEfv4SXzpHCLfNim3kjXRCggcXGdhoC45",
  "key14": "4nD1gFJmQiT2WEAs2D6jF7atnPTZusPbLFjdxccL8dvXXiiwtsP7Ln1AEvmBfKofVj5wCaYiioQU8Fkzh7KFwwjq",
  "key15": "4ohkiGjPAHDzdCdiAXHHFu8p8p6GqMovtbCfrKNQuoeFhZYji6fxP84hq6UE7Wu7jmsLJewkRuE1CuPzAaD4H8MH",
  "key16": "2NYPX1sZPH2jN51ZjW2XQgWyP2ECJPu4VpQ9YxBMm17eenv98sstyas6cLyf9gFoAGJRjKs4H34D34FTcL4dxu38",
  "key17": "64kKM1cwd5vnkybUHQTa5FnkBoKSYGLoUnRxYttMMxcxD6adkdNyFmTkvPf2xocSfoS7Qvr7G7mxN6cLfU74y5Yg",
  "key18": "NErcbAhAH7YmHN4kzRCfYsTgiNLFJubbw3ayciPPL6bgq9NrCr5ZbsAUHm1QKniUFeCmtE2ofs4ajbT1rmJRMmg",
  "key19": "5haxpCceMfnLGf4Lag896pETgB4efwjCw2utoNw5LE6zaQ5QFkbGeWgVJyc18f14xMoqMTCZYFUAvXveeuvNTbtd",
  "key20": "4RL1u3kuqofhMH3SQi7SoBdAkDsBSERYwunRFRyjm7WvwsDmHXFVEWH9P5TW5DFiTwsR1Fx9DnF8C1uQpqKdp1yW",
  "key21": "63zahNmrGV6z3mHzqnHuyeLaearWxAeQhPKRNdL3XYpVvs3fZWk7U75f1vyp4zJFR7dWoUJH5Rhvd7hdRhD3esM9",
  "key22": "4h5hReMkVcYqqSMzQokZDDrYGzFnsJUwLJ5NnMn39kceip34RpLf7bWJbqoPnBqrn5drh1ez6kQBfASKm5Ld1pyW",
  "key23": "5ChVsPSBDMfohVxj3613v298B3Bc7NLYHfDmXKZn1ALSKUSgFVjHr3oPNyvoqz5vZoDkjHRB8G3uLkUbpwCJAuNS",
  "key24": "hPGjsStDRUgt5Z3iFowojgwzgB1qYTeRqSnv1PWZ2UGnx3iat7i2V6BeqNh8ctqeBsqxBMkY8eqjPRNfXgtA9MM",
  "key25": "36TaQAwcXADDULiYzqfePh3U3gRcGU6jqezXyfxLBRFVBriesiDxwumEiwcAUEfUXLv2HEH4xtoX85XmuB2tXqsG",
  "key26": "2TUdo97WcNxuLjyQnUExgirmNogsMgsEhFddPThJjSrsYJhyUrmmCbtamWiNrHEfYRjsP5zmUvWERkSCTxFBrVHt",
  "key27": "4ugkJpdn2p1DQ2xbtwghaPeHvTp9ndT3FyuuNvMc7gi4ZgKKeCyBhesVZp9cSNBARrL3qUMF2AVERME1MGkcKMCL",
  "key28": "7wM818kUsV3EMPbq5tAC39sVXENteYNvPDYRfwyQ48EB9vt4RJgfwiMCiyEU5uGcrCzmddMMNDEbzYXGZ137XXQ",
  "key29": "3YRSGMc6KFmnhCTUFEnEkKowSTpXgguVvciuM6goKLLNMpenyE22Pih9Css8bcuUH9r5GNmRdCPPF6FVfRUgWL1x",
  "key30": "38Qor6CPurKBgDaPG7GKfhxHgdMWLJ6dPmik4Kp26ieJbT5y5rHAmM3B1YTC3RYTkhMgCv3cQuSazpFiVbfBbtXy"
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
