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
    "5zwhax6NgTpkCaLkyYaeudSuiS5zPVuk7svYz1EHu4L4gMCKottkjLHJz6qfrUohe5N3YvkFFBLZWs1crpW3Z1G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hm69pi7y7HJsQxp2gtW9KPNSCc3Ary3fbpQEqCRUQjCnncvbNbKSDYG65Ka9B97WDi7KbqXJt8hEC3bvUSf5BUJ",
  "key1": "3i7UZPTnfLAPWw4NRzsE4Fkmg5r8YeoRo8WjPoMWqEJxNR5dyekT7WzBFrctKJn5aSYFv3h73GHNzDXXMASqBRgz",
  "key2": "46sVeB8SbtdhwpU1caxTbVs6SkDWNH4w2eeJCT6nCpe4CKA83ttRpC6G15WjUHHp4NhbvM4qKmUX5XPwsb8K3615",
  "key3": "3b7bpdA3GW3KcRLL9VLycJJkQkMkLEAzcgD3eRQMvnNvmRUsKL72x363RiuT756pBhBP7HyJpNz5Zn3J5SbCmsav",
  "key4": "3c1gDhFFa8GMiCV4Qa3gTbazyf9kVFBrkot6uEDpTY2zeHjuayUF8WxQFc7sV81JFuc8c1uUXSxZAzsjwBktJFmf",
  "key5": "5MBVoeGZFPk22ywBXN52rcrLRnaBYwZuSgpiry7j1qxM6kY8ZKHSBNDxrZWdeALDWHzvsqwuzcubh1vtedWYRXoC",
  "key6": "4zcgjXXHHbTaq1y9A3NE17dPLP4Qijzz83WmNhR3HUT851eDm1SXs4hg7fjUK5Z4AXHnuNMYS1ivuXGJWcK3qUHc",
  "key7": "nzUhxh3gaXEJS1UoRMj8qXi2wdmeNzacy1hC5Eft5qovmmUJ5vzpmc16c27FMgbEU3zuMcnNfCbZuQ9A8s4jGif",
  "key8": "3Cw4dZRL8wffLyhb4vpwTo7yyXjyNiMyqamuCSBetZqViL9Yd435thRXj8yLu1KKq6hpD9u3ABwYWHJP9WeoPYjA",
  "key9": "SJk5f6PHDWYfXNH72Vb5BVJiqQz2r39CzrtkZg6xX3Dbfhne3QmqgAUfF9FrNwUidUZvUVbVgo2a1i5jEJ7ir2t",
  "key10": "5WkqnDAHRY3QgAtLgc2UPhLnm1kyExwx7ctaYtUDEbSeH2G3VamsRH9QPkxbZMypsdKw5cmWJoACcBqtuNrcuzwx",
  "key11": "5ZTSDSomD6JJ1bKYCgABGS3xwdpdSmUeyoy4vn2yWXPGRdcvfmzhh9HXKyCKXmA7qf733i57zvo8U9ZXFYnAjaZ4",
  "key12": "3hCmMmARdRE2ujUcgVCxMxPQWL1aj6mmG8kzUcvG8Ww3JdY9NZi9Ga5xEaMsbWhwxivkWBZduUPtyQ5V7kr1ZFyp",
  "key13": "3uD8hTx1muKbHx9Sz4SigoG4ogzSot8Q4UpSHv9Efg7Nt8RhAaw4Hqxgv2FW3VSH8crRcmDkaynMVvZqNsJ5kYgS",
  "key14": "3ZPrGyGADoZcU8fM7YbtCFsVK1PtJKvXXp6UnqkT8A4qVsrodXxZXAFfevSeXo2nN3tDoGiFo3RV4sPZMm1unRmi",
  "key15": "znNFcbbUy3W58g2ThhUDr3wYbwpoJM6nwhkmvCrSzLp5YpBksxWtzsEGmkZtySTxtaNEXksJHoXucWi2xcUW4T7",
  "key16": "kB5yxMtAYFCmAUifTTHghZjMeJ87T5sAcB2nnJXHdfbVM2uEqeLkjNRBcYfHfPh61vV3ZHRp2gi8hTMm1iSW1Vv",
  "key17": "SxDLvv7ULFtAeVNRAmbh8rppzGfNBawyTbnDUd2AFZ7rgkVUmVZMtRNfvM5SKvxqUmrmta8fjmbNTJs14hzeoYM",
  "key18": "5oQ2MZeUbfdA1USBcoe76aAdz65fjknPnnymECg2R5nhiAz9ducuh45N3vQkxWgLcyPJzXKQfpKoXSWzm8VPHYW3",
  "key19": "4GpKLwNUZBmGCSBnUE5kncrgMtengFSgkrzyGWpCTMUH1K3iXbGgg2JSAEPyKKnFNTfgDAUiAa4WQWpjUqdJzddA",
  "key20": "2FUeC42LuGZdHM4dWKbdzKA9BktTyXj3SZhdB2BmFsUqptFM9MNYhazDBYWyuHHD5g7mUAtGYsD9BLPuuEEGM9pQ",
  "key21": "29Dx5yrD4N63N4RTxWJDNd1vRR69mHCSwpPuJ1upkAFX4HQ1J3uPkCfTRkBokBhccSiw7ptr5mnyX8je45waRj1j",
  "key22": "1XXERPBHR241R9FFGkH3r53N7TC3eRnvpuD7de9WVJGUtKX5XKJSpWsQLWoRim7N7h2qT3wttygUKCu7uwyrYDm",
  "key23": "5qZXfxXvVSQjgSjLzNAYGdMw9SNbhotAc4nowAAgy4DAmfQ1LuTpZrkfy4uXBRjSNqGRRdGXu8c28e7ER8G2Jf7h",
  "key24": "2BFActegiH7mvBE9Ncn6qjRmNzXMV25WBKMPhq1zQsHi5ScKfHEFpny5zuR9UVkXdEiUQyWM69h9Q1d9yqnbLZ1H",
  "key25": "5hCJnjGbW87fijKjZiG5e1Tm2GS1L2r15DRV9AAVxYAswAxxDWZg6woGN3X8SSPpRu8ArhpJo9oKTXAaeb5aHAbb",
  "key26": "31VM5WQFzGW56V5zGPyTt6pfRk79FBzrsYev3U1qufpMDXihKh5FGFmsU1agVUAWeHiWiqnQJFY1JkRbPzW5jWYk",
  "key27": "2zpVcVk7jwUFo477RDpBa8QRYhdpoq2DLEfXZFs9n3JGFSM8WCyfTYSouCCX6iw2TMaNNKpfZCkXQgd2TW71d66K",
  "key28": "54uYBUYsAhTNPCVL9igHartQUgrT4otJcNgTmZ9TG1dLNVqAVu74EuoZC9Es8ZNfQ5Q5J6CwQ1G3vTQjeWKdmgjU",
  "key29": "297NMq8xp5J7V2fEaYEvb38coGjCPXAWBd6ZmGDkFkiAHXxE9dSy5yrie59DfDZLhQ2mTsRDT4mBCbFpqXtq7ETm"
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
