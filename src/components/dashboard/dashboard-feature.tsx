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
    "M8fZsD2SZRH1xhZmCdZCcwynPo6UnxtHTHUV4L2LBF9VPYLN7Xv6njWwYgXgpYQ2yY6t7CfT5cvccf1jhsAEnoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SUNVuLUvaX1opxDMXg9exu7JPhtnvqVca8VujdqGZn1Z6Ad9ZVjtwkYittMTUsLMMM9HvGgGwEgpQhondavhMsk",
  "key1": "57kiYgndstLzcG6BsEXrEarrZpTbU1eT8kK7vD9zpDMuskxTdEPdBx4BmYZ9pq4uX4m5rsLicFJjD6W8KyBk5E7U",
  "key2": "ByQS3FpoXTLeeBoKG7n2QsQhEMHFp4skPoVYFkxGii4dpAYzbPLmTCY6Yco3F7NvHSiVSEU88i3nFY7r9wrzqxr",
  "key3": "oN5UfqFNaqu7jd9iJZnp8oN6mwYYARyZwFG4HkEnzJhvUMpBXcrUeng4ym7Ms5JKh1napQ8NkcpiRiSWpjRZVGQ",
  "key4": "4uUW9zgZuqDwxm4QpJKcQKRSJ4XDysSvL7gEaXF4J3UzVXWLgegnqURvTJVK5mZAAAXLDVnML5XpDWuU7hkgTUEb",
  "key5": "4imSaPQ5UopTTEVb1LH5cCdA2n9uREvgJJuKNSWhH3xd9nDj7mebhp2uKgtYY5jX9FyEbFDua4o6sERXga2vwPce",
  "key6": "TzApAGxorfo8iuxeX3ygxe69sbiphSUEpuLWooSmdGXhHHEfMGzQbCdUxQ5y6Ffkpk4X8rRH9HaBT6Gs36mbXxS",
  "key7": "4g9sLSL8d1NNbUTQAVWWUYtxZKvJBUEBC1oFh6azL6ge8c4WeuL4ZzPADBAA485X1pjs2XMLWGhz73LQF6LHSkdR",
  "key8": "2r9ghs5yuVyc1pFEqgYLbXMWZ5ENS7HR7dvoqMuMeRQw5yKxFfMiT2Jg6Rkq37N4RHGv9sKHrqPcPD7JLShinqW5",
  "key9": "3jUChefhELF4gnfhvnC3fa3paHT5nu3FMJoXN5BVidCcJvsaZnQnxw4LMU2pSjzNw8LwvNqoSe2mUGFHS1QeHV4b",
  "key10": "24p4h3Q1qzsZLJnkZHrEBAYTtTv2ipDAKs6NW7u2SuNnvyRA98tesocDE9W8gC3NLsewfzTcfcDy8xo7sDD14izE",
  "key11": "4Guu4oZg35HGwXfJzfpkst32YmNWT6b7xfzNfJaJ915h5gNimrQc2JXSAX3pA3rUd5h6yBftTkwH5vM1qpqHMU6M",
  "key12": "5UT9GQnSZh5TpkiyXZrne4io51u5MztqEpnfiuvyN2gavrdTYEA5fyq4VPC5874jtXqWQ7pTj1bpAVXeP2YeJAMg",
  "key13": "3n3WETh8jkB2MeWPKNMeFej2cHShmGM8HNfQijLqnVRrV8RHFkKcnoVEyxZ2SUVrE3VpHpcJ8mrYGZkcJubGkzWG",
  "key14": "4C6ijxJWPAVPZ4JXNWZeWydgfet8SMAq6S5JpBauKQDJH2YYSabWn5xkx8hFxkreHoqf6JeHJiF28xvHJhsqW1DM",
  "key15": "637ayCgMqdNCzazvRDmSpCzuf3zpCTfMWmsGgCLrc7mCyC9JhpF4a9og7pgE1a45S11uofcwmDos9pdRQLoiBhFt",
  "key16": "4ZcCmmau7EFfNyiu2WbUKaPaW4osuLMpH57rHwN92P2CLNy3td5TL4DPbbjS2stkk4iQP8Co2E4MEws4MbzPvdcQ",
  "key17": "5jkPah4eUAW8XhsMjetsWfrDn7Qf2Lw69xRLeHPQzGpPNdSucDd8YS7m2uvFG84LdHN3xAnY6WebZGhFp9wRENfj",
  "key18": "4zp3qWzcW2vQzJJWxZzfdmRwWX2mgbjHyUyN7fURdKSisBYZhuLXzsEDjabeYs4RvodRfLnnzehPnvbLoSYpFe7x",
  "key19": "R3jqskpxM58UKPPEPLSonmRaeNERk44Mi3TqnJGqmPvwe9ffnn3aXqv8gyNdoWDZQz2qKYGTbhFA1wdJL44pFid",
  "key20": "5aBGWgAhwrhScWBtVzauCrH4ADvQqTGLbHhJknBS7F19m36R7Kev8XkvHD6T5v3maC9d73bTDps2s8jV6KFhzUuc",
  "key21": "5si5SFhGfiycWp3riSdh1ANyVSH7Vp3p6cMPNECtquL29vrySBCmsVaE8kba9EXy5yFWYB7pPACgM5Je8qWPiJJx",
  "key22": "nsjvvLDTdSL14vgKngSvJ8KHgZkSZmLYjC5cceNSrZuUsF5u6Ptjb5rLmZacbmNxgKZ94HqpfRWgyCGAdfBh1UK",
  "key23": "5riV8F25MmHWZikbg3c9aKWSjGkK8CiiPcCZq2mxbX6o4XGbHyZqyYmyAmszEcmJ5dY7GCC7TydSCn5DyPHnNsRa",
  "key24": "2Gqh9muQG3aoLbwABB8fQjFhQsKutr1di2EE2iP3G4AxcNBmUXVzavbLTFbHTmC5qomgoR83dnijTd8K6jAgA4hf",
  "key25": "4v6i96VQNkKUmMY9nmUe8cktriobE7zDv89TzWiM6ASUhVEWnmkcQZrEZV1iXnv7Hckdve51SxJtzci8tQ1GGpJM",
  "key26": "5WuEDXEAFfyXF1c8944d5MB6VKEKtozrJMdS3NnTzMghFbpfJZobbR4FUaHHNqUuZw7h4NmpQGx5uZJoyNQMxHnm",
  "key27": "474wdjZMmLWYBaGFmkDdyLwa1LdJ8B15EuAEkf9LWZ3NnxKQaBFvuDq6aUXEZ2DoUcpTrf8D9bt1zSDJqpxLudB9",
  "key28": "39hictra1cefrWtrGJsg9MDJLidwrTcgtKRQsF4CNEUDzSM8f7o7QN44r2jwxvLzMHMEgqdCQNYuYzMoChKPjAue",
  "key29": "2KWRZuAznSmJ41T6FDczSMWjUv43sVa66T4JoUxdeK1UvGDKym3DQG3xHsqFzYcevBAQiGyL6jMRrnZJSMGMaipf",
  "key30": "AijzeYM7hsAMzou3pQiV8YDCvcLBb1LdbaPfGW7rsCgG1Ku4YhhB88YqZKVrQ2nft2vY2bYkHu3jUcE2t7HwxKb",
  "key31": "QjT5157b6X6tYuN6fVXevJKDPi6zv3NoxVGEhX3SFt94uoftRjVmAebPB6NGAt9UGXeo2hnti7k3JsNYSYTfpZv",
  "key32": "TiYrU8Dmfw4XP7AurQk6GSfjcf6LmtnnETf4DJTdhAZJBmt1YnqbNQfiAJCx5vWXuM47UYnHVqTsMieuFNEbFsP",
  "key33": "5Co7aLjt4dUT3uK9h6c1NEb9XpG8zrTfLDVWH2EKRVryXie1dVaMEAfwwng3BDJrjTnFTUs1HQb5iE3XzwUqx81e",
  "key34": "3QFL89ezeJhJw3e3ypUsquS1mCtGDWqiZiKHUhh4FPFZHhmFedMTp2xnsAu6qpRLjY7QHGJx3BqHWnuorC5seoek"
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
