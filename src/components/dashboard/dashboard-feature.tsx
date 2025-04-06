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
    "HL9ddyV9MqfHTksKVE2kZdfJD4R8kJqUcw9kFDJkn1bgL1dJwkCNKcyByGm9QWNxVJDnQhci77Zi6oJJkaFKNtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t62kw5h456hQ7P93S9LhvmqjESBGtHDLi2Gn3d8gC3BK49jPxqFXxJB372F4LXtXHeZtT4bDAbqDbKTvArj66bs",
  "key1": "pxZhnUePGrStbUVFSWpwUNvZDX8Ywq7MXAf9Fw2HeBfjJyLK1SzJqrTYxDn2rmHKzb37QUep6NDdrD9qbcLF54s",
  "key2": "piRRBKUQqNwSAnqigmE8bNt8Cq1z4yHrVehFipmWsmc41ByTQoV5eokht3HPLcvgtgdKhWgb7oGsnuNcCCCxYfE",
  "key3": "2qVQKPqFXXedvw8U7zCWgVieAVcKsMfEHnhoZu3U6o64WXBNt3oP1Ha6XtbWEmXL38snphbEzHo8bNKmtxbc3h7w",
  "key4": "3Pq3wnGJ3szmJfYvYf1zKQBroKjtfzrB5ucyyjZmcDvaqJSvutT85LSrEaQ5JTEqWNbe9q9aHgFvDczbWHXsoG7N",
  "key5": "3M54ePR1TQdJzm7arAD6JTARXAgZQGp8gr1BKKhKouT4wrez3ECPyNS3ps4HaYAwTbyqFBwqzgF4rXtZ2V4osCyu",
  "key6": "38zzT4vxepL4mCpvVKXpL2194mrfLfsUMPoTYKpJwqDPJHA9dD52XLamKUydrLQTebuVuQcuVQ2ftn7qyADB126V",
  "key7": "5pmtDiSLHPHdxCLqXJRQdSivK9QE8noBZ3A66VFZdBTkL2QpkaDc3DHMDgpqte4bVEQnZZw27Y75E6WU2psrDoXp",
  "key8": "62rvtbsbDXLVHw73TMHWcNguFZ9b7V1yYzE9iQD2DedFLYgEXeeeRRAgTHFHuEWV3mnFjprrCUgWq9M95pV6WQh6",
  "key9": "kkdtr6uorQyygtKffU7JFM9DY59D6sEJmahCDFWTnFmu7kA9mScvkS6qxEob8fa5jzUMQt48oiLeTN31P1Upzwh",
  "key10": "3WNNJYV7ukXLkBpdsffEa6DBf1CyuBQyo3iNmpqARX6eFQQE2q58TWDuvVu2ogNodoEFmiMiui25oc9FsL7oXZUG",
  "key11": "29hha4st2ouRgE7pweRCxNbvpUPD3kNWdCfb2HZKbh1y4Gy1izVcnumn7xGJL7LS5pVTMADctU2SZpq1nVeKiEh5",
  "key12": "35ab4f4hdZ7RvPTxsspq8ckg2nFex8uHBmzfgceWxU2D3MMZGBnU7KKCuf5rw7GFtjqk5wvTAkdezKXXTqN5TkKf",
  "key13": "5HgLegdB9atrbNCvXPdYLx1BJJUsWYxt9zc2DgMUCU6G4gKfdnSP2oVguEFvjFJisUpvLrDmsPRkBTP55ew7RZzp",
  "key14": "2SjmU511UxdFq5gNxhuktqQvvgPsZemJ5nfU5TxVuZbbWBYFj1NdDQy64JFMRkiKKYaBNvGuBGzgcoFfw1d7T5VQ",
  "key15": "3C3kBFcm6Dn3Jyeo9Xz2JhcBc4DhuV26MkmSQ4pzzSAcKv4eC9LAFn9KSyVCWSyJQrmt5JsMoFJTrji6NZWc8yqc",
  "key16": "3tGDYYEXm8ZkTLsUFFBVzVA2kxEp8bPHpn54RKu1HSrZvbC2dr97p3PcC7Q892qT7Hn4cbM1rUgEXXJZytoJW3UY",
  "key17": "4oJkKb3hoyoz5fvYQuU3Qri1kJLxjkekuTgA1UUJEMnLw83is89VCq2KxAFLEaGonb891QinxZuAwi4Ga9o1sv5f",
  "key18": "43winw25yNCxdKYeJUiXctNvLyVL3AsKe9HmZwqhGeZbCpKcBoAm92iwe3B4BEgpSYbULDUhro3zMgAvvr6wxb1o",
  "key19": "4VxYF3HRZh3BWiFZ5ZQkutQfRczGBrQLT66xjN6J4inr8GQDMs8LNtAmBNeiLXu2pfpwBQGqbWxCg3ivPz7x1T5F",
  "key20": "3PMXoJrGAeBYjoJcUcuS4ME38tHwSDvYDFvxfds5peW9ZeKgjcjyDxwcTGaDaSCNVfyj7ekVyHGxPv34MJfPR6qR",
  "key21": "4RKfAroN9mkogH1r9ZZVkHGh8XwBuQFDVJDUn6vf49VGghqL8ewYCYxy6XPVi2wWjC2ZxP9kjS879VzHYs6C92c5",
  "key22": "4XhkPss18Loh3i4LRtdt7H2vfvfDwRuZXDjxf32uzTzTaUNSsiESSKc7U9WeLW2CFvL1kNhszXCgG7VDcN3upLFo",
  "key23": "4RVfLLdnd11Hym4RMx7ZJGDi2fer4rxbuuLhevbcQKsyTU9HezQLLxQ9iiTaauT8N4sCZhfzDbEnRCWMbnGTsDaF",
  "key24": "2uTr1heJUxoy6V3j81wMfVSFBMKYyj4HsJbWLzX77egKD3pMjY28T6AWaPYWZR7hkPvKokQcRjQ8hz7y73f26d6e",
  "key25": "2PaufT4DbqLa42CAPLuXoyEgypeSZ3HWPwvLmiZSt12VrfGHwPJPpewSApSevyBGNzE4V5NqMLnFUNGbhZfkNahi"
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
