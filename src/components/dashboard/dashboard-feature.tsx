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
    "4GZuH5LWVXpYEFCGa61PWHxYLQkJ9NfFdQexUxdkDtKvbraYz76AJE6j5A3aZTaTzYCnrZQsL6FabFNUwf7nLFAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tjm4r8n316B1HMi7bCbbST1NztxFCcgGpUVMr9BQDcC17MwWJpauVjrXjgHSjC26nau4ZCnUgTJTDbisMrAuQzd",
  "key1": "5FFozUKvnrNwhtU6DhVdaXbdMmqeg6wkZEGoCHj2KfQFihtKub97NhjRRtxBWEu4H3ncScgn6CfhkHfqjfRM3nbx",
  "key2": "5ymFEG1cVRg6yEdtSLjEYWZsPPWcQePkNMW3hUbuQWFQ6CMS6A3KBA1pb3DxBEE74xQQQz9gVh27sxL6hEcYiyc",
  "key3": "5pKsBzA2FXJ6A9a8n5RepPF8NXmhTyMf87tvUuZgSdu8F2rK6gHcw3Ni2YXaGdsgHdBnpcQaN2nL2K5VM3LBhGdb",
  "key4": "42YyAY4MMhPqffdoW9jbg7bMjqj4APFjNZjEBwJWZrvDqsHxm5QUPZ9ttgkRydgmL1pVFHbZ4kM8P3n6wjSdxFav",
  "key5": "5QM8M6BPGJhzdqqsQpGkg3it7zA2AZw4giEByW7WvZV4nFXdhAeSvTHZp5LgoFBHei2VfRpriLaXSNYZCFR6w5kR",
  "key6": "3ZGiMsqBd2UtTzD2g1MTJYv7BD7bgRiSrUcozKxj86UZWDusq4emF4uqnszB4SXm7m3Pe6RSZymKUKrW3bV48Bng",
  "key7": "RpaBfvuQtVm6Y9R1LBwBA1dNU9LMR5obMJSq2yTds21sw1XS4KtppapQ9qxGqmMrmwi6NEdHn4Wac4kXYmL8px9",
  "key8": "3MBNeBYaz4Y4uXqnRzsd7QY6pCLG2xjVDQUgwpcEQwstWX4gPZbpegPxjBtsYbb5aEBQrCdyZY95woSrmVEzZjZx",
  "key9": "3JAAKuJxyoLXcyx2uwASgogrApfU2xGgmLwcasZgQVWXSPgFdQh1swxCMqx7oky4YZGfnn5Kf327bKLds2RXifii",
  "key10": "2gtadANLXYjJvRersfgzKwuqzT6Soi29imtZnw2bF1t1UVY1gjBViMVrPVrNpVMFTDLdm8s8pA3V4r6pPzpwMGZQ",
  "key11": "32qL92SwppEYtDHKv4gkMvFBDHYByycLnf3Qaq1QHKZ7Mz9LLwjhuRcwqpKygYY7ppDWpHQ9GyJxTJJack5bJrc4",
  "key12": "4C96VLFzP6LdDvPfFX8gdBKC7zPnNLAobhRWEXF3VtyYRJKwWobpot3jyY4h9yL9fLNzk4mC9fbe7MKgcuaNZUo1",
  "key13": "4x7iNvf6vrQu7hxrrC6myEvK27yurDD4w8JEQXCvT1gicio1c7k6uzh2SUUcT37YwFyqkJU4i8ihhPJvknjk9mvh",
  "key14": "jdNVJpp65nDsTfUmZEDckegxhc7Uy3cGRqWFSRESZuhTkLJeNZQeuXAkDeKf3KdywyeTMAr1c2msyCZ1uiSpu35",
  "key15": "2N1DWNUkXzYP3LkSj8U1ez9UbMZZm3ZFjQLMhPHXPReQzdhZNTaHx6rLbMawfixo6oDFQS7mbUqxhjboPCwQDZSm",
  "key16": "3Geij3vD7KxDcdy6hVckcxsLvffFD8EEXdDSRWsrSBvFRaS8R1RbmonUbyCuaNHwujLpDopMvijVTCXmjjhf57vx",
  "key17": "4pqBrE7HEdqkGvK6rN54V2FrKEhER29m7vG4HmWnfiaGVA9EjVSJKodTpACX4F7Qvhi2CEBYz18Ms3UEcPvW5GNE",
  "key18": "22iRjmjvUQJa7powQ9i8XJmhtK81gGQM6hSyeLwUbeT4gW379cw6mfFztB2dZrHDMp3spJMBphoEAxo6AAuGKmKM",
  "key19": "5q3Gsv7eXPRpgBRAEbeweEf2o6LNXeucgKS877Ddu19WFFZ1E65W5ULcSNSo7vH8r86a62PsxWhbF9atWp86pfBi",
  "key20": "42mjxiDi7iiJeryZQRsNrF9mfViVFcBbSPL719vYPiH7bvFXnHNiYisDFoZmAqJee4vXS6fXjMZou2vVK5p9Y9hx",
  "key21": "WB5GkJHxTrdVSGjnjZU4sBBU4cZfcaf6vTX5rVY1jqyRLmMugJnVoGCRom7zVWMULGp5Enk12Q81GmnC7ujCtKw",
  "key22": "vSWt1FZbv1GkccqQGAeQVhrzGWqJPyXGr1H92huF42ieMvqiPNqAkjhWHg27hrsapULdtPMHzBrHq9m6S5wZViX",
  "key23": "3mWVrFE16cBvswtUjiTT1NNj8kPsjnAC3HtrBrPTuqG4685RNLwkEw1DVARCmzJ9kbeNDmSR5ZtxDJmBZtfRKwHP",
  "key24": "4gLJAE17AUnnCkdey69s3BAzWNDBxTNspYNK8BDeEiSvJJeB8DRseN8Fhid1JGhrrrqKR3tdxydcuQHV8SuA2hKb",
  "key25": "R2n7zVuWErNR5kWr6LWch5Uj7FCb4nFerBS9smRWwBHVtTTgCTs3Yw8FffWjcA6dbZ1CmqM6TsJWSvkMp2rg2MZ",
  "key26": "2ZHUNYrjQo3gYfakfWsK5Sn7QGqeSynp8JiwYjoW7j3M62ii4PAjD4UVy28AEqvKWsiDjLzrg6reMFtpnSb1WSCq",
  "key27": "3ZAxxxZbk1gqb2aHpb28s7WAuejZdet36A5PVT1XDQ84iKfHaqWprWf54RK85jgqLDk3aiPYxPTbxH6Epj2MAW4b",
  "key28": "5KqsBu2ic5BwNa2PcTFFMTsCn2ARhMgyJ6FwZMbjSz5uEL5AD3LPzLjBhc4zoQNvbBZ5b8yLndX9fMFSS8AqLRHC",
  "key29": "3amiQtWNx4aNehEAyA5G2xZrTwFyhLkhM6GbtLgAeu2d2KE69oqnkBno89o5qtTQ4sqEZnpQDn8uVZjoNFaVsKMo",
  "key30": "2bbiqgF2TwNxyoHuAfbcKv1e9UhGxPLv6xhoWe4HF82PF1FEPruEHhUQn55jom2ERFxb1Y9DVW3qov1JTHRV2xx9",
  "key31": "oHRB9qhD89YuhXTsbArUGwDZtC9xVnH328aeVFx6kubvu3rggjYCzcj65h7n9ARnyQgUrPyVn3aK6XWfhvK3S32",
  "key32": "2KayB1VmzQRhvk8T9qVUdLZPtUCkNdczBDFJZAe1gKCQVg9dKHvifPdxFoh9i63zJjfMHDCeeK4DXFSDwtCtxc9y",
  "key33": "3KRk91CMUTfzCq6nY6gvdvzZ6SKsrwHKQkoQtWrHg8xadViPB9e9Xp1bRhu7EjUTWnaWrakYkzbHkaUj81w1rpgJ",
  "key34": "oHMkL97hG28UreCXqqkgDFgL1iVEbNhgAdnqHTGn63hK114T3VgQG8rRHAcFFbiP8iZ8Qfj39jMD9MEKJp67FvV",
  "key35": "5871UQAkk7osfF96wAS1BmFJHXT8gzB9FQaXQYpvaxomPHUmu26PnVPnWyxoo694D9Ma3NoChsuJAQTJ5YrMTEKr"
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
