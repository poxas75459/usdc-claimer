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
    "5tM7xJxBLkyxRaAMiBuRsQDdFxP5ZBGLwHTa5cvKAiemBfu7BF9NRfE1z2bb1xCeAGDgLkHUNGSW8SXSp67yCEM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36L6858a6jsBDsJxXx2bhTmChMZJW61JAZGTtcxkgkubwCSLsLCUZH3C3E4fDV5gSbXJQebbvRjNoUNeKsySVvsk",
  "key1": "2UiRoBZCHVWEHtwgtFPbwt134APZxubotcD7UwhznC6M96aKvxpSKjNksF2GkY4M8cffWuyhJiatGheY6LzzTWX8",
  "key2": "5cL4wuCFm24t1FqnAieSLZLmCdA8Ww2PZVumS6wDCX3Ng4qsLD5ANkJuYp4PCtunigatjemKH3Ts8D44PwmmayxM",
  "key3": "4eFGLmeVANUx4iqfh9ygJPhLANXNhiXYpkNKDgJk3M1AEV3azg5Li9P5mW8gTLVau8NfYfphUQFUNLMZTRzPweQ6",
  "key4": "3xq226LLnx4xZZGGXdSHSA9qYAZviwNLwYBCrinujAmjFbJDbGMaizzJvYEThEbZCwkm4eraCMizkJe2rqtnkoE6",
  "key5": "MgGX1reiYUTTdMaLDeTJEKphTYeHyAzkiQCbwzpZRPrtevXvEmaXYFBVKBQTMZsFnkjnJYQ6NkAbcUo9pgexUGQ",
  "key6": "349KFNr7muFvvMX5tPui3E6LATfgCnVGsmrUs1DT5PzgrhQzw9Sryq4JVxZvnR22TkAwoSXQ1eUrg9RbvfS4Mep9",
  "key7": "4wxKdd7WRHxwQDHqqTCFZq2hwCUVDgesUH9y2bUJdKKnRZB4uPwcxUqYwhC4SoK97QS7dXrAuucdFdD1gG4g8q3u",
  "key8": "656m9Ee8mJngy6zwCygKrmYGTqTyFKpwZjHkwFj82efuJSLjupXPk6QSEiXptvke63jpZ9zX8Yk8qc7hJFgyxWXp",
  "key9": "5zMUvSPBhDNMaW8rJc57Cn5AnXZDSt6jseWW2ykBHyemfEgz4dNfSduYYVcoiC4hyS65xug9wS1fmCtCHrYvtAjA",
  "key10": "2FEMfoazVYAEL3meX9oASaim4mFsX8Jy97T9A4LUpAc5JLnHaHvtYvfunNKLkZjPQcYA7kraXFspGR1oEXfXBnFH",
  "key11": "2dQw7RSKrphfk4z121B47kftKVvgyF5nGUrAJxe4AVURV5STyPYk7GftxzpmWPuSHKoKX1L29dCMFPELCHH77nN3",
  "key12": "w2mn8n4GcqQWjiZMAMJtQTEbgYtFFP7GgVtGtUXTftmbPzVybjtrZFAaUtQxscgPvnatdWCwFgStGq8w3t16HTw",
  "key13": "52vpkURTDxsMaPuGtdftToBbzLP5PTehqJUyQBkBhZME1R2Cey5bh28CWFuZFSzFVRRT3RETDhUbbvPQTJ2ofVwh",
  "key14": "5QMvHa8DatSHA1ikrDDDckTDSM1HDBNaRZAGdyi7mQSoJ3maeVVNwEGBtS6BtJJGdHMWazVQV4RpGtyfFumMy9sD",
  "key15": "Ge1qfQx79dfRGyVudHjc22ASTkwvFyySWzTeWLcbRnZBXuQV7N3wy29ZtQNRuxJJMDpBsSachSjfB5yZRYU9ckP",
  "key16": "3kbFWhHNw2HehPM9ANtUJyEGBqxp8JT38v7AwA2mpkbPxEvPK9uhu7eVRnzkRTJvkquPNoY9VctYAp2Ay76UASkJ",
  "key17": "2noS8de2VNX2wdbowynKSauR9TBPG8hwprTom6NZRZk1y9qwLyYDte2x2QbhJNcz3saPkPmrbaxW3e7hFmKaQg2c",
  "key18": "3fDxpiKrMjgdAaXSwFRHiVp3Tc1cs5FiQ1JiZQafVpjp88YnoUM5QToeaEJxd75Ym2aifjKbSKRSCqPa5QseSZA8",
  "key19": "2P3GG6adQhxUvyMBMxrviVsTiwnjjRZLB5EoVefwNpWeoNEJy2fRhyPtCtXabnRmoDsgyi6vRVrXvGEp5Wd6VjbJ",
  "key20": "3rrYz68ZquTYfM8ZqPbDYjzGKmk8fswPXwM457mAp5BivQLXvK6FzuBxjujXFvQ87MvvuaurrBPYVgFvbgEmxUB6",
  "key21": "5DAgNTFJaEe3eE1kMphwMnMGP2dxWE5vSVJPnUjFm5mDohMzQu5C5UYJLMRU5qGgiXNkvvVicrUVTAZiX3WtpNys",
  "key22": "4YDqRYQE3EBgTmHcdd4KUhrXSGEXW6vXMgNyACddoLizgLeCst2ew9L49dwh4bbPzHy21nGpY6vb1pU7VBqYGSfJ",
  "key23": "2kuBHg4oW5mVmbbij59sj5L5YGJQarTTJNHzb7BU1Wz1TKY6xdV1kqnp3iTNZEoP24YQknCwUTcrdoL3rtWUysoJ",
  "key24": "2SudUpyAxMTVou562XEURrYQU8tavueXvjnEAfr725GR8NKybh1PKA1vChvdFe1uwU69E1XnjWTzUn8toRgkqSsu",
  "key25": "mnsQDcTDXfDXxDpuc9K2XSCaXQeSA5er2BCZwEoNhVcxqXKaESh9cCZkLrrfqdXJpncmRL8N51NT2mEHSqHehvy",
  "key26": "3HNr5Md9Go6Puw9gafd2PxS8BPUCyMfC3NPDTHQ4pGxSf6dcPyzeBwGBFxxrjCARqFLW8kfiCsxxAaFBvZUWxc4G",
  "key27": "2W98CFs5saGzNHNwSk7vGAnpSzcZKXABuYThQZKz7FzrYXWiVFPYTmUSbFtgJG4GgtBQsytyDvtAcygMMZ8p6AaB",
  "key28": "34eQhXDnok85KYNGMpJB558Ws7SUbYDuEUHZdJcx1BA6s4asyL5YMHXwBfwVPfVvWsCHm68DkLyXU4ePy9y8bdB6"
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
