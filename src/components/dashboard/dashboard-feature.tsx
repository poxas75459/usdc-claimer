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
    "5AkiaUc19LubbA8pfEvEFxQXNnLBQfn6V5sVsyDMVCBUckdJt6uZp83HKgth9KbqfWY2CwKoFSgyuiTNYtx5u9aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYU2dy26JoF5RXvPTBJiuwpZqpvTAK7tnoYhjVpDnmi2GAYSxi2PCFyN3V39pjm1XXwcvT94mi9xBPKhroSm4Vn",
  "key1": "2wZ2yuFxFbtxucPaYG9NoHTLEknYdNE44TvpaAzDUVCxo9ya3fnVfvAPEXipGy4cfvmYXHoc63fCDF1gtf3Emgwe",
  "key2": "5au8nQyWLtv5jLERfgEaKiwwqY1eR8WQ6f3upWD7N6x2ime9ZQQgKs4YVT4SVxyuiR2eAmTjHsQyZYfkHa3Ph6uB",
  "key3": "5yXHkMo8CpdPjYNtfknEoQwGPSGD8hCX4EJDVMW1k3WLRFAmmDzwaEdokEymAYTNDQf5yohNCd84YBRjYHrYrNkU",
  "key4": "5VGxeumVESVJFqc17aktXdXSuy3qF1uVsYpFZn4RBZJbxhSpJsxvTkNFEzNestZevwUikrPYJDTnWXeKJSfGG7oZ",
  "key5": "BSdQQYfSBYE5RWUiHkaekrhEPsyVk3zPyMB52mGHAU2eb1eioLuWboMMVQYsX9AZjw9y4S5oMZtmGsW4DnDSN1D",
  "key6": "5Vr6Skpt32WFtDBgf6akBDN2wRU2MHhekSiqsrgM3G3GkQsqFnEi71vvoNtB52CB16bMzcbWSHd7JSUWCTYmLfzi",
  "key7": "67HHGjk2d8o8bmkz5Zeq8puRSxoBhVp6aCUKhCtqQatrN731zjPMShzQvbaSD9NpXw8FgryT4dkCu4hoc8aRNMob",
  "key8": "154LDmr7UkuyYJRoj7mUDC9cqGmfMUHV1Kn83KcHPCa9kFrfK5U77HYaeozSyWY5Q52U23k6jbyAiqUPRSTFKxj",
  "key9": "7AkDVbhY1Guts3bgfKUGB6STUpimTGgyDJ8McMmBQj5XLbGPKgEjugxEYzwT1i58hRJpkn5cirZJNEZ2PWAPhNa",
  "key10": "2gQxitdQzU6fLz3Bx7V4Xxnzg4B8hsKgEqTg5amEf6oUrG6rQPGoFwLuXNie5T8bwJiYZKyXwJ2Qm6AZGnBY86sk",
  "key11": "5yRD5GKmemxgRhb3bj52XJU5kka9T88DnYZGGHdsn9Nncbqm4CnWtGdY7Tu46iDm8FHXvsFvVDunFuq4b4AxXdDf",
  "key12": "38qtkseGAkopBaw3ZvsNjm5GDaeUum2WgJAdQTNcFqvDALLLUAUKzh9xmCFSAiceQcbBwVDLWjY5BE8maZ5nPBZ9",
  "key13": "35tJjxUgGRAab24kMuafDxtaJbvtSqqgigCYTcmsFrdvSWFjDrbZEUcdrEKXL5rKjxYboWBsDD5YLT7ftJEr7Pb1",
  "key14": "4yw7RMCh9Zv3ACknwfukZQpCC1G2H3bBXSDPuZzzLKfr2z9Ze39pMdrm2RjwQhfg1KejUaP4useaZPZgf6FzkeKu",
  "key15": "3bFaqdgEhJQzQtQ5dVhCagpwq6Sqng1zPCQtE8GECK57uwg4gjbHB3ZrWzp8MfWhaFrLZiYYqBP9HxnVcm1Wt3VZ",
  "key16": "oJaBBBx7z4dfWmtdB1uSdMxSFeJ2XJhWmSP3xSS6HAE9WYWiESnCxurXoRE1YqLRao71eg5TC25eC8eQgEd158s",
  "key17": "2cWi7WkQ5uk4mzTkHkwDsHmzjaNZDnzeUjpunFWqj9nkZDN63eBsXE9cqaQGhnoQMMcEuinZaqJrVpARhSsftueM",
  "key18": "4bQrnHtJiYXAM8JHpPdfo7jBh4sxWGRVyLgSb8o6qXgUTa3C5PGZ1ymj9KnWR4zcxC9Ke7MccF1529HdqgrN3A5E",
  "key19": "3aMKhvpKPZ75FrAViRyPbidLYctHLRCiBbEAHoLxSNZEx1DoFdPbda8AFynKej8rWRZwC2sKtunE4aj62i4toJQe",
  "key20": "5iGXG8WiuGdMvsjxKhRtjrGZ4r6C43WfAFfsjn4uPymjkdqrf9dCRXSSazqgspEeDTsfD12Mg5CMqYDLh5V4rqZj",
  "key21": "2XX8k9CxD6hnzZdNAaUq6p6jRuDfU8u6aRnTJScG9ybkCBU54EcVMBeN7k4j7NEB47CuGDAyqPNUUPsFBFSYPbL3",
  "key22": "MCR6yycLXEt83HMUiHUDEkHGW18XnVHvoM16eB6F3dz7RBFJB5A96ZMXQaJs5biPrnTKHkQofXJRSP3mSi1FYQ1",
  "key23": "Anjf88R2bDsF8XQfaxBe6QhgcaChhJ15QDi5S7N2rqX381JGkdRN7uFgZDd3ry3fq2F2QdcbH7gMJzdLfUEkECq",
  "key24": "4f8c4wUivZiQ2smEy6HCcgPHMCx7DvhZP6on8RLoh2PN42npogA8VcnQyR9ukNWFm8XxUjwiV5D2jmbCb4uDw4F7",
  "key25": "rVcnjvPhFssci4Dp9FxpGSWpUy1BPMLvA7QB6SBjUoUiy6wWrgzXDnh8dofpLJXCafpkbLfNnZmSFEni7JkwYim",
  "key26": "4YLSEvxAXDRrhPRXuXSvrTmewYr9wRU83rSEzMs8noVWRt8NMHpLzfpiVM1L62Se1fd9djSGb3sd4Mv4g3JKg7Ac",
  "key27": "2mUsD4DHSTMzUcnozmHvrfxE1ZhWvEsxgDCxyUb2dUSPBJWhq9PaMdcuKzSeKGMZSaCuQNmEiL878JFKqcRoKzXf",
  "key28": "2TktnhdMRQASCpd6c8c7qdvWdmZ4ZkysjYqKxVfKAiZDAL3EwpnN16Qcy1f7WoNeG3xjrUVHg9sNYidQm8Tzw9VQ",
  "key29": "3jHvUHYa2a4E4CRakyi5BH1HP2Dn56DGbgGhxFTwsYWJqyEyWiibVJU69qs3j3hY2e7vMujC6T1MJz6CBUz4atJw",
  "key30": "4Z5fmDWTdqhWrvUUqboWsw1PvKsejqVUQEuZ4HBEMTrt5MjM79ZHF3RriozHScr98Vm5HE4AVPjoCADKAApE71yj",
  "key31": "56PeQWYFgf6DSbxG5a82ccGb29Lfkm5NUEhuB2TAn1uVq9HS1mzk4YJ7DtLBgtRQcydeVdF9FmYPbeLNQiE2cHPG",
  "key32": "2eEEXuRUSLcW6sGeoDrLYUvKJfrXySpyAcmVXnL6B8ikbZX46ir8bxKoLsDUTGFuay2T2AhpDXTtULPo2k2PumPA",
  "key33": "1yS1MEcLF1NmaS1XVVyTRqiesKkywgjB182oMjGw6kajsWUt9ovb6PDPsKgegLN3waDBcj8KAd9qMiJd2F2tp4y",
  "key34": "3Ka5WMyh4aW2VnqdwtdDgioxRwz3qpxrGnBGDzRW53pWCt4Q3bh9CCKYWZMRAmrJ2UokESqdAWMxM1h9kU1J6k6e",
  "key35": "4jfTFbZ2wuG74C1Qz6vbgPuY4JsbjNgQqGX8wNtTukjiuDKf7UGhRX8oTchinfKbBKWRpCzFokeUUhPKUY97hvks",
  "key36": "4LaGNeVTgya9t9fupXDRduHrdgTCZXvJ3k8xUZepRh5KPKBfFv4rVSqXDzyYHVXkeS8RjNahvXSHLuQgaEzbaiWD",
  "key37": "5ebdzkpKuK5n6bgMcNyLgB4PGRHxq9jYQwicJZRs2RUccQBq9P3UdwYaQPviCACtiAd9xEStcM7oubpdkkCDouAy",
  "key38": "4T4tfC6uKcZvzmZr1RFpkV5NNTUQWcpHQGFKiX9NkHEVF2TgmMKtgTfEvpxZswqwkv9CUcZHbFqreSCN1rWVFNKi",
  "key39": "3Lr4ZLpio4QVSPGuuWpJkL8qfGbSwNqwf2wTGSf2F86kQz4nR4efAwUb3xZX2FrgN5TCnhQBtjyQy23EMbLdtVU1",
  "key40": "s1J7YiWHpmWDUeLaSdFGhkyjsyhRQGre2xrnbcQG9kSfQsxaYYTzGWkYWqUt786CnjAD5eM4x4t8zk8GvGVGk4j",
  "key41": "jgyJDWphSQjYXK3DJdWe8J8ieo8GgUGu7DCM9Yx9kacYjj64PkxojFJv6NZGKAcJELRQFUmdGyrRwDbGmrEuEpQ"
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
