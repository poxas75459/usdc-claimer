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
    "39Vmfuq6oNbso2gNzKEh2REgSiMvnLHPAgSZRK8avXMSpGWzozBF17ofiwhLJS7Fu6PaMpRoaHLvvEMt2RHxodiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iC7nLDCSkxAX3SXuGKJ7ZrL4ULGCGhcepTtfcHDKbXimbNuqjMbeCKYREbvnK17DAZxs1vAdiDTNf6ziPhGtVBW",
  "key1": "5bLPdAC4bXDKf3YTKeik2mG9RfAZXHnoQ8zNBXwotyzR2xryBLKqbguqVBo6txY9ab3esaNBPrscfTw7RVgdB1A3",
  "key2": "2wBQyp3ZqeD7Arr9LhAxCyyGZdGiBjYWj1Yo7mYceSjygxmU8935RuvvygSaTc3MSboESfshCbPcuYzdDtbXnaAz",
  "key3": "3mB4HkCddK7q25eVMMuss1zqLX5BWvSL34w6djPN6hTf8zpmZNdt8vViFkCRgJJwZpv4QivS64TZgitHs4mf2S83",
  "key4": "2rEpzB4nR14U4ZL8PzdLsavL8EJyDoh8aZLygDQBx2ZCAJykWY6e9vydVmPtGKfvR5SbVCHQP1MabdCU3wYZqbcN",
  "key5": "22YwR5bmAXtDwx1S3E761q9W5bHhg1wdcCaBLmc5TgRWfS16yYv6jLR1VPQxHwcN1pENkjFhPZeRGeuXEG5sayiA",
  "key6": "eB7sg3nAj2N2a8AsUPNWCyZQeNMRGNWDQNqMmViWwz8PtHbeSzREgtiJN6uFfnzw7W72jGMR84d7VLx9Hxe5CkM",
  "key7": "67YHwbc724ZB5jU4M4Uw5kSbtG2S3SkdbodgrWkvL2bS2US2pMbV5NcQkXy8Fk2tuJXynLCvEPMN3jhnr4WXZV8e",
  "key8": "21CHbWop4GuzQasqVSFqDk1is75QamVL2tbhZQbhGZ6RTr84Nfr16CFo5ESgZqhnMM2fBZY796q8XwpgrKQtZ9pU",
  "key9": "2nryBq4n3a3v5eSkVT1gPSgeRYjc7QtafWCDg64LiFuBTwqyQwHgmgoyg4noa2FoWTWR2b9u9SpUnDoRD8pu64DU",
  "key10": "3U3dtGytqGcdwPy8fsR5pTx2QpMJZ5Cj8UcPC2SmXtMP1FTiSm1v8J1s317fiSSJeTQTAJekDqoEahXqtD9FACkf",
  "key11": "66HXSZ3GcjBi5dyqRc3WEEEghc3wT1psMpSwV2sTYGeVRYbS2HvKmzboiHNtDvvgr6Yv3ugm1sYb7SV2JD1U5aMk",
  "key12": "4BG6bp1M8VH1egZawFP5CciRipLaUZGFkbmkuY8ufxh8m12dqV8c6XysrigmLKwwM4AFmqjrQCpPULtGewCpsYQW",
  "key13": "5Ee5jT6KcDY4eg4uMUnMGaFUAvg9sj74LBXzG2HegdFqrmM8gxgNSrETRcNRiLKfK7nwk2x4PGBVX7MxvkkFTXeY",
  "key14": "2nAotivaUfMrucFVGSwHxoWBWKiLwUNHWA7hKdAhLjHpr2tEfGsEE8EKoJ6LWpVoR6mnB69RS35VJvCwKsEAmBui",
  "key15": "5B2zrikAHZGPQzp6BRSbQr8Zt7CEacn69YbeBB7hAv4EH9VLKoiF6BoXuucMPso4r2XvvEkF23p1UfFvDGcHPN46",
  "key16": "3AS3tgrDduiZPshHMWa1ksX77aTngpoMJ4icFeTmBKB6a8kAbgVaoZW2iEek2S22raUdQyvB1vwkjMtb9y9Mcboe",
  "key17": "e6sTw6SbBBdpupe9MU5ShgUQHyawstC74ENhHYMCveH3vzL6oWJ5RYtwv3kRoY9vjFi2gWc17iaHaRMgDBvMGF3",
  "key18": "5KNTpsUTd3YNECu6uCkBg3ozDhYtJAyBGmmt7bQ6WWPHq9NeS8NJfaaT6F6YU7zoene9vv3G51fsRacssLSVj9z3",
  "key19": "44rKF4uAUrdYHnYPCmcc9yq8ohZiN4kvskzMNxxe53fBdkmfjVig8xPp6RPHiCYaxLJzV5SfEZKs9DwK9nwhtV91",
  "key20": "3UfyWRtDd5va5XB3aXJhPHyiac6ViMjR1Ux9cjcT9i4WnxJ9kX5ZFWf3mTkgef7eC8hPmaFawGigzauGgeN4sAA5",
  "key21": "3PiDhCgsWd5DinYyL8g8DY4fek2j4J7QS1sirgAXd1JEZZJJi7q3tFPv9JrAQUj6rYuZJCdbvtbwBDHRpLrrxok4",
  "key22": "33KiRuQ9hqum5Qv3qu5V7KzAY633bdDNAoE4Z6cZNHim6A1FRhEaH26PN7yWvWEupRtMnvLUhUMLZci29gLsZgKH",
  "key23": "z6cZz64r2vjoUs1PhkytcNTfBUSHTqfnrqB3XxJp89G7jZTqM2ws4CVgkX4GQfsNasHVG8t9Nyuq5iVJJdsLW3D",
  "key24": "2ceibLrxaiZBgArD1w2gjPqXgZsiQkuxCbczNr7khLHvy46DcyyaCMYBT9nK6fZjjv8LUWv1MuuhYKnpFE3d1b8y",
  "key25": "4zpeDsJGfTQb7VuDcjNk3pTtjJapqhwoPvMRr8Wio34BVaQbnmkoazyrGxcjRdxMxTUt654wiQSHuULJZZK2b4Hb",
  "key26": "5S2uoJsP4nfGxEMNDmcTjHfq2ymVWK5sFccXhCu3FtYspxjio58JyrMVP9UqqV1ZRAfWCGw4LTY3h5DpvS91sYe9",
  "key27": "4GMqDrA2gxn9Y3LUejRriGcftF7ERV3tjhKvJDJpcwYbbzQ1QwEP1NKTU76MWacrE39PP7sKGL2zYJaBH5w9hWJU",
  "key28": "5Wugt6CvorDGe4VaLeZUDukkSqqfJijzuantesq9Ef1s97ckbzZueFChZzR7KwtQX6a38CDBbBL9NnhgrHYu6hsh",
  "key29": "2QxcMgKbWTpmYLKQbSM1ywVi1m3C4uZtR4G19vWhsc2Q8yy6vP6rf5PqFht4P2RmQqdSM7pTVnbBf6XCNsUgbhDS",
  "key30": "4EC2ZqYJa7hppYQwkXm5susA8HHKdkCzZU4h8yUtshMgjoMvgwMH5g95EZJ5EBf3KTfUVLQsMefTF7utqgGuYfLP",
  "key31": "4iB5qoUg6rAbUu7GBTXUBuL5FPQYio8jMg4doP1zLv363WEngM486gkmdxXr44XAs6Q5hcenGBGTa3xaRES9vYcG",
  "key32": "2XuvWNwGFuc8fPdgRtGnniZSXcDDRYV46uU3ZyXNGhoAbMQiybwYu9RyvyPVEjP5SAVhYojbGeP3pxRLsqopjHW5",
  "key33": "39ChA3XyAFSgRm1VuU3s4SjmPM1SoZnxLfk5v11N5i2MsiU5odUnFsXcqLbUxG1aZPE6Q9j8KqLdpd9dF3NvAnFf",
  "key34": "3bJ4pcm7346UQHxWzLzH8Nsbb8szq2gpf8kKxN6TaVzZfAiYthL14Yt7YkB3QUpeDNC4GbZbKeRGbRMSCckiJr9Q",
  "key35": "4njwaciYr4bTWLXFGa3SL4aYdhk8wL1vjreNAbQmYTdicKw439aCknyccGZhNCgY9ryUkHZWGJ3pg6uUjCJE5tqQ",
  "key36": "MbZTpoSiCMWgF88VaAjgAnPgQXzwnqePwsaxZjgmjhBWvR9wBkJT16yeGp4JyDrVsQeGpwAff5U2twtRPjXAiCk",
  "key37": "CcpKH1e9MTBnoNCJHAdCeY5HZtrPGH4nYgmTFdHHqTVXLwLa1GKq6YbpqooEQh6CNiuX4gwH9e1Ud2SM1Nipz4e",
  "key38": "4LwP4vhDd5fyKtJ2qj6cUhr4MjabHA26s9oK5tyr7qyEhKX62KABGZqkZCp1UkgwnqKS3GvR4KH1QfMszu1XMtGz",
  "key39": "3owuabFHbuCkqqcSpDbuKmq43A74y15rp7b3vY9rmP3dCgPCsQYpbcDnNWFGFgzZwZ2orovghQxiX1gvoSec4S83",
  "key40": "27Zwt9nBZ5VD4j3uDrRtmYvP9JoX4C2FHRg5mN91tqZzRcfTmuLawn9tvvCh2AoAtsn2WpaHaCWkPUMRzKMAatoo",
  "key41": "52nV2uZiXsPgkncAwrDq1f3nDgrntHo7N9xtfZCktWxgWZjA1ZrYitpYkRxvNsoqzqvVwMALbnWV7D45X3hi8pyd",
  "key42": "429KdcppDLHAtfXyPQxvR22dgKJGBKwb7UU5NWfyzUnNsPetG7N96tHXyG8sSZdgApZijFcos8rahPfRGDThCok2",
  "key43": "3TEts476ANYkdaCHqax6HrWMWbQb32H1jkTEK23a7FSTo9sbrAzksRrWf4ZgM7U25nXdbfC4J72VFUSSwbfBqJ5y",
  "key44": "5ADqK6vdwKu5eDikw3pAdvYQU7Q5FEdyza8aRPz5HVyDpFjEFoGVFQ81KoVvxhYemBDo1NQw2g2uRkdE8FRfX2JV",
  "key45": "5KNEEtukCyxqkD39oZqLpfZ9G4jhXfteiaE7b5oNisBhuFgTv2uHq4mvKNtpabQs6fUyR6eyGoHo5BQa1rYT3VfL",
  "key46": "2uP7ZjawzTqAnu76HnN1Z6peDweddSehAgm7qyu3TuJkKwoEmFUMdtEE1oKGZ123RWJeuD7JZxshLZRbG1qHRLq4",
  "key47": "K6obTwTpabWTNVEXsKuP5KM4F7UttuVdNY14DzqbaHDHaPDxSYkdUWtWRJegJhUwbbbB66EX7aeDJAX66FLR7gi",
  "key48": "3pzaXh6KjmGPhr8ubJZ1L8BTTPQVFqZgFbkq4BcP6esQ8GoEsiSzZbyiV3c9X7y8yCaEZrix1PzyhwU8ukH8RCZo"
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
