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
    "5mKWpLvtgKHzmiF9kZYpEzG1PDnBoFUJbYHPhBtwvzNDfCK4oqDUkvEPnZWp8QBbt1RLDRwzneDpLtKin2PQH3bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1XFpCC8woxsJ4wCB4uF3AaxXqPnS47Py4a1916CNgvLKHnKjF9Y2N4ejWanhXEqUx99gS7LVf6BLFFN6krHqUC",
  "key1": "5zPGkDbf8tCLAQBtLhaEC59EVrQYCsVAfpvWS3kzCxN3tfaeH5ZeWXtn3vbe1aSXnEQ3EUEsEasGCSqgeCYruHqs",
  "key2": "37Z7aFC59hpmkr592FY4JmiPSWV7H79yegSm6tQxa8XyGJom4wFVVEjNhFKmKTstToWFApQPUgQn3Gh5AbzSmKZm",
  "key3": "3vn72ZaMb2ppkQwVyeYLAYGWSECVBy1mZrfm5kAJJd6p6EEkaj8tGm7UqwvXFK3eahaSWHP6ZovfnYzXXKieTjsr",
  "key4": "xETMg1daDPXh42fH6DHr7zNdymV2giefEZuRrP8bSCa3EnpGS3oTUbDwP62iHLWnDnSEqgAcn1KCK5zqPiHDk1X",
  "key5": "2MFDXUXpXRWGY9Tazw3wuxyjt9t9aT6nQGXuvv3UH2FdL9REum17brj3p798u8xeeoBq4DygfvioB2wmHhUNdoTX",
  "key6": "27kWbG6V8mYDbPyGSF3TFN6U8GSbwhLf9r41ytSHDxgx9SDJqabJuU1c237rR5A8C7F7Woi8V4MgDK22AxWQ8Vvv",
  "key7": "4bmLpUnKQjN8RLV4HmvSpEBT75m9nvhn4ZpKkP5xpQsL8NJx32J5mHYMBitYyhWiCX1LCLwm9H2rLssrA5AijzuR",
  "key8": "3iRGggNy3fWAaF38Fui8HNKTjBRTCydFsTYTQvMRFeZXPMiDXZKi8fxoASNTAPsCig4L2HK8hCdir5hvcuxNioAx",
  "key9": "2vBNeuWxvGqTwe2XdgMvYqTYbakaU7h2Wha1KrWYL64WrChUcb145iXGqyJazozW5KAC4w1uTP1sTpiLnb1FGByi",
  "key10": "44C2S4RoobQyBiwZodojtVdAMxLLd1AjZmFdYhvNMDgUjnK91DMSmUNoESrhM3abrewZ2zmRQpJdnUz9QChgkDAr",
  "key11": "iQ6wmp3YMcX5s151ji4T5JTa23WH2tcpidWpAh2d761hLuN6tRnCVigQyrNiEoMfdxAM8F6VPGJnGaNuqA1YN9o",
  "key12": "44svdviBQiAb2tZLXsHzsEeKEF2bVPMi4tEqMfRkPXgrurgJ1mSynJQKbhVVMQ1ATQ9xS7ey4BfwZPHYFLkTWx85",
  "key13": "5LABdaWgh5cVJk5Uu21ZHHdEXvdAemiKur3v6ReSYGptoL9WBZAoiqP5usyHScbkAUrXcmrae8rQZwc2b869EkXE",
  "key14": "219swT3csXhenRfAYJcUc1p4PPHarBZgG8PJ4M8A7FhqpvmSMs1iRzUvCRntNx2WtPX3WvvTY3dsiW1r4Wr7fTVJ",
  "key15": "5EExazjr2uBdWBAp4wC4wxYZWcBThGPVTyYFwWtffdwjVX4TmGRmk3dt25vaBXpoKsRD6siabioLwatq9CiMLNiP",
  "key16": "4u5xQVzUE77zJQc3vihqFUrjgAp7hU524rTZg1P9YkkH9aKUUi6hxBki4YQzUC8Jv2g8NjqLVhDgx5mkNHGZQ1MM",
  "key17": "62s9X1HGBnF3XxqX9F5QcYbx6HUjoQ7XoKArMyQATAmaockVX2saR6hT37KT9RTK4v4Nib8MnvUB8j5kVHGTvgYx",
  "key18": "3GbwouhnzDCds8LDvraFbTa3iToH2JKJUGy4fpA1U9ZzmxsXbbGGSZR5Dx4K88C8nhkQdM5vPkVGFZFjqyHpzj3G",
  "key19": "4TNAMXsujYuWpMrWMPo57AfEWBFe31Gq6ttkQbBbdjCHVVqjsponD98fRyRCWzEVgLYUNA3bN1Dpt6czh7BGntUh",
  "key20": "yqitQRLxKNQkxLtVHJpqf9gySuibE5C6EtSah11NzMYsBQGz24xBErnKM7RTGtnyq7StEGStT14w8hb3JxobPBX",
  "key21": "5V7kzpTPFkUobAoJCs1daFGzJPbX81RPriSvYhCsu4xoJvwLb7oFBuHHwj5a29cC3JjQZGo4BR3q8WiVTKKz8W7N",
  "key22": "5GceYAgvP8hDvLUgv7jEBqShAiHTkNW83StY8zwJnwHkRc53CZQXNMJZ7FVTM85oX8TbLse7dmAZ6dLE7vgrpn9S",
  "key23": "2tRRLFagi5juy52XSEzSb138hDXNiSvS1bpimEAbiEBARgsRVAgeKvPZ1hCacW55sXNnMuUpmsKwYSauoGBS5Zf9",
  "key24": "yuSstu5nFpiFgxsABrGvk5GnpdgXkJ5sVfAPggbvzacw1c5aH71Qi2sbBzH2BNF6gupqjbFCMzNWknsFrbStE8A",
  "key25": "2fgPmRwDgLnFpGHp3VNPF7z9cv4sS8WExFH65CbprLfstR4BoQ6HS31TmjnAeqTLWgtvFrNh4mGJ1ehE77kbWAmm",
  "key26": "3jsDKDoksvnKuqXLA3ExiXe6Si46caS8QUppbJLgPHL21duaNevcwc9FYikrt9WXTSoti8EjuC33VciZdGPE5EyL",
  "key27": "3e98r9L5i8zLuCTegGkuwzw4yN5S7CBv6K5GT5siMe6hEaRKoeNvzq3XSqik175FsQztREfGQLz2B2PaoaMjDBVX",
  "key28": "3jdmcjXtQZ7kpBdew5RdP3i1NdSRg4AXjDzrYjeS4XH9dLYtudJ8ftoxqQNdqCZWUPCjJSpvWdz3q1t6S2pbJ4x",
  "key29": "2S94BUXqHGSvdrBKWEeDDZ5S6TuRaTtkViDsVsHazc6DELcwhHDJxWTcbZejwcmq4FFkhepiX9TkBWFahELDe9oD",
  "key30": "3KVjMLesetSVYqTeU6bCZxWSbD5f8GxYAkrmo2VVPRPeiyQNmRJPkN9cHq6BDrgTjmChJoUpqJu32moaMVAJpRKd",
  "key31": "3x3qbuumackbVyVgJ76Lc7nftmrjZgf1HvE8hgJg6Dt9L2MuejMYKHHcAoc5VCfpCiSp26gtZXVFSMVcJ9amzfcW",
  "key32": "54B8uB1hnFjeDKfstHvw6zBkFu8gs6twiupxCtBuCkpuowBCMMST1n5ZRKQ2pDS3u7FZaFVfo64HQn7GaTac3W6H",
  "key33": "2gTHpQSyXmRhbmcmLAhcWkRLuqTwyJbfUk12Fu9TyDAoK5RztHMbNriPcaZUEZb5b5Fy8hfGHZ1aECFNXWC457hY",
  "key34": "4mA4GCzjqBAxmmdV7BsnsUZNn3GjL5h3oZUQLMhKsyJTddT1AmqBhCAoXtD52ERnAsUZrrEwMQK9TBkmj4FKWLG2",
  "key35": "2jwBhPR5WbEHSBvwq7EMTronyLfCZ548HqCSB6BavBPysEs9gNVWy7q5qujcKXnMrS1cACaATDZi56FDZUmMRp3M",
  "key36": "hzZBGFcdkVtBqHnz8fRPdeH3PiTuu4o68PXHX4JxhzuSDSEmqCxjJCzHThkd3k7aeH6nRfCACabtLGv6FA8Hs51",
  "key37": "2XsbwD5bTXnmiBFHoYZViG5mfnpWKPmLFCtQz1iGzogkBW8mR6YdPiKFGgK1xWCPVgvt7jRYu23VMmRQxyd82FjH",
  "key38": "58VcWqwT6gw7At6xiUr8HaGXNQqcU8eyZ3NioH8Fk9n88MkbF4qTpGMo5wUXuhQH5kNYtVvQkVunhn7kFdmSvJg1",
  "key39": "5fD4dTpmBzp4vRjyALPZ7mfHUcvLbF1PyPGvG47kEDTzzF6a4dueNmGXZ2PQNdnjxXAWAQ2w7xLdoKFbfRjaTnGn"
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
