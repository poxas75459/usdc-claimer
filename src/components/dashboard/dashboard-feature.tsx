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
    "7E9RoXZLFCEgaimCeiwDaMS4zaJ5nrFwJjg13BLqcumK2XmLcmUmDzF6gC9h9vkUp1mshLhmSwMssvGuuWyV9g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X732Qrdn3538LZNQNYPiEBxepU9UA58CMiBoFQs2bWQF51cEGyNg3MuCffKPiRuCi4hsPrmRjpuBieuRNLQic6N",
  "key1": "2A6DD41jput9Wa8dAzwqqrQqVm1EMue6ntqY9DuMihXJuH6EWrgTjFPuVmJGGgw356QwgaZEDKZEyr3FrmcYXyU8",
  "key2": "4am4wms46ZE2XTZXcJeyuHv4acmQtSnPyFTL8KzMTsSnQNVgwAQRYHDKg3BMMKWiG6UoYrsbz9EJaTJuK99GY9Tw",
  "key3": "2W9ddvZg8jH2xVeEN5CcTgGbDDnZGPjk3jRkNAsLaXEJb2aA4Duddq6szNCQeS5sRghrn8mBtpoXnJ26jgJrVuEn",
  "key4": "DccjebE8JWG6kv9HTfq3S5XegyCpTfQx8hcTVqogQWFBFQ7uwz9RRAJQpCrG5UAjxrjyt3mpR3GwEokcEW6R9g3",
  "key5": "5XAt1aYfV2p9ttmEtxJGjA3E4ujpTAApqW7Zr8Frm3jzckThcx1EwbJWmitgv31Xs5DkMRYQVTda1JxFiSRuk1Ac",
  "key6": "52ZqkDyM5jJAhAsbuCnp1Q62VbLfLwtSa8aZ1R1AWQQbyPHzcQ2xZZNyfs4FsgEN2dPEy1bW6MaxfN5fU6F2mrM6",
  "key7": "4PRTeuHP1g9bt5h853445h59VJzxLt87DWV8dNksSE8s1UQM9NjqiZoUSVmUK7qgsvK3nmfLBu8QVxTkezed28VR",
  "key8": "5hFBpBzyFNoRGrufk9RSEf2mPLVomt73qWpsmUs5iaRrAAhpsLDMH3ccF3wUNNiqhT2JQkBS5q9Wj1aitPomg65e",
  "key9": "4ebvGNaABb27Gh1wePrBnphBzCCUuarBX9wZoCJqyUJS7vKVkV53o1irdj3PNJ7KgDsN3ADVY3rasZ8u4f8MGtYL",
  "key10": "2tTTWRVBr7QQfJW5dhsHSS5g7hJQevLGWHWaebSvQNxuRff5tM2u4udhwWTf751FRzpvewET6eSNUWcGJRRKEuoA",
  "key11": "34Sf4U7zs1HoYoDEp8b8mQQjikRRKU6u4sXEHCpcm8VWbuPpaygsiS2LQXxDjrv4q4vFQo6yPyJEFxMK9Hmy4uHi",
  "key12": "2npY79FCHuiFD5GhvGH3wiFH4Rm5DXgEHXdnMEPDnnaMApVbEPXpDjXrSijCF4PdazviYit5mSZmEE47zAuq8K9x",
  "key13": "5MJpBbQ9ouWgNnG43zfW7GSzpMHuwj7TxLnjENnPWDKbPUBSqaZBKsDWu2XuzjCxeDJoj5kTdGEyzqozbkTiouc4",
  "key14": "3YGGRxGw2JXTttU5UcMLwpMEzTeH4j91pnCWvi68W4Kk3ZyqXHswcMbrc5cNxXj1Zs1oDhMSz4SpHAfwD3SnGrvt",
  "key15": "rfBtogNFSESZi21mBTjYYYunezBNKhyuWhPu6cWdDmJ8VdRmA9fDiKxEU7MyXxUuzgXYzjCXfdampLykFLx78Dz",
  "key16": "3jYyxLLVsNMfGJrnYzrGpLFn979gFHHjrfU4LskD71XmRZXQKsfHKqCR6WEDc3RWanejGHt9KCqoz8B4qpTur6kR",
  "key17": "s2tdaZgx4JNk4gcftqr2RtaRnKMiPTndvZdrjCfXYZzevAMb8ubDYkkpoYp6ptsEHPkaDPJAbBorCjvSqGLDrRW",
  "key18": "2QFTxEg5GEJUGsdw8s36Kqu1q56P69mcDKeLcp7ZrBLaTY2Es1tYBkW4G8DiwKQac2LY49Qv2MwtgSZCH8f2X1tA",
  "key19": "3516iiwSSHMrYBrtyXDX5Nxhh7WRA3gvta118wWEroVCVTRgHbUL2P7JNsBWum4kqNUHgCRtniD8c6mm655KKcTN",
  "key20": "5z3PQYaW8s9uGDz1ZzQFiZuWRMFAiciHoBKNFUMHKVMyEJ5XMvbYGGQNh2Ddcm95EvzXLKyNyncB83UmeSauEUv5",
  "key21": "3epazB3ojHWeUBKdEuFNydvLg4UFgCW4QCJPXLjy7yyRsPCE9CuR4Xc1rYL4QvTgNkJCGmp6gnYMtSaygjpGMpA2",
  "key22": "3muFNRVR2eWKzYNFdboeAG4KMkwu1zQWY5wLywfksCnYAuYtmMnvzYoPM4PET4SgQ32uTNvK9PE7gJ1Uiz591Pdh",
  "key23": "66S4zHJUqNtnLkxvGxtGKL9eVpaGfXjqg2rcjob4xRm8Zqr1vqmjgJ8d8LA1LhVBJyacVeZgKQLR6oAfyugTti5A",
  "key24": "42BoxsuKH326NbVr5ZSEkQYFBVi77sVFCAPfJUNdXD1y8eXkHCKkzWk1j5WcQHLiTmMdjSwmsMkLY9E6pHvVwTZ3",
  "key25": "3kRiCgqFEenDWu4fUn7HrzsLvfWEfReSnHjwNFuuCJmwEwGwZYZsnjUy7dMqxzdprVD1RJheumes6hrCcfFVpcNT",
  "key26": "2RSiaLjKtDVe1WcbMKYhvR5NkF6R45LtyiCjRrR8deQ2xNqApRoej1d7svsNS3v9ZoGTon4hiGpSgcHYwgZ2RXff",
  "key27": "4ks9WajtzMaHqHdpHNzhGoiwhrmRagwxTakHroU4iMzqbxv6dcAn3byDw87Xcu7mQWrvBsNJhQECrPVjCJ6VrXjQ",
  "key28": "fw9wEDtPvWTiHggy3P4LU5rvn4cGfUj1Y5auT2i783ATTSxQrKSE51bCi1SREU7KQrQc3QYp6AY3JyQow2JZijK",
  "key29": "PsJBvn1io6s1EFPuivJMTyvBTEqkZkip3qudVZBghQmsfMTaXzwPyg4pcdUgDbkSTrjjawk68HSKF24bXL3PzV5",
  "key30": "2QHpL289nRDSLc7Qnzq3Cq4amqyYWiHii1oLpxfPmqTHxrXFtV4dGEQqRdPLtkAfJPbfB9w4m3aS7eLSUkqxmoMV",
  "key31": "5iu7AEv5TherpcUVxW8m2i8nrcyqXETQ2zTYMwGbKpJMurWAvM66tFdJp1HgapHmGVACuAgMAWqgYNxa54EmqLZ8",
  "key32": "4ZAdqEosiwYtWNK4ha2fnG5bDteVBKsMht9hNqMDM1mjv8gjX37g4gktMsKaJEP8hsrsmoX7zxAYzjwiy2u1G1MS",
  "key33": "vEW4TcdrPt1YF54wsx2g4PjAzGHavSTb4ipokS7JAQSzt2yrfcABXDEDNGBmLJsUbdwVErqeENfL33ZwJv83LSk",
  "key34": "4RXkodabqXkJM2ia9Bg1LfyfgwUr3GqQosbBA56C4pmRnShUAnCEyaz9doVz91JY6NaxDfc4g5eVNND7K4NHbDjc",
  "key35": "1t8cvoG6GiQw84c3TEPutGdEwjt8JxscRHJABduch9iqnBBwLrRQbZsEtwU4yw8a7MfAnyYYjvcwqW3Ed7KttKw",
  "key36": "2mfGRzvgA1QJmMyktanm8hPAYtWkdv2Eo8qFXSLXuHU2u86YFjLjv8EzP6eST99Lx5e9A4YwMFf4Xs4kmmfRFuYQ"
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
