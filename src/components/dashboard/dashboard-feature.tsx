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
    "2EYmueWx1FeAqMMTiygt1Njai8mGvaQWR1XWKEjLPS5B8iSjwaXa8Y3nchhLsy1KXThsAGT6jur35EGL4QjA3vC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQzDDCXcCnZnAqWntkf78mdp1uxPTdJYLfkXH91kLBP1YFBwzgm1ycEkDb4wqv8DkYqqY8FojYeZKvW4Pe7Sw1L",
  "key1": "3dtLT64VRt9Rt163Fvd3vUGk1rEcn5BEpY898ooUybS3Q1rZbfsUYVm6kqFjNuPQNoZHyriNTSondZfFtnhByrFp",
  "key2": "SrTg7tZ7QYRQ8ffrKemvFYz3aRMt8oRRkRY1kCdUd9cg6NXqeZGN49nKjyyy4BBMCeD7zThWb2CNmiK8VR6vZMy",
  "key3": "jbircZgUoqki8mgsV662h3kkeQDKifs6hk9RMNU4xRwNKt7hLj9Hxr8JSjcXyS2XR31qohFRYLRQ4pj6fexPJ2J",
  "key4": "4Mcqudesb3Uw9ATkGE4H959JWuf7TpJN5NCGoAu5YcHVdoMiBL2s9uHPY7muuGjjMzWQXvXRxKToxU7Rke93HbbG",
  "key5": "43AjPmfuSLzc7ErNMkYubmLR6aGgsYaS8JP4eUndK1K2kwTiBgzgj2ZyVfLMezHkTUvncPcAXBh3iLtyEufKWEmD",
  "key6": "5sZZkvR4Vo75LhE7e4VLCqFpC3jCLMERLhK5tiLbRSAEMqX6kGh3YdauzNfbCDFTaqvNHLmjts1ZgSotq1FWapvJ",
  "key7": "3FQMjFAWnRXXand2uLh3d7QUWuk4dDTd9puq7MXjgkZxwmHKKar4kvbAAVtLSEaiG8vaD7HbDmH9KxzBvs13ZcvB",
  "key8": "5wVc2YtFW9k2P6xrXidPboATjcwQ5jEPKaxgMYoWZ9e7sJ2iFmB3ibUJXLf31JrCifC6NKaFYdWY8jKffvzyJd1b",
  "key9": "27RjHJ9Rq5Q7qgLVhGvjewYPdi72EcHS7MLVGzosCFZy7CUGMZs2aPzp4THUWuxtSrVPMtHap156iWbtjniYHekR",
  "key10": "kD94BMLQB5d1q8CkokvmoU8Q1kSTbcEuYaZgAWv1FwUCdtec7QkkAdssTYxzBovkR8pPAtWRknq1YUNLJ8vstio",
  "key11": "513j7ohvFBre9hE4AnjfNJXddKSgv2YZtTc5otVH5XNyZm3d81CkD4VkX6PPbqWWra6BAh74NVszBmFaS5FcwyjZ",
  "key12": "Erz2DQstE7Dqa5UYtuieZz838pZ1LbwdgJV6yBNq3EgHQVqc11jvrAJEiFMo5rZnDfjGuPwGeGv1gL7KYJbGwkr",
  "key13": "4qCPvZhw4vS3htRF7XzCpNdQ2pQ5dpfA1vzJNDbG2Vwq3DmddrH1Z4eTbjf8vSjCiJ4AvVwZPoeQduSZ9V5sZ27M",
  "key14": "2ks8Wkm23qtHPbBP5ECDDeGViiu4drZo9vbXRZUTG7ZJLfdfELcT7dnUy4PuP5tHJvKU65mEtCMfr1pJzUU89Ddt",
  "key15": "3aHCKdLEjo1gVitjzXCNsjfu3E8ABe1b8CZUCDLHNTmm6SZS71Y4xaZ1UhUNrD35AhouWmZwVWCRRnx4vt8VWsxW",
  "key16": "5GAvjh8PqoaC2uCkqNuwKQttVYY9qfw8dxkEuju5fZhdPR3weyrgAxxNMtbtNtyueUUcnefGDxM3bRiPEwHELCai",
  "key17": "2YKjJaCXB4YQAdTeHfRasrmm1LQDGHKpDL5y9vuiMzsDTZ4FHyvq6Jbwxpz51JCs1wBLgdQaWmQf1YXkU3EeHVvr",
  "key18": "Giqqknd4HBcTSra1w9cSEwSGQUjMCy2zmpGPRzMZWbkAoR66c19zX7zLiJFEqiBJb2pUt6oLiCeLZCU98KTatgj",
  "key19": "658PKVLqs3dh247NtH2xuY4EtEQTH3ZahfjRrmaSMhiaTZYdiyxp2byfCcBVkqQFTNsY6BAg4n8MBj49FhniAut",
  "key20": "34FbVCHdXm7YjNNwaDhwURBBwK2KjBet6FYaNa6sTb8VkQkZXDkEDD7TTyfXzeWnJiYA8m3w6ScAAJEDNZuUX5ES",
  "key21": "5rPjmqq68or8A1M7sv9San2dyLN1YSBv8Npshmmv6cGVCYUtutUXFBD5LagzQ72EkQ38enS4sNTHYDr4u2xNMYxb",
  "key22": "2P7rRmDHHFMD7jgdNAEKuiwHtygVnXoDoKgr6P4vfDFFJ88Gfmjd7toShTaMCt9D9EkyrmpxbbjmND7Bfzt1nb7p",
  "key23": "4FqU3dptYuEtigXg2MsRvqEX3vMgRDx9afNtPrWWkGWvrCSCdvNgVm1V318DErAhEfVqc4vD25DNmZrqbj1XCTMt",
  "key24": "3vfXA3ojMxCnrNciJDW73yuT5ThhcoLcpAL9hfgdAY2kdrP5ErKC7CJTc6YdSVdyCCheFiVGKv7CuBgoBDDRNbDB",
  "key25": "3iAbbCr1q938E9UWNoxdRY9XdUJtPUYFcDcKG5x47PMrzPCRAowDx3FuLNYzEvQhxirsm8Ua614mykB2yaM6qE1K",
  "key26": "XVNqm4eYmLbdHhk6hYnk115oVub4xf7DM34K34zaEtGDjTPk5LxQGURhtvt7VHkbCcnd8EV7ni2FHm1sVaZcJAP",
  "key27": "4ZkH5LWutid9H2ZEFcfYfbWmcAnR7S9otsnnHqQTXmy4PUmAPhpNnC35tn7vy3GEcSV2fAMpz3bzCKgUQTnEsChA",
  "key28": "4DF7minWbW6Q8tEQHL1j9rhYzX4J6NUpFa25Co2GGC2HSP5TeVp4JtSCve3GKeEDjAzF9o6gSe6zjrqQ8Whzr34k",
  "key29": "4Ns2i8xVFdN4cjH7fzpxW6KgoejYP5NKVb7foQr7ifN7shizLFc9dvTREg1KbzEBHcsvkyzt3Mbq9fCmLCPUNVQe",
  "key30": "5wTkt6nzuhLWNzHbGeJLKo12fYXUprqsADAncnypRWj8FJS5mWefMkQ78eeDVDPRVWvGY6ugsS1wkLJPC2Xu5ZQd",
  "key31": "3hcGvR5izMv7pQSfrPM3YYytkh9CYBkcebN43tsohauDw8DpPW7VoEuNZDX5sqHpUNudqXuYxi6RzykxDz2i568h",
  "key32": "4KjCde3rw8Y55pJhDjueaB5TGu4ViCH27gZbwK2Gm4rT5AS6URF7mPJ74JjdogwBQm2PJgFa5Lag8ZMNsgR8D7Wf",
  "key33": "4MUQW84weZwhevrZUFGF59YMW3mKV8RPMYWaNN6MtsiyHLpdNDzSprzCExJV1vijRKy39AYTG2S34EaPVDnmaT4f",
  "key34": "4RrVLPQRyLpz8kmyn5H76XVRfAWbzAmVhiv7Yb5WpEvzbDAge77Hsc5QbFTNn4c4t2wgZWKm8CDwptHzNvepd8ge",
  "key35": "44i4e9jJGmHXcyhe2WzqXoksgWEy6KW65noJH4Jv49oRnmqKBfssPC3x1xCacGX3hiUBBa2PkgTduCswfY7vcEk1",
  "key36": "5w1dF2o9zivCKx7zRqGLRzQTBMgKtqJnB1ShmYkWs51nYx78fgZxCX6nL4VKHHAJ9sYrNH5Yg8p8UFpPXCEWvgi2"
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
