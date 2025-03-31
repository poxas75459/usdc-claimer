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
    "4WEn8cY5fKGKsveX8CaxHFkSVy6vH26DdcPtCfGh7oqNBzUEvtQsgdwuU1jtw1fTLYSAuL8fny5HikNdNNdwxFRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huP57uJVp8eBBWBwB8VYMY58m4MsW4Ujt5QfLch5Tk1w937KBx2htR3yNVioVEKG2d9XRog45gqedqnzTmPBdng",
  "key1": "hcCbvCxMbRvZUCErc69aLbfr2wdQCRQEniCDeKjJVZriiMQWwEcRWP7u48NoEBEPq2vnhRgi5e5ptKexoy9Veaw",
  "key2": "319mUYcZfiCdBjmkEWzLMAqwWumACYM155mDkAtQiuJp5h6YPQEW1Pv9yUkJYAzB7bNs3Mzbk12CioTy1pW6ARwn",
  "key3": "3xibE96oHjXjnuHDoEG1DDSuu4CGVdaTy9ityC9S8KV4GZDKer9XVPbpomy2wdqkiVnxErAMzDtUBVomuNiE3kK1",
  "key4": "2zhSaPeZey9dxdRGbSAjZrKea4r2u6ZP2AuVve3fnNGHSt4pcv7dMpP7pfwtz5toWDsUVyz7H8rRAwxEuob3iPzG",
  "key5": "i5F4WcBLaNAcVpWDt4wgo2RqM8RRdsqhNxUpa7woy91oGC21rwtHGMzbsaKeauUh1JQXHsFhXwooYPk8CytEo3Z",
  "key6": "5pJc2aRZb5hBcHRBfwWxqEKCxW4AMi2eN9U3zdyDAGFArQiNi2iyM3j2eKC2YhUMS8BV1zzFWRHesx4sK8KyPaYG",
  "key7": "4gNMG4ZkPSK6ePdUBzNobjtrmdivsiARyK1ToiNe2MEWDkViWGb3oH2wViTHZZjqBa5GdShm94mdTkNpyjqjH95m",
  "key8": "64S1j1AF5M6NihVcn6GYf9eCWyo88AtLU7vcGxWvvMe7qrFWf13PJpftjjYUqygPm6fX36mYMS4seNuK3DMLc4dU",
  "key9": "5jw6XKrxy9W5g8w8HxtcZ5qtUjQLrxukZhzWothT5PsWTgtU2NcFPXj9DJD1eQMdkcvo2FMX7JDJiBNWHEJxqzdT",
  "key10": "4gKe3qF43LAnQVuxw2bgyKM7BgF7nhMv1HhvXzz3cnhN8j3QLMepFbUTrHQioajGjjgdswx1WGvj5AXEXQ9PPYxp",
  "key11": "5UTmYKF2dsPJperYMVJAzinSvfcA5XEykMej3fCxDi1Z36HHwoZ95QJ5GJhPk2KSxJxFYVaDYYZdE1APSeSqnnYo",
  "key12": "5guX6tWnd4LxnSy9T558GT45nBi67zEMvKjkb5BYhDq7d17NuF2QBpxbDiqH5R561Bu31phkHfeiNdGj6wMLE92f",
  "key13": "36wpcdNZCrji7M7SeQomRx9vWENgkvxAKtzvgxpNHKchmqic1Vis6WSLNyCVQH7hnG5CvLWU3emEXDuGuxnRbz1L",
  "key14": "5y5orh7NuTEYTgThnTqWMyXGZ28EiqKphZuVTUu1GbhW8CHpk6UT8oGxbRUNuUWZDbfZbuS71EiNyv7WdzdPc7MW",
  "key15": "4dye6nySgisPVB1LTpFvXu3QnRm2KPpH6nsX2XToZtg9TymgVrrH6w53gxAtLD7hdHMMcCe2WuQVNzSaALmUd9y2",
  "key16": "4wbB8erkb4in5Xva7QwK6H1BVzWUzhM6RD3wwZATy54gDKAVtbobS3xVqn81BrNZ4JZ3wvmdXNPjHuBmN47URjFi",
  "key17": "5adrzGyFqyaUiCfpfpJ8uQ4KbGrxrgDxG74PPwjXUeC7Hrr2W3znRgizt8HhG5aZ3E4W88HHLdpWcWru5rJhwct9",
  "key18": "G7Q5eE1jHQ8XufnZSbZc9UWJ7wQiswFc7CMMWuiqFviArA9ZWfixyxfy53UBV2ZPHspejVqTmmsyJsLh8V6Tmxz",
  "key19": "2V2a5SNJo3geuUnuZHSwL3VbrJV48fQuTes82uwGPWRo2HUmxuhfe9NaWr1CC5xDCbdhYZZbTNJH8AYtw3MrCK22",
  "key20": "43YPnLpia3GVS6ByZgptEd6ZmNJgcQ1wv54SJeawqrRB7VLNTyR2SSqHhSGt2PczzsA4ZbCYdSphZsKRfmkPmHYH",
  "key21": "3NFFNFq1J1LcHn5TocxQEnVyTNRA5EiQzkaWoXBXixXrgWfJztCX86GDdm573fNJrE6tC4VUYa3ew5mD9tw73W4L",
  "key22": "3rxiJJrCA7GRfPfurM9GGR5UPCJYezoMGJV3iNKuEwqyR95KUE3TwJ3akeV1yVbWkPTZbdRi9RCetfH6q3963eco",
  "key23": "3WaWNLUtsCUKJ1Se8NtWQtPyBJPA4U3Mw4GTGzCuZLk2KFf5hbpb4y8s1ys7hRswmRnsG7ausQ4mEV5P8i7TPRiF",
  "key24": "49CfgW3F1FgUrgHnaeYL2U3T12CEW2EqvA4prkJzKykvVyfUPDG5nh1bHMGh4NVKKGmhbZ6RNFoqWjwqA3V21FnL",
  "key25": "4tEEZqKDiZxtWu1Ma7Wa3svofJj1sBSphd7iBZP3aVTXB4eKZ7Jr7cJW1oWt4vxpsoa7zFS4wmH5YZYYRkU4svDb",
  "key26": "2LuCShQGfcUfmLW1AAVuUeLktCZJWHsheNjc7TJX7fgdXpMarXamAbokjbNG6qGfPtaZQSCoWDhgWoHTJpvq2hAY"
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
