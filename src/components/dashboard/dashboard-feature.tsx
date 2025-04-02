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
    "3hZtmmiYSLtP45bNrZdRMMEBjMyUNJpxbbFKUXMfuemg9fwdJX6yPLNEdxYn3ejABo8HXZC44TVY3GhLn3Ue6r55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjYhaNn9QEu57nUgvcujEwgDU2fbAyhF5RQN2EykxPdUH4YBfcy8zukSSm19yxtAMCMNVvz9ZStnkUvzLqxwf3",
  "key1": "5e91dc8NT1uA43cVmVH7dCcTLYwMKSBeoBytpWKhE5n14VwF7T688N9Daxo6QpFGirR5rMWVZJiHxByNzTRPR5fa",
  "key2": "3J44Y9ur6sdmffYK9MEDgNL9LLE95As2NJTBznY3rvsX8NWw7Larp5yEadiyjtYZ3gWfV6iqvMgbTPaVjB7dp9fw",
  "key3": "3Epvhn1PzMECLCwHjvGQnanQeddCb4xnyH6KAqDESvC8arEU1eiVRPrmsdC2ehzUK9Z8D6u1K2goM2dkSFAiVBYp",
  "key4": "24YsRXBwcL64zpxKr84Hau2Viy4SpH4ESYbEGtFPEr78knTr4pmWspMijPchcVkFFSqR1yWHrAxf4L8uAFFXixsU",
  "key5": "2tW2zLWvV3WmwB48zSz1yefwRt16Rw5HTGSK9VcUuTmNNeWyW7ianUmyLMg7Eo4vvMGYrg9AYDHbGpJAdDAgMqWe",
  "key6": "4tWCaJ4ezRwCpMmjGxkQ3w5CFQrs1vkpKXGq7Zpzjfgjh57gqTRm5xH1LejZkrSkioVyJofMVw8FxjYCF2F8mdRs",
  "key7": "2zi3eoL2t3kmjFXDTdZASVnp9MGH4Vj66kQXX9N6uCWNPfnerWG9YVduHp7WQY8e245QxcgExWkAdgzgFmsoSpvJ",
  "key8": "4kTd2Cja8jz2U9DY2tPCBsKpykkqdbQdwuToEF491eick5KA6RwatroBQxpQS2jhAVBS45ZhBhR7MAqzfac8KPyB",
  "key9": "4kW3PFyvTkWtRMZdAjRT81wJS1aQarWnaSdpXwDNxJpw6Rdhw24PCG1fXpGnKTFzWhh9n2ctGTHx16Uf2Sckxkya",
  "key10": "2w5puhnrwXB4aZC5iwD6uQcPKtiUb2zeDb9EL6izDkFgnr15X1uCFtk23MC1ZC248aBT73deffTfqT6YJy5L2tta",
  "key11": "5QUBZ187GUnJYgA2qQmdPD4WP5hHN31GLHprENby7L8n6K8pUCwB34kVDw96fgsfP439sNqmTSQWXBxKzzTAt6MJ",
  "key12": "3TBYA7eaaPGsVsxTQzRJGhuGW8XWurQuA3NihXz4ZGmRPWiVBj3MXFybp3eBhjvM8MpdnqfFgV97p9D6XDpZouxj",
  "key13": "66Fr7LFpCRHhtcf1aePwK14d8jfKc7yQ7HyVnfcNuzC5LESKyToGdFnDHnroyjCNQH4ubbm8y1NocHPmAE6WwzSo",
  "key14": "7KCFQfQ5bLPW3FJZgTbptRjHbS7bXb76CnnF2fFmVu4AXp5Nskbm6xcSgfc85aGzoJ5D144z3bX1gb8bYDZtHM4",
  "key15": "3mBiGHftiX4NFcqrvfy1VMsKG7avnkzcH1RN9Z2ZbeTScMRdy4jDD4SnYE43Vo5fehB9LyghpzHizLMFZpmpCLdM",
  "key16": "2iwLYHhuAVYT7znVQqBq7fReadUgyxdzMCgDDdKbrW8svpzM3Jdmcx8k5cJFsD9jEVby1D7BxJLce3SBbeJg6K8B",
  "key17": "sJVqP2WypNztzEpoKQHJ7w1ZKjYiRYSfPVthFXWFQTi7yFR1CqDGZwopzXpb5UhNe5G1jhmZtm6mfiF9rgjtVKs",
  "key18": "5SrZNp5jRNFEQL6ALtGQ7BUzVPM4X6qcSjAYLpMi4KWtVx2raHRQjrGYWAztfYhLMLGcFTDjNgpsvjGtYmWHryvC",
  "key19": "4vm1VU4X7TQyEACn6zd5ZM2Fc1E5Px2GX1seo89nErsWjuQGyTUEq8zmGRpDf5yfkpH51FwNvM5rYHep2N7VswVi",
  "key20": "4eDn98HQ2GdYveGgnfeJhW9jmti2oxmsmSMUyV3YQTy5UMMkbwfDcGzQJx5R5KmRPqTdrhgUQWHXxNPrrLADLxBS",
  "key21": "3PqvKjEKkHqRN5Tnnw3v4XaQn3SyGqQeLKCp5ao3fRgGbL8TaQVvGBsSPKmh5qjH93smKCUBsBbVu7fD5FpKiAw3",
  "key22": "yM7vLWVvNJHT7MYcE2wH84vYfnefJ9v2Tfg5FtJQ6KEuduKuZKQBwqEpuR9BncuxoTarX2krRw8LFdSYuiWs2VQ",
  "key23": "awZqfmhfje4BYb8f9vgbnLv1MiDwikmWKepPMDYzuNWyxhvmHW8atNj8Vo5tRFpgnxn2zAQ1E1M253nxh27TVZK",
  "key24": "4X8mDebH2Z4hoaiZtbthciM2BybGCu47N123mfs5fs8AnrXv4PZDkkBCFqE8cpyWBzKxMv6SponhhdhcJRZvSV5r",
  "key25": "4PPRm3N3EsgwGgzbyTDAXkjA6viBc25cxtf5QqDNdBqF8UznDdBE8P3zBG5zKAmmBrgcuADK7kzb6BgmbEVVmW1e",
  "key26": "5KdbG92f1XkLwsFUnp36rz2BzXottPKh5oFiHnqrd1Xf7Wy2E9ZNJJDq6Dw4fHZc2VE1B5NQXW42dKDqRbXgdtC5",
  "key27": "5JzqPS9C6EawA82GTN2epTqt5tas7NVwgy3Woriet1sKCshxHLVn9tF7ktcFdQ4tS8Az5bezdjSN1bnAtandPF1c",
  "key28": "65etyQ1VXiBfYVVm6siNSzw2gJi9JTSaMKmVYED7baRJNBhnpzicDcucAV1Gmui83GvF3KZ1dHNuWYFc2AHBhKAZ",
  "key29": "YFto7jPYEEQ72byPTiy81h3MsAR759zshk3PPD8SKfHywpyRCeD9TZqMta4kQzmSWjtqu9zC39xmJePiFGnCdQJ",
  "key30": "464KGiSvbBosA3KF6H7ks3onARs2VMy2T6WefqSX49TV23epUfH9RKaMUXH1miY2qg94ocuj7wCTTSHKKFRL71Zi",
  "key31": "2KcSHNSToxy3WZDW7fcprMN1ZTpGwUhDy5qxEVuttZG2VxUDFFobAqWdG5iV9H5z55sBHotWDt84U9jKeQ7b2Uyr",
  "key32": "2i2yiea6PfHWc4oTar2Thw4WSJqhnxM3vWT1vBzypdn2pVBRm6C1uNB1uCWa4Ct1yWS4wo9pM8LBR9xPFkNN5G1G",
  "key33": "3Pq5ch8hDa9rvHJ42gmWQFdXU8rpaSbW7iDZsJXGdcEUohaPKTsf4pjG4SpSXbQoGdEAth118m821xBGEzBxPwD5",
  "key34": "3kTt5nA27N2cEGPGmkZqgcSJqbbqfef4SmX3w3PWZhzaD5YwyqfazRHfLF1mXgbZi1d7wTh6aT4p9peqsXH7CQo5",
  "key35": "3bRKHDfY1Adnj7FMrWkQtKUNj4hZExNH4wwg6PRGwtYE9qUQsjnVSoBuWYQWH1DUsxwVp4ybkwtidweoJtYEhkKp",
  "key36": "5TdUGprfkJGi56BiLVYE8F74vGmM1nbsBX61vitTuczsYNYnnogbm2BZGGT6Sid1Z6V6VBN1dhozhU22riabL6RF",
  "key37": "2CziNFB6ECs7XA1mWSUz7yPomG5StWPQbSCQ7uRsxmFBFLGTfxr4SqXKhPibGzAraRJf4ZdApDbZ5gjcAkBKP9Y",
  "key38": "5cDLmnBDYAinFJ1aCo6QZfWgbvNaTcsBXzEKqkSpuwp6GNvmgG2q7y5WKzdwmywL7opqbDFDBL7mXvJc14Ddb2ez",
  "key39": "2z2wTpHgUWXLMX5uHbBX2Yt7Szkiu58caCNFH4qnRJDWqU2eNWxtropUf38DUxeiQGCVcxzkzTRuCWkkcGuVgzEM",
  "key40": "5p5EGakaE5EDSigmY7jn5Reoi2ECXMD2BuvtR7QVCU14Q7KesbT8qmH68Jj8THRVK2r7GZcCurhWWnZikeSVseyJ"
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
