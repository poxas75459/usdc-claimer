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
    "4qB3tUHW9qQrKP15ziCPvFcbY3rPiWXYZqGtQQ2t2JtXr65YsNuP6L48va7WDFhxS7fwkHgHD8YxgDWWsdw3E4bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UXvAfnGth24pPtKwxRwrVyb86VtqiNUPemY678TjdihMacokRYPj7MVuzDuapsgFX3DV8qNCRU4Ff38zTWEbLSz",
  "key1": "Lfa5mv4cfbHCXXWcqikwRvtWUXbEyqz76d6AMP2Eo8HFXLp3tiE6ZfQ3Wq4FzM1P3VubWZhievuacLxBGFGgHzc",
  "key2": "5ZwpBheJivMkbsPMsLZkQKpB4vEgzBT1r6wqiG4RftNmSMGDJRat8VM1ofmuqiQ6FnDHgnR7fLSDBAEqBhivZajc",
  "key3": "56xBBXTkicPEBsGLgHUCBveJdBKMSLetp8esmd9Xs54VNCjkkGUQpcrT4FJhWpGWv8T8cjL8FuSWGCpHrBxNgjSd",
  "key4": "4qBK7apc7rKpiJT4kR96RgXBjkvgFUaemFfRn4oooCVT1TqA61CAmxduYR3Z3YRxqKRXAG82FyUjke2Kunu6tCut",
  "key5": "4BN17cSLmmEUWog7nABvMt6xuh4sbWyPUpQWehTr64a3V7k4WuvmsbxYrb1FG5yGXZH1tk6bE7D636LjyimMkHKf",
  "key6": "2BQ5vye1pVXKdDQWu5YC2rnLPL4sTMfMohHvYY2P7Z9VJ63tJr1WqXzQ8QBHWZaznDVVMeyDZfGrzvJgHuvSb3mn",
  "key7": "5tTSuWdvFDF24eYDXKQdpYsQtsxVdxpDCuHS5jH9xakhsB1gtpeGBj7WKQEsNWVc87RTU9TrUA7YVwDZj5mwRDMN",
  "key8": "5QjmkKFGQCBPDfzBTzDD1SoVYZWhGadRV8D4rcHcBBG3ksB7c7zwLYmEDzhvWVd4McGwhcFJoiHixv1ui5qN9GQs",
  "key9": "2GhqW8adiPK65zG4RE3HJodvUiEUXvASzWQV9SemT6jsoXAGf7emjFQkrS7BajMW43qMTX7NL4tyNeCJ9Bz6hjMk",
  "key10": "4274Xfk3hLs6v8qot6jFf5KcTcwzbq6fCVWgPDv624pfeHurq7Kk25wuEJdw1d11mguBrCQNwQSFNVV4Pf5zVbws",
  "key11": "5bR7VWLmWE4Pb3BDUqYqAgKsepomvdvRngWfcfZETKAfrECws3BtXR7Vz2UGB13wkHttCJc3uUf19KHV1pBqgHGB",
  "key12": "41hvepVhHcacRhuoBxDyPfCW9Gi7892QVUwLBtvMrfTHirQgAmXqS95SVpEVt8AzRziFAfEd7KjBZoTTG6x4JENm",
  "key13": "2nZGmc2sKKSUnBPyfvE1jdRwsNeCz61m34gwZuymFf2stxAMaKV5tgQr6UMGpE5XnMaA97FznTqj6Bq2K1ZWUdBw",
  "key14": "5f4sC3HtRjuktCqnYgLuPAnsSsECQm2wJ5WCt7YVzRzwAzYRNfr94eXAYrt5v9HTq83SowJ62vV7uAo28KbDETCc",
  "key15": "4YbWtZX26FLUogRRydfDRRr3mvBS85SzMeuFJruDhueDGTUbZbsf3PJDHZkjLSXGPrKQc4e5Yg1QvvFe6xWY74as",
  "key16": "iCHwJ8HbunTiVQGX4Sn2RRV6My6WjKFEE6Ai4q7DVnnmU2wz3L5isYciEHtx4sLAAE7sKXQeuZi3LsxWP5ErHGb",
  "key17": "2uqkh9YvndNtfYLHZ8hcwSwLnombf7AN6siHk9ptF37nFx6grGh6uEj74PKLjrM9AW1pujQwTsueYwGHC4JooCWP",
  "key18": "5NfRLnMkdQdR8G6QUB9mkBYsu2qepuvoRCk5ExqrwTY8NegGns2p6nxjGe9TGQbwxYWkBQtNEyGnJzAi7zA7xyLm",
  "key19": "s56H34mB937G58UDg9C39CDH7qLoz3zQdtc53U6bQUAvNu22sfYxKYdzYjnK35fAzkg3CU2SKL36chH9qxboyti",
  "key20": "58AGPqnn4Qpk75Z1KUP45NBUf4bS4QZZgbxyGYJdboCvgwRku26DJGmn5ZDYK4JdXCvVsb5AG5tGpMiwQVPkrDdu",
  "key21": "zbyVqeurneSQpHAaKSZw1urgMvij2sQaGjFR4cTPBtfaWmrGuifyKiKKkiAoY7z4xpAWcrzMEm1MyTkJhz9wgAS",
  "key22": "4Mhep6nxsvByf6uAqgyY52yEeY2CxesnimhHan1KiLRE99svb2bnMMYeLc3t7zYqEugXNJ549ucS4zg9WNFcAByL",
  "key23": "2DYySGDqZ9ZcFdtt1QWUFiupbogfmATdq4yFs9nhuCPnRBpQFsL6Xwp5WCbeDcLmXRzubvJzbfRWwxd42qTw1DjK",
  "key24": "5DoYwAK9KsyxJ61zwEXDmLKtxzufLt3ET6kMJavQpn9kj1kgr8JMJ1GewgdKQzJndUbQfyraPvx35VcFJzxMM7da",
  "key25": "4q5u2UjJb11YFFe3CxLMTNCnq78B2h5nQYknC7okfDw7Q8MG1MbFe4gwP82W8LtxtT12gnSJjSfewapb5iDnia46",
  "key26": "ueGmFtr57fJuusWHYQMsd4wj5yUc52wrnafjSBi9JGkSBsRVk2264E7ekqTndEvkGL49NNrDBE88segCFtGJDTU"
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
