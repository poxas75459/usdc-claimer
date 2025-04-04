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
    "3XhEeWaDT94P2SQKkMQHDb95H3SE6QS5o8Q1CCguDb5TgUy1yxn8F82HeJU8ZdkgsGDNB2YM28WvBcSmYVojqqcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wrb7dV6V2yCNckF8kBhcVxCyq3jzfc141d597MYMQAvF4119nQDcVEsCQyeRsE68qmkhMh1z4Ccq4ay3i4coMX1",
  "key1": "j8dubxu8jE4RmhhwbSTDgiaTja3vicf57PK4wxFgvqYmsNbVaQK8FKfynZJu8uznQPpKzhTmYecqBLdkfzTNufY",
  "key2": "4N4oxPyhy5XYN1K4MY2HZvKeqMutb518phULdkUx2HbPkPLGA6KRsDc1WuNbmUkHpnaCCAhosWKtQLQJY4FtygDT",
  "key3": "5S1GJNaHytQCkjHHcoCN14QcwSE8YjALvPJY6gU6QfaBbxfk4qoH153M5GspLEc1Dpoie9EVZnp6TsCho8gThYkR",
  "key4": "398QMrvTC2wUXgYujmCgPFrPuuX7u36J5LCeyD5bXY85fQyxet6HxkvAwBBjfTspNbrP6Fn23HXARmeC8QBNDtxK",
  "key5": "3myBQdhCnm9nBJfD3eja8pNyVPde1orAyPYWhJBmETjoRjj4xKD1H5ikSDj9xaJpB6MP1QKnQj2ufha4TnkmuDKX",
  "key6": "3vbzm5f2VTA3hxQMgHPbzkvbE4pZHfXVCs5brFLVYZR2hNxgyQ2fugF2vX5dHkA6XmoWW5QjWa1V3s1cHbJKygg4",
  "key7": "53o5yZ1DrXqoCUKTStgTk9t4xPXkWuqbRKcHfWMA1R3SfdBoLcmg2CgkQAjBSeyp4cXr9BmXpymQb9R5VyA1DHQP",
  "key8": "BQ4PSPcTmeBEanHXWg7Dr7hvUDwLWSZa3MjyCwsQRnjtoXAz4yq6Vc22G3iS6V9ZMMTciSqsjwPGang5Y1wt71S",
  "key9": "3AbbYZKbczwfk2K7PrVpqbPbkJot3CHj5DsDiwCHx7sBNqym288fc58dDhkvztj3oaKRyop4pNYtTwLwrng4FazU",
  "key10": "3LWqywaVuvuk1m7rQetBYfBjarMXUaHcPSwzppFuNnRqnMB65LJR5LCSto8qub6jtM4uV1KbFX8RZYPZHcdUwPu3",
  "key11": "1yctE5SrkF47mvXvdALzewFG9htsVnVN7W8DwJzR7eg9wSUakST8Phqb8tSzWX1whwzLWn3sKxebXuNWYoBkaK",
  "key12": "4uzchwKGhQZDjuNZCqQfUiMYCQD8osUSie86VUv8AoHbMgYUeb1n6CRvrAefv9XAaGhfco2seMfmHoConPNpX8DW",
  "key13": "5PUdkjvW9i94P1twguYwjokazyijHpGHcreS5y75Quj5PiPp1WdUoe8erJBkJvq1Gov3Hr2xiRu486EPLiFZdL9h",
  "key14": "31K2BAhNCmEHcuvXNhuFZptC1NoqZBQXsTGBSiKAne9sMAFkKpWZSZjEGnq4QMgueUeFzHDnP6k86te9gEsP8Mu6",
  "key15": "4MgbwT6HyJB7btKozVKCUy43GpmiXnC4b6mqdT5RVAGxhrctZpVRbFZY6pbJctZXEUjtsF5r2ydVRUKN4yx1FFck",
  "key16": "eQWSgS9CUh6b6rq8vjMMBmaK5kfCKvZwhmT1ppkQUrW6ZvjDDQtoP2WTtvUcpHvCJQWWK4hCps7gQB3eurx6c6y",
  "key17": "4TNQfrFC41tNkHydDxU37PqH5PsL9j4UUtASa9TC1Q1cV1F3hDeEBVmrgjEm23hcqwpPyedTR9vt6MAVWMzZd4KZ",
  "key18": "xCpWFpZU8dHqnEdtoUan1dxxD4hnaiEY8EFEgieuPqZT6uZvqoZDQg1ioXCMPDAJKkdBp56QHdxoaD4qernZ3ph",
  "key19": "2tBXrEyjJCoUwX4mK9tsZDqKQzSBSeP9N2QW46GqcPH3J5bNJJwG9ewQmocSn1uYZq8JiURCTob13ziJ3dhKQn4V",
  "key20": "2jphZpLLisr4WNJG1ZZyQ8U9jaFDVmZgJ2HbkVVTN5krHeFyS3kxEuBc9vxe5Vz3zG8mW11pUB1GdWtPSeU6hXib",
  "key21": "3PBMbqQMKcsHnZFppSrgZautTZPFjC1vBrJLveHGCj1peLJDHJwhQEaCztxzeyoSikAaR2EDKBw9NtgCQwnTEZ88",
  "key22": "5PyxJ4JHc4GA23byHEriBA5LieqFMmUKJPH5w2yy6997u4uRnnSCvRkJf7nCJZsKJwcngwJ1yD21KTp6nGp2ZNJB",
  "key23": "2cV9hGmop1RBWENXW3seeitbkjDYpwH6fQ9TDkfrrY86t3fCGQDyG55p72wuNxtDs6RJJWCiJigtQj4qjcptTjje",
  "key24": "2SHVCBcCL7ExpoE6z7wduDcpAzcRb79fTzmwTKzQn3vCH3sndjSKWNTomrjaqDauv7XGfUJgiDrrNmXk7XQqc4XR",
  "key25": "Mq5eNaCa5DLwfttASrwNdPqVqW9gnAqWmkBYt4nTJ83U7zoZjfg3UP6byyiWK94gdWVSUvQC4wiGkAhuoQNZdR4",
  "key26": "3RjioK4geSVR6mCozwP8c88PK1NUQ6NpBWioTZwBANurikKXuAL7SEc8z5NAouF5Y1RyBqVpVZdcxvm2eX5hR4Zt",
  "key27": "5b3EwhcyYR27zgyj6uEXswGWsRvWsFiA23ebUVQdmUKR6XKLzsShBEXbGB4CFoCiyAuWycL5tD7zysCDVZqQuGri",
  "key28": "2UHtDfKFfcKfT42pV8PztanpGnbbrxjALUTc7gtvvrExn3uwgopikVPnvq27k2cxyorYYoSxG75yaVWRqikmg7G9",
  "key29": "3Pxq8gi2NdkKThdny2VZ3Q19AKhPKdkXa27kKRXwGvT2S5PU9nXDBiBgCxPRBM7MX4sGGzxXn5HXL4c7XL6yUice",
  "key30": "2VGL9qVyS3EtcADLzw7nTyJSvxcixtnAvntYhEUteLpTTuCfSfoMMHY1YWFjn6aXjTZkoY1Up9gq2fYXVrTMcBj8",
  "key31": "5UsRw8WZqS3ksRhQUtXfWFk47pfdVmu86PED7e6QRyjjXwsMp4UtHtUiEdnfENHRfbBHCr9Tki4uDYnzvGVGAtKG",
  "key32": "5vgqPXPy2z7MxXWpS1YsJz4EQNYTS4a9NUSpKZazrbymuQUgXkTyenwQ67gmHWJRNY6YHqmJXGcpkmDueb3fK6GK",
  "key33": "63G8dKhzzum2uJ9DQBtBe9RfUX1toaKw5PiUH7cg3zDukFCM1iDJmPYTZKEQbYNpmZsBuRdqtU6imAHw7gSMGarG",
  "key34": "59AmFv638x623HiRELykrmasy27QEZi75Xdc6qPi5cmHG1vq6wJGC4SLC7Wv4Xm66biVzYM9NTpwKdYN3MFeCUSa"
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
