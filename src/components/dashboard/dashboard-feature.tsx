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
    "5h29Q5XqkBPeE6jWNjxiX7qvjUprtLzUuqKFnkackgRFZqYBZStiiQM5V8iHSDEEyQoTEywrCHhNHGKaKvD3mCX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2feuzdqhFEJ3PJrdRNVkUmhq4kwzM3zJYfQnbfsgjg7Df98TbbUqTP3praLRczNBRsFeMjGv8zrhbYpxsruavSj5",
  "key1": "2fstdSjLvA89ZFYcFaq9yoUuszNdwdfudKu72BEvc4hnwBFRWnF16TLzAGt2Re2Npds4hCLUMBtZuWDhSKLuKsPK",
  "key2": "3P95uDFriV6br8duXBuEUDNQVQXne6BUsVNbCotmMxZeVWTxmvfHt3181vjkWjftTbbDwheGoTVYMnjfqHzh3pnB",
  "key3": "4MVL54x9VrUbbLhscmrSroEHvJguBaJYprN4mtABrTsBk3EckVbh5KDnPwJ2u54oqei8zH46dsFAJ63jL1ecyt78",
  "key4": "5ADT7SJYfmh8nBWiiRi6uiHfoAhj6DLc4cmiMVKZhTrdgQxETkNEa4GRZ5SnfXBcWVBmTZNDnbN1QocCaVRUYn7",
  "key5": "3KZHLDJ7YRzdMevmE5ugsvf2WwnLHj5jLT9D8rD9irrgm9WxfmTVNdtE7Vystu9E2FaTTskYFSVMYjvZmauf1APd",
  "key6": "2oA3W8kDfGTpzMVQEKXVedLQHskzRu8KBoRzLC7U5neNjAtUmHnJtVrGESEahmyeccEJTA9vb5DK3f4rzdopswuq",
  "key7": "61eQeNTeqjrS1dABKM3V3xX4yk2ufz15scFgJK5Eqa5GVEYrCgFxJP2VYaWYWsAeG6sRBdPXyaUov4sfJVnxdKEu",
  "key8": "3Fw6oFfoprJ5FjbtU3ThxhhPXSZzDpTZ7MfG2vm2uRezqvi3k4JbpiBq9NC6bPWFsbHhTf1w9HTAYVX486Rswm9J",
  "key9": "5PpVQoLK6u3b5ESiNn4qzdrk7o3gL5Ba7RB3aiqCGmHS4GNKBUhqfoErbZbftkSrtnTY36bDfkvKSSyh3JDKY3Uz",
  "key10": "RfSAM38aBAuVpyPXNH55s5W1ZXK8L6LUz7k3Wutczcnj45L2sLmnYLXrqMmwmiMVase6LwCQuSr9DXx9SgdQtvQ",
  "key11": "5vWVm4gLetMMk3EtkspGKF1M4XSHVDSGefZUArR4tqJ4w4bzLTJp2d4q5HHdRgquHc6y36fzEqcVyV69kN8PhFEk",
  "key12": "2zNKdkh9XKqGNuTcTZpRUffxjiCpaB8Dro9RkWQfueRqgnWFjEwZWjZ2YedZPDvz6DkYA5az3JUvgUsf4TuYfHCz",
  "key13": "4keAFtaXZb1c8TkF1k94WkEMV9rZjBTSTf472imX65QHqVYpHRR2fA6SnMKYRKUBSfyypqBK79FeZpgBy25MtNj8",
  "key14": "4PbnSuC8UU1eL6GAmSJRwyeS3zWTB5iQ1aYb9A71LuLQC7ikbZEZfbwFGEzeRi55wiqry5JtrDLq3ZXAG7CfWw5H",
  "key15": "4W1hk97gYEyP4JhR7NGHAoU2xFMHifnWxM3U3ymq4wwfc4zpzCHwDYpUz2koLEmmdKy3Batk2X5LZVN4ZSkUB9JL",
  "key16": "4p7oyEcBDoZuBpRBaDpCmKZcr8bNZBofBhFpYdcNPqDd62w3mFr9LuzgPMT9ELqCKXJeayHeQih4FkeMwVAn36J8",
  "key17": "5HSRdNPYnpRcCncjzwnpa96FHxQnzRTMWS89BxAG2UEFMm59ZRdW9w8Ckd1KYwx9HJ8NeyowsHE5XADMLMQW6Aa6",
  "key18": "baC4WpvcSizCvDR34S7nfF956vC5MKBrTZXNsVrB84JbZXzhqubrH5gUGvo7CsjLWwYLgqtjTN6DQGzud9kMeKe",
  "key19": "39sAEQCkPysr6zYWnAG8huhsaCC3HDkkqrKcxywKuWM3VgfAr5p5kwgpoVvGfEb6mu8nnsrvEJkXwQBHELJ2nXwK",
  "key20": "3HyMf5zxDaDRmoVc8XXr4reE5RJ6o6LtFq9JoXifbJYmSCy1N7GLrMoGrhpJL5x59Au7f6s9uE41fwVzTQ8ZmKSb",
  "key21": "4ZQrTGJgyyFWsNzniVVagKkq36S4UPXkgH3X4GzhwEDVmuqZqLHKqPtEFP33RVK93THUusoxz1XJybEWJxfUmNYQ",
  "key22": "42NhT2Qqabb83y4WwKMUYR5nCMkku2RoVgjarWBj5gQu1e8sdSAHVoertX8JZi7LDE5hTL3WsD58fgivoyER8nBk",
  "key23": "m6aKf9GuLven5jfhzn53RVnRwdLY2v9KQqyueWNv4nWx8sGiPRsXLJe9gxxAaYq2z9QuRtyGPtbeexdbrnxJKw6",
  "key24": "67baewNERkyxYaXDqGJeANhn3g6LxvGkcWFcSYmJ2kxguWs2WMGcZNETsN75xdiK7v9ZoQ4gmhTeHkUnxTKTRB1j",
  "key25": "2ocZjXTX7RoPnddyQ3skmX3HpLA3TAVBhdVrZgRUeVL56EUVm7TdZgmwrtq3zidyxxudaq8CtnBQgGGvpvQR11A",
  "key26": "2JDDkx9AFNXLh3qJAqDhC53AWD3qygWGkySCagyVF2utM1hzjXdp3FqESLURBBxUCg8GkYdEWMkM4vuf4U1EmTsS",
  "key27": "5xZhFx9bEprzuGY1T4Lw2b4Zemy2U5MY9GmLvRPotgdbhwtLgu7WAFq8WvCyAQpz5E61QuptQy9Hc3ftgFUaAeTr",
  "key28": "4Bgcbv4ukV9jNy1nvTMtWyFb2r4JLUj8adzVXNk8T4gnvtgkmTAQdyXBFVuLyFGWKMP3UncvreD4anZjzpG9fRtZ",
  "key29": "VsnxuACf8JXiCG8JNvT6AQwvnPHceu2CCV8gDv5uQkTMMU7gyawaUbDw7oCZSjCi29QV91p2Aw9ULdivXfS3qvJ",
  "key30": "2ygDbNf3rJ1xfz9WZUkqCHZv6c3sF92SJBdZkUfPhf6THKYQADU5dVRXUQTUKXvDExGwpPcVs6hdkMpkABeRuhNz",
  "key31": "3fLgTaFadMCPXpnYBZetDTFCp7sF2gPsYdUNhv5YSgmRQLJmR9LimCcACZZjtDSM7JFSPKszNsvgAXpfTkTSKucx",
  "key32": "5FFBuSnDm4vKRFdAKexb9mcT4Tr7FRjKiTzHrs2MW6NSgytPTXqbnsWLWy2uX42o17fJ7QMSnbr71Ub4Dr58iSdA",
  "key33": "ByRCrUo5CnGua4AZszEVBkk2TxdLJwvKsFvmh3oopEyBD4cEGgEqa2zubtGCN2pEcBz1Vk2QvSyP4qFiWHrMVCq"
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
