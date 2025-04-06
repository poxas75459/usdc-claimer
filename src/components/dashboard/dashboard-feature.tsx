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
    "3bwnTu4CsTHt217eUHRB3bbJKnDY48hk5kLKeMRBJpQx5CCK56L8Uep81ifoXH29MNFm343xVamv2RYfMLQsxY6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c3DqCTxHcoRpYUkbGy5a2hMKkbfCzDSzxKXMQ4bxjxYwEvKnK5MZsD4DTKTq3voQ5cqqck7ugmsLAoT2ukLyRE5",
  "key1": "4K7M6ug8RKUYwXFV9PRUY9tZoPn6un8MxuyRB4WhKzuD8V6rcUnpyYTugH92WScwKgu9tKGH7sTen4wgUw155Km7",
  "key2": "2wuSzkRz726RSgyDqECq3JNNTHRaXE1Wc3boZ5KQ7xAgri7cnGx4ZyPau5zfuScjZgSJmQEXkKKgN7V7zbp5f4oJ",
  "key3": "4Jarv8FxcLtvBuuYS74UxXHMDoQfJr4acij7HMzg2gBjgzt5xk7uQJDZnTsRXtzstjeoGreubRsZkUouABoFTumX",
  "key4": "64CMJragTAWxavwhw83yropfzm4rmMd3p5jb4ZKaoBUiidxcoYE5AZoufZjmtPgNTBHp823jRmQDZgGMrUjpKoSV",
  "key5": "qHZ3amKLnN9aqvvP3gtxWC2bj62RncYauzp83XKP1xjW7mtzaPWh88cUnsEELdcGf2WrL7LHqeuHRgQG7YZjEcm",
  "key6": "2qECsHGxRMBuuK4R5sWSMp2gWAigm15L8AHjXHe1sqg1Tf8J3sybS9Mhgq9UijvGLDJnShEzGXDkeydgHfbwb5Dm",
  "key7": "j6RijLcZxKfmX7uYRjXGpUYgbtXn4Ydtt1ot1coZ9Vz2xFdQ4GZvRkPDSTC7BRJRzNLVux3ZDX8ZmPbss751Afp",
  "key8": "4A3uwv5UqNAQ7xhy8TiTcwoZKpDWd5z66UMWBdWfU6YM76VSda91TS4zjd2EVADLi54ozkkNUjNTK7tK6kAZEgsT",
  "key9": "4ZEDdqtLh76PpExpSBwBfCBTNiRUUSGP77MvgS7yuZmg4irT7X79mq5u3dcZcM3eFPBy6KjKGgxMErzeB6QeG3fn",
  "key10": "4cotVqvB8ZKELDrRu5WodJHCnQDYjULbzkaiqAPoyQ1yyjjnfiJecrqZzSviC6AxZZnVK5T7zxjEYfQsWuavodzY",
  "key11": "5tqajMe1wSU8Mi3BEPrxosqcMboZHNgiGeMZwFPLPgw63xb1wFsLxM19Rhbk5BSyYEooDGnx9acPwMp3pSYWpmLV",
  "key12": "rP8EWWRrh3p1wnEPHK4GQkAhtAwqXCZFnNoh4e1uNRTPzAHH8ApRtgWtX3YmpvJX8LnNvAjqc4U14uPqNeNr9JZ",
  "key13": "3NZgA98CapHRPyBmJmJLfFBG7gEKgejdwokB9pNNVqgBxexQBEr6B81Sdf9tNwLjxtSuHtZcTk91su81sJMHZjDs",
  "key14": "aKyhciw1xNR12xbASSjdLThkGLg5LQkDTVbemCA5isGUAXtEqounq8UWPKNYULVV6SFjX8WeYwcir3Y4h6mxgPF",
  "key15": "4SCnWSYLtDfvyshE7wFxtAMaQu1p8esreMB5f4qiTnQqZhXK1mq6fC6PQaebo6Gbivfhmr81qEH7Mo6QVJnba9Yn",
  "key16": "5r97FH31EQar61XjsoUAve1hfGwaCRrJNitZgvsARuHVNMYSuGREoquQ93GtfJT4fgUUD5EdWuNRXE1vPwAXm6uM",
  "key17": "4FqNqz8orEmLWFiiFoAV5b3zW4hJdDihFTMvW4J6W9G56KMWnpveH1Cx2Thq9Cxqu7kgacVAv6sRdoi9hiN9iXK4",
  "key18": "4p1BZLR7uW5Ac6FfYVr6Tr71xEsJrvRvyr9hJc8W76Nwcn14QkubHAniPqqciSBdMJRbAxupW6UxEDKPwiLVZ3DT",
  "key19": "5Lbip4qurhR7QbAGW7Hvk4V7Vhwbu7GSUNbtekBHb37mByokWK3Z4dsXTQjqgBSDBkhxUYDgTafR3zRudpECetTn",
  "key20": "4HEYJobY3c8UJLXm4KQnpUX1Exkskwe8JBu1ntUZzLownJATET1BGezUACAZajJrC2YNCxbLZa4r2g1H4CcRuT9U",
  "key21": "241QvcBaDrjkXKzHAnJdZ9bLVCphaBhCZJBq1eotC4jAmxu1FRkiB2FjpsC5igBusHdpTYyMpB9in4Sab86og453",
  "key22": "443swnvXyK8HRjsQMaPwZRYJHCQdVcfGho3kKSahRufkeQCLp62YkkLRuDbTPCgorNLxV3jdzTrMBgXin167ua3t",
  "key23": "3GFoKUtehrDRqZ3hNxQjBvNPnGc4tYPNkK8P3VFdUN9KJGY8cWKWCbzFh9jYyaJgsXY8Dgwih9fJpFckS4N1NsrH",
  "key24": "3GRbauzKjqpKduSXbUW66QbUSt3vj2gAKTS1GdFC77a77B4QMok7RWS3LfF8JRiPnP3ug56E8QDQx34chg8XUrni",
  "key25": "4Kz1CgvpiUQLpBD4KTCFqvgFZzdbvTiW2nCCC58w6BMTycPGvTMQEd1mkgx22vfsYqWTf4e9MqvJg7vbToUANpWQ",
  "key26": "5FDYtCuW8wrdSZx558A742fzo3HHAKWxeitNjmTR5AXTwBtuXqBvdn87KV4xZgN7EpuTGWPEJdTY3awUQE2EFfHm",
  "key27": "2Kpn2Q6Xz6zF6xJ3ybUvf2kRezBju6W8YMdBPfQ15XnVo6ur9XK1G6gGsDppDdvTNQaLriWt3m9DdXau3afzMtvq",
  "key28": "4fhu19GWci294EXrDQ5QgJp4K5WsCW7n11GVVaUNq1hcD6fJ8V8RoTjSMP4MJPXrGoH9USSiXUMZTwfaQV66Ac2c",
  "key29": "5YZuuGFwgVRf1eQwuZ1vCoLsSnzSajXbzz5c93ymv2qxwmoEp4rQNXH27S8iFwN7W6SEwnPYBFbLWutNpMp5C95V",
  "key30": "4upugcchogc8ofQAHEkneD9KkwzsUB9W47U729oEqcsuiFFvyft3BxwaVofybYYibDZuAHreg5Sg7APPSp4GGNJW",
  "key31": "5cKnN256RFRqKCpQ7LhsonZSDeSaP14pbq35c3gA6UeFaMkDzQTWVZxE8ufJ5hJmqA8potsa9bA3eqEie1aAC9ra",
  "key32": "4FGQZTLHLKztvbRiQXTurNxemuX18qE3pnTwQLr6M53QBwtecwrYDCRee2gfFestvHvVT4txmhqjq8xxtdi7HUD3",
  "key33": "4G9huDFJLZXFkqmRG5m2ckT1rfbnwy7Kkdq4cyCCu8xckN4WuHHX75Uf1Yaa6g1ozfg1jFdq3Fuv3BDXozR2iPRM",
  "key34": "4bxi1dXWFf5fPNKwY9YpAXhFQXS8KwzZY1XfCc8X1bizw4vCfxP4riSdnoTBebsoEBxxpS1E8rw6uoNGcV7zdqNh",
  "key35": "2D7FLrb8WZKiMbngR8CMsoubcthSB8zNsCetqzHfGEPJwtBaHANqa1Kmp82WF69wmjnxwyHqZfnYm3H9zG86gdMM",
  "key36": "3RAJBmqh134MiH1tZQQpEe7EvgEiHDvLPCG6SknkLjt6AwKsyLjYnvBazRDWZ5NZAhL9osrJG39u4tKJH8HSRvhH",
  "key37": "5NFEDAr4ywmQDCAZYhX1xYXVp2oMq23P53hPJnsgxr1nwxzhu3zg4NBVsRBggrKZpy6UkS42W4iuNeWi469GJydG",
  "key38": "2XnsMYYctkkTtGYjZo7KNVX6tHryt3nn69TW11Lue2W2p3DkDNj5H6NEFH7r8ojP9jk9gL7qYQs6YcNQAmn4diZV",
  "key39": "5U8Kp7T3ib7g7Hg9BKpuQJtoVNaeU6P9Dg5HnGMvZkfMnZPSB4QuYMEsdnfH18pdUVw89b9aNqfoSNUpTBpU2v9b",
  "key40": "3BQFX7e6gd63R6tFjAHXQkcJaomNNWsYPMnHsNq9S2jypQhhRCLvsgy5n1GTwUdHS4MAt7VL4RmAyUZsv86sNQmf",
  "key41": "4qRqx6YZjbtdCXfY5K562cz3LvyLSdD23GyckR3Wx1ujs3q55r1DQTJCSHJhdhvnhQczKDnLfpPXdbZxaDYo6Qsu"
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
