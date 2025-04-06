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
    "TzfkEdtfuvbhbHpDRKvW2wXEVhdmWeJRXAqxHn6pHEwJkkue7M1ivquBtz4f1rJ2bWHL9dvDmy7LkAeRk7h7ixa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWS6vKYXWJMXHV5oQrR9GNbH1iLdf2wSGA9Y1Hxi2XEsFEsNe1Cgo9PAtv2C5f3DoRHyvYwadpsA2zXi1Wvmj1i",
  "key1": "5x4F5LJNamTtUFn2woLQXgyzYzFGMTK87ggDyZ84AEP2UmF3zZ2MueQXRCu5s6iGxDgtUPZw96XFDGBYZtiXSdHD",
  "key2": "27nMxxYPi7uykDQj3rRDn23y8VfCLYCdsqrMQq5Dovsg7uSkyVfk1yMZFwRA9JkpdMAsJkgavTWPminrngbv6765",
  "key3": "4jJLJWXeeUzo7BcT5BLA5L5Ameb7QjwSGSRvEzw7Hgt4HSac9suF6rEWqhRPs5RGaN3kw5FuNbcab8y3NhD9pAQX",
  "key4": "5YA95XLaGDfZrGgB7caVhKdpu9Fp75pN6ztB7jwXbARgrKS6RjhPyKsFFr4tGrEKa1ufEMfpiVNeqbc3HLYjWpWi",
  "key5": "3h3LGKEQGnSybtyKSVgkPWNrF3As54ZiwXkcU3jv5KWVKhHhZNRqV8GiXi2n4b9cGnJVruY1jFbgibiJKei6h8bD",
  "key6": "2kQtmdgxgNonsXAjoxp7HmHRWo3e6NzCmzqaXc44xuXA7nZDxY8jsg6Cb9jfs98fEhPYQTG6FomA6DPEtcfbRjg4",
  "key7": "31Pn1Ko2bSZCVJAtEYMw7VsXvk4dLRgTUMUw8NWtdE6crS3697VDXV5AnSgFxLz6NPBujzcePm8NnTzwtP95ET4P",
  "key8": "3UycoxgSRgfezKoyZRmY85J3smkde5kXP58BTeNeUWkJHtijRZpzwdRpxhigitDeCpXasZUB74ngKid1HhbQwdY6",
  "key9": "2N1FKwPaJTjCiFjytpXiBy8u9TEwtiWT1vfFmC8SymbqR8RnZ9zNzWcsrzntM7xGgkxXsow19vydDTc9i2DZjDox",
  "key10": "59c1BMknzjEachS93EJEFoLBxfmFgUEp3R1MY22rM3cm1dGN44eYAoYDDAoBKMQA3MiSGbCRxcJy5fEhwfxSgJu7",
  "key11": "Sf8pUT3dj2KD5A5aUfEwdr78hJxPrbP4VenBswzs9Lpf2J9GANZ7VLPsrKmLGrqn1kn3qp3aNFh8hEDpZVVNkML",
  "key12": "25Pb25qDANDQw43JpHZt6DzkV5YaMqhHeY3kPqwzFAhrvQzHfFG42zKzq6X4YENm4hCTipnLUs2raGNFTKeZw4oj",
  "key13": "3PtmdfugAPiVwnXzjGt6TY1C2ojwgqjPy64NDr3VbHQmGQPxufC5MBHJG3yEYWEHx1suLzKdPxtTSZtnP3wofqrg",
  "key14": "36Fvk14D3qjxjMnfeKHUXaVVod2WZe1jawaDyRsiHKbdP3QPuabxRGgz4pZrZvjA1epkkdffWYzxHAdB6D43QhaX",
  "key15": "3q7UMYY49Ah4TaaG6H93d5CLmzFc6fGwZAqJHUMZDraLthVg4yZyo8hjppbNkAkSQExsE1B9UtEmDiL3CdKPZF4M",
  "key16": "4dBMzyp6ANfHHmUJuW7S4epXQAk9ZiokZREp5hANRhEdA8imQeM9duVyoLZvVv4VacmHroFxHkCxz4gwwyeCsh5f",
  "key17": "2TxXTjfxQ9VT7C6HvamKnwPGt8Syw4RKQFGqEWmrSqBYcfvfttJVYboiERJfGqo6QMLTPmaAiBv6B1UxsKv2zfn5",
  "key18": "2gaPadFcvd2TbYACE5M1wz57BPTKzb2BgrteoXFsuRPLSNqehr815M2wkTy5zheqdH6GKpYtnegmKgKcNTZV4aay",
  "key19": "5NDYZTtJFZ1524HbmoVc8snfKmZK8HR14Hi8WjDW57kAnX1cEmXdaTWytD4h9uwLqJU4ip2hitsx9EP8cczQ423K",
  "key20": "2C9yER8q65uAdvXiFqnpfpeoFB9o68SSSVGp8VH7CrRTyvbTmUuioSqUr6qhQUaELQDWWFyRJ16PLmXqSoa5MSkz",
  "key21": "4QVCbStXJgc2kfqRNb3FxEDFF8h4NDE5cW29Y3xCqixHeujMA6YfR4Nzt33Tx4VWoRa1mDn7tkeRuZ5UwZFmX29t",
  "key22": "4StZgg3DeuVRAwHxQq3kNAtThkUe95UeCfcEuQaPbZ4nufAu96hi7wc7tEmxdZoqPXUHQmPDdRj2SXPbCSUiRLDB",
  "key23": "5ntdT816PHBrQqoqGndNVm71CwZJn9bEDrQfqnmUPbcvD8sE8ZaFjCsSnuXofrhgWvxz6r5kKDFwcFDvxVBocDzD",
  "key24": "e9LzkaAss9SJBPNRvGEaUktwAb2tRSGZghrVhUZ81WLNtG83WhCuKC8NoxXoyM3nd8Ay1SYC7HbMpnc64y33Yct",
  "key25": "3urKT2PyKpY8Do7ux1LRrgE4Amiw4AENkrBWPQxuxYLxJo9B2wSReKcd2duXLi4DM1feB1V6pNXLbDikGayPkvLu"
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
