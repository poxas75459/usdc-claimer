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
    "5FZ8hcHhifMztwdkxBN2gkYq9aLDZqN5hym4Qt72omphToNCja3xDfaYBfRBzitnR4cADxMuqHJcazGeiUmUfavy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nQc7ZPGAHKQnXoVJuy2rcn6GaBGA5x2c3isNhVqoucQC6FS2kz3fw7NMNApJs2nmdmaySP5ennGjBE2fgs94EFh",
  "key1": "2gH6DQsNdiaFKWYVcQKsLAxPtCmwiHWjLhCfobXfj2WBNADCTUi4Qwp2o3tt386eAXwX7sHChA4W4P7KyyFjm3aD",
  "key2": "52Gdkbzd1uQkDphyUyfJEyxe65ESuQik7JFNmHqU62o95CSW55Jk7t8okW5dGmbPRNKS5EJdpx8jtVgL9bxF4MzH",
  "key3": "cssNgaSDCpVBjvbdx7gkm6uSxiJgVNxHSCWZbRJDfhPNWZXFSqKeqgkQHwumKCHLCtwTdzMQsBQ99kPMTCUD3LY",
  "key4": "5x2mPwdirNM2rFQ6b1LjMBWx6teH5gQwhnDr1Pn24sRYDE46RydBfmUGqL1BNtbDEGp1KkAknVTUNyyAH9fu8jn9",
  "key5": "5sUe1ss6SBEWV5HRsmh4LUYKDvVsAWhzwgchGHiYBNJiUXCyS5wjCbmttSeQv997msiy67hX73h39mFNj1JejDw",
  "key6": "DFuhM6wX3oL6WqScRuzN3Z5XCuTvpjsACu1GANqyYYLCVh4jY8dhSCwbKMSudYwnVgy95UxCLE12Vkpy3LAed3n",
  "key7": "5iPg1joA9KTYnwanSkjwZQGv8nFZ1h7hVNiUmqSbJkTV6f2kxEVwSXw2pjR6rksSuA8CV9945NG8RMAm93i7Nxz9",
  "key8": "3JFdhUajFoby3ru1qqW5KshD5zZDSUErttQZjk7uRKweiy9H4C6SkPUsLiZCNY9ChTYMnoSNJt3MVxqG3ddHFMEK",
  "key9": "35oSjGXXzLnCXbspgDQL1PKHv2Arg1VVzkhGQ1DJUKYQPtu2gX4PRmf6ono5BqiPXZ5eDiB3MUxRa59962JzfeZ5",
  "key10": "2HAR7hVZbwkUnnUwsjujDCAwCCsrAu6RMVgMabRuzRia3u78FgvjqhG6mhtK9pAeU8eXSiKxZj3UDiSjVx81bpqw",
  "key11": "3KYjAQR7t5pHULevf2rVtKgvjooesNUkctaQiTqMZZR7tnj8XgxSJp83UP9SWSoEZsbdPqMewLcTM6sxX3jfrhTU",
  "key12": "2atxxWnBxNQFv2Ug7LvPtMpHre8j9SKHGWwCYbF6vJUAQNYgqkpsLVAyvoW77XRNBSQhdqDY6sc4eLdAXXSaP4eE",
  "key13": "5fbD4afiWJUfCqZiJzit6piTDQCJY9JFYdAohFs54G9BSKwchqnzuHhQt6PLgEHkhD7x9tHLX65WVhFUweda6zYd",
  "key14": "3fXQbAFVw7E4taut3tQqP6oykrRCEY1xCA1Arjj6m6mH7YUSvqKpt8ZrH96CSQrK6o8wwsrb2FQQSeM8BY8r6G2T",
  "key15": "2kMbAZgLTCBXqtm6DzKEd3bqfQsvYMHueNEiiN7Dg8x62v8sHnjHCSyX3rqRjyxkGahavYTX7e9fjJB6aYmygC3v",
  "key16": "5WWapNRmRwGVbucZ6ZDaT9SyvZFPP5Y6NfVpz5FksQ8sxnwAGd5sfhLKMTo6fAYLuM9Tq93YTX8oaej7N1HvQ1qw",
  "key17": "AS2NMoogYAn2tLzGq51JkVHTiFudKyvE9RhJd7xLjj1J9QR5QeXhzfJhiSWByz7LUvGxCyCTdJ6WJsvkm3annPr",
  "key18": "4zWMkiaXgYAiNBrynvJMdZVDgiJVicugo4vkpfdZYVkcPjzMNfYBVUdkf1XXKaJQim7GFwVtdTcqBBrhRo6rPbts",
  "key19": "JreAb1niRkRxyUvqWUEQE1tXcsJx9WQawZF635jEf3ewde4EBfXyGC76iKWYaDZsvAzu7We1JNKjkQnahfrZVF9",
  "key20": "4tt369Bhdx9i1tEsGdtahKZpYFWDKAVRC2G2TMrDX4mYUcyp91FrTNos1Nt14yVNBakKtg8nTKUx4RPpLj4KsJn5",
  "key21": "55UEkHYrb4W2WtfDNnnpXbZ7b6jfpCfJKSJArTedPtyqRQu5Yw8YH2PU7yAv2175EtfACCt4wS6USenAYMWFJCt4",
  "key22": "4HDKhVdHXbj95Jb7626igjXY5ZMt9DyG8yobqQkJF19bbBGCEh7Ld1a5QPAT6tFbToec2uNmpagPEfoN3RSoebAt",
  "key23": "5bHLY6D74PoxPcue42k9FaVM8DzTof5pzZkDCg7Q76vrHzak8GFsMg5eBKAGEu71WSu9CV3yLgsJzFSRmCz8eYka",
  "key24": "2F5ETzKrK1KoxHvP4KsjXvjuhR3Ex1BiqXX4ErANkyAxU6FPLXHYepzQg9eCzDMwxutdWFSjY6xqCRQLXAbpjPDR",
  "key25": "3w9nqADmBqJA7ViXhRWdbCS3zdcTpBqYrRjSiMmf35gApuTCo4XhHWcS217CGzmYb2fFPzC3EGrqAh4JNctz4NcK",
  "key26": "3Dhkb62CUMSnqcchH84hSXCSJteXrRuA5nfiZEiPjRzEPUw4sS99t43bfBnEsCyenUViyBG24yWsnAngKKbGoLjw",
  "key27": "KRHQFay9zd3CsEfcXxzUxognrDtYhyaiSXR8LsVx4W1odzLQE8SFXh8j3Jk237uqz918YvpJ6MEwYUWmyPfx1zP",
  "key28": "28a8i9peocM7NAerdo3QMUDVMmKHz25J4AbamWVwjJLYnDr6GNq2zQdZtcUN9VQvHsWis7evA27apq97qSghuwNq",
  "key29": "3NB6rFmuMZaW4U64Xg52zq2apv8snLcjbAH7rkrC7hQmEDBJYbykWRJBgFgMeCYdm8r3kQBin5t7pGz84DHp2tBh",
  "key30": "29pwmSBAqj26UsmXUNZAjh8gSPPxK6uEgWsyYz7uGP2eidu771uAyekve3FLnZHWc4CASi3ReDYqZYPEXuoCX316",
  "key31": "4iTw8g24vbYEm8iNXD44XEamsRVaxsA22aKHfpjGoZFbZpi5eHAugGx2ZM33hbp1nY2ebYiNnQWiUX57D6BbfEfe",
  "key32": "4WgaLyoKfKpxiTURZQ97DZrUghMF469EMVkj2j3Ep5UQxnpnCxgwkr4ZRDrteZmYRKyoqb5TB18suJB1dzvYErkH",
  "key33": "wYPG6f7yb5CfTawkm7aLTv46LVBSgR2SqESa9FnyA3GN8JSQg792LYTYDp6t68EdcuYSbJMyC1QW7teokp66sK4",
  "key34": "3bP7mzSfRiNvY2u7rWSALAc4HcLMvE8Hm66pZVc8T6FVNJsctiGrkZ378qY3L7RD9ejSUBwbmxR2WXPcTUA1ZB8S",
  "key35": "3UvLosRfveGrxNvvCH3BHqrhBgKBxkspfAKZjtGPTLT8AcBorQxNZum56pXokDTh8GcsxcmyB55kCKM1eKRCCmAu",
  "key36": "5KpGBakfieeMaLeaocZmXeojwQqxceYGbsbDhqWYC9w5V9qWB18UWwqLpNQW4BQEMKvh7caWjumfCH2NjERAcXtd",
  "key37": "5cCfd2c6FkrEaJUuYx8Sp4EVUCjGNwprR4AVh6ywDaa5uDbakinQfyUY2mfT1pSLsKhLc72shg8bRDNR1wTf737w",
  "key38": "Yzkq9wQsSh92fMrrdVnc3abEPouDymA3DEP5YyGLQLHdKFoFnPCwf15kbGYj7H9cxWaD3CcNzT49j4zg9bDhkQn",
  "key39": "2hFyGf25n9mLjniAP8MQrCRkgh5NB43EJvvgJm7bbGonBriPPG2Bd1xwexwNmyiydBxDZYozg5MrVPvzkcvxSQKG",
  "key40": "5SDhywSHp7GQj36VjW3C7VcH6zN8rXgyTVzyatBGiZpn4VfnGU2S9Q57Lc7XardBpJuF8UPtbEdmqeLtL9U6p5o7",
  "key41": "KSpZ5iUpJeAGaJLrcydccYZd4tqk6ifYiA5bE77k27pcfFDpqRnWL4LwiiR7TE4c2s1atz5266etbie9rmQoayx",
  "key42": "4jZzg75pGzmUXx2ofBwV4CtZTLdVnTKghGghZmRsuhgmQARHZdkQg9PJsNB5d26yr4KC9bPVPsjw3UJrqT6ukyXv",
  "key43": "5koxzF2cXuqLSzsVm1FAThWpbbDKJcdojzsWUUHRbG7ZDCo1oEqFTJAwwPnq2uVJoeU9DxDh6q91is2K85yTUc6o",
  "key44": "3hW4kERYkUgFAvXzAv8LhtrFH8iukAWqqB4tPxM4hhBoHdeQ2mQD2LHjMDNunm1t3vNWbr3B7KkSsC3Mh7t1rfDL",
  "key45": "Roe687eTk9JyVLJeKN1HKdeJR2NH8CH3ZaA1YSiyqACjJVcSgKeQhpC7RZJB64FbywhSX5hKcxXR8qssA6YmUC1",
  "key46": "5fN4qh5V7S1nPztij1vrhohrdrnTuadi1Afvp7t9nQNaXSKFZtsMoknYJQ6xP2twz8xkY64z2ktBHkv7zxzypX9B",
  "key47": "293fdFufo1qC2TbfVebpu9osNFPqwahwq1bfj5BGtagCrdEX5KuteswaefzswVXuWUkkm32BESKsVTy35Sd2LWfa"
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
