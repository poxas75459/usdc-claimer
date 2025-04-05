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
    "5D831DpvSpzK3j3zdinMs8eCgCDQb76vqkh8Hw3kHmoDGr5UxjR5fiFX7AGXv86feMHyt6bMuytpnCf8zxXNC6Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5d36Gm7rfsgz8stje8t6UZUcxvbx9XcmNJ619Wjbj8HQkESV62Ax87MhnsK6WLhQGLZkWh5akSPWoQokupspKb",
  "key1": "s2jXH9gc3zVfGTQQXfcTJLKbdDK7WQzfGLZCRNiPVF39ywmZ8XjDwxbnzcY8WJ26kP8J6gMrtbD4b79HcYjkkVS",
  "key2": "2eYeew2V3D54WWCfDfeZFPDZm25xeQGosr3FEEprPUnjLdQWCLrENawTn8nRWDRKaimsLV17vHVnKFBuDxNU8iv1",
  "key3": "4VWnc2dg49ZEFiVt4wBupzrysFJATZCE5pQiamsK3EuxGnpYLEJC2He9fnEeu8pWCTsjYNozJEWnZy9nL1MMwSxa",
  "key4": "3W7cyMtfpgTHqUfprcjQPDNQr88Mw4KYqWqMjdPPfevFdJdnDrStEEwY5Qm7Cyq5Lnhf5jKJcuhqigMrHSktGNBF",
  "key5": "4kiPywmh3cdyAt7fQkjqpn9HDRaxtLYysVDtPBTq2RsYBZS97ChMW3SKXAhyaUutw8Bmt8X4Gh7Rf46DrUVP4nDz",
  "key6": "2MrDiFgSj1Rg3ABwPimcCpT3QSQFfeE1PK3zmSr9BtJUyYrbTUuQ9oX7eNxGQszFBQttNK54up6hrrv5S2pmRdHc",
  "key7": "427gTdjRkrMfEVYTJwySFDbkXCePpnX76g6fqGyouyghqgo3rj4T5dKvFmdBRJMj3SittrebGBaJD9VyNDeJBHfJ",
  "key8": "5qADfZ3etiM8rbiskLgHq4tsstrH3LJ2KdqcF2CdHwYYLQXtdUAMP93qxybBvGPh68cW5g5AsjomAre5CNNZgkv4",
  "key9": "bShStZmxGCrDCtf3oQ4ohAL7d66Ntu9CiniDmhW7NqsGkoNRtuBdbHCPPsVZ8DjrdFgMRo8U7DrrnQgDzMVevjE",
  "key10": "2SJK5z1kBkfHcJFLNPnpccyMjSUxtdKV4T5UH356EuRPRNwYU7e8pd7yRUdTJduyjQHQi8wYrKMfjmqqZ5wJirkz",
  "key11": "2dAjpNKFYN36vRKuFpyfw6RBdrfAmyuoAagyze5zzEFE6ApKmGihMrmMTX4qycw1mc5jAjwypPmEPpLzEUziJSxs",
  "key12": "4D2v7hNgXDvHSebLqRRsv11DunwaRd3sNFFfxUrjXncxCuV6wC2Z112eguJvEFcrnBgxJU5zS881RPHuZyAxyR58",
  "key13": "23X3WbChPg1U4386tuKCKiEHyqTWMVrKKfCc2YgW8rvP6QEJBqe3PP8t8x1nPPN5HdpsjedABTPbaKErzBkzX9W7",
  "key14": "UXSBQ2Ug6C8aeiWrMbatty93RBaC2W7W6JntRWwn8PKpaMwv2Vb5Sk9fshzaZPDci6wHSwbfid4eefC6kYca51Z",
  "key15": "29igMYDCNFV8FGh4QuYuErrPv5x31XM7Y5MxQqt2u2DocgWRe9k3povBxC79mRAKkRJqbvjsHccTBebr5r7HHLxW",
  "key16": "3BSKLoCckRxoNjcMGHWK7B84AWyYffzL9sKqza2CNYZg4pbKkvgATacDTFFNGZacwuLgibdSPFAJiCZSpyyNEcxE",
  "key17": "3TxCmXwvyGUg5khUVHVRp97A76pDi9j3uqUJLxPYTS1yYzQyTxuXGbCQmHjnEeEH2KXAxLCWmV3RPq2zvcsU5b3k",
  "key18": "663MbUzNkJZXrM8oeY7q4LHvLzwqNgYS58AxUb16KWBvzkJhz2BJmPj2oUNmHMSNsCLh5jj9mub1SuVgeWVWonSy",
  "key19": "2iFzM99QCUt7Dp87H9mg1tKQ7wddwZJtcxqfp4uQerjCSD1aXoFcujLdyaTeTfyZ7v7BMLN12gkgUFjLjwu1wdpT",
  "key20": "2WHi3py6qdzu3XWXVD2z8smbWcqbsLeKPtQLidUzvxCZ4nJwgHhhwNBCBRNEjtoVSrAKpSsvrL6MPWBQzZBEiJCe",
  "key21": "5QTgf8ijjYkYTdLEetKchD58PgpjBtNgGuzd8p1RHSeyjTSf8nJuKuNCSxv8Di9diAnJP86GRCj7kpsu28t1vk4F",
  "key22": "3FefDvbZwcPibYgKoN2WSCPjK654LaFv9oSSkdusumBAdUouiuGoZ3EF6HdFx7GoBn8cKXi8eB7w7tkdQj5CxEMV",
  "key23": "5dXh5FDfD1iwh9bPjwFJN48V65rSodFq8NHZ3q6pt3NHpPk2vCf9BbxiepixRRCTcbvZzbbkiZMvGTnNg6FiqQeW",
  "key24": "3yzAqFTPXcJ8v88Qcaq8Sg98X6WSZ7cYcSX3MC4JccTiY9CKEZ41zQM75hb4ggGB8HoDyy34MMyfFv2ydsbi1qFF",
  "key25": "2RKBRUhTJF3c2a4dsfqntcSwxXmvGrYYT9SRJhqmSJCL86C1xetXz5c7L4eunKZRADFa2BPAbomjHGcxZFxhHMuF",
  "key26": "3F4pSZVWCLw75ouCeiQmFNTNAgefKRUHBFgRBFViSeT7CwDtox9xqmM6mAqWr3GtucHcVdg2DQGU4t4ThzaQdsaq"
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
