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
    "NWziDkJLvftadtAzzzNsx6ksoTdtMUtjMctHDwdBWqVNoRyXaboKRmDmWqNh892mtx6XcSraKb4xCSjZu6evyF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XrrDRZQorDouiRtEERZpbpyid1zXUhdjF9x4S5hQ9Ma9zyWbkrFZRjHnid3EfUXh6nhpTYQaogj5wHBG8spc5ec",
  "key1": "28m3VBPj69TXJCEq7947VmxCZatRQiTX9TracUxGjmW3mei39rLbV21WtEEW2tZuhwKxH8H7STzyprKo1V1zELXz",
  "key2": "TQ22i1QVvkXqy8pBgiXUmx8cYp46bj9Y5RpA7pRZomUN1yM21H7GbVK4Auo8gv63G7S3997VM863cXKHEoabNZp",
  "key3": "RYhuNU6Gm5k8LssK4aCBYwxMgwcyG7DRhgUy5o1rf8PtqP5E9KyPVU8YaEH5EVSMpvJAieZpjGTEXmw4gQj98A1",
  "key4": "4kHqeGH1m3dJjbqhPqum1ckLBtnLXzCPjgUkEWWEPZHHQ3RhzW5tZWpAHiBNLvStYk7CX7vyjSai1EPTWtGCHFig",
  "key5": "53GynKhNoCnfJSwJuowZk2mnkeeTEtGCcbgr7BriTXpCqcQRK7DxWnYDxVH8mtqgJf3rFJNJDR9J8KGAEpqgWtm6",
  "key6": "392dTKYxqEb6Bk2NtqTRe1NNL5RY4nwHAb4DcHbmRvNUVso6a3KJD3n6QvxVzEhccQHgEiGNWNsM7noMLAzVMC47",
  "key7": "2zjymAcjwuXtH7RxotWQvzGwp662yZMaG9tQtU73hLo5dBqKB3E6sEwfikVAuceQeyMmSWjYZpGGswPxu8exQTYt",
  "key8": "3wDYNfCwJjUt14YgSzGyq482FGvJu4nT3Te9MRt69MqYnj6zC9Cz25WLkpWVFqHQPmibsS6Q6TNXgeiFkwfnUQSp",
  "key9": "3FdryBEz5NrNfwCNveDR6LW6sE7iHCCQVzLASwMrZ2b9968CgDyRVZgspDbN2V9XiPisuoVebYxB1CJVqDbi1zJZ",
  "key10": "5L9NsN8SDvE5D3Jx3uRCVCjzWDwUp11SiRxufiiwNJ58q3kVMN1tBTsV31BN74kqDhZHbAFefg27j1L42KNDFzqi",
  "key11": "2k1RjDacfrLhfeCFrgwpx2R9896F4gtgmKiGYKKYzTHLX41xA4LPtv5SaXax35JDwFSEBtieSE7vQ32zQgngroFR",
  "key12": "RjvDCfvx7hbK5o2YPFKeSu8Kc5nZzhW9aNSSjNoTFUSRQx1zLZSr5HuQ21QaY5oQcEjuCCRcyL3R287DzjmzEix",
  "key13": "PuqPZ3ve5dM3ucdQ1EfNPirKsPkRry3RhaMs2ADJNFLimArX1rN9T2vvuYgsYqq5c35cK3kmsB3t8oAHFvCFihn",
  "key14": "3mecokcRYmAdeRhFHGyYZLeehoi3pD8PyG2ekANhUnkLaKfQGbkeqo1suAi7NCz3m1tu4r6eyPdKCQPKRWngN4jJ",
  "key15": "2CnsQMMBWiHpFpnwwGQVpKjxTq8nXncRJuSw4XBncdic4FMcX9F5MrgnLVqMSuchigiEiUhAjesV4QrA2gic4N8L",
  "key16": "5zzmu1kW2rP6MwjWWp4pQefa1T1yYBRehuAvAx6xtbqYsH4nrya98XQ4LHnkFFx5DaAegufZG53hT4MvU16a3x97",
  "key17": "448GMc7Qu7Q7aUk62N2NVheeWJDuQSVhofZ7AxySwxrdfSuJaKxErFZ2ADRDKxNUiRx1idRRRoNcTkme2932zMn9",
  "key18": "29zqr8Yn2NxRphjXYnrCfzq74G9tLrGRQCVKLQUvH8ucGS6YaZCu5xBDUAGzJR8KVC98FNtcXA8KUDKjdpdbyzgL",
  "key19": "4r6WhpHvPahd5nqAT98wtUCNM5AKgXQ4WWAAnrBw9UEiobddGVwNhWcZaaNKDYmgyHNtGcTg28MGf1SX2VwL9tSJ",
  "key20": "4FM8qXgBT5mfNHG3WopTW8jrxLewJE61kpLvCGUJfU8cDv2pWusLPnfF3QG94DzT9Zh73Mkfj6QNnLTnBpHacoay",
  "key21": "3D4qkEgLHinucmF88TMidKHtsoavwNPkwCCbYHxoYKjSCToM8rt3Dt9AR6LG7h7BMSj2k9EJufb1fUW1dSBorhK4",
  "key22": "2Py7o4rb1ST48m6Da3ppAe5xkKLuShFuT6YBBRMTn5aHjMooY4hZy67Q5csUrPsTCzVGB7G1caS5sB7R7Uk4pTLe",
  "key23": "27SijRSD7M3vVWdVL8eDxvBME6Mvbhqq6WxhmES3caAY6ijFe1u8bNT3xQrAAnoNzqVJaVmxqevE6Jmy6NBvmpdm",
  "key24": "5CXGtXBuvE16yba8Sb21qugqYx3BVTSgLpeqno6ueTv5HDENgBmmUvvT2bhyWceH4BRkozuXPdZFGUcpcoVSo6gG",
  "key25": "3VRgXPsC2M1swKDp2ZDx21AsCWFvN3TK4wgNq9fKbNTnUNoonFGX4Uu3YDW62WFnp7qpTSbCqK5DdizcJzMyg1P5",
  "key26": "35cZLQKLqr6sXTaQFwHVc5xf2QpARf6CbCwiy8BA8NZ7MSxZ2JxCfJkLyKiAHyR7b62uS8YhLNpJpLWA6JiMYP14",
  "key27": "4g4muz9rPHTorQZ9vQQSsn6eEgyxooibfHTzBFP6ZdzB5oMJ6fxJFtF3W8yWRxUjmyiFTgAjBnhbJDSuy67W34sg"
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
