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
    "EGRB3F3HsTBWSAU1EebvMp2RNk1mVuNcn3oFa5jLtD1AzEVibCoPcgStqu39RSSbnwTtzD17m5UzUWxX3Rpyd4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GPqEPixRAAFZXGEQu5Nx9AJ2466udZKc15cp5SWcn55bGFAMo3AQvRn5Vm8v2gL1pddwDx2JqzmyFMuSpEGR23z",
  "key1": "HWXnw6k4y4gQUg5TcqC3cfdGMU9xhWDoTf4AqkgnWAgaqsQkCUh9zZYUvJ7r18Wfgde76Ab6jUgNWPh3eGMCRCn",
  "key2": "2abRfdjp9qQAvt4QSRJbc5TXG29gNypJdD32YjnW6rtH46Qz6itjRXcY9EHe22F6xwmN2i542CV54BgmFiJpaPd1",
  "key3": "4ysd1Q5Y9gjM1eYy3UPLhxW9z1VhFz93KofWipF3TDUty1UrQ9na6kdDGst8oPCrwYNMtaS7zbjc4p2MoqubsWN4",
  "key4": "22Td23x8qXkna7Ffcb7rA2ryVwjy1nMdY2yekAHzD79Ex3bnJoCEJrcYzNeXiqdUUYGZNGNTn5thr1FU6UyZ1JjD",
  "key5": "5Y9ECLCjz7fzq1V43HJagy71eFiPEDMHpfcvM1G3zAbkPbGZEpvBnXFPZEG2viH3umPS2Kyqj84cb6NdZK94AW3Y",
  "key6": "RZraVTErj2cvV78WDTxAMiREMwkjcJCvp6AGpYDF4pkjCUfC6ttTYL93scp2XQ8DnvGG8xQ2WUqMRYAM79KMwM1",
  "key7": "4vgWXGdZbvXU6Eoyo4E8fdf7yi8g5LRGWCTK5c4SQDorn9jufwxRchmRt7Bf2gdmgrjB2RYMHnEajommGPsQMwQR",
  "key8": "5e7TqdZRAPCvxF6TmT6wVWERCCoPT9toRfNrHM6Vd44eYA8kbYNGDb5Mya4sCL98tdgswiPV24Tz5fmHavJh3jKz",
  "key9": "3VmAb2mMzXDRoSDx762Q5nKznLGvXuyyuEnwzS2J3gVJFh74tDFVdMmtoA4mh9cz8VEwRJ1iyLpEWu8FcmFGkeDh",
  "key10": "3mgYiiVic3XBZbR4ZvH18xMrzqkGqhM5mdPpjBwSpbmF51VLReXTfqnV9gr1cAmfxJGgxs3z7tA1jSJjiMUMXy8",
  "key11": "38dZy7FupgvYfKWU6JMQsr3aZt4ohrUeSKBZM9mAthwx6B5sQ1F6c9gt3yz8mnHyusmSsSXh5XhWWjouSUci1ime",
  "key12": "255c8uCfbWCCVwie6R4Y24PcnWAgeYmGT13BcFNkFKmy4vNBzQFNcquirri2QaxXLNNeQR2DAZuFL6U88DpHGDyw",
  "key13": "3UC3ufkPTS9fwUEVK5fEoNioMPwrtupWswNgNWRMBjUoj2wfVDoKePMc8XpoWKhYyJc7ndnrUWNDjbbdcyyQtWnk",
  "key14": "2pd4dqinJYmJS7eCYtUoLiMctxjaLDQaEMJJoCmHP1N8BLnH7cKUHrVvWHkZmbVB9eRdjUempQh9oL424i1xnm7L",
  "key15": "4Vc9CfSsXwrKDzEKPCutBzNey26fUGWWLLqmcepCtR4LvfCV6xTwCL9WNGT9GuDTgp8HzLCt33GWJ2pYnyw66NrV",
  "key16": "5WMFqFodcvDTLsM33s3bsg6GWxEYFthicDFsD6LJzBZo3AAqLZRQZoTNwfBUoRdxvrY1FDtBtQswDBLAXd13HieM",
  "key17": "4csPDWS6jXC1W16X9jszaLqT8XAt7ofncqZjdMvabPeTma1FAEpLWU3oHCeA2XxPEaRmVfBSyPGFdQoCoLobRLNn",
  "key18": "JyMwqWqbYfwNJpLpVJAg4VkcD8aStKrHH4BT3hvm5MLfMYvYsgADpE2ibpK2bJkLDztdHGySvNjoBPSHuDwnnUA",
  "key19": "mVnDM28441hh6WcMNMegsmWbVX5EY4RYeb3NiD2Wu6DbZ5hbCJFHh7BLH4bWHW1fddwVrnU5tmDaAhPpdfMQ73y",
  "key20": "4n2SSiPHFbQETR3NuLrzJXmYxUcd2ndVriUSn6tvMEcoxBVv72YeXQUForby2PxcNs6NMFpiKkii9FuRBwHLxnn8",
  "key21": "2XHSBq3qGRHBinaxZnnRiFCfgaUbEK25Jq5AdxqR5tmUo4Wf1syiP6eyxcisGRYpdsyHYMz4chbGg9eotJVPaFYG",
  "key22": "5Y1D2yfbgLRn45JoisZVkuWY68duv4c1mcT7r48LuJN1yXVfgmaDeYMdSQ7kgQ7hr2WBppF9k6jhVGUYMxygncRq",
  "key23": "sAh6WHaiuTeTXcVpwFRxqcRbQkp2BwupN7VqPyYDk93AkkM36uqNSgpTi8vY78yXT4jjpxQP4ec2RmsA1VKzN4Y",
  "key24": "54CMiXUEEjDwFjUiYaQJyuXLpr5HgLWAU4U5k88VAQ76z7n8rKvUYgkGHpmpQNjsNAFc95oaKKeeaBmvsKQ6JfWP",
  "key25": "5Y6TZimfWyuPRrU1mYxiW9v9u6WR1NDgR4KzeotCXj2DBXUbBp1ngWBSUZC6K7z1d2Npc7P4rDp5tUicnpuxRBeq",
  "key26": "jkKPFN9c5HLkq2w3q5wnkzXkPpL8FtGGHjjbxasrJqETWmr8HZdekHcF9odLAUpGs4eA4PN7eoFEY7SWSERZkHg",
  "key27": "2x43WAohkFfbsADdbWJhM4pYMNbreypSwXwBQAG44FuYffWY1NsFqddrMLArjFx5dB16KJCbkRJR6jsjehxcUhPA",
  "key28": "xj84k4u6EjAzTeiYSrd1ksXzYSJt9xMMSYRvkxFUYmexb7nEqCBuFenMLHuF4kDZnMzshRJBbhjrQfJURPa4pZ5",
  "key29": "4XLEMok7M5iLjCe8FzVDfrUs2sNtiBFUkfAnyQZ4xHAnUm2ZcHhVfUGzabQL4opHK9fPdeukqyfpiWRxrwTTek87",
  "key30": "3JHjdgAqwS92MR1gU8gQ5WCqhPsh7gGZu4njYdKgRXAJMoXiSoJ9e9aHkKZaPSPy8z66udTnu9Y3jrsLtWs6zNAF",
  "key31": "CZ6VMyyL1xGweH9C42XR8vq7N4rDMfGDj2Cq7G6gSbHqhhtU9D4m7HNFYczULqKUSH2xKfnimLvamXj84Uqt4PW",
  "key32": "2QaPtCpZwwMQq8vM8F26DC3LzxZuLw8FnPecQsBBy1Fkw51UVWsxLi8cjHqcnYUsDER8mfmzRshNj5REKuUNsjWY",
  "key33": "5CTPh3ehHTD2Wf5UF5k1hwF7j12cwnc7DGzwUR6tbeDhZ5xmQbt41WbK7NqK2JGrD1YWUFMwVhaSTS9fAnuwGjbq",
  "key34": "4vamNvTJ2nthSXGnw5fTJgjUbA8wL2KwzdsTxnrw2pKPQZVVJD4tP7MnoU4DwySKoHXJtMrBjkHWHd2X9vGGuPGx",
  "key35": "5MQyAb9a4a2EXb5vg1ktbym6ZRPtNBuhB66C5rCuRPXaY3bL8BSActh5aiMmCdF2U7u9RqrWbF7gazyNZ2gck55a",
  "key36": "wacFY4U7zxk3UpEBoJisWUxZTHuycR8iLbVMA732nWaKqskyDZCCxpuTYLZQCaQrN6uZ6HXL7KtJGXQNF2cN1Rd",
  "key37": "4ByqiiukoKH2sgewdnQNQQ78XQ15TBVybZQk2JbfSDDEaVNZFr8MZaNt5nPxca278GskGpR1j45PeGryxoPp779s",
  "key38": "oAZhMsJmWRCwrXZdeL6ZNK5uzCSDGN1DYNeJU488UK31dC8CJ4poE9dvXGqZHeL3BviC9YX5j3hKBbQYpwPdtV2",
  "key39": "aLeSuz7cxcN2YMYrDRY5wASfQ6biBZEhJqbBFdMs3mm68kpHN1nMCazifezq5AobimVckXCzBsQNfRTTacFredv",
  "key40": "2gArqykVQagKNUBwe1d6rNRRri15Q2TjtAzXv3cFpksThdsDybAmUgzuBz2KfhLTpEqfaDeBZHkrqiekTNxAeQJ4",
  "key41": "DWd4qGuJVxYhq5fhuWE1HPcRG1iiSjjEahbFuGX2HoRaGUsGHbmoDV55aiZj4NGfTge6rYDanHRrzN8xarkjuNa",
  "key42": "51xFkGgmDXtJSwjotKDgu99iiVn352KUgFuUrJ7HWvyG4puAxS7ihmyGc64SzXJUC5vX6c4o512gxwxhxdxV3C42",
  "key43": "4h256ZxeExqkcz28LpaG16cy4W3JaPwd6FXTsgkia7hce845DwGBFpebX2FwxAj788R4pRiscNWPJsyoPWTyqdHn",
  "key44": "3hNRYgD2ZwaekJZAPp6gnZqBkV3rGKFXLXpEzSbQB9RZZtPTv7Vs9eJhgGFfLULuYf3kkX4QoA8CWW3PH1zugpSD",
  "key45": "4mqEkDU3dN2sM9LUavp9fhFk6fCdXTRyfk3Y2kDQtZHTfaTpA6y4yeMBV5zATGVhePcUoz5KJBE3EH4b5ALir5nP"
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
