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
    "5RpcjeD6gJ6tafBoxrakW1BWZezjUhgcEeVagiYpwxauP2qeod9r4oXJMKyt6MezH19YDeiKT8ut7zS9btZd3yup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SHvrWW4GUGZ8MmoPGEAxMVDrnyUuYuGALtqSEDrtpD9YgjCfVZmG6jTj9mP6NfAkcDvHWoT8SMmm64Qg14ur7R",
  "key1": "4nnXKAg7JZkGqvQJ2i3ay1Vyu7uz8EV85AvWzj1cBR956Nm2hoUakjyvi4QSqMx4c5DeazAXJJChPmrm9bndiCpa",
  "key2": "5b5MyoYi9n5RmFCZfwVuizgEja8pQS7A2sWHTU4VjN15nUaQ2RH8Gy9GnaYvQmapx4d36ZxcFYf4mbMJqQv2dSS7",
  "key3": "3aHbjNK1r1pNsgn2yQHcDW8x4Pp8Vt3wYCmauVTfYLQpPWTaSphXVyqo5NSuSd2FMQcuowY5WRNc1nRNkRe8aDAo",
  "key4": "2sJLVJwKLRa9o1J9TeNpMyUNRv5PAbP8Rk7krkbWBcR356PsvEVo1JeXwDek8cn5JwYVwPKDRzXDJoPv6Gmb1Zc5",
  "key5": "2zZS6Z58ifDqmtFgM3LD61KtaN97XZ87CnQg7Yj8f4QtUF3NTf4G9h67saF85QZt2RH63JAqKrra6i91ev65bW4Y",
  "key6": "4mnK9NhSBjZncekNz1cNriLw4phAnqmjP2tgMGhPb8Cq9pnwxRbXUkiK6KJAFZc8nH423sXNdHyNP5W3eXpMoHK2",
  "key7": "3YBT9cWWWZhbrUVKzJ4YnAfjbMfvU3TXSFoxPKo6MVPVrxkeoA4nuFuTASY258SNbMoHF5nsBvQr5t6taSjpsF9H",
  "key8": "5DbQsxGNPT1oiNrrAhSJTTzpMC54DsDXbNisSzxo3DsjtWtib1KEk4x9GUCEzF9tZufhTM1AY2bw15LLpxkwVP95",
  "key9": "5rBNN1c9jBerMNbkJ9pczUKZgkbaERvb2PHkJLLnFZFNSWKVBbfiMwLZNvqcuD3RPbpfSH6q3WcfaqNPQfLYQ2Wk",
  "key10": "4pqyWSA4mkJy8ngEEiww3iz4wgDSKDorFAEq9Y5xF8FTjb3BKtevH9gUv63yBmbLWvmkQKxZkMaWwU8hDTZQjcXU",
  "key11": "5QyxezcwbT9HFroRa8CkjkntcGHkqNgHx1zmi11HF9m6viPreZ3Ek6aerViWSw6VaQ73kVFCzu5qCHuhZU8mRaRS",
  "key12": "2xnawVonEKwZTVtq49Nhk7RatYvHt8K5WeYWQk8Srd9FsBMTrEBeADM8qtK9AGmMAw2kPaxfDT6AAr4w9UjLfQTT",
  "key13": "2veTe5Z1FhxbLNiZGFXaJbBbG6MwEQqskFHqhpXaTdiq7tXLPuHtuMEv1TYWiXPDcvW4QoytkVwcMFTs4wd5JjaA",
  "key14": "3T1eZS8gNDdzCrTRV1UU3PVnXkPkcyqCvn1imYDuV9QHtrb8vbLV3sxnMFoAyzcnr86odsZgZ8kPCaGFYmghKnLa",
  "key15": "2KfNTWJutteRNgbcbFSXXmd8ykECoQJVumCreAaP7se2KLw7vi8gYDLz6BSjTdjh6hhWUD35vJaRYBhfWzKmdL1B",
  "key16": "2cfRriAZjHkYn4vyzEUqMgwQr314g1kT2Z3KtXdizP5HaVwTSSLgCaHcESDTvgAHFMfc8Z98eVooegnUkqaeivUB",
  "key17": "4vQon81p9u5uiTV3xdLNMfZRadWi8uqzygkpbtKFzqB5LpnJr9z2UhcRAuMSbs9aHDv2Y4fBizrCaCNgPQyLnF3D",
  "key18": "2wkoS3KZ8x9oJHM16SsqCMic8PbLjmhGNg5xa6g8x4Uft7xEGDfT1XgtvS5UChJeRgVbQp6X1guZFPsfCb5WbGXs",
  "key19": "5oKRXuU2MgJXQ1Ye5bznLmauPgom7NT7CTvXm2a3Dt6jNjmJDm5dQi4YNEMha2ziKtRnoaHshTHvbF9GzWJpaKWQ",
  "key20": "4pHxVnDxAzZePMQiMjSkhS3987PKm46ibH3XDknJ2ef39zwqkMjLqm55zzAw3jQSsoVTc2ddSxAq632JJDDUvNNA",
  "key21": "46k4496EPE8EZcd1SKR9MSFadWbGWadFzDzWhqDbGZVgz3n9BTGrQGcBNLS8ndpgeehKH8CZnXtbaqEcLu4sGj6z",
  "key22": "3rL7aAQh51atrewGtSKCJDuKaZLvgtJtPmYh7CE4xzeSNDaxZWS5duCndW9SnLCf2QZa7ufmBzkfsJfUP6b4HHAv",
  "key23": "wEL2pHmd1BkrsoRqWAeypWet7SCxThkwMDccRrNbZbEhEHj5Z938x6VAHkfsJ3vXDB6MMargS4wujUNoESiZSL2",
  "key24": "3GWqnMgxi73freLR9KzDLwRhmNBGRp9gEyM87JpGXgRfqcfdTXxSXpsC6BAtLFEAg1cDPNCduBwgvhjMGLtQs3xq",
  "key25": "4setRYMxxAFaU1buzAR4XftJqH191XhgZZtBQWrzZj7WCEo6EmSJG9zAgQLhv4BcjjBuEFD8doi2Jx8FUrcZPWfK",
  "key26": "3NVSb3Pmzjz4R9jnkUBxrdxsPCzqSkVNJoSRcG6Ei6Fq582YrvGzMGMbwGhKLLBWdbafVbeJfUWzK2Lc1MEzcEdu",
  "key27": "54MQjT3VpPRQPPtrY9qzZGvtS1eh5Y4jAJdz3boTAY71aYFXoT3wkBT2kTjH57wZPyNPwiUi2AfzMBJzvq5PRwpj",
  "key28": "5PKzxmkpn3P5pk3kK1WMD4Vc5FYhJioPcsCtPDPM6RMr9N72q37dGLUDxk9yB1d7NARUoEvbbKxnN7tpYy7S6pKt"
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
