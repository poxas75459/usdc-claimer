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
    "DA8QzemKZjjtPDFbRi3Au881HEXhgqWDJ3jxfE5yC8Mybd9PzdwHe6uEJpMK7shcW2mDDJEYXCpD5872hFspvpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAp4hrWgB71FapNaNk93C7nexg96xtz9BGgTPjTj7N43ZS32r64j1iqcQxb8w3Ze5TsBCS3U6wVTbF7wfKB5LFa",
  "key1": "4ywYJykdh4wVRD6bHiLFncrKobRRhmZLNFii1KsmPR2BhVT7wDCgnJMsCahvywXBr9aVbdwJrDBABtxuuDHZFGY2",
  "key2": "4ssE3tDio5uDZiGCTEV8pgnPbJnroL4c9NRKc4iPxkvyNEX1bcewheLGftGhgHayCabsdK5f6b8chtQiQkg4q2QB",
  "key3": "WqiHVaJht9wKrtviK2nA9jUtqLenK3ZMH7rB9T4T6EeT2qDryWue8Q7Ly7oZaPmeSZA18ZbWhADLDu7EAxwSv5u",
  "key4": "2pKYkgJS9mon5f3oXrK2eGs6r8r9os8ywhcoN3cbYuKiPnmVpvg5aDLUeWH39DfpsSjpmHog5uaNxMof3aCxbZjF",
  "key5": "5Paahn3JNCB49vzc9CYCwkByAAVCWbLd3ZqBJE6MAqNidja3MHUBRU8odzQPmXV7Xy3ZJAfonCkMxCpTqWmht9Y5",
  "key6": "2Dx9zAuqRwrTR7a3YsqSZJ3HEDYt8qe3oDH1D8BzSfTmvj7N5qSC1xB6gXMMxshxMaUvNkZPMBNNXfpHDqRvtEzX",
  "key7": "3GrQbwJ5B2M53kJwzrjaVfa6udVEVr356pJEhZjA78CfjGkLNLnNBm9jm6xPFDuyUHzrv9vb3yMEzrkuwVCxMMx5",
  "key8": "53XtfYyGmgnzzUrL5g7TrNWBTiQqTHfqrgGXyCjZzGzNAjNsrCYyYPNpaGkfkk16SNLHg4R3FA8Q6ETCdu8EM8iE",
  "key9": "5kn3Enrq1UKDTXCzPqFXQduXo3upHKSTwqLr9UD3FzyvbpeA8QMbr56yC6WweK6wXQqhcpAjD5M619wEJCCn6oFW",
  "key10": "2aJnET9GRvGwtWDHSz6kaW9xvtM9QYa7LhP362TtrXRQCPR7QA7oeTNxvNxAfbAeccMNAvf412UQt2KgnEzCvJrL",
  "key11": "4wRd1mwMZGZe2fvamDKfxCKrWQckrwdaJFFor6pHeFqwoNEvavtVzW3QhyLcLk9vgfQzvEx7x41DdMY4Xsfavtv6",
  "key12": "62v5DQCyPm7ABenBK41JtYP7c39hX4e3UheVRyiQ53fiVXx2W3UCXj55wRLn8E33znfoEu2JueKcHQcsCno8obRE",
  "key13": "59grLvegG4uUx7pMMmcZARh6maipXN95uU4Exq7xabJ6aAiW9CWms676DMD1TEgmoVE9kY765j2NSbyde5UkDML2",
  "key14": "23NuQ3CW5SPN4aVLnge5aMgaBZzkTDu91Su1LXqmZmncAjS4zdc2kvKWi2R3oB6siftdfNWUm6fpeJMGKYjKVvaw",
  "key15": "3G9P377gA8rfqNePNj2SagGwENa5fXDsY8Lq6D8tvfP6L7mNQtgL8GhAe7PNC8aMeSJR925znSi2Q5zewHgS82s3",
  "key16": "3bde5cU9URqzBJ3PrFQCFczarqPDwQvohRAjrGGym6PNK4X2FZ3M8EcAqfXTpgqA9rxvrrtWDHUTMn9GSPrNRn3x",
  "key17": "4GFYRH88SCfwcMCN8vq5RbX8nkF8NHkXxnKycLKQuZ2AGwwkBi3E8Q2pVT3xTcVh4wLFBPPEc3eFinQGbfmcyptn",
  "key18": "5Z2zTDgLM4vnb7FU6gkQHzVtCizAdq2bhASBg9Cm2KFzhbLVZuaPgFz9cq1mXjNZ72UmszVqZbJa8kgdTYYmR1mC",
  "key19": "2h1GwgQkYuvnhDznDsENVRD9MDuoJbsyiaB9Z7djmFwej3RGsvZr92nvBhLwXqJgtY7A2RS3bZ3jLV4qEYn6gJMa",
  "key20": "3yN1EhKzy4kNBXi2WWxfmndY9vwTaZJ3qzz4KXbvfafdE6gEaDZLeiuXpxsQ6EpRgaM4HgRLhe3Vv9hdNaHSK87t",
  "key21": "2u5oGdXx95o2onYkkfzVLsUAPvpqLCV598LBLVPPn7UXYjKhNqQ6oKNmr9M5WTunqXz1LWUtNjPUg6Rye722bThy",
  "key22": "3bnXqqaJMqJ7yVYyS9wWUhCTmNDu91Qmh984dFZ1Azipo3smi9PBkEoZwU5Rh8dy6HcCKKpzpUhFfKLJHnzbeR6B",
  "key23": "2UgDCEdEgVgoZ6EARJajxgvGM6YkZcrRtqNRSFdAhsZqVEYGSkd7N3DZnyHYRenFnnB23CoBnc586hNo8LEay3es",
  "key24": "4rew3ABHRt1Gmng93aSCX6KsAjzfrT94TJEFn6A4c228ebhicDBcwJGQxr3xwPzEvmKs7PWx4sEV7BUmnhrrDTyG",
  "key25": "3XqQpZp5u4zYAQZVk4K3KXHJJ9NDeWTBJ6v926RqVjs52PZohvfKhRSM48avY9GfE2E8Ypr5ssidgYbuLhLxQQzN",
  "key26": "5q1VVccekzYa3pyaLoGKPRm7dDwm2rRznVrU7VM5FwQgTxrvq97BnHicWrUPDHpwvHQPS4wyC8776Bu7qUUdBYfJ",
  "key27": "jvtR1jKoVPxyjm6GqWod8BhqovXPEovGTeDErhxdFfRXFRvymYyrekbtAcVVCSKZqF2J2za8XSHEq6EGeL29h4x",
  "key28": "3sjk6AjyMWdshVZDX4mk4gxzTsvb7uGdxRRHJvQUFdpNzukhfWFzC7kFTfDWsa1C3bPcmV9R7EPyBx1X1bv3i2Sy",
  "key29": "4yKkvvwZJXTktR45W5NNgE2S1GBWH8iUiYjjknRgz4KDhcUjB6Y7yW1t2NMjKJMy2MTGACMLoML5stKKmVrvXP9D"
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
