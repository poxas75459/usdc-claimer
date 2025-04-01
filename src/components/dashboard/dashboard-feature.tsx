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
    "nia6dRHTe7FcxGNQnmZk8Lhi4opURypABuQwX9spMPYuX9nizBK6rCL6M23BxSzdfpA9EzF9L8aUtTtLFP3yaWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KeoWSdP6y5Lo9CRjrXCvgraBfJ8iPwnF8Ukj41CVtnGXrfDrKQ3m79JwuVt9gtWq5bSa7iLFsUBbePncGL3HP3n",
  "key1": "4NibYt47sexS2ViYg589d58uRXQhrFSZbUafAm8FJyRomYEnqLXEnVYrdBMcYd6DnYfxXmvyZhdMrfmDE3A27qRh",
  "key2": "JDfeHqKNGNW7BX5Er8Nbmjng96MF5aL59GnZxECEfyNNFjM8ippfWh2VQ1WPALq7aqTEkxd9K3sFrkw2qqLbxL6",
  "key3": "5ExLopGqhDEuv13CCVdZVJrH4qpyLer9KWxRAS5tJvkHfeLw8w5YXo9vocQckmLYU7nR3iDJX3bfuZg7coeBcGHz",
  "key4": "5zggBpNs154aHi55qHp7TRvo8Ym1pq3vetapaHCdc1QrK2ej5f4gRkY7FKATXs6RR4gNBA2NWvqW6HhokDyxA4NM",
  "key5": "2AJnbXPC218uMKRhZPeJSw9Z2NEToEfV2PFpEbW3GkNpJH4MuG3S1FThCksu5NUkGqxNpxAX62oubHBKVu3Gm9Vv",
  "key6": "Y5NrDbsECqNzS8a2LAnon8bPsTmF7zLbgykkjBpwK1XZwhHY6CXEDX3JZjCR4DaV3FhkHHDLBY1E3yunWyGu3x6",
  "key7": "5oZiEnZn2oWniJM96PtDkTcafKijNQ6RE8EdZWZapFDz6F2u3hadw4vtUKLDzpA2Uc4gpiWiq4JFJ71WrdX55BgZ",
  "key8": "31nNDdsMkh9BCe5XFJU4UYMJhiCN8L1AgTFNAvEjKWabZA98iHGW4oJ3A28SRrFtTyuTARVicufVAED4zpGTvhhQ",
  "key9": "23GyTUCPZhVp8ghzsA3QVk7yJy4epMsUDEmGwxMDXxkCoqwnedy6yLF2idJwJPAZgTVJkTj6j9DWjoHPfFfmTZT7",
  "key10": "3bU5gSHTyyaAgoYoBgHh6EDe9pqYo7EqEbUJKVUrHmzGBdNc9D6X4252ckqc61STF39eXQnupQtNtzAfksZdnEFt",
  "key11": "2AJimFygfCVeKSzsKRXzpKHmA15NVe4vQMuEVZu4R5oP6izx7L84jotL84osTrsddLgSs6nrw8bwxa4aezVYa3Rz",
  "key12": "3NhWN2PjHckNFLFTKZhgoaAA7esrXLp9pELbjwsJaYggr8zxXuVq3PBi94L9BVSn2MFsELmUhVhPZuQLKTiJiDJD",
  "key13": "2mjiGVH8rSWRPTQvJuMSE6KgcWB6Viee4NWLeHAjRrRyAgn6Dt4XS9CqAngsEmiYosdMRK9N1qXopRNRExgGqKXn",
  "key14": "5TJC972RNZqUJQYPxupruQKAmy1rPS9eM3C1RgGhbWRuDDuJqoQk2aBDvDtXEZJb1KZUG327JK779TonWQmNRLCA",
  "key15": "5AD5K7xG3kjCSVA2hpPuuu2nCkp5173bSsK7PpkZtCF6YSBY4sSs4zaprxVLFXSUxgE6BSg9ECVEqTJcf4GRVDwE",
  "key16": "fogBtMTGM8ahu2akqVfsVe7pWSKRN7bTFq8gf2ueJtB9UzdVW2YLv4ABJx5QXrKUMqz5kqyitrMkfMVtb7pXC7H",
  "key17": "2AU2Rx9LJuUw9STiyfReuQgvnAF3JubVi3scpcVrjqV5EsP5AvJRskPirMn75599Vqunpwm3YY7praampbFNzgn",
  "key18": "35SgyTUKvQEdhMyzFe34hbq6JpUpnKaPPzYx8jaGySCVTo6NGQ6jeBhmPP56ecHNUXSRrVykx9y3Y2yh9fr1LzJs",
  "key19": "5ftG5owAtapbD2jW3AsELS1c6rJ4z7xRjGv3rDPdwrJ5y2ZQGpRnFRNPbEFEYqbBypQYx3tcDm7cg1YnAoRuqFRz",
  "key20": "vQShHPftb2c5abheV9BjWkPspisBX162s2Yo9MZaBTXB9RiqTkY6GVbmTJiecUANATPmgHSiiHq7AxVYYb3vMP8",
  "key21": "5ukHK1pkdynSusEWiZwMsjzZuvmrUHDgTVTDt6reymw8C1eVJ224WM12ixmTz5PqVkeoZo5Wo9mrDck8Zx4u9B6t",
  "key22": "RSeRpdkXztRZs6DvBtjQ5ZKx7MtHuLdZv8ETSY9nxa9N5aVguG9zvpq4cNgH7r63DrUw4pWocD9ZQbGUUjkndra",
  "key23": "4XMiCteCcdmVEao8kUmyaDMUi97cy2uvKsdzjqmuWyZ9GzC3yGp236Z2idGCtbdhWxzZW3pR9jMAF4YhQucXpYti",
  "key24": "3DGdTh1iSRuQbuUP4XnVC3tTvRh42bgKDw5gzQbC9PyVzhCFKBTKMd2ipZ2xuRHr5LA3wBRUrw7kx1KQ4dV2c6ef",
  "key25": "63ax5e5h1DuMu6sfDudKEYo9DhPHzs9QQ4wNFEQbP3KWTYwtEF5KfuoP16kVHnMuuVwaKqeyNu1SqfzSdYgLhZGw",
  "key26": "26io1jnb3KznjddJnKQSYdLARjSFSmxgNSigN2cc2nFPPt5ARJs7iiJa6jZEgxWxCGkQUhToTZPindydBcLZXYVp",
  "key27": "3mbk3T2W7b3gJ53VwU2Yuj7HLMtVhQTRMA827HEUW8VAqxoKZzjoEAfWgHX6u5QtgtpR7PP1jAihaKnYLat9pJkG",
  "key28": "2EeWW6mMA2eL4EioeoYSVA69onr31Dy5HYV7qbwfrCk5xrwR4Gw6RqJmag5HzQZy14ugmHruTsKTSmnewwwtEFZT",
  "key29": "2UJ6816CzMiR4baUuBnfnfzgE9q18w2UqswNZ8D9iN1sXTrxNvekXKRqs9jdCtAfXryCBqZkWMGnfuxqyZ1Aq3HR",
  "key30": "fhW3PfgNsrM6aX3fiRkPBc1vmuGKD5MfG4HLtfxxQnWGXNWeo1ntaTiVtHp3m3BdGBoTZjnvsx98GvgCm8FDoqb",
  "key31": "3z1NEjCMKEModATDw3bqSr61ekzQN2y47y9P5gA7rTwFtaLMEfUCDHgiDXuizVqkc5SNsvJfSBozytHSwZumKiZq",
  "key32": "3rKbJXLtcmiovLhmKXGzc4B87XhgwN2UMr1JNJBjv3K3bCjfFtYqKiFYpUbkcWkkj4fPj79qWjjmuo8Ck5dJaVep",
  "key33": "4WdLBaJp3M9fs3HQivi2cRXujtExofRZPyNdpQMZ7aMkW4ay96aM78vke4c915aqjuAmGPmdNTRy85jEmTWJwDKG",
  "key34": "QCiYiq6jJtm3biLNViMSfT196RSHdYtW7dw63kHcERcNifBfrXPpcBpMGkNtzvVnfvracEEwqq2zkJ1TPUNh17u",
  "key35": "2brVxawC8YLyMfJtUBE4juWZWyFcAYuJPnhwiXyy2juwGDKE64ZyQo1rtJ7vDmjAGCaDkP7evzknUuwoUWGdhCxF",
  "key36": "245ReHRzfvkZp1TMHpn9FbCvyFkCgy8p2NYmvBv6ThpPNtrShvV3nveZunC8NTSL3rnoausvBVrrreXytQkMpcBM",
  "key37": "2vCYHWSnXFCfgeB3dCRke9i8Zc9Q2itx5PdALxoDuCDbKb7bvDezpzZ9hA6jRDg2MbvmmP9qPkaZZbnhEC5nxeAD",
  "key38": "4bGGhB9X7HsfpGoAJyFQHvXam1vLYQqEqZ1zy1AgGeGMHpiU53kcug8qmV66qDY4MavHyTzTRpLfwtgF126fWD3p",
  "key39": "39fFWRM3ypGv5Dv1Mc3qBKkc2d8iGjZbkudHfrGuUJoXrrvz4gKojDqYhXZ28SU4gSf5Z9bW6tGPHyFxdWqNUv3X",
  "key40": "5a2QiSwhjZRcgXXavWFBaZKKMTABPkSgmrZqCUwKwfKbGdkn2KY6DeeZCPL3Z3eiBwfYnnVgSNMDkuxtRkkB4nyW"
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
