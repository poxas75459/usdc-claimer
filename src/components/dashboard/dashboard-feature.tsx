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
    "4N4nubzUWKnxdHXJ3DJVt8jfcmK8qLvAa77cYRjRGnBPEngvobzqo8WCF9NPnLTEVFYXEqwMYSM2W812FADWFAjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TEyzYkv2Ht2brUMXjbJXGgUFoQSqQjkscasCWpYC2KmAFnvXjtB6JACMNFk8eXNgJgSuehWYuzvSjv2Zcv3CK23",
  "key1": "3of79t7BdbxnKZketTyb15BQYAvq5wB23tJcbmp1kVWx2eA5TQgSwtpGwnwafXc1LZBTJmcU8z339VbhaPWFspSe",
  "key2": "Z9chtWx26ptX8xoGdEW9vQV2J7EkXxVjbbzj2qJcgCWxr4kdWtjg76jbSVkvAUKa4yCD7kkg35gbB1evVkWsN8U",
  "key3": "39qxAJRuLrFE898bJn36ZTTxpBmPnLDTFu6bGE128PBgD48UH99hZygxpE1w5tVFUD5YehMweYBh1vy1mzy6m9QN",
  "key4": "5V7DwRGA5xXLpD9fwsPCMCctK4Nzyx3tDjtWCaGvbVV39ZwusPaPgW7fjVteeiGcoSYPkoA2d32asE1b42R1vrAX",
  "key5": "545mNefe24ohBREDmshie2pkK8K3s8WnNYiQ2sbiaxLdADbPmEd6ps69JY12ZKMeYGYVF66ZUm4YyXjUBJreTyMg",
  "key6": "mGjX8VA87EYCurqMwPn6yzTcx4dEa6UiGSLN4eizuyvz1ioVRDgaMX9nAcNHcnn8htXQKj6oFEKrMnzGwuHLqBs",
  "key7": "2oEaPw3EUhMXhpDCfxaw9M7jmF93pag3ffCkpqtPiRDoqKUf492YPjDdV1b9ChcXbHR5QNMgahFySNeZTJQCCmWM",
  "key8": "2pwEkwSKM2QE2HXuUZUG6Jwz8ioqH5rkpuMj5f56TydtDnmGVqQi2BPg77NVY5pBHG2CbywZ6GX9EX2sYgp7Q5tS",
  "key9": "4soTeMsw6Zib9NqJomYjNgr3c81bH5CfA4QWsT5vJPxSX3SdWZho8KWAYh17QTCUCyYC2TQqxPznR44V6imq6jgX",
  "key10": "psEZNoGvvQDq6rzSR6EpCyXeFcb3RhJqJcsVFTkQfyuf5UCMZ4TjKzdY3rA51G2B9Gkk6MtJuEkHL1XFwT14hyi",
  "key11": "Z8z9H9apcHkn7WyyyendQtxi6WHzwGLJ2qXyN9hmiUy1WEspbbcp7Taf61Ae6q3zbBZBU4Y9BEfzSH87TGe2naW",
  "key12": "3A72vJLtApjJAwDT7HsKAe1C9qNK2A1iPhihZLXZqqhYNavLxqV9GRqL5EuSdFkveA8FSAicKZ36RukjbiuQGR8T",
  "key13": "66W88sssbvZF1Xi4AJHGR8bZVSUr4ngzBsopgrFxAjRZNN2yGpauHLw31ihbqfT9wS3BmwVtGZXqLSxkFcq4kRoA",
  "key14": "5eF3Nrf958wJ1Zo9xgyc5Sq4LJ7ZmHCU5ZP6iZ93m38T7cUGbbfGoUkVLQ9WDJn7M6xG53P4RfUHeuTQyB17n9fT",
  "key15": "4MS841XfyyGp7tcJ96BJid9tfV4Zksq6HAhGC9cbHRJx3ZxMW5BT4V4myEA8MUnvLcbX2K9Ws7LVn5L8DyygGu4S",
  "key16": "36rzSt4AT7jiBF8vk3teVuxM1WMwyyLi4sUHiY8UuqPdpiV8yTuzmm7ifUE2j1Uyb8csFxXza2Wb3mJEPHqK3Sek",
  "key17": "4M8cXLokQSHQXCoZusYTwkAg3Qe7XgX9RoL8fAkuoePQ9Wj2mHd57H8nxaQjSHy8EYeVqnUFMhXR5xLmRU9o5nty",
  "key18": "4s2oprGMvvi42oAgSdvUFM7f4UgQeu4cXpuA5Di9aGfA8fAD7bTHJcHb8DDt7MgNEVnnFzCJb5UVCCaAH98RCzGY",
  "key19": "497CjFUSzjv8rzr7rMmp2HSHr3KWLdNYYGuDkxCSqrCdFNnNXpopV3VjJT428YvCov7jnpFV5AePMEBYTRo2Edj9",
  "key20": "466rZoCPwcHyfYDYY5QXo2fszU3kw6KNkAh76x9nnxj7wG5Bt7wYKrEf88Ei3AaFqC7qcQC5RnPxZvKaJzNmUPie",
  "key21": "4LmVMrxRuPWHfGhfbyDd4HvJGUmffzSu3HPBVKTfdC4ex9QohvgU8PWdbVagLsbQW7G78Mw8fQ5MejMoNuwjkVRF",
  "key22": "27n7rtD4Wnh4eBnbXxcJ3ufAzGU6bJQjfEYdjLHSBa4o2ZEj2mBxCemcpbpjJ9TdW2n7pErZRTvfzyQHaqHMajTa",
  "key23": "63PbfY5fEyUP9jKUPBmjp1GZqrksYSY2gzrr3Bwof3q8bmM2EPjfG7bQSzVfxZ3jncpREgF9ZJX3j4zZSmXvQ43f",
  "key24": "2kgMrKsM1CJrWMNjMv4x6b3FTRLtXVzQk4YZf4FKFqfz7UyogsLvMQuKAHypMJhXsgf5QhkRa77MmHUHobeU9Aqd",
  "key25": "2SXh1HcnYaEafhge1FCyD4FtQrb6Kz31gEYjtCR92bCxNB2zw2SWeSf8GhPJggyb272gyWLjeyo2niRaZia3fhwt",
  "key26": "9ous7GG7PDsQ85unioV2wqvuJwiDycDtBGEivEosgWYFcApPhU2FpuYTkERLyTiqbXEbZ3QjPb8KsQk6BMxyMLZ",
  "key27": "HmJoQUvu5GUd8LsbiiSNrqU1VkNpgaUWYeiov9UwhsRx8tmmT9a8HWXMEXB5kYVeuVTkGzkUDb5XT2bqfJfUCP6",
  "key28": "4fHu5LdXM8HRYTiA4vgp83b15DoEBYnB6yXLuDzfgVZreKmyguJUCZt3rPZQVWwBB3ZRMpJUdE1MyBzd7ao1pA2d",
  "key29": "R3aSo3qHLuS6jk7S6797b8nHahjgAMnURZkQzmHF2pPDpRgT78unJ712fCa5iq12BKsaBM4W5XasYBAQu1zthhU",
  "key30": "666QURNfa1VbJ2PfJ9SZbsoapxnBzXTb3kEF1jQT8RbVgiSCzX7PrRQxSj5gTorWWTe4KZ9nfw88YHCT3Q1UDKHY",
  "key31": "3VuA711PSzQ5grLFRQVfn8onEyvAUA9zAxPjz67oQWqPvufnLeiVp98iDTQjadmmhaxGxNyrFz95yvNfNJT3PXjY",
  "key32": "5SsLP3p7NjK7e1KCBaVWnzucd35EbS5ZXdZ75hoVndKUNBb4Ac1ryWjw8q8GKaK9KfXV4H1M8Ba9cAobup1ABe4e",
  "key33": "d9UhGuyGgnA9x7jYq1YuzXrxX5ueBG6CZBYVwGGd1P7dx7k44MRjrfZwUmCTKV3W3SQhi6koxLoMoePzSSJCCJN",
  "key34": "3Ntes4BiBr9bQYrJiE2tj19h456a7TUKNHr9ycFcAvkmCM4scBsKsRvSEunPrHLqPVaiYLz7UNPsjsmXyMjK3Q4T",
  "key35": "3qNA2Dufg8i3S4fGoLcUvbxEHUyoVhtS3fHF7Um8RxyDtiha86HLxmuYLkUuhw5VpdfECtNzqYacaNHxzjtz8Cnw"
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
