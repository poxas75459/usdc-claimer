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
    "7TV9oAWNzKEgBfvSFNGzsJuocSzGzrvz5QK6jpd8ixpANETBTCm7tDqFf79QW3Wp63gQKtgfHNbkWmQjKchsLoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ib68tFLgfm886Xi3mjixxMte117K6gmZgvX5MR1hEwoad9F1rYgTonKTYwRvAnrxoi4SJXCe5P6CLQVSRs1H2QZ",
  "key1": "57kSjjWgDnnb9Uwcre8HZpDwnT2c7UT8WSxv9FmZoo78Eo7DT4SMwnMF6ybLffo9BM8B4trpJ5vFs3oHJbAjwDvw",
  "key2": "67LcEbGmERew7SwEuZHtwUKRW5675mLPv5MTRQqWvqPivC5E9eoNfq7qGiBfLVNL7sCqwAsLbhE8HMPqpxwxKnc5",
  "key3": "3bwBbBF6x57tzFTqUeDj8Y7s4MbafFkaPtmP7rXBhausEnd3f7Dadvaym1AgxQAuYZRnBNy9hvVV6Qg4fuztiRdp",
  "key4": "5dZQk3s3KppJmpUZu2CThytfjD8U8iCvUprnwKosyrA5h61wdLWWzb99FzNjroaLVAsUSNRrhZhozZRkpQzzJbg3",
  "key5": "3sw6CPtAfxPv7DXbC8QpVNzUxg9N2f9xxG7mQSeLobgRdGMmcc4Q4VKc1Z1e9VE714AXUcaEEmy9ys6eEjusKjNw",
  "key6": "ZuSNmpoKPpCKAqR4nnxptbemGjtKMvyJi95VpL6fR4JijR2uEGiSJGrkKRk6kYp6fRuGYSNaVRkhwHZ34PNmXgi",
  "key7": "WNqazAv1wzLNHwRvWYWDzKtr7CykHdEmxgQWMkTiBAuRYMffUEnQcLZPkUSjWX2VcH4XcaXoL9UqHH952bm2W5F",
  "key8": "voriFppyynr1BF4VmvzLQ2ZCKnz8yksJNcjZhPzsjaYSJjoEmdzf5MVUBqZtfffQyaYS7WstTZbwr9zHRmSBweP",
  "key9": "fMVFYEA9JGwcEuda77i3TeMY4dapzNxkq4qjEiPtScmG6yg9TTVhFaoj6Z7RPRHYnxWxbUADLiMJqiZUXjGuPmu",
  "key10": "5RdRf99kgaNDDRSCo36wb1ay6iB1AmgfdGSGzcD1xBuxTjVxjDY5sLhFq9C4pUvJecFiPX9K58gYvAgw318dU38",
  "key11": "2LssWE5AhnVrK5g8yqE2K1seATpSTebKRnEzZyiLyRAN5gdc9mbFVHtpZXPu4gd2FSaMx6HTBX5EZ57aGtf1b1QC",
  "key12": "2CwfrybFnEWqDTueN7zztPaTNDUxyZxMLad4t8CYKYaHtzdgZ9EfMyU6CVz2wJFKAxYdWB98TCmMBj3yFTJFfb7q",
  "key13": "2n7wstRHjX5ao3aRiLwTTPSNB6VzfedoaVYdjwvf7Y2PFNFLNfhAceDvEwFFcg7Bp3fqzVcKprjik8hky3Pcwae7",
  "key14": "3Gmpp4FT1sGJ2eAV5y1sx3Qxe7YEDULEbVPQ3CJPE6ui2CUZkNquEAVyq23ajFPp3P8sDwYcwK25jV6Nz7CrEt5o",
  "key15": "584rRkcwrz4pqzExKjXheckLhw6W7KmRaTq9hFNPCX4usqpxcCyacjXro1buTmMQuJQfzXJFmni3c6Yfs6tb6v1W",
  "key16": "36WRb12faARozDVbDfFKWutb48XzoZ5AjASoUohjhxCF8Ndy3TVjTfLuzGRwu3rUE4cuKB2hft8mLDbLnJuR6X3g",
  "key17": "4xaiywWy3tc3c25y1uPm5yZ1AJXxdts9naTG2HgqqUmnj4KVYoQVqvgrJmpMurEQohgoTzi1SWcKPzPotRAbKzSV",
  "key18": "5PcHywsmdg3as52PnqNBV3QrURvTRCPFoLkELCHpjFcNuQ8KFsvoXYDXb7P6u7S4BrBjKEr7VTcp51XPBH6qaxxT",
  "key19": "2qQW85QG43YxBSRnmbuxeWdFnnDNdVYVUQ5bNtejNiWtLrnPZNK4UXyxaW3XffZH4CiE5ByWGWLokwEqTijNpvNk",
  "key20": "4NsQihFTxMTvrPowNJrUzzPuSknL9y7ZqUGWPbaZztrqDMT37M6roZ8MTdU4WaKmKPdTNiimke3sxBPxjJ3K5AcH",
  "key21": "5oYtLNLrAkzJiczgo3rLjUfgrL5jE54RwgP6Sih9GD8bHJeYnCwkBSHxqPstrmdfzLCqn4bUobJpn6b5kddyp2Zp",
  "key22": "AfghaQz5gYfjQwECyaevHdRcCY1V4uf1g8n793JKahsKkv411QU2EeuX3RH7nhiQJaAJ2f4vsKdz2rXZD88YWvm",
  "key23": "3dh8xwc5cks7uBw4dAnxtVBsLjty71u2pCZdgjMEn9Z94TRk39KUWhNS9FxxPo7vgr3wEMR6qd15nfg8PKbJuqHH",
  "key24": "gJ5g3KwUmapUxcW8jhAEaH2fCkaeTraW4YqXZcJMAG5MkRMujAjGMiPUXkAp7Qn95U35hNK3xEpj2V9nBHMEBJg",
  "key25": "4WWFfPFvb8xCtixbVtDmWDqW3mniV27EAdV6Ew7AD8YG2KsnyNMFAkRDJhSEkD7T21avYonfqRsBy6iuzJ1zMxTz",
  "key26": "5CUWrgdrMNo3n4zcuvZgtNDKHtpdjbhhvdP4u3rs1BRqvVvy2B98Zq4P5rDwvZNJZ5endgjUmZofRueRFv6XsWXc",
  "key27": "31bft1nunrQJAXXdfqyamrj5UEPsV1mn67b8UcS8pp2TLuJXEv8x2R3iyhoGFg7igk43Wg7Lxti3yUzvm4Am5rTG",
  "key28": "3SM9JzRGhiKYC4t3UCae57pKcfkF2wL2U1eraVytxtsA4QtR6JWGSjjKTHE8sgS7eiDUQHpjyfemL21pjSu82oex",
  "key29": "4kDDr3JkDfjXbWLrhnaG7tQSV3S2NjivgrnidECG2x1quhbEXCr6hiCxgVcdxYrKjwfxvMCMPyxc37U1AVvPT8Ld",
  "key30": "42pAG7SehS3t5F5rAFUst7XVPE1kaKHPTkAqWaRT1ZzxPQRB52UTboxPfab5qtnMkM64dsoZYByvVamy56wLChyH",
  "key31": "66wS1XCUqucT9nvHeXduLcXQnJiEs9MxSjsLnQP5Gnix54bJZiYe5V7JAAbBpZEPybzHsuve2VBf6JcKBx6zNxCn",
  "key32": "5h1J4kpabazDtiDGR96JKf4aAYMNbV8YXtsGTwoGbgdEgWeJV4SnxSKNxoPENTT8KiGY2y851Kqfotcdj9ZQmM38",
  "key33": "5txpj67rT1oZbrR9Sipm5rPTPXuUNGeoJCfUMrsNhLjpYFpA5QcoWmYJgEXQAqu6tgHC2fvdAcECKwKn3Vopd9Bf",
  "key34": "2J154JEkrsbp6aB2paS69XnCfpHJvEBHdE5cbkVZ29xBh7ZkDktbpnWREZkV1Jci4agKL4MdAQ47cQ24otJk4maY"
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
