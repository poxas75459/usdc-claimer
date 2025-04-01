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
    "63pTaZZhNu4NMYC2qDjugjxsyYzoNu9qUvYZSEkM6xjV3VFPHhpmoSfWMo14c2MVFUPCrUg1BcaauYwfn1Jo5FFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUKNS8iU81zYGhez9YdTwMddpi9MwTW6dPd8jJHnZRnn1rfGzh4YQkQjddfryaGXq5ZXd7yJnmadjCS8599hQFb",
  "key1": "2dbRsaphsbCSw6Qt5Di3qYp8UWoeAJ3WwuFkqoCW95Jhtzx3HXbzXWXis7HkmrdR9ifWQuGnSVSP6KAx3TWgtTj5",
  "key2": "5vK6Mzu8cYEhgRU47xg12xGWE4Y2erSY7jBJwmdksJxa4BKvE6sc26U7yxCjQCmYA1xUyHgsUK6Zi39fbwzN2fFS",
  "key3": "RRFhnhkaQjZ6BrFmLetR6YpQFBW8btFBLRMkBjDjuaLqCXHF9phXQkyWpx3sMRFyXwgFQNqs5aMMmxGmGcLi4Ld",
  "key4": "5zm9nHmSFE2XE6PJDnuZhZVH9UTVsjBFdoq7S4YHeqkpEiyiRba1RCV5hZGvW71Udy7fL2yYVDF26z2ziaxKX9tK",
  "key5": "5fHEgt8j6Ggn3SNQkdxQZrdWLdWva4ntMisD8mMAPs6tERgDdMmoGdRCmj9zDFqmnFsmnqzNoM9q1yQGkZBpz1G2",
  "key6": "32ZDPaMLx2FWxSUTjDWQ8rsYix7vuGdq8GS4rFug19L2fZdkd4sypbwpimhq7a4oFyV4FbZ3pTe4FhYAmJzaXKZX",
  "key7": "2mXE7TvwBBBuFevrVxWhtKSL9nCqbDYvcuZoxTfwchwoJcv4shVcqkT19j5zd2CLnoQoYtYmRv1Ggj8B1Fuz1eSH",
  "key8": "4RuwpxfQSGAMg1xn3krZBAaXfXYttzfG9v1fbRKD74mrTNU6GTGDZktTU9v2fKXyNdNmKq8hJPbpRw2gisgtGkuX",
  "key9": "3rVDCvMbc8Ut4PrTPRCnM97DoUWZkEUWkvtX5Jxg4athss6GnRFtaRFGuccxxmCPwFfjN7bspXQTTf95r5MVyxhf",
  "key10": "YAcTA3mzx2rCHtxzJ1AdqFQQdyfM1AUvPk4zhEUU8SQJ4S5Ev9r17jaBYp1ochVcqRuhjQ5ty7N3mE6WihmHq4A",
  "key11": "4MXsekoxzYzKyLChQUMigm8AtTykAKST9HA3C8oUkkfAtuRQsTsz19rmBJ4kpPeuU6W1Pc6csgoSHbDncPsRuwhm",
  "key12": "5YApaUB5BBGLmMKethBFqWZCbgzFmT34cPzUPoPVrS5NVq3NpP4dSyWEUG57aS4nzZYfZACnfFEZV69zVo1H9Yr9",
  "key13": "5MWPnM3tW9n86CqTBA9jVNwKSbdkeNgcDSuYUgVYZX9aSN5vTHkJycfN1vtQ55MHXKKBTWrmwMzoGyqrNSmcyzCG",
  "key14": "4HwN6e9CScSH7zKzZUUPwrbCckTxFs1ouJuAK93M5NnAYaZARYjhD497uAGBbp3RuGZd4FvCJvGRyc5sNY5fkGGa",
  "key15": "5P7qLiJ1mkta32sAmNsoPRwhLFsAa17qeau8vCG8J8jzPhy7vbtnrG67heGgw8Q1y4e4iGhgykqSBbhGuhdC5UWa",
  "key16": "498L6A2cbLJGKfDbifEHsNCknUd6wGUVBM9i515mJTgvRPfMS3wTakGJAzSZTyVSdFau4RV99XjeSriwwYHuxMRh",
  "key17": "4rv29UVMZAa54yGs4sFgbBsVxq2yqpKoxQimcFFdmkuq5JuedWiXHdRCECq14Ur44SZroyUUU3ZvK2TioxqzBn6T",
  "key18": "5qeT5P3hZzuMav725rMe8V4eY681KG2eMsqzFzuCRm95udPVHAZBBvFNrh8FeJueS1T5mtdZXqnXw9c4i8QYJ7Vg",
  "key19": "2v2KMRuDLEHoWDS9rRhSybpxjQ7SubYRSqQZ53sGhTKKwCGrGZGbJKRjUu5os6QXmcDbMzqoDCDxTKBJ6tFdpxHf",
  "key20": "4FnyFKj5zs7YkgZ1GAY2ag3DRL8StXjReqTnzaoAXvSbSqg647wu1bpNNu8ka5dJxSi8w7ezZ5Bc6HKupiW2X3h4",
  "key21": "5g683mZWRtAL2GCV982tXcULvUHtaA6nQ7JoqDLGs4e3d25Lsr4NmzDEMMYRXDtRKxziRuQuAqmivsR9SAsR5LMx",
  "key22": "25kva6LUWk5ioUp3kt1U4yiVfEZQJrX6z9kVwEarm7HR3oMBc8eEqoDebC3WjiqxfQb2m9NAXDUY8GATzCZiJCsQ",
  "key23": "2y33Ras8r34fZUfRRBJ84Veq4TnZAzadzdXuuDUhdB6CHKGy1hUTMVSypoj8PSNS7qwFZ1L3beQS8k9Eqs2SKcHP",
  "key24": "4Z4tWpQyUvzAiJhZE9TbEWTVjUYMta5ow51zwhP1rD2mR5eQE97Rgf5jBMHgFbxQjrVKJrKMCiwpbWVgdSyeJozp",
  "key25": "5guG4BJJnYNAz6V78LNhcL2uxLWb8pMJgsHQqQXtvwKA2No9XtxqHr2z89HaXzVztFB5FV8ayyvxEcAJ6qt3ti3K",
  "key26": "5zdmomMT7kkygRW7h7Ee3e9LC9irtAmvBLkKSgBED7qXMKEufeRTtx6HrL8FpgJJ8fHZzEC3ZtkHD6jxAW3SpiUX",
  "key27": "5qpYN3tCZ2enC9yont76z2jx8beKwh76Ga3cqB5zxDcXATtf5cnpiUtf5juXfNu4rc8FbGsKqpJhVNrY3MUxEPXz",
  "key28": "4D91kAVHYs8ZBcs2T6fZbF516sEfsrMtXd4hVmDn1szqJvgMVQFyHT5CkpXg1xYrWERsvmf77LQRkkvui1Ne4Ruh",
  "key29": "48YwzXM3e1VAdgx1NgvZgvgSCQsttuU45LdhctC6ZUWAxmwx4H4ELe8sErZbiD49UvhyNcXpVePQg3ebufyyUbdn",
  "key30": "22WVqryMmTMDbKqtSFENEafub79Te3funSL66UpDT2SKAkJpTvaokEzVkjfG3HyrUiLTRuE3FBMKHK6pTZdjkvxN"
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
