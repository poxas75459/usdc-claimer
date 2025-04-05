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
    "4NnFN98pMvsCC2aP5gRD4qakacoR632ERdNNoiNEDhMrMN9HYMwQBd3qt8RUQGtFZaSxDW4ZFEpGNA9iTKDzSNVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CU2R71jRi9coordYiimW3HbcbpPeoxtnY7y68Xxh9YbLG9R2JqZ1WYGkN1ehAp3jMCzGcyPY7QhhybtYpnN5hnN",
  "key1": "CKjsDpuFY1iv7afJyVnn4ow78AujnSxqC856CKfRDuJXvdTGHf2vEmZpv5YxmBm3dpa7LZFw5x2QR38vdV5bieo",
  "key2": "4i4d6PrEx4gWK19XKhYo4uE8utsqwv39gaqby7KwfGiRC3jcPqESTWgZV3syE7jTZfueGdaBxVeLeEKk2QEnKk4W",
  "key3": "5o8rMda4P1GKMpsiejSEEXB3sVYi37Shrc3U2zPzSyKL724dPzfwxciGJNbjNQooDpNFfisa4fk6TXm5D5xp14fQ",
  "key4": "4M8cTRChG6KCPVDKHmvzHHiJSaUtuW5rwcwbTBAaKQc3wUnQkG2sTZdn62r4mpwuG9gEFCtY7Ed6ytj6qZCsXwXa",
  "key5": "v6HkdAEWibFsyJubGoRKLqC2uy7ysM4VcDKaDHzcTQ81J6tTNsc77M1X6MqsS8jGVr5soRYbCK8kKrS5CLbWX4X",
  "key6": "2pFMLVcirWSxSuf5htBHsDxPeaSttLXsX8CLdyokz8Gf53TaRKPsiKhNkzR91izoNPrKfY6kga449cMe52BghZ6x",
  "key7": "2gTUrQwtoXxTnknvY3V42cYaSxyBaAhSs1gNJZ2Jou6fdAD3sx1Sx2ByRLTQUid1uZvE9C6ewUfpomeWW12pEyxn",
  "key8": "5nkHrVSnN8dbAehjY4BJmmbFuoBsqvjQ7wFE4zuTiKEMdm1bTsg6qEJP5rmVQ95Ruk7gCGdsAW8y41VZU9B5zVX6",
  "key9": "2vpbtUiNAtgxfQJ1TGeaNkQprkVHfpJ16BYsk66Hremb3R3UVMoS5zotuXhA91VfCJzDMCja2SbCFjbpS2U8ZdrN",
  "key10": "5y8AxiAisnemLDmZkri119RQWmDaSSG6zunR3jTbsgsAai7SHf33qirSzmTyyuLEfMEkHjopXwuYyHAV9KkBr5cA",
  "key11": "Nu3wLqSWd8oyrYZSh1hpuDnP5zC1bFdpf44fp1rQQmf4CvZAUqme5dC4XjouSCmKToSsvNm4tnD1Nf1UPU5CC2h",
  "key12": "uPzCeMRHB5TbLW6MnbuhKBzbirFHwDg1bu3zobACgVvg9tqukgRTY4J6UYFfnhLLg9Fk9qXov6TRsJ8kLz3ycPf",
  "key13": "3wbJyY5Y4bGJk1qXgK3dDsBwhzSkGNXfxp4yJWAQYz3jzixo33rnvJWWUC6GR9Ttu77VBPWcD1fXq55S6vtKJH3T",
  "key14": "aQazf5vdA9SZQmcS5b6TrRWRx9rXy97snvY6YKBgunDXX8feDhqVSMU2saq4kYhxA6HTEkrnSujuvxpVpUGGoNg",
  "key15": "4xfapDPpQPgpG2JCK1hRoQpkA3qKMgaz9JVHeEPCbxcJyFZz3X9VWasLPAunE4hwRFvhHePkMLPPHaw2VFigPBJi",
  "key16": "3b5Cg8kTQBxdMa4xHSi3gzeBgBG7SgKktryq2xUFaH6cwf9auRiCpgFUHUbFv3VAqw9jCgyXPkVjYA38N4hEbC4x",
  "key17": "4Cn9XkHPjLWACfTzDH6dBL6hzMbXq8KMigutNaTciQMVxhfEANm2AGpfC1RRYuZw2d6ddQuNfA6fwb28toZFcj7z",
  "key18": "cE9JvSzW7dmWNsAPr5Bkzb3bBiUGR8GDdd568DSNkMCvyBWacLFqLQ2CsK9xiMn4MtpLwCHxFawLeMR8GyqZsea",
  "key19": "55AEmpGEXSbXbErhxBok2LbjvRSg6n3bQu66RXcaeHouVFtRh8XAsHxuGN8Bja8ANK8DdeTgC6ABjkgmEUN9CnX5",
  "key20": "otiJzXG4Gw9fR6qTq3mKf95eQd2oYwFyykKbZUWe6qLgrEMxA9eoLHfNQV98YRFLMUWXFNKnY2DB84ZjicqDDQ4",
  "key21": "1iq1HZBeKADmCcE4xft7pdumN8w6BXqA9SEtVH3XusCZ2J9kSprr3pG81quJBtuqEzgCHvGxzxAXx5YpXh7UjaW",
  "key22": "3b2NuHa3tnLwHzgebnj3m8m3RqF2TCmMcpGeJqNTQj8QHn6SV7gsE3B3aoVb7yqbBgQbdmEKjmRiU422zHucR64A",
  "key23": "3Hi5HWQ29x7f3ArpAmu5g2yNECTqQUbZumTdcrZgNAhVYCU9DcsS5eykEvqnGZn5U5DA8Axt9qVsspBuKZvA4w1k",
  "key24": "2P3GLGsYferumzuxb2snCmJWBH8jGEMTe7sG94LjwzZokq59yajFzHMAaEKCNWrs8vm9VNqU9uJqkjptTnEE2MXR",
  "key25": "4qD2QGWWZiXkbiAjuqR4j95rM9adBoSZSqrzyhadDtcG22CwhyLAZLc58iCyQARPRBAbbupEeujosdUrJnnmX8ZD",
  "key26": "2YYumeEjrEwVueesULExRPoFA7UiNp8BY6r2qFTzbxfJE696Na5HM19zK3DoiqM8vnek3ER3psZGmePDWeXSpV2x",
  "key27": "3obt4RRfiw335aMHy3ygRujVqsXuLLvBJe42LYjJ2YoCXnGuixXs3VUZHNQSAUXczXdy6WmWTitL43K8Gz8LEDWZ",
  "key28": "2UnQe4Mz7FpPQBsyygFrTnSBQT3RY8juzNokPrStVdBSaJ8EFimEHVcYt6ygVA1hKChukuuMUDohEnsmbzVZW2zw",
  "key29": "5EcZVnBYNqKDpLWSBh1RttYh49tNZgfHe2vpaSpq2r9n5ZimQQmErNkis98zP7BhipGPyVHdY17KnAukXXCVYQMW",
  "key30": "3FMocf5paKNsXRRvZEgg3jkutefdyKZ6gXdjeWgGTzoJM2gYeYqzzASfu2oWXYn7K6X1QoxiLwQvrgp6GVcSoWQa",
  "key31": "4uhJLqZuDUTtn44JVQNwSLUkXv5FHcbrYbSXJJZRpQSSgDNsTmVcF4GpnB9dZg72fpofd75mBPvSHpcyBqq1rUnx",
  "key32": "RiVkTNzQByTTRTFHfK1Dh6rLp6u6TDAXJUd6BtMjQPZSauW32ewYkKeiLsHk6JoqyPUArQH5b86Y3HjoTCwFVyd",
  "key33": "5eQYyQLMCufzJ2Qtc8TSzWDvEiKrYSwyAiv9WqVahahBcJGXoowdnXCHZuByCM4c9f7Px6thW7HHvhtSyz2M7gYc",
  "key34": "4DRb75TuvV67HWbvVoZZ6VvUZXF54yRgjitzrWAmnVXfM7V6bnk9LSUzN358VYLTEQNWbYHF77FU1nTcJgP5rsmc",
  "key35": "9WCsFR6VpL5bf9aTZepepFKz4bV8a1FfFj4XnpJB72RqYqbhxiQ3NuWomX13hM5NR1G5LWZSCF6vJm7c2cAZWRS",
  "key36": "MGu31eHkqKauJGBvWLgw75ymicPGQk5K4BBvJYBepeHmsRiMtVvYTphB5N4VXcLgUQV3VMFvcSAvvDmnyniyoqL",
  "key37": "5EQNxxTEDx3NmmntJDKDE7qw3hVmxCfG6qa1Cufc8e3X14kSSpjBDg7PBYk8WHh9abQSKYE9UCoH8ziWdD3bkR2V",
  "key38": "3pBppn6TD4dFgss4MTDCmToKjeuViKAEGGVHT6HzDbRUW5cE16KqBEdFj16tL2rHhxgkekPxVLhugE5a1AF1NezD",
  "key39": "3cCEuTTZpQUBeApFowdkKny2rautaeQzZVTzK1ddivgSHKhyY4FeiN2AzYui3yRtDAGyGkaKz7VzpW6wWXtDg6qD"
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
