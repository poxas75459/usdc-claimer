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
    "3evLvvL2QL8ZvZCMJQwBk4RcKYGtNmmttw2u6zfyyQiQANaFnQnowptQciHeoo5iFGvUMPqFsHhfEVVHmCJxvvdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KscrKwEkB2K3Fh3odUbmKhaFcyUftTufkc79ejxEbdvMVAKJWmnJdGXKm87s9RSns2CQaGYnjBtjG8meubzcni8",
  "key1": "2MjfVKW5CQB4kSZ1FfCyUPY7oNSghM8RFzt3YYgXTkL9czfQNy56LTW5zAWUuZDHbueGvS2TDoVCPkaRnycux9Af",
  "key2": "2ddWTPdnSRnE4SJaCaNMDT9Dgp61yqhkH9jhFnkC6DnxebHVZNbBVzEzQKtnZcL4nozG2DW72jCZA74tGuGmrNKv",
  "key3": "4S21J3Ac9mc6k6VptbEUqwTfBmhsGushRN2dad2Q4ogBqdYKN4uahdkKromcUASGbci9cjHhXdUhCutJjV5DobFm",
  "key4": "2BoG1qtRDAsTQicpWAMrd7Yud7nHNFdKvMbGvGvqZFnN944hGktDP5sAxwctTiHQrsjtEC3EF1uut8tG3mmZUzmc",
  "key5": "5buKQviNZgexAktNzPTAt1R4WiNcRbgQCRtntqYz4R69kLC7bFs3VmjHXpg1CusoKhaopwKsS9v1o8yyHPG4dFge",
  "key6": "mkMsZQRyqQEjmybQvAXdE3kKVcJdxEBDt4aeYgSSojDvUrjuqZ51u4iRqhQGX7H64ntYvfPxpuuSiUmVyoRV6bN",
  "key7": "2eVQHrvmiwfamtA1Hhs4MFGGdzDEfKqXX7sLMipEv21p4oyAnMzSLpg4UwQcYMyJewCQggeYBprpYUDyDPQSpqrd",
  "key8": "2bYAELwAxt7F7dYytT7NaQpfTmYcCsooSkuYUkhejq86zRFXCRT8M3BBtL5bVkvT1pHKmo4k3fkQt4oMvPtgn1Xy",
  "key9": "5h5ugNr3j6f6MRAU7qmZageCLYMnCDiD9xLkvkuSvTjVrpv2XLds64YpSDUF7gzeC1eEBZdtMj6mvTPAKg7vU48r",
  "key10": "34PeCq4zcSTJwB3ixYsZ98KGcyN6SnT6bVpF6ibrfPh9wXXxbx7fuzLYJbRjufwpcTAjX1uV2DGyQEhpa96duLQR",
  "key11": "4hPGFD4zyEqUkKCmgTgJjnhrU91GbgT89pzBxjNWwPeuMjvUGwcQY6eEjWxxqgF5U34DLX1Ch3u4X6G5aLfjDfTM",
  "key12": "F7oy9U3rmUWoMaqpdpt6LibVvV6vpKet7Vi4z1TtL76hUnEikKTuuNqy1ZbE7cRXKrFTgq7oGxsR4Ms5sWn2B6Z",
  "key13": "3472BS9QZYRuLa1m4sutYrYjLcGrehWVr2DZ3rUrGxEdPncYuP5XcGvwFwpYDDVb9AvwFLReU4hPHnPxjoWHz9Kg",
  "key14": "325iNkrc9J3uS6epjgUXmW1qsmsPsXQRv6id6zuEr1K3wgH7znhVUcH2rxgNWFW2eh2e1RVoHpfmpJRRafY6Z1r4",
  "key15": "2DfbtynamASWxEYfZ3CKB9kPTxyV1ii9M8hpocHykAtnW36gLnTrrogpcaoHaGfjf6gjY58epRYhT7UyVJK7XiN7",
  "key16": "27Ytaxqiv33jSv5XggxqgBWAmrJZroMNd6QUp2cSa5WtPgFZLPiG6NXH5Tf7SmX8yPcvWvh22zq4P3Mo46W3vbVM",
  "key17": "5DNFn3DD54CafvcKYpRa6kQkcCdSGFNgdbBvyeF134uahwKwuC4wjEewjw8jRnxZJ5B89BPM7QCfm8yJ9b6bSbfs",
  "key18": "4vphN1RdRuYAMpBBZwCG3Hq1oNcrqXB9U93t1F5EC5XxCabhvQHVohW5sGyWhn8RQrdJhQD1Qq3WrixDz4zP8G9r",
  "key19": "3iQ3eKHVEoCYaeYmcA7dZZN2NU3xvG45dfMVZmeinJQncwMMCbYR6XFAzGEgyMdFufCiqNLFoxf5QbwzZr1MCxvH",
  "key20": "3ud5DZT3rgh9S4C3X2y9nX8DsQnk1s3mv58FGNr1uEERXuYKDsB43cv897eHPQMEQz4Fuo1mMfLUMbLJPhNbSwB4",
  "key21": "3PiFCSqMPMqQnbH95pRJNKnDBkqtTSJUmjDPocZ3iNpxYHEhLEhv2G8YmAeQn6Q6S64C3zxc3fk83RDb3iN5qXbe",
  "key22": "52qTBkTGhBhiiq2mz3VCqL3jfNwwJFKcpxrX6W6GS4a6sebq4JmXszoKSraUA1vQg1SUXH1X9wTPUxnqRWp8vz1X",
  "key23": "SMrYuKKSseqSLsu2FcbUSgAEPj1L4ZNifNsWoofXLGwEASMfB417QBsJSf5PLbaM2fohqUSQ43TcGpmmPQRyvXT",
  "key24": "42kerHx296HznKxBQ2iyC1hxmn7WjVFgZdK24BQ7dPxsKLiygdHVVAEBZbf7FbTRt3H2zzMSgi4ZWFGRFUf3Zs2U",
  "key25": "3BUFiBDeepXs3byJR5AKa6DnDSJk92pkdj43gTSGqJU5ikWSyG8e6BMw3kXwNtHBd1d6ej9ZF1rBpngdLxbLpdL6",
  "key26": "X1JrAbMMVGxUzsxqNec7h7xDR3tTDKvy2HpukQJKDEUm7HkF4TkvrRf6ZRnzhMYn1bfWRcavqdSCbFWNuw4CPdh",
  "key27": "4GBhcaudMBbFNUmBez7iktbgmXRw9ZmrtvFme1zPGsVyGy1nADXgEWPsR68cosKQiknKtxMyQa5gfSdA3NLER2RK"
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
