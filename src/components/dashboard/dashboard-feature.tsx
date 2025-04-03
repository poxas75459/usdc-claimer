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
    "5veCHzAiYRAMKkApGvVZGVDTvMjVajh8Zf7Wd3YsYvfWj9qQP2u7mkhErp9hV1VisWrDXkQXCY2uyGhyunSmjpbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnBEcdtHxXyvq9ECupUPJbWnXmHdYqY7yEGvq1SMDCpd3x6QRgm4sXeqrGeYCQfj8LkWPLeVp4zsG1A3GXG94eN",
  "key1": "536GvAKH9hXrFwCiBUqffVVfZn5zyCqwZP4vmpkiKt3i7UvtNpyet4M122d1aMhFumm6bRdio3E2X92QrghAZGrm",
  "key2": "36WmL6EUuhxxnaqQat8fuyXNAj2mBTTuiekYo96jZZyyBYXtF92TRiWo9PNmGD3h8xgDcsmYNkVTk9shUSnK4fUg",
  "key3": "57hdVNrKJMLB1aogtocjGxpq1XoHC3jisLD3YfcZTCSwWyT3JfynLLxF1ETPt3WTBjhjnC4Spfkxbtu1Xo5vr3Ku",
  "key4": "9XuGvqqcJijErfEKPPC2w4n1MGZhmAB4sUx8syXhAakHFtfGmF5afy489fnpe7ciE38pYBzW16sMmR7JAFAswDw",
  "key5": "2tpLVNCd2dFbvz6FQfgUnEwapHXokiM2tWWkUmsjF1oT6PQogRwKn5BAyfbohsrHNnswEbBvK5EvucTvauxj7j4y",
  "key6": "3YduQ28Fh3tLd9MQKWujbgvaMF8kHmxNwqRgN1n8DW2UNcrPYJPQvHdKuwZ4aznwgWiLE4vn4wZ6VoRHdC4GcDZn",
  "key7": "3mUbA8iapT2JAecM9K5seYXW6ggmc3XTe45Hc7FiwYsgnnM8g8sBtsELChWEzKtHKpCtnUPwqhMhfndvLwWEctin",
  "key8": "2tAeoX2KNjDe5uucQnYL3HVMuCV77caByt6Vqm2Fw7rNEm9mU5yaaMZzFUuJyW5MWSMJSRV46ThjEFbfdMhqPP91",
  "key9": "3oZQFX7YBfn6dv3PDL9cysky5uxxXLJkevPoTLM8yec58mXqXA7HGJk3m39quUKo1Jw2Yp74P6jHnm9Vsr5BiZaC",
  "key10": "2rwyp24NTagpEgrqYPvDhJ6ZAitgiEmjfbRhb6h5PGi1N3nZnxz2yw9AXXbWMvESDooh3NV9gCdCZgWrcZ3YVB9W",
  "key11": "3Y3cdh1ch7QKrFRBcAixNi64oUDMwfkTvvSQ1RmRPjkz38pqt9UTuxZo7oTskwoKA9L3SR1SmqqeT8KebnrQfKHj",
  "key12": "4bWnTWMfhVtxBEwVFEAgpnZxDSLKAfMhWpWzMBuQjFu9sSFGH7X5jpXGwPycr2mNJ8Fm9ppirkHykumQig3Kc2nX",
  "key13": "1CTRPLFW7Q3Z1N6PHdLUBS6B2nuUe7A8Mh1ukcyNntrSXKy3EDg3ZMprr8BpH5CS9qsPSPEcRm577o5b4NtxiZt",
  "key14": "5igyu82cYv7xgJQYtJpkqXS1pfLnrLsBXSk7HNyxSJfHUsTXKk5QFPqZmecctXstS5TGoTXvSmT6mF8Q39q7aPsm",
  "key15": "4VUwu47PmvU3LUfUDxNE63Gi4fF199fbdedKCqsi2hHhiqijGcWb5jT5smjhaEETzLtYo9rtwuPreer36ZYmEiyf",
  "key16": "2AMA5uPyXysY5Fc4GWdQLe9rJmepccysCyTbn2z75ncSySDYBknVZKDntoPjidieNwgHqPGFbvdPBENTBEMTnQkw",
  "key17": "427Z5FujWHQxMCzaxfdftS3d6yuhcErcpreXBSAGtHU22s9BjYuZoY5iHzC22y3gAviTshUz1TtB63ByUfn3MXnN",
  "key18": "gjHFMYZ6bBSvkeHBUE6iDXm3GnJZ48Cpj6KKEFexe1qCaaPGSYhWxum4myg2K8jPgtHXbjLyiEnMNXw5yg7WJMg",
  "key19": "3qwYJ69NB3wWbe1PsU2UVm7ctWEuYb3HVGuzoinzVdJxsUNBmmZoh3MNJDrXN8YPxLjv1ebQfzKEb1njm5ahQje7",
  "key20": "2Verx9nhri2r6ggZxd65H5ZxSddCQ2RoGHvwLwd4g6s6pxY7T54Mb9usRfpyijmWkWrdgyEoKjdSoVXthCcyxKY8",
  "key21": "3geUbPe1ZwbQE5kT7pxTdxPDpd31G7MvHGyPo2kBryvsxJchbMLDuPgqzCXc5Nz8vc3Lx1epq9PeJjZaLY4y8S3m",
  "key22": "4zwzcnnGH8S7eY3PSJjxAkoMRVbNvH8h7BXrEUTYzJ56Uo4LYdMhgfgxQGP42z6KTfpQenAMa5o4maUyfJVLQR9G",
  "key23": "4xTbY2JdJJ8qMicg2HCCnCVVwPZ7DvmmwpWT4fzto7rLaeQoeEkPjg2o73M5DKUeYjoqZw55GeivL93P5rXczGYn",
  "key24": "3bzk7Hx43ELXHjrecvGtUHupJpgYjF9YzmDtYzHnK9GbAtsY7VRfXPSEjFmark7uieKLajEMvpZxC4zjmK5wZ81w",
  "key25": "4hatL8pzRmsF9PuKhTsn7YFquCcuwSkNFstjjux4tveaGbEzKTjmj9ZKbc21SC9fa6yy7gqvsFVhyPeAr5cA4fra",
  "key26": "xfGaMcUNZkjoSAXYaToFP2gSZNuV4oiD7eQA3YwKrwxSJ5zzK7EzUtny1qjaGiNUN3VmUnTtwwx8XXuNfrRMyYz",
  "key27": "snXPtEXzvDqT8Vd9VPT9WEgzU7iYgpbUYZoDxhXHyWYnENXFRfS3JAJoySSLxq9YdGDbN3j8mLwWvsRbBvhVZjx",
  "key28": "j6fDN4VaXxfRKyNjuQoxAkCwTjqTk5jo9C7Qn5aKXvfK2e5sB6H6A26jLr67ZUD9n9dj9JDCeTjqFiUr2iVhLCR",
  "key29": "9bW7RgFoUoquaC34h5NXYjtVsccGuhsjytJdu3ueu3yNVUDqMPXRZU2QWq7HkyK1fDDFPTKsmYFYb36ttgwQYyT",
  "key30": "4ZMQ15NNBJJhA8jvsXubxcdNkDV3HzoHBuBqexJcmbQ8gcoLtyAKgoSBpuHXdYJcjTt8KVvdaG8VBXd3X1cZNRuU",
  "key31": "2qqVPc3CJTsxWmiTKvj9MnKHAoPX7btQeosfWHvUE3uVZBnr4Wnk1mBAqj9YXsqMuvrZhTzjYCxxjjxeUHARScY3",
  "key32": "HsBp57K8nnNQfdKjE3i7SxAYQj3RVtDnXwsUzv4dj4hHq1zHJvDFbeW9sdrmba22BTRgrNur3qVLyoEXRXjykmh",
  "key33": "2R8Qgue7H1SqeHN6VwNayS9Y3qSaTFr3ELH1Mi7bqHWokjkzQy8s8NDRTDGsGQMg4eXoFPqESYEh3oMpnJMs9soX",
  "key34": "31tt2w6ndZ5goc3Z2CUfRBuFGRdn5Z3dPrBm3U6JxngewnoaCAqKLgXFvVZK3PGAe86WU5xPLp2isUjDycZurM1n"
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
