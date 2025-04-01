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
    "32D4N2cWe3qD1187EtLVZEs5X8yiavurKwG4vjyF7naE8nKK8vjbp5fsrEPKrbxZ9te4TaqnxHAjVD8NGr1zXago"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63az9aVoEqfwbrmKCDWZnAZ7hoj2HrCodzDkMjWhUJ139iMrRfS8ozCbg3GSBnFijZHPcH2wUpSqLYZJq5cDAWHw",
  "key1": "4q2owpdYByetmVU6MmDuEbudrJwHF5DKiQeyh47fe9uPZdubskFVK4mPbt2jhNf2owrZd4pEoQpLoGqREsd1wJRk",
  "key2": "2f9ECxUJehj4rmXui89sUDjxnjbTFHQkYj18ZwY9zDsPzKwDJD1AAsvkNpVrW7D3oVQsnVngMvjN1rQZCR8DaiUz",
  "key3": "2ddaeRfr7yM9vqq4xz8JBFWD7dUpyJKVKg8tmM1hcnWGpa7yLMHDpwX7XUSJEFcTzP1VBBK2WmVYhaBkV1Nspn3e",
  "key4": "3mAyHXgxQGRzMaYKZTRaRQC82B2i7PhNaytDjQm2XtCiuvC1e4oTu2bFFAepNd4c2gEeTMdx69stNWoJGbCxhjhZ",
  "key5": "57ekoc4QscTAsKBoLPCxkFoYMuATeSCW6kWvEhHRSh7doDMDNLsrzks2XCcieoTuMV9vrsPME9vpASNowjx4NKug",
  "key6": "uBqav5E2HpHveUhHemhpsHZAAY8z5KrNLK2ttJc55HE1jF1BSCtgBQEWJeHpT1mvmeuVdsfCRn1hbhMPUQVNCqH",
  "key7": "31i391Crm3r58ZG36PS5Brs81ZtBZjN57hgv8wgmKSLYSnFm9FWMA3ejy5McLpJtMCZhFAKa3cQeyAXY5pJLq4rs",
  "key8": "4ho7inzCHGiTo1v9AkewJWXkuXR8HvwC2mqVeVbhDVHjT1K6hg1Aix7KtC2y6GEAyssPcK3ZJ42kdu6vSsXN6ZAD",
  "key9": "3HojEBJNzPGUM8EjNbZmvYNCZ6VUDrYADgJjJgX8DMfHp2rj7jjMELnx9xkvuDhPPSvFNaDbmQSzvC3SHbcSJE6H",
  "key10": "54Z3veBTCvQehGVGv2RyNg3mACLNL4Hw9nbmPCsvWJksooj6D9XqSYf2HzpNF7BXdAeWrHcxcuuKPkZZNb7LsQvr",
  "key11": "pb3mVtecRRHTZhqEBP7oK9KQW6XnkRVvr7Fex7WuBCo4xt5qcu2eiTE2ZyJD9ZwswF1vvBZM8FGNxKW52bSKceU",
  "key12": "41ebvb64VbbHLE5v5GNcFxovvGHzBAuVMZZZafgjmtTSDywgK7jksJYh5z2H2d7UbAi4WhxiaFjLRLrdrko9WJPP",
  "key13": "458CgcJVaZM5QtzaCn9ke1EEiR2Ckp2kkosFk8yU1jVZdiot5jpjSh3ukWLwN19eJ5KQjLJ8CgAChQ3GKtvDJADn",
  "key14": "3TsuDLq4VvougxRFojzfEkUBpjfiHJRxTySLaepeKyLrq1A69P6hwCZJ1oNNv5etqDNoM2Z1kn2RchZnKaBP7RFF",
  "key15": "2fiqMP2DmJ83GWuKMTzFaszd4KEWXV3GTRyECzsm7qDouFE81VapbPZUQvPHwUFmrdKMAR75XsAnuz4Gnz8g8uiv",
  "key16": "5UjvcEK62WwNP57mJie5Euu1EhsweDGEBCgk9UDnJk2tZqpKyjyWqk9KoUiFsEXD4nd9K4SAPnhKjJDhENBPbaSq",
  "key17": "2CuJpr5kQXmNgScJSf6R5ocyLMKfyyovbtcym7g7uokfDPvpTeK4hYXcDfPU6BDWfvcV56bJhFhVvz8HSJX1z7hW",
  "key18": "3QnSNX518uzZ1ck1fCtFaBY9rHJ5gEiogRdVydnkYg2T2c8Cx2BQ6tfWgMqkd9cLTGA6Fy6DrnD3rXzN27nhjUNj",
  "key19": "2xuqaWXbSkNmpAXEY5y39AmaQPcKAP2pyVpyaEFLUuYFPDQ3HvM2BJPLGuAF1mpi2AsGgA7jGR4EL3YfHAwmbezX",
  "key20": "4WM4dpezuAQJvoNmKJY9oNYqt3ccossRafqAAbWYQwMUF2VeZrRV19xyJKp3XoJ2Kp6bvb6ggu5HW235o98Fq7nP",
  "key21": "2y13hvSzwJpYaDgpaAmh8Wim4rmgWRNV7hGtYy57HaBhU7aSbkJsPTFFc7iDwKrpsc4MeYZHHj1An4Edz9TJqv9G",
  "key22": "Nn1js8YFW98jy9pWgYVJNFnQLNL3oYJkmxqbVWrS7dwBCK2BskoL3zw6qEy8yPv5d9ahnDE2dDo97Z1EiBs1bsn",
  "key23": "3C2ihsXi4uxf3PfJ8PpScK9KyZ9QeZSNDjdaLgBQREFZDHe8pKn8ehstp5RJ1NajZFQhtEvUCRiXBJiwz9DWsF46",
  "key24": "3BLBpm1jq7WX5g1SLuunTBeNHw2xCt1VhNi3WkdM2Q6iDkdYpopVWeLLqzKfva3Uc85Qa1hVwxQUGdKGfZzrsUDj",
  "key25": "4GSaw5PhLiZ4dVDWLTzi3mdJtcBNWKTFCetG3AHXpdwX26F4PdqB2KyV6kJfcHBS76A9eMML8uwFTorhrBcHXcs9",
  "key26": "3rLjSHMHbt34vgodSGf123wqcf4g6RGihb5UJ3aJURoJmZ4XAZir1FT815CCViL4dKPFmTJhQ328izJ2Q3uw6SCR",
  "key27": "5qt668SzFpCnwqJ8vxWkzMTtWquHaiUm1iVMPJGGKcNPB19La4Ld8Fv2SYV485cm85E8kWx5tjRoLUZxY86XMVNC",
  "key28": "6461mMiJFPdZ1LoZbr4HEr7u1YuvPU12poQU8Vsjb1bYrN1pYznigvKhGaSUZWFhJmKFr4sK1bFE2wPR5AzeozzS",
  "key29": "4Xnc97Qg5yqKiYwMNr8F2EeLyUSdKtzgtFZ9tMiDRp4jAL6B8QUxmPV6wGNmQ4RcRBQTiE2Vn3kngP8E1L9T4rTD",
  "key30": "uY8kPWQra48qZEroEr1RkGAKnLdXFutsR62bysjhSBrX4w32G3PBZu86tN2GK3VHeahRrqHLv1dub69cAEj2Cpa",
  "key31": "2kqxtsSvnuAjY1xJgzdC4eNXwtZGJqTEKz7uNdHQGbrxJuUwgSWcdCZM3dfocbixYwkpv2tTzWTjMhHts71fVzWE",
  "key32": "5AuT8pa8n3r7LkBAn4czBDnThgm8DzGnwHvCSm2fD6tEP8SEvnucrHRyMFULP5WZyKPoUuC97iFb482R1t9KsE3u",
  "key33": "2VM1BAA2NxRfvGYJE3ABrXFFdhiXgtZtmmttmsxd1Fzc9QxWw6t5FPbQ6hbGdj6f3UhdtpY5ekq83SLeb7b2Krpn",
  "key34": "4mhg5GLrAJDuCnsEVNc5zTDqfv79HFw5KaBtqLncMMsY2mXx9fCo4v2ZVyHt4csTVsisiUnNMsRcwyWiwSMjJQHU",
  "key35": "6LLS4oQFF8U3WjfD5qWzgZZMkEBYnY4Uf4vFxFt3Bd2Dwt6qHcMBhh7Br6msw3iu51uHZCcw9q95iCLW2jVLppn",
  "key36": "4ESMFUypTb4f53cK98m7SQjfujvcTEKap17UNsKSmvZjCcEvsBVWsjoWQk1caL8BEene5BRH3qoMUeoh3kwpLffW",
  "key37": "37JZxJQYGbXANwk2KAwRTCXBchamh6jiFbMgrkyoSfz934cZJEYaAtGp827FqSroKCjRz7ytaQHDVa9Ma3LKjwLL",
  "key38": "4qNXeyedLia8dMPKq3hrVMgq4zbyMqRpVRj4BKWwrBsfvYsKjZXgoVKK1SQCGe938pzHDpDJ6tYFESCcueChyQxt",
  "key39": "3yF655oKf8m1Pj6URPJZcp2FxfppUuVmnLcZ3YzRnv249jMr2qVQE87iPJVhjBY9G2WzNEhdN28UdcfZ4nN5wktn",
  "key40": "qzneCiqytQ7QeowLqvv4fhvm7DZbSKoQecKQryNmELfm3rbtHUdUV48AeSuhhBFGk2BnZHG3jp22JCs23Yfy7QS",
  "key41": "255MFAVamMxgGn71Cx8D7JGZu8T4fDTyR73Kuo66ruQpyZhBzK8XCyAfnxT1g66rzYB5XXUAxHk3HHYy4hgo6F9p"
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
