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
    "46Lcv3i22JuBFD8xFzoUiq6MXhJQpF9yT2tF9QS9Xheyzk1aNrVrn2TCHGRnYv8PKbGxy93Gw47AXTGMthFpZ1hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZTWyYmHpbap1tZi2mTBetkDE81Te6PWgHsitZyNZvkF7NCQekf3oYdNtmT34vg6T7vGKMVJaBRArXYUUUzrjQT",
  "key1": "2bsPmsnrnqDNWU7ZYBF5511cNN4XDN66YAnXMV9D45b7LTMG6cbK5HHon6E1J5DJhQiHU7T3q9d44GiE2eYzyPf4",
  "key2": "4cgqAonPjtprfFvpjAZyvzSAw3PV426NrV6yEA9nPCUnrxKYMpntC6eHc9wFJe5LnG6LPjJBbCVBLSTxfC3BSUR7",
  "key3": "3ANBmQWksrRHa1c8C9PiYz1NsB3FB9gpe1JzDPbK9sj4cvgVNtACbYavg1xLcssE8G9vA47Wn19JYScZMYG5J7SE",
  "key4": "vpXjnTrPUZSzZZzr84MGyZGD6UkwhLGAKjfjByK5B5CWzs2ND6BPcVfAGHHhu1AmmU2nSDcDmpr5LspPTghZXca",
  "key5": "5cBMaHxgaNvAYEwNPEbKBG2BDjiExdCKz53vuijDYo5GuEeDoiBHJY6C1LmwwkECFozegX59ek2z8DaXHdyoehi2",
  "key6": "5Jv8PyfHPuuKGxYA8pXQvDb2Eh7PQJBGhYj3TeuQHrjgtsDAnWdir8vAKfJAoDgp8sY74reobx17omM4uMYfpZJm",
  "key7": "61hsUDqgC1yH6mjMV15rS9ai65HyZpskgiXZZrEugm93hdTP7uTeVzL3nTc7LPPFHWS9Akt5U5vQpzDz2DHvD1K8",
  "key8": "5ohgHyMxdD74Ggn4cjygZZSvqqVCNvXuaQrW5DBi4nLn5tBDaCLXXNphk3Nh74u5U7kEoYo2Y592D5nJX5fj4jRy",
  "key9": "HN2r2F2RbaFtJ8g43as9W1fwoNs7UXreSuG1gfFGwDhaBd76TssTwA4tj9DCCVcaLnNyzFud39EsrAxqFqs49AD",
  "key10": "42idpr5Gw8oJpit8YER8ptTugZqfWHn5mk5BnGFVBRY4fhWCxtKrCP4K96Ux5kk9z9bSsEgPEKi6PvASVc1CEsCB",
  "key11": "5GMDfddLdJWcXcTe4bYbrZoPicwAF7XQAYLcaykvXEdgq64t1Jp96nfiDieVjWtewqhJVNz2ESBKJwZFnuVDXjCD",
  "key12": "5qno74vk5ZUD1evrWCoTgBmjDSESdWDhPe3quecP9Dr53TG1sU8hwp2eU8CEqzwCmfy7oApRxuPChYx7YpZBjGfr",
  "key13": "32hQzjBMPeasKwkiEkNjfutTmgN3AwzyDFj2DAtuqY5NZzXKiT2bDrj3QrV5REumN21MmYjAGHCZjp4kT6fAxCpx",
  "key14": "63EwsKFcjPPf32rVqw8xy8E4dPGyXm8pDPk449PLfr1DnjuFetYxkY5wxvngMjafAsQxmYWKVmLJ78yTuvAv12QF",
  "key15": "WXKUXRKkHv9kV2ijcoYPLcuttWhVGGKzsn5jsccDaPpgdR4xQigzGY4C8Uo2sE7vtgQa684L62Y45XKLdeBFLh5",
  "key16": "5GtjfuxfjXLBYKRT1Swp9TfTi99UbruwWEGiriexyt2913K139eDvVMbfeLJCswwWUxZVqv5MAPciZ12TkmeB6yq",
  "key17": "32KHZADZGnQcdKk4E4vVJBKhK4phb7FnJoZT2vjq3dN7Ln9rVLnPm3sCRHpgdm6xFpocEcDJkipfPK8RBhUyorWA",
  "key18": "3HctyMH2LQgBCRXDdzbzi9W7pfmjf4gbBMbrbPry56SDT8cyyZNx5tEco3i7RZQBeaP3TvtvDW1Mvj1yUwkGNHCC",
  "key19": "45ndqNYsGjF9Um4SsBJq9kXyi1DPtUoJEV5Cibc9Kg3oAsgb9SbvvDjkUd9UWoqra6uQ6n3tBndxGPzeXbkGUffN",
  "key20": "HE4T9P6KmDwUFJVuCZGaxrXcncGpHqTEzMDBFvVwstjnWMfboViXThLqq5GCuuD2stCWDcjv6TebHsz8PeGod8g",
  "key21": "22arjBKa6KT9PBqeJu19MWiQHocVSkYntrDe91AcLHsgWaecNwzYD4J7yxgRLyckYD9cJQemS6SmpsxzCUiSp8Xr",
  "key22": "2X9PxVNRh27CBwrCMH6jjEzCLkSjp7UnG6yCaCutVY5z34b2mmsUU4qQuzaycHEMjNhVyWX4YsyDACiafuzQ4ffm",
  "key23": "3mFGTSQpWqcTNaVE8r4KSwKTLomxVW3pdVdUk3cnBp6TCaeHUB33qSwbxg23HKWyxhihD9G4GLe6LcvLMQqVD5VZ",
  "key24": "5CwA5eLi6Bywd49hjkja5PYs7FyiJXCkT8NZchiBMo8ohL8Vktg2oAiNiiuqfjXVuDd9HT5JfPtJoQBVwo3P4f2z",
  "key25": "A7eyn2Q8J6yJfLW2YvpGzfZEYvCYLV78r3vCmn69aW9q2CmvpXT5t7Vm5sVnJrdsw3XfRWS2yuzL7pg1pULBnDD",
  "key26": "4aDaY3i426WFoYiqvQqvcgpkUnnB2HkWh1pVC7nkLEBjizuREGMd3NPBuzkw9uuqgPM1aNeQ5YapJ2hzNPtWWfmk",
  "key27": "aDZ9pZwutGHw29j971oYnnUXRaXp1M2pV8VqEL3erjebvmeuLgXRMZ7d1M8mcDFPGsKmHe1nsEwarMbtqHrABQW",
  "key28": "3nsiG9VCpt4D23oww1a8PqriUHqtsteqkztkWFXBjivTr8Wt491BtqQyxvjFTXVDvDjeB3g45tFk1WouJH7qWdGr",
  "key29": "3GQfwrDRnpmq2eTEeAkwgGfK8YdUUcfCAVDsgqeSLgx1941AHy7EHjhJ5YXudMJqH8pTiRsoH3eqjBCNWj4ymSnt",
  "key30": "4C8jLjJKa4Xuz9L7ahvtYzX3vYkyBho4oBEnoin24VxcyTjgjQz1UpbBQvSP3LBCmQa1eCxPuCJsUwVrw9s29Mw5",
  "key31": "3iVZ5kpKTW7R6XmbK6KYSiWi6iStZ8rRSQ3yrs6jrJ5btzyLNGw5nXFQ3UDiiHRJ654f2ZGyNDGDmiDdxGYJWCZm",
  "key32": "TCVZtKiEDVNHU42FE7hysi95bpKVxpax3bTNo7UVx3UiJ3TiQd6wYdkWNrwecJM2yrwuuf1oPzoESum6cdXdqMw",
  "key33": "PAGPy2Bz53pYN4yb3uSaPgjvyRkTVzF1KPhMtuGVNcufZELHzBXSHmaTdwzVgCmD485w2yVbXaMR6s4c3hRNhLF"
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
