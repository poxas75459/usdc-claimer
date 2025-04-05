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
    "2Gv6vUMPUV3FieEyRXuLix25PDptbwMGgjMNHqhfVJ7AZs8MZRrWmNFgu2rR2mb6rApw7XWKhwiRsCF6p5sv6Frx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mgp2V93uY8cPATFzQJiXA8uB5p1hoQHvBs8Ct6nbKmwicA2ryhZ2of5rFPYTzmZX1ppdjqsJ4d6gz8YmHeKymgm",
  "key1": "2dZFcBno7ZKKkZxTZZtdaeDk8frSKa4xWyJ8kyLe9tEgJJ7m8r64bRMjsfmdTxUwSxwjntkagn29sG4FhJCib3t",
  "key2": "5ZKmRbshUP2MQd1533MucVgEGjkcomJKz3uEvGdzXosrcGhVaSfxPG2VAq6E3RgFiHDa1V13B1Kdae1YzvoS3kUC",
  "key3": "5wYUfrSGoSCUZDHzZwE2QbVitpmAU27VVmnTVZctHWsuiJUrAXPigksDJVu2tErP17vJuANUHKdbS7eJKZqk5RrG",
  "key4": "rDvkU9GEubCXt3ZjuHNDprWHxCaaVfjyWVunbZAe5aMdmimtt2ibSQbg4vDW4bBsjt7iKmqLKgyLYxUz4AqcXn9",
  "key5": "64SRHdjoa4cpsYv38Zx8gFXvvmgpcRBRpYvP6cJKncDTQYBD4RMSfRjkE1vtDzcbVXR8T3AL4y6FXszEjBTTca31",
  "key6": "5EzBeAoPoW9iyUshY1rtvwqndiHy73tAYwHTjV4NkMTSE2ySuf83i8WPtmQjgzRvpYYJrMWFAxQj2siStqRgSHLJ",
  "key7": "4CxkcQeGWMAhfq17ehUf5sX1pwjH9ng1BDFpeTkyNYHngNgSmUT3VAyUGbapMhmcJXP7GB8XBvZCuDNRWD7BJoaF",
  "key8": "2hkFH4ZtKUf2az7YwX5w5Z67RfEdrSHTJZyp2NBb65RUsmc9Nicr9boovBJkivFWL6XDi8E19nkzoQv7FV1dWVK",
  "key9": "595GYJQUR5t4gTFcBezdiDvsxPkwVqKbVskdGX7ujcL4oVNsoBrhKGvocBgrLZyvy42vaUWsysj4euqeBNccoUin",
  "key10": "2CzkC7Tpm1dHuS6cPpyEMaXmuF6DhZkxZeQ2V6H3tHVm9AG17iW4hLgWya2BuRwdkpjZgroYaW2gGAdg8qXbys6a",
  "key11": "4thizRZYGXrKsao9xUZbVQ6VWDF7jKsm7EwXeniysHxvHWJCy2TabKgWstDkWDrAgyLqAmUgVM67YhDygVs9NXCM",
  "key12": "2CKBY7jdwg59B1XjB2ufQ1oZUgH157RacqHgTWn2M7iT9WZ7rZdzz2WwBKwaQNHSB2Jh1BahspDpkopGmhJL8GWB",
  "key13": "5Gvg77N5ZkPyGczDJwoGNGeJ5QH2pVjkJdVsxFepYijieGV2HwnfNGYKw4qz62dRDUVWweyfzSpHgJ7jAzkuu2k2",
  "key14": "5dUPyUkFZrJaPNTVX97qgpeKirz5EuACr4NJRtf4APveXW1dABzRE8YRK89x84bWS8GG2U59iThTVcp9mtCmBrid",
  "key15": "5qktBD25Fvc6RpWwpGWj3hGYYGWiYK2h6SvgLCJwfh1QkhvcGovoeEa2RdfpcrqNrMKwMurL7FLxH4Wv7eqgA81u",
  "key16": "5SJyPtr6NfKmNneWb3v6CTmqmmSMPp4jspCNYu1WeNDwccYWTCghUbRYpbX49bUBeowHwBQdKyXCXoEebBxG5uix",
  "key17": "5DQ1yR1bokoHBZXMBYMAPvjTyuWYeSCi1VcWML5myjGETYiuRgZSogjxUJ7VmMFLcLGHdQxj2R1gzH4EDK7dZnbE",
  "key18": "3KBRdcJXt81NQ4V54inh4uTimim3sCDWJwUruQdR484NAWJy4eEk4zAHVcUKejUY2cVsCrHSxraZ3DxpEZUangW4",
  "key19": "3SC9rdaPs8uABq4oigUijZWinL1iQqoshV6zHFNUKGr1YENNGmVBTo5QWEZGyqxYy3zwWCuTubHA45Z5d7S1sWu8",
  "key20": "5xBqXcNaYB34NEzaSjnBmG1ZXSBum7CP14Fgz7zsSLTF4tZGHxWaLWjEd5SfmK6PkvWoqFX3t9y9TVMz36nEQw8a",
  "key21": "2jukJCNAbH8JygmmNoKNgnT7VQjeWf1XMrBrdLgmzD6WUUGFzF7pjd6hwXemYSEDjmwPP5DkrHTWz6wWcymm1im8",
  "key22": "2g8SUH4Uok7rQxgxEVuqaw4iKmXUPrWmLXKhWbLfv1yHNenK49DaYivJeJh5vZynxyKr8Wm5yzxJXNiHUk2Lu3iT",
  "key23": "5DhdxnUfaxkMKq4Q22grjxcoECFTTtCWaheHo8xCp42YYPYnoK56DeeLojFgKUESuWyBc6YmTQbWVr4C51f5CMGm",
  "key24": "3i4HPES1Qd93HbjLbYU6uVoPrmu3bnULdHPG8yQJufsLZDTdksfFYySvuZoDxq4bJ3FMKntoK1FXCsDxyZoxPAeZ",
  "key25": "56ynBxXnKd72Csd5kj8FqE3GqeTMSCnA8ART3wyMA6SLWyYW1ysuhCi5D2EG4uXXrw6vX1QUfEYd6vFjBLdvoQKW",
  "key26": "qsBPC3roqRA156BxkBXMyNdPxgs9nHgsvNLfVgrpgryjCVYcB7uhYUEfJX9GNH71cs9A8bFcJ684B88HNsY92BF",
  "key27": "42RP8TgVVABoeAouewxzjvNyd7J26ZVbvmnF5S2VWxVgi2gv9KDbHL9VMmHJFAju7dQGgLmEC49JVZMyiYwdfPuT",
  "key28": "vqshPjrdv2LwVxKYouV35eNKcnCBHFCRGbEKkejLiZeQWXgDD4NLr9QR2u1d4xMmGyANkGqALU8UbMtWiCNLsde",
  "key29": "2NCpNkEhBPHrKooc57FvEvF91k3Jx2oauRXJKgD3UdxvYynWAet65i4QGrC1uDq19nqndHQm9pCMF4Xby8wvzwxK",
  "key30": "36cLCeRMor6zKHjqY73LoHxUGnqhUut8k8pb5eyp2ekvtWg7EVPHiJKV6N2bcG5pM4Q93Sk9mEaahhSZ3rm4B2jR",
  "key31": "56qWFzwnQnDAkyYK1mQBBbd6P2Nbf6hQvVG7VSq1WSWkd3pfJZ2NFPHp3vTSdUbupek6rw74T7JAQC9m1SB1DbjN",
  "key32": "4WBJC8XDpB2swZAgM9fkHZqaJFqkbseFhTiXaGbcJmSsTYkF6wWU8nYCJoeo2nm4p1wyKqXBWW5STJ8p97n3Q1JZ",
  "key33": "49sapJp9HcjJGrrTMdWEA2cnVm7jtj8rSqZsGSXpgkJ5i3V4HGUyFpqEpPjMgxtEtr9nJdKvLr1KKXL1S1RdVa5L",
  "key34": "3Xz4X1zmcw3DL5JX1h2woBNyJznjwnLmLUEpZrDrqYXUkUrKSKfjKxRq8nRyJ1NNhHLuh4fq9dejk3XWy8nc2Sio",
  "key35": "3BK594YYSjvztKZCWa3hK3LJk52d7T2PHuhGsuucxiQZShYsF6VfTJktHNgkdaa2uYhVPYdq2Zb3UrbtaDLQdusU"
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
