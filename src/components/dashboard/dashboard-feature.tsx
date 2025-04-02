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
    "3UgfZTcb5NY25Hc2qLVAghoakNHRcZoB24VMLww45MxLwitHoko9nCGrSsTJRUVwS8hUPY5syHFAeMh7MKXYBhgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUrsCXDTY86WJj5mQQSnqv4VrmVCMES4SqKhieff7WztNJprMg18Hd1DihedAWMXcTjg2th1H87oRvugXbD97Hc",
  "key1": "4w8eGVvtKWmUNrH7HyCCesaYj3w8DZjY646Y3aFSVFQxdnXDD8vBDvwQWbqwwkZpKoyLXkJfYce5NJgx2vBUiduW",
  "key2": "3x7qAhnx3e77VhvPv1ukxvyxWaVFVQdFTfNpv9XFg1nSStwekZ5vg5tuzp6w7jBom6kU4omzXuM8R961pazXkZc7",
  "key3": "3PouLp4LKoZrXrw44JX2ydYeq8nJ4GkeKT1uZcPhJH14SvMPZ87TuF2CrPyYrqgiB9RZG31BL2CD4yE29ssqbgHy",
  "key4": "5W8zkuTuBRyvQTk3naCqpacoEwWTSu1FMkpfxvnEguLU7CYSehD4g21X25VhMrM8eTCqD3WqG2SWCS7r8TgVYhzP",
  "key5": "3UqLUH8RH3EHejEiuQ6VwcMNXxUZZ2zrm7W3txCAUh25AykfR4HQ7m9T86E9JZ7xsKjaB41BbzNBptHirTuATFM2",
  "key6": "3bwC2rDmFZwVp3aQEf6QjgAAFSevTfFiYsYbazCd3BdqD4f1SSwrv8VYzpK8rHaKxNVEPoeVoaVEuLyQsYbwPfLg",
  "key7": "4fusDPLrAtjD32y9BcLS3J9aXeCsoXWKro75mKdKdMkZeBSRheqbhFMhpyRmbwgEwR5iNE4KYPFRqjZ8VsieeuS8",
  "key8": "64txRDcnbYMWSygre7HWUZ6ZryNoVTGuC7a2biRE2XXCPyxEMbJMEAYTRzf7LZJf5D6o1BYbMMnwtV1Yg1JmbJY4",
  "key9": "5nSxDup1TWQLTSyNKjH8iTnvFHa3mC5ijYBT81JtYzbrDnzPU4JPi1e5ink8M9ydjhuJV34rmbzycXo4RRDbuZ2Z",
  "key10": "5c6bDs1bfAoVERX1TECeg5BhgsmpjcHd9dyCLxZN1dbPQSuRmUMfKF3Mxq2EjAcxTwK7QoJcT5gP3EmoioKLfjGR",
  "key11": "4MCvw4nMgoiBW2SPEFh5NE7bJyqo1pDuarCwNjgy1YrPHVnEhh2KuzCfVgRWafQDox2AHTCsoYeYRBejzQi8jP9f",
  "key12": "4FhygD5kqk6RUpHLWaC3MEPvQ9bWe3VYorG2x5NDrkZpWuawNryJLkPnF4X6kHX9CJEUX5YB3mnhH85fjZxUcpPF",
  "key13": "35AvtrYAagWpXUMcGeu5LoAuLrwafEEZ2CQw7xCbrtRy782uxFFhTPrn3rBz8ssWvb3Yg4efCh64nQZgYdTNceXi",
  "key14": "4qeMtEg7JfvvLaMqLoh4Vc4nauCBf2kBModdN1ZMLDfzgcVygrqPQvahL2uaLtSEXPyxa3gZ6tWrUmA6DEHyeqW1",
  "key15": "3Z9HrsYWP6ZnRVVdLvbh72Yuxdcwq7xNXpRQxzvabDzpVq5QVdK5PJB27ZjGrLSKxy4yTqqTh4voH4ESUvVFtawr",
  "key16": "2yae9aN555TfH2pGSTk93nK5QYic23m5MbLjq2WqPJnoUMPXcm42wYxJMvA5NUi69yb8v9HAwbwrYpWx2PWZ7JSH",
  "key17": "2pYELe9SPCUUhXaEryrJtyTZivLyyjcoPrpZKNMYN9qNNKTMZ8Xf9Z92q9tgifuQqZ9JoL4g8RuHjTxkauZ4RiVj",
  "key18": "3Gews9y3Bd7f3Y5BReSz6QW3Es7kVasywyD2vvXchjmMvpb52Y6E7M5HAFZQz398xWHcobBJr2PbHnbNdNsPg51j",
  "key19": "3meAxuB9EckeJwEtYS3Se3EgQtDcF9N7Zr78V93f6UUtXZi4qJSNb9cfD5MmiE7H2gB7CiHsMiNCBuak2ZgPhcF1",
  "key20": "4DBhKTB2jq77j19h6LWfRNEtUR5pdruaDde8hPmCm7FCRGinijbRhRLFRR3T2x753SHDkdLmywf1bpx82vkRoyS6",
  "key21": "EGGipeTZpLYMPeQRMZ9fN4WsTQ2xd9CQmHgAPqubJmLVnvRzUcqPrwmEog8iTQJaZ3Deg4MCsKWgRU2iD7e1ByW",
  "key22": "3jsNeBhJD5hwdNNd9J5j4xaCUuKjwxryXFyWbsdDgrkhvmSnUr4r4md8EVCL39b4bTgHiL8i4fMqmhBhjsjzJ78S",
  "key23": "44efmm5uXBLpcUCwnTmtioVv6wcBjvYZEa4RsBDqXearW11QttRyGLUepqBE277UFNufvuDtSEdesKipA12jPBsH",
  "key24": "2CC95zoSECn9fzewjKNmemR18xyB4UATJYMbKW6VjsL4joNcPG7cCFds9fDBTgQUSWMNnwXBPc7F9Hvdf7VzTNNX",
  "key25": "5JUHFRkF4tqvf89LFsiJHbEdd5f58Cp1zDjrwKqtYcn6YmhfoWdKfMaaAzE5E5fxVcDnJhe1Y8yDoSxMLkb2u14A",
  "key26": "EAdn7oXR8Frm8JmSExgM7tjx6N7KtHrUXGRDkr1SDN5NP2XpWB3CGoKrtGQMBDaH6Fgp5PgaL7kbhpuaNTsgLk7",
  "key27": "3W1k2wHCMn3u4FhMHK38SVqH6PYY1yGo52h6hF62dhKyku29pHrmXjaFSkB7nk48cHHM5TKfaTwzxqzwVB95zDYc",
  "key28": "5JeSSSBj4HtkhTj73dEAs8yxNWMcwSwVsYzxziDsETvNhnisazyb3oH9wi8sbXvmpNSqewTxfmcNWJ2a2ugdM9vP",
  "key29": "cKDyGMbQu34cDzTbpVUhhBScprjfebmsFSK5Nz12jv6E5xjfFfDyq8sBvGFsMpbfcrmjasVH7AMwGXXRjjpf86r",
  "key30": "2gfh3N8tMFkVT6AcPJKbBX6zEjf3EVp8hdrtwpVd8HGN15YKNJFDZqgnqsbJaSnYVTp2NqxvaDJe17329CXx2kcE",
  "key31": "2BcUCatH6Eu4WU5zCJY71Hm3y1KvQaTKoQ3DKFJxjk5DfQbZnT7CVN9dJF9V5QDY99T89XSemcuFpANLcSPfu5AY",
  "key32": "61bU1AhoNKXMJ6qXx3dzuUXP5PvuBE3kNd5mSM3qg2xV5sNQNA2kPKtx5FTrpCZoHNSfnrWb2uWBKCPe14tnExMr",
  "key33": "33DnXbLGEUFRPmA6NQkqrzBX2mSH8EJWVW6v37bUb7xjXozhWwrvKBuZV99NzWJ78VXeoZH4mqmkVg4wDnY4VvpR",
  "key34": "2iTfVQVuJZPyewkE6u4KWDNoKhpCbipERsftdUvFXEJVYfLyK57JSaSJSFWmjDWKrC3zfGyxH1ykf9QkHSqz37WX",
  "key35": "5dZF8SaNi7Ar1RkWHTo7PSH7x8iaZ8aQzLzB3rmySTCkp2uqEee79kn2LgSbMxjsBBTcchQweuQNidhvzGSdohSy",
  "key36": "2DY8NLEkb1KEnxFjFFcCWRu8HhCfjT1stGXjUiZ2HgjRSuc46fBvfjoAeoGVbCh54jxDR3nYoKM2HS14oEEUx7WN",
  "key37": "4piyjRYcA3qmzAxsJDSyAqL8664HePdKxnTyR1tS1yKBR7cBzJCKRosfaYhFLR568Z93XkzXeHw47VnrckoQKtdA",
  "key38": "3zpFhMtofzKLHGrfp9ZZF8ARAP62dUt2umnuEh89QTTFRmEcVuJyPR4QYxAQf8h8tP9PAxx9cpezGm4gsy7ZPzgA",
  "key39": "5FEbm7t4HpgbWdf1jPJoR6kTC88w1kBwaVCf51pvQzJXPCZAfJaauEptHxqMpUB4tMcCZVGoeeZ1cu1zPNA3pbLz",
  "key40": "5ZD3sye1f2iVNc1E444ErsAFDmGb4E1WXTNqbbxzuLQuah4f7vTXKhygXYC2u93YMUS9FnjieXhoV1e55Ev6nRPt",
  "key41": "5Fq18PkND2fQ2VLLcybD2f5sMSw2m9sH7DWHiSyfiGpm8hePwmsY2d7LKsayqxo7Qkbue5TBDh3WxfT8UXXfRsZT",
  "key42": "633VDbWtTVcfszWnih7x72zVHwXp7XjwpaqgC5cKFfYs1ZVMDwWdhzTVrGHtv26XQ2Rc1Mwmb6F2D9WWTNebCtqb",
  "key43": "3B21TWcTBwPhi5nzGYoVS142EysSb77QQtFhaQWyMEnDRJD29a4uTdy4GAYjiNY1aSaL54LewYM9vWLN1jnCNc1q",
  "key44": "21pNtYw32fYewxgN3qpLEKtYPnn6EPyQytCnHKgbpzqsjGwTEubuYdivBNpkvADpDjpFrajvRVJwtA6zccBnVSXB",
  "key45": "5j6FsuunxizaLibhSWcggtyufe6hLhS6gKf3Z4EdPNtjKgdTTw6z7o8ejXpKtyuR3rRdRFcpK7h2V1ckhCWWazx",
  "key46": "61QHSTaEzm4bLuvgYhHdS4xEA7dGFVqVahmAwGd6Fwmt5t9UuRV5rgQb66382MWoPzBtvRWuJXDwJmzzfwUbirDW",
  "key47": "2vvvHawgjEmdXGffBYSf9hn2fLBY36VGfrXM4McwTLQxmkw6EFpfGVkY6JEocBvfeUTMYeoudpsgwqX4LxcKRBjH",
  "key48": "4a5Bx4GABTbM5PC3q9wsf3UCYZivnPge8h17QV5B3TsfKwLfwM6JAcXGjmHUh6ZmDuwm5qZwED48QXqbsbE3EocD"
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
