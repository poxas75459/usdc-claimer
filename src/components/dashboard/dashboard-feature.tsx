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
    "3VdjUJxmmUnVCgxXifhZXdF2kQM7r6anGPBJaWqWpP7yPvfGE6ZyE8otXEipvGSd8rdMoYxRgZjPpfUq2oXwfb22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzWruri2HarL65o21GeJau9poL7TPeCcTcHBpQRtrQyBaS4Bf59CCYyYPkcBAjiLT39nGNSoYKqjYJ2U6kRmth2",
  "key1": "3ovs61m6Nv5pnyy5mQkVk8RUfmthhYKDFkMVGvXhHbAtLVpXninRTbqHtdcducF1GSFdqDGuFZJs6KYZqoF8DMNL",
  "key2": "2PiaG7P2NXDv5mzYAmtUTjgjoC8YdrR6oemuxAeR8vZe7H7jbH7GgEa682BCFXk74tCAbPzpGnF5ZhUb7F5hej6x",
  "key3": "42Na7oAGCGjef3XRwqHs75sezgxdfxQCcZsjPxHXpr2jkqjxJpFAdD1TH2D8PzkTDSi8SzBR5812WdBJQ4HQxWRh",
  "key4": "33UUmSwYbHB5JamjSUBedj1DMMskFfbVAVcdHKk1EC95wmyTzgAwGpZGyTevsLtAYiC3gsij89L9N1d777Ao53Gr",
  "key5": "4zYiogf8h1uwgav2NSrWNPRnr3Rsr3UpRw97ogDZMMGu2RcbGsuM8ukjbngZLJn4Kc5N1va79fyuAnzDmrQFMSMK",
  "key6": "2CeVKEVcmm25DuYq4eSx7mz7DdYVAYnGC52QF37ktSYLg11JXq2ZWRLyutMLoUeqAE1ZDL6HVNKaJEFFd4LvAM2U",
  "key7": "5jSbkeiDvQt5vp6PUwXbjC5wsbKyuoEAgVFULTrJ5Xnk3oRnSYzcDFYDuKgM76swo7ajHCe7ec7gXWgqq8D2RGW2",
  "key8": "3rbGeWESWRo58LuHqPxgRmLcpktiUgFsaEvCuLCkH3JAjHsogExSiaRPo3TuW27AvbJZPpZijekK9p9jgN9LdjoY",
  "key9": "43JEvao9GjZwMEcMPnpAkzviHe4CbUqySwDZ4cLNXPMHkiawb44WQYKLGHHAMi3BEc35kbH2E4iGtjHJvFiyE9jn",
  "key10": "kVWJxRa2NSnGrmn6dzGCqVCUmZkddwxpAWkXFrYrQAMF46zhP94gcyG4FqfmnBaDs5TLzL5QA9uAef7wGwUGwiP",
  "key11": "HzdqMfZ9no3K3yrutjfStmxXeuCbtxQPYDdjiYNjtxrpY9zZD7QmtE1TtvLykUHnXTxRcHtoLtAKkSod7YsAPqp",
  "key12": "2ZG41J82kQmixVoe7oHi4LFpYDacwjwxfzhR2xfEqxtWiT34DDq2CkYPLGudZUWiBpAGmtLvXE7F4QLskSG951cY",
  "key13": "63hX7ULS4xxqydnYbM7y9HyKXk1GCp5z5XuEYsCa3AYbh2wkzGVAVBvbr9pyywEEMPMMXJrsUWHuzvrWtPPfrDue",
  "key14": "3AuXegPZD5ZznJjf7C2nfUgs8rgLrnprfP67ydZbSzrTcyanssGUBEQc3iWB5gSSBj6usvaGdH6uBzNFSvvaJ9a5",
  "key15": "h1L1bZabZPi48LqZPm4CG33TNGJJKfFBLkWSkfrbKKomRLe6PexnEJD5RTt2kuHuF9K4ap5GNtY45x1kAGT88UY",
  "key16": "3BQ5YfQUHovnxi1m6Hrj6gQTNJ3uSALipA9PYPJekQc93ggnHh5v4fLu5bTeL7N55mLkvaejYCYgNTnjtUoJrZia",
  "key17": "iAVhcjQZMeqLtCVaS5p9rERSfnT4Jw8Yd8PDso3XFziz9ZYbPWpnd6DKw4i6ZqWteZKS6XJ7Vv9icp5gSG8zeyq",
  "key18": "5nLiMtH8rasNee2HH7xaPqQY39EumndjmJyfQztEPhpkH4PMY4NY7o7wRXyfv2vbCa8vTkVJso8Ef6FC1msisnYx",
  "key19": "2NhspThn4tEe92ANwC3oki68XxHtiXVgBUCLym3D3ndx7a9tqhAGWdzxxkEBXRjhiiR1eZ58ZT2YsvusbRnb9znD",
  "key20": "2ULhJ364d4cFrcXynJNMHEHtiCXzbvNWfnNbj1kQF9bSu65MnERugFq6R1yawvhzXqSVKw2TJRKJjwoWEs7QCi4T",
  "key21": "rVotxdfCoGESDU8Jq8JCvBwt8Jtt2sSqgEhif6weGEGfKE37W6yho5EjvHishGFnr6fxRwuGeC821qZxSxnP7Aw",
  "key22": "47aX8fnNYU3x1utjc7YDivxMsjmfKJxP12p6i3eV6HjnZoEah63nyXEF2fVP9hEQGB2ghVSqSsf16awjbPt3Fxr1",
  "key23": "5hsjFSJDKFXzRavgQv47347KwCT24AvaJ24KbxaguWP97vsijSazzmp1Ho82jck7jdBin89CiT88mrn9R9FSQ3Le",
  "key24": "3e8EHBrCJR6R7SpfNoQYEE8djPAXxvHrS6yaFaeisGzH8KtzRWeXKq5YKxXygrnvWC816xDv1rmiBRCL4RJBAUZP",
  "key25": "5CC6zA21NEUjHduxXYYVPVEPy5Hyj8GkQrzAR2W6hxqVADgBspvcWk1r71aVpfu3Hb5WKPytrteP2mTLkdJwersd",
  "key26": "4qzf5mVq3J5RozvTadtsrfVNcdrXMRhvMaMHteczKUC7SJzWukZEwJqZDEiS1zGD8LywAAuWXq38WHKyVNjH6MC3",
  "key27": "54g7DwcigsbT86cRFCiPz4ZfdSx2wgchZxeu7W65hLBQFZJb6b56zZxWqgXGfUSns7RmVMFgWw3Nf23M6x6febwM",
  "key28": "5AfyuJEibQv6XTT84LQmm2pRZ2WAvJVK4WJNqf6nEmEjzeGrwpPmyVE9dBZE18FzvbGgGWrvCHaY8sdZNEQc4Wb",
  "key29": "5kz2YbGGoAevC7NfBJ74kNmr6eGe4GPsx5bWLjEteUSo2wiwkSSU3gcD4wuu8TWtx8EFcMhGWDKsGJ2gc85hxPD9",
  "key30": "4vJqrTHtmSxo7uxvNHQiw82LkZQPy6wPAEGfeZGoth48hDauna5PDC3hMgFaSJdSk5Lik8mHuFAd8hdX4aQKMyv1",
  "key31": "5huX4srSbfCDNgS1r9uMBD9rurSoxaiZasGLn26hQ6LDaQyzC6Nj1py5H5vGXogiYnmmVZrHpj3ThHeKHvMNvFDJ",
  "key32": "3j8YvuyGjUvxPX2Q1uzNdkrckvYPv375CocEWnZcgpJcSDrBK6TfoGxMdvhkK4GJpPhcuRPtJjigeJF2LY3ToW7i",
  "key33": "2MKMy4YZpNuuk5xoEhxqNjoiJAvF3SPVRZDTxZMdt6htnDtvNxXh2UqkYb892HNwtNakszgvdxhmdommVac1Fccz",
  "key34": "3KdcfxqrNnjpqjtPhaxB2ZkiA8CUZTh3KzrGrWJeCwSayET2fvnUMQxZoc1Eb3YHzVnR2XBGUhkh8K6dfgVj1Hie",
  "key35": "2AAFhRVL4WxPioBYh3SsJmhujSN4w4owEwtbHXhijjH5XwsUvMXx9wtEvmsknvcBXsSrsZwpMYop8y96payfcUCg",
  "key36": "47hWGv8q4rxFrTjwaJMNk9tTe1LYbPt7eqV8tCSroPo7EsUYeTEFjKE5ZdZ8RdAuXw13bL7x8tb6ci71nza9rdfV"
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
