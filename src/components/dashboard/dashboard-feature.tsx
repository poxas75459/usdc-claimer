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
    "498nv8fr4ArebDZwq3JWrLJQMNNP2r78vooX6zwoyFPJfiLYxbLo9Y4T3drRqSNdtxwURBenkqh6SNr1qsXfXShp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfqe4TSii562rFi19JYiXPu5cKo13va9C68bknKpHDkYnq4a6hweKfSq7xBLTSufMWW54JBNwcvkqyG94Ln2uSS",
  "key1": "dF5csfWc1DzPuiK8tukRYz1fAmM6BmQmpu3xBYGfzZD8yT3Qz2t1auQYbvUeCwEz1KuHMhvCZmj9U5KakqS6Eg5",
  "key2": "66Do71b7pJnN2cW38QictQzvSsAtLekhgz4BjjJPTLgBmgYwCmZFYwhynCUXdBgT9wxVP6ea64tGbaf4nnTJzMCx",
  "key3": "5QFYuTkt8FX2Nw6B3CL76m5PkaouEzVgS98p4j2R8zV31dk8DX2Tk9sk9qjm3Zg4rueTiHDKnxLBHnnkgMi6pDmt",
  "key4": "5zcXZ8n26wDv8HtfXvj5tDaSEQxQdyJJeSNCTQpBFVHKTndePHfEXNw6DTfxLGJMoJPR6UBQdyPTennvt62sHT8T",
  "key5": "yZoURBN9JvAnx6aeQjcwAsmYvQB4GGB24295TpLqfDosmYCUcLn7i5iAuJBJ5NtayxiQgnMVeF6txqrpuRLrAaf",
  "key6": "4KcZ9bPR5J2vv8BsSWEWPqxYZnosx79evwcAv4rq4mBWCGe6tGyY2h9GBhFaC2eJxykky2vbX9sui3xWMaRjF1ai",
  "key7": "2TAwRx5hCiXpYCFh6qeCMEzfdG8tuKJ8NCKzz6KSFamBd65W9oezdoQmFxo7Vn42ZaH7NvnsimDCFjwu3qVK5Z7G",
  "key8": "5owR1xThrnphPVYFof2nv29ovochmF5HNmpoyJG6WMdPVPd9AxGUSgfQqZWg2Mn4iXYveMdkembJZP6jQt7pahm3",
  "key9": "5pQXvP6JwkxezUkCYVDnUwYRitHFHWggBfBuN98T2XQdr2QkDCf3qMJ2fWq6MeAsc1ygV4vPE14ZGAHWmzZUN3oG",
  "key10": "UHukGJb4KAdpyKbU5qJgbkZPWJfwv3zBYgugeHESKpCRxv6ADNFhuH53MkB7EMkTbSUQDG6LaRtTWVv39EzvA4P",
  "key11": "4kDM6mLgawRUW145PXdiX254WkoqjofHo7tbvZL6GqANpJDFQof75eUgE8iGppDXuABmXY7CwcjRqadJbRpQfNKk",
  "key12": "3ap89p18MqCz659LRXe9ddQk3WWKkk6kt1BP3qFp9K1YNunNprdkL2NBb2FVKR1Sic4YssesPtitFanMd58GiSmN",
  "key13": "5CsU6aN477ZgtrR9WeDRaRTjot1yJz8tRVyQ88ByDLHEbTCK4DHiCVAw7sAdNpi79xjBbiHvzyWkeMKvRSQUnjvc",
  "key14": "xC2fVoriG2br84ovjMQrxdgwJW7gDKpPsCrhD7s9rDSymgVjbSvySgAFvCgrBvt1qiMf2LsUZMT1kdWvNDd1e7a",
  "key15": "yc76FHcPVWACKHTBYxJvkT9tsY1Yr3PT7ivtpnTymg2t8KChmhfPuvSUtLATzpzTq58x25sbVt4anYc3wcN3w9f",
  "key16": "4a6Uxn9wzgUoU9iD1Rs9AHe1eDH4qcKxdbG2JvnPZd4dKJ8HWos64wrbPyuRcPjP5QMZFFTDsGkMRCohqE8UeHfb",
  "key17": "NFFo9kJk2r4VAEJD1obdwmE4vBHCSCrB94Co84USoU9Sa2DXRGGQ9Hm8w4DkLBKcgzWM2qASeqS3hsqz7UCb45b",
  "key18": "3o5uQYHPpQUHaERTN7kwp8PaV6jowgxZHjoKdcs43MHEbHtuSaHa6BQMWhdczDcP8A5h4VRB45x9LRRPCGEoSSSk",
  "key19": "4NA1umD9t7TDPLTQwNygRbAKNjjwpS3xtMw3uTduP2Kuo5r8JYNuy4nCrXPBeBYRnLoz4FgazzKoUq6HsTKT8NB6",
  "key20": "3sWukoN3qYZfHrASyyLGkavT3VcwGmD7k1cNkEbKNhuSQDyXti3ErYQ3SuThyeDDXLVVHCVxWHnwLF24S9migBQG",
  "key21": "BrUu7xZ6KZaXW8pjjjcW9bxyLqFmB5rcVqXuTYmJhASzJKfiPpwpfcqaCNdGBuXXfnP64XtBN6pCDqQAP2D2cyz",
  "key22": "29Nocig1f424FSMqKPG2HFPREvVyZsdz3WtwUfweCXk7qogBAb8ZUPU7YCWken7p98SKcFLq1DWKkz1qpf5A9ePJ",
  "key23": "3LPnRyx6A2vbcreMjCNuiF8EGQiY8fjMMfrsCtwUPoxiyJALd7b7kcexQgsaM8ueCwkaasMnvrDJNJwrWT8siPAM",
  "key24": "2vUAmi9tnqCHvhmPTzm9Nom2Jd7RBqr1SeFdgcVEXkwsLikD74aDf4gbiYES4cNCR3gePQ3NgsWiYHvLbajyUovM",
  "key25": "2UdAtakvXrUHWFVuLdsj42JZNaaXo7UnS44xv6QABsPhK57wCdkAVM8zdXVhYhtn3dnh1aHceGeJ8mp9ioW7hk6C",
  "key26": "2nuywZX3G4n6ysQqgH1LDuUEhHwsC2CsRsXeswStBsBx5Y1Cdu3Xe1kNMVuLwgxxGTzG5EhukRrc4MVqjhdbACHM",
  "key27": "2VYdHPLxoSgX3ErvFeSdmztCLERzvfeBkABeqTu8qxMYhEkfSeTGh8iUf2WmB7YaKfnkhHVT5ZNgFWa14Sei9WSq",
  "key28": "5cCZfRPvp9YW7dWeQsr91qXtNQhkCWCFfBhiwZJisQHbab7mf7chUY6wxW1t5E7BN8AHcqHibmsnqx1peorzG3bw",
  "key29": "E3qx66pfXo6FriNchyXzsJ8ARP8eGbx4RM4bfz3ebPK5vjuzvnsaiZWFougWh7pbDLnXcTSV2NvJTR2BohuZeA1",
  "key30": "4HgP2QLXd1qZfnZNCgpALCwcYquj9q5P5qwhdxJZcSXLmRfw9sMQWreGNZWbJFHtt1V8B5vzqmhPnoevycKkrqSM",
  "key31": "4m7aSo2vgaFreMRuHXYuQAbeYLT2WkUm9iaBHVGurEw61TytZ33pRaKUZ5GaWG22sr4wxAxd1scfHDQg5jNmpKYM",
  "key32": "3g66NEmG1iBWG9EbK19eQqLAMPHsN4Za9iTMZM1uYvJAxTKJBFbMf59CePkJs4xnVdb1waNFq1yfXFjV1APMKSMe",
  "key33": "4XizsJQtoThe7u4XCqQdZxQCxJXULcC9gJaeUjAo3cUDQCUGTHNKXGdPAeKPgD9TK1RRPex9ionV94gty4izvuKG",
  "key34": "43biqAJ7SkZaVuzWG6BQcUo7MGZv4QrZmhcc2WSijr5c4reRL1xas75G84PsLzKa892QKifzz8N4mDkg12yp9w2Z",
  "key35": "2YduKoVyHWybnMT7XtR5TYZj6MY9qNjysuygJhYQX7tmVnhxGiMwsSBLhYNP7PvrPGhWZujnBS1LvqkEEVRzEB8v"
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
