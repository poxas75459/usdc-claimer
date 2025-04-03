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
    "XVonthF3Y2tbsXaEFNhfRBy6vbk5uzFqT4bqyvcqy8BUXuL8qFeuHFNv1ZRk9sMsmDKAxAmXv8xvLuMqDqro9RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33K8HKnpW4wMgy7BXcnreXAbXk1fJCXuuuujhbQxgRtdXT9LraGKJ3zri5xBpJ5XsZb1sfq3FQvgiFjbFWeAkzAT",
  "key1": "48WcERbBTKB8WdHyU1zXCZ9LP2zULr2pufBqYe5uta8Sr6C7mC7KjXqeNZ5wdFhi1DeDq18vcEC3cV1WVaUgi7D7",
  "key2": "21fiQCe1vgpBQa14wtvsUFBEmdtFGadQfzB41s7A5rnCXYw2MK7UUmn5J6WXwBHbDG6wKm9NdcHkgTxj8qyukBFR",
  "key3": "5xq6Bi4CRKZxsrG1MHWKfdjCgB2TbGmkiyyLP6GVod9xtDxnNgUo4xdRJwUeetCnXYbzwK9GoiBKLaiiV1spid9p",
  "key4": "5qhzGiyV9pMLUA8F8FJe1pfe4HoSf22ap55csrd3LohQFfjaiE2QqVpt6cZDyia3UYxQbpEySWGLCggSsnLRAA3r",
  "key5": "r8XHpXZ4PSjd6vKLFxuEv3H4jXVvYSKSPTcK8hHeQiMg1feYGwPKZa1TDz9N2nv3LNuNtCVrQwGzA3HBNhG1bm4",
  "key6": "4ctmWEfLZQBquxH38bzfgcdiSPKmawakkGiu4AfEMGTE5LwLoLoQUpA5XBdvFmCGdTadv1tjfHanJL3pwTufxu48",
  "key7": "27SjPxo642Dd1CwawgJq295Ai61HTqEhj73y6KYLixYt4gCA4N2KvuHnpZ5mhSyQh9AxFjFpMvtwUy7dfaK7MthD",
  "key8": "27VUqfG1zrDVVK3gCu5yiXhEt8iphx6enua8vpEh2btnDkSd3umAF5PZAqo5vfcKVPcQvz9K5QmrrML2Qjw6uUrD",
  "key9": "2KRnbsjFDfegdXMF98ezmDpNmCQE9wwwSydDhiArgy7wAp5TmwYHxpTnfFindGXwauNoJAgCWhGm2YJ6TxNamAW",
  "key10": "19i9Gn7SiNRUg4ax7D7YnEi1PTG4kLmHRGoCYLt3RR689TWPQ4qVxt6XX6V6ce7jBQzHiy5GQZmSjaXtX7xj1p6",
  "key11": "4E9RkNT9wRb8tZHzo9QCK5nVnxckrzMnyDYakoX9Z1zTNQdMPDHScRK5ytZzCKehyf1NFik6G1sCja4PjLF8Dn49",
  "key12": "3WBGpkCimwry4pJSohes8tXyd24vaYMR9j9zWU7d6qn6qAuKpx5dd8RB4HhKfsHwVSanhLsvELcd7ZvALYmD4fhz",
  "key13": "3wqY5EiEsZBb1k11A5SBYUviDETW6fyQnLc7tdazciHNik6jNwTh1b5cmAVnSQ94rz2xhpHuRZ5zee1MB2ygj5rT",
  "key14": "2mBwhnjtodWbEVGL9evRUG8tjbSRBuYywdZVw494eqVRh2UGeTk8s2MtSCZkxpv1TvMK48U2rvLuCjRcpQAbVfba",
  "key15": "36XjaiYa5hv38vKyToGYCgQBcdMCpwhqpWQzcQnEJpkhgUG39b6gK9FsKfyGRvsjpSLcwgoW6XedMkWt2yRTZauc",
  "key16": "4gNPnYYkvjdETXHVH1o1krQmQ8SeXioLZhG88j9H2fkEUhU39WrJMptBQ4D664ciDYCQphkv8SYssCZenk4qiHqD",
  "key17": "5y5SasB8kDeM7CyCYcTSoJZbzHhL8VFoCCRgVknFgPKQSHqbgjUry6tiC2GxMUQKVgLjYFBtTjc4kGPfQUsZof4n",
  "key18": "45ERithCQAbdpGMYTtifvegKGJsDnKnpdjKg2TLXBnAPu1VX8H7DuAChF3CCcHTnsAknhCoymsThCkd93VsiEn9o",
  "key19": "Ma9D4qq7V5LMPnnVGTERoiAaRquccvUB5WvjWEouWs2RoNiKfRrrSuwycJhaBM4AixkiTfy1gnwNzxkLVAZYQst",
  "key20": "4rVXhfoLCZ9aMWtchiB1Sn3ZtEaar9RUkhb6E7idRQj6EyxoMyDevt26joUkYbzcCyVjSbMDhyB3eRvMvkWHPFGq",
  "key21": "3hiywx2is3oVHgNjtQExN3f1wZSVK5kuWMpfS8irgCRe4HubAzcDbUvdLsjyKJZFiFfcf5GgF7gdZQnFBNrz665p",
  "key22": "2MF24L2LxqRcanhQ9DBt3Wt3eTsPoPFsf32Htx24ZYdZ65jJkGLnqH3ndaaeM4xWHb3Z8ewxbTVvKyJPUqpFGFua",
  "key23": "2S6t9FbNxQoF9xJYYDrECxMMUxaAYiws4EqYByRebw8xcB1VLxdxx1g8LWhbuTX5v1VioyD2rLhnhkwvDsQgU6f3",
  "key24": "2YrngxwCPruQQpgGqYvCB4YSGy2pFR1A58qqEQHyRToLQtEToddnU3yJTFCqHyhzm2eo3g7HZL9gMPtGZPRfaFsB",
  "key25": "U9jpNmRNiaTSoH18C6VT1XuCWJ9DKKwDzPRoJQz2GJmj24u4rEFUKUAtSWUcdvZf874qxpEqmf2fCgXNi6nPv2w",
  "key26": "4b8qJ4KLK2pscY3aPcYGYBw6QgUkXsQMkgWVykpDCJ7EVKYcJYKSSZecbapnqvb7s35TDebHgxMfZgcM9Rmnmf1n",
  "key27": "VEJbJs7HnfGgQ3FnNEDnyU2jv6u26XoyAZNMz81U79EaGux74DnwWQ79P7bU7r9ddHefSnRYjAFeSBGrM5X1vkZ",
  "key28": "54oA25MVCQ4YGrHhJ6m5CmecwF4RfYQzYmRx16vRP6zdmfTigZtfVPUEPq4pkYpYcD5JxYfFAwqtEiHBJHgymjcj",
  "key29": "2LFPYZ9R58Fmtha3pzgYBjjUKZdUXJPefvRhTPHQSwiDhKsv88j3D5NcPCKFotYmr2oQB2GnieqYZdTjtesBEVHY",
  "key30": "58cKJapgMc88LWqPUrKFdyhDrzAh4dUe1rTXkhhuMbriBoxUk1ntQaPr73kkwKUpCLwKYM69wkRHZmXDMNTuBNiY",
  "key31": "4mKdnyVAL26NgXBBGNHKCfb4oHpfiQmCEzDqg2APjcGmaGJgGjktUSWQkMpYvq9RFYyrghjjRBs9AuRhqXuTJDBZ",
  "key32": "2XJk56LvN4ZAo1cdJeHJWWuj74TsBTGmULThLHaWMQ9Sbv2Byp6vqsKiGQVJonuEKDRka1myQUgCMkq2CnVQpNrG"
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
