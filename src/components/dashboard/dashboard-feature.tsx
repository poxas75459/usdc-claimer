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
    "41gTZj4wJgCvcYKZjF5N17h3XMTVPQavd9Uhm6UrFURmjW1bYazCHufdyTSkb6NuV8vFvtPNVyQfgMuG629oUCZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcGaRLhdzJxoKzX9URtB61v6mKRcqS1miFV3ajXGBpvmVy5THW6AMLtTSFyATkqD7pQDFwxbc476NpAmgdhjcDP",
  "key1": "596RWFcKKwDtygYWkBVXPe186Qso1p76oDssgEpGDUb4byNYqw5snARFf343EgvXN1ijVWtxD2uwEGZmarC3heCb",
  "key2": "5YctFFSzsRJp2UybR7hdDDxxad8EjxExNdcMdAcDTF2gR53K2ySjG9JDwUtb8h5PjrM325nXhZ36UCfQJKk56dDr",
  "key3": "4htbfzHywk2L2VRn8yZedt4cREd2deH74AgHQLriP5C99ay62QXRNodMWDCqMU2M1cwc3dWDomB5nGdhxKUz9rpT",
  "key4": "43HwhC64iHPGi8XC2PCaZ4WmSrTZnKE3kPeCYHxUU8DhdFWdbvb6tKFaG1xTPr2emcYzjdaegpSbcU7wZuP14Jzj",
  "key5": "4GxV6kpq7TxWbKPWCMJKnMDYMCLD5bqQSsU4xV8q3zEgEtaP741ZswD9bxLfAmujmpszGMQm7QpKVooQm8d7aFgr",
  "key6": "3B6c3DPtsXKhRe1DTPxbifHGdPoG5rvD5zFdTDofsyqtE8u3VbHzQjQSbBWE7Feazyr2xEvs4EqZTxa88CJ3sjoN",
  "key7": "5cqaZvTYCbTZzyMLYqPALoixzjCBzFTahLjRiE3TWgje3gYfvY9j25ts4KYjCCuS92nDDDKQJ6SuLZrcYDwokhaE",
  "key8": "c8QLoKh6McveKPPXe1Licie7TbGEEBD8n3mUqFtHzSWroPh7xLZJgqHFp4qCPbzv9V44HvarPGBwmm8dneHTe3u",
  "key9": "qHWw975bFNVSGuUX4WSHTm1RvFwCrNMWoci7AAaTerEyj4N7fkm6NPh8coA14LANw36qxijomLGUP45Je7kxtcH",
  "key10": "3hg8QpZYHnPvqG33kR8aNu5Jy1e4ECrbWmHBNEXJcMtx6VKixcToD8aaNU7hmtPNMp22XV8svGK7p3JQKMjVnmiG",
  "key11": "39NWzSHn28haw3Z5zpTUz3AVskoC3dzvQFWNeA1k9W6qV1uP43FMqwHgoQD1JyzFnnZJuMNrzDQfUAqJRCE97L2j",
  "key12": "5rnMJGTDXFdKVgmDqw5jtaYbwLC97LkX7fyeBRn2Cu9FJAcuPPPbMuqbaiZPrE1MxMgg1m1Ai6HZP8ym2eCd8PZs",
  "key13": "5LjJDigiMRRJ77jwSvsgetfJTPYwrZf67MFKBUALA7SyPn4HEbpKZHJ6UAzjob2v4n4BYnpMPWKHSVH521gFg66p",
  "key14": "4dG9tuivZgNRiXiB3JLZ6WSdeySBdMumxJyBYeaXg1qdXCrsAwMDT8tUQ5PTdzneJ7N4v6CMNgApbuy57VHGcS2D",
  "key15": "Y6VmvPfvmZvKL1SZp2Mp5skniG4yucNL37FjfcPoAmPbGMaAftSN5T8p3dSpBvMtwVwiS4d2ynPVRcTMxttFfFb",
  "key16": "3Jgss65PT4Xf9hFKt7VSdxNx4AMfLYjRxzWyr2vGT5e3qhGKNXzkzVMWBZTbWwpd6BD2LZNMMmDdyy1M8ZSmom2B",
  "key17": "HowhLndHB5TouLkqfH5MLK3NiDGrNCijZpeNMifpTEvbQnmAapegQ17WJ3CJZXL8mA69GGGCSrLwvRYCvjCt1nR",
  "key18": "24W53iazffRgppsLZ5VGYaWcMC2A3Fajf3evV1WaLHoWavTppr2H4nV72SPG2QyFUL9z8Q4xvLf9BAaZjpsJmNhk",
  "key19": "21WE2akQpwPt96c7HY3TRH3wjsiF79GnJy8NbyuKwy1kvQtwmEYPrwaVXRAHYZz9QpQGA7q3jemgkd9EbDZo2mdc",
  "key20": "5BXxzeXLyq8oVvDXCTVz9LKwttqLwBWD5qh8bYJGrgr34ydimxPUEbRLJJwMvwxrnEiiD2zDQSspQw7ntye8GDRb",
  "key21": "3mk3UwbE9CiuRXyP5bVFWWvJPzkX1xm6kVxmcrnBZUySjhGSbz3SCtWHE2AePtPy9tfrbgFD1Aj3iMSTazD31kxY",
  "key22": "3qBdpKaYDzcN3NEZM9zru1bWGRHmjviyWrrKhfzEWXiW4nkM2p3SDngEjGGsdxXFt9RkhbCu29msJNXWgMnPr6bt",
  "key23": "2Fy5Ax3uHFMraCud1Uc33Vis8wfzUL1PDwKDjqoHJBUqfDRa5yRPd3Jie19upaH6teQvnmohJrTZ3oZtmWoN6JUw",
  "key24": "2rw6PCFNtXX4DbBbjPoYVhjDhQ7LWJNkwwd9rqESQ4BDhvbbUQxHbcQGYwXWmXo7artqD3KcwifAL511sRbNXbey",
  "key25": "4TNQGRvHnptLy9MAqbLj5Bm5HNmzDy2Gn18r5PgRdKj7LvLjssP1L8i7jV3oYZf98u41uVSgsE8MBXisNppx29Po",
  "key26": "CSFsipkqGaQbGvP119FbDGwTyskV9oJYCXycR2vevHvq1Ex2Ypctb5C4PZxbYFxuBH9ZijTXiejCXPowoTdqDGo",
  "key27": "UFFBxPGspvugQuaBA2PkNuQtbohUeN1a3aHceBgviMchZnUWS46jtdKq5dfpFzsyiNcqbEncbcp4uHv4Mz5sXNW",
  "key28": "4YJF69VTz9iYVAn5v4judwofDkd3Lyq5EAjitZiy9RFMccA91gFRZVkxNQc1dGXkBMMV7AWw5nTy4DgrLUNUgFYc",
  "key29": "3vc7ksD1jBDb2KWFJWTVVLHGRuEpfZzYQwGEqGQBAuFJ1MQt2NYUHU417cd3Pfv9HnGy4VYCXzkqbTXPUBvZhWQb",
  "key30": "3DiL7EbT7ZLforp1haaiXzEgTdxkcrfc9XccNXUrJhVQoAHYzZJMz1YkZyGbP673FHXBT3eYr4fiSSn3tBRSYweK",
  "key31": "5MGeb7Ub9yiGUbsM7z36YzdNkkrnSFrkjcuY35cxx9gJgGSdyb5XEfzUaRBZTLVgp9XyghC96o7ANQ6vevyNfJYU",
  "key32": "2JJkxBsUkLWArVhRLwYNSEspdKYYefeauLw5KdmYyFjy4Ph2TA4DTgYdHqDypbHvJCyxX6DSvDhinJwoJb3Ydugh",
  "key33": "67GawYTuVg9SRrGXEt2eBWGQqcajQ8XUw1qC4fXx3d7xAZLM8uiuFEBbhoYMjuw9pCCJWqFVaJePN8QHgFNYwTRn",
  "key34": "4NMvguCDKxfHg4t9haJzdaRoSx574asowHwDWXWe5J4BWCH34RhQPXkQfNFogBfNm6gZmTBXLHdt9FNrR8z4ogwr",
  "key35": "4xToDQcdeqoSzqNzseBu5Yae2sToaJPo1vqQLRwmMBpjy13S1v3VJb2ZrkGCSzY8kZBP1dGZy7sJUPUbrW9jqEo",
  "key36": "2ybHaF6Yrt3LnP4C6XJTvnNsHMcV9yio8a9xsNvurbBtYszxGZqLapPuCCDmXrJEVQEanvJhLwvXgyCeGq1b2Qs2",
  "key37": "5UxXDbVXXgWb8L9kstTV4asVGGAY7JU2cLQENMTuYSeraHEcBnJxNdWX8kJ1ah8EMLaMR2GtS1ynsPgEHN8tVtRt",
  "key38": "4qULs8sC1dfgjsaoSaq69sdgZaKVaJ1JscNqnM6PY4KbnSQprXCM8J9yaNopnwb3FFQwBb7E7LNPRSzDdSMebbj",
  "key39": "47KUz7LfPL1hwDK2hP34cZPxUK5ofb894w3fVg5KHWjND5FBhpmceavvB1HhFW8sB7snz9DBW6aiX3AeTBSVJGj9",
  "key40": "27t9ZwYAhBxw2t7HVFDwjxeYpC1XyJj88rypsWZoRxVa44424jfgBTjjvRkXZ1ASi2NwUk1yyWUMmXjEnBzpNBPg",
  "key41": "giXwVFxGj7UisXdUQJbXrws3BPhxsNKecm8AETnUH5jhd6duV28Dmux8bUNwyUyHGEBZhKPbKUYQ4yP7rhy3gfq",
  "key42": "54w5HgWHzdeKv1UDYAZsg2NBaxdhc6MvrUcNFmdBh76nirrK1iVjqbW2dYpVNvW8zhFgHWkkk5pD7LqSFa1vezUJ",
  "key43": "5oEWTD31Cy9V9Ur4PCbccBYnr1LKzEpcQWtD6skjtmLREHSyed7VGKN8ojUUvD5vRckqWTAz3uPNCr57QJHb5Fwd",
  "key44": "5fDUEfcwuJXnQjKYCt3mVWnepT2Y11MRStE9toeV9SPbdccxeckxPEZs1dqY4rhjBFAWr4BGSbd19j9FExv4usL5",
  "key45": "5ZECWVggb9xZe6cXjwaRcyMq5idYyG78eG1YDpVVtG2RWQQXidFsWddbQ5PBMG6oTSQ3gx5NfFgttsN7suF6riTC",
  "key46": "9QjzzSwp5mUMVMauwQyBGBkiGUcBmbBpqqQu8MZ6s74N4vf5U5CPWrNqFPg1uTHu4sCuAEEgreJ4UegnnJhFv9P"
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
