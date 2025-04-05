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
    "2qZGhdeZwFKHoXxxsbTdqVBZ9k36rfMBt6M1d7LumfSZ92twtMVffmY9bU3y4LJwksdENi9z8ZErfp19AfW9fwaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36svQ2UcXCxwFUMnrjbxbJyh7pY2UaRnvM2NYjc3fHWEG4Z5AYV519GYYXg6Ea9M65odvmiqGj6npDTYsguHWGWi",
  "key1": "57P6zKFKDbNaasBdwPbYA9Vnw4p3wvW9PvEXgoajdLX9bkcScwQzRaiRjSqs5HESaLsgZfpucen6aWNBaEAvPe22",
  "key2": "4D6CinCNGHRkjZCmzgKeceVCeN1NtEJ5wnoqJ4GAQnNr2mVvxHQsx8k627DgMN2TetxRDTfxFXVkWENdCxBqY82V",
  "key3": "4woKy7gf78o1LSewsDCzhhU8swr7bZFyeMdqFrJEfWvUZEw8mg282nMeaLVaaxfvemta2UEqRVxLtCiL783KNCXY",
  "key4": "4JKAP3sjS7o3P6wUMehXQTLLGRFayXYyfNjWAqxD5qQWhtWVWyESFfceNQpLP7UBJ2NUd7vSC5BskqWnyXP9hQE5",
  "key5": "5RVQNkSe3cdRAPTSdSGNUYmq4HkkiHB5bBG2TTpKxU2H7Ej6LxuzqDdniuJGyo7GJHQmxiCnkrN75ohQ4cbTJ43x",
  "key6": "5Uk716Z1csLf9pnQvtvxyrB1NzaGeDfPjUUdZehLkgRmirrJY4CFT3Zdk67Gkj1BXYqH4LQB38EMgAAJE7ibef6u",
  "key7": "2F6yJB3eBtA1fazrcxX3qMRdfhV7eceXq3dT43nAUcNXwuTjgSFFdraXtDni5khSuUhu34wcYtBB1mSDqEtniYsS",
  "key8": "21RwC8Y9x64BMPX1ddfTcuc3oi9yvrh3GYp1ToYSa8M8i1mGFddkQUbjB28h2tZ1qF2PtHNDVdRxoCDM4eNZuREp",
  "key9": "U7KxvRDRRdo8jvaTjBmqRUggonHP1aChAhbA1DK99hSdskefBEbjN3YEMAUnivkfFSYjVFvEYLA8s3hr48bP7zm",
  "key10": "36Azi5kFdEcjtTUFL5b4YkDeCQD6rhj7T7Ev2sXbu5wWprL2VsoHh4ZbeNkfw5VYqQDvZR5TrmX4iquA8dXYPWtz",
  "key11": "s49gug51yDk7pe5u8V15is8oKHdhaTFMjFZJ3dmQXneaJQwfpctdx6Dm348KKj5Ua7w7uTbNL4HA9AtQEKukBQZ",
  "key12": "43UqgC9ymrMgZiMM3Cqv3CgjKCPqzSqPXiqUu2jr254wmwvVBGE3DdMrZDMgB6p4uCDbq7xqod5JJrXHPwMs8NKu",
  "key13": "5fhN4VqFT8gpMFL4q4HJvv26SMnEKBvu4tNTkMikmdPxxCTWbYFDzeZ66Rw7ANsHv6AoikzeLacNxmMybLKCfVeo",
  "key14": "LD3yKgcyofTTjEATqYgUV1ZFya2aqoZJAzbdtmqzcvbosG5LZcQLiV1di31WgAn4Q7oWBYD4Yx2DsFXpoqnxwUv",
  "key15": "48Nzvv6tWTSRmC9cB36vDzeG9TmLrgewSr7rqwu9NoxAacjdi5qV36GjFVN47fYp1A6GjCKPAkfRUgkb2VwVhh2w",
  "key16": "2D72BokJfqAbxTU6SS8UYPd4xuogtR1UxbvQqoS5K5Lad1iRQdYym1WyPFPr9tXzsPaoCELyNSJuihSKTPbQ6FH7",
  "key17": "4wSbxaZL375KSfQaRBbhomb6MgB1ZXko21D1FhxYZYJWmEFFcv9o5vL3wAFD8KARE2b7FfcKVJuaPa4MkM5GMKNs",
  "key18": "5Cv6yySRu4JjgJHN73z5oAzxVaBz6qPDpgLLDpZNhqZ7ouT8sqXqW991cUJey9YkL8wS3PAAK1itXaUeXX3ZzHo6",
  "key19": "5iDgNZ5vW18iQMwdGuN4XEepVeoDvSebDmkCC9bxqiCQT1hJepba9xZqNqgWmfeUDb3ioGxoqnJF7EofDNSAZqwW",
  "key20": "5vyfn5mnZG1w99DZPJ6imeqX62ZjuGwwEs2uJJXkMN6PMwoB1iU3nyhdnxDrYXuyShmtQ8FfensFXFsAr7fTisrf",
  "key21": "2oteVemoEcmw5Eka2agtru69D4CjSbiMx2vmzgx29JBBXi88CxCH8EVyf5qmnp5Uxx2HvTkGdjqBceUDi4aWMXDR",
  "key22": "29jBWt9R3UznyXo7hWfZ3pt6ptP6KjpWNTmTEQVGsj2cjCc6TqeNgJuWF3dZpHLYjmhH6S5MmEKs8DeSCAKhu2Qi",
  "key23": "GjfPjinTGXgZfNtefwkSYxJa8GyLwsrCiCSmvnDwq6TMqFEfvHyba9GeqC8ygVTaP6xwFXyWMQfgjJ4neXL4YQ9",
  "key24": "4BHYTnAnCrSnxMmvc1qtsUfhCou6nR1ft1WvDNuaA5fSgb12Wr2MxzqHxRwEfCu1oRtM1rtiz3KZuv4M29uAasYY",
  "key25": "C6kMAvgs4SxRqbgucMeezCxh1BHDK1HYyeCp3vcZgtquoe26cGwZCXJe8mE4WWqsQnEKaCfC2BxqBdHQLzg2VFT",
  "key26": "4tvzh3EFUqMsDG45HBgGtcgm68MzUWgW1hCkYLUEzytW9oEJdbx5aw5SxNRvFg5tMtnKCLAC7tNG6v2ekaNQx6iF",
  "key27": "jbKBcB2dYT4uQGhrNQKBawd9x6yMbCnmgbZwTriT9EfhXzL7ser8EWfZHPWK7Ha93ZQPSwy4XWgFn1X4aoSuTrS",
  "key28": "3tv5pVkeYwaTuPNcrevN2fPp8fukaa68Tgsdhd1QxbpneSP4bDLqxtnQgjir2WJxVFSA729DFX1K1toSnUBzdjjF"
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
