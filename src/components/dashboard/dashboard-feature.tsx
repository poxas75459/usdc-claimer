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
    "2ygWgP76xpjMDcFNupHYkZeeGa678dsqt28yqjjmHFNPE1pmveYArc957HJHUYoTsCv3HcLhh8rUHu9c8o65tD2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vsv67sJLWtqJeLFWQHejw3tsmFemUCyaeCXMERWzybwhNTmDAcCgzg3Dr4gmJcdF2oH4vHXaMY85nGBTrdRS91r",
  "key1": "2Y9RPabn7UFdvR9DS9mfkirnLMaMWyYRiP1CSQc5yk6A5eXMdkGeRYeTNhKK1jGovDcQQNYNwa2PuryEbycUcf9D",
  "key2": "4KFai8SLgkAegmGyTi5aLrk4nTcNJmZsYfwRztzpxhKuFNiRpcHnuXEgt9kYh7uPGr2vVLPTCxDb2UrwonQpuqML",
  "key3": "5Fakh53wFS12BDrsDQX4bHy637iZPTP3p9bAxzE4t493o5UuY5ghTpVM5FBT9vogDfTsrJxZrvr3pKwT4GutHhfz",
  "key4": "CNjkSRYCZBSTPXPoHWGNfvJx7HAKgTt52MxZaot9wrrn7dhdBQLTyexKs9V8Uokg5qvoiEsWPhJwuMFqrrVctRR",
  "key5": "5ydwnkYFj1zENtJcKKtdDJhVAQzZwyVP6a7naFdU1D533A82HcWPmGVHjmJ3KgHa7GskQGBsPkzX82HAyqe8szwh",
  "key6": "2twvg3VHUA3KCpCKWWJZNoTFqhBYoqtNjjCEZ6FfDL8jrkvTrZvMH9JwohMXSPq5XUYuj5fjuC5GHseVGAvvMRcL",
  "key7": "3BuShaEKyyv9Dp7sm3WqLmnis2ZikaMfSDQqCGiUqfUvPS1Qmnwup5g4YufcKTcTazv1qRn88eLekCz4jPV599G7",
  "key8": "2pmzsgXN2aScXKwmxbpRMonHny6a64rSxAnVcfghJ23DSi6hwFpQ8Yo8sLAJ59pkgkymNxEff996FHhes48uYeTK",
  "key9": "5V7gmtgXvxwfGEJMMbeDKtf9S1nJJktEoFwj2kNTMkTC5Sn4zCmuy4b9TcLsSF1tLxXVLsjCZfKvkoEexeiZSRpY",
  "key10": "61nr4jQXtw6kxhyD6jDvxe7kLBkVGvaLHeJ4nBz837uyoKgtMX8yCgSw2mc9pRd5QbY2nv98mem8XjvsbCu7eBce",
  "key11": "5r4FPyYEVpV4dqkLJzZgoTxnoCCd9SF6jevUdy3ATM3uWTeNL3EVyxDoqJs1HdCyuafABY4nRtFEz5RzSUZZa85p",
  "key12": "c9Xt37xpBHcEEnx3uXFxduPwSsZnvygdUpuuYiPoxKrMyf1D4LMLoMGFYJWNCMEAGg4f37bHCvwMKLe7R9VmRBg",
  "key13": "2kV4baxaECpDoGttFkiPJRDPw3Ej1hWTYERh6i9UReujcbsR8FWtjum3hWxuUbcNUMyrGM18pMRv1SW8sL31Ncxj",
  "key14": "2D2dfTVgdnAW6GvJ2BVF7d5bHrjmT4yEzzsA3yff6wBWKTsmjFqXPxbh56uBZrYZ5fAHTEsMTX8bEf4DodKoRpAe",
  "key15": "wPABCkf9VbxJ88qqMpznaEWgDPgnmEqhCCEEJXTJFv21o42YxzwiUTV2QrWePGJvydmMxo7zU1VGWUzWADAAH5r",
  "key16": "4WsW9yXKfBBCFp9ALiUDjG2LTQaq9aeMmjASv1fxWazBmGUyQdBZAccXCGsBzKkMfN4dHnXQzcQ8NAb6BALDikry",
  "key17": "2LjuxmDd7CHUVzC6QgTmsyCH6UTEVBX4DjKxw1ijwwciPKtkEeXiHBCbHuwtgSnK3X9XGi9uE95tib6aVnBquWTY",
  "key18": "3QfyTNxfPr9Yvfk1eUK5jQSFaCiTWfp1A3QqWAaN3bHFEx2PUAvrkcR94gv6qXhrKoT9xnpM8BLZJj2jfA199onA",
  "key19": "2p9TV72QLw4hicbywtuVfmS7nfoPPr9gRQ6J8R5HcpTUnfLaG23nhpoGpzzGM6SfFDmhQBz1Bmrw4bdpb5uzzHcc",
  "key20": "2v8ZBSYTA1WsgwMMp42aHHoiwpiMDDvkcEWTspTnrNLvStrWJX5QXj4jpNsXi9fLxQ4JSVfUigdf2HXYJZCLgaRg",
  "key21": "2sCYoJqDhuV33Xvh4sN72DzKHTJ4mkN7djT9JBnAmM3xCfeUJuywY1Ekkamw3fnV3LruqT7D5ahMXuiUqHP5Xda4",
  "key22": "3oqzZzBAMPEor4xeaVgePhgeqMmGcZVfCcqjASsmQrTRfhUuUX5drc71JxbaSKmaPWBFDdCNBXZZBajaZx8UesQk",
  "key23": "2bdx4zubiPE5bEZDZcGyKmqhbeyjHpUR4p6zTmjsqoPiAQ1naPqULVC252FTSAKJzZyf6gnhTaYnyZtyCTDbdkCU",
  "key24": "EqfBTbouzvwwbksKWLAoPsMeU8qYhmKyZ4YTYvkKU5TRRc9E1Hf9Pxj1aTvZNPGx9TDTt7duLcwENCzcxqtttuD",
  "key25": "3mAy2DnBWdPP2XcQ68WbVJwUGg7VBBBX33XFdG9UnsrSM9Vtg3acGgXgbuGNdCk7c4ELmQBfV2c6ZQdJDY6ecMJh",
  "key26": "5smzo7GHyXoSa9C4mqQhnH3YSjv2Vspwi3ybeER8U2VkyoMVK6T4b9Tb7kMsXnUfTsp7XvypcguTkz3tn3wLJiV4",
  "key27": "3M565VDL6rArGZHykkGcHfbyXBeWa8S6DSH4iqH7Gz4j96CsRQaGNAYJ25kTVbPsPYoctHX8jEnYAnY8eyg1Drvi",
  "key28": "4zq8QrevYt4NYXNdXZqzfqKCC3o8tgev4KoXBKeQhzHpK6RTRL9SE4PrpNUfrESuBTHj5ZbTXv29DthetuPXErJ6",
  "key29": "kwrf3tnPfVkxrkKi5ojURjiKBrNx6AYG19YNr5gyqswTJYSicueDzhNF4uuYTxWQwAyJafyvB16CGvStCm5xyiw"
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
