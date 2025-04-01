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
    "5A2V2ePKJwndDcCLk7RWtQHE4YZ57ta8AU5WheWQKsKPkpL8TfjNWjpmGx3vo3TdgugwyZJWXgzZbo2xohw2MzNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RCjUKC9UNkoKUxnZYZ4c3Vnbkc4Pz6yyAZxHUynscrEP8KvFkjrot8UbzHBtCcVMuubhFqqNgNnVZN8UaaWHT8",
  "key1": "2PvbxKg8wWopFo4k98Ze7oCaVDGij8v7ZBxeaB6ngA81CngKt7NavNtof2ZdGX1Vm7dzt41ezUvB9pMbbyziy7te",
  "key2": "5ugvhBUmNYW8EWW6D2Wt3pL9YJdG1PC8Gt2KqPi8M6rokafP271cBCJPJ9BC5cN5KSVm2WsQRmZUweT24M7qwC6F",
  "key3": "53QpWXw6pWSdta96s4KUP12ak5UVEqbL7hWPWKMcNbKbvgL3BgegLFtkCPTS6bF1Hf3nXvJAE91hhXe95Z3faART",
  "key4": "22gPAxxozKwmAuGucYdhgHsp7iuVy9zJ2HhtsKX9U79jEpkNFaycR9S691GY2sEQnEQYNv3ihV9s5KQETqAY49WA",
  "key5": "5dsNr375whLt7wJkADr8JctyCGSVqMpgtDvnNmAx3xsfhBefhKK7vrvkLGGpfcPss5GWmhFNbr5D9Q8C8cYhq27r",
  "key6": "3PEk1eEqgpoMHpmWFCykLnSMF5grARHrAxz5AidS5hYQ77TtWfPGdD2GWFo1Er5X7thxE9GWJxMN548PuqncyrEo",
  "key7": "27xdbXbbmYSMuuVUWpWg5qVzH1QAxyWkDu6E7ynoZV3wUCySxfdTUy5isC2CRhK6qcecCeXgQrCFJfkaErrHqFyu",
  "key8": "4vSDiWk4utdLhtU1ktZbKMB2W5uyQeJoLmPSDkaSW1tRr6ArK3YumUFUm6PDdyo6Ci3ppH32MLksd28yxHdJZmLB",
  "key9": "3Whfe8VYZE4szQYDTfzXwUdwt7HUa1FKDckUrADCSGZLG4Gz3TXnmh2nZ6NGBXpXtjrBSz7h1GyYz8tqmiWLuJRS",
  "key10": "4vCiBtjristyNZcZiKbsg9gdtMk8pX4CdrLP2A7KyU4ef7QbgHN7yqJsoVo9ftx9p3iRJHWUdEmQi9MPNKFCcwQy",
  "key11": "4Ldzp1s3uQSfYF3ZCUiSQUww7LB19jjEwQGuhohrtw2eSC8Szh9YRp9xYKrrs76PLkL9c13NzZeFs7Cxaq43CJ84",
  "key12": "5RkSco1WSHEJBNBevnHVPERZHxbXmXRz869URYVkDdrPN3c6BdzM4673oaSCToCgpRGRi5soTzXAHRczeFTCPu3S",
  "key13": "Es86uY42HkLgioGJTzzusd5jNiN7WuF7iVcBtZixN7QntiSCrVkkW3hRhqVBLet5TyBxVa4KRmQSQdoSjLU48DP",
  "key14": "ZX58nrV5vvG6qLh6a6ByoTzTKLQbz6a6Kt2UtaUHKRCZRvDPNVs5xe8sRGRpGSsRbt4EWmcQ4fa7zgRU3tNbKxF",
  "key15": "3yoBAA3k8ME86r98n1PPq3z3aWuahfrZGvrivof77TzTasu9MfpDFsEX15pZinSTLoM8dXvFYMcE3sg8n3MErFee",
  "key16": "2Xp2qiCZbXsxSdetJwf4RALWTjLGw4JtmS2XmPfwvhXepWY6TPVVGHQ2GzYhX61y7YKUfbmBoQzPjgoVXnSQoZkU",
  "key17": "2NNw4NMvAZvbZDgAxwj1pNKGqp231rW8XDNMdRaLrHCszV2wEAExXJ1JLXRJfqrtFEZHrdLT4esK4HmGK1S1McAn",
  "key18": "4CRE5f1DojWxh1WZ6xiQRX4pzWpJJEFZRBWpxXDRFFz91V9HETwGqoLXtxWEUQ1ieze6ife9yhmXNhG8eNQdvzEK",
  "key19": "4k9x4aGYfm5WtNmi1mbjQW2CbyRHWdPGP6buAkXhjp72aW36z7xA7MeapTTqa8Zch8CE4VPMrG4E8vDUeRgjkNBj",
  "key20": "fG4ZMBoVQ64Ca1EyKJ5uqrBvYTfgo6ekJQjJNJucNWQSh5gnkefKSzXywhTcf9suWGfqVy6yC3npVfJ9pCyg3sL",
  "key21": "5vuGhoZf4wQFeXcd5Gi3BUNjpGySZhdvJRwFE5PMNuQPbQ5oDBS7CDsAzUMJzCXCcJG3jcxE9UCBMttCgPHv7ceG",
  "key22": "4zu5JjeAsU4MNoM7BtA8A1DRXNDApaXZ4urDS6ZTibr8NK1H7quB9n2RXUNBcLUBuY5PP29yWa3ZPWqvWTa3aoVk",
  "key23": "3teDQf43XQjr3GyYXDPXwwmv9F4ATXr7bEjrKAjmBUr6CxisKPie8gZJUeV4g6D7cyoVt578AsnBxVHFtsk96bp7",
  "key24": "2sdiCpXF3tUVBxjdC2GZyeaSqSGJmf77ocZAyh3vdM8eMzwrdY9xpDxUkfw61uJxKj9pQj2KhpmxvwjkuXiXkE2Y",
  "key25": "dMfRYEJQvE6Mv4VHC2V8WREpimwu3n7KvxZ92SnCFLXZQZzPVFQa2QvddbKpNr66QTwDy6pDFfQM9qcatXfyCXp",
  "key26": "ScsCjEPaR41g5UGKVGGRAw3RUEQh9RvAoZK2MSMiwwxSJj9w5zQHjWbXHuD7eLFTxBJhxzVxtnKC6bcUmhtrQEn",
  "key27": "Kzb8ncZNBecKDuXtfpxPuw2S2HeAXHhU8L4dJsiZbE5rG2qZyA8RF4GRxN77Gx5tPhjYY87qxEMye6UrwMQsXgR",
  "key28": "VM9ghebhdTQyPMK61AhWRUvVwo28zUb2jy6eku58emqqkuCt2SneifXn47U3cj4frBcTR5jvRezr4j7Utx8LsuH",
  "key29": "3JEhnMGXgJ9sk3DiaF5wMS7thKqEYA2U5rLP1ZpY8LjA9Wmkmg4SDvsG3W3VT6W5KodyXKVMvCQ6XK3viP8k8SUb",
  "key30": "3TuEE8G8mx5kquByh47Ad8oAJXj1vNf5RV3LhqayoRwvCKUhjE5GCta4Dhdpe1cd3fSChAwa8MPhUzE9w67end46",
  "key31": "58S1A5MEcDTNGKb7KJYhW4qEGW2bPdxYAZkE7g85PP9k6vYSHFqLkMpkG72d3eEJ3H8KqSkTo2n2Ah72SJSbCop2",
  "key32": "5Sv5uWKJz3XTR9dBN4KHYM3eLa1avLZq9feHk5AWANTBELrScE7T3MNai1L268cW6McsaBr143votEDb3Yk7JYib",
  "key33": "4BbS4DjRgofzHAv8Sb2HZhKoT2E8XfrdHCp1iBmHs6LZvH6RcxdQ26rJTJb1C1nztb9QVo7JX5fDw8tPSMmibkuZ",
  "key34": "4hsJJeSKaZER2jMtLK8XxdGkq8fJjuVNfC9rFNaXQGFB9PLXHdHBahghkYUNebAvhpST6GheXxH1BeBijquAGDe8",
  "key35": "4wprRTNaKcZQodmv3yzBbPVMmgm4ZD8QxquKdNvLakXZKpBkLspdTHnaQWnnUY5jKpbfMxovUUTTKtexDDvECX69",
  "key36": "3BuH671cehcUgzwtgDkxCQZ8CdWyb5Jqrideb8WAncJCiQYzPBpJVLLG76jH654JYyRXp4jBpj1Zy9haCgnTSX8G",
  "key37": "43Q7qa9pdRSoUSZ4hcDxBTcM1uGsEytm7PzHZmdxabPNtYtkbEE49PdhktcoMkUxKyk328viA9cCX1sfhaSkTuuR",
  "key38": "3gtb1NnG2LS484cSqfgMQPsEFKYPBB5CshgQqraTVBNaqxp6r5C9RmZoLjVUXqFM4AkpEwyKcZrBR34Xq8FFprfz",
  "key39": "5xHYNz48MqrJBgJKvssuoooqySp2z57tvVF69gtMm9dkaL8UqQP31hJovVMC3xXwf7d5YaBJmRtS5h6XFxKdGth8"
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
