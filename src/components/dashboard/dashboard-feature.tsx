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
    "21Rz46XPSgt7jWGkZJuKHkjRr4LE8yQymQjM31r2NRuByuX3tkRQuN7SpGF4yWfqMJeQXawZfEg7hc2rYPo6ycxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dR1dLyGyjsMNaC8HHPsDSCWPRPgMc9vCFEDKEEDcsaLQNLuQ8LqJCsTAJ7g239VJiU9Ex6vHMZ9UherRssR8pp",
  "key1": "3F2mMmmnuLPQpTkRAGSTaSN3S2caiqAH3XgqHdUqjesgufYsvDbo3SaR86yQ1n3rSYUFUuMxgrLB7PDSa9f5Y85W",
  "key2": "5r7LLMUfFftx4mKUD3T8i8Bu9sCBKRDzG6xts3RjfJftgv438TzMLwy8Xq2yY9T5hXYkbqbGUVM6yT7rZmvuUrcz",
  "key3": "3MbaKajNUTsR51ddobu16FgawhVJUrPBLDqmB4egjfvTHGvTMtWH8ToBG1mbzBq7Y6HhqVyky73jQjwDjrHqBtTw",
  "key4": "wjj3DmZwZwryPLd2MgVbUHAXQnjPxKdDcTZxpRXgkrAsXQjV5FXCYY9BR9zFDz1vmt3Ee6UmEshhLpFkJXPjFvT",
  "key5": "L29YmxMeLvBhAqkuNFw2jXGaPSuCNWnY9ezA47jWrbcS6f9dt3SiQt5oQ1EVRbokGYR1gwmMedQK11fdsWQw9QN",
  "key6": "5VCY8reenqfyvrkfgKBmUywADaLgqs3T3dLA4efdobmBfcVwb7sMrQKm48Xd6UJ3YkLmZQPG6BT3SVW5eToNv2S7",
  "key7": "5SPky8NE5VCcZ1eQvEKYk4yQtS54aaJpzfKx4AdiC6HqgbE6kbqVzho7aZByKkDQ8wg22awx5DBLU1knxYBYpySd",
  "key8": "3bUEgEYJkz4yeM5A2uj6FQnrRHLesbV1CjQW4Twaug8wmzdfPMKd4MmNjWmz3TSHyqmk316GkEroJsFfGDa9WjXb",
  "key9": "4pVGGjm3vD9GuGpR2grUdLei6JyPerY3vRAmD6CFXTe6ZVXk2xg4cz3aECiuMFVZiGe3cHqeBeu1NXt3eMfkhupY",
  "key10": "sLR6ag7xjiemVzR5Ugv11vB3Bneza9Pyii8oz19yrrNoThShYGN9guxBn2JrLqMKimoGu4eVV7vTSU1ve5y9FLA",
  "key11": "4tneW1oXxzwX5WGsXHPGsjuEy3dMbfvzHYh7ie3CTaU4Ufphtui2MnkW6zpTt3usjVUMdkGkiukr2jJ2foZ7MptX",
  "key12": "uHTpq111zosFRKXYdn9QyLZxHDGHwedzJfgCN73PjebvQ4hmNyj5TqSudQoaYKtt1SyE59WLyqZEp7BAWzyGCNf",
  "key13": "PnJrS6kf89G6mv1TcRKh3jfWCsfHydCmE4N9xJtSjuECrdXceA3sCav1asisbidBvPTFDWfkTKvdE1Cn8sGrLCj",
  "key14": "qzW5vqsxQLK9QuCrP44A5xMWQ7Z225B5yGS6uHwzneEciccMpCaVT2EdSuVMQp37JFVDDz7EV6fBtJStS5JQVBM",
  "key15": "3EAmKpJ1NU77vY9mDHHQifu8QWCF9JZqA1AorWdczaoEqEKPnPfpHZDuhWt4YNtPPAinMVunZVTGhLTN79pEqBTH",
  "key16": "5EWFRgpYRZrPEDxVkQR6LNTVLBy4KF9Dur6DNjc1e35Eh3E446oyjxoXkCTWbL4wSRSpohgFwwyGMRHdZcFEcpR",
  "key17": "yYdEQ4LmqymcSukoCNJacaMqX9tzWp2w9FMnjxhkdneF9PnK9sTqQqWMWT9yznYLnynzPxwweiJomVpADXkbFbo",
  "key18": "4qntdcJqGEsMNSwLqUtLGzhpafL31epn7rNrNU2SsbLfso6XYJuyxmfhLtMCHns5Xef4rMmeKmooifz9NmG9zwPR",
  "key19": "4nETYynAkVJEVYpifR8ZPkZNquCimc8uhhLDbVpzndTEFsad8hUbjHFGTbcij2RsWx73fJL6VkX1kwJC6FeSVZ3c",
  "key20": "5cgtPpd2ndUT8FEC1qX3Jxj5THVCELrLvaRjYzspv8YZ2TTUtZYBZaGmBssbDhLoU3qCkP4VoLfmHY5Vz1uKVXw4",
  "key21": "3YMGCAoySLJxDsjv8YrJzuJpDFiH5MUW9bi9n2ixxMT8EuwF8hN2eV35yKeJf7xsywdUeDAofzc3pr3T9kdpkmjW",
  "key22": "2Q3r18Vd3tgCcEhsAn2irDU2JYJkG4nWZxiWXngq58p1HK5GHo5zKHripbLShVGGSwpAkMBvj2LmEj2u1zg7AUzf",
  "key23": "KXatqcBDiyZimjSWsrdSx34x9ezJgsmhs1ex7XpR7Bdp27Crj7A4kWvZFCkeU27j8dxBp9p7nrZmnLoma55Qkue",
  "key24": "3hnWCNpRVhUUaEFaMmoxVzvcnU9ifuskkfkzjRhDY68QddiU12GQhKwvW2HjGyDgBrLkqjznvMMyKFmfmsJu89Nt",
  "key25": "2PSPSvS8P5UnXJuYQekJBedkMNH2GrXbaeFdgoQEQP1dorhbRk2C9FtutHSDsu5Lrb1YLkMbAp4U4SR3J1gLNY12",
  "key26": "4KZnnoLXs69hFjtSJoj3dPs1CPcthsYXyvByp397WFDW57jdHhmY7m23uzQNeF2dDDnmNcM8EpaPtEgudJcR2q9q",
  "key27": "678iPVQa3B5kErX1pMbgfzCJ9RsWX9eXHEC2nsVZyZG5GwvDA7Y2D18HgHDHsx73P6b1F6Lz2Ro4KQiMSUD5Fuvt",
  "key28": "2TEN5pwdfDXmbk5QSVvUvCwJWmPEB6HnqVmTkt6nSP2qiSeA2gxwHFHai9MrRpxes7oinR9h178ePhbFnPkQDFxP",
  "key29": "42ekhA8jELXxMZQxexfdDge28vpNNe9cBy5xDVXWmA8uAThGaGSacUKDFjmN11sLXUcTA8rAXixp8zgMm8AjS5mA",
  "key30": "4NMFLRbmAdkrWymJaqnAE8eiQTxhv7j9wWEPS1HNKbLs9T8xhJSN2Di8rrYAo4jgwibwWMAtwQgsfzTJLVkfMUjm",
  "key31": "5tzJohNPHccB23PUUU9YgifKkuEtpDWfB8thwXzyA1pAUG7mJJHN5Mrkz99RiXzcTSdPW6fBvipBrdXZQbzBAgvh",
  "key32": "2PksTBYtMJU4nJpF8fT7228yZKU4QcUTCZh4Xu898oXg5cBU72SEz9oy4NhqsYwbLJDpPH2FHm3H3pBq8HDkmoej",
  "key33": "3bCbWqBBAm2PXtJ71UuwqayyGhFKg3NL4KTMrBTSab2HbA37oh7pckx3jPsFXayxsQq7bVB4CGF1WDw3zD7xT3uw",
  "key34": "2xHiZ9ZMfWfajL99n7jR3tYVgTJfsFgcBn87wsNWic9TmqFqb1AuNY9QvP45rvJScNLg9p1PLTwmaJkKQJDRsiXJ",
  "key35": "4wmJDSyHDmG1R2eowgKpDPo1rbJwoAw1dCnpJ8qFG7i2B8qtKTAxUdFAXQjupL14zMhPsq5HGoTkQKSSUrY8DkXC",
  "key36": "Tzc6hWqX5ZkqUBVwJbFCXXnPRUEBCuuC1GQk9716uUb67STt5qaknqenTQv8yww44xNiSSq3kuScPAGqMqqPbcL",
  "key37": "VNM7CsiTD44PM1y2jcR46wPcrpnCZtBeW7hkvjU1o79suS92MKjrLzKQQUmd1PdZKekJCAietHM18Vxo6WPXk1W",
  "key38": "A7ZbAfrZ3QBXu8QcyZtS1Xf2cJEGfVnysrgkf4HHttZ8bt91gXQSvJJh67CZ5GVXkZf1aeBywZFr8QitsPEmAiz"
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
