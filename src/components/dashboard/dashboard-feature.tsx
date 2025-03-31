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
    "2vnVzhBiqA9R5XD4ZVfAaQJnm5HySKGRp9VELvZDFe3XtMmeJQoVVcQ93wf1AJAY24LF3Ju59jq3ukG8S2cM1grZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYjfZvZN39RwNhJc7iMyyx1CAvxUhMH1oxQEyEvHWvMBRoQCzUS2RicfCGmuf7gwixQAg8F5qqfZQjnzXefGUP1",
  "key1": "5RsVqAELfvWFoXBfYpDU2S4pgzfDux8qiW6HtG9ppbRQpppRoiBNCD6176nz5h7ywHvbkUmcNHBjCty79tTPiV9",
  "key2": "5rnsej4doVcSWqFeBBTZGVJPKE2nkMcnCAizjNdbwHP5jamU62mbPU2pzMXSHN9cV1d3Jbs3EUnXDuu5Ash6LAjM",
  "key3": "4seBQ9beV1WDEYDBwxPWqiHmvyciBEVjHirQ77pRPP6fNSDiUWCkzpxMz7gg46WiQTLSkpsB2mQqhFVHeBa4gZyk",
  "key4": "aNBPAF7TNrkGtjqBsydDBgvr8DhqrupRLAZvCd6VAS61aiEj8J2puipyy5aUHthkWvGKuQQQNJdkVia6246kDwg",
  "key5": "4b6vaCPyBUJBthL7pRaHLc68jUiFErW6UM3CuoCFL1mVfa1NME4xrzSAKmwPsYi7GPcPXGpKY7cLDujsCAJDuLe9",
  "key6": "63pHAhFiCMJDsa3CsGtz42vbcZ3GqWrzdC6XYHS2BCnVXM8rM9qi39ckKs8GrUkJ5JovEDMQbN51Hs7hrekrW1nL",
  "key7": "5t3ru9GhC9Y7sKTZnEfdrERNvMKipvpCuih8eKFbNJvJnrua4xGTDg3MbcnfsncpUuJagCoeSsfzzAtWqZdkt7QW",
  "key8": "56GmX7HrMtxsBpuVY7wv8QkxCpGpV6jtB3G2kdmQqX8KfySENRUBZMfqAcfhJrjoCKcW5ZnHdbXnp2KSNHoXo9Cn",
  "key9": "3Mnbitn9hBznHu47JNeLYChdZDBTeJ58uTXJqut2nWtZYJGHthGR7oodUUaN9swyEmGerJjY9LvSL3VYXDqTEEVU",
  "key10": "5DWzxMSM2UVot4VeD5Chu3CYk8iXhDmN8RXAT4v2sBzMSZKpMtzpbmzso2SAWZ76agBJRgg2BPjyKhMhcmpL7eMZ",
  "key11": "55xHJP48X84oA5tYiMdF5EGCocHLLwFRdzvAkyx325VbhRz5z3mQ6nuS9NcwFadS8vANzcorz47L1pF5AuQ3eC3i",
  "key12": "4djt8URWP45kQGib1sfMgMJuvNc4fb6KeHkkri58xTNGLZZQWcb2qGMd8nWdVPd9XVYdtNttxKtqoFVPxWoBjJUd",
  "key13": "2h2GX9RJu3ie2swogfLFRGb6MNNuj79QUXcQSYW2Yu9c2SVH3Ry4tBLtNy2HuWLPyG6VJsHCYiRp61mMc7YACBPS",
  "key14": "3FznboX1Ge4hBT4ULa16b1qbATM3oLUxRmybjrcHmqXAwwCpimBtNqobsAgQzJtEbqfDJGHNa3Vh69581R4xkiCL",
  "key15": "34j2ArXZ6Ea1LAHF1aMC2HP2XCADvEMjbwMk6dBHLWNkFkNkHtAysWde9gZhk7zRC4FBXaCZVkvhpXRDACZUcZXi",
  "key16": "3XzYun6btSUcAefZCrJ32LLHGVy2HzRuy3BePp2WNfUjNeiMNVHCsanvL5VSAGdWc17XhhCe56mXAVDWZsDmrxkj",
  "key17": "3qR2kT21R2yRoYNuN2Z3ZRYT2QnPhpSibHsyDF75tUGXPQfqkRXVqBJSYFEHxSLtjtQGwPuUhQGX5KWyJTJhARKf",
  "key18": "4uShsHU3G9C3tTTqU3Wn7ybTHMPxRyNDdtVQwjDzgUJYtrfeEsg4hFKgu9TdNzt8sgPdBGXydyPd8xzCq5eU4B6J",
  "key19": "5VUZG1j4Dc1KNnw1ApENJNck2y5ZA515iUBREKxbPB22pufC6usFa4fwEr3Foxu5hf2cEzUi8A3LNEQoFEuPzX42",
  "key20": "5vqBqyJqNAobzmg7AuwauPLCcKcwrnjJB9Y5aRRjFPBWNBTcJDBpHwG5W6w1GcqoEciVb73uYE6WgFZrTAXMA1yP",
  "key21": "2omxxh9md5PLM4UzXBeqE9WAiFxKTuuSCzMoSBV5sDmqAf3BujP9YFrhqebt7f8S5tAmtvBrvvhgWK4c9fJyyt79",
  "key22": "2K51sLcYguaLgUiEB9MDVXZu97RBRixeMMB7doBquReRyBCu3kVsKELWGkcULpyuB6r98Ygu4RNX18Lwk4Prw51d",
  "key23": "4x4z7KeAEgZpeK3WPrAR2kNdkoVf2VKiud423JY8qwf9KxxoioZpLGLBk7LUTSqtP4i1yMxq9PLKQ6DWaQou9DkB",
  "key24": "4FcWbX3PbU5hD3BAm5rofMWkhxUxVsRGJHRVzR6HFccbE7KVvbX6nTuu1dWWdghhmwDoc2VQqR3PP9TSh58PNfTr",
  "key25": "2S1iz6F1KRShRXupzyVWYxXEx3EGsb3wodac9VYXYqLLYDwcaAv3BuyooU9woKxpbHKT2PYg8Byiy9fV4akvaiuP"
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
