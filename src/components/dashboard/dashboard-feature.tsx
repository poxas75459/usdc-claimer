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
    "ouvRzncpEti71X9SNW5PvxJS8KFHgmEU8ACjhK17bYKpzr3Qgz9unjrKBTF56KXjShMJAqweEzHRUhdr7aTaGh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sFsMebU8ppTa6SUoSf9tTfz7R5nx4aSgwPNQi2JXgTbK2sW1k3jPiK2u2vWXoQoRp4E8nV4tijRwzeMwMYoRE92",
  "key1": "5phRG8CMyAeobqxYKiJx4TCwHzixUav4hLv6RDTn5Abr3zyonosthWLuexmZzN6BAGwj5FcnfYmTTYtzGks26xTz",
  "key2": "2Mcf4eMCh1jWeKsfS87BZbtVjEFckyx6zTCozQ6PThJEWHVQvofdsBEb6nYWBJUwVZfjhSYQ5Kui6bnhabxFzUB9",
  "key3": "5MoWdVmpxeKwDZmvhgtW36umLWeFDwmNvoAwDc9Lanb2vZbiuEFJbtFKwN7NCLmexzi2YJkQtsGvWJk6c52NHHVM",
  "key4": "2RtZb6jN9M1jhwNdkmYmkYsfcNcCMyop1aPuD1uwTsLp9KydCukBrYq7DDhL5AVhSsXiq4Z4r5J4kBW11bXYT48G",
  "key5": "2ioQBf9DjWHRsnWwKGe1MEqbUWKnzTR9xb8RDFcQshca86Ds9beijLztLkGv29gJrSCcNcMo3ovxigqQFN2Wb2SG",
  "key6": "ZQcVtnrJdu1idGHdCcvgYWhew1vWqyv2rkwgzafpSnxmv9boAuHk1WyFdRkiYD1FX3fhyjVGWUF6baETS1TwxUb",
  "key7": "5VapJpMT2St7YFjgQt4FgCbi7evip2MM1ugLaEkQHBzG3UNRPsogLe8iAaNVmcufuKWkLEHVqv7BFjGhguy7qqz2",
  "key8": "2KUbbtyksjN7a9G3q9kFiStuLdD4PjaSWtRHD3bSeAS48hdZKBgpgrLjVkVruV1CZaaHvrH9VaEpt96x8FyzmLSX",
  "key9": "NmQPhe2hDi25D1NEMGMq4rD5zpTnQ9ai8cerThndHdoxAokzG4C2qcgBFKPrquR4RXPsQagSFB2NNFm6yiqkqpm",
  "key10": "5A1XneUuL5fwGH3A88Fsw8Wv4cMuTkVaxDnQ5KUEmqqDoraiqMJs7NUvG6T2ghVCrDGjhKshq21nN5rHhkaG71kV",
  "key11": "2P3FLetpp4HcMM7PNWGqL8UbBakfc8HZWDtnc7oKrnEQmUftrZSvCVV91k5a5F413xfn7xUCKLx337znisdyZ4RY",
  "key12": "3Ssg7kfXi9RXa5cdyWBNDm57yVGH5dLVC6Aw9nCsAtk819P8KJFDww3zN51xmWnGA9fig457MFN7NgnRVrgWSb1G",
  "key13": "2EYtyS5KtcBUSybhXTPA5YA4iybKH2jTdR56gsGd8K5ioeNsZ6r6swTiaUUEpkeqayPdMybyi5uGfo8TnqjnX5Pq",
  "key14": "wBFGg4CzooAxiaFpWkjDZeorSxePFrTdebag6prdSRJVAnfX2u8xY4sLEwNDCWg6FvxkS1bqfb62itSwyVsmqVz",
  "key15": "5vcBddJsmFtobRgXj7ry3S87DJDyfCGyuSfnM9fitYzP9qrxDntU3T8QU4DFCH6XDYD56NKyjcz31icFUd9b1Db5",
  "key16": "3AtTX3t7HfrJRcCuJfX6hrr6MYBVDcQq1yAqQ9vbGiZYHwtcVUcf2bfqmifrVQkjJXEFfPnDsVrCykAdkQYaDu5Q",
  "key17": "34JvSpnun3zBDbYgNKF7f8PmQzD9GRKxLv4EwWuU5XMYDvBSRT2CSUK7Bh3tUXm71iPcGtRaotzgQXXvZTjNzs7L",
  "key18": "8y6UfXb7wbmsuMchFaAhuuyxui2jzQ42PwdzGJ6a2rbs8AzUUzxVRE9rbBApHXxQ7oPY7YhnHQRZdsrHFPtDudz",
  "key19": "DXjRbaW8HCtg8zW573H7aYBX1BAu6ZBQ9fcrK8KUVgBTiT2vdywTWCTSaACiBtkURqyfbrzEtJFq3yiriURbw3D",
  "key20": "5hHimS8rTgV4SCCF3SP5nPrnuBGkyzJVfsn5mqSeVzabfnKn4B4KDqsiZ5iGXDF32SBXCUvMs9eyRb3pyHo1UC3Q",
  "key21": "3tUWzJkqc3EVmAM72amPd83GVnjuV17izXLGxbDsMyDJeP3cR17V6dhQgeTDMjLtQXqiLx2SP81qsgkW5aFE7yaE",
  "key22": "25JErdBr36vRTaoWbKS7NW9fNybSTpR18oiBgXk377inrfyzpm1Zqrqk7rGwn9KnxCyCVg2oH9CzzAM6werobA2H",
  "key23": "2NUhV6SsZwiGApMDhwX6YKEcVEUdK91U76NB4vHobiXfR9PCxzZZaW5rEwPHfWavp1NeTPFnS2tNZ4ppRY4jd1tJ",
  "key24": "3off8YzG787A95DZmMhHxumZerngi7DyV9EP5NNLDzZu8EyvmNcx9Ebg3By7MKhfr2ymF8dKcr67SY5FRxte5jZL",
  "key25": "54Qm5UPgK6LszKeg2gVX4cxC2GCFBhdvzndU5eBzphzXwV3ia4tVDpTpFqmZrWXd51RrnVzPyxZb3o3wsrzCG5Fj",
  "key26": "v7CvxHdDfGbe9wA8kCtnx5KhGaMeY1rEBKu2zNymQ7fWX2HFdNwihboV1AeDWVDKzk3ghLAUGN3a7j3srESE4Nx",
  "key27": "2TnyxVybabaZaqmEA1eqmKvwzaZq2uW3FsTWP6RkBJHnSha4pU6f1XPb98JcnPZsPTJMumMvQjZqAp3NMsDvhky3",
  "key28": "5nYfzacF6yySvwm89tFzTg5edYuvSUe6v5NXcV39CHw437qoPCExYN1p9BVyHYA41g2k22yKpKtGh78f6JM7iTLN"
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
