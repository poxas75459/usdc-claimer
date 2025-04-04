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
    "4cnK2PoSsCWXU9mskcdn6ME3dhQC9YmEw1EdPmizpPqVuX3tgEXeSu38KXrKKRTF7n1yd2CboSqYNTPMVETA7FQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33fXyBqJYuoQvFkmoUaw7SnN83WVCF873JEbkm4KaHrLD5oyAKyV8fvx8C8gBnBcTBo59Riwbf8hiVp9D6hYxQu1",
  "key1": "5vLdLe6QfvssagqU65AqbU48nHysyBAVpL3Z9Z1NvWB6dgQvqbCLs73KmwKEHDQ1JQkMCRvx22vVhjdH2nXnQfBJ",
  "key2": "3neHZGMaN2hUqTsGvQZ3Uvk2JuiYTthWg1kvHSYNTJtx3Ab3G2KUgkPRY9D7riptarJkhGYBxrKZEKfTP5ThPJ6w",
  "key3": "cjxAiAP1HaEyvmbVHZ22TfXHM21A8Dp9jwcYfURHugVX67XSmMUHFKLnL9EDriaNQpL2B6snPKkovrqMDfw9b4Q",
  "key4": "mRdfvjgvMecxisj37yevyJzLL3dVJEWzyWRoPSDA6NghiSriwotJsDGAWRcp14LPhME65w6KDwEsNgXCriDMqbJ",
  "key5": "4VQevz4eKBKuVQXvkqis8c2nc6hjuQ7PLkh2Kfbm4zAgGSJ8DmLThuAMxTb9352vJzpGkK1uwV3yQDPm7LqPX76x",
  "key6": "5LzKz2LzgtJVDct8gC3Qzryp3dsqkdX9BBwyeKnu4UKu7EciPiyjHRoryQqq497HZAfgFDmdwktzVAf2FdLB4TCS",
  "key7": "3YtaMzdhdioXk9ARtJeCkA9JnQBoHLUyx522G1t9z2TUpXvVLu8roF6jNboDv34KtsxHVedS7TApjuUad2U8cyP",
  "key8": "47c99XLFBZutaF6Km5cpQ4pXn3q1jzjKCNCtMotQcU4gLtEUXNYxHGwjJTUqL3WVC8KdEDGyTs5k3DUr6BC6VMdx",
  "key9": "BZtrwRsWk5cdYuTxgUmdKfB8inecqeoy6rK2Yy3ZzA86EjaVK9mAS3Nkkr3mZZbwGAjasCrt1FtVziN74oP8nap",
  "key10": "61GgAcBecTQ2eg3iYkrQQsnrN9uURat5oExmk5NZnN9exeNzx4rMNx8pTsQYpj4ygQN2F9exwQ7kvXJfWgf3E3Rw",
  "key11": "4AVvKiee5JVZJmVqgF4yHAhnRAnvr4wAG6uuWHzSrke2xPeFzC2GAGwXrJN9XwgKCmkRNGWKbUj63Y22XugF4Hnr",
  "key12": "5JKFNG8akH9qK4Nv9Um8ubKcH38gR5akTcuNqEm7F3Xv9eohCJLmsfVe5ifTFBtB7F8h7cvTSbWSsFJcJeMgFQsi",
  "key13": "5VtqJWMj4gF6C7ZJk1fFTwNz9Rz2sfhFcopdZniLsutxhF7oTYoFxnsPAkrzMSKkm1vzxfq151rAHD4xh69PxgsK",
  "key14": "4G9q6ypuq2qzRmAjguVK1SMeKAzCagtQmcpNQ5iJg71hjg5dNDCVChNP4M5prj7SDRUxKQ3ik8k9rqt6KYWt5Zjz",
  "key15": "51gpsyxsfUjVqeegN4zCkLY67CpnCeuxWqxLCwxquCKZRzgn2k7ZzQZzpuKf9GC7pRrBhGFWZGdWnhWBWsMa4chG",
  "key16": "5fzVx3zvuJQRkXVJShKx9ERyz6ZuHa7RGPyLoDJiarNgtHru55bUTWJfC3W6YfMcLpeCJ7bv3pcu7xWaWrBpso5j",
  "key17": "2VQbVBii14q9rzTAMHs6GWpKbDbno5RzbmjD1A8i82iiXGaAFoUNGxLNYurhkGBWMmgt76dn2GohBLnMMnbjqksq",
  "key18": "i245BLYnsKCUstKFrBVQaZ2b7SMQAXTnCYDjtfHJzzLFUZ6J9oS3oYQEGNABcDCnde9GfVwCmr6CwGnHJC7WQXd",
  "key19": "3EN5KyNoKRTEpMpCcNVfTvwoTNPVMKNMtNHtW23s6onZhRDJ8o1gCiEUcLuMSVN4Vy7fW5k13DL51nbD7gMF38nZ",
  "key20": "6EmFy33D2nixuP3ahfmUiMR1c8LmpiJ9C2xqQjjdBtqUr34WCPbmq7Sasqn1yz4AjCqQ4KQ5LpRRaewJpHTB2HJ",
  "key21": "3HMagsQtoMdBidT4K8yJEzp9znEaLPBKVuxqEwjoEq4x5TtRUKfBtzyFaMaEotKacwoVWYZnNEP4jgXdX4cio2Le",
  "key22": "xiWMHwbPxxdpfALogUexLnW4Rfb3QqxqLDEFVDUcQ1pBWgPZBHiewfnpKi9pCwy6LYcwoJdbBi2TnbcQYQShroc",
  "key23": "4XZTYEzV8TjYqCd3UU4nQZzoB1NAm69Ls4hKH1GPaLXkhdmZKfpojaM7bKSnYT5xBW1JA9vndvbZMaD6GY4e3sEn",
  "key24": "2F5TtP7aDq3jUjrEDoUu8VieZFF8X8rvSNmGEzsLBj571CU1Kbep2igi6uKYZa7kvMNTsttGUoNv9ZwGRRwNKmuz",
  "key25": "363D1eZvjYonFC14Avz6XN565yaGfpyi8NguybUfsdtN6rfdkbY2YpnPvwJRHrvQQjB9YwLyKQQ8DXaGpVVLPX8a",
  "key26": "3nbrfPh31pC3KfJ66pj1y1vBTe7uRsypeupSWKvWVALtPePSMKE9xypVie4T2H1GhoRA81ipvHj5iGRxjHEFVu5K",
  "key27": "4phoNpkr7FoZvXduwooeRVqCAry2bDA1N62DhFEyFuGKN5ubLjiMNQzC2aa8aEKXgMMx3YRJcJShAbBy8j4FKbgs",
  "key28": "3NiYoRoRaoTX4Ct54x7VDNcgYwf6XsAZoAMZJS5fsGN7C59LjrUK6tRjFKSyZ1oFmKt38cPai4Nm5g4pkndSPWbY",
  "key29": "Rern1MeZu8CzzvwtFk6PYhNimhWuS9QbCx88RZW5QxyfBjWpDvw8icD2FFt4RXfgm2j84MGEkte9YP5uGnaYdBH",
  "key30": "2bt49q2nnA3Y82EnmopGiJuwkouGABNAHgFJ4Dqz1omh8Cutbt725dz5Pj21ZN3Z4YZzftvPWtVdC5BTJ6ksmqkM",
  "key31": "oRHhVMRxprbAwSQuYg2oSi5ySE7V8i2iS7jqKnmXCxyZs4XBm75nhHjpL2EBcX9rtRXy79rCECt3cs73XY8bHt5",
  "key32": "3YdnQ6qLrVPd6UB4pDrCXdZt3bESTn9oTk6HTv1yCBiLeuquLdFnKphK8PjQUPVxEEYUdKBhLfqH77ZprPn64fcA",
  "key33": "2bzemY42nASNu5ew4K8cGrQ8ZZR6ghUvJgCun641XDe6bCzuuV1DdeEc2Ew31TNaUH4QMhdyzeoyjPEJAZzp64CB",
  "key34": "4fG5ca1qDog34VG9a1yB5DHHRVFiLU3s3858qHvZ2fKbf1wQXaeiyppK1FKaLbuZqkMU5yfVmviaKWD4gsGsLGiA",
  "key35": "49bxtip6a7XQE5dRo2RpzkMR96QC9SM9wEeBr5kAtPtzeWzLVXND4jauejKrbYRGS1GcfyzQ4v9JE2yQsFxZsRao",
  "key36": "5MkezeQCGcLpRCUxzxmsizJ3n54EnwECi7PdaxRPHFhXmsn6ayTtZ53KEYxKJc1vCbgCHQG67xdEQxoWipPNxduN",
  "key37": "2nZSTJ18qv5Qm3883M9djq2NPeeiJbQ8nehgAmWCQZ2CNwRhHyB5gkFCh7bb42mmXZ8oGgUnZSGzVpeHXtujom9P"
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
