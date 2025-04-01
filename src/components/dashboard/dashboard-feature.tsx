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
    "59QLkvCcAx9gwDUaxKntpmW4qxou3GZ3p8WzM1Ljyjyp6unBbFmAo1YPjnaFCc9ePxMBXrzrPLUQRkLy6rdrYQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6tpBpawBotVoBp2Yzd716AstLU87oHpwa2epZCXGjKhWU1n4RbTLgzWxw1YjbCwAyLi8493nW7sg4nGC3D8b8k",
  "key1": "3y55xp7a9Qu61E76mHR7dM3RoJyspFvnYa4PzHHGHohERKNgTE6NgzRsMF5djL1hDLWHdj3s4KsLGsqUmf221cRs",
  "key2": "38q7xWn586kFsmsdcotsKeKaVw8uDpUBcJJKZAg9owgzdmjqtaSshVMyaKUiZZR8MeScSNCoXRNQFLfhULVETvjY",
  "key3": "5xze7F7sg9dsEQGKveUc3VBJbopc7zMRtaoAHGvn51NsBnk3q4CDAGCP7WS13gR3ruKjjfu1ET9Ege5bmCg5wZJ8",
  "key4": "5n8t7z5KyVEgaiceaxoehpTyFH5tBxz3hFHjufetd9AZQLNJmABmCrPLJB8qZwDUCAhMDg33tTG1B3pQ12jjbdK7",
  "key5": "3QXUt2FZ6DqaXztiCti9KXr4n8bSviJkmptfeaDhzo65WfXKK6mfZFsBJC54LmJ5ggqjnWp4qavxwdKZRuCmT6ka",
  "key6": "2vusSP75RzbMBCQ1PSErNeM1BAJBkAH3S6vQDqCjsLUS73qm5Udd6aeFkYvEVaMJEbT7Z9Ad9hRkfGktAdnwifSb",
  "key7": "2QkywJCRdCETbYrvMaS1iKVFKFGYS2yd2Pm93Jq6KqZEdQxqEjxTCiBBnX1qq4tJbWS3yh38rF2p3dB2nuMboH9c",
  "key8": "5Vgx2cCuLqoQVMVYLgexBNxmFe8cs9CQkJ4u7AQrzvnepswD5rsr25Vzr5mv6p9u3tefMM5GYxwZ5pu5SKCP9MLH",
  "key9": "3BknceSHhByWYVJAcGkK4cZb5x7bNpsAZfzJMdktTeTBs32YM5oNydV2K2UwC6FzsWCV2S3a9tYrLdVw8Kiz6yLZ",
  "key10": "2oGGvZktDRGH8rBdEHAF1LqqqJ41Mc2c8qYhiLYEDpqvaehnsSu7U3JwDsfi3phfD8Lhb1hPSi1GG7XomqTGVjba",
  "key11": "24nffRx9L9KCNmfcqSPjsuLR5UjUjeLu1tQBqefgwAA968nezwvdmqQ7BVZ1Ym2v3fp2rwinEhpxdac9dxShmJvi",
  "key12": "37fPdKXXUYoc9kHCT6aoYXmLBGL6sg1JjQXFrrRd855FYRTRxoDBzjjJeCB6gDZifqUk37YNzVts8uVmeF3uLv4V",
  "key13": "5M1Ju9Lo3N2EUB2sddv6zWWEFQ1UCzREpWD7NBCd2NPkbi9HXJtgtHK1x34FNKwMLABrTZm4p5CDFGSV1S1qxWt3",
  "key14": "5mLzN36akdHSZBCgaQHcULC4TsYfHzPeAdGzfp2myxPNqCJYK8XdBgq16A7U4Zh5H7o9jjwMUCG7bV9rw32fu6ep",
  "key15": "4SnqQudVnEH4TLT3SRZuwu9Dw2REvMycGDxNnhWcJnp7ss4Jxt3HyaEgFfkrReSqgh9rWVGgJLxqFT9S9otSEpif",
  "key16": "H9gPDUMa4mYtwrWQMXru7S5oRsBiLWJYEHiKHpUK7QwjuaJ2i5hQ1igBdSo6HZ6y3tmzTvSfVY2ueKtWYcWxEgS",
  "key17": "5YN3N2Due5Jeaygbk2tL334SKvBgMgkb76JaeoayZiqWsUQY5qLruqkvLZM82W9jTmGH2VtxErQda9XEyRad4PsD",
  "key18": "3XDNGTyMaHv9Eu8Zsbbk2PXB5eVM67bDYMeZsXcSN3BeC4Zj32Ckn9bVaYoY2jsWseqLAN4yVUvnbHUJwG1kHzeG",
  "key19": "53rbBb4bx56YZGRsNGskyQdcdigDvA6vQMs4wrL7srmFAqAR5bytw8eSYiftGCoNDAqdrtnY9PLVM7bW713q3h9q",
  "key20": "5T2xGD8g1HcXpDgZE91egjPoCAiKjiYvRNcqH1YAVqYDUafQsPF4sKYFynuXeiVaDbGddY2LbqNGTZVZ1yDoYB9K",
  "key21": "5CjGuxHXVpsLq3EFrqqxTfeCSwzoECpCyAEjqJGF5Bfbch3MsQjetNiiwnapqy7oARmjEG4shL5o2ZjagrgsAuSE",
  "key22": "4vnDzcmz2rCwyaTGkCqesNqMk2TfLzPSLo4q4tYkqjBGHAtzbGedjqN8T7czfxJfi5DzgXC7jZo7L6RbxyUJwAtb",
  "key23": "59Q86LZP77QaBe1UrCAcE1yRdcEtQsLgc8Qko7RDAcMGkv1b6VABFoaKAYZqkUyEzZunP38VBzUJyoH418WiRm9T",
  "key24": "2QCwJxS4RgCjJpzcxef6v5AAKZMHoPtUZuMrZzh9vG7zTTofT5KzpmwRQNrpjMjDfPLxAwRbXDSnN3rkAtd1Lnua",
  "key25": "4jryR22YQyE6hrsdnUhU37FCLaXz28LuotxsnvAtkbekm6GJtTwYw5TNrw9awYfZ5ix4bi6k5u9h3fhaJSQy6sVK",
  "key26": "qobtusx4onbFG3pg6aE5QmmENPSmeLhimkwCYnZXsuXr8P5pJTWTwd3GrMPqcVsQkUixyuv1f1K2dYUPwmgp6va",
  "key27": "3ZtNb13ZefxiL1jXRLNf2XZPJGdxB8Uix6CxskrsGqVSib1inwrezbxoKNCeCWJC2BDHtRaYAfN3LBpAcEGPd3wb",
  "key28": "4xp9eHraC695z3gh4dkyg5o6vkfKPcGy3iTqJaAu6hyHy3ZJutmo2YB9XcXnZyUtVEFiQHYhz4ToxD7L6iGaMJBz",
  "key29": "3XNktwG3S6CieoxqH884mtdyyPV4zumCNbexv7sFVheUb1GGDMRzMErhiE3D2AVLEYdxAByBDc9Qce2JKS13hewr",
  "key30": "2W1KxQZ3LiLw6R3cZKvdTpPxM1t6YrY4jADEQKQe3A5Tdi1XUQkVP3orfCyrnQkyZwfBfizzrCRhni9FFhwERre1",
  "key31": "3Ag5siNxtatxuzLaD3vjJqGJhm8iiscaBBQKb5jJHwkPSdRbxUSMJzyZLMPFdjDQ4Nq2tf16jpQap4kSDKJmZK1K",
  "key32": "3zgxNc261UuKgV4EPH8fL5pVsG83uVzAVrwceWrEcntvJ9LS8iXqsuZd55Bt4qfU5qEru47RNr3eZTHLQbPRXyUF",
  "key33": "3oQZ5FeNQpytzYZpiLKKHjG831jdL1c5oe5LTS7EaEiXcKb75ReFWZb8G12fnhaHnP8icZ9Q9ow5q4JoRg15rdy7",
  "key34": "5VYNDVvhTPeBFfA4pvSqfx5jykAVhzYXgZeyxjxNSjpWvi2iyycmPyJG1JdKAtf5rGoh3TATzEZ6hw1UNDrtewoj",
  "key35": "n86mrJFAt9cVsuJ3BEetw5ZzUebeW5KVTrRnHNEkvQjgX5MDbr2rCa2piuL2cc4CLWewrWzTv5DvEjgBckWGrdT",
  "key36": "UKgr9GVRmey2HWVxTMxpCrBVJ3LWGgRdYnUFDhYHxHxJb4gYNSi9A4sNf224PxBNtUjB5WVwokAVFbsjs7uCCcF",
  "key37": "2P65eKZkqMFKMqHBVCgNGrQ9GmDS5AacKQCiKr9AGdbf4pLpxetYP6Z38vygUcXieBkXyJkR3GofGznZbFQu4M9L",
  "key38": "3Fso7dFdxobRBN9zosULZ5WF1xHc65464P5ZB6eqDQpyPMR6DPt1CRoYqtTRz4rGekVsLAxePmF4Z3LV8hqfkKKj",
  "key39": "5K8Nx87UvW5uVn2qvrthRKxDMRekagacKUkaqcZn6cUA83cFTH1PXiTKsKYurTv8wDWwXQcxvDxUwbML8iJG9aiy",
  "key40": "43v9EVvgJPtFgS2AXRvWzh2igBvACCiBEzJcrj2P54FiW4WmGvjHnKzX5akYAkxJ91CRtQTExuvnieVpnEx6ZxkL",
  "key41": "5YmiSqp7iw3Lojj4zThgq4c9w3TAgivvEjK4d1cyN4b7yoGKrFf9zxtAifMANYYUpm2QqS9ZqTcjEbnnHe4ARPnF",
  "key42": "5PEiEYkkqSBbzfiLVVgLqEyvfcehC7hSF9kgLsyMnMmegUCWvUGNUssi8PstHbZbMPTNcocea5ou9jugV19VYSyW",
  "key43": "5ca5mWe9LEsNbfeZnUhPKGdMwSs6X3SPoWz9RXkYitnU6rmMZYHBy3D6LNrZFjG75BG5styzjnTJqptmfgCCjURZ",
  "key44": "565DDiwhShkZtzbXaQBnP29M4tWrekCkYyRQS2wFaugdxdENajTdEJ6PoAbaipeaEsfENdKCakAvWkYgWdZeUjmX",
  "key45": "3GsuWyp7VrjTXPCaPCYLjn5baUiKx74H4qZa1YYXcf5zL7KdHN3GBpdNHDfWTpeEQHQ4RyTqokp6LMj5xYpLU7t6",
  "key46": "3RVDsFoetSot9kbCjzqDjgmAQjdyZCHL62HNSYVZ4yuUYwqd5GM9MebRNDLwAArV5EGKcsRDUavEcxwNg1Za2GXe",
  "key47": "2cdKoL3MRhwQNsem9M691eVYn9K6pBk9YFa9Mex13NQfgprAE2kWwyNGthgVsM4fEr4M2R7XH5vFkqf7rqE8oeHX"
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
