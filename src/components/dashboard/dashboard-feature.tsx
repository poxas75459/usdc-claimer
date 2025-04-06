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
    "5hyTrEauQ83xXnh32McoaxJ221r1fYEpBWWsdsc1MZivNsYTMBc1X6dQ2twqwdqDZ2yhfFsJbMVbdQkgUpgBEbUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FvyWouXj56sbSZEXB1J8Jr7aXpzi1YZLrUNGdTbSGC83WDxY3HQePtcVHHKtVNmWT4SZrNjBoufTWi7g1yT5LuU",
  "key1": "344gT8Z3ZTrZEsufU7yNMcCuFPBWDQach7Trk2LEsNzGefaSZMn657RyFKjKataeuLK7X9UPExv9SEcSmE8k7nat",
  "key2": "2kVqTfDnEbcCvXbbki9horvrVCAXPtE1h5H4TQA6rqVKWCaoQUnxMLXvnsSycuhLceriQdJZWcpe2U2oRDs7LDHd",
  "key3": "44XxbMPgfw9cdCG35LGWrh8uKwMapdFKB5yiMBPmen4V6n84tLpnP2DMs7LMPdpDtCCk9iCTJU8EXNz7AGfVmAPz",
  "key4": "5jnasD145ev8MCysFRwKPP82kBYK4g2FvNyWLBHCgsfM6m1py7TeutpddQeUgXUpdamYzAm2pYeuRvoGc8Wu2rmc",
  "key5": "2AgJfAs42Tng6smNcYucrtsRQxcX5kUa8p1mm94KWxCHyyj2c65RgKVRWoZYA452x8NGz2XPVoHSd11xTdE32C3z",
  "key6": "LFW4ryMrLp9yiEWhvJ9Hi3GeahzynwLrtoUQWNuQqyviCcYcdjx7EEXPzqRxKVnAkU6jxX1JRuXJ8iFEbok7Xns",
  "key7": "3HCUFNxNEJEcCJvtkyRF5XJT25k2fyjGyAUkAuMHofYU1cQth5xPMFYBUeVysACnCrm8JU61RBhwPsa8sUiwimjt",
  "key8": "3V8brTPBf1Vz6zPYsbYPjwpaMhCcRqe2Xx8xHt1DTt1u1RBrFPvHNsQhuPkJ9K2fjBmotCghvfvgy8XxoDqwDY35",
  "key9": "65THRpwSWh793526gnY7csNepqSYAXr9wTnJqm8GNDXW46Z1sHAVTxHKDn8b4Rssc56eSeaSjcCg6ceiboho7SSa",
  "key10": "5S1WP2BwpdhvWSbTXMTvDDpX59M9LYJchtgvPNaqzaYfP5AC4yNBrqy449QtgT64yUTMTpsts4hTshQdHSddUrCV",
  "key11": "65F1jq8WQgRAe759aiEeCCXt56jG199cCARmdYQRYyrG6JPc14BM1G1UjqeaLt4A8B3quLBjRqrYwT849mgk8Ppe",
  "key12": "63PXH2RjthKGrJ7vsLjoMZQ1wKkPZMohzPqKjPdBLHoWV4uJ4NdFnVFfrR8FhmkS6AgCGsajSEssunLvrYDuGx5K",
  "key13": "3p3Bb5b5EG1NSaZ8ZC1eQDcyhd12fMCH5N5PKq3V5SxfNQQ3s4xdc2kfyHTFsXHEPA4DWVCJBVhb8W7hw3m6iyno",
  "key14": "5AMVTVXER4ZfXJ2bqpZETJ3j1FN8KqKwjRY8b3Vw43NmdQGKPx3y6BxZPfSr64wMUNi5SciwtV38d1R8JCKc1CFM",
  "key15": "48HGcGWf8d2sHWQNhQwY1DrYsFQC5az4nBeV46dqxHFp8k9DPFhsKPsSVvNuuVjjDYSounqgGHTKNp8ncVATjp7g",
  "key16": "4kqq2HRHZVjFQb9xakSbkWEDzwNg1NQBxkwGr2ZV2E1m6eK4hW1FaqhsxUDdvDELxirR8aNV2yJH6mXk6weFXmW1",
  "key17": "3k6E56mZfX95m2xh1XTGdrGSagYBMuGbGw2c23ZZuFyGTC2Bmix7zoBUW3uVqfAoHhDiMu7WH4yddNweBJXBdeXu",
  "key18": "2Sdg8vi4YMcDa5jB3ypuPSfe1Jnegzzjd8rNq2QfCymArYdFNr735RvFQUPvcNYGuAsmegNDbtSrWKJmxC5UYKY9",
  "key19": "3o17YEDrVup1w3HJVxmTtryPz2DtfLPg9gPnQN9dKrYyzvE327X2wQBxQzqynRCXJoQLKoj8DLtmha3GxAesdZMa",
  "key20": "532tLXkNspjyexDMjg7rQTHMugPd9dqpg1egGFZ5rv9r5N2BBfHUnP6GsxSqq55f59LHfB5diemT7Kav7eSmWvaK",
  "key21": "Hu5A32PR34LKPrM2ME19v5F4niztBb4z5nGsXkzf6JTcuaSDYYbTVnsDajexDg2p1XnA2M6wp2EyzrSxecvCzsF",
  "key22": "3ocvVNK9FwUnBvHZAQTgdikksjtLgJfTWgnj7GDCRFmfR5LuFQaCBGcKvzRiu26ZXvmUzppZw8G5CFmutDjAje5a",
  "key23": "2UKroUZD55vrNdejciaRiArAdbADpqbc7UomB8XFMB2xxdprAqipbWFV19pgLorCzeTpATrU13tVp3RyBfy5V3K8",
  "key24": "3M6sshbL76RKRigFC1fh9U97xShKWZocRUbK8DEJLobLBtmAr6LWt4BcU4hJmZerurXZxoTCh8E4eyBofGCdN9n2",
  "key25": "23oFncrYqwzxBiqxpGt9ev8Kh89f3SLQB74wVpY5TRwSjZpM5fuekUNswZBdhTRTSpKrNwQjnkKQjRcuutQRtGBa",
  "key26": "417JxFfHHLcVPguoDSprXAKUNDvgknHPCxxQpoz4q62JHs6gUDFRArktPhkH7uMaregFsKYSdzRfKSqhMiDwh2Uk",
  "key27": "ttPRmowVhFSWohpcxNkSVXkyv5ZDLrdaBXdtn5JqPVT167kHFTQxxEXyEtscWViy1pMHXj9fjmUuXpumgxSQWt4",
  "key28": "2u4NqedsrYUA9d2ZhPdCzhCeTo42pjohQKCXzivJHeZPT19jbC55dd5JQQgkt1p9RgnYJ7tHNjgok84pYBVVuF5r",
  "key29": "42AqqnWtQcVEqCYvdUrfyJn7LCwT8NRUXKyc1fKKifygZMD8gFMbNGVW3KBp3DF5RhsqxuCZsroRk4zaJ5DN7XBm",
  "key30": "2NqwaFjSeiNwdgVmwCXKv6iNYFi5u8u3tfBJU5DxAV1vYeXWo8AwbDKpmt6Db6Q7p9Rxy6WD7GxugeDDp3FSB1ud",
  "key31": "U1rxVwofS7JTZiuucHKzPzqjk6f2ACJ1Fu57oUDBtrQT9Vd9zgdUZXCnbinFiL4fGqosKfVYbYj7qLonTFABKRC",
  "key32": "YUiCiwYZnTECTzmehN5GUT2SyBGxvT9fRk6xqucLJPCfDKGR2APNsgJq6ZF3f277XtZM9wkjwGU2FDW2ynCm7yL",
  "key33": "3TuUZsNNfd2Pade5rZCcmGpNBidFoQYn6cwjN2wmznY6hYF1Ln6Wwe7wMLMRjPY2rgtepkptWJFpjgX8VX885VDs",
  "key34": "3GfQVW3fZ1qDLZ6ESzzbRM6UXY2Sd8nwA1htQ6TuwkFgwPKndMXDcT7KmZGz6gka4ATugu9Gm4pkfv4591Q6BoLZ",
  "key35": "5PyGeGoAVthgbSWkJE5S5m96VW8zoy7A8h3FKwnPaHLB2nRUMJFSYvwNv5tvEbGBhcpPUY5U9GjtAavs9kF46ek",
  "key36": "cGqmAHqpGyYHTohhafSphSysYN4imyPYG6MAuqdFt3ZxcJwioW2c28Wtv6QM7a3swgehsPpztThRijTpv2hjSXa",
  "key37": "36mG2NcLTMZg1f3Xt4fH6MZNeufzhjerSRzfGdQ6w44XviHsGVs6ZBy26ZNTm7qDgRNXZ4WHCBULdDAinEsbn511",
  "key38": "ixQiVSs7ahMiXsJfT6GL4J8B4Pa19yvxTMyWbDjDBNTkdMHF8H2thuTvcbL5pabcgX3zS55kQBnjSiXdDeKc5kf"
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
