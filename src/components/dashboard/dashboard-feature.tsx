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
    "2dXcXFyVk3prVvA4a4FGMybJv4WvjGWrwyCpJ4LzwZVvzVG7zx4TsgRGBoaA9U55riU4yEe5BqECMDiXsMvDceSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NYFXNdYcT54mdmeSdGmCbqdzJ2U3Rc7ZMTymD1pCJfDX1o1V3FzoYTwn3j1DDrZVDA8Kg9Ld7jjGktC3BBDiRwf",
  "key1": "5B6k9HaLdLgYZZdSxrYbrkDE5ivkRd1T4PTgzXGznYUzZHYj2p1W63Tsf61uMCAcMiqNCcgZurjjXbCrXSVquVTN",
  "key2": "2aYuznFFyeaWWf8Tb2fv1q19jjWr9nU9fvswbHPXwyLvU9iKb3xchH8c5QsLsGTxXft1cThazjf5H1YhJjamBt2h",
  "key3": "WikG67ssSKvthxh8PUaJGfyhvEWmAWmr6omYjehNZDjV2sSWgMJby8C57fKucsDUH8GwC4qCjMMbphLwGqmpzmC",
  "key4": "MG7iQcouvufDC6y4wDWJ4g1tArjJhG3yorUeb49onWrmU7xoSFLrwkwfqXhiLWxxcQdKeQtyRqsZKB5fGtdscEj",
  "key5": "5zBRWwnLGxYDX6GBA2wfVa7fjzndhe42zfY2wALvoitp4nMeNEZY4B3e2HjsuGNVvpnNNyLkCgGjVSZb8riZydqQ",
  "key6": "5sAihadBT5bmJghymxpCWFGRkisDgs6UPP8ez8KQ7JbsqDcitP3Avf6y9eRjb4RhRsmmvr36gX6PP6Hi8pR9GG7P",
  "key7": "3vHmLKtCm7ekMo4o2y8spVw3cgtfYDyneJEzw9rLLRh6bcn68UUUn2YrNRzA9tEPGAUUTJkotoVU4UZBmAxNmmpZ",
  "key8": "52vtknq2AWMdoKgKnNgopYJNbv9ywwjdhfbKgcyU8DEcMwEWNKG5AYkJQZC1RLDGkkb6wDQTzHf1FfnvoA35huNe",
  "key9": "3Z5FxhHfWWpyMF7zhXbnAQCt49W3D9Gq5Y2A11CvYZfwrnxou1BbuEK6S2EzDjvFgYB4ZAyxRA8VWBcQs9LvZ67g",
  "key10": "DEMWo8KACSmQKNnSCToifK2FKuukro6uByxD23R9vyYkoe8LVzj938i898h7TK6GFU2ChTpZD3MtANqCaKM7jWk",
  "key11": "spmeTodXqAVTmyyQ1Ddwo9yHkE3BU5aEMZLrDVQ5Fqge5ghw1omi63F6eXnLKw3934una9pL8bUF6bM5vDN3qYW",
  "key12": "4zSNodXa5QRuSDLH1yo7jfuA86mBESbTHziTgVfa4JBa8czTAyFPoXs1iYbg8P57ABGpRcAcv6PypFXVn8t6SR2f",
  "key13": "3fKKrdcSKQ6SHjmr2TLby7ZfCQgz8HhPGdCCFWyTy8ZFXW3ZQ9Sfxz7nioHByr9ttb5r3ScrVfAeiDW4XxsigiFh",
  "key14": "65YFyPv9MXNjtHvmrS3tTyr6XQeiFmKfYooThPMhX9PxeWheMDEsAYZzQRY5sNY4ZrbKsaiUbwteS81H3jpPJSLN",
  "key15": "2C2bgVLD36pAc14zasuioszB8SUWv5qZxXWfmTXRwnBgb4EFoTmFUNZVx9HCoZ1wJLNLngWsG7BgpGHGicjvCwRQ",
  "key16": "3saWVpFCt6FBXgqpsRoXFjguQvZN6RzrXBTqC6KVfGAqQQxXAS8Aw7Lc1F94V938JJYpsUUjgY887hcMEVJDWHKK",
  "key17": "5MdcnRAM1VimUPcmw3HpVsf53i3TiD6QmUbQ7SEyGtEAETQyQaPk6W8cBTwnL2De6QC1kiTzP5CH8JYHZGsV2nGb",
  "key18": "41RxqtmYxcaP1GECTYpz2tXEZWZYdUWaJdCnBFtkehQ3ndHN7woou3H8RNzku6ymH3Akq7kah83GGYpcSwodc9Gz",
  "key19": "ssTjCZG2GaEuHLF75QYys73s4vG5BXFwhLTf1hTxDSwWFG76wkXBDRKgZvg6Vg81pBYpkz28rKnX22V5z3kDNgG",
  "key20": "8zDm3Rsu6bXN719Ggp5zpTvBu7iWLbz9CBPrPXzUKjXHasspES4SnCpUNcJtCSXaH9ps7T1DQTUFQ6XV3ZZFnk7",
  "key21": "4Jrwa6Q69NXnodkWhjUeATvt1xPt56bKkzvDvDbvogEHEhodJRorx4RfYvZfsvYomJ6vhh4Gkns9yM3zeqjNDDoW",
  "key22": "2YjTP6FMJEAeU29etdtUAnBYYMZaR3RBS4XZxH7yNrFPHTZ6LKUWEwdF1oApTR7hJ8YJHbnibDpcwKFAPu9rM1zj",
  "key23": "5ybFbEs1GynD1eNEKMwRZNf8xoUTMc9Qr4yZMzFULGE5UEfHDnUQieyoGdPcZsfX3nP7uT8NEJEKdCu7kAnqbdNg",
  "key24": "5ZdAhw9zzQBJCDpKWDox6RqS95khxE2toz5fMrvhCFsJgYpACCXDsBTtyNK1yRBfNzBUwLna4rWkMvnp3AfGhmcw",
  "key25": "42rvgPN31DRR672PvieaYVtTQwoViedez44zKnvTNtLgpgAxmLatMfNRwzbK56KBGQuMsaVzsEmVDqbqPPpSY77L",
  "key26": "5Sg371ejGWX2VcBzmunUjzPPKvEnBbGYmwRKHnFhp6ALCyFU9FcXJMDCZ3X7xpuD1NmUwtLtZ251FyTtLW65dg7s",
  "key27": "35PEvkBebSRZSi3LHWAoCX7F1VCyHrRBwCbd5iEakKnk7Z6CSS5bEWP4i61fg7znAnbRjCqreixnj9H6rsuncQZb",
  "key28": "4KZF7KX1Sjq5w2CZ1CzCpvBG95RCY7UEEhV34sjss7JhbbRFRzrnPbAmCFHhXoPhHeyXiUyNh77YcRZAbQHC4gWj"
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
