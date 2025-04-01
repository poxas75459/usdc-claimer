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
    "5B2YVFj3mjiwSTr1PTkDSzNRKnfgCEwUCWToUHVT46fQmmix4xLUtuG6wzuP3aQJPaFcZ3BbUBmqZAcHAEamzpG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wx39KkzAUnNFdJJfFBufW3A4fQiu8SuoheLoNg82YQyas3VFNkrdZDRcHKpfxbKpdVg6zWAAv1xj1Nq9PpiAaWk",
  "key1": "292rpVAGRRaDYUfGMpQMt3KJWjQE73TyxaV672hPZ8Y1rqmPkCGfBtMZbMc3nsRiuLwxyrNT7GiW4ztkSAwM1y5i",
  "key2": "4UzGvj2NTYSD4DBNpQBMDw5n8nJGsiXphaBna6GBDXAFD5YhSbhnxCfVToRhfQY21S4ZNGsiso5fwke7ojscZ4ei",
  "key3": "gTVaYmwqHzpDukTfnpfEbqV2ygbUEwwVB2cmU7bFK3kMkVvBWWz8e5qXizEZobVFz2EaP7NfYvHhb75qoU5LDB8",
  "key4": "3nYNPVoBTVrwctdTQLAawFDxhz2RghbcuQm4YbotSFDJDiwvsrof6W6yjK53dJ4AiktCK9zhGmRcgTu6zh9DdNrf",
  "key5": "2Li6VTXTBbz82TEq7qQV751gatoJzyjhWS6rEniu38u4v4sFDtccAv6SrfATSbDaRfBzyKeHDnJnL2ikGVEfaJL3",
  "key6": "3uDx8zZfPPSbK9iUQrEUxEkYhhEzp5GSUJzYsK48KwuLsLsPYoW7Jh6CUxKMukkRKzZgLfVzFVurX1VddjqXDmkC",
  "key7": "bY1WTn4mQmiwUgQVHMxQWaxoqHbKsqhKg11Tt9166wYH4sTindS9Xx9Tj6JpjQorvLYq4cpGxnk8R3xHdE5uCXo",
  "key8": "yavSFWSaoN4RprDh518W9FgtU6NgcGEJ7hErkG7zoZc3UnKsMvsR35ddYFL8ao4uZ7qsTv7SAg2G4ZcsuGJ9Gj1",
  "key9": "3ZyENGzeZ1pZFJ5LDeWKU7diezUs8hhFDTsmfRt32FTcXpaaMsfiXJifJTaj6vJEGa5VB4uTKvsEDJ3GiQemw89n",
  "key10": "ZXoz9999PDMWxLthxQ2VuxB1ZwvtEquiPkaWtx79vigTQvvxm5eRv6KoFke5iWvGYxLymSzeSqQ9SeGU9sfwM4F",
  "key11": "3VhAtBWu4NDHyLdHGmGmbYWMrfRbzCiNLw5xwn85hC1HSrwDdXr6KsG2am415xXRLAm4bUHoMe1yHcTVYnHjKraS",
  "key12": "43DJDQRFS6dTZTPbzjQRcfwPHMXDLLzRxdxSF6hSdrHcjifSoQTf3WHBtgXNPZodUmVE5cqajcBJJ3gnxFQwWUwD",
  "key13": "5snEBy8NgV6rs2dtkghr4CgtvJZHA6Ho8wwobGVpPzeonwJQm6dygzAwTxKEPUWG1E1Z4uuvLsQXsNCdA4fz7fzQ",
  "key14": "2omtwBf7XBQQRkz3r6zkczxCicB2oJDWNGUJjnagFmyu3CYLU2veVK9oFke71NKNgVnC8ovxfpgtLUD4cJJW4bFZ",
  "key15": "KgGUpjmgbDjo2cmNgZafYYhpMGLMQackuo2T9hZDLbiQYjg9rmGuDsbUv5oJyQAuwSoQooMXsqXbCrtH4abkCP5",
  "key16": "3u5M8jsp7nMUMvSJ7u8JPLfqP7tEb6s7s8zua5S4GyLDK8xinsw2dgPQxZQ5vWLFSAezgQ2jsypqZUFqEWGfeSbL",
  "key17": "5PNwcNo8qTgQZQF6BJzcoUCWkipQ8BHCJi5Viem17XReWHtSF5GUCsMZ7zYufZeviFGPWHgo3fa2VBu3mj1bJb39",
  "key18": "2QAU2Z3v7fV92Y4ecNQXuRH2U32cnFW7uQvKaaFTCkLsvsyZiyuDNTb7kWLoXUBcNJjKUp8RDYzVcmNZENuK8xue",
  "key19": "3QW7pFG4BtmvKx5rvTos31aikfqXZB6cQ7CgFyhNTCGkUfqigSsAKHdHB5bPAornKCq3fuBDXAfVk54d5AhGJ1ed",
  "key20": "3z2f5tTbAKHiJ46jY5vVNH6H5FG3PaYcB3cPoDFP1xRvUkgQYPL3L2B8Gf55gG3MytQQtBLJY1pnCiCAtgBz52Tn",
  "key21": "2gMR27wxNpd7uCnvwRBHSM4vJbyiFBuPx4zj3vM2RhZdsxQCfnSHpQPbd4MKvmALKy728RmhEet6DAvT1xsd7gXg",
  "key22": "A6HjF1mBfetf2MnQT4wmjsfx72HeoEXQUKa5XMTLjGrsvUaaVm6ZJrpgfKKVYcfMdqXhepsJVJTbr2Hab88d3tH",
  "key23": "3dfHRSbiBYHAvkdDGtM3X86R4xfEuFnMmuQhyiXnQ3a7o4ByjYo6J7rtawMRtLiwbL743Sy7yn1Z8KpX28kZLTZq",
  "key24": "VvDgBruNNuiUkQTUf5L3ZtrKHjHzL1RFoPamrSpm9pDhneT8Uy5zq2kMNKvGDj9vXUQahs3JQqnkuZ9LKFKVMbr",
  "key25": "5LFzuB9a5AGXVvvgnYjxEfdJkxFjmQ53mrozs4bzFTnB2Rw6gmBtWiitzGuVUtoL3cHs4YzirTBmUzC2WfouhZF9",
  "key26": "5HJUUi7BM28AwpnELjhLvWfzZhyXB5czU9a9KG9LEbTCmVLkfyR3Pc6YFTWRTvmYer1QLKpXDFkkxVdeqiLwQecu",
  "key27": "HqzS4npjTutV4DygebpaL43WzZTbXzReGNLad3udwSEEUfd9RkEDknyeSFNZ7x5JBqkJNMsqVZ2iaWUJhFKoAaL",
  "key28": "3wzDLdgXqccZocCzDuE3SLMmXM7UsVQxwTPTGLd4fPXhKLSd6fb22YzJEnuEwCWzNEx5jzxnogdfo1misYUYAQgW",
  "key29": "ZfMJgX7ZeXFue6idnFdVJjPFjCpdd7UTiyiXp76mnS5HbohDXkmW3eTEFTR9HJzCbpAt281bVy7C73hV34XRSLL",
  "key30": "2Bc8oa7AzGL3FoBqCHd4E99chtcX5ixL7qujyGtvFy2GHGGjBiPy11fMQyJeRyexvWdhbW8C1TXXRwMW6ebu3Nhc",
  "key31": "47UgfP8sJhu8FjXMdjXjUwYUdTfZUtpCVA5euXeoHymnumpdaueMDvyCf7CZwvuhm2Tw1Nwrj51vvgqHVbXpViBm",
  "key32": "V2rXc9h4FMNdKR18Je9HrEvoeW5UGqjWeF5q6QFQUyuqMMRV7RNS9ADuNGinvFT7cFSEEbYUviJsFgH2Yr2Lj52",
  "key33": "4Bvnq1cQgyTNmR1h4ZuPPz34ZqmmmTJ5JJxsJpzoxDXhws45fCAdEKUcNTctQDXwmU3iFJwmZ6z2pfiHtZJKRJtn",
  "key34": "v3CGG2RdLs89WCXckvfAUR8o8hs7uo5rCgK6K2nVwsVrUt3o48o4rDB6MVcvVAhkFDLP9NNZcqV861e2ky1jSjW",
  "key35": "2YgGKU2CZrryCQR9VAuWcedk5CR7ZyBe8fzJGzL4JyRAbiXSWDq3c78hh2V67jnVCgGoSziDZs4zthQXfurAyXUJ",
  "key36": "3zcXa4TakHqZxaT4rADCrG4GoW16NmsywAjhvidEzhwz8o99vffAFkJGEg6X4rvUdzCw36r3nALAwYZL8txCVp4z",
  "key37": "3Zxy4gFePGwuECCZjC25dc2DCBRuFpm7sfP4s69GoEe8EnKp7GLHe5vNnX5hM2EEGCFKXTBfZ2Ny8EK7gdV5Wp3n",
  "key38": "3wY3vRjW71Utzpddy7hTrSf4WBrXJsFJWWwCq8FBXeb5XpxdrGRQZAwnDpki6nzXiJGDsRtvqG2k8yRfHFMvwaAj",
  "key39": "izb1EXfZvkoGnSGqi3jxuCABioi9mVG1FTTVyjwZEgqiVcmgKHiHt2kBYAnnMftBSKQPr1uboo1Roo7tFqE4cT5",
  "key40": "5ocwgDuNEuAotb958YVtF63YHM18RwVJSvxBYFzLk721EVgJoaVdRkDFESmN5Ur4zYy8fbrgh3dDVECCJa6mM6mY",
  "key41": "5LV45o8xcZkvPf9wahvSxfytzxqaVBuqGe9EAvmVenkXBFYM1uEYTPr7GEjwQmjCQ1UGMh4xzw1T2MxvyVKZ8nLx",
  "key42": "2DxT3Eaw6Zt3qLthH7MHXQbMooHhmR6BLanhL56frFDpFaPDbTVqyE8nVSHKkuvGEW6aHJkZoPVSjpHaRk7eeqWn"
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
