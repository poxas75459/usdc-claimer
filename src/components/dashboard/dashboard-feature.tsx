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
    "31ZZYGQEH3m8tiw2f61TWGem9szVFULBK38pEob5BefhJmrBHdkoQpZH5Bp8yZ9hGpri3ZVvE8QNHXSECnHBhprQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYBQ7D69B5K2ZCoxBpQu7M6R9XrtADH7SUQNj8LJmDpAoQ59kLVEcQiGnGxyzD7xBysow1z2j6zu1ARNvQQC4bi",
  "key1": "2yt82KtWRn1k56cJn3k6wAk59p3QoSdukZhGcnsMAqzijZtY4HzszNdpacvV46Hfe6uZABsFvuQgwq1EVTXhrRZw",
  "key2": "BFkz24yXmCK9nXBybKyTE9cQyCqR8i2HQtHHcFRWTMoStKm7r67qJg6nBhETXc7FzguZfWVoSfYDWjiD3V5XfMS",
  "key3": "UXnKrGrnuZciJyPg71csHioEzv2rc9GLWkUAY2C6R3ZpDfekHfKnqccgtNawXZQZyYW5gbbgWxSSRpyBrHcpQ1P",
  "key4": "2gcPoeJ7NTEaNMU47maLhUwqWi1B6KHgfFnAqwFw18jMxBa6dHftLWXeVfXYTERytxrq8ozjUnigkVnyuB559JLV",
  "key5": "2apBWVw2i226MgiTEFDzuMJyFfnmiAd4eTcV6FTcnGtP3gvWomHYKkRwv1FyALRvd6EGD2gVbN5RQiNNzbETYqdD",
  "key6": "5Pmce5rjStbddC86Xts93F1mxiAv4LiHMUVzv7c6kujjw1Jwaghh9YApunSMmRZuHNr8krbX1H3erJkKN7eeFpkc",
  "key7": "3y4gjFN5XvHeP8GznEBUwQovqpcDp854wPVWtJii2rfUZ3nDq2HeoaAJzmUQueofHqihYswiKMPWB45qbTXjq2Vr",
  "key8": "t6riJ5pTD3PCzBsgRVXyFSTbcwnXE78ps2evbfQ8FJGo2gLSEYE6PqZ5EPdgBz6poVUA1VUF4DxvK7ayX6qzRNv",
  "key9": "2ErvcbqhtYP6Cufqsnh2iXv34wTrrbYttzYJgCX8p4hroE3LmAXxhKHtob438WqPRaU6fJsF5xYZpcowMffk4XK5",
  "key10": "2yBZxZHNdA2H4WoREoG3ujRTrZTTUQNC4c83ZnNS6dges7scamodEZyi5j2WPXCie6M4X5tAb5RwuNfny8Vpbet5",
  "key11": "2oYa6KTVySJHPHV7WCBvLEYX3xFaGMhdHEmweH7osCbFiAFAG5Na4qmpxPzmLmb8AhdtWFedr6wYsgCda7YKVGjg",
  "key12": "3v2GGmM1yJifWVEvCFPAhBo3osKNr1mpqBZM8UpP2AGUAZiAX9Y54c2SmcewqgWiuqMFRqs7dwD9SrjZQ4PvrYbv",
  "key13": "2umgz3eF5ovysLjhmqHx1VqoA7gshXWK4zA74MLhZbF5pUw7av6eqUKRK65nZVr55wRSNXt689wTYBCBKm9NK4PV",
  "key14": "otpoDAB7KPjqQbhf4svRaE9aALbSwZh73u9nfbGNFxrXVpTmqX3NPLP8L6zGH2k3EVGTu997ktjZHaAApmFgaAy",
  "key15": "5VCdWGMh1oH59AYhR7KZFNVk5rasMMBBFR1MqUMo1BCYiDLjubKerR8DxwgKGJ9cjNF1b1u9xQ577eeZ2HzLKkxS",
  "key16": "43ZfQVEK2s2gxBxharkkw9e1SDmxwDsokBJJ5NA9YnrGZC9ScNKSUFtvcrnx6Ez61WruiHQVVdPwjiGdZkM4m2Bd",
  "key17": "4Wb1Vy4ADbtxkAhP5H36xyURFkxVhki338rnjL8mkoaBgv1L5pNH3W8Sh4C8RbyrarrGcY2KaVwWTAou4UMBqvxo",
  "key18": "5sT53JxaaoxxS9pRHXE8HPPLZodLGNaY9YD5u9JNCh3sRFSRKBsvM5yFkB35n7Xt9rhCXCFZ7kyazEyvwUaur7sQ",
  "key19": "5fUV9Qt7yuCyEVinNxuFEcDcwJmWEGjhSjtWB9MdAh4qmsXuiGjN1SM6mj7447H5btP4P1RuNxf4Ncid1Pupa87j",
  "key20": "3QfPLLTkUQB7vLEuHUen9hh723NzXdxbYn23bJFgjooQecLZtmff1VRbLPqY7gd8JnEPtztQw4E2kgNBrCnVu4Gb",
  "key21": "4HpJeDD18HwJoeoJPPVk6xab5171u369noe5ssyqaC8C3vWbJmPWSEsY7Ev82pWXPvFTJNfos2B1vrFaLo8ac4pV",
  "key22": "5a7f7mzQUQQWqEwwrQo45Jc3dqXCrrzATehatWfSqgLd9WwoBPnH2tw4HseKZV4XFYxDEAX4eKutkc6GQVecX7cP",
  "key23": "eVsxV88XNgy9HhXxg3N8ozWiMpfjCXrYMRmoujKzJ3D2HZK6mCyQBMRctADd5cp1kqhiVfob5JA6dnuCm9Zr9xQ",
  "key24": "62KFnGa5EZkJmhmHWV7uMNEJHjvvUGFVqbK7uz1Xtbv56RFSxb84QmSD9HXYM5Jzbe7ZRW72c95izwCbT99VRQku",
  "key25": "4tF85PmBYZqkqaUacndLTM3cR9TTmMKeg7iVUG47dVKqV67EZvndHDTtGCm1DhojhaNth5QeCDmWs8jp9ifPiSyc",
  "key26": "5riEuFHFcGMMqgWWBoCmEthnZZoqdPuKF4aeQNxAQaEjjiL581zudbdjvQd4cgPnATeaxWZcz2pMMR7fa6BrH3A1",
  "key27": "2gk56wD1SSaxM3qTnWMWkjzuhFdak6cqcGNFtsn2r2GLQoynqxaSbwte6DDrGaGvxGroc515GFzZN8Y93TMV5H4G",
  "key28": "5FKUpuPKJtrQ5VpxLdKqJ2DWbfneWxXa92Ar15CBsoTFWXbqiiWJYsen9xrF1p6p4qWZjJ4QKwiPez38a6rPfzu7",
  "key29": "4cimHgi1ZaMPEa94GVVCwd8JtYWTuU5FUPJm2odmoecuTa3QiVyreornf7UQeTNiSKVzd4Ygoms3uzQe3GTNyY2A",
  "key30": "5ab2iDavXMkYuFiQzp8jQeJs3brL4x2ghZ669Gm7rJJ94GnsgP1faCy4inXoPc7Zzr7yhKDM5ppnDrDTAsTiXcPM",
  "key31": "5D3G4ATADsK9AUouFHXmpPwHpV3tHCYgkzsgbechHz3dgdt7ywVGkmfjfCETo53YXU9NVXJSTr29CZbvGNbfvse"
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
