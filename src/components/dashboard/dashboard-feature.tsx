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
    "5CYJApFRcjkALU79WL7eNKdNLn6pss7skRThGmufJDqYq1rDFFF3e9LYkBTGjU9pGVMLnyDn5cuKoUkRXBxyWWpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyvHoRUYM7rymdGEbndi7HH9R9xs2HKSRznUrfsGJSDXq1ETAb1Ljjk6s18a3Pw5ELY4WXMTafNnY2TX7HrMgWS",
  "key1": "3wy7ZGqDmpwen3HKkwixv7E8jF8VfzzCYjxr3UrXgr2tj8svcsehZR1oodZ17kwTEUKQkimMZzMGMe6yz8hn3CX",
  "key2": "3Q7wcqQfUkMHsmgiyfeQXUiemE5j3df9aC2W9ETnJbxcixRVj7Hx5H2gQqXNp4YEfkZgtYq9VFU6MUpaG7fJ14WA",
  "key3": "66UnyrWs8ufqudK9GpLkHMbp3rnKE15v3X8snvXd2DQj1Q8jmN4mtqSgNLx5gAATshWWzJvEiKUwiy52iqdCNgTd",
  "key4": "4meUhPgce2nLVd366TSvTkMf71nriGopWLYkRi3fE9N3P8PpSJpzUwK2eKNYrhCH5jhci7R8XfQQ5AGJgaVDLZs9",
  "key5": "2U1sc3ryZLNb6JfVj7obxqnEAjnFExegKZ9kaMGaN6Bm9FNNwSYRY4czensXj1hzfm9JYYZ8GXvDYiF9jatG7Y7U",
  "key6": "5eondvfpKSw86aEATqLzVqouHESAQ61DejwKi3GLnPquaUHiFXAie86MZtUjdTpVM784Z1gnA8fd4Ms6tEXAdscZ",
  "key7": "4tL1pwRJbYKKoAqi78kpRxnJF7AUtnV6K5uiSfgU9hSPigSPDonVGVhhh1dW2b37cEw2YgYmQ9iSk4ebxH2pAte7",
  "key8": "Fdg2kZ6DXibEEC9Ra8yJsaxFvpQZuBxNhURJJZR89EzmKPFJ99fMwxpDsnQtGXHysX6sTq9wWjDCHucLRu9dak2",
  "key9": "Ntp6gbZgtzJ7p4EA3X6NVzR4EtEePSNKF2GMXoMiLHoqpLcr3h6MicdzZHoci2Cebfijuhe8y4qSvJRfFNjdv2d",
  "key10": "65YnuyTA7fNqRfkLhHa6KLVrsPgFhVDDBGUGLEAYoDbhhre5Rv9xAyCgGUvbJBzqFFx8E3j5ae7MXY21XYrkGm1G",
  "key11": "2DVcsRDBho3jRceFLpfGLdZ4CXDyrb12LqMeu4qtfz6fZfXt1ohcPy2iERFRWVYhCCL3sAtiEYHY6nMp17pgRXvm",
  "key12": "3y1iGBFZ2kVsMjh2RrnuHNAmEonykKJRTU5d8iRnsvPrr7fRJXXq2KLgJgBMW2CEWBB47rATtiiA15PS1w3Sp3hD",
  "key13": "5SmXAkjoE2t5yEpcqRdmyEcD2UodiaB78g5kKckTWq1EBZYVwacrcsnDNKcg7KwkE9iV7HMZLWs7SLoe96cjTKaL",
  "key14": "3kFQSzMYAnrEV9xvNQVGVXDqpWywgkbd26k4RZdUJ2xmGXHMW3j5Qq5zxBkwqxkWTf4N7ctSC6yth66LHwhAYtzP",
  "key15": "4WsFDvWdA5ZSqdfFSUsHqTkgKRP16vTZJkJ8rcHZTqKJkXerFhjSstUDYMHub68fQmick7Dj85RNtcHsBeeubcuB",
  "key16": "4mBwFHgznub2i6HbNo7pbfsd8ypsDH7poc1Rasy3i4y5gDkb2idZS8Lyctt7eLbho4hsAxXjt8Ns36Yj8rM7JBer",
  "key17": "CXZbzmsomA3JZKfoW8C64A2RSLkmh3zBzYqpNJSWbtoeB9vdqk3DHCQmU1ahf4WwZES4dNUyGVT2X7p4T2seQuP",
  "key18": "24LFr9DMF5eH48onn3fLSSsRL3A558PVSdNC3gLEChsvQtersw1152Bo48tpcq56FKC7hiL7QWTUzu1jgMFpWfVt",
  "key19": "3hFmCEAwVgSDgHnX6x3xhJo9bUj1v2BN7Mc4cEy7AxWFUN27LUpNbB2jkLYy56Gcrv7r6truZCfVsAP6eQQ5Ug4G",
  "key20": "3EmgbNXWMDtTQyofdSbMN6GzTVFKiBnUazmnFbMeCS598xXPTXnPGBDz42dzMMPDhLDaUH7v6HvWFDQytid1z7xt",
  "key21": "4ZPHmLFQxzSzvkznQ2Mo4X3XbXsVf5VLaTaxrtascTorPFPo8ARyWFkpGcVKZMRbWrZf614bgEUdB2SdveZQkZ6X",
  "key22": "3DS8e9NZ55BbzfN6g76SJfTkFRNn7ytetXMcCyqeo6oXcXKRWrDe9bsjqWxqYswnSR4yoCEht8TRWAtSFfbfJXRs",
  "key23": "4V7FuuxXdrJJ57t7PgdSTb1xWG4YY6a83S7K7Uw4UxhDMwQXkDfyswkJxphWnkHMEQiQkTRiSzmvhL3rUwh5C472",
  "key24": "5SKNB72wByu3hA3aAR2WoFDNq2JR56U4B121Q8JshPJuxDeDTJYPQmNGgo7KzuywKz4URatMpw2y49qzw1NoNsCM",
  "key25": "46Bk1MyLB41FpCNiKgyykH9aDV7yhBMpagUGfu5G5vxcLd9Sk53LisJo6GPv5EDra22AJU2LvDKPcSwbZGStTbvr",
  "key26": "4XF2r6THVk3kpoX4E7GuBz8AV9QeXPQzbLThxfV9EqTMnjepsj8yk14i9ZtFLst5dsNm3Tn6sG3jnHN6Dsc5v8uL",
  "key27": "25viU9vqmgVjuYdF39723o78Nsv1iCKgE5TrQrvaeYawFoDvFsMEAdziz81cNDMYHHoMDxptHZp4MBXo6bjxx1fX",
  "key28": "daHt3FA6Ms9g9AbpTyEs7WXnT5kHonVhEZR2ckkxMri27N9yvpabyWaRGQ5bMz4Z9CvY52ZMafQyUhBu28zeqRb",
  "key29": "49zH4WQo33B1TNS8s2zCSjWJ15nn6TWg2o1LDNBRhxjNZ5otCDJinYuKfnBsoj4qQPA5NR4EmEjH9KsSeQG2ixWF",
  "key30": "3BSSAeZFkGcHPLrTymYj2jRQS1rapX7KU3sgtfUnc6hH7oKc1U4T3UbhFmB1JuYKLiQ5qqtq3BQZQgAqcmdnKnaM",
  "key31": "64RrizvivmmqETddfhBc81bnEHgDXhgcggCPQZPJAx4Y6Bt3Uw3AhXzuTjD8LLigLzFHscsRysR8LuheSFcbsuv8",
  "key32": "3FbRumATWZqyswzni6QgQvHEYrVM7UYFTE3QCJaQ2E3ZjwPznLBZBBjXHAXpFEWyfuB2Lz9EfUWy3G9RTBMZEPKZ",
  "key33": "2f6gMzKhq57HTpWoUhB7nK2kprPWsnMFUf9yqyNVJateg6gKBprFZ9DFR3ymSdDuCfnJiqzj7dvCVmHC2ovYB2LY",
  "key34": "27uj8iP2YuWusRaAKZKgGLn5xZ5fXVsdoPrxLvEbyryzKkfmDHseJCLWuVB7Ue6z7hduoTCgXCfHXGZE9ncX2kuF",
  "key35": "2c5SbqXk2Gat3Gv3FnEpYFEKNiSNqm1qDdeaWBn6C6hzXLjTkF2wzU91yc9LJZWeoMBafCPDsXU2rhX46ig2dVhE",
  "key36": "5x3YD5u5nr1jwDycR3kEqUggjudAkgYS9S91xveWnkLafu4jPkkoaVsZnGmk3xx2ugWus4WSrg8rHys7ExhJJk4m",
  "key37": "3QVTLnRZRq7Jti79xFHnaY9H3jt9GJV9NFBSgrERTj9dA6cMGeJyFHt3oC3WcFxSMH5Rj85w9jpLKHtb5srbnatT",
  "key38": "56xwUvLFrWpBUrKTPTjyKNjif1DoYC3yM9KZpLCdVFZCJrh6MLxyXgnjXbNFKrXqJAD1s2iDyd2NEEtfpUjLx12G",
  "key39": "5Cgh5qYvuQgr3fYtzUTsp51MrDwxcVZMD4NsracYcD8wqGwrAVcDq9MpJHo7cyokWG6Q3MBp5xhrAhwuuDjT2BbJ",
  "key40": "2Dp5Ebe8wjUfj8VmXd6T9z5pfx7ZnTyFT3Re3zbMGvJQws8RJ1iAndRZCCHpfYPPKdFL9cyFaaiDwKqERJARsfnq",
  "key41": "431kYDJ24L2n61VM5xsUDuwoggxGbAebJMsnXCDpPHTQ1gMNAtf7G2KdKUVHn5NyybdWN9nBmZijgMhS9BtukZYa",
  "key42": "wsm4f7RDo3wofKdXwJgXD4FXXL23yuJJD5kvvTAVA4n4fg1WXB997WVGytMt32iyzsJjxowjpqKUKyyBBv3hEDH",
  "key43": "2iiBUxL28UiGk6tdWZbPjSx3txa1esUVQWprMN8YntU9vWQr1rX5gZT1SwWcg7Y4uF2THK2TVYjKANi9wsvRuB77",
  "key44": "5FFZat7zBgktqWEsEaDxtpvxbkvMjpDxGZnqQfFy2h9FEMJ25Tao9MBMute757GWFKzpoHbC54uczRJhhKCXNb3P"
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
