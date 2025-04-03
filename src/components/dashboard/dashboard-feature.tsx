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
    "eKmhFBdVk5ShBjPx8nh5M61pC2BmdMgCkeLj9kab3UmhLDvdKwFvkptiJj7Z59PXAuqENNrDk4wUFdSX4wEQ542"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqSTzvgvUyvmYA5qdEPg2eoxuDi8GuCZVW41tfwFdK3i5zCZH2wGjWhS5nVfqARRxYqzbNVRWQttFL6BJiDn7RE",
  "key1": "4o5QLSDSNtD5hCcS3ZvCH9ukQVh8eDYYKTuPF4KvajPNdbitTVvVqW51BBTKENCgB8cx2T12pJuabcCtat28XDXX",
  "key2": "AKnxnXE5ShJVvMjBjdtuCYfqE5hNEnGRXHMtNK4GkYcv21w8JqXLpHiCqDpYonWvw2gcNZAUP6P2D5MfrfzonBb",
  "key3": "5MCQYrryq1aa5BpFnjQTZzXMC2GMMyMCCiPXfCaxnxscaFByUqtqg9Dw2phk4jtdHgKNk7eH5vgyrHikrmdqsqu5",
  "key4": "3rBrpdw8ZUQXwTGy9vWGV4eybdm81fjwpZJcoJxdSPsYZsSML7hgo1AprFURykbMkggavF6uR9HqQNQR6erhH4te",
  "key5": "QDvZuJ627L92Y8fYhJaoGSzJsTz1JWnzAYyuD862HDzVtY9fizuXDMb5E1BGvp7FgQz4E5hu9sX1iztru51WV7H",
  "key6": "aQuviVsB37CzStbCb8ZrUF71FAriQyhm6zT45tTGy9yGHxjbJwWBa5fvvGLeTZiDMhhSJ8W6yEWeesMDs11XTjX",
  "key7": "21RfRGpkRiZ3usTfXn2jFzP69LPQHGoSs2CwcfXmMDfLnfsmY43XXxSUkFvuLZiLxAS9k8oc6M3FzuLkmj4moaz4",
  "key8": "2cH87mhUG6ATLf6fPXiiDt7h4dwS5kH2VQQmynZke3tQPQFqa35gbHzi7CeF2jzP3KtqcZmphkGgHRFhGC77i6SC",
  "key9": "SRaSWeHkV2eKiXcL5poVj2r67juuQ2wKjAgsvUBbZterT2ZmeJDRp3pJyFokZ6vKdteDdGRWvXJgQm9Y71EwRV3",
  "key10": "2pfskSsLqsav8KXeDnwhWAFPf6N46j5k2PeVEFPGzRjNpKa1Ap1GiFbTNv3c7JJKRtESRqvm5tb8AdXgePkiqKeK",
  "key11": "YZ9VdwZtWRxhq1v5KRonYTRR6Dod9ZD4Gh4EoHfnxX1dUnvdQh5qhmSLmv2kFQnsgDiQVKUxge1WUDeSZMqboz1",
  "key12": "2hqrbnVmkhqNMYFi2eW6pMkfuGGUXLArdFwAWFBTv77CAmKbzXiBKxsA9s5X9GMJDpizpfYxzm5FtJU84y6nRXvQ",
  "key13": "5xqpuhvZhE1BaFFs1T44JPMdjJVzi9mf8pYrsrAMd8Fb68vfa5Sf1HzLuKUgJszJUzXaWJa1LgavtBSL5RofzkV9",
  "key14": "2oNZ2yqhuvB6TATH3YrbriqxEo4KsYM5BUD9MxNS4UmpZCV4vrV12SYp7C9ZCjKZZF1d72Perh3kPZJdEia8jWcg",
  "key15": "35RzscskpnEpNtTPndZeWhakxzi8wirmR3VeYeUVafzHHsrdKEUSnHswBq2hq2KtTDgEcMZtx9giPkrdn9CXwKRu",
  "key16": "gYYn1L712pJzwLJDMzLc4HbXHNE8H9g3guo8ZMxGoi1xn85gCoyeiFXA22ftTx6k9fRtfz7dvdkTpg2pR1q7y4Z",
  "key17": "2WayK9sUQWvTHmH4oqgPwFwrXcyUoUKKPADyGyFD2CkdCcMvY7jeJ8gizm7JQTF912Sc32YFsQe3vudnVXYiE1K",
  "key18": "2W8e59Q76rZJ2r8HeDr3UTmd6cZbrd7NnXjuPNZ9EFCtZCc1AUzKFkg6RzxePDdjWYXGNSER9vqERfUpKJUBHPbJ",
  "key19": "5mEk7jzd9uHXeZerNMBo4Fp7CWYGASF8mhmc1Ps4cPy2im1oesPGiMWmuxQaBkXd6mPNakyzuGqSoF25BnRPcFSw",
  "key20": "4GyUjedbrnNTwmpPJ7tKAaR9Y7syUfqkj7TVnZ1sniG3gyn2N1EKkRWjhjsy5Dhf5824prn7FGzU3kfXPeJDXNyw",
  "key21": "2SmR8oJ739RyWDBAkLS6bCg9RAATNjTzUy9r8hdDJbtcb9DiCuFh7UKhzkKmMAHqRZn8dHmaNrw7ZAP9GmzrjuM",
  "key22": "CqNDyse92UPCHCDh4cvXCuLZ5ugJMprX6t7jgB2Vm7czaawYCQJ4NMhcQvwg67cuzuBhbNi5yAzULCniPVdANm7",
  "key23": "2gUTqrXoVLd4dQ6hfKPxSH5sBKjCKpHkpPd5GHXFb6ti6BW835RcfRW9SabtMQEftfbFK1YZcxCT6kXcoafDbjuN",
  "key24": "3tH4NC9MQyG32qAHseJkZ87BL9mU47oGegq1fqQ43qYrcNcrLofR3MHtJuCuhibb4qvpvxqGaqmoXNNV5jEFyCVg",
  "key25": "5e5tQgkHaDsHwECCdmd26dBnDvJx2fK47fsEMQjJJzmbVRE7vxGPzzeCq3QCyhCRTCyD1AGJYPrqTMxSVLbZ1mFX",
  "key26": "zrNcECXtgtX4GrDLNSjoeU5Thq2fqz4piwm2R5af3JVMYLszkvP6fUVzjKUgBxcJ7UUhEKu3WSnqQeVkoX4VCDP",
  "key27": "WkBmRfx4bEN2YsLHvmAnN6vG4eHBUSLp6AYaEngb5JmukqSu1Sve5Hrmd3y7hTWTjcTp8RXzXuyZ9YGsV35RQpo",
  "key28": "3VmaKmZkLdPPyWed24YgbsEoEWqQjkAah8ApGZLwXaq4Xhz9p7hJxUmWGhaHag55FGjCjxgUFksf6u56UtjmF2Sm",
  "key29": "3ekHTQEtM7YHLpQXVCRrFdfCvYsajdQERqBqvcBCQ1n2V33KarhhgQM9KvZx8BSpN6EEAsAgU7zfMRjBd9oCAYf1",
  "key30": "3UaFGfeJNtdyNFoh3F773b6574pEYWqGVtzYkLupFXUdk9hCif8HfzJk2WAN7iuwZ7x8esyQwHoNhBwti3HDWcs9",
  "key31": "3RTaQnQ2gxCsjXqZaa8fbj56qunJUWcHigh4gjMMXK7UUw6qYqbtBz41tZLBVu9PY1cp8SJqNstdq9wmeWSKQkKH",
  "key32": "2HxjLDhesYVn4HqBMczjtjhzkHP88rPBqvCvj19kJnGS7F8e9i6gbFxzyeAErGCa5nUnUQqYPdU7iJG82KBPDFSP",
  "key33": "jSVgrQBbN3q3FzhSTekYXLtHi4RfmxvyUEGKxjcPoCLb3DpTcUrBgf1AuvuCSysk2qQwxhQuP7ygACs1WDAerDe",
  "key34": "47aoQ55Fa7DXXHWh1ErP3yhtQKoDkwoWYCQKbFacWzUDhigxER6sctTTKE8PkpnCQ1Vbhvz4HX26RLZrDfnd9wLF",
  "key35": "5Beke51xyxtTK8Mbmm64Fgm6E4ExFv9HbHUrcv7h3z3gjB5CTZwCkavVBfhWUpFp7xztBtUBPkkrjukgmvnDqHnV",
  "key36": "4KtKEJz7sXB4qSCkJqUyQWMfr97uAf95pfqNW96tJQk8HEJyPFrjvdCqzW9PbakNJ1LEKu77JxA5GdEh2nr7qP8s",
  "key37": "3eX3nEam3Htjv4yC5GEEdSzpTKNiXU3L5FYTP3HGV9WfroENhabh7a4RowD59drthsjZHo1uLsWW3JSBTgjEZgkd",
  "key38": "66xmGo7XdnYcxcBFVSAwmNuYve6FPF25bFYMApuSJS24wFT836oXnnvbyVhHyyYX4EwVqW6rYcWzDrPtrHQ3xsuY",
  "key39": "3NDQ87j8Kp66q9eSxEp1tEs3simzKzL7StRt3nSyVPk39Lk9N6mr16rzap11kb983QigJ2GsKVfZCbjaLnsvSbnK",
  "key40": "2wXzoMKPgX5YWgTvj4kKtrdwp1LauPWDZAhJU2o1z97s57vsUSn2a9FpSo2AtVJVNxiZNuHXwfqvzuGA8KeWaeHr",
  "key41": "4taEMmbkoNQJt1sDGb9XqcfNSZWAnCuUrJ27ivm5UR4sVbGSPUVBgx3iqsbYsRjb8MLE54wk3AqLHfjTse21itPY",
  "key42": "5t43Dph5hCD6vtr3V5V16LNRoDfh9jdzZqDw5UmFiAT4Bk5UQtaor76rgzPLaoMWM3YgZ4ges2u8nd3oMzk35QdR",
  "key43": "JW7mNpsjFFcJWWceHxQedJHNFD2McpY6U2k8Fwz9vPPo9Hy6SsYb9x5GrcvSPZtPurp7HwfuTv6kn8NFr82w2kN",
  "key44": "31kRDK6frFTsjWU2CWAvdMf7BEps25qH9PBmWgcFQcJWjWpeSRTed3K117C8CXoSxoFDwtmFnHhaqn7w3LAi4ipj",
  "key45": "5S2ToVt6bWSsLLaL6aK4XSMWRdSesaDyUAD5b15i1fN5T2DBoj7cgPdDWTJeuWm2YQqoVYHrAxaqdThmTqQCXYoZ",
  "key46": "5A2SCeTzynaRybmk6zFV9yx7namuWWVdz3SrQSVoqZUiGJ8WHXEZMYWCrgie3RuMCKV1LD7S9kJA15W7BpuMndPq",
  "key47": "2Q96pecsvGgUreA8WLCxYcdV4c2BQcfZdQt5baPtw7maz9Sk9rB4rATek5SukPsWyRB2C563d4xiwFxxERH98MxZ"
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
