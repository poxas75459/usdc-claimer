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
    "gFshxvqS8p51FxDGTiXR7TGiPwY2PUWyk8mguLc3KRrF1h8VfZewSqXXW7EPY4Ykgw2T9mTgf3YkN3zEgLMR1H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gh7qWLAUPG2c3SFvvB4yQxxMvaTd51H1joTxqSgz3v15UcS6cUsGpecN2ZwTuNSWxVbgzhYqt4ThYC5pAkR4LTw",
  "key1": "qXJuCNpLxUpVj5VmziW4dQBDDh6hT9Ce7DPgfhXjSASqk5iDo7yZF7xMwsKv1xQRWAJ7d8B1zt3nHXeyUjUomn9",
  "key2": "4JwkYy9fF7v5Koq7Eew1FsFirwtkwcgjd21KfVHbnpq3vyrZd18zp9xmnFzmVGwFkmZPoyy2pS6uKNLdZmfFDr9R",
  "key3": "4jjobcLivnB2N229N2rsYoc85fYNWp9abJsvya1d1LCULFZmoeNFYVfkEwGCtCLkrxaCG8ZTzewA6PHXzQUnEMc3",
  "key4": "KKtd8dsgJoKYT3AgwskTMteope4qZXZeuztzVxEqm1JfT3v8GUz83YoHKH685SfdxghFWLkgS4FoTazWnuF4d1p",
  "key5": "32f4RFnT7QF8NH9JxrN19vgBeTn4adVa5nvwUAuXifnRPyQMyhRQnvTKohf8CuoQah9hweDqypgbR7ZmQheHavcH",
  "key6": "TmfbYwhoqYuK4bcDmUR8V4gA7539CApykLvC3Hx2kXnbQq3dUvW87kP9a6V6ND8v7W6ofqU1G7Lh4jTbBoRQbg9",
  "key7": "4Z4s2C6ikU8HPbMECzTPar97FarUKDFcrNLMXgZNExfxJUhxBVdZfL68NfnHYghMPGovGqNBjbgjidJf3z9DpAC5",
  "key8": "4gECimEsD8Mwp5U4gp1y9x6t8cSbT56KQyYy3u3gBFDTGePc8apsbpxEtLPNucYbhaf8GBd9ocHZ1sACXryPNGeu",
  "key9": "4278UksFNRVseS9v3spnLw4K38ds7qygFj2HhefqHHQgHeUbH8WsS2zqBiCqYjYDbfaVVAZTPGUUNFpeR4x6xppx",
  "key10": "54WMhMf1BAXpPHazSByzba1YnpQTqVaEFVgBU88axcYgTQSiPk6g6SwaXa5P3iSdbm6yWKSTeS1Xurd9AXNkBvr",
  "key11": "5phj2T6BPw4GibsSAgA13MSQeoZW1Dea2dpe8ktG71uYo7bj9CjTTijTtzKcYFrRgoCXnxiV9dnVA5H7Ns5RKyUM",
  "key12": "28UKurxsqwWWmLcPhLiZPCSUq4UB4szLwV6Gm5kWr6QfFcPeEeUJkRP8gb2XanmskT96YzqHcftxsjoVuMePfeAT",
  "key13": "4tYyqf5Ro5ucLbRWZeu425WgrgjqJDXngi8BgfDx9RV1jbK5sxWrp9tEKejNvuh8wFRF2YAxba7GJP8XkChPwVor",
  "key14": "5pXxhcqdCB24gDnMwNMFwhMvL4mvgM3MNhqwjXeAKyLYK2VMtsftpwYTsFk7QpBDi5M79NqaDXTeiefQyATzUxDZ",
  "key15": "qhosRGmCfUtLx1EGDV3y4KsjGfgmCoZSEyu1HfKxhGKExsHmAE9QJfANeoZabjnA81cwoamhr63fUEkRtpmDyR3",
  "key16": "3LB6EuBo5QSes3CS158YPAdbhw5QnJP9Hgh9YfXcL2BE5sGF75xG3sXxctUGRknyjj2jq6R5vGYxdsAthVhGRZSb",
  "key17": "M8aTEKcrPzHVo6a19h5srvkNs41YEn2t7xYxWYv2zm15pYeEqcYW5umYWW9ikF25NQLvpmUPRfawdXMDe1rmGEB",
  "key18": "4oMKWtWHLhbzRrDzpkLxaYuEriB8JTtcsdJffKMCftMQujcWEQ8T7ybEJgs7SfSBTzmk4FMheiZFWM7z1aPKPT5k",
  "key19": "4rkCHL76MjVrYRb1KAdzoyWwzvHYuuyVZLocWDG7sci9niHYC96253zDurASbuZhk4jS12ZSGuvehevMJhEvUyFT",
  "key20": "2rYUQFsCrWyBimu3QGMcbACrQWFAm8sthiCDpndfkhbnoMYk9v5hsxNmKSsq7YDLTuSH4sGFWy6NRhKVkmTd9KoK",
  "key21": "55k7iQUgcxqtvNXMxuEadgPaTjviTdRarHscuttkR53wKbXWmoQaTBRgeqExjeLLYuA6WA5nG8JHAeYTfDqZvG92",
  "key22": "5ZppAdLh3HzeL17X1479yLegyZsMaqHnLGUCahKXTAxKpWwy4YjJBRaP6Gecp9ENrgFi4tTkPf7ifZgJxEAmTF1S",
  "key23": "47MGQeBM68GXs6U4qzbvS3iSPB8Gf4ZMK94d1fsXG2EjzoqNnshwiU3qsLVM5SwoSvSB3W5g4BNdwZpW8aUed7KC",
  "key24": "yFeoWTjrRtnSuzqsWfqtY5ezh2V7amy4HJ1j9x4rWBcZZpUQ3dQeARwvMcProfcCyhsuAYEfvsN24E4jzVQapQ1",
  "key25": "3zntPtZQgx1dUQm9se9bwoPPTkP21TdKLS58yE6Su8Ev3PZHEw9acDx2ZbCqMsqqm3WyKU2SKzifVvhvCuWipU41",
  "key26": "4orKDpZW6KPzqmQ9n9T53qTpCRHytnyheFJRhosBNUYjL44cUuqTMa61yqtYXfYbyms8ixcHhSmLJcyYkQueogD9"
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
