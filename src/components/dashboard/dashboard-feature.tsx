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
    "49YRWdiNYE5FJnXSArU3GYvAFiSfXdL4XwDy6XQZfv7YLWxE1QYjD2V43Mf1nZQaJV7T6pnpEiUPpzyi5C75iUSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktdWcMQmZcSynpPWtk9xkPr3yJtnuKFMgyJGJDhCpXXeWW279WCkBfQQboRCvGkdYCLxCnEhojFHEGrvewvohzP",
  "key1": "2of2ur52XKrGmcwDsX5Nk3dauLGypHmmX19uz85Nt1F7zoH3dCCr8ijte6ya3DseRZHrajaK2aWvk5pmDeZ2xamf",
  "key2": "5bFdo3p9MxprMKjmNDR7cii96sa8PjRyif6QyLboDykKDJifB15QVVNYchQVjG92gdRvapK1Z27ggjmmvfgiW2gD",
  "key3": "CQfNmvZV1R7TZD7SPn4E5L61iJg7Chsn8nTkfLpXaa7gskL6AZU4AZcMYnsFacX3mdq8Td6LVF7VHeuzV8pLomM",
  "key4": "5YHMdeJtJdZoo5BFJkHFSn7jnaCesPt4LxME8Zf3woYru9vdgp2QZoVhib6gduGTXuaV6pcSsAeFERmh767iCaiT",
  "key5": "3ibctuYoWUE66trKhxNohFTXZM5asUyvpJJxF4zht5SK6cMmEBHUR4Sg2jWwvNGbfMV6QH3fFFTgfj6EmQ7jUXzo",
  "key6": "2RpoagckYdKJgXN1jehnD474m5XEkR8wpFVe4YDQqF7vWd57aEStpPibxFEvfVrrPGCW8uf4cohDaNHhiqFVWD3C",
  "key7": "hYZ1q3ZeoAGVeahGb4JHwXMQeb3jLkbFXmtDoSnMkSMhSjPXZzF3EmuBjFEsgvsa95pYHWzKbmapXpeFmoCfDcT",
  "key8": "3EjNFE1VJUvg1fvQPTB7EmuuBmEkfVZ3wZsEJzBRiA3rXzLrULM3kfZJcCW1RVwqvWFq4vV4VwVFWjPqQYGYuSvR",
  "key9": "4omPVJo4mcmxRQjexiKCHGoRS4mKseWLBkp11X56NbC2MWeLt15ebtq7JoPnn6RnznFCVQBaVzhEZxLuAfSF3XVC",
  "key10": "4ADtcRDhkPm3MuoXeXni1JUTps8SeXnLc1VWHxDEFKTPWFF3o2FVh96f5qjpKp55WBDwHQHicRxsaDVEa337kUEL",
  "key11": "3Eso5yjmGN4ooE4tyUDBiQfnWwZdLDadH7TJUwxJoHAqrQoN7Qrcr6RBiV5cXysM1coQTQsnofh2EcKBGH7PdZtz",
  "key12": "2LZ7ShsHKyFrmn9rSURM1yEDYPVXooR5eJqTvKeWSd6ZLUCgZChsU7aGxRyiG1JQxiEg7rrfCxxGzeChuykdeked",
  "key13": "3ZXsET5zeXJhvviAMyJvcirVEhgzZeKPuYkSWnGCbdpRHZNdJVcZCU6W2yLjAXCgCspopzufwbd9u2dPdQzaEeZ4",
  "key14": "422q54SsGUS4viigkxP4U6yXtvqY917VvDUpmJoZk6msFECmw1DCk9UZs7tmSo2wp5gcaUEybzzLaZsui9AuT3t8",
  "key15": "3My9WEgiWExUh68t4b3e9vYNa6w4D7JqnwXi3t1AkkzW3WMJhb8Ak5ym9bQ6hujt1L1TAuAVwnNjAmVjsx26XSEz",
  "key16": "3BCAZaEgc4qdLjSB9a1rquiJqQrAQWfxSLbuRArmNuedhcfFoGBb2RoN4A62ixo6T7gnUtoNbVofuZNXQ4qLVSbD",
  "key17": "5o2wbcFn9ApfxEYTHWmuri6EDUSx3VsfcSz5ixH3btv2Xqw1MeGvdzUP9cKxWu3DDaMefyBHw1X76Co2TR3Lymto",
  "key18": "2MiprHrHkwEQ6QxFJnAaBo9fojPGiFxDg7x2XZ7ZHReWZR4Fb8TKj1PeXyp7REzf1qxaM3RXChUiu2TT5pX3Shbq",
  "key19": "384iDUidELfhu92mN69WP22P78r3L9SgqrAKUt3PjVrGMdU3QhvAk6s2xwjrzuACZU9Rw4LSaBUk7oKoNeQKGWLT",
  "key20": "5qhew93CZLWYvtKLydZR3LhK6v7nCoLkg5uqWEv3BDAyj3s5CnWdgxY6mw3p8smbLXVbwxgVMdFfk7T1GC9DAAd9",
  "key21": "3hibuWPoHAwUdQD97VThoDLQtjYACD9zT4NcmaMmf4qKvNLgZjPeWcNisR74GQ2suMJ6K6TZCVLiXkkzFEWs6sGA",
  "key22": "4FwtbsRFhZRe7WuLLQ6PWCAYWDBxP62JCbezkPZ9K84STNNiudXbniVPc5HqqKDe45bL5C9fiMUZUWDQvNaXKQZN",
  "key23": "YPzmhgvxpnD976Zdt7Y2xSRdxTjPvxVaetv5gKnpyXYi5yxkZFuwRpQJQrfdWN8GsFRbwvRjm2AVgn4TQyRYt2W",
  "key24": "3Lb6Jmckmze2BWGD7oLqE8YuJqqsbFbNB9NHjpDYRvte8DYa4ascfpFi3jkMSBGhwyMjFTaCZH7DZB7aAX6kANcd",
  "key25": "522NAtFd7wkn5NAoKT6tBYSAA4tDkHoyCTH25BQnuABFqNkdGH6V2YB2qucvx8zSD3qgYYdKUf8jPofC5ef42R6m",
  "key26": "5vauNCgohMVshuyvBXmxFqBt6Sztk4w9Cnv48oXqMhX2DXymd9XpJEpyGjUZrb9BB9RsRJBjc9978QkXZP8fYTrr",
  "key27": "VM4ubEyq5WgqM9ZjcFv62E5bWBvk7jiJUFhb1x2xM5XibdQzacJgXn1GVyAJqcAUzRPvVzoN4pTbYDFoWiABMFT",
  "key28": "2GCjsNqKHdVgWAN2XzJJsfcta7sLg4FK1aJ2PjnfXwn4TvaJYQAGfAe7m8nzwGTjpkK5S8KZwdQ1jutXFH4V1Ux8",
  "key29": "275uB2MCMvjXV1FTar3tpATZc4Pg6z6BCVcz6pZr2i1LXDUvFFWre8bz4WUbVijtrbLzccrfgVcc151tteeNF3Kt",
  "key30": "4WKoN9u6PGfwSdwtA9cbnUAN2kxrFG7Zs6TUU36QQYmDNPPXyaf8seMemRcbmVgg585aUmxFkEHX81AhaHm7narX",
  "key31": "2LWaLcV8y5G7JrRuW9fBKPWAGBbzPNt5DSnjdybA6KDaL5GEaaQDrKpXGyXQyifoE5NAuCAJ6h5bJuawjEb3z9Dh",
  "key32": "4vQwtRKvtMDq4qwnjxGKtLbtzQWncsAsWmPKPKzfPSAjutvVh5YRKCpP9rKedD5be1dtnmJDdgVoMdmPES9yd2b6"
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
