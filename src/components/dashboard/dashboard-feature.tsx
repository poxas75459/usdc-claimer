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
    "3BuZQLYdFM1SFbnrRoDYbNnNwh1VXbACfAAiGt3iUsPnFYVfKZBwQAfvi7dAPWACh28HuKZ91gNzUth7HwJ1eKCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNgt71SWoCUVuZP6zFT9LrcwrzoD21cCWkqAcvxK2HHjSYD7vUKPFcRmZTkTAjMFt5vDxjcxVFVnypfuB3KxAey",
  "key1": "5eqzFCKA7b6Hj7NhQhEP9GFh2wmcBVLFcMk5jihg18MtZCDL7sUGYefWwehEB7XXkW1BcWngsCAXy5jhMao2p7Lq",
  "key2": "zGJkuf1tZzZ8M751QHR32tqQLmB5pvuXpV79d6F4SKvJpyaX4vJG4ZEZ2nWUuYv8gsfXu8W6xn5TZVkxX3DuY9F",
  "key3": "mc6RJUDADjvhNkNdtYpctf7KcdC2RRcJFZq5p9dxqLRvmu155xgUHjaY1Z2a4acexfvCdbfz5PQMJhWhiBKUQun",
  "key4": "238jgAZ1N3Q4uvF3ECrQRwAPk4jU8o6EpboPnjYyNqFANJkfBsV921immyjvxpt7BKE8VMGjrA78cs6nuLxeUcG8",
  "key5": "VKNsw7uPurjoYKViyPDuFyEt1rERw6khXBZN6t27V3h2eW4YZ1GVU7xYHH1JjcSuFmsu3XfMQPEtn2VE8NeGkkQ",
  "key6": "4fHW5DbZNodZtaUFkLpzxbxBMdomKvJagcAb2dvJ26mqCydrVhJVszzfgQNqTmfCLKv3WC47XZLu7MC3dDFAVsYt",
  "key7": "4yhu3eyA58YyfbfwG9rVyzWE7DMTYyyJ58raBtvzBNsbQhCAaPmHUr2dhzMZ284hmuK3vM1D5QF5jnasmdfhYS4s",
  "key8": "2urnsxLQVv2Q4kANSNNVhmkHHfQi9HvXzF1aQ8SA7XMAshcf7ZGgtWKiJtuMrPVUqevLHaNEBzXPcQTYTgWAW37f",
  "key9": "4DtKiKwe6ziSujrZrojdhU9TuzffKRu5xGQAp4DXQZ5msvynJtc3Lz1KrdDFh26vGtyqFdmLBJPSm8GVvNDohZ1o",
  "key10": "26BhfhTYAa4JcHstcC5kRzgB1P7TkAKJLBMhSPHoeJd64fGrz1chzkNc5HaGD6KxV4bSFL1Qph42e28F3ux7CBmZ",
  "key11": "AMzueUVcv4Pj63m3A7neWYBLe4Q5BWmJK8jjfefxTnMa7FjvkB55XDqdwsenqQioDev6YP8zKzHrc2BmrGs3khu",
  "key12": "2ETTWxsFZpPGpiqbpSbGgUSgHiyswfq65yrTpePhw3BrtxUjWSe5T7xfGMpVzYaWqQDRo4AzQ3FRavWUt4XiKEqm",
  "key13": "4YqmJmngvptcHrN39RYuCXnmRenyscGPw9mgUBWSW44CTGEozjXybeND1qa9EjtVni6BDxDNjR5fYEW6RaBvWR3G",
  "key14": "2gAPHteQRjDNXLUv35beVKkNCPaAFuEy54kEmVaqDBsCk4eehELb3hWsLo7sHSen7B8yiezJWpyQ9JUwqaZKS9qt",
  "key15": "UcGrrFQMArgSGKDLDtiNG35gYty7GtHEnozhbSavy4zwgtTr3ZkPNM3LLsP2ZMPe8H2YCAaMrz55eybpT7DgdQZ",
  "key16": "3bJ81VbwUjrgRGNBAw36oq9o7mmPHXG8kXb1hYEqx5Lr8JABkdYG1QMRrSW66CYrhphMkuYjitPDrbRKCmtaHVkg",
  "key17": "4ara8DeW4SnkUG4dfEA7HWNRjgGRmzcBUq5aYFGCbDUoBd5KYrHTFn4SQzSgp5w3gQteEorbrGXNMyMxuwSrKeHH",
  "key18": "4eefkMap1a5qtXFGwy2Z74Nfks7g2QyXpCSSecum7fvdP4iUk4gSKHutu4Xv6NqAKGn4i7dAsXgx1ngtRbV47Y8v",
  "key19": "5Ug1ZCUSi94dvM9TUpsMttbabq1jHLBjuDnCQFf9TqW9kLiG7rdk8STpZswsA9MWApbz7mHzeisgYZyVwQkLTzD5",
  "key20": "3RjtpswdaFwbUens7jQYtuA6P5NrEmstixNiRHNmbg9GkAoVhQM9bo6MXufPJ5Ef64RFmt59jYY1SRo2eGDmvSn2",
  "key21": "5hQLFxDoG4UBN9NskcyEBn2M86WLQGYprSow73aQcvtY8xWZt3yigowfjYjmLkBki5VTbPPnErtsUoJoixiLQtDc",
  "key22": "couUrDfHohcCRmNeroyVmrsg2YBqDa2D8pW7AXfzk4Nfde9MmuELKs4W9WrRhymRg8N1HkrK4yWU4sjw8Esv8HM",
  "key23": "4wZnHAW7GwfTwv7iYSbMp6REdrxv4VMpR3EaboBFPo3S4ZnPQXqKcFbrELWusUJSpsLxxx6jUeV5r4TEyuwcB8cu",
  "key24": "HTne4aFqqsHBmp1EgE37JJSKuhvG7L2A1qBYt5ZeXs2VEfV7CyphYijpEsvTX1PM1Jp3MYkLf3SrtipxGoFTWw9",
  "key25": "WkivH8o1WXQcfDvdELLiQMLsB1zZ9CSyApEPNaoZez3aFtoaQoh5m3PCkb8zfE3YsJKbUjWkouRxpmNFj4Ap5Hu",
  "key26": "4k3vhUuPQD4XMVcURehmpNqDQ95bhzBjdRPCSERwvEnSERckEdFqEMxcR7JW9kXoBSaP7XkVXxiSVLiTeeMtqGCK",
  "key27": "cv7AaE8oadquB4WCkc4MekRps6LWAZ8EDpGgYVMo8fUs8AsEmEDxWJF9NpXvGQVGu3ubyzL9BxH3PbmRhx1DAP9",
  "key28": "3kTRk3F7Q4oZVSTuXYir9VxvhWJ8G73GgGDqPgDvx5aPn2219TEBSYCrKT6TWBKWQPPeyiiUA3segyXmzNwteX4z",
  "key29": "5Xt8DkopD5aw5oHHSDnEywgtSSLZpDFdwWonMXbutTE2SDgPjRgraWE8BGCWp9qqHabdv7sL4zyXo56Pspo468dJ",
  "key30": "5RgGRRkNXwoiHxxk8XiD7bbcZg6YgN9KAPKiNfEJr9d1mPzPe3iYmckHtXajFMLknNJMU5TcmEiP288FFJUBd8sK",
  "key31": "4UA57Ln7FFTQ3LbENRLbb9wkeiNYRyUUvfqbfrqa43QQvatM4ReuArs5YuNgS7vWT4QHQhb5josM7LbXuLwFa6H",
  "key32": "e4LQEFoa2gjB3gL9eUtWheLojJ3p5kJiBj9CuhCJtE6rHBfsVpE9HwCx7ZhReFmvgL85wWBN3J1xe3NWpWLRTKX",
  "key33": "4z8ah3gSz3wco7B7UoqZLpuRBmeZujiRYip9yYVjTu1rWwTMggpxECUiLXwvJyRLjcmrh1s6Xo2dbRaM7eE2fLzB",
  "key34": "2zxzTmnpoWh9jZriBHsBFCq6UbB2XEEk1rDLf4wujeEsgitaZHiGzm8nKU51Cp6c9wcULxnMoxVQm3pTohrDbkqF",
  "key35": "3ftWkJnTm6a2Ls41Epap7dX69eWLgcZfz6MTsnx6oBUEGoKRQ8MdNvKmGjzpXWnBsnzXs3VsAWBFvgiuPEA1VhHU",
  "key36": "4Dz8YgFbdRnu2HNzFvWSNBdYoT3gq7Me17nqK3esyBY3W6e8CLsmPF2ay6GWKYtZEgC3wscr2v5kyK5epKoB8yo2",
  "key37": "3YGMHvoWJbDgpg78m2vUK3SiTwe7ffaKXJVZ7kJPCoR8PpG67JSuY82SWJQtCqd4i7nryh3Cg1xyKNcNkduW9zst",
  "key38": "2kFHbUSU1EktR2Aga8pTFaeTEm7YwPpjPKNFJMNU7trUi2DKenefmwEkjU6sQ34E5RktYgdw96hKDuBqNvhvUpzA",
  "key39": "2ejKDS3H8FmhDfqZsqDj4hvRuB267g6aq7CuYRSzxNWKCkjap2XPr92gYeWDXf3hvTPaFaHPJhWitQcRhYFe4AWo",
  "key40": "3ouNuFSEcCaHHGzQEnK4DrkoaytgPmiQpqJoUYhPaJAoH8s3WmCtkJSKk93m34actAhTbjTPJyUBSbjztxLTwdTe",
  "key41": "2L4zHSLmiqYAu4q1gizw4B6p48TS67otAihCN2nd29BWe4wTkcjNutxvd89yNi1pw9o3HHTj4ZzQQ4C43eT4vTQy",
  "key42": "5zxDxVE9uzMHeqcTik2efAm36SyViGbwRcBffLdntxvjbuaWK2EzC5JFgUqd3JdF6YHkbuCJ2f8RnQFy1L6gV1ZU",
  "key43": "3hWyY3yktLqjWeG6nD5JXsJkeLeG4AeqibBCpYNMeTLNXeQC7K2FTGd7NyS2tFjUChxKQY3M8xfb24xFswPkmjw4",
  "key44": "4DCEogArB96VJPgTQMWhfXySFcq3mLoUdpf4wMQH4qB7gRUYTwDLDwpFjf9J7gyTejUmEtCjUoA7FDQdRcmRBhNB",
  "key45": "4EZqBugevLBQCG1q8N76ETzaSJ9G3ioDuF4f8wUah2R6SbNe2v1H8W3BSKcCKaH8Amntu3uaAEdWNxkKjByzokkE",
  "key46": "5o7HHxR9B2qtwLSfD6zrLj5MdMxdbamPDZEhAkj8Ju6p4WxKcowvz1WxfDga3ZHMLzBG6Yu4Zv7BrJkeLtrZ3Jok",
  "key47": "2PSxNXGfH1DyyXgEksdxMMAAwDBBT2Cnc7gwwqX99FtSHYRCD86mBwvhjGiPYcyRBzFWpDLAxfpYpdsGsGNGm8Ek",
  "key48": "235JFxGPzdhQ1PQo3c22siu3rizJzviSEAr9HLcogvy7n6w4hHfsWyUV9fgvmpturCarenJU6V5geU7Csa6ZU4br",
  "key49": "2BgwTAsbcrQNVJN8Mt3AMEAsNrBqU3qbLFAXW3oRsNFmh5iVv3RMiKCjWksi8TFLtnpDEBTc7v73G3z2NY8bU9df"
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
