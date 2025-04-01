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
    "37fnCkQPzJ5yfNg91yrHBj7iK1J58g59sgVQK88zufVpLpM2HcJJ8P2pJuDgxnCG24PwJTreSHPcVrMhbsgE9rqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEbbn926db3cAb4QN8K8qWzo4a2PR16ukUPMVmzDDGAvW6KnJ1DBUiP6TK1ALyXnDo1cu7Ev7T9LZ3kQ3sh144U",
  "key1": "4jCci5cGdVNDBwLWq4ytnPJkfC6dWTHiwfe9G9LVUKRFvqcpwqFGswxooMMkbY39MQH6kkGm9U2K1bV2qvGLVTMT",
  "key2": "3K2RUHcaZwam8fNbUj7ZoSMSPuVv8CZ4c75kuHkYRfw2CfFENyuDwjEnGJ1zHzY5v4ahEwc62u8aPk73TVK2Kh56",
  "key3": "2syF2dLpkSBorM4wezwNNZbPkmybwzn2diqFwQum4xANCQDmVzwfhJNseboEFPFKjazYMtufgGxjNdzPqtU51zpm",
  "key4": "2MjwnHNbLDazTAxuhbZ6wzhwcD7ix4NBXySvcXRZVdu6f9zwGRFJWAYNB1p2KUWqPeMdiqLwhk6hqL3g6SBsrkEe",
  "key5": "e9HzrmbCtrtrqzfn3oWozxgw38YkEdpBiBJ4ZsqQxbB5tXAmq1U2YLXUEnj2ZUysGrJzKUm3kDNFwKgfB5HMHS4",
  "key6": "4Gx6ppqZgZ5VbSFFBb4RC42rZ4E8tR2k2wLLcdALjSNUBshqVEWowTrMyQtgDh4y9T6cDSZ3dMgiVKMKA5Z8kLDz",
  "key7": "5WUb1tfg7BuGh3UCbEYQxVxYCyxMTba1w9uKBH5HN1h96fPcSyWGTpm9J9YC263gJ6QoECNo6YTgSY4PAzBF7s2Z",
  "key8": "5rDrVgXJVEUcyp8KFE3FKb3L8GrwAgPUL8PLnQhBwPD9WEcaFz4ihNHSRpbDbCA3V2ocWepVZMdguY8bwNRdujs4",
  "key9": "2JmQJ15YCBTnRdocsLHK9TR4eVMCWhgoK66DtWx3JWiLiD8GnZYsHEjTpijPw2P4mSa7ACFcSCmpeiZs7Cfs5wtG",
  "key10": "5GQXj7KnP4Qc8prwaYgL9fjB6EEjqr83zix6ptZis4U7VVhTaVn7hwMxLekm1xGox1uEuK8Q2WTjGm9qdTwLmVqq",
  "key11": "3rckC89XehAS6YZamaMMNfapN8Cic8W7MihoNCBpGAoud7hkThG81XwAnYn3o5MCE5wWJifJdWb7p78tBx18wD27",
  "key12": "2v91psPwp9Su2HL9twUvLPZs7jBrDsqMnB7YuJBTGmEh3W9NxoiGWP91RTY3cET4D4G4pr4EE5xyenBuKPcTgZoK",
  "key13": "yYrk4jkXEdybe3itSADQWRUTnf7kE3cobePcGLfVBGpRyFJhFGt3esBvZzUbztd9d2rRPtEa43QAER7LEaWQU7H",
  "key14": "4Sj8eEgWAWU82EExRbikFAXX3XAZaoWqHDCjQEZ1yKpkvtf4NCTijSa72AG9otFChCoyvE26QftgFV1XtTLUq9fY",
  "key15": "8NcGKHMcNRMJQR9yLheT37Fg3KucRkp8zxjrmPKVX1xt4Ryx77HatVU1GLcejKStBxzRkAacCnPXuatREtUBDER",
  "key16": "LatbJi3UZnf5dG2MhyNR3mYT5gMU1q7PAC4uDMst7nd9kTAgKk8m1H2Kzxx6zLWFJzTpn4DqSqGZCkUcAVDXEd8",
  "key17": "4VV1M1rP2kFRh8f2qxXRh8cv2wGYVpM9eraFBAodJ4P7ZPUemhn8gg9fvNmcYGZRLgnDMALqLvofMUTNgDtiamQ6",
  "key18": "hCRXEC8xDNnTNvwk11RsCMgp7VUzu7VfC1MbbLWbYGw4vakAgT6dvS3Z6szEKiAi5UMTgnptNQspLJ94cXuDUwX",
  "key19": "4emoNaxZ8n8Vdp4ZsHEkZnmfZr4Bncncwaxf66127VHhVK99va4ETe9pRqxvn7Bc4ajEESZYjPmnkoMcA6YBK1pz",
  "key20": "5cMfbgLaTgDGuRQJy5XFxgHLNYiZmUsNtZqFoboZGCqG5Yfv9CyPqCvXoX3eT7sudZefxPVYfev9EmY47FXRLzPZ",
  "key21": "2jPwJXiT9texZBGaoHJLgWF8H2G7TQXxa1b6kNBibAksEM6LRjVdmMzH59gC5zrtj9myqVmgpb2Pto7Ny1QMUdYB",
  "key22": "XvbtxDx2PjogF9PQGnPgAkqCGdErLCWZPUj919jejbE9tQ7Bitq9daCJm342QLkkweUVgfivbKhngqUJz7eVvzA",
  "key23": "4GJV6uYD7XU9jHafBZdgW7zVTk8XNi7uvChXX61fQeZucn5UBqMYKfCuhDos9JGMb5EFy95gLPEMXh8BUruWCDYV",
  "key24": "44jnJoCe47xgWTFW2sjPjzGu5nCaHA6DxDV6g6WnXhxe3mgi5Z8oCTDUtaamA335K83EJyLqQqsBmZUfCEh4weTi",
  "key25": "5SNeGpDLAhy7VrjEiQxuK6QADaSG6fZ2Ry4hRXFfDVKtypzMFtd8QEyTtGGzUGpA9EqU8n77tGq2aMGyBPpmcEi7",
  "key26": "3SRGntUbdsEKTSaqpMEoRJxuePjqLq2SKCmHxekbUveh2NUuoGqx8My1CZh564Rc5Axm2qGs8cTc5VFJsMDaDB4V",
  "key27": "5bgYdHhMxjgwpFyCXiegpSrjjnnSsn8VZEKeam4acMb7LfUNMzY9kBHDV1H7BWK5FccUJgwKS4YkFjzHZxFeLM1Y",
  "key28": "2gN9kFT2BHFEHeuzRQ4urf3kyCjcDA1mtYayZRMe4UoahNsFCGg9ff6ernDY9i44mTUXJUMYYh5zvdhSvX51VahR",
  "key29": "3yCBZvBYWq7to5TFPjHJK2XdzbFXjryGgg87G2CpzhKqEjSaizxia9VaJ64YY8Bb2yHesEGmYzgHtEBJyA3ktRTU",
  "key30": "2LEvrAJqzNRNgApo1KHZiJm5GVpFKbDJVMxe1qNMtsypsuet45Yf6ZvNBUcvBMZQ6qTJ2ZSMWrRoQFi7pWjx9GNH",
  "key31": "4nzxdPJmdGciUDFCuuFFyk6b7Pp6wyswxryAkVTX8Fn6YJ9Fkic1Yq4yaDQ5WU4b9qeuXB4CxczZUqRr4qCTwd4p",
  "key32": "2FqBGvvyqqHwV9NtV2BWHrG7idcDh2Lj7Lt1cMYZXZbhDKDi4dVzCU5PJpQTTqxck7PAMKx752xg5J4fL94hXzF7",
  "key33": "4FvkWSfSweE142o3gKGuRwvqxc8aN91kXDqoEsCX7ioxYfn8ezFcT6sdtqd95SX1hwRZLehmzL295V1QRsKBytTR",
  "key34": "65AWYUWTdDQRLDaG1ARgDoK5TPDAsf56vWGsSnHk5UotdcNCVcuFn7VZEybB5vQo5HyCY7Uv5rT2Uh6YFXRRyFVC",
  "key35": "2LxrqyRK44iCwiHQ7EcWWDLC8xETgi1CwCbnmvF2VDePhvSA4KmRaFsVJbtiswdmSp9rjRb1r5uF1HsppgEncNFe",
  "key36": "i2V32XvjBw7qi4RLEL8r1w9U2TDi9626zvQ5fn7bLCMKJyDi6d7E3r7VemPpHgqeY6Rnvn9Ru5HngN7Ha3Buep6",
  "key37": "pknj5WTfMXAxpcb6z1zywiE5UNADaMutjsJe3hQ6gQZFsbnKuNjox7Rn4SDDAD5FgcHRqHcJWQJ4wJTc6k7Q19R"
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
