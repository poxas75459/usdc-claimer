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
    "3GAc6cp6rAVsMDno6fK2W91NSGziZf47hmJ392m1yNKkY4oc1XUt2uDtkjwuxukhoqnL5EVdzq8EsvGuWoZYZtuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYhsdqaSJGpMpMYQUeeCEMV5JEbAjith4wi2APLuRm1APPZbnTWbMh4XMRQ3HCrBAus71QzAjnsP65TCJgxQ1aT",
  "key1": "2kzjbHGgw9WcxVrWsVomRWoP2pEkHuLNJxqe6aqCLbTrMcbYSphSyNMhgZU6g1AgTaeRStHdzmjrFUqGMvx6fH8t",
  "key2": "25wXDmKVThvKFKDrYhMs923V3uXGs21y6KgVfcym4EBtxWTms2raGN5tiWSSVEnsFdqZeppLkrHPsxDKv7AEDzJD",
  "key3": "5jTyiQMu9DWupAjzuk56wyvYxrDM94utNfGk5fp9ZwyN2Fzn7uwwDaXQrvAEGqrUk2t5maPQNTZGFjSt89rs8Nne",
  "key4": "4mXT7G1JZz4PRTWEwyFBdLooy7xjtnE8AL8AQRMkzvoCqBKC8RWpBDWzPg5i9UXnv62iKQfM3Cg4xsjBPzTz7Kif",
  "key5": "5gRmPpCcjGBouE5YzaFedWMqkXbj4XQ7d3E5pA1PrRy1PtqhqRgDfB692pvdFvmJ69HbLnQgSKC6tJrb9miQU1rH",
  "key6": "2uaHDTaQvq1Y2PfWWK8cJzTaVAXJn6qF3rigaMTKjTfwxWgxKVd621Ei13SEGqzaYApRWuuVie2UBqCAtpbCxKz3",
  "key7": "2Tpx9tP9jiaasBpBp28XjPtsDFtEBwsuiYnQPywMB7AaZMCqetFk6GGMCyDpwg8vqSh9baHVLQqSvH32z9qYz1AT",
  "key8": "2QfRc3RCupxooTpcX198XxbTSkexHiLTZo8Kue2ppuKotcuy2VDc8qTxLqaHLM26tPxW9F9ebpFmXRo7Ng2aFtna",
  "key9": "2t16i5wjfXJ17ZSh57NDSpxW7n5nKcmNPxSMaNpmB74jLA5y73mJoumZscA4qM5P42ELBCnsuSVPhThhU9AG4TMk",
  "key10": "3tY9zyLzhPtHzwvwa6bXckN7zmSL9UNCZQ11oDJTvkSs5BqhNgfwc6bePg3K46abeFH8LymVKtENna9GRnHw1pWQ",
  "key11": "3mq3QqpWAxPEMwdzVy3qH8e9xXBM9ozfMivH7ZsQtn3TcFVVKNF6aggmcEUpxqZPXRCeVKu33UwgWsSmfHxeMmtE",
  "key12": "66Q4vWem34LsUdXXydBXjdZvdETL1VrW2fHeaYRc6kcrpWZm5sfqAgYW9wX1Dynn4mkj2ruP44fgZTmafNKhuYfg",
  "key13": "36MANmfdk6ViK1uunnQvYHJshmfm444K4uwAyuqruzcFZtzNtZ4VTmzPhfhYMSFg5mYv7h8VKsvzSyefLE31qVRG",
  "key14": "4EHaH81nHQsAkonSfgwAZc46pbtovUpDLQmrszxA8CHqC2e6dt1xi4H33sLYnuw4SxPGSRTfWgQVKhuaCptMEeUc",
  "key15": "9siRb9PuuK56fUxikdAPMH41kEcLR4yWWd7Km971VG3fHFFJjUjWWxyQi44YaMCT4nHfvN98iQp8Xk4FMu4SDy1",
  "key16": "4EGgq51KpxYURc9DUpCjb7LtCDsqaaioC7ddSy7CcJ6872V8AJY7gfnV4hkqdeERhbcnkUU74PpWpqrSySGQsEnd",
  "key17": "4jMjjhkWRT9UUijXzETBaM2sPmjL3UxTpXwQCDH5VNvTbEWXTZV6pVEyF2Mk5C1FUkqTegD2VwunzxYhjXm1S7Kx",
  "key18": "23cG3nHy8z4Pi7R4Nx8mzPuDfoAFuJAsANhmnueCSVH3w42aoUU546hcgA97PEuf2312HsGaZa7g4whB6tMhuKBK",
  "key19": "4bxUXTAQLitMhHCdPcFo4DFJj5MQoHTnLfJ9mrpAwc5Eq8KY4RSvqNjFtCZt3XSdZ3epzZPoR5DxYfMDNxngKSrv",
  "key20": "5XKJsDJoQFvTKBx624Wxrnuyk955REaFTBGCRnXQJAzcP7CCUAjF57nhstQCbYQZvszaeenVpcKZfGTw7Zxu5ws7",
  "key21": "QrR1NsYtPtyykBrTzkhzgYimjqRezrm65Ypu11HjKy6UwCAimuF88yF34hY8tCT15Hde4k8cZf7XhzC8Z3D5kKV",
  "key22": "4U6hQsvTKWVouqXfYeQLpRnkJPWxxjh9ZzLK5s8aAL59F6uEjH9sr5pTSoYFKwKVo8kgjfYBrtnn16rPbmFWqm5S",
  "key23": "24RV6uTqmkCvUefVRj5nYttehCtSp2RmeE8ivRUYj5fWmF3gAuuzXDs52iLq8NdJghZdAt9A4jXyjdyUQNXMuZZW",
  "key24": "3YVXGsZZV6tvJ48B1R5Y75oKLrbrCZW6DoQEgtxCHSEBzpaTrrJsya5ukhWwjfGtiY4hgLkShQbof7kkNcZKJzs1",
  "key25": "51nRyquDkRtvP9pAmymFqEY78WE9nzFu8Vm8rLNrJGszzu5oGZ6KiPeupeeEouhSpXygxghBRhinXjsBNYyPDLaW",
  "key26": "2AAkdZC79tKqUWrHySAsE5yf3MuckrxmgvCygcdk2wMcEpvUhnPzCSUgPC46R8eEYme2T65VHThFCL4n1QsziKrQ",
  "key27": "4TaE8zc3ZCPoHqFmCzVJcAZ8GkoLkDbvZjAWgbcS9KEXXqKcRFqbojtFwirVLF3TTQZYVBCm4qQ2PDWjkurnam8m",
  "key28": "5eAqtzeHMNjE2rvrJ7qTQwrMtUPo8jNyL6Pavm21xsMQG7pz1UHKAqP9xLahzkguuqBHhXXni3xSBGxaZv4mB7e1",
  "key29": "5WkxhdkahqQBMqhzDYAxoRQwbihAF5TmdhjPLCaezjhKLuXWjoGjEypTYjTTTUzX5QYQZ2h1rf43gMaPuWNgYwMb",
  "key30": "eVaq2jwiAWRkP6MFu5pt28aMT7utTpLaBFcNXDBxWBzxz8nF1wTSgaFyykfayrTSw97sSr5cxtzjMENYqv3pcNg",
  "key31": "2AecpKrKBXx1qy7stNaSAdat6NZinNZM4ZTYmisTNrT9EFYq9z3TEroS5XbJBoDkNVPaAHCkUPNWQ7iNCqoJyagw",
  "key32": "HRNYsFpo9eNBbLCBcf2sKbKrpg6qsanUYJ5yimp3HHg2CmzrzSZ6JXY23A3VQX6GYVdP1tft1JbQfU1foZuy7qM",
  "key33": "51Gok5YZ88pBvbPYMJMHmtBCWCiT1uDcD37mPvHA3UTuYNst2LrQN3sSTwv4iSEcrp5JJiL1AqeD6ShcLPu3X47z",
  "key34": "3PQjAxxubDFeiAxHzWHijbJptxg7Hb8Ukw49NAV7GKnfYQHNViLbqVzRy1yaPZ4n6Nh5WZXRwUnYvyHq5jVEzY2H"
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
