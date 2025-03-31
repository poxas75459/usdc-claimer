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
    "GRoXodaLsWyWLGAEXcpQr3GF92igYn2HtbYVnCjFfrAXsoeJWdvrLnVX65Nafe8gUoPukLbrQ9SSjRuHWU6Loqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMXkTAC5YTq67dn8trikQP9NnjktxisjuvTWaxGR6im4Cj1F8er7CN3dhegPEdzyLiqLx5kqg1GL8n66yuqPJtZ",
  "key1": "2AxnhbUuKADPsHQcePRFmD3MAp4Rknuwdk1c4A411cEN5wSx4EPG9f9Cwp3Ca5RYbHRRstjL4p41drimfPCCzBm1",
  "key2": "29YerNcSaqkd6w2sv8QCGDaH59tPFQ4tcUze5jqtm31rJxB7eV1XiPpHe53sCRPmsoCCA7hx4zWad52QaU9YPfEY",
  "key3": "mRgoKarD6jrGERUsXCEvWQUwmnJpRnM3T5QauwcphhtnMjsKDn9Xd5LxGNn6LQc4mZXeahJKFowYtbyuWU5QS5w",
  "key4": "2Rz5oXbkPLeXaUj5Ywiw5zhCwF6qNRiQpYme7SGv3k5Kia4ubZVArYtSnG8LBVoErAt4mKvxBXZB5fVHwc4ZgmcH",
  "key5": "4TTFgv579KY6THxiFpW49MHFBeX4aksprW4PKk94u2a3nP9CWNt8dEX5khQeSgDTwRnLFngdgz1nBrB8ESUSNC6",
  "key6": "52rtvAM1QpB374FVTFceFYqNfajXNBDgvonVyEs9swDsvWmcNRrCHGJaFeQEtwMcoQhnn71TPGxyCrgdZdYgZU4w",
  "key7": "4gVEjsRX9uL7EMZRxynbtHr4jXzpAGoRU6xHwKsK5JKq5DcY3mssTWQY219imqtnuC5CRHQ3ajYw69z7ESZWdpA",
  "key8": "5ZK35GbS9PXvzksHBNvD5nwVniKNzom5SxYcSdWDoSCpUrkBsp4P2Ub9HCMRcjLg9bcWLh7YXsqyP9HNBvgHZ6TW",
  "key9": "bQu8GCdCtLLoHUdHLMwLKeQysnkWePT8m9L2CMFDSJYGW7Hjb2pnDBK9YMEfAcsAn8AKHLbRcX4yDn6XVHRQQnx",
  "key10": "UK67RxPdUNFjPVAfj75iihrBUeAswTGB1K5QeBv7YgNpVNZ8jipfinyoxYDEdaoqr9Ks8ehU6e31Pn3ygbpebUK",
  "key11": "LVrSLUvSXNEdbBLiCkt6vPrssgamk7kjqwT83w3utwsp1sygEYy25CVQ22txBw31uhxzfGcr2FjJEDsJtvhzbPE",
  "key12": "wDavJkYfnv3m11Z6cdpAhVSbvxWycN6uqBwFyc5oBjfaxg2cFXHgSymo3ZeTeX71jHPgv2SaeKXCRvsUyeC4PrP",
  "key13": "4bbkcLqrnAQDQ7pqyPwqtm5MWxPNJy7MoXHiiuCk7m3fVjV3WzYyzwx8FvQfBdDSuQdFJAX93UeDNZddTDqFDJtX",
  "key14": "u1bfqsLkcAjasDktHu8uKyPug5ASXRDvCKMivs1ZXbGp821FT7dCVzXfaTj4KzHbS6749BbvN8zhPt9q9ubEfrT",
  "key15": "2mzwEToYHeT8MSp3wTLt7LQSGyPqov2L2DX4jkvUEGi2jSSvnWLNYaCkeb98RepVJW4A6kfowKbujd215shFprQU",
  "key16": "2BnUChtAi9Eynkgbe2b2FP6ZgPqDyJ346sdJ9wS3bKGsgefCMNijC4USrKtbQzB5mtaUQWBVfHBBUTisPJ34UffF",
  "key17": "dAQPJSDvLdWh7hCwtbYxt97EUPXG8pjrnfb6xtge3Dy9PX1gDn4MsSjEmFXyvDXr8iZrX2qNSi6aDjbwJBhQJE1",
  "key18": "JtStw7cC6zzPGbXrGcJC8f1zXBpk51wp97etHnqHHQzKr4ATdzcaLyvAuRUx2zJJdJUUVWeXfkbfXk2mgcyPksb",
  "key19": "2betXV7GZDv6RS3mNy4HhGeuV3v9RwSP9WdgfrLHGRCUEmSeesDxVr9RW1qxNAEJtjhRAeYcjTAqmSdT88eeDjg4",
  "key20": "3kDa5mG8FWedQNYdaJtwbFysars7JEiFmgxUyZbByPLTVVnDsEzkEy2jUzpcsFoDV9wn6Gpyk99wsN9ahzFfksN9",
  "key21": "65ZAWB8uZWyPCt9gW8ojpDUtM7ifKrTcYCP6p9P7kr3P957TnsZpDBXpBsMck39zbPkqdmnMyfk7Y8FinTYDrKmK",
  "key22": "5Wbkf73Tyt6FQLugTLe5eiPSQ7vtygUAN72EwQ1MFEMQr54TGTL54x1mX3RDyWatyDwDsY2W5yV6MQDhcNp6PsHB",
  "key23": "2v9PuXriTrXVEtJx9BM7yUuNSv3x2EmEuNQtUhYw4XpCdGFiV3MuueMDkFn538L5HiBb8fMUXKkp2SiQYvb5Y1U6",
  "key24": "Dx2PS36oXaXrTMaLVJZqBCp2DLtMyMh1gwyfuJmqnxJcNsyLGG55NsG5T4CenQB1szEAksDpeBmGQAJf6xvNgVq",
  "key25": "2cRr18jDeBUxKpiyVHswEcWKUsNHaHZRY8PhtjkvfZfXKrYNaVvb22FQN2vru1tmDWctWrXS1VSPfnvpLvFwFpGK"
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
