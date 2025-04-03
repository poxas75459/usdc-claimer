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
    "63Z9DthQBzRTF2fTQ2PgHZkkD3gLKvyHkXb3LDqKp6UTCCsWqp2VLprpKithXt8uJzftTxmViwxacXuzz5g7H3xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VnjRMMGz4DKhZFXLEf5KaRfE6QgM7uzqyiot2ua2PFPcKju7evhZ9MNKUbfKXVhifsJeoxq5BnWhDHfnnXg3rqi",
  "key1": "5jYZEbLfEXGyy1a4mFRkZ51jp86RGEH9qJB7QsumTj33Dv1Yiz6RngTzpAF2XCbuTrHbZMBUhaZTC7nSwmv9bz2D",
  "key2": "5bHdD7uZWF9eBvJnVsvVgtimBKw9KTk1U16J6EAPYvEWjmKnBKayudnxrU6xF7qXbE1LeCZGnaArTtZ3zkMY5j7L",
  "key3": "66xYgwYcqrX7iEjuqvikfXyxJadKB3uYU8oLpVeksxLeRni21mWgy1soHpCJeFNjuuRo6cNAKx3cdRNrHFS1Fnxy",
  "key4": "2HANGFgNykrN1FcXUXsEGWztifnExHX1a2bJ2351PjzyXm8EjueZ1woMR4sNzMKvtLLGRuYC3fKBwecnkFqHRERU",
  "key5": "NA6g6Ec4mkMFuivkvoLBGAWHBn3CE9JiV3foKWKu6rKCfAu5f3RfPwgwmNZ5wGd63xp6zSpeQBH1zsrYJ4hZAwH",
  "key6": "2CQBWMEzfBXfNFYbRhaQ8rKG85R2sdJcYtu7H3cxrsTZJpjSi4ZB8TM35eZGF4obCLvFHuynhRZ98bWgDWRWsX4u",
  "key7": "5NLZ8sRDV4rLkz514YQ3sCMAhULhVyqy2M3D5ZfxXd1L8eSwVg2LDHz9Z6Ngkxd9kz9ENygkz74RtURiJMUMxEoK",
  "key8": "EH5j3SULygMyVjdGbEQyJnT1KKFF3dLT1bg9wxgkQ8DPBiM7Nyjb2Y1EeHvRWtNUZS23uoMt5u7fyyvtRhRmkca",
  "key9": "2ymc8LRf5chSLUDz4Ji3fMgiEN35ho8iDvNQeL8nsVzZQ8GfHZpd9Q3hETWZLCpn1aG4jciae1781ZPWBuPiQuo6",
  "key10": "5MxGK1M3tEM5NbUhd77Bxo4Eha7BSf2eeb2j51NnbpYtkbUNSzSp7Ueg97ZRxj4TRYzvmJ1hYCzvx1BfTPU8rRzz",
  "key11": "5YHo5CwdUpbo4zpRpQjebgQnG2TCXKf8GbNuWc8UBevHjQ5MZ1prWBw65ZMhdPsBevRGGMVMj8wZh5WSsgVuzTgW",
  "key12": "k1ZqSKGaW9yzgVp62q3XVnGdgog2uZ7E4KUhFF8oi9pKAqTzACXG7emnxnWm8nEUwjfEM263ZZYSmBwAyYA95BJ",
  "key13": "57Y6hM2qdtdGg4ruTDeuA86Sf2KkJEZNCa1gDAMaiSCiyaw4A3ynUJZnJdeSA3nTGgj7RABeHpdSvfFyGgyVFtq6",
  "key14": "27J6Rjm9hv49jNPJnDn9B5TTtSWS7jGNC85mXmEcweVCvdrdKJ1yLBbW8FyVBngt2oBZ2WQyNYHo24uuN7uqZwcK",
  "key15": "2WKftWgZxPKJhjnER9zbr3wXMEn61FAdsgLoEXKQZSczurc3uNtm3zPwZeJDw9jVLvLvMBh2377qXiQdeu6y7bo1",
  "key16": "2qpA6xPixLa9DaXLdMobxFXuF4WcoLpQVGMH7GDDFTJJ3jwCqSUgxNJjm1mghESJdSVVnCQtqHwm1CJSLKqDvXKD",
  "key17": "53wxrY922GyyvyB7ThS1fneT5zcRq6QqRfQ8afThCu7ynAjGEJSTVk9u3p2fYyTdC1HgVfeaAQp2HR3Z4JW4Grnm",
  "key18": "5Mb9puMYJzQNhtaGuMGyiA97XKow4Dhm1fZBRh4xQ5PEnPE9L6hazB51956s2sFwARBjGwCfS29cP9a19sVFDES8",
  "key19": "2zgEc6oMuHtgzwYi5bwtkNnX6ZaawgU1VTWQRoyahHyhJUkeTRp9qRD1dPYUmEQDKJYjBkQz7TqwuECCxjJSZ64d",
  "key20": "2Us9HfGBM3TV5fcCnqxR8UFfMaNCLnuLkXQNMgU5LStj6Y3SEyRmyDyngdLtihamjtqmNDE7ECor1M4zhNKXdXEx",
  "key21": "3UdQ5KVh3sbj3ZGuC9pE3TQKJaadPsbU1rZLWwuakRqsDg67rSKLxe8861MfBsbykSC9twuqACyuKtq5wDRPBf51",
  "key22": "QoZPSHgPhgr7vHUJi73vomYstU3q2L6udZUyhb8ySfg6aPeTeZVvTgVApoDgHiZPJ3aYtEUBGkxhB2cLxL5feHN",
  "key23": "qHNJfEqbGLVhqxEm6AbK758FmYQAsn1nmui6qcASvu8xJh4d9g4PBX56okFZxHXkoYPdg4qbe7M26qpJRYdosL9",
  "key24": "59Y7rabEkFtF2J25wtUvMTiDCSWEeaA1V5bH7BGCLWNKX7VbFjMSZ2aHbDtN7WA2yY7kHES9amGmEGGVrqnG4Gc5",
  "key25": "48MFeahj1455x4UJ5jSrtmVo2sSwSbjjvuFJFujZiakQRomr6jHS8ehRpBgJ9mPWS3LXrUyJYZ4YQJpK6rQqamFD",
  "key26": "2wsUicyNcvZo4f6aozNi25CTJxEjKtx21vSvQYxTLxcj4ahr1ZMyLNFq8GvrKHmzkCQPCV5ZECnohveky1dQr6Y2",
  "key27": "Rtgc559jFKyysVRWzZ3RK9va96vXGZPVqXkW2sP51CVnmvuZPYKcpPPr8FnBvuzDFvc2A9Kv4KMtk45weRBYF6J",
  "key28": "5H7Wg7Y8R4GnsGiFNVW1NPxEfkSwN1oHA55pRF3GxRp6USsvdcM8iDfiVNsQDDYmay814fSaDjaTZZKCScWA6RCC",
  "key29": "5PMnyBVfeKyQSTFFybRfbZWTPCtmDL8oPNanSQbnYVueiZt6fSGKkUeiWW9KKrhvW3KNCavqwuW4zm2jkP4mWGVd",
  "key30": "4ausvR7Z2gKq2fbc2dXoogqW9jihAjLGyAxJUTGEWTHUWoUbrYkmER4kR1BaGLTrzNp6RronMWBVSxoSNAu7Y7tP",
  "key31": "dWh4gy79HW7fxHC6HxkMFkE2UXVWFq3YoFfiQtAzdhJTcgJFc54HoQxw8GHzjw8VwQntTiBc6KQ74fp4KFx34Ud",
  "key32": "4PskFPnha2KfAH13CbCCf3uQHBawB3FDYzDS1dJ2ixCARHfyhPRNBaytqyYikjfT7wFjPeX1kXAphSC9t89fTMBP",
  "key33": "3kEMJTz9ug8E72PzYv2grXsw6fFo6TkWo7MLnfXY8KSVx5BGY27XVrd7CKe5XyUsFKfgynNb24EXGr1Vmy1DNAim",
  "key34": "2W4Z2BLXsqHX14WHH8r7hq6Gs3cyJeDRXH36XwDDWi11gXErk9w4ESsY5nckfABxda9cyeVgoUT5pgffjGdWwtA3",
  "key35": "Eu16vxYuKBtgUvjpUV9edViK4hTifai4eSg65HG41KGQb1CGfgppS2qFCaC2wRVc71qyTTC91A7bHH4qNiNvPXG",
  "key36": "34VRdCpxF58nSF9GwjWdQpKw7qfBi6XAxCAJ52ByoMVUqYahHkEJnr5euqY8qcAbD1xU9aReSx6dssxEm5kCYnwG",
  "key37": "4jYxTPQcJPqzDTchB7zYRDfxfY4igx7Bay6YCUqBWFv6RRyYN9Rxpja2hj1UFyoeNN8qT42AFXD7w1JpSGpoxSby"
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
