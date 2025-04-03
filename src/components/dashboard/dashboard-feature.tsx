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
    "21nZJ6tsTMCr6gvjf1VQBCsGiabCejPV96KxhsKjpWzusucmuCjvLmAPy1PWme7DYeUAJj43BKn5njM7D6y95Nve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8utXRDVyFdWcgp4XFYyQUHaPqWsnviGHR8ZRYn7BiASiUuXhivK9GrJJ5ZXr9CHgWVL3xacBKySP5xSjEHnDP2",
  "key1": "4Vm5MjN4HRyddPBRmfyc5qsgzAW39MG5ojJTjoPJAqjSS178de85vkzXep1w2nz8ssGgUC5Nko3LzMaAmF1GZNU6",
  "key2": "EynJfweNbzcdJjMc8T6mwqRXHjzxT82fk7NdSS3satJpVkphcQpTWxCtzkAjfhHGHfXb4DCe32GpN848uc4pWuC",
  "key3": "5ownmBMwecf3T2qtpR8gws31MxPDP56uJsRNVX3kSXjTampXtJXgn5E61XJEJsTxMmnASAbrtK89mCdEYzsT4sFc",
  "key4": "2REBTNW4H9HMTcErUwgiDe1thgbbXq4XfJimTei7h8dk6WnimE6jD1B7xsJm3KvrurZj7rhgFwQUSTj3YHnPqxE9",
  "key5": "57iQjVCfMAdgkRrAYvBoU7BWbTd3LfWN3UfNRidbus7z892YzU7xR69Qe4Aqy1VkcoMdD2amiu2ByXrtygy8BPg1",
  "key6": "5A4c7tkUC94ANKwS7vvLi6uDbUsc582cxeopDGcuGLetRsRizu4UNeSXdKhqupXmKyMqPkwc8oLeJmQ4KywKGfVo",
  "key7": "27xkAs67o8o1GNpc7P1Th88YVYfAkVuyVYsH6L1mhNVpXLKoHgwxYwS1RRf9oCCUWcX7p1aYxCohfNPAWB5DECn7",
  "key8": "4oUuroMUDNjbMKqPMC2PAzKqnwfNDKrotmKZ98a1NnonydPMfs1CKyfF7ttL6uJp3jX5MRBGBAh3jeWxEaHwCdio",
  "key9": "4w5KbSqxtLGjqPuzB8qXYy88mdH4zchE6hvuC31ui136URikP2H3vYeH7oDGez9LUGznRNoDvG7i2abBDkTJudt",
  "key10": "378H555yaqZy9494VEpCzGb8g99rJgs2LuzGx6Z7Qof2WQF8DqgjjeczS3Vdv6naSv9w4Cngopd8jD6Uz9nrpBuN",
  "key11": "5K5xz9ZhNwVqzMwgznJtqwgEfuLHYwexC3rVXbdNnfgm4MBa2BqcZN6Jwqw5XainDDSJZi4KSwJA74Qw13MY1t61",
  "key12": "CnZxBZ5hmXeMhr8Bc4nwPgRF4NPmwvdmc14kxXg2Zb9DUcNXxZsPXoiQz2dL2gkmenT4CRr5hgmTx4avN83JJAV",
  "key13": "34R8boxDM4sGZohSNUdCZSo7bue2i6Kk9fao5FZb4LG5t5XKak6jfeeNA6JzQd7JUSvNwe7XVZTAmSNqiHAzWTYA",
  "key14": "2rBskinEdAmabqiHmGGd5HF8qGFVwCTimvfvk91utE45vSkhpNXDoFCmTEspj11TdPqim7bL9p9LCHRsZ7ckSNxW",
  "key15": "2MqqWMRhWoLpA6xCnJm6eLdJHPXcnJD9MRiicHDDiPzzPDbZbMWqJPVzfrcKKc1QbTUS6uKCNYuu4ngLFXLfxxjw",
  "key16": "52ZhNixYdEainDFtfjTGRA8iApwKgCvre3KDrRqiwii4mdUpYepKbHPbn45EfijjXxphH5h7DykwofGKhHUV4Fp1",
  "key17": "5iKwpqy7yusBhJvqeAt4Z9UbWYtwCRddQr7ygDXxFWC74FNXs1WpSebJzp4unxCzEBoxpxxjbfYbFGy1CFrCtiUh",
  "key18": "4F6d6HpT4uMAdLhqwVe68gdP72U1RF9KNdYWhckXLpULoU9tpSaW85xJC7urADnfCZWU9CgiZpsKrg1N26xPzD8Z",
  "key19": "4YNhiSfjUsvYLfUtgQiQP8dyQ7CGFP4AEWiUNBEfUcoZAJaEnEWRHLQa9mc7BzC3yywrbZmhE7fgJcz6sqDe3FAD",
  "key20": "4Tb28MPN1KvcVzLL8iAQv4upwoUhnN9VjXoFJLgpR7tSgoWBVX4HQKAWyGYH9GzjqAZNGAoxCzZCbG1siZ65cBtU",
  "key21": "5JcehioCrGBaMUq6vYF223m6QrS7Bkntq1Va6fPQqBKtSYiFMtU4bYB1E8mUPSB85nZbebcnNriBSK7GbSD3rKR6",
  "key22": "6KKtzY3E9SD6md6bm94vDGQzf1ahokYj2yWfERJHBYhWGXen4nVJX2Kx8GeRFacc28Ub21qRtXjFMZZsWvtHyJW",
  "key23": "4wzcMKegJodHwedXUmJXLj6hAmNouBRrvzB6h6YsPaf6Wr2Lg1HyvrTqrfSrJj1oaPW6cVi9M4tZwgC6hV6QntrW",
  "key24": "4LyCgCrd72ZBtGoatV9Ne7nVnp76nxXdDTrS2rbbX1xKcr7uHVh8zXySYRRpvit9wdqqjvA4ThhW8UJswyUeyUCA",
  "key25": "5PkWDdJwuDiKP5BiqEV427Bjrx7wxL7MJtMS4VkkzUzMjEnZE7ch4ycWxScymCyXZfRUbZZaiL6a4otoXgPJ22ee",
  "key26": "5QtsUcduvDPK7jQs5vkue2k5RJZxXUJ8hPJYXArHBr7yvwpw19qC7Tqi8uGrMFvUkmSq58ceqPX8j5dwXhrcrojb",
  "key27": "5WFnbw3Ug1ax2Bg3qQJXNYWw7HFktniohX6JoGBZS5HyJiSgK3QExFJC3DgZSJxtb2aXWeBDKitv69ov5JAxRH8W",
  "key28": "3f4fessBAxSJdAQ675uBCYcQBi4o6z4Pt5Rby4JFT3FRPRWFum1SEszdBfVp5cGXurT3ydxLTYY1HJv1G4444b3K",
  "key29": "3ZxNiAwwzEQGahGeyxvWBcLa2fTKFng43WD2S7V3brYZuHbfNFpytCzAHbg6BtyAkxspGFTd6Dz4GC2e6HimTi7f",
  "key30": "5GfnTfPm6wes9hryRNft82QSWu2BNe5EDJzmcGFEcQSckBreX11FkdLQmowadfdYEid5aqF1YtEeZT2xSxftRM7y"
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
