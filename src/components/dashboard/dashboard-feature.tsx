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
    "3CJWXLdqgnptDFe83zwvUbxgkzvwpmukwqegJeHAdLf98pMJDCto1eixULo4GJ1JiMa1fsk5XN97uVj5Afgq831x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCDD88etMGVij6kQrJfXkx4eaXb98dYErDmR7GcCJezkZZ8sghK78vsAaQh9tvN6WYrLMaQKNZk1F49X2NgZWyY",
  "key1": "63SztoPCtc3meThxHiW144naU472ryLFrHEm4NndSmNciRJxKNwMy1eTXAaGqXWG9qwDVssmgC4YGhP5xRHaXg64",
  "key2": "2peyWmDG5d2GXMpdkUf7NzLpZXkhQ1uM6rGU6iGVdogGyLmgzH8hUkuCa5Hxojw5xRELU5Vy4Ljm4vXNbCci4VRj",
  "key3": "3MS6z3AnUniLkLdmUdVqyRRq8pg3MUQyCTfybkvFei6x2KybKZ3cY7eXoXoYoRFmxAy5YFdEJBma3zXUEA8pDqd3",
  "key4": "2GqjzyvLfLeswMTaRzYfvWQoZbitN7h8ZTfYJpt9t8NbFSFnrswP8JeTK7cRvCN8aRkcYmHwVXWjqN3kpn5JUirK",
  "key5": "46Y5WZGgnooar6yUCHjJuSkczJsvUJNeV7fA9S3yAARUAuJmPxSbkc8AGsZHbuS1z481npKkR9yQxLcy1dWzNtqY",
  "key6": "4eEA6Q9t2QitkpbM5udh9yDsgMracxUbZnJ6UyAXWnDGyNkA3SfGfpCDGkMK6uJUGFiAph8gqMt1FY7tsW7arwDy",
  "key7": "4emwSJZaufsHHKfUebhUgPrSKteV3xp6U454RqHSXZAqqSo3oZiPtzpcPuqCpXL1zMusTowWSz9hVoAypMDufKdn",
  "key8": "HPMSRCoB8utqFpV1zp3jpoyxph6NNJhzoEYWcFpiEPRZXtBPAKi2c7y3ZC5t3NFjm3kGpb5p3ssrj6j6X9WaDzP",
  "key9": "5NPaXWB6FHvTjg4f2PBX3vgd28kgCzoYcQjAKcLxbBUo3bJL7daLA2F3S47kvnd79A4J7wWd8X8efJwjfd7cfDeX",
  "key10": "2pZh73o778ewr5eF8vhDeYaLfDsNmAshckwmy2LBZU6Xsp8QxnmugWnX3a3rSPU6WtE47dJ2CWgqNZYRnE54szwj",
  "key11": "2DTSCXwS1R9wf9LYg2EHiBnPbEHXvQ2rKU6N1hwwCgXViY8jVWBTJpxZrwSzJmNbcwrRrdyMkhcbctEwfYbs3ZMY",
  "key12": "4CeAHUzrxJCSomr6w1oKhAqVDaueKciKWpfgjXuG1CXw1UixKg8q8SALn2wcXMURs9iD1CxYS5eJsrRDfqkjMYb6",
  "key13": "HKU2HQEGUWzpGN4i6rb4FwHt3tb5JmZNkQBt7qE9bgxseqFQLa1v6H1J8eZDTdtkLQun3xcwfYuSk34uJrQTN4u",
  "key14": "51payjLR6H9a5b7WW5cVR7eLdrTcaiFcosUWUQKKpvo8gEsuoG2n5Luq7tHvDiUhh8aFJi3tQTAqKYjjPBgmtZju",
  "key15": "5NWYQVFEKK6YG3VnZ4yUWnaG9eiYKByDajPodLmzd3ucpfkJLm56BRygTPduegVmCqnSvk3HbQhh3sFr6PeFGKqH",
  "key16": "THGUpiTYRdF2hkoNdu8zkBjzmdXszLd1diJtvHUt9ik7iXDGzdEaT9hmfBSxwENyEh9xDkdPc7vA8HGhE3tLrro",
  "key17": "3C1PQuecvgTZJmgq8WwUoPYT2qvTrnTYSqh82jo9KbFrCL4ano145j73rbmFFojEPcWCk5XTVcVMzWbrPrdmyuZ3",
  "key18": "5JT4zLbwBMtn5SpaksxqdHvt9KVZRwDD18NwsPAHrfyhRoJoKWczv2PMP2Sgco86TugcmHgUhq7gFAvpjrnEwesk",
  "key19": "2cjKK8qA6t4CHxqaWaeehn2AThqwkjUrp2dabUaCM36cmBvtiAAeH89kxoT2H24Tc1BwR8LYxa6jnyYwrQCkJ8Qc",
  "key20": "3LL2bZn8K4jPgtKpzDFeYmMGYtxvtW2eYxrMVDAA6TExGvM7RDksN2GrnrCyKF8chRTWijkZ87mmWWkZCCwjG6aq",
  "key21": "3hBiJGMGh4kmc4TtFoSdZaeUDdCkokJ364r3rwr5GQVWW6XZzVvWRTaSokLcJ79UxjrmAjNknouhhStfbHksdYge",
  "key22": "3fqZbA5pR3fRaxhe62hkFchRKFwT5yN831WAjBv3WhFCQfJXNvXwZ7KpEdVYYwadK7zitLAo8KKDeBHRYADnNERf",
  "key23": "3fXNuME3NrGUhX9oEPakDUqayHwzHrfrw2fB3ZhehCgf2YbKCpqmkZRJ23tKBgCLHKXeFcAKhiVi9P14fiqXcEoU",
  "key24": "4XVEyVXSG8zgnsAinix1h2w3Qbfk5LmLv72dWvGKbi4hpZDLh2WEVXFe3A2oq4FtANQmHwRxCyNB1AdQyHoebuJQ",
  "key25": "4x7fXvmpaoPf1yLJrnihnsEjjVDzzmBVdxWLJbhF1KtPmMaQsiCyTc5Lhqch4qQhX6eE8SuJYtFavQKhWRVvm7tr",
  "key26": "4Yst4TNBsrJPEWrLW9QFqaquXqS8RdQnS2wzD33e7qmAXN3aKvdfHkmAZRxNuiM452jRn5FBYoB954YkwgTyyAts",
  "key27": "5TzxTStCHNxg6H3aKXWZrr1mAxW4EG4vMzeUVfQ9vrUmJgLpRDk69gcVWNj5NTNpiHY3sbnoPQEKsVX6gTuz6S3d",
  "key28": "2CFqvmeZayhbJFUwnWvS2WzmV4tJLdHfW28Rf1DydYZ1CgcWqCncEQo9sz8UV9Gh8YRMrBcVCZ71fwngt4MJ9c9Y",
  "key29": "4126rpg6kH3LQMjxgAHWx1GcmGs337k6nhErTDsszuqZgEFRLoXHSc3arstXZyrfkPAW4EGmwP4boKWwavGyLaDz",
  "key30": "5zQt43xuoUhvMiHHMZDkEYyZv4q3quNg4sLe936Trsm8HpPxdkpK4PEDGKeKCijoJXzi3aQLTzFxSYrdZa2Eb21L"
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
