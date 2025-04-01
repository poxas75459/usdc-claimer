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
    "5R1Ume7nFwGtF5xEb2wp3rBrzpSgWSxj7Aj7Mb5Ro4gKk9Euh3BJdtvyEVpa6rdzwVrPmQXJt67Yq7xmeZBfa3iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNF9nKrPcRzS8a54g2tfrCHQz7TV754VCWm3C9PCa2YAoZ66dptq4NPm5p5bJB3ucqbQdFaShLNmJqdLFwQmsJ7",
  "key1": "5ifBWnYKuQ7utQiM6DsFZwMaL9X1rHzwxdynAon6iA6arRHVmsAPp5vPbWhcGj1FYZQS6zrW7oYHTBKHfdA5u7TY",
  "key2": "v2Mv7YSxG5Z16FLtz8G6YLBEz2d1BegyxgqEVhVuD8DDGRCStjSBXa1c7WdNebjXUy741tcnJaY6YrQPWCee3KT",
  "key3": "4NW8YufCRRiHwTUUT7HUbhb7E6nTmqb4mjLBos4ALJZteLWpWrY2xNHaYeNXMmW2AXP3KFoAHsnsadZHVeASMeR7",
  "key4": "5PWTJRbvb4NTu1VjFQyHkuKqJKxuVtBhaGWLdQj1JBz4wpj8aZs4THL1H5t8umxJ2h6NJZ8oHQsQPypJaBskwYz4",
  "key5": "3hNTi9By46nyc1psQVzDbnVeck8XUJzCccAeypmGwgK8KGDR5ZXdryKGDQGvb4pooyM6vm5qm3HNXu18xuqX7kRp",
  "key6": "2QVAC3oSWSqwfmjQmc1reGAE3zsDJQAxuH5YQY63JZpPDtk9A1dt3dmWwdm6RmMzBmz8FHJ5uo4McLEroX5rJDZ",
  "key7": "2uP9i1CH8BVJ57PcizhoX1we3QHwVdSQGo9DBkLixZXwcxWFTVjsnfqPoZuagnzjKsGeQYX9sgNW6RzHtUxV88HW",
  "key8": "2XhseL3hFatpHYByKZQ7F3dR9g2gtp6D4RPdGQVfnk8A7TnJhU8Gq25pzHXxb4fcrRJ7abL4S7GY2j19iQs2LwBH",
  "key9": "5c87PEN7u8EbKaAS8ZkoGEg7stxbkrio7Y3f2xHiK6ZZTTYadEogpp7zb8CmRuhN4WGoB2S7p8hev2dy4uzSFAc7",
  "key10": "RWG7cLJHJRSaPafKuRpTGh61ZARqsoGy5xCaVyCkfLMkYvcqwcyLwEEU3J2e1RzCuLmRuWDTTogNWeJJMW4ZFDu",
  "key11": "WGgESDarz1mLBYERPoeUN8eeHmAQ2rs86pz3gHPgrSmTQR33yn9GD1TsLCye4bMe5Tgy8jq2p51Xu9pyswj1tKv",
  "key12": "2KM2W9zqq3vJgCaHVtVLdPYuQhKUxQPhUxBNBHysy6vNkmUAnYE6BP5HDGXs3tZGu55drawidhEavCwUTADTwEHY",
  "key13": "5kYdaE8HV8p6MYQTJ5d4W3EPbR1f2jFSwQXF592xb8D1b3WtDy4s1XoHEM9XMigrkJ8Gk2VtnLGxmyb8CyGkjDq",
  "key14": "51qFdWY1MaHX4H3fCdVKqLE3D6WD2xnEKRNveLdWJfFckurmSNu15F7fFkgwBgSiiGUug9dFme2ZCKfgDQkq3N7L",
  "key15": "2NPs8nwscuiqjBUHTkM77LGNom6ympLJsB5SAFNmRdYFowVnsCqsEzDDx1poBDjiAK3Y1qFMav3PdL5o6wFLh6AG",
  "key16": "2fDoTkueF5xPMV4aWf8W7xcRRsGTjJ6bWiGAUaT9uPCytEqHTSuqdW85GyzkgYV9rW1d1s8z11fwFDbynNB1QNmW",
  "key17": "69WG74o7xXv9bmtmXMPmaKh2p3QBD9VgpnNTpCndP9ZoScRmXKZJfrsjqUpodknfQaGWdakaStVM66TpYxMnkBW",
  "key18": "3AewG68bMgrfZLeLPfWsGvTBQE1rZfDokTozbXnYYKSmUJqsxNY2LvTZRdNLDWB4tJvuc37GRuUSukJ1NEXZ4zqX",
  "key19": "2uPEo4hBH2RxE1BQzcVsFAhEvrD8VTvbAscNSt96nexTgyb5D4owoes6qwyZxJ63wD3kSrfDmgnKCZHGYdiJBaF",
  "key20": "36a5jyN17rc928AFExs2UkMTkP1DhNs1jUqfyTYFw58xSBdiMog7yGi44Lw5CMBSs38D41xBbRcTXJavfPDV88sp",
  "key21": "3kyrX5YWFYrUMPxt9GWb9Ya29HYLT6veLrdkSWiHs36mDMVxAGDdwgW6NY87XY24Z3REpZ21kUZagJem8w8ow5Pm",
  "key22": "3xn5UUEkruCgkSUyjgsTtzjAp79Pe6w7EkAd48K9FsBqxWZVkD7UETFJH5nJwPj5M68M8SZYbfpgkGif1tZiyozr",
  "key23": "3Kgbx1USSxoASAC7HfM52FgVhb2U9KjGN6YFdHyGiyYTXnedsRGa9Xq8PiZYH3fHMrvrMS67i5Q5SbvqtLn11VPS",
  "key24": "3k3JRWQvx679Nu7f3QYTRyeZzNkvTPiBNCQoou8zQ2KMWEzPE8W6uQs18ctjSNjMgb7qBHFX4aNMjQTN9ACSKLg7",
  "key25": "4V4hYnX7B3qMry9CJ2ZyeWPiMynhmKyELcyykPNYKeTMEm7DY8DwLLhLMAwgJmqKqhSip2dGgHMFSwzrJBGgopMA",
  "key26": "3mjiTn5QJg7BzGTamS1DQYKdgk8HHzKqNBa7VYgVUyGHikMmvFG947mwFpmWgXmLDk9YDGJZxhCwjLGWg67odnfe",
  "key27": "32ZxU2ZhYUL7tQeYa9MqKsKfcP3Mk73qi1p3uBaCtamQmCrpmHHY5kxpFnrp8udv8TjYhj215Gd5z4RaQHzn4W98",
  "key28": "2EJb18hbhTUSyoKYdLircUf1MtHe5isxC3gkbiFQt6gLxCTLLHRQ3AS1fePfffRx3nV5nwa9kgZfBPpLm7WosvEc",
  "key29": "2uyFGntRfyZuLRXSUXAgu3qJWSYBZtaPvxTWcp4de6eggcy5Ww9ZQSYFDd1LVbAeLTTYK23UsKuewmAio2A3ZzXx",
  "key30": "5Dew2otrF1p2xwBnyZuboXAMkEX4Z2D8mhZLph8tcFynhkUMRfE1DSJsZwW6ZY1qUUAGs8dXz9tr3tvLcGJRvDB2",
  "key31": "5PjWoxAcfMinXQ8w4YD6Re1ToZhrLeCscshbHxxVtF2pDMWcN4M9LXxmPdyC9wuHE78u7bvXHXx2oApz7pakGZem",
  "key32": "4pn3vGKxBnrqJ3AL9TFD8TEtqr37rk2FWDmrWy4bM8uNt4WR6Ggn8xwdWuDqWYz2DbQDTcCFt66YrKDgVHgJjMWr",
  "key33": "4QMbm95tWbfybwiTxXK7xum7p7ob5Qdu7DSXVB3xEZaKW7Wigp9joBj18d5MM2r7BChTuLJthuzWPyb7DTiWH2wZ",
  "key34": "67icgRYEPAB55XAgqTQigdcXmHjofendtJo4rsbvVgthtprmwkFiGdncxJqNNZFdSkWp4sBi61QhQhkfAqCHar2q",
  "key35": "34gSNWQ291befv5XLAp1KPTS8Su93V2UtZvGcRw9d5HAreDH25wKYgH7utSD5vRirpXKhCDtrTMtPX6uoePKXMed",
  "key36": "tD4QxjKp9qNnmbewSDe2KGRzs9EDCwvG539ULtKcgSvXEzqfWf1JcRzgTsja371e4hGkWDhuDEJb14BRZV793XC",
  "key37": "85PhZMixMCaABzcUWdXrgzqqAMujowXXdQaY3Q9CZ6M2cS47r5TTvjiAtqnGeCjfMgMoac9SgC5fQJPqhQJzaWt",
  "key38": "5oTFUTRBXWa9du8W1w2bPTk1LEdzVwunqxESmPCoEgoK9NkFAgHbP2ySBPJsgtYVBApqxJZb98EYxQg9vxhAUDyA",
  "key39": "3hUHKkajgcAxjkjBXrUZTfBWTfycq3LMLpDPw4vWwE3x84aTfWCQ1TjXndm5UPTj74ktqHiNPtYFoChYjx4AEY1P",
  "key40": "5mnVRv5izHBHj7zrcsMn8wzAKr855bMrqysaeXqFnp9qeT5AwQnFxHCSZ7fsByebPqQjbiTyvtPySxFv194iDKD9",
  "key41": "36txjdcSu2mLeCLcMQmiMoGKmrvdJ8UQnaq8MTaVPY9Tys2wWfd1Zv5qHocfFTXFXDGXmAJ6qU3qpbFPFnZbd8hQ",
  "key42": "33vURD7338pCAQaL25W3xNupjxMbRNNeoK12aoLNxuNYz1SKyoXfRWRTLh6Zcze3u3Ldj8yRuUnHSMAnS6TtMHQ1",
  "key43": "28oqzV58TQy1E9eayNvsAUrxriwQmi2yrd5KvfAHcuC4FCyiNQQ4UrB4TGH2edcuxySUh5FrpUnfZMXWrCv3mbzw"
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
