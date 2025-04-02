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
    "4uQEcNMVkCoSFj2exetHYeVkVKox9FmGNgHtFrcJAAc8s8WBRoeeV5bVkGkvhSHhohNvXEnJSYkWMmz8hx6yeQfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnRoqNbvxdoUPefCGoVGGToGjXtwNPUNY9gL6GBmXEemHPKAPVupvUnWVxtTvNpcveAtWNkYyK7UWsPnM2GiT4m",
  "key1": "r4y7Vgtsn8ihfjHQtGTccTkPNSgF8vjXHaam6M4U4YLqoSuxJWAToC96Giz8XpTxpXLzAtaCXgUVhrNqYsn4ZbX",
  "key2": "43aXd2WUmWmu1t8tTHQed2oWgHD8TgaKnBGjQAGjgudhNjks3BMRw28QDPkfJkVVvP2PVuUo4AaZPomMfq91YvHZ",
  "key3": "kT9ckJUauLchh3t4ijBnSeAmMqr1CXp57QLes3HXwnnBC3Urh5jxuqBcBrWqoGp7oRuAkdHW7fSYCYvhBrxHMo8",
  "key4": "2DwcnafCFee6p74GdgXBvbG27zqyUucpqjo1dpDwDdMGtaWP27ENhTFuCigGSKupqd6ukdfNdp9P27oZitUjwChD",
  "key5": "5hWBojYoP3VY2bwVwDYnTBrLzvvbrWao9hLMGz1zbhCcGYiRPk7sfd8zXfdXc3jTAza9gxnF8bCnwEYxC9Uk9o7W",
  "key6": "ax6u4JwK79tmta5XPJWEi13LVwB9kB2FddbEidbWJfeXaNavfywgikVjcrCvRr46dKuQTofRunzLyS4todKhhc1",
  "key7": "5YwpPuauc3ZqiR4iNBvZjQuPkNRsRTirwKiJYeV5w5gtbdv6o9hw7dkyh6xZYk1f48JUuU1UGmt4AafQZFwhPnkh",
  "key8": "4d5eXDfYhofTB7ZqPBx8HbgwssRzVBGrXTSF3XpGepxh86yoMtXhRhfghB5vuAf3dGvxsYakSeYGEvkbY7qfNG7d",
  "key9": "2bDUBUnkDCPqUJks4zLCN4RxT1S7mnARnGeHhUs47fVwD6DdmRJ5ycVf3ZJRUho4R1uUyN8KoYzocPjQaqA2DF7b",
  "key10": "3hg8Q3TfjFWGm8Dw86a8SBti6LX3w1j71n5YUQwyTUbpFPMRBThsD6D8sMsVrqabanBh4MayLVKg9Hm9wG1mGr14",
  "key11": "wHTtDVEcacxLjHuE9bMDUXKvejCWmrNSmofZKbim3nsbR5iQ4YALhKRKFP7LKrgg85wiJ6bTMSBgqRKfAQc9MG1",
  "key12": "5DpWyke882Chr3N5qDb4aVQK4ehGvnR6K2ki43oMjadv5Tj6xXQg8pDuhZqzu578uNz4z9Tw1btgEaDm5aDvDrkV",
  "key13": "5rJZaT2GPzjMfmkf2FsuR2MUainyKZvp84UXFfHfV9vGAGDiwDx3j8tQpRBzHvyVPF9NpzqjUTY87xtwBjmMU8sr",
  "key14": "62TcV8M6rg1poXqWoNX4g6x2JgBCKjwG9cxSNWorGsKYybcVqxnVKYawT5VxNCy3fxvX65U5azrCVpuFdVMW5BzP",
  "key15": "2FSvvnnJutBCTQxFHYJVu5kz1L9rXYd59JUjfEKmLA4GVMXem6vLKPwDQfQDK6mGs5zuhJa9ouQ4AZsQ32AYYBE2",
  "key16": "27udGMC1Eiu8VAoBkN9otm4oPv597cfHMvHdXhzj8M5JZwWw5GRm6EEK1xDsAMQpfeF6XGHNfSRQdYA6LkCC56AE",
  "key17": "2udK7eMNJzwc7ZbGsL13m19DoYJuHRkK5bVWY3vsiFfjS5rMq8XZ9DChR87AWGW9SpuuF2yD6GGcDaDYyojtbjEa",
  "key18": "5xzdqtSRQgr1UW96L8QmN5xnnvK9kUFy2ahZzk78MeWSDXFYgXj6BC8imTRBqMmycxschfrPQ3ZmLYSFU6bCk3CX",
  "key19": "W4Hsw5D9DCXNAVa4LYaTNPVrAMkAA6KVtzMyw8WVAdXuNEbwC9tXXyZ5ijbPyn7SzmEt7GGrRadzhTSNEMbSe7g",
  "key20": "2PDLms3z52gpBNKgBb65aXjbYDbqLw1AL4tWAkxvzchfq2wTpvMvEbDjWFDLGSP3ELpnNiiZ8831TNs15QssbmJZ",
  "key21": "2VNe27rmpD1vJ53wPRzcgeBZNBxga1zaoyaDRhHVv15gQsCTEX6Dz1A8a7NEdxT3a3nAVbpQkMTCnEHNTc96zNxo",
  "key22": "4v8VhSbGzT7qTYiuEWGurHWSwMEpLeDExvjyWchxYEcGLoNURCiFxaUTSANaNNi99HyURvJgXCmFZHm6Y2tQucnF",
  "key23": "4Yar222kQcCLLWU8fQMfAS3wHzpwr96PKqL5uQh2PDnE6agATvnXx4pGQBYvZTuZX6dcS5pzahKUxVJkE3B2Q3LQ",
  "key24": "3x3NgA7b6fKFDK1tXvj5dYwJQmeBx9pRSM7WQfhUXf4mS4VaK93SiiX5n42d8dGQWpwK3nZfgishdHaEYqSSebGN",
  "key25": "46wKyXqNLffoENFfTteetL467xQo2GyTsdMDXdYBbtCGhwvCj1B6i7ChKh9HTcuUEcSfXDz4DbZmRwz1UUvgqUje",
  "key26": "5XWHE1a7WaeLRyJa2wki4EXTxymBiQmEoJw5wP1UE274zjTsybEEeeHWoYMNpMaq9xFSLamFjBE3Hen2hGZEDC3t",
  "key27": "5MfijnQsQbnP9E6rxmwsfG7gvFDkbCGxGmkgaCLGSpy17aSgPGHjj3EJjkV4vHM7MCyv7sFJvS7VUxq9s3ux3C1K",
  "key28": "4Jg4AjRy2HWPGFtucsJoHj4Aitsghxrv2tm7csqhXEB1sp13KZPcJjzVnKV6oPsk1TFuEpQUH439Hn99CchhD7UU",
  "key29": "2oX7Z82YTx3QkVJmuci8DuWZPzY1rGrJwPMHamjHdf7B3HExHY887F5ydk5y3594HSC2LuUafhbo4Em6y71rCYRo",
  "key30": "3SGtktvqNW2W6hhQ984rp4qxCEULuCPUr1uAron2gHSqGh62SzRHYE7eASGbs6QXiLKXAEw4cJfmqzDaos4U8tuz",
  "key31": "4TLgrgcRmAWPmEGNr7de3T4Vo8VTQ8vpRAtcjffsPXGHe9nATMFsGg2thNuP2BdBmudTG4bwbjswuy1noTBJRsm4",
  "key32": "2uM38abFsJc4fdqoFMX6vVZkxjm6pqxuuX3FimXDv79c3dKtFVqP2e1XoiGfaywMWh41D8GAiJHWMV7tapRdiHDb",
  "key33": "dVnGh5jKnngBPSReyeEbFSv9U6HDnoDwZJL3JbhLpyxx6HQqrJuDAp57PK1mRS9ow9NqBdu3jScwHaQ9WG5tabz",
  "key34": "5df6qCjdLhnKtinrB5U6mc7LoADPiwVdxKsfDxi2TFaCqXDoBGdnqd58TqyxBsxhb9SwsKQwGFemBnUCGyDijFMH",
  "key35": "3pqYfWknLoxR8oJnEZnGu9fLp4waZV5sf3fLMfFuQkqJvxyuNBrsedBcsFgcnuMaRFCD2R1TWJevgk1sxC8jYsGv",
  "key36": "4EwR9z2P8vFGY4WmUjTo4v52xGxwzbDWCn6evVVzGJ76tSyLg44CurfY1YA82W3aZ6U9o4saofN8B1gxpLrQ35ga",
  "key37": "trCn71vAnHgK7s3uJMnnNkqPksuCJ6EVUHYiQECwTR5X6dqVnmCBmVaEq83D5pY3s7M2PcdiLg6ycwygXDpwS9C",
  "key38": "3TaT8XkfkJQ2bqjWiynEkSnKPRR47TUNs68ngHqzfQMP9QBAMXbGRx288UCtpbSHCdP5E7CLuFyTrZnGMCqY6fdz"
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
