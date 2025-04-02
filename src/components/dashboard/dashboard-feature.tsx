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
    "6m8mc8g4bJoM15K4eeLapk6WWCKPe7dREy5H39d5V2W9EXEds7k6Jr5cPb1RxibJetMFBu6uD2SQAL9TmLyRfkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBemAs3WWZ3ydBcTYCJhLwBK8dAYbN6LF8EA5kzUJPpjRCkxZF92piAMM3t8ituHbdM4y11C1QKpJyQW2N5MvBn",
  "key1": "5EKQSkfxMtSAD8vFwi4AMYMMPvkbc2mDFSfwV82Qn3hahakBBCrxG55FmbA6QHzU1riTj4tScdYzGJLorj2dkH9x",
  "key2": "42kuyuxW1AVYyaw7mjeBbdY4k8kjrZPRuUrBfsgwt4PpiUUFAah2JhmAYNbmsoSRovNKW3mussQTXXazonFwopD2",
  "key3": "2nqdQJjPksmx3yywGpwfREAesmQpEUz5ME1FPrf8uCNafU11tAPiRGbe3WPi7CC9K3aQYdaiEV13S5uKyx9KMVKA",
  "key4": "5ZWHBfEMHbF6N58bGSHn2eny2KScfw3uHKs1MzrF9YPpfeXXSAYRyFDLJ1cdUKRkU8mqvmVNBP53Qm6pTFs5u9qY",
  "key5": "3TovDKMFjoiU7K2Gksp4KgSY28HudHz8JXZzo9Hu3YsWTK8yGdKvCsGCmFnFsf76zN3iBhxGFreCHQoUah8XCiaK",
  "key6": "66ESQYFJziDhseqfDgtwCAanWwhWHwsKLCDTZc4be69VQs8mrGGsNz1C98hjwEsrMRTFXafGDpXMiHdvnjPVBuVf",
  "key7": "5M735aFL5ieGuJiNaAj1RqeRnhqNJz5v7YQYMXShhoT96LcQ7TEdxgdH4o47aFxSFnicLKy9bqzA62JuMRaw5GaS",
  "key8": "mGadhJE9SsuAo6MvNf69UnT3DWqs6wd5khNAZtDS7QQ9HqbmWYQCqkEVXTUgewXri86CHXECn3Lq9eMMQ6K1yFu",
  "key9": "2RyNB4hV4QkXLxWcj17YHPsWz3qjPVEw45ejx9X8DXCoWPP9PEmF45vzodsUqX1SBPhteSj5vWbtKBD1aAYuCidu",
  "key10": "2QGd6iGSXLVqTMAtgs22MMJ7QZxCYcNciE77gUDk2h19EFwVVDBqnuTbiJb2JRLTCByxkM7tgKBBQqEzndtFKnWB",
  "key11": "3jThxQvCdsbeecAFRErzb3zrQasJQdFcxtc8oYRTDWEMffE6NPX8VoPxXdWUnxyWgxH82y41HHcaHY97BV73cWZq",
  "key12": "3q3CwBtebR5hZce7ARBy2jWi2bRSwR7roSzaHHes4jiF4taBbntk3qr8Lo51ZKXVAFuGGhNH316LFhGXGxMHfReZ",
  "key13": "rRqcW7MiRpDLC1YvpNDsSDM6sHRRGQpMyEchuk3SpBU7iGMxLxnbWwYRTcdRzbmMigK21ZteLcME6yFjicGhMyQ",
  "key14": "5YavohNnn7SE9WHbvmZCBWDoDqrps6KvWaVFVcPpw4AUbthkT18xGsUHQJVPKZdNAFahEbeVsJqdpvxmhuKUD3AR",
  "key15": "232PxfUmuQaA7Zb8kEXucXiszgKXL2iME9fhaJ6WecNBKSCHnsj3cBg4bjtcrsGgYcKLuTuAvmevTgMAkGoXk4MQ",
  "key16": "GhWznWCUYkCUjRH7WSvfsB8RE8u9QPKCjNycatZGYoTjGuFPpCa6yTbE9PWzdCptv4NFjFFGoYh2KAQrtdu1G16",
  "key17": "4zcgcrzzYY8dnk3qBc8E4caFHrbw51WuY54ePMeKeXC1C2zeUM824JL9mPkRoqX5wyYMT4Vpz7tNTiwVSbphBC6S",
  "key18": "2NwLGZeZv59oowJHbqTEx8UNmksMjgD7pvjAWCRJQ5sdAgcRNNP7UXJVun24tL6UzAnV7876L11zXV37aN6WPx3",
  "key19": "RSfiJkVfMj41uBhR71PW4k1oXCh3mQ7R1dQNEZYPBpzCxvqWYTBuNLEMthmTeGrxy4tv4bVuEgaciFN5kq4Fi64",
  "key20": "38SKm5u5Q7iR72mp6Ex4jEf7bHqjH1nahXirg5gv9u2hJsTHtPgkhTyJHsmnzdQycxeKSeSy3nCNo9Lyk8BPGEG3",
  "key21": "4jneBAPKePYSKh9FzrvqZJSnub383dVZWP9bYG6NjQ7yjD5tszVurvivet8rytj6d1q7Bdp22nUH7ikPQDDxChM1",
  "key22": "3sKRTX4hbQUgsfnHh51yEbggmUELarouwWR9k35Jkt4YmULRAsjCngQYwGfzNJz2YUwTu2us3TMVKswXc7oDdspF",
  "key23": "3JfhKa31jELFRWdzbEbvhyMw2u1Rmyu4aBwnD9PVhxsA6VEU2fKVCfVJQYxceHu2A2X4fq3i5GEAZAjFJgpJzSPy",
  "key24": "3fnymx2bSyAgH8VN4uAqpCTRLbf8VN9Sv8kytuLGykCn9oKjNkoRGHX1VfERf63YrbtmzzQQtHupYFJ455R3xx4e",
  "key25": "5qgwL6dyHwSjSSzqZzetxbDJ4eSNqnHHvCtKAVS7A5168fmNR1G53gT9QvWfNqMg3teHPjngKmqh65TgtVvke7XX",
  "key26": "2nNaiYAR4x996rcUehYsoPejSgP6Qtm5855TreBX1HqQRd35XFgsPE5di1gZDuPTCFwWru2SiCn4WvC4DWTdugxw",
  "key27": "cUXzwq7fCsff1t6ac9x715AD7DRvyvtJswP9RFP4gRe1vFL7Kic5rLytVBc6jn4NNB1fHDVnNZpTkx1TNQjk68c",
  "key28": "4ysnbNt9nZ3YuJrnMET8xz9KAdM7pKqNiMkwHGvv3SV4hAV6kNmaRvEwfgiYa5EFLSfU36mw8WbMfvZxf86X1kbt",
  "key29": "qEKBb8EAiRbdYRtYZLnH8GkGLhCphsHh3BCV5FvszotiQPPckmUr1ETR8QKJjduKcxrTKB2nyk9mFqFiffcEm1k",
  "key30": "o1R4E9vCqnt95bgLoMR8AgaWkTJ78zogbVE4uBjZ6LcNxWSbgRYkHBjYnn2xWw8oEEe6xGbYpk14Mxqtos1qhWT",
  "key31": "67NvGdTjkoHbzoibmFMdzoWm4fWZ2uqTaowgXG6jGYcqYwBytmMt636PU4s18dTSKN3KN9wcYSJfdZ2uB6EjcFkd",
  "key32": "2Z62k33pYm9jacKNE8Kh8nG3uiMiuT3oVdRGg9T42qa8G9FQuxJTS92LV1SZtewaJXJtJGxVCch11Hq793kmhA7B",
  "key33": "65yzc6G2qELRGvQsBLq6tYks1NjZxawaugvrarefkvJ9rC1Rnivv92ibeXwiPhWSrPF6XJCAma7fRwnrqA4rvNKy",
  "key34": "2n7mjNo2Rf1C16hzFZcdYyHiyeA5hrgv1Ep7KPxJyWV6765B6wFzaQiL9MYEL1JHTrMrmW1pdrBMsmLqPGqebkug"
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
