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
    "5Bvyirzs8pzCWXMwXUx2XxDWPZ3LjK9P1qPuZAGuZBGZeGQTsx22HEYUox3jmMMECV6NzEyVxZmNZB8xxXrbkFzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZM46UyCgCbHieY8gqAKwWu3cvKrdp4W3LoZQcwW9UoBmYTGrxkPgeWTXB9vQ6TuaCTYdr477N13jUrGDejc4UUD",
  "key1": "2oaXv4RHMns8k33i1WDrxLbeJTNqkFHQNExxRykPZnsoVzsKRzVpH2UoWMYNbYsvXjssEcotWgKYcEYxMo6bWyuT",
  "key2": "5n41t49zPjmACxmqmmSBvpU9AoLZyV9ZVrHerVxRjdHprGP9Y5UZYshtHoWXJdAom384t1BDj3NURFo2fTNB2YDd",
  "key3": "52bESWiMV5dbqaRYvMovhjE92UT5V1yZi1iwDveHWRCRVdbeFyNEPQAV6yHK2zKvrm6T3xsKcoJBj6EpTtuDF9bU",
  "key4": "26jzKLY7zf7LLKRjLh9i8n3KF9hqBN8Yay4XRBn96j1GUBfDps9pFvskeJH791mXvnTpfkRXiUGTJZAE964wrWmg",
  "key5": "v8yCdrU5FKYoH6oPfVF5cSoyuBZtWEsk8CRsLyQNFCbNiQKuEbpbhYsfwxJ8znzzKimywqzBe7xUpSxseh5NokK",
  "key6": "2tnQmJNw6fQytsrAkQwLQtFNHkKoDjiZQLfmH7vfTZMQW7TS56dMn3jsUK5VNu6zsbTZaVvGMzU27V8iwjVsqB7S",
  "key7": "4Rd54g54MP44PH8VeQPn9tkNRDBpT4QC8DTbA61TTwihoXEPawM9zc6GuVE8NnbCkev64ttRG3eRD4uc2nnQ5n3m",
  "key8": "4CWtEge1fDqpS7Z86jEYSbC8cr1BsV4n3ut1gEaqs5JQHd77HSjizXpwBf8cCRzWY8ocH4uZn4ZFb9zeunq81kRV",
  "key9": "3SNVZ6WpKHRhcPNtAq1TmFhGSrrcxpcWe8dRb5b9R6Hr6vGvLRBqS9FZcR5rq8URLfaZzGB47sKwpT9V7NMRPEer",
  "key10": "3kC4wy8ibmKuyW7HL3UNGcEYY3jt65Aop2JTv7r2AAUmhPkT829MU5mNLmJniRKgt84sA5cSvjjybhELPjKAptDg",
  "key11": "3unM7hNQLenvQqYFphCLYM72SHr1FDsfrt6CtDuL8J7sLySUEYtvom6FhXKDRtpdY6bWjz99JVYqQwTmpFQdKZ8F",
  "key12": "2UTQ8GQYvYGPK3eqKTuo14VmUguW3PgLUM6WioPke5LYikXvZMC3NrysDBb2zi1U2YmufGRPCLChCic5BPJ1ZvYV",
  "key13": "58w3J5XiGfZztV2sjgWzUHFJdRgjioGemqukeoq2EqWzgtG7XbV8ALt4LMCKTDrfUhQq1RE9nzSPP7od946MNcUb",
  "key14": "EuRcyp47BKA54DDS4eTwUzekaa12rPCisT6M84c1RGwNLhMhrWxFVTFr7exQducUnVVWwpaZykHNvxbWFTfSGZv",
  "key15": "m16dKjehxWn7NU8fibGJjiBBzxjM1fHSvp8pEJdzjY7eAozZsWPMaQCz8Fd4a1W9ztpFty4sy7ygLHzY58BsfuA",
  "key16": "7juv1rNQx94Tg96T51NoXujvCPwdAyEJWWvG5C8smSssKzM64fKAeNu5CYvGZTK3h6QyhiRnYmu9AdqKCJmgwYd",
  "key17": "2XT1y3YQuEUg6JF616LMctUpFozRsVM3QPuQC7nKsbK95Qev1JqLBHguNf8cdo5r1m1Z2CpzbDFfEA3AHMSRu9yV",
  "key18": "5vSuLhN1FF9rwCDr8Aj5demuEAxgY3eTFSgHGwRVj7LSNhb3Nm9uG8Hd3Zr98vEQKPpEaczVmTWTcJDh9s942kqD",
  "key19": "P7k8Bi9XRug47Q7dPJrvLKAkMzMadKrdZXtkNqKHjQZ7HXRPyiKwxXdPxiw9SqaotGZM6hio7BX8QKSUAvNARgC",
  "key20": "3u2urBJqWPvUeUTwTmPXBgtH6FhDxkHhTE87RyE8P1YVfa4ty6xXjoRmu9uE3PkbWJHc1fv37NwFzhiHuYKcFYLK",
  "key21": "5PmVjBUFwYD9phvhkVenXMTqjap1Hy9p7NCifugF1qHtYGbZNPCGxMQCmxdRsDWN51A39gTri7uqnDXTKJiKKNdJ",
  "key22": "3j5MU18VrBQbTJCqtB9SPUXGVXoQMCxBhRzAHfeivYdW9d7E1YYyEbEk9gfu5rAxxmkMzSGPApajy1QQmcjAS3XY",
  "key23": "533PWYYSMjW4knTvkHg6EG2ZBWE4fEAhGRanbyhJfjT5a3x3pY9WAf6LtTsbMoHn8WqQy4KfbYKtHefKDjzqsWSu",
  "key24": "35TR7s84HLqgvDd9XqwUD7r1F1E5rR41ChDtUwHerNh32bkeBL72p3VTAJwDhprLUxZ2VuhsZwFeNCXsuALg9E23",
  "key25": "4DxRP3CTdnUJMeQDVYFVWmVwquvU4sdT9PZwEn7cJNTU5oYw7o5j9PjVwVzDANgrVYr9PCJoDJSgzz9FJMv3Xjw4",
  "key26": "2TrFQW37HAp1BAFKVc58NM1DJSLk3xmfVttvtHQQtR83vBbxsx24ZvQud17JFWWMnZVhUc1bLEGHZ3DZpSVZ7idz",
  "key27": "59eCRkEgh89XHKhthD3gDNMue5ET8TVvxPAygTgt5fJThCwbGRSL3hmkE6wWQCDtYnDipPYRKAJHakhFx2ir7ekZ",
  "key28": "4bJirpp7pvcWvRx1gtxF9kVsLLD6zGzJ4GNAVKwJiUVtWb6vMrSLevzPBTNkpwi9dhJJitKpVvZJzU9KD3R8NPxm",
  "key29": "2RJRmcSg2WLZoWEffqbeiHRTNSioqgoesQYHyCV1YsB8Vr6VX8qpe9iq7E4pskg4DZQGEdWXH6eqGbRyDk95Kigi",
  "key30": "tngi34dAFGCj1RViu6GunfAi7UBe3bJcSBskxdaUGXLobSHAkRZZfMhM1aBXnSYd3oLK7F64QRaeovYUpFsvrEG",
  "key31": "2ar3ZXtqRtWEETDiKQL9L5qowpy3fvGJbgiBxCcp2ww7Whk53fzyAB7c7gztjWdGSa4gs5VjWh6kzri8yPmSrpAs",
  "key32": "4DKAGp14CRRAcbKwhF6StpNCJmBYNxutAfRCkWqRcnrjjLDw4maphZU5rLz6jjvFGRkmiBeD1Bob3eiMnbcMWspZ",
  "key33": "4vaD8AG4j8DYop4s3w7FSvcFjJDiRVgpmN1j7kGv4HKKEJCSHqxtgaj1kupeD5V2Td6paFFa7K4tdjGGPw6TaT7H",
  "key34": "67DwrYDfhp7dfpDrYMULyxCzjknCFHymq7FiJ8YRNQkgTJbiLkpXwcWq8NCJj4XcZn4mvzU9vWHMBjFL26XJnpKB",
  "key35": "5Zh9GRxKzNiiwBbXFYwoqzkLqwusJRGp4gEoBd4ZMmsGzii4djHcTopjHrPctwHjT4HgXW8yZW8KvebfP2wtjR3N",
  "key36": "5eBKpjiXAGbPzLczfGEJDHWMPSqoAEtCvTzqveffjqPvm4e86TERuMn7Tr5CBMbVzv3GK4S9NQP9YSgQzAz1cZqb",
  "key37": "5tcS3FtDYSRJo4dxZr9jkEhhE7LrkxDVWEc3Y16ZNMtTUVu6pBPCJWk3pdT25kYmuK2i4B5icqBoxCTpWohk6Wup",
  "key38": "2n4NnJVatdmrRQNj7ctti34i5Ndk6bJCZZK5qABhUXJzK1DVPCwg9BEntHLSEVgnr9nYbZXm9YfyMX8qZe1MtrbW",
  "key39": "5XMFJdcZLK5uN7TeA7hgaXS5DJZ3uMmnN4jGBzTyXMAoaQ5BSsWt7bama7swXdr6McXaAFT6Ruv3HrQGCamoYWXN",
  "key40": "3H9yUYnkjLnL6wh9f1vxmFwQreZmrqKCE8tmJuCVZomVaLZZ7RGipHHyEAECuJH53vRGyzU6ncdFYwZAkPcx33ru",
  "key41": "xxeie2UApgLcXdhMekdHDT2PDyQXh4zBjpppAGqtSyqN3uEGDcZQwGGJ1RiC7z7vVH5KkcVC5xeSYNfQXxJpGN3",
  "key42": "4hokeHE1zBmmG37ZKhWXAHGuLdYUEVjSoAFbfQfAX9g71SgfgdNhRyL375SsrwpXSGFeqDPm7CzEHL2omeDJDdxr",
  "key43": "4fL3rgrbffdorSYPDiVisBEmyFuvnAizaLGWw5S2jsyef3EeYRkJtpLD4uikVz3zXeYyfLikk6hq3QMP76X5bi6s",
  "key44": "21Nf4BPxvCaqjooXmuGRjz3Uh3b99VrkhMtgPvbzexWFTPBggEZ3gWy49c9LpkX3QRN9L6E4Dv4PitZZK32amNnM",
  "key45": "4BV7FUMTMBMERF1S246e4KAzCvwd6EtbQh8wfujMNusd5fDKBkVJ72QCuFHpmDmV3XHxMLc8omt3sGSHABx2h6FS",
  "key46": "2NbN8q8wiii2c3MXtJoDCNpMNmkiPbHsUAoFrdS7kDv7szvYHtmGnYvEVNqTcypcj7eCKewTBkwNP2DRFamCCobo"
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
