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
    "2HrDYyLw3HU1xJN1wCod2HVQoCoKkB7b8W5dNkV74L9FEyMJ88DxjLhkSTkDgjyort7uYt8Wyz4LnP7GJVQ3BDfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TfyG3n2Ah7FhJJuNzhHdoch3zBRRQoxUgv8MyZXijxrXtn9pPAkJg2Y5qChCxLtqApGhoYFjoE24Mg55jUeDLyb",
  "key1": "5abEq5GqPXFZTWpkYkD4zTrYAdJ5MWmbgYaoP4sVFxAMNT52P5441sbyKUuEWuSX9WySgURmXRXEYLQA8k9cJe1Y",
  "key2": "2ZdBtWQBbFzGTySUDjPSrnrove3Ld8Cq7xURToK6GdEXppgpQWUhVs4iE6f1VpgJUu5UfUg8GgSsH7oDvEL9vajS",
  "key3": "sVUefc4xh4hwqXLFRgYE6xTaAZw3473VxNuA761yMfwsZ4xLzCC9s9LzZFSVJviAfn5EuTiey9TLW8TWU4pqwiv",
  "key4": "5wymNbzVfCm57CJg2Cx5m9LbUmZgo4LRfP1efcPBV2NcxVV5aw9u4RC76W4DfM6jtcXp1G2ECAqbGaBTuxAVJxz3",
  "key5": "kZTauKYkV1FVoiMSHo7zHd3PeZmuwdms61Z6VB8arSbmCeqcSkviWgWdi6pdzuSssoesjByJ8HFnrrrGC97Yo1P",
  "key6": "vyWyZVpaRpkMgMWkzaNEsi6YmXzqoaFzbSV4cwZXvmPmZHVgUGQdK2YwZumv1ekGqV8m56mixzdrLCCifYdLtbS",
  "key7": "42nyo2xbeiTA26fvDAYnidMNvU9SV6SudgfSQJMkBkmznhSfA1jJN7TfbXvgjDjYecSkzXpY53edwRom1u1mq683",
  "key8": "32undVpV8Ls6KbMcMgF6v8RXqs7xTZo2b3zSoe15SZZrk7aPLP2VFLaN9gyKNV3exCY24CfYvW6bnUBFndbDMYxS",
  "key9": "4tkoxCLnyKwSQhdgbkHf64XHhkyAZe3Zmjicsg8xXHr4D9hhazF8wgV7VvLLD9WKGWbCuwrCV6Yq8AFysc3xU5sn",
  "key10": "TGHaVFmw3LYrJqxbWSNEvs2aEDAayJF1mWJRU3visz6RPKBHVNan6gv3y7nE2gZRRy4HCQZ8YwJtPv76g43Jhan",
  "key11": "4g7a6roabgDxDaRKyXcdqpPLrbPRG6HKpbzsahvT8w72HzmKnSPVymErNu9YKckuhvkt4MBonzyf1G7Lg8ftVfyh",
  "key12": "5yFTppWxmDK8W9PTVGDsryw6sy1rCuDpeYW2qxZpGpZMJs2CSLrsAE85tt8s9z9Rko4ewesTyMSqfRC6tGWQSJWT",
  "key13": "3gHkv7gWVSjM397rkiyyoGN8tSa2NXK37GmeWqq2hRC8vx7MKyZaSSyMeGTwLEJsvmY8cMT3WHKr84M9gJP6MRe1",
  "key14": "4rHD3HtamvbmpMXL8DFgv4L8987YAcRncNuWfQKWjSWbAQ3hkQmg7Tz99A9uNncY9PXc9uFs5ThkqTHNEuw3X693",
  "key15": "4dADrrwWmn78jNbEeysGghnfQBiYKbBTfNAQ6Ftza18NjcHv3yj8ZywXpQpeHqRu6FjLx8aKWKkjH9iY75EdSonV",
  "key16": "4PXUEUFcmKyNJUb7GCpdMhpEho1sSG5bbwqQQ4gcVRZxJGaFqkpvMyXPyYM3wmUCp3SiXRADntq6CibS3VWDQsJe",
  "key17": "3eMN81ZuyRZz3hZKXGF3T4VTQGmVmBorfs8GndPDJnmUahmPWGbtGqNMRJxd8jDTQXSdj3YhtQygCskkZg4DDfno",
  "key18": "65H7cSgviPSpd2YGgTtzx9Tp964cHE6NvuBadfCBAzUQXWaQJwQwtt1uKRbz1c6HkEESd8myeq1cmPBdU2HMKMpt",
  "key19": "fydJYtwjXHdHeDiD8Aqn15FZJv8w3uAXF1xjdvuTLVkTjX727uroaLHk1MpoefszwfqbmaXafn6NRd3jzMV3pV7",
  "key20": "28yKDgoTj8Ecgn4QNfYZYye54JZiJuN59NG93R4ZEVdw7P1GRXnAtWQdPR5jYVgwo7BjCfPT1rqPuBkPTchZbXMH",
  "key21": "5GRc5BqcHdtRgEosY1tVD8xadDX2ja6VHEHKeEu8wpLqgZq34TuYPAxRYvXH9bUxobEHvaZUjngu7XtbafMnh63j",
  "key22": "2jUpLGYZcSiw7xEdkRaXhGBQWBgSUAsf2hpWF8yQ2QaPiGDrirEVvU6Z4CPWqgCcXH1WZnTmEJM4ukxcjVkd9JBH",
  "key23": "3sZEYA8iisXMKTTtPEk2gWfMhrSt5FQ1jGbCTob3jwC8V27AMdxPXnzKCaZdrNJz26Bqmbm5Zi7F6r9pWefH7ghh",
  "key24": "jTrn9PkawC8azSAjX4goSpzg7dkGH8kq5fqVukGHpgr7e64xf6WSUjcZcU2dVjHM5T34RiGK6hxeVJbBGdaDapf",
  "key25": "2Y7ziG7uFZ2vrCN887deNCqUjPtR9EKEfoYKXRzdj3dCq8NfdxSzYnaBibausezUPPa2F8weLGoy5ULgu7thMrKi",
  "key26": "rRAosE8N5FEwTwKvtVpqJcaY2LCtyZeuig9mGsoqkFUmgk6e2C152ZWc9DngtQvR9yRBk4donz4kWhe4Ewqb1u7",
  "key27": "2HbnHGqUecpg75wmsWkDnYDxBhra3QeEWN5qvCEY9qvtGA7PzzuyhwHFHe8pYQAVwcJaHbvfWYAjjw715VrGGiik",
  "key28": "3gZ6VTfQwCZLPGYoZEZFZzQoafB9HHyEHMmJzomS4qyqHrP8AY2tJsNB5QLy4CyoFdfVvZf6Y4pwmDqRHy39AbeA",
  "key29": "KraSMCRsGEAfkqK78Vajg99gRX52UZC1ov5RUThwxRMNx3WUPYNmtz1RBxCTVESpoqKc52dgMKXcUoqgWTEcLyN",
  "key30": "2S5oVpK5Ko3H2s6PdEQBkQtnhpsBQfbfuMn2Xpcr1ScB4rXefp86Dm3MBF2UhXi1DPCXgLkBKYcirkn7dNvJV1Dd",
  "key31": "5BL2aS2ZknCTerXq63YQAYLVF4dDrdiLKhGpiuJHsMXYRB18zuXpFXo9cfJp3ZnRiP2afTLe9Wn35Wu6uy7A5V4J",
  "key32": "3KxtUtRGwEieUwWvrm2zXTGvGAUP7bqJKGCXLeRb6pNV35UXvTdbLqEqHYR6oDZzpTZcDwXP5Qvx6hqumnDB39Jt",
  "key33": "3352rjdVMVr4c425nE4nkcgjh7gRG78z1Xbi4Mh1CuJjxjjP5LTvtTxq3uoJ9sofuxVMaTQUYsLCXR8GMcChAV7v",
  "key34": "5kdp8bmP7qQVH2uQQBQY27AtrAVt9u38Nzd6Z68x9u1wQuor5a2Pvy8k7g4e1kj5nPZ9uepn2LpXHbSyBsB7CwNx",
  "key35": "4PRaYy6cpDdxDH9W4hyLHjMSryVafR45scC2N7MUJijUhmyJaasXHVyvNnzHcTk7YtCCBdFL89cYrS2ubNvENuiK",
  "key36": "2Qqo5FjejgWAanUNCmAyYtnNAeaPkgwkhwXXKcmJUzN6mzR7Ej7LnRnFq2bYrR7WRgXZDoxSnUMUziuqhrnnovYt",
  "key37": "hCn6PgMMjsMFfhvPww7EF3APRTbDonH7U2624vxfYKRPKqA2gM3dicuFXev8U2U8LW3iBgYJ5Qdmr7reJPy4xwj",
  "key38": "4byNUZCqg7RD6bae67M4veCJBUwCsRqryRg6hsLS4xvRZs3ZxpwEnGsH1vvMypNtc1hgkYiKDCyCB8cQeUCzGx9w",
  "key39": "xvUuwxwPgLCYz5fZJBkN2sy2znZmdptG8LNhZ4gGnKwEfAYg4oZaRYZpEJcuc4UfupK418hZ9sZAjRk7dApGsuy",
  "key40": "4LNQqtmoLmzgTNB2QXCLDLY2AhT6m7a21vAqfQhqAK8KFzrpcUWBhuJP8fXL7ioKpX52wzoj4Y8DaYhgdDmuiBYv",
  "key41": "dM8wU1yr8yHwYaNMtxHe3xgMNbELDmD8c4xGawQokt5h7UdA95679RSvbSMQnSSuupWEP1To7raqNipShVP5viF",
  "key42": "3cZA86hxNBNDoX6nZLhFCkdgvpLepnkDji4bG1FrQfWwCZ7Ar7kT3JfSmQ4qzQZc85Kbi3rkJJ1ZyisAkFaRp95Y",
  "key43": "RG1vNVQMbJ9vSBKE1tYKYwQYRvHNriiEWUByPXcsCw6uqSPzhnB6bF4Fwj84irEnNmdNs7VjeB1cRi6Z4WQj5ZM",
  "key44": "4F4kM4iGBsNJdXNpkfokpCEfG7zC3tpdQNCERuvjmrEXNjfKweM1BHe1kg7staUm2iGE5XXkhcfNPX1oeCxXCXHd"
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
