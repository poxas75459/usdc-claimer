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
    "48vN1zRQa4LpJAmAKYcNYBYbQM3C6bqr1KAM6uhzcESfcEPNavQse2fpSZnKd6ukQTWST3HVvDrV7M3nLG27kkDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tseu9WySYKJLRcRP2BHZnNmjgCY24p8558aKH3eZymWtbSUbALpgK7xxjpa5hkcGEC2Bj1FrAeR4koN5g5CTajE",
  "key1": "4p8Y1guZPHcUL3W2UqZoxWbHzA9ts3qEkC9XFJKEvaJrkNWmwYFbewz4X8DSUcb2jjTtCyjRVXa9VgsBGLQbvGDJ",
  "key2": "ABs338ouirU6eMmLSmkzhiEq4qdwWMJaU5oSD1a7A1gotRqA6sEGTggzo1iDfFhcW41mWaEPLvg8xSthQ58iLcY",
  "key3": "3PjqPeb6PV6tLboyUUR82Zar4uKcufXkCaManjSZTxtUAMufkVSgWQZZJZV5jrZJqH4FaYEnm9BR9MtEpJdJ8EgG",
  "key4": "3qV12Du7VwR7H1yU7b9P3ufoEAbrsBC88VGNCyBPx6KEg22SmtYXGSstNo8RFbct23kzxZ3jscy7PviYdDAscwD4",
  "key5": "wp9MLKEuod7wCwgtfACJ9iGLprabLf2t9BqQpxKgE7XmX5gTzd8Ans78TcBm2VTxzLGA4pAoiLkXGjSB3UAaX2X",
  "key6": "PqgJ3T9F2F2mFX4YPK9axVkb46TBjrPbAr7XaUXZTgC3BSYtRAFMJXeLVB3LDB44pV5JychAsLp1UGEMtFVyFFM",
  "key7": "4cCKhvSyXt9dM3Ce6dM74QfJiMPrnyCgfamJGVtry8CzoY9itrdDJTr5kCgFQ5XV4223eawGdDxCdQPpKMXo47S3",
  "key8": "3ajmGGEYY2zQGejfTqRtrjCdqZc3gpexaWjoYYzMvPm3Ag1vXXbAfRmBq1FTN9j7GfHvDZW9sotombyHQ97ui4dP",
  "key9": "33mgxe3wTbKeS1EtXVqHZ28AgCeuq4SLVJFRBF2zqNRynZvaaVDRacp8n8RDtWLw3bM8HiAa97CmHJ43ucBG9gB3",
  "key10": "c6JVgiU8VHpF3dAffczTJFYntTTVU5cZnB2WwWKA9sdJsTe9L9hZ1XfeVxFgxjawiBkxSQsQcZ2JMLn72B9cf9Y",
  "key11": "WYpLFHT6c4DqmBbjmmwjMarfuM7SnVQMCs5YgTMTA4hRJXH32Trowds27mZombuiw9agikVYQ1bM6UrnfhVcZV3",
  "key12": "4pofHhhrfYS24Kn6WYZvcgew6okHwjoSB2aSGLswPTdEDB6RuCqLURd89XN9QPJSRPThU2AcHa3FP2KAzGjb4vEb",
  "key13": "B43ufApHTEkmgGbMdPEzvoJGFaue9Ta8ScnorVAkrgT2av63z5fnK9w29ZPLwbaZ7ZxPsS6ax9yzjoNqfEMLQbE",
  "key14": "3rav8p98KQkYDBpFwdxc7F9jjfPoA4v9Zv2g49iR6nKocRAk8ZyUwe6XxKzHCMpererFD6F6vr3HoJg5V8533gYC",
  "key15": "gDGSCZGnjjMKV4PyokUd8ZNxJYt2rg6SvMk2BXWK3dn5kXvZyhtGveT52CVg1r1t4wXaeycoFbhBW5XiH7Hgd3F",
  "key16": "2A1P3VZkaEfLK8gZCzUHFXhbyP2C6CA1rkjDTHG6Vncu5e8ZNWYsGWVZAhWaY4Dwkx8oasQqHztSm2uHVhRPcxZT",
  "key17": "wYEQWiyvxmjCVGD4Bcyj7eugpBF7K1UN3fUp6cRa9Lh9L1ZyewUZZnxc1khp3ra7rdW2t1u7W95fbbLqf4JjPzZ",
  "key18": "34NCoGNqxYnEzVfxWpdEXjtNBaYXDMCLbUMKFXTJtit82VZxt3HUGr176x8XNX77pDi5QABu6CmoeZMwkmeSLzao",
  "key19": "5Rs1znDbYCn5phowmnfdbfkovHpw5e7wdHEc2Yi6ZphZsPVpUVsi9wqWEGPheq8H5JEXo4DGwxLHFTgk4TPfmxzf",
  "key20": "T2ZMLZgXfZw6eDmHfT5HiNhPiaqsqFurxJsr1qH6TEynuwh9LmZUL2Q9kGixcumqQnuHCJwktJQQP7sefCr97Q3",
  "key21": "eD3tTux6brwMN8uiExNAPC9HdgZw7kmjzG4ZTT15tJjaDqZWMdAGLukRTbozBeQeruW7vrX7aCAxgnY7bM6nWFi",
  "key22": "fa7e8gaJDEWxZEsfMnaTvsNN4aNzMZNDiLvYhAtrrZdnocKEsuimw79nFWprJkePzkE9UMtxodDdaTieGoDH6y2",
  "key23": "2zuTfZ1VGL8TTjLGkTDo663ZpgYg5c966QTT3EukdBxH3XJWk2yRzHm4Nzc5zWTvKkfTDas2bGXkzKHJZXnQgF38",
  "key24": "25FCWSheSCMiJxbgDKvAbu9kjPshetredcSz3K6jamLZd6YraW2qKvyakoJJCsGh1nqwPbZ8LaUo5poiiKM6poja",
  "key25": "2WhRBYqWntrGPwmTjG542m5jbXHjBFag7jbQF7RiBP49woGbv7zrbtnpX8m7LZsVNeq6664PPiDJiJtScjZHRt8c",
  "key26": "2DcSzAoHRrRwTTVREaBDH28eHPtnpaWvDFW4CP9JDUZhy7cX2pwMqwMH1X4jaQw1e7METxmvEC5a5XFV1MYEhm7o",
  "key27": "2BdB7fFJSWUsnJ6BpYfZNs2UEWFFHhkWEahhBsj7AQtFr6SysmPBmasc8du4ZoTeG4JkEeW6gM5uzZZeLVRLtt27",
  "key28": "54r5Q9sytY7sx8igRc37KozGB8vfnYeFUDtRZ8AsR8zxfKorUs3W8EXfGouJWahsXGigVsgmnu5FN3c2zyG72Tj3"
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
