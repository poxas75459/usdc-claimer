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
    "5DLb2tuzfcY6mJEPrQ8FjumNJFEvXiRanS7Vb9STFnhjfavKPr3JjKvfysuZcb2A42vmBnRXntPSjSn3yj7M5anq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52TkwgJk84gRnd4CLdP5TBnmBAi45Ei2VxmMae4KhFRQRNoweibPszLdo9kG3qxYTui5fsg1JFoJesqEyUHLFQH4",
  "key1": "3gTyj1mQyKpGmY3yVBTtPqoifrZPoCyeK4Th2ZfdmcqXXvvPm6a8tfAW8fp7Vb13zd5jAVKUtqZUmzeHNgPcPcmJ",
  "key2": "Qw4eg97q7Sh3iVaF8U6WKP47thBcVpM13xe4UuqNPezEQBXHffR8rykjDAizgVn7kWJfNhmzcxzh5awgDRoTrA3",
  "key3": "3SZC8SeitLuGhYX1HNRG5umTAJwu1dVF6SoL9VPetS2VzbmwPZkPpecnj3bP1xM2hf3DixEhzFLDmNbTddyvNXQT",
  "key4": "423ziMYSfNew1VSZc2Jkm9KsfzFETUDCVVRsybrTknPxVTrj5appFc3WFbcg9Cq2tiRQWHbhkPiWciNhe1MZEXiL",
  "key5": "467diJ5vNKSVF2U2QeEmzvfxDxwf42hDB7GxwxBuzjFLM3g4yZHTycSYFfkDRTgR8X7RxGdBZA9F3zL4gceZZK5e",
  "key6": "5Y5NHfyqSMtkACqpA4558ChHaA2ucLacBCdEQuSpR9KKxjY5tTuLNkLdM51CGEq5Xx7VnRA5gSkYSo4LF6ypx3rR",
  "key7": "zzatL6izGgKjqCG9MQgPW4TQZ4pXtxJdBhuTMLg7LmkHiKw4p6Ugw11GkydC8AbGgK8qq7fyhMCWWA6FzwnSJfy",
  "key8": "5ruafXKArizELBagJmfm49FQFPbdshAQeHVHDuv8ccefm2uJx69zENJsUZdoTLSEfNADMyVo8kx7DRmk9ms4s8Y4",
  "key9": "5Wvpmcf8qypzmaH2dDnzPsxvYB81aDLmktJdURjmLFArY9XUAoTgPPGTS9EYyyjNTE8fVa39Fr1sS7Vp5rxjt887",
  "key10": "2LL3nh8DqE9q35MUS3eLJ5Uz4ZreLhw6hNYgLgSsuxQdSDHP11aipG91Hx2gTTwXYkMmnrc9txXGJieBCLmJaTX2",
  "key11": "2xveBVywdYVxym3Y7CaSLDUfUkzDuLhv2tUYDEq7nt5ZWnXJEsTT2PqKL8qK7VGv6Yrt7X8oJziCeukzcx92TfQb",
  "key12": "4KZJtNqiu5jknBAGudfyTQ46mqJtfjACshNQSoTa1RKmYwsYxzF3QGAtAWSPEUAF41UV8p9NwdJtyoB5aWZWMpXi",
  "key13": "58wPkygfXpxvKrTgj2gvJXoQ3e8cx6xemtqdYEaASEemdPeBAb38Lp5VbpmAPKu1BXZgwoyypbWiF5mtPJrgsyhB",
  "key14": "5fLVPaFpA8DU9qZ3ynsHrzM1CpsKWz5K3HrRixWR4BVTFj7tbL3D6n8r9jjMzWsjYuNUKCRmZa16vdeGBmZnyv2F",
  "key15": "ihYnA4XUwisdiRosA5gWotFXLeHhRCxu794Gx8tPYXDhrC5TXPLkGDGX2L3ggApMHBziHVG8nwoBP4x2i6nFN8X",
  "key16": "2sj96S2dyghkCRcJz3T7PPngnfYtzzsvr7j79M9WiMnhhBUVSKp6PxwdcnvR6bnHZWj8GXLBj9JEMmiqhi6TWQdW",
  "key17": "56FZGWnGB8nUT2DEbpReaU3hUiXCfaRZ8KVrcFajMRsQtQQjHAj2z1AWhFSUtszmrkTcJ5SdTZWb1YaR2fytMKYd",
  "key18": "46McbRqaMuUcPdJbVZeC1Gz4kpDPZYb4gdUx5jZJZPeqhzAfc2hFq59nw525RrwgzY893qPbXD4EGEUYnN1kh9MN",
  "key19": "3oqLv1cDKyBcEiFabfEGM2met1HK6WBoSeuPPACLpTqEASk9Hrk27BQ1jTubbui1t2iEvC34AXhPs3CJfKAbUW3m",
  "key20": "44vtENLoj2vc1wE2QAP2jndQRqZCXSTcHvvn1LgGHxwXSWKMxzdmzWvf26Widts7f3rp6LdPLjJMPtHJPNAc7uAi",
  "key21": "3W1ES7paTjz1wKf2NcxA5Dt9jXcc7SsUrAco94117mgmZX8YKVh9i5WxN3S6epDRnZEeSuwGTCEtcER8SNNMWFrt",
  "key22": "3YyPC7kKYREuUrmKJyao43P88BCChVRqd3PbL23QGvdQ1dKs2LKqfFgLimKNHWjGHNusLxjZdePwC9RKaACRjKQh",
  "key23": "uxwZoL37i9HxpXxAdJ7yRaPnzc47FgRTXtm7eAeZK4ujfZyFHT4NJ5sgo7EBp3cPvyJmsBawE4Lr1xXpJpT4R1f",
  "key24": "2cZeDck1Cgtfxn7ZhvfUGcYPh2KjnzCJFaUuLwRhmQbF4S45xicqwmyEWkui6EL1ymcMHRcVK2hdCQFSej7engvo",
  "key25": "WZx2BuzBXnsJhK8g3JnTwg2ShDePvNQiJvhoWxmncDT9e7C8rbcGpxLywY8rbL88fL4vAVYACYb7tECHCyNNNbi",
  "key26": "33pDHRU3Ys7cRE2oFannAQMBejvj6AKmxW6r7ntSthgJ2ccDKXT8r3VGbJsC5STy4kp4r4GKEcb8Nz8Jp48cfSS9",
  "key27": "477dXsnSbANgc7f17oR7epcXPKpKdxZXWBF3VS1zKY5LmTSF9Pnbrk7iQn4vS5woC7feDv1dhSyXMaKkNo8TUnPn",
  "key28": "3RgnH32bwLt9hS7fSXLY68JVMZ7bHnp1n9tRDjdCv47SYM7Yfw7tJxBiTvEVC2znHTsRY631DWbXvQcweufzPgtK",
  "key29": "2WHTXHiwom1kR5eqyyDUktUPyVVuAnQNfYz3cPEjZ3L5gceLMoy9gG2whNtkEbcVDS1FnRLbAuGCW9LDvtXmf4dj",
  "key30": "2UZ4QFuDvgFsqcKUJPiLdKBWFNW1LJ22D2UMsDHWjx2R3EgXuhp667T2171d12UMUCes8KKKLGEzpx5rrgfrRtwD",
  "key31": "BHB4295hHPNjcWh63q86sp8dUe9D5riVgXFNL4MCTsFjU1Qx9q67TTXBxDF1oaXJnyGCzrBDNaoTdpfDq7vrKHj",
  "key32": "4BeY4Dkzy8Wp7nwTJf59nMQSuPrDNyn3qFzKRQL7WfgdSVG5pDaawbW3ggGh3N2m8dow1AvbL4vwHYGoctiqEjni",
  "key33": "26tNjZhXC8dp28FsfpXQ2UR5LhKi99sB1HzBFw6oLN6ae1Lw5ok2Mv5GcNRmCYVDBP5mZaeYxhiVNimTFUoZSDsJ",
  "key34": "5g1J33pRAQXYucSjLuDZTkfoviBfFqQh8HpRdGPoThz3SPonJ31sgJPmKuhpk2qYTTA3oJFXUYDUBUyLUyiMUoHe",
  "key35": "5j1KHhq7GwYh7Fnw1oSCEpCrjh8GtzKRpVbGqq1WZBDmu59haMDnKS8Xv1patVgoUwR6t35r4AzWTF865xHyxp1u",
  "key36": "3diAoR7EnWcRsg6mEX1eMkmCDe1nxnbb8gkbcxJZVocxu3UWnxyUBySPtLT7sk7Vy9dsTxDoLH9Ppxw8vBVuv62T",
  "key37": "HT52JyXsHZUWLwpBbmLy6Ngt7fK1HxwzVe4YCF3CFk2pqzv3oSf113jV4NjYhp4RBLR6Pq1QvBcN6gg5aYy5Qw9",
  "key38": "62jbckC87VFg9mz6uYTrt2NwsyWYbPrVQtbmxYQGUKYEoapZzNjGc6rRDvfDpVAez9tvbGyhTcDWhABEL8oQcnsJ",
  "key39": "5i2xpnDuBhEuj46FYHDt7nd7bgmJ7oPQvr81EBo8XBD6mAqPURgaKhVD78cyMr25mmDTeh899ojTMtPKWic8BYCS",
  "key40": "3NFJVuw4uzoWBgyBLL7SGrhMep3whS96XkBX4UzoaozmWsAwyCgsjZ3NfeFtTpq4ZAe9gvgUVrsYFFX6u3vzdmvu",
  "key41": "dLgEUMK7ENycZKVvasxDkkf7WkcTKNxnS3h8emVo7vvLQNKB8hfJiy4XN3Rbw7Bw1L5EPKfmqvFa3k9VWh1WtD5",
  "key42": "2QRXgHryPFD5uwDQ8kQkRZd4kFyDsbuDHj6wAeubCMLrQN68tvZJiSaqJtY4BNXBxpGKW88qZtgR7nfLhNVvKVJR",
  "key43": "ppeRVVrdrYezNwTRGFKs6HBx7piHdCJhdgyXHtcQbpoMMhDpU17V3BiwwRJEHFUu7qeLx8VTuPgd81qJkTPcaBT"
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
