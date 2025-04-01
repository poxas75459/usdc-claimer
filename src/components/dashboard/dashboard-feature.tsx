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
    "59ZwC3X5Mic6XCT7TRnF9oFjNigQajuEUFYEYAkiSjc3ozUg7XNSRViQyjeeddrh5gvPoTuzhASc1qTogmNrhKSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGoPgGHxPLhA13xgwugBCkNwtdjn1jKKMPM82gggFNyt9b8VDBHvymgYKux2AMiWT99rqw3Fm1iz29NavyKHAp8",
  "key1": "2hf4eGUnZ6q2555APi1FtXV15DLNwaFMgSbffMSq1mmZGFAaH5WcaJGVtwFTfqCKXRrFhov3TNjLodLLrkHobnzj",
  "key2": "4CGgVbRbtQb5VohSzoE6KfSHH3bUgYuP542fgHacwtraJDa6CnfS3gHummPbupFw8sP5dv76o1RkGgM1nJuBW3m7",
  "key3": "2Nms6P3YCkGP763SsxxcUPiN8a7fcjJU16odCk2dnTTo7aWnVjauX93WqaPnu21G5mUArcrwReg1fCMxvZR1F5C",
  "key4": "SmNo1iUXfFnkXnMDqYh7nE1VGa7BLv1gshsmztYFN78wtJyVyZBzUs14xn2E9TDvfv68ARfQ7EvANnbRi42Nuzh",
  "key5": "2SskVfEZskQ2SFvTX74UH3wGruqGxDVNXRZyDFcZkvzB4jYCde4Vgm1C9BhbJ3cB8qMGivGzqa8zndJCBTsAoh1J",
  "key6": "5HoqqLWgEUDRmYjmEqxwuEHoKqCbLS9Ysodmz4CQyhFQScRNZnpTVF76wUVPKDri8m3khtqTFyjJHfT1XXeqFxjE",
  "key7": "4MzLXLUkMuFXnEJ5sj3RXKEnrjwC6b67Yij2k5W2dkJr9jvtaaYTteM5rsnCmPU8bA8gCLpDkP3jUgpUbtZJ1Vtx",
  "key8": "3nkga7oDZgjAyLGxadUPJZC8mER4jgZfKuHAjtcqh2zqFNKzAL3MqTXxbsMbAA7mXnPE2rA4wekBaQoUpP9J1Z5K",
  "key9": "3kXKGwvR7tZVc8f5spc2JD6anH36yeLvpqS2xEtfM1XFSXjakRRnPWh7JEjZeTemwPbDhKnjpBoKwhDTUBQshPRA",
  "key10": "23AMWySqsPQ746PHXDaaRYbBftAsweZJAtBKv19dmPEjHqw1o4CAzHtHCNbq635kVLYLMT7Yzz4XerNHVdqYrN2Q",
  "key11": "3qVEhVGJSfQoN81uBBzVKxewxyYyX4gfZbxdTwBdfwovEUfWqgpSDDH2ngCwmkYXoMfC8Bnsb5itKKPBPBviPBa6",
  "key12": "28nx7H7qAAx5FYXVAVtsujiFk6aoct4ivUKRSKq7Pv1EZHLzGAeMswxCRR1UuqaB6pjmAZwHkKHz4nWSBtdMVYPQ",
  "key13": "5SK7x2PoSFMCHmU8h4i3XBNi3iGPVi1AqL6p9JdD6ELKZYfHvidV4ic5NbpYtjGsmgBdnN63X4fbKZENvtX4HZEN",
  "key14": "46aDY91YVUgThFPkkP529Nbpnq9rfHSpphXVhqDXBWd2uhLQZJKCvAb9qXkC2YYyxMknhSnLFrBfj7f7W7j7XZXX",
  "key15": "3uFDk1LhYs3dvD9h3vytqaProKNXSBDnrmWXUJr64zmqhA5KgGxTkHjRywS549RpbomiJ4jsPDMKx3QSctTLJc5x",
  "key16": "WaypmZqYmJHPE2jZGkFQCd8WBwyrychg1zWGueSnFrbrFM8qtr13QpCbKNpCV3i94HERTdLWbzX7y3FT4qYx61N",
  "key17": "3fmynQFpyGzw6J7GqwSiFti9oBHfThCtF6zufQ4MJsRXMLC6jGrbQpSDt89b8H95i7k6TH2tcp5EUFGqBHdY1TXi",
  "key18": "2KpFK7dkAHGBzGeXqj7c9CHLcpUYKiL7fwLgR9c4RKRcrgzCVzDRsV95L2fCmzSJqMusLXpDoxbVBxEN495eUkUK",
  "key19": "2CQPqvu2Dyfc1WGDdBfZaxMVvfRoo5RA8i4LEEEneZ8mZvf7dWYTfnG2kFkZAgrtquT4qZBxQirqm7ZUgbR213Cp",
  "key20": "4dkf9VML4yteqYNHaSjBdtVZqy56y8bdmzQVNSYkuk7bZCzoKCdMpXpcpfRpnPSypzbmBFYosF2shSuWNLaAVZhG",
  "key21": "421xQpDuYVVw9r3TAFu3Stvd73BBrpQqnP7RAgk11Vhbbj4QMswiGHK2ozZLZTfYfHKiLBj8MXVfZb22UR1WFfdt",
  "key22": "4YbpuDPpLYySpWRwyPFtCG9jojW4Mtu6srfTGizXFHawNd3kB4KK1oUHSC4f6E5VyhshwUFAnFzyqvPTUbjZ7RgR",
  "key23": "4W8TcvdTMynsgGQvENry5Fa6Nf6rmoALXqLcSfxPkxsjxM21FEvw9tsYBJD43XC7MxWWmf41sn92tQRdQ3sjVBVo",
  "key24": "3AtZfi1233K2kZUckvrc82Vsgb5B2p8eLHUGVybRWTtk2TND5QRVWJVC756LpEq7wbx6Qj4aqLE8ocWtM1rLiNZA",
  "key25": "637FPyNgbxVfrbNoCm6ndrnW1Ks84TbSyAmxbiZvb6cQwLJYSfQubnDK2AXhFQcXbBzX97KsmwtREHZRGAMSzUjb",
  "key26": "4qpeFemvyABGP81b8pvkpGWSyVtJHg5y2anHCNMwF29WokYLKHDT8sv3xXffRqMrvF7Q41aUj4qND19pWTRWav47",
  "key27": "3TPSN8nwKwBXtARCR6fDZSAUhwtqbU1FmhfxHYaAVUfLuBgenBx5zWMDg8QHGi71PAWrvhXkMCxCxeVYNWUtDHam",
  "key28": "2RCUs6Dbt1ucZJ2jGP6jUDbL4376RWrfbvXhV81eCjUoVL9cteSkncEU51xtXd7KiB3H2aNcvg24H69y9GdtjsSb",
  "key29": "rw7Su81Z8TvyA7TABkbmmqkstMfNHaKKL7pMVHpuq1buQrRoCD2ixPmd2pyXCdJgcQjUPp65otdunSHDDawueWA",
  "key30": "4H7YtDDe2m3ubNws2nqw89PvugUVCQf6XwzpnJycLQVqPqkcYJ39quWDVUtnHixZpfFLPhuPvrvahGe6W66MSMM5",
  "key31": "2khRRXiCM9An3kuXdnkoV1f4LV5EzLA9y1zsEWUHW7fQdagK2Ci3zfRRUExpswiktVHuxgxQ52qQ8Rkjr9FAAyNZ",
  "key32": "4k9zn8bgkCRCB242UoZowRsnc9MRVJxm1agXMCYmjEhk1mhBiCZ7vzF2kn6ZoHQVJTtXQWwiw28ha4ytpvRmLWxS",
  "key33": "VGYfNJc3eGBacuZDmXDwVGwYzMcPzDnQFhFhhZh5HFzPe3it72Wc1uScMBa52zz1utan5L9NhWmNWqqewEnWdrf"
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
