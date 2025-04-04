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
    "451htkS6xuWE5V7BGn89JaYXm81qwYMFF41SeQLUTL2Jod3hE6MfHvJ7CwrESAS9SFqrXMS8RLSXVYAXyEtX6JEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gm3XBaznNQsa1UvCAN7ThUMuwByYaEKidLycnjTRY3C2EV8JnAAd4JxJaRG5yTn6cBB6Qga7QFiWNoH6zxgzo9v",
  "key1": "3FWPePVH9skiuxgDSwrmS8wAtrgfiH4VXYsBxokKk4VEvF4oseFBUoTN6bgRp92XghDszhL7HNS2U4WqBRvncgCH",
  "key2": "26igtMfmvfb7QDJBoiCdRgcZW47NmMQ66129nnLDetFiAxANZ2G24UwXEFiPCj6QZerRiY746xA8JqcTDn1ZNU1t",
  "key3": "7LdmCJ5ktRPEs7fCstmBNHS3mHLqLQsQNshDt9LA66V1ko1WLhEgffRoNv3VN9fMTbCjW7GHk5D2kYpVEHFGPWc",
  "key4": "3fbEPHnxb1fgkiHQR9QqAEEj4eqyLPFQrEopiJPMRHFqXoVLKtRizysnsoHqpLoMU2HuivTAn5FrjuKprJJLmkhz",
  "key5": "2jApahgqKnnzn31XrUazsa2usaddLYJhxSNRCZ5rLGhYWJTBUdKXV5mSibLuc3C8LXCHdiw8Wm4C9u8Fa1QQFPYm",
  "key6": "2s2ZgNjt9rmSuEqfz114ViUM7EsmQ9aqWVfux2ZVc9eXuYzvkNpU5MTj44RFrDpxGpm3thxzKHNEbfKZ1Yi5dFKT",
  "key7": "4QDADYXg9CQDmD6oK1YU7KN6wH9ezHMZhFSSHxR1nQfD8Ps1gwhfmjHdm7hPfrA1zrbG1LJrqxjjXvLJEK4Cxf9C",
  "key8": "5rht6qSJB26NjSmdpfkAMRWzfxnTmo9KA1Pw1L2cizd6E6qcwzRPhmkKSw1erhrtfTon7PxhSNfnFD8XmiUb7cLN",
  "key9": "VS14Q5DefyeV3H9eJUDyrBUnkuyUrw9hUAqP1DqarkkkTft6mn58yKogUegfw9on2rgFVEZ8URZFT95RnqHXnyU",
  "key10": "b15e2XgMNxT7hTgBkUwCiZJEHHWCZm1nC7oduxq5xQyvNvBNr4kDUPxLoq3QXnDs7NE3ZdoUKFUpLBYTSjaT7BT",
  "key11": "4KKyxoD8GcXz9pvWhHXgZKhkYTE73GZ96rKC142AS1PBDdUjbkrvJw28pZkDMcWTNQDQsZ2QVLDqfu8E3QJ2smYx",
  "key12": "2ZeDoYiRUgka6qdhXWyKkKqM3b2eLHbHTHFeWqnFDC8NVq91WeVQP4Pyid95eGkV7y7xfDhDfSUWRrykeZpebRdZ",
  "key13": "3Qa7GeuKbpY15P41dmwabd2jcJGNxPJLEAQ7ZaAzMwDVYtfm4ULHvzD4vZaEvDf2m7XQJamyDSV3ZKKwAQraiFPF",
  "key14": "JdRThSHbQ9Pq5onfJajxAt1KAf9zRwtRigfPnUAgQ8uvttLFUpz5Nvw8Bw6Ro95EUxU8rRCgZBiaG1328XeVJat",
  "key15": "sdvkTS3Egm5zRbvtaQ8rFpPEPavMkkHvB43KVtdaBXPLie4XhWsGTosGtamxgrxBwwdTacJo5cvj3ejtJKQhTe2",
  "key16": "52xVKaBe37eJgieoQ13qsPUrgQH2XQW5Teg4swrsnsS1X517MBvfpnh4n9x3E5cTaQvtjV2tep5sQC3xjDipvRu",
  "key17": "41Wqmymqtxq5xkb8g7zw3virnYvS3TPYKU8ToQfQpqVYpieq1BahD8LK1K3Wx9xMQL7bThh8HFiQuhANkvehQtX6",
  "key18": "5nGTNu5LFfBQbqumNqKVPaDsnYkiB9KedEV4jA6F2fmCELqWRBXHxyuunqn3bMKoRqQAPrHuKL5QxypRDH9UVWAv",
  "key19": "269g6y5nSnCxtprZKiM1CPpqvENQeDBwDdeLhaYxbY4e2TkzuXoMh1CqW9C4LXPVbq9jqPTFCJzjsDKSeicpEEdH",
  "key20": "Zk1iMFbTeLTBaAbvFK5TXHyyfQot75jykUUJ3SG62zZ8awRy1SMuM2mKEiNf8ndNoaPZPm4JKhJRZBy4ZYCuf3B",
  "key21": "59XuLfZxMXLuvjHvtuKHE41jf3tXZSEWKK7MaCWZSdiVTMeKdvGYuWt6mxfd17pJUA2SuXb5dYhiSz1JQKsWSeAR",
  "key22": "3PL3LhJv8j3aAg6UBLmvLq2J6AzixriU3orzHhsso2HpPBpCSVqhvdmZXdJPQ78YjDHbJekoP7peVhh4KUxNdK4Z",
  "key23": "5QZHXfSXLwVtVJUcN97Cae99Q4AAhvmHcoBzUkxyZJFPMonPZDEdoiqgEqtRSWBumtEsLehwqspmnXpMMvrRZ6YU",
  "key24": "3UbBVotTDMFTvQeSfZpwiz5JkyrPdBa5Do7BS6c56fPE4piRr65ic9xL8GtdAxNRNembLRrKGvxTnKbD8HutnFjB",
  "key25": "Ftr88QCgeFZiCVDN9QEkUu2rPt1mRSDuW5Y4Qjfo4bdSHjMQrZQv1DePvvXHjEcpepDJYWCCGyTrqbLNAgLmxEW",
  "key26": "PPVQJEjapkCt71vW3D9gK534Yi4QjpPQ7q1uTbyeNBcDFpTdphePbVc8zzxDPMevkCJcwdBH5FDH1D4z4xci3Qv",
  "key27": "4oTpRWGyMKb1c7c2XKJ8Z5SS3iPLqKzxMbek5tXbw86mzBVKNPZKwQPUvz6KAoPiUYs65xKNZqeqz6am1mfRpxWU",
  "key28": "3NNQmtxncQx29pPANuXBKNX8m6PSFaWCkV3QbPqAb4dnh5gbgouXQuGUPkRZo8WciTrueMcLJwMMtUo5vZspn2kq",
  "key29": "4tBarXXUttjGJUGdC8FL5RyLCzZZNsbbkSZzPLzGY4jZ4qkd5XL6S9xPj8ZvSHRMf1B1aRNT2PdzuWejncEfxAbB",
  "key30": "2J8w9Yxg6HBKt5zfxU8wSYb65i6ckmEXgBtxBL654Uj7u6X4UQrtQws1uzP1vgvHLHRGrGKuF9WtkHsxhM2MgwdD",
  "key31": "5dh3BrmN8D5zRn83tC9uN1nPrbStgP849BnyFQE7g874naZacDMoicVDhwdabDA4tgGZzGUE9Lb14UDW5osu3PEm",
  "key32": "2avdV34i3d4enk1HN9QriFPZFbrLPyagp2WcXYuSra3HmwWiEHEUfenREjPfDSbsyCPT4nBXhJucYFiQ5XecGUo",
  "key33": "EKcHUs8L8YmL5WxLniq1z9SX4FN2mbmZaqfVBtvqqhkqUHCNuEcrymKUTEkDWLVu5b3xWhJkYubCoFnBPEWjRbp"
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
