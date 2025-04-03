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
    "22wNoukaNKi9NRLVTPgUDTaw81aPxZhL37EEXPK7v1AKu2AgFafJzG2zf9JNyPSY8F4joohvKUz2c5QmtUCVyE3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFfP2ob6YMPjdrkCHKNEa7ugJsf15JB4fo5ts9hBiKSnsEsZXhqBLqoe3VXENA7KxTJXpHpQa8MFesGc8kBq23w",
  "key1": "4t4bQe9e9ib5nC3FBaFvyD6LPsZXLHBxgLT98sHF7cQ7GgiYB5AosGj5yck3XydLMTmWsbkmkvA5z69j1Uak6m7v",
  "key2": "sdt9PVKmgWyPxjAXo3At2e3rXENinY9dhVgsHX5k6VgxcJYAyBf3oYJT2vJggERheNcsLFoxZWKa4zRc12f3FZn",
  "key3": "3HfWcVFJYGJtmgPbkuQQzudeCAeaV1ZexnwSvbQkTCLUMefA1QtqcoqbwsRieL2oCQU15VDCgRp47CqwUCnh8HnP",
  "key4": "cDx1sH785YM93XbPECoCPxiTWpVzmBAitbwrw772fzVDgT4BBhhEoaUdLsq6w1KzLJJ9qJ3MK1Zdp1EdvVJWsMx",
  "key5": "yjG4ihBepdGsPht9hRP9eKXoDkxj3YUEuscj81VTaQTQEdFiRFrSa1oq3str8tkGbFqZDMnAxLU85XWyi9nQGMm",
  "key6": "46fCPSHLpY1PLesZTA2dX19Jdcr5C8JmGsJraGCjVptPr3ACeMnJb6vSKWHfQPu4t2ZWAL7nzzDC1eJ6qesJR1Vh",
  "key7": "4bfpGTqa4gEiNFKTHxk93yvZg3S9NkmE34771oT8nHGJgUTftcVHPHtoEKFsew4ezAHT6Wsf6cKQjTEfySSXQGD7",
  "key8": "QGKSbL2Z5ypBuXranjKFShS5jiWvWrhjYH7RiRSyUKb8taKJhcUeSXFd58fEV9tNCKMSQhMwrjKEMbtJQGHpm5b",
  "key9": "4ecV8gPq1UhTJcRGsUBzmVzJdjtqHcaEDJMQXqPN9tQQ6BQSGgLnCzp4VsgL5vfjCj66gbUuJwMRpHzNx4344Bcj",
  "key10": "63KTLD3bLAH5soiweuAYCN9yC4fA1vY7tBX8pB4FPBCjDKwQQosiCs5ALuzppwXkrMsHQ9ed9jPbbrVNEvjrn1Yb",
  "key11": "4igoiDNsC47VPNFq2tnkwDcJBnh9QGexjiQmgQPyxmsGnwZQJbwRJB863CNFd8FhBf1Kz7Yyfu37RQUb16PcF3HG",
  "key12": "3iGWQyzyMCUQdpdcpSybLDFu7fZHKqFTsBwMZDXCpnX6kna6NZnF4ivRrnv3gp33pzou6Nbqjt32u478s3ZgjSkS",
  "key13": "447tmvkQ3tDvWhR8KVxFXZXGkbEDUr8ZqWBvVucaKRRTEPsbXw3R8mP5KvtdaZLao2ggJWv9YtWXrQGqKmix5Lg6",
  "key14": "LtRvUoiyFK3XPk3s3EEHaVRXswsbDkzXwVjGqY6CXZafZWfEfXVtqDvsDyZDqLAyCxSuRSoLkMp9LMaUgNqXifZ",
  "key15": "2UYtMsXhVz56ZBiTJhHpAqEcMmy8KwUyA1VCJDZQAC36Zw3hArhUeReqhayCTVyi9dSnrwxiHRxLdJ2C9MmBGEGJ",
  "key16": "3Ctiy4fnNVV44r6NwwkzgF92zb531H1Z5cYbdXYuabPhUF2ovLX1UimmnUpPiQz37hUUU93WfTGQeJBmqqhhkwcv",
  "key17": "vEX8RUf5qxeSdpbSpNMWxUDprsWzvuCKpfKcyriCKMgAZSnk8YgkGFKbDShE9NrV1h81FZEHssscsDGTquL53M4",
  "key18": "burxCvgTehvZTmZeZFSnFC81Q4FiRyVqtmioPcpwp2CZmRqxaktujoCYcsM42Hr7C3wrgFMMnvvYrFY34kuahkw",
  "key19": "CQFWpjp6YrD45JKbpSyGKo9YuCUbbTKnrLHUUEhYuKTmLk4uigPGFXULmZukGzYJBoPD4ijYbHyecAtNfJvBTYt",
  "key20": "2RCrrx7HgtSM3YbW8t5i9dWKgL8hzC9xxrWs3z3fYb2aiaXYLuxkh9tWWCPBProBm1tn9YtoSsqBtjxszmK1qypz",
  "key21": "XEmAkW2v4zyhJw1wnefYoUnuJPeKbjxGEjqn4CCJmR3Y6bDS9tPPgx4Nefb8oBrkQuCzLE8sPgki85bw8Bn6Bik",
  "key22": "4227mW3vkoNQLsw3VhpmnY2Pdu8eesYhJmBtdpap8nSrBeuNZumFLpwRuXrvECP4AfGm3x3ryNYgAfTcJP6XXxP",
  "key23": "2bDyxpofWfXc45y6psfxcj1BSLuzgbkaYUWFDbq4hvTEHBWX11m7DWw7gtgiN41mevzQs5ZwH7poyXck4o5er8Vd",
  "key24": "pd74UorK4aZoPe8uretzrGFDabYGxWFtpwoLr37EZUn8r2onji3bohipS7WZ3w863WZANaswaAYiLweQDGUfivv",
  "key25": "2iFKv5gGqKFVFRJhVBcLZBL3qom5Th39VoRnokTPow5HScFjPZFtfRh8D2kJvyK9Zr8Z4vfTFHvD3TxsXMJAsbJk",
  "key26": "3WwLmofa663TMpadsQujVpbLVukH6bVBCL6NLmXGgL7Q15U9s6yN9b7QS9tzVKbPVvyVi3tTHnJZa8zJSW29RTKc",
  "key27": "45gA38Zid8uwkpZPaFgxFKMBV8fUqsZF947TQuFJDA4dH7NSbxR7C1KVQ62bdYrRLevET4YJ2sp8FrxHAYj6FKwv",
  "key28": "2Cx55vEvfMtanbCx15kiNsPYPzVf3ECfR6g1Ehrh4iLabTXyNrjHctZi97g81JYfERaN3ucpVLU5BEzfTJMdUgyZ",
  "key29": "3YS1F2W1vwLgn4fMuDpRcHEtamGSHUP1A2BoHZHmbndXqQnyVYuXt9GmWRdkorPH34qsXouk1gRpACbt3dcA2Gz5",
  "key30": "4aPSxgN283S4iexSEaVpGCbWwKRrTjPEBaBkYVzgcgFGcw6qTNUSjryVH2UQebDozndNPp82zPuc6dEqXTeYJV2y",
  "key31": "3oU1zgovYkEj9oWDXo3mhLMy3kJ8XYTpMpz41tt5Mq1bMjB87YjxRZVd1L7DSYAmJELtbDd5Lo9SixDVYPRFD8eC",
  "key32": "3zwZ5QpcCVc6urhMvCnY8CjV5P4VeqDzzu1x8WjJxeSoFquqh2RdvvVgNusa3CCuCA7ZMkgLboSPo7uaG9qMzN6U",
  "key33": "25GtSNWob5mEVWpFT8CJnrva1L9vTvchqCE5mqpt4KUCU2gg9PyoUf34c6Jnh4N3qA1Duey4ugcuWBpJ535ewCnB",
  "key34": "29GaWArtjuKc5JM7WkvPnSWWPFYW65uFhXQqvf6V1nk8rUn53e3uzCb21S7pzUUw8JdtyorQk858xjK13zzm6wBE",
  "key35": "4nyHGoEnP8qRGEsQRFcczHDZy8hvkSz8dxSjYPtgQdBDBJHuCMBkEqm96Ru4B8o1amJc4wA6kx12U6PRqDVRJVDo",
  "key36": "2TrcqTcXgMBuB7tje1UZLzeZKYgnXhN8sJwwzZFrXTZheJew3mwPpXxLrcdy6ofdHQnD7MXQyCGaETj3tmV7Yu3v",
  "key37": "2oasKP87LvgvH22gjTo72b4XWc9VcTorUBbeMj8pj4tG88DWohrpCku7WqFyQYmmWEqe5kFtY7qRJMNRhbZTZmCh",
  "key38": "3MDeWMoPz3891JDyGPyGLB1WQY3ZbDoG9B1RpKFj6hYqFwhvYJfR8wt4jnv515hVfzePA8e2wRQW4j3eYDRrfJmX",
  "key39": "fSdaMfiaUfctaBw548bZb8uv1WiNh5MrY9aUsJ1HDFZPCxHRV3vmKTsXSZnBntmRLQKScKHLawDrGWvejTqR98s",
  "key40": "3r4RiT4JCfUParkHhQedFNw2AJXo5WVzjK8o3YBfwGPQDbyTqtGmdgitYVd9jtzhTfwvdnkeEBEnShDjMzywatA1",
  "key41": "sgjpr167AhjQvqRnS26vzCSeZgPxkwFzxDUsun7PAVWXuEe1p5bd4LuEiabGzBEv2ABfeGfNuYYGkNGzEjm35Q7"
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
