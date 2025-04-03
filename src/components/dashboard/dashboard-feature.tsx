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
    "2J91kwoSHXMyzHVfie3riFQNvgktVDe9zxy9gDuQERCE5nnRbUFs1HyvbMJCgSZMtpykDWR1h9Ncv8DoGVEP8D99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uge4NMuYh5fe7FmPx5ApbxDjuNLAU9aG6jY8JTVZDmsg5JnS3gyqaHpgbMNXnnt7EuBpPaQMWPSo9fW9Cb44fo4",
  "key1": "4aqrJR2MYsnADAf8FmeG82ojgVJq1sThDCXJ8r8FapnfWBfbXTKJ5jq278yRGo6V5HHcmiFpVne16bBejo4VD8en",
  "key2": "29uufqSZjF4XrqxMJvfjbKHuo84cnxdcs2uysRwJzn9DmfhkbbEVYJdyF1My1LmP8qtjhACfUHthXKQQ5cRjYbo2",
  "key3": "4wMEvfFWrENBhQnquMGjdEHLo2ooa4Mr1xKAt9chtPi596GwqAsD2MqtUygUfDoTmVg2ZE1BinCz3HzGreTRmysC",
  "key4": "3q1KR3fWV5JhBhTmd9i2YM1Re8Sp4Uh3wCutd8J2FT7LxdWXvemaKRVFSWZvCE8r1FJB75Cx2QcDb4gFWDc45tTq",
  "key5": "32QNbWdBFrscbuTUDooE5fsrEttX35962xH77PH2Emi7K6cbHumCWYisQFpUFJN1GJ4S6nhZNxb3bYN5aE1FFFgL",
  "key6": "3p59ovLZgeLCvu2LK83Eq78HzepFpWzUoRKf9uKxemyF8eBvA28WrDyREoAaRXEks1ZPipLpwt7tR4i174M6sSLV",
  "key7": "3rg5KahmSyQoDKQJB5GibHdY7ak5i4vGm7pbRZoVrqbCCUC573oHnk5DBDnoAadkUkEE3FxPvxsxqrWTHtfD55TH",
  "key8": "5myAgns15Zf2z2vq9hCwzHJJpQxzxuU5YU39qEgiPd7bLeAeJ1uYiMUcFtAXzi7kjnjZp9kApH623htrFFYi5298",
  "key9": "2wqDJZuxNxjDUyQrESxrsmxkM2LqkWNErFfFfBJt8qrnNHWugF2ejDUibqZQB3TFE6eBWBC5H8KE1ii4nWwgVYv7",
  "key10": "5YYrCn4DXR7eRf8dLoFZovfcDKmHfaP7N5whmawyL7jkPx93FYFxP8DTtyNLLcvBUyk1F1j41Yq29zTcw7Fw7xsB",
  "key11": "GdiCXhz7njQxjVKRZojGvUGZ7FjivrzaRjJ5g1S2jWEAKTrZKq1Ysrnhy2W3HmfBPGynuSmmj5nu3r8gg3xTDiE",
  "key12": "3vNUmUUQ5JXt3ST5cs2YcABVAHkWBrDMYu7Mq73Gq92aHVUyPpvQ8YbPTQCaoC8UVdkK2ELt3PphaosLYBk6Dr89",
  "key13": "2KXzSUTpRHeqY6f9FTD5nvCAk2wyxqDhynPJ8JXiM9vd2uoJAGcthRiGxgqhXfCjg6RcoW4DAB1ScY8PYwC593ub",
  "key14": "28RuxFm6ruLhDEeKmCrY4ddHde5EDDh4hQE9PZA8X3qfyi1iduAGPJvScVVHPX8WoJuuAQCLqrytUkNauam5xtCH",
  "key15": "2NtkdH12JzqcxBEFc6kGBGMGJWCRygKafK5tDppgKjoLwHcDCwEBqQL6omt9xeyDEB14WH79bZKCLa8Xn7p873k3",
  "key16": "4DaHi6MucMWASZ81PpZkT7uXiAaA8DuBieweK7j1idKgLvgoRoAftUnBFEvUiHi6AbvzyPftkvnXAmn849QFcDW3",
  "key17": "5MNSYoYQVVWEYnVAeNb61eyEmBQa2nTYzBm7Pg7z7jxijMNEpAmRA9sPb7xC73ta9yfSiit2xQnL2WBm7tDM2gHN",
  "key18": "w2UHqzy7mZcTN82yXqhryrydJQyipq4Tthoh9Uv3x7cGNtD2YGwU6LBmsAEXnkBw9Q8HWDsJD89kvasU4h9X3vw",
  "key19": "2YtC4LAVhsVCyiVbxCxdtdSPtEBQqn78gRDbRbtxu4CTVRjDmzieWRXUWjXkHty3TsWZ4DuAzrxqxbA4E14SsCqc",
  "key20": "4yZCWN6P3AfdXDwHW9tCMJrzW4EQeeMBzU96UKDbujU7nyrxD3Lg7KG4PHW2rWQ8dBMLZEPrphXjyjEferk4jp7g",
  "key21": "4fVq1KQFXwuFWeT9ojyssfL2Z8oQUuxtSA4zDcyEJcrDZBA3UWrgD6Li4eivhEgTqNWCm697G1LSEqvdUoyQdhTU",
  "key22": "3VRaMJF71B5Bjh3LygHpQxDEyX6zAdFErug8Wv94xMTzEiBb13DiejLfz7p11WwMGzFvd5GUoe7LWo9eGDfS2775",
  "key23": "4dejRfUiF8F4evvcphEzYoPN3g4bMUjrDVHGtFLoVsqtQ6CgXodt1KuAN6qDUQepbcX863pUE5KqVUJ9aUqSA7HS",
  "key24": "4ihtZ4yNv8SdbEmUBweTsSQQHRMzyPFzUvqTbTtBriXrja3Mbd39vaiaZ4VfEPv3PzbJ13Q7GTymJZdBXdckW4Ce",
  "key25": "2LXophtVdGbxwcGD6Q7a8vvHV21RhP8NADbZ2trdjjc2rZ3nBiAVM4x4ASzkAkdpJYx3NRyoLE1YHb2az1qvDg3Y",
  "key26": "2wz1JeCfxSfwMFREEtVfiGcC6HPzYcXqfeG2X87bCPFZ117EjwM7vqKLUHbnARt2eb8tvAJkytCgFw71AhV2g8iC",
  "key27": "4BgkC8V7GxcrqVTkZBDF5JSwRzS2P734NQvqaQ85zcEYzEWKYULCX4ejzPTCCdkx5GRvgiebpDgWucEC8RMrM8T8",
  "key28": "5UGumBzfuGtHP8Fo14ETeixgeCZoAquTygQYvo7AgnUE6zjpMZ67QN2RvgMAEv8ePsYSdWxaYZyN6dRSAb9DP4wP",
  "key29": "4LCYUP9XQ3h5zv28FgbXXRw8z4rCbpUerVeuKEa2XXGRVMfCnLJKxbwkvS1Pa6qo76GzWUaahT1DfDTv9BLwXeUA",
  "key30": "4jCujGRo4aSQniyc7rcZLe3jsPHpvoB87KwJYf6Y1cE3F2RWqujqVHCsXSGovEAgUdNcyLxagTfwPrKwT7TR2b5q",
  "key31": "5d6ii5Wr6wP3CzQEBVvdhYgyiHQi3y4SeB2T1EooKaFQ5pV47iQCMT4m8T8NhDW8zDpC7GmsMmGYLJaFW3NfahTy",
  "key32": "5rLC1SszgHxKRbYRc5BFLR4sE8CsQw4gPFvE4fkowGUBitdS9oPQh8ryiERh4WBBhyfpJ3SeZtHVSctXmZ4fLhUF",
  "key33": "4GXNBzbCtrtUWQp8fTd9hhx39vGyeEBYBy4WNNU556ySBTkjcRfGNTKi68Fh5nisWcGK7jQKKcictmUrAQrAV1jC",
  "key34": "4eSzpkq1C7c4UJZMsRdnU1xBoYpCzWyt2K8bApqn39zhmE6fPEfiweydsTsGvgvi8QrCHniYofEavzXUGxVhFsJx",
  "key35": "RZsup71H7TwJBK5QdudA8frnC3mWxWRDiv7Jd2MDUwARg1PDkVL8an2sn2dNeBBZpHVRzDsb8xNfgVeQpVbiCm9",
  "key36": "2hgsYJ4wVuNuDGhFwaweXEK1MzoytuJpZ5cgs6bx6HeNREt7yDhtn7bg642eZpdMyCmep37UfmyRanku9Xvqkq49",
  "key37": "5gXEqBTFHGbtVdh4hzhf1QdCrLZrhLGsCzLmoxRw74NijGzg5xzGqvBNG7ejG7TvkmPYnD7wnYqXQ7XK7i8vn33K",
  "key38": "4V2aWiwfPcMjywW3VtZZ1JyzesTvkFo2WZ8ed5g7oM14w1rwVHvi6f9CmevHxD1PAr2ELMj9nZSQHpNaWC6wpRTc",
  "key39": "58ymVVT62bbQzF7dJqo2ARDbCeNPrVpjpscMAf5TGSeTfwd35vpU53gbqmpAKnxfLSfHpycAHsfJ7ACPjoYgr2c1",
  "key40": "3qt484DYfsqD43J3MZJykjnWKdtXPYAJ62995MmHfdWKKNYRheFxuK1V4KC9RYjALi5UfKYEuU32cbxgUYAEcA1t",
  "key41": "SUDABgwnMxLfeDQdFAaes8Hz5i5PvbL6f6iVmvmLWfrDADpeMxyFHkpCBdxCL87PAzS6osGuCbCU9VN7M6mURsf",
  "key42": "4Qq8CmZNBRc8ST3yVM2ncWyd2sUxHTwBhew8e6ZQzEmwfEzDNmp7Lmpw7mnYNcX4dUuWdnbzLDtsirrF6UUHxhzt",
  "key43": "5v8pkT27i7FiERQ2bFJftebUzf74QfpWBfofA3ypYP4WdUwzoWEAuj1GUR2dmXCcFcKJqy7BFcKxirBVXPppznXc"
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
