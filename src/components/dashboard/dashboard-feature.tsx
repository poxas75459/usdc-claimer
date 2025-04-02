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
    "3NsadypreMjwT3pd3ifhNcTozTQoaJYq53vVPVat2XdKyABAcsTEQW4SdxtF7ABNkz2LT5WkW3713s4YDCH47TNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AtCn9QvfESySSsvygZ4Crog3HfkoGg7grNwGjsdbeH5jn5RQv5dhC1DB4aDtRdeNRQC6s3YkCyPGrWdhAqN4559",
  "key1": "5WvopaUDGgtdGySy27f4abeUoWpsUwvFjyxLQGHSYdojzh3CRNcTraATE8WoNjKpakHp5uFLNx5F5qpANNmqA9R5",
  "key2": "5QHjfeJRjx2LRwG7pVQqRwGzWNY3eAkukaR2rAHAASWAqnbgcRCmEXuBDQ4E45jcARCMJAq4sNq2apX9cjRmTYm3",
  "key3": "2LpF4ESroJBUuKrjwmihbK2ZgtxrEhbQnARaA46VhDX7hGeeFRXe6BPuGEiDkrScQdSZfkz8PgA8HWhxRfTYxhQY",
  "key4": "29dSULZMDjhYMp5VR7YXwtDdcBX77JZUgR8jwQNYjuz8FMRDhzSsPD3mvJpVCQPpzwQxteQgSEBGmX6aEZX44n3w",
  "key5": "3iMSEVdq7Wi7a2cPGvhqm7YswRfgZuYk3jAuskCH9J6Le5dJSAQ1e9q6M1nABpY8TfPuN6WyFjT5t5D33Zt6gsAr",
  "key6": "4ZuWF52JiEoPgU6MGHrRJMp1tF2QMJLoL4a5whKuvvHdSanGkw9ij8boMPokCughAqGuSXCXJnAGFTibEwojj8ow",
  "key7": "2mVftXEG2kkeMsgAHutayNgjtgATfDyf7kERaQDJFFii58MLQGLrs4do4LZ7APiTGNFQaHhStiL2Ht2mnPCgVU45",
  "key8": "74EUsx2NfhcyLK1ajMYKDewPbZmjo7CExTXsa1J2dti6Xb5r6tVL3oghr7PeLaLPtnusnx3DaqRB1zvwg5bE8XU",
  "key9": "2sXg1ARdq3Hdk7WZcHTKEw8DXENvTn1zXCYwaNC6BqHpmdfiDGFs8B9g6p5oEL53ezzpFYfsoxr3d7qdpxk16SJw",
  "key10": "ux5F825oB6dWeLZVqsbqQyTnruS1faANkazkyT11f6heF323gLJZsSxotSmNf2JeYB6a52FwHibqX9cgt5rzw8C",
  "key11": "Nd45idukDRzJ6Da9oCed57YpJqbHiqcrktNrdGcpxnaxCA9fcyX4NWroheVRoLPxktFUA3832Gooq2i2EYJBgH1",
  "key12": "3iHm1bFh1VnYfhrDrjU7MQg15MxngFwzWTJx1jfJsdRZ513oWzrVPBXHbZrazW4qhKzruF2tQkj2WuYMDRjwXN2J",
  "key13": "UVUogKiWMA4D1ZFSQCkbCHeAxaYfTphEQMzxvFWW5Ct5LBtFi8bhfg8d1quXPETGQZhQxyrfXscbsie5hiySt7r",
  "key14": "3iiwKLsBe3uejMNCo8GQhg43kgTrdSi7yauzXPaSgQ4Tx8vXgzGnjgJDZBjpsdtoU8arvv1c7nEfZkdQWdXy1gqV",
  "key15": "3L3SN8BUBZ21KBV3ZwVHkrS8v1TigzYnLV3CW5dgdUBrLCDfeAt1GcRXhGcjqwjXwt9M1c2DMQiZq3vdAtiF1HZV",
  "key16": "4vZoFChurwqdCQFx7A5FkqG7oMteE4YjXfsyWHN859JAThpNV1ELrgcdD3sfGsoSwM6KfkKhZdt4rB5Ryov136SU",
  "key17": "uCwgZUn3Mk5HE3XFn4AC2GkpoJ3Qt73qdFSiucBnTCgo39WS4tLYBGZc5qp7ugaPvsQ181Zq5sM9YVFosxJvKEV",
  "key18": "RBUTuvzZMeSd69dNj5hJdX86zc8NsJ7rX6g7FjHqiyEAkjrZ5pMtGCT8wmFFeodJSi91K95Ny2VmFgd7xV3L8Su",
  "key19": "1P9Vn4v1eaQ6tQoHYkEQt9UBe3BHphVMcPS2cwP876sGzJXD57zUwr3Zj3ibKLW3ErL68Kof69fyQL7zXWNjiTj",
  "key20": "5PZtPDz7x6CmP1y5d9SUDkY1JCWqfhcRjSQ8qb3ZTHmTzm3gWitZKVTkm2b3FSv9Ln4ZZAHMB6EiS1mmcoEodtvZ",
  "key21": "4Xmus6YW1a9wFbM2e8z7fR1EWkYSL39cpuYa2hnZrmRnq17GYm1jGDVemuirgbSrx5vRZRzM1CrNAN4XqbZryPep",
  "key22": "5kFSC2BJUQsZHoNCdCs1t3eXsa1cK7KPxRj9rSgPwGwAkQvhkhH2n6cfeUG6p8YzwkzpCK2ace43ZBrLhRD9mf3S",
  "key23": "4nVc8EM7kDwUuS4Ebg4M9thrGhgQmxEa5nbxHuczUWhuRoDDJnHo9cUV237nFGNv6xD2nWN7q2JADuxLw3oMi9J2",
  "key24": "3QXq8m2NpjZEmzCq1cRidQKswvPKhDrSG1a1VZoUaaXNWh3ejm3m8mtcs2bt71P3czMEzYVqGTiMNodwLgHpmYLo",
  "key25": "3WuxJiYAMQp7UgA45Kb9CLj2ecuQ9BPiLJ58G8A9xQEjeKXeAJ4RpQcBG7AWtj7PqRJVATJck9sVERwrmqWZ7eM9",
  "key26": "4jFtUPPmgDwCyjLyqvf5E8WAStkXppAymcMPLGNgmndHuH1nmviRPyCciK6JNRjd16u6RiTCLXmUZLJtXLD4xKxU",
  "key27": "3vyzu7JDyhMuy5zRQJCvdoVogkNVPKNSsdXqpoYLYGshhLypYcgHtRHMt5VepgVots9tUS4VFwYkzSMncyzkLKr5",
  "key28": "4KEAcoWK68ZHPghY2HLJjNMh3P6QjhyQ9yARsWMifMg5jhBstu2Dp3ZvTm4m8kt6wQ3oXCmngEYXoK94unyAcVPN",
  "key29": "FC7QLNbqStLgp62aYSH36FoSKp3HjjEkSFMyuKMdpS4ducJF6o4TesrXJPkEVXbqSqYzyFKZXJ9Sdrr8XghSzVd",
  "key30": "3Lhy75kd5G2QhHh7qmJpTKtcp4MnJBaGCz7Wof89kzEbcwqnnu3EAhu6vYomhqFFxU5bSWLUsNsHuEHmNUTH2dQL",
  "key31": "4XYr5hXS7VRN7ptpafwz1DU2YbvMswWZVF5NhqBji2LwaMF3f8HMw8rUfTZjn63Bv7YH8aRyyXowcDr4jS5W1zzR"
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
