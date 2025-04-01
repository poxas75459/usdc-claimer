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
    "4DNno7QE6W5DviPxesTPSxV99941AaibECmmF6tbYBhZL6PbLEa3gAvprnZdiTFhJKYruQwKR5pZs6cyiyCvZgPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9eEBha2qg2RiLggBeQvLQp4TtT7T6GVxyvoiRjem9DpPv31bcVQVnkuFxbLARMAaLgcZ1SKY5gK9BLPQs1E4GMj",
  "key1": "2e1QNddCczjipYVT9E6dNV32roQFLmGr3w9z2VxayF78Dws33r6PdNXJEdj1Q3KFR6RM5KW3udhZgB1dQvM7omsQ",
  "key2": "aFREr4a83FdSDT1oEUuV6ym74NedeU5ckBwvWwqvVHF5dP8ESmxTKyNqHED98BEd6hsNQac4ogzEhxx1XRLEAx2",
  "key3": "4bBeVaXRdX3fXWki3FHoZrVJtaE9eAPgC1U4nik8gmvBb5bCB7de6SUcFpZYUQ8v2JDxo3y2gjQF2oJVgLuJkZjC",
  "key4": "4MhxKmLNvXG5PWBdQrEGvphDsoAd769ZJxatkhCGxsFmHp1Si3DQPYfCAZkPK2KMCwfgatt5jUxJLSPyxwh2GCsu",
  "key5": "2mLNdmW3CdeebJM2xg9DAH854h7mEr9RHhSW82CnAdpd8fwwXExLwAKh4hpLLURMGt1kDhrc9Zivz75o6QUpaGnu",
  "key6": "2jxiy9HbcmpFBBZfrR4agUxNSHo33RRi4LYhiMuvkDS54Mcxiye6QoQQDP6WMcPB8YGiiM9KeVA6azzjCRSoZa2s",
  "key7": "5vjmSe6kePyTpuPCzv6Ba95y1BzfpDwzhzmzsvXCnbRSLZ6P2rSyotgvHrC8gyUJoSY5fSGLFvqGDBD5c2wpQJ4n",
  "key8": "3PJ7vXQjgsN7Fiewfbb1v2ZvLD9SR6WptsPjNBiCvmA2gLa4XKWPF7ieEYm1nsSta2pVSNwsmPWY78xT386kP19C",
  "key9": "2VEsxogu19dcRBu33hMKXPC9SWYPSXeV9eraHBQ1Du9wbFgHPZmVowabxv1JHj3Mbc7kPSpnvVoh6L3fcuo6YA1T",
  "key10": "5kg1wK2j7EtGTsdV1fnM22mhhmYgVyzDuNWDKoNGgb2n9K7U5jqeBESCGfmSrGJv6LSkGSjKYY6Ac2LXzPLvFCYu",
  "key11": "vUjDFyX59uL9nQfZwXTkJQgygD6yMgoz5qiBHAMddkNDPMGDqd83DEZ6mYE7gY9NraXgq6aEcE3uL2pjTJjYRFa",
  "key12": "RXdSXTYPGyTBqoDRx85LWXAJuHNYMPfMZZ7BE6gB6A2p4BLZovNzYx7rnZh8kVRSWuoUVmZREswa45gnLZuuym5",
  "key13": "B1MbPXoHD5UpspgkUayyNq9G8x9w4o7gz4nMXhm9zhPd3Zrt9KE9VKNE17PNEJfwKNz46jPat7HoUf29THEtFfJ",
  "key14": "4Pcnnewhg6Jd1AsNXH8ADMuZDMZSF6D1Beiif1BEME8W5AwFBrvcAzD11NepjWKd12utdWE5n2SGFzU6VSf2bwAn",
  "key15": "3ZXbq4vYWYVbQCui7M8F7XxjaGYopMhY3Wqh5BqbByns2cP6NyCfdphc9hGqt668ddYXaJ1efsw3CkMmo97cWgMc",
  "key16": "5a7wusn3F9MoADZo2q2dB6eZr4GVTbFapDDiZ2BRYo7kbEkY1ZaVKkvwfabGxTTNNfvNmgsK64X3Wyi3Qqd6R3AN",
  "key17": "3PTeXqrraJPhYRgY6AmdTouKwRWH58NTYmZWXyiP6kFYvmXM5dZjWko4rUoMzQbEh1cd5uQMB41V7xaBfWEvLfJt",
  "key18": "chcpz64P2HLFw8Cf62R7z45SvXqTAMxSCnLNMqDU3PogvguSogRs295MppNLvNUhzHi3qPtcoK8BqGc4dQshnXu",
  "key19": "3f2mD8RUUShgPY8gFjvsv2j9UUXX31pDrXSpxEQiqXndMpu7NtX3FaW4dzCGqoXhjhtmEYiNjc38L1c4E8VjgzFY",
  "key20": "4aoudSHmJTGvEhCkvvXcm5iyMwKQDCqjEGN9G5SgNQptdA9ya9u11pzJseiAPuKYhNqjArsmHzsde4G73QkDXYyd",
  "key21": "vXAsgrEkt9zfmJNwHRj86HGiQU4Wb2myfHAsb6LJtNt7sWU4Bfn3CYetruuii5FGf7Jkv6LXrqprkxm76zQHq3r",
  "key22": "Mu4w9dqVyS12jZRY1iwU3yCN9KD5qKtzTvm4kgHAuPC2xcxq54pJobpYWMADe3JxHeT664jkPjPbWpwofuc3XzJ",
  "key23": "5tNMeNB9q3CtbQhHeF3zp2ugEC2yDEhLpR78ZG6H2naJTeXb8zrfuXJrKiT2dZShR7rL8tRJy5FgZY275jww2ArS",
  "key24": "X4CEn5iyKpLUjSWQ3nw3WbMH1prhdenkSfAxyfqRr666gev9Eq6Lg4RKgKqQeKWoE1GkKV6pZR7JmeW9ono1VUg",
  "key25": "4DpYBamnzt83JeSK5YrgMk9Bak1oUS2vNYPscBs2druD3V9Ze9G2ZNgwnb3xMP8HwBBF2uLqz9FwjKJPhiNRACUK",
  "key26": "4RpVHyeY8Ngthq5uXGfZVMYhT5US8F3pjGJLWAQFybVXeW18sQHa8rYebZ7RCev2zT7CNmRXDW11zTfiUYF44pYB",
  "key27": "5VwenwTWaumjuZRrd9j5QZuGjgouRh5o9vFJMbLKhqiLwYi7oyNRe1WxDe3khsjF5D84dWGQPbhb6dFgnNu76t3v",
  "key28": "425QCVAKRWb3WPddNwKm93FFgjfm5uryrtdLquEQZGAbxGNib6X1b3yWmieLToiYUavce2PYq2i7CY5ScmiLAJUn",
  "key29": "4V2CKuEEHC36nwus2Gs1QW1DBXECmkHiAyLT9ittmiWWYSUWZ4NyB441z5ex5zt8mbZvvvhVywCtcJM5n3SCqdsU",
  "key30": "KnVJBmQW4BcnD76rNnrj2EmdX1wcyAJwtCANFAAw2MrN1AKr58L1imV8StTQgRmCjVioCX69rVydGvwsMyuujiz",
  "key31": "2b7Tb2wPXDbHNgxw9mU5bw17Fb8WHb1vtvTnYdNrnWtS9dX5hsnbXfNKWUNehKVH6cC8h8Uh6q1TMPkUY4kZEXD",
  "key32": "jMexeVExAZwpFPr7UaRGnhMeoQzzrzZZAR7zNDux9rWQc7rUn7MR2Pn8vxDbetaYDbcJZcfPiFU39cctui5QmqE",
  "key33": "dBRQVQod8GJActKE9VnsUPzVuGmrD24p5EPKpFVhWW5x2n2Md4c9mTq6Xs3Uw4t2dzr9n3LYL6yvkejFNwir1GJ",
  "key34": "3Mb3tPusG5gXVHRbV5MGzY5nx5xEGnMnZkH29ZLbhr48Q4UL22RFaDW4ye4fQfXhPJNBvKi4aJsSmjbNctYB54WL",
  "key35": "46G6PYny3bPtB5kwASpj4a9y6Kb2EEgigX49285Nm7vhausFay4iPr6YGYVQKpr7MUyYFLgvZNGgxpgUS3qhWpBZ",
  "key36": "4i5DKC6d5fdtvxQQWBRmbA2BmzUZ9VYzrXcTgp3yt9x7CRAaEyRWwXFGQCqEvJdVjs63A9igo3GrMuAKR2BjxPoo",
  "key37": "4ZEXURkQfT6iRXLcWkzENjUAM5zS6FFBkiNjnfkDJ2D416ucr3FBwpeESa4hKuufCu7B5fvojKJe8EcphrKqXdZZ",
  "key38": "2qjSo863E7R5eWzeu3vB2BCAG4NkNNvKqXVizX6sQkxSipmvXAXD9QPnD7e64tZZMcW7cKQXmVbjFLbZwN4ARCiM",
  "key39": "3UdGe794JDffPT8Kit6fC2yRAHE9j15JE4ewfb5rk9nuUDPMhGWom6JS2XJqabibPPMw57HReET2AMC9EEiWUwP6",
  "key40": "aDyAddYNHQQptoEQPvyjYdZVSp9oeE8RyaCkVBHmUGTcDUcvefNGD21CUMSKBixp3n3FCYJJnwB3kNBc7s2nwtN",
  "key41": "4sKudYCnXoB9yu9GzDyod3y8HmxCjU9vqCVcQNMzYy94K6RZUp2Ncr3wr9NW8UsKWCeLyc6Bej1hsPV8xZJ2TMU8",
  "key42": "4fkEJLPmL8GtoNRJwCc3DZPQWciUg3aAtjFBP3RknT6kbnn5nxt5hHXbqut7qMoFDUFnE2CEkc7dnQR27pnwurtQ"
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
