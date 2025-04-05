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
    "4YCC8DD2BB1gAPfzhAXvTT7XyU7ZLBGuZsjKby8EBe7wANsHQhb4f77q3kRufssGNo1G5FWU4Cot4hcVtQehqhKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLsmzkBLSK6jRaM7J8WZdybkiLT9M2fVkqF1vngDtADV6vF17Ho82aFP5stfshh2SDhi8h9oabZMsfaHREFzVPe",
  "key1": "4pRhCiyXoKjVg4VV2GTCxYmfaRGc2qvSMYVvh5aEAHNeqQUqsT3pe2uC8e4noRExd8b4AJSjSC7vs4DQ2dkHezRh",
  "key2": "4M7JBrgjDTLzfbd59JTUBsFVXc4FkvUDhYafvhoLHBMrGYEE1WMgDydz26m1QkkrQwktpuHmw7vfzoimtmAfb89p",
  "key3": "2cHwmSC28E3xbjJc2AdnUgmCStjhuBWeAmrK36GjZqYbQWRaR2DrivFpRGYor5skRdgjM5ntChjVGcS3FfEJusfF",
  "key4": "4zMVqVhtdBQrwqQtnmB48mNQwR4Yb1h9sNUTjFQt86UaAYb1bMPvo1DKDZjaGMtf5Cx6jpue5FmCTFMLAAUYW7Tg",
  "key5": "5CcZTNShtyjpir2onQK3KgwC49rycteaAepB5i4XamKPAvwu88HyreheXp3GfRqEk6JmCh6GgWD3m4tMUWfHvdCa",
  "key6": "2NbN58ZpWkRWXvCNwMNLn5vCsdQxiWBVBHdfvwTy8nSmDpkFGxV4gMPByFc1MavbXuSPfDiyBseiza1mwSC2nAUp",
  "key7": "28CxDm79vqcfGvJUyoNWub7QPgpf25viAX7P5C8shWqSaHEjb4FLFW6hPP6WxevA6RuKQvAA5MvS5HVjSJxbySxv",
  "key8": "46Th6FsBEYmetZCLHayrmoPFz6menQ6bJ33PZcaEod3FN3gyFx2yuGNCDGeeh8yEK8EJnHZ2Japnpc7C5FzE9DBc",
  "key9": "3B71a87vMd1MxBgCHtdUHAkCkDHbTjV9f1wpBUDk2jd4M6dHYdzGgDwJbYBfk8RaoDRNEbpQj2bc8R2dUStYMmUi",
  "key10": "5dYUddfaoZ43W7AFmiQMtfQxCRgPjbYM9Gzgupk8zMLmgCnExwYo1eACq4v6suzeduepaZvxkzAwVKCyqFHEYecQ",
  "key11": "31U5pUxEdjnbd3qAvbEedgik2j9SbHUJCbxpdSBiga9GCCRbEsD2bnkdo4EZu2NjDbopkLcWcNeVmcZdffniF9nj",
  "key12": "34173gBwoRHP1y8RGKHRRm82NQhtYzBU6EsjcKvpc5ZwV8XnQi9p3mjG7kYQN7N5eA6nLDiLHbcieUQdc1cqkaTZ",
  "key13": "5n5SMnAK36MpQbvsaJNh7ESwE8Ppg9GLQaHSqRHvU7ykrVzkeiqv6yPKeMfMkw3nrdJpRnbSC5fUT1G6Rej85X6p",
  "key14": "4Puv52XwFCEtDeer8V4MyuXZbCGVb3cN25L18xwRTzRdBYnjj5gFL5v6eERfzFsE92NRwXKJ7mQwXy7kBKnG659X",
  "key15": "Atyia6bubgrLHp484iZ99reDywJNGUa7dAmZYNjyTSf52ZoxR7CGzgekssoDskiRaNkUuv1TySjTyphATsqPGDs",
  "key16": "454B8CANJH7HLqLUtgCDYvumPRa5LGYt48tfAerfPsh1p7DVM4NBBnPc253TUMyVXojwydGHxFZtotFKsPjSV4XN",
  "key17": "3Z4agzYrdK32ijEKJyhtxewXfQJ4GBdPecx9oNtQZ87hcgFMgwiw8YVSAAFvAL9MskGVAE1sSPfWX8wLxBUSHGWJ",
  "key18": "5x7tGZLBNAwHUjS2Aqshqj2UcZVaEwcnHQmrLbRkEFpfqhMVCsNbq8SA1LFxfJ2fNzR25ofYHo97M67VX7ZPwTid",
  "key19": "MCW2bfkjJHNjrDvi1MTLUE7qC1fDXxWwGrZLcf7RBHxM6obNbo99mh3Jv92KbuNbgrEVTaX9WmBZjkr8ox2pz1j",
  "key20": "5Wkvdb3v1dLBm7psWWy3M72ffRVhokKuYXpb4QmwqGM2Hxo5WLwE9qhuupJek7C2svE2xYdCpyKdLjAEo4G4qcqS",
  "key21": "67bf7tM9UceZATNWf6EEtDFAVkYoyaKX9n7XuWueDJwJmj9Zby5GeXM6xRJgh45JpqqDMg5FhqHS66WkvpXSvviF",
  "key22": "Svqt8kG2C6UWA3Q8W6dmqYM2GpWtbJrHH9n8csW8BjACCw3LEy2LynXv5X3ko8MUSTedS6ZUFdMqTK1Q2xJtLya",
  "key23": "33YemnYd4priyhQ328KsWGBP64BVuquuZg21XAPmUx9bhJVdLAsGwQpHf62jbxBybwKh3UKVAd7JAzwRMV2m9gtY",
  "key24": "3zChUCoXRwDdDLATuw8fFEkPikBcBdJkwazokE9nE1GqqV8nwHp2HTkvtDb9whykd7wABz7WnPeJwTfigEcVTAGS",
  "key25": "HNRH99u1X52PBmTwmKKgnM8HtUJSNNMLF9te29JF9LVut1iyrYFUvpnxSDvWUDPnhRWVQjRZKS7k6wccqeoVSQq",
  "key26": "4wnsyutw8mwUpPo6YNcVbAceMx7d5NiJAkJEcmTryKb7QxAgpEaR7bzVQFSb2iETF4QtKJ7xQbb4GhjTUrviDnkV",
  "key27": "438VALZtTfjmUH2wu4TH9tF6mwiyGTbWD6xKFQQpJDoKq3n26w43miisZLf52SbW4LN74w63pVLFs5cMuxqdcVrs",
  "key28": "ckovAxgDRLn3APu7Zq4VorQ4EnrpQVHSQdegfus54G2bmv1cbvVqec9GA7feJ9SX2TbHAUbCESCh91VVff5eTnz",
  "key29": "4ym6YBBT9XYaFUsPWuPM1vJLARY87o1cz5ZaPmnb2qUSE3d2mZtP4D5UemHD1rLHudtnEtstTa9Y8qBjk31RerbF",
  "key30": "2nP9UZJ1n5tph3cEG7sPeK1nzA1FKomWv38CuLkpSteovxqXihUjjXTDpSbLaLdqw7unR1bVQqEZos5rR8mZkRQd",
  "key31": "2WRPxLrxsqsJ8LEmmE5kmghh9JpYizAyWy3fBDszacy3YKaLnDXNziLC4uKoM7NfnQAar1qkqj2y6FrQSbgz8oms",
  "key32": "31ffdwWQSYjkuz3urZ9F2vVinsyQeyhZ9d7mpcrtfxW4iLhucSum7Wei9TKeJMjpGVca1fmRqbhbYhj3RzsiLUqq",
  "key33": "2mHunkGawJVom3KuuZhy7ToWh9HMc9rNZ8dmQvRXb3fM9LNGFr2mNs5XXQf6iW5GQA6UaUvnAcXwdpUtqdt8u7gt",
  "key34": "5EaK4zEPNchPMKAprg5i13rWL41wki5bCsDPTvDLny3VL2yn28QTQ7sBis4kiXDFjbHF5exJN9sWgjqptdii1ZTB",
  "key35": "4sirQLc1BfCRx6tsH8Dc9CmQzjZAohsCVfkVBEhqU5fYTx4p4ZC8VJ4oyGTnGPUK44v1oL6fpcB1iUFNaS7mPBZQ",
  "key36": "4yWuvaTXMpGUsmLSGjd9DSt3W4ohqjkjyTneAuaorgsJurxobWaJyzXGABG1D5BkPBUpPPMfzVSUXUXRd8RE1Ytf",
  "key37": "64niq2cNFsj7ytFYEqb3a5PtSF8ThPKq2KTY2DJgMbDeLz4fFJUPAoMNHe7NvhsVC8tQyXZhbFMcYCYL2AyVJbHf",
  "key38": "4MBePoQchjkiPatNMs28jQop4LoA3uRCXVyg9d5epfSrbUYC7qc5KcXcfh89jccRhRb7sLGwTiq9QdA7i4JYr8vc",
  "key39": "62oe5hJn4vRqqU2nWN4prFdKQXpqUF1NSpZ3uEQJjWW476x9mQB7gg8uaRf6PBkGgaYfqMRrY56K2nZ38GbEVQPV",
  "key40": "2pmzN63fcna7fjiEydXo2qSZBAJD37S2TygornoBDd7WVBXf2jfsua9JshqdSkxZM42M6yfpQvKPJ7yeiWMFSdqh",
  "key41": "KuhcstNt8TDT3iPhZicZZcW7KdpTsNBoafQ7n5WYmL7D4RNWnRYQdUZPZ4T2bcuv4tZbVH3Kzpw1D2k7a1kwo2J",
  "key42": "XJKCBWhB8XRso8DsrrAz443cR3ZXfKbbFtiPWg59ZRKAaFrZjwrfuoRmhg747C47ySiGh8Ri9o2mHfXc6M8mE16",
  "key43": "GVoYVftjE86iXrFUqSj5MweafFxysSMUa8RTv2UqidvXBCizj9rD7Ko1LduH6DXm2kB3KySk3dZags1Qxtee8n7"
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
