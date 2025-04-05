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
    "3QahdeyPu5jKpmeimxL2cxKYqZbcmyBLKCuApnN46eMoPCSyGWNQwJs8xu7SXCzq2aLN81xvPjSVHmJrN2upMajC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Y3RxCUFyicSkNVxA6UgfWwqrz5vxUWupqM51HTr9nrYF4Jgtq1aqU59A5rMd8kbUZyo5LDPhZESJ99UiY53x8C",
  "key1": "61hekD9nwKHDaz4NhtMXPxYZgHe7uFxfTWnH1kvSwb19hrZz2qBr8EBudhwCcnETukhbTX2gvLbQvwHCGUsnJBMY",
  "key2": "5E2yBrcPhLPJgXYMPE4oNf8U7iCDeExeZiceoRGHPVoGgqdNGK4viz6YuQkZmZgzPM9hK435oYSpps9jQ4nRJYqy",
  "key3": "zCBJhxdR4grF6eaKrTDD4SVX9bK9QM1dBSgCke6VfULUQM4ikSsrSZsi8AhDLgyT6LTT4aHQPYSzqX5oTehiURo",
  "key4": "3Lz169eq5wqdErKqVNAKVN5okknBXnZiH8HhZehRmMM8yKSbT5woBZZ1w13B8eiAUfehVomFc7n2f2hPJJsJPctQ",
  "key5": "u4MhuY6tZ5TRjrSoU6ZkNkc8dEcXhaf9VAT8dEb5th1TXGqwbvL7WYkJc79kC9sexUQbRPQAKUJAyVC7m9ov5b8",
  "key6": "SJRbeofQgYv3Up2TkPQjcjWmCbPa5TL4yQbrxmupiLhFuqdpL3X4VwuTZ6S4XpAJhczejVTx4m8J1L1JNBp2odu",
  "key7": "5Qjr2zLfAGKGTVrLEDWijP4WNyvqN9g8ohqriUAARSDWG8RPWP5NzDvWoffjRuP34qgo8NBNUMJ2tN9YhvwZVUyF",
  "key8": "4occw8kYVRPemAbXwUdLW85ZSugMyo1xxXvmu7NekVcysazoqmQTpe67V5HbbmmJua6QwH5EoGFt2aBFNPF7C9ym",
  "key9": "5jhht27Fem1qgBo5A6EpChCpj52rQszzqT3ge6xaSy9b2JSYGnmVaJ3TcGzgJPsZ8rMEc94YcnT7SNfyLTx39SFX",
  "key10": "3LuApQoVPHmyqWV4reSrakvp3BHUwdWywmPM3oSMgDRLAxX4P6upEQoa8Wc1Vwn2sbSDrqU3u8odioxKy6f2bMVS",
  "key11": "27sSPCfJ6iAwRYyqnkNDQWNJ9PQyvQvMc4rYQSpsf1k5n7o8prHQsyCL8qHUnFxEah2NXm65fzPqfFrZwBAszkNe",
  "key12": "4TgqY24QPdE2dMhdRiuqBRKiXKJnLVWF2krX8Pbm7ANgDLdZFhmYNgKDo94sRZ19aWXd1fgSczXSVSXqvmggMvLL",
  "key13": "ztzT86bXkPmnLnNvDm8JAeuPATdjT9LPDAqQWL9HXqnzw19LAWAwRfzq5bTYTf4pZ39fND997sDf64JuytnDTJw",
  "key14": "56x3WiAsyiZtmbvNUUDmZKXLuBTwWchx9LoLfPzbUuxeGpv9yAexVH8Gn8KNXPf1LVHWocX4bFPkbcxNJGch5DfZ",
  "key15": "Lh8nPnP4kZqxDSzJenajhtXpRbBqqZjFaZj5smCXkdBARjANoJBvUE8HreSLL6jN6LRNhG5tcbaFDxVqTgDs5Am",
  "key16": "48JQ6p4tz6zpUMHvsg5qCKdxT82poL9zw8qq7tQZQr42Jb7gFf95qmW6a2Lq4ygbc66rUcMiDmXZoRJ35C5GrYv8",
  "key17": "iN6FK4qhNFUgw2dTyUt3i5zQv3Pejjkmby3CdYSattDjsXFiZunP2meJFBCxdacdwfeAfehS3eGfFpT48VkPeTR",
  "key18": "3j2KwNXfJFgq4bQAXn6UxhDSBdjP88tpHncHEKBzrp8yEa8KfdVFhAkDgoAEnfoKM9193TYy53sbCkunk3NTMJoH",
  "key19": "4VhtWMmeBpQ2ND1VJmsfcJrRTjuCay6E19uWMYPcs7TSK1Ygt3dd9pj5NYqMqFkBdnFHduRf8vSUrCSMqMFjJuHT",
  "key20": "29pPVY55SoAQbvzKn8Hzr88AqUoHLeLkapnJwzvpcL7qeARUf3g6Fs4XTJvHAk4iMqVz68Ukv5tu3R83xqFUm62G",
  "key21": "2Ranq2dQmeyNh4H67sz4HQjiv1HWUz9RjjLL746xU1hatYXNbjgzPRtM84QTCeEZ4gEdSi8XgCuQEMY9pJKFebuW",
  "key22": "WzTHhTa7L4FS63cv4QF3kQvANh6WRM78jyNgcwHLJ9pS3XkD1Ja4ocf2aGBQEUSU51VwFJESSf6rqkZDDPyLTd5",
  "key23": "2nwwd6PUiezUBg7eWSegvM1r3JNf3Hve2h5mzvwHJg3bhY7Q8YtHA9JXWeqNhmTu9AFpmTuQadkW6xfb8WFPpdHH",
  "key24": "4hQbKzMdgM8L2uW8M1eRrmmFAQn6nLbfqYV3kgMFj1Dd4FqqpBPqfoeNwNn1CuQa8HLuDz39fkFjmBPNmzdiga4x",
  "key25": "vj5joGAG5mfXBsdgxp3RTstweku469Yx2FfZgqxhRg2d96Q2YSfFwgLK8hoY3oRNStvnUpaLXcKPZfaTxbPu4tF",
  "key26": "4dgEQ9vUUQ1yLMWcbqyeLQmfE9E1veLFRp51B1rEWKGyaHtg4k9KAXKC52k7i31KfZHaKAPKpaBzcVRAbPCtaLdB",
  "key27": "66SieQTaQD2ZFjY7KWgWMRGyDWuBgMPA6TLKezJLN5rdWNu7im42oYePBRHbtR3AKAXUuRXcSHRkoYyTdtpDba8J"
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
