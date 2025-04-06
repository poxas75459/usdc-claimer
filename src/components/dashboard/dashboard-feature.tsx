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
    "4dEKGasrTV8ryoRovN7dyw8xUAVd9V3oLFc6vp1YjsqvLc4w9wR4wUMTtQ2MamSLJhW8pzc4xzzBkaZMGiUQa9xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1en8gWehwZoujHZ4RoMYp78N9bovkk7ZbfbigAmtVZYH2WvHQiVPCCCschdwjeR7fAKFm9ToTLjoad1tWv3MBv",
  "key1": "197zCB4f24zAH9R1ws9wCdsKRH98ikCmsZQXyWNK8hMpziH8odEJYNtUZHUmHMvkrDybCF6RySsTBwFeKNAkP1d",
  "key2": "5p3t5gGEA99LieBKfxdgRogxEUCHB9fVJbZkFETcPKY1ADiBo4MEtzprLb5QpN1EU3SYMGQXSVB7dRAgELp813Tw",
  "key3": "2stTF6TJgSJR2azm6DmEHy5e1qEPNBL2CVge7RLTVfauwKnBahDj6DaAhcTU5tYmAcoagrUumKjgRejU2swK9Z4F",
  "key4": "5iDeAZagBxwM8j4fMcsYftH42ZerYxe3gXumVPHMBAkp3Y6xBPZjUSiMUp7zYGYK43wuHjVaPM2SbPLMrFsuCfCP",
  "key5": "3BxqMnePR6RLEQb3NXYkwJBKboDXoMjmqbt5KuBTgJxSsvqySqPV5E6hnecBKBE65zBp8k6d51XqjVWGNAy3oGps",
  "key6": "2jGJH9GoL2GSphNqTB4Rh9wTXJZCC2FzHPSFXc9t2rHa6DTrHaKtxNrzpQbACgd7nAbow5ksPMNedb7Wo17yRyTZ",
  "key7": "5SKanoQVRjEMgFjC2azSoYzqdwuqVdft7RPtoK3X969Z8j5QpmnT9tDvzCEpzZqSo9ov9eVtpUvczojKzRvLkNjJ",
  "key8": "3MYUnmVtteK4H9F25dkD6DBGf4aGYY6iScF3s1yAt6dnEqpGbroHczBWYBS93xKrJJy4iU9ET4Yyjsx9T7NUk8z",
  "key9": "xG7EqgieQw6ePRxPazgWotsyY6pduYQuSZS8LPtHihdFg57VvLARnSsBtnAC256yuf5AZwTGnuGdRHSobuMWQjY",
  "key10": "3PPhCinLfotFrDJCYtp4tmcEjmFUKNEH9vf5PKsY6ZVd3LYEfvDbsD1Mwxbd5K2hpQ6yGhbaAJdBtidJkobZhUEx",
  "key11": "3aCT2ix2sQEtZzBXEAgMNQUqRTfQbXGL532yYGKxGfH32FaNQKJLpSpUDzEKNyLVdKLGiVUX6JZCbZp4pKJQtDJf",
  "key12": "22d6hBVo8mGZAjbk1F4Casy1QjMYpjWbK839k5nifwJ69Ma7L2oVZCmiinnEp1bS2RNTdss8RZfdfzQoH2RFj67f",
  "key13": "mmJUtZH6xS7T5NqpLeMBfrRYs3rnaMsUXHDAJ4JBAmEFzZSup91TrmdrHwtJiCBJngNvs1pXh7MGFye5huLpFhe",
  "key14": "NjDdqHz2TVw3asUJ2wcc73NZD1JB4y3eMreXX542tk8Unou7yy3Af9gxo6W4ptiyVmKrhEAjxPzEhihTc2NmzmN",
  "key15": "5vx6ZUWtAcfPgonmiYt1TfZKY35FyuvMimNVp4amNwpctCsE1nZBP4cfHCiacqdRpZ79oL2BrgcN78ZksLfAc1X8",
  "key16": "35T1dC5JdmckdC7xDWyNbCoHCTwUefPJYiLvjzf9Adw2RepVGFYjhjqGwns5X5t9uNk47R373URKdYrSVYkkCZ25",
  "key17": "3MbvHDspP3Cen1LGpXRu73YW3oJKyEggbeDFDCtPE2NCyTCGArue6jWBkyV5yfyyxsutBVM7jXg5sYUTSADBfDhG",
  "key18": "4nixDv1xdUhxMHpzTQ3SktuqG75XLGcXCjqY5GEsWkD5dkxeUudNKAcJVPLmCz9h9h8GiHzLj1ay3n2rCKMxdsV",
  "key19": "4Wvy9GJi8tpxXBwmxQsNYKisAewxcwF19nCnK9yNHTtXbbPfTbPF5YBmpocReuGfRNxcCWSd4q8bz89Uxf5128DT",
  "key20": "5Bddf9rz14VCTBSUGPnHFNTgzyH4VEgvuTxZncxkybWDsHYnN7kQiy9Z4tSJfJZAz4ZT1Qi3Ey262X4o4QkcmBSJ",
  "key21": "3gZyF5odxWtnNaQG7inJV5GptXQZzpgZUE8CNoqTit7qhryt8Atwwaze2Uaq1wfdT5YkLm2FT3v9n7RcSuYjnGXt",
  "key22": "4SfspiFeCSQogPJ3uEDZ5CkGSiZKYxZmu1tppyfwqtte7mKwPkCirpgsX4yqG6PFDC7ojhKSL11LExgwpubUSyGP",
  "key23": "2GzbbpKQTcL1EeuM3tw6DUeTYN9A5h5XxtmuRTjC1RyJPouH1nfKX59EncX96rgtWkvLsPmWqSx7auyP86R7QCF3",
  "key24": "9DqqZdQFfGEaJLwUf5BC8YEDeytDGDwV6NihSWD3nbHvM6efeu5Df43zAW6xybh4mjgfdsr54v7M5ZA9ookhBpJ",
  "key25": "5ZnvqJ82V7BbqQmEknB47RYKKdVmeTSh8WWJQXRn4fVnMhZ7K4f75WHn1jG3Y5Uy1LTg8Eh55MauG6fAasax7Byk",
  "key26": "3fbDtQ9HVPRovWtngVcU8TLHeBW8DoMhit6FZe475f1FXVQGGmD94Z7GRiRAENkGnCaUKpke7wdAtSPywEu25itG",
  "key27": "24f2wWi41E8RrmV8DkxjWZoZbC7LXEwS94biSdmQfCuiqP1zqXodwAxj99oUY2jg6PUniqR8PRkWCKYh5rCnR76N",
  "key28": "5EVJRHfy7JDmU2ZqxHmH7eq11f6TLW7JyNNke9MNEHwK28VVQU4nY2qf7pkDcseQr3gdY9isCWFnwTqMs4sMC1r7",
  "key29": "5X2LdzBXaV4HvvdKBHZgnSYRxzqXcAtqazc3bDFMbGczwsZoMWCCxzNaVB8qf1Y2GQupwmbMTMd5FPMLrzN6vPhg",
  "key30": "2jBMjcifRze7tMLqKtCVCkb8ofn4uACamCotJffSwFPYFKhxbySKMxVicyEMacKzk5z51niwfeAvYAA3Ffnf9WrQ",
  "key31": "2KmozTDWCECBZ7FxzS3HzHqiY3cw6dLGgRRHrARBmdzLJtjUkKb3Z21xScRC3uC3aRxqZriy44Y5nnUwa9NSV5CB",
  "key32": "4eR4zDtrzWAQEFywgWiBv4YTjhxhB7NZrm2yohadBEtuVMTj9HPZfP82d9TtBs1nBdxg8TgD9ozhcHxYyDFVUGsj",
  "key33": "xN3ZcBGih1oZBvy9pRfVVJ7GVEU32nZUCvwYvrnDpbdp42CQjBuVcx5QwmDR9SxjDjGp6Txyx11m1aL2PHhXeYz",
  "key34": "5oJxr2v82FMr9pwmqAjE4cdSGmk7KUQnScUszw28xHUU89TEVrUo3PprkAfKZsiQ7CUvETMZjQbwf8RnaZUTsWAm",
  "key35": "2FTBUwsWmcu2ui2FeJsSwFsJ2SZrUdTdCwNWK6Dzvx8xDa8AbChTTjvav7VGYvSCJYw9Wk1rh3eSGye7xSLixifk"
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
