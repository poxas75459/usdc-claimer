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
    "2nqafcJB5LXS4mZh9cNKBVVGMQoDHj7VRUJssysG6ivq9pQUGC6V1idDGv4NmyKyAeCGc7JKCV1BWZGWesWJr7yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUHfjCZ8bFe3dHLpX2Hw5q5ZWJfZieHvXgQUG8DmSsZRUtbHSs3nwTu8b35hcbewB8Dau6C7DeCtFc3dBftiZvs",
  "key1": "MG8hXX1sCN77UyLVfDKqHxN2RyqmWhHvqckrADbeqHXJJdEBrqxr5bwHC6BFYRZCpYCn9a2E2fBgLE6A8zzazUY",
  "key2": "4hKtMMRhoErZpq15iantxmmWsdtvoRtfy7tasqgFxsM5oACAyJx2WafgbEpZpv4CbxasPnkh1R3h2qbn8SMFwy76",
  "key3": "4exRmzSwtyrUqzHEQcD8tpfT5Ksn48DgD83A2B3iaaog4UnS2Chm6Wxh3SFzy3RUtCELXMiZgdTe19iMw5XvvS2K",
  "key4": "2PdRo81CJo1XGhyDrhARMNFbbEqHiTfdBG5YSrtxCkhg5QmiaHbWN2wczDpkgwYMw7n7xPxQtLrdEeEqHCeUBQWv",
  "key5": "4HHKP96gkNwEe6djvnSuqRHSKb22bHHGegUsj6hvJi2NKGMk2ZxdwrspmFtRTC6oPn4dioTQNFXS1791RHXardMu",
  "key6": "4gwKxbU4vGD3zFyidirspwhntpvHH8cG1XsEkELG1YFEbxwF3X8xZru9u9MCTihR9u3Xfen9iZUY6wfJWZgMJt5K",
  "key7": "JGDH5C2RRT6C3oCFXRhRKzph1a8DcANGBzHjfC5oK7zxbEkfNoT1Dk3WruFW6YHrTM5rNAhhpp5omNC6PYMaT5h",
  "key8": "MS6joreW5BtTqBmFBtLEuYYHNzEkN9vhJF2hRyEtYui31nrdN9GWNsTpfgvkbEA1aVxDqFedMQFYpNWvAykd8U9",
  "key9": "4wZxasqAhxhQYvUciu2mV2p3AQFZwsFzYFsASuVUw6DP1VmtEfe91yF5ypRuVd6ySQjBkuVPGx9JsTWav1ZBQai9",
  "key10": "2GiSN6fKRt3ABFAyVqtNRLVhMqSDigX2u2xscSrwudRPeVFxTEmRWDBDkqhGH1Q51NUjRHyu34UYHz1gEgVDUoKe",
  "key11": "4PNAq9ZvA9HpYayR5yEsVaZkENGg1neXTfVAkLnrZ3VYC7urFjYXyYuGz5He4oPV4mFeDyz9vv9XgHqE4zeJWRaB",
  "key12": "4H8MURXrCfTYP7r1RbExKFmDjGnvW7TbQ8bXWR81E2BCTrUWHVzbsjePNn2uWwxMc4uGvfuhMTB6EUdyjpKDeBCi",
  "key13": "4ZTLcwX7jc3WGWg38qmiAEh8g28TPv5cJJ1nWPByFhf9uPzXXHKQ8ERCLWiBEtwBzbGaLXoZQBbFksjop5TGgSG9",
  "key14": "3swQ2sLq1EGdyTuE8XTncLcws1AJau79kQhTt7MN1ELYtxRu4s9oBQRCuQUGmeMESV4Yknf9xbVG5stHrw2cnUQD",
  "key15": "2UHVjb8VRUKx9QKPTsjc9WrUqTW8YkbSxjRant9eFFU1TSfUsWR5tTN14gTxiUBWB6RhQsQR9fAxH37xnVhAmBy1",
  "key16": "iRR5NAVBGVePLEzkCdUPReKsaLh6RZWiEm6bo3jZw1vqboszoBoGriwyGxNJetM5tCucwxsRK4FSUPCg1U9YP1Q",
  "key17": "533KGP9JjTw2gY33YkRjf9yrcjuXTUUWQNbqp2PPxMoBdQm2i8FFNV4Hpgga1gfD5CL68RSiRnY3RippfpcqAf5r",
  "key18": "4rT7Cim2SeU2aQ657FCbhs7u2iQGe8TghcaycK9d8NPzBBpVEMRAxtnhTCjUvzU8WUtiREyB42adiBFSvVeHksS6",
  "key19": "5Eja2WSULJKD8pHgmF43NyYixG6sxPMfpZfGH724KT7tbA3uPxyv6hFfHpdqjE8iZDtyfmtDEirJw2vttRTdxbXk",
  "key20": "KrNXrNyaN1d9c5dMkhLiK1uBLLotm2qe9jSek7WYf3bBtDVm88knW5YHPYqgkdcj7GPKQDB2qCpx4JqPAkv1veZ",
  "key21": "3dhj9TtdV624SuyhzYiF33dyKkmhAVDWkADwJw4kzpQH6E4HUuF58fLRSdFRT1P1SeAJHhiHLgRWHnswxNWL1Vx1",
  "key22": "4YTKyTqaLBdjViutz5erarZ3P5XwvmX638dcQMuRtnTHcPFkWfiYDhGC2hJiMcXMbxrsvegMrXQqdXm9ozPbuVJS",
  "key23": "GoPNY2sZVM8LaaV5ncd8svtQ1j1LxwyuzFqm5h2WtSjy7XSsUbhNMGwtxYVtsAQv1uznnXT1TDpzGnub5e3UTcf",
  "key24": "21Ws6EemBmqdsN7oRCuJLvu6vQxi3zpFxihTDe2avYYcJM1BUvDKzQH4yNiqUrQY68BmKE6iV461XHRJbbdyAJFj"
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
