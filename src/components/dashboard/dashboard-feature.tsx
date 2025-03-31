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
    "3gAzQU61xfnqZNg2BtiWVn575ndxAxXUhNNZ1Fee9nLg1WwkFXBoCPXJfgY2W5c5yNZUTy9E2vNSS5Gk9QZcKJXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5UwLQB5mypjhqePRvEAgCAWkWPseeXv48dtGuguyrhbYNsnzRs8sAzYdkyjq9TJPZ6MGirnuVCZ3u7uyLuEdLX",
  "key1": "23uGuxWFz7sZkHxSoX7AMH9yBewA2LFnKdhTQf6fh8PeaKkF89wpKXDPXp3zBdipitm99CRm3zuX3NVmAhvBBK4g",
  "key2": "3wLihK2tiwMPDFzTWFV6YdvcmUrSYdfVoW53EYdyBD6tCfFFcQPnSGWbvEGb5PcbgqS9CvMjMZte5AJXhP5Anzdk",
  "key3": "4QaxaANH5bR3nRy2nmaNYuovUKgLZjtQUxjaGo3YhrquaMQK2LnGcbNbDvKSBLn1efyqWwRnZFrtL95mmmjJqMkS",
  "key4": "u8dU8zAYTQ1xqML6w9AH2rtAPBcGV7KGVvETWgWTgNio47UPYMWzBehqKiage5D9hyxCnVTy9CG3E6nQWRKBmfy",
  "key5": "65Fo1GnQJqcWDwDVFHtXLbJ9CM1j6hyhz5NVw448WwxdE79r8ZGRQL96mYhGQNhmkfq3Eemv6wi5488QAzEB8Uje",
  "key6": "2cPLBCUHc7KKvFujrMXjEk4ZUhp1DsAxbx2oYMBeGERywYphn7nudQEcaz3NL6JkUeqieQsbPqRTkKPdTPwBD4a3",
  "key7": "7bEinW1PxDn8U2bpcAGsg7gkogMxuFmGH6HpzK5uCRf3uyHaWUPGYb51s4iDo6VbGhkwVQpLS6UpyZWFfBicb2J",
  "key8": "5Gssuc9UhHqEbuxFCFD5VBr9eoLW1w6TAhsZFzg7fbN4tErRXKTdPccjiVujeULD4VUnMvRbpiwNMTW4oU7sqDEA",
  "key9": "2RazsNEkfcAYr8ST8KsUrYwZK12pPzCMU6sqrbssGQK34e1VdtypmNbvh6FHxxYkaTqDPho3rTttygBcG5FiJMPx",
  "key10": "ghMtyK9Bo3XVVrAQmXH7N8oYogQ3NRmu19Biq6DzjXigvgvFmx15mjRgm5r5AtFHVSRMirEtUzRWxWSDjiPPXdp",
  "key11": "3HQx4uCrbn1ZeSpPEFQVDc9PM1pSMkoPRHa3FaFgukyMdqPhQdZEZPdzDqEZ5oKUNua5Hjx4Jv8eKgeeEtwHR777",
  "key12": "66LKsWfQS5XrHtWxw5D9Zs9oszwnQyZTLadZkJNBJp6XF5iTnayAS2psPH48F2yupZUJWVaS5a3Ed5r1avWGy7mS",
  "key13": "5yUFashTpoMSB2sXDwYiMKdPrq1MpiKC3aVHbbJrsDq6ymacJ1HuLxBUT8GP7MftLCNkqBZCAA4YSeShABjyBQPd",
  "key14": "iVnvhjC3LxR94pwWkZoo7xKhJqwiZPHz1C1d7F2QtM58j8RWoAwtVvaEef2gsazHGRLBzzYLz62ZpgrcRfLiHBt",
  "key15": "5oL6KN4jbwV3ex7oZnmJNiMYv6MyfYX8nfhgEUMZUKxki1wiCh3HwNThuK7ktrZBwrJ1Vi5nU2WwMFW2J6KtS5pp",
  "key16": "VzLayeKk5EF3H7GwqCZme9ibYgdbrHjQCFi7xRPwrurbv2TmD5W5rDVUfadn3tLsPrgPVLXeduj3Knb1naKRd3z",
  "key17": "4EU8QJhG2eBjBwk2EB9Dk4oNeqUUpeSKek1sqYDZDKYRbdKfq6txjTw71RjwvGs3XU9rbdpa9YdZb7SKNtD6Zw1Q",
  "key18": "4yh26N2hPTfrJtfdYvgme87qEwiusTZJVMiiN7XACCXmWesfwiH1NUr6zkMPfDUXq8hKxSN4x22wPNhX79a5QMum",
  "key19": "5SvjL7i3KzMt8MVtAkbGN8tUBn5T2ScdnER27foba99D1DUPJKHjcWgodJ4xEwCgvE6iSX2YW7X991ngBrcXUVZQ",
  "key20": "5DjX2SGWjDNMzcjAsqVvMsFU2ZKsEFAwH7qrYXqKPJtR25aECh6AoEwwryiNStyMq7ZwQnSfP1oWeMZALQM97iCT",
  "key21": "3Y3dHuUtqn5PZgAFWuFyDT5KoqciBzMAFZYgzMJtkJW1ut7uJ74zLZx93qnJ8JXcJyVrmmT3kNzumPY7d5XZ5HQF",
  "key22": "2ChdgSjamEMDeH4qxEMhRwgkiDJKgp9bWUWUfrSGadkqPmZdrj1oq9pEMcJptXHLdP8TXXVtqLbjsp7AxtkSHShv",
  "key23": "2QRpQ6BKjJ6J65DycY3zZpyDnUANRzrWsWg3qKEb9jpqh7ezK8qPGZHMDsG8PnN3X6umBJChxs3z2EEHdUSV7Rcu",
  "key24": "2QtnBbTjWBFztjhnt8KatZeR43WUC9kg4vfY6XKnnhXZnfpKNeTmjSYV6Jihu5Bu44trRy2mSeJSf6kdfZ22B4TN",
  "key25": "5SUBbreqdwwNz4mPq5hRiXDXYCyzVd3i2BE41nCErSwXd5vP4HrzCwxUGXfabRqfbcDukVn397irY8CEZzHTJ24x",
  "key26": "2u9kXWx1cnKUaQJHkMGAsvmbXLLYTzFV9XZuR1C2GRK1m6R4xFvVh22ty7Nc46gEip91WGGjHJYEzYx4QvqgKPpz",
  "key27": "2kXBR6aUCAHfBh2DyQjYCn6bg3WmogpNJ45B8CTfRFdJMoKvFfQ4wi1SuvLoVurBgYvc3DXYdFRH1z1YVSEvXgMy",
  "key28": "32Qb7MMMonrF3LgCsRp3Zx5U4supg2HVHifU7QWBFsTikTGY6XcXqxqPnxmn3FNYigp54mP5Z6j5hBwrHquWRnVv",
  "key29": "tUkw9bpEJxFs4EJTJzjtVLVeCN9GLu99zZGn1mqGWsHWSsEfdGfwFuT2UCVftzZdSXkwa96d8BNdV7MsY1Ae3Jz"
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
