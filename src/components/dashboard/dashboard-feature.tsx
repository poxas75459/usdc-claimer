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
    "2QH5mx4aHZudenbSsCcGMWbPmTXd8Ho8p2yJN9emCCi9YEmz8FtSPGihbXfmcvYg5cEZbqabg8JXiHwJkvyteg8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSH6jGpFVtPw36ej9MFE2R9oiFjfBNrNSsDCEvcpJjkDDDY79USKWpP9ekEPgm58noox1JGM1sCP1jnqfNcR7qK",
  "key1": "2JgNtgtf5tDaSA1Ri9EsxTCFJjVQTeSa19ZesyMTMCR94C97DNvKB5mAp2tGohCkSKQTMyXg5ajuUFhoxHqRd4eP",
  "key2": "2cv8FJTRwfYmtHJQMEDu2cuXxseEUuLCpGF8RjDVbvWGCPJVvJxRLm5usikWf6ZCa4wSrb47EmKxQ9DY4RwdaVXY",
  "key3": "3kbabEqCJVE7XSu2WbmDSzzF33GdaPpa2LzU1kkvw7xquK4QiAjegLfenaqU34wM2MMnMAiyiJXyHkZoT6SFELEf",
  "key4": "3GdHiNX3b5srRtRcwcpVuueHzyD31jGuyK6DzEPXGTs1AnhimX9vzctu6VKpzZZhJKfvqW4KWAtnJm1aWMCBULHq",
  "key5": "3GQQqQAtntqY85XQHtSawkeYK2jHgWuYctkeyT1PXCHkYHzfndWa8AexESWoKCPVYihu8jSEbqcFTWk1fepXB6nZ",
  "key6": "JaeDV3AGiGathHyoRsw9oQMvoXEjEgD5Tyxd561kYorrzMtwaYhi7uL8ThxNycR24Eau1X8TmYUSQgNqw9M2kRw",
  "key7": "XKjeY1WMosyKCaAhgTm7U2JQ1dvr7GCiCmw48njTmMTCT37ZyNFzfJozDx6ERzCPNN3Cw9BwTRjNjErZA7nBqeM",
  "key8": "UWmUo1kwxv43NCuviNYRn7RLQyKiQxU8RDVQsEWcVBRXM4fisnZgMQ4vVhanbFT7qWtEtn3EBMLHgYVDtmPkCuj",
  "key9": "kpD8Jg6sKCDzLoKZyNgjexWPFSL1h4TdZFRYfsQHhQo6gsKGkhHMUnL9t1tP2VJEPiEnJqiH3tMMi9LDmz42DoM",
  "key10": "2PnPJ3mba4JgfsMuMPaG9Wi26usRcEvNfKccDWWDgqcDDMCixTaAcaSFimMfh4umSChB9134QCn4DMNgRKJ6qtSn",
  "key11": "5uziqNUUrwFdS1xYdcsXfJty6wrFrsNSAns722Ea9cNDKEkxzUApGKDGFeNQe4TuLTL5Vz6Bm3eKAeoQmRCuhkPq",
  "key12": "3xzY5Ardqyq8JPFjhq2R7BaEzBkwCMZKVZskaswuxxU1feTtw24GMiaUrWtErPKdV9KK4X2DENM8KWs3iqZHk5NG",
  "key13": "Sk5V5U4jHCDV1yCVJcZWp6DmKfUZs6ueQf42GypA2Kmce5hVvn8MQHvGnBBEnag26XyUQs1YUeDbn6s3ZsALcGJ",
  "key14": "4Hv4scTeY841EShdGwhmQLqscgioYn5KrM2uq2E6pxzzTYcuxT4oBSSYmaLbkDUnjRYpqcyi9vXSPJBbtknWQg52",
  "key15": "4ABcMja92hCeFTcTBEFwUpcpYWwDt7NvJMPSyPV3rn4W5ZnNraamXA3SvnPRduBawNduSdvDLzcSGs239Da12zqf",
  "key16": "fPgMhuPs1PwfbyAaXX9ydwjo5xeRx8679WVbR31oJVm1EEqtSMqkzDerhyKBGRGudfS1gXzjAw21Jt3MTmW6RQ2",
  "key17": "3CzSSFVuKgtNVQNVBWEF8RHV6EBcAHkp7SbVEGrYKgAyjFVXta3ZKfvqAyYVZ5eVmuDv55UJ2ooKRxKdFf4BPdw6",
  "key18": "2iJvzzvAYKTraAY2HSxF7kTs8PFc93PaPWsRRiQb3DtnM56vfK8FUoE66GeSEyzKZxo8WQhmCz2jUDJy9fa1kpQh",
  "key19": "4gmuV5JvApGPjMQAsXzrmaMDRGttL8oCL4agrjNjVBG9Y57n6Gs8MuHkpGhhrH7HAvqxCT6uARvSbZ8Le12awiqq",
  "key20": "3NxeUHJZvF5SbHEvYhEBhRE9DC6icFqsAvyD84myQWwscqdLd4dz9v8SFncbdmB4C8eYAFghVh8ZpP76putViNB2",
  "key21": "47QUtcxf7oGY3HQCKCKUgznt7BM75hd82S9ejFA9QrvD4ycxWNfz7bosGnRhd7kDSP3KiQLQCWeCrP2Pz8ZNjoMG",
  "key22": "65p5tUeF1AVencJ844xZDsu3CwZLiHeJu6fdi2yhgXC9LQRmdTnYGeZTiRyCb3X6oHFer5T852S5HmsHqcaSEnr2",
  "key23": "2CU87u3dEfyv4J8aXEHw29hHsHkQcEs1V96r8CYfbKyJcgYowTb1e1BVXyDSpoYxnr2ywPAfbPs7um2zj1VfcVwC",
  "key24": "38MSDg3cHcf3C1s4tCgrLsc5hMYWDmMUzHacFmhPjxVdtuK7hTBmadzJtJeLPmBtgDbDuqRgSGD6WhdWPZtFxP34",
  "key25": "5FUnAA9SDV1HBTAv5eo8jQeP4J5Unmp1iJHfULoi2KrD6YQE82zDPWkseWHRVp6TUodPTvPjnMSawVYdFJH83v12"
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
