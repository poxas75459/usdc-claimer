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
    "5giwCB85Acr3vtPr2CqGXK5pFBbUeERjKqJr5RUpZDuqT1YfVrB1uay4GAZi6uTVEtB2sEwPjzrGTHgwUVDXidmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CG7QZ1Thx1iG7aeavVKQTGc7truTzzXMZbFUxqwUFaLec918MjtdtUZHQF13PHuBwfTZ6FPgaRVeTwbjaUkvuJz",
  "key1": "3obHL9tq2xngKtDTawVNyQB8NGvf9MLfa86Eej2F4ckM7LzCGbM8Q3RkCZP1ggVd75acFb4BgKBhDWSMFWrVreAF",
  "key2": "4W6eidgUL3tMfky1AwwDwBFTyBAAybdhcnKebfb2S5EqY99qH7ZSwqAt2gWpWVn31houdTCi2vFSDSrLkarzqzVT",
  "key3": "41pezT3ppvKtqZfw6iMjWvTvRyv46yRJafL1rSLcq7mrs7xuWBkRMmmsvgU7pHQVJKgJmLhSTTuhAfgq5UT8nFgu",
  "key4": "631q4YCwtmvCDzAQ2b1idfhqUzBUtCusfMp7GwguWD7umFMMLM47uJNU9rhuKMas9DfGeXeu2m7QbwRF1EXrsNS1",
  "key5": "25VGdmHQzq2KBZXsjL8Syr9tQZ83xeavEvbg8KP4wxBXz1fhj4XkjgrJvCcuUegaYgcGyFbimymkztAVPMYqRaEn",
  "key6": "5bXxWAMwuoSRqaETMA7AFEpMjAfiaN8SetupdniL6XVL8tWdaLBpY4Pt4hZ1kLiqK2e35sXyEmAHXKYKDmepB11f",
  "key7": "t4cEAco47uH1rnim7ivZ4VXLoBNbQfVu8BDhBki3ucTpT9FfgVTfaVz3Sof5KEEuVu7QWd3hLxymuxu66nGsH3i",
  "key8": "4kSfQnTSDnfXQVqjv6mzAc45zn1G87TWZKkzVBr6HauX7Fmu7V7N94LnC1eDmvbsD5QW7MRBep1y7YpF2KUdZtu1",
  "key9": "A4X45Rn7waYsqocqRmNhCtHGPJ5Q8s24HT4FMac4pWxp9pDkEnhRfZCJy9KNp8cxZeWceJ6UpvWVeuqbzt3ikTo",
  "key10": "5qjTMonbMcqWtku7jMhf7tAaru9dPxPhae4m8R7ZubtBZPZ2Tji8ucweoqyxSPEunSXGVpcStx69wz9aRi4q6cdC",
  "key11": "3J5M2Y9A2612K2974PZaQ4vXiKet2KkCjfoMkkuA5Zh9HDuCEeATmdPHBogsEmego3VFzEDZo7uZrvWDxgHAfHj",
  "key12": "5XLXQ1XEASX456Sm7Pp4vRHaCYK3xbdw7CDLws22w5eW8ReCpxE6gCsLaH6FbBDfsyYhA7zHEcXGFyWL1XcXmwMB",
  "key13": "zwWNkTAfnDV5TzxdjaSgD4PP1xtYeheL6Q1uAoQnETp4Hfbefvux1R67aV4sAj7ZKmuGseJpGYsXMcXGEDb4aBX",
  "key14": "2ks7D46YVS21ojt7LJDNg1MLL4yGzymxK6zkZeEQAcGPt75bazvoreuCrdD7REjrkhVRmfdRaPR2grr4NwZ6nRsV",
  "key15": "2JHKKVzDyxfdTkiXyZhfvxro5yJhaDRtSegLYTJYiDgk1g16NSUMoKHDxMzcD9QhHtMSRK3uv4pNwHqaVCSk6DTC",
  "key16": "3LaCfEiEm8DfeoSbGwgDL4sjPuRS2ZFZ6cECzPSrk98a924PwuGz655TFVhiGurjAotcmsUwfri2zAPpe4jLzYFW",
  "key17": "23NrsosC7XvZ9qVyUNgSbKNLjcrxcRrBVkvftVG4mWWW9ufZRrzzwbK7mysGUBXNQT5hkmLb8doPzkaZbwFooL8R",
  "key18": "5yrfxZx5v5c87bm5qCBAa4rXLKw3bSXbCMz6Ydo56LqRHS8ZMpHR2Tx4uwygabNqTbvpY9A5kzXjpPAaGwYG5Ejx",
  "key19": "ioYY4sHHqZhy6TVCEzCJtofMwK9mqy7ZgNz4xpQBswLVZAvjKMWQtRhzKuKz1EMA7FCw6Gi7A71VBsLebkUww3M",
  "key20": "33bvSaqizXk3PLQeZPidFhfvHmq5xHqhD5gexyNhZQzzmMb3uahqHQHL6R7cm88EC3XRuDawUHvJrL8MyxYTMa3V",
  "key21": "55oaQ1hW2fdCEbxU7d52qABUiWLQ3DDt375k639XmWEus8xuwtTxZMLk8zPd5d8oapcYuKFMGZXeqvnneBpwWGoM",
  "key22": "31atAZV5T9iSzxpRtBJ7F4LCU7o1nLxqZYzSi6UpUNoipj1jDekUj8eWzuupHzk7b1YwEm6N8vXe1aRf4nWzgBjJ",
  "key23": "5usgcwKLPGjspME5h4vRPZghywyhhPpZPZVZNJBQm8PpHxVwVtumwZyewXW36PibDtxhychPAcoDxhkzHQH9fC62",
  "key24": "hhPQWNMxFfRemVnPR5jrL8yYDssbkMJGANdvPzc2ReNxKtUndzoQZ1dCdqaKPia8jhc26zjTiriCNBePJGKitvP",
  "key25": "2hmgp99h5vfA8mUHKSzsVJyhK9q4mbdoi6uBxxc3C36SrdaRrJA7UQii5m3L4YeyVUfjM6NfKP2Etf88yaYRUERt",
  "key26": "3t84YzJ36CFjyZXSZY5D2sXuteSDkfS24C2nN1kDBovCdd72Y9GQJwTUZLmpL6GUuEY8ST5xD2LDzxLc5CQJ9T84",
  "key27": "2V9Jjtraye37k3Mjpq7hUctsBTvmN4pPQvWwo7Yhhu4HVpmRM6rRKfxTBU5SQeaKyCeVyq6vxsZqG9M7v7RFQb6m",
  "key28": "N9rYVWq1v8yFuxn8d1qi2fRcB1eNKBPKSY2m1oK1BbG9nKnfU6g1bhS7qELrDSb2UEtFxPqwR9KESr4UHDZKwgR",
  "key29": "3PvYc7jeLaWMNPejGQXLjYs8GkJjLCiWDTtb8xucVjdTRXfF1FnQ6gQoojCcTNFQFZQ6Y3NRpkr9Qt77gJfkTY6H",
  "key30": "462tDvu6my88fb2mWW19zWktAhVg4CLpCMwKaFxoZQtQDndWXwXAnYf4c14EyhUM1XhMp3fMiKtx89LJLnvmJsMt",
  "key31": "2Ef9YXhcgVFZNzHNU6MFQDpNToGrNccASvhoNb9MuV5XAc5wnR9ehhppgRp8XhRStb1HFRFjzuuB8FJGkZmPPXBP",
  "key32": "4PJiMtnH8GdeNWgEWVgX5Z4WWWYg3ukoZNFcxW5G1xUEXvHq2jwhDViU21MR2keMmN9LhuDt497X79puWWKmFDcr"
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
