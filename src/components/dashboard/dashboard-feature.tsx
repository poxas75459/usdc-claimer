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
    "5DKiGo7nHwdaN6zoTdoTwn2cxRhMCzGCBarVs7S2gYGX4umMkYZzLNcCzFyjpEpJCeuvRCFAAR52VUXfk78fgrrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qa6pYoFB8bjwsJTSS3RhFVjHjWd6Ci2emnxijnow9ds1tmkNU5X1B2HdLigsiquhP9kBGRVXriNWVPDDHBDoXK2",
  "key1": "EyRoX3wpYt18H932Ps4iJGoxdzzLmmRUQPyMbD5b5kGYK4eKcik6pGoY3NEknLdwTew8oNFytGkgRRCyLAspcHu",
  "key2": "2fmDWfQTNkWEbGYh4uF3m2SmyxZMg9UWdshZi2siBidnL42FiewxWZ7EEz54nQhTXXjfMiKnccfyzW2JLkdau6dr",
  "key3": "5o5ETjvZeveEB76rbAuxTLVdsrtCj1tCJUPGnGSLrm3BTDWTCQ98GJnKTKs7s34h1g4ngSyZsEcEMMK5zhXzCfeN",
  "key4": "Tng3gZHuvVCE8nmsVmKxJvXPx7HpE6C1fCXu9bJSGJu8dsmXbgL6WU3yuGg3Fprbg2bTVhE3FWUFbtx2V1ejAX6",
  "key5": "2G7xNMT5djRpgsTy8b4ppXFyrk8c9dgMpBFe6Pe19j81VxZAZD6fALUjwFfiyP8CwJrxFzh9Y1rWEcHPTSXpNovv",
  "key6": "4ZqaCUbAez3Ch6Jq6RZbHcCVc3nEfjAnn7SAi67dvNmizQ9qTigCFeKLBCwXZDngTvKYTXxjizTrJiix6Yqz89s5",
  "key7": "tqVGPKfGEw7394GnTNBY4GFgYaFonUoGCGmPgiHQWVuZQYWkcrKd4yzLzGYuePiwA3h5GSwANTxh8msynGUwBko",
  "key8": "4a7XpFn14X3jyFxq66FyQQ8yhYoZCvtp4sNtxiJzgppkyCADxfDAknNu9VxpoLSKKB7wA5J4EhPT5NbN6TRxYuLR",
  "key9": "3Q8kfTfDJPWSe7ZyEBenoWpmM38E2qqCYvyW7R5EoUiEduBJJLGcZsP9kDmYpW6c5GRFghSvdWH7xNYyKKmkgh3y",
  "key10": "s4tmDFwp9wCzTnsWUmiukrWC1mDqXqa8x3JFnzAer3mDRZQRPMx8u4Y4URWEDiMeUZbGg5A2rh7Hobs9csBpVVt",
  "key11": "D6SaV4no8c1zLK6LJZ4MGvQUHxFLPmCw9Sub8mMKvEqrXDkA7B711cKRVGXxiQgZB4komiscmP4qmy328znLvZf",
  "key12": "62WTZDitnt8mhV9mMKGay15V14YaZD2v4WYtzpMPwPgUaRwTAYK1m2b3GTiW1jXZBgr4eNx4y8HoihqKQF3RQq1L",
  "key13": "SHF4RfU5yBd6yeEp2kGhubKKx2XfXaxyymJ2oUoqHW7kV7oQ5ZpsS6C8iP63iwJUrrV4L2uG6odKNCGBy9AoMWs",
  "key14": "nrwVwwnCs4AMP45rcLnQBUVTGBWohDDdCQbaNgTFg2NY3KKTiJm3F5MG6BMeU5EBh5WqYu2apxELT5TZuUB1jBy",
  "key15": "56LFRCYge9zNCmuf4eYjFdc7zCKWtivfChE92381zEhR8Nw2XcAKCA8Fxpmkbqbc3SPpWw3Xr3YCmuR3iCgMw8RH",
  "key16": "4Y97ScY5tAUFNGhXjxSR35q3wns38pfjNA3r2nw9413NtGEbGMsay2dyCtJ4yZY59jz1MoYL71fQ3GxbWXXXmXE8",
  "key17": "3vsWX1fHYSPE8dnmvQRSKwNkz6j5tduhKBNZWnBETZU73FhrkNs6GtjCn885rsJv8XtX64mEggovFdgoS1vkWUsb",
  "key18": "3wSarDRPzv454uPL824Ksmyf9MRJ3PBmGc1AvoBUqSpL8eLAbvSjcwNdwmNTTsBf1oQ9bETsZkKuCei9YSzgDXM6",
  "key19": "2EawCwtB2fErKsRiNWdyQij19JL65ZvfFN45E7PQsyPgq7u5h5DA5CQQetFxJe4setkp8pdycdnktjHJ9nNEp71o",
  "key20": "j7q3b4c3aBzJC9v4pKh2aSBSthgASXPK2JDiMMDUE5Foa95qgu1aCijeXgFgRP3Y4rBWopf44UxvNpFqm6Rr8g7",
  "key21": "2MVhM7WgVg1Zph6JAyCTVvbnL6yrvM9AWa39c4iz42tETvAJ5darAYGYkMiB6z7YDwVzXxfQvr1kyJDKbUqmrpt5",
  "key22": "5ht5FDdWpchHw3GuANRNMJ9TnhsjAKVXxeLPZuwzRywjBxeCJFsmny69UeJtB6Do6BXAW8VTWqE8tuiZw4c73mH1",
  "key23": "4ihbDjaPR8ZQu8K8AZeF3beqsN7UhtpsS9CHVbazs4TgePfz2qwFH53jbt2ysAJAcZzPvHzn6KqCUVcujn8QaZ72",
  "key24": "5Dsny6PUqrDs8M6NoA9M1nbYLxUh2NbdcDcU3d11DoZbFnDC5YNHPJkmRVyJn2bjFMgpY9UzhydDRQjJmVGJjVwf",
  "key25": "3qiaKniXFR3oWxVPKR5eRGtrMPp8haKa8myJ7Yf2Jw85ScafVnZasjefjGddEqPUB5uR5BuByEo1wZLAGnVYyRr3",
  "key26": "yimz3hbqft4q2a4VV1SMt25K9G6LRSEkr9AnupNnc7ydP6RDko26cDhPsD5hY3cWvLH97eb3T1J8qyGg5XXSMT5",
  "key27": "676FKbW4JZBfJm38rwVUaVynLFBpMKQMkSuZxXrcDd6tB1P4ZmQ44EfqtkbmseCd71i4LCZQccNjQw2T36qkde57",
  "key28": "2QrVCp1tddH4rnmu8nfFc4bN725QTssPAJyjpRzRkeL6hF91ccL2J9q7DQnpgtSNHxgWnAB49qibCxgBCYKbMGPz",
  "key29": "31XrrRCs8Z2TMCQPoUTxwgpFVu3une6JPNPLk1eTPANqExhobsNAT55X7P2ESsFTFJoJpGKPfNd8xEv2ZBrXHWv7",
  "key30": "5y17BmM9xLE25Q4n9vqUTEZuqQtieAkrg8RYWH3MkLb9wNgqH4917RA6RBpcyjLFTfNdXaYLhj7QYhk3zSeSpbar",
  "key31": "J7NQwa42ui9kSef7BjWajTdGFNjXa9p8emeF6FruvuqrgQCpa5h1XdKQnWf6LiqwxmhhHqGwpH7kQP1DmKRYzuf"
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
