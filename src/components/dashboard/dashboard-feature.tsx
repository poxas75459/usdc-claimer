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
    "37wZBgL7xzofP63PBBjsg16tHx4owpc31kAkBw8rL7DPFXuKi3bJTCTVhNjhHBLvRPb6wgDcRGUUCcUE8j4JABdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GP9p1RfhiarsgFYm8L3Qgb6MA5g3hUeta78EcU8aRga69fre3Hj2QWAERh9MR4FkmihghRHJKHciCBjQ4WzAdiK",
  "key1": "5umnWAK876Abq2Uz9VUtV5paHoL5PdoeS8oJoLpatP4pKDFDnmf9DSSTa8bLgKKKrgiNeHB4B1J3LwekhYEBWVJC",
  "key2": "471owdmi8ZGzbwECfsgAFs3Szc5icgqun6AWSC2RorVTW2HDdY9QR3oTS2UeJffPFdqZk9iUFZrViZyKP1Ris7an",
  "key3": "3Hj2nvHDcRKTan3pFE9AvGco5tBQvSJxzEGqJAy45VtUH7zH1bLAJG6PPGbkX4drVJMVmroKAZMR2QQ12Z7eX1t4",
  "key4": "3sxCgBFofYepxPYaREZVbiCs2LnWGBmwL6CgfmFGkNgWi1JbsnAsQPxjwEj1nTitdG68CEZFYvTAmbFkjDngPLQ1",
  "key5": "5yWvL1F7vWL3EP3K9xzAo7iFgjmcMUuHpxBGJEeab9bi4cxWFAuXVuG7FfmBU22xQ8YTWyCR35fTVYHUGs1RenmZ",
  "key6": "22fkMiLHUfDCFBkg5Q5d12SBkZVTU7kCottncKx8csb4nfhTrEBeZ6CPFofUD5AaVtpq5gxPQph9cHn4VKZ6MXQD",
  "key7": "HAFAgMpRxxb2LYFrHYt4L1NHMYoR75A77TUjXbAZ1ubjhSRBmvtcFrYYXuTyQbWtcCQQWHjMunqbqz8KKt2t5ga",
  "key8": "51Gm3nPvj8vfvjhY7hmFdur1CJjvcHw4CBhtw19KFiRT8LEdRRK1PDipfL1cW288uin4tZUxFXma1KKaXCHaAXwi",
  "key9": "2z7Fra6jLEsv7gdG9VfTKXPLzNRDrRG5UcEpdG7auR1UDdMoz52rbAJw9xuwDZCKLcmSSDNeMguJQvChAAJaEBcq",
  "key10": "5rfpXGbQqGhYHoYnKetPKHfkFrbbNAWKkGzTnpTwm1QAd5TEtacZkARG3UQiNKegjkevYbTqoVALu7UCG8qaenfz",
  "key11": "333HW2AaLZ1FsibG2EQwqNBy5nKE2Fq1Wj2pKgcqJvZrciqKYjS9D9Lhgrsmob76PoQuMSYvKgnzPJNTXfTXxHfi",
  "key12": "3GEVp3DodTSJpWH6J2Aijp6JGZvqgRsd6GgdZVJjTXXYpKG8XKYcNbcBs4v7VQ5uX3vah62nELin2fYDgNDE1awA",
  "key13": "4XsZjALbEJH3pLZqPoWmFgmK2Jq4Qvp6EiiJuXcbZQFAPkr7PgyzgjrjpsFDg55QUheUvWkiw8mSN8ty6aRSFH3u",
  "key14": "4hhm5rQNSL6BdMikpvZwtKzEHmC865YkJct1PWQrryUchWUVKKgENihS6JNDmzCPYFrnt2pVGPHTjzT2b1X88dom",
  "key15": "3ThmvjdzkcdT7rbf6yWZCZPTMddLCtPiUUjGvp4echRKk9ivLMzpxFifXn5p1ztUNzW4fK9pAfyv95Fr7KaMvuT9",
  "key16": "5RuPhdA75t8vBwhvD5emo1uzu7WRjrCq6e6zs6bVMUDGNcTAbdBL6ZzPaAW3dahSNZwd7wpshKRYhjs3po6GJWDc",
  "key17": "JS19BKzZFjABsamduGQeQwyiqHFcFjuLEKJcaKM29XoxY4ZXCc4VghoNwkt2EobbULhZsQfWSrbKstBVB9Gaxnh",
  "key18": "4cLDdA9WMhVizFL79JwCQV7DR5SmcSzru7LfZqZBsTw7YprmnXvdv1wih8DvTg71fQ7puYd6CchGH83mafDi31UU",
  "key19": "5fwLEFXgpTbpBBU6E6Ucc33aB8RS3G9tgjuMrNuzBrZRQ8F6AcskvrhaMqcbkoTTTctHEoju7MXY5Vr5CV9dXDUX",
  "key20": "46B8RX8SQjaAstvNqLHauCTcEi2RrB34iWia1BrRW2tHwrrH6Ese6k4Pm1LFykoL6CZfDwZsK8sT4MXNeQVxdBGC",
  "key21": "3ieNuPv3kPdeiAHrv6RYStWz97RajR1XM6fSs81bi7EFWW3SNz2rQBWfhYimaPwtYZcyYbNVesiF8RuBKAATPji9",
  "key22": "3rn2GqmbvhkGGj5tt5JSDCF6253ykhZof3zZ5whw4ZrttTAgtZe8ZfyaCijBoMVcXY1XzyoxYEw84QuZRq6Jb9F8",
  "key23": "54dY8mdveef3s9J5kMv18HEH53FmaE6jxA21VLm7W6N8LXQ1iykUwoGDrZiEV2eqri2J8agebJADYrQ1n8CSu228",
  "key24": "39wKQUg83eYrRVpqis6k3cAUfwuY1489WLRUhPXEgRq4LUDqzdM5qFupFL4z1XGixmyPrNtNFgQRkbvMwLFyuMqn",
  "key25": "2KraPiN4LCHS6UxYFNnTpZxUCNd9aHmg8BwqvAB4trNt47pDX5i2fezeKHzmToSv3pVYEUkXAK5Yureek9doNXgU",
  "key26": "24AcTREa1yhWvqWMajzpyX1nD5PruNrGy99hXRXBxchHWQGs1LpJ1K2Q4SQwupQ2TQ1dZV2SC8C3mqU9i7UTYFZX",
  "key27": "qqzTgd3f5rNEFLugJUV2bX39nRNcwrXAW2TkYVPp2wB1yWcxUowzjbNXNX9L3qPz626zZp56Jcj7YasWdZfp3M6"
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
