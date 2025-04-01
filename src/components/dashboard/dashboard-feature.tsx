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
    "3oZcuqFAJzrJ6b2SHKQ4d48wWpcP28aSGTgNTA1vnpHMN2dxpCX4pAkrkRxkwYJh7jkaCh7WsEHWgcQZLs8Fy8Go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZfG2QgoEwP1TFeV1gJaphBTZW3NMMJZS8RmEPBH2dzyRPqyhRvx1d5Qw1n93sw9gnJGrfpouXzfEGk6GpSq2aq",
  "key1": "49UwtwuS9rPmUy8nw5ZxHt4CoaM9XRaxmFhFxguhLvJYgWGJtiNw2jZ6dYZbKGXX3kRVrCnVmYh5RSRMdkDpEfuV",
  "key2": "3XFUbyThPvbGjgp3vYq4pxeniTkLoa9uE6HumSCNs9BrB6i193YPuV9auhGCCW61WaCC8k3S6pexQEhbPfF5sPJE",
  "key3": "NsbpRdxdwBpHENe8MoHQU3ESPPJi45sPC8vJpUcSkgKtBQ73VbH4aaEFGphKe3ivKfajp8pwaYsnRbVXAbZN2qc",
  "key4": "43fWMhwLqSDjz656Fn7SNzog7dqwkDz5NmLnNRRmtZcEuZRPPxCQ6vobooJeBQ7WAexTTH5djKyXSfip8URXQxhi",
  "key5": "32GB5X21LPgXzb5aqi4s1iPUJTaqCucxJJiNyA732uqiKhm6tF1ih71ReYLhcwWPbj5Fby9Rq569jEXBUgUWWiU2",
  "key6": "4jWZXgUuoDZ2ziHh2rtFUy4iNYEZVv5j7zpCpva2XVpVGs3BqmvnN4EjSPmSv5TWrNbDM9caDn7NtSDzRU8uy6EB",
  "key7": "HfqWc4unf6rDg8Z6B8iivQMoVPtcCuqXgprajfZxFttjpiujywcH2tAptVUBHNos1bUpdoy31c3qTiHS14d5wjg",
  "key8": "3YsCXU48urNRHkwCNG7WKpspaL5R36QdKkntLqx7Gphc9SDXo23vDNF376oEtESghUsDwGeT2rBYmSCLbJoZhVdC",
  "key9": "3ckgxZf72mpVeDyuHWazuLB4GSXKjCFFvmgdEynss58rmgUKL3gqSY9vAzAbkX9w9TbCHUtGx12iJdKKg1vQK2ya",
  "key10": "4Kb5V7XF1HJX1RKUobeSiL5k9JGAMDejbDPwdDXx1rtyX2EJQT86Cu5iL7fne1vt96ywzJEEr2u9fKt5LXSsZVA6",
  "key11": "3kwDV7xPsR4WmJXhDvnRyTiatWzJ9ub5n6D55STFXNAznFe5gP7AVSGLoMz7yTy7V2eVPzCu5suayy28MGg7pvGo",
  "key12": "3eqkU4eFg1nFcbthcTtvAiK48JsYRhVvDFdAGDX5SjiZ3d5nxfGbDfp4jwVZAH8CAnKbJ87bAjDTmsxgbt8dnHHd",
  "key13": "4SDQAvD9B8ipjKVXtG2MvJrEEpcGWtKKsdgy7X8G8f7tMpKy9qSRTzD6SFtVJvD6CPwBVCfMs8KyTwnC9bLGJP3V",
  "key14": "66dG7VzfuSeT6v7xmn7JuJ41H7K6SGsZ7y5eBENMx4Esbo3bQWoXYKNk4zdnJEi6XUFzg94s4GiELgqSzaFUsq46",
  "key15": "wfiXrRiLiq2XNopuo62P1MSNKisc5n6mYCxhzZYduMEQ5EGb7CDUniudFpo1uwG6hEv2iKRfddoz6UADD5XFsEs",
  "key16": "25ctrQbu3nejQbZE7XkuWmrTtZE352TdqPVitWcuWTZfagSDVkhEj6tSYRA28PAB2HoxZC6qB3Uny24YBJGsWzzT",
  "key17": "2f4JygYP6ewL9hKuRdu6cyGnbAv8a4eMTTti1TYkUrjUDvcsZ9PuUT4vBLMJa5LrRYHEzN2eoKpoE4q68BT9ziL6",
  "key18": "47S6crAh9Dpw6GAWJFNh3PJ4jwXnfdkXrkmtJAjQdRiSxNW9QtqKuC3yA9TavLatAYMG43smzxvvHA7v3cmK1g57",
  "key19": "61d2wJRe1H3QLv2fch3ssLWEkFCzookCm5A32dW3JXwf4T7j7jS987e5fSijQBPU8fHZ5HuBkkyeccAqSPXHLuWd",
  "key20": "5FkTheSq1H881vmVxCw1wSVCRUxoHWzjhNQNtJfm2DDJYYjU27GBd6dve3vZcomY5zsbe6xGuZbjvoMLkaHoB6bY",
  "key21": "jdR5Pk5xoJbM8WBiZJvtGYje9VYcS1hKczUDVZBZexQP7nCjixdv2F5HjztENKgxVYvs7H3yCWo3ikaESFhwKT7",
  "key22": "2uGFTZtDZ6K429M6usK6z2Bs5ahMorKrBpkwdYE8JzBYc2miF9FtoRLCdKn39aaj3WvxKkWZ5hEj9epdda6EurWK",
  "key23": "41aamjz1e9FzLas1vrF8QrhRxSCHHLcTsHvZZuCFatLFT2cZQizABtNFynFs8t1XA78Gy8ezpHLLveydjDVibT25",
  "key24": "4BZvbsfNkCizWFGZn67GwUoEY7RJVZHKCkvWR7yNtSfSCCCcqqK4w9WtubpvREz2jMnFvrQ9j9x4gR7WfLPzTb8W",
  "key25": "2sFXq5DbML2u6e2byexNY5JL6g3XwNNbZQKp1ohYrjefPQDXgZcS55LdxjkRwuXgs2Yw9upNtFeF2ssKwPKWtMuN",
  "key26": "5TYhKZs2TzbMYAba6VKYokRrvwZzcgy3iYUW7WWDwfemP1q3M8WgxZ8j694DECtytUtZ8wq5JsNbU8NxH2uZEkML",
  "key27": "9iswKZ2dn6M7YXTjXjmStXE4JPipj3aXjNyfaFkNHmKKHVjDa1tvm99Puv5Zx7Ktcp9v9UqVXaYjJRAgp5hVgn6",
  "key28": "GH5K8yzuaF6fJZQ9sjFYTBixnhsfZT6Xqm1btJZxCa2pkdQAc8qrgx4BSrwHodgBtj4q1tjqkf6ko1NhbPgYAeY",
  "key29": "4KnRrsskZF6dpoaiVwNFTDJ9gEkRDRXukZM6TDBmZCjg39sZipa7ifiYqVDAcrEh9hy38sreUQGmW7EEErRWDXwz",
  "key30": "3RSBEMzg7kWymoTiQu1qycH7k3BB7sr2YqUgdU1jDGLovVnWfKKLZzpXyKtqHc2aHs7wnUDG2VX37Hfbgjn35GRQ",
  "key31": "5h1HgFAqUWUoT9VFVuRurFJ5KKbiNG7VRN9VN4DB1A6vxmrKg3ggLnRdFxyzsA7vZ7U2AspFutjiJ8YUdKuy2uMT",
  "key32": "4LgogToehdWJJXbEt32qC6gRURuxvbcdyhiqGW2ywtDVwzonTBdBETxYGqRHBa3rbbZFjkY2HL2imxHUTNGJVecS",
  "key33": "5ejScN9raAu3mAQTdvhFBsCHEjV952CacP7UpgkyLECQhei9p1ooxb9aNRh2vcoeeDK8XTLEBkt24VMZjKP78enE",
  "key34": "9ZS7kqLQ7VhDMsdMjDxN222SYY58J9sipqnvPifnMKBLu9b7gddPADYXfJGmLnUVWyCh4bdANGmLrzo64H8od2v",
  "key35": "3UEgtrr8B1eeMzZrJjrBfxS5wqqpwGjEtUzYyZ4DYxHfNCKHKchKndS5pJPD9saSvTYfTphtM3rN7xnEydqmZWNE",
  "key36": "5qjJPVqrixehTjH3BEbSaEAkcWD8gfqRdn6x47pAVfbp9HtdUkAnVYavRPGTfB1GokycSa3sLYps1pzAaqkNfxx4",
  "key37": "4ZSp3GtoXV8ixGj4ugav33JdyNWBW2EZcgtDcsFZpkPf4XcA3YnWpbuFUZs5ufsca354weioY9JoY1zhnydyciC7",
  "key38": "3x4fzpLwN7TVRT6wptPFfmNQg5cZGv2VgA6qr9raUxLojjN2TnRvtv2itmbbsiZXpDARjsnjwYDQaFveNiEo7NCD",
  "key39": "5CkHb9oiMDi5TYZ1puZosRb7HfyBTDmN6qg8EC2PZMAa6FBDbjhDygKviiuUPqi6Nvi7U5pk4f8Yt3LVWvLeeT52",
  "key40": "5e9nurxaWtc7ESbDsnHhfj1BaV2qwsNT6WF8wU9xMF3Zc7nyv9Vo7VQkV7C5VmNq5gLs8kFvrqQrRvEPDPp5UPre",
  "key41": "4gkbdJVMX23iHtpVdqM4TitGuWd1S38LtLfAnfKBLsaToSRDbXCxwzFtCVXR7if9tMuzdW1TeSkK1vkEuYP99tqv",
  "key42": "3aSSRZR4KEQwmoNAhp7ihFBkoEN7nAQhMHkgRYLCYXKey44zUwQbVFF2WfT8nHzQpWjCFDavQvJbQPR79VdvrhLL",
  "key43": "3dVh2YwN9Ws6hb6HmS3ME1WBxp259uRLXVYXLpzu9rJGbWbqhE54r7xdXPHNEWeJfLK7bh2w7zWkk6DdWmbpwNtE",
  "key44": "42cFiddFUkxi11hpc3mR4BRuYjdwvFzNLTwcRmhUqdrs3UnC7WpHwnknTyMZW3Rxisnzt9wBvdwV9KcGWDcVFaRC",
  "key45": "2rTqL3j88Sk8PqouRuLfdziCtYaRSU9S2hQeocVsM5PsaErpLZJsk9QJpjQDYtqDGoEinYPMyFfyjGu6pQZtWkfm",
  "key46": "34rLYtGZRGJ5hon63pCTMjG9fhHPQtx9uPB7cPCanSHnraDb7Ue9fjCFCkR94GgYcT9cykUmJVbR2TmRPqWJcJRb",
  "key47": "3h4Esvy54zfhVkrhFZBP1vvzjvgDdAdf3D5iZ8TkCj5XrmAMZUE7JZybpNAB8NF8uBnnAZXi669N58qbroyTrSSU"
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
