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
    "4uRE1xSfTNbCwmniBiTciLVdZHZztzVuYNqzZU4XdJwUuWSb9s7ppZPmQjKfXdnNkeEFoqXtMiBwkwrXYXVuwFAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RQjxjhsBz9GxbYgtr1Epwf3d27jVAZDVmy15nAZw2zXVLnYaAdcpWzPjo9ChTqEx12HtgyAT6q9MLZiRuouHyeM",
  "key1": "4basoKzmyn6uwPxyudzUVY2aEVpnS9q66KXJ6fyCWaYgFC9Zsra3ZtNnsBQB3GzZRjZiSCn7wjbwXaa2EWrWYY4Q",
  "key2": "3TShKpPCRkfQzUFJvchGhw9NSua91P5fsrWVBVXwxn3Z5HPNrVUSWv16DWs2BLpsv9NNYAtTUhSKLtamXYUWVAe1",
  "key3": "4ysDsS931T9NUQZD78NBHZ2mL1xTUUForKHLp4rySoPNAby7eMpasLF9aibdHdvKKs24zrwKXCFfSmc5mpkRQGsU",
  "key4": "4YT4UL1pFneuWeXRfBo6isNbyid7uZXHVwfSJgNrzUwiMFPBmEgC4WqjTdH3TweWQYRDUCNjUzfPazUKNT8KiLc1",
  "key5": "4xRYKs4rFofayUE68XL2Mggc2rDsG4qyQC9KkjjhX1NZ4det6Ja2xVFcmcUoEkPGBqJxVyp8tPRJyBoKN8wfSrw7",
  "key6": "CMJv5Fa3FH1sqJ9PXLXGWCuDUsqMKP5QuFRakXeZSWhHYVKaGehLembqRX9pDFP8DziNmtAasQP6ETndPeyaj4b",
  "key7": "2KyJHhnk2H2prQfUGtx39RmRDxbRTxiFsC7fEv3oN2qoBCWDFRPubvWc5Hecp5uhKwKgEAPZCbqnHQ2CirBAU34N",
  "key8": "4VNjLtx88Lu1X6zvZMY7LHxMg17PJrzk8BxXZoA9WsrHAcsQj2BjFQYAtPcTrQvs8oi8htzvJFWaLYmxs1hZjfL9",
  "key9": "39yvcQVoYHoKMr2VRP5Wtz6SMkVaaryA9CuAfLVyE1rZ6kT4cknoy6JSGcDtYYtNQvcHko4WMGWwDj79pHpEXpep",
  "key10": "383eXnkwVC7wNz3r7Zhz83UtaDee46oGajHDv5sCsQLCPSjgphneNMg7Upk1uV3m2c5RKLLnCgvvtsWeckRKjqRL",
  "key11": "cdavGtZJPrcB7eJQqBRdyQQhnkwgSpsiMoSnbDcJVzzQiA3eefQLgyQ85JCWmNSPEA6S43dKeYfxxCHSCXAhwUk",
  "key12": "5PrhwDvFe4VY4Qw7GCGMWunVe7TSyP4FyJdSyxZY6yGkAayZmuvRvXPBbiSTnBMrUGkB87RMUiwC5QaRxiKiT5kC",
  "key13": "2iUi1u549BmPcJs35X53haKnWy7HkP5H7YV3rZ7Ag4SVPieknAzyQTG7UHXSZfumddTbG3eoW9nKxxpvswNcUoab",
  "key14": "wWyS1S8Ztz5rNqqGijt4MjnsEKirPweU5uwv2S9dfpJCmNhEQbCo8C4BY1f9QHnUtZkovjTp4Rah3LAE7Gyq4NV",
  "key15": "5pbzh1F4dWN9twhRoGYV5QBnCqufmq3LAWCK2zMJk6JAyWfbVbwW7NcPqaSDUYsvyMFnRGtChdLhqBsgY9wwEXXi",
  "key16": "2zwk6N2vpt5QqLmSQJJzRAWwaSe1JpjXmEdoDeWckQmyHohGpc6D864dmrmnB3X6ejBQYDCetN1uGwtMHBa5w8dJ",
  "key17": "27cC9porPo9DnF25R4qab9sH9KBWnQuP2XFM4eSJsnT6rgYk5JQdgEz4H1YPXUnVrJUVHz4aEBPTPFHdZZPHAX2R",
  "key18": "2e6GrmQNiJcA2EavJhkktTFgfYpqD3q4dCpf1mEhXH32GpT7KHvuaW8rNXtt2aHpJ7JKhy5AzHUjzVK3UX7KrVRe",
  "key19": "5CaHSKqWnB23eKhndDXXnFYbjAjsekzAm6CCQympnDXzavYuE3WHFRcwHWVTz59ozk85JsZ8gzbRZppVdRLWt2r2",
  "key20": "39Z6YzBk5apSYYUyJp6zkB8VLCQrUMuFghCpGudgcxTU86mUmX8r9qEudSCNFTfeGEyqYVRiJbaiwusVqaXShVqu",
  "key21": "3XvPjJ5pQGtDh5uNfa5m5KMFU9QQ66cbNkwLwqtwMTHTRLUkzHLqdsNGTxFgK4YPs9CGjEQznGJRBabfhUQhByyD",
  "key22": "bcmKjuKDGvYFgibKDE8hgdGvNyAHCoouAEWLm6B9c9BpNFXhcxMcBHiwJKNakpQ49Ugo7kpMzJg26TT89NUHh8W",
  "key23": "cwxVWN3nnkUffDNy9cBfwVrEypfHieMZoGr8wHeQiJ5iL4Wq7wpYpUrASTFwbxTjoGG366AGN3Quh1jjsh76xdg",
  "key24": "Ldaoqkn9mL9UTR4Emdmwv5SsMP1Csn9k18UGHfUgNb3pFXmZUmG5MXLxgu8CRDzKauDKJuJegZnn6cE3dumj94u",
  "key25": "NKsJ4DGovR695bSGtdg9gTjjF1gKX8wXBJRZ9McLQnYNcHsdUPXBNs3WwWe94DSu92EY8SNpNZNJqM9YKe9JeE2",
  "key26": "5u8ihD21HQ1mmkRN6wPZChVDLqjUK2qkFKzuycf3dqPEFTTcgHRoj6UQf3G2cdqhPXHWi4M4cFjhyj5xnoCSiPAj",
  "key27": "4iqTbAzjj58Yq4BqUCTXN2b1vE4HFV4r1hU88KTm3XR8CESwP8odR8YjiuxbKPHNVZzeV255ShVkNY9dfSTJkzNn",
  "key28": "4vGEYT4GERYhbMofuFj4uGZyCgULahRFyQjNgFmsqTo2ekNSMk6dvhtWY3pDwQjEQy2Z2Uq84p1dkcPSyguyW2qD",
  "key29": "4NxPMrfKz7RPjeztAkMTAyxcFjxJwhvKfr3HB1FSz6LBJNMKjoLg6G2GoDh1pdQKhHq2LpMWXoBn6rbhNf847gAz",
  "key30": "5XFwu7igpPo56FX1esKTHjEaNV4Uq2EBXzCVBj3TNtj6o7bf8EDKGyzW68qsV6cPmFwfPc2YVhx4DYdt8VAupSFo",
  "key31": "uqhWPZaP2aV5RfBKSUPKCdWHMEMnNNrBxoNYkPDo6YQqAFRG4R67YpNRFsPxz4k4B2vzS43iRD1tCM1kFsJebTh",
  "key32": "3ieNbpMENwqCUHxvbKrTUaXs5qynRVBaXJRVvMKrzxgAniSw7NZGrVZ7bPV9xopxrQks4WjdVqWzUiDJMYSnhH6Z",
  "key33": "4EAfjwZEgsiv9NeWLHF5yNF8RaakJKG6nsBvYVUPEPjABcjmZGcB4gW8ZJQYqSrJvYJmZ3gSDDYokxjnYhWH6cRd",
  "key34": "3BWpgu74zYwAeLFArQWpEGWWmyCCW5reWgYPx6Gfq5GQkAKLVnMkhKJoHhmRmSMgPDJWPZXbEbYgt3gTAMii7Gsp",
  "key35": "4Wp8DaqCHYYew8siAU2jYBZJPwBLJmaCkMMS1M2LkZtbcsEFfkYHc8SU3Gb64FXJYiycTJaqXAXkm5FTnMuFjMrd"
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
