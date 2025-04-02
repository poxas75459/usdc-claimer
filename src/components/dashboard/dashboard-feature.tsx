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
    "A1qcTf54N4r5L2XjHNQ5unSX415McztUxrzpECBrQ2kgH9LkCzYxTV1UKed9xrYutYEoM9B8oyJZQFmGfyZ59ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQXfz8WmMhPNRbtD3XGTWWPv1VhcraYrfpAjDEWYoKJ2grFcwaX4rs8AANs4CzvYcQ1kte6oKbsCdcZPVAHnXBf",
  "key1": "4vsFAa225Hdnq4AeBETeVG7WSxrAvCsGhS1MpnU1xYbdde5TLiasjVN2EMMrot7txAKxgZyatTB1YPVjjDQQBwZH",
  "key2": "3eHyKzfA6r3wcH8UEC9NhSEPX7zrvCeKzTBWPPqiW6UaU3QgN6sjGCLfaXsfaR8WSAUXx2r9vFMCimcdSt4dyGhC",
  "key3": "5Dxow9gbgsQoVcw3u5qt8hvGjLqVgEEwiv7PcBnmurMxFk4RMZkJD51vdKaU6SzULQBxivEkSRZ7Q2B5kzPycXzb",
  "key4": "4TMeiCG9CbZ3cMKUJtG6ZomiRyPHKon31yUt3uJaVSt4xNBjMb4ExGzAZQBFiMHBovXzU7Jb5vQUFoiBX57NHaxN",
  "key5": "5D9WJDc7jHk522naP3wNCcMCJBy5pEuqTVvFMSnnHCKLWv5Bkqqoau2RNKeb7pvqvrQ7quSoCgtC1E95Qifki83b",
  "key6": "CeqxhuHsPk179sAwQ3AmiBaSif1WdEYQsWDvwAeeaFGPMkFGhZ16tzpBkhXjFadWqPyQwTPHaXXBkeKSvurwtoz",
  "key7": "2B5xB9C4PAECUmySGTeoZgympnfHvQfr1Gq2N4vsxyQBTQgah9P8CgXSEcKtttiSgAm1zjPMDZ1NcGrnyiwWFEf3",
  "key8": "3QFKZTaB3hsoHwM2sh1T5Jb4BQzTBfh7sgi87c3D1wxFm6g6pVjhQPxYBXVi6YCPtsQTo8mFvPGEnCjh292DzbXo",
  "key9": "2wgP488ark3JbVUV31NECLmv59nK9k7c1BE11RTFR9VCXxmFq2VXbf8tB6HnLPPGX7ZGT6Lnr1cvrxdjE9RV9YJd",
  "key10": "265nZrC75B8b8JtpnDvyPMC5mXR5avm4XasGuVUM1LvnBApYSaGueDKEZprk1WGLU9RrWzc7jLgA7WQMzKFAF21V",
  "key11": "5o1oXiP3xWtQitt5Cmom8qpoes1RVgdePqb1nXVGsbWAiEVfLbybviiyBjxfavwvZTVnif4WBotKv8ASnbWFC9Xu",
  "key12": "4xashkt3WTW3t392f8gpJ8wnWCz5E5L8KuP3YdoVPn8KtqBg3zQchR4gEPys83145T3iE61Bqc6Q24nhZKsphc9Y",
  "key13": "2iE6Min99kAh3cMHmQmEjUHULN55MK7p89EaeZawrkurJiD8JXK5FZQ3nR6rbYv81jbpVb1hjfsinxK6SLx9rFR4",
  "key14": "2pQorTxwkaZr9d2jbARTJvnXJ1xBdzkA2FGRhedCmLFbtuxVkFQFQYgxP6cNgT7tzT3RFMTJxNQBdHLvbAyvz7qf",
  "key15": "2R8J1jcGGScooBqR3m1L6D9gFzhDyTtgY2kjCGjPPfvg41UPvjJEM4uZ6X2UVqcSRhtePBxY3UDuKrudfKyCdDaY",
  "key16": "4ZnZ2L8SmJN3Yrxv3qnT3e2wQMfyDnKQL238QB5e55Gnob1dG5vGbTRPJXu8u1uG5Ew1CEZA91DxeEbm9Dv3TRhN",
  "key17": "2paamZxBKip9PL52qzJzs6bCfMVZz49dryVy1XTCdtcuvqYLJpxTX4a4vREXTEifbKivhYgcUNGswSK3xnneUhXK",
  "key18": "PV7ZANBdY5jjxvnvtvwzWoC7sWAwa2h2uYtFW3DFZTodZPiqJWecuvj1GkL8gwaBvEVJ3d9dcE2jAV5wA4CPKRk",
  "key19": "4GkdhUMuKiBRsx6diuAbXn8CrxSkuM86d5wjoKww2NXUkpo4uqVZSw3ukyZ4GnpTdMFUtVeB8rYX6kNnByXumpCU",
  "key20": "5TNHbtW5uEWmXiH4NT883bDxwN4n3hT8YmGmSt7VVWK3FUn5ASyC4UdrJ5LF9ZDgFdhZGooQB9hAubm2gB5DcYQR",
  "key21": "2V4jrpADDGthHTn8ubLvfoWeE4sqeMNdv5vCKbfkq6PchrUAoy7NZMr5TutVNwRo8CDwvud8qst6aswop4Uc76qg",
  "key22": "3rc1TS5eHw3Az3M8ax3VHvmDXWsopx78YHCcXqsuX88nq9PRrut8HmxSrmFwF3ajBx2ts2hPfX7oUsrFrVLg37qL",
  "key23": "3CDzjpezFgaxFHpupFHFzcT9PX234o1qjBAucoq6dZRnB1PXJVrqGovKzkJpD7Si5bTNZuJJzLbdub8Ci4n2Liwb",
  "key24": "2rZDBaaHbD1kZBx8NPfbhJDLtHz9o41eKHmF1d4dsf3LY5G3aY15TbE4bzhmd1m3oe1J8UsbTKtoMK6frjgtHpys",
  "key25": "2y1vhtCAbMyneQFWK3di4bywoBumrxSdQ4jBw7vxjuUN6EtQb6XU6RdqvT5HCVhAvMoDLG9EQx3mJ52banxgsoHy",
  "key26": "66MHSnz52j82pn8p3kYPiTqQLyXmrHcpmaaoEiUKjYcj8bfZvYx8i95qumuPhzL3yvAcPT5zMUgRYZ4mCVHfgVeu",
  "key27": "FD93FNT4auFM3XNwLn9tJ32ZHSHN2j2uT7tr7giFxCeHsQNuvFhtpTow7GChDak7vdpmVT6mm1AqKmS9j1t2CGn",
  "key28": "51JHka3Rr831bqDEJLvQCFc2y3BgkSouTGU1b8EjX9qDAzqXBzWQMmBz2BF2LGs18uKfYEqLkXZfMDxwHwNuYoAZ",
  "key29": "RCcE6DbRTdNoxK8Z2Fvji27be6P6bSqoD4uZxsmVQ1UhBGu3CvggXf7E43txyMyWjd66ApPFFz8X5jiq2tYhmFq",
  "key30": "4ToMrqpEhjCbUCcJSZmiDf2ZU2YRX3gmSPwfPRKQVGxtT9LVzpqKm7XPnWCUffCh9T6hRSy1ZBakcEC2Vr9JRZTU",
  "key31": "2jHZp8YBjGtqbdTg8xx9JumWvmuXdzeBGUjAj6UGqzf8D5tLK4f3wsj8xJiKdnWbaZSENAUyavspbFL5dwgtHAev",
  "key32": "3s1sjxRhga5KNvmvwbnYiVve7dbfU4UAZzKabEJujSUR9TRDwUh2aijKRiKULzdn8aRaydhQnufrZBh4p1mVhpqH",
  "key33": "53YCJnQv5SDT5bsReKa9yZGAGchAum2KN3bUSVuxSS1tJG96k3Jx8Zn2BH28U5ABGvmDas41Socq5HhzA8sEYBg5",
  "key34": "BVRML25Np2fRy9ifqkJuShrDVVQ7rsDsSb5PwPpzC4fRhoXnUJ1PzDnvNfTFRHpYB3SY2hYVpKZjozKxdYQPoWP",
  "key35": "dQk1evGRZJo8Jm2WneLeQ3i3pcKjcPB3ti32w1cq6tXHZ9XJLfLSp3jxFU9Kzqizc9xB2PPJoKLgznk8dYcCURq",
  "key36": "12D2aRixK3T4o6nWyu4rXqVuvfnNHQQ77vDewJvZMwPQLLAjALYwmJ39Z3yVrwaPakiff9wNSPEVXwfWTYPSRdR",
  "key37": "5LtHYbRc6YxAnCpAnG8ArmdjgTt6Lr9AeWhyK4hBrZBQANgT9RdiNr77o8nYneiFQ8p3icYsasJF6AEKpeZHtKc8",
  "key38": "4GbNYMtoEkaXSjjCoPKngdGgyiBSSGhtAaqdvxHfT2R2cnsv4qWEGVeepEk1LVaUjrpeywXzgJyardKEEtA75D1S",
  "key39": "2bSahxes8JEC12i9CYGJZi7ryiJzhDee2StP2obHfmyfAtTo17u8dCYtbmg1xeVUTzBMy4nHDVmHPxm9YcUqHPKe",
  "key40": "35WucZqdiCS73eQXfN1VSf4jveWwqz7eu24TuZ57Z5NM6LjdkVoCeUgJmWx2pzZaAS74Tjsu9tAzRGjTUepy7E7i",
  "key41": "5hGJgRxhHTgUBFBGHVN3T7hRBtbLMxxd73akCUmGzdK3P6MK8P94zhWXqKbmHEgdnqAApyDQYi9jUjuyYicfmnqA",
  "key42": "6788FtYS2rL7rCkzVNAcgA8SeeufRKZA9n6cz6oBxq5aoG4rCeemobLP1AEVzoeuzoM7WaU6RXyxX2YAWmwaBkrg",
  "key43": "4g9Un5EpX2GJhWv7UM6hQg9vGUmj5eYydJSK7UhrDihiHZbPMZcUYuQjGAduGnw4EqQpD7eDdehKVtejfz6aCqrQ",
  "key44": "6KHbnR2TkL1n9gb3UnCrabLV94mNB6UVtXJZC714bBMRZVg5kSEWcEZ3RWAJL5Ndr2XoTpbJ7YA1vSqYjyQXF9n",
  "key45": "3mCjji5kZVzLgKvochAnDRvYXLbcoacUS2fjc6YCfFnMBXUYsyiAC3Bed4MN7EmMj8AVm4gWiu1AJGC3jLsRXBBu"
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
