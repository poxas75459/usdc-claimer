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
    "3Rr43zLA76pB3oPymYn3N6xmWa1b73hVi37Lpkv42G1cw4h2zYJ8B2e3t3Y9kwD6mtjN38PHK4N5sgsupQHo1q7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjN8GdAyfUqPpZwDeyTbFKosPnHDdbUBiv89x97iSxyU3BytWbdnAKPAEBMEQdU4VDskTjjEbDpWp7AWATZQkuK",
  "key1": "4jHNkHZU2DWDWzB2G9Fz2XCEeF9rHgf6C2gWYRqCHRAYFyxuUMcDhwHAz1vR1EVLca5u3VCuGsRnVzLrwENA6wNW",
  "key2": "3dnWpRMcWs9dTUhrvkZnUnS4uyEuE8cDHofWDnWM3SKNtTi2pcgqjZfFztcpvUiSJewMwjFMLsHvY8KFGYX423N4",
  "key3": "8bB2rMYPAMmuafNaCsNZYfz1d9wuSTWjyRvpdRJFDLjHQJ4ndKdzWMLvrha3sRi4EmmgXrm2t73eszx45afvLKm",
  "key4": "5imCSzDPDsV8peaXXqrfCCDVa61Azo3Wn511nFvgWmiC6SLHz4F9jRUDcnj5rM3jzPeokU5rx4xA9tXqU3KcFnrD",
  "key5": "gMNPvzdUML35mNfFTvPXnkgHcyt4yAxsagvQzh9TTorTJwNyBaxwtEUXMGqdrcjT2d3p1nAqexu1uV99o6Puh1M",
  "key6": "5mXgYGHQWDwPiBNpJygDJVFH3J4b6FGgJyyueFshjeMHe9PyhSqeDuBnKaasQXmYFJBjb9uQFQRPZApgwekN28tT",
  "key7": "48x2BtZE7RqBJRzGy4GCJhaC5mt4LUXEt3vMdxxe8fPD2V6WF3UHLroP5nRPk5YXS1nM11jLm8aXs8qhZybedRBJ",
  "key8": "H2Kb8QDqHteXqqJCs5jrZY24Hqc2qyVBCdcBCNnnrYhBDVh7tyfd4xx4HAVX9dboxMQq3xFoxqr3oU9cHfqJ5bB",
  "key9": "3TVz9miT8mJYophuy7cYExmPCr1gDeeZj2Tbk64e6uJdDDKxJDsZ7DAoufSQnevCkweuxHpTfF441WxZH6ZbEFJW",
  "key10": "3LDFtffpZPSFHwP66hqPXDj5kcJyimkeNkW1CW5Pg1ScAk9YKtg8hVCC2n6RAV7dcN8kFRxM8ejvcYYRCC6dGX9x",
  "key11": "ZJGiEESkceb5FdqAuvSnUTkNZzpP1JjW5HT8wzm1txgvLTjAgPfsG1qAzdnFqM2vr83T8L9Va2gaWGcouFZBCY4",
  "key12": "5MKVqubNnHG8BCqWCfVQ5GSiNVdV42xCkNEZYRbMbNxHJn418RfiZTRdpbxME3fJ5xumd5vpFARFiaCDWxPe8QWL",
  "key13": "24MQYJMG5c7bRyJd62iz3eZRwKDERk4xiqD22rwLxqcWLpdqRbX8woe1MFLDWQWE5CZt8cGiq1LHBLZG4F4jAPbm",
  "key14": "2yRy3gAwwJL5Qe5KWxQh4AZfgbH4s7qQGBHZmQYTSsPAgpH2VC196oWAaf2fHVGQCnYbLZriwUQuY4EgsLSXtBaW",
  "key15": "Ub3vKRm3TkJ2WTcvbVLPrsEq1YUrJpg5G91CEXRdd1WXJxiuNcM8CWjGPLmCxEWjYs3KDeWLWoJMW5gmpcWVs2S",
  "key16": "24zBwN6wsmkmXmkL1kmyTxYmibpEjPvaverMjH1STsBKpNEVvA8rhcA9buMNsFbRe1UR9JGeo2Y88rrbHdfQoZ2Q",
  "key17": "2mxYzewuszbELhCr8ubEqYr4sBhJmuwtUFawav1PnH79Ftqy6hrf2P5MVzztNofFLiZz2AZKH3p9Z4Mp9PgfvQCL",
  "key18": "55wx6XAdagVfRxx3o8TCAHXNHDc7GLVtojnCL5j12sFpQFToPwFViRYuZEzXnmn8jJB6Jb1hiuprhS829SXoBXrF",
  "key19": "jPML9zjDzndyJDL7iFJFyzkvx8DfqfubS5RwZjbhFPuJerQE9B6sQFBZKcNitSbxSCF9aXvzefdgSoSRdGL4PfX",
  "key20": "471oxarvHmwz1jaJevnBuKzdsGabcwuSsPryTfc6VFvJGCfNztUP1dAC4ixouhmJHWZaM8w8GTa9R6ecYM18WsoQ",
  "key21": "4FFyf3MmkRzafyWdEpWu6LWc2RF8dVdzd5rF65SPzucP5aeWuWTejj9NnUMFaArhmbKnThGVP6Rq5NEi8Euxe2hW",
  "key22": "4xkw2kkMKD7iBgbmeG9bWH5tztrtX2xauioC9g3ZM7UvYcn468BDp8xn8ufc81dyLvLhMW338jBJ9WzXQZ7KkG8y",
  "key23": "239VPMcinEh22ki9hfbAJGsC9iDohS1GthRrTy1qXVeXtESVgnGJKqmk4QDZtaQeUKr5wNa2pYJHGum8vHuUjTVW",
  "key24": "52uMpu7wYwhy3wizyrtexsvgDfQo2dJ8tK7485qVGD9frYn6DRoKwQJkAWxbvLGCJFE94VNsyjFAg6ZkViUePz1F",
  "key25": "3fngLAfhkYafGvLY2GFVyy62fGQLnfFvgtFcfNqfauwcR9u9UDrt5nxxEddWDUoj6ckYpGPoSUeT2u3kN4M5kvuP",
  "key26": "2nxGcvLahi1mP6g32xxGVKCVWUs3bn882SkNeZ1izRKrTjejQbbjPwtGRmFWT1aLnSrP5KtHJnhxBPSm6HbnAjUE",
  "key27": "41eZeAH62N5eDMLikS36snvVKgXPTuxt3GwPxYCQjKrZwSErsq4HFFug1X8aDjqATohPpMfKzDVscqReddNUKQwv",
  "key28": "2QYrkTsGkyn5iK4YwgqE7shFN95GK583sMk1DjHZGuJSr73KT5Kyb7KQnk5hg3GAjPsL92whgZgH2J9T8fMLPapc",
  "key29": "4ZHe1jG3gAByUErgkcjLQJw45zjLukC29k7V9NjFAsHVnsSdtgCEQzcYRjRhNZY1xrMqQoM1BYPTChmgDtXe8TdH",
  "key30": "4xLPvAGE9mvDq5jN8KRjjWjrw2KWNvFaNpoycQP37XJ3r1hMeyr5dqKgx96Yv1aRbzQCm3s4pQ4yQheRjDvwy3Vm",
  "key31": "4MYNU3aAtgTARUxCozVWxMwsUvgDyT9vxPpJMRuGmHRe4ySKsQppytvCfCf28yqbup7BYqM1YUuxtYqfRQzDH3Bs",
  "key32": "6bxWNAwWkbymiyTVkJL3JnrrkwdKrAKkL1JFX5wYHQkfH654nzPVNNvKEUvWt2euy2BifsJYnw77sv1L43YyQd4",
  "key33": "5oC8hp7scRQxfU2bNB39m6pmhazdvTd1qGE4smQADDqqn6ry7BpFAowohJ42LYYpEbMHAaQU3ooMA1W1rgndevkd",
  "key34": "VJGazafmsfE2SrWBAzJsxvDmiDhoAbMcSdCAqvNGmEVZ1Zy6Yjc3jY6UGd5Gf6ANAGXMqD9f8DX6VHwcMaL5vxh",
  "key35": "3Lzy77131hshdp3bDQH5ct4THEZVQG2xFBtWXMvwTKXK5U2Dj1fzg8FF6UENwTnYuDLJhKeGM5GPUSTXxsbuPExP",
  "key36": "61Qm4ardnuKDjBatv4aNqCuKZFisHu2xEw1JtAnDFWze78vdRiR6rEWwUKXjFNNTQ1zx2neYnvT7VTgQuqvezPFn",
  "key37": "2SRbRZviidpiW7bBQzYcQvzKq6em74NTG9ToikKAeNRw93A8usV9hHHnvHyE1swn4ronBMtD1rxFZQd6fy5udFj"
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
