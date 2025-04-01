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
    "2kgSKJjVEcmfvUmgcCNKG7WkqUNq3S9xMSaSttq3YNaDv5iXTpQ2wkgoLmAYZe4ze1ddfydsDLr7frhX8pzw8Uwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYGDxgMkMhxU1cWsN8AQyrK9qvtD2KqX7e8AQz98vh6KShVTvPmq4b9DQXiy4BkehRfX5rhPrXyAxWEwN3vL3Ef",
  "key1": "4nfqLEcExLcPh6CJwHLqiuBKkNGfKhnBthPGvXHNzHMFpmDL9woLtHiQss2ZXCJ2DXcNrrx9i6PXvhw44cREZ45d",
  "key2": "64sY8zcvzfomoV2AzfNgRtgFoHLqCcrJcGaAfqxLy5SbsmSyCzmmQo24FZSq3TpBQMYGBurrM4uu5R5aZZ8m69Yq",
  "key3": "65MDaEG4fDoEvXejiSaXpNxpnQJbyb11uAvLy9q7fHmCA38wdEh4Piq4FGJ4z7iVuLierzdmTCPd3WDz8snq64VU",
  "key4": "5DpvJD6KwxKoFmacjMApCFniYJWbaNEuHDr3ULmWmg29Xi14V3RRyXHfzVQqQPRTHdc2hnueQGFKAqyy4MwH12Vg",
  "key5": "4MUp8rB3PsV5upd3R8y2s9Ei9JuxEE3Ex1UJs9oSeAH2e1yo854MRuNypih1hV5oNhN5H2uAdvpAfvf6NZwvPifs",
  "key6": "4GhFrPmmLAeEwCiWFnM39vDLvTRBw8PJkkWbYyNyDdABmuQgPAan9szUBbNaefjupAATKdoaqJ2hw2HrTeDRGMC2",
  "key7": "4LociBbj7t6AnK8xCqXAg4tik1DiLitQxGFD85WanoD2GKCboJcmdo8Vo3HFLAMPHqyy7bC2QHdAp3TPkNfEB57i",
  "key8": "5i5yPvHMbUmRVH9J3mYrvke8ZyPdbYW7gjNwAf4Qx8MRSvWFvWoeF4JBJWqygtdqD4ws3Fz4NY7AbVmpJuQQWUBU",
  "key9": "3wStHQriZRTjXrUpD2cAgEoUMRjEjSPya1eua36hktCdUqEZrLZpF9tEZjC7777KWusnSqTy9VgrBYx92r5KpMxD",
  "key10": "22PwHDJDtuoKa9tfb7smmtoofW4nVpw6NBos41VyaF4rhE8rf8y4g698waYmpgUURShoHRt2vMrbPCqht6kgRw4Q",
  "key11": "5PeuENhYdkiJ236b93e1PMYPB5jG5JqGp9SyGUx8QE959zbsTvkS91xGYtwLrvLwKBogRfchjLP3oZVuyUFFhSqa",
  "key12": "56UozgYSTyZt4F7YsgWSj3Mc9xzmeHt2faUL748h83Hqyu5CxbCs9vd6qewpty8oiuy9kFCivy1rbUK82cS6foWS",
  "key13": "MWpJqKCZgMwp8a7QJWzbdfYn5kNyBmnkrTeoop1Bq3mWQPhjjfCqCiQjtraVAij7j2QoEJTcNgLYErZ77VaQXeS",
  "key14": "2Y76bGJfXXtmkYnHRvSGNrvyMskYJVo39W4kYxSibUWsMKwMPbxxw2MCo2LZoDdFqkHmbrm8R4kTmRfNz1NGKidV",
  "key15": "r6MkjDPTQWKiNSVD648LkosSRJrzVpiUXPNmdCaPeTbb6Wicki4nT2homAQwQbo3yN1bhgLXbe7fF7axTN6tuQ5",
  "key16": "3iSpP3z2gsYmCt99MRgQtVJagNfgdoJh4fVzewXcB17r6FJQ1AX251meVbsPYfR2xrZ3cqvpwiZ3eWzBq86Z8czy",
  "key17": "2PCWSAnj423uFw6eCh6opjhBN4A2GED8iwMn3eB9pXpVB6x85rpm9ueEbB8v1RFzWWaDwuQfA1EZxWa1dAq54PfY",
  "key18": "2tGBMjNtQtZ9iVm3HdCtrPcMAJC6anyTSvbWtYgVTE9iQyDPffhVCzaqs5kjPCGBt7j4RHDHVWttcJSVnuM9VRhG",
  "key19": "HiwxuR8ZtCXRP3LguWUA3XyjxuVLUqSmBWD2db913GLk6tvLZtn91v7rEMVukd5KjyokexEK5AG26eWcHAbbUDX",
  "key20": "2BGu3gMdi8wqoo9qANcRRzYUYZP5X2Lk6caN19ffqjnFaXKh4DXMAZBiZd7e4CnKjrBzjKpeKofgSquPxkooWVqn",
  "key21": "5FceJJnqyHttHkgxWJazzxVX2oueDxAxu1rFoZd4xhnhRBKK5tGbrrLyx5kTLpM3LAcVN9yxQy5zuVwuVUkQ9PAm",
  "key22": "4EQKawsPWofYueG3YN3tHkgd8WrdcXBK84YmMwbKJ2m2iuBeLWaPPNACDvEmjyFdprcMND84fXbtSnKxDLHzVPUC",
  "key23": "2XJ7LZPZjmrn3vUnPoZXMEyVSVJED6CkF6jAoJSjUgtc1tPFqht4XyNtk9ym4Bz3M4aeqMPaHswcMgnXtW9CMLmA",
  "key24": "5HLMvKQdhvY4u85AZLfYUYXg43YAnSTUc7wWEuwN67pzwM8FmWdS5qXNu5pGS1nKZfxXzH8iaxEthNbCr54dkeyP",
  "key25": "4bu2N2tw29S6ckHSxYevSBA6qkX9tXtrTgFHh2nJoXv4uYQtrW4Dp5btka3n9hamyoY3kzTB2GSpnmpoDrun7UEp",
  "key26": "QBNxSXSAV8QhjoUgZJD8QELmWG5Yo2oxGZyZy82ZujzsW13zyMLiw8YGy5Har3dieBNrNySDUgjXLkt5y3gohoA",
  "key27": "2X2zYXoJUV7pVpgF2bneFbPS4ufDHbFXUCiJ3jee2Nb1eZkfEu5yaabCb2nDTRuEvGyZ8BiqqJqjpLTnnGMYx9gw",
  "key28": "B9WtJzrhRAgr7z2Q5dvnBmajisdqtVzYzfp9TMvjYFHKJGphgzW2Voqw1GPHazdoAMbvzaca3MZNYmUTqeRY8tA",
  "key29": "56Dq9YBh7iqPC9T4YS8RpaXBU7AK7zuT1uqVcp66YzdrCezfiNsuBiZjnSusefZRfF6P1KHe4smnvbZbPYU7Rgqb",
  "key30": "4ePC2FyhBXrVDguDPFBeJCsfsRV2AhskC97Hr1fDJ2K3mbjKqC3SFxRcyvHtNG6fXtfGwGLWT7W3ScVDNxZhS2bi",
  "key31": "3dEFb8DCwgLjoAqKfMvp5QkKtiAtvHZfKnTkUg9AP8hhaLjmrEimYiVG1BkniTB9t6VtNDhRRdiU6j4p1NufdWae",
  "key32": "sjwoJDj1ezRGRi6XFepvMGe3YtTAhdkpyfu3PTKSptrvYZnFvQe48w6kcXRc73qXv2whxi7MBdnxEyoUkmWV96A"
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
