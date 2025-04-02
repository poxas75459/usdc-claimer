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
    "5XewohpdFcbaQAbp7W4hPB8YDxcLUaPgTweNxQr1HqwkVZYfYLZizrn2QruzmGXTArWDTGE5fSZBs8tB2NMyr3d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFFHp59jGBx2pVNJYxKsuLrXxQNomsdpWTdpE6rzCmXg7sRtMzhHED7enuoHqx5gQPiK9UazVgVPhP5PNfuYZhR",
  "key1": "39cDocSrYyGViEjja6Rja3DktFJB5JCwMzAJrxfqcqQBF1dhgbRckhpFXU8Q1yN6bg8nkBzfL4V35sfVb4mqKw5y",
  "key2": "oZvp4XbKUr2TS2c4tUFF4eeP6MoGcfSDKxgVa339PF5Gy3w6jF3giYAtxtiCTyi8Z4ZPb9XkJXvLVzSsmK25L9q",
  "key3": "2ZQmib2xYs6A7nrH3ijxV5tnurnjJykZmCDnx9UBgMWSaJGXERYaLrmzhEisJK8nHeYMTVpqJbgrcXjrA2mZpzsH",
  "key4": "cmGj2oQcAjLTExQm5XS4GZigKzctVwEpE83My8kMwyt39HehUgAPdGX3UXnu5ntpg6nNU673R18hqwk7mnLJVrJ",
  "key5": "2Fr5edU1Ry7eeKo7FoHNbN32ws5oW7s7xpxTRDuf4C2c8sYxiAXzWrUFBSdmqK5Z9soZyEbcnrqHzQNtBovMDe29",
  "key6": "d484HkDyV4mQ315VL276Ro45rzstUkimSdxfDAxc8pMQz1VmL3kiMYfvbNsrrB788duS3DDkPQJeFJsDGih1Vhi",
  "key7": "2nd1ACg7usTWUeL9RWsU5bTjTjwiYeboehyV4EVq1if2L82WbsTYZG4phd1kYxzxQSV7uZTAWnh3np3RiWbeRCtc",
  "key8": "fkZhTpk73obBNkWTjFva68ZGA612KpyNzSnWXWc6kChxG9pnQhfM1YBPi4vnoFD5tNEyvghkyDfDe8PdPWkTygB",
  "key9": "hm1Rthf7uzyN1jx8DVMQpgyF73yWHSiZQ9vYghN7NYNs9tNd4cgUNugNFCoJzxkkU66bNY5KhNpdXYNkUVPu2B5",
  "key10": "5xvtTixz3CAUfZMDPxzkNLEgRhHUqoYtqedo7xz1AK7B4vquBe8DTxChJLy7jBkR712EkbYQeA9Zh9kChLYB4wCK",
  "key11": "4Z81LYivvcvuror2ZEFEwNeqvF94qAuoPVgceVN4xtJCFF4Zr48pDqXEg2BA4cR67fRWvENppVgsKvp8LBLZQ2cF",
  "key12": "zWqSs2XaukxpvaMzJGgJxh6WDoCtyb7ZhHkxX899ZiiGHbxXexcN3dg7M9S6zSRbmVQHgD5tCYAt7mYD2gBdCEe",
  "key13": "4eN2VnevXvVW3GSGdc2SfhFnUf88mPLusUYYw8sjfav1P1BxoA51mfvm6EvNG1Vdts5JDimDhxXtMjQz6s4w7bEd",
  "key14": "opbPsrK3uKVkCP7BUMBJmJyCAm7fnw42nuax8uWKwvF6YT4GBFox9m6iR55vvkzNxWG5P6TeEz16fyY4cEvRs5P",
  "key15": "CjvBmnSeZRyZM21HSqCyfjz7MRT9Pm1MJuU29p9YYQig1EeAdEACZ1VnfgZqwbVhrEeVm3sVeZRJZHUFVE3Rpip",
  "key16": "2WMQMP3XtxAmxkt2nBS8GMWWA1YofmSQzPZ1XHnj5LwzzcXCsHha9db8RLy9j3ETUu57NyNofgfv8DNSxmfwc5cB",
  "key17": "4mEYpZ8oALEKGPkvLEmpXCvQW6JBwk7Jak7shUU3KVhczgyq5SkhjcJHLJi32JCiaPvKMACRJ9UUNfWo8Md5BMiJ",
  "key18": "2amGGKbemUdnSmRM1n2CRkw1wTKLqv43DwZHA1vxgGeSpPncMPiP61XhA4pWtDw7X3BohuEpG8sNJLbX8uJe3UE2",
  "key19": "2E7bLo1pk5AmKCK72xfzviHgTd16LiJivH8Lp19QgLb6xL3Dwsw12VLhaun7kvUN119dN43Ug7f3GGjN2cxCWUqt",
  "key20": "4zmYsat8W4zDg9XMY6Xd24GZxnVtupVenotrkTa9GhXyEWBoPDeqMyXkgajRwosqca6X5Ec9ucqfcYWFUpf5UqsR",
  "key21": "581axYHfk2NGfNnEJtKaHQCdGRkuodwmT8ouidEETYyckmbJTRknzeFtTVZTmdyPPfEDJ3mR15bTpDgdvYJHeY2b",
  "key22": "365n4XnBM7n1mKpvz6byU34w7SBehKSidhUJPF9NJovp6NCA4rdYM74bW5ZoZYR4qbRno2vQzer4HdqkkktvRb9d",
  "key23": "4Kqv5N6PWko9owSwrSyY6rBt4TDQcNMMKMXUNKrmAvBKTMcrD2rKjKZavh4RxyiaTkw4dKaXpMKCPGzFzPrTAUY2",
  "key24": "5sLFPpPJorGoQPnJkKAx2qrymyKowKzpWNnhP3LVt3kuKYS1WQuyTicjhKtWcbzYStCYA7Jdpj38iX2UpTfrSFrV",
  "key25": "2ky3y4vHAC23gwZJJLuFZZxk2R3B6j6NmkbxHSbc8ytYnXFPz3WFNcd9XM3XPnwCeUFBGxXSYVDZ2gbjwvAe7oYo"
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
