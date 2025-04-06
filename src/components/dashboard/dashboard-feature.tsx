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
    "4gGWzP5RFZEuY9J2Si8bMYaiDY5NAtZ1U4qyCja3iV8KyTnDbyPRQPuY5t2TP9TqhYVXuWn33vM6YaxgbKLC1uWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfrKwAGAP47U76M8ZDrPyC8j2dWa8MzokfEcvKTbWiaAaXQDGuxvudpV4zukCWz63z4BH82AyVtDbm44cWVtzCR",
  "key1": "4zS2fY5D1hySBPyvar4dv2chdDQapgVbQrukaXLUEVzKnBQMfhAw9i7q5byLWtPf25mFWAJ1XqTnHscyqcXonsSt",
  "key2": "58BLwFQ6FxG9BshY9T3WoqyW281GrRFJGmD14mbraciAiknsW6Tqe6JCq6XzzFNoqifwvsmPuPzbdZubaHAkEQv1",
  "key3": "372SU9jZFsZy7W1qGmsSBCjZzmjkEhT3978Rxp4NRgiFfVPNhKHsPKjEm7fvHUUpma7DKH3X18o8RWyhtUP9wt48",
  "key4": "44952ydqNdxJvPf71hroqypZiDBa4p8myhMABbss7pBB2219oiz2wuGUyC6J4Fm5vf7Q6UM1fAptKAwkXW6jaE3B",
  "key5": "32sAsPPg5gaqqZKVJvprhDFsANPEmP1AT7UKMiSRZaKU6bzHmAUx2GcKUZPwnkaRs1uP4cUKYAqKdYecUCoBBeZp",
  "key6": "5Q2sCKkCwVN7NGQ7hwGRe6wi4wsajc9NeRtVLkrpEmAUZqDWZRB7H2oFA6pEaoae3WTZCL5dTVUkRVo1DLvMia2S",
  "key7": "wt7CiSNkpLhUVq9PVLMoWazjsq174MezQNzgKXzgUNLF3jfk2vumjRz1peuMtn4tnLaehiEppMXuQL8tE5879DQ",
  "key8": "5hQtEtkqdZduUZMibRFEJHwhVNDtzqVQUQQWoPnHSHjQMMqT2cfkgwxF4Ru22wBjpjVXucXPvGw6yFCS1SAXufr4",
  "key9": "qZn2ABSS6zNbuM3yLFw8bP4rUNhTdCGWMxj1rhu1KRTF5fSduPAvos7R7XHEfiyBSYLCJ25tNuxKioGLT7K8qAQ",
  "key10": "2U5Aj5PJUndKLyTr22gXrVCu6GEQVthX1axfqyp9YxVtwDRayY4ZaSDFwwwf24jHwYdjMBw3JnaQtnB9Mfb7f6nF",
  "key11": "Lt9xmbJScoTs3KsZuZHcmZXuNaBZX1mtvd7BMJGUL3NMdNKYFwNyxZLqBDs27qe6hxwHor39mQ4rnCMh24TCUPe",
  "key12": "4cnD3RT2QD6qEcoEFRzGXYR7uxC5kpD2QmRpXjQyoQvo9ewxcdUTzb3ih1fGoZyyngbAhWwyiHPqog9QPXx47bNe",
  "key13": "4moSCQZcZw3PvbAZFjySZBX8NjCq3fH6CJhsmEvGqGx55pujnMiWUF4J7zmKUXhc96XU1kSsYzYp1dbNUb53V5SY",
  "key14": "4q8vbU2GmsvqDUpozVVdMLJWEahZai68m6Gp1DcNqDHypRDiseUnUFEf9caYt8tjnxa6SHmdSY7cuhs59RmgqtUB",
  "key15": "3KegaYHttqFZx5mLxMW343fV9Zdvww2qn6YJSEiduaxuuozBfDYoLZoe9jWukVJ6QsdGymVMSiS5w6HAJL5xPBoQ",
  "key16": "66sDN1nEV8yURiH3V3a6rxWisf5f2NEgDFZdfBafVi7P9jeW5SV3D3oDdgV4zHLMFfGZcrqe8h6vp7FFwpe2edWq",
  "key17": "5cJid9fkfFbzJtXGvGQxGKCSm9QKroygZfknnW5KDYJxsrXTj8VDppe2Uew83fLwXkk2RqMNgo8XrQCHi7dvM4Ym",
  "key18": "8cZ8bpNu1Mq3doZmnvvcJUb22rCG416jDFQDecyyYbtqnhQqS4s18BtmZtrftHyjMMqrGqNmJr4SVaGyusMi5ni",
  "key19": "5hThzLruRMQVr48FGVEPGZUm2PdtrxwC7hqwaFYyQiY5ed3GPFJ3enzzasmWENuTco62W99AfuAMtbaktvW3Zwfe",
  "key20": "57qfj2cKJs2AdyieXpwCihLpGZ4MUAE5J82PhqtCECEYkGA2dQX2QDhQBamdV9Tp8xcYEhMx2qbgyw9v2wWiEneT",
  "key21": "3HFrHdfU6taY5gkUABizvmeggMC5SrtFSgP2zNkkUMJ1CD5jKbHYRGGKsBAzrFAZbK4x6kuLGRYRDjWw8fRKK62L",
  "key22": "iejk4RrztxqZQ57dtgki4bob8Z32jURM5W2RLzHHF95zstQRsmRaT25MwjFZneRRR5P1t7WjujVWXoWsJxSMYaG",
  "key23": "5XUmBfxYZxCbmhjUfBAA4cWL4ToJFQeN1UaFSysMuVCeJUvWzm9baKRAfyZ6F16AqCgGdZGrmJtSPJqZfaAmbR4Y",
  "key24": "4tecfNhhpb6wQDqWv3u1mpkz2i4PsYckfGwpb8C5cmcMMbirKYrLosudYvDAAPh87bnh7eZ2wa897Xt1oxBFEyAa",
  "key25": "3iccLsTXeVTNoNcXzSCRTsdor9mP7tAuHB13anuWBzBGMHVScYSF4eonaHpzoLuP6D2yv9v5AFrTnKscXWFzVtGa",
  "key26": "5h9zX96dt8paHig56jnUqkXUui3yfLnci8sFxfboHwAGH6a4JBZEjRfg9mC4ABpLA6peuuG2sWkoi8bfwr5ShTcH",
  "key27": "5ckSNEizeKU9ujD2GcXPshTPPmYcxBVdGSK9reb3gBffSCnUjaYWWrPGHBbspfab1a3hzD8o7WprfEUhEuJe63Ar",
  "key28": "2pxyrbU7RMeGXLv8HjtDogSi3UxR4uoQ8vK3g8tvEBFUM9LGpANZhquoyrdmC9jyYdNVF8ZcjhnQPo48rdDj8vpM",
  "key29": "37RvKQJP5S3fpx1MoKAMX8mtj1GaD6PdEExzfv4W18qSJG8Bkht8N7hVC1SNL2p4C2tnTiFyVjXyeCLeC7B1W1V4",
  "key30": "2CLHHdWNdJTK8uDu2i3MYgWRKQVkGjUNVA7pH1bCLsULxdFUJtC8LVuSvfSZZvWvXN31gN71Qud2eMRDR3HgKCqG",
  "key31": "4dvcA67U7woPdZ59aRp3aWv28NfzPEsUj4iuZCVdvxgrYEa8nrRsuteWZPzvEEx8DvDzCQpexAki2mdB4dyHeTZP",
  "key32": "52DRguT97xd2CsVuV3P7Cr9njS7QLAQSv1kNv1AekQFdMh1PYHHc9TXGzM2zZu1sAj5Km9XXsLAWaiME4M79EzZb",
  "key33": "3vzERmVKD53FydjuJRD2fVurcUHAmmFUo69TujhGohezuw6PoeLNHdVSCc7asgURx1a6h1ZsbqLCLHweKCVMQWhZ",
  "key34": "3hkCaNjKEQuFxUBdDDm7mbNLmYfoKarME8DhnS8BWRH9pApaWcK2oyiEjHTyGEUTY1FXXPedtkoaH1FMCjAtWrus",
  "key35": "45McEN7M7EhuUH4Evr9Hy9GrYePryxD6ffxk5XFCLm6jM6Qe5dMXZizVduur6oM4knbcrMqbcnFmKut34utDVfTa",
  "key36": "2VBwkRxiyUrVe9MpScS2rGK7jvLUnEYKkJzGtpMKhN7gYxqAnM7GKcp3VbYGf66SCsHNdE8KLXSAZzGAjxqT9jjK",
  "key37": "24KWjVzK3N8NPsEqr3vmJTmWU9aZ63kiVemBNwERPyKwSF1KBdcZMEZdrLUj9m3XJ5r8RfcwE3pG1ci22TYTNBuS",
  "key38": "4Sw27zsjeirdKFMHkjfswUmufFcXSZbNEnF29kPkdetVwfi5BqgfCHREgCnphxLP9wE7i3AijTEL4VB5E2AKoxui",
  "key39": "3Mcuz4xhpZnMP3neDGUuyHsLvCHwnFDAKaDJwh5TXr8ZWh8R1ZfnWSuHX4AE4QTURkYz8BpJucqaTbn334vkPwU6",
  "key40": "2HfDvRtQCshBrAoL4pNxeNzp3K8aMocVEx6h2g6pNXydpryaFWDzXhFXnYCyXdXVmPtfYioXLBNkGY4HHNHcLAku"
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
