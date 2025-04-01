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
    "4kc1tJFcMeHXDbuUGczjrvHbSUi2RLVDnJfmYGmPpM2T2iQANU6DRSBQExUJHfeaTwVtNRqeKkHWvod77K9BttaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uzpv962XQuJqBw3afTbeMmMxzWtKJudRur1oi2NAVdTjaJair8fVvug7ndGJqeC5RMe53Y1VqK57fysD4vKKhnY",
  "key1": "23TyzDQzUiUfoRCUhgjGJ8YJezrodvRG3BP1gkZLoRneyTWX8moZHccnUWmgGJTi6F4br8DoUAxE4UM5qWR8xz98",
  "key2": "2Pm8bk4AzrEaDkwgufxTqKj9JSxdp9zdYSF5S12gPBiepQBKTtSk7g57zie2eKWdgNSnyJp9MCyPUQgXkr3nPGpg",
  "key3": "4J8kSDXAV2yaLvBr6TFmPNY35pLrBsGnNWmwzHEwKLtgcShFee1iU9mu1xTjeh19ss8eecicJoZdJAaejwGmYShV",
  "key4": "62Q7neL13jXWNWfGV9RpYPdHfGTeDkJgQcncAg4BrAFQBAcWnTN2gMPPmdHGxrFhSDd9RPqf6UUgCRWMpAgpZLRV",
  "key5": "9aNUDQxgP9heifdzQASoBES9ZZz5gx96EY5BJnbnucJE2tFqfPtsC6GAMcZjj9sopZmETuUaX1NC4aHSpm991qj",
  "key6": "3xiTG7SU2CEcdT7TdQx7cfpK6E4Xn7RhdMEXxG9rLx7ymuYiZANWjuaeweQ77dh1iKzhKJEj8f98cZN8hw5EqCym",
  "key7": "26hu2onjwXMk8h3Fp5KqTSEv2FEbEKkikJc4ebfkCUD5iSj7DyErwBo8Tqs4GHozsxcRQCkj3gLRLgLZzSQxa6m6",
  "key8": "qW1oWJpn7AkJ54kUAhNn34MNfLC1pjBQSRWgcEY1tM1R7svFpGQQMqpiFeovqF2N9VvFbHr8jYELU84TJaskKUq",
  "key9": "4WRAHCDTziMFdf68UiX66JSZL3twfNao5qx64pDxfJHsyUE5zaqhvZqcfY4PrKnDogUkMrvF1tkstD6nZLgL91A5",
  "key10": "4ph249kLCVjXkzsTbkDtoTpNX733jcBtrLJ8fAuJmuHNvs9N36czCTAsZ2oWux43UWs4LBHVrdyUeA4QqQmCmWn6",
  "key11": "4isR6J1UgHg8ryaQACVcs6i6SqqqVGrcnfv4nfhK5ky4EMM8vZKNnwrJG4MCunsPasLh7inq5YjRh2jnVXnC2atR",
  "key12": "57qowq8i3KsAwv3woYGXtbDc8FciK7u8ZG3qDKSaKYbVCCQf53uqRBcHg1M4P3zEufBPuMFWMeVznkaBDXbWJbk2",
  "key13": "5oYjMYAo2J3vwUmeT8dnVyJTy6L4u436GSBwbnXAp82KHA187NFoJ68W5uotpJ86FrLoH2iEdHNX7MpUxYKoY1Fm",
  "key14": "4tmFJ3UaT2Za1P2GbTweVaMLGRMiqmrKTQpDggWQpv8VvZCBprXVQpDUhwVVR173XNU5c3RyhVCp9agftToRigxk",
  "key15": "pYJoiR8b1Yh6zkiRSsBEHxJVAPGSbV6b5q11HwnFLR5UmMZSWpsjMpm5QneXMc5636KRrbiQoSmEiwhyfeugXHD",
  "key16": "3PmYnyTWkpWvNZeMhXxws1cu7mgtAEsrC57kPW8WPNHD6AwN6skGd5mtkQygXzohh3oyXtQsFoZNNsog9XpMjjGz",
  "key17": "52uzAspsCpceABqJCioSr5u8UtHYzfaUvTknfcVmm7J7n21BoVCdJP9m83rPZZYNfVZRgbyTCiLBXLZA1oiwS4dJ",
  "key18": "2NRWWtpDzwXndKSVBqPMB815c4rpShqTd2V36Pd8mieF7jhP49JyC4LSWtVJkGzdfAKAZGk6zeLpeYNniqwqR4gX",
  "key19": "5etW96gp7y3vhVHBrzT7qqR658SENTwTouv5Rm2iQWaWkVGKWkYejraWem19PmSXh67nsiKfusrggso4VcnVcPBc",
  "key20": "343Sg1ANaM4VyQBAfuFFg1MQZP5TorQUnVZDGRXXqwLmCuhsVTaSDNyFooGFHHygAtxwUigMZEuSxLH9Ux7JmVcf",
  "key21": "4Rc92MZqZubtJPPbrnk6VeQeeBaVN6AqxWRNLbHUbjjMe9Cxgb7Dcmna8hFsjtLmuD9Ed6766NNCHBCuJPtDmwCm",
  "key22": "56Ty5fAocvbMaMDfZtSjUJ39i1XDYQamStQtQEBCQUgs7KpeDdiejzX3APpEH9UkBupRxT81xm5zbiihyErK8JLr",
  "key23": "Xqtp6SoFUPSLZiwZx4ErK7gzEKV6pYa1aN5Cv3mttLHZnEVWtcvRaNRfB3SxLYyDMhAFpzonXpCGLBUVm6D8mW4",
  "key24": "4UsdoEViG78v7HvfgxD14FefSkXWWteeVp4iLmCbWpzKEkihRFV6PiAbKwykhdqfFwofVaFRJhVy2MHftEBDPJBw",
  "key25": "4TXxZrtmYogx5mNS1Tvqp2pfbxcERNzow1AjZCMAk41y9hiLnS6BrAgSMo8n4iuUuz4Lx4tHR2BrGs2yU9wh9i3",
  "key26": "3Uk2t8gNJx24m7XDcPB9tVgNtrwpWQEnwJ6r1HDPvwSanuC4VPpGu8kHiEVAnudfArLtAj6zAq8d6GToirPUK2a9",
  "key27": "5it8axZtmt1jPARjbyNKZBg1s4oW1uJAfeKFiP7peuJ4vs42pYS7PeLhvUPKjFo9To7aEAkr5vtcpoUnjAV11pca",
  "key28": "4Pq6ankuVzFmHvyTyyE248Tc5y1PE4vZTzmmKV1TeC56bMskDNp8eSLZXkL27T67eyEzFAq2b8TF5X6Tm3niSvsf",
  "key29": "4EQyHcFux771J1uETh1aaVkfMLJ6kmheiqKYuUzs5P2TqsFD215x795LwDC74s6G6VC2p5N3VNWNvZoYQqbcHRYn"
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
