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
    "2TGi3sLn61ivEDLS7gxA6NJkFm41KVYBpLMrgf9o3rwrNczt5QCAsmKtppHts7WPiwG8ZR9Z9gwqQE3tcBxVdF5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MRCFuK1BVAKyqPS8EY2E76cu64BsUzhsZHeHvgCTfusQpszgrdAQUNrq26NwkJd7UmFwrPp8cRV8KZabjT3RRY9",
  "key1": "4ajpMHEUDinbqwABEinCNCtjKJ5f4TFNSRKYAQVwTN7AL814CfjitG4A6zadyjAc7Bv74j12G1cygx7pB3s59m1S",
  "key2": "2iJCXWCa3gkKkevgHVUd1adagxGBwXb7U7EUPFQ5uwYmdnmQjKEM1ursGgJvvJvy7NK4twbX2hMMzkyPtctsEHRU",
  "key3": "7K7U3wQfjEJtmYHhhr2jgL3sattY8PJkG9F4HRtEhCfVANiMQRajM7XigMX38CihX9Kc4FdQQwPzjgasdUsarFg",
  "key4": "3fqdVk7LKorEdDEiFjRSNt9WhsZYqTjs9yLDRCBWHwPx3vsv748YG28GtUybfSGuiJyd6coUYrkoGLrLUeywMTA1",
  "key5": "5neBLQJJp4TpEriyiy82a7utZgxeuB22YyCTcbQLYnwZFqdpGeN9bDuaRVcRQbqmRCUpDfAf9yRgpSNAYs6ti95U",
  "key6": "2usMM3gT4UF9aattk4udt8ZYJV2vyjUHxEeZyHAhQP8eFxXpgJ2HsQULMGJLX8g34foX63XgsQZuAVjAL4DUhCPs",
  "key7": "4XpvgPpbpqiSrJCnG7w4jconz4faNhCFDzxqzCCNi3agpkw11qmEwNB3mRP8VKHDUhsLgYFxkXEhwDUdMiDMo4Ce",
  "key8": "3ThUCQK5QLmWCHN18t7nKZQH7v9Nzv8syfiVcEKg52ZnJjv8RnfqRkoUKDjcRW1QyjaHXidMKKfrVvyKtJkNL3uS",
  "key9": "4JbJRGEdaYfftWTpfhYtBLPuLbypPteD8b4nJBvz3q6vLpFeanFxCJHTaCHzf2usUmCazk9TaETJuvw5Yp1Na8Pt",
  "key10": "5ninx9udCJyWb8M4CMwioSJcSbTam23wUgo3WUpygbUq2L3trSQDzTW33zHH4z6SibF7pnDcyS3xHvA8zYRKELMb",
  "key11": "RK19EMkJubY5YwRQEpU2iv1kTWWCawNn8xHdLPFX6D5KY2CBHEu4ErNeimqrknLqsrd7o7p9EN8f4DCu6AyoVu9",
  "key12": "3y3jUNEQTBDCZsBuMJbQqAXSyTxzf2YEuFEzWPqkRv5Lb9JYK5RPU3Sn53hsq2oCGPM5JTJD5xgjt2FHPKx1qrGf",
  "key13": "21QQDtspetKsrW62cA7Mo4yG2BwwNiCXRmemxQkH98fNiE2rGp8LyiZWQmCWNUkJMtaSYDNTGFaGAaanw2qbjcT4",
  "key14": "31PKPkCmUuJTG8xAyuBnBSHnQMAubejzWSCYS8VD3cniDgmyBDuPN4yxkK54tDSikoJFxmWUgsqpd8EnLyjoTwur",
  "key15": "4KVcryQiKUFXmZh6fAmVUpMdPW4da36Rxm9FkTCvPWiyzHu9QCrTMBw45sKtCiThaitX7jeQ2ne4zQGF7CyKKULA",
  "key16": "2RfdSUFyqqo9f8CXMFGYYiA8fhj75XNctdohQ45Md5MFovkhvjLkbPoZqp87gnd2zuaMJwFzAHDDTujmKBq6qB5k",
  "key17": "5FK6GH7wPu2D6dCUkdQCvEuSXKpX9QDouk95JDzQv5EcbLXMYrmxosSmkUfnkU6FgfmyTj5MW2HhTx68yDcJhY8Z",
  "key18": "4hbZBJfvFjXjuGutuxK56CTHwvdcKmJGSegd4C192FjxTS2ZeRyNPN5PwupoBpH2qUKmL122aoQtGsqALkNYb92w",
  "key19": "2ZDawUyaU7GnAfdXQEPMSwQQ8c81591ee8xUAX34wPev7nUGTsWcDgMGCzAm1vypaFn29YN53LRnn4qHezUwkuq5",
  "key20": "5oDmTjb7EDHURi6LUnxm3xk6Apeo2gKm52G45e8pwmJuuGebcAPVXoq1jStNub3JJrrHoLJ6UjmMyBwUAyneWGh5",
  "key21": "42TmHCPHweHs2VP3t8wGn3CahLHzNC6S8MQcHgXVbo6g6nEDwejEPxKSbU3i7qi9rzmNXcjvuuBVcXMzD8oNm1jx",
  "key22": "5xaHKRTUiXYLHyV6y1p2P7PmT3YGF1z8FDmkTZXpBbhM6C6Upytgrx6CdxmfTCoNSZpjusio1CEhho5S2Npnrqyc",
  "key23": "26yDkd4iUY6nosReUSvnuW8ttaX4AA8Ueaisx7avU5QQfBnNrk3cDGqEmoQriVMiuMV9qND1udjuB8GR6xcjuHNP",
  "key24": "rjPL4N5MUrrwE8KwSgxbTULFe7C6MZDP2rqG6qPGTufQib3EAvPDW5MTj5EsW6ZgneW4by8nTLLDmbuK7tA1nFt",
  "key25": "2yQ6AojTF3PDBZ1BhBWp3VCx8TZRw6xgp5LipLciR4FZuxzfhyePZWRoUEubn1cMLWK8DyRrGpUcoHE79KaMNPcD",
  "key26": "26qVeewBNxwHpDXqAWG8ipbn7jtLn9fT7dntevAEdk1ReLzszgxz4MSGmJi3y5P1aJCJ1CP8gTdJZZFKHWxsxE2H",
  "key27": "4KBEPjAfUvgstLgivgpckyvFC6JK4iDg65j37CWWCcMdh5z68nNBaHXYRYGZXuhoNmE395yvQReinExJ9rSfYYch",
  "key28": "4iNXnVuqzDdB89sW3SbLznpxJAPLwqnzvTFx7aSMV2yDHLSFBfaFFoJHaVanfg2bqL2pJ1oWP52cqcmQ6aB5oNRW",
  "key29": "3QrCbaLD1z8b9bUrXtNHWu6PhkwJrgZ65Kmr2qhffVqmKX9yae8TtEkJYKPFqGPKtfWd7kd839FitUd3aLubUpQ9",
  "key30": "3xafXi6nd2YBoM243AEgDbHuTHjwyv9LmoMDUCJewoiXsmQwqnPYRGtJKbHLGW7EZWAb9ZuqgHMU9HezxjLvpJTV",
  "key31": "KH3y2BMvAmsVdC4jDBhMGAdgMdKGz6QjtLwMa8mxDnF3emPFXkF2d2aEKnBjews9tKTnq5e1gQFNQMjuendu9sL",
  "key32": "4M32TyrRgB6gtADbZfesMNuNHCt3qnsMJhddSuZwMphyTRegrniz9YNfHcAN2VPho8WemEhjGHKruJnwfU3v7gfQ",
  "key33": "3VmazFw3aeEC4rpCYxUbCPrFXux3waNTEFxWusB1HtGKdTg6Y9hve9rqFkPb7cscbHfemH62ei58eCB5MadDt8Pt",
  "key34": "2ioi54V9CGcc2J3N87yNvzcbScT4PPYEUyzmRrEiJCekir2fDzqffF7fGFvrZBL7xs8LB4emvYQhi3Frwv5fA3aQ",
  "key35": "vCJEmiquxgTxgiEpHXZ3A3QFh33QFow58Hfd7ZN8aiZA1sd4JtUAz3ucfg6waWXDukJa8ZvzuTt8CsXU62w2kLC",
  "key36": "2jGXEQh9CkDXZGrKjdM6vuSknM67uEFfzjG3auSkgYY2Y4QjY5tzDAbQGw7XeMLhj8vhkvuRhKCRCkpvu7HwFFLB"
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
