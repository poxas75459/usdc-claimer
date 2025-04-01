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
    "4aBHSYMayrCBnvVhrbN6c5GG9xy5ddfoUrri9FKmkLTQGjTFEdmM2qWsFCzrm54j64Nz9itDRVMZVu9fDgoYqHQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXfAzbWoFVpizCSWC7dN2kgXApDaDv9GqZfrdefPq6z7bwUxosAHtuSPiVyz6B2DRsv3M8fFAgy1onH7yNuMC92",
  "key1": "2zP4ht5yG6xMTzRHERUcBf4TC6WV6i6Bg2w4CRUWZov2FThxqvRjygD3vs4G8jttyF3tGPt7SC2LHX53UmJ2oBbx",
  "key2": "3DYXqRuaEfW8YqdsxFQr5NZmJbUjjYFKZrozcnR6TorrGRzPz21q2MYcfbx1NZbvXB4LVJ78vekRfK69gLRaT8q8",
  "key3": "3UQHShPT6SNraoabeWQkbrk28cGBFG5AmqUQ7W5BF8b9AgMLNSooqdizjqw2eKC3sZLWqdb8p7eikndioTqyhqrk",
  "key4": "8NjY9oL73HgWnBwJM4ehL13p3YrfRFeMr1RUUMFzZRhEwqx3EaKfBex8TiJ8DBRcz9wwPwwLGV6dub8nTmxAHg4",
  "key5": "4VLnxy2rYecu6KFoRTZxMnVMoU18q2GTgMBxKt9KaqGZaSqQdpJ7jNwqKSwMjevU2T4bgGhpPnS7HbwVCGp9EM52",
  "key6": "nbsMh3kLKSFQakzvbK7BBmjWgBrJyPb94zmw3DEo1nQbGEHLjURKtwjhTCc2eWy2yYG58kPTxcSCiRbADD3oS5j",
  "key7": "4c3vtWbcrGYbTmQKV3EbzJRQD5FnTUah18jY7McKRzhfsraaCqCkSS6hPMvXSHtxATjsKRzrAPHS4YYzLxqEPSbM",
  "key8": "4VYj1VRGgMRE3K6rgrTXhutD7MTxtK129zJxAKpos4JV6DywUbQFiSg8qPEhBd59stZm29vUsdtzWvCETjF4wdBL",
  "key9": "4WqpHWH65ypi99o8soDt7YiSMfBJpryYoeT2cNuVpj4oL1xhr7XpptPHcRGUzE6ZBELbnaCATx4gxpicA15hPMJb",
  "key10": "5qes55UP6HQ3jpqANB1nski6ZE2jpejJhEEbwJsZDFTtiFLzUKMvFSVo1A9PEbXShZutPFXDEbgKTL86Vr5ELkgq",
  "key11": "3p3jsPJEaGpJqKYTYCrpdXBsvQ5Q3YqD1Etrd1f18ko9xQUjEesqt1E4iyeDe4vGtY5cDWARVni5iWKfCyqwR1rR",
  "key12": "23QusENCh8nb8DB8Lq4SF8LFDUxDKabWHdsXncbkzw5FMj2joBUY4PAK4p4NmBUjMFBgyZaPdE3v2bB1qcrHQVnT",
  "key13": "4Ciyo8eXjCWS2jvZxMhcr8mVQpWMJaAMpzykk4VAVPPNJMn58my51FXDAUAeqFod6mSTL6Mm4pu3476hNfF8gcEF",
  "key14": "3LN7vyB4SHhtMKFGCuiw5jpix3AvcrR2zWJHX7H3brPmb3gxzEtzMMhR5edGoH1xV8iwLfH6EPtLjRW74v7YPZKa",
  "key15": "4H5v8WZDF1TTs4MLtk4dRjErGeie8Un9xufmYvZA3obqnXhakQnoarJoXwk48WALmr7FKjzK57Y4jeqE2BQYGUcU",
  "key16": "4UZ9KAb5VXgqdAvCQMirC4KFx4TLBVRh8qjT1L1LNPVxQrB8BkYDCuTWtftX8v3oNdYZyQhymeNd6imtaWZhyzpr",
  "key17": "3kpdWVHWyDYQXBfHfsYkdmGEeUyPfYU1ioBXig3FCzjBR1wy5BJ7QxqinAEMa7t7rmTosSycZdZkKMppX7FzFSJZ",
  "key18": "YFwU86kLTDCRiTi8Z2QT9AhzJsvNGun5BNMUFWGhpK3EMwnu9YunSukhzg11MeH6c1CZRg79XjpdK41xMEDbN9W",
  "key19": "47nVQrvy2PnAWrXV74qdtxHwuJn2ryBprbcPLTSkAy2AheD3AxsQUGeMQ9G1CDatnLHVHH4o1R3p8EYBih2yibaA",
  "key20": "3VC8zQv1HwpbkRuMoCUpzu3JnEuyFDJHR9VsJAk971JpbYcVjj5x7P8JyCPxbAAKFT1cPEwwQ4sBUVHb2hhRyn1K",
  "key21": "2qz7DSCFW4R29XjqvxsPLeDEmfUhc34rjAEMRcSRNeTzDt1L2VuLcthbdWzx9KieeeijXmfCvBbAr3aQmZfzPF6w",
  "key22": "4QsvKFWrcXoB7TgQnXCVdYFFFb5DyZvJmM3XqtAn1g4R66TsTVomAVZxfxxdZxYCu7tnKFnNdqrxpUws9DqzuPqo",
  "key23": "369VrJ2dU7JE1AkeV8xCFy16wXC3LKkk5vZQWKvL99wfeu2AWq3de9WWnvEGjJguASKMjsgViDLM5UZTJg7yzk8R",
  "key24": "36rAG8AbFWGSscrazVV5YY3NWXiKu8XHxWU37kVbib7aY51Ds4t1sehcJY5e1u5Hh15MPDbCNc9Mr87zdFzND8zy",
  "key25": "21KjeHho4ZnZCeEvSzgwX8W3ACPj684XG9RWLzicoXuMY6bLRzJtEFAqwVv6uo8GAP5buBhK5mkbDs6SJwsvm4dy",
  "key26": "513341A46HJQHtvQozgagNsmpCLF3ZojTpGFg3cqjU4hBDnZfzE5T5ecPrBgHqpgwgMhzGBR8MwHiwaeC4TYLEDw",
  "key27": "5QF6vX8VAqakHmevtr9hVfMgYL8By3CypuAGDErJSJArVUdiTbCwoNjvaAZxkK6YDn5izGii2ppzmnJ5StbZKDLS",
  "key28": "5ZMoxRm9Z5dn4syB9Sm21nbCN3NuPTrsVDqRzbsbtauJeU37TukfBJNGBR3hxQ7GQ3nAZUR8TpmpD2eRfuEw2qqM",
  "key29": "4u7Qcpd4E9b8pn8wjW35oB2TcivHZa8BVd5ZaPJJz4WcoLBCLKXjF666cQHgGSf8zMfvUTDAnCk1eJ4ejk4LuzQN",
  "key30": "nWEDzK7yqL82kzNcCaJug91PpHRjMTyxeT23U8vZW2TxBTLYrBTXRhGGrKRV781LhpDWwSbsiKwzWnp7cmbuFL2",
  "key31": "5JC617ZdccbBatcMt8H7DFgWbc9NRAgS1v9URmXCMPjyaNwtGwVB9ZP393VnHgkqm7yaxyU3aDZFT5VV3trgfj4W",
  "key32": "4qJgrBhR36WpXZNJZ6pKM3NDG7ZfPUEbSm72pVCD15EuNaUvxKMXa5fZ8S45V8cCiS95fxoiFEa8E9Wndh8SbkY1",
  "key33": "2dMru9x3LzY7HuspapPRBsq61Lc1UqEM2S1ztET2v6Qxxej7BrrmehpZKpykUht9TyjYSkauHdBSjhHkJXPE7zUr",
  "key34": "3Ra37cBgR84V5PMGi1VDC58V2bvHFR7f2y46YWh49touZD75wBLeyvFDgUjZ6os62Dx4T3P6qQGw2rLFumruXGqt",
  "key35": "wRdh89Afw6aCTW1cZvxZZ7YrStxwWYCZBZqF32zvzPjvHw62pPNa2AdEG2t7ndQWBGda9v4aqtwxGgp5od2z9KM",
  "key36": "4NffGCAa2wrzyJNfVEXhuvzsMGT15x4v8CJNtNUJNUxZLfv325JPXqar1hLVn2ubqZjZKXKDi4KkB4bV4f6TRShd"
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
