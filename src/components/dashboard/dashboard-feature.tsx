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
    "4g93PJSStzGcau7dx61NMyAPWgFGEkyJiH6hB5YAdYMKtThhHwq35ErE5atb9ctNF5RKwZhFuTqYAFrZQ7H6h2Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5VfDCyiD9EqmbeLXxQiVgZcJtaay1xobSXBe3jUXwKTpgqzvqCXYYDUXPwcKmjyN4NQm6arQDSiAkoThfTZri9",
  "key1": "2irQKbAWBLt5nTdovTnYcfSxfUqAox4Sxej4F47AYcJ3EAYQS5b1pR8yW7FwL6KBwK7ZRFDPLtDDwcNHLAf6hx21",
  "key2": "4Nbk27JTJMhU7baXY51cgez8d949fHBotQr5Cz4W683VxG8WkynkKMXXdCpCvZ3LgLNee4qzWVk2pDUtcaanB4Tv",
  "key3": "eDuddPp82vJGdwrvPfjbXZfUbHSeJjfaiaA14zdPmUeAMTG9UCN1XtQ8pAWmWyDys4BEdzixtNKxEG7AQ15WgfP",
  "key4": "2iwMu735oQD5dBQGUph6kVh2jcxgTxHJASHJvL3nvvEhuMj28kuEFaVxUUwufKWXaHSMobkXfnjrwKyt88Z4YmG3",
  "key5": "4BcUYtS6d6zZN4TiHPSEUYkDLGeAUVGYUr6TV2MYrpdPDXXsgiCCGY8Nx6bnxZgGJyZxRpuMTsGVvMSAkzeGE3w5",
  "key6": "3yXT1UL9it5osySN41fivp5Ugt3sBWBpy3r8rf4q7yG7DWpMBqZyVrEXsBKDDZLTMzBmAkMpVJGtcFVwKsN6rrWq",
  "key7": "5jRwa1YhbXb2UqHE1shJUfc9jsGhYSh2D4Ru9RqZQBhYHtrHiUdaCZnZDYLjWeeokTydQZXvpESqnmHpLXTuoAuh",
  "key8": "5DpH6V9V2NHzW9Y5rZogfMzsT9b81NFwn9uooykRfVTJcTFbyAu31FsmcZde1ibqWayMZephUqXhrRKaHrePA1oK",
  "key9": "XFT6Yx6uCamp7GMXg6rw3mwcPKc3sy2VXqvwzeVg6GEmyJxRzCYjRrVfdmF24ZiLK1936XrrcWqacApsh7pcAS6",
  "key10": "3chPdAkhGqnn9DwRraXBarwaNndbUHavZMJUAGmBsy4VUAeDLFuizPkMQ2vBWeWXUGFNwJ9tUzADxXsxLEeXafhc",
  "key11": "5gb5rSDeVWyoFPMdRoLeHrE3d629SKNQsUCvtu6fbNL381K5smxTMw7jtUcEELSEpvjT4UrEqV6DJ97FqZEa1cbK",
  "key12": "4RLMp4UTfuNgA6PXymdjdJ74dQyFmKM3nnNKh1XiFTfFkmujtKWLRF2bXCGzYrm6TcWdAdqVMazXvwKQ7h3PrY2E",
  "key13": "5PJSYCfEi8hnFtRZjBf3SvthzyjjceRWQryNSpDWbPXoD7TmHruARS6p9TL2JZ8tZ9s3E1GQVKYLwALVvUoQx9Sj",
  "key14": "46JFZUxBJYDnQpcfYnzK9RfWfd33fS4RH217cVthq8UZxve7ZUSVgaqTozLgdVB782J5fFeFGYpToVf5ZtLePD6J",
  "key15": "5fQkbUiD5dX2VS46K4JJuUdgSJgmk3AGxNxzuadBjcYV2s6c8ZswRMSYnihgu6Huy5j5YqYwyARwp8zivp8fXnf1",
  "key16": "2ppe6icJMsyB8uPc1duPoRUU79V2qwJbWGgU4Jdsne7ZoXxP2qkMQaEsM5Hj8ASbxMZFvLyVcuUURTwaGsyH7QEV",
  "key17": "2jSU4Z2cxXVAuSsARHQdBYMDEwpz5SUj8aA8S2UanhGjbJHDKiSWixrhaCo8voTwt1c8PZYYXTUGds5exz8Pwth1",
  "key18": "FUyny8GozPnVDFKXzimY9g7LAPgDoP2asb1bUjorcVCbwYkzaopwaN63HPr3PA2ANtVdJkkrS9dmRfiDmwLNK6W",
  "key19": "h6a22EsFbBAuHvUHJaWCoQwU7J2XNNf18XwQEC8FLZn7yjhTbLu2xuYAqK4Cp7KnuzteUpBJTCLPk2mfeNmnm7U",
  "key20": "51X4UqHiMSTRjBYWFqkNuKHwWpWaXbbS9xx2f3fSBeQGGwwXraeyGWq2sKZqSdMpv2ivQJj8nkLdyZ4x1o6vHyQr",
  "key21": "mF2tX3XpsK6faPoPn61vyqmZGGyG1fzDGGjXN9xBrtmrmsP4ScimntoBy5bXX5rSrs2qjVdaF8saoLFoUZMydZz",
  "key22": "58BCK6hcsDVRm93ok33rSb46SJHCGLUmaEpEH7V6P6Eh5JG1RmpsXNRP8F67o7mYMacyVgfcWGzcWXMnPEsSJbEx",
  "key23": "5iPhWsitQpXsGgDiDwMHn1EZAuAGBZtz2Zh68s8xDK6o8ETbYiuNkUd97zhgdk3AxvScaRYRunRSmLNoQxBiJx3",
  "key24": "63ns3WAg3mL9JjPNTDrY4a69RfAkxLVUX81Fm2WbMTBDSNEonZpycV2zw6rsbBtkX9dRw4kd4jSyEzQuyV4USocv",
  "key25": "5sV6k9cHWk8KEvpdN6jkBFyTp5MWEkkDV5WF6inKAwkzyTXVC4rAFqkgdRgbHFmGQwizoTPgtqA9zNQWAY7bEg9A",
  "key26": "2gFAfcVXTafodYnPxnW8zwpL3TYC3KQHkHdnxwwxtwxHDC8Agup8fd1FxzjDUHvhdVzQwJyrthMnqs45DEyg4Ykj"
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
