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
    "49i8Ww2rMmut42U7dxwYBxnoRdxbZxEkiQgzcSQYcDvym3vDNiG58VrfofRhBWwNB4khYFG1rrYTBoLSgdBEpS1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aWkrpbWjZ82RHU2aJTaMcQ2EMCAj8od9hQn7PPCn3MA3UMgh7UqnqxDFB6qXxin3BB2bedNY7xSRvnHDdDvRDxS",
  "key1": "52PWiVVvTc8kKCbFWBnUNiUUvFikKa4En2WKtj29VE8ddcW7RbyzbBsVGrb8ibCimecTaCTMFE2cWgyEfxFbw1Rw",
  "key2": "3Wr529VYGoQLG6sCZWyh9b3yH64HRmyP6CAYbqmPFPCzJ8sPctALggkGDJ6vfniAjJuKJ8pgE9p18SYpcURihUuZ",
  "key3": "2171m6EgT1axcczxJYwyYGQHmGfzrxxXk54sTiWp5AnE87eDXo1i5TXh8YfhiW7WPxCsrJdoUnc1i5fid2bCrmed",
  "key4": "4ZcY9pMvS69raE2ERKwuNzrbMpaceB6AYVzYpdARtM5ysa1GbyVW1HxV3CBSG1ZZnaac6YbzC1uH3gsHTUU6Wf3h",
  "key5": "3QPQ5gV9Bw22dEnhrjXY1JgTkKmUq5uuneJMUnsa713DoQVGBkYxqYrDmKhjfKt5dTAqJZyiSXePEBbxhk5YybTw",
  "key6": "5TiVZ6JNQ2zPwaJqwVVjVjgoL1hBm3icn3w4MNLtNsHYv5YM6xKnNmq1T1v9af3uw8RmA2L3qoQgQ2YuMJ98MK6u",
  "key7": "4LAAPYaAH8DV1pNqWrEjpFQce26zbkBPFUo8Tk93jn9VjVZCMZsNMVibQz9Pc93euyeheZWpjuz9ZqMPENC2D2J4",
  "key8": "66rXK8D3sy3zHXQVrBQhXhbiLVFQ91KSoFQmBG4GMABTNX4PX2smMYwEZHA2SgAtNwFwdHVRCJFwpBXYoJfRTW5m",
  "key9": "5bhmxipdN9b2cfidbFfLmjQndCFg81vob39J74RV2QjFzvAUAFAYqrQfvF2Fqsi1tFVbVW7P14r4EeU1fR819VKL",
  "key10": "3d5u4Vne2Xk119rie7How2o4pLyL97W3K48c26uDRaUvZpwu13XzaJDdqKvjNPC87qVyx351YVzTxgVsK2kLP3nV",
  "key11": "64tULMsDirLkp9aZUiyjLFBqg95TRZ9biRdSSPoPyp7B4iKka4csd16ms7LCY6UcyAKydrWgDS2cYbDA9wUMoYHR",
  "key12": "5UhBt7YAKwtgZXg7tXNCWUA9cKcSXiKndwB6oTCN6K2Hbu8CLRSqtFp3LNeYFQecSoohVmprgB2zncKZPTiegVUm",
  "key13": "63STcTwCvuqYqoftxFNqXAKrx4EHEmLwJd7No7B3x5TdA7ZhfE263X4SwJq2Nv6FNQ8Xx8i9b39T3SPr8mxY3RPF",
  "key14": "5c1GD2EoYmUaqTGma9zkb4SvMYMzQN7eNFRKezkSbaFQK5dJ5xpyDjAmu48dGdkJEzGhu5LWK8UZPU5eBNRcaJaD",
  "key15": "32T5voskmgRosgq2dQ6cRKuVcVnTemWkfwo7gw2wSnLbhoYdqYKnVKaT3ikRJSd9egqXBtaci8c4jtpbmRK2gBCv",
  "key16": "DrUU4X477Z7keian8n3jRk4VWWKYF4XQZCNhDJtzcH5o7VqYisZNRs4BnuAcmBiDdHmiBUmHaCLXU23VooAbbNS",
  "key17": "3ApjsrQNYfeNto1YY2GqXPAnzmrBoHiKHWKtwCRd4RNpjGSxesEiRyDzFmPox7vjKEUNr7M16beLNssTLjAEoE62",
  "key18": "27R231dzFtompbC6N6rFTzPpn7TkfCndfqgQpdorqYp7EPQvEEUTmZif5bxsvJ3a75ELL347CFdY9auuv6L55ziP",
  "key19": "5jvAybHpzJvYVEKEjcvf4RyPsEy1DBTyT2ETk4bNZYYsVL3gBDKD3zy8riT2bNEgZ1kSrGkay1VVYDS2wehSTBxM",
  "key20": "2XatH6yXHEJMBXnV5NByHnqj2jJpawYyYRFiGzjppXy7J5wmvFHt4ZLtFr2imWr4Ndemf6cgeXhoAkZSK5Y2Rmgy",
  "key21": "F67rDCQMKif7gf9oVN2Qt2EMkqvX2zC1BxkFaxQ35ZCz9oo8A3Uf8w6391MV9F8A7f2Qfsodhp8oVKMJxEFjsiR",
  "key22": "57AnTS4i3Fz2As6udaBtNTWcAUJeTbbvA82JHrPzAsUtDwxMCT8hM5NdJZEu1RhvV1rcARyuuZjUGesp878zLEL2",
  "key23": "2GcjfxnaRMCeXv3UUwNM9UqZMmNpDhsymjcajrzbsSz7A5DuVvaZqDRLMVwMN4Aex1iAgmBr7bmapMyQio3gozbr",
  "key24": "31NaX5c2CyU6R6yZaWVRpoyVL9zk717KhCr78FiN8SemHg1S9aR86qw8SHq7ddF8f2Rm7GNU9hg9n3ywki94Lv32",
  "key25": "5gjfWSWC4goYkK9BRoHHatCetfCq3BBQE1WvoXKdXpGAYqQD8t3JuHN5hEWLY8gpkyebERtypHNQ6GbRg74sUUxw",
  "key26": "2XZTnSScijSiPn8GE96zWY2cTEh3rRAcxCkXwU74xv95NE6mFT7mWAXagrKUKx6qgcvpaJZhkMENzUh4BcE7D3tR"
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
