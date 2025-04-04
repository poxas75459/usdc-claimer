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
    "U63fx7iX9pMuVFD5h4TLBuZ7xBmFG4FHoQewmKCwoYGL6gqeF1AcSJYsZqKhtQBwYGUhk1p8TW4XAyWUsFXtWM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zic4fspy1MNARBfEeCkyQWCz4oWdHnSoxy7M5pWuJJVHpgtQDuMGLCzbaK3872sNq82k53mLSewoJTrM2jFyJPL",
  "key1": "DhEBdVHEimoaSyn5wsRZFYNY6GsnQPVLCzCxvbXVwVLx1n2psxLMEMrKfoQMUZYVS6YnPdCa8rqv8QBTQDW1NVi",
  "key2": "4EcagavrFdWMFwy6NEvVtLdTqCJKG4PY2ApJd19k3cUyUGCzwdBo7R1Qct6PVFzBsdh1hhozUsEznHF92vRxsdEJ",
  "key3": "2TSoGVQZqcM75gjQ75PcP4utn8rT733E6LgKLvJhQsiqL7AwUj5F8yX3zTSiXt3wxMgMc3EMBgXuA9DwyW99gRgF",
  "key4": "33xJqUJkm9cDWDbujaeK3jxYd3RZbn8P6QomNM21a7DDw2tevEspjJcKKAgT2QEte6sfEfkyKzstxz9CjeKGY7w4",
  "key5": "2ciyyCq1f8hLPWqD3wgiYkLwgRR7Nsce7jpd4hMhAjGqyzNBxpM6CZanZBTKJbpkjJbqa4oRG2qePv1he1a6JwdM",
  "key6": "ZBfCqu6FKbcZHRtJPQESLhXbUmrHWEF8Pjps9Hipxbwi6PhK8D6cyi6jSV24crXNGGbZ1ZGF4fyZDhsgvTJb9JC",
  "key7": "2BPbtFMJPwEFfX4D9DJ4Fmqg87zZXv2cxYKjrSNRqtHSGpFKeCHxXYaEbYRGyGehAPNW9Hs45hXMw5hZvRChv4bp",
  "key8": "5vwtNe4RykR1ujMoErhg2dHnKArsnMZtYy4P2z9SHbHJ8TnGm77xGFognzgn8gxzzBPqCrg343ZhUwgzQRV3VtZR",
  "key9": "3dJidGqXUFqSC1J3HBJ7khN5UxGHypiUX4FugThmdCQKr6n6RSWEfMMitb95wswviue2kcpTQteuzgXG8z4UkHp6",
  "key10": "4kUse3RCemXMnWXZJXkyqZc1XK2ZUhUknMAKYbTTZKw7XDPvGcbkvB1TJwJCRnSuYvTdm6RGHaiVPXVNpfLt1pgc",
  "key11": "3PNPbxwV1KhfF8Xn4NnxbEbMaD7banvfPjo65R1xokmfD5QLvcmR2dqUjzRUnBiAr1ph6QGRhYYio1QSnLfjNfDe",
  "key12": "294GynsPbpVgkTGu1N7LW6P9AhXZKrMPm53wJ4fwHXjiKKTdwSzeyE5Qubrw3AWSAM3uAJzvYmbb5KmP53QEG5AW",
  "key13": "3t76FD8PysJC14PNAo4p6YcpvTo98JQBGSqD93uHKiynFYnq6iebxX6nSteTU4AcxDXLt69L7sd5aPCpVZoNN8vi",
  "key14": "2VHL5vQo418XGiT6BKhhxTRpebqsnrnKmqaTqx294unPFUgmnhQMquTDuGosrgyb69Ze4sYKTHtfKzczYLrwEwVT",
  "key15": "35fx6fixiUAoMXPUiR19bqdfUpAbZqQwLhpcHMYu7K3mWziupnJPHwYtMDRs8m2J314Yhh6CeN8yCL1sCCaDqQwx",
  "key16": "2ULLN3z8R7cFzDCHV7Yieqd7EjrGuKkFyDjwS56rcmmTDngWKa4Bsz9yZPeQgKzEaA6XDeyXUUXKa2jiYaQXgnCw",
  "key17": "61yZWU4fp2z6EjaofvACu9PMEVJRZ58Je34MDcNwRJAGuXVAqaF9c8P2krewtjA2f9C9LzYpnZnB5svNwgnCJEwJ",
  "key18": "4r4UjcxU3aERTQxg3sr4DmbvAJuppa9tqnVVfdEFpe43sZh6qkrhG8vb7DSmSx9fBqNWqnNRvr76apk7ftqYoVYd",
  "key19": "2fabCKZsKkDzz6iRC57nX3fnrFiaXNNYxLwbtXkYjbnD5fhbdFYGPz7ReMwhg4DfdtgpvZU3y1ckyS8MbMzVGCAK",
  "key20": "5ncmhSoqfzmqgs4jy1UffEsKwbc598PUgU24xgQi1gggw2ELjs692qck4E5NdAZjwTUABPVKspP7fHH2GB6LvkJy",
  "key21": "o6wGfLDSFdcHSrh6bghnQeQVUAU1exJFBgbzHggGac9RkUnn4xFTgcj8ZEmrnprNtb1d9a8d96DGzDBXa7ReRWd",
  "key22": "mFTRxS1LjuaH1Zp7GVAvH94untXgW6VRAj5QHYDSK1uEcZ3xGv79Tbc7rCTMqPY8Ya32y1ggeYXxKgZJe3fnPbH",
  "key23": "4iACQUmzH4udEFVP1wGm1FU6osUJjiCeMbtAM228TPWdoxMu6UmCJNQVRnPSMrLgNMurNNa2bomUNkcqMrUeWWpg",
  "key24": "53hpNxmrjjS4MGFg91qX1LstXimBUd5noQDufDXUn5zzx6B3rajVE1Hh1UFVK1DEoSTMJ8fcNNN4dm8nWf9zv3zG",
  "key25": "21u5VEpPDQcUmeH6go8FxphWAkhmF96UTVoiBMrKYviEwrb1Nh5YwcEV3MadJSUi1k7WUePdmxMwsejdeYYmMArp",
  "key26": "AMr85jDzzfyFNCa5CxB9ceFcSis46BgrBmsHU2H6263KpodTpjjQpNijB6vSkxnZwYrqxJC7F1bCWwPF8F9HeWj",
  "key27": "2bdc1F3EakDPsJXTnvWvYb7uuU9nL9DG9tm3SWD4LsMGhbj36Mj7p345Zma91TZXTaQuMEN63CDgZgop5Mo7jF8h",
  "key28": "m7XNMQK7qqsXoaoGgkvDHVXE5kdemctj3yq3fmfQj2KiPCvLb88d6ZXNvEvCJprYGPhqaqGcEjAPEZwyU3885Xj",
  "key29": "2G2MC7xk9x2ub4NuUSu9VUYxx3JW4GEPsggobKG2WbHiv7KcC676eGpStWazjHHi3xSuU9MpB7JYRVTSNUwKwdxp",
  "key30": "3N4DQgktuGQNta2aMZZSq5JUfToju32hGxqor3G2x3vDvwHJxzhqTqbUCrs89TxJYhatss48onJymsk63QM8RmKg",
  "key31": "5sRq8CZuzx7ufnuBt2rpWfntRFsVHc1VEJfKgnRL72YaMS2ZwBuHYUHU5LZXs1ga7RtspD3mYavmLtfSkHuFVxVx",
  "key32": "58rdPa7SL2VfUS32ReG2QeohkxtNXnzCiHCXpRYCmL8tZEh4F5bm2aeWnPc1RPUi1hhFJJjbdsKf6zGJwtSx5gCG"
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
