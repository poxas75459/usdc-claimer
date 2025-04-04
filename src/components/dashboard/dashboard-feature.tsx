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
    "4v6c2dxVsNAQvENxECyecN2gxpe8osC5jJnJdCGuu6CBs1FBb3zZx6QWDj2usDZuqbDraLyVbXbRZmKpbRmiW2Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3XgDAt9CyHCfMmZeKH7wMvZcjoea3YA8nZZNjXEGCF5qT1ceVByXirSVFomtBsY9yoYxtDay1hj1RCP9jU8195",
  "key1": "3v25PJvFZ8ALYx1cgScYVnEiq5h8Rz4ePjUbrTgiepddEdKjF1HiRH6dRfsvA8NnLwMwcgvaLjWr7WbRLB5NPHjs",
  "key2": "5CtGGkJXRJGY4kfDrvikskk5ntz8kkcxszUnRoRDxzDS5PZwjydGKX8bezfdcJGdAnb2z792nXGTEpc893tyTXe4",
  "key3": "5PZDAZ5K1rKcxfKYAALnVihCjEeggdcwPMyy1XMgStiLUxy98djEEjGSNs2A6NyHtn9nC99oiYRAZZ8j6eFV5eX1",
  "key4": "36V9XczHx9qCBptMmjMrjNML9rbmYAgjHAiRcCFLBVYeTUiPqj95Fmu8CS9PiAoqfYDUyriTu5XV113WDZ51AVRX",
  "key5": "2g9GLqV58XDdu5Ajb1awncxbPUTG9SD8b6a4sXbHMRdwXUhmxCbU87mC4B1Thsgy36yrtANNyRds2Fqp7XQhtp4",
  "key6": "5G93uX52kucScsre2g9ahX82PprPDi297Q1R1Axsj6JDVACKNYv71xoo8MTTdqg44tvjFkCKSARocTJJ77qTnzAA",
  "key7": "4N9wYZzp4aLN7ZjBLw52bo7WhjUL4yzFffFC5sKPSuQqWBEMLfSSiRXASNBGstsp9k3WNdxSwiTeu5A8Pcky4v87",
  "key8": "4G1aiN5xaefiFnazYzdJzrhSEYN6yx9qq3GDCRxXNLMMoyYZ9SCAg5MzwfTvXr2iPDxqrHmti4nrqYzGzwFKLLwF",
  "key9": "2p2oRH9xqPHuHEQ2FhzrGRvV2mAtB2gwyGKM5VBUT8nHPvASZDyKa3rUoyfx1TauttSuDpVguDdz8oeF2jU5Qp7j",
  "key10": "5xwYPbd2z3RDuWi9jRfpiqNHTwrqrHq7dd9z8N2aDpALcn61drVNu5YbTfoA3SYvKnenokvpewx8HbDggFFj1Gcz",
  "key11": "rSitLdBhuKndxTYV2paHq4MFwn2DMsck5E5nKmS1EEfqwBW1sk6bJB3huywRoXYr58jxUHuAAmxdbDbMV2NKuie",
  "key12": "41L9Vcj6mEAvAEr6Qw2UeH7WjkgNJEkopobFp5roKFxLRtne3RLq7seseRsRQMRNpiadhAigXx4iDSzm85gjVSqE",
  "key13": "2Ev4LD2QLvW4VH5xvyzemcx8NkxPjNQT8YNTu9eBPfocq8P1zJDmUATKq58NqxeUjeGELLvfdqd3Pem9ME6nTJgX",
  "key14": "2YHUtkXUX3iYJxwxnPAXiZ3SHqCYLuMCx6f3ZS3HzkT7izWPF4AnUBdeZoT8tzK8hX7C7gWgMWVVREDs4oxYWvTJ",
  "key15": "dVwAgGd9U1ojLxdEPaR9vgJxk7jzQbHrAqvp4wK6Fud5NZNzjEVV95eX5X5WegALocYqNmkwS1zWA6XyoeuQYw6",
  "key16": "67FeVPEZwF3t1pKuKzWLGFy7dHFnexuWrqAwSKoiD7TzhdbjGPqCGGdBtDNTUsiHT5E9PyHZyukqy2wbK2zPvYza",
  "key17": "qpsJhMxyEPvHLpDU2VPkQRxpiP5jxEC2aq5CRHwepPBUZfYzfAKfuzdNugfiQE1r2hPuUp7XmAjQRMxytrcaYYg",
  "key18": "3f88bdbFJzXHMRRypHFTJNHfuMpHmYgD1ShjE1LdJaKSZPA2boKMMyufBkTyLvpauyFUysF13hW4efH8Zbz4XKT1",
  "key19": "66mhcSfcfaLUWgHZrwiWXy1id3jphFzgqQCHNzmastcNoGL6kjzmrTqBpJ2sxjzg5usDFgB2fGxNxHC5Ds6sUVYP",
  "key20": "2xCnKThB9RaG46M4FumT78Pubmdb3JJJeHYh5cvTKb9tVC9CJM2kVQ8wV18wYYf7daFGDVHo8LNm4Y1y99AwdKU",
  "key21": "Lbnq6ve3ggeZzLbq5dRCTU5TubZD3Q5s7o7mUosCnMQ4zKy7dqHiv49MFCGacTeDsQ6KzVFBSNvkc48NAP989YT",
  "key22": "4pirhgkAwZRC8PD1xoJGjqHiR5XwfE6E5e49goiqBgB3SyH7v7ndhJiy5NUjPiTqoXztdSSo4UdGm3Gx5jhK4qV2",
  "key23": "4AQntAY3EFBpRJqNmFwVEP8zwsaDFXFmiMCp6paiaAVseEuNq4VuKr8rb4cx3eMNE9KBhWBu74KL8SJ9GDm7a9cj",
  "key24": "2RzPKyzQiQfjUpJNGkfQxX5vupJ4fEdwywJPvm6engVrZ3JFfRiRmMEXpBXMxxyU71cidnaLs6FoCBTYKqZTnKQ5",
  "key25": "2L6tf5x5BaMy8WFugyanTELaTQkhFHbN6N8SorfnkT6n2idgWvqe8JTjtGgyYRNsqFbG54ZMRCxwkCb5nHScVasa",
  "key26": "2eKW2Z7yXUu1tkyZRfYs3DqFgez9GW7mCQHQQxjgi3xnrBAtVaVwgtmiwWvXh5yQC6GdmJQRzD83AsmZ2N1fFtXH",
  "key27": "5nx5NUDXraQyk1oFKC4jf3yLc7wp4XEvRn1hUZ8mRmziqr6VEKhoLu6pkv6mJmnNvDH8hH5CEjLCz6oMtzNHEFVC",
  "key28": "3n49cji2rVFKpbRqb4m4cYdBX4MnjooTycSP13wUtpRw8tQa6ZprwzprTg2vpbRTHXLPb1rEwZGzEFMTa2bJA1Az",
  "key29": "3tAH1boDr7Lm1q3G1DkMyFnCZ1iJA9asKTWv2sc7PUhpYpqoCqjAWvjd6J44xUfta5YK2vwv4khaWeuKdzUmDXnz",
  "key30": "4bnDUTTZroXyNMjmF8FF8eNzHNsR4Qm88qsMFH15pBg6grJY8QqfW82Ze9mzLejVmkSPCkPSyk4C88cdhVNLZYyW",
  "key31": "VN52aD6QBbjASqmfS4WLnPvbGEqEiB7R4m5gEmeXQYcqNuZF3iF2jAaYGMi5PC5gRfnidG97yJvDksVvc1LdWcP",
  "key32": "3cjHYc9KiAtoGgMTGcMRWEZcFy9iX13wDnd7UkAjWt2LiJdARQCZYnjZ8nYV9gY2W94i9utPHfsZQmeF6RDhKw91",
  "key33": "28ZzxdanteQpimwv4fym98YsN2CJ4qUZYsj1nvX6xvmi8JVCCVZR6HezZEG6aTxMMaE5ZNzD4HE3U8CfdFKYzbq2",
  "key34": "2wqu3ydrMRaMG61sQZhp2TzPytrBSHKhdHGa5Ks2vq7B2uS8YMySBUQQPa75TgDMTNBi5d9syvyvs3a3Gn3B5LzS",
  "key35": "5qsK8FcJ3uaAwvAPC6cpmXnjhyjdF5v2hcTBpYJVBo2WTDNVSUqA8qK6J9osEyL3KmBgPWxPfWdJ4LZFfQHT9MHN",
  "key36": "3FijgbR7mSWcRi2N79j9X2dn6dqeBUJZ62otGXofBSqTbrEdrigrENxe4CqjwBpJCiNqmTNSsuA3YaiqgNUXbDge",
  "key37": "3r8h8gY5qKAbxLykqe2iHcn2tVdxe4nkLoDTEDkTfu9fHUiBHMMmKbb1H5j2tucZwCKpwrCvJ9ZLenMh51J2t68H",
  "key38": "5w4a37rQLxXPTd5km1xSLz8U7cAfpKtwRJDmEjmKR8hnULhQHEi3vSGJ2ZSM2tH23BXEK3hFu1NGREUeEeggL6yJ",
  "key39": "5HLKmMrQkZFfeUFVZUrSUk9kqp5VwbB4QGsD65gaGmZjU53VYJejZRVopASfj5WH1EuUgFVWg2BiHbkp4yD3mKEW",
  "key40": "5j5YAwFsw9oVDjpR59GCWJtRVsGzhY8sD5CWFeQzQbDf95rWR7pMaAp5JmuF77KH6tf5nqTukYbVHPHKSQG7frtp",
  "key41": "31jwDLge19GXc4PddrQKRPDf1KgZgTkxZNuPrBQGChAD9dPfrp2FktPCPxU9VKXV5RskyZqPBP7et2wspq1U68yK",
  "key42": "4ugiHrBGXu5jxwRusHRuR8Vr7MzrHrgHX1owULrqHJ4h7oYdV9jo7FFhxGxvdviJKwrgqRxFrkAZf4hss2itKenU",
  "key43": "3jMou3ppfKvFeCeG5Repyq9JJD4fye9eCVPWUAAFFme5ar49rtftH5sT2DdwgJKaVddpRcJ1vcbKFpdbDDmQfKpk"
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
