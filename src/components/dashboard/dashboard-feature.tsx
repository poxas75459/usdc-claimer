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
    "2BUEUYitbQxD5R2bQbXQKR43FmXJ8Xq1DynFoQcKgoUppthD8HM49Uk3vqM5PywmcWbsHfZ84PXc1UfdbcVWNBCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kS23DMrdr6Bk5x1aWCKdNcSK8xiDpbU2k7wx4jNmtpxG4r769fqk17gXWLRcTHdbgwp4msrhVLGj7AhJdkTuFdW",
  "key1": "4DWD49YSVBaGL5iMmJSVz6b98AeWQZY3HzFjwCRJQuyP15FjtJaGo9WkFSNgVxibLFkcbGjNZTSZDoWn7X3ASexV",
  "key2": "3BYVZp8DTEhAuq8B91EFJGAcx9c9VxjZeyVjNMHum7EFQZ9rKmeGPbVSPS4VxUCaPgzuEYEQSetGTDX7vkCzTAdF",
  "key3": "5C6z5neByYjLvR8XCMZHzaEyCzvKZqQQA13joNKRZxDj3KRkvTgW4eUtEGKM35SWorfQ8xe48qmX16zX5XHe6b6p",
  "key4": "4hKCN5JzaLqwQvuKXevEdrZ6wnvwxeWZCt3JabVhJ2tq27gJJMwjYU7pE9wNWUAMDr6WhC6ckXoSjTvkwuEWTtpj",
  "key5": "5u9tBW77CwJeiXXbGFijmfbKtJBYz8i4GgKNfCtiKvoNGqWXbbyirdYvydXLhKNGgcVvrJp1dPdnrRMmftaSLtfi",
  "key6": "2dLcWwiCYyWEEtMHtxUMz8nwfZ4kMgsM57xqamLkDJzpcH9CpytoKe2gFwiSYUbWZEr1cioGLuBeUarfNkkN8muT",
  "key7": "5tpEe7TBPBc6MkxgxcZboft25fxfu45cpMaHbPrYpihESBzoH5YBsnD3H6F458MQNusf2WfXpywCC2wZPTHmt1av",
  "key8": "2Mraa4nyqzb6y5nPDocPvEQq4TE42oUMKbJ9QQPqZszjySAK3sLaeVWXtQwkvVGLS9txmcyKXyj1WN366e9W2uKD",
  "key9": "2Xk83syD9UfXzTkbQ1sPXzS9Dk5938wSvYuEGoYnWzy5sTcbd29FzonA6rxxcbdxcxu4CgjEPwohV5VC9fTQtEGY",
  "key10": "4pwYRaD7Ha8uZfpyif3vKndSfCmYfQxx4QvhL1GbJCnBBgwaw4pRiv1YhfvYNiptYAm8VxKJTWdvrTJgWCB43SnX",
  "key11": "3THumyifqZz2qkiMWN9VNMrJw9ue6eV7MzJFTFVp6V3gJ9AEbNzLdmYqGZXKiaSAoyieNHihpb4XEiuZZyHVoHjQ",
  "key12": "5UrVWWU3B9DFgCPE3w33kFLZQXR4dEgHA2ZfujeeneGNSFzWxWcaKX8SDm4QkYP4mH3pagyEp9cRyQ3F4ugDVRjK",
  "key13": "7FEoycJLuieumBSLaB5rQ1fEjoLvjDVtrqw9bdMr1NYzXzsHx9KqPvtzeNpSZAEXgBExA3AbV8wHvucNWeH6UEe",
  "key14": "5qezrHuBd3icyjdTPx5rRXuFmk19j2JXU1pdsb4qXNVqMxESJ96Q6Zswzo6td8vC4Zgo8TkFcdCSUp9mahnCvJoN",
  "key15": "5uoVW3kVviZ8dvrQLUbFnLUTDWiDqyhCv7Lw4s4ziw5WNAsLdjgWQLg5aP5yVqRGmWnQy9gecVdN2CPfvMg1HPYQ",
  "key16": "2t7SNsXA4dYi4BLJomMbKTNvqShhpGpxPMm9Pyj4VBHBhbmQeQr4wgSHPXHBsMDbZN9uieKbQ54SXFX3GZDXbSw3",
  "key17": "V2sFU8nNdrxSiU6BnEfy1XZT7GR8CCqX9RHaZ91ijcodjXejyq7H2iiaSTKXFooJGK7KW6z7cmUfNsTqYN663qA",
  "key18": "4PwRr3CVqbQoe8jAj2snJh2TZBxqA9qbaARSvNcGTDwXWLBuSYbtxi1riX1iWCYynTKsM2hAyL1EaQxuopSMhBoC",
  "key19": "453HSYFgsYDYx9W1hgGj91KFUCGpKrLM4UHMXj3vbEWk8ZoaKMpGa19rMVdgVHYKCx1aQkzBSYpgJ3hrD3hbiWQN",
  "key20": "3RgrxUqFMAS5hxyESqkYu2XXvESN1DJqbLtfgs3sBNm7k7GVFiZyRAx41QCWn9oGFqicZBGaU2YczH71Ad4im8i7",
  "key21": "3VVeY5BkJNiU43YpMd826PBfKA6sX9rxC8tEvNWYBgtLu1evQw3Nn6PLnfXsvMUaehBaZ93CyQvQEWQRsaXceYLi",
  "key22": "3ZDBV21aiWxjiHm5UpnkTRAEPgWyhoZXFQeR6LaDkKrbNmCXUiv7F7WLgX7h5sXSiG2Whq4cTta4nVJ1ZCHSjEYV",
  "key23": "S6WwTXWW12NTFeTbVaqWhXBeeQr3FN9Puyf5niaLomkT6UNkHvNqxTv5w3mbvjUJ4riTsrsS3wBriMnWJD2APEz",
  "key24": "4r64JDsG4VjLwZ3ViXck9UqfH7Wyosepx52KzV2de9bQXrTtA6PBPKak4wwzvUJMeK6bfwPdHaqL37qmucg6U1GN",
  "key25": "46iF1sh1gUAdsajkFiUHBvvPDFoJbdNEhpX58mfttFzMuZEdBWSyfnfLcDeh8tCHEiM7TzyUU2nmme8zqKFAT8Vg",
  "key26": "56pP2wNgRZYsGx4JQwFwCouNE3RfTbLqD4PvSrLdRDrLEnwqURpU6ckFb6YHxs9rCuCK5KkPNwGAxn2YAZTZRftz",
  "key27": "4KBGvN7XZ8yJCxKQU3Sjg5qadrKU4rPPrroSAovKYeZmQFJuYej2DMih6biDBSjyuaL7wMAs62FtS3iAaWizfmuN",
  "key28": "2B7DPCA7X5XYmTJGoi3zbvbLokgXErb4Xr8khWusxUZUgAwqBHeUKGDkMGGV4JGSmon9EGGDmZErRpYT9D5uiYiE",
  "key29": "3vnZzPx4YUX4dHBrV82RvS3ZgJNZsSKux1htxT46siULEtMu49WL4sLMjy9Sga1UbSabkkHrfyPe5Uu27yxprCZk",
  "key30": "5puHMQ9DDu99CJDq61d4oFGgxeFbiLgzQqL4MoT2ZNUdtdzaJVzcPemyMnocPqeczCai9ucvCiCzGDjqQds4E1qY",
  "key31": "2u2nVZnUrxGR3ANEbFBFNuEzjM8zMewtkS3D6wE4BRPKs2U3UBEGmP7xznFby7nATZgtowFo2qbrw9X16yMm2z1Z",
  "key32": "WPTUbMYtQdoZJgemN8oFL1zKDE2q6QHPFiKhyjdbBmX7KtpRChfpjDZhipCia8Vx8TKwPLu1dTS3BQyREZuWuuU",
  "key33": "5FRKGvSXWkfbbgqcNjia2p8Mmu8tRuBmjCELL1arTR89FVbXvMP57E6PwNWYjETwwpcemXmvEjmhVYA9XHmbjJTT"
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
