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
    "2ZFnT46Mkn6brjVPp6JNcAtzFv1TAF1xVq2C7go7rv5ufYFFVoJub5NXevc8aZBupoF81EAfBc3BbH6rLYLJkRAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbEJPZrAverDXF5DUxWA1b7x2eStjUu4nUthk3A42emh2JFM9qcz9WFtQHX4XbWkRfmNPoikFZZuqx3zJufVMud",
  "key1": "4dFfozsTToTbdFsuquQ4eLzzQVjac7kyZN4YMCpMWg3WJeMj9o8hNdY3XDKMvobh5HvADYcF1kzerNQZng43zcGC",
  "key2": "5wYwWyQA1JEXE6mqGkFMyo6K8TryRj1CDYZuYcXycH4qrp5riszzZyGh3HXnC5kHHdg172do6D4SgoaDqHqdrU9D",
  "key3": "28V7v7spKXRW1qX95oMGaAb8BpbqBqcdq4xNT9WZ8dLb3RxsEaybPJrjSGa4C3dKY2EyfPUw6tDwa6yXV1AFjX7p",
  "key4": "3MobUgV9NDpe5JjdzSq1DK6we2g6nvnaNxDMY2hypWUNJ7yfp8LZKuYfVsuYYvYMZ4aveua2K46xC7JjNvDXpcxq",
  "key5": "6synrHvHRR9Cj6B2sAVoF4JBvWAKvkDPuznFh4qD8cR4mH2g2ewFuQWLnY3UqM7TthFDLkRF71iLEpQtZ2CW1ud",
  "key6": "5Q3iupsnQNouabbGTkLo21dAxGuutxXivqBieHfXks4cAzGvnSvAVpsrpU4yc7LVQZ4ms833KiAVgAhWBsHAcy5u",
  "key7": "4qZfGxz5BjBh2MV4aUhD2hrcgqFpKjgi4hSwuXUvhBwkfQFe5V3AxsTFfPdVHSZvuhSEvYVmYjGVHkLN27pNHAhW",
  "key8": "owrMiazedEa6zfb4Y8s6taXMttyGgXscN7srfzSVAYsb6ns2CDirLqnSYFAw9T3e91vnhF5qSmvUv49SE5gtKAu",
  "key9": "2W8B6QcYNmWauyQmh5QeXyZJtQwmcdAAi2vqsxJjYPV8MPXt1U4vg71ESGNEEUy54TTab1rUcNqs64jLf5DwE52S",
  "key10": "4YT7kJe39RxEmCjijU1CCjAa3Cr6KPLvX6zNevzAiYs5MqrCPXGgbEYEnGcUryQyvk1taVnV9Qwfdr52PUUrSsou",
  "key11": "5Sjy5FpFjs6Qpbh8MM6WQ6dM7gjtP85nz5e7GTveSvBrufvMkSAjXrR7ugHh3fgpHHz2HNcVizRChSwU4o8NpQwK",
  "key12": "4DCRuqvL4iz8YbKqNHTxg6CH4Hf1vwd3GQsuxQVaXAkA1XxsppoAjFHcB33tLY3FYhAZisud6w7Gm7sb3UKZhAiZ",
  "key13": "Q6eutqrbnqGF6pLTeGumtykGc1XmnDtFjr1nNMxccoem22tNKZwManr6NDLVtUVpcKagED4GjYEr7vgnYiK8gYm",
  "key14": "2aGytHqyZTYb5dmRXdTPM1mUx8HJPDNVWyEDEAWrX5ERgQiqhwpb6HMdoudHh8utjgnuE5hebB9oobGCefkNcvqk",
  "key15": "3k4ay6X7ACUXP2wioK8bJmabFSZJ8gRWLoTvrBYtEeDLcjKXc7GuF1CoXsro1roVzPoyiivH76ZLkzZueaQ2dxGX",
  "key16": "4kfAx2Fhzh41dPrpf8K8u6JLQcY2P3fuzAXmP9ZpGay7r2Nj8gAMP5ht93L3h6hXsizL9qcUQX8nfazqJ4J6VtCc",
  "key17": "3hfEZKtkKAK5RuLa2zePApMY64qgU57qxYs3xgWejaCS8T45Koj5FswVB2HzUsw3PUfzJnjCxsjNgxcPBtmJWZv1",
  "key18": "49voYQGNCEDkh9iiQb2JtAGBcXrQp58BgPbfcqcYMfg4yj7mRmEA6yRKV9xCGc4W8yuwxGu5emEcovExmu3cJJyf",
  "key19": "pFMzUJdGWEYDAEEsJ9fJxA8VZ23Dtbx8S2c5D98M9qfvk9bcJY62pRvaPFaz6qDwafqigQGiZL8pQrzq3jq1p7M",
  "key20": "2CcmR1f7hCBhvo7xAq2iij3xaTJzLBbdzjZZeWkoRXGKwtwHzCP3SXMvZ8yYQzw9Yhy9g2Dhs1AhDQ5NkP2fXec6",
  "key21": "56KbZGNohXa8zP3koYJZFz2zzw6XabV958Z4PU1z31WPkF6NsNo7HVFukLhwNSWqhUtPp2JLtpMxPY31RNr6JE2w",
  "key22": "61dvfeGEB1LQZu4nrvkCom5EjUNVFknfz4WJKEhxtXJ2yf9EBh53TmNXCb5UkipspMH7heenfXUNdWRHVfiraEx5",
  "key23": "62GyUuFbX79zfdJQC5kc4Na4eWayP7oPa2hUS3MRteVd2QQSMTH8avgUqdHKCybGrpZ873pxfYBjEjfjbfAwj2aU",
  "key24": "41Cho3nTGKKaznuPCpPF39fWUpQ8cu9ezv2mEtgFA7ZpcATuDrEFPrZr4SLHA9XMnyLyuyeLfP8CFGzP9cXGksGa",
  "key25": "c1UBm7fPpE4RqrCGvRY2JK5ARMo1zoCDgNVBQ8eUeq4V2zY9cdLRQrJ1NX4w7vr3ywSyVRn1U4QMNoQZ9iRXsC2",
  "key26": "4nF4eVBRtbbBwLaJ2T7Y8woHqrzHoKni1MVQuZVqjncPa1ANRB6JkURvAEBfQkAM8wAf49qv18NQKGsRoyN3aokF",
  "key27": "4QxbxmA9emPWjKbNzhWnUxK9CSWBFjWYvvoBGXJoWnJu2A4AYG6j6i5KYBAps21ufG1i7GEBfD7faqjg9tz14Kjo",
  "key28": "5ymMAoc1Y1gFeAZ4oGo87KAKDRQJ8UvtizPF83i7rjcQWjEY9iaXxf3PsyWvWoQ82unYFJQQYPv9h6s2mcdncoDm",
  "key29": "R2eVJo2Fua9DRAythGUefWoz5XDb65CWkqzEBEYPkeuxmH4zKnKvS9qbc2U6JL1hJmbcP2ghPuRH1nJsx2AM9w3",
  "key30": "w7ypFBGmBfqBtMh8eQuXkqN8UzGcuFxB5h7KGh2GXPaHv56AUsZ9ggk3fv8ktChwc9YVMK1zGKbK2AgYP6c9KPA"
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
