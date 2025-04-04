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
    "4cwTKyUnyLxBTuRKurDK8N7pnc1vb6GmPa8Y3EN8JQm9Tm4X9rqSQNvqvAM5m5vAi18YrFh5BRPj2XGVt68EjzPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3er7hc7WDHvgBks9DcpfFy1qMccz7UZ46fjnAr4w5jxtV44C2J3QqMdEn9hjAnBG7boht3VNvTNa4LHoLj9kE8B4",
  "key1": "3sM24kiY7fNMah4puSM2QNXWs2ph4jeEST9LkP2WTuAPWzEwsekqM71cNmbKC7hzZHPMpYjasEjfRJvL27svMNyC",
  "key2": "AY3GRiF1aryMZy2xZxgEfTnmqXQ35sxXBNAXvEU46T1w523Mjiozc7wZdjNnQcd3Dmop2KFZuUL6yANqq3rbRZn",
  "key3": "2xN8bA7SAwHzXgmvJYkLan3G5vxuhwrcGxdcZAJ4dL1CxPY9Upg3KnCu5v31uN3mbMm2gwnrJumubhUcKiSTvcxZ",
  "key4": "4P5kB8oCQSGDEej6y8AL6nkfQ5mSDPEy5MsmveT5RvqRXBhFFmm7SRBEQEnV1w5eettAj3ubD3jHzTmRZv4xV7in",
  "key5": "4GDQABfpnBB4s9LKgEQX3341ZUwicjtFYRezojeTAJVJF31NtdNGk2HUhiYMV4E67H8KYKPwDiJcdmoQvrjyU4YC",
  "key6": "3iYFCHnCQQ6ED3T1e75BtqrbyQfEDYWTDSwxLawVqyP9kW2GgDzyhaZrfo1CKHWB5N4SXnjY8SKgYhwa9HJZPY8d",
  "key7": "2YR8v2q4aPnTV9TqPZaVqyPk72YmY8ELZwX7dKaotJBSwGcCsPNLsGDDqq33ca3AFrqNn2KciNKikj9zUpyFwaTs",
  "key8": "ZRu1wjJWSWKBjTodJBrGxTK3gLMFYwLfL13fm98hY7Nf4eicuUpB5oK2xtaPMDj7R8WfY2wqzuUhKdo3Gfwz5fZ",
  "key9": "51keZPkboAWdEbWZ4bxmgaLn8BYY87go9Eazkc3JJczZ3idskV9Xp6cw5F8JZJfcZ6Nc1obPwX6bp4Fpa5siChAi",
  "key10": "3vWMxx2Vnti6UKw53i4BB41dmVG4MgF3QF2ozCnppCDr6AspSy2zy4CABKp9auXXWHM7pEXAkdAxAn1yogsCnT6g",
  "key11": "5VbJhUSqq6uv7YL2hB6VBAaGCGEZAeQyuRxGtBwWku8Hu5V7mP6X6yHKwZkKf5yepz12RPkJW4jhzmVnTMfYAkJM",
  "key12": "JwZnih3Rf7mWBybnDR5dStRGRhLQoPFm6F9akcyANYLpHPkAqUmHWgWLPMazetGpeGTf6w8yzup1LK9nD7Gxsbp",
  "key13": "4Wa3FfAfkaRoCZJfnUTzHwtTpFZ5hGhiAZEXezzZK3woQgHNTYXWm2FwE1UKLoChWbqQFaLQjjkaD7u2384dq7u6",
  "key14": "5DV95bnegpaJsLjfg1uDyCx8aBvNShwW973xMbFfBcFTA6ZVYd9zC4Mhgq12Rtkua5FRY6VUiB9Ej4E3s9a9AXX7",
  "key15": "5YT59D9dWmie5o7hjcQeMTtV7MFbsBdn8dDkTkecSSTxDk4Vd7itMho7gu9axfrtzAdjjL87RoBYrbfH9i5ZSgUE",
  "key16": "52WvtsfGK4zcXH9Ngxen2rUGa7LZCbtYGuZaM2p8R3oqjrVsf9KQrK6QLGVMVe4177WCxetu1iYevmg1B4kA3yAW",
  "key17": "qHH7NV4N7UntvDaxf1b5pwiUiqDNNURvZbSgx3Ldr7ggij8XPbCXRkiPv3Hq37aBaCdatfe2giFJy4UspDKaY5X",
  "key18": "heXq5RSXqrvDaiKYZ69mbuAwZdESwVAXw6ywJ4G5TAkFjfgSAr99LLeXickgiGfyK9CEknaSN23H9AvM97eSgRw",
  "key19": "4eEHg4fjEMSSq1j3rPfyMVc1RbwdDLCmUyohERA6CnwqBmc5qtsdmauAS8gk4tzf9pfJXAERaT36EdRD6DSQEvB6",
  "key20": "2CMBYJ7dectgeMxCZahtWrWXawASAL3svBq5V5uM9kroJr5N4NsQGK5DmiYuxhj2E1uQuYY7ccnKENpPi6rtjgPg",
  "key21": "2TyMKkZJhbWd5tf5dTpNsYaGp93e4pEYbeRGD23vcbXDKFD9mCnYad6Yy2gRJbNjDTB9DT9dmnYBKSYCFzssstvb",
  "key22": "3xxXDmSABUzhoPFQBVguc6T8ejtGzRjk3XBrqZ6svbH4X51jBy6UCC3BUrBrj1gDEzocxS2JQKHEnm2taDpavk5W",
  "key23": "4eyg3DRPqBYYwUZKTRz4jtSndpVJ2Vm7oL51iPeykUzfkoy3fqd2r4T63PDbE1WcC2v4LF9UpPbmcvESUovUvbKp",
  "key24": "p9rrD79LfTpxuS1z84juE4q2iJqFRNS2w6A2dpzCuf2b7QGwVjziQE599SkqeyTbYLYaHiG4gEGyQAphiB6TuXE",
  "key25": "2bKX4vueBmceNrWoHuWknfMas2hHvhwntX7GV9VaYnuRhHueXoCK6FRiNfV5U5m2cd1acSL7XPdgk8FY3vM7QC8P",
  "key26": "3qxo5LEGdQrca9pRqaKnauDK366zA9N82SfJd6Jd9BQBELkJR1BfReLiJVmN3FNwxna7vdsRGa7jGi7ZktJW5XMj",
  "key27": "Kdh56zUPHkdcjV78REH8FD5z9PVVmzYYtVad3F7YciaEcoNGb6ZCwaszBf8TKq6WQg1Q3mZgLveyMAd3QU2zK8F",
  "key28": "2P1sE4pmdpUSE4qTt2vm8PKTvUeHuYbZdkJ3DVYqvdZ9ZaxauXtQcrZXy4XPzpAj8hCjsdpvm6GdtKR5DiGiJ1Hh",
  "key29": "5j2jTQCBRe8uAz4HNPk1Hx9FZ82R9zyiWViSXWqsBpNvDtrZ29ept6Hkj3GVz1r7H22TsRPSeE5zLK7XTjXCB1Ja",
  "key30": "4aoNanU8PyNtQp8quSPQsfMVaRnJp4VJdrYCJX9PGg9TAMFroiFrW9PUQU2AwSEopVT3jEH8R7dr9SPyENdgjRto",
  "key31": "5rNeVcEuJy5aE3zz4PoZ6fkqdND2MGysrzbou7AP7aJp8r5G7TeGhrYattqZb6bCsyfLJrUgzCfGM2R3La4jw9J5",
  "key32": "3QoJB6gUCs7xT3VXFM3sLDsAvQP4ShURURn8J9UCgxixV8LL1Z6xqcLki5oVL3rKZckJaqZ4j4UoCmn1j1wipLjV",
  "key33": "5o1QJcniAkxr4Vud7BGbM4KR8tsoLfysMstYcPRVsF3f21fkjaU2jq74iWmhoiGHC7MqeC15Me848iWT17uwwNjh",
  "key34": "1264u6kCg61UKHJHKTXqZTeKbga4JKXZMwCowzrAsqXhWZ4yXzXQunULKzwPCH9ndgp5hxaCaAjnAKH18U8ytL8W",
  "key35": "4uQuSgUpvmsNXvDdD1AZTqgKgTEWet4k8SJK3tZSmZngmq1qrv3AaB4zVPeMrpxcevAs7D7J4uRZZzGCvEGHqS7u",
  "key36": "4Up3iyPWUhJJodK5BidMdNqzjwirVKb14dUEYEAuyLrYqdA7z3t98Kco4tJyuoVdNuWnCQpN6YNBkUTuhq9nTjxr",
  "key37": "3ra1bSpjsrbGEqvqKndAbwovArhFQgzL5KrMq3p6NkJTCVtc7NQ2ZJiHFPiprJsbc4digLzUoThg6GT9LMtdpds4",
  "key38": "318MFBBEXQfBLNzWCD8f5qqxrBaUL3MrpeAM4svuCV9Z2WdXAUMRHRNYiyvSbBA9PS1io4dfpeZm62c4RSGgWdep",
  "key39": "4h4Y9jCkQ3MR9qZzojjfeMcJFJ2JC67Bw9Dt9YLR2cug7NazCPV6Mf1mjyUHVsULk5Atzru8NT7Ue2FToy1hJbQq",
  "key40": "2VfSB7HD7mMSKuQaawuSpK71p31nYBsDHaCK4oKrjyjCps66K7Wdoym3TZFR1m5nK8L8JjwReNd23Nny6uDEP35e",
  "key41": "3THnp6GdAMMAHi71973yDVHFjP9GBwZFhukgBraENEe5McwUQVQ47UyPR47jmRa8AtH7CfLB9VhJJ8wQFw5JJozx",
  "key42": "4JguFK9pSRC5JKBTYYcDAf1bVj4B9TspAkrbSsdVSWEeT4HQtGozrD18tVPjeTozxyHG6xYtqGUJQ85UPoUwUKz2",
  "key43": "Saj9GFwnihUbyGXn5GYs1WfA4wRKBF6VApf8v1ZSrk3R1bfQD9v4CZWphTL8TXPoQJLofdhejX7xhEWaUrjRXT2",
  "key44": "5n55Aj27L1AFG8TovcetZcViByvAAJrgX7thTDNMUBvZ9dfbn5AS2fXTzJutyHe4Xf2zaTNJrpkwLjevpwz7n5Ur",
  "key45": "2PJmEFbyr3LEh7oqeEUhivfJtcJZyUD6i88obkqcyUvprFHZWDBjfn3qHBLYz4Gs8fmnD2bevMzwh9ZobLMpbQK2",
  "key46": "2jdHhT55QF7XeTTheqFWr25FGBRgdvQpU66vaV8xHACTj7JAiziawHXkdrKrm9gi7gAGnxZtnjRi5UaDLXurn6rc"
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
