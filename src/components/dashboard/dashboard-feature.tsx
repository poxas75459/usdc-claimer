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
    "WWBGhb7ft5Qxv2BokHH1BeJ3Am9yqpGgoQMT7nGTxBHukGxKQ3cXjMB2TtMtn5482TcoRqf5skBNW6NF37jFceJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCFom6hN66SrXxthrvzt3vLYfQ6YqxjUv8S6i6TssjqMh9WP5M4VwdqKrMW8WsGitLbZjq2dwd4Tiy7r4bv3Lfg",
  "key1": "2nz2G1iwhwaWMKAtBJGSC6vicZjHbZ3Gggr4NBFXUGWCidWowex1G92Yd7oFSeRF9Jtr4HLNXBJ31Szu7TQDbtJ8",
  "key2": "4mdeERtfxo8fk93QXqyFz9CgphVxQGcCQZrcnPZN7zpdQEKUcstThXzFmMqZ8avw7mqoCjrjPAjiLRBti6MsbHAh",
  "key3": "uW4T1LQm2S62WcaHh5b7jJr7ZXS3fKHnStLaqNSyLaTpuUqh7SsFRkBNdMC2QWpqTpvxFAHuMfGFfTxQThhBX1f",
  "key4": "36cdpPe6xJyCtsxdg52gHVgqZNgdSncNddPHyHWMxf1wfqRi4xFZH2wTVFCokeEoiwSWcnSEdKxDCUXsDDY8rGkn",
  "key5": "4hkofuZSRFWTAJK9G6DKgqAYSUZDpmfgBKocQbFYxy1rRsUBwUbqwMsE1GCDLNCqxfSEYQveYaatffKxVMJNVcdx",
  "key6": "56BoDjyNszTjUHYTSucnSKdVNfkgfiuHHEUqnE4b9bWtTkiUAjYK9AKTsxJ62TFoEjBMxAp4Cn6yZJz5WaJreRSp",
  "key7": "eqik44cPtnfVNvEt7pacC6RsVRnmkUbn7xqtzZvRV5epnQUkt955RtaZDPWPNVdz1wt1XR3mjTzFSVLcfGLvHwp",
  "key8": "286esZ5wxB4oEXaG8d1hvyED4L6FemoJz74NARUj3YcxahVreiyzKUesLuLBt76rpRSMBt7Pv26VykpXGf5hbstm",
  "key9": "4m8B3LEdvnRoXvjEU1VotWKEK527fLqGNJs69tg96hGGur15iiRCb4xLSgXZBPZeHnFNMwYUrpydmoit8pWB3pHm",
  "key10": "2xc1kh49uAz7AV7zVpS9wKQCbN8aP6GJhAFqiukwbiNzUrLmqdk5hEu7GrpSPrHy6Y8buAGvNV4ZRmqQHzMnVmy5",
  "key11": "4HuwyvedAzt3fizGbCrZmNbdjUuMihEFpvDbLfog34FDaGSWz2KTvwj15pSwwNrcjgocqTDMWXDBgdudMBppAMob",
  "key12": "5jjmdmiySvmHMyhGctYZGaJ6WreuuqKoBg3eWTySMgZ4F9FrPc2KcyYQrasD2hyxTrkSmaGj9QLqfuANkJNms7cg",
  "key13": "5wiYu8qmp2wm9wP6XNrnqrHdr9tKGPZ3RhEUT1HXNt6gUpMQF6De8Go1YzGGdD8B216VJCrH7d9UHdkRKhdJ5NKL",
  "key14": "y19xfxFz8B3qRu7eT9UVWM6sVA3M8TGb2d29AW7emcX95CjbqMjSv3gqNnYvpo7crrYabZKD7TeRcTpzMAzLMG7",
  "key15": "53KDQeTej1zMGRkWz1N2unEsRxnemVqFDBJm8jvpMBvEyNet8ianytqMxAj5nbrPD73eX6VUjk4UEq6bVXS8pQ7T",
  "key16": "41sZLpoEpmigY1KVvbRsVMYMh4aiC1vMbZK6vqWjpN1NH24Mj8jmTGD9eqBk1dJEdLvw5y43xf2vkWhm8zM34CcC",
  "key17": "5e3DumieEQCeTP6EHTppoDY3nGJNbeM8mviVeGYBjhNpTXLuAFKwquKbX1dkz56v7NWLa2rgjQ3kZZn1ieX5Ltd1",
  "key18": "3zimmiLAv4BJ5a2F7nvjBK1RECfeBMfBUKsTVsDJnphSebmeFWrwyYn8NcRX9csMyswrc9HuantQmfHp911LDzh7",
  "key19": "3tN7d25747ZNdEZVCJtnvrEdP6Mc46hRjNwCRYCAkmv1E3KmQpTkDU5BSKXv2tVn7MxgEkTvmhv5jf3za33qvZ7e",
  "key20": "4VfgoWCzPYCpb9H3dyAsMKtM6mnVj3oruToKiTQ9NMcbH8Zfix56fi5L1ft5XDSXh4Px5vnqgKZ5nCZNX4iwbFx9",
  "key21": "5cupkRQUrXapyQo1s5bBtZG7iE9WRpsHaLkAWtGq2WKg73Twz9gt7RvGTVo8X5McQNHqizc5tK1H5eApQmTsXg3",
  "key22": "245WFQWEnHnk8duKbSNqw6FMtMrYfqVZYCttXRwvHZxk53PuCN4xZ3wUJxtjECCqbDuEpSwWe9cfYCfktpFbLau1",
  "key23": "3zR7cDyzugneMdB29Mv7K99GgPoqkiNhEGpYP3s4wHN7LNHSNnyQPMzaVufnZT8Zeboax4egShzEShek2QgD9Lrm",
  "key24": "39uQWNfMwSkgYRZpRSqovfWh3mr74MjWKiALEeDvMRXpPZMdWCR6vjvWY4m9DPp2u7fHe8emR7eBu1a6HNxUtUZA",
  "key25": "4MZ3HW9uvVLQNy4uQphmcoz9PdrFVyuGmBWC9D9khiuDvMwxwrxwy5kS4h8ZW71pXweh1puHprepCPx2FP11qar4",
  "key26": "48K8soZ6MtHZSddyo7bGPYyEnso4z1a9vHAseM11n2uLPXwTvtjgG15QCtXL6f1Ya4ce6usgYNwPb3QTRbS7oPaz",
  "key27": "3kZNEFKLxLF8qy2ChuAHmgkZyWuMwx2JDePNJ3Mm9LfoYj8QeLq7MjbB5rewuknmJoZQWmjsyNCYkRuFXvLbwVa5",
  "key28": "iDzwZX92E7eAt35PPExig3YqQ6Gjraq3sBtMoNP4t6WhGEKy3G65W4hB1mFPTw3ZjKEcnAhzLWXKhZcRbKbExGK",
  "key29": "47cJKxbxhjj7J3ybkp3FMScRuTzN9PFDbz96MvwiCAXoWbMWzdnok8E9fJ9Ua5epELQdfaDDQ8u6koJagtk6wRyV",
  "key30": "4FMMzE6BLM1ZTqBa9dtxdQtwu81QMb8sEhSZEsDsLeyuUUpbnkAzWpmVQEkWKQVVRCtpum21TPA4C7UhwmurZikp",
  "key31": "5r5mUL35crZZFskt1YgPTRvUTSm98hwpBoZ93Vb1Cvn2BiRiNg6CpqXbAcZm1KFWpoKYfsrhtyR8fhWiF54MW3vN",
  "key32": "4cQ9aGWcnpReenDfc4hJpkCg2NQcXXeiJq9Wq2tQLtNcfpfZNTH1WRrmNsv3QZR4yaF1uvJbnjDMK4k44XDKy9fk",
  "key33": "5wu3gy4LQz5gveNXCnVkS5soTxuk8Q8Fu9ij3988brTHsE72GWnga6PQK214rTJBmHRyr1wRGtNw45wJRuckQ1mo",
  "key34": "3Qg88gTXUvWPzcCWB9YK7H3dg9kiSx19HYxAoGtd7RF6zb2S7v9ECmhU2m2wFqHjaUQoCcoBTkQjU6129A8p1sMG",
  "key35": "2TyYF8YxuQRLXqkpVaaHxBid68a8CNrSZJBjEDKYpMtQQxo9g2uKJPbgaizU9vN6mLXvrnmXxe7vQpsZdSoKmwS7",
  "key36": "5MBUqY9RkcEPSjcySxEyg9ye6CXkHx7jwJUn7nhfLAYr6zcsNeSnAZSfPVDUveMN3svZwKpBqExGyPW8LPzPg3zQ",
  "key37": "K1yyTfCPtcmdUVYHbwDQ2LepWmc4ZK8o5KuQoy6sW57N6uLfhNqR1bTQPJDvzRE2DrYQVkFiND8cw4oxD8wpHxj",
  "key38": "3G3i2bTdc1Aa1ipwMEo7Af7h98YUxkR2zS6LTFBzHthha2RzA6YiEC2h1626qWq8YXStdwsBCkX3HWti46vuBCaV",
  "key39": "KpVcYxtdTJf28Vio8ErtRX6cWS2M2xSpnqHvrDi4rzYP2uCTirdG8vPBECth3qGfnMGpRtqxWrhwsUWrx5dDyxk",
  "key40": "3L2euNtDcB54sFPqBAadH3cpgXaU7UyrD67ZkeTqCCuqakoWtMhSB5jKkThB8Cpv4YxmpMkXGpqJ42FRRbr8oGTq",
  "key41": "2pgHw59HyPoxwCsg4AbkDvJVXPS5j19VnL6SUPDEEKAoPUxq5UNq8pvmMwwQWGmcnBBGJvzChk6dLGQNGa3hx3Wd",
  "key42": "4URptom5RdG4PjK59apzk491SffAGaW4H1hnbFHS92zRp8nUuGFNBQKzykbCxV8k1cRAXHNvPG5JXnZHvXRZpRYP",
  "key43": "5GHzDJ4auaEwRh5gsduD4jhPbmiNMbjFZhqB5TuW5kJF3WGJgmywDQxkmsBDNfvZx3ptSrSuVp6HX3BeZxxsKttn",
  "key44": "3uNN3RG5yQi9UDK7ZxNAzcNradmRNevsgC5DFdcKvFfaxUeKrdyDSnrxzmGJm4fQoasUMwerxKMmmacDRm8dVQjF",
  "key45": "PzCNafxkEPtEcxmCGXauNkyyHDKPCsBszSr3nEju1cgXhvSgJ2xAWXuzvRVtJ8MgEpKH4sLxUNYGByWSSye5ynL",
  "key46": "8xLZrPMGAubkedKvaQiGm732pwJcDeTwniQ6fqT5ZDzyekr2V4miRDWtHe3Mke1swfk21MvqrsF8aCmDf2GBitk",
  "key47": "2J8YpDdT2yNJCePKxEiq11GNMmDAahaq87arN51Y2cXVNzP2nouRyA4pJiTHEjKCYbWyum4VxP2VM4HXjoK5rrJJ",
  "key48": "2m4QwuKBC5mD4gqWEmHeLWsLKhx7UVYf8FQAPZhZXYPMT7AkLJZcuzmEV6ahvNcwpyPHgBXREfuoQBELwBgbE33P"
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
