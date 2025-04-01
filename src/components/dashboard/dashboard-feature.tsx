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
    "4LhFMSjRy765jYmCQMR11ocrQLqj3sFkdpmHRXyvKANbJeX2bcJY6EZQGv2yxYakPszNBVzvy7ESmgbzoNj4Nnhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5ZRYaTH3F1vrtgGAwXHWTX83DsP7Lmjub1Y3RKVYfvwcgy4FAJQV3SAFoNd3Mv2ghn9p4c489WwwEdY9tj2XEU",
  "key1": "2iYMTZieBuSDdkCLZXBSHjmkdDX8XtQrY7xinxCZCwHe2ozuTwCKw64eu9jwa4dUfnY8dqzjZqdJcpU4zpjS4EEk",
  "key2": "64nEFeUTFBCyxETo9e1qgkoTdVgEBk17xcFaKsWzE6EB73NJURDuKVkvaHnZBNWDqNUHhtDKbUsW7XAvLiMN5LHo",
  "key3": "piEEZ1kBpFJS4isWfACbX9zZaCpHGADTtxCG3vMaSgLwyAeN4rQFKPvsWu4Cgi8BnCSTVz8pJCLnxyF3ZSGZccC",
  "key4": "2wgJQ4cZuMwLhC8stQDUgykKgyhr1j7HeYiWB3FLARWFsnchJJgepZNUk4ZNwVy7ZeHD4vkJXrFW8w6hFFzhuZ8r",
  "key5": "C2AYiWTQr9UgXfPCiSCLMgHD8qokkCxVraV38mBrJ7qcJnFGLSqXk9xD9yputkZ9rzL5vG4zLDN8eUCUxx7w5RN",
  "key6": "2BqBTcV5r3fapWLaYeRW7GMq1mJ9Qw5kqzfMoPRjZtvH9YzFdTNyt5FzPqHnG3jJW4HoVJYLqetfEhrLK6zgU6oJ",
  "key7": "2hDoy3pCu1HUZt1XucKmYM9ooPHFhPcyKGrzLRdNisj8HU8FpMJtUaRJS4U3Tt3znstpUfjNQEBkJRdTbxResDky",
  "key8": "5MhDCVMfzUVooPoBWU14RcNLvqjDdUfx6e7er8Nzk4f7LJd6d6nX3CK5LbezWD9AU6cp98TcAgfw5ggUwsKwqAYC",
  "key9": "h8BMyUc6RwnJynJSUC2eUzUXYaTNeLQWKA32ehzatDaXDD1HPd74PhgJmMfn5Sr19B1E7vo28F7YwmZYR14Z42S",
  "key10": "3XUGKUm25VZDStz9NKCS8oFusv5UWhk2N2cwtrbMrxV3kTkkLJPsTsALkUfeYqRGTawkw32cSxR1Y8zTcemNqfWg",
  "key11": "2GTaU6RdKE5eHhXmF1ASXxyEH2GwGBMQup6cWH6eK5fm56zwYaVYVLLMeuRjSsadX6JXEsnV1Bu7ysW2zBA1XETj",
  "key12": "5fH57oxkUmia9R83ehzyMqHmjEL9Z3SHbtAdVpnZTV5vMysyYn2q9zLRMDPCk84ijgNWMZUQv35cboNnJcQgmZVL",
  "key13": "wjkXx5xTFc5dn8iiwJo4nuL2eRcFQgNpmWkpF9N7RQpr3iZuKWrZ4jdN9dAbcgnzcRzx25fNYNqrRvQ2SrcaCqy",
  "key14": "5pPQjisHxFcjsrLkbKPw6HfB5rz4iNHwvuLnSq7Z41AVksVcz2XWs63EzfuMbK9hxpvdE3os6cdxnVuQ19thxyJX",
  "key15": "395pjqx2fskJnGmE2v2Ey1qgd5k9qyrreiKpQUQPtFEjQAvZUaanbNkSNZXJ6XY7fWnkdDL2ZzXFbBbwxkPEq9sB",
  "key16": "4zz3fgzf5W5S46qbnN2dNfLJHuLo8Zxirkah75R8xEWr39WrtP3nkqJ7cDcKsk1MicmFrdhjDz4mFn2Yfw2YP9uf",
  "key17": "ff2do532ZzZDz4BKEPy5D9zLkShgtE9wtu5F2ScozRe7xYHA1XeshPGrcG7E2RrPpLutiyad5pHDUQRKn5h1WV7",
  "key18": "2xG1BPzXyCjNWzE7iv8b66zRvsedFnMWDkmiBw5ywP55jVgUmom5wSfDL7jb2JXdKuyTt1ZifqpRT5gZfQ7V7Gak",
  "key19": "3gMiKeo8KjmmBHqucuLVVefersQpfytP8aFrALHiGiG7NaeJyAMXJxanQFNL1HjWF2nQjzdyXNha3BqZQmZTXesi",
  "key20": "2fzMfKAzcFxFYJh5m4FV9YF31gcW9LWtvdiVDsh58zARSxChK5T5nPEW3iCohnTFKZfJpKdDdVGnyUyDVBSHYoyz",
  "key21": "3ETbZWcmnAJX6MNdN3dvXFm37WqC1MeQ1eMTAmSJDxQnysPSvJ343XvuewiHKHNrh8ciAvc3YrMtVjKVGD74j3et",
  "key22": "5MW2r7Yw5w79KjJd2xYJtMH3qAfRjnyJJjeHGCCvp8BErZYTgbFbbSJf13uuFwQUXS1r938PksFKNfiVSYpzkEWK",
  "key23": "5Bp4JbAwzY83gUmib5WUUuwx6K5g2ab3VkqnK1v2opgqga1PX7YJxZXkw5UCha4iTFVLeCcysPbZy8zPzWM1eCBi",
  "key24": "5U2HQvX8bvaHXTQtxya5ruakvfmVWAYddVDCCMA3xKSTWdi6bmSBqbqHWKzwmQUt4SWgN5EiKKSydvUm7rprG1fZ",
  "key25": "3jjxPtyYpgMcjCZkLBAuALAHMTqSLPdQcBo7cGr5v82S5PifDaesP2QtMq5FdyALF4Jrae7MK85X5NLznY288Pw",
  "key26": "5ZNn853yGreX7tjmEPikpTR9qQ8aCkNjfEfELyv3koScg8TDtbsY1yZuaeawdavanaiQbmjrKYs3aFjsenRR657a",
  "key27": "vn6uAiYvL9mTvB76KPMQBEspeMQ6coHDX7Uf2pcR2PbfJz6XXk3Ru3mPb6htXZrXMXQxvNJRezRVpMmiJ2P5uoN",
  "key28": "23X1S5PfRYqdrmiu8Ueiz4gBFaYvZiedrFuLRgWm2dXGdCMSvJozxXbAmMgSzT5qh4ZDfZWYtW2PyAgNpJuHBj9q",
  "key29": "3e4Z13YZwcDFvPeiTnSpLuaL97BvfPbtCJPhJbLTCr5YKFAU5CMFxxQ8gdMBm14ztw5RM4NzYjKZGXyaGLraR5tY",
  "key30": "5uk4mer8VcQW1oGzZEeZG3UfxsnuaPYGoZGFGad2MPCUKVyegbHMjqEBgt9SdyimYp1x6wkvNiA1ZTUP4hoxrsp6"
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
