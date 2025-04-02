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
    "4D3rLg39fU92h88KX8o5RJgNXjNd4Cs8P6tmT6cTRjGh1ytkiLtxoziHfRt6LxKKZo5RqeRPHBkTeyDnUNQJaMYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVJzGRM7uXSKoubZwGjuaUybidyyHzBxjtMCZfpBZKKYzu5twTX28F6SymvxxdmGK3hitGNYR9QcVpAgSDpM4bE",
  "key1": "9r4CU68cstFumWa7P477iUdmmJvTtdwjE4zVoCtfWaqRFDhxDLjCXmVRZbaa1CarQ7hGDmaj7S39tsRtN53yCL2",
  "key2": "4bT32hJpCWUj9NX8XmSMLgvqbWftg3VuC6MfLw28FZysn2PjyrreRqRdSZAtbNZ7zUBh9LDzyBGMMZ9WVKZfADyw",
  "key3": "3tKfTCWfe78ezNxdrzj7WmNMgb9VFcbGadG6Uisox5cHzTGTuN8bYTuoP9uDx8pyKxTy9RV6N4Wb2uZUtQWDP1E6",
  "key4": "4GQZtSRB19TmpRbk84mywGgrKvcdyMY5RuyJ1x49vdx6nDikRWtN6AqM5rHmJtrvKL7Nw2PXBoCK5h35YsSbX6B2",
  "key5": "2jNZ3AvmPV3p2HMDNwVpTEyBJkRnpNokJpktALjMR7iYsmu6gCd5B3MvtnxARvFZAdm9CA9eZyBZj5u8TPSM7SP8",
  "key6": "3mnGBCbizesiW6FedMrP8UQwW9gPqMZgaDt5Bp5jDhrsHcaspbdYYV1eUu9oyXmpUAjQnKufC5XRy3YQbcwdCLtP",
  "key7": "nDbVSVZkrUVZm3pAJv4a6mUWLsxwPC1UDdzeZn7CMLXX7sAK1KMbLyyMfH5P5VBTYvshXuXANAYoE9FACuwvNGt",
  "key8": "31fNwv2GGgo3rVzxFNkD5fGyNUULFSkV3sqaMSUe5Nbo2azU6sTd3738GAjsV3j1AmwKswA5JU51mbuenmgxugpE",
  "key9": "5hRRx5dHKArJFLZsrvUdF3zZzseXqo92cABJYkLxC67EhYXQxYW2KGXu9q6hWCq1GW2EXCBT8mU8XzXHRgiQTwDL",
  "key10": "2PE5RvqttEfPp1bCQmU89HAuVbseAtB77JHkzQqUCmymVX2RLgjDtWuqcVaPUv1yBesxZqpcjKegPmoUY7X3b8Ru",
  "key11": "63ho9XBGqxxnw4EpwLvdsZgyqNJcacjzvJZpnTMvwGp62NYEnXrN1KKKERAi6fWdgUc2ninwJBZRNVSgy3zhg1Tp",
  "key12": "57PywpbpnLuxPov3gnhF4dD9NfSyiZmGr58ibx65csGg8T2ChSvymuBdFPoLUkzoYdNWRDsUkhegVN7JDjWyVxSH",
  "key13": "5PWYZpMtqWga8XVcYyXio2zzSxWdrAksxEqj5BTxVebbKJjLp2AzTfszjSmiVMcxczN4F4JMWYfayTAZDhGS3nLT",
  "key14": "5BBudeMNtogAAWYoESY4mHxVniM3CNXN5Q47bCftUdfhQkJsw6cxXkfjAoagGgkubQJsym749KMkkFvnXFQFif6k",
  "key15": "4MLXNhFtuHu3XXN1MVi4mtUPZcmqHTH9LJVB1p6kKxEMW84wjxMQHc3SqRv93r52x2z3x2uBPkAyLpeRwZg2Kgzf",
  "key16": "4pD5s2LPHQ8UqaeBdvQLHgKZvL4VJ5wXUuhdKeWUobtFRcKDZd4npBNPvWdVUH4BnjgwV96Dj8PLEwFksMJKqf3U",
  "key17": "3BzM4X2PnMS1cjgvWPgAFGGwXxwPoywvDX8T6jPXvLtLX4jW1m6oKgidekGD3TQzRa3WUCKDsumRUNLM4F1dJEPE",
  "key18": "25ZcyeASTrueZ3kytaL7JZKwm2fyfRZwqXFyX8ugK65PTfHJvsEQM9Vs17s5qR3aPUDU29hQGf2QRAh88aNZTY3e",
  "key19": "2eAzVyKcmeyZUnJP19ZDbienziynHNw2VuP82q8s8AXjpmwZ34x4hJgK1sXNeQfvGBhKEMNuuHLtXARGvBt2pNcH",
  "key20": "25GSJYU5XaLKuDpY2rUrRE1U221NbmGHsgBpXpEPy1Puw4S4vGnf3AswzrM65JUSY8oLD5ghxzAxoFU64EsVTomP",
  "key21": "5zvEW37henN1jfHhZYz9pt7iKEF4HLx8YaYpw2JERsZ11rZj8EtJ3ZmoBn998MJNrsGWoCkyyd7uH6aKcJTZmpAM",
  "key22": "4UuB8tguBn3gfEQgnybaRnBZH8DJpB9jQnXRQko2qUCLUNG2zLQ8iPof7V9fjffakpPgfSdL7Lpv6uwFMfmiLZWb",
  "key23": "4bMbdViNniTRxL2xHB9YEmv2WmkDeN5x4vYCTFcpoDVGJo52gr5r8D6EBEgEPNrLZfqQQrxd1ekPnutAF2C8oEoQ",
  "key24": "2mBMN96HTV23GJcgeGgY2RmKLGMCh9bZYE1woai1gcQ18YC1tHBHDC3AND9sQK7PSj9ZSTgxL2RZcsCaMo2Z7kJU",
  "key25": "2F6AQkSAzCzGd64q7aGFumvtY5fuR2qBxqvuzfpwUAopWzTAnxGjJLa2P5HepSRiN8mKxNApW7Jfx9e1RAVvyzfF",
  "key26": "55iDecMyMg4t7ZUzEBkfhnFFB9Ubb7PWbWQtCCaKR5LezJLs9w6Ri2JRF8oetwmQssX4dAU5XiP81FoF1Q5mhN26",
  "key27": "5GRh4dhiCEwLDcU73QDqywQv7uTyMLyxZAbucfHdfe87ZgoRFaNU4cfyodhCfoYDx6xaQoNDNbWd5tnF5FmvpLUT",
  "key28": "xyhemawA3BRrzHJDYecpjUA6qs5wewib7s7Nhm1BRTvfmndeeRxtua7HR1WeVHZmJqMMugUmbqjH6tMt6bqRBFE",
  "key29": "455jaCNBCS82CfvDEkTiig1FmXuQcy2kLza1JyMQmNZXcJzKt8bx7gS2Jx1ByS6EywFK33nsKxoTYNt6DhHxECKE",
  "key30": "27oPKKs6ioTSvqhGUe3SxZHgvUodGZu4hmJkDNrZpUwxiV1Y1B3SnmtDvJzJmh3hhYf2uyLhq7MtZ69jEeZQErsu",
  "key31": "deLGZyNh8ZS9fbU283pdLYkH9cM4sBZk6sqAberm1Xt1ZYZSZB7CdTbce3xgLjGUcge7xDDakPkKZespaKfYrf3",
  "key32": "4WyD6WAth2XHH6ELhpm7tJJupuuJMy1teGEFDuGCS6HdZoJS5CDbFLzSRYrgupgiS9wvQu3mRQKDmoa7jUfyYXjT",
  "key33": "4Bk2VHysyrPABrV6HknevV9kUCo3gFMFszSiohVJJDhHw2UUS7geYMvB9amHyPXnzZ2HNYnSzFCcSEc5PAyGRcwY",
  "key34": "2Q5mySSc8KPCZRk8h2BzmPQg21PrkUa9KfnXNbXXABpwZawYPeXEwntYxDZrG7pS7FcgmuYiFNhDWLjnq8oNymQ3",
  "key35": "4r3BgQqLEs9faP9d55fgZcGTnEPmJD4jLJVAbBaV8XCf69aRuVTFc32cKfjfpT5JqWJVyyCnqAL4JisYLt49KbBX",
  "key36": "4oehiungi7MzdTwMtu7gJYQPzo6fdoXKfta7s7L7h8y5EaGxyMptdMDchWQ4obbHTbBDeexAFFVnopj4swpD4Kam",
  "key37": "2UfSzTfSJkq3DwGj38DrgxvMWJWTwX82EaUjBDDhPnZbXqfq7hTTMSsJva22WCoYEiBZXzmsb4SYgN8j8WFGfmwR",
  "key38": "42MPH4nGY2prLyWYjvFceRvZ97njA59EMaFtzzQnxBgnvVaHcDYNN6FsAUWP5NYzz1TpJkg1SRG7PYP847seBuR",
  "key39": "4tiYnEu7HP4s7cVhcwB6PPFAeF3fsAbszbqrdJDf89iBbnjfSBvrtyoD2qEoTwBXcqHztHbNqkrA18buz3Wt6Cz7",
  "key40": "5qWkhvvDtrNsRKSqxoVBa8b3JAHLVKMbSXXMTFWyqtVnjEgCGKPsBw8ja5WreL9ooWr8aYajvfQqnUNiqetbxcsc",
  "key41": "kPP5pV5c3KsAei3qZNiJMFgs38n2Ldt3JzCd5iGgnKVSycH5RtBtqaq7DXFVWdhocPbrs7MgQzDgny7JjEa5GWm",
  "key42": "5AVQFha1JQtvjS6i5pZzUgx6tD5DA37Nz857prPoiLh5g9ShNw9i46ovq4FqMnouEBA4EV7jpQFrwLbfAA1B1smi",
  "key43": "2FjygX9n7idw9RN7TNUgLqaYvMoi7bhi3fQ8cX3td4DXA87ayuMWpQ3Sht9rhFh8hPWJ9RnimUsypoyGoUK6CjXH",
  "key44": "5RU1cK2JRnnAqqS6dC3NtcWYFxi5H1Prz2FK9HuYHdEUyi5ammSFCD5pixWktgYw52UV8DvGxzsgepiPWoGZBPsM",
  "key45": "3zZSMB98vSTGMkyuvY9nbUXxZpjUfYPXyXuDWsrfUNGnWwjNiErt2fjezMzGg7EixcGQfaj5FUBDy2CY24qdHRkW",
  "key46": "4UjWJQBrTt3H3HqAH5YSxJfBFvhR665jUCRg3WEzdkQHBsnuR3sjz3raTNUh8EpVhMNmGEQ8KNcpVstznoxLcptT",
  "key47": "fhaN4ScUH1XYW3wJD58oeWYw5La9M2ue4tmDUJurFmqQbSTdLY2PuAHQ85ogi1ZmX2QNoT3QFsCQX36N9kKkGMF"
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
