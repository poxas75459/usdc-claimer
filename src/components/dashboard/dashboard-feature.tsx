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
    "267Lyti2RwuCgPe62QGYhaaNg7A8vkzq5tDQsaiiGAbCP1JszP74AuLmZGM3ZrR9wMvj9CKbhBSHbYqf1XR23noK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRdZFuagBbAgxPNscAMx3QNtAmCmRzyif9QudUGdXv3osvUWwgvZDq3VUmJBsCQaUjbCGjmoYSiZVYtsTsFisv4",
  "key1": "xWNQkcbsFnJbKW8nTcWHWgdkG53fBNdk8Ku6N8oCDTULoQXMFEzeDvkFvuecSmGXUDcesEe2DscP9gRoKk6aYiU",
  "key2": "3nqPhhxxHkfKafmcSpLvFePXgyMRkVXvYNPukN6YeCG5cheA3C6ipka9Jm47e7XgXKgUxQqtnUt6NNHFNChjE7ZS",
  "key3": "2cwpmH3UTLEbVESMdaDm564KGR9fdNtjUURUFUdjL1T7AfT9NVciZ45Dj1XF2UGFgEQeR5NJCj2KH4gsXKyXwVoh",
  "key4": "48NHih7fLBFNqkiGrnrPzaeeEXEdbFfB6cbeZwbjY5Deq6CaXqVrvtcpxPKWhuhv1ut1XS7ARExXq1bQdcR3VKHQ",
  "key5": "2XzoRje3NvqmGcVZnrtVdRFawigcsFaREou1YY5HDaY1ttbZCSzrjtZqd6A5gvFoSvo8GAoiMHukLGw5Ab2q3q7Q",
  "key6": "5ABoXevcdPVS9uuPPfrV84rGd4YGvXY88VhhXxFGufGmRexXUaRmnKCm3htMQ4zrfcNqABhDkYGoyZxWyoQTmoKc",
  "key7": "2gT9tCocaGUUMSKm7auRXPfWncBN98mTZRdC9vzKaR9M3cEL29m26pgcG83RDLkaBxacFNKJrgyM5DnafzESHz1R",
  "key8": "4dBjWU1Jykc6YR1St1DeMJHp2ppXmvkWkvofvwjnkX95jSbhiLFfVVhtZyRmR5ZL4nXMsKpKjm6JugLrSGyeeXUx",
  "key9": "3wHE2e4xBJDyL3F3vzG5Q7axM1ZgJfjDvoE8yHYAS5ahb3iHQVRek1tsXQzXR8Bk2BzAM6cLpVtU8PCaAFGqYGGg",
  "key10": "5mxLcMQRMWhbAUPkSPHJvNXYWUbmcqhvKL7TGTijvBTjMmVBRT7TWGPwsscRHwB8EDYGDKLPy7Lwu674G8WDpeyU",
  "key11": "26fxGRHDMp9DoWk7siGHGFt4AkY1XoKTChHxFw7oiieLy9hJCqXRzmSHgpp8aquPFBtWdxi9PHys9DaeMPUXW99x",
  "key12": "BFf9Dsmd4AteXLu5B7VXpgkQPgxS2HgSdAzyq2xoG5jLyM2wEKtKXn2uDtCqd2goGFC2kQjoRRC6QKWPhA8av6C",
  "key13": "m2Z7Kpkb8KBxeQKVSRiXD3W1oE3jYhBf17Jx1adPmvvE3uYyivqZy8ZFuFDcyuSNTVEPvX5f5YWdbJoXtyU8X7Z",
  "key14": "2h98wBgeL4Y48snZ8BTZyvLU2Fypjh5SjvgGXjBRfnDgfxFuDLTTBbPebfxRu7TZcZnTiWzq7J1tvTx7wQMTNHdC",
  "key15": "jFYjwuC8urYj7YNQ7rj541dJvGpDAvtGhfSXvKBwqMCtes2rH4fmVP2gcFteheZPUC9Es3TcSdwAerzFvvixnsf",
  "key16": "2t8gNXBaYKsSemT8Xhe9eCtQMotsMJfsDwxuuFuRt6eCdQMLcAgso5z6fdZydoiRRWPy43MwSyh3NVfahY3sKFc8",
  "key17": "2Tw3ePpJLa7cLp2D3fLPq6BUxDEdrHeBM9qffigd7urzZQpWeMEgJJoegoeDsRxjathUXMcbzrxmSbFLsLAf1R6v",
  "key18": "Wm43fAf42uc7t7vQszFMLv6T3JWwZSShoyPm4WAfgy3yKETxAgmehGioQvttyzkhATccW8EMSntU1gKF5b75Q8f",
  "key19": "5oUMmLP23ru9vcxL44wfT6aZVGhqZE7guRxTGBh9KBsAhidMDFXnxQXJUnRr9oV7EXvTQHX7apScqsSUqAgKCxXs",
  "key20": "5nWdZ6bUpgimyx1mJEWkm4ByoVoeyj68bueex7sfrd52FiAXbwvPRBvu659ZEGDM4VRvQsr2CWjkJLAKqmEi2Z6q",
  "key21": "5MW7gXrkpcC63mQYxbMNPLJoB2AgxoSmniDtAbR91atTZYHBBLcWgbBoH4QHiUfgnKFBstqErzbzCPDoXRhwEc4J",
  "key22": "3kgcZonhgUFuiwAXWW6EAZLiXqQpgpZxjCEQJZeEMMF9T7DZFGrvAen5vHAHARHzrCRLnduqLqfjpvU2Vf6G2ksy",
  "key23": "4pWbtwPpYn2icpj1FLLsJRUhiLy9GMcNVuHXK8SCxQLZoFVxzpSt7pEAT6DMbNEF2Uqp2dyFhdBb8PxwJ7mjQxjp",
  "key24": "46TJGT7N8pbJNnRWeihD2VTzamKodxJMHgvnhgTPA7QUWAea6dNdi1gD9GeziDiiwzVHWzxKg14ZwjT4EKDo6S8D",
  "key25": "47SWarwzKRWQzUcaXQw94zyiCGUYaCPzx29EFut9PAtD51Aj6ENSaHQpQ1MTGcUvnCxXCNAYgLJ49Fq9EyzNgEUx",
  "key26": "2ja1ZCobvw9ARgJUgjXEEmWtTq3UvgeNipJbpMToNT4yEe68a5Hgfoz75XTbTShcj5pa4PqfXkvfmcy3miY29rSE",
  "key27": "3f9VxmqW6q6yFyx5KpuyxtUPL1ihqdheEezT71y2159t3q3py38mpqJXrgSrtcG2ADrinHSeXErwPgkbbdg16JTg",
  "key28": "2VF9bgWwudU5K7mN3TN3pqSKgbSFB96ebpGDrsPZpe5oEJcmjEMN8FKAmXYBitSgkgf2iQkMW4guRWnthbHAGt9N",
  "key29": "59YcJ9i5wVy9u7jn54ZSocVLd7MQeVjaEsVxAyMc3fcCW6oi6QSYXWvvrBEEv8oZzHwA7sNZGbYr5UCSH7shG9pE",
  "key30": "1YB4sxTqBsoVeuKafbPxgb3SSfPTo6tNCJjsEW8pWFopTg9P7XfQ6htPmnAwEscAF54YRBctihYsBjpkXuwzy2H",
  "key31": "52mwaActtDevPQTrUrQtSro37JwA2hvDRURz4Ju2s1sbbtFGMMJkrZbBm9v2TJdCtfP5D9nNS2GsQVB4Am4UFdsx",
  "key32": "1eHYbNPfeDyBdgJhoCPWgp2NiUQkJucFVZAZRSFshehNE5YTadxte3MYx7LaCUntYLs7vrbY1k6AB4xim4116ku",
  "key33": "4NFoE2qvx6iyJyPUwfF74HYm1Uc1HCKpbmU2iYbE5a1cnKYYhdjxnDqJargTepyuh9oRuiCVx9noxj5qrY1vZCsT",
  "key34": "cmWD9XfwcmMAiwdqiyHJmpbK9zyi9dVvQrNoRpqPw8Ds6qXD8TJ7G5NjGfPXwrEyzAGKRfmtSZgJntdi8T8Y6Zg",
  "key35": "54GpsrbsMSeYJJqndL2EGC2aMHBFC6LKhFySeiokQE6QfGcFASk9V9w65FEYJLeG3wqX634b3htSAZLivkxLpg71",
  "key36": "4kgHP2n2phJpHwZAgfozE7ejatFQzVF5v6E8GMKGC5hXGv5R7xMhM9CkUuKs6uXpAXvN9rXJkYUnVuFqP1ihxFUd",
  "key37": "5PRQcxc7wevseuqeeLdbaRJCNxeDDF7bSFBzFdeAchCc8Pe5Qqoa6Ztgph47MBcELLGmW2iVAAWMBpzJwGPQshZn",
  "key38": "5eZZDvAQrjQ7bCx2iazZSnvihPW23QD7GuqwK1NZtHcBsnXcMwPRnfXyLHSXmDzKUADJ3CLYTw8HTSubvFgMwETW"
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
