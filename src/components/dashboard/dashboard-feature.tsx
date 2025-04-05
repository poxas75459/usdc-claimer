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
    "j5i6wwh9CggyyvMeCV3be1J8VsqqGfyGRp5AtgndTYqnpnSXecWUEkCHAvBa99fRCcTGzHwwUymMRKSwTo5t6mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPUtSioz1fmCQVPH49JZBKxgN2LdVeAF9YuAHKr39sr1Udp5r6X4zikp9pfq6BhfR11eUNNBjXczNTB7yvPv29W",
  "key1": "3nGgC4SdcW2RJd4AaPfx2xV5DLiseYBYFoDeVGsbSbT8yr8T4x3PNHy1qL6vygAmWFTWRchJadQq2vL2Dr5BMqKE",
  "key2": "47Zv1Y7NdffThy9zmh5881KJneBWMxMSpMnLxQZAmdbNJrm4zkrot2gGYy9ZsjbfH2VZSBLssezEksiSkarPgGff",
  "key3": "3xzhcFJFiVoYmnthi5btcwMqeqLoC8hAy3W58zxeFmDkJixe6EQmoQmkZ56kbUY1xbxK7sbxXV4wr3AqF2M7QHPS",
  "key4": "ynkEygrpVCKtkWiaYW5y9UPVhW62e2k7yvj7bDmyrmCvGFWpqGmEgKSzyzn3G6xTgVWxZKxRPsBN2r32RvTYvzP",
  "key5": "3CHbREECNhcXYwGNL6QxorWDREwtB3YcYNKEw1rkCzdDY72s1vW8ychyVjgxNNjZg11kTFiLb2xN3SsDGHsUSNVt",
  "key6": "4ECkcW4yZhvxFm5Jgjwot4KwXZuwUT4SuTeUcYuJmjmKC8roEL99GauCULwKyMZW1ed6CcoUxejnNk3QUkiFDBbm",
  "key7": "y4gVCy91H1o5HaJg4XM5dANHuQ2C4ajZycfvhGLbreVVhLhU8YM7KrNRuMvFZyqmvnoYGG3KmvvAGGDmQqMgm8A",
  "key8": "61xpVKywvqHkndCzJeT5dcAntksziirgYwHvHWwEzhMfWEELBJwJQL47qfiKMjMkPE2sdQP8eYCt76FiJSzM36rP",
  "key9": "SjWtBLqAZpSbQx8xZT71jBC4FHky2TTCWNv1zoSYNMo7g67EucWBoYdWTAZxP4bGb1BHwfwJrrikWcRuR2Mwsk9",
  "key10": "5z6ZpSTPnFQ491UWMWv36wHuFmYR7jwS3PJfKst5behAicLR645UbEdMXFPmUnxfzx6Ev8wEyi8cWoDkq6e1xXa9",
  "key11": "4jFsAtVrJiHJDFJ9AABqYvzhhv2QvHrLce98WHAYHaT9sb2QG71DrNNX9XGmfm9osoSwPttMijZWMsc5dcRYHWCV",
  "key12": "4hgG5KcJtUnK5RKkyV35s2mZWgRWwbKGaAKYwB8Bj65Zs96rEpkTuSNJShegwL14g7ww4xHRwyfx6xyWnztgfKGL",
  "key13": "625wQLpHxPdJWGD6rsykSRWqTazA9CGYDHBERS75icURwJZnmCRQYXY3jKP8UceVqucZWb57NRQFistJcKLZ3d5u",
  "key14": "E9xPYsNwtZ7NzamxFth2S6UfnVgKibjD9PRs4Z2j7DBZKZSYe8XUNH2pVqSAe7T8D4nQV3u9fDCMUdw8qVCmcVT",
  "key15": "5GHLLWL4bi6ieBepD3SiRWCXqzRiv2z6ezQaVrtQ9PFZkMmdJnstZzeBHj1trUhWErNq5BGrqyyEKb7p9PhkZZaT",
  "key16": "4Vi289Enj2myH9yaUDQH7Vu8YA9DaYf3gqkfstRfYFiYJzmNUaEmng4PPtFdChF4Jz89xVLrH6p5YSXaWWhagc9s",
  "key17": "2FhU4iAS8ijsqP8Vx1Mx5hF1MHhvDa7EfGTZ9gEspKTUazo9oQueXE2VjGxnfX36mYThjrNtWzuFVmo5CfUUR2oU",
  "key18": "3pCPvkw8fxkAPJeKVpCitjBBxvnGxrv9h6ZWVuZg8kAvutL3gSH9YguvSbdbwG13uAznSAfELo2LQuesk4WfC27a",
  "key19": "4J3QtgEwEUzkAjCAPyJTERpNy33kTnb5JUoMZfkXpdNKTD7M6ZJw5sApcbyLxhqwccq2K1dBnZeiP6CcVcXJzNPU",
  "key20": "2SbTucBtcitsp4XZDrBmre7bYVaRsr1uvccpAxyYopGddS48n4xdaMYNrH39WfhjyA7hrGAtXmqhV2gtqBK715bD",
  "key21": "5YZ2x2ypG3khA7Tm1ZtvqU8nVrSkhPf1qL1qHG6LD5pNdzGD2Cree1zfYnBCg4TmVepNkxt6UimYnXhgtrpHNt4u",
  "key22": "MJQqvuMFQCpD832BUucrDZ4oV2qnRTGVM5LutizkDeVQwFs79wjCKg7BFws3kBmn63PUDdXRgDt763buZPsjNBn",
  "key23": "5bSNuBGqa3W2jmxNV1AXVzQVFW5NMNAhmiM8MgUogBfLg6fDoQzx2oo4x8vS4ofHem5q3Hm3B8xsx2QMA9KxPJ4n",
  "key24": "2eHQX2Cb6awQPVEx9iMuuQf49s4bVnU8GPVrk65bh5Ge7fXbzadhhkCcNMynMMokpjSgp1P12sXV9Pj76XBVXU1D",
  "key25": "3mktbwtiFfNGMkf8YMVJNQDaK6n4MatBzdWCvRtTD9oxztrJJK6cTJYMw9mamXgEosh1YYAcbLY1cgmbuhpWK6Q9",
  "key26": "mCeu2p7NK1jPzLvnNxoCuk3fmYEcHPdMu9de1wjnDvthrg2367cADWxar7HWdEENFUUH9pFmLh16o8PJZ6hsZE8",
  "key27": "4sg8i1D42jTG2KfaUR6T3YPzeMUiENeDiyT4uZHp83mSvLcNbmNCckYXb3oZmUDtpQuY4PBsQdLoZLbQf9ZJgqss",
  "key28": "2kMHoZVHVz6fip99xkEmkmujBhdGMTwAUTvsoiyx4eRovd4j8rKDekgHwh2xPEARwGsRT8qE97WzFCvLtNiKhfQY",
  "key29": "X6BtwkwDTMujjNvmZvx51FUx4cjVzDgma3pgPsHKkvmVLna7CDr9FLY8eAAnMoVfrJjo2N4mxpVPhWcg37jtmH9",
  "key30": "4ojYQvZmo4kMoY28TUnwmSxKtX5s5mgFiuBN3NcC4msRBDVPSCUVPjS8zYqbEbv5zV91Xz4stjorKUtnnNJhQ7R6",
  "key31": "3rywNvsCqj44JtfXrxvAm1UcmEUARK6yMZopm1Ryf9X4MXq7pBNAyx9qFBtoZghqtCEmkdsfnjBkSZuPyfS7BjxS",
  "key32": "5kWpgp3L1QSPrbUB5SAoEtsH3aYyVSYM5T6wz7ZXi1pwwLoX8JKHQsyXJmMLkXBkR1mu2cFFbnM6CbTVA6nuL7FQ",
  "key33": "3fd9jzHEFEu5ZPU3MRe7BUgByJEAezZkGmuVZVKEQuquQxqzbHn6qZUnGDifBu2Wg94paqAy9xd18jpuVUETvM46",
  "key34": "sbKJeXuvNftjJjL9ESaYQJ9PCjsURk3ovaN8wiho3uaC9y8WuK5K9v1QfgtLdpX3yexJCtVR2PVaxVRtuyGRxEj",
  "key35": "hJTDJhybvdVbnUt8wL9QZZuimYmic2fSJo3b9abe7NW5upGq38b1T7TPEfoNUtj9KHNavvDEuc78gCeZRHWscKz",
  "key36": "5oo91BsPZB3P3sTaqeHCzfJ2JUUpjadF6652ehNqqHh8vUcjTwtDpLTcXz3zhSMYpLcnitugbrTopMwCXcRbDe8",
  "key37": "2yKX2KHzSEmj4EyEnT8bzEiCAKi3KmqW51zEarwuv2jaqRM9Timn1H1LECXzEmy7iXqXQPbECK8Y3VTCGP3WkfyB",
  "key38": "2C82NBCi43mcVDpwyJGjXdT8McxyyGcifUeBkq4pgHwD1QRjGQgf1A32n4jDk5CFvGKoFc512UDvjRMLi476QgZc"
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
