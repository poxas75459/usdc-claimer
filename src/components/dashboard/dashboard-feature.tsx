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
    "5Vm15kVS6LdGb4wZHKoX1gdjPGdjK3Yy4FMpE1SMj4A8K289QtyaVJCebXZbKvgMvNwWUCYw6RmxKuLreguQUDWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvtULMjSyQK6hoX1dNr8FRg9xcv4VUSEri9qntC9UTtqnFz2YoufS9Vv5wE8XKoEm15FCpHsCvjnBy2ziNTqRDh",
  "key1": "4XjzZP6v2fwjF1ZXj2B1C7iYdMSde1kcXP6kiVWShjEH6zgdETAf4och8xMaU8J22zWn8GrQhzEUxVAhTJ2PvUaP",
  "key2": "5GMoAEEhuSBv6PAxqeXDuBrvYxG4HD2pw7b5deQyGoPV1Emm7tvq8RoNLNT4YVVvtWkDYsLv59Y5gECKKDohkVpk",
  "key3": "5n5xsRjoYQEGihf5eFykaLJ5Pejyo3vzshrubD6eYaGJJ2SRFjGEs4En81RzYduELwJtWyKLEhrJ1Wp615JQ4Gm7",
  "key4": "2TQPA7WDooYzsQEQZL4P39hBS6ogQcj8ArvdkiMWc8opEPgTmRVnRkid3WucvZRtRvN2gRa8rUjTSTEmAXLzLHTX",
  "key5": "5xm1iVeP1PNGm1q522TVtvCxegcmreg3rPVdrcyBYbFTf2UfitBBfNVuNDzvpPGhJdyW4WPkyMWVvKCK8Eyf28Xz",
  "key6": "5yv9NdyiZ8PRL5GM5Uv17vtgP1a3VeTuK527v9kNFtpPDKHvxhWwAa8w284smoa4KVAJAvbm2VkbHbC4beyXR64U",
  "key7": "azX3pDwcawm13DvaRCS5Tq2udy67jJqduTHm3CnxRTGrvSf4BnNgg8uaiK882vwfaxuiZRTHfbuybhj75p9NXDp",
  "key8": "4JGjy734w84kaX6apN48Az5g8m4hLdKos8FG9WK1h31xvNjJtr6mZXsBrzMXCSapPZbQNz1UEyuyYUyboNPFeVLo",
  "key9": "3pTDpLPcVmss5dmSzCpzGaRBKq71pJ6L7JEdBqTCAUnwngBEv4sWPTQWMi7YN5T8KpBHtK4XT4DydASFy6Lwx2Xk",
  "key10": "4BJgvLVk9Qi1rV2yvwNpAVr9mhZjRYTBMyCYBdetufEx2Xb8tCewepwh8iooC1nDQivBtnVDYsT1ec2E5wdqcHhR",
  "key11": "3QyrMFc15kyCeGeMJ1ECxHue6y2Fy7c3EPBjus6TeJviXKSVKxgvi9o2rcF6QrZLboFDf74JUbU2VeVjnfEkXH1B",
  "key12": "xRkkRmVB1SKdQMngyVVXeY3JCLTEpmLW28KYjAiKq8L1ucNNfwjaPU9eQucMNLfZBegY4pEEcakn5zyfA2VcdPo",
  "key13": "66PQ4W3p1d8pDrNcJ9gJouNG19ufcA5kZh2ygSmbd2jqMia4zJfay6a51ZuuRDgrySLegRCLyYDuB2jrP3BgJJ9i",
  "key14": "3fBSRmR9E41kh2VVfdJhNXQuND6HfHGR1HYL5oF142RXzUXu9zE3bBWUqNqYGDH7tuo9BZrkSPF64JGbpnKeLicx",
  "key15": "5RCe8KY1r8Qq6dAWRDPcuZXihqR3Y1mRtt4gUku7UN5RMqcL3ikLAEqL7bibzK1WDBQxUu2FPVFYu1Vban7Ym6w9",
  "key16": "2WXD4SHH15uFFNyw4yHbhNUoHBYH2Kba5AX6JxjzNA9ZYNoUgfzyRwN1zD67WFJT9JLqXWGwBmZcbtctLnYbT2fj",
  "key17": "5mPn9EZteiZDwCyrRDNZY7DWZ6YdagqJfFkbUyDef4zm8P8S6p3Z7XbMMEMGibM1Y7JGcwySV44NQjDUaeXHSYMX",
  "key18": "67QMJZAX8zxPhxeP1pepFoczbMRjR1vNgDNEraGBHP1aVkPV8ZZndixH9Ao1NjwcwnyMWVwfzz68DikKrhk9ua5D",
  "key19": "2RHKR6bJqKGe32GLpETk8eQVAgWfmotf6x93UYUnyZne7wKGnpJ2XdzDHk3FTRcf8TTUemDfot9H7WcmsL1KvbwP",
  "key20": "4gpcKG3ZXd6265Mn1LzxJfCWHGDX4WAkqFAdPMmgS9d4b3SiU1Aj4Mb5GYv1bFSSz4PmcdDX2Gi2as7z3g7Mcnqy",
  "key21": "43Nsq39JccZUc9iYty2VoDEVTyg94AaGiU75qmULgnzNNxCVGbB6SYXH1dd45BzRuk1nTYnG7jNVYafaMbeLxdqR",
  "key22": "BJKFWK5T8oyD77spCrjy8LvUuYoDQGGJt9RstS9fB8N5szvRyh7DcDFgKS69GmGHbzd1JeSaaXhqy9235Y8MD7h",
  "key23": "2iCpASahQFsWHpduKB7Scn4NA3fHtduaCYWWrVg1HccZ6BxBuzX52jTZW3bQTHtjN49cnHTiLp9SnJMn7RxZmS2u",
  "key24": "634Srmpt4pYvB918y9eTv4Xndvfw9pyXKxHDfXbSCspg9XjM4SroJqjTACnzvbqXTgvBeNM57aNq6V14N9TrGmuK",
  "key25": "2Km7fFJFtZ9Jw2NhweLTyxJfvNWMciVHuMQWQHShiHeLUmU7hhcnmMLsj2Lit3jF4HpfkVzH7GLnkM4ko91GBAym",
  "key26": "GfENKHg6RdWWoe3aqjdyLLWhkG7L6mrAtp4VtKTm9NZq5gPJULVsGNB5sXsH87g3PBLgDKWkxFTEgiJGsAP3gEF",
  "key27": "3bWe8N1bRJ4tRUQc6r5s7XYeqYvhNWSaUhjkVVF7NEfueMVwzdcrtLZoLyoJUCJ11e88bJnUuHRx4dXyvMRG3NM3",
  "key28": "2uD7ZRux8fD3BMa58uykoq6FaqxQ6pUqBoJYHCvrFPra35F34UgwcHe21ShnGaFt7TCF7xakCc9vYZ5fwQdwbQto",
  "key29": "CWw1xZAtbpUpsovFEXdGiheCs1YWriAn1nDf7LeFw2QSCrGsaL46BW1boP2GsMYG5uyBtAZSujhuvb5CKnH3oPu",
  "key30": "49fLHCXHVxiTFnhm1yeq6xXBUibuhgxZJ2kXm9QP5sCXM9NshBn9Kgeb2vHyW6MjM6xtgUyZkwWJRirV8F15aLmM",
  "key31": "q3tzbhZaFiVgVbzBYDtJ1oDiZm8F3oA2eUbcHFnTM7mV6zNy1QkgSS46JfZxgzJ8dj8Zdk2UdtBCiactwZPAXjt"
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
