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
    "4GDALtUM1MFtZZNLn9fegrp1PHAr2D3woHzpYHYn4WsHjGB3WMtsfRyWpvQMf8Vy9n5AE3gbmYms1QcVwuwUHhPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yhEHAecCnU1EwzbGxSBUDgN1tGifDTACoqBekwRMmX9PQtaGaPCuKo6yq9oR37BkDdxGjyh6mtdNmQcBAKXiBQN",
  "key1": "5ozMGGbFvVfcepCLbwB7MmZdTjeYVQDuU2ELo1sqsrjroUFfzoDgzUVrFyM9gCT2dB73Q2imBq9KPWuCEjHVNjvX",
  "key2": "4gEbmjFtQGmShuddNmAnwrZAfEUvV9PQDceTPt8gf8FcLxepm1ssJvVq1Xq2KjHPjWjxPNWA7C8xK4dQiEuZ5ahG",
  "key3": "5bbndvrpMGRNWoJENxJS5uRGb2evCE7JhxJhnSzsnSrGRpHC9hSs9Za7FN5reseWi8eBz4N6reqy9uJ2HP3HLGaG",
  "key4": "5HbMPzVqXyp9skYNG9BBGqYNfJHoC3eZH9g2RmFSY3N7FwM4uhPwn9Aw5h3tq8nQtYvCqB7rT89gaGYZidEEVskv",
  "key5": "AapPRhTp7m887CuX6DvPTaMCteJ6aU9JuDpGXhNUz69YQ7Am1jALRoTvGsnqHZXVs7qNoUHX3ZtAzbMrQqvtSmv",
  "key6": "4LAh23gEDecv29Wyi7TNCEpcmoRrfwFAbeduvS421ja6LBdKWs7BYFHKxcoaEhdRzDvNfbeDg9Jj4T4nH2Y383Gq",
  "key7": "3iYakhuJwVoLS6UjJcxaKLR2VvpHj4wNxFaqyv8Ezpbe9oTHz7HYUD8XbfinCTDWkC1APAmQ7b97enNyMTSrqHDx",
  "key8": "28Z3WFHTFXuFMRbBqJYV1tASoAo3gy4cTnayhzQ2K1bT2LA6zgbgPXF5Ad2R4aBKb6fzniKDiwkJntyyQHQSiU1M",
  "key9": "4ak4iEW415yy46a9iux4k24WSWr74SNPuriggrBEnbvpAvUuKeD2ogNodFjLiNzMVWMzWFnCKER5pHRC6oaBuR6J",
  "key10": "wQJzrjbTiKEAa7jUAZfSA2iB9mb1mUHLZJz4bYhomEPjwwpTDZ4mp1JXCJHDeEVnitRpYHXeVbDnuKbkShxpwtE",
  "key11": "4MscnHyvBCeLWG6THjmBFAMqdwDcpCxFZ4jNuUucv5gPZY34mhwbFATwQPgaHnnEF6Eo64fgvnwLp946MtEe2wsu",
  "key12": "344AjNn5K6VP33N49FxtiUa5nJYjvba9jApreUL8QHB6e1LF1XKc5D2fJhScAhk5P7b1tRuz7HisSmycGJBG8o9w",
  "key13": "2HGCtvCx8XTUMTakgNaK9otPP682vRYtgksEQYv9J7aWGWGpWZzzARkiBpEaQwKYHXSZESXJfdqUXAxmZDCgbLqv",
  "key14": "G2m1NsrnW3yRk9BrWaj7tJfmabUncYtW8A9mjWhEVoCknBrshhtjJr1F78CUTfZoktVLZFE2WDr7BWMbQ7RP9XU",
  "key15": "4QXziKDyzRSSdkAJFfPSu8GxUXiNCVMBMYqPvbK8PHkVcZtKnoDWX41ZDF2HrhJC6mmmUziTUUpmN5RxfAA4tVnx",
  "key16": "4hJv5E2pk99mU7p9YG7YcLBstMxxbruWbqZeqgDNgq4cfBcuBjXr7wWEXUuvyiAASNGgULxdpAxuC4HE18a48rav",
  "key17": "4cqdtZjUYmuVPEYKN52zQ3QZTsNuiUtBQyvZQTaYVZS6pvgRi2qSPVK9A96Q1cBqPrxV4nKBCsbn6wZhmrjCK77y",
  "key18": "3aRh1SdgSycs5LCMPHan5L8b8EKgyvxc72n3b1yuiMSDSUFq7vaoavxm3mFNNKp485MwvaCua5HBX4QgSbXxcTsE",
  "key19": "3763bn9Ex1fgiiYJ8o6aqB319KxLBHa6jR8uJsVsHe4UnRfk5y7Nm3Q1NwgybCTB7PXibqWn7Y2eSkYxepE1Jwzy",
  "key20": "3sCggPFj7aKFhBEjHVyb6Q6bFB7hkzM7QKzLHUYSRessWWiQZnQeEzSVrQg4n4peG7VC6STqMfQP5XRSfc8CboLq",
  "key21": "We1Ahf591fvfF6TUmt5ZHhyGv7KNetA86rvYyzHUYFN7mC7rKv1jobASogK6tThNbVgfVPMj92bjZuomNvvaewD",
  "key22": "3HFEW6otZU2Y1ng4sT6ixq21mtkbA5XavrcdTnJUL3hfuxDzTo9N7xhHrLPMcG1B1vpw6cRKFBE6GMfhADVGzLcU",
  "key23": "2h1Ca7bLCMqTecsixbheqzwXNLvkubEe3DPX24XMGPVtTj7VNaUviJe4shEKXu88d2rDHJBcXkVaPTEezMovdf1N",
  "key24": "4TTyWvuDJ2sP5JgEeXjah9aFjQEmjjnHvu8oyBhajozJQ9RZDAfiwq9TFP9bpMteD5eVwzuXndKzTexKohYpaeut",
  "key25": "26sMEDBCT5BekYU7JVpqFrdtCqrsMEE5rS9UuzT6mtbk5AY6cZ2xP6oS2Fxx16wrSY1tXQZebLCeg2ydiKBpEWoN",
  "key26": "xsVQAKGcW2FniJVw4r7tSKmhH5dCYXSuAHfVWRhx84YhVMS4e15w3bxTRJVKjmRMoZrNnmNWbzVJ2ZB7f9S1GE7",
  "key27": "3csejxdn3STyxTCanrCjB6RRcFzdZ1W5XzMD3JB4jS9yhyxZnCsx2LYMPs3NpE8QjrZ2B96CDyoCg7W4ALRpLDyi",
  "key28": "2U1epErxdKYSqzEa2dkuMSfzPvUGDviTvCfRFdFmhh9tyfkGxT2Nx6dUs4TardsSv2Xz2SE9DdarGqFuzFH8FgMd",
  "key29": "exjUpvjbsMJ71ezZpNjmzPUfJuu7yGvUnzWFe5JQZMjsLzCCGHckxuEQHzrgFFvgrBDZzmGH4RHc53W4h1EdEm3",
  "key30": "2LdPURZczHpHMZfSwtpQtowgLTcX7bxbaJca8mM1XuwRvt3znWUK22fr5XgUXHLQNC6x1BDX21E2xzURGYTR81S9",
  "key31": "4dKUvSDDejBpVyBLNnrtmeZ55GmsbXtV6sb4AtUM5fYuVQKvtbwvTHpjKqBK4EFdYfYE4bcjq1mdCxyDPZe5HAGK",
  "key32": "ZsDCWALemENMXdw1ohwf3uz2BpQ38GXPzywLDQgqgGzHb1eXr68FBqz5XVGsNZnxx8SRSLnJoXEhG8BQbQXSQaV",
  "key33": "o9nPUEkB9AF4UcqSqWCdzFRtk6uNvvaQ6i3DYveGtTVVf7tST9QXJsSkQqE4tKpgb8rLTchFdmj7ucc58AJg4Kn",
  "key34": "2txoLLxWJM2jFzWcjYjBfR1NtXfA3L3aPPdEWuCKfy1CcTcEZrpdURwn8CvsEWRHiznEANjHXbe4AVwQVKi5vNi7",
  "key35": "4KwiwPy8gVFC97FGsCR75CZeczLXRfsrfegLotWdvu2mDrchEJFeCgDmtrRfDWkUFdNnXQrvR5fxayi1A4gi1r4s",
  "key36": "eZtLwj12JVVQfPjGW5jhzA2Ae312BR7nt28iKnjqmfNhZrwNn754GqHVuD7PdZkfz6fEuSURsxTqAyBvoza6uqJ",
  "key37": "3cQTEh2iHSodAcuU2Q4vrd99KXhE63c2AF56UmSnZ4tHixYwMSR6vDXG9hvKuiKjfNnNpFHHzcFgEhapDUWGjrwg",
  "key38": "3L81Q9S456W4R42gtK2SramSSD5xpRkoqyLoa9B4F7h6iRTjLXFM5sD4HSC8HqKBYiNrfw6aeCpHPJRggk4jiVQM",
  "key39": "Fn1uSRg8HaVgnbvfY8UHudXt8mETHft22BMbMcL4H5mkozPzSfBfGvtqzwTYrjUz9aigWT7hhchVFyubjFQ8YbH",
  "key40": "41hnYdrxW2U1XDxmdKUL5gro3tp1RYy51rSXqW8h3jmsdCcCqXXryHrBAaaM3E5urHkCvHSzrUVFwsfLd17s1axT",
  "key41": "5vxdVdBRGgdJP5r1bHoJL61z1EuMLDTAUsqHhiSP9HsVMScikQNPCWLdbbh2v9wG64NMXbawGjkvTswuSY22diaN",
  "key42": "3ou83whwN897rTfrL1Tks8id4hh6syyMafRLJ8mypfAFbevnndUNiJjPEUs3tfgrvGQwTgwbzrZ2tVMuAfApLbYn",
  "key43": "3uEQ16zyqWt6tajGbZAibg1K33qxPiASnw7sjVZFELFeviMNtwwL1g9toweQzDGk9eAfT56c7XYr8QJdZ4ZNWb7D",
  "key44": "4pkuedfVNHcBzE9Y2j8p8UyK3yPqzJBGNQcr5BZm8fe8xB8TPUJJFzTRpHGDXQafAiwVzcv4VYEyKWXtDKkqoZRm",
  "key45": "3noHxskVeAWG2T95DbSnCkV8pTzCYo3Ah6E6LDomBDo5rQ8ADEDyfdySf6XbsmppsrHfSbULjZLVRwWsaSXvgeMJ"
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
