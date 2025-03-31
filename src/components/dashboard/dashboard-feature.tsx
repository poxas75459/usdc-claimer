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
    "2pEWnAPeDcfqNihu56snvvp9iuDYejVq3tPC2Tg1fES7Ffn1EKHWremstAQ5KaMMLUzfyX371nTzyTHBvo1fD6jM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qcvGMTB1kwVM9cLiTzb1gidtVkn8nz7uDBUtZ1R2r1ohvkqQoRtXEY29mgtEE3SfzPhCtwyPVam7HNB4yaVgitY",
  "key1": "oxtGSDXzrCA6t7XzpP6AdN3euhjzBiD9JSHva8qaiUYL1nGZBs95EkpKaaE8PEBipKZMK16jvcZXQhs6KfK8ggX",
  "key2": "iiqdjo4UPcooY9PXa8RpjZjaTHa3oT1ZW1CUQapbftrfr3EDDevk7KQ3YZq6v1JH2gC8SUapVHS6uyEGsoyApjg",
  "key3": "5wQfTJ1JWcvyRQB5SxPW9NsgNTqTZaNScjGGKAJfGj91JUf6CJpHXdtD5amcWueBk8h6KDbJ4AtiY2oC8GMZFMMz",
  "key4": "gkqdKfbSUHkRJTSPUTq77Gk5CBs85hGKAmdUPG3ATZYDkUJZGraStM8biZDDWuVhWDjvjR8LwUYyeAhY31xD8zM",
  "key5": "52hX5BgESyt2EpAjMr37f8cjoSBEx6GSsFaKFcgw6Tvxbn2wgbfsZKmDhaz3q2q1RERsmRkoa5o3U2BtSe59gSNS",
  "key6": "4De46npWyB8ERFBdS1Ff9jxPgxa78bUKtNDDmaZHeCRW9shPdNbNvWp6KRPNK7aMx6vqNSBrGeB9QnWZao9bb6Ss",
  "key7": "5itCCuQmhc4uE18dFzo6P3drwjqUMhAujsfbQgUGrVnv434ukM4tJtWk5XtsnejLxijgPK77y1CnV7JepeeTagz1",
  "key8": "3TBp89zzm9ZNTTkNooCSCZmjumHbX9UAZZcHDk3t4SMqjx9Ei3KRjtvTpWbuLqrLoYTwKXhtG3Q4yPRmCKoV33QT",
  "key9": "6t1wQwW77UiJ9KWVrs2qb33nihk7bdj33sfN1uKVU4LBoMuNMPGDk11CFrSUHGihEp1db1HjPifhdNuSqufWYm9",
  "key10": "3niSZD1W39RuLYY7Qearzm7WRA2ZaTA8rEXUMM33hrmKuFNFdpwLTx9TH86NyDP62123mfVXpsobsBYXAtByVAuT",
  "key11": "3V7dA6TYyJZiCTDfGVGUDQcepLkk84WFt3N2WERKkTrR2LY9rMeeSNsQx1A1qHqrjoPQpD8XhYZ25GnxmT2Z6HV2",
  "key12": "2166b2xeryj1vkzXkgc59yMcTyGjcs14F7fksUUMwT8kwqLf7sknmz4Zr5MdUVNmjmouBpEBMnuQNHRDpbjYidi9",
  "key13": "2o3JoDabbDFeeSeqGYzTpzEHS6miGSqAMzPup996fWHUXJqhpF8cHQvdbjrAJLM3wzhwyaAtTZxd7ifL5hTJbtGF",
  "key14": "i493Rx7m6UqujrbV6R1Va8nZ5fk5jwyvpa8AahcwxthEQApk77Ecqb6EHFYbpw9RndnkZGyrqChEGQbuYM6j4Qa",
  "key15": "5azNe8RsmuwQELd3tqbHmZf7ucmryeniCXVaeuvdRGKYoT439EukEiBTJGXnHmN2SnsN2SpZFa8x79kJtm7FngbM",
  "key16": "3suZNHekYsThaUieGCf3ArkeryLZpUQSMLoXLVSUHXQAesE1T5347k8Q13cY485ZgFMhqvGZ4dNcvg2793ak35s",
  "key17": "9tg8pmvNTdxDKrK8Hde9AgUtDktAQT2X6VBeCgCwgiypD5VAdYURHigY6xx9eBZLbbaXD5pQntNocwknVJjk4nV",
  "key18": "5Nwfc79TsWicoZQZgbdhtE9ZMh6vL7G3ZJsdGCRCfNMw7NzoCdUD6dERPEzAYEX2ByJJ1u4quE195WoFPBKfwCD",
  "key19": "2zG7BApTLgaw3mTe4MZePDJDC3AFWkBA1mqXRDLzSXu9rX7uad38hC4VkMgmxuS46dVfDquYkTuidMK51uzWTkBz",
  "key20": "ZLiH4X6xtBEJ2rQWjyaPCkG8xVK75Xrd23LuZ1AZzDQm9AEDUKzsengyap6BBNgVLBHVpXeq3SYz1qZ652S9bnX",
  "key21": "3qBQWBZDxNbXi5oK1BJkyYZnChGUZT6rjMyGsGTVXeiMpVxadoxngHQKVEn83487K6iwcCokZdBkv8CH8ofBM7fW",
  "key22": "2e1hhTx1zp7ud5an4PBZpPnU69BzuTmAQmRep92qgo3cs9eZvpC1oBCUsud7GT33pceGjhuxLuoEQTbdD6spcbJA",
  "key23": "2rFRVAYByxx5yJkwnDZn9rMGZKkjnCCLDx61Kg4RUx1qWygHy9HRDHWfFZd2aVM5Ku8tQYm28Qc6rpcbdkyrKN4f",
  "key24": "59an17PK6LdpZqsqmcTNbYRjRJYSBMh7nLjad18GM1HEaUiaBuVxXC8wR9csrm8TDTEYxQEjW4CbgdHptBmegax1",
  "key25": "57PNXULMPvpUMeWmjPeibMLScGFgySouqXBR4cfXeAJcbEtNfwt2Ram1LVhbuGGjnrxkXRxiog4AzTKDGKStd1Qw",
  "key26": "2pz3v2KEGNWiL6JMMtSd1XtPWJNXMAXetaCKfGAcRvRf9XDeHRknSULaMuo6q7WQ7VJp3pJCSDwyQAKk4Kpo7qXr",
  "key27": "4xhNMzRAhLRLqJMxQ4tMNDtoXDkUxSMszj1FpbjkxJEA4d35CGMrF1EgP8qvqpynKZ7ct9Wsp6X1NARV91GLnQoU",
  "key28": "2pEpKamCMVppWnoff7xMrNbfVCqfmDh5zfFFrRYrVHm6SbcCNEtMdbW3Sb9jGLp7grkRU697vEXRoqfdQK7hMhGq",
  "key29": "4jm1CM8Q3w3CJsVoE9v2vtkCNxkUK4dTFc7YynKEPWcapGxeX8Q8WRU2kaVo1TDrLUxnZuUynX9kDXjmCMiRJrSG",
  "key30": "3M4nVGfWpCR4J2n8kMPjsv2vfpSxNFHjP8GYZzNceZQWDAGE5fMthb5VLzQtHndggL7D4DDgaDnL8CCZtPZ5YNp1",
  "key31": "2aCpPSbn69DXT4nex62ZTNhMzghxwmo7XkgZwGrBKbSH2NDzktL9zHS4NxhtD4Ndh79n4DBb1pEYotRrdnRLQ3ZV",
  "key32": "5Sq3vbTzVPnXmHQdzqHrxLmBK4sPCcuwwvj5b5XvSjTq2Mw76it9hs3b3qZBmhkw5ZHyQwkpN5KQ6EXm9CQpV3dC",
  "key33": "ryGQHuyHw5emrVCgNN4U3uJojvwky3cYXgPEKPyo4qHJEvLqNQmahwA8hX5ME7KZJt7r7od76APv1HwVtwjf4T6",
  "key34": "2zY7c15ZMF95Ni3VqVp8nfR96iNk4tj7TVYt3AjoNTKbLyE5DuYLwGxMnBFgGVjGPSxsYE7CysLX1YRuCGysTTqT"
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
