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
    "586nkuH9HQfjnmtTr97p6Lqc1hprdxpQg7NmjbZeVcYaNBkJVvZQxrrqdtmsYDjjQz53uadq9WPQPFFShrWLBdXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Hny6kQ6euXA9JKsTa8HrLFJSvcvhX77rGDosZYFePKTpjrGvHkMSVZw2MmZiuMDzcTtCZ8YxuWHmN7MsiaAVSk",
  "key1": "CtsK3TxkVrwiqrJhQpgYKJBQJaRjUkMumnLUkmoVHmTMCSwVMMPqb4k3fugDABuqikaBTz47QRxdYrrxwgafcCF",
  "key2": "nFva2aNB8131XcUEZsTQkJDK9cip3ALDkYSsUv7DZyokQ6i3R4pZgQEJDNJDA25eYd8cZWcjYSmTycz4Spqga2p",
  "key3": "4nuUKb5zjSGWJWWWCB8cEp8BAqavHnPBw2wNEwQaWF9ZTPqaQjA5WykKapDFmmRaYwvTy4BeNRCKWmwtS6FWbhK5",
  "key4": "4s8Ne1o119s1nazxHJdpp5wLtBWKqGNe2s46CcKTWjfP2n5qGhoroVnvSq8EXJ6R1Uuymyzi5kmHF5m32tqy9Kvv",
  "key5": "5FBfjJg8pWJvakqTqGs2SNXFPnnXngtH2qxnrkx6XExGxV8nTNQNsC9rsdYmnEG3DrdaWFjEEsBTzBb6chy2iWMY",
  "key6": "4mA1dnSGP9Wv2yNk9v8MUtPK3qbmACKLVKStqgSfXYDUa5fhsL8VTTNSTAkZEHe3yrn8tncwQwsavWSiEZc2Ewdb",
  "key7": "LyRu6RWC1jgcrRbhcE6VdSR7NxdP1JJhaQPshNk38gHLhFzTte74PgMuEJ55arw45r5qtVSidXasgXZwcmJVpQa",
  "key8": "5eVU3NRqCNPWvDbL2pqwWzp2d1ZueVZHGi6BLNUrjYUprD3RGPu5L2aDATDem99Je8XNQ4J9hcncpoPvXXNRURJE",
  "key9": "2mMr36NowG33XoGV3Ca3WVCyDm9g8MFUMNzsiy8MHpBG8SAZ6nnUhgK6qUntpFV3sCLbN2M91dXyM49XLM7V86kJ",
  "key10": "4MatmK5aUkQcU8qeTGooBbaycaQ1JJ5AW1jtZusmciQujBSJeyM4HTw6qqzRGmGD6XWJkjttnL3E4m4KhHvCpVSN",
  "key11": "4P4kLKt49x5oT3L7dbRcPbc71G4DgNxuRMoinUzgDaGfZz4GYPtt1WT3JBtBiVMgYojZwrHb1tUGrP9mUTqB2c9o",
  "key12": "4Xki5TnvujopXPkh535uau1LDc3gTsuHPcbAAHq7CJt3uALeA43uHFPq8wbQGtqDBxYdXkzgxoXq5M6k8m6EKZ6U",
  "key13": "35U9eQZX2UT7HRbArRAzTyDAss3BUT5abJ14iCPCwf8MjAZErg9Tr4sYvMnXNzjaya1pKwnU77bjTCJhgs8fYn5d",
  "key14": "24LwxwEX6rR3QxrCJquXrUTVXm3n9mHgSqQeoA9GtdsoWz9MvAD9hRDwxxGfpARu9jFpreU7WgNSj1Viu25pzc5N",
  "key15": "5cR8fUHWPsPiVDN15dfFEG93PK4vpxeYtTDLrjDsvdXRsES9F9amHNqrQXKSKvmM7eXpA777TWCCudsYXswLCLhp",
  "key16": "4Yay41eFKeRGrTSG957AGDPWRkkou5t5j78oj9B48tjhWbhCAxZcFEeCx89fQccF75FmegQGYekSZpez6KLTqvQU",
  "key17": "2mDJ6ef75kyU2CtQKetPoiPCtSXqv9Lh9Q9bXU1hmFtdmjKHAL25yBELvJEXssJgoqQg6Fr5WBSFK28Rsnq7Zmtq",
  "key18": "5sF4rzN8BXJe2QnCELGXTfmLsKonxzsEwop8gTnK72E7YsdM2dCvSRQ9KNrvqVruxdXZCbCFrijGLDRLDEDs5eJV",
  "key19": "e1iTbtDAz9ox82nTU1rF5SSWfFxiVecnLQE1RVGUNkbTe68H3aM7f3WBEASTCW31AwamDPtoACSk4qzM5ZiynhG",
  "key20": "65jzo93713qBVxFqT1PATxLYecvCdARUUjg8RZAjcZ1sKtgx3yU5HibgCUUqo19qaTXgvnNgnBBzdtBtRfCDvoCn",
  "key21": "2fn42giRQtqrkLUcACnyb4Vvv5YA529XdoW4s1ZJWBLatidbZwjvdeR3Pgx4RQrJvx7reJpGv1RY2qwBTE1f3f1Q",
  "key22": "3pQjxYKduU7Q8qqDNhymNu7JNJmXSM6mVUr5CJra68M8yxGyRE4jPzp3jEZVz7PFCFe2f7CkNfy2e8t9GsSmPMyP",
  "key23": "3i6r9qJUzM2JhALPdsVYDvJKnASuuSL6KcU1yBhvcr9HK7D4G7NahHqWue9dnvG7KC5phKpbpc1kibcNPh7DwoUo",
  "key24": "33h3TPXZJsWNGEZx3hJZvSg1JnA4ixrsCnM3rZh6TBkgbyDm1PUfrmiR1DXSJbVkexMXANEBfVBiGhQemf1akec9",
  "key25": "5hnHQEkUYXZGyQxgNJApKSvqeLqGDPQEZY1vwwMerKZUaZgCUeKudcSvtrkr8191pC8UrGi3dveo8ofhD73BtpEn",
  "key26": "qyguFvayky42nnCzPvMzHPLWvDNJiGUEkoXgavyRMXZtfQCmHyPVQFjGcrKwGMW1f894Kw5RRWyMw7hnEMQHByy",
  "key27": "3rKirJevz4UEvpA8ibDVC3e726hEEtrifospVbAVEeHYkrmm3ZNgg1jxAdc7EYbERsFJFTAfbhVubNFZhVjmJ8Rd",
  "key28": "2A2uGfpj8j72qd1MCDkpj6zaHpbybnVHpBFybuPM5hUhfvKKve8sMx9Z4MiXuaqmpCJwhKa9c1gmwi99XGFt5N81",
  "key29": "3dyTtpsFo7R6Lz8Ud3GJ5fcVDaA1Y1EiAnG3e1qDvsB5MCkbYLp9KyN7Jg6TSSHrsFVtq19q71P28Gn4WNqY32ef",
  "key30": "4XhHYiVAsts5qCkHDbK7YxEJmL7BhRrLNxSvnsdR3bC9NnWG2ZCXaQztwV5oKCsyxMzUwxGpZE5cPqZr2pdcaMwx",
  "key31": "51reMCwLcFD8CLytWpNS2VufhCSpyXFBPceq6kVbzWBdG8gSUyGoAcpd6bLqAVfPGXkdfrgje6JVoKPDsh3NE7s4",
  "key32": "4vXC1ratKC6hctgKnerrHK8RMCFRr42qoExXCVSejts3cTGkFbQnC1sc9GbKy7JqZAmbFeCGoEyif9b3WgLPQ3dW",
  "key33": "3HtJThLjtqTaZNZixKqWjyuMSmVVUF4svAkSXuKxajizQxiotgDytRib1qhdPF13JAtqHsx7kKVAZAWNEV9D7qTN",
  "key34": "2i3NAE9Z3BqKi3nGFSsQZTeg1nmZ2Mx8hati2PuVQKH4F3NLCUt6CjUAupD958jvV2AfxKvDznczCndCVbhJNKZz",
  "key35": "2DeSmRxoruFUJEiJgQ4eLDrvDRJmEGxMaKWmh9oWEAqJgfWr3QaPvNvqnch9i4gebAk6M92FrZpNbvhURSghPenj",
  "key36": "3hbjL41cpZv7Eoe3MjSdXnrnNKApg29VkModbgKSuSgmaGZ9g49dTuZ8gaTGS7YKQkmET8LZoYyaB6Mwx3trbrU7",
  "key37": "TvpcjjaswkScdFzb4mcE3NcMV7x7mVUbZgZ1aFqRLXMMBBNwWRbpRMXjvBfZrHe5bRGkcD1PEGs1g5M5JdjTCyz",
  "key38": "2RXGgucJQ3s1jcadMSB8JDacNk8snytDTeuKJuhyH972g3FYqadQmZFDFgRfgcfT3yyV4WM9zvFek1tR9M8yiAiN",
  "key39": "4bGUATkNQJuz73ZhbM8ieeiPhvNrvKF6rZ96Zx1faQgsXJuasgm4JjK3FALvYfAHu6wBqAYNGvg8VUfHGMppBSmx",
  "key40": "7B7NgmjQYn3qvDko9RDLrFr42vz2wc5QzQ6DLtG5r1ibA434KYks5yKf6G88YW4W5Wem5bdfrRhCw8NMadwBLsQ",
  "key41": "4hGf3KYkmtcbL7QdhnRuAppAzx3SM42pwcWwvtL4u8JwhWKk5RvSG2jeVEE1tLZ5tbSwbhVaBftFZkpSdBoKWYvL",
  "key42": "4XvAzGSBK6kJ31DVZratsAUcT9AWszJGZZiL3C8vXtuS2H43Nk2MbKLYwpEAxqtobgetBRH69uDgtPPsxyKKRULo",
  "key43": "3cFwquQKQotRGDR7jLh4iAw5rYj3q2issZGDFVFXtgEfFS2cEfggZ3AqQXHHVLSzBvXutMpeXKwywoeSAnss8RZU"
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
