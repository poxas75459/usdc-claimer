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
    "3MTPUS3PXNRBggKiYcxExW5xHcGCYaFMrZymqv8s1wTH8t7ZqMB2sudT9GsWf5syDS6jZGL9exBLswSxjRbjojTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LPzLM614kXHNDsm462qXgDsaiGiL1vgYC66Y3EVxFpFoSYfJhybhuPPvCd6JVb51J9BTgj2z2sUJ7QHMSt4gqp",
  "key1": "3z7uy9GcDxJmidZAEhyoVg5agQfU4qkKL57YLDZGLhM1tvmjXdGLYBjtaaHNLD7iHFRJV2qA7oNez9gxRPVXZd16",
  "key2": "54CJHjxjTMAUkhwtqpswm5p99wJ31z2rsndyYWbbg9PEvvBfSrjUDYqDA8hxRDsZW6qwWS8wMQPDJaBTyTaPaFH3",
  "key3": "t18huftGjZxo8KEhUP3CL5V7WuEwG7f4U8hRXBciabz9FQYfTnC3eLMjuJwTF34dtKkRa82dF2THuupJYjBwHRE",
  "key4": "2eKvjT86HRk6AHHZcf6wTudijbrZ3DboHpBRcy73GGAPPKvCJPfj2yMtHJNZpbLz13pcKL2FXPGRGQLV2JR3wQ6r",
  "key5": "2A7eBK5Cr3UdedJbf4zuzKoeWLNpzZpUduph7emNiGT5KygMmVKVVcUi3XnFNeioaM194VdXA3PJy4fR6UzSVXiq",
  "key6": "3aoiqBsBof7VqDCGzYWE3LAFo9gjJ7h8FvM2wxDFUbRrWQ7qHmQ6RxmshtUgwLhd1rKZJfpPqAephJuqHYcaEVKR",
  "key7": "3nKkjR1dXw3cR5JGtgjCM8JjgtUUeHYa61YctGbUhVf4kX1Fn2d1qx6RBcsazdBn4ko52Uhurg9c4uhd391DcFdb",
  "key8": "33ZxqQR7EVHCR1DvxumyLLkiFu4RCEBkdyfaymyChJKxeMC8Pf8GZ6VWb1HqsZ2G4tCFX5zPSUvdBvkhC5t5PHKA",
  "key9": "2Gvks6rSLjQgaknzmmVh9oHhynFt52whWQUD72W8yePcS3JZ4RPso9JGHz1jBbi3w59sQe1gqAcoxFVTL9wuyGbt",
  "key10": "2K5nrs5Nn5EXBitUrryaAy9wZf5NK9wfM6mgAWRodVoVxkvweK31k7Fo2V2pE8bcCogMboHcStgUnDDTVhhcdCGi",
  "key11": "5si4DkmnkfwcbzJtqEehEvwJ6p53xW4ReotLe54BuF7KzBj7YF4SMYrrCbVHSYRwrbB3d52x5eiUa6Knyy9LEDwS",
  "key12": "2VDpgmpGmSM9KQWKDcoebGxAnpPoBT6x16PZvHLLixYsRAfo17hQcwtyrcnfafQcHG9b8cyEZd7zSBDtB3VaR1LB",
  "key13": "5ixytnafCju1xLCbpZ2pWmvBed3NdCXVpGqw9Jdr2MYdS77wVFbeEANkY27PDEW9JvAoT5TXKvXMPmfE58VBmd6p",
  "key14": "1CrwckT5Pd1Ka6jdbcXeYCVRRitMiGY5zb1ciAWc7UqptoiVKAhqpAMNQ3cYhFczSsQH9rCaV4vvLLiMRMiKRLy",
  "key15": "Ew1Hfh6FiHoSB4JpRvykyFoyacNxmRqFfaDBHktyFh9xxs7YJwyziT5L8DAEACvPqgq1wLzhMrrtDr8DfMwk5rp",
  "key16": "4cyUxtgu9VDcoV8fenbssjK6nr8Enr2k4xRYK6EVfJ9ATewpo5j7KCpKyGL6sogtSDrpiT19CpkhZoC7TJQfmpXE",
  "key17": "CdE8jqqVWPvG9ddRt38oZR2PhC1TrMixUNbpFNp9HnLf9nvw1buFfvovvXnAtQjz3XKZGaDJoCnDcmahRKYHEap",
  "key18": "4qBUqeBLU1z5wbQQ4pTNkStYeZmSjnkNemWZWQ3TPDLk8KjKyhus6kJL1pZSpwWsM73fttZUmXoxes8jCjQN56Uc",
  "key19": "2Dy3nAvwa2bnkAL8U9vjhJn1ZchBWkqqf734e7ni2wdaoKieK3hp15jGwGW95yYe6QzgMx4Uob5bzqxotRTQWPaz",
  "key20": "23jV693dekxJgpbnLVZ1mD3rXBSrFxmbSHyM4i75BXAEwxrVYgPno4N7GUWzxPFvFXjUitQ2kLoyZJGK6AL4RqJe",
  "key21": "5KygeEG7oKcftN4q45HoJNsS24LQBiNVnxj8tDEuaHaYSUUfNVcZibqQTjEGMQNgGNac9BXUeTmnc7BKvuHWMiRL",
  "key22": "mueAGrqia8mUis5b8e498Pwf77wK8X1Vzz6z3SkyxCMsFbzJwexSzfCpnU2kJN9bESTqFomBCPAV73WtBr1MVSP",
  "key23": "5gV6NuvRFMtJKko1KuEsQts4JUeD2Ubgw4HNnTGoyzJvp8HVHaUUn7jc4oFB7he3UEjuvdjztXavxUtLtnd2F2Lb",
  "key24": "5J8qD5aMEtVWhJKVfjEFsR19m5P7EjxiiiamhmxHHS7HcmRVja5b3aQPXSwzuhcfCD9xCsFnvqh9LXB3MHrJ1QHR",
  "key25": "yUagQPqFjdT87cDZEGzjTfRoLZFEXUM7Jv3QEYefTGDv1162mdDzzHmJdAdPGM1L7geSByJYFAX2DTxBSJ4PLya",
  "key26": "2HWSJ6aQR7FU6VPqHBY9GCPy8hEsWg9JJNuW7DFozxXxiyE7abcb8SZstHBEX8mjx2t39N3krB5UEKxDHbbRmyUH",
  "key27": "4GP1185iFEKH9rdHMUW9uLjhSJ66AV9UeBgv15Ev36jLsBj1Qaa7TfVsdcDfEdMvBuGnmyuGLg1V6PgrBMRU8nVz",
  "key28": "4wCoC4AzJALzgCspDxoHzgrUdkquVEKuSEWrctqrmvMrgK1fSVcMCh16gFiB7bFfc42nMKtWrrsptEps63T8LoZW",
  "key29": "3cMRqEEKadV4vEbzyChTfRzxNamxk2UzZaMYJtUwv1cdKfR2kXQiUgxQtWTiawZYE7wiECcp4fQbwL4ePaDKHqHv",
  "key30": "3aPHgpPv8bKQkBAJYsnh4hpAXbGdaRfnPLLibfUn8XP9XsXeyvMvWg8aV9wwET95teQKCwYELnJa5NnrsFSGcKTM",
  "key31": "27Yy8uyDe3kjvq8Squeu8Aow338J1GXsvLspb7WYKcbXSJ8YwjiduUJrnQCY7fC2pyG5UYibbpHGyhbjgziupZ2v",
  "key32": "39XH4Tq5w4t3bt2Yc8ZCFnoxyeHW6YLbRZwukKVPvk8syGRqbRs1uc8qT4mGQHZETzSGqgXaaJZsVPgPs1xt4jhP",
  "key33": "41TFzzQahzQDjCdBTCs1ew2VX7s1TiojPdN19AxHhn7tptPmmJY3K1Z5bCiaer79n7ciyYoxim4xzYJW1zWLsG6"
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
