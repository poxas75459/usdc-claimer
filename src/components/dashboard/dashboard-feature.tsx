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
    "2MtVJ6dF5CBXMeQ5rCancarye3dgDBaQrHXtDi6W5NWtHmMkHSbwSBVAeZ9CeZsqZrTqzgYM7zFg3SZX4BS6MHBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tKDX9KPmV8eCvDPEEKiKoomtzJxBqbTq7qi1M8zRyRjLf6HUchVraV9s7KTtVg8LP4ZY2oPTppr1WynZVkB1Kz",
  "key1": "4BsNypybrxQdVkpVc3yAULF6gCeXq2YWSiUdJWKe2g1vtF3puJsgAZFJ5jvkLur86YkqK9G98H9ve4pKfSWzxGXp",
  "key2": "4MGWGLVHn9bKz7TpB5sT8uJzzTft4rmc5UK65mjLnApEy3H4DxszPApWzSeh9YVj9GGRiWfxs3aRxrV9gLq3fF92",
  "key3": "5ag2KrftpHPNpYZJqQBwSvuzeQXxBj71rrHek6dEByFBvDoFiFkrQYqr21j41BePLWy4X1DJsovi4WsRvTzDgGD7",
  "key4": "3EtHatvxw15khAsuvddobLuwGGMDuY7CdtxMP9mYcAufJZTNrt7Y74rTcSR4qqr7rVR9F2HrPywyWyrtTt6ZsRap",
  "key5": "4WSrDMvLTfhSJurSiudgNguHatPqijJjWDvtuVEQBbeYMCdRmGP7oLBhtr8cwdtsuUvaL7SNZEsY51XxKzKd4HCa",
  "key6": "2MBDtgRSA57183YibX8Fsb2R6wMuzyGUtc7Lr9AcawS6ed6zq8NSNwqpi5ugSxmfyiqpTUGXbQngU2hJswTWBahc",
  "key7": "xwXtcbfU9GZbUqLv6shTs1tGnMQSyDp94BsPjXWMu4ZXiNNUHqZxLyjxPH6PZYZGLmFv6MDweNCmH9pCTcLqhxF",
  "key8": "35ba2UzZ7igqwgwBgAz3jNM9n378wqhYoLtHKmSWWNnczDy6oCLiAnM69EnF5RhGBT7NCKbRocN7Csc3ByGYfsdL",
  "key9": "45zZ1euUyPMPhtpPNsjjGbYMaK7mYCGgT4Uj7qMWSeinFgmH2Y3JpYuozmhMDQLvS5KreEynaicNcwVQc5wpGcR3",
  "key10": "4FxosmpoWeePPv3w1uaJYUWZ2uZQh6Nz9RbdT61vn62QJPhhRPENqpMve8qfZy8nj3JMfspSjKFdoSdv652twgiu",
  "key11": "275AB8AvP1Eyr3B2hYcNjjHhosji4UjB77rgPCHfpk43d9xfDMoxDtkAFqZ1RP9U8F2Bz7ZYzMiTQhA9F2ayvB4i",
  "key12": "5Em3PdFL6bbX6yQW7TnnbURG5Btn755RR9k6X62DnSFJ7anzZF2VwTfiBih6VuMExCyTrd9ajdXKch4WxMspiEo3",
  "key13": "22yLLkYzt63zzD5JxCuS9DcDxHDunXEi1GXsWWjSoH17aAj4xueBgQWsDSz8PtAzfMNVCK1XSccdkxE7TThFoTgZ",
  "key14": "5DXkwjudFMhRjSusK9oVyZzJYo3u6gRD78M2ZmDRrge88zRQHvkaYyN4ZmzJnNsBbZYVvLb5YAKpeY8HKpcsNeLp",
  "key15": "2PPX6oL3oTeNNYLTKQ4sZyqPRaSQact7ZP6UvqUVgangsHTKKzKuqdXZJXqYXeWLbwvPy3LrHtuTYcPNE7hS9Dc3",
  "key16": "vpUSx2SV6R4m1WXySaEShCpzKHWhC21JuurdEFNxFQy3LtyL3DVdeukSHTsdyMosGUsnLm6r87k8jk5Gn1PkSoz",
  "key17": "Eii4bE5MTRhPGZDQhb4q2SXngTaphdWSCGqUN1bbAqed1qruqvqFh4NRWnf6iNsMQSiFySoK7QM6ALLjkYCzfS5",
  "key18": "34A4PAnFnqeTqmJG8Ea7CJW7p5AhFmnBWwGtvmkDBf3eDxE9PgzjvLbZWHyucyEUvVsC1dzc9WhSwAhQqHBfVjQ8",
  "key19": "4sncuU6KDnRx4eraTJLh7wa5yDWys4PJgm45TjZ7Gx7EeeSgDXukoMkdxUcsMs3QCbqSenD3xCqredWY55A5aGbc",
  "key20": "2SQmjChqZsYSLYD4zYY2U5BUAqCZSxVN48XFLbi2ozgSa3mdUM9iA4sq6Sww8DmwS5eSRbRE1PWA2TKUPMxMyP4D",
  "key21": "2jyQ3mhb2bByPQSUcUEbbivVaGNCVSJcoscFQDnQocMmFhQm6pfwndWQqDASvFgrGsUXEJ1oXWSM3UcURrnpAKVZ",
  "key22": "4jX1NnnTvtzwKd1q6PW7nPVKJiAbSviKY38b9kmevjtZ58X2kV9TCELkPEaNAAPa3aLGew9CqH3n97uHoSHEjTa1",
  "key23": "2uUuCTAbfH7YehfyqYfkqiswVLhnoCR5fyBj8DNavQP3j1bTDLpVmigQ4RYv93kSuiKa9rfSDp2Gr2ddRWmYz1FD",
  "key24": "2vHrk5KXVd8VyjZ2UN41m13GWK62RCMKRsi674jx2vcuKNEBuTZTzQxkxePW4dbewga2XspTpNCnCLuiN1ZRwHc",
  "key25": "3qL8fc7WA6LC6rQ2HWUVnC4RSgWnWKC2NW54f9ho3uvc8DU8VXx5mjgoqQpPWpVxE5M3TX1VLaoSMdyshqXZUAGT",
  "key26": "2xKP9M8q4KDKp3p5XRFQ4egFr6DuKfxkCbVfQnffCBahd5MzGwNsaS9tvyEcgp2MQHrDNJwpW9pQ6X8fQ1yoQEEp",
  "key27": "3fTJXPYnb8g7rBfEMwsQoX3z5jVDxtKL2Kzs7pXpQ81iNb5LrkwJrVwd1WePZ4f1WWUpAFcLHep4KVdctxXRfapN",
  "key28": "5ZBKXqPc1E7DFPZCTispvKqwo4gGGs9qKbUADvGUBYXFNZ8H8Mqx45bVYsf9jD2iPTSma9ApmpZRM9P3asShwrKX",
  "key29": "KRFVerCRHZE3kYmjjEbtF4kdu7D2Eb9A8CoQGYXqzecui3kicTCHDFbs5eK7yrhkzxQfyGCVUj7a7ZaGNpBGrkn",
  "key30": "4Sabj8hkAEomSFEjS1vA8oD6td1tXGvqkV4mZmDrRy1sGR5iQCfx3d9MKTq7VVYRptyUWE5XHVwgkzqTx1V661qc",
  "key31": "3mskqyGbcbNMKYagA5M7p1oaYteyUkcP9ywVgemMZperwjLu5HMqvTNaBpKwT53NzQX44Vqa2ehDE1uKDxA66Pzb",
  "key32": "5SYCuRtbUKQvyP5zRJG7m8ZT7WGXh4cFB6C4k4v5hg7HKxvoYDnPNZwgWuCw3QJzZWmqeeq1e6VGCpA4mZ9hqybv",
  "key33": "3KbCsuubmhewSbX9sbWp8pwf8uge1vkF2t3MEzYMfKTbEH4LaBCEzicPCsz6Eu7SVx7AufYKgC15zM2Au7tpsuw7",
  "key34": "3iRCB5gWK9Jzkro1HjXW5UAE18hCDreB5yMtC894RauyNBEMYQ1kfsPMiELwmpLtvaNNhjyfZ1MooT6xKRsCGaD5",
  "key35": "SaYx6Q7Ri9d6y94HUTervhwMsJgsTPXjSB1zbiE1TM4TgaKjYXhUJz1WdDEdpwW66EQuC3v1HxrEr9wnGaxiNfs",
  "key36": "3SsE1BxUu61H6YzrFrMAXj4QGrmgnkvq942zw5uP4CgDbDLvYbdUeoThGsATxspyHyN42hyDN5LwWaLWsqZGDWhs",
  "key37": "2d5zdXUHU9YZ7oU8oVDYA59zH13kgEYNGMBkk3sgRaVnWUekUU9uUU5dRo9x662KsdqvBDn7L49bXXrzNEHGDPAh",
  "key38": "31RP5FrgUG5LBEsEpCVprpbzL1mV9nmz5uPcd7xiu4PqGvyN762Ab2jbohCAf6TroHUrmzTu26DJwLFkZ9K2rhj9",
  "key39": "npavUFuSvb8hbJ6GvH5p6getvHNRVUpBTdo3RrdW3CRDhaSMkFYaj42o68ubfwN8qCF7xMsfXt5nVGVcWa6uVTc"
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
