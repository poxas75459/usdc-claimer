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
    "53dV39SAbjQvte7D7aH8SCkhXiFTDzXtJHYF211nsWUvwj8FGyqA7XwA7QfoeKSoDrfWuGTErM4rEyXLBCytj8Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rniZTe9WecmPaVNB9QjG9UKqsB5RHnndUzGZJQML2AN6oSShkKVz1UJJdGzpNndXsPpmcSTeKmQuDNdVtNe4EjW",
  "key1": "jsFx6gA4VfNctnS7G5gTQ557Y6unWoUWwWy8cjtrWSaDtzGDyrUzdXHsWiLHEkqEe21eSm9pJbjhd1AjCDJ4WbM",
  "key2": "3ErHmbgE2itqDVEetF3rCVk1rLtEvqMJubDGFAPxbktYWVv99A5ePzjDjUhwvpzD6uhfZCLoc8cwcZQftW2x5sGw",
  "key3": "3zERyCiYTKN7u19FKvkdeKUnGRST9UB6L6E5QcU1S3kHGf7HH6DU3VyHeLYCvm2CMDyxtPvJ3Dao47X4ELw74ohU",
  "key4": "3DgJrkstHv94s9t5q1EQkSQj72VToRr22Lo1j2hvVXFL5yee6ig3xriqgP9EhD2TBna2QSXNAmS7bt3CJXpUrc9o",
  "key5": "ZWqKPNFk2TPEaqTBB8dwjwRwvcccgYq71TBdRnPQr1ajUfi1JxvmnDTfwBB3cNsTaSLnwdsaRLSESaVWN7pjYz6",
  "key6": "EQi2cJ1R2i2HS5pv8d5KCPytZZ4JHzZ3BsB5FrNtZ9nCmw8n1B3gJiLXucHBaogY5rigcxRreQy3hAMyaddi9sC",
  "key7": "22aAKrmihKBho6uGsdb9zbr8tdkysK5h2Vq916hraQkWwDh4DoHmWw8Uawz7CYsfxeVhAc5KQzZ5P1rBtzNag1o9",
  "key8": "sKVw7SbfcTMaYju9icYwt7RWrmKv284gGxZG27DeRBzjT9n6H8EQoBdwnYHgh6qdZZ1g3pnG16WybjtcJCMyjWp",
  "key9": "4peKXQ5TaT3jcyGSKL6WKvr3SX58SCqpE3tcZj6kx5RX2E42oWY1hSSuk34ETLFYS35Nwi8pbynfpVaH96yYFKVV",
  "key10": "5DyMni47cFPuf6GBksAUR9yWg3Ht7rVEDsoe5cxiVjTYFpFv2yR7iSueD5a3iHXrBUZM6BdpTJQiHDQJb6QtMWNj",
  "key11": "5ud4pxRU4vVw8Y8zZWaDDnaq4gUL91GsJGPG8G91E7soKUmGiThJet1cKuyZwxPh5XeMCbZWyUamMRrwaKJPhnK1",
  "key12": "28wh791vqFsX9dyU6dtzwwQxF5BYCA48ArLKQMpSn3kicMTrubr9U7mCWdVJ5984AosHgcFH1fMDGZQkLRqvkFcV",
  "key13": "pLwAVznnXRgFArjWPR5KvLDQb4cGi2ASBpcowL78Vzd2YxSS5QadfMxeWTbBayMijRmJ35JjgKcqDd8JtfPj2Rp",
  "key14": "3AZWTmCveFcHPgb91PsoV8ZcX4BVXK5e7QincU761wsQ6hP8pTo1fAeXhhL9BzYTm33mrHzyLfbqkZWHwQtxyKFs",
  "key15": "2DuaExT5u8X8azUbmVA4UmBktLxH725WZv6MU9sWEn3e7dVymVoqdpRLLt6egRaFQHM1wruFntnrydP3mk29F81h",
  "key16": "2YTaEZe1j1VwGnidBkKeF1npiSgaWao7XfY6XLTNoCSSwV7oVB48PVeLFxnUCJ1BrREVZ1wqsSBPpi2oxrHA6HYj",
  "key17": "4FyfcrofrUkAHHvoogsBZEBUD6QgALK5L4ytEZznFNkzhWV1kP6vRotAC6TyQsYGEpwtCjUN3S2vrQWrzpxWLci3",
  "key18": "5zDXPspmgvkswLq5btVRmVmeezcCo9gT7KdkfHeCFsNEMrJfoMo3yZ7D39SjJfKdqSNMtsQDrbLvGPaS9en5bxY9",
  "key19": "56cHXfoP2Ggq85r4Eyba8LhEiPNcKHTwVE5jqehbajVZYnd8uQf3Zk3DdqXrPgWLuDebZtjVzprDjNHPtmH7249z",
  "key20": "gTsgvuCgwHkuzgytShNTqkZcVDfA295hmoEHHsc1fK2KAvaMA8Xj5USSuXnfCTUMACoYV8BnZdAF8kzE4B3hWjJ",
  "key21": "3UqnV8RHE9T3ebVyNr8jQRecEnvyUVHi8NumcvbBrjJh5eDZuMgfzVTGnQu5cLFWcWaX8QbdMhJWTBrD1oWjzbqz",
  "key22": "5wTUHkxhtzjGSuGm1mi3XPA7C3GbSQmBa7ztEiCzzdiTjhF1XMGaFGaRnYHaPJ8LAv66B8Fcja6fvGE49UJjAw7G",
  "key23": "ZhdqxVq4RJN5EaYcP2gnEhrSPRTViywkhdAt5kjPK4hTS6uPdks1xQ3kkG3NVcgEyNMFVxXuj1fBJtQs1Rau8Up",
  "key24": "2TwAT5Es34U6Xq6kBtm1EdaP5kwcnhkiei3a1GMFJeXuRYraipY8C2dLyvxWx5oTngnv66oarSDXBAg8PBqoLwcV",
  "key25": "4EyJ8gnBfjHRwuiprrgdsGoBhjsrw1zGQ1QTPqv5NaFXV8foLmcMdK6FyaW3gGHdbRNVRPxyrLWkQyiXMcLQPm65",
  "key26": "3fu4yoD61VwkARAJcKChT6arxNpxq8MghVpaX6nJ5Y7JPxv51LqMsCkjmdxj3zevVCPgscXkRzqm2QKyQCvXa346",
  "key27": "4rapJCDrg3cNWwtGR8WFoFjqg4ivKPGETMynUCdTD3CNQcddiDcAx99vaydQdGo3aZRYUtDFe5dT5hR93gLiohuf",
  "key28": "5BNtUxiadq6ig8VFkGCJeWPN2JMm3vmE6CW9NQVUksyLi3TrBRJLtjtyNQKWLNUADptxLBNz5knQHurahBopTdSn",
  "key29": "5e6sAPtxbDm146D8uJp3Q1FWswZQKGDiA98yuQfDSXhirgV2TmqzvzQtqxaC5XDzmydY6kkZHLwoTHNCWwHjZ4cj",
  "key30": "3BPD7MzVw3rPKDWp8o2QsqniQYGLb99CCF8L7v3nX7GNhMXiuKTrZC4YvRdQ5qgAVoyeQrY28aDNC4M5k4nePvBG",
  "key31": "3fw3kts5f92hKwGfGXZipC9neGD7dMYjLdv4NLx5PgXu1TgUPBbPEVL3tSDKcijYER8HLBhwZdQbSRPtKGkb4zj2",
  "key32": "RRRwFbow29DtqncgFfdZpY85soFdyamfeLMPVeU8tw1fUFAvum2DaMDz196FZMMA6Jy6eNtv9UJK2L7e4afiivi",
  "key33": "4abikUhrQs9kyVAEkQzvYZ4ceH5MAZsqPhp5tySGjFas7GxefrY1Gg4qke6X4wk7e3jnjc3hZ5sfxzMmf1E22dUf",
  "key34": "4etwNN2Qb4uhR5uYkizWiDUGPHLKPGKbieaiCqDhDvBmQUT8WCzhwCxP6LBpTr6pD3RPEr6NTh6x8rPGE615U9zd",
  "key35": "4bLABLf47WhehGLWh27mHyVGW3uz5NLTVvZbi7zp5R4Rk1JKk6p33Yjcv4P4iwZ5eWDomJah3T8m2iEHbcamxXcF",
  "key36": "5DiCBeTYNhCeRbhiyDEM4NSzpaYJG6w1fsZRV5rMF1mzBijPsMQQMKa1nJSytKh1MDecD9YuY8McaHgGY18NBtfG",
  "key37": "4Sr6GsSZVVoan9GGAx5CXV9uHd5WX5E1RF4zHhzLTiGc8zSHNvBXsYtDjf7Dy281QyBy2niL3VmuTLPgKzhbGe6B",
  "key38": "2XTPfRd9D29Bp5jRjDXns3ejPUXdEeeegzPq2xFLXGCbgVNA4gQtuieQDZwvyj4DHJwyZS2UVQKxMDjZGAFh8f5g",
  "key39": "S3um24EgoC1PzfpK8Ni98F2dPfp3M4uLXtRnKpEADPvRdM4D3JYAhGu5id6vkaj6HD6asQArrj5heC4LERSVNAL",
  "key40": "31RwkEkf4pDy8HhvDCJk2xWaX3RaAzwi4Dwv2MB1ve3YSArst3nHC1ZmSV6JNXBHXqQxnrqYdoYi4nhpApamtZ9V",
  "key41": "34sSsSsmL2KjAvFUera7naFpYzHu4DNYJKMMTqJUM4QYyfaERE4baSaLLrrjQfUUrxFpKUqUDJc9JzoLXfD9MgDE",
  "key42": "N9kU6JFtC9VQJALFAj4i6cBx5tdLTGGAnTu4QP8Deu8p75bC15sBQPsrTj7vUbqymK3ACsbyh3Yg166Pgfd1Shu"
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
