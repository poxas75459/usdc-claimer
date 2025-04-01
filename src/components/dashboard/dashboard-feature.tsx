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
    "5YYdokttY2SqauBKVejsGSZksWrk6er27oVDp84cJtqbqma6W2FWmsF5WkautdZd8UWwiYtWWy9oLQMiqSEYWrie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5XJcVLY36FSiz9tdtyHZMrActNZmaqXgwdcENuaC3kZXTmtPkr63Squ34ocjr8KFUqPrW57ehkswD5tpV55fPU",
  "key1": "4eij49cQzBCFFZVWNm23rBScRbd3t7E4ufqNcZQ12Ptvs1eJMkQzYvPh6icdgJgG5qd37bSU6dDsJJSZEhrP4GCF",
  "key2": "3cemEVHbyL1Cn3zYQ2qo3QN1DcHNy8RNcaJB2qL8LhoBLjkz7HQPU2kvjLpsWLgUqfFq2TDzSpnE4SzZyqSyYFXn",
  "key3": "5RGYGdwSsEPcm8wMLg2rsowFcHd8QCiGAKZmvUN71Geaw6KLpuC9DoPY91mUMRHt4NP5iqEYYr8oV5KzrSPavjTG",
  "key4": "51JRPg98YiZJDPuFa4cHiCPYs7v2jUorDkafTyWsR8Cim4p8NcKCYA1HcR3u2WHtLE6htg9r4mZca6pbfMvRDUww",
  "key5": "qgBArLxshdZaNNkMoG3FCaUoqfVrjQvNcu9U7xEQEigah7SEN8e1XKepG57UMZWs6XYYWqJfELbKUiPp3aUF8Zc",
  "key6": "2HL6kTkkXCU6Ea3kjs3mDLKUM7e4P7jnZSVJY9WnNcDR8XM6L5p4JYXRNW8kLb3gSmDgkstFV2MfYUBqdwVpVvoP",
  "key7": "4asHSa5w1jp9ViXiC8KS1mY8EkdgmCWGn9hor7jp6z46TvLun67WDV4LgL9ViSCSGYQRD7XBgTx3zCApyjQ7r5rw",
  "key8": "4rBP3D2DUKFoyejTLh26JPRy13t2doNwaZdq8F9smEjxzAkm71hSJii3daThAouunRMD9SiKh8NmRxNoUqedqHwK",
  "key9": "ogN2Pw7Vdo4By1NxgTVVL6TqUC25RybqnZanzJUvTAgG1cBAw1HttTZsNNgx6g65A12Joav9twteCn11XPt7QWd",
  "key10": "4pqw3sP2j9KkMLo4c18BENRGu1o1Eni5BL7AcRTkdYzpfRSpq9dYRxnELD7UATL6cXJdhHaQbRoegiXtcULhTiD3",
  "key11": "tYgaBp34udbVxm7a3kKKn4HV6EsUmUQzUgFTArgGNVWX8VnRbXcc6dp2CShFBs77owhfY2BKwHc4R6s3YsrWbM6",
  "key12": "5UMvebML4HfMt9JWGxwJ4Zq2TKkTH1wDAm8tKzwdF2N8QEkVBsqqJL1uhrrjgEv1tCuUWXxMXxCjxfVowtntbdda",
  "key13": "427HDGSMshyB4VoZL4Pj4QJfhbGwfqV1s85DUjMLH8GHcfjiMRZkCTC6o6pWqRR5vVgYsQ8zoQRrxVboWrNrrb8F",
  "key14": "uuE1KhA4HCKa78PmupQ3CDvnFQiugWPDcH93z8KgeYjLdn6jSFnD866ipxb9nWRt4svcFebPQ3MHtUmdH2Tqi73",
  "key15": "2LaTH21D61bnwnfrYWoc9ybpTfJwQf3peQztSKs8Swf63Mv4ebWXxsfjpgG6m8vuErJAPk65RhsMHPmy9ncGn4GL",
  "key16": "5Ypx2XAJnSDP5eHWECBtsxgyZei8JuhtPEK7LGeTuKdFPWyzGUYGo1kCTsNfYafUMU9i9mePAZdsmK17nDtuxKSf",
  "key17": "2sEM3GpXyFgn4wt1tsEo72FU3HEg3cV8CBACc2jz862k93bVH58jRKrnYzJnCwB4RQqAa4u9zB4k9bWVVdTW2xjQ",
  "key18": "2Kdi7JubetPTbmtr2KMnjqkjmkjajqTwT98LmKXho2kaPxSiCCCkSztHDc2AGKWQPkawgBEeZYJhsL8cFCakv24x",
  "key19": "2txcDuEkWr518jPnZ2SEkiJWEAJVFEKykYrVDmHSDiCvzSR9gjSPE4hdPj9dy5HPkxGSbdV2kkk7dTFghMi6zPHe",
  "key20": "4f2KpFHT2roLBZvUzx3g5aptPkj24Q8AheCxzDHwqcpD42BPxgnSFRHUoMUi5U5hhxKYTpBAGgNHMLV1VhvM95qc",
  "key21": "61pQxmhHzgJE5CRBxb5iVu9n9GzT7Q7q9sBpBnysGC96xkjAsc7kZLAo2iyCwDFDwDQ64xg7vLUckS8jpJCkyT4H",
  "key22": "Yv9SpLANHGn2vtpEauuLa2yxpZ8SpacXs3dPdZmGZiGVuGcYDEh3gkiYnVAh7v5JZiuiek48ZAk8jiNfZkJvWLP",
  "key23": "2w9eEDyzZGLhgKFa3nJ67qFxG68QRWekqPQSTpGzTTQwoddkU72TLhvUCH6kwbTZxoAqMYWc6YgWdyx5nxY7dV6J",
  "key24": "37YCcpF2hrsTHW67WNngRsa3h9pTcKDdxX6ApnMiyr6D25oQLqSJcnG1UZhNXBJ7HKmqqLWXc4hZfF4hDLsuHAcC",
  "key25": "2D2ojtyoPzvPtLk2QW33DaJ4H4qg2zZFdRJumCx1so4EBGa14obJwnvyEZhY9cE673Fxaprav7Btx4VgZqyry8Ht",
  "key26": "4dQxnpJ8PmRihjfWQL8KgU5otcwtV5yfmS19PBupQ52eiim9kr3tV73g9QZePcRGmwbX7DAmgcoWB45nLJvrJZ1H",
  "key27": "5ftE8tR9SxYV6znzsftAyxVtU1oUhKEoGZ8e9tfRKUJLqoC3McVWsVD9RxdRaVHLZWfdqLAG1KMFc8MnFXvTevHR",
  "key28": "5erinypG2V7ZN9CQQkQc31G8hqDtfffce7hsRfyvMq9cij1VQv7mrSUKgErLUcHUgx4dhCU4Vb1FQqyxEVpmgLjQ",
  "key29": "2wzbZRFzXEAQPE7ZT6WcWEpsr5awko4L5bsHpWPNvDZFGhnRxG3zRG3VXgWiExzMSHbVMmxHiMvv2DXDFobGggvi",
  "key30": "5MDR6NhmCirxoZ3Euvt3gjZbtZFeoHFRtMPJY6Q784dbzEJTBsHFQW7QVzHXQDEtVeffurKJCBBu7Jpo4r85BJqW",
  "key31": "3kXktZdRXZiA2FauqSDKKs65PaE6gSvtVtkm6QjrEeF3CwZWsYZpAjwEV8UpC64dYz7c1CDfWtp3nukkqfK59WDk",
  "key32": "HnsV9MXPYkZQKwrJwkHLMYPc2jep6TE3YuvRCo2bCYAJbdLTzUANBHqcHFoiorDffePkJBwGyy2CdD1UsD8ga7v",
  "key33": "3A8g2QzwGXimiaiKPJ7xLbwc6WVPAe6huwFbdpCoDe1VRaCaoY4HwBYpomxpc5ojqQMs51SrXBb6C4DCu9B8Uxkf",
  "key34": "5z62a9Ztmj4QofDbDGiDzwUePjP4wU2ZYCK8RBcnAwakMzCXRBgt97Pm8ywQipXHqXNAJccMXYsEvaqggkpDX1Gj",
  "key35": "576vSqex6ykSsMVJ1u1BtkmetaNgKVoWL3DShwzSpqszfnAa319bLEoNkhTKKuHXuAort9JVajsCyt9hV9HzMgsx",
  "key36": "24C9tNYQjhaumnXo1r8hpxJe9TfWayCCh6wtPC2crMLitPU5VBhY8jvHVReweXPibMt1tAZVhvDzVgBBBhnSBpeQ",
  "key37": "Xu3Uf87m8CGR48BHytLg16LxLW9jT4fBwX44SR6Q7Xr22Ne4U26VHarX5F5cyr6CVxaptsNvf55DBGknA41hsyD",
  "key38": "3uStBHS1EDC6yqzETebQHEGqnqisHsxJ5du9YHQyEGcGQp7PDdnT7RYw62JQxnMJHu9zUWgBynzY4nD2feyvyx1M",
  "key39": "26MZFtTzaLrh8yPeh3vorJWJQz5EuHcqbv2TJGeaWjFsGL6bJnGPouggsGYU4ng249PEBYnrYP2MvgFV7VD5j5X7",
  "key40": "4S8vz3HwD92y7r3zMqMqPGX2Lz8ocUL7TCiUZNU5Dng2b3d2aH8Ap25CGjv4KzhbzspxsAtPF54VgyC93d99pDWb",
  "key41": "ybsNiH3zF26mZndc3stax9BT3DgvVz9fudZ53U2NL7WWL4NNC3SdfNGWqfPKXQHZRDa7YbnV9m8vt6fNLDUe4Af",
  "key42": "31NCppPmSMibsLZizsw5yBfYua5A7mKe7Y5WHLkCu8s7WZRcDTcu8z4kSBVy2NAT44xfHBn3xGwLTtETeft4NtFP"
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
