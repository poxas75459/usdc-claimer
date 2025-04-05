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
    "6ginG2u5FVxfsLHokjQR751amNuVWr9svCtCtJZHY9yowXuhCVrAcRagZWauLBMj3pQMx9dQMqAioJ79FiaPFjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUamML9P9Y8ucu2xen7Wxs4Tss7ieUfB96sdcmvnRAA9Uf1PyfFeGzFxrbUbgtpt4eMa3UeWeca8UEZnJN4XDAL",
  "key1": "54KDXGN9PkoBozY7een9HfLsMBnRwZMVSrkM7dars3LtavsXo5CPjiuz4KK4JUMPqPZWrbBjxm8ua7e8HoG7NnLQ",
  "key2": "48CH77DimT9FdDuh8cwiD5VAgbFjgTctaXiXsH6fRMQoUaqbi95jFD8fEs6n4wPMm3FCR2P5MQhkEMghTeqocjL8",
  "key3": "3E5r588Xse4eGArCqB56QsjScNqBGkm8Vk4Jkmww5ecR915nwD6KRF89ZGfExdfNjUndsuHTNnptb7HHtAVNDua7",
  "key4": "3Tsb4hi1af7g1d5p9byUEr7sMU4LKCKTVwtHuvqAJPftPHvFGuzZ3A3PzF3YYqoqjeVEVYmzoJFbH7qZ5iean7Fs",
  "key5": "4BwVWwoVoBWXzMsKhFXothgVU3f3Rvq189vzhmC9bNQkFr6kUH23BENs31eqSmCnKU91iyWbd9K6U1HmqS8LheP5",
  "key6": "3JUvnVX42tnGTyRJvp2vq7GTkJyttxQunbwLFZ8LwbxtEWxaotP1K8K6wFo4QSTD7RWMDEPKTeSx6snNKxAyB5n6",
  "key7": "3jMWSgfnDqDLwcZ8zhHrFkR24bmLhCvb5MSphGhidTYvP3vgZ2p9GNMiAjKXnuRbbbaUwd3Y8w5PTL1LFCM4PFsg",
  "key8": "Eu8sPAk7Mdrd6ggsRvctKj3hddcRLW9PLBrPdL7dBrfAnuoE45VRM7GpFtsHsyMmq26jU7RuH5QZEvtiyjoK6NW",
  "key9": "4i6LLFEVzBy4k8q6USkuixrZzByMq3JehcMLV5EHH26xJQaRSDRDX5LS4Hu8TV3zmr1aBXWYdKU6UUKQwPBfEPVC",
  "key10": "3PpWJ3QamjVq5H3B4F27SDuuJBScgg77mwQrXsk7EEx5DGQK3gZK8dUgVfiyiymgqd5i4BbXWU2kh3tmk86GoK3Z",
  "key11": "3bRCJtCuNw8BauGLAFqKNQ9dxoaCAfQfazbasiUudJfRFzogU5H7gHJAn6aaJeXqzyCsCCMNac2JQhqPB9oFq8gc",
  "key12": "2PPWwWY19ea36KrRBa6qCRyUV9S19N6UwvSN2GDYiSPSGfHRqRxQ5qUjjhNeKZsYujgPuWdXKUwPoBx7pA5R2AME",
  "key13": "3jZzQt3o6QATkuGk6pzKPjikzasQGXRiNn6xuQ9k5hF2osnPsERVnX7W5Bz1ecjy9juxxbLcKcfkJXuLZuLTyBqG",
  "key14": "65vQVP5m6ZMnwixUEmhnYofGuWoBw5BjU6Cuk4TzaM9ijZVyJmRYjR5vqRRR5CNEVzdxaMuBnyVPMoJaFQjAmpkT",
  "key15": "5m24Ms5GNAvm51iEQAZZtdrNraCwfWb2U4azSi6aAxY5wpj2Rfnvya6AT99Gs12ae1n4Bi88VVm9STmnWQ5JxM4K",
  "key16": "PP4Lf7GRGcUNNsWsbLQdioPoJwggkssAaxM5HJAjU7qhn8soXP3N3zMzanN4Ggg1Q3aRimUf8ucQPQAatTXCjum",
  "key17": "3nFxYbMe1tHgyuwuJf69JScvom8bknfdjBjV1idsggczt2JvvSYSGQ62QXDchgP7weWfnGfqNX6jvGonPG2hN9F5",
  "key18": "3g449Tc4np6uNqVVHyDCPosxz3NF1ybYTgUNQcuizoVR3rUUcegYcdkAypU9Dxw3LxP7pFKdbDPEQu5ot2H8YtWV",
  "key19": "63yt2VaPiCx9UF1MnJ9bz3FWEuwP9ZH5aCDVFSeZVFRbskBwiPttVoWWHgunfKNiYv91jEDsXeqNVkMKAFHXyLPE",
  "key20": "59b6CkuLgX9oBG8932MSgHLmfAWwAdesDWXarsUYA2UZXa5igyoHPv3m7S2YyQBZvnpqdHyRGTdFr2kvuZXVVk28",
  "key21": "4xfSVNoHgaXeZGAJBjS7aZmWVxD6FejsQeQqmAQZ9ei5E5AiMjLuo4i6JHk54vBH8cKc986AENY6gBmzMBp962G5",
  "key22": "2cXQFkrBTgHTxq1cWHY5P5dfAiMaH4jhic7136HUexE5PLgqKfvEV75U4M6UDVUrvkLL35T3pYP23y89tL3LaLrk",
  "key23": "44G8bryXxt2HSnpMtrfQQGpc4ZhriAFZuBfg7qFt3BEQpA8j7C93Q3bPdmJGYPvGf3hdwU57WG3nCsWGcc2ibAGX",
  "key24": "4qcAmJGyfKLZsmvtXDwoof9U6J8x2cXSTANQQ5H82BmbaVJoHv827mA4VMbaWhcXrFW21g4KvqzNnDkCVJTyVnM8",
  "key25": "FcEWiakQNwrfrsJSmuHPe2oshXyvZiwFd1rLeyHHLW8dxHnLyoSFWTW3y76MTX6mfpvmDSyGuwjLxUmAU8Y4ZgS",
  "key26": "3zCYeFL968ZKdBsJSyoTFyHpGuLR5esndRjiiRnZm2GsqUW3iLCvTndec5Cwhj3EUngM2hSdQpHPbNsV6qzpp4tg",
  "key27": "mxYigbyWQLNBjffExLGoj58Ye7z4JptTA1Yg2neGwHGq7CwWzDrtfXsrKLGLtgJXMdx1zstpn5KB6sYLt9GHcLR",
  "key28": "4yk4zdTFmGnG8zDUTGjbQAdEc3yEknVrJLdpuCZH6WLKVjpxkGhvD495enXsTfucRkCpDuaNPjKsqJy2PHDMETbh",
  "key29": "3b4VZPiGguxfUS8AY6A5mKYh3MDvm6XVYaAvooDcXJnfqzAsJBNDc9S341w1XSxsaUnYnmubGH3m2DnsjsNFw7kk",
  "key30": "37YE6MiSMmstN7c1ptTfYBd5gb88K29br54Jr1a8ywNuBEVGzJbVf2e14qBPunZJvdxKy7BenPkXysFeQEj3Y8nd",
  "key31": "SPwonKbKfSrt31aqa3qJWf8eEdcy7jkos6Wgt9tJnU41hLy1CqdzPt5aXa1HENbLVzMT6rUf1Q95aXG5Zkb3ezU",
  "key32": "4UgKSr268Hhojvy5Wcrq8p4Gb4q6yDAC5pCd2FviCuUJsuNT47dRzgusjFZRmRTN6Gxzz5H5sWRhrZvDtu6VYsbp",
  "key33": "MCrqsNLh3C33H7csc6Hr9y9L94qZ51UdomauHoMGH5dkmabyfPvLbhRffTDw8NiPubMgktWYqu2hCh1ZKwnpBbV",
  "key34": "2q5LA8zY6q9yuySNFDEZDUeqtG63xpCrMxzaEJPSQoCVmxv7tSHknTAdLHSVr5Q8SXjgCukxBRmcPQJLeREwdfvm"
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
