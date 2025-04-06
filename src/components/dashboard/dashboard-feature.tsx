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
    "2AWVnqGX6Cu9w8mATjSMvKPgfyvgf3zdvSGqxZhk9r2sGt4XizBwFZJ7DyzntHbbEuRX7QBTfQJ5nDq1VdvpXnbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvfz8mbs1Sc9TATBafVmYePrSfcjjgFhHDHrsWiCAyNMQg2MqarVLhPo7E7jLpxtEcZqAJS6Ht5Aa1Vqtk91h8c",
  "key1": "2GCDKsJUnmSvYc2LAscBCc3bszBz35yNf3c9oqpkboGR3k9W3YPe5nUNPvHq7YCEH54fR7aXNQAdCCkaK5PbcJZw",
  "key2": "5D9F6LKYQdaFLapaZKadNZaZkiRK65h57QphCmMtGExxNL3Nm3MmjSCjkTUBQrJuGb2SthipGktTpG7RG9FasB2B",
  "key3": "24T2YQTdhFEb9VP3Q8bu3TC5VHSLbs6GRqp9XCvikUWTeT3i91zm4NNzpkiZf4tVRHTnN7R6cuhMcryUjCKhnccN",
  "key4": "39NpHYhponpyefa9qAS8vDDGub3yei6U1TNj4ZaLVpKDFJ16NVhLSGWkcwVLbd2aL2sELFFFscLfx6kk81GB3Vpg",
  "key5": "3PDbU42BLsPuHdaNgKVDLpmJjt8EbkawmEGbHBfASJnRWMb5qApgCn2ATUEaeu3Vsf63u7GPnJEvYG4JxHbjS5MW",
  "key6": "4BrfiqUTiovgxLah8VDYsFQEFdxRo9yDSJMnxru7BD2cChEhLHDdqeCMZ1ix76uQG9CbQXt1Evww9uayaMJnQXvE",
  "key7": "5VWBDt6Ve6TMrjj7spGps1LeScrSjkueLSeYq7EN6MkVztkMpi7Wn4uZqW4CbuavjHJdxv6wXP3QVF5HKvTCi8N5",
  "key8": "4u5RkNaGc5sZ86QxYcmMxCCx2qQdhHY87jubY68wt63uRVWg54KgxA3caZrj5mZfz9EDTmcZkLPRdDtBVuRvbxMM",
  "key9": "3PJGtegwFkQqJm4vYJdLhSZ1ZqbZ3bcFyu5gXbHoUAHNitssSVsCGaQfyY3WFbtXdyUkhCMGJi2dNW5hMzMyDguK",
  "key10": "3kP41u62iea5Kvr1Vdk8t5ak2LqBaAvJfVd3vhyX9ipnjhe7NquEazxo9Uy57DCQVQBN8WRT9eJdj9Kf1vdYXTtF",
  "key11": "3UoWi32TAdU3FBvsKdeTuJsvTK42RbYHBm45KdM17Sa8x1KwNEsHwYFPFFzAXiM8wivpHVCavGuojajy9Qp9PTxC",
  "key12": "2n3D5KpoLxuUgddhuug4zywdTrpZFsneCHj8YzQqpawQKuSG5PjFgvmy4AiVejFFoeRyoiwfnD22pJUYcH6bMjxv",
  "key13": "2mLY8JJYFS6tqKpGroTqvpFBdmuZdeBnJ66xv96EJEU6ruts2CznLUZPAyFZTMwJH4JhLxSE8wHmFzVc967kEKHY",
  "key14": "jZ7nhnQSrR3JjqLYWUttZikEWsNFm1mxD2H4jXTZqzPrJkzYuBc9ercU4pHpQfBrG5jf6xuNMkox3ZHA9YCaZss",
  "key15": "59UkEKLzjEw2iqujDPu9ZqKyhgpkFogzaPM3DE7WBWyLCCYSr1bywfm6HKzC6dFdRhAkhbrB6hdB8mBkQuCQCG4g",
  "key16": "4aFZNNifsjf3BqtnYdRN4VoiMsD5m8RBBXU9LQjUinCB2WxKJKyQyEW4gi45NpZfc8CTLGLGcyjvgadbmxidssUw",
  "key17": "5UVFmM27NX7inNh1R15UEiWN8pRjadBbXzoB4BLJmST9Cap1MSVLBHaK78nxzSJXTGCH4AJFntmzV2RZRVSmMx3h",
  "key18": "3jpVxyBKDnQJxkUudiCV7ENBCLUgudiDdS8ZsGV466qxrhCwQgbmNnt75S6inkUTDU8va5TAUc6TL3YPDyw8Gs4z",
  "key19": "a45e7SpU81nodFds2FHBsvTQv5xbs5XGXBTY3c69MNLtXhErpmNUHh3UDFpPxYQaB5Er1GuBw1cTphg5QSvG44j",
  "key20": "5cxzMnJRb5aALUqmQReTeLc3xGoJJgHzjk9G88ormttWYyFxvhoXvMjsCBn5xuZS4nsMk5m2pxGjPyvcXR1mivve",
  "key21": "4RofaTdxaeKhEUd4TKtY9iyihJBSAqyLbZ7ejRwuE6zDzJHXYYn1iPM8Hux24VmmyCu4yYuuerfaBh48QWYJYyKn",
  "key22": "5mTrsP65zsajVuw46TCaqfA7r7wqDFCX1rDQHwwd9Soryy1dmC1T8rWMCNPgfKNLL4fQfPyrD9RcabGF7QeGe9r",
  "key23": "5bk5XyBsdjw6JF9QZs5f6RdxkPVBgJWzmhxmzftyayezcSZXriVALmRsLjUtTCqGq5gmCe9UVy6y84tn5fYfMtxP",
  "key24": "YogYBLkiigcgkmoXjC9M2w43Q2dVjCxHa9fScsP1ojreFwnHf12iLTHsQVp77wcmWhKL1u2EDfXjbPFLxhBqvRd",
  "key25": "38Cfk5wabxujKc3VebgLEfKeru72XoDv3UapSB69ZthzQQHEk4gWnwvXLoDMyGYj5Ef6iTLn5puCsmUaWivQVzB",
  "key26": "S7QaHjcPj2jgM1Eazzhv9po9dpAKcCGTBmg78eJdxYicFtXPn2vgoSxSVKKB7nnfHAHKCowWPqD1H4S6ojf3htK",
  "key27": "4Smi1RQWPATebxjFFfd4mScYJC9UZeS6TUoXDhPHvv5Qcx9WnAtDQuF4KX7bUP5gjUjM1oouXGhci4FXJt1CQYoZ",
  "key28": "31oWXv8a7Vhtw5j6wKrGDdZoEeQHaU8SAvEqLZkumF4nos5zhMb46ec4ogGS34YiDokYcBf5VPs1vu868na4HCSJ",
  "key29": "2KGVAKX4PycJjBFDGfpHKKdg6wdaWtseU8qwwe3qUx4sStcC87q7bBzsVBtCcn3pTf6wcbyc3nLU56ZnM5vwZaXF",
  "key30": "35DoiQL7ft72UJHiWqWbgUQjP5j6Wz9SRwPkiAipa1toED4t2CgtsnbpireGZs7oAr1vaECPB4JkmUSWXkaZwxUp"
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
