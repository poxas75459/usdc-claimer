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
    "38jt3WPpbdLGmxjS8QW3sseCEiiPDRmFuosb6op63hxsXxKyUtwe5aTfb6E3YJoHodWMfwvdYvP7kqWNC8xkCFzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fi4kDC5SkdRzZNvfiNxBg35DF3AhNSnUvw55YWArkfs8VaAaztG9QY4zJUHZiQbMnVfM6o7SfbbJvgfU68KkayR",
  "key1": "4voEVzrNQKyXr94CSgp8mpCu9XN9vBXRMHzNzhJNJfUeigZeU8gNWyxbb96ELqLwiaz5LfySsT3grSjMW97pUbak",
  "key2": "3CT2SzFSGJn83BBxN6wjteb2LQgAVB3ot2A7UUp5QYcMQsoEkWNwyRD99DD21QPXSv8bcJ61aWdzcm8oXarPb9EZ",
  "key3": "TsfWNz1nFNNmqmpY9jLiSZTHVmfDtB2jzNHF6gW4JkX4f7Jkk6xqEV1PU9FN4EMoE23T1LpTq78Adk9qrtNtbxG",
  "key4": "5bx8PGspFn6fELszHHsvNBHLxNrQk5oCHkJ2Gcd31PaoBp3ws15zhSECbu6PzaJJLYWCmVh2iKBNJ777QBuDc9AH",
  "key5": "3Jgrg26gABy8uBh5SieLhbTm4z5CCZhgTsnfh4rBwE8DsCrpwUUr4fCosXfcDYcUwLYrxMypMwFtgpGyCNV5xr5M",
  "key6": "2dQo3FUogCKZAp5Lb5SvhJKiBw6zzqVj2LqKM1ZGH6uty95BxyKm3rsbcCt6geQJiz31VsED1z3qaHoTkKBTSRCo",
  "key7": "56Vh3pPzS8ckd1jUtTupnn3xsy6NtSypHMP8z51ekU4cHLbjdYvx278K6y2tAzE7w7DA6ioVrLuUrk2mZ9h6i7FM",
  "key8": "5QqA6iDD76k1XJvKbJgssqpbqxWnohW5AHdSnNQZvm7eFrDgBygRj62MZakxLemZvfLWqq3ixRTsaggsoAXncdUz",
  "key9": "5E26zRCbZwsbddkNXbfMhTvsjHsQiuCAFZofQqwQEwKQV8HCKJQkbmtr4B334gfhTV8UaViYBwLKPsZjrs6s2xB1",
  "key10": "5hqsGa8L9kPUrgZsJcYjnpCKkzft7WVvquBfKYhLYdhjvjfUKgD44W6NeQA6yns9xaczqo5qKN4HTmHNBQhtN5ui",
  "key11": "3tqKeFS5r1dDWrMxscM825smb2t4oFXTUU6bd4uTcCivL74HtvJaYpHchcabpdGb2NG3uLcoGmHam6UYmFpwys5H",
  "key12": "3Ft9VpmtCcHvycGXT52LazasUCc9fs6ZrqKhZ5FLYdTJ5W7W2GFk9o7oorkricuDso1ivCC56x6mQS8zS97tXJYA",
  "key13": "2D98wCT34u8WcUCv7AkUkNm3MxHibuk2KkCxJXAmcZE9e42U2xjdcZnTHQbNasMU8xfn1VLVWKjfhXfYazV1h1Ju",
  "key14": "3RRHY5Fh2VpzLEjhJPvCax6kvagjLkTbrj63WPdo8x1HeBrWkR7tRrLigUkkGYeRC94iAb7Ea9rjbXknjXhCy8sN",
  "key15": "qQ8JrWtyftWfYJt5eZKK5ywB9Yi5AW751hgrf138Hm9vzmjDkguHTBaQc4aX8YoLavzeK3eva75HrfPEvLSa8KL",
  "key16": "2uKaDeY2Tr2eYs5RdGsF6L9XRNaSvpXDgdhYRom62wVy4ngRDf6vCondBGjbE7F1gAQz6xiTLkhr9XMe2FrV7uKC",
  "key17": "QbPSEZAnrmKZX72nQrpfnuFAE9wkQiovrdSjC7HHH7kYTfbsykUs6sBCDSWTqxv1a5MgwL98tCt4sLnKqg2DExu",
  "key18": "64uzXt8mijWYPSGg6Afsq472b6m3ZSRKJW76isZCMdFRtMpwpciJpC1hfCJcVSNAkWzK9oNtQX3FLaoPjKCQXfdg",
  "key19": "2Y9hsZJttstJCaehPwi3YrqyrAo6JLYr19doosiqU2vA9v8DXSyJhGs3DJHVQusw2dmURkw1i7hS4STtXKK4avrN",
  "key20": "5aBXgSV6pJHW1aZzvsNiMsg2jUnUpNoYkhNuXDGrLCysz9yJrUpncCU67L9AHT9VyrKQ1jt7s3iAfpZ7APdwDNZj",
  "key21": "2wtEEU1w5M5s2mRAEsnLE9nU2EQmXTBrXVCjNcrtCoXHp5RMPzR6NHjQ7Ztun7hwx84J9q9JZCaJesvxpdCGoM43",
  "key22": "6oQdnueBWPUrC3idtxCaZrAHn28geS3KDQicGXFwidCVuPJyyY2bmFyKLn8BbVrLENj51n4vxYDRWdzkRLQscPQ",
  "key23": "52xrg6s9tUPukMfj2dTo6fJcYDD3tAnvdDRkth2trziSaY39eRRkiixW4KkH7yitXp3naiX1miFJzbz2SFQH2KJB",
  "key24": "2t9t5uXpU8DKZuStu1wKGW3CCkyoXjoRfB1t3zvxPtzbQX8B2Z2Mb9NX3domqubxerRHkwYtxBk5WkCWrdnR3DGG",
  "key25": "pPGJj8RLYfXPsCtL22BRGddPi9ZyrwmBat2u23fdCDWcpwgYeoEBWoQf6xZtKNUmScTdwx9zhYjqHAxWDFhDNzN",
  "key26": "5nVZQTiRpHMqNHM31cYsT9SRRkfBXHHf15CHMNEoM9AXuqgQQV33K4Gx5Y12ktwiSomwwRm39qag6hgJwfJxscSk",
  "key27": "5jL6DGyBCr2p56BjSwHggrV5BT7YAeRhhQ38APrJcVqwUSVXjR8bJ7oZPznZAeoTttePdva5zNRZ1efUhr1F6hc4",
  "key28": "2noYJ67aHQU37vtA6754XwEZRekJGsVhWLeXCnrBNPMUPk2URHDxhhAVeHYWBcqQHm7rndfV3mXv9EA5kLoZEtWk",
  "key29": "4GZYEhPS7bZGFCzGfyToGeDgCykycdq8W68rDPuyhzQv2MaHUPEAJrFbrGSxdja2hT3vtZVdxH6kp9bSfAdRs6Mi",
  "key30": "367nCoF2rksasvUZ86ZjBmj4zvHX5NWo3P792FoS3dUcudaTX4kGb79DKEqXdGAX2Mr3Tprd9CgVajRQByUuhXX6",
  "key31": "4tL6n1RbFAW9xu2QBo5d4hKTztvHN5CgdexJEwViJTcF26ma2Bs9jRbXYTSA1ViZbLF5fFmvEmtRSN36oYHG81p7",
  "key32": "2yw61s89Jem7JgNWS1YmsYukjJBdX7RybNooXjEuPujgH6ZhA8UokTzMMsNsLj6gMsKSM5j85EYSatPTmhqxsdD9",
  "key33": "2wkMuKnBkaoza3YamVgs5m1CohwEz2nbZLRVEQv4yfvrGLSvYUDWbGjgTexkkzYZHXkkEYsHSvJkzqMF5xMWR4G5",
  "key34": "wfXVLpTAYfDatVEUG9mebHQ9TmmHvSsK6GHSV8xPP6zqcU7A58RcAvwLpLHGM9UtgELn5zzEa3zoFLzfAf8kvJs",
  "key35": "5v1KDY5D54269TZYDQexfb4jYRWWojKPKfLKGqqP7hdmzEaGERDZqcG5L41CoKZvjgRigieH87EtMhPM1RcfMiF1",
  "key36": "k5fvirx3DoxqpL6Um2YYds1GznpvddXqXkvoskTTKsCkzJbtz82jcXBrv1YKkvqxKTUUggEugTBc8t3QU78jw96",
  "key37": "2VhBsixDyAbfqpgUv9zKR17CunjUmYgmyopD1oKLBNwtwwKiDkh6WpvUGF61xDWMgt2CPU8eodMfp1H9nMw8YxKW",
  "key38": "27ALqVxdQ4BexmsYKLVsz93WMP3DprytxyQN66uuF7s2u96yCq4YiLJWgHfx5bLBi7MB6rSjos5pjM2cKQJAhJ2q",
  "key39": "t2t4ZGPXmukxma98WcJKaQRRuFjpZa7k3msGERrtij4qRkmB4HkSLx8gnb3A1PEN5WscgTb8KM4q1Gy4t24SM3L"
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
