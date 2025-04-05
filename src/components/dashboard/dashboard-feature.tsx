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
    "CKmF8DsFNMFFkaP9EHoCpPQgyk6VcorgsTYuLxTrscnj1HY8rfekuQ6VMYZGpnnCmuUNxxMwbVQ3uuBJi6Ucr1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lvwif18fNBHSZsavoFnn28DtLKG6QnpfdL6YFyAuHQ2x1H6bUDd5RALdS3Mwjkutuc87JBpb3924mjsYPuX2yp1",
  "key1": "5UmDbyy9WCCAaWZqSXM8HYYv6QfqMCwHnH8ipeCJ6zVD3A1eHkfesEj8V3XCuHCp9LrzVsSnty6qcAsfUnKheF5L",
  "key2": "2xyQ3xZDAiQf3qziijKXtXF27obLCfSqAC1b6aL116gehN4YCSNkqLMK9JS5ryzGWTtBNe3ioCUKxntVdkXMYiev",
  "key3": "rbV7Cs1BLuX4F8WwzvqFuvNQGYUCnv34LqvxizST8hHsCraqy3e2rHaqLb1oqkpWJ3Y9ipUAusfFPq5KvmHUYA2",
  "key4": "54RwbCputQyenNPop6yNfaev33qhNXSonsCqyfJCwAfuSJ7VjqBdDoZrK4UQvqhTfrzvrYSem2TAGhdqA6poVZJx",
  "key5": "2YhBNmb1PUrnDKhv83U42xgzxh4RYE5HND2fCPyayKZG7hPPviHU5jW3zqeq9FP4SYZABnojMqJ5iEvAb8wXzo2a",
  "key6": "65Lyvee7A8XPGVAdCa4rKB9BP7AWxdsJqrNUZ6LumQrHJj9gREfBt7iCmXPuP5TRo6AiH885aniuprXLpN3xGpG",
  "key7": "LAahdfrZWVynpaDs36DSmfus146nT468KZqVrh89utjkrnojhohft6xNcpYQNTQhft4jQxaDe38981wE2ASYBHJ",
  "key8": "28gg49FfXQcmknesjZPVj6EpVHjFAM5b8a52PPD5dL2U4yEWoy5rxtVopaAoZC7QztQaFTi4DoAWL9dci6FT2PKG",
  "key9": "3HZq79iWHgd7DF8WMj8bxGM9BgUPQX16UBMbKqAHM69VfV1687e4vpLh1Ejww5KbzvSEsasSQ6wL7mj5WqkFCwnY",
  "key10": "3mc5WESGraRDJb2uqscTmtWHuojX62ANs5LLLBaNrYUiHBDKsdnWZ8caDjiMTFGjTLMveq3UQjrH6PG53N9xzjB",
  "key11": "5BK5So3r58qHHkeMGeCHAcGEF6BPLQBnhQPnftWMa1KZnJkqSHf8nykrSBgohVFNHRAqUKzjvrErVYxnZyL9Wg11",
  "key12": "3wqw9GAEpf2ZnevDHsHcJjMpfJHzUqhFNSstdSz2V8mdi9rkvKETYyhzK58754E4HagCFR478WJ91PM5YBS8xpcH",
  "key13": "3qqrpisLN4jcPyK5NbeMu1FgohRAGprsnJHn8v2DZgP6JYRWe1cyGXGVAfqcRgJ4bAc6W1TiV2QTaGf7R1HNiydG",
  "key14": "3na8h8iiDuShy1PPsFb8MekaWDGYTTPiEQcJxuf3EnueXzc7tUWGowtHVE9MSMmgymQKNKgnUQG61xRcZax5wAuB",
  "key15": "23zmkbJvupx4RAgiWYiXSxkEx1fAYxfZC6D1PGnyEK5zLdP8YCn34tyR2DPJobh2eFncC3KwwvjtTVf4nE7aFjrf",
  "key16": "3KqGwGJk7kk8dDwsxUeMWXDbda42HsC3aC1LuhXKVX3e96pRavBSUDNcYHAV92RZvMeUXuCxnrsj7FseEUkuSg8d",
  "key17": "4X77VVXnGFEWsnyEPMNRGmRcrNRjfoQjySisrdjKtpHMwqmC83g45NyqbeVDpBe9oYDunSWH8N8cLNjATfbNMHyE",
  "key18": "3KPg32G8GM2PPk6YkVnC4RncQ6vVTug84YA5hT7Ao3wQZZJnceXLFiQMvBeGs6SF79GRhvTY6sRKS64WpCXUKKxK",
  "key19": "unFZK4SP6g9BW5DHy8tknfeB7tD89JAto8ooX3hP8xoduwRqkeJqQny4KVWt97dUyDF78x1TQziVS76L8wuwKNA",
  "key20": "3wWjzCXNh5GF5cMoiZqiWTmQLX6mD1TfKXz2PzPBcL7REGmqgBNGyBoWLpPnerHWrvdGUU48foT7a1M3Bv4tCUV8",
  "key21": "4jvG6JcVpsQRMoT3Zwt2ohMJLkyNDkPUeJ949MMNATtpuEadoF1bAAyLUnjSR7atWMRoUjnVEf14SECc1phzpwhN",
  "key22": "53hKycVpwbQXNmVb4vHdSHVNQ5ge7LM4BppKA8nQK6FBQRRJFzHejnS29aLiUFHYefKEz5ym9Z3NE3A2AxkZ77Hc",
  "key23": "2j2mePNBQ2XbfUoCjB8sqBEqNXm9Nxcz9Kp1Z8QKeqtZzR3vqEV6AueLW6c1ZBgrQsAXfSKrKYV5sv1w3fEEF6NB",
  "key24": "8JpazR3mV3LhxuzAiQ3GQcQeZdhCmFE77wiFkkHUWBmDRnd4JHTYnFhMbtLbFf6HdY7s4oHjJw7fW6SErcoDraP",
  "key25": "3gDKEq6PeqQcwZ5hduv3Z6d6P9NQdsQmieUNK6SuepzkFgaWKvAkaP8VSq52timG66Pi5HLFT5EVjnSjT76PiZFZ",
  "key26": "5UXpxprXNwnGcpnCpDr5JHZMbtDPiULpbR4xUxFVGdhYP86tXx22FbUferEXiMsaFo8TKBVMdtML2JwxEMZBHoyU",
  "key27": "64qh7Auu7KFMCiA1N6W9PmHyFs2dyrZ1PnThWN2ortUi8g9xp93Sz7Vc86sE7rJZQCKvLUKM8EErQsfdFFvJmVrc",
  "key28": "5D2HMwcPRVRwFKcexZdsaFXSRoKCmfcn2zEx7uQP6r92qaZQ8kPJnv1WrLRVdD5C4smGASVFN2x1XSvDSUrK9imo",
  "key29": "3cqiA4FVhj5tshWnxjs32yqWEqynewxGE1pzGujTGibmxKQko13iNXAqipoWs9qhc6eWuyWqp8ySoXFiLJssJeEh",
  "key30": "2hhTnZ9cczrxuNhK395ARDVWL9zER3N5qSfTZxTjDTcRXPcXCupmd2RX4K3tVr3RwF4N2N5iF4ZLNob93oBhsvJr",
  "key31": "FkuZe1BH5iefZRiheU8iMyEBWbKygoKxm1PNJrcZD6YrZ9c6DtUcNVRPzU5z3fq3DtZUx7CTakQv9fE4S72JxBe",
  "key32": "2xRpXVaLSFUVyrGNegF51QpAXXkbTUs6zZRzVBxAdV1qr1tKDPboqV2aEw5uqSMtyhDVdFjAfPD3JVTZsvt3bfwK",
  "key33": "5JK59hp8vt1xzivbm3BfEtNXxLPvX9vohbeZN3Da9HaCojyMRdQgKsF9PABxfNfKwNJAJrCEXwm4wQZQ83rcp1Ry",
  "key34": "h2ZCN5biDyfe7viCwDBHtdDRtTo7w2oAcHtiWNfTwjv9M28vizgfJqUDY4vGkGoo332tbvEVV251S695EiLxsFV",
  "key35": "24xJ6LBAEh9JmUkyqPFafjBAb2jyuYwVoFUSA44mHmQhtavYPB2ihJKSNAPfed81cU21ShEuSXPKrhoX7yg2CZ2R",
  "key36": "31kszyExtSkGYzxALVWLsLch5KCbCs6XXsmMgYP7PSRc8kSofut3ia51QVnjdeNFZRxZ6kBZm7BpwF1HA9MPf7Nu",
  "key37": "4p8gkvLzJ9PvXXMtw3pzZX9HZ8jGwWvfxjugNAEbMhB85Ut3fnoo5zGWui6sSqJET1LojtjhR7e92VvVEdhEZw65",
  "key38": "4noH6jnMx5SrkHYyVYZ1C8SMEYRfV323mVpwuQF1mZMoejMVDSGtFbJcqDnLjfHfZriociK4fGQ3BxVhE6iEGBx4",
  "key39": "4CVTyQc1yqWyyhdTYs31uAaoKaREyoh7ZWvziUKUq8YKdjiA1ZfuRVKULHAaiiNswZcHFnvocmdqDT37XTYQdkAJ",
  "key40": "fTKVZy7bj7JcfhGEB4sSEnMv4ZhkQnXx4zGUEFGqJJFqbhoh15Xwj86kPiauj2KmjS7kLF4CRnytSMDMoxQyCCC",
  "key41": "3PVJxH4WKthv4NUBhrUcagR6JUPzTfSoPe9Cn53hZFcp6mVQL5gqUghKCE6W8MF5xR8iEbnQBGFZSR2Qn3f3vhb5",
  "key42": "2iDnFTwoq2nq7xeu46YkeeBV1E18oPJBVARHUyfnHzaV7mxKNi9Y3mDMvhw9U6MvtANgN33XjbUcTbvVGuPemYrg",
  "key43": "3oRFczUMX3CDZfipK9cpMmHQSEgQQc18QCMDTeAYpfJHmZM3PKLa2hVvgwq4E5K127rYAMVyJdhXGgoQXZfYqSnQ",
  "key44": "5huiYs84jYsHrE92grcUxFBzeckGuizyF1HnfMw7k6mhz7Qup369H5EkD2e8YurBZoivfpsHZ2WEgp2VgGCMhNAi"
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
