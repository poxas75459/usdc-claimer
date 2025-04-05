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
    "54thXnEpBtXXocBwgN9HHACuZmQL8KiohdRoHLZbiG7421ZzJ12y36YQjgYmyus8LvgshbKLJxWvCiw4FL1C4Q4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8B5tF9HJ7wohhQYQPMeKFk9Fp6jHszZsJQnt9nhN4amArqnfREo316zMQZRS2JMavYmC21Le9qr6sBx6i1zcCb",
  "key1": "32KAXX8Vv11HR92KW49BcQaQhDMdpobW5ofjkGF67oomEmNq2Ri8yPswyjyMdFeMoWRrsqaLHk32EtuWTEaVs1u8",
  "key2": "4wxSRKK3MJspM2QRDh5zxCtdvrvTzmbhFv41rZEkKz3Hi6tbD4PqHPxvU7pvSSFNXwfPMbH9QWzaGTdS1bv3zzGU",
  "key3": "gfWxfCSH4LV39VVK9X7yQfbyi8uHYD9UFZuYRGRjXkfH5g2Nm3wBjBrfZ4CaqRKhGkpSAq4bMHy813fNY2mfrr3",
  "key4": "5jRL7v3fbdXEzqLnMvrD57HwxegUrQ7DwgRi8UbxZdAXbY7dmyUPATYneqbcB1fhVwgk85u7QxpELoqaYeb87VtW",
  "key5": "5xW6EPpp8SQLp4Z3g6EvvVReJeBLU7CEXj1zmHVQvxXGsDy7CZVhsNjBMFp3ZAfRBzr1jKwqcLskeVcjA3sDRA7K",
  "key6": "4x73GRFVvZD4HdPazyRszwpPmxSLmiiTcDMiDKs6gaXRpfYSMuBZVmbP2MaBdmCJCws91JZQWiQzik7upWEdYjgD",
  "key7": "34AR9ynYhp68SVBLmk1DEFoz6fnXa2RsNGBqpdu8ZupzZqCAa5PZ27BwsDwihBuGr5W7tvap5C8e6D5Qjdsob3rq",
  "key8": "52JFRX8Kg6Rz3H9X7xN3wMv1kt8ZYMhaMtoibiHZCxqMgvu4Cd6HPYF5E3aReyYjXWEfGt6tfc1SyMCnobST4Po3",
  "key9": "CjUy9LbFTLz8ahh1onzyn374kas9n3xkQmDk9e7YJh4mcsxHmKmZzjbvoD1iLXvZTgxq4fDqra693aezcqhoyMr",
  "key10": "3256Qz91DUpEvWHCKDfDSF6tKB9p4S4L4VX6Nbs6QEMDLxkwr3843JEmHzsGAyKDZh8HNbBiTR23MkPvbTFj1pL6",
  "key11": "Mbyx9NGFLu9srEBv8J5oU4dNk6sCrum51hweR7K28NCBCB8kmeAkjmuJNyhMoQhukADi6BKqrpdScFpgG2FvHyG",
  "key12": "1mbEJWHJbabUZe4ofQ8VYc8VrvZwqbbsM1WjRA4UuxeugHwoQPnnpKKmdrDAX77xLVRky2hriRYmvRoHuvmR6uf",
  "key13": "4nEf6c7w57T5pQyvBMbwLjKfM4vj1Gw1XmGYSRqjc1V1s68cYMTFHWX8NMM5LiXgGar9GmMvjXFWxBwgCbzpTBsY",
  "key14": "3nZnqGwX72XvHKbEPz9q7ynA6AiRRFoJdTzru9uxoHJbtAyiK3wkcqkoYBFNDZD5Ao83jCgS6s41Fja8Qz7HF45c",
  "key15": "fR2Cvycb93CMGxhMgdbXjNh6WShEW3ZYo5m7F86kWVMdBGdAyUnAnAyZMj3qmxkmqJMzGUe6fEwSamTxWff2REn",
  "key16": "3GhULWxY7Fg597adQ3UdcqF5KhBYpfkAmHtq21MtsozYXZJwPjBQWBYhf7qtvG6fP7QbKpCYZrquvdco4FFdRNzo",
  "key17": "vwTPWXKY41xcHP9UbYbD2jtWXJMwNgdz2p66tCp1ScgPTCAWZLniBHr4dWNsBeuPbXC9Liti9BdP6yjkJ6upHxL",
  "key18": "22JuyEiT4eokNraYEt8rnbkZruwnC7puP8o7bqTA2HGRXjgqE4ABAqQzDwdrDZFKtAtRfGozinmwrHdnTf8wrX2e",
  "key19": "4kPxtLHPpWFCwjT8NUYzeWZy2dmXMRDywuEYXr9cE81v97aBN8Ye3851K5VP55yzaX1S5NFqbqL7N1XMocLiWzSj",
  "key20": "51RVZvqUhLGnjWvbYHtGKAievgj4y4hbaMbqEp4F459R9WyT3k8QffKkTR8apUuPZWiK3Nv5DPRALH5rc9fsyMcD",
  "key21": "37EdYyWZ5Xp9b1a4cDKdC6aVKG6FsqDz1797bNQp69zhNQzFBY4Aucqn2MmmkyGaZbjAw3xU5koBy5d41c5QJ3bc",
  "key22": "4y2diZvSjyn3Eo8iVV99xiaMuo59Hjjtyf5Gi9oN1BYifwp9X7qGPFw4z8XUTfvjsPwemrcTDkoAFkUZ4NvxYVHR",
  "key23": "2q4mQuHu2CHrgZAajrweBjXgVYHyaPPtkEm347gVStC9ybgNTCVJGVSoteQVh7bhQh1GYBGZZBPXKMrdtf41RTt3",
  "key24": "ZhunsvEEYEaoDtJjnP9NTPe1SnV93jnDjMQDKPc5Et3kzDMZy2x8YKmWxVaE8sinRVbrwGn6o3cCHAkU8EWhn3z",
  "key25": "2SfLY6TaogNNhJjh3gKHd6UPNXYvgShKtg8KDxR1TRMGU9ndwXj5Yy1ThawLXe2xSuveEgCz7ze8aum4WJK5bcy9",
  "key26": "2WLa7d3K1TTTJUZS9BX3VCGwXkTJBKXKwmhH3w84mJZ8yVysnbfiHKGBHjUbDVyL1G28pTkt2PCBAN2HH5PEKKxY",
  "key27": "5GENeDZpYqtAhYxT2VNaaASBVZtrWLDQ5EhDEvUA6PXdaUjLaaS5LkF4g15LFAnm3ZyrJqA4TutFPse3gQgbADF5",
  "key28": "2PuVmPJbrnGscNUuQXkT3J1B8x2PnAjkfrsMUAfjKERzE4bCFSXDGBhEYEf7rmmohAcP23sHyGXckBhjmfUczmJ7",
  "key29": "4nwASzyfMq4tznRjfUbw3dGRDuj7pL6UjW6DVPVmstebXrn2s7CoJyUzyoWx82Bq1oLzvTZdW4xDnnLuzfbJkbAb",
  "key30": "4ZEzKHHGZfk3xDtawVSTmgyh3wvsUtezri7bcckEp154Wibfu242KwNZU2w8Rqd45nnxaajtCzwDWJ5J7pfhx9VL",
  "key31": "4UWaYj2pEqDRgvEsSzyQ5Xb72UFheEikWk6MAWRhowV53nXoGhjLb2SNX1cita9djtrF4aq8m9kd8N98p9zrV3hq",
  "key32": "3bD7bogSYGhtQdqwAeCjcbEVU1f5ArtCd5ucE8tUYEpGn4KuMWjAvTBfJ6mrMXmdTxKwM2wGgPUVY76UJaQaWZg7",
  "key33": "33wSEHfLf9FTi3ccRpxjX23ntbv7CrQWqwU7ovdNAGktEp2bxDtri9j7gsg393K3fZKGzkqWbYrCdyF9qpmJYMud",
  "key34": "3mYXZ3jzYubHfdv9gTBaq5vJR1rPeEdVrQirG1Mvinp31S9qwZWyqEyzij7uDCpmSUagcCVD9hwsNHtFaX1sHBZL",
  "key35": "2xNDeLaRXmySA9GkD8pgmq7zNqGYviyUKnGEcopKax1XRvMibWezHNc7ruFHPx4WiyEAsJeyMZLW9THiqSxWscu8",
  "key36": "4UgWHK5DCf1jwKmwqwxHPkTYEkUmmSRAVRGXbfGubKTqneMtYRERfwtnhSA8QYHpygvimoTQp1aPyF6V9ueB7oNZ",
  "key37": "4EtZsSjkFcfBvoHt8G8W7rXNHkQJHmsB74xG5APimj5eahcX52qkrDamAQ65Wam9UvKnCzNMVUnYSUNacVcX2wMd",
  "key38": "4MoQhwYLX2FRCnrHj4re89a7nTF9hRHRhK3apeaPzBwcpPpg2z9aFdCdSLy373Jk71tTNwacF3j84tLJwDAo4sR5",
  "key39": "5JFvEqWQhRCZncPsGv87v5sy7C2SKkrmaSLRDeNgZrKoWjLHc9jRgPDTTzEyvWr4tG2qi6eTjEiQ22k816ABMdeM",
  "key40": "48qZV41kMbsM8E8syiir4Xv4YaHSv8dRN6JBVrBoCZHvVhzUCrEz9xFLriQKCWJd9FcoHXeqZV2jvjyQYcR4YPru",
  "key41": "62H9t4JNH3ErzKmUaTiYk8vdCh3geYCmQdYy1eHGeJkfDhRuafH9mxwb6Wc8yi2wUbEwiNirFvexYRtBTv17oG2E",
  "key42": "67FBELt7DE56PPgHi6VQvHra4h7FzZx7MSu7aUf1U25nr6VQVevDJLJUK2Skbd8TkcjkmPusqdax3V2HcZ26i8Q9",
  "key43": "3QGVvqyagSc8aWh8qEaGLbN2F9pLRvUNgDSfQsmispuVm5kDgtC7pDhd82w8ghKnwBu7g6Ss266FQ9k8pjbHaodu",
  "key44": "52j9Vwu5fTxGkC5mTju19ic4ajM2AJ3EraLs7D7qATxA3cSKWE9zxHAUap6C58tdZRnvN1xeFvqknMXoZmthVnzA",
  "key45": "5qKDKcL9WQeW5uhw4oErGNFfgvzYFyi7pjMM1U8pizuZTBVGkK6qReXSVSSeUH8wFP4FFKS45v6Ujt7HdqLhAdav"
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
