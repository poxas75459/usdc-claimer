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
    "45PNThVkfxUcCgFCgswP2Mn6ypGkMGKACt5DsaUU7NG7MEZLE1iMAyWrwovihHxqSRbVpn2iQrV4zpmvspCxzais"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igPopoNBfGu4n4CMNQYDhxei4QvmdEBeZBSP4xmgMeRD8CVfNjZzv83ofvVUgtGq5Nn9hze6CvAi7uG7dPzrcZK",
  "key1": "4JfM4X1ue6NEXDZxiW4WhdMSkr4mSE1XqHAkG5gFBKNXCR5AArKtB1YU7dKkMMnaKbKEz4rZJ4QPQvJjjfUtfxGU",
  "key2": "5AbrcHiMEJkH1rv7P2HCDaBHHv4fNgy7DzYpAe66kGkEES6QbHbTDSqbMs1iLWkuSfTDioCS1sdrkYPhfqFDmnj5",
  "key3": "vv54D5oxR2Kus9fZ4gDcw6kzXPd11sj5UDps5Gb8wwwW2ize7FfJEPktgChYoBpGtUbC8Jep3BNG6RLSQgS4FB9",
  "key4": "121FEeEi7KrpWob91cpxUUqSp8jH6YErqMdA6qwm4TgQUj5kPuQiMWWDVPyyeYv52vX3E4XW8tvwnRFomGmhWXh7",
  "key5": "5BWaVbcFdYsZahQ81irXD9nL1ygobo9NrsM2871SdVU72754NnMu2mVLo7X5ghpn71XtH7WPXJwcF36vXLWHByJp",
  "key6": "3ZnVACBsUvi2WF5DaK4fB3etWQpVugVo7S9GHEFqzXzrqF5Dd8LXTqU3aBRwRvr9oS6LDncoEFrnxGJC7bUKA8Bs",
  "key7": "3CRTpDDo4SHabZh3vbTh9cs73r4Cm8psiLcVbBXNKdZTQCQB9jwDpeqFT8ALjgtjHS9H7Fp6jbnKB1uVQbVeFJ15",
  "key8": "3vMgxWZUM1jSREwyb561KimB2iBYimjfMHKwzsxFfJ5FnGqpNNPiBaDnk9RFQ2UU34G5YyJdieZ5Q2Lrd9xTDTJN",
  "key9": "33QSZQ3rQmpPs7hJGQby5KvKmQA8cfzjcH9HNFxgQtqmYdfDR57tKDPy9j4aSgd8R46fF9PjF6wpdfK5JSkUA7Fr",
  "key10": "LxjtJX4iKE36RNVDeTYZTS4GjVDBQQSjz7ZAPFGCcaj4R9kUbNqFpxtW8ZBur33eNFQ2BciZbAJDicir8hnRUMD",
  "key11": "2QyUn6PwZyNor9ogd2snQoh4r14TctJgENoCVYQfTnhuCuvgewSz1KSKp15c3wPs7FkFQVkJTHfpva31zDWWTEa1",
  "key12": "3gLovjFxh2jJnrAde7BsJkoASTvNKBpETaPWxsaLB698a7z6qWSLbkpd3YHeWj42NFDKPWELseFjXh4enKBJ3MwL",
  "key13": "5jQ4GS8odAvRv4eXtH8n4pNnMiXqQDbERPpXcnnGDZQzdKWc5t3qxVnWkPLwK3jf1HxfscRc9qKPSukhTjBLVjT2",
  "key14": "4oGFFn6hCmXSAsDk3J8jqK594u6mPoFmzcebDa6auKEohRj4MVfznwQgjhuNrsEaERMzL9NQxzVGPwWsN21sxA4y",
  "key15": "5as33EDqiSaenqUBqDs4s4TKYf8wEuyYzjtTQBQbmJAwkDWthV6zUaetUpN3yZctpiKd2uNJSS1vEomK8S4m1pmE",
  "key16": "5r2fJFrpPYv9zu4ER2BQcKGgYocUiTUhytK1677mianw1jmFHw4QTrsBcNbLuCAVxKhqKnL71vxsYEYALTr98Zue",
  "key17": "5azEuwDxcCVRiGkyUp3q2poY7PuwZNaXUECWu1v96xUhsyYQw96uFASSPpr9dbLCtUZzSVWiDyNpF4bexfeY8tfp",
  "key18": "3HFdpYrhvxFEPMq3JGHf5ahC73pQCdejmsoT1vrMawuQCoa4MsbF8QqzPGAh1mGhD3eenjhiAhXfNBCEMVktcag6",
  "key19": "2qpfRscAqZzGYUGikGsUBEqyyyShy2Dgbbw1KErWa42pbxW5Pv4kEGATTW1AMCYxkeba1Nvi5sfURp27WECuBE1F",
  "key20": "3RvJtXYkJd6qRXFAdEzZcyh2MwPFdEGUtisN8bVP3cQrQqi6uQH8rswY2KiojRfdvwKDVZAK5giws4ToGN6ENNs",
  "key21": "3cWpGHd1G1CRrbszXeSe8fu8DvAWokQkre9isdYn5eybaZoWBnZ7t8Rq4oH7CWr924fVWKdECdttYcz4E4qqgY6G",
  "key22": "3pkwMqP3REcP5aHUmqCyMrvdyZ5rQPpXCtAeCkrDfsBPe3XomhnvCq7AwEg5NQEXtcDxrPmjtfxuKNVJhswowN73",
  "key23": "2RYcvhqMptzDBzm1vg4AnurcTMTDgnGtdsghiqEHjqxzXQrw77xoGzL99BcDr4d6UqzMT25PutPmEqd3zEZLmmjJ",
  "key24": "5aWY1K3qW7nBaF3hQ9tyQsDani7W1PcGfGRWc5GMt9ptv4KaCpVAsWqFHiTvRGmku9xCGStW5UEtqxewHiqY8hza",
  "key25": "5khtfPkjjPoGWHbhqrvjWHuLaRc3mNjpDgSazQxETTjBJcc9rcrQiW2UcWt67z7Agdh6PRKdJXnHsnUJyry8UFJi",
  "key26": "HQbCrscc3iNFfxbrvtMorRdiKgKQmEVYTsbxLm8ybdiuVPSxXyjKPhY92hfz3HU5PcnkPeJfirU7thzMxZwPD5T",
  "key27": "q6mm7wFVbeWEQF2GxotSju4rz9r1SyU3b8jtd715YfQhssDBdVrgQtCvuZv1Gtk6Px9N5RoYRtFXpxhJcDpSedC",
  "key28": "325JBw2PmyjawibgvFrLziwfEcbXaAHjMwEHqU9iv28HswZVdmFuvcZb2e5VFCmfjFFcoveArMpEaQPt8pbzMCwT",
  "key29": "564okYwTiamfpNDarxXBaNufnoLX5Qt5mkvvrShd8V8Y9svWmvmAxrCdFrCeVwznMPeBNk4jBofuJ2L4xuWmwf4D",
  "key30": "5tqZJV2DmvevZY1KTmKaxL7LmBq552ngECZJjVnDiuk2yiiBoT3VxQCQDBpc8QW9iJKmshiQtViysAHgK3SB8NpU",
  "key31": "BQNpgKBd3xvuygCw2rcq34ZyiYkFKHvq1vdExnGuHo6MYves6tWHcsPSuSVcHqmgCFMYxxvLsyUPdZuTV8nuXNw"
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
