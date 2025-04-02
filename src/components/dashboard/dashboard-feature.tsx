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
    "3bDNowH2GEz5mUCcEAfXwCYkyrPmo6roFGMdPVWk9nsFqSb4RJkivcK1XBHtN4ZDG4WidzxRUYBmEVdLQ824YRQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQgkLwvjPE8uSZTZbMKB4nQJCLzzxqCTuEYxp2YcqGNndx3yFo8hmocCMtyps3hC5GAxGMfRboDuFjvi1yQUAQM",
  "key1": "3d4Z2Xzwzxd3if8X6AwTq86S2RSi5xL12Sj7smgptHKRfaZdyirunoFGMDGZJEa1LiEFYqrGMfUgv8yEnLMJvDga",
  "key2": "jc64oNqrrQEDRmfamm6pbPvZSxQpPRa98ijRYsmChBeBuJ2Ruxm1MZE57YapSTrtP7ASzj7E7n9MtDkKVMBE46y",
  "key3": "UQbtxFL1HKYu8A7rMG2QjXtJMqzGE1TCe9MdMCtw5JuPjcJp1krxZ8hd1ftQQ4yKHD6zeGxM1ypfiktoCiA5bVo",
  "key4": "3qpFMgGWiemTP2neeJFFHAws4fazoaZsJ3Hp3ciJwKEEzsgsHrdJ9d9KaeneadVPnhG7fZuJuVqnv2J7xKUiNK6T",
  "key5": "pQpGgwH5axGta7B9wBzoqqbPYD1oxT5RsdPBefP8gV2aYLdPapRyLXnzJpgKQ12LuaFZmauHXcUryLpcZEhc5Wo",
  "key6": "2XAwyKFV6wDMQsbfmvBPakYNJAWUSZpyGAJWXrL8uNAyhVFBVudBbEeDNJuNpp7GbK3MGQ7uM3qe8V5SoiESn1ga",
  "key7": "5jKaSDj19CLit96XsQEUd4LLad5GfPiEkiLXd515iXTuruwqwTjhzfFQ2CidmwDVK2sBLsEMYzPDnpanEZQW9i3a",
  "key8": "646yBcfkNvuj2FAktFBpusAWNcsQGb9VswbfjLujYV1xd7md5FEu3NyqzEaUSvoktPMHE15u7KDbHVEy5xw6QMfu",
  "key9": "pwtBXFTdhMb38pVMCRrRue7nfAhDxg56gfiY4CwDApXVZcpjVXmVcNQi3tX1t1f4qv8dqKMR5DXC2WC4o29b2fR",
  "key10": "3h4NpA6B4zfmp5DhCT83G1C2RsNRXAJghk3X5aSGJqA7sbC8zrdQ4WYpMLuCcj4WfoRzgdSqjtZqcDN5MsFvHzfR",
  "key11": "3ra5FEQX8whkZ7cqTBTV42ijHGTXjXPdtdDLRpnmHvkLaMtCqMreLrWC4Zqt54pz8D7iEiNn423GLK5x7gF5Xy9p",
  "key12": "2LnNksEuESrbDZ6v4h5qA81eK8K9oupQsNHth8gR8ubHM573xRSBn8MdKgBaPx3QQUuzCkg6WkUA3t8kFGajVtT8",
  "key13": "owaBpQQDWpqca1WHFw4SpJ2kERxs6u4tWXA1RqC5pN1CY4UG61M4oRQeQ7PTJhDbj6ornCdS49M9mjsyka38EvD",
  "key14": "2wntdDNFwLkRxYy7egYm4LbN1TGAr8bs6c1i7S4whREakS6XsKEpFm4UtivjYc7JRokHnw7co8Zupg9vWqTHzMn5",
  "key15": "4FHd4jm86mub4eLGYGFVCjvLmsRFd2zfAfR9dYY29WJ5aoZztLZhmLdbCn2RKTYAfXTsn3oqaMcWUivPj43kPyQ1",
  "key16": "4e1LgkY47Vgk5mqE4JUak5Ly2xW2f37QbyyAbzDWntM7GaiWpZgVvSwLjEFatE7h4UaPQKdUaHbUUQqAN1pMtkAZ",
  "key17": "5akVgcDjZREQ8aR4XT1dKbywqbMYqL5QmJqGC3tWxBRNZVVcM4rGXMqUxVuYmyWMzR9PNjzrTaAoZGaV4h9oXAqV",
  "key18": "2musFMbfPd1FPET136tQzSKSimZu2sDgc2LHW5pNNLjdSaRsCfZLxP2We6i7xNtR6ke7Rur4x3DfefzbSrwzPN5m",
  "key19": "3xh9FCHaxZtQ1Q256eEqvPwMmsFP6ADW5Ev3BuANCTQixV3hUUVFWgn4bpjSxnGxv7q743PmeAJheRvZUHxkcT3J",
  "key20": "4k1AnYVAbP6bpNevAyiPKh5EhoEFGFkRvkYR6DxkgMM4Y1pkZwu57iUVtchAiVjpfvnPgZU4erads1zwxxh3Zqc5",
  "key21": "5moHF5tAJxAq13Xtncm9Th1NYS1c3ixkcyRc8Z5WZqLBt89AdgXTrM4LxKUBciVdASiKEYx8UoziCNhGDCm883Fj",
  "key22": "xe4Lsu4vH1U1Bm19DC9NCavLwT1rCPd5z2GuKGq2ypwC9T8JEqADvS7XpCSWVb64ekuzSF8vManhe2zrBuBvHCe",
  "key23": "5NzRUxnRkA2Ao8asCWu9H9U9HQiav5SimSWiShqVYdP5rmiWRm6akhU6ypQihtsXG2xhjkDCVj1H5GtiWmcvdYrW",
  "key24": "2vh69QsKbm2Sqh8yWToARhLuDNBvGEizyJoXCHsfdrMp8naimWsirzDWX7mN7xCzq5Vq4F5LaemUbM84Znw9pCD3",
  "key25": "3nGa3BBdQo3bbLzWKvRgmAFsSCZfN24zbYAQmhZQ4mZyTuzjzac4P7DfBqNruSwc6dZ5UCC3VnRtANwuoyBeEdKi",
  "key26": "63xpJ9Dx9zKdFig4pXjge7aRr2UCQ5DNxkeeifzR82VRf6TpDchEYKXqNcSkzu6kyHKzDdXyCE2iBQGCJsjy6eKx",
  "key27": "2ZpbgJ1DaSC7rq4voEuLEgHuZyqrkM9YhfUSd7JTxvogZnVjSmMNW6AMHSThxUoJt9FbFSFBg1oPHihzn1FUNifo",
  "key28": "61XeJuXv8QXCpr2yifNmgenoFAD2u8yG4QHSKuaVPVNnxoA9GYcbh6JG1NTGFxVzGKdWpo2nPWzNzcfvFvY9eqpe",
  "key29": "fgsbdU1REKCS6kVcncst2nrYp63mFhpT5XxW5VUsfx7LyybQPSK6aRiSiuqPwEBqGwGPPWTFMm4JdgXjtMxbqT5",
  "key30": "5Spb2qZumrEu3X8yvTz1MNBNkGC6DUPT7PdVHqzqgeDMKhLAoNCXwNLLhPLgoGQzKmZu2GYrFBY4Pe9LVPyNV5RA",
  "key31": "sKkWA91dT2kpnNcXsRRy9oj1KA7SKG4Bcmzy6UFqVvh8vBQqPmtrUpG4H6Jkf9cqEn8afZMSe3zQmvSPGMWRvoa",
  "key32": "3vhYesdgBfYVJw9KqvHP3GyRNDhZCGZboVctSWSRzs4PfbNXmb3eU4CEmBZRV3Z9shCUXuZ31Hp8nJTf7cSHyFLU",
  "key33": "4fqt3W1u5zfjhtASsyVDL488UsRemT2SMgCzow65EZtZPC8UPhwE18T4ug7pizkcC8zdYeNA3pdm6cqt1ebwrn61",
  "key34": "4HA7gBrjFuX33Dnuo373saoGcaLN3PwdpMfjBqaQJ9DdhJyYueEzPheU1yEGNh9cVSfHHaD6TMX2tk3tX5FfpkLJ",
  "key35": "2YxjA1EdKPC4VJAuekT5VwkW1BRhJ5GyPzWwzoJpBwJqR4GXmXBQUphufXPyWDii8EQmoy9Sd5fRdZmyTLXQRhnH",
  "key36": "WxsMjPmzR2P2GJqeMoVyJu9dNa3x3LnAEjG4mknFXbteecNaj65B93YjTD9wG196hDVUbWfdy6ZhsVQiYchZNxd"
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
