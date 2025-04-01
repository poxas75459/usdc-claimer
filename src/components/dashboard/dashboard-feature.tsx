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
    "3Auqmemixtie68zmkxer7nmYBjmv61TbTs3Huk1YLpE8RPqq3XfNikEbRT8JBDqs56P2nWCUyGPUUjcuoZK4t4bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491Baoq3MmiFWUEoaQZqM1JnZyBrUzqZRFwRK38kEMBL5dSPJtnFH6ycpbEPkGhix8doAxaAhWxn75fhex5xFBQG",
  "key1": "gfhsJKbYrho7Yt3i8vYu6rVYHDvFquMmRH7ugeGDwaePWueGsx7xNmyCt7JV8XXK1KbL3TVhJ8BPcMiA2zpJ5o4",
  "key2": "5AuDBGHgQXEmUQPfM4KY6xBQzPQTwxdMJknCxvbHX1QgGWEojhB4ogURLHxQn9tNAbnHnb8MSxUF4JFnZPNLxRbp",
  "key3": "3MLPjyK86QVFDuUfGuVf6EnofoH8cWeTvWL4xgprSTgsumCWhyP625R4GYWrrp2ZjuvzJPxhUWZ9PqFXVHcLhM89",
  "key4": "4phqUHD14K6pwKt2XB5THyKH81RA31iomjknCBtZnwx5LypvairtH1dfuUUMmJhzYNSPJ2w6UBmzJZrHz5gfV6um",
  "key5": "4aUUnbSXQqHUxkeMq4mWYgMoFdx4paF7tNNHqxq1cKFrCKFKQ44jk19H771odgEvUZpqhabznqa75ctVGQggYveZ",
  "key6": "2Vid147wTHAB2DexTMJau2TANhxFWjxRbL7ZzDLzmghv2mM7aLHBhaxRyibU5KxqeSabDxzoWBCFtJWWg7UvUMF5",
  "key7": "5eL2HbWzAEi8ukaqzFqpGDz3TYnCDsbEYRbxZh7UuXFjuumgKEin3AYvYSQaT2C1kMbixx5BDV1CNQbkHUvD5Hgf",
  "key8": "2gBAZci7iUR2Vx25Ypq2PiVB8dHuu3CKXsHpEQsrDa8Eq1sShWoJ1vSV3W1oaRu7sGvPaZ5Vk4qCJ2A7o1b8MYCP",
  "key9": "5egPtfQfsiPGzw5pAkJn9npsRWyMxYVBZEoVcjwFHHmvYT9xELkqWzHhYWvML2f9GwFPnbMWP5EwGsDHkSSnrVgU",
  "key10": "4mUtw3cYtm6brizo2G6hrCwm6TfRw5c6GnHJs8yiSxtgaHsUbUfkkCrwNgKHrNJDxVfszh8zhwpEvhERhTAjSqyA",
  "key11": "NhNNASc8nT6u3f6ov8N2ur1MxkWkuULSPeQMPPa7MC3sHUubf539bHBhjQUt3LNeqj7JmeHSEwDwmtUYgPVNG5d",
  "key12": "5BpcMwMSXMswQvTTjiVkHg6SK2dQgoiVaNZEsTftXFR6Ya2E1s988hvdmkpxgjksgYZ2Sd5Sg8yXWdnb2zBPjsMX",
  "key13": "3Tkq8vFVYHiMBBRaP5EFGXL1wiAbNNFrRaLytwZrKW833bKWtQfbtXyzoRJJCTpMT9F7zhn2agspCWUCrAmavn4",
  "key14": "67q8oK5tSc33U27dsxvMYbNAsSGf2nTH5VQkNKkWP4cnQATbdcCXYMREWSyk3sqcEeQ7pB7SGcud5To7TAPJSjjL",
  "key15": "5ocdxHuHyfGoqMVuTEtiHzv4ihzGYpLfidvc7iMATBv7QRUSQNmCTi3Fs6jZ5SzkafaAZgCskRDrbCaepBM2qS35",
  "key16": "4nxMGJ1Pat8B9VCv4xrAqQvDCCcPPo8w8YQDyLu5cHSaSYdnp9ke13uXyknm2KnQrhyYraVg8qs8BvNZ53MrFx5f",
  "key17": "3S6SvUHbfHmeukXeeA1hWQ1L8RD63DEVkNQCr69kUPSvvPkhfKXPsE7aGUVSYmw2No9xkGpWbswtCeQvNmfp556T",
  "key18": "654b1PzmHU5LEaFPTFjqKD1T5jhHswktFJW2mBeDzUnFe4uNbdSRYERSK93pbawVavbhRSgHg64PJsS7Ad3Rqqeq",
  "key19": "2FCiuDgj5jRjmC6JzJsuW3CPP1sZNg26dQFVYn7cWJc3qp7tFkU8vzjbozH92km71FQ5G3co1e919Ks5YktvKQEK",
  "key20": "4s6gftgKXvFiCvVvbueorQ2bTinwRGuuXXd8FPTZMrW2LNcLtkUg7a5fKnLfh1JmsgiQBVNCsKSkXU9bW9PJFGP2",
  "key21": "5nsVbie1YpiUeQKYpmjMJruMCrELja4GXUKf6Cr5hD9n1daSvSDAvFyLtCanbxzKhNy7x1x9yoP6agyEGiZVzpLd",
  "key22": "4hMQDiYFK8skp8KqA4SanyU57pfRTyXGiZpZadSgoiyQNQTTrwjgpi7AuaL9CoM4nQcE33x2AQAxQq95sJPJ2EZ7",
  "key23": "5zHHNVGz7EFBvBmRNfH6hq1tvxWbvYoBSGVUmqjPQVGyJum8u7TpCmdHPsBPXju1JVb5tSwKBbXncLCnzLNXWRtG",
  "key24": "gSvZK3TUQi36C91KuNJnUpx9EVYCZ5eezMPe6kpsPboGm7avGiTGpvnjrhLBesAaxr5E8XWFAy8QvpHsoeQE6he",
  "key25": "v4SuUh8p3awR8fXZGP7LM5bWWXDixgpKsRFkhXE6utAX1WnBzMyFRioqTqCEyUVXnmigGjm6AVWWPLt4JoRxDiz",
  "key26": "5cLff9uSMjyDSjpNi41QT4X4W4CHMHA2vt7xsa4AJ4MCwSePwg3AGntSm5SkdX5HCT1gyQjMTF1wqQ7immu8S4qN",
  "key27": "4Vur3VBon6rCBDHEVBd4tmKZYZAYaUakmG7m3HARTJGUPKqEWrVmmtrDhFSJDe5rV1VinJm9CK5TWghLAHUKvhAP",
  "key28": "4FN3FoTr7vwJucQ2UMGD263YDW7J6uUNMiWGYyeAY8dNVzWtvGNXyVpPSqBZddwKBiCLvCvyaDL4TqUXBbYDpPoo",
  "key29": "2Z1mj6PNPyBadFm5WU3116fdfX8URrUt1Fx7o4ue9cXpH4oQXgYFYEi4guDvzUsNTxMufcosNbdLhcwYvmtjw3NH"
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
