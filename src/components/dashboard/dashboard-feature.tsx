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
    "3SQSN8fkDGcb2b6Cuj3Mt7HE8DRhGTuDYDa3GxMTVNGNgzbaL5TKPvroFtP5uBNAcRaUQUiUrpSBPmc1Bsz2wfr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNjokWCXB5Ct1KUENwE5naCNT8DqdJsJwxfo384owo67qWfkMyEZhghDJXSMN6JpdrKLY827R1N23LwnXmYbxQV",
  "key1": "51b1HCoR88eWqh5wUoLbtsst8T7EkqSYwg2g1tiJb3RPhMPA1rZr3FDhbpjGbZwzvKibfqPAUrQVsQySUHTRo6UL",
  "key2": "Lj2wqzC1x22q1pezfbhqJ6vY62ESRyhtqsGav8vteAph9HnkU9oZqPHzzRsa1bCud14ANB191EhHFXYvFfPowwH",
  "key3": "rBHRqx8g5g9kBUpXVMRkM5R3AmraZDWTBHMdQ6kqDzHrAJC32EjCpZZeWoGdKjxFYfT8NEA3zSjJMazkYASz8rT",
  "key4": "2aSCETAiscyj1Xc8cCGgsSUng2XPAvYMgQNxNbom9MdEmYGE5MG4wyDcGALApTJQXctkfCN3RpYP8foeiNM6knwt",
  "key5": "5cgXTVBfvJPGDsLkRYqShF7R49uLYXb9ULKmjybaZNapWDeXTptyEusv3kWWF2ihk8bYP5ATmmTKLSdfWCdAbAPf",
  "key6": "4mx33jrM5JkkcjyH2KrC1DzHGUKtY5cii9t2utjNbuKPpodPwGsqAK1eCwo5XzB4A2cHauAeV7bUBV9Eqzy1vcVn",
  "key7": "3R45GobymdzkXoFy8iKG8naTtKrwpK1ZoWLMK4iGer2siBxavgJRy6eRRD4CvJ6Vi9ejKvZP9iofe6hY8jF1yjFa",
  "key8": "3zjB3v1MCsPHW6k7meEyzr2bd3AqgxWnRFFjgi4BncrUorZzMJHGgQvndhWcgKyaTWzS1VZHqRuDEKR7i6RUHJKx",
  "key9": "52fSmh5KNQjBHdgXPLS7DFam6A7PeUp2GTC21F8DnXGiv6weWtdg7wL4DW38M9fxkFuDveVGa88UTmCx48YwsJmc",
  "key10": "2HxdG1QB7DKrkJjF917xxTQhb8gTNCJUt3YS63FVFQ2oquExD3XMthwgtAeZYXx9wzeuWyqjLL1EgrtZa8wDSeEM",
  "key11": "2m2p4uyka9CPn3jrXCJcx2R2BWy6jKuD6x64hW95dznWdwtb3BqNGqz7HDwf1ygZXp255pzjrpnrsnx6vMRkxPiy",
  "key12": "4WcBpsEKbzEbwNa5g69iABzt8ooeXNsTkZj9R6kXNm7fE29fRU3c86PxB55bLxLnNhc2JwfHvQb8BpAS6sA34Vng",
  "key13": "3ck8JCSJ9dscQBywRZbag3mHFq2GPXbjHsddyeUZvm7f68aCTQsZdWyGGwUGbHEHMZXfiFrjXcBfLR9wJaGgg7Ti",
  "key14": "5WbN1myoBmVzbtVtCDZak1xjTiZVjAb5uAY157KMuLZjdo3vw5haHiWVD92H3VAxkVAGoqZeUvhg2BXmrrV6q71p",
  "key15": "2Xgbpgh3NM6tLmaZigGfGF8Ra6PeAmJigCk6z8JCVpemoFWVeMidMeFjQmkXXLsTtscSm7QBuv9QwQnQxf4FrF7s",
  "key16": "3rZFDNiQ5vpx8CsfwzTLqRKtcxsxHvRRE6emUFXCYMUspZLwxZNHAWMkCZd7TSyPeWoDW6qpvTajgbbbNZJ1wQac",
  "key17": "2a7EPAFLHbfA9j88n2bYpz1Sm6UvCFwNomaAuGfULJG1wsy7kY3y2dhDEpkNKLzNmGiTw7mb2RghHLZSBS6fSnw2",
  "key18": "2fGWgFsdA32hLRE2a49LTs4fv9jT2KvdfBqiuAfTU8XYQFaEqic4RmvMQrWLMLXa9mTYR91tzravUqhUYdqJCWHc",
  "key19": "4FjvuQWG4bbrJZTsMp96b4dAnRyQRZrNwNaeNcbvyuwAKB2ftULiE3UHrFnFEBYzYzULgMWLVkt7yewn5QQojxcG",
  "key20": "4HfdudQSFetJXeMj9g1xRYfp8FB6KqzbYyKDdp9S1JptuHw52Z8KkrtwEshitrnP33LsC7rc8Nps7atEBNvzSu7F",
  "key21": "4w7vRZFNbcyVHT9c5sA3Pv5PhbDNsrcXALL4RZg1SgCVq32N9BTfi4WyhndV1S1W2iweU3T2oLhxTdMQb2cn33R7",
  "key22": "5gxni117zm92ro9jERiP6AesVgt9xwF32nC9p4s9Qqtm4oSvJQLyx2x9PH168GP7muUrjSCputb6nWq8HWV2AhRm",
  "key23": "2Y82cxpWy7xdQXwhAW6YKRaY7PHqDSApJ5rmMAaKdHt8vbiuspvBzWjUPGKNFrSc3JGJecyyjgpFANnbXA7ENURj",
  "key24": "fCyC88QpYr39Ejm8jL93442cRDEyBTF6evXPr6Hc7rpYwr62BbkxVWD7zdSJQsCZcqVJCkoFpaJPPtFpdmbkAsx",
  "key25": "5Qd7bA6czDyrjynajefyHGySegvvv3CJ2H6fJFKNrJHvrfFPMZ79jciJpDkWJuyZNXGKs1e4mo6oJbyLQ5LN4nYG",
  "key26": "4Leu4AEvtuqBUnzxNwpLtfwYQqY81KuCTDyjkyaxwekus3cbYeHLrMs9H8nRbpooUguo4h49WQN89Fwfr4KTHNGt",
  "key27": "4ZVLVhL3XQd51jf5Y3vmwv9j5Pg2a3K2Fpp4EnqJ8uyrNmLi3wYBkXSg1NJanghN4f7uj4cgKWRhNWdqPs6ynBrq",
  "key28": "33xjUi5HLHsFn8mYBPa6pVEYAuBVaXhw7M9D576nEJGKZUWvVNpQu7yevX71BdeczxvbCU2Fmdpvf9gpG9pd5hrP",
  "key29": "4bBdTLmjZ6CVQ1jwPntXdai1syTfoyCbYTC5B3jYU6s8WgxAjQ7dXVsoGKZKadpUVqNi6SNhpJuPkDrVzic3kyfc"
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
