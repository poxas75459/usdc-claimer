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
    "3Ck3CnRBjHx1buuFQgwxxEdrcVvZJPhVdi1Y4bfakazMDN9Yxf3Tobz6UYfh75xQTjiBnu8LSfW6EG6qH11KxwRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgDe72jeu5cQ1fBJMvxRDBsQbTAqPqQgaVQDawQctThCmbSqR2cidg26VUNx3DC7mttjdLgvYZQfRNejPLJgz5q",
  "key1": "mXWgySBXxBdfgCd5aHGpmNhf4VN1nHznMUpF1YuQaP5CSTYZrAwJe2yTMbXadSb64rfeZpEL5FntRLd476C7zT7",
  "key2": "3VcY2RiivBYWj2yFQ4GKULjbosZwyprazevDzcy3Su2upDmjuZDZRJ1AokatutYt2qgsfCDRzDxmPzFL912D29e",
  "key3": "6cGSNnd7ioq5g42Qg12CZ3RhizKRLNJ7kZz3mMrL6FEu5HyAmST4nsjc9LeouZuBVxfDnsMPZCgdaXTTAB9NNPi",
  "key4": "2vdeHtZDTYt6VSmavZiTXaRCAVRxkgusUf7y9BiZPQXmFu55h1gY4DtXTTKMpxU5jy7sSCpbCgCU1XTwqe76Ghn3",
  "key5": "3WtFDB3N7QinAas5R9AEiMWr7wbzrzFiisjfRtHsaE7xTKE3o1ZuciVf713xo4mfCbr38QLEKPMTQ4aBjeVSsB6c",
  "key6": "4Jr8hJnB7qzvK2F7pzyQoyNoEaYJZKAxVihp6X8N3mJb457KtKRMXR5kfzfB9UtWwbeY4ufqSiNQwm5tQuJzUe1C",
  "key7": "3j3cHcHqYdpyb6RBF57e7i14V4qUCt3pmmDpnShsxT5cWW1uJ6v1F3CmprPCzdgpK7cbWQfeGCcJfSjGtYFMBsb4",
  "key8": "3i6Asqe66KQqgdRdgRmHjidmqawKF8hHAoW4PFR7axZ8g78sRYXvisPP84AZ8PTynE5FjxPK3219RpmxWFwWxPkg",
  "key9": "3pu8A85MXjJcjydHoaQSUjxLyqviRnRM7H7uZ5cGDEHFjRfyMQxJPC2XPFSTp6YEFwK7x8NRut5fPGz5Fw1XwhX7",
  "key10": "2UeFoPqvsw1pt1oTyw2haoATsrCokLknUxAdBa7RZa3DNWtDxaykzdFcJWoSAMJFj5fC2AGoWrsqaUTBPMuxXJWL",
  "key11": "4UzUCj5GDQGKCU95YexsYXDyRdCGF4wJm4iDEGrpA3tqidGDmZUTcPTADY7wDZL2qppBe8Pewf6ZbA5RMcbQgwnS",
  "key12": "JzxTGfjXed9WakKsfMyVSdJFzYUTQStepmYRyUF7PM2HT84gfges5T75LDgo5CJNWQf1P94Y6hzvKkfVF1vcqxW",
  "key13": "64LaYt1SUqbExdk3d2ZnZbkBvZbVwPC2LQ1q5gkrgRRVMynZgK4oW6sWQ6yr3erAyTBkMp7UDfCDSkhvsUh8b1eN",
  "key14": "3FgMLdNEDSA3CWf5Nd4FXeLmM3ngKbsPCXbTFap31AooeRrgrsWfAKHBsRCWhrjVETAHmawDPNxRQzUNoG24uJG1",
  "key15": "BYdNK45CpytcXxNgio2LKTUDq5z3eLjabV6DVzLFVFd1sK5q75B4qm9CrB8DvyBWY1SoW5TWNCJPwVVzoCpDqY4",
  "key16": "4Q9eXrzu8pEQozj162HuFgaiwpJRTJzHEMM5C5h81npFhrgmTDc2Vufyk54Yq3vVZV9JzMbh7ydtfvjCWePgAeXt",
  "key17": "4MAJrSz4QmWgRuMFzdguDo7uajxiBKHebG9nJXn7wkoZR8ogn68dLQ8Dfxw8tXRn97KANxvUQpuZVYPkBmTHdmxG",
  "key18": "21pAb9zzgTqdZuD2EW6NYLFdNGGk6rm7RcdJ2ownfCXbApztPbWP4CcU62oSUmnDBhxzsZZHFs8pSUzGHU4ftqbo",
  "key19": "21DMo6jx5hTSoutw3ekiKWBeQDsPpscss2NNovdqtqLeqbqEDGijX88qa3PKD482owr54HTWF33cGeiDnFkqotqV",
  "key20": "C2NmpMGYUzGcThfuKYiF5uCP8kx1kYcJq35GwrsEs6NqLhh8FQ3XnPAfX1QxnJRKE61dC1LVLyFna94SekcMsz3",
  "key21": "2Wi3DDAnzEhAq25nYVu4QcLP6GFrp15SqvduFJQfTT2bFNJqSFsusMWPgnYtK8AsqwVLWVYkWhR8KPNGnF4268pz",
  "key22": "5oShv5D5fUW9Ky2cw2eBPzgNEybf8Gg4vMjrFWj3aFR41ygYbYWp5enfoVm4VifxP2b82fcghqceNYGjgG4pFEa2",
  "key23": "2UAxUpXJ4QYY2m3oBnJhuVP1TuKp5AqjW65Rc7KEdabX8Nh83JYyJfHKMi7EdNN8C8shCSrguPVsBqBo353KZuho",
  "key24": "j4E7UdKvDMWRv974hRDakC5echRJ6D5MDPGQKvJX6mdyc84pSYfwe1jjSzmVELr9UyNYXUoUGWZwq2tNKHiTiWX",
  "key25": "2LMiMadxXC9miwRWG6Q3raHMZJUwMmXWUMz9Kgag8g7Zq9DYc9v14BeGw34PS59E3NAyxuDTXusToAbKMRyVusPg",
  "key26": "5aWTpgWDuxREL6uXU6EXJ9aid91K92PHoz2hhJZwSwfSGqYzCf5M6yJaazKMnAxNfiSaQenvX6fVp7CFBUNd1MbS",
  "key27": "5477MTASTzCFRkKwj7NjXcWBjt2GYdqPAij3YY6YttyevRaFtGEhGhJjUCuybNZechmjLjoJo1SYcYsb2DsanNyS",
  "key28": "3gKRSGwA4AwSJN2rYx61BL64axeanATAruoLKUju9AAwWmVtt8yfaEKE3bAR9omWj6rwkVVM3oJscqRyTpmFjhsx",
  "key29": "51fnT41pL9YcXhXRJKVcKvXFHRW7vT6HuQ2GAuBgSZ8WmqmYq65wuxR26HYjfdoM9WzWrkEAZCZxRz7GUpgEvGaf",
  "key30": "2PR5agiDBCJAckkuXYcyaVeepKmdGepruTxCwMtBBDf953XhLGpgSsUy1RR2EVya389ZyugJCb6PpSLUsNir96P6",
  "key31": "4UFE2kcqqAXeUcBGvcaGvVrMkSH8kSqwLhzH5iuxgDkPzAnyQqDXJKsYNKGLg3TuKz5w1U1Kj1d6XWaKkFsLxCYB",
  "key32": "51fWBApeYLbvTK3ChLLckt3hd9HSgnhmQHvuNqiLpMmXLpjbbjJmYFZQp5U79EEh2i5eYmCJRtZ2o2oeZDZsDAZu",
  "key33": "3MEkJFvgCEjksSvGSp9hAXDWZjEsjsTtvYpYGXH1Ea3vGX1cMhrSzpjhAhVTsziW6QgNxboPyNJ9TesRoECHXCJ5"
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
