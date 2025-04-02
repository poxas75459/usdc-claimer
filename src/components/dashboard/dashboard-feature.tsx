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
    "2nvsKpLJnGHBGY9Pm8AouXdTZEq43eCkM3Q6u82zoekjjbQ9snNvtzjcnZR71ecx3VngZ6dxYhfbpfgqJJu8ybg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDyW6j9s5TZX87phmm4iyCEXJAzTZP6ZvsECgYYrYknKs67ZnE9aHUgLintJpaRC4KcguVdZ7nd8zzzC7o27Qmr",
  "key1": "2p7CVHeGmbASP46osYezMCSHF5T82twPyymF8gL3wFJ7jYHW2f3nwLUWVXJyV9VwYb2gpRLgu5GTFy6af9kJhUGF",
  "key2": "21Z5Giv2R7auKctFw5CVsgnuFVyiXMQjNoETi6zhKbB3SgFzerjGnFxU3N67EjUYSwubkpJVgsZqBfXxbDUPTnjf",
  "key3": "5M2ntmy232wzPRwHG4Hx4FWFKRJKR1gryHaP9wkJzTfriHcsw3WtH3nGWSJjXFnKPqF9mUa7radW81CMhZyEgwhf",
  "key4": "3o2eNSxXfjqds4F7rn8YRL9RXtMZhCmheQy3dueP1VK875v7QLuYLothRXSBjUYmvdfWmkbGBFtSGC2C2gGTweqA",
  "key5": "2sxjeB2fKkKjy4kGxBsLWoVcsR9jpeYE9tbvM4f421RjXCSJbBaSJW9UnFo7agD8EpFvU59Mu4jcPPavkqj7ijqF",
  "key6": "3fyJxmeANk7N4oAnz7Sbgyd7znFaHdk37etMwPMCBE48sFrRgAuaCdeqgGa7wAnruFZf9sKs8N9ezoD5rnSERVuE",
  "key7": "4Swk6iCsxGxFQoGSYhvfKkAga1DppapjiowfKHp97HENADeZBncCsed7o4CbuCJutxRo3hf1MAAdW6a5to9aUspR",
  "key8": "4Zq7tjfoAg9eB31swEiKXZ7cF1rvx1ZvZ8BRCieAAxerh76r8pbWvt2RTVgM1YPVtx151wCoqwEn1KMiqejMbQRy",
  "key9": "2gJKs46npbysCgv8aSv71dNr1YSHavajpRmeS27eUtDZdbGWNykBQ3kCBrJBy96sXmmm3kJti8BVu2sRpzMWDrqL",
  "key10": "2jiMYbBeHMe5m6dLskpCZXn8839eUHaDoQMyk2v8GUV529tYgU3MyrPXSy4NHGEcF8quD5v4DV51PvZ7AEtZ46A1",
  "key11": "Ff2ymEkUvoqJVJKaosyuCeJd9pxuRYAFUdfjpcqbXzuWABHVRnDjLiAV43qFErdyynyaRQdsDCfuZMs4K6B5Cub",
  "key12": "rguKrC9Y5KdCjLmKgTFcKcWZTFifwFgGtF9P1aHgq6GLxvaoovnWEGgJDxFPWX3HMqS8PXpU2ATLPJ6kLjqfrFq",
  "key13": "3xa3RkYLE4McYXoUqTEp2LLRRUCKLuL9TiTCXt7C7MLeZntPHuN1zgDszLmCckuwj97JtUELsb3iGa7iUTypGHUW",
  "key14": "4PDVDQahkFxh4fqBHqaoTX2eDuCn4bqmgtrgjwYE5XWEmCJc1zzYztGmkhZ5ZNN1ALB2gnpT1GTo6KbAvSkU9Vhr",
  "key15": "aPkDji3YjZ5aSc8JudL2svJx931ef5iWEP45BJo4BgYmw985d2AAd8wWMqngooWfCgwRU4HdWTMSxDD8C1DRr6x",
  "key16": "4ckfhYZFgmdooWpeRXPRnu3d8xQqdDDSoLmDeYUW8HCKnheAo9Go3QQ2BFbnyE9T19uVmBeLMY9aGvwQyE5pWm3u",
  "key17": "62Z3M1xPiEFoe443UGHfaAHBNgRA9B13HHEUN533JwCZkPi4E17hn9S6LN4N4t19begegHfrUHfj5pmm43t6zM3T",
  "key18": "35KFVgy2LS5vYthpLHGh2MsWTNx9Qgg8jbAPdoaN62YjJcvD1btx97r75QTXuZgA8QexzvPRMe8nNiA96j24KrpL",
  "key19": "3nFmwSKcUqLMfdiurZMZN4bWGyYdXijAghp3zr5s4YbC8ESwK7batJM1vgWAgDV1ZyMjtiMMpDmuRT5ibkVFmXtJ",
  "key20": "4Vw4GPkeXyY6PUXSeDuHfXwiPy1as24KYYWjkR78bg9u2iJD6Tcj4ZnZCYYXNwmzZuPHwViUe31v3S4kWZm41SZH",
  "key21": "2bpkbAP2ZeY7LWkUyXHknj3HevwT6jbXcusTCiyKDYu6XBs87fdmAHNRS6GpStFZGkH3i2J7frwz66YS4t4TnRCk",
  "key22": "NVdE193yRRDP7CgRBmHqKew9mZeSTJWYqKdBaSzwLG2M8JekCCTRZCBteWXEZMmt46QRCreGhr5FW8YVANf6m5y",
  "key23": "4f51itDaq7a9DtrtSkHDRsFnSRmVMUX4wLRwXAeYhesx3csvKibpFBos813RjzKJ18dQq9YjGZtYNvB94EcS8Vbh",
  "key24": "2UuBpEL9QCmagMusHeLhiZmNrYWCKRm7U212WvAP1PG2CksynkmCDmiE4b6AFrVJktXsYzBKWXZdJo8akMgA18Qb",
  "key25": "2UTkHetTiw5uh1FEapetkDCHGPyb5f29JA9eujtaZ1YR4CcCfhrBHH55f5A6y2JxfGbEyPzonnmZbeHzhbqCh8DA"
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
