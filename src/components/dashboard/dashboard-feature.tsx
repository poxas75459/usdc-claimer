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
    "3o9ARuFA1CTrEMmBtEhs5xdg2SU7QGmwsWH43tbZDTLhTMPZzgfPvN9JD73qdkf3AAm5FGYo5bFGe2RBrqURFzGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHoa787AkYbGWWWV3ASqRfxn7h2Vpoz8bfmwNN8hs9Zkn2eVm54GG2fkoXzs23encWAhUFZEnMZPXhTpEXtkFnG",
  "key1": "GYP9jo57bU6npMhwgDECoiYk4kwHckQKtbzLUo864YVHQ2rKQ68r1bRUbktkcUqZVf7eLdB45aZHAbWCTzhY11U",
  "key2": "2J9YFRmoZfDFj9oFjBK39XHnpY5nB2KzTGPUBQdmbTXEdnn55PbhES1PWghCM355ibUhfDr855hpJfC9JgBnszvt",
  "key3": "5M9HsYyDbDJtJKnKox7ZFRG3G4U5sfW52aWeqkEYyWVKBKMo38rdTHjTVLi2kYA1DJwhg53iZ34sHzwCny3uJBRG",
  "key4": "2qAUSKmrHhdKDZGkV77AdQnj8pU8wJTA939G4npfqr1QywAoUdqYekEpGgZ2dFeKKBh2mvb5xRG3bfwLvmTuG3Aa",
  "key5": "5QxiomDVdkyZX4gCG1i7H4jwvWog8bJBi3KGgp9SWMtdpGtp4QiHg9JmVECYFcGPoR5PN6Ex8ZvyAW5oqpdaLTRd",
  "key6": "4Zam6WVRXL1ZeYskCq5KV6zaMxwmZMk4vGkCXotJoZsGVVQYLE8ZbyRsHf8Mb5tJDospQt8ybCtr1wtDzuTLHVcv",
  "key7": "t5pjQa9CfRXNQHRncLGJfYDzQ4KmfKLT1jhnPQ1FSKX3hptWw5dLbCAbU83PncatnApPBaiiuTdXyk9C4dQcaxk",
  "key8": "5AzixGdg9fnM9zvHLqSmCvRdQbhjMjphufh8qoUXKekm5atCZS66rDQ4rzUeTFkNDHsKqSFGB9fH4TxQBjmSuanA",
  "key9": "3YUCba8az7FQWHaCWxK37RwBztNYd6BUxvQwy3aboSPktMsptzhiECMAtoYxoXMjSxFTkTX4yRDXU5aeGXKGPBCw",
  "key10": "5MR5jAFBwfXuwFqyNLGbXG3KycPhM95NEX6u1hspbrRst6uAGSn12Sq58XmCWNjUuNNr17Fc93BQiMQdW7eNLPDK",
  "key11": "65JgCtjd5ypV84Rg6cEFmbMeRYoYYD7qRG7SBQFVuVccNnp87UWC7vp11hLyQJTLX5hoixLfieYTjUo5pXNH4MXi",
  "key12": "3UvrNhRypve36KQGH9xnejZrWowPhAAn5a9wcNGH2F8iNUJ42LhE6UTrqH3L91MJDrQ94LrBVX3XW8RPUNRiH3uK",
  "key13": "nKMnpGQcrBktiSBSJrjfV21Tf691BewmhHsDWFGAB3q15QXbUiZmUXt1EM2P5TEoZxDWNMRBCUQUUi2n7ezLf4Y",
  "key14": "6696Bc3REhWpYAi2EPJQc1en5kEmiA5at8jV8tmcbfk4Av3xycf2CVr5fhTZX91PgzNtc45nQSi26jkcC7vyG4fv",
  "key15": "xMQivbRKxm8wJny3NpVYViD2ge2vFTwkwdFzPcQAk1ibjXPje1HyLJAVQGc5MoU6KfoHBhW8uFHoM2YJMWRDrxm",
  "key16": "5fgjWhrmL3tSNzszf13fKCwwhM3cjG4pDumhwmqV1bxscFU4QqtffuPa2WHqNCv6YQHzSR9gdP9nWMCJkiCTVoiT",
  "key17": "4oYvYUZgLimFfgz7FLNe3XsAgTxXfi46fVQq4WLTsLizwSvunkFtoovvjJru4FV4YWqanMQhd22v67u9fHLNo5hd",
  "key18": "5ExAW5qUWDD7bZkhYFR2onB8KZmqt5KuLyY8ai1izc2Z239gb7NgXYkF1Jgv9hJ8XeqP5DrqA3WUeZTNSQDQgEr3",
  "key19": "47EjwJUDf8KnFAcm7JNeceEqkeRvqa4AQxk9w8r8f4zR6YooDiZgUCg4EZbVCzoUafBYSsVVVUS1zYFJpBdYH9ML",
  "key20": "4Yxv2HRmTr89dNmXo8qr9KVvRhBmykzyPPQNaK6qqCX1dmius43nVbzwuBQ1GBtmR9XuJaAs5UhvtLGn7TkG1Wn",
  "key21": "41ymqSEvTX3iYfbT1zWmJpBgoh1TzwaqdaDWCuB6ajP5Vkx1w1hBLLyRtKNbENDGPeXReLM6nvDBzyTZtFYGsHms",
  "key22": "52peK93oLaKEQU9GG9UUTNjCLwpQ7j8nGpDtzmUUtHXeigDd2EgBCFM9dreZ8CryuNUF7WTdcZQcsdFfpJiKpvhw",
  "key23": "4FhKw2PvF2Dd2Ca5BRY2CtdE3LAeNkVavsGLBgExrzZGrTfdsMiXUF6kPzGYoKxY7YZkRCjEpPuYp9m3ejNHUePc",
  "key24": "3G5vLm9cm7Xr6zzmX73yVz12sPkUkWPh5kDrdmhm5mJANR7xDLbmj8yEeY2k4rTz5Pd32Qgs7iaRHzhPvUo3rCjK",
  "key25": "UNCnhBpN2AJiVoi44Vn5z1DkbTPGpVLc1TGgKM8gm6xbRzj1jbkxHfvRoNXmaSQBDRfZ2nsoQ43L8GphyiFfK5F",
  "key26": "64mofNfeezARXtXdseevEtwFxxMtT3muarRYyko6LoycdwSD39w5n63heGDqytJqttdUGYGygGHmKKVsaggRsd4P",
  "key27": "RTGAKPgaNHuikryrvTS8YASjQv9uyaEzA6TFS9EWxroVr7NTsvxJnwcNf2JWMSrFAnyaW5aZLuSL6Mh3yr4SkiV",
  "key28": "3WeQZTKt53N12kfpiGjWqqTFE6ksMaDUxjPFNXJYYd7QKBnkCrWcJJ8ZZtZPMwrVbjcYRnGB1EEWLg2wx78UMqYx",
  "key29": "39cgBuaG9NjUsumcKDqH8csuShdQzRWavoFia1yR6JXL1iHFnjBTgQ4n7UzHjKXE7DxNdu7mAXXWKFhrKgWKrgyN",
  "key30": "2xudLfLuKddLK1JoUq2e5hxMpo6qRfH5B3rQUCvBYzFPw3fqT2K3jvjyDsbfoQ4fFa5Q3ZCdLsnDUspCqErHzdtR"
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
