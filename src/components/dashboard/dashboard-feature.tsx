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
    "5VYQHDqPyiL4jjoqJSXZ6Wecp48QeWfhhQFskZBmKdq2nqDxyQUExzUvwaQiJHjYtuvbsn3n5eZGUCXE9Yy947aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTNNbBytwgiRVeqzCLW5WcRzGAYds2huT9ckUh4Yc6ogKz2NCYyDqaAXJrpLZReinpFLokLkn5ChvbnBhfWHLLr",
  "key1": "3fkrGry51GwGc2o1sE8UUM2vob8pRQtfBiou1gYirYC8rLwHJkcJGp6hXpv4niLkNcf7eNAnGPoe2sKR5qbdv8fb",
  "key2": "4j7CGqDDyK58X5ZdFSuqD38GMDcjwgocxww217owaNEaKcy4AMxcinJwBDyfAdm1bdiwCEbQPGv7SmrEEepPAp2K",
  "key3": "5UPgKQxc8XruaEwTQsBbmF5NavL8Q28tSy2rAhxeuy8m7Q6Zc9exYbve1wRrDFurduwiTChJCfLyxx8K7ykeUdmM",
  "key4": "4GsZa3SDWioo5kUr8qKzW1csB8tJxAcqYrgvixjxHuUT3V1iF1f7w9qwPaPuwbwx5DzvMV9jYsKpW1wddtyMGFZ1",
  "key5": "2kHTjJMoWaqvP1zPY1sTcuiw5eH9hirL2YejWZBHwDEExazV9acdvcaKNdYRGmyRZK13SiAA4hXJnkx7bFXLHjsP",
  "key6": "3C2vyb2Ef5AFDhADujzJ3UbU4GmgoFaiKr99EukBhjQunQwqTBPau5zGFteb6dbyLoqYrVXksergCS3JRRsRw9dA",
  "key7": "LtU4MAb1iSUCopkv4LxMdA2zjrE75kT62psQSd47HZu8SkfKkd6sq3MV54pDdey3vW71aqMKr3xxbD1HNmY12gd",
  "key8": "2hdpVqR8NuU7QEp4DDDEpaxp8ZBdYBoe8V8UfSFCEeVmAYvzkgpwyiFh2efedBiejGXECotSBjyKqQo4bKbBmHVU",
  "key9": "5FmNXuWXA5MkcnQprPbMYgNn2z8nBfhJHpsZoMs3gD2nwPYr4AbLiYreAbDdgVcqtX3BFgLHSCdqmWG7xEgqwHqV",
  "key10": "RMjUUkcyfhN8rBNYrnG7kFkNTLSW3duqzVFJ81BypW6xsqDT7SkwiJEWotfSJZgTEFWiZ5mH4bpuLkE5wevgFqm",
  "key11": "3o5udGkbaFW2uQYhKjZedKDjw4x32ETySHriz1rQa9NqSbi6CCcpyPvS5BohnQGt2xCHU7d287JT1dj3Tyub5wMX",
  "key12": "4ZxtMDLBKopVd3WF4WMYPv1TrWDyFQNC98GDE12tudC4yrURBRoXPHtnCB4s52ZAx6TzroyD3TJamJVYEUZjPPim",
  "key13": "2AgGfw3gpf9NrLtKnsKLtvETEYwhcNRFnjaKYFcbxnokghJnN8ZQYZ4V3XsN6DWqYihWHTo8zwERSvDTF9rh2oeM",
  "key14": "4XVH1Q45e7ygyhXHw5tZ3VVZidG9CTFcpvq5YUwWSASPn76vAgb9Z9NDzHjdvJoqBfTo9oLTVjB3Vhu6Ws9h6zQr",
  "key15": "62Ynqkfhz4WZzqC12qGhXTcXoYX8cfb2u1bkABxuPWS7h68UXZKpimnVQrRZ7GCXs31nwCNm3voMaCAxRLBvMA2x",
  "key16": "3mnr1uLaKUhKbBa8oVvgMUNLYhGU83gphcaeFG9SPvJRA7p5ctbrf8wr9GPiXifXyfzb9uiRaWaZjg2fnnzJVR3V",
  "key17": "1mrxYTd95kh7V3WiuNbmFNNuGnpkrc9F7xPQVcQsEfyazb21iQZtHbkLLbSbHzwoZw5biWrrE3b5NkQhzu1J8qW",
  "key18": "2We6gKBMvLaMHzPtmBCYqcBNo929CYbHWSh9mRTCei5iZ3TMtyXMxFBVgNaJ1sQYWVRdK9JhyQyxVRkUq4fkTNeF",
  "key19": "3rr8KGdF842ZHumquLpp1EUv36dzcwjfh4edjPY2yvioQgkNf7C81St5PXcpTouMGKBV6bdSADBSU5emjmhc9q9U",
  "key20": "42T4y1rU21kwMqAAoGW4kCWHTFFGjS8X3Esxh9SZA9bqgtQaLFEdxoL92pTYo67JT39yAxmwLGjtsBQ7bE9mSTAR",
  "key21": "dYVsyVFXkRUMQZyJpwCS7VWwiAVutx6mCd53bN1DFhmg8jsfayfZmb5Dj81XNQ5vYXbDxZHSicSyugw5qCADmhf",
  "key22": "28kj213zWiejXAr823wxVDDwfQkug4PVEArG1YbB2ho9JsouHUEmZfZ9hSnbZSpqtPhv1CmSBpS6aqsuKo4JeRUP",
  "key23": "J8X9b7XRYisBQpCoCZwGxdKpS1Du6L24xU9JyptG4jWpa3puewhF4FCB9E9ZicAZULuZsoHxyoFq7VvmoQhaSmY",
  "key24": "3K9H2kZ12gPVV7NRzKUBvboGKRWF5Ui4RwsdegZXpAd2TUvvGHCFRT91QfZuvP1FUDir2vArMVYXMGC9GuX7tCES",
  "key25": "SnSqhD1kzXi9fzyUpbeSgrEVygqiUqo2pMbAMNbiB1N7n1t64i8VQaAU5vU437Qe2WurefV92QXuLwi4ZC8JXfg",
  "key26": "2r54GFCpog81tvnSc2pcByUWpz3wzMpGcxxhATKDwXgJRNqZzgkMNA8ZtiZfF4NzM7HuytdWf4c74YzKLA257rHG",
  "key27": "2XDv6fNddN1YiT9ivG3iZfZXKdjqcUvPCXJNY4uVjeSPuuFr1JyWbxQSFavRaB8TeJz8LM4fAUp2zhjbkkrHJLQo",
  "key28": "3hXELjzhV9MKPkoMJuLeK2KxeE8EMMGxyCykg5MTfgKKAybhhchX6bFN9E9fA22sNVg1WBhNQFQJFsCj2tvv3XM4",
  "key29": "2QSnapqEDE44rmqPS53JxBSpFEsxRsDA5EoXqjhaBqnu6DQyH2aNh4nCcRfymgL3HRmdTg4SKHPvXshJG32qZtgv",
  "key30": "4LbX1uNnXyTDSwGQuMXraB1rjZJpD9AjbbbwJFRemgXDDxsT6hey4NsTByFPXdA7F7JfsEVjKZmb2cHCRG6HvWUm",
  "key31": "5Pqka2pYFk3qD28hXY775BaSLUsaTQPnUoYrW9RCNK3Z9sVYNmGTfZ9drxuGsREmzPU4HSAcWdQgqzPShYLy9iKx",
  "key32": "3zUceyoK4Ft48rHsVrLuh31sWGqJjyuRmhkQWqC2JP1whSqQ6822LJ3KkbYfmgSHxxxzDHjBdR6QArhGsar8DjDH",
  "key33": "5giQdZc2zxRWjHUb8BH9jk1UeVAfhXmJhJJPefX9JKqnNBB7guVH7jHdhaDuFnW5gwyNGMPoC3MGaF9T75pDWgqx"
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
