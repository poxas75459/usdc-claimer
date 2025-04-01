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
    "3KhvTjt3vAK3tXFpxbySv6q3DbVRp8iSiFPiaPueaD31VvSKv4aknRVF2WiqzwzBhcoUVsr5razWsHG4oUQS8aiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNnmmRC3opRymAJNvKYttjViW2azjtCiGxLVDcwWoFsTs7iHJQ5sJ8cugMVGa2wiaQfeUUqKiHzsQ3RLmkbNmm8",
  "key1": "5yhwmHUyrWDmNevipc6hv1pc3S7NkzNhtEJZv6SyNLPes3EAWHA2SD8UgAjVmrFQaKK4Uc63ikoh3gUMDYowqhKz",
  "key2": "2TQBbP4KVnHVL7LjxDDGktypQE3bEGhrUnCzobDbZVSDcKL59FWBifbHt1BKGXzqcwWaqfRdbJMxWC6LVPZQRmch",
  "key3": "22bDxCAULFFSSLiykHgPsvomQN9dYizD2XvD1KqTLvVeSq49ao2Jq61ji967FDV179wsY7EGtBkxUk2qZ9tiDfR3",
  "key4": "67DLp86PX91oZuhcnA91tL931irpv3H4G2692ZK11A3Kz2fvh7auFmMKrNvXLuY1SroVs6MoSmeQqus8xXkKtHhd",
  "key5": "3B3uZV9HSPuqNLXxuPyAERxgBNdZY4ZbmcrRqViKWBF9gANV9mraAs1PhSFk6HRxB1YYeLa24ME13Uy2QQNUXGMs",
  "key6": "2njpUxtgaf1kAGpeGWZ6iPunMoXgw18wQNCNsGBSAAwcwbv83f9xo3WF7QvNwWoxFPFi98HpL6mG6JvnQqHf1hiV",
  "key7": "5Qz6q7BxwVe46aixyh6GPhfiVuuR4SUxDBWjDZkH2qYUdxZCXVqwjzhEuu9FQdbT3LKLCATQtKhKLBADzda7ZVmM",
  "key8": "47rWRofcWQ5nzG2H2sZhxfyPrhRjcvNkckAjFAjJWSfbMemQNtkftWuYZ2vnLQ7WZFXKQbyK4i5r1sTKfLZ24m7x",
  "key9": "4ZSrVLPB9NJW17bGWGjdgodx5tBUaR3Xe7ekvvoUNtr8n5WiSMyM7cMz7s2KGjRZMg91EbBNnb4CN3JqS4PGrqkW",
  "key10": "5ciM5nCZPxe5pLez8Vsx5vxgVbGK2eHmYBhqtZxVQBsTUWY67MRv7mHSfrcfzArHS7tQwM91XUnbCPukG8jiDW63",
  "key11": "4rMtR88ucFiS8eTVhkP6RSx1iGbLjG2F4J3a5zcR7ZYGLHg6oSTdk2GWyLY8ZqSF4eHxpYPMbH7XPq4QGihHAQHm",
  "key12": "58dZtCQeK5mfan3gSAFhrgy3XAe9EtmZEDcDi8eUXZDHZVdbjuw2PNfyC8EELmLcZAJLsvMdZQELLKAjcYLKZioP",
  "key13": "WHJM9c8rZkGET6BS1TqwXp7qjVfHwZ4yMCRBiTSBZQfcFQiUZ5TaJjonVBsHQeTwEsjotENK5W82BQsqLBhESEw",
  "key14": "3yVnzi6ENQPvUbwgamAKNpAd3ji7ohRRv4Emvku4TWe6uy54yZL1p4jhivrUJYUFZLAtZdtbuegDkmkg9Ngke2nG",
  "key15": "5eTVp4oKJKNBPWaKNCHt5SFVHPxBXgoHbkyQ1qvZ8GDCyeW5RNAzSSGHaEyyeaLxeJYv5VJBeVp4esQpHvvbeaiD",
  "key16": "MLvGqy8TZxx5f9vjSDFSaqbJFK9iQ1tDV4JKEHEEUF6RFfQNs1gxGUC3nhrL9zWfeD8hb3STHqs1NJbpStBQGUN",
  "key17": "6171aB8xF5h8yamtsWuNaTJ7DyFaHmW7DgQSKUyupJzQTYCN6KUcip91aqxtYtQRWpPFcjLDKCbmzZLUMvjr6rjW",
  "key18": "Wib1nSrqasKg3jG1ufbwFkeaavM8wSn6bVk9KZJRFrjmWpc2RamHxjQDAtz6kN9SgUvcBRdQpJo2UnerbxtNFyh",
  "key19": "3FoWT9SK9i8cFozUuJcAmWJQYZdNXe8Sq4TMthCp7i49KyrN6YzFPu35yVA6FDbyRxGPRbhti5HV1NGCSZCQF2uV",
  "key20": "4QeAYTuRhtksev86kk2ukAMG9H5SrNC6jMhSn2x9NtLUGoS6Sww8aFDftvoi85EXRWrh5pG5wzTLhfsjQCLK9Uw",
  "key21": "4a3sQmJZeuvY9UU18an5VnRG6yH857w7pLpYKgoEZbEdMfD8VNaHn8q33PFNAXxwUxuYwqwkacEqszNBfYT7965r",
  "key22": "5CXWxmVDquNMrzokup4n9G45qFEvNQSSPk51pTR5fnBeDzLaxHRNiwfPPv1o2a8LSaio67iAoYVmnXpFD3iMz3Py",
  "key23": "5yeds99yB1xYSysSPFb8EsHpn1BT6L1UXNDy2jidFe1wfC2ftSMvk1uKBPU7mU2c7GBye3mJeke2njSm2ajiA4MU",
  "key24": "5YcFWjYzqmmi62z86N3xfB5Pw1RrYuJDYgt3TgkT2NDkQ3fMD3FfXkszDSdmA2sLjwDWheubCh2uPXXpc62WtCuy",
  "key25": "kv6tfy6vrhzxo1DBuH26UsTs5vSVM7vjNJFLBeoT8hAERcrSRsSBVUvmuG7mQybY7G4L5jUNAwQ89KnpJvYsvaA",
  "key26": "3vErjoyV6yzGcBFxNYMyNWDmi3r5nK5TbKdrtK7GDMkRUaczpbrAt3ZTKTPcGanc4wHQibbDuZkfMYxHxkB22JNa",
  "key27": "3Gqp4Cqo9SvsjWhgt4Xv2gfLJrfP3XEbcBzXTfa5mux874wWqBTLK2CdmFDnAxLoHTv973UjGndJdzZsZKXeiGVk",
  "key28": "s666E7sfj546xUtQjGny1ZcxtSrJtaM85AVWWZ5Y41kJbuF8KNGqf2215n2Uqj7sgGY5C4yChfiwpLdLvRVtGwD",
  "key29": "4hoUgLe8X8WMYasTwrXMoz9oZHHcpxntpDXuRxsPhx7CHUdVpSja5KpuJD8cC1RXFCeivsEPLZGWxhVzrWhmyv6k",
  "key30": "5EfKQdcFBuYnNNGgPM2FUsUMS8Ay9KYPoh81DgD7suCyBVqBzLz3bUiDbX2Q6DYb1XdRWQzN7a6WFzpZBj5hs3gR"
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
