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
    "479D7fxPRXDwGrtxVrGb58deNjQYd1qDx76JUtgVzQswdSxgApMCSfgm84EQZfqR19Y2EkLxVLbegfwUw2JfVYqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YSkwzE6ZeiRHgDy19vKVACSNfAv2TwG8MqRT7gjFVh2Ze5YywzmrkFmUymDDZmrgZPhGBn44LBuJvRj8n3uGoRL",
  "key1": "qMEbWFZHLwwcEdTuav6Ezx2ZTuya5DimEfQnSQsYFzGDJbsprQdhGSM598inNBon4mhsSqCzUoccnndrRgviGpn",
  "key2": "4Zd83P4qU7tGDfFyBCJJc9d8gWxDq7hLgZpDLgKhDey8tnPv1ZFadn8JnMwfxYqAN54ZArwx7nMgfiK9CyJ1QDNJ",
  "key3": "5SK1hQEcv5UbCzSPiKSe2vu9RnEXoG6mE9NEd8xiDtdgkrMAv7X2FLC2xc1uTRKHVx4dYDnjA6FCte78NeSp9LJ7",
  "key4": "6SXvFoZJMXCoZbzkqgPYLihM72mLfFCnisgVFcTDijS5JUHcXJRi1XttXc9TKyEDqgpFNYgcKcyWueJ6MyqS2WH",
  "key5": "5f8YyAQScPq5gtiNNtoYuNx9NKWMmo6ZuTSwhdDmda3kcKCK6Dh71iX794bpMoktdJ11ujYpAvt2QosrrGg6aygN",
  "key6": "M44MhcM7uhheTHe6hSFmhkxvx5cSV4QnF6Pg4m1ZnCGpmvrtbg8MJh1gxFnxpXinEzD3uSLbXpPQFnTc2zzGm1D",
  "key7": "DqBnAs3QDEiLcDjoVARDKvdon16ujr1HS9jLuxa1JHaE1rTWwrNJQ9Yy2BKG8WwfQ5YRbV1SFiZAX5p24ivQ3DA",
  "key8": "4ih6fcZ13E29SuwCZPuNmUWA6VjRsT2d9kR61e53XRnjm5wGXYZe4dksmqszn3enTsXqtD3iWb1WJ9aHEsfdgwa1",
  "key9": "3K9prLVf6ahu43yvwpz1o5raDEma1m3pEfCdzrtAzoJRGZ1NaEouzndCbVt21qq7s8jVH7nTtZRbySbv9nxi1h2k",
  "key10": "5uFCcewPUqNpQRaqTZ5ZZmV5b52fXiBETTm2QwHuRmXj1DPu9MS9M4q2s3jpoGWS8aDHcWfrdBUMajMZ4WBE1Hod",
  "key11": "55E91gj5R6raox73Gizm4mfY5WjGGUjLQU4JmtYKymL13HrHFGk6WpRw9onCPGULmouVyURXbNsGoPyiXQgX3UZn",
  "key12": "23GeMN6Gm3GkibKVn5xDasKgTevcL3x1zFKmLCYKtQet6Nu5UgRWPhob65pBP8vwkhsk2U2MH3M4dfCwJQPc4yVM",
  "key13": "3q5iKR8HGhfhFDMZzt9TZthgdEVS2E2dFNcnPGC2Bnj9T8rGxtNDAGWbdQ8t5qao6dUv8k8ncXAGq9cbxApnZfmV",
  "key14": "4tGkecTFKWHmZSevEceePDBs1SgCBmqfojVvKuNRdE9JzCuMkhpqwfxcgfZeJPnXXEYMsW1b3TMQZNSHkijuDdQo",
  "key15": "QXShGQ2Bzjs8z5TevcyESs5477WQT7SPfd3eVeSA5EFj2c8nFQTMdUuYVKvze5S1QwUZezEGj7GVaKhox9A24kg",
  "key16": "5iKJdfEKnfRBZ4bYdCC2h3U9J7LaSKEszQ3eis3GVnb4YPhvvCPRTnWmib3xnUXRcVNAcsxPekdXXFLXCnCpJNXX",
  "key17": "5yfMTNj8rFNSaYmA84T3jEyagY55fgwZVNVZCBNM2JFGDLxD73p1WoxSmUK6Nfu6Rdv2fdHdDD7T576N7xM8junC",
  "key18": "5KvKRyWKnya1aEexY2HgAcss6KKCKn487SEogP3iGtwGikv7CH98ZrqhQR4VVDNxW8VigtqCQ5Kkv7dKTUVtsQir",
  "key19": "3wtitocF6DaYrmAWR2q6nAFSpjLtNDLzu49nckWADSSt1GeFzKE8m4MaiYoKd1M2P1ywuYJAwYhpkhzynLvTf9DN",
  "key20": "4Z6RvaFH7gjCjuJtgC9nrvLUMxofztzUrqdi9mVFEd9qHGQyj75u7mWpNU822rFLbVSyTyzWYwCdMtpHAbukdTvu",
  "key21": "Z5aXnVpQjJjHxeraeR7KPftkbhJxebCMWesrnQcyATwARXvM5D1tm3WJiQ8keBKQVSQgvjWH7SksLEL69XtBWsg",
  "key22": "39biGYjviqPYn25EnNvQRhA11xh4bY9UEcv6U72CvEWjpUujwyJU8wtg9uXFTF3Jr7CqCMmA6gbRM7WhW46ahxvM",
  "key23": "5WgfTWgVU2Z1jgAUWA9yyjYTpHLCqjjiEMJYFtt9WaHpDiZA6rKcnvxwSSJggCf8bn9675GEjP5DMaeZ88ZCWt9e",
  "key24": "4c8Ks1onc8TpXhWUiQaaYag7GJyv11qo4ePyCWacVaQuDDKVf9BmEvuhorwFdLG9vGC6krriiuWFMzdimrJvg1dM",
  "key25": "vihF4gsLz7EtGhz81DsazMRrWjzVPzvSkSkGhJqYks1CnKMa4wNqEVqAQ8FGd1Yc35LAmJE8Zd6Ga7oHniE55tk",
  "key26": "3aqTQuNJiMgAA9nmXRFVJrfWsXDAL4C4PcbRYALFkkGXRTGfat4kRE8o6bUUPhVEon4XdfS17D2C58pcHdmtan5S",
  "key27": "3jDRFA4UjWAuNkjCE6xv3vDwAFq4smaTJaDX3SUhQ2Twv4UwDtbDTQYHGRr9cNc2ssgCXDcJHwJSHxGA6hydHvqn",
  "key28": "3UNb3Nr7Jz2jLDKRuUzKDoFiL6f4Gvi4hhEi6ryXi9xDCyPDsWtanrt5KNTMqYpXaMG2iHEJwsNVTYGp8eYRf3ZP",
  "key29": "54jq4E3EwhML2hbudvSipyVcFMf8eBXyxFhEwDGVhLjDYd4gFcnki3Ffb3qs3cMAB9JYv71hHqYH7FSqVErdyw4E",
  "key30": "5avq9SVwazARZPxj4WuZ3rfigm4PgjDEenXw7r6FAyWjaiQtyKbrhQCu5GNDeXoMXQz51dSaBxBZzLhpMUPBTGWo"
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
