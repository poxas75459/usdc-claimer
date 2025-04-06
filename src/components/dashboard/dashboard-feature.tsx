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
    "5RfRSAXZakJfS7cP8DL3fHCnW3QdYAdgZXUm14B5Z6TvcNwqaoDwBfLEcQHAKjtx9BbNNaiyGy4WMeV3vRuC8CgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1iPii1PB3KB1HW3kQbmWQe9cyQS44RnPtMzP2kMxseCY5CvTUHY6E6ZwsUH8zn3bpYEjwxW4hTbhbqwD2PBLe",
  "key1": "5SR6tTsMShPpFLXuJKEbj6zGgb4ah4yAoRT2uWL8Mj1UG7xskzc1ZUQaV6UNCQiYNhwks7v4tTF7ETqXm6XoRFyP",
  "key2": "61wz3S98qAADou2fRSE2kTQJLPQWaLzUaEkoLHhLG7gobmiTTrc7nRwEpfGb5U6quYN27TBpeSSVs3EUquPHwKBq",
  "key3": "3oavFx4RYLLhAA7dBbLySb7mFQYCawoowwuAzhTEWASjzp2hx2fXKqxgjeeDotNZ9ztFeHG3ztur8NJQJqhRBxQw",
  "key4": "3Z2LKvhRxeGvXbTZrWCP3fx4krk16ARAkCGpbuj57zt7wGZA2FpKMqUEniKKNozuyhwUty6vEueUKWwGPcwio6KX",
  "key5": "3CMb3dcbuKjKmjLNRYWSRzxx4a3935daMrFbxotTmznzMtXH3uBykK79sAGsZCyJAmxaBCMW4D25H4oXCQHzPFCH",
  "key6": "4jABMMyn2qv2d6UkRcv1SWyDDDzA5SRUheFroi23zzSdb7aMMT6TojVj3V44Y45ad6M2X8nSsKXFAfR75qZmPV19",
  "key7": "5BnW9s3FbXhQhdb7g8Q3K5X9VrVXJ9Agj7bSLD8hU7yUVJTv2oXa9BnFtED4JE91cRrHNiPsSQsCKZWrYMH9xYei",
  "key8": "3LVnvpCoNXLCmPas9P3D7XmC2Ngc6xisFTZPCbu35wDxKE8eWKdLsMzzYj3Ktuz3h3GATavcbitxjwrLRhc9N4ik",
  "key9": "3PZVJz6SJEjRffNSa9P47Eghrd4iAsZc1imT4abFXEkeWaJ3uagDGD1HeJdb1ooiL8xVcGeYWVD4Fkp9sZREKKmt",
  "key10": "2uf3SuEh1ybbibQ9xDspCUa8g1kGicqMavL1UwU65zpMVT3uN7TinAcpWrgV3Xw18HoyxLGpZiogdLZLVAjVj1z5",
  "key11": "3Ufs8wvRmYoPUuufix3iP8JeRktKRft5bwpLBmV53SU7C9u76cmPZRteWDPBCQ3HJbGNuMBx7DXuSgWZCY5AxivY",
  "key12": "3yyK3GeZZFyWDMfyY1NiriYgjjz87tQJG72naPHCUzXae8jt3sDKxrMVtLL554daiHEWsCPQMjSfAmrc833mbZYz",
  "key13": "4MmDFXKBUqGpxfNpM4MqnjBQMGbEYHM9iuSJye8oUVVX44s7tHKwVB92kjKdPKjoBxZZ8fU6Y3uHa5w9idTRgnXy",
  "key14": "4JWhdjMRToAoiNAZwiNfNnaq2efbPXvc4FUGa9MXz7jVP1A67ju28vYMwFUcTwu81DEwsSspTAoE4YkEc1PEfUf1",
  "key15": "3cW69bJiKtWgU1gEZN79HKbBs5em6q5uGAA4DQdodzVEtAQDsPPhopnmJyE4eBJ6TuM3kfA6gLA673oYVtoW3NxF",
  "key16": "5sydUN6JW7XJfMSbiYNrgaitmxEQxXyWrknLt8bSsfeVvBR7AjpJkmKQ2S8rj9fMxHnBDyexYCHApVhUC5Xi7xvg",
  "key17": "Y9YGmnmLpF8R6E9MDXjAtdjFxevopZuEQtHj8bfZnPeCaixb71itw3XcszVfeS5sf813BveVGQzvRRFQFz4hU4E",
  "key18": "ogTQ4vamexPeuqfJdMRGLWRFaqdeVBv1KJ5TdS34tAQ9zYDSX3VwtSXDqbaT356nbKs4RUSCfmdr5HCzVPzZy8U",
  "key19": "3o9fNMy4C4T3rCqY5vAkJYVL91WKUzhA6e18CtumJ2kSHnaMUHrZWfFowg1C6AjHePrmhFDia3RAYLcuofUfByUe",
  "key20": "5HusY89Rop4ArKaBFsSEUoEugQfaK2T9URQXGzEZxer4x9Y6mNyELaojMEvEXDJ6omvqPKSm9KY1NWny7LnrCyP5",
  "key21": "SmKp3h1FZrCFZuEQpsbzbSvoBjhqEbaxfHZbuvgQ6J9SwFqqu2tRCDtQtyYwaaFcXMRxCP1LqVBHx1WnA9yQ4ta",
  "key22": "3MF9ciYqTRnJbJw3CpgzsqjrCGRdFFVcsPqG1v1FQYHLghMCgtsSiBLpADpiyvP1BheB9cenSCaAMRWg8Wr6Jkki",
  "key23": "kmMbsGGkm3un7RCJd1L2Ejhe2K9y37kiY39Depyn7QmN2C5sW8WUHnUkmrdvn1u8jiB5ofuBjtrA3pevaHDoBVn",
  "key24": "2QJdXNyhsbi5mkPv9taWTUT8KYbPPEspZSxnfoqJvKtJW1AdR577uQZ5uqFqxtSNdDg4WbmUhgRkguzozyaSqsCd",
  "key25": "3opfRFvTDnnYNPuF6V77i658qzkcs3n83fcyF2qSP4hCTdatGXYEsZemnANJrWM1bwicJ8hk2qHkKT9C1N6bYVw9",
  "key26": "4Wh7vFf35f1GCWZa6kSaQkUEkyM8w15dfMXNTBzeqqpHmcy7goUmvtm4rZitmmsSNM915A6XAdnqKVcZxFaxAeN4",
  "key27": "3gH5gg1teCUkcghg6SL86m6ihVuaK7sBmajKWMefMgfucP1ZY5tjJN74Y4mywcsf2g8Q9UNjwR7RmJyxexjx6GrW",
  "key28": "51fPz28fpPzpTL2bcifVy8bLbyJx93zge6haQWmJXFqyGWJiRcTmgzawpRr7BikU6u4CwfiS7iuFQjMSkcam6W4b",
  "key29": "5tbvhNDYqheSTcVRM74oC4A32jiWqGWCcDCvk7c6tuBetQUUsQc2GgKNyG8aZsedzUx3SBmoQo1k77XV1tZnU9yt",
  "key30": "42NhvTJBdKP5MFi9s64CAVgpqqFQ2qK6i24fBkPFrf97ECi72SjUvEj2Qw3NBDNv2PXRnASJWvKynV6ZsNi6VWwz",
  "key31": "HRckBquKackUfUoUoVQTcBQwTsP2b1V8KMMJ6DPfiVezgBmuCXMtGy9vSiMprrSbEUJiyauxLLuiXbW924QrhFa",
  "key32": "2ZrTUt73VQxVtKtQswHacK2V1aAnRij8VWiThNsXyZwV5THgbRWHExzuxqQbHz5xr8yaZcVWdxGLZ8n1VtPX6fYE",
  "key33": "zjty4MmAUnpH1hvjCPexNAHS6UrarPCn3h3pLJ8PfLsAnKtr62TNVND1RAUXoLJkmyMpvxQUjabbzFnqSz6oLHH",
  "key34": "3k5YLiKQjrC6o6Bbo4rgHnRKcmTJSQzN2Svz9ncA6Eb6bR9nP8J7DHrSJgxepYBw6YDqKVk7pRNF6jbw9v2KwABa"
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
