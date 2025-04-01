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
    "MiDkhRLFZBVfJViUkFP5gwj3KzYxRjftR3GfQ8a1ZSthoUgZvisndnJTqeE3ozWx8yfQk9vQ6ZRQ5ozkTXXoV4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQZVVRK8fd2WsT2Gbjt87wGvgCGcPCNaVpCRWBPudCFA8MS6XbQgMZ8aHztiZmdG8wvtoFuaXJLwm8AhuLqGEkh",
  "key1": "2SXG6Zvnh5eaVP7poYLKeYZeg2aqogUeHt1C8KDPbhWy4d5EPi8Ystt5r1HeWC419CTdvopBwN3DVviDAeGJd5sr",
  "key2": "2AFapSTAA287s6tMyoWyxNLx6Y72joeMWqnx8MaXP1pnWTMJqD9mUe6RALrYJZNUjF1Bboohkm6eAzvHRtXGngyk",
  "key3": "4PqwnRyX4wNK35n5Ztc8YmN6jpXxncix2mJa5xicHE967zauJ5MNZm8U5JrE5r8hu21jyajiZKfVazuHA8D5JNAD",
  "key4": "5Vhxg5EqGSSFTaYvu4jipgjF7V238GC4vh9WQiyS1NA8tpRCDSkJAdzr9Ftd2DfZEx9S18kjjP55rNXrPiF2Yx67",
  "key5": "5G83a9roZWqzEahtyHyjhhXsqA8KGLrEVWqF1XBN8G3rUfdUp5fbANsF6iNB9xDh2tMEdUjYREkqtJNKN1iZ5E5g",
  "key6": "szYU8y4h2PYwKZPSrUAM95wkBRhbRDbWPvvfBh52h4vtvzhjmdFJT4cUFNav1okpyDHXCAMEh69P7rPCdEm4Zfy",
  "key7": "4BL2aGFpfm7ZUZWa5s1d7ARzfEQ1jDBygFi5cU78c7h1CZUXZeUxnQs6p5QAWfy8xD9G7UM35DZ3r9Q37vpj7avB",
  "key8": "5UC82vxo9Dycqm7k8rB19pRBfTLZT3CvxQFQZepe9WwK7Bdjb6Ai76a6EMRQcxzsHZ6HGoSaBBNEy6xvZg3NiBZC",
  "key9": "5hwJqFKBtGsiSnh2Z7cCj52v8LVvTAYisx8K39LhvaESTShk1V7V5u45BdujBKKRbTmhVKJ15pA1BHyDUVsYr9Nz",
  "key10": "R4tYTvjTUdNC1qTJo8nrzXhnMUBuJnB7YKPupxnXCMzBr67Vzs2tJZJuQ4vcTRRzeJUXTmf5kEys9W7CkW7VZsm",
  "key11": "3o571iKUeq3YaVP2ALGKbyvqvTjHrHkSr3vuoPHm3a3QndAneqdYaKfg5VGgzrFxfecfxdxZDgNpXttPNZDzSzBi",
  "key12": "3MXyBPvia21oDfpLvj7CqdDKgUVi1foaJrR2T44DLPSFXkgK88wCWPGt7zQ8u194P5QdsWD8frpUL42eV9ckVQ25",
  "key13": "4ASbD6PW7wwKCSoiLMwCFmbXxKiHDwujhWc5noJi93R8ZQxuRdXPsSTdVeTPoKafPyA2AXTsYLAtfqEAkGAN2msW",
  "key14": "4RBnKCcY2pLiScJrXszdnV1vmwzCMBuQLkXzYjBmzuChS62H5J1LgFqtgFSuBknvaM3UnV5X3TcJCMi6w61k3bvC",
  "key15": "54vR9xG1U3fXfjhSHgjqxSEWYBqMkxZvvDJvmovA5SZJ9gYteeF7twphVAd4SWV5jHDu7Bfj2ViS41JiXUjMyf1R",
  "key16": "3NqvC5zUHBfLFUKhhoDeeNKnqtEapwguKUNpARM1KTseFuBz4r2XmTZVgcxc6zobyrLr8XtQxK3HRPP6r6nqwuey",
  "key17": "2vwBi61diLwtUEdzHtzjtqX54JFm3zXLn4qsezENGgUUTEUM2ziuSEu27FQEstZG3YQj6b8kXK88pgEvyGsTmoYE",
  "key18": "gnVZ1mBvcAeiBB4uZPgfbCTiJBpXk8xhx2T9GP6TvZ6PymDg66FuAxH6Ttbi3ZFNPvBP1dYKhkd9R9cCsGrJZp7",
  "key19": "a1JTiXETVbrXiMEfnNoVtNw9ue5KhR2ViW4tDA9cj5SxVkKPuabdbL73KiGYV9yAkBi6M6pNypvbhDpcev4yYZR",
  "key20": "3YnBcatdZfrwiC2CD4bxKezHhskA4FvpgXA9UNqE3cb8yzznrgSdPBruAES2LFy5DmfGdQjCXXnm4T3SE23eLCQa",
  "key21": "3Z2rto1RKnrViNWPmVzCZGrKFoxmYSRmp6sXxZyTxFsTcZJv2MTVn4NK4vizd6bxiZHF2RCngxvTDJqS8QL17sSg",
  "key22": "261usjo3V4tcMu3BYjsnXZGkbN6BTA4hGaCfRBbKFtq8BCbZd2tcZRRPMhBpEY5q4B1DMA3a2pZ9RUqM8FY6S2BD",
  "key23": "4sg6s5u6sjJy5reZgomkLkHStUoTUCbSoSshRxkrfkF8PfJG5AP2VxUJFxo5RSY2cSbVkNbdEeS8hpkMmQbTAiqt",
  "key24": "3JhmPLUdZJptwJSXNSZ8mifJj2fJimFfkNkbwbDxKH26ji1irdKV21UdBKBg8Tx2g7MQw2kNAzTeFS5d39ZpNGuF",
  "key25": "2ig9FGr79cTyrcEDb5iB4ywbxPt2qQFQsvyozv58hi3sbhPnUHECsJKryvf7fCfi4FM2bJ9NtyA6NcFiiV5G2Tod",
  "key26": "5gBBaGajSUWwfABTUFRKZ2ayeczgDEqdwR7qVQTfSaiDHz6vSzFYj8xQhT82KCtMZsn1i7WXVaGH7mZ5Usns69tA",
  "key27": "5TonAnFJnBQtAnCdthkUKchXCs6szXZh5MVSVPZpaf1WNtWVmtxTRzrVAtfxPB5AxN7tM7r5c9X67ZqeQ7LELgEa",
  "key28": "3P15ogaqHvYZz3Poco3ahkXFp4v8NacVsbq3waMfWUhkJevTzM7ZquGp8yrFErSJAt3NaERmTYUBbk5B8QkFK8S9",
  "key29": "4urcnyYYT9YJGrVmd3r34MsqrncmNotRw3NUoFnKDsdCwetB8yaMgHhn8suhHrTHPBuuseR4ka9CTNS6qwqSWqVL",
  "key30": "hwfRoUzpJu9ehP9JqLEzi1kF5R77XUff1WUECTMu2zzHG8DoB7SFLbP3D6eYJKzPjNtc2RZRiEbzxZMibH7snsG",
  "key31": "3srtUxNKBhuJ2gh8kJ4mLCxfjM7ShZG2YypvXDWxq2u4oZTCd25rcCYKBKB3bHKxgb3MuuWbTUq8a33ZMwaNMwrx",
  "key32": "4ogGNmjvZxtaDgXjRLN3nVfeQfHK8dX5bpnihjPMZT4dX8rdjbP9G5khkUa7P4NrrGUcpkT2WdLCespSd9zWAdU8",
  "key33": "4fhScUNytRdw8rFxtJcfLmPCn11XstaDPErhKGvwtt9eDBUS2BUjwuMLNCasiKArjm2ZCURnviuWZuwM1Dmsqwxe",
  "key34": "2fnzDuxyjucuuCVQXSsyRTcjLdUhv77a5gWAnMX4UE2MTZuyyM3vFLG97veXyFbnR8km3GRQMK7fYgxr714HAWiV",
  "key35": "5GBDmM8jBmxjWPcXYM9Uq3aNmdD6KiNviPNHowrbUe4JbnJWZZCEfX6gkNHNu5ZNDofs9zUy6UHbjxmu9maX3snT",
  "key36": "4VonygLfm2H4yjikeptvH715ofTvdLauzcobjxMWzda4ir346qEqjSgmeYtFy55sK2VnrmbUHqJJ2fbyGzHUXjam",
  "key37": "GyPdSt8BxomcivqDtRJPcznmTN66SLkSTRVYARnvgfi16atYMePg27qxrxbc8M2WAL3NTH53uM1zUtaLn46V3GD",
  "key38": "XcvtwkhbRBTTsNEapg7fSYcUDJkzGE6feuqq8GHgri7vYixpH63DwM9kWCGZAt6WQTbeBupdJvP8zuEPnTf1ent",
  "key39": "38RMi95XkeXXBjNU1ju6XqytNZgJKkYfjTN98EhrDDXW1RpBRXFMsix5rocwKNp5XXeHyeQNGTL73XXfaeiPv96M",
  "key40": "5wvsSXqsJLmxCJLEeBUNkyujV89Mroaq5t722ypVALfLRnuwVVo4QvMmmTqtKyGEsWH68gz45LxJaGST7F2WhUZb",
  "key41": "61pzb6CzTAakTV2Q2HdNJS4hRuKeVB56EofnizDyp8vnL4yLjtfJueMPY5NWnzP4fBUtxi8u9JvRdupkh36S34h1",
  "key42": "5dCZUHTuCAFwCoDba7qS7VCuDkXXbBPp79QG1aL2KhgSUozjG2k6RQ9rSztAje1PEwkSWLHfvVa9Q8C8iSsaESC8"
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
