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
    "4drZE4aBCPLEdkQdtEy5cPt6Tyga58YT2sFXcXmyb2YCo4P53eBMN9xR1iJxqSje5hi9TxiaqZe9HW2AD64naPBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZ8g1wR2LW9iF767ADKnEQDGdGQw21KAvtTRJ2avxH6eGt8mw35bgJBF9pyM9rePfAkwGv6cLEEJiXNat6LzYdS",
  "key1": "kQMfhgChDhwP8nbJ7GALNY1pKk4NBmiKUmq386THvYvccLiXa3ZkttTQkmjXxRYP3c87XnusGXCESDLPaj28jjf",
  "key2": "4r4fvWbNxDijGCy8cocXH24tyPPT3tNALWH7pzFz8g3c61Yy8QWzN9NVHS5Bgfh6pXciirBViMXdTShakmyvLkce",
  "key3": "2TgpeAtfXQap8G2NuZ7cAMnCHzS81e6ACc6zd6ZtZYNhNYx3KDTz3ZBi8MEw2Vy4eD2MgtmD8Y5MiWTZzHc6Q1SL",
  "key4": "5z3f937PW1PXMxkyem5rcNoeG22c2WfBB75WweiMGzH7TKMSTjess78Mtt8bS2KA18D6JqwecroA6457GK7xjta",
  "key5": "2CwY7FykrhPRvfSHVS6E1CnHhdf596HAe9GXFui76H79F4BMtcRLEuoRurejTa1oWCMmGniDLJ1se6Moah35mvGH",
  "key6": "58QvDfvpvKyqfa8wSCCfFR24JDh7JYGN3ayAqaCSERs15Z9To6hzizfGUzeV15MyxuMD4UcwxrKCQiHbDvQagESV",
  "key7": "4vdkMUNxJeTgFFQEmoDH8X1gFnmE4R3bTJdUe4N4gH3LGNHdTFPKxt8Jquqo7iHysdR4DwCheio6p8vge14KroY",
  "key8": "3qZUxnenCzk3PN7UvFCiJuyNqx5ievP4o4QciwsyhgfynsF8RXfZTuxwY1RSEVcMPsiFZK9Gp6mMP38xF2pTArfS",
  "key9": "5ABP8XwYgaVSafpv7UUXbJh5y3TGrqLHPAcDiztNHg8MENZ2TGD8C2nJfLtQg5Dm6YggCwYqbnEqjNRW9tGLXDn5",
  "key10": "CTBRgzS6wEQtVBG5n4uB9aebvUTjBnscWeuwEzBGm1qQjs9sP4FwWyuz83m7SYmdp3iPeeL6mG3cXMgbao2tksP",
  "key11": "4Y5sz3fzjJbTs5BfXxF39NKT6CY8ShDmzydvt9JoEKaFEFQDCnxGKbRmnJ3pnGFv9wpkZfe3oPwuiVBb9kZxRrJ6",
  "key12": "4im82ywnZtYaJr5b8QcKjEZSkkXQ4KLxq1MWwRrTcamF4wMzJgDvoe9iNhqKNtE2kfhFnGJ51GvqDJ3NzDVo4GM4",
  "key13": "5NxKcYf8UFzgDcvFAvtGnmqhwYvapPgQHu5zqYSvPcd92LQAebeJu66fqLU5nJd6FACBqQ2e9VuvV8zsonDkzStG",
  "key14": "3VqNbhZMXDCzAMJB53G8VPvkeZ9TjLp1GncYyJBWtVxiqwVRQY8C8ubfnr2FCLd752YJSianZG5SpkSoipWZBWZn",
  "key15": "5tZ137Euipnr39SFr73UNfRisyULfigPf95xZej97SKP2gwrKSZHLa89W2WzrQmnSVWAVceaa5JVFWKVqB7RMg3M",
  "key16": "B84RiXJPYKc7ngBV1nY4TXjgLMe7teJg9kuVm4j295U4WSzNwNmb6eHGhhi2cMFh8iVrERJn5X62gPWg3a92eYj",
  "key17": "3sw7JuK3EDuz1cD8Ptgu2jPDD8bLsBeUKVFcXfJWarnRnhbvcKCUCusiMHomvRBo6Mwo1Dn97z8dFUiVLg7KvP4F",
  "key18": "2TK46W1q5k2jEsbrrusPh41S9FyfvDz4U58kDiGB6CLi1ECFBdaQmhBcWikaDwXKPXnvA7yTuyoaEUVej9ui9YJe",
  "key19": "2FWaekYCvy8xqrspjmNCss6jteJF8vH4zoDujM85kfFcGSXkXQMQzTvka4hbDXiAUCEKnc1zNXSUdLs8v5CsPzt",
  "key20": "2Rd9VXwepsjkqwDJ5DkCjEJuEeCRKJHXbN7YCCg8kEdHea6vJzhwW9Ys2JAWijXSNkbK1J7UwKQjBNFqNndDaU76",
  "key21": "LBcEAjW39hZ2cdUGfX56GYaHMgqZi9YgDamN9NTLQsLFPd6cE951NMNLBfMH8FSUg1FGeC2BrKDkCpRae47HpAr",
  "key22": "5W6AvTTP6u27TFgUf3mG4hGSGjupLkUjKdTBBUCQ96CwHGgk9Gd4At9qmg9f2G26RHS5i1JaXdzbo3yXgWpgmZRa",
  "key23": "4o1mcPfWj7Xz1F6d5mhA7WQgVBHdtvSoMSBKeS1LmmUfrPf4ZULrp3vDe5i1rmvZ9tHnsYgGMTEeihTmZga9yj1m",
  "key24": "42RnaLfNXzDXno4WgwCcxFQEryNcdqXGjT67EP7uBeBadv6hfgnE2VczBFWNLLRqFYpjyJPGstZf2K9d6dR1kub7",
  "key25": "38WJu3MTsCDknjuF2ovAyKpczvAECQQEmqdYBJgpbfbGpju7V9kxWSNDALDjFAPc9bNB9JT2Cpp86CFfuqoUjaik",
  "key26": "4kQqVvvbZhotFsTdUzc4LwDNJa23G8BcWX7kD1BdhdhwJ7gzuqxLybqxt7ehG5Ghb7bqRNQ9Qi8BTWYuCqyRfwPU",
  "key27": "5jEVcRSicNiXajb3ygMV8wbLszsrhV19XAGncnQCLfSFzpUUFf4Avnw4LZK2EEq9XRkQ8fgB7BSQCiorxoRQ9sds",
  "key28": "5duBhFo7dn9smt35Sou1ufuUrYKmNEenrRe8WYchmRg6pB38NQAfsB3i8d5YEYhioVtbbmRwKVFqJaeDrWrBRdRc",
  "key29": "cvitJn87Xb2rvccXrC1GfUHKNxG6Uedgg7RSiX8f9AYmzBPEW6CdnVu9HCSP4nKsypeapeEp9oHoVaj74RR7JAs",
  "key30": "TePw1BsYPrAqLbi8yV8hZHJw5WpWJU3jS25U1hadcdhq7qSHS5EyXRvNynmYjZJsD36u3jvsXKkrHEHF3usdYYn",
  "key31": "MigbmVbUkyuruecq496GnBKiZC9b26DzvPJN4W7DXiMKQsNWUf9MceFCZkn9P699QREqs6at6NmYQR8JwhYFtzq"
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
