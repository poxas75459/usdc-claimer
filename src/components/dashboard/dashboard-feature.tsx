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
    "5J2Y7V987JTgGTpeCHZNkPNms7s9rafcbhKN6wehqxki77B6G33246h8jPQvCP3LegyFVED3jfPFAQ9kP97Jm9kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofTLNppwpnZ5u4vMg1hMM1yb6S4XsKJJ1nsSHitpexU6hPhm3twKQEjabCLvvyNxwEWRous441j7EgNktzXgnNy",
  "key1": "4uDKwrnTdPKv8kuUBaEePxJywRzyiGXA9RZgX366sgU2aRK4vzgLBzHVYDzp7uEpZm1u73W5guxuTQuH4CQnnnyM",
  "key2": "2NuX3ZmnKP7BpdxTCFkGcujFZvYMJQZiyi6rBguAXqbHyXhtycXNnjJbqmmmvjLuQZKW2H254GAmBuCubTJ6Kkxf",
  "key3": "4LrXRRuWEdJoVw5U91ksSenZTtUP1jo6JXLf3QfuJrpJneYif2FhZ4B8bd9jjqTFAihsdSpeyhWNNRbv6g9bxctN",
  "key4": "3CVzyniNNCcXegihrfWfTG5rrf214kJ5qoZ2onm46YwVf4wkKdpfw2speSMFMamQfAA4LxZUD8UnESDDAhdWZu8",
  "key5": "2vKXtGceXAWwUSFA6sRZ5BRtqz4d85Ek4PQWDSNwVVGBYC14Gh1cMyb6nYvkyRRiCSpsbioyETcGZJ3eRTZ4c48E",
  "key6": "23Pj47xm9h4XnPPu6Z2A3WHbcfAQNcgMZ6wJokDokJJjzcbhi3J4XX3eLDKQWTFgHBZ37RjMxBKCM2jqgzpH9U6s",
  "key7": "2Refn2mg1S6qghsL5j8Vua2yK93F8vg8LnxwmySYfHyXqcasyGmm5WqxApiqswFKzd4P5uG3xM7iJ986DQgE2eqh",
  "key8": "3SXcPkd2ejhBUqjEf5pmSgyTvZBpAfpnsAi99FbeoqfJsfGUr4rRkfQmktc3WB8qhb6hXL8gxrWQzQry21iAyETb",
  "key9": "4zgjCuSHHVXytdnjSppLUJ7qmhMz79aJLmjYCkYc5FunYHGok3dX6jKFUmv2rH1CTA5zC32MLcM8zncecvqDoQN2",
  "key10": "4L6WvimoH35jeKC2dVhfHfp9GFibt3KEW97JCA2wBv9yMrpfsqgCdLbtFPMEo6UoMhAxRFXthoYPp8mtpnhyV19o",
  "key11": "5DmLUQiJwroVJzw5381aR5ySwKkVYTyR2RMvHCxtNQc4entd8um2cHDr5G9SrumYtnQhqojiHh76LaX7rUG9EJws",
  "key12": "2w5NU1crcz4CD1aJqzzQYX2sDdW7xB8zvjNCS9yMe9EwChzu1YJupx3NfW6MKxLbegtq6BeW7yWy3eKacYgYB2Ch",
  "key13": "2V7ZnkoAAX38WmsRWZdJKtszmPiDaUDnJ26spmpDNn2rb1rKm3S1q8p3ubLZ4xnDuUn9KRxLppWrGkdriaS6uQwd",
  "key14": "4bRZszFefuuHxW25EeBtz5cu7u8fVmK7n4Zr1RjykoPaXi3uYgGQkSQYiEKbjmu7BvFaKT2j8SCXA6v8rkc7k2qS",
  "key15": "39mbKGCB2fkDCvGr6ZSNeaWp4yaSym9J3jk4uehTanPX66AQWg9iJuNDkFoQcmsdCFrXXg8YzCgcMTD1cqNh92jZ",
  "key16": "3XbHMKzaHaoSqEwb3dzsAAjrY2zScDqUvnoF8wsNNsrRLaD4YqcbjN1DAynKgLGUfbb1BM1okKTpb1CPRT3HQiaS",
  "key17": "3eb3TDBKynGEgb3Qr192XQFWCQ3BjvxjLNkdbzsa6YPhLczaSaw2U3AhmeDp8Y4aebopkmccPgspQi97w7c7zBL1",
  "key18": "2pi26SRkBhgPYu7QtexhiRRfyVkByxY9DnkJTKph3QLsviN6QgfwZBCNmySvXhK7zw1DmR6KMGCgLuGbAHfxNTuY",
  "key19": "3LXT9ptUYBRYyYH2L2ue9RqhuWTP85mCK7f4AVANSWndH6oUuwruj4ob2Zm6VGEvSX3Tu5poqzvjtuPPCrdkyJvR",
  "key20": "4itU2x7YG2MziuQvmRqfaDeEETucLxZiio8vzkMNidTs6hUoJVkKBxVikTMGWdC6gRZiiJh3PuKkHAnk8S4rowko",
  "key21": "mXLLaGL7bqxX6YfYfEnf9vfe6PBra6wh4Tx6sWRmq964BH6RfeNa69m5M7TWkb9XCLVEGjzfLXWRqfPbeE7TwqC",
  "key22": "5NgJxoLajiQ2GzLRF8AC7NaQ8pB6TAVBzsFffCpfScvW5PoriWjoFpuREoxnHEwdYAhyVoB1BVx16749faeudrmF",
  "key23": "51iB6WFjHxvXnpiqRPdH3Kdwv2N3ULZmYwMY4ba4Dxp7tYymFzBy7YwRoCUVvzQt8Wte51LZmDx8quRtPvZJB2Pv",
  "key24": "4Acw4rqbbK4rBnQxKBZCPNvdZaf73h2QS8oA3qmkv4BV7zdfPCExiUA6kdKhWEgProggS1ZaDrvjrciLa9gaVfU8",
  "key25": "33wtguRTHvEFhA5WJVGBMp1VfVFije7zUQq7Ch2YQVCcoJPc6K34ddWcp2USiMTcSGm96by1sADZE3oZbKMBqFF1",
  "key26": "4G3w5Nn4cPVR6xEqa4L3N5yUCffP1qNVEZdfPN6MdpkXzKMQuhqJqVGcxYAjqwpUocmLNT1qe3rYKqjzjtnz5tX4",
  "key27": "2F7SKz99tKcqip1thjze41NgBVDzhgvKWp5ho1cFjWYyHaL6raWiX7TveEnfAJS775XfCFF6coNgDUv5xN9SBm5F",
  "key28": "45ZoDSMHynkBJDh4phheUqgKKoD3WGGWW4dpGJku2JRLMPq3Au9E2mdGkFTCvvQZpku88fkHxXPx3dUxpdg1rv5Y",
  "key29": "3pyueuxkws8Q1fVzuRUBZyvmRtBhcpj6SrpNo9yESrJES6esiHNA2W6MaFr9BUCunsPEv1mMv728UvgPiWzREEEf",
  "key30": "3c2Tqr17avAAwCft968PqqahvyxvgQsqFVWg8vVTyWsSJoAQsT626iz6Q8nu8cpEs4WPVfEbZV6UQmWvpkH52DV5",
  "key31": "5RtpH2sr4oQ6HLztoZtzrWAAzobaV5bXoFMtvui3gDT34VaAv3uMnturbpYMDQ5a83WwyQXcjHiLyK2f2AMAGgJg",
  "key32": "5YtMfzvuxBCGRtLY15uiJ99C4HoCNuG5YmRUZAjpR5mhQ6D5impYbmcTbV1XxnUKtuQ129XMDzaf1PKiDj3fiMne",
  "key33": "4QSMwxspN37KC93ieoHNws4MAYvGAAqksqdFrMTKeaTxLMkTg8BMiPfmp7Hs3nLxkxEs632qqvh6Kngv3vAPX7HJ",
  "key34": "23SWRXob9LopGeAwMyyeZ12B2WwpZ8XkY7TGQvcSDjcefJfNz8wZVGAa3nPauWSmkVnG7qtjFwaYnmedV6rYLnrJ"
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
