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
    "28YV8K5CfYk1baJVh4Cz99hhdVYMPMFmmUHggrU45hhH9gjiceogY9c7GDGfL22qvMbAtRseHR5vBTWYvc7muNXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbwdrkUpHTTSfPk1B9kwWgQdh7jeyAxNoGoBM4Q3M1aWQ6LdHVQaMHRasCYibUkifja78BTSSUNy33JmxHK11Bz",
  "key1": "3GoJQbCguk6SBaehDi2QoBz8veh6ramCfbG8pMYsnrHVVUm2qigghLsFAU6yajyJBHXJuqXLYYHFzvL3yWujm8fN",
  "key2": "5RUN9iS9DFhGaoMiXYmsTxCd1c8c9h3GE3w1ru7329gywx7m7e8D4Xni3kJfDB5P1HEYbexoRpMxj9JMTHd5Wu6B",
  "key3": "4DjVKWsUJKeiHiXJisaVR6K62j2TWYqpXzSJNC5a5p6ousBnEe4FT3tJyYxK4xubduiHCoMoyEVgcBqzpLNU5DF1",
  "key4": "Q4uj2kF7UBhXdkvLi6r2gu6Jbod49fzC6HhPqf6yoAstiFNz9K3FzYYoESYYHZPFo8R9ffCAGwzbPhoAZfZ86Lm",
  "key5": "UR98hs2Cu3dc15zTkEq8AV4wnaT1o4ceopYSmf4oV8KNYLiYs8PAcUqvYx1tec9My3D6QDuh2XLFJTHJNqjYbTL",
  "key6": "Ag6sQcPF1Hx1ohWWmfT1HzLSJFBw11hjTGAmU7fyqMGddWAusjWfvhZnLC6rpKMSup6vKWB74KfaxFrhCyRBHAA",
  "key7": "5KJEc1YsUrMWvrEaTRzd1822H3vhkksf4BH35sTL1UiuGHAQgUJVScverX3324DnbgGTChD98xuxm8h6a89cu5jD",
  "key8": "5oGqdhGKBDNoV9J7SW2D5D41C6bqCqWnUzA8ZTbgFeRNoDSETXuFH31sdPLH73jC3mYe3s7MJePEQAfq5D8njgbV",
  "key9": "5GamCjqh1Bg8TQjb1WiMaWMubuShfdhUtvGuKEweu55vkH8Ace1nW7EvCQ4UrW1fZJBXfdc4AuRYGFKkGvfQkgx9",
  "key10": "2v5QFQhaeSo6Dar9KUUHaKHRHpP2BXDcGFySarLShiebypGJoNh1iqnPDR6nQZXtTJm3rgfErKsx2Grc6Qgv4fao",
  "key11": "4ZZj9eFFttZ4XoHnBd9wNYRB3Nk8wq6XtptyfcWgaKRs7B1oKNXu2VkaVY28aFkfcbxitAK9Vcpnkio8JNn2iqpk",
  "key12": "ESintZctQHKtAWZZ8mMQhaxLh75Anqq91zoqDsAfDYi2cWdoP7b9E32NMoSyqvNZWyuk7LN1yHN75qWGenaFo2P",
  "key13": "2yr2smjKX4dkSdkU7XYW5kmWMvCjKhGXBVzany992Ajb9sXWhMN4Fb5rzVug1UrtEBzGJQYX5ENLNFQxf6Ekd3iZ",
  "key14": "3tDKPet37FSz6pFjGK5zoiJFHMccmTXLM9x1vvNsmtPtLoHGCCrbMngSMmkLknP3F8ow11Df6q4SfZeVRaGkph4m",
  "key15": "3G5r7PuXpDesgrPKKTnxgq32ztujJLZoT7zrB19JWkdbZPyQXK61AAZ1K262RkW5u7AbDPwvrRo1w1oog5kETyoY",
  "key16": "4ZRokrpVdb5gLdqbTvEorqxMqvMppruy6mFhjvCVVFJ7pNjHkNA1WFdur4P8dFnBtxQXcNoExKY2MXwD756eoBdv",
  "key17": "3GU6Rb19VQknmhMBAKffkWAFNqshfXgYk9zMqKuRkH4JxJtpGc4DiNshcQPjHZMKbgbpAWUixUggm5aSFCgK858u",
  "key18": "3qqCUghyvPmJsBSGhZyFxyw2yFNR1hqieWbdprDtNwY42HJFrC5ybBGhoX43zMyRNthxGCky4wutYNPfd8CWVjPN",
  "key19": "x1292ihNWWvhD4ytGjwMQAksuu7hCcyi3A1ho73X35Nqiy4SFTFxpYRqkTiveYywWZBZyEzzRWELeeZBxD4d6r4",
  "key20": "3kDUCE8thhxy8c6NcniWXSqvwyZrjucx6xrNTiYeWjYkgbBZCoLjQPogS8Wdo6V4kwC8uzKyShwhZMCKzARPVHyP",
  "key21": "2CwBBmeP67y651vsu4yADaPSnZWYFEqu5T8bVyaLVRCCKt8zrtcsCfgUU7x78xXF6ybatEFBxHafbrZah2LgRA41",
  "key22": "5P1PF7qza2mFTcyiL3CCGE3irfbXdqKWnjJ1t62CcXrf8hNgCZMEDPeokEqSrQsgnXG9jPLW7ZrHFzrQ7FbPKosn",
  "key23": "2R3j34icWiSdGXujXXp7xQL1ziFad3F584tNiatj8iUEMwpcigSx47nyE7LB2xSw6pPByLUbPnJxXwZdyQGuBEhY",
  "key24": "3SSQHL8gP3qhDRGbFjvn3BCmJ3YPwqeCY1G29dPS6kZ6qJ9HZSdc4wvA2aQKeRyDn9KDHb6hU9xCDJ483PHY3hLQ",
  "key25": "anyx8qPkN9ycAzAbAkg67bgaJgHYouzkpJatzwvbphYEC2J2xw9qtJACS2G9xgRuauG21Tca7SJzyLVrwAoNsCZ",
  "key26": "2nCUjg7jTvQw6em43ZrNcrZF8C2k5zNZMitPkuNuhYg23dMWnH3U3kcVBUH3byJggGaGZT8KP7qZ3GfZazZHdHFX",
  "key27": "5xY7uKfgFfnx8aj1x8Bd2AXetG5Hemk1B9ybsJgVabXiVaSZG5hwDorGKPCGHdHoChZmyguKftiMaS61gmgzA3C2",
  "key28": "5Joe4LvMau6TCWKXgJJs1Mqe2QMvfLtsqE7DGXvztMKWYasfbbj5XaWUAiC9PAAbtQNLyf6sRp1WMkzbsnG78zJv",
  "key29": "5n9UP8N3czRvewRDY73z3tFaLRhmr1pYhgqKL6d4quTiygncCcU13MfoDpMAXnVKxNK62KA7aLBMoFeu1mRdK4mE",
  "key30": "5MfqtG6hf6TZ1E3dwRzEQcTtsQ6gmtNoruvnKiQijzvtWtRkHbHzVeMGzrxtcozV8Bx8hRS6zooL7WFp7UrjAKBF",
  "key31": "2UrFmLijr81cDXM8sWPJWc6xLG7p1FuMdtzqnNmddFGMQA6GU1tHQrvXzJR9MidZAoqUHZpKvZSHdDEzaDJJgyKb",
  "key32": "2HMZgE7WPytkqVEUjHdP2ohED7rad32TtcWvrmRXhF9JsJjmtpaqQzdgpiosBidUhkcBcE8qv1shWFLZCUwQAFke",
  "key33": "3N8FkDwLSpXDFRuLXLKgoWT35kCAF7UhZ9oEEhgzUarU6GmRuwCTQ1TJ3ScF3UAA6qX6Ai5Z8E7ZG1xjicBSZWx6",
  "key34": "goSV1ckNGphSg8FkysX6C4nne3BzUKDSNiogA9Tk3ZX6rfzAnrSPvMcus9fN6yaSkRqRZU9qzsBPE5sqzrV8KAx",
  "key35": "5XUGzHdELU8MDcNo7F8SNyUeXN95jNBvAB6KbU8YwoCyd4futBBvoxMoZycNFYVohMNtoEXTDbpdsT29aR25tmK1",
  "key36": "4XXR3FUzzoFH8sY7mEQSbnRMQVWJb5JXyzbkeki3YXADGusp29pv7RjuohzTCz9Z7WUKSZHk64du61PiqHPTiuLE",
  "key37": "4TVmfKzqY5fW2yWr4PWg73Ck4chb4hYBhdb4cwbxC1iiySzEzsmx3yVAkDGT1KExyys1oGnxg4815QH37WUAmv39",
  "key38": "4cNTYK1RedrSH6tD7V8V6WxamiuqEcFH7zjQY2zJNSFRz8mFmtNshNDXDi1WE9a73S5KkSCsZNd7Nkp6ArbMN2yw"
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
