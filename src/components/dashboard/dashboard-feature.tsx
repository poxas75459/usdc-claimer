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
    "4gr4TWJAnveZJEyTD6c3vaPTjDf4WRJQ1mTjii7bD5miwMEQXypvTgTMZg52HE7VxxVYt7CSiaRybGB5cb18c2q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jmgjLbyA92bGfBSPhYAVoFSzUMmTkQEgA7kXtfV4ZrUnQnh8yRxo1VFYsNwLCvrRNAYnny8KHbNJ92BDQ3hHTC",
  "key1": "3jU1s6KGyhWkwjpYzbeZSMS8T7exNFyTanCNmpdLtsisgw1touEJVwXrinb2JXrUkj7mHrCbhXGyYcGVfX1CrY4K",
  "key2": "DGtznvFicegqyfdYroL7PVAeAdveeYRdepmvZGRCayNLQ5VKNvM9ybYANVUUs62b1TjfKggFGKsq4SPcBsLNXBc",
  "key3": "4VSHb5qMQwztBFia1Fm19GfAVygxD48Mo9P61MhM5faH8BAACSwFYVSeMBqKM24QbvYcZN73EVjaFQcMKTNdTqLM",
  "key4": "439aBnSbbutNaSjHzc7rcAP2PPXqVFo5kSLRPha6H8XhzcUFGtZ75dc7guQuszXBaxV35YbFJcdpk14gWL4Knd8P",
  "key5": "5KCm13DUoH2RMMAMEbcJapxmKjF8XHCHiWuDCimF4tM1qnBVF9bPDUJhcs8UkhanUjcjEps6BBpByADPitFVXZPq",
  "key6": "4Cc3SMT7d7SGKhfnnYnKkMsAr8APhwDW4jS2VqJjqFfYiS4qe1CUK32enQHNq2qbLCmQUXukmAzBEHK2pAVizjKQ",
  "key7": "4vgd9dXenpTzLN5V5A7Fqofqo8SZjdu79cy1tYeJwDrywwpCceSu81zCaigJmBkfgE9XP6JR2j7k2fS2oGVqkLoK",
  "key8": "3K1kXTVCSQzKRCbQqkP4pXwCHzF33zDnxDjPJYujJo8XZmuBZgsndpq3EXoCFuY6ZSb1hKNLTeQzSpqoWx981kzp",
  "key9": "xhKicJ7HgkqHhwDRoY3aTujEaVqhZrWWZDVFsVdxDXR2QYbNhvmi41jY1oFdWgxnGLuX2RuhcPxiBoWuHetXZKA",
  "key10": "3TjAsexPAy1ohyq9ZEPhEiCYE5ejbsi6UXLXEy1zv8bV96BP4dXTbPKJyK8eFCWapc6hHGV7udhhhDN7TV1Uq4Ac",
  "key11": "4zQoce5RudTgyPyydVcNkSzGg3wJWt63wCuoWjDXinGR62JLgu62JTcaBwcGNC4Mpo8LTY2wcdUbKXQ1CVFWkuBf",
  "key12": "4jT1Hkbgsg9syPZvuQ3R7m7vmHeUPjfaHKvGXTBEAgvoCwGDvp21N6ij1dog2i2xoqsqfLCdqipbMCNGkiPco35o",
  "key13": "5v6uUN1buoW9sUpYzgzQXBDzipxZuVsMJdZSHiivodj4Bt8y51yntG7W3MCASgHp6uUMMamtXs1kQ1uJhgt75doX",
  "key14": "3qhBBA71D3d9h2Pux6HoFHi6SgxVsfH5V5qJe3egF2vqpGkRoD49WyRvWNSBL4vXoyHNBcjtFUymGwsnPEUHQYEy",
  "key15": "hEtXLHnrWjiJBtpK33vCE8H2T4Ktz5kDdNq1zF9KuJ6dmLFKo6cgFsDq8MHdYuARNAvqGmgiJ7bRLc8prJGStcA",
  "key16": "52QcPgoLZw4Yd6Rrq3KFidTEzZfnW2avkKuTekhU2hcsRCdyJGna489qTCxbVr3joRrWEcooBi51fm1nYR13ZWCm",
  "key17": "QpWCQvoyKjRimUxvcLvqu9wJpeHiMiJPZqrFSamZakRxwzEohacc45Hn7Fxu3inbxSZKSZwwmr5Vs7pw2JFMTAc",
  "key18": "3h3SoDD2ZvFpL9B3GAskHN65ntz3GKZGpVszZdQabxdEHadbjfPvJmNBUmj15idJR6r7ukYLaoauK6JBaJXasFmJ",
  "key19": "2E2K3ZQFhtBrSBw1XTUZcTtHpgyw86H2iXKXRip3PbBMCPFCj5JxR6MJS9FkgBi4649Warh78E8oMGkkWbGx8j2K",
  "key20": "NGkadGnVM2xwdyoiTrVYS13Rx3Xu2CPnSXKr1LCWVW6Gfwc1whQ5HuKf8SHzVjp6mHJroGAmzqgh5n8weFPrREj",
  "key21": "2gQUXG4c2hQ3RVhDLPjqPvFqdcMFEfzSphg9vBV9YWpwyheG9UBUhZXPxfNwBrTdwYfDvJY1q7mwTGuuxDmb2cHs",
  "key22": "AMD4YgpLGwkNsnH1ALr4YzBUGeJSU9Mq3KNYcijnfCH3VvipKC8WVxGMpGVQDCh2JPumK1DXTzhDPmCPcsyagp3",
  "key23": "38fYH25KMwhSp1mSnHxZ6pDX34zEaBa952EGTccK1k42o5gQVBLw87vpiBtVXTYAdTb6EgnqH593gd1NQVutqozo",
  "key24": "MWS8vrBYGrVDeW7Te4zxoWniMDZ1UGscAK2f7k4PsZ2aWnGLdvbxFwhKkZz2D9bdPPYEe5ZzL9aZLcE69DzDQD9",
  "key25": "bG4UeuCAX5Cx2wCCX183YzwvkSAiPTLATZAabzJB73Lh8jHemavhEWZQB9nPqHEUy1ceb1V5s2eApNmGUxgwgpn",
  "key26": "5CFYbQkcJnMRjZiiZ48wWksaQ4YqTVs6uGuY3bXB9pvwTbMrccburBE3Wab1AB1rr34VRVy8BS8W4Myk9krxjt19",
  "key27": "2KQHvn83BZSr44vSrjwFX79N2AmtJ3dKpZ3DQ7P4vUzanHXmwJapGwA15n7qkUiYpFCw81K5Ja8KvyTe54ZJ6oHp",
  "key28": "3H8HbwHcsckvkeUfMwSUUh1E7ePHVmMTG5jLgJ4hX8wTghDZfJMHZPpaAfbVp911kvrj2sQ7qfLmEo13138Z7Tj8",
  "key29": "QzF5fY2FxNE7iMysaKR6XACUfHZTSdTXDT8c6g6rbMsEnbe7eFqFcPad6ned3YGjQXpEUTASQCfzoMe3irGccFb",
  "key30": "5ddFreCKy77W6QY5j6kMQYAiGXgrDdyrXk5xNfjqZaEzyAEVEUs3ThuXbnTH49b9vY4rNQrek9jUxf8G1MgUDHni",
  "key31": "BU9LgqUG9639jra46G7BVtje2t1tGPVQWfkJnadFfiddsfs7xp9xN7oX7dtSejrMzuz1XT1szw9VmuiZAmw8mWa",
  "key32": "2FU4ZC5j6b7BvxWWjuJNL1omDMdPosEKvwKXcqiTnHEHNZjToMkisD62p1SwWGUbxzk6giXfi3ihAvcaWjAr2WKL"
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
