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
    "2YBL13xchY3L3NsX86YEzWwh7NQULYy8o5NFZcazeaz3b4WDRPUhpsJM2frekf2EpLMskcEK2poYkAyghXcDSW28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWqski5a4rd4xEGiyvuimTmwJEg2bZAmoFBT6JyDaf36xeo1pzuyB9bnqSxpd5JDk7x2CgUFJjSWo4nMNi8QuNX",
  "key1": "xAW7xa6nHYJqCHwhSBRWEshEjy9yGPksh2fnZd55557DWzox2cwmHFa5xFRKxbfFpeZ6t1AeMpxVJGm8EAuzw2J",
  "key2": "23fEtCETzBCPp8DgC4HbzmYPd2HMMBNCXCDTrQF6J85dZ3esqa7pwgsYYydXkP1GR9hUj5u3rLHLnpk81eTYhWpW",
  "key3": "4jC8FMuANGDqh1A8ZJDArkN9hay4BwVLbBKX6CnZet8LB4KpNxVF7k8nrjjaDRBjEzm7EbqWmtqRfEUhLSS64ks",
  "key4": "3DvaeXSgtwZrnw8sS8B8FZKLgae8JsoJQG33TW428SuqCitJ42eGXdG2wo2rC14EV5wBSoEpYZrbFtrDNXTUjDLQ",
  "key5": "3iLf2H3pWSEehaKUCKfsHMDacuYs4GwWxexHXf4djr68ukBgcJkyN5Bx2uMmeQ6siwvpfnyaCvQrDhTkUSRVWnKk",
  "key6": "67P4Qhba4MjiTed1h31NrbeVSxAYJSvaVScsJDHFtRmq8UTRHTzoVsdcaHYiEu4DPmMfwriMKm7EUwcSCJ8dW6he",
  "key7": "2dwNgNQXSZRUn6e9GfjnEKsTWLi5Ps8yG2hbxnYvt1cz9HcbK9Vzgkai2UrueZBMjYihNVeCQbqewBCE8mCuULB3",
  "key8": "5qNQYXx4bMx4oV8j5RhqDnp11dCayLWTh6guh7CcdgBUoDk16U6oX4wUQdjiGJxqqAzSfZZbbLSxrFt5etHThsPG",
  "key9": "3LiP9ohMrYCLFkiCgsDprfBH5kCv18UbmduD6nkSCc2qff2wEQ4hSYgpozicDE5ej9w6N6yqDjvdLQS2MVnjuSHw",
  "key10": "FCFVxQQdQ6KQxPhemn54f9JMhJdR9oMiZ3it4VJnr6cEawvYwAFzYgVr4HkKLsFi1ZfMQQKp5J38xWjiaLhX7Yr",
  "key11": "2XtFj5e97DRM4netK3DEKQ18pCsBchh7Mw777dw55fNyueCN2oTjdZLTfeSpesHyGaNpCLvzKXszgHSrSaSk1jkm",
  "key12": "4aE4tvxiAgJXM6QhZD7MCuzaCqcbmKCStHUGyQxS1aqNhALbdgBiB7cuMLr7Prxo1m61AMAVq6DTKfds2T4ThiYx",
  "key13": "zFVMfyibQahgd3wJ9VpHSMLG6Rnnw7zJjcWykAGcu7GpYrQGtNarGQMpFZNnNa2yXovKan5viFmAJRUp59nm9py",
  "key14": "UqapzwM9AGEkdiMKoYM1ZAR9pLre3623sjS5C4iFX26VvNLHGm6foVdLtDiRfMq3ZrACX8XcnkQT1mPihpZQU2a",
  "key15": "4UxnsacFnE1MV2WgQqy6GniFu8LLUDPRJVNbetmkT6qeXSpWZuxzjbCtnnebs2sbiwTb3tmsFvwHiUiBMp9yHXU6",
  "key16": "3mY8AgXjwx6GhXkiqedWM2i3UUmgSfGbRZ2TT5yHBZmjwMZ6UT5vSfuaQFf1VdUh4NaWxiScoNzD9Gd5oAhgaW2X",
  "key17": "SvhHvggiu7dGMneysCX6J6g1YzFFUnckv1APDg8hMT42dreKnm2Yjh6194XXrD5hy8mqkYHKKknNDoZZUMasGb7",
  "key18": "3rddgFUVyp7oDWWyiNTVWGnUTeQugZdASxkDkiniE1UgnsZv6zNDSsF1zyKmHDDuRrqH5TQ8bHAzsrvdDyhgZQYC",
  "key19": "GBcmu1iTi818GQFsz27rFFLzvwDrXDDbxwy99qtLqfWYXVAS18BzcCcTDfkDqVrYMxYHrBawhbPJrzzN1zZuh8J",
  "key20": "tbLGSGYRHZev67zK1tmzi6hRRCNyPB46LFsXDkP7hjxy1a7xGuh9LHUkFhN2FCnaYvVMatwHDKvxHbMA1C1ebDC",
  "key21": "2Ws41fwTTaiKGWUyDM6XRKfBxuzYpR689BLMD9DuXLVZxVxvM8Zahk2aagqxuDzJwhyCetxUeqSqchZo9m8BY2Wj",
  "key22": "3npWE27drpoCLw9PSQBEKoNdGxputqRgaXq1BP7i8iD2VGwTcZg8aPDJphgd4eiVoTV8yvfWJf1EwTG96oGtDw1Y",
  "key23": "4nv4DewPRSBikXc8q2efDHNdDzQqVcLmr3HdSWQ9vRMgR3w8Y64yiFERzS9BuAVwd3Npt7HVYso3gc99Dh2e5JtB",
  "key24": "5r7sAmqAkfeq5VxjbBNMN9sADFotAqAPRUdFPVkjQtQXguM1mGREv5N2FBE7KNR3ZU5wop8JSoCjurkC2xSjEbQA",
  "key25": "3XZ7wmGv1ma1TTMbKrWrcvgCHX5ov91DWTxuyZV3LwwoVJGguKLRYPxU4yPhzrsrVK6jbLDxVTXmbXYK5v1rwvR6",
  "key26": "3s8rZR9rhn4ziuCepvv59oEnFVLvo2wM5mMjyRL3JZGtm5biZ2LkWz3pkmFT6qoe57AHgnZXBn2oQRSfVuHUoVYB",
  "key27": "5xzouNRXevPdECyyi4rK6t9vJF9i611LE3j48mZUhmoFHemfwhRx9hW9ZJSiHhW5b18c85tcUd1hELnJ2CBFNcDY",
  "key28": "5iJknJEM6oVKXJK3x8joCqjvG6WvuLkefbWMQbMQAEQn59UfMqyFMFEUN3qJoggKP44gbDywjWN2RjKCiGchapMJ",
  "key29": "crNihXHnDyn9wXkbqw1qM3jwwSerGncNZiRafatPHzLB8Q43PgtXQCHQ7ywvDMDK4S5w4RdyE95betfin6g24ej",
  "key30": "5vy2uMFgzMmYxTstWK5weTHxLo5W7wysofqoBgsJj7qR53FcQBEVXHHphRmP4bVG5g46h8JsxGHEww6zPSMV5X6Q"
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
