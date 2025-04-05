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
    "3YNTDBfU1Kp9hvcNrguJLe6EB1LfRB8p4nUqENtxFxCZuhYdr5TaTuR1jXabi4gtF373PZpW4syrSrF9whdfa5eZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFzUbh791y2C44zSpaLpJqdBKeBFUnHokYEoJXUXVLnGunr2SDE3N4HWbP1wE3PxzYTDYA4nWCYndse5evnWyyF",
  "key1": "23u26HDeqUMNNCY3q3hYZzq77RGX6E5amhd774EnhWLfsGciS8iHBg3AshEpAFhr7YsuJiMSeWofFXnDwM2WMH33",
  "key2": "3pxM33fZR98BXCsjXbWiiZyQJ3r4sYpYpSAFey4kE7sd1tshrx8vYRCskJDwaRuy7deZi2WT2AQGtFTY6oiDo8Sx",
  "key3": "gwt3SMnRYj9Pj7TecHpctTWBNbDhc4QgZ2NuYcLgh5rbc9orqgyBpa9Mc6DARMRFGyyzwTAfVfCLxUbMfNUzCsT",
  "key4": "4VbDkf2ARxSxb4ceckz8P6GnLQVEXjX5hzNWDKAiypTTRxchTJx4Hqh97XHriWyh14cwmccxRM3sL8Cmujxhhoi6",
  "key5": "38LLf8ZQKQf3bqt8ukWDobHDwPAU4GDFaSkL2hQa8YD2w3uZxwesSgAsvuXmB4A3w9GJrCfvC5cEDKvZQfbHFwQq",
  "key6": "5aRg15b3zbqL863uNFPthGWnyj8S3s8v3yDdwaEjaED8uEFzrF75XniJT3NQysxCsdNmFbeejJVWgpQJDJebq1eN",
  "key7": "31R1M34zMMiFJrMn7eMkKSpVEXnCRLMz79inYzijf4BXwDyLau3UJm9z7PmHAgwQWCVKXJTVpUuonuoAzzckyLdS",
  "key8": "4yxmBTFnGmHyQ4HL2wwN3FiGCz6J84s2zRMXGphzbd5o3sJq1rMuytDMLnu148dG62qHQja9JcKxqqNY1dgpjFKG",
  "key9": "56bRY8SXetd6hpNF5sRisGetApQaXTuZj1fbf8BDpvVrtG34jCzsw7bJQDugDGJsM5vn1H7izgUiYAs6pSUjUiTY",
  "key10": "3VaxTudm2DLMkMVnnaEiV9ZdHsHSBAikp78GcvkVEMvgHnfycGS9PeHSRxDeEE9L8MryFq1tQb5kuffT4G5TNAMc",
  "key11": "B23DCHQfnFayLErYHHyMesEhw6bpyGAs37f21P5zhCauBWW8C73PN3dHLeo9K44SSf63cW8XV6c94A1xwP6pQgS",
  "key12": "QeQL91okmSoTAmvaM5GM5bC88brUfU451iD6zwikeYzptnPXUVPEPMW9V2XaPPqyGdABqU8Y1ZoiHJqKfBuAAvR",
  "key13": "3Xp6nCdk8Q3mUqBdvUrAz9TKbTTD7YEa2RgU5XHuudthJSPVmnFsuwC8aQVeQ3P3YK4FjzAtfJZA9H6aLYZv2mgK",
  "key14": "Z469yESKUgvYgh3NDSN9wuVnwGBULDphWEskS7RX3dRoYSbfQgMAboxGxZrmFdWEUE4cLf7nJy8NcwhZGNvmBMt",
  "key15": "2n2DVKawxzwpDmZBTfQahpjCrAGURCHRUWRbsn61UCQ83mXRCm4LzDkWZ29jb97CGQg2uAHDwyxkYzG8tgqCVur6",
  "key16": "4VUQ9WbCoFti21MeVzCYD7WbrwEr6EfCEQpfeDvPN4QmsLNfmPUj6jW3eTorfsijP7h8f3zCYWJ61UTDeKyAJ2e3",
  "key17": "PFk5nViPLAuSzMHELRZ23EzKUzJ5y2QzNzciEVrW9WGzPr9Yvb7QhQkfm972cHvkQDFeFV7NRtwjD2KRbj5RCYB",
  "key18": "4A9CJd666cA2mzGb52aQJk4mtp9bQQE9vdZ7u5HFw1PcZAz3vm9kXzNVMvxVa5AkTAfGJcu7Uu1E3bvakPvfbyPR",
  "key19": "2w1mjF3kWdFUAuwzT1Vv5tWGQtF5CRQpqWAAPEPPwsQNU1D2NZ12wSSFst5BHbMKFKgswTdkVBbvjU9oK3qTB6ZR",
  "key20": "3Ega9MdhbV1BW8tGeH1LpnRfEWfmDVHHFLqeJk1xnXgU4gecCvjybCjfWTj3BrWeyZi1vogwrQqYpzdJbeB17rzJ",
  "key21": "5G9pjwDkefQA6CfdtvENEf6gzRUNzexLCLSZ7ueJ7KLJpne7ffgUoKAUJc4FH6Ud4KYhrKPF9asM2jVk6qHorFXB",
  "key22": "45SyJyeCUwCbhE3kTvrpYWpheenowJhQsz6J2Z69zPHywX7nxoWNhqpY1DvfeqzrHyLomEGqJyWX5K6mj4wzgzAo",
  "key23": "4JZwiEtRZTindJ1GwA3t48UYTG1VZADtxgA3JRHmYTJ568UscvMo4hjcyMpgirqHrLtHKwNp63oh6abfLXJdXcJo",
  "key24": "5cJ145FdgXGYRrha3NmLJXRTJAFeMVcdT4kv6MRpif3GfLp7TzrCrmHR2SjB1ggrfDS2xXe3szJzu1ZMp3BPBA8M",
  "key25": "2WM5bRA5t4dj8iokjCXfd41YTBoFZ2SCjtUUD5Pbg38zBVB8gTFb9qLr7QYNVUdbJhdD4eWdp23dLxCWxWhW9gyc",
  "key26": "2ohNwrJi419R4qEqy6hvDCiPc2pLEHiPu54LwxtQLeC11wunqVCSDJWAxbxHztJSnp2BFqC68bCokM2L1vS5Mp2o",
  "key27": "3XFok4pmPi5KBAUajoe6cHG5oacoS6R8eF3Jh1U6HYMbMd7duGhGVnFTb6C7rsAvtJmRVNXf3botSdCnqmxUdMir",
  "key28": "4hAvj6dLKBdXuFx7tBRSKuPGm5yiH6eFXYoxuJuNid7rf6qHwcuWbgSR21zChZWbwNyzw3sZLgTSGSaRvqBS1whY",
  "key29": "c5Xv6dC98StRJyQydqXDxM6aummRPFM5B7h5kxDASMdSEVt9paDCpGYUJgpWPRmTQDW94pm7mVUZxEp2qiLbxt8",
  "key30": "2k5mTk4Dz6iQ5Ypum1JxJBoP5VZHnqCZKGv9nccrU6ehpjTFrXqBrNTFS6fD1iP3pmS2cVZzf4eo48Fhbt7WSU5F"
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
