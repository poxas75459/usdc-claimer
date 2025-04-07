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
    "1272GkqzrmAZu6hSEBQLv7zeyJghpeNaDKN3W6waq6rJsnHoEPfxXjrcqHu9htETT8eEVvjkcpRqdshAUsL8D1HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yA8dn2QnMAv1cbRiTxERMK1LDT1zoTviDKQS7N34FExJK15dQ9MUzFi39DSmHvgPZb4WdtZjmGNPLsU2BwKEUZN",
  "key1": "2kpUweNu2nP2yq6t7bwRpHxXWRwwMvmJ9CGg9ZLqTLFptGXMVDtuHiBRS9AxoXZ9ZKye92G2oCJAZCoVeWtrapjG",
  "key2": "4dwMPyZpJiPwMYyzerL5ZCzuzUQxVndbZyvoJAmoh5GUPRCYSKksgvFKjx2muUnYqThea9afftkCDGkUz2WMVX6F",
  "key3": "39YYyLKg7nHNxBm9BP8wLe8Vn8vfBmnKQZU732hMo4cf5AZF6STkChvdGZGb39vYncwvo9h4YukYk8EaYjiNtLWb",
  "key4": "5xBCU1YYbnoBX53Zyb4ERvwrp6cuJN9SjKahwJayXi1z56QkCXWkCJ9WK7R7afSY8tzadZvq3cGPbbaU4c5qTqBU",
  "key5": "4AsAWxCmmnymSyaP4Kf6S14KfRRux8ieV3R4bSVc9dreHktvdMXHYakH7jSQsBPMCV6siwC5uzVE5WVmiC7WLENg",
  "key6": "5T2cEFZ9U3V52faxGqnFALtHQLuc8CW3xLvntMCCQ7CH9EvGs5CTyGrwQHRwejvWyAXX8ikVone959SKRmCS2Q35",
  "key7": "3QjniKgrRUosE7YzRwRjtpPcziNdYizN9Wkdi3WtkFM9ES1f2PeoPprAGKXbLR3X3n8mDrFoRvWqaqdcSdjr4YKa",
  "key8": "44rG7w5Rq7j7sTrv6PSpqotHNJLZJKywPp6aorP3mHAfxniqmNcF3daCTsBQqKtw8b75fcH2G3ePmvfTTepfnL3x",
  "key9": "4mbtpZFTtSyDCa1REmgUpNDMCTjNPGQux7PCy96YWr7jPVt1dnWsyTTTDjL1UPjeqZowv7mLPL7JF6qntWxHgXTq",
  "key10": "zCYAM2kuSnQunCx4cUQuCWb4D6uuJhR2Nngn21s1tMnr2EDKX3rw97UtzjDKLLR3bLXch6JcdfRgJptJyLN66Sr",
  "key11": "2LbXAMQtMhaaPXn31cXHedbTHuRdKWev74YRpspeehuAfHju1pMRoHFVw9Gvn5Loygk4GtNqh8Hdnz7qJunPQxvX",
  "key12": "ddkj7YMtBiYs8eemCh9Vcp33jNZh6ZM8TXaZLB37qcQAPjZp3siWVQZwhdkJcyd9V96Y2fdWEGygBLxViFhhdaX",
  "key13": "3hW5B2Jz9pJWtNgVwyM7g1SDDxW8GDyiscu47822HqifWa86QRPbXgdLGUKcuXtyrGjek7biWw3qDiLWTNXxPyNN",
  "key14": "3YTzkQK9EXVNamGSkHNaggZRLdPuH3P58DUEWYbNAwDnUWcBDdqrQbVtJeAM9ir2km1Lz8nFTrbWDWs24TCWNzyU",
  "key15": "wscbbX48ZmQ33nAHbLEdEt18w4Q75TPMggX1qzph55YtMpJiwVEeNs7o7rnKVyDvLmwCnXKBEzgRRqpxryiTZzz",
  "key16": "2mrRmftbiMt4mouU4sq6KT1XeFuhhoLE3aNXSsERjKe8JBBnzNwQ22FsQevfXJQqFo1JpG1n1giMrKMd1b5Ej7Y6",
  "key17": "3Q5hjZSyEiZBb29a7S7uj1E24mrxj84UGwYTMhfap3JJZXk7Dme6VhPGd4n56DFTH4UnU7xWj4eVQqM8ZFnkSxVo",
  "key18": "465TaPST69wFNrH1QaTJWN12ajmab133xfC7Zwggrjt4YkHu2dXcWnq5agZcSoXc8yRvHrrJAb3L6KosEVnLA71R",
  "key19": "2DGDFx5rTjWMrbn3Zk6Vp5xgUdf2dPg7gBEXhyNZRWZByRQ3fLALpD4DNpv4KUPmLVGi9Kzxp4PQZ5LpikJU8FXp",
  "key20": "4A8xf7P5xARP4xK3hxu868rkjkj1SFRzBmEgvn6wKbhQtpLDgPkMCM2oExvGqTbbNhFtiaccJMwyqf8qhq1qM6EJ",
  "key21": "3QAZR91hdNn9fEyztTHCubPsxXVc67mXKQWd4U8fpSuyBJ2Rudbp494o488AQsYjt3Q2hqbh6NP66Jax8f1EtgTE",
  "key22": "ByYeyFyQxgNusyWanoRSPQWgNwxeyta8QRKM8Ksk7Ao6HxsHzDndXCYxnZ3QvVqbrH1dbCMsvRVmb8NQTYRKGPo",
  "key23": "2jBLYxiqTWagp4puWSUzVQpnx7yiSf5aUJE7H5VKCamA3DmWYsXhQQyE521iWuwxe7zKjCwUti7V8eqdSaBSA2Pt",
  "key24": "2fsPwj7Cs7ePdMwkSixe8svc61wyKv3kTkPBV8iHsoqrd9WP6qHtsrnUwJ4E12pBdMweeTYnEmNC5F6f3sb7G2KR",
  "key25": "3QietbM4uEiV4hBb2iJezQVMcktj7xtn6NMyXiipoDegu7p1e9oPT7QdZYai7s9XT87X4W2q8sFQV9A3VsxwgBXi",
  "key26": "EQXsvzTksvYiYMFhxR2XFgQPmKWTz4QV3VYvE8Qv2wpbieafLViasRwej4wAwxZbfd6qtyMqhZa91NfnqKPCyFb",
  "key27": "3Pe876npJq5XeWQk6YAm3aBtcyxqBupGnN3tMLXFKbi5YPz6qivnubRfEL6sd8HooiTYCso6vQbfx2mHcoSUivuL",
  "key28": "2niFPnxF8YbbkrdURKQB1RK8aF8UjgJLwrrayqRwV6C4A3m8wLKwVjmWUtj4QxKAYLcyg2THpZjt3sLtJ6hEx82F",
  "key29": "3RRKteWbcZU5u2BehqKgywP5tQ6z6UmbuDHjW6SmkB7PzaN7owYKFaYWGKF1pymvfNro7hSqkoynrttsDnSfxoCN",
  "key30": "5yATfNtUvDNVfyJzjShWxwRvCD2tZpQvB5jrnxSBfvMVaE83XX3hnhRgkwMr88QWk71fJ9anSqBbcjk6Da7cFSRu",
  "key31": "tPULNKQYhUBm3AJmrTxqt2WfowDBUhhEvukCKsADE2ZqPCbBbdCiM33ALTgZSMvMzog4JimJxgxpSXHENSKqBok",
  "key32": "4FR7bf6Dvy1U9rriR8Xgn8KUL84a9StLLfQ9UGubXQmAwcbGMfhzo8HYw1VaLVw5qJqUNModxPAFTrhDfAcGPZTd",
  "key33": "3H3xCqQK5jnGKXixm76sDBzivWoD1udmf4dRNfoHRSPJG5qJEdBKj61ZUEob6Y8ybJeNAhLNCsqwNPMXciASntH6"
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
