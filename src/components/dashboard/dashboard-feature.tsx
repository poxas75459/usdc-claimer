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
    "51Rf2M8eqKbXzyUFybjjA9mN1iNVpGQRMqxs1taydFM7SNWEvqjR4xuQXHCy3DCevhRDZQvzy1b1tdsBimuXKZoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HuEdDuSXn2RCDUEzFE47ZW9bkkjLgNLTWrKtasMygDmMVPGZ5UDFEk4f2jBBMALEjkcpfHRUR9ifh1vsYBS8ynE",
  "key1": "Zw8UuQuC8qBYR8eKozaG3sF6qYiXYYnJucg56GHxiQdfMqpEKYZMdz3fQ5XcA6kugu5pY6QtUamZzqNMvKZGk1h",
  "key2": "94DCJGq2srYnQftKLjHT1PKeztRDJ4XWL9SXHPXFh4zwRokg8Ug8EpygHAwRjUsw8vrAVWawHgwCUsiUMZKi4Bu",
  "key3": "3E1kMuU5dttmxyEaMs9v7qscS6nAFgzZAkoXQ92gw1BoYgYdWhug8qEd3Wqg13zeavDBfeGuSo5GZynXpbhb9RwZ",
  "key4": "3gJRckgfpC1jisJ8qaH1xesuUa5jZ812VjUhHR5rfFFG4kwyqLdrkuEdUogPPS6Y5HdLPmeX2yeSFNjh7PLJmxvt",
  "key5": "5JXvWyZJXJTNwdz1nc87YVneT8jTcCmuJF58NrSbhmCCSL2smcH4J1JcrZGWacLWnLx1qetWQ8ciLJWAfcy1bBem",
  "key6": "39ZNTaJkUVXxETGmxtmYi1yFB1nDCekp4V9pUgMrxGPN631JfCgSAb1WEHDK2gUKgJkdkZk172qcCRChXCTAPu9F",
  "key7": "4v9jjPBJJSz56pFAQj7z8F5HCoMiZLLrsQky2gknwahyWxMg1dFJMSQ85JQw57XHgFuy7PtnDGYobkxdytRBCtZd",
  "key8": "4g3C1AUzBmuV8wyH7kk1ssGywgrz6uHpKkTGFSbrdZjBa5zNWv2ny5xh4zjdYQE9wmCFw4gVHoLeT9U93zHkMPaK",
  "key9": "UubqK5aKk1gWVMKub6NoSuAuPJpFzBUiPijfNYHCJTcbchxvbsbBvhs7sq2xYB6y2Z866qdA7t1MHjfMNYYNVAK",
  "key10": "4sEBQ4KV9FoiwibxWGko43A6NoxBtnsiZJZV2uoqXEs9L62TtrFFyy4Brwev1jqZZifoq5xKfhHCuKeB7Yo9xp9T",
  "key11": "1E8ZmAm3PRhQXLv4GXFbmV6oQy69PKujMtSZ2iyiKgD1GbystiWcPLeMFhshP5AxkWrpGEPg9H7JoQ1f7ofXf5H",
  "key12": "3bxMkzrhKCqqG9PF28HuL67M3YiAaZzz3Az4eLkQh7TLDqAh7cEYUAwUoVe73maAN4kehRQD5Zrxt9DGwpjxtWTo",
  "key13": "5u12nuXSnNsAaLMbGYCYtEv4TWKXrXsj4j1EZykbRSyouXR7XQhAWD7t1dj5L4Su1mxiHnw2oyiEAhHHDsggEasf",
  "key14": "3E72LJaXbXma7iGAD5qgJh5UT813m1eaHq4eYu6GT7FveUf5roX88Jfkp9CyvDwwrKRCXNBV6vVqv15m6tUTCHZ3",
  "key15": "3XPrFJmP1ebYEeCvmikRcY1sGvyphi7zRRESQSWuVdNPNa5YQLA1tTqTibU4EezJma39L4V6dJ9CZ2Xh8AC9XADQ",
  "key16": "vedTLnF8woc6dXwbkCGTmjUJsGCuwkem5iQV43MoUEUwt9ZojKcfqTANAKp1ToRtEdToynHQoornAXvjzFz1UEb",
  "key17": "64d36QEeEanE9km4PQeVdyENF9Uy99gRdGJhvADBmLdMdQZdrsHbdwJBipL3JYt3mrd7yj8EEX4tWrjVRQKsrKAD",
  "key18": "2gdqUZGMbhrnkFoRB6fffvyTZyhrudauv9qsRf7gMF4dNT5vxggsEHhS1GYu1iKFZSpajJfGvkrAajJcbfvHMuwN",
  "key19": "2me9AcM1iF9WTpWewkyvKLjngwbtBcP5zLaS5dsgZocoWofiEhuoo1Q3pQUrbviLqx3usaPRr6ZnEf69DDCSnDMb",
  "key20": "5by7wLdaj1ecD1MHJVUtMYkaWLzXvbKN5hFy8aYDFhMhcoejGA77i6PYcejQcH8F6KHKABd9H91srV62Dm3WMdpx",
  "key21": "5tKdxNjXLHtjKY6wZucrkYxQAkUeMBVriQFU2ti9g5vcxZFwotmrJxbgTgDAxiyQ5o353mCgd31oFQCiYii4eaUi",
  "key22": "QSuuaHs1of7FWNwSbX13fxWP4V3s54nj1Mrnt6N7zPxpWA1GpBR8XW5xHvhdsgsUNq7EMrhrbNtWkJNkRKbzHR1",
  "key23": "4DPy7urWuG3wcGZ98yz328vCFBrrDJGJnEYQkEujEEpQL1QaMhAfE8Jq5gwXQRLrXbqtY4Ubbr4p7RbttSYuyLX3",
  "key24": "22LDviEphQ2cV845TG4tTo65MVSmH38b3VScbAU8XL5qLckvaempHXfEVnFAzZrtQABprStMiKezVVf2RjTBNfd4",
  "key25": "5hGQc3e5g8gXdVSpcREa94b3fXgzjQsphhMkJBws9nkBqV5z8Mm9LA4nVFgLTu7sSCN4feUiLx6oqjDPPKQWzMy7",
  "key26": "5QaG4pH86isGmrE8VBxUXW9NqooNmma3F59r3CiFV4FVrEJ9CPujR2Qy58XWQ1Zg9HmMvuzJS6HDt5JjKbVEkZq7",
  "key27": "C2GVVBCA1dWRsEw723XKRSCJjVsQaeAxmUp8TwkYQVtm59x1QyD5zT48q8w36xGsomDDVDh2mUytKEd8N3t8x1E",
  "key28": "5bTr9phv3snRp6GhHPHcn3YeEpwgAA8WAdcE4dP7UfZAiEukedco7FFSSacjyGFstSiEiwrfhzQh7kRnVZEWcTQW",
  "key29": "3HKUo2qUbyS8UzgvERBvUx8KjLppUqKTzLVsSsy16PxEz9guEe7JTjg5GDEQZSamT1vAEbvUVG59tNyodq3NWzsk",
  "key30": "64Eij3D7rrriXKJEST3HxvAe8YbZk5zYGbkFd5qxeUF5GNMvQrNGhwbWQG3SNFnqDwjVJM3DxQ8vW2vuJicv6wGm",
  "key31": "4sAMzW4zKiU5tsafZFRbHgz8nCvRHyuCaP4rnRDCDkG4oeH2zXTUXoWASV3xD2jJNiN43FimtdNVrevhPFGJ3h2t",
  "key32": "B6GvE9njEYpbeZosjAC4oqBtMSHcEjeXiFWMe677wSud8wzJ6wXC7HTGAnM5zR6LsLG7FLzfe8nQSctnbBYba7w",
  "key33": "HouVsY3fVDJpA9UpJQ1DqM8DQFY829neD9dT7FCHYA9xJuznUVDbu2uHx3fTWWTMZoWMrgKMeW735Exj7GAsb5J",
  "key34": "4dfXfWnounbSx9zhdHB4Y1SibyqtvuTd2RyXa8k3SEmeNoNG5bj5pedQr7o8tKmLP5iTwRSVhvg9fyJaTPmo4MmW"
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
