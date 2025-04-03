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
    "E7ck6dUCEkV6p2xkQ98j4c4xRpyqvkTdbCY96Wv7HkJVGCPmnvZ7ATKoafDyY4UAqR75YmAj5wQbNhyhEoAwRNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fYPZWNpphGu3L85DgPTBQSxd8moZgvCxBfjMG3UM2cQN9kc8dDAhYyEsreHSZvJ1HupGFPjGdibQUQ8oFajoAcf",
  "key1": "fiKFpkPQcJ55XDAbJtuZ2woodh4rPNB94Lc9z1Kr7ikPoU8kF9Jn8iXvvcYDX4wXukFChmtPV3UAjRahpnD9iuk",
  "key2": "Nc2bR9Sa67NGXm2cdzfgVe788waRr2c5n2VCVuahn4aYRtZa9tCLVfyCxhfJb3xqCzEi64VuyRp3kKLb9F8u7CR",
  "key3": "2RbvcH6FiAetu5dHvakmk1WEZwxBX6mCc47DPnDAbURcKLcH2sYCQNECXKDz4oCX8fWhkAevgykFJEX6xK58krVa",
  "key4": "CQ5NkRkNe3K7dZrhwE6qkTtH5WgEqSa95BegGP1JYgLzhhCjV3paNPoNQ1W1qMgZy7frRLFLxvuRKAMkGF9Eddq",
  "key5": "43mSYbZym7YShCHnC6KbSeZp86ZZGwtTQM2bHQxsiRDpxhHax18C9N3PuEfxkBR5cFSkKygjqZiwZ2EugCHyoWh2",
  "key6": "4Bh8GeZfdBcdzS2XPbLDcBYofJGiAFDFjgJBnH9gNUmsWFrbP87jkgCzje5KNxbZpMY61vyhxkjTaAFdHdY9QoR3",
  "key7": "2ZcBh3pUD66y4ofppLqycAR2itk3N2kJ2vaEYyh356bfr6pchxozn6sWn1PdDSVn6tYdropCRGBiykSDgxduDtnx",
  "key8": "2SPmptinqSHabpNV7fiZqr5BeAF4qqLiak7YeaQfxVeZ32PsWfKRp7oqz4UbKaYSNw2KncVJRdhnB62xgJXdtnDU",
  "key9": "rSgwmQmiAYBrvMzEhRU9EVgt76YCJiw4dwAsJFHiWxU6W8AFkS8aFmHxHnru3r4spRqYNTgY4pkPkcL5EuDgZpU",
  "key10": "65XUCGyGSzbbmuLygHzZ9tXdD3zwohykBRiFr3isU3LLgSmuHAfkdxnGcDtprmHFvm9xJFNHTEFui4jgQUW9NiUu",
  "key11": "25btXDgRmTCvgxcKHqeYc6WUi1k64nM1ijqUv5Bstip7T5iZjYYodG4NmytGWYZbnTx1az1x746e4eLwi6scKjhk",
  "key12": "4Zr8FvGpEvbp3fUgHnoHTjxBbU8GBpSFdkjpimcNy3rhj9LxKfdXJCFGFwY3EwQ4t644FW3FgDNPr3WXk9vrUxGF",
  "key13": "3q8oaqcn9eQ1pjASriHFNpPFBYWanpJn8vMd4hRXGRppv9CaP5aVEHHJG9VAmE7PgodUstgdcdHbhB3bzpUKN4wW",
  "key14": "8zU2Z9mykXQjo1YidjeUN2msjYsBVtN5UqGh6uEK6fH5CM6jPN5t9M1NaUv1WW6q97AdWs2WaAWrgZg6KFvTDM4",
  "key15": "3zsauQqBjA31UcHENGshEvQJEqvYj4k6Pm82jrdwWqqUiPubuiBZYgbsyYguCRemp2vAJ5mLrKZhSrtpjWsjYpV3",
  "key16": "5BsSWmgs1nuWFaTzrV4VG6cp93yitgfeKZDeKyVbhZ72dHZaC3SGTqhaTQeRxDxYAEYQnnZwCyoodKZg1QuRkCBM",
  "key17": "cfp4ns7g9ixFpFKbYhHEDwe7SnPzjprrukv3inKnUH4beibLQCWJNa3yPLtQwXWmGNkP4MZw5oKjQNdkuNFhDqN",
  "key18": "cXRnYarL7CRHUuo9B1bdTWgrYeV7oVcGFZySMzU9eDQDoBr4BLcqLmb91Y8PdRyCcH15v8ZDBakE1bGdG8AzLFw",
  "key19": "3omJQFby7VDaEGGEcLmPSmBoePP7nD7q4vMYYgTxvHpKcgEt9uvzwGPe5nUPWQT6VsYdE1DBgmRskMChVNthd7uT",
  "key20": "2Tii52DbXRX2en23x67qyyBPHU555b4BTSSGhL6AMk15t7ngy1L1zCTcytQJDoECrfgm2ePGmVuHFFdaRbXnwEts",
  "key21": "3yvBvjht9VTSRNhMXptkfQ3dhxXhNYX5iGPRJZDxqynwYwLoHspa87nj57kJyMZR2ERFvs89oe6KpAnjeZLrKJsQ",
  "key22": "4LqjAssG5RUDyocED6fThoyF6eDecLkj2neSVZoUupYjkA7MvUrVyt5zh4mePeJESNKW2VcKwifWz2aJi9x5DMqx",
  "key23": "5mZnsK8Q1SJ1JYk6PqYtKDny76Xawwn4TC7t9WfQsmv5Wdx2bfdCS69LoUkKSFmZYv6P9wDXoH8RsQBJ8eHMigRb",
  "key24": "3PTY9iPPJMXqDiesfjHTk8A3rn3rh4zwknfPVXapPqG7M4p5HavxVbjWvG2C4NvefCqLAMBeqEgqrZSs3SAL3S8R",
  "key25": "Uac9SJCkEn8BkJGJyQdU7KjsUoFczT2optQkJN5fEbsnwg2F5Rd9eQq3aw7jG3a4PeyPSHi93tFncpGjSHFxmZK",
  "key26": "2zaB8eV9hv7EhzgXW7DvG3tUEPp9FveBiZDtnux56mcLrYuweoi9FAQNxTsz3pVCPppakrhqi4XfKgmv17EG6HMh",
  "key27": "3XXD2iWboeNRiJgfJXF9HDLJodiT4SdiAhVTZQ3VHzTa1u7SLb1jr3tJLP2cBGHyWtcRF9dZpkPp3C6eEw2ejjvQ",
  "key28": "3mDkHPqqxV2kTCBPKR6ohzPZioXun1JwgDzjwo8b4d5GEnzyrURWaeoSMjC2YmnGW4Ld1xJ4fr4MTKQcA6psYKh5",
  "key29": "5Buy9FrW9r7F5XL9dqZXF2xSspPaZd7JJn1FQ2UQdS4dhjPEqAMTgidRQzYw9wNdqjGv53DwkG5jPhPqhcLf7QjY",
  "key30": "cX3NuRs2Wd3BjgvkwMo66fs5qPCdSZH4DURra3LdksXb7rPAtbmFnKCCQ7QigHwPXeVhxE57dC16XTNaY2a3TyG",
  "key31": "4N8MsC5RNcUfS2rn5s7vEcZbF3F5dqLocA7saQZNigz8FAr6oQG71C3eyqVrv34fU6Dm8M93x8m56kbLsbzdYra5",
  "key32": "vRsvqtLM1x6vD1wkSgpYwZxedn4Z41EoBe52EJT4X2a62RyZsbrmGg5GCNZGJwavVgE7cWKwKfFaFLp4JYGnvFi",
  "key33": "593wfV4V6WbpH8awdMtxsRHCx314FvzRn9D8rYhGsicrH9uRiNwdr1RcgiPKnYr5D1DLdgiteZFyyqSbRDxqbC2E",
  "key34": "KxX2uMSUVXojW2XvqJu4pmdztXA5QwBpYHwu7jteSvvjBq6CnkRgvYKfctP4U76mDiqAg3D58tMBfsizmkgp98a",
  "key35": "53M47BeLmtFAV3BYdawfFwqK2GJqFiKLSTvGRa9PJSVjJRGR4Sbg18jRAjmPAuozhCYgAGLz7vFxB9tiop5FnL4u",
  "key36": "4LMCBRaudhYKE5hy3ktF4qLvgEM55sKDpAZrthhYdGugQkhEWjBrrb9yrdruL1RQKDasYafYzpJ1Yn8AZw6fUmyu",
  "key37": "27f442WSPpeujGMz2Vzu1VSkdPwsHcGPKn6CNvNBfmA9W7MUmw6CbRNR93zS97sV2BdmtRzwj6x4ZqNo8N8ev8vH",
  "key38": "5gvdvsGghFeuG15RhhTTid1iinS3ZK7beY8cNMPU4twQQ2sCrZJ6GVDvPkEtZ33Kv4vZB9gYvLoTBmMLjknWT1zx",
  "key39": "5JwEZZ1z1vUdStPb8jRcNv1utJfYvK8uhuhBzekFYPXwfc1Dehui24jTUzvdfmcegMk4jAvGffwsrUt9AjNgdr63",
  "key40": "5YbdY7ayxBpWnQjnmLecyTz1NZyV3GCncap8cC5xTLeT42WiBt2cVEP6vK9B4bFeY6sU5eHEkJ2kEr1X4ususdXe",
  "key41": "33GMkPqeypiyywmzgqsTH7zUfi7GJy98iHpHhU6gpjeFzTaMae121zXhHBn5u36d4FRcE1mvTJHfLpQXEDQVDNew",
  "key42": "3vAQKh4xVth6kDecfEqrnp3dvpP2DZqiWv3iRDwNyuNucHpW9qLjcpdrHrLaVjpEhzgep9XDwhPi3DeSTrH7dMd"
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
