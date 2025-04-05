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
    "2nLpeAfBE8yvQDGRGPSP27gDZNnTLy1Xd42bCwroBbn3UzvrHiSpXdBj2wgzppKxKq4eQPJRXk5F7y2iqEPirshk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nfhLtoMApt18k2ACmYA8jXCiPamPgjJjmEjSmUhNxYterZLSftb5JhcZgG26SxT2dTNb7w9jyJvWMBPCEArpPaT",
  "key1": "4LqdWDP8peZMqreyxnncEgW26Mn1qz93GruhcUoVPp22F8yBHVLWrLKRiogyCiqNmR9XEhSU559nepDKiQMo84No",
  "key2": "3b1RCu3t74cMnuv17QZaxrtYp1vH9WibwVTeYFs9nge57aTCKaL4bBjar7rXMSjKj9duW1Rq2d8UNsWEEqoKC3zH",
  "key3": "EYC76ranTyexAfLCXtAyCTThMPhUR2KnjVtyJYBd6Li8Vju7UWjdiuxnqqTdAqL8C7586p2sCFqvEZ95zq2Ndni",
  "key4": "CHdxAzaR3AwfmgrTmPfMFTfpJ49LsBwvw9BxJhuzD7a1THMXrZueSrn58kEcKHp82vJuHA3UyTv659Z5GVhnKxp",
  "key5": "2dpn5zczHnumQY2prCrTTQnmDQENQyHzLRNQxyB2QP8yRf8TpnibnBhs8y2YRXSYg7vthDc6MKHmBsrWDZFgLFe9",
  "key6": "ATq3izV9s2941TzfayXCc8TWEsyVNQUeGhDEkVnFJUd1GqxfZqJ7tUaTiM5q1jnb8x7Vf54Fz7e7RkyaL5MiR3X",
  "key7": "Th3JpW5YtevdPsyZpQ7RbMThKFozSPxb4xbNeNnkHtsZ9TsNuyTgoAykML2CsSkDD9s8fF6fw8wa7RLr3oN6Rkn",
  "key8": "2EjMjLfU4MMoGneaWYLrteapUrcr4iLZgE6iSuGBjeQk9K6npdVuPe1Q2DWDvKj1DkgQH6LanTo8ogrgg4nhdwYp",
  "key9": "2DWygHShKaW1yBvwA9DjcGxQseQufYfCsXVV4RnAXWbe9Bea1yXdwezxEVskXaAn1qBVygV3x1HdtRm1AiWEWsmo",
  "key10": "5mKCqwD3gXV4KpHCmyptNaxzdoQbtmc39AWwbm6jqhz2rjDxr5rUkaSivbbLNbEhoaKYiqDVyP2kJXsU7P9Hq9aP",
  "key11": "ESfunJyvw5G9ykM7kwvJBSMXAfzbNsAxp6bUbzozye8U8w59msgKx8fDmASXqP4wTzUMAiKQ3sD6syfySDTwpQM",
  "key12": "Sw3GvGVXUuoHLqpkoDXJmnsuNuUqk2uaJqL17Np1oKGzoAsHQAQk3ehrM9mdiDh8N6nKReQ9tWA9dx2KNEncuaT",
  "key13": "4DiAhAFjeg19JYyTB2b7hXpzZCb9FQ9DFnrRhgp3Gzg1kQJaYwrMuN6YX77jgwEn7GdKse8jUrdaKPowMe5gMRn2",
  "key14": "3m5hzxRkzQqDap9SnyVm2WcAv9EazcKR6eEYJUSEF4JvefCPvz7dU6HSnqwvmsbeXvGo96oqBLH5GW8bz4UqecHk",
  "key15": "2ctfQu4uisXqNvTj7oCCqbkyi1TS9M2ani6ZfeuduFmzCMMGeaLQxGeZM9NmtbkfMYf4oAMpbqgHkA4HcWcHYGKg",
  "key16": "NET6dLskLcxdVutRHLELw9dSmEVhrA75ZP1aJtwfdRS9gGPGtk3ng5yFnsTSqVooy9Cm1mEbBKvUkLkmipgUKNV",
  "key17": "qDK9jH2NGNJekzJccUhLFi7mwcBBzBoSNNdyky6rpnL5wFNfygMpBzUH2qeaiu2fgNpdnJxpa9uqE4kKLA4MBJH",
  "key18": "syFXXi7Awk6buMBEbVvM8bnaCj4Tb8GwZbZqQKChDY4TygddRVRJiFEZ1L4oSaR2zqz58h3Q1Ydh7ADm4ZGEMXV",
  "key19": "4pEnsPCVbJKbk2PBpbrszNSbDaiUmKurgXRkumxZ12jAeGHXfg1J8Wzx1y4Kep2N7THCZsQrAznPXgBwtUFisZUz",
  "key20": "2o54spJFMgmkiPk7wndn7y6DZLAPhxVvhJmV6oGcoBYJ3MK7QUpJu6dWzZrtwvTVTnUbwEAoaxH4bKH2uywxkAs9",
  "key21": "1qP4PkqHddE6ug775cVmtCcKhQ8x9jm9imMWmfG18hd1AzE4GWWL6xC7DeBcf1Umy956cWoCyBi6jZaE9D2skmu",
  "key22": "3RppDnvGzRq5XheCi3iPhEgxdnsuXJzpVQ8HpGEcbrXCzTQJgdx7X2yjowXmmCMTasa14rs1Gi4hANuyMeCHVyn4",
  "key23": "JJ6jxH56Fute9CYGDFb6r5Mzv5hAzq6nGJxiKdkv3WBq26GyioKjNGVXbh7v37chx76Tb72dCqsaqEVnQZRuD6Z",
  "key24": "5VvHp8RvagAx9Zc3UpMToTe3RasXNdiZy3WFw47vfv5WU9YQMn4ap8z42VU9myWpS8tjSLrzMtDHbYnK59GS8ng2",
  "key25": "3Z8Smsv5WiyvuUiMyvaZdWZf57Vd6YgQvLMQoB4Rxbfy11gKgV9FNuDCxSAFfdfrK36iAC1HnwfKBpvdgZRTosjH",
  "key26": "5ttUbCVcNpLzjkeSjQozhi6PcCyrtsDoXZ9z4h9pV27PP3KHTpvxKv4Vm1wzVp3rSJbGuC4KXNjR3f5fF66x5aC4",
  "key27": "62UYb93smx7gWyt7UbaaK9sHWSAEvPRqHjJnbfdf82j3nfHFKx58BnKGHMr4thb9n1HHb5iJ3ycqXnvRJ3ns9Rpc",
  "key28": "63Q3ZprsaJ17qorpw2eFKy2HrTxfHty8Czj6dJXg1cf7f4zmf8yZ1nSAnGBVLNpdJLi5NzqBRPs2hVKtdTEt9FAq",
  "key29": "4yQmYTiNq9sgu3Mw46BYi2gzoMYQ9LxNoPPj91AD7pJSFzm7rKs3MidJprXDYPaQhKyeWq9gxmaHXN5yJqHgYU7q",
  "key30": "3rCkJoJ1H8wwQMsy48M1dmhNXJkckEkBsncZpzHC3gi7qh3SKW75s9Mthyhn5ri9AshMGxHeY41UzEeFT2RuGAsv",
  "key31": "35Xktih4diq4vVd4MwtvG8x9KxaEL1u8tX8wNSxzz58o8nn7Aje1EtUzAzym7H9qjwLrCA39MaYKyzMmwh5Z1dh4",
  "key32": "54LpTYVNVwggBs8KSY2H3s4Gh4rUTtUNy72xQ7Qvgni69EcPJk5GS9q2wL6QFFLQ7iU6AK4EW7CSRjjH8sTd8t6z",
  "key33": "4qiRVTDrkKnd1a1s3Fsk9TaCuUvKqu5QRperVP9yGCpmFNkrFKo97VELuCZu3bq3uKDHJZ5VDVYhMMeNPkcYNNhk",
  "key34": "WUd2t7Uxv8nRDBp1uzn4MwHZndfnXuzeb7AFsdkAWAYBEqYUGxTLhRwQwvEnpA9tgmyUYJNqvZqwXeSdmAuMq7D",
  "key35": "2R9vKQ7nDPwJRPftNH7Evgpi19BBaeRkeuUZg1z87HUjQwynMrpfsjrDuxsjN6pXfFAMkCYQTJauXCcdwiLvDSiR",
  "key36": "4cyhud8hhR4PhC5Jj6v3Eiu7Vvx4MH99pFk5QbrPyz5nYBrQhknqviWnMX3PD2SngY86rWCGrGQceXzKRYh3CekK",
  "key37": "2G8F55RpTaZQPDkdasUCSeSr7o8gpRmNFf1D8SuEJVzsL9UHU4b1QAAcaz55SSLf5m4NUgR6DZR6ZgEnk3aJECZH"
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
