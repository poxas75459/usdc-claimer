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
    "5DWVxoNi7nTTizx1AgwLMZQq9Tuytfv7LdDxq1TPpi9MrhFGuJZwMFEzJCoprkJoBhZf5cmRqokXbY4VAc4JhNSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inwYjQRchVmRfmNMMZ5jB4A8T1dsZSPUPVdeWXBp6B82ChVJXMbicaUHJFT1hbsXmycdXyFQyg1cm3fU7zHXd1X",
  "key1": "5wMb3NYJ42LfJyw2nKFfmFaocxJhGkStWLv52StasiVgwZThmkxNBPjuymo4jfBBQjxFF2VvbEtTPXGJpwsBVqRV",
  "key2": "4PgDaLVn1FKX5i2Em2ep2LsRQGGa5xygAZaK6cQqAj36ZLkU1Fngy7g4c698qnANkTNwFvhHj6Jte5P5uLJjKCTV",
  "key3": "4SVnZfaHCtiqfF3hfV4hapukNvK2RKWxcs5y7JvX5PooCjEecEMr8BSfoywbEAmQonJJfrXfAr7Yj7mHL9RrDuJs",
  "key4": "5jtCacWixY19obCmqB1gG6feGgwsF3Vkw784AqYZW4sQPkJMWMM8YDeo9TUGc3yhvtce3Wz5niyBtYAMRwa3fhCe",
  "key5": "vaJQbRUcsCkRAH8QoxrLT75WB737YDPMcH3Eku7TQ3Zu3v6LENxhjrZVuNp5RyaJ4MmX5CFLrb718xkKSccAMEE",
  "key6": "4UkM3Asr1iaNuwKmVWdAQBLxrbsPAvyD6bTbhSG9rQeJpyNDVTVAD8oasWEj61FFrgiRc6YjQZXhRyiAfkqYkQD1",
  "key7": "LfcAP3d7ySKydvykCpBtSJJ28kJtWU25Q4JHqVJuN1B6fFWgjbBRfdXJRNmdpDgTCP16fKrrexjbQFj3CEBV4vn",
  "key8": "S9Yb4XeSBg3zhUStD2uZQEE9fX64hiC6Dva6VFKJHYD74b4T3wKbppbxEP2tz8oiThYwWqzRjrgLpmEnybSus3z",
  "key9": "52uZsx89Qsqvz9HUf1auNr59e4cJu9cfiTVBr3CfAbTMuNJkEYQVBWqFG9M9JbMJcL3BrHoQRyCfYr5L9qsmuFDx",
  "key10": "2S3xaVLxzUQvTeoGxp7SEzwXig2m6hcY1XynvV1pv5xMgiwNyRC7qPLS92D7ZFUfTPKribdKoX9W2HgBLZokzuxg",
  "key11": "5Jrmq5fJy1qFbtvzenrgWHdThP84nJtxhyvbbj1ACXXTaBeQDymcHTNv5AuiF9FHPxKRoSfUietk2QryCfhPS4XW",
  "key12": "LFbczpR6ENway3kkEaaAGpegnENHfX7dMAHum6PhrtgUyFAHbjK1heMNmiPXoytSMBhqY8Hsy4PrQkqTr7AVsMV",
  "key13": "3Lho7MYTCdStVEFRVq2S9VDUDbqNDXZJCmAEaZiPUGjUWAh5zKj4Sy5F9qXzCKDvKMgRVnZ5yNW3mpUYspURwuP4",
  "key14": "41y5Sz67DEt39N2D9vronQDfg3V6ESdoxLZioMRGpW83VExzSnAdtdm13yhCk8FnPo92knD3RNCVG7BWYZ87ur8q",
  "key15": "2PArHCN4L5Pp2ZAgPG1xpno4aDFtM7J92fZoQTZjAsGySc7oeH24gha5oNoYknH6DH5XiZzDEdtTRX28VA1sJmpm",
  "key16": "5W51TNXRZs1yR8SCyBDEohmgAHUYUtziDmh3wRqzzZjDh96UpSXtdMsckdrHv9UZRRaFUqTod8A8sViqFsSYiKAq",
  "key17": "2QvELU4fHFfHDyP91s6ZbtiQWgEWkH4ME1izqJ1kNRiHCatvSDn7MG1gz3KrV7LknLM5ALF9XAEsUCNkFpKPmGGC",
  "key18": "4nLJw2akqsjUPXNWAca4qALGZqAWCunzACjfpH2DHrQnTtEtNLUoxzKdcUQ6SbAm9YYRTbuymxYa8Wo5NJgUgWAQ",
  "key19": "435RtxVjBcRSm83ZsXmJicioirMyB2jbKJoAp2QJZ8UUfnGHvBWRy3nwj2MnEGPF2tNy3XZGTm1xBymAP8bwqbVu",
  "key20": "3RDUPm3GN114gUN3fahgH6irGXUhbvPH4jLckJnjofLPxbj7FRQU55RepSd8SbUJDkRyQ9hHP4KUEZ83r895FdNF",
  "key21": "3tM9Bdxf5EaP2o1bbDuiARhQuVUsq6gZCE4XGHSmzwvdmcWP5yZfzcNp8S4c6PRSno9cQkiGddDcbuKp28XzBkyc",
  "key22": "G5SMKjX7Y7KAzLQMVWSNHzJWQgAa11nVP9Bj7xCHzbR9SHTG6QvPDcT2zUkdbP9BFU8Qawk13bHam1Ps226N281",
  "key23": "4nnT1V9HizwnLzpQ744SJW8213P96MBaqiS71tAywMfkgff2TP3qGF79gPEXtQyg66H4VPzR2wnh9Yb2ZkZiJRcv",
  "key24": "AdKC6uoGGtPF7eVyC95VLCjSXkHMRFCi9addH6WfDANqDF19AJTeLdRUKzKJA8mUPEfpcqr9SdYqmMzUKrgCBwK",
  "key25": "4Qia31JEQLsHu6K1EHY49aBLxZgVDt7my7xWf92PZf34txLFo4Ev9zwtv7REjdXMcMEYfvQZEov8DKj1PgbYgUAB",
  "key26": "4zDSGUZBkgJRWHSSXARYasYgAh6Q5q97eZwK8iA6yCMUiKRdBHXPg7ffaL3sXHF4DsznD6Fj4jro7ZceekwivbNg",
  "key27": "2Zv7UTbD2ejmQKq3ujQig3Mo7uStg8k2398bmiFbWR65JeWhmp7cteCrze9r95ngJRosardizQMFQ8KT29SWE4Sh",
  "key28": "4AsZMMVWtepEbKgA1qEr5Ta7dojG5oXPBbFprj9JgHFmBevKbVkCGhgaQBprjRAHxhZUgyE4piVjCdExVZkwwXGr",
  "key29": "2bAuH9RijJCN4DXG2knsfPsX3qPL8QDg9BeuRci8iY3VG7czHN5tpgWJiSzYsVWjRxzMszDiTbDLjyeYfqoQM8wG",
  "key30": "5fEVMjJe42J7kEF8SE1Vav9dpeMQjtcn9oJ53hTtPvDTfPjLpgbpvivodWjytYBTQHhSxQgA68DP9hhLTmLpejVd",
  "key31": "3FgMNCW9ic5JZW54Hmfb49xdG7zkNAAfeA7mmdvjrKu22cSbtBwFTxps5evWSWGbNFKeBa3sxiYCjpkULeN8bE1R",
  "key32": "2pjaUt2p82uQ4KSL477ZhVMkitKJ2CDLZFEh67TcZqbtAUbXurHj6oZ5Piwo5KaBFym6mNqnCsjJ3UXEhprPbin1"
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
