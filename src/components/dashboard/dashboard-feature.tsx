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
    "4YBEDvzsmNQvK3MEP5xH3C7eKnYyUwz6X4qyoxjFBaMReKQZhFjPcaisqtC45udtovva1sV8dL39DiC8B6iqFV4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HCpLwVEUgrwec58zWor7FHNht98NtzCK5H1Zdm4XgvcVRxqgmoBEEiCuKmb8TVdeyT8XDa4XAzJ5gEyJTSSym7",
  "key1": "4Cx2Kn7owLuJaJ8vR46pPx7yZdq3VcCbEZD9g8XcMrSaMaygCW93pETovixLxpbg3i36GPrFKraN7KiN9YNSvamh",
  "key2": "3iTpQURsV4or15wCn5eGTrJQJF188jRo8FDd1aM1CHNJbjnAPdVqAaAnGjqzLJzNv2KHekfeRWbz6nyuR7xhCrDr",
  "key3": "3HjYJsaDsQ4XaMvQLvabgCbMHHAcsabxUanM6WY1EpNqcgDEWhfaamq73sUsqLbjCfY1aLVqodMNph8eGKmmyKkB",
  "key4": "5MsHHYSTSCnE2jUokKgeoZ4FMDXeoKFHdrrxAzKMhS5K4nwt9W2sh4mPCjs6heEWvoi5239qsxgm8x8KQzvYtN95",
  "key5": "5Vn9Qkps8srUfJ3sMry54FtQzg9wqtJerG5Kp59LM6eBpAR17B7GHF7ri2id5yonrToScqmnqA59hVPbNNG4soQV",
  "key6": "43VjZEowmyQVzTajchECjyVi56UkVHaWyYtVdqzeSkTK8JVRWT7t8pcMgFBNGHEoFdSA2pPeJ2qFYheYcextX4GL",
  "key7": "2z9z6XDrE5rA36pzMXPZyn3XAkwWZJyEEaiMA1GjQCQSQB1dDTrEVfHgYLcc1rYi9wrXLzTwBJewrbeYi3iaXqeH",
  "key8": "38H5aHhkpKFgseNkaLrx7z2XzPsUWL8wLQL6SZhfJGx7WdybLj6obTpbohtjrUPijVYfZ2QzvBC4FQhPSx1CAnrL",
  "key9": "LcLEDKwmfoTJg6Sm2g1hau7S7o2YNRmMx2jW6v6rXkpnvmnUgZqMzBT1mzVgmzxNJpupN68tJmYMvgu6S1FsfaS",
  "key10": "3qWo1A7cGeeWT9g9TmgFUfLYzkkNxFNgbPwgrzjw4eGzC7pKMNkmXMwD3R8uG3W5uZ7zFprwecZBHXJ2zDSguJa9",
  "key11": "5whoAP43EhqzXskqZeH7Sz6CpocQamvDCr5r72nvWnWNHPfDuE622XUCzvvU2W9uGEpA4D8PVbmBartzRDxHgmqC",
  "key12": "5KcneFhAGhBcSYVdP9ntx9xoqe1X41XhzPTnrXXKhNLxnX5ZyXre158stGF5YrCujfcCHhJFMdnQctHp84xCHKGn",
  "key13": "4pXLiBfUKZd27R3nD74FHdo7cszcfD7YKhLFaBsp32AXy6vRKEXfBzxTTGvf5hQYgYgR2ZTPXxHCAhLhPdJRTyGQ",
  "key14": "Ru77oCSNNw84wEAZxtNLpzE41WWS61rq57cqVEys9baDGPKhRe2z1rq1ZG2jB47W5KR4aM8n7umgSzQDeA18q2M",
  "key15": "4YQj6CVpfSHA1bVkTCuFduqhPxc13p8rwmURF72ZbRRF9RZU8ywvPKqZr4vJKmCn5qsch7t7SNZk1xtYCa7zmdbL",
  "key16": "4FbLU29ucerpKF7WDWZyjGXVqdkR46tLFMNGTq4X2fgbR9PVAnqxpHhp1HyDUFzmx6erSa8QkjNH65AtZnDpBgHV",
  "key17": "2kKiMAva81yeQzLBLhnP83AieshHKFGYn9MQYgVtVckAr8fKNUrjWHbT6v65cJ4U2ZYCPDxGj4cJzgd3fckCya1R",
  "key18": "3J8xuuaeT6WeMsF26Rr32KVmKzAgjg8cbw14zpw3CBn23Ac1FnvBaaXhWALrst1dXUrPgZyj6msMtgsQgPKGr2HX",
  "key19": "2C62ZU7ZXZ1CZvsecxWHtghJS5Ej1bknAT5qUZyrkX46z2NqAodUQNd6MHcswgzWHFQHyTHwJM7u5pL1En9j6485",
  "key20": "M24j2Jt6pP3pDZJevqjwnhnp8eoAgaj3u5mLpy82qw58mFKMCHDvMC35skSaydon16WWcHXB7S1qvx39X9JPiYN",
  "key21": "4bmfv4didYtMyVLb1jpxCYX6paUFh45hn5gE63iw8BDff1sF1cJwbZggALwddnZ71591Sbp7ANCHKgPHXjFHRUkY",
  "key22": "2yeGMQz7wLkGyZaoKVpX92Nx4U9dCm7NbCcgSn9k5TpLR11j7EVZt4SjFTWAdepRvFNBqQ5fe6oty6YBJpD33Z4C",
  "key23": "2yxg2kBREsVfGJHUfDnDTWk3BEs6Tv7CW1XWoNLP9CCLvYwD8sgp6kpXghhR5p63f7FoMZ5vtV3bYF8bxNopn3QC",
  "key24": "3PkGyXW3GAeVpVXT9AbQ6R85hmzzcSSTqcT4ufnGrqQppSRjuFVREMcYdxoz7Ki6DgGafGDuWyFh2bBcgiToqAGk",
  "key25": "4Fc1zo47RaZfECjYmGWRdgHRHWPYcs64sWfG9TP78BFt1tj6J3dVAJKUSSCq4XosVUo1ogZggMEXZfMbQHXCqhZi",
  "key26": "pcBHKvDodMcn8aWRQ3fBA1MuVLRSqVUrnHGSBZBZ6gpFSKn6cjtTav4Fb7rnmoz1aXVQS53eh8dv8gcJgnZUN1Q",
  "key27": "2C4xX1z5C4CE1xsxN9D1CPwgvfMHPsSLye5PKS3WMhQEFLxJK95gqCobvFpPETy1D8gdw1rZzmoMLAiaJcVk99Wt",
  "key28": "27dFuKRtRoMqeFUVUYChs1oeGzLzLjcajP4pTFFvGaDNQVmT2tuGcRCgM71RCbQeZ4x4dcVbz3Y1YMiBNnfzEpGe",
  "key29": "3HXwBGiGSxz56113zS5eVobVSGR9cZJq1SHJd8JtFZ1MKAdGC8Ehewk8mCVuWcLrgoyqY1xhE3FzRmft73GDLWTJ",
  "key30": "tQZzvFLkzMhMEjxiQ7mhDTGFCaAwtLvS1uN8AJ6qv5D297fpodmAFBESUgSJGxgpMwU5UuiSE2wmCBSgu5wYmSE",
  "key31": "36Ffi2kTWK3BP2n49Z4EfT2affVkt7bJTs7uwXdNuadtqPgi7QzQX1TyP11p6a7d18bnYGPhDuWUbfijcASj5uZx",
  "key32": "26cQYFJS7Kr8zcru2VBixi5qyQr4aNe4L3CgsdY1xpQLrBnpFcGs2KFbh7Wp1HwFx45aG2FRMTJJtBAkvLYc9qYL",
  "key33": "2kqRqLcG6zNFbso4qhujgbH2E2rmYioQu9kPJUv5VnbZJpFfCVvEvjeNPdPk77N4eUM7oA9WcVECLXL4MZnGbwbU",
  "key34": "3KXzxBFbeEuBpn5h9fomSwpn8tKLHDPzSoS9azathhguT6xVTWkT1AQJ5EBT7LzKUSaPzZb2gwnRXT4ByZTSgdFX",
  "key35": "3DtB6g4HK8pEa2FLv17WqLAuEHhZxmLyK8i1JAUxsA1sSnNSTyyFMeMUMCKqBXbnn7Xqm1ajT64fMf4HqaQhAMZg",
  "key36": "5m3NQv2zxG58Kk5BYQSAh5pc2oiLNGS1b3uAXKL269LSZH9GjQy5DNuTyWgGesFyW3MzP2oRX7Mg9LyShkd8Tktg",
  "key37": "29LmwAaFf8p7g8riFk3cPjkwgKcEm4d9CbX33bWWMvuwLCYUn5VBeBpErgiT25Jdb2nGfxcWsR1tA5ZbnusFLFzG",
  "key38": "21U5tr6W6GV3zkXUdQKqbx48r3DpGr298hyEcp3e1DHNKiwZk5p8fjQWmT8UKXYad1kLh7SKtrVE7HCbDZJpZpwP",
  "key39": "4iBiZLCcN9wnd2BM2gxMciwnFVLcX4LZaJKGaWY7p7Xh3wwop4HRLvKJwJKLQdgK7yQ5aCuRAhj97kAhWqKW3htY",
  "key40": "2nhb3jPMwtpH4SmYTrZmEYJ2yvp6KKMME9rM5cgKFoxFtNTHapjANRuVRvcjHs6MGg5SJewLJ85VJiwWvvcHP9X9",
  "key41": "2kXFxWF4KeveaWctAXoVr6TJMQwqRHau7y3bCpMELLhbbh6TYEFdsCP8BEvSSnvpf88EEnRZmzWHLatApuobe8vj",
  "key42": "MnYq95pKTG5u8fmg73WT1AEotHUh74JUutA7VVpHHhr1VvNzzxpUBMg6yXdbF5pvebK8MpmTr35iDzxrXmmbwuG",
  "key43": "gtMrDpm9qcUFqB1RbBMw85jhRFH6CEpLHukemn5xbqDVr6hTeV5RTonUY1oAWHCMHVxjr5S1V2Xkv9T4cBA6wyM",
  "key44": "3Houi2ZwdYfRbacTjLQhBdjEn6MibTCxZJjUjJDybBzV3X4d3F7WWiHs4DoHph86iAEanDL49p849u5TB5F7HtsH",
  "key45": "5cyLnacRGLq14hh4vdNNeCjhBrF1qTN29V83BeeqaFGk21W6BYzpsRsRBhKvFR5iQq6mYuhL8SAQUKhveY7sqczi"
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
