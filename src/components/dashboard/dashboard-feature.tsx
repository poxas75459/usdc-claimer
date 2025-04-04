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
    "AepXHGEe94JRwJ5gxYXg5dKnMBkCFxXPtKfbBK4imZJGLKPR7uUHbAKHsDoZJoFsjrRnpMW7p8CftaEKM4eP3S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5KvhATNjzfhXk69m2Yn5XsNcHesJriPjLNnFMABVpBn4XYFMG4nDQEwCZ9HdSizwKQQmuFwFS6JnxYfS3Zh6Bo",
  "key1": "2W3wWoTDHMRDpeSZCQzg8kyGrtQEeAc65oYq4brQUC4UnD51DmJnQAkUCZqoX91ntZfHjdLanhgRveLXFrADnhiz",
  "key2": "4eWX7L3VavdhsP69ezuEAvpV2SDLrxz3YStbqFodJkJFu6Ytvoy1iGHhabicAmEungAtzDZDwGRCPhaVHMJoYySx",
  "key3": "5Y8cQtnntSsJeoHRr7zSqeMW6BfKqN3jjkKuX7y8GCTEb9utwx4KcZFBQJNFd9sRymMi6ukuwkJuu6CRimZnDcSF",
  "key4": "2TkiCFLm2qkssDukPf4FY5musrjakHcwF35JoGeF3ND1WQGsGQCiJagFqDG6m15LvMsoru8v4aoVKE5VqPwtJLuS",
  "key5": "2xRMjkHYgaw6hWZPWWNjDc662egsq3auRFSG59zzRawmAqMGiuadHgPMHosf4VZzDcpRvGbJsiHVh2UUBzwGzRK5",
  "key6": "4Ybi4NaftnXrTJx5ckMwyo769NQKZ3n13S6YSg8vLeHR2Ujy8xDpCqtuzgwwC4Z2PLaYfiwCbGLLct5atXWcjXFo",
  "key7": "3a99JEMZ6yyH47QQSX59gR13SuKvbSBJUH4oYb7AiYpBMKc62cXv6F9QZ73TQv4cBh3zYszsSHAQMywbnnWsMdwx",
  "key8": "4575nheT5dKxeoKgGpkbyPyuvUcmH6ekM4UwQ3cgPgyNjyTuoksvgCaZkdYnhb8vSZbGztcpho7Q3quuWkqe4gdg",
  "key9": "39PzqrTwFG91GB84gn1SpqLJKvYrvL8BDtJHJx6hgnMF4eLmYu1CwvYyFWFw1ihqXTvMDUWbThUQ2B15uoB1Sab2",
  "key10": "2t9f43J2eCihxa6pxzYjhRtVL7tRgvhLusAxq1Qz1PSnV4ne1qSzBesKpAtKuqREPYYLe6LyzFAHnu3eJGxqSH3R",
  "key11": "2fCq77ryLdWnSCmBfcF34itwbDpxDNjS78KViFFydHMXy7JRRx3ZTqtnBd4xwvHVUoW3cUuhmQMGHMy7wqLEWzGT",
  "key12": "5cVQHJVwAJYisiRzHv2v5N9AisgY2ARYm3PPVz9Xc8yk9f5Wi9fvCzYtvkyxMbjmoeeoXY8JTBQJyP4uJbvnUCjt",
  "key13": "2r4FGVvBU15i2H1M62kKcPcReDv53U2BnbFdrMh26LQX7ctLuGZ4xdzsSaeDgzb2665qDburSBGgHkE3LYphSyBQ",
  "key14": "4cnYbg4Yjjur8shNtchFfQFnwyQAKBMr8MRuU5xmFvut2X21N7wCVrAsQZN8gHwJpWC8Q5PgeD6hrxPQcdkvafA2",
  "key15": "3fQypF1TqdrpKxaRGr6YfaaumZM6Qa1yH5N5TnjNEGurRf8wJke85kSF8teqWFdMQo5SEecQeRiYfishDdxmnGfK",
  "key16": "4pQoF9BE4WuZpUUCuwPvGtASFvxr5qPw6gni5VZCtntvwgrrvayLSxeM7shLPZQWc2srrYpQyAKyrBBNPH4ZyQNX",
  "key17": "6jaRje13brY8yD7yuedhdfg9rVgHWo8pc9zwHjMuKgAiExrzvGgjA1e2WkiV4GgeZzbo68XGS7xN68x3iQa81gQ",
  "key18": "5BdfhpkHXA7vp8qc2PT4NNnPX9XWcctwHm3vbwwpRqZHZHfTdr7GuzeR8f2D5r5PAYbJs63XkjKTLKQGMBpZn3e1",
  "key19": "4FrRZxdimCb8jDNLFWSkRHtQrykzwMSHL2jP2oQyNS6Gn6pjyswUxcAQFAaoKKK9vM35Fnm8b7VmGh7S9jyGZZvq",
  "key20": "48eKHhaiCsRHKUBto8ALwJSSjcFAFGwJ6LqwTU7Pmc5dtpDrUzYgw7Nh4SkayaeGLfFasep4qt4jQNsDL6coJGZt",
  "key21": "3YFPAmy8JZd3yzbob8f4mchmuVkUJsg8HZDCLUTodf3a3wM7YdoSaWAQj5XYT194Y6sAmUi5UT4v7WECiFjdRTXx",
  "key22": "455dNLT4zE8tfBVsLDCGR67t63mKNApHFVCuAvXCLeqLCDcV3iGU72AQH9xa9tgsK1ELCgdc59BAghdFJRobFRXR",
  "key23": "2JGq5oyJdKT1u38mh36BwLB2JND2rWDSdPiCXADSk6FycGntqgmfZ4qCebdhkc19JxFpao7P7tw3e6idTk5LSweX",
  "key24": "41Q4jE7SNUjHqf8t3zFU6GzaopiTzRDsxzpGzEFSZVfjkzHchbXtCxu2akSbq43nQCt5QsevaGtezkixzDAGzfsP",
  "key25": "FRfTXrS6ukCcujQZbTrDM8JuPK4Y3cQLdopR9uZ4qkSNoJKYTExw4xNf8KEH3kJH1AtU9yqbd6w3w3ozm4p1KK7",
  "key26": "ZvGf62b7F4FtqJwdB9YXxrjXENj26yiSgomZ3ZTx1qP6JtjVACtPbNoKZD1a8AiqNS3e39jCCniwpvxovcSGL2h",
  "key27": "4moMobMJTxYP9BPQe6ER5TaS5tBjghHzgrAZM1wRYJLb3DoegeRScF9RfV3tUJPqLcEA3X178RaNRKieuQz9Xpax",
  "key28": "5TExhTetRxvmwUzMKedtKTz54ocnzNeJyFCKvSpuTpUZrtnhxULFd7AzJZ1HPdt6NxGG3EqzhVJadiTL2gD4hkPr",
  "key29": "4RMpe3V1C1csQGPLMVz1kR7h1JqF6Z8yZCjxPKMPQFq5pru84PGExwQcrNbgi6NqpS5rrtVWLJRiEMibDTUjawL6",
  "key30": "5g8963Yf5k9AJRC53NTmACWkFm6jk7aLkkSczaz1UX8MuGSH5XfhLH7CNHJpFU6PGogfrKPyjd1cDt69k2d7QtwR",
  "key31": "3MgChkaggYW9wtd17zEmCgwdVA4aU8qevygz2f2GnCJE57JTDB3NP5iA72r4SLzU7ftALRZCCxWHZ1vqAQN2KqcD"
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
