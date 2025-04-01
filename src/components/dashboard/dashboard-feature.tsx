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
    "22R6H5Kt944v6u7JeALUahRd2YrzcRoQhERYqsyueX2RRbBwpqP1awHxxYvbTsU2ofpw4dLSuwowLpyxNKo3vdfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BHdDjLPudPTQe2CaWD9CsL3dG1NtUUeoxmMHA8vWb932xTejGJe9YCdJWk9JFv6KFeYjJaALMVxrykRzyfV5yqX",
  "key1": "4bD6Ch88RTcpK8aG1SjCT5TiokVsHupj8eUPB12w8WWDRuF1JrxaCWMhf7iJEcugn8Fvm2znmXGFiY2wUtXBWEME",
  "key2": "3XirnptZhpXJpK7WNUD25zNsMhTzwxvehWAQc8QfF8MmBppcJnJa4fvwsCxuiLQvYDatpCH4zH6Qnpu7Lkg4dSHP",
  "key3": "5vKVScPKrEQ5Pu7AebWAnVXTQWXyuQ3jn9VNwrbwuBrTtEwa4ENQip2x6bWkGFd5qmJFPt5UXLqVbEcuf5ALB4Ee",
  "key4": "4tSAZpvLQ3gQhr8hF5ghvjx9bauE6goC5dERauN7rpGdHVvQp3EtgU9PqipRZ5HusPGUV3qKcb83EN3PZGMdjzjG",
  "key5": "3PAwhM1VHMchnGHMXPs3CzFU9jnCDG8dh4GYL495eLP59ivWMy9rnqyZsavFAHjZSAHD1P55wEpAxzF7MAbWFzBt",
  "key6": "2qwU6rTosJFZjG24mhJCMqZ3fbCBSozLxk9F66EeiXgnrmwV4poFbff3TejZaCMsZdNyEUjyYtxx7ukEJbySbWtR",
  "key7": "3MVQrqN4BfGwarW3uTKzi1KXpqkBnXfJcCWRBKrHWJsQbHgukF4w4QBki218w1GF5dB2ngTe7oV7kCCgUEitTmrm",
  "key8": "kaU26kb4M3AY1fepwfxGnLXGBMgQxAURHyhmQQK53TtLn6LrqjH3Ro32GmpCfQxyEod2adHq2hadWc3JDJWpdzq",
  "key9": "2YQnbjpLkxABm8aA5VLS2DbjU6w8ad3B9gEAMEUQt2GNPTRmeuy5Wy4rDcbJuhfX5abc3cgGAvFguTQQowtn9JZe",
  "key10": "3SKo2h9sMK5HawD7R6LbN2agBv4FKt57eEVxvSYH1UBttHjG1FuTcheTcyz4T9BVPyg6VfKLXgTtGUsyJb6gGsSe",
  "key11": "3WZ2JFfdaRFR2rRJuq1mKnTsBpLPUzyqDBDK8QFiCzkgNyZ8NhcAtScoaLqwPetKrMkp8PLCrkSQGxAmXUfvsVGz",
  "key12": "2gehPQkmAcGNFzznEuZLy82AfiPpyJDJBWBr5zoqA2EVrzbjJXLzrv9xzsT9F2rzQLiSFA7K7mzNQuaP3SHfCSpj",
  "key13": "2eDrtyRDvKcRHdeqAKs9bvpaMDpLMrCZKNhnUn6kL54aryeHURfdzCcbaN5hJb1VNvA3uJH7hj2sLHRoKbAc3EDV",
  "key14": "4VAwukKndES6PKpHBnFBKxdgGdTbUj1YTizgsg696nEjM1Vrsqar44i2vM3RLeimfNjw9BFTDrDVd1dHmHkLM5BF",
  "key15": "3aRya3LR7ziH6dLZ653FzMVkhS1o2ZoCYLPB4YnfWYFWCQg1r6UEFSBGcY8Gjyr6HzPCGjr1h2VxxWijx3t9Lns9",
  "key16": "3v83Jb9xTby4fsCeUYWj5d3hJCmfpXguVuv6NTedza31VgTCRUreJ5LmcSZBSobhSvidRdDbAAYYVvTGqp1y8dSo",
  "key17": "3zRByyyPe8nYWzxwryhJU3WszKPmHUaDZvLL5WRPH7t3vUR6MLYHhiGzn1xcwsVWCrCuAA5JQxkza8vkjsWW4mxf",
  "key18": "3fvKJ8Qk8uE8UL6K7XKxzwvbXwMeJpttVgmuziQkjH7NTDi4VnxK4psMxHpVrrDX9bzWN7Cuznp7z1TeCGMKdsCj",
  "key19": "2aqFpDide3JAodCH1eowptuF5w7HzXUhuqN4cYfGFd3BH7mhDFvjTHnUBitndQ1ibPkuvqReyLXHgyi7w1CdSVcx",
  "key20": "4HURgWxRPsrjLx1QKE6NTVrjvFb1gSdVckXg2QHXX5kGHdPHYEzmQho3w2uKHCCcL7cL1YeXYdjK5vmjJZpEitkH",
  "key21": "5zBNvS5tZ4HWg5gwC36VpbroeU9HUqHoxonAJhdBp8UDZvKxhXrEbWQLfHaT55X9Vj8Rrs2BfMMLEdCwu94jq78k",
  "key22": "5NtPq2Y1BcnjwvhF17YLeL2CFVMDp49V6jY6WNpGd2xQBrbgx9oby83xJDcwhHFzauc2zSGL9MhBpy3dsMumWLdF",
  "key23": "5PiF9X1MKH5JT8cHGjCAaiUJx357yW4123p9nh9Fhc3WZeL9K6iEv8XaHFGbQjEw1hAwSdQxggXxjcnqtCtviMyV",
  "key24": "3EwtGx9dxGsXv3H71JG9T4NGzDdHCMRqA42R8kQ9EWdw1WuV1zoNUWtXqoGcLySk9BG9Ho2MPByrXBMUKizk2Nrm",
  "key25": "3dwQtpAVcrT9TUk3ajrrvazJSSHQCrS2E5mEPj4DbFKEkKWFPmFZUMLsSH9wfn8U8SPsaErwUQvSY4Ca6NHg2zGW",
  "key26": "4KmbvehH4s9QU3fvE3JBNMBwVyuVPeSeTAuZGp1fqQw94RFSvMphmPJm23JM7LXRB2m1hpFknDrgfAPD2TVpLF3F",
  "key27": "66HofhWYDxKJ2Dixhr91uGB8umWwFmPLFVnotdCYuPJYJdmAYb3KbaRRQsfAs1F2YzuCUsNsbunN5B8SVi78r7fm",
  "key28": "2p16VwCtakJYgX97BfEL7kPY6HfwswPTwby8VSGUiF28UNYiVc6T39Roy2WMX69E5AgccLqkJZN2KWnXvPxXYdn8",
  "key29": "48Z2Da3xvLx7AHXnbpd6K2pkMAWgXm5xktpoEpYkPVthv1kwUoaVL4NkYL84xs78kHQwnkYSUC8LfQJ9Q1E8SpLX",
  "key30": "3jtwtJ33GBGD2kgQmTLc1C7u95CDb28BQok5TiuXF64X6BFKd9zvY7s6GCkyDo7jaHwsEdRca5FNSmFDDL2HsUnN",
  "key31": "DgM3HQpzcZv9cfnSZY6BLfCU3DwE75eiLDWVAmZJTx4di5A7ZvLTB3J1aWukMDZtw4HBzo9u7pe6j2Ka2XGUvuW",
  "key32": "368LH5dWMAjT8f4ZNojoS8GwRgwVwUyiwDnoKf3LVk1SWtAp2hJMyDkSokrcReQTv5ScqLzAU4uSHe6BVWNWXBBS",
  "key33": "59XZAfcaTLvin4g9r5iJTapyx278zs1qBqf4yaQorZ8MHEmHAsvZaNmKhcNvDCqoHvvzFxwuLTcawssLzn3DGsrY",
  "key34": "538gJW2BKxcF41ywXNrK9ZKcnqR65VTcVGVW7x6J6CEDkSYxNDpQQ2cryoBN8LbQLy9xAuyn41LeYtVQURQL7QW1",
  "key35": "5PQXEyg5Wm83PLfcM4Db1m2Hd2BU1Gr4ATBqpExYbhAw8Lmea7Wbr3u1roPKtuHBJ4YuK7nPoHumAeuPZi5KbyzZ",
  "key36": "veQVqK9c4cYYbfw4evkMEDvHuhwTPTqsx1JufFguLUCvukUmU4i9ZwFdRJSNiGLNePt6rZQiQFftGUWGQukUd3h",
  "key37": "5pDJZYT61SEkpajFJhMquJiM9b9ud2cD2YNPnXHtV1wk2P8jRwHZhEm9AFyZ5eUg3EgZ5s989tUojbF65LMaQcDQ",
  "key38": "4UWvkBecXKaGWaMQkGXR2ePtnCWxy7kjwKw3j3WdAkESQpPEfvSx65i4HPDFtx9N8vHbidTRaHHgURM6ipxXuHnN",
  "key39": "5jJcABwot3Sh9GDmvyLuL56P8CzrVn3tCYFboxU4gKVypN2brvMefVxtvNDQXykRb97VMdk2fBa34BZ7p21gkW9N",
  "key40": "2c9aVkVLULWTWUDbdCw9XtFwDP8M7HGSdepmMWrHcXt31rRSi6XpwpfuWhC3L3Q1AH1yrop9TzULeAUxBd5sR1bt",
  "key41": "3wD47z8NkmHquSpLKt6VXCthNS2BYAaGzwhJjP2TL21AAktXe9yFe1Wq2UQ295KefcvcXEkLmVzPZbDbQDJTtY66",
  "key42": "2BWcpaJR5jZTwL8k7Z3sRPGRebJMzuucNeoPXKJgUqjznkJ5HfoeX6wwCn9ASUerDa7epoVasRU31HVwzNN1Fxuz",
  "key43": "2CdDDmLyF9cgMV9bKaqaDZy4AptvKyBMRjzFrgiVSsCZLUcNkySL6FU5rcqxk5JZZjemcsHuHwJeqmgEA1aF3MBW",
  "key44": "4mmXe8qUB5bY3Pg7GmB1LiWuwCDdmfbFxAZhs5QYorom7DuhvkdGrJxfP91k9x8nFv3qQyJAec8Jd5J8mhoWGDQN",
  "key45": "2USvMWfCSMkQ35CVYoyiZns8dzmwNfkZLSQihkkwTdYKaTtv9bEiABmT9UVFicfas22WkFPk7tFajBwqoyii28v5",
  "key46": "3kQdyNw1AczaAv8jxsdSj3HLqPvcF4spzqP2ioFLvo496v49Cy3KAvxX41GYy3ym7xinByLj83hXHJ5bQ5qTfzY5",
  "key47": "3pVKtNfosypiMEbVyMbjcSjVYHyUYZa8NP32NJYaNMvhZCXxKXBvoBTZvibotK3LMLsCtvXwGTPzVKqpqCNH3yPf",
  "key48": "4YVBzTJzwt6JG3F24bvZHDmYFCbq3sTub1qSjg33yiHJSRZQTCdQRh9v8KoXZGv9UvjEv9EKai1QHrVDEvHu9wb8",
  "key49": "3CgDaKprtjhhotzUvLBbSa9z9RTnpDmjTUAeL1Epnd4mUF6hG44gwhEkxGMfGMqyDzw5mH739oWvwnUqqCMXMys2"
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
