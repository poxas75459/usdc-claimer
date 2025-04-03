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
    "3eNvpdwDEhyXxoudT3NA95AF39JdZZxyaALrgPfXjJcp91DTpLPKE3QdnjJMitjUqXRdZwMU4iP5v35Z9EZ2KRzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2cHyNAEw37khgFChEVeY7QVeDpa5D4ufeEh5MZC4h4hXBj9Pm29g8fBNKG8ZkaCBsVCygdYTe4kUHMgJDrUBkE",
  "key1": "3uwsU1EUJnzH1WGu4WzzA4HYZegvPTz9NzspYnspjr5pcdQa34Ug51vwmGEH5qcb34pZyrHfPUheHBXaWALfXsMU",
  "key2": "5TY3QtrGpdunRDh4k1XbFp8r5eAtX9SqvgoksgXxU1aH3PfjKK2ye2WxQ54w3o5q6Ndzc5nXSz5pL4wVtynRP7Vn",
  "key3": "64suFrVQN3gm3B5DZxr1gHMjwag24trTAHAzffHqan9ucyp96dHxw6SDe7zets3szEHMMpr4BKFCS9mciJ23vBXN",
  "key4": "4j8LWB9grmQFgzbGhLbtRxdkuYYLpxSqbajY6hdyhL9bZ9boEEJqTUpRiy6NreqsCb43hPFvsv3uWwL5odaUGD5P",
  "key5": "iC6BDxQqvnJsHRM97v46Wq2b5qGu6jnn4rHgJ2BnWczQoq7YYcQ9nhWnmrdeiRKfVJUY6RraVWnkeqmTvCuTFJP",
  "key6": "61KLm5JnZa5hL4zNGejQVProToUyxnThBhpfvGvS6oJvigmtDeFeAHofg2Jy67J4W4z3YdyGpt1BtcbGQgkvKiJV",
  "key7": "aX67eG516HN9H1TTtxZ9sY4uddRUUFQaazxttRx4pgcuDH4V5Z37MqRTbtMGL3DyxNARFrzz4U8KKDfPgRZzsWG",
  "key8": "44DE1TWMgLKUBnQeru4FRNMSBgNegRifKHX4FBYPBRtdXvMLoLETHNZUBJDokiZk81DUDsjuHQyrzV9MhCCs9QcB",
  "key9": "ZNErYcHyEPwFJ2nHE7xKzfEKAFgYeo8Dxi2LMwj4vb8mxa1GaeHXqanU3GHicrbm7xXd5u3a9kS8JDB8gFwqYkK",
  "key10": "3hGpicVULRZuHFoJP4epjnoQvcxG9iM64e7gWHR6CGhQES4y4ZgkYVDBFmDU5CQCDZDccWQ8mgys2UG4wxXjQeHE",
  "key11": "2iuttbKxtCSL2wcohdwUSkCJrgTwjPGqHCz8hmZEpULTpx7CyVgnPZ5RTkcr5ttwK3rZrBwoazMtezvtzJYthUU9",
  "key12": "2PqYKGxvkKNUeHXoXi4NZBAkt2BGPBPzf91fKP1PVn4TZbdH5unPRyN9wMAFSRNDCUQvxfTQYFYuJLLJX9Po893d",
  "key13": "4rB5TQHm4NzsSgg6DWhwAziSbZwDRTjEUuuHPba95mhsdSZVBk7BXwEzJp46ijaUtiuF7vs5w1CMLmotvxGA62H7",
  "key14": "UuxAXdH2XXb1Kn437ZfNNfv38Fgh1epAsgoaRLzUTZi5xU41JNRC2jktrKpiJ8o8CQDkkdkc5nzyr3QFhaM9qxf",
  "key15": "2xm2griLeGnMqhDHXhKJffRM5LrNeYVEzZQvpJKuVXUYfBuXPAq3YPzt3TF3Vdwww4ooewRb6SWDh8pCigJeZZoU",
  "key16": "4ySbbwvyKu7eKQHZrVXKfYdpztoDg54mApMcGbrS9jxuVXP5fdF3272mLbHUS2UK6RfA8Vs2j4WWmd9SPaiy2oRt",
  "key17": "5CruMULgwYgzWgaDwZ7BfaDSxNLHhh4vFb6UpVaJa7SKZ3wa2d8sCPLt6xxbx2wXeWUFU7HtReJR4NKLXUp9Nhvh",
  "key18": "5yNE4xBLFSp2AgdBLx5fMFcw7S4Sud6v1RetVG7Fu9XirruKYC9qY5GAadmGSk1puo4JPc42LiPnqFSmVu8MrggE",
  "key19": "39eiaZ1PfyWfrWnkGBrLsxRViH87BfiSU5R85XQLWx7xzMWy6RyDongegpDMFuaeW9EcaNGoWrjheNR8tuUddDxh",
  "key20": "5UYaLfioVfEd57VCRNGqrZFj9WbFM3uTcET1iE6p6ktHQspDtgFZve3q1GncuGk9oQBAvEUa2QyMWvyG86TNb1ax",
  "key21": "3hpPYnL4fNU7qhaTseYKZeoF4QGbosKCAsQRkSjbdnRpPnWUR8bMphqEeNGf9aEbet2fBvDLDTxvMAv8kkxy24vx",
  "key22": "4A5WAX59rsBZpYvrkdysxY48VN1xLy2rNVJ4DSBqXkCQKMbc7Xe8YJruHC7N6PeFNhQkaB54XPtjhTmybzYVLscq",
  "key23": "4Fx1ZD22BnhqgwjD2eGYNazA3c74kvokKTUrZE7K7MoooRb4BibXZjKj8xaMSdxwVrQTjp8ih76dRLtduWeARCvo",
  "key24": "m7qdgJKqV6HNsNTfhgUK4Au5KYyedVvkVh7xLcWBr4LajDRX5yMH3SPaN7CgS5rRPfYdPWSX5LTPKvXEVuFsB6b",
  "key25": "5exe7e9yb8mHq6PMddW54xL2zXicDX4q2CddHvS9YdPDxU23g27p8yvbSj8aSrq9L3zQiJkVfJsax99bgHk6qoba",
  "key26": "3fPxoHeWB9LBxP5rYNEdzvDFMz8KoQPv29AP4mG9p45pZqbKx5axy7NN42H6m1GyHcSjiWPz9GDX61jonViaS3cZ"
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
