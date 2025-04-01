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
    "3NthfttURnobwDcAPxNp41TP3nmeGP94P6owPLGHvXbGLoqihcJ78pWGmPrSk6zQ2tM153k2QDPXrBeKMjtLCNuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mc8B5UWNhxHqtQrNjhJZbCyepCLLM5u3ANZz61E5k24nmi5D17ABSrKnoE1Y1X3jAnqtRwcmSoGYbH7eJG67bT",
  "key1": "5aPGXpeVe9VzKyEoU8zD2hYKSdJBgAa2hPRZwSqKxT9BqvqnQQyLYaiEDyThygmHiyRPEWBcpUyYRkZDR5LcDqsU",
  "key2": "3c3K24z4SHZXCtaJzkKbsx6rMnzU8VNWLWewWJ1TYgJdf5qWEyyRZqqcZttWavMTwzBpeJcXEqdS11KD1iS4csy5",
  "key3": "47p2c7qt2ZtGqZEJDpuXi6845zNnpHFs77h6vJnzpQCyDHpzvxHau1qcQZbGqmrqDF45TQqNhAPzQEt65nAYMWyq",
  "key4": "5isAVTrtj4ibrqyteu3DbTySCiAz9EycDwyFgnrmStX5LBUsoYoiqWqL7KJJSuW8wpZCkGEDD8tgTEaUZMnbj6oi",
  "key5": "2TLvXRPfACYujExXcWDhog47D9tJCnknwb7JobpGgFcF43QLQCYxoZLZA66KWxFUSCBo7i2P5v5B6cTTns9jBFSD",
  "key6": "2bsCERhX4D6YV82mKozfnwFjsdd5VrCP3NxHct9qjjZf4GNE5VcL5Ndea27zDMHy2b5ZqNFzm9mhaqdtZ4nqxJL1",
  "key7": "3M98GNqAEKfzJ2oFukfP1yp6s7QVBHnC6JqMWChGzEyNbtHmeGxQwympQiXe3jdXcrjwZcJhTAsvyed4zmqKLnc5",
  "key8": "Ci3qiBWvPH58HHoFjaeYvxACnBvHcDzG1jZz3heSUJ6L8nX7unoT1UA3hBSijzYfpmh9zc99g6YobkHwFxtTf28",
  "key9": "4ZWKSpMqRt38G2eJWsa9sfWw7p7WjaZuuyE3h7AN6JW2yfcy3EsHeQf3jn5n7tWRGEgayJQGu9vdrZAdgHCk1BkX",
  "key10": "4sd59uHS8g3vGccAaYBzVMoR4xChcpWW3fvnidGhVAkoi3LHz4EbeCohDotBBiAkYJfGRg5eaTftfQS9ZVgdNhUX",
  "key11": "5d6eFLRGjXgHWUjrLTBDk3adVVdViZRKKTR7jn8rbWPBpsQdck8J3H7RDKGjqp4gMX45QjPCC9NDgFjVsrDVeSMg",
  "key12": "2zLoLXW7JTgWUn8coTuDVaHdYdbz9GQAW9RhBt1fsARvLLjXhseYzQ7gpKmFP1GHiTFerLULjtGizhhNwTdhRWoQ",
  "key13": "5GJVGE6xty1iwvx13Xva6x3yEt7fGrHmN13oER4mk1SUPfjrQ1NvrYfS6CKEgR6neufjNQN8Tr3hMwv1pVddvZns",
  "key14": "rfCQqKqqUhLcXMzVFUNrQryFpSaiu171yLCgqbLVoK4JYokmtfk8UsEqUJw9PYY9LgMbaaacXGYNhQsZ81SrEht",
  "key15": "5xyBTEEnsajodz9vJoHALbocP8TTM14L6PUPJCM4fsLkXaHp6hVnYYzq7v3bPyrvDi3trdPtCJnpzq71cgSp58gZ",
  "key16": "34qbUvpuATfLHGda25UQYB3XA7dcuG6Z5uZnyBqQ67fuhD4vXgFQThDKXgswdQfMXZnX4JywMSjTvddjhCD8Lrnq",
  "key17": "N72E9FMBjUrLzYbLZSRvHfAWwmxw5JouYSwoVKbNgwdE2AVvEB5So4ABrPUyLtvw3RFKqNMeKH6aaXXCCXWnqLf",
  "key18": "5VBd5ma3TVe8kVktkUdtdstRK9a9znfMbEwBaPE9wDgeWNRyjhHh2HRbsqTV9m4YFFvJaBnYJdXKCKC2J7AtXChX",
  "key19": "KEiieydsuWPqsuaz1YzjwzeR3NJQFkdC7btzfJeXsoiZANDaEJd1Z7ee1nkN5SxtCdeWKtcfAuENxeJxgCrHDT4",
  "key20": "AWXg7ukYchGWrhYQRaCtQxoRgSNn24ztBXDd2rPNHxau23rbyG4GWYpH2io9N93CzDoEaT6gWTF8qpkvrFbZBBd",
  "key21": "3rHJqHzcexzGY8PAB21pyvVUvtEYsJZ2t8zWV4hX9tzECy2ZtF7L8HZ8Zdih8RDi5WxKo5iP7E6MmtGBNjShXbEC",
  "key22": "5AC5cfnzsGoWRBPiTeMCMjawJgAbMUh77zDCs3biVNMPXeZEpW2Z3iiqxKiE9JXRJ9ULoe8wAZhSvcY5MnM9WqKN",
  "key23": "3bbjhXJRDmm3D9Wb9UEJg5SjnLwodTbRHkng44odArn4UMvf3aqPLZS6hp222cV8Z8REi2PYhBYePMxAMPQn4WWL",
  "key24": "3Ns9efsBxDwoZN3Dq3CyWC31vgpoL8nbizYTSiMW1A33nwQVC5GeFdBY3jaN1wcQGUNGzYjw89zT4DaXbwHnxE5Q",
  "key25": "4SqS4dcYJ9ZX9831zpJ8jLJ6F17ZBw7oBxPJU1BrgL73SYAtYGqLrHQuvs7A7eztjEDrYFjSymk5p5hnVBgmuJdg",
  "key26": "2atFHozRta9HeBzrn8ksauiMXBrRNTKyqMWyKtVgFHoW55DdPp1q1M6uSenkgTvua93f1ptUJPXWuTnX6iQR2czm",
  "key27": "58K4xLw7qhDCe7W9FvvUAr3ZTHHH65qnzmQAibHrdVC3yTHbpG3Wec7u19a2qvg5W4y8Rb7wxcd1wiTmMLVXk5c7",
  "key28": "gXYjGQhBpBxVGiBam9yNRMdJwsvQBuZxLZ7WhBCEDJg6mGfyAHVXtVMFDMQW9SPee1t45EkVKDZ9Di5YuE79PYR",
  "key29": "2m7n6p7zMgymN1TLhWUZZ2h1ijAThTX73qbrED7FrAam8nhaoQygwap5GXickoX52J4DgvfsqZVHAQ1eMYr4WvQh",
  "key30": "TZyUXEmWUKjAkJGekuS4F5vavwiKCRMGdy4wDCh2tNNYwDjxaniQLAWGsXoRenxBWhd7HdfkByYXKRan59dUb5r"
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
