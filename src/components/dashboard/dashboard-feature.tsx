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
    "atpLUKQ3mb8zGLGH8cggskbLaE55aLr8hkursN8NF45DaUHESSzBjjxnoEY2ayKxsz48dQSUyiriJWdbp9iZAG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqwJKgz6sVwaoFK3GPnKJiSE3zDeB6Ud1StaRTMjVeFGjVhuGbTH1S9x96U4xKGpuMC6Xj2EQtwqG1oR4zeZVp1",
  "key1": "5YVkY4NuPXDtC25yc2LJfCVYqTG7vq1hfV4Ff6b8Dw4WUP3fgABk4X6WR1pZpNZsoe4KkEuh93edg8jYtd2o5FSc",
  "key2": "4pPUYq7qZCFn2AHaeyeweYb1kX7sJFrkU6SvQXiPFdveDw9gYFs3zV4uqnASKSuVVfC9qymRwokPsPNbUeQmpKV2",
  "key3": "2Q5mtUM3wrtuBtfF533pwKPkNgrpfrgf2Zzty6we3E7BSi6UWjFuCTNgJSoRNdeqSp8vMgDRjZpmfx3jeRYxRFCr",
  "key4": "2boTF95ge3cKytz5jn5kpAQJEe4RTeTohFTBqbQ3Xqd52ZnAyv1YxbEuHxRb9W1RTn19HtSEVsBJxhFutq113qUM",
  "key5": "4qtNPcFpvsiTpLEh9Ja9GQ8aPudUMeXpYcdXyh933AzoDq5WpK6wfibtQsdxXcPsmjBhSbAnhfa99y2Gg4ZeFreS",
  "key6": "o4gdsPTrFBHsRCpT54pg13XqqssS93UUf2nLRgED1RgaBvSKhqNC8on9LNTmTWwVvfo1T6XTPUX9BkKRynjMdvV",
  "key7": "2epiDfnL4g2Gt4pxtoAZBnBn75ohFhgjUb8qBGcV3NQndsNTeMBNDzBJq4QMmQnoqSUz2UNCabBboDDaQps7kapB",
  "key8": "52Xx3c3ezXAE64gBLxymqaNopmvtxAaDwNhyucmTCGGh8nJ6bVLJmgHUUSRzegpEeuY21CL6ttq11cypB6pqoKGt",
  "key9": "4yrqUiWjNaA7bSJNKYeuuDTzPv4gbwF6Y5uVKTvq9FMVQ79F2fzSxhsTcFkNHydcNPdiDC7WyZbb8hHjaRGTfSch",
  "key10": "2TWEj3BJz6SGQNz5py8AV1gQxkZECqwctRTqHvwMPm7zxpJMtebUzean8XpQz4ke5xZhXGsbEkoVLWtkkHXbSj4",
  "key11": "4KEjCKRCyYLPEfQY9aPBHYaD9NDY3MvBZTNigrVdCZodJQZ7Sxy9D7jfbLNJVVkowfLt978KfPFNmYfCVguFmkMJ",
  "key12": "5UU134Fth1JuM7vyjzdFweXmieNKNeiAGZHdono47z6z4NsFh4DBTXbUJBiSp51ZkgXXfy6gsxogScer3QM7sPKp",
  "key13": "5cBks8JUn2yeZv2oi6dY1GoDgs949cuTrYqwZgudbADPi4Togd41kGuDX2WBvpxZECrvdRNPvpAnLj4ZDimMzonJ",
  "key14": "3SdvFuTikXSmdNaLrHrCMyFk9RxGTHceKPycUB2uhRv2DMYn3Tko1vTptJQMRrHzGtKkJXg5KCWrr59YqdUX4ivK",
  "key15": "RL2Wg2pDZTiYjWPPtyPcyAe8VMmJeF4qepSSWj1e1t24irAzFtiMAiWU2Rz4yNyQMC3fV7KQwunbouNXzMRQSZw",
  "key16": "5yFDxv6LmHFvQBxmEbkdDTHmbd7YFKXxEGosurXA5ntpvmTedJLRWoUsywNdgkMHRdATXc866P4bkXhZqPr9uhcw",
  "key17": "3x4PBMYbgXhnswEzW6J2b69Gav5rtN7UEpdkgN9xxea7pSsWnrNDNJJEkCiLMnFN8ekK4v68QYSDsqHejt3UxXnZ",
  "key18": "2U54dxMmr6dp8Hhofjqoj99GJFyXL5mkMkXCNj9kFGaaAhwAQdAzWZphy6Wk3r9H3SpmRCrBwgFqRk3uNSYC8fxf",
  "key19": "2zX1GmKR7kCPFKg6viT1rWVB41yT4RjmAV93xLYrBNGRdthbNtLFBZb4bQpqoW6bjHF2JSWJGB18UNRXPzFk3UdW",
  "key20": "ygSETvn1Jg9pkUDtsDUPy3UhkZZUHho73Qg414hqXVY91CXX4eMz2CFmE4zsonYipwAX2zuRVhwNTzEg5b21DE6",
  "key21": "CJPReiYXf1E1XnDBFnbQdmeGpMFqcnAPKwuLtU8mnZJfHrdY1Rwi557owyCf16n5UHXtkfE1bkbtZJ91Dir6Bpt",
  "key22": "5zH1j4yHugeeWCvuaKm5UN6PWQU1qAbrhDMikGaG693B4pUSAqjSGG9BZzeGJE8T1gwW4iLd4NyG8kmqArS2sBVf",
  "key23": "4xkPRagAjsHrXMKiWtbi7NZYdzJB2HPXApHeCqSLxStGouzaHsST8Us2Z1wPVFtMiHvvBFVb5hCeeWPvArMNN6XW",
  "key24": "4ye4hMeYJghyPCwntakZYwfn1yhyMAWnKMvSK85mayzJsxJ56Q5PjGqxEk9TBYsakb7J6mLRxnvsSwbcy67iCt6"
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
