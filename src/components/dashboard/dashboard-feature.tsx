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
    "4heNhqdd2nAbAAbZGZKMaQa8AjNfKwo9V25GHP7LG4KBy8tqm5iHzunLRQPUdvPzBXEEPCvGf1n8CKhdB2hxRFh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kwwqtsduGKXp3jRN2BVeNuwgBDL8ec7CgB2nkUp9hBzqkfeoN3qwpvezGmPTRj77fASs5dN9gsL1SjpttXqh9P",
  "key1": "4R3k9jRyomC3mA26yNA3CY1tmuH7au1wGZrXMzjusvDh3JX5yKgYQfze6YTJhbPM7qSxSNgsURZaE7UbHkS3iza",
  "key2": "2Fq7udDQvmMQSSgxjEcPTvu8oHQosxbUQ4FnZpR3FeStySS9ERsGXA1QPDTbGVivSH2A1iwdTgWxPdk16vN1RWvv",
  "key3": "5DF2DWruiaWKFLP16AtnPgHAHpCf23Qk6kqKDfpXFJChpoob3MAPYQFWHHuNPJkKVQFVubNHbEzMC6nCAPL1SyXS",
  "key4": "5t9j2MUFRMFMaFauXti2HqDWeh1y7suzFFgn1hMSB6jj7yh38vfBhXcQ9YCuWt6jDHirHExCozKy5BW4R9uwAw9h",
  "key5": "4pnqZjn96dREV3fiYmUNEbJkKv7CvvxiCYNWFpWdUpTDhmnEy7o5HFdxiufWoGyCKbKh8YWn4wWmnsKEi65uSBR6",
  "key6": "2Ge7oCrmwqesqE7j9Ygw9MHyxu2LN64kDQoRTKxEW2h66W5nv6m7icVgdzDoGUAaYTfVd2xPGATLhWq9v9YeRMj7",
  "key7": "pNg1spsSHjh2kcTHx1AJKVD69ANc2R3sXMamccsSKDRyFrgLTAcUNRDx7bE1HjAAepDhsVKzawYYiZcc2WhWZFJ",
  "key8": "3SBAYbAnAoqinagY8d42jVSRus93SkGuRGDZLh3que4mpQQ5Lcc66mv8M9jSVrnY1UVEEg6aC9mnJeoTikKyGNpF",
  "key9": "423EsvQPE7dShKdvbAYzgZT2H3rZQMGSNTU13pfbHNJeCx1Ak7BkRTp3vDBnGc6PGBYj7BEc1WHhCfmu5FSeRMME",
  "key10": "535JdXmWNFmxKNzXbbnHgUqbh3tewDdP9vb1x5FY2vHz1D2PcrgYcuUoD1KcCMmAFMMzGWKTEqgVkjFJBzp9yQDV",
  "key11": "5MwjT9zQktrhdujfr3UR6Pns7rQX4TtjsvfC1boWswo8NSVpQtKY2uPd9rYbGdYNosziqTyZRxmCazhQvwNuYRMz",
  "key12": "eGR6RZ7pVCNQFz93nAfBNR49tTUQs8uRcZdaPDgD9dqedWm6QTiLRoFkwmL6mVCaadGDLS46bzabhc1BcX4kdoM",
  "key13": "tgZTm3ZuPiG5MvU9V9ipFiFzyz3GcZsoedShhhrnPDxjgL8SLqhYnDQov4pF5G66XMuzZ2UfvwZgPV9fDn5HKf4",
  "key14": "3qZdTPy8SiR8wDzuoZc8yHg5sBoJGfTuBiu1f56Jzwd1rJbxK64BpPowWYLdgeQa7xDtn4Yikc6XFjr5SbcALQZp",
  "key15": "2tQcMwftHka5QzjsmXFJZ5XaSS85TzYn7roRgAW4YtM7k1eMRMK72TywVtsx8MUXcUTB1bfGaemirbDJaQBtNvqD",
  "key16": "2u6BbT7oN17pCoFgEiHt8NDzVc9ksfgMwG9u1Y9PqDchjztTJTk4qAwNkjhZwgWPfAWyfPh9RJ7bayTYfmbyDcE5",
  "key17": "37mhz9qquxZTtCaRqcn38ezkAqeboovEepkPo9S1TJWAaGDk9f9Vf1PDigenu2M9uGyiRRn4AaLgAYbuuFUQakR3",
  "key18": "4WMZvGoZAqcXrpfb2Kvho9UbqrDM8DzDSdN2idgVCuC74fJnLVoKpvBaRART2HKEZqh4ndxvutby7mPhk9pwhHmE",
  "key19": "4y3VzafeF9MaciE1rjKbwWghbqW4z7d4eGUAMFeppKiLVq71gZKh24zchCs42V9K3gfJtcTcaAmmTdmdnvWVpimR",
  "key20": "3t8xK9zNUWeKJAGiyeWeTvq48jbEpSx4Lou8Di9ce1Qvhd2CzwbvHTs4aCdEFvPauH6ZKkdR4ZZNr7VeZjMBomYX",
  "key21": "47m2vaNuLHo11GtsjKwuouXzNXKQbsUxBdPUe7dWBntnN1oR28hejBTfsXY7AiPM9h15L2AHhBZbZ2rrRJEfpuww",
  "key22": "295atvxDJxgkVEwN9KxeTSsEXSU9TzdLeMvUKaWchzRiQoQDEgjs6S5h8dQZ7hAqLxmQFddWzD7Rb3AAo6pf44Tb",
  "key23": "32TNxRjFTkEiJAHtPscLX1yEC74LQBmD9df88rW65xxkh9kCZWTjfi61uNp9XgVvTaXTN1QSdATW3oCQ5XZyHwms",
  "key24": "2ph88q7zwj8osj8U97WjYerwReGxyu7ghPdLq46mNm2gEFUPWYSpFXP1pHQjiwdd6qFDDaSHXvFB7J7uBEPJLme3",
  "key25": "5yBwLunPmNxFEf9d5eonzZ9ztjonZzUhH1gP1gbX2pGKU1ubQoiqF9uNbsibaE3vhCZVv6e6Nnb5vGxbb6ss9sTK",
  "key26": "2Hn8C2CfcMQxvzRdVko5fG6XhUuz4NQGEVjWL4PP4JhrTCyTK8SqhhtJ4nagaWGCtBhvw5BrF3P3LbBgSUjVT3iz",
  "key27": "4BGcDVSX6n9ZdjzcwBLh7MsKxGd1xcbc6AZP3c1vQAjvo1jKb6mwThjNC2u2TkvzkG6P7cnDeqMHqPwicXcr2y9C",
  "key28": "GpEpWU59PUupmv4dBYiyLVqTBV5GceiqJ6THteaVAqNRe2nNHyGBhDKi4RzigkxWADf8PzDZbavmBWcmfe4Ysvv"
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
