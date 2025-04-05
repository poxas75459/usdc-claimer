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
    "3PcZtXqJjfqkA2ahCNFYmFBj9ivAEznKDA1YJffyeohifpWHGvRrLypqkymFTvS193ye6JmW7bgPMs8xdPak1Bhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPar24HWHqX2nEwgDz28D2meo67EwBKTE7Ao6MMkgNfsffcxtZh54rqDggWwRibcmDijZm6pKgT5Zh56eCQUz3Y",
  "key1": "5mcUYTxjmJh6s3ngAm5R5FPm1GKkpXR223cj9MFje1Kr8GtLi1KL6PnPTjWPunAkWURecm4y6tGGeRHkBQVtY9ie",
  "key2": "3Fe9FBXSm6Z2L9H7fNUFqvYcPiefe5yFdimgsvvputHKWRpKKLS7jDmdsJYfrs1WxxXx7QUfoD5z3xvZ9oM8CrR6",
  "key3": "5Sob8ZMktKrHBhViXdgghSaSfrqzvry85q2YC2cJUbm8p9yKUekEPCimTCScVLm8xgxxSMDvnaDnWzJCRY9hoA33",
  "key4": "4GbpsUUqmZuveNTeWpNZT2UVBkhqiRFewTwFXnX4EBfY3BoVyBwMse3b37Wu6TQpc61VH2jKxzBtfWtdkixmphA2",
  "key5": "5FD19AfdLegjMmuPeDDXJYt7fNzJnFz7Qcv2Kpg6xceDuQFQsb6rz9TySmzbfjBTfxN5r9KsmaAAWv18Sjv5dpP4",
  "key6": "5d9Lv5ej6m68pGf3HakETd41NtSsQYahPcAP5VQC11NDzG1P8hVvsTGS4HDhyhwtDsFxhzmhjqMsEi1GiJ5BVu2U",
  "key7": "XsCB1mqCEzCNEtYX4RnZi7HRKMfKFLMaFi3TRq5UFgWmGcPE1BogQHnDcHbHt4PgnxHpSuGegtXgmiFdPgmuizi",
  "key8": "3snXurkJP1uTaftiaB1qZLCzNRAnaNKL4hEwkB2hCUw2KYyLVur3zd2RskUnhveoCWc6HMDGiED4sXQRY3PKcYCs",
  "key9": "39NGDcx9Mr9WPk2EQxuLJgLwx5xAdiQqoKiZrhyucGetfzZigdc5AzHo19TkcNGUZkVBtkwQLjfAscYQv72EmhRS",
  "key10": "2DfnAQGuJVLP3TQuwgW6zkZgifd4W6qw5DdmsnAKmY1aJsRomhPqEBsf1u46u7wuhq3MSdpgu3YLLbyRxRaAr9v4",
  "key11": "2s6mHNfG3MzS7Po4RyEbGoYdqpiEVKqJvESHsntiAM7WSEVDNUR9qeCpMRdMoNLbCFr3qh3aezJpkpmP96GxdQmE",
  "key12": "4zWpjPEor4L6JVH8giwFUtSScY6ms2xKR6br1dtAqkLbaxQqQvZQMqy8hFrijH2jVMG3MmGZx3tKu7jULMC919Ry",
  "key13": "5CdvjdQSis62fRD1AB7y2WiYFML74ALr3aqEryLjJvmjHdhcsXHdSJMpbNnY8pwhuMUmrxiUn2ZrtRrhHa1HG5Ez",
  "key14": "3uELFBTREjQgnC7ZpEr5LxN6MJadqPuVqG25YhF6xE2jy7Pfr7Ws49Hrpvxr4B9zsjNWXUdtsj9srLm7aXN7kgeA",
  "key15": "mHQUPc6NVXxkc9NQUY9JUM35gSfCq5TicCxsLCaKEJsyxYCXceK83kBTyW9Jv3fsiNT3cZwgHPo2ANU4GZybt5o",
  "key16": "2RvtvnvZwt3pvrP3zD64CwZ875oeGH7jVWNyPAr59LYF1p3LD1x5WoXq7mJ9w6FLrZhSamGauuJqhUDBnxkfWQg7",
  "key17": "2GihbNqGYM9p7RrXapWK8dyWmiDWuYj7r4HWoG9wsyC9Q8bhMCZEb4jMwZfP7gxNCgkwHrTCmz1ywbnFbAUHnWhv",
  "key18": "23fe8ybVr5hyHJpmPabEkN9g8JHR1WVNQqNbi1yAkxziz1EjeTJEHjRWMJRmnQjb21o2sp4H9whXU7HRfkuPTqQB",
  "key19": "49MzxcKSwMEn8c4n9xo7cyDqLnW8tJw6HK3bF4EPut1Gx5kbMfEpaYddhHKvmKGw7nXZss3enLuRvUKq61fttA6f",
  "key20": "65i34BVaTRAYBmPXYcv8p34s1agtNvvhC84mZN5FoCGqvqyxQUyduPmkDa6R2Q9F34wY4m8VrYnq9CyCgMrSvAkF",
  "key21": "26DzkBKbf8iKepzxpCV8vdekdMKo7a9Ey6akJJ6jcUAwcdsgDxpKPDKfFuousf1go4EQg8khiAJWNJ7JyX4Q9ccw",
  "key22": "n14D8PBzZyaUCujweYDihPnQ6454FChHGQix3zxQ22ixtyrimeDAtDyY9VWJxt5w5MhoPCjK7JocsHLvN6njxqo",
  "key23": "3Jx2R6VNW9Q6bAZeuHRK4fQnQpp5qwgCFMvBEMJTzRH7YP3M9NwiTN78GxTYbScKeG7cmYgw9zMNqnU4SZj4m9xA",
  "key24": "2UHWWqRfwPFxzfMWpZ2oMm6ZYAtmHrELPcQkrd6n5UJEFKSuUc3PRRScLa3C5bskRYh1KmVfphvVeosABkqGjZRZ",
  "key25": "46k9mdb1H8qm4wZx8zsGRc2zruy4bSSLFUV2rLxSyE8nbvEYwqMPYHpnFsZcmtwkYzFLrF1oLMREMKfaXpg4tYi4",
  "key26": "5AgLqNKZ43zyjSzDnfqbeZi8GmhN8GZ5vVrhovST3noaoVMCbAZkYY5q5SzAgpPtADbgyUj11JwmmYfWHbgzKw1C",
  "key27": "4YzWWNuAQ5ZT1REnvUa78aMKBXqbv5P8C7Py54TgEYbq4Dh89oTcATQKGsVQoesAB8mb9mE3HCJih3rbwpRxDq7d",
  "key28": "3dV5SURwL7SrqLcscTqSJD7jVh1xsQMbK6Tvx2e7gqxSh2tiRYeT2xiCFJHgimmck2iDwxJzZH6S3W48Rn7DvKFb",
  "key29": "3gf1wzvxuxiVGXbWGwrNm39GdC4H95AWb6KeSiFpHQJWu5va9ThPdFYv7ChE26XnHUHvmtKZxdcVYbM5UG5VHQJj",
  "key30": "2f2Qu1axjFMm5Fr9Kf9YxX4o5HEQZw8rdGHroNg64vmfNBsK3ZDsNrefgcA1CpMY3VoR8SSA77tcrK6zDZCYTFGU",
  "key31": "2Hy2qw9ooYXpGfWH8rcdJvYiDs2YbVypETKJjixo98b4w9aD8xgKriYXmzfFaaCHtca5kQzbR9NaRa2wTvzMJ7qp",
  "key32": "2Xh3DZcfZihWkwMuCQgCzNcirWCsMkQ9B3SvBErfCoKF1L8K26aH3UKD5DdMLHt5dNcjUxWgxT9xNQ39vfii52Z8",
  "key33": "2XUWQsU8aQ9NEUF9569gvrw1jimQvk9uy4UCa4gTDNqRgdnTMHCCpfKXL1RsAvsbXv4cSf2KtJ8eDzoHfQnUJhNh",
  "key34": "aEdbCxETUwmZax6zJNrwHjB7K1QmGCJvePEByNEWFfe4Z9No37xJgBPBdVt1aH1QjrqQHuBfwz5iBwLQtqdpWk9",
  "key35": "2WoKVqj5Vaq5cRELba5hH43NgEN8axhfKVXuHtZfD7MDaxizcLZ2QpcGKgT7tgWks6cu6Dcr8pa4wGpj7miSsK7u",
  "key36": "3pW8qi7qaMJX6hiobzVJ5AUGYukG8LALgcrc4XxUxzpS3ppfD92An5Zm5eszyFJBB2Cp1n9yjHes4Pg7fekvHFZN",
  "key37": "2vTWVjTXkh4L4dgzY33SjHaLt9KsVTr43vMLWZJPQVNLnDyW3Fig6HzLK7cZvG8F1vAXPh2bs5gW2Po5nRga7JEW",
  "key38": "2rJPWXQSKpjDhBhZC7q4T8RPVuciKQWzqUKyjkaaqNNTEiYg95MQzaJHUBxkCNuRvkyrCVubxLxssJSkX9BdDoRX",
  "key39": "3XapMJDDr3knWhrhknfLA2m8VEjZmi3KPqTvh3aMo3vhLceAai2wdj7vMrdaW3toLZgaKBGzMJ6AgW6KSdJZjohi",
  "key40": "2sVytida38mekKE8WQHfCdKnDbtsQZee61U4R3JfDo4jE5PmaRy7RUcuBeDoAawGgXQSbEZhw5cxbW7g8GgFajwp",
  "key41": "5ceZCXKu4qdDfTkuWya24W6utyyydtKyr21MsyBQUemksLVsrPh1tfBcB8fgs3ZpaCKPGG5yYp7XKvePyqoGaNaa",
  "key42": "2Zh4ZKPD39m9CKMSat3Eo6uQeCqPrvVNeCZrWVhkw9ZKEuNVwaPs2Cj29iCVHLsg72fdQE1fRpouXijXN7hVSws3",
  "key43": "HZjcR3qpqZ5uCZbCmhWppBrAvirHRaj1bKVTra35RjSgFgXQ92sUwcSUUtYjubgrbwNWWtCvzZqxP9JwYCt9TtE"
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
