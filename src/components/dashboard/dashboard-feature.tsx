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
    "2qsMrs1CedZk1S95qqgYY9gHWJtdyZescYZZHypjUd8M2qxCL85eNfJ54Njd1qatwHC5S9xTzsfqTsjnaqp9EnJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTFVqNc9P8iMFpvkYXssN82Wm7hjiiFCHyLndZjcQExwG1Dmhn7fBm6zxiRhfq89abkG6GGNV7PKbHbFwwqZQDG",
  "key1": "2e5xKqu9DHjvW58zVP21Lo7zqJbLPuWDnxxq35kAtt3Rt7Pnvdm4o6UfTXwrFG3vxQeTTLfBmvWzaNEXjWR1wYAR",
  "key2": "4FmgybnFpDCK1mEhhjDrPkvwQUEbadgs7SZ9asH1WAfW1GfjqZ8ce5xit3dmJN9i4ryQkUpdBDjFNV1wdMETCPio",
  "key3": "4sGVq6xMhmUBG71ijUhfDEtZxdKPg9y6hDMPfeFYLqCjQSxe31FvgeXxHKpbxaDFQmqFF2cWpUxjCm8icePtV3ib",
  "key4": "5w1SxWByNk8qZU59hZnmpwr4FGezyJ9netNuUMY3D8W1nae5R3ZvALEzfGAQV1sjX2TpK54vhTr4haKjfBNWR24V",
  "key5": "3LFy9pQXScSjbSbMCkCPGc9BsDw6XJ9BkxdBdhrDN43bAh4cE2cwKGL8rAi3we2C7rDn8ZwCLmkUfUjUAUCji448",
  "key6": "26TiAE2nPbnjyGADzvubW3wExEsYYEpoV4X1nJGd7bH6FRJzizs9mRbrr8a2Rzetq5tJiBVhFx8nY4sVDcUVdFrD",
  "key7": "5KQbzDD9Y7Nrpqd6RmvR3cmp3XfNBiKCdyK95mJTnmPAuHweBbikrFFgXTKQwmDviFk1Zfk7wRvBckkxeoXFBPwp",
  "key8": "3YHW7VKuToZdo5meKkUm4w21JRVU4jnPzKNWFyTf511q46wd32XbiFMhnAdo7KBYXpmEoFvoDfED9SoWH7y5jNS2",
  "key9": "2fQafxx8xaCC6A5zJ121Tr7z3oFrxxCbDb7akNoHRiRk5fAKzwLya8LkWhvXHzrhsjrqyc7ncujsQPPupa5FVB9s",
  "key10": "4aqHgD3HSt2UWXoVb3Z669coZGNyiGXpP4WHVk9UJmUgXKAq3bxX9Rn77DVGPYogoD8Nz65K5XZRfiinrWyusLmA",
  "key11": "2aMehRjTA4siAtytmzqXzb7vxAUPqVHqCNyJagLPdFJyqStbH9ttMF6HC7eKfYAvUAnz8Ad3TqrvmFhaLdRNEFn9",
  "key12": "5Aq8qLyx81kx4aNzPoSKPvRBpznapt15w1rs9i5wgSqLuLY6GqeRbCsqFe9LFaRR8n8nbH1Exv5Jfa1xoHU1iWPZ",
  "key13": "5pyvRp3Axt961qZ469BNxK8p63gTDw2Wb77ofLKUcbKVXTqaiUJX1GPoenM9Q8rAQWTe8Nnh18mQGn7287N5ujpW",
  "key14": "4i81v59bRcRABQjReX185uFA48Xn79vAeDPMRhor6KWn5N9YqACobBvUdpjYpKpaw4246HX1gppeWw7FJCtJj4D3",
  "key15": "2fFf89v9taGcHngipRDNYtnX8ioqQGNVu6UjM7iS5vLe4KoWWT36iZLeZULRbubMvpECwrDbCkV5v6pkAhxsQTGP",
  "key16": "3LoczAGrJScjmoUoEVNsazmhFqrH7ueiHiGAz8G9MguqtFwNMTGVxftu9mrbkFcHCX1sGsTwzk5AZqs5UiFCZ74C",
  "key17": "2wES4fEN9hgXmKKwNZPsF9DfWeYxpMM43FT4SY6descXctH1hxEybbXLLxmeAk88E1EAwrb99rZkcB9WUqeohv41",
  "key18": "3CQ4Ke7qedZJcamLeTXHYPnEPX42DGm5SXopa1pYkY9ejhroPjsPQP4w2qx6GkiHZyBnVvAbv3XstXNH8RzYA854",
  "key19": "5wqqdAUtWkDUzdFdffjwHUbd5GBfyzA6hcBh6E58szFv5BUjhpVAqcthvD6sGH6HRdV3AS5NX6YsYJxHxa5FtkGy",
  "key20": "4ed9PPWCW41zLFUH5rVnVZduhxWsYchEwEfzZVJbjrAeHsxwAtkJTVstL7RXdJguAM1GSeMXcZYYYeE6wMNAyvZf",
  "key21": "hzTXj8kktEN6tsvfHHEQVZ7jmz2eaxz7aESkozKvMJbGG728GvQq3Ysw32T2EzCYYBUtExgoDvWw6yxGdp4rKm2",
  "key22": "5466TBwmnwBM6YKMFwViZCiVJG1qgQfyJsbWBsvWz7jJ6dogRvDMgyhdDUw1mLYyV7U7FfxUwvJhBZyBfeMjdi6x",
  "key23": "23czVw5pCFijqxY2sDQYeoBRGfZyoWWiV8oMed7eAm1Wv8yr3i4cX2rUXjq8R1mmSYVTbFNDWaSo6qydo7VufScW",
  "key24": "4BK4KYVebDuxZAoreNPaFdwfdrDze3U2vM86ZvtNx3ZRtCzjUgPtWo9z9ZM1WURshcix2EsiDzvgUFXQgYjopb4n",
  "key25": "2wwFpAk9DLwTK3mGBnzkzXy7SeybCGJYehL2G29hAw68zEAJnBakLvALUfq5nJVR1TXwH4joaWmAX9w4rz78PvLJ",
  "key26": "3nWQjJBGbrJ9pNWK49nBon6EZK7AtZnu2dVrr9pfzMVGsLuEKiKUPz7VSVJxs2vPkq5NtMzkwDfdNJc162pbe8dQ",
  "key27": "4KcmwEx67BR7HK5C5f8RwNTLrm2mqaJ7K1kh4hS6UroZNsjfmAVNpvAQe2aZw8XEC23C2E6kVb4NmE6BcJzC5eg2",
  "key28": "8nmpQwLb7zyQDjvDFr9eNMcjQUZTYQ7tMZWBt9efH3GwCbdoimLMwvoKtfGnf5zBABxq2pqVdrzaiGkV2EoNF9U",
  "key29": "2Cm2xV5Cyt7CTUrL76YvmsoZTDch4jnYeMo12hDMZw6hv85tiL4QPfuxAVpvc3dcucGpAEAY7P43z5ieR7BY7jRk",
  "key30": "47v9enTV4axzsH5wxJpxnbxVzX9E66zzKiNQ2izxXbKueaKPKLKc8HmgL6Vyv4wzNxyEMRa7VAfsSQo2Tw26HbNB",
  "key31": "3zbxyMaoozDtza5p5fKEM6K5zxup3kUmhUNyPRjH1FaJTs3PATYtPSGrxN4JRJ9cQxCkFbieEbiYgCKxADUhFaY",
  "key32": "3aVYnEAPEt1hdbEnsTTBSfaP2mdDsa16kHLewP16SzKJe6n45zrB3FZ3RPMvkYW3J8BYSdHndkjoCwxCYckATyDu",
  "key33": "64VLQcKCBnsVNfmTw74hiQYwgHWQHpXTfRDUB2NMqqYjtLKhNw4n8dzJtoeyF87U3fHML8zR6shAzVtVzB9dtazU",
  "key34": "4s3S3hLSuWuQdV8ev7EMga4nchhRonArXd93jzzYqJjKq3wDSrfGBUj25QEPPnVdjwaeEbywS1sH1zj4EjGJ7A8G",
  "key35": "2psRK7SMp95GGux8azdF3CTKXcmbCqXw2MA1KjkyMkBbZ8sqiPMdvxzcyfiX8nUKQLwQ2t11rUjGsvRDdYpvVYnM",
  "key36": "3TJJqvB6irUgQB5ApE5PQFtdmFq4tb12sZiT21VTm9mJc1C46RznvJqyVW2MgxMWtF29FCg1ponZfNZEWccBKBGr"
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
