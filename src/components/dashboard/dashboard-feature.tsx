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
    "bjAApnN9g1MP7kDx34BaFf9uSseN7rpm8eD1AZy98jqFDiBTxom1bWdFCxex6BWbTG6wBGNFctjYFgoViRqxCDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDMTQiGEm3JkKqpqrdkRhWUWMYEVktYb4mfsu27xe9HQ4hLFbEMQnSNEfw7u981D2okGwMV14gVyD9mEP8W4E1x",
  "key1": "2XbPfvujS1obmNZkumqkp6PAoUzZt8VCggL7VZYrMonpxxGQLMbQDnWaHeDrwRrABv6jjbKuiSbojh6LdDbHBQVQ",
  "key2": "2sBCNbinNfSsZ3rd6np1bvCbJBE6vv7gFRfLNqnUtfFW2HAXUB3nS39sfqthrd7tEpZWVq6MQ7uMS76zWP8uCqF7",
  "key3": "4tY1wJZbSxFW29bz4FXv9Ph94rc9jSaEXCjSX3m4Tu8YehzJGnh7SiX5DHqK5dJgxkTbjTfohMrfugyC3vK339A3",
  "key4": "3TgoAmVZ3VUSStxvjs3FQw7MhtPuro9DH8WiVXzRbQ7KdfCqMJtdKcvazAwBNpqEvEqfSoxK9irj4wALwrE6127L",
  "key5": "5WAFc6Vt2XqEwtvU4Vuikvbe2Jy91nFCfLRozHWz3fxoWpKVwVD8zTg66onBGV9Y2TLEfEwf7fyxaBUuZ1cbwMhD",
  "key6": "4JZiRaGiFdeWeqYa7ECEGh1WvfhsiM131SGc6wCxev1VUgyyCundYMRRVSkywnTu21j43kC3ziQ8i8hV4p9MwNdB",
  "key7": "53yLf6JcGkSb79VSuiTdBMDg52Lt6j3yfM9GEuzToDXJa49UUouWFYYsFQo6vdwec74z4CDu3rZ1H63rjwWU1Ks5",
  "key8": "heTfsNsVEPxXwWK4hywP4RcrJV3wH3Nzi7716rnSgZNiqMSpue5C3sRzGR5VaNG1DrWtxe2jsrrngZtwE1wsED2",
  "key9": "4KmTP6pkmbcYKiKH5t8y8vJzZZ4nUYDUzLbgkfKYyqUdaZ3GXHkEoMZgp9kmTuQKBn57shdCQJAFe7Q5VMTNgzBn",
  "key10": "52fuBMS5aJiDXoZ5zzURwEHni8k2hJ9C88uavPYnR68LqyB9iw2HXNXHRtmFMmrMRVE7iEzDzaDWgfQoUHQnQjKB",
  "key11": "3swC4DrJuM5iR888NXaFBTTa5y3xkeMQqw5bCpuRzG6kQw2UHmhhPtqeEFbYymoNA9564fqoEYFjURaEpwNrbJuE",
  "key12": "5Ynj1Mcs5UBphYqgv7SbHaNUYz9jq3h5wuaS1J9dHHu7QsJoQ7fLs66jiznkPRQSKaeJVwNfUFmNLaNYe16Bh34t",
  "key13": "2tEoxVWcn6Xvg8mij16WgVTTU1xgw1dC5QuiUUfEFqLdJd5RyyoMHzTLStCqrV1jyd5u6p3V6jjztTvAgF17ZWsF",
  "key14": "215GA8o488fmxytjhpuCV853AtWMGZgdgPgeQiUUHRxrecmCWW2vxNbmyHBd2VcCB9jrTDDm1Yp1nD5Luf49pbsg",
  "key15": "4RZUXoHRgrmpLupRDGC53Aiw9YaPW8tHPHKYkP1hWqfAYHaxzaoxGuBViMAUKtqwfdvzjagb5qKexN3x4TvTuUjU",
  "key16": "3gXqsGuuyyZ7V8PRrtSyVPFxEnzUCz5jBkT7kZ9Ki29DfPoGcMnVNb7srvUod5YuMWEMLmYJ629H8huEHGWf768N",
  "key17": "GfTva8HhfTA7jh9Yk8tYbeYC8m39S9aUAwNj9A9mMUyJv41EtNoHJihtsKT7sYvhEbJAyqxxN7Z8o3N9QtKc5HY",
  "key18": "2oTYV7NxDwF8hNbkHaAm9swVyawCQN7oRkDbVXL2kjWSrcEo4SLWjLpp13fQ81Yq2xooyYefoqXndCujoiezF6qY",
  "key19": "N9Z48JAXoLxHAg8LDHrxK6H83CHRFqFRxTHHEnNWK21cohQhR8kn71jLUbUCGUnjwGWkzHA9fHASXCC2p3YjJAL",
  "key20": "5oH3fgWTuW1HNh8xG2tVdcCYjRWDVLBBZhGsj9DZCidScgV4szed1jip6cgFmbFsaifpauSLcPWg2Piesy4t4D5v",
  "key21": "okkRXZ9brzLqnf1phvLkPkzp7owrDRJqomAQzC4nvEUGsaFrpjt9XSZbtZequoBGiiiF8mXjJHH16GsF3D2sii6",
  "key22": "4MSxfNDcDLWtz2eCfWefNGpcv93xaZ9XuJE3caZs8wErHXuv9YFqVwUKLCHWosRxtXM6pc4tCBP8jQRDJCmsXenr",
  "key23": "P5XYSwA1AtD5cJhncWzbt74taHerDPsB8LXj33uNaqpyK4DFZrZrSuNUtE3kXkBbjEg38ifXpfyy3C7jm6xd2Z5",
  "key24": "5DtaLXdq262sy5AxBjD4ERwbZbUH7kDFcfsE7d9C9ihoV7z42SL6KRwKfUQCyv2f1TmEftTdyLg4TYt53DHF5F1i",
  "key25": "4LTMbr7bFsnf2q5eXYNeUH7WNVdBUWg61F6popMsknFjXAzkL23CVWH4pThwU3hmoSTcbKn3XYMn7xgZ7qHTdjLW",
  "key26": "53waQSzhuqTtU3QuhD7GP3UtA9kLomRzQBCjDvp3ka7GCjzcZ6ggQXNfkU2jKKhaTqVQLqqa1EfcPLNGiDzzUcrQ"
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
