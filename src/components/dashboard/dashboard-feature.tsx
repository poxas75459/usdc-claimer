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
    "2rucnNZ37W4MVf246KvgyCXmoSpbxRkZL24i7o4UZovk1TJJYuedYNPhPqETUSe8NLhT4EYZyAnSmSCq1GLoUpdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XVSDVQGRJWKiVjBSYwLxujJNM5wySgomxbd1Qn6NAZ8UEhPt9fZdP51HLiHLVbjXJEQdcRxAYxyDYRSmhjz1b9m",
  "key1": "4MYvzeyTr3fdNgwZjFvW5SB4bUXdoaoVn9bpkziouoq4zaMhXng4ZRLKhnEeDvnFCdk1BXbfeq4ha1frEvWxjSCc",
  "key2": "5ncTSE7Kek6t59U28CPNbHTceAaPsfSfUXSbfn8tf3398y5yDUYp7ChPTQmcTubobkQYiTHTBR6ZwiN2eSbzVFDG",
  "key3": "3sAV9QRJ5WeQrZ8LyVS5F7Sic3d4Xzh8fFTnEUiAWk2vrkfShx34guVF5ZWxHDaMzwxxEhsbgEV9WfQfGceKxPpY",
  "key4": "5CjkJ2LEv73KD4iTyk8n8huwP4VJe86JfZRUsSCHmVg3QRtYHDZV9SSwgoCnJX3W1cvoBAQk8aGVhX23SXdFR82t",
  "key5": "3ui2WzxiVCTEeUBzAk3ZGFZiqM9GZsnD8KVHsZBFZZgKDhDKSgAx6rAvnS3HPCmkd67KMXh1fgXA1uZcvWvwdK5f",
  "key6": "2MxRVnMq33eP6beqeMoLCLSiFEvnke2o61CYeuP7mdGSDCsS8PDfNBM55ZMdikgnuDAq3wQJaF7DPsxnWFQLWuy7",
  "key7": "4WZZXZA5GgZ7p4ioEqZcThoh3s6ep27D2wuEWJqRgwC982EsP1dxCDZfrC2oiedj2agRUpx6cTY73JvYGbxXTX6u",
  "key8": "3hNKMBRqkzk8FrjXVTnFJFBZ4dD1pEYvkW91Xv3PMVowqn9zXrxMvZs97Xre5xxP8n3pNw78GcEXdfjSEdaH8ynv",
  "key9": "4WTe7Yknmfj87ABtn56QE3uvuABqwz6C69BjMPvi3drzRTfi5uK29CT1Zi9wroL9EU7pcDGGniKPgBcK4rTkzzBF",
  "key10": "5JjsQtP2s8agaBNX5v7cYDx4gEHPA6oSuX6VzetBZPr9VwwFRGKBkZB8U3xWfEit8Vw83Cm3Qo7FLernDAGRmEH7",
  "key11": "2wHdxy4Nq211pWyCqtH6xsAJRpDKHXfwiEaJ2WHfUvYhMPLsVMAYmMMbTqFGMY7ktDtZaUoSkEEGJ8SUruPUA1kG",
  "key12": "3VMgN5ztGfZKbfM7XVyKuBwRqnvHPXcnes6NSsSYL4fEAnfcLfoKo6yAV8mwsAg6s9UZtT4vmygDM5batLBTe6TV",
  "key13": "2BY1JC5A4rimZU4YvTKrFq1C44EVLgtpjNebjM3XtqE22ongW8evzUFFLGZKDzLpPMUQdWmSvQnCnTCNR5DWokKU",
  "key14": "2jRNXmz9sB4S1QjSNPLEc5P94ogjAbnjnn42CnNXipn3JxqMZ4PinLHGiSvt8nnHQvhw3xvKftHSbYtvwcqKZdzq",
  "key15": "4uSboNBaL6msawsCKtaWoths5RYbqHtMrd4BXkd5mqCGoqn49hz8WaR2sx6NvFbfF5DvreNiTMG9Gm9f86YJKyqp",
  "key16": "2oJKCcnnF4EJY9gA39AH4Y1fccMAYifdrntivyiTiCZY412tXghd65H3L4Zb8d8aVH9tPDBota1qVAyPuJfJ24SE",
  "key17": "4P48cGNvpWzudahJaq7uq1CA5fqb26N2ze53CZB19rRmDQUQjb4FP2hKKLT71u11Rwj58epbYaswfrnr9oUQukUm",
  "key18": "Nn3ijCx3nhxGh5qEoRsbKDWxrKBBri2janpZdDfCawLu3qn74ar4FCHr98tUzyhRnJE4ynNxJyJhQ2inKJXkYiP",
  "key19": "32TdkLcVAVmZMCHDxEEGpbRFVsrwHqeYidJJoaKSEWpHnDijQL3YC5Decns6YkWyQvFytXepnNC1m3MCG3SFMW3C",
  "key20": "3rDH35ksyhyoRfGiZSTWpeznTwdC1AhWUaiYe8rczzEoLD6SnJ9S9MToHeyhJ27qiL4eFkQekhienmjbPMSnW439",
  "key21": "4GwmkfjZhLftPMyoaCNUKPdGot62HiB9yuLiMAS6BSYVj7y7HNK8CcdtB8ZykTB5k8ejvTJt3YJRTUsaQP945iwd",
  "key22": "4aconYmsN41kFshLx92hCPyrAc5xZaSwhqhr3j4GFkF3S3ig6bBgdNXddc4cvzJ7Lk9pbSvRFtbn1rhTAPdonD2T",
  "key23": "QtBtR7uxFzVDSemWCdNi6XMTyGXfUh2iLGq6LLQJkr44nEc2gAtzu3hZxCCABYLs3fbTmJWwbFQ6zhSqGkDtkjm",
  "key24": "3549o9LR1rMFxytuMAske2VK4NbrRg79yWVQDebHAFRRa6kAysrR9QDoUV5aAi2ne2hcQ4T3CKk8LHsbdKYB4wfP",
  "key25": "2LDofMbKfd18Njd74paS4Sh2PDt4j95pj5xxAqTV6CoHtapTGAxajkNTXXeXXWxT6XovKKTcbRRgD1e7JB2mWfV3",
  "key26": "MH7UbievrnciJKngSx8qQmxjAi2WmDQQdzKR3L1cd3kX9MHzyRDk9z7tmYnMtQsp1KgPG4cB8Ct21TgbWgp3cA8",
  "key27": "2SBWje8fFrRDx5Hr9v4nZGF2rGAG6QgA9eVf2xeWJZxnwiBJXDX1yc2CgS9DFnu4af5rARqsmULoyrBoGUMQfsPQ",
  "key28": "2wvvTGhotNqRLgryY6HKRQtiyPKrnVxhvBeBFhsdCGMjYHNQqHsUk9mHmdw7bsgBBd42qt7wEZKfKbS3LRqgdpP3",
  "key29": "26dwpkeCdxktdddJX8ZNggcWFotrHeEkfJMDP7he79LRZzhXHnrZG6WBnknYn2PjJREsqLtdhJkz6xY1eKoVnZQd",
  "key30": "296fAjm27UiZj1zJff4NDNmUoUcWpHk5KM2spFeB6muJ32HiWyHssVSZKKkcUNaWjfkJzT2h4Cy2CNUhhFYcUaUR",
  "key31": "2LX6JB6rdwrZ7URUTbDeQKJCKhfE8sbNe2VLPcnv6oVj3VZxAvX4VdEkSqPE7BWZ6rkV5SXiVdJrmU6avhjeoGcj",
  "key32": "2AG9Sgm7vceSFPr8nZGwXhmCpSjKrNbMUsvgyPbSWt6YuwUK4inMgADgFQfk6kxFbam38JYdDU39YE2yJv918hEj",
  "key33": "5nGZZbPkM2y1sTTVwE5WwN9fjW2WuUaz5oYojLWK96FUt4bfahZgU16rSDGN1vaapzYcE41scQTaPo9b37wjFZEp",
  "key34": "TsuW8ijnaGaKgmm6RD58jp1Jen86AQ1vVJpdaLUq5YW3uh3ss7U7hgSn4C1NFbJPkZi3pB3FhfmjTRiQLjzQ7Do"
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
