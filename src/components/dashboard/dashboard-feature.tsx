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
    "5UVpDUKEJZ1bHSuckvd4Dfu5KtY2cSg18HfGnsWFXG6Dp1v1DBmRDu7DAL9jetwB6WLAYCnxzWDqfGEq6q84ymdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kuqH2gB3Ghr3gLrVdEJJW1E79PLA3Lsy1C6BPnRJ7fmAHxTi5L7GRbiWJKoBK4XYvqdMH5WyjQXvAhQCbLwrCHd",
  "key1": "4Guu62LvtJNPxQ1mfEKBV54rysvtfUdbog8JbBSPwBRSLZazKdxMcUrstFDf8Zcd7b1YAPX3JkrBeUe1f6rLhSE4",
  "key2": "4qGmSVzf8A8oKpfQhoMS6oYRG4dPjSjoDxX1bvCLMNabjoFyXvFvYBnUgvH9KU2tyQmE8bQNSav4isBMfc4JJbvG",
  "key3": "2wuE4dDkCpdSRU6ZtoxTXsAcKZWpLceC1rGr6X7kR4gtpg5HXkmCjGthNc84qEGfta4WHXVDGTyPLigtoJqcVWhK",
  "key4": "4GaY49h6DJVcE73Kg899BnFP3qMvxwNnKYr8eD5PXwCpz8cBKm1EWAKT9jS5qsU4cnfDS3swPwnt4CUoSJLvGBH6",
  "key5": "baiPjGV2t7t5eq3DnaqzjFzhKb81EdY9x7UghwubgvRwenjXZ4QsS8vJLxfkq6NzfrzRH2neJ4e4dutsZMtucx2",
  "key6": "mdBuncSZHCNaHFE5iHSYmKCu6j6jqqggHDw6pMYt1wBDV1CQ9mZmReyEWtemvJdxuNcLJxCLTb2V8hyPfMqXWtJ",
  "key7": "TtahD3hFcRe7nCh4KXjjUtbTSEMcgLD3ENnpqMU6xQ4hRq6NA9VGKnzWRCJmDrRxhRbWddqwpMNF26e6ye6Zz7V",
  "key8": "3eZ1GVim5kUcvJiTj4C1VD3PAnv4a7HMELxyg366xPzKqnA3W4EiVi2kBNGXk39tbAPHsSdqxqAfw5QrJ9FrpkGC",
  "key9": "5YpsgFrS5NcbYbovPVV2MNom5cbsnfayLLi2sx5Ca8bgK8Cscob7egq25uhMitnXFurvBfXHEmNovpHtGNSn8zyz",
  "key10": "2g1puDWaUgAJJMzuJnAk67W4jjYiGAWji8PWreT6N88tkZzPKvnkwnjeLhX5Uyi6rxQQ3jjQCNR7jZP5rztf92ik",
  "key11": "4NdxGAygjKubGCsKCKDTEmue8WmaWinmH7xjcCy9CnhcpdfEXYMudGzAPtQSqZmstz5FZZn8bzsF4WPcSvU8wfUF",
  "key12": "2Evv8pqB2oL4gPnD5EA37qEGerQ8wjef7QsQcmZWA2UNbqdHAMuRPPwHzyqXFRJSoDQEqrTyxrZsAbftmYyveRmd",
  "key13": "3TzbXuZphHgqksgimKFPyvngJgKd2ZmqRUo4rXkrdMAdoAvK5D3EJxAag4qrjXWNjz5ncWPZHLUmFcKFksxqyxjT",
  "key14": "5NUkuoX163YpnaikVTLqu4S8zmVQXtFvASz8NXm7cMjYhmvNSXPgRcU2n7dFivVLwyrwk8MAiZXHQeTGU37Z4CeA",
  "key15": "RpQLqQNMAriL89nzuTwhXDfxn6TdhEgaCLjy9hnSayeSJLaP1NR1R8yvYBPnCjkD1GMxKqBocXUZb1xc8xJNCY6",
  "key16": "yuQT1Rh165fCxmth1rm4Cy4MZeJnBhEnirz4xzBhFh2YpkKD5HCAB3qyeN36Hsiqa9UDCnAqveZ5o7uVex89D3q",
  "key17": "2Do9YvWNwtQkr7fW8YQgeYgnVm2xfUBMsF7mxA9ruk6zUWHuyjLdBzLm7qeSBAL8p7CL9ghZg8wnbXtB7p3TUQkE",
  "key18": "5twGixtzYdTmNvdocnXECCysU8RST5tyGsrjvLUNtL4zFmgxZnVQcMT8GETtkCbAXSrjZUMw9Vzqt8aAjokwJuTq",
  "key19": "2sph2wuFUg6UvUZQ2dnL3b4MdKvsYwvRqdtxqfwUcaymUisvquX4wkysNb9uaMCVh3PhKQJ3Yht6NZKaYCJQFNi1",
  "key20": "5yZdtUZ4KU1xJLfDjA2D4QUe7PFRSXjRepWFQ8deKn4EaP4PYKQkuXbLg38VdFBPpcdW8JpJ4YxqzYTvMF2H17qx",
  "key21": "4uwcq1k9176qbvgtT1wRHpXu13jwiexACSUA7Cj5SUTV4qaicV5yv9EUbY9pkDwQyBCnmzWcixeE8YbJZrSRfV8i",
  "key22": "3Qa9huXY1iguviprZMKdGEhXxg5j6c2e8wkkjpBHESF1RAVheLobSQuL9JhD4EibUwb5ku1zGzPBWZ6J3f5G2zBf",
  "key23": "4B8RJrhxy1Y3J4TqESReoY6PK5rjY8uTJ44kUgD4TXAkCqFTBLm6wLzbE2qtasMLjktuyURgspbex5B2k3QmwQHa",
  "key24": "5Caaxj9HsNDL22DtduvXfJ9arXeQhR2mCkn63neSe1NhHUMpkgRhvt2hgKYHZqh8CDS9idF8YLhJ22of8JvMUqgu",
  "key25": "MPgjEnj2Zm31hLtFtXMMAM8EsHs7WpivCwjaww6dkwtkU1ANXdMWjx6awBqqT2mZSdc8ApYxAbw1eGS4tckmuyr",
  "key26": "xetS7pr1s3ANRvNy4ofpvA21nQuht5H5rhNcbLY59BHXY4o7Whr3KKNkB8CkTDK9HYadtp3Z5Jk4VauEL8Z1YLt",
  "key27": "3zrG6X24iY1xaNDmpa1cxFau3eRVj437K62RFATeQ9U8X9mPf6Bq18e2rRs1RdyDpg3fjBWMorH25hSNC7rruHhs",
  "key28": "sxWtXcmfkJ5GGRKe3vYM6d55um9t75TZtj4enV1uae3PYQsw8kVRYfVEGXjmUCHmEhfMdsprZLVaXA9ihPu7HUv",
  "key29": "DwGi1Nzsk6x3kTDPwxxT5UigbKhJiH2BHTqrMQcgTYtdS647YRd9RHLwPQdw8g9gvLfm7qgUD6vES7i3igeVhsG",
  "key30": "2F4rhjUHPN5b9emQgKn1A4SMRnCDUuVKbeb1KfKgxkChmtVDdFFs4Ru7uDrUQ5g8K969pbBoQCTD7MRVJg1gTYxB",
  "key31": "i4vVrPXXyWHNdi6vMKpur24k3iCkGQUYgM31iW8wdY46eQZ2fyfcBRga8aMTf7Ut8SymtbXiM8vpeUr7YYaPRjM",
  "key32": "5osgC5ZEPDESFe7KnaZyB6TFd9BBG5pWiQk7SU3ukzcpqHYjAkDQPijXEc9pkzh73gGYMViMPrKFVkJYtPnfs8Fz",
  "key33": "2dr5c4E2F7EERXRUapnsmoZFUXETUcSnFMRtPdRXgRQMKvsWPhZFxE28djwKA2L7WuxctV4jvQz7at6aiicKLnHf"
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
