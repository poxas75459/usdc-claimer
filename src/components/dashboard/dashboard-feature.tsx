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
    "2pSaoXtrc4vG2ce4wspZMWg4dX5H1V5e4eqK51BgRsyVbDPjGjY3T8Fv3LgLski8Mo3Bqh4A1NvhFdn8k4NFh4zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2281UY5kXrn6svM6wKQNyi5P9XzpsF65Gav8M7EWMWSr5nKKsM8HBmcGKQnym5EN7gNeziyEL6jvxXegeQu3nHDz",
  "key1": "sDfb7wjf68ZBE9FHNhiKzbGd8dkMdgK2X4f13gpVVxiQ21jx7P8BoBhkA2fnuMXzHMCNnHSEQAzWRe2mcJduv6H",
  "key2": "5FK1Zw5dSDGbpj4KvXP1tCYNZRpKpgiVrt3zShV3acTa3R4kw2r9HP1wv2k5BiXuSXbXQtkHwpYjxxNMLmwRA2W6",
  "key3": "4UMqZ27PBZPXfvY6gyBFLWop3rLkDtPCUCZeMTvhcCC8fUd98i6VKWaDeQNDzxe1XhpnfMrSq2eGgeojZRs2Js9B",
  "key4": "3S2HuqeMyuKG6NfAPebRLXgvzMDfifYmS4GxJi48kYQRjFZJtUSnZKPvPdvwrW13WuMa4v1oFsg5UPibuq74TP63",
  "key5": "3kysnR1rt52R4U9ibi6m5rbcsUz87zZtA8x7zP3FznXcWzHYeuXZLSC5RCWtADFsg4JpzVmg6yvfc85R9j8EnkVQ",
  "key6": "542eZQLcisUo5fBdBsF1WpkAGFFEcfxoydTyjksHH1EtPquaPJN33P1qUJFoJvmcCHPsRsb2bbCKELbysXCvjNEz",
  "key7": "2Y8VGuZmgKDtMuVxdmQvG9ho3DhC9BrdLnmTqirrsKiQRdn12ktmAUzFQ6qUjHrqGmcSVEkHFHMDrEhJMsUustu1",
  "key8": "5iR5vo7VZSJ6JdN84zFiUXtKhnnNeR3BHkRtvkBak3dE6veoWLSwabdC3uDKdrJ8zjSyzwS76xMRdQ8JVorpL3pN",
  "key9": "4njeTMiVfDCNVGCdnUH66LK1TCbHNgWpc8ZGvbbPNU7XetYijvaZYk33CHqJhkCPX7kbMiDherMKbBUcQ3owLKWG",
  "key10": "54yzN8CXbswMF3N3GsBM8KpLVTdMzJPczs9EGYwA627fMCDUTPnaqDLCEJX6sgVuk9v9Y9XvKb5sYuuYGrMJ3Hut",
  "key11": "YeamKeys1gkXHMZ18pFAGHTTesU12vjnndbRaYFFm8h3oc3hLCZ9r2mYduZFbqoBXdaUcKE1t78VMGbBdWyxp7x",
  "key12": "VJ9PFW8nskN5XehpZyfwVWP19TBnZJa1eKy6v7rq3TZTrZu5AevMsWhRJjVkw92MU64Lq8JjbipKBHrT2VvfMWD",
  "key13": "48jtDrhCMDFfGoemYByxajD2L5bwHCjRQfdg7Aem9v5fp1EmPVb6cBhMpgWvqgpgaa29Lm2MUgLo567arCFfHL5w",
  "key14": "3DBgk9K5UXfuCPMvJwatzFFTbtXsj48DoW6vG1zknRWksEyU2EeR38Vu7CfGXbCWt5PK5biNpdnC86q7CYebtC6U",
  "key15": "3UVRZPKMusAFYinnB2MxbNRcr1joQhg6nAaYRNUbGTjZv5jReeEdAbCiNTtApsY9SzWjGAgtVz7msJw5GQ5kmUSk",
  "key16": "2Zpcox6RbVgYUayJ9kkW4geY73imaXk1hzmMVh5GaEETicU2GTdL2ut5eKKNZvk383mH22rmXqQN8Ro6Vvz8Q43f",
  "key17": "674eZHZ9xozryRoXzfiaA76Bf9gcaVzNWd2Pwab5pHvmR7wWiDF3t6h9Q5buzNDdoQbKyGMpNKh7H37SBizhVZeU",
  "key18": "5j6zdctVJ6ccZSt5AEhid4NhBWEW1oAsGfpupSDPaXUrXe3dnCV2hh4nwim1TRTerkMMJvR1puPxYNSg5QpnqZLW",
  "key19": "65MhpwnHtpsdiGJWxCf6h48Pxnbn5teLHPV7qMTHfAfiNLroWWUXE8CSW8jY5eDSrmb8Q5AkfZHci6X27xdiB2iS",
  "key20": "3xHDnCAUszHS2RupgbFKmeGJFD5GjtDEJBrToUhpveED8L9vCKUmqGB8uKk7H6Cz2CcfZ6waR2H2g23JCZgzn4WQ",
  "key21": "51dTGoQ8V3PGbw7kfb46ZK2kiVC8PPimS2PRqZJ9X99FJY2UzLabstikE5P1ezw6y2jxx6dHVuHCwnshYj5GFdhw",
  "key22": "3oP3i9EDbdH8TBoaMX9Af1RcUwgt1nm1XTEt9n6PukYH26SWmVJzyfPj9w9nfmeh9WnGXYBAy5ht3j3Tb9yBAWnJ",
  "key23": "5CF8yedfDYtvvcFag5F2vVkBjtQa87e3aXYEMV1JipqGmbUc6eWP9NYDC8XwBUg9cS34MdvXEzXm2CVMHDV4SzVj",
  "key24": "5pmBc1NgBXPL448rCpeXWfkXTxXRh9A6bG8W7XZ4jvC3J3WfwZuJcr8SCmZkYtPsb6kNraL7GSXThPGVrYyZ7W2",
  "key25": "hTYd9hsZ4uMXhas5f8Z7TtkoJWrzoX1q75ENf8PVS5WSJGukrDDSV3GzFZDo9JCY58YyDyGpA6xRJr8SwscsFV5",
  "key26": "T6Rt3nfxHTPt8wYXTSw3UqxKnW7387T56wrBwNccUiSDPrzU6FickzTjv4eV6buwv6EgKVvcEYwQCS7go313kH7",
  "key27": "2rRhPbmhvpTxtrgoVyLf1KfMyLh9VqEbZDM6n3UoU9DYaAX6Yx25USqPF881w8oJxTjN8HpDWa7CB2TbWEG8sCPo",
  "key28": "3X4LWYHEbR5vw6cpyM3jknnCThk962wZ2MoYgyyaxq28psuVWj4ePxrW4Hm6JeWmpjxj4i5QFLoxVBegHnbqqmHp",
  "key29": "55DT4c28qneTJS4MryjG2BHQTpSJczXW3a87EFvrfaT7Nj914eer2nymJxnAhamF54EqVkyH1gTzpeh6taB8iR92",
  "key30": "Wo2icDJZex8e9Jvq2oETexxu4SoJVpgJVeZbnvPxopDtNx3gmfMy4WssfkEWPpc4cytbdZGacMipHPs1jnybNv1"
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
