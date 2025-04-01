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
    "2kCsZR4p789UDxUWbbEH8BP1wH5q9VDppEcBaaxvdsyULhfHTk8NL1J5SYm85DiF91o8terdGu2pRyGJaECS2FJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ctvv9rutn7sp7DhQn8UXir2i3yqy7BW6MZkVoJxPw2HDnADGVn1xTcdhDTkoSczmVM4RGrgoLUvnoC1m8acm4K",
  "key1": "5yDemzF42TWLeP6RuHMgHvdsJmPGssi8RBpNWbP8nuCP6PPDyWN1Lcr2YqnUUmSyVqN32XHcxBdG8yvK5EqHDJj5",
  "key2": "vwjW5zTTnDGNuqsptW5FkR4HY8THhi812gGdr51K8BexeNHNTDPwECeRBvSwNjG9XMukfCvAwHWTETVoYqpEn27",
  "key3": "24uU5d3S3JuBvRz4y15muvFre94q35tGVnPYK94P5a58EFyvLNqFYfgm3Qxu5wY6B64he9durerSRtDQbBTvsbZ8",
  "key4": "5Dq3zWHqYCMsGCwHijjaUK6CmhrYS1yejNz9kLqfXGc6Rt1bgdvj6uf5tk8DEYoJhZE27E1QpHQ74fbfpJSdQfqp",
  "key5": "33FDPuMN9AVnVXYHJfKBp4b25i3hscKCkm1W3f1TCWxeEbmgoKk1Z3xhzBGDPju1e7UMgXf4FLa1y47Gi8iKYKNy",
  "key6": "13ciqsV4Jq4nhy7Lh164ir7CbiE1bGGzyvKDHJJTWWHxBur77qK1rjRMzkkkGCg3LLLh7EME4YSWWTPyQBAm3QG",
  "key7": "4def473fYHCsBGAtJnafBPZDpYTJMwcH3QaxGeR2JTxRHUxoPhEcLnBL7pUZwqvrVJ2sqZRi4sbnuaJYeUyBvCf6",
  "key8": "3UAzaWDfSPaZiiCdRUzAE1kLMv6H5M9rzmXLXQstG2iNX3nqokYMm2E8ih9AhUEQ5VaMJVNRaRYCAWN7C9f2VAFc",
  "key9": "3ZqCc5gh8gBiwiCkx7wjf356UdSCWJZ6sQ9aWzQHdCtWbauG4GQSQqUN1uM7iQKgExqouwzjm3yX8X6xzG4UXpTW",
  "key10": "3Fe6FNqFpfczYURQW35Dv9ffCAGrf2yScCpztDW4KKQupxDxkXKxfcre9fZC6hdBpNSGmSKHWWpLCySWt2VztSEW",
  "key11": "5RhAXAy2X98gUBRjBFvS1n1Duq2RocdCK8XsrJwfepTk9ivSa1Xn4c9KZxDWPBZKoenDbPBjJJvjupXo5jS2Vx7",
  "key12": "2PvxJC9ePY1vfmjyLMofNE2r92nyenVkSBDjMc6cBhWeXdnzBCXbV8DgHHv2DPHBXBoHjRF8RX6ZVGBVoZMC2ydB",
  "key13": "aKA66Hn4nAHYWdCbyv5DHADynXLay53g2UBnEYAYWZtjMU9sV8oELbaZw3vJmQ6BqdLGfebxfijcAaT6fNMa5BH",
  "key14": "4fYWBSJLo9DvTkEX1hUQoVuYeFyZTrFFzpnPVutY8NZMpvTDogA6TWywaJKiM2DPvWWh84KmApDC9SBK6vLhSR7R",
  "key15": "3Tg92Z6fq5dL2zUKPpe82nNGCJ4LhoppcvfH891pQGa4dYSnZHYoz7zo9EfuCiLkefqmFmYrL8hpeKdHccy7V8V8",
  "key16": "5dreBWQb4meSui4EVPLLmWCpUgqMfbYAECJvhUzU3KqAXy1FiQWzLAPncAFrUSiTFTPVgtRZdvg5AEXF4yVGyhdy",
  "key17": "2egaMnRbGhUoZt3Qcj2QMYQ4rne2UYqPgbtR4QL6nY2UcMQy2Qy8Jncu2d2SvsKCpB5zkmmjjghtSTYC3E69j1jd",
  "key18": "fW55hrPy5pQJ1jyF5P8wNsjroUgiv67nd3XS7RSRsvLisD8H9t9cdGQJJJKtujCXHUiro2DorLy45oZcDho9c8o",
  "key19": "2sFXSimLRHz3UnNBU2sNqsoPejSwacWVBVaYYNN6q2L6qqdaFwtpjt66YemivbyBoqhBUH7kkHYKfBUzKQTuENF4",
  "key20": "4CEJ1Fr5NpCTChCHmWXH7tg1oN2nBY8TyThRuL1aCrqacjnD8AxtqGxjuFX2dGK9TtJPfPH5k6AscTTv5x544Npa",
  "key21": "3My6RHFs1c4pJQdaZVQ8BZ8nzDDjjzbPZfCZbFugeBWbhPbgiuoDeqPrJ79vWD2NifzVc1fFqvoGQxc6vwZ8Ru8r",
  "key22": "44z1mmhmfvTD71ZmmXbCj3DYVXTtbdz4oPfmY2QqYbUw4hNBasNeKhwaLJhzpCwXcqfBSBpm9BstZEbVXMfwbQtf",
  "key23": "2is8yHrGsj53zg5wnSwzS5roneYepNiQMDA3L7LjenhiDrBe5Pg2zHB4yYZyTWLHFHEDc6Zc8moEQEj1EAoPCApR",
  "key24": "5ak1QxiF9hWoWi9Yj1HynRtAZa9jqKRDRYYazMCFR8fA5kRdAkPyHQuCi2CqDsrwNqB9Zzc7t9qPMrr9medH5AMe",
  "key25": "KByNUXz7vUG4WkVMoYBRcCndcxGfwvp7cTYCmMMMXKtDBm9yZ1Hy9e1cfskWrr8obfCQUpf9dPAU36ZWpjC9ZFQ",
  "key26": "ha8Qf1KKX5jEwQMtzHQP3pM5easXZvLJbqnnzTZM5SsvYqnZbaGEsBfsMzay8gHMJqkEkSUjZkQSErr7XrDEjYB",
  "key27": "2cZkayQJD5T82FtAeG13Dfzb8XGAuH9E9zGXMuFCF9N2pQDZnMDYiGNzrvEUrA1VP9z4v9uhbiNxxRKsG19KSGVg",
  "key28": "e1oMhjkojij8NW5PqxaHjaSPETgKczGtTVh6xBpJ8cKj3SnzPey2zieXn3xmZXNVKS7xBmGKbsSyEhRYqUVM2uQ",
  "key29": "4E8fxUsYPExnebFsPGLDFzJArkGiRyFfRd2bffmWAooX7CNP16iRHS9R9yX8uS6wuPW7GyZMRwLL9Axv9xQpHFpA",
  "key30": "5DBK1rbPirvimF2eRNLxeFyUKmkBPKWMMJUwx5XvLcLdzxeafUwxuNfEzupHnL2GCeBiaDmatdtz4CR13c6GvYUX",
  "key31": "5g7EtGZFbt5hRCr4UxVHvVKvTLrrhXVPvh2iSMByasEzCX4KpcjqJK6mpMA4iunpiJARTRyTnUd8iw1c1wKNmyH4",
  "key32": "4wJ3vfGGNF7Jn32aZ14QvejaeEQjrJqviLahXeDyzCEEEfQ8n33Cx7JNHRVzaWdhA3tkPutAk7SLdSUkJ1YxurDE",
  "key33": "5DUnbvHiyAftiVYQhp75QEkPfBaz9j5ou3c7ztttwtD3uWU8NYq7aTLiqnD3oYn9S6QPhVqiLtAPgsffrWuC4Neo",
  "key34": "2Qsctdu5ef6S6kQmW6Jj6HXD9EGNKRmY5oVzMXGvQTsiimJuU98xMjW5QGkox9sh6uWGt6iTFSRbW8TCzpsyp3t7",
  "key35": "52wDXaYKaJEanNkQmXVcM7PisSf1RwmJr4kzffWbLQHUsST7UJP2ohYgZ62MnvoN5AcPvBDycDZChWQE5Q4yBD92",
  "key36": "3QGaY2yzAdfaDD77pzLLJZsHpMPi2rJLmj4VSv7NtLLkTjGJ1ELTETi1HeaaSmm9emG9EinUU4MCWCkVmWiQhac2",
  "key37": "2GL15g6p31sT9Nver6LTMxjAFCnxTo33dtrk2k15B5vxZ6ohemUy5bK3mm7QUPxNEsPbcTmbrY4ZD6RYsF4waZos",
  "key38": "5seeoC62HLWiicWtayYNZrotRR73LGmS1DPiWpmT9xDE7XgHemNzDgUXy7KxVYCnsSLNFKXFcqx4oDggU54KfQA",
  "key39": "4hBqZaLvKwGQs6Xfq9HWrgHkaGucgScFpKSEwBFqJcBCmGQoqxu5NvQXpQ8FLcyU8JLi2R9DbhtfsUug8YKnjnAs",
  "key40": "218azEYwMpJeTwJ8v96YDmuApnvD6sZ71hZGjRonJffGRxQqtc4e12q5Xx5jm57uuZP7xB4Dasj3XDDEbypqsPBe",
  "key41": "3nQcs1r9vYFdMeNaB2ymR1ZgC3DeGR9FXz9nVsgtDncMzw5maRyW4fZFmWTazcwoo6L7icDwm4bZ22sasFkwekGQ",
  "key42": "2JJzUqwfvAduWaTZZGnwAqqZ2kWfqU3BZVJpzqZFKHrAVkewTrCuobhcCs4S72ejmN7vRt1AX4U8BNRzjakQFyEe",
  "key43": "5bZ5K2zYRkFAUgcoCX3Dki7gyg3Zbv44ViJLNFoABxYWig1CJdg5F8kR25Btd9dxmCvjN1zvsMoDhQffSBw8hb98",
  "key44": "2qQPUXSRfxZ6bbomUf1DBNMdmTTJ9Uya5WKs1KxPnkikHejzjwh8VCoziYr9oM4PspJGjwssxn5BAgerUU49Rk8S",
  "key45": "5NPpehPqsCXo7TXnFkhQLqXjG52k2bUcoY6rkLBNNQQDxdqiHWSRUFWtwMwaDwNc94gLEMHta2LFdidQW5w1yKF6",
  "key46": "4KCfrcJyQCHQyxcgU7sJZUw4iSQkvaPTXDwkK6PZMxPbzCYaqjHoZAgorjqz7DNkBRRdNGePRbLFi86cmiiM46re",
  "key47": "3jbDq1grbBbqp1sXW2SH2VUuqC5PwWppyCapPJ5T6kB5KS1hkZyNScwULahry7g4zWFDyXyeT9EHrxhoRCQNYXuu",
  "key48": "4AxjB1J7Q4wHJkDf9Bch6MvuXfFPFK7hxMNQkXVuufFq934671TAaiQiFSkzp4QH7tni9bckDm7pTisLgjpAzLgK",
  "key49": "VyaHGAccvs33wow85w1WttRkPxfx2wykWUhW2RSxvSKBh4Cp4BR73k6YTzYWXdAZ5kFz46XuLRTDgAtce5wiWQG"
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
