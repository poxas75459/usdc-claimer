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
    "d7pfcxVMMhicdof63dYunxXDsq6eGie37KkKgHT5wKYf5uwd6TZfHs3piegUAYujcpuXJAei3hyYXxWEAM6eaAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipmGvm7a3bN97UcTCB58gq1qzg1gHQY3SQ9JKzaaEavXhBMi8ht2oMDFXRQZoQnVPxf8kygTc5Yho3jum6NkwvW",
  "key1": "WVw5yKt49fxKnHovsw2uPH8wCrUPNpKjupnDoLEvEGeYzdBNnMUqerX9FohGAKiVsBYHXffH4mGMou6H4Q34ent",
  "key2": "4Us9GoaVBh6JYrNbd6QHWEiLqjPcgdUsmBLREB43TUkEWm3RymSD5XzXgEtxw4Xc5h5kGDswQJkK75HgmeDdwuib",
  "key3": "5k24xvG1H9bwpXNSeFW1ataZNk6C7vU7kQ5zQvfRHh5rTTT8b4yv1Q7M3pMkYZ4X1rBPvzYDmZDXJLvimJDt3okm",
  "key4": "3Cmsi76Hctsa9qpK4yBgosVhjCYata257TVPgUuFgsUspm1Ze29trxBqoeygDSAri3WdcN4cNZXnBEomPGgCkj1r",
  "key5": "3uiobsH65tdBgVgVgRHfbcswwLXm4H7oX1CUXNvHPfyeU8NzgHbakbx29dK6JtVctxmjZQX6TokfBmyMPPHhhfVk",
  "key6": "4EyWRFTVqSCQQi5eLhZQAv5nWEasj6Yq8xEuT76GjSPkanLfkTii5X8rc4DJAWUMHSN2j8V1TR9Dj3vKAVNFoXPv",
  "key7": "5uq93qJBucvgSyzGyyttN2gLiNPbGCDMiaEYi8XanA8xWvvLj8Vt5KL6CHcguRCgyBZG3bLzazKSyPhxhxP9s88K",
  "key8": "41tGQRJseELxHWF2DCPVp13Wd5LQ9pfG7BQXcvR6D9qG5wsYC1znApb2oFWv2mmimzaELGP6CrBxq4wwsKWMk4TF",
  "key9": "28H8xRsFimLZVVowK55wH12mUoKjhPXQGNfwM5AnRHCbG3GoW3aLXHaCAhiLfWgEt3mXm3tVaZFY2ZLVQW6AueJm",
  "key10": "26bF6yo6nKw8jPAPVX34hUtoLnY3oxPdEoUqHZqKPvYaYWUTcaeFtTFFmzJRz93Evh15cdTBQpfHn77AMW7Z1H4o",
  "key11": "ZCB18sNrmRB2uRLCGhb9zJayBj8Ur2Kqw3fXSwgc5Yu7NEhgJkcws1SSsUV2n7XYbPbYE6oJi3WRHPn5hWp3KvP",
  "key12": "ckBNKkPzdzqxUrc56FhgKPDrxmxnRVizX2yYS36k2B1c1LQxQRxGT8ZdxTjAwD5c88FYP2CzGXj4CnH5SN7eoRY",
  "key13": "4LTPCieYe2njsfAiNbDgabwCAjNbaeQngZx2KXJs2SAnvoT1HqX27qgNBSNehMEgZQJDHrKgcZrztWCJ6fGrrBWE",
  "key14": "2CxtHr211p15qJ6G1LqueUSgiifRJtQuY2AusVbJGvFhMEm8e92X9wET55Fyp6R2femV1mThC7YTAGDfAqmBPwUE",
  "key15": "4sGmZkkp5SzoyrDa4AyhnC8s1PZEtQ4LqzcQn8M9aXapP3ME5yvujzaCFhTaeezaQ9ewk3K7pgGBWoYNiRKcFJuV",
  "key16": "5BDDx5ugh2hwQ6FFEBYzFiNKFY9xdFbUHjK8mnh193nepv23pB9uXVPPhkKpLoFS4EimrFgUFeyeuT38AUxJWseo",
  "key17": "V9o61VDcfE5LACENQZ171FrpX5DnehhDu5TZvRZG4AqwgZ2pqpEMudPLKMaF15q4T9M7M8QNgx4xmFRraEkdeYk",
  "key18": "37BVgs8qUcQAS8ojfuMTmSGRYCDs5URoJW9br45hyK5F912kaYKFteUkchhZomEcVNaMGVejRn7JTDBKjfRvN7jJ",
  "key19": "5ChFwpaytqY9VBTHZ6JU3BPRuGeyp1W5JpeGrcZQat2RZCcJccH5aYXgaQXQif7bG5TbwWbYutji5nz2pTDW9VdB",
  "key20": "51UpQE64zp27AnkV3bf8AsQ7TDhBRk3t7pU6FL86VHQ2JRSWBj2x8kQo9DLYohrEGKPBZfdGPCkyWUwZ4PCk5VoU",
  "key21": "395k7C1gUubJaAWqJb7HAg4Wc8briRiQf8n56yKABKweJG8nwJGWfAUMz72YroNFYLwynT8tkuvG463z43ehNTFR",
  "key22": "4of7QsbDtVfZBo65RPUJ58XcobxKwWxk7kFrgNK55RWLNsxvV4qTRYZ7rogethNejjPpbjyP1Ljmw2xYwBQC7wFk",
  "key23": "37QVkDKYFQVQ2HzH8gL2KC44ujrvuq8bTchGYyvibj1eoyCFuLq9qpYiCgogpJpuhfFBqP35zhUBTRVJfZbYgUdY",
  "key24": "2a4v5pBuLrdJ4ooQbEvDhvY5bpdVuyR29LzCWrb32DHHF45RFwn6cEiYEUaeoSz6dppW43u7brjUQR53R9u71Uut",
  "key25": "x49q55XMjfPGeziyr3NGBxqpiTJ2Zd5z9KNHZEedqMJfPguy8tMmBhCSVe5ARETYa6v3wkc6ons75Samg4E57gT",
  "key26": "1EXhKb253oHayNvhpsrH3ovpEbKp9D81L33W8v12STAsTgSZjSqwTC6RcC31RyxZ7tGf5fqxVs8WTaF7afdn5rU",
  "key27": "4H8AkuLjh2gUJ3wPBZbPJdXSuNxSX1u8k4hFoGVF8GEt4aEeDQq9pqje1AtmiixMStQJ9CDjb68NsWzphPTXXbLq"
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
