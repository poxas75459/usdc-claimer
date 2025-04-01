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
    "3vd765gKAV67Dj2xXGV1fj22mtKRJx3QP6Yp8RZatzcCjtLJcKgQ5H3ZggwCXzg8deqTW4q75PKpcyu95upRgUXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ei9ZrjPcojjH7CacZqw67bSGzR9hxd68Xanoo1P7sqyhGCFXv8mnrXQ8UQd5BB2u9LsRnKADR57zL5wZ4X6J6k",
  "key1": "5BnGLjTZZBdCegwjK2ZjGDswJ4shmNgt2Ctq9TRiXX6TVcdW13h2HMKGtV8H8pLUC8xoYoAbKnubB9Sp4mCeytrs",
  "key2": "362MBieawH1Uuk8NTE3MXEh2Ts9VBZjNauqs6YJFAjBmn7Y1TQcoxQnXHWR3LtUXbp9mFET1AV4SbB9hLf4srjh6",
  "key3": "WbKUg5SK49WwvYXAiDZz9BTrbK49EZsnqKHRkKbUuWL9JUAqc3XPHgcNwxUjwQdJKMVZspF2H8mzQZtBj6djLiy",
  "key4": "d2oRdYAJGWGyVLVCuEci72kbNiaNFuamJMfhQD8vrRQnA1j7eL1SFkZV8Y1paRCDtXu25eSA9VaT1Crzg8KcKZB",
  "key5": "JrmUTeM9GuSq2i1P4yWGrjPvSZGFoWUHXY74qgRpWSvJE82WsUW4H2oJ8i3kGQWLXxZjmckMF678H8WXwxXR171",
  "key6": "5XzLizDZMyEgLZdtZTU1DRmLzmMwyoxSuDV7zzrZ2Y7DFTy4sPnFzGrJxKD2iDNnnsoBLPxxnkWpGZrRDkTLwofL",
  "key7": "2xBb1bbhL3YGGcskWQQ366btMg2E1bVkxy1pdarSQm95mdYchx5BepP1HNrjW3U1ts2ptwj4YSeatnC4ueZxgRsK",
  "key8": "2EiaD1C5XmFk1KipUhuKXpLW1TyFmiTHuRgjZNz9Wme7dGybJP5mDE6rXbaDPyADoanTTrRz89XNcb3o58gRVCSu",
  "key9": "4EB8WSL5yQuHPzFwL85RGQHsoGjNmEpSZvMoq8oQ2rfPF8zLeXJXE9JTrYvEu4RDNkxE9Aza6FNjSsQm65HEW68Q",
  "key10": "5tMh8HTvp5ZKJLm3aZqxFpST229XjKhMst2osrCsDehharnQHAZFdVUwnWobZuARGq2RWWTQi1mCAx4jNiAGukLy",
  "key11": "3fnsgNBbwesKrr6ffKBw7HiQqvoykvAwsV8j84oeUddgcfACMPMKjS6ZiX7UXqdvx1fApow8JFNNSdM4gGA51A25",
  "key12": "3eaYPEjfNERyzrz1kmpFXguVbMJe15osdec4VshnbzvgfuUKTXf9CV1kCS98JkmuNpY9x8773JYhev9MhgLm8V6C",
  "key13": "Mnh6Dz9wr6LK1qP74VheviJBHgE13FkxrmPre9ANPLALxztppJFrPNvgKhveKcQcimpfi2xW4X7uU8oc3xiYyX6",
  "key14": "3pzY9c9KD1NNQDns3bRxiqWMfkT2wm5XZVF92Hc46bBjS4LZiB1UJdYBMy8wY1Hsd1mdiXR8AUWRfoNBuwrscWvQ",
  "key15": "xm1PXBSmLZTweWS1QR4KsxLCcYYdmtWLV4PCJTbq9co4fmPQmcGQhaogwBG4MMypfjPMU5aKcVAzbuwFvLBLhiB",
  "key16": "3exPGoPj8eMpwkCFb7WxY6Pe2nvhe1cBspStCGAQJ2FhFcw9f739E68MBRj5feQNfea3u4f17u2Gobjh1mqQQxz3",
  "key17": "4ddqZK6r1BCNWuVhLQQCmx7JEj7VZ7rfQPkQkAhHVbkBTUvZz9ttstgLBTL7BAKdE5LHnEHJdFW5eRB9YzD3tub4",
  "key18": "4QwuAri7EqfvfXx9aoJvEptvUYhkrGWdMteHW9uVwyH1VVDf1pQXYWyvUyvoVdmsab1ksg9Ed178GZ7Fh5mzbjd3",
  "key19": "39vUDkfRkzpGMqtiKUftLB77WhveKoyVswC3AokUFq4pUVWFY4KeYn7JxDo4wREvWWBVnN9CHQUNnVq6UsLVfKW2",
  "key20": "4CcUNMMEDpgbAayeZaxVsQFC79HxFmphDMh1EDswFrhLpuNTAA6Z6jekUv22fTHt1ZSonLPPeHxUdp9XGJsDx96W",
  "key21": "4JENqziLj14sykmG4PVDhEwgzJG2RzBqvvWPCrFQMXbwQzkHTWGUCupyQAsVJYGTzpQzesA6MsVXe7Jp5bb8QfPu",
  "key22": "5xoBtMbzsW8tWdi3sMiTLTgshjmfUwdzBJfLcwBN813YTKVEJji447dEdNq8MNA6KTqRLTWpZgUHUN1xMAyLinh2",
  "key23": "64Qk31M9t8v1tiBz9iesVC1nETcaRSMaHHo78scvMpSUvE6QV4sdfKrg7P6mCLyErVMTJgwVBRztWsoNASZht8Bk",
  "key24": "3NHB82Lq1Qgb3492qq6NQpeT4ZbgViGwvgePCUGb6uhN327oUQK6oBgZFGZjkv7LGZiLKNfkqWW8ZEJk2ECtXq3q",
  "key25": "2yhrbHBFwn26Byrf8fFXfA8J6SggSEUkP1q8cUCxHNSFbG4PuKg7fop7hf8m2VP9UmnCnQFQwYepXBoeeYTywnKS",
  "key26": "DAvn4j8kmALFpjgYWTNLfyXLcorCJ2w5Zt26A5HgYNNWfBXAcirhqtjAU2GAMN6EnEUE2ZwVhuA8a8k7vVYqSZA",
  "key27": "4kLNQUEsQyV9TAfKBxurweRoHiJasW9dBNYJu31WdzhWN6jvAq3TDdru53ytKTbKuaUaRx1jJ4vA5H5F5DUDsuw2",
  "key28": "2LDGJz9sZ1JrSzTb4xwMBJNTgabWTheLrB2GvUdFYRnuWqy4JtLWuJwfgnMVPWrodLuv4SxZv9c3q4vFb8CvVPdo",
  "key29": "2EmS394miHeU6G59v3YkRG5gd8zihig36LeUcogG6vbeJGVeuntKwwLK4YURyuUSvzzAEsy2GQoPeNfJdkWpJxmM",
  "key30": "5g8y5inU2eXPThVT7U5MVyVx4UWNccsGQjRx67yQYPNxEFXeJ24rdcMwdXqNzTENd5RA8e3VHmWbjtNPfbpSpNqg",
  "key31": "4paxbkCmC99XbnZWz6xePhBJCnsk99ouiihXsiyBWaYqpWcmD65ocTr8WADuk6EpeEdeMA1ij4hceNjFsononLMh",
  "key32": "Vcps1oU76UGjsoZy1cq7sormVGRBP1ns7xa7ZE5URUWBgVKH9NLR2hXFY8MG9VqZULANWwgwTbrioQom4SPNRhd",
  "key33": "4wR9w1uYSDhD1Urq3DTszGfmKSqaLmfCkLi1G9no8racgeErcXSdiK8sU6HcC1yCSXc8fGr4DrX7k8wxRpoBnrTR",
  "key34": "5nuP2ECAMXFfmsDC8YftJm7Ccgzy2nyvpF7DTgqB6pWa7gsLwUcaoTj71sjNsvR8Dpjjt5tQFGM35zmchQ2nn2yX",
  "key35": "a2HSZL45rb7dZ9b1yGZHZVowqzAGCSwkSgc29JWFCEBiVFUo3VhEuh2bqdX6177m5zkVMFaH98i9tfnGD6oouak",
  "key36": "4MEXxd73FNFZqkVPFySU6DcJPcGYaGgBR5ige2AfFkwq4huo2aYNdDG6ZUnSLYWuMeAYGfFggjekBZju9DhC2jUN",
  "key37": "4EmNeuM4ZPM63AB1kSqENC166WkZdDQWws4jjntRsJNMNg3hbXa9KMR2mA8QcK1AyjyoMAghzz2XPht8hQHHMm2D",
  "key38": "5fK6syroag5r9M9cje5Qmk9dwApPSPB9DxwW1rB9FddorYwLvqxcLB3EKbBWDMeKMbSwXMvdRvMz3e2z4wzZ6PGF",
  "key39": "5JkbNdfPjrP3JQm7KXqbTQ3KP21eGSoshGoxwXbES1YsqMwZ319PZTUeVuewnVNYLnQivGY5npQqKKRj8L2UCG5j",
  "key40": "2aJcNsVGoznLgqXutdRWck5yR7NvQwnWmhoFt9vQDk3j6wW2sVw2y6q9ht35SynNLhakcwmj1cHH4LTR9LRJGvM3",
  "key41": "2fdczzpfm5VdpbBrh57KoPAKh16HyQYDBARxNjMnMBwkTK3hiVYyEoPTb4wjrLSr8sDbKMYwqNfRNa78T8EaYwzY",
  "key42": "5vaWtUFsks5DXmUXPpRzzkwYvfFQJuGwvKXqZMoPFAvdRteKwkTSHNZ5Tefvs2UShmkEzhvf786hRjcWJsSdfznF",
  "key43": "2mPfqoPne8ZHeEJmHzXERi118GbUweEmboqpswRqkR4Ur1mnLVGQaoShhxSN143C1UNgCPEhhu7FZMRbtCgy3yDo"
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
