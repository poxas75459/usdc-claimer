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
    "43nhar4LTpiPwa17Ebvbm9X7m7tjU5YW9k775cVngsJcbBUKe98oNWhWGjZ9wDUjA1KsxZdVttnAfRFF3SCeEdLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aaQd9iPE14gG87YqujMXfp71bwbAPsKBY8Qh3XDAofdvcPbfLXZHHCtFsS9D5gp3YdrecYogZav76HoeZPFV3nC",
  "key1": "38zkpMZe2Thc6AU4Nssa7gEcthfK3atVcJoZM56e5LZk5KXZVsQdH5vx8btP9FuyPqWwHmzSJdKczDBTHMFMnhUn",
  "key2": "3rVneQru4tU6BDGruimeML6STakiLeo2rMNuUEzsGuTDZrcEWuJ5CMD6fDsaXNgVpsEeMTVfcDf5wLEd4y1B51FG",
  "key3": "4A6dZrs7fCW9RNMbxyKQeDSC1yeNR2vb5moxAZgv2tDhpQCGN6ELNgSsSeT1MuwLqY3w3X1F6y5RGd6Hg1vej5tu",
  "key4": "4QHfFoJ5WaY1yxnFEdNJVPd4Hpty9rCvD2VS1F3xtym1oYJWK4S5oNLxw6vxeqMkdmkbShjtvH2VbY963fy6LuKN",
  "key5": "28zwn8nTJWPYqEsTjMbA9TnB7Vmi2Bk5Ciw9q1mXzmyDf12qv9D7tXQHqoQWBxidFwoToVMYQNuJPeL9tXFpj7q6",
  "key6": "4WCEXkj5emrz93ydgtCrxKWsz6KyXwfuxSAnbfuWMCU13RmpRiVyyfKfpqkmkhYHLqTrTZEUgPUDCfAg6k9sWQG2",
  "key7": "3xNEax325L87iUe2hRGPqUFHM6kQ1LwLkQMb1SshLaTYeDrLhMFmc7EWDR9d3KTk1kicNj3xJ5XA9rTWegNFEj4j",
  "key8": "28yh88vMUdi8ZLHnQAQzYhvmVfLhuAVkFApiCyWbFpPMfneAbEcdbZVpjxxPvHz45t9WJS57B4ey79Um7A4KougN",
  "key9": "3AoBdccCtTF1brtuTL4PURTWUK7wRYassGJBnxYjm26Pg4zNx2iqL18CGCR2BbtV5ni2KZhxon2SiutopwTGUBWu",
  "key10": "hNaUbnVA6ntaAHqTirLWikgC4sL7p3mWykGVni91L1Ft3MGZ29NuQStECkpw2kQDd6Yb5RnE6dMDCZUDcTURaut",
  "key11": "63qiEGx45hEKchiG3jJBY36qZP26B6RB1VkQAqDvoR7jscvRoXYBpWzApizzWGqqbAA1WgWh1Z9s9wPosEDornjn",
  "key12": "4nyDHeB9nxqQckNHP7Qhsh5sCd66Lqd7XaS7vG7sqBryKCvfeB9YsQrtcSPGW1noWV2UBtfCrxnn2FaZQeMnNG6Q",
  "key13": "3AEUfGNj7akqJQa9oawtyUDrKpXPAZDiHZmXpSTjcGWRayzs8MctyQyYmvQmDmtUzAawPYF2w2chvTzqCXs1aYrb",
  "key14": "5289rrKurgnHdZ343GjXkTfoebZ23swFuS9HGQuwf4ZsyveM7Zj4WgRULH1SHWVqZntwhjhP6qBDzvF6EW4V3hMP",
  "key15": "4xk7wXzhNwocbEXePZhLCjL8iT99s6CaZG7DPiVmZWyEmpDt1m6yHY137xjvna8hawi6Ls6sjj7vkSkwoWGX3s2f",
  "key16": "5pogWfq4HfkUStZGGFzq1KwTG1RVa54c4ZsDoyW7etGWemBD8ANxHDyTn9NyFCvZ534ACb9BKaMFGR1yyZcUVyQ9",
  "key17": "3qGexbKZ7dQzwCbzaC8mkymD18idk5aFPVR91zRA6Kvzxn3H8sN4MaYjDJbeJqT4ev1M5XfXvp7VmyitBf6ei19x",
  "key18": "2faVnobvSAqgrqwe85A63yNbGJsiBzYW7cx4iEufTpq42S96iReqfHD7UrMVjmK9GzefbWFmZoG5Zr3HZdf1jkZN",
  "key19": "3Kvej55YG3seT5Z97SfdFcAz4Em5uPRSESSxs2JS8ujyLBRARA2bpG19iAVwfyXcmFFypXKv9wSQBLe9quy4Anh2",
  "key20": "2qzAZ49ganm2FZM5Uesp63vkXRFD9jwThgyeCsBrkZBKLybPjVVP7vTAVFNHeGXwompmLxMUqHsgARwSzbyuziit",
  "key21": "4QXxeSqxN8X8xZr21LteP69Rv6Hwrj7dpZ128YHD8g7LLrSat3ih4V4fQLFEyWroS8GLPb2idfSMMtV2f2a41Uoq",
  "key22": "3vAVSzinDfYDjZXQwYTUpjHZHCqWKeTTcYvyVByr7zi6eJMWr8WXL47AGYsKhQjg44c9pw3f4TVbwCaV66S4ueSx",
  "key23": "5zSydZDPDB48EuDxd37MQcn4k8u1hQumGYA1oTcqTtYStLnrq1rdfdP55rbKgsmarXm3qxJb4dEHAidUZ5jPiioT",
  "key24": "4Kg6dUsAz2K4x6VxXm77PcjDse94VW6Ts2zFuK6is6kYHTYV5CBXUAgvRr6CDq8ufTHKvz2HTk59n5873SRJdjio",
  "key25": "Hw2SkjNb6BZhgLLrsgdBfeDV8hmJMvMG7JJS6TZpkxQdkxRWeRkQxD7CVxCt9U2EV21UsXaK81n38dMnBDjN3HY",
  "key26": "4eESn2JTndZBT8yWSHnuVRtsKTFv3cwB1UUnUFvxBwrtmdexRyjC9RGgwpwRjt9nq54bvUkrikiM4m8BLYFVMEeS",
  "key27": "5svSnd9tH5pXDsKDZUMgp2TMeCyfZCiHJ6zKz32nNHNBVwaf9g1cpgyEZ8BUf7umHfY8zRz87sGyTDi6f29GNXg5",
  "key28": "4eD1HvEVbrg71WhP2JYANyXG2JPSsdrb8KjC9uTrRfEpsuBpjPEycC3JZ1cwyVWFatbqmc9hKndmzJiErnFqTPVX",
  "key29": "3BnkcJao6GNtGHbC2zdB295gkGqtCZrf9knMfmdffb2KF58PX3s1Mb7VU6jQWtX12W3nPYAbEJDgr8E1gG6qHu9t",
  "key30": "DJFk9d6P2Nd9QARCrGp6yNBwEoFyt5Kxe6Bv9Av89ZAV4UuaEWFRSh25q8dGUfPUqZokQBjf9hBdwKH9WSLVFZa",
  "key31": "2u3gBCGQToUjhoZsWTCXUrGtDHDpBap1q9pGXBrMQnWFvhRZrrAfKpD8PEpvCG8XWpeadiqQRj4LW3inVpgC4TYC",
  "key32": "2Tz7V4icH5sZ2QnrYDiZMsU6w8zUjwoavj2oNVNfxvRqVktgC3nNek9iABNEVoMSB93WnSd5esKCcHRLYkuLo3SV",
  "key33": "5dYaamaeUoRP6dQDcPsx2ogaG5bV1eLnmQvE2nQbPC2ZUNkBfgsiXGfK64j33gNNPRHeKjQwN8933hDyPGsCqEU1",
  "key34": "5FaVxtSZ5ahFjZJGt7WnTYwFQk1fCqQcndCnxm41rBTzruxhjxwg8JfNZBx6QbX84fLjyuCHcJUxhVotawG6kLsn",
  "key35": "3v1cR11QNYtZwcCud1hvrocLdFLnC8aKNy3btdAC3QtQqmAq4BFKn7pp5ePKEPnVQ8vYdKgLAvANpFHTDzDjuUoQ",
  "key36": "4XmCWGn4eYvGf2ig6vjd5umsdNjYXY3yegQF5DBbf7X2JSTHZmrcvDwjzuDqUsUgY3nL2cn9AcuwbGt1YWRqs5MX",
  "key37": "ToDPW3fs4QPEYFDqQY6HtiYNCSrw2FXk2Rf5CimJk4PD8VMH8oiJX4tqW2z3mH19oYoYGhr3xavCo4RffNoJcyJ",
  "key38": "3hohswvtNv9bkxnka85S1ZmNfcN37AAEzYnftZ3D44AR8yCtfgtJRugZrRybtEYXa8fj439cXLCtL7JBiWrrhV8a",
  "key39": "2zc7dSPzGAe7dBp5DTKjZ6WXvJJADLuGgCabTMuqcZz8PLeFs1H3VJHbQVD2A3mLcCwTAp4eBAApWrNHUVJnBbM",
  "key40": "5EtviS9RoJ5eVzFFxLAdZ5GVQsVH1eRBEfSJZzfdKWeE1gKzQJHjZTHgJC5mduswoUZKw7npGgfWSurJhrh5gDYc"
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
