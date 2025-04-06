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
    "2zo5pDT749h38oPkhYNnUEQB4tw6x1vKJ5ukMEpzo4GDkp7ibhrGunz92i5CY3JynVkNwZgir2nFptBqHWCBm9H7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwEUG1jTwf1mxCSZJzh8oXCDtkxS9trediLFP7z1bMrv6A6fGXGVhtAJphsRWLSUmzKuHERKsAkF3W6RpiowosT",
  "key1": "2PebPLj7KGXYxdZwEWsCFU72NTwGqcJ1E3Y7dZ1HvmdGFi2pDFmDP7zfKcnQySp6ErYNHEVsVyCVqPmkR2n45tCv",
  "key2": "3nWnB9j9tuYtzaLAB8zC5YM1Ke7LnKwmaydbvtNEcMmNtpHZ5booLTQguSnW6EdnsQTnJ4N4e76edzpByiA93yFj",
  "key3": "55NxBDvaXmw8Rg9EgxoTUbMZnSHsj8LjTmxryFR1pFyPMhjeC4MsQe5PoifnruMKisovt19DQWte9k1die5BfbAW",
  "key4": "2Gxcx6rUEy61rKi8w4mYArPHCRpHxiju4GqzmsVqGKkUeUjBKDxTRaJLsSMX5xTdHPF6qHFFp3Zyz6Vov4z3VWnx",
  "key5": "3Eh8sb6fuU8Rsxnrwtuk62avL4FweK5v9LidfVpGf5g4yGZoC8H4c19e3MsKHdQynYQEs5P17GS7oxkWnoj5tJcL",
  "key6": "4FmcDxvgdLoz2QfaAFxmJWDSpFzud6xQq9CWzbyppj4ZqZY8hpubtxdTbiMiELSdgScLPkQwYE4SBArrpz9zQdcB",
  "key7": "sMmTwyfMpw3Eo4BX62EgCMzSueYQuLhtRisQDicWqZyytPDLq4iGytQwMT16NWrg6j32k8BN1DejxaBEzdBqLFr",
  "key8": "21GpxRHpbuwcnxgBhtoQH5b4gs3WmgZ8JeHVWBYZp8oemDwrsciB5mQGwVcTiLv1UnXtUHoCsVn7SitFjSwDVvyP",
  "key9": "2YcMMkUJm65cD2ZQ4UydsJrvjCazhUyMiNxcKNuaSMMeNp6Mn7fTtJHEVjqCw5dJJUkRkKFDPNgM7fgbxAEZjuE9",
  "key10": "4DmUeqWavcRnBpoqt2pxxQifJHQ3hy3Px3c8qB6JUZ2jBn4tCvqviLpShb7tpNviwHUojEv9Zene7EyZgeQo4FR3",
  "key11": "3p28MCAbnjuegRwr1Co1nhFzmSCFCjT9tsQB4BV7d9tG2SSzvANNGXti5hhAiZC98dxWG2BjoXHbeYNShWRpVwc6",
  "key12": "122sg3zZnwYnHQ88UqTqo6ohXswzi2YUfmCp1r6rJAM27KRPPfZqgXqCCW7YncnLUg8H84Dwa6FKTAKNVGbCofC5",
  "key13": "5B8gXEvC8oeYE4pzvmCCCgZP7QfovA4hivCgvnSgm7iM61wxvURmAx66DwU754eMQ1k7Ro5oLXMpCmAGhhE2RfAm",
  "key14": "5EwvuCZSaHwFYRfDvPyfm1QTiGvPTNgAgTbDg1fNynCQ8THDrfHU8TGGi8cnhAr3UnRus4d71WCsp4mWsQaZ6MpL",
  "key15": "rNfa6EYWfYPRy3uaaM97MX84k1sdvF7XySB2oBwjzCheXEShQzShkcdLDYxc1P8sQj7uTvbiZsjQi4ypZAvYQg8",
  "key16": "4TWJ8hmszzqTjn2TSLmoWysksfyRGX1x6NFpVQ1uyuzGWDWwzYHcRbvV9xe8Y9DqDUDMc2cmqU9r7jqSjjhDhGV8",
  "key17": "5X9DaqkAbHzJqza5sbrx9E8Xdu3m97eudTxhfzEt5mYf6RLQaPi5kvGp2Lw8Lje9pVqQ6KRPBMNxqutFoL4CAaQx",
  "key18": "5UvppQGxaHBDRPuQ1CrwmHbN9JbktUE7TuWNwDHZoLZhV5RLpkBhE5BVc2YeX9pcsycZTJxtZ9RdKpZ23Fq8J2bv",
  "key19": "4GnyNNFVJYG5YhBZPf1xoycaaqsqYWLWZPLVB3HwA9GFwSFXZWqdU1MzEd1d1gytG1oJhYCgMVyfxQf2ANyTEnbC",
  "key20": "3GdPzirLLJqjK2qT7ZsEPSgjtgjuFsiMJvAQPH2wanTYBZHYB2PqAox4AvBp2JFqEybjZjsgxk3eAQxdZbDBzvGp",
  "key21": "4enzVvUnYHEUjxn42edkrJ2bDTUf7UKfQtu7175HZPP2EoaQFAi3zSULh6ubUGnvGkjm95i6e4cCPEnAmHY194vN",
  "key22": "5MAFUMpSocz9gEcF67d1ELkJKRnvKbBjPbthEhcjj5Wo5WQmdJBwkogDNPgdhPg752ifbVmhAJ1itWQ4HPPc41DY",
  "key23": "KZzZWUKYftcbsVi521DrGiqfPZYQBYZBJmV97X4yg8PW6DKM3wyagh8fxyPx8Dhw1SVV4DmAKJo3AoHYGb8onzw",
  "key24": "5V6xnQ2eeprLpeEx5LciTzJy3kaHV6vxz398M4UoYaPu6QEfeSJXJ1mVbfvxRKD3pZ1aNpBS2HT2gkmuiX5a4N6i",
  "key25": "2Xay72bGKx4ewAe2EMhm7tv6AinYZzoS5zSfeq3ByZv597EcKXER5y9FRSLBpTcjPY375rHmht9ZaP6p8DZRJcEN",
  "key26": "5g8QuLHdZDoSVkpaYsqzGGRLC2S1zCzCdsN7Td88uyVEK5z7uBSSiqVRecr6Ehqe6eRBC7cBzgdVK1yXqK5g5GXS"
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
