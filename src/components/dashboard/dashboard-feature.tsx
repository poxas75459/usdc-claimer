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
    "4ZpJsHSDY4sqLmi2Rx5xM9grt6ALaUkxYcHnjfHEWNqXPL64vfdtYQjT64F1Jq7E7CNnCAHoCj4WtfWSUEuXdDFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKLhykWQCFFAJWj7qfTBxL69y44a2CoUzZ8D3XPAGyRG5r23kAZTJ7w6AwW2RPaVGbfStErk9LJWuxqoE9CkHuY",
  "key1": "dqp3DByFLKh7qR4xWzBfR97NunsdvjGwAvvUHLmXjFrspFZGhQ8y6KhDjsCz8nZmtpPjYch8Un5VBauZAXThWug",
  "key2": "2p6W85XUL8sfY9DCuUnceGuwFTS4u6ATtWbKcRPopuZ7cnSoghm8ZgpLbTFFU879Syh3a9RkZLorUgBn8PEF24GP",
  "key3": "HFunkCpZzXVYEZ7yzHuquzKYRmWsYbpYwgk99vqptD1ioNUkc2WTndAwyTm3eMtseNyr8L5XSdKcRQQvPSg98au",
  "key4": "3ZPHKF3FbYKYGEkBN2yCQaJgHrypHvrShbAxtzgnNcX9yXw7CYV8BmBfwTY4FRBHqyHTwde4poF6FbrU2oarGTWR",
  "key5": "3HRWmVmrDiq7QBnrSz5ygsxjvxzmBWwxM5Xd3xzYcp8k75msE3hNXN4xvcMvZ16oWHb7nqeoRmaALi2mRnwjv75L",
  "key6": "34U65ftFUUpps862x62qAJ5FPbpBgU8BgUbop3EhRoEMkHRSXdDGqgadGY3BQTaVkgZPxu17zXKJmcEcfoBJCNfA",
  "key7": "3gWcYLhYCCJgsPVoeWUF7mTKVjYk47pCDxVHKp7TM6Zw2EDZs8Kg5hrDkdyERsmfpva2RY5JLRM2762nszmAYoaC",
  "key8": "38TZxYBVgqfeQpehJvEzA4BFbMSKwJcm4PkxyS4BLNHihxXtyJvajKVuxx6STbF9T4a68QSi2KYJR3qo1gokgDxE",
  "key9": "4bwyNfDz42j9XU6vY54fxs1cvafiEm7Dc6dv9GULxBnTaXoNg53NiVqgk6F7kmJzrSESkNCDr3VbsDfiWoVxNhEZ",
  "key10": "4EUK8huST9MFoAYAUjFZZtSc6TZg6H8sudYek6MkhBKGpLAeHZfWnHgidAeoNrpGq2i3Y2WLZXDciiUeYH73prQ8",
  "key11": "4cveZfe2sFNNwo4XNt3Vm3op3HkWat9tB5hHoJCTaoM1hT3Eop4iG9kbduAf3tuYVxQ6kh8gaHousPHGAwVYCkps",
  "key12": "36APWcfA9wJafLwrNYHFnUv4EUQZyNeUfrh6ygp9BDuSRbVeyq7RcFRXMAyiTQCvfnpbNGA2J9Bk8jv9JYCPHEhh",
  "key13": "5JNyRqHc9xbzVgKRKfLYUKkmof6j8WJAm1thHWuS8wtUpayFdtMNRddBZdPKjj3XXyk7JKLhuyKoeUcdxjhLx9Ws",
  "key14": "3thfK2wTNYt7TLhp7TBCNoY6pshhiMBB1hT8yaN61Vw6JZqNxToJodYwNu7queCJr8bSpnxrM7hsxZPfXU9xLQeJ",
  "key15": "3vanf6kJ1D9VPRG8Hx2hzHmDgu2EBFpoPizNfXWboiqQ3JyohaiJiSodHt4rVY57raHveLZuqkyHcnFAm5x9yAGF",
  "key16": "2rmS5tAPX6o9FcbLH4XxUrrQc2s4vEac3NFp6gG9sZykmpy4s6kT68PsiPQVdYbiU3MzEjDxkoYDjHvZm6bq7NDt",
  "key17": "2xSUviCV12kCauRpNCcgPxdX5uV2cVjYhghHcpNRX4PjcVcftubm82GcA9LVLLU8r5xikwGUTBL5fXysa3wbre6v",
  "key18": "2gqJTnsgwGYumc1oxFbycqvDMCvUcwHf9AKkK4Y75EARnDaC6n51giCzHUAxHqesPKieU9u65yagQQQvJipen9Ld",
  "key19": "2eY3zYEd2WmPaNEZhDJq5rj6GevARi2RP9Wm13gg5vrKPnEWBPMxxSRinbhBR1MdU3hsFcYN4E7hNkbNizTiMcSG",
  "key20": "3Y9CEWcc38HjvUmxzkekjbPu2eHhhXeyt4kxD4j7rHe2WWuSNWHwFbzz4e8CkZL8kyezeupx843hHwvmY4wS2qXS",
  "key21": "3An4cXgNe6GTF9NpUJ8UcbrkJjTNLyjTUHiED1mxa7DfV3NQsY6xHgZ1q4Bg16oQLi48g9kv7o4NZj4q4mWkYeTP",
  "key22": "XmqM6F3WhvTApjQixKhX7r6A1WJd7JSq34YE1kqbaCLrfQd9Jr1hFYcHAKZ15nZAfTsDArYXm7wFYnXs7E4r7rC",
  "key23": "5WFmTQH8bJMMeFgyKqg1FSKpUqV9AasAgpoqGb3vqzmpTYS9cE238GMWCcmryuh8BXnHEpV7kZuAveJkTPpK8hch",
  "key24": "28gaFnP2arYMgCpvsGnr6jL4DjgVjU7rWfGiMxwP8GMMo8XW1ynTrD2gWj347zX1Vu7LEVSyhmnMBKnRGQMjc1RB",
  "key25": "36Sbhc6ciFTYGafUy4xiWVm6Q9GXGFAHv1Kp3HWFSP8FF8yP6YYfnqJRJWNqe8xNgaEHpUVFzkPXuzg9FaALBN6J",
  "key26": "3D2Gtg6epchMUfus1UzTwcU8vMUEGjnyejiveGM35wge4dPyAqEREF1gaMCTrhf6QcBCc7TB6HgnnX7YNdRZWFek",
  "key27": "EfLoJDjDeZkAyEuwMqfu8vk6k3zndwRxiSsqiM5mLpgSZJoZe5GVFjUcu19ymstBWLZSYbYWDiUmu1j9fuFxT5y",
  "key28": "a1wfBG4yqdTbErvcDnBGMLxZdJpXMG7UpXfhXLwPg3R16Qwdr24ZmkiwexBnEKRa87DwPJJCU2Eb8giHb1uhgMG",
  "key29": "4y1NztY9KYBKxKKRQrDVsiBbscVLdrfaDyNyyKvVGVYSNvDBaEZxgjiEhrgV9cukhsqByPnxz9gY1Z6VHTYFySeF",
  "key30": "5eWqMSknYinPFfpLB7BoAMpxwBn2PdwnxrDWao6B2CbHYTYUFDqBY3b1jS37YZ8moJ4CuzXgGsQLqcp6uAQdeWAJ",
  "key31": "3w8qzKJdp186G16gdu8JUN8RQ5gWB8StkJ2AqumKaXzMxxfroe4rA2h7DA3c8i2KQcmKLZmyJgMDJJ8n3qgGdX8V",
  "key32": "4S5t5CK8ZdG7RqQEQbHHaq52PL1xLVsMS7JSZYBcgJofsg8abME9nX76MHUHGDfgMyJPVLmdYXVgs3Yn24zeYszo",
  "key33": "29H3V3o9QDQrTw2ksxVQk5BfTGxz7AAnE31qrwWLdAHmbp74zVMbBUrsnCyqeWhZJvHzpLvqB6bxiukbU7Z5wdus",
  "key34": "3YqC5cJUuwAsCZZGUdkSSW8dycsj1beoieENc9vdBLPazx4Yd7NusvLTW4zjfMKhMJwD5bMxFpAaqsXxT7iCpsaP"
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
