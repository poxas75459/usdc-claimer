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
    "4g8YioQZ2qHXA1rDHdCBwRQhvwcGdVZXRYEEgdM8yHKVxenQBxLywysSJTkhhyjA51WiVMhqGJUyMiLxdfzY65ZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6crkWkCDuvP8UdGA8Qz9Wpgh7Mt3QiJgHxryGtDmgrV5sCFkBRMgDJvAoqq7ik6Phyh4aVc8mhZsvJMNhyjv6m",
  "key1": "3Xdb1LYufkBAknWZ19PLicGJgfLBWuaDtgwS8iwwsUfNFRaJfpSunKGpmScijPbDeAxMyxkLLXLi4KwwtRsom6U8",
  "key2": "3tLU2iSef38Rrqy5AsyQpu1Fxg51dBCnZim9FS1zv79tuqwp8f1XmkA8Mo4JKUB2J1RiLZPUz3m5sQe4SMCpuAe8",
  "key3": "21rAB2FpRpR7u4mGwoyswqbHGQLyrPtZKdz17MNEb6xpr9Gc3PWCKA5yTXN75jXGFtvKjNCvHM8kEKbHsaASgwXA",
  "key4": "dQFQ3VaM3Eic5SqjKDBQ31yuY8qmrcRC4pmJFMq9Lk7RusXzPUEXAvUXiDbu4zEGiqyzJeq15yXdsJJrzb2egoq",
  "key5": "58vMy9MkwPuVGFwE2gXuEyWTbjUtdZy76GqkrXVVeAfmbYFD8Ckm4qTspUY6SarCMzmwpuuoNKQLorw1TdTzaeA3",
  "key6": "4ybkMKbLDXVmTPBMQRf6K6QKEth2fn9K2K5xhuwKTQ8MnxqM1oYKQhscdhLDN4haNeTALG5PZ6QfMhaVraJAMTT8",
  "key7": "5HqQhmJapyWDGfBHAov9kxtXJKR7fsn7hNWWV3GcuoKDW5ZNWCji5eyWuNWHs5AwUYkuX3iB2YdcMqSvPU31QAKN",
  "key8": "rUouFqSWuzEEHsWDraexjaS3D27AKx9tMHfmRoafDiT4GSpH4dcXfDAGD3xLiFnN3sC4gqWJoTwVRQCvb1BHEet",
  "key9": "5bLNysELnpYvnPdWPXGo1yQLGzrP86DwfHn1Lg7RbNTrTuNK2Bvvv6u7xnGGA8AtYgpuYtTRPZjBALb7Nmgn5WbC",
  "key10": "53ZukApnHQwbuB4S41mc6wWDahwicjetmYrxmXMgGkFZNvvDEKziZjTeKctrsc8dL8Q4de5smR9rE1A5j4mzWZpn",
  "key11": "5MBBYfuRepuVXn1vMRPgSyha4AtNWGUV876JireHxxYGLmX4Qmqere6ZbiHqhNz5rc1PXgzDgLH15S8xFqAehoJa",
  "key12": "CDbL4WYmdcu5Xi5TYyKzKA2DFGAsWTJVv9JLB4ppy4k9yA2s7tmpKYJG6gaLcVzFX9cYJd3HK34ZADcKJT6Mc76",
  "key13": "UNo25dM2i5cF2Zf71Dppyh7VNRGzWks7yk6RwW8CFboLySRa2FfnNWtS4jHGwP6p5uNCmnKi6BD271a91fH1MKx",
  "key14": "2aBP1HARqjnKSq5uhrJYwbgjnrhVmozFPwymkmi3t9h4AFMD72Jznh1mytRFeg1RRUL18pnVH8DYe62vCMyC19Yr",
  "key15": "3Xrzbhr871dMzaqahYTi9xQ9mYsGJECrp2nWn39s7Gs5Q52m5AM5AH65WgWAChNDwVaFqRnSbvmpzRVAr9TPtWcC",
  "key16": "2BVoK2QKDcMFxZz3ragrw6f6YvqgEsn99VhH2Sryu4584grM4QHExXiqtyU6p3WBTywSAeUGpJsdhUgEngRsDkMf",
  "key17": "4rzKuGvqaKWipdrVsrANNMKNpGwXcZkpx1hz94Rdkf46ynWCeJQHEP9ZyES7z8FRoZDbr97ekKkJPVPHrVSykSYH",
  "key18": "XQgKNCTmmn6oK3SRnejZU8L2PGF9QQgMRCrLEXiPCu9ZsJHbnXF1K8ZW1HrBZyQcP9ruyUa5HEmS8vkmAvRMvDQ",
  "key19": "2KHVNesYm197Bh1yXgRy6NWk4r4JRJjvP43JSPnGf7aMjEDmYyzPWPmhiPp4VLY6HmXWkbsz4gZWykirN1jPuWdz",
  "key20": "gAf73PaqHLbmUdwhEHkZzHu3MoGYFw7YD7S4hFCNo2eLkKjNS7RNmnYBrXCf6YMZ4C2RegrWWd3xJR3nuwCUtP8",
  "key21": "3MHkLHQQ71bpbaZNN6G59PSGmnkKuFSpaqbWsGhuMrFceoKqr7oHvgFGhnUn2qF9NzGBepmn9RGB9Qjr6CB9KaBM",
  "key22": "2aAadHNH6t9mLDPDPRoyNUXfMBJ7j8F6rooFjjWYKwvbocEMAWjcHoxe6jkB9D3E8QCgrez2R95wDDFcgD8GDgRL",
  "key23": "2TGfnb8ztLC5DRyDZf6G5jqxzrSt6vadgS8hufS46Hw6AkZjZLajQgPvC2pWMxnkQe1xP2ZBQRQJmJe1ZtkLpasF",
  "key24": "Td3J4qcR7r6LGWnDsfP8THN71hCc9WCtMd3mcgL3dGd8n4jfYMP6CK8R5EYAUiNXdjHdAoRkDEY5L1on5G5JFXr",
  "key25": "5t8frmBDpdPnRxZMpjzPw5UHPorf8z6PoYCnh3BFnQsxbJDq4RCPoQsN5vY4cvvRwMLjZvLA7kWt1kMD6jQoESRf",
  "key26": "2uSUxFLEyVjFJ5vneu3f1wBXTDpm7jpAQPGnpR5DG7uusnBaJzdZRLUvWrbphQmHQxKrRBevQD8AaHiU9gMQ32rt",
  "key27": "53LyXCxvcqxxQ8Jk2RT6L8KMFGGt9JGeE9BVHMX2oH4oBLUShJNEk1cD7564jHuHhMjewA5y7ygBzKPq9qYpNjxS",
  "key28": "5TndogFL8HxZT7GDEfAgmwKWK7grpWSbdS8t2PUHM7fFn5axg85SNWsautDAtd79HhGQ1YjF1ZhVSBfhpkdBZR5v",
  "key29": "oLKxgKQ9vS7m1T73dhVRf3gR8CU2mXFFEW5ZrkAUHqngZSZBrYDRwvXRZzbLUtq6nZ4f23Vd6skxgHFxifDWaqd"
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
