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
    "5hbkgB948svCi76LUwH3oMi7hnCc1mxUppbNsLdstnKUqrgtLaaPKstx96pq38YhHimeeNGFPiSiZrPQwxvTDx2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNm3ukwDvc1rT6SUuRaV2Gibd4U9arTrdzbqAL1LijW3EgGqNQGUBs7xoVrhA3MkNQ8g3X4H44gRyDgux4tdKiA",
  "key1": "3d4nZjA66611erer9GJwcENoMeyzFudcnicEMPchMrpwf4QPmaXbPeVtPenyjiu3PPW6kYg5vXak2qCqHJod1YG2",
  "key2": "3SwsR4QoHuTUabMLXfS87JE68abXBTMdEGESDPjcbTPMx7LP14kjZFfUv5n39duaPmGHzqFGVTa3gaV47MqGYPo",
  "key3": "3LHrsNWTjKNEz1k9z6pS4KB53HtnMUyvre3xwH7QKox9vHwQQqGPbrfGJkHp2xoAv6TeJA4kRpBJVG3Xqx2tA4fg",
  "key4": "ad5LrLrBdcc3ATG99Ly1bQihFEgW1byc2VF7M6DGZzUs4JzYPn5CWLhEEkJyzatQvDizf6Mj8pMFyR8hbCEo2BG",
  "key5": "5x7GThTGVGS5xfBpmd6kxC4uKLvJWjw6QRqJVJhMmrCRb6iqhHZQgf4vgBvHfhGBtMG5fae4GEc2xvmqeEqjvNJa",
  "key6": "27N9oAjCAc5gggpVCS8kNbNYA4KijGCKMo9LfYXrCxyo8iHgVy2anTgPgRStWWctb3ytXHvDZnow1A8G15TPTevE",
  "key7": "4DVj9w1afVct6d4qeZ5v9aJQ3WaSGXNCugevcrMciqSvTfp9TXFTx3YvZ511rQvc8fC92tsuc3fZ3UGDVCoFu3DC",
  "key8": "2qCta2UjZK2KEgi4FvwxCtE7xxLVkq51g7GEvkAJUkTwoUBm8tVjoGjKvGSohuZZkjds2QfXHAD2SGqajm2WTueE",
  "key9": "66A8Yp3GJ5pW2auxxZukxq1dEHm1EpWJX1zQUH6jSEYxE3Nw9yeByeJmH54EY3zUjsgDvnSCuQ4qP9mukCijeXMq",
  "key10": "47H5sRCvGGSMnyo9Je1ct6xhsiuSGP9VzHSNoXpK6XPYz5RKdfyNxCpsdwt6FzSY2BwApKnMj1aJEKWiiMXo9Yjf",
  "key11": "4wwyEdScUME7Dwn458Un8ftzKW99qKUzGnSefMqxYyfmqAQNiP1Zkw7aeerbSwXaW8irp5i4tjMxh6GduEdhbcdX",
  "key12": "4Hiew11UQNW74UjbsB78DMnQy4xHyFn4BWFhV9XUa67RmWbcdRJRcWBgkLC4jUeVu1FqZVTGefkruUbkbCGkbkmW",
  "key13": "5tbAFeG6FrwH3jcXusSA7LiWr45htooxzJXP8tmjhcp6aJe6vgdMh7axMPMWfj5eJSH65CZm1LHzadd34ee82xc5",
  "key14": "2ZFiN8NPfyAaMtKam7sRrc6KdUBg5Jz5HfHLapYbAgrcXRX4kGW7AJqbFEevzbUApiKvXju4xdpzUAPVJpgdi2KQ",
  "key15": "2bu6p4fTvnSCW2v7kKc7Udm4iRQC4gbVW4mExAhKezYF5bvCWJu48uV6KFt41VbWvHyJWyHCHbsQUrNJFLXoruDF",
  "key16": "3FNFWZRxy9tRUgXNEQF9JHVVNBTvX9SfYgwzwbq88NE44y3FhQnNusFsCUiBNEuBeiaVaGHdNyEdhocywyBzdimG",
  "key17": "4VVEhRVijiWcro8cVtZDMz8g8Bk6E62K8L3AEYWq3ojszxRsxwSVdnaXKjtsp5bHYkXdcjzs2nQkrkSDswnjpS7Q",
  "key18": "oyEEH7MQveQkGAw4BsESyaW31cK3jTFB3jBEhjii7Y1CX1z5hjQYTf2THBMHWb3oWu6CwAGfGha2LoBwRTQYPN3",
  "key19": "2g3tLabTwsXuz2YhUTnKH1TjTrpSVxsmnpQb1PaLFKCK5ox4zZn8ZDuwm5AveYdkbSa83HjJDFCiBTpc45zUPKFs",
  "key20": "Gie63DPaAJRzrhFA9CCUaVEgL32zdij1arbSoaSemk9r7XYxEViYsXPANiKYWdbFdVZcX8yuMwGm3ituLvvh6Nd",
  "key21": "63Ey6ijugXqfyHkkrEKvqVuhc6e9taZcXeSUdeUjRXrYAMAez8fzf8ZvVYZJkVHgbQyYy6cynQt1aSmJ9WispSZf",
  "key22": "3QPpHJ2a4XEM5JYGfuLoadjUVqRQih5YE3hYzK1nSG7e1DyFv7MskWrsmuvBJwyDZexVv6nbvDZkMQ46HgXb6PcA",
  "key23": "8GmbdvoXfnGTsfqZYwGEZPwJFpRsLkFjAyHg3EdyRTLhtym9hv5Z2zKFDj7e3c3y477jnf6n9cF6vX8RzKoXgBV",
  "key24": "2iGomUduSHWmdQbdgGWe6T6UgPzWgyKqcdLALzzZaULZ57xWHGiCgTMuFUM4MPg8dhMTwTtysH372Khzq2n1we7N",
  "key25": "3Zo15QF2nhEbwsdXzRtDQXnQ3vHwbvsj48ahU3TRxnrQbuZugvxS6j2c9vFbCYV3iGT6iq872jT72MBsFuordmZ1",
  "key26": "Nr2DatMp24QiCKgnpMeDxZYg8JTTP8NxLcpazrkezZAHPmvBFcQ5m8bAk1LNdAMZL8amnTx7z5ovvhFRpdd8hxE",
  "key27": "zGuhS9VDipJcHdp9mhFVLADGJonUdQKJisuaJsfKVEEpAESuUKukjQ2mzsFmHScVFN7SDACHEZm38T3ov7gQXCt",
  "key28": "4KKxs7wJFEY1SmCaocsiSMrz2pLVbMDFMPTKA9T9bu58nfhqk4YDKoURvSFVAfhJrs3CDjYKVRpx8urz14FoQeJf",
  "key29": "26kzM5PsUS3gwMCZmP8pvddes9zARDg6x1ByZJJSSWrFEkcW9bB4ZdHL1Dr9CyAWfn4hqaKuPtFyxCqMCdafJtPs"
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
