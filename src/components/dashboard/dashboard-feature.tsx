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
    "5HB7ASkvPvkFgi7sgm2AmuTPeZriHziDU2whvWDzDzGkoQU8NU2kXifW5417MghoL5y3E5DTcrqPQ8rqdk6JQWXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48bpPPU7qVcZFv8qPuF6zDbJd2oFA27MzHs7QUJ97jtyp39csJag6g8au6VXGqVVPizKRrZR5rYWkZzn1xUdYRyX",
  "key1": "3MqhbiZPxyeAgQEKmxnaXpQQcTvubKbrzkDzNSz8PeiLtixviAMsZvyVsNBUTZrQiSNvbEzBqHcqf29BGLUoxaM2",
  "key2": "h19RXaBLLjJUjtqPeQ1BuJbpHLiZMDqzBwgCX1PjftDYyin9Do8ignh9qf4x7yMjLiU1abD286bdt5p6NHeW8Cc",
  "key3": "z4Q17q1hZnqPQN8rmJYx3HsBK8M8YbzJuRPXMqkYa2f7xhHqUCNLV6vTBt7TFH79kZHKJm57rUGiNU4egrajcbt",
  "key4": "hVzcTAxtKKJmJQ3AA9h59bjzPvjjALftp69HfMEqup1YtPZhh5xFTESyPprqNX1pfP2ZYgLzwrDkxTqDvDHqbtB",
  "key5": "4YDK2nhkkJecrxaj4XPMXwDFevUMECLGyh6f3Nfq3Au79HB6F2zYgEJf5UHaSx8JZKQoyhyG4pApEtBX15N3eiH3",
  "key6": "3RAuzahgRJ34DvnZxhx4G82RSaEgu7BkAUoZ1zGCzLa3Qk459eGQE6aUEmxe7zvEnxafAPyvbegcSW1tAeuHYpZ6",
  "key7": "ScqFFCU8S3w367FFH12i8awMM1RohXWBQE84bvHTqFaoU3uQTMZEcXE1cVEc1BNbKVNZifH71FkXv3BS1BRjFGW",
  "key8": "5atEsRbhXihAH5UqcxSpGJk2Lf7VcNkR9QeuA5BRUiBBAmMg2kQgEcutTANC5YdtGLBNUwundAUVr9As4MwqvcfG",
  "key9": "5QnPBjaJqQqUB68SuRZkdr7A6FHHuEuDgVSpj4zx6FjR3PX71uGkqVXvPBj5S25KYkYLfoNwu8hDmhAQXi4TUi5d",
  "key10": "P15SN395uAUx4msVs6Ymg6hQLDbTmn9L1HGLtnu9FWMZdNvCimX1hRBKSDLcGkr8qwptuUf8J3Ci1oiCiwMFbD2",
  "key11": "2qWTwyrhbWURpu7kP8eCNDmF9HiAXgkPS1KhzGGgSbrKzfu3eGPV8CfxGhrL57ShCkwBV2bHX4BTwJ5kmc27uKc1",
  "key12": "4uupLAqmwdGC849XioJbF1YKMgdA1sda5ZdyS6v6pyVGoyVrJnK6NJ5kTSTsZ5jrD29wXnGAQ4T5NWK5qA1Fpri4",
  "key13": "3KN5LCPRALnoCkGAqJAVpG2vjgzjyGZvgN33hXzQKwPCHfHUYwY6h8o4S2ntz33UxLRvK29PP3Cj5zsY2dU5odJ",
  "key14": "49ZQPqWNuhpKTaAqpxVYL2Ty1LMoEiawvjdE6MTrQ7mLgWzyUFn79g62pQj8AUmxXwZG6eo3vNgZdYdzeB4NTcMv",
  "key15": "4sRPPyeUNBhrmGa7LBVRmgFM3Sa3M1UqncQSDh2Aw1gybBFTiEsBnp2dt4vPRJoko38srMJuE8QQyavQ1EqwB5Uo",
  "key16": "2pxPPNa244HqX9kB4W6tKJHpbquRhvTAoRYtHxE8NrAVMeE78wAPSRgGasfDW7gn5ZDKLJqS6cdhTkniT1bzXMax",
  "key17": "5mogxznZKZryZr3NHb7Sndqj7STBTQ7bZgcpZxRK7wrch5z56nZMYHvHYXBPbKPcYb7as2k7ecsM7RnagfjzxGh5",
  "key18": "2t5mMEdTGWdUNrEKAiHRt3s7TJryzdEsnDTvCu1fxA1MfwTM552RQ3uKba7pn3yC2JqBkvjH2SEX9mT3t9tKEPbL",
  "key19": "5z7naiLw7bVaYjyJUfX7fwfGErtJTGgjd1sSW5Mk8FXZPbAYYVFd46FF4TCZAizWFxistkPnbaDX1KvovPfSv3f1",
  "key20": "3t69M98kuseKyRRVrxno4EouEKH4pYVR4NCNEqYLyToT6urCP73gAwp7ecao6b8xtK53x2qebkGMAsBVyXMrfTk7",
  "key21": "uZk5sjSbSdtqiVPSeDv91yDmnDMRz8fjxWYXDwrbfMfigSNhwBGiBwXpFsZgitpAgT2gvoAdUuzYxED72o1Kxaq",
  "key22": "3BE9gcHnVAtYaU4pi3exuFxsiq4EdUqwY7hcJWTSiHyYFGRqvzhX2mnr6oDwJxbPLPgkeav3UiG9GrRuDaYaob4d",
  "key23": "XzrdE3PvSGPWtufqdWGbtyna3xAV4MzdWdvvaWrkeJgwdqT4MHFZ7MrbDvTYurNwAfubA6Mha8FdBtdsTzJYJ3p",
  "key24": "2sS11fBaYKxeRoKSGzwfnKYE5yqpS2gKbGv1jRM6atKStS8MBhyCCp9Bw13dF3eyqZAeWZETUg4rbabPZ6UG99eg",
  "key25": "29iPf332AXBLSw1FWqpiyeVSRUuGRckHkkVecErgwEcVNCU22H9iomfmFSznETkgBrPjB7En2XkBShAtL1g98NYU",
  "key26": "2Nk4JKvv58qtv5cX1TMPf7DxT7922MEdkc4Ps63oS118TJ8E7UfcymAhcAsL6nDpsST24gw2aAWLBWquLF8GuA8d",
  "key27": "4iVoVJViWsciARk9X9yciKzapS1K31EzsegnYuhBYhijXwMiZ27QiCjSYtj3ZVRhd2AViggGqS3EHteLj2XKd9Vx",
  "key28": "394eKVqRquyk8erzwenKCfs3BcXr8q7Cp8D4qyHYeVQfsSEECej8NFZV8aVNtSfgpWfeJBuaAc5SmJMUVewH1EbE",
  "key29": "2yFuxMCquM4KTWAxfQZEjP6GeyM3Krgc1sG89N4PKKntp9GGKq9xP94VTphMAiV25XKk1UbGYHRAU1hBakpY11it",
  "key30": "5pVmaYB2XvmARxSTXUsq9fzeeZ8WGzD7Hs4rQNtqHQfNwM4jkj5XFZ54o9ZfouaH2wstEPe6Xaak1TEunKFqtU5m",
  "key31": "3Xhym7d5ABb8Dq9fkrGc5nYrVCEJrxTMFWv3CFqJKEZF9AznuULAUxFZ16mf6E5FYLXvZVRb5bWKP5d73vUkAJ6V",
  "key32": "4yAK3qeWZqEkiu96TnEVQ6TZzBjKsT4dgG1FvAE9tepvCazDAXN7E5H61CGkqnW5vsUoP7cRpRgaAx1xn6ZhUDk1",
  "key33": "28gf9xiJC4KfFw7AbGs72GxWykoLDB1ogDwyBXGvHgrThV23z13b38ALF1udPBMSikKZWqo4Gx6bLdLnxt654DcR"
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
