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
    "2NWp8xhzCtN17AbtiDkcvDuz2kPwdJzSvpivoG4rhMebnnHaNfsbb9qvzXTeDegkn1SYtmvUQpC4uKym2u5vEo92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDS39srDqVGCvx4tDMVaffHjT4QJAcVRpCXS6758GrMCUtKXyYxn1FB4AR3tCxWNfGt68ecuuQhAuyBwU9kV738",
  "key1": "5oEQRazWgqBDpVuEEfsdvi9h6wJQaz2axTAxfq1Mdeo7E7LRL9MGHNNcdaMmhqvBCkoyBGsFBRr6WYs3NrmaLNFe",
  "key2": "4YZR7DgUcnJqF1W5iCcg1xEHstby79aU8vRQyvB72KERGBGAQsLE9VXYeboiGi5iYhGrR2d2aKzhvHqsbw3coghH",
  "key3": "5g1aiXSF3uphb56ikAM7Yqiaef7MiYqHqo1CB8DeyxXYjpv3puLptrUxmaZnjmoFFtNeyuAjbqVqsTH18SJ9pgDx",
  "key4": "5bA5J7vWJfoyg9deiSRmRfnSzNewKRd91mH8z76LELcQVLKxM6rPjJTEbpfTe17x6v6WuodjM11HsjK8yZHnVjkg",
  "key5": "3LVbxfsu8uhTyKbF6W4HgJq5mpoADm2AS1mYaCKR1Gc1MNVXZ8CuA2feemAf7PjJb1mqzHRUE7jaXHUcDEJeR29Y",
  "key6": "4SbrqzMQhjogGTcuTM9oXmHFSov5wKKaZMc7L5JWQ5fDrdgVqrpB2QXYTzqXdJUKdCZnHvxtjRzNFMpKYwF4czJN",
  "key7": "49MNPSTvKfLcYqQ7Fg3SfxvipJG1i9Jm9trLb9HcgSFVFTYWLNStsSwc7Vt6PVmnTLwHpfUy4FCACscRzacCufyU",
  "key8": "37pnK1mBc3pyfPGTagzea5JqNuVwC8daDgFzeq36smbzgvh8g2fH7sM1zRoDY2sqzx5UsV7SFJMmmn9skSnHpUg3",
  "key9": "3prxjLG9kk8pLwAGhYGMuV1okWuQ1qFeVfCSFknbfmyZK53YsCoD7jrpRkbLeVfs9xYrYiPyu3FepXMAEW6ZWa82",
  "key10": "fMxd9rc3DAowvMQFNGRpEpjUBDskJ7Gr1yfdfMfvc2T4hKp5mzpZwNY4hr3zGr2gZ1qb32Zu8DLgLK6rL2qgoWJ",
  "key11": "63E7vUG4vT8hqS5GNZ7tP2mq4iEkNW9vJZUWwCmDTgK1bL9CkVUZnrqg98qZuc8YPLZ3P3azvygBaVj7kjdnGtTY",
  "key12": "5WHuj6wrbcrAKfK77jZD5RfnHe1TuemAmpz6CtzRFj3SvZgsM6SFx8PHxow2hRNfGjLKP6t8qi1C5ZeTFwZf2q7d",
  "key13": "2rasckfmNcwZpcLQUFHKdCrtXUgudSn7bR3eBggVk5QinF6P6asyzfDNf3eVkwM5mYtmEshjxgegpKGnXa7LoyYn",
  "key14": "2KQLsxRd3YTpJ2GXA95dE7pBnCxGRktYAt9Nz3JdzN4c5oxzxDD1MiK5hbpF3LjqLYXbg32Bcg68RqH9ogMeXumu",
  "key15": "rHai6v3zKnM6baq9XmerFK9HdVDo9Bos3uSkqL9xRGQH1k7Ko5gUVQ3Wnf8sqtwRjKjtJreJ6oUT96eF3KoW9XT",
  "key16": "5NPDPcNEkWkFcA2u2ecLcM7Pz1mMPWvFDK9tWwqXk7vYLojkLrQztwQVhskB1nPDoYJLygVsj2VxouYKHRd63GDJ",
  "key17": "2mNNWwkWn4s4ZZz154wiycpmukt2vjhs1bEiYBd9TPjNobDxuiTNznJvxMF5LeBeU7tLhbkFA8emEPQcgYZ4Kw5E",
  "key18": "5gQE3njndToCnedcriDXNJ9PGAVxCHQxX1ZJg6c8vvZLbEnEcqTmoSZ7GGqHbX4Ck2f8DE8JwMrnJG2Z2eonNSrn",
  "key19": "4WKod4yAPDrJMD5mHVBeSKUA2u13prQohd6LnESJKSDhvF657yYhWPsYbHcKdyZNtyaY624Ri7V1JkS3FVVEn5HY",
  "key20": "4Hnh1SEoMhaVPGnVzumptam3oDh6gDTBL3VX6UBZuf3i5ZhzKyL2rSWNLPu4Au9jYsSRRCXfSJgYNo4KhgkVh7qL",
  "key21": "tyFeN24fpj5SVjdMUPCu3BbDSJHebfBEVWgP6mhbiVFd34rBLMZ6S355ihRomaLXNrhPhGiZcp5GViAd3BaXtgR",
  "key22": "2x3jbZktWhqbKKZZnb1XUk5tQBrt1vJhRtszmEY4juKFP88cSEJB18c84ujjBjfyFp6GB8bp9BEwYvKNMPXXXmWC",
  "key23": "5nfnRDi3jyzv2qg43fB4DdKsMNWQhJSirHLmNs1P28n8X1sGkZpBeLeBAETYY9ueS8Yf1KrEpmJdC4tZr1p7pkRU",
  "key24": "4FDJPhNebmXS3MHwSkozsc8YydxCPzMnd5CnvcFJLXxLmMNW5HMtuqBvZir4mRvpv5zuX2kM32z72A8aw2pPvwgd",
  "key25": "5DPXhyQ7DjZFhoNuADXfNizbk5MNT1VrQRHvmPkbPJ3aPXMVuQgg4zZ3g6qseN7DQCNK7cUvYX5QVTzXqgzoc4Sw",
  "key26": "2xEL7HWY5WebfEo3vBEKbqQ269vR1D7rYodUi2fkNm93zb3E6RFdG9r4xvYMSerFtetSqDKiNBFX96vgXuW8ooif",
  "key27": "2UmEtvo73tQkEGrSZxgy5K5ofaD8kJ5XUQvyUmuHTBMM4aZbKgAppGhcM6Apoqg48sqc2GcFrZmUAW3NtQsQr77M",
  "key28": "44gXfmAnVfuJ1mt9Fp3xZNrkWjhEevMnmAGznJkz2XPCv5nhrZ36PwapB7xz9D3yymxmHnaMJKuGGh6vui8hFkPU",
  "key29": "3cgBgMamzSEu4ghvvkkDktip2TmhtVGQsTCCo7LB9s83Gc6n6kmns9m9ToRLCBGdDTdfh9gm5AFRZz1hsV9FT945",
  "key30": "JTEtYqtyQ9wie55bTP3eDJ6pQY5j498VGqLD1tmFYMo1nvuuizAn9AUNWKeXK6XVJNbHtKZi5t63R63r9WqTgoz",
  "key31": "WF4MpsASz7YfiCzMFoHrn198euELC3MUqUQY4GEbLbNJ4xNpbTcDC38tfbxMgqgkzH4PvNaoQwP8n2UE2ncNPAH",
  "key32": "4EPfiBK3WTwJZpYfzdQ3C5XyU6dTFKKiJA4oRvTfGUwrDy781ADCSAEGBJHtbFm5FQQ1aTMUXxrX4B8p1xcw1rD7",
  "key33": "32nZqmmLHfRc5u6gkzJpKrEUEeok4p1ueA9hLKi3WQH8Zk5j84ZfaXNdnEAPn5gCBd8e1tDMAWS5hHYXDw4JiiJA",
  "key34": "xd9yrqtKbbEXfuM5FCnKndferZ9Kr13WUf4DnHT4AnyRwivCUQ6VBvy82t7Z6of3DA9Y23ts7DAdL1NArCNEaak",
  "key35": "4ju46WWX7x8CNu9Wy8j1vuoYDBxto2AwKtsT3EgSdNGxBLSk9xY6AtZ1cPBYBAfdru6o1fL7tjorCx2teJFn5QPP",
  "key36": "ujgWJ1jJUzcUEo42SycUPrPghyeJzG732VAq826856xopxUskUA8zUedGfQmYCwEQLu5zy4eXEtM7pkxnvZ5RNE",
  "key37": "5DzBoscsXccDgFxUxZKZkhfPyeQjWWTswFcaQ9yNYQK9FwCodf87LyY7GwzqkN96hPybneTABBXTeW3JTFPp83bo",
  "key38": "4fTYwLnwNxotn6UUPiTtYpbiuLzD3uMvntxSzMjm3rvLaVweqKiPDPwwh4j4d6W8FbMD7cK7xTcjZausmmZAU5To",
  "key39": "4mVBfdhJCpsCQb1wQdXGYHGB53Y3hWeJ7xM7dJeoDTxeHcWZKXM4XRwdN3F1qrC8KBSqUDPPRd64XYhyN724AfvZ",
  "key40": "3FW9L7kYsnEeaV6KuzYssZwdidMMbR8TbR3Scr9212eoYrPiLkaAkM3dqgE26QqPAB4BZd8royQnzztkzgQKrgLK",
  "key41": "5gEozLx3JajTiLHjkJYYFPAFjkS6xzRnKknJ9raTQuxViTcPv8e2Qq8SxUQGopRhperr6LaReKK4TVdxnLz5h2K",
  "key42": "dScCxP1DNgi9BsQjQvkYBp9RSsncP3hkZsZ8KC47rjX5bqhSh9RayVWUmkq8GQCrHDK2y8CYQaD35xY2QTEPBz9",
  "key43": "33B1huXdGNxmwZKjWUud31XMwiDSivSk1R9apJuedXE5njRBrzWvPGEDnZQcgRW7G7frShZX3VnDpzfUiA5aT6Dg",
  "key44": "23RfLFjQJKTcAhgFvFW9P8LVT7EcZU2ZKmkV4qt46XQD2QbebrLERwxjdouZU3WGuJxWAqvM2eRDGSCiLdT9L72a",
  "key45": "4Q1KfsVb44MsUCwqomS56ABHqtjzCsmgLeQYDE3i9EkVounhcJvLhDtKXUL8hfBe91HBxyib5fixvvLj3KEz1GTc",
  "key46": "4FPDTeFGQWuJ5VqJxNbQgP6HX6kUvRMFAgBrYanjFF15KUgEaqkVp4RYUoGn98qT1nj8bDAfT7hJm9AUAjzJS9mE",
  "key47": "4KbfjzbNgxgtMciyi1h9SKYNEXQ6RVikjrB1n72yMhChzBwHvxe7dktmwS3X9rQ9rFXvkxqLNm3tgfjxt79DbcaP",
  "key48": "pZJytqsUoN9dTWyLgkHjwjwMtNakCG91awaJN1YQekPGwEt9uya56rqbUsCYka1eYoG9mJWPGavJSnPMp8iYaXd",
  "key49": "yynFZ2P9WQAgybHRSEBrPT82iA8gMR2AXtksj8ePPvrr5hDcN54w2ks4CqLsiNLhsurEH1SwAjdjKM2HAngVwGb"
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
