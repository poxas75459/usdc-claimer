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
    "375VjcPqNfP8jePFF1QpKRnGde81he1giZetJyU7hszqCnTJd9byATbaNL91rwJSFTocJnxXNfXCEYb8c5Q7DnsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScAnV1hcDH12iB7KBiXkqAPR73vK9PLVZFgnAH9Js8j6cR7AtzZvzccfZ2332pJc5QdxMV6Ub6uqMRdBjz2GrMU",
  "key1": "4rEMd9Ur1LcUVdfmGYmD9XTiKWM61VVfvbq6W7irNMKkdKtArX4m8HtoF855ntqhDJ3UGCN8T9Ef3kFXE4bRzSjg",
  "key2": "4dFqFoFd7xh3Rv1dnwb4jhma36yHBL5JNDegzfP1vWsVwYo5kaqxSxoXv3efz4Eapg6pi6uVzD6rtU4NUaVabUHZ",
  "key3": "51m7bCmvmGSzZw9fRTXBRfoCL9e1kzpixZDNUtTQb7evN4wVcjREreTKHKn9rc3JX8TJprGca8tt4N4b8dxCHRnq",
  "key4": "h17crRViNcDbuDzqESgqADfDtpqCA4T76Zh2Hy3ad4ygbdGauo82qPxbedYmCKZPa5tDRdKiXh2NJybqbSkMAev",
  "key5": "doavGGUA643g7wWD95TMC15JcTv9PQ2y5EHgbtaaHaiQJpt1dYU7PsbaT3tSX7wSWmgUjZFL8PeUEiWHotEyx6w",
  "key6": "3PnduNMM5hgToWUZHUdsMNMyLgdAd2rWfQWtu7g61RzaNQy31aTSqYScTJiahXo8r8MmVBHGkXpAxWYiupm2qYwg",
  "key7": "LwdYZ5uvquGXCBPnDgt8ZhjHGpbFyyYb2aMQSKHT3ourEYJNyxY2FCQ2PDb3JbkDS3Yk7BayWZcWvig1SN9FasY",
  "key8": "fsrRzMoZLV2Uu7qmKaHe2MmVEPXMu9PDuLCq6KNG4aQiXC1xLbJFywCtsRUQnJJWLHhEJ2kBZ2HmWcqN9B3M9mW",
  "key9": "4puNQLPuAaStFVCihHtASeCKP5B9YUoRx3Rc2bRBP8CLQ3PTjHUeAMRF2Jy6Y6go2qCWW6mBmxrHMr5pZYh2adhE",
  "key10": "3pRhzyhZ18XPG7hymGes5NtR9VWNsx7x4qw1p9JJZVq6ecnJuAfUgKawD2J3hJxMVGuPRgTRhn6URKYfevpNTi3L",
  "key11": "2VeZ6PveCXCgrfqxJwMbxPdmpCUaETjxgkusCE7maAw3Jr4kE2xYSSBWfztXwHyVhd3ukdEvbLezuqtak9zmBpLk",
  "key12": "5BAnbgyYhFYcVX4SgQxbHnWvGy9yohcDo2HDsJaUqHBFU14QFmGvHfKanuTe2wFx1kxqUcKrDqxLiuxwLzi5f1ao",
  "key13": "49g9ecEUBgd34ebDFoUk3rjFXGmFtixv7jsZ18coXURZWhQmENTxaLezNaFiDBqkvrcMzrK6beu3NkAa1ymp56kG",
  "key14": "21Dw4gTeLGP6ieGE5WeERvEU4HjPcgNPyweBav5G777FRDgYt7dGLuemiVe6Z7zChPvPo57T6sjuhQqjwYA3kBRe",
  "key15": "3NMb8jqC3iUqxWfbsDAzYS2fMQeBj5nMjEcuE45mAYrM2BwR3ecj3qd7FVxLGeZHBQ1C1BxvehKXkTWvAmgxzFkG",
  "key16": "4nJhm7LAnv8ixRZDLc6LHQ87UYExJxpbrWuYRL7LrLTDk4ZuQ7t6dq9G49rBBggdGgY7VZYyjWAr9io9cykySkHo",
  "key17": "4qUUjDrNXUv7qdJFjSZ9gb61qGma5hTFhMVMHpeATTCojCcSzfcrnXMMSTkRinHweVSjtzBbfZhVSoQwzHkTCT14",
  "key18": "5H42gDe1nSsPa1wjxkVutRGyDjNa9qxDSxzkpeqgSKGZ3X2UxSb99sMeebbSgnhUxtmuvATyGhAwf7bLFMRoShk1",
  "key19": "4HzjKZ8oxkDxVRTNmYVHD6wz1qtEm4gfxdLHRSLPxu1owyBqSfWwB3cR7K8V3qKsjRNxunVmXpB2PGmJwG2FfbkF",
  "key20": "642sppd6pb1Hx3eatCHP7o8Jy5d2RMBfa4vVFgDRmwt1nHN4HsaQtUAR9D82ebdzufEGqVwUtQDa3AazVC5nZ9Re",
  "key21": "2k7icYgsd2ydKztbxT6Gw3kxmSL8SFgWcoDEgwEjavhnHa4muBYZamVey4KWSPHQy3VPbD829yDgeuTMV6U4vW6v",
  "key22": "3UAdeceF6PvwYp2HNPo5UTXCtAH688xH1GBmVswNFqjLXrSSSYtVBN8F7RaGhASWGyreK8qxzTRns4riJ2oZ9bej",
  "key23": "fmqoZhxC4e3DvoSrkKTYBczVt5PEtBMLZbPGStXYuWP8JEhBGnRDxiHc72SavaEFw6my9o8kHGFWDpSigkdsESc",
  "key24": "5FVMec3CusRycNBn6Yjx24n7pte9mr6o5Kz9hBNn7dp5fCdtGa3q2hmSVPRjrKUE1exAeS4XLT8nSHK1wREhHGTr",
  "key25": "RhKs8DKPbPY1mA3F64gqRE7tchCin95bKubUVpRiGa9zwuVvkAZEmHB6cRmVZo4oCmP742TpqSYtQESAiZvou9m",
  "key26": "GyFrQT9FZSdyB3F3uyBudpkVHtZA8K2nwtbKG3G1Gy8xsVq332mLzzCN3ZeAy57iJupj21QdUHVkgLXvgLyJvAN",
  "key27": "377qRRBvvbxEwxmep3g2Vdrd9uEgaPBkZQGD6FLjTwfpn1wsSeDr58uqftWTrJJqAKNV7jSvoSWuEmNy2TYRdNgF"
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
