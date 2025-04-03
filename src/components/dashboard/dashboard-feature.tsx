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
    "w3wqER8RPTEXc8jQAK4EN5uNEQyi8etRzrDJw5uwMpj5h2R8w5bFde1fiGF3VmqivcsYa42A7uZqUonkUEy6D9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAzxDyGtt36ZDgVLTbQdJdvjLJSc76mx4y4ZZrc1ifbEWmDqpaDhw5YmpGBhTAwvL3AjY3yQ5QMr6ovMLoBbg7W",
  "key1": "zn8h8nZQSz33G2suHrrXt7VqGCi6ggG5aq7VUxRyAidiBekVMc6rWtXCc4Mm3arDcfFUoLAgUP7o7LhJcxQW5Z3",
  "key2": "245UfWz9KfD2Cr9MvC23ok5SoN1pohKiJt92QYGDmZUS9yb2uhWSfKKXpDZV6zUwWtMMZKv1hjZH3ZbmwhHaeLU8",
  "key3": "5HVBXJY3hohEtVHPFS8zqXX29FpdUkMcnkqQvtDmRGyp9VgYTmpPWH4ki2mRYGeK8w7sBBZRqUNvNWafsFQuBgAX",
  "key4": "yKDfxpYVQ7SpTJvxWudQDrR4wNRVQKkDtck8fmWhBsLmCQuxdiJd6WU1LC4AdCULc2xZhiZ3wiAF25UFrJrcDFQ",
  "key5": "5o8TAYDmQGo71a3f1qNyT2x2MAxLujQwQqzcEGQCfc7mDVyD9eyHh2EdAXh8DeEFNETpAPNyC1xmGYAQYMMaktq1",
  "key6": "5zzCZDqqxHSVDu6TebS58rtT9V3iAGELMWQ41SRjWyYamrzupRFH8G3oGnvU2fE5BempksqqguFh6RaaiUWSXacL",
  "key7": "T9mE4vkBLuNJWMYUKxau9KJLhZXTQTSR2mypCQAN4pLYpzXTi8yTaS8Po5dcywoEpkXRQBDDhmyvXMdVxjBWqh5",
  "key8": "2ha2XMNBwdfMri1zbeQqWcBgVhfUGkFUxdKyya87Aa6zQCGfW5PHShT52hUAH4GDZq7EdX75AKewwpJxs5HPU3u2",
  "key9": "5PtQ63hEv3KzZBHw32yR5G3gdnqviE5JQUdsriCNTNtmwW7wSkU1hacMU4XgRGXGDFB69gfZeSAsJbUgsgn6CH7F",
  "key10": "5N9bm1hQshy4tTSeFo35FBEaaJfcuQn15V5ymeuJEgTUhsKjXcgv1tWz4ZTxCmrzZ1xi4uy1bNURdrDvRHQEn9Lr",
  "key11": "2UbpQYHPM5CGWK6DUF8WfmTb7Q43iaaz4gXYymWqwmqNvWRkqdjjfnTiUHGLyZaXuWkDUCNnm7CSkqpetfZNdfZR",
  "key12": "4FGPTQCKQvTCYkZwgS9tn4S821e7gXpfDwA4Vbxcfc3frhreG6yD7USjHnJcN9ej3eZNAMfDBJWY4BCQ8fP2J6Up",
  "key13": "4iqvSd7dPCt7oV8vydgBVoTdPBS7xBpwqHKPTRNXvajgf75W3ob7ojNdS2csjhbuuRwe51nLJRKdfrQ6zUYnVXL",
  "key14": "53B8h3Aj3qvvCfjP5XCeCqzUfugA22mc2LxT4C8bbJSfnRALb3FFSCgoZwbyDz2bNFWp8eX5Wemrjai2FMmkQKka",
  "key15": "2uZQYiwvQcwp7s1wM6GkQjqqjGENj74Gy6Hw2TVo33KZjdtgKA3EJkFJe6GxRG1ufiVTxdBADkB7tdhPDoni7uZT",
  "key16": "2jUyUcZQMGWYpYdakHTZxxKujexHkCbjnyAxWcu8J71buvsxVpoxcjCmNdxzQUXgUs9HtjBjd2tFqXSdJkKaTdUq",
  "key17": "5UXGmVesvD9Twdm8jJV978v1xAwSknpdmDMc9ngQKK5kx25bVGKDrVdrRHnteuDZJnfM3TEUq97L4ns6aCmEx3bU",
  "key18": "1ZFdgsLpJSCWi3hinGGs69SJZ5RzfMn77A61BeJHUbyeLaomNBatKeZeLuUFrdgPfrJjg25Njq8ECVkwzxcYswZ",
  "key19": "mu2bLvsYaajrKYDc9H1zEjikq36KL1zPcSybcjWdXEik1xLw7Rhhz3pZE83YUJ6bRmhUm3cB7L7ch5fy1XPwSvQ",
  "key20": "4BSx1FxqGipuBbv8UqTTPYoZzQZK68dUUZvPCS29a4AjiQE5mKXgk9juwAquESfrExdWnNydtRm2xFAomriqu96z",
  "key21": "3qtTPctnwu7tmzDnK6AaxbSzDAFhioagZXa4GFTPooZEvkzcaEgZGtmYJBxd3r5bQyszp6AT3WdzczZSbpF2zdzx",
  "key22": "EErkjheGZVNQL4PY71hKoYvACeuUPS9nYFQnmKDPyDtes8t5Z9XTfBxsZS9mJd7zC9mb7QN4wdNdhKv9Wz3XZ1u",
  "key23": "2aQ6tcqkJqWZf36AfUYN2zJtDWfYM2jP2hC6Ja3SAkNjPbXMaq5rKa2wp1zh54dFRdbpAqRsaxjN4dwUZvPUDypr",
  "key24": "3PxobKj6tZzixqzkrb8kuZv4jQPq6oNwD2j6MVEBJejzeryBGhedyfhSE8F529gMZ9PpVqzstbNzhNPgck88gQ7v",
  "key25": "3oRPL2ERbAHg6LDQYgwx2V3HXZKB6ykphykt9y1s9gZUn94BEpUT3iNzzsySAnAp3zD27x3k9CSbWuFYGKxfmp3x",
  "key26": "kVhwXFXUeekrkgo8BgNpFiXuQtYQkN8tgmC8MuGg4FveEacPNKw7e9CYCDNDskLUPaq7KbkiMcjQxMAmNXb1EAu",
  "key27": "3FdJeYrDJ75aH3p4zmBYtPXuwduiHEpkH36FDwAmETE132ay28WRQQCciGYqNBHJ6zTror3rLtnecxXmJ97hELW8",
  "key28": "Zjk1S4Qai7yzVwxzz5uAHxEKjFGAJXRiz7uR9V1PpYfgee6iwo3UHcZT8FzbUBPeGMPxtJzm3E36Jo65agWcoB7",
  "key29": "4ybWSAjmstWz56hJ9ZpWmWZrr45pTrA6QDH8zoGAHnqssKJJfnoeyTxWrDJTm87KLRsPjodBfxk15rQpupngw4f8",
  "key30": "bnj87T6ZBw2eT9ijkg7RBTy9Yrrf2WsoQMWRRnaitte1kX8uKymo3e3mswyKS2339Au5Y4MXw5eEcuoTsdrSQmV",
  "key31": "2E8EZbYxd2pV25FkGNSYyVpbDepB4dPizhcL4a3xifT37bcGChzfdiqEWv1rrUfmAkU4msyeK8jYxoxFt4EhwF2D",
  "key32": "3a7pS2tSLXdqfVopyXggcfCpMsyoFv8Frvhnb6Kk7p1xQF6MJhDyesavAXvtYZGMLduqqEZQ6zywXBKa8d8SmNhj",
  "key33": "2ahxEcx93FiCvTsEZGAw4dgwLgcuPAagWkuvcFZYbFkuq5JeeGuMPUridyWGVuSPreyWvkSjJ1uNRpUPaEjpa38x",
  "key34": "4isoYALD3Af3ATVy4VdzHHAe7KYRjTtmbLzgdbixdWCiseVSAsBoSbzRb3E5h7g45fDHcyjgZ1fDQgdHXaafRgcr",
  "key35": "54uRoMXouJWpbeihq4PT86hV8pPBEShY8uKHLa4MhdntcC95zdfrJ52NGyRnCHVbngRe61E6MEJ3aGrVHfXmT4J9",
  "key36": "4ebbKYwPV48rCQFCtNRSv5Ds68TS6R7csPjDZY2GGCbkpKm9CiQdP2wSsCVERsgWBWQFFTfKFUYPe4PFYmFPRYMh",
  "key37": "2sXt4vfvdhUKkQ7fwWecMs4SqgLtNB2RLX1u8Bp7Xi6mzMH5oVkABBgHR1J4WrQDqbdc7awuTc8qjECghs6ZHM8Q",
  "key38": "3E6fqRt1JvBPGjHbuKNVNEBDaaBxu6xF3CGN6yFUGBF6UkWAau2Az9gHt1fAUXaiSu1Pa659Wf3aTsqxoJWq7dyb",
  "key39": "4KbqqpuxwgewYnH6bMRQmHvETLi56TgM5Vdawu3Pt3ZvbAUsFNfZ76NbJRXwqrmbsYfV4vWWyniGZcktQYmxTQvi",
  "key40": "2DxnEAdYyGF98kFp7da5apaS332feMsy59VeqKX6dCEphRa4tcLheXoWzxS3y3XB67DebeXHPbtsENNP2RcnMuLz"
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
