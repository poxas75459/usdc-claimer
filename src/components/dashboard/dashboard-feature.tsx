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
    "4e5KDKCZqgiHY5Pr9U6RZWFNuBEC894b9AsTiYDcXpAm37EVzbbPh8BqXXPPPetdUUWF8VD6U2cKimqJZE3aYZCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikEebPnXP686LoAHqrCrZFsq9b3gcWxqqppL9HjZ3zLfEcrTjkqv9cVW7yci7ePgthUPgZHJau6vj7XsLXNKrtj",
  "key1": "2KaUf4iokDo8i2GZWneprYFMX77nzWPF5rfue4GL7HmNg1zVLWEuxsfDUpNRJNd4A4VZ5ZJgRKsHbcf9wiCznX5d",
  "key2": "5p7vgEQabPpyLEAMKsWLejaNJBDb61bw9HvcUNCDdcAMdFEY4LH7bxivEvXytbDtKFagq81Kcxef7GF1N8PRuSR1",
  "key3": "wWweQHModFW6csheMgQu6taGwgkVVgi4DD1T45jQ4RnLpt4FqfkdTFUbs88Fcn94ayquQRTMwqKKgJewZnrUpSj",
  "key4": "2jQhkiRkPSmtbQwETtQauWkEVWFLUwQpi7j8wBrr39ang7ev78XVtsPinw8BMhGHqDqfc7CzSMr27fjFxeerP8Z1",
  "key5": "3cGSvr1wdFZHRdcUBr6iGV9eDXYg2hvCPweetabUjTwYWWEeogsjayKgiQJWHyW3vdfDd31VUPXahaMHkULQLGdD",
  "key6": "2Perrr8EH1CYm7zhP6PvKdsPexmTcxmqu3rEmfEthFpEseGTANQwjaTYqvoj1MWuM4oWBcrFGHHkoWJiQprqgaAw",
  "key7": "5BopPdG3mx6pA8pdgCzfiQ6FnWsLjQC5EYojZn8MmRQLCE3xBWwgNJANSwyDWjPoFuRAQYNdaWmdC7uYUh3T2TJJ",
  "key8": "3Bt2eEtWhHcGi5Db7CxxUt7jUMziA2QEKDefuDXCvgwByvmn1sjQxXuW83757mSm68daHjg19ryvgQU3puWzx9ZC",
  "key9": "4xcsZS8cRDn2ZpDsuwqrcgRtjgv3Q1V3RrL2JAsgmZ48EQ5hh5qu9G7CQwkd9iYjXEaB1wpxTEFavQM7XnGq1Crz",
  "key10": "3aYAyct3WRXCXXAfFQC5Ctsit9LiT7p3KsQXjr2MDwCtf8ZqsTiRtXbXrcEsH1fDuzHbCjU5ci2929rKyXp9v3y8",
  "key11": "5nWWMUBeuM7NFbuo5KjkKYskNssi8Zhei4bnfqUHjQFEi6bjhkZ2PmzYRNGZc2fGZf4VnB8MJkN3dBwUxfeFtdoK",
  "key12": "455fJWuevvo2if341LivbXsN17wmF8vuaBqeTRjCRhgtGKjTgnS37DEotVvKi1ngXjFR4HwoMnAwf142tGffbj1e",
  "key13": "4EMMfNjjSaa4A1bVEfAA4zyeoLZNc31ZGwgBDqLXcsJqJ5XBqYrT3LQDz37rDYymTRztwLLEgXUdVNZPhsscRD8B",
  "key14": "4t2BcSAoij4Gq9oQ33mqkftyz4BzA7XYkZBPZzRz4JcuX1Qf9MmxeqMRi8QNiThm5ftM7SrQxnn5kxeaeE21bQ3M",
  "key15": "4ah5yoiZBQ75XkqHr7cvSowEzjZX8zsYCvWAJ19BEEB5Ny2br1sX4vnq1wEEvQiJSspK6pLe7enwP8q9sg62STfo",
  "key16": "Xe1npFAJVjQJ3TkVjxyf5Uk8SbUyv89jniA5o5TG98MaiYMYm76D7x5giQquAqT68SYhzh6qsQPNQZyrSkzySKs",
  "key17": "4wMcXfypZCTL4fHxnrXnnzsB8ZoTUa8bJvhtukk3oTVNCAsFGbuuYJKaDEYGbvvngbv6wi3DR2Nb9dY1Qgz6gRLL",
  "key18": "wiUDgXUNwqRoYM9ujWAj4Us8VsFb8bu2SVDeWtcG9zgFJnwMR4Q197UkPnkVxkLSxSrNsB5Jsq1G33Lb2yzVrcK",
  "key19": "4ZvT4G7436qAn59dUNp8x41ifwU8ttpQ5fcJEZko8J97y5of5KRkAsjd8jN7DWEtTW4ss2p2CxK8Pwky4vkZTGne",
  "key20": "4Duwp8fSK79dMiiCN3Q8JANFBhekgubJtB9LhVJUwAH8JJdKYEDcgSa8ydcuMdiUFcsWW2x5oZbu9oySaZVjE5tg",
  "key21": "2yXCfsxHFYKq1dk2kGAiHdFmhymMNcC11jQ1wZK3CxNhe3pJ4q14mTtCEk4zm7dEq98rRNp5iGWbFvgtdsehApxU",
  "key22": "5khD9yraLouYeFXbyf9jYwC3yi1Qzt1Tp88JnSeir8BoHgmkvp6ofy8ikZG5G2a1nrbW1NRWGEcdBWZn89igaGHw",
  "key23": "2qYBVTKnKx8uts9y27RkP4qLgADY1a8tbzhLqVaXsbxJngUy2pGCD9WbHx5a3x5smMrvv3hGyz1pKr7KvhSt1eYh",
  "key24": "5kr2pAesGsz8Hx5aYhWST3ew3sV3f3exVZPaddA4ckLecHYfbyVmVkkHzrFCHc4chenBeo8Vw41hnNANanPAZ82K",
  "key25": "5oxmMNPBxxR1EW1cr1aHHvrBFoxP7TGHQuCoPt27Fz6PBnsXtxM9jYuxKNAQ1LkDZDGCAUAtmZdT1kfqj8oNUsV8",
  "key26": "2pChQkfpijdheEsGB71kfhzhTG1qHttY38AyUAMpg9BVJMMeH6c7hj4p61EFJyUF5rYy5ARFbAksmw8A1ktjkFah",
  "key27": "5gxV6DRvWQoT6WF2FhSdc3Zbbd1qZi6yqEk7Ldqp1cK2eZAByVJnRk7dVL4NJi8wys4UMhhXpXx2HvVGH8wdCkep",
  "key28": "dmhTjpsonWd276ojq2cKBckEfsUTGa2wZ8BXhq56Fe3FX9qkY3TN2jHF6SC2vKsCofpCWrQU8D5jekmchvQjtAr",
  "key29": "HowwxcnxfQBXZRALVqXx8eLjSK41hgjoW5PpVyjun9w5f8mUuAvUHkAy7JpkeykhsNbr44xhNxingKgabSki7Wb",
  "key30": "RhNX2uiFVzKzggTboGinY3JYYAfLmWbD8eM8uDjU98ABxVzWV3QpEcJ7ZUx91VYy8S1HWMFgmuYDZvCzkET71zK",
  "key31": "3a4V8f9bJntWknM9rZVq1eWhosiASseTeJVK3HLDHmvkZyZ7d8V1mAHbdf5z39wYLRaHcgdYUEEhGFu4QsHxPYnK",
  "key32": "2RzyqkMyhxVKh6zS6eJuDncXAfHquLFvVeapuWQQmaZB9qE1ox9WPXUnSeA8yHqkUy71PJGQXkL4xCqCM14qDpkb",
  "key33": "tdj8eMHFNKgjNTn6PSW8tpFmMD7kvsSDAvmd6wtiHoPJCgsVMGxUCH19seWfsw6czcZYVoGSp4bcop92Mr7Hses",
  "key34": "5ecQL1914rR8A5CofZjhymXoa1UizT1i7LF78s2i2F5hkEv8qkPRM4qidpyv1miXohqxi8w8Gg4WsKedPxo39Thh",
  "key35": "H8LAACbJkVD43AddPh4f6KAmHHkzzdjE3ydBCRmsyxGN9XTHYFg37XRYQVSawp69y51ps22q9QNom5CjdTjp7VV",
  "key36": "5WiN82bhWrYqFYkqRowyaDVuPLym85xipqettWGcGXpBcrkXjUoXtSxfF4tdepcmGE4GAgJ3M9wWjVnYfwdmBJ7P",
  "key37": "YJQpKDQpgdYsiwY7zvebavMjipMDUnQ5T5u6bDcHqCqwMXK32oEBkKmzXGfobmBEZeBZNfLNdFiC5avuzGpRDCd",
  "key38": "5gnc6wqRSvL2DtSRwtioP77LXx1TrzFhjztnfKVUbb4UbXNkpc8gxuE66QfM73ZxSG4gohmmQVzr48SMKEWVAzfz",
  "key39": "4rBXTP2oXCqFWSNDMgfVbiDwqd21KMheq9jGFB5oGgTnvqur7KUjDMNBhXinWuXGJ3LrGTiUCXbYFS9gemq6JHdr",
  "key40": "TF78BceWKhk3apynq62RZaMG8NTKAfR8cKBS1VLmFb1Nu3WHngV3bh279k1CNJwKX5j486X9z71MhiVhtyK16Px",
  "key41": "3nJy751AshexysUBpEjTtbpVjKBjhNs1LAasLoDoKG1AbcMCFcQKhYz4JF6pYSmR4QBanNuY4eRwqzh31fED3yYW",
  "key42": "7VjjsZa7ttSHCgxwiH8exet5V51TKd1N8gc6KxznfecGayc5jAW7VDvBSpVBXXxpjJCkc9GHpcX1on1RJ5wpBdf",
  "key43": "4SuRtyMRTx6bzZcJoqhfQBdqqhKJdkgpbCzfpvHve82xgg2hUKsLhTBLXWaFMPb7JPK7zEj7uTZhLpK2wn6vuT9N"
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
