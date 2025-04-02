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
    "2gYZkhBUSZ8PqDT7973c4LDRRVCCCfM5V8xGxVjLKeZuQGZ1hUhPYXW8dRvbzHPKo8qSKqHDWDJ5sc2Z22Rn9n1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5HzUQXCbifQ23PWEXCuUdywDZxeDgRYxBazJRRcbkRkS2JuaYYkzsYfqo8JNmyU3p3Vmg7dNjgeP4yRgfMw5Y4",
  "key1": "n3RYpzfx72i8HZswxkgcbAvbkSnJKzfHjQpF41tFPFU8HzhQzTGEy9qMXXTQgdkFrMLN5nKZCYLVHX7zhXFotxH",
  "key2": "5gpbRgXeRLHzXLjR1dj3FoHhvdjVrWSqu66GHRbdrhXwYAjLqobhEzzRpVT8dpBjHMJcFVfvzNEcXJVnnzV1rUJv",
  "key3": "4P1jy2GxcPKTUC26dHMQzdwEyJHAbRC4LUGYxhk8s4dZ2EB2HLgBw279KyHXU28TgcYjuES8PJCjFkq1PMKksEkn",
  "key4": "3E2L98bsgRWMMXzqqH9VhENtrwUYMpAJesiKqZmkPag1oHMpHa4zo5LygMBRc7hgs4GZNcbDfJW8erGXhPFMz948",
  "key5": "oheMh3E55JHtVW4qinWFSmV8RYkLegZu6D4RbCmEVpRTEC9Y8hjP39BrfaZikgZes2wH1uxqL5d6nRmoJ84rBwj",
  "key6": "3rpoV9QsetWKm3xWrZeZYrFHZL9TFrpfUp3VBY1gLk9P1ZBTrRCFgvgmUMJwkCcg7ptdfQ9DSzx8g6amDNTRXCgk",
  "key7": "2NzoRq59bVjXQW7zaWHbX5HE6j7Ydc5CYQPakxHyRbtsSFpLakTDbmWRPs78HsMbXczBpHio5nr5Qn4VdehrWs6v",
  "key8": "hLWGZPAvBxQmaK3LdZQVrGKnV9e285rFfrb8TscAMbk9VX9ZyNBgWCuoTxLWqgnNrPhhGifSkwQaf3HA7ZUnMZ2",
  "key9": "2mwMcYyvT8SakxoUSoHd5v6qLic5Nta5th1nw9zsSEYC3xKR5DrdKko6Ao2suwP2mwANuiJTeufY1PfTKzJJJ3LR",
  "key10": "5UenYtwHzdQj5cVKKMyHtnQ3VwSRsweUPT3ZtgXi18iHUkL17nv1wBUWALB5tU6T8Dn7xjQo685ZrgmVW7EroV9G",
  "key11": "5PjJcpPKsjRsZeaxAagrdLrcHePvmvJHCVA827cf9LR5B4sSLpxampfyESjYh2sY2QoegfjXaNjQ9HtNbCWaRMVZ",
  "key12": "4g6rTRaMmeD8b5kLrYsmov1G2xFLR5NCeLLE9xZvrimnwHHSPVNcs91bvR3vHmZYr4qiXt47PpUqTwmtskbxEG2q",
  "key13": "A9PGE8v6LG6U4UWJ1bXHq83pGjwb28RPYWJcL1Z4gS6KkQjRMKL9kbyM7GJC68nweSKmVWLRquQJoHRunKAD92i",
  "key14": "35hc3aoDVmfX4ptf4KMVpTGqTGH2hi7YRp7wSRVvfd9ZqSng3wZ2qYq85ECt8fi16CF2Z84mmXptucovats8CbYm",
  "key15": "esyHv6b7joB8Jjps4EcGbC39Fm8FuTxbpzb4amGCFJo75YfFFx2CiMay9f5oGXMmyKm4kJmKg8cjrgHq8qxwiyN",
  "key16": "joY1MWqNUreNx8jHuawTWbpf7Ci7SHbNQT9YatMvHauVBPnXkeboHXWExhLY8v928wzpEvfvnFfhVoeFd29CLEB",
  "key17": "4T9QobTn8eMeeZW6Zmm998BSP3os3P5PeYZ5CiGeQ6fMvfZHDVYu1oq3S5BHeAeHYoDHGGm3s5dafCnZ84o7b51j",
  "key18": "5nC6XYXLXDcQwEtRVKMygoZbkcs8nkq4gWnpdqtso6YG5EErENxivubZcUeT9viER4RmdkToCpmjpKAEXnVAkLGn",
  "key19": "46o43k9LeeHgdxs3sJ8C1YHmtcc6k6mg6rzY9zxH5v5MTqSCCe6iP2orzQcRDgeZBTULSD9LMoeCNr6yCqZyrxW7",
  "key20": "4N9FT5nziYFfWSXiL54QgYZYr9VrosH1rEdgc7LPLk5pEqXKAKYNCcWPqfBJLr9EXhKk777CTgLMapbnQ8nzyfRf",
  "key21": "3QtScsDmwH2CoK3rD54BvjuLKtFE6rEKi67BFmoGPTf7hHGGZSndf3tqkcxnUr4CbkP8pCy3Y2vss2M8EkPQ2DkR",
  "key22": "4731LDVBByitA6U1zethnHLiJGH2XKDWAQ6fiRtvivLuoyyqCAkFaP6UoDSjfMvTYwT3bk7HHb7FknDLzWzeiz1S",
  "key23": "5kBHvvCAxxtNsJGVLYRCeo8EhPfahr2Wvd9s8wbzkAdXRCaoJCZLUwEkDWQ8tda5HQdvdqGr6BcTBCLAHfQ52rn7",
  "key24": "3jvVBtuvq6tC7JRVNvuoyvp4iATyoUpuZ9Eh61y5yvJVzyQtZZiheifoCP4LBUGRgoMRpHkfatCuUKgmaeHGKg7r",
  "key25": "FKxbf3Yq5Qq369yXgThdF3mkatXS4kp3ju6ZQAPgC7J5xWBL4LdR4JdRhNow2TBDdW2zk4UEYiS3jjL4HAhypiA",
  "key26": "3xB9dydaReeJx1vQiScXMEYKnjdFaQPhGJk4ptJ3pPTv9m8UXxim53HTXcqKo9k8HeSJsgei7C1Be95WdsuZZLE1",
  "key27": "4L1wHJ27S2qARbVRWTYmM4d5x6Zzsrvn6wwVSjvtVB6ZeY2K8m8rckfUx3XfY5hN1tve27fAwSvxz23rfXGdKPeB",
  "key28": "3DKAtLNPufCCRxV75eEm8UaUb6K7yYY8TS2w6eS14qwJ6fBg3YUJs33HjfPKJDCVR4dZWT7Tvz63qTRAmcLKcsKQ",
  "key29": "5PtTK967k8pZp11o2atCZqh1nKsNcvuGDbcZio1BUWLV9gdNAnMpp5uwLRSGaHvXU7ZetHMoXdokSdTFvj53ZaD8",
  "key30": "4JwHSV6nKWdNJMD91meygdj7mVfEtLtnyAeXFBjQWTZJFHYxCh2PEFEEHNTqLHzxqtcmbgAjM5V3MGZFVXEUZzcX"
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
