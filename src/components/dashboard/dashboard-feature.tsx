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
    "xz5EXVTh7PN3BsfXZVkhT2k427U5dxqWZo9VYur6iCdRftVCqrjmvfivBtyENSCShAnrS5ReqqCi44wJd8Mqnvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47FW2HQ9kZLivNbXmdo4hsofxitA9J4DBBk8uS6Fwj38ZouCua4agNLHEp7YyBND3hWaP1hmGwEXidP2xhBsuA9",
  "key1": "fcyMTdtZpDf1Hap89eiA6NQmaEiWrnUQwNdksMfVwkfh1yHodXp6ekcYhrHAToJjsAm7Tm7QfpUH3FB1Ja6wpuu",
  "key2": "4qawRESjriCs5PacNDXjvzJjbpPGnW1vumx5EZgdRBGTQhffoKyck1a8J7vq3KJyxqmvz7TCsJKrZao5pWcdeYFh",
  "key3": "4PSg7NtbaqtWFBiBb38vHiPQLG4W46fMMhzdPoJ9QkXAYjWkDY28Q48FGfhi8GdiE6ogG8TrsEfMgtzk1NzSpv7j",
  "key4": "5raF9mfDEn4bNTyg3HpkaeeQfjCqv3te8s81eZmEGsxjLw1tChayYUKkKLPbMwKCYPGhVHppc7AUQkWqzCfMukz6",
  "key5": "5T9YrQhry4wgkWfAZ5dRWSJavF1hhDrvGRiN1MzqweiP4RLnGqqoF86bbkgmT16RCkPD4gLf58tpfbHibBfpWLNq",
  "key6": "ipAUoq4gCqFdVtArovcmD1udoa8ieNCN8NwjJjDnTa5nhgTy4akTVL5NVzwnbURxDUMc5pVwp7GSnRqzCTsF3ub",
  "key7": "v6q12g19GV2dbBp7MTfRtfeiT5DyBrh3vBcGKNpSbyWFaTSDqQCB8EqAadKa3KCyFuNzfK1LGDmgjHpDSCSQvz2",
  "key8": "4YZ8pdNSQ2RsAQ44LjtkBtXFWNxFeptnQFMSdhCe88CYBzRX2fRbtQjDiL4GWaz5o23veSgKc8ywNLRAPkbjLJuh",
  "key9": "5UGpZZX5YUrNoWppNygFzJp5fN5rerAmPxkikBK4VfCgpYxhVSwG6Z5woqLQuoa7MRQ4jqwYhGh6wwnGwUPQ75J6",
  "key10": "4aSHQhaJQwmUeN9ebSVsc8TZe2rLtTENzchwTk7y6grky2P9tS1rnKKiwpgYfEYyKehrC5y4Wxum8xffBApHTccn",
  "key11": "3URQaXb5pngQJddPMdzeN6waQ8PTRGoPL93RWkYFdvq2XebVTG9PytTcFikt87aFoV4WnSic5cc8fby3CDfK4Rgy",
  "key12": "3LEpRKjbjvZd6iTsZX5LvYuvPPEYifSYYWgGL7SdMjHTzWPra1TbYzWKnVq4GiMoqVfMumXT6cM5VSCEntw5vGqD",
  "key13": "5d4EHi7zKtQZ753FAp2iPuxtoszaAbXt3DsW28B1wQn8mMwXxUgFo3wC3knJGcZfKoiL97VE8F7N8RjMAvZeWvk1",
  "key14": "TNp6D43H9Qqd5SYYijanS9VNVK6aViqJtTtpBXuhqd741WzdE3TTmuURpebxHZyuuNdXR5ZiJkPLBXczUGqrqt9",
  "key15": "5wjB873BnVrg7AD7wdWViUyJSRJmvnikha1uVFwMVavFwsVsiJfG78mqPTZ8igGzLbncyDXJVuTYfUG82ZEpXuZV",
  "key16": "46vLSq2XZdUe6MJphwZ2eDRbCXQdm1tKj9q3RQqfPoE9YvDNb93wuepyK4HGC3KLCzQ23SX9aG7pFq3yJM5TqEbw",
  "key17": "51bzmtGTxWyQ6aFYwaRg5RQVmFe83qz6RnYB83yooFDBTsL1XpvTPrgnPRn2tgE8jDvQAd9gnn1759b2MTm5r6ng",
  "key18": "4rQz13XjQshHj57aghpFHmixsD9vL2mFoU8VE8E6dJuVkrVGTa5hKwfZ5GfgZvfXVKBiUG7BpyGokAHwyyeCPsd4",
  "key19": "5tMepkdaciq3ncVYoVCSEGDEDikpbVVzQbiLjjpQpnjsnwks6UvVeTPoVR4wtrgznCAcS77ZHMpv99KZXJ2W1VZn",
  "key20": "2EixirU98sGWysvrupcNXDK29exDNxSrQ7BdFkMAN1mC2pLPzRnWv3HVZNfqpQYJCfRD2VR8o4kgDUVFmYmAKj94",
  "key21": "Trw7aAeANEVzNjkq84TSzoeGQFv2J2Ea3HsdHvbVv5Sn8FoavZ3TmkFnYnpQ9fuBL1CPFUonYZiEKoQ6houcHTW",
  "key22": "4moqjuNyqjWDiVc2PmBaxp39X72GYV4U45bodryZ4BRjxMYYnpzoW2G1CvcpdXgGdGxTNXBL39hAfDAfWnS5R1i4",
  "key23": "4mQFYUzCatGwvMf24iMwb8Zh2gQfpWLAH1xif2iGoeZXvLxWddRACk5w2bgUX1Y7mQn4aitsCUeqdbW37TVRwgJp",
  "key24": "5c1nAbg9KqPeuRByt9fBjGk5X7TjP94wBTECV6VJsV1A5U1eZ5knh9d9TzLSsWsGhNvYRz7BeLL5FTE7LgS1okh2",
  "key25": "3zDaPNf9rxW7TsFLJhKVbMmWaLaDPZ6ZFAg6K4ui8w8rGBV9iDj7mbbgqavdb9PUGorGc9HuXfLPJ5bVcejePoZ7",
  "key26": "65fQKWk27tqCKsPUzVo8jK2sMudJifpZJUG33BHcRBWn1ShxYSWdKLSqzPRvzAZzagxjKz8rGAcw9K1aVfAGQFVw",
  "key27": "Wi1BbtGtLt39SPtau2oFWi6N69WhdAfLpSzjj6B2CfATgw3gADt7r7uS6C2TGrkVCTs86gDF6cGFYHEA3GdhCHM",
  "key28": "3E91vhhAJw22FLyCk2fUmeumpWN2PcvJupinM6E8EogF6NaqmuJw6cJP13Yhr63RX5L8W22h7xXepigkDohqS3W8",
  "key29": "sacmXu4DJ2KoeripNGqcKR1rwxnhpyyc6GHXUtgoG49mW4dUS4gzEhknztjgrJHjcyJ8R4gLhzdmKuQy1ABRLKN",
  "key30": "4wWiRWDtyKbPAwCKPtd5LJiHQXH36k2rywUtrZoSYUfFJy1XLcH5ET8BS6ehkahDFWPfYm4ACCjqSg6JASYwcG4f",
  "key31": "4F29NbSwyxCdd7WAwaVLW68SaTDPtpkr4HWXRmXQfezgfGi4Ydh9QnMCXQjdMcQZxL15qPsqPKmMNGZN31PUwbjT",
  "key32": "3vsyJgw8YNJ59ynUoaJuQ8BAjy58uFps4i53Vigj7xy3duzjpxVPFqRwnVPMaJLYg5YxftHhkNNAg9BMfGRk2CAa",
  "key33": "2q9KZb9zSir8fEgWwww2CuqtHb5cVmAtFL43uoV2NUDYCehATvdoWiV8CgMC74ZWGgPJVQPDNrr2kLbbrdrZksHb",
  "key34": "4QsEF6h2qejzCy2YKTGTmPmA32Cn9vAxWev11Pxv5KzTSGyB471UDFFCWbEvkT4KF48u6GrGBP8qPDrU7znJmsTK",
  "key35": "3eiZA5cKMdNqdAh1Rdw4FbckN6w1uRf8Fn8X5dmw2UHLEfNBZtB8XEiv7FrXbWgAe71m827DcCHSbZjuv1hqwMH4",
  "key36": "5R8GdXdmt4ev8ThxAgPA6x3YpDUJb6c2SGUJrWyi5M3TUNBoY5kT6HDoiwssJHHAgpK5YL84QdYumQacrZtk9rxQ",
  "key37": "3ZJMFHoWk14oTqqoHJP9G8G6GwTW4UEcsyJAi6vfA9tP5z5NpDQ4t56F8gUdwVR5xXbVyyKxb3dKUBa5jfwTa9qe",
  "key38": "5fqdci9Q3XRbd82ZUtEeMs46u7xKoh2Z5157zJ7cc6wgc9gC7iCdNuMELrsK5EjMk7TcZEgFLEZiafsGxYoyrQBR",
  "key39": "2GtQMBkPhRpJCz2Hn4znJ4pzTMPW7fmKsJ5qjhP9jss9S9RbWLAGzDAzoLxsXsHYhSVX8pqzTmK82NPoG7jopstW"
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
